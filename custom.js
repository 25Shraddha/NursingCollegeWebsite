/*!
  * Bootstrap v4.0.0 (https://getbootstrap.com)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, n) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function s(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function r() {
        return (r = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
        ).apply(this, arguments)
    }
    e = e && e.hasOwnProperty("default") ? e.default : e,
    n = n && n.hasOwnProperty("default") ? n.default : n;
    var o, a, l, h, c, u, f, d, _, g, p, m, v, E, T, y, C, I, A, b, D, S, w, N, O, k, P = function(t) {
        var e = !1;
        function n(e) {
            var n = this
              , s = !1;
            return t(this).one(i.TRANSITION_END, function() {
                s = !0
            }),
            setTimeout(function() {
                s || i.triggerTransitionEnd(n)
            }, e),
            this
        }
        var i = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            },
            getSelectorFromElement: function(e) {
                var n, i = e.getAttribute("data-target");
                i && "#" !== i || (i = e.getAttribute("href") || ""),
                "#" === i.charAt(0) && (n = i,
                i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                try {
                    return t(document).find(i).length > 0 ? i : null
                } catch (t) {
                    return null
                }
            },
            reflow: function(t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function(n) {
                t(n).trigger(e.end)
            },
            supportsTransitionEnd: function() {
                return Boolean(e)
            },
            isElement: function(t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function(t, e, n) {
                for (var s in n)
                    if (Object.prototype.hasOwnProperty.call(n, s)) {
                        var r = n[s]
                          , o = e[s]
                          , a = o && i.isElement(o) ? "element" : (l = o,
                        {}.toString.call(l).match(/\s([a-zA-Z]+)/)[1].toLowerCase());
                        if (!new RegExp(r).test(a))
                            throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + a + '" but expected type "' + r + '".')
                    }
                var l
            }
        };
        return e = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend"
        },
        t.fn.emulateTransitionEnd = n,
        i.supportsTransitionEnd() && (t.event.special[i.TRANSITION_END] = {
            bindType: e.end,
            delegateType: e.end,
            handle: function(e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        }),
        i
    }(e), L = (a = "alert",
    h = "." + (l = "bs.alert"),
    c = (o = e).fn[a],
    u = {
        CLOSE: "close" + h,
        CLOSED: "closed" + h,
        CLICK_DATA_API: "click" + h + ".data-api"
    },
    f = "alert",
    d = "fade",
    _ = "show",
    g = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.close = function(t) {
            t = t || this._element;
            var e = this._getRootElement(t);
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        e.dispose = function() {
            o.removeData(this._element, l),
            this._element = null
        }
        ,
        e._getRootElement = function(t) {
            var e = P.getSelectorFromElement(t)
              , n = !1;
            return e && (n = o(e)[0]),
            n || (n = o(t).closest("." + f)[0]),
            n
        }
        ,
        e._triggerCloseEvent = function(t) {
            var e = o.Event(u.CLOSE);
            return o(t).trigger(e),
            e
        }
        ,
        e._removeElement = function(t) {
            var e = this;
            o(t).removeClass(_),
            P.supportsTransitionEnd() && o(t).hasClass(d) ? o(t).one(P.TRANSITION_END, function(n) {
                return e._destroyElement(t, n)
            }).emulateTransitionEnd(150) : this._destroyElement(t)
        }
        ,
        e._destroyElement = function(t) {
            o(t).detach().trigger(u.CLOSED).remove()
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var n = o(this)
                  , i = n.data(l);
                i || (i = new t(this),
                n.data(l, i)),
                "close" === e && i[e](this)
            })
        }
        ,
        t._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        s(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }]),
        t
    }(),
    o(document).on(u.CLICK_DATA_API, '[data-dismiss="alert"]', g._handleDismiss(new g)),
    o.fn[a] = g._jQueryInterface,
    o.fn[a].Constructor = g,
    o.fn[a].noConflict = function() {
        return o.fn[a] = c,
        g._jQueryInterface
    }
    ,
    g), R = (m = "button",
    E = "." + (v = "bs.button"),
    T = ".data-api",
    y = (p = e).fn[m],
    C = "active",
    I = "btn",
    A = "focus",
    b = '[data-toggle^="button"]',
    D = '[data-toggle="buttons"]',
    S = "input",
    w = ".active",
    N = ".btn",
    O = {
        CLICK_DATA_API: "click" + E + T,
        FOCUS_BLUR_DATA_API: "focus" + E + T + " blur" + E + T
    },
    k = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.toggle = function() {
            var t = !0
              , e = !0
              , n = p(this._element).closest(D)[0];
            if (n) {
                var i = p(this._element).find(S)[0];
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && p(this._element).hasClass(C))
                            t = !1;
                        else {
                            var s = p(n).find(w)[0];
                            s && p(s).removeClass(C)
                        }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !p(this._element).hasClass(C),
                        p(i).trigger("change")
                    }
                    i.focus(),
                    e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !p(this._element).hasClass(C)),
            t && p(this._element).toggleClass(C)
        }
        ,
        e.dispose = function() {
            p.removeData(this._element, v),
            this._element = null
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var n = p(this).data(v);
                n || (n = new t(this),
                p(this).data(v, n)),
                "toggle" === e && n[e]()
            })
        }
        ,
        s(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }]),
        t
    }(),
    p(document).on(O.CLICK_DATA_API, b, function(t) {
        t.preventDefault();
        var e = t.target;
        p(e).hasClass(I) || (e = p(e).closest(N)),
        k._jQueryInterface.call(p(e), "toggle")
    }).on(O.FOCUS_BLUR_DATA_API, b, function(t) {
        var e = p(t.target).closest(N)[0];
        p(e).toggleClass(A, /^focus(in)?$/.test(t.type))
    }),
    p.fn[m] = k._jQueryInterface,
    p.fn[m].Constructor = k,
    p.fn[m].noConflict = function() {
        return p.fn[m] = y,
        k._jQueryInterface
    }
    ,
    k), j = function(t) {
        var e = "carousel"
          , n = "bs.carousel"
          , i = "." + n
          , o = t.fn[e]
          , a = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }
          , l = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }
          , h = "next"
          , c = "prev"
          , u = "left"
          , f = "right"
          , d = {
            SLIDE: "slide" + i,
            SLID: "slid" + i,
            KEYDOWN: "keydown" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
            TOUCHEND: "touchend" + i,
            LOAD_DATA_API: "load" + i + ".data-api",
            CLICK_DATA_API: "click" + i + ".data-api"
        }
          , _ = "carousel"
          , g = "active"
          , p = "slide"
          , m = "carousel-item-right"
          , v = "carousel-item-left"
          , E = "carousel-item-next"
          , T = "carousel-item-prev"
          , y = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }
          , C = function() {
            function o(e, n) {
                this._items = null,
                this._interval = null,
                this._activeElement = null,
                this._isPaused = !1,
                this._isSliding = !1,
                this.touchTimeout = null,
                this._config = this._getConfig(n),
                this._element = t(e)[0],
                this._indicatorsElement = t(this._element).find(y.INDICATORS)[0],
                this._addEventListeners()
            }
            var C = o.prototype;
            return C.next = function() {
                this._isSliding || this._slide(h)
            }
            ,
            C.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }
            ,
            C.prev = function() {
                this._isSliding || this._slide(c)
            }
            ,
            C.pause = function(e) {
                e || (this._isPaused = !0),
                t(this._element).find(y.NEXT_PREV)[0] && P.supportsTransitionEnd() && (P.triggerTransitionEnd(this._element),
                this.cycle(!0)),
                clearInterval(this._interval),
                this._interval = null
            }
            ,
            C.cycle = function(t) {
                t || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval),
                this._interval = null),
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }
            ,
            C.to = function(e) {
                var n = this;
                this._activeElement = t(this._element).find(y.ACTIVE_ITEM)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding)
                        t(this._element).one(d.SLID, function() {
                            return n.to(e)
                        });
                    else {
                        if (i === e)
                            return this.pause(),
                            void this.cycle();
                        var s = e > i ? h : c;
                        this._slide(s, this._items[e])
                    }
            }
            ,
            C.dispose = function() {
                t(this._element).off(i),
                t.removeData(this._element, n),
                this._items = null,
                this._config = null,
                this._element = null,
                this._interval = null,
                this._isPaused = null,
                this._isSliding = null,
                this._activeElement = null,
                this._indicatorsElement = null
            }
            ,
            C._getConfig = function(t) {
                return t = r({}, a, t),
                P.typeCheckConfig(e, t, l),
                t
            }
            ,
            C._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(d.KEYDOWN, function(t) {
                    return e._keydown(t)
                }),
                "hover" === this._config.pause && (t(this._element).on(d.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(d.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }),
                "ontouchstart"in document.documentElement && t(this._element).on(d.TOUCHEND, function() {
                    e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }
            ,
            C._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName))
                    switch (t.which) {
                    case 37:
                        t.preventDefault(),
                        this.prev();
                        break;
                    case 39:
                        t.preventDefault(),
                        this.next()
                    }
            }
            ,
            C._getItemIndex = function(e) {
                return this._items = t.makeArray(t(e).parent().find(y.ITEM)),
                this._items.indexOf(e)
            }
            ,
            C._getItemByDirection = function(t, e) {
                var n = t === h
                  , i = t === c
                  , s = this._getItemIndex(e)
                  , r = this._items.length - 1;
                if ((i && 0 === s || n && s === r) && !this._config.wrap)
                    return e;
                var o = (s + (t === c ? -1 : 1)) % this._items.length;
                return -1 === o ? this._items[this._items.length - 1] : this._items[o]
            }
            ,
            C._triggerSlideEvent = function(e, n) {
                var i = this._getItemIndex(e)
                  , s = this._getItemIndex(t(this._element).find(y.ACTIVE_ITEM)[0])
                  , r = t.Event(d.SLIDE, {
                    relatedTarget: e,
                    direction: n,
                    from: s,
                    to: i
                });
                return t(this._element).trigger(r),
                r
            }
            ,
            C._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    t(this._indicatorsElement).find(y.ACTIVE).removeClass(g);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && t(n).addClass(g)
                }
            }
            ,
            C._slide = function(e, n) {
                var i, s, r, o = this, a = t(this._element).find(y.ACTIVE_ITEM)[0], l = this._getItemIndex(a), c = n || a && this._getItemByDirection(e, a), _ = this._getItemIndex(c), C = Boolean(this._interval);
                if (e === h ? (i = v,
                s = E,
                r = u) : (i = m,
                s = T,
                r = f),
                c && t(c).hasClass(g))
                    this._isSliding = !1;
                else if (!this._triggerSlideEvent(c, r).isDefaultPrevented() && a && c) {
                    this._isSliding = !0,
                    C && this.pause(),
                    this._setActiveIndicatorElement(c);
                    var I = t.Event(d.SLID, {
                        relatedTarget: c,
                        direction: r,
                        from: l,
                        to: _
                    });
                    P.supportsTransitionEnd() && t(this._element).hasClass(p) ? (t(c).addClass(s),
                    P.reflow(c),
                    t(a).addClass(i),
                    t(c).addClass(i),
                    t(a).one(P.TRANSITION_END, function() {
                        t(c).removeClass(i + " " + s).addClass(g),
                        t(a).removeClass(g + " " + s + " " + i),
                        o._isSliding = !1,
                        setTimeout(function() {
                            return t(o._element).trigger(I)
                        }, 0)
                    }).emulateTransitionEnd(600)) : (t(a).removeClass(g),
                    t(c).addClass(g),
                    this._isSliding = !1,
                    t(this._element).trigger(I)),
                    C && this.cycle()
                }
            }
            ,
            o._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(n)
                      , s = r({}, a, t(this).data());
                    "object" == typeof e && (s = r({}, s, e));
                    var l = "string" == typeof e ? e : s.slide;
                    if (i || (i = new o(this,s),
                    t(this).data(n, i)),
                    "number" == typeof e)
                        i.to(e);
                    else if ("string" == typeof l) {
                        if ("undefined" == typeof i[l])
                            throw new TypeError('No method named "' + l + '"');
                        i[l]()
                    } else
                        s.interval && (i.pause(),
                        i.cycle())
                })
            }
            ,
            o._dataApiClickHandler = function(e) {
                var i = P.getSelectorFromElement(this);
                if (i) {
                    var s = t(i)[0];
                    if (s && t(s).hasClass(_)) {
                        var a = r({}, t(s).data(), t(this).data())
                          , l = this.getAttribute("data-slide-to");
                        l && (a.interval = !1),
                        o._jQueryInterface.call(t(s), a),
                        l && t(s).data(n).to(l),
                        e.preventDefault()
                    }
                }
            }
            ,
            s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }]),
            o
        }();
        return t(document).on(d.CLICK_DATA_API, y.DATA_SLIDE, C._dataApiClickHandler),
        t(window).on(d.LOAD_DATA_API, function() {
            t(y.DATA_RIDE).each(function() {
                var e = t(this);
                C._jQueryInterface.call(e, e.data())
            })
        }),
        t.fn[e] = C._jQueryInterface,
        t.fn[e].Constructor = C,
        t.fn[e].noConflict = function() {
            return t.fn[e] = o,
            C._jQueryInterface
        }
        ,
        C
    }(e), H = function(t) {
        var e = "collapse"
          , n = "bs.collapse"
          , i = "." + n
          , o = t.fn[e]
          , a = {
            toggle: !0,
            parent: ""
        }
          , l = {
            toggle: "boolean",
            parent: "(string|element)"
        }
          , h = {
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            CLICK_DATA_API: "click" + i + ".data-api"
        }
          , c = "show"
          , u = "collapse"
          , f = "collapsing"
          , d = "collapsed"
          , _ = "width"
          , g = "height"
          , p = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }
          , m = function() {
            function i(e, n) {
                this._isTransitioning = !1,
                this._element = e,
                this._config = this._getConfig(n),
                this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = t(p.DATA_TOGGLE), s = 0; s < i.length; s++) {
                    var r = i[s]
                      , o = P.getSelectorFromElement(r);
                    null !== o && t(o).filter(e).length > 0 && (this._selector = o,
                    this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            var o = i.prototype;
            return o.toggle = function() {
                t(this._element).hasClass(c) ? this.hide() : this.show()
            }
            ,
            o.show = function() {
                var e, s, r = this;
                if (!this._isTransitioning && !t(this._element).hasClass(c) && (this._parent && 0 === (e = t.makeArray(t(this._parent).find(p.ACTIVES).filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null),
                !(e && (s = t(e).not(this._selector).data(n)) && s._isTransitioning))) {
                    var o = t.Event(h.SHOW);
                    if (t(this._element).trigger(o),
                    !o.isDefaultPrevented()) {
                        e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"),
                        s || t(e).data(n, null));
                        var a = this._getDimension();
                        t(this._element).removeClass(u).addClass(f),
                        this._element.style[a] = 0,
                        this._triggerArray.length > 0 && t(this._triggerArray).removeClass(d).attr("aria-expanded", !0),
                        this.setTransitioning(!0);
                        var l = function() {
                            t(r._element).removeClass(f).addClass(u).addClass(c),
                            r._element.style[a] = "",
                            r.setTransitioning(!1),
                            t(r._element).trigger(h.SHOWN)
                        };
                        if (P.supportsTransitionEnd()) {
                            var _ = "scroll" + (a[0].toUpperCase() + a.slice(1));
                            t(this._element).one(P.TRANSITION_END, l).emulateTransitionEnd(600),
                            this._element.style[a] = this._element[_] + "px"
                        } else
                            l()
                    }
                }
            }
            ,
            o.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(c)) {
                    var n = t.Event(h.HIDE);
                    if (t(this._element).trigger(n),
                    !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                        P.reflow(this._element),
                        t(this._element).addClass(f).removeClass(u).removeClass(c),
                        this._triggerArray.length > 0)
                            for (var s = 0; s < this._triggerArray.length; s++) {
                                var r = this._triggerArray[s]
                                  , o = P.getSelectorFromElement(r);
                                if (null !== o)
                                    t(o).hasClass(c) || t(r).addClass(d).attr("aria-expanded", !1)
                            }
                        this.setTransitioning(!0);
                        var a = function() {
                            e.setTransitioning(!1),
                            t(e._element).removeClass(f).addClass(u).trigger(h.HIDDEN)
                        };
                        this._element.style[i] = "",
                        P.supportsTransitionEnd() ? t(this._element).one(P.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                    }
                }
            }
            ,
            o.setTransitioning = function(t) {
                this._isTransitioning = t
            }
            ,
            o.dispose = function() {
                t.removeData(this._element, n),
                this._config = null,
                this._parent = null,
                this._element = null,
                this._triggerArray = null,
                this._isTransitioning = null
            }
            ,
            o._getConfig = function(t) {
                return (t = r({}, a, t)).toggle = Boolean(t.toggle),
                P.typeCheckConfig(e, t, l),
                t
            }
            ,
            o._getDimension = function() {
                return t(this._element).hasClass(_) ? _ : g
            }
            ,
            o._getParent = function() {
                var e = this
                  , n = null;
                P.isElement(this._config.parent) ? (n = this._config.parent,
                "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return t(n).find(s).each(function(t, n) {
                    e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                }),
                n
            }
            ,
            o._addAriaAndCollapsedClass = function(e, n) {
                if (e) {
                    var i = t(e).hasClass(c);
                    n.length > 0 && t(n).toggleClass(d, !i).attr("aria-expanded", i)
                }
            }
            ,
            i._getTargetFromElement = function(e) {
                var n = P.getSelectorFromElement(e);
                return n ? t(n)[0] : null
            }
            ,
            i._jQueryInterface = function(e) {
                return this.each(function() {
                    var s = t(this)
                      , o = s.data(n)
                      , l = r({}, a, s.data(), "object" == typeof e && e);
                    if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                    o || (o = new i(this,l),
                    s.data(n, o)),
                    "string" == typeof e) {
                        if ("undefined" == typeof o[e])
                            throw new TypeError('No method named "' + e + '"');
                        o[e]()
                    }
                })
            }
            ,
            s(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }]),
            i
        }();
        return t(document).on(h.CLICK_DATA_API, p.DATA_TOGGLE, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = t(this)
              , s = P.getSelectorFromElement(this);
            t(s).each(function() {
                var e = t(this)
                  , s = e.data(n) ? "toggle" : i.data();
                m._jQueryInterface.call(e, s)
            })
        }),
        t.fn[e] = m._jQueryInterface,
        t.fn[e].Constructor = m,
        t.fn[e].noConflict = function() {
            return t.fn[e] = o,
            m._jQueryInterface
        }
        ,
        m
    }(e), W = function(t) {
        var e = "dropdown"
          , i = "bs.dropdown"
          , o = "." + i
          , a = ".data-api"
          , l = t.fn[e]
          , h = new RegExp("38|40|27")
          , c = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            CLICK: "click" + o,
            CLICK_DATA_API: "click" + o + a,
            KEYDOWN_DATA_API: "keydown" + o + a,
            KEYUP_DATA_API: "keyup" + o + a
        }
          , u = "disabled"
          , f = "show"
          , d = "dropup"
          , _ = "dropright"
          , g = "dropleft"
          , p = "dropdown-menu-right"
          , m = "dropdown-menu-left"
          , v = "position-static"
          , E = '[data-toggle="dropdown"]'
          , T = ".dropdown form"
          , y = ".dropdown-menu"
          , C = ".navbar-nav"
          , I = ".dropdown-menu .dropdown-item:not(.disabled)"
          , A = "top-start"
          , b = "top-end"
          , D = "bottom-start"
          , S = "bottom-end"
          , w = "right-start"
          , N = "left-start"
          , O = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent"
        }
          , k = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)"
        }
          , L = function() {
            function a(t, e) {
                this._element = t,
                this._popper = null,
                this._config = this._getConfig(e),
                this._menu = this._getMenuElement(),
                this._inNavbar = this._detectNavbar(),
                this._addEventListeners()
            }
            var l = a.prototype;
            return l.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(u)) {
                    var e = a._getParentFromElement(this._element)
                      , i = t(this._menu).hasClass(f);
                    if (a._clearMenus(),
                    !i) {
                        var s = {
                            relatedTarget: this._element
                        }
                          , r = t.Event(c.SHOW, s);
                        if (t(e).trigger(r),
                        !r.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if ("undefined" == typeof n)
                                    throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var o = this._element;
                                t(e).hasClass(d) && (t(this._menu).hasClass(m) || t(this._menu).hasClass(p)) && (o = e),
                                "scrollParent" !== this._config.boundary && t(e).addClass(v),
                                this._popper = new n(o,this._menu,this._getPopperConfig())
                            }
                            "ontouchstart"in document.documentElement && 0 === t(e).closest(C).length && t("body").children().on("mouseover", null, t.noop),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            t(this._menu).toggleClass(f),
                            t(e).toggleClass(f).trigger(t.Event(c.SHOWN, s))
                        }
                    }
                }
            }
            ,
            l.dispose = function() {
                t.removeData(this._element, i),
                t(this._element).off(o),
                this._element = null,
                this._menu = null,
                null !== this._popper && (this._popper.destroy(),
                this._popper = null)
            }
            ,
            l.update = function() {
                this._inNavbar = this._detectNavbar(),
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            l._addEventListeners = function() {
                var e = this;
                t(this._element).on(c.CLICK, function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    e.toggle()
                })
            }
            ,
            l._getConfig = function(n) {
                return n = r({}, this.constructor.Default, t(this._element).data(), n),
                P.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
            }
            ,
            l._getMenuElement = function() {
                if (!this._menu) {
                    var e = a._getParentFromElement(this._element);
                    this._menu = t(e).find(y)[0]
                }
                return this._menu
            }
            ,
            l._getPlacement = function() {
                var e = t(this._element).parent()
                  , n = D;
                return e.hasClass(d) ? (n = A,
                t(this._menu).hasClass(p) && (n = b)) : e.hasClass(_) ? n = w : e.hasClass(g) ? n = N : t(this._menu).hasClass(p) && (n = S),
                n
            }
            ,
            l._detectNavbar = function() {
                return t(this._element).closest(".navbar").length > 0
            }
            ,
            l._getPopperConfig = function() {
                var t = this
                  , e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = r({}, e.offsets, t._config.offset(e.offsets) || {}),
                    e
                }
                : e.offset = this._config.offset,
                {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                }
            }
            ,
            a._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data(i);
                    if (n || (n = new a(this,"object" == typeof e ? e : null),
                    t(this).data(i, n)),
                    "string" == typeof e) {
                        if ("undefined" == typeof n[e])
                            throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }
            ,
            a._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var n = t.makeArray(t(E)), s = 0; s < n.length; s++) {
                        var r = a._getParentFromElement(n[s])
                          , o = t(n[s]).data(i)
                          , l = {
                            relatedTarget: n[s]
                        };
                        if (o) {
                            var h = o._menu;
                            if (t(r).hasClass(f) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(r, e.target))) {
                                var u = t.Event(c.HIDE, l);
                                t(r).trigger(u),
                                u.isDefaultPrevented() || ("ontouchstart"in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                                n[s].setAttribute("aria-expanded", "false"),
                                t(h).removeClass(f),
                                t(r).removeClass(f).trigger(t.Event(c.HIDDEN, l)))
                            }
                        }
                    }
            }
            ,
            a._getParentFromElement = function(e) {
                var n, i = P.getSelectorFromElement(e);
                return i && (n = t(i)[0]),
                n || e.parentNode
            }
            ,
            a._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(y).length)) : h.test(e.which)) && (e.preventDefault(),
                e.stopPropagation(),
                !this.disabled && !t(this).hasClass(u))) {
                    var n = a._getParentFromElement(this)
                      , i = t(n).hasClass(f);
                    if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                        var s = t(n).find(I).get();
                        if (0 !== s.length) {
                            var r = s.indexOf(e.target);
                            38 === e.which && r > 0 && r--,
                            40 === e.which && r < s.length - 1 && r++,
                            r < 0 && (r = 0),
                            s[r].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var o = t(n).find(E)[0];
                            t(o).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }
            ,
            s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return O
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return k
                }
            }]),
            a
        }();
        return t(document).on(c.KEYDOWN_DATA_API, E, L._dataApiKeydownHandler).on(c.KEYDOWN_DATA_API, y, L._dataApiKeydownHandler).on(c.CLICK_DATA_API + " " + c.KEYUP_DATA_API, L._clearMenus).on(c.CLICK_DATA_API, E, function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            L._jQueryInterface.call(t(this), "toggle")
        }).on(c.CLICK_DATA_API, T, function(t) {
            t.stopPropagation()
        }),
        t.fn[e] = L._jQueryInterface,
        t.fn[e].Constructor = L,
        t.fn[e].noConflict = function() {
            return t.fn[e] = l,
            L._jQueryInterface
        }
        ,
        L
    }(e), M = function(t) {
        var e = "modal"
          , n = "bs.modal"
          , i = "." + n
          , o = t.fn.modal
          , a = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
          , l = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
          , h = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            FOCUSIN: "focusin" + i,
            RESIZE: "resize" + i,
            CLICK_DISMISS: "click.dismiss" + i,
            KEYDOWN_DISMISS: "keydown.dismiss" + i,
            MOUSEUP_DISMISS: "mouseup.dismiss" + i,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + i,
            CLICK_DATA_API: "click" + i + ".data-api"
        }
          , c = "modal-scrollbar-measure"
          , u = "modal-backdrop"
          , f = "modal-open"
          , d = "fade"
          , _ = "show"
          , g = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
        }
          , p = function() {
            function o(e, n) {
                this._config = this._getConfig(n),
                this._element = e,
                this._dialog = t(e).find(g.DIALOG)[0],
                this._backdrop = null,
                this._isShown = !1,
                this._isBodyOverflowing = !1,
                this._ignoreBackdropClick = !1,
                this._originalBodyPadding = 0,
                this._scrollbarWidth = 0
            }
            var p = o.prototype;
            return p.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }
            ,
            p.show = function(e) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                    P.supportsTransitionEnd() && t(this._element).hasClass(d) && (this._isTransitioning = !0);
                    var i = t.Event(h.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(i),
                    this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    t(document.body).addClass(f),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(h.CLICK_DISMISS, g.DATA_DISMISS, function(t) {
                        return n.hide(t)
                    }),
                    t(this._dialog).on(h.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one(h.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }),
                    this._showBackdrop(function() {
                        return n._showElement(e)
                    }))
                }
            }
            ,
            p.hide = function(e) {
                var n = this;
                if (e && e.preventDefault(),
                !this._isTransitioning && this._isShown) {
                    var i = t.Event(h.HIDE);
                    if (t(this._element).trigger(i),
                    this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var s = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                        s && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        t(document).off(h.FOCUSIN),
                        t(this._element).removeClass(_),
                        t(this._element).off(h.CLICK_DISMISS),
                        t(this._dialog).off(h.MOUSEDOWN_DISMISS),
                        s ? t(this._element).one(P.TRANSITION_END, function(t) {
                            return n._hideModal(t)
                        }).emulateTransitionEnd(300) : this._hideModal()
                    }
                }
            }
            ,
            p.dispose = function() {
                t.removeData(this._element, n),
                t(window, document, this._element, this._backdrop).off(i),
                this._config = null,
                this._element = null,
                this._dialog = null,
                this._backdrop = null,
                this._isShown = null,
                this._isBodyOverflowing = null,
                this._ignoreBackdropClick = null,
                this._scrollbarWidth = null
            }
            ,
            p.handleUpdate = function() {
                this._adjustDialog()
            }
            ,
            p._getConfig = function(t) {
                return t = r({}, a, t),
                P.typeCheckConfig(e, t, l),
                t
            }
            ,
            p._showElement = function(e) {
                var n = this
                  , i = P.supportsTransitionEnd() && t(this._element).hasClass(d);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                this._element.style.display = "block",
                this._element.removeAttribute("aria-hidden"),
                this._element.scrollTop = 0,
                i && P.reflow(this._element),
                t(this._element).addClass(_),
                this._config.focus && this._enforceFocus();
                var s = t.Event(h.SHOWN, {
                    relatedTarget: e
                })
                  , r = function() {
                    n._config.focus && n._element.focus(),
                    n._isTransitioning = !1,
                    t(n._element).trigger(s)
                };
                i ? t(this._dialog).one(P.TRANSITION_END, r).emulateTransitionEnd(300) : r()
            }
            ,
            p._enforceFocus = function() {
                var e = this;
                t(document).off(h.FOCUSIN).on(h.FOCUSIN, function(n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }
            ,
            p._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(),
                    e.hide())
                }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS)
            }
            ,
            p._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(h.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(h.RESIZE)
            }
            ,
            p._hideModal = function() {
                var e = this;
                this._element.style.display = "none",
                this._element.setAttribute("aria-hidden", !0),
                this._isTransitioning = !1,
                this._showBackdrop(function() {
                    t(document.body).removeClass(f),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    t(e._element).trigger(h.HIDDEN)
                })
            }
            ,
            p._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(),
                this._backdrop = null)
            }
            ,
            p._showBackdrop = function(e) {
                var n = this
                  , i = t(this._element).hasClass(d) ? d : "";
                if (this._isShown && this._config.backdrop) {
                    var s = P.supportsTransitionEnd() && i;
                    if (this._backdrop = document.createElement("div"),
                    this._backdrop.className = u,
                    i && t(this._backdrop).addClass(i),
                    t(this._backdrop).appendTo(document.body),
                    t(this._element).on(h.CLICK_DISMISS, function(t) {
                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                    }),
                    s && P.reflow(this._backdrop),
                    t(this._backdrop).addClass(_),
                    !e)
                        return;
                    if (!s)
                        return void e();
                    t(this._backdrop).one(P.TRANSITION_END, e).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(_);
                    var r = function() {
                        n._removeBackdrop(),
                        e && e()
                    };
                    P.supportsTransitionEnd() && t(this._element).hasClass(d) ? t(this._backdrop).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r()
                } else
                    e && e()
            }
            ,
            p._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }
            ,
            p._resetAdjustments = function() {
                this._element.style.paddingLeft = "",
                this._element.style.paddingRight = ""
            }
            ,
            p._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                this._scrollbarWidth = this._getScrollbarWidth()
            }
            ,
            p._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    t(g.FIXED_CONTENT).each(function(n, i) {
                        var s = t(i)[0].style.paddingRight
                          , r = t(i).css("padding-right");
                        t(i).data("padding-right", s).css("padding-right", parseFloat(r) + e._scrollbarWidth + "px")
                    }),
                    t(g.STICKY_CONTENT).each(function(n, i) {
                        var s = t(i)[0].style.marginRight
                          , r = t(i).css("margin-right");
                        t(i).data("margin-right", s).css("margin-right", parseFloat(r) - e._scrollbarWidth + "px")
                    }),
                    t(g.NAVBAR_TOGGLER).each(function(n, i) {
                        var s = t(i)[0].style.marginRight
                          , r = t(i).css("margin-right");
                        t(i).data("margin-right", s).css("margin-right", parseFloat(r) + e._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight
                      , i = t("body").css("padding-right");
                    t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }
            ,
            p._resetScrollbar = function() {
                t(g.FIXED_CONTENT).each(function(e, n) {
                    var i = t(n).data("padding-right");
                    "undefined" != typeof i && t(n).css("padding-right", i).removeData("padding-right")
                }),
                t(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function(e, n) {
                    var i = t(n).data("margin-right");
                    "undefined" != typeof i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var e = t("body").data("padding-right");
                "undefined" != typeof e && t("body").css("padding-right", e).removeData("padding-right")
            }
            ,
            p._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = c,
                document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t),
                e
            }
            ,
            o._jQueryInterface = function(e, i) {
                return this.each(function() {
                    var s = t(this).data(n)
                      , a = r({}, o.Default, t(this).data(), "object" == typeof e && e);
                    if (s || (s = new o(this,a),
                    t(this).data(n, s)),
                    "string" == typeof e) {
                        if ("undefined" == typeof s[e])
                            throw new TypeError('No method named "' + e + '"');
                        s[e](i)
                    } else
                        a.show && s.show(i)
                })
            }
            ,
            s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }]),
            o
        }();
        return t(document).on(h.CLICK_DATA_API, g.DATA_TOGGLE, function(e) {
            var i, s = this, o = P.getSelectorFromElement(this);
            o && (i = t(o)[0]);
            var a = t(i).data(n) ? "toggle" : r({}, t(i).data(), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
            var l = t(i).one(h.SHOW, function(e) {
                e.isDefaultPrevented() || l.one(h.HIDDEN, function() {
                    t(s).is(":visible") && s.focus()
                })
            });
            p._jQueryInterface.call(t(i), a, this)
        }),
        t.fn.modal = p._jQueryInterface,
        t.fn.modal.Constructor = p,
        t.fn.modal.noConflict = function() {
            return t.fn.modal = o,
            p._jQueryInterface
        }
        ,
        p
    }(e), U = function(t) {
        var e = "tooltip"
          , i = "bs.tooltip"
          , o = "." + i
          , a = t.fn[e]
          , l = new RegExp("(^|\\s)bs-tooltip\\S+","g")
          , h = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }
          , c = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }
          , u = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }
          , f = "show"
          , d = "out"
          , _ = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            INSERTED: "inserted" + o,
            CLICK: "click" + o,
            FOCUSIN: "focusin" + o,
            FOCUSOUT: "focusout" + o,
            MOUSEENTER: "mouseenter" + o,
            MOUSELEAVE: "mouseleave" + o
        }
          , g = "fade"
          , p = "show"
          , m = ".tooltip-inner"
          , v = ".arrow"
          , E = "hover"
          , T = "focus"
          , y = "click"
          , C = "manual"
          , I = function() {
            function a(t, e) {
                if ("undefined" == typeof n)
                    throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0,
                this._timeout = 0,
                this._hoverState = "",
                this._activeTrigger = {},
                this._popper = null,
                this.element = t,
                this.config = this._getConfig(e),
                this.tip = null,
                this._setListeners()
            }
            var I = a.prototype;
            return I.enable = function() {
                this._isEnabled = !0
            }
            ,
            I.disable = function() {
                this._isEnabled = !1
            }
            ,
            I.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }
            ,
            I.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY
                          , i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                        t(e.currentTarget).data(n, i)),
                        i._activeTrigger.click = !i._activeTrigger.click,
                        i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(p))
                            return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }
            ,
            I.dispose = function() {
                clearTimeout(this._timeout),
                t.removeData(this.element, this.constructor.DATA_KEY),
                t(this.element).off(this.constructor.EVENT_KEY),
                t(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && t(this.tip).remove(),
                this._isEnabled = null,
                this._timeout = null,
                this._hoverState = null,
                this._activeTrigger = null,
                null !== this._popper && this._popper.destroy(),
                this._popper = null,
                this.element = null,
                this.config = null,
                this.tip = null
            }
            ,
            I.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var s = t.contains(this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !s)
                        return;
                    var r = this.getTipElement()
                      , o = P.getUID(this.constructor.NAME);
                    r.setAttribute("id", o),
                    this.element.setAttribute("aria-describedby", o),
                    this.setContent(),
                    this.config.animation && t(r).addClass(g);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, r, this.element) : this.config.placement
                      , h = this._getAttachment(l);
                    this.addAttachmentClass(h);
                    var c = !1 === this.config.container ? document.body : t(this.config.container);
                    t(r).data(this.constructor.DATA_KEY, this),
                    t.contains(this.element.ownerDocument.documentElement, this.tip) || t(r).appendTo(c),
                    t(this.element).trigger(this.constructor.Event.INSERTED),
                    this._popper = new n(this.element,r,{
                        placement: h,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: v
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }),
                    t(r).addClass(p),
                    "ontouchstart"in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                    var u = function() {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null,
                        t(e.element).trigger(e.constructor.Event.SHOWN),
                        n === d && e._leave(null, e)
                    };
                    P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(P.TRANSITION_END, u).emulateTransitionEnd(a._TRANSITION_DURATION) : u()
                }
            }
            ,
            I.hide = function(e) {
                var n = this
                  , i = this.getTipElement()
                  , s = t.Event(this.constructor.Event.HIDE)
                  , r = function() {
                    n._hoverState !== f && i.parentNode && i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    e && e()
                };
                t(this.element).trigger(s),
                s.isDefaultPrevented() || (t(i).removeClass(p),
                "ontouchstart"in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                this._activeTrigger[y] = !1,
                this._activeTrigger[T] = !1,
                this._activeTrigger[E] = !1,
                P.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(P.TRANSITION_END, r).emulateTransitionEnd(150) : r(),
                this._hoverState = "")
            }
            ,
            I.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            I.isWithContent = function() {
                return Boolean(this.getTitle())
            }
            ,
            I.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e)
            }
            ,
            I.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0],
                this.tip
            }
            ,
            I.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(m), this.getTitle()),
                e.removeClass(g + " " + p)
            }
            ,
            I.setElementContent = function(e, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
            }
            ,
            I.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                t
            }
            ,
            I._getAttachment = function(t) {
                return c[t.toUpperCase()]
            }
            ,
            I._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n)
                        t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                            return e.toggle(t)
                        });
                    else if (n !== C) {
                        var i = n === E ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                          , s = n === E ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(s, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                    t(e.element).closest(".modal").on("hide.bs.modal", function() {
                        return e.hide()
                    })
                }),
                this.config.selector ? this.config = r({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }
            ,
            I._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                this.element.setAttribute("title", ""))
            }
            ,
            I._enter = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusin" === e.type ? T : E] = !0),
                t(n.getTipElement()).hasClass(p) || n._hoverState === f ? n._hoverState = f : (clearTimeout(n._timeout),
                n._hoverState = f,
                n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                    n._hoverState === f && n.show()
                }, n.config.delay.show) : n.show())
            }
            ,
            I._leave = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusout" === e.type ? T : E] = !1),
                n._isWithActiveTrigger() || (clearTimeout(n._timeout),
                n._hoverState = d,
                n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                    n._hoverState === d && n.hide()
                }, n.config.delay.hide) : n.hide())
            }
            ,
            I._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t])
                        return !0;
                return !1
            }
            ,
            I._getConfig = function(n) {
                return "number" == typeof (n = r({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                    show: n.delay,
                    hide: n.delay
                }),
                "number" == typeof n.title && (n.title = n.title.toString()),
                "number" == typeof n.content && (n.content = n.content.toString()),
                P.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
            }
            ,
            I._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config)
                        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }
            ,
            I._cleanTipClass = function() {
                var e = t(this.getTipElement())
                  , n = e.attr("class").match(l);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }
            ,
            I._handlePopperPlacementChange = function(t) {
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement))
            }
            ,
            I._fixTransition = function() {
                var e = this.getTipElement()
                  , n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(g),
                this.config.animation = !1,
                this.hide(),
                this.show(),
                this.config.animation = n)
            }
            ,
            a._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data(i)
                      , s = "object" == typeof e && e;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this,s),
                    t(this).data(i, n)),
                    "string" == typeof e)) {
                        if ("undefined" == typeof n[e])
                            throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }
            ,
            s(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return u
                }
            }, {
                key: "NAME",
                get: function() {
                    return e
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return i
                }
            }, {
                key: "Event",
                get: function() {
                    return _
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return o
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return h
                }
            }]),
            a
        }();
        return t.fn[e] = I._jQueryInterface,
        t.fn[e].Constructor = I,
        t.fn[e].noConflict = function() {
            return t.fn[e] = a,
            I._jQueryInterface
        }
        ,
        I
    }(e), x = function(t) {
        var e = "popover"
          , n = "bs.popover"
          , i = "." + n
          , o = t.fn[e]
          , a = new RegExp("(^|\\s)bs-popover\\S+","g")
          , l = r({}, U.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
          , h = r({}, U.DefaultType, {
            content: "(string|element|function)"
        })
          , c = "fade"
          , u = "show"
          , f = ".popover-header"
          , d = ".popover-body"
          , _ = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            INSERTED: "inserted" + i,
            CLICK: "click" + i,
            FOCUSIN: "focusin" + i,
            FOCUSOUT: "focusout" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i
        }
          , g = function(r) {
            var o, g;
            function p() {
                return r.apply(this, arguments) || this
            }
            g = r,
            (o = p).prototype = Object.create(g.prototype),
            o.prototype.constructor = o,
            o.__proto__ = g;
            var m = p.prototype;
            return m.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }
            ,
            m.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-popover-" + e)
            }
            ,
            m.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0],
                this.tip
            }
            ,
            m.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(f), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(e.find(d), n),
                e.removeClass(c + " " + u)
            }
            ,
            m._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }
            ,
            m._cleanTipClass = function() {
                var e = t(this.getTipElement())
                  , n = e.attr("class").match(a);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }
            ,
            p._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(n)
                      , s = "object" == typeof e ? e : null;
                    if ((i || !/destroy|hide/.test(e)) && (i || (i = new p(this,s),
                    t(this).data(n, i)),
                    "string" == typeof e)) {
                        if ("undefined" == typeof i[e])
                            throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }
            ,
            s(p, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }, {
                key: "NAME",
                get: function() {
                    return e
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return n
                }
            }, {
                key: "Event",
                get: function() {
                    return _
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return i
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return h
                }
            }]),
            p
        }(U);
        return t.fn[e] = g._jQueryInterface,
        t.fn[e].Constructor = g,
        t.fn[e].noConflict = function() {
            return t.fn[e] = o,
            g._jQueryInterface
        }
        ,
        g
    }(e), K = function(t) {
        var e = "scrollspy"
          , n = "bs.scrollspy"
          , i = "." + n
          , o = t.fn[e]
          , a = {
            offset: 10,
            method: "auto",
            target: ""
        }
          , l = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
          , h = {
            ACTIVATE: "activate" + i,
            SCROLL: "scroll" + i,
            LOAD_DATA_API: "load" + i + ".data-api"
        }
          , c = "dropdown-item"
          , u = "active"
          , f = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }
          , d = "offset"
          , _ = "position"
          , g = function() {
            function o(e, n) {
                var i = this;
                this._element = e,
                this._scrollElement = "BODY" === e.tagName ? window : e,
                this._config = this._getConfig(n),
                this._selector = this._config.target + " " + f.NAV_LINKS + "," + this._config.target + " " + f.LIST_ITEMS + "," + this._config.target + " " + f.DROPDOWN_ITEMS,
                this._offsets = [],
                this._targets = [],
                this._activeTarget = null,
                this._scrollHeight = 0,
                t(this._scrollElement).on(h.SCROLL, function(t) {
                    return i._process(t)
                }),
                this.refresh(),
                this._process()
            }
            var g = o.prototype;
            return g.refresh = function() {
                var e = this
                  , n = this._scrollElement === this._scrollElement.window ? d : _
                  , i = "auto" === this._config.method ? n : this._config.method
                  , s = i === _ ? this._getScrollTop() : 0;
                this._offsets = [],
                this._targets = [],
                this._scrollHeight = this._getScrollHeight(),
                t.makeArray(t(this._selector)).map(function(e) {
                    var n, r = P.getSelectorFromElement(e);
                    if (r && (n = t(r)[0]),
                    n) {
                        var o = n.getBoundingClientRect();
                        if (o.width || o.height)
                            return [t(n)[i]().top + s, r]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]),
                    e._targets.push(t[1])
                })
            }
            ,
            g.dispose = function() {
                t.removeData(this._element, n),
                t(this._scrollElement).off(i),
                this._element = null,
                this._scrollElement = null,
                this._config = null,
                this._selector = null,
                this._offsets = null,
                this._targets = null,
                this._activeTarget = null,
                this._scrollHeight = null
            }
            ,
            g._getConfig = function(n) {
                if ("string" != typeof (n = r({}, a, n)).target) {
                    var i = t(n.target).attr("id");
                    i || (i = P.getUID(e),
                    t(n.target).attr("id", i)),
                    n.target = "#" + i
                }
                return P.typeCheckConfig(e, n, l),
                n
            }
            ,
            g._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }
            ,
            g._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            g._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }
            ,
            g._process = function() {
                var t = this._getScrollTop() + this._config.offset
                  , e = this._getScrollHeight()
                  , n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(),
                t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                        return this._activeTarget = null,
                        void this._clear();
                    for (var s = this._offsets.length; s--; ) {
                        this._activeTarget !== this._targets[s] && t >= this._offsets[s] && ("undefined" == typeof this._offsets[s + 1] || t < this._offsets[s + 1]) && this._activate(this._targets[s])
                    }
                }
            }
            ,
            g._activate = function(e) {
                this._activeTarget = e,
                this._clear();
                var n = this._selector.split(",");
                n = n.map(function(t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var i = t(n.join(","));
                i.hasClass(c) ? (i.closest(f.DROPDOWN).find(f.DROPDOWN_TOGGLE).addClass(u),
                i.addClass(u)) : (i.addClass(u),
                i.parents(f.NAV_LIST_GROUP).prev(f.NAV_LINKS + ", " + f.LIST_ITEMS).addClass(u),
                i.parents(f.NAV_LIST_GROUP).prev(f.NAV_ITEMS).children(f.NAV_LINKS).addClass(u)),
                t(this._scrollElement).trigger(h.ACTIVATE, {
                    relatedTarget: e
                })
            }
            ,
            g._clear = function() {
                t(this._selector).filter(f.ACTIVE).removeClass(u)
            }
            ,
            o._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(n);
                    if (i || (i = new o(this,"object" == typeof e && e),
                    t(this).data(n, i)),
                    "string" == typeof e) {
                        if ("undefined" == typeof i[e])
                            throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }
            ,
            s(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }]),
            o
        }();
        return t(window).on(h.LOAD_DATA_API, function() {
            for (var e = t.makeArray(t(f.DATA_SPY)), n = e.length; n--; ) {
                var i = t(e[n]);
                g._jQueryInterface.call(i, i.data())
            }
        }),
        t.fn[e] = g._jQueryInterface,
        t.fn[e].Constructor = g,
        t.fn[e].noConflict = function() {
            return t.fn[e] = o,
            g._jQueryInterface
        }
        ,
        g
    }(e), V = function(t) {
        var e = "bs.tab"
          , n = "." + e
          , i = t.fn.tab
          , r = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            CLICK_DATA_API: "click.bs.tab.data-api"
        }
          , o = "dropdown-menu"
          , a = "active"
          , l = "disabled"
          , h = "fade"
          , c = "show"
          , u = ".dropdown"
          , f = ".nav, .list-group"
          , d = ".active"
          , _ = "> li > .active"
          , g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'
          , p = ".dropdown-toggle"
          , m = "> .dropdown-menu .active"
          , v = function() {
            function n(t) {
                this._element = t
            }
            var i = n.prototype;
            return i.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(a) || t(this._element).hasClass(l))) {
                    var n, i, s = t(this._element).closest(f)[0], o = P.getSelectorFromElement(this._element);
                    if (s) {
                        var h = "UL" === s.nodeName ? _ : d;
                        i = (i = t.makeArray(t(s).find(h)))[i.length - 1]
                    }
                    var c = t.Event(r.HIDE, {
                        relatedTarget: this._element
                    })
                      , u = t.Event(r.SHOW, {
                        relatedTarget: i
                    });
                    if (i && t(i).trigger(c),
                    t(this._element).trigger(u),
                    !u.isDefaultPrevented() && !c.isDefaultPrevented()) {
                        o && (n = t(o)[0]),
                        this._activate(this._element, s);
                        var g = function() {
                            var n = t.Event(r.HIDDEN, {
                                relatedTarget: e._element
                            })
                              , s = t.Event(r.SHOWN, {
                                relatedTarget: i
                            });
                            t(i).trigger(n),
                            t(e._element).trigger(s)
                        };
                        n ? this._activate(n, n.parentNode, g) : g()
                    }
                }
            }
            ,
            i.dispose = function() {
                t.removeData(this._element, e),
                this._element = null
            }
            ,
            i._activate = function(e, n, i) {
                var s = this
                  , r = ("UL" === n.nodeName ? t(n).find(_) : t(n).children(d))[0]
                  , o = i && P.supportsTransitionEnd() && r && t(r).hasClass(h)
                  , a = function() {
                    return s._transitionComplete(e, r, i)
                };
                r && o ? t(r).one(P.TRANSITION_END, a).emulateTransitionEnd(150) : a()
            }
            ,
            i._transitionComplete = function(e, n, i) {
                if (n) {
                    t(n).removeClass(c + " " + a);
                    var s = t(n.parentNode).find(m)[0];
                    s && t(s).removeClass(a),
                    "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(a),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                P.reflow(e),
                t(e).addClass(c),
                e.parentNode && t(e.parentNode).hasClass(o)) {
                    var r = t(e).closest(u)[0];
                    r && t(r).find(p).addClass(a),
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }
            ,
            n._jQueryInterface = function(i) {
                return this.each(function() {
                    var s = t(this)
                      , r = s.data(e);
                    if (r || (r = new n(this),
                    s.data(e, r)),
                    "string" == typeof i) {
                        if ("undefined" == typeof r[i])
                            throw new TypeError('No method named "' + i + '"');
                        r[i]()
                    }
                })
            }
            ,
            s(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }]),
            n
        }();
        return t(document).on(r.CLICK_DATA_API, g, function(e) {
            e.preventDefault(),
            v._jQueryInterface.call(t(this), "show")
        }),
        t.fn.tab = v._jQueryInterface,
        t.fn.tab.Constructor = v,
        t.fn.tab.noConflict = function() {
            return t.fn.tab = i,
            v._jQueryInterface
        }
        ,
        v
    }(e);
    !function(t) {
        if ("undefined" == typeof t)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e),
    t.Util = P,
    t.Alert = L,
    t.Button = R,
    t.Carousel = j,
    t.Collapse = H,
    t.Dropdown = W,
    t.Modal = M,
    t.Popover = x,
    t.Scrollspy = K,
    t.Tab = V,
    t.Tooltip = U,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
});

/*! jQuery Validation Plugin - v1.11.1 - 3/22/2013\n* https://github.com/jzaefferer/jquery-validation
* Copyright (c) 2013 Jörn Zaefferer; Licensed MIT */
(function(t) {
    t.extend(t.fn, {
        validate: function(e) {
            if (!this.length)
                return e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."),
                void 0;
            var i = t.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"),
            i = new t.validator(e,this[0]),
            t.data(this[0], "validator", i),
            i.settings.onsubmit && (this.validateDelegate(":submit", "click", function(e) {
                i.settings.submitHandler && (i.submitButton = e.target),
                t(e.target).hasClass("cancel") && (i.cancelSubmit = !0),
                void 0 !== t(e.target).attr("formnovalidate") && (i.cancelSubmit = !0)
            }),
            this.submit(function(e) {
                function s() {
                    var s;
                    return i.settings.submitHandler ? (i.submitButton && (s = t("<input type='hidden'/>").attr("name", i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),
                    i.settings.submitHandler.call(i, i.currentForm, e),
                    i.submitButton && s.remove(),
                    !1) : !0
                }
                return i.settings.debug && e.preventDefault(),
                i.cancelSubmit ? (i.cancelSubmit = !1,
                s()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0,
                !1) : s() : (i.focusInvalid(),
                !1)
            })),
            i)
        },
        valid: function() {
            if (t(this[0]).is("form"))
                return this.validate().form();
            var e = !0
              , i = t(this[0].form).validate();
            return this.each(function() {
                e = e && i.element(this)
            }),
            e
        },
        removeAttrs: function(e) {
            var i = {}
              , s = this;
            return t.each(e.split(/\s/), function(t, e) {
                i[e] = s.attr(e),
                s.removeAttr(e)
            }),
            i
        },
        rules: function(e, i) {
            var s = this[0];
            if (e) {
                var r = t.data(s.form, "validator").settings
                  , n = r.rules
                  , a = t.validator.staticRules(s);
                switch (e) {
                case "add":
                    t.extend(a, t.validator.normalizeRule(i)),
                    delete a.messages,
                    n[s.name] = a,
                    i.messages && (r.messages[s.name] = t.extend(r.messages[s.name], i.messages));
                    break;
                case "remove":
                    if (!i)
                        return delete n[s.name],
                        a;
                    var u = {};
                    return t.each(i.split(/\s/), function(t, e) {
                        u[e] = a[e],
                        delete a[e]
                    }),
                    u
                }
            }
            var o = t.validator.normalizeRules(t.extend({}, t.validator.classRules(s), t.validator.attributeRules(s), t.validator.dataRules(s), t.validator.staticRules(s)), s);
            if (o.required) {
                var l = o.required;
                delete o.required,
                o = t.extend({
                    required: l
                }, o)
            }
            return o
        }
    }),
    t.extend(t.expr[":"], {
        blank: function(e) {
            return !t.trim("" + t(e).val())
        },
        filled: function(e) {
            return !!t.trim("" + t(e).val())
        },
        unchecked: function(e) {
            return !t(e).prop("checked")
        }
    }),
    t.validator = function(e, i) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e),
        this.currentForm = i,
        this.init()
    }
    ,
    t.validator.format = function(e, i) {
        return 1 === arguments.length ? function() {
            var i = t.makeArray(arguments);
            return i.unshift(e),
            t.validator.format.apply(this, i)
        }
        : (arguments.length > 2 && i.constructor !== Array && (i = t.makeArray(arguments).slice(1)),
        i.constructor !== Array && (i = [i]),
        t.each(i, function(t, i) {
            e = e.replace(RegExp("\\{" + t + "\\}", "g"), function() {
                return i
            })
        }),
        e)
    }
    ,
    t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(t) {
                this.lastActive = t,
                this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass),
                this.addWrapper(this.errorsFor(t)).hide())
            },
            onfocusout: function(t) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function(t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function(t) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).addClass(i).removeClass(s) : t(e).addClass(i).removeClass(s)
            },
            unhighlight: function(e, i, s) {
                "radio" === e.type ? this.findByName(e.name).removeClass(i).addClass(s) : t(e).removeClass(i).addClass(s)
            }
        },
        setDefaults: function(e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                function e(e) {
                    var i = t.data(this[0].form, "validator")
                      , s = "on" + e.type.replace(/^validate/, "");
                    i.settings[s] && i.settings[s].call(i, this[0], e)
                }
                this.labelContainer = t(this.settings.errorLabelContainer),
                this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm),
                this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer),
                this.submitted = {},
                this.valueCache = {},
                this.pendingRequest = 0,
                this.pending = {},
                this.invalid = {},
                this.reset();
                var i = this.groups = {};
                t.each(this.settings.groups, function(e, s) {
                    "string" == typeof s && (s = s.split(/\s/)),
                    t.each(s, function(t, s) {
                        i[s] = e
                    })
                });
                var s = this.settings.rules;
                t.each(s, function(e, i) {
                    s[e] = t.validator.normalizeRule(i)
                }),
                t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e),
                this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(),
                t.extend(this.submitted, this.errorMap),
                this.invalid = t.extend({}, this.errorMap),
                this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]),
                this.showErrors(),
                this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)
                    this.check(e[t]);
                return this.valid()
            },
            element: function(e) {
                e = this.validationTargetFor(this.clean(e)),
                this.lastElement = e,
                this.prepareElement(e),
                this.currentElements = t(e);
                var i = this.check(e) !== !1;
                return i ? delete this.invalid[e.name] : this.invalid[e.name] = !0,
                this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)),
                this.showErrors(),
                i
            },
            showErrors: function(e) {
                if (e) {
                    t.extend(this.errorMap, e),
                    this.errorList = [];
                    for (var i in e)
                        this.errorList.push({
                            message: e[i],
                            element: this.findByName(i)[0]
                        });
                    this.successList = t.grep(this.successList, function(t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                t.fn.resetForm && t(this.currentForm).resetForm(),
                this.submitted = {},
                this.lastElement = null,
                this.prepareForm(),
                this.hideErrors(),
                this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(t) {
                var e = 0;
                for (var i in t)
                    e++;
                return e
            },
            hideErrors: function() {
                this.addWrapper(this.toHide).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid)
                    try {
                        t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (e) {}
            },
            findLastActive: function() {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function(t) {
                    return t.element.name === e.name
                }).length && e
            },
            elements: function() {
                var e = this
                  , i = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this),
                    this.name in i || !e.objectLength(t(this).rules()) ? !1 : (i[this.name] = !0,
                    !0)
                })
            },
            clean: function(e) {
                return t(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.replace(" ", ".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            },
            reset: function() {
                this.successList = [],
                this.errorList = [],
                this.errorMap = {},
                this.toShow = t([]),
                this.toHide = t([]),
                this.currentElements = t([])
            },
            prepareForm: function() {
                this.reset(),
                this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(t) {
                this.reset(),
                this.toHide = this.errorsFor(t)
            },
            elementValue: function(e) {
                var i = t(e).attr("type")
                  , s = t(e).val();
                return "radio" === i || "checkbox" === i ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof s ? s.replace(/\r/g, "") : s
            },
            check: function(e) {
                e = this.validationTargetFor(this.clean(e));
                var i, s = t(e).rules(), r = !1, n = this.elementValue(e);
                for (var a in s) {
                    var u = {
                        method: a,
                        parameters: s[a]
                    };
                    try {
                        if (i = t.validator.methods[a].call(this, n, e, u.parameters),
                        "dependency-mismatch" === i) {
                            r = !0;
                            continue
                        }
                        if (r = !1,
                        "pending" === i)
                            return this.toHide = this.toHide.not(this.errorsFor(e)),
                            void 0;
                        if (!i)
                            return this.formatAndAdd(e, u),
                            !1
                    } catch (o) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + u.method + "' method.", o),
                        o
                    }
                }
                return r ? void 0 : (this.objectLength(s) && this.successList.push(e),
                !0)
            },
            customDataMessage: function(e, i) {
                return t(e).data("msg-" + i.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + i.toLowerCase())
            },
            customMessage: function(t, e) {
                var i = this.settings.messages[t];
                return i && (i.constructor === String ? i : i[e])
            },
            findDefined: function() {
                for (var t = 0; arguments.length > t; t++)
                    if (void 0 !== arguments[t])
                        return arguments[t];
                return void 0
            },
            defaultMessage: function(e, i) {
                return this.findDefined(this.customMessage(e.name, i), this.customDataMessage(e, i), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[i], "<strong>Warning: No message defined for " + e.name + "</strong>")
            },
            formatAndAdd: function(e, i) {
                var s = this.defaultMessage(e, i.method)
                  , r = /\$?\{(\d+)\}/g;
                "function" == typeof s ? s = s.call(this, i.parameters, e) : r.test(s) && (s = t.validator.format(s.replace(r, "{$1}"), i.parameters)),
                this.errorList.push({
                    message: s,
                    element: e
                }),
                this.errorMap[e.name] = s,
                this.submitted[e.name] = s
            },
            addWrapper: function(t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))),
                t
            },
            defaultShowErrors: function() {
                var t, e;
                for (t = 0; this.errorList[t]; t++) {
                    var i = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass),
                    this.showLabel(i.element, i.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)),
                this.settings.success)
                    for (t = 0; this.successList[t]; t++)
                        this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)
                    for (t = 0,
                    e = this.validElements(); e[t]; t++)
                        this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow),
                this.hideErrors(),
                this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return t(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, i) {
                var s = this.errorsFor(e);
                s.length ? (s.removeClass(this.settings.validClass).addClass(this.settings.errorClass),
                s.html(i)) : (s = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(i || ""),
                this.settings.wrapper && (s = s.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()),
                this.labelContainer.append(s).length || (this.settings.errorPlacement ? this.settings.errorPlacement(s, t(e)) : s.insertAfter(e))),
                !i && this.settings.success && (s.text(""),
                "string" == typeof this.settings.success ? s.addClass(this.settings.success) : this.settings.success(s, e)),
                this.toShow = this.toShow.add(s)
            },
            errorsFor: function(e) {
                var i = this.idOrName(e);
                return this.errors().filter(function() {
                    return t(this).attr("for") === i
                })
            },
            idOrName: function(t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            },
            validationTargetFor: function(t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]),
                t
            },
            checkable: function(t) {
                return /radio|checkbox/i.test(t.type)
            },
            findByName: function(e) {
                return t(this.currentForm).find("[name='" + e + "']")
            },
            getLength: function(e, i) {
                switch (i.nodeName.toLowerCase()) {
                case "select":
                    return t("option:selected", i).length;
                case "input":
                    if (this.checkable(i))
                        return this.findByName(i.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            },
            dependTypes: {
                "boolean": function(t) {
                    return t
                },
                string: function(e, i) {
                    return !!t(e, i.form).length
                },
                "function": function(t, e) {
                    return t(e)
                }
            },
            optional: function(e) {
                var i = this.elementValue(e);
                return !t.validator.methods.required.call(this, i, e) && "dependency-mismatch"
            },
            startRequest: function(t) {
                this.pending[t.name] || (this.pendingRequest++,
                this.pending[t.name] = !0)
            },
            stopRequest: function(e, i) {
                this.pendingRequest--,
                0 > this.pendingRequest && (this.pendingRequest = 0),
                delete this.pending[e.name],
                i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(),
                this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]),
                this.formSubmitted = !1)
            },
            previousValue: function(e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, "remote")
                })
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, i) {
            e.constructor === String ? this.classRuleSettings[e] = i : t.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var i = {}
              , s = t(e).attr("class");
            return s && t.each(s.split(" "), function() {
                this in t.validator.classRuleSettings && t.extend(i, t.validator.classRuleSettings[this])
            }),
            i
        },
        attributeRules: function(e) {
            var i = {}
              , s = t(e)
              , r = s[0].getAttribute("type");
            for (var n in t.validator.methods) {
                var a;
                "required" === n ? (a = s.get(0).getAttribute(n),
                "" === a && (a = !0),
                a = !!a) : a = s.attr(n),
                /min|max/.test(n) && (null === r || /number|range|text/.test(r)) && (a = Number(a)),
                a ? i[n] = a : r === n && "range" !== r && (i[n] = !0)
            }
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength,
            i
        },
        dataRules: function(e) {
            var i, s, r = {}, n = t(e);
            for (i in t.validator.methods)
                s = n.data("rule-" + i.toLowerCase()),
                void 0 !== s && (r[i] = s);
            return r
        },
        staticRules: function(e) {
            var i = {}
              , s = t.data(e.form, "validator");
            return s.settings.rules && (i = t.validator.normalizeRule(s.settings.rules[e.name]) || {}),
            i
        },
        normalizeRules: function(e, i) {
            return t.each(e, function(s, r) {
                if (r === !1)
                    return delete e[s],
                    void 0;
                if (r.param || r.depends) {
                    var n = !0;
                    switch (typeof r.depends) {
                    case "string":
                        n = !!t(r.depends, i.form).length;
                        break;
                    case "function":
                        n = r.depends.call(i, i)
                    }
                    n ? e[s] = void 0 !== r.param ? r.param : !0 : delete e[s]
                }
            }),
            t.each(e, function(s, r) {
                e[s] = t.isFunction(r) ? r(i) : r
            }),
            t.each(["minlength", "maxlength"], function() {
                e[this] && (e[this] = Number(e[this]))
            }),
            t.each(["rangelength", "range"], function() {
                var i;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (i = e[this].split(/[\s,]+/),
                e[this] = [Number(i[0]), Number(i[1])]))
            }),
            t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max],
            delete e.min,
            delete e.max),
            e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength],
            delete e.minlength,
            delete e.maxlength)),
            e
        },
        normalizeRule: function(e) {
            if ("string" == typeof e) {
                var i = {};
                t.each(e.split(/\s/), function() {
                    i[this] = !0
                }),
                e = i
            }
            return e
        },
        addMethod: function(e, i, s) {
            t.validator.methods[e] = i,
            t.validator.messages[e] = void 0 !== s ? s : t.validator.messages[e],
            3 > i.length && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, i, s) {
                if (!this.depend(s, i))
                    return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = t(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(e, i) > 0 : t.trim(e).length > 0
            },
            email: function(t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
            },
            url: function(t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            },
            date: function(t, e) {
                return this.optional(e) || !/Invalid|NaN/.test("" + new Date(t))
            },
            dateISO: function(t, e) {
                return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
            },
            number: function(t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            },
            digits: function(t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            },
            creditcard: function(t, e) {
                if (this.optional(e))
                    return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t))
                    return !1;
                var i = 0
                  , s = 0
                  , r = !1;
                t = t.replace(/\D/g, "");
                for (var n = t.length - 1; n >= 0; n--) {
                    var a = t.charAt(n);
                    s = parseInt(a, 10),
                    r && (s *= 2) > 9 && (s -= 9),
                    i += s,
                    r = !r
                }
                return 0 === i % 10
            },
            minlength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s
            },
            maxlength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || s >= r
            },
            rangelength: function(e, i, s) {
                var r = t.isArray(e) ? e.length : this.getLength(t.trim(e), i);
                return this.optional(i) || r >= s[0] && s[1] >= r
            },
            min: function(t, e, i) {
                return this.optional(e) || t >= i
            },
            max: function(t, e, i) {
                return this.optional(e) || i >= t
            },
            range: function(t, e, i) {
                return this.optional(e) || t >= i[0] && i[1] >= t
            },
            equalTo: function(e, i, s) {
                var r = t(s);
                return this.settings.onfocusout && r.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    t(i).valid()
                }),
                e === r.val()
            },
            remote: function(e, i, s) {
                if (this.optional(i))
                    return "dependency-mismatch";
                var r = this.previousValue(i);
                if (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}),
                r.originalMessage = this.settings.messages[i.name].remote,
                this.settings.messages[i.name].remote = r.message,
                s = "string" == typeof s && {
                    url: s
                } || s,
                r.old === e)
                    return r.valid;
                r.old = e;
                var n = this;
                this.startRequest(i);
                var a = {};
                return a[i.name] = e,
                t.ajax(t.extend(!0, {
                    url: s,
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    success: function(s) {
                        n.settings.messages[i.name].remote = r.originalMessage;
                        var a = s === !0 || "true" === s;
                        if (a) {
                            var u = n.formSubmitted;
                            n.prepareElement(i),
                            n.formSubmitted = u,
                            n.successList.push(i),
                            delete n.invalid[i.name],
                            n.showErrors()
                        } else {
                            var o = {}
                              , l = s || n.defaultMessage(i, "remote");
                            o[i.name] = r.message = t.isFunction(l) ? l(e) : l,
                            n.invalid[i.name] = !0,
                            n.showErrors(o)
                        }
                        r.valid = a,
                        n.stopRequest(i, a)
                    }
                }, s)),
                "pending"
            }
        }
    }),
    t.format = t.validator.format
}
)(jQuery),
function(t) {
    var e = {};
    if (t.ajaxPrefilter)
        t.ajaxPrefilter(function(t, i, s) {
            var r = t.port;
            "abort" === t.mode && (e[r] && e[r].abort(),
            e[r] = s)
        });
    else {
        var i = t.ajax;
        t.ajax = function(s) {
            var r = ("mode"in s ? s : t.ajaxSettings).mode
              , n = ("port"in s ? s : t.ajaxSettings).port;
            return "abort" === r ? (e[n] && e[n].abort(),
            e[n] = i.apply(this, arguments),
            e[n]) : i.apply(this, arguments)
        }
    }
}(jQuery),
function(t) {
    t.extend(t.fn, {
        validateDelegate: function(e, i, s) {
            return this.bind(i, function(i) {
                var r = t(i.target);
                return r.is(e) ? s.apply(r, arguments) : void 0
            })
        }
    })
}(jQuery);
/*! WOW - v0.1.12 - 2014-06-29
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */
(function() {
    var a, b, c, d = function(a, b) {
        return function() {
            return a.apply(b, arguments)
        }
    }, e = [].indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
            if (b in this && this[b] === a)
                return b;
        return -1
    }
    ;
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) {
            var c, d;
            for (c in a)
                d = a[c],
                null != d && (b[c] = d);
            return b
        }
        ,
        a.prototype.isMobile = function(a) {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
        }
        ,
        a
    }(),
    c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() {
            this.keys = [],
            this.values = []
        }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys,
            b = d = 0,
            e = f.length; e > d; b = ++d)
                if (c = f[b],
                c === a)
                    return this.values[b]
        }
        ,
        a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys,
            c = e = 0,
            f = g.length; f > e; c = ++e)
                if (d = g[c],
                d === a)
                    return void (this.values[c] = b);
            return this.keys.push(a),
            this.values.push(b)
        }
        ,
        a
    }()),
    a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() {
            console.warn("MutationObserver is not supported by your browser."),
            console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
        }
        return a.notSupported = !0,
        a.prototype.observe = function() {}
        ,
        a
    }()),
    this.WOW = function() {
        function f(a) {
            null == a && (a = {}),
            this.scrollCallback = d(this.scrollCallback, this),
            this.scrollHandler = d(this.scrollHandler, this),
            this.start = d(this.start, this),
            this.scrolled = !0,
            this.config = this.util().extend(a, this.defaults),
            this.animationNameCache = new c
        }
        return f.prototype.defaults = {
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !0,
            live: !0
        },
        f.prototype.init = function() {
            var a;
            return this.element = window.document.documentElement,
            "interactive" === (a = document.readyState) || "complete" === a ? this.start() : document.addEventListener("DOMContentLoaded", this.start),
            this.finished = []
        }
        ,
        f.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1,
            this.boxes = this.element.getElementsByClassName(this.config.boxClass),
            this.all = function() {
                var a, c, d, e;
                for (d = this.boxes,
                e = [],
                a = 0,
                c = d.length; c > a; a++)
                    b = d[a],
                    e.push(b);
                return e
            }
            .call(this),
            this.boxes.length)
                if (this.disabled())
                    this.resetStyle();
                else {
                    for (e = this.boxes,
                    c = 0,
                    d = e.length; d > c; c++)
                        b = e[c],
                        this.applyStyle(b, !0);
                    window.addEventListener("scroll", this.scrollHandler, !1),
                    window.addEventListener("resize", this.scrollHandler, !1),
                    this.interval = setInterval(this.scrollCallback, 50)
                }
            return this.config.live ? new a(function(a) {
                return function(b) {
                    var c, d, e, f, g;
                    for (g = [],
                    e = 0,
                    f = b.length; f > e; e++)
                        d = b[e],
                        g.push(function() {
                            var a, b, e, f;
                            for (e = d.addedNodes || [],
                            f = [],
                            a = 0,
                            b = e.length; b > a; a++)
                                c = e[a],
                                f.push(this.doSync(c));
                            return f
                        }
                        .call(a));
                    return g
                }
            }(this)).observe(document.body, {
                childList: !0,
                subtree: !0
            }) : void 0
        }
        ,
        f.prototype.stop = function() {
            return this.stopped = !0,
            window.removeEventListener("scroll", this.scrollHandler, !1),
            window.removeEventListener("resize", this.scrollHandler, !1),
            null != this.interval ? clearInterval(this.interval) : void 0
        }
        ,
        f.prototype.sync = function() {
            return a.notSupported ? this.doSync(this.element) : void 0
        }
        ,
        f.prototype.doSync = function(a) {
            var b, c, d, f, g;
            if (!this.stopped) {
                for (a || (a = this.element),
                a = a.parentNode || a,
                f = a.getElementsByClassName(this.config.boxClass),
                g = [],
                c = 0,
                d = f.length; d > c; c++)
                    b = f[c],
                    e.call(this.all, b) < 0 ? (this.applyStyle(b, !0),
                    this.boxes.push(b),
                    this.all.push(b),
                    g.push(this.scrolled = !0)) : g.push(void 0);
                return g
            }
        }
        ,
        f.prototype.show = function(a) {
            return this.applyStyle(a),
            a.className = "" + a.className + " " + this.config.animateClass
        }
        ,
        f.prototype.applyStyle = function(a, b) {
            var c, d, e;
            return d = a.getAttribute("data-wow-duration"),
            c = a.getAttribute("data-wow-delay"),
            e = a.getAttribute("data-wow-iteration"),
            this.animate(function(f) {
                return function() {
                    return f.customStyle(a, b, d, c, e)
                }
            }(this))
        }
        ,
        f.prototype.animate = function() {
            return "requestAnimationFrame"in window ? function(a) {
                return window.requestAnimationFrame(a)
            }
            : function(a) {
                return a()
            }
        }(),
        f.prototype.resetStyle = function() {
            var a, b, c, d, e;
            for (d = this.boxes,
            e = [],
            b = 0,
            c = d.length; c > b; b++)
                a = d[b],
                e.push(a.setAttribute("style", "visibility: visible;"));
            return e
        }
        ,
        f.prototype.customStyle = function(a, b, c, d, e) {
            return b && this.cacheAnimationName(a),
            a.style.visibility = b ? "hidden" : "visible",
            c && this.vendorSet(a.style, {
                animationDuration: c
            }),
            d && this.vendorSet(a.style, {
                animationDelay: d
            }),
            e && this.vendorSet(a.style, {
                animationIterationCount: e
            }),
            this.vendorSet(a.style, {
                animationName: b ? "none" : this.cachedAnimationName(a)
            }),
            a
        }
        ,
        f.prototype.vendors = ["moz", "webkit"],
        f.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            f = [];
            for (c in b)
                d = b[c],
                a["" + c] = d,
                f.push(function() {
                    var b, f, g, h;
                    for (g = this.vendors,
                    h = [],
                    b = 0,
                    f = g.length; f > b; b++)
                        e = g[b],
                        h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
                    return h
                }
                .call(this));
            return f
        }
        ,
        f.prototype.vendorCSS = function(a, b) {
            var c, d, e, f, g, h;
            for (d = window.getComputedStyle(a),
            c = d.getPropertyCSSValue(b),
            h = this.vendors,
            f = 0,
            g = h.length; g > f; f++)
                e = h[f],
                c = c || d.getPropertyCSSValue("-" + e + "-" + b);
            return c
        }
        ,
        f.prototype.animationName = function(a) {
            var b;
            try {
                b = this.vendorCSS(a, "animation-name").cssText
            } catch (c) {
                b = window.getComputedStyle(a).getPropertyValue("animation-name")
            }
            return "none" === b ? "" : b
        }
        ,
        f.prototype.cacheAnimationName = function(a) {
            return this.animationNameCache.set(a, this.animationName(a))
        }
        ,
        f.prototype.cachedAnimationName = function(a) {
            return this.animationNameCache.get(a)
        }
        ,
        f.prototype.scrollHandler = function() {
            return this.scrolled = !0
        }
        ,
        f.prototype.scrollCallback = function() {
            var a;
            return !this.scrolled || (this.scrolled = !1,
            this.boxes = function() {
                var b, c, d, e;
                for (d = this.boxes,
                e = [],
                b = 0,
                c = d.length; c > b; b++)
                    a = d[b],
                    a && (this.isVisible(a) ? this.show(a) : e.push(a));
                return e
            }
            .call(this),
            this.boxes.length || this.config.live) ? void 0 : this.stop()
        }
        ,
        f.prototype.offsetTop = function(a) {
            for (var b; void 0 === a.offsetTop; )
                a = a.parentNode;
            for (b = a.offsetTop; a = a.offsetParent; )
                b += a.offsetTop;
            return b
        }
        ,
        f.prototype.isVisible = function(a) {
            var b, c, d, e, f;
            return c = a.getAttribute("data-wow-offset") || this.config.offset,
            f = window.pageYOffset,
            e = f + this.element.clientHeight - c,
            d = this.offsetTop(a),
            b = d + a.clientHeight,
            e >= d && b >= f
        }
        ,
        f.prototype.util = function() {
            return this._util || (this._util = new b)
        }
        ,
        f.prototype.disabled = function() {
            return !this.config.mobile && this.util().isMobile(navigator.userAgent)
        }
        ,
        f
    }()
}
).call(this);
!function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            },
            n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            i.extend(n, n.initials),
            n.activeBreakpoint = null,
            n.animType = null,
            n.animProp = null,
            n.breakpoints = [],
            n.breakpointSettings = [],
            n.cssTransitions = !1,
            n.focussed = !1,
            n.interrupted = !1,
            n.hidden = "hidden",
            n.paused = !0,
            n.positionProp = null,
            n.respondTo = null,
            n.rowCount = 1,
            n.shouldClick = !0,
            n.$slider = i(t),
            n.$slidesCache = null,
            n.transformType = null,
            n.transitionType = null,
            n.visibilityChange = "visibilitychange",
            n.windowWidth = 0,
            n.windowTimer = null,
            s = i(t).data("slick") || {},
            n.options = i.extend({}, n.defaults, o, s),
            n.currentSlide = n.options.initialSlide,
            n.originalSettings = n.options,
            void 0 !== document.mozHidden ? (n.hidden = "mozHidden",
            n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden",
            n.visibilityChange = "webkitvisibilitychange"),
            n.autoPlay = i.proxy(n.autoPlay, n),
            n.autoPlayClear = i.proxy(n.autoPlayClear, n),
            n.autoPlayIterator = i.proxy(n.autoPlayIterator, n),
            n.changeSlide = i.proxy(n.changeSlide, n),
            n.clickHandler = i.proxy(n.clickHandler, n),
            n.selectHandler = i.proxy(n.selectHandler, n),
            n.setPosition = i.proxy(n.setPosition, n),
            n.swipeHandler = i.proxy(n.swipeHandler, n),
            n.dragHandler = i.proxy(n.dragHandler, n),
            n.keyHandler = i.proxy(n.keyHandler, n),
            n.instanceUid = e++,
            n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            n.registerBreakpoints(),
            n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }
    ,
    e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t)
            o = t,
            t = null;
        else if (t < 0 || t >= s.slideCount)
            return !1;
        s.unload(),
        "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, t) {
        var o = {}
          , s = this;
        s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
        i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i),
                !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)",
                s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)",
                s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(),
        e = Math.ceil(e),
        !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)",
        s.$slideTrack.css(o),
        t && setTimeout(function() {
            s.disableTransition(),
            t.call()
        }, s.options.speed))
    }
    ,
    e.prototype.getNavTarget = function() {
        var e = this
          , t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)),
        t
    }
    ,
    e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(i) {
        var e = this
          , t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase,
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var i = this
          , e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll,
        i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e))
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"),
        e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"),
        e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }
    ,
    e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0; e <= o.getDotCount(); e += 1)
                t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots),
            o.$dots.find("li").first().addClass("slick-active")
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }),
        e.$slider.addClass("slick-slider"),
        e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(),
        e.$slideTrack.css("opacity", 0),
        !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable")
    }
    ,
    e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(),
        n = l.$slider.children(),
        l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o),
            l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this, l = !1, d = r.$slider.width(), a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints)
                r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : (r.activeBreakpoint = s,
            "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e)),
            l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null,
            r.options = r.originalSettings,
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            l = s),
            e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }
    ,
    e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this, l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        n = r.slideCount % r.options.slidesToScroll != 0,
        o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll,
        e.data.message) {
        case "previous":
            s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
            break;
        case "next":
            s = 0 === o ? r.options.slidesToScroll : o,
            r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
            break;
        case "index":
            var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
            r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(),
        t = 0,
        i > e[e.length - 1])
            i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
        e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
        !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
        e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i))
    }
    ,
    e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(),
        i.stopPropagation(),
        i.preventDefault())
    }
    ,
    e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(),
        t.touchObject = {},
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""),
        t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slideTrack.detach(),
        t.$list.detach(),
        t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        t.unslicked = !0,
        e || t.$slider.trigger("destroy", [t])
    }
    ,
    e.prototype.disableTransition = function(i) {
        var e = this
          , t = {};
        t[e.transitionType] = "",
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }
    ,
    e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }),
        t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i),
        t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }),
        e && setTimeout(function() {
            t.disableTransition(i),
            e.call()
        }, t.options.speed))
    }
    ,
    e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i),
        e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides,
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"),
                e.autoPlay())
            }, 0)
        })
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var i = this
          , e = 0
          , t = 0
          , o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow)
                ++o;
            else
                for (; e < i.slideCount; )
                    ++o,
                    e = t + i.options.slidesToScroll,
                    t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode)
            o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount; )
                ++o,
                e = t + i.options.slidesToScroll,
                t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else
            o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }
    ,
    e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this, r = 0;
        return n.slideOffset = 0,
        t = n.$slides.first().outerHeight(!0),
        !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1,
        s = -1,
        !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)),
        r = t * n.options.slidesToShow * s),
        n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1,
        r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1,
        r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth,
        r = (i + n.options.slidesToShow - n.slideCount) * t),
        n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0,
        r = 0),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0,
        n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)),
        e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r,
        !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1),
        e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0,
        e += (n.$list.width() - o.outerWidth()) / 2)),
        e
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var i, e = this, t = 0, o = 0, s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll,
        o = -1 * e.options.slidesToScroll,
        i = 2 * e.slideCount); t < i; )
            s.push(t),
            t = o + e.options.slidesToScroll,
            o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0,
        !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return e = n,
                !1
        }),
        Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && (t.paused = !1,
        t.autoPlay())
    }
    ,
    e.prototype.initADA = function() {
        var e = this
          , t = Math.ceil(e.slideCount / e.options.slidesToShow)
          , o = e.getNavigableIndexes().filter(function(i) {
            return i >= 0 && i < e.slideCount
        });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }),
        null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }),
            -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }),
        e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }),
            i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
            e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }
    ,
    e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide),
        i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide),
        !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler),
        i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }
    ,
    e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
        i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(),
        i.$nextArrow.show()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }
    ,
    e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }
    ,
    e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this)
                  , t = i(this).attr("data-lazy")
                  , o = i(this).attr("data-srcset")
                  , s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes")
                  , r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o),
                        s && e.attr("sizes", s)),
                        e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }),
                        n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }
                ,
                r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                    n.$slider.trigger("lazyLoadError", [n, e, t])
                }
                ,
                r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)),
        s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide,
        s = Math.ceil(o + n.options.slidesToShow),
        !0 === n.options.fade && (o > 0 && o--,
        s <= n.slideCount && s++)),
        t = n.$slider.find(".slick-slide").slice(o, s),
        "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++)
                r < 0 && (r = n.slideCount - 1),
                t = (t = t.add(d.eq(r))).add(d.eq(l)),
                r--,
                l++;
        e(t),
        n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }
    ,
    e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(),
        i.$slideTrack.css({
            opacity: 1
        }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(),
        i.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(),
        i.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(),
        i.options.autoplay = !0,
        i.paused = !1,
        i.focussed = !1,
        i.interrupted = !1
    }
    ,
    e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]),
        t.animating = !1,
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        t.swipeLeft = null,
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility && (t.initADA(),
        t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }
    ,
    e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this, d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(),
        o = t.attr("data-lazy"),
        s = t.attr("data-srcset"),
        n = t.attr("data-sizes") || l.$slider.attr("data-sizes"),
        (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s),
            n && t.attr("sizes", n)),
            t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
            !0 === l.options.adaptiveHeight && l.setPosition(),
            l.$slider.trigger("lazyLoaded", [l, t, o]),
            l.progressiveLazyLoad()
        }
        ,
        r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
            l.$slider.trigger("lazyLoadError", [l, t, o]),
            l.progressiveLazyLoad())
        }
        ,
        r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }
    ,
    e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow,
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        t = s.currentSlide,
        s.destroy(!0),
        i.extend(s, s.initials, {
            currentSlide: t
        }),
        s.init(),
        e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }
    ,
    e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this, n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1,
                n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0; )
                        s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1),
                        o--;
                    s.breakpoints.push(t),
                    s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        e.paused = !e.options.autoplay,
        e.autoPlay(),
        e.$slider.trigger("reInit", [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i,
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
            return !1;
        o.unload(),
        !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slidesCache = o.$slides,
        o.reinit()
    }
    ,
    e.prototype.setCSS = function(i) {
        var e, t, o = this, s = {};
        !0 === o.options.rtl && (i = -i),
        e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px",
        s[o.positionProp] = i,
        !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {},
        !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")",
        o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)",
        o.$slideTrack.css(s)))
    }
    ,
    e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
        !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })),
        i.listWidth = i.$list.width(),
        i.listHeight = i.$list.height(),
        !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow),
        i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth),
        i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1,
            !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }),
        t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this, l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0],
        l = arguments[1],
        n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0],
        s = arguments[1],
        l = arguments[2],
        "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
            r.options[o] = s;
        else if ("multiple" === n)
            i.each(o, function(i, e) {
                r.options[i] = e
            });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive))
                    r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0; )
                        r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1),
                        e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(),
        r.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger("setPosition", [i])
    }
    ,
    e.prototype.setProps = function() {
        var i = this
          , e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left",
        "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
        void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0),
        i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex),
        void 0 !== e.OTransform && (i.animType = "OTransform",
        i.transformType = "-o-transform",
        i.transitionType = "OTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform && (i.animType = "MozTransform",
        i.transformType = "-moz-transform",
        i.transitionType = "MozTransition",
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform && (i.animType = "webkitTransform",
        i.transformType = "-webkit-transform",
        i.transitionType = "webkitTransition",
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform && (i.animType = "msTransform",
        i.transformType = "-ms-transform",
        i.transitionType = "msTransition",
        void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform",
        i.transformType = "transform",
        i.transitionType = "transition"),
        i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }
    ,
    e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2),
            !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i,
            t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")),
            0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
            n.$slides.eq(i).addClass("slick-center")
        } else
            i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow,
            o = !0 === n.options.infinite ? n.options.slidesToShow + i : i,
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && (t = null,
        s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow,
            e = s.slideCount; e > s.slideCount - o; e -= 1)
                t = e - 1,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1)
                t = e,
                i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }
    ,
    e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(),
        e.interrupted = i
    }
    ,
    e.prototype.selectHandler = function(e) {
        var t = this
          , o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide")
          , s = parseInt(o.attr("data-slick-index"));
        s || (s = 0),
        t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }
    ,
    e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null, a = this;
        if (e = e || !1,
        !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i),
            o = i,
            d = a.getLeft(o),
            r = a.getLeft(a.currentSlide),
            a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft,
            !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll))
                !1 === a.options.fade && (o = a.currentSlide,
                !0 !== t ? a.animateSlide(r, function() {
                    a.postSlide(o)
                }) : a.postSlide(o));
            else {
                if (a.options.autoplay && clearInterval(a.autoPlayTimer),
                s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o,
                a.animating = !0,
                a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
                n = a.currentSlide,
                a.currentSlide = s,
                a.setSlideClasses(a.currentSlide),
                a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide),
                a.updateDots(),
                a.updateArrows(),
                !0 === a.options.fade)
                    return !0 !== t ? (a.fadeSlideOut(n),
                    a.fadeSlide(s, function() {
                        a.postSlide(s)
                    })) : a.postSlide(s),
                    void a.animateHeight();
                !0 !== t ? a.animateSlide(d, function() {
                    a.postSlide(s)
                }) : a.postSlide(s)
            }
    }
    ,
    e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(),
        i.$nextArrow.hide()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass("slick-loading")
    }
    ,
    e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX,
        e = s.touchObject.startY - s.touchObject.curY,
        t = Math.atan2(e, i),
        (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }
    ,
    e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1,
        o.swiping = !1,
        o.scrolling)
            return o.scrolling = !1,
            !1;
        if (o.interrupted = !1,
        o.shouldClick = !(o.touchObject.swipeLength > 10),
        void 0 === o.touchObject.curX)
            return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
            case "left":
            case "down":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(),
                o.currentDirection = 0;
                break;
            case "right":
            case "up":
                e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(),
                o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e),
            o.touchObject = {},
            o.$slider.trigger("swipe", [o, t]))
        } else
            o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide),
            o.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend"in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse")))
            switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
            }
    }
    ,
    e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null,
        !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide),
        l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX,
        l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY,
        l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))),
        r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))),
        !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0,
        !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
        t = l.swipeDirection(),
        void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0,
        i.preventDefault()),
        s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1),
        !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
        o = l.touchObject.swipeLength,
        l.touchObject.edgeHit = !1,
        !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction,
        l.touchObject.edgeHit = !0),
        !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s,
        !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
        !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null,
        !1) : void l.setCSS(l.swipeLeft))))
    }
    ,
    e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0,
        1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow)
            return t.touchObject = {},
            !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
        t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX,
        t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY,
        t.dragging = !0
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }
    ,
    e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
        0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
        i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }
    ,
    e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }
    ,
    e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }
    ,
    i.fn.slick = function() {
        var i, t, o = this, s = arguments[0], n = Array.prototype.slice.call(arguments, 1), r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i],s) : t = o[i].slick[s].apply(o[i].slick, n),
            void 0 !== t)
                return t;
        return o
    }
});

