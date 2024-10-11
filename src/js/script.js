"use strict";

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _regeneratorRuntime() {
    _regeneratorRuntime = function () {
        return s
    };
    var s = {}, e = Object.prototype, c = e.hasOwnProperty, t = "function" == typeof Symbol ? Symbol : {},
        o = t.iterator || "@@iterator", n = t.asyncIterator || "@@asyncIterator", i = t.toStringTag || "@@toStringTag";

    function a(e, t, n) {
        return Object.defineProperty(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}), e[t]
    }

    try {
        a({}, "")
    } catch (e) {
        a = function (e, t, n) {
            return e[t] = n
        }
    }

    function r(e, t, n, o) {
        var i, a, s, r, t = t && t.prototype instanceof u ? t : u, t = Object.create(t.prototype), o = new b(o || []);
        return t._invoke = (i = e, a = n, s = o, r = "suspendedStart", function (e, t) {
            if ("executing" === r) throw new Error("Generator is already running");
            if ("completed" === r) {
                if ("throw" === e) throw t;
                return x()
            }
            for (s.method = e, s.arg = t; ;) {
                var n = s.delegate;
                if (n) {
                    n = function e(t, n) {
                        var o = t.iterator[n.method];
                        if (void 0 === o) {
                            if (n.delegate = null, "throw" === n.method) {
                                if (t.iterator.return && (n.method = "return", n.arg = void 0, e(t, n), "throw" === n.method)) return d;
                                n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return d
                        }
                        o = l(o, t.iterator, n.arg);
                        if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, d;
                        o = o.arg;
                        return o ? o.done ? (n[t.resultName] = o.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = void 0), n.delegate = null, d) : o : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, d)
                    }(n, s);
                    if (n) {
                        if (n === d) continue;
                        return n
                    }
                }
                if ("next" === s.method) s.sent = s._sent = s.arg; else if ("throw" === s.method) {
                    if ("suspendedStart" === r) throw r = "completed", s.arg;
                    s.dispatchException(s.arg)
                } else "return" === s.method && s.abrupt("return", s.arg);
                r = "executing";
                n = l(i, a, s);
                if ("normal" === n.type) {
                    if (r = s.done ? "completed" : "suspendedYield", n.arg === d) continue;
                    return {value: n.arg, done: s.done}
                }
                "throw" === n.type && (r = "completed", s.method = "throw", s.arg = n.arg)
            }
        }), t
    }

    function l(e, t, n) {
        try {
            return {type: "normal", arg: e.call(t, n)}
        } catch (e) {
            return {type: "throw", arg: e}
        }
    }

    s.wrap = r;
    var d = {};

    function u() {
    }

    function p() {
    }

    function h() {
    }

    var t = {}, f = (a(t, o, function () {
            return this
        }), Object.getPrototypeOf), f = f && f(f(y([]))),
        v = (f && f !== e && c.call(f, o) && (t = f), h.prototype = u.prototype = Object.create(t));

    function w(e) {
        ["next", "throw", "return"].forEach(function (t) {
            a(e, t, function (e) {
                return this._invoke(t, e)
            })
        })
    }

    function m(s, r) {
        var t;
        this._invoke = function (n, o) {
            function e() {
                return new r(function (e, t) {
                    !function t(e, n, o, i) {
                        var a, e = l(s[e], s, n);
                        if ("throw" !== e.type) return (n = (a = e.arg).value) && "object" == _typeof(n) && c.call(n, "__await") ? r.resolve(n.__await).then(function (e) {
                            t("next", e, o, i)
                        }, function (e) {
                            t("throw", e, o, i)
                        }) : r.resolve(n).then(function (e) {
                            a.value = e, o(a)
                        }, function (e) {
                            return t("throw", e, o, i)
                        });
                        i(e.arg)
                    }(n, o, e, t)
                })
            }

            return t = t ? t.then(e, e) : e()
        }
    }

    function g(e) {
        var t = {tryLoc: e[0]};
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
    }

    function $(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t
    }

    function b(e) {
        this.tryEntries = [{tryLoc: "root"}], e.forEach(g, this), this.reset(!0)
    }

    function y(t) {
        if (t) {
            var n, e = t[o];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) return n = -1, (e = function e() {
                for (; ++n < t.length;) if (c.call(t, n)) return e.value = t[n], e.done = !1, e;
                return e.value = void 0, e.done = !0, e
            }).next = e
        }
        return {next: x}
    }

    function x() {
        return {value: void 0, done: !0}
    }

    return a(v, "constructor", p.prototype = h), a(h, "constructor", p), p.displayName = a(h, i, "GeneratorFunction"), s.isGeneratorFunction = function (e) {
        e = "function" == typeof e && e.constructor;
        return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
    }, s.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, a(e, i, "GeneratorFunction")), e.prototype = Object.create(v), e
    }, s.awrap = function (e) {
        return {__await: e}
    }, w(m.prototype), a(m.prototype, n, function () {
        return this
    }), s.AsyncIterator = m, s.async = function (e, t, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new m(r(e, t, n, o), i);
        return s.isGeneratorFunction(t) ? a : a.next().then(function (e) {
            return e.done ? e.value : a.next()
        })
    }, w(v), a(v, i, "Generator"), a(v, o, function () {
        return this
    }), a(v, "toString", function () {
        return "[object Generator]"
    }), s.keys = function (n) {
        var e, o = [];
        for (e in n) o.push(e);
        return o.reverse(), function e() {
            for (; o.length;) {
                var t = o.pop();
                if (t in n) return e.value = t, e.done = !1, e
            }
            return e.done = !0, e
        }
    }, s.values = y, b.prototype = {
        constructor: b, reset: function (e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach($), !e) for (var t in this) "t" === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
        }, stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval
        }, dispatchException: function (n) {
            if (this.done) throw n;
            var o = this;

            function e(e, t) {
                return a.type = "throw", a.arg = n, o.next = e, t && (o.method = "next", o.arg = void 0), !!t
            }

            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var i = this.tryEntries[t], a = i.completion;
                if ("root" === i.tryLoc) return e("end");
                if (i.tryLoc <= this.prev) {
                    var s = c.call(i, "catchLoc"), r = c.call(i, "finallyLoc");
                    if (s && r) {
                        if (this.prev < i.catchLoc) return e(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                    } else if (s) {
                        if (this.prev < i.catchLoc) return e(i.catchLoc, !0)
                    } else {
                        if (!r) throw new Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return e(i.finallyLoc)
                    }
                }
            }
        }, abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var o = this.tryEntries[n];
                if (o.tryLoc <= this.prev && c.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break
                }
            }
            var a = (i = i && ("break" === e || "continue" === e) && i.tryLoc <= t && t <= i.finallyLoc ? null : i) ? i.completion : {};
            return a.type = e, a.arg = t, i ? (this.method = "next", this.next = i.finallyLoc, d) : this.complete(a)
        }, complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
        }, finish: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), $(n), d
            }
        }, catch: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var n, o, i = this.tryEntries[t];
                if (i.tryLoc === e) return "throw" === (n = i.completion).type && (o = n.arg, $(i)), o
            }
            throw new Error("illegal catch attempt")
        }, delegateYield: function (e, t, n) {
            return this.delegate = {
                iterator: y(e),
                resultName: t,
                nextLoc: n
            }, "next" === this.method && (this.arg = void 0), d
        }
    }, s
}

