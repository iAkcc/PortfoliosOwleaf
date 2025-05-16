(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2762],
  {
    18034: function (e, l, s) {
      "use strict";
      s.r(l),
        s.d(l, {
          default: function () {
            return h;
          },
        });
      var t = s(57437),
        a = s(2265);
      let n = (e, l) => {
          let [s, t] = (0, a.useState)(0),
            [n, r] = (0, a.useState)([]),
            c = (0, a.useCallback)(
              (s) => {
                e && (e.scrollTo(s), l && l(e));
              },
              [e, l],
            ),
            i = (0, a.useCallback)((e) => {
              r(e.scrollSnapList());
            }, []),
            o = (0, a.useCallback)((e) => {
              t(e.selectedScrollSnap());
            }, []);
          return (
            (0, a.useEffect)(() => {
              e &&
                (i(e), o(e), e.on("reInit", i).on("reInit", o).on("select", o));
            }, [e, i, o]),
            { selectedIndex: s, scrollSnaps: n, onDotButtonClick: c }
          );
        },
        r = (e) => {
          let { children: l, ...s } = e;
          return (0, t.jsx)("button", {
            type: "button",
            "aria-label": "Switch to a Gallery Page",
            ...s,
            children: l,
          });
        },
        c = (e, l) => {
          let [s, t] = (0, a.useState)(!0),
            [n, r] = (0, a.useState)(!0),
            c = (0, a.useCallback)(() => {
              e && (e.scrollPrev(), l && l(e));
            }, [e, l]),
            i = (0, a.useCallback)(() => {
              e && (e.scrollNext(), l && l(e));
            }, [e, l]),
            o = (0, a.useCallback)((e) => {
              t(!e.canScrollPrev()), r(!e.canScrollNext());
            }, []);
          return (
            (0, a.useEffect)(() => {
              e && (o(e), e.on("reInit", o).on("select", o));
            }, [e, o]),
            {
              prevBtnDisabled: s,
              nextBtnDisabled: n,
              onPrevButtonClick: c,
              onNextButtonClick: i,
            }
          );
        },
        i = (e) => {
          let { children: l, ...s } = e;
          return (0, t.jsxs)("button", {
            className: "embla__button embla__button--prev",
            type: "button",
            "aria-label": "Previous Gallery Page",
            ...s,
            children: [
              (0, t.jsxs)("svg", {
                className: "embla__button__svg",
                viewBox: "0 0 532 532",
                role: "img",
                "aria-labelledby": "prev-icon",
                children: [
                  (0, t.jsx)("title", {
                    id: "prev-icon",
                    children: "Previous",
                  }),
                  (0, t.jsx)("path", {
                    fill: "currentColor",
                    d: "M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z",
                  }),
                ],
              }),
              l,
            ],
          });
        },
        o = (e) => {
          let { children: l, ...s } = e;
          return (0, t.jsxs)("button", {
            className: "embla__button embla__button--next",
            type: "button",
            "aria-label": "Next Gallery Page",
            ...s,
            children: [
              (0, t.jsxs)("svg", {
                className: "embla__button__svg",
                viewBox: "0 0 532 532",
                role: "img",
                "aria-labelledby": "next-icon",
                children: [
                  (0, t.jsx)("title", { id: "next-icon", children: "Next" }),
                  (0, t.jsx)("path", {
                    fill: "currentColor",
                    d: "M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z",
                  }),
                ],
              }),
              l,
            ],
          });
        };
      var d = s(7059),
        u = s(74300);
      s(80638);
      var b = s(95243),
        m = s(86028),
        x = s(15964),
        _ = s(26249);
      function h(e) {
        let { slides: l, options: s } = e,
          [h, f] = (0, u.Z)(s, [(0, d.Z)({ delay: 8e3 }), (0, b.Z)()]),
          p = (0, a.useCallback)((e) => {
            let l = e?.plugins()?.autoplay;
            l && (!1 === l.options.stopOnInteraction ? l.reset : l.stop)();
          }, []),
          { selectedIndex: v, scrollSnaps: j, onDotButtonClick: N } = n(f, p),
          {
            prevBtnDisabled: w,
            nextBtnDisabled: g,
            onPrevButtonClick: k,
            onNextButtonClick: C,
          } = c(f, p);
        return (0, t.jsxs)("section", {
          ...e,
          className: (0, m.cn)("embla", e.className),
          children: [
            (0, t.jsx)("div", {
              className: "embla__viewport",
              ref: h,
              children: (0, t.jsx)("div", {
                className: "embla__container",
                children: l.map((e) =>
                  (0, t.jsx)(
                    "div",
                    {
                      className: "embla__slide embla__class-names h-full",
                      children: (0, t.jsx)("div", {
                        className:
                          "embla__slide__number !block w-auto overflow-hidden",
                        children: e.tooltip
                          ? (0, t.jsx)(_.e, {
                              showArrow: !0,
                              placement: "right-start",
                              classNames: {
                                content: [
                                  "z-10 p-0 w-full inline-flex flex-col items-center justify-center subpixel-antialiased outline-none box-border text-small bg-content1 shadow-small",
                                  "backdrop-blur-lg bg-content1/95",
                                ],
                                base: ["p-0"],
                              },
                              content: e.tooltip,
                              children: e.link
                                ? (0, t.jsx)(x.Link, {
                                    className: "h-full w-full",
                                    href: e.link,
                                    children: e.content,
                                  })
                                : (0, t.jsx)("div", {
                                    className: "h-full w-full",
                                    children: e.content,
                                  }),
                            })
                          : e.link
                            ? (0, t.jsx)(x.Link, {
                                className: "h-full w-full",
                                href: e.link,
                                children: e.content,
                              })
                            : (0, t.jsx)("div", {
                                className: "h-full w-full",
                                children: e.content,
                              }),
                      }),
                    },
                    e.id,
                  ),
                ),
              }),
            }),
            (0, t.jsxs)("div", {
              className: "embla__controls",
              children: [
                (0, t.jsxs)("div", {
                  className: "embla__buttons",
                  children: [
                    (0, t.jsx)(i, { onClick: k, disabled: w }),
                    (0, t.jsx)(o, { onClick: C, disabled: g }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className: "embla__dots",
                  children: j.map((e, l) =>
                    (0, t.jsx)(
                      r,
                      {
                        onClick: () => N(l),
                        className: "embla__dot".concat(
                          l === v ? " embla__dot--selected" : "",
                        ),
                      },
                      l,
                    ),
                  ),
                }),
              ],
            }),
          ],
        });
      }
    },
    66479: function (e, l, s) {
      "use strict";
      s.r(l),
        s.d(l, {
          default: function () {
            return m;
          },
        });
      var t = s(57437),
        a = s(2265);
      let n = (e, l) => {
          let [s, t] = (0, a.useState)(!0),
            [n, r] = (0, a.useState)(!0),
            c = (0, a.useCallback)(() => {
              e && (e.scrollPrev(), l && l(e));
            }, [e, l]),
            i = (0, a.useCallback)(() => {
              e && (e.scrollNext(), l && l(e));
            }, [e, l]),
            o = (0, a.useCallback)((e) => {
              t(!e.canScrollPrev()), r(!e.canScrollNext());
            }, []);
          return (
            (0, a.useEffect)(() => {
              e && (o(e), e.on("reInit", o).on("select", o));
            }, [e, o]),
            {
              prevBtnDisabled: s,
              nextBtnDisabled: n,
              onPrevButtonClick: c,
              onNextButtonClick: i,
            }
          );
        },
        r = (e) => {
          let { children: l, ...s } = e;
          return (0, t.jsxs)("button", {
            className: "embla__button embla__button--prev",
            type: "button",
            "aria-label": "Previous Slider Page",
            ...s,
            children: [
              (0, t.jsxs)("svg", {
                className: "embla__button__svg",
                viewBox: "0 0 532 532",
                role: "img",
                "aria-labelledby": "slider-prev-icon",
                children: [
                  (0, t.jsx)("title", {
                    id: "slider-prev-icon",
                    children: "Previous",
                  }),
                  (0, t.jsx)("path", {
                    fill: "currentColor",
                    d: "M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z",
                  }),
                ],
              }),
              l,
            ],
          });
        },
        c = (e) => {
          let { children: l, ...s } = e;
          return (0, t.jsxs)("button", {
            className: "embla__button embla__button--next",
            type: "button",
            "aria-label": "Next Slider Page",
            ...s,
            children: [
              (0, t.jsxs)("svg", {
                className: "embla__button__svg",
                viewBox: "0 0 532 532",
                role: "img",
                "aria-labelledby": "slider-next-icon",
                children: [
                  (0, t.jsx)("title", {
                    id: "slider-next-icon",
                    children: "Next",
                  }),
                  (0, t.jsx)("path", {
                    fill: "currentColor",
                    d: "M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z",
                  }),
                ],
              }),
              l,
            ],
          });
        };
      var i = s(7059),
        o = s(74300);
      s(93081);
      var d = s(95243),
        u = s(86028),
        b = s(26249);
      function m(e) {
        let { slides: l, options: s } = e,
          [m, x] = (0, o.Z)(s, [(0, i.Z)({ delay: 1e4 }), (0, d.Z)()]),
          {
            prevBtnDisabled: _,
            nextBtnDisabled: h,
            onPrevButtonClick: f,
            onNextButtonClick: p,
          } = n(
            x,
            (0, a.useCallback)((e) => {
              let l = e?.plugins()?.autoplay;
              l && (!1 === l.options.stopOnInteraction ? l.reset : l.stop)();
            }, []),
          ),
          v = (0, a.useId)();
        return (0, t.jsxs)("section", {
          ...e,
          className: (0, u.cn)(
            "embla_slider max-w-[90%] md:max-w-full",
            e.className,
          ),
          children: [
            (0, t.jsx)("div", {
              className: "embla_slider_viewport",
              ref: m,
              children: (0, t.jsx)("div", {
                className: "embla_slider_container",
                children: l.map((e) =>
                  (0, t.jsx)(
                    "div",
                    {
                      className:
                        "embla_slider_slide embla_slider_class-names h-full",
                      children: (0, t.jsx)("div", {
                        className:
                          "embla_slider_slide__number !block w-auto overflow-hidden h-full",
                        children: e.tooltip
                          ? (0, t.jsx)(b.e, {
                              showArrow: !0,
                              placement: "right-start",
                              classNames: {
                                content: [
                                  "z-10 p-0 w-full inline-flex flex-col items-center justify-center subpixel-antialiased outline-none box-border text-small bg-content1 shadow-small",
                                  "backdrop-blur-lg bg-content1/95",
                                ],
                                base: ["p-0"],
                              },
                              content: e.tooltip,
                              children: (0, t.jsx)("div", {
                                className: "h-full",
                                children: e.content,
                              }),
                            })
                          : e.content,
                      }),
                    },
                    `${v}-${e.id}`,
                  ),
                ),
              }),
            }),
            (0, t.jsx)("div", {
              className: "embla_slider_controls",
              children: (0, t.jsxs)("div", {
                className: "embla_slider_buttons",
                children: [
                  (0, t.jsx)(r, { onClick: f, disabled: _ }),
                  (0, t.jsx)(c, { onClick: p, disabled: h }),
                ],
              }),
            }),
          ],
        });
      }
    },
    35811: function (e, l, s) {
      "use strict";
      s.d(l, {
        $: function () {
          return i;
        },
        s: function () {
          return c;
        },
      });
      var t = s(57437),
        a = s(60603),
        n = s(68937),
        r = s(86028);
      function c({ children: e }) {
        return (0, t.jsx)(a.w, {
          classNames: { base: "w-full h-full" },
          isFooterBlurred: !0,
          radius: "none",
          className: "border-none",
          children: e,
        });
      }
      function i({ children: e }) {
        return (0, t.jsx)(n.i, {
          className: (0, r.cn)(
            "flex flex-col items-start justify-start gap-2 before:bg-white/10 border-white/20",
            "border-1 overflow-hidden py-1 md:py-3 absolute before:rounded-xl rounded-large bottom-6",
            "w-[calc(100%_-_8px)] shadow-small ml-0 z-10",
          ),
          children: e,
        });
      }
    },
    75589: function (e, l, s) {
      "use strict";
      s.d(l, {
        Z: function () {
          return o;
        },
      });
      var t = s(57437),
        a = s(76208),
        n = s(18570),
        r = s(2429),
        c = s(81887),
        i = s(66648);
      function o(e) {
        let { isOpen: l, onOpen: s, onClose: o } = (0, a.q)();
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(i.default, {
              className: "cursor-pointer",
              ...e,
              onClick: s,
            }),
            (0, t.jsx)(n.R, {
              backdrop: "blur",
              isOpen: l,
              onClose: o,
              size: "5xl",
              classNames: {
                body: "p-0",
                closeButton: "hover:bg-white/5 active:bg-white/10 text-2xl",
              },
              children: (0, t.jsx)(r.A, {
                children: (l) =>
                  (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsx)(c.I, {
                      children: (0, t.jsx)(i.default, { ...e }),
                    }),
                  }),
              }),
            }),
          ],
        });
      }
    },
    80638: function () {},
    93081: function () {},
  },
]);
