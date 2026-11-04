const PROXY_PATH = '/http-request/proxy';
const PROXY_TOKEN_HEADER = 'x-proxy-token';
const MAX_REQUEST_BYTES = 1024 * 1024;
const MAX_RESPONSE_BYTES = 1024 * 1024;
const MAX_HEADER_COUNT = 100;
const MAX_HEADER_BYTES = 32 * 1024;
const MAX_REDIRECTS = 5;
const FETCH_TIMEOUT_MS = 30000;

const ALLOWED_METHODS = new Set([
  'GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'TRACE', 'PATCH'
]);

const BLOCKED_REQUEST_HEADERS = new Set([
  'host', 'connection', 'content-length', 'transfer-encoding', 'keep-alive',
  'proxy-authenticate', 'proxy-authorization', 'te', 'trailer', 'upgrade', 'expect',
  'accept-encoding', 'x-proxy-token',
  'cf-connecting-ip', 'cf-connecting-ipv6', 'cf-ipcountry', 'cf-ray', 'cf-visitor',
  'cf-worker', 'x-real-ip', 'x-forwarded-for', 'x-forwarded-proto', 'forwarded',
  'true-client-ip', 'cdn-loop'
]);

class ProxyError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status || 400;
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    if (pathname === PROXY_PATH) {
      return handleProxy(request, env);
    }

    // 1. 匹配路径格式: /github/:uuu/repos/:aaa/actions/:bbb.yml
    // 使用正则匹配，兼容 Pages Functions 的路由或直接根路径访问
    const match = pathname.match(/^\/github\/([^\/]+)\/repos\/([^\/]+)\/actions\/([^\/]+)$/);

    if (!match) {
      return new Response("Not Found", { status: 404 });
    }

    const [_, uuu, aaa, bbb] = match;

    // 2. 校验 pass 参数 (UUID 密钥)
    const pass = url.searchParams.get('pass');
    if (!pass || pass !== env.SECRET_PASS) {
      return new Response("Unauthorized", { status: 401 });
    }

    // 3. 提取其他所有自定义参数作为 Workflow 的 inputs
    const inputs = {};
    for (const [key, value] of url.searchParams.entries()) {
      if (key !== 'pass') {
        inputs[key] = value;
      }
    }

    // 4. 构建请求 GitHub API 的数据
    // 默认触发分支为 main，如果请求中带了 ref 参数则使用指定的 ref
    const ref = inputs['ref'] || 'main';
    delete inputs['ref'];

    const githubApiUrl = `https://api.github.com/repos/${uuu}/${aaa}/actions/workflows/${bbb}/dispatches`;

    try {
      const githubResponse = await fetch(githubApiUrl, {
        method: 'POST',
        headers: {
          'Accept': 'application/vnd.github+json',
          'Authorization': `Bearer ${env.MY_TOKEN}`,
          'X-GitHub-Api-Version': '2026-03-10',
          'User-Agent': 'Cloudflare-Worker-GitHub-Trigger'
        },
        body: JSON.stringify({
          ref: ref,
          inputs: inputs
        })
      });

      // 5. 获取 GitHub 返回的状态码和内容
      const responseStatus = githubResponse.status;
      const responseText = await githubResponse.text();

      // 将 GitHub 的响应状态码和结果直接返回给客户端
      // GitHub 成功触发通常返回 204 No Content
      return new Response(responseText, {
        status: responseStatus,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Access-Control-Allow-Origin': '*' // 可选：允许跨域
        }
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  }
};