$(document).ready(function() {

    new WOW().init();
    //wow js initializaiton

    $("ul.nav-pills a").click(function(e) {
        e.preventDefault();
        $(this).tab('show');
    });

    // ++++++++++++++++++++Header and Footer js++++++++++++++++++++++++++++++++
    $(".brandmenu .menu-leaf").on("mouseenter", function() {
        if ($(window).width() > 976) {
            $(this).children("ul").css("display", "block");
            $(this).siblings().children("ul").css("display", "none");
        }
    });

    $(".brandmenu .menu-leaf").on("mouseleave", function() {
        $(this).children("ul").css("display", "none");
        $(this).siblings().children("ul").css("display", "none");
    });

    $("header .dropdown-menu").hover(function() {
        $(this).parent().addClass("hover");
    }, function() {
        $(this).parent().removeClass("hover");
    });

    $(".brandmenu-btn").click(function(e) {
        $(".brandmenu").toggleClass('show-on-mobile');
        $("header").toggleClass('header-noshadow');
        $("body").toggleClass("overflow_hide");
        $("#cu-overlay").toggleClass("overlay-visible");
        e.preventDefault();

    });

    $("#cu-overlay").click(function() {
        $("body").removeClass("overflow_hide");
        $(".brandmenu").removeClass("show-on-mobile");
        $(this).removeClass("overlay-visible");

    });

    $(".brandmenu .menu-leaf").click(function() {
        if ($(window).width() <= 976) {

            $(this).children("ul").toggleClass("childrenshow");

            $(this).find('a').toggleClass("menuminus");
            $(this).siblings().find('a').removeClass("menuminus");

            $(this).siblings().children("ul").removeClass("childrenshow");
            $(".tab_menu .nav-tabs .nav-item").removeClass("highlight");
        } else {
            ("#cu-overlay").removeClass("overlay-visible");
        }

    });

    const menuBtn = document.querySelector('.brandmenu-btn');
    let menuOpen = false;
    menuBtn.addEventListener('click', ()=>{
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
    }
    );

    //active for menu
    $(function() {
        $('ul.brandmenu li a').filter(function() {
            return this.href == location.href
        }).parent().addClass('highlight').siblings().removeClass('highlight')
        $('ul.brandmenu li a').click(function() {
            $(this).parent().addClass('highlight').siblings().removeClass('highlight')
        })
        $('ul.brandmenu li.menu-leaf ul li.highlight a').parents().each(function() {
            if ($(this).is('li.menu-leaf')) {
                $(this).addClass("highlight");
            }
        });
    });

    $(".more-links").click(function() {
        $(".more-links").toggleClass("open")
    });

    //Footer Script

    if ($(window).width() < 767) {
        $('.shfooter .title').click(function(e) {
            e.stopPropagation();
            if ($(this).next('ul.list-unstyled').hasClass('show')) {

                $(this).next('ul.list-unstyled').removeClass('show');
                $(this).removeClass('f-title');
            } else {
                $('ul.list-unstyled').removeClass('show');
                $('.shfooter .title').removeClass('f-title');
                $(this).next('ul.list-unstyled').addClass('show');
                $(this).addClass('f-title');
            }
        });
    }

    if (screen.width < 980) {
        $(".option-heading").click(function() {
            $(".option-content").slideUp(500);
            $(".arrow-up").addClass('is-hidden');
            $(".arrow-down").removeClass('is-hidden');
            $(this).next(".option-content").stop().slideToggle(500);
            $(this).find(".arrow-up, .arrow-down").toggle();
        });
    }
    //lazy loading code
    $(".lazyloadimg").removeAttr("src");
    const targets = document.querySelectorAll('.lazyloadimg');

    const lazyLoad = target=>{
        const io = new IntersectionObserver((entries,observer)=>{
            //console.log(entries)
            entries.forEach(entry=>{

                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-lazy');

                    img.setAttribute('src', src);
                    img.classList.add('fade');

                    observer.disconnect();
                }
            }
            );
        }
        );

        io.observe(target)
    }
    ;

    targets.forEach(lazyLoad);

    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        $(".lazyloadimg").attr("src");
    }
    //lazy loading code

    // back to top Code
    var backtopbtn = $('#backtopbtn');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            backtopbtn.addClass('show');
        } else {
            backtopbtn.removeClass('show');
        }
    });

    backtopbtn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
    // back to top Code

    // ++++++++++++++++++++Header and Footer js++++++++++++++++++++++++++++++++

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const tabactive = urlParams.get('tabactive');

    if (tabactive != "") {
        if (document.getElementById(tabactive) !== null) {
            $(`[href="#${tabactive}"]`).tab('show');
        }
    }

    // View Faculty JS
    $(".view_faculty .responsivetabs li").click(function() {
        $(".view_faculty .responsivetabs li.active").removeClass("active");
        $(this).addClass("active");
    });

});
//Document ready End

