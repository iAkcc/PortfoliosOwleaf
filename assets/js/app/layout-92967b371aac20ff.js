(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    22645: function (e, n, t) {
      Promise.resolve().then(t.t.bind(t, 64671, 23)),
        Promise.resolve().then(t.t.bind(t, 23365, 23)),
        Promise.resolve().then(t.t.bind(t, 34537, 23)),
        Promise.resolve().then(t.bind(t, 94962)),
        Promise.resolve().then(t.t.bind(t, 53054, 23)),
        Promise.resolve().then(t.bind(t, 65809)),
        Promise.resolve().then(t.bind(t, 15964)),
        Promise.resolve().then(t.bind(t, 50876)),
        Promise.resolve().then(t.bind(t, 53946));
    },
    65809: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return h;
        },
      });
      var r = t(57437),
        s = t(2265);
      function i({ l10n: e, id: n, attrs: t, vars: r, elems: i, children: l }) {
        let a;
        if (Array.isArray(l)) {
          if (l.length > 1)
            throw Error(
              "Expected to receive a single React element to localize."
            );
          a = l[0];
        } else a = null != l ? l : null;
        if (!(0, s.isValidElement)(a)) {
          let t = "string" == typeof a ? a : void 0,
            i = e.getString(n, r, t);
          return (0, s.createElement)(s.Fragment, null, i);
        }
        return e.getElement(a, n, { attrs: t, vars: r, elems: i });
      }
      var l = t(84148),
        a = t(64491);
      function c(e) {
        return void 0 !== e.value;
      }
      function o(e) {
        return Array.from(
          (0, a.Bm)(e).childNodes.map(
            (e) => (
              c(e)
                ? (e.textContent = e.value)
                : (e.textContent = Array.from(e.childNodes)
                    .filter((e) => c(e))
                    .map((e) => e)
                    .map((e) => e.value)
                    .join(" ")),
              e
            )
          )
        );
      }
      var d = t(50594),
        u = t(95397);
      function h({ children: e, locale: n, ...t }) {
        let a = (0, s.useContext)(u.MY),
          c = (0, s.useMemo)(
            () => a || (n ? new d._((0, l.no)(n), o) : new d._((0, l.Uu)(), o)),
            [a, n]
          );
        return (0, r.jsx)(i, { l10n: c, ...t, children: e });
      }
    },
    15964: function (e, n, t) {
      "use strict";
      t.d(n, {
        Link: function () {
          return o;
        },
      });
      var r = t(57437),
        s = t(2265),
        i = t(45622),
        l = t(67485),
        a = t(70097),
        c = t(87138);
      let o = (0, s.forwardRef)((e, n) => {
        let {
          children: t,
          showAnchorIcon: s,
          anchorIcon: o = (0, r.jsx)(i.x, { className: l.A }),
          getLinkProps: d,
        } = (0, a.n)({ ...e, ref: n });
        return (0, r.jsx)(c.default, {
          ...d(),
          children: (0, r.jsxs)(r.Fragment, {
            children: [
              t,
              s && (0, r.jsxs)(r.Fragment, { children: ["\xa0 ", o] }),
            ],
          }),
        });
      });
      o.displayName = "CelesteLink";
    },
    50876: function (e, n, t) {
      "use strict";
      t.d(n, {
        Navbar: function () {
          return A;
        },
      });
      var r = t(57437),
        s = t(57805),
        i = t(53891),
        l = t(98319),
        a = t(86425);
      function c({ width: e, height: n }) {
        return (0, r.jsx)("img", {
          src: "owleaffs.png",
          width: e || "36",
          height: n || "36",
          alt: "Owleaf",
        });
      }
      var o = t(86736),
        d = t(949),
        u = t(4534),
        h = t(77999),
        x = t(48206),
        f = t(14983),
        m = t(2265),
        g = t(7611),
        j = t(8358),
        p = t(66648),
        b = {
          src: "/_next/static/media/world.9bbc74e8.svg",
          height: 512,
          width: 512,
          blurWidth: 0,
          blurHeight: 0,
        };
      let N = new Map();
      function w() {
        let [, e] = (0, j.fP)(["language"]),
          n = (0, m.useContext)(g.A),
          t = (t) => {
            n?.setLanguage(t), e("language", t);
          };
        return (0, r.jsxs)(o.F, {
          children: [
            (0, r.jsx)(d.S, {
              children: (0, r.jsxs)(x.A, {
                isIconOnly: !0,
                variant: "light",
                size: "sm",
                className: "w-full h-full",
                children: [
                  (n?.currentLanguage && N.get(n.currentLanguage)) ||
                    (0, r.jsx)(p.default, {
                      src: b,
                      className: "w-5 h-5 inline-block align-middle",
                      alt: "English",
                    }),
                  (0, r.jsx)(f.dbR, {}),
                ],
              }),
            }),
            (0, r.jsxs)(u.a, {
              "aria-label": "Static Actions",
              children: [
                (0, r.jsxs)(
                  h.W,
                  {
                    className: "font-bold",
                    onPress: () => t("en-US"),
                    children: [N.get("en-US"), "\xa0 English"],
                  },
                  "en-US"
                ),
                (0, r.jsxs)(
                  h.W,
                  {
                    className: "font-bold",
                    onPress: () => t("es-ES"),
                    children: [N.get("es-ES"), "\xa0 Spanish"],
                  },
                  "es-ES"
                ),
              ],
            }),
          ],
        });
      }
      N.set(
        "en-US",
        (0, r.jsx)(p.default, {
          src: {
            src: "/_next/static/media/english.9bae9bd6.svg",
            height: 642,
            width: 736,
            blurWidth: 0,
            blurHeight: 0,
          },
          className: "w-5 h-5 inline-block align-middle",
          alt: "English",
        })
      ),
        N.set(
          "es-ES",
          (0, r.jsx)(p.default, {
            src: {
              src: "/_next/static/media/spanish.f36bc40a.svg",
              height: 642,
              width: 736,
              blurWidth: 0,
              blurHeight: 0,
            },
            className: "w-5 h-5 inline-block align-middle",
            alt: "Spanish",
          })
        );
      var k = t(15964),
        v = t(23051),
        E = t(63872),
        L = t(26249),
        S = t(74744),
        y = t(73155),
        C = t(13177),
        P = t(65809),
        _ = t(16463);
      function A() {
        let [e, n] = (0, m.useState)(!1),
          t = (0, _.usePathname)(),
          o = [
            {
              id: "navbar-contact",
              link: "/contact",
              prefetch: !0,
              displayName: "Contact",
            },
          ];
        return (0, r.jsxs)(s.R, {
          maxWidth: "2xl",
          isMenuOpen: e,
          onMenuOpenChange: n,
          children: [
            (0, r.jsx)(i.U, {
              className: "hidden sm:flex gap-4",
              justify: "start",
              children: o.map((e) => {
                let n = e.link === t;
                return (0, r.jsx)(
                  l.k,
                  {
                    isActive: n,
                    children: (0, r.jsx)(P.default, {
                      id: e.id,
                      children: (0, r.jsx)(k.Link, {
                        prefetch: e.prefetch,
                        className: "w-full",
                        href: e.link,
                        showAnchorIcon: e.isExternal,
                        isExternal: e.isExternal,
                        color: n ? "secondary" : "foreground",
                        "aria-current": n,
                        children: e.displayName,
                      }),
                    }),
                  },
                  e.id
                );
              }),
            }),
            (0, r.jsxs)(i.U, {
              justify: "center",
              children: [
                (0, r.jsx)(S.L, {
                  "aria-label": e ? "Close menu" : "Open menu",
                  className: "sm:hidden",
                }),
                (0, r.jsx)(l.k, {
                  children: (0, r.jsx)(k.Link, {
                    href: "/",
                    className: "text-foreground",
                    children: (0, r.jsxs)(a.H, {
                      children: [
                        (0, r.jsx)(c, { width: 48, height: 48 }),
                        (0, r.jsx)("p", {
                          className:
                            "font-bold text-inherit uppercase text-2xl",
                          children: "Owleaf Studio",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            (0, r.jsxs)(i.U, {
              justify: "end",
              className: "hidden lg:flex gap-4",
              children: [
                (0, r.jsx)(l.k, {
                  className: "hidden xl:flex",
                  children: (0, r.jsx)(k.Link, {
                    href: "/client",
                    className: "text-foreground",
                    children: (0, r.jsx)(P.default, {
                      id: "navbar-client",
                      children: (0, r.jsx)(C.z, {
                        color: "success",
                        variant: "flat",
                        startContent: (0, r.jsx)(E.aBF, {}),
                        classNames: { base: ["px-3 pl-5"], content: "ml-1" },
                        children: "Download Owleaf Client",
                      }),
                    }),
                  }),
                }),
                (0, r.jsx)(l.k, {
                  children: (0, r.jsx)(L.e, {
                    content: "Instagram",
                    children: (0, r.jsx)(k.Link, {
                      color: "foreground",
                      href: "https://www.instagram.com/owleafstudio",
                      isExternal: !0,
                      "aria-label": "Instagram",
                      children: (0, r.jsx)(v.Nrw, {
                        className: "text-xl cursor-pointer",
                      }),
                    }),
                  }),
                }),
                (0, r.jsx)(l.k, {
                  children: (0, r.jsx)(L.e, {
                    content: "Discord",
                    children: (0, r.jsx)(k.Link, {
                      color: "foreground",
                      href: "https://discord.gg/owleafstudio",
                      isExternal: !0,
                      "aria-label": "Discord",
                      children: (0, r.jsx)(E.j2d, {
                        className: "text-xl cursor-pointer",
                      }),
                    }),
                  }),
                }),
                (0, r.jsx)(l.k, {
                  className: "hidden lg:flex mb-1",
                  children: (0, r.jsx)(w, {}),
                }),
              ],
            }),
            (0, r.jsxs)(y.$, {
              className: "bg-background/90",
              children: [
                (0, r.jsx)(l.k, {
                  className: "mb-5",
                  children: (0, r.jsx)(w, {}),
                }),
                o.map((e) =>
                  (0, r.jsx)(
                    l.k,
                    {
                      children: (0, r.jsx)(P.default, {
                        id: e.id,
                        children: (0, r.jsx)(k.Link, {
                          prefetch: e.prefetch,
                          color: "foreground",
                          className: "w-full",
                          href: e.link,
                          showAnchorIcon: e.isExternal,
                          isExternal: e.isExternal,
                          onPress: () => n(!1),
                          children: e.displayName,
                        }),
                      }),
                    },
                    e.id
                  )
                ),
                (0, r.jsxs)(l.k, {
                  className: "mt-5 flex gap-5",
                  children: [
                    (0, r.jsx)(k.Link, {
                      color: "foreground",
                      href: "https://www.instagram.com/owleafstudio_",
                      isExternal: !0,
                      children: (0, r.jsx)(v.Nrw, {
                        className: "text-xl cursor-pointer",
                      }),
                    }),
                    (0, r.jsx)(k.Link, {
                      color: "foreground",
                      href: "https://discord.gg/owleafstudio",
                      isExternal: !0,
                      children: (0, r.jsx)(E.j2d, {
                        className: "text-xl cursor-pointer",
                      }),
                    }),
                    (0, r.jsx)(k.Link, {
                      color: "foreground",
                      href: "",
                      isExternal: !0,
                      children: (0, r.jsx)(E.oKc, {
                        className: "cursor-pointer",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    54162: function (e, n, t) {
      "use strict";
      function r({ src: e, width: n, quality: t }) {
        e = e.replace(/^\/+/, "");
        let r = [`width=${n}`, `quality=${t || 75}`, "format=auto"];
        return `https://eufonia.studio/cdn-cgi/image/${r.join(",")}/${e}`;
      }
      t.r(n),
        t.d(n, {
          default: function () {
            return r;
          },
        });
    },
    53946: function (e, n, t) {
      "use strict";
      t.d(n, {
        Providers: function () {
          return c;
        },
      });
      var r = t(57437),
        s = t(79799),
        i = t(2265),
        l = t(7611),
        a = t(8358);
      function c({ children: e }) {
        let [n, t] = (0, i.useState)(),
          [c, o] = (0, i.useState)();
        return (0, r.jsx)(a.cY, {
          defaultSetOptions: { path: "/" },
          children: (0, r.jsx)(l.r, {
            language: n,
            setLanguage: t,
            currentLanguage: c,
            setCurrentLanguage: o,
            children: (0, r.jsx)(s.w, { children: e }),
          }),
        });
      }
    },
    53054: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        3598, 9141, 7240, 1821, 522, 3332, 6802, 8173, 2915, 231, 5392, 4491,
        8483, 6249, 4932, 9912, 5620, 1520, 2971, 3526, 1744,
      ],
      function () {
        return e((e.s = 22645));
      }
    ),
      (_N_E = e.O());
  },
]);
