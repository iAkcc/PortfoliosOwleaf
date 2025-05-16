"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6193],
  {
    55448: function (e, t, r) {
      r.d(t, {
        G: function () {
          return l;
        },
      });
      var n = r(66265),
        a = r(55971),
        o = r(26242),
        i = r(65263),
        u = r(57437),
        s = (0, a.Gp)((e, t) => {
          var r;
          let { as: a, className: s, children: l, ...d } = e,
            c = (0, o.gy)(t),
            { slots: f, classNames: h } = (0, n.R)(),
            g = (0, i.W)(null == h ? void 0 : h.body, s);
          return (0, u.jsx)(a || "div", {
            ref: c,
            className: null == (r = f.body) ? void 0 : r.call(f, { class: g }),
            ...d,
            children: l,
          });
        });
      s.displayName = "NextUI.CardBody";
      var l = s;
    },
    60603: function (e, t, r) {
      r.d(t, {
        w: function () {
          return l;
        },
      });
      var n = r(66265),
        a = r(40771),
        o = r(55971),
        i = r(49374),
        u = r(57437),
        s = (0, o.Gp)((e, t) => {
          let {
            children: r,
            context: o,
            Component: s,
            isPressable: l,
            disableAnimation: d,
            disableRipple: c,
            getCardProps: f,
            getRippleProps: h,
          } = (0, a.n)({ ...e, ref: t });
          return (0, u.jsxs)(s, {
            ...f(),
            children: [
              (0, u.jsx)(n.k, { value: o, children: r }),
              l && !d && !c && (0, u.jsx)(i.L, { ...h() }),
            ],
          });
        });
      s.displayName = "NextUI.Card";
      var l = s;
    },
    40771: function (e, t, r) {
      r.d(t, {
        n: function () {
          return y;
        },
      });
      var n = r(53426),
        a = r(21616),
        o = (0, n.tv)({
          slots: {
            base: [
              "flex",
              "flex-col",
              "relative",
              "overflow-hidden",
              "h-auto",
              "outline-none",
              "text-foreground",
              "box-border",
              "bg-content1",
              ...a.Dh,
            ],
            header: [
              "flex",
              "p-3",
              "z-10",
              "w-full",
              "justify-start",
              "items-center",
              "shrink-0",
              "overflow-inherit",
              "color-inherit",
              "subpixel-antialiased",
            ],
            body: [
              "relative",
              "flex",
              "flex-1",
              "w-full",
              "p-3",
              "flex-auto",
              "flex-col",
              "place-content-inherit",
              "align-items-inherit",
              "h-auto",
              "break-words",
              "text-left",
              "overflow-y-auto",
              "subpixel-antialiased",
            ],
            footer: [
              "p-3",
              "h-auto",
              "flex",
              "w-full",
              "items-center",
              "overflow-hidden",
              "color-inherit",
              "subpixel-antialiased",
            ],
          },
          variants: {
            shadow: {
              none: { base: "shadow-none" },
              sm: { base: "shadow-small" },
              md: { base: "shadow-medium" },
              lg: { base: "shadow-large" },
            },
            radius: {
              none: {
                base: "rounded-none",
                header: "rounded-none",
                footer: "rounded-none",
              },
              sm: {
                base: "rounded-small",
                header: "rounded-t-small",
                footer: "rounded-b-small",
              },
              md: {
                base: "rounded-medium",
                header: "rounded-t-medium",
                footer: "rounded-b-medium",
              },
              lg: {
                base: "rounded-large",
                header: "rounded-t-large",
                footer: "rounded-b-large",
              },
            },
            fullWidth: { true: { base: "w-full" } },
            isHoverable: {
              true: {
                base: "data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2",
              },
            },
            isPressable: { true: { base: "cursor-pointer" } },
            isBlurred: {
              true: {
                base: [
                  "bg-background/80",
                  "dark:bg-background/20",
                  "backdrop-blur-md",
                  "backdrop-saturate-150",
                ],
              },
            },
            isFooterBlurred: {
              true: {
                footer: [
                  "bg-background/10",
                  "backdrop-blur",
                  "backdrop-saturate-150",
                ],
              },
            },
            isDisabled: {
              true: { base: "opacity-disabled cursor-not-allowed" },
            },
            disableAnimation: {
              true: "",
              false: {
                base: "transition-transform-background motion-reduce:transition-none",
              },
            },
          },
          compoundVariants: [
            {
              isPressable: !0,
              class:
                "data-[pressed=true]:scale-[0.97] tap-highlight-transparent",
            },
          ],
          defaultVariants: {
            radius: "lg",
            shadow: "md",
            fullWidth: !1,
            isHoverable: !1,
            isPressable: !1,
            isDisabled: !1,
            isFooterBlurred: !1,
          },
        }),
        i = r(2265),
        u = r(5722),
        s = r(277),
        l = r(13389),
        d = r(83892),
        c = r(5150),
        f = r(12094),
        h = r(55971),
        g = r(65263),
        b = r(36222),
        m = r(53640),
        w = r(75300),
        p = r(26242),
        x = r(90794);
      function y(e) {
        var t, r, n, a;
        let y = (0, f.w)(),
          [k, v] = (0, h.oe)(e, o.variantKeys),
          {
            ref: D,
            as: M,
            children: P,
            onClick: T,
            onPress: C,
            autoFocus: N,
            className: S,
            classNames: Y,
            allowTextSelectionOnPress: H = !0,
            ...O
          } = k,
          B = (0, p.gy)(D),
          F = M || (e.isPressable ? "button" : "div"),
          E = "string" == typeof F,
          q =
            null !=
              (r =
                null != (t = e.disableAnimation)
                  ? t
                  : null == y
                    ? void 0
                    : y.disableAnimation) && r,
          W =
            null !=
              (a =
                null != (n = e.disableRipple)
                  ? n
                  : null == y
                    ? void 0
                    : y.disableRipple) && a,
          G = (0, g.W)(null == Y ? void 0 : Y.base, S),
          { onClick: L, onClear: z, ripples: j } = (0, x.i)(),
          Q = (e) => {
            q || W || !B.current || L(e);
          },
          { buttonProps: X, isPressed: $ } = (0, c.j)(
            {
              onPress: C,
              elementType: M,
              isDisabled: !e.isPressable,
              onClick: (0, u.t)(T, Q),
              allowTextSelectionOnPress: H,
              ...O,
            },
            B,
          ),
          { hoverProps: R, isHovered: I } = (0, d.X)({
            isDisabled: !e.isHoverable,
            ...O,
          }),
          {
            isFocusVisible: U,
            isFocused: A,
            focusProps: _,
          } = (0, l.F)({ autoFocus: N }),
          K = (0, i.useMemo)(
            () => o({ ...v, disableAnimation: q }),
            [(0, b.Xx)(v), q],
          ),
          V = (0, i.useMemo)(
            () => ({
              slots: K,
              classNames: Y,
              disableAnimation: q,
              isDisabled: e.isDisabled,
              isFooterBlurred: e.isFooterBlurred,
              fullWidth: e.fullWidth,
            }),
            [K, Y, e.isDisabled, e.isFooterBlurred, q, e.fullWidth],
          ),
          Z = (0, i.useCallback)(
            (t = {}) => ({
              ref: B,
              className: K.base({ class: G }),
              tabIndex: e.isPressable ? 0 : -1,
              "data-hover": (0, m.PB)(I),
              "data-pressed": (0, m.PB)($),
              "data-focus": (0, m.PB)(A),
              "data-focus-visible": (0, m.PB)(U),
              "data-disabled": (0, m.PB)(e.isDisabled),
              ...(0, s.d)(
                e.isPressable ? { ...X, ..._, role: "button" } : {},
                e.isHoverable ? R : {},
                (0, w.z)(O, { enabled: E }),
                (0, w.z)(t),
              ),
            }),
            [
              B,
              K,
              G,
              E,
              e.isPressable,
              e.isHoverable,
              e.isDisabled,
              I,
              $,
              U,
              X,
              _,
              R,
              O,
            ],
          ),
          J = (0, i.useCallback)(() => ({ ripples: j, onClear: z }), [j, z]);
        return {
          context: V,
          domRef: B,
          Component: F,
          classNames: Y,
          children: P,
          isHovered: I,
          isPressed: $,
          disableAnimation: q,
          isPressable: e.isPressable,
          isHoverable: e.isHoverable,
          disableRipple: W,
          handleClick: Q,
          isFocusVisible: U,
          getCardProps: Z,
          getRippleProps: J,
        };
      }
    },
    66265: function (e, t, r) {
      r.d(t, {
        R: function () {
          return a;
        },
        k: function () {
          return n;
        },
      });
      var [n, a] = (0, r(37561).k)({
        name: "CardContext",
        strict: !0,
        errorMessage:
          "useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />",
      });
    },
    48221: function (e, t, r) {
      r.d(t, {
        WU: function () {
          return H;
        },
      });
      var n = r(57477);
      let a = {};
      function o(e) {
        let t = Object.prototype.toString.call(e);
        return e instanceof Date ||
          ("object" == typeof e && "[object Date]" === t)
          ? new e.constructor(+e)
          : new Date(
              "number" == typeof e ||
              "[object Number]" === t ||
              "string" == typeof e ||
              "[object String]" === t
                ? e
                : NaN,
            );
      }
      function i(e) {
        let t = o(e);
        return t.setHours(0, 0, 0, 0), t;
      }
      function u(e) {
        let t = o(e),
          r = new Date(
            Date.UTC(
              t.getFullYear(),
              t.getMonth(),
              t.getDate(),
              t.getHours(),
              t.getMinutes(),
              t.getSeconds(),
              t.getMilliseconds(),
            ),
          );
        return r.setUTCFullYear(t.getFullYear()), +e - +r;
      }
      function s(e, t) {
        return e instanceof Date ? new e.constructor(t) : new Date(t);
      }
      function l(e, t) {
        let r =
            t?.weekStartsOn ??
            t?.locale?.options?.weekStartsOn ??
            a.weekStartsOn ??
            a.locale?.options?.weekStartsOn ??
            0,
          n = o(e),
          i = n.getDay();
        return (
          n.setDate(n.getDate() - ((i < r ? 7 : 0) + i - r)),
          n.setHours(0, 0, 0, 0),
          n
        );
      }
      function d(e) {
        return l(e, { weekStartsOn: 1 });
      }
      function c(e) {
        let t = o(e),
          r = t.getFullYear(),
          n = s(e, 0);
        n.setFullYear(r + 1, 0, 4), n.setHours(0, 0, 0, 0);
        let a = d(n),
          i = s(e, 0);
        i.setFullYear(r, 0, 4), i.setHours(0, 0, 0, 0);
        let u = d(i);
        return t.getTime() >= a.getTime()
          ? r + 1
          : t.getTime() >= u.getTime()
            ? r
            : r - 1;
      }
      function f(e, t) {
        let r = o(e),
          n = r.getFullYear(),
          i =
            t?.firstWeekContainsDate ??
            t?.locale?.options?.firstWeekContainsDate ??
            a.firstWeekContainsDate ??
            a.locale?.options?.firstWeekContainsDate ??
            1,
          u = s(e, 0);
        u.setFullYear(n + 1, 0, i), u.setHours(0, 0, 0, 0);
        let d = l(u, t),
          c = s(e, 0);
        c.setFullYear(n, 0, i), c.setHours(0, 0, 0, 0);
        let f = l(c, t);
        return r.getTime() >= d.getTime()
          ? n + 1
          : r.getTime() >= f.getTime()
            ? n
            : n - 1;
      }
      function h(e, t) {
        let r = Math.abs(e).toString().padStart(t, "0");
        return (e < 0 ? "-" : "") + r;
      }
      let g = {
          y(e, t) {
            let r = e.getFullYear(),
              n = r > 0 ? r : 1 - r;
            return h("yy" === t ? n % 100 : n, t.length);
          },
          M(e, t) {
            let r = e.getMonth();
            return "M" === t ? String(r + 1) : h(r + 1, 2);
          },
          d: (e, t) => h(e.getDate(), t.length),
          a(e, t) {
            let r = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
              case "a":
              case "aa":
                return r.toUpperCase();
              case "aaa":
                return r;
              case "aaaaa":
                return r[0];
              default:
                return "am" === r ? "a.m." : "p.m.";
            }
          },
          h: (e, t) => h(e.getHours() % 12 || 12, t.length),
          H: (e, t) => h(e.getHours(), t.length),
          m: (e, t) => h(e.getMinutes(), t.length),
          s: (e, t) => h(e.getSeconds(), t.length),
          S(e, t) {
            let r = t.length;
            return h(
              Math.trunc(e.getMilliseconds() * Math.pow(10, r - 3)),
              t.length,
            );
          },
        },
        b = {
          midnight: "midnight",
          noon: "noon",
          morning: "morning",
          afternoon: "afternoon",
          evening: "evening",
          night: "night",
        },
        m = {
          G: function (e, t, r) {
            let n = e.getFullYear() > 0 ? 1 : 0;
            switch (t) {
              case "G":
              case "GG":
              case "GGG":
                return r.era(n, { width: "abbreviated" });
              case "GGGGG":
                return r.era(n, { width: "narrow" });
              default:
                return r.era(n, { width: "wide" });
            }
          },
          y: function (e, t, r) {
            if ("yo" === t) {
              let t = e.getFullYear();
              return r.ordinalNumber(t > 0 ? t : 1 - t, { unit: "year" });
            }
            return g.y(e, t);
          },
          Y: function (e, t, r, n) {
            let a = f(e, n),
              o = a > 0 ? a : 1 - a;
            return "YY" === t
              ? h(o % 100, 2)
              : "Yo" === t
                ? r.ordinalNumber(o, { unit: "year" })
                : h(o, t.length);
          },
          R: function (e, t) {
            return h(c(e), t.length);
          },
          u: function (e, t) {
            return h(e.getFullYear(), t.length);
          },
          Q: function (e, t, r) {
            let n = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
              case "Q":
                return String(n);
              case "QQ":
                return h(n, 2);
              case "Qo":
                return r.ordinalNumber(n, { unit: "quarter" });
              case "QQQ":
                return r.quarter(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "QQQQQ":
                return r.quarter(n, { width: "narrow", context: "formatting" });
              default:
                return r.quarter(n, { width: "wide", context: "formatting" });
            }
          },
          q: function (e, t, r) {
            let n = Math.ceil((e.getMonth() + 1) / 3);
            switch (t) {
              case "q":
                return String(n);
              case "qq":
                return h(n, 2);
              case "qo":
                return r.ordinalNumber(n, { unit: "quarter" });
              case "qqq":
                return r.quarter(n, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "qqqqq":
                return r.quarter(n, { width: "narrow", context: "standalone" });
              default:
                return r.quarter(n, { width: "wide", context: "standalone" });
            }
          },
          M: function (e, t, r) {
            let n = e.getMonth();
            switch (t) {
              case "M":
              case "MM":
                return g.M(e, t);
              case "Mo":
                return r.ordinalNumber(n + 1, { unit: "month" });
              case "MMM":
                return r.month(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "MMMMM":
                return r.month(n, { width: "narrow", context: "formatting" });
              default:
                return r.month(n, { width: "wide", context: "formatting" });
            }
          },
          L: function (e, t, r) {
            let n = e.getMonth();
            switch (t) {
              case "L":
                return String(n + 1);
              case "LL":
                return h(n + 1, 2);
              case "Lo":
                return r.ordinalNumber(n + 1, { unit: "month" });
              case "LLL":
                return r.month(n, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "LLLLL":
                return r.month(n, { width: "narrow", context: "standalone" });
              default:
                return r.month(n, { width: "wide", context: "standalone" });
            }
          },
          w: function (e, t, r, n) {
            let i = (function (e, t) {
              let r = o(e);
              return (
                Math.round(
                  (+l(r, t) -
                    +(function (e, t) {
                      let r =
                          t?.firstWeekContainsDate ??
                          t?.locale?.options?.firstWeekContainsDate ??
                          a.firstWeekContainsDate ??
                          a.locale?.options?.firstWeekContainsDate ??
                          1,
                        n = f(e, t),
                        o = s(e, 0);
                      return (
                        o.setFullYear(n, 0, r), o.setHours(0, 0, 0, 0), l(o, t)
                      );
                    })(r, t)) /
                    6048e5,
                ) + 1
              );
            })(e, n);
            return "wo" === t
              ? r.ordinalNumber(i, { unit: "week" })
              : h(i, t.length);
          },
          I: function (e, t, r) {
            let n = (function (e) {
              let t = o(e);
              return (
                Math.round(
                  (+d(t) -
                    +(function (e) {
                      let t = c(e),
                        r = s(e, 0);
                      return (
                        r.setFullYear(t, 0, 4), r.setHours(0, 0, 0, 0), d(r)
                      );
                    })(t)) /
                    6048e5,
                ) + 1
              );
            })(e);
            return "Io" === t
              ? r.ordinalNumber(n, { unit: "week" })
              : h(n, t.length);
          },
          d: function (e, t, r) {
            return "do" === t
              ? r.ordinalNumber(e.getDate(), { unit: "date" })
              : g.d(e, t);
          },
          D: function (e, t, r) {
            let n = (function (e) {
              let t = o(e);
              return (
                (function (e, t) {
                  let r = i(e),
                    n = i(t);
                  return Math.round((+r - u(r) - (+n - u(n))) / 864e5);
                })(
                  t,
                  (function (e) {
                    let t = o(e),
                      r = s(e, 0);
                    return (
                      r.setFullYear(t.getFullYear(), 0, 1),
                      r.setHours(0, 0, 0, 0),
                      r
                    );
                  })(t),
                ) + 1
              );
            })(e);
            return "Do" === t
              ? r.ordinalNumber(n, { unit: "dayOfYear" })
              : h(n, t.length);
          },
          E: function (e, t, r) {
            let n = e.getDay();
            switch (t) {
              case "E":
              case "EE":
              case "EEE":
                return r.day(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "EEEEE":
                return r.day(n, { width: "narrow", context: "formatting" });
              case "EEEEEE":
                return r.day(n, { width: "short", context: "formatting" });
              default:
                return r.day(n, { width: "wide", context: "formatting" });
            }
          },
          e: function (e, t, r, n) {
            let a = e.getDay(),
              o = (a - n.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case "e":
                return String(o);
              case "ee":
                return h(o, 2);
              case "eo":
                return r.ordinalNumber(o, { unit: "day" });
              case "eee":
                return r.day(a, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "eeeee":
                return r.day(a, { width: "narrow", context: "formatting" });
              case "eeeeee":
                return r.day(a, { width: "short", context: "formatting" });
              default:
                return r.day(a, { width: "wide", context: "formatting" });
            }
          },
          c: function (e, t, r, n) {
            let a = e.getDay(),
              o = (a - n.weekStartsOn + 8) % 7 || 7;
            switch (t) {
              case "c":
                return String(o);
              case "cc":
                return h(o, t.length);
              case "co":
                return r.ordinalNumber(o, { unit: "day" });
              case "ccc":
                return r.day(a, {
                  width: "abbreviated",
                  context: "standalone",
                });
              case "ccccc":
                return r.day(a, { width: "narrow", context: "standalone" });
              case "cccccc":
                return r.day(a, { width: "short", context: "standalone" });
              default:
                return r.day(a, { width: "wide", context: "standalone" });
            }
          },
          i: function (e, t, r) {
            let n = e.getDay(),
              a = 0 === n ? 7 : n;
            switch (t) {
              case "i":
                return String(a);
              case "ii":
                return h(a, t.length);
              case "io":
                return r.ordinalNumber(a, { unit: "day" });
              case "iii":
                return r.day(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "iiiii":
                return r.day(n, { width: "narrow", context: "formatting" });
              case "iiiiii":
                return r.day(n, { width: "short", context: "formatting" });
              default:
                return r.day(n, { width: "wide", context: "formatting" });
            }
          },
          a: function (e, t, r) {
            let n = e.getHours() / 12 >= 1 ? "pm" : "am";
            switch (t) {
              case "a":
              case "aa":
                return r.dayPeriod(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "aaa":
                return r
                  .dayPeriod(n, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "aaaaa":
                return r.dayPeriod(n, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return r.dayPeriod(n, { width: "wide", context: "formatting" });
            }
          },
          b: function (e, t, r) {
            let n;
            let a = e.getHours();
            switch (
              ((n =
                12 === a
                  ? b.noon
                  : 0 === a
                    ? b.midnight
                    : a / 12 >= 1
                      ? "pm"
                      : "am"),
              t)
            ) {
              case "b":
              case "bb":
                return r.dayPeriod(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "bbb":
                return r
                  .dayPeriod(n, { width: "abbreviated", context: "formatting" })
                  .toLowerCase();
              case "bbbbb":
                return r.dayPeriod(n, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return r.dayPeriod(n, { width: "wide", context: "formatting" });
            }
          },
          B: function (e, t, r) {
            let n;
            let a = e.getHours();
            switch (
              ((n =
                a >= 17
                  ? b.evening
                  : a >= 12
                    ? b.afternoon
                    : a >= 4
                      ? b.morning
                      : b.night),
              t)
            ) {
              case "B":
              case "BB":
              case "BBB":
                return r.dayPeriod(n, {
                  width: "abbreviated",
                  context: "formatting",
                });
              case "BBBBB":
                return r.dayPeriod(n, {
                  width: "narrow",
                  context: "formatting",
                });
              default:
                return r.dayPeriod(n, { width: "wide", context: "formatting" });
            }
          },
          h: function (e, t, r) {
            if ("ho" === t) {
              let t = e.getHours() % 12;
              return 0 === t && (t = 12), r.ordinalNumber(t, { unit: "hour" });
            }
            return g.h(e, t);
          },
          H: function (e, t, r) {
            return "Ho" === t
              ? r.ordinalNumber(e.getHours(), { unit: "hour" })
              : g.H(e, t);
          },
          K: function (e, t, r) {
            let n = e.getHours() % 12;
            return "Ko" === t
              ? r.ordinalNumber(n, { unit: "hour" })
              : h(n, t.length);
          },
          k: function (e, t, r) {
            let n = e.getHours();
            return (0 === n && (n = 24), "ko" === t)
              ? r.ordinalNumber(n, { unit: "hour" })
              : h(n, t.length);
          },
          m: function (e, t, r) {
            return "mo" === t
              ? r.ordinalNumber(e.getMinutes(), { unit: "minute" })
              : g.m(e, t);
          },
          s: function (e, t, r) {
            return "so" === t
              ? r.ordinalNumber(e.getSeconds(), { unit: "second" })
              : g.s(e, t);
          },
          S: function (e, t) {
            return g.S(e, t);
          },
          X: function (e, t, r) {
            let n = e.getTimezoneOffset();
            if (0 === n) return "Z";
            switch (t) {
              case "X":
                return p(n);
              case "XXXX":
              case "XX":
                return x(n);
              default:
                return x(n, ":");
            }
          },
          x: function (e, t, r) {
            let n = e.getTimezoneOffset();
            switch (t) {
              case "x":
                return p(n);
              case "xxxx":
              case "xx":
                return x(n);
              default:
                return x(n, ":");
            }
          },
          O: function (e, t, r) {
            let n = e.getTimezoneOffset();
            switch (t) {
              case "O":
              case "OO":
              case "OOO":
                return "GMT" + w(n, ":");
              default:
                return "GMT" + x(n, ":");
            }
          },
          z: function (e, t, r) {
            let n = e.getTimezoneOffset();
            switch (t) {
              case "z":
              case "zz":
              case "zzz":
                return "GMT" + w(n, ":");
              default:
                return "GMT" + x(n, ":");
            }
          },
          t: function (e, t, r) {
            return h(Math.trunc(e.getTime() / 1e3), t.length);
          },
          T: function (e, t, r) {
            return h(e.getTime(), t.length);
          },
        };
      function w(e, t = "") {
        let r = e > 0 ? "-" : "+",
          n = Math.abs(e),
          a = Math.trunc(n / 60),
          o = n % 60;
        return 0 === o ? r + String(a) : r + String(a) + t + h(o, 2);
      }
      function p(e, t) {
        return e % 60 == 0
          ? (e > 0 ? "-" : "+") + h(Math.abs(e) / 60, 2)
          : x(e, t);
      }
      function x(e, t = "") {
        let r = Math.abs(e);
        return (
          (e > 0 ? "-" : "+") + h(Math.trunc(r / 60), 2) + t + h(r % 60, 2)
        );
      }
      let y = (e, t) => {
          switch (e) {
            case "P":
              return t.date({ width: "short" });
            case "PP":
              return t.date({ width: "medium" });
            case "PPP":
              return t.date({ width: "long" });
            default:
              return t.date({ width: "full" });
          }
        },
        k = (e, t) => {
          switch (e) {
            case "p":
              return t.time({ width: "short" });
            case "pp":
              return t.time({ width: "medium" });
            case "ppp":
              return t.time({ width: "long" });
            default:
              return t.time({ width: "full" });
          }
        },
        v = {
          p: k,
          P: (e, t) => {
            let r;
            let n = e.match(/(P+)(p+)?/) || [],
              a = n[1],
              o = n[2];
            if (!o) return y(e, t);
            switch (a) {
              case "P":
                r = t.dateTime({ width: "short" });
                break;
              case "PP":
                r = t.dateTime({ width: "medium" });
                break;
              case "PPP":
                r = t.dateTime({ width: "long" });
                break;
              default:
                r = t.dateTime({ width: "full" });
            }
            return r.replace("{{date}}", y(a, t)).replace("{{time}}", k(o, t));
          },
        },
        D = /^D+$/,
        M = /^Y+$/,
        P = ["D", "DD", "YY", "YYYY"],
        T = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
        C = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
        N = /^'([^]*?)'?$/,
        S = /''/g,
        Y = /[a-zA-Z]/;
      function H(e, t, r) {
        let i = r?.locale ?? a.locale ?? n._,
          u =
            r?.firstWeekContainsDate ??
            r?.locale?.options?.firstWeekContainsDate ??
            a.firstWeekContainsDate ??
            a.locale?.options?.firstWeekContainsDate ??
            1,
          s =
            r?.weekStartsOn ??
            r?.locale?.options?.weekStartsOn ??
            a.weekStartsOn ??
            a.locale?.options?.weekStartsOn ??
            0,
          l = o(e);
        if (
          !(
            (l instanceof Date ||
              ("object" == typeof l &&
                "[object Date]" === Object.prototype.toString.call(l)) ||
              "number" == typeof l) &&
            !isNaN(Number(o(l)))
          )
        )
          throw RangeError("Invalid time value");
        let d = t
          .match(C)
          .map((e) => {
            let t = e[0];
            return "p" === t || "P" === t ? (0, v[t])(e, i.formatLong) : e;
          })
          .join("")
          .match(T)
          .map((e) => {
            if ("''" === e) return { isToken: !1, value: "'" };
            let t = e[0];
            if ("'" === t)
              return {
                isToken: !1,
                value: (function (e) {
                  let t = e.match(N);
                  return t ? t[1].replace(S, "'") : e;
                })(e),
              };
            if (m[t]) return { isToken: !0, value: e };
            if (t.match(Y))
              throw RangeError(
                "Format string contains an unescaped latin alphabet character `" +
                  t +
                  "`",
              );
            return { isToken: !1, value: e };
          });
        i.localize.preprocessor && (d = i.localize.preprocessor(l, d));
        let c = { firstWeekContainsDate: u, weekStartsOn: s, locale: i };
        return d
          .map((n) => {
            if (!n.isToken) return n.value;
            let a = n.value;
            return (
              ((!r?.useAdditionalWeekYearTokens && M.test(a)) ||
                (!r?.useAdditionalDayOfYearTokens && D.test(a))) &&
                (function (e, t, r) {
                  let n = (function (e, t, r) {
                    let n = "Y" === e[0] ? "years" : "days of the month";
                    return `Use \`${e.toLowerCase()}\` instead of \`${e}\` (in \`${t}\`) for formatting ${n} to the input \`${r}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
                  })(e, t, r);
                  if ((console.warn(n), P.includes(e))) throw RangeError(n);
                })(a, t, String(e)),
              (0, m[a[0]])(l, a, i.localize, c)
            );
          })
          .join("");
      }
    },
  },
]);
