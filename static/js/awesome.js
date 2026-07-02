window.RemoteAwesome = {
    newTools: (() => {
        let n = {
            "json-format": {
                tips: "页面自动检测并格式化、手动格式化、乱码解码、排序、BigInt、编辑、下载、皮肤定制等"
            },
            "qr-code": {
                contentScript: !0
            },
            postman: {
                name: "简易Postman"
            },
            "page-monkey": {
                name: "网页油猴工具",
                tips: "自行配置页面匹配规则、编写Hack脚本，实现网页Hack，如页面自动刷新、自动抢票等",
                contentScript: !0,
                menuConfig: [{
                    icon: "♀",
                    text: "网页油猴工具",
                    onClick: function (n, e) {
                        chrome.DynamicToolRunner({
                            query: "tool=page-monkey"
                        })
                    }
                }]
            },
            "code-beautify": {
                contentScript: !0,
                contentScriptCss: !0
            },
            screenshot: {
                name: "网页截屏工具",
                tips: "可对任意网页进行截屏，支持可视区域截屏、全网页滚动截屏，最终结果可预览后再保存",
                contentScript: !0,
                menuConfig: [{
                    icon: "✂",
                    text: "网页截屏工具",
                    onClick: function (n, e) {
                        let o = confirm("取消(否)：可视区域截屏！\n确定(是)：网页滚动截屏！");
                        chrome.tabs.executeScript(e.id, {
                            code: "(" + function (n, e) {
                                    let o = window.screenshotContentScript;
                                    o && o({
                                        tabInfo: n,
                                        captureInfo: e
                                    })()
                                }.toString() + ")(" + JSON.stringify(e) + "," +
                                JSON.stringify({
                                    captureType: o ? "whole" : "visible"
                                }) + ")",
                            allFrames: !1
                        })
                    }
                }]
            },
            "color-picker": {
                name: "页面取色工具",
                tips: "可直接在网页上针对任意元素进行色值采集，将光标移动到需要取色的位置，单击确定即可",
                noPage: !0,
                contentScript: !0,
                minVersion: "2020.02.0718",
                menuConfig: [{
                    icon: "✑",
                    text: "页面取色工具",
                    onClick: function (n, e) {
                        chrome.DynamicToolRunner({
                            query: "tool=color-picker",
                            noPage: !0
                        })
                    }
                }]
            },
            naotu: {
                name: "便捷思维导图",
                tips: "轻量便捷，随想随用，支持自动保存、本地数据存储、批量数据导入导出、图片格式下载等",
                menuConfig: [{
                    icon: "Ψ",
                    text: "便捷思维导图",
                    onClick: function (n, e) {
                        chrome.DynamicToolRunner({
                            query: "tool=naotu"
                        })
                    }
                }]
            },
            html2markdown: {
                name: "Markdown工具",
                tips: "Markdown编辑器，支持在线编写、预览、下载等，并支持HTML内容到Markdown格式的转换"
            },
            "grid-ruler": {
                name: "网页栅格标尺",
                tips: "Web开发用，横竖两把尺子，以10px为单位，用以检测&校准当前网页的栅格对齐率",
                contentScript: !0,
                contentScriptCss: !0,
                noPage: !0,
                menuConfig: [{
                    icon: "Ⅲ",
                    text: "网页栅格标尺",
                    onClick: function (n, e) {
                        chrome.DynamicToolRunner({
                            query: "tool=grid-ruler",
                            noPage: !0
                        })
                    }
                }]
            },
            "code-compress": {
                name: "代码压缩工具",
                tips: "Web开发用，提供简单的代码压缩功能，支持HTML、Javascript、CSS代码压缩",
                menuConfig: [{
                    icon: "♯",
                    text: "代码压缩工具",
                    onClick: function (n, e) {
                        chrome.DynamicToolRunner({
                            query: "tool=code-compress",
                            noPage: !0
                        })
                    }
                }]
            },
            "page-timing": {
                name: "网页性能检测",
                tips: "检测网页加载性能，包括握手、响应、渲染等各阶段耗时，同时提供Response Headers以便分析",
                contentScript: !0,
                noPage: !0,
                menuConfig: [{
                    icon: "Σ",
                    text: "网页性能检测",
                    onClick: function (n, e) {
                        chrome.DynamicToolRunner({
                            query: "tool=page-timing",
                            noPage: !0
                        })
                    }
                }]
            },
            excel2json: {
                name: "Excel转JSON",
                tips: "将Excel或CVS中的数据，直接转换成为结构化数据，如JSON、XML、MySQL、PHP等（By @hpng）",
                menuConfig: [{
                    icon: "Ⓗ",
                    text: "Excel转JSON",
                    onClick: function (n, e) {
                        chrome.DynamicToolRunner({
                            query: "tool=excel2json",
                            noPage: !0
                        })
                    }
                }]
            }
        };
        Object.keys(n).forEach(e => {
            n[e].installed = !1, n[e].upgrade = !1, n[e].menu = !1
        });
        try {
            let e = n => parseInt(n.split(/\./).map(n => n.padStart(4, "0")).join(""), 10),
                o = e(chrome.runtime.getManifest().version);
            Object.keys(n).forEach(t => {
                n[t].minVersion && e(n[t].minVersion) > o && delete n[t]
            })
        } catch (n) {}
        return n
    })(),
    removedTools: []
};