function asyncGeneratorStep(e, t, n, o, i, a, s) {
    try {
        var r = e[a](s), c = r.value
    } catch (e) {
        return void n(e)
    }
    r.done ? t(c) : Promise.resolve(c).then(o, i)
}

function _asyncToGenerator(r) {
    return function () {
        var e = this, s = arguments;
        return new Promise(function (t, n) {
            var o = r.apply(e, s);

            function i(e) {
                asyncGeneratorStep(o, t, n, i, a, "next", e)
            }

            function a(e) {
                asyncGeneratorStep(o, t, n, i, a, "throw", e)
            }

            i(void 0)
        })
    }
}

function _classCallCheck(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
}

function _defineProperties(e, t) {
    for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
    }
}

function _createClass(e, t, n) {
    return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), Object.defineProperty(e, "prototype", {writable: !1}), e
}

function forms() {
    $(".deaSearch .inp").focus(function () {
        $(this).val() === this.defaultValue && $(this).val("")
    }).blur(function () {
        "" === $(this).val() && $(this).val(this.defaultValue)
    })
}

function tabs(e, t) {
    var n, o = $(e).children(), i = $(t).children();
    i.hide(), o.each(function () {
        $(this).hasClass("on") && (n = $(this).index())
    }), i.eq(n).show(), o.click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var e = o.index(this);
        i.eq(e).fadeIn("linear").siblings().hide()
    })
}

$(function () {
    checkBrowser(), search(), pageNav(), header(), mbNav(), autoFold(), $(".index-scale").click(function () {
        $(".index-scale-form").addClass("show")
    }), $(".index-scale-form .close-btn").click(function () {
        $(".index-scale-form").removeClass("show")
    }), $(document).mouseup(function (e) {
        var t = $(".index-scale-form")[0], n = $(".tips-popup")[0],
            o = $(e.target).attr("class") ? $(e.target).attr("class") : "";
        t.contains(e.target) || -1 !== o.indexOf("geetest") || n && n.contains(e.target) || $(".index-scale-form").removeClass("show")
    })
});
var checkBrowser = function e() {
    var t = window.navigator.userAgent.toLowerCase(), n = /msie 8\.0/i.test(t), o = /msie 7\.0/i.test(t),
        t = /msie 6\.0/i.test(t), i = "";
    n ? (i = '<div class="checkBrowser"><span>您现在使用的是IE8内核，版本过低！建议您升级到IE9+或者使用极速模式浏览，以体验最佳效果!</span><a title="关闭" onclick="checkBrowser.close();">×</a></div>', $("body").append(i)) : o ? (i = '<div class="checkBrowser"><span>您现在使用的是IE7内核，版本过低！建议您升级到IE9+或者使用极速模式浏览，以体验最佳效果!</span><a title="关闭" onclick="checkBrowser.close();">×</a></div>', $("body").append(i)) : t && (i = '<div class="checkBrowser"><span>您现在使用的是IE6内核，版本过低！建议您升级到IE9+或者使用极速模式浏览，以体验最佳效果!</span><a title="关闭" onclick="checkBrowser.close();">×</a></div>', $("body").append(i)), e.close = function () {
        $(".checkBrowser").remove()
    }
}, isMobile = function () {
    var e = navigator.userAgent.toLowerCase(), t = 0 <= e.indexOf("ipad"), n = 0 <= e.indexOf("iphone os"),
        o = 0 <= e.indexOf("midp"), i = 0 <= e.indexOf("rv:1.2.3.4"), a = 0 <= e.indexOf("ucweb"),
        s = 0 <= e.indexOf("android"), r = 0 <= e.indexOf("windows ce"), e = 0 <= e.indexOf("windows mobile");
    return t || n || o || i || a || s || r || e
};

function func(e) {
    e.preventDefault()
}

var Alert = function () {
    function e() {
        _classCallCheck(this, e), this.boxId = Math.random().toString(36).substring(2, 6), this.option = {
            type: "",
            title: "提示信息",
            content: null,
            submitText: "确定",
            cancelText: "取消",
            footerHide: !1,
            cancelHide: !1,
            duration: 0,
            btnColor: "#2d8cf0",
            doneClick: function (e) {
            },
            cancelClick: function (e) {
            },
            onClose: function (e) {
            }
        }
    }

    return _createClass(e, [{
        key: "init", value: function () {
            var e = this, t = "tips-popup-icon", n = "",
                o = this.option.content ? '<div class="tips-popup-content">' + this.option.content + "</div>" : "",
                i = this.option.footerHide ? "" : this.option.cancelHide ? '<ul class="tips-popup-footer"><li class="submit-btn" style="border-color:' + this.option.btnColor + ";background-color:" + this.option.btnColor + '">' + this.option.submitText + "</li></ul>" : '<ul class="tips-popup-footer"><li class="cancel-btn">' + this.option.cancelText + '</li><li class="submit-btn" style="border-color:' + this.option.btnColor + ";background-color:" + this.option.btnColor + '">' + this.option.submitText + "</li></ul>";
            switch (this.option.type) {
                case"success":
                    n = "tips-icon-success";
                    break;
                case"error":
                    n = "tips-icon-error";
                    break;
                case"info":
                    n = "tips-icon-info";
                    break;
                case"question":
                    n = "tips-icon-question";
                    break;
                case"alert":
                    n = "tips-icon-alert";
                    break;
                default:
                    t = null
            }
            o = '<div class="tips-popup" id="tipsP' + this.boxId + '"><div class="tips-popup-mask"></div><div class="tips-popup-box ' + t + '"><div class="tips-popup-head"><span class="tips-icon ' + n + '">&nbsp;</span><div class="title">' + this.option.title + '</div><span class="tips-popup-close">&nbsp;</span></div>' + o + i + "</div></div>";
            $("body").append(o), $("".concat("#tipsP" + this.boxId)).addClass("init"), setTimeout(function () {
                $("".concat("#tipsP" + e.boxId)).addClass("show"), e.listenEvt()
            }, 200)
        }
    }, {
        key: "success", value: function (e) {
            $.extend(this.option, {type: "success", cancelHide: !0}, e), this.init()
        }
    }, {
        key: "error", value: function (e) {
            $.extend(this.option, {type: "error", cancelHide: !0}, e), this.init()
        }
    }, {
        key: "info", value: function (e) {
            $.extend(this.option, {type: "info"}, e), this.init()
        }
    }, {
        key: "question", value: function (e) {
            $.extend(this.option, {type: "question"}, e), this.init()
        }
    }, {
        key: "alert", value: function (e) {
            $.extend(this.option, {type: "alert", cancelHide: !0}, e), this.init()
        }
    }, {
        key: "close", value: function () {
            var e = this;
            $("".concat("#tipsP" + this.boxId)).removeClass("init show"), setTimeout(function () {
                $("".concat("#tipsP" + e.boxId)).remove()
            }, 400), this.option.onClose()
        }
    }, {
        key: "listenEvt", value: function () {
            var e = this;
            0 !== e.option.duration && setTimeout(function () {
                e.close()
            }, e.option.duration), $("".concat("#tipsP" + this.boxId, " .submit-btn")).click(function () {
                e.option.doneClick(), e.close()
            }), $("".concat("#tipsP" + this.boxId, " .cancel-btn")).click(function () {
                e.close(), e.option.cancelClick()
            }), $("".concat("#tipsP" + this.boxId, " .tips-popup-mask, ").concat("#tipsP" + this.boxId, " .tips-popup-close")).click(function () {
                e.close()
            })
        }
    }]), e
}();

