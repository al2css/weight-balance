function updateGradient() {
    var a = colors[colorIndices[0]],
        b = colors[colorIndices[1]],
        c = colors[colorIndices[2]],
        d = colors[colorIndices[3]],
        e = 1 - step,
        f = Math.round(e * a[0] + step * b[0]),
        g = Math.round(e * a[1] + step * b[1]),
        h = Math.round(e * a[2] + step * b[2]),
        i = "#" + (f << 16 | g << 8 | h).toString(16),
        j = Math.round(e * c[0] + step * d[0]),
        k = Math.round(e * c[1] + step * d[1]),
        l = Math.round(e * c[2] + step * d[2]),
        m = "#" + (j << 16 | k << 8 | l).toString(16);
    $gradientContainer.css({
        background: "-webkit-gradient(linear, left top, right top, from(" + i + "), to(" + m + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + i + " 0%, " + m + " 100%)"
    }), step += gradientSpeed, step >= 1 && (step %= 1, colorIndices[0] = colorIndices[1], colorIndices[2] = colorIndices[3], colorIndices[1] = (colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length, colorIndices[3] = (colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length)
}
var colors = new Array([62, 35, 255], [60, 255, 60], [255, 35, 98], [45, 175, 230], [255, 0, 255], [255, 128, 0]),
    step = 0,
    colorIndices = [0, 1, 2, 3],
    gradientSpeed = .001,
    $gradientContainer = $("#px-open-header");
setInterval(updateGradient, 100);
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict", _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(a) {
            var b, c, d, e = _gsScope.GreenSockGlobals || _gsScope,
                f = e.com.greensock,
                g = 2 * Math.PI,
                h = Math.PI / 2,
                i = f._class,
                j = function(b, c) {
                    var d = i("easing." + b, function() {}, !0),
                        e = d.prototype = new a;
                    return e.constructor = d, e.getRatio = c, d
                },
                k = a.register || function() {},
                l = function(a, b, c, d) {
                    var e = i("easing." + a, {
                        easeOut: new b,
                        easeIn: new c,
                        easeInOut: new d
                    }, !0);
                    return k(e, a), e
                },
                m = function(a, b, c) {
                    this.t = a, this.v = b, c && (this.next = c, c.prev = this, this.c = c.v - b, this.gap = c.t - a)
                },
                n = function(b, c) {
                    var d = i("easing." + b, function(a) {
                            this._p1 = a || 0 === a ? a : 1.70158, this._p2 = 1.525 * this._p1
                        }, !0),
                        e = d.prototype = new a;
                    return e.constructor = d, e.getRatio = c, e.config = function(a) {
                        return new d(a)
                    }, d
                },
                o = l("Back", n("BackOut", function(a) {
                    return (a -= 1) * a * ((this._p1 + 1) * a + this._p1) + 1
                }), n("BackIn", function(a) {
                    return a * a * ((this._p1 + 1) * a - this._p1)
                }), n("BackInOut", function(a) {
                    return 1 > (a *= 2) ? .5 * a * a * ((this._p2 + 1) * a - this._p2) : .5 * ((a -= 2) * a * ((this._p2 + 1) * a + this._p2) + 2)
                })),
                p = i("easing.SlowMo", function(a, b, c) {
                    b = b || 0 === b ? b : .7, null == a ? a = .7 : a > 1 && (a = 1), this._p = 1 !== a ? b : 0, this._p1 = (1 - a) / 2, this._p2 = a, this._p3 = this._p1 + this._p2, this._calcEnd = c === !0
                }, !0),
                q = p.prototype = new a;
            return q.constructor = p, q.getRatio = function(a) {
                var b = a + (.5 - a) * this._p;
                return this._p1 > a ? this._calcEnd ? 1 - (a = 1 - a / this._p1) * a : b - (a = 1 - a / this._p1) * a * a * a * b : a > this._p3 ? this._calcEnd ? 1 - (a = (a - this._p3) / this._p1) * a : b + (a - b) * (a = (a - this._p3) / this._p1) * a * a * a : this._calcEnd ? 1 : b
            }, p.ease = new p(.7, .7), q.config = p.config = function(a, b, c) {
                return new p(a, b, c)
            }, b = i("easing.SteppedEase", function(a) {
                a = a || 1, this._p1 = 1 / a, this._p2 = a + 1
            }, !0), q = b.prototype = new a, q.constructor = b, q.getRatio = function(a) {
                return 0 > a ? a = 0 : a >= 1 && (a = .999999999), (this._p2 * a >> 0) * this._p1
            }, q.config = b.config = function(a) {
                return new b(a)
            }, c = i("easing.RoughEase", function(b) {
                b = b || {};
                for (var c, d, e, f, g, h, i = b.taper || "none", j = [], k = 0, l = 0 | (b.points || 20), n = l, o = b.randomize !== !1, p = b.clamp === !0, q = b.template instanceof a ? b.template : null, r = "number" == typeof b.strength ? .4 * b.strength : .4; --n > -1;) c = o ? Math.random() : 1 / l * n, d = q ? q.getRatio(c) : c, "none" === i ? e = r : "out" === i ? (f = 1 - c, e = f * f * r) : "in" === i ? e = c * c * r : .5 > c ? (f = 2 * c, e = .5 * f * f * r) : (f = 2 * (1 - c), e = .5 * f * f * r), o ? d += Math.random() * e - .5 * e : n % 2 ? d += .5 * e : d -= .5 * e, p && (d > 1 ? d = 1 : 0 > d && (d = 0)), j[k++] = {
                    x: c,
                    y: d
                };
                for (j.sort(function(a, b) {
                        return a.x - b.x
                    }), h = new m(1, 1, null), n = l; --n > -1;) g = j[n], h = new m(g.x, g.y, h);
                this._prev = new m(0, 0, 0 !== h.t ? h : h.next)
            }, !0), q = c.prototype = new a, q.constructor = c, q.getRatio = function(a) {
                var b = this._prev;
                if (a > b.t) {
                    for (; b.next && a >= b.t;) b = b.next;
                    b = b.prev
                } else
                    for (; b.prev && b.t >= a;) b = b.prev;
                return this._prev = b, b.v + (a - b.t) / b.gap * b.c
            }, q.config = function(a) {
                return new c(a)
            }, c.ease = new c, l("Bounce", j("BounceOut", function(a) {
                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            }), j("BounceIn", function(a) {
                return 1 / 2.75 > (a = 1 - a) ? 1 - 7.5625 * a * a : 2 / 2.75 > a ? 1 - (7.5625 * (a -= 1.5 / 2.75) * a + .75) : 2.5 / 2.75 > a ? 1 - (7.5625 * (a -= 2.25 / 2.75) * a + .9375) : 1 - (7.5625 * (a -= 2.625 / 2.75) * a + .984375)
            }), j("BounceInOut", function(a) {
                var b = .5 > a;
                return a = b ? 1 - 2 * a : 2 * a - 1, a = 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375, b ? .5 * (1 - a) : .5 * a + .5
            })), l("Circ", j("CircOut", function(a) {
                return Math.sqrt(1 - (a -= 1) * a)
            }), j("CircIn", function(a) {
                return -(Math.sqrt(1 - a * a) - 1)
            }), j("CircInOut", function(a) {
                return 1 > (a *= 2) ? -0.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            })), d = function(b, c, d) {
                var e = i("easing." + b, function(a, b) {
                        this._p1 = a || 1, this._p2 = b || d, this._p3 = this._p2 / g * (Math.asin(1 / this._p1) || 0)
                    }, !0),
                    f = e.prototype = new a;
                return f.constructor = e, f.getRatio = c, f.config = function(a, b) {
                    return new e(a, b)
                }, e
            }, l("Elastic", d("ElasticOut", function(a) {
                return this._p1 * Math.pow(2, -10 * a) * Math.sin((a - this._p3) * g / this._p2) + 1
            }, .3), d("ElasticIn", function(a) {
                return -(this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2))
            }, .3), d("ElasticInOut", function(a) {
                return 1 > (a *= 2) ? -0.5 * this._p1 * Math.pow(2, 10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (a -= 1)) * Math.sin((a - this._p3) * g / this._p2) + 1
            }, .45)), l("Expo", j("ExpoOut", function(a) {
                return 1 - Math.pow(2, -10 * a)
            }), j("ExpoIn", function(a) {
                return Math.pow(2, 10 * (a - 1)) - .001
            }), j("ExpoInOut", function(a) {
                return 1 > (a *= 2) ? .5 * Math.pow(2, 10 * (a - 1)) : .5 * (2 - Math.pow(2, -10 * (a - 1)))
            })), l("Sine", j("SineOut", function(a) {
                return Math.sin(a * h)
            }), j("SineIn", function(a) {
                return -Math.cos(a * h) + 1
            }), j("SineInOut", function(a) {
                return -0.5 * (Math.cos(Math.PI * a) - 1)
            })), i("easing.EaseLookup", {
                find: function(b) {
                    return a.map[b]
                }
            }, !0), k(e.SlowMo, "SlowMo", "ease,"), k(c, "RoughEase", "ease,"), k(b, "SteppedEase", "ease,"), o
        }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function() {
        var a = 0,
            b = ["ms", "moz", "webkit", "o"];
        for (var c = 0; c < b.length && !window.requestAnimationFrame; ++c) window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(b, c) {
            var d = (new Date).getTime(),
                e = Math.max(0, 16 - (d - a)),
                f = window.setTimeout(function() {
                    b(d + e)
                }, e);
            return a = d + e, f
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        })
    }(),
    function(a, b) {
        "use strict";
        var c = a.GreenSockGlobals = a.GreenSockGlobals || a;
        if (!c.TweenLite) {
            var d, e, f, g, h, i = function(a) {
                    var b, d = a.split("."),
                        e = c;
                    for (b = 0; d.length > b; b++) e[d[b]] = e = e[d[b]] || {};
                    return e
                },
                j = i("com.greensock"),
                k = 1e-10,
                l = function(a) {
                    var b, c = [],
                        d = a.length;
                    for (b = 0; b !== d; c.push(a[b++]));
                    return c
                },
                m = function() {},
                n = function() {
                    var a = Object.prototype.toString,
                        b = a.call([]);
                    return function(c) {
                        return null != c && (c instanceof Array || "object" == typeof c && !!c.push && a.call(c) === b)
                    }
                }(),
                o = {},
                p = function(d, e, f, g) {
                    this.sc = o[d] ? o[d].sc : [], o[d] = this, this.gsClass = null, this.func = f;
                    var h = [];
                    this.check = function(j) {
                        for (var k, l, m, n, q = e.length, r = q; --q > -1;)(k = o[e[q]] || new p(e[q], [])).gsClass ? (h[q] = k.gsClass, r--) : j && k.sc.push(this);
                        if (0 === r && f)
                            for (l = ("com.greensock." + d).split("."), m = l.pop(), n = i(l.join("."))[m] = this.gsClass = f.apply(f, h), g && (c[m] = n, "function" == typeof define && define.amd ? define((a.GreenSockAMDPath ? a.GreenSockAMDPath + "/" : "") + d.split(".").pop(), [], function() {
                                    return n
                                }) : d === b && "undefined" != typeof module && module.exports && (module.exports = n)), q = 0; this.sc.length > q; q++) this.sc[q].check()
                    }, this.check(!0)
                },
                q = a._gsDefine = function(a, b, c, d) {
                    return new p(a, b, c, d)
                },
                r = j._class = function(a, b, c) {
                    return b = b || function() {}, q(a, [], function() {
                        return b
                    }, c), b
                };
            q.globals = c;
            var s = [0, 0, 1, 1],
                t = [],
                u = r("easing.Ease", function(a, b, c, d) {
                    this._func = a, this._type = c || 0, this._power = d || 0, this._params = b ? s.concat(b) : s
                }, !0),
                v = u.map = {},
                w = u.register = function(a, b, c, d) {
                    for (var e, f, g, h, i = b.split(","), k = i.length, l = (c || "easeIn,easeOut,easeInOut").split(","); --k > -1;)
                        for (f = i[k], e = d ? r("easing." + f, null, !0) : j.easing[f] || {}, g = l.length; --g > -1;) h = l[g], v[f + "." + h] = v[h + f] = e[h] = a.getRatio ? a : a[h] || new a
                };
            for (f = u.prototype, f._calcEnd = !1, f.getRatio = function(a) {
                    if (this._func) return this._params[0] = a, this._func.apply(null, this._params);
                    var b = this._type,
                        c = this._power,
                        d = 1 === b ? 1 - a : 2 === b ? a : .5 > a ? 2 * a : 2 * (1 - a);
                    return 1 === c ? d *= d : 2 === c ? d *= d * d : 3 === c ? d *= d * d * d : 4 === c && (d *= d * d * d * d), 1 === b ? 1 - d : 2 === b ? d : .5 > a ? d / 2 : 1 - d / 2
                }, d = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], e = d.length; --e > -1;) f = d[e] + ",Power" + e, w(new u(null, null, 1, e), f, "easeOut", !0), w(new u(null, null, 2, e), f, "easeIn" + (0 === e ? ",easeNone" : "")), w(new u(null, null, 3, e), f, "easeInOut");
            v.linear = j.easing.Linear.easeIn, v.swing = j.easing.Quad.easeInOut;
            var x = r("events.EventDispatcher", function(a) {
                this._listeners = {}, this._eventTarget = a || this
            });
            f = x.prototype, f.addEventListener = function(a, b, c, d, e) {
                e = e || 0;
                var f, i, j = this._listeners[a],
                    k = 0;
                for (null == j && (this._listeners[a] = j = []), i = j.length; --i > -1;) f = j[i], f.c === b && f.s === c ? j.splice(i, 1) : 0 === k && e > f.pr && (k = i + 1);
                j.splice(k, 0, {
                    c: b,
                    s: c,
                    up: d,
                    pr: e
                }), this !== g || h || g.wake()
            }, f.removeEventListener = function(a, b) {
                var c, d = this._listeners[a];
                if (d)
                    for (c = d.length; --c > -1;)
                        if (d[c].c === b) return d.splice(c, 1), void 0
            }, f.dispatchEvent = function(a) {
                var b, c, d, e = this._listeners[a];
                if (e)
                    for (b = e.length, c = this._eventTarget; --b > -1;) d = e[b], d.up ? d.c.call(d.s || c, {
                        type: a,
                        target: c
                    }) : d.c.call(d.s || c)
            };
            var y = a.requestAnimationFrame,
                z = a.cancelAnimationFrame,
                A = Date.now || function() {
                    return (new Date).getTime()
                },
                B = A();
            for (d = ["ms", "moz", "webkit", "o"], e = d.length; --e > -1 && !y;) y = a[d[e] + "RequestAnimationFrame"], z = a[d[e] + "CancelAnimationFrame"] || a[d[e] + "CancelRequestAnimationFrame"];
            r("Ticker", function(a, b) {
                var c, d, e, f, i, j = this,
                    l = A(),
                    n = b !== !1 && y,
                    o = 500,
                    p = 33,
                    q = function(a) {
                        var b, g, h = A() - B;
                        h > o && (l += h - p), B += h, j.time = (B - l) / 1e3, b = j.time - i, (!c || b > 0 || a === !0) && (j.frame++, i += b + (b >= f ? .004 : f - b), g = !0), a !== !0 && (e = d(q)), g && j.dispatchEvent("tick")
                    };
                x.call(j), j.time = j.frame = 0, j.tick = function() {
                    q(!0)
                }, j.lagSmoothing = function(a, b) {
                    o = a || 1 / k, p = Math.min(b, o, 0)
                }, j.sleep = function() {
                    null != e && (n && z ? z(e) : clearTimeout(e), d = m, e = null, j === g && (h = !1))
                }, j.wake = function() {
                    null !== e ? j.sleep() : j.frame > 10 && (B = A() - o + 5), d = 0 === c ? m : n && y ? y : function(a) {
                        return setTimeout(a, 0 | 1e3 * (i - j.time) + 1)
                    }, j === g && (h = !0), q(2)
                }, j.fps = function(a) {
                    return arguments.length ? (c = a, f = 1 / (c || 60), i = this.time + f, j.wake(), void 0) : c
                }, j.useRAF = function(a) {
                    return arguments.length ? (j.sleep(), n = a, j.fps(c), void 0) : n
                }, j.fps(a), setTimeout(function() {
                    n && (!e || 5 > j.frame) && j.useRAF(!1)
                }, 1500)
            }), f = j.Ticker.prototype = new j.events.EventDispatcher, f.constructor = j.Ticker;
            var C = r("core.Animation", function(a, b) {
                if (this.vars = b = b || {}, this._duration = this._totalDuration = a || 0, this._delay = Number(b.delay) || 0, this._timeScale = 1, this._active = b.immediateRender === !0, this.data = b.data, this._reversed = b.reversed === !0, R) {
                    h || g.wake();
                    var c = this.vars.useFrames ? Q : R;
                    c.add(this, c._time), this.vars.paused && this.paused(!0)
                }
            });
            g = C.ticker = new j.Ticker, f = C.prototype, f._dirty = f._gc = f._initted = f._paused = !1, f._totalTime = f._time = 0, f._rawPrevTime = -1, f._next = f._last = f._onUpdate = f._timeline = f.timeline = null, f._paused = !1;
            var D = function() {
                h && A() - B > 2e3 && g.wake(), setTimeout(D, 2e3)
            };
            D(), f.play = function(a, b) {
                return null != a && this.seek(a, b), this.reversed(!1).paused(!1)
            }, f.pause = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!0)
            }, f.resume = function(a, b) {
                return null != a && this.seek(a, b), this.paused(!1)
            }, f.seek = function(a, b) {
                return this.totalTime(Number(a), b !== !1)
            }, f.restart = function(a, b) {
                return this.reversed(!1).paused(!1).totalTime(a ? -this._delay : 0, b !== !1, !0)
            }, f.reverse = function(a, b) {
                return null != a && this.seek(a || this.totalDuration(), b), this.reversed(!0).paused(!1)
            }, f.render = function() {}, f.invalidate = function() {
                return this
            }, f.isActive = function() {
                var a, b = this._timeline,
                    c = this._startTime;
                return !b || !this._gc && !this._paused && b.isActive() && (a = b.rawTime()) >= c && c + this.totalDuration() / this._timeScale > a
            }, f._enabled = function(a, b) {
                return h || g.wake(), this._gc = !a, this._active = this.isActive(), b !== !0 && (a && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !a && this.timeline && this._timeline._remove(this, !0)), !1
            }, f._kill = function() {
                return this._enabled(!1, !1)
            }, f.kill = function(a, b) {
                return this._kill(a, b), this
            }, f._uncache = function(a) {
                for (var b = a ? this : this.timeline; b;) b._dirty = !0, b = b.timeline;
                return this
            }, f._swapSelfInParams = function(a) {
                for (var b = a.length, c = a.concat(); --b > -1;) "{self}" === a[b] && (c[b] = this);
                return c
            }, f.eventCallback = function(a, b, c, d) {
                if ("on" === (a || "").substr(0, 2)) {
                    var e = this.vars;
                    if (1 === arguments.length) return e[a];
                    null == b ? delete e[a] : (e[a] = b, e[a + "Params"] = n(c) && -1 !== c.join("").indexOf("{self}") ? this._swapSelfInParams(c) : c, e[a + "Scope"] = d), "onUpdate" === a && (this._onUpdate = b)
                }
                return this
            }, f.delay = function(a) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + a - this._delay), this._delay = a, this) : this._delay
            }, f.duration = function(a) {
                return arguments.length ? (this._duration = this._totalDuration = a, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== a && this.totalTime(this._totalTime * (a / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, f.totalDuration = function(a) {
                return this._dirty = !1, arguments.length ? this.duration(a) : this._totalDuration
            }, f.time = function(a, b) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(a > this._duration ? this._duration : a, b)) : this._time
            }, f.totalTime = function(a, b, c) {
                if (h || g.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > a && !c && (a += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var d = this._totalDuration,
                            e = this._timeline;
                        if (a > d && !c && (a = d), this._startTime = (this._paused ? this._pauseTime : e._time) - (this._reversed ? d - a : a) / this._timeScale, e._dirty || this._uncache(!1), e._timeline)
                            for (; e._timeline;) e._timeline._time !== (e._startTime + e._totalTime) / e._timeScale && e.totalTime(e._totalTime, !0), e = e._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== a || 0 === this._duration) && (this.render(a, b, !1), I.length && S())
                }
                return this
            }, f.progress = f.totalProgress = function(a, b) {
                return arguments.length ? this.totalTime(this.duration() * a, b) : this._time / this.duration()
            }, f.startTime = function(a) {
                return arguments.length ? (a !== this._startTime && (this._startTime = a, this.timeline && this.timeline._sortChildren && this.timeline.add(this, a - this._delay)), this) : this._startTime
            }, f.timeScale = function(a) {
                if (!arguments.length) return this._timeScale;
                if (a = a || k, this._timeline && this._timeline.smoothChildTiming) {
                    var b = this._pauseTime,
                        c = b || 0 === b ? b : this._timeline.totalTime();
                    this._startTime = c - (c - this._startTime) * this._timeScale / a
                }
                return this._timeScale = a, this._uncache(!1)
            }, f.reversed = function(a) {
                return arguments.length ? (a != this._reversed && (this._reversed = a, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, f.paused = function(a) {
                if (!arguments.length) return this._paused;
                if (a != this._paused && this._timeline) {
                    h || a || g.wake();
                    var b = this._timeline,
                        c = b.rawTime(),
                        d = c - this._pauseTime;
                    !a && b.smoothChildTiming && (this._startTime += d, this._uncache(!1)), this._pauseTime = a ? c : null, this._paused = a, this._active = this.isActive(), !a && 0 !== d && this._initted && this.duration() && this.render(b.smoothChildTiming ? this._totalTime : (c - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !a && this._enabled(!0, !1), this
            };
            var E = r("core.SimpleTimeline", function(a) {
                C.call(this, 0, a), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            f = E.prototype = new C, f.constructor = E, f.kill()._gc = !1, f._first = f._last = null, f._sortChildren = !1, f.add = f.insert = function(a, b) {
                var c, d;
                if (a._startTime = Number(b || 0) + a._delay, a._paused && this !== a._timeline && (a._pauseTime = a._startTime + (this.rawTime() - a._startTime) / a._timeScale), a.timeline && a.timeline._remove(a, !0), a.timeline = a._timeline = this, a._gc && a._enabled(!0, !0), c = this._last, this._sortChildren)
                    for (d = a._startTime; c && c._startTime > d;) c = c._prev;
                return c ? (a._next = c._next, c._next = a) : (a._next = this._first, this._first = a), a._next ? a._next._prev = a : this._last = a, a._prev = c, this._timeline && this._uncache(!0), this
            }, f._remove = function(a, b) {
                return a.timeline === this && (b || a._enabled(!1, !0), a._prev ? a._prev._next = a._next : this._first === a && (this._first = a._next), a._next ? a._next._prev = a._prev : this._last === a && (this._last = a._prev), a._next = a._prev = a.timeline = null, this._timeline && this._uncache(!0)), this
            }, f.render = function(a, b, c) {
                var d, e = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = a; e;) d = e._next, (e._active || a >= e._startTime && !e._paused) && (e._reversed ? e.render((e._dirty ? e.totalDuration() : e._totalDuration) - (a - e._startTime) * e._timeScale, b, c) : e.render((a - e._startTime) * e._timeScale, b, c)), e = d
            }, f.rawTime = function() {
                return h || g.wake(), this._totalTime
            };
            var F = r("TweenLite", function(b, c, d) {
                    if (C.call(this, c, d), this.render = F.prototype.render, null == b) throw "Cannot tween a null target.";
                    this.target = b = "string" != typeof b ? b : F.selector(b) || b;
                    var e, f, g, h = b.jquery || b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType),
                        i = this.vars.overwrite;
                    if (this._overwrite = i = null == i ? P[F.defaultOverwrite] : "number" == typeof i ? i >> 0 : P[i], (h || b instanceof Array || b.push && n(b)) && "number" != typeof b[0])
                        for (this._targets = g = l(b), this._propLookup = [], this._siblings = [], e = 0; g.length > e; e++) f = g[e], f ? "string" != typeof f ? f.length && f !== a && f[0] && (f[0] === a || f[0].nodeType && f[0].style && !f.nodeType) ? (g.splice(e--, 1), this._targets = g = g.concat(l(f))) : (this._siblings[e] = T(f, this, !1), 1 === i && this._siblings[e].length > 1 && U(f, this, null, 1, this._siblings[e])) : (f = g[e--] = F.selector(f), "string" == typeof f && g.splice(e + 1, 1)) : g.splice(e--, 1);
                    else this._propLookup = {}, this._siblings = T(b, this, !1), 1 === i && this._siblings.length > 1 && U(b, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === c && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -k, this.render(-this._delay))
                }, !0),
                G = function(b) {
                    return b.length && b !== a && b[0] && (b[0] === a || b[0].nodeType && b[0].style && !b.nodeType)
                },
                H = function(a, b) {
                    var c, d = {};
                    for (c in a) O[c] || c in b && "transform" !== c && "x" !== c && "y" !== c && "width" !== c && "height" !== c && "className" !== c && "border" !== c || !(!L[c] || L[c] && L[c]._autoCSS) || (d[c] = a[c], delete a[c]);
                    a.css = d
                };
            f = F.prototype = new C, f.constructor = F, f.kill()._gc = !1, f.ratio = 0, f._firstPT = f._targets = f._overwrittenProps = f._startAt = null, f._notifyPluginsOfEnabled = f._lazy = !1, F.version = "1.13.1", F.defaultEase = f._ease = new u(null, null, 1, 1), F.defaultOverwrite = "auto", F.ticker = g, F.autoSleep = !0, F.lagSmoothing = function(a, b) {
                g.lagSmoothing(a, b)
            }, F.selector = a.$ || a.jQuery || function(b) {
                var c = a.$ || a.jQuery;
                return c ? (F.selector = c, c(b)) : "undefined" == typeof document ? b : document.querySelectorAll ? document.querySelectorAll(b) : document.getElementById("#" === b.charAt(0) ? b.substr(1) : b)
            };
            var I = [],
                J = {},
                K = F._internals = {
                    isArray: n,
                    isSelector: G,
                    lazyTweens: I
                },
                L = F._plugins = {},
                M = K.tweenLookup = {},
                N = 0,
                O = K.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1
                },
                P = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                Q = C._rootFramesTimeline = new E,
                R = C._rootTimeline = new E,
                S = K.lazyRender = function() {
                    var a = I.length;
                    for (J = {}; --a > -1;) d = I[a], d && d._lazy !== !1 && (d.render(d._lazy, !1, !0), d._lazy = !1);
                    I.length = 0
                };
            R._startTime = g.time, Q._startTime = g.frame, R._active = Q._active = !0, setTimeout(S, 1), C._updateRoot = F.render = function() {
                var a, b, c;
                if (I.length && S(), R.render((g.time - R._startTime) * R._timeScale, !1, !1), Q.render((g.frame - Q._startTime) * Q._timeScale, !1, !1), I.length && S(), !(g.frame % 120)) {
                    for (c in M) {
                        for (b = M[c].tweens, a = b.length; --a > -1;) b[a]._gc && b.splice(a, 1);
                        0 === b.length && delete M[c]
                    }
                    if (c = R._first, (!c || c._paused) && F.autoSleep && !Q._first && 1 === g._listeners.tick.length) {
                        for (; c && c._paused;) c = c._next;
                        c || g.sleep()
                    }
                }
            }, g.addEventListener("tick", C._updateRoot);
            var T = function(a, b, c) {
                    var d, e, f = a._gsTweenID;
                    if (M[f || (a._gsTweenID = f = "t" + N++)] || (M[f] = {
                            target: a,
                            tweens: []
                        }), b && (d = M[f].tweens, d[e = d.length] = b, c))
                        for (; --e > -1;) d[e] === b && d.splice(e, 1);
                    return M[f].tweens
                },
                U = function(a, b, c, d, e) {
                    var f, g, h, i;
                    if (1 === d || d >= 4) {
                        for (i = e.length, f = 0; i > f; f++)
                            if ((h = e[f]) !== b) h._gc || h._enabled(!1, !1) && (g = !0);
                            else if (5 === d) break;
                        return g
                    }
                    var j, l = b._startTime + k,
                        m = [],
                        n = 0,
                        o = 0 === b._duration;
                    for (f = e.length; --f > -1;)(h = e[f]) === b || h._gc || h._paused || (h._timeline !== b._timeline ? (j = j || V(b, 0, o), 0 === V(h, j, o) && (m[n++] = h)) : l >= h._startTime && h._startTime + h.totalDuration() / h._timeScale > l && ((o || !h._initted) && 2e-10 >= l - h._startTime || (m[n++] = h)));
                    for (f = n; --f > -1;) h = m[f], 2 === d && h._kill(c, a) && (g = !0), (2 !== d || !h._firstPT && h._initted) && h._enabled(!1, !1) && (g = !0);
                    return g
                },
                V = function(a, b, c) {
                    for (var d = a._timeline, e = d._timeScale, f = a._startTime; d._timeline;) {
                        if (f += d._startTime, e *= d._timeScale, d._paused) return -100;
                        d = d._timeline
                    }
                    return f /= e, f > b ? f - b : c && f === b || !a._initted && 2 * k > f - b ? k : (f += a.totalDuration() / a._timeScale / e) > b + k ? 0 : f - b - k
                };
            f._init = function() {
                var a, b, c, d, e, f = this.vars,
                    g = this._overwrittenProps,
                    h = this._duration,
                    i = !!f.immediateRender,
                    j = f.ease;
                if (f.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), e = {};
                    for (d in f.startAt) e[d] = f.startAt[d];
                    if (e.overwrite = !1, e.immediateRender = !0, e.lazy = i && f.lazy !== !1, e.startAt = e.delay = null, this._startAt = F.to(this.target, 0, e), i)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== h) return
                } else if (f.runBackwards && 0 !== h)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        c = {};
                        for (d in f) O[d] && "autoCSS" !== d || (c[d] = f[d]);
                        if (c.overwrite = 0, c.data = "isFromStart", c.lazy = i && f.lazy !== !1, c.immediateRender = i, this._startAt = F.to(this.target, 0, c), i) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1)
                    }
                if (this._ease = j = j ? j instanceof u ? j : "function" == typeof j ? new u(j, f.easeParams) : v[j] || F.defaultEase : F.defaultEase, f.easeParams instanceof Array && j.config && (this._ease = j.config.apply(j, f.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (a = this._targets.length; --a > -1;) this._initProps(this._targets[a], this._propLookup[a] = {}, this._siblings[a], g ? g[a] : null) && (b = !0);
                else b = this._initProps(this.target, this._propLookup, this._siblings, g);
                if (b && F._onPluginEvent("_onInitAllProps", this), g && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), f.runBackwards)
                    for (c = this._firstPT; c;) c.s += c.c, c.c = -c.c, c = c._next;
                this._onUpdate = f.onUpdate, this._initted = !0
            }, f._initProps = function(b, c, d, e) {
                var f, g, h, i, j, k;
                if (null == b) return !1;
                J[b._gsTweenID] && S(), this.vars.css || b.style && b !== a && b.nodeType && L.css && this.vars.autoCSS !== !1 && H(this.vars, b);
                for (f in this.vars) {
                    if (k = this.vars[f], O[f]) k && (k instanceof Array || k.push && n(k)) && -1 !== k.join("").indexOf("{self}") && (this.vars[f] = k = this._swapSelfInParams(k, this));
                    else if (L[f] && (i = new L[f])._onInitTween(b, this.vars[f], this)) {
                        for (this._firstPT = j = {
                                _next: this._firstPT,
                                t: i,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: f,
                                pg: !0,
                                pr: i._priority
                            }, g = i._overwriteProps.length; --g > -1;) c[i._overwriteProps[g]] = this._firstPT;
                        (i._priority || i._onInitAllProps) && (h = !0), (i._onDisable || i._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = c[f] = j = {
                        _next: this._firstPT,
                        t: b,
                        p: f,
                        f: "function" == typeof b[f],
                        n: f,
                        pg: !1,
                        pr: 0
                    }, j.s = j.f ? b[f.indexOf("set") || "function" != typeof b["get" + f.substr(3)] ? f : "get" + f.substr(3)]() : parseFloat(b[f]), j.c = "string" == typeof k && "=" === k.charAt(1) ? parseInt(k.charAt(0) + "1", 10) * Number(k.substr(2)) : Number(k) - j.s || 0;
                    j && j._next && (j._next._prev = j)
                }
                return e && this._kill(e, b) ? this._initProps(b, c, d, e) : this._overwrite > 1 && this._firstPT && d.length > 1 && U(b, this, c, this._overwrite, d) ? (this._kill(c, b), this._initProps(b, c, d, e)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (J[b._gsTweenID] = !0), h)
            }, f.render = function(a, b, c) {
                var d, e, f, g, h = this._time,
                    i = this._duration,
                    j = this._rawPrevTime;
                if (a >= i) this._totalTime = this._time = i, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (d = !0, e = "onComplete"), 0 === i && (this._initted || !this.vars.lazy || c) && (this._startTime === this._timeline._duration && (a = 0), (0 === a || 0 > j || j === k) && j !== a && (c = !0, j > k && (e = "onReverseComplete")), this._rawPrevTime = g = !b || a || j === a ? a : k);
                else if (1e-7 > a) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== h || 0 === i && j > 0 && j !== k) && (e = "onReverseComplete", d = this._reversed), 0 > a ? (this._active = !1, 0 === i && (this._initted || !this.vars.lazy || c) && (j >= 0 && (c = !0), this._rawPrevTime = g = !b || a || j === a ? a : k)) : this._initted || (c = !0);
                else if (this._totalTime = this._time = a, this._easeType) {
                    var l = a / i,
                        m = this._easeType,
                        n = this._easePower;
                    (1 === m || 3 === m && l >= .5) && (l = 1 - l), 3 === m && (l *= 2), 1 === n ? l *= l : 2 === n ? l *= l * l : 3 === n ? l *= l * l * l : 4 === n && (l *= l * l * l * l), this.ratio = 1 === m ? 1 - l : 2 === m ? l : .5 > a / i ? l / 2 : 1 - l / 2
                } else this.ratio = this._ease.getRatio(a / i);
                if (this._time !== h || c) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!c && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = h, this._rawPrevTime = j, I.push(this), this._lazy = a, void 0;
                        this._time && !d ? this.ratio = this._ease.getRatio(this._time / i) : d && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== h && a >= 0 && (this._active = !0), 0 === h && (this._startAt && (a >= 0 ? this._startAt.render(a, b, c) : e || (e = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === i) && (b || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || t))), f = this._firstPT; f;) f.f ? f.t[f.p](f.c * this.ratio + f.s) : f.t[f.p] = f.c * this.ratio + f.s, f = f._next;
                    this._onUpdate && (0 > a && this._startAt && this._startTime && this._startAt.render(a, b, c), b || (this._time !== h || d) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || t)), e && (!this._gc || c) && (0 > a && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(a, b, c), d && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !b && this.vars[e] && this.vars[e].apply(this.vars[e + "Scope"] || this, this.vars[e + "Params"] || t), 0 === i && this._rawPrevTime === k && g !== k && (this._rawPrevTime = 0))
                }
            }, f._kill = function(a, b) {
                if ("all" === a && (a = null), null != a || null != b && b !== this.target) {
                    b = "string" != typeof b ? b || this._targets || this.target : F.selector(b) || b;
                    var c, d, e, f, g, h, i, j;
                    if ((n(b) || G(b)) && "number" != typeof b[0])
                        for (c = b.length; --c > -1;) this._kill(a, b[c]) && (h = !0);
                    else {
                        if (this._targets) {
                            for (c = this._targets.length; --c > -1;)
                                if (b === this._targets[c]) {
                                    g = this._propLookup[c] || {}, this._overwrittenProps = this._overwrittenProps || [], d = this._overwrittenProps[c] = a ? this._overwrittenProps[c] || {} : "all";
                                    break
                                }
                        } else {
                            if (b !== this.target) return !1;
                            g = this._propLookup, d = this._overwrittenProps = a ? this._overwrittenProps || {} : "all"
                        }
                        if (g) {
                            i = a || g, j = a !== d && "all" !== d && a !== g && ("object" != typeof a || !a._tempKill);
                            for (e in i)(f = g[e]) && (f.pg && f.t._kill(i) && (h = !0), f.pg && 0 !== f.t._overwriteProps.length || (f._prev ? f._prev._next = f._next : f === this._firstPT && (this._firstPT = f._next), f._next && (f._next._prev = f._prev), f._next = f._prev = null), delete g[e]), j && (d[e] = 1);
                            !this._firstPT && this._initted && this._enabled(!1, !1)
                        }
                    }
                    return h
                }
                return this._lazy = !1, this._enabled(!1, !1)
            }, f.invalidate = function() {
                return this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
            }, f._enabled = function(a, b) {
                if (h || g.wake(), a && this._gc) {
                    var c, d = this._targets;
                    if (d)
                        for (c = d.length; --c > -1;) this._siblings[c] = T(d[c], this, !0);
                    else this._siblings = T(this.target, this, !0)
                }
                return C.prototype._enabled.call(this, a, b), this._notifyPluginsOfEnabled && this._firstPT ? F._onPluginEvent(a ? "_onEnable" : "_onDisable", this) : !1
            }, F.to = function(a, b, c) {
                return new F(a, b, c)
            }, F.from = function(a, b, c) {
                return c.runBackwards = !0, c.immediateRender = 0 != c.immediateRender, new F(a, b, c)
            }, F.fromTo = function(a, b, c, d) {
                return d.startAt = c, d.immediateRender = 0 != d.immediateRender && 0 != c.immediateRender, new F(a, b, d)
            }, F.delayedCall = function(a, b, c, d, e) {
                return new F(b, 0, {
                    delay: a,
                    onComplete: b,
                    onCompleteParams: c,
                    onCompleteScope: d,
                    onReverseComplete: b,
                    onReverseCompleteParams: c,
                    onReverseCompleteScope: d,
                    immediateRender: !1,
                    useFrames: e,
                    overwrite: 0
                })
            }, F.set = function(a, b) {
                return new F(a, 0, b)
            }, F.getTweensOf = function(a, b) {
                if (null == a) return [];
                a = "string" != typeof a ? a : F.selector(a) || a;
                var c, d, e, f;
                if ((n(a) || G(a)) && "number" != typeof a[0]) {
                    for (c = a.length, d = []; --c > -1;) d = d.concat(F.getTweensOf(a[c], b));
                    for (c = d.length; --c > -1;)
                        for (f = d[c], e = c; --e > -1;) f === d[e] && d.splice(c, 1)
                } else
                    for (d = T(a).concat(), c = d.length; --c > -1;)(d[c]._gc || b && !d[c].isActive()) && d.splice(c, 1);
                return d
            }, F.killTweensOf = F.killDelayedCallsTo = function(a, b, c) {
                "object" == typeof b && (c = b, b = !1);
                for (var d = F.getTweensOf(a, b), e = d.length; --e > -1;) d[e]._kill(c, a)
            };
            var W = r("plugins.TweenPlugin", function(a, b) {
                this._overwriteProps = (a || "").split(","), this._propName = this._overwriteProps[0], this._priority = b || 0, this._super = W.prototype
            }, !0);
            if (f = W.prototype, W.version = "1.10.1", W.API = 2, f._firstPT = null, f._addTween = function(a, b, c, d, e, f) {
                    var g, h;
                    return null != d && (g = "number" == typeof d || "=" !== d.charAt(1) ? Number(d) - c : parseInt(d.charAt(0) + "1", 10) * Number(d.substr(2))) ? (this._firstPT = h = {
                        _next: this._firstPT,
                        t: a,
                        p: b,
                        s: c,
                        c: g,
                        f: "function" == typeof a[b],
                        n: e || b,
                        r: f
                    }, h._next && (h._next._prev = h), h) : void 0
                }, f.setRatio = function(a) {
                    for (var b, c = this._firstPT, d = 1e-6; c;) b = c.c * a + c.s, c.r ? b = Math.round(b) : d > b && b > -d && (b = 0), c.f ? c.t[c.p](b) : c.t[c.p] = b, c = c._next
                }, f._kill = function(a) {
                    var b, c = this._overwriteProps,
                        d = this._firstPT;
                    if (null != a[this._propName]) this._overwriteProps = [];
                    else
                        for (b = c.length; --b > -1;) null != a[c[b]] && c.splice(b, 1);
                    for (; d;) null != a[d.n] && (d._next && (d._next._prev = d._prev), d._prev ? (d._prev._next = d._next, d._prev = null) : this._firstPT === d && (this._firstPT = d._next)), d = d._next;
                    return !1
                }, f._roundProps = function(a, b) {
                    for (var c = this._firstPT; c;)(a[this._propName] || null != c.n && a[c.n.split(this._propName + "_").join("")]) && (c.r = b), c = c._next
                }, F._onPluginEvent = function(a, b) {
                    var c, d, e, f, g, h = b._firstPT;
                    if ("_onInitAllProps" === a) {
                        for (; h;) {
                            for (g = h._next, d = e; d && d.pr > h.pr;) d = d._next;
                            (h._prev = d ? d._prev : f) ? h._prev._next = h: e = h, (h._next = d) ? d._prev = h : f = h, h = g
                        }
                        h = b._firstPT = e
                    }
                    for (; h;) h.pg && "function" == typeof h.t[a] && h.t[a]() && (c = !0), h = h._next;
                    return c
                }, W.activate = function(a) {
                    for (var b = a.length; --b > -1;) a[b].API === W.API && (L[(new a[b])._propName] = a[b]);
                    return !0
                }, q.plugin = function(a) {
                    if (!(a && a.propName && a.init && a.API)) throw "illegal plugin definition.";
                    var b, c = a.propName,
                        d = a.priority || 0,
                        e = a.overwriteProps,
                        f = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        g = r("plugins." + c.charAt(0).toUpperCase() + c.substr(1) + "Plugin", function() {
                            W.call(this, c, d), this._overwriteProps = e || []
                        }, a.global === !0),
                        h = g.prototype = new W(c);
                    h.constructor = g, g.API = a.API;
                    for (b in f) "function" == typeof a[b] && (h[f[b]] = a[b]);
                    return g.version = a.version, W.activate([g]), g
                }, d = a._gsQueue) {
                for (e = 0; d.length > e; e++) d[e]();
                for (f in o) o[f].func || a.console.log("GSAP encountered missing dependency: com.greensock." + f)
            }
            h = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenLite"),
    function() {
        function i() {
            a = $("body").innerWidth(), b = $("#px-open-header").css("height"), b = parseInt(b), g = {
                x: a / 2,
                y: b / 2
            }, c = document.getElementById("px-open-header"), c.style.height = b + "px", d = document.getElementById("animated-canvas"), d.width = a, d.height = b, e = d.getContext("2d"), f = [];
            for (var h = 0; h < a; h += a / 20)
                for (var i = 0; i < b; i += b / 20) {
                    var j = h + Math.random() * a / 20,
                        k = i + Math.random() * b / 20,
                        l = {
                            x: j,
                            originX: j,
                            y: k,
                            originY: k
                        };
                    f.push(l)
                }
            for (var m = 0; m < f.length; m++) {
                var n = [],
                    o = f[m];
                for (var p = 0; p < f.length; p++) {
                    var q = f[p];
                    if (o != q) {
                        var t = !1;
                        for (var u = 0; u < 5; u++) t || n[u] == undefined && (n[u] = q, t = !0);
                        for (var u = 0; u < 5; u++) t || s(o, q) < s(o, n[u]) && (n[u] = q, t = !0)
                    }
                }
                o.closest = n
            }
            for (var m in f) {
                var v = new r(f[m], 2 + Math.random() * 2, "rgba(255,255,255,0.3)");
                f[m].circle = v
            }
        }

        function j() {
            "ontouchstart" in window || window.addEventListener("mousemove", k), window.addEventListener("scroll", l), window.addEventListener("resize", m)
        }

        function k(a) {
            var b = posy = 0;
            if (a.pageX || a.pageY) b = a.pageX, posy = a.pageY;
            else if (a.clientX || a.clientY) b = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, posy = a.clientY + document.body.scrollTop + document.documentElement.scrollTop;
            g.x = b, g.y = posy
        }

        function l() {
            document.body.scrollTop > b ? h = !1 : h = !0
        }

        function m() {
            a = $("body").innerWidth(), d.width = a
        }

        function n() {
            o();
            for (var a in f) p(f[a])
        }

        function o() {
            if (h) {
                e.clearRect(0, 0, a, b);
                for (var c in f) Math.abs(s(g, f[c])) < 4e3 ? (f[c].active = .3, f[c].circle.active = .6) : Math.abs(s(g, f[c])) < 2e4 ? (f[c].active = .1, f[c].circle.active = .3) : Math.abs(s(g, f[c])) < 4e4 ? (f[c].active = .02, f[c].circle.active = .1) : (f[c].active = 0, f[c].circle
                    .active = 0), q(f[c]), f[c].circle.draw()
            }
            requestAnimationFrame(o)
        }

        function p(a) {
            TweenLite.to(a, 1 + 1 * Math.random(), {
                x: a.originX - 50 + Math.random() * 100,
                y: a.originY - 50 + Math.random() * 100,
                ease: Circ.easeInOut,
                onComplete: function() {
                    p(a)
                }
            })
        }

        function q(a) {
            if (!a.active) return;
            for (var b in a.closest) e.beginPath(), e.moveTo(a.x, a.y), e.lineTo(a.closest[b].x, a.closest[b].y), e.strokeStyle = "rgba(255,255,255," + a.active + ")", e.stroke()
        }

        function r(a, b, c) {
            var d = this;
            (function() {
                d.pos = a || null, d.radius = b || null, d.color = c || null
            })(), this.draw = function() {
                if (!d.active) return;
                e.beginPath(), e.arc(d.pos.x, d.pos.y, d.radius, 0, 2 * Math.PI, !1), e.fillStyle = "rgba(255,255,255," + d.active + ")", e.fill()
            }
        }

        function s(a, b) {
            return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)
        }
        var a, b, c, d, e, f, g, h = !0;
        i(), n(), j(), $("#px-open-header").on("mouseenter", function() {
            $(".bg-overlay").removeClass("bg-overlay-on")
        }).on("mouseleave", function() {
            $(".bg-overlay").addClass("bg-overlay-on")
        })
    }()