//variables declarations

//functions

// Main Scripts

$(document).ready(function() {
    var tabactive = "";
    var url_string = window.location.href;
    var url = new URL(url_string);
    tabactive = url.searchParams.get("tabactive");

    function activaTab(tab) {
        $('.customtab_links .nav-pills a[href="#' + tab + '"]').tab('show');
    }
    ;
    activaTab(tabactive);

    if ($(window).innerWidth() >= 600) {
        $(".hfgridcol_clicker").click(function() {
            let data_facilities = $(this).attr("data-facilites");
            data_facilities = "#" + data_facilities;

            $('html,body').animate({
                scrollTop: $(data_facilities).offset().top
            }, 'slow');
        });
    } else {
        $(".hfgridcol_inner").click(function() {
            $(this).closest(".hfgridcol").toggleClass("opened");
            $(this).closest(".hfgridcol").find("p").slideToggle("opened");
        });
    }

    $('.nav-link').on('click', function(e) {
        if ($(window).width() < 1024) {
            var myScrollPos = $('a.nav-link.active').offset().left + $('a.nav-link.active').outerWidth(true) / 2 + $('.customtab_links .nav-pills').scrollLeft() - $('.customtab_links .nav-pills').width() / 2;
            $('.customtab_links .nav-pills').scrollLeft(myScrollPos);
        }
    });

    $(".simpletab_content_wrapper .accordion-head").click(function() {
        $(this).next().slideToggle(500).parent().siblings('.tab-pane').find(".customtab_content").slideUp(500);
        $(this).parent().toggleClass("active").siblings('.tab-pane').removeClass("active");
        return false;
    });

    $("#treedig-zoom").click(function() {
        $(this).closest(".tree-dig-container").find(".tree-dig-pop").addClass('active');
    });

    $("#treedig-zoomout").click(function() {
        $(this).closest(".tree-dig-container").find(".tree-dig-pop").removeClass('active');
    });

    $("#treedig-plus").click(function() {
        $(this).closest(".tree-dig-container").find(".tree-dig").addClass('img-plus');
    });

    $("#treedig-minus").click(function() {
        $(this).closest(".tree-dig-container").find(".tree-dig").removeClass('img-plus');
    });
});