function getVerCode(n) {
    if (!n.url) throw console.error("请填写校验秘钥获取地址！");
    $(n.el).append('<div class="captcha-title">安全组件加载中</div><div class="captcha-show captcha-loading-con">\n                <div class="captcha-loading">\n                    <div class="captcha-loading-dot"></div>\n                    <div class="captcha-loading-dot"></div>\n                    <div class="captcha-loading-dot"></div>\n                    <div class="captcha-loading-dot"></div>\n                </div>\n            </div>'), $.ajax({
        url: n.url,
        type: "get",
        dataType: "jsonp",
        success: function (e) {
            $("".concat(n.el, " .captcha-title")).hide(), $("".concat(n.el, " .captcha-loading-con")).show(), window.initGeetest({
                lang: n.lang || "zh-cn",
                gt: e.code.gt,
                https: !0,
                challenge: e.code.challenge,
                new_captcha: e.code.new_captcha,
                product: "popup",
                width: "100%",
                offline: !e.code.success
            }, function (e) {
                var t = e;
                e.appendTo(n.el), e.onReady(function () {
                    $("".concat(n.el, " .captcha-loading-con")).hide()
                }), e.onError(function () {
                    t.reset()
                }), n.callback(e)
            })
        }
    })
}

function codeCountdown(t) {
    var n = null, o = Math.round(+new Date / 1e3), n = setInterval(function () {
        var e = Math.round(+new Date / 1e3), e = o + Number(t.interval) - e;
        0 < e ? $(t.el).addClass("disabled").text(e + "s后重新发送") : ($(t.el).removeClass("disabled").text("获取验证码"), t.callback(), clearInterval(n))
    }, 1e3)
}

function getPhoneCode(n) {
    var o = !0, e = window.location.origin, i = new Alert;
    n = $.extend({}, {
        url: "".concat(e, "/api/sms/send"), onSuccess: function () {
        }, onError: function () {
        }
    }, n), $(n.btn).unbind().click(function () {
        if (o) {
            var e = $(n.data.mobileEl).val();
            if (!/^1[3456789]\d{9}$/.test(e)) return i.error({content: "请输入正确的手机号"}), !1;
            o = !1, $.ajax({
                url: n.url, method: "POST", data: {mobile: e, event: n.data.event}, success: function (e) {
                    1 === e.code ? (n.onSuccess(e), codeCountdown({
                        el: n.btn, interval: 60, callback: function () {
                            o = !0
                        }
                    })) : (o = !0, n.onError(e), i.error({content: e.msg}))
                }, error: function (e, t) {
                    o = !0, n.onError({msg: "请求错误!"}), i.error({content: t})
                }
            })
        }
    })
}

