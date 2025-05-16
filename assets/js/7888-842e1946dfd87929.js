"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7888],
  {
    65809: function (e, t, n) {
      n.d(t, {
        default: function () {
          return f;
        },
      });
      var s = n(57437),
        a = n(2265);
      function i({ l10n: e, id: t, attrs: n, vars: s, elems: i, children: r }) {
        let l;
        if (Array.isArray(r)) {
          if (r.length > 1)
            throw Error(
              "Expected to receive a single React element to localize.",
            );
          l = r[0];
        } else l = null != r ? r : null;
        if (!(0, a.isValidElement)(l)) {
          let n = "string" == typeof l ? l : void 0,
            i = e.getString(t, s, n);
          return (0, a.createElement)(a.Fragment, null, i);
        }
        return e.getElement(l, t, { attrs: n, vars: s, elems: i });
      }
      var r = n(84148),
        l = n(64491);
      function c(e) {
        return void 0 !== e.value;
      }
      function u(e) {
        return Array.from(
          (0, l.Bm)(e).childNodes.map(
            (e) => (
              c(e)
                ? (e.textContent = e.value)
                : (e.textContent = Array.from(e.childNodes)
                    .filter((e) => c(e))
                    .map((e) => e)
                    .map((e) => e.value)
                    .join(" ")),
              e
            ),
          ),
        );
      }
      var o = n(50594),
        d = n(95397);
      function f({ children: e, locale: t, ...n }) {
        let l = (0, a.useContext)(d.MY),
          c = (0, a.useMemo)(
            () => l || (t ? new o._((0, r.no)(t), u) : new o._((0, r.Uu)(), u)),
            [l, t],
          );
        return (0, s.jsx)(i, { l10n: c, ...n, children: e });
      }
    },
    64223: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return u;
          },
          onProviderChange: function () {
            return c;
          },
        });
      var s = n(57437),
        a = n(39684),
        i = n(20081),
        r = n(98330),
        l = n(29329);
      function c(e, t) {
        (0, a.mo)(e) &&
          ((e.library = () => n.e(2404).then(n.bind(n, 13915))),
          (e.video.disablePictureInPicture = !0));
      }
      function u({ videoId: e, autoPlay: t }) {
        return (0, s.jsxs)(i.Syo, {
          aspectRatio: "16/9",
          className: "min-h-full aspect-video !w-auto min-w-full",
          src: `https://customer-n1ekmntmtgx1a3lg.cloudflarestream.com/${e}/manifest/video.m3u8`,
          controls: !t,
          autoPlay: t,
          loop: t,
          muted: t,
          playsInline: !0,
          onProviderChange: c,
          children: [
            (0, s.jsx)(i.ZNi, {}),
            t ? (0, s.jsx)(s.Fragment, {}) : (0, s.jsx)(r.aj, { icons: l.K }),
          ],
        });
      }
    },
    15964: function (e, t, n) {
      n.d(t, {
        Link: function () {
          return u;
        },
      });
      var s = n(57437),
        a = n(2265),
        i = n(45622),
        r = n(67485),
        l = n(70097),
        c = n(87138);
      let u = (0, a.forwardRef)((e, t) => {
        let {
          children: n,
          showAnchorIcon: a,
          anchorIcon: u = (0, s.jsx)(i.x, { className: r.A }),
          getLinkProps: o,
        } = (0, l.n)({ ...e, ref: t });
        return (0, s.jsx)(c.default, {
          ...o(),
          children: (0, s.jsxs)(s.Fragment, {
            children: [
              n,
              a && (0, s.jsxs)(s.Fragment, { children: ["\xa0 ", u] }),
            ],
          }),
        });
      });
      u.displayName = "CelesteLink";
    },
    9201: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return a;
          },
        });
      var s = n(58087);
      function a({ translations: e, defaultElement: t }) {
        let n = (0, s.Z)();
        return e && n && "en-US" !== n ? e.get(n) : t;
      }
    },
    39020: function (e, t, n) {
      n.d(t, {
        default: function () {
          return o;
        },
      });
      var s = n(57437),
        a = n(76208),
        i = n(18570),
        r = n(2429),
        l = n(81887),
        c = n(34500);
      function u({ src: e, alt: t, width: n, ...a }) {
        return (0, s.jsx)("img", {
          className: "cursor-pointer",
          src: (0, c.s)({ src: e, width: n }),
          srcSet: `${(0, c.s)({ src: e, width: 320 })}   320w,
${(0, c.s)({ src: e, width: 640 })}   640w,
${(0, c.s)({ src: e, width: 960 })}   960w,
${(0, c.s)({ src: e, width: 1280 })} 1280w,
${(0, c.s)({ src: e, width: 2560 })} 2560w`,
          alt: t,
          loading: "lazy",
          decoding: "async",
          ...a,
        });
      }
      function o({ src: e, alt: t, width: n }) {
        let { isOpen: c, onOpen: o, onClose: d } = (0, a.q)();
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(u, { src: e, alt: t, width: n, onClick: o }),
            (0, s.jsx)(i.R, {
              backdrop: "blur",
              isOpen: c,
              onClose: d,
              size: "5xl",
              classNames: {
                body: "p-0",
                closeButton: "hover:bg-white/5 active:bg-white/10 text-2xl",
              },
              children: (0, s.jsx)(r.A, {
                children: (a) =>
                  (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(l.I, {
                      children: (0, s.jsx)(u, { src: e, alt: t, width: n }),
                    }),
                  }),
              }),
            }),
          ],
        });
      }
    },
    70629: function (e, t, n) {
      n.r(t),
        n.d(t, {
          ProjectInfoCard: function () {
            return m;
          },
        });
      var s = n(57437),
        a = n(60603),
        i = n(55448),
        r = n(70499),
        l = n(52265),
        c = n(16356),
        u = n(43781),
        o = n(63872),
        d = n(85097),
        f = n(65809),
        x = n(31332);
      function m({
        date: e,
        peakViewers: t,
        averageViewers: n,
        showDuration: m,
        watchTime: h,
        participants: p,
      }) {
        let j = (0, x.Z)();
        return (0, s.jsx)(a.w, {
          shadow: "none",
          children: (0, s.jsxs)(i.G, {
            className: "grid md:grid-cols-2 xl:grid-cols-3 gap-3 items-center",
            children: [
              e &&
                (0, s.jsxs)("div", {
                  className: "flex gap-1 items-center",
                  children: [
                    (0, s.jsx)("p", {
                      className: "text-default-500 text-large",
                      children: (0, s.jsx)(c.FFD, {}),
                    }),
                    (0, s.jsx)("p", {
                      className: "font-semibold text-default-600 text-small",
                      suppressHydrationWarning: !0,
                      children: (0, r.WU)(e, j),
                    }),
                  ],
                }),
              t
                ? (0, s.jsxs)("div", {
                    className: "flex gap-1 items-center",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-default-500 text-large",
                        children: (0, s.jsx)(u.awk, {}),
                      }),
                      (0, s.jsx)("p", {
                        className: "font-semibold text-default-600 text-small",
                        suppressHydrationWarning: !0,
                        children: (0, l.uf)(t),
                      }),
                      (0, s.jsx)("p", {
                        className: "text-default-500 text-small",
                        children: (0, s.jsx)(f.default, {
                          id: "peak-viewers",
                          children: "Peak Viewers",
                        }),
                      }),
                    ],
                  })
                : (0, s.jsx)(s.Fragment, {}),
              n
                ? (0, s.jsxs)("div", {
                    className: "flex gap-1 items-center",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-default-500 text-large",
                        children: (0, s.jsx)(u.fFq, {}),
                      }),
                      (0, s.jsx)("p", {
                        className: "font-semibold text-default-600 text-small",
                        suppressHydrationWarning: !0,
                        children: (0, l.uf)(n),
                      }),
                      (0, s.jsx)("p", {
                        className: "text-default-500 text-small",
                        children: (0, s.jsx)(f.default, {
                          id: "average-viewers",
                          children: "Average Viewers",
                        }),
                      }),
                    ],
                  })
                : (0, s.jsx)(s.Fragment, {}),
              m
                ? (0, s.jsxs)("div", {
                    className: "flex gap-1 items-center",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-default-500 text-large",
                        children: (0, s.jsx)(o.qyc, {}),
                      }),
                      (0, s.jsx)("p", {
                        className: "font-semibold text-default-600 text-small",
                        suppressHydrationWarning: !0,
                        children: (0, l.uf)(m),
                      }),
                      (0, s.jsx)("p", {
                        className: "text-default-500 text-small",
                        children: (0, s.jsx)(f.default, {
                          id: "show-duration",
                          children: "Show Duration",
                        }),
                      }),
                    ],
                  })
                : (0, s.jsx)(s.Fragment, {}),
              h
                ? (0, s.jsxs)("div", {
                    className: "flex gap-1 items-center",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-default-500 text-large",
                        children: (0, s.jsx)(d.yD3, {}),
                      }),
                      (0, s.jsx)("p", {
                        className: "font-semibold text-default-600 text-small",
                        suppressHydrationWarning: !0,
                        children: (0, l.uf)(h),
                      }),
                      (0, s.jsx)("p", {
                        className: "text-default-500 text-small",
                        children: (0, s.jsx)(f.default, {
                          id: "watch-time",
                          children: "Watch Time",
                        }),
                      }),
                    ],
                  })
                : (0, s.jsx)(s.Fragment, {}),
              p
                ? (0, s.jsxs)("div", {
                    className: "flex gap-1 items-center",
                    children: [
                      (0, s.jsx)("p", {
                        className: "text-default-500 text-large",
                        children: (0, s.jsx)(o.ByD, {}),
                      }),
                      (0, s.jsx)("p", {
                        className: "font-semibold text-default-600 text-small",
                        suppressHydrationWarning: !0,
                        children: (0, l.uf)(p),
                      }),
                      (0, s.jsx)("p", {
                        className: "text-default-500 text-small",
                        children: (0, s.jsx)(f.default, {
                          id: "participants",
                          children: "Participants",
                        }),
                      }),
                    ],
                  })
                : (0, s.jsx)(s.Fragment, {}),
            ],
          }),
        });
      }
    },
    98185: function (e, t, n) {
      n.r(t),
        n.d(t, {
          YouTube: function () {
            return d;
          },
          YouTubeThumbnail: function () {
            return f;
          },
        });
      var s = n(57437),
        a = n(20081),
        i = n(98330),
        r = n(29329),
        l = n(97448),
        c = n(15964),
        u = n(64223),
        o = n(34500);
      function d({ videoId: e, autoPlay: t }) {
        return (0, s.jsxs)(a.Syo, {
          className: "w-full",
          aspectRatio: "16/9",
          src: `youtube/${e}`,
          autoPlay: t,
          loop: t,
          muted: t,
          playsInline: !0,
          onProviderChange: u.onProviderChange,
          load: "idle",
          children: [
            (0, s.jsx)(a.ZNi, {}),
            !t && (0, s.jsx)(i.aj, { icons: r.K }),
          ],
        });
      }
      function f({ videoId: e }) {
        let t = `https://img.youtube.com/vi/${e}/hqdefault.jpg`;
        return (0, s.jsx)(c.Link, {
          target: "_blank",
          className: "h-full",
          href: `https://youtu.be/${e}`,
          children: (0, s.jsxs)("button", {
            type: "button",
            className:
              "relative flex justify-center items-center focus:outline-none focus-visible:ring focus-visible:ring-indigo-300 group",
            "aria-label": "Watch the video",
            children: [
              (0, s.jsx)(l.J, {
                isZoomed: !0,
                radius: "none",
                className:
                  "shadow-2xl transition-shadow duration-300 ease-in-out aspect-video",
                alt: "Youtube Video Thumbnail",
                width: 480,
                height: 360,
                src: (0, o.s)({ src: t, quality: 70, width: 480 }),
                srcSet: `${(0, o.s)({ src: t, width: 144, quality: 70 })}   144w,
${(0, o.s)({ src: t, width: 240, quality: 70 })}   240w,
${(0, o.s)({ src: t, width: 320, quality: 70 })}   320w`,
                decoding: "async",
                loading: "lazy",
              }),
              (0, s.jsxs)("svg", {
                className:
                  "absolute pointer-events-none group-hover:scale-110 transition-transform duration-300 ease-in-out z-10",
                xmlns: "<http://www.w3.org/2000/svg>",
                width: "72",
                height: "72",
                children: [
                  (0, s.jsx)("title", { children: "Play Video" }),
                  (0, s.jsx)("circle", {
                    className: "fill-black/80",
                    cx: "36",
                    cy: "36",
                    r: "20",
                    fillOpacity: ".8",
                  }),
                  (0, s.jsx)("path", {
                    className: "fill-white/70 drop-shadow-2xl",
                    d: "M44 36a.999.999 0 0 0-.427-.82l-10-7A1 1 0 0 0 32 29V43a.999.999 0 0 0 1.573.82l10-7A.995.995 0 0 0 44 36V36c0 .001 0 .001 0 0Z",
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    31332: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      var s = n(2265),
        a = n(58087),
        i = n(70499);
      function r() {
        let e = (0, a.Z)();
        return (0, s.useMemo)(() => {
          if (e) return (0, i.yR)(e);
        }, [e]);
      }
    },
    54162: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      function s({ src: e, width: t, quality: n }) {
        e = e.replace(/^\/+/, "");
        let s = [`width=${t}`, `quality=${n || 75}`, "format=auto"];
        return `https://eufonia.studio/cdn-cgi/image/${s.join(",")}/${e}`;
      }
    },
    70499: function (e, t, n) {
      n.d(t, {
        WU: function () {
          return r;
        },
        mj: function () {
          return l;
        },
        yR: function () {
          return c;
        },
      });
      var s = n(48221),
        a = n(52265),
        i = n(57477);
      function r(e, t, n = "PP") {
        return s.WU(e, n, { locale: t });
      }
      function l(e) {
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
      function c(e) {
        return a.Et.get(e) || i._;
      }
    },
    34500: function (e, t, n) {
      n.d(t, {
        s: function () {
          return s;
        },
      });
      function s({ src: e, quality: t, width: n }) {
        if (!e) return e;
        e = e.replace(/^\/+/, "");
        let s = [`quality=${t || 75}`, "format=auto"];
        return (
          n && s.push(`width=${n}`),
          `https://eufonia.studio/cdn-cgi/image/${s.join(",")}/${e}`
        );
      }
    },
  },
]);
