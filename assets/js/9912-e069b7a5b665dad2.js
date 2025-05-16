"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9912],
  {
    15795: function (e, t, l) {
      l.d(t, {
        X: function () {
          return o;
        },
      });
      var n = l(34909);
      let r = new Map();
      function o(e) {
        let { locale: t } = (0, n.j)(),
          l =
            t +
            (e
              ? Object.entries(e)
                  .sort((e, t) => (e[0] < t[0] ? -1 : 1))
                  .join()
              : "");
        if (r.has(l)) return r.get(l);
        let o = new Intl.Collator(t, e);
        return r.set(l, o), o;
      }
    },
    15966: function (e, t, l) {
      l.d(t, {
        T: function () {
          return c;
        },
      });
      var n = l(9656),
        r = l(61507),
        o = l(99222),
        i = l(277),
        s = l(2265);
      function c(e) {
        let {
            isDisabled: t,
            onLongPressStart: l,
            onLongPressEnd: c,
            onLongPress: u,
            threshold: a = 500,
            accessibilityDescription: d,
          } = e,
          f = (0, s.useRef)(),
          { addGlobalListener: y, removeGlobalListener: h } = (0, r.x)(),
          { pressProps: p } = (0, n.r)({
            isDisabled: t,
            onPressStart(e) {
              if (
                (e.continuePropagation(),
                ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                  (l && l({ ...e, type: "longpressstart" }),
                  (f.current = setTimeout(() => {
                    e.target.dispatchEvent(
                      new PointerEvent("pointercancel", { bubbles: !0 }),
                    ),
                      u && u({ ...e, type: "longpress" }),
                      (f.current = void 0);
                  }, a)),
                  "touch" === e.pointerType))
              ) {
                let t = (e) => {
                  e.preventDefault();
                };
                y(e.target, "contextmenu", t, { once: !0 }),
                  y(
                    window,
                    "pointerup",
                    () => {
                      setTimeout(() => {
                        h(e.target, "contextmenu", t);
                      }, 30);
                    },
                    { once: !0 },
                  );
              }
            },
            onPressEnd(e) {
              f.current && clearTimeout(f.current),
                c &&
                  ("mouse" === e.pointerType || "touch" === e.pointerType) &&
                  c({ ...e, type: "longpressend" });
            },
          }),
          g = (0, o.P)(u && !t ? d : void 0);
        return { longPressProps: (0, i.d)(p, g) };
      }
    },
    47395: function (e, t, l) {
      l.d(t, {
        g: function () {
          return p;
        },
      });
      var n = l(64913),
        r = l(2265),
        o = l(54887),
        i = l(27546),
        s = l(87603),
        c = l(46671),
        u = l(250),
        a = l(7353),
        d = l(20878),
        f = l(277),
        y = l(95729),
        h = l(34909);
      function p(e) {
        var t, l, p;
        let g,
          K,
          v,
          {
            selectionManager: S,
            keyboardDelegate: m,
            ref: b,
            autoFocus: w = !1,
            shouldFocusWrap: k = !1,
            disallowEmptySelection: F = !1,
            disallowSelectAll: P = !1,
            selectOnFocus: T = "replace" === S.selectionBehavior,
            disallowTypeAhead: E = !1,
            shouldUseVirtualFocus: I,
            allowsTabNavigation: C = !1,
            isVirtualized: D,
            scrollRef: M = b,
            linkBehavior: x = "action",
          } = e,
          { direction: L } = (0, h.j)(),
          A = (0, c.tv)(),
          B = (0, r.useRef)({ top: 0, left: 0 });
        (t = "scroll"),
          (l = D
            ? null
            : () => {
                B.current = {
                  top: M.current.scrollTop,
                  left: M.current.scrollLeft,
                };
              }),
          (g = (0, a.i)(l)),
          (K = null == l),
          (0, r.useEffect)(() => {
            if (K || !M.current) return;
            let e = M.current;
            return (
              e.addEventListener(t, g, void 0),
              () => {
                e.removeEventListener(t, g, p);
              }
            );
          }, [M, t, p, K, g]);
        let R = (0, r.useRef)(w);
        (0, r.useEffect)(() => {
          if (R.current) {
            let e = null;
            "first" === w && (e = m.getFirstKey()),
              "last" === w && (e = m.getLastKey());
            let t = S.selectedKeys;
            if (t.size) {
              for (let l of t)
                if (S.canSelectItem(l)) {
                  e = l;
                  break;
                }
            }
            S.setFocused(!0),
              S.setFocusedKey(e),
              null != e || I || (0, s.e)(b.current);
          }
        }, []);
        let N = (0, r.useRef)(S.focusedKey);
        (0, r.useEffect)(() => {
          let e = (0, y.Jz)();
          if (
            S.isFocused &&
            null != S.focusedKey &&
            (null == M ? void 0 : M.current)
          ) {
            let t = M.current.querySelector(
              `[data-key="${CSS.escape(S.focusedKey.toString())}"]`,
            );
            t &&
              ("keyboard" === e || R.current) &&
              (D || (0, d.z)(M.current, t),
              "virtual" !== e && (0, d.G)(t, { containingElement: b.current }));
          }
          S.isFocused &&
            null == S.focusedKey &&
            null != N.current &&
            (0, s.e)(b.current),
            (N.current = S.focusedKey),
            (R.current = !1);
        }, [D, M, S.focusedKey, S.isFocused, b]);
        let O = {
            onKeyDown: (e) => {
              var t, l, r, s, c, a, d, f;
              if (
                (e.altKey && "Tab" === e.key && e.preventDefault(),
                !b.current.contains(e.target))
              )
                return;
              let y = (t, l) => {
                if (null != t) {
                  if (S.isLink(t) && "selection" === x && T && !(0, n.F)(e)) {
                    (0, o.flushSync)(() => {
                      S.setFocusedKey(t, l);
                    });
                    let n = M.current.querySelector(
                        `[data-key="${CSS.escape(t.toString())}"]`,
                      ),
                      r = S.getItemProps(t);
                    A.open(n, e, r.href, r.routerOptions);
                    return;
                  }
                  S.setFocusedKey(t, l),
                    (S.isLink(t) && "override" === x) ||
                      (e.shiftKey && "multiple" === S.selectionMode
                        ? S.extendSelection(t)
                        : T && !(0, n.F)(e) && S.replaceSelection(t));
                }
              };
              switch (e.key) {
                case "ArrowDown":
                  if (m.getKeyBelow) {
                    e.preventDefault();
                    let n =
                      null != S.focusedKey
                        ? m.getKeyBelow(S.focusedKey)
                        : null === (t = m.getFirstKey) || void 0 === t
                          ? void 0
                          : t.call(m);
                    null == n &&
                      k &&
                      (n =
                        null === (l = m.getFirstKey) || void 0 === l
                          ? void 0
                          : l.call(m, S.focusedKey)),
                      y(n);
                  }
                  break;
                case "ArrowUp":
                  if (m.getKeyAbove) {
                    e.preventDefault();
                    let t =
                      null != S.focusedKey
                        ? m.getKeyAbove(S.focusedKey)
                        : null === (r = m.getLastKey) || void 0 === r
                          ? void 0
                          : r.call(m);
                    null == t &&
                      k &&
                      (t =
                        null === (s = m.getLastKey) || void 0 === s
                          ? void 0
                          : s.call(m, S.focusedKey)),
                      y(t);
                  }
                  break;
                case "ArrowLeft":
                  if (m.getKeyLeftOf) {
                    e.preventDefault();
                    let t = m.getKeyLeftOf(S.focusedKey);
                    null == t &&
                      k &&
                      (t =
                        "rtl" === L
                          ? null === (c = m.getFirstKey) || void 0 === c
                            ? void 0
                            : c.call(m, S.focusedKey)
                          : null === (a = m.getLastKey) || void 0 === a
                            ? void 0
                            : a.call(m, S.focusedKey)),
                      y(t, "rtl" === L ? "first" : "last");
                  }
                  break;
                case "ArrowRight":
                  if (m.getKeyRightOf) {
                    e.preventDefault();
                    let t = m.getKeyRightOf(S.focusedKey);
                    null == t &&
                      k &&
                      (t =
                        "rtl" === L
                          ? null === (d = m.getLastKey) || void 0 === d
                            ? void 0
                            : d.call(m, S.focusedKey)
                          : null === (f = m.getFirstKey) || void 0 === f
                            ? void 0
                            : f.call(m, S.focusedKey)),
                      y(t, "rtl" === L ? "last" : "first");
                  }
                  break;
                case "Home":
                  if (m.getFirstKey) {
                    e.preventDefault();
                    let t = m.getFirstKey(S.focusedKey, (0, n.y)(e));
                    S.setFocusedKey(t),
                      (0, n.y)(e) &&
                      e.shiftKey &&
                      "multiple" === S.selectionMode
                        ? S.extendSelection(t)
                        : T && S.replaceSelection(t);
                  }
                  break;
                case "End":
                  if (m.getLastKey) {
                    e.preventDefault();
                    let t = m.getLastKey(S.focusedKey, (0, n.y)(e));
                    S.setFocusedKey(t),
                      (0, n.y)(e) &&
                      e.shiftKey &&
                      "multiple" === S.selectionMode
                        ? S.extendSelection(t)
                        : T && S.replaceSelection(t);
                  }
                  break;
                case "PageDown":
                  m.getKeyPageBelow &&
                    (e.preventDefault(), y(m.getKeyPageBelow(S.focusedKey)));
                  break;
                case "PageUp":
                  m.getKeyPageAbove &&
                    (e.preventDefault(), y(m.getKeyPageAbove(S.focusedKey)));
                  break;
                case "a":
                  (0, n.y)(e) &&
                    "multiple" === S.selectionMode &&
                    !0 !== P &&
                    (e.preventDefault(), S.selectAll());
                  break;
                case "Escape":
                  F ||
                    0 === S.selectedKeys.size ||
                    (e.stopPropagation(),
                    e.preventDefault(),
                    S.clearSelection());
                  break;
                case "Tab":
                  if (!C) {
                    if (e.shiftKey) b.current.focus();
                    else {
                      let e,
                        t,
                        l = (0, i.QL)(b.current, { tabbable: !0 });
                      do (t = l.lastChild()) && (e = t);
                      while (t);
                      e && !e.contains(document.activeElement) && (0, u.A)(e);
                    }
                  }
              }
            },
            onFocus: (e) => {
              if (S.isFocused) {
                e.currentTarget.contains(e.target) || S.setFocused(!1);
                return;
              }
              if (e.currentTarget.contains(e.target)) {
                if ((S.setFocused(!0), null == S.focusedKey)) {
                  var t, l;
                  let n = (e) => {
                      null != e &&
                        (S.setFocusedKey(e), T && S.replaceSelection(e));
                    },
                    r = e.relatedTarget;
                  r &&
                  e.currentTarget.compareDocumentPosition(r) &
                    Node.DOCUMENT_POSITION_FOLLOWING
                    ? n(
                        null !== (t = S.lastSelectedKey) && void 0 !== t
                          ? t
                          : m.getLastKey(),
                      )
                    : n(
                        null !== (l = S.firstSelectedKey) && void 0 !== l
                          ? l
                          : m.getFirstKey(),
                      );
                } else
                  D ||
                    ((M.current.scrollTop = B.current.top),
                    (M.current.scrollLeft = B.current.left));
                if (!D && null != S.focusedKey) {
                  let e = M.current.querySelector(
                    `[data-key="${CSS.escape(S.focusedKey.toString())}"]`,
                  );
                  e &&
                    (e.contains(document.activeElement) || (0, u.A)(e),
                    "keyboard" === (0, y.Jz)() &&
                      (0, d.G)(e, { containingElement: b.current }));
                }
              }
            },
            onBlur: (e) => {
              e.currentTarget.contains(e.relatedTarget) || S.setFocused(!1);
            },
            onMouseDown(e) {
              M.current === e.target && e.preventDefault();
            },
          },
          { typeSelectProps: $ } = (function (e) {
            let {
                keyboardDelegate: t,
                selectionManager: l,
                onTypeSelect: n,
              } = e,
              o = (0, r.useRef)({ search: "", timeout: null }).current;
            return {
              typeSelectProps: {
                onKeyDownCapture: t.getKeyForSearch
                  ? (e) => {
                      var r;
                      let i =
                        1 !== (r = e.key).length && /^[A-Z]/i.test(r) ? "" : r;
                      if (
                        !i ||
                        e.ctrlKey ||
                        e.metaKey ||
                        !e.currentTarget.contains(e.target)
                      )
                        return;
                      " " !== i ||
                        !(o.search.trim().length > 0) ||
                        (e.preventDefault(),
                        "continuePropagation" in e || e.stopPropagation()),
                        (o.search += i);
                      let s = t.getKeyForSearch(o.search, l.focusedKey);
                      null == s && (s = t.getKeyForSearch(o.search)),
                        null != s && (l.setFocusedKey(s), n && n(s)),
                        clearTimeout(o.timeout),
                        (o.timeout = setTimeout(() => {
                          o.search = "";
                        }, 1e3));
                    }
                  : null,
              },
            };
          })({ keyboardDelegate: m, selectionManager: S });
        return (
          E || (O = (0, f.d)($, O)),
          I || (v = null == S.focusedKey ? 0 : -1),
          { collectionProps: { ...O, tabIndex: v } }
        );
      }
    },
    59375: function (e, t, l) {
      l.d(t, {
        C: function () {
          return a;
        },
      });
      var n = l(64913),
        r = l(87603),
        o = l(46671),
        i = l(277),
        s = l(9656),
        c = l(15966),
        u = l(2265);
      function a(e) {
        let {
            selectionManager: t,
            key: l,
            ref: a,
            shouldSelectOnPressUp: y,
            shouldUseVirtualFocus: h,
            focus: p,
            isDisabled: g,
            onAction: K,
            allowsDifferentPressOrigin: v,
            linkBehavior: S = "action",
          } = e,
          m = (0, o.tv)(),
          b = (e) => {
            if ("keyboard" === e.pointerType && (0, n.F)(e))
              t.toggleSelection(l);
            else {
              if ("none" === t.selectionMode) return;
              if (t.isLink(l)) {
                if ("selection" === S) {
                  let n = t.getItemProps(l);
                  m.open(a.current, e, n.href, n.routerOptions),
                    t.setSelectedKeys(t.selectedKeys);
                  return;
                }
                if ("override" === S || "none" === S) return;
              }
              "single" === t.selectionMode
                ? t.isSelected(l) && !t.disallowEmptySelection
                  ? t.toggleSelection(l)
                  : t.replaceSelection(l)
                : e && e.shiftKey
                  ? t.extendSelection(l)
                  : "toggle" === t.selectionBehavior ||
                      (e &&
                        ((0, n.y)(e) ||
                          "touch" === e.pointerType ||
                          "virtual" === e.pointerType))
                    ? t.toggleSelection(l)
                    : t.replaceSelection(l);
            }
          };
        (0, u.useEffect)(() => {
          l === t.focusedKey &&
            t.isFocused &&
            !h &&
            (p
              ? p()
              : document.activeElement !== a.current && (0, r.e)(a.current));
        }, [a, l, t.focusedKey, t.childFocusStrategy, t.isFocused, h]),
          (g = g || t.isDisabled(l));
        let w = {};
        h || g
          ? g &&
            (w.onMouseDown = (e) => {
              e.preventDefault();
            })
          : (w = {
              tabIndex: l === t.focusedKey ? 0 : -1,
              onFocus(e) {
                e.target === a.current && t.setFocusedKey(l);
              },
            });
        let k = t.isLink(l) && "override" === S,
          F = t.isLink(l) && "selection" !== S && "none" !== S,
          P = !g && t.canSelectItem(l) && !k,
          T = (K || F) && !g,
          E = T && ("replace" === t.selectionBehavior ? !P : !P || t.isEmpty),
          I = T && P && "replace" === t.selectionBehavior,
          C = E || I,
          D = (0, u.useRef)(null),
          M = C && P,
          x = (0, u.useRef)(!1),
          L = (0, u.useRef)(!1),
          A = (e) => {
            if ((K && K(), F)) {
              let n = t.getItemProps(l);
              m.open(a.current, e, n.href, n.routerOptions);
            }
          },
          B = {};
        y
          ? ((B.onPressStart = (e) => {
              (D.current = e.pointerType),
                (x.current = M),
                "keyboard" === e.pointerType && (!C || f()) && b(e);
            }),
            v
              ? ((B.onPressUp = E
                  ? null
                  : (e) => {
                      "keyboard" !== e.pointerType && P && b(e);
                    }),
                (B.onPress = E ? A : null))
              : (B.onPress = (e) => {
                  E || (I && "mouse" !== e.pointerType)
                    ? ("keyboard" !== e.pointerType || d()) && A(e)
                    : "keyboard" !== e.pointerType && P && b(e);
                }))
          : ((B.onPressStart = (e) => {
              (D.current = e.pointerType),
                (x.current = M),
                (L.current = E),
                P &&
                  (("mouse" === e.pointerType && !E) ||
                    ("keyboard" === e.pointerType && (!T || f()))) &&
                  b(e);
            }),
            (B.onPress = (e) => {
              ("touch" === e.pointerType ||
                "pen" === e.pointerType ||
                "virtual" === e.pointerType ||
                ("keyboard" === e.pointerType && C && d()) ||
                ("mouse" === e.pointerType && L.current)) &&
                (C ? A(e) : P && b(e));
            })),
          (w["data-key"] = l),
          (B.preventFocusOnPress = h);
        let { pressProps: R, isPressed: N } = (0, s.r)(B),
          O = I
            ? (e) => {
                "mouse" === D.current &&
                  (e.stopPropagation(), e.preventDefault(), A(e));
              }
            : void 0,
          { longPressProps: $ } = (0, c.T)({
            isDisabled: !M,
            onLongPress(e) {
              "touch" === e.pointerType &&
                (b(e), t.setSelectionBehavior("toggle"));
            },
          }),
          z = t.isLink(l)
            ? (e) => {
                o.nG.isOpening || e.preventDefault();
              }
            : void 0;
        return {
          itemProps: (0, i.d)(w, P || E ? R : {}, M ? $ : {}, {
            onDoubleClick: O,
            onDragStartCapture: (e) => {
              "touch" === D.current && x.current && e.preventDefault();
            },
            onClick: z,
          }),
          isPressed: N,
          isSelected: t.isSelected(l),
          isFocused: t.isFocused && t.focusedKey === l,
          isDisabled: g,
          allowsSelection: P,
          hasAction: C,
        };
      }
      function d() {
        let e = window.event;
        return (null == e ? void 0 : e.key) === "Enter";
      }
      function f() {
        let e = window.event;
        return (
          (null == e ? void 0 : e.key) === " " ||
          (null == e ? void 0 : e.code) === "Space"
        );
      }
    },
    64913: function (e, t, l) {
      l.d(t, {
        F: function () {
          return r;
        },
        y: function () {
          return o;
        },
      });
      var n = l(40541);
      function r(e) {
        return (0, n.ad)() ? e.altKey : e.ctrlKey;
      }
      function o(e) {
        return (0, n.V5)() ? e.metaKey : e.ctrlKey;
      }
    },
    20878: function (e, t, l) {
      l.d(t, {
        z: function () {
          return r;
        },
        G: function () {
          return i;
        },
      });
      var n = l(90731);
      function r(e, t) {
        let l = o(e, t, "left"),
          n = o(e, t, "top"),
          r = t.offsetWidth,
          i = t.offsetHeight,
          s = e.scrollLeft,
          c = e.scrollTop,
          { borderTopWidth: u, borderLeftWidth: a } = getComputedStyle(e),
          d = e.scrollLeft + parseInt(a, 10),
          f = e.scrollTop + parseInt(u, 10),
          y = d + e.clientWidth,
          h = f + e.clientHeight;
        l <= s ? (s = l - parseInt(a, 10)) : l + r > y && (s += l + r - y),
          n <= f ? (c = n - parseInt(u, 10)) : n + i > h && (c += n + i - h),
          (e.scrollLeft = s),
          (e.scrollTop = c);
      }
      function o(e, t, l) {
        let n = "left" === l ? "offsetLeft" : "offsetTop",
          r = 0;
        for (; t.offsetParent && ((r += t[n]), t.offsetParent !== e); ) {
          if (t.offsetParent.contains(e)) {
            r -= e[n];
            break;
          }
          t = t.offsetParent;
        }
        return r;
      }
      function i(e, t) {
        if (document.contains(e)) {
          let c = document.scrollingElement || document.documentElement;
          if ("hidden" === window.getComputedStyle(c).overflow)
            for (let t of (function (e, t) {
              let l = [];
              for (; e && e !== document.documentElement; )
                (0, n.a)(e, void 0) && l.push(e), (e = e.parentElement);
              return l;
            })(e))
              r(t, e);
          else {
            var l, o, i, s;
            let { left: n, top: r } = e.getBoundingClientRect();
            null == e ||
              null === (l = e.scrollIntoView) ||
              void 0 === l ||
              l.call(e, { block: "nearest" });
            let { left: c, top: u } = e.getBoundingClientRect();
            (Math.abs(n - c) > 1 || Math.abs(r - u) > 1) &&
              (null == t ||
                null === (i = t.containingElement) ||
                void 0 === i ||
                null === (o = i.scrollIntoView) ||
                void 0 === o ||
                o.call(i, { block: "center", inline: "center" }),
              null === (s = e.scrollIntoView) ||
                void 0 === s ||
                s.call(e, { block: "nearest" }));
          }
        }
      }
    },
    99222: function (e, t, l) {
      l.d(t, {
        P: function () {
          return s;
        },
      });
      var n = l(79248),
        r = l(2265);
      let o = 0,
        i = new Map();
      function s(e) {
        let [t, l] = (0, r.useState)();
        return (
          (0, n.b)(() => {
            if (!e) return;
            let t = i.get(e);
            if (t) l(t.element.id);
            else {
              let n = `react-aria-description-${o++}`;
              l(n);
              let r = document.createElement("div");
              (r.id = n),
                (r.style.display = "none"),
                (r.textContent = e),
                document.body.appendChild(r),
                (t = { refCount: 0, element: r }),
                i.set(e, t);
            }
            return (
              t.refCount++,
              () => {
                t && 0 == --t.refCount && (t.element.remove(), i.delete(e));
              }
            );
          }, [e]),
          { "aria-describedby": e ? t : void 0 }
        );
      }
    },
    52897: function (e, t, l) {
      function n(e, t) {
        return "function" == typeof t.getChildren
          ? t.getChildren(e.key)
          : e.childNodes;
      }
      function r(e) {
        return o(e, 0);
      }
      function o(e, t) {
        if (t < 0) return;
        let l = 0;
        for (let n of e) {
          if (l === t) return n;
          l++;
        }
      }
      function i(e) {
        let t;
        for (let l of e) t = l;
        return t;
      }
      function s(e, t, l) {
        if (t.parentKey === l.parentKey) return t.index - l.index;
        let n = [...c(e, t), t],
          r = [...c(e, l), l],
          o = n.slice(0, r.length).findIndex((e, t) => e !== r[t]);
        return -1 !== o
          ? ((t = n[o]), (l = r[o]), t.index - l.index)
          : n.findIndex((e) => e === l) >= 0
            ? 1
            : (r.findIndex((e) => e === t), -1);
      }
      function c(e, t) {
        let l = [];
        for (; (null == t ? void 0 : t.parentKey) != null; )
          l.unshift((t = e.getItem(t.parentKey)));
        return l;
      }
      l.d(t, {
        Em: function () {
          return o;
        },
        _P: function () {
          return n;
        },
        eg: function () {
          return s;
        },
        l8: function () {
          return r;
        },
        s: function () {
          return i;
        },
      });
    },
    34921: function (e, t, l) {
      l.d(t, {
        K: function () {
          return s;
        },
      });
      var n = l(2265);
      class r {
        build(e, t) {
          return (this.context = t), o(() => this.iterateCollection(e));
        }
        *iterateCollection(e) {
          let { children: t, items: l } = e;
          if ("function" == typeof t) {
            if (!l)
              throw Error(
                "props.children was a function but props.items is missing",
              );
            for (let l of e.items)
              yield* this.getFullNode({ value: l }, { renderer: t });
          } else {
            let e = [];
            n.Children.forEach(t, (t) => {
              e.push(t);
            });
            let l = 0;
            for (let t of e)
              for (let e of this.getFullNode({ element: t, index: l }, {}))
                l++, yield e;
          }
        }
        getKey(e, t, l, n) {
          if (null != e.key) return e.key;
          if ("cell" === t.type && null != t.key) return `${n}${t.key}`;
          let r = t.value;
          if (null != r) {
            var o;
            let e = null !== (o = r.key) && void 0 !== o ? o : r.id;
            if (null == e) throw Error("No key found for item");
            return e;
          }
          return n ? `${n}.${t.index}` : `$.${t.index}`;
        }
        getChildState(e, t) {
          return { renderer: t.renderer || e.renderer };
        }
        *getFullNode(e, t, l, r) {
          let s = e.element;
          if (!s && e.value && t && t.renderer) {
            let l = this.cache.get(e.value);
            if (
              l &&
              (!l.shouldInvalidate || !l.shouldInvalidate(this.context))
            ) {
              (l.index = e.index), (l.parentKey = r ? r.key : null), yield l;
              return;
            }
            s = t.renderer(e.value);
          }
          if (n.isValidElement(s)) {
            let n = s.type;
            if (
              "function" != typeof n &&
              "function" != typeof n.getCollectionNode
            ) {
              let e = "function" == typeof s.type ? s.type.name : s.type;
              throw Error(`Unknown element <${e}> in collection.`);
            }
            let o = n.getCollectionNode(s.props, this.context),
              c = e.index,
              u = o.next();
            for (; !u.done && u.value; ) {
              let n = u.value;
              e.index = c;
              let a = n.key;
              a || (a = n.element ? null : this.getKey(s, e, t, l));
              let d = [
                ...this.getFullNode(
                  {
                    ...n,
                    key: a,
                    index: c,
                    wrapper: (function (e, t) {
                      return e && t ? (l) => e(t(l)) : e || t || void 0;
                    })(e.wrapper, n.wrapper),
                  },
                  this.getChildState(t, n),
                  l ? `${l}${s.key}` : s.key,
                  r,
                ),
              ];
              for (let t of d) {
                if (
                  ((t.value = n.value || e.value),
                  t.value && this.cache.set(t.value, t),
                  e.type && t.type !== e.type)
                )
                  throw Error(
                    `Unsupported type <${i(t.type)}> in <${i(r.type)}>. Only <${i(e.type)}> is supported.`,
                  );
                c++, yield t;
              }
              u = o.next(d);
            }
            return;
          }
          if (null == e.key) return;
          let c = this,
            u = {
              type: e.type,
              props: e.props,
              key: e.key,
              parentKey: r ? r.key : null,
              value: e.value,
              level: r ? r.level + 1 : 0,
              index: e.index,
              rendered: e.rendered,
              textValue: e.textValue,
              "aria-label": e["aria-label"],
              wrapper: e.wrapper,
              shouldInvalidate: e.shouldInvalidate,
              hasChildNodes: e.hasChildNodes,
              childNodes: o(function* () {
                if (!e.hasChildNodes) return;
                let l = 0;
                for (let n of e.childNodes())
                  for (let e of (null != n.key && (n.key = `${u.key}${n.key}`),
                  (n.index = l),
                  c.getFullNode(n, c.getChildState(t, n), u.key, u)))
                    l++, yield e;
              }),
            };
          yield u;
        }
        constructor() {
          this.cache = new WeakMap();
        }
      }
      function o(e) {
        let t = [],
          l = null;
        return {
          *[Symbol.iterator]() {
            for (let e of t) yield e;
            for (let n of (l || (l = e()), l)) t.push(n), yield n;
          },
        };
      }
      function i(e) {
        return e[0].toUpperCase() + e.slice(1);
      }
      function s(e, t, l) {
        let o = (0, n.useMemo)(() => new r(), []),
          { children: i, items: s, collection: c } = e;
        return (0, n.useMemo)(
          () => c || t(o.build({ children: i, items: s }, l)),
          [o, i, s, c, l, t],
        );
      }
    },
    91980: function (e, t, l) {
      l.d(t, {
        Y: function () {
          return n;
        },
      });
      class n extends Set {
        constructor(e, t, l) {
          super(e),
            e instanceof n
              ? ((this.anchorKey = t || e.anchorKey),
                (this.currentKey = l || e.currentKey))
              : ((this.anchorKey = t), (this.currentKey = l));
        }
      }
    },
    62490: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return o;
        },
      });
      var n = l(91980),
        r = l(52897);
      class o {
        get selectionMode() {
          return this.state.selectionMode;
        }
        get disallowEmptySelection() {
          return this.state.disallowEmptySelection;
        }
        get selectionBehavior() {
          return this.state.selectionBehavior;
        }
        setSelectionBehavior(e) {
          this.state.setSelectionBehavior(e);
        }
        get isFocused() {
          return this.state.isFocused;
        }
        setFocused(e) {
          this.state.setFocused(e);
        }
        get focusedKey() {
          return this.state.focusedKey;
        }
        get childFocusStrategy() {
          return this.state.childFocusStrategy;
        }
        setFocusedKey(e, t) {
          (null == e || this.collection.getItem(e)) &&
            this.state.setFocusedKey(e, t);
        }
        get selectedKeys() {
          return "all" === this.state.selectedKeys
            ? new Set(this.getSelectAllKeys())
            : this.state.selectedKeys;
        }
        get rawSelection() {
          return this.state.selectedKeys;
        }
        isSelected(e) {
          return (
            "none" !== this.state.selectionMode &&
            ((e = this.getKey(e)),
            "all" === this.state.selectedKeys
              ? this.canSelectItem(e)
              : this.state.selectedKeys.has(e))
          );
        }
        get isEmpty() {
          return (
            "all" !== this.state.selectedKeys &&
            0 === this.state.selectedKeys.size
          );
        }
        get isSelectAll() {
          if (this.isEmpty) return !1;
          if ("all" === this.state.selectedKeys) return !0;
          if (null != this._isSelectAll) return this._isSelectAll;
          let e = this.getSelectAllKeys(),
            t = this.state.selectedKeys;
          return (
            (this._isSelectAll = e.every((e) => t.has(e))), this._isSelectAll
          );
        }
        get firstSelectedKey() {
          let e = null;
          for (let t of this.state.selectedKeys) {
            let l = this.collection.getItem(t);
            (!e || (l && 0 > (0, r.eg)(this.collection, l, e))) && (e = l);
          }
          return null == e ? void 0 : e.key;
        }
        get lastSelectedKey() {
          let e = null;
          for (let t of this.state.selectedKeys) {
            let l = this.collection.getItem(t);
            (!e || (l && (0, r.eg)(this.collection, l, e) > 0)) && (e = l);
          }
          return null == e ? void 0 : e.key;
        }
        get disabledKeys() {
          return this.state.disabledKeys;
        }
        get disabledBehavior() {
          return this.state.disabledBehavior;
        }
        extendSelection(e) {
          let t;
          if ("none" !== this.selectionMode) {
            if ("single" === this.selectionMode) {
              this.replaceSelection(e);
              return;
            }
            if (((e = this.getKey(e)), "all" === this.state.selectedKeys))
              t = new n.Y([e], e, e);
            else {
              let l = this.state.selectedKeys,
                r = l.anchorKey || e;
              for (let o of ((t = new n.Y(l, r, e)),
              this.getKeyRange(r, l.currentKey || e)))
                t.delete(o);
              for (let l of this.getKeyRange(e, r))
                this.canSelectItem(l) && t.add(l);
            }
            this.state.setSelectedKeys(t);
          }
        }
        getKeyRange(e, t) {
          let l = this.collection.getItem(e),
            n = this.collection.getItem(t);
          return l && n
            ? 0 >= (0, r.eg)(this.collection, l, n)
              ? this.getKeyRangeInternal(e, t)
              : this.getKeyRangeInternal(t, e)
            : [];
        }
        getKeyRangeInternal(e, t) {
          let l = [],
            n = e;
          for (; n; ) {
            let e = this.collection.getItem(n);
            if (
              (((e && "item" === e.type) ||
                ("cell" === e.type && this.allowsCellSelection)) &&
                l.push(n),
              n === t)
            )
              return l;
            n = this.collection.getKeyAfter(n);
          }
          return [];
        }
        getKey(e) {
          let t = this.collection.getItem(e);
          if (!t || ("cell" === t.type && this.allowsCellSelection)) return e;
          for (; "item" !== t.type && null != t.parentKey; )
            t = this.collection.getItem(t.parentKey);
          return t && "item" === t.type ? t.key : null;
        }
        toggleSelection(e) {
          if ("none" === this.selectionMode) return;
          if ("single" === this.selectionMode && !this.isSelected(e)) {
            this.replaceSelection(e);
            return;
          }
          if (null == (e = this.getKey(e))) return;
          let t = new n.Y(
            "all" === this.state.selectedKeys
              ? this.getSelectAllKeys()
              : this.state.selectedKeys,
          );
          t.has(e)
            ? t.delete(e)
            : this.canSelectItem(e) &&
              (t.add(e), (t.anchorKey = e), (t.currentKey = e)),
            (this.disallowEmptySelection && 0 === t.size) ||
              this.state.setSelectedKeys(t);
        }
        replaceSelection(e) {
          if ("none" === this.selectionMode || null == (e = this.getKey(e)))
            return;
          let t = this.canSelectItem(e) ? new n.Y([e], e, e) : new n.Y();
          this.state.setSelectedKeys(t);
        }
        setSelectedKeys(e) {
          if ("none" === this.selectionMode) return;
          let t = new n.Y();
          for (let l of e)
            if (
              null != (l = this.getKey(l)) &&
              (t.add(l), "single" === this.selectionMode)
            )
              break;
          this.state.setSelectedKeys(t);
        }
        getSelectAllKeys() {
          let e = [],
            t = (l) => {
              for (; l; ) {
                if (this.canSelectItem(l)) {
                  let n = this.collection.getItem(l);
                  "item" === n.type && e.push(l),
                    n.hasChildNodes &&
                      (this.allowsCellSelection || "item" !== n.type) &&
                      t((0, r.l8)((0, r._P)(n, this.collection)).key);
                }
                l = this.collection.getKeyAfter(l);
              }
            };
          return t(this.collection.getFirstKey()), e;
        }
        selectAll() {
          this.isSelectAll ||
            "multiple" !== this.selectionMode ||
            this.state.setSelectedKeys("all");
        }
        clearSelection() {
          !this.disallowEmptySelection &&
            ("all" === this.state.selectedKeys ||
              this.state.selectedKeys.size > 0) &&
            this.state.setSelectedKeys(new n.Y());
        }
        toggleSelectAll() {
          this.isSelectAll ? this.clearSelection() : this.selectAll();
        }
        select(e, t) {
          "none" !== this.selectionMode &&
            ("single" === this.selectionMode
              ? this.isSelected(e) && !this.disallowEmptySelection
                ? this.toggleSelection(e)
                : this.replaceSelection(e)
              : "toggle" === this.selectionBehavior ||
                  (t &&
                    ("touch" === t.pointerType || "virtual" === t.pointerType))
                ? this.toggleSelection(e)
                : this.replaceSelection(e));
        }
        isSelectionEqual(e) {
          if (e === this.state.selectedKeys) return !0;
          let t = this.selectedKeys;
          if (e.size !== t.size) return !1;
          for (let l of e) if (!t.has(l)) return !1;
          for (let l of t) if (!e.has(l)) return !1;
          return !0;
        }
        canSelectItem(e) {
          var t;
          if (
            "none" === this.state.selectionMode ||
            this.state.disabledKeys.has(e)
          )
            return !1;
          let l = this.collection.getItem(e);
          return (
            !!l &&
            (null == l ||
              null === (t = l.props) ||
              void 0 === t ||
              !t.isDisabled) &&
            ("cell" !== l.type || !!this.allowsCellSelection)
          );
        }
        isDisabled(e) {
          var t, l;
          return (
            "all" === this.state.disabledBehavior &&
            (this.state.disabledKeys.has(e) ||
              !!(null === (l = this.collection.getItem(e)) || void 0 === l
                ? void 0
                : null === (t = l.props) || void 0 === t
                  ? void 0
                  : t.isDisabled))
          );
        }
        isLink(e) {
          var t, l;
          return !!(null === (l = this.collection.getItem(e)) || void 0 === l
            ? void 0
            : null === (t = l.props) || void 0 === t
              ? void 0
              : t.href);
        }
        getItemProps(e) {
          var t;
          return null === (t = this.collection.getItem(e)) || void 0 === t
            ? void 0
            : t.props;
        }
        constructor(e, t, l) {
          var n;
          (this.collection = e),
            (this.state = t),
            (this.allowsCellSelection =
              null !== (n = null == l ? void 0 : l.allowsCellSelection) &&
              void 0 !== n &&
              n),
            (this._isSelectAll = null);
        }
      }
    },
    75125: function (e, t, l) {
      l.d(t, {
        q: function () {
          return i;
        },
      });
      var n = l(91980),
        r = l(41821),
        o = l(2265);
      function i(e) {
        let {
            selectionMode: t = "none",
            disallowEmptySelection: l,
            allowDuplicateSelectionEvents: i,
            selectionBehavior: c = "toggle",
            disabledBehavior: u = "all",
          } = e,
          a = (0, o.useRef)(!1),
          [, d] = (0, o.useState)(!1),
          f = (0, o.useRef)(null),
          y = (0, o.useRef)(null),
          [, h] = (0, o.useState)(null),
          p = (0, o.useMemo)(() => s(e.selectedKeys), [e.selectedKeys]),
          g = (0, o.useMemo)(
            () => s(e.defaultSelectedKeys, new n.Y()),
            [e.defaultSelectedKeys],
          ),
          [K, v] = (0, r.z)(p, g, e.onSelectionChange),
          S = (0, o.useMemo)(
            () => (e.disabledKeys ? new Set(e.disabledKeys) : new Set()),
            [e.disabledKeys],
          ),
          [m, b] = (0, o.useState)(c);
        "replace" === c &&
          "toggle" === m &&
          "object" == typeof K &&
          0 === K.size &&
          b("replace");
        let w = (0, o.useRef)(c);
        return (
          (0, o.useEffect)(() => {
            c !== w.current && (b(c), (w.current = c));
          }, [c]),
          {
            selectionMode: t,
            disallowEmptySelection: l,
            selectionBehavior: m,
            setSelectionBehavior: b,
            get isFocused() {
              return a.current;
            },
            setFocused(e) {
              (a.current = e), d(e);
            },
            get focusedKey() {
              return f.current;
            },
            get childFocusStrategy() {
              return y.current;
            },
            setFocusedKey(e, t = "first") {
              (f.current = e), (y.current = t), h(e);
            },
            selectedKeys: K,
            setSelectedKeys(e) {
              (i ||
                !(function (e, t) {
                  if (e.size !== t.size) return !1;
                  for (let l of e) if (!t.has(l)) return !1;
                  return !0;
                })(e, K)) &&
                v(e);
            },
            disabledKeys: S,
            disabledBehavior: u,
          }
        );
      }
      function s(e, t) {
        return e ? ("all" === e ? "all" : new n.Y(e)) : t;
      }
    },
    18918: function (e, t, l) {
      l.d(t, {
        l: function () {
          return r;
        },
      });
      var n = l(41821);
      function r(e = {}) {
        let { isReadOnly: t } = e,
          [l, r] = (0, n.z)(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: l,
          setSelected: function (e) {
            t || r(e);
          },
          toggle: function () {
            t || r(!l);
          },
        };
      }
    },
  },
]);
