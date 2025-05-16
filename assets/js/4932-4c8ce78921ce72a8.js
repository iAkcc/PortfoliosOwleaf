"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4932],
  {
    87138: function (e, r, a) {
      a.d(r, {
        default: function () {
          return n.a;
        },
      });
      var s = a(231),
        n = a.n(s);
    },
    48206: function (e, r, a) {
      a.d(r, {
        A: function () {
          return P;
        },
      });
      var [s, n] = (0, a(37561).k)({ name: "ButtonGroupContext", strict: !1 }),
        l = a(12094),
        o = a(53640),
        t = a(2265),
        i = a(13389),
        d = a(5722),
        c = a(277),
        u = a(26242),
        f = a(75300),
        b = a(33222),
        g = a(53426),
        p = a(21616),
        m = (0, g.tv)({
          base: [
            "z-0",
            "group",
            "relative",
            "inline-flex",
            "items-center",
            "justify-center",
            "box-border",
            "appearance-none",
            "outline-none",
            "select-none",
            "whitespace-nowrap",
            "min-w-max",
            "font-normal",
            "subpixel-antialiased",
            "overflow-hidden",
            "tap-highlight-transparent",
            "data-[pressed=true]:scale-[0.97]",
            ...p.Dh,
          ],
          variants: {
            variant: {
              solid: "",
              bordered: "border-medium bg-transparent",
              light: "bg-transparent",
              flat: "",
              faded: "border-medium",
              shadow: "",
              ghost: "border-medium bg-transparent",
            },
            size: {
              sm: "px-3 min-w-16 h-8 text-tiny gap-2 rounded-small",
              md: "px-4 min-w-20 h-10 text-small gap-2 rounded-medium",
              lg: "px-6 min-w-24 h-12 text-medium gap-3 rounded-large",
            },
            color: {
              default: "",
              primary: "",
              secondary: "",
              success: "",
              warning: "",
              danger: "",
            },
            radius: {
              none: "rounded-none",
              sm: "rounded-small",
              md: "rounded-medium",
              lg: "rounded-large",
              full: "rounded-full",
            },
            fullWidth: { true: "w-full" },
            isDisabled: { true: "opacity-disabled pointer-events-none" },
            isInGroup: {
              true: "[&:not(:first-child):not(:last-child)]:rounded-none",
            },
            isIconOnly: {
              true: "px-0 !gap-0",
              false: "[&>svg]:max-w-[theme(spacing.8)]",
            },
            disableAnimation: {
              true: "!transition-none data-[pressed=true]:scale-100",
              false:
                "transition-transform-colors-opacity motion-reduce:transition-none",
            },
          },
          defaultVariants: {
            size: "md",
            variant: "solid",
            color: "default",
            fullWidth: !1,
            isDisabled: !1,
            isInGroup: !1,
          },
          compoundVariants: [
            { variant: "solid", color: "default", class: b.J.solid.default },
            { variant: "solid", color: "primary", class: b.J.solid.primary },
            {
              variant: "solid",
              color: "secondary",
              class: b.J.solid.secondary,
            },
            { variant: "solid", color: "success", class: b.J.solid.success },
            { variant: "solid", color: "warning", class: b.J.solid.warning },
            { variant: "solid", color: "danger", class: b.J.solid.danger },
            { variant: "shadow", color: "default", class: b.J.shadow.default },
            { variant: "shadow", color: "primary", class: b.J.shadow.primary },
            {
              variant: "shadow",
              color: "secondary",
              class: b.J.shadow.secondary,
            },
            { variant: "shadow", color: "success", class: b.J.shadow.success },
            { variant: "shadow", color: "warning", class: b.J.shadow.warning },
            { variant: "shadow", color: "danger", class: b.J.shadow.danger },
            {
              variant: "bordered",
              color: "default",
              class: b.J.bordered.default,
            },
            {
              variant: "bordered",
              color: "primary",
              class: b.J.bordered.primary,
            },
            {
              variant: "bordered",
              color: "secondary",
              class: b.J.bordered.secondary,
            },
            {
              variant: "bordered",
              color: "success",
              class: b.J.bordered.success,
            },
            {
              variant: "bordered",
              color: "warning",
              class: b.J.bordered.warning,
            },
            {
              variant: "bordered",
              color: "danger",
              class: b.J.bordered.danger,
            },
            { variant: "flat", color: "default", class: b.J.flat.default },
            { variant: "flat", color: "primary", class: b.J.flat.primary },
            { variant: "flat", color: "secondary", class: b.J.flat.secondary },
            { variant: "flat", color: "success", class: b.J.flat.success },
            { variant: "flat", color: "warning", class: b.J.flat.warning },
            { variant: "flat", color: "danger", class: b.J.flat.danger },
            { variant: "faded", color: "default", class: b.J.faded.default },
            { variant: "faded", color: "primary", class: b.J.faded.primary },
            {
              variant: "faded",
              color: "secondary",
              class: b.J.faded.secondary,
            },
            { variant: "faded", color: "success", class: b.J.faded.success },
            { variant: "faded", color: "warning", class: b.J.faded.warning },
            { variant: "faded", color: "danger", class: b.J.faded.danger },
            {
              variant: "light",
              color: "default",
              class: [b.J.light.default, "data-[hover=true]:bg-default/40"],
            },
            {
              variant: "light",
              color: "primary",
              class: [b.J.light.primary, "data-[hover=true]:bg-primary/20"],
            },
            {
              variant: "light",
              color: "secondary",
              class: [b.J.light.secondary, "data-[hover=true]:bg-secondary/20"],
            },
            {
              variant: "light",
              color: "success",
              class: [b.J.light.success, "data-[hover=true]:bg-success/20"],
            },
            {
              variant: "light",
              color: "warning",
              class: [b.J.light.warning, "data-[hover=true]:bg-warning/20"],
            },
            {
              variant: "light",
              color: "danger",
              class: [b.J.light.danger, "data-[hover=true]:bg-danger/20"],
            },
            { variant: "ghost", color: "default", class: b.J.ghost.default },
            { variant: "ghost", color: "primary", class: b.J.ghost.primary },
            {
              variant: "ghost",
              color: "secondary",
              class: b.J.ghost.secondary,
            },
            { variant: "ghost", color: "success", class: b.J.ghost.success },
            { variant: "ghost", color: "warning", class: b.J.ghost.warning },
            { variant: "ghost", color: "danger", class: b.J.ghost.danger },
            {
              isInGroup: !0,
              class:
                "rounded-none first:rounded-s-medium last:rounded-e-medium",
            },
            {
              isInGroup: !0,
              size: "sm",
              class: "rounded-none first:rounded-s-small last:rounded-e-small",
            },
            {
              isInGroup: !0,
              size: "md",
              class:
                "rounded-none first:rounded-s-medium last:rounded-e-medium",
            },
            {
              isInGroup: !0,
              size: "lg",
              class: "rounded-none first:rounded-s-large last:rounded-e-large",
            },
            {
              isInGroup: !0,
              isRounded: !0,
              class: "rounded-none first:rounded-s-full last:rounded-e-full",
            },
            {
              isInGroup: !0,
              radius: "none",
              class: "rounded-none first:rounded-s-none last:rounded-e-none",
            },
            {
              isInGroup: !0,
              radius: "sm",
              class: "rounded-none first:rounded-s-small last:rounded-e-small",
            },
            {
              isInGroup: !0,
              radius: "md",
              class:
                "rounded-none first:rounded-s-medium last:rounded-e-medium",
            },
            {
              isInGroup: !0,
              radius: "lg",
              class: "rounded-none first:rounded-s-large last:rounded-e-large",
            },
            {
              isInGroup: !0,
              radius: "full",
              class: "rounded-none first:rounded-s-full last:rounded-e-full",
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "default",
              className: p.Zs.default,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "primary",
              className: p.Zs.primary,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "secondary",
              className: p.Zs.secondary,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "success",
              className: p.Zs.success,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "warning",
              className: p.Zs.warning,
            },
            {
              isInGroup: !0,
              variant: ["ghost", "bordered"],
              color: "danger",
              className: p.Zs.danger,
            },
            { isIconOnly: !0, size: "sm", class: "min-w-8 w-8 h-8" },
            { isIconOnly: !0, size: "md", class: "min-w-10 w-10 h-10" },
            { isIconOnly: !0, size: "lg", class: "min-w-12 w-12 h-12" },
            {
              variant: ["solid", "faded", "flat", "bordered", "shadow"],
              class: "data-[hover=true]:opacity-hover",
            },
          ],
        });
      (0, g.tv)({
        base: "inline-flex items-center justify-center h-auto",
        variants: { fullWidth: { true: "w-full" } },
        defaultVariants: { fullWidth: !1 },
      });
      var v = a(5150),
        h = a(83892),
        y = a(90794),
        w = a(51446),
        x = a(49374),
        J = a(55971),
        k = a(57437),
        I = (0, J.Gp)((e, r) => {
          let {
            Component: a,
            domRef: s,
            children: b,
            styles: g,
            spinnerSize: p,
            spinner: J = (0, k.jsx)(w.c, { color: "current", size: p }),
            spinnerPlacement: I,
            startContent: P,
            endContent: C,
            isLoading: G,
            disableRipple: B,
            getButtonProps: N,
            getRippleProps: z,
            isIconOnly: j,
          } = (function (e) {
            var r, a, s, b, g, p, w, x, J;
            let k = n(),
              I = (0, l.w)(),
              P = !!k,
              {
                ref: C,
                as: G,
                children: B,
                startContent: N,
                endContent: z,
                autoFocus: j,
                className: D,
                spinner: A,
                isLoading: M = !1,
                disableRipple: T = !1,
                fullWidth: V = null != (r = null == k ? void 0 : k.fullWidth) &&
                  r,
                radius: E = null == k ? void 0 : k.radius,
                size: L = null != (a = null == k ? void 0 : k.size) ? a : "md",
                color: W = null != (s = null == k ? void 0 : k.color)
                  ? s
                  : "default",
                variant: O = null != (b = null == k ? void 0 : k.variant)
                  ? b
                  : "solid",
                disableAnimation: Z = null !=
                  (p =
                    null != (g = null == k ? void 0 : k.disableAnimation)
                      ? g
                      : null == I
                        ? void 0
                        : I.disableAnimation) && p,
                isDisabled: R = null !=
                  (w = null == k ? void 0 : k.isDisabled) && w,
                isIconOnly: _ = null !=
                  (x = null == k ? void 0 : k.isIconOnly) && x,
                spinnerPlacement: S = "start",
                onPress: X,
                onClick: F,
                ...H
              } = e,
              K = G || "button",
              U = "string" == typeof K,
              Y = (0, u.gy)(C),
              $ =
                null != (J = T || (null == I ? void 0 : I.disableRipple))
                  ? J
                  : Z,
              {
                isFocusVisible: q,
                isFocused: Q,
                focusProps: ee,
              } = (0, i.F)({ autoFocus: j }),
              er = R || M,
              ea = (0, t.useMemo)(
                () =>
                  m({
                    size: L,
                    color: W,
                    variant: O,
                    radius: E,
                    fullWidth: V,
                    isDisabled: er,
                    isInGroup: P,
                    disableAnimation: Z,
                    isIconOnly: _,
                    className: D,
                  }),
                [L, W, O, E, V, er, P, _, Z, D],
              ),
              { onClick: es, onClear: en, ripples: el } = (0, y.i)(),
              eo = (0, t.useCallback)(
                (e) => {
                  $ || er || Z || !Y.current || es(e);
                },
                [$, er, Z, Y, es],
              ),
              { buttonProps: et, isPressed: ei } = (0, v.j)(
                {
                  elementType: G,
                  isDisabled: er,
                  onPress: X,
                  onClick: (0, d.t)(F, eo),
                  ...H,
                },
                Y,
              ),
              { isHovered: ed, hoverProps: ec } = (0, h.X)({ isDisabled: er }),
              eu = (0, t.useCallback)(
                (e = {}) => ({
                  "data-disabled": (0, o.PB)(er),
                  "data-focus": (0, o.PB)(Q),
                  "data-pressed": (0, o.PB)(ei),
                  "data-focus-visible": (0, o.PB)(q),
                  "data-hover": (0, o.PB)(ed),
                  "data-loading": (0, o.PB)(M),
                  ...(0, c.d)(
                    et,
                    ee,
                    ec,
                    (0, f.z)(H, { enabled: U }),
                    (0, f.z)(e),
                  ),
                }),
                [M, er, Q, ei, U, q, ed, et, ee, ec, H],
              ),
              ef = (e) =>
                (0, t.isValidElement)(e)
                  ? (0, t.cloneElement)(e, {
                      "aria-hidden": !0,
                      focusable: !1,
                      tabIndex: -1,
                    })
                  : null,
              eb = ef(N);
            return {
              Component: K,
              children: B,
              domRef: Y,
              spinner: A,
              styles: ea,
              startContent: eb,
              endContent: ef(z),
              isLoading: M,
              spinnerPlacement: S,
              spinnerSize: (0, t.useMemo)(
                () => ({ sm: "sm", md: "sm", lg: "md" })[L],
                [L],
              ),
              disableRipple: $,
              getButtonProps: eu,
              getRippleProps: (0, t.useCallback)(
                () => ({ ripples: el, onClear: en }),
                [el, en],
              ),
              isIconOnly: _,
            };
          })({ ...e, ref: r });
          return (0, k.jsxs)(a, {
            ref: s,
            className: g,
            ...N(),
            children: [
              P,
              G && "start" === I && J,
              G && j ? null : b,
              G && "end" === I && J,
              C,
              !B && (0, k.jsx)(x.L, { ...z() }),
            ],
          });
        });
      I.displayName = "NextUI.Button";
      var P = I;
    },
    70097: function (e, r, a) {
      a.d(r, {
        n: function () {
          return m;
        },
      });
      var s = a(67485),
        n = a(60357),
        l = a(277),
        o = a(46671),
        t = a(47961),
        i = a(9656),
        d = a(12094),
        c = a(55971),
        u = a(26242),
        f = a(13389),
        b = a(36222),
        g = a(53640),
        p = a(2265);
      function m(e) {
        var r, a, m, v;
        let h = (0, d.w)(),
          [y, w] = (0, c.oe)(e, s.p.variantKeys),
          {
            ref: x,
            as: J,
            children: k,
            anchorIcon: I,
            isExternal: P = !1,
            showAnchorIcon: C = !1,
            autoFocus: G = !1,
            className: B,
            onPress: N,
            onPressStart: z,
            onPressEnd: j,
            onClick: D,
            ...A
          } = y,
          M = (0, u.gy)(x),
          T =
            null !=
              (a =
                null != (r = null == e ? void 0 : e.disableAnimation)
                  ? r
                  : null == h
                    ? void 0
                    : h.disableAnimation) && a,
          { linkProps: V } = (function (e, r) {
            let {
                elementType: a = "a",
                onPress: s,
                onPressStart: d,
                onPressEnd: c,
                onClick: u,
                isDisabled: f,
                ...b
              } = e,
              g = {};
            "a" !== a && (g = { role: "link", tabIndex: f ? void 0 : 0 });
            let { focusableProps: p } = (0, t.k)(e, r),
              { pressProps: m, isPressed: v } = (0, i.r)({
                onPress: s,
                onPressStart: d,
                onPressEnd: c,
                isDisabled: f,
                ref: r,
              }),
              h = (0, n.z)(b, { labelable: !0 }),
              y = (0, l.d)(p, m),
              w = (0, o.tv)(),
              x = (0, o.eY)(e);
            return {
              isPressed: v,
              linkProps: (0, l.d)(h, x, {
                ...y,
                ...g,
                "aria-disabled": f || void 0,
                "aria-current": e["aria-current"],
                onClick: (r) => {
                  var a;
                  null === (a = m.onClick) || void 0 === a || a.call(m, r),
                    u &&
                      (u(r),
                      console.warn(
                        "onClick is deprecated, please use onPress",
                      )),
                    !w.isNative &&
                      r.currentTarget instanceof HTMLAnchorElement &&
                      r.currentTarget.href &&
                      !r.isDefaultPrevented() &&
                      (0, o.b0)(r.currentTarget, r) &&
                      e.href &&
                      (r.preventDefault(),
                      w.open(r.currentTarget, r, e.href, e.routerOptions));
                },
              }),
            };
          })(
            {
              ...A,
              onPress: N,
              onPressStart: z,
              onPressEnd: j,
              onClick: D,
              isDisabled: e.isDisabled,
              elementType: `${J}`,
            },
            M,
          ),
          {
            isFocused: E,
            isFocusVisible: L,
            focusProps: W,
          } = (0, f.F)({ autoFocus: G });
        P &&
          ((A.rel = null != (m = A.rel) ? m : "noopener noreferrer"),
          (A.target = null != (v = A.target) ? v : "_blank"));
        let O = (0, p.useMemo)(
          () => (0, s.p)({ ...w, disableAnimation: T, className: B }),
          [(0, b.Xx)(w), T, B],
        );
        return {
          Component: J || "a",
          children: k,
          anchorIcon: I,
          showAnchorIcon: C,
          getLinkProps: (0, p.useCallback)(
            () => ({
              ref: M,
              className: O,
              "data-focus": (0, g.PB)(E),
              "data-disabled": (0, g.PB)(e.isDisabled),
              "data-focus-visible": (0, g.PB)(L),
              ...(0, l.d)(W, V, A),
            }),
            [O, E, L, W, V, A],
          ),
        };
      }
    },
    45622: function (e, r, a) {
      a.d(r, {
        x: function () {
          return n;
        },
      });
      var s = a(57437),
        n = (e) =>
          (0, s.jsxs)("svg", {
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
              (0, s.jsx)("path", {
                d: "M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6",
              }),
              (0, s.jsx)("path", { d: "M15 3h6v6" }),
              (0, s.jsx)("path", { d: "M10 14L21 3" }),
            ],
          });
    },
    51446: function (e, r, a) {
      a.d(r, {
        c: function () {
          return c;
        },
      });
      var s = a(55971),
        n = (0, a(53426).tv)({
          slots: {
            base: "relative inline-flex flex-col gap-2 items-center justify-center",
            wrapper: "relative flex",
            circle1: [
              "absolute",
              "w-full",
              "h-full",
              "rounded-full",
              "animate-spinner-ease-spin",
              "border-2",
              "border-solid",
              "border-t-transparent",
              "border-l-transparent",
              "border-r-transparent",
            ],
            circle2: [
              "absolute",
              "w-full",
              "h-full",
              "rounded-full",
              "opacity-75",
              "animate-spinner-linear-spin",
              "border-2",
              "border-dotted",
              "border-t-transparent",
              "border-l-transparent",
              "border-r-transparent",
            ],
            label: "text-foreground dark:text-foreground-dark font-regular",
          },
          variants: {
            size: {
              sm: {
                wrapper: "w-5 h-5",
                circle1: "border-2",
                circle2: "border-2",
                label: "text-small",
              },
              md: {
                wrapper: "w-8 h-8",
                circle1: "border-3",
                circle2: "border-3",
                label: "text-medium",
              },
              lg: {
                wrapper: "w-10 h-10",
                circle1: "border-3",
                circle2: "border-3",
                label: "text-large",
              },
            },
            color: {
              current: {
                circle1: "border-b-current",
                circle2: "border-b-current",
              },
              white: { circle1: "border-b-white", circle2: "border-b-white" },
              default: {
                circle1: "border-b-default",
                circle2: "border-b-default",
              },
              primary: {
                circle1: "border-b-primary",
                circle2: "border-b-primary",
              },
              secondary: {
                circle1: "border-b-secondary",
                circle2: "border-b-secondary",
              },
              success: {
                circle1: "border-b-success",
                circle2: "border-b-success",
              },
              warning: {
                circle1: "border-b-warning",
                circle2: "border-b-warning",
              },
              danger: {
                circle1: "border-b-danger",
                circle2: "border-b-danger",
              },
            },
            labelColor: {
              foreground: { label: "text-foreground" },
              primary: { label: "text-primary" },
              secondary: { label: "text-secondary" },
              success: { label: "text-success" },
              warning: { label: "text-warning" },
              danger: { label: "text-danger" },
            },
          },
          defaultVariants: {
            size: "md",
            color: "primary",
            labelColor: "foreground",
          },
        }),
        l = a(36222),
        o = a(65263),
        t = a(2265),
        i = a(57437),
        d = (0, s.Gp)((e, r) => {
          let {
            slots: a,
            classNames: d,
            label: c,
            getSpinnerProps: u,
          } = (function (e) {
            let [r, a] = (0, s.oe)(e, n.variantKeys),
              { children: i, className: d, classNames: c, label: u, ...f } = r,
              b = (0, t.useMemo)(() => n({ ...a }), [(0, l.Xx)(a)]),
              g = (0, o.W)(null == c ? void 0 : c.base, d),
              p = u || i,
              m = (0, t.useMemo)(
                () =>
                  p && "string" == typeof p
                    ? p
                    : f["aria-label"]
                      ? ""
                      : "Loading",
                [i, p, f["aria-label"]],
              ),
              v = (0, t.useCallback)(
                () => ({
                  "aria-label": m,
                  className: b.base({ class: g }),
                  ...f,
                }),
                [m, b, g, f],
              );
            return { label: p, slots: b, classNames: c, getSpinnerProps: v };
          })({ ...e });
          return (0, i.jsxs)("div", {
            ref: r,
            ...u(),
            children: [
              (0, i.jsxs)("div", {
                className: a.wrapper({ class: null == d ? void 0 : d.wrapper }),
                children: [
                  (0, i.jsx)("i", {
                    className: a.circle1({
                      class: null == d ? void 0 : d.circle1,
                    }),
                  }),
                  (0, i.jsx)("i", {
                    className: a.circle2({
                      class: null == d ? void 0 : d.circle2,
                    }),
                  }),
                ],
              }),
              c &&
                (0, i.jsx)("span", {
                  className: a.label({ class: null == d ? void 0 : d.label }),
                  children: c,
                }),
            ],
          });
        });
      d.displayName = "NextUI.Spinner";
      var c = d;
    },
    67485: function (e, r, a) {
      a.d(r, {
        A: function () {
          return o;
        },
        p: function () {
          return l;
        },
      });
      var s = a(53426),
        n = a(21616),
        l = (0, s.tv)({
          base: [
            "relative inline-flex items-center outline-none tap-highlight-transparent",
            ...n.Dh,
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
  },
]);