var ShareTo = function () {
    function t(e) {
        _classCallCheck(this, t);
        var n = this;
        this.params = $.extend({
            url: window.location.href,
            title: document.title,
            el: ".share-btn"
        }, e), $(this.params.el).each(function () {
            var e = $(this).attr("data-share");
            n["".concat(e)]($(this))
        }).click(function () {
            var e = $(this).attr("data-url"),
                t = "height=540,width=720, top = " + (window.screen.height - 540) / 2 + ", left = " + (window.screen.width - 720) / 2 + ", toolbar=no,menubar=no,resizable=yes,location=yes,status=no";
            e ? window.open(e, "share", t) : n.isWechat() && $(".wechat-tip-mask").show()
        })
    }

    return _createClass(t, [{
        key: "qq", value: function (e) {
            var t = "http://connect.qq.com/widget/shareqq/index.html?url=" + encodeURIComponent(this.params.url) + "&showcount=0&desc=" + encodeURIComponent(this.params.title) + "&summary=&title=" + encodeURIComponent(this.params.title) + "&pics=&style=203&width=19&height=22";
            e.attr("data-url", t)
        }
    }, {
        key: "weibo", value: function (e) {
            var t = "http://service.weibo.com/share/share.php?url=" + encodeURIComponent(this.params.url) + "&appkey=&title=" + encodeURIComponent(this.params.title) + "&pic=&ralateUid=&language=&searchPic=false";
            e.attr("data-url", t)
        }
    }, {
        key: "wechat", value: function (e) {
            var t, n = "";
            this.isWechat() ? (n = '<div class="wechat-tip-mask"></div>', $("body").append(n), $(".wechat-tip-mask").click(function () {
                $(this).hide()
            })) : (t = Math.random().toString(36).substring(3, 9), n = '<div class="wechat-ewm"><div class="img" id="wechatEwm-'.concat(t, '"></div><p>用微信扫描二维码</p></div>'), $("#wechatEwm-".concat(t)).length <= 0 && e.append(n), $("#wechatEwm-".concat(t)).qrcode({
                render: "canvas",
                text: this.params.url,
                width: 113,
                height: 113
            }))
        }
    }, {
        key: "isWechat", value: function () {
            return -1 !== window.navigator.userAgent.toLowerCase().indexOf("micromessenger")
        }
    }]), t
}(), imgLightbox = function (e, t) {
    var i, a, n, o = isMobile();
    $("body").append('<div class="article-swiper swiper-container" id="originImg">\n    <div class="swiper-wrapper"></div>\n    <div class="swiper-pagination"></div>\n    <div class="swiper-close-icon"></div>\n</div>'), !o && "both" !== t || (i = new Swiper("#originImg", {
        zoom: !0,
        width: window.innerWidth,
        virtual: !0,
        spaceBetween: 20,
        pagination: {el: ".swiper-pagination", type: "fraction"},
        on: {
            init: function () {
            }
        }
    }), a = !1, $(e).each(function () {
        var n = [], o = [];
        $(".swiper-close-icon").off().click(function () {
            $("#originImg").fadeOut("fast"), i.virtual.slides.length = 0, i.virtual.cache = [], a = !1
        }), $(this).find("img").each(function (t) {
            n[t] = $(this).attr("src"), o[t] = $(this).attr("alt"), $(this).click(function () {
                for (var e = 0; e < n.length; e++) i.virtual.appendSlide('<div class="swiper-zoom-container"><img src="' + n[e] + '" /><p>' + o[e] + "</p></div>");
                i.slideTo(t), $("#originImg").fadeIn("fast"), a = !0, i.zoom.out()
            })
        })
    }), document.addEventListener("touchstart", function (e) {
        1 < e.touches.length && a && e.preventDefault()
    }), n = 0, document.addEventListener("touchend", function (e) {
        var t = (new Date).getTime();
        t - n <= 300 && e.preventDefault(), n = t
    }, !1), document.addEventListener("touchmove", function (e) {
        a && e.preventDefault()
    }))
}, NavMobile = function () {
    function n(e, t) {
        _classCallCheck(this, n), this.scroller = null, this.Dom = e, this.scrollDom = t
    }

    return _createClass(n, [{
        key: "init", value: function () {
            var t = this;
            $(this.Dom).find(".sub").each(function () {
                0 < $(this).prev().find(".nav-mobile-child-btn").length || $(this).prev().prepend('<div class="nav-mobile-child-btn"><i></i></div>')
            }), this.scroller = BetterScroll.createBScroll(this.scrollDom, {
                tap: !0,
                click: !0,
                scrollX: !1,
                scrollY: !0,
                mouseWheel: !1
            }), $(".nav-mobile-child-btn").on("click", function (e) {
                e.stopPropagation(), $(this).hasClass("open") ? ($(this).removeClass("open"), $(this).parent().next().css("display", "none")) : ($(this).addClass("open"), $(this).parent().next().css("display", "block")), t.scroller.refresh()
            })
        }
    }, {
        key: "show", value: function () {
            var e = this;
            $(this.Dom).show(), setTimeout(function () {
                $(e.scrollDom).addClass("anim")
            }, 0), document.addEventListener("touchmove", func, !!isPassive() && {
                capture: !1,
                passive: !1
            }), this.init()
        }
    }, {
        key: "remove", value: function () {
            var e = this;
            $(this.scrollDom).removeClass("anim"), setTimeout(function () {
                $(e.Dom).css("display", "none")
            }, 400), this.scroller.destroy(), $(".nav-mobile-child-btn").off("click"), document.removeEventListener("touchmove", func, !!isPassive() && {
                capture: !1,
                passive: !1
            })
        }
    }]), n
}();

function navMobile() {
    var e = new NavMobile("#navMobile", "#navScroller");
    $(".header-mb-icon").click(function () {
        e.show()
    }), $(".nav-mobile-top, .nav-mobile-con .bg").click(function () {
        e.remove()
    })
}

function search() {
    $(".header-search-box").click(function (e) {
        $(e.target).hasClass("headerSearchBtn") && $(".search-wrapper").toggleClass("show"), $(e.target).hasClass("search-wrapper") && $(".search-wrapper").removeClass("show")
    })
}

function pageNav() {
    1024 < $(window).width() || ($(".mb-nav").click(function () {
        $(this).toggleClass("active").next().stop().slideToggle()
    }), $(".nav-content").click(function (e) {
        $(e.target).hasClass("nav-content") && ($(this).slideUp(), $(this).prev().removeClass("active"))
    }))
}

function edu() {
    $(".investor-edu-wrapper .item").click(function () {
        $(this).toggleClass("on").find(".answer-box").stop().slideToggle()
    })
}

function baseData() {
    $(".head-swiper").each(function () {
        var t = [], e = $(this).children(".table-prev-btn")[0], n = $(this).children(".table-next-btn")[0],
            i = $(this).data("preview"), o = $(this).parent().nextAll().find(".info-swiper"),
            a = $(this).parent().nextAll().find(".info-title"), s = 0, r = new Swiper(this, {
                observeParents: !0,
                observer: !0,
                watchOverflow: !0,
                slidesPerView: i,
                resistanceRatio: 0,
                navigation: {prevEl: e, nextEl: n},
                breakpoints: {320: {slidesPerView: 2}, 1024: {slidesPerView: i}},
                on: {
                    slideChange: function () {
                        var n = this;
                        t.forEach(function (e, t) {
                            e.slideTo(n.activeIndex)
                        })
                    }
                }
            });
        o.each(function (o) {
            var e = new Swiper(this, {
                observeParents: !0,
                observer: !0,
                watchOverflow: !0,
                slidesPerView: i,
                breakpoints: {320: {slidesPerView: 2}, 1024: {slidesPerView: i}},
                on: {
                    slideChange: function () {
                        var n = this;
                        t.forEach(function (e, t) {
                            t !== o && (console.log(this), e.slideTo(n.activeIndex))
                        }), r.slideTo(n.activeIndex)
                    }
                }
            });
            t.push(e)
        }), a.children().each(function () {
            $(this).width() > s && (s = $(this).width())
        }), $(this).prev().width(s)
    })
}

function index() {
    new Swiper(".index-banner-swiper", {
        observer: !0,
        observeParents: !0,
        watchOverflow: !0,
        speed: 900,
        effect: "fade",
        autoplay: {delay: 3e3, stopOnLastSlide: !1, disableOnInteraction: !1},
        pagination: {el: ".index-banner-pagination", clickable: !0}
    });
    $(".index-banner-mouse").click(function () {
        var e = $(document).height() - $(window).height();
        $("html,body").animate({scrollTop: e}, 800)
    })
}

