(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4743],
  {
    66648: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return o.a;
        },
      });
      var n = r(55601),
        o = r.n(n);
    },
    55601: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return u;
          },
        });
      let n = r(99920),
        o = r(80497),
        i = r(38173),
        a = n._(r(54162));
      function u(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image/",
            loader: "custom",
            dangerouslyAllowSVG: !0,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let l = i.Image;
    },
    34492: function (e, t, r) {
      "use strict";
      /**
       * @license React
       * use-sync-external-store-shim.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ var n = r(2265),
        o =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        i = n.useState,
        a = n.useEffect,
        u = n.useLayoutEffect,
        l = n.useDebugValue;
      function s(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var r = t();
          return !o(e, r);
        } catch (e) {
          return !0;
        }
      }
      var d =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var r = t(),
                n = i({ inst: { value: r, getSnapshot: t } }),
                o = n[0].inst,
                d = n[1];
              return (
                u(
                  function () {
                    (o.value = r), (o.getSnapshot = t), s(o) && d({ inst: o });
                  },
                  [e, r, t],
                ),
                a(
                  function () {
                    return (
                      s(o) && d({ inst: o }),
                      e(function () {
                        s(o) && d({ inst: o });
                      })
                    );
                  },
                  [e],
                ),
                l(r),
                r
              );
            };
      t.useSyncExternalStore =
        void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : d;
    },
    10554: function (e, t, r) {
      "use strict";
      e.exports = r(34492);
    },
    68916: function () {},
    18624: function (e) {
      e.exports = { verified: "icons_verified__1eJnA" };
    },
    91819: function (e) {
      e.exports = { root: "quoted-tweet-body_root__szSfI" };
    },
    30236: function (e) {
      e.exports = {
        root: "quoted-tweet-container_root__92393",
        article: "quoted-tweet-container_article__FoJQN",
      };
    },
    22820: function (e) {
      e.exports = {
        header: "quoted-tweet-header_header___qrcQ",
        avatar: "quoted-tweet-header_avatar__lGzrW",
        avatarSquare: "quoted-tweet-header_avatarSquare__l_eYT",
        author: "quoted-tweet-header_author__k48VI",
        authorText: "quoted-tweet-header_authorText__FULly",
        username: "quoted-tweet-header_username__YLPXR",
      };
    },
    44046: function (e) {
      e.exports = {
        skeleton: "skeleton_skeleton__gUMqh",
        loading: "skeleton_loading__XZoZ6",
      };
    },
    99030: function (e) {
      e.exports = {
        actions: "tweet-actions_actions__UDw7H",
        like: "tweet-actions_like__H1xYv",
        reply: "tweet-actions_reply__S4rFc",
        copy: "tweet-actions_copy__Tbdg_",
        likeIconWrapper: "tweet-actions_likeIconWrapper__JQkhp",
        likeCount: "tweet-actions_likeCount__MyxBd",
        replyIconWrapper: "tweet-actions_replyIconWrapper__NVdGa",
        copyIconWrapper: "tweet-actions_copyIconWrapper__toM2y",
        likeIcon: "tweet-actions_likeIcon__fhDng",
        replyIcon: "tweet-actions_replyIcon__MI2tG",
        copyIcon: "tweet-actions_copyIcon__SEaWw",
        replyText: "tweet-actions_replyText__doQct",
        copyText: "tweet-actions_copyText__fEqBx",
      };
    },
    84476: function (e) {
      e.exports = { root: "tweet-body_root__ChzUj" };
    },
    72786: function (e) {
      e.exports = {
        root: "tweet-container_root__0rJLq",
        article: "tweet-container_article__0ERPK",
      };
    },
    40823: function (e) {
      e.exports = {
        header: "tweet-header_header__CXzdi",
        avatar: "tweet-header_avatar__0Wi9G",
        avatarOverflow: "tweet-header_avatarOverflow__E2gxj",
        avatarSquare: "tweet-header_avatarSquare__uIUBO",
        avatarShadow: "tweet-header_avatarShadow__CB9Zo",
        author: "tweet-header_author___jWoR",
        authorLink: "tweet-header_authorLink__qj5Sm",
        authorVerified: "tweet-header_authorVerified__OFYo2",
        authorLinkText: "tweet-header_authorLinkText__y6HdU",
        authorMeta: "tweet-header_authorMeta__gIC3U",
        authorFollow: "tweet-header_authorFollow__w_j4h",
        username: "tweet-header_username__UebZb",
        follow: "tweet-header_follow__Fi7bf",
        separator: "tweet-header_separator__d4pqe",
        brand: "tweet-header_brand__0FLQl",
        twitterIcon: "tweet-header_twitterIcon__m0Rzu",
      };
    },
    51042: function (e) {
      e.exports = { root: "tweet-in-reply-to_root__o784R" };
    },
    85393: function (e) {
      e.exports = { root: "tweet-info-created-at_root__KaxZi" };
    },
    32249: function (e) {
      e.exports = {
        info: "tweet-info_info__ll_kH",
        infoLink: "tweet-info_infoLink__xdgYO",
        infoIcon: "tweet-info_infoIcon__S8lzA",
      };
    },
    94877: function (e) {
      e.exports = { root: "tweet-link_root__4EzRS" };
    },
    2290: function (e) {
      e.exports = {
        anchor: "tweet-media-video_anchor__EMqq1",
        videoButton: "tweet-media-video_videoButton__P9iF2",
        videoButtonIcon: "tweet-media-video_videoButtonIcon__7gRo1",
        watchOnTwitter: "tweet-media-video_watchOnTwitter__2ucCU",
        viewReplies: "tweet-media-video_viewReplies__dp8G_",
      };
    },
    60713: function (e) {
      e.exports = {
        root: "tweet-media_root__k6gQ2",
        rounded: "tweet-media_rounded__LgwFx",
        mediaWrapper: "tweet-media_mediaWrapper__6rfqr",
        grid2Columns: "tweet-media_grid2Columns__tO2Ea",
        grid3: "tweet-media_grid3__XbH4s",
        grid2x2: "tweet-media_grid2x2__Wiunq",
        mediaContainer: "tweet-media_mediaContainer__rjXGp",
        mediaLink: "tweet-media_mediaLink__vFkZL",
        skeleton: "tweet-media_skeleton__qZmSS",
        image: "tweet-media_image__yoPJg",
      };
    },
    87406: function (e) {
      e.exports = { root: "tweet-not-found_root__KQedq" };
    },
    84507: function (e) {
      e.exports = {
        replies: "tweet-replies_replies__PUxl8",
        link: "tweet-replies_link__roxYQ",
        text: "tweet-replies_text__o0Naf",
      };
    },
    44717: function (e) {
      e.exports = { root: "tweet-skeleton_root__1sn43" };
    },
    52983: function (e) {
      e.exports = {
        verifiedOld: "verified-badge_verifiedOld__zcaba",
        verifiedBlue: "verified-badge_verifiedBlue__s3_Vu",
        verifiedGovernment: "verified-badge_verifiedGovernment__qRJxq",
      };
    },
    68937: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return s;
        },
      });
      var n = r(66265),
        o = r(55971),
        i = r(26242),
        a = r(65263),
        u = r(57437),
        l = (0, o.Gp)((e, t) => {
          var r;
          let { as: o, className: l, children: s, ...d } = e,
            c = (0, i.gy)(t),
            { slots: _, classNames: f } = (0, n.R)(),
            w = (0, a.W)(null == f ? void 0 : f.footer, l);
          return (0, u.jsx)(o || "div", {
            ref: c,
            className:
              null == (r = _.footer) ? void 0 : r.call(_, { class: w }),
            ...d,
            children: s,
          });
        });
      l.displayName = "NextUI.CardFooter";
      var s = l;
    },
    46166: function (e, t, r) {
      "use strict";
      let n;
      r.r(t),
        r.d(t, {
          useMounted: function () {
            return ei;
          },
          useTweet: function () {
            return eo;
          },
        });
      var o = r(2265),
        i = r(10554);
      let a = () => {},
        u = a(),
        l = Object,
        s = (e) => e === u,
        d = (e) => "function" == typeof e,
        c = (e, t) => ({ ...e, ...t }),
        _ = (e) => d(e.then),
        f = new WeakMap(),
        w = 0,
        p = (e) => {
          let t, r;
          let n = typeof e,
            o = e && e.constructor,
            i = o == Date;
          if (l(e) !== e || i || o == RegExp)
            t = i
              ? e.toJSON()
              : "symbol" == n
                ? e.toString()
                : "string" == n
                  ? JSON.stringify(e)
                  : "" + e;
          else {
            if ((t = f.get(e))) return t;
            if (((t = ++w + "~"), f.set(e, t), o == Array)) {
              for (r = 0, t = "@"; r < e.length; r++) t += p(e[r]) + ",";
              f.set(e, t);
            }
            if (o == l) {
              t = "#";
              let n = l.keys(e).sort();
              for (; !s((r = n.pop())); )
                s(e[r]) || (t += r + ":" + p(e[r]) + ",");
              f.set(e, t);
            }
          }
          return t;
        },
        h = new WeakMap(),
        v = {},
        m = {},
        g = "undefined",
        y = typeof window != g,
        x = typeof document != g,
        E = () => y && typeof window.requestAnimationFrame != g,
        b = (e, t) => {
          let r = h.get(e);
          return [
            () => (!s(t) && e.get(t)) || v,
            (n) => {
              if (!s(t)) {
                let o = e.get(t);
                t in m || (m[t] = o), r[5](t, c(o, n), o || v);
              }
            },
            r[6],
            () => (!s(t) && t in m ? m[t] : (!s(t) && e.get(t)) || v),
          ];
        },
        T = !0,
        [k, S] =
          y && window.addEventListener
            ? [
                window.addEventListener.bind(window),
                window.removeEventListener.bind(window),
              ]
            : [a, a],
        R = {
          initFocus: (e) => (
            x && document.addEventListener("visibilitychange", e),
            k("focus", e),
            () => {
              x && document.removeEventListener("visibilitychange", e),
                S("focus", e);
            }
          ),
          initReconnect: (e) => {
            let t = () => {
                (T = !0), e();
              },
              r = () => {
                T = !1;
              };
            return (
              k("online", t),
              k("offline", r),
              () => {
                S("online", t), S("offline", r);
              }
            );
          },
        },
        O = !o.useId,
        C = !y || "Deno" in window,
        I = (e) => (E() ? window.requestAnimationFrame(e) : setTimeout(e, 1)),
        L = C ? o.useEffect : o.useLayoutEffect,
        V = "undefined" != typeof navigator && navigator.connection,
        j =
          !C &&
          V &&
          (["slow-2g", "2g"].includes(V.effectiveType) || V.saveData),
        N = (e) => {
          if (d(e))
            try {
              e = e();
            } catch (t) {
              e = "";
            }
          let t = e;
          return [
            (e =
              "string" == typeof e
                ? e
                : (Array.isArray(e) ? e.length : e)
                  ? p(e)
                  : ""),
            t,
          ];
        },
        q = 0,
        F = () => ++q;
      var M = {
        ERROR_REVALIDATE_EVENT: 3,
        FOCUS_EVENT: 0,
        MUTATE_EVENT: 2,
        RECONNECT_EVENT: 1,
      };
      async function P(...e) {
        let [t, r, n, o] = e,
          i = c(
            { populateCache: !0, throwOnError: !0 },
            "boolean" == typeof o ? { revalidate: o } : o || {},
          ),
          a = i.populateCache,
          l = i.rollbackOnError,
          f = i.optimisticData,
          w = (e) => ("function" == typeof l ? l(e) : !1 !== l),
          p = i.throwOnError;
        if (d(r)) {
          let e = [];
          for (let n of t.keys())
            !/^\$(inf|sub)\$/.test(n) && r(t.get(n)._k) && e.push(n);
          return Promise.all(e.map(v));
        }
        return v(r);
        async function v(r) {
          let o;
          let [l] = N(r);
          if (!l) return;
          let [c, v] = b(t, l),
            [m, g, y, x] = h.get(t),
            E = () => {
              let e = m[l];
              return (d(i.revalidate)
                ? i.revalidate(c().data, r)
                : !1 !== i.revalidate) && (delete y[l], delete x[l], e && e[0])
                ? e[0](2).then(() => c().data)
                : c().data;
            };
          if (e.length < 3) return E();
          let T = n,
            k = F();
          g[l] = [k, 0];
          let S = !s(f),
            R = c(),
            O = R.data,
            C = R._c,
            I = s(C) ? O : C;
          if ((S && v({ data: (f = d(f) ? f(I, O) : f), _c: I }), d(T)))
            try {
              T = T(I);
            } catch (e) {
              o = e;
            }
          if (T && _(T)) {
            if (
              ((T = await T.catch((e) => {
                o = e;
              })),
              k !== g[l][0])
            ) {
              if (o) throw o;
              return T;
            }
            o && S && w(o) && ((a = !0), v({ data: I, _c: u }));
          }
          if (
            (a &&
              !o &&
              (d(a)
                ? v({ data: a(T, I), error: u, _c: u })
                : v({ data: T, error: u, _c: u })),
            (g[l][1] = F()),
            Promise.resolve(E()).then(() => {
              v({ _c: u });
            }),
            o)
          ) {
            if (p) throw o;
            return;
          }
          return T;
        }
      }
      let W = (e, t) => {
          for (let r in e) e[r][0] && e[r][0](t);
        },
        D = (e, t) => {
          if (!h.has(e)) {
            let r = c(R, t),
              n = {},
              o = P.bind(u, e),
              i = a,
              l = {},
              s = (e, t) => {
                let r = l[e] || [];
                return (l[e] = r), r.push(t), () => r.splice(r.indexOf(t), 1);
              },
              d = (t, r, n) => {
                e.set(t, r);
                let o = l[t];
                if (o) for (let e of o) e(r, n);
              },
              _ = () => {
                if (!h.has(e) && (h.set(e, [n, {}, {}, {}, o, d, s]), !C)) {
                  let t = r.initFocus(setTimeout.bind(u, W.bind(u, n, 0))),
                    o = r.initReconnect(setTimeout.bind(u, W.bind(u, n, 1)));
                  i = () => {
                    t && t(), o && o(), h.delete(e);
                  };
                }
              };
            return _(), [e, o, _, i];
          }
          return [e, h.get(e)[4]];
        },
        [A, U] = D(new Map()),
        z = c(
          {
            onLoadingSlow: a,
            onSuccess: a,
            onError: a,
            onErrorRetry: (e, t, r, n, o) => {
              let i = r.errorRetryCount,
                a = o.retryCount,
                u =
                  ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) *
                  r.errorRetryInterval;
              (s(i) || !(a > i)) && setTimeout(n, u, o);
            },
            onDiscarded: a,
            revalidateOnFocus: !0,
            revalidateOnReconnect: !0,
            revalidateIfStale: !0,
            shouldRetryOnError: !0,
            errorRetryInterval: j ? 1e4 : 5e3,
            focusThrottleInterval: 5e3,
            dedupingInterval: 2e3,
            loadingTimeout: j ? 5e3 : 3e3,
            compare: (e, t) => p(e) == p(t),
            isPaused: () => !1,
            cache: A,
            mutate: U,
            fallback: {},
          },
          {
            isOnline: () => T,
            isVisible: () => {
              let e = x && document.visibilityState;
              return s(e) || "hidden" !== e;
            },
          },
        ),
        B = (e, t) => {
          let r = c(e, t);
          if (t) {
            let { use: n, fallback: o } = e,
              { use: i, fallback: a } = t;
            n && i && (r.use = n.concat(i)), o && a && (r.fallback = c(o, a));
          }
          return r;
        },
        G = (0, o.createContext)({}),
        Q = y && window.__SWR_DEVTOOLS_USE__,
        J = Q ? window.__SWR_DEVTOOLS_USE__ : [],
        X = (e) =>
          d(e[1])
            ? [e[0], e[1], e[2] || {}]
            : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
        Z = () => c(z, (0, o.useContext)(G)),
        $ = J.concat((e) => (t, r, n) => {
          let o =
            r &&
            ((...e) => {
              let [n] = N(t),
                [, , , o] = h.get(A);
              if (n.startsWith("$inf$")) return r(...e);
              let i = o[n];
              return s(i) ? r(...e) : (delete o[n], i);
            });
          return e(t, o, n);
        }),
        Y = (e, t, r) => {
          let n = t[e] || (t[e] = []);
          return (
            n.push(r),
            () => {
              let e = n.indexOf(r);
              e >= 0 && ((n[e] = n[n.length - 1]), n.pop());
            }
          );
        };
      Q && (window.__SWR_DEVTOOLS_REACT__ = o);
      let H =
          o.use ||
          ((e) => {
            if ("pending" === e.status) throw e;
            if ("fulfilled" === e.status) return e.value;
            if ("rejected" === e.status) throw e.reason;
            throw (
              ((e.status = "pending"),
              e.then(
                (t) => {
                  (e.status = "fulfilled"), (e.value = t);
                },
                (t) => {
                  (e.status = "rejected"), (e.reason = t);
                },
              ),
              e)
            );
          }),
        K = { dedupe: !0 };
      l.defineProperty(
        (e) => {
          let { value: t } = e,
            r = (0, o.useContext)(G),
            n = d(t),
            i = (0, o.useMemo)(() => (n ? t(r) : t), [n, r, t]),
            a = (0, o.useMemo)(() => (n ? i : B(r, i)), [n, r, i]),
            l = i && i.provider,
            s = (0, o.useRef)(u);
          l && !s.current && (s.current = D(l(a.cache || A), i));
          let _ = s.current;
          return (
            _ && ((a.cache = _[0]), (a.mutate = _[1])),
            L(() => {
              if (_) return _[2] && _[2](), _[3];
            }, []),
            (0, o.createElement)(G.Provider, c(e, { value: a }))
          );
        },
        "defaultValue",
        { value: z },
      );
      let ee =
        ((n = (e, t, r) => {
          let {
              cache: n,
              compare: a,
              suspense: l,
              fallbackData: _,
              revalidateOnMount: f,
              revalidateIfStale: w,
              refreshInterval: p,
              refreshWhenHidden: v,
              refreshWhenOffline: m,
              keepPreviousData: g,
            } = r,
            [y, x, E, T] = h.get(n),
            [k, S] = N(e),
            R = (0, o.useRef)(!1),
            V = (0, o.useRef)(!1),
            j = (0, o.useRef)(k),
            q = (0, o.useRef)(t),
            W = (0, o.useRef)(r),
            D = () => W.current,
            A = () => D().isVisible() && D().isOnline(),
            [U, z, B, G] = b(n, k),
            Q = (0, o.useRef)({}).current,
            J = s(_) ? r.fallback[k] : _,
            X = (e, t) => {
              for (let r in Q)
                if ("data" === r) {
                  if (!a(e[r], t[r]) && (!s(e[r]) || !a(ea, t[r]))) return !1;
                } else if (t[r] !== e[r]) return !1;
              return !0;
            },
            Z = (0, o.useMemo)(() => {
              let e =
                  !!k &&
                  !!t &&
                  (s(f) ? !D().isPaused() && !l && (!!s(w) || w) : f),
                r = (t) => {
                  let r = c(t);
                  return (delete r._k, e)
                    ? { isValidating: !0, isLoading: !0, ...r }
                    : r;
                },
                n = U(),
                o = G(),
                i = r(n),
                a = n === o ? i : r(o),
                u = i;
              return [
                () => {
                  let e = r(U());
                  return X(e, u)
                    ? ((u.data = e.data),
                      (u.isLoading = e.isLoading),
                      (u.isValidating = e.isValidating),
                      (u.error = e.error),
                      u)
                    : ((u = e), e);
                },
                () => a,
              ];
            }, [n, k]),
            $ = (0, i.useSyncExternalStore)(
              (0, o.useCallback)(
                (e) =>
                  B(k, (t, r) => {
                    X(r, t) || e();
                  }),
                [n, k],
              ),
              Z[0],
              Z[1],
            ),
            ee = !R.current,
            et = y[k] && y[k].length > 0,
            er = $.data,
            en = s(er) ? J : er,
            eo = $.error,
            ei = (0, o.useRef)(en),
            ea = g ? (s(er) ? ei.current : er) : en,
            eu =
              (!et || !!s(eo)) &&
              (ee && !s(f)
                ? f
                : !D().isPaused() && (l ? !s(en) && w : s(en) || w)),
            el = !!(k && t && ee && eu),
            es = s($.isValidating) ? el : $.isValidating,
            ed = s($.isLoading) ? el : $.isLoading,
            ec = (0, o.useCallback)(
              async (e) => {
                let t, n;
                let o = q.current;
                if (!k || !o || V.current || D().isPaused()) return !1;
                let i = !0,
                  l = e || {},
                  c = !E[k] || !l.dedupe,
                  _ = () =>
                    O
                      ? !V.current && k === j.current && R.current
                      : k === j.current,
                  f = { isValidating: !1, isLoading: !1 },
                  w = () => {
                    z(f);
                  },
                  p = () => {
                    let e = E[k];
                    e && e[1] === n && delete E[k];
                  },
                  h = { isValidating: !0 };
                s(U().data) && (h.isLoading = !0);
                try {
                  if (
                    (c &&
                      (z(h),
                      r.loadingTimeout &&
                        s(U().data) &&
                        setTimeout(() => {
                          i && _() && D().onLoadingSlow(k, r);
                        }, r.loadingTimeout),
                      (E[k] = [o(S), F()])),
                    ([t, n] = E[k]),
                    (t = await t),
                    c && setTimeout(p, r.dedupingInterval),
                    !E[k] || E[k][1] !== n)
                  )
                    return c && _() && D().onDiscarded(k), !1;
                  f.error = u;
                  let e = x[k];
                  if (!s(e) && (n <= e[0] || n <= e[1] || 0 === e[1]))
                    return w(), c && _() && D().onDiscarded(k), !1;
                  let l = U().data;
                  (f.data = a(l, t) ? l : t),
                    c && _() && D().onSuccess(t, k, r);
                } catch (r) {
                  p();
                  let e = D(),
                    { shouldRetryOnError: t } = e;
                  !e.isPaused() &&
                    ((f.error = r),
                    c &&
                      _() &&
                      (e.onError(r, k, e),
                      (!0 === t || (d(t) && t(r))) &&
                        (!D().revalidateOnFocus ||
                          !D().revalidateOnReconnect ||
                          A()) &&
                        e.onErrorRetry(
                          r,
                          k,
                          e,
                          (e) => {
                            let t = y[k];
                            t && t[0] && t[0](M.ERROR_REVALIDATE_EVENT, e);
                          },
                          { retryCount: (l.retryCount || 0) + 1, dedupe: !0 },
                        )));
                }
                return (i = !1), w(), !0;
              },
              [k, n],
            ),
            e_ = (0, o.useCallback)((...e) => P(n, j.current, ...e), []);
          if (
            (L(() => {
              (q.current = t), (W.current = r), s(er) || (ei.current = er);
            }),
            L(() => {
              if (!k) return;
              let e = ec.bind(u, K),
                t = 0,
                r = Y(k, y, (r, n = {}) => {
                  if (r == M.FOCUS_EVENT) {
                    let r = Date.now();
                    D().revalidateOnFocus &&
                      r > t &&
                      A() &&
                      ((t = r + D().focusThrottleInterval), e());
                  } else if (r == M.RECONNECT_EVENT)
                    D().revalidateOnReconnect && A() && e();
                  else if (r == M.MUTATE_EVENT) return ec();
                  else if (r == M.ERROR_REVALIDATE_EVENT) return ec(n);
                });
              return (
                (V.current = !1),
                (j.current = k),
                (R.current = !0),
                z({ _k: S }),
                eu && (s(en) || C ? e() : I(e)),
                () => {
                  (V.current = !0), r();
                }
              );
            }, [k]),
            L(() => {
              let e;
              function t() {
                let t = d(p) ? p(U().data) : p;
                t && -1 !== e && (e = setTimeout(r, t));
              }
              function r() {
                !U().error && (v || D().isVisible()) && (m || D().isOnline())
                  ? ec(K).then(t)
                  : t();
              }
              return (
                t(),
                () => {
                  e && (clearTimeout(e), (e = -1));
                }
              );
            }, [p, v, m, k]),
            (0, o.useDebugValue)(ea),
            l && s(en) && k)
          ) {
            if (!O && C)
              throw Error(
                "Fallback data is required when using suspense in SSR.",
              );
            (q.current = t), (W.current = r), (V.current = !1);
            let e = T[k];
            if ((s(e) || H(e_(e)), s(eo))) {
              let e = ec(K);
              s(ea) || ((e.status = "fulfilled"), (e.value = !0)), H(e);
            } else throw eo;
          }
          return {
            mutate: e_,
            get data() {
              return (Q.data = !0), ea;
            },
            get error() {
              return (Q.error = !0), eo;
            },
            get isValidating() {
              return (Q.isValidating = !0), es;
            },
            get isLoading() {
              return (Q.isLoading = !0), ed;
            },
          };
        }),
        function (...e) {
          let t = Z(),
            [r, o, i] = X(e),
            a = B(t, i),
            u = n,
            { use: l } = a,
            s = (l || []).concat($);
          for (let e = s.length; e--; ) u = s[e](u);
          return u(r, o || a.fetcher || null, a);
        });
      class et extends Error {
        constructor({ message: e, status: t, data: r }) {
          super(e),
            (this.name = "TwitterApiError"),
            (this.status = t),
            (this.data = r);
        }
      }
      let er = ee.default || ee;
      async function en([e, t]) {
        let r = await fetch(e, t),
          n = await r.json();
        if (r.ok) return n.data || null;
        throw new et({
          message: `Failed to fetch tweet at "${e}" with "${r.status}".`,
          data: n,
          status: r.status,
        });
      }
      let eo = (e, t, r) => {
          let {
            isLoading: n,
            data: o,
            error: i,
          } = er(
            () =>
              t || e
                ? [
                    t || (e && `https://react-tweet.vercel.app/api/tweet/${e}`),
                    r,
                  ]
                : null,
            en,
            {
              revalidateIfStale: !1,
              revalidateOnFocus: !1,
              shouldRetryOnError: !1,
            },
          );
          return {
            isLoading: !!(n || (void 0 === o && !i)),
            data: o,
            error: i,
          };
        },
        ei = () => {
          let [e, t] = (0, o.useState)(!1);
          return (0, o.useEffect)(() => t(!0), []), e;
        };
    },
    10060: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          QuotedTweetContainer: function () {
            return i;
          },
        });
      var n = r(57437),
        o = r(30236);
      let i = ({ tweet: e, children: t }) =>
        (0, n.jsx)("div", {
          className: o.root,
          onClick: (t) => {
            t.preventDefault(), window.open(e.url, "_blank");
          },
          children: (0, n.jsx)("article", {
            className: o.article,
            children: t,
          }),
        });
    },
    26611: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          TweetActionsCopy: function () {
            return a;
          },
        });
      var n = r(57437),
        o = r(2265),
        i = r(99030);
      let a = ({ tweet: e }) => {
        let [t, r] = (0, o.useState)(!1),
          [a, u] = (0, o.useState)(!1);
        return (
          (0, o.useEffect)(() => {
            if (t) {
              let e = setTimeout(() => {
                r(!1), u(!0);
              }, 6e3);
              return () => clearTimeout(e);
            }
          }, [t]),
          (0, n.jsxs)("button", {
            type: "button",
            className: i.copy,
            "aria-label": "Copy link",
            onClick: () => {
              navigator.clipboard.writeText(e.url), r(!0);
            },
            children: [
              (0, n.jsx)("div", {
                className: i.copyIconWrapper,
                children: t
                  ? (0, n.jsx)("svg", {
                      viewBox: "0 0 24 24",
                      className: i.copyIcon,
                      "aria-hidden": "true",
                      children: (0, n.jsx)("g", {
                        children: (0, n.jsx)("path", {
                          d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z",
                        }),
                      }),
                    })
                  : (0, n.jsx)("svg", {
                      viewBox: "0 0 24 24",
                      className: i.copyIcon,
                      "aria-hidden": "true",
                      children: (0, n.jsx)("g", {
                        children: (0, n.jsx)("path", {
                          d: "M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z",
                        }),
                      }),
                    }),
              }),
              (0, n.jsx)("span", {
                className: i.copyText,
                children: t
                  ? "Copied!"
                  : a
                    ? "Copy link to Tweet"
                    : "Copy link",
              }),
            ],
          })
        );
      };
    },
    81293: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          TweetMediaVideo: function () {
            return c;
          },
        });
      var n = r(57437),
        o = r(2265),
        i = r(44839);
      let a = (e, t) => {
          let r = new URL(e.media_url_https),
            n = r.pathname.split(".").pop();
          return n
            ? ((r.pathname = r.pathname.replace(`.${n}`, "")),
              r.searchParams.set("format", n),
              r.searchParams.set("name", t),
              r.toString())
            : e.media_url_https;
        },
        u = (e) => {
          let { variants: t } = e.video_info;
          return t
            .filter((e) => "video/mp4" === e.content_type)
            .sort((e, t) => {
              var r, n;
              return (
                (null != (r = t.bitrate) ? r : 0) -
                (null != (n = e.bitrate) ? n : 0)
              );
            });
        },
        l = (e) => {
          let t = u(e);
          return t.length > 1 ? t[1] : t[0];
        };
      var s = r(60713),
        d = r(2290);
      let c = ({ tweet: e, media: t }) => {
        let [r, u] = (0, o.useState)(!0),
          [c, _] = (0, o.useState)(!1),
          [f, w] = (0, o.useState)(!1),
          p = l(t),
          h = 0;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("video", {
              className: s.image,
              poster: a(t, "small"),
              controls: !r,
              muted: !0,
              preload: "none",
              tabIndex: r ? -1 : 0,
              onPlay: () => {
                h && window.clearTimeout(h), c || _(!0), f && w(!1);
              },
              onPause: () => {
                h && window.clearTimeout(h),
                  (h = window.setTimeout(() => {
                    c && _(!1), (h = 0);
                  }, 100));
              },
              onEnded: () => {
                w(!0);
              },
              children: (0, n.jsx)("source", {
                src: p.url,
                type: p.content_type,
              }),
            }),
            r &&
              (0, n.jsx)("button", {
                type: "button",
                className: d.videoButton,
                "aria-label": "View video on X",
                onClick: (e) => {
                  let t = e.currentTarget.previousSibling;
                  e.preventDefault(), u(!1), _(!0), t.play(), t.focus();
                },
                children: (0, n.jsx)("svg", {
                  viewBox: "0 0 24 24",
                  className: d.videoButtonIcon,
                  "aria-hidden": "true",
                  children: (0, n.jsx)("g", {
                    children: (0, n.jsx)("path", { d: "M21 12L4 2v20l17-10z" }),
                  }),
                }),
              }),
            !c &&
              !f &&
              (0, n.jsx)("div", {
                className: d.watchOnTwitter,
                children: (0, n.jsx)("a", {
                  href: e.url,
                  className: d.anchor,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  children: r ? "Watch on X" : "Continue watching on X",
                }),
              }),
            f &&
              (0, n.jsx)("a", {
                href: e.url,
                className: (0, i.Z)(d.anchor, d.viewReplies),
                target: "_blank",
                rel: "noopener noreferrer",
                children: "View replies",
              }),
          ],
        });
      };
    },
  },
]);
