"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2915],
  {
    79046: function (e, t, n) {
      n.d(t, {
        Lj: function () {
          return r;
        },
        y7: function () {
          return o;
        },
      });
      var r = {
        ease: [0.36, 0.66, 0.4, 1],
        easeIn: [0.4, 0, 1, 1],
        easeOut: [0, 0, 0.2, 1],
        easeInOut: [0.4, 0, 0.2, 1],
        spring: [0.155, 1.105, 0.295, 1.12],
        springOut: [0.57, -0.15, 0.62, 0.07],
        softSpring: [0.16, 1.11, 0.3, 1.02],
      };
      r.easeOut, r.easeIn;
      var o = {
        scaleSpring: {
          enter: {
            transform: "scale(1)",
            opacity: 1,
            transition: { type: "spring", bounce: 0, duration: 0.2 },
          },
          exit: {
            transform: "scale(0.85)",
            opacity: 0,
            transition: { type: "easeOut", duration: 0.15 },
          },
        },
        scaleSpringOpacity: {
          initial: { opacity: 0, transform: "scale(0.8)" },
          enter: {
            opacity: 1,
            transform: "scale(1)",
            transition: { type: "spring", bounce: 0, duration: 0.3 },
          },
          exit: {
            opacity: 0,
            transform: "scale(0.96)",
            transition: { type: "easeOut", bounce: 0, duration: 0.15 },
          },
        },
        scale: { enter: { scale: 1 }, exit: { scale: 0.95 } },
        scaleFadeIn: {
          enter: {
            transform: "scale(1)",
            opacity: 1,
            transition: { duration: 0.25, ease: r.easeIn },
          },
          exit: {
            transform: "scale(0.95)",
            opacity: 0,
            transition: { duration: 0.2, ease: r.easeOut },
          },
        },
        scaleInOut: {
          enter: {
            transform: "scale(1)",
            opacity: 1,
            transition: { duration: 0.4, ease: r.ease },
          },
          exit: {
            transform: "scale(1.03)",
            opacity: 0,
            transition: { duration: 0.3, ease: r.ease },
          },
        },
        fade: {
          enter: { opacity: 1, transition: { duration: 0.4, ease: r.ease } },
          exit: { opacity: 0, transition: { duration: 0.3, ease: r.ease } },
        },
        collapse: {
          enter: {
            opacity: 1,
            height: "auto",
            transition: {
              height: { type: "spring", bounce: 0, duration: 0.3 },
              opacity: { easings: "ease", duration: 0.4 },
            },
          },
          exit: {
            opacity: 0,
            height: 0,
            transition: { easings: "ease", duration: 0.3 },
          },
        },
      };
    },
    46896: function (e, t, n) {
      n.d(t, {
        G: function () {
          return o;
        },
      });
      var r = n(2265),
        o = (null == globalThis ? void 0 : globalThis.document)
          ? r.useLayoutEffect
          : r.useEffect;
    },
    27546: function (e, t, n) {
      n.d(t, {
        MT: function () {
          return l;
        },
        QL: function () {
          return N;
        },
        cW: function () {
          return h;
        },
      });
      var r = n(87603),
        o = n(57854),
        i = n(79248),
        a = n(2265);
      let u = a.createContext(null),
        s = null;
      function l(e) {
        let t,
          n,
          { children: r, contain: l, restoreFocus: c, autoFocus: d } = e,
          f = (0, a.useRef)(null),
          h = (0, a.useRef)(null),
          R = (0, a.useRef)([]),
          { parentNode: L } = (0, a.useContext)(u) || {},
          x = (0, a.useMemo)(() => new T({ scopeRef: R }), [R]);
        (0, i.b)(() => {
          let e = L || w.root;
          if (w.getTreeNode(e.scopeRef) && s && !g(s, e.scopeRef)) {
            let t = w.getTreeNode(s);
            t && (e = t);
          }
          e.addChild(x), w.addNode(x);
        }, [x, L]),
          (0, i.b)(() => {
            let e = w.getTreeNode(R);
            e && (e.contain = !!l);
          }, [l]),
          (0, i.b)(() => {
            var e;
            let t =
                null === (e = f.current) || void 0 === e
                  ? void 0
                  : e.nextSibling,
              n = [];
            for (; t && t !== h.current; ) n.push(t), (t = t.nextSibling);
            R.current = n;
          }, [r]),
          (0, i.b)(() => {
            if (c || l) return;
            let e = R.current,
              t = (0, o.r)(e ? e[0] : void 0),
              n = (e) => {
                let t = e.target;
                m(t, R.current) ? (s = R) : b(t) || (s = null);
              };
            return (
              t.addEventListener("focusin", n, !1),
              null == e ||
                e.forEach((e) => e.addEventListener("focusin", n, !1)),
              () => {
                t.removeEventListener("focusin", n, !1),
                  null == e ||
                    e.forEach((e) => e.removeEventListener("focusin", n, !1));
              }
            );
          }, [R, c, l]),
          (t = (0, a.useRef)()),
          (n = (0, a.useRef)()),
          (0, i.b)(() => {
            let e = R.current;
            if (!l) {
              n.current &&
                (cancelAnimationFrame(n.current), (n.current = void 0));
              return;
            }
            let r = (0, o.r)(e ? e[0] : void 0),
              i = (e) => {
                if (
                  "Tab" !== e.key ||
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  !v(R) ||
                  e.isComposing
                )
                  return;
                let t = r.activeElement,
                  n = R.current;
                if (!n || !m(t, n)) return;
                let o = N(p(n), { tabbable: !0 }, n);
                if (!t) return;
                o.currentNode = t;
                let i = e.shiftKey ? o.previousNode() : o.nextNode();
                i ||
                  ((o.currentNode = e.shiftKey
                    ? n[n.length - 1].nextElementSibling
                    : n[0].previousElementSibling),
                  (i = e.shiftKey ? o.previousNode() : o.nextNode())),
                  e.preventDefault(),
                  i && E(i, !0);
              },
              a = (e) => {
                (!s || g(s, R)) && m(e.target, R.current)
                  ? ((s = R), (t.current = e.target))
                  : v(R) && !b(e.target, R)
                    ? t.current
                      ? t.current.focus()
                      : s && s.current && y(s.current)
                    : v(R) && (t.current = e.target);
              },
              u = (e) => {
                n.current && cancelAnimationFrame(n.current),
                  (n.current = requestAnimationFrame(() => {
                    if (r.activeElement && v(R) && !b(r.activeElement, R)) {
                      if (((s = R), r.body.contains(e.target))) {
                        var n;
                        (t.current = e.target),
                          null === (n = t.current) || void 0 === n || n.focus();
                      } else s.current && y(s.current);
                    }
                  }));
              };
            return (
              r.addEventListener("keydown", i, !1),
              r.addEventListener("focusin", a, !1),
              null == e ||
                e.forEach((e) => e.addEventListener("focusin", a, !1)),
              null == e ||
                e.forEach((e) => e.addEventListener("focusout", u, !1)),
              () => {
                r.removeEventListener("keydown", i, !1),
                  r.removeEventListener("focusin", a, !1),
                  null == e ||
                    e.forEach((e) => e.removeEventListener("focusin", a, !1)),
                  null == e ||
                    e.forEach((e) => e.removeEventListener("focusout", u, !1));
              }
            );
          }, [R, l]),
          (0, i.b)(
            () => () => {
              n.current && cancelAnimationFrame(n.current);
            },
            [n],
          ),
          (function (e, t, n) {
            let r = (0, a.useRef)(
              "undefined" != typeof document
                ? (0, o.r)(e.current ? e.current[0] : void 0).activeElement
                : null,
            );
            (0, i.b)(() => {
              let r = e.current,
                i = (0, o.r)(r ? r[0] : void 0);
              if (!t || n) return;
              let a = () => {
                (!s || g(s, e)) && m(i.activeElement, e.current) && (s = e);
              };
              return (
                i.addEventListener("focusin", a, !1),
                null == r ||
                  r.forEach((e) => e.addEventListener("focusin", a, !1)),
                () => {
                  i.removeEventListener("focusin", a, !1),
                    null == r ||
                      r.forEach((e) => e.removeEventListener("focusin", a, !1));
                }
              );
            }, [e, n]),
              (0, i.b)(() => {
                let r = (0, o.r)(e.current ? e.current[0] : void 0);
                if (!t) return;
                let i = (t) => {
                  if (
                    "Tab" !== t.key ||
                    t.altKey ||
                    t.ctrlKey ||
                    t.metaKey ||
                    !v(e) ||
                    t.isComposing
                  )
                    return;
                  let n = r.activeElement;
                  if (!m(n, e.current)) return;
                  let o = w.getTreeNode(e);
                  if (!o) return;
                  let i = o.nodeToRestore,
                    a = N(r.body, { tabbable: !0 });
                  a.currentNode = n;
                  let u = t.shiftKey ? a.previousNode() : a.nextNode();
                  if (
                    ((i && r.body.contains(i) && i !== r.body) ||
                      ((i = void 0), (o.nodeToRestore = void 0)),
                    (!u || !m(u, e.current)) && i)
                  ) {
                    a.currentNode = i;
                    do u = t.shiftKey ? a.previousNode() : a.nextNode();
                    while (m(u, e.current));
                    (t.preventDefault(), t.stopPropagation(), u)
                      ? E(u, !0)
                      : b(i)
                        ? E(i, !0)
                        : n.blur();
                  }
                };
                return (
                  n || r.addEventListener("keydown", i, !0),
                  () => {
                    n || r.removeEventListener("keydown", i, !0);
                  }
                );
              }, [e, t, n]),
              (0, i.b)(() => {
                var n;
                let i = (0, o.r)(e.current ? e.current[0] : void 0);
                if (!t) return;
                let a = w.getTreeNode(e);
                if (a)
                  return (
                    (a.nodeToRestore =
                      null !== (n = r.current) && void 0 !== n ? n : void 0),
                    () => {
                      let n = w.getTreeNode(e);
                      if (!n) return;
                      let r = n.nodeToRestore;
                      if (
                        t &&
                        r &&
                        (m(i.activeElement, e.current) ||
                          (i.activeElement === i.body &&
                            (function (e) {
                              let t = w.getTreeNode(s);
                              for (; t && t.scopeRef !== e; ) {
                                if (t.nodeToRestore) return !1;
                                t = t.parent;
                              }
                              return (null == t ? void 0 : t.scopeRef) === e;
                            })(e)))
                      ) {
                        let t = w.clone();
                        requestAnimationFrame(() => {
                          if (i.activeElement === i.body) {
                            let n = t.getTreeNode(e);
                            for (; n; ) {
                              if (
                                n.nodeToRestore &&
                                n.nodeToRestore.isConnected
                              ) {
                                E(n.nodeToRestore);
                                return;
                              }
                              n = n.parent;
                            }
                            for (n = t.getTreeNode(e); n; ) {
                              if (
                                n.scopeRef &&
                                n.scopeRef.current &&
                                w.getTreeNode(n.scopeRef)
                              ) {
                                y(n.scopeRef.current, !0);
                                return;
                              }
                              n = n.parent;
                            }
                          }
                        });
                      }
                    }
                  );
              }, [e, t]);
          })(R, c, l),
          (function (e, t) {
            let n = a.useRef(t);
            (0, a.useEffect)(() => {
              n.current &&
                ((s = e),
                !m(
                  (0, o.r)(e.current ? e.current[0] : void 0).activeElement,
                  s.current,
                ) &&
                  e.current &&
                  y(e.current)),
                (n.current = !1);
            }, [e]);
          })(R, d),
          (0, a.useEffect)(() => {
            let e = (0, o.r)(R.current ? R.current[0] : void 0).activeElement,
              t = null;
            if (m(e, R.current)) {
              for (let n of w.traverse())
                n.scopeRef && m(e, n.scopeRef.current) && (t = n);
              t === w.getTreeNode(R) && (s = t.scopeRef);
            }
          }, [R]),
          (0, i.b)(
            () => () => {
              var e, t, n;
              let r =
                null !==
                  (n =
                    null === (t = w.getTreeNode(R)) || void 0 === t
                      ? void 0
                      : null === (e = t.parent) || void 0 === e
                        ? void 0
                        : e.scopeRef) && void 0 !== n
                  ? n
                  : null;
              (R === s || g(R, s)) && (!r || w.getTreeNode(r)) && (s = r),
                w.removeTreeNode(R);
            },
            [R],
          );
        let S = (0, a.useMemo)(
            () => ({
              focusNext(e = {}) {
                let t = R.current,
                  { from: n, tabbable: r, wrap: i, accept: a } = e,
                  u = n || (0, o.r)(t[0]).activeElement,
                  s = t[0].previousElementSibling,
                  l = N(p(t), { tabbable: r, accept: a }, t);
                l.currentNode = m(u, t) ? u : s;
                let c = l.nextNode();
                return (
                  !c && i && ((l.currentNode = s), (c = l.nextNode())),
                  c && E(c, !0),
                  c
                );
              },
              focusPrevious(e = {}) {
                let t = R.current,
                  { from: n, tabbable: r, wrap: i, accept: a } = e,
                  u = n || (0, o.r)(t[0]).activeElement,
                  s = t[t.length - 1].nextElementSibling,
                  l = N(p(t), { tabbable: r, accept: a }, t);
                l.currentNode = m(u, t) ? u : s;
                let c = l.previousNode();
                return (
                  !c && i && ((l.currentNode = s), (c = l.previousNode())),
                  c && E(c, !0),
                  c
                );
              },
              focusFirst(e = {}) {
                let t = R.current,
                  { tabbable: n, accept: r } = e,
                  o = N(p(t), { tabbable: n, accept: r }, t);
                o.currentNode = t[0].previousElementSibling;
                let i = o.nextNode();
                return i && E(i, !0), i;
              },
              focusLast(e = {}) {
                let t = R.current,
                  { tabbable: n, accept: r } = e,
                  o = N(p(t), { tabbable: n, accept: r }, t);
                o.currentNode = t[t.length - 1].nextElementSibling;
                let i = o.previousNode();
                return i && E(i, !0), i;
              },
            }),
            [],
          ),
          C = (0, a.useMemo)(
            () => ({ focusManager: S, parentNode: x }),
            [x, S],
          );
        return a.createElement(
          u.Provider,
          { value: C },
          a.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: f,
          }),
          r,
          a.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: h,
          }),
        );
      }
      let c = [
          "input:not([disabled]):not([type=hidden])",
          "select:not([disabled])",
          "textarea:not([disabled])",
          "button:not([disabled])",
          "a[href]",
          "area[href]",
          "summary",
          "iframe",
          "object",
          "embed",
          "audio[controls]",
          "video[controls]",
          "[contenteditable]",
        ],
        d =
          c.join(":not([hidden]),") +
          ",[tabindex]:not([disabled]):not([hidden])";
      c.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      let f = c.join(':not([hidden]):not([tabindex="-1"]),');
      function p(e) {
        return e[0].parentElement;
      }
      function v(e) {
        let t = w.getTreeNode(s);
        for (; t && t.scopeRef !== e; ) {
          if (t.contain) return !1;
          t = t.parent;
        }
        return !0;
      }
      function m(e, t) {
        return !!e && !!t && t.some((t) => t.contains(e));
      }
      function b(e, t = null) {
        if (e instanceof Element && e.closest("[data-react-aria-top-layer]"))
          return !0;
        for (let { scopeRef: n } of w.traverse(w.getTreeNode(t)))
          if (n && m(e, n.current)) return !0;
        return !1;
      }
      function h(e) {
        return b(e, s);
      }
      function g(e, t) {
        var n;
        let r =
          null === (n = w.getTreeNode(t)) || void 0 === n ? void 0 : n.parent;
        for (; r; ) {
          if (r.scopeRef === e) return !0;
          r = r.parent;
        }
        return !1;
      }
      function E(e, t = !1) {
        if (null == e || t) {
          if (null != e)
            try {
              e.focus();
            } catch (e) {}
        } else
          try {
            (0, r.e)(e);
          } catch (e) {}
      }
      function y(e, t = !0) {
        let n = e[0].previousElementSibling,
          r = p(e),
          o = N(r, { tabbable: t }, e);
        o.currentNode = n;
        let i = o.nextNode();
        t &&
          !i &&
          (((o = N((r = p(e)), { tabbable: !1 }, e)).currentNode = n),
          (i = o.nextNode())),
          E(i);
      }
      function N(e, t, n) {
        let r = (null == t ? void 0 : t.tabbable) ? f : d,
          i = (0, o.r)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var i;
              return (
                null == t
                  ? void 0
                  : null === (i = t.from) || void 0 === i
                    ? void 0
                    : i.contains(e)
              )
                ? NodeFilter.FILTER_REJECT
                : e.matches(r) &&
                    (function e(t, n) {
                      return (
                        "#comment" !== t.nodeName &&
                        (function (e) {
                          let t = (0, o.k)(e);
                          if (
                            !(e instanceof t.HTMLElement) &&
                            !(e instanceof t.SVGElement)
                          )
                            return !1;
                          let { display: n, visibility: r } = e.style,
                            i =
                              "none" !== n &&
                              "hidden" !== r &&
                              "collapse" !== r;
                          if (i) {
                            let { getComputedStyle: t } =
                                e.ownerDocument.defaultView,
                              { display: n, visibility: r } = t(e);
                            i =
                              "none" !== n &&
                              "hidden" !== r &&
                              "collapse" !== r;
                          }
                          return i;
                        })(t) &&
                        !t.hasAttribute("hidden") &&
                        !t.hasAttribute("data-react-aria-prevent-focus") &&
                        ("DETAILS" !== t.nodeName ||
                          !n ||
                          "SUMMARY" === n.nodeName ||
                          t.hasAttribute("open")) &&
                        (!t.parentElement || e(t.parentElement, t))
                      );
                    })(e) &&
                    (!n || m(e, n)) &&
                    (!(null == t ? void 0 : t.accept) || t.accept(e))
                  ? NodeFilter.FILTER_ACCEPT
                  : NodeFilter.FILTER_SKIP;
            },
          });
        return (null == t ? void 0 : t.from) && (i.currentNode = t.from), i;
      }
      class R {
        get size() {
          return this.fastMap.size;
        }
        getTreeNode(e) {
          return this.fastMap.get(e);
        }
        addTreeNode(e, t, n) {
          let r = this.fastMap.get(null != t ? t : null);
          if (!r) return;
          let o = new T({ scopeRef: e });
          r.addChild(o),
            (o.parent = r),
            this.fastMap.set(e, o),
            n && (o.nodeToRestore = n);
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e);
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let n = t.parent;
          for (let e of this.traverse())
            e !== t &&
              t.nodeToRestore &&
              e.nodeToRestore &&
              t.scopeRef &&
              t.scopeRef.current &&
              m(e.nodeToRestore, t.scopeRef.current) &&
              (e.nodeToRestore = t.nodeToRestore);
          let r = t.children;
          n &&
            (n.removeChild(t),
            r.size > 0 && r.forEach((e) => n && n.addChild(e))),
            this.fastMap.delete(t.scopeRef);
        }
        *traverse(e = this.root) {
          if ((null != e.scopeRef && (yield e), e.children.size > 0))
            for (let t of e.children) yield* this.traverse(t);
        }
        clone() {
          var e, t;
          let n = new R();
          for (let r of this.traverse())
            n.addTreeNode(
              r.scopeRef,
              null !==
                (t =
                  null === (e = r.parent) || void 0 === e
                    ? void 0
                    : e.scopeRef) && void 0 !== t
                ? t
                : null,
              r.nodeToRestore,
            );
          return n;
        }
        constructor() {
          (this.fastMap = new Map()),
            (this.root = new T({ scopeRef: null })),
            this.fastMap.set(null, this.root);
        }
      }
      class T {
        addChild(e) {
          this.children.add(e), (e.parent = this);
        }
        removeChild(e) {
          this.children.delete(e), (e.parent = void 0);
        }
        constructor(e) {
          (this.children = new Set()),
            (this.contain = !1),
            (this.scopeRef = e.scopeRef);
        }
      }
      let w = new R();
    },
    34909: function (e, t, n) {
      n.d(t, {
        b: function () {
          return m;
        },
        j: function () {
          return b;
        },
      });
      let r = new Set([
          "Arab",
          "Syrc",
          "Samr",
          "Mand",
          "Thaa",
          "Mend",
          "Nkoo",
          "Adlm",
          "Rohg",
          "Hebr",
        ]),
        o = new Set([
          "ae",
          "ar",
          "arc",
          "bcc",
          "bqi",
          "ckb",
          "dv",
          "fa",
          "glk",
          "he",
          "ku",
          "mzn",
          "nqo",
          "pnb",
          "ps",
          "sd",
          "ug",
          "ur",
          "yi",
        ]);
      function i(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            n =
              "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (n) return "rtl" === n.direction;
          if (t.script) return r.has(t.script);
        }
        let t = e.split("-")[0];
        return o.has(t);
      }
      var a = n(2265),
        u = n(73165);
      let s = Symbol.for("react-aria.i18n.locale");
      function l() {
        let e =
          ("undefined" != typeof window && window[s]) ||
          ("undefined" != typeof navigator &&
            (navigator.language || navigator.userLanguage)) ||
          "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e]);
        } catch (t) {
          e = "en-US";
        }
        return { locale: e, direction: i(e) ? "rtl" : "ltr" };
      }
      let c = l(),
        d = new Set();
      function f() {
        for (let e of ((c = l()), d)) e(c);
      }
      function p() {
        let e = (0, u.Av)(),
          [t, n] = (0, a.useState)(c);
        return ((0, a.useEffect)(
          () => (
            0 === d.size && window.addEventListener("languagechange", f),
            d.add(n),
            () => {
              d.delete(n),
                0 === d.size && window.removeEventListener("languagechange", f);
            }
          ),
          [],
        ),
        e)
          ? { locale: "en-US", direction: "ltr" }
          : t;
      }
      let v = a.createContext(null);
      function m(e) {
        let { locale: t, children: n } = e,
          r = p(),
          o = a.useMemo(
            () => (t ? { locale: t, direction: i(t) ? "rtl" : "ltr" } : r),
            [r, t],
          );
        return a.createElement(v.Provider, { value: o }, n);
      }
      function b() {
        let e = p();
        return (0, a.useContext)(v) || e;
      }
    },
    80683: function (e, t, n) {
      n.d(t, {
        I: function () {
          return c;
        },
      });
      var r = n(27546),
        o = n(2265),
        i = n(7353),
        a = n(57854);
      function u(e, t) {
        if (e.button > 0) return !1;
        if (e.target) {
          let t = e.target.ownerDocument;
          if (
            !t ||
            !t.documentElement.contains(e.target) ||
            e.target.closest("[data-react-aria-top-layer]")
          )
            return !1;
        }
        return t.current && !t.current.contains(e.target);
      }
      var s = n(8381);
      let l = [];
      function c(e, t) {
        let {
          onClose: n,
          shouldCloseOnBlur: c,
          isOpen: d,
          isDismissable: f = !1,
          isKeyboardDismissDisabled: p = !1,
          shouldCloseOnInteractOutside: v,
        } = e;
        (0, o.useEffect)(
          () => (
            d && l.push(t),
            () => {
              let e = l.indexOf(t);
              e >= 0 && l.splice(e, 1);
            }
          ),
          [d, t],
        );
        let m = () => {
          l[l.length - 1] === t && n && n();
        };
        !(function (e) {
          let {
              ref: t,
              onInteractOutside: n,
              isDisabled: r,
              onInteractOutsideStart: s,
            } = e,
            l = (0, o.useRef)({
              isPointerDown: !1,
              ignoreEmulatedMouseEvents: !1,
            }),
            c = (0, i.i)((e) => {
              n && u(e, t) && (s && s(e), (l.current.isPointerDown = !0));
            }),
            d = (0, i.i)((e) => {
              n && n(e);
            });
          (0, o.useEffect)(() => {
            let e = l.current;
            if (r) return;
            let n = t.current,
              o = (0, a.r)(n);
            if ("undefined" != typeof PointerEvent) {
              let n = (n) => {
                e.isPointerDown && u(n, t) && d(n), (e.isPointerDown = !1);
              };
              return (
                o.addEventListener("pointerdown", c, !0),
                o.addEventListener("pointerup", n, !0),
                () => {
                  o.removeEventListener("pointerdown", c, !0),
                    o.removeEventListener("pointerup", n, !0);
                }
              );
            }
            {
              let n = (n) => {
                  e.ignoreEmulatedMouseEvents
                    ? (e.ignoreEmulatedMouseEvents = !1)
                    : e.isPointerDown && u(n, t) && d(n),
                    (e.isPointerDown = !1);
                },
                r = (n) => {
                  (e.ignoreEmulatedMouseEvents = !0),
                    e.isPointerDown && u(n, t) && d(n),
                    (e.isPointerDown = !1);
                };
              return (
                o.addEventListener("mousedown", c, !0),
                o.addEventListener("mouseup", n, !0),
                o.addEventListener("touchstart", c, !0),
                o.addEventListener("touchend", r, !0),
                () => {
                  o.removeEventListener("mousedown", c, !0),
                    o.removeEventListener("mouseup", n, !0),
                    o.removeEventListener("touchstart", c, !0),
                    o.removeEventListener("touchend", r, !0);
                }
              );
            }
          }, [t, r, c, d]);
        })({
          ref: t,
          onInteractOutside:
            f && d
              ? (e) => {
                  (!v || v(e.target)) &&
                    (l[l.length - 1] === t &&
                      (e.stopPropagation(), e.preventDefault()),
                    m());
                }
              : null,
          onInteractOutsideStart: (e) => {
            (!v || v(e.target)) &&
              l[l.length - 1] === t &&
              (e.stopPropagation(), e.preventDefault());
          },
        });
        let { focusWithinProps: b } = (0, s.L)({
          isDisabled: !c,
          onBlurWithin: (e) => {
            !(!e.relatedTarget || (0, r.cW)(e.relatedTarget)) &&
              (!v || v(e.relatedTarget)) &&
              n();
          },
        });
        return {
          overlayProps: {
            onKeyDown: (e) => {
              "Escape" !== e.key ||
                p ||
                e.nativeEvent.isComposing ||
                (e.stopPropagation(), e.preventDefault(), m());
            },
            ...b,
          },
          underlayProps: {
            onPointerDown: (e) => {
              e.target === e.currentTarget && e.preventDefault();
            },
          },
        };
      }
    },
    89259: function (e, t, n) {
      n.d(t, {
        d: function () {
          return i;
        },
      });
      var r = n(2265),
        o = n(41821);
      function i(e) {
        let [t, n] = (0, o.z)(e.isOpen, e.defaultOpen || !1, e.onOpenChange),
          i = (0, r.useCallback)(() => {
            n(!0);
          }, [n]),
          a = (0, r.useCallback)(() => {
            n(!1);
          }, [n]),
          u = (0, r.useCallback)(() => {
            n(!t);
          }, [n, t]);
        return { isOpen: t, setOpen: n, open: i, close: a, toggle: u };
      }
    },
    41821: function (e, t, n) {
      n.d(t, {
        z: function () {
          return o;
        },
      });
      var r = n(2265);
      function o(e, t, n) {
        let [o, i] = (0, r.useState)(e || t),
          a = (0, r.useRef)(void 0 !== e),
          u = void 0 !== e;
        (0, r.useEffect)(() => {
          let e = a.current;
          e !== u &&
            console.warn(
              `WARN: A component changed from ${e ? "controlled" : "uncontrolled"} to ${u ? "controlled" : "uncontrolled"}.`,
            ),
            (a.current = u);
        }, [u]);
        let s = u ? e : o,
          l = (0, r.useCallback)(
            (e, ...t) => {
              let r = (e, ...t) => {
                n && !Object.is(s, e) && n(e, ...t), u || (s = e);
              };
              "function" == typeof e
                ? (console.warn(
                    "We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320",
                  ),
                  i((n, ...o) => {
                    let i = e(u ? s : n, ...o);
                    return (r(i, ...t), u) ? n : i;
                  }))
                : (u || i(e), r(e, ...t));
            },
            [u, s, n],
          );
        return [s, l];
      }
    },
  },
]);