function news() {
    $(".news-wrapper .news-item").each(function (e) {
        $(".news-wrapper .news-item").slice(3 * e, 3 * e + 3).wrapAll('<div class="news-box-item"></div>'), $(".news-wrapper .news-item").slice(3 * e + 1, 3 * e + 3).wrapAll('<div class="right"></div>')
    }), $(".news-item").hover(function () {
        $(this).find(".info-box").addClass("show").stop().slideDown()
    }, function () {
        $(this).find(".info-box").removeClass("show").stop().slideUp()
    })
}

function mapEvent() {
    var o = new BMap.Map("map"), t = new BMap.Geocoder, e = $(".shop-swiper .shop-content:eq(0)").data("city"),
        n = $(".shop-swiper .shop-content:eq(0)").find(".address").text();

    function i(e, t) {
        e = new BMap.Marker(e, {title: t});
        o.addOverlay(e)
    }

    $(".shop-swiper .shop-content:eq(0)").addClass("on"), t.getPoint(n, function (e) {
        var t = new BMap.Point(e.lng, e.lat);
        e ? (o.centerAndZoom(e, 17), i(t, n)) : console.log("您选择的地址没有解析到结果！")
    }, e), $("body").on("click", ".shop-content", function () {
        var e = $(this).data("city"), n = $(this).find(".address").text();
        $(this).addClass("on").parent().siblings().children(".shop-content").removeClass("on"), t.getPoint(n, function (e) {
            var t = new BMap.Point(e.lng, e.lat);
            e ? (o.centerAndZoom(e, 17), i(t, n)) : console.log("您选择的地址没有解析到结果！")
        }, e)
    }), o.enableScrollWheelZoom(!0)
}

function mapLocation(c) {
    var l = new Swiper(".shop-swiper", {
        observeParents: !0,
        observer: !0,
        slidesPerView: "auto",
        mousewheel: !0,
        navigation: {prevEl: ".shop-prev-btn", nextEl: ".shop-next-btn"},
        breakpoints: {320: {direction: "horizontal"}, 1024: {direction: "vertical"}}
    }), d = new BMap.Map(""), u = new BMap.Geocoder, e = (new Alert, new BMap.Geolocation), p = 0, h = 0;
    1024 <= $(window).width() ? (e = new BMap.LocalCity).get(function () {
        var t = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var i, a, n, o;
            return _regeneratorRuntime().wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return i = new BMap.Point(t.center.lng, t.center.lat), a = t.name, n = JSON.parse(localStorage.getItem("area")), o = [], n.forEach(function (e) {
                            e.name === a && (o.push(e.parent), o.push(e.value))
                        }), e.next = 5, new Promise(function (e, t) {
                            new Area({
                                url: c.areaUrl,
                                placeholder: ["选择省", "选择市", "选择区/县"],
                                values: o,
                                location: !0,
                                onSelected: function () {
                                    e()
                                }
                            })
                        });
                    case 5:
                        $.ajax({
                            type: "post",
                            url: c.storeUrl,
                            data: $('form[name="getStore"]').serializeArray(),
                            success: function () {
                                var t = _asyncToGenerator(_regeneratorRuntime().mark(function e(o) {
                                    return _regeneratorRuntime().wrap(function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, new Promise(function (t, e) {
                                                    u.getPoint(o.data[0].xinxi, function (e) {
                                                        e = new BMap.Point(e.lng, e.lat);
                                                        p = parseInt(d.getDistance(i, e)), t()
                                                    })
                                                });
                                            case 2:
                                                l.removeAllSlides(), o.data.forEach(function (e, n) {
                                                    l.appendSlide('<div class="swiper-slide">\n                                <div class="shop-content" data-city="'.concat(e.city, '">\n                                    <p class="name">').concat(e.name, '</p>\n                                    <div class="info">\n                                        <p class="address">').concat(e.xinxi, "</p>\n                                    </div>\n                                </div>\n                            </div>")), u.getPoint(e.xinxi, function (e) {
                                                        var t = new BMap.Point(e.lng, e.lat);
                                                        e ? parseInt(d.getDistance(i, t)) < p && (p = parseInt(d.getDistance(i, t)), h = n) : console.log("您选择的地址没有解析到结果！"), n === o.data.length - 1 && ($(".shop-swiper .shop-content").eq(h).trigger("click"), l.slideTo(h))
                                                    }, a)
                                                });
                                            case 4:
                                            case"end":
                                                return e.stop()
                                        }
                                    }, e)
                                }));
                                return function (e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        });
                    case 6:
                    case"end":
                        return e.stop()
                }
            }, e)
        }));
        return function (e) {
            return t.apply(this, arguments)
        }
    }()) : e.getCurrentPosition(function () {
        var t = _asyncToGenerator(_regeneratorRuntime().mark(function e(t) {
            var i, n, a, o, s, r;
            return _regeneratorRuntime().wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        if (0 === this.getStatus()) return i = new BMap.Point(t.point.lng, t.point.lat), n = t.address.province, a = t.address.city, o = t.address.district, s = JSON.parse(localStorage.getItem("area")), r = [], s.forEach(function (e) {
                            e.name !== n && e.name !== a && e.name !== o || r.push(e.value)
                        }), e.next = 6, new Promise(function (e, t) {
                            new Area({
                                url: c.areaUrl,
                                placeholder: ["选择省", "选择市", "选择区/县"],
                                values: r,
                                location: !0,
                                onSelected: function () {
                                    e()
                                }
                            })
                        });
                        e.next = 9;
                        break;
                    case 6:
                        $.ajax({
                            type: "post",
                            url: c.storeUrl,
                            data: $('form[name="getStore"]').serializeArray(),
                            success: function () {
                                var t = _asyncToGenerator(_regeneratorRuntime().mark(function e(o) {
                                    return _regeneratorRuntime().wrap(function (e) {
                                        for (; ;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, new Promise(function (t, e) {
                                                    u.getPoint(o.data[0].xinxi, function (e) {
                                                        e = new BMap.Point(e.lng, e.lat);
                                                        p = parseInt(d.getDistance(i, e)), t()
                                                    })
                                                });
                                            case 2:
                                                l.removeAllSlides(), o.data.forEach(function (e, n) {
                                                    l.appendSlide('<div class="swiper-slide">\n                                    <div class="shop-content" data-city="'.concat(e.city, '">\n                                        <p class="name">').concat(e.name, '</p>\n                                        <div class="info">\n                                            <p class="address">').concat(e.xinxi, "</p>\n                                        </div>\n                                    </div>\n                                </div>")), u.getPoint(e.xinxi, function (e) {
                                                        var t = new BMap.Point(e.lng, e.lat);
                                                        e ? parseInt(d.getDistance(i, t)) < p && (p = parseInt(d.getDistance(i, t)), h = n) : console.log("您选择的地址没有解析到结果！"), n === o.data.length - 1 && ($(".shop-swiper .shop-content").eq(h).trigger("click"), l.slideTo(h))
                                                    }, a)
                                                });
                                            case 4:
                                            case"end":
                                                return e.stop()
                                        }
                                    }, e)
                                }));
                                return function (e) {
                                    return t.apply(this, arguments)
                                }
                            }()
                        }), e.next = 10;
                        break;
                    case 9:
                        console.log("failed" + this.getStatus());
                    case 10:
                    case"end":
                        return e.stop()
                }
            }, e, this)
        }));
        return function (e) {
            return t.apply(this, arguments)
        }
    }()), $("#getStore").on("click", function (e) {
        var t = new Alert;
        $.ajax({
            type: "post",
            url: c.storeUrl,
            data: $('form[name="getStore"]').serializeArray(),
            success: function (e) {
                1 === e.code ? (l.removeAllSlides(), e.data.forEach(function (e) {
                    l.appendSlide('<div class="swiper-slide">\n                                <div class="shop-content" data-city="'.concat(e.city, '">\n                                    <p class="name">').concat(e.name, '</p>\n                                    <div class="info">\n                                        <p class="address">').concat(e.xinxi, "</p>\n                                    </div>\n                                </div>\n                            </div>"))
                }), l.slideTo(0), mapEvent()) : t.alert({title: e.msg, footerHide: !0, duration: 2e3})
            }
        })
    })
}

