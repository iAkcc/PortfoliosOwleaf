"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6580],
  {
    66648: function (e, t, A) {
      A.d(t, {
        default: function () {
          return n.a;
        },
      });
      var a = A(55601),
        n = A.n(a);
    },
    55601: function (e, t, A) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var A in t)
            Object.defineProperty(e, A, { enumerable: !0, get: t[A] });
        })(t, {
          default: function () {
            return s;
          },
          getImageProps: function () {
            return i;
          },
        });
      let a = A(99920),
        n = A(80497),
        r = A(38173),
        l = a._(A(54162));
      function i(e) {
        let { props: t } = (0, n.getImgProps)(e, {
          defaultLoader: l.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image/",
            loader: "custom",
            dangerouslyAllowSVG: !0,
            unoptimized: !1,
          },
        });
        for (let [e, A] of Object.entries(t)) void 0 === A && delete t[e];
        return { props: t };
      }
      let s = r.Image;
    },
    65809: function (e, t, A) {
      A.d(t, {
        default: function () {
          return o;
        },
      });
      var a = A(57437),
        n = A(2265);
      function r({ l10n: e, id: t, attrs: A, vars: a, elems: r, children: l }) {
        let i;
        if (Array.isArray(l)) {
          if (l.length > 1)
            throw Error(
              "Expected to receive a single React element to localize.",
            );
          i = l[0];
        } else i = null != l ? l : null;
        if (!(0, n.isValidElement)(i)) {
          let A = "string" == typeof i ? i : void 0,
            r = e.getString(t, a, A);
          return (0, n.createElement)(n.Fragment, null, r);
        }
        return e.getElement(i, t, { attrs: A, vars: a, elems: r });
      }
      var l = A(84148),
        i = A(64491);
      function s(e) {
        return void 0 !== e.value;
      }
      function u(e) {
        return Array.from(
          (0, i.Bm)(e).childNodes.map(
            (e) => (
              s(e)
                ? (e.textContent = e.value)
                : (e.textContent = Array.from(e.childNodes)
                    .filter((e) => s(e))
                    .map((e) => e)
                    .map((e) => e.value)
                    .join(" ")),
              e
            ),
          ),
        );
      }
      var d = A(50594),
        c = A(95397);
      function o({ children: e, locale: t, ...A }) {
        let i = (0, n.useContext)(c.MY),
          s = (0, n.useMemo)(
            () => i || (t ? new d._((0, l.no)(t), u) : new d._((0, l.Uu)(), u)),
            [i, t],
          );
        return (0, a.jsx)(r, { l10n: s, ...A, children: e });
      }
    },
    14968: function (e, t, A) {
      A.r(t),
        A.d(t, {
          default: function () {
            return p;
          },
        });
      var a = A(57437),
        n = A(60603),
        r = A(40884),
        l = A(55448),
        i = A(68937),
        s = A(66648),
        u = A(70499),
        d = A(52265),
        c = A(16356),
        o = A(43781),
        f = A(54162),
        m = A(63872),
        g = A(85097),
        x = A(65809),
        h = A(31332);
      function p({
        banner: e,
        children: t,
        date: A,
        peakViewers: p,
        averageViewers: j,
        showDuration: b,
        watchTime: E,
        participants: N,
      }) {
        let w = (0, h.Z)();
        return (0, a.jsxs)(n.w, {
          shadow: "none",
          className: "max-w-xl border-none bg-transparent",
          children: [
            (0, a.jsx)(r.u, {
              className: "justify-between p-0",
              children:
                e &&
                (0, a.jsx)(s.default, {
                  loader: f.default,
                  className: "mb-5",
                  alt: "Banner",
                  src: e,
                  placeholder: "blur",
                }),
            }),
            (0, a.jsx)(l.G, {
              className: "px-3 py-0",
              children: (0, a.jsx)("p", {
                className: "text-small pl-px text-default-500 text-justify",
                children: t,
              }),
            }),
            (0, a.jsxs)(i.i, {
              className: "grid grid-cols-2 gap-3 items-center",
              children: [
                A &&
                  (0, a.jsxs)("div", {
                    className: "flex gap-1 items-center",
                    children: [
                      (0, a.jsx)("p", {
                        className: "text-default-500 text-large",
                        children: (0, a.jsx)(c.FFD, {}),
                      }),
                      (0, a.jsx)("p", {
                        className: "font-semibold text-default-600 text-small",
                        suppressHydrationWarning: !0,
                        children: (0, u.WU)(A, w),
                      }),
                    ],
                  }),
                p
                  ? (0, a.jsxs)("div", {
                      className: "flex gap-1 items-center",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-default-500 text-large",
                          children: (0, a.jsx)(o.awk, {}),
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "font-semibold text-default-600 text-small",
                          suppressHydrationWarning: !0,
                          children: (0, d.uf)(p),
                        }),
                        (0, a.jsx)("p", {
                          className: "text-default-500 text-small",
                          children: (0, a.jsx)(x.default, {
                            id: "peak-viewers",
                            children: "Peak Viewers",
                          }),
                        }),
                      ],
                    })
                  : (0, a.jsx)(a.Fragment, {}),
                j
                  ? (0, a.jsxs)("div", {
                      className: "flex gap-1 items-center",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-default-500 text-large",
                          children: (0, a.jsx)(o.fFq, {}),
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "font-semibold text-default-600 text-small",
                          suppressHydrationWarning: !0,
                          children: (0, d.uf)(j),
                        }),
                        (0, a.jsx)("p", {
                          className: "text-default-500 text-small",
                          children: (0, a.jsx)(x.default, {
                            id: "average-viewers",
                            children: "Average Viewers",
                          }),
                        }),
                      ],
                    })
                  : (0, a.jsx)(a.Fragment, {}),
                b
                  ? (0, a.jsxs)("div", {
                      className: "flex gap-1 items-center",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-default-500 text-large",
                          children: (0, a.jsx)(m.qyc, {}),
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "font-semibold text-default-600 text-small",
                          suppressHydrationWarning: !0,
                          children: (0, d.uf)((0, u.mj)(b)),
                        }),
                        (0, a.jsx)("p", {
                          className: "text-default-500 text-small",
                          children: (0, a.jsx)(x.default, {
                            id: "show-duration",
                            children: "Show Duration",
                          }),
                        }),
                      ],
                    })
                  : (0, a.jsx)(a.Fragment, {}),
                E
                  ? (0, a.jsxs)("div", {
                      className: "flex gap-1 items-center",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-default-500 text-large",
                          children: (0, a.jsx)(g.yD3, {}),
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "font-semibold text-default-600 text-small",
                          suppressHydrationWarning: !0,
                          children: (0, d.uf)((0, u.mj)(E)),
                        }),
                        (0, a.jsx)("p", {
                          className: "text-default-500 text-small",
                          children: (0, a.jsx)(x.default, {
                            id: "watch-time",
                            children: "Watch Time",
                          }),
                        }),
                      ],
                    })
                  : (0, a.jsx)(a.Fragment, {}),
                N
                  ? (0, a.jsxs)("div", {
                      className: "flex gap-1 items-center",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-default-500 text-large",
                          children: (0, a.jsx)(m.ByD, {}),
                        }),
                        (0, a.jsx)("p", {
                          className:
                            "font-semibold text-default-600 text-small",
                          suppressHydrationWarning: !0,
                          children: (0, d.uf)(N),
                        }),
                        (0, a.jsx)("p", {
                          className: "text-default-500 text-small",
                          children: (0, a.jsx)(x.default, {
                            id: "participants",
                            children: "Participants",
                          }),
                        }),
                      ],
                    })
                  : (0, a.jsx)(a.Fragment, {}),
              ],
            }),
          ],
        });
      }
    },
    31332: function (e, t, A) {
      A.d(t, {
        Z: function () {
          return l;
        },
      });
      var a = A(2265),
        n = A(58087),
        r = A(70499);
      function l() {
        let e = (0, n.Z)();
        return (0, a.useMemo)(() => {
          if (e) return (0, r.yR)(e);
        }, [e]);
      }
    },
    54162: function (e, t, A) {
      A.r(t),
        A.d(t, {
          default: function () {
            return a;
          },
        });
      function a({ src: e, width: t, quality: A }) {
        e = e.replace(/^\/+/, "");
        let a = [`width=${t}`, `quality=${A || 75}`, "format=auto"];
        return `https://eufonia.studio/cdn-cgi/image/${a.join(",")}/${e}`;
      }
    },
    70499: function (e, t, A) {
      A.d(t, {
        WU: function () {
          return l;
        },
        mj: function () {
          return i;
        },
        yR: function () {
          return s;
        },
      });
      var a = A(48221),
        n = A(52265),
        r = A(57477);
      function l(e, t, A = "PP") {
        return a.WU(e, A, { locale: t });
      }
      function i(e) {
        let t = 1 / 60;
        return (
          8766 * (e.years || 0) +
          730.5600000000001 * (e.months || 0) +
          168 * (e.weeks || 0) +
          24 * (e.days || 0) +
          1 * (e.hours || 0) +
          (e.minutes || 0) * t +
          (e.seconds || 0) * (t / 60)
        );
      }
      function s(e) {
        return n.Et.get(e) || r._;
      }
    },
    19981: function (e, t, A) {
      A.r(t),
        (t.default = {
          src: "/_next/static/media/banner.94423e28.png",
          height: 400,
          width: 3840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAD1BMVEUaGxtDPUGVgo9wYj9zd1w4ku6YAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgZmFgZGRgYgIAAEwADrryPY4AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        });
    },
    45503: function (e, t, A) {
      A.r(t),
        (t.default = {
          src: "/_next/static/media/banner.bee4ca8d.png",
          height: 400,
          width: 3840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAFVBMVEVqX1NXOzqKcGRPSjlZcolXT1ejhniv6km+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgYmNlYWBkYAYAAHsAFubuyQsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        });
    },
    62067: function (e, t, A) {
      A.r(t),
        (t.default = {
          src: "/_next/static/media/banner.aa37b91c.png",
          height: 400,
          width: 3840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAElBMVEWQTTOiXi1QVzKGPTYsKCeRcURHfxi3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgYmVgZGBmYQAAAFIAEHJZPGMAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        });
    },
    41183: function (e, t, A) {
      A.r(t),
        (t.default = {
          src: "/_next/static/media/banner.92e95c7b.png",
          height: 400,
          width: 3840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAElBMVEVzYFI9NSyHb1qVemVDQDWjh3FKrH73AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgZmBkZGFgZQIAAEgAEZS/3IsAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        });
    },
    67450: function (e, t, A) {
      A.r(t),
        (t.default = {
          src: "/_next/static/media/banner.b5187efa.png",
          height: 400,
          width: 3840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAFVBMVEVENjRaGRRVUUsSGRZpKiQ5AABtOzubxZObAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgZGFiY2VmYAAAAHQAFlJJq+UAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        });
    },
    28676: function (e, t, A) {
      A.r(t),
        (t.default = {
          src: "/_next/static/media/banner.d3736c93.png",
          height: 400,
          width: 3840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAFVBMVEXKvqZwfYt9jJBnZV2Ci4eesL7j6euhxGsTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgZGVjYGBhZgIAAGwAFgeJ3vYAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        });
    },
    51059: function (e, t, A) {
      A.r(t),
        (t.default = {
          src: "/_next/static/media/banner.07a6b1ea.png",
          height: 400,
          width: 3840,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAMAAADU3h9xAAAAElBMVEV3T4YiQ15ZSnEWCEZrPpZ8Tp1MzsdGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEUlEQVR4nGNgYGVgYWJmZAQAAFQAEWD5S38AAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 1,
        });
    },
    40884: function (e, t, A) {
      A.d(t, {
        u: function () {
          return u;
        },
      });
      var a = A(66265),
        n = A(55971),
        r = A(26242),
        l = A(65263),
        i = A(57437),
        s = (0, n.Gp)((e, t) => {
          var A;
          let { as: n, className: s, children: u, ...d } = e,
            c = (0, r.gy)(t),
            { slots: o, classNames: f } = (0, a.R)(),
            m = (0, l.W)(null == f ? void 0 : f.header, s);
          return (0, i.jsx)(n || "div", {
            ref: c,
            className:
              null == (A = o.header) ? void 0 : A.call(o, { class: m }),
            ...d,
            children: u,
          });
        });
      s.displayName = "NextUI.CardHeader";
      var u = s;
    },
    68937: function (e, t, A) {
      A.d(t, {
        i: function () {
          return u;
        },
      });
      var a = A(66265),
        n = A(55971),
        r = A(26242),
        l = A(65263),
        i = A(57437),
        s = (0, n.Gp)((e, t) => {
          var A;
          let { as: n, className: s, children: u, ...d } = e,
            c = (0, r.gy)(t),
            { slots: o, classNames: f } = (0, a.R)(),
            m = (0, l.W)(null == f ? void 0 : f.footer, s);
          return (0, i.jsx)(n || "div", {
            ref: c,
            className:
              null == (A = o.footer) ? void 0 : A.call(o, { class: m }),
            ...d,
            children: u,
          });
        });
      s.displayName = "NextUI.CardFooter";
      var u = s;
    },
    90798: function (e, t, A) {
      A.r(t),
        A.d(t, {
          Card: function () {
            return l.w;
          },
          CardBody: function () {
            return a.G;
          },
          CardFooter: function () {
            return n.i;
          },
          CardHeader: function () {
            return r.u;
          },
          CardProvider: function () {
            return i.k;
          },
          useCard: function () {
            return s.n;
          },
          useCardContext: function () {
            return i.R;
          },
        });
      var a = A(55448),
        n = A(68937),
        r = A(40884),
        l = A(60603),
        i = A(66265),
        s = A(40771);
    },
    65336: function (e, t, A) {
      A.d(t, {
        Tooltip: function () {
          return a.e;
        },
      });
      var a = A(26249);
    },
  },
]);
