var __importScript = filename=>{
    let url = filename;
    ("chrome-extension:" === location.protocol || chrome.runtime && chrome.runtime.getURL) && (url = chrome.runtime.getURL("json-format/" + filename)),
    fetch(url).then(e=>e.text()).then(jsText=>eval(jsText))
}
  , TRbignumber = function(e) {
    return function(t) {
        "use strict";
        var n, r = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, i = Math.ceil, o = Math.floor, s = " not a boolean or binary digit", a = "rounding mode", l = "number type has more than 15 significant digits", c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_", u = 1e14, f = 14, p = 9007199254740991, d = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], h = 1e7, g = 1e9;
        function m(e) {
            var t = 0 | e;
            return e > 0 || e === t ? t : t - 1
        }
        function b(e) {
            for (var t, n, r = 1, i = e.length, o = e[0] + ""; r < i; ) {
                for (t = e[r++] + "",
                n = f - t.length; n--; t = "0" + t)
                    ;
                o += t
            }
            for (i = o.length; 48 === o.charCodeAt(--i); )
                ;
            return o.slice(0, i + 1 || 1)
        }
        function y(e, t) {
            var n, r, i = e.c, o = t.c, s = e.s, a = t.s, l = e.e, c = t.e;
            if (!s || !a)
                return null;
            if (n = i && !i[0],
            r = o && !o[0],
            n || r)
                return n ? r ? 0 : -a : s;
            if (s != a)
                return s;
            if (n = s < 0,
            r = l == c,
            !i || !o)
                return r ? 0 : !i ^ n ? 1 : -1;
            if (!r)
                return l > c ^ n ? 1 : -1;
            for (a = (l = i.length) < (c = o.length) ? l : c,
            s = 0; s < a; s++)
                if (i[s] != o[s])
                    return i[s] > o[s] ^ n ? 1 : -1;
            return l == c ? 0 : l > c ^ n ? 1 : -1
        }
        function _(e, t, n) {
            return (e = v(e)) >= t && e <= n
        }
        function S(e) {
            return "[object Array]" == Object.prototype.toString.call(e)
        }
        function N(e, t, n) {
            for (var r, i, o = [0], s = 0, a = e.length; s < a; ) {
                for (i = o.length; i--; o[i] *= t)
                    ;
                for (o[r = 0] += c.indexOf(e.charAt(s++)); r < o.length; r++)
                    o[r] > n - 1 && (null == o[r + 1] && (o[r + 1] = 0),
                    o[r + 1] += o[r] / n | 0,
                    o[r] %= n)
            }
            return o.reverse()
        }
        function O(e, t) {
            return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
        }
        function w(e, t) {
            var n, r;
            if (t < 0) {
                for (r = "0."; ++t; r += "0")
                    ;
                e = r + e
            } else if (++t > (n = e.length)) {
                for (r = "0",
                t -= n; --t; r += "0")
                    ;
                e += r
            } else
                t < n && (e = e.slice(0, t) + "." + e.slice(t));
            return e
        }
        function v(e) {
            return (e = parseFloat(e)) < 0 ? i(e) : o(e)
        }
        (n = function e(t) {
            var n, E, T, x, A, k, C, R, j = 0, L = G.prototype, B = new G(1), D = 20, M = 4, F = -7, I = 21, J = -1e7, $ = 1e7, U = !0, P = z, Y = !1, H = 1, W = 0, q = {
                decimalSeparator: ".",
                groupSeparator: ",",
                groupSize: 3,
                secondaryGroupSize: 0,
                fractionGroupSeparator: " ",
                fractionGroupSize: 0
            };
            function G(e, t) {
                var n, i, s, a, u, d, h = this;
                if (!(h instanceof G))
                    return U && Z(26, "constructor call without new", e),
                    new G(e,t);
                if (null != t && P(t, 2, 64, j, "base")) {
                    if (d = e + "",
                    10 == (t |= 0))
                        return ee(h = new G(e instanceof G ? e : d), D + h.e + 1, M);
                    if ((a = "number" == typeof e) && 0 * e != 0 || !new RegExp("^-?" + (n = "[" + c.slice(0, t) + "]+") + "(?:\\." + n + ")?$",t < 37 ? "i" : "").test(d))
                        return E(h, d, a, t);
                    a ? (h.s = 1 / e < 0 ? (d = d.slice(1),
                    -1) : 1,
                    U && d.replace(/^0\.0*|\./, "").length > 15 && Z(j, l, e),
                    a = !1) : h.s = 45 === d.charCodeAt(0) ? (d = d.slice(1),
                    -1) : 1,
                    d = K(d, 10, t, h.s)
                } else {
                    if (e instanceof G)
                        return h.s = e.s,
                        h.e = e.e,
                        h.c = (e = e.c) ? e.slice() : e,
                        void (j = 0);
                    if ((a = "number" == typeof e) && 0 * e == 0) {
                        if (h.s = 1 / e < 0 ? (e = -e,
                        -1) : 1,
                        e === ~~e) {
                            for (i = 0,
                            s = e; s >= 10; s /= 10,
                            i++)
                                ;
                            return h.e = i,
                            h.c = [e],
                            void (j = 0)
                        }
                        d = e + ""
                    } else {
                        if (!r.test(d = e + ""))
                            return E(h, d, a);
                        h.s = 45 === d.charCodeAt(0) ? (d = d.slice(1),
                        -1) : 1
                    }
                }
                for ((i = d.indexOf(".")) > -1 && (d = d.replace(".", "")),
                (s = d.search(/e/i)) > 0 ? (i < 0 && (i = s),
                i += +d.slice(s + 1),
                d = d.substring(0, s)) : i < 0 && (i = d.length),
                s = 0; 48 === d.charCodeAt(s); s++)
                    ;
                for (u = d.length; 48 === d.charCodeAt(--u); )
                    ;
                if (d = d.slice(s, u + 1))
                    if (u = d.length,
                    a && U && u > 15 && (e > p || e !== o(e)) && Z(j, l, h.s * e),
                    (i = i - s - 1) > $)
                        h.c = h.e = null;
                    else if (i < J)
                        h.c = [h.e = 0];
                    else {
                        if (h.e = i,
                        h.c = [],
                        s = (i + 1) % f,
                        i < 0 && (s += f),
                        s < u) {
                            for (s && h.c.push(+d.slice(0, s)),
                            u -= f; s < u; )
                                h.c.push(+d.slice(s, s += f));
                            d = d.slice(s),
                            s = f - d.length
                        } else
                            s -= u;
                        for (; s--; d += "0")
                            ;
                        h.c.push(+d)
                    }
                else
                    h.c = [h.e = 0];
                j = 0
            }
            function K(e, t, r, i) {
                var o, s, a, l, u, f, p, d = e.indexOf("."), h = D, g = M;
                for (r < 37 && (e = e.toLowerCase()),
                d >= 0 && (a = W,
                W = 0,
                e = e.replace(".", ""),
                u = (p = new G(r)).pow(e.length - d),
                W = a,
                p.c = N(w(b(u.c), u.e), 10, t),
                p.e = p.c.length),
                s = a = (f = N(e, r, t)).length; 0 == f[--a]; f.pop())
                    ;
                if (!f[0])
                    return "0";
                if (d < 0 ? --s : (u.c = f,
                u.e = s,
                u.s = i,
                f = (u = n(u, p, h, g, t)).c,
                l = u.r,
                s = u.e),
                d = f[o = s + h + 1],
                a = t / 2,
                l = l || o < 0 || null != f[o + 1],
                l = g < 4 ? (null != d || l) && (0 == g || g == (u.s < 0 ? 3 : 2)) : d > a || d == a && (4 == g || l || 6 == g && 1 & f[o - 1] || g == (u.s < 0 ? 8 : 7)),
                o < 1 || !f[0])
                    e = l ? w("1", -h) : "0";
                else {
                    if (f.length = o,
                    l)
                        for (--t; ++f[--o] > t; )
                            f[o] = 0,
                            o || (++s,
                            f = [1].concat(f));
                    for (a = f.length; !f[--a]; )
                        ;
                    for (d = 0,
                    e = ""; d <= a; e += c.charAt(f[d++]))
                        ;
                    e = w(e, s)
                }
                return e
            }
            function V(e, t, n, r) {
                var i, o, s, l, c;
                if (n = null != n && P(n, 0, 8, r, a) ? 0 | n : M,
                !e.c)
                    return e.toString();
                if (i = e.c[0],
                s = e.e,
                null == t)
                    c = b(e.c),
                    c = 19 == r || 24 == r && s <= F ? O(c, s) : w(c, s);
                else if (o = (e = ee(new G(e), t, n)).e,
                l = (c = b(e.c)).length,
                19 == r || 24 == r && (t <= o || o <= F)) {
                    for (; l < t; c += "0",
                    l++)
                        ;
                    c = O(c, o)
                } else if (t -= s,
                c = w(c, o),
                o + 1 > l) {
                    if (--t > 0)
                        for (c += "."; t--; c += "0")
                            ;
                } else if ((t += o - l) > 0)
                    for (o + 1 == l && (c += "."); t--; c += "0")
                        ;
                return e.s < 0 && i ? "-" + c : c
            }
            function X(e, t) {
                var n, r, i = 0;
                for (S(e[0]) && (e = e[0]),
                n = new G(e[0]); ++i < e.length; ) {
                    if (!(r = new G(e[i])).s) {
                        n = r;
                        break
                    }
                    t.call(n, r) && (n = r)
                }
                return n
            }
            function z(e, t, n, r, i) {
                return (e < t || e > n || e != v(e)) && Z(r, (i || "decimal places") + (e < t || e > n ? " out of range" : " not an integer"), e),
                !0
            }
            function Q(e, t, n) {
                for (var r = 1, i = t.length; !t[--i]; t.pop())
                    ;
                for (i = t[0]; i >= 10; i /= 10,
                r++)
                    ;
                return (n = r + n * f - 1) > $ ? e.c = e.e = null : n < J ? e.c = [e.e = 0] : (e.e = n,
                e.c = t),
                e
            }
            function Z(e, t, n) {
                var r = new Error(["new BigNumber", "cmp", "config", "div", "divToInt", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "precision", "random", "round", "shift", "times", "toDigits", "toExponential", "toFixed", "toFormat", "toFraction", "pow", "toPrecision", "toString", "BigNumber"][e] + "() " + t + ": " + n);
                throw r.name = "BigNumber Error",
                j = 0,
                r
            }
            function ee(e, t, n, r) {
                var s, a, l, c, p, h, g, m = e.c, b = d;
                if (m) {
                    e: {
                        for (s = 1,
                        c = m[0]; c >= 10; c /= 10,
                        s++)
                            ;
                        if ((a = t - s) < 0)
                            a += f,
                            l = t,
                            g = (p = m[h = 0]) / b[s - l - 1] % 10 | 0;
                        else if ((h = i((a + 1) / f)) >= m.length) {
                            if (!r)
                                break e;
                            for (; m.length <= h; m.push(0))
                                ;
                            p = g = 0,
                            s = 1,
                            l = (a %= f) - f + 1
                        } else {
                            for (p = c = m[h],
                            s = 1; c >= 10; c /= 10,
                            s++)
                                ;
                            g = (l = (a %= f) - f + s) < 0 ? 0 : p / b[s - l - 1] % 10 | 0
                        }
                        if (r = r || t < 0 || null != m[h + 1] || (l < 0 ? p : p % b[s - l - 1]),
                        r = n < 4 ? (g || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : g > 5 || 5 == g && (4 == n || r || 6 == n && (a > 0 ? l > 0 ? p / b[s - l] : 0 : m[h - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)),
                        t < 1 || !m[0])
                            return m.length = 0,
                            r ? (t -= e.e + 1,
                            m[0] = b[(f - t % f) % f],
                            e.e = -t || 0) : m[0] = e.e = 0,
                            e;
                        if (0 == a ? (m.length = h,
                        c = 1,
                        h--) : (m.length = h + 1,
                        c = b[f - a],
                        m[h] = l > 0 ? o(p / b[s - l] % b[l]) * c : 0),
                        r)
                            for (; ; ) {
                                if (0 == h) {
                                    for (a = 1,
                                    l = m[0]; l >= 10; l /= 10,
                                    a++)
                                        ;
                                    for (l = m[0] += c,
                                    c = 1; l >= 10; l /= 10,
                                    c++)
                                        ;
                                    a != c && (e.e++,
                                    m[0] == u && (m[0] = 1));
                                    break
                                }
                                if (m[h] += c,
                                m[h] != u)
                                    break;
                                m[h--] = 0,
                                c = 1
                            }
                        for (a = m.length; 0 === m[--a]; m.pop())
                            ;
                    }
                    e.e > $ ? e.c = e.e = null : e.e < J && (e.c = [e.e = 0])
                }
                return e
            }
            return G.another = e,
            G.ROUND_UP = 0,
            G.ROUND_DOWN = 1,
            G.ROUND_CEIL = 2,
            G.ROUND_FLOOR = 3,
            G.ROUND_HALF_UP = 4,
            G.ROUND_HALF_DOWN = 5,
            G.ROUND_HALF_EVEN = 6,
            G.ROUND_HALF_CEIL = 7,
            G.ROUND_HALF_FLOOR = 8,
            G.EUCLID = 9,
            G.config = G.set = function() {
                var e, t, n = 0, r = {}, i = arguments, o = i[0], a = o && "object" == typeof o ? function() {
                    if (o.hasOwnProperty(t))
                        return null != (e = o[t])
                }
                : function() {
                    if (i.length > n)
                        return null != (e = i[n++])
                }
                ;
                return a(t = "DECIMAL_PLACES") && P(e, 0, g, 2, t) && (D = 0 | e),
                r[t] = D,
                a(t = "ROUNDING_MODE") && P(e, 0, 8, 2, t) && (M = 0 | e),
                r[t] = M,
                a(t = "EXPONENTIAL_AT") && (S(e) ? P(e[0], -g, 0, 2, t) && P(e[1], 0, g, 2, t) && (F = 0 | e[0],
                I = 0 | e[1]) : P(e, -g, g, 2, t) && (F = -(I = 0 | (e < 0 ? -e : e)))),
                r[t] = [F, I],
                a(t = "RANGE") && (S(e) ? P(e[0], -g, -1, 2, t) && P(e[1], 1, g, 2, t) && (J = 0 | e[0],
                $ = 0 | e[1]) : P(e, -g, g, 2, t) && (0 | e ? J = -($ = 0 | (e < 0 ? -e : e)) : U && Z(2, t + " cannot be zero", e))),
                r[t] = [J, $],
                a(t = "ERRORS") && (e === !!e || 1 === e || 0 === e ? (j = 0,
                P = (U = !!e) ? z : _) : U && Z(2, t + s, e)),
                r[t] = U,
                a(t = "CRYPTO") && (!0 === e || !1 === e || 1 === e || 0 === e ? e ? !(e = "undefined" == typeof crypto) && crypto && (crypto.getRandomValues || crypto.randomBytes) ? Y = !0 : U ? Z(2, "crypto unavailable", e ? void 0 : crypto) : Y = !1 : Y = !1 : U && Z(2, t + s, e)),
                r[t] = Y,
                a(t = "MODULO_MODE") && P(e, 0, 9, 2, t) && (H = 0 | e),
                r[t] = H,
                a(t = "POW_PRECISION") && P(e, 0, g, 2, t) && (W = 0 | e),
                r[t] = W,
                a(t = "FORMAT") && ("object" == typeof e ? q = e : U && Z(2, t + " not an object", e)),
                r[t] = q,
                r
            }
            ,
            G.max = function() {
                return X(arguments, L.lt)
            }
            ,
            G.min = function() {
                return X(arguments, L.gt)
            }
            ,
            G.random = (T = 9007199254740992 * Math.random() & 2097151 ? function() {
                return o(9007199254740992 * Math.random())
            }
            : function() {
                return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
            }
            ,
            function(e) {
                var t, n, r, s, a, l = 0, c = [], u = new G(B);
                if (e = null != e && P(e, 0, g, 14) ? 0 | e : D,
                s = i(e / f),
                Y)
                    if (crypto.getRandomValues) {
                        for (t = crypto.getRandomValues(new Uint32Array(s *= 2)); l < s; )
                            (a = 131072 * t[l] + (t[l + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)),
                            t[l] = n[0],
                            t[l + 1] = n[1]) : (c.push(a % 1e14),
                            l += 2);
                        l = s / 2
                    } else if (crypto.randomBytes) {
                        for (t = crypto.randomBytes(s *= 7); l < s; )
                            (a = 281474976710656 * (31 & t[l]) + 1099511627776 * t[l + 1] + 4294967296 * t[l + 2] + 16777216 * t[l + 3] + (t[l + 4] << 16) + (t[l + 5] << 8) + t[l + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, l) : (c.push(a % 1e14),
                            l += 7);
                        l = s / 7
                    } else
                        Y = !1,
                        U && Z(14, "crypto unavailable", crypto);
                if (!Y)
                    for (; l < s; )
                        (a = T()) < 9e15 && (c[l++] = a % 1e14);
                for (s = c[--l],
                e %= f,
                s && e && (a = d[f - e],
                c[l] = o(s / a) * a); 0 === c[l]; c.pop(),
                l--)
                    ;
                if (l < 0)
                    c = [r = 0];
                else {
                    for (r = -1; 0 === c[0]; c.splice(0, 1),
                    r -= f)
                        ;
                    for (l = 1,
                    a = c[0]; a >= 10; a /= 10,
                    l++)
                        ;
                    l < f && (r -= f - l)
                }
                return u.e = r,
                u.c = c,
                u
            }
            ),
            n = function() {
                function e(e, t, n) {
                    var r, i, o, s, a = 0, l = e.length, c = t % h, u = t / h | 0;
                    for (e = e.slice(); l--; )
                        a = ((i = c * (o = e[l] % h) + (r = u * o + (s = e[l] / h | 0) * c) % h * h + a) / n | 0) + (r / h | 0) + u * s,
                        e[l] = i % n;
                    return a && (e = [a].concat(e)),
                    e
                }
                function t(e, t, n, r) {
                    var i, o;
                    if (n != r)
                        o = n > r ? 1 : -1;
                    else
                        for (i = o = 0; i < n; i++)
                            if (e[i] != t[i]) {
                                o = e[i] > t[i] ? 1 : -1;
                                break
                            }
                    return o
                }
                function n(e, t, n, r) {
                    for (var i = 0; n--; )
                        e[n] -= i,
                        i = e[n] < t[n] ? 1 : 0,
                        e[n] = i * r + e[n] - t[n];
                    for (; !e[0] && e.length > 1; e.splice(0, 1))
                        ;
                }
                return function(r, i, s, a, l) {
                    var c, p, d, h, g, b, y, _, S, N, O, w, v, E, T, x, A, k = r.s == i.s ? 1 : -1, C = r.c, R = i.c;
                    if (!(C && C[0] && R && R[0]))
                        return new G(r.s && i.s && (C ? !R || C[0] != R[0] : R) ? C && 0 == C[0] || !R ? 0 * k : k / 0 : NaN);
                    for (S = (_ = new G(k)).c = [],
                    k = s + (p = r.e - i.e) + 1,
                    l || (l = u,
                    p = m(r.e / f) - m(i.e / f),
                    k = k / f | 0),
                    d = 0; R[d] == (C[d] || 0); d++)
                        ;
                    if (R[d] > (C[d] || 0) && p--,
                    k < 0)
                        S.push(1),
                        h = !0;
                    else {
                        for (E = C.length,
                        x = R.length,
                        d = 0,
                        k += 2,
                        (g = o(l / (R[0] + 1))) > 1 && (R = e(R, g, l),
                        C = e(C, g, l),
                        x = R.length,
                        E = C.length),
                        v = x,
                        O = (N = C.slice(0, x)).length; O < x; N[O++] = 0)
                            ;
                        A = R.slice(),
                        A = [0].concat(A),
                        T = R[0],
                        R[1] >= l / 2 && T++;
                        do {
                            if (g = 0,
                            (c = t(R, N, x, O)) < 0) {
                                if (w = N[0],
                                x != O && (w = w * l + (N[1] || 0)),
                                (g = o(w / T)) > 1)
                                    for (g >= l && (g = l - 1),
                                    y = (b = e(R, g, l)).length,
                                    O = N.length; 1 == t(b, N, y, O); )
                                        g--,
                                        n(b, x < y ? A : R, y, l),
                                        y = b.length,
                                        c = 1;
                                else
                                    0 == g && (c = g = 1),
                                    y = (b = R.slice()).length;
                                if (y < O && (b = [0].concat(b)),
                                n(N, b, O, l),
                                O = N.length,
                                -1 == c)
                                    for (; t(R, N, x, O) < 1; )
                                        g++,
                                        n(N, x < O ? A : R, O, l),
                                        O = N.length
                            } else
                                0 === c && (g++,
                                N = [0]);
                            S[d++] = g,
                            N[0] ? N[O++] = C[v] || 0 : (N = [C[v]],
                            O = 1)
                        } while ((v++ < E || null != N[0]) && k--);
                        h = null != N[0],
                        S[0] || S.splice(0, 1)
                    }
                    if (l == u) {
                        for (d = 1,
                        k = S[0]; k >= 10; k /= 10,
                        d++)
                            ;
                        ee(_, s + (_.e = d + p * f - 1) + 1, a, h)
                    } else
                        _.e = p,
                        _.r = +h;
                    return _
                }
            }(),
            x = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
            A = /^([^.]+)\.$/,
            k = /^\.([^.]+)$/,
            C = /^-?(Infinity|NaN)$/,
            R = /^\s*\+(?=[\w.])|^\s+|\s+$/g,
            E = function(e, t, n, r) {
                var i, o = n ? t : t.replace(R, "");
                if (C.test(o))
                    e.s = isNaN(o) ? null : o < 0 ? -1 : 1;
                else {
                    if (!n && (o = o.replace(x, function(e, t, n) {
                        return i = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8,
                        r && r != i ? e : t
                    }),
                    r && (i = r,
                    o = o.replace(A, "$1").replace(k, "0.$1")),
                    t != o))
                        return new G(o,i);
                    U && Z(j, "not a" + (r ? " base " + r : "") + " number", t),
                    e.s = null
                }
                e.c = e.e = null,
                j = 0
            }
            ,
            L.absoluteValue = L.abs = function() {
                var e = new G(this);
                return e.s < 0 && (e.s = 1),
                e
            }
            ,
            L.ceil = function() {
                return ee(new G(this), this.e + 1, 2)
            }
            ,
            L.comparedTo = L.cmp = function(e, t) {
                return j = 1,
                y(this, new G(e,t))
            }
            ,
            L.decimalPlaces = L.dp = function() {
                var e, t, n = this.c;
                if (!n)
                    return null;
                if (e = ((t = n.length - 1) - m(this.e / f)) * f,
                t = n[t])
                    for (; t % 10 == 0; t /= 10,
                    e--)
                        ;
                return e < 0 && (e = 0),
                e
            }
            ,
            L.dividedBy = L.div = function(e, t) {
                return j = 3,
                n(this, new G(e,t), D, M)
            }
            ,
            L.dividedToIntegerBy = L.divToInt = function(e, t) {
                return j = 4,
                n(this, new G(e,t), 0, 1)
            }
            ,
            L.equals = L.eq = function(e, t) {
                return j = 5,
                0 === y(this, new G(e,t))
            }
            ,
            L.floor = function() {
                return ee(new G(this), this.e + 1, 3)
            }
            ,
            L.greaterThan = L.gt = function(e, t) {
                return j = 6,
                y(this, new G(e,t)) > 0
            }
            ,
            L.greaterThanOrEqualTo = L.gte = function(e, t) {
                return j = 7,
                1 === (t = y(this, new G(e,t))) || 0 === t
            }
            ,
            L.isFinite = function() {
                return !!this.c
            }
            ,
            L.isInteger = L.isInt = function() {
                return !!this.c && m(this.e / f) > this.c.length - 2
            }
            ,
            L.isNaN = function() {
                return !this.s
            }
            ,
            L.isNegative = L.isNeg = function() {
                return this.s < 0
            }
            ,
            L.isZero = function() {
                return !!this.c && 0 == this.c[0]
            }
            ,
            L.lessThan = L.lt = function(e, t) {
                return j = 8,
                y(this, new G(e,t)) < 0
            }
            ,
            L.lessThanOrEqualTo = L.lte = function(e, t) {
                return j = 9,
                -1 === (t = y(this, new G(e,t))) || 0 === t
            }
            ,
            L.minus = L.sub = function(e, t) {
                var n, r, i, o, s = this, a = s.s;
                if (j = 10,
                t = (e = new G(e,t)).s,
                !a || !t)
                    return new G(NaN);
                if (a != t)
                    return e.s = -t,
                    s.plus(e);
                var l = s.e / f
                  , c = e.e / f
                  , p = s.c
                  , d = e.c;
                if (!l || !c) {
                    if (!p || !d)
                        return p ? (e.s = -t,
                        e) : new G(d ? s : NaN);
                    if (!p[0] || !d[0])
                        return d[0] ? (e.s = -t,
                        e) : new G(p[0] ? s : 3 == M ? -0 : 0)
                }
                if (l = m(l),
                c = m(c),
                p = p.slice(),
                a = l - c) {
                    for ((o = a < 0) ? (a = -a,
                    i = p) : (c = l,
                    i = d),
                    i.reverse(),
                    t = a; t--; i.push(0))
                        ;
                    i.reverse()
                } else
                    for (r = (o = (a = p.length) < (t = d.length)) ? a : t,
                    a = t = 0; t < r; t++)
                        if (p[t] != d[t]) {
                            o = p[t] < d[t];
                            break
                        }
                if (o && (i = p,
                p = d,
                d = i,
                e.s = -e.s),
                (t = (r = d.length) - (n = p.length)) > 0)
                    for (; t--; p[n++] = 0)
                        ;
                for (t = u - 1; r > a; ) {
                    if (p[--r] < d[r]) {
                        for (n = r; n && !p[--n]; p[n] = t)
                            ;
                        --p[n],
                        p[r] += u
                    }
                    p[r] -= d[r]
                }
                for (; 0 == p[0]; p.splice(0, 1),
                --c)
                    ;
                return p[0] ? Q(e, p, c) : (e.s = 3 == M ? -1 : 1,
                e.c = [e.e = 0],
                e)
            }
            ,
            L.modulo = L.mod = function(e, t) {
                var r, i, o = this;
                return j = 11,
                e = new G(e,t),
                !o.c || !e.s || e.c && !e.c[0] ? new G(NaN) : !e.c || o.c && !o.c[0] ? new G(o) : (9 == H ? (i = e.s,
                e.s = 1,
                r = n(o, e, 0, 3),
                e.s = i,
                r.s *= i) : r = n(o, e, 0, H),
                o.minus(r.times(e)))
            }
            ,
            L.negated = L.neg = function() {
                var e = new G(this);
                return e.s = -e.s || null,
                e
            }
            ,
            L.plus = L.add = function(e, t) {
                var n, r = this, i = r.s;
                if (j = 12,
                t = (e = new G(e,t)).s,
                !i || !t)
                    return new G(NaN);
                if (i != t)
                    return e.s = -t,
                    r.minus(e);
                var o = r.e / f
                  , s = e.e / f
                  , a = r.c
                  , l = e.c;
                if (!o || !s) {
                    if (!a || !l)
                        return new G(i / 0);
                    if (!a[0] || !l[0])
                        return l[0] ? e : new G(a[0] ? r : 0 * i)
                }
                if (o = m(o),
                s = m(s),
                a = a.slice(),
                i = o - s) {
                    for (i > 0 ? (s = o,
                    n = l) : (i = -i,
                    n = a),
                    n.reverse(); i--; n.push(0))
                        ;
                    n.reverse()
                }
                for ((i = a.length) - (t = l.length) < 0 && (n = l,
                l = a,
                a = n,
                t = i),
                i = 0; t; )
                    i = (a[--t] = a[t] + l[t] + i) / u | 0,
                    a[t] = u === a[t] ? 0 : a[t] % u;
                return i && (a = [i].concat(a),
                ++s),
                Q(e, a, s)
            }
            ,
            L.precision = L.sd = function(e) {
                var t, n, r = this, i = r.c;
                if (null != e && e !== !!e && 1 !== e && 0 !== e && (U && Z(13, "argument" + s, e),
                e != !!e && (e = null)),
                !i)
                    return null;
                if (t = (n = i.length - 1) * f + 1,
                n = i[n]) {
                    for (; n % 10 == 0; n /= 10,
                    t--)
                        ;
                    for (n = i[0]; n >= 10; n /= 10,
                    t++)
                        ;
                }
                return e && r.e + 1 > t && (t = r.e + 1),
                t
            }
            ,
            L.round = function(e, t) {
                var n = new G(this);
                return (null == e || P(e, 0, g, 15)) && ee(n, ~~e + this.e + 1, null != t && P(t, 0, 8, 15, a) ? 0 | t : M),
                n
            }
            ,
            L.shift = function(e) {
                var t = this;
                return P(e, -p, p, 16, "argument") ? t.times("1e" + v(e)) : new G(t.c && t.c[0] && (e < -p || e > p) ? t.s * (e < 0 ? 0 : 1 / 0) : t)
            }
            ,
            L.squareRoot = L.sqrt = function() {
                var e, t, r, i, o, s = this, a = s.c, l = s.s, c = s.e, u = D + 4, f = new G("0.5");
                if (1 !== l || !a || !a[0])
                    return new G(!l || l < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
                if (0 == (l = Math.sqrt(+s)) || l == 1 / 0 ? (((t = b(a)).length + c) % 2 == 0 && (t += "0"),
                l = Math.sqrt(t),
                c = m((c + 1) / 2) - (c < 0 || c % 2),
                r = new G(t = l == 1 / 0 ? "1e" + c : (t = l.toExponential()).slice(0, t.indexOf("e") + 1) + c)) : r = new G(l + ""),
                r.c[0])
                    for ((l = (c = r.e) + u) < 3 && (l = 0); ; )
                        if (o = r,
                        r = f.times(o.plus(n(s, o, u, 1))),
                        b(o.c).slice(0, l) === (t = b(r.c)).slice(0, l)) {
                            if (r.e < c && --l,
                            "9999" != (t = t.slice(l - 3, l + 1)) && (i || "4999" != t)) {
                                +t && (+t.slice(1) || "5" != t.charAt(0)) || (ee(r, r.e + D + 2, 1),
                                e = !r.times(r).eq(s));
                                break
                            }
                            if (!i && (ee(o, o.e + D + 2, 0),
                            o.times(o).eq(s))) {
                                r = o;
                                break
                            }
                            u += 4,
                            l += 4,
                            i = 1
                        }
                return ee(r, r.e + D + 1, M, e)
            }
            ,
            L.times = L.mul = function(e, t) {
                var n, r, i, o, s, a, l, c, p, d, g, b, y, _, S, N = this, O = N.c, w = (j = 17,
                e = new G(e,t)).c;
                if (!(O && w && O[0] && w[0]))
                    return !N.s || !e.s || O && !O[0] && !w || w && !w[0] && !O ? e.c = e.e = e.s = null : (e.s *= N.s,
                    O && w ? (e.c = [0],
                    e.e = 0) : e.c = e.e = null),
                    e;
                for (r = m(N.e / f) + m(e.e / f),
                e.s *= N.s,
                (l = O.length) < (d = w.length) && (y = O,
                O = w,
                w = y,
                i = l,
                l = d,
                d = i),
                i = l + d,
                y = []; i--; y.push(0))
                    ;
                for (_ = u,
                S = h,
                i = d; --i >= 0; ) {
                    for (n = 0,
                    g = w[i] % S,
                    b = w[i] / S | 0,
                    o = i + (s = l); o > i; )
                        n = ((c = g * (c = O[--s] % S) + (a = b * c + (p = O[s] / S | 0) * g) % S * S + y[o] + n) / _ | 0) + (a / S | 0) + b * p,
                        y[o--] = c % _;
                    y[o] = n
                }
                return n ? ++r : y.splice(0, 1),
                Q(e, y, r)
            }
            ,
            L.toDigits = function(e, t) {
                var n = new G(this);
                return e = null != e && P(e, 1, g, 18, "precision") ? 0 | e : null,
                t = null != t && P(t, 0, 8, 18, a) ? 0 | t : M,
                e ? ee(n, e, t) : n
            }
            ,
            L.toExponential = function(e, t) {
                return V(this, null != e && P(e, 0, g, 19) ? 1 + ~~e : null, t, 19)
            }
            ,
            L.toFixed = function(e, t) {
                return V(this, null != e && P(e, 0, g, 20) ? ~~e + this.e + 1 : null, t, 20)
            }
            ,
            L.toFormat = function(e, t) {
                var n = V(this, null != e && P(e, 0, g, 21) ? ~~e + this.e + 1 : null, t, 21);
                if (this.c) {
                    var r, i = n.split("."), o = +q.groupSize, s = +q.secondaryGroupSize, a = q.groupSeparator, l = i[0], c = i[1], u = this.s < 0, f = u ? l.slice(1) : l, p = f.length;
                    if (s && (r = o,
                    o = s,
                    s = r,
                    p -= r),
                    o > 0 && p > 0) {
                        for (r = p % o || o,
                        l = f.substr(0, r); r < p; r += o)
                            l += a + f.substr(r, o);
                        s > 0 && (l += a + f.slice(r)),
                        u && (l = "-" + l)
                    }
                    n = c ? l + q.decimalSeparator + ((s = +q.fractionGroupSize) ? c.replace(new RegExp("\\d{" + s + "}\\B","g"), "$&" + q.fractionGroupSeparator) : c) : l
                }
                return n
            }
            ,
            L.toFraction = function(e) {
                var t, r, i, o, s, a, l, c, u, p = U, h = this, g = h.c, m = new G(B), y = r = new G(B), _ = l = new G(B);
                if (null != e && (U = !1,
                a = new G(e),
                U = p,
                (p = a.isInt()) && !a.lt(B) || (U && Z(22, "max denominator " + (p ? "out of range" : "not an integer"), e),
                e = !p && a.c && ee(a, a.e + 1, 1).gte(B) ? a : null)),
                !g)
                    return h.toString();
                for (u = b(g),
                o = m.e = u.length - h.e - 1,
                m.c[0] = d[(s = o % f) < 0 ? f + s : s],
                e = !e || a.cmp(m) > 0 ? o > 0 ? m : y : a,
                s = $,
                $ = 1 / 0,
                a = new G(u),
                l.c[0] = 0; c = n(a, m, 0, 1),
                1 != (i = r.plus(c.times(_))).cmp(e); )
                    r = _,
                    _ = i,
                    y = l.plus(c.times(i = y)),
                    l = i,
                    m = a.minus(c.times(i = m)),
                    a = i;
                return i = n(e.minus(r), _, 0, 1),
                l = l.plus(i.times(y)),
                r = r.plus(i.times(_)),
                l.s = y.s = h.s,
                t = n(y, _, o *= 2, M).minus(h).abs().cmp(n(l, r, o, M).minus(h).abs()) < 1 ? [y.toString(), _.toString()] : [l.toString(), r.toString()],
                $ = s,
                t
            }
            ,
            L.toNumber = function() {
                return +this
            }
            ,
            L.toPower = L.pow = function(e, t) {
                var n, r, s, a = o(e < 0 ? -e : +e), l = this;
                if (null != t && (j = 23,
                t = new G(t)),
                !P(e, -p, p, 23, "exponent") && (!isFinite(e) || a > p && (e /= 0) || parseFloat(e) != e && !(e = NaN)) || 0 == e)
                    return n = Math.pow(+l, e),
                    new G(t ? n % t : n);
                for (t ? e > 1 && l.gt(B) && l.isInt() && t.gt(B) && t.isInt() ? l = l.mod(t) : (s = t,
                t = null) : W && (n = i(W / f + 2)),
                r = new G(B); ; ) {
                    if (a % 2) {
                        if (!(r = r.times(l)).c)
                            break;
                        n ? r.c.length > n && (r.c.length = n) : t && (r = r.mod(t))
                    }
                    if (!(a = o(a / 2)))
                        break;
                    l = l.times(l),
                    n ? l.c && l.c.length > n && (l.c.length = n) : t && (l = l.mod(t))
                }
                return t ? r : (e < 0 && (r = B.div(r)),
                s ? r.mod(s) : n ? ee(r, W, M) : r)
            }
            ,
            L.toPrecision = function(e, t) {
                return V(this, null != e && P(e, 1, g, 24, "precision") ? 0 | e : null, t, 24)
            }
            ,
            L.toString = function(e) {
                var t, n = this, r = n.s, i = n.e;
                return null === i ? r ? (t = "Infinity",
                r < 0 && (t = "-" + t)) : t = "NaN" : (t = b(n.c),
                t = null != e && P(e, 2, 64, 25, "base") ? K(w(t, i), 0 | e, 10, r) : i <= F || i >= I ? O(t, i) : w(t, i),
                r < 0 && n.c[0] && (t = "-" + t)),
                t
            }
            ,
            L.truncated = L.trunc = function() {
                return ee(new G(this), this.e + 1, 1)
            }
            ,
            L.valueOf = L.toJSON = function() {
                var e, t = this, n = t.e;
                return null === n ? t.toString() : (e = b(t.c),
                e = n <= F || n >= I ? O(e, n) : w(e, n),
                t.s < 0 ? "-" + e : e)
            }
            ,
            L.isBigNumber = !0,
            null != t && G.config(t),
            G
        }()).default = n.BigNumber = n,
        "function" == typeof define && define.amd ? define(function() {
            return n
        }) : void 0 !== e && e.exports ? e.exports = n : (t || (t = "undefined" != typeof self ? self : Function("return this")()),
        t.BigNumber = n)
    }(this),
    e.exports
}({
    exports: {}
})
  , TRstringify = function(e) {
    var t = {};
    return function() {
        "use strict";
        var e, n, r, i = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, o = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        function s(e) {
            return i.lastIndex = 0,
            i.test(e) ? '"' + e.replace(i, function(e) {
                var t = o[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }
        "function" != typeof t.stringify && (t.stringify = function(t, i, o) {
            var a;
            if (e = "",
            n = "",
            "number" == typeof o)
                for (a = 0; a < o; a += 1)
                    n += " ";
            else
                "string" == typeof o && (n = o);
            if (r = i,
            i && "function" != typeof i && ("object" != typeof i || "number" != typeof i.length))
                throw new Error("JSON.stringify");
            return function t(i, o) {
                var a, l, c, u, f, p = e, d = o[i], h = null != d && (d instanceof BigNumber || d.isBigNumber);
                switch (d && "object" == typeof d && "function" == typeof d.toJSON && (d = d.toJSON(i)),
                "function" == typeof r && (d = r.call(o, i, d)),
                typeof d) {
                case "string":
                    return h ? d : s(d);
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "boolean":
                case "null":
                    return String(d);
                case "object":
                    if (!d)
                        return "null";
                    if (e += n,
                    f = [],
                    "[object Array]" === Object.prototype.toString.apply(d)) {
                        for (u = d.length,
                        a = 0; a < u; a += 1)
                            f[a] = t(a, d) || "null";
                        return c = 0 === f.length ? "[]" : e ? "[\n" + e + f.join(",\n" + e) + "\n" + p + "]" : "[" + f.join(",") + "]",
                        e = p,
                        c
                    }
                    if (r && "object" == typeof r)
                        for (u = r.length,
                        a = 0; a < u; a += 1)
                            "string" == typeof r[a] && (c = t(l = r[a], d)) && f.push(s(l) + (e ? ": " : ":") + c);
                    else
                        Object.keys(d).forEach(function(n) {
                            var r = t(n, d);
                            r && f.push(s(n) + (e ? ": " : ":") + r)
                        });
                    return c = 0 === f.length ? "{}" : e ? "{\n" + e + f.join(",\n" + e) + "\n" + p + "}" : "{" + f.join(",") + "}",
                    e = p,
                    c
                }
            }("", {
                "": t
            })
        }
        )
    }(),
    e.exports = t.stringify,
    e.exports
}({
    exports: {}
})
  , TRparse = function(e) {
    return e.exports = function(e) {
        "use strict";
        var t = {
            strict: !1,
            storeAsString: !1
        };
        null != e && (!0 === e.strict && (t.strict = !0),
        !0 === e.storeAsString && (t.storeAsString = !0));
        var n, r, i, o, s = {
            '"': '"',
            "\\": "\\",
            "/": "/",
            b: "\b",
            f: "\f",
            n: "\n",
            r: "\r",
            t: "\t"
        }, a = function(e) {
            throw {
                name: "SyntaxError",
                message: e,
                at: n,
                text: i
            }
        }, l = function(e) {
            return e && e !== r && a("Expected '" + e + "' instead of '" + r + "'"),
            r = i.charAt(n),
            n += 1,
            r
        }, c = function() {
            var e, n = "";
            for ("-" === r && (n = "-",
            l("-")); r >= "0" && r <= "9"; )
                n += r,
                l();
            if ("." === r)
                for (n += "."; l() && r >= "0" && r <= "9"; )
                    n += r;
            if ("e" === r || "E" === r)
                for (n += r,
                l(),
                "-" !== r && "+" !== r || (n += r,
                l()); r >= "0" && r <= "9"; )
                    n += r,
                    l();
            if (e = +n,
            isFinite(e))
                return n.length > 15 ? !0 === t.storeAsString ? n : new BigNumber(n) : e;
            a("Bad number")
        }, u = function() {
            var e, t, n, i = "";
            if ('"' === r)
                for (; l(); ) {
                    if ('"' === r)
                        return l(),
                        i;
                    if ("\\" === r)
                        if (l(),
                        "u" === r) {
                            for (n = 0,
                            t = 0; t < 4 && (e = parseInt(l(), 16),
                            isFinite(e)); t += 1)
                                n = 16 * n + e;
                            i += String.fromCharCode(n)
                        } else {
                            if ("string" != typeof s[r])
                                break;
                            i += s[r]
                        }
                    else
                        i += r
                }
            a("Bad string")
        }, f = function() {
            for (; r && r <= " "; )
                l()
        };
        return o = function() {
            switch (f(),
            r) {
            case "{":
                return function() {
                    var e, n = {};
                    if ("{" === r) {
                        if (l("{"),
                        f(),
                        "}" === r)
                            return l("}"),
                            n;
                        for (; r; ) {
                            if (e = u(),
                            f(),
                            l(":"),
                            !0 === t.strict && Object.hasOwnProperty.call(n, e) && a('Duplicate key "' + e + '"'),
                            n[e] = o(),
                            f(),
                            "}" === r)
                                return l("}"),
                                n;
                            l(","),
                            f()
                        }
                    }
                    a("Bad object")
                }();
            case "[":
                return function() {
                    var e = [];
                    if ("[" === r) {
                        if (l("["),
                        f(),
                        "]" === r)
                            return l("]"),
                            e;
                        for (; r; ) {
                            if (e.push(o()),
                            f(),
                            "]" === r)
                                return l("]"),
                                e;
                            l(","),
                            f()
                        }
                    }
                    a("Bad array")
                }();
            case '"':
                return u();
            case "-":
                return c();
            default:
                return r >= "0" && r <= "9" ? c() : function() {
                    switch (r) {
                    case "t":
                        return l("t"),
                        l("r"),
                        l("u"),
                        l("e"),
                        !0;
                    case "f":
                        return l("f"),
                        l("a"),
                        l("l"),
                        l("s"),
                        l("e"),
                        !1;
                    case "n":
                        return l("n"),
                        l("u"),
                        l("l"),
                        l("l"),
                        null
                    }
                    a("Unexpected '" + r + "'")
                }()
            }
        }
        ,
        function(e, t) {
            var s;
            return i = e + "",
            n = 0,
            r = " ",
            s = o(),
            f(),
            r && a("Syntax error"),
            "function" == typeof t ? function e(n, r) {
                var i, o = n[r];
                return o && "object" == typeof o && Object.keys(o).forEach(function(t) {
                    void 0 !== (i = e(o, t)) ? o[t] = i : delete o[t]
                }),
                t.call(n, r, o)
            }({
                "": s
            }, "") : s
        }
    }
    ,
    e.exports
}({
    exports: {}
});
JSON.BigNumber = BigNumber = TRbignumber,
JSON.parse = TRparse(),
JSON.stringify = TRstringify,
Date.prototype.format = function(e) {
    let t = function(e, t) {
        let n = ""
          , r = e < 0
          , i = String(Math.abs(e));
        return i.length < t && (n = new Array(t - i.length + 1).join("0")),
        (r ? "-" : "") + n + i
    };
    if ("string" != typeof e)
        return this.toString();
    let n = function(t, n) {
        e = e.replace(t, n)
    }
      , r = this.getFullYear()
      , i = this.getMonth() + 1
      , o = this.getDate()
      , s = this.getHours()
      , a = this.getMinutes()
      , l = this.getSeconds()
      , c = this.getMilliseconds();
    return n(/yyyy/g, t(r, 4)),
    n(/yy/g, t(parseInt(r.toString().slice(2), 10), 2)),
    n(/MM/g, t(i, 2)),
    n(/M/g, i),
    n(/dd/g, t(o, 2)),
    n(/d/g, o),
    n(/HH/g, t(s, 2)),
    n(/H/g, s),
    n(/hh/g, t(s % 12, 2)),
    n(/h/g, s % 12),
    n(/mm/g, t(a, 2)),
    n(/m/g, a),
    n(/ss/g, t(l, 2)),
    n(/s/g, l),
    n(/SSS/g, t(c, 3)),
    n(/S/g, c),
    e
}
,
window.toast = function(e) {
    window.clearTimeout(window.feHelperAlertMsgTid);
    let t = document.querySelector("#fehelper_alertmsg");
    if (t)
        t.querySelector("p").innerHTML = e,
        t.style.display = "block";
    else {
        let n = document.createElement("div");
        n.innerHTML = '<div id="fehelper_alertmsg" style="position:fixed;bottom:25px;left:5px;z-index:1000000"><p style="background:#000;display:inline-block;color:#fff;text-align:center;padding:10px 10px;margin:0 auto;font-size:14px;border-radius:4px;">' + e + "</p></div>",
        t = n.childNodes[0],
        document.body.appendChild(t)
    }
    window.feHelperAlertMsgTid = window.setTimeout(function() {
        t.style.display = "none"
    }, 1e3)
}
,
window.Formatter = function() {
    "use strict";
    let e, t, n, r, i, o = 0, s = "", a = function() {
        (e = $("#jfContent"))[0] || (e = $('<div id="jfContent" />').appendTo("body")),
        (t = $("#jfContent_pre"))[0] || (t = $('<pre id="jfContent_pre" />').appendTo("body")),
        (n = $("#jfStyleEl"))[0] || (n = $('<style id="jfStyleEl" />').appendTo("head")),
        (i = $("#formattingMsg"))[0] || (i = $('<div id="formattingMsg"><span class="x-loading"></span>格式化中...</div>').appendTo("body"));
        try {
            e.html("").show(),
            t.html("").hide(),
            r && r.hide(),
            i.hide()
        } catch (e) {}
    }, l = function(e) {
        return e = (e = (e = (e = (e = e.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/"/g, "&quot;")).replace(/'/g, "&#039;")
    }, c = function(e) {
        let t = (new Date).format("yyyyMMddHHmmss")
          , n = new Blob([e],{
            type: "application/octet-stream"
        })
          , r = $('<button class="xjf-btn xjf-btn-right">下载JSON</button>').appendTo("#optionBar");
        "undefined" != typeof chrome && chrome.permissions ? r.click(function(e) {
            chrome.permissions.request({
                permissions: ["downloads"]
            }, e=>{
                e ? chrome.downloads.download({
                    url: URL.createObjectURL(n),
                    saveAs: !0,
                    conflictAction: "overwrite",
                    filename: "FeHelper-" + t + ".json"
                }) : toast("必须接受授权，才能正常下载！")
            }
            )
        }) : r.click(function(e) {
            let r = $("#aLinkDownload");
            r[0] || ((r = $('<a id="aLinkDownload" target="_blank" title="保存到本地">下载JSON数据</a>').appendTo("body")).attr("download", "FeHelper-" + t + ".json"),
            r.attr("href", URL.createObjectURL(n))),
            r[0].click()
        })
    }, u = function(e) {
        let t = e.text().replace(/复制\|下载\|删除/gm, "").replace(/":\s/gm, '":').replace(/,$/, "").trim();
        /^{/.test(t) && /\}$/.test(t) || /^\[/.test(t) && /\]$/.test(t) || (t = "{" + t + "}");
        try {
            t = JSON.stringify(JSON.parse(t), null, 4)
        } catch (e) {}
        return t
    }, f = function(e, t) {
        let n = function(t) {
            t.stopPropagation();
            let n = u(e)
              , r = (new Date).format("yyyyMMddHHmmss")
              , i = new Blob([n],{
                type: "application/octet-stream"
            });
            "undefined" != typeof chrome && chrome.permissions ? chrome.permissions.request({
                permissions: ["downloads"]
            }, e=>{
                e ? chrome.downloads.download({
                    url: URL.createObjectURL(i),
                    saveAs: !0,
                    conflictAction: "overwrite",
                    filename: "FeHelper-" + r + ".json"
                }) : toast("必须接受授权，才能正常下载！")
            }
            ) : $(this).attr("download", "FeHelper-" + r + ".json").attr("href", URL.createObjectURL(i))
        }
          , i = function(t) {
            t.stopPropagation(),
            function(e) {
                let t = document.createElement("textarea");
                t.style.position = "fixed",
                t.style.opacity = 0,
                t.value = e,
                document.body.appendChild(t),
                t.select(),
                document.execCommand("Copy"),
                document.body.removeChild(t),
                toast("Json片段复制成功，随处粘贴可用！")
            }(u(e))
        }
          , o = function(t) {
            if (t.stopPropagation(),
            e.parent().is("#formattedJson"))
                return toast("如果连最外层的Json也删掉的话，就没啥意义了哦！"),
                !1;
            toast("节点已删除成功！"),
            e.remove(),
            r && r.hide()
        };
        if ($(".boxOpt").hide(),
        t) {
            let t = e.children(".boxOpt");
            t.length ? t.show() : t = $('<b class="boxOpt"><a class="opt-copy" title="复制当前选中节点的JSON数据">复制</a>|<a class="opt-download" target="_blank" title="下载当前选中节点的JSON数据">下载</a>|<a class="opt-del" title="删除当前选中节点的JSON数据">删除</a></b>').appendTo(e),
            t.find("a.opt-download").unbind("click").bind("click", n),
            t.find("a.opt-copy").unbind("click").bind("click", i),
            t.find("a.opt-del").unbind("click").bind("click", o)
        }
    }, p = function(e, t) {
        r || (r = $('<div id="statusBar"/>').appendTo("body")),
        t ? (r.show(),
        function(e) {
            let t = [];
            do {
                if (e.hasClass("item-block")) {
                    if (e.hasClass("rootItem"))
                        break;
                    t.unshift("[" + e.prevAll(".item").length + "]")
                } else
                    t.unshift(e.find(">.key").text());
                if (e.parent().hasClass("rootItem") || e.parent().parent().hasClass("rootItem"))
                    break;
                e = e.parent().parent()
            } while (e.length && !e.hasClass("rootItem"));
            let n = t.join("#@#").replace(/#@#\[/g, "[").replace(/#@#/g, ".")
              , i = $("#jsonPath");
            i.length || (i = $('<span id="jsonPath"/>').prependTo(r)),
            i.html("当前节点：JSON." + n)
        }(e)) : r.hide()
    };
    function d(e) {
        let t;
        $.each(e, function(e) {
            if ((t = $(this)).children(".kv-list").length && (t.addClass("collapsed"),
            !t.attr("id"))) {
                t.attr("id", "item" + ++o);
                let e = t.children(".kv-list").eq(0).children().length
                  , r = e + (1 === e ? " item" : " items");
                n[0].insertAdjacentHTML("beforeend", "\n#item" + o + '.collapsed:after{color: #aaa; content:" // ' + r + '"}')
            }
        })
    }
    let h = function() {
        let n = $("#optionBar");
        n.length ? n.html("") : n = $('<span id="optionBar" />').appendTo(e.parent()),
        $('<span class="x-split">|</span>').appendTo(n);
        let i = $('<button class="xjf-btn xjf-btn-left">元数据</button>').appendTo(n)
          , o = $('<button class="xjf-btn xjf-btn-mid">折叠所有</button>').appendTo(n)
          , s = !1;
        i.bind("click", function(n) {
            s ? (s = !1,
            t.hide(),
            e.show(),
            i.text("元数据")) : (s = !0,
            t.show(),
            e.hide(),
            i.text("格式化")),
            r && r.hide()
        }),
        o.bind("click", function(e) {
            s && i.trigger("click"),
            "折叠所有" === o.text() ? (o.text("展开所有"),
            d($(".item-object,.item-block"))) : (o.text("折叠所有"),
            $(".item-object,.item-block").removeClass("collapsed")),
            r && r.hide()
        })
    }
      , g = function() {
        $("#jfContent span.expand").bind("click", function(e) {
            e.preventDefault(),
            e.stopPropagation();
            let t = $(this).parent();
            t.toggleClass("collapsed"),
            t.hasClass("collapsed") && d(t)
        }),
        $("#jfContent .item").bind("click", function(e) {
            let t = $(this);
            if (t.hasClass("x-selected"))
                return p(t, !1),
                f(t, !1),
                t.removeClass("x-selected"),
                e.stopPropagation(),
                !0;
            $(".x-selected").removeClass("x-selected"),
            t.addClass("x-selected"),
            p(t, !0),
            f(t, !0),
            $(e.target).is(".item .expand") ? $(e.target).parent().trigger("click") : e.stopPropagation(),
            "function" == typeof window._OnJsonItemClickByFH && window._OnJsonItemClickByFH(u(t))
        })
    };
    return {
        format: function(n, r) {
            s = JSON.stringify(JSON.parse(n), null, 4),
            a(),
            t.html(l(s));
            let o = new Worker(URL.createObjectURL(new Blob(["(" + JsonFormatWebWorker.toString() + ")()"],{
                type: "text/javascript"
            })));
            o.onmessage = function(t) {
                let n = t.data;
                switch (n[0]) {
                case "FORMATTING":
                    i.show();
                    break;
                case "FORMATTED":
                    i.hide(),
                    e.html(n[1]),
                    h(),
                    g(),
                    c(s)
                }
            }
            ,
            o.postMessage({
                jsonString: n,
                skin: r
            })
        },
        formatSync: function(n, r) {
            s = JSON.stringify(JSON.parse(n), null, 4),
            a(),
            t.html(l(s)),
            (new JsonFormatWebWorker).getFormattedHtml({
                data: {
                    jsonString: n,
                    skin: r
                },
                onFormatting: function(e) {
                    i.show()
                },
                onFormatted: function(t) {
                    i.hide(),
                    e.html(t[1]),
                    h(),
                    g(),
                    c(s)
                }
            })
        }
    }
}();
var JsonFormatWebWorker = function() {
    let __importScript = filename=>{
        this.compress && fetch(filename).then(e=>e.text()).then(jsText=>eval(jsText))
    }
    ;
    var TRbignumber = function(e) {
        return function(t) {
            "use strict";
            var n, r = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, i = Math.ceil, o = Math.floor, s = " not a boolean or binary digit", a = "rounding mode", l = "number type has more than 15 significant digits", c = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_", u = 1e14, f = 14, p = 9007199254740991, d = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13], h = 1e7, g = 1e9;
            function m(e) {
                var t = 0 | e;
                return e > 0 || e === t ? t : t - 1
            }
            function b(e) {
                for (var t, n, r = 1, i = e.length, o = e[0] + ""; r < i; ) {
                    for (t = e[r++] + "",
                    n = f - t.length; n--; t = "0" + t)
                        ;
                    o += t
                }
                for (i = o.length; 48 === o.charCodeAt(--i); )
                    ;
                return o.slice(0, i + 1 || 1)
            }
            function y(e, t) {
                var n, r, i = e.c, o = t.c, s = e.s, a = t.s, l = e.e, c = t.e;
                if (!s || !a)
                    return null;
                if (n = i && !i[0],
                r = o && !o[0],
                n || r)
                    return n ? r ? 0 : -a : s;
                if (s != a)
                    return s;
                if (n = s < 0,
                r = l == c,
                !i || !o)
                    return r ? 0 : !i ^ n ? 1 : -1;
                if (!r)
                    return l > c ^ n ? 1 : -1;
                for (a = (l = i.length) < (c = o.length) ? l : c,
                s = 0; s < a; s++)
                    if (i[s] != o[s])
                        return i[s] > o[s] ^ n ? 1 : -1;
                return l == c ? 0 : l > c ^ n ? 1 : -1
            }
            function _(e, t, n) {
                return (e = v(e)) >= t && e <= n
            }
            function S(e) {
                return "[object Array]" == Object.prototype.toString.call(e)
            }
            function N(e, t, n) {
                for (var r, i, o = [0], s = 0, a = e.length; s < a; ) {
                    for (i = o.length; i--; o[i] *= t)
                        ;
                    for (o[r = 0] += c.indexOf(e.charAt(s++)); r < o.length; r++)
                        o[r] > n - 1 && (null == o[r + 1] && (o[r + 1] = 0),
                        o[r + 1] += o[r] / n | 0,
                        o[r] %= n)
                }
                return o.reverse()
            }
            function O(e, t) {
                return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
            }
            function w(e, t) {
                var n, r;
                if (t < 0) {
                    for (r = "0."; ++t; r += "0")
                        ;
                    e = r + e
                } else if (++t > (n = e.length)) {
                    for (r = "0",
                    t -= n; --t; r += "0")
                        ;
                    e += r
                } else
                    t < n && (e = e.slice(0, t) + "." + e.slice(t));
                return e
            }
            function v(e) {
                return (e = parseFloat(e)) < 0 ? i(e) : o(e)
            }
            (n = function e(t) {
                var n, E, T, x, A, k, C, R, j = 0, L = G.prototype, B = new G(1), D = 20, M = 4, F = -7, I = 21, J = -1e7, $ = 1e7, U = !0, P = z, Y = !1, H = 1, W = 0, q = {
                    decimalSeparator: ".",
                    groupSeparator: ",",
                    groupSize: 3,
                    secondaryGroupSize: 0,
                    fractionGroupSeparator: " ",
                    fractionGroupSize: 0
                };
                function G(e, t) {
                    var n, i, s, a, u, d, h = this;
                    if (!(h instanceof G))
                        return U && Z(26, "constructor call without new", e),
                        new G(e,t);
                    if (null != t && P(t, 2, 64, j, "base")) {
                        if (d = e + "",
                        10 == (t |= 0))
                            return ee(h = new G(e instanceof G ? e : d), D + h.e + 1, M);
                        if ((a = "number" == typeof e) && 0 * e != 0 || !new RegExp("^-?" + (n = "[" + c.slice(0, t) + "]+") + "(?:\\." + n + ")?$",t < 37 ? "i" : "").test(d))
                            return E(h, d, a, t);
                        a ? (h.s = 1 / e < 0 ? (d = d.slice(1),
                        -1) : 1,
                        U && d.replace(/^0\.0*|\./, "").length > 15 && Z(j, l, e),
                        a = !1) : h.s = 45 === d.charCodeAt(0) ? (d = d.slice(1),
                        -1) : 1,
                        d = K(d, 10, t, h.s)
                    } else {
                        if (e instanceof G)
                            return h.s = e.s,
                            h.e = e.e,
                            h.c = (e = e.c) ? e.slice() : e,
                            void (j = 0);
                        if ((a = "number" == typeof e) && 0 * e == 0) {
                            if (h.s = 1 / e < 0 ? (e = -e,
                            -1) : 1,
                            e === ~~e) {
                                for (i = 0,
                                s = e; s >= 10; s /= 10,
                                i++)
                                    ;
                                return h.e = i,
                                h.c = [e],
                                void (j = 0)
                            }
                            d = e + ""
                        } else {
                            if (!r.test(d = e + ""))
                                return E(h, d, a);
                            h.s = 45 === d.charCodeAt(0) ? (d = d.slice(1),
                            -1) : 1
                        }
                    }
                    for ((i = d.indexOf(".")) > -1 && (d = d.replace(".", "")),
                    (s = d.search(/e/i)) > 0 ? (i < 0 && (i = s),
                    i += +d.slice(s + 1),
                    d = d.substring(0, s)) : i < 0 && (i = d.length),
                    s = 0; 48 === d.charCodeAt(s); s++)
                        ;
                    for (u = d.length; 48 === d.charCodeAt(--u); )
                        ;
                    if (d = d.slice(s, u + 1))
                        if (u = d.length,
                        a && U && u > 15 && (e > p || e !== o(e)) && Z(j, l, h.s * e),
                        (i = i - s - 1) > $)
                            h.c = h.e = null;
                        else if (i < J)
                            h.c = [h.e = 0];
                        else {
                            if (h.e = i,
                            h.c = [],
                            s = (i + 1) % f,
                            i < 0 && (s += f),
                            s < u) {
                                for (s && h.c.push(+d.slice(0, s)),
                                u -= f; s < u; )
                                    h.c.push(+d.slice(s, s += f));
                                d = d.slice(s),
                                s = f - d.length
                            } else
                                s -= u;
                            for (; s--; d += "0")
                                ;
                            h.c.push(+d)
                        }
                    else
                        h.c = [h.e = 0];
                    j = 0
                }
                function K(e, t, r, i) {
                    var o, s, a, l, u, f, p, d = e.indexOf("."), h = D, g = M;
                    for (r < 37 && (e = e.toLowerCase()),
                    d >= 0 && (a = W,
                    W = 0,
                    e = e.replace(".", ""),
                    u = (p = new G(r)).pow(e.length - d),
                    W = a,
                    p.c = N(w(b(u.c), u.e), 10, t),
                    p.e = p.c.length),
                    s = a = (f = N(e, r, t)).length; 0 == f[--a]; f.pop())
                        ;
                    if (!f[0])
                        return "0";
                    if (d < 0 ? --s : (u.c = f,
                    u.e = s,
                    u.s = i,
                    f = (u = n(u, p, h, g, t)).c,
                    l = u.r,
                    s = u.e),
                    d = f[o = s + h + 1],
                    a = t / 2,
                    l = l || o < 0 || null != f[o + 1],
                    l = g < 4 ? (null != d || l) && (0 == g || g == (u.s < 0 ? 3 : 2)) : d > a || d == a && (4 == g || l || 6 == g && 1 & f[o - 1] || g == (u.s < 0 ? 8 : 7)),
                    o < 1 || !f[0])
                        e = l ? w("1", -h) : "0";
                    else {
                        if (f.length = o,
                        l)
                            for (--t; ++f[--o] > t; )
                                f[o] = 0,
                                o || (++s,
                                f = [1].concat(f));
                        for (a = f.length; !f[--a]; )
                            ;
                        for (d = 0,
                        e = ""; d <= a; e += c.charAt(f[d++]))
                            ;
                        e = w(e, s)
                    }
                    return e
                }
                function V(e, t, n, r) {
                    var i, o, s, l, c;
                    if (n = null != n && P(n, 0, 8, r, a) ? 0 | n : M,
                    !e.c)
                        return e.toString();
                    if (i = e.c[0],
                    s = e.e,
                    null == t)
                        c = b(e.c),
                        c = 19 == r || 24 == r && s <= F ? O(c, s) : w(c, s);
                    else if (o = (e = ee(new G(e), t, n)).e,
                    l = (c = b(e.c)).length,
                    19 == r || 24 == r && (t <= o || o <= F)) {
                        for (; l < t; c += "0",
                        l++)
                            ;
                        c = O(c, o)
                    } else if (t -= s,
                    c = w(c, o),
                    o + 1 > l) {
                        if (--t > 0)
                            for (c += "."; t--; c += "0")
                                ;
                    } else if ((t += o - l) > 0)
                        for (o + 1 == l && (c += "."); t--; c += "0")
                            ;
                    return e.s < 0 && i ? "-" + c : c
                }
                function X(e, t) {
                    var n, r, i = 0;
                    for (S(e[0]) && (e = e[0]),
                    n = new G(e[0]); ++i < e.length; ) {
                        if (!(r = new G(e[i])).s) {
                            n = r;
                            break
                        }
                        t.call(n, r) && (n = r)
                    }
                    return n
                }
                function z(e, t, n, r, i) {
                    return (e < t || e > n || e != v(e)) && Z(r, (i || "decimal places") + (e < t || e > n ? " out of range" : " not an integer"), e),
                    !0
                }
                function Q(e, t, n) {
                    for (var r = 1, i = t.length; !t[--i]; t.pop())
                        ;
                    for (i = t[0]; i >= 10; i /= 10,
                    r++)
                        ;
                    return (n = r + n * f - 1) > $ ? e.c = e.e = null : n < J ? e.c = [e.e = 0] : (e.e = n,
                    e.c = t),
                    e
                }
                function Z(e, t, n) {
                    var r = new Error(["new BigNumber", "cmp", "config", "div", "divToInt", "eq", "gt", "gte", "lt", "lte", "minus", "mod", "plus", "precision", "random", "round", "shift", "times", "toDigits", "toExponential", "toFixed", "toFormat", "toFraction", "pow", "toPrecision", "toString", "BigNumber"][e] + "() " + t + ": " + n);
                    throw r.name = "BigNumber Error",
                    j = 0,
                    r
                }
                function ee(e, t, n, r) {
                    var s, a, l, c, p, h, g, m = e.c, b = d;
                    if (m) {
                        e: {
                            for (s = 1,
                            c = m[0]; c >= 10; c /= 10,
                            s++)
                                ;
                            if ((a = t - s) < 0)
                                a += f,
                                l = t,
                                g = (p = m[h = 0]) / b[s - l - 1] % 10 | 0;
                            else if ((h = i((a + 1) / f)) >= m.length) {
                                if (!r)
                                    break e;
                                for (; m.length <= h; m.push(0))
                                    ;
                                p = g = 0,
                                s = 1,
                                l = (a %= f) - f + 1
                            } else {
                                for (p = c = m[h],
                                s = 1; c >= 10; c /= 10,
                                s++)
                                    ;
                                g = (l = (a %= f) - f + s) < 0 ? 0 : p / b[s - l - 1] % 10 | 0
                            }
                            if (r = r || t < 0 || null != m[h + 1] || (l < 0 ? p : p % b[s - l - 1]),
                            r = n < 4 ? (g || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : g > 5 || 5 == g && (4 == n || r || 6 == n && (a > 0 ? l > 0 ? p / b[s - l] : 0 : m[h - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)),
                            t < 1 || !m[0])
                                return m.length = 0,
                                r ? (t -= e.e + 1,
                                m[0] = b[(f - t % f) % f],
                                e.e = -t || 0) : m[0] = e.e = 0,
                                e;
                            if (0 == a ? (m.length = h,
                            c = 1,
                            h--) : (m.length = h + 1,
                            c = b[f - a],
                            m[h] = l > 0 ? o(p / b[s - l] % b[l]) * c : 0),
                            r)
                                for (; ; ) {
                                    if (0 == h) {
                                        for (a = 1,
                                        l = m[0]; l >= 10; l /= 10,
                                        a++)
                                            ;
                                        for (l = m[0] += c,
                                        c = 1; l >= 10; l /= 10,
                                        c++)
                                            ;
                                        a != c && (e.e++,
                                        m[0] == u && (m[0] = 1));
                                        break
                                    }
                                    if (m[h] += c,
                                    m[h] != u)
                                        break;
                                    m[h--] = 0,
                                    c = 1
                                }
                            for (a = m.length; 0 === m[--a]; m.pop())
                                ;
                        }
                        e.e > $ ? e.c = e.e = null : e.e < J && (e.c = [e.e = 0])
                    }
                    return e
                }
                return G.another = e,
                G.ROUND_UP = 0,
                G.ROUND_DOWN = 1,
                G.ROUND_CEIL = 2,
                G.ROUND_FLOOR = 3,
                G.ROUND_HALF_UP = 4,
                G.ROUND_HALF_DOWN = 5,
                G.ROUND_HALF_EVEN = 6,
                G.ROUND_HALF_CEIL = 7,
                G.ROUND_HALF_FLOOR = 8,
                G.EUCLID = 9,
                G.config = G.set = function() {
                    var e, t, n = 0, r = {}, i = arguments, o = i[0], a = o && "object" == typeof o ? function() {
                        if (o.hasOwnProperty(t))
                            return null != (e = o[t])
                    }
                    : function() {
                        if (i.length > n)
                            return null != (e = i[n++])
                    }
                    ;
                    return a(t = "DECIMAL_PLACES") && P(e, 0, g, 2, t) && (D = 0 | e),
                    r[t] = D,
                    a(t = "ROUNDING_MODE") && P(e, 0, 8, 2, t) && (M = 0 | e),
                    r[t] = M,
                    a(t = "EXPONENTIAL_AT") && (S(e) ? P(e[0], -g, 0, 2, t) && P(e[1], 0, g, 2, t) && (F = 0 | e[0],
                    I = 0 | e[1]) : P(e, -g, g, 2, t) && (F = -(I = 0 | (e < 0 ? -e : e)))),
                    r[t] = [F, I],
                    a(t = "RANGE") && (S(e) ? P(e[0], -g, -1, 2, t) && P(e[1], 1, g, 2, t) && (J = 0 | e[0],
                    $ = 0 | e[1]) : P(e, -g, g, 2, t) && (0 | e ? J = -($ = 0 | (e < 0 ? -e : e)) : U && Z(2, t + " cannot be zero", e))),
                    r[t] = [J, $],
                    a(t = "ERRORS") && (e === !!e || 1 === e || 0 === e ? (j = 0,
                    P = (U = !!e) ? z : _) : U && Z(2, t + s, e)),
                    r[t] = U,
                    a(t = "CRYPTO") && (!0 === e || !1 === e || 1 === e || 0 === e ? e ? !(e = "undefined" == typeof crypto) && crypto && (crypto.getRandomValues || crypto.randomBytes) ? Y = !0 : U ? Z(2, "crypto unavailable", e ? void 0 : crypto) : Y = !1 : Y = !1 : U && Z(2, t + s, e)),
                    r[t] = Y,
                    a(t = "MODULO_MODE") && P(e, 0, 9, 2, t) && (H = 0 | e),
                    r[t] = H,
                    a(t = "POW_PRECISION") && P(e, 0, g, 2, t) && (W = 0 | e),
                    r[t] = W,
                    a(t = "FORMAT") && ("object" == typeof e ? q = e : U && Z(2, t + " not an object", e)),
                    r[t] = q,
                    r
                }
                ,
                G.max = function() {
                    return X(arguments, L.lt)
                }
                ,
                G.min = function() {
                    return X(arguments, L.gt)
                }
                ,
                G.random = (T = 9007199254740992 * Math.random() & 2097151 ? function() {
                    return o(9007199254740992 * Math.random())
                }
                : function() {
                    return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                }
                ,
                function(e) {
                    var t, n, r, s, a, l = 0, c = [], u = new G(B);
                    if (e = null != e && P(e, 0, g, 14) ? 0 | e : D,
                    s = i(e / f),
                    Y)
                        if (crypto.getRandomValues) {
                            for (t = crypto.getRandomValues(new Uint32Array(s *= 2)); l < s; )
                                (a = 131072 * t[l] + (t[l + 1] >>> 11)) >= 9e15 ? (n = crypto.getRandomValues(new Uint32Array(2)),
                                t[l] = n[0],
                                t[l + 1] = n[1]) : (c.push(a % 1e14),
                                l += 2);
                            l = s / 2
                        } else if (crypto.randomBytes) {
                            for (t = crypto.randomBytes(s *= 7); l < s; )
                                (a = 281474976710656 * (31 & t[l]) + 1099511627776 * t[l + 1] + 4294967296 * t[l + 2] + 16777216 * t[l + 3] + (t[l + 4] << 16) + (t[l + 5] << 8) + t[l + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, l) : (c.push(a % 1e14),
                                l += 7);
                            l = s / 7
                        } else
                            Y = !1,
                            U && Z(14, "crypto unavailable", crypto);
                    if (!Y)
                        for (; l < s; )
                            (a = T()) < 9e15 && (c[l++] = a % 1e14);
                    for (s = c[--l],
                    e %= f,
                    s && e && (a = d[f - e],
                    c[l] = o(s / a) * a); 0 === c[l]; c.pop(),
                    l--)
                        ;
                    if (l < 0)
                        c = [r = 0];
                    else {
                        for (r = -1; 0 === c[0]; c.splice(0, 1),
                        r -= f)
                            ;
                        for (l = 1,
                        a = c[0]; a >= 10; a /= 10,
                        l++)
                            ;
                        l < f && (r -= f - l)
                    }
                    return u.e = r,
                    u.c = c,
                    u
                }
                ),
                n = function() {
                    function e(e, t, n) {
                        var r, i, o, s, a = 0, l = e.length, c = t % h, u = t / h | 0;
                        for (e = e.slice(); l--; )
                            a = ((i = c * (o = e[l] % h) + (r = u * o + (s = e[l] / h | 0) * c) % h * h + a) / n | 0) + (r / h | 0) + u * s,
                            e[l] = i % n;
                        return a && (e = [a].concat(e)),
                        e
                    }
                    function t(e, t, n, r) {
                        var i, o;
                        if (n != r)
                            o = n > r ? 1 : -1;
                        else
                            for (i = o = 0; i < n; i++)
                                if (e[i] != t[i]) {
                                    o = e[i] > t[i] ? 1 : -1;
                                    break
                                }
                        return o
                    }
                    function n(e, t, n, r) {
                        for (var i = 0; n--; )
                            e[n] -= i,
                            i = e[n] < t[n] ? 1 : 0,
                            e[n] = i * r + e[n] - t[n];
                        for (; !e[0] && e.length > 1; e.splice(0, 1))
                            ;
                    }
                    return function(r, i, s, a, l) {
                        var c, p, d, h, g, b, y, _, S, N, O, w, v, E, T, x, A, k = r.s == i.s ? 1 : -1, C = r.c, R = i.c;
                        if (!(C && C[0] && R && R[0]))
                            return new G(r.s && i.s && (C ? !R || C[0] != R[0] : R) ? C && 0 == C[0] || !R ? 0 * k : k / 0 : NaN);
                        for (S = (_ = new G(k)).c = [],
                        k = s + (p = r.e - i.e) + 1,
                        l || (l = u,
                        p = m(r.e / f) - m(i.e / f),
                        k = k / f | 0),
                        d = 0; R[d] == (C[d] || 0); d++)
                            ;
                        if (R[d] > (C[d] || 0) && p--,
                        k < 0)
                            S.push(1),
                            h = !0;
                        else {
                            for (E = C.length,
                            x = R.length,
                            d = 0,
                            k += 2,
                            (g = o(l / (R[0] + 1))) > 1 && (R = e(R, g, l),
                            C = e(C, g, l),
                            x = R.length,
                            E = C.length),
                            v = x,
                            O = (N = C.slice(0, x)).length; O < x; N[O++] = 0)
                                ;
                            A = R.slice(),
                            A = [0].concat(A),
                            T = R[0],
                            R[1] >= l / 2 && T++;
                            do {
                                if (g = 0,
                                (c = t(R, N, x, O)) < 0) {
                                    if (w = N[0],
                                    x != O && (w = w * l + (N[1] || 0)),
                                    (g = o(w / T)) > 1)
                                        for (g >= l && (g = l - 1),
                                        y = (b = e(R, g, l)).length,
                                        O = N.length; 1 == t(b, N, y, O); )
                                            g--,
                                            n(b, x < y ? A : R, y, l),
                                            y = b.length,
                                            c = 1;
                                    else
                                        0 == g && (c = g = 1),
                                        y = (b = R.slice()).length;
                                    if (y < O && (b = [0].concat(b)),
                                    n(N, b, O, l),
                                    O = N.length,
                                    -1 == c)
                                        for (; t(R, N, x, O) < 1; )
                                            g++,
                                            n(N, x < O ? A : R, O, l),
                                            O = N.length
                                } else
                                    0 === c && (g++,
                                    N = [0]);
                                S[d++] = g,
                                N[0] ? N[O++] = C[v] || 0 : (N = [C[v]],
                                O = 1)
                            } while ((v++ < E || null != N[0]) && k--);
                            h = null != N[0],
                            S[0] || S.splice(0, 1)
                        }
                        if (l == u) {
                            for (d = 1,
                            k = S[0]; k >= 10; k /= 10,
                            d++)
                                ;
                            ee(_, s + (_.e = d + p * f - 1) + 1, a, h)
                        } else
                            _.e = p,
                            _.r = +h;
                        return _
                    }
                }(),
                x = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                A = /^([^.]+)\.$/,
                k = /^\.([^.]+)$/,
                C = /^-?(Infinity|NaN)$/,
                R = /^\s*\+(?=[\w.])|^\s+|\s+$/g,
                E = function(e, t, n, r) {
                    var i, o = n ? t : t.replace(R, "");
                    if (C.test(o))
                        e.s = isNaN(o) ? null : o < 0 ? -1 : 1;
                    else {
                        if (!n && (o = o.replace(x, function(e, t, n) {
                            return i = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8,
                            r && r != i ? e : t
                        }),
                        r && (i = r,
                        o = o.replace(A, "$1").replace(k, "0.$1")),
                        t != o))
                            return new G(o,i);
                        U && Z(j, "not a" + (r ? " base " + r : "") + " number", t),
                        e.s = null
                    }
                    e.c = e.e = null,
                    j = 0
                }
                ,
                L.absoluteValue = L.abs = function() {
                    var e = new G(this);
                    return e.s < 0 && (e.s = 1),
                    e
                }
                ,
                L.ceil = function() {
                    return ee(new G(this), this.e + 1, 2)
                }
                ,
                L.comparedTo = L.cmp = function(e, t) {
                    return j = 1,
                    y(this, new G(e,t))
                }
                ,
                L.decimalPlaces = L.dp = function() {
                    var e, t, n = this.c;
                    if (!n)
                        return null;
                    if (e = ((t = n.length - 1) - m(this.e / f)) * f,
                    t = n[t])
                        for (; t % 10 == 0; t /= 10,
                        e--)
                            ;
                    return e < 0 && (e = 0),
                    e
                }
                ,
                L.dividedBy = L.div = function(e, t) {
                    return j = 3,
                    n(this, new G(e,t), D, M)
                }
                ,
                L.dividedToIntegerBy = L.divToInt = function(e, t) {
                    return j = 4,
                    n(this, new G(e,t), 0, 1)
                }
                ,
                L.equals = L.eq = function(e, t) {
                    return j = 5,
                    0 === y(this, new G(e,t))
                }
                ,
                L.floor = function() {
                    return ee(new G(this), this.e + 1, 3)
                }
                ,
                L.greaterThan = L.gt = function(e, t) {
                    return j = 6,
                    y(this, new G(e,t)) > 0
                }
                ,
                L.greaterThanOrEqualTo = L.gte = function(e, t) {
                    return j = 7,
                    1 === (t = y(this, new G(e,t))) || 0 === t
                }
                ,
                L.isFinite = function() {
                    return !!this.c
                }
                ,
                L.isInteger = L.isInt = function() {
                    return !!this.c && m(this.e / f) > this.c.length - 2
                }
                ,
                L.isNaN = function() {
                    return !this.s
                }
                ,
                L.isNegative = L.isNeg = function() {
                    return this.s < 0
                }
                ,
                L.isZero = function() {
                    return !!this.c && 0 == this.c[0]
                }
                ,
                L.lessThan = L.lt = function(e, t) {
                    return j = 8,
                    y(this, new G(e,t)) < 0
                }
                ,
                L.lessThanOrEqualTo = L.lte = function(e, t) {
                    return j = 9,
                    -1 === (t = y(this, new G(e,t))) || 0 === t
                }
                ,
                L.minus = L.sub = function(e, t) {
                    var n, r, i, o, s = this, a = s.s;
                    if (j = 10,
                    t = (e = new G(e,t)).s,
                    !a || !t)
                        return new G(NaN);
                    if (a != t)
                        return e.s = -t,
                        s.plus(e);
                    var l = s.e / f
                      , c = e.e / f
                      , p = s.c
                      , d = e.c;
                    if (!l || !c) {
                        if (!p || !d)
                            return p ? (e.s = -t,
                            e) : new G(d ? s : NaN);
                        if (!p[0] || !d[0])
                            return d[0] ? (e.s = -t,
                            e) : new G(p[0] ? s : 3 == M ? -0 : 0)
                    }
                    if (l = m(l),
                    c = m(c),
                    p = p.slice(),
                    a = l - c) {
                        for ((o = a < 0) ? (a = -a,
                        i = p) : (c = l,
                        i = d),
                        i.reverse(),
                        t = a; t--; i.push(0))
                            ;
                        i.reverse()
                    } else
                        for (r = (o = (a = p.length) < (t = d.length)) ? a : t,
                        a = t = 0; t < r; t++)
                            if (p[t] != d[t]) {
                                o = p[t] < d[t];
                                break
                            }
                    if (o && (i = p,
                    p = d,
                    d = i,
                    e.s = -e.s),
                    (t = (r = d.length) - (n = p.length)) > 0)
                        for (; t--; p[n++] = 0)
                            ;
                    for (t = u - 1; r > a; ) {
                        if (p[--r] < d[r]) {
                            for (n = r; n && !p[--n]; p[n] = t)
                                ;
                            --p[n],
                            p[r] += u
                        }
                        p[r] -= d[r]
                    }
                    for (; 0 == p[0]; p.splice(0, 1),
                    --c)
                        ;
                    return p[0] ? Q(e, p, c) : (e.s = 3 == M ? -1 : 1,
                    e.c = [e.e = 0],
                    e)
                }
                ,
                L.modulo = L.mod = function(e, t) {
                    var r, i, o = this;
                    return j = 11,
                    e = new G(e,t),
                    !o.c || !e.s || e.c && !e.c[0] ? new G(NaN) : !e.c || o.c && !o.c[0] ? new G(o) : (9 == H ? (i = e.s,
                    e.s = 1,
                    r = n(o, e, 0, 3),
                    e.s = i,
                    r.s *= i) : r = n(o, e, 0, H),
                    o.minus(r.times(e)))
                }
                ,
                L.negated = L.neg = function() {
                    var e = new G(this);
                    return e.s = -e.s || null,
                    e
                }
                ,
                L.plus = L.add = function(e, t) {
                    var n, r = this, i = r.s;
                    if (j = 12,
                    t = (e = new G(e,t)).s,
                    !i || !t)
                        return new G(NaN);
                    if (i != t)
                        return e.s = -t,
                        r.minus(e);
                    var o = r.e / f
                      , s = e.e / f
                      , a = r.c
                      , l = e.c;
                    if (!o || !s) {
                        if (!a || !l)
                            return new G(i / 0);
                        if (!a[0] || !l[0])
                            return l[0] ? e : new G(a[0] ? r : 0 * i)
                    }
                    if (o = m(o),
                    s = m(s),
                    a = a.slice(),
                    i = o - s) {
                        for (i > 0 ? (s = o,
                        n = l) : (i = -i,
                        n = a),
                        n.reverse(); i--; n.push(0))
                            ;
                        n.reverse()
                    }
                    for ((i = a.length) - (t = l.length) < 0 && (n = l,
                    l = a,
                    a = n,
                    t = i),
                    i = 0; t; )
                        i = (a[--t] = a[t] + l[t] + i) / u | 0,
                        a[t] = u === a[t] ? 0 : a[t] % u;
                    return i && (a = [i].concat(a),
                    ++s),
                    Q(e, a, s)
                }
                ,
                L.precision = L.sd = function(e) {
                    var t, n, r = this, i = r.c;
                    if (null != e && e !== !!e && 1 !== e && 0 !== e && (U && Z(13, "argument" + s, e),
                    e != !!e && (e = null)),
                    !i)
                        return null;
                    if (t = (n = i.length - 1) * f + 1,
                    n = i[n]) {
                        for (; n % 10 == 0; n /= 10,
                        t--)
                            ;
                        for (n = i[0]; n >= 10; n /= 10,
                        t++)
                            ;
                    }
                    return e && r.e + 1 > t && (t = r.e + 1),
                    t
                }
                ,
                L.round = function(e, t) {
                    var n = new G(this);
                    return (null == e || P(e, 0, g, 15)) && ee(n, ~~e + this.e + 1, null != t && P(t, 0, 8, 15, a) ? 0 | t : M),
                    n
                }
                ,
                L.shift = function(e) {
                    var t = this;
                    return P(e, -p, p, 16, "argument") ? t.times("1e" + v(e)) : new G(t.c && t.c[0] && (e < -p || e > p) ? t.s * (e < 0 ? 0 : 1 / 0) : t)
                }
                ,
                L.squareRoot = L.sqrt = function() {
                    var e, t, r, i, o, s = this, a = s.c, l = s.s, c = s.e, u = D + 4, f = new G("0.5");
                    if (1 !== l || !a || !a[0])
                        return new G(!l || l < 0 && (!a || a[0]) ? NaN : a ? s : 1 / 0);
                    if (0 == (l = Math.sqrt(+s)) || l == 1 / 0 ? (((t = b(a)).length + c) % 2 == 0 && (t += "0"),
                    l = Math.sqrt(t),
                    c = m((c + 1) / 2) - (c < 0 || c % 2),
                    r = new G(t = l == 1 / 0 ? "1e" + c : (t = l.toExponential()).slice(0, t.indexOf("e") + 1) + c)) : r = new G(l + ""),
                    r.c[0])
                        for ((l = (c = r.e) + u) < 3 && (l = 0); ; )
                            if (o = r,
                            r = f.times(o.plus(n(s, o, u, 1))),
                            b(o.c).slice(0, l) === (t = b(r.c)).slice(0, l)) {
                                if (r.e < c && --l,
                                "9999" != (t = t.slice(l - 3, l + 1)) && (i || "4999" != t)) {
                                    +t && (+t.slice(1) || "5" != t.charAt(0)) || (ee(r, r.e + D + 2, 1),
                                    e = !r.times(r).eq(s));
                                    break
                                }
                                if (!i && (ee(o, o.e + D + 2, 0),
                                o.times(o).eq(s))) {
                                    r = o;
                                    break
                                }
                                u += 4,
                                l += 4,
                                i = 1
                            }
                    return ee(r, r.e + D + 1, M, e)
                }
                ,
                L.times = L.mul = function(e, t) {
                    var n, r, i, o, s, a, l, c, p, d, g, b, y, _, S, N = this, O = N.c, w = (j = 17,
                    e = new G(e,t)).c;
                    if (!(O && w && O[0] && w[0]))
                        return !N.s || !e.s || O && !O[0] && !w || w && !w[0] && !O ? e.c = e.e = e.s = null : (e.s *= N.s,
                        O && w ? (e.c = [0],
                        e.e = 0) : e.c = e.e = null),
                        e;
                    for (r = m(N.e / f) + m(e.e / f),
                    e.s *= N.s,
                    (l = O.length) < (d = w.length) && (y = O,
                    O = w,
                    w = y,
                    i = l,
                    l = d,
                    d = i),
                    i = l + d,
                    y = []; i--; y.push(0))
                        ;
                    for (_ = u,
                    S = h,
                    i = d; --i >= 0; ) {
                        for (n = 0,
                        g = w[i] % S,
                        b = w[i] / S | 0,
                        o = i + (s = l); o > i; )
                            n = ((c = g * (c = O[--s] % S) + (a = b * c + (p = O[s] / S | 0) * g) % S * S + y[o] + n) / _ | 0) + (a / S | 0) + b * p,
                            y[o--] = c % _;
                        y[o] = n
                    }
                    return n ? ++r : y.splice(0, 1),
                    Q(e, y, r)
                }
                ,
                L.toDigits = function(e, t) {
                    var n = new G(this);
                    return e = null != e && P(e, 1, g, 18, "precision") ? 0 | e : null,
                    t = null != t && P(t, 0, 8, 18, a) ? 0 | t : M,
                    e ? ee(n, e, t) : n
                }
                ,
                L.toExponential = function(e, t) {
                    return V(this, null != e && P(e, 0, g, 19) ? 1 + ~~e : null, t, 19)
                }
                ,
                L.toFixed = function(e, t) {
                    return V(this, null != e && P(e, 0, g, 20) ? ~~e + this.e + 1 : null, t, 20)
                }
                ,
                L.toFormat = function(e, t) {
                    var n = V(this, null != e && P(e, 0, g, 21) ? ~~e + this.e + 1 : null, t, 21);
                    if (this.c) {
                        var r, i = n.split("."), o = +q.groupSize, s = +q.secondaryGroupSize, a = q.groupSeparator, l = i[0], c = i[1], u = this.s < 0, f = u ? l.slice(1) : l, p = f.length;
                        if (s && (r = o,
                        o = s,
                        s = r,
                        p -= r),
                        o > 0 && p > 0) {
                            for (r = p % o || o,
                            l = f.substr(0, r); r < p; r += o)
                                l += a + f.substr(r, o);
                            s > 0 && (l += a + f.slice(r)),
                            u && (l = "-" + l)
                        }
                        n = c ? l + q.decimalSeparator + ((s = +q.fractionGroupSize) ? c.replace(new RegExp("\\d{" + s + "}\\B","g"), "$&" + q.fractionGroupSeparator) : c) : l
                    }
                    return n
                }
                ,
                L.toFraction = function(e) {
                    var t, r, i, o, s, a, l, c, u, p = U, h = this, g = h.c, m = new G(B), y = r = new G(B), _ = l = new G(B);
                    if (null != e && (U = !1,
                    a = new G(e),
                    U = p,
                    (p = a.isInt()) && !a.lt(B) || (U && Z(22, "max denominator " + (p ? "out of range" : "not an integer"), e),
                    e = !p && a.c && ee(a, a.e + 1, 1).gte(B) ? a : null)),
                    !g)
                        return h.toString();
                    for (u = b(g),
                    o = m.e = u.length - h.e - 1,
                    m.c[0] = d[(s = o % f) < 0 ? f + s : s],
                    e = !e || a.cmp(m) > 0 ? o > 0 ? m : y : a,
                    s = $,
                    $ = 1 / 0,
                    a = new G(u),
                    l.c[0] = 0; c = n(a, m, 0, 1),
                    1 != (i = r.plus(c.times(_))).cmp(e); )
                        r = _,
                        _ = i,
                        y = l.plus(c.times(i = y)),
                        l = i,
                        m = a.minus(c.times(i = m)),
                        a = i;
                    return i = n(e.minus(r), _, 0, 1),
                    l = l.plus(i.times(y)),
                    r = r.plus(i.times(_)),
                    l.s = y.s = h.s,
                    t = n(y, _, o *= 2, M).minus(h).abs().cmp(n(l, r, o, M).minus(h).abs()) < 1 ? [y.toString(), _.toString()] : [l.toString(), r.toString()],
                    $ = s,
                    t
                }
                ,
                L.toNumber = function() {
                    return +this
                }
                ,
                L.toPower = L.pow = function(e, t) {
                    var n, r, s, a = o(e < 0 ? -e : +e), l = this;
                    if (null != t && (j = 23,
                    t = new G(t)),
                    !P(e, -p, p, 23, "exponent") && (!isFinite(e) || a > p && (e /= 0) || parseFloat(e) != e && !(e = NaN)) || 0 == e)
                        return n = Math.pow(+l, e),
                        new G(t ? n % t : n);
                    for (t ? e > 1 && l.gt(B) && l.isInt() && t.gt(B) && t.isInt() ? l = l.mod(t) : (s = t,
                    t = null) : W && (n = i(W / f + 2)),
                    r = new G(B); ; ) {
                        if (a % 2) {
                            if (!(r = r.times(l)).c)
                                break;
                            n ? r.c.length > n && (r.c.length = n) : t && (r = r.mod(t))
                        }
                        if (!(a = o(a / 2)))
                            break;
                        l = l.times(l),
                        n ? l.c && l.c.length > n && (l.c.length = n) : t && (l = l.mod(t))
                    }
                    return t ? r : (e < 0 && (r = B.div(r)),
                    s ? r.mod(s) : n ? ee(r, W, M) : r)
                }
                ,
                L.toPrecision = function(e, t) {
                    return V(this, null != e && P(e, 1, g, 24, "precision") ? 0 | e : null, t, 24)
                }
                ,
                L.toString = function(e) {
                    var t, n = this, r = n.s, i = n.e;
                    return null === i ? r ? (t = "Infinity",
                    r < 0 && (t = "-" + t)) : t = "NaN" : (t = b(n.c),
                    t = null != e && P(e, 2, 64, 25, "base") ? K(w(t, i), 0 | e, 10, r) : i <= F || i >= I ? O(t, i) : w(t, i),
                    r < 0 && n.c[0] && (t = "-" + t)),
                    t
                }
                ,
                L.truncated = L.trunc = function() {
                    return ee(new G(this), this.e + 1, 1)
                }
                ,
                L.valueOf = L.toJSON = function() {
                    var e, t = this, n = t.e;
                    return null === n ? t.toString() : (e = b(t.c),
                    e = n <= F || n >= I ? O(e, n) : w(e, n),
                    t.s < 0 ? "-" + e : e)
                }
                ,
                L.isBigNumber = !0,
                null != t && G.config(t),
                G
            }()).default = n.BigNumber = n,
            "function" == typeof define && define.amd ? define(function() {
                return n
            }) : void 0 !== e && e.exports ? e.exports = n : (t || (t = "undefined" != typeof self ? self : Function("return this")()),
            t.BigNumber = n)
        }(this),
        e.exports
    }({
        exports: {}
    }), TRstringify = (e = {
        exports: {}
    },
    n = {},
    function() {
        "use strict";
        var e, t, r, i = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, o = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        function s(e) {
            return i.lastIndex = 0,
            i.test(e) ? '"' + e.replace(i, function(e) {
                var t = o[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }
        "function" != typeof n.stringify && (n.stringify = function(n, i, o) {
            var a;
            if (e = "",
            t = "",
            "number" == typeof o)
                for (a = 0; a < o; a += 1)
                    t += " ";
            else
                "string" == typeof o && (t = o);
            if (r = i,
            i && "function" != typeof i && ("object" != typeof i || "number" != typeof i.length))
                throw new Error("JSON.stringify");
            return function n(i, o) {
                var a, l, c, u, f, p = e, d = o[i], h = null != d && (d instanceof BigNumber || d.isBigNumber);
                switch (d && "object" == typeof d && "function" == typeof d.toJSON && (d = d.toJSON(i)),
                "function" == typeof r && (d = r.call(o, i, d)),
                typeof d) {
                case "string":
                    return h ? d : s(d);
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "boolean":
                case "null":
                    return String(d);
                case "object":
                    if (!d)
                        return "null";
                    if (e += t,
                    f = [],
                    "[object Array]" === Object.prototype.toString.apply(d)) {
                        for (u = d.length,
                        a = 0; a < u; a += 1)
                            f[a] = n(a, d) || "null";
                        return c = 0 === f.length ? "[]" : e ? "[\n" + e + f.join(",\n" + e) + "\n" + p + "]" : "[" + f.join(",") + "]",
                        e = p,
                        c
                    }
                    if (r && "object" == typeof r)
                        for (u = r.length,
                        a = 0; a < u; a += 1)
                            "string" == typeof r[a] && (c = n(l = r[a], d)) && f.push(s(l) + (e ? ": " : ":") + c);
                    else
                        Object.keys(d).forEach(function(t) {
                            var r = n(t, d);
                            r && f.push(s(t) + (e ? ": " : ":") + r)
                        });
                    return c = 0 === f.length ? "{}" : e ? "{\n" + e + f.join(",\n" + e) + "\n" + p + "}" : "{" + f.join(",") + "}",
                    e = p,
                    c
                }
            }("", {
                "": n
            })
        }
        )
    }(),
    e.exports = n.stringify,
    e.exports), TRparse = function(e) {
        return e.exports = function(e) {
            "use strict";
            var t = {
                strict: !1,
                storeAsString: !1
            };
            null != e && (!0 === e.strict && (t.strict = !0),
            !0 === e.storeAsString && (t.storeAsString = !0));
            var n, r, i, o, s = {
                '"': '"',
                "\\": "\\",
                "/": "/",
                b: "\b",
                f: "\f",
                n: "\n",
                r: "\r",
                t: "\t"
            }, a = function(e) {
                throw {
                    name: "SyntaxError",
                    message: e,
                    at: n,
                    text: i
                }
            }, l = function(e) {
                return e && e !== r && a("Expected '" + e + "' instead of '" + r + "'"),
                r = i.charAt(n),
                n += 1,
                r
            }, c = function() {
                var e, n = "";
                for ("-" === r && (n = "-",
                l("-")); r >= "0" && r <= "9"; )
                    n += r,
                    l();
                if ("." === r)
                    for (n += "."; l() && r >= "0" && r <= "9"; )
                        n += r;
                if ("e" === r || "E" === r)
                    for (n += r,
                    l(),
                    "-" !== r && "+" !== r || (n += r,
                    l()); r >= "0" && r <= "9"; )
                        n += r,
                        l();
                if (e = +n,
                isFinite(e))
                    return n.length > 15 ? !0 === t.storeAsString ? n : new BigNumber(n) : e;
                a("Bad number")
            }, u = function() {
                var e, t, n, i = "";
                if ('"' === r)
                    for (; l(); ) {
                        if ('"' === r)
                            return l(),
                            i;
                        if ("\\" === r)
                            if (l(),
                            "u" === r) {
                                for (n = 0,
                                t = 0; t < 4 && (e = parseInt(l(), 16),
                                isFinite(e)); t += 1)
                                    n = 16 * n + e;
                                i += String.fromCharCode(n)
                            } else {
                                if ("string" != typeof s[r])
                                    break;
                                i += s[r]
                            }
                        else
                            i += r
                    }
                a("Bad string")
            }, f = function() {
                for (; r && r <= " "; )
                    l()
            };
            return o = function() {
                switch (f(),
                r) {
                case "{":
                    return function() {
                        var e, n = {};
                        if ("{" === r) {
                            if (l("{"),
                            f(),
                            "}" === r)
                                return l("}"),
                                n;
                            for (; r; ) {
                                if (e = u(),
                                f(),
                                l(":"),
                                !0 === t.strict && Object.hasOwnProperty.call(n, e) && a('Duplicate key "' + e + '"'),
                                n[e] = o(),
                                f(),
                                "}" === r)
                                    return l("}"),
                                    n;
                                l(","),
                                f()
                            }
                        }
                        a("Bad object")
                    }();
                case "[":
                    return function() {
                        var e = [];
                        if ("[" === r) {
                            if (l("["),
                            f(),
                            "]" === r)
                                return l("]"),
                                e;
                            for (; r; ) {
                                if (e.push(o()),
                                f(),
                                "]" === r)
                                    return l("]"),
                                    e;
                                l(","),
                                f()
                            }
                        }
                        a("Bad array")
                    }();
                case '"':
                    return u();
                case "-":
                    return c();
                default:
                    return r >= "0" && r <= "9" ? c() : function() {
                        switch (r) {
                        case "t":
                            return l("t"),
                            l("r"),
                            l("u"),
                            l("e"),
                            !0;
                        case "f":
                            return l("f"),
                            l("a"),
                            l("l"),
                            l("s"),
                            l("e"),
                            !1;
                        case "n":
                            return l("n"),
                            l("u"),
                            l("l"),
                            l("l"),
                            null
                        }
                        a("Unexpected '" + r + "'")
                    }()
                }
            }
            ,
            function(e, t) {
                var s;
                return i = e + "",
                n = 0,
                r = " ",
                s = o(),
                f(),
                r && a("Syntax error"),
                "function" == typeof t ? function e(n, r) {
                    var i, o = n[r];
                    return o && "object" == typeof o && Object.keys(o).forEach(function(t) {
                        void 0 !== (i = e(o, t)) ? o[t] = i : delete o[t]
                    }),
                    t.call(n, r, o)
                }({
                    "": s
                }, "") : s
            }
        }
        ,
        e.exports
    }({
        exports: {}
    }), e, n;
    JSON.BigNumber = BigNumber = TRbignumber,
    JSON.parse = TRparse(),
    JSON.stringify = TRstringify;
    let TYPE_STRING = 1
      , TYPE_NUMBER = 2
      , TYPE_OBJECT = 3
      , TYPE_ARRAY = 4
      , TYPE_BOOL = 5
      , TYPE_NULL = 6
      , htmlspecialchars = function(e) {
        return e = (e = (e = (e = (e = e.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/"/g, "&quot;")).replace(/'/g, "&#039;")
    }
      , FhVDom = function() {
        this._id = "fhvd_" + 1 * new Date,
        this.tag = "",
        this.innerText = "",
        this.textContent = "",
        this.childNodes = [],
        this.className = "",
        this.attributes = [],
        this.classList = [],
        this.classList.__proto__.add = this.classList.__proto__.push,
        this.createElement = (e=>(this.tag = e,
        this)),
        this.setAttribute = ((e,t)=>{
            this.attributes.push([e, t])
        }
        ),
        this.appendChild = (e=>(this.childNodes.push(e),
        this)),
        this.getOuterHTML = (()=>{
            let e = [];
            if (this.tag) {
                e.push(`<${this.tag}`);
                let t = (this.className || "") + " " + this.classList.join(" ");
                t.replace(/\s/g, "").length && e.push(` class="${t}"`),
                this.attributes.length && e.push(this.attributes.map(e=>` ${e[0]}="${e[1]}"`).join("")),
                e.push(">"),
                ("" + this.innerText).length ? e.push(this.innerText) : ("" + this.textContent).length ? e.push(this.textContent) : e.push(this.childNodes.map(e=>e.getOuterHTML()).join("")),
                e.push(`</${this.tag}>`)
            } else
                ("" + this.innerText).length ? e.push(this.innerText) : ("" + this.textContent).length && e.push(this.textContent);
            return e.join("")
        }
        ),
        this.cloneNode = (e=>{
            let t = FhVDom.getInstance();
            return t.tag = this.tag,
            e || !this.tag ? (t.innerText = this.innerText,
            t.textContent = this.textContent) : (t.innerText = "",
            t.textContent = ""),
            t.className = this.className,
            t.classList = Array.from(this.classList),
            t.attributes = Array.from(this.attributes),
            t
        }
        )
    };
    function createSpanNode(e, t) {
        let n = FhVDom.getInstance().createElement("span");
        return n.className = t || "",
        n.innerText = e || "",
        n
    }
    function createDivNode(e) {
        let t = FhVDom.getInstance().createElement("div");
        return t.className = e || "",
        t
    }
    FhVDom.getInstance = (()=>new FhVDom);
    let templatesObj = {
        t_item: createDivNode("item"),
        t_key: createSpanNode("", "key"),
        t_string: createSpanNode("", "string"),
        t_number: createSpanNode("", "number"),
        t_exp: createSpanNode("", "expand"),
        t_null: createSpanNode("null", "null"),
        t_true: createSpanNode("true", "bool"),
        t_false: createSpanNode("false", "bool"),
        t_oBrace: createSpanNode("{", "brace"),
        t_cBrace: createSpanNode("}", "brace"),
        t_oBracket: createSpanNode("[", "brace"),
        t_cBracket: createSpanNode("]", "brace"),
        t_ellipsis: createSpanNode("", "ellipsis"),
        t_kvList: createDivNode("kv-list"),
        t_colonAndSpace: createSpanNode(": ", "colon"),
        t_commaText: createSpanNode(",", "comma"),
        t_dblqText: createSpanNode('"', "quote")
    };
    function getItemDOM(e, t) {
        let n, r, i, o, s, a, l, c, u = templatesObj;
        if (n = "string" == typeof e ? TYPE_STRING : "number" == typeof e ? TYPE_NUMBER : !1 === e || !0 === e ? TYPE_BOOL : null === e ? TYPE_NULL : e instanceof Array ? TYPE_ARRAY : TYPE_OBJECT,
        r = u.t_item.cloneNode(!1),
        n === TYPE_OBJECT || n === TYPE_ARRAY)
            if ("function" == typeof JSON.BigNumber && e instanceof JSON.BigNumber)
                e = JSON.stringify(e),
                n = TYPE_NUMBER;
            else {
                for (o in i = !1,
                e)
                    if (e.hasOwnProperty(o)) {
                        i = !0;
                        break
                    }
                i && r.appendChild(u.t_exp.cloneNode(!0))
            }
        switch (!1 !== t ? (r.classList.add(n === TYPE_OBJECT ? "item-object" : n === TYPE_ARRAY ? "item-array" : "item-line"),
        (s = u.t_key.cloneNode(!1)).textContent = JSON.stringify(t).slice(1, -1),
        r.appendChild(u.t_dblqText.cloneNode(!0)),
        r.appendChild(s),
        r.appendChild(u.t_dblqText.cloneNode(!0)),
        r.appendChild(u.t_colonAndSpace.cloneNode(!0))) : r.classList.add("item-block"),
        n) {
        case TYPE_STRING:
            let o = FhVDom.getInstance().createElement("span")
              , f = JSON.stringify(e);
            f = f.substring(1, f.length - 1);
            let p = !1;
            if (/^[\w]+:\/\//.test(e))
                try {
                    let t = new URL(e)
                      , n = FhVDom.getInstance().createElement("A");
                    n.setAttribute("href", t.href),
                    n.setAttribute("target", "_blank"),
                    n.innerText = htmlspecialchars(f),
                    o.appendChild(n),
                    p = !0
                } catch (e) {}
            p || (o.innerText = htmlspecialchars(f)),
            (a = u.t_string.cloneNode(!1)).appendChild(u.t_dblqText.cloneNode(!0)),
            a.appendChild(o),
            a.appendChild(u.t_dblqText.cloneNode(!0)),
            r.appendChild(a);
            break;
        case TYPE_NUMBER:
            (a = u.t_number.cloneNode(!1)).innerText = e,
            r.appendChild(a);
            break;
        case TYPE_OBJECT:
            if (r.appendChild(u.t_oBrace.cloneNode(!0)),
            i) {
                r.appendChild(u.t_ellipsis.cloneNode(!1)),
                l = u.t_kvList.cloneNode(!1);
                let t = Object.keys(e).filter(t=>e.hasOwnProperty(t));
                t.forEach((n,r)=>{
                    c = getItemDOM(e[n], n),
                    r < t.length - 1 && c.appendChild(u.t_commaText.cloneNode(!0)),
                    l.appendChild(c)
                }
                ),
                r.appendChild(l)
            }
            r.appendChild(u.t_cBrace.cloneNode(!0));
            break;
        case TYPE_ARRAY:
            if (r.appendChild(u.t_oBracket.cloneNode(!0)),
            i) {
                r.appendChild(u.t_ellipsis.cloneNode(!1)),
                l = u.t_kvList.cloneNode(!1);
                for (let t = 0, n = e.length, r = n - 1; t < n; t++)
                    c = getItemDOM(e[t], !1),
                    t < r && c.appendChild(u.t_commaText.cloneNode(!0)),
                    l.appendChild(c);
                r.appendChild(l)
            }
            r.appendChild(u.t_cBracket.cloneNode(!0));
            break;
        case TYPE_BOOL:
            e ? r.appendChild(u.t_true.cloneNode(!0)) : r.appendChild(u.t_false.cloneNode(!0));
            break;
        case TYPE_NULL:
            r.appendChild(u.t_null.cloneNode(!0))
        }
        return r
    }
    self.onmessage = function(e) {
        let t;
        self.postMessage(["FORMATTING"]),
        e.data.skin && "theme-simple" === e.data.skin ? (t = createDivNode("rootItem")).textContent = JSON.stringify(JSON.parse(e.data.jsonString), null, 4) : (t = getItemDOM(JSON.parse(e.data.jsonString), !1)).classList.add("rootItem");
        let n = `<div id="formattedJson">${t.getOuterHTML()}</div>`;
        self.postMessage(["FORMATTED", n])
    }
    ,
    this.getFormattedHtml = function(e) {
        let t;
        e.onFormatting && e.onFormatting(["FORMATTING"]),
        e.data.skin && "theme-simple" === e.data.skin ? (t = createDivNode("rootItem")).textContent = JSON.stringify(JSON.parse(e.data.jsonString), null, 4) : (t = getItemDOM(JSON.parse(e.data.jsonString), !1)).classList.add("rootItem");
        let n = `<div id="formattedJson">${t.getOuterHTML()}</div>`;
        e.onFormatted && e.onFormatted(["FORMATTED", n])
    }
};
window.JsonABC = function() {
    return {
        sortObj: function e(t, n, r) {
            n = -1 !== n ? 1 : -1,
            r = r || !1;
            let i = {};
            return "function" == typeof JSON.BigNumber && t instanceof JSON.BigNumber ? t : (o = t,
            "[object Array]" === Object.prototype.toString.call(o) ? ((i = r ? t : t.sort()).forEach(function(t, o) {
                i[o] = e(t, n, r)
            }),
            r || (i = i.sort(function(e, t) {
                return (e = "object" == typeof e ? JSON.stringify(e) : e) < (t = "object" == typeof t ? JSON.stringify(t) : t) ? -1 * n : e > t ? 1 * n : 0
            }))) : function(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }(t) ? (i = {},
            Object.keys(t).sort(function(e, t) {
                return e.toLowerCase() < t.toLowerCase() ? -1 * n : e.toLowerCase() > t.toLowerCase() ? 1 * n : 0
            }).forEach(function(o) {
                i[o] = e(t[o], n, r)
            })) : i = t,
            i);
            var o
        }
    }
}(),
window.JsonEnDecode = {
    uniEncode: function(e) {
        return escape(e).replace(/%u/gi, "\\u").replace(/%7b/gi, "{").replace(/%7d/gi, "}").replace(/%3a/gi, ":").replace(/%2c/gi, ",").replace(/%27/gi, "'").replace(/%22/gi, '"').replace(/%5b/gi, "[").replace(/%5d/gi, "]").replace(/%3D/gi, "=").replace(/%08/gi, "\b").replace(/%0D/gi, "\r").replace(/%0C/gi, "\f").replace(/%09/gi, "\t").replace(/%20/gi, " ").replace(/%0A/gi, "\n").replace(/%3E/gi, ">").replace(/%3C/gi, "<").replace(/%3F/gi, "?")
    },
    uniDecode: function(e) {
        e = e.replace(/(\\)?\\u/gi, "%u").replace("%u0025", "%25");
        let t = (e = unescape(e.toString().replace(/%2B/g, "+"))).match(/(%u00([0-9A-F]{2}))/gi);
        if (t)
            for (let n = 0; n < t.length; n++) {
                let r = t[n].substring(1, 3);
                Number("0x" + r) >= 128 && (e = e.replace(t[n], r))
            }
        return e = unescape(e.toString().replace(/%2B/g, "+"))
    },
    urlDecode: function(e) {
        try {
            return decodeURIComponent(e)
        } catch (t) {
            return e
        }
    },
    urlDecodeByFetch: function(e) {
        return new Promise((t,n)=>{
            try {
                fetch(`data:text/javascript;charset=utf8,${e.replace(/"/g, "%22").replace(/#/g, "%23")}`).then(e=>e.text(), e=>{
                    n && n(e)
                }
                ).then(e=>{
                    t && t(e)
                }
                )
            } catch (n) {
                t && t(e)
            }
        }
        )
    },
    urlDecodeByIframe: function(e, t) {
        return t = t || "utf8",
        new Promise((n,r)=>{
            let i = document.querySelector("#_urlDecode_iframe_");
            i && i.remove(),
            (i = document.createElement("iframe")).setAttribute("id", "_urlDecode_iframe_"),
            i.style.display = "none",
            i.width = "0",
            i.height = "0",
            i.scrolling = "no",
            i.allowtransparency = "true",
            i.frameborder = "0",
            i.src = "about:blank",
            document.body.appendChild(i),
            window._urlDecodeCallback = window._urlDecodeCallback || function(e) {
                n && n(e.data),
                i.remove()
            }
            ,
            window.removeEventListener("message", window._urlDecodeCallback),
            window.addEventListener("message", window._urlDecodeCallback, !1);
            try {
                i.contentWindow.document.write("<html><scrip" + `t charset="${t}" src="data:text/javascript;charset=${t},parent.postMessage(\`${e.replace(/"/g, "%22").replace(/#/g, "%23")}\`)"></scrip` + "t></html>")
            } catch (e) {
                r && r(e)
            }
        }
        )
    }
},
window.JsonAutoFormat = (()=>{
    "use strict";
    const e = {
        JSON_PAGE_FORMAT: "JSON_PAGE_FORMAT",
        JSON_TOOL_BAR_ALWAYS_SHOW: "JSON_TOOL_BAR_ALWAYS_SHOW",
        STATUS_BAR_ALWAYS_SHOW: "STATUS_BAR_ALWAYS_SHOW",
        AUTO_TEXT_DECODE: "AUTO_TEXT_DECODE",
        FIX_ERROR_ENCODING: "FIX_ERROR_ENCODING",
        ENABLE_JSON_KEY_SORT: "ENABLE_JSON_KEY_SORT",
        KEEP_KEY_VALUE_DBL_QUOTE: "KEEP_KEY_VALUE_DBL_QUOTE",
        MAX_JSON_KEYS_NUMBER: "MAX_JSON_KEYS_NUMBER",
        JSON_FORMAT_THEME: "JSON_FORMAT_THEME"
    }
      , t = {
        0: "theme-default",
        1: "theme-simple",
        2: "theme-light",
        3: "theme-dark",
        4: "theme-vscode",
        5: "theme-github",
        6: "theme-vegetarian"
    };
    let n = null
      , r = null
      , i = null
      , o = null
      , s = {
        JSON_FORMAT_THEME: 0,
        sortType: 0,
        autoDecode: !1,
        originalSource: ""
    }
      , a = t=>{
        chrome.runtime.sendMessage({
            type: "fh-dynamic-any-thing",
            params: e,
            func: ((e,t)=>{
                let n = {};
                Object.keys(e).forEach(e=>{
                    let t = String(localStorage.getItem(e));
                    ["MAX_JSON_KEYS_NUMBER", "JSON_FORMAT_THEME"].includes(e) ? n[e] = parseInt(t) : n[e] = "false" !== t
                }
                ),
                t && t(n)
            }
            ).toString()
        }, e=>t && t(e))
    }
      , l = ()=>{
        let e = $("#jfSettingPanel");
        if (e.length) {
            if (e[0].offsetHeight)
                return e.hide();
            e.show()
        } else
            (e = $('<div id="jfSettingPanel" class="mod-setting-panel">\n            <h4>基本配置项</h4>\n            <form action="#">\n                <ul>\n                    <li><label><input type="checkbox" name="alwaysOn" value="1">总是开启JSON自动格式化功能</label></li>\n                    <li><label><input type="checkbox" name="alwaysShowToolbar" value="1">总是显示顶部工具栏</label></li>\n                    <li><label><input type="checkbox" name="alwaysShowStatusbar" value="1">启用状态栏（包含复制/下载/删除）</label></li>\n                    <li><label><input type="checkbox" name="autoDecode" value="1">自动进行URL、Unicode解码</label></li>\n                    <li><label><input type="checkbox" name="errorEncoding" value="1">乱码修正（需手动操作，一键修正）</label></li>\n                    <li><label><input type="checkbox" name="enableSort" value="1">启用JSON键名排序功能</label></li>\n                    <li><label><input type="checkbox" name="keepQuote" value="1">格式化后保留键值对的双引号</label></li>\n                    <li><label><input type="text" name="maxlength" value="10000">最大支持的JSON Key数量</label></li>\n               </ul>\n    \n               <h4>自定义皮肤</h4>\n               <ul>\n                    <li><label><input type="radio" name="skinId" value="0">默认模式（简约风格）</label></li>\n                    <li><label><input type="radio" name="skinId" value="1">极简模式（纯源码）</label></li>\n                    <li><label><input type="radio" name="skinId" value="2">清爽模式（明亮、跳跃）</label></li>\n                    <li><label><input type="radio" name="skinId" value="3">暗黑模式（安静、忧郁）</label></li>\n                    <li><label><input type="radio" name="skinId" value="4">vscode模式（醒目、专注）</label></li>\n                    <li><label><input type="radio" name="skinId" value="5">github模式（纵享丝滑）</label></li>\n                    <li><label><input type="radio" name="skinId" value="6">素人模式（清心寡欲）</label></li>\n               </ul>\n    \n               <div class="btns">\n                    <input type="submit" class="xjf-btn" name="submit" value="确定">\n                    <input type="reset" class="xjf-btn" name="reset" value="取消">\n               </div>\n            </form>\n        </div>').appendTo("#jfToolbar")).find('input[type="submit"]').on("click", function(t) {
                t.preventDefault(),
                t.stopPropagation();
                let n = {};
                n.JSON_PAGE_FORMAT = e.find('input[name="alwaysOn"]').prop("checked"),
                n.JSON_TOOL_BAR_ALWAYS_SHOW = e.find('input[name="alwaysShowToolbar"]').prop("checked"),
                n.STATUS_BAR_ALWAYS_SHOW = e.find('input[name="alwaysShowStatusbar"]').prop("checked"),
                n.AUTO_TEXT_DECODE = e.find('input[name="autoDecode"]').prop("checked"),
                n.FIX_ERROR_ENCODING = e.find('input[name="errorEncoding"]').prop("checked"),
                n.ENABLE_JSON_KEY_SORT = e.find('input[name="enableSort"]').prop("checked"),
                n.KEEP_KEY_VALUE_DBL_QUOTE = e.find('input[name="keepQuote"]').prop("checked"),
                n.MAX_JSON_KEYS_NUMBER = e.find('input[name="maxlength"]').val(),
                n.JSON_FORMAT_THEME = e.find('input[name="skinId"]:checked').val(),
                chrome.runtime.sendMessage({
                    type: "fh-dynamic-any-thing",
                    params: n,
                    func: ((e,t)=>{
                        Object.keys(e).forEach(t=>localStorage.setItem(t, e[t])),
                        t && t()
                    }
                    ).toString()
                }, t=>e.hide())
            }),
            e.find('input[name="alwaysShowToolbar"]').on("click", function(e) {
                $(".fe-feedback #toggleBtn").trigger("click")
            }),
            e.find('input[name="errorEncoding"]').on("click", function(e) {
                let t = $("#jfToolbar").find(".x-fix-encoding");
                $(this).prop("checked") ? t.show() : t.hide()
            }),
            e.find('input[name="enableSort"]').on("click", function(e) {
                let t = $("#jfToolbar").find(".x-sort");
                $(this).prop("checked") ? t.show() : t.hide()
            }),
            e.find('input[type="reset"]').on("click", t=>e.hide()),
            e.find('input[name="skinId"]').on("click", function(e) {
                s.JSON_FORMAT_THEME = this.value,
                u()
            }),
            e.find('input[name="alwaysShowStatusbar"]').on("click", function(e) {
                s.STATUS_BAR_ALWAYS_SHOW = $(this).prop("checked");
                let t = $("body");
                s.STATUS_BAR_ALWAYS_SHOW ? t.removeClass("hide-status-bar") : t.addClass("hide-status-bar")
            }),
            e.find('input[name="keepQuote"]').on("click", function(e) {
                s.KEEP_KEY_VALUE_DBL_QUOTE = $(this).prop("checked");
                let t = $("body");
                s.KEEP_KEY_VALUE_DBL_QUOTE ? t.removeClass("remove-quote") : t.addClass("remove-quote")
            });
        a(t=>{
            t.JSON_PAGE_FORMAT && e.find('input[name="alwaysOn"]').prop("checked", !0),
            t.JSON_TOOL_BAR_ALWAYS_SHOW && e.find('input[name="alwaysShowToolbar"]').prop("checked", !0),
            t.STATUS_BAR_ALWAYS_SHOW && e.find('input[name="alwaysShowStatusbar"]').prop("checked", !0),
            t.AUTO_TEXT_DECODE && e.find('input[name="autoDecode"]').prop("checked", !0),
            t.FIX_ERROR_ENCODING && e.find('input[name="errorEncoding"]').prop("checked", !0),
            t.ENABLE_JSON_KEY_SORT && e.find('input[name="enableSort"]').prop("checked", !0),
            t.KEEP_KEY_VALUE_DBL_QUOTE && e.find('input[name="keepQuote"]').prop("checked", !0),
            e.find('input[name="maxlength"]').attr("value", t.MAX_JSON_KEYS_NUMBER || 1e4),
            e.find(`input[name="skinId"][value="${t.JSON_FORMAT_THEME || 0}"]`).attr("checked", !0)
        }
        )
    }
      , c = ()=>{
        (()=>{
            try {
                localStorage.getItem(1)
            } catch (e) {
                return !1
            }
            return !0
        }
        )() ? (s.ENABLE_JSON_KEY_SORT ? (s.sortType = parseInt(localStorage.getItem("json_sort_type_key") || 0),
        $("[name=jsonsort][value=" + s.sortType + "]").attr("checked", 1)) : (s.sortType = 0,
        $("#jfToolbar .x-sort").hide()),
        $("[name=jsonsort]").click(function(e) {
            let t = parseInt(this.value);
            t !== s.sortType && (s.sortType = t,
            u()),
            localStorage.setItem("json_sort_type_key", t)
        })) : $("#jfToolbar .x-sort").hide(),
        s.FIX_ERROR_ENCODING || $("#jfToolbar .x-fix-encoding").hide();
        let e = document.querySelector("#jfToolbar").classList
          , t = $(".fe-feedback #toggleBtn");
        s.JSON_TOOL_BAR_ALWAYS_SHOW ? (e.remove("t-collapse"),
        t.html("隐藏&gt;&gt;")) : (e.add("t-collapse"),
        t.html("&lt;&lt;")),
        t.click(function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            chrome.runtime.sendMessage({
                type: "fh-dynamic-any-thing",
                func: ((e,t)=>{
                    let n = "false" !== String(localStorage.getItem("JSON_TOOL_BAR_ALWAYS_SHOW"));
                    localStorage.setItem("JSON_TOOL_BAR_ALWAYS_SHOW", !n),
                    t && t(!n)
                }
                ).toString()
            }, e=>{
                let n = document.querySelector("#jfToolbar").classList;
                e ? (n.remove("t-collapse"),
                t.html("隐藏&gt;&gt;")) : (n.add("t-collapse"),
                t.html("&lt;&lt;")),
                $('#jfToolbar input[name="alwaysShowToolbar"]').prop("checked", e)
            }
            )
        }),
        $(".fe-feedback .x-settings").click(e=>l()),
        $("#jsonGetCorrectCnt").click(e=>f())
    }
      , u = function() {
        let e = s.originalSource;
        if (0 !== s.sortType) {
            let t = JsonABC.sortObj(JSON.parse(s.originalSource), parseInt(s.sortType), !0);
            e = JSON.stringify(t)
        }
        let r = $("body")
          , a = t[s.JSON_FORMAT_THEME || 0];
        if (Object.values(t).forEach(e=>r.removeClass(e)),
        r.addClass(a),
        s.KEEP_KEY_VALUE_DBL_QUOTE ? r.removeClass("remove-quote") : r.addClass("remove-quote"),
        s.STATUS_BAR_ALWAYS_SHOW ? r.removeClass("hide-status-bar") : r.addClass("hide-status-bar"),
        s.autoDecode)
            (async()=>{
                let t = await JsonEnDecode.urlDecodeByFetch(e);
                e = JsonEnDecode.uniDecode(t);
                try {
                    Formatter.format(e, a)
                } catch (t) {
                    Formatter.formatSync(e, a)
                }
                $("#jfToolbar").fadeIn(500)
            }
            )();
        else {
            try {
                Formatter.format(e, a)
            } catch (t) {
                Formatter.formatSync(e, a)
            }
            $("#jfToolbar").fadeIn(500)
        }
        null != n && (i && o ? ($("#jfCallbackName_start").html('<pre style="padding:0">' + i + "</pre>" + n + "("),
        $("#jfCallbackName_end").html(')<br><pre style="padding:0">' + o + "</pre>")) : ($("#jfCallbackName_start").html(n + "("),
        $("#jfCallbackName_end").html(")")))
    }
      , f = function() {
        fetch(location.href).then(e=>e.text()).then(e=>{
            s.originalSource = e,
            u()
        }
        )
    }
      , p = function(e) {
        let t = 0;
        if ("object" == typeof e) {
            let n = Object.keys(e);
            t += n.length,
            n.forEach(n=>{
                e[n] && "object" == typeof e[n] && (t += p(e[n]))
            }
            )
        }
        return t
    }
      , d = function(e) {
        let t = function() {
            let e = (document.querySelectorAll("body>pre")[0] || {
                textContent: ""
            }).textContent.trim();
            e || (e = (document.body.textContent || "").trim());
            let t = /\.js$/.test(new URL(location.href).pathname);
            if ((t = t && "application/javascript" === document.contentType) && (e = ""),
            !e)
                return !1;
            let n = document.body.childNodes
              , r = ""
              , i = "application/json" === document.contentType;
            for (let t = 0, o = n.length; t < o; t++) {
                let o = n[t];
                if (o.nodeType === Node.TEXT_NODE)
                    r += (o.textContent || "").trim();
                else if (i)
                    o.offsetHeight + o.offsetWidth !== 0 && o.textContent.length > r.length && (r = o.textContent);
                else {
                    if (n[t].nodeType !== Node.ELEMENT_NODE)
                        return !1;
                    {
                        let t = o.tagName.toLowerCase()
                          , n = (o.textContent || "").trim();
                        if (["script", "link"].includes(t)) {
                            let e = o.getAttribute("src") || o.getAttribute("href");
                            if (e && !/^chrome\-extension:\/\//.test(e))
                                return !1
                        } else {
                            if ("pre" !== t && o.offsetWidth + o.offsetHeight !== 0 && n)
                                return !1;
                            if ("pre" === t && n !== e)
                                return !1
                        }
                    }
                }
            }
            return (r || "").trim() || e
        }();
        if (t) {
            (e=>{
                e = e || {},
                Object.keys(e).forEach(t=>s[t] = e[t])
            }
            )(e);
            try {
                let e = /^([\w\.]+)\(\s*([\s\S]*)\s*\)$/gm
                  , s = /^(try\s*\{\s*)?/g
                  , a = /([;\s]*\}\s*catch\s*\(\s*\S+\s*\)\s*\{([\s\S])*\})?[;\s]*$/g
                  , l = t.replace(s, function() {
                    return i = i || arguments[1],
                    ""
                }).replace(a, function() {
                    return o = o || arguments[1],
                    ""
                }).trim()
                  , c = e.exec(l);
                if (null != c && (i && o || !i && !o))
                    n = c[1],
                    t = c[2];
                else if (!(e = /^([\{\[])/).test(t))
                    return;
                r = JSON.parse(t)
            } catch (e) {
                try {
                    r = new Function("return " + t)()
                } catch (e) {
                    try {
                        if ("string" == typeof (r = new Function("return '" + t + "'")()))
                            try {
                                r = JSON.parse(r)
                            } catch (e) {
                                r = new Function("return " + r)()
                            }
                    } catch (e) {
                        return
                    }
                }
            }
            if (null != r && "object" == typeof r) {
                try {
                    t = JSON.stringify(r)
                } catch (e) {
                    return
                }
                if (s.MAX_JSON_KEYS_NUMBER) {
                    let e = p(r);
                    if (e > s.MAX_JSON_KEYS_NUMBER) {
                        let t = '当前JSON共 <b style="color:red">' + e + "</b> 个Key，大于预设值" + s.MAX_JSON_KEYS_NUMBER + "，已取消自动格式化；可到FeHelper设置页调整此配置！";
                        return toast(t)
                    }
                }
                window.jsonformatContentScriptCssInject ? window.jsonformatContentScriptCssInject() : chrome.runtime.sendMessage({
                    type: "fh-dynamic-any-thing",
                    func: ((e,t)=>{
                        let n = e=>chrome.tabs.insertCSS({
                            code: e
                        })
                          , r = ()=>fetch("../json-format/content-script.css").then(e=>e.text()).then(e=>n(e))
                          , i = Awesome.getContentScript("json-format", !0);
                        return "string" == typeof i && i.length ? n(i) : i instanceof Promise ? i.then(e=>e ? n(e) : r()) : i || r(),
                        t && t(),
                        !0
                    }
                    ).toString()
                }),
                $("body").prepend((()=>['<div id="jfToolbar" class="x-toolbar" style="display:none">    <a href="http://www.baidufe.com/fehelper/feedback.html" target="_blank" class="x-a-title">        <img src="' + chrome.runtime.getURL("static/img/fe-16.png") + '" alt="fehelper"/> FeHelper</a>    <span class="x-b-title"></span>    <span class="x-sort">        <span class="x-split">|</span>        <span class="x-stitle">排序：</span>        <label for="sort_null">默认</label><input type="radio" name="jsonsort" id="sort_null" value="0" checked>        <label for="sort_asc">升序</label><input type="radio" name="jsonsort" id="sort_asc" value="1">        <label for="sort_desc">降序</label><input type="radio" name="jsonsort" id="sort_desc" value="-1">    </span>    <span class="x-fix-encoding"><span class="x-split">|</span><button class="xjf-btn" id="jsonGetCorrectCnt">乱码修正</button></span>    <span id="optionBar"></span>    <span class="fe-feedback">       <span class="x-settings"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 14 16" width="14">           <path fill-rule="evenodd" d="M14 8.77v-1.6l-1.94-.64-.45-1.09.88-1.84-1.13-1.13-1.81.91-1.09-.45-.69-1.92h-1.6l-.63 1.94-1.11.45-1.84-.88-1.13 1.13.91 1.81-.45 1.09L0 7.23v1.59l1.94.64.45 1.09-.88 1.84 1.13 1.13 1.81-.91 1.09.45.69 1.92h1.59l.63-1.94 1.11-.45 1.84.88 1.13-1.13-.92-1.81.47-1.09L14 8.75v.02zM7 11c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path>       </svg>高级定制</span>       <a id="toggleBtn" title="展开或收起工具栏">隐藏&gt;&gt;</a>    </span></div>', '<div id="formattingMsg"><span class="x-loading"></span>格式化中...</div>', '<div class="mod-json mod-contentscript"><div class="rst-item">', '<div id="jfCallbackName_start" class="callback-name"></div>', '<div id="jfContent"></div>', '<pre id="jfContent_pre"></pre>', '<div id="jfCallbackName_end" class="callback-name"></div>', "</div></div>"].join(""))()),
                $("body>pre").remove().length || Array.prototype.slice.call(document.body.childNodes).forEach(e=>{
                    e.nodeType === Node.TEXT_NODE && e.remove()
                }
                ),
                s.originalSource = t,
                c(),
                u()
            }
        }
    };
    return {
        format: ()=>a(e=>e.JSON_PAGE_FORMAT && d(e))
    }
}
)();