var Area = function () {
    function n(e) {
        _classCallCheck(this, n);
        var t = window.location.origin;
        this.options = $.extend({}, {
            url: "".concat(t, "/api/common/area"),
            placeholder: ["请选择省份", "请选择城市", "请选择区/县"],
            elAry: ["#selectProvince", "#selectCity", "#selectArea"],
            location: !1,
            onSelected: function () {
            }
        }, e), this.area = [], this.selected = [], this._init()
    }

    var e;
    return _createClass(n, [{
        key: "_init", value: (e = _asyncToGenerator(_regeneratorRuntime().mark(function e() {
            var n;
            return _regeneratorRuntime().wrap(function (e) {
                for (; ;) switch (e.prev = e.next) {
                    case 0:
                        return n = this, console.log("_this", n), e.next = 4, new Promise(function (t, e) {
                            $.ajax({
                                url: n.options.url, method: "GET", success: function (e) {
                                    if (console.log("ssss"), n.area = e.data, localStorage.setItem("area", JSON.stringify(e.data)), n.options.onSelected(), void 0 !== n.options.values && !Array.isArray(n.options.values)) throw new Error("地区初始默认值必须传一个数组");
                                    n.selected = n.options.values || [], console.log("_this.selected", n.selected), 0 < n.selected.length ? (n._setProvince(n.selected[0]), n._setCity(n.selected[0], n.selected[1] || ""), n._setArea(n.selected[1], n.selected[2] || "")) : (n._setProvince(), $(n.options.elAry[1]).html('<option value="">'.concat(n.options.placeholder[1], "</option>")), $(n.options.elAry[2]).html('<option value="">'.concat(n.options.placeholder[2], "</option>"))), t()
                                }
                            })
                        });
                    case 4:
                    case"end":
                        return e.stop()
                }
            }, e, this)
        })), function () {
            return e.apply(this, arguments)
        })
    }, {
        key: "_setProvince", value: function (e) {
            for (var t = this.area.filter(function (e) {
                return !e.parent
            }), n = this, o = '<option value="0">'.concat(n.options.placeholder[0], "</option>"), i = 0; i < t.length; i++) t[i].value === e ? o += '<option value="' + t[i].value + '" selected>' + t[i].name + "</option>" : o += '<option value="' + t[i].value + '">' + t[i].name + "</option>";
            $(n.options.elAry[0]).off("change").html(o).change(function () {
                n.selected = [$(this).val()], n.options.onSelected(n.selected), n._setCity($(this).val()), n._setArea("", ""), $(".shop-select").trigger("render")
            })
        }
    }, {
        key: "_setCity", value: function (t, e) {
            if (!t && "string" != typeof t) throw new Error("必须传省份的值且为字符串");
            var n = this, o = this.area.filter(function (e) {
                return e.parent === t
            }), i = '<option value="0">'.concat(n.options.placeholder[1], "</option>");
            console.log("data", o);
            for (var a = 0; a < o.length; a++) o[a].value === e ? i += '<option value="' + o[a].value + '" selected>' + o[a].name + "</option>" : i += '<option value="' + o[a].value + '">' + o[a].name + "</option>";
            $(n.options.elAry[1]).off("change").html(i).change(function () {
                n.selected[1] = $(this).val(), n.options.onSelected(n.selected), n._setArea($(this).val()), $(".shop-select").trigger("render")
            })
        }
    }, {
        key: "_setArea", value: function (t, e) {
            if (!t && "string" != typeof t) throw new Error("必须传城市的值且为字符串");
            for (var n = this, o = this.area.filter(function (e) {
                return e.parent === t
            }), i = '<option value="0">'.concat(n.options.placeholder[2], "</option>"), a = 0; a < o.length; a++) o[a].value === e ? i += '<option value="' + o[a].value + '" selected>' + o[a].name + "</option>" : i += '<option value="' + o[a].value + '">' + o[a].name + "</option>";
            $(n.options.elAry[2]).off("change").html(i).change(function () {
                n.selected[2] = $(this).val(), n.options.onSelected(n.selected), $(".shop-select").trigger("render")
            })
        }
    }]), n
}();

function popup() {
    $("[data-window]").click(function () {
        var e = $(this).data("window");
        e && ($(".pop-window").fadeIn(), $(".".concat(e, "-window")).fadeIn().addClass("show"))
    }), $(".pop-window-item .close-btn").click(function () {
        $(".pop-window").fadeOut(), $(this).parent().fadeOut().removeClass("show")
    }), $(".pop-window").click(function (e) {
        $(e.target).hasClass("pop-window-wrapper") && ($(this).fadeOut(), $(this).find(".pop-window-item").fadeOut().removeClass("show"))
    })
}

function header() {
    50 <= $(window).scrollTop() ? $(".header").addClass("header-small") : $(".header").removeClass("header-small"), $(window).scroll(function () {
        50 <= $(window).scrollTop() ? $(".header").addClass("header-small") : $(".header").removeClass("header-small")
    })
}

