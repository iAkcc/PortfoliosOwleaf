"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7987],
  {
    87138: function (e, t, n) {
      n.d(t, {
        default: function () {
          return l.a;
        },
      });
      var r = n(231),
        l = n.n(r);
    },
    85621: function (e, t, n) {
      n.d(t, {
        Me: function () {
          return J;
        },
        oo: function () {
          return ee;
        },
        RR: function () {
          return X;
        },
        uY: function () {
          return Y;
        },
      });
      let r = Math.min,
        l = Math.max,
        a = Math.round,
        o = Math.floor,
        i = (e) => ({ x: e, y: e }),
        s = { left: "right", right: "left", bottom: "top", top: "bottom" },
        u = { start: "end", end: "start" };
      function c(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function d(e) {
        return e.split("-")[0];
      }
      function f(e) {
        return e.split("-")[1];
      }
      function m(e) {
        return "x" === e ? "y" : "x";
      }
      function p(e) {
        return "y" === e ? "height" : "width";
      }
      function h(e) {
        return ["top", "bottom"].includes(d(e)) ? "y" : "x";
      }
      function C(e) {
        return e.replace(/start|end/g, (e) => u[e]);
      }
      function g(e) {
        return e.replace(/left|right|bottom|top/g, (e) => s[e]);
      }
      function v(e) {
        let { x: t, y: n, width: r, height: l } = e;
        return {
          width: r,
          height: l,
          top: n,
          left: t,
          right: t + r,
          bottom: n + l,
          x: t,
          y: n,
        };
      }
      function y(e, t, n) {
        let r,
          { reference: l, floating: a } = e,
          o = h(t),
          i = m(h(t)),
          s = p(i),
          u = d(t),
          c = "y" === o,
          C = l.x + l.width / 2 - a.width / 2,
          g = l.y + l.height / 2 - a.height / 2,
          v = l[s] / 2 - a[s] / 2;
        switch (u) {
          case "top":
            r = { x: C, y: l.y - a.height };
            break;
          case "bottom":
            r = { x: C, y: l.y + l.height };
            break;
          case "right":
            r = { x: l.x + l.width, y: g };
            break;
          case "left":
            r = { x: l.x - a.width, y: g };
            break;
          default:
            r = { x: l.x, y: l.y };
        }
        switch (f(t)) {
          case "start":
            r[i] -= v * (n && c ? -1 : 1);
            break;
          case "end":
            r[i] += v * (n && c ? -1 : 1);
        }
        return r;
      }
      let E = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: l = "absolute",
            middleware: a = [],
            platform: o,
          } = n,
          i = a.filter(Boolean),
          s = await (null == o.isRTL ? void 0 : o.isRTL(t)),
          u = await o.getElementRects({
            reference: e,
            floating: t,
            strategy: l,
          }),
          { x: c, y: d } = y(u, r, s),
          f = r,
          m = {},
          p = 0;
        for (let n = 0; n < i.length; n++) {
          let { name: a, fn: h } = i[n],
            {
              x: C,
              y: g,
              data: v,
              reset: E,
            } = await h({
              x: c,
              y: d,
              initialPlacement: r,
              placement: f,
              strategy: l,
              middlewareData: m,
              rects: u,
              platform: o,
              elements: { reference: e, floating: t },
            });
          (c = null != C ? C : c),
            (d = null != g ? g : d),
            (m = { ...m, [a]: { ...m[a], ...v } }),
            E &&
              p <= 50 &&
              (p++,
              "object" == typeof E &&
                (E.placement && (f = E.placement),
                E.rects &&
                  (u =
                    !0 === E.rects
                      ? await o.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: l,
                        })
                      : E.rects),
                ({ x: c, y: d } = y(u, f, s))),
              (n = -1));
        }
        return { x: c, y: d, placement: f, strategy: l, middlewareData: m };
      };
      async function b(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: r, y: l, platform: a, rects: o, elements: i, strategy: s } = e,
          {
            boundary: u = "clippingAncestors",
            rootBoundary: d = "viewport",
            elementContext: f = "floating",
            altBoundary: m = !1,
            padding: p = 0,
          } = c(t, e),
          h =
            "number" != typeof p
              ? { top: 0, right: 0, bottom: 0, left: 0, ...p }
              : { top: p, right: p, bottom: p, left: p },
          C = i[m ? ("floating" === f ? "reference" : "floating") : f],
          g = v(
            await a.getClippingRect({
              element:
                null ==
                  (n = await (null == a.isElement ? void 0 : a.isElement(C))) ||
                n
                  ? C
                  : C.contextElement ||
                    (await (null == a.getDocumentElement
                      ? void 0
                      : a.getDocumentElement(i.floating))),
              boundary: u,
              rootBoundary: d,
              strategy: s,
            }),
          ),
          y =
            "floating" === f
              ? {
                  x: r,
                  y: l,
                  width: o.floating.width,
                  height: o.floating.height,
                }
              : o.reference,
          E = await (null == a.getOffsetParent
            ? void 0
            : a.getOffsetParent(i.floating)),
          b = ((await (null == a.isElement ? void 0 : a.isElement(E))) &&
            (await (null == a.getScale ? void 0 : a.getScale(E)))) || {
            x: 1,
            y: 1,
          },
          w = v(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                  elements: i,
                  rect: y,
                  offsetParent: E,
                  strategy: s,
                })
              : y,
          );
        return {
          top: (g.top - w.top + h.top) / b.y,
          bottom: (w.bottom - g.bottom + h.bottom) / b.y,
          left: (g.left - w.left + h.left) / b.x,
          right: (w.right - g.right + h.right) / b.x,
        };
      }
      function w(e) {
        return x(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function $(e) {
        var t;
        return (
          (null == e || null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function N(e) {
        var t;
        return null ==
          (t = (x(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function x(e) {
        return e instanceof Node || e instanceof $(e).Node;
      }
      function S(e) {
        return e instanceof Element || e instanceof $(e).Element;
      }
      function L(e) {
        return e instanceof HTMLElement || e instanceof $(e).HTMLElement;
      }
      function M(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof $(e).ShadowRoot)
        );
      }
      function k(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: l } = D(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(l)
        );
      }
      function R(e) {
        return [":popover-open", ":modal"].some((t) => {
          try {
            return e.matches(t);
          } catch (e) {
            return !1;
          }
        });
      }
      function V(e) {
        let t = I(),
          n = S(e) ? D(e) : e;
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e),
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e),
          )
        );
      }
      function I() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function T(e) {
        return ["html", "body", "#document"].includes(w(e));
      }
      function D(e) {
        return $(e).getComputedStyle(e);
      }
      function P(e) {
        return S(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
      }
      function B(e) {
        if ("html" === w(e)) return e;
        let t = e.assignedSlot || e.parentNode || (M(e) && e.host) || N(e);
        return M(t) ? t.host : t;
      }
      function A(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        let l = (function e(t) {
            let n = B(t);
            return T(n)
              ? t.ownerDocument
                ? t.ownerDocument.body
                : t.body
              : L(n) && k(n)
                ? n
                : e(n);
          })(e),
          a = l === (null == (r = e.ownerDocument) ? void 0 : r.body),
          o = $(l);
        return a
          ? t.concat(
              o,
              o.visualViewport || [],
              k(l) ? l : [],
              o.frameElement && n ? A(o.frameElement) : [],
            )
          : t.concat(l, A(l, [], n));
      }
      function H(e) {
        let t = D(e),
          n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0,
          l = L(e),
          o = l ? e.offsetWidth : n,
          i = l ? e.offsetHeight : r,
          s = a(n) !== o || a(r) !== i;
        return s && ((n = o), (r = i)), { width: n, height: r, $: s };
      }
      function F(e) {
        return S(e) ? e : e.contextElement;
      }
      function O(e) {
        let t = F(e);
        if (!L(t)) return i(1);
        let n = t.getBoundingClientRect(),
          { width: r, height: l, $: o } = H(t),
          s = (o ? a(n.width) : n.width) / r,
          u = (o ? a(n.height) : n.height) / l;
        return (
          (s && Number.isFinite(s)) || (s = 1),
          (u && Number.isFinite(u)) || (u = 1),
          { x: s, y: u }
        );
      }
      let Z = i(0);
      function W(e) {
        let t = $(e);
        return I() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : Z;
      }
      function j(e, t, n, r) {
        var l;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let a = e.getBoundingClientRect(),
          o = F(e),
          s = i(1);
        t && (r ? S(r) && (s = O(r)) : (s = O(e)));
        let u = (void 0 === (l = n) && (l = !1), r && (!l || r === $(o)) && l)
            ? W(o)
            : i(0),
          c = (a.left + u.x) / s.x,
          d = (a.top + u.y) / s.y,
          f = a.width / s.x,
          m = a.height / s.y;
        if (o) {
          let e = $(o),
            t = r && S(r) ? $(r) : r,
            n = e,
            l = n.frameElement;
          for (; l && r && t !== n; ) {
            let e = O(l),
              t = l.getBoundingClientRect(),
              r = D(l),
              a = t.left + (l.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              o = t.top + (l.clientTop + parseFloat(r.paddingTop)) * e.y;
            (c *= e.x),
              (d *= e.y),
              (f *= e.x),
              (m *= e.y),
              (c += a),
              (d += o),
              (l = (n = $(l)).frameElement);
          }
        }
        return v({ width: f, height: m, x: c, y: d });
      }
      function z(e) {
        return j(N(e)).left + P(e).scrollLeft;
      }
      function U(e, t, n) {
        let r;
        if ("viewport" === t)
          r = (function (e, t) {
            let n = $(e),
              r = N(e),
              l = n.visualViewport,
              a = r.clientWidth,
              o = r.clientHeight,
              i = 0,
              s = 0;
            if (l) {
              (a = l.width), (o = l.height);
              let e = I();
              (!e || (e && "fixed" === t)) &&
                ((i = l.offsetLeft), (s = l.offsetTop));
            }
            return { width: a, height: o, x: i, y: s };
          })(e, n);
        else if ("document" === t)
          r = (function (e) {
            let t = N(e),
              n = P(e),
              r = e.ownerDocument.body,
              a = l(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
              o = l(
                t.scrollHeight,
                t.clientHeight,
                r.scrollHeight,
                r.clientHeight,
              ),
              i = -n.scrollLeft + z(e),
              s = -n.scrollTop;
            return (
              "rtl" === D(r).direction &&
                (i += l(t.clientWidth, r.clientWidth) - a),
              { width: a, height: o, x: i, y: s }
            );
          })(N(e));
        else if (S(t))
          r = (function (e, t) {
            let n = j(e, !0, "fixed" === t),
              r = n.top + e.clientTop,
              l = n.left + e.clientLeft,
              a = L(e) ? O(e) : i(1),
              o = e.clientWidth * a.x;
            return {
              width: o,
              height: e.clientHeight * a.y,
              x: l * a.x,
              y: r * a.y,
            };
          })(t, n);
        else {
          let n = W(e);
          r = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return v(r);
      }
      function G(e) {
        return "static" === D(e).position;
      }
      function q(e, t) {
        return L(e) && "fixed" !== D(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function K(e, t) {
        let n = $(e);
        if (R(e)) return n;
        if (!L(e)) {
          let t = B(e);
          for (; t && !T(t); ) {
            if (S(t) && !G(t)) return t;
            t = B(t);
          }
          return n;
        }
        let r = q(e, t);
        for (; r && ["table", "td", "th"].includes(w(r)) && G(r); ) r = q(r, t);
        return r && T(r) && G(r) && !V(r)
          ? n
          : r ||
              (function (e) {
                let t = B(e);
                for (; L(t) && !T(t); ) {
                  if (V(t)) return t;
                  if (R(t)) break;
                  t = B(t);
                }
                return null;
              })(e) ||
              n;
      }
      let _ = async function (e) {
          let t = this.getOffsetParent || K,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: (function (e, t, n) {
              let r = L(t),
                l = N(t),
                a = "fixed" === n,
                o = j(e, !0, a, t),
                s = { scrollLeft: 0, scrollTop: 0 },
                u = i(0);
              if (r || (!r && !a)) {
                if ((("body" !== w(t) || k(l)) && (s = P(t)), r)) {
                  let e = j(t, !0, a, t);
                  (u.x = e.x + t.clientLeft), (u.y = e.y + t.clientTop);
                } else l && (u.x = z(l));
              }
              return {
                x: o.left + s.scrollLeft - u.x,
                y: o.top + s.scrollTop - u.y,
                width: o.width,
                height: o.height,
              };
            })(e.reference, await t(e.floating), e.strategy),
            floating: { x: 0, y: 0, width: r.width, height: r.height },
          };
        },
        Q = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { elements: t, rect: n, offsetParent: r, strategy: l } = e,
              a = "fixed" === l,
              o = N(r),
              s = !!t && R(t.floating);
            if (r === o || (s && a)) return n;
            let u = { scrollLeft: 0, scrollTop: 0 },
              c = i(1),
              d = i(0),
              f = L(r);
            if (
              (f || (!f && !a)) &&
              (("body" !== w(r) || k(o)) && (u = P(r)), L(r))
            ) {
              let e = j(r);
              (c = O(r)), (d.x = e.x + r.clientLeft), (d.y = e.y + r.clientTop);
            }
            return {
              width: n.width * c.x,
              height: n.height * c.y,
              x: n.x * c.x - u.scrollLeft * c.x + d.x,
              y: n.y * c.y - u.scrollTop * c.y + d.y,
            };
          },
          getDocumentElement: N,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: a, strategy: o } = e,
              i = [
                ...("clippingAncestors" === n
                  ? R(t)
                    ? []
                    : (function (e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = A(e, [], !1).filter(
                            (e) => S(e) && "body" !== w(e),
                          ),
                          l = null,
                          a = "fixed" === D(e).position,
                          o = a ? B(e) : e;
                        for (; S(o) && !T(o); ) {
                          let t = D(o),
                            n = V(o);
                          n || "fixed" !== t.position || (l = null),
                            (
                              a
                                ? !n && !l
                                : (!n &&
                                    "static" === t.position &&
                                    !!l &&
                                    ["absolute", "fixed"].includes(
                                      l.position,
                                    )) ||
                                  (k(o) &&
                                    !n &&
                                    (function e(t, n) {
                                      let r = B(t);
                                      return (
                                        !(r === n || !S(r) || T(r)) &&
                                        ("fixed" === D(r).position || e(r, n))
                                      );
                                    })(e, o))
                            )
                              ? (r = r.filter((e) => e !== o))
                              : (l = t),
                            (o = B(o));
                        }
                        return t.set(e, r), r;
                      })(t, this._c)
                  : [].concat(n)),
                a,
              ],
              s = i[0],
              u = i.reduce(
                (e, n) => {
                  let a = U(t, n, o);
                  return (
                    (e.top = l(a.top, e.top)),
                    (e.right = r(a.right, e.right)),
                    (e.bottom = r(a.bottom, e.bottom)),
                    (e.left = l(a.left, e.left)),
                    e
                  );
                },
                U(t, s, o),
              );
            return {
              width: u.right - u.left,
              height: u.bottom - u.top,
              x: u.left,
              y: u.top,
            };
          },
          getOffsetParent: K,
          getElementRects: _,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            let { width: t, height: n } = H(e);
            return { width: t, height: n };
          },
          getScale: O,
          isElement: S,
          isRTL: function (e) {
            return "rtl" === D(e).direction;
          },
        };
      function J(e, t, n, a) {
        let i;
        void 0 === a && (a = {});
        let {
            ancestorScroll: s = !0,
            ancestorResize: u = !0,
            elementResize: c = "function" == typeof ResizeObserver,
            layoutShift: d = "function" == typeof IntersectionObserver,
            animationFrame: f = !1,
          } = a,
          m = F(e),
          p = s || u ? [...(m ? A(m) : []), ...A(t)] : [];
        p.forEach((e) => {
          s && e.addEventListener("scroll", n, { passive: !0 }),
            u && e.addEventListener("resize", n);
        });
        let h =
            m && d
              ? (function (e, t) {
                  let n,
                    a = null,
                    i = N(e);
                  function s() {
                    var e;
                    clearTimeout(n),
                      null == (e = a) || e.disconnect(),
                      (a = null);
                  }
                  return (
                    !(function u(c, d) {
                      void 0 === c && (c = !1), void 0 === d && (d = 1), s();
                      let {
                        left: f,
                        top: m,
                        width: p,
                        height: h,
                      } = e.getBoundingClientRect();
                      if ((c || t(), !p || !h)) return;
                      let C = o(m),
                        g = o(i.clientWidth - (f + p)),
                        v = {
                          rootMargin:
                            -C +
                            "px " +
                            -g +
                            "px " +
                            -o(i.clientHeight - (m + h)) +
                            "px " +
                            -o(f) +
                            "px",
                          threshold: l(0, r(1, d)) || 1,
                        },
                        y = !0;
                      function E(e) {
                        let t = e[0].intersectionRatio;
                        if (t !== d) {
                          if (!y) return u();
                          t
                            ? u(!1, t)
                            : (n = setTimeout(() => {
                                u(!1, 1e-7);
                              }, 1e3));
                        }
                        y = !1;
                      }
                      try {
                        a = new IntersectionObserver(E, {
                          ...v,
                          root: i.ownerDocument,
                        });
                      } catch (e) {
                        a = new IntersectionObserver(E, v);
                      }
                      a.observe(e);
                    })(!0),
                    s
                  );
                })(m, n)
              : null,
          C = -1,
          g = null;
        c &&
          ((g = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === m &&
              g &&
              (g.unobserve(t),
              cancelAnimationFrame(C),
              (C = requestAnimationFrame(() => {
                var e;
                null == (e = g) || e.observe(t);
              }))),
              n();
          })),
          m && !f && g.observe(m),
          g.observe(t));
        let v = f ? j(e) : null;
        return (
          f &&
            (function t() {
              let r = j(e);
              v &&
                (r.x !== v.x ||
                  r.y !== v.y ||
                  r.width !== v.width ||
                  r.height !== v.height) &&
                n(),
                (v = r),
                (i = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            var e;
            p.forEach((e) => {
              s && e.removeEventListener("scroll", n),
                u && e.removeEventListener("resize", n);
            }),
              null == h || h(),
              null == (e = g) || e.disconnect(),
              (g = null),
              f && cancelAnimationFrame(i);
          }
        );
      }
      let Y = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                let { x: n, y: a, placement: o } = t,
                  {
                    mainAxis: i = !0,
                    crossAxis: s = !1,
                    limiter: u = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...f
                  } = c(e, t),
                  p = { x: n, y: a },
                  C = await b(t, f),
                  g = h(d(o)),
                  v = m(g),
                  y = p[v],
                  E = p[g];
                if (i) {
                  let e = "y" === v ? "top" : "left",
                    t = "y" === v ? "bottom" : "right",
                    n = y + C[e],
                    a = y - C[t];
                  y = l(n, r(y, a));
                }
                if (s) {
                  let e = "y" === g ? "top" : "left",
                    t = "y" === g ? "bottom" : "right",
                    n = E + C[e],
                    a = E - C[t];
                  E = l(n, r(E, a));
                }
                let w = u.fn({ ...t, [v]: y, [g]: E });
                return { ...w, data: { x: w.x - n, y: w.y - a } };
              },
            }
          );
        },
        X = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "flip",
              options: e,
              async fn(t) {
                var n, r, l, a, o;
                let {
                    placement: i,
                    middlewareData: s,
                    rects: u,
                    initialPlacement: v,
                    platform: y,
                    elements: E,
                  } = t,
                  {
                    mainAxis: w = !0,
                    crossAxis: $ = !0,
                    fallbackPlacements: N,
                    fallbackStrategy: x = "bestFit",
                    fallbackAxisSideDirection: S = "none",
                    flipAlignment: L = !0,
                    ...M
                  } = c(e, t);
                if (null != (n = s.arrow) && n.alignmentOffset) return {};
                let k = d(i),
                  R = h(v),
                  V = d(v) === v,
                  I = await (null == y.isRTL ? void 0 : y.isRTL(E.floating)),
                  T =
                    N ||
                    (V || !L
                      ? [g(v)]
                      : (function (e) {
                          let t = g(e);
                          return [C(e), t, C(t)];
                        })(v)),
                  D = "none" !== S;
                !N &&
                  D &&
                  T.push(
                    ...(function (e, t, n, r) {
                      let l = f(e),
                        a = (function (e, t, n) {
                          let r = ["left", "right"],
                            l = ["right", "left"];
                          switch (e) {
                            case "top":
                            case "bottom":
                              if (n) return t ? l : r;
                              return t ? r : l;
                            case "left":
                            case "right":
                              return t ? ["top", "bottom"] : ["bottom", "top"];
                            default:
                              return [];
                          }
                        })(d(e), "start" === n, r);
                      return (
                        l &&
                          ((a = a.map((e) => e + "-" + l)),
                          t && (a = a.concat(a.map(C)))),
                        a
                      );
                    })(v, L, S, I),
                  );
                let P = [v, ...T],
                  B = await b(t, M),
                  A = [],
                  H = (null == (r = s.flip) ? void 0 : r.overflows) || [];
                if ((w && A.push(B[k]), $)) {
                  let e = (function (e, t, n) {
                    void 0 === n && (n = !1);
                    let r = f(e),
                      l = m(h(e)),
                      a = p(l),
                      o =
                        "x" === l
                          ? r === (n ? "end" : "start")
                            ? "right"
                            : "left"
                          : "start" === r
                            ? "bottom"
                            : "top";
                    return (
                      t.reference[a] > t.floating[a] && (o = g(o)), [o, g(o)]
                    );
                  })(i, u, I);
                  A.push(B[e[0]], B[e[1]]);
                }
                if (
                  ((H = [...H, { placement: i, overflows: A }]),
                  !A.every((e) => e <= 0))
                ) {
                  let e = ((null == (l = s.flip) ? void 0 : l.index) || 0) + 1,
                    t = P[e];
                  if (t)
                    return {
                      data: { index: e, overflows: H },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (a = H.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1],
                    )[0])
                      ? void 0
                      : a.placement;
                  if (!n)
                    switch (x) {
                      case "bestFit": {
                        let e =
                          null ==
                          (o = H.filter((e) => {
                            if (D) {
                              let t = h(e.placement);
                              return t === R || "y" === t;
                            }
                            return !0;
                          })
                            .map((e) => [
                              e.placement,
                              e.overflows
                                .filter((e) => e > 0)
                                .reduce((e, t) => e + t, 0),
                            ])
                            .sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : o[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = v;
                    }
                  if (i !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        },
        ee = (e, t, n) => {
          let r = new Map(),
            l = { platform: Q, ...n },
            a = { ...l.platform, _c: r };
          return E(e, t, { ...l, platform: a });
        };
    },
    97448: function (e, t, n) {
      n.d(t, {
        J: function () {
          return p;
        },
      });
      var r = n(2265),
        l = n(12094),
        a = n(55971),
        o = (0, n(53426).tv)({
          slots: {
            wrapper: "relative shadow-black/5",
            zoomedWrapper: "relative overflow-hidden rounded-inherit",
            img: "relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100",
            blurredImg: [
              "absolute",
              "z-0",
              "inset-0",
              "w-full",
              "h-full",
              "object-cover",
              "filter",
              "blur-lg",
              "scale-105",
              "saturate-150",
              "opacity-30",
              "translate-y-1",
            ],
          },
          variants: {
            radius: { none: {}, sm: {}, md: {}, lg: {}, full: {} },
            shadow: {
              none: { wrapper: "shadow-none", img: "shadow-none" },
              sm: { wrapper: "shadow-small", img: "shadow-small" },
              md: { wrapper: "shadow-medium", img: "shadow-medium" },
              lg: { wrapper: "shadow-large", img: "shadow-large" },
            },
            isZoomed: {
              true: { img: ["object-cover", "transform", "hover:scale-125"] },
            },
            showSkeleton: {
              true: {
                wrapper: [
                  "group",
                  "relative",
                  "overflow-hidden",
                  "bg-content3 dark:bg-content2",
                ],
                img: "opacity-0",
              },
            },
            disableAnimation: {
              true: { img: "transition-none" },
              false: {
                img: "transition-transform-opacity motion-reduce:transition-none !duration-300",
              },
            },
          },
          defaultVariants: {
            radius: "lg",
            shadow: "none",
            isZoomed: !1,
            isBlurred: !1,
            showSkeleton: !1,
          },
          compoundVariants: [
            {
              showSkeleton: !0,
              disableAnimation: !1,
              class: {
                wrapper: [
                  "before:opacity-100",
                  "before:absolute",
                  "before:inset-0",
                  "before:-translate-x-full",
                  "before:animate-[shimmer_2s_infinite]",
                  "before:border-t",
                  "before:border-content4/30",
                  "before:bg-gradient-to-r",
                  "before:from-transparent",
                  "before:via-content4",
                  "dark:before:via-default-700/10",
                  "before:to-transparent",
                  "after:opacity-100",
                  "after:absolute",
                  "after:inset-0",
                  "after:-z-10",
                  "after:bg-content3",
                  "dark:after:bg-content2",
                ],
              },
            },
          ],
          compoundSlots: [
            {
              slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
              radius: "none",
              class: "rounded-none",
            },
            {
              slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
              radius: "full",
              class: "rounded-full",
            },
            {
              slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
              radius: "sm",
              class: "rounded-small",
            },
            {
              slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
              radius: "md",
              class: "rounded-md",
            },
            {
              slots: ["wrapper", "img", "blurredImg", "zoomedWrapper"],
              radius: "lg",
              class: "rounded-large",
            },
          ],
        }),
        i = n(26242),
        s = n(36222),
        u = n(65263),
        c = n(53640),
        d = n(46896),
        f = n(57437),
        m = (0, a.Gp)((e, t) => {
          let {
              Component: n,
              domRef: m,
              slots: p,
              classNames: h,
              isBlurred: C,
              isZoomed: g,
              fallbackSrc: v,
              removeWrapper: y,
              disableSkeleton: E,
              getImgProps: b,
              getWrapperProps: w,
              getBlurredImgProps: $,
            } = (function (e) {
              var t, n;
              let f = (0, l.w)(),
                [m, p] = (0, a.oe)(e, o.variantKeys),
                {
                  ref: h,
                  as: C,
                  src: g,
                  className: v,
                  classNames: y,
                  loading: E,
                  isBlurred: b,
                  fallbackSrc: w,
                  isLoading: $,
                  disableSkeleton: N = !!w,
                  removeWrapper: x = !1,
                  onError: S,
                  onLoad: L,
                  srcSet: M,
                  sizes: k,
                  crossOrigin: R,
                  ...V
                } = m,
                I = (function (e = {}) {
                  let {
                      loading: t,
                      src: n,
                      srcSet: l,
                      onLoad: a,
                      onError: o,
                      crossOrigin: i,
                      sizes: s,
                      ignoreFallback: u,
                    } = e,
                    [c, f] = (0, r.useState)("pending");
                  (0, r.useEffect)(() => {
                    f(n ? "loading" : "pending");
                  }, [n]);
                  let m = (0, r.useRef)(),
                    p = (0, r.useCallback)(() => {
                      if (!n) return;
                      h();
                      let e = new Image();
                      (e.src = n),
                        i && (e.crossOrigin = i),
                        l && (e.srcset = l),
                        s && (e.sizes = s),
                        t && (e.loading = t),
                        (e.onload = (e) => {
                          h(), f("loaded"), null == a || a(e);
                        }),
                        (e.onerror = (e) => {
                          h(), f("failed"), null == o || o(e);
                        }),
                        (m.current = e);
                    }, [n, i, l, s, a, o, t]),
                    h = () => {
                      m.current &&
                        ((m.current.onload = null),
                        (m.current.onerror = null),
                        (m.current = null));
                    };
                  return (
                    (0, d.G)(() => {
                      if (!u)
                        return (
                          "loading" === c && p(),
                          () => {
                            h();
                          }
                        );
                    }, [c, p, u]),
                    u ? "loaded" : c
                  );
                })({
                  src: g,
                  loading: E,
                  onError: S,
                  onLoad: L,
                  ignoreFallback: !1,
                  srcSet: M,
                  sizes: k,
                  crossOrigin: R,
                }),
                T =
                  null !=
                    (n =
                      null != (t = e.disableAnimation)
                        ? t
                        : null == f
                          ? void 0
                          : f.disableAnimation) && n,
                D = "loaded" === I && !$,
                P = "loading" === I || $,
                B = e.isZoomed,
                A = (0, i.gy)(h),
                { w: H, h: F } = (0, r.useMemo)(
                  () => ({
                    w: m.width
                      ? "number" == typeof m.width
                        ? `${m.width}px`
                        : m.width
                      : "fit-content",
                    h: m.height
                      ? "number" == typeof m.height
                        ? `${m.height}px`
                        : m.height
                      : "auto",
                  }),
                  [null == m ? void 0 : m.width, null == m ? void 0 : m.height],
                ),
                O = (!g || !D) && !!w,
                Z = P && !N,
                W = (0, r.useMemo)(
                  () => o({ ...p, disableAnimation: T, showSkeleton: Z }),
                  [(0, s.Xx)(p), T, Z],
                ),
                j = (0, u.W)(v, null == y ? void 0 : y.img),
                z = (0, r.useCallback)(() => {
                  let e = O ? { backgroundImage: `url(${w})` } : {};
                  return {
                    className: W.wrapper({
                      class: null == y ? void 0 : y.wrapper,
                    }),
                    style: { ...e, maxWidth: H },
                  };
                }, [W, O, w, null == y ? void 0 : y.wrapper]),
                U = (0, r.useCallback)(
                  () => ({
                    src: g,
                    "aria-hidden": (0, c.PB)(!0),
                    className: W.blurredImg({
                      class: null == y ? void 0 : y.blurredImg,
                    }),
                  }),
                  [W, g, null == y ? void 0 : y.blurredImg],
                );
              return {
                Component: C || "img",
                domRef: A,
                slots: W,
                classNames: y,
                isBlurred: b,
                disableSkeleton: N,
                fallbackSrc: w,
                removeWrapper: x,
                isZoomed: B,
                isLoading: P,
                getImgProps: (e = {}) => {
                  let t = (0, u.W)(j, null == e ? void 0 : e.className);
                  return {
                    src: g,
                    ref: A,
                    "data-loaded": (0, c.PB)(D),
                    className: W.img({ class: t }),
                    loading: E,
                    srcSet: M,
                    sizes: k,
                    crossOrigin: R,
                    ...V,
                    style: {
                      ...((null == V ? void 0 : V.height) && { height: F }),
                      ...e.style,
                      ...V.style,
                    },
                  };
                },
                getWrapperProps: z,
                getBlurredImgProps: U,
              };
            })({ ...e, ref: t }),
            N = (0, f.jsx)(n, { ref: m, ...b() });
          if (y) return N;
          let x = (0, f.jsx)("div", {
            className: p.zoomedWrapper({
              class: null == h ? void 0 : h.zoomedWrapper,
            }),
            children: N,
          });
          return C
            ? (0, f.jsxs)("div", {
                ...w(),
                children: [g ? x : N, (0, r.cloneElement)(N, $())],
              })
            : g || !E || v
              ? (0, f.jsxs)("div", { ...w(), children: [" ", g ? x : N] })
              : N;
        });
      m.displayName = "NextUI.Image";
      var p = m;
    },
    70097: function (e, t, n) {
      n.d(t, {
        n: function () {
          return C;
        },
      });
      var r = n(67485),
        l = n(60357),
        a = n(277),
        o = n(46671),
        i = n(47961),
        s = n(9656),
        u = n(12094),
        c = n(55971),
        d = n(26242),
        f = n(13389),
        m = n(36222),
        p = n(53640),
        h = n(2265);
      function C(e) {
        var t, n, C, g;
        let v = (0, u.w)(),
          [y, E] = (0, c.oe)(e, r.p.variantKeys),
          {
            ref: b,
            as: w,
            children: $,
            anchorIcon: N,
            isExternal: x = !1,
            showAnchorIcon: S = !1,
            autoFocus: L = !1,
            className: M,
            onPress: k,
            onPressStart: R,
            onPressEnd: V,
            onClick: I,
            ...T
          } = y,
          D = (0, d.gy)(b),
          P =
            null !=
              (n =
                null != (t = null == e ? void 0 : e.disableAnimation)
                  ? t
                  : null == v
                    ? void 0
                    : v.disableAnimation) && n,
          { linkProps: B } = (function (e, t) {
            let {
                elementType: n = "a",
                onPress: r,
                onPressStart: u,
                onPressEnd: c,
                onClick: d,
                isDisabled: f,
                ...m
              } = e,
              p = {};
            "a" !== n && (p = { role: "link", tabIndex: f ? void 0 : 0 });
            let { focusableProps: h } = (0, i.k)(e, t),
              { pressProps: C, isPressed: g } = (0, s.r)({
                onPress: r,
                onPressStart: u,
                onPressEnd: c,
                isDisabled: f,
                ref: t,
              }),
              v = (0, l.z)(m, { labelable: !0 }),
              y = (0, a.d)(h, C),
              E = (0, o.tv)(),
              b = (0, o.eY)(e);
            return {
              isPressed: g,
              linkProps: (0, a.d)(v, b, {
                ...y,
                ...p,
                "aria-disabled": f || void 0,
                "aria-current": e["aria-current"],
                onClick: (t) => {
                  var n;
                  null === (n = C.onClick) || void 0 === n || n.call(C, t),
                    d &&
                      (d(t),
                      console.warn(
                        "onClick is deprecated, please use onPress",
                      )),
                    !E.isNative &&
                      t.currentTarget instanceof HTMLAnchorElement &&
                      t.currentTarget.href &&
                      !t.isDefaultPrevented() &&
                      (0, o.b0)(t.currentTarget, t) &&
                      e.href &&
                      (t.preventDefault(),
                      E.open(t.currentTarget, t, e.href, e.routerOptions));
                },
              }),
            };
          })(
            {
              ...T,
              onPress: k,
              onPressStart: R,
              onPressEnd: V,
              onClick: I,
              isDisabled: e.isDisabled,
              elementType: `${w}`,
            },
            D,
          ),
          {
            isFocused: A,
            isFocusVisible: H,
            focusProps: F,
          } = (0, f.F)({ autoFocus: L });
        x &&
          ((T.rel = null != (C = T.rel) ? C : "noopener noreferrer"),
          (T.target = null != (g = T.target) ? g : "_blank"));
        let O = (0, h.useMemo)(
          () => (0, r.p)({ ...E, disableAnimation: P, className: M }),
          [(0, m.Xx)(E), P, M],
        );
        return {
          Component: w || "a",
          children: $,
          anchorIcon: N,
          showAnchorIcon: S,
          getLinkProps: (0, h.useCallback)(
            () => ({
              ref: D,
              className: O,
              "data-focus": (0, p.PB)(A),
              "data-disabled": (0, p.PB)(e.isDisabled),
              "data-focus-visible": (0, p.PB)(H),
              ...(0, a.d)(F, B, T),
            }),
            [O, A, H, F, B, T],
          ),
        };
      }
    },
    45622: function (e, t, n) {
      n.d(t, {
        x: function () {
          return l;
        },
      });
      var r = n(57437),
        l = (e) =>
          (0, r.jsxs)("svg", {
            "aria-hidden": "true",
            fill: "none",
            focusable: "false",
            height: "1em",
            shapeRendering: "geometricPrecision",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "1.5",
            viewBox: "0 0 24 24",
            width: "1em",
            ...e,
            children: [
              (0, r.jsx)("path", {
                d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6",
              }),
              (0, r.jsx)("path", { d: "M15 3h6v6" }),
              (0, r.jsx)("path", { d: "M10 14L21 3" }),
            ],
          });
    },
    67485: function (e, t, n) {
      n.d(t, {
        A: function () {
          return o;
        },
        p: function () {
          return a;
        },
      });
      var r = n(53426),
        l = n(21616),
        a = (0, r.tv)({
          base: [
            "relative inline-flex items-center outline-none tap-highlight-transparent",
            ...l.Dh,
          ],
          variants: {
            size: { sm: "text-small", md: "text-medium", lg: "text-large" },
            color: {
              foreground: "text-foreground",
              primary: "text-primary",
              secondary: "text-secondary",
              success: "text-success",
              warning: "text-warning",
              danger: "text-danger",
            },
            underline: {
              none: "no-underline",
              hover: "hover:underline",
              always: "underline",
              active: "active:underline",
              focus: "focus:underline",
            },
            isBlock: {
              true: [
                "px-2",
                "py-1",
                "hover:after:opacity-100",
                "after:content-['']",
                "after:inset-0",
                "after:opacity-0",
                "after:w-full",
                "after:h-full",
                "after:rounded-xl",
                "after:transition-background",
                "after:absolute",
              ],
              false:
                "hover:opacity-80 active:opacity-disabled transition-opacity",
            },
            isDisabled: {
              true: "opacity-disabled cursor-default pointer-events-none",
            },
            disableAnimation: { true: "after:transition-none transition-none" },
          },
          compoundVariants: [
            {
              isBlock: !0,
              color: "foreground",
              class: "hover:after:bg-foreground/10",
            },
            {
              isBlock: !0,
              color: "primary",
              class: "hover:after:bg-primary/20",
            },
            {
              isBlock: !0,
              color: "secondary",
              class: "hover:after:bg-secondary/20",
            },
            {
              isBlock: !0,
              color: "success",
              class: "hover:after:bg-success/20",
            },
            {
              isBlock: !0,
              color: "warning",
              class: "hover:after:bg-warning/20",
            },
            { isBlock: !0, color: "danger", class: "hover:after:bg-danger/20" },
            {
              underline: ["hover", "always", "active", "focus"],
              class: "underline-offset-4",
            },
          ],
          defaultVariants: {
            color: "primary",
            size: "md",
            isBlock: !1,
            underline: "none",
            isDisabled: !1,
          },
        }),
        o = "flex mx-1 text-current self-center";
    },
    25035: function (e, t, n) {
      n.d(t, {
        J: function () {
          return l;
        },
      });
      var r = n(2265);
      let l = r.forwardRef((e, t) => {
        let { width: n, height: l, size: a = null, paths: o, ...i } = e;
        return r.createElement("svg", {
          viewBox: "0 0 32 32",
          ...i,
          width: n ?? a,
          height: l ?? a,
          fill: "none",
          "aria-hidden": "true",
          focusable: "false",
          xmlns: "http://www.w3.org/2000/svg",
          ref: t,
          dangerouslySetInnerHTML: { __html: o },
        });
      });
      l.displayName = "VidstackIcon";
    },
    84283: function (e, t, n) {
      n.d(t, {
        A1: function () {
          return L;
        },
        B4: function () {
          return T;
        },
        Bn: function () {
          return $;
        },
        D6: function () {
          return W;
        },
        Ei: function () {
          return F;
        },
        Ex: function () {
          return q;
        },
        Gf: function () {
          return u;
        },
        JM: function () {
          return d;
        },
        L: function () {
          return eE;
        },
        LD: function () {
          return N;
        },
        MB: function () {
          return I;
        },
        R6: function () {
          return b;
        },
        Rg: function () {
          return D;
        },
        Su: function () {
          return R;
        },
        U7: function () {
          return ea;
        },
        bD: function () {
          return y;
        },
        bU: function () {
          return M;
        },
        ck: function () {
          return en;
        },
        dY: function () {
          return h;
        },
        fC: function () {
          return H;
        },
        fQ: function () {
          return k;
        },
        fh: function () {
          return ee;
        },
        h_: function () {
          return es;
        },
        j$: function () {
          return G;
        },
        jC: function () {
          return B;
        },
        kH: function () {
          return i;
        },
        oF: function () {
          return em;
        },
        ob: function () {
          return ec;
        },
        os: function () {
          return m;
        },
        pi: function () {
          return ev;
        },
        pl: function () {
          return Q;
        },
        qp: function () {
          return eh;
        },
        tP: function () {
          return z;
        },
        tg: function () {
          return g;
        },
        uY: function () {
          return eg;
        },
        zx: function () {
          return ei;
        },
      });
      var r = n(2265),
        l = n(17015),
        a = n(39684),
        o = n(54887);
      function i() {
        return (0, l.useReactContext)(a._S);
      }
      let s = (0, l.createReactComponent)(a.Rt, { domEventsRegex: /^onMedia/ }),
        u = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(s, { ...t }, (t) =>
            r.createElement(
              a.WV.button,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      u.displayName = "AirPlayButton";
      let c = (0, l.createReactComponent)(a.zY, { domEventsRegex: /^onMedia/ }),
        d = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(c, { ...t }, (t) =>
            r.createElement(
              a.WV.button,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      d.displayName = "PlayButton";
      let f = (0, l.createReactComponent)(a.Er, { domEventsRegex: /^onMedia/ }),
        m = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(f, { ...t }, (t) =>
            r.createElement(
              a.WV.button,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      m.displayName = "CaptionButton";
      let p = (0, l.createReactComponent)(a.Je, { domEventsRegex: /^onMedia/ }),
        h = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(p, { ...t }, (t) =>
            r.createElement(
              a.WV.button,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      h.displayName = "FullscreenButton";
      let C = (0, l.createReactComponent)(a.Cv, { domEventsRegex: /^onMedia/ }),
        g = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(C, { ...t }, (t) =>
            r.createElement(
              a.WV.button,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      g.displayName = "MuteButton";
      let v = (0, l.createReactComponent)(a.zh, { domEventsRegex: /^onMedia/ }),
        y = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(v, { ...t }, (t) =>
            r.createElement(
              a.WV.button,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      y.displayName = "PIPButton";
      let E = (0, l.createReactComponent)(a.ns, { domEventsRegex: /^onMedia/ }),
        b = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(E, { ...t }, (t) =>
            r.createElement(
              a.WV.button,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      b.displayName = "SeekButton";
      let w = (0, l.createReactComponent)(a.QF, { domEventsRegex: /^onMedia/ }),
        $ = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(w, { ...t }, (t) =>
            r.createElement(
              a.WV.button,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      $.displayName = "LiveButton";
      let N = [
          "onDragStart",
          "onDragEnd",
          "onDragValueChange",
          "onValueChange",
          "onPointerValueChange",
        ],
        x = (0, l.createReactComponent)(a.u9),
        S = (0, l.createReactComponent)(a.cA, { events: N }),
        L = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(S, { ...t, ref: n }, (t) =>
            r.createElement(a.WV.div, { ...t }, e),
          ),
        );
      L.displayName = "Slider";
      let M = r.forwardRef((e, t) =>
        r.createElement(a.WV.div, { ...e, ref: t }),
      );
      M.displayName = "SliderThumb";
      let k = r.forwardRef((e, t) =>
        r.createElement(a.WV.div, { ...e, ref: t }),
      );
      k.displayName = "SliderTrack";
      let R = r.forwardRef((e, t) =>
        r.createElement(a.WV.div, { ...e, ref: t }),
      );
      R.displayName = "SliderTrackFill";
      let V = (0, l.createReactComponent)(a.Xm),
        I = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(V, { ...t }, (t) =>
            r.createElement(
              a.WV.div,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      I.displayName = "SliderPreview";
      let T = r.forwardRef(({ children: e, ...t }, n) =>
        r.createElement(x, { ...t }, (t, o) => {
          let i = (0, l.useSignal)(() => o.getValueText(), o);
          return r.createElement(a.WV.div, { ...t, ref: n }, i, e);
        }),
      );
      T.displayName = "SliderValue";
      let D = r.forwardRef(({ children: e, ...t }, n) => {
        let l = (0, a.xu)("min"),
          o = (0, a.xu)("max"),
          i = (0, a.xu)("step");
        return r.createElement(
          a.WV.div,
          { ...t, ref: n },
          Array.from({ length: Math.floor((o - l) / i) + 1 }).map((t, n) =>
            e(n),
          ),
        );
      });
      D.displayName = "SliderSteps";
      let P = (0, l.createReactComponent)(a.v$, {
          events: N,
          domEventsRegex: /^onMedia/,
        }),
        B = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(P, { ...t, ref: n }, (t) =>
            r.createElement(a.WV.div, { ...t }, e),
          ),
        );
      B.displayName = "VolumeSlider";
      let A = (0, l.createReactComponent)(a.e0),
        H = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(A, { ...t }, (t) =>
            r.createElement(
              a.WV.div,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      H.displayName = "Thumbnail";
      let F = r.forwardRef(({ children: e, ...t }, n) => {
        let {
            src: o,
            img: i,
            crossOrigin: s,
          } = (0, l.useStateContext)(a.e0.state),
          u = (0, l.useSignal)(o),
          c = (0, l.useSignal)(s);
        return r.createElement(
          a.WV.img,
          { crossOrigin: c, ...t, src: u, ref: (0, l.composeRefs)(i.set, n) },
          e,
        );
      });
      F.displayName = "ThumbnailImg";
      let O = r.createContext({ $chapters: (0, l.signal)(null) });
      O.displayName = "TimeSliderContext";
      let Z = (0, l.createReactComponent)(a.bj, {
          events: N,
          domEventsRegex: /^onMedia/,
        }),
        W = r.forwardRef(({ children: e, ...t }, n) => {
          let o = r.useMemo(() => (0, l.signal)(null), []);
          return r.createElement(
            O.Provider,
            { value: { $chapters: o } },
            r.createElement(Z, { ...t, ref: n }, (t) =>
              r.createElement(a.WV.div, { ...t }, e),
            ),
          );
        });
      W.displayName = "TimeSlider";
      let j = (0, l.createReactComponent)(a.Zf),
        z = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(j, { ...t }, (t, o) =>
            r.createElement(
              a.WV.div,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              r.createElement(U, { instance: o }, e),
            ),
          ),
        );
      function U({ instance: e, children: t }) {
        let n = (0, l.useSignal)(() => e.cues, e),
          o = r.useRef([]),
          i = r.useRef(),
          { $chapters: s } = r.useContext(O);
        return (
          i.current ||
            (i.current = (function (e = 0, t = 0, n = "") {
              return a.W6
                ? {
                    startTime: e,
                    endTime: t,
                    text: n,
                    addEventListener: l.noop,
                    removeEventListener: l.noop,
                    dispatchEvent: l.noop,
                  }
                : new window.VTTCue(e, t, n);
            })()),
          r.useEffect(() => (s.set(e), () => void s.set(null)), [e]),
          r.useEffect(() => {
            e.setRefs(o.current);
          }, [n]),
          t(n.length ? n : [i.current], (e) => {
            if (!e) {
              o.current.length = 0;
              return;
            }
            o.current.push(e);
          })
        );
      }
      (z.displayName = "SliderChapters"),
        (U.displayName = "SliderChapterTracks");
      let G = r.forwardRef(({ children: e, ...t }, n) => {
        let { $chapters: o } = r.useContext(O),
          [i, s] = r.useState();
        return (
          r.useEffect(
            () =>
              (0, l.effect)(() => {
                let e = o(),
                  t = e?.activePointerCue || e?.activeCue;
                s(t?.text || "");
              }),
            [],
          ),
          r.createElement(a.WV.div, { ...t, ref: n }, i, e)
        );
      });
      G.displayName = "SliderChapterTitle";
      let q = r.forwardRef((e, t) =>
        r.createElement(a.WV.div, { ...e, ref: t }),
      );
      q.displayName = "SliderProgress";
      let K = (0, l.createReactComponent)(a.dc),
        _ = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(K, { ...t }, (t) =>
            r.createElement(
              a.WV.div,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      _.displayName = "SliderThumbnail";
      let Q = { Root: _, Img: F },
        J = (0, l.createReactComponent)(a.eV, {
          events: ["onCanPlay", "onError"],
        });
      r.forwardRef(({ children: e, ...t }, n) =>
        r.createElement(J, { ...t }, (t, a) =>
          r.createElement(
            Y,
            { ...t, instance: a, ref: (0, l.composeRefs)(t.ref, n) },
            e,
          ),
        ),
      ).displayName = "SliderVideo";
      let Y = r.forwardRef(({ instance: e, children: t, ...n }, o) => {
        let { canLoad: i } = (0, l.useStateContext)(a.nA),
          { src: s, video: u, crossOrigin: c } = e.$state,
          d = (0, l.useSignal)(s),
          f = (0, l.useSignal)(i),
          m = (0, l.useSignal)(c);
        return r.createElement(
          a.WV.video,
          {
            style: { maxWidth: "unset" },
            ...n,
            src: d || void 0,
            muted: !0,
            playsInline: !0,
            preload: f ? "auto" : "none",
            crossOrigin: m || void 0,
            ref: (0, l.composeRefs)(u.set, o),
          },
          t,
        );
      });
      Y.displayName = "SliderVideoProvider";
      let X = (0, l.createReactComponent)(a.jh, { events: ["onChange"] }),
        ee = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(X, { ...t, ref: n }, (t) =>
            r.createElement(a.WV.div, { ...t }, e),
          ),
        );
      ee.displayName = "RadioGroup";
      let et = (0, l.createReactComponent)(a.hA, {
          events: ["onChange", "onSelect"],
        }),
        en = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(et, { ...t }, (t) =>
            r.createElement(
              a.WV.div,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      en.displayName = "RadioItem";
      let er = "undefined" == typeof document,
        el = (0, l.createReactComponent)(a.ib, {
          events: ["onOpen", "onClose"],
          domEventsRegex: /^onMedia/,
        }),
        ea = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(el, { ...t, ref: n }, (t, n) =>
            r.createElement(
              a.WV.div,
              {
                ...t,
                style: {
                  display: n.isSubmenu ? void 0 : "contents",
                  ...t.style,
                },
              },
              e,
            ),
          ),
        );
      ea.displayName = "Menu";
      let eo = (0, l.createReactComponent)(a.LD, { events: ["onSelect"] }),
        ei = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(eo, { ...t }, (t) =>
            r.createElement(
              a.WV.button,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      ei.displayName = "MenuButton";
      let es = r.forwardRef(
        ({ container: e = null, disabled: t = !1, children: n, ...i }, s) => {
          let u = (0, a.j9)("fullscreen"),
            c = r.useMemo(
              () =>
                er
                  ? null
                  : (((0, l.isString)(e) ? document.querySelector(e) : e) ??
                    document.body),
              [e],
            );
          return !c || ("fullscreen" === t ? u : t)
            ? n
            : (0, o.createPortal)(
                r.createElement(
                  a.WV.div,
                  { ...i, style: { display: "contents", ...i.style }, ref: s },
                  n,
                ),
                c,
              );
        },
      );
      es.displayName = "MenuPortal";
      let eu = (0, l.createReactComponent)(a.ZJ),
        ec = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(eu, { ...t }, (t) =>
            r.createElement(
              a.WV.div,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      ec.displayName = "MenuItems";
      let ed = (0, l.createReactComponent)(a.F$);
      r.forwardRef(({ children: e, ...t }, n) =>
        r.createElement(ed, { ...t }, (t) =>
          r.createElement(
            a.WV.div,
            { ...t, ref: (0, l.composeRefs)(t.ref, n) },
            e,
          ),
        ),
      ).displayName = "MenuItem";
      let ef = (0, l.createReactComponent)(a.Id, {
          events: ["onWillTrigger", "onTrigger"],
        }),
        em = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(ef, { ...t, ref: n }, (t) =>
            r.createElement(a.WV.div, { ...t }, e),
          ),
        );
      em.displayName = "Gesture";
      let ep = (0, l.createReactComponent)(a.gV),
        eh = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(ep, { ...t }, (t, a) =>
            r.createElement(
              eC,
              { ...t, instance: a, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      eh.displayName = "Time";
      let eC = r.forwardRef(({ instance: e, children: t, ...n }, o) => {
        let { timeText: i } = e.$state,
          s = (0, l.useSignal)(i);
        return r.createElement(a.WV.div, { ...n, ref: o }, s, t);
      });
      function eg() {
        let e = i();
        return e?.player || null;
      }
      function ev() {
        let e = i(),
          { audioTracks: t, audioTrack: n } = e.$state,
          a = (0, l.useSignal)(t);
        return (
          (0, l.useSignal)(n),
          r.useMemo(() => {
            let r = a.map((r) => ({
              track: r,
              label: r.label,
              value: ey(r),
              get selected() {
                return n() === r;
              },
              select(n) {
                let l = t().indexOf(r);
                l >= 0 && e.remote.changeAudioTrack(l, n);
              },
            }));
            return (
              Object.defineProperty(r, "disabled", {
                get: () => r.length <= 1,
              }),
              Object.defineProperty(r, "selectedTrack", { get: () => n() }),
              Object.defineProperty(r, "selectedValue", {
                get() {
                  let e = n();
                  return e ? ey(e) : void 0;
                },
              }),
              r
            );
          }, [a])
        );
      }
      function ey(e) {
        return e.label.toLowerCase();
      }
      function eE({ off: e = !0 } = {}) {
        let t = i(),
          { textTracks: n, textTrack: o } = t.$state,
          s = (0, l.useSignal)(n);
        return (
          (0, l.useSignal)(o),
          r.useMemo(() => {
            let r = s.filter(a.nl),
              i = r.map((e) => ({
                track: e,
                label: e.label,
                value: eb(e),
                get selected() {
                  return o() === e;
                },
                select(r) {
                  let l = n().indexOf(e);
                  l >= 0 && t.remote.changeTextTrackMode(l, "showing", r);
                },
              }));
            return (
              e &&
                i.unshift({
                  track: null,
                  label: (0, l.isString)(e) ? e : "Off",
                  value: "off",
                  get selected() {
                    return !o();
                  },
                  select(e) {
                    t.remote.toggleCaptions(e);
                  },
                }),
              Object.defineProperty(i, "disabled", { get: () => !r.length }),
              Object.defineProperty(i, "selectedTrack", { get: () => o() }),
              Object.defineProperty(i, "selectedValue", {
                get() {
                  let e = o();
                  return e ? eb(e) : "off";
                },
              }),
              i
            );
          }, [s])
        );
      }
      function eb(e) {
        return e.id + ":" + e.kind + "-" + e.label.toLowerCase();
      }
      eC.displayName = "TimeText";
    },
    98330: function (e, t, n) {
      n.d(t, {
        aj: function () {
          return tv;
        },
      });
      var r = n(2265),
        l = n(17015),
        a = n(39684),
        o = n(84283);
      let i = (0, l.createReactComponent)(a.bx, { events: ["onChange"] }),
        s = r.forwardRef(({ style: e, children: t, ...n }, o) =>
          r.createElement(i, { ...n }, (n) =>
            r.createElement(
              a.WV.div,
              {
                ...n,
                style: { display: "contents", ...e },
                ref: (0, l.composeRefs)(n.ref, o),
              },
              t,
            ),
          ),
        );
      s.displayName = "MediaAnnouncer";
      let u = (0, l.createReactComponent)(a.il),
        c = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(u, { ...t }, (t) =>
            r.createElement(
              a.WV.div,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      c.displayName = "Controls";
      let d = (0, l.createReactComponent)(a.S3),
        f = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(d, { ...t }, (t) =>
            r.createElement(
              a.WV.div,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      f.displayName = "ControlsGroup";
      let m = (0, l.createReactComponent)(a.TO);
      function p({ children: e, ...t }) {
        return r.createElement(m, { ...t }, e);
      }
      p.displayName = "Tooltip";
      let h = (0, l.createReactComponent)(a.qG),
        C = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(h, { ...t }, (t) =>
            r.createElement(
              a.WV.button,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      C.displayName = "TooltipTrigger";
      let g = (0, l.createReactComponent)(a.fZ),
        v = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(g, { ...t }, (t) =>
            r.createElement(
              a.WV.div,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      v.displayName = "TooltipContent";
      let y = (0, l.createReactComponent)(a.gq, { domEventsRegex: /^onMedia/ }),
        E = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(y, { ...t }, (t) =>
            r.createElement(
              a.WV.button,
              { ...t, ref: (0, l.composeRefs)(t.ref, n) },
              e,
            ),
          ),
        );
      E.displayName = "GoogleCastButton";
      let b = (0, l.createReactComponent)(a.Vi, {
          events: o.LD,
          domEventsRegex: /^onMedia/,
        }),
        w = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(b, { ...t, ref: n }, (t) =>
            r.createElement(a.WV.div, { ...t }, e),
          ),
        );
      (w.displayName = "QualitySlider"), o.MB, o.Rg, o.bU, o.fQ, o.Su, o.B4;
      let $ = (0, l.createReactComponent)(a._e, {
          events: o.LD,
          domEventsRegex: /^onMedia/,
        }),
        N = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement($, { ...t, ref: n }, (t) =>
            r.createElement(a.WV.div, { ...t }, e),
          ),
        );
      (N.displayName = "AudioGainSlider"), o.MB, o.Rg, o.bU, o.fQ, o.Su, o.B4;
      let x = (0, l.createReactComponent)(a.WU, {
          events: o.LD,
          domEventsRegex: /^onMedia/,
        }),
        S = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(x, { ...t, ref: n }, (t) =>
            r.createElement(a.WV.div, { ...t }, e),
          ),
        );
      (S.displayName = "SpeedSlider"), o.MB, o.Rg, o.bU, o.fQ, o.Su, o.B4;
      let L = r.forwardRef(({ children: e, ...t }, n) => {
        let l = (0, a.j9)("title");
        return r.createElement(a.WV.span, { ...t, ref: n }, l, e);
      });
      function M(e) {
        let [t, n] = r.useState([]);
        return (
          r.useEffect(() => {
            if (!e) {
              n([]);
              return;
            }
            function t() {
              n(e.activeCues);
            }
            return t(), (0, l.listenEvent)(e, "cue-change", t);
          }, [e]),
          t
        );
      }
      function k(e) {
        let t = (0, o.kH)(),
          [n, l] = r.useState(null);
        return r.useEffect(() => (0, a.lk)(t.textTracks, e, l), [e]), n;
      }
      function R() {
        let e = M(k("chapters"));
        return e[0]?.text || "";
      }
      L.displayName = "Title";
      let V = r.forwardRef(({ defaultText: e = "", children: t, ...n }, l) => {
        let o = R();
        return r.createElement(a.WV.span, { ...n, ref: l }, o || e, t);
      });
      V.displayName = "ChapterTitle";
      let I = (0, l.createReactComponent)(a.al),
        T = r.forwardRef(({ children: e, ...t }, n) =>
          r.createElement(I, { ...t, ref: n }, (t) =>
            r.createElement(a.WV.div, { ...t }, e),
          ),
        );
      T.displayName = "Captions";
      let D = r.forwardRef(({ size: e = 96, children: t, ...n }, l) =>
          r.createElement(
            "svg",
            {
              width: e,
              height: e,
              fill: "none",
              viewBox: "0 0 120 120",
              "aria-hidden": "true",
              "data-part": "root",
              ...n,
              ref: l,
            },
            t,
          ),
        ),
        P = r.forwardRef(({ width: e = 8, children: t, ...n }, l) =>
          r.createElement(
            "circle",
            {
              cx: "60",
              cy: "60",
              r: "54",
              stroke: "currentColor",
              strokeWidth: e,
              "data-part": "track",
              ...n,
              ref: l,
            },
            t,
          ),
        ),
        B = r.forwardRef(
          ({ width: e = 8, fillPercent: t = 50, children: n, ...l }, a) =>
            r.createElement(
              "circle",
              {
                cx: "60",
                cy: "60",
                r: "54",
                stroke: "currentColor",
                pathLength: "100",
                strokeWidth: e,
                strokeDasharray: 100,
                strokeDashoffset: 100 - t,
                "data-part": "track-fill",
                ...l,
                ref: a,
              },
              n,
            ),
        );
      function A(e, t = []) {
        let n = (0, l.useReactScope)();
        return r.useMemo(
          () => (0, l.scoped)(() => (0, l.signal)(e), n),
          [n, ...t],
        );
      }
      function H(e, t = []) {
        let n = (0, l.useReactScope)();
        return r.useMemo(
          () => (0, l.scoped)(() => (0, l.computed)(e), n),
          [n, ...t],
        );
      }
      function F(e, t) {
        r.useEffect(() => {
          if (!e) return;
          t();
          let n = new ResizeObserver((0, l.animationFrameThrottle)(t));
          return n.observe(e), () => n.disconnect();
        }, [e, t]);
      }
      function O(e) {
        let t = (0, o.uY)();
        r.useEffect(() => {
          if (t)
            return (0, l.effect)(() => {
              let n = t.$el;
              return (
                n?.setAttribute("data-layout", e),
                () => n?.removeAttribute("data-layout")
              );
            });
        }, [t]);
      }
      var Z = n(54887);
      let W = (0, l.signal)(null),
        j = (0, l.signal)(null);
      (0, l.signal)(null);
      let z = r.createContext({});
      function U() {
        return r.useContext(z);
      }
      function G(e) {
        let { translations: t } = U();
        return t?.[e] ?? e;
      }
      function q(e) {
        let t = (function () {
          let [e, t] = r.useState("dark");
          return (
            r.useEffect(() => {
              let e = window.matchMedia("(prefers-color-scheme: light)");
              function n() {
                t(e.matches ? "light" : "dark");
              }
              return n(), (0, l.listenEvent)(e, "change", n);
            }, []),
            e
          );
        })();
        return "default" === e ? null : "system" === e ? t : e;
      }
      function K({ type: e, smLayoutWhen: t, renderLayout: n }) {
        let i = r.forwardRef(
          (
            {
              children: i,
              className: s,
              disableTimeSlider: u = !1,
              hideQualityBitrate: c = !1,
              icons: d,
              colorScheme: f = "system",
              download: m = null,
              menuContainer: p = null,
              menuGroup: h = "bottom",
              noAudioGain: C = !1,
              audioGains: g = { min: 0, max: 300, step: 25 },
              noGestures: v = !1,
              noKeyboardAnimations: y = !1,
              noModal: E = !1,
              noScrubGesture: b,
              playbackRates: w = { min: 0, max: 2, step: 0.25 },
              seekStep: $ = 10,
              showMenuDelay: N,
              showTooltipDelay: x = 700,
              sliderChaptersMinWidth: S = 325,
              slots: L,
              smallLayoutWhen: M = t,
              thumbnails: k = null,
              translations: R,
              ...V
            },
            I,
          ) => {
            let T = (0, o.kH)(),
              D = (0, l.useSignal)(T.$props.load),
              P = (0, a.j9)("canLoad"),
              B = (0, a.j9)("viewType"),
              F = (0, a.j9)("streamType"),
              O = H(() => ((0, l.isBoolean)(M) ? M : M(T.player.state)), [M]),
              Z = A(!0),
              W = A(!0),
              j = B === e,
              U = O(),
              G = (0, l.isBoolean)(M),
              K = "play" === D && !P,
              _ = P || G || K,
              Q = q(f),
              J = A(null);
            return (
              (0, l.useSignal)(O),
              r.createElement(
                "div",
                {
                  ...V,
                  className:
                    `vds-${e}-layout` + (Q ? ` ${Q}` : "") + (s ? ` ${s}` : ""),
                  "data-match": j ? "" : null,
                  "data-sm": U ? "" : null,
                  "data-lg": U ? null : "",
                  "data-size": U ? "sm" : "lg",
                  "data-no-scrub-gesture": b ? "" : null,
                  ref: (0, l.composeRefs)(J.set, I),
                },
                _ && j
                  ? r.createElement(
                      z.Provider,
                      {
                        value: {
                          disableTimeSlider: u,
                          hideQualityBitrate: c,
                          icons: d,
                          colorScheme: f,
                          download: m,
                          isSmallLayout: U,
                          menuContainer: p,
                          menuGroup: h,
                          noAudioGain: C,
                          audioGains: g,
                          layoutEl: J,
                          noGestures: v,
                          noKeyboardAnimations: y,
                          noModal: E,
                          noScrubGesture: b,
                          showMenuDelay: N,
                          showTooltipDelay: x,
                          sliderChaptersMinWidth: S,
                          slots: L,
                          seekStep: $,
                          playbackRates: w,
                          thumbnails: k,
                          translations: R,
                          userPrefersAnnouncements: Z,
                          userPrefersKeyboardAnimations: W,
                        },
                      },
                      n({ streamType: F, isSmallLayout: U, isLoadLayout: K }),
                      i,
                    )
                  : null,
              )
            );
          },
        );
        return (i.displayName = "DefaultMediaLayout"), i;
      }
      function _() {
        return r.useContext(z).slots;
      }
      function Q() {
        return r.useContext(z).slots;
      }
      function J(e, t, n) {
        let a = e?.[t],
          o = (0, l.uppercaseFirstChar)(t);
        return r.createElement(
          r.Fragment,
          null,
          e?.[`before${o}`],
          (0, l.isUndefined)(a) ? n : a,
          e?.[`after${o}`],
        );
      }
      function Y() {
        let { userPrefersAnnouncements: e, translations: t } = U();
        return (0, l.useSignal)(e)
          ? r.createElement(s, { translations: t })
          : null;
      }
      function X({ content: e, placement: t, children: n }) {
        let { showTooltipDelay: l } = U();
        return r.createElement(
          p,
          { showDelay: l },
          r.createElement(C, { asChild: !0 }, n),
          r.createElement(
            v,
            { className: "vds-tooltip-content", placement: t },
            e,
          ),
        );
      }
      function ee({ tooltip: e }) {
        let { icons: t } = U(),
          n = G("Play"),
          l = G("Pause"),
          i = (0, a.j9)("paused"),
          s = (0, a.j9)("ended");
        return r.createElement(
          X,
          { content: i ? n : l, placement: e },
          r.createElement(
            o.JM,
            { className: "vds-play-button vds-button", "aria-label": n },
            s
              ? r.createElement(t.PlayButton.Replay, { className: "vds-icon" })
              : i
                ? r.createElement(t.PlayButton.Play, { className: "vds-icon" })
                : r.createElement(t.PlayButton.Pause, {
                    className: "vds-icon",
                  }),
          ),
        );
      }
      (z.displayName = "DefaultLayoutContext"),
        (Y.displayName = "DefaultAnnouncer"),
        (X.displayName = "DefaultTooltip"),
        (ee.displayName = "DefaultPlayButton");
      let et = r.forwardRef(({ tooltip: e }, t) => {
        let { icons: n } = U(),
          l = G("Mute"),
          i = G("Unmute"),
          s = (0, a.j9)("muted"),
          u = (0, a.j9)("volume");
        return r.createElement(
          X,
          { content: s ? i : l, placement: e },
          r.createElement(
            o.tg,
            {
              className: "vds-mute-button vds-button",
              "aria-label": l,
              ref: t,
            },
            s || 0 == u
              ? r.createElement(n.MuteButton.Mute, { className: "vds-icon" })
              : u < 0.5
                ? r.createElement(n.MuteButton.VolumeLow, {
                    className: "vds-icon",
                  })
                : r.createElement(n.MuteButton.VolumeHigh, {
                    className: "vds-icon",
                  }),
          ),
        );
      });
      function en({ tooltip: e }) {
        let { icons: t } = U(),
          n = G("Captions"),
          l = G("Closed-Captions On"),
          i = G("Closed-Captions Off"),
          s = (0, a.j9)("textTrack"),
          u = s && (0, a.nl)(s);
        return r.createElement(
          X,
          { content: u ? l : i, placement: e },
          r.createElement(
            o.os,
            { className: "vds-caption-button vds-button", "aria-label": n },
            u
              ? r.createElement(t.CaptionButton.On, { className: "vds-icon" })
              : r.createElement(t.CaptionButton.Off, { className: "vds-icon" }),
          ),
        );
      }
      function er({ tooltip: e }) {
        let { icons: t } = U(),
          n = G("PiP"),
          l = G("Enter PiP"),
          i = G("Exit PiP"),
          s = (0, a.j9)("pictureInPicture");
        return r.createElement(
          X,
          { content: s ? i : l, placement: e },
          r.createElement(
            o.bD,
            { className: "vds-pip-button vds-button", "aria-label": n },
            s
              ? r.createElement(t.PIPButton.Exit, { className: "vds-icon" })
              : r.createElement(t.PIPButton.Enter, { className: "vds-icon" }),
          ),
        );
      }
      function el({ tooltip: e }) {
        let { icons: t } = U(),
          n = G("Fullscreen"),
          l = G("Enter Fullscreen"),
          i = G("Exit Fullscreen"),
          s = (0, a.j9)("fullscreen");
        return r.createElement(
          X,
          { content: s ? i : l, placement: e },
          r.createElement(
            o.dY,
            { className: "vds-fullscreen-button vds-button", "aria-label": n },
            s
              ? r.createElement(t.FullscreenButton.Exit, {
                  className: "vds-icon",
                })
              : r.createElement(t.FullscreenButton.Enter, {
                  className: "vds-icon",
                }),
          ),
        );
      }
      function ea({ backward: e, tooltip: t }) {
        let { icons: n, seekStep: l } = U(),
          a = G("Seek Forward"),
          i = G("Seek Backward"),
          s = (e ? -1 : 1) * l,
          u = s >= 0 ? a : i;
        return r.createElement(
          X,
          { content: u, placement: t },
          r.createElement(
            o.R6,
            {
              className: "vds-seek-button vds-button",
              seconds: s,
              "aria-label": u,
            },
            s >= 0
              ? r.createElement(n.SeekButton.Forward, { className: "vds-icon" })
              : r.createElement(n.SeekButton.Backward, {
                  className: "vds-icon",
                }),
          ),
        );
      }
      function eo({ tooltip: e }) {
        let { icons: t } = U(),
          n = G("AirPlay"),
          i = (0, a.j9)("remotePlaybackState"),
          s = G((0, l.uppercaseFirstChar)(i)),
          u = `${n} ${s}`,
          c =
            ("connecting" === i
              ? t.AirPlayButton.Connecting
              : "connected" === i
                ? t.AirPlayButton.Connected
                : null) ?? t.AirPlayButton.Default;
        return r.createElement(
          X,
          { content: n, placement: e },
          r.createElement(
            o.Gf,
            { className: "vds-airplay-button vds-button", "aria-label": u },
            r.createElement(c, { className: "vds-icon" }),
          ),
        );
      }
      function ei({ tooltip: e }) {
        let { icons: t } = U(),
          n = G("Google Cast"),
          o = (0, a.j9)("remotePlaybackState"),
          i = G((0, l.uppercaseFirstChar)(o)),
          s = `${n} ${i}`,
          u =
            ("connecting" === o
              ? t.GoogleCastButton.Connecting
              : "connected" === o
                ? t.GoogleCastButton.Connected
                : null) ?? t.GoogleCastButton.Default;
        return r.createElement(
          X,
          { content: n, placement: e },
          r.createElement(
            E,
            { className: "vds-google-cast-button vds-button", "aria-label": s },
            r.createElement(u, { className: "vds-icon" }),
          ),
        );
      }
      function es() {
        let e = (0, a.j9)("live"),
          t = G("Skip To Live"),
          n = G("LIVE");
        return e
          ? r.createElement(
              o.Bn,
              { className: "vds-live-button", "aria-label": t },
              r.createElement("span", { className: "vds-live-button-text" }, n),
            )
          : null;
      }
      function eu() {
        let { download: e, icons: t } = U(),
          n = (0, a.j9)("source"),
          l = (0, a.j9)("title"),
          o = (0, a.gU)({ title: l, src: n, download: e }),
          i = G("Download");
        return o
          ? r.createElement(
              X,
              { content: i, placement: "top" },
              r.createElement(
                "a",
                {
                  role: "button",
                  className: "vds-download-button vds-button",
                  "aria-label": i,
                  href: o.url + `?download=${o.name}`,
                  download: o.name,
                  target: "_blank",
                },
                t.DownloadButton
                  ? r.createElement(t.DownloadButton.Default, {
                      className: "vds-icon",
                    })
                  : null,
              ),
            )
          : null;
      }
      function ec() {
        let e = G("Captions look like this");
        return r.createElement(T, {
          className: "vds-captions",
          exampleText: e,
        });
      }
      function ed() {
        return r.createElement("div", { className: "vds-controls-spacer" });
      }
      function ef() {
        let { layoutEl: e } = U(),
          t = (0, l.useSignal)(e);
        return r.useMemo(() => t?.closest("dialog"), [t]);
      }
      function em({ tooltip: e, placement: t, portalClass: n = "" }) {
        let {
            showMenuDelay: i,
            noModal: s,
            isSmallLayout: u,
            icons: c,
            menuGroup: d,
            menuContainer: f,
            colorScheme: m,
          } = U(),
          p = G("Chapters"),
          h = (function () {
            let e = (0, o.kH)(),
              t = k("chapters"),
              n = (function (e) {
                let [t, n] = r.useState([]);
                return (
                  r.useEffect(() => {
                    if (!e) return;
                    function t(e) {
                      n([...e.cues]);
                    }
                    let r = (0, l.createDisposalBin)();
                    return (
                      r.add(
                        (0, l.listenEvent)(e, "add-cue", () => t(e)),
                        (0, l.listenEvent)(e, "remove-cue", () => t(e)),
                      ),
                      t(e),
                      () => {
                        r.empty(), n([]);
                      }
                    );
                  }, [e]),
                  t
                );
              })(t),
              i = (0, l.useSignal)(e.$state.clipStartTime),
              s = (0, l.useSignal)(e.$state.clipEndTime) || 1 / 0;
            return (
              M(t),
              r.useMemo(() => {
                let r = t
                  ? n
                      .filter((e) => e.startTime <= s && e.endTime >= i)
                      .map((n, r) => {
                        let o = null,
                          u;
                        return {
                          cue: n,
                          label: n.text,
                          value: r.toString(),
                          startTimeText: (0, a.mr)(
                            Math.max(0, n.startTime - i),
                          ),
                          durationText: (0, a.V6)(
                            Math.min(s, n.endTime) - Math.max(i, n.startTime),
                          ),
                          get selected() {
                            return n === t.activeCues[0];
                          },
                          setProgressVar(r) {
                            if (!r || n !== t.activeCues[0]) {
                              u?.(),
                                (u = void 0),
                                r?.style.setProperty("--progress", "0%"),
                                (o = null);
                              return;
                            }
                            o !== r &&
                              ((o = r),
                              u?.(),
                              (u = (0, l.effect)(() => {
                                let { realCurrentTime: t } = e.$state,
                                  l = t(),
                                  a = Math.max(i, n.startTime),
                                  o = Math.min(s, n.endTime) - a;
                                r.style.setProperty(
                                  "--progress",
                                  ((Math.max(0, l - a) / o) * 100).toFixed(3) +
                                    "%",
                                );
                              })));
                          },
                          select(t) {
                            e.remote.seek(n.startTime - i, t);
                          },
                        };
                      })
                  : [];
                return (
                  Object.defineProperty(r, "selectedValue", {
                    get() {
                      let e = r.findIndex((e) => e.selected);
                      return (e >= 0 ? e : 0).toString();
                    },
                  }),
                  r
                );
              }, [n, i, s])
            );
          })(),
          C = !h.length,
          { thumbnails: g } = U(),
          v = (0, a.j9)("currentSrc"),
          y = (0, a.j9)("viewType"),
          E = (0, l.useSignal)(W),
          b = q(m),
          [w, $] = r.useState(!1),
          N = ef();
        if (C) return null;
        let x = r.createElement(
          o.ob,
          {
            className: "vds-chapters-menu-items vds-menu-items",
            placement: t,
            offset: u || "bottom" !== d || "video" !== y ? 0 : 26,
          },
          w
            ? r.createElement(
                o.fh,
                {
                  className: "vds-chapters-radio-group vds-radio-group",
                  value: h.selectedValue,
                  "data-thumbnails": g ? "" : null,
                },
                h.map(
                  ({
                    cue: e,
                    label: t,
                    value: n,
                    startTimeText: l,
                    durationText: i,
                    select: s,
                    setProgressVar: u,
                  }) =>
                    r.createElement(
                      o.ck,
                      {
                        className: "vds-chapter-radio vds-radio",
                        value: n,
                        key: n,
                        onSelect: s,
                        ref: u,
                      },
                      g
                        ? r.createElement(
                            o.fC,
                            {
                              src: g,
                              className: "vds-thumbnail",
                              time: e.startTime,
                            },
                            r.createElement(o.Ei, null),
                          )
                        : E && (0, a.r4)(v)
                          ? r.createElement(E, {
                              className: "vds-thumbnail",
                              frame: e.startTime * v.fps,
                            })
                          : null,
                      r.createElement(
                        "div",
                        { className: "vds-chapter-radio-content" },
                        r.createElement(
                          "span",
                          { className: "vds-chapter-radio-label" },
                          t,
                        ),
                        r.createElement(
                          "span",
                          { className: "vds-chapter-radio-start-time" },
                          l,
                        ),
                        r.createElement(
                          "span",
                          { className: "vds-chapter-radio-duration" },
                          i,
                        ),
                      ),
                    ),
                ),
              )
            : null,
        );
        return r.createElement(
          o.U7,
          {
            className: "vds-chapters-menu vds-menu",
            showDelay: i,
            onOpen: function () {
              (0, Z.flushSync)(() => {
                $(!0);
              });
            },
            onClose: function () {
              $(!1);
            },
          },
          r.createElement(
            X,
            { content: p, placement: e },
            r.createElement(
              o.zx,
              {
                className: "vds-menu-button vds-button",
                disabled: C,
                "aria-label": p,
              },
              r.createElement(c.Menu.Chapters, { className: "vds-icon" }),
            ),
          ),
          s || !u
            ? x
            : r.createElement(
                o.h_,
                {
                  container: f ?? N,
                  className: n + (b ? ` ${b}` : ""),
                  disabled: "fullscreen",
                  "data-sm": u ? "" : null,
                  "data-lg": u ? null : "",
                  "data-size": u ? "sm" : "lg",
                },
                x,
              ),
        );
      }
      (et.displayName = "DefaultMuteButton"),
        (en.displayName = "DefaultCaptionButton"),
        (er.displayName = "DefaultPIPButton"),
        (el.displayName = "DefaultFullscreenButton"),
        (ea.displayName = "DefaultSeekButton"),
        (eo.displayName = "DefaultAirPlayButton"),
        (ei.displayName = "DefaultGoogleCastButton"),
        (es.displayName = "DefaultLiveButton"),
        (eu.displayName = "DefaultDownloadButton"),
        (ec.displayName = "DefaultCaptions"),
        (ed.displayName = "DefaultControlsSpacer"),
        (em.displayName = "DefaultChaptersMenu");
      let ep = { type: "color" },
        eh = {
          type: "radio",
          values: {
            "Monospaced Serif": "mono-serif",
            "Proportional Serif": "pro-serif",
            "Monospaced Sans-Serif": "mono-sans",
            "Proportional Sans-Serif": "pro-sans",
            Casual: "casual",
            Cursive: "cursive",
            "Small Capitals": "capitals",
          },
        },
        eC = {
          type: "slider",
          min: 0,
          max: 400,
          step: 25,
          upIcon: null,
          downIcon: null,
        },
        eg = {
          type: "slider",
          min: 0,
          max: 100,
          step: 5,
          upIcon: null,
          downIcon: null,
        },
        ev = {
          type: "radio",
          values: ["None", "Drop Shadow", "Raised", "Depressed", "Outline"],
        },
        ey = {
          fontFamily: "pro-sans",
          fontSize: "100%",
          textColor: "#ffffff",
          textOpacity: "100%",
          textShadow: "none",
          textBg: "#000000",
          textBgOpacity: "100%",
          displayBg: "#000000",
          displayBgOpacity: "0%",
        },
        eE = Object.keys(ey).reduce(
          (e, t) => ({ ...e, [t]: (0, l.signal)(ey[t]) }),
          {},
        );
      if (!a.W6)
        for (let e of Object.keys(eE)) {
          let t = localStorage.getItem(
            `vds-player:${(0, l.camelToKebabCase)(e)}`,
          );
          (0, l.isString)(t) && eE[e].set(t);
        }
      function eb() {
        for (let e of Object.keys(eE)) {
          let t = ey[e];
          eE[e].set(t);
        }
      }
      function ew(e) {
        let { style: t } = new Option();
        return (t.color = e), t.color.match(/\((.*?)\)/)[1].replace(/,/g, " ");
      }
      let e$ = !1,
        eN = new Set();
      function ex() {
        if (a.W6) return;
        let { player: e } = (0, a.kH)();
        eN.add(e),
          (0, l.onDispose)(() => eN.delete(e)),
          e$ ||
            ((0, l.scoped)(() => {
              for (let t of (0, l.keysOf)(eE)) {
                let n = eE[t],
                  r = ey[t],
                  a = `--media-user-${(0, l.camelToKebabCase)(t)}`,
                  o = `vds-player:${(0, l.camelToKebabCase)(t)}`;
                (0, l.effect)(() => {
                  let l = n(),
                    i = l === r,
                    s = i
                      ? null
                      : (function (e, t, n) {
                          switch (t) {
                            case "fontFamily":
                              let r = "capitals" === n ? "small-caps" : "";
                              return (
                                e.el?.style.setProperty(
                                  "--media-user-font-variant",
                                  r,
                                ),
                                (function (e) {
                                  switch (e) {
                                    case "mono-serif":
                                      return '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace';
                                    case "mono-sans":
                                      return '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace';
                                    case "pro-sans":
                                      return 'Roboto, "Arial Unicode Ms", Arial, Helvetica, Verdana, "PT Sans Caption", sans-serif';
                                    case "casual":
                                      return '"Comic Sans MS", Impact, Handlee, fantasy';
                                    case "cursive":
                                      return '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive';
                                    case "capitals":
                                      return '"Arial Unicode Ms", Arial, Helvetica, Verdana, "Marcellus SC", sans-serif + font-variant=small-caps';
                                    default:
                                      return '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif';
                                  }
                                })(n)
                              );
                            case "fontSize":
                            case "textOpacity":
                            case "textBgOpacity":
                            case "displayBgOpacity":
                              return (parseInt(n) / 100).toString();
                            case "textColor":
                              return `rgb(${ew(n)} / var(--media-user-text-opacity, 1))`;
                            case "textShadow":
                              return (function (e) {
                                switch (e) {
                                  case "drop shadow":
                                    return "rgb(34, 34, 34) 1.86389px 1.86389px 2.79583px, rgb(34, 34, 34) 1.86389px 1.86389px 3.72778px, rgb(34, 34, 34) 1.86389px 1.86389px 4.65972px";
                                  case "raised":
                                    return "rgb(34, 34, 34) 1px 1px, rgb(34, 34, 34) 2px 2px";
                                  case "depressed":
                                    return "rgb(204, 204, 204) 1px 1px, rgb(34, 34, 34) -1px -1px";
                                  case "outline":
                                    return "rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px, rgb(34, 34, 34) 0px 0px 1.86389px";
                                  default:
                                    return "";
                                }
                              })(n);
                            case "textBg":
                              return `rgb(${ew(n)} / var(--media-user-text-bg-opacity, 1))`;
                            case "displayBg":
                              return `rgb(${ew(n)} / var(--media-user-display-bg-opacity, 1))`;
                          }
                        })(e, t, l);
                  for (let e of eN) e.el?.style.setProperty(a, s);
                  i ? localStorage.removeItem(o) : localStorage.setItem(o, l);
                });
              }
            }, null),
            (e$ = !0));
      }
      function eS({ label: e, value: t, children: n }) {
        let l = r.useId();
        return e
          ? r.createElement(
              "section",
              {
                className: "vds-menu-section",
                role: "group",
                "aria-labelledby": l,
              },
              r.createElement(
                "div",
                { className: "vds-menu-section-title" },
                r.createElement("header", { id: l }, e),
                t
                  ? r.createElement(
                      "div",
                      { className: "vds-menu-section-value" },
                      t,
                    )
                  : null,
              ),
              r.createElement("div", { className: "vds-menu-section-body" }, n),
            )
          : r.createElement(
              "div",
              { className: "vds-menu-section" },
              r.createElement("div", { className: "vds-menu-section-body" }, n),
            );
      }
      function eL({ label: e, hint: t = "", Icon: n, disabled: l = !1 }) {
        let { icons: a } = r.useContext(z);
        return r.createElement(
          o.zx,
          { className: "vds-menu-item", disabled: l },
          r.createElement(a.Menu.ArrowLeft, {
            className: "vds-menu-close-icon vds-icon",
          }),
          n
            ? r.createElement(n, { className: "vds-menu-item-icon vds-icon" })
            : null,
          r.createElement("span", { className: "vds-menu-item-label" }, e),
          r.createElement("span", { className: "vds-menu-item-hint" }, t),
          r.createElement(a.Menu.ArrowRight, {
            className: "vds-menu-open-icon vds-icon",
          }),
        );
      }
      function eM({ label: e, children: t }) {
        return r.createElement(
          "div",
          { className: "vds-menu-item" },
          r.createElement("div", { className: "vds-menu-item-label" }, e),
          t,
        );
      }
      function ek({ value: e, options: t, onChange: n }) {
        let { icons: l } = U();
        return r.createElement(
          o.fh,
          { className: "vds-radio-group", value: e, onChange: n },
          t.map((e) =>
            r.createElement(
              o.ck,
              { className: "vds-radio", value: e.value, key: e.value },
              r.createElement(l.Menu.RadioCheck, { className: "vds-icon" }),
              r.createElement(
                "span",
                { className: "vds-radio-label", "data-part": "label" },
                e.label,
              ),
            ),
          ),
        );
      }
      function eR({
        label: e,
        value: t,
        UpIcon: n,
        DownIcon: l,
        children: a,
        isMin: o,
        isMax: i,
      }) {
        let s = e || t,
          u = r.createElement(
            r.Fragment,
            null,
            l ? r.createElement(l, { className: "vds-icon down" }) : null,
            a,
            n ? r.createElement(n, { className: "vds-icon up" }) : null,
          );
        return r.createElement(
          "div",
          {
            className: `vds-menu-item vds-menu-slider-item${s ? " group" : ""}`,
            "data-min": o ? "" : null,
            "data-max": i ? "" : null,
          },
          s
            ? r.createElement(
                r.Fragment,
                null,
                r.createElement(
                  "div",
                  { className: "vds-menu-slider-title" },
                  e ? r.createElement("div", null, e) : null,
                  t ? r.createElement("div", null, t) : null,
                ),
                r.createElement(
                  "div",
                  { className: "vds-menu-slider-body" },
                  u,
                ),
              )
            : u,
        );
      }
      function eV() {
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(o.fQ, { className: "vds-slider-track" }),
          r.createElement(o.Su, {
            className: "vds-slider-track-fill vds-slider-track",
          }),
          r.createElement(o.bU, { className: "vds-slider-thumb" }),
        );
      }
      function eI() {
        return r.createElement(o.Rg, { className: "vds-slider-steps" }, (e) =>
          r.createElement("div", {
            className: "vds-slider-step",
            key: String(e),
          }),
        );
      }
      function eT() {
        let e = G("Caption Styles"),
          t = (0, a.j9)("hasCaptions"),
          n = G("Font"),
          l = G("Text"),
          i = G("Text Background"),
          s = G("Display Background");
        return t
          ? r.createElement(
              o.U7,
              { className: "vds-font-menu vds-menu" },
              r.createElement(eL, { label: e }),
              r.createElement(
                o.ob,
                { className: "vds-font-style-items vds-menu-items" },
                r.createElement(
                  eS,
                  { label: n },
                  r.createElement(eD, null),
                  r.createElement(eP, null),
                ),
                r.createElement(
                  eS,
                  { label: l },
                  r.createElement(eB, null),
                  r.createElement(eH, null),
                  r.createElement(eA, null),
                ),
                r.createElement(
                  eS,
                  { label: i },
                  r.createElement(eF, null),
                  r.createElement(eO, null),
                ),
                r.createElement(
                  eS,
                  { label: s },
                  r.createElement(eZ, null),
                  r.createElement(eW, null),
                ),
                r.createElement(eS, null, r.createElement(eU, null)),
              ),
            )
          : null;
      }
      function eD() {
        return r.createElement(ej, {
          label: "Family",
          type: "fontFamily",
          option: eh,
        });
      }
      function eP() {
        let { icons: e } = U(),
          t = {
            ...eC,
            upIcon: e.Menu.FontSizeUp,
            downIcon: e.Menu.FontSizeDown,
          };
        return r.createElement(ej, {
          label: "Size",
          type: "fontSize",
          option: t,
        });
      }
      function eB() {
        return r.createElement(ej, {
          label: "Color",
          type: "textColor",
          option: ep,
        });
      }
      function eA() {
        let { icons: e } = U(),
          t = { ...eg, upIcon: e.Menu.OpacityUp, downIcon: e.Menu.OpacityDown };
        return r.createElement(ej, {
          label: "Opacity",
          type: "textOpacity",
          option: t,
        });
      }
      function eH() {
        return r.createElement(ej, {
          label: "Shadow",
          type: "textShadow",
          option: ev,
        });
      }
      function eF() {
        return r.createElement(ej, {
          label: "Color",
          type: "textBg",
          option: ep,
        });
      }
      function eO() {
        let { icons: e } = U(),
          t = { ...eg, upIcon: e.Menu.OpacityUp, downIcon: e.Menu.OpacityDown };
        return r.createElement(ej, {
          label: "Opacity",
          type: "textBgOpacity",
          option: t,
        });
      }
      function eZ() {
        return r.createElement(ej, {
          label: "Color",
          type: "displayBg",
          option: ep,
        });
      }
      function eW() {
        let { icons: e } = U(),
          t = { ...eg, upIcon: e.Menu.OpacityUp, downIcon: e.Menu.OpacityDown };
        return r.createElement(ej, {
          label: "Opacity",
          type: "displayBgOpacity",
          option: t,
        });
      }
      function ej({ label: e, option: t, type: n }) {
        let a = (0, o.uY)(),
          i = eE[n],
          s = (0, l.useSignal)(i),
          u = G(e),
          c = r.useCallback(() => {
            a?.dispatchEvent(new Event("vds-font-change"));
          }, [a]),
          d = r.useCallback(
            (e) => {
              i.set(e), c();
            },
            [i, c],
          );
        if ("color" === t.type)
          return r.createElement(
            eM,
            { label: u },
            r.createElement("input", {
              className: "vds-color-picker",
              type: "color",
              value: s,
              onChange: function (e) {
                d(e.target.value);
              },
            }),
          );
        if ("slider" === t.type) {
          let e = function (e) {
              d(e + "%");
            },
            { min: n, max: l, step: a, upIcon: i, downIcon: c } = t;
          return r.createElement(
            eR,
            {
              label: u,
              value: s,
              UpIcon: i,
              DownIcon: c,
              isMin: s === n + "%",
              isMax: s === l + "%",
            },
            r.createElement(
              o.A1,
              {
                className: "vds-slider",
                min: n,
                max: l,
                step: a,
                keyStep: a,
                value: parseInt(s),
                "aria-label": u,
                onValueChange: e,
                onDragValueChange: e,
              },
              r.createElement(eV, null),
              r.createElement(eI, null),
            ),
          );
        }
        return "radio" === t.type
          ? r.createElement(ez, {
              id: (0, l.camelToKebabCase)(n),
              label: u,
              value: s,
              values: t.values,
              onChange: d,
            })
          : null;
      }
      function ez({ id: e, label: t, value: n, values: a, onChange: i }) {
        let s = r.useMemo(
            () =>
              (0, l.isArray)(a)
                ? a.map((e) => ({ label: e, value: e.toLowerCase() }))
                : Object.keys(a).map((e) => ({ label: e, value: a[e] })),
            [a],
          ),
          { translations: u } = U(),
          c = r.useMemo(() => {
            let e = s.find((e) => e.value === n)?.label || "";
            return u?.[e] ?? e;
          }, [n, s]);
        return r.createElement(
          o.U7,
          { className: `vds-${e}-menu vds-menu` },
          r.createElement(eL, { label: t, hint: c }),
          r.createElement(
            o.ob,
            { className: "vds-menu-items" },
            r.createElement(ek, { value: n, options: s, onChange: i }),
          ),
        );
      }
      function eU() {
        let e = G("Reset");
        return r.createElement(
          "button",
          { className: "vds-menu-item", role: "menuitem", onClick: eb },
          r.createElement("span", { className: "vds-menu-item-label" }, e),
        );
      }
      function eG({
        label: e,
        checked: t,
        storageKey: n,
        defaultChecked: a = !1,
        onChange: o,
      }) {
        let [i, s] = r.useState(a),
          [u, c] = r.useState(!1);
        function d(e) {
          if (e && "button" in e && e?.button === 1) return;
          let t = !i;
          s(t),
            n && localStorage.setItem(n, t ? "1" : ""),
            o?.(t, e?.nativeEvent),
            c(!1);
        }
        return (
          r.useEffect(() => {
            let e = !!((n ? localStorage.getItem(n) : null) ?? a);
            s(e), o?.(e);
          }, []),
          r.useEffect(() => {
            (0, l.isBoolean)(t) && s(t);
          }, [t]),
          r.createElement("div", {
            className: "vds-menu-checkbox",
            role: "menuitemcheckbox",
            tabIndex: 0,
            "aria-label": e,
            "aria-checked": i ? "true" : "false",
            "data-active": u ? "" : null,
            onPointerUp: d,
            onPointerDown: function (e) {
              0 === e.button && c(!0);
            },
            onKeyDown: function (e) {
              (0, l.isKeyboardClick)(e.nativeEvent) && d();
            },
          })
        );
      }
      function eq({ slots: e }) {
        let t = G("Accessibility"),
          { icons: n } = U();
        return r.createElement(
          o.U7,
          { className: "vds-accessibility-menu vds-menu" },
          r.createElement(eL, { label: t, Icon: n.Menu.Accessibility }),
          r.createElement(
            o.ob,
            { className: "vds-menu-items" },
            J(e, "accessibilityMenuItemsStart", null),
            r.createElement(
              eS,
              null,
              r.createElement(eK, null),
              r.createElement(e_, null),
            ),
            r.createElement(eS, null, r.createElement(eT, null)),
            J(e, "accessibilityMenuItemsEnd", null),
          ),
        );
      }
      function eK() {
        let { userPrefersAnnouncements: e } = U(),
          t = G("Announcements");
        return r.createElement(
          eM,
          { label: t },
          r.createElement(eG, {
            label: t,
            defaultChecked: !0,
            storageKey: "vds-player::announcements",
            onChange: function (t) {
              e.set(t);
            },
          }),
        );
      }
      function e_() {
        let e = (0, a.j9)("viewType"),
          { userPrefersKeyboardAnimations: t, noKeyboardAnimations: n } = U(),
          l = G("Keyboard Animations");
        return "video" !== e || n
          ? null
          : r.createElement(
              eM,
              { label: l },
              r.createElement(eG, {
                label: l,
                defaultChecked: !0,
                storageKey: "vds-player::keyboard-animations",
                onChange: function (e) {
                  t.set(e);
                },
              }),
            );
      }
      function eQ({ slots: e }) {
        let t = G("Audio"),
          n = (0, a.j9)("canSetAudioGain"),
          l = (0, a.j9)("audioTracks"),
          { noAudioGain: i, icons: s } = U(),
          u = n && !i;
        return !u && l.length <= 1
          ? null
          : r.createElement(
              o.U7,
              { className: "vds-audio-menu vds-menu" },
              r.createElement(eL, { label: t, Icon: s.Menu.Audio }),
              r.createElement(
                o.ob,
                { className: "vds-menu-items" },
                J(e, "audioMenuItemsStart", null),
                r.createElement(e6, null),
                u ? r.createElement(eJ, null) : null,
                J(e, "audioMenuItemsEnd", null),
              ),
            );
      }
      function eJ() {
        let e = (0, a.j9)("audioGain"),
          t = G("Boost"),
          n = (0, a.j9)("canSetAudioGain"),
          { noAudioGain: l, icons: o } = U(),
          i = eY(),
          s = eX();
        return !n || l
          ? null
          : r.createElement(
              eS,
              { label: t, value: Math.round(((e ?? 1) - 1) * 100) + "%" },
              r.createElement(
                eR,
                {
                  UpIcon: o.Menu.AudioBoostUp,
                  DownIcon: o.Menu.AudioBoostDown,
                  isMin: ((e ?? 1) - 1) * 100 <= i,
                  isMax: ((e ?? 1) - 1) * 100 === s,
                },
                r.createElement(e1, null),
              ),
            );
      }
      function eY() {
        let { audioGains: e } = U();
        return ((0, l.isArray)(e) ? e[0] : e?.min) ?? 0;
      }
      function eX() {
        let { audioGains: e } = U();
        return ((0, l.isArray)(e) ? e[e.length - 1] : e?.max) ?? 300;
      }
      function e1() {
        let e = G("Audio Boost"),
          t = eY(),
          n = eX(),
          a = (function () {
            let { audioGains: e } = U();
            return ((0, l.isArray)(e) ? e[1] - e[0] : e?.step) || 25;
          })();
        return r.createElement(
          N,
          {
            className: "vds-audio-gain-slider vds-slider",
            "aria-label": e,
            min: t,
            max: n,
            step: a,
            keyStep: a,
          },
          r.createElement(eV, null),
          r.createElement(eI, null),
        );
      }
      function e6() {
        let { icons: e } = U(),
          t = G("Track"),
          n = G("Default"),
          l = (0, a.j9)("audioTrack"),
          i = (0, o.pi)();
        return i.disabled
          ? null
          : r.createElement(
              o.U7,
              { className: "vds-audio-track-menu vds-menu" },
              r.createElement(eL, {
                label: t,
                hint: l?.label ?? n,
                disabled: i.disabled,
                Icon: e.Menu.Audio,
              }),
              r.createElement(
                o.ob,
                { className: "vds-menu-items" },
                r.createElement(
                  o.fh,
                  {
                    className: "vds-audio-radio-group vds-radio-group",
                    value: i.selectedValue,
                  },
                  i.map(({ label: t, value: n, select: l }) =>
                    r.createElement(
                      o.ck,
                      {
                        className: "vds-audio-radio vds-radio",
                        value: n,
                        onSelect: l,
                        key: n,
                      },
                      r.createElement(e.Menu.RadioCheck, {
                        className: "vds-icon",
                      }),
                      r.createElement(
                        "span",
                        { className: "vds-radio-label" },
                        t,
                      ),
                    ),
                  ),
                ),
              ),
            );
      }
      function e3({ slots: e }) {
        let { icons: t } = U(),
          n = G("Captions"),
          l = G("Off"),
          a = (0, o.L)({ off: l }),
          i = a.selectedTrack?.label ?? l;
        return a.disabled
          ? null
          : r.createElement(
              o.U7,
              { className: "vds-captions-menu vds-menu" },
              r.createElement(eL, {
                label: n,
                hint: i,
                disabled: a.disabled,
                Icon: t.Menu.Captions,
              }),
              r.createElement(
                o.ob,
                { className: "vds-menu-items" },
                J(e, "captionsMenuItemsStart", null),
                r.createElement(
                  o.fh,
                  {
                    className: "vds-captions-radio-group vds-radio-group",
                    value: a.selectedValue,
                  },
                  a.map(({ label: e, value: n, select: l }) =>
                    r.createElement(
                      o.ck,
                      {
                        className: "vds-caption-radio vds-radio",
                        value: n,
                        onSelect: l,
                        key: n,
                      },
                      r.createElement(t.Menu.RadioCheck, {
                        className: "vds-icon",
                      }),
                      r.createElement(
                        "span",
                        { className: "vds-radio-label" },
                        e,
                      ),
                    ),
                  ),
                ),
                J(e, "captionsMenuItemsEnd", null),
              ),
            );
      }
      function e2({ slots: e }) {
        let t = G("Playback"),
          { icons: n } = U();
        return r.createElement(
          o.U7,
          { className: "vds-playback-menu vds-menu" },
          r.createElement(eL, { label: t, Icon: n.Menu.Playback }),
          r.createElement(
            o.ob,
            { className: "vds-menu-items" },
            J(e, "playbackMenuItemsStart", null),
            r.createElement(
              eS,
              null,
              J(e, "playbackMenuLoop", r.createElement(e9, null)),
            ),
            r.createElement(e5, null),
            r.createElement(e7, null),
            J(e, "playbackMenuItemsEnd", null),
          ),
        );
      }
      function e9() {
        let { remote: e } = (0, o.kH)(),
          t = G("Loop");
        return r.createElement(
          eM,
          { label: t },
          r.createElement(eG, {
            label: t,
            storageKey: "vds-player::user-loop",
            onChange: function (t, n) {
              e.userPrefersLoopChange(t, n);
            },
          }),
        );
      }
      function e0() {
        let { remote: e, qualities: t } = (0, o.kH)(),
          n = (0, a.j9)("autoQuality"),
          l = G("Auto");
        return r.createElement(
          eM,
          { label: l },
          r.createElement(eG, {
            label: l,
            checked: n,
            onChange: function (n, r) {
              n ? e.requestAutoQuality(r) : e.changeQuality(t.selectedIndex, r);
            },
            defaultChecked: n,
          }),
        );
      }
      function e7() {
        let { hideQualityBitrate: e, icons: t } = U(),
          n = (0, a.j9)("canSetQuality"),
          l = (0, a.j9)("qualities"),
          o = (0, a.j9)("quality"),
          i = G("Quality"),
          s = G("Auto"),
          u = r.useMemo(() => (0, a.a2)(l), [l]);
        if (!n || l.length <= 1) return null;
        let c = o?.height,
          d = e ? null : o?.bitrate,
          f = d && d > 0 ? `${(d / 1e6).toFixed(2)} Mbps` : null,
          m = c ? `${c}p${f ? ` (${f})` : ""}` : s,
          p = u[0] === o,
          h = u.at(-1) === o;
        return r.createElement(
          eS,
          { label: i, value: m },
          r.createElement(
            eR,
            {
              UpIcon: t.Menu.QualityUp,
              DownIcon: t.Menu.QualityDown,
              isMin: p,
              isMax: h,
            },
            r.createElement(e4, null),
          ),
          r.createElement(e0, null),
        );
      }
      function e4() {
        let e = G("Quality");
        return r.createElement(
          w,
          { className: "vds-quality-slider vds-slider", "aria-label": e },
          r.createElement(eV, null),
          r.createElement(eI, null),
        );
      }
      function e5() {
        let { icons: e } = U(),
          t = (0, a.j9)("playbackRate"),
          n = (0, a.j9)("canSetPlaybackRate"),
          l = G("Speed"),
          o = G("Normal"),
          i = e8(),
          s = te();
        return n
          ? r.createElement(
              eS,
              { label: l, value: 1 === t ? o : t + "x" },
              r.createElement(
                eR,
                {
                  UpIcon: e.Menu.SpeedUp,
                  DownIcon: e.Menu.SpeedDown,
                  isMin: t === i,
                  isMax: t === s,
                },
                r.createElement(tt, null),
              ),
            )
          : null;
      }
      function e8() {
        let { playbackRates: e } = U();
        return ((0, l.isArray)(e) ? e[0] : e?.min) ?? 0;
      }
      function te() {
        let { playbackRates: e } = U();
        return ((0, l.isArray)(e) ? e[e.length - 1] : e?.max) ?? 2;
      }
      function tt() {
        let e = G("Speed"),
          t = e8(),
          n = te(),
          a = (function () {
            let { playbackRates: e } = U();
            return ((0, l.isArray)(e) ? e[1] - e[0] : e?.step) || 0.25;
          })();
        return r.createElement(
          S,
          {
            className: "vds-speed-slider vds-slider",
            "aria-label": e,
            min: t,
            max: n,
            step: a,
            keyStep: a,
          },
          r.createElement(eV, null),
          r.createElement(eI, null),
        );
      }
      function tn({ tooltip: e, placement: t, portalClass: n = "", slots: i }) {
        let {
            showMenuDelay: s,
            icons: u,
            isSmallLayout: c,
            menuContainer: d,
            menuGroup: f,
            noModal: m,
            colorScheme: p,
          } = U(),
          h = G("Settings"),
          C = (0, a.j9)("viewType"),
          g = q(p),
          [v, y] = r.useState(!1),
          E = ef();
        !(function (e) {
          let t = (0, l.useReactScope)();
          r.useMemo(() => (0, l.scoped)(e, t), [t]);
        })(ex);
        let b = r.createElement(
          o.ob,
          {
            className: "vds-settings-menu-items vds-menu-items",
            placement: t,
            offset: c || "bottom" !== f || "video" !== C ? 0 : 26,
          },
          v
            ? r.createElement(
                r.Fragment,
                null,
                J(i, "settingsMenuItemsStart", null),
                J(i, "settingsMenuStartItems", null),
                r.createElement(e2, { slots: i }),
                r.createElement(eq, { slots: i }),
                r.createElement(eQ, { slots: i }),
                r.createElement(e3, { slots: i }),
                J(i, "settingsMenuEndItems", null),
                J(i, "settingsMenuItemsEnd", null),
              )
            : null,
        );
        return r.createElement(
          o.U7,
          {
            className: "vds-settings-menu vds-menu",
            showDelay: s,
            onOpen: function () {
              (0, Z.flushSync)(() => {
                y(!0);
              });
            },
            onClose: function () {
              y(!1);
            },
          },
          r.createElement(
            X,
            { content: h, placement: e },
            r.createElement(
              o.zx,
              { className: "vds-menu-button vds-button", "aria-label": h },
              r.createElement(u.Menu.Settings, {
                className: "vds-icon vds-rotate-icon",
              }),
            ),
          ),
          m || !c
            ? b
            : r.createElement(
                o.h_,
                {
                  className: n + (g ? ` ${g}` : ""),
                  container: d ?? E,
                  disabled: "fullscreen",
                  "data-sm": c ? "" : null,
                  "data-lg": c ? null : "",
                  "data-size": c ? "sm" : "lg",
                  "data-view-type": C,
                },
                b,
              ),
        );
      }
      function tr({ tooltip: e, orientation: t, slots: n }) {
        let o = (0, a.j9)("pointer"),
          i = (0, a.j9)("muted"),
          s = (0, a.j9)("canSetVolume"),
          [u, c] = r.useState(null),
          d = (function (e) {
            let t = (function (e) {
                let [t, n] = r.useState(!1);
                return (
                  r.useEffect(() => {
                    if (!e) return;
                    let t = (0, l.createDisposalBin)();
                    return (
                      t.add(
                        (0, l.listenEvent)(e, "mouseenter", () => n(!0)),
                        (0, l.listenEvent)(e, "mouseleave", () => n(!1)),
                      ),
                      () => t.empty()
                    );
                  }, [e]),
                  t
                );
              })(e),
              n = (function (e) {
                let [t, n] = r.useState(!1);
                return (
                  r.useEffect(() => {
                    if (!e) return;
                    let t = (0, l.createDisposalBin)();
                    return (
                      t.add(
                        (0, l.listenEvent)(e, "focusin", () => n(!0)),
                        (0, l.listenEvent)(e, "focusout", () => n(!1)),
                      ),
                      () => t.empty()
                    );
                  }, [e]),
                  t
                );
              })(e),
              a = r.useRef(!1);
            return (!a.current || !!t) && ((a.current = t), t || n);
          })(u),
          f = J(n, "muteButton", r.createElement(et, { tooltip: e }));
        return s
          ? "coarse" !== o || i
            ? r.createElement(
                "div",
                {
                  className: "vds-volume",
                  "data-active": d ? "" : null,
                  ref: c,
                },
                f,
                r.createElement(
                  "div",
                  { className: "vds-volume-popup" },
                  J(n, "volumeSlider", r.createElement(tl, { orientation: t })),
                ),
              )
            : null
          : f;
      }
      function tl(e) {
        let t = G("Volume");
        return r.createElement(
          o.jC,
          { className: "vds-volume-slider vds-slider", "aria-label": t, ...e },
          r.createElement(o.fQ, { className: "vds-slider-track" }),
          r.createElement(o.Su, {
            className: "vds-slider-track-fill vds-slider-track",
          }),
          r.createElement(o.bU, { className: "vds-slider-thumb" }),
          r.createElement(
            o.MB,
            { className: "vds-slider-preview", noClamp: !0 },
            r.createElement(o.B4, { className: "vds-slider-value" }),
          ),
        );
      }
      function ta() {
        let [e, t] = r.useState(null),
          [n, i] = r.useState(0),
          s = (0, a.j9)("currentSrc"),
          {
            thumbnails: u,
            sliderChaptersMinWidth: c,
            disableTimeSlider: d,
            seekStep: f,
            noScrubGesture: m,
          } = U(),
          p = G("Seek"),
          h = (0, l.useSignal)(j),
          C = r.useCallback(() => {
            let t = e?.el;
            t && i(t.clientWidth);
          }, [e]);
        return (
          F(e?.el, C),
          r.createElement(
            o.D6,
            {
              className: "vds-time-slider vds-slider",
              "aria-label": p,
              disabled: d,
              noSwipeGesture: m,
              keyStep: f,
              ref: t,
            },
            r.createElement(
              o.tP,
              { className: "vds-slider-chapters", disabled: n < c },
              (e, t) =>
                e.map((e) =>
                  r.createElement(
                    "div",
                    {
                      className: "vds-slider-chapter",
                      key: e.startTime,
                      ref: t,
                    },
                    r.createElement(o.fQ, { className: "vds-slider-track" }),
                    r.createElement(o.Su, {
                      className: "vds-slider-track-fill vds-slider-track",
                    }),
                    r.createElement(o.Ex, {
                      className: "vds-slider-progress vds-slider-track",
                    }),
                  ),
                ),
            ),
            r.createElement(o.bU, { className: "vds-slider-thumb" }),
            r.createElement(
              o.MB,
              { className: "vds-slider-preview" },
              u
                ? r.createElement(
                    o.pl.Root,
                    { src: u, className: "vds-slider-thumbnail vds-thumbnail" },
                    r.createElement(o.pl.Img, null),
                  )
                : h && (0, a.r4)(s)
                  ? r.createElement(h, {
                      className: "vds-slider-thumbnail vds-thumbnail",
                    })
                  : null,
              r.createElement(o.j$, { className: "vds-slider-chapter-title" }),
              r.createElement(o.B4, { className: "vds-slider-value" }),
            ),
          )
        );
      }
      function to({ slots: e }) {
        return (0, a.j9)("duration")
          ? r.createElement(
              "div",
              { className: "vds-time-group" },
              J(
                e,
                "currentTime",
                r.createElement(o.qp, {
                  className: "vds-time",
                  type: "current",
                }),
              ),
              J(
                e,
                "timeSeparator",
                r.createElement("div", { className: "vds-time-divider" }, "/"),
              ),
              J(
                e,
                "endTime",
                r.createElement(o.qp, {
                  className: "vds-time",
                  type: "duration",
                }),
              ),
            )
          : null;
      }
      function ti({ slots: e }) {
        return (0, a.j9)("live")
          ? J(e, "liveButton", r.createElement(es, null))
          : r.createElement(to, { slots: e });
      }
      function ts({ slots: e }) {
        let t = (0, a.j9)("live"),
          n = (0, a.j9)("duration");
        return t
          ? J(e, "liveButton", r.createElement(es, null))
          : J(
              e,
              "endTime",
              n
                ? r.createElement(o.qp, {
                    className: "vds-time",
                    type: "current",
                    toggle: !0,
                    remainder: !0,
                  })
                : null,
            );
      }
      function tu() {
        let e = _();
        return (
          O("audio"),
          r.createElement(
            r.Fragment,
            null,
            r.createElement(Y, null),
            r.createElement(ec, null),
            r.createElement(
              c,
              { className: "vds-controls" },
              r.createElement(
                f,
                { className: "vds-controls-group" },
                J(
                  e,
                  "seekBackwardButton",
                  r.createElement(ea, { backward: !0, tooltip: "top start" }),
                ),
                J(
                  e,
                  "playButton",
                  r.createElement(ee, { tooltip: "top center" }),
                ),
                J(
                  e,
                  "seekForwardButton",
                  r.createElement(ea, { tooltip: "top center" }),
                ),
                r.createElement(td, null),
                J(e, "timeSlider", r.createElement(ta, null)),
                r.createElement(ts, { slots: e }),
                r.createElement(tr, {
                  orientation: "vertical",
                  tooltip: "top",
                  slots: e,
                }),
                J(
                  e,
                  "captionButton",
                  r.createElement(en, { tooltip: "top center" }),
                ),
                J(e, "downloadButton", r.createElement(eu, null)),
                r.createElement(tc, { slots: e }),
              ),
            ),
          )
        );
      }
      function tc({ slots: e }) {
        let { isSmallLayout: t, noModal: n } = U(),
          l = n ? "top end" : t ? null : "top end";
        return r.createElement(
          r.Fragment,
          null,
          J(
            e,
            "chaptersMenu",
            r.createElement(em, {
              tooltip: "top",
              placement: l,
              portalClass: "vds-audio-layout",
            }),
          ),
          J(
            e,
            "settingsMenu",
            r.createElement(tn, {
              tooltip: "top end",
              placement: l,
              portalClass: "vds-audio-layout",
              slots: e,
            }),
          ),
        );
      }
      function td() {
        let [e, t] = r.useState(null),
          n = (0, o.kH)(),
          { translations: a } = U(),
          [i, s] = r.useState(!1),
          u = H(() => {
            let { started: e, currentTime: t } = n.$state;
            return e() || t() > 0;
          }),
          c = (0, l.useSignal)(
            H(() => {
              let { title: e, ended: t } = n.$state;
              if (!e()) return "";
              let r = t() ? "Replay" : u() ? "Continue" : "Play";
              return `${a?.[r] ?? r}: ${e()}`;
            }),
          ),
          d = R(),
          f = (0, l.useSignal)(u) ? d : "",
          m = (function (e) {
            let [t, n] = r.useState(!1);
            return (
              r.useEffect(() => {
                if (!e) return;
                let t = (0, l.createDisposalBin)();
                return (
                  t.add(
                    (0, l.listenEvent)(e, "transitionstart", () => n(!0)),
                    (0, l.listenEvent)(e, "transitionend", () => n(!1)),
                  ),
                  () => t.empty()
                );
              }, [e]),
              t
            );
          })(e);
        r.useEffect(() => {
          m && document.activeElement === document.body && n.player.el?.focus();
        }, []);
        let p = r.useCallback(() => {
          let t = !!e && !m && e.clientWidth < e.children[0].clientWidth;
          e && (0, l.toggleClass)(e, "vds-marquee", t), s(t);
        }, [e, m]);
        return (
          F(e, p),
          c
            ? r.createElement(
                "span",
                { className: "vds-title", title: c, ref: t },
                r.createElement(tf, { title: c, chapterTitle: f }),
                i && !m
                  ? r.createElement(tf, { title: c, chapterTitle: f })
                  : null,
              )
            : r.createElement(ed, null)
        );
      }
      function tf({ title: e, chapterTitle: t }) {
        let n = _();
        return r.createElement(
          "span",
          { className: "vds-title-text" },
          J(n, "title", e),
          J(
            n,
            "chapterTitle",
            r.createElement("span", { className: "vds-chapter-title" }, t),
          ),
        );
      }
      (eS.displayName = "DefaultMenuSection"),
        (eL.displayName = "DefaultMenuButton"),
        (eM.displayName = "DefaultMenuItem"),
        (ek.displayName = "DefaultMenuRadioGroup"),
        (eR.displayName = "DefaultMenuSliderItem"),
        (eV.displayName = "DefaultSliderParts"),
        (eI.displayName = "DefaultSliderSteps"),
        (eT.displayName = "DefaultFontMenu"),
        (eD.displayName = "DefaultFontFamilyMenu"),
        (eP.displayName = "DefaultFontSizeSlider"),
        (eB.displayName = "DefaultTextColorInput"),
        (eA.displayName = "DefaultTextOpacitySlider"),
        (eH.displayName = "DefaultTextShadowMenu"),
        (eF.displayName = "DefaultTextBgInput"),
        (eO.displayName = "DefaultTextBgOpacitySlider"),
        (eZ.displayName = "DefaultDisplayBgInput"),
        (eW.displayName = "DefaultDisplayBgOpacitySlider"),
        (ej.displayName = "DefaultFontSetting"),
        (ez.displayName = "DefaultFontRadioGroup"),
        (eU.displayName = "DefaultResetMenuItem"),
        (eG.displayName = "DefaultMenuCheckbox"),
        (eq.displayName = "DefaultAccessibilityMenu"),
        (eK.displayName = "DefaultAnnouncementsMenuCheckbox"),
        (e_.displayName = "DefaultKeyboardAnimationsMenuCheckbox"),
        (eQ.displayName = "DefaultAudioMenu"),
        (eJ.displayName = "DefaultAudioBoostMenuSection"),
        (e1.displayName = "DefaultAudioGainSlider"),
        (e6.displayName = "DefaultAudioTracksMenu"),
        (e3.displayName = "DefaultCaptionMenu"),
        (e2.displayName = "DefaultPlaybackMenu"),
        (e9.displayName = "DefaultLoopMenuCheckbox"),
        (e0.displayName = "DefaultAutoQualityMenuCheckbox"),
        (e7.displayName = "DefaultQualityMenuSection"),
        (e4.displayName = "DefaultQualitySlider"),
        (tt.displayName = "DefaultSpeedSlider"),
        (tn.displayName = "DefaultSettingsMenu"),
        (tr.displayName = "DefaultVolumePopup"),
        (tl.displayName = "DefaultVolumeSlider"),
        (ta.displayName = "DefaultTimeSlider"),
        (to.displayName = "DefaultTimeGroup"),
        (ti.displayName = "DefaultTimeInfo"),
        (ts.displayName = "DefaultTimeInvert"),
        K({
          type: "audio",
          smLayoutWhen: ({ width: e }) => e < 576,
          renderLayout: () => r.createElement(tu, null),
        }),
        (tu.displayName = "AudioLayout"),
        (tc.displayName = "DefaultAudioMenus"),
        (td.displayName = "DefaultAudioTitle"),
        (tf.displayName = "AudioTitle");
      let tm = r.forwardRef(({ icons: e, ...t }, n) => {
        let [o, i] = r.useState(!1),
          [s, u] = r.useState(null),
          [c, d] = r.useState(0),
          f = (0, a.j9)("lastKeyboardAction");
        r.useEffect(() => {
          d((e) => e + 1);
        }, [f]);
        let m = r.useMemo(() => {
            let e = f?.action;
            return e && o ? (0, l.camelToKebabCase)(e) : null;
          }, [o, f]),
          p = r.useMemo(
            () =>
              `vds-kb-action${o ? "" : " hidden"}${t.className ? ` ${t.className}` : ""}`,
            [o],
          ),
          h = H(tp),
          C = (0, l.useSignal)(h);
        return (
          !(function (e, t = []) {
            let n = (0, l.useReactScope)();
            r.useEffect(
              () => (0, l.scoped)(() => (0, l.effect)(e), n),
              [n, ...t],
            );
          })(() => {
            let t = (function (e) {
              let { $state: t } = (0, l.useContext)(a._S);
              switch (t.lastKeyboardAction()?.action) {
                case "togglePaused":
                  return t.paused() ? e.Pause : e.Play;
                case "toggleMuted":
                  return t.muted() || 0 === t.volume()
                    ? e.Mute
                    : t.volume() >= 0.5
                      ? e.VolumeUp
                      : e.VolumeDown;
                case "toggleFullscreen":
                  return t.fullscreen() ? e.EnterFullscreen : e.ExitFullscreen;
                case "togglePictureInPicture":
                  return t.pictureInPicture() ? e.EnterPiP : e.ExitPiP;
                case "toggleCaptions":
                  return t.hasCaptions()
                    ? t.textTrack()
                      ? e.CaptionsOn
                      : e.CaptionsOff
                    : null;
                case "volumeUp":
                  return e.VolumeUp;
                case "volumeDown":
                  return e.VolumeDown;
                case "seekForward":
                  return e.SeekForward;
                case "seekBackward":
                  return e.SeekBackward;
                default:
                  return null;
              }
            })(e);
            u(() => t);
          }, [e]),
          r.useEffect(() => {
            i(!!f);
            let e = setTimeout(() => i(!1), 500);
            return () => {
              i(!1), window.clearTimeout(e);
            };
          }, [f]),
          s
            ? r.createElement(
                a.WV.div,
                { ...t, className: p, "data-action": m, ref: n },
                r.createElement(
                  "div",
                  { className: "vds-kb-text-wrapper" },
                  r.createElement("div", { className: "vds-kb-text" }, C),
                ),
                r.createElement(
                  "div",
                  { className: "vds-kb-bezel", key: c },
                  r.createElement(
                    "div",
                    { className: "vds-kb-icon" },
                    r.createElement(s, null),
                  ),
                ),
              )
            : null
        );
      });
      function tp() {
        let { $state: e } = (0, l.useContext)(a._S),
          t = e.lastKeyboardAction()?.action,
          n = e.audioGain() ?? 1;
        switch (t) {
          case "toggleMuted":
            return e.muted() ? "0%" : th(e.volume(), n);
          case "volumeUp":
          case "volumeDown":
            return th(e.volume(), n);
          default:
            return "";
        }
      }
      function th(e, t) {
        return `${Math.round(e * t * 100)}%`;
      }
      function tC() {
        let e = (0, a.j9)("started"),
          t = (0, a.j9)("title");
        return k("chapters") && (e || !t)
          ? r.createElement(V, { className: "vds-chapter-title" })
          : r.createElement(L, { className: "vds-chapter-title" });
      }
      (tm.displayName = "DefaultKeyboardDisplay"),
        (tC.displayName = "DefaultTitle");
      let tg = K({
        type: "video",
        smLayoutWhen: ({ width: e, height: t }) => e < 576 || t < 380,
        renderLayout: (e) => r.createElement(ty, { ...e }),
      });
      function tv(e) {
        return r.createElement(tg, { ...e });
      }
      function ty({ streamType: e, isLoadLayout: t, isSmallLayout: n }) {
        return (
          O("video"),
          t
            ? r.createElement(tS, null)
            : "unknown" === e
              ? r.createElement(tN, null)
              : n
                ? r.createElement(tb, null)
                : r.createElement(tE, null)
        );
      }
      function tE() {
        let { menuGroup: e } = U(),
          t = Q(),
          n = { ...t, ...t?.largeLayout };
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(Y, null),
          r.createElement(t$, null),
          r.createElement(tL, null),
          J(n, "bufferingIndicator", r.createElement(tN, null)),
          J(n, "captions", r.createElement(ec, null)),
          r.createElement(
            c,
            { className: "vds-controls" },
            r.createElement(
              f,
              { className: "vds-controls-group" },
              J(n, "topControlsGroupStart", null),
              r.createElement(ed, null),
              J(n, "topControlsGroupCenter", null),
              r.createElement(ed, null),
              J(n, "topControlsGroupEnd", null),
              "top" === e && r.createElement(tx, { slots: n }),
            ),
            r.createElement(ed, null),
            r.createElement(
              f,
              { className: "vds-controls-group" },
              J(n, "centerControlsGroupStart", null),
              r.createElement(ed, null),
              J(n, "centerControlsGroupCenter", null),
              r.createElement(ed, null),
              J(n, "centerControlsGroupEnd", null),
            ),
            r.createElement(ed, null),
            r.createElement(
              f,
              { className: "vds-controls-group" },
              J(n, "timeSlider", r.createElement(ta, null)),
            ),
            r.createElement(
              f,
              { className: "vds-controls-group" },
              J(n, "playButton", r.createElement(ee, { tooltip: "top start" })),
              r.createElement(tr, {
                orientation: "horizontal",
                tooltip: "top",
                slots: n,
              }),
              r.createElement(ti, { slots: n }),
              J(n, "chapterTitle", r.createElement(tC, null)),
              J(n, "captionButton", r.createElement(en, { tooltip: "top" })),
              "bottom" === e && r.createElement(tx, { slots: n }),
              J(n, "airPlayButton", r.createElement(eo, { tooltip: "top" })),
              J(n, "googleCastButton", r.createElement(ei, { tooltip: "top" })),
              J(n, "downloadButton", r.createElement(eu, null)),
              J(n, "pipButton", r.createElement(er, { tooltip: "top" })),
              J(
                n,
                "fullscreenButton",
                r.createElement(el, { tooltip: "top end" }),
              ),
            ),
          ),
        );
      }
      function tb() {
        let e = Q(),
          t = { ...e, ...e?.smallLayout };
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(Y, null),
          r.createElement(t$, null),
          r.createElement(tL, null),
          J(t, "bufferingIndicator", r.createElement(tN, null)),
          J(t, "captions", r.createElement(ec, null)),
          r.createElement(
            c,
            { className: "vds-controls" },
            r.createElement(
              f,
              { className: "vds-controls-group" },
              J(t, "topControlsGroupStart", null),
              J(
                t,
                "airPlayButton",
                r.createElement(eo, { tooltip: "top start" }),
              ),
              J(
                t,
                "googleCastButton",
                r.createElement(ei, { tooltip: "top start" }),
              ),
              r.createElement(ed, null),
              J(t, "topControlsGroupCenter", null),
              r.createElement(ed, null),
              J(t, "captionButton", r.createElement(en, { tooltip: "bottom" })),
              J(t, "downloadButton", r.createElement(eu, null)),
              r.createElement(tx, { slots: t }),
              r.createElement(tr, {
                orientation: "vertical",
                tooltip: "bottom end",
                slots: t,
              }),
              J(t, "topControlsGroupEnd", null),
            ),
            r.createElement(ed, null),
            r.createElement(
              f,
              {
                className: "vds-controls-group",
                style: { pointerEvents: "none" },
              },
              J(t, "centerControlsGroupStart", null),
              r.createElement(ed, null),
              J(t, "centerControlsGroupCenter", null),
              J(t, "playButton", r.createElement(ee, { tooltip: "top" })),
              r.createElement(ed, null),
              J(t, "centerControlsGroupEnd", null),
            ),
            r.createElement(ed, null),
            r.createElement(
              f,
              { className: "vds-controls-group" },
              r.createElement(ti, { slots: t }),
              J(t, "chapterTitle", r.createElement(tC, null)),
              J(
                t,
                "fullscreenButton",
                r.createElement(el, { tooltip: "top end" }),
              ),
            ),
            r.createElement(
              f,
              { className: "vds-controls-group" },
              J(t, "timeSlider", r.createElement(ta, null)),
            ),
          ),
          J(t, "startDuration", r.createElement(tw, null)),
        );
      }
      function tw() {
        return 0 === (0, a.j9)("duration")
          ? null
          : r.createElement(
              "div",
              { className: "vds-start-duration" },
              r.createElement(o.qp, {
                className: "vds-time",
                type: "duration",
              }),
            );
      }
      function t$() {
        let { noGestures: e } = U();
        return e
          ? null
          : r.createElement(
              "div",
              { className: "vds-gestures" },
              r.createElement(o.oF, {
                className: "vds-gesture",
                event: "pointerup",
                action: "toggle:paused",
              }),
              r.createElement(o.oF, {
                className: "vds-gesture",
                event: "pointerup",
                action: "toggle:controls",
              }),
              r.createElement(o.oF, {
                className: "vds-gesture",
                event: "dblpointerup",
                action: "toggle:fullscreen",
              }),
              r.createElement(o.oF, {
                className: "vds-gesture",
                event: "dblpointerup",
                action: "seek:-10",
              }),
              r.createElement(o.oF, {
                className: "vds-gesture",
                event: "dblpointerup",
                action: "seek:10",
              }),
            );
      }
      function tN() {
        return r.createElement(
          "div",
          { className: "vds-buffering-indicator" },
          r.createElement(
            D,
            { className: "vds-buffering-spinner" },
            r.createElement(P, { className: "vds-buffering-track" }),
            r.createElement(B, { className: "vds-buffering-track-fill" }),
          ),
        );
      }
      function tx({ slots: e }) {
        let { isSmallLayout: t, noModal: n, menuGroup: l } = U(),
          a = "top" === l || t ? "bottom" : "top",
          o = `${a} end`,
          i = n ? `${a} end` : t ? null : `${a} end`;
        return r.createElement(
          r.Fragment,
          null,
          J(
            e,
            "chaptersMenu",
            r.createElement(em, {
              tooltip: o,
              placement: i,
              portalClass: "vds-video-layout",
            }),
          ),
          J(
            e,
            "settingsMenu",
            r.createElement(tn, {
              tooltip: o,
              placement: i,
              portalClass: "vds-video-layout",
              slots: e,
            }),
          ),
        );
      }
      function tS() {
        let { isSmallLayout: e } = U(),
          t = Q(),
          n = { ...t, ...t?.[e ? "smallLayout" : "largeLayout"] };
        return r.createElement(
          "div",
          { className: "vds-load-container" },
          J(n, "bufferingIndicator", r.createElement(tN, null)),
          J(n, "loadButton", r.createElement(ee, { tooltip: "top" })),
        );
      }
      function tL() {
        let {
            noKeyboardAnimations: e,
            icons: t,
            userPrefersKeyboardAnimations: n,
          } = U(),
          a = (0, l.useSignal)(n);
        return !e && a && t.KeyboardDisplay
          ? r.createElement(tm, { icons: t.KeyboardDisplay })
          : null;
      }
      (tv.displayName = "DefaultVideoLayout"),
        (ty.displayName = "VideoLayout"),
        (tE.displayName = "DefaultVideoLargeLayout"),
        (tb.displayName = "DefaultVideoSmallLayout"),
        (tw.displayName = "DefaultVideoStartDuration"),
        (t$.displayName = "DefaultVideoGestures"),
        (tN.displayName = "DefaultBufferingIndicator"),
        (tx.displayName = "DefaultVideoMenus"),
        (tS.displayName = "DefaultVideoLoadLayout"),
        (tL.displayName = "DefaultVideoKeyboardDisplay");
    },
    17015: function (e, t, n) {
      n.r(t),
        n.d(t, {
          Component: function () {
            return eP;
          },
          DOMEvent: function () {
            return el;
          },
          EventsTarget: function () {
            return ec;
          },
          Icon$0: function () {
            return tx;
          },
          Icon$104: function () {
            return t6;
          },
          Icon$105: function () {
            return t3;
          },
          Icon$11: function () {
            return tM;
          },
          Icon$13: function () {
            return tk;
          },
          Icon$16: function () {
            return tR;
          },
          Icon$19: function () {
            return tV;
          },
          Icon$22: function () {
            return tI;
          },
          Icon$24: function () {
            return tT;
          },
          Icon$26: function () {
            return tP;
          },
          Icon$27: function () {
            return tB;
          },
          Icon$31: function () {
            return tA;
          },
          Icon$33: function () {
            return tH;
          },
          Icon$34: function () {
            return tF;
          },
          Icon$35: function () {
            return tO;
          },
          Icon$39: function () {
            return tZ;
          },
          Icon$40: function () {
            return tW;
          },
          Icon$5: function () {
            return tS;
          },
          Icon$53: function () {
            return tj;
          },
          Icon$54: function () {
            return tz;
          },
          Icon$56: function () {
            return tU;
          },
          Icon$59: function () {
            return tG;
          },
          Icon$60: function () {
            return tq;
          },
          Icon$61: function () {
            return tK;
          },
          Icon$62: function () {
            return t_;
          },
          Icon$63: function () {
            return tQ;
          },
          Icon$74: function () {
            return tJ;
          },
          Icon$77: function () {
            return tY;
          },
          Icon$8: function () {
            return tL;
          },
          Icon$81: function () {
            return tX;
          },
          Icon$88: function () {
            return t1;
          },
          State: function () {
            return eH;
          },
          ViewController: function () {
            return eD;
          },
          animationFrameThrottle: function () {
            return ts;
          },
          appendTriggerEvent: function () {
            return eu;
          },
          ariaBool: function () {
            return tn;
          },
          camelToKebabCase: function () {
            return eO;
          },
          chromecast: function () {
            return tD;
          },
          composeRefs: function () {
            return eK;
          },
          computed: function () {
            return W;
          },
          createContext: function () {
            return e$;
          },
          createDisposalBin: function () {
            return tr;
          },
          createReactComponent: function () {
            return tf;
          },
          createScope: function () {
            return T;
          },
          deferredPromise: function () {
            return to;
          },
          effect: function () {
            return et;
          },
          findTriggerEvent: function () {
            return ei;
          },
          fscreen: function () {
            return tC;
          },
          functionDebounce: function () {
            return tv;
          },
          functionThrottle: function () {
            return tg;
          },
          getScope: function () {
            return b;
          },
          hasProvidedContext: function () {
            return eS;
          },
          hasTriggerEvent: function () {
            return es;
          },
          isArray: function () {
            return ee;
          },
          isBoolean: function () {
            return Y;
          },
          isDOMNode: function () {
            return ev;
          },
          isFunction: function () {
            return X;
          },
          isKeyboardClick: function () {
            return eg;
          },
          isKeyboardEvent: function () {
            return eh;
          },
          isMouseEvent: function () {
            return ep;
          },
          isNil: function () {
            return K;
          },
          isNull: function () {
            return G;
          },
          isNumber: function () {
            return Q;
          },
          isObject: function () {
            return _;
          },
          isPointerEvent: function () {
            return ef;
          },
          isString: function () {
            return J;
          },
          isTouchEvent: function () {
            return em;
          },
          isUndefined: function () {
            return q;
          },
          isWriteSignal: function () {
            return z;
          },
          kebabToCamelCase: function () {
            return eZ;
          },
          keysOf: function () {
            return ta;
          },
          listenEvent: function () {
            return ed;
          },
          method: function () {
            return eA;
          },
          noop: function () {
            return U;
          },
          onDispose: function () {
            return N;
          },
          peek: function () {
            return v;
          },
          prop: function () {
            return eB;
          },
          provideContext: function () {
            return eN;
          },
          r: function () {
            return tN;
          },
          scoped: function () {
            return w;
          },
          setAttribute: function () {
            return ey;
          },
          setStyle: function () {
            return eE;
          },
          signal: function () {
            return Z;
          },
          tick: function () {
            return E;
          },
          toggleClass: function () {
            return eb;
          },
          untrack: function () {
            return y;
          },
          uppercaseFirstChar: function () {
            return eW;
          },
          useContext: function () {
            return ex;
          },
          useDisposalBin: function () {
            return tl;
          },
          useReactContext: function () {
            return eG;
          },
          useReactScope: function () {
            return eU;
          },
          useSignal: function () {
            return tt;
          },
          useSignalRecord: function () {
            return td;
          },
          useState: function () {
            return eF;
          },
          useStateContext: function () {
            return te;
          },
          waitIdlePeriod: function () {
            return tc;
          },
          waitTimeout: function () {
            return ti;
          },
          walkTriggerEventChain: function () {
            return eo;
          },
          wasEnterKeyPressed: function () {
            return eC;
          },
        });
      var r,
        l,
        a = n(2265);
      n(20357);
      let o = "undefined" == typeof document,
        i = Symbol(0),
        s = !1,
        u = !1,
        c = null,
        d = null,
        f = null,
        m = 0,
        p = [],
        h = {},
        C = () => {};
      function g() {
        if (!p.length) {
          s = !1;
          return;
        }
        u = !0;
        for (let e = 0; e < p.length; e++)
          0 !== p[e].$st &&
            (function (e) {
              let t = [e];
              for (; (e = e[i]); ) e.$e && 0 !== e.$st && t.push(e);
              for (let e = t.length - 1; e >= 0; e--) A(t[e]);
            })(p[e]);
        (p = []), (s = !1), (u = !1);
      }
      function v(e) {
        return L(c, e, null);
      }
      function y(e) {
        return L(null, e, null);
      }
      function E() {
        u || g();
      }
      function b() {
        return c;
      }
      function w(e, t) {
        try {
          return L(t, e, null);
        } catch (e) {
          M(t, e);
          return;
        }
      }
      function $(e, t = c) {
        return t?.$cx[e];
      }
      function N(e) {
        if (!e || !c) return e || C;
        let t = c;
        return (
          t.$d
            ? Array.isArray(t.$d)
              ? t.$d.push(e)
              : (t.$d = [t.$d, e])
            : (t.$d = e),
          function () {
            3 !== t.$st &&
              (e.call(null),
              B(t.$d)
                ? (t.$d = null)
                : Array.isArray(t.$d) && t.$d.splice(t.$d.indexOf(e), 1));
          }
        );
      }
      function x(e = !0) {
        if (3 !== this.$st) {
          if (this.$h) {
            if (Array.isArray(this.$h))
              for (let e = this.$h.length - 1; e >= 0; e--) x.call(this.$h[e]);
            else x.call(this.$h);
          }
          if (e) {
            let e = this[i];
            e &&
              (Array.isArray(e.$h)
                ? e.$h.splice(e.$h.indexOf(this), 1)
                : (e.$h = null)),
              (this.$st = 3),
              this.$d && S(this),
              this.$s && O(this, 0),
              (this[i] = null),
              (this.$s = null),
              (this.$o = null),
              (this.$h = null),
              (this.$cx = h),
              (this.$eh = null);
          }
        }
      }
      function S(e) {
        try {
          if (Array.isArray(e.$d))
            for (let t = e.$d.length - 1; t >= 0; t--) {
              let n = e.$d[t];
              n.call(n);
            }
          else e.$d.call(e.$d);
          e.$d = null;
        } catch (t) {
          M(e, t);
        }
      }
      function L(e, t, n) {
        let r = c,
          l = d;
        (c = e), (d = n);
        try {
          return t.call(e);
        } finally {
          (c = r), (d = l);
        }
      }
      function M(e, t) {
        if (!e || !e.$eh) throw t;
        let n = 0,
          r = e.$eh.length,
          l = t;
        for (n = 0; n < r; n++)
          try {
            e.$eh[n](l);
            break;
          } catch (e) {
            l = e;
          }
        if (n === r) throw l;
      }
      function k() {
        return (
          3 === this.$st ||
            (d &&
              !this.$e &&
              (!f && d.$s && d.$s[m] == this
                ? m++
                : f
                  ? f.push(this)
                  : (f = [this])),
            this.$c && A(this)),
          this.$v
        );
      }
      function R(e) {
        let t = B(e) ? e(this.$v) : e;
        if (this.$ch(this.$v, t) && ((this.$v = t), this.$o))
          for (let e = 0; e < this.$o.length; e++)
            !(function e(t, n) {
              if (
                !(t.$st >= n) &&
                (t.$e &&
                  0 === t.$st &&
                  (p.push(t), s || ((s = !0), queueMicrotask(g))),
                (t.$st = n),
                t.$o)
              )
                for (let n = 0; n < t.$o.length; n++) e(t.$o[n], 1);
            })(this.$o[e], 2);
        return this.$v;
      }
      let V = function () {
          (this[i] = null), (this.$h = null), c && c.append(this);
        },
        I = V.prototype;
      function T() {
        return new V();
      }
      (I.$cx = h),
        (I.$eh = null),
        (I.$c = null),
        (I.$d = null),
        (I.append = function (e) {
          (e[i] = this),
            this.$h
              ? Array.isArray(this.$h)
                ? this.$h.push(e)
                : (this.$h = [this.$h, e])
              : (this.$h = e),
            (e.$cx = e.$cx === h ? this.$cx : { ...this.$cx, ...e.$cx }),
            this.$eh && (e.$eh = e.$eh ? [...e.$eh, ...this.$eh] : this.$eh);
        }),
        (I.dispose = function () {
          x.call(this);
        });
      let D = function (e, t, n) {
          V.call(this),
            (this.$st = t ? 2 : 0),
            (this.$i = !1),
            (this.$e = !1),
            (this.$s = null),
            (this.$o = null),
            (this.$v = e),
            t && (this.$c = t),
            n && n.dirty && (this.$ch = n.dirty);
        },
        P = D.prototype;
      function B(e) {
        return "function" == typeof e;
      }
      function A(e) {
        if (1 === e.$st)
          for (let t = 0; t < e.$s.length && (A(e.$s[t]), 2 !== e.$st); t++);
        2 === e.$st ? H(e) : (e.$st = 0);
      }
      function H(e) {
        let t = f,
          n = m;
        (f = null), (m = 0);
        try {
          e.$h && x.call(e, !1), e.$d && S(e), (e.$eh = e[i] ? e[i].$eh : null);
          let t = L(e, e.$c, e);
          F(e), !e.$e && e.$i ? R.call(e, t) : ((e.$v = t), (e.$i = !0));
        } catch (t) {
          F(e), M(e, t);
        } finally {
          (f = t), (m = n), (e.$st = 0);
        }
      }
      function F(e) {
        if (f) {
          let t;
          if ((e.$s && O(e, m), e.$s && m > 0)) {
            e.$s.length = m + f.length;
            for (let t = 0; t < f.length; t++) e.$s[m + t] = f[t];
          } else e.$s = f;
          for (let n = m; n < e.$s.length; n++)
            (t = e.$s[n]).$o ? t.$o.push(e) : (t.$o = [e]);
        } else e.$s && m < e.$s.length && (O(e, m), (e.$s.length = m));
      }
      function O(e, t) {
        let n, r;
        for (let l = t; l < e.$s.length; l++)
          (n = e.$s[l]).$o &&
            ((r = n.$o.indexOf(e)),
            (n.$o[r] = n.$o[n.$o.length - 1]),
            n.$o.pop());
      }
      function Z(e, t) {
        let n = new D(e, null, t),
          r = k.bind(n);
        return (r[i] = !0), (r.set = R.bind(n)), r;
      }
      function W(e, t) {
        let n = new D(t?.initial, e, t),
          r = k.bind(n);
        return (r[i] = !0), r;
      }
      function j(e, t) {
        let n = new D(
          null,
          function () {
            let t = e();
            return B(t) && N(t), null;
          },
          void 0,
        );
        return (n.$e = !0), H(n), x.bind(n, !0);
      }
      function z(e) {
        return B(e) && i in e && "set" in e;
      }
      function U(...e) {}
      function G(e) {
        return null === e;
      }
      function q(e) {
        return void 0 === e;
      }
      function K(e) {
        return G(e) || q(e);
      }
      function _(e) {
        return e?.constructor === Object;
      }
      function Q(e) {
        return "number" == typeof e && !Number.isNaN(e);
      }
      function J(e) {
        return "string" == typeof e;
      }
      function Y(e) {
        return "boolean" == typeof e;
      }
      function X(e) {
        return "function" == typeof e;
      }
      function ee(e) {
        return Array.isArray(e);
      }
      Object.setPrototypeOf(P, I),
        (P.$ch = function (e, t) {
          return e !== t;
        }),
        (P.call = k);
      let et = o
          ? function (e, t) {
              return U;
            }
          : j,
        en = o ? class {} : Event,
        er = Symbol("DOM_EVENT");
      class el extends en {
        constructor(e, ...t) {
          super(e, t[0]),
            (this[r] = !0),
            (this.triggers = new ea()),
            (this.detail = t[0]?.detail);
          let n = t[0]?.trigger;
          n && this.triggers.add(n);
        }
        get trigger() {
          return this.triggers.source;
        }
        get originEvent() {
          return this.triggers.origin;
        }
        get isOriginTrusted() {
          return this.triggers.origin?.isTrusted ?? !1;
        }
      }
      r = er;
      class ea {
        constructor() {
          this.chain = [];
        }
        get source() {
          return this.chain[0];
        }
        get origin() {
          return this.chain[this.chain.length - 1];
        }
        add(e) {
          this.chain.push(e), e?.[er] && this.chain.push(...e.triggers);
        }
        remove(e) {
          return this.chain.splice(this.chain.indexOf(e), 1)[0];
        }
        has(e) {
          return this.chain.some((t) => t === e);
        }
        hasType(e) {
          return !!this.findType(e);
        }
        findType(e) {
          return this.chain.find((t) => t.type === e);
        }
        walk(e) {
          for (let t of this.chain) {
            let n = e(t);
            if (n) return [t, n];
          }
        }
        [Symbol.iterator]() {
          return this.chain.values();
        }
      }
      function eo(e, t) {
        if (e?.[er]) return e.triggers.walk(t);
      }
      function ei(e, t) {
        return e?.[er] ? e.triggers.findType(t) : void 0;
      }
      function es(e, t) {
        return !!ei(e, t);
      }
      function eu(e, t) {
        t && e.triggers.add(t);
      }
      class ec extends EventTarget {
        addEventListener(e, t, n) {
          return super.addEventListener(e, t, n);
        }
        removeEventListener(e, t, n) {
          return super.removeEventListener(e, t, n);
        }
      }
      function ed(e, t, n, r) {
        return o
          ? U
          : (e.addEventListener(t, n, r),
            N(() => e.removeEventListener(t, n, r)));
      }
      function ef(e) {
        return !!e?.type.startsWith("pointer");
      }
      function em(e) {
        return !!e?.type.startsWith("touch");
      }
      function ep(e) {
        return /^(click|mouse)/.test(e?.type ?? "");
      }
      function eh(e) {
        return !!e?.type.startsWith("key");
      }
      function eC(e) {
        return eh(e) && "Enter" === e.key;
      }
      function eg(e) {
        return eh(e) && ("Enter" === e.key || " " === e.key);
      }
      function ev(e) {
        return e instanceof Node;
      }
      function ey(e, t, n) {
        if (e) {
          if (n || "" === n || 0 === n) {
            let r = !0 === n ? "" : n + "";
            e.getAttribute(t) !== r && e.setAttribute(t, r);
          } else e.removeAttribute(t);
        }
      }
      function eE(e, t, n) {
        e &&
          (n || 0 === n
            ? e.style.setProperty(t, n + "")
            : e.style.removeProperty(t));
      }
      function eb(e, t, n) {
        e.classList[n ? "add" : "remove"](t);
      }
      function ew(e) {
        let t = e;
        for (; "function" == typeof t; ) t = t.call(this);
        return t;
      }
      function e$(e) {
        return { id: Symbol(), provide: e };
      }
      function eN(e, t, n = c) {
        let r = !q(t);
        !(function (e, t, n = c) {
          n && (n.$cx = { ...n.$cx, [e]: t });
        })(e.id, r ? t : e.provide?.(), n);
      }
      function ex(e) {
        return $(e.id);
      }
      function eS(e) {
        return !q($(e.id));
      }
      let eL = Symbol(0),
        eM = Symbol(0),
        ek = Symbol(0),
        eR = {};
      class eV {
        constructor(e, t, n) {
          (this[l] = null),
            (this.$el = Z(null)),
            (this.a = null),
            (this.d = null),
            (this.f = null),
            (this.g = null),
            (this.e = null),
            (this.o = !1),
            (this.i = eR),
            (this.b = null),
            (this.c = null),
            (this.l = []),
            (this.m = []),
            (this.j = []),
            (this.n = []),
            (this.d = t),
            n?.scope && n.scope.append(t);
          let r = e.state,
            a = e.props;
          if (
            (r &&
              ((this.h = r.create()),
              (this.k = new Proxy(this.h, { get: (e, t) => this.h[t]() })),
              eN(r, this.h)),
            a &&
              ((this.i = (function (e) {
                let t = {};
                for (let n of Object.keys(e)) {
                  let r = e[n];
                  t[n] = Z(r, r);
                }
                return t;
              })(a)),
              n?.props))
          )
            for (let e of Object.keys(n.props)) this.i[e]?.set(n.props[e]);
          N(this.p.bind(this));
        }
        w() {
          w(() => {
            for (let e of this.l) e();
          }, this.d);
        }
        x(e) {
          this.a ||
            ((this.a = e),
            this.$el.set(e),
            w(() => {
              (this.f = T()),
                w(() => {
                  for (let e of this.m) e(this.a);
                  this.q(), this.r();
                }, this.f);
            }, this.d),
            e.dispatchEvent(new Event("attached")));
        }
        s() {
          this.f?.dispose(),
            (this.f = null),
            (this.g = null),
            (this.a = null),
            this.$el.set(null);
        }
        y() {
          this.a &&
            this.f &&
            this.j.length &&
            w(() => {
              (this.g = T()),
                w(() => {
                  for (let e of this.j) e(this.a);
                }, this.g);
            }, this.f);
        }
        z() {
          this.g?.dispose(), (this.g = null);
        }
        p() {
          if (this.o) return;
          (this.o = !0),
            w(() => {
              for (let e of this.n) e(this.a);
            }, this.d);
          let e = this.a;
          this.s(),
            this.d.dispose(),
            (this.l.length = 0),
            (this.m.length = 0),
            (this.j.length = 0),
            (this.n.length = 0),
            (this.e = null),
            (this.b = null),
            (this.c = null),
            (this.i = eR),
            (this.d = null),
            (this.k = eR),
            (this.h = null),
            e && delete e.$;
        }
        t(e) {
          e.onSetup && this.l.push(e.onSetup.bind(e)),
            e.onAttach && this.m.push(e.onAttach.bind(e)),
            e.onConnect && this.j.push(e.onConnect.bind(e)),
            e.onDestroy && this.n.push(e.onDestroy.bind(e));
        }
        q() {
          if (this.b)
            for (let e of Object.keys(this.b))
              o
                ? ey(this.a, e, ew.call(this.e, this.b[e]))
                : X(this.b[e])
                  ? et(this.u.bind(this, e))
                  : ey(this.a, e, this.b[e]);
        }
        r() {
          if (this.c)
            for (let e of Object.keys(this.c))
              o
                ? eE(this.a, e, ew.call(this.e, this.c[e]))
                : X(this.c[e])
                  ? et(this.v.bind(this, e))
                  : eE(this.a, e, this.c[e]);
        }
        u(e) {
          ey(this.a, e, this.b[e].call(this.e));
        }
        v(e) {
          eE(this.a, e, this.c[e].call(this.e));
        }
      }
      l = ek;
      let eI = { $$: null };
      function eT(e, t) {
        return (function (e) {
          let t = T();
          return L(t, e.length ? e.bind(null, x.bind(t)) : e, null);
        })(() => {
          eI.$$ = new eV(e, c, t);
          let n = new e();
          return (eI.$$.e = n), (eI.$$ = null), n;
        });
      }
      class eD extends EventTarget {
        constructor() {
          super(), eI.$$ && this.attach(eI);
        }
        get el() {
          return this.$$.a;
        }
        get $el() {
          return this.$$.$el();
        }
        get scope() {
          return this.$$.d;
        }
        get attachScope() {
          return this.$$.f;
        }
        get connectScope() {
          return this.$$.g;
        }
        get $props() {
          return this.$$.i;
        }
        get $state() {
          return this.$$.h;
        }
        get state() {
          return this.$$.k;
        }
        attach({ $$: e }) {
          return (this.$$ = e), e.t(this), this;
        }
        addEventListener(e, t, n) {
          this.listen(e, t, n);
        }
        removeEventListener(e, t, n) {
          this.el?.removeEventListener(e, t, n);
        }
        setAttributes(e) {
          this.$$.b || (this.$$.b = {}), Object.assign(this.$$.b, e);
        }
        setStyles(e) {
          this.$$.c || (this.$$.c = {}), Object.assign(this.$$.c, e);
        }
        setCSSVars(e) {
          this.setStyles(e);
        }
        createEvent(e, ...t) {
          return new el(e, t[0]);
        }
        dispatch(e, ...t) {
          if (o || !this.el) return !1;
          let n = e instanceof Event ? e : new el(e, t[0]);
          return (
            Object.defineProperty(n, "target", { get: () => this.$$.e }),
            y(() => (this.$$[ek]?.(n), this.el.dispatchEvent(n)))
          );
        }
        dispatchEvent(e) {
          return this.dispatch(e);
        }
        listen(e, t, n) {
          return o || !this.el ? U : ed(this.el, e, t, n);
        }
      }
      class eP extends eD {
        subscribe(e) {
          return w(() => et(() => e(this.state)), this.$$.d);
        }
        destroy() {
          this.$$.p();
        }
      }
      function eB(e, t, n) {
        e[eL] || (e[eL] = new Set()), e[eL].add(t);
      }
      function eA(e, t, n) {
        e[eM] || (e[eM] = new Set()), e[eM].add(t);
      }
      class eH {
        constructor(e) {
          (this.id = Symbol(0)),
            (this.record = e),
            (this.A = Object.getOwnPropertyDescriptors(e));
        }
        create() {
          let e = {},
            t = new Proxy(e, { get: (t, n) => e[n]() });
          for (let n of Object.keys(this.record)) {
            let r = this.A[n].get;
            e[n] = r ? W(r.bind(t)) : Z(this.record[n]);
          }
          return e;
        }
        reset(e, t) {
          for (let n of Object.keys(e))
            !this.A[n].get && (!t || t(n)) && e[n].set(this.record[n]);
        }
      }
      function eF(e) {
        return ex(e);
      }
      function eO(e) {
        return e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      }
      function eZ(e) {
        return e.replace(/-./g, (e) => e[1].toUpperCase());
      }
      function eW(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
      let ej = a.createContext({ current: null });
      function ez(e, ...t) {
        return a.createElement(ej.Provider, { value: e }, ...t);
      }
      function eU() {
        return a.useContext(ej).current;
      }
      function eG(e) {
        let t = eU();
        return a.useMemo(() => $(e.id, t), [t]);
      }
      function eq(e, t) {
        "function" == typeof e ? e(t) : e && (e.current = t);
      }
      function eK(...e) {
        return (t) => e.forEach((e) => eq(e, t));
      }
      function e_({ effect: e }) {
        return a.useEffect(e, []), null;
      }
      (ej.displayName = "Scope"),
        (class extends a.Component {
          constructor(e, t) {
            super(e),
              (this.d = { current: T() }),
              t && t.append(this.d.current);
            let n = this.constructor;
            n.F && eN(n.F, n.T?.(), this.d.current);
          }
          render() {
            return ez(this.d, this.props?.children);
          }
        }.contextType = ej);
      let eQ = new Map();
      function eJ(e, t) {
        if (e.a !== t || !e.Q) {
          if ((e.Q && eY(e), e._))
            for (let n of (e.ca || (e.ca = new Set()), Object.keys(e._)))
              e.ca.has(n) || (t.addEventListener(n, e.ba), e.ca.add(n));
          e.e.$$.x(t),
            (e.E = window.requestAnimationFrame(() => {
              e.e.$$.y(), (e.E = -1);
            })),
            (e.Q = !0);
        }
      }
      function eY(e) {
        if (
          e.Q &&
          (window.cancelAnimationFrame(e.E),
          (e.E = -1),
          e.e.$$.s(),
          (e.Q = !1),
          e.a && e.ca)
        ) {
          for (let t of e.ca) e.a.removeEventListener(t, e.ba);
          e.ca.clear();
        }
      }
      function eX(e) {
        let t = eQ.get(e.type),
          n = q(e.detail) ? [e] : [e.detail, e];
        !t &&
          eQ.set(
            e.type,
            (t = `on${eW(e.type.replace(/-./g, (e) => " " + e[1].toUpperCase())).replace(/\s/g, "")}`),
          ),
          this.J[t]?.(...n);
      }
      function e1(e, t, n, r) {
        let l = eT(e, { props: n, scope: r });
        return (l.$$[ek] = eX.bind(t)), l.$$.w(), l;
      }
      let e6 = Symbol(0),
        e3 = /\s+/,
        e2 = /\s*:\s*/,
        e9 = /\s*;\s*/;
      class e0 {
        constructor(e) {
          (this.keepAlive = !1),
            (this.forwardKeepAlive = !0),
            (this.attributes = new e7()),
            (this.style = new e4()),
            (this.classList = new e5()),
            (this.$ = e);
        }
        get $props() {
          return this.$.$$.i;
        }
        get $state() {
          return this.$.$$.h;
        }
        get state() {
          return this.$.state;
        }
        setup() {
          let e = this.$.$$;
          w(() => {
            this.hasAttribute("class") &&
              (function (e, t) {
                for (let n of t.trim().split(e3)) e.add(n);
              })(this.classList.tokens, this.getAttribute("class")),
              this.hasAttribute("style") &&
                (function (e, t) {
                  let n = t.trim().split(e9);
                  for (let t = 0; t < n.length; t++) {
                    if ("" === n[t]) continue;
                    let [r, l] = n[t].split(e2);
                    e.set(r, l);
                  }
                })(this.style.tokens, this.getAttribute("style")),
              e.w(),
              e.x(this),
              this.classList.length > 0 &&
                this.setAttribute("class", this.classList.toString()),
              this.style.length > 0 &&
                this.setAttribute("style", this.style.toString()),
              this.keepAlive && this.setAttribute("keep-alive", "");
          }, e.d);
        }
        getAttribute(e) {
          return this.attributes.getAttribute(e);
        }
        setAttribute(e, t) {
          this.attributes.setAttribute(e, t);
        }
        hasAttribute(e) {
          return this.attributes.hasAttribute(e);
        }
        removeAttribute(e) {
          return this.attributes.removeAttribute(e);
        }
        [e6]() {}
        addEventListener() {}
        removeEventListener() {}
        dispatchEvent() {
          return !1;
        }
        subscribe() {
          return U;
        }
        destroy() {
          this.$.destroy();
        }
      }
      class e7 {
        constructor() {
          this.Z = new Map();
        }
        get length() {
          return this.Z.size;
        }
        get tokens() {
          return this.Z;
        }
        getAttribute(e) {
          return this.Z.get(e) ?? null;
        }
        hasAttribute(e) {
          return this.Z.has(e);
        }
        setAttribute(e, t) {
          this.Z.set(e, t + "");
        }
        removeAttribute(e) {
          this.Z.delete(e);
        }
        toString() {
          if (0 === this.Z.size) return "";
          let e = "";
          for (let [t, n] of this.Z)
            e += ` ${t}="${(function e(t, n = !1) {
              let r = typeof t;
              if ("string" !== r)
                return n || "function" !== r
                  ? n && "boolean" === r
                    ? t + ""
                    : t
                  : e(t());
              let l = n ? '"' : "<",
                a = n ? "&quot;" : "&lt;",
                o = t.indexOf(l),
                i = t.indexOf("&");
              if (o < 0 && i < 0) return t;
              let s = 0,
                u = "";
              for (; o >= 0 && i >= 0; )
                o < i
                  ? (s < o && (u += t.substring(s, o)),
                    (u += a),
                    (s = o + 1),
                    (o = t.indexOf(l, s)))
                  : (s < i && (u += t.substring(s, i)),
                    (u += "&amp;"),
                    (s = i + 1),
                    (i = t.indexOf("&", s)));
              if (o >= 0)
                do
                  s < o && (u += t.substring(s, o)),
                    (u += a),
                    (s = o + 1),
                    (o = t.indexOf(l, s));
                while (o >= 0);
              else
                for (; i >= 0; )
                  s < i && (u += t.substring(s, i)),
                    (u += "&amp;"),
                    (s = i + 1),
                    (i = t.indexOf("&", s));
              return s < t.length ? u + t.substring(s) : u;
            })(n, !0)}"`;
          return e;
        }
      }
      class e4 {
        constructor() {
          this.Z = new Map();
        }
        get length() {
          return this.Z.size;
        }
        get tokens() {
          return this.Z;
        }
        getPropertyValue(e) {
          return this.Z.get(e) ?? "";
        }
        setProperty(e, t) {
          this.Z.set(e, t ?? "");
        }
        removeProperty(e) {
          let t = this.Z.get(e);
          return this.Z.delete(e), t ?? "";
        }
        toString() {
          if (0 === this.Z.size) return "";
          let e = "";
          for (let [t, n] of this.Z) e += `${t}: ${n};`;
          return e;
        }
      }
      class e5 {
        constructor() {
          this.Z = new Set();
        }
        get length() {
          return this.Z.size;
        }
        get tokens() {
          return this.Z;
        }
        add(...e) {
          for (let t of e) this.Z.add(t);
        }
        contains(e) {
          return this.Z.has(e);
        }
        remove(e) {
          this.Z.delete(e);
        }
        replace(e, t) {
          return !!this.Z.has(e) && (this.Z.delete(e), this.Z.add(t), !0);
        }
        toggle(e, t) {
          return !0 !== t && (this.Z.has(e) || !1 === t)
            ? (this.Z.delete(e), !1)
            : (this.Z.add(e), !0);
        }
        toString() {
          return Array.from(this.Z).join(" ");
        }
      }
      let e8 = {
        acceptcharset: "acceptCharset",
        "accept-charset": "acceptCharset",
        accesskey: "accessKey",
        allowfullscreen: "allowFullScreen",
        autocapitalize: "autoCapitalize",
        autocomplete: "autoComplete",
        autocorrect: "autoCorrect",
        autofocus: "autoFocus",
        autoplay: "autoPlay",
        autosave: "autoSave",
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        charset: "charSet",
        class: "className",
        classid: "classID",
        classname: "className",
        colspan: "colSpan",
        contenteditable: "contentEditable",
        contextmenu: "contextMenu",
        controlslist: "controlsList",
        crossorigin: "crossOrigin",
        dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
        datetime: "dateTime",
        defaultchecked: "defaultChecked",
        defaultvalue: "defaultValue",
        disablepictureinpicture: "disablePictureInPicture",
        disableremoteplayback: "disableRemotePlayback",
        enctype: "encType",
        enterkeyhint: "enterKeyHint",
        fetchpriority: "fetchPriority",
        for: "htmlFor",
        formmethod: "formMethod",
        formaction: "formAction",
        formenctype: "formEncType",
        formnovalidate: "formNoValidate",
        formtarget: "formTarget",
        frameborder: "frameBorder",
        hreflang: "hrefLang",
        htmlfor: "htmlFor",
        httpequiv: "httpEquiv",
        "http-equiv": "httpEquiv",
        imagesizes: "imageSizes",
        imagesrcset: "imageSrcSet",
        innerhtml: "innerHTML",
        inputmode: "inputMode",
        itemid: "itemID",
        itemprop: "itemProp",
        itemref: "itemRef",
        itemscope: "itemScope",
        itemtype: "itemType",
        keyparams: "keyParams",
        keytype: "keyType",
        marginwidth: "marginWidth",
        marginheight: "marginHeight",
        maxlength: "maxLength",
        mediagroup: "mediaGroup",
        minlength: "minLength",
        nomodule: "noModule",
        novalidate: "noValidate",
        playsinline: "playsInline",
        radiogroup: "radioGroup",
        readonly: "readOnly",
        referrerpolicy: "referrerPolicy",
        rowspan: "rowSpan",
        spellcheck: "spellCheck",
        srcdoc: "srcDoc",
        srclang: "srcLang",
        srcset: "srcSet",
        tabindex: "tabIndex",
        usemap: "useMap",
      };
      function te(e) {
        return eG(e);
      }
      function tt(e, t) {
        let [, n] = a.useState();
        return (
          a.useEffect(
            () =>
              j(() => {
                e(), n({});
              }),
            [t ?? e],
          ),
          e()
        );
      }
      function tn(e) {
        return e ? "true" : "false";
      }
      function tr() {
        let e = new Set();
        return {
          add(...t) {
            for (let n of t) e.add(n);
          },
          empty() {
            for (let t of e) t();
            e.clear();
          },
        };
      }
      function tl() {
        let e = tr();
        return N(e.empty), e;
      }
      function ta(e) {
        return Object.keys(e);
      }
      function to() {
        let e, t;
        return {
          promise: new Promise((n, r) => {
            (e = n), (t = r);
          }),
          resolve: e,
          reject: t,
        };
      }
      function ti(e) {
        return new Promise((t) => setTimeout(t, e));
      }
      function ts(e) {
        if (o) return U;
        let t = -1,
          n;
        return function (...r) {
          (n = r),
            t >= 0 ||
              (t = window.requestAnimationFrame(() => {
                e.apply(this, n), (t = -1), (n = void 0);
              }));
        };
      }
      let tu = o
        ? U
        : "undefined" != typeof window
          ? "requestIdleCallback" in window
            ? window.requestIdleCallback
            : (e) => window.setTimeout(e, 1)
          : U;
      function tc(e, t) {
        return o
          ? Promise.resolve()
          : new Promise((n) => {
              tu((t) => {
                e?.(t), n();
              }, t);
            });
      }
      function td(e) {
        let [, t] = a.useState(),
          n = a.useRef(null);
        return (
          null == n.current &&
            (n.current = { state: {}, $update: Z({}), props: new Set() }),
          a.useEffect(() => {
            let { state: r, $update: l, props: a } = n.current;
            return et(() => {
              for (let t of a) {
                let n = e[t]();
                r[t] = ee(n) ? [...n] : n;
              }
              l(), t({});
            });
          }, [e]),
          a.useMemo(() => {
            let { state: t, $update: r, props: l } = n.current,
              a = !1;
            return (
              l.clear(),
              new Proxy(t, {
                get(n, o) {
                  if (!l.has(o) && o in e) {
                    l.add(o);
                    let n = e[o]();
                    (t[o] = ee(n) ? [...n] : n),
                      a ||
                        (r.set({}), (a = !0), queueMicrotask(() => (a = !1)));
                  }
                  return t[o];
                },
                set: (n, r, l) => (r in e || (t[r] = l), !0),
              })
            );
          }, [e])
        );
      }
      function tf(e, t) {
        return o
          ? (function (e, t) {
              function n(n) {
                let r = eT(e, { props: n, scope: a.useContext(ej).current }),
                  l = new e0(r),
                  o = {},
                  { style: i = {}, children: s, forwardRef: u, ...c } = n;
                if (t.props.size)
                  for (let e of Object.keys(c)) t.props.has(e) || (o[e] = c[e]);
                else o = c;
                if ((l.setup(), l.hasAttribute("style"))) {
                  for (let [e, t] of l.style.tokens)
                    i[e.startsWith("--") ? e : eZ(e)] = t;
                  l.removeAttribute("style");
                }
                for (let [e, t] of l.attributes.tokens) {
                  let n = e8[e];
                  n && (n in o || (o[n] = t), l.removeAttribute(e));
                }
                return ez(
                  { current: r.$$.d },
                  X(s)
                    ? s?.(
                        {
                          ...Object.fromEntries(l.attributes.tokens),
                          ...o,
                          style: i,
                        },
                        r,
                      )
                    : s,
                  a.createElement(() => (l.destroy(), null)),
                );
              }
              return (n.displayName = e.name + "Bridge"), n;
            })(e, { props: new Set(Object.keys(e.props || {})) })
          : (function (e, t) {
              let n = a.forwardRef((n, r) => {
                let l = a.useContext(ej),
                  o = a.useRef(null),
                  i = a.useRef();
                if (!i.current) {
                  let t = (function () {
                      let e = {
                        a: null,
                        aa: [],
                        J: {},
                        _: {},
                        K: -1,
                        E: -1,
                        ea: -1,
                        Q: !1,
                        da: !1,
                        ca: null,
                        ba(t) {
                          let n = q(t.detail) ? [t] : [t.detail, t];
                          e._[t.type]?.(...n);
                        },
                      };
                      return e;
                    })(),
                    r = e1(e, t, n, l.current);
                  (t.e = r), (i.current = t), (o.current = r.scope);
                }
                a.useEffect(() => {
                  let e = i.current;
                  return (
                    window.cancelAnimationFrame(e.ea),
                    (e.ea = -1),
                    function () {
                      X(n.children) &&
                        (window.cancelAnimationFrame(e.K),
                        (e.K = -1),
                        window.cancelAnimationFrame(e.E),
                        (e.E = -1),
                        window.cancelAnimationFrame(e.ea),
                        (e.ea = window.requestAnimationFrame(() => {
                          (e.ea = -1),
                            eY(e),
                            e.e.$$.p(),
                            (e.e.$$[ek] = null),
                            (e.J = {}),
                            (e._ = {}),
                            (o.current = null);
                        })));
                    }
                  );
                }, []),
                  a.useEffect(E);
                let s = i.current,
                  { children: u, ...c } = n,
                  d = {},
                  f = s.aa,
                  m = Object.keys(c);
                for (let n of ((s.J = {}), [...f, ...m]))
                  if (t.props.has(n))
                    s.e.$props[n].set(q(c[n]) ? e.props?.[n] : c[n]);
                  else if (t.events?.has(n) || t.eventsRE?.test(n))
                    s.J[n] = c[n];
                  else if (t.domEvents?.has(n) || t.domEventsRE?.test(n)) {
                    let e = eO(n.slice(2));
                    (s._[e] = c[n]),
                      m.includes(n)
                        ? s.a &&
                          !s.ca?.has(e) &&
                          (s.ca || (s.ca = new Set()),
                          s.ca.add(e),
                          s.a.addEventListener(e, s.ba))
                        : (s.a?.removeEventListener(e, s.ba), s.ca?.delete(e));
                  } else d[n] = c[n];
                return (
                  (s.aa = m),
                  ez(
                    o,
                    a.createElement(e_, {
                      effect: function () {
                        let t = i.current,
                          a = l.current;
                        if (
                          (window.cancelAnimationFrame(t.ea),
                          (t.ea = -1),
                          t.e.$$.o)
                        ) {
                          let r = e1(e, t, n, a);
                          (t.e = r),
                            (t.Q = !1),
                            (t.da = !1),
                            (o.current = r.scope);
                        }
                        return (
                          t.a && eJ(t, t.a),
                          t.da || (eq(r, t.e), (t.da = !0)),
                          () => eY(t)
                        );
                      },
                    }),
                    X(u)
                      ? u?.(
                          {
                            ...d,
                            suppressHydrationWarning: !0,
                            ref: function (e) {
                              let t = i.current;
                              if (!t.da) {
                                t.a = e;
                                return;
                              }
                              window.cancelAnimationFrame(t.K),
                                (t.K = window.requestAnimationFrame(() => {
                                  let t = i.current;
                                  (t.K = -1),
                                    t.a !== e &&
                                      (eY(t), e && eJ(t, e), (t.a = e));
                                }));
                            },
                          },
                          s.e,
                        )
                      : u,
                  )
                );
              });
              return (n.displayName = e.name + "Bridge"), n;
            })(e, {
              props: new Set(Object.keys(e.props || {})),
              events: new Set(t?.events),
              eventsRE: t?.eventsRegex,
              domEvents: t?.domEvents,
              domEventsRE: t?.domEventsRegex,
            });
      }
      var tm = {
          fullscreenEnabled: 0,
          fullscreenElement: 1,
          requestFullscreen: 2,
          exitFullscreen: 3,
          fullscreenchange: 4,
          fullscreenerror: 5,
          fullscreen: 6,
        },
        tp =
          "undefined" != typeof window && void 0 !== window.document
            ? window.document
            : {},
        th =
          ("fullscreenEnabled" in tp && Object.keys(tm)) ||
          ("webkitFullscreenEnabled" in tp && [
            "webkitFullscreenEnabled",
            "webkitFullscreenElement",
            "webkitRequestFullscreen",
            "webkitExitFullscreen",
            "webkitfullscreenchange",
            "webkitfullscreenerror",
            "-webkit-full-screen",
          ]) ||
          ("mozFullScreenEnabled" in tp && [
            "mozFullScreenEnabled",
            "mozFullScreenElement",
            "mozRequestFullScreen",
            "mozCancelFullScreen",
            "mozfullscreenchange",
            "mozfullscreenerror",
            "-moz-full-screen",
          ]) ||
          ("msFullscreenEnabled" in tp && [
            "msFullscreenEnabled",
            "msFullscreenElement",
            "msRequestFullscreen",
            "msExitFullscreen",
            "MSFullscreenChange",
            "MSFullscreenError",
            "-ms-fullscreen",
          ]) ||
          [],
        tC = {
          requestFullscreen: function (e) {
            return e[th[tm.requestFullscreen]]();
          },
          requestFullscreenFunction: function (e) {
            return e[th[tm.requestFullscreen]];
          },
          get exitFullscreen() {
            return tp[th[tm.exitFullscreen]].bind(tp);
          },
          get fullscreenPseudoClass() {
            return ":" + th[tm.fullscreen];
          },
          addEventListener: function (e, t, n) {
            return tp.addEventListener(th[tm[e]], t, n);
          },
          removeEventListener: function (e, t, n) {
            return tp.removeEventListener(th[tm[e]], t, n);
          },
          get fullscreenEnabled() {
            return !!tp[th[tm.fullscreenEnabled]];
          },
          set fullscreenEnabled(val) {},
          get fullscreenElement() {
            return tp[th[tm.fullscreenElement]];
          },
          set fullscreenElement(val) {},
          get onfullscreenchange() {
            return tp[("on" + th[tm.fullscreenchange]).toLowerCase()];
          },
          set onfullscreenchange(handler) {
            return (tp[("on" + th[tm.fullscreenchange]).toLowerCase()] =
              handler);
          },
          get onfullscreenerror() {
            return tp[("on" + th[tm.fullscreenerror]).toLowerCase()];
          },
          set onfullscreenerror(handler) {
            return (tp[("on" + th[tm.fullscreenerror]).toLowerCase()] =
              handler);
          },
        },
        tg = function (e, t, n) {
          var r = null,
            l = null,
            a = n && n.leading,
            o = n && n.trailing;
          null == a && (a = !0), null == o && (o = !a), !0 == a && (o = !1);
          var i = function () {
              r && (clearTimeout(r), (r = null));
            },
            s = function () {
              var n = a && !r,
                i = this,
                s = arguments;
              if (
                ((l = function () {
                  return e.apply(i, s);
                }),
                r ||
                  (r = setTimeout(function () {
                    if (((r = null), o)) return l();
                  }, t)),
                n)
              )
                return (n = !1), l();
            };
          return (
            (s.cancel = i),
            (s.flush = function () {
              var e = l;
              i(), e && e();
            }),
            s
          );
        },
        tv = function (e, t, n) {
          var r = null,
            l = null,
            a = function () {
              r && (clearTimeout(r), (l = null), (r = null));
            },
            o = function () {
              if (!t) return e.apply(this, arguments);
              var o = this,
                i = arguments,
                s = n && !r;
              if (
                (a(),
                (l = function () {
                  e.apply(o, i);
                }),
                (r = setTimeout(function () {
                  if (((r = null), !s)) {
                    var e = l;
                    return (l = null), e();
                  }
                }, t)),
                s)
              )
                return l();
            };
          return (
            (o.cancel = a),
            (o.flush = function () {
              var e = l;
              a(), e && e();
            }),
            o
          );
        };
      let ty = (e) => "object" == typeof e && null != e && 1 === e.nodeType,
        tE = (e, t) =>
          (!t || "hidden" !== e) && "visible" !== e && "clip" !== e,
        tb = (e, t) => {
          if (
            e.clientHeight < e.scrollHeight ||
            e.clientWidth < e.scrollWidth
          ) {
            let n = getComputedStyle(e, null);
            return (
              tE(n.overflowY, t) ||
              tE(n.overflowX, t) ||
              ((e) => {
                let t = ((e) => {
                  if (!e.ownerDocument || !e.ownerDocument.defaultView)
                    return null;
                  try {
                    return e.ownerDocument.defaultView.frameElement;
                  } catch (e) {
                    return null;
                  }
                })(e);
                return (
                  !!t &&
                  (t.clientHeight < e.scrollHeight ||
                    t.clientWidth < e.scrollWidth)
                );
              })(e)
            );
          }
          return !1;
        },
        tw = (e, t, n, r, l, a, o, i) =>
          (a < e && o > t) || (a > e && o < t)
            ? 0
            : (a <= e && i <= n) || (o >= t && i >= n)
              ? a - e - r
              : (o > t && i < n) || (a < e && i > n)
                ? o - t + l
                : 0,
        t$ = (e) => {
          let t = e.parentElement;
          return null == t ? e.getRootNode().host || null : t;
        },
        tN = (e, t) => {
          var n, r, l, a;
          if ("undefined" == typeof document) return [];
          let {
              scrollMode: o,
              block: i,
              inline: s,
              boundary: u,
              skipOverflowHiddenElements: c,
            } = t,
            d = "function" == typeof u ? u : (e) => e !== u;
          if (!ty(e)) throw TypeError("Invalid target");
          let f = document.scrollingElement || document.documentElement,
            m = [],
            p = e;
          for (; ty(p) && d(p); ) {
            if ((p = t$(p)) === f) {
              m.push(p);
              break;
            }
            (null != p &&
              p === document.body &&
              tb(p) &&
              !tb(document.documentElement)) ||
              (null != p && tb(p, c) && m.push(p));
          }
          let h =
              null !=
              (r = null == (n = window.visualViewport) ? void 0 : n.width)
                ? r
                : innerWidth,
            C =
              null !=
              (a = null == (l = window.visualViewport) ? void 0 : l.height)
                ? a
                : innerHeight,
            { scrollX: g, scrollY: v } = window,
            {
              height: y,
              width: E,
              top: b,
              right: w,
              bottom: $,
              left: N,
            } = e.getBoundingClientRect(),
            {
              top: x,
              right: S,
              bottom: L,
              left: M,
            } = ((e) => {
              let t = window.getComputedStyle(e);
              return {
                top: parseFloat(t.scrollMarginTop) || 0,
                right: parseFloat(t.scrollMarginRight) || 0,
                bottom: parseFloat(t.scrollMarginBottom) || 0,
                left: parseFloat(t.scrollMarginLeft) || 0,
              };
            })(e),
            k =
              "start" === i || "nearest" === i
                ? b - x
                : "end" === i
                  ? $ + L
                  : b + y / 2 - x + L,
            R =
              "center" === s ? N + E / 2 - M + S : "end" === s ? w + S : N - M,
            V = [];
          for (let e = 0; e < m.length; e++) {
            let t = m[e],
              {
                height: n,
                width: r,
                top: l,
                right: a,
                bottom: u,
                left: c,
              } = t.getBoundingClientRect();
            if (
              "if-needed" === o &&
              b >= 0 &&
              N >= 0 &&
              $ <= C &&
              w <= h &&
              b >= l &&
              $ <= u &&
              N >= c &&
              w <= a
            )
              break;
            let d = getComputedStyle(t),
              p = parseInt(d.borderLeftWidth, 10),
              x = parseInt(d.borderTopWidth, 10),
              S = parseInt(d.borderRightWidth, 10),
              L = parseInt(d.borderBottomWidth, 10),
              M = 0,
              I = 0,
              T =
                "offsetWidth" in t ? t.offsetWidth - t.clientWidth - p - S : 0,
              D =
                "offsetHeight" in t
                  ? t.offsetHeight - t.clientHeight - x - L
                  : 0,
              P =
                "offsetWidth" in t
                  ? 0 === t.offsetWidth
                    ? 0
                    : r / t.offsetWidth
                  : 0,
              B =
                "offsetHeight" in t
                  ? 0 === t.offsetHeight
                    ? 0
                    : n / t.offsetHeight
                  : 0;
            if (f === t)
              (M =
                "start" === i
                  ? k
                  : "end" === i
                    ? k - C
                    : "nearest" === i
                      ? tw(v, v + C, C, x, L, v + k, v + k + y, y)
                      : k - C / 2),
                (I =
                  "start" === s
                    ? R
                    : "center" === s
                      ? R - h / 2
                      : "end" === s
                        ? R - h
                        : tw(g, g + h, h, p, S, g + R, g + R + E, E)),
                (M = Math.max(0, M + v)),
                (I = Math.max(0, I + g));
            else {
              (M =
                "start" === i
                  ? k - l - x
                  : "end" === i
                    ? k - u + L + D
                    : "nearest" === i
                      ? tw(l, u, n, x, L + D, k, k + y, y)
                      : k - (l + n / 2) + D / 2),
                (I =
                  "start" === s
                    ? R - c - p
                    : "center" === s
                      ? R - (c + r / 2) + T / 2
                      : "end" === s
                        ? R - a + S + T
                        : tw(c, a, r, p, S + T, R, R + E, E));
              let { scrollLeft: e, scrollTop: o } = t;
              (M =
                0 === B
                  ? 0
                  : Math.max(
                      0,
                      Math.min(o + M / B, t.scrollHeight - n / B + D),
                    )),
                (I =
                  0 === P
                    ? 0
                    : Math.max(
                        0,
                        Math.min(e + I / P, t.scrollWidth - r / P + T),
                      )),
                (k += o - M),
                (R += e - I);
            }
            V.push({ el: t, top: M, left: I });
          }
          return V;
        };
      var tx =
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M15.0007 28.7923C15.0007 29.0152 14.9774 29.096 14.9339 29.1775C14.8903 29.259 14.8263 29.323 14.7449 29.3665C14.6634 29.4101 14.5826 29.4333 14.3597 29.4333H12.575C12.3521 29.4333 12.2713 29.4101 12.1898 29.3665C12.1083 29.323 12.0443 29.259 12.0008 29.1775C11.9572 29.096 11.934 29.0152 11.934 28.7923V12.2993L5.97496 12.3C5.75208 12.3 5.67125 12.2768 5.58977 12.2332C5.50829 12.1896 5.44434 12.1257 5.40077 12.0442C5.35719 11.9627 5.33398 11.8819 5.33398 11.659V9.87429C5.33398 9.65141 5.35719 9.57059 5.40077 9.48911C5.44434 9.40762 5.50829 9.34368 5.58977 9.3001C5.67125 9.25652 5.75208 9.23332 5.97496 9.23332H26.0263C26.2492 9.23332 26.33 9.25652 26.4115 9.3001C26.493 9.34368 26.557 9.40762 26.6005 9.48911C26.6441 9.57059 26.6673 9.65141 26.6673 9.87429V11.659C26.6673 11.8819 26.6441 11.9627 26.6005 12.0442C26.557 12.1257 26.493 12.1896 26.4115 12.2332C26.33 12.2768 26.2492 12.3 26.0263 12.3L20.067 12.2993L20.0673 28.7923C20.0673 29.0152 20.0441 29.096 20.0005 29.1775C19.957 29.259 19.893 29.323 19.8115 29.3665C19.73 29.4101 19.6492 29.4333 19.4263 29.4333H17.6416C17.4187 29.4333 17.3379 29.4101 17.2564 29.3665C17.175 29.323 17.111 29.259 17.0674 29.1775C17.0239 29.096 17.0007 29.0152 17.0007 28.7923L17 22.7663H15L15.0007 28.7923Z" fill="currentColor"/> <path d="M16.0007 7.89998C17.4734 7.89998 18.6673 6.70608 18.6673 5.23332C18.6673 3.76056 17.4734 2.56665 16.0007 2.56665C14.5279 2.56665 13.334 3.76056 13.334 5.23332C13.334 6.70608 14.5279 7.89998 16.0007 7.89998Z" fill="currentColor"/>',
        tS =
          '<path d="M5.33334 6.00001C5.33334 5.63182 5.63181 5.33334 6 5.33334H26C26.3682 5.33334 26.6667 5.63182 26.6667 6.00001V20.6667C26.6667 21.0349 26.3682 21.3333 26 21.3333H23.7072C23.4956 21.3333 23.2966 21.233 23.171 21.0628L22.1859 19.7295C21.8607 19.2894 22.1749 18.6667 22.7221 18.6667H23.3333C23.7015 18.6667 24 18.3682 24 18V8.66668C24 8.29849 23.7015 8.00001 23.3333 8.00001H8.66667C8.29848 8.00001 8 8.29849 8 8.66668V18C8 18.3682 8.29848 18.6667 8.66667 18.6667H9.29357C9.84072 18.6667 10.1549 19.2894 9.82976 19.7295L8.84467 21.0628C8.71898 21.233 8.52 21.3333 8.30848 21.3333H6C5.63181 21.3333 5.33334 21.0349 5.33334 20.6667V6.00001Z" fill="currentColor"/> <path d="M8.78528 25.6038C8.46013 26.0439 8.77431 26.6667 9.32147 26.6667L22.6785 26.6667C23.2256 26.6667 23.5398 26.0439 23.2146 25.6038L16.5358 16.5653C16.2693 16.2046 15.73 16.2047 15.4635 16.5653L8.78528 25.6038Z" fill="currentColor"/>',
        tL =
          '<path d="M17.4853 18.9093C17.4853 19.0281 17.6289 19.0875 17.7129 19.0035L22.4185 14.2979C22.6788 14.0376 23.1009 14.0376 23.3613 14.2979L24.7755 15.7122C25.0359 15.9725 25.0359 16.3946 24.7755 16.655L16.2902 25.1403C16.0299 25.4006 15.6078 25.4006 15.3474 25.1403L13.9332 23.726L13.9319 23.7247L6.86189 16.6547C6.60154 16.3944 6.60154 15.9723 6.86189 15.7119L8.2761 14.2977C8.53645 14.0373 8.95856 14.0373 9.21891 14.2977L13.9243 19.0031C14.0083 19.0871 14.1519 19.0276 14.1519 18.9088L14.1519 6.00004C14.1519 5.63185 14.4504 5.33337 14.8186 5.33337L16.8186 5.33337C17.1868 5.33337 17.4853 5.63185 17.4853 6.00004L17.4853 18.9093Z" fill="currentColor"/>',
        tM =
          '<path d="M13.0908 14.3334C12.972 14.3334 12.9125 14.1898 12.9965 14.1058L17.7021 9.40022C17.9625 9.13987 17.9625 8.71776 17.7021 8.45741L16.2879 7.04319C16.0275 6.78284 15.6054 6.78284 15.3451 7.04319L6.8598 15.5285C6.59945 15.7888 6.59945 16.2109 6.8598 16.4713L8.27401 17.8855L8.27536 17.8868L15.3453 24.9568C15.6057 25.2172 16.0278 25.2172 16.2881 24.9568L17.7024 23.5426C17.9627 23.2822 17.9627 22.8601 17.7024 22.5998L12.9969 17.8944C12.9129 17.8104 12.9724 17.6668 13.0912 17.6668L26 17.6668C26.3682 17.6668 26.6667 17.3683 26.6667 17.0001V15.0001C26.6667 14.6319 26.3682 14.3334 26 14.3334L13.0908 14.3334Z" fill="currentColor"/>',
        tk =
          '<path d="M14.1521 13.0929C14.1521 12.9741 14.0085 12.9147 13.9245 12.9987L9.21891 17.7043C8.95856 17.9646 8.53645 17.9646 8.2761 17.7043L6.86189 16.29C6.60154 16.0297 6.60154 15.6076 6.86189 15.3472L15.3472 6.86195C15.6075 6.6016 16.0296 6.6016 16.29 6.86195L17.7042 8.27616L17.7055 8.27751L24.7755 15.3475C25.0359 15.6078 25.0359 16.0299 24.7755 16.2903L23.3613 17.7045C23.1009 17.9649 22.6788 17.9649 22.4185 17.7045L17.7131 12.9991C17.6291 12.9151 17.4855 12.9746 17.4855 13.0934V26.0022C17.4855 26.3704 17.187 26.6688 16.8188 26.6688H14.8188C14.4506 26.6688 14.1521 26.3704 14.1521 26.0022L14.1521 13.0929Z" fill="currentColor"/>',
        tR =
          '<path d="M16.6927 25.3346C16.3245 25.3346 16.026 25.0361 16.026 24.6679L16.026 7.3346C16.026 6.96641 16.3245 6.66794 16.6927 6.66794L18.6927 6.66794C19.0609 6.66794 19.3594 6.96642 19.3594 7.3346L19.3594 24.6679C19.3594 25.0361 19.0609 25.3346 18.6927 25.3346H16.6927Z" fill="currentColor"/> <path d="M24.026 25.3346C23.6578 25.3346 23.3594 25.0361 23.3594 24.6679L23.3594 7.3346C23.3594 6.96641 23.6578 6.66794 24.026 6.66794L26.026 6.66794C26.3942 6.66794 26.6927 6.96642 26.6927 7.3346V24.6679C26.6927 25.0361 26.3942 25.3346 26.026 25.3346H24.026Z" fill="currentColor"/> <path d="M5.48113 23.9407C5.38584 24.2963 5.59689 24.6619 5.95254 24.7572L7.88439 25.2748C8.24003 25.3701 8.60559 25.159 8.70089 24.8034L13.1871 8.06067C13.2824 7.70503 13.0713 7.33947 12.7157 7.24417L10.7838 6.72654C10.4282 6.63124 10.0626 6.8423 9.96733 7.19794L5.48113 23.9407Z" fill="currentColor"/>',
        tV =
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.9266 7.57992C25.015 7.60672 25.0886 7.64746 25.2462 7.80506L26.956 9.51488C27.1136 9.67248 27.1543 9.74604 27.1811 9.83447C27.2079 9.9229 27.2079 10.0133 27.1811 10.1018C27.1543 10.1902 27.1136 10.2638 26.956 10.4214L13.1822 24.1951C13.0246 24.3527 12.951 24.3935 12.8626 24.4203C12.797 24.4402 12.7304 24.4453 12.6642 24.4357L12.7319 24.4203C12.6435 24.4471 12.553 24.4471 12.4646 24.4203C12.3762 24.3935 12.3026 24.3527 12.145 24.1951L5.04407 17.0942C4.88647 16.9366 4.84573 16.863 4.81893 16.7746C4.79213 16.6862 4.79213 16.5957 4.81893 16.5073C4.84573 16.4189 4.88647 16.3453 5.04407 16.1877L6.7539 14.4779C6.9115 14.3203 6.98506 14.2796 7.07349 14.2528C7.16191 14.226 7.25235 14.226 7.34078 14.2528C7.42921 14.2796 7.50277 14.3203 7.66037 14.4779L12.6628 19.4808L24.3397 7.80506C24.4973 7.64746 24.5709 7.60672 24.6593 7.57992C24.7477 7.55311 24.8382 7.55311 24.9266 7.57992Z" fill="currentColor"/>',
        tI =
          '<path d="M17.947 16.095C17.999 16.043 17.999 15.9585 17.947 15.9065L11.6295 9.58899C11.3691 9.32864 11.3691 8.90653 11.6295 8.64618L13.2323 7.04341C13.4926 6.78306 13.9147 6.78306 14.1751 7.04341L21.0289 13.8973C21.0392 13.9064 21.0493 13.9158 21.0591 13.9257L22.6619 15.5285C22.9223 15.7888 22.9223 16.2109 22.6619 16.4713L14.1766 24.9565C13.9163 25.2169 13.4942 25.2169 13.2338 24.9565L11.631 23.3538C11.3707 23.0934 11.3707 22.6713 11.631 22.411L17.947 16.095Z" fill="currentColor"/>',
        tT =
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7C5.63181 7 5.33333 7.29848 5.33333 7.66667V14.8667C5.33333 14.9403 5.39361 14.9999 5.46724 15.0009C10.8844 15.0719 15.2614 19.449 15.3325 24.8661C15.3334 24.9397 15.393 25 15.4667 25H26C26.3682 25 26.6667 24.7015 26.6667 24.3333V7.66667C26.6667 7.29848 26.3682 7 26 7H6ZM17.0119 22.2294C17.0263 22.29 17.0802 22.3333 17.1425 22.3333H23.3333C23.7015 22.3333 24 22.0349 24 21.6667V10.3333C24 9.96514 23.7015 9.66667 23.3333 9.66667H8.66667C8.29848 9.66667 8 9.96514 8 10.3333V13.1909C8 13.2531 8.04332 13.3071 8.10392 13.3214C12.5063 14.3618 15.9715 17.827 17.0119 22.2294Z" fill="currentColor"/> <path d="M13.2 25C13.2736 25 13.3334 24.9398 13.3322 24.8661C13.2615 20.5544 9.77889 17.0718 5.46718 17.0011C5.39356 16.9999 5.33333 17.0597 5.33333 17.1333V18.8667C5.33333 18.9403 5.39348 18.9999 5.4671 19.0015C8.67465 19.0716 11.2617 21.6587 11.3319 24.8662C11.3335 24.9399 11.393 25 11.4667 25H13.2Z" fill="currentColor"/> <path d="M5.33333 21.1333C5.33333 21.0597 5.39332 20.9998 5.46692 21.0022C7.57033 21.0712 9.26217 22.763 9.33114 24.8664C9.33356 24.94 9.27364 25 9.2 25H6C5.63181 25 5.33333 24.7015 5.33333 24.3333V21.1333Z" fill="currentColor"/>',
        tD = Object.freeze({ __proto__: null, default: tT }),
        tP =
          '<path d="M8 28.0003C8 27.6321 8.29848 27.3336 8.66667 27.3336H23.3333C23.7015 27.3336 24 27.6321 24 28.0003V29.3336C24 29.7018 23.7015 30.0003 23.3333 30.0003H8.66667C8.29848 30.0003 8 29.7018 8 29.3336V28.0003Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.66602 6.66699C4.29783 6.66699 3.99935 6.96547 3.99935 7.33366V24.667C3.99935 25.0352 4.29783 25.3337 4.66602 25.3337H27.3327C27.7009 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.7009 6.66699 27.3327 6.66699H4.66602ZM8.66659 21.3333C8.2984 21.3333 7.99992 21.0349 7.99992 20.6667V11.3333C7.99992 10.9651 8.2984 10.6667 8.66659 10.6667H13.9999C14.3681 10.6667 14.6666 10.9651 14.6666 11.3333V12.6667C14.6666 13.0349 14.3681 13.3333 13.9999 13.3333H10.7999C10.7263 13.3333 10.6666 13.393 10.6666 13.4667V18.5333C10.6666 18.607 10.7263 18.6667 10.7999 18.6667H13.9999C14.3681 18.6667 14.6666 18.9651 14.6666 19.3333V20.6667C14.6666 21.0349 14.3681 21.3333 13.9999 21.3333H8.66659ZM17.9999 21.3333C17.6317 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6317 10.6667 17.9999 10.6667H23.3333C23.7014 10.6667 23.9999 10.9651 23.9999 11.3333V12.6667C23.9999 13.0349 23.7014 13.3333 23.3333 13.3333H20.1333C20.0596 13.3333 19.9999 13.393 19.9999 13.4667V18.5333C19.9999 18.607 20.0596 18.6667 20.1333 18.6667H23.3333C23.7014 18.6667 23.9999 18.9651 23.9999 19.3333V20.6667C23.9999 21.0349 23.7014 21.3333 23.3333 21.3333H17.9999Z" fill="currentColor"/>',
        tB =
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M4.6661 6.66699C4.29791 6.66699 3.99943 6.96547 3.99943 7.33366V24.667C3.99943 25.0352 4.29791 25.3337 4.6661 25.3337H27.3328C27.701 25.3337 27.9994 25.0352 27.9994 24.667V7.33366C27.9994 6.96547 27.701 6.66699 27.3328 6.66699H4.6661ZM8.66667 21.3333C8.29848 21.3333 8 21.0349 8 20.6667V11.3333C8 10.9651 8.29848 10.6667 8.66667 10.6667H14C14.3682 10.6667 14.6667 10.9651 14.6667 11.3333V12.6667C14.6667 13.0349 14.3682 13.3333 14 13.3333H10.8C10.7264 13.3333 10.6667 13.393 10.6667 13.4667V18.5333C10.6667 18.607 10.7264 18.6667 10.8 18.6667H14C14.3682 18.6667 14.6667 18.9651 14.6667 19.3333V20.6667C14.6667 21.0349 14.3682 21.3333 14 21.3333H8.66667ZM18 21.3333C17.6318 21.3333 17.3333 21.0349 17.3333 20.6667V11.3333C17.3333 10.9651 17.6318 10.6667 18 10.6667H23.3333C23.7015 10.6667 24 10.9651 24 11.3333V12.6667C24 13.0349 23.7015 13.3333 23.3333 13.3333H20.1333C20.0597 13.3333 20 13.393 20 13.4667V18.5333C20 18.607 20.0597 18.6667 20.1333 18.6667H23.3333C23.7015 18.6667 24 18.9651 24 19.3333V20.6667C24 21.0349 23.7015 21.3333 23.3333 21.3333H18Z" fill="currentColor"/>',
        tA =
          '<path d="M14.2225 13.7867C14.3065 13.8706 14.4501 13.8112 14.4501 13.6924V5.99955C14.4501 5.63136 14.7486 5.33289 15.1167 5.33289H16.8501C17.2183 5.33289 17.5167 5.63136 17.5167 5.99955V13.6916C17.5167 13.8104 17.6604 13.8699 17.7444 13.7859L19.9433 11.5869C20.2037 11.3266 20.6258 11.3266 20.8861 11.5869L22.1118 12.8126C22.3722 13.0729 22.3722 13.4951 22.1118 13.7554L16.4549 19.4123C16.1946 19.6726 15.772 19.6731 15.5116 19.4128L9.85479 13.7559C9.59444 13.4956 9.59444 13.0734 9.85479 12.8131L11.0804 11.5874C11.3408 11.3271 11.7629 11.3271 12.0233 11.5874L14.2225 13.7867Z" fill="currentColor"/> <path d="M5.99998 20.267C5.63179 20.267 5.33331 20.5654 5.33331 20.9336V25.9997C5.33331 26.3678 5.63179 26.6663 5.99998 26.6663H26C26.3682 26.6663 26.6666 26.3678 26.6666 25.9997V20.9336C26.6666 20.5654 26.3682 20.267 26 20.267H24.2666C23.8985 20.267 23.6 20.5654 23.6 20.9336V22.9333C23.6 23.3014 23.3015 23.5999 22.9333 23.5999H9.06638C8.69819 23.5999 8.39972 23.3014 8.39972 22.9333V20.9336C8.39972 20.5654 8.10124 20.267 7.73305 20.267H5.99998Z" fill="currentColor"/>',
        tH =
          '<path d="M16 20C18.2091 20 20 18.2092 20 16C20 13.7909 18.2091 12 16 12C13.7909 12 12 13.7909 12 16C12 18.2092 13.7909 20 16 20Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M28 16.0058C28 18.671 23.5 25.3334 16 25.3334C8.5 25.3334 4 18.6762 4 16.0058C4 13.3354 8.50447 6.66669 16 6.66669C23.4955 6.66669 28 13.3406 28 16.0058ZM25.3318 15.9934C25.3328 16.0017 25.3328 16.0099 25.3318 16.0182C25.3274 16.0571 25.3108 16.1728 25.2485 16.3708C25.1691 16.6229 25.0352 16.9462 24.8327 17.3216C24.4264 18.0749 23.7969 18.9398 22.9567 19.754C21.2791 21.3798 18.9148 22.6667 16 22.6667C13.0845 22.6667 10.7202 21.3805 9.04298 19.7557C8.20295 18.9419 7.57362 18.0773 7.16745 17.3241C6.96499 16.9486 6.83114 16.6252 6.75172 16.3729C6.67942 16.1431 6.66856 16.0243 6.66695 16.0066L6.66695 16.005C6.66859 15.9871 6.67951 15.8682 6.75188 15.6383C6.83145 15.3854 6.96554 15.0614 7.16831 14.6853C7.57507 13.9306 8.20514 13.0644 9.04577 12.249C10.7245 10.6208 13.0886 9.33335 16 9.33335C18.9108 9.33335 21.2748 10.6215 22.9539 12.2507C23.7947 13.0664 24.4249 13.933 24.8318 14.6877C25.0346 15.0639 25.1688 15.3878 25.2483 15.6404C25.3107 15.8386 25.3274 15.9545 25.3318 15.9934Z" fill="currentColor"/>',
        tF =
          '<path d="M15.8747 8.11857C16.3148 7.79342 16.9375 8.10759 16.9375 8.65476V14.2575C16.9375 14.3669 17.0621 14.4297 17.1501 14.3647L25.6038 8.11857C26.0439 7.79342 26.6667 8.10759 26.6667 8.65476V23.3451C26.6667 23.8923 26.0439 24.2064 25.6038 23.8813L17.1501 17.6346C17.0621 17.5695 16.9375 17.6324 16.9375 17.7418L16.9375 23.3451C16.9375 23.8923 16.3147 24.2064 15.8747 23.8813L5.93387 16.5358C5.57322 16.2693 5.57323 15.7299 5.93389 15.4634L15.8747 8.11857Z" fill="currentColor"/>',
        tO =
          '<path d="M16.1253 8.11866C15.6852 7.7935 15.0625 8.10768 15.0625 8.65484V14.2576C15.0625 14.367 14.9379 14.4298 14.8499 14.3648L6.39615 8.11866C5.95607 7.7935 5.33331 8.10768 5.33331 8.65484V23.3452C5.33331 23.8923 5.9561 24.2065 6.39617 23.8813L14.8499 17.6347C14.9379 17.5696 15.0625 17.6325 15.0625 17.7419L15.0625 23.3452C15.0625 23.8923 15.6853 24.2065 16.1253 23.8813L26.0661 16.5358C26.4268 16.2694 26.4268 15.73 26.0661 15.4635L16.1253 8.11866Z" fill="currentColor"/>',
        tZ =
          '<path d="M19.3334 13.3333C18.9652 13.3333 18.6667 13.0349 18.6667 12.6667L18.6667 7.33333C18.6667 6.96514 18.9652 6.66666 19.3334 6.66666H21.3334C21.7015 6.66666 22 6.96514 22 7.33333V9.86666C22 9.9403 22.0597 10 22.1334 10L24.6667 10C25.0349 10 25.3334 10.2985 25.3334 10.6667V12.6667C25.3334 13.0349 25.0349 13.3333 24.6667 13.3333L19.3334 13.3333Z" fill="currentColor"/> <path d="M13.3334 19.3333C13.3334 18.9651 13.0349 18.6667 12.6667 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V21.3333C6.66669 21.7015 6.96516 22 7.33335 22H9.86669C9.94032 22 10 22.0597 10 22.1333L10 24.6667C10 25.0349 10.2985 25.3333 10.6667 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667L13.3334 19.3333Z" fill="currentColor"/> <path d="M18.6667 24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333H21.3334C21.7015 25.3333 22 25.0349 22 24.6667V22.1333C22 22.0597 22.0597 22 22.1334 22H24.6667C25.0349 22 25.3334 21.7015 25.3334 21.3333V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667L19.3334 18.6667C18.9652 18.6667 18.6667 18.9651 18.6667 19.3333L18.6667 24.6667Z" fill="currentColor"/> <path d="M10.6667 13.3333H12.6667C13.0349 13.3333 13.3334 13.0349 13.3334 12.6667L13.3334 10.6667V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H10.6667C10.2985 6.66666 10 6.96514 10 7.33333L10 9.86666C10 9.9403 9.94033 10 9.86669 10L7.33335 10C6.96516 10 6.66669 10.2985 6.66669 10.6667V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333L10.6667 13.3333Z" fill="currentColor"/>',
        tW =
          '<path d="M25.3299 7.26517C25.2958 6.929 25.0119 6.66666 24.6667 6.66666H19.3334C18.9652 6.66666 18.6667 6.96514 18.6667 7.33333V9.33333C18.6667 9.70152 18.9652 10 19.3334 10L21.8667 10C21.9403 10 22 10.0597 22 10.1333V12.6667C22 13.0349 22.2985 13.3333 22.6667 13.3333H24.6667C25.0349 13.3333 25.3334 13.0349 25.3334 12.6667V7.33333C25.3334 7.31032 25.3322 7.28758 25.3299 7.26517Z" fill="currentColor"/> <path d="M22 21.8667C22 21.9403 21.9403 22 21.8667 22L19.3334 22C18.9652 22 18.6667 22.2985 18.6667 22.6667V24.6667C18.6667 25.0349 18.9652 25.3333 19.3334 25.3333L24.6667 25.3333C25.0349 25.3333 25.3334 25.0349 25.3334 24.6667V19.3333C25.3334 18.9651 25.0349 18.6667 24.6667 18.6667H22.6667C22.2985 18.6667 22 18.9651 22 19.3333V21.8667Z" fill="currentColor"/> <path d="M12.6667 22H10.1334C10.0597 22 10 21.9403 10 21.8667V19.3333C10 18.9651 9.70154 18.6667 9.33335 18.6667H7.33335C6.96516 18.6667 6.66669 18.9651 6.66669 19.3333V24.6667C6.66669 25.0349 6.96516 25.3333 7.33335 25.3333H12.6667C13.0349 25.3333 13.3334 25.0349 13.3334 24.6667V22.6667C13.3334 22.2985 13.0349 22 12.6667 22Z" fill="currentColor"/> <path d="M10 12.6667V10.1333C10 10.0597 10.0597 10 10.1334 10L12.6667 10C13.0349 10 13.3334 9.70152 13.3334 9.33333V7.33333C13.3334 6.96514 13.0349 6.66666 12.6667 6.66666H7.33335C6.96516 6.66666 6.66669 6.96514 6.66669 7.33333V12.6667C6.66669 13.0349 6.96516 13.3333 7.33335 13.3333H9.33335C9.70154 13.3333 10 13.0349 10 12.6667Z" fill="currentColor"/>',
        tj =
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M26.6667 5.99998C26.6667 5.63179 26.3682 5.33331 26 5.33331H11.3333C10.9651 5.33331 10.6667 5.63179 10.6667 5.99998V17.5714C10.6667 17.6694 10.5644 17.7342 10.4741 17.6962C9.91823 17.4625 9.30754 17.3333 8.66667 17.3333C6.08934 17.3333 4 19.4226 4 22C4 24.5773 6.08934 26.6666 8.66667 26.6666C11.244 26.6666 13.3333 24.5773 13.3333 22V8.66665C13.3333 8.29846 13.6318 7.99998 14 7.99998L23.3333 7.99998C23.7015 7.99998 24 8.29846 24 8.66665V14.9048C24 15.0027 23.8978 15.0675 23.8075 15.0296C23.2516 14.7958 22.6409 14.6666 22 14.6666C19.4227 14.6666 17.3333 16.756 17.3333 19.3333C17.3333 21.9106 19.4227 24 22 24C24.5773 24 26.6667 21.9106 26.6667 19.3333V5.99998ZM22 21.3333C23.1046 21.3333 24 20.4379 24 19.3333C24 18.2287 23.1046 17.3333 22 17.3333C20.8954 17.3333 20 18.2287 20 19.3333C20 20.4379 20.8954 21.3333 22 21.3333ZM8.66667 24C9.77124 24 10.6667 23.1045 10.6667 22C10.6667 20.8954 9.77124 20 8.66667 20C7.5621 20 6.66667 20.8954 6.66667 22C6.66667 23.1045 7.5621 24 8.66667 24Z" fill="currentColor"/>',
        tz =
          '<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3325V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.8036C16.8863 6.47842 17.5091 6.79259 17.5091 7.33977L17.5091 24.6594Z" fill="currentColor"/> <path d="M28.8621 13.6422C29.1225 13.3818 29.1225 12.9597 28.8621 12.6994L27.9193 11.7566C27.659 11.4962 27.2368 11.4962 26.9765 11.7566L24.7134 14.0197C24.6613 14.0717 24.5769 14.0717 24.5248 14.0197L22.262 11.7568C22.0016 11.4964 21.5795 11.4964 21.3191 11.7568L20.3763 12.6996C20.116 12.9599 20.116 13.382 20.3763 13.6424L22.6392 15.9053C22.6913 15.9573 22.6913 16.0418 22.6392 16.0938L20.3768 18.3562C20.1165 18.6166 20.1165 19.0387 20.3768 19.299L21.3196 20.2419C21.58 20.5022 22.0021 20.5022 22.2624 20.2418L24.5248 17.9795C24.5769 17.9274 24.6613 17.9274 24.7134 17.9795L26.976 20.2421C27.2363 20.5024 27.6585 20.5024 27.9188 20.2421L28.8616 19.2992C29.122 19.0389 29.122 18.6168 28.8616 18.3564L26.599 16.0938C26.547 16.0418 26.547 15.9573 26.599 15.9053L28.8621 13.6422Z" fill="currentColor"/>',
        tU =
          '<path d="M26.6009 16.0725C26.6009 16.424 26.4302 17.1125 25.9409 18.0213C25.4676 18.8976 24.7542 19.8715 23.8182 20.7783C21.9489 22.5905 19.2662 24.0667 15.9342 24.0667C12.6009 24.0667 9.91958 22.5915 8.04891 20.78C7.11424 19.8736 6.40091 18.9 5.92758 18.0236C5.43824 17.1149 5.26758 16.4257 5.26758 16.0725C5.26758 15.7193 5.43824 15.0293 5.92891 14.1193C6.40224 13.2416 7.11558 12.2665 8.05158 11.3587C9.92224 9.54398 12.6049 8.06665 15.9342 8.06665C19.2636 8.06665 21.9449 9.54505 23.8169 11.3604C24.7529 12.2687 25.4662 13.2441 25.9396 14.1216C26.4302 15.0317 26.6009 15.7209 26.6009 16.0725Z" stroke="currentColor" stroke-width="3"/> <path d="M15.9336 20.0667C18.1427 20.0667 19.9336 18.2758 19.9336 16.0667C19.9336 13.8575 18.1427 12.0667 15.9336 12.0667C13.7245 12.0667 11.9336 13.8575 11.9336 16.0667C11.9336 18.2758 13.7245 20.0667 15.9336 20.0667Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M27.2323 25.0624L6.93878 4.76886C6.78118 4.61126 6.70762 4.57052 6.61919 4.54372C6.53077 4.51692 6.44033 4.51691 6.3519 4.54372C6.26347 4.57052 6.18991 4.61126 6.03231 4.76886L4.77032 6.03085C4.61272 6.18845 4.57198 6.26201 4.54518 6.35044C4.51838 6.43887 4.51838 6.5293 4.54518 6.61773C4.57198 6.70616 4.61272 6.77972 4.77032 6.93732L25.0639 27.2308C25.2215 27.3884 25.295 27.4292 25.3834 27.456C25.4719 27.4828 25.5623 27.4828 25.6507 27.456C25.7392 27.4292 25.8127 27.3885 25.9703 27.2309L27.2323 25.9689C27.3899 25.8113 27.4307 25.7377 27.4575 25.6493C27.4843 25.5608 27.4843 25.4704 27.4575 25.382C27.4307 25.2935 27.3899 25.22 27.2323 25.0624Z" fill="currentColor"/>',
        tG =
          '<path d="M8.66667 6.66667C8.29848 6.66667 8 6.96514 8 7.33333V24.6667C8 25.0349 8.29848 25.3333 8.66667 25.3333H12.6667C13.0349 25.3333 13.3333 25.0349 13.3333 24.6667V7.33333C13.3333 6.96514 13.0349 6.66667 12.6667 6.66667H8.66667Z" fill="currentColor"/> <path d="M19.3333 6.66667C18.9651 6.66667 18.6667 6.96514 18.6667 7.33333V24.6667C18.6667 25.0349 18.9651 25.3333 19.3333 25.3333H23.3333C23.7015 25.3333 24 25.0349 24 24.6667V7.33333C24 6.96514 23.7015 6.66667 23.3333 6.66667H19.3333Z" fill="currentColor"/>',
        tq =
          '<path d="M5.33334 26V19.4667C5.33334 19.393 5.39304 19.3333 5.46668 19.3333H7.86668C7.94031 19.3333 8.00001 19.393 8.00001 19.4667V23.3333C8.00001 23.7015 8.29849 24 8.66668 24H23.3333C23.7015 24 24 23.7015 24 23.3333V8.66666C24 8.29847 23.7015 7.99999 23.3333 7.99999H19.4667C19.393 7.99999 19.3333 7.9403 19.3333 7.86666V5.46666C19.3333 5.39302 19.393 5.33333 19.4667 5.33333H26C26.3682 5.33333 26.6667 5.63181 26.6667 5.99999V26C26.6667 26.3682 26.3682 26.6667 26 26.6667H6.00001C5.63182 26.6667 5.33334 26.3682 5.33334 26Z" fill="currentColor"/> <path d="M14.0098 8.42359H10.806C10.6872 8.42359 10.6277 8.56721 10.7117 8.6512L16.5491 14.4886C16.8094 14.7489 16.8094 15.171 16.5491 15.4314L15.3234 16.657C15.0631 16.9174 14.641 16.9174 14.3806 16.657L8.63739 10.9138C8.55339 10.8298 8.40978 10.8893 8.40978 11.0081V14.0236C8.40978 14.3918 8.1113 14.6903 7.74311 14.6903H6.00978C5.64159 14.6903 5.34311 14.3918 5.34311 14.0236L5.34311 6.02359C5.34311 5.6554 5.64159 5.35692 6.00978 5.35692L14.0098 5.35692C14.378 5.35692 14.6764 5.6554 14.6764 6.02359V7.75692C14.6764 8.12511 14.378 8.42359 14.0098 8.42359Z" fill="currentColor"/>',
        tK =
          '<path d="M16 15.3333C15.6318 15.3333 15.3333 15.6318 15.3333 16V20C15.3333 20.3682 15.6318 20.6667 16 20.6667H21.3333C21.7015 20.6667 22 20.3682 22 20V16C22 15.6318 21.7015 15.3333 21.3333 15.3333H16Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M5.33333 7.33334C5.33333 6.96515 5.63181 6.66667 5.99999 6.66667H26C26.3682 6.66667 26.6667 6.96515 26.6667 7.33334V24.6667C26.6667 25.0349 26.3682 25.3333 26 25.3333H5.99999C5.63181 25.3333 5.33333 25.0349 5.33333 24.6667V7.33334ZM7.99999 10C7.99999 9.63182 8.29847 9.33334 8.66666 9.33334H23.3333C23.7015 9.33334 24 9.63182 24 10V22C24 22.3682 23.7015 22.6667 23.3333 22.6667H8.66666C8.29847 22.6667 7.99999 22.3682 7.99999 22V10Z" fill="currentColor"/>',
        t_ =
          '<path d="M10.6667 6.6548C10.6667 6.10764 11.2894 5.79346 11.7295 6.11862L24.377 15.4634C24.7377 15.7298 24.7377 16.2692 24.3771 16.5357L11.7295 25.8813C11.2895 26.2065 10.6667 25.8923 10.6667 25.3451L10.6667 6.6548Z" fill="currentColor"/>',
        tQ =
          '<path d="M13.9213 5.53573C14.3146 5.45804 14.6666 5.76987 14.6666 6.17079V7.57215C14.6666 7.89777 14.4305 8.17277 14.114 8.24925C12.5981 8.61559 11.2506 9.41368 10.2091 10.506C9.98474 10.7414 9.62903 10.8079 9.34742 10.6453L8.14112 9.94885C7.79394 9.7484 7.69985 9.28777 7.96359 8.98585C9.48505 7.24409 11.5636 6.00143 13.9213 5.53573Z" fill="currentColor"/> <path d="M5.88974 12.5908C6.01805 12.2101 6.46491 12.0603 6.81279 12.2611L8.01201 12.9535C8.29379 13.1162 8.41396 13.4577 8.32238 13.7699C8.11252 14.4854 7.99998 15.2424 7.99998 16.0257C7.99998 16.809 8.11252 17.566 8.32238 18.2814C8.41396 18.5936 8.29378 18.9352 8.01201 19.0979L6.82742 19.7818C6.48051 19.9821 6.03488 19.8337 5.90521 19.4547C5.5345 18.3712 5.33331 17.2091 5.33331 16C5.33331 14.8078 5.5289 13.6613 5.88974 12.5908Z" fill="currentColor"/> <path d="M8.17106 22.0852C7.82291 22.2862 7.72949 22.7486 7.99532 23.0502C9.51387 24.773 11.5799 26.0017 13.9213 26.4642C14.3146 26.5419 14.6666 26.2301 14.6666 25.8291V24.4792C14.6666 24.1536 14.4305 23.8786 14.114 23.8021C12.5981 23.4358 11.2506 22.6377 10.2091 21.5453C9.98474 21.31 9.62903 21.2435 9.34742 21.4061L8.17106 22.0852Z" fill="currentColor"/> <path d="M17.3333 25.8291C17.3333 26.2301 17.6857 26.5418 18.079 26.4641C22.9748 25.4969 26.6666 21.1796 26.6666 16C26.6666 10.8204 22.9748 6.50302 18.079 5.5358C17.6857 5.4581 17.3333 5.76987 17.3333 6.17079V7.57215C17.3333 7.89777 17.5697 8.17282 17.8862 8.24932C21.3942 9.09721 24 12.2572 24 16.0257C24 19.7942 21.3942 22.9542 17.8862 23.802C17.5697 23.8785 17.3333 24.1536 17.3333 24.4792V25.8291Z" fill="currentColor"/> <path d="M14.3961 10.4163C13.9561 10.0911 13.3333 10.4053 13.3333 10.9525L13.3333 21.0474C13.3333 21.5946 13.9561 21.9087 14.3962 21.5836L21.2273 16.5359C21.5879 16.2694 21.5879 15.73 21.2273 15.4635L14.3961 10.4163Z" fill="currentColor"/>',
        tJ =
          '<path d="M15.6038 12.2147C16.0439 12.5399 16.6667 12.2257 16.6667 11.6786V10.1789C16.6667 10.1001 16.7351 10.0384 16.8134 10.0479C20.1116 10.4494 22.6667 13.2593 22.6667 16.6659C22.6667 20.3481 19.6817 23.3332 15.9995 23.3332C12.542 23.3332 9.69927 20.7014 9.36509 17.332C9.32875 16.9655 9.03371 16.6662 8.66548 16.6662L6.66655 16.6666C6.29841 16.6666 5.99769 16.966 6.02187 17.3334C6.36494 22.5454 10.7012 26.6667 16 26.6667C21.5228 26.6667 26 22.1895 26 16.6667C26 11.4103 21.9444 7.10112 16.7916 6.69757C16.7216 6.69209 16.6667 6.63396 16.6667 6.56372V4.98824C16.6667 4.44106 16.0439 4.12689 15.6038 4.45206L11.0765 7.79738C10.7159 8.06387 10.7159 8.60326 11.0766 8.86973L15.6038 12.2147Z" fill="currentColor"/>',
        tY =
          '<path d="M16.6667 10.3452C16.6667 10.8924 16.0439 11.2066 15.6038 10.8814L11.0766 7.5364C10.7159 7.26993 10.7159 6.73054 11.0766 6.46405L15.6038 3.11873C16.0439 2.79356 16.6667 3.10773 16.6667 3.6549V5.22682C16.6667 5.29746 16.7223 5.35579 16.7927 5.36066C22.6821 5.76757 27.3333 10.674 27.3333 16.6667C27.3333 22.9259 22.2592 28 16 28C9.96483 28 5.03145 23.2827 4.68601 17.3341C4.66466 16.9665 4.96518 16.6673 5.33339 16.6673H7.3334C7.70157 16.6673 7.99714 16.9668 8.02743 17.3337C8.36638 21.4399 11.8064 24.6667 16 24.6667C20.4183 24.6667 24 21.085 24 16.6667C24 12.5225 20.8483 9.11428 16.8113 8.70739C16.7337 8.69957 16.6667 8.76096 16.6667 8.83893V10.3452Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0226 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4279 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0993 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0832 15.4782 19.2015 15.6828 19.2868 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z" fill="currentColor"/> <path d="M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z" fill="currentColor"/>',
        tX =
          '<path d="M15.3333 10.3452C15.3333 10.8924 15.9561 11.2066 16.3962 10.8814L20.9234 7.5364C21.2841 7.26993 21.2841 6.73054 20.9235 6.46405L16.3962 3.11873C15.9561 2.79356 15.3333 3.10773 15.3333 3.6549V5.22682C15.3333 5.29746 15.2778 5.35579 15.2073 5.36066C9.31791 5.76757 4.66667 10.674 4.66667 16.6667C4.66667 22.9259 9.74078 28 16 28C22.0352 28 26.9686 23.2827 27.314 17.3341C27.3354 16.9665 27.0348 16.6673 26.6666 16.6673H24.6666C24.2984 16.6673 24.0029 16.9668 23.9726 17.3337C23.6336 21.4399 20.1937 24.6667 16 24.6667C11.5817 24.6667 8 21.085 8 16.6667C8 12.5225 11.1517 9.11428 15.1887 8.70739C15.2663 8.69957 15.3333 8.76096 15.3333 8.83893V10.3452Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0879 19.679C17.4553 19.9195 17.8928 20.0398 18.4004 20.0398C18.9099 20.0398 19.3474 19.9205 19.7129 19.6818C20.0803 19.4413 20.3635 19.0938 20.5623 18.6392C20.7612 18.1847 20.8606 17.6373 20.8606 16.9972C20.8625 16.3608 20.764 15.8192 20.5652 15.3722C20.3663 14.9252 20.0822 14.5853 19.7129 14.3523C19.3455 14.1175 18.908 14 18.4004 14C17.8928 14 17.4553 14.1175 17.0879 14.3523C16.7224 14.5853 16.4402 14.9252 16.2413 15.3722C16.0443 15.8173 15.9449 16.3589 15.943 16.9972C15.9411 17.6354 16.0396 18.1818 16.2385 18.6364C16.4373 19.089 16.7205 19.4366 17.0879 19.679ZM19.1362 18.4262C18.9487 18.7349 18.7034 18.8892 18.4004 18.8892C18.1996 18.8892 18.0225 18.8211 17.8691 18.6847C17.7157 18.5464 17.5964 18.3372 17.5112 18.0568C17.4278 17.7765 17.3871 17.4233 17.389 16.9972C17.3909 16.3684 17.4847 15.9025 17.6703 15.5995C17.8559 15.2945 18.0992 15.1421 18.4004 15.1421C18.603 15.1421 18.7801 15.2093 18.9316 15.3438C19.0831 15.4782 19.2015 15.6828 19.2867 15.9574C19.372 16.2301 19.4146 16.5767 19.4146 16.9972C19.4165 17.6392 19.3237 18.1156 19.1362 18.4262Z" fill="currentColor"/> <path d="M13.7746 19.8978C13.8482 19.8978 13.9079 19.8381 13.9079 19.7644V14.2129C13.9079 14.1393 13.8482 14.0796 13.7746 14.0796H12.642C12.6171 14.0796 12.5927 14.0865 12.5716 14.0997L11.2322 14.9325C11.1931 14.9568 11.1693 14.9996 11.1693 15.0457V15.9497C11.1693 16.0539 11.2833 16.1178 11.3722 16.0635L12.464 15.396C12.4682 15.3934 12.473 15.3921 12.4779 15.3921C12.4926 15.3921 12.5045 15.404 12.5045 15.4187V19.7644C12.5045 19.8381 12.5642 19.8978 12.6378 19.8978H13.7746Z" fill="currentColor"/>',
        t1 =
          '<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5722 5.33333C13.2429 5.33333 12.9629 5.57382 12.9132 5.89938L12.4063 9.21916C12.4 9.26058 12.3746 9.29655 12.3378 9.31672C12.2387 9.37118 12.1409 9.42779 12.0444 9.48648C12.0086 9.5083 11.9646 9.51242 11.9255 9.49718L8.79572 8.27692C8.48896 8.15732 8.14083 8.27958 7.9762 8.56472L5.5491 12.7686C5.38444 13.0538 5.45271 13.4165 5.70981 13.6223L8.33308 15.7225C8.3658 15.7487 8.38422 15.7887 8.38331 15.8306C8.38209 15.8867 8.38148 15.9429 8.38148 15.9993C8.38148 16.0558 8.3821 16.1121 8.38332 16.1684C8.38423 16.2102 8.36582 16.2503 8.33313 16.2765L5.7103 18.3778C5.45334 18.5836 5.38515 18.9462 5.54978 19.2314L7.97688 23.4352C8.14155 23.7205 8.48981 23.8427 8.79661 23.723L11.926 22.5016C11.9651 22.4864 12.009 22.4905 12.0449 22.5123C12.1412 22.5709 12.2388 22.6274 12.3378 22.6818C12.3745 22.7019 12.4 22.7379 12.4063 22.7793L12.9132 26.0993C12.9629 26.4249 13.2429 26.6654 13.5722 26.6654H18.4264C18.7556 26.6654 19.0356 26.425 19.0854 26.0995L19.5933 22.7801C19.5997 22.7386 19.6252 22.7027 19.6619 22.6825C19.7614 22.6279 19.8596 22.5711 19.9564 22.5121C19.9923 22.4903 20.0362 22.4862 20.0754 22.5015L23.2035 23.7223C23.5103 23.842 23.8585 23.7198 24.0232 23.4346L26.4503 19.2307C26.6149 18.9456 26.5467 18.583 26.2898 18.3771L23.6679 16.2766C23.6352 16.2504 23.6168 16.2104 23.6177 16.1685C23.619 16.1122 23.6196 16.0558 23.6196 15.9993C23.6196 15.9429 23.619 15.8866 23.6177 15.8305C23.6168 15.7886 23.6353 15.7486 23.668 15.7224L26.2903 13.623C26.5474 13.4172 26.6156 13.0544 26.451 12.7692L24.0239 8.56537C23.8592 8.28023 23.5111 8.15797 23.2043 8.27757L20.0758 9.49734C20.0367 9.51258 19.9927 9.50846 19.9569 9.48664C19.8599 9.42762 19.7616 9.37071 19.6618 9.31596C19.6251 9.2958 19.5997 9.25984 19.5933 9.21843L19.0854 5.89915C19.0356 5.57369 18.7556 5.33333 18.4264 5.33333H13.5722ZM16.0001 20.2854C18.3672 20.2854 20.2862 18.3664 20.2862 15.9993C20.2862 13.6322 18.3672 11.7132 16.0001 11.7132C13.6329 11.7132 11.714 13.6322 11.714 15.9993C11.714 18.3664 13.6329 20.2854 16.0001 20.2854Z" fill="currentColor"/>',
        t6 =
          '<path d="M17.5091 24.6595C17.5091 25.2066 16.8864 25.5208 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9992 9.36923 19.9992H4.66667C4.29848 19.9992 4 19.7007 4 19.3325V12.6658C4 12.2976 4.29848 11.9992 4.66667 11.9992H9.37115C9.39967 11.9992 9.42745 11.99 9.45039 11.9731L16.4463 6.80363C16.8863 6.47845 17.5091 6.79262 17.5091 7.3398L17.5091 24.6595Z" fill="currentColor"/> <path d="M27.5091 9.33336C27.8773 9.33336 28.1758 9.63184 28.1758 10V22C28.1758 22.3682 27.8773 22.6667 27.5091 22.6667H26.1758C25.8076 22.6667 25.5091 22.3682 25.5091 22V10C25.5091 9.63184 25.8076 9.33336 26.1758 9.33336L27.5091 9.33336Z" fill="currentColor"/> <path d="M22.1758 12C22.544 12 22.8424 12.2985 22.8424 12.6667V19.3334C22.8424 19.7016 22.544 20 22.1758 20H20.8424C20.4743 20 20.1758 19.7016 20.1758 19.3334V12.6667C20.1758 12.2985 20.4743 12 20.8424 12H22.1758Z" fill="currentColor"/>',
        t3 =
          '<path d="M17.5091 24.6594C17.5091 25.2066 16.8864 25.5207 16.4463 25.1956L9.44847 20.0252C9.42553 20.0083 9.39776 19.9991 9.36923 19.9991H4.66667C4.29848 19.9991 4 19.7006 4 19.3324V12.6658C4 12.2976 4.29848 11.9991 4.66667 11.9991H9.37115C9.39967 11.9991 9.42745 11.99 9.45039 11.973L16.4463 6.80358C16.8863 6.4784 17.5091 6.79258 17.5091 7.33975L17.5091 24.6594Z" fill="currentColor"/> <path d="M22.8424 12.6667C22.8424 12.2985 22.544 12 22.1758 12H20.8424C20.4743 12 20.1758 12.2985 20.1758 12.6667V19.3333C20.1758 19.7015 20.4743 20 20.8424 20H22.1758C22.544 20 22.8424 19.7015 22.8424 19.3333V12.6667Z" fill="currentColor"/>';
    },
    29329: function (e, t, n) {
      n.d(t, {
        K: function () {
          return i;
        },
      });
      var r = n(2265),
        l = n(17015),
        a = n(25035);
      function o(e) {
        function t(t) {
          return r.createElement(a.J, { paths: e, ...t });
        }
        return (t.displayName = "DefaultLayoutIcon"), t;
      }
      let i = {
        AirPlayButton: { Default: o(l.Icon$5) },
        GoogleCastButton: { Default: o(l.Icon$24) },
        PlayButton: {
          Play: o(l.Icon$62),
          Pause: o(l.Icon$59),
          Replay: o(l.Icon$74),
        },
        MuteButton: {
          Mute: o(l.Icon$54),
          VolumeLow: o(l.Icon$105),
          VolumeHigh: o(l.Icon$104),
        },
        CaptionButton: { On: o(l.Icon$26), Off: o(l.Icon$27) },
        PIPButton: { Enter: o(l.Icon$61), Exit: o(l.Icon$60) },
        FullscreenButton: { Enter: o(l.Icon$40), Exit: o(l.Icon$39) },
        SeekButton: { Backward: o(l.Icon$77), Forward: o(l.Icon$81) },
        DownloadButton: { Default: o(l.Icon$31) },
        Menu: {
          Accessibility: o(l.Icon$0),
          ArrowLeft: o(l.Icon$11),
          ArrowRight: o(l.Icon$22),
          Audio: o(l.Icon$53),
          Chapters: o(l.Icon$16),
          Captions: o(l.Icon$27),
          Playback: o(l.Icon$63),
          Settings: o(l.Icon$88),
          AudioBoostUp: o(l.Icon$104),
          AudioBoostDown: o(l.Icon$105),
          SpeedUp: o(l.Icon$35),
          SpeedDown: o(l.Icon$34),
          QualityUp: o(l.Icon$13),
          QualityDown: o(l.Icon$8),
          FontSizeUp: o(l.Icon$13),
          FontSizeDown: o(l.Icon$8),
          OpacityUp: o(l.Icon$33),
          OpacityDown: o(l.Icon$56),
          RadioCheck: o(l.Icon$19),
        },
        KeyboardDisplay: {
          Play: o(l.Icon$62),
          Pause: o(l.Icon$59),
          Mute: o(l.Icon$54),
          VolumeUp: o(l.Icon$104),
          VolumeDown: o(l.Icon$105),
          EnterFullscreen: o(l.Icon$40),
          ExitFullscreen: o(l.Icon$39),
          EnterPiP: o(l.Icon$61),
          ExitPiP: o(l.Icon$60),
          CaptionsOn: o(l.Icon$26),
          CaptionsOff: o(l.Icon$27),
          SeekForward: o(l.Icon$35),
          SeekBackward: o(l.Icon$34),
        },
      };
    },
    20081: function (e, t, n) {
      n.d(t, {
        Syo: function () {
          return u;
        },
        ZNi: function () {
          return d;
        },
      });
      var r = n(39684),
        l = n(17015),
        a = n(2265),
        o = n(84283),
        i = n(25035);
      n(54887);
      let s = (0, l.createReactComponent)(r._1, {
          events: [
            "onAbort",
            "onAudioTrackChange",
            "onAudioTracksChange",
            "onAutoPlay",
            "onAutoPlayChange",
            "onAutoPlayFail",
            "onCanLoad",
            "onCanPlay",
            "onCanPlayThrough",
            "onControlsChange",
            "onDestroy",
            "onDurationChange",
            "onEmptied",
            "onEnd",
            "onEnded",
            "onError",
            "onFindMediaPlayer",
            "onFullscreenChange",
            "onFullscreenError",
            "onLiveChange",
            "onLiveEdgeChange",
            "onLoadedData",
            "onLoadedMetadata",
            "onLoadStart",
            "onLoopChange",
            "onOrientationChange",
            "onPause",
            "onPictureInPictureChange",
            "onPictureInPictureError",
            "onPlay",
            "onPlayFail",
            "onPlaying",
            "onPlaysInlineChange",
            "onPosterChange",
            "onProgress",
            "onProviderChange",
            "onProviderLoaderChange",
            "onProviderSetup",
            "onQualitiesChange",
            "onQualityChange",
            "onRateChange",
            "onReplay",
            "onSeeked",
            "onSeeking",
            "onSourceChange",
            "onSourceChange",
            "onStalled",
            "onStarted",
            "onStreamTypeChange",
            "onSuspend",
            "onTextTrackChange",
            "onTextTracksChange",
            "onTimeUpdate",
            "onTitleChange",
            "onVdsLog",
            "onVideoPresentationChange",
            "onVolumeChange",
            "onWaiting",
          ],
          eventsRegex: /^onHls/,
          domEventsRegex: /^onMedia/,
        }),
        u = a.forwardRef(({ aspectRatio: e, children: t, ...n }, l) =>
          a.createElement(
            s,
            { ...n, src: n.src, ref: l, style: { aspectRatio: e, ...n.style } },
            (e) => a.createElement(r.WV.div, { ...e }, t),
          ),
        );
      u.displayName = "MediaPlayer";
      let c = (0, l.createReactComponent)(r.UP),
        d = a.forwardRef(
          ({ loaders: e = [], children: t, mediaProps: n, ...r }, l) => {
            let o = a.useMemo(() => e.map((e) => new e()), e);
            return a.createElement(c, { ...r, loaders: o, ref: l }, (e, r) =>
              a.createElement(
                "div",
                { ...e },
                a.createElement(f, { ...n, provider: r }),
                t,
              ),
            );
          },
        );
      function f({ provider: e, ...t }) {
        let {
            crossOrigin: s,
            poster: u,
            remotePlaybackInfo: c,
            nativeControls: d,
            viewType: f,
          } = (0, l.useStateContext)(r.nA),
          { loader: m } = e.$state,
          { $provider: p, $providerSetup: h } = (0, o.kH)(),
          C = (0, l.useSignal)(d),
          g = (0, l.useSignal)(s),
          v = (0, l.useSignal)(u),
          y = (0, l.useSignal)(m),
          E = (0, l.useSignal)(p),
          b = (0, l.useSignal)(h),
          w = (0, l.useSignal)(c),
          $ = y?.mediaType(),
          N = (0, l.useSignal)(f),
          x = y?.name === "youtube",
          S = y?.name === "vimeo",
          L = y?.name === "remotion",
          M = y?.name === "google-cast",
          [k, R] = a.useState("");
        return (a.useEffect(() => {
          M &&
            !k &&
            Promise.resolve()
              .then(n.bind(n, 17015))
              .then(function (e) {
                return e.chromecast;
              })
              .then((e) => {
                R(e.default);
              });
        }, [M]),
        M)
          ? a.createElement(
              "div",
              {
                className: "vds-google-cast",
                ref: (t) => {
                  e.load(t);
                },
              },
              a.createElement(i.J, { paths: k }),
              w?.deviceName
                ? a.createElement(
                    "span",
                    { className: "vds-google-cast-info" },
                    "Google Cast on",
                    " ",
                    a.createElement(
                      "span",
                      { className: "vds-google-cast-device-name" },
                      w.deviceName,
                    ),
                  )
                : null,
            )
          : L
            ? a.createElement(
                "div",
                { "data-remotion-canvas": !0 },
                a.createElement(
                  "div",
                  {
                    "data-remotion-container": !0,
                    ref: (t) => {
                      e.load(t);
                    },
                  },
                  (0, r.Uf)(E) && b ? a.createElement(E.render) : null,
                ),
              )
            : x || S
              ? a.createElement(
                  a.Fragment,
                  null,
                  a.createElement("iframe", {
                    className: x ? "vds-youtube" : "vds-vimeo",
                    suppressHydrationWarning: !0,
                    tabIndex: C ? void 0 : -1,
                    "aria-hidden": "true",
                    "data-no-controls": C ? void 0 : "",
                    ref(t) {
                      e.load(t);
                    },
                  }),
                  C || "audio" === N
                    ? null
                    : a.createElement("div", { className: "vds-blocker" }),
                )
              : $
                ? a.createElement("audio" === $ ? "audio" : "video", {
                    ...t,
                    controls: !!C || null,
                    crossOrigin: "boolean" == typeof g ? "" : g,
                    poster: "video" === $ && C && v ? v : null,
                    preload: "none",
                    "aria-hidden": "true",
                    suppressHydrationWarning: !0,
                    ref(t) {
                      e.load(t);
                    },
                  })
                : null;
      }
      (d.displayName = "MediaProvider"), (f.displayName = "MediaOutlet");
      let m = (0, l.createReactComponent)(r.Fl);
      a.forwardRef(({ children: e, ...t }, n) =>
        a.createElement(m, { ...t }, (t) =>
          a.createElement(
            r.WV.button,
            { ...t, ref: (0, l.composeRefs)(t.ref, n) },
            e,
          ),
        ),
      ).displayName = "ToggleButton";
      let p = (0, l.createReactComponent)(r.Be);
      a.forwardRef(({ children: e, ...t }, n) =>
        a.createElement(p, { ...t }, (t, r) =>
          a.createElement(
            h,
            { ...t, instance: r, ref: (0, l.composeRefs)(t.ref, n) },
            e,
          ),
        ),
      ).displayName = "Poster";
      let h = a.forwardRef(({ instance: e, children: t, ...n }, o) => {
        let {
            src: i,
            img: s,
            alt: u,
            crossOrigin: c,
            loading: d,
            hidden: f,
          } = e.$state,
          m = (0, l.useSignal)(i),
          p = (0, l.useSignal)(u),
          h = (0, l.useSignal)(c),
          C = (0, l.useSignal)(d),
          g = (0, l.useSignal)(f);
        return a.createElement(
          r.WV.img,
          {
            ...n,
            src: m || void 0,
            alt: p || void 0,
            crossOrigin: h || void 0,
            ref: (0, l.composeRefs)(s.set, o),
            style: { display: C || g ? "none" : void 0 },
          },
          t,
        );
      });
      (h.displayName = "PosterImg"),
        (a.forwardRef(({ children: e, ...t }, n) =>
          a.createElement(
            r.WV.div,
            {
              translate: "yes",
              "aria-live": "off",
              "aria-atomic": "true",
              ...t,
              ref: n,
            },
            e,
          ),
        ).displayName = "Caption"),
        (a.forwardRef((e, t) => {
          let n = (0, r.j9)("textTrack"),
            [l, o] = a.useState();
          return (
            a.useEffect(() => {
              if (n)
                return (
                  n.addEventListener("cue-change", e),
                  () => {
                    n.removeEventListener("cue-change", e), o(void 0);
                  }
                );
              function e() {
                o(n?.activeCues[0]);
              }
            }, [n]),
            a.createElement(r.WV.span, {
              ...e,
              "data-part": "cue",
              dangerouslySetInnerHTML: { __html: l?.text || "" },
              ref: t,
            })
          );
        }).displayName = "CaptionText");
    },
  },
]);