async function handleProxy(request, env) {
  if (request.method !== 'POST') {
    return jsonResponse({ ok: false, error: '代理接口仅支持 POST 请求' }, 405);
  }

  const expectedToken = env.HTTP_PROXY_TOKEN;
  if (!expectedToken) {
    return jsonResponse({ ok: false, error: '服务端未配置 HTTP_PROXY_TOKEN 环境变量' }, 500);
  }

  const providedToken = request.headers.get(PROXY_TOKEN_HEADER) || '';
  if (!constantTimeEqual(providedToken, expectedToken)) {
    return jsonResponse({ ok: false, error: '访问口令错误或缺失' }, 401);
  }

  const declaredLength = Number(request.headers.get('content-length') || 0);
  if (declaredLength > MAX_REQUEST_BYTES) {
    return jsonResponse({ ok: false, error: '请求数据超过 1 MB 限制' }, 413);
  }

  let text;
  try {
    text = await request.text();
  } catch (error) {
    return jsonResponse({ ok: false, error: '读取请求数据失败' }, 400);
  }

  if (text.length > MAX_REQUEST_BYTES) {
    return jsonResponse({ ok: false, error: '请求数据超过 1 MB 限制' }, 413);
  }

  let payload;
  try {
    payload = JSON.parse(text);
  } catch (error) {
    return jsonResponse({ ok: false, error: '请求数据不是合法 JSON' }, 400);
  }

  const requestUrl = new URL(request.url);

  try {
    const method = typeof payload.method === 'string' ? payload.method.toUpperCase() : '';
    if (!ALLOWED_METHODS.has(method)) {
      throw new ProxyError('不支持的请求方法');
    }

    if (typeof payload.url !== 'string' || payload.url.length === 0) {
      throw new ProxyError('缺少目标 URL');
    }
    if (payload.url.length > 8192) {
      throw new ProxyError('目标 URL 过长');
    }

    let target;
    try {
      target = new URL(payload.url);
    } catch (error) {
      throw new ProxyError('目标 URL 格式不合法');
    }
    validateTarget(target, requestUrl);

    const headers = sanitizeHeaders(payload.headers);

    if (payload.body !== undefined && payload.body !== null && typeof payload.body !== 'string') {
      throw new ProxyError('请求体必须是字符串');
    }

    const noBody = method === 'GET' || method === 'HEAD' || method === 'TRACE';
    let body;
    if (!noBody && typeof payload.body === 'string' && payload.body.length > 0) {
      body = payload.body;
      if (new TextEncoder().encode(body).byteLength > MAX_REQUEST_BYTES) {
        throw new ProxyError('请求体超过 1 MB 限制', 413);
      }
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
    const onClientAbort = () => controller.abort();
    if (request.signal && typeof request.signal.addEventListener === 'function') {
      request.signal.addEventListener('abort', onClientAbort);
    }

    const startedAt = Date.now();

    try {
      let currentUrl = target;
      let currentMethod = method;
      let currentHeaders = headers;
      let currentBody = body;
      let redirects = 0;
      let response;

      while (true) {
        response = await fetch(currentUrl.href, {
          method: currentMethod,
          headers: currentHeaders,
          body: currentBody,
          redirect: 'manual',
          signal: controller.signal
        });

        if ([301, 302, 303, 307, 308].indexOf(response.status) === -1) break;

        const location = response.headers.get('Location');
        if (!location) break;

        if (redirects >= MAX_REDIRECTS) {
          await cancelBody(response);
          throw new ProxyError('重定向次数超过 ' + MAX_REDIRECTS + ' 次', 502);
        }

        let nextUrl;
        try {
          nextUrl = new URL(location, currentUrl);
        } catch (error) {
          await cancelBody(response);
          throw new ProxyError('重定向地址不合法', 502);
        }

        try {
          validateTarget(nextUrl, requestUrl);
        } catch (error) {
          await cancelBody(response);
          throw new ProxyError('重定向目标不被允许：' + error.message, 502);
        }

        await cancelBody(response);
        redirects++;

        if (nextUrl.origin !== currentUrl.origin) {
          currentHeaders = new Headers(currentHeaders);
          currentHeaders.delete('authorization');
          currentHeaders.delete('cookie');
          currentHeaders.delete('proxy-authorization');
        }

        if (response.status === 303 ||
            ((response.status === 301 || response.status === 302) && currentMethod === 'POST')) {
          currentMethod = currentMethod === 'HEAD' ? 'HEAD' : 'GET';
          currentBody = undefined;
        }

        currentUrl = nextUrl;
      }

      const elapsed = Date.now() - startedAt;
      const bytes = await readResponseBody(response);
      const contentType = response.headers.get('content-type') || '';
      const binary = isBinaryResponse(contentType, bytes);

      return jsonResponse({
        ok: true,
        status: response.status,
        statusText: response.statusText,
        url: currentUrl.href,
        redirected: redirects > 0,
        headers: collectResponseHeaders(response.headers),
        body: binary ? '' : new TextDecoder('utf-8').decode(bytes),
        binary: binary,
        size: bytes.byteLength,
        elapsed: elapsed
      });
    } finally {
      clearTimeout(timer);
      if (request.signal && typeof request.signal.removeEventListener === 'function') {
        request.signal.removeEventListener('abort', onClientAbort);
      }
    }
  } catch (error) {
    if (error instanceof ProxyError) {
      return jsonResponse({ ok: false, error: error.message }, error.status);
    }
    if (error && error.name === 'AbortError') {
      return jsonResponse({ ok: false, error: '目标接口响应超时（' + (FETCH_TIMEOUT_MS / 1000) + ' 秒）' }, 504);
    }
    return jsonResponse({
      ok: false,
      error: '请求目标接口失败：' + (error && error.message ? error.message : String(error))
    }, 502);
  }
}

function validateTarget(target, requestUrl) {
  if (target.protocol !== 'http:' && target.protocol !== 'https:') {
    throw new ProxyError('仅支持 http/https 协议');
  }

  if (target.username || target.password) {
    throw new ProxyError('目标 URL 不能包含用户名或密码');
  }

  const host = target.hostname.toLowerCase().replace(/^\[|\]$/g, '').replace(/\.$/, '');
  const ownHost = requestUrl.hostname.toLowerCase().replace(/%.*$/, '');

  if (host === ownHost) {
    throw new ProxyError('不能请求本站自身');
  }

  if (host === 'localhost' || host.endsWith('.localhost') ||
      host.endsWith('.local') || host.endsWith('.internal') || host.endsWith('.home.arpa')) {
    throw new ProxyError('不能请求本地或内部地址');
  }

  if (host.indexOf(':') !== -1 || /^\d{1,3}(\.\d{1,3}){3}$/.test(host)) {
    throw new ProxyError('不支持直接请求 IP 地址，请使用域名');
  }

  if (target.port) {
    const portAllowed =
      (target.protocol === 'http:' && target.port === '80') ||
      (target.protocol === 'https:' && target.port === '443');

    if (!portAllowed) {
      throw new ProxyError('仅支持 http 的 80 端口或 https 的 443 端口');
    }
  }
}

function sanitizeHeaders(input) {
  if (input === undefined || input === null) {
    return new Headers();
  }
  if (!Array.isArray(input) || input.length > MAX_HEADER_COUNT) {
    throw new ProxyError('请求头格式不合法或数量过多');
  }

  const headers = new Headers();
  let total = 0;

  for (const item of input) {
    if (!Array.isArray(item) || item.length !== 2) {
      throw new ProxyError('请求头格式不合法');
    }

    const name = String(item[0]).trim();
    const value = String(item[1] === undefined || item[1] === null ? '' : item[1]);

    if (!name) continue;
    if (BLOCKED_REQUEST_HEADERS.has(name.toLowerCase())) continue;

    if (!/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/.test(name)) {
      throw new ProxyError('请求头名称不合法：' + name);
    }

    total += name.length + value.length;
    if (total > MAX_HEADER_BYTES) {
      throw new ProxyError('请求头总大小超过 32 KB 限制');
    }

    try {
      headers.append(name, value);
    } catch (error) {
      throw new ProxyError('请求头不合法：' + name);
    }
  }

  return headers;
}

async function readResponseBody(response) {
  if (!response.body) {
    return new Uint8Array(0);
  }

  const reader = response.body.getReader();
  const chunks = [];
  let total = 0;

  try {
    while (true) {
      const result = await reader.read();
      if (result.done) break;

      total += result.value.byteLength;
      if (total > MAX_RESPONSE_BYTES) {
        await reader.cancel();
        throw new ProxyError('响应体超过 1 MB 限制', 502);
      }
      chunks.push(result.value);
    }
  } finally {
    try {
      reader.releaseLock();
    } catch (error) {
      // reader 已关闭
    }
  }

  const bytes = new Uint8Array(total);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  return bytes;
}

function isBinaryResponse(contentType, bytes) {
  if (bytes.byteLength === 0) return false;

  const type = (contentType.split(';')[0] || '').trim().toLowerCase();
  const textLike = type === '' ||
    type.startsWith('text/') ||
    /(json|xml|javascript|ecmascript|x-www-form-urlencoded|graphql|yaml|csv|html|svg)/.test(type);

  if (!textLike) return true;

  const sample = bytes.subarray(0, Math.min(bytes.byteLength, 512));
  for (let i = 0; i < sample.length; i++) {
    if (sample[i] === 0) return true;
  }
  return false;
}

function collectResponseHeaders(headers) {
  const result = [];
  const hasGetSetCookie = typeof headers.getSetCookie === 'function';

  headers.forEach((value, name) => {
    if (result.length >= 200) return;
    if (hasGetSetCookie && name.toLowerCase() === 'set-cookie') return;
    result.push([name, value]);
  });

  if (hasGetSetCookie) {
    for (const cookie of headers.getSetCookie()) {
      if (result.length >= 200) break;
      result.push(['set-cookie', cookie]);
    }
  }

  return result;
}

async function cancelBody(response) {
  if (response.body) {
    try {
      await response.body.cancel();
    } catch (error) {
      // 忽略取消失败
    }
  }
}

function constantTimeEqual(a, b) {
  if (typeof a !== 'string' || typeof b !== 'string') return false;

  let diff = a.length ^ b.length;
  const length = Math.max(a.length, b.length);

  for (let i = 0; i < length; i++) {
    diff |= (a.charCodeAt(i) || 0) ^ (b.charCodeAt(i) || 0);
  }

  return diff === 0;
}

function jsonResponse(data, status) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff'
    }
  });
}