function about() {
    new Swiper(".about-history-swiper", {
        observeParents: !0,
        observer: !0,
        watchOverflow: !0,
        slidesPerView: 7,
        spaceBetween: -135,
        navigation: {prevEl: ".history-prev-btn", nextEl: ".history-next-btn"},
        breakpoints: {320: {slidesPerView: 2, spaceBetween: 0}, 1024: {slidesPerView: 7, spaceBetween: -135}},
        on: {
            init: function () {
                var e = $(window).width() <= 768 ? 2 : 7, e = this.activeIndex + e;
                $(".about-history-swiper .swiper-slide:eq(".concat(e, ")")).addClass("hide").siblings().removeClass("hide")
            }, slideChange: function () {
                var e = $(window).width() <= 768 ? 2 : 7, e = this.activeIndex + e;
                $(".about-history-swiper .swiper-slide:eq(".concat(e, ")")).addClass("hide").siblings().removeClass("hide"), e > this.slides.length - 1 && $(this.slides[this.slides.length - 1]).removeClass("hide")
            }
        }
    }), new Swiper(".about-scale-swiper", {
        observeParents: !0,
        observer: !0,
        watchOverflow: !0,
        speed: 900,
        navigation: {prevEl: ".about-scale-prev-btn", nextEl: ".about-scale-next-btn"}
    }), 1024 < $(window).width() ? $(".about-logo-swiper .logo-item").each(function (e) {
        $(".about-logo-swiper .logo-item").slice(15 * e, 15 * e + 15).wrapAll('<div class="swiper-slide"></div>')
    }) : $(".about-logo-swiper .logo-item").each(function (e) {
        $(".about-logo-swiper .logo-item").slice(8 * e, 8 * e + 8).wrapAll('<div class="swiper-slide"></div>')
    }), new Swiper(".about-logo-swiper", {
        observeParents: !0,
        observer: !0,
        watchOverflow: !0,
        speed: 600,
        navigation: {prevEl: ".about-logo-prev-btn", nextEl: ".about-logo-next-btn"},
        pagination: {el: ".about-logo-pagination", clickable: !0}
    });
    var e = new Swiper(".shop-photo-swiper", {
        observeParents: !0,
        observer: !0,
        watchOverflow: !0,
        lazy: {loadPrevNext: !0},
        navigation: {prevEl: ".photo-prev-btn", nextEl: ".photo-next-btn"}
    });
    $(".shop-more-btn .check-btn").click(function () {
        e.slideTo(0), $(".photo-window").fadeIn(), $(".photo-window .close-btn").click(function () {
            $(".photo-window").fadeOut()
        }), $(".photo-window").click(function (e) {
            $(e.target).hasClass("photo-window-wrapper") && $(this).fadeOut()
        })
    })
}

function wow() {
    new WOW({
        callback: function (e) {
            $(e).hasClass("counter") && $(e).find(".num").each(function () {
                var e = $(this).text().trim(), t = e.split(".");
                t[1] ? (t = new CountUp(this, Number(e), t[1].length, 3), $(this).width($(this).width()), t.start()) : (t = new CountUp(this, Number(e), 0, 3), $(this).width($(this).width()), t.start())
            }), $(e).hasClass("about-history-swiper") && $(".about-history-swiper").find(".item").each(function (e) {
                var t = this;
                setTimeout(function () {
                    $(t).addClass("history-animation"), $(t).find(".content").on("animationend", function () {
                        $(t).mouseenter(function () {
                            $(t).removeClass("history-animation"), setTimeout(function () {
                                $(t).addClass("history-animation")
                            }, 100)
                        })
                    })
                }, 500 * e)
            })
        }
    }).init()
}

function iframeEvent(e) {
    $("body").append('<div class="video-popup">\n                    <div class="video-popup-mask">&nbsp;</div>\n                    <div class="video-popup-box">\n                        <div class="video-popup-close iconfont icon-guanbi"></div>\n                        <div class="video">\n                            <div class="video-box">\n                            </div>\n                        </div>\n                    </div>\n                </div>'), $(e).click(function () {
        $(".video-box").html('<iframe frameborder="0" id="popupPlayer" src="" allowFullScreen="true"></iframe>');
        var e = $(this).attr("data-iframe");
        $("#popupPlayer").attr("src", e), $(".video-popup").show(500, function () {
            $(".video-popup").addClass("show")
        })
    }), $(".video-popup-close,.video-popup-mask,.video-popup-box").on("click", function (e) {
        $(".video-box").html(""), $(".video-popup").fadeOut().removeClass("show")
    })
}

function join() {
    1024 < $(window).width() ? $(".photo-item").each(function (e) {
        $(".photo-item").slice(2 * e, 2 * e + 2).wrapAll('<div class="swiper-slide"></div>')
    }) : $(".photo-item").each(function (e) {
        $(".photo-item").slice(+e, +e + 1).wrapAll('<div class="swiper-slide"></div>')
    });
    new Swiper(".join-photo-small-swiper .swiper-container", {
        observeParents: !0,
        observer: !0,
        watchOverflow: !0,
        speed: 900,
        slidesPerView: 1953 / 1465,
        spaceBetween: 50,
        centeredSlides: !0,
        loop: !0,
        navigation: {prevEl: ".photo-small-prev-btn", nextEl: ".photo-small-next-btn"},
        breakpoints: {320: {slidesPerView: 1, spaceBetween: 20}, 1024: {slidesPerView: 1953 / 1465, spaceBetween: 50}}
    });
    var t = 0;
    $(".join-flow li").each(function (e) {
        if (2 === t) return !(t = 0);
        (t % 2 == 0 ? $(".join-flow >li").slice(0, 4) : $(".join-flow >li").slice(0, 3)).wrapAll('<section class="wp"><ul class="join-flow-list"></ul></section>'), t++
    }), new Swiper(".join-plan-swiper", {
        observeParents: !0,
        observer: !0,
        watchOverflow: !0,
        direction: "vertical",
        speed: 4e3,
        loop: !0,
        slidesPerView: 7,
        simulateTouch: !1,
        allowTouchMove: !1,
        breakpoints: {320: {slidesPerView: "auto", spaceBetween: 20}, 1024: {slidesPerView: 7}},
        autoplay: {delay: 0, stopOnLastSlide: !1, disableOnInteraction: !1}
    })
}

function subject() {
    new Swiper(".subject-banner-swiper", {
        observeParents: !0,
        observer: !0,
        watchOverflow: !0,
        effect: "fade",
        autoplay: {delay: 3e3, stopOnLastSlide: !1, disableOnInteraction: !1}
    });
    $(".coupop-box .item:eq(0)").addClass("scale").siblings().removeClass("scale");
    var e = 1;
    setInterval(function () {
        e === $(".coupop-box .item").length && (e = 0), $(".coupop-box .item").eq(e).addClass("scale").siblings().removeClass("scale"), e++
    }, 1e3), animateFun(".footer-btn-box .item", "scale", 2e3)
}

