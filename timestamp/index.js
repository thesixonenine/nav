let TRstaticjsutils = function(e) {
    return window.baidu = {
        namespace: {
            register: function(e) {
                for (var t = /^[_$a-z]+[_$a-z0-9]*/i, i = e.split("."), o = [window], n = 0; n < i.length; n++) {
                    if (!t.test(i[n]))
                        throw new Error("Invalid namespace:" + i[n]);
                    o[n + 1] = o[n][i[n]],
                    void 0 === o[n + 1] && (o[n + 1] = new Object)
                }
            }
        }
    },
    String.prototype.getBytes = function() {
        var e = this.replace(/\n/g, "xx").replace(/\t/g, "x");
        return encodeURIComponent(e).replace(/%[A-Z0-9][A-Z0-9]/g, "x").length
    }
    ,
    String.prototype.trim = function() {
        return this.replace(/^\s*|\s*$/g, "")
    }
    ,
    Date.prototype.format = function(e) {
        let t = function(e, t) {
            let i = ""
              , o = e < 0
              , n = String(Math.abs(e));
            return n.length < t && (i = new Array(t - n.length + 1).join("0")),
            (o ? "-" : "") + i + n
        };
        if ("string" != typeof e)
            return this.toString();
        let i = function(t, i) {
            e = e.replace(t, i)
        }
          , o = this.getFullYear()
          , n = this.getMonth() + 1
          , s = this.getDate()
          , r = this.getHours()
          , l = this.getMinutes()
          , a = this.getSeconds()
          , d = this.getMilliseconds();
        return i(/yyyy/g, t(o, 4)),
        i(/yy/g, t(parseInt(o.toString().slice(2), 10), 2)),
        i(/MM/g, t(n, 2)),
        i(/M/g, n),
        i(/dd/g, t(s, 2)),
        i(/d/g, s),
        i(/HH/g, t(r, 2)),
        i(/H/g, r),
        i(/hh/g, t(r % 12, 2)),
        i(/h/g, r % 12),
        i(/mm/g, t(l, 2)),
        i(/m/g, l),
        i(/ss/g, t(a, 2)),
        i(/s/g, a),
        i(/SSS/g, t(d, 3)),
        i(/S/g, d),
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
            let i = document.createElement("div");
            i.innerHTML = '<div id="fehelper_alertmsg" style="position:fixed;top:5px;right:5px;z-index:1000000"><p style="background:#000;display:inline-block;color:#fff;text-align:center;padding:10px 10px;margin:0 auto;font-size:14px;border-radius:4px;">' + e + "</p></div>",
            t = i.childNodes[0],
            document.body.appendChild(t)
        }
        window.feHelperAlertMsgTid = window.setTimeout(function() {
            t.style.display = "none"
        }, 3e3)
    }
    ,
    e.exports.getCurrAbsPath = function() {
        let e, t = /((?:http|https|file|chrome-extension):\/\/.*?\/[^:]+)(?::\d+)?:\d+/;
        try {
            a.b()
        } catch (t) {
            e = t.fileName || t.sourceURL || t.stack || t.stacktrace
        }
        if (e)
            return t.exec(e)[1]
    }
    ,
    e.exports
}({
    exports: {}
});
new Vue({
    el: "#pageContainer",
    data: {
        txtNowS: Math.round((new Date).getTime() / 1e3),
        txtNowMs: (new Date).getTime(),
        txtNowDate: (new Date).toLocaleString(),
        txtSrcStamp: "",
        txtDesDate: "",
        txtLocale: "",
        txtDesStamp: "",
        secFrom: "s",
        secTo: "s",
        worldTime: {},
        curGMT: (new Date).getTimezoneOffset() / 60 * -1
    },
    mounted: function() {
        this.startTimestamp()
    },
    methods: {
        startTimestamp: function() {
            let e = "yyyy-MM-dd HH:mm:ss";
            window.intervalId = window.setInterval(()=>{
                let t = new Date
                  , i = new Date(t.getTime() + 6e4 * t.getTimezoneOffset())
                  , o = new Date(i.getTime() + 60 * this.curGMT * 6e4);
                this.txtNowDate = o.format(e),
                this.txtNowS = Math.round(o.getTime() / 1e3),
                this.txtNowMs = o.getTime(),
                this.worldTime.local = this.txtNowDate,
                this.worldTime.gmt = i.format(e);
                for (let t = -12; t <= 12; t++)
                    this.worldTime[t > 0 ? "+" + t : t] = new Date(i.getTime() + 60 * t * 6e4).format(e)
            }
            , 1e3)
        },
        unixToggle: function() {
            window.toggleModel = window.toggleModel || 0,
            window.toggleModel ? (this.$refs.btnToggle.value = "暂停",
            window.toggleModel = 0,
            this.startTimestamp()) : (this.$refs.btnToggle.value = "开始",
            window.toggleModel = 1,
            window.clearInterval(window.intervalId))
        },
        stampToLocale: function() {
            if (0 === this.txtSrcStamp.length)
                return void alert("请先填写你需要转换的Unix时间戳");
            if (!parseInt(this.txtSrcStamp, 10))
                return void alert("请输入合法的Unix时间戳");
            let e = "s" === this.secFrom ? 1e3 : 1
              , t = "yyyy-MM-dd HH:mm:ss" + ("s" === this.secFrom ? "" : ":SSS");
            this.txtDesDate = new Date(parseInt(this.txtSrcStamp, 10) * e + 6e4 * ((new Date).getTimezoneOffset() + 60 * this.curGMT)).format(t)
        },
        localeToStamp: function() {
            this.txtLocale && !/\s\d+:\d+:\d+/.test(this.txtLocale) && (this.txtLocale += " 00:00:00");
            let e = new Date(Date.parse(this.txtLocale) - 6e4 * ((new Date).getTimezoneOffset() + 60 * this.curGMT)).getTime();
            isNaN(e) && alert("请输入合法的时间格式，如：2014-04-01 10:01:01，或：2014-01-01");
            let t = "s" === this.secTo ? 1e3 : 1;
            this.txtDesStamp = Math.round(e / t)
        },
        copyToClipboard(e) {
            if (!e || !(e || "").trim().length)
                return;
            let t = document.createElement("textarea");
            t.style.position = "fixed",
            t.style.opacity = 0,
            t.value = e,
            document.body.appendChild(t),
            t.select(),
            document.execCommand("Copy"),
            document.body.removeChild(t),
            this.toast("已复制到剪贴板，随处粘贴可用：[ " + e + " ]")
        },
        toast(e) {
            window.clearTimeout(window.feHelperAlertMsgTid);
            let t = document.querySelector("#fehelper_alertmsg");
            if (t)
                t.innerHTML = e,
                t.style.display = "block";
            else {
                let i = document.createElement("div");
                i.innerHTML = '<div id="fehelper_alertmsg">' + e + "</div>",
                t = i.childNodes[0],
                document.body.appendChild(t)
            }
            window.feHelperAlertMsgTid = window.setTimeout(function() {
                t.style.display = "none"
            }, 3e3)
        }
    }
});
