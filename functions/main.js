export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

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