function animateFun(t, n, e) {
    $(t).eq(0).addClass(n), setInterval(function () {
        var e = $(t + "." + n).index();
        console.log("index", t + "." + n), e === $(t).length - 1 ? ($(t).first().addClass(n), $(t).last().removeClass(n)) : $(t).eq(e).removeClass(n).next().addClass(n)
    }, e)
}

function recruList() {
    $(".recru-list-head").click(function () {
        $(this).hasClass("recru-list-head-active") ? ($(this).removeClass("recru-list-head-active"), $(this).next(".recru-list-content").stop().slideUp()) : ($(this).addClass("recru-list-head-active"), $(this).next(".recru-list-content").stop().slideDown())
    })
}

function pageRightBar() {
    function o(e, t) {
        $(window).scrollTop() >= t && $(e).addClass("item-active").siblings().removeClass("item-active")
    }

    1024 < $(window).width() && ($(".page-right-bar .item").each(function (e) {
        var t = this,
            n = $(".anchor:eq(".concat(e, ")")).length ? Math.round($(".anchor:eq(".concat(e, ")")).offset().top) - 80 : 0;
        "javascript:;" === $(this).find("a").attr("href") && ($(this).click(function () {
            $(this).addClass("item-active").siblings().removeClass("item-active"), $("html,body").animate({scrollTop: n}, 1e3)
        }), o(this, n), $(window).scroll(function () {
            o(t, n)
        }))
    }), $(window).resize(function () {
        $(window).width() <= 1440 && 1024 < $(window).width() ? ($(".page-right-bar").addClass("fold"), $(".unfold-btn").addClass("unfold")) : ($(".page-right-bar").removeClass("fold"), $(".unfold-btn").removeClass("unfold"))
    }), $(".close-right-bar").click(function () {
        $(".page-right-bar").addClass("fold"), $(".unfold-btn").addClass("unfold")
    }), $(".unfold-btn").click(function () {
        $(".page-right-bar").removeClass("fold"), $(".unfold-btn").removeClass("unfold")
    }))
}

function navAnchor() {
    $(".page-nav .nav-item").each(function (t) {
        $(this).click(function () {
            var e = $(".anchor:eq(".concat(t, ")")).length ? Math.round($(".anchor:eq(".concat(t, ")")).offset().top) - 80 : 0;
            $("html,body").animate({scrollTop: e}, 1e3)
        })
    })
}

function mbNav() {
    $(".page-nav .mb-more-btn").click(function () {
        $(this).parent().next().stop().slideToggle(), $(this).toggleClass("active")
    })
}

function power() {
    $(".power-swiper-box").each(function () {
        var e = $(this).children(".swiper-container")[0], t = $(this).find(".power-prev-btn")[0],
            n = $(this).find(".power-next-btn")[0];
        new Swiper(e, {
            observeParents: !0,
            observer: !0,
            watchOverflow: !0,
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: {delay: 3e3, stopOnLastSlide: !1, disableOnInteraction: !1},
            navigation: {prevEl: t, nextEl: n},
            breakpoints: {320: {slidesPerView: 2, spaceBetween: 10}, 1024: {slidesPerView: 4, spaceBetween: 30}}
        })
    })
}

function rightBar() {
    $(".fold-btn").click(function () {
        $(".right-bar").hasClass("bar-fold") || ($(".right-bar").addClass("bar-fold"), $(".bar-unfold-btn").addClass("unfold"))
    }), $(".bar-unfold-btn").click(function () {
        $(this).removeClass("unfold"), $(".right-bar").removeClass("bar-fold")
    })
}

function joinForm() {
    var e, t, n, o;
    e = ".form-box", n = $(".form-nav").children(), (o = $(e).children()).hide(), n.each(function () {
        $(this).hasClass("on") && (t = $(this).index())
    }), o.eq(t).show(), $(".form-window .left .img-box img").eq(t).show(), n.click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        var e = n.index(this);
        o.eq(e).fadeIn("linear").siblings().hide(), $(".form-window .left .img-box img").eq(e).fadeIn("linear").siblings().hide()
    })
}

function debounce(t, n, o) {
    var i = null;
    return function () {
        var e;
        clearTimeout(i), o ? (e = !i, i = setTimeout(function () {
            i = null
        }, n), e && t()) : i = setTimeout(function () {
            t()
        }, n)
    }
}

function autoFold() {
    var t = null;
    $(window).width() <= 1024 ? $(window).on("scroll", function (e) {
        $(".index-scale").hasClass("fold") ? clearTimeout(t) : $(".index-scale").addClass("fold"), t = setTimeout(function () {
            $(".index-scale").removeClass("fold")
        }, 500)
    }) : $(window).on("scroll", function (e) {
        $(".page-right-bar").hasClass("fold") ? clearTimeout(t) : ($(".page-right-bar").addClass("fold"), $(".unfold-btn").addClass("unfold")), t = setTimeout(function () {
            $(".unfold-btn").removeClass("unfold"), $(".page-right-bar").removeClass("fold")
        }, 500)
    })
}

function autoUnfold(i) {
    var a = setTimeout(function () {
        $(".index-scale-form").addClass("show")
    }, 1e3 * i);
    $(".index-scale-form .close-btn").click(function () {
        clearTimeout(a), a = setTimeout(function () {
            $(".index-scale-form").addClass("show")
        }, 1e3 * i)
    }), $(document).mouseup(function (e) {
        var t = $(".index-scale-form")[0], n = $(".tips-popup")[0],
            o = $(e.target).attr("class") ? $(e.target).attr("class") : "";
        t.contains(e.target) || -1 !== o.indexOf("geetest") || n && n.contains(e.target) || (clearTimeout(a), a = setTimeout(function () {
            $(".index-scale-form").addClass("show")
        }, 1e3 * i))
    })
}

function proDetail() {
    1024 < $(window).width() && $(window).scroll(function () {
        var e = $(this).scrollTop(), t = $(document).height(), n = $(".footer").outerHeight(), o = $(window).height();
        e > $(window).height() ? $("#goTop").addClass("show") : $("#goTop").removeClass("show"), console.log(o + e), console.log(t - n), t - n <= o + e ? $(".pro-detail .detail-navigation").css({bottom: o + e - (t - n) + 40}) : $(".pro-detail .detail-navigation").css("bottom", 40), 0 < e ? $(".header").addClass("fixed") : $(".header").removeClass("fixed")
    })
}