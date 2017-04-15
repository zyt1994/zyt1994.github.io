!function (e) {
    function t(o) {
        if (n[o])return n[o].exports;
        var i = n[o] = {exports: {}, id: o, loaded: !1};
        return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
    }

    var n = {};
    return t.m = e, t.c = n, t.p = "", t(0)
}([function (e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {default: e}
    }

    var i = n(1), r = o(i);
    angular.module("bootstrap", [r.default])
}, function (e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {default: e}
    }

    function i() {
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var r = n(2), a = o(r), s = n(3), l = o(s), c = n(4), u = o(c);
    t.default = angular.module("zkyResume", [a.default, l.default, u.default]).service("resumeData", [function () {
        this.data = {
            cn: {
                header: {
                    //langList: ["中", "英"],
                    titleList: [{svg: "img/d_home.svg", title: "首页"}, {
                        svg: "img/d_info.svg",
                        title: "关于我"
                    }, {svg: "img/d_skills.svg", title: "技能栈"}, {svg: "img/d_exp.svg", title: "经历"}, {
                        svg: "img/d_works.svg",
                        title: "作品集"
                    }, {svg: "img/d_contact.svg", title: "联系我"}]
                },
                footer: {},
                default: {
                    quote: "人生无常乐，流水无尽期，学习无止境。",
                    desList: ["我叫邹怡婷", "一名前端研发工程师", "zouyitingrae@163.com"]
                },
                info: {
                    title: "关于我",
                    infoList: [{icon: "img/i_age.svg", key: "年龄", value: "24岁"}, {
                        icon: "img/i_edu.svg",
                        key: "学历",
                        value: "本科"
                    }, {icon: "img/i_site.svg", key: "坐标", value: "上海"}, {
                        icon: "img/i_status.svg",
                        key: "状态",
                        value: "离职"
                    }],
                    desList: ["两年全职前端开发经验", "熟悉MV*开发,深谙自动化,模块化开发之道", "高效的自学能力,具备独立分析解决问题能力", "强烈的自我驱动力,代码强迫症患者"]
                },
                skill: {
                    title: "技能栈",
                    outCircleList: [{color: "rgba(121,100,102,0.8)", name: "gulp"}, {
                        color: "rgba(49,65,82,0.8)",
                        name: "angular"
                    }, {color: "rgba(76,157,160,0.8)", name: "webpack"}, {
                        color: "rgba(66,66,66,0.8)",
                        name: "Sass"
                    }, {color: "rgba(193,131,106,0.8)", name: "git"}, {
                        color: "rgba(117,148,179,0.8)",
                        name: "JS"
                    }, {color: "rgba(71,83,94,0.8)", name: "jQuery"}, {color: "rgba(147,147,189,0.8)", name: "bootstrap"}],
                    innerCircleList: [{color: "rgba(179,164,140,0.8)", name: "Swiper"}, {
                        color: "rgba(171,209,220,0.8)",
                        name: "vue"
                    }, {color: "rgba(238,215,163,0.8)", name: "h5"}, {color: "rgba(207,184,178,0.8)", name: "Zepto"}],
                    desList: ["熟练使用angularJs1.x及各种类库的指令封装", "常在PC端、APP端做前端研发", "擅长DIV+CSS开发，能脱离库书写JS代码", "编码常思其健壮性，扩展性，维护性"]
                },
                works: {
                    title: "作品集",
                    worksList: [{
                        title: "空色美术APP",
                        des: "一款专卖美术用品的混合开发App，销售专业美术用品、专业美术书籍等。涵盖安卓、IOS平台，下载量数十万，深受学生老师喜爱。",
                        url:"http://www.kungse.com/appdownloadmobile"
                    }, {
                        title: "空色美术PC端",
                        des: "普通性的电商网站开发，兼容IE8+,适配全移动机型，具有良好的兼容性，扩展性。根据客户群体的习性进行详细分析策划，制定出一套适合自身的网站建设的设计风格方案。",
                        url: "http://www.kungse.com/"
                    }, {
                        title: "萌煮辅食APP",
                        des: "一款专门为0-6岁提供的好吃的辅食手机应用，涵盖安卓、IOS平台，其中均为步骤清晰的图文说明，让新手、小白、甚至是手残党的菜鸟cooker，毫无压力的同时大展身手。",
                        url:"http://weibo.com/p/1006065073481692/service?from=page_100606&mod=TAB#place"
                    }],
                    viewMore: "github上面查看更多"
                },
                experience: {
                    title: "经历",
                    expList: [{
                        title: "苏科新农网络科技（苏州）有限公司",
                        time: "2015年9月~2017年3月",
                        post: "web前端研发工程师",
                        imgUrl: "img/e_html.svg",
                        tech: "html5,css3,javascript,jquery,bootstrap,gulp angular1.x 原生js及若干类库",
                        contentList: ["负责企业站静态页开发","负责快速构建高质量移动APP/PC/WebAPP页面", "高度组件化、模块化思维，拥有各平台调试能力","同期工作之余开始系统性的自学web前端各项技术"]
                    }],
                    des: "2014年初，在学校接触到网页设计，开始前端自学生涯。"
                },
                contact: {
                    title: "联系我",
                    desList1: ["灵感", "代码", "梦想", "未来"],
                    desList2: ["注重效率，偏爱敏捷开发", "喜欢尝试，期待新鲜事物", "前端即兴趣，兴趣即未来", "行路有良友，便是捷径", "带上我吧，一起看到更大的世界"],
                    download: "下载简历",
                    fileList: [{title: "HTML版", url: "www.baidu.com"}, {title: "PDF版", url: "www.baidu.com"}],
                    typeList: [{icon: "img/s_github.svg", url: "https://github.com/zyt1994"}
                    ]
                }
            },
            en: {
                header: {
                    //langList: ["CN", "EN"],
                    titleList: [{svg: "img/d_home.svg", title: "home"}, {
                        svg: "img/d_info.svg",
                        title: "about"
                    }, {svg: "img/d_skills.svg", title: "skills"}, {
                        svg: "img/d_exp.svg",
                        title: "exp"
                    }, {svg: "img/d_works.svg", title: "works"}, {svg: "img/d_contact.svg", title: "contact"}]
                },
                footer: {},
                default: {
                    quote: "Life is a kind of endless yearning, eager to continue to rise, become more great and noble.",
                    desList: ["I am Zou yiting", "A front-end R & D engineer", "zouyitingrae@163.com"]
                },
                info: {
                    title: "About Me",
                    infoList: [{icon: "img/i_age.svg", key: "Age", value: "24"}, {
                        icon: "img/i_edu.svg",
                        key: "Edu.",
                        value: "B.S."
                    }, {icon: "img/i_site.svg", key: "Add.", value: "ChengDu"}, {
                        icon: "img/i_status.svg",
                        key: "Status",
                        value: "Leave Job"
                    }],
                    desList: ["Three years of Internet experience, two and a half years full-time front-end development experience", "Familiar with MV * development, well versed in automation, modular development of the road", "Efficient self-learning ability, with independent analysis to solve problems", "Strong self-driving force, the code OCD"]
                },
                skill: {
                    title: "Skills",
                    outCircleList: [{color: "rgba(121,100,102,0.8)", name: "gulp"}, {
                        color: "rgba(49,65,82,0.8)",
                        name: "angular"
                    }, {color: "rgba(76,157,160,0.8)", name: "webpack"}, {
                        color: "rgba(66,66,66,0.8)",
                        name: "less"
                    }, {color: "rgba(193,131,106,0.8)", name: "git"}, {
                        color: "rgba(117,148,179,0.8)",
                        name: "nodejs"
                    }, {color: "rgba(71,83,94,0.8)", name: "cordova"}, {color: "rgba(147,147,189,0.8)", name: "react"}],
                    innerCircleList: [{color: "rgba(179,164,140,0.8)", name: "es6"}, {
                        color: "rgba(171,209,220,0.8)",
                        name: "vue"
                    }, {color: "rgba(238,215,163,0.8)", name: "ng2"}, {color: "rgba(207,184,178,0.8)", name: "fp"}],
                    desList: ["Skilled use of angularJs1.x and encapsulate all kinds of libraries", "Permanent PC / APP / WeChat three platform front-end research and development", "Good at component / plugin development, can be written out of the library to write JS code", "Coding thinking robustness/scalability/maintainability"]
                },
                works: {
                    title: "Works",
                    worksList: [{
                        title: "Web front engineer resumes (2015)",
                        des: "The first edition of this resume, on the line a month later, Baidu keyword 'web front engineer resumes' ranked the top three, hundreds of millions of traffic, by the majority of front-end beginners praise and imitation, so far the search Baidu 10 pages are everywhere See the copy of the resume.",
                        url: "http://www.flqin.com/2015/"
                    }, {
                        title: "Campus APP",
                        des: "One-stop, the whole life cycle of the campus official mobile service platform, covering PC, Andrews, IOS, WeChat platform, on-line schools, including CUFE, BJTU, NACTA, LNU, SWUFE and so on, download Hundreds of thousands, loved by the students teacher.",
                        url: "http://app.cufe.edu.cn/"
                    }, {
                        title: "campus management system",
                        des: "According to the background management system of campus APP, including the personnel structure, information statistics, H5 production machine, data exchange platform, data management of each module, feedback settings, etc., for the university to provide Internet-based mobile campus overall solution.",
                        url: "http://www.app8848.com/cloud_mgr/#/user/login"
                    }, {
                        title: "Enterprise official website",
                        des: "Ordinary enterprise website development, compatible with IE8 +, suitable for all mobile models, with good compatibility, scalability. According to the habits of customer groups for detailed analysis planning, to develop a set of corporate website for their own design style program.",
                        url: "http://www.lantunet.com"
                    }],
                    viewMore: "Go github to see more"
                },
                experience: {
                    title: "Experience",
                    expList: [{
                        title: "LANTU TECH",
                        time: "2015.06~now",
                        post: "Web front-end R & D engineers",
                        imgUrl: "img/e_js.svg",
                        tech: "less gulp angular1.x cordova javascript and some libraries",
                        contentList: ["Responsible for the rapid construction of high-quality APP / PC / WeChat page", "According to business needs to design the appropriate project", "Highly component, modular thinking, with the platform debugging capabilities", "Learning ES6 and vue, react, ng2, experience the function of programming ideas"]
                    }, {
                        title: "Zhuohuang Management Co., Ltd",
                        time: "2014.08~2015.06",
                        post: "Web development and SEO",
                        imgUrl: "img/e_html.svg",
                        tech: "html5,css3,javascript,jquery,bootstrap",
                        contentList: ["Responsible for enterprise station static page development", "Responsible for website background maintenance", "Responsible for Baidu bid operation and seo optimization", "Outside of work to enhance their own javascript coding ability"]
                    }, {
                        title: "106 Culture Co., Ltd.",
                        time: "2014.03~2014.08",
                        post: "SEO",
                        imgUrl: "img/e_seo.svg",
                        tech: "SEO,SEM,Baidu (360, Sogou) bid, promotion",
                        contentList: ["Responsible for site background maintenance, new media marketing and promotion", "Responsible for Baidu PPC background adjustment", "Get the best new person award", "The same period of work began to self-learning web front-end technology"]
                    }],
                    des: "In early 2014, to abandon the network engineer position, began front self-study career."
                },
                contact: {
                    title: "Contact Me",
                    desList1: ["INSPIRATION", "CODE", "DREAM", "FUTURE"],
                    desList2: ["Focus on efficiency, preference for agile development", "Like to try, look forward to something new", "Front is interested, interest is the future", "Line road friends, is a shortcut", "With me, see the bigger world together"],
                    download: "Download Resume",
                    fileList: [{title: "HTML", url: "www.baidu.com"}, {title: "PDF", url: "www.baidu.com"}],
                    typeList: [{icon: "img/s_github.svg", url: "https://github.com/zyt1994"}, {
                        icon: "img/s_sf.svg",
                        url: "https://segmentfault.com/u/keyu2016"
                    }, {icon: "img/s_blog.svg", url: ""}, {
                        icon: "img/s_zh.svg",
                        url: "https://www.zhihu.com/people/fezky"
                    }, {icon: "img/s_wb.svg", url: "http://weibo.com/zky2013"}]
                }
            }
        }, this.extend = function (e, t) {
            for (var n in t)t.hasOwnProperty(n) && (e[n] = t[n])
        }
    }]).service("actionEvent", ["$window", function (e) {
        var t = "ontouchend"in e.document, n = void 0;
        n = {
            start: t ? "touchstart" : "mousedown",
            move: t ? "touchmove" : "mousemove",
            end: t ? "touchend" : "mouseup",
            wheel: "mousewheel"
        }, this.event = n, this.isSupportTouch = t
    }]).component("zkyResume", {templateUrl: "components/zkyResume/cmpt.html", controllerAs: "zr", controller: i}).name
}, function (e, t) {
    "use strict";
    function n(e, t, n) {
        var o = this;
        e.extend(o, e.data.cn.header), o.pageIndex = 0, o.selectedLang = 1, t.$on("switchLang", function (t, i) {
            var r = 2 == Number(i) ? e.data.en.header : e.data.cn.header;
            e.extend(o, r), n.$apply()
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = angular.module("rHeader", []).component("resumeHeader", {
        templateUrl: "./components/rHeader/cmpt.html",
        controller: n,
        bindings: {pageIndex: "="}
    }).directive("showNav", ["actionEvent", function (e) {
        function t(t, n) {
            function o() {
                i.isShowNav = !i.isShowNav, t.$apply()
            }

            var i = t.$ctrl;
            n[0].addEventListener(e.event.start, o)
        }

        return {restrict: "A", link: t}
    }]).directive("switchLang", ["actionEvent", "$rootScope", function (e, t) {
        function n(n, o) {
            function i(e) {
                "SPAN" === e.target.nodeName && (r.selectedLang = Number(e.target.dataset.index) + 1, n.$apply(), t.$broadcast("switchLang", r.selectedLang))
            }

            var r = n.$ctrl;
            o[0].addEventListener(e.event.start, i)
        }

        return {restrict: "A", link: n}
    }]).directive("selectedNavItem", ["resumeData", "actionEvent", function (e, t) {
        function n(n, o) {
            function i(t) {
                "EM" == t.target.nodeName && (+t.target.dataset.index !== r.pageIndex && !e.moving && (r.pageIndex = +t.target.dataset.index), r.isShowNav = !1, n.$apply())
            }

            var r = n.$ctrl;
            o[0].addEventListener(t.event.start, i)
        }

        return {restrict: "A", link: n}
    }]).name, n.$inject = ["resumeData", "$rootScope", "$scope"]
}, function (e, t) {
    "use strict";
    function n() {
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = angular.module("rFooter", []).component("resumeFooter", {
        templateUrl: "components/rFooter/cmpt.html",
        controllerAs: "rf",
        controller: n
    }).name
}, function (e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(5), r = o(i), a = n(6), s = o(a), l = n(7), c = o(l), u = n(8), d = o(u), m = n(9), p = o(m), g = n(10), f = o(g);
    t.default = angular.module("rMain", [r.default, s.default, c.default, d.default, p.default, f.default]).service("initArrow", [function () {
        function e() {
        }

        return e.prototype = {
            init: function () {
                var e = document.querySelectorAll(".dock-fill"), t = document.createElement("div");
                t.classList.add("-arrow"), e[0].appendChild(t)
            }, destroy: function () {
                var e = document.querySelector(".-arrow");
                e.parentNode.removeChild(e)
            }
        }, e
    }]).service("stopIosDropDown", ["actionEvent", function (e) {
        function t() {
            return ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"].every(function (e) {
                return navigator.userAgent.indexOf(e) < 0
            })
        }

        this.stop = function () {
            document.querySelector("body").addEventListener(e.event.start, function (e) {
                t() || "A" != e.target.nodeName && e.preventDefault()
            })
        }
    }]).directive("resumeMain", ["initArrow", "stopIosDropDown", "$timeout", "resumeData", "actionEvent", function (e, t, n, o, i) {
        function r(r, a) {
            function s() {
                a[0].classList.add("dock-fill"), x[0].classList.add("cur-page"), x[b + 1].classList.add("next-page"), _.init(), t.stop(), h(), a[0].addEventListener(i.event.start, c), a[0].addEventListener("mousewheel", l)
            }

            function l(e) {
                w || e.wheelDelta < 0 && b == E - 1 || e.wheelDelta > 0 && 0 == b || (e.wheelDelta < 0 ? b++ : b--, g(b))
            }

            function c(e) {
                w || "touchstart" != e.type || (y = e.changedTouches[0].pageY, a[0].addEventListener(i.event.move, u))
            }

            function u(e) {
                w || (L = e.changedTouches[0].pageY - y, L < 0 && b == E - 1 || L > 0 && 0 == b || (f(), a[0].addEventListener(i.event.end, d)))
            }

            function d() {
                w || (Math.abs(L) < 100 ? p() : g(k))
            }

            function m() {
                w = !1, o.moving = w, v(), a[0].removeEventListener("touchmove", u), a[0].removeEventListener("touchend", d)
            }

            function p() {
                var e = a[0].querySelectorAll(".page-section");
                e[k].style.transform = "", e[k].style.transition = "transform 0.5s", e[L < 0 ? k - 1 : k + 1].style.transform = "", e[L < 0 ? k - 1 : k + 1].style.transition = "transform 0.5s", e[k].addEventListener("webkitTransitionEnd", m)
            }

            function g(e) {
                r.$apply(function () {
                    r.pageIndex = e
                })
            }

            function f() {
                var e = a[0].querySelectorAll(".page-section");
                k = L < 0 ? b + 1 : b - 1, e[k].classList.add("touch-page"), e[k].style.transform = L < 0 ? "translateY(" + (a[0].offsetHeight + L) + "px)" : "translateY(" + (-a[0].offsetHeight + L) + "px)", e[L < 0 ? k - 1 : k + 1].style.transform = "translateY(" + L + "px)"
            }

            function v() {
                var e = a[0].querySelectorAll(".page-section");
                e = Array.prototype.slice.call(e), e.forEach(function (e, t) {
                    e.classList.remove("prev-page", "active", "next-page", "cur-page", "touch-page"), e.style.transform = "", e.style.transition = "", 0 !== b && t == b - 1 && e.classList.add("prev-page"), t == b && e.classList.add("cur-page"), b !== E - 1 && t == b + 1 && e.classList.add("next-page"), e.removeEventListener("webkitTransitionEnd", m)
                }), a[0].querySelectorAll(".-arrow")[0].style.display = b == E - 1 ? "none" : "block"
            }

            function h() {
                //console.log("Hi! 朋友，感谢您愿意调试简历代码。\n本简历采用ES6,angularJS 1.x,gulp,less,webpack开发构建。\n源码已开源在（https://github.com/zhaoky/flqin),喜欢请点个star吧！ \n如果您有什么建议或者想学习前端，欢迎您加入我们,我们互相学习，共同进步^_^ \n%c QQ小群(http://t.cn/RtlQbTq)", "color: red")
            }

            var b = 0, w = void 0, y = void 0, L = void 0, k = void 0, x = a[0].querySelectorAll(".page-section"), E = x.length, _ = new e;
            s(), r.$watch("pageIndex", function (e, t) {
                var i = a[0].querySelectorAll(".page-section");
                if (!w && "undefined" != typeof e) {
                    var r = +e;
                    if (w = "undefined" != typeof t, o.moving = w, Math.abs(r - t) > 1) {
                        var s = new Promise(function (e) {
                            i[r].style.display = "block", i[r].style.transform = r > t ? "translateY(100%)" : "translateY(-100%)", n(function () {
                                e()
                            }, 200)
                        });
                        s.then(function () {
                            i[r].classList.add("active"), i[r].style.display = "", "undefined" != typeof t && (i[t].style.transform = r > t ? "translateY(-100%)" : "translateY(100%)", i[t].style.transition = "transform 0.5s")
                        })
                    } else 1 == Math.abs(r - t) && (i[r].classList.add("active"), "undefined" != typeof t && (i[t].style.transform = r > t ? "translateY(-100%)" : "translateY(100%)", i[t].style.transition = "transform 0.5s"));
                    b = r, i[r].addEventListener("webkitTransitionEnd", m)
                }
            }), r.$on("$destroy", function () {
                _.destroy(), a[0].removeEventListener("touchstart", c), a[0].removeEventListener("mousewheel", l)
            })
        }

        return {
            restrict: "E",
            link: r,
            template: "<div ng-transclude></div>",
            transclude: !0,
            replace: !0,
            scope: {pageIndex: "="}
        }
    }]).name
}, function (e, t) {
    "use strict";
    function n(e, t, n) {
        var o = this;
        e.extend(o, e.data.cn.contact), t.$on("switchLang", function (t, i) {
            var r = 2 == Number(i) ? e.data.en.contact : e.data.cn.contact;
            o.isEng = 2 == Number(i), e.extend(o, r), n.$apply()
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = angular.module("rContact", []).component("resumeContact", {
        templateUrl: "components/rContact/cmpt.html",
        controller: n
    }).name, n.$inject = ["resumeData", "$rootScope", "$scope"]
}, function (e, t) {
    "use strict";
    function n(e, t, n) {
        var o = this;
        e.extend(o, e.data.cn.default), t.$on("switchLang", function (t, i) {
            var r = 2 == Number(i) ? e.data.en.default : e.data.cn.default;
            e.extend(o, r), n.$apply()
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = angular.module("rDefault", []).component("resumeDefault", {
        //restrict: 'A',
        //template: $templateCache.get("components/rDefault/cmpt.html"),
        templateUrl: "./components/rDefault/cmpt.html",
        controller: n
    }).name, n.$inject = ["resumeData", "$rootScope", "$scope"]
}, function (e, t) {
    "use strict";
    function n(e, t, n) {
        var o = this;
        e.extend(o, e.data.cn.works), t.$on("switchLang", function (t, i) {
            var r = 2 == Number(i) ? e.data.en.works : e.data.cn.works;
            o.isEng = 2 == Number(i), e.extend(o, r), n.$apply()
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = angular.module("rWorks", []).component("resumeWorks", {
        templateUrl: "components/rWorks/cmpt.html",
        controller: n
    }).directive("switchWork", ["actionEvent", function (e) {
        function t(t, n, o) {
            function i(e) {
                "I" === e.target.nodeName && (a += "-left" == e.target.className ? 90 : -90, r.style.transform = "rotateY(" + a + "deg)")
            }

            var r = document.body.querySelector(".-work-list"), a = 0;
            n[0].addEventListener(e.event.start, i)
        }

        return {link: t}
    }]).name, n.$inject = ["resumeData", "$rootScope", "$scope"]
}, function (e, t) {
    "use strict";
    function n(e, t, n) {
        var o = this;
        e.extend(o, e.data.cn.experience), o.curIndex = 0, o.exp = o.expList[o.curIndex], t.$on("switchLang", function (t, i) {
            var r = 2 == Number(i) ? e.data.en.experience : e.data.cn.experience;
            o.isEng = 2 == Number(i), e.extend(o, r), o.exp = o.expList[0], n.$apply()
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = angular.module("rExperience", []).component("resumeExperience", {
        templateUrl: "components/rExperience/cmpt.html",
        controller: n,
        bindings: {pageIndex: "<"}
    }).directive("touchThreeD", ["$window", "actionEvent", function (e, t) {
        function n(n, o) {
            function i(e) {
                var t = e.pageX, n = e.pageY, i = t - c - s / 2, r = l / 2 - n + u + 140;
                o[0].style.transform = "rotateY(" + i / 50 + "deg) rotateX(" + r / 50 + "deg)"
            }

            function r(e) {
                o[0].style.transform = "rotateY(0deg) rotateX(0deg)"
            }

            function a() {
                c = o[0].offsetLeft, u = o[0].offsetTop
            }

            var s = void 0, l = void 0, c = void 0, u = void 0;
            n.$watch("$parent.$parent.pageIndex", function (e) {
                3 === Number(e) && (s = o[0].offsetWidth, l = o[0].offsetHeight, c = o[0].offsetLeft, u = o[0].offsetTop)
            }), o[0].addEventListener(t.event.move, i), o[0].addEventListener("mouseout", r), e.onresize = a
        }

        return {restrict: "A", link: n}
    }]).directive("switchExp", ["actionEvent", function (e) {
        function t(t, n) {
            function o(e) {
                "LI" == e.target.nodeName && e.target.dataset.index !== r.curIndex && (r.curIndex = e.target.dataset.index, a.style.opacity = "0", a.addEventListener("webkitTransitionEnd", i))
            }

            function i() {
                a.style.opacity = "1", t.$apply(function () {
                    r.exp = r.expList[r.curIndex]
                }), a.removeEventListener("webkitTransitionEnd", i)
            }

            var r = t.$ctrl, a = document.body.querySelectorAll(".-experience-content")[0];
            r.cutList = new Array(3), n[0].addEventListener(e.event.start, o)
        }

        return {link: t}
    }]).name, n.$inject = ["resumeData", "$rootScope", "$scope"]
}, function (e, t) {
    "use strict";
    function n(e, t, n) {
        var o = this;
        e.extend(o, e.data.cn.info), t.$on("switchLang", function (t, i) {
            var r = 2 == Number(i) ? e.data.en.info : e.data.cn.info;
            o.isEng = 2 == Number(i), e.extend(o, r), n.$apply()
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = angular.module("rInfo", []).component("resumeInfo", {
        templateUrl: "components/rInfo/cmpt.html",
        controller: n
    }).name, n.$inject = ["resumeData", "$rootScope", "$scope"]
}, function (e, t) {
    "use strict";
    function n(e, t, n) {
        var o = this;
        e.extend(o, e.data.cn.skill), t.$on("switchLang", function (t, i) {
            var r = 2 == Number(i) ? e.data.en.skill : e.data.cn.skill;
            o.isEng = 2 == Number(i), e.extend(o, r), n.$apply()
        })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = angular.module("rSkill", []).component("resumeSkill", {
        templateUrl: "components/rSkill/cmpt.html",
        controller: n
    }).name, n.$inject = ["resumeData", "$rootScope", "$scope"]
}]);