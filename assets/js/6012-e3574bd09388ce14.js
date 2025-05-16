"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6012],
  {
    86028: function (t, n, e) {
      e.d(n, {
        cn: function () {
          return u;
        },
      });
      var r = e(11461),
        i = function () {
          for (var t, n, e = 0, r = ""; e < arguments.length; )
            (t = arguments[e++]) &&
              (n = (function t(n) {
                var e,
                  r,
                  i = "";
                if ("string" == typeof n || "number" == typeof n) i += n;
                else if ("object" == typeof n) {
                  if (Array.isArray(n))
                    for (e = 0; e < n.length; e++)
                      n[e] && (r = t(n[e])) && (i && (i += " "), (i += r));
                  else for (e in n) n[e] && (i && (i += " "), (i += e));
                }
                return i;
              })(t)) &&
              (r && (r += " "), (r += n));
          return r;
        },
        o = (0, e(21617).q)(r.B);
      function u(...t) {
        return o(i(t));
      }
    },
    7059: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return i;
        },
      });
      let r = {
        active: !0,
        breakpoints: {},
        delay: 4e3,
        jump: !1,
        playOnInit: !0,
        stopOnFocusIn: !0,
        stopOnInteraction: !0,
        stopOnMouseEnter: !1,
        stopOnLastSnap: !1,
        rootNode: null,
      };
      function i(t = {}) {
        let n, e, o;
        let u = !1,
          c = !0,
          a = !1,
          l = 0;
        function s() {
          if (o || !c) return;
          u || e.emit("autoplay:play");
          let { ownerWindow: t } = e.internalEngine();
          t.clearInterval(l), (l = t.setInterval(m, n.delay)), (u = !0);
        }
        function f() {
          if (o) return;
          u && e.emit("autoplay:stop");
          let { ownerWindow: t } = e.internalEngine();
          t.clearInterval(l), (l = 0), (u = !1);
        }
        function d() {
          if (p()) return (c = u), f();
          c && s();
        }
        function p() {
          let { ownerDocument: t } = e.internalEngine();
          return "hidden" === t.visibilityState;
        }
        function g(t) {
          void 0 !== t && (a = t), (c = !0), s();
        }
        function m() {
          let { index: t } = e.internalEngine(),
            r = t.clone().add(1).get(),
            i = e.scrollSnapList().length - 1;
          n.stopOnLastSnap && r === i && f(),
            e.canScrollNext() ? e.scrollNext(a) : e.scrollTo(0, a);
        }
        return {
          name: "autoplay",
          options: t,
          init: function (u, l) {
            e = u;
            let { mergeOptions: g, optionsAtMedia: m } = l,
              h = g(r, i.globalOptions);
            if (((n = m(g(h, t))), e.scrollSnapList().length <= 1)) return;
            (a = n.jump), (o = !1);
            let { eventStore: y, ownerDocument: b } = e.internalEngine(),
              v = e.rootNode(),
              E = (n.rootNode && n.rootNode(v)) || v,
              x = e.containerNode();
            e.on("pointerDown", f),
              n.stopOnInteraction || e.on("pointerUp", s),
              n.stopOnMouseEnter &&
                (y.add(E, "mouseenter", () => {
                  (c = !1), f();
                }),
                n.stopOnInteraction ||
                  y.add(E, "mouseleave", () => {
                    (c = !0), s();
                  })),
              n.stopOnFocusIn &&
                (y.add(x, "focusin", f),
                n.stopOnInteraction || y.add(x, "focusout", s)),
              y.add(b, "visibilitychange", d),
              n.playOnInit && !p() && s();
          },
          destroy: function () {
            e.off("pointerDown", f).off("pointerUp", s),
              f(),
              (o = !0),
              (u = !1);
          },
          play: g,
          stop: function () {
            u && f();
          },
          reset: function () {
            u && g();
          },
          isPlaying: function () {
            return u;
          },
        };
      }
      i.globalOptions = void 0;
    },
    95243: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return u;
        },
      });
      let r = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
      };
      function i(t, n) {
        if (!t || !n) return;
        let { classList: e } = t;
        e.contains(n) && e.remove(n);
      }
      function o(t, n) {
        if (!t || !n) return;
        let { classList: e } = t;
        e.contains(n) || e.add(n);
      }
      function u(t = {}) {
        let n, e, c, a;
        let l = ["select"],
          s = ["pointerDown", "pointerUp"],
          f = ["slidesInView"];
        function d(t, e) {
          "pointerDown" === e ? o(c, n.dragging) : i(c, n.dragging);
        }
        function p(t, n) {
          Array.from(e.containerNode().querySelectorAll(`.${n}`)).forEach((t) =>
            i(t, n),
          ),
            t.forEach((t) => o(a[t], n));
        }
        function g() {
          let { slideRegistry: t } = e.internalEngine();
          p(t[e.selectedScrollSnap()], n.snapped);
        }
        function m() {
          p(e.slidesInView(), n.inView);
        }
        return {
          name: "classNames",
          options: t,
          init: function (i, p) {
            e = i;
            let { mergeOptions: h, optionsAtMedia: y } = p,
              b = h(r, u.globalOptions);
            (n = y(h(b, t))),
              (c = e.rootNode()),
              (a = e.slideNodes()),
              e.internalEngine().options.watchDrag && o(c, n.draggable),
              n.dragging && s.forEach((t) => e.on(t, d)),
              n.snapped && (l.forEach((t) => e.on(t, g)), g()),
              n.inView && (f.forEach((t) => e.on(t, m)), m());
          },
          destroy: function () {
            i(c, n.draggable),
              s.forEach((t) => e.off(t, d)),
              l.forEach((t) => e.off(t, g)),
              f.forEach((t) => e.off(t, m)),
              a.forEach((t) => i(t, n.snapped));
          },
        };
      }
      u.globalOptions = void 0;
    },
    74300: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return I;
        },
      });
      var r = e(2265);
      function i(t) {
        return (
          "[object Object]" === Object.prototype.toString.call(t) ||
          Array.isArray(t)
        );
      }
      function o(t, n) {
        let e = Object.keys(t),
          r = Object.keys(n);
        return (
          e.length === r.length &&
          JSON.stringify(Object.keys(t.breakpoints || {})) ===
            JSON.stringify(Object.keys(n.breakpoints || {})) &&
          e.every((e) => {
            let r = t[e],
              u = n[e];
            return "function" == typeof r
              ? `${r}` == `${u}`
              : i(r) && i(u)
                ? o(r, u)
                : r === u;
          })
        );
      }
      function u(t) {
        return t
          .concat()
          .sort((t, n) => (t.name > n.name ? 1 : -1))
          .map((t) => t.options);
      }
      function c(t) {
        return "number" == typeof t;
      }
      function a(t) {
        return "string" == typeof t;
      }
      function l(t) {
        return "boolean" == typeof t;
      }
      function s(t) {
        return "[object Object]" === Object.prototype.toString.call(t);
      }
      function f(t) {
        return Math.abs(t);
      }
      function d(t) {
        return Math.sign(t);
      }
      function p(t) {
        return y(t).map(Number);
      }
      function g(t) {
        return t[m(t)];
      }
      function m(t) {
        return Math.max(0, t.length - 1);
      }
      function h(t, n = 0) {
        return Array.from(Array(t), (t, e) => n + e);
      }
      function y(t) {
        return Object.keys(t);
      }
      function b(t, n) {
        return void 0 !== n.MouseEvent && t instanceof n.MouseEvent;
      }
      function v() {
        let t = [],
          n = {
            add: function (e, r, i, o = { passive: !0 }) {
              let u;
              return (
                "addEventListener" in e
                  ? (e.addEventListener(r, i, o),
                    (u = () => e.removeEventListener(r, i, o)))
                  : (e.addListener(i), (u = () => e.removeListener(i))),
                t.push(u),
                n
              );
            },
            clear: function () {
              t = t.filter((t) => t());
            },
          };
        return n;
      }
      function E(t = 0, n = 0) {
        let e = f(t - n);
        function r(e) {
          return e < t || e > n;
        }
        return {
          length: e,
          max: n,
          min: t,
          constrain: function (e) {
            return r(e) ? (e < t ? t : n) : e;
          },
          reachedAny: r,
          reachedMax: function (t) {
            return t > n;
          },
          reachedMin: function (n) {
            return n < t;
          },
          removeOffset: function (t) {
            return e ? t - e * Math.ceil((t - n) / e) : t;
          },
        };
      }
      function x(t) {
        let n = t;
        function e(t) {
          return c(t) ? t : t.get();
        }
        return {
          get: function () {
            return n;
          },
          set: function (t) {
            n = e(t);
          },
          add: function (t) {
            n += e(t);
          },
          subtract: function (t) {
            n -= e(t);
          },
        };
      }
      function w(t, n) {
        let e =
            "x" === t.scroll
              ? function (t) {
                  return `translate3d(${t}px,0px,0px)`;
                }
              : function (t) {
                  return `translate3d(0px,${t}px,0px)`;
                },
          r = n.style,
          i = !1;
        return {
          clear: function () {
            i ||
              ((r.transform = ""),
              n.getAttribute("style") || n.removeAttribute("style"));
          },
          to: function (n) {
            i || (r.transform = e(t.direction(n)));
          },
          toggleActive: function (t) {
            i = !t;
          },
        };
      }
      let O = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
      };
      function S(t, n, e) {
        let r, i, o, u, I;
        let D = t.ownerDocument,
          k = D.defaultView,
          L = (function (t) {
            function n(t, n) {
              return (function t(n, e) {
                return [n, e].reduce(
                  (n, e) => (
                    y(e).forEach((r) => {
                      let i = n[r],
                        o = e[r],
                        u = s(i) && s(o);
                      n[r] = u ? t(i, o) : o;
                    }),
                    n
                  ),
                  {},
                );
              })(t, n || {});
            }
            return {
              mergeOptions: n,
              optionsAtMedia: function (e) {
                let r = e.breakpoints || {},
                  i = y(r)
                    .filter((n) => t.matchMedia(n).matches)
                    .map((t) => r[t])
                    .reduce((t, e) => n(t, e), {});
                return n(e, i);
              },
              optionsMediaQueries: function (n) {
                return n
                  .map((t) => y(t.breakpoints || {}))
                  .reduce((t, n) => t.concat(n), [])
                  .map(t.matchMedia);
              },
            };
          })(k),
          N =
            ((I = []),
            {
              init: function (t, n) {
                return (
                  (I = n.filter(
                    ({ options: t }) => !1 !== L.optionsAtMedia(t).active,
                  )).forEach((n) => n.init(t, L)),
                  n.reduce((t, n) => Object.assign(t, { [n.name]: n }), {})
                );
              },
              destroy: function () {
                I = I.filter((t) => t.destroy());
              },
            }),
          A = v(),
          M = (function () {
            let t,
              n = {},
              e = {
                init: function (n) {
                  t = n;
                },
                emit: function (r) {
                  return (n[r] || []).forEach((n) => n(t, r)), e;
                },
                off: function (t, r) {
                  return (n[t] = (n[t] || []).filter((t) => t !== r)), e;
                },
                on: function (t, r) {
                  return (n[t] = (n[t] || []).concat([r])), e;
                },
                clear: function () {
                  n = {};
                },
              };
            return e;
          })(),
          { mergeOptions: F, optionsAtMedia: j, optionsMediaQueries: V } = L,
          { on: P, off: T, emit: H } = M,
          z = !1,
          C = F(O, S.globalOptions),
          q = F(C),
          B = [];
        function U(n, e) {
          !z &&
            ((q = j((C = F(C, n)))),
            (B = e || B),
            (function () {
              let { container: n, slides: e } = q;
              o = (a(n) ? t.querySelector(n) : n) || t.children[0];
              let r = a(e) ? o.querySelectorAll(e) : e;
              u = [].slice.call(r || o.children);
            })(),
            (r = (function n(e) {
              let r = (function (t, n, e, r, i, o, u) {
                let s, O;
                let {
                    align: S,
                    axis: I,
                    direction: D,
                    startIndex: k,
                    loop: L,
                    duration: N,
                    dragFree: A,
                    dragThreshold: M,
                    inViewThreshold: F,
                    slidesToScroll: j,
                    skipSnaps: V,
                    containScroll: P,
                    watchResize: T,
                    watchSlides: H,
                    watchDrag: z,
                  } = o,
                  C = {
                    measure: function (t) {
                      let {
                        offsetTop: n,
                        offsetLeft: e,
                        offsetWidth: r,
                        offsetHeight: i,
                      } = t;
                      return {
                        top: n,
                        right: e + r,
                        bottom: n + i,
                        left: e,
                        width: r,
                        height: i,
                      };
                    },
                  },
                  q = C.measure(n),
                  B = e.map(C.measure),
                  U = (function (t, n) {
                    let e = "rtl" === n,
                      r = "y" === t,
                      i = !r && e ? -1 : 1;
                    return {
                      scroll: r ? "y" : "x",
                      cross: r ? "x" : "y",
                      startEdge: r ? "top" : e ? "right" : "left",
                      endEdge: r ? "bottom" : e ? "left" : "right",
                      measureSize: function (t) {
                        let { height: n, width: e } = t;
                        return r ? n : e;
                      },
                      direction: function (t) {
                        return t * i;
                      },
                    };
                  })(I, D),
                  $ = U.measureSize(q),
                  R = {
                    measure: function (t) {
                      return (t / 100) * $;
                    },
                  },
                  _ = (function (t, n) {
                    let e = {
                      start: function () {
                        return 0;
                      },
                      center: function (t) {
                        return (n - t) / 2;
                      },
                      end: function (t) {
                        return n - t;
                      },
                    };
                    return {
                      measure: function (r, i) {
                        return a(t) ? e[t](r) : t(n, r, i);
                      },
                    };
                  })(S, $),
                  Z = !L && !!P,
                  {
                    slideSizes: J,
                    slideSizesWithGaps: X,
                    startGap: Q,
                    endGap: Y,
                  } = (function (t, n, e, r, i, o) {
                    let { measureSize: u, startEdge: c, endEdge: a } = t,
                      l = e[0] && i,
                      s = (function () {
                        if (!l) return 0;
                        let t = e[0];
                        return f(n[c] - t[c]);
                      })(),
                      d = l
                        ? parseFloat(
                            o
                              .getComputedStyle(g(r))
                              .getPropertyValue(`margin-${a}`),
                          )
                        : 0,
                      p = e.map(u),
                      h = e
                        .map((t, n, e) => {
                          let r = n === m(e);
                          return n
                            ? r
                              ? p[n] + d
                              : e[n + 1][c] - t[c]
                            : p[n] + s;
                        })
                        .map(f);
                    return {
                      slideSizes: p,
                      slideSizesWithGaps: h,
                      startGap: s,
                      endGap: d,
                    };
                  })(U, q, B, e, L || !!P, i),
                  G = (function (t, n, e, r, i, o, u, a, l) {
                    let { startEdge: s, endEdge: d, direction: h } = t,
                      y = c(e);
                    return {
                      groupSlides: function (t) {
                        return y
                          ? p(t)
                              .filter((t) => t % e == 0)
                              .map((n) => t.slice(n, n + e))
                          : t.length
                            ? p(t)
                                .reduce((e, c, l) => {
                                  let p = g(e) || 0,
                                    y = c === m(t),
                                    b = i[s] - o[p][s],
                                    v = i[s] - o[c][d],
                                    E = r || 0 !== p ? 0 : h(u),
                                    x = f(v - (!r && y ? h(a) : 0) - (b + E));
                                  return (
                                    l && x > n + 2 && e.push(c),
                                    y && e.push(t.length),
                                    e
                                  );
                                }, [])
                                .map((n, e, r) => {
                                  let i = Math.max(r[e - 1] || 0);
                                  return t.slice(i, n);
                                })
                            : [];
                      },
                    };
                  })(U, $, j, L, q, B, Q, Y, 0),
                  { snaps: K, snapsAligned: W } = (function (t, n, e, r, i) {
                    let { startEdge: o, endEdge: u } = t,
                      { groupSlides: c } = i,
                      a = c(r)
                        .map((t) => g(t)[u] - t[0][o])
                        .map(f)
                        .map(n.measure),
                      l = r.map((t) => e[o] - t[o]).map((t) => -f(t)),
                      s = c(l)
                        .map((t) => t[0])
                        .map((t, n) => t + a[n]);
                    return { snaps: l, snapsAligned: s };
                  })(U, _, q, B, G),
                  tt = -g(K) + g(X),
                  { snapsContained: tn, scrollContainLimit: te } = (function (
                    t,
                    n,
                    e,
                    r,
                    i,
                  ) {
                    let o = E(-n + t, 0),
                      u = e
                        .map((t, n) => {
                          let { min: r, max: i } = o,
                            u = o.constrain(t),
                            c = n === m(e);
                          return n
                            ? c || 1 > f(r - u)
                              ? r
                              : 1 > f(i - u)
                                ? i
                                : u
                            : i;
                        })
                        .map((t) => parseFloat(t.toFixed(3))),
                      c = (function () {
                        let t = u[0],
                          n = g(u);
                        return E(u.lastIndexOf(t), u.indexOf(n) + 1);
                      })();
                    return {
                      snapsContained: (function () {
                        if (n <= t + 2) return [o.max];
                        if ("keepSnaps" === r) return u;
                        let { min: e, max: i } = c;
                        return u.slice(e, i);
                      })(),
                      scrollContainLimit: c,
                    };
                  })($, tt, W, P, 0),
                  tr = Z ? tn : W,
                  { limit: ti } = (function (t, n, e) {
                    let r = n[0];
                    return { limit: E(e ? r - t : g(n), r) };
                  })(tt, tr, L),
                  to = (function t(n, e, r) {
                    let { constrain: i } = E(0, n),
                      o = n + 1,
                      u = c(e);
                    function c(t) {
                      return r ? f((o + t) % o) : i(t);
                    }
                    function a() {
                      return t(n, u, r);
                    }
                    let l = {
                      get: function () {
                        return u;
                      },
                      set: function (t) {
                        return (u = c(t)), l;
                      },
                      add: function (t) {
                        return a().set(u + t);
                      },
                      clone: a,
                    };
                    return l;
                  })(m(tr), k, L),
                  tu = to.clone(),
                  tc = p(e),
                  ta = (
                    {
                      dragHandler: t,
                      scrollBody: n,
                      scrollBounds: e,
                      options: { loop: r },
                    },
                    i,
                  ) => {
                    r || e.constrain(t.pointerDown()), n.seek(i);
                  },
                  tl = (
                    {
                      scrollBody: t,
                      translate: n,
                      location: e,
                      offsetLocation: r,
                      scrollLooper: i,
                      slideLooper: o,
                      dragHandler: u,
                      animation: c,
                      eventHandler: a,
                      scrollBounds: l,
                      options: { loop: s },
                    },
                    f,
                  ) => {
                    let d = t.settled(),
                      p = !l.shouldConstrain(),
                      g = s ? d : d && p;
                    g && !u.pointerDown() && (c.stop(), a.emit("settle")),
                      g || a.emit("scroll");
                    let m = e.get() * f + tp.get() * (1 - f);
                    r.set(m),
                      s && (i.loop(t.direction()), o.loop()),
                      n.to(r.get());
                  },
                  ts = (function (t, n, e, r) {
                    let i = v(),
                      o = 1e3 / 60,
                      u = null,
                      c = 0,
                      a = 0;
                    function l(t) {
                      if (!a) return;
                      u || (u = t);
                      let i = t - u;
                      for (u = t, c += i; c >= o; ) e(o), (c -= o);
                      r(c / o), a && n.requestAnimationFrame(l);
                    }
                    function s() {
                      n.cancelAnimationFrame(a), (u = null), (c = 0), (a = 0);
                    }
                    return {
                      init: function () {
                        i.add(t, "visibilitychange", () => {
                          t.hidden && ((u = null), (c = 0));
                        });
                      },
                      destroy: function () {
                        s(), i.clear();
                      },
                      start: function () {
                        a || (a = n.requestAnimationFrame(l));
                      },
                      stop: s,
                      update: () => e(o),
                      render: r,
                    };
                  })(
                    r,
                    i,
                    (t) => ta(tS, t),
                    (t) => tl(tS, t),
                  ),
                  tf = tr[to.get()],
                  td = x(tf),
                  tp = x(tf),
                  tg = x(tf),
                  tm = x(tf),
                  th = (function (t, n, e, r, i, o) {
                    let u = 0,
                      c = 0,
                      a = i,
                      l = 0.68,
                      s = t.get(),
                      p = 0;
                    function g(t) {
                      return (a = t), h;
                    }
                    function m(t) {
                      return (l = t), h;
                    }
                    let h = {
                      direction: function () {
                        return c;
                      },
                      duration: function () {
                        return a;
                      },
                      velocity: function () {
                        return u;
                      },
                      seek: function (n) {
                        let i = n / 1e3,
                          o = a * i,
                          f = r.get() - t.get(),
                          g = 0;
                        return (
                          a
                            ? (e.set(t),
                              (u += f / o),
                              (u *= l),
                              (s += u),
                              t.add(u * i),
                              (g = s - p))
                            : ((u = 0), e.set(r), t.set(r), (g = f)),
                          (c = d(g)),
                          (p = s),
                          h
                        );
                      },
                      settled: function () {
                        return 0.001 > f(r.get() - n.get());
                      },
                      useBaseFriction: function () {
                        return m(0.68);
                      },
                      useBaseDuration: function () {
                        return g(i);
                      },
                      useFriction: m,
                      useDuration: g,
                    };
                    return h;
                  })(td, tg, tp, tm, N, 0),
                  ty = (function (t, n, e, r, i) {
                    let { reachedAny: o, removeOffset: u, constrain: c } = r;
                    function a(t) {
                      return t.concat().sort((t, n) => f(t) - f(n))[0];
                    }
                    function l(n, r) {
                      let i = [n, n + e, n - e];
                      if (!t) return n;
                      if (!r) return a(i);
                      let o = i.filter((t) => d(t) === r);
                      return o.length ? a(o) : g(i) - e;
                    }
                    return {
                      byDistance: function (e, r) {
                        let a = i.get() + e,
                          { index: s, distance: d } = (function (e) {
                            let r = t ? u(e) : c(e),
                              { index: i } = n
                                .map((t, n) => ({
                                  diff: l(t - r, 0),
                                  index: n,
                                }))
                                .sort((t, n) => f(t.diff) - f(n.diff))[0];
                            return { index: i, distance: r };
                          })(a),
                          p = !t && o(a);
                        if (!r || p) return { index: s, distance: e };
                        let g = e + l(n[s] - d, 0);
                        return { index: s, distance: g };
                      },
                      byIndex: function (t, e) {
                        let r = l(n[t] - i.get(), e);
                        return { index: t, distance: r };
                      },
                      shortcut: l,
                    };
                  })(L, tr, tt, ti, tm),
                  tb = (function (t, n, e, r, i, o, u) {
                    function c(i) {
                      let c = i.distance,
                        a = i.index !== n.get();
                      o.add(c),
                        c &&
                          (r.duration()
                            ? t.start()
                            : (t.update(), t.render(1), t.update())),
                        a && (e.set(n.get()), n.set(i.index), u.emit("select"));
                    }
                    return {
                      distance: function (t, n) {
                        c(i.byDistance(t, n));
                      },
                      index: function (t, e) {
                        let r = n.clone().set(t);
                        c(i.byIndex(r.get(), e));
                      },
                    };
                  })(ts, to, tu, th, ty, tm, u),
                  tv = (function (t) {
                    let { max: n, length: e } = t;
                    return {
                      get: function (t) {
                        return e ? -((t - n) / e) : 0;
                      },
                    };
                  })(ti),
                  tE = v(),
                  tx = (function (t, n, e, r) {
                    let i;
                    let o = {},
                      u = null,
                      c = null,
                      a = !1;
                    return {
                      init: function () {
                        (i = new IntersectionObserver(
                          (t) => {
                            a ||
                              (t.forEach((t) => {
                                o[n.indexOf(t.target)] = t;
                              }),
                              (u = null),
                              (c = null),
                              e.emit("slidesInView"));
                          },
                          { root: t.parentElement, threshold: r },
                        )),
                          n.forEach((t) => i.observe(t));
                      },
                      destroy: function () {
                        i && i.disconnect(), (a = !0);
                      },
                      get: function (t = !0) {
                        if (t && u) return u;
                        if (!t && c) return c;
                        let n = y(o).reduce((n, e) => {
                          let r = parseInt(e),
                            { isIntersecting: i } = o[r];
                          return ((t && i) || (!t && !i)) && n.push(r), n;
                        }, []);
                        return t && (u = n), t || (c = n), n;
                      },
                    };
                  })(n, e, u, F),
                  { slideRegistry: tw } = (function (t, n, e, r, i, o) {
                    let { groupSlides: u } = i,
                      { min: c, max: a } = r;
                    return {
                      slideRegistry: (function () {
                        let r = u(o);
                        return 1 === e.length
                          ? [o]
                          : t && "keepSnaps" !== n
                            ? r.slice(c, a).map((t, n, e) => {
                                let r = n === m(e);
                                return n
                                  ? r
                                    ? h(m(o) - g(e)[0] + 1, g(e)[0])
                                    : t
                                  : h(g(e[0]) + 1);
                              })
                            : r;
                      })(),
                    };
                  })(Z, P, tr, te, G, tc),
                  tO = (function (t, n, e, r, i, o, u) {
                    let a = 0;
                    function l(t) {
                      "Tab" === t.code && (a = new Date().getTime());
                    }
                    function s(l) {
                      o.add(
                        l,
                        "focus",
                        () => {
                          if (new Date().getTime() - a > 10) return;
                          t.scrollLeft = 0;
                          let o = n.indexOf(l),
                            s = e.findIndex((t) => t.includes(o));
                          c(s) &&
                            (i.useDuration(0),
                            r.index(s, 0),
                            u.emit("slideFocus"));
                        },
                        { passive: !0, capture: !0 },
                      );
                    }
                    return {
                      init: function () {
                        o.add(document, "keydown", l, !1), n.forEach(s);
                      },
                    };
                  })(t, e, tw, tb, th, tE, u),
                  tS = {
                    ownerDocument: r,
                    ownerWindow: i,
                    eventHandler: u,
                    containerRect: q,
                    slideRects: B,
                    animation: ts,
                    axis: U,
                    dragHandler: (function (
                      t,
                      n,
                      e,
                      r,
                      i,
                      o,
                      u,
                      c,
                      a,
                      s,
                      p,
                      g,
                      m,
                      h,
                      y,
                      x,
                      w,
                      O,
                      S,
                    ) {
                      let { cross: I, direction: D } = t,
                        k = ["INPUT", "SELECT", "TEXTAREA"],
                        L = { passive: !1 },
                        N = v(),
                        A = v(),
                        M = E(50, 225).constrain(h.measure(20)),
                        F = { mouse: 300, touch: 400 },
                        j = { mouse: 500, touch: 600 },
                        V = y ? 43 : 25,
                        P = !1,
                        T = 0,
                        H = 0,
                        z = !1,
                        C = !1,
                        q = !1,
                        B = !1;
                      function U(t) {
                        if (!b(t, r) && t.touches.length >= 2) return $(t);
                        let n = o.readPoint(t),
                          e = o.readPoint(t, I),
                          u = f(n - T),
                          a = f(e - H);
                        if (!C && !B && (!t.cancelable || !(C = u > a)))
                          return $(t);
                        let l = o.pointerMove(t);
                        u > x && (q = !0),
                          s.useFriction(0.3).useDuration(0.75),
                          c.start(),
                          i.add(D(l)),
                          t.preventDefault();
                      }
                      function $(t) {
                        let n = p.byDistance(0, !1).index !== g.get(),
                          e =
                            o.pointerUp(t) * (y ? j : F)[B ? "mouse" : "touch"],
                          r = (function (t, n) {
                            let e = g.add(-1 * d(t)),
                              r = p.byDistance(t, !y).distance;
                            return y || f(t) < M
                              ? r
                              : w && n
                                ? 0.5 * r
                                : p.byIndex(e.get(), 0).distance;
                          })(D(e), n),
                          i = (function (t, n) {
                            var e, r;
                            if (0 === t || 0 === n || f(t) <= f(n)) return 0;
                            let i = ((e = f(t)), (r = f(n)), f(e - r));
                            return f(i / t);
                          })(e, r);
                        (C = !1),
                          (z = !1),
                          A.clear(),
                          s.useDuration(V - 10 * i).useFriction(0.68 + i / 50),
                          a.distance(r, !y),
                          (B = !1),
                          m.emit("pointerUp");
                      }
                      function R(t) {
                        q &&
                          (t.stopPropagation(), t.preventDefault(), (q = !1));
                      }
                      return {
                        init: function (t) {
                          S &&
                            N.add(n, "dragstart", (t) => t.preventDefault(), L)
                              .add(n, "touchmove", () => void 0, L)
                              .add(n, "touchend", () => void 0)
                              .add(n, "touchstart", c)
                              .add(n, "mousedown", c)
                              .add(n, "touchcancel", $)
                              .add(n, "contextmenu", $)
                              .add(n, "click", R, !0);
                          function c(c) {
                            (l(S) || S(t, c)) &&
                              (function (t) {
                                let c = b(t, r);
                                (B = c),
                                  (q = y && c && !t.buttons && P),
                                  (P = f(i.get() - u.get()) >= 2),
                                  (c && 0 !== t.button) ||
                                    (function (t) {
                                      let n = t.nodeName || "";
                                      return k.includes(n);
                                    })(t.target) ||
                                    ((z = !0),
                                    o.pointerDown(t),
                                    s.useFriction(0).useDuration(0),
                                    i.set(u),
                                    (function () {
                                      let t = B ? e : n;
                                      A.add(t, "touchmove", U, L)
                                        .add(t, "touchend", $)
                                        .add(t, "mousemove", U, L)
                                        .add(t, "mouseup", $);
                                    })(),
                                    (T = o.readPoint(t)),
                                    (H = o.readPoint(t, I)),
                                    m.emit("pointerDown"));
                              })(c);
                          }
                        },
                        destroy: function () {
                          N.clear(), A.clear();
                        },
                        pointerDown: function () {
                          return z;
                        },
                      };
                    })(
                      U,
                      t,
                      r,
                      i,
                      tm,
                      (function (t, n) {
                        let e, r;
                        function i(t) {
                          return t.timeStamp;
                        }
                        function o(e, r) {
                          let i = r || t.scroll,
                            o = `client${"x" === i ? "X" : "Y"}`;
                          return (b(e, n) ? e : e.touches[0])[o];
                        }
                        return {
                          pointerDown: function (t) {
                            return (e = t), (r = t), o(t);
                          },
                          pointerMove: function (t) {
                            let n = o(t) - o(r),
                              u = i(t) - i(e) > 170;
                            return (r = t), u && (e = t), n;
                          },
                          pointerUp: function (t) {
                            if (!e || !r) return 0;
                            let n = o(r) - o(e),
                              u = i(t) - i(e),
                              c = i(t) - i(r) > 170,
                              a = n / u;
                            return u && !c && f(a) > 0.1 ? a : 0;
                          },
                          readPoint: o,
                        };
                      })(U, i),
                      td,
                      ts,
                      tb,
                      th,
                      ty,
                      to,
                      u,
                      R,
                      A,
                      M,
                      V,
                      0,
                      z,
                    ),
                    eventStore: tE,
                    percentOfView: R,
                    index: to,
                    indexPrevious: tu,
                    limit: ti,
                    location: td,
                    offsetLocation: tg,
                    previousLocation: tp,
                    options: o,
                    resizeHandler: (function (t, n, e, r, i, o, u) {
                      let c, a;
                      let s = [t].concat(r),
                        d = [],
                        p = !1;
                      function g(t) {
                        return i.measureSize(u.measure(t));
                      }
                      return {
                        init: function (i) {
                          o &&
                            ((a = g(t)),
                            (d = r.map(g)),
                            (c = new ResizeObserver((e) => {
                              (l(o) || o(i, e)) &&
                                (function (e) {
                                  for (let o of e) {
                                    if (p) return;
                                    let e = o.target === t,
                                      u = r.indexOf(o.target),
                                      c = e ? a : d[u];
                                    if (f(g(e ? t : r[u]) - c) >= 0.5) {
                                      i.reInit(), n.emit("resize");
                                      break;
                                    }
                                  }
                                })(e);
                            })),
                            e.requestAnimationFrame(() => {
                              s.forEach((t) => c.observe(t));
                            }));
                        },
                        destroy: function () {
                          (p = !0), c && c.disconnect();
                        },
                      };
                    })(n, u, i, e, U, T, C),
                    scrollBody: th,
                    scrollBounds: (function (t, n, e, r, i) {
                      let o = i.measure(10),
                        u = i.measure(50),
                        c = E(0.1, 0.99),
                        a = !1;
                      function l() {
                        return !!(
                          !a &&
                          t.reachedAny(e.get()) &&
                          t.reachedAny(n.get())
                        );
                      }
                      return {
                        shouldConstrain: l,
                        constrain: function (i) {
                          if (!l()) return;
                          let a = t.reachedMin(n.get()) ? "min" : "max",
                            s = f(t[a] - n.get()),
                            d = e.get() - n.get(),
                            p = c.constrain(s / u);
                          e.subtract(d * p),
                            !i &&
                              f(d) < o &&
                              (e.set(t.constrain(e.get())),
                              r.useDuration(25).useBaseFriction());
                        },
                        toggleActive: function (t) {
                          a = !t;
                        },
                      };
                    })(ti, tg, tm, th, R),
                    scrollLooper: (function (t, n, e, r) {
                      let { reachedMin: i, reachedMax: o } = E(
                        n.min + 0.1,
                        n.max + 0.1,
                      );
                      return {
                        loop: function (n) {
                          if (!(1 === n ? o(e.get()) : -1 === n && i(e.get())))
                            return;
                          let u = -1 * n * t;
                          r.forEach((t) => t.add(u));
                        },
                      };
                    })(tt, ti, tg, [td, tg, tp, tm]),
                    scrollProgress: tv,
                    scrollSnapList: tr.map(tv.get),
                    scrollSnaps: tr,
                    scrollTarget: ty,
                    scrollTo: tb,
                    slideLooper: (function (t, n, e, r, i, o, u, c, a) {
                      let l = p(i),
                        s = g(d(p(i).reverse(), u[0]), e, !1).concat(
                          g(d(l, n - u[0] - 1), -e, !0),
                        );
                      function f(t, n) {
                        return t.reduce((t, n) => t - i[n], n);
                      }
                      function d(t, n) {
                        return t.reduce(
                          (t, e) => (f(t, n) > 0 ? t.concat([e]) : t),
                          [],
                        );
                      }
                      function g(i, u, l) {
                        let s = o.map((t, e) => ({
                          start: t - r[e] + 0.5 + u,
                          end: t + n - 0.5 + u,
                        }));
                        return i.map((n) => {
                          let r = l ? 0 : -e,
                            i = l ? e : 0,
                            o = s[n][l ? "end" : "start"];
                          return {
                            index: n,
                            loopPoint: o,
                            slideLocation: x(-1),
                            translate: w(t, a[n]),
                            target: () => (c.get() > o ? r : i),
                          };
                        });
                      }
                      return {
                        canLoop: function () {
                          return s.every(
                            ({ index: t }) =>
                              0.1 >=
                              f(
                                l.filter((n) => n !== t),
                                n,
                              ),
                          );
                        },
                        clear: function () {
                          s.forEach((t) => t.translate.clear());
                        },
                        loop: function () {
                          s.forEach((t) => {
                            let {
                                target: n,
                                translate: e,
                                slideLocation: r,
                              } = t,
                              i = n();
                            i !== r.get() && (e.to(i), r.set(i));
                          });
                        },
                        loopPoints: s,
                      };
                    })(U, $, tt, J, X, K, tr, tg, e),
                    slideFocus: tO,
                    slidesHandler:
                      ((O = !1),
                      {
                        init: function (t) {
                          H &&
                            (s = new MutationObserver((n) => {
                              !O &&
                                (l(H) || H(t, n)) &&
                                (function (n) {
                                  for (let e of n)
                                    if ("childList" === e.type) {
                                      t.reInit(), u.emit("slidesChanged");
                                      break;
                                    }
                                })(n);
                            })).observe(n, { childList: !0 });
                        },
                        destroy: function () {
                          s && s.disconnect(), (O = !0);
                        },
                      }),
                    slidesInView: tx,
                    slideIndexes: tc,
                    slideRegistry: tw,
                    slidesToScroll: G,
                    target: tm,
                    translate: w(U, n),
                  };
                return tS;
              })(t, o, u, D, k, e, M);
              return e.loop && !r.slideLooper.canLoop()
                ? n(Object.assign({}, e, { loop: !1 }))
                : r;
            })(q)),
            V([C, ...B.map(({ options: t }) => t)]).forEach((t) =>
              A.add(t, "change", $),
            ),
            q.active &&
              (r.translate.to(r.location.get()),
              r.animation.init(),
              r.slidesInView.init(),
              r.slideFocus.init(),
              r.eventHandler.init(J),
              r.resizeHandler.init(J),
              r.slidesHandler.init(J),
              r.options.loop && r.slideLooper.loop(),
              o.offsetParent && u.length && r.dragHandler.init(J),
              (i = N.init(J, B))));
        }
        function $(t, n) {
          let e = Z();
          R(), U(F({ startIndex: e }, t), n), M.emit("reInit");
        }
        function R() {
          r.dragHandler.destroy(),
            r.eventStore.clear(),
            r.translate.clear(),
            r.slideLooper.clear(),
            r.resizeHandler.destroy(),
            r.slidesHandler.destroy(),
            r.slidesInView.destroy(),
            r.animation.destroy(),
            N.destroy(),
            A.clear();
        }
        function _(t, n, e) {
          q.active &&
            !z &&
            (r.scrollBody
              .useBaseFriction()
              .useDuration(!0 === n ? 0 : q.duration),
            r.scrollTo.index(t, e || 0));
        }
        function Z() {
          return r.index.get();
        }
        let J = {
          canScrollNext: function () {
            return r.index.add(1).get() !== Z();
          },
          canScrollPrev: function () {
            return r.index.add(-1).get() !== Z();
          },
          containerNode: function () {
            return o;
          },
          internalEngine: function () {
            return r;
          },
          destroy: function () {
            z || ((z = !0), A.clear(), R(), M.emit("destroy"), M.clear());
          },
          off: T,
          on: P,
          emit: H,
          plugins: function () {
            return i;
          },
          previousScrollSnap: function () {
            return r.indexPrevious.get();
          },
          reInit: $,
          rootNode: function () {
            return t;
          },
          scrollNext: function (t) {
            _(r.index.add(1).get(), t, -1);
          },
          scrollPrev: function (t) {
            _(r.index.add(-1).get(), t, 1);
          },
          scrollProgress: function () {
            return r.scrollProgress.get(r.location.get());
          },
          scrollSnapList: function () {
            return r.scrollSnapList;
          },
          scrollTo: _,
          selectedScrollSnap: Z,
          slideNodes: function () {
            return u;
          },
          slidesInView: function () {
            return r.slidesInView.get();
          },
          slidesNotInView: function () {
            return r.slidesInView.get(!1);
          },
        };
        return U(n, e), setTimeout(() => M.emit("init"), 0), J;
      }
      function I(t = {}, n = []) {
        let e = (0, r.useRef)(t),
          i = (0, r.useRef)(n),
          [c, a] = (0, r.useState)(),
          [l, s] = (0, r.useState)(),
          f = (0, r.useCallback)(() => {
            c && c.reInit(e.current, i.current);
          }, [c]);
        return (
          (0, r.useEffect)(() => {
            if (
              "undefined" != typeof window &&
              window.document &&
              window.document.createElement &&
              l
            ) {
              S.globalOptions = I.globalOptions;
              let t = S(l, e.current, i.current);
              return a(t), () => t.destroy();
            }
            a(void 0);
          }, [l, a]),
          (0, r.useEffect)(() => {
            o(e.current, t) || ((e.current = t), f());
          }, [t, f]),
          (0, r.useEffect)(() => {
            !(function (t, n) {
              if (t.length !== n.length) return !1;
              let e = u(t),
                r = u(n);
              return e.every((t, n) => o(t, r[n]));
            })(i.current, n) && ((i.current = n), f());
          }, [n, f]),
          [s, c]
        );
      }
      (S.globalOptions = void 0), (I.globalOptions = void 0);
    },
  },
]);
