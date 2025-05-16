"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1482],
  {
    39684: function (t, e, i) {
      i.d(e, {
        $P: function () {
          return K;
        },
        Be: function () {
          return aC;
        },
        Cv: function () {
          return ae;
        },
        DR: function () {
          return eT;
        },
        Er: function () {
          return s9;
        },
        Ew: function () {
          return V;
        },
        F$: function () {
          return aT;
        },
        FA: function () {
          return ec;
        },
        Fl: function () {
          return s4;
        },
        G6: function () {
          return ev;
        },
        G9: function () {
          return g;
        },
        HV: function () {
          return tI;
        },
        Id: function () {
          return aA;
        },
        Je: function () {
          return s8;
        },
        LD: function () {
          return aw;
        },
        LK: function () {
          return el;
        },
        QF: function () {
          return at;
        },
        Rr: function () {
          return tQ;
        },
        Rt: function () {
          return aa;
        },
        S3: function () {
          return s6;
        },
        TO: function () {
          return ah;
        },
        UP: function () {
          return s5;
        },
        Uf: function () {
          return aL;
        },
        V6: function () {
          return eN;
        },
        Vi: function () {
          return ag;
        },
        W6: function () {
          return c;
        },
        WU: function () {
          return af;
        },
        WV: function () {
          return aF;
        },
        WX: function () {
          return tG;
        },
        Xm: function () {
          return av;
        },
        ZJ: function () {
          return ax;
        },
        Zf: function () {
          return ak;
        },
        _1: function () {
          return s2;
        },
        _S: function () {
          return th;
        },
        _e: function () {
          return ap;
        },
        a2: function () {
          return tU;
        },
        al: function () {
          return aE;
        },
        bj: function () {
          return ac;
        },
        bx: function () {
          return s3;
        },
        cA: function () {
          return ad;
        },
        cj: function () {
          return p;
        },
        dc: function () {
          return ab;
        },
        e0: function () {
          return aM;
        },
        eV: function () {
          return ay;
        },
        fS: function () {
          return ep;
        },
        fZ: function () {
          return ao;
        },
        gU: function () {
          return z;
        },
        gV: function () {
          return aD;
        },
        gq: function () {
          return an;
        },
        hA: function () {
          return aP;
        },
        ib: function () {
          return a$;
        },
        il: function () {
          return s7;
        },
        j9: function () {
          return aH;
        },
        jh: function () {
          return aS;
        },
        kA: function () {
          return Y;
        },
        kH: function () {
          return tl;
        },
        lk: function () {
          return J;
        },
        mo: function () {
          return tz;
        },
        mr: function () {
          return eL;
        },
        n8: function () {
          return tt;
        },
        nA: function () {
          return ts;
        },
        nQ: function () {
          return G;
        },
        nl: function () {
          return ti;
        },
        ns: function () {
          return ar;
        },
        oL: function () {
          return tf;
        },
        qG: function () {
          return al;
        },
        r4: function () {
          return aN;
        },
        tF: function () {
          return T;
        },
        tn: function () {
          return S;
        },
        u9: function () {
          return am;
        },
        v$: function () {
          return au;
        },
        ve: function () {
          return H;
        },
        xu: function () {
          return aG;
        },
        zY: function () {
          return as;
        },
        zh: function () {
          return ai;
        },
      });
      var s,
        a,
        n,
        r,
        h = i(2265),
        l = i(17015),
        o = i(85621);
      function d(t) {
        return (
          !(0, l.isString)(t) &&
          "width" in t &&
          "height" in t &&
          (0, l.isNumber)(t.width) &&
          (0, l.isNumber)(t.height)
        );
      }
      let c = "undefined" == typeof document,
        u = c ? "" : navigator?.userAgent.toLowerCase() || "",
        p = !c && /iphone|ipad|ipod|ios|crios|fxios/i.test(u),
        f = !c && /(iphone|ipod)/gi.test(navigator?.platform || ""),
        g = !c && !!window.chrome,
        b = !c && (!!window.safari || p);
      function m() {
        return (
          !c &&
          !(0, l.isUndefined)(window.screen.orientation) &&
          !(0, l.isUndefined)(window.screen.orientation.lock) &&
          (0, l.isFunction)(screen.orientation.unlock)
        );
      }
      function y(t, e) {
        return (
          !c &&
          (t || (t = document.createElement("audio")),
          t.canPlayType(e).length > 0)
        );
      }
      function v(t, e) {
        return (
          !c &&
          (t || (t = document.createElement("video")),
          t.canPlayType(e).length > 0)
        );
      }
      function k(t) {
        return (
          !c &&
          (t || (t = document.createElement("video")),
          t.canPlayType("application/vnd.apple.mpegurl").length > 0)
        );
      }
      function $(t) {
        return (
          !c &&
          !!document.pictureInPictureEnabled &&
          !t?.disablePictureInPicture
        );
      }
      function w(t) {
        return (
          !c &&
          (0, l.isFunction)(t?.webkitSupportsPresentationMode) &&
          (0, l.isFunction)(t?.webkitSetPresentationMode)
        );
      }
      async function x() {
        let t = document.createElement("video");
        return (t.volume = 0.5), await (0, l.waitTimeout)(0), 0.5 === t.volume;
      }
      function T() {
        if (c) return !1;
        let t = c
          ? void 0
          : (window?.ManagedMediaSource ??
            window?.MediaSource ??
            window?.WebKitMediaSource);
        if ((0, l.isUndefined)(t)) return !1;
        let e =
            t &&
            (0, l.isFunction)(t.isTypeSupported) &&
            t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
          i = c ? void 0 : (window?.SourceBuffer ?? window?.WebKitSourceBuffer),
          s =
            (0, l.isUndefined)(i) ||
            (!(0, l.isUndefined)(i.prototype) &&
              (0, l.isFunction)(i.prototype.appendBuffer) &&
              (0, l.isFunction)(i.prototype.remove));
        return !!e && !!s;
      }
      class S {
        get length() {
          return this.ua.length;
        }
        constructor(t, e) {
          (0, l.isArray)(t)
            ? (this.ua = t)
            : (0, l.isUndefined)(t) || (0, l.isUndefined)(e)
              ? (this.ua = [])
              : (this.ua = [[t, e]]);
        }
        start(t) {
          return this.ua[t][0] ?? 1 / 0;
        }
        end(t) {
          return this.ua[t][1] ?? 1 / 0;
        }
      }
      function P(t) {
        if (!t.length) return null;
        let e = t.start(0);
        for (let i = 1; i < t.length; i++) {
          let s = t.start(i);
          s < e && (e = s);
        }
        return e;
      }
      function E(t) {
        if (!t.length) return null;
        let e = t.end(0);
        for (let i = 1; i < t.length; i++) {
          let s = t.end(i);
          s > e && (e = s);
        }
        return e;
      }
      let A =
          /\.(m4a|m4b|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx|flac)($|\?)/i,
        C = new Set([
          "audio/mpeg",
          "audio/ogg",
          "audio/3gp",
          "audio/mp3",
          "audio/webm",
          "audio/flac",
        ]),
        M = /\.(mp4|og[gv]|webm|mov|m4v)(#t=[,\d+]+)?($|\?)/i,
        D = new Set([
          "video/mp4",
          "video/webm",
          "video/3gp",
          "video/ogg",
          "video/avi",
          "video/mpeg",
        ]),
        q = /\.(m3u8)($|\?)/i,
        O = /\.(mpd)($|\?)/i,
        j = new Set([
          "application/vnd.apple.mpegurl",
          "audio/mpegurl",
          "audio/x-mpegurl",
          "application/x-mpegurl",
          "video/x-mpegurl",
          "video/mpegurl",
          "application/mpegurl",
        ]),
        I = new Set(["application/dash+xml"]);
      function F({ src: t, type: e }) {
        return (0, l.isString)(t)
          ? A.test(t) ||
              C.has(e) ||
              (t.startsWith("blob:") && "audio/object" === e)
          : "audio/object" === e;
      }
      function L(t) {
        return (0, l.isString)(t.src)
          ? M.test(t.src) ||
              D.has(t.type) ||
              (t.src.startsWith("blob:") && "video/object" === t.type) ||
              (N(t) && (c || k()))
          : "video/object" === t.type;
      }
      function N({ src: t, type: e }) {
        return ((0, l.isString)(t) && q.test(t)) || j.has(e);
      }
      function R({ src: t, type: e }) {
        return ((0, l.isString)(t) && O.test(t)) || I.has(e);
      }
      function V(t) {
        return (0, l.isString)(t.src) && (F(t) || L(t) || N(t));
      }
      function G(t, e) {
        let i = new URLSearchParams();
        for (let t of Object.keys(e)) i.set(t, e[t] + "");
        return t + "?" + i.toString();
      }
      function K(t, e = "preconnect") {
        if (c) return !1;
        let i = document.querySelector(`link[href="${t}"]`);
        if (!(0, l.isNull)(i)) return !0;
        let s = document.createElement("link");
        return (
          (s.rel = e),
          (s.href = t),
          (s.crossOrigin = "true"),
          document.head.append(s),
          !0
        );
      }
      let U = {};
      function H(t) {
        if (U[t]) return U[t].promise;
        let e = (0, l.deferredPromise)(),
          i = document.querySelector(`script[src="${t}"]`);
        if (!(0, l.isNull)(i)) return e.resolve(), e.promise;
        let s = document.createElement("script");
        return (
          (s.src = t),
          (s.onload = () => {
            e.resolve(), delete U[t];
          }),
          (s.onerror = () => {
            e.reject(), delete U[t];
          }),
          setTimeout(() => document.head.append(s), 0),
          e.promise
        );
      }
      function B(t) {
        return "use-credentials" === t
          ? "include"
          : (0, l.isString)(t)
            ? "same-origin"
            : void 0;
      }
      function z({ title: t, src: e, download: i }) {
        let s =
          (0, l.isBoolean)(i) || "" === i
            ? e.src
            : (0, l.isString)(i)
              ? i
              : i?.url;
        return !(function ({ url: t, src: e, download: i }) {
          return (0, l.isString)(t) && ((i && !0 !== i) || F(e) || L(e));
        })({ url: s, src: e, download: i })
          ? null
          : {
              url: s,
              name:
                (!(0, l.isBoolean)(i) && !(0, l.isString)(i) && i?.filename) ||
                t.toLowerCase() ||
                "media",
            };
      }
      let Q = Symbol(0),
        W = Symbol(0),
        _ = Symbol(0),
        X = Symbol(0),
        Y = {
          Eb: Q,
          na: W,
          Fb: _,
          _: X,
          ib: Symbol(0),
          $: Symbol(0),
          Nf: Symbol(0),
        };
      function Z(t, e) {
        return e >= t.startTime && e < t.endTime;
      }
      function J(t, e, i) {
        let s = null,
          a = (0, l.getScope)();
        function n() {
          let n = (0, l.isString)(e) ? [e] : e,
            r = t
              .toArray()
              .find((t) => n.includes(t.kind) && "showing" === t.mode);
          if (r !== s) {
            if (!r) {
              i(null), (s = null);
              return;
            }
            2 == r.readyState
              ? i(r)
              : (i(null),
                (0, l.scoped)(() => {
                  let t = (0, l.listenEvent)(
                    r,
                    "load",
                    () => {
                      i(r), t();
                    },
                    { once: !0 },
                  );
                }, a)),
              (s = r);
          }
        }
        return n(), (0, l.listenEvent)(t, "mode-change", n);
      }
      class tt extends l.EventsTarget {
        constructor(t) {
          for (let e of (super(),
          (this.id = ""),
          (this.label = ""),
          (this.language = ""),
          (this.default = !1),
          (this._ = !1),
          (this.va = 0),
          (this.V = "disabled"),
          (this.Of = {}),
          (this.ad = []),
          (this.C = []),
          (this.Gb = []),
          (this[n] = 0),
          (this[a] = null),
          (this[s] = null),
          Object.keys(t)))
            this[e] = t[e];
          this.type || (this.type = "vtt"),
            !c && t.content ? this.$h(t) : t.src || (this[Y.na] = 2);
        }
        static createId(t) {
          return `vds-${t.type}-${t.kind}-${t.src ?? t.label ?? "?"}`;
        }
        get metadata() {
          return this.Of;
        }
        get regions() {
          return this.ad;
        }
        get cues() {
          return this.C;
        }
        get activeCues() {
          return this.Gb;
        }
        get readyState() {
          return this[Y.na];
        }
        get mode() {
          return this.V;
        }
        set mode(t) {
          this.setMode(t);
        }
        addCue(t, e) {
          let i = 0,
            s = this.C.length;
          for (i = 0; i < s && !(t.endTime <= this.C[i].startTime); i++);
          i === s ? this.C.push(t) : this.C.splice(i, 0, t),
            t instanceof TextTrackCue || this[Y.$]?.track.addCue(t),
            this.dispatchEvent(
              new l.DOMEvent("add-cue", { detail: t, trigger: e }),
            ),
            Z(t, this.va) && this[Y.Fb](this.va, e);
        }
        removeCue(t, e) {
          let i = this.C.indexOf(t);
          if (i >= 0) {
            let s = this.Gb.includes(t);
            this.C.splice(i, 1),
              this[Y.$]?.track.removeCue(t),
              this.dispatchEvent(
                new l.DOMEvent("remove-cue", { detail: t, trigger: e }),
              ),
              s && this[Y.Fb](this.va, e);
          }
        }
        setMode(t, e) {
          this.V !== t &&
            ((this.V = t),
            "disabled" === t
              ? ((this.Gb = []), this.Pf())
              : 2 === this.readyState
                ? this[Y.Fb](this.va, e)
                : this.Qf(),
            this.dispatchEvent(
              new l.DOMEvent("mode-change", { detail: this, trigger: e }),
            ),
            this[Y.ib]?.());
        }
        [((n = Y.na), (a = Y.ib), (s = Y.$), Y.Fb)](t, e) {
          if (((this.va = t), "disabled" === this.mode || !this.C.length))
            return;
          let i = [];
          for (let e = 0, s = this.C.length; e < s; e++) {
            let s = this.C[e];
            Z(s, t) && i.push(s);
          }
          let s = i.length !== this.Gb.length;
          if (!s) {
            for (let t = 0; t < i.length; t++)
              if (!this.Gb.includes(i[t])) {
                s = !0;
                break;
              }
          }
          (this.Gb = i), s && this.Pf(e);
        }
        [Y._]() {
          (this._ = !0), "disabled" !== this.V && this.Qf();
        }
        $h(t) {
          i.e(7922)
            .then(i.bind(i, 17922))
            .then(({ parseText: e, VTTCue: i, VTTRegion: s }) => {
              (0, l.isString)(t.content) && "json" !== t.type
                ? e(t.content, { type: t.type }).then(
                    ({ cues: t, regions: e }) => {
                      (this.C = t), (this.ad = e), this.Ha();
                    },
                  )
                : (this.Rf(t.content, i, s),
                  3 !== this.readyState && this.Ha());
            });
        }
        async Qf() {
          if (this._ && !(this[Y.na] > 0)) {
            if (
              ((this[Y.na] = 1),
              this.dispatchEvent(new l.DOMEvent("load-start")),
              !this.src)
            ) {
              this.Ha();
              return;
            }
            try {
              let {
                  parseResponse: t,
                  VTTCue: e,
                  VTTRegion: s,
                } = await i.e(7922).then(i.bind(i, 17922)),
                a = this[Y.Eb]?.(),
                n = fetch(this.src, {
                  headers:
                    "json" === this.type
                      ? { "Content-Type": "application/json" }
                      : void 0,
                  credentials: B(a),
                });
              if ("json" === this.type) this.Rf(await (await n).text(), e, s);
              else {
                let {
                  errors: e,
                  metadata: i,
                  regions: s,
                  cues: a,
                } = await t(n, { type: this.type, encoding: this.encoding });
                if (e[0]?.code === 0) throw e[0];
                (this.Of = i), (this.ad = s), (this.C = a);
              }
              this.Ha();
            } catch (t) {
              this.Sf(t);
            }
          }
        }
        Ha() {
          if (((this[Y.na] = 2), !this.src || "vtt" !== this.type)) {
            let t = this[Y.$];
            if (t && !t.managed) for (let e of this.C) t.track.addCue(e);
          }
          let t = new l.DOMEvent("load");
          this[Y.Fb](this.va, t), this.dispatchEvent(t);
        }
        Sf(t) {
          (this[Y.na] = 3),
            this.dispatchEvent(new l.DOMEvent("error", { detail: t }));
        }
        Rf(t, e, i) {
          try {
            let { regions: s, cues: a } = (function (t, e, i) {
              let s = (0, l.isString)(t) ? JSON.parse(t) : t,
                a = [],
                n = [];
              return (
                s.regions &&
                  i &&
                  (a = s.regions.map((t) => Object.assign(new i(), t))),
                (s.cues || (0, l.isArray)(s)) &&
                  (n = ((0, l.isArray)(s) ? s : s.cues)
                    .filter(
                      (t) =>
                        (0, l.isNumber)(t.startTime) &&
                        (0, l.isNumber)(t.endTime),
                    )
                    .map((t) => Object.assign(new e(0, 0, ""), t))),
                { regions: a, cues: n }
              );
            })(t, e, i);
            (this.ad = s), (this.C = a);
          } catch (t) {
            this.Sf(t);
          }
        }
        Pf(t) {
          this.dispatchEvent(new l.DOMEvent("cue-change", { trigger: t }));
        }
      }
      let te = /captions|subtitles/;
      function ti(t) {
        return te.test(t.kind);
      }
      let ts = new l.State({
          artist: "",
          artwork: null,
          audioTrack: null,
          audioTracks: [],
          autoPlay: !1,
          autoPlayError: null,
          audioGain: null,
          buffered: new S(),
          canLoad: !1,
          canLoadPoster: !1,
          canFullscreen: !1,
          canOrientScreen: m(),
          canPictureInPicture: !1,
          canPlay: !1,
          clipStartTime: 0,
          clipEndTime: 0,
          controls: !1,
          get iOSControls() {
            return (
              f &&
              "video" === this.mediaType &&
              (!this.playsInline ||
                (!l.fscreen.fullscreenEnabled && this.fullscreen))
            );
          },
          get nativeControls() {
            return this.controls || this.iOSControls;
          },
          controlsVisible: !1,
          get controlsHidden() {
            return !this.controlsVisible;
          },
          crossOrigin: null,
          ended: !1,
          error: null,
          fullscreen: !1,
          get loop() {
            return this.providedLoop || this.userPrefersLoop;
          },
          logLevel: "silent",
          mediaType: "unknown",
          muted: !1,
          paused: !0,
          played: new S(),
          playing: !1,
          playsInline: !1,
          pictureInPicture: !1,
          preload: "metadata",
          playbackRate: 1,
          qualities: [],
          quality: null,
          autoQuality: !1,
          canSetQuality: !0,
          canSetPlaybackRate: !0,
          canSetVolume: !1,
          canSetAudioGain: !1,
          seekable: new S(),
          seeking: !1,
          source: { src: "", type: "" },
          sources: [],
          started: !1,
          textTracks: [],
          textTrack: null,
          get hasCaptions() {
            return this.textTracks.filter(ti).length > 0;
          },
          volume: 1,
          waiting: !1,
          realCurrentTime: 0,
          get currentTime() {
            return this.ended
              ? this.duration
              : this.clipStartTime > 0
                ? Math.max(
                    0,
                    Math.min(
                      this.realCurrentTime - this.clipStartTime,
                      this.duration,
                    ),
                  )
                : this.realCurrentTime;
          },
          providedDuration: -1,
          intrinsicDuration: 0,
          get realDuration() {
            return this.providedDuration > 0
              ? this.providedDuration
              : this.intrinsicDuration;
          },
          get duration() {
            return this.clipEndTime > 0
              ? this.clipEndTime - this.clipStartTime
              : Math.max(0, this.realDuration - this.clipStartTime);
          },
          get title() {
            return this.providedTitle || this.inferredTitle;
          },
          get poster() {
            return this.providedPoster || this.inferredPoster;
          },
          get viewType() {
            return "unknown" !== this.providedViewType
              ? this.providedViewType
              : this.inferredViewType;
          },
          get streamType() {
            return "unknown" !== this.providedStreamType
              ? this.providedStreamType
              : this.inferredStreamType;
          },
          get currentSrc() {
            return this.source;
          },
          get bufferedStart() {
            return Math.max(0, (P(this.buffered) ?? 0) - this.clipStartTime);
          },
          get bufferedEnd() {
            let t = E(this.buffered) ?? 0;
            return Math.min(this.duration, Math.max(0, t - this.clipStartTime));
          },
          get seekableStart() {
            return Math.max(0, (P(this.seekable) ?? 0) - this.clipStartTime);
          },
          get seekableEnd() {
            let t = this.canPlay ? (E(this.seekable) ?? 1 / 0) : 0;
            return this.clipEndTime > 0
              ? Math.max(this.clipEndTime, Math.max(0, t - this.clipStartTime))
              : t;
          },
          get seekableWindow() {
            return Math.max(0, this.seekableEnd - this.seekableStart);
          },
          canAirPlay: !1,
          canGoogleCast: !1,
          remotePlaybackState: "disconnected",
          remotePlaybackType: "none",
          remotePlaybackLoader: null,
          remotePlaybackInfo: null,
          get isAirPlayConnected() {
            return (
              "airplay" === this.remotePlaybackType &&
              "connected" === this.remotePlaybackState
            );
          },
          get isGoogleCastConnected() {
            return (
              "google-cast" === this.remotePlaybackType &&
              "connected" === this.remotePlaybackState
            );
          },
          pointer: "fine",
          orientation: "landscape",
          width: 0,
          height: 0,
          mediaWidth: 0,
          mediaHeight: 0,
          lastKeyboardAction: null,
          userBehindLiveEdge: !1,
          liveEdgeTolerance: 10,
          minLiveDVRWindow: 60,
          get canSeek() {
            return (
              /unknown|on-demand|:dvr/.test(this.streamType) &&
              Number.isFinite(this.seekableWindow) &&
              (!this.live ||
                (/:dvr/.test(this.streamType) &&
                  this.seekableWindow >= this.minLiveDVRWindow))
            );
          },
          get live() {
            return (
              this.streamType.includes("live") ||
              !Number.isFinite(this.realDuration)
            );
          },
          get liveEdgeStart() {
            return this.live && Number.isFinite(this.seekableEnd)
              ? Math.max(
                  0,
                  (this.liveSyncPosition ?? this.seekableEnd) -
                    this.liveEdgeTolerance,
                )
              : 0;
          },
          get liveEdge() {
            return (
              this.live &&
              (!this.canSeek ||
                (!this.userBehindLiveEdge &&
                  this.currentTime >= this.liveEdgeStart))
            );
          },
          get liveEdgeWindow() {
            return this.live && Number.isFinite(this.seekableEnd)
              ? this.seekableEnd - this.liveEdgeStart
              : 0;
          },
          autoPlaying: !1,
          providedTitle: "",
          inferredTitle: "",
          providedLoop: !1,
          userPrefersLoop: !1,
          providedPoster: "",
          inferredPoster: "",
          inferredViewType: "unknown",
          providedViewType: "unknown",
          providedStreamType: "unknown",
          inferredStreamType: "unknown",
          liveSyncPosition: null,
          savedState: null,
        }),
        ta = new Set([
          "autoPlayError",
          "autoPlaying",
          "buffered",
          "canPlay",
          "error",
          "paused",
          "played",
          "playing",
          "seekable",
          "seeking",
          "waiting",
        ]),
        tn = new Set([
          ...ta,
          "ended",
          "inferredPoster",
          "inferredStreamType",
          "inferredTitle",
          "intrinsicDuration",
          "liveSyncPosition",
          "realCurrentTime",
          "savedState",
          "started",
          "userBehindLiveEdge",
        ]);
      function tr(t, e = !1) {
        let i = e ? ta : tn;
        ts.reset(t, (t) => i.has(t)), (0, l.tick)();
      }
      let th = (0, l.createContext)();
      function tl() {
        return (0, l.useContext)(th);
      }
      Symbol(0);
      class to {
        constructor(t) {
          (this.cc = t), (this.H = null), (this.f = null), (this.Sd = -1);
        }
        setTarget(t) {
          this.H = t;
        }
        getPlayer(t) {
          return (
            this.f ||
              (t ?? this.H)?.dispatchEvent(
                new l.DOMEvent("find-media-player", {
                  detail: (t) => void (this.f = t),
                  bubbles: !0,
                  composed: !0,
                }),
              ),
            this.f
          );
        }
        setPlayer(t) {
          this.f = t;
        }
        startLoading(t) {
          this.t("media-start-loading", t);
        }
        startLoadingPoster(t) {
          this.t("media-poster-start-loading", t);
        }
        requestAirPlay(t) {
          this.t("media-airplay-request", t);
        }
        requestGoogleCast(t) {
          this.t("media-google-cast-request", t);
        }
        play(t) {
          this.t("media-play-request", t);
        }
        pause(t) {
          this.t("media-pause-request", t);
        }
        mute(t) {
          this.t("media-mute-request", t);
        }
        unmute(t) {
          this.t("media-unmute-request", t);
        }
        enterFullscreen(t, e) {
          this.t("media-enter-fullscreen-request", e, t);
        }
        exitFullscreen(t, e) {
          this.t("media-exit-fullscreen-request", e, t);
        }
        lockScreenOrientation(t, e) {
          this.t("media-orientation-lock-request", e, t);
        }
        unlockScreenOrientation(t) {
          this.t("media-orientation-unlock-request", t);
        }
        enterPictureInPicture(t) {
          this.t("media-enter-pip-request", t);
        }
        exitPictureInPicture(t) {
          this.t("media-exit-pip-request", t);
        }
        seeking(t, e) {
          this.t("media-seeking-request", e, t);
        }
        seek(t, e) {
          this.t("media-seek-request", e, t);
        }
        seekToLiveEdge(t) {
          this.t("media-live-edge-request", t);
        }
        changeDuration(t, e) {
          this.t("media-duration-change-request", e, t);
        }
        changeClipStart(t, e) {
          this.t("media-clip-start-change-request", e, t);
        }
        changeClipEnd(t, e) {
          this.t("media-clip-end-change-request", e, t);
        }
        changeVolume(t, e) {
          this.t("media-volume-change-request", e, Math.max(0, Math.min(1, t)));
        }
        changeAudioTrack(t, e) {
          this.t("media-audio-track-change-request", e, t);
        }
        changeQuality(t, e) {
          this.t("media-quality-change-request", e, t);
        }
        requestAutoQuality(t) {
          this.changeQuality(-1, t);
        }
        changeTextTrackMode(t, e, i) {
          this.t("media-text-track-change-request", i, { index: t, mode: e });
        }
        changePlaybackRate(t, e) {
          this.t("media-rate-change-request", e, t);
        }
        changeAudioGain(t, e) {
          this.t("media-audio-gain-change-request", e, t);
        }
        resumeControls(t) {
          this.t("media-resume-controls-request", t);
        }
        pauseControls(t) {
          this.t("media-pause-controls-request", t);
        }
        togglePaused(t) {
          let e = this.getPlayer(t?.target);
          e && (e.state.paused ? this.play(t) : this.pause(t));
        }
        toggleControls(t) {
          let e = this.getPlayer(t?.target);
          e &&
            (e.controls.showing
              ? e.controls.hide(0, t)
              : e.controls.show(0, t));
        }
        toggleMuted(t) {
          let e = this.getPlayer(t?.target);
          e && (e.state.muted ? this.unmute(t) : this.mute(t));
        }
        toggleFullscreen(t, e) {
          let i = this.getPlayer(e?.target);
          i &&
            (i.state.fullscreen
              ? this.exitFullscreen(t, e)
              : this.enterFullscreen(t, e));
        }
        togglePictureInPicture(t) {
          let e = this.getPlayer(t?.target);
          e &&
            (e.state.pictureInPicture
              ? this.exitPictureInPicture(t)
              : this.enterPictureInPicture(t));
        }
        showCaptions(t) {
          let e = this.getPlayer(t?.target);
          if (!e) return;
          let i = e.state.textTracks,
            s = this.Sd;
          (i[s] && ti(i[s])) || (s = -1),
            -1 === s && (s = i.findIndex((t) => ti(t) && t.default)),
            -1 === s && (s = i.findIndex((t) => ti(t))),
            s >= 0 && this.changeTextTrackMode(s, "showing", t),
            (this.Sd = -1);
        }
        disableCaptions(t) {
          let e = this.getPlayer(t?.target);
          if (!e) return;
          let i = e.state.textTracks,
            s = e.state.textTrack;
          if (s) {
            let e = i.indexOf(s);
            this.changeTextTrackMode(e, "disabled", t), (this.Sd = e);
          }
        }
        toggleCaptions(t) {
          let e = this.getPlayer(t?.target);
          e &&
            (e.state.textTrack ? this.disableCaptions() : this.showCaptions());
        }
        userPrefersLoopChange(t, e) {
          this.t("media-user-loop-change-request", e, t);
        }
        t(t, e, i) {
          let s = new l.DOMEvent(t, {
              bubbles: !0,
              composed: !0,
              cancelable: !0,
              detail: i,
              trigger: e,
            }),
            a = e?.target || null;
          a && a instanceof l.Component && (a = a.el),
            (a =
              !a ||
              a === document ||
              a === window ||
              a === document.body ||
              (this.f?.el && a instanceof Node && !this.f.el.contains(a))
                ? (this.H ?? this.getPlayer()?.el)
                : (a ?? this.H)),
            this.f && ("media-play-request" !== t || this.f.state.canLoad)
              ? this.f.canPlayQueue.k(t, () => a?.dispatchEvent(s))
              : a?.dispatchEvent(s);
        }
        Wa(t) {}
      }
      class td {
        constructor() {
          (this.playerId = "vds-player"),
            (this.mediaId = null),
            (this.I = {
              volume: null,
              muted: null,
              audioGain: null,
              time: null,
              lang: null,
              captions: null,
              rate: null,
              quality: null,
            }),
            (this.saveTimeThrottled = (0, l.functionThrottle)(
              this.saveTime.bind(this),
              1e3,
            ));
        }
        async getVolume() {
          return this.I.volume;
        }
        async setVolume(t) {
          (this.I.volume = t), this.save();
        }
        async getMuted() {
          return this.I.muted;
        }
        async setMuted(t) {
          (this.I.muted = t), this.save();
        }
        async getTime() {
          return this.I.time;
        }
        async setTime(t, e) {
          let i = t < 0;
          (this.I.time = i ? null : t),
            i || e ? this.saveTime() : this.saveTimeThrottled();
        }
        async getLang() {
          return this.I.lang;
        }
        async setLang(t) {
          (this.I.lang = t), this.save();
        }
        async getCaptions() {
          return this.I.captions;
        }
        async setCaptions(t) {
          (this.I.captions = t), this.save();
        }
        async getPlaybackRate() {
          return this.I.rate;
        }
        async setPlaybackRate(t) {
          (this.I.rate = t), this.save();
        }
        async getAudioGain() {
          return this.I.audioGain;
        }
        async setAudioGain(t) {
          (this.I.audioGain = t), this.save();
        }
        async getVideoQuality() {
          return this.I.quality;
        }
        async setVideoQuality(t) {
          (this.I.quality = t), this.save();
        }
        onChange(t, e, i = "vds-player") {
          let s = i ? localStorage.getItem(i) : null,
            a = e ? localStorage.getItem(e) : null;
          (this.playerId = i),
            (this.mediaId = e),
            (this.I = {
              volume: null,
              muted: null,
              audioGain: null,
              lang: null,
              captions: null,
              rate: null,
              quality: null,
              ...(s ? JSON.parse(s) : {}),
              time: a ? +a : null,
            });
        }
        save() {
          if (c || !this.playerId) return;
          let t = JSON.stringify({ ...this.I, time: void 0 });
          localStorage.setItem(this.playerId, t);
        }
        saveTime() {
          if (c || !this.mediaId) return;
          let t = (this.I.time ?? 0).toString();
          localStorage.setItem(this.mediaId, t);
        }
      }
      function tc(t, e = 2) {
        return Number(t.toFixed(e));
      }
      function tu(t) {
        return String(t).split(".")[1]?.length ?? 0;
      }
      function tp(t, e, i) {
        return Math.max(t, Math.min(i, e));
      }
      function tf(t, e, i) {
        if (t) return (0, l.listenEvent)(t, e, i);
      }
      function tg(t, e) {
        let i = e.composedPath()[0];
        return (0, l.isDOMNode)(i) && t.contains(i);
      }
      let tb = new Set();
      if (!c) {
        let t = function () {
          for (let t of tb)
            try {
              t();
            } catch (t) {}
          window.requestAnimationFrame(t);
        };
        t();
      }
      function tm(t, e, i) {
        t.hasAttribute(e) || t.setAttribute(e, i);
      }
      function ty(t, e) {
        if (
          !(t.hasAttribute("aria-label") || t.hasAttribute("data-no-label"))
        ) {
          if (!(0, l.isFunction)(e)) {
            (0, l.setAttribute)(t, "aria-label", e);
            return;
          }
          c ? i() : (0, l.effect)(i);
        }
        function i() {
          (0, l.setAttribute)(t, "aria-label", e());
        }
      }
      function tv(t) {
        let e = getComputedStyle(t);
        return "none" !== e.display && parseInt(e.opacity) > 0;
      }
      function tk(t, e) {
        var i;
        return (
          (i = () =>
            e(
              !!t &&
                ("checkVisibility" in t
                  ? t.checkVisibility({
                      checkOpacity: !0,
                      checkVisibilityCSS: !0,
                    })
                  : tv(t)),
            )),
          tb.add(i),
          () => tb.delete(i)
        );
      }
      function t$(t, e, i) {
        for (; e; ) {
          if (e === t) return !0;
          if (i?.(e)) break;
          e = e.parentElement;
        }
        return !1;
      }
      function tw(t, e) {
        (0, l.listenEvent)(t, "pointerup", (t) => {
          0 !== t.button || t.defaultPrevented || e(t);
        }),
          (0, l.listenEvent)(t, "keydown", (t) => {
            (0, l.isKeyboardClick)(t) && e(t);
          });
      }
      function tx(t) {
        return (
          (0, l.isTouchEvent)(t) &&
          (t.touches.length > 1 || t.changedTouches.length > 1)
        );
      }
      function tT(t) {
        if (c) return t();
        let e = (0, l.getScope)(),
          i = window.requestAnimationFrame(() => {
            (0, l.scoped)(t, e), (i = -1);
          });
        return () => void window.cancelAnimationFrame(i);
      }
      function tS(t, e, i, { offsetVarName: s, xOffset: a, yOffset: n, ...r }) {
        if (!t) return;
        let h = i.replace(" ", "-").replace("-center", "");
        if (((0, l.setStyle)(t, "visibility", e ? null : "hidden"), !e)) return;
        let d = i.includes("top"),
          c = (t) => (i.includes("left") ? `calc(-1 * ${t})` : t),
          u = (t) => (d ? `calc(-1 * ${t})` : t);
        return (0, o.Me)(e, t, () => {
          (0, o.oo)(e, t, {
            placement: h,
            middleware: [
              ...(r.middleware ?? []),
              (0, o.RR)({ fallbackAxisSideDirection: "start", crossAxis: !1 }),
              (0, o.uY)(),
            ],
            ...r,
          }).then(({ x: e, y: r, middlewareData: h }) => {
            let l = !!h.flip?.index;
            (d = i.includes(l ? "bottom" : "top")),
              t.setAttribute(
                "data-placement",
                l
                  ? i.startsWith("top")
                    ? i.replace("top", "bottom")
                    : i.replace("bottom", "top")
                  : i,
              ),
              Object.assign(t.style, {
                top: `calc(${r + "px"} + ${u(n ? n + "px" : `var(--${s}-y-offset, 0px)`)})`,
                left: `calc(${e + "px"} + ${c(a ? a + "px" : `var(--${s}-x-offset, 0px)`)})`,
              });
          });
        });
      }
      function tP(t) {
        return t instanceof HTMLElement;
      }
      class tE {
        constructor() {
          (this.priority = 0),
            (this.Vf = !0),
            (this.m = null),
            (this.K = null),
            (this.wa = new Set());
        }
        canRender(t, e) {
          return !!e;
        }
        attach(t) {
          (this.m = t), t && (t.textTracks.onchange = this.F.bind(this));
        }
        addTrack(t) {
          this.wa.add(t), this.di(t);
        }
        removeTrack(t) {
          t[Y.$]?.remove?.(), (t[Y.$] = null), this.wa.delete(t);
        }
        changeTrack(t) {
          let e = t?.[Y.$];
          e && "showing" !== e.track.mode && (e.track.mode = "showing"),
            (this.K = t);
        }
        setDisplay(t) {
          (this.Vf = t), this.F();
        }
        detach() {
          for (let t of (this.m && (this.m.textTracks.onchange = null),
          this.wa))
            this.removeTrack(t);
          this.wa.clear(), (this.m = null), (this.K = null);
        }
        di(t) {
          if (!this.m) return;
          let e = (t[Y.$] ??= this.ei(t));
          tP(e) &&
            (this.m.append(e),
            (e.track.mode = e.default ? "showing" : "disabled"));
        }
        ei(t) {
          let e = document.createElement("track"),
            i = t.default || "showing" === t.mode,
            s = t.src && "vtt" === t.type;
          return (
            (e.id = t.id),
            (e.src = s ? t.src : ""),
            (e.label = t.label),
            (e.kind = t.kind),
            (e.default = i),
            t.language && (e.srclang = t.language),
            i && !s && this.Wf(t, e.track),
            e
          );
        }
        Wf(t, e) {
          if (!((t.src && "vtt" === t.type) || e.cues?.length))
            for (let i of t.cues) e.addCue(i);
        }
        F(t) {
          for (let e of this.wa) {
            let i = e[Y.$];
            if (!i) continue;
            if (!this.Vf) {
              i.track.mode = i.managed ? "hidden" : "disabled";
              continue;
            }
            let s = "showing" === i.track.mode;
            s && this.Wf(e, i.track), e.setMode(s ? "showing" : "disabled", t);
          }
        }
      }
      class tA {
        constructor(t) {
          (this.a = t),
            (this.m = null),
            (this.cd = []),
            (this.Xf = !1),
            (this.xa = null),
            (this.kb = null);
          let e = t.textTracks;
          (this.Xd = e),
            (0, l.effect)(this.Yd.bind(this)),
            (0, l.onDispose)(this.fi.bind(this)),
            (0, l.listenEvent)(e, "add", this.Zd.bind(this)),
            (0, l.listenEvent)(e, "remove", this.gi.bind(this)),
            (0, l.listenEvent)(e, "mode-change", this.Ia.bind(this));
        }
        Yd() {
          let { nativeControls: t } = this.a.$state;
          (this.Xf = t()), this.Ia();
        }
        add(t) {
          this.cd.push(t), (0, l.untrack)(this.Ia.bind(this));
        }
        remove(t) {
          t.detach(),
            this.cd.splice(this.cd.indexOf(t), 1),
            (0, l.untrack)(this.Ia.bind(this));
        }
        Yf(t) {
          requestAnimationFrame(() => {
            if (((this.m = t), t))
              for (let e of ((this.xa = new tE()), this.xa.attach(t), this.Xd))
                this.Zf(e);
            this.Ia();
          });
        }
        Zf(t) {
          ti(t) && this.xa?.addTrack(t);
        }
        hi(t) {
          ti(t) && this.xa?.removeTrack(t);
        }
        Zd(t) {
          this.Zf(t.detail);
        }
        gi(t) {
          this.hi(t.detail);
        }
        Ia() {
          let t = this.Xd.selected;
          if (this.m && (this.Xf || t?.[Y.Nf])) {
            this.kb?.changeTrack(null),
              this.xa?.setDisplay(!0),
              this.xa?.changeTrack(t);
            return;
          }
          if ((this.xa?.setDisplay(!1), this.xa?.changeTrack(null), !t)) {
            this.kb?.changeTrack(null);
            return;
          }
          let e = this.cd
            .sort((t, e) => t.priority - e.priority)
            .find((e) => e.canRender(t, this.m));
          this.kb !== e &&
            (this.kb?.detach(), e?.attach(this.m), (this.kb = e ?? null)),
            e?.changeTrack(t);
        }
        fi() {
          this.xa?.detach(),
            (this.xa = null),
            this.kb?.detach(),
            (this.kb = null);
        }
      }
      let tC = Symbol(0),
        tM = Symbol(0),
        tD = Symbol(0),
        tq = Symbol(0),
        tO = Symbol(0),
        tj = Symbol(0),
        tI = {
          ea: tC,
          dc: tM,
          A: tD,
          fa: tq,
          Zc: tO,
          Pd: tj,
          Hf: Symbol(0),
          If: Symbol(0),
          Jf: Symbol(0),
        };
      class tF extends l.EventsTarget {
        constructor() {
          super(...arguments), (this.B = []), (this[r] = !1);
        }
        get length() {
          return this.B.length;
        }
        get readonly() {
          return this[tI.Zc];
        }
        indexOf(t) {
          return this.B.indexOf(t);
        }
        getById(t) {
          return "" === t ? null : (this.B.find((e) => e.id === t) ?? null);
        }
        toArray() {
          return [...this.B];
        }
        [((r = tI.Zc), Symbol.iterator)]() {
          return this.B.values();
        }
        [tI.ea](t, e) {
          let i = this.B.length;
          "" + i in this ||
            Object.defineProperty(this, i, {
              get() {
                return this.B[i];
              },
            }),
            this.B.includes(t) ||
              (this.B.push(t),
              this.dispatchEvent(
                new l.DOMEvent("add", { detail: t, trigger: e }),
              ));
        }
        [tI.dc](t, e) {
          let i = this.B.indexOf(t);
          i >= 0 &&
            (this[tI.If]?.(t, e),
            this.B.splice(i, 1),
            this.dispatchEvent(
              new l.DOMEvent("remove", { detail: t, trigger: e }),
            ));
        }
        [tI.A](t) {
          for (let e of [...this.B]) this[tI.dc](e, t);
          (this.B = []), this[tI.Pd](!1, t), this[tI.Hf]?.();
        }
        [tI.Pd](t, e) {
          this[tI.Zc] !== t &&
            ((this[tI.Zc] = t),
            this.dispatchEvent(
              new l.DOMEvent("readonly-change", { detail: t, trigger: e }),
            ));
        }
      }
      class tL extends tF {
        constructor() {
          super(),
            (this._ = !1),
            (this.lb = {}),
            (this.mb = null),
            (this.nb = null),
            (this.cg = (0, l.functionDebounce)(async () => {
              if (!this._) return;
              !this.nb && this.mb && (this.nb = await this.mb.getLang());
              let t = await this.mb?.getCaptions();
              for (let e of [
                ["captions", "subtitles"],
                "chapters",
                "descriptions",
                "metadata",
              ]) {
                let i = this.getByKind(e);
                if (i.find((t) => "showing" === t.mode)) continue;
                let s = this.nb ? i.find((t) => t.language === this.nb) : null,
                  a = (0, l.isArray)(e)
                    ? this.lb[e.find((t) => this.lb[t]) || ""]
                    : this.lb[e],
                  n = s ?? a,
                  r = n && ti(n);
                n &&
                  (!r || !1 !== t) &&
                  ((n.mode = "showing"), r && this.dg(n));
              }
            }, 300)),
            (this._d = null),
            (this.bg = this.ii.bind(this));
        }
        get selected() {
          return this.B.find((t) => "showing" === t.mode && ti(t)) ?? null;
        }
        get selectedIndex() {
          let t = this.selected;
          return t ? this.indexOf(t) : -1;
        }
        get preferredLang() {
          return this.nb;
        }
        set preferredLang(t) {
          (this.nb = t), this.ag(t);
        }
        add(t, e) {
          let i = t instanceof tt ? t : new tt(t),
            s =
              "captions" === t.kind || "subtitles" === t.kind
                ? "captions"
                : t.kind;
          return (
            this.lb[s] && t.default && delete t.default,
            i.addEventListener("mode-change", this.bg),
            this[tI.ea](i, e),
            (i[Y.Eb] = this[Y.Eb]),
            this._ && i[Y._](),
            t.default && (this.lb[s] = i),
            this.cg(),
            this
          );
        }
        remove(t, e) {
          if (((this._d = t), this.B.includes(t)))
            return (
              t === this.lb[t.kind] && delete this.lb[t.kind],
              (t.mode = "disabled"),
              (t[Y.ib] = null),
              t.removeEventListener("mode-change", this.bg),
              this[tI.dc](t, e),
              (this._d = null),
              this
            );
        }
        clear(t) {
          for (let e of [...this.B]) this.remove(e, t);
          return this;
        }
        getByKind(t) {
          let e = Array.isArray(t) ? t : [t];
          return this.B.filter((t) => e.includes(t.kind));
        }
        [Y._]() {
          if (!this._) {
            for (let t of this.B) t[Y._]();
            (this._ = !0), this.cg();
          }
        }
        ii(t) {
          let e = t.detail;
          if (
            (this.mb && ti(e) && e !== this._d && this.dg(e),
            "showing" === e.mode)
          ) {
            let t = ti(e) ? ["captions", "subtitles"] : [e.kind];
            for (let i of this.B)
              "showing" === i.mode &&
                i != e &&
                t.includes(i.kind) &&
                (i.mode = "disabled");
          }
          this.dispatchEvent(
            new l.DOMEvent("mode-change", { detail: t.detail, trigger: t }),
          );
        }
        dg(t) {
          "disabled" !== t.mode && this.ag(t.language),
            this.mb?.setCaptions?.("showing" === t.mode);
        }
        ag(t) {
          this.mb?.setLang?.((this.nb = t));
        }
        setStorage(t) {
          this.mb = t;
        }
      }
      let tN = Symbol(0);
      class tR extends tF {
        get selected() {
          return this.B.find((t) => t.selected) ?? null;
        }
        get selectedIndex() {
          return this.B.findIndex((t) => t.selected);
        }
        [tI.If](t, e) {
          this[tI.fa](t, !1, e);
        }
        [tI.ea](t, e) {
          (t[tN] = !1),
            Object.defineProperty(t, "selected", {
              get() {
                return this[tN];
              },
              set: (e) => {
                this.readonly || (this[tI.Jf]?.(), this[tI.fa](t, e));
              },
            }),
            super[tI.ea](t, e);
        }
        [tI.fa](t, e, i) {
          if (e === t?.[tN]) return;
          let s = this.selected;
          t && (t[tN] = e),
            (e ? s !== t : s === t) &&
              (s && (s[tN] = !1),
              this.dispatchEvent(
                new l.DOMEvent("change", {
                  detail: { prev: s, current: this.selected },
                  trigger: i,
                }),
              ));
        }
      }
      class tV extends tR {}
      let tG = { Xa: Symbol(0), Ja: Symbol(0) };
      class tK extends tR {
        constructor() {
          super(...arguments), (this.dd = !1), (this.switch = "current");
        }
        get auto() {
          return this.dd || this.readonly;
        }
        [tI.Jf]() {
          this[tG.Xa](!1);
        }
        [tI.Hf](t) {
          (this[tG.Ja] = void 0), this[tG.Xa](!1, t);
        }
        autoSelect(t) {
          this.readonly ||
            this.dd ||
            !this[tG.Ja] ||
            (this[tG.Ja]?.(t), this[tG.Xa](!0, t));
        }
        getBySrc(t) {
          return this.B.find((e) => e.src === t);
        }
        [tG.Xa](t, e) {
          this.dd !== t &&
            ((this.dd = t),
            this.dispatchEvent(
              new l.DOMEvent("auto-change", { detail: t, trigger: e }),
            ));
        }
      }
      function tU(t, e) {
        return [...t].sort(e ? tB : tH);
      }
      function tH(t, e) {
        return t.height === e.height
          ? (t.bitrate ?? 0) - (e.bitrate ?? 0)
          : t.height - e.height;
      }
      function tB(t, e) {
        return e.height === t.height
          ? (e.bitrate ?? 0) - (t.bitrate ?? 0)
          : e.height - t.height;
      }
      function tz(t) {
        return t?.$$PROVIDER_TYPE === "HLS";
      }
      function tQ(t) {
        return t?.$$PROVIDER_TYPE === "DASH";
      }
      class tW extends l.ViewController {}
      let t_ = new Set(["Shift", "Alt", "Meta", "Ctrl"]),
        tX =
          'input, textarea, select, [contenteditable], [role^="menuitem"], [role="timer"]';
      class tY extends tW {
        constructor(t) {
          super(), (this.a = t), (this.Jb = null);
        }
        onConnect() {
          (0, l.effect)(this.ji.bind(this));
        }
        ji() {
          let { keyDisabled: t, keyTarget: e } = this.$props;
          if (t()) return;
          let i = "player" === e() ? this.el : document,
            s = (0, l.signal)(!1);
          i === this.el
            ? (this.listen("focusin", () => s.set(!0)),
              this.listen("focusout", (t) => {
                this.el.contains(t.target) || s.set(!1);
              }))
            : ((0, l.peek)(s) ||
                s.set(
                  document.querySelector("[data-media-player]") === this.el,
                ),
              (0, l.listenEvent)(document, "focusin", (t) => {
                let e = t
                  .composedPath()
                  .find(
                    (t) =>
                      t instanceof Element && "media-player" === t.localName,
                  );
                void 0 !== e && s.set(this.el === e);
              })),
            (0, l.effect)(() => {
              s() &&
                ((0, l.listenEvent)(i, "keyup", this.ic.bind(this)),
                (0, l.listenEvent)(i, "keydown", this.jc.bind(this)),
                (0, l.listenEvent)(i, "keydown", this.ki.bind(this), {
                  capture: !0,
                }));
            });
        }
        ic(t) {
          let e = document.activeElement;
          if (!t.key || !this.$state.canSeek() || e?.matches(tX)) return;
          let { method: i, value: s } = this.$d(t);
          if (!(0, l.isString)(s) && !(0, l.isArray)(s)) {
            s?.onKeyUp?.({
              event: t,
              player: this.a.player,
              remote: this.a.remote,
            }),
              s?.callback?.(t, this.a.remote);
            return;
          }
          if (
            (i?.startsWith("seek") &&
              (t.preventDefault(),
              t.stopPropagation(),
              this.Jb
                ? (this.eg(t, "seekForward" === i), (this.Jb = null))
                : (this.a.remote.seek(this.ed, t), (this.ed = void 0))),
            i?.startsWith("volume"))
          ) {
            let e = this.el.querySelector("[data-media-volume-slider]");
            e?.dispatchEvent(
              new KeyboardEvent("keyup", {
                key: "volumeUp" === i ? "Up" : "Down",
                shiftKey: t.shiftKey,
                trigger: t,
              }),
            );
          }
        }
        jc(t) {
          if (!t.key || t_.has(t.key)) return;
          let e = document.activeElement;
          if (
            e?.matches(tX) ||
            ((0, l.isKeyboardClick)(t) && e?.matches('button, [role="button"]'))
          )
            return;
          let { method: i, value: s } = this.$d(t),
            a = !t.metaKey && /^[0-9]$/.test(t.key);
          if (!(0, l.isString)(s) && !(0, l.isArray)(s) && !a) {
            s?.onKeyDown?.({
              event: t,
              player: this.a.player,
              remote: this.a.remote,
            }),
              s?.callback?.(t, this.a.remote);
            return;
          }
          if (!i && a) {
            t.preventDefault(),
              t.stopPropagation(),
              this.a.remote.seek(
                (this.$state.duration() / 10) * Number(t.key),
                t,
              );
            return;
          }
          if (i) {
            switch ((t.preventDefault(), t.stopPropagation(), i)) {
              case "seekForward":
              case "seekBackward":
                this.Ka(t, i, "seekForward" === i);
                break;
              case "volumeUp":
              case "volumeDown":
                let e = this.el.querySelector("[data-media-volume-slider]");
                if (e)
                  e.dispatchEvent(
                    new KeyboardEvent("keydown", {
                      key: "volumeUp" === i ? "Up" : "Down",
                      shiftKey: t.shiftKey,
                      trigger: t,
                    }),
                  );
                else {
                  let e = t.shiftKey ? 0.1 : 0.05;
                  this.a.remote.changeVolume(
                    this.$state.volume() + ("volumeUp" === i ? +e : -e),
                    t,
                  );
                }
                break;
              case "toggleFullscreen":
                this.a.remote.toggleFullscreen("prefer-media", t);
                break;
              case "speedUp":
              case "slowDown":
                let s = this.$state.playbackRate();
                this.a.remote.changePlaybackRate(
                  Math.max(
                    0.25,
                    Math.min(2, s + ("speedUp" === i ? 0.25 : -0.25)),
                  ),
                  t,
                );
                break;
              default:
                this.a.remote[i]?.(t);
            }
            this.$state.lastKeyboardAction.set({ action: i, event: t });
          }
        }
        ki(t) {
          var e, i;
          (i = e = t.target),
            ((!c && i instanceof HTMLAudioElement) ||
              (!c && e instanceof HTMLVideoElement)) &&
              this.$d(t).method &&
              t.preventDefault();
        }
        $d(t) {
          let e = { ...this.$props.keyShortcuts(), ...this.a.ariaKeys },
            i = Object.keys(e).find((i) => {
              let s = e[i],
                a = (0, l.isArray)(s)
                  ? s.join(" ")
                  : (0, l.isString)(s)
                    ? s
                    : s?.keys,
                n = (l.isArray(a) ? a : a?.split(" "))?.map((t) =>
                  t
                    .replace(/Shift\+(\d)/g, (t, e) => tZ[e - 1])
                    .replace(/Control/g, "Ctrl")
                    .split("+"),
                );
              return n?.some((e) => {
                let i = new Set(e.filter((t) => t_.has(t)));
                for (let e of t_) {
                  let s = e.toLowerCase() + "Key";
                  if (!i.has(e) && t[s]) return !1;
                }
                return e.every((e) =>
                  t_.has(e)
                    ? t[e.toLowerCase() + "Key"]
                    : t.key === e.replace("Space", " "),
                );
              });
            });
          return { method: i, value: i ? e[i] : null };
        }
        li(t, e) {
          let i = t.shiftKey ? 10 : 5;
          return (this.ed = Math.max(
            0,
            Math.min(
              (this.ed ?? this.$state.currentTime()) +
                ("seekForward" === e ? +i : -i),
              this.$state.duration(),
            ),
          ));
        }
        eg(t, e) {
          this.Jb?.dispatchEvent(
            new KeyboardEvent(t.type, {
              key: e ? "Right" : "Left",
              shiftKey: t.shiftKey,
              trigger: t,
            }),
          );
        }
        Ka(t, e, i) {
          this.$state.canSeek() &&
            (this.Jb ||
              (this.Jb = this.el.querySelector("[data-media-time-slider]")),
            this.Jb ? this.eg(t, i) : this.a.remote.seeking(this.li(t, e), t));
        }
      }
      let tZ = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
      class tJ extends l.ViewController {
        constructor(t) {
          super(), (this.ae = t);
        }
        onAttach(t) {
          let { $props: e, ariaKeys: i } = tl(),
            s = t.getAttribute("aria-keyshortcuts");
          if (s) {
            (i[this.ae] = s),
              c ||
                (0, l.onDispose)(() => {
                  delete i[this.ae];
                });
            return;
          }
          let a = e.keyShortcuts()[this.ae];
          if (a) {
            let e = (0, l.isArray)(a)
              ? a.join(" ")
              : (0, l.isString)(a)
                ? a
                : a?.keys;
            t.setAttribute(
              "aria-keyshortcuts",
              (0, l.isArray)(e) ? e.join(" ") : e,
            );
          }
        }
      }
      class t0 extends tW {
        constructor() {
          super(...arguments),
            (this.Td = -2),
            (this.Hb = !1),
            (this.Tf = (0, l.signal)(!1)),
            (this.Ud = (0, l.signal)(!1)),
            (this.fc = null),
            (this.Vd = (0, l.signal)(!0)),
            (this.defaultDelay = 2e3);
        }
        get canIdle() {
          return this.Vd();
        }
        set canIdle(t) {
          this.Vd.set(t);
        }
        get hideOnMouseLeave() {
          let { hideControlsOnMouseLeave: t } = this.$props;
          return this.Tf() || t();
        }
        set hideOnMouseLeave(t) {
          this.Tf.set(t);
        }
        get showing() {
          return this.$state.controlsVisible();
        }
        show(t = 0, e) {
          this.Wd(), this.Hb || this.bd(!0, t, e);
        }
        hide(t = this.defaultDelay, e) {
          this.Wd(), this.Hb || this.bd(!1, t, e);
        }
        pause(t) {
          (this.Hb = !0), this.Wd(), this.bd(!0, 0, t);
        }
        resume(t) {
          (this.Hb = !1),
            this.$state.paused() || this.bd(!1, this.defaultDelay, t);
        }
        onConnect() {
          (0, l.effect)(this.Ib.bind(this));
        }
        Ib() {
          let { viewType: t } = this.$state;
          if (!this.Vd()) return;
          if ("audio" === t()) {
            this.show();
            return;
          }
          (0, l.effect)(this.ai.bind(this)), (0, l.effect)(this.gc.bind(this));
          let e = this.hc.bind(this),
            i = this.jb.bind(this);
          this.listen("can-play", (t) => this.show(0, t)),
            this.listen("play", e),
            this.listen("pause", i),
            this.listen("auto-play-fail", i);
        }
        ai() {
          let { started: t, pointer: e, paused: i } = this.$state;
          if (!t() || "fine" !== e()) return;
          let s = this.hideOnMouseLeave;
          (s && this.Ud()) ||
            (0, l.effect)(() => {
              i() || this.listen("pointermove", this.Uf.bind(this));
            }),
            s &&
              (this.listen("mouseenter", this.bi.bind(this)),
              this.listen("mouseleave", this.ci.bind(this)));
        }
        gc() {
          let { paused: t, started: e, autoPlayError: i } = this.$state;
          if (t() || (i() && !e())) return;
          let s = this.Uf.bind(this);
          (0, l.effect)(() => {
            for (let t of [
              "coarse" === this.$state.pointer() ? "touchend" : "pointerup",
              "keydown",
            ])
              this.listen(t, s, { passive: !1 });
          });
        }
        hc(t) {
          this.show(0, t), this.hide(void 0, t);
        }
        jb(t) {
          this.show(0, t);
        }
        bi(t) {
          this.Ud.set(!1), this.show(0, t), this.hide(void 0, t);
        }
        ci(t) {
          this.Ud.set(!0), this.hide(0, t);
        }
        Wd() {
          window.clearTimeout(this.Td), (this.Td = -1);
        }
        Uf(t) {
          t.MEDIA_GESTURE ||
            this.Hb ||
            tx(t) ||
            ((0, l.isKeyboardEvent)(t) &&
              ("Escape" === t.key
                ? (this.el?.focus(), (this.fc = null))
                : this.fc &&
                  (t.preventDefault(),
                  requestAnimationFrame(() => {
                    this.fc?.focus(), (this.fc = null);
                  }))),
            this.show(0, t),
            this.hide(this.defaultDelay, t));
        }
        bd(t, e, i) {
          if (0 === e) {
            this.F(t, i);
            return;
          }
          this.Td = window.setTimeout(() => {
            this.scope && this.F(t && !this.Hb, i);
          }, e);
        }
        F(t, e) {
          this.$state.controlsVisible() !== t &&
            (this.$state.controlsVisible.set(t),
            !t &&
              document.activeElement &&
              this.el?.contains(document.activeElement) &&
              ((this.fc = document.activeElement),
              requestAnimationFrame(() => {
                this.el?.focus({ preventScroll: !0 });
              })),
            this.dispatch("controls-change", { detail: t, trigger: e }));
        }
      }
      let t1 = l.fscreen.fullscreenEnabled;
      class t2 extends l.ViewController {
        constructor() {
          super(...arguments), (this.ec = !1), (this.Qd = !1);
        }
        get active() {
          return this.Qd;
        }
        get supported() {
          return t1;
        }
        onConnect() {
          (0, l.listenEvent)(l.fscreen, "fullscreenchange", this.F.bind(this)),
            (0, l.listenEvent)(l.fscreen, "fullscreenerror", this.R.bind(this)),
            (0, l.onDispose)(this.Ga.bind(this));
        }
        async Ga() {
          t1 && (await this.exit());
        }
        F(t) {
          let e = t5(this.el);
          e !== this.Qd &&
            (e || (this.ec = !1),
            (this.Qd = e),
            this.dispatch("fullscreen-change", { detail: e, trigger: t }));
        }
        R(t) {
          this.ec &&
            (this.dispatch("fullscreen-error", { detail: null, trigger: t }),
            (this.ec = !1));
        }
        async enter() {
          try {
            if (((this.ec = !0), !this.el || t5(this.el))) return;
            return t3(), l.fscreen.requestFullscreen(this.el);
          } catch (t) {
            throw ((this.ec = !1), t);
          }
        }
        async exit() {
          if (this.el && t5(this.el)) return t3(), l.fscreen.exitFullscreen();
        }
      }
      function t5(t) {
        if (l.fscreen.fullscreenElement === t) return !0;
        try {
          return t.matches(l.fscreen.fullscreenPseudoClass);
        } catch (t) {
          return !1;
        }
      }
      function t3() {
        if (!t1) throw Error("[vidstack] no fullscreen API");
      }
      let t7 = class t extends l.ViewController {
        constructor() {
          super(...arguments),
            (this.ma = (0, l.signal)(this.Kf())),
            (this.Db = (0, l.signal)(!1));
        }
        get type() {
          return this.ma();
        }
        get locked() {
          return this.Db();
        }
        get portrait() {
          return this.ma().startsWith("portrait");
        }
        get landscape() {
          return this.ma().startsWith("landscape");
        }
        get supported() {
          return t.supported;
        }
        onConnect() {
          if (this.supported)
            (0, l.listenEvent)(
              screen.orientation,
              "change",
              this.Lf.bind(this),
            );
          else {
            let t = window.matchMedia("(orientation: landscape)");
            (t.onchange = this.Lf.bind(this)),
              (0, l.onDispose)(() => (t.onchange = null));
          }
          (0, l.onDispose)(this.Ga.bind(this));
        }
        async Ga() {
          this.supported && this.Db() && (await this.unlock());
        }
        Lf(t) {
          this.ma.set(this.Kf()),
            this.dispatch("orientation-change", {
              detail: { orientation: (0, l.peek)(this.ma), lock: this.$c },
              trigger: t,
            });
        }
        async lock(t) {
          (0, l.peek)(this.Db) ||
            this.$c === t ||
            (this.Mf(),
            await screen.orientation.lock(t),
            this.Db.set(!0),
            (this.$c = t));
        }
        async unlock() {
          (0, l.peek)(this.Db) &&
            (this.Mf(),
            (this.$c = void 0),
            await screen.orientation.unlock(),
            this.Db.set(!1));
        }
        Mf() {
          if (!this.supported) throw Error("[vidstack] no orientation API");
        }
        Kf() {
          return c
            ? "portrait-primary"
            : this.supported
              ? window.screen.orientation.type
              : window.innerWidth >= window.innerHeight
                ? "landscape-primary"
                : "portrait-primary";
        }
      };
      t7.supported = m();
      class t6 {
        constructor() {
          this.name = "audio";
        }
        canPlay(t) {
          return (
            !!F(t) &&
            (c ||
              !(0, l.isString)(t.src) ||
              "?" === t.type ||
              y(this.target, t.type))
          );
        }
        mediaType() {
          return "audio";
        }
        async load(t) {
          if (c)
            throw Error("[vidstack] can not load audio provider server-side");
          return new (await i.e(9324).then(i.bind(i, 69324))).AudioProvider(
            this.target,
            t,
          );
        }
      }
      class t4 {
        constructor() {
          this.name = "video";
        }
        canPlay(t) {
          return (
            !!L(t) &&
            (c ||
              !(0, l.isString)(t.src) ||
              "?" === t.type ||
              v(this.target, t.type))
          );
        }
        mediaType() {
          return "video";
        }
        async load(t) {
          if (c)
            throw Error("[vidstack] can not load video provider server-side");
          return new (
            await Promise.resolve().then(function () {
              return ek;
            })
          ).VideoProvider(this.target, t);
        }
      }
      let t9 = class t extends t4 {
        constructor() {
          super(...arguments), (this.name = "hls");
        }
        canPlay(e) {
          return t.supported && N(e);
        }
        async load(t) {
          if (c)
            throw Error("[vidstack] can not load hls provider server-side");
          return new (await i.e(6776).then(i.bind(i, 56776))).HLSProvider(
            this.target,
            t,
          );
        }
      };
      t9.supported = T();
      let t8 = null,
        et = [],
        ee = [];
      function ei() {
        return (t8 ??= new AudioContext());
      }
      function es() {
        t8 &&
          0 === et.length &&
          0 === ee.length &&
          t8.close().then(() => {
            t8 = null;
          });
      }
      class ea {
        constructor(t, e) {
          (this.a = t), (this.F = e), (this.ya = null), (this.La = null);
        }
        get currentGain() {
          return this.ya?.gain?.value ?? null;
        }
        get supported() {
          return !0;
        }
        setGain(t) {
          let e = this.currentGain;
          if (t !== this.currentGain) {
            if (1 === t && 1 !== e) {
              this.removeGain();
              return;
            }
            !this.ya &&
              ((this.ya = (function () {
                let t = ei(),
                  e = t.createGain();
                return e.connect(t.destination), et.push(e), e;
              })()),
              this.La && this.La.connect(this.ya)),
              this.La ||
                (this.La = (function (t, e) {
                  let i = ei().createMediaElementSource(t);
                  return e && i.connect(e), ee.push(i), i;
                })(this.a, this.ya)),
              (this.ya.gain.value = t),
              this.F(t);
          }
        }
        removeGain() {
          this.ya &&
            (this.La && this.La.connect(ei().destination),
            this.fg(),
            this.F(null));
        }
        destroy() {
          this.mi(), this.fg();
        }
        mi() {
          if (this.La)
            try {
              !(function (t) {
                let e = ee.indexOf(t);
                -1 !== e && (ee.splice(e, 1), t.disconnect(), es());
              })(this.La);
            } catch (t) {
            } finally {
              this.La = null;
            }
        }
        fg() {
          if (this.ya)
            try {
              !(function (t) {
                let e = et.indexOf(t);
                -1 !== e && (et.splice(e, 1), t.disconnect(), es());
              })(this.ya);
            } catch (t) {
            } finally {
              this.ya = null;
            }
        }
      }
      let en = ["focus", "blur", "visibilitychange", "pageshow", "pagehide"];
      class er {
        constructor() {
          (this.Aa = (0, l.signal)(eh())),
            (this.Xn = (0, l.signal)(c ? "visible" : document.visibilityState));
        }
        connect() {
          for (let t of en) (0, l.listenEvent)(window, t, this._n.bind(this));
          b &&
            (0, l.listenEvent)(window, "beforeunload", (t) => {
              this.Yn = setTimeout(() => {
                t.defaultPrevented ||
                  t.returnValue.length > 0 ||
                  (this.Aa.set("hidden"), this.Xn.set("hidden"));
              }, 0);
            });
        }
        get pageState() {
          return this.Aa();
        }
        get visibility() {
          return this.Xn();
        }
        _n(t) {
          b && window.clearTimeout(this.Yn),
            ("blur" !== t.type || "active" === this.Aa()) &&
              (this.Aa.set(eh(t)),
              this.Xn.set(
                "hidden" == document.visibilityState ? "hidden" : "visible",
              ));
        }
      }
      function eh(t) {
        return c || t?.type === "blur" || "hidden" === document.visibilityState
          ? "hidden"
          : document.hasFocus()
            ? "active"
            : "passive";
      }
      class el {
        constructor(t) {
          this.Ma = t;
        }
        Ya() {
          (0, l.isUndefined)(this.za) && this.gg();
        }
        aa() {
          (0, l.isNumber)(this.za) && window.cancelAnimationFrame(this.za),
            (this.za = void 0);
        }
        gg() {
          this.za = window.requestAnimationFrame(() => {
            (0, l.isUndefined)(this.za) || (this.Ma(), this.gg());
          });
        }
      }
      class eo {
        constructor(t, e) {
          (this.p = t),
            (this.b = e),
            (this.Za = (0, l.useDisposalBin)()),
            (this.kc = !1),
            (this.be = !1),
            (this.ce = !1),
            (this.ga = new el(this.lc.bind(this))),
            (this.Zn = new er()),
            (this.Tn = 0),
            (this.Un = -1),
            (this.ig = void 0),
            (this.Ai = void 0),
            this.ni(),
            this.Zn.connect(),
            (0, l.effect)(this.oi.bind(this)),
            (0, l.onDispose)(this.de.bind(this));
        }
        get a() {
          return this.p.media;
        }
        get c() {
          return this.b.delegate.c;
        }
        de() {
          (this.be = !1), (this.ce = !1), this.ga.aa(), this.Za.empty();
        }
        lc() {
          let t = this.a.currentTime;
          (b && t - this.Un < 0.35) ||
            this.Tn === t ||
            (this.Kb(t), (this.Tn = t));
        }
        ni() {
          this.G("loadstart", this.Na),
            this.G("abort", this.hg),
            this.G("emptied", this.pi),
            this.G("error", this.R),
            this.G("volumechange", this.Oa);
        }
        qi() {
          this.be ||
            (this.Za.add(
              this.G("loadeddata", this.ri),
              this.G("loadedmetadata", this.si),
              this.G("canplay", this.fd),
              this.G("canplaythrough", this.ti),
              this.G("durationchange", this.ee),
              this.G("play", this.hc),
              this.G("progress", this.ob),
              this.G("stalled", this.ui),
              this.G("suspend", this.vi),
              this.G("ratechange", this.wi),
            ),
            (this.be = !0));
        }
        xi() {
          this.ce ||
            (this.Za.add(
              this.G("pause", this.jb),
              this.G("playing", this.yi),
              this.G("seeked", this.pb),
              this.G("seeking", this.zi),
              this.G("ended", this.mc),
              this.G("waiting", this.fe),
            ),
            (this.ce = !0));
        }
        G(t, e) {
          return (0, l.listenEvent)(this.a, t, e.bind(this));
        }
        Bi(t) {}
        Kb(t, e) {
          let i = Math.min(t, this.b.$state.seekableEnd());
          this.c("time-change", i, e);
        }
        Na(t) {
          if (3 === this.a.networkState) {
            this.hg(t);
            return;
          }
          this.qi(), this.c("load-start", void 0, t);
        }
        hg(t) {
          this.c("abort", void 0, t);
        }
        pi() {
          this.c("emptied", void 0, event);
        }
        ri(t) {
          this.c("loaded-data", void 0, t);
        }
        si(t) {
          (this.Tn = 0),
            (this.Un = -1),
            this.xi(),
            this.c("loaded-metadata", void 0, t),
            (p || (b && N(this.b.$state.source()))) &&
              this.b.delegate.Ha(this.ge(), t);
        }
        ge() {
          return {
            provider: (0, l.peek)(this.b.$provider),
            duration: this.a.duration,
            buffered: this.a.buffered,
            seekable: this.a.seekable,
          };
        }
        hc(t) {
          this.b.$state.canPlay && this.c("play", void 0, t);
        }
        jb(t) {
          (1 !== this.a.readyState || this.kc) &&
            ((this.kc = !1), this.ga.aa(), this.c("pause", void 0, t));
        }
        fd(t) {
          this.b.delegate.Ha(this.ge(), t);
        }
        ti(t) {
          this.b.$state.started() || this.c("can-play-through", this.ge(), t);
        }
        yi(t) {
          this.a.paused ||
            ((this.kc = !1), this.c("playing", void 0, t), this.ga.Ya());
        }
        ui(t) {
          this.c("stalled", void 0, t),
            this.a.readyState < 3 &&
              ((this.kc = !0), this.c("waiting", void 0, t));
        }
        fe(t) {
          this.a.readyState < 3 &&
            ((this.kc = !0), this.c("waiting", void 0, t));
        }
        mc(t) {
          this.ga.aa(),
            this.Kb(this.a.duration, t),
            this.c("end", void 0, t),
            this.b.$state.loop() &&
              (0, l.isNil)(this.a.controls) &&
              (this.a.controls = !1);
        }
        oi() {
          let t = this.b.$state.paused(),
            e = "hidden" === this.Zn.visibility;
          (t || e) &&
            (0, l.listenEvent)(this.a, "timeupdate", this.nc.bind(this));
        }
        nc(t) {
          this.Kb(this.a.currentTime, t);
        }
        ee(t) {
          this.b.$state.ended() && this.Kb(this.a.duration, t),
            this.c("duration-change", this.a.duration, t);
        }
        Oa(t) {
          let e = { volume: this.a.volume, muted: this.a.muted };
          this.c("volume-change", e, t);
        }
        pb(t) {
          (this.Un = this.a.currentTime),
            this.Kb(this.a.currentTime, t),
            this.c("seeked", this.a.currentTime, t),
            Math.trunc(this.a.currentTime) === Math.trunc(this.a.duration) &&
              tu(this.a.duration) > tu(this.a.currentTime) &&
              (this.Kb(this.a.duration, t),
              this.a.ended ||
                this.b.player.dispatch(
                  new l.DOMEvent("media-play-request", { trigger: t }),
                ));
        }
        zi(t) {
          this.c("seeking", this.a.currentTime, t);
        }
        ob(t) {
          let e = { buffered: this.a.buffered, seekable: this.a.seekable };
          this.c("progress", e, t);
        }
        vi(t) {
          this.c("suspend", void 0, t);
        }
        wi(t) {
          this.c("rate-change", this.a.playbackRate, t);
        }
        R(t) {
          let e = this.a.error;
          if (!e) return;
          let i = { message: e.message, code: e.code, mediaError: e };
          this.c("error", i, t);
        }
      }
      class ed {
        constructor(t, e) {
          (this.p = t),
            (this.b = e),
            (this.oc.onaddtrack = this.Ci.bind(this)),
            (this.oc.onremovetrack = this.Di.bind(this)),
            (this.oc.onchange = this.Ei.bind(this)),
            (0, l.listenEvent)(
              this.b.audioTracks,
              "change",
              this.Fi.bind(this),
            );
        }
        get oc() {
          return this.p.media.audioTracks;
        }
        Ci(t) {
          let e = t.track;
          if ("" === e.label) return;
          let i = {
            id: e.id.toString() || `native-audio-${this.b.audioTracks.length}`,
            label: e.label,
            language: e.language,
            kind: e.kind,
            selected: !1,
          };
          this.b.audioTracks[tI.ea](i, t), e.enabled && (i.selected = !0);
        }
        Di(t) {
          let e = this.b.audioTracks.getById(t.track.id);
          e && this.b.audioTracks[tI.dc](e, t);
        }
        Ei(t) {
          let e = this.jg();
          if (!e) return;
          let i = this.b.audioTracks.getById(e.id);
          i && this.b.audioTracks[tI.fa](i, !0, t);
        }
        jg() {
          return Array.from(this.oc).find((t) => t.enabled);
        }
        Fi(t) {
          let { current: e } = t.detail;
          if (!e) return;
          let i = this.oc.getTrackById(e.id);
          if (i) {
            let t = this.jg();
            t && (t.enabled = !1), (i.enabled = !0);
          }
        }
      }
      class ec {
        constructor(t, e) {
          (this.a = t),
            (this.b = e),
            (this.scope = (0, l.createScope)()),
            (this.L = null),
            (this.audioGain = new ea(this.a, (t) => {
              this.b.delegate.c("audio-gain-change", t);
            }));
        }
        setup() {
          new eo(this, this.b),
            "audioTracks" in this.media && new ed(this, this.b),
            (0, l.onDispose)(() => {
              for (let t of (this.audioGain.destroy(),
              (this.a.srcObject = null),
              this.a.removeAttribute("src"),
              this.a.querySelectorAll("source")))
                t.remove();
              this.a.load();
            });
        }
        get type() {
          return "";
        }
        get media() {
          return this.a;
        }
        get currentSrc() {
          return this.L;
        }
        setPlaybackRate(t) {
          this.a.playbackRate = t;
        }
        async play() {
          return this.a.play();
        }
        async pause() {
          return this.a.pause();
        }
        setMuted(t) {
          this.a.muted = t;
        }
        setVolume(t) {
          this.a.volume = t;
        }
        setCurrentTime(t) {
          this.a.currentTime = t;
        }
        setPlaysInline(t) {
          (0, l.setAttribute)(this.a, "playsinline", t);
        }
        async loadSource({ src: t, type: e }, i) {
          ((this.a.preload = i || ""),
          !c &&
            void 0 !== window.MediaStream &&
            t instanceof window.MediaStream)
            ? (this.pc(), (this.a.srcObject = t))
            : ((this.a.srcObject = null),
              (0, l.isString)(t)
                ? "?" !== e
                  ? this.he({ src: t, type: e })
                  : (this.pc(), (this.a.src = this.kg(t)))
                : (this.pc(), (this.a.src = window.URL.createObjectURL(t)))),
            this.a.load(),
            (this.L = { src: t, type: e });
        }
        he(t, e) {
          let i = this.a.querySelector("source[data-vds]"),
            s = i ?? document.createElement("source");
          (0, l.setAttribute)(s, "src", this.kg(t.src)),
            (0, l.setAttribute)(s, "type", "?" !== t.type ? t.type : e),
            (0, l.setAttribute)(s, "data-vds", ""),
            i || this.a.append(s);
        }
        pc() {
          this.a.querySelector("source[data-vds]")?.remove();
        }
        kg(t) {
          let { clipStartTime: e, clipEndTime: i } = this.b.$state,
            s = e(),
            a = i();
          return s > 0 && a > 0
            ? `${t}#t=${s},${a}`
            : s > 0
              ? `${t}#t=${s}`
              : a > 0
                ? `${t}#t=0,${a}`
                : t;
        }
      }
      class eu {
        constructor(t, e) {
          (this.a = t), (this.b = e), (this.qb = (0, l.signal)(!1)), this.ie();
        }
        get supported() {
          return this.qb();
        }
        ie() {
          !c &&
            this.a?.remote &&
            this.lg &&
            (this.a.remote
              .watchAvailability((t) => {
                this.qb.set(t);
              })
              .catch(() => {
                this.qb.set(!1);
              }),
            (0, l.effect)(this.Gi.bind(this)));
        }
        Gi() {
          if (!this.qb()) return;
          let t = this.je.bind(this);
          for (let e of (t(),
          (0, l.listenEvent)(this.a, "playing", t),
          ["connecting", "connect", "disconnect"]))
            (0, l.listenEvent)(this.a.remote, e, t);
        }
        async prompt() {
          if (!this.supported) throw Error("Not supported on this platform.");
          return "airplay" === this.ma && this.a.webkitShowPlaybackTargetPicker
            ? this.a.webkitShowPlaybackTargetPicker()
            : this.a.remote.prompt();
        }
        je(t) {
          let e = this.a.remote.state;
          if (e === this.Aa) return;
          let i = { type: this.ma, state: e };
          this.b.delegate.c("remote-playback-change", i, t), (this.Aa = e);
        }
      }
      class ep extends eu {
        constructor() {
          super(...arguments), (this.ma = "airplay");
        }
        get lg() {
          return "WebKitPlaybackTargetAvailabilityEvent" in window;
        }
      }
      class ef {
        constructor(t, e) {
          (this.m = t),
            (this.b = e),
            (t.textTracks.onaddtrack = this.Zd.bind(this)),
            (0, l.onDispose)(this.de.bind(this));
        }
        Zd(t) {
          let e = t.track;
          if (!e || Array.from(this.m.children).find((t) => t.track === e))
            return;
          let i = new tt({
            id: e.id,
            kind: e.kind,
            label: e.label ?? "",
            language: e.language,
            type: "vtt",
          });
          (i[Y.$] = { track: e }), (i[Y.na] = 2), (i[Y.Nf] = !0);
          let s = 0,
            a = (t) => {
              if (e.cues)
                for (let a = s; a < e.cues.length; a++)
                  i.addCue(e.cues[a], t), s++;
            };
          a(t),
            (e.oncuechange = a),
            this.b.textTracks.add(i, t),
            i.setMode(e.mode, t);
        }
        de() {
          for (let t of ((this.m.textTracks.onaddtrack = null),
          this.b.textTracks)) {
            let e = t[Y.$]?.track;
            e?.oncuechange && (e.oncuechange = null);
          }
        }
      }
      class eg {
        constructor(t, e) {
          (this.m = t),
            (this.a = e),
            (this.F = (t, e) => {
              this.a.delegate.c("picture-in-picture-change", t, e);
            }),
            (0, l.listenEvent)(
              this.m,
              "enterpictureinpicture",
              this.Hi.bind(this),
            ),
            (0, l.listenEvent)(
              this.m,
              "leavepictureinpicture",
              this.Ii.bind(this),
            );
        }
        get active() {
          return document.pictureInPictureElement === this.m;
        }
        get supported() {
          return $(this.m);
        }
        async enter() {
          return this.m.requestPictureInPicture();
        }
        exit() {
          return document.exitPictureInPicture();
        }
        Hi(t) {
          this.F(!0, t);
        }
        Ii(t) {
          this.F(!1, t);
        }
      }
      class eb {
        constructor(t, e) {
          (this.m = t),
            (this.a = e),
            (this.V = "inline"),
            (0, l.listenEvent)(
              this.m,
              "webkitpresentationmodechanged",
              this.ib.bind(this),
            );
        }
        get qb() {
          return w(this.m);
        }
        async gd(t) {
          this.V !== t && this.m.webkitSetPresentationMode(t);
        }
        ib(t) {
          let e = this.V;
          (this.V = this.m.webkitPresentationMode),
            this.a.player?.dispatch(
              new l.DOMEvent("video-presentation-change", {
                detail: this.V,
                trigger: t,
              }),
            ),
            ["fullscreen", "picture-in-picture"].forEach((i) => {
              (this.V === i || e === i) &&
                this.a.delegate.c(`${i}-change`, this.V === i, t);
            });
        }
      }
      class em {
        constructor(t) {
          this.Pa = t;
        }
        get active() {
          return "fullscreen" === this.Pa.V;
        }
        get supported() {
          return this.Pa.qb;
        }
        async enter() {
          this.Pa.gd("fullscreen");
        }
        async exit() {
          this.Pa.gd("inline");
        }
      }
      class ey {
        constructor(t) {
          this.Pa = t;
        }
        get active() {
          return "picture-in-picture" === this.Pa.V;
        }
        get supported() {
          return this.Pa.qb;
        }
        async enter() {
          this.Pa.gd("picture-in-picture");
        }
        async exit() {
          this.Pa.gd("inline");
        }
      }
      class ev extends ec {
        constructor(t, e) {
          super(t, e),
            (this.$$PROVIDER_TYPE = "VIDEO"),
            (0, l.scoped)(() => {
              if (((this.airPlay = new ep(t, e)), w(t))) {
                let i = new eb(t, e);
                (this.fullscreen = new em(i)),
                  (this.pictureInPicture = new ey(i));
              } else $(t) && (this.pictureInPicture = new eg(t, e));
            }, this.scope);
        }
        get type() {
          return "video";
        }
        setup() {
          super.setup(),
            k(this.video) && new ef(this.video, this.b),
            this.b.textRenderers.Yf(this.video),
            (0, l.onDispose)(() => {
              this.b.textRenderers.Yf(null);
            }),
            "video" === this.type && this.b.delegate.c("provider-setup", this);
        }
        get video() {
          return this.a;
        }
      }
      var ek = Object.freeze({ __proto__: null, VideoProvider: ev });
      function e$(t) {
        try {
          return (
            new Intl.DisplayNames(navigator.languages, { type: "language" }).of(
              t,
            ) ?? null
          );
        } catch (t) {
          return null;
        }
      }
      let ew = (t) => `dash-${(0, l.camelToKebabCase)(t)}`;
      class ex {
        constructor(t, e) {
          (this.m = t),
            (this.b = e),
            (this.d = null),
            (this.rb = null),
            (this.sb = {}),
            (this.tb = new Set()),
            (this.Lb = null),
            (this.pe = {}),
            (this.oa = -1);
        }
        get instance() {
          return this.d;
        }
        setup(t) {
          this.d = t().create();
          let e = this.Ji.bind(this);
          for (let i of Object.values(t.events)) this.d.on(i, e);
          for (let e of (this.d.on(t.events.ERROR, this.R.bind(this)), this.tb))
            e(this.d);
          this.b.player.dispatch("dash-instance", { detail: this.d }),
            this.d.initialize(this.m, void 0, !1),
            this.d.updateSettings({
              streaming: {
                text: { defaultEnabled: !1, dispatchForManualRendering: !0 },
                buffer: { fastSwitchEnabled: !0 },
              },
              ...this.sb,
            }),
            this.d.on(t.events.FRAGMENT_LOADING_STARTED, this.Ki.bind(this)),
            this.d.on(t.events.FRAGMENT_LOADING_COMPLETED, this.Li.bind(this)),
            this.d.on(t.events.MANIFEST_LOADED, this.Mi.bind(this)),
            this.d.on(t.events.QUALITY_CHANGE_RENDERED, this._a.bind(this)),
            this.d.on(t.events.TEXT_TRACKS_ADDED, this.Ni.bind(this)),
            this.d.on(t.events.TRACK_CHANGE_RENDERED, this.qc.bind(this)),
            (this.b.qualities[tG.Ja] = this.ke.bind(this)),
            (0, l.listenEvent)(this.b.qualities, "change", this.le.bind(this)),
            (0, l.listenEvent)(
              this.b.audioTracks,
              "change",
              this.me.bind(this),
            ),
            (this.rb = (0, l.effect)(this.ne.bind(this)));
        }
        ba(t) {
          return new l.DOMEvent(ew(t.type), { detail: t });
        }
        ne() {
          if (!this.b.$state.live()) return;
          let t = new el(this.oe.bind(this));
          return t.Ya(), t.aa.bind(t);
        }
        oe() {
          if (!this.d) return;
          let t = this.d.duration() - this.d.time();
          this.b.$state.liveSyncPosition.set(isNaN(t) ? 1 / 0 : t);
        }
        Ji(t) {
          this.b.player?.dispatch(this.ba(t));
        }
        Oi(t) {
          let e = this.Lb?.[Y.$],
            i = (e?.track).cues;
          if (!e || !i) return;
          let s = this.Lb.id,
            a = this.pe[s] ?? 0,
            n = this.ba(t);
          for (let t = a; t < i.length; t++) {
            let e = i[t];
            e.positionAlign || (e.positionAlign = "auto"), this.Lb.addCue(e, n);
          }
          this.pe[s] = i.length;
        }
        Ni(t) {
          if (!this.d) return;
          let e = t.tracks,
            i = [...this.m.textTracks].filter((t) => "manualMode" in t),
            s = this.ba(t);
          for (let t = 0; t < i.length; t++) {
            let a = e[t],
              n = i[t],
              r = new tt({
                id: `dash-${a.kind}-${t}`,
                label:
                  a?.label ??
                  a.labels.find((t) => t.text)?.text ??
                  (a?.lang && e$(a.lang)) ??
                  a?.lang ??
                  void 0,
                language: a.lang ?? void 0,
                kind: a.kind,
                default: a.defaultTrack,
              });
            (r[Y.$] = { managed: !0, track: n }),
              (r[Y.na] = 2),
              (r[Y.ib] = () => {
                this.d &&
                  ("showing" === r.mode
                    ? (this.d.setTextTrack(t), (this.Lb = r))
                    : (this.d.setTextTrack(-1), (this.Lb = null)));
              }),
              this.b.textTracks.add(r, s);
          }
        }
        qc(t) {
          let { mediaType: e, newMediaInfo: i } = t;
          if ("audio" === e) {
            let e = this.b.audioTracks.getById(`dash-audio-${i.index}`);
            if (e) {
              let i = this.ba(t);
              this.b.audioTracks[tI.fa](e, !0, i);
            }
          }
        }
        _a(t) {
          if ("video" !== t.mediaType) return;
          let e = this.b.qualities[t.newQuality];
          if (e) {
            let i = this.ba(t);
            this.b.qualities[tI.fa](e, !0, i);
          }
        }
        Mi(t) {
          if (this.b.$state.canPlay() || !this.d) return;
          let { type: e, mediaPresentationDuration: i } = t.data,
            s = this.ba(t);
          this.b.delegate.c(
            "stream-type-change",
            "static" !== e ? "live" : "on-demand",
            s,
          ),
            this.b.delegate.c("duration-change", i, s),
            this.b.qualities[tG.Xa](!0, s);
          let a = this.d.getVideoElement(),
            n = this.d.getTracksForTypeFromManifest("video", t.data),
            r = [...new Set(n.map((t) => t.mimeType))].find(
              (t) => t && v(a, t),
            ),
            h = n.filter((t) => r === t.mimeType)[0],
            o = this.d.getTracksForTypeFromManifest("audio", t.data),
            d = [...new Set(o.map((t) => t.mimeType))].find(
              (t) => t && y(a, t),
            );
          if (
            ((o = o.filter((t) => d === t.mimeType)),
            h.bitrateList.forEach((t, e) => {
              let i = {
                id: t.id?.toString() ?? `dash-bitrate-${e}`,
                width: t.width ?? 0,
                height: t.height ?? 0,
                bitrate: t.bandwidth ?? 0,
                codec: h.codec,
                index: e,
              };
              this.b.qualities[tI.ea](i, s);
            }),
            (0, l.isNumber)(h.index))
          ) {
            let t = this.b.qualities[h.index];
            t && this.b.qualities[tI.fa](t, !0, s);
          }
          o.forEach((t, e) => {
            let i =
                t.labels.find((t) =>
                  navigator.languages.some(
                    (e) =>
                      t.lang &&
                      e.toLowerCase().startsWith(t.lang.toLowerCase()),
                  ),
                ) || t.labels[0],
              a = {
                id: `dash-audio-${t?.index}`,
                label: i?.text ?? (t.lang && e$(t.lang)) ?? t.lang ?? "",
                language: t.lang ?? "",
                kind: "main",
                mimeType: t.mimeType,
                codec: t.codec,
                index: e,
              };
            this.b.audioTracks[tI.ea](a, s);
          }),
            a.dispatchEvent(new l.DOMEvent("canplay", { trigger: s }));
        }
        R(t) {
          let { type: e, error: i } = t;
          27 === i.code ? this.qe(i) : this.rc(i);
        }
        Ki() {
          this.oa >= 0 && this.$a();
        }
        Li(t) {
          "text" === t.mediaType &&
            requestAnimationFrame(this.Oi.bind(this, t));
        }
        qe(t) {
          this.$a(),
            this.d?.play(),
            (this.oa = window.setTimeout(() => {
              (this.oa = -1), this.rc(t);
            }, 5e3));
        }
        $a() {
          clearTimeout(this.oa), (this.oa = -1);
        }
        rc(t) {
          this.b.delegate.c("error", {
            message: t.message ?? "",
            code: 1,
            error: t,
          });
        }
        ke() {
          this.mg("video", !0);
          let { qualities: t } = this.b;
          this.d?.setQualityFor("video", t.selectedIndex, !0);
        }
        mg(t, e) {
          this.d?.updateSettings({
            streaming: { abr: { autoSwitchBitrate: { [t]: e } } },
          });
        }
        le() {
          let { qualities: t } = this.b;
          this.d &&
            !t.auto &&
            t.selected &&
            (this.mg("video", !1),
            this.d.setQualityFor(
              "video",
              t.selectedIndex,
              "current" === t.switch,
            ),
            g && (this.m.currentTime = this.m.currentTime));
        }
        me() {
          if (!this.d) return;
          let { audioTracks: t } = this.b,
            e = this.d
              .getTracksFor("audio")
              .find(
                (e) => t.selected && t.selected.id === `dash-audio-${e.index}`,
              );
          e && this.d.setCurrentTrack(e);
        }
        A() {
          this.$a(), (this.Lb = null), (this.pe = {});
        }
        loadSource(t) {
          this.A(), (0, l.isString)(t.src) && this.d?.attachSource(t.src);
        }
        destroy() {
          this.A(),
            this.d?.destroy(),
            (this.d = null),
            this.rb?.(),
            (this.rb = null);
        }
      }
      function eT(t) {
        return t instanceof Error
          ? t
          : Error("string" == typeof t ? t : JSON.stringify(t));
      }
      function eS(t, e) {
        if (!t) throw Error("Assertion failed.");
      }
      class eP {
        constructor(t, e, i) {
          (this.M = t), (this.b = e), (this.Ma = i), this.re();
        }
        async re() {
          let t = {
              onLoadStart: this.Na.bind(this),
              onLoaded: this.ub.bind(this),
              onLoadError: this.se.bind(this),
            },
            e = await eA(this.M, t);
          return ((0, l.isUndefined)(e) &&
            !(0, l.isString)(this.M) &&
            (e = await eE(this.M, t)),
          e)
            ? window.dashjs.supportsMediaSource()
              ? e
              : (this.b.player.dispatch(new l.DOMEvent("dash-unsupported")),
                this.b.delegate.c("error", {
                  message:
                    "[vidstack] `dash.js` is not supported in this environment",
                  code: 4,
                }),
                null)
            : null;
        }
        Na() {
          this.b.player.dispatch(new l.DOMEvent("dash-lib-load-start"));
        }
        ub(t) {
          this.b.player.dispatch(
            new l.DOMEvent("dash-lib-loaded", { detail: t }),
          ),
            this.Ma(t);
        }
        se(t) {
          let e = eT(t);
          this.b.player.dispatch(
            new l.DOMEvent("dash-lib-load-error", { detail: e }),
          ),
            this.b.delegate.c("error", {
              message: e.message,
              code: 4,
              error: e,
            });
        }
      }
      async function eE(t, e = {}) {
        if (!(0, l.isUndefined)(t)) {
          if ((e.onLoadStart?.(), t && t.prototype && t.prototype !== Function))
            return e.onLoaded?.(t), t;
          if (eC(t)) {
            let i = t.MediaPlayer;
            return e.onLoaded?.(i), i;
          }
          try {
            let i = (await t())?.default;
            if (eC(i)) return e.onLoaded?.(i.MediaPlayer), i.MediaPlayer;
            if (i) e.onLoaded?.(i);
            else throw Error("");
            return i;
          } catch (t) {
            e.onLoadError?.(t);
          }
        }
      }
      async function eA(t, e = {}) {
        if ((0, l.isString)(t)) {
          e.onLoadStart?.();
          try {
            if ((await H(t), !(0, l.isFunction)(window.dashjs.MediaPlayer)))
              throw Error("");
            let i = window.dashjs.MediaPlayer;
            return e.onLoaded?.(i), i;
          } catch (t) {
            e.onLoadError?.(t);
          }
        }
      }
      function eC(t) {
        return t && "MediaPlayer" in t;
      }
      class eM extends ev {
        constructor() {
          super(...arguments),
            (this.$$PROVIDER_TYPE = "DASH"),
            (this.sc = null),
            (this.e = new ex(this.video, this.b)),
            (this.pa =
              "https://cdn.jsdelivr.net/npm/dashjs@4.7.4/dist/dash.all.min.js");
        }
        get ctor() {
          return this.sc;
        }
        get instance() {
          return this.e.instance;
        }
        get type() {
          return "dash";
        }
        get canLiveSync() {
          return !0;
        }
        get config() {
          return this.e.sb;
        }
        set config(t) {
          this.e.sb = t;
        }
        get library() {
          return this.pa;
        }
        set library(t) {
          this.pa = t;
        }
        preconnect() {
          (0, l.isString)(this.pa) && K(this.pa);
        }
        setup() {
          super.setup(),
            new eP(this.pa, this.b, (t) => {
              (this.sc = t),
                this.e.setup(t),
                this.b.delegate.c("provider-setup", this);
              let e = (0, l.peek)(this.b.$state.source);
              e && this.loadSource(e);
            });
        }
        async loadSource(t, e) {
          if (!(0, l.isString)(t.src)) {
            this.pc();
            return;
          }
          (this.a.preload = e || ""),
            this.he(t, "application/x-mpegurl"),
            this.e.loadSource(t),
            (this.L = t);
        }
        onInstance(t) {
          let e = this.e.instance;
          return e && t(e), this.e.tb.add(t), () => this.e.tb.delete(t);
        }
        destroy() {
          this.e.destroy();
        }
      }
      eM.supported = T();
      var eD = Object.freeze({ __proto__: null, DASHProvider: eM });
      let eq = class t extends t4 {
        constructor() {
          super(...arguments), (this.name = "dash");
        }
        canPlay(e) {
          return t.supported && R(e);
        }
        async load(t) {
          if (c)
            throw Error("[vidstack] can not load dash provider server-side");
          return new (
            await Promise.resolve().then(function () {
              return eD;
            })
          ).DASHProvider(this.target, t);
        }
      };
      eq.supported = T();
      class eO {
        constructor() {
          this.name = "vimeo";
        }
        preconnect() {
          for (let t of [
            "https://i.vimeocdn.com",
            "https://f.vimeocdn.com",
            "https://fresnel.vimeocdn.com",
          ])
            K(t);
        }
        canPlay(t) {
          return (0, l.isString)(t.src) && "video/vimeo" === t.type;
        }
        mediaType() {
          return "video";
        }
        async load(t) {
          if (c)
            throw Error("[vidstack] can not load vimeo provider server-side");
          return new (await i.e(6394).then(i.bind(i, 16394))).VimeoProvider(
            this.target,
            t,
          );
        }
        async loadPoster(t, e, s) {
          let { resolveVimeoVideoId: a, getVimeoVideoInfo: n } = await i
            .e(276)
            .then(i.bind(i, 50276));
          if (!(0, l.isString)(t.src)) return null;
          let { videoId: r, hash: h } = a(t.src);
          return r ? n(r, s, h).then((t) => (t ? t.poster : null)) : null;
        }
      }
      class ej {
        constructor() {
          this.name = "youtube";
        }
        preconnect() {
          for (let t of [
            "https://www.google.com",
            "https://i.ytimg.com",
            "https://googleads.g.doubleclick.net",
            "https://static.doubleclick.net",
          ])
            K(t);
        }
        canPlay(t) {
          return (0, l.isString)(t.src) && "video/youtube" === t.type;
        }
        mediaType() {
          return "video";
        }
        async load(t) {
          if (c)
            throw Error("[vidstack] can not load youtube provider server-side");
          return new (await i.e(9085).then(i.bind(i, 69085))).YouTubeProvider(
            this.target,
            t,
          );
        }
        async loadPoster(t, e, s) {
          let { findYouTubePoster: a, resolveYouTubeVideoId: n } = await i
              .e(4026)
              .then(i.bind(i, 54026)),
            r = (0, l.isString)(t.src) && n(t.src);
          return r ? a(r, s) : null;
        }
      }
      function eI(t, e) {
        let i = String(t),
          s = i.length;
        if (s < e) {
          let i = "0".repeat(e - s);
          return `${i}${t}`;
        }
        return i;
      }
      function eF(t) {
        let e = Number((t - Math.trunc(t)).toPrecision(3));
        return {
          hours: Math.trunc(t / 3600),
          minutes: Math.trunc((t % 3600) / 60),
          seconds: Math.trunc(t % 60),
          fraction: e,
        };
      }
      function eL(
        t,
        {
          padHrs: e = null,
          padMins: i = null,
          showHrs: s = !1,
          showMs: a = !1,
        } = {},
      ) {
        let { hours: n, minutes: r, seconds: h, fraction: o } = eF(t),
          d = e ? eI(n, 2) : n,
          c = i || ((0, l.isNull)(i) && t >= 3600) ? eI(r, 2) : r,
          u = eI(h, 2),
          p = a && o > 0 ? `.${String(o).replace(/^0?\./, "")}` : "",
          f = `${c}:${u}${p}`;
        return n > 0 || s ? `${d}:${f}` : f;
      }
      function eN(t) {
        let e = [],
          { hours: i, minutes: s, seconds: a } = eF(t);
        return (
          i > 0 && e.push(`${i} hour`),
          s > 0 && e.push(`${s} min`),
          (a > 0 || 0 === e.length) && e.push(`${a} sec`),
          e.join(" ")
        );
      }
      let eR = Symbol(0),
        eV = [
          "autoPlay",
          "canAirPlay",
          "canFullscreen",
          "canGoogleCast",
          "canLoad",
          "canLoadPoster",
          "canPictureInPicture",
          "canPlay",
          "canSeek",
          "ended",
          "fullscreen",
          "isAirPlayConnected",
          "isGoogleCastConnected",
          "live",
          "liveEdge",
          "loop",
          "mediaType",
          "muted",
          "paused",
          "pictureInPicture",
          "playing",
          "playsInline",
          "remotePlaybackState",
          "remotePlaybackType",
          "seeking",
          "started",
          "streamType",
          "viewType",
          "waiting",
        ];
      class eG extends tW {
        constructor(t, e) {
          super(), (this.ma = t), (this.Ma = e);
        }
        async onAttach(t) {
          if (c) return;
          let e = this.$props[this.ma]();
          if ("eager" === e) requestAnimationFrame(this.Ma);
          else if ("idle" === e) (0, l.waitIdlePeriod)(this.Ma);
          else if ("visible" === e) {
            let e,
              i = new IntersectionObserver((t) => {
                this.scope &&
                  t[0].isIntersecting &&
                  (e?.(), (e = void 0), this.Ma());
              });
            i.observe(t), (e = (0, l.onDispose)(() => i.disconnect()));
          }
        }
      }
      class eK {
        constructor(t, e) {
          (this.W = t),
            (this.a = e),
            (this.c = (t, ...e) => {
              c ||
                this.W(new l.DOMEvent(t, { detail: e?.[0], trigger: e?.[1] }));
            });
        }
        async Ha(t, e) {
          if (!c)
            return (0, l.untrack)(async () => {
              this.a;
              let {
                autoPlay: i,
                canPlay: s,
                started: a,
                duration: n,
                seekable: r,
                buffered: h,
                remotePlaybackInfo: o,
                playsInline: d,
                savedState: c,
                source: u,
              } = this.a.$state;
              if (s()) return;
              let p = {
                duration: t?.duration ?? n(),
                seekable: t?.seekable ?? r(),
                buffered: t?.buffered ?? h(),
                provider: this.a.$provider(),
              };
              this.c("can-play", p, e), (0, l.tick)();
              let f = this.a.$provider(),
                { storage: g, qualities: b } = this.a,
                {
                  muted: m,
                  volume: y,
                  clipStartTime: v,
                  playbackRate: k,
                } = this.a.$props;
              await g?.onLoad?.(u());
              let $ = c()?.currentTime,
                w = c()?.paused,
                x = await g?.getTime(),
                T = $ ?? x ?? v(),
                S = w || (!1 !== w && !a() && i());
              if (f) {
                f.setVolume((await g?.getVolume()) ?? y()),
                  f.setMuted(m() || !!(await g?.getMuted()));
                let t = (await g?.getAudioGain()) ?? 1;
                t > 1 && f.audioGain?.setGain?.(t),
                  f.setPlaybackRate?.((await g?.getPlaybackRate()) ?? k()),
                  f.setPlaysInline?.(d()),
                  T > 0 && f.setCurrentTime(T);
              }
              let P = await g?.getVideoQuality();
              if (P && b.length) {
                let t = null,
                  e = 1 / 0;
                for (let i of b) {
                  let s =
                    Math.abs(P.width - i.width) +
                    Math.abs(P.height - i.height) +
                    (P.bitrate ? Math.abs(P.bitrate - (i.bitrate ?? 0)) : 0);
                  s < e && ((t = i), (e = s));
                }
                t && (t.selected = !0);
              }
              s() && S
                ? await this.lj(e)
                : x && x > 0 && this.c("started", void 0, e),
                o.set(null);
            });
        }
        async lj(t) {
          let {
            player: e,
            $state: { autoPlaying: i, muted: s },
          } = this.a;
          i.set(!0);
          let a = new l.DOMEvent("auto-play-attempt", { trigger: t });
          try {
            await e.play(a);
          } catch (t) {}
        }
      }
      class eU {
        constructor() {
          this.i = new Map();
        }
        k(t, e) {
          this.i.set(t, e);
        }
        ye(t) {
          let e = this.sg(t);
          return this.i.delete(t), e;
        }
        sg(t) {
          return this.i.get(t);
        }
        vb(t) {
          this.i.delete(t);
        }
        Qm() {
          this.i.clear();
        }
      }
      class eH {
        constructor() {
          (this.xc = !1),
            (this.ze = (0, l.deferredPromise)()),
            (this.i = new Map());
        }
        get Rm() {
          return this.i.size;
        }
        get Sm() {
          return this.xc;
        }
        async Tm() {
          this.xc || (await this.ze.promise);
        }
        k(t, e) {
          if (this.xc) {
            e();
            return;
          }
          this.i.delete(t), this.i.set(t, e);
        }
        ye(t) {
          this.i.get(t)?.(), this.i.delete(t);
        }
        Ya() {
          this.tg(), (this.xc = !0), this.i.size > 0 && this.tg();
        }
        aa() {
          this.xc = !1;
        }
        A() {
          this.aa(), this.i.clear(), this.ug();
        }
        tg() {
          for (let t of this.i.keys()) this.ye(t);
          this.ug();
        }
        ug() {
          this.ze.resolve(), (this.ze = (0, l.deferredPromise)());
        }
      }
      class eB extends tW {
        constructor(t, e, i) {
          super(),
            (this.Ca = t),
            (this.g = e),
            (this.a = i),
            (this.Ac = new eH()),
            (this.Ge = !1),
            (this.D = i.$provider),
            (this.zc = new t0()),
            (this.qd = new t2()),
            (this.cb = new t7());
        }
        onAttach() {
          this.listen("fullscreen-change", this.Rd.bind(this));
        }
        onConnect() {
          let t = Object.getOwnPropertyNames(Object.getPrototypeOf(this)),
            e = this.Ij.bind(this);
          for (let i of t) i.startsWith("media-") && this.listen(i, e);
          this.Jj(),
            (0, l.effect)(this.Kj.bind(this)),
            (0, l.effect)(this.Lj.bind(this)),
            (0, l.effect)(this.Mj.bind(this)),
            (0, l.effect)(this.Nj.bind(this)),
            (0, l.effect)(this.Oj.bind(this)),
            (0, l.effect)(this.Pj.bind(this)),
            (0, l.effect)(this.Qj.bind(this));
        }
        onDestroy() {
          try {
            let t = this.createEvent("destroy"),
              { pictureInPicture: e, fullscreen: i } = this.$state;
            i() && this.Mg("prefer-media", t), e() && this.He(t);
          } catch (t) {}
          this.Ac.A();
        }
        Jj() {
          let { load: t } = this.$props,
            { canLoad: e } = this.$state;
          if ("play" !== t() || e()) return;
          let i = this.listen("media-play-request", (t) => {
            this.Hg(t), i();
          });
        }
        Kj() {
          let t = this.D(),
            e = this.$state.canPlay();
          return (
            t && e && this.Ac.Ya(),
            () => {
              this.Ac.aa();
            }
          );
        }
        Ij(t) {
          t.stopPropagation(),
            !t.defaultPrevented &&
              this[t.type] &&
              ((0, l.peek)(this.D)
                ? this[t.type](t)
                : this.Ac.k(t.type, () => {
                    (0, l.peek)(this.D) && this[t.type](t);
                  }));
        }
        async Bc(t) {
          if (c) return;
          let { canPlay: e, paused: i, autoPlaying: s } = this.$state;
          if (this.Hg(t) || !(0, l.peek)(i)) return;
          t && this.g.i.k("media-play-request", t);
          let a = (0, l.peek)(s);
          try {
            let t = (0, l.peek)(this.D);
            return ez(t, (0, l.peek)(e)), await t.play();
          } catch (i) {
            let e = this.createEvent("play-fail", {
              detail: eT(i),
              trigger: t,
            });
            throw ((e.autoPlay = a), this.Ca.W(e), i);
          }
        }
        Hg(t) {
          let { load: e } = this.$props,
            { canLoad: i } = this.$state;
          if ("play" === e() && !i()) {
            let e = this.createEvent("media-start-loading", { trigger: t });
            return (
              this.dispatchEvent(e),
              this.Ac.k("media-play-request", async () => {
                try {
                  await this.Bc(e);
                } catch (t) {}
              }),
              !0
            );
          }
          return !1;
        }
        async Fe(t) {
          if (c) return;
          let { canPlay: e, paused: i } = this.$state;
          if (!(0, l.peek)(i)) {
            t && this.g.i.k("media-pause-request", t);
            try {
              let t = (0, l.peek)(this.D);
              return ez(t, (0, l.peek)(e)), await t.pause();
            } catch (t) {
              throw (this.g.i.vb("media-pause-request"), t);
            }
          }
        }
        Ig(t, e) {
          let { audioGain: i, canSetAudioGain: s } = this.$state;
          if (i() === t) return;
          let a = this.D();
          if (!a?.audioGain || !s())
            throw Error("[vidstack] audio gain api not available");
          e && this.g.i.k("media-audio-gain-change-request", e),
            a.audioGain.setGain(t);
        }
        Jg(t) {
          if (c) return;
          let {
            canPlay: e,
            live: i,
            liveEdge: s,
            canSeek: a,
            liveSyncPosition: n,
            seekableEnd: r,
            userBehindLiveEdge: h,
          } = this.$state;
          if ((h.set(!1), (0, l.peek)(() => !i() || s() || !a()))) return;
          let o = (0, l.peek)(this.D);
          ez(o, (0, l.peek)(e)), t && this.g.i.k("media-seek-request", t);
          let d = r() - 2;
          o.setCurrentTime(Math.min(d, n() ?? d));
        }
        async Kg(t = "prefer-media", e) {
          if (c) return;
          let i = this.Lg(t);
          if ((eQ(t, i), !i.active))
            return (
              (0, l.peek)(this.$state.pictureInPicture) &&
                ((this.Ge = !0), await this.He(e)),
              e && this.g.i.k("media-enter-fullscreen-request", e),
              i.enter()
            );
        }
        async Mg(t = "prefer-media", e) {
          if (c) return;
          let i = this.Lg(t);
          if ((eQ(t, i), i.active)) {
            e && this.g.i.k("media-exit-fullscreen-request", e);
            try {
              let t = await i.exit();
              return (
                this.Ge &&
                  (0, l.peek)(this.$state.canPictureInPicture) &&
                  (await this.Ie()),
                t
              );
            } finally {
              this.Ge = !1;
            }
          }
        }
        Lg(t) {
          let e = (0, l.peek)(this.D);
          return ("prefer-media" === t && this.qd.supported) || "media" === t
            ? this.qd
            : e?.fullscreen;
        }
        async Ie(t) {
          if (!c && (this.Ng(), !this.$state.pictureInPicture()))
            return (
              t && this.g.i.k("media-enter-pip-request", t),
              await this.D().pictureInPicture.enter()
            );
        }
        async He(t) {
          if (!c && (this.Ng(), this.$state.pictureInPicture()))
            return (
              t && this.g.i.k("media-exit-pip-request", t),
              await this.D().pictureInPicture.exit()
            );
        }
        Ng() {
          if (!this.$state.canPictureInPicture())
            throw Error("[vidstack] no pip support");
        }
        Lj() {
          this.zc.defaultDelay = this.$props.controlsDelay();
        }
        Mj() {
          let { canSetAudioGain: t } = this.$state,
            e = !!this.D()?.audioGain?.supported;
          t.set(e);
        }
        Nj() {
          let { canAirPlay: t } = this.$state,
            e = !!this.D()?.airPlay?.supported;
          t.set(e);
        }
        Oj() {
          let { canGoogleCast: t, source: e } = this.$state,
            i = g && !p && V(e());
          t.set(i);
        }
        Pj() {
          let { canFullscreen: t } = this.$state,
            e = this.qd.supported || !!this.D()?.fullscreen?.supported;
          t.set(e);
        }
        Qj() {
          let { canPictureInPicture: t } = this.$state,
            e = !!this.D()?.pictureInPicture?.supported;
          t.set(e);
        }
        async "media-airplay-request"(t) {
          try {
            await this.Og(t);
          } catch (t) {}
        }
        async Og(t) {
          try {
            let e = this.D()?.airPlay;
            if (!e?.supported) throw Error("No AirPlay adapter.");
            return (
              t && this.g.i.k("media-airplay-request", t), await e.prompt()
            );
          } catch (t) {
            throw (this.g.i.vb("media-airplay-request"), t);
          }
        }
        async "media-google-cast-request"(t) {
          try {
            await this.Pg(t);
          } catch (t) {}
        }
        async Pg(t) {
          try {
            let { canGoogleCast: e } = this.$state;
            if (!(0, l.peek)(e)) {
              let t = Error("Cast not available.");
              throw ((t.code = "CAST_NOT_AVAILABLE"), t);
            }
            if ((K("https://www.gstatic.com"), !this.rd)) {
              let t = await i
                .e(7875)
                .then(i.bind(i, 27875))
                .then(function (t) {
                  return t.loader;
                });
              this.rd = new t.GoogleCastLoader();
            }
            await this.rd.prompt(this.a),
              t && this.g.i.k("media-google-cast-request", t);
            let s =
              "disconnected" !== (0, l.peek)(this.$state.remotePlaybackState);
            s &&
              this.$state.savedState.set({
                paused: (0, l.peek)(this.$state.paused),
                currentTime: (0, l.peek)(this.$state.currentTime),
              }),
              this.$state.remotePlaybackLoader.set(s ? this.rd : null);
          } catch (t) {
            throw (this.g.i.vb("media-google-cast-request"), t);
          }
        }
        "media-clip-start-change-request"(t) {
          let { clipStartTime: e } = this.$state;
          e.set(t.detail);
        }
        "media-clip-end-change-request"(t) {
          let { clipEndTime: e } = this.$state;
          e.set(t.detail),
            this.dispatch("duration-change", { detail: t.detail, trigger: t });
        }
        "media-duration-change-request"(t) {
          let { providedDuration: e, clipEndTime: i } = this.$state;
          e.set(t.detail),
            0 >= i() &&
              this.dispatch("duration-change", {
                detail: t.detail,
                trigger: t,
              });
        }
        "media-audio-track-change-request"(t) {
          let { logger: e, audioTracks: i } = this.a;
          if (i.readonly) return;
          let s = i[t.detail];
          if (s) {
            let e = t.type;
            this.g.i.k(e, t), (s.selected = !0);
          }
        }
        async "media-enter-fullscreen-request"(t) {
          try {
            await this.Kg(t.detail, t);
          } catch (e) {
            this._c(e, t);
          }
        }
        async "media-exit-fullscreen-request"(t) {
          try {
            await this.Mg(t.detail, t);
          } catch (e) {
            this._c(e, t);
          }
        }
        async Rd(t) {
          let e = (0, l.peek)(this.$props.fullscreenOrientation),
            i = t.detail;
          if (!(0, l.isUndefined)(e) && "none" !== e && this.cb.supported) {
            if (i) {
              if (this.cb.locked) return;
              this.dispatch("media-orientation-lock-request", {
                detail: e,
                trigger: t,
              });
            } else
              this.cb.locked &&
                this.dispatch("media-orientation-unlock-request", {
                  trigger: t,
                });
          }
        }
        _c(t, e) {
          this.Ca.W(this.createEvent("fullscreen-error", { detail: eT(t) }));
        }
        async "media-orientation-lock-request"(t) {
          let e = t.type;
          try {
            this.g.i.k(e, t), await this.cb.lock(t.detail);
          } catch (t) {
            this.g.i.vb(e);
          }
        }
        async "media-orientation-unlock-request"(t) {
          let e = t.type;
          try {
            this.g.i.k(e, t), await this.cb.unlock();
          } catch (t) {
            this.g.i.vb(e);
          }
        }
        async "media-enter-pip-request"(t) {
          try {
            await this.Ie(t);
          } catch (e) {
            this.Qg(e, t);
          }
        }
        async "media-exit-pip-request"(t) {
          try {
            await this.He(t);
          } catch (e) {
            this.Qg(e, t);
          }
        }
        Qg(t, e) {
          this.Ca.W(
            this.createEvent("picture-in-picture-error", { detail: eT(t) }),
          );
        }
        "media-live-edge-request"(t) {
          let { live: e, liveEdge: i, canSeek: s } = this.$state;
          if (!(!e() || i()) && s()) {
            this.g.i.k("media-seek-request", t);
            try {
              this.Jg();
            } catch (t) {
              this.g.i.vb("media-seek-request");
            }
          }
        }
        async "media-loop-request"(t) {
          try {
            (this.g.Pb = !0), (this.g.Cc = !0), await this.Bc(t);
          } catch (t) {
            this.g.Pb = !1;
          }
        }
        "media-user-loop-change-request"(t) {
          this.$state.userPrefersLoop.set(t.detail);
        }
        async "media-pause-request"(t) {
          if (!this.$state.paused())
            try {
              await this.Fe(t);
            } catch (t) {}
        }
        async "media-play-request"(t) {
          if (this.$state.paused())
            try {
              await this.Bc(t);
            } catch (t) {}
        }
        "media-rate-change-request"(t) {
          let { playbackRate: e, canSetPlaybackRate: i } = this.$state;
          if (e() === t.detail || !i()) return;
          let s = this.D();
          s?.setPlaybackRate &&
            (this.g.i.k("media-rate-change-request", t),
            s.setPlaybackRate(t.detail));
        }
        "media-audio-gain-change-request"(t) {
          try {
            this.Ig(t.detail, t);
          } catch (t) {}
        }
        "media-quality-change-request"(t) {
          let { qualities: e, storage: i, logger: s } = this.a;
          if (e.readonly) return;
          this.g.i.k("media-quality-change-request", t);
          let a = t.detail;
          if (a < 0)
            e.autoSelect(t), t.isOriginTrusted && i?.setVideoQuality?.(null);
          else {
            let s = e[a];
            s &&
              ((s.selected = !0),
              t.isOriginTrusted &&
                i?.setVideoQuality?.({
                  id: s.id,
                  width: s.width,
                  height: s.height,
                  bitrate: s.bitrate,
                }));
          }
        }
        "media-pause-controls-request"(t) {
          let e = t.type;
          this.g.i.k(e, t), this.zc.pause(t);
        }
        "media-resume-controls-request"(t) {
          let e = t.type;
          this.g.i.k(e, t), this.zc.resume(t);
        }
        "media-seek-request"(t) {
          let {
              seekableStart: e,
              seekableEnd: i,
              ended: s,
              canSeek: a,
              live: n,
              userBehindLiveEdge: r,
              clipStartTime: h,
            } = this.$state,
            l = t.detail;
          s() && (this.g.Cc = !0);
          let o = t.type;
          (this.g.Ka = !1), this.g.i.vb(o);
          let d = l + h(),
            c =
              Math.floor(d) === Math.floor(i())
                ? i()
                : Math.min(Math.max(e() + 0.1, d), i() - 0.1);
          Number.isFinite(c) &&
            a() &&
            (this.g.i.k(o, t),
            this.D().setCurrentTime(c),
            n() && t.isOriginTrusted && Math.abs(i() - c) >= 2 && r.set(!0));
        }
        "media-seeking-request"(t) {
          let e = t.type;
          this.g.i.k(e, t), this.$state.seeking.set(!0), (this.g.Ka = !0);
        }
        "media-start-loading"(t) {
          if (this.$state.canLoad()) return;
          let e = t.type;
          this.g.i.k(e, t), this.Ca.W(this.createEvent("can-load"));
        }
        "media-poster-start-loading"(t) {
          if (this.$state.canLoadPoster()) return;
          let e = t.type;
          this.g.i.k(e, t), this.Ca.W(this.createEvent("can-load-poster"));
        }
        "media-text-track-change-request"(t) {
          let { index: e, mode: i } = t.detail,
            s = this.a.textTracks[e];
          if (s) {
            let e = t.type;
            this.g.i.k(e, t), s.setMode(i, t);
          }
        }
        "media-mute-request"(t) {
          if (this.$state.muted()) return;
          let e = t.type;
          this.g.i.k(e, t), this.D().setMuted(!0);
        }
        "media-unmute-request"(t) {
          let { muted: e, volume: i } = this.$state;
          if (!e()) return;
          let s = t.type;
          this.g.i.k(s, t),
            this.a.$provider().setMuted(!1),
            0 === i() && (this.g.i.k(s, t), this.D().setVolume(0.25));
        }
        "media-volume-change-request"(t) {
          let { muted: e, volume: i } = this.$state,
            s = t.detail;
          if (i() === s) return;
          let a = t.type;
          this.g.i.k(a, t),
            this.D().setVolume(s),
            s > 0 && e() && (this.g.i.k(a, t), this.D().setMuted(!1));
        }
        Ra(t, e, i) {}
      }
      function ez(t, e) {
        if (!t || !e) throw Error("[vidstack] media not ready");
      }
      function eQ(t, e) {
        if (!e?.supported) throw Error("[vidstack] no fullscreen support");
      }
      class eW {
        constructor() {
          (this.Ka = !1), (this.Pb = !1), (this.Cc = !1), (this.i = new eU());
        }
      }
      let e_ = new Set([
        "auto-play",
        "auto-play-fail",
        "can-load",
        "sources-change",
        "source-change",
        "load-start",
        "abort",
        "error",
        "loaded-metadata",
        "loaded-data",
        "can-play",
        "play",
        "play-fail",
        "pause",
        "playing",
        "seeking",
        "seeked",
        "waiting",
      ]);
      class eX extends tW {
        constructor(t, e) {
          super(),
            (this.g = t),
            (this.a = e),
            (this.v = new Map()),
            (this.sd = !1),
            (this.Vn = []),
            (this.Sn = [-1, -1]),
            (this.td = !1),
            (this.Dc = !1),
            (this.Le = null),
            (this.seeking = (0, l.functionThrottle)(
              (t) => {
                let { seeking: e, realCurrentTime: i, paused: s } = this.$state;
                e.set(!0),
                  i.set(t.detail),
                  this.E("media-seeking-request", t),
                  s() && ((this.Qb = t), this.Me()),
                  (this.Sn = [-1, -1]);
              },
              150,
              { leading: !0 },
            )),
            (this.Me = (0, l.functionDebounce)(() => {
              if (!this.Qb) return;
              this.td = !0;
              let { waiting: t, playing: e } = this.$state;
              t.set(!0), e.set(!1);
              let i = this.createEvent("waiting", { trigger: this.Qb });
              this.v.set("waiting", i),
                this.dispatch(i),
                (this.Qb = void 0),
                (this.td = !1);
            }, 300));
        }
        onAttach(t) {
          t.setAttribute("aria-busy", "true"),
            this.listen(
              "fullscreen-change",
              this["fullscreen-change"].bind(this),
            ),
            this.listen(
              "fullscreen-error",
              this["fullscreen-error"].bind(this),
            ),
            this.listen(
              "orientation-change",
              this["orientation-change"].bind(this),
            );
        }
        onConnect(t) {
          (0, l.effect)(this.Rj.bind(this)),
            this.Sj(),
            this.Tj(),
            this.Uj(),
            this.Vj(),
            (0, l.onDispose)(this.Wj.bind(this));
        }
        onDestroy() {
          let { audioTracks: t, qualities: e, textTracks: i } = this.a;
          t[tI.A](), e[tI.A](), i[tI.A](), this.Je();
        }
        W(t) {
          if (!this.scope) return;
          let e = t.type;
          (0, l.untrack)(() => this[t.type]?.(t)),
            c || (e_.has(e) && this.v.set(e, t), this.dispatch(t));
        }
        Vj() {
          this.Dc &&
            (requestAnimationFrame(() => {
              this.scope && this.a.remote.play(new l.DOMEvent("dom-connect"));
            }),
            (this.Dc = !1));
        }
        Wj() {
          this.Dc ||
            ((this.Dc = !this.$state.paused()), this.a.$provider()?.pause());
        }
        wb() {
          this.Rg(),
            (this.sd = !1),
            (this.g.Cc = !1),
            (this.g.Pb = !1),
            (this.td = !1),
            (this.Qb = void 0),
            this.v.clear();
        }
        E(t, e) {
          let i = this.g.i.ye(t);
          i && ((e.request = i), e.triggers.add(i));
        }
        Sj() {
          this.Ke(), this.Sg();
          let t = this.a.textTracks;
          (0, l.listenEvent)(t, "add", this.Ke.bind(this)),
            (0, l.listenEvent)(t, "remove", this.Ke.bind(this)),
            (0, l.listenEvent)(t, "mode-change", this.Sg.bind(this));
        }
        Tj() {
          let t = this.a.qualities;
          (0, l.listenEvent)(t, "add", this.md.bind(this)),
            (0, l.listenEvent)(t, "remove", this.md.bind(this)),
            (0, l.listenEvent)(t, "change", this._a.bind(this)),
            (0, l.listenEvent)(t, "auto-change", this.Xj.bind(this)),
            (0, l.listenEvent)(t, "readonly-change", this.Yj.bind(this));
        }
        Uj() {
          let t = this.a.audioTracks;
          (0, l.listenEvent)(t, "add", this.Tg.bind(this)),
            (0, l.listenEvent)(t, "remove", this.Tg.bind(this)),
            (0, l.listenEvent)(t, "change", this.Zj.bind(this));
        }
        Ke(t) {
          let { textTracks: e } = this.$state;
          e.set(this.a.textTracks.toArray()),
            this.dispatch("text-tracks-change", { detail: e(), trigger: t });
        }
        Sg(t) {
          t && this.E("media-text-track-change-request", t);
          let e = this.a.textTracks.selected,
            { textTrack: i } = this.$state;
          i() !== e &&
            (i.set(e),
            this.dispatch("text-track-change", { detail: e, trigger: t }));
        }
        Tg(t) {
          let { audioTracks: e } = this.$state;
          e.set(this.a.audioTracks.toArray()),
            this.dispatch("audio-tracks-change", { detail: e(), trigger: t });
        }
        Zj(t) {
          let { audioTrack: e } = this.$state;
          e.set(this.a.audioTracks.selected),
            t && this.E("media-audio-track-change-request", t),
            this.dispatch("audio-track-change", { detail: e(), trigger: t });
        }
        md(t) {
          let { qualities: e } = this.$state;
          e.set(this.a.qualities.toArray()),
            this.dispatch("qualities-change", { detail: e(), trigger: t });
        }
        _a(t) {
          let { quality: e } = this.$state;
          e.set(this.a.qualities.selected),
            t && this.E("media-quality-change-request", t),
            this.dispatch("quality-change", { detail: e(), trigger: t });
        }
        Xj() {
          let { qualities: t } = this.a,
            e = t.auto;
          this.$state.autoQuality.set(e), e || this.Je();
        }
        Ug() {
          this.Je(),
            (this.Le = (0, l.effect)(() => {
              let { qualities: t } = this.a,
                { mediaWidth: e, mediaHeight: i } = this.$state,
                s = e(),
                a = i();
              if (0 === s || 0 === a) return;
              let n = null,
                r = 1 / 0;
              for (let e of t) {
                let t = Math.abs(e.width - s) + Math.abs(e.height - a);
                t < r && ((r = t), (n = e));
              }
              n &&
                t[tI.fa](
                  n,
                  !0,
                  new l.DOMEvent("resize", { detail: { width: s, height: a } }),
                );
            }));
        }
        Je() {
          this.Le?.(), (this.Le = null);
        }
        Yj() {
          this.$state.canSetQuality.set(!this.a.qualities.readonly);
        }
        Rj() {
          let { canSetVolume: t, isGoogleCastConnected: e } = this.$state;
          if (e()) {
            t.set(!1);
            return;
          }
          x().then(t.set);
        }
        "provider-change"(t) {
          let e = this.a.$provider(),
            i = t.detail;
          e?.type !== i?.type &&
            (e?.destroy?.(),
            e?.scope?.dispose(),
            this.a.$provider.set(t.detail),
            e && null === t.detail && this.Vg(t));
        }
        "provider-loader-change"(t) {}
        "auto-play"(t) {
          this.$state.autoPlayError.set(null);
        }
        "auto-play-fail"(t) {
          this.$state.autoPlayError.set(t.detail), this.wb();
        }
        "can-load"(t) {
          this.$state.canLoad.set(!0),
            this.v.set("can-load", t),
            this.a.textTracks[Y._](),
            this.E("media-start-loading", t);
        }
        "can-load-poster"(t) {
          this.$state.canLoadPoster.set(!0),
            this.v.set("can-load-poster", t),
            this.E("media-poster-start-loading", t);
        }
        "media-type-change"(t) {
          let e = this.v.get("source-change");
          e && t.triggers.add(e);
          let i = this.$state.viewType();
          this.$state.mediaType.set(t.detail);
          let s = this.$state.providedViewType(),
            a = "unknown" === s ? t.detail : s;
          i !== a &&
            (c
              ? this.$state.inferredViewType.set(a)
              : setTimeout(() => {
                  requestAnimationFrame(() => {
                    this.scope &&
                      (this.$state.inferredViewType.set(t.detail),
                      this.dispatch("view-type-change", {
                        detail: a,
                        trigger: t,
                      }));
                  });
                }, 0));
        }
        "stream-type-change"(t) {
          let e = this.v.get("source-change");
          e && t.triggers.add(e);
          let { streamType: i, inferredStreamType: s } = this.$state;
          s.set(t.detail), (t.detail = i());
        }
        "rate-change"(t) {
          let { storage: e } = this.a,
            { canPlay: i } = this.$state;
          this.$state.playbackRate.set(t.detail),
            this.E("media-rate-change-request", t),
            i() && e?.setPlaybackRate?.(t.detail);
        }
        "remote-playback-change"(t) {
          let { remotePlaybackState: e, remotePlaybackType: i } = this.$state,
            { type: s, state: a } = t.detail,
            n = "connected" === a;
          i.set(s), e.set(a);
          let r =
            "airplay" === s
              ? "media-airplay-request"
              : "media-google-cast-request";
          if (n) this.E(r, t);
          else {
            let e = this.g.i.sg(r);
            e && ((t.request = e), t.triggers.add(e));
          }
        }
        "sources-change"(t) {
          let e = this.$state.sources(),
            i = t.detail;
          this.$state.sources.set(i), this._j(e, i, t);
        }
        _j(t, e, i) {
          let { qualities: s } = this.a,
            a = !1,
            n = !1;
          for (let a of t)
            if (d(a) && !e.some((t) => t.src === a.src)) {
              let t = s.getBySrc(a.src);
              t && (s[tI.dc](t, i), (n = !0));
            }
          for (let t of (n &&
            !s.length &&
            (this.$state.savedState.set(null), s[tI.A](i)),
          e)) {
            if (!d(t) || s.getBySrc(t.src)) continue;
            let e = {
              id: t.id ?? t.height + "p",
              bitrate: null,
              codec: null,
              ...t,
              selected: !1,
            };
            s[tI.ea](e, i), (a = !0);
          }
          a &&
            !s[tG.Ja] &&
            (this.Ug(), (s[tG.Ja] = this.Ug.bind(this)), s[tG.Xa](!0, i));
        }
        "source-change"(t) {
          t.isQualityChange = t.originEvent?.type === "quality-change";
          let e = t.detail;
          this.Vg(t, t.isQualityChange),
            this.v.set(t.type, t),
            this.$state.source.set(e),
            this.el?.setAttribute("aria-busy", "true");
        }
        Vg(t, e = !1) {
          let { audioTracks: i, qualities: s } = this.a;
          if (!e) {
            (this.Vn = []),
              (this.Sn = [-1, -1]),
              i[tI.A](t),
              s[tI.A](t),
              tr(this.$state, e),
              this.wb();
            return;
          }
          tr(this.$state, e), this.wb();
        }
        abort(t) {
          let e = this.v.get("source-change");
          e && t.triggers.add(e);
          let i = this.v.get("can-load");
          i && !t.triggers.hasType("can-load") && t.triggers.add(i);
        }
        "load-start"(t) {
          let e = this.v.get("source-change");
          e && t.triggers.add(e);
        }
        error(t) {
          this.$state.error.set(t.detail);
          let e = this.v.get("abort");
          e && t.triggers.add(e);
        }
        "loaded-metadata"(t) {
          let e = this.v.get("load-start");
          e && t.triggers.add(e);
        }
        "loaded-data"(t) {
          let e = this.v.get("load-start");
          e && t.triggers.add(e);
        }
        "can-play"(t) {
          let e = this.v.get("loaded-metadata");
          e && t.triggers.add(e),
            this.Wg(t.detail),
            this.el?.setAttribute("aria-busy", "false");
        }
        "can-play-through"(t) {
          this.Wg(t.detail);
          let e = this.v.get("can-play");
          e && t.triggers.add(e);
        }
        Wg(t) {
          let {
            seekable: e,
            buffered: i,
            intrinsicDuration: s,
            canPlay: a,
          } = this.$state;
          a.set(!0), i.set(t.buffered), e.set(t.seekable);
          let n = E(t.seekable) ?? 1 / 0;
          s.set(n);
        }
        "duration-change"(t) {
          let {
              live: e,
              intrinsicDuration: i,
              providedDuration: s,
              clipEndTime: a,
              ended: n,
            } = this.$state,
            r = t.detail;
          if (!e()) {
            let e = Number.isNaN(r) ? 0 : r;
            i.set(e), n() && this.Xg(t);
          }
          (s() > 0 || a() > 0) && t.stopImmediatePropagation();
        }
        progress(t) {
          let {
              buffered: e,
              bufferedEnd: i,
              seekable: s,
              seekableEnd: a,
              live: n,
              intrinsicDuration: r,
            } = this.$state,
            { buffered: h, seekable: l } = t.detail,
            o = E(h) ?? 1 / 0,
            d = h.length !== e().length,
            c = o > i(),
            u = E(l) ?? 1 / 0,
            p = l.length !== s().length,
            f = u > a();
          (d || c) && e.set(h),
            (p || f) && s.set(l),
            n() &&
              (r.set(u),
              this.dispatch("duration-change", { detail: u, trigger: t }));
        }
        play(t) {
          let {
            paused: e,
            autoPlayError: i,
            ended: s,
            autoPlaying: a,
            playsInline: n,
            pointer: r,
            muted: h,
            viewType: l,
            live: o,
            userBehindLiveEdge: d,
          } = this.$state;
          if ((this.$j(), !e())) {
            t.stopImmediatePropagation();
            return;
          }
          t.autoPlay = a();
          let c = this.v.get("waiting");
          c && t.triggers.add(c),
            this.E("media-play-request", t),
            this.v.set("play", t),
            e.set(!1),
            i.set(null),
            t.autoPlay &&
              (this.W(
                this.createEvent("auto-play", {
                  detail: { muted: h() },
                  trigger: t,
                }),
              ),
              a.set(!1)),
            (s() || this.g.Cc) &&
              ((this.g.Cc = !1),
              s.set(!1),
              this.W(this.createEvent("replay", { trigger: t }))),
            n() ||
              "video" !== l() ||
              "coarse" !== r() ||
              this.a.remote.enterFullscreen("prefer-media", t),
            o() && !d() && this.a.remote.seekToLiveEdge(t);
        }
        $j(t) {
          if (!(0, l.peek)(this.a.$provider)) return;
          let {
              ended: e,
              seekableStart: i,
              clipStartTime: s,
              clipEndTime: a,
              realCurrentTime: n,
              duration: r,
            } = this.$state,
            h =
              n() < s() ||
              (a() > 0 && n() >= a()) ||
              0.1 > Math.abs(n() - r()) ||
              e();
          return (
            h &&
              this.dispatch("media-seek-request", {
                detail: (s() > 0 ? 0 : i()) + 0.1,
                trigger: t,
              }),
            h
          );
        }
        "play-fail"(t) {
          let { muted: e, autoPlaying: i } = this.$state,
            s = this.v.get("play");
          s && t.triggers.add(s), this.E("media-play-request", t);
          let { paused: a, playing: n } = this.$state;
          a.set(!0),
            n.set(!1),
            this.wb(),
            this.v.set("play-fail", t),
            t.autoPlay &&
              (this.W(
                this.createEvent("auto-play-fail", {
                  detail: { muted: e(), error: t.detail },
                  trigger: t,
                }),
              ),
              i.set(!1));
        }
        playing(t) {
          let e = this.v.get("play"),
            i = this.v.get("seeked");
          e ? t.triggers.add(e) : i && t.triggers.add(i),
            setTimeout(() => this.wb(), 0);
          let {
            paused: s,
            playing: a,
            live: n,
            liveSyncPosition: r,
            seekableEnd: h,
            started: l,
            currentTime: o,
            seeking: d,
            ended: c,
          } = this.$state;
          if ((s.set(!1), a.set(!0), d.set(!1), c.set(!1), this.g.Pb)) {
            this.g.Pb = !1;
            return;
          }
          if (n() && !l() && 0 === o()) {
            let t = r() ?? h() - 2;
            Number.isFinite(t) && this.a.$provider().setCurrentTime(t);
          }
          this.started(t);
        }
        started(t) {
          let { started: e } = this.$state;
          e() ||
            (e.set(!0), this.W(this.createEvent("started", { trigger: t })));
        }
        pause(t) {
          this.el?.isConnected || (this.Dc = !0),
            this.E("media-pause-request", t);
          let e = this.v.get("seeked");
          e && t.triggers.add(e);
          let { paused: i, playing: s } = this.$state;
          i.set(!0),
            s.set(!1),
            this.sd &&
              setTimeout(() => {
                this.W(this.createEvent("end", { trigger: t })), (this.sd = !1);
              }, 0),
            this.wb();
        }
        "time-change"(t) {
          if (this.g.Pb) {
            t.stopImmediatePropagation();
            return;
          }
          let {
              waiting: e,
              played: i,
              clipEndTime: s,
              realCurrentTime: a,
              currentTime: n,
            } = this.$state,
            r = t.detail,
            h = s();
          for (let i of (a.set(r), this.Wn(), e.set(!1), this.a.textTracks))
            i[Y.Fb](r, t);
          h > 0 &&
            r >= h &&
            ((this.sd = !0),
            this.dispatch("media-pause-request", { trigger: t })),
            this.ak(),
            this.dispatch("time-update", {
              detail: { currentTime: n(), played: i() },
              trigger: t,
            });
        }
        Wn() {
          var t, e, i;
          let s, a;
          let { currentTime: n, played: r, paused: h } = this.$state;
          h() ||
            ((this.Sn =
              ((t = this.Vn),
              (e = this.Sn),
              (i = n()),
              (s = e[0]),
              (a = e[1]),
              i < s
                ? [i, -1]
                : (i === s ||
                    (-1 === s
                      ? (e[0] = i)
                      : (i > s && ((e[1] = i), -1 === a && t.push(e)),
                        (function (t) {
                          if (t.length <= 1) return;
                          t.sort((t, e) => t[0] - e[0]);
                          let e = [],
                            i = t[0];
                          for (let s = 1; s < t.length; s++) {
                            let a = t[s];
                            i[1] >= a[0] - 1
                              ? (i = [i[0], Math.max(i[1], a[1])])
                              : (e.push(i), (i = a));
                          }
                          e.push(i);
                        })(t))),
                  e))),
            r.set(new S(this.Vn)));
        }
        Xg(t) {
          let { clipStartTime: e, clipEndTime: i, duration: s } = this.$state;
          e() > 0 ||
            i() > 0 ||
            this.W(
              this.createEvent("time-change", { detail: s(), trigger: t }),
            );
        }
        ak() {
          let { storage: t } = this.a,
            { canPlay: e, realCurrentTime: i } = this.$state;
          e() && t?.setTime?.(i());
        }
        "audio-gain-change"(t) {
          let { storage: e } = this.a,
            { canPlay: i, audioGain: s } = this.$state;
          s.set(t.detail),
            this.E("media-audio-gain-change-request", t),
            i() && e?.setAudioGain?.(s());
        }
        "volume-change"(t) {
          let { storage: e } = this.a,
            { volume: i, muted: s, canPlay: a } = this.$state,
            n = t.detail;
          i.set(n.volume),
            s.set(n.muted || 0 === n.volume),
            this.E("media-volume-change-request", t),
            this.E(n.muted ? "media-mute-request" : "media-unmute-request", t),
            a() && (e?.setVolume?.(i()), e?.setMuted?.(s()));
        }
        seeked(t) {
          let {
            seeking: e,
            currentTime: i,
            realCurrentTime: s,
            paused: a,
            seekableEnd: n,
            ended: r,
          } = this.$state;
          if (this.g.Ka) e.set(!0), t.stopImmediatePropagation();
          else if (e()) {
            let i = this.v.get("waiting");
            i && t.triggers.add(i);
            let n = this.v.get("seeking");
            n && !t.triggers.has(n) && t.triggers.add(n),
              a() && this.Rg(),
              e.set(!1),
              s.set(t.detail),
              this.E("media-seek-request", t);
            let r = t?.originEvent;
            r?.isTrusted && !/seek/.test(r.type) && this.started(t);
          }
          Math.floor(i()) !== Math.floor(n()) ? r.set(!1) : this.end(t);
        }
        waiting(t) {
          this.td ||
            this.g.Ka ||
            (t.stopImmediatePropagation(), (this.Qb = t), this.Me());
        }
        end(t) {
          let { loop: e, ended: i } = this.$state;
          if (!(!e() && i())) {
            if (e()) {
              setTimeout(() => {
                requestAnimationFrame(() => {
                  this.$j(t),
                    this.dispatch("media-loop-request", { trigger: t });
                });
              }, 10);
              return;
            }
            setTimeout(() => this.mc(t), 0);
          }
        }
        mc(t) {
          let { storage: e } = this.a,
            { paused: i, seeking: s, ended: a, duration: n } = this.$state;
          this.Xg(t),
            i() || this.dispatch("pause", { trigger: t }),
            s() && this.dispatch("seeked", { detail: n(), trigger: t }),
            a.set(!0),
            this.wb(),
            e?.setTime?.(n(), !0),
            this.dispatch("ended", { trigger: t });
        }
        Rg() {
          this.Me.cancel(), this.$state.waiting.set(!1);
        }
        "fullscreen-change"(t) {
          let e = t.detail;
          this.$state.fullscreen.set(e),
            this.E(
              e
                ? "media-enter-fullscreen-request"
                : "media-exit-fullscreen-request",
              t,
            );
        }
        "fullscreen-error"(t) {
          this.E("media-enter-fullscreen-request", t),
            this.E("media-exit-fullscreen-request", t);
        }
        "orientation-change"(t) {
          let e = t.detail.lock;
          this.E(
            e
              ? "media-orientation-lock-request"
              : "media-orientation-unlock-request",
            t,
          );
        }
        "picture-in-picture-change"(t) {
          let e = t.detail;
          this.$state.pictureInPicture.set(e),
            this.E(e ? "media-enter-pip-request" : "media-exit-pip-request", t);
        }
        "picture-in-picture-error"(t) {
          this.E("media-enter-pip-request", t),
            this.E("media-exit-pip-request", t);
        }
        "title-change"(t) {
          t.trigger &&
            (t.stopImmediatePropagation(),
            this.$state.inferredTitle.set(t.detail));
        }
        "poster-change"(t) {
          t.trigger &&
            (t.stopImmediatePropagation(),
            this.$state.inferredPoster.set(t.detail));
        }
      }
      class eY extends tW {
        onSetup() {
          if ((this.Ib(), !c))
            for (let t of [
              this.ck,
              this.dk,
              this.Qn,
              this.Rn,
              this.Yd,
              this.Da,
              this.fk,
              this.gk,
              this.hk,
              this.ik,
              this.jk,
              this.Ne,
              this.kk,
              this.lk,
              this.ud,
            ])
              (0, l.effect)(t.bind(this));
        }
        Ib() {
          let t = {
              duration: "providedDuration",
              loop: "providedLoop",
              poster: "providedPoster",
              streamType: "providedStreamType",
              title: "providedTitle",
              viewType: "providedViewType",
            },
            e = new Set(["currentTime", "paused", "playbackRate", "volume"]);
          for (let i of Object.keys(this.$props))
            e.has(i) || this.$state[t[i] ?? i]?.set(this.$props[i]());
          this.$state.muted.set(
            this.$props.muted() || 0 === this.$props.volume(),
          );
        }
        lk() {
          let {
              viewType: t,
              streamType: e,
              title: i,
              poster: s,
              loop: a,
            } = this.$props,
            n = this.$state;
          n.providedPoster.set(s()),
            n.providedStreamType.set(e()),
            n.providedViewType.set(t()),
            n.providedTitle.set(i()),
            n.providedLoop.set(a());
        }
        bk() {}
        ck() {
          let { artist: t, artwork: e } = this.$props;
          this.$state.artist.set(t()), this.$state.artwork.set(e());
        }
        ud() {
          let { title: t } = this.$state;
          this.dispatch("title-change", { detail: t() });
        }
        dk() {
          let t = this.$props.autoPlay() || this.$props.autoplay();
          this.$state.autoPlay.set(t),
            this.dispatch("auto-play-change", { detail: t });
        }
        jk() {
          let t = this.$state.loop();
          this.dispatch("loop-change", { detail: t });
        }
        Yd() {
          let t = this.$props.controls();
          this.$state.controls.set(t);
        }
        kk() {
          let { poster: t } = this.$state;
          this.dispatch("poster-change", { detail: t() });
        }
        Da() {
          let t = this.$props.crossOrigin() ?? this.$props.crossorigin();
          this.$state.crossOrigin.set(!0 === t ? "" : t);
        }
        fk() {
          let { duration: t } = this.$props;
          this.dispatch("media-duration-change-request", { detail: t() });
        }
        Ne() {
          let t = this.$props.playsInline() || this.$props.playsinline();
          this.$state.playsInline.set(t),
            this.dispatch("plays-inline-change", { detail: t });
        }
        Qn() {
          let { clipStartTime: t } = this.$props;
          this.dispatch("media-clip-start-change-request", { detail: t() });
        }
        Rn() {
          let { clipEndTime: t } = this.$props;
          this.dispatch("media-clip-end-change-request", { detail: t() });
        }
        gk() {
          this.dispatch("live-change", { detail: this.$state.live() });
        }
        ik() {
          this.$state.liveEdgeTolerance.set(this.$props.liveEdgeTolerance()),
            this.$state.minLiveDVRWindow.set(this.$props.minLiveDVRWindow());
        }
        hk() {
          this.dispatch("live-edge-change", { detail: this.$state.liveEdge() });
        }
      }
      let eZ = class t extends tW {
        constructor() {
          super();
        }
        onConnect() {
          (0, l.effect)(this.mk.bind(this)), (0, l.effect)(this.nk.bind(this));
          let e = this.ok.bind(this);
          for (let i of t.Yg) navigator.mediaSession.setActionHandler(i, e);
          (0, l.onDispose)(this.Ga.bind(this));
        }
        Ga() {
          for (let e of t.Yg) navigator.mediaSession.setActionHandler(e, null);
        }
        mk() {
          let { title: t, artist: e, artwork: i, poster: s } = this.$state;
          navigator.mediaSession.metadata = new MediaMetadata({
            title: t(),
            artist: e(),
            artwork: i() ?? [{ src: s() }],
          });
        }
        nk() {
          let { canPlay: t, paused: e } = this.$state;
          navigator.mediaSession.playbackState = t()
            ? e()
              ? "paused"
              : "playing"
            : "none";
        }
        ok(t) {
          let e = new l.DOMEvent("media-session-action", { detail: t });
          switch (t.action) {
            case "play":
              this.dispatch("media-play-request", { trigger: e });
              break;
            case "pause":
              this.dispatch("media-pause-request", { trigger: e });
              break;
            case "seekto":
            case "seekforward":
            case "seekbackward":
              this.dispatch("media-seek-request", {
                detail: (0, l.isNumber)(t.seekTime)
                  ? t.seekTime
                  : this.$state.currentTime() + (t.seekOffset ?? 10),
                trigger: e,
              });
          }
        }
      };
      eZ.Yg = ["play", "pause", "seekforward", "seekbackward", "seekto"];
      let eJ = (0, l.signal)(!1);
      c ||
        ((0, l.listenEvent)(document, "pointerdown", () => {
          eJ.set(!1);
        }),
        (0, l.listenEvent)(document, "keydown", (t) => {
          t.metaKey || t.altKey || t.ctrlKey || eJ.set(!0);
        }));
      class e0 extends l.ViewController {
        constructor() {
          super(...arguments), (this.Ec = (0, l.signal)(!1));
        }
        onConnect(t) {
          (0, l.effect)(() => {
            if (!eJ()) {
              this.Ec.set(!1),
                e1(t, !1),
                this.listen("pointerenter", this.Pe.bind(this)),
                this.listen("pointerleave", this.Qe.bind(this));
              return;
            }
            let e = document.activeElement === t;
            this.Ec.set(e),
              e1(t, e),
              this.listen("focus", this.Fc.bind(this)),
              this.listen("blur", this.rk.bind(this));
          });
        }
        focused() {
          return this.Ec();
        }
        Fc() {
          this.Ec.set(!0), e1(this.el, !0);
        }
        rk() {
          this.Ec.set(!1), e1(this.el, !1);
        }
        Pe() {
          e2(this.el, !0);
        }
        Qe() {
          e2(this.el, !1);
        }
      }
      function e1(t, e) {
        (0, l.setAttribute)(t, "data-focus", e),
          (0, l.setAttribute)(t, "data-hocus", e);
      }
      function e2(t, e) {
        (0, l.setAttribute)(t, "data-hocus", e),
          (0, l.setAttribute)(t, "data-hover", e);
      }
      var e5 = Object.defineProperty,
        e3 = Object.getOwnPropertyDescriptor,
        e7 = (t, e, i, s) => {
          for (
            var a, n = s > 1 ? void 0 : s ? e3(e, i) : e, r = t.length - 1;
            r >= 0;
            r--
          )
            (a = t[r]) && (n = (s ? a(e, i, n) : a(n)) || n);
          return s && n && e5(e, i, n), n;
        };
      let e6 = class t extends l.Component {
        constructor() {
          super(), (this.canPlayQueue = new eH()), (this.Se = !1), new eY();
          let t = {
            player: this,
            qualities: new tK(),
            audioTracks: new tV(),
            storage: null,
            $provider: (0, l.signal)(null),
            $providerSetup: (0, l.signal)(!1),
            $props: this.$props,
            $state: this.$state,
          };
          (t.remote = this.remoteControl = new to(void 0)),
            t.remote.setPlayer(this),
            (t.textTracks = new tL()),
            (t.textTracks[Y.Eb] = this.$state.crossOrigin),
            (t.textRenderers = new tA(t)),
            (t.ariaKeys = {}),
            (this.a = t),
            (0, l.provideContext)(th, t),
            (this.orientation = new t7()),
            new e0(),
            new tY(t);
          let e = new eW();
          (this.Ca = new eX(e, t)),
            (this.X = new eB(this.Ca, e, t)),
            (t.delegate = new eK(this.Ca.W.bind(this.Ca), t)),
            "undefined" != typeof navigator &&
              "mediaSession" in navigator &&
              new eZ(),
            new eG("load", this.startLoading.bind(this)),
            new eG("posterLoad", this.startLoadingPoster.bind(this));
        }
        get p() {
          return this.a.$provider();
        }
        get wd() {
          return this.$props;
        }
        onSetup() {
          this.sk(),
            (0, l.effect)(this.tk.bind(this)),
            (0, l.effect)(this.uk.bind(this)),
            (0, l.effect)(this.gc.bind(this)),
            (0, l.effect)(this.Gc.bind(this)),
            (0, l.effect)(this.Rb.bind(this)),
            (0, l.effect)(this.Ne.bind(this)),
            (0, l.effect)(this.Re.bind(this));
        }
        onAttach(t) {
          t.setAttribute("data-media-player", ""),
            tm(t, "tabindex", "0"),
            tm(t, "role", "region"),
            (0, l.effect)(this.vk.bind(this)),
            c ? this.ud() : (0, l.effect)(this.ud.bind(this)),
            c ? this.Zg() : (0, l.effect)(this.Zg.bind(this)),
            (0, l.listenEvent)(t, "find-media-player", this.wk.bind(this));
        }
        onConnect(t) {
          f && (0, l.setAttribute)(t, "data-iphone", "");
          let e = window.matchMedia("(pointer: coarse)");
          this._g(e), (e.onchange = this._g.bind(this));
          let i = new ResizeObserver(
            (0, l.animationFrameThrottle)(this.qa.bind(this)),
          );
          i.observe(t),
            (0, l.effect)(this.qa.bind(this)),
            this.dispatch("media-player-connect", {
              detail: this,
              bubbles: !0,
              composed: !0,
            }),
            (0, l.onDispose)(() => {
              i.disconnect(), (e.onchange = null);
            });
        }
        onDestroy() {
          (this.a.player = null), this.canPlayQueue.A();
        }
        ud() {
          let t = this.$el,
            { title: e, live: i, viewType: s, providedTitle: a } = this.$state,
            n = i(),
            r = (0, l.uppercaseFirstChar)(s()),
            h =
              "Unknown" !== r
                ? `${n ? "Live " : ""}${r}`
                : n
                  ? "Live"
                  : "Media",
            o = e();
          (0, l.setAttribute)(
            this.el,
            "aria-label",
            `${h} Player` + (o ? ` - ${o}` : ""),
          ),
            !c &&
              t?.hasAttribute("title") &&
              ((this.Se = !0), t?.removeAttribute("title"));
        }
        Zg() {
          let t = this.orientation.landscape ? "landscape" : "portrait";
          this.$state.orientation.set(t),
            (0, l.setAttribute)(this.el, "data-orientation", t),
            this.qa();
        }
        tk() {
          this.$state.canPlay() && this.p
            ? this.canPlayQueue.Ya()
            : this.canPlayQueue.aa();
        }
        sk() {
          if (t[eR]) {
            this.setAttributes(t[eR]);
            return;
          }
          let e = {
              "data-load": function () {
                return this.$props.load();
              },
              "data-captions": function () {
                let t = this.$state.textTrack();
                return !!t && ti(t);
              },
              "data-ios-controls": function () {
                return this.$state.iOSControls();
              },
              "data-controls": function () {
                return this.controls.showing;
              },
              "data-buffering": function () {
                let { canLoad: t, canPlay: e, waiting: i } = this.$state;
                return t() && (!e() || i());
              },
              "data-error": function () {
                let { error: t } = this.$state;
                return !!t();
              },
              "data-autoplay-error": function () {
                let { autoPlayError: t } = this.$state;
                return !!t();
              },
            },
            i = {
              autoPlay: "autoplay",
              canAirPlay: "can-airplay",
              canPictureInPicture: "can-pip",
              pictureInPicture: "pip",
              playsInline: "playsinline",
              remotePlaybackState: "remote-state",
              remotePlaybackType: "remote-type",
              isAirPlayConnected: "airplay",
              isGoogleCastConnected: "google-cast",
            };
          for (let t of eV)
            e["data-" + (i[t] ?? (0, l.camelToKebabCase)(t))] = function () {
              return this.$state[t]();
            };
          delete e.title, (t[eR] = e), this.setAttributes(e);
        }
        wk(t) {
          t.detail(this);
        }
        qa() {
          if (c || !this.el) return;
          let t = this.el.clientWidth,
            e = this.el.clientHeight;
          this.$state.width.set(t),
            this.$state.height.set(e),
            (0, l.setStyle)(this.el, "--player-width", t + "px"),
            (0, l.setStyle)(this.el, "--player-height", e + "px");
        }
        _g(t) {
          if (c) return;
          let e = t.matches ? "coarse" : "fine";
          (0, l.setAttribute)(this.el, "data-pointer", e),
            this.$state.pointer.set(e),
            this.qa();
        }
        get provider() {
          return this.p;
        }
        get controls() {
          return this.X.zc;
        }
        set controls(t) {
          this.wd.controls.set(t);
        }
        get title() {
          return (0, l.peek)(this.$state.providedTitle);
        }
        set title(t) {
          if (this.Se) {
            this.Se = !1;
            return;
          }
          this.$state.providedTitle.set(t);
        }
        get qualities() {
          return this.a.qualities;
        }
        get audioTracks() {
          return this.a.audioTracks;
        }
        get textTracks() {
          return this.a.textTracks;
        }
        get textRenderers() {
          return this.a.textRenderers;
        }
        get duration() {
          return this.$state.duration();
        }
        set duration(t) {
          this.wd.duration.set(t);
        }
        get paused() {
          return (0, l.peek)(this.$state.paused);
        }
        set paused(t) {
          this.$g(t);
        }
        gc() {
          this.$g(this.$props.paused());
        }
        $g(t) {
          t
            ? this.canPlayQueue.k("paused", () => this.X.Fe())
            : this.canPlayQueue.k("paused", () => this.X.Bc());
        }
        get muted() {
          return (0, l.peek)(this.$state.muted);
        }
        set muted(t) {
          this.wd.muted.set(t);
        }
        uk() {
          this.xk(this.$props.muted());
        }
        xk(t) {
          this.canPlayQueue.k("muted", () => {
            this.p && this.p.setMuted(t);
          });
        }
        get currentTime() {
          return (0, l.peek)(this.$state.currentTime);
        }
        set currentTime(t) {
          this.ah(t);
        }
        Rb() {
          this.ah(this.$props.currentTime());
        }
        ah(t) {
          this.canPlayQueue.k("currentTime", () => {
            let {
              currentTime: e,
              clipStartTime: i,
              seekableStart: s,
              seekableEnd: a,
            } = this.$state;
            t !== (0, l.peek)(e) &&
              (0, l.peek)(() => {
                if (!this.p) return;
                let e = t + i(),
                  n =
                    Math.floor(e) === Math.floor(a())
                      ? a()
                      : Math.min(Math.max(s() + 0.1, e), a() - 0.1);
                Number.isFinite(n) && this.p.setCurrentTime(n);
              });
          });
        }
        get volume() {
          return (0, l.peek)(this.$state.volume);
        }
        set volume(t) {
          this.wd.volume.set(t);
        }
        Gc() {
          this.yk(this.$props.volume());
        }
        yk(t) {
          let e = tp(0, t, 1);
          this.canPlayQueue.k("volume", () => {
            this.p && this.p.setVolume(e);
          });
        }
        get playbackRate() {
          return (0, l.peek)(this.$state.playbackRate);
        }
        set playbackRate(t) {
          this.bh(t);
        }
        Re() {
          this.bh(this.$props.playbackRate());
        }
        bh(t) {
          this.canPlayQueue.k("rate", () => {
            this.p && this.p.setPlaybackRate?.(t);
          });
        }
        Ne() {
          this.zk(this.$props.playsInline());
        }
        zk(t) {
          this.canPlayQueue.k("playsinline", () => {
            this.p && this.p.setPlaysInline?.(t);
          });
        }
        vk() {
          let t = this.$props.storage(),
            e = (0, l.isString)(t) ? new td() : t;
          if (e?.onChange) {
            let { source: i } = this.$state,
              s = (0, l.isString)(t) ? t : this.el?.id,
              a = (0, l.computed)(this.Ak.bind(this));
            (0, l.effect)(() => e.onChange(i(), a(), s || void 0));
          }
          (this.a.storage = e),
            this.a.textTracks.setStorage(e),
            (0, l.onDispose)(() => {
              e?.onDestroy?.(),
                (this.a.storage = null),
                this.a.textTracks.setStorage(null);
            });
        }
        Ak() {
          let { clipStartTime: t, clipEndTime: e } = this.$props,
            { source: i } = this.$state,
            s = i();
          return s.src ? `${s.src}:${t()}:${e()}` : null;
        }
        async play(t) {
          return this.X.Bc(t);
        }
        async pause(t) {
          return this.X.Fe(t);
        }
        async enterFullscreen(t, e) {
          return this.X.Kg(t, e);
        }
        async exitFullscreen(t, e) {
          return this.X.Mg(t, e);
        }
        enterPictureInPicture(t) {
          return this.X.Ie(t);
        }
        exitPictureInPicture(t) {
          return this.X.He(t);
        }
        seekToLiveEdge(t) {
          this.X.Jg(t);
        }
        startLoading(t) {
          this.a.delegate.c("can-load", void 0, t);
        }
        startLoadingPoster(t) {
          this.a.delegate.c("can-load-poster", void 0, t);
        }
        requestAirPlay(t) {
          return this.X.Og(t);
        }
        requestGoogleCast(t) {
          return this.X.Pg(t);
        }
        setAudioGain(t, e) {
          return this.X.Ig(t, e);
        }
        destroy() {
          super.destroy(),
            this.a.remote.setPlayer(null),
            this.dispatch("destroy");
        }
      };
      (e6.props = {
        artist: "",
        artwork: null,
        autoplay: !1,
        autoPlay: !1,
        clipStartTime: 0,
        clipEndTime: 0,
        controls: !1,
        currentTime: 0,
        crossorigin: null,
        crossOrigin: null,
        duration: -1,
        fullscreenOrientation: "landscape",
        googleCast: {},
        load: "visible",
        posterLoad: "visible",
        logLevel: "silent",
        loop: !1,
        muted: !1,
        paused: !0,
        playsinline: !1,
        playsInline: !1,
        playbackRate: 1,
        poster: "",
        preload: "metadata",
        preferNativeHLS: !1,
        src: "",
        title: "",
        controlsDelay: 2e3,
        hideControlsOnMouseLeave: !1,
        viewType: "unknown",
        streamType: "unknown",
        volume: 1,
        liveEdgeTolerance: 10,
        minLiveDVRWindow: 60,
        keyDisabled: !1,
        keyTarget: "player",
        keyShortcuts: {
          togglePaused: "k Space",
          toggleMuted: "m",
          toggleFullscreen: "f",
          togglePictureInPicture: "i",
          toggleCaptions: "c",
          seekBackward: "j J ArrowLeft",
          seekForward: "l L ArrowRight",
          volumeUp: "ArrowUp",
          volumeDown: "ArrowDown",
          speedUp: ">",
          slowDown: "<",
        },
        storage: null,
      }),
        (e6.state = ts),
        e7([l.prop], e6.prototype, "canPlayQueue", 2),
        e7([l.prop], e6.prototype, "remoteControl", 2),
        e7([l.prop], e6.prototype, "provider", 1),
        e7([l.prop], e6.prototype, "controls", 1),
        e7([l.prop], e6.prototype, "orientation", 2),
        e7([l.prop], e6.prototype, "title", 1),
        e7([l.prop], e6.prototype, "qualities", 1),
        e7([l.prop], e6.prototype, "audioTracks", 1),
        e7([l.prop], e6.prototype, "textTracks", 1),
        e7([l.prop], e6.prototype, "textRenderers", 1),
        e7([l.prop], e6.prototype, "duration", 1),
        e7([l.prop], e6.prototype, "paused", 1),
        e7([l.prop], e6.prototype, "muted", 1),
        e7([l.prop], e6.prototype, "currentTime", 1),
        e7([l.prop], e6.prototype, "volume", 1),
        e7([l.prop], e6.prototype, "playbackRate", 1),
        e7([l.method], e6.prototype, "play", 1),
        e7([l.method], e6.prototype, "pause", 1),
        e7([l.method], e6.prototype, "enterFullscreen", 1),
        e7([l.method], e6.prototype, "exitFullscreen", 1),
        e7([l.method], e6.prototype, "enterPictureInPicture", 1),
        e7([l.method], e6.prototype, "exitPictureInPicture", 1),
        e7([l.method], e6.prototype, "seekToLiveEdge", 1),
        e7([l.method], e6.prototype, "startLoading", 1),
        e7([l.method], e6.prototype, "startLoadingPoster", 1),
        e7([l.method], e6.prototype, "requestAirPlay", 1),
        e7([l.method], e6.prototype, "requestGoogleCast", 1),
        e7([l.method], e6.prototype, "setAudioGain", 1);
      let e4 = e6,
        e9 = new Map();
      class e8 {
        constructor(t, e, i, s = []) {
          (this.xd = t), (this.a = e), (this.Y = i), (this.Te = !1);
          let a = new eq(),
            n = new t9(),
            r = new t4(),
            h = new t6(),
            o = [new ej(), new eO()];
          this.Ue = (0, l.computed)(() => {
            let t = e.$state.remotePlaybackLoader(),
              i = e.$props.preferNativeHLS()
                ? [r, h, a, n, ...o, ...s]
                : [n, r, h, a, ...o, ...s];
            return t ? [t, ...i] : i;
          });
          let { $state: d } = e;
          for (let t of (d.sources.set(it(e.$props.src())), d.sources())) {
            let e = this.Ue().find((e) => e.canPlay(t));
            if (!e) continue;
            let i = e.mediaType(t);
            this.a.$state.source.set(t),
              this.a.$state.mediaType.set(i),
              this.a.$state.inferredViewType.set(i),
              this.Y.set(e),
              (this.Te = !0);
            break;
          }
        }
        get c() {
          return this.a.delegate.c;
        }
        connect() {
          let t = this.Y();
          this.Te &&
            (this.ch(this.a.$state.source(), t), this.dh(t), (this.Te = !1)),
            (0, l.effect)(this.Bk.bind(this)),
            (0, l.effect)(this.Ck.bind(this)),
            (0, l.effect)(this.Dk.bind(this)),
            (0, l.effect)(this.Ek.bind(this)),
            (0, l.effect)(this.Fk.bind(this));
        }
        Bk() {
          this.c("sources-change", [...it(this.a.$props.src()), ...this.xd()]);
        }
        Ck() {
          let { $state: t } = this.a,
            e = t.sources(),
            i = (0, l.peek)(t.source),
            s = this.eh(i, e);
          if (e[0]?.src && !s.src && !s.type) {
            let { crossOrigin: i } = t,
              s = B(i()),
              a = new AbortController();
            return (
              Promise.all(
                e.map((t) =>
                  (0, l.isString)(t.src) && "?" === t.type
                    ? fetch(t.src, {
                        method: "HEAD",
                        credentials: s,
                        signal: a.signal,
                      })
                        .then(
                          (e) => (
                            (t.type = e.headers.get("content-type") || "??"),
                            e9.set(t.src, t.type),
                            t
                          ),
                        )
                        .catch(() => t)
                    : t,
                ),
              ).then((e) => {
                if (a.signal.aborted) return;
                let i = this.eh((0, l.peek)(t.source), e);
                (0, l.tick)(),
                  i.src ||
                    this.c("error", {
                      message: "Failed to load resource.",
                      code: 4,
                    });
              }),
              () => a.abort()
            );
          }
          (0, l.tick)();
        }
        eh(t, e) {
          let i = { src: "", type: "" },
            s = null,
            a = new l.DOMEvent("sources-change", { detail: { sources: e } }),
            n = this.Ue(),
            {
              started: r,
              paused: h,
              currentTime: o,
              quality: c,
              savedState: u,
            } = this.a.$state;
          for (let t of e) {
            let e = n.find((e) => e.canPlay(t));
            if (e) {
              (i = t), (s = e);
              break;
            }
          }
          if (d(i)) {
            let t = c(),
              s = e.find((e) => e.src === t?.src);
            (0, l.peek)(r)
              ? u.set({ paused: (0, l.peek)(h), currentTime: (0, l.peek)(o) })
              : u.set(null),
              s &&
                ((i = s),
                (a = new l.DOMEvent("quality-change", {
                  detail: { quality: t },
                })));
          }
          return (
            ii(t, i) || this.ch(i, s, a),
            s !== (0, l.peek)(this.Y) && this.dh(s, a),
            i
          );
        }
        ch(t, e, i) {
          this.c("source-change", t, i),
            this.c("media-type-change", e?.mediaType(t) || "unknown", i);
        }
        dh(t, e) {
          this.a.$providerSetup.set(!1),
            this.c("provider-change", null, e),
            t && (0, l.peek)(() => t.preconnect?.(this.a)),
            this.Y.set(t),
            this.c("provider-loader-change", t, e);
        }
        Dk() {
          let t = this.a.$provider();
          if (!(!t || (0, l.peek)(this.a.$providerSetup))) {
            if (this.a.$state.canLoad()) {
              (0, l.scoped)(() => t.setup(), t.scope),
                this.a.$providerSetup.set(!0);
              return;
            }
            (0, l.peek)(() => t.preconnect?.());
          }
        }
        Ek() {
          if (!this.a.$providerSetup()) return;
          let t = this.a.$provider(),
            e = this.a.$state.source(),
            i = (0, l.peek)(this.a.$state.crossOrigin),
            s = (0, l.peek)(this.a.$props.preferNativeHLS);
          if (!ii(t?.currentSrc, e)) {
            if (this.a.$state.canLoad()) {
              let a = new AbortController();
              return (
                N(e)
                  ? (s || !T()) &&
                    (function t(e, i) {
                      return fetch(e, i)
                        .then((t) => t.text())
                        .then((s) => {
                          let a = (function (t) {
                            let e = t.match(
                              /#EXT-X-STREAM-INF:[^\n]+(\n[^\n]+)*/g,
                            );
                            return e ? e[0].split("\n")[1].trim() : null;
                          })(s);
                          if (a)
                            return t(
                              /^https?:/.test(a) ? a : new URL(a, e).href,
                              i,
                            );
                          let n = /EXT-X-PLAYLIST-TYPE:\s*VOD/.test(s)
                            ? "on-demand"
                            : "live";
                          return "live" === n &&
                            (function (t) {
                              for (let e of t.split("\n"))
                                if (e.startsWith("#EXT-X-TARGETDURATION")) {
                                  let t = parseFloat(e.split(":")[1]);
                                  if (!isNaN(t)) return t;
                                }
                              return -1;
                            })(s) >= 10 &&
                            (/#EXT-X-DVR-ENABLED:\s*true/.test(s) ||
                              s.includes("#EXT-X-DISCONTINUITY"))
                            ? "live:dvr"
                            : n;
                        });
                    })(e.src, { credentials: B(i), signal: a.signal })
                      .then((t) => {
                        this.c("stream-type-change", t);
                      })
                      .catch(l.noop)
                  : R(e)
                    ? fetch(e.src, { credentials: B(i), signal: a.signal })
                        .then((t) => t.text())
                        .then((t) =>
                          /type="static"/.test(t) ? "on-demand" : "live",
                        )
                        .then((t) => {
                          this.c("stream-type-change", t);
                        })
                        .catch(l.noop)
                    : this.c("stream-type-change", "on-demand"),
                (0, l.peek)(() => {
                  let i = (0, l.peek)(this.a.$state.preload);
                  return t?.loadSource(e, i).catch((t) => {});
                }),
                () => a.abort()
              );
            }
            try {
              (0, l.isString)(e.src) && K(new URL(e.src).origin);
            } catch (t) {}
          }
        }
        Fk() {
          let t = this.Y(),
            { providedPoster: e, source: i, canLoadPoster: s } = this.a.$state;
          if (!t || !t.loadPoster || !i() || !s() || e()) return;
          let a = new AbortController(),
            n = new l.DOMEvent("source-change", { detail: i });
          return (
            t
              .loadPoster(i(), this.a, a)
              .then((t) => {
                this.c("poster-change", t || "", n);
              })
              .catch(() => {
                this.c("poster-change", "", n);
              }),
            () => {
              a.abort();
            }
          );
        }
      }
      function it(t) {
        return ((0, l.isArray)(t) ? t : [t]).map((t) =>
          (0, l.isString)(t)
            ? { src: t, type: ie(t) }
            : { ...t, type: ie(t.src, t.type) },
        );
      }
      function ie(t, e) {
        if ((0, l.isString)(e) && e.length) return e;
        if ((0, l.isString)(t) && e9.has(t)) return e9.get(t);
        if (!e && N({ src: t, type: "" })) return "application/x-mpegurl";
        if (!e && R({ src: t, type: "" })) return "application/dash+xml";
        if (!(0, l.isString)(t) || t.startsWith("blob:")) return "video/object";
        if (t.includes("youtube") || t.includes("youtu.be"))
          return "video/youtube";
        if (
          t.includes("vimeo") &&
          !t.includes("progressive_redirect") &&
          !t.includes(".m3u8")
        )
          return "video/vimeo";
        return "?";
      }
      function ii(t, e) {
        return t?.src === e?.src && t?.type === e?.type;
      }
      class is {
        constructor(t, e) {
          (this.yd = t),
            (this.a = e),
            (this.fh = []),
            (0, l.effect)(this.Gk.bind(this));
        }
        Gk() {
          let t = this.yd();
          for (let e of this.fh)
            if (!t.some((t) => t.id === e.id)) {
              let t = e.id && this.a.textTracks.getById(e.id);
              t && this.a.textTracks.remove(t);
            }
          for (let e of t) {
            let t = e.id || tt.createId(e);
            this.a.textTracks.getById(t) ||
              ((e.id = t), this.a.textTracks.add(e));
          }
          this.fh = t;
        }
      }
      var ia = Object.defineProperty,
        ir = Object.getOwnPropertyDescriptor;
      class ih extends l.Component {
        constructor() {
          super(...arguments),
            (this.xd = (0, l.signal)([])),
            (this.yd = (0, l.signal)([])),
            (this.Y = null),
            (this.Ve = -1);
        }
        onSetup() {
          (this.a = tl()),
            (this.gh = new e8(
              this.xd,
              this.a,
              this.$state.loader,
              this.$props.loaders(),
            ));
        }
        onAttach(t) {
          t.setAttribute("data-media-provider", "");
        }
        onConnect(t) {
          this.gh.connect(), new is(this.yd, this.a);
          let e = new ResizeObserver(
            (0, l.animationFrameThrottle)(this.qa.bind(this)),
          );
          e.observe(t);
          let i = new MutationObserver(this.Hc.bind(this));
          i.observe(t, { attributes: !0, childList: !0 }),
            this.qa(),
            this.Hc(),
            (0, l.onDispose)(() => {
              e.disconnect(), i.disconnect();
            });
        }
        load(t) {
          window.cancelAnimationFrame(this.Ve),
            (this.Ve = requestAnimationFrame(() => this.Hk(t))),
            (0, l.onDispose)(() => {
              window.cancelAnimationFrame(this.Ve);
            });
        }
        Hk(t) {
          if (!this.scope) return;
          let e = this.$state.loader(),
            { $provider: i } = this.a;
          !(this.Y === e && e?.target === t && (0, l.peek)(i)) &&
            (this.hh(),
            (this.Y = e),
            e && (e.target = t || null),
            e &&
              t &&
              e.load(this.a).then((t) => {
                this.scope &&
                  (0, l.peek)(this.$state.loader) === e &&
                  this.a.delegate.c("provider-change", t);
              }));
        }
        onDestroy() {
          (this.Y = null), this.hh();
        }
        hh() {
          this.a?.delegate.c("provider-change", null);
        }
        qa() {
          if (!this.el) return;
          let { player: t, $state: e } = this.a,
            i = this.el.offsetWidth,
            s = this.el.offsetHeight;
          t &&
            (e.mediaWidth.set(i),
            e.mediaHeight.set(s),
            t.el &&
              ((0, l.setStyle)(t.el, "--media-width", i + "px"),
              (0, l.setStyle)(t.el, "--media-height", s + "px")));
        }
        Hc() {
          let t = [],
            e = [];
          for (let i of this.el.children)
            if (!i.hasAttribute("data-vds")) {
              if (i instanceof HTMLSourceElement) {
                let e = { id: i.id, src: i.src, type: i.type };
                for (let t of [
                  "id",
                  "src",
                  "width",
                  "height",
                  "bitrate",
                  "codec",
                ]) {
                  let s = i.getAttribute(`data-${t}`);
                  (0, l.isString)(s) &&
                    (e[t] = /id|src|codec/.test(t) ? s : Number(s));
                }
                t.push(e);
              } else if (i instanceof HTMLTrackElement) {
                let t = {
                  src: i.src,
                  kind: i.track.kind,
                  language: i.srclang,
                  label: i.label,
                  default: i.default,
                  type: i.getAttribute("data-type"),
                };
                e.push({ id: i.id || tt.createId(t), ...t });
              }
            }
          this.xd.set(t), this.yd.set(e), (0, l.tick)();
        }
      }
      (ih.props = { loaders: [] }),
        (ih.state = new l.State({ loader: null })),
        ((t, e, i, s) => {
          for (var a, n = ir(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && ia(e, i, n);
        })([l.method], ih.prototype, "load");
      class il extends l.Component {
        constructor() {
          super(...arguments), (this.We = !1), (this.Ic = -1), (this.Ye = -1);
        }
        onSetup() {
          this.a = tl();
        }
        onAttach(t) {
          t.style.display = "contents";
        }
        onConnect(t) {
          t.setAttribute("data-media-announcer", ""),
            tm(t, "role", "status"),
            tm(t, "aria-live", "polite");
          let { busy: e } = this.$state;
          this.setAttributes({ "aria-busy": () => (e() ? "true" : null) }),
            (this.We = !0),
            (0, l.effect)(this.gc.bind(this)),
            (0, l.effect)(this.Gc.bind(this)),
            (0, l.effect)(this.Ik.bind(this)),
            (0, l.effect)(this.Jk.bind(this)),
            (0, l.effect)(this.Kk.bind(this)),
            (0, l.effect)(this.Lk.bind(this)),
            (0, l.effect)(this.Mk.bind(this)),
            (0, l.tick)(),
            (this.We = !1);
        }
        gc() {
          let { paused: t } = this.a.$state;
          this.Sb(t() ? "Pause" : "Play");
        }
        Jk() {
          let { fullscreen: t } = this.a.$state;
          this.Sb(t() ? "Enter Fullscreen" : "Exit Fullscreen");
        }
        Kk() {
          let { pictureInPicture: t } = this.a.$state;
          this.Sb(t() ? "Enter PiP" : "Exit PiP");
        }
        Ik() {
          let { textTrack: t } = this.a.$state;
          this.Sb(t() ? "Closed-Captions On" : "Closed-Captions Off");
        }
        Gc() {
          let { muted: t, volume: e, audioGain: i } = this.a.$state;
          this.Sb(
            t() || 0 === e()
              ? "Mute"
              : `${Math.round(e() * (i() ?? 1) * 100)}% ${this.Xe("Volume")}`,
          );
        }
        Lk() {
          let { seeking: t, currentTime: e } = this.a.$state,
            i = t();
          this.Ic > 0
            ? (window.clearTimeout(this.Ye),
              (this.Ye = window.setTimeout(() => {
                if (!this.scope) return;
                let t = (0, l.peek)(e),
                  i = Math.abs(t - this.Ic);
                if (i >= 1) {
                  let e = t >= this.Ic,
                    s = eN(i);
                  this.Sb(
                    `${this.Xe(e ? "Seek Forward" : "Seek Backward")} ${s}`,
                  );
                }
                (this.Ic = -1), (this.Ye = -1);
              }, 300)))
            : i && (this.Ic = (0, l.peek)(e));
        }
        Xe(t) {
          let { translations: e } = this.$props;
          return e?.()?.[t || ""] ?? t;
        }
        Mk() {
          let { label: t, busy: e } = this.$state,
            i = this.Xe(t());
          if (this.We) return;
          e.set(!0);
          let s = window.setTimeout(() => void e.set(!1), 150);
          return (
            this.el && (0, l.setAttribute)(this.el, "aria-label", i),
            (0, l.isString)(i) && this.dispatch("change", { detail: i }),
            () => window.clearTimeout(s)
          );
        }
        Sb(t) {
          let { label: e } = this.$state;
          e.set(t);
        }
      }
      (il.props = { translations: null }),
        (il.state = new l.State({ label: null, busy: !1 }));
      class io extends l.Component {
        onSetup() {
          (this.a = tl()), (0, l.effect)(this.Nk.bind(this));
        }
        onAttach(t) {
          let { pictureInPicture: e, fullscreen: i } = this.a.$state;
          (0, l.setStyle)(t, "pointer-events", "none"),
            tm(t, "role", "group"),
            this.setAttributes({
              "data-visible": this.ih.bind(this),
              "data-fullscreen": i,
              "data-pip": e,
            }),
            (0, l.effect)(() => {
              this.dispatch("change", { detail: this.ih() });
            }),
            (0, l.effect)(this.Ok.bind(this)),
            (0, l.effect)(() => {
              let e = i();
              for (let i of ["top", "right", "bottom", "left"])
                (0, l.setStyle)(
                  t,
                  `padding-${i}`,
                  e && `env(safe-area-inset-${i})`,
                );
            });
        }
        Ok() {
          if (!this.el) return;
          let { nativeControls: t } = this.a.$state,
            e = t();
          (0, l.setAttribute)(this.el, "aria-hidden", e ? "true" : null),
            (0, l.setStyle)(this.el, "display", e ? "none" : null);
        }
        Nk() {
          let { controls: t } = this.a.player,
            { hideDelay: e, hideOnMouseLeave: i } = this.$props;
          (t.defaultDelay = 2e3 === e() ? this.a.$props.controlsDelay() : e()),
            (t.hideOnMouseLeave = i());
        }
        ih() {
          let { controlsVisible: t } = this.a.$state;
          return t();
        }
      }
      io.props = { hideDelay: 2e3, hideOnMouseLeave: !1 };
      class id extends l.Component {
        onAttach(t) {
          t.style.pointerEvents || (0, l.setStyle)(t, "pointer-events", "auto");
        }
      }
      class ic extends l.ViewController {
        constructor(t) {
          super(),
            (this.j = t),
            (this.Ad = -1),
            (this.Bd = -1),
            (this.xb = null),
            (0, l.effect)(this.Pk.bind(this));
        }
        onDestroy() {
          this.xb?.(), (this.xb = null);
        }
        Pk() {
          let t = this.j.N();
          if (!t) {
            this.hide();
            return;
          }
          let e = this.show.bind(this),
            i = this.hide.bind(this);
          this.j.zd(t, e, i);
        }
        show(t) {
          this.Ze(),
            window.cancelAnimationFrame(this.Bd),
            (this.Bd = -1),
            this.xb?.(),
            (this.xb = null),
            (this.Ad = window.setTimeout(() => {
              this.Ad = -1;
              let e = this.j.q();
              e && e.style.removeProperty("display"),
                (0, l.peek)(() => this.j.F(!0, t));
            }, this.j.jh?.() ?? 0));
        }
        hide(t) {
          this.Ze(),
            (0, l.peek)(() => this.j.F(!1, t)),
            (this.Bd = requestAnimationFrame(() => {
              this.Ze(), (this.Bd = -1);
              let t = this.j.q();
              if (t) {
                let e = () => {
                  (t.style.display = "none"), (this.xb = null);
                };
                if ("none" !== getComputedStyle(t).animationName) {
                  this.xb?.();
                  let i = (0, l.listenEvent)(t, "animationend", e, {
                    once: !0,
                  });
                  this.xb = i;
                } else e();
              }
            }));
        }
        Ze() {
          window.clearTimeout(this.Ad), (this.Ad = -1);
        }
      }
      let iu = (0, l.createContext)(),
        ip = 0;
      class ig extends l.Component {
        constructor() {
          super(),
            (this.za = `media-tooltip-${++ip}`),
            (this.N = (0, l.signal)(null)),
            (this.q = (0, l.signal)(null)),
            new e0();
          let { showDelay: t } = this.$props;
          new ic({
            N: this.N,
            q: this.q,
            jh: t,
            zd(t, e, i) {
              (0, l.listenEvent)(t, "touchstart", (t) => t.preventDefault(), {
                passive: !1,
              }),
                (0, l.effect)(() => {
                  eJ() && (0, l.listenEvent)(t, "focus", e),
                    (0, l.listenEvent)(t, "blur", i);
                }),
                (0, l.listenEvent)(t, "mouseenter", e),
                (0, l.listenEvent)(t, "mouseleave", i);
            },
            F: this.Qk.bind(this),
          });
        }
        onAttach(t) {
          t.style.setProperty("display", "contents");
        }
        onSetup() {
          (0, l.provideContext)(iu, {
            N: this.N,
            q: this.q,
            _e: this._e.bind(this),
            $e: this.$e.bind(this),
            af: this.af.bind(this),
            bf: this.bf.bind(this),
          });
        }
        _e(t) {
          this.N.set(t);
          let e = t.getAttribute("data-media-tooltip");
          e && this.el?.setAttribute(`data-media-${e}-tooltip`, ""),
            (0, l.setAttribute)(t, "data-describedby", this.za);
        }
        $e(t) {
          t.removeAttribute("data-describedby"),
            t.removeAttribute("aria-describedby"),
            this.N.set(null);
        }
        af(t) {
          t.setAttribute("id", this.za),
            (t.style.display = "none"),
            tm(t, "role", "tooltip"),
            this.q.set(t);
        }
        bf(t) {
          t.removeAttribute("id"), t.removeAttribute("role"), this.q.set(null);
        }
        Qk(t) {
          let e = this.N(),
            i = this.q();
          for (let s of (e &&
            (0, l.setAttribute)(e, "aria-describedby", t ? this.za : null),
          [this.el, e, i]))
            s && (0, l.setAttribute)(s, "data-visible", t);
        }
      }
      ig.props = { showDelay: 700 };
      class ib extends l.Component {
        constructor() {
          super(), new e0();
        }
        onConnect(t) {
          (0, l.onDispose)(
            tT(() => {
              if (!this.connectScope) return;
              this.yb();
              let t = (0, l.useContext)(iu);
              (0, l.onDispose)(() => {
                let e = this.Cd();
                e && t.$e(e);
              });
            }),
          );
        }
        yb() {
          let t = this.Cd(),
            e = (0, l.useContext)(iu);
          t && e._e(t);
        }
        Cd() {
          let t = this.el.firstElementChild;
          return t?.localName === "button" ||
            t?.getAttribute("role") === "button"
            ? t
            : this.el;
        }
      }
      class im extends l.Component {
        constructor() {
          super(), new e0();
          let { placement: t } = this.$props;
          this.setAttributes({ "data-placement": t });
        }
        onAttach(t) {
          this.yb(t),
            Object.assign(t.style, {
              position: "absolute",
              top: 0,
              left: 0,
              width: "max-content",
            });
        }
        onConnect(t) {
          this.yb(t);
          let e = (0, l.useContext)(iu);
          (0, l.onDispose)(() => e.bf(t)),
            (0, l.onDispose)(
              tT(() => {
                this.connectScope && (0, l.effect)(this.cf.bind(this));
              }),
            );
        }
        yb(t) {
          (0, l.useContext)(iu).af(t);
        }
        cf() {
          let { placement: t, offset: e, alignOffset: i } = this.$props;
          return tS(this.el, this.Rk(), t(), {
            offsetVarName: "media-tooltip",
            xOffset: i(),
            yOffset: e(),
          });
        }
        Rk() {
          return (0, l.useContext)(iu).N();
        }
      }
      im.props = { placement: "top center", offset: 0, alignOffset: 0 };
      class iy extends l.ViewController {
        constructor(t) {
          super(), (this.j = t), new e0(), t.Tb && new tJ(t.Tb);
        }
        onSetup() {
          let { disabled: t } = this.$props;
          this.setAttributes({
            "data-pressed": this.j.o,
            "aria-pressed": this.Sk.bind(this),
            "aria-disabled": () => (t() ? "true" : null),
          });
        }
        onAttach(t) {
          tm(t, "tabindex", "0"),
            tm(t, "role", "button"),
            tm(t, "type", "button");
        }
        onConnect(t) {
          for (let e of (tw(t, this.Tk.bind(this)), ["click", "touchstart"]))
            this.listen(e, this.Uk.bind(this), { passive: !0 });
        }
        Sk() {
          return (0, l.ariaBool)(this.j.o());
        }
        Vk(t) {
          (0, l.isWriteSignal)(this.j.o) && this.j.o.set((t) => !t);
        }
        Tk(t) {
          if (this.$props.disabled() || this.el.hasAttribute("data-disabled")) {
            t.preventDefault(), t.stopImmediatePropagation();
            return;
          }
          t.preventDefault(), (this.j.s ?? this.Vk).call(this, t);
        }
        Uk(t) {
          this.$props.disabled() &&
            (t.preventDefault(), t.stopImmediatePropagation());
        }
      }
      iy.props = { disabled: !1 };
      var iv = Object.defineProperty,
        ik = Object.getOwnPropertyDescriptor;
      class i$ extends l.Component {
        constructor() {
          super(), (this.kh = (0, l.signal)(!1)), new iy({ o: this.kh });
        }
        get pressed() {
          return this.kh();
        }
      }
      function iw(t) {
        return () => (t() ? "true" : "false");
      }
      (i$.props = { disabled: !1, defaultPressed: !1 }),
        ((t, e, i, s) => {
          for (var a, n = ik(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && iv(e, i, n);
        })([l.prop], i$.prototype, "pressed");
      class ix extends l.Component {
        constructor() {
          super(), new iy({ o: this.o.bind(this), s: this.s.bind(this) });
        }
        onSetup() {
          this.a = tl();
          let { canAirPlay: t, isAirPlayConnected: e } = this.a.$state;
          this.setAttributes({
            "data-active": e,
            "data-supported": t,
            "data-state": this.Jc.bind(this),
            "aria-hidden": iw(() => !t()),
          });
        }
        onAttach(t) {
          t.setAttribute("data-media-tooltip", "airplay"),
            ty(t, this.Kc.bind(this));
        }
        s(t) {
          this.a.remote.requestAirPlay(t);
        }
        o() {
          let { remotePlaybackType: t, remotePlaybackState: e } = this.a.$state;
          return "airplay" === t() && "disconnected" !== e();
        }
        Jc() {
          let { remotePlaybackType: t, remotePlaybackState: e } = this.a.$state;
          return "airplay" === t() && e();
        }
        Kc() {
          let { remotePlaybackState: t } = this.a.$state;
          return `AirPlay ${t()}`;
        }
      }
      ix.props = iy.props;
      class iT extends l.Component {
        constructor() {
          super(), new iy({ o: this.o.bind(this), s: this.s.bind(this) });
        }
        onSetup() {
          this.a = tl();
          let { canGoogleCast: t, isGoogleCastConnected: e } = this.a.$state;
          this.setAttributes({
            "data-active": e,
            "data-supported": t,
            "data-state": this.Jc.bind(this),
            "aria-hidden": iw(() => !t()),
          });
        }
        onAttach(t) {
          t.setAttribute("data-media-tooltip", "google-cast"),
            ty(t, this.Kc.bind(this));
        }
        s(t) {
          this.a.remote.requestGoogleCast(t);
        }
        o() {
          let { remotePlaybackType: t, remotePlaybackState: e } = this.a.$state;
          return "google-cast" === t() && "disconnected" !== e();
        }
        Jc() {
          let { remotePlaybackType: t, remotePlaybackState: e } = this.a.$state;
          return "google-cast" === t() && e();
        }
        Kc() {
          let { remotePlaybackState: t } = this.a.$state;
          return `Google Cast ${t()}`;
        }
      }
      iT.props = iy.props;
      class iS extends l.Component {
        constructor() {
          super(),
            new iy({
              o: this.o.bind(this),
              Tb: "togglePaused",
              s: this.s.bind(this),
            });
        }
        onSetup() {
          this.a = tl();
          let { paused: t, ended: e } = this.a.$state;
          this.setAttributes({ "data-paused": t, "data-ended": e });
        }
        onAttach(t) {
          t.setAttribute("data-media-tooltip", "play"), ty(t, "Play");
        }
        s(t) {
          let e = this.a.remote;
          this.o() ? e.pause(t) : e.play(t);
        }
        o() {
          let { paused: t } = this.a.$state;
          return !t();
        }
      }
      iS.props = iy.props;
      class iP extends l.Component {
        constructor() {
          super(),
            new iy({
              o: this.o.bind(this),
              Tb: "toggleCaptions",
              s: this.s.bind(this),
            });
        }
        onSetup() {
          (this.a = tl()),
            this.setAttributes({
              "data-active": this.o.bind(this),
              "data-supported": () => !this.Ub(),
              "aria-hidden": iw(this.Ub.bind(this)),
            });
        }
        onAttach(t) {
          t.setAttribute("data-media-tooltip", "caption"), ty(t, "Captions");
        }
        s(t) {
          this.a.remote.toggleCaptions(t);
        }
        o() {
          let { textTrack: t } = this.a.$state,
            e = t();
          return !!e && ti(e);
        }
        Ub() {
          let { hasCaptions: t } = this.a.$state;
          return !t();
        }
      }
      iP.props = iy.props;
      class iE extends l.Component {
        constructor() {
          super(),
            new iy({
              o: this.o.bind(this),
              Tb: "toggleFullscreen",
              s: this.s.bind(this),
            });
        }
        onSetup() {
          this.a = tl();
          let { fullscreen: t } = this.a.$state,
            e = this.Lc.bind(this);
          this.setAttributes({
            "data-active": t,
            "data-supported": e,
            "aria-hidden": iw(() => !e()),
          });
        }
        onAttach(t) {
          t.setAttribute("data-media-tooltip", "fullscreen"),
            ty(t, "Fullscreen");
        }
        s(t) {
          let e = this.a.remote,
            i = this.$props.target();
          this.o() ? e.exitFullscreen(i, t) : e.enterFullscreen(i, t);
        }
        o() {
          let { fullscreen: t } = this.a.$state;
          return t();
        }
        Lc() {
          let { canFullscreen: t } = this.a.$state;
          return t();
        }
      }
      iE.props = { ...iy.props, target: "prefer-media" };
      class iA extends l.Component {
        constructor() {
          super(),
            new iy({
              o: this.o.bind(this),
              Tb: "toggleMuted",
              s: this.s.bind(this),
            });
        }
        onSetup() {
          (this.a = tl()),
            this.setAttributes({
              "data-muted": this.o.bind(this),
              "data-state": this.Jc.bind(this),
            });
        }
        onAttach(t) {
          t.setAttribute("data-media-mute-button", ""),
            t.setAttribute("data-media-tooltip", "mute"),
            ty(t, "Mute");
        }
        s(t) {
          let e = this.a.remote;
          this.o() ? e.unmute(t) : e.mute(t);
        }
        o() {
          let { muted: t, volume: e } = this.a.$state;
          return t() || 0 === e();
        }
        Jc() {
          let { muted: t, volume: e } = this.a.$state,
            i = e();
          return t() || 0 === i
            ? "muted"
            : i >= 0.5
              ? "high"
              : i < 0.5
                ? "low"
                : void 0;
        }
      }
      iA.props = iy.props;
      class iC extends l.Component {
        constructor() {
          super(),
            new iy({
              o: this.o.bind(this),
              Tb: "togglePictureInPicture",
              s: this.s.bind(this),
            });
        }
        onSetup() {
          this.a = tl();
          let { pictureInPicture: t } = this.a.$state,
            e = this.Lc.bind(this);
          this.setAttributes({
            "data-active": t,
            "data-supported": e,
            "aria-hidden": iw(() => !e()),
          });
        }
        onAttach(t) {
          t.setAttribute("data-media-tooltip", "pip"), ty(t, "PiP");
        }
        s(t) {
          let e = this.a.remote;
          this.o() ? e.exitPictureInPicture(t) : e.enterPictureInPicture(t);
        }
        o() {
          let { pictureInPicture: t } = this.a.$state;
          return t();
        }
        Lc() {
          let { canPictureInPicture: t } = this.a.$state;
          return t();
        }
      }
      iC.props = iy.props;
      class iM extends l.Component {
        constructor() {
          super(), new e0();
        }
        onSetup() {
          this.a = tl();
          let { seeking: t } = this.a.$state,
            { seconds: e } = this.$props,
            i = this.Lc.bind(this);
          this.setAttributes({
            seconds: e,
            "data-seeking": t,
            "data-supported": i,
            "aria-hidden": iw(() => !i()),
          });
        }
        onAttach(t) {
          tm(t, "tabindex", "0"),
            tm(t, "role", "button"),
            tm(t, "type", "button"),
            t.setAttribute("data-media-tooltip", "seek"),
            ty(t, this.Kc.bind(this));
        }
        onConnect(t) {
          tw(t, this.s.bind(this));
        }
        Lc() {
          let { canSeek: t } = this.a.$state;
          return t();
        }
        Kc() {
          let { seconds: t } = this.$props;
          return `Seek ${t() > 0 ? "forward" : "backward"} ${t()} seconds`;
        }
        s(t) {
          let { seconds: e, disabled: i } = this.$props;
          if (i()) return;
          let { currentTime: s } = this.a.$state,
            a = s() + e();
          this.a.remote.seek(a, t);
        }
      }
      iM.props = { disabled: !1, seconds: 30 };
      class iD extends l.Component {
        constructor() {
          super(), new e0();
        }
        onSetup() {
          this.a = tl();
          let { disabled: t } = this.$props,
            { live: e, liveEdge: i } = this.a.$state,
            s = () => !e();
          this.setAttributes({
            "data-edge": i,
            "data-hidden": s,
            "aria-disabled": iw(() => t() || i()),
            "aria-hidden": iw(s),
          });
        }
        onAttach(t) {
          tm(t, "tabindex", "0"),
            tm(t, "role", "button"),
            tm(t, "type", "button"),
            t.setAttribute("data-media-tooltip", "live");
        }
        onConnect(t) {
          tw(t, this.s.bind(this));
        }
        s(t) {
          let { disabled: e } = this.$props,
            { liveEdge: i } = this.a.$state;
          e() || i() || this.a.remote.seekToLiveEdge(t);
        }
      }
      iD.props = { disabled: !1 };
      let iq = new l.State({
        min: 0,
        max: 100,
        value: 0,
        step: 1,
        pointerValue: 0,
        focused: !1,
        dragging: !1,
        pointing: !1,
        hidden: !1,
        get active() {
          return this.dragging || this.focused || this.pointing;
        },
        get fillRate() {
          return iO(this.min, this.max, this.value);
        },
        get fillPercent() {
          return 100 * this.fillRate;
        },
        get pointerRate() {
          return iO(this.min, this.max, this.pointerValue);
        },
        get pointerPercent() {
          return 100 * this.pointerRate;
        },
      });
      function iO(t, e, i) {
        let s = e - t;
        return s > 0 ? (i - t) / s : 0;
      }
      class ij extends l.ViewController {
        constructor(t) {
          super(), (this.Ib = t);
        }
        onConnect(t) {
          (this.Sa = new IntersectionObserver((t) => {
            this.Ib.callback?.(t, this.Sa);
          }, this.Ib)),
            this.Sa.observe(t),
            (0, l.onDispose)(this.Ga.bind(this));
        }
        Ga() {
          this.Sa?.disconnect(), (this.Sa = void 0);
        }
      }
      let iI = (0, l.createContext)(),
        iF = (0, l.createContext)(),
        iL = {
          Left: -1,
          ArrowLeft: -1,
          Up: 1,
          ArrowUp: 1,
          Right: 1,
          ArrowRight: 1,
          Down: -1,
          ArrowDown: -1,
        };
      class iN extends l.ViewController {
        constructor(t, e) {
          super(),
            (this.j = t),
            (this.a = e),
            (this.p = null),
            (this.db = null),
            (this.Vb = null),
            (this.Kn = !1),
            (this.dl = (0, l.functionThrottle)(
              (t) => {
                this.eb(this.Dd(t), t);
              },
              20,
              { leading: !0 },
            ));
        }
        onSetup() {
          (0, l.hasProvidedContext)(iF) && (this.Sa = (0, l.useContext)(iF));
        }
        onConnect() {
          (0, l.effect)(this.Xk.bind(this)),
            (0, l.effect)(this.Yk.bind(this)),
            this.j.lh && (0, l.effect)(this.Zk.bind(this));
        }
        Zk() {
          let { pointer: t } = this.a.$state;
          if ("coarse" !== t() || !this.j.lh()) {
            this.p = null;
            return;
          }
          (this.p = this.a.player.el?.querySelector(
            "media-provider,[data-media-provider]",
          )),
            this.p &&
              ((0, l.listenEvent)(this.p, "touchstart", this._k.bind(this), {
                passive: !0,
              }),
              (0, l.listenEvent)(this.p, "touchmove", this.$k.bind(this), {
                passive: !1,
              }));
        }
        _k(t) {
          this.db = t.touches[0];
        }
        $k(t) {
          if ((0, l.isNull)(this.db) || tx(t)) return;
          let e = t.touches[0],
            i = e.clientX - this.db.clientX,
            s = e.clientY - this.db.clientY,
            a = this.$state.dragging();
          (!a && Math.abs(s) > 5) ||
            a ||
            (t.preventDefault(),
            Math.abs(i) > 20 &&
              ((this.db = e),
              (this.Vb = this.$state.value()),
              this.df(this.Vb, t)));
        }
        Xk() {
          let { hidden: t } = this.$props;
          this.listen("focus", this.Fc.bind(this)),
            this.listen("keydown", this.jc.bind(this)),
            this.listen("keyup", this.ic.bind(this)),
            t() ||
              this.j.z() ||
              (this.listen("pointerenter", this.Pe.bind(this)),
              this.listen("pointermove", this.al.bind(this)),
              this.listen("pointerleave", this.Qe.bind(this)),
              this.listen("pointerdown", this.bl.bind(this)));
        }
        Yk() {
          !this.j.z() &&
            this.$state.dragging() &&
            ((0, l.listenEvent)(document, "pointerup", this.cl.bind(this), {
              capture: !0,
            }),
            (0, l.listenEvent)(document, "pointermove", this.dl.bind(this)),
            (0, l.listenEvent)(document, "touchmove", this.fl.bind(this), {
              passive: !1,
            }));
        }
        Fc() {
          this.eb(this.$state.value());
        }
        ef(t, e) {
          let { value: i, min: s, max: a, dragging: n } = this.$state,
            r = Math.max(s(), Math.min(t, a()));
          i.set(r);
          let h = this.createEvent("value-change", { detail: r, trigger: e });
          if ((this.dispatch(h), this.j.l?.(h), n())) {
            let t = this.createEvent("drag-value-change", {
              detail: r,
              trigger: e,
            });
            this.dispatch(t), this.j.T?.(t);
          }
        }
        eb(t, e) {
          let { pointerValue: i, dragging: s } = this.$state;
          i.set(t),
            this.dispatch("pointer-value-change", { detail: t, trigger: e }),
            s() && this.ef(t, e);
        }
        Dd(t) {
          var e, i, s, a;
          let n,
            r = this.el.getBoundingClientRect(),
            { min: h, max: o } = this.$state;
          if ("vertical" === this.$props.orientation()) {
            let { bottom: e, height: i } = r;
            n = (e - t.clientY) / i;
          } else if (this.db && (0, l.isNumber)(this.Vb)) {
            let { width: e } = this.p.getBoundingClientRect(),
              i = (t.clientX - this.db.clientX) / e,
              s = o() - h(),
              a = s * Math.abs(i);
            n = (i < 0 ? this.Vb - a : this.Vb + a) / s;
          } else {
            let { left: e, width: i } = r;
            n = (t.clientX - e) / i;
          }
          return Math.max(
            h(),
            Math.min(
              o(),
              this.j.Ea(
                ((e = h()),
                (i = o()),
                (s = n),
                e +
                  (a = this.j.ra()) * Math.round(((i - e) * tp(0, s, 1)) / a)),
              ),
            ),
          );
        }
        Pe(t) {
          this.$state.pointing.set(!0);
        }
        al(t) {
          let { dragging: e } = this.$state;
          e() || this.eb(this.Dd(t), t);
        }
        Qe(t) {
          this.$state.pointing.set(!1);
        }
        bl(t) {
          if (0 !== t.button) return;
          let e = this.Dd(t);
          this.df(e, t), this.eb(e, t);
        }
        df(t, e) {
          let { dragging: i } = this.$state;
          if (i()) return;
          i.set(!0), this.a.remote.pauseControls(e);
          let s = this.createEvent("drag-start", { detail: t, trigger: e });
          this.dispatch(s), this.j.ff?.(s), this.Sa?.onDragStart?.();
        }
        mh(t, e) {
          let { dragging: i } = this.$state;
          if (!i()) return;
          i.set(!1), this.a.remote.resumeControls(e);
          let s = this.createEvent("drag-end", { detail: t, trigger: e });
          this.dispatch(s),
            this.j.Ed?.(s),
            (this.db = null),
            (this.Vb = null),
            this.Sa?.onDragEnd?.();
        }
        jc(t) {
          if (!Object.keys(iL).includes(t.key)) return;
          let { key: e } = t,
            i = this.Ln(t);
          if (!(0, l.isNull)(i)) {
            this.eb(i, t), this.ef(i, t);
            return;
          }
          let s = this.Mn(t);
          this.Kn ||
            ((this.Kn = e === this.gf),
            !this.$state.dragging() && this.Kn && this.df(s, t)),
            this.eb(s, t),
            (this.gf = e);
        }
        ic(t) {
          if (!Object.keys(iL).includes(t.key) || !(0, l.isNull)(this.Ln(t)))
            return;
          let e = this.Kn ? this.$state.pointerValue() : this.Mn(t);
          this.ef(e, t), this.mh(e, t), (this.gf = ""), (this.Kn = !1);
        }
        Ln(t) {
          let e = t.key,
            { min: i, max: s } = this.$state;
          return "Home" === e || "PageUp" === e
            ? i()
            : "End" === e || "PageDown" === e
              ? s()
              : !t.metaKey && /^[0-9]$/.test(e)
                ? ((s() - i()) / 10) * Number(e)
                : null;
        }
        Mn(t) {
          let { key: e, shiftKey: i } = t;
          t.preventDefault(), t.stopPropagation();
          let { shiftKeyMultiplier: s } = this.$props,
            { min: a, max: n, value: r, pointerValue: h } = this.$state,
            l = this.j.ra(),
            o = this.j.fb(),
            d = i ? o * s() : o,
            c = Number(iL[e]),
            u = this.Kn ? h() : (this.j.Z?.() ?? r());
          return Math.max(
            a(),
            Math.min(n(), Number((((u + d * c) / l) * l).toFixed(3))),
          );
        }
        cl(t) {
          if (0 !== t.button) return;
          t.preventDefault(), t.stopImmediatePropagation();
          let e = this.Dd(t);
          this.eb(e, t), this.mh(e, t);
        }
        fl(t) {
          t.preventDefault();
        }
      }
      let iR = (0, l.createContext)(() => ({}));
      class iV extends l.ViewController {
        constructor(t) {
          super(),
            (this.j = t),
            (this.Mc = (0, l.signal)(!0)),
            (this.Nc = (0, l.signal)(!0)),
            (this.kl = (0, l.animationFrameThrottle)((t, e) => {
              this.el?.style.setProperty("--slider-fill", t + "%"),
                this.el?.style.setProperty("--slider-pointer", e + "%");
            }));
        }
        onSetup() {
          this.a = tl();
          let t = new e0();
          t.attach(this),
            (this.$state.focused = t.focused.bind(t)),
            (0, l.hasProvidedContext)(iR) ||
              (0, l.provideContext)(iR, { default: "value" }),
            (0, l.provideContext)(iI, {
              cb: this.$props.orientation,
              Fd: this.j.z,
              oh: (0, l.signal)(null),
            }),
            (0, l.effect)(this.O.bind(this)),
            (0, l.effect)(this.gl.bind(this)),
            (0, l.effect)(this.Oc.bind(this)),
            this.il(),
            new iN(this.j, this.a).attach(this),
            new ij({ callback: this.hf.bind(this) }).attach(this);
        }
        onAttach(t) {
          tm(t, "role", "slider"),
            tm(t, "tabindex", "0"),
            tm(t, "autocomplete", "off"),
            c ? this.ph() : (0, l.effect)(this.ph.bind(this));
        }
        onConnect(t) {
          (0, l.onDispose)(tk(t, this.Mc.set)),
            (0, l.effect)(this.Fa.bind(this));
        }
        hf(t) {
          this.Nc.set(t[0].isIntersecting);
        }
        Fa() {
          let { hidden: t } = this.$props;
          this.$state.hidden.set(t() || !this.Mc() || !this.Nc.bind(this));
        }
        O() {
          let { dragging: t, value: e, min: i, max: s } = this.$state;
          if (!(0, l.peek)(t)) {
            var a, n;
            e.set(((a = i()), (n = s()), tp(a, tc(e(), tu(this.j.ra())), n)));
          }
        }
        gl() {
          this.$state.step.set(this.j.ra());
        }
        Oc() {
          if (!this.j.z()) return;
          let { dragging: t, pointing: e } = this.$state;
          t.set(!1), e.set(!1);
        }
        jl() {
          return (0, l.ariaBool)(this.j.z());
        }
        il() {
          let { orientation: t } = this.$props,
            { dragging: e, active: i, pointing: s } = this.$state;
          this.setAttributes({
            "data-dragging": e,
            "data-pointing": s,
            "data-active": i,
            "aria-disabled": this.jl.bind(this),
            "aria-valuemin": this.j.Um ?? this.$state.min,
            "aria-valuemax": this.j.jf ?? this.$state.max,
            "aria-valuenow": this.j.P,
            "aria-valuetext": this.j.Q,
            "aria-orientation": t,
          });
        }
        ph() {
          let { fillPercent: t, pointerPercent: e } = this.$state;
          this.kl(tc(t(), 3), tc(e(), 3));
        }
      }
      iV.props = {
        hidden: !1,
        disabled: !1,
        step: 1,
        keyStep: 1,
        orientation: "horizontal",
        shiftKeyMultiplier: 5,
      };
      class iG extends l.Component {
        constructor() {
          super(),
            new iV({
              ra: this.$props.step,
              fb: this.$props.keyStep,
              Ea: Math.round,
              z: this.$props.disabled,
              P: this.P.bind(this),
              Q: this.Q.bind(this),
            });
        }
        onSetup() {
          (0, l.effect)(this.O.bind(this)), (0, l.effect)(this.Pc.bind(this));
        }
        P() {
          let { value: t } = this.$state;
          return Math.round(t());
        }
        Q() {
          let { value: t, max: e } = this.$state;
          return tc((t() / e()) * 100, 2) + "%";
        }
        O() {
          let { value: t } = this.$props;
          this.$state.value.set(t());
        }
        Pc() {
          let { min: t, max: e } = this.$props;
          this.$state.min.set(t()), this.$state.max.set(e());
        }
      }
      (iG.props = { ...iV.props, min: 0, max: 100, value: 0 }), (iG.state = iq);
      let iK = new Map(),
        iU = new Map();
      class iH {
        constructor(t, e, i) {
          (this.$src = t),
            (this.$crossOrigin = e),
            (this.a = i),
            (this.$images = (0, l.signal)([])),
            (0, l.effect)(this.ll.bind(this));
        }
        static create(t, e) {
          return new iH(t, e, tl());
        }
        ll() {
          let { canLoad: t } = this.a.$state;
          if (!t()) return;
          let e = this.$src();
          if (e) {
            if ((0, l.isString)(e) && iK.has(e)) {
              let t = iK.get(e);
              if ((iK.delete(e), iK.set(e, t), iK.size > 99)) {
                let t = iK.keys().next().value;
                iK.delete(t);
              }
              this.$images.set(iK.get(e));
            } else if ((0, l.isString)(e)) {
              let t = this.$crossOrigin(),
                s = e + "::" + t;
              if (!iU.has(s)) {
                let a = new Promise(async (s, a) => {
                  try {
                    let n = await fetch(e, { credentials: B(t) });
                    if ("application/json" === n.headers.get("content-type")) {
                      let t = await n.json();
                      if ((0, l.isArray)(t)) {
                        if (t[0] && "text" in t[0]) s(this.qh(t));
                        else {
                          for (let e = 0; e < t.length; e++) {
                            let i = t[e];
                            eS((0, l.isObject)(i), !1),
                              eS("url" in i && (0, l.isString)(i.url), !1),
                              eS(
                                "startTime" in i &&
                                  (0, l.isNumber)(i.startTime),
                                !1,
                              );
                          }
                          s(t);
                        }
                      } else s(this.rh(t));
                      return;
                    }
                    i.e(7922)
                      .then(i.bind(i, 17922))
                      .then(async ({ parseResponse: t }) => {
                        try {
                          let { cues: e } = await t(n);
                          s(this.qh(e));
                        } catch (t) {
                          a(t);
                        }
                      });
                  } catch (t) {
                    a(t);
                  }
                })
                  .then((t) => (iK.set(s, t), t))
                  .catch((t) => {
                    this.R(e, t);
                  })
                  .finally(() => {
                    (0, l.isString)(s) && iU.delete(s);
                  });
                iU.set(s, a);
              }
              iU.get(s)?.then((t) => {
                this.$images.set(t || []);
              });
            } else if ((0, l.isArray)(e))
              try {
                this.$images.set(this.ml(e));
              } catch (t) {
                this.R(e, t);
              }
            else
              try {
                this.$images.set(this.rh(e));
              } catch (t) {
                this.R(e, t);
              }
            return () => {
              this.$images.set([]);
            };
          }
        }
        ml(t) {
          let e = this.sh();
          return t.map(
            (t, i) => (
              eS(t.url && (0, l.isString)(t.url)),
              eS("startTime" in t && (0, l.isNumber)(t.startTime)),
              { ...t, url: (0, l.isString)(t.url) ? this.th(t.url, e) : t.url }
            ),
          );
        }
        rh(t) {
          eS((0, l.isString)(t.url)),
            eS((0, l.isArray)(t.tiles) && t.tiles?.length);
          let e = new URL(t.url),
            i = [],
            s = "tile_width" in t ? t.tile_width : t.tileWidth,
            a = "tile_height" in t ? t.tile_height : t.tileHeight;
          for (let n of t.tiles)
            i.push({
              url: e,
              startTime: "start" in n ? n.start : n.startTime,
              width: s,
              height: a,
              coords: { x: n.x, y: n.y },
            });
          return i;
        }
        qh(t) {
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            eS("startTime" in i && (0, l.isNumber)(i.startTime)),
              eS("text" in i && (0, l.isString)(i.text));
          }
          let e = [],
            i = this.sh();
          for (let s of t) {
            let [t, a] = s.text.split("#"),
              n = this.nl(a);
            e.push({
              url: this.th(t, i),
              startTime: s.startTime,
              endTime: s.endTime,
              width: n?.w,
              height: n?.h,
              coords:
                n && (0, l.isNumber)(n.x) && (0, l.isNumber)(n.y)
                  ? { x: n.x, y: n.y }
                  : void 0,
            });
          }
          return e;
        }
        sh() {
          let t = (0, l.peek)(this.$src);
          return (0, l.isString)(t) && /^https?:/.test(t) ? t : location.href;
        }
        th(t, e) {
          return /^https?:/.test(t) ? new URL(t) : new URL(t, e);
        }
        nl(t) {
          if (!t) return {};
          let [e, i] = t.split("="),
            s = i?.split(","),
            a = {};
          if (!e || !s) return null;
          for (let t = 0; t < e.length; t++) {
            let i = +s[t];
            isNaN(i) || (a[e[t]] = i);
          }
          return a;
        }
        R(t, e) {}
      }
      class iB extends l.Component {
        constructor() {
          super(...arguments), (this.kf = []);
        }
        onSetup() {
          (this.a = tl()),
            (this.Y = iH.create(this.$props.src, this.$state.crossOrigin)),
            this.Da(),
            this.setAttributes({
              "data-loading": this.Qc.bind(this),
              "data-error": this.gb.bind(this),
              "data-hidden": this.$state.hidden,
              "aria-hidden": iw(this.$state.hidden),
            });
        }
        onConnect(t) {
          (0, l.effect)(this.lf.bind(this)),
            (0, l.effect)(this.Fa.bind(this)),
            (0, l.effect)(this.Da.bind(this)),
            (0, l.effect)(this.Na.bind(this)),
            (0, l.effect)(this.ol.bind(this)),
            (0, l.effect)(this.uh.bind(this));
        }
        lf() {
          let t = this.$state.img();
          t &&
            ((0, l.listenEvent)(t, "load", this.ub.bind(this)),
            (0, l.listenEvent)(t, "error", this.R.bind(this)));
        }
        Da() {
          let { crossOrigin: t } = this.$props,
            { crossOrigin: e } = this.$state,
            { crossOrigin: i } = this.a.$state,
            s = null !== t() ? t() : i();
          e.set(!0 === s ? "anonymous" : s);
        }
        Na() {
          let { src: t, loading: e, error: i } = this.$state;
          return (
            t() && (e.set(!0), i.set(null)),
            () => {
              this.pl(), e.set(!1), i.set(null);
            }
          );
        }
        ub() {
          let { loading: t, error: e } = this.$state;
          this.uh(), t.set(!1), e.set(null);
        }
        R(t) {
          let { loading: e, error: i } = this.$state;
          e.set(!1), i.set(t);
        }
        Qc() {
          let { loading: t, hidden: e } = this.$state;
          return !e() && t();
        }
        gb() {
          let { error: t } = this.$state;
          return !(0, l.isNull)(t());
        }
        Fa() {
          let { hidden: t } = this.$state,
            { duration: e } = this.a.$state,
            i = this.Y.$images();
          t.set(this.gb() || !Number.isFinite(e()) || 0 === i.length);
        }
        vh() {
          return this.$props.time();
        }
        ol() {
          let t = this.Y.$images();
          if (!t.length) return;
          let e = this.vh(),
            { src: i, activeThumbnail: s } = this.$state,
            a = -1,
            n = null;
          for (let i = t.length - 1; i >= 0; i--) {
            let s = t[i];
            if (e >= s.startTime && (!s.endTime || e < s.endTime)) {
              a = i;
              break;
            }
          }
          t[a] && (n = t[a]), s.set(n), i.set(n?.url.href || "");
        }
        uh() {
          if (!this.scope || this.$state.hidden()) return;
          let t = this.el,
            e = this.$state.img(),
            i = this.$state.activeThumbnail();
          if (!e || !i || !t) return;
          let s = i.width ?? e.naturalWidth,
            a = i?.height ?? e.naturalHeight,
            {
              maxWidth: n,
              maxHeight: r,
              minWidth: h,
              minHeight: l,
              width: o,
              height: d,
            } = getComputedStyle(this.el);
          "100%" === h && (h = parseFloat(o) + ""),
            "100%" === l && (l = parseFloat(d) + "");
          let c = Math.max(parseInt(h) / s, parseInt(l) / a),
            u = Math.min(
              Math.max(parseInt(h), parseInt(n)) / s,
              Math.max(parseInt(l), parseInt(r)) / a,
            ),
            p = !isNaN(u) && u < 1 ? u : c > 1 ? c : 1;
          this.Wb(t, "--thumbnail-width", `${s * p}px`),
            this.Wb(t, "--thumbnail-height", `${a * p}px`),
            this.Wb(e, "width", `${e.naturalWidth * p}px`),
            this.Wb(e, "height", `${e.naturalHeight * p}px`),
            this.Wb(
              e,
              "transform",
              i.coords
                ? `translate(-${i.coords.x * p}px, -${i.coords.y * p}px)`
                : "",
            ),
            this.Wb(e, "max-width", "none");
        }
        Wb(t, e, i) {
          t.style.setProperty(e, i),
            this.kf.push(() => t.style.removeProperty(e));
        }
        pl() {
          for (let t of this.kf) t();
          this.kf = [];
        }
      }
      (iB.props = { src: null, time: 0, crossOrigin: null }),
        (iB.state = new l.State({
          src: "",
          img: null,
          thumbnails: [],
          activeThumbnail: null,
          crossOrigin: null,
          loading: !1,
          error: null,
          hidden: !1,
        }));
      class iz extends iB {
        onAttach(t) {
          this.ja = (0, l.useState)(iG.state);
        }
        vh() {
          let { duration: t, clipStartTime: e } = this.a.$state;
          return e() + this.ja.pointerRate() * t();
        }
      }
      var iQ = Object.defineProperty,
        iW = Object.getOwnPropertyDescriptor;
      class i_ extends l.Component {
        get video() {
          return this.$state.video();
        }
        onSetup() {
          (this.a = tl()),
            (this.ja = (0, l.useState)(iG.state)),
            this.Da(),
            this.setAttributes({
              "data-loading": this.Qc.bind(this),
              "data-hidden": this.$state.hidden,
              "data-error": this.gb.bind(this),
              "aria-hidden": iw(this.$state.hidden),
            });
        }
        onAttach(t) {
          (0, l.effect)(this.ql.bind(this)),
            (0, l.effect)(this.Nb.bind(this)),
            (0, l.effect)(this.Da.bind(this)),
            (0, l.effect)(this.Fa.bind(this)),
            (0, l.effect)(this.rl.bind(this)),
            (0, l.effect)(this.sl.bind(this));
        }
        ql() {
          let t = this.$state.video();
          t &&
            (t.readyState >= 2 && this.fd(),
            (0, l.listenEvent)(t, "canplay", this.fd.bind(this)),
            (0, l.listenEvent)(t, "error", this.R.bind(this)));
        }
        Nb() {
          let { src: t } = this.$state,
            { canLoad: e } = this.a.$state;
          t.set(e() ? this.$props.src() : null);
        }
        Da() {
          let { crossOrigin: t } = this.$props,
            { crossOrigin: e } = this.$state,
            { crossOrigin: i } = this.a.$state,
            s = null !== t() ? t() : i();
          e.set(!0 === s ? "anonymous" : s);
        }
        Qc() {
          let { canPlay: t, hidden: e } = this.$state;
          return !t() && !e();
        }
        gb() {
          let { error: t } = this.$state;
          return !(0, l.isNull)(t);
        }
        Fa() {
          let { src: t, hidden: e } = this.$state,
            { canLoad: i, duration: s } = this.a.$state;
          e.set(i() && (!t() || this.gb() || !Number.isFinite(s())));
        }
        rl() {
          let { src: t, canPlay: e, error: i } = this.$state;
          t(), e.set(!1), i.set(null);
        }
        fd(t) {
          let { canPlay: e, error: i } = this.$state;
          e.set(!0), i.set(null), this.dispatch("can-play", { trigger: t });
        }
        R(t) {
          let { canPlay: e, error: i } = this.$state;
          e.set(!1), i.set(t), this.dispatch("error", { trigger: t });
        }
        sl() {
          let { video: t, canPlay: e } = this.$state,
            { duration: i } = this.a.$state,
            { pointerRate: s } = this.ja,
            a = t();
          e() &&
            a &&
            Number.isFinite(i()) &&
            Number.isFinite(s()) &&
            (a.currentTime = s() * i());
        }
      }
      (i_.props = { src: null, crossOrigin: null }),
        (i_.state = new l.State({
          video: null,
          src: null,
          crossOrigin: null,
          canPlay: !1,
          error: null,
          hidden: !1,
        })),
        ((t, e, i, s) => {
          for (var a, n = iW(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && iQ(e, i, n);
        })([l.prop], i_.prototype, "video");
      var iX = Object.defineProperty,
        iY = Object.getOwnPropertyDescriptor;
      class iZ extends l.Component {
        onSetup() {
          (this.ja = (0, l.useState)(iG.state)),
            (this.Rc = (0, l.useContext)(iR)),
            (this.tl = (0, l.computed)(this.getValueText.bind(this)));
        }
        getValueText() {
          let {
              type: t,
              format: e,
              decimalPlaces: i,
              padHours: s,
              padMinutes: a,
              showHours: n,
              showMs: r,
            } = this.$props,
            { value: h, pointerValue: l, min: o, max: d } = this.ja,
            c = e?.() ?? this.Rc.default,
            u = "current" === t() ? h() : l();
          if ("percent" === c) {
            let t = d() - o();
            return (this.Rc.percent ?? tc)((u / t) * 100, i()) + "%";
          }
          return "time" === c
            ? (this.Rc.time ?? eL)(u, {
                padHrs: s(),
                padMins: a(),
                showHrs: n(),
                showMs: r(),
              })
            : (this.Rc.value?.(u) ?? u.toFixed(2)) + "";
        }
      }
      (iZ.props = {
        type: "pointer",
        format: null,
        showHours: !1,
        showMs: !1,
        padHours: null,
        padMinutes: null,
        decimalPlaces: 2,
      }),
        ((t, e, i, s) => {
          for (var a, n = iY(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && iX(e, i, n);
        })([l.method], iZ.prototype, "getValueText");
      class iJ extends l.Component {
        constructor() {
          super(...arguments),
            (this.wh = (0, l.animationFrameThrottle)(() => {
              let { Fd: t, cb: e } = this.ja;
              if (t()) return;
              let i = this.el,
                { offset: s, noClamp: a } = this.$props;
              i &&
                (function (t, { clamp: e, offset: i, orientation: s }) {
                  let a = getComputedStyle(t),
                    n = parseFloat(a.width),
                    r = parseFloat(a.height),
                    h = { top: null, right: null, bottom: null, left: null };
                  if (
                    ((h["horizontal" === s ? "bottom" : "left"] =
                      `calc(100% + var(--media-slider-preview-offset, ${i}px))`),
                    "horizontal" === s)
                  ) {
                    let t = n / 2;
                    if (e) {
                      let e = `max(0px, calc(var(--slider-pointer) - ${t}px))`,
                        i = `calc(100% - ${n}px)`;
                      h.left = `min(${e}, ${i})`;
                    } else h.left = `calc(var(--slider-pointer) - ${t}px)`;
                  } else {
                    let t = r / 2;
                    if (e) {
                      let e = `max(${t}px, calc(var(--slider-pointer) - ${t}px))`,
                        i = `calc(100% - ${r}px)`;
                      h.bottom = `min(${e}, ${i})`;
                    } else h.bottom = `calc(var(--slider-pointer) - ${t}px)`;
                  }
                  Object.assign(t.style, h);
                })(i, { clamp: !a(), offset: s(), orientation: e() });
            }));
        }
        onSetup() {
          this.ja = (0, l.useContext)(iI);
          let { active: t } = (0, l.useState)(iG.state);
          this.setAttributes({ "data-visible": t });
        }
        onAttach(t) {
          Object.assign(t.style, {
            position: "absolute",
            top: 0,
            left: 0,
            width: "max-content",
          });
        }
        onConnect(t) {
          let { oh: e } = this.ja;
          e.set(t),
            (0, l.onDispose)(() => e.set(null)),
            (0, l.effect)(this.wh.bind(this));
          let i = new ResizeObserver(this.wh.bind(this));
          i.observe(t), (0, l.onDispose)(() => i.disconnect());
        }
      }
      iJ.props = { offset: 0, noClamp: !1 };
      class i0 extends l.Component {
        constructor() {
          super(...arguments),
            (this.xh = (0, l.functionThrottle)(this.Oa.bind(this), 25));
        }
        onSetup() {
          this.a = tl();
          let { audioGain: t } = this.a.$state;
          (0, l.provideContext)(iR, {
            default: "percent",
            value: (e) => (e * (t() ?? 1)).toFixed(2),
            percent: (e) => Math.round(e * (t() ?? 1)),
          }),
            new iV({
              ra: this.$props.step,
              fb: this.$props.keyStep,
              Ea: Math.round,
              z: this.z.bind(this),
              jf: this.jf.bind(this),
              P: this.P.bind(this),
              Q: this.Q.bind(this),
              T: this.T.bind(this),
              l: this.l.bind(this),
            }).attach(this),
            (0, l.effect)(this.Gc.bind(this));
        }
        onAttach(t) {
          t.setAttribute("data-media-volume-slider", ""),
            tm(t, "aria-label", "Volume");
          let { canSetVolume: e } = this.a.$state;
          this.setAttributes({
            "data-supported": e,
            "aria-hidden": iw(() => !e()),
          });
        }
        P() {
          let { value: t } = this.$state,
            { audioGain: e } = this.a.$state;
          return Math.round(t() * (e() ?? 1));
        }
        Q() {
          let { value: t, max: e } = this.$state,
            { audioGain: i } = this.a.$state;
          return tc((t() / e()) * (i() ?? 1) * 100, 2) + "%";
        }
        jf() {
          let { audioGain: t } = this.a.$state;
          return this.$state.max() * (t() ?? 1);
        }
        z() {
          let { disabled: t } = this.$props,
            { canSetVolume: e } = this.a.$state;
          return t() || !e();
        }
        Gc() {
          let { muted: t, volume: e } = this.a.$state,
            i = t() ? 0 : 100 * e();
          this.$state.value.set(i),
            this.dispatch("value-change", { detail: i });
        }
        Oa(t) {
          if (!t.trigger) return;
          let e = tc(t.detail / 100, 3);
          this.a.remote.changeVolume(e, t);
        }
        l(t) {
          this.xh(t);
        }
        T(t) {
          this.xh(t);
        }
      }
      (i0.props = { ...iV.props, keyStep: 5, shiftKeyMultiplier: 2 }),
        (i0.state = iq);
      class i1 extends l.Component {
        onSetup() {
          (this.a = tl()),
            (0, l.provideContext)(iR, {
              default: "percent",
              percent: (t, e) => tc(this.$state.value(), e) + "%",
            }),
            new iV({
              ra: this.$props.step,
              fb: this.$props.keyStep,
              Ea: Math.round,
              z: this.z.bind(this),
              P: this.P.bind(this),
              Q: this.Q.bind(this),
              T: this.T.bind(this),
              l: this.l.bind(this),
            }).attach(this),
            (0, l.effect)(this.Pc.bind(this)),
            (0, l.effect)(this.ul.bind(this));
        }
        onAttach(t) {
          t.setAttribute("data-media-audio-gain-slider", ""),
            tm(t, "aria-label", "Audio Boost");
          let { canSetAudioGain: e } = this.a.$state;
          this.setAttributes({
            "data-supported": e,
            "aria-hidden": iw(() => !e()),
          });
        }
        P() {
          let { value: t } = this.$state;
          return Math.round(t());
        }
        Q() {
          let { value: t } = this.$state;
          return t() + "%";
        }
        Pc() {
          let { min: t, max: e } = this.$props;
          this.$state.min.set(t()), this.$state.max.set(e());
        }
        ul() {
          let { audioGain: t } = this.a.$state,
            e = ((t() ?? 1) - 1) * 100;
          this.$state.value.set(e),
            this.dispatch("value-change", { detail: e });
        }
        z() {
          let { disabled: t } = this.$props,
            { canSetAudioGain: e } = this.a.$state;
          return t() || !e();
        }
        yh(t) {
          if (!t.trigger) return;
          let e = tc(1 + t.detail / 100, 2);
          this.a.remote.changeAudioGain(e, t);
        }
        l(t) {
          this.yh(t);
        }
        T(t) {
          this.yh(t);
        }
      }
      (i1.props = {
        ...iV.props,
        step: 25,
        keyStep: 25,
        shiftKeyMultiplier: 2,
        min: 0,
        max: 300,
      }),
        (i1.state = iq);
      class i2 extends l.Component {
        constructor() {
          super(...arguments),
            (this.zh = (0, l.functionThrottle)(this.vl.bind(this), 25));
        }
        onSetup() {
          (this.a = tl()),
            new iV({
              ra: this.$props.step,
              fb: this.$props.keyStep,
              Ea: this.Ea,
              z: this.z.bind(this),
              P: this.P.bind(this),
              Q: this.Q.bind(this),
              T: this.T.bind(this),
              l: this.l.bind(this),
            }).attach(this),
            (0, l.effect)(this.Pc.bind(this)),
            (0, l.effect)(this.Re.bind(this));
        }
        onAttach(t) {
          t.setAttribute("data-media-speed-slider", ""),
            tm(t, "aria-label", "Speed");
          let { canSetPlaybackRate: e } = this.a.$state;
          this.setAttributes({
            "data-supported": e,
            "aria-hidden": iw(() => !e()),
          });
        }
        P() {
          let { value: t } = this.$state;
          return t();
        }
        Q() {
          let { value: t } = this.$state;
          return t() + "x";
        }
        Pc() {
          let { min: t, max: e } = this.$props;
          this.$state.min.set(t()), this.$state.max.set(e());
        }
        Re() {
          let { playbackRate: t } = this.a.$state,
            e = t();
          this.$state.value.set(e),
            this.dispatch("value-change", { detail: e });
        }
        Ea(t) {
          return tc(t, 2);
        }
        z() {
          let { disabled: t } = this.$props,
            { canSetPlaybackRate: e } = this.a.$state;
          return t() || !e();
        }
        vl(t) {
          if (!t.trigger) return;
          let e = t.detail;
          this.a.remote.changePlaybackRate(e, t);
        }
        l(t) {
          this.zh(t);
        }
        T(t) {
          this.zh(t);
        }
      }
      (i2.props = {
        ...iV.props,
        step: 0.25,
        keyStep: 0.25,
        shiftKeyMultiplier: 2,
        min: 0,
        max: 2,
      }),
        (i2.state = iq);
      class i5 extends l.Component {
        constructor() {
          super(...arguments),
            (this.Sc = (0, l.computed)(() => {
              let { qualities: t } = this.a.$state;
              return tU(t());
            })),
            (this.Ah = (0, l.functionThrottle)(this._a.bind(this), 25));
        }
        onSetup() {
          (this.a = tl()),
            new iV({
              ra: this.$props.step,
              fb: this.$props.keyStep,
              Ea: Math.round,
              z: this.z.bind(this),
              P: this.P.bind(this),
              Q: this.Q.bind(this),
              T: this.T.bind(this),
              l: this.l.bind(this),
            }).attach(this),
            (0, l.effect)(this.wl.bind(this)),
            (0, l.effect)(this.xl.bind(this));
        }
        onAttach(t) {
          t.setAttribute("data-media-quality-slider", ""),
            tm(t, "aria-label", "Video Quality");
          let { qualities: e, canSetQuality: i } = this.a.$state,
            s = (0, l.computed)(() => i() && e().length > 0);
          this.setAttributes({
            "data-supported": s,
            "aria-hidden": iw(() => !s()),
          });
        }
        P() {
          let { value: t } = this.$state;
          return t();
        }
        Q() {
          let { quality: t } = this.a.$state;
          if (!t()) return "";
          let { height: e, bitrate: i } = t(),
            s = i && i > 0 ? `${(i / 1e6).toFixed(2)} Mbps` : null;
          return e ? `${e}p${s ? ` (${s})` : ""}` : "Auto";
        }
        wl() {
          let t = this.Sc();
          this.$state.max.set(Math.max(0, t.length - 1));
        }
        xl() {
          let { quality: t } = this.a.$state,
            e = Math.max(0, this.Sc().indexOf(t()));
          this.$state.value.set(e),
            this.dispatch("value-change", { detail: e });
        }
        z() {
          let { disabled: t } = this.$props,
            { canSetQuality: e, qualities: i } = this.a.$state;
          return t() || i().length <= 1 || !e();
        }
        _a(t) {
          if (!t.trigger) return;
          let { qualities: e } = this.a,
            i = (0, l.peek)(this.Sc)[t.detail];
          this.a.remote.changeQuality(e.indexOf(i), t);
        }
        l(t) {
          this.Ah(t);
        }
        T(t) {
          this.Ah(t);
        }
      }
      (i5.props = { ...iV.props, step: 1, keyStep: 1, shiftKeyMultiplier: 1 }),
        (i5.state = iq);
      class i3 extends l.Component {
        constructor() {
          super(), (this.Bh = (0, l.signal)(null)), (this.nf = !1);
          let { noSwipeGesture: t } = this.$props;
          new iV({
            lh: () => !t(),
            Z: this.Z.bind(this),
            ra: this.ra.bind(this),
            fb: this.fb.bind(this),
            Ea: this.Ea,
            z: this.z.bind(this),
            P: this.P.bind(this),
            Q: this.Q.bind(this),
            ff: this.ff.bind(this),
            T: this.T.bind(this),
            Ed: this.Ed.bind(this),
            l: this.l.bind(this),
          });
        }
        onSetup() {
          (this.a = tl()),
            (0, l.provideContext)(iR, {
              default: "time",
              value: this.yl.bind(this),
              time: this.zl.bind(this),
            }),
            this.setAttributes({ "data-chapters": this.Al.bind(this) }),
            this.setStyles({ "--slider-progress": this.Bl.bind(this) }),
            (0, l.effect)(this.Rb.bind(this)),
            (0, l.effect)(this.Cl.bind(this));
        }
        onAttach(t) {
          t.setAttribute("data-media-time-slider", ""),
            tm(t, "aria-label", "Seek");
        }
        onConnect(t) {
          (0, l.effect)(this.Dl.bind(this)),
            J(this.a.textTracks, "chapters", this.Bh.set);
        }
        Bl() {
          let { bufferedEnd: t, duration: e } = this.a.$state;
          return tc(100 * Math.min(t() / Math.max(e(), 1), 1), 3) + "%";
        }
        Al() {
          let { duration: t } = this.a.$state;
          return this.Bh()?.cues.length && Number.isFinite(t()) && t() > 0;
        }
        Cl() {
          this.mf = (0, l.functionThrottle)(
            this.Ka.bind(this),
            this.$props.seekingRequestThrottle(),
          );
        }
        Rb() {
          if (this.$state.hidden()) return;
          let { value: t, dragging: e } = this.$state,
            i = this.Z();
          (0, l.peek)(e) ||
            (t.set(i), this.dispatch("value-change", { detail: i }));
        }
        Dl() {
          let t = this.a.player.el,
            { oh: e } = (0, l.useContext)(iI);
          t &&
            e() &&
            (0, l.setAttribute)(t, "data-preview", this.$state.active());
        }
        Ka(t, e) {
          this.a.remote.seeking(t, e);
        }
        El(t, e, i) {
          this.mf.cancel();
          let { live: s } = this.a.$state;
          if (s() && e >= 99) {
            this.a.remote.seekToLiveEdge(i);
            return;
          }
          this.a.remote.seek(t, i);
        }
        ff(t) {
          let { pauseWhileDragging: e } = this.$props;
          if (e()) {
            let { paused: e } = this.a.$state;
            (this.nf = !e()), this.a.remote.pause(t);
          }
        }
        T(t) {
          this.mf(this.Xb(t.detail), t);
        }
        Ed(t) {
          let { seeking: e } = this.a.$state;
          (0, l.peek)(e) || this.Ka(this.Xb(t.detail), t);
          let i = t.detail;
          this.El(this.Xb(i), i, t);
          let { pauseWhileDragging: s } = this.$props;
          s() && this.nf && (this.a.remote.play(t), (this.nf = !1));
        }
        l(t) {
          let { dragging: e } = this.$state;
          !e() && t.trigger && this.Ed(t);
        }
        Z() {
          let { currentTime: t } = this.a.$state;
          return this.Fl(t());
        }
        ra() {
          let t = (this.$props.step() / this.a.$state.duration()) * 100;
          return Number.isFinite(t) ? t : 1;
        }
        fb() {
          let t = (this.$props.keyStep() / this.a.$state.duration()) * 100;
          return Number.isFinite(t) ? t : 1;
        }
        Ea(t) {
          return tc(t, 3);
        }
        z() {
          let { disabled: t } = this.$props,
            { canSeek: e } = this.a.$state;
          return t() || !e();
        }
        P() {
          let { value: t } = this.$state;
          return Math.round(t());
        }
        Q() {
          let t = this.Xb(this.$state.value()),
            { duration: e } = this.a.$state;
          return Number.isFinite(t) ? `${eN(t)} out of ${eN(e())}` : "live";
        }
        Xb(t) {
          let { duration: e } = this.a.$state;
          return tc((t / 100) * e(), 5);
        }
        Fl(t) {
          let { liveEdge: e, duration: i } = this.a.$state,
            s = Math.max(0, Math.min(1, e() ? 1 : Math.min(t, i()) / i()));
          return Number.isNaN(s) ? 0 : Number.isFinite(s) ? 100 * s : 100;
        }
        yl(t) {
          let e = this.Xb(t),
            { live: i, duration: s } = this.a.$state;
          return Number.isFinite(e) ? (i() ? e - s() : e).toFixed(0) : "LIVE";
        }
        zl(t, e) {
          let i = this.Xb(t),
            { live: s, duration: a } = this.a.$state,
            n = s() ? i - a() : i;
          return Number.isFinite(i)
            ? `${n < 0 ? "-" : ""}${eL(Math.abs(n), e)}`
            : "LIVE";
        }
      }
      (i3.props = {
        ...iV.props,
        step: 0.1,
        keyStep: 5,
        shiftKeyMultiplier: 2,
        pauseWhileDragging: !1,
        noSwipeGesture: !1,
        seekingRequestThrottle: 100,
      }),
        (i3.state = iq);
      var i7 = Object.defineProperty,
        i6 = Object.getOwnPropertyDescriptor,
        i4 = (t, e, i, s) => {
          for (var a, n = i6(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && i7(e, i, n), n;
        };
      class i9 extends l.Component {
        constructor() {
          super(...arguments),
            (this.zb = null),
            (this.ka = []),
            (this.Hd = (0, l.signal)(null)),
            (this.la = (0, l.signal)([])),
            (this.Yb = (0, l.signal)(-1)),
            (this.Id = (0, l.signal)(-1)),
            (this.Tc = 0),
            (this.Nl = (0, l.animationFrameThrottle)((t) => {
              let e,
                i = this.la(),
                { clipStartTime: s } = this.a.$state,
                a = s(),
                n = this.rf(i);
              for (let s = this.Tc; s < this.ka.length; s++)
                if (
                  ((e = this.qf(i[s], t, a, n)),
                  this.ka[s]?.style.setProperty("--chapter-progress", e + "%"),
                  e < 100)
                ) {
                  this.Tc = s;
                  break;
                }
            })),
            (this.Ol = (0, l.computed)(this.Pl.bind(this))),
            (this.Jd = (0, l.functionDebounce)(
              () => {
                let t = (0, l.peek)(this.Hd);
                this.scope &&
                  t &&
                  t.cues.length &&
                  (this.la.set(this.Ql(t.cues)), this.Yb.set(0), (this.Tc = 0));
              },
              150,
              !0,
            ));
        }
        get cues() {
          return this.la();
        }
        get activeCue() {
          return this.la()[this.Yb()] || null;
        }
        get activePointerCue() {
          return this.la()[this.Id()] || null;
        }
        onSetup() {
          (this.a = tl()), (this.Gd = (0, l.useState)(i3.state));
        }
        onAttach(t) {
          J(this.a.textTracks, "chapters", this.Ch.bind(this)),
            (0, l.effect)(this.Gl.bind(this));
        }
        onConnect() {
          (0, l.onDispose)(() => this.A.bind(this));
        }
        onDestroy() {
          this.Ch(null);
        }
        setRefs(t) {
          if (((this.ka = t), this.of?.dispose(), 1 === this.ka.length)) {
            let t = this.ka[0];
            (t.style.width = "100%"),
              t.style.setProperty("--chapter-fill", "var(--slider-fill)"),
              t.style.setProperty(
                "--chapter-progress",
                "var(--slider-progress)",
              );
          } else
            this.ka.length > 0 &&
              (0, l.scoped)(() => this.Hl(), (this.of = (0, l.createScope)()));
        }
        Ch(t) {
          (0, l.peek)(this.Hd) !== t && (this.A(), this.Hd.set(t));
        }
        A() {
          (this.ka = []),
            this.la.set([]),
            this.Yb.set(-1),
            this.Id.set(-1),
            (this.Tc = 0),
            this.of?.dispose();
        }
        Hl() {
          this.ka.length && (0, l.effect)(this.Il.bind(this));
        }
        Il() {
          let { hidden: t } = this.Gd;
          t() ||
            ((0, l.effect)(this.Jl.bind(this)),
            (0, l.effect)(this.Kl.bind(this)),
            (0, l.effect)(this.Ll.bind(this)),
            (0, l.effect)(this.Ml.bind(this)));
        }
        Jl() {
          let t = this.la();
          if (!t.length) return;
          let e,
            { clipStartTime: i, clipEndTime: s } = this.a.$state,
            a = i(),
            n = (s() || t[t.length - 1].endTime) - a,
            r = 100;
          for (let i = 0; i < t.length; i++)
            if (((e = t[i]), this.ka[i])) {
              let s =
                i === t.length - 1
                  ? r
                  : tc(((e.endTime - Math.max(a, e.startTime)) / n) * 100, 3);
              (this.ka[i].style.width = s + "%"), (r -= s);
            }
        }
        Kl() {
          let { liveEdge: t, clipStartTime: e, duration: i } = this.a.$state,
            { fillPercent: s, value: a } = this.Gd,
            n = this.la(),
            r = t(),
            h = (0, l.peek)(this.Yb),
            o = n[h],
            d = r
              ? this.la.length - 1
              : this.Dh(
                  o && (o.startTime / i()) * 100 <= (0, l.peek)(a) ? h : 0,
                  s(),
                );
          r || !o
            ? this.pf(0, n.length, 100)
            : d > h
              ? this.pf(h, d, 100)
              : d < h && this.pf(d + 1, h + 1, 0);
          let c = r ? 100 : this.qf(n[d], s(), e(), this.rf(n));
          this.Eh(this.ka[d], c), this.Yb.set(d);
        }
        Ll() {
          let { pointing: t, pointerPercent: e } = this.Gd;
          if (!t()) {
            this.Id.set(-1);
            return;
          }
          let i = this.Dh(0, e());
          this.Id.set(i);
        }
        pf(t, e, i) {
          for (let s = t; s < e; s++) this.Eh(this.ka[s], i);
        }
        Eh(t, e) {
          t &&
            (t.style.setProperty("--chapter-fill", e + "%"),
            (0, l.setAttribute)(t, "data-active", e > 0 && e < 100),
            (0, l.setAttribute)(t, "data-ended", 100 === e));
        }
        Dh(t, e) {
          let i = 0,
            s = this.la();
          if (0 === e) return 0;
          if (100 === e) return s.length - 1;
          let { clipStartTime: a } = this.a.$state,
            n = a(),
            r = this.rf(s);
          for (let a = t; a < s.length; a++)
            if ((i = this.qf(s[a], e, n, r)) >= 0 && i < 100) return a;
          return 0;
        }
        Ml() {
          this.Nl(this.Ol());
        }
        Pl() {
          let { bufferedEnd: t, duration: e } = this.a.$state;
          return 100 * tc(Math.min(t() / Math.max(e(), 1), 1), 3);
        }
        rf(t) {
          let { clipEndTime: e } = this.a.$state,
            i = e();
          return i > 0 ? i : t[t.length - 1]?.endTime || 0;
        }
        qf(t, e, i, s) {
          if (0 === this.la().length) return 0;
          let a = s - i,
            n = Math.max(0, t.startTime - i),
            r = Math.min(s, t.endTime) - i,
            h = n / a,
            l = 100 * h,
            o = 100 * Math.min(1, h + (r - n) / a);
          return Math.max(0, tc(e >= o ? 100 : ((e - l) / (o - l)) * 100, 3));
        }
        Ql(t) {
          let e = [],
            { clipStartTime: i, clipEndTime: s, duration: a } = this.a.$state,
            n = i(),
            r = s() || 1 / 0,
            h = (t = t.filter((t) => t.startTime <= r && t.endTime >= n))[0];
          h && h.startTime > n && e.push(new window.VTTCue(n, h.startTime, ""));
          for (let i = 0; i < t.length - 1; i++) {
            let s = t[i],
              a = t[i + 1];
            if ((e.push(s), a)) {
              let t = a.startTime - s.endTime;
              t > 0 && e.push(new window.VTTCue(s.endTime, s.endTime + t, ""));
            }
          }
          let l = t[t.length - 1];
          if (l) {
            e.push(l);
            let t = a();
            t >= 0 &&
              t - l.endTime > 1 &&
              e.push(new window.VTTCue(l.endTime, a(), ""));
          }
          return e;
        }
        Gl() {
          let { source: t } = this.a.$state;
          t(), this.qc();
        }
        qc() {
          if (!this.scope) return;
          let { disabled: t } = this.$props;
          if (t()) {
            this.la.set([]), this.Yb.set(0), (this.Tc = 0);
            return;
          }
          let e = this.Hd();
          if (e) {
            let t = this.Jd.bind(this);
            t(),
              (0, l.onDispose)((0, l.listenEvent)(e, "add-cue", t)),
              (0, l.onDispose)((0, l.listenEvent)(e, "remove-cue", t)),
              (0, l.effect)(this.Rl.bind(this));
          }
          return (
            (this.zb = this.Sl()),
            this.zb && (0, l.effect)(this.Tl.bind(this)),
            () => {
              this.zb && ((this.zb.textContent = ""), (this.zb = null));
            }
          );
        }
        Rl() {
          this.a.$state.duration(), this.Jd();
        }
        Tl() {
          let t = this.activePointerCue || this.activeCue;
          this.zb && (this.zb.textContent = t?.text || "");
        }
        Ul() {
          let t = this.el;
          for (; t && "slider" !== t.getAttribute("role"); )
            t = t.parentElement;
          return t;
        }
        Sl() {
          let t = this.Ul();
          return t ? t.querySelector('[data-part="chapter-title"]') : null;
        }
      }
      (i9.props = { disabled: !1 }),
        i4([l.prop], i9.prototype, "cues"),
        i4([l.prop], i9.prototype, "activeCue"),
        i4([l.prop], i9.prototype, "activePointerCue"),
        i4([l.method], i9.prototype, "setRefs");
      let i8 = (0, l.createContext)(),
        st = ["a[href]", "[tabindex]", "input", "select", "button"]
          .map((t) => `${t}:not([aria-hidden='true'])`)
          .join(","),
        se = new Set([
          "Escape",
          "Tab",
          "ArrowUp",
          "ArrowDown",
          "Home",
          "PageUp",
          "End",
          "PageDown",
          "Enter",
          " ",
        ]);
      class si {
        constructor(t) {
          (this.j = t), (this.Uc = -1), (this.Ta = null), (this.sa = []);
        }
        get B() {
          return this.sa;
        }
        Vl(t) {
          (0, l.listenEvent)(t, "focus", this.Fc.bind(this)),
            (this.Ta = t),
            (0, l.onDispose)(() => {
              this.Ta = null;
            });
        }
        zd() {
          this.Ta &&
            (this.Ia(),
            (0, l.listenEvent)(this.Ta, "keyup", this.ic.bind(this)),
            (0, l.listenEvent)(this.Ta, "keydown", this.jc.bind(this)),
            (0, l.onDispose)(() => {
              (this.Uc = -1), (this.sa = []);
            }));
        }
        Ia() {
          (this.Uc = 0), (this.sa = this.Wl());
        }
        Fh(t = this.Gh()) {
          let e = this.sa[t];
          e &&
            requestAnimationFrame(() => {
              requestAnimationFrame(() => {
                !(function (t, e = {}) {
                  !(function (t, e) {
                    for (let { el: i, top: s, left: a } of (0, l.r)(t, e))
                      i.scroll({ top: s, left: a, behavior: e.behavior });
                  })(t, {
                    scrollMode: "if-needed",
                    block: "center",
                    inline: "center",
                    ...e,
                  });
                })(e, {
                  behavior: "smooth",
                  boundary: (t) => !t.hasAttribute("data-root"),
                });
              });
            });
        }
        Hh(t = !0) {
          let e = this.Gh();
          this.Zb(e >= 0 ? e : 0, t);
        }
        Zb(t, e = !0) {
          (this.Uc = t),
            this.sa[t]
              ? (this.sa[t].focus({ preventScroll: !0 }), e && this.Fh(t))
              : this.Ta?.focus({ preventScroll: !0 });
        }
        Gh() {
          return this.sa.findIndex(
            (t) =>
              document.activeElement === t ||
              ("menuitemradio" === t.getAttribute("role") &&
                "true" === t.getAttribute("aria-checked")),
          );
        }
        Fc() {
          this.Uc >= 0 || (this.Ia(), this.Hh());
        }
        Ih(t) {
          let e = t.target;
          if ((0, l.wasEnterKeyPressed)(t) && e instanceof Element) {
            let t = e.getAttribute("role");
            return !/a|input|select|button/.test(e.localName) && !t;
          }
          return se.has(t.key);
        }
        ic(t) {
          this.Ih(t) && (t.stopPropagation(), t.preventDefault());
        }
        jc(t) {
          if (this.Ih(t))
            switch ((t.stopPropagation(), t.preventDefault(), t.key)) {
              case "Escape":
                this.j.Xl(t);
                break;
              case "Tab":
                this.Zb(this.sf(t.shiftKey ? -1 : 1));
                break;
              case "ArrowUp":
                this.Zb(this.sf(-1));
                break;
              case "ArrowDown":
                this.Zb(this.sf(1));
                break;
              case "Home":
              case "PageUp":
                this.Zb(0);
                break;
              case "End":
              case "PageDown":
                this.Zb(this.sa.length - 1);
            }
        }
        sf(t) {
          let e = this.Uc;
          do e = (e + t + this.sa.length) % this.sa.length;
          while (this.sa[e]?.offsetParent === null);
          return e;
        }
        Wl() {
          if (!this.Ta) return [];
          let t = this.Ta.querySelectorAll(st),
            e = [],
            i = (t) => "menu" === t.getAttribute("role");
          for (let s of t)
            tP(s) && null !== s.offsetParent && t$(this.Ta, s, i) && e.push(s);
          return e;
        }
      }
      var ss = Object.defineProperty,
        sa = Object.getOwnPropertyDescriptor,
        sn = (t, e, i, s) => {
          for (var a, n = sa(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && ss(e, i, n), n;
        };
      let sr = 0;
      class sh extends l.Component {
        constructor() {
          super(),
            (this.U = (0, l.signal)(!1)),
            (this.Fd = (0, l.signal)(!1)),
            (this.N = (0, l.signal)(null)),
            (this.q = (0, l.signal)(null)),
            (this.Wc = new Set()),
            (this.Kd = null),
            (this.Md = !1),
            (this.Jh = (0, l.signal)(!1)),
            (this.Nd = new Set()),
            (this.Af = !1),
            (this.jm = this.km.bind(this)),
            (this.Df = !1),
            (this.hm = this.lm.bind(this)),
            (this.im = this.mm.bind(this)),
            (this.qa = (0, l.animationFrameThrottle)(() => {
              let t = (0, l.peek)(this.q);
              if (!t || c) return;
              let e = 0,
                i = getComputedStyle(t),
                s = [...t.children];
              for (let t of [
                "paddingTop",
                "paddingBottom",
                "borderTopWidth",
                "borderBottomWidth",
              ])
                e += parseFloat(i[t]) || 0;
              for (let t of s)
                if (tP(t) && "contents" === t.style.display)
                  s.push(...t.children);
                else if (3 === t.nodeType)
                  e += parseFloat(getComputedStyle(t).fontSize);
                else if (tP(t)) {
                  if (!tv(t)) continue;
                  let i = getComputedStyle(t);
                  e +=
                    t.offsetHeight +
                    (parseFloat(i.marginTop) || 0) +
                    (parseFloat(i.marginBottom) || 0);
                }
              (0, l.setStyle)(t, "--menu-height", e + "px");
            })),
            (this.Cf = !1);
          let { showDelay: t } = this.$props;
          this.Ld = new ic({
            N: this.N,
            q: this.q,
            jh: t,
            zd: (t, e, i) => {
              tw(t, (t) => {
                this.U() ? i(t) : e(t);
              });
              let s = this.Yl();
              s &&
                tw(s, (t) => {
                  t.stopPropagation(), i(t);
                });
            },
            F: this.Zl.bind(this),
          });
        }
        get triggerElement() {
          return this.N();
        }
        get contentElement() {
          return this.q();
        }
        get isSubmenu() {
          return !!this.Vc;
        }
        onSetup() {
          this.a = tl();
          let t = ++sr;
          (this.tf = `media-menu-${t}`),
            (this.uf = `media-menu-button-${t}`),
            (this._b = new si({ Xl: this.close.bind(this) })),
            (0, l.hasProvidedContext)(i8) && (this.Vc = (0, l.useContext)(i8)),
            this._l(),
            this.setAttributes({
              "data-open": this.U,
              "data-root": !this.isSubmenu,
              "data-submenu": this.isSubmenu,
              "data-disabled": this.z.bind(this),
            }),
            (0, l.provideContext)(i8, {
              $l: this.N,
              q: this.q,
              U: this.U,
              $b: (0, l.signal)(""),
              Vm: !!this.Vc,
              hb: this.hb.bind(this),
              vf: this.vf.bind(this),
              wf: this.wf.bind(this),
              xf: this.xf.bind(this),
              yf: this.yf.bind(this),
              zf: this.zf.bind(this),
              am: (t) => {
                this.Nd.add(t),
                  (0, l.onDispose)(() => {
                    this.Nd.delete(t);
                  });
              },
            });
        }
        onAttach(t) {
          t.style.setProperty("display", "contents");
        }
        onConnect(t) {
          (0, l.effect)(this.bm.bind(this)),
            this.isSubmenu && this.Vc?.zf(this);
        }
        onDestroy() {
          this.N.set(null), this.q.set(null), (this.Kd = null), this.Nd.clear();
        }
        _l() {
          let t = -1,
            e = (0, l.hasProvidedContext)(iF) ? (0, l.useContext)(iF) : null;
          (0, l.provideContext)(iF, {
            onDragStart: () => {
              e?.onDragStart?.(),
                window.clearTimeout(t),
                (t = -1),
                (this.Md = !0);
            },
            onDragEnd: () => {
              e?.onDragEnd?.(),
                (t = window.setTimeout(() => {
                  (this.Md = !1), (t = -1);
                }, 300));
            },
          });
        }
        bm() {
          let t = this.cm();
          this.isSubmenu || this.qa(),
            this.Kh(t),
            t &&
              ((0, l.effect)(() => {
                let { height: t } = this.a.$state,
                  e = this.q();
                e && (0, l.setStyle)(e, "--player-height", t() + "px");
              }),
              this._b.zd(),
              this.listen("pointerup", this.dm.bind(this)),
              (0, l.listenEvent)(window, "pointerup", this.em.bind(this)));
        }
        vf(t) {
          let e = t.el,
            i = this.isSubmenu,
            s = iw(this.z.bind(this));
          tm(e, "tabindex", i ? "-1" : "0"),
            tm(e, "role", i ? "menuitem" : "button"),
            (0, l.setAttribute)(e, "id", this.uf),
            (0, l.setAttribute)(e, "aria-haspopup", "menu"),
            (0, l.setAttribute)(e, "aria-expanded", "false"),
            (0, l.setAttribute)(e, "data-root", !this.isSubmenu),
            (0, l.setAttribute)(e, "data-submenu", this.isSubmenu);
          let a = () => {
            (0, l.setAttribute)(e, "data-open", this.U()),
              (0, l.setAttribute)(e, "aria-disabled", s());
          };
          c ? a() : (0, l.effect)(a),
            this.N.set(e),
            (0, l.onDispose)(() => {
              this.N.set(null);
            });
        }
        wf(t) {
          let e = t.el;
          e.style.setProperty("display", "none"),
            (0, l.setAttribute)(e, "id", this.tf),
            tm(e, "role", "menu"),
            tm(e, "tabindex", "-1"),
            (0, l.setAttribute)(e, "data-root", !this.isSubmenu),
            (0, l.setAttribute)(e, "data-submenu", this.isSubmenu),
            this.q.set(e),
            (0, l.onDispose)(() => this.q.set(null));
          let i = () => (0, l.setAttribute)(e, "data-open", this.U());
          c ? i() : (0, l.effect)(i), this._b.Vl(e), this.Kh(!1);
          let s = this.fm.bind(this);
          this.isSubmenu
            ? this.Vc?.am(s)
            : (t.listen("transitionstart", s),
              t.listen("transitionend", s),
              t.listen("animationend", this.qa),
              t.listen("vds-menu-resize", this.qa));
        }
        xf(t) {
          this.Kd = t;
        }
        Kh(t) {
          let e = (0, l.peek)(this.q);
          e && (0, l.setAttribute)(e, "aria-hidden", (0, l.ariaBool)(!t));
        }
        yf(t) {
          this.Jh.set(t);
        }
        Zl(t, e) {
          if (
            ((this.Af = (0, l.isKeyboardEvent)(e)),
            e?.stopPropagation(),
            this.U() === t)
          )
            return;
          if (this.z()) {
            t && this.Ld.hide(e);
            return;
          }
          this.el?.dispatchEvent(
            new Event("vds-menu-resize", { bubbles: !0, composed: !0 }),
          );
          let i = this.N(),
            s = this.q();
          if (
            (i &&
              ((0, l.setAttribute)(i, "aria-controls", t && this.tf),
              (0, l.setAttribute)(i, "aria-expanded", (0, l.ariaBool)(t))),
            s && (0, l.setAttribute)(s, "aria-labelledby", t && this.uf),
            this.U.set(t),
            this.gm(e),
            (0, l.tick)(),
            this.Af)
          )
            for (let e of (t ? s?.focus() : i?.focus(), [this.el, s]))
              e && e.setAttribute("data-keyboard", "");
          else
            for (let t of [this.el, s]) t && t.removeAttribute("data-keyboard");
          if ((this.dispatch(t ? "open" : "close", { trigger: e }), t))
            this.isSubmenu ||
              this.a.activeMenu === this ||
              (this.a.activeMenu?.close(e), (this.a.activeMenu = this)),
              this.Kd?.Bf?.(e);
          else {
            if (this.isSubmenu) for (let t of this.Wc) t.close(e);
            else this.a.activeMenu = null;
            this.Kd?.Wm?.(e);
          }
          t && requestAnimationFrame(this.Lh.bind(this));
        }
        Lh() {
          this.Cf ||
            this.Df ||
            (this._b.Ia(),
            requestAnimationFrame(() => {
              this.Af ? this._b.Hh() : this._b.Fh();
            }));
        }
        cm() {
          return !this.z() && this.U();
        }
        z() {
          return this.Fd() || this.Jh();
        }
        hb(t) {
          this.Fd.set(t);
        }
        dm(t) {
          let e = this.q();
          this.Md || (e && tg(e, t)) || t.stopPropagation();
        }
        em(t) {
          let e = this.q();
          this.Md || (e && tg(e, t)) || this.close(t);
        }
        Yl() {
          let t = this.el?.querySelector('[data-part="close-target"]');
          return this.el &&
            t &&
            t$(this.el, t, (t) => "menu" === t.getAttribute("role"))
            ? t
            : null;
        }
        gm(t) {
          this.isSubmenu ||
            (this.U()
              ? this.a.remote.pauseControls(t)
              : this.a.remote.resumeControls(t));
        }
        zf(t) {
          this.Wc.add(t),
            (0, l.listenEvent)(t, "open", this.hm),
            (0, l.listenEvent)(t, "close", this.im),
            (0, l.onDispose)(this.jm);
        }
        km(t) {
          this.Wc.delete(t);
        }
        lm(t) {
          this.Df = !0;
          let e = this.q();
          for (let e of (this.isSubmenu &&
            this.triggerElement?.setAttribute("aria-hidden", "true"),
          this.Wc))
            if (e !== t.target)
              for (let t of [e.el, e.triggerElement])
                t?.setAttribute("aria-hidden", "true");
          if (e) {
            let i = t.target.el;
            for (let t of e.children)
              t.contains(i)
                ? t.setAttribute("data-open", "")
                : t !== i && t.setAttribute("data-hidden", "");
          }
        }
        mm(t) {
          this.Df = !1;
          let e = this.q();
          for (let t of (this.isSubmenu &&
            this.triggerElement?.setAttribute("aria-hidden", "false"),
          this.Wc))
            for (let e of [t.el, t.triggerElement])
              e?.setAttribute("aria-hidden", "false");
          if (e)
            for (let t of e.children)
              t.removeAttribute("data-open"), t.removeAttribute("data-hidden");
        }
        fm(t) {
          let e = this.q();
          for (let i of (e &&
            "height" === t.propertyName &&
            ((this.Cf = "transitionstart" === t.type),
            (0, l.setAttribute)(
              e,
              "data-transition",
              this.Cf ? "height" : null,
            ),
            this.U() && this.Lh()),
          this.Nd))
            i(t);
        }
        open(t) {
          (0, l.peek)(this.U) || (this.Ld.show(t), (0, l.tick)());
        }
        close(t) {
          (0, l.peek)(this.U) && (this.Ld.hide(t), (0, l.tick)());
        }
      }
      (sh.props = { showDelay: 0 }),
        sn([l.prop], sh.prototype, "triggerElement"),
        sn([l.prop], sh.prototype, "contentElement"),
        sn([l.prop], sh.prototype, "isSubmenu"),
        sn([l.method], sh.prototype, "open"),
        sn([l.method], sh.prototype, "close");
      var sl = Object.defineProperty,
        so = Object.getOwnPropertyDescriptor;
      class sd extends l.Component {
        constructor() {
          super(), (this.Mh = (0, l.signal)(null)), new e0();
        }
        get expanded() {
          return this.n?.U() ?? !1;
        }
        onSetup() {
          this.n = (0, l.useContext)(i8);
        }
        onAttach(t) {
          this.n.vf(this),
            (0, l.effect)(this.Oc.bind(this)),
            tm(t, "type", "button");
        }
        onConnect(t) {
          (0, l.effect)(this.nm.bind(this)), this.Hc();
          let e = new MutationObserver(this.Hc.bind(this));
          e.observe(t, {
            attributeFilter: ["data-part"],
            childList: !0,
            subtree: !0,
          }),
            (0, l.onDispose)(() => e.disconnect()),
            tw(t, (t) => {
              this.dispatch("select", { trigger: t });
            });
        }
        Oc() {
          this.n.yf(this.$props.disabled());
        }
        nm() {
          let t = this.Mh();
          t &&
            (0, l.effect)(() => {
              let e = this.n.$b();
              e && (t.textContent = e);
            });
        }
        Hc() {
          let t = this.el?.querySelector('[data-part="hint"]');
          this.Mh.set(t ?? null);
        }
      }
      (sd.props = { disabled: !1 }),
        ((t, e, i, s) => {
          for (var a, n = so(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && sl(e, i, n);
        })([l.prop], sd.prototype, "expanded");
      class sc extends sd {}
      class su extends l.Component {
        constructor() {
          super(...arguments), (this.H = null);
        }
        onSetup() {
          (this.a = tl()),
            (0, l.provideContext)(sp, { yb: this.om.bind(this) });
        }
        onAttach(t) {
          t.style.setProperty("display", "contents");
        }
        onConnect(t) {}
        onDestroy() {
          this.H?.remove(), (this.H = null);
        }
        om(t) {
          this.Nh(!1),
            (this.H = t),
            tT(() => {
              tT(() => {
                this.connectScope && (0, l.effect)(this.Oc.bind(this));
              });
            });
        }
        Oc() {
          let { fullscreen: t } = this.a.$state,
            { disabled: e } = this.$props,
            i = e();
          this.Nh("fullscreen" === i ? !t() : !i);
        }
        Nh(t) {
          if (!this.H) return;
          let e = this.pm(this.$props.container());
          if (!e) return;
          let i = this.H.parentElement === e;
          (0, l.setAttribute)(this.H, "data-portal", t),
            t
              ? i || (this.H.remove(), e.append(this.H))
              : i &&
                this.H.parentElement === e &&
                (this.H.remove(), this.el?.append(this.H));
        }
        pm(t) {
          return tP(t) ? t : t ? document.querySelector(t) : document.body;
        }
      }
      su.props = { container: null, disabled: !1 };
      let sp = (0, l.createContext)();
      class sf extends l.Component {
        constructor() {
          super(), new e0();
          let { placement: t } = this.$props;
          this.setAttributes({ "data-placement": t });
        }
        onAttach(t) {
          if (
            ((this.n = (0, l.useContext)(i8)),
            this.n.wf(this),
            (0, l.hasProvidedContext)(sp))
          ) {
            let e = (0, l.useContext)(sp);
            e &&
              ((0, l.provideContext)(sp, null),
              e.yb(t),
              (0, l.onDispose)(() => e.yb(null)));
          }
        }
        onConnect(t) {
          (0, l.effect)(this.cf.bind(this));
        }
        cf() {
          if (!this.el) return;
          let t = this.$props.placement();
          if (t) {
            Object.assign(this.el.style, {
              position: "absolute",
              top: 0,
              left: 0,
              width: "max-content",
            });
            let { offset: e, alignOffset: i } = this.$props;
            return tS(this.el, this.Cd(), t, {
              offsetVarName: "media-menu",
              xOffset: i(),
              yOffset: e(),
            });
          }
          this.el.removeAttribute("style"), (this.el.style.display = "none");
        }
        Cd() {
          return this.n.$l();
        }
      }
      sf.props = { placement: null, offset: 0, alignOffset: 0 };
      let sg = (0, l.createContext)();
      class sb extends l.ViewController {
        constructor() {
          super(...arguments),
            (this.ac = new Set()),
            (this.Ua = (0, l.signal)("")),
            (this.e = null),
            (this.tm = this.F.bind(this));
        }
        get qm() {
          return Array.from(this.ac).map((t) => t.Ua());
        }
        get value() {
          return this.Ua();
        }
        set value(t) {
          this.F(t);
        }
        onSetup() {
          (0, l.provideContext)(sg, {
            add: this.rm.bind(this),
            remove: this.sm.bind(this),
          });
        }
        onAttach(t) {
          (0, l.hasProvidedContext)(i8) || tm(t, "role", "radiogroup"),
            this.setAttributes({ value: this.Ua });
        }
        onDestroy() {
          this.ac.clear();
        }
        rm(t) {
          this.ac.has(t) ||
            (this.ac.add(t), (t.Od = this.tm), t.Xc(t.Ua() === this.Ua()));
        }
        sm(t) {
          (t.Od = null), this.ac.delete(t);
        }
        F(t, e) {
          let i = (0, l.peek)(this.Ua);
          if (!t || t === i) return;
          let s = this.Oh(i),
            a = this.Oh(t);
          s?.Xc(!1, e), a?.Xc(!0, e), this.Ua.set(t), this.l?.(t, e);
        }
        Oh(t) {
          for (let e of this.ac) if (t === (0, l.peek)(e.Ua)) return e;
          return null;
        }
      }
      var sm = Object.defineProperty,
        sy = Object.getOwnPropertyDescriptor,
        sv = (t, e, i, s) => {
          for (var a, n = sy(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && sm(e, i, n), n;
        };
      class sk extends l.Component {
        get values() {
          return this.e.qm;
        }
        get value() {
          return this.e.value;
        }
        set value(t) {
          this.e.value = t;
        }
        constructor() {
          super(), (this.e = new sb()), (this.e.l = this.l.bind(this));
        }
        onSetup() {
          c ? this.O() : (0, l.effect)(this.O.bind(this));
        }
        O() {
          this.e.value = this.$props.value();
        }
        l(t, e) {
          let i = this.createEvent("change", { detail: t, trigger: e });
          this.dispatch(i);
        }
      }
      (sk.props = { value: "" }),
        sv([l.prop], sk.prototype, "values"),
        sv([l.prop], sk.prototype, "value");
      var s$ = Object.defineProperty,
        sw = Object.getOwnPropertyDescriptor;
      class sx extends l.Component {
        constructor() {
          super(),
            (this.Ab = (0, l.signal)(!1)),
            (this.e = {
              Ua: this.$props.value,
              Xc: this.Xc.bind(this),
              Od: null,
            }),
            new e0();
        }
        get checked() {
          return this.Ab();
        }
        onSetup() {
          this.setAttributes({
            value: this.$props.value,
            "data-checked": this.Ab,
            "aria-checked": iw(this.Ab),
          });
        }
        onAttach(t) {
          let e = (0, l.hasProvidedContext)(i8);
          tm(t, "tabindex", e ? "-1" : "0"),
            tm(t, "role", e ? "menuitemradio" : "radio"),
            (0, l.effect)(this.O.bind(this));
        }
        onConnect(t) {
          this.um(),
            tw(t, this.s.bind(this)),
            (0, l.onDispose)(this.Ga.bind(this));
        }
        Ga() {
          (0, l.scoped)(() => {
            (0, l.useContext)(sg).remove(this.e);
          }, this.connectScope);
        }
        um() {
          (0, l.useContext)(sg).add(this.e);
        }
        O() {
          let { value: t } = this.$props,
            e = t();
          (0, l.peek)(this.Ab) && this.e.Od?.(e);
        }
        s(t) {
          (0, l.peek)(this.Ab) ||
            (this.F(!0, t),
            this.vm(t),
            this.e.Od?.(l.peek(this.$props.value), t));
        }
        Xc(t, e) {
          (0, l.peek)(this.Ab) !== t && this.F(t, e);
        }
        F(t, e) {
          this.Ab.set(t), this.dispatch("change", { detail: t, trigger: e });
        }
        vm(t) {
          this.dispatch("select", { trigger: t });
        }
      }
      (sx.props = { value: "" }),
        ((t, e, i, s) => {
          for (var a, n = sw(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && s$(e, i, n);
        })([l.prop], sx.prototype, "checked");
      var sT = Object.defineProperty,
        sS = Object.getOwnPropertyDescriptor,
        sP = (t, e, i, s) => {
          for (var a, n = sS(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && sT(e, i, n), n;
        };
      class sE extends l.Component {
        constructor() {
          super(),
            (this.K = (0, l.signal)(null)),
            (this.C = (0, l.signal)([])),
            (this.e = new sb()),
            (this.e.l = this.l.bind(this));
        }
        get value() {
          return this.e.value;
        }
        get disabled() {
          return !this.C()?.length;
        }
        onSetup() {
          (this.a = tl()),
            (0, l.hasProvidedContext)(i8) && (this.n = (0, l.useContext)(i8));
          let { thumbnails: t } = this.$props;
          this.setAttributes({ "data-thumbnails": () => !!t() });
        }
        onAttach(t) {
          this.n?.xf({ Bf: this.Bf.bind(this) });
        }
        getOptions() {
          let { clipStartTime: t, clipEndTime: e } = this.a.$state,
            i = t(),
            s = e() || 1 / 0;
          return this.C().map((t, e) => ({
            cue: t,
            value: e.toString(),
            label: t.text,
            startTime: eL(Math.max(0, t.startTime - i)),
            duration: eN(Math.min(s, t.endTime) - Math.max(i, t.startTime)),
          }));
        }
        Bf() {
          (0, l.peek)(() => this.Rb());
        }
        onConnect(t) {
          (0, l.effect)(this.Rb.bind(this)),
            (0, l.effect)(this.ta.bind(this)),
            (0, l.effect)(this.wm.bind(this)),
            J(this.a.textTracks, "chapters", this.K.set);
        }
        wm() {
          let t = this.K();
          if (!t) return;
          let e = this.Jd.bind(this, t);
          return (
            e(),
            (0, l.listenEvent)(t, "add-cue", e),
            (0, l.listenEvent)(t, "remove-cue", e),
            () => {
              this.C.set([]);
            }
          );
        }
        Jd(t) {
          let { clipStartTime: e, clipEndTime: i } = this.a.$state,
            s = e(),
            a = i() || 1 / 0;
          this.C.set(
            [...t.cues].filter((t) => t.startTime <= a && t.endTime >= s),
          );
        }
        Rb() {
          if (!this.n?.U()) return;
          if (!this.K()) {
            this.e.value = "-1";
            return;
          }
          let {
              realCurrentTime: t,
              clipStartTime: e,
              clipEndTime: i,
            } = this.a.$state,
            s = e(),
            a = i() || 1 / 0,
            n = t(),
            r = this.C().findIndex((t) => Z(t, n));
          (this.e.value = r.toString()),
            r >= 0 &&
              tT(() => {
                if (!this.connectScope) return;
                let t = this.C()[r],
                  e = this.el.querySelector("[aria-checked='true']"),
                  i = Math.max(s, t.startTime),
                  h = Math.min(a, t.endTime) - i;
                e &&
                  (0, l.setStyle)(
                    e,
                    "--progress",
                    tc((Math.max(0, n - i) / h) * 100, 3) + "%",
                  );
              });
        }
        ta() {
          this.n?.hb(this.disabled);
        }
        l(t, e) {
          if (this.disabled || !e) return;
          let i = +t,
            s = this.C(),
            { clipStartTime: a } = this.a.$state;
          (0, l.isNumber)(i) &&
            s?.[i] &&
            ((this.e.value = i.toString()),
            this.a.remote.seek(s[i].startTime - a(), e),
            this.dispatch("change", { detail: s[i], trigger: e }));
        }
      }
      (sE.props = { thumbnails: null }),
        sP([l.prop], sE.prototype, "value"),
        sP([l.prop], sE.prototype, "disabled"),
        sP([l.method], sE.prototype, "getOptions");
      var sA = Object.defineProperty,
        sC = Object.getOwnPropertyDescriptor,
        sM = (t, e, i, s) => {
          for (var a, n = sC(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && sA(e, i, n), n;
        };
      class sD extends l.Component {
        get value() {
          return this.e.value;
        }
        get disabled() {
          let { audioTracks: t } = this.a.$state;
          return t().length <= 1;
        }
        constructor() {
          super(), (this.e = new sb()), (this.e.l = this.l.bind(this));
        }
        onSetup() {
          (this.a = tl()),
            (0, l.hasProvidedContext)(i8) && (this.n = (0, l.useContext)(i8));
        }
        onConnect(t) {
          (0, l.effect)(this.O.bind(this)),
            (0, l.effect)(this.ta.bind(this)),
            (0, l.effect)(this.Va.bind(this));
        }
        getOptions() {
          let { audioTracks: t } = this.a.$state;
          return t().map((t) => ({
            track: t,
            label: t.label,
            value: t.label.toLowerCase(),
          }));
        }
        O() {
          this.e.value = this.Z();
        }
        Va() {
          let { emptyLabel: t } = this.$props,
            { audioTrack: e } = this.a.$state,
            i = e();
          this.n?.$b.set(i?.label ?? t());
        }
        ta() {
          this.n?.hb(this.disabled);
        }
        Z() {
          let { audioTrack: t } = this.a.$state,
            e = t();
          return e ? e.label.toLowerCase() : "";
        }
        l(t, e) {
          if (this.disabled) return;
          let i = this.a.audioTracks
            .toArray()
            .findIndex((e) => e.label.toLowerCase() === t);
          if (i >= 0) {
            let t = this.a.audioTracks[i];
            this.a.remote.changeAudioTrack(i, e),
              this.dispatch("change", { detail: t, trigger: e });
          }
        }
      }
      (sD.props = { emptyLabel: "Default" }),
        sM([l.prop], sD.prototype, "value"),
        sM([l.prop], sD.prototype, "disabled"),
        sM([l.method], sD.prototype, "getOptions");
      var sq = Object.defineProperty,
        sO = Object.getOwnPropertyDescriptor,
        sj = (t, e, i, s) => {
          for (var a, n = sO(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && sq(e, i, n), n;
        };
      class sI extends l.Component {
        get value() {
          return this.e.value;
        }
        get disabled() {
          let { gains: t } = this.$props,
            { canSetAudioGain: e } = this.a.$state;
          return !e() || 0 === t().length;
        }
        constructor() {
          super(), (this.e = new sb()), (this.e.l = this.l.bind(this));
        }
        onSetup() {
          (this.a = tl()),
            (0, l.hasProvidedContext)(i8) && (this.n = (0, l.useContext)(i8));
        }
        onConnect(t) {
          (0, l.effect)(this.O.bind(this)),
            (0, l.effect)(this.Va.bind(this)),
            (0, l.effect)(this.ta.bind(this));
        }
        getOptions() {
          let { gains: t, normalLabel: e } = this.$props;
          return t().map((t) => ({
            label: 1 === t || null === t ? e : String(100 * t) + "%",
            value: t.toString(),
          }));
        }
        O() {
          this.e.value = this.Z();
        }
        Va() {
          let { normalLabel: t } = this.$props,
            { audioGain: e } = this.a.$state,
            i = e();
          this.n?.$b.set(1 === i || null == i ? t() : String(100 * i) + "%");
        }
        ta() {
          this.n?.hb(this.disabled);
        }
        Z() {
          let { audioGain: t } = this.a.$state;
          return t()?.toString() ?? "1";
        }
        l(t, e) {
          if (this.disabled) return;
          let i = +t;
          this.a.remote.changeAudioGain(i, e),
            this.dispatch("change", { detail: i, trigger: e });
        }
      }
      (sI.props = {
        normalLabel: "Disabled",
        gains: [1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4],
      }),
        sj([l.prop], sI.prototype, "value"),
        sj([l.prop], sI.prototype, "disabled"),
        sj([l.method], sI.prototype, "getOptions");
      var sF = Object.defineProperty,
        sL = Object.getOwnPropertyDescriptor,
        sN = (t, e, i, s) => {
          for (var a, n = sL(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && sF(e, i, n), n;
        };
      class sR extends l.Component {
        get value() {
          return this.e.value;
        }
        get disabled() {
          let { hasCaptions: t } = this.a.$state;
          return !t();
        }
        constructor() {
          super(), (this.e = new sb()), (this.e.l = this.l.bind(this));
        }
        onSetup() {
          (this.a = tl()),
            (0, l.hasProvidedContext)(i8) && (this.n = (0, l.useContext)(i8));
        }
        onConnect(t) {
          super.onConnect?.(t),
            (0, l.effect)(this.O.bind(this)),
            (0, l.effect)(this.ta.bind(this)),
            (0, l.effect)(this.Va.bind(this));
        }
        getOptions() {
          let { offLabel: t } = this.$props,
            { textTracks: e } = this.a.$state;
          return [
            { value: "off", label: t },
            ...e()
              .filter(ti)
              .map((t) => ({ track: t, label: t.label, value: this.Ef(t) })),
          ];
        }
        O() {
          this.e.value = this.Z();
        }
        Va() {
          let { offLabel: t } = this.$props,
            { textTrack: e } = this.a.$state,
            i = e();
          this.n?.$b.set(i && ti(i) && "showing" === i.mode ? i.label : t());
        }
        ta() {
          this.n?.hb(this.disabled);
        }
        Z() {
          let { textTrack: t } = this.a.$state,
            e = t();
          return e && ti(e) && "showing" === e.mode ? this.Ef(e) : "off";
        }
        l(t, e) {
          if (this.disabled) return;
          if ("off" === t) {
            let t = this.a.textTracks.selected;
            if (t) {
              let i = this.a.textTracks.indexOf(t);
              this.a.remote.changeTextTrackMode(i, "disabled", e),
                this.dispatch("change", { detail: null, trigger: e });
            }
            return;
          }
          let i = this.a.textTracks
            .toArray()
            .findIndex((e) => this.Ef(e) === t);
          if (i >= 0) {
            let t = this.a.textTracks[i];
            this.a.remote.changeTextTrackMode(i, "showing", e),
              this.dispatch("change", { detail: t, trigger: e });
          }
        }
        Ef(t) {
          return t.id + ":" + t.kind + "-" + t.label.toLowerCase();
        }
      }
      (sR.props = { offLabel: "Off" }),
        sN([l.prop], sR.prototype, "value"),
        sN([l.prop], sR.prototype, "disabled"),
        sN([l.method], sR.prototype, "getOptions");
      var sV = Object.defineProperty,
        sG = Object.getOwnPropertyDescriptor,
        sK = (t, e, i, s) => {
          for (var a, n = sG(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && sV(e, i, n), n;
        };
      class sU extends l.Component {
        get value() {
          return this.e.value;
        }
        get disabled() {
          let { rates: t } = this.$props,
            { canSetPlaybackRate: e } = this.a.$state;
          return !e() || 0 === t().length;
        }
        constructor() {
          super(), (this.e = new sb()), (this.e.l = this.l.bind(this));
        }
        onSetup() {
          (this.a = tl()),
            (0, l.hasProvidedContext)(i8) && (this.n = (0, l.useContext)(i8));
        }
        onConnect(t) {
          (0, l.effect)(this.O.bind(this)),
            (0, l.effect)(this.Va.bind(this)),
            (0, l.effect)(this.ta.bind(this));
        }
        getOptions() {
          let { rates: t, normalLabel: e } = this.$props;
          return t().map((t) => ({
            label: 1 === t ? e : t + "\xd7",
            value: t.toString(),
          }));
        }
        O() {
          this.e.value = this.Z();
        }
        Va() {
          let { normalLabel: t } = this.$props,
            { playbackRate: e } = this.a.$state,
            i = e();
          this.n?.$b.set(1 === i ? t() : i + "\xd7");
        }
        ta() {
          this.n?.hb(this.disabled);
        }
        Z() {
          let { playbackRate: t } = this.a.$state;
          return t().toString();
        }
        l(t, e) {
          if (this.disabled) return;
          let i = +t;
          this.a.remote.changePlaybackRate(i, e),
            this.dispatch("change", { detail: i, trigger: e });
        }
      }
      (sU.props = {
        normalLabel: "Normal",
        rates: [0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
      }),
        sK([l.prop], sU.prototype, "value"),
        sK([l.prop], sU.prototype, "disabled"),
        sK([l.method], sU.prototype, "getOptions");
      var sH = Object.defineProperty,
        sB = Object.getOwnPropertyDescriptor,
        sz = (t, e, i, s) => {
          for (var a, n = sB(e, i), r = t.length - 1; r >= 0; r--)
            (a = t[r]) && (n = a(e, i, n) || n);
          return n && sH(e, i, n), n;
        };
      class sQ extends l.Component {
        constructor() {
          super(),
            (this.Sc = (0, l.computed)(() => {
              let { sort: t } = this.$props,
                { qualities: e } = this.a.$state;
              return tU(e(), "descending" === t());
            })),
            (this.e = new sb()),
            (this.e.l = this.l.bind(this));
        }
        get value() {
          return this.e.value;
        }
        get disabled() {
          let { canSetQuality: t, qualities: e } = this.a.$state;
          return !t() || e().length <= 1;
        }
        onSetup() {
          (this.a = tl()),
            (0, l.hasProvidedContext)(i8) && (this.n = (0, l.useContext)(i8));
        }
        onConnect(t) {
          (0, l.effect)(this.O.bind(this)),
            (0, l.effect)(this.ta.bind(this)),
            (0, l.effect)(this.Va.bind(this));
        }
        getOptions() {
          let { autoLabel: t, hideBitrate: e } = this.$props;
          return [
            { value: "auto", label: t },
            ...this.Sc().map((t) => {
              let i =
                t.bitrate && t.bitrate >= 0
                  ? `${tc(t.bitrate / 1e6, 2)} Mbps`
                  : null;
              return {
                quality: t,
                label: t.height + "p",
                value: this.Ff(t),
                bitrate: () => (e() ? null : i),
              };
            }),
          ];
        }
        O() {
          this.e.value = this.Z();
        }
        Va() {
          let { autoLabel: t } = this.$props,
            { autoQuality: e, quality: i } = this.a.$state,
            s = i() ? i().height + "p" : "";
          this.n?.$b.set(e() ? t() + (s ? ` (${s})` : "") : s);
        }
        ta() {
          this.n?.hb(this.disabled);
        }
        l(t, e) {
          if (this.disabled) return;
          if ("auto" === t) {
            this.a.remote.changeQuality(-1, e),
              this.dispatch("change", { detail: "auto", trigger: e });
            return;
          }
          let { qualities: i } = this.a.$state,
            s = (0, l.peek)(i).findIndex((e) => this.Ff(e) === t);
          if (s >= 0) {
            let t = (0, l.peek)(i)[s];
            this.a.remote.changeQuality(s, e),
              this.dispatch("change", { detail: t, trigger: e });
          }
        }
        Z() {
          let { quality: t, autoQuality: e } = this.a.$state;
          if (e()) return "auto";
          let i = t();
          return i ? this.Ff(i) : "auto";
        }
        Ff(t) {
          return t.height + "_" + t.bitrate;
        }
      }
      (sQ.props = { autoLabel: "Auto", hideBitrate: !1, sort: "descending" }),
        sz([l.prop], sQ.prototype, "value"),
        sz([l.prop], sQ.prototype, "disabled"),
        sz([l.method], sQ.prototype, "getOptions");
      class sW extends l.Component {
        constructor() {
          super(...arguments), (this.p = null), (this.Bb = 0), (this.Ph = -1);
        }
        onSetup() {
          this.a = tl();
          let { event: t, action: e } = this.$props;
          this.setAttributes({ event: t, action: e });
        }
        onAttach(t) {
          t.setAttribute("data-media-gesture", ""),
            t.style.setProperty("pointer-events", "none");
        }
        onConnect(t) {
          (this.p = this.a.player.el?.querySelector("[data-media-provider]")),
            (0, l.effect)(this.xm.bind(this));
        }
        xm() {
          let t = this.$props.event(),
            e = this.$props.disabled();
          this.p &&
            t &&
            !e &&
            (/^dbl/.test(t) && (t = t.split(/^dbl/)[1]),
            ("pointerup" === t || "pointerdown" === t) &&
              "coarse" === this.a.$state.pointer() &&
              (t = "pointerup" === t ? "touchend" : "touchstart"),
            (0, l.listenEvent)(this.p, t, this.ym.bind(this), { passive: !1 }));
        }
        ym(t) {
          if (
            this.$props.disabled() ||
            ((0, l.isPointerEvent)(t) &&
              (0 !== t.button || this.a.activeMenu)) ||
            ((0, l.isTouchEvent)(t) && this.a.activeMenu) ||
            tx(t) ||
            !this.zm(t)
          )
            return;
          (t.MEDIA_GESTURE = !0), t.preventDefault();
          let e = (0, l.peek)(this.$props.event);
          if (e?.startsWith("dbl")) {
            if (1 === this.Bb) {
              queueMicrotask(() => this.Qh(t)),
                clearTimeout(this.Ph),
                (this.Bb = 0);
              return;
            }
          } else
            0 === this.Bb &&
              setTimeout(() => {
                1 === this.Bb && this.Qh(t);
              }, 250);
          0 === this.Bb &&
            (this.Ph = window.setTimeout(() => {
              this.Bb = 0;
            }, 275)),
            this.Bb++;
        }
        Qh(t) {
          this.el.setAttribute("data-triggered", ""),
            requestAnimationFrame(() => {
              this.Am() && this.Bm((0, l.peek)(this.$props.action), t),
                requestAnimationFrame(() => {
                  this.el.removeAttribute("data-triggered");
                });
            });
        }
        zm(t) {
          if (!this.el) return !1;
          if (
            (0, l.isPointerEvent)(t) ||
            (0, l.isMouseEvent)(t) ||
            (0, l.isTouchEvent)(t)
          ) {
            let e = (0, l.isTouchEvent)(t)
                ? (t.changedTouches[0] ?? t.touches[0])
                : void 0,
              i = e?.clientX ?? t.clientX,
              s = e?.clientY ?? t.clientY,
              a = this.el.getBoundingClientRect(),
              n = s >= a.top && s <= a.bottom && i >= a.left && i <= a.right;
            return t.type.includes("leave") ? !n : n;
          }
          return !0;
        }
        Am() {
          return (
            Array.from(
              this.a.player.el.querySelectorAll(
                "[data-media-gesture][data-triggered]",
              ),
            ).sort(
              (t, e) =>
                +getComputedStyle(e).zIndex - +getComputedStyle(t).zIndex,
            )[0] === this.el
          );
        }
        Bm(t, e) {
          if (!t) return;
          let i = new l.DOMEvent("will-trigger", {
            detail: t,
            cancelable: !0,
            trigger: e,
          });
          if ((this.dispatchEvent(i), i.defaultPrevented)) return;
          let [s, a] = t.replace(/:([a-z])/, "-$1").split(":");
          t.includes(":fullscreen")
            ? this.a.remote.toggleFullscreen("prefer-media", e)
            : t.includes("seek:")
              ? this.a.remote.seek(
                  (0, l.peek)(this.a.$state.currentTime) + (+a || 0),
                  e,
                )
              : this.a.remote[(0, l.kebabToCamelCase)(s)](e),
            this.dispatch("trigger", { detail: t, trigger: e });
        }
      }
      sW.props = { disabled: !1, event: void 0, action: void 0 };
      class s_ {
        constructor(t) {
          (this.da = t),
            (this.priority = 10),
            (this.K = null),
            (this.Za = (0, l.createDisposalBin)());
        }
        attach() {}
        canRender() {
          return !0;
        }
        detach() {
          this.Za.empty(), this.da.reset(), (this.K = null);
        }
        changeTrack(t) {
          t &&
            this.K !== t &&
            (this.Za.empty(),
            t.readyState < 2
              ? (this.da.reset(),
                this.Za.add(
                  (0, l.listenEvent)(t, "load", () => this.Rh(t), { once: !0 }),
                ))
              : this.Rh(t),
            this.Za.add(
              (0, l.listenEvent)(t, "add-cue", (t) => {
                this.da.addCue(t.detail);
              }),
              (0, l.listenEvent)(t, "remove-cue", (t) => {
                this.da.removeCue(t.detail);
              }),
            ),
            (this.K = t));
        }
        Rh(t) {
          this.da.changeTrack({ cues: [...t.cues], regions: [...t.regions] });
        }
      }
      let sX = class t extends l.Component {
        constructor() {
          super(...arguments), (this.bc = -1);
        }
        get M() {
          return t.M;
        }
        onSetup() {
          (this.a = tl()),
            this.setAttributes({ "aria-hidden": iw(this.Ub.bind(this)) });
        }
        onAttach(t) {
          t.style.setProperty("pointer-events", "none");
        }
        onConnect(t) {
          this.M() ||
            i
              .e(7922)
              .then(i.bind(i, 17922))
              .then((t) => this.M.set(t)),
            (0, l.effect)(this.Sh.bind(this));
        }
        Ub() {
          let {
              textTrack: t,
              remotePlaybackState: e,
              iOSControls: i,
            } = this.a.$state,
            s = t();
          return i() || "connected" === e() || !s || !ti(s);
        }
        Sh() {
          if (!this.M()) return;
          let { viewType: t } = this.a.$state;
          return "audio" === t() ? this.Dm() : this.Em();
        }
        Dm() {
          return (
            (0, l.effect)(this.qc.bind(this)),
            this.Nn(null),
            () => {
              this.el.textContent = "";
            }
          );
        }
        qc() {
          if (this.Ub()) return;
          this.Th();
          let { textTrack: t } = this.a.$state;
          (0, l.listenEvent)(t(), "cue-change", this.Th.bind(this)),
            (0, l.effect)(this.Fm.bind(this));
        }
        Th() {
          (this.el.textContent = ""), this.bc >= 0 && this.Gf();
          let { realCurrentTime: t, textTrack: e } = this.a.$state,
            { renderVTTCueString: i } = this.M(),
            s = (0, l.peek)(t);
          for (let t of (0, l.peek)(e).activeCues) {
            let e = this.Uh(),
              a = this.Vh();
            (a.innerHTML = i(t, s)), e.append(a), this.el.append(a);
          }
        }
        Fm() {
          let { realCurrentTime: t } = this.a.$state,
            { updateTimedVTTCueNodes: e } = this.M();
          e(this.el, t());
        }
        Em() {
          let { CaptionsRenderer: t } = this.M(),
            e = new t(this.el),
            i = new s_(e);
          return (
            this.a.textRenderers.add(i),
            (0, l.effect)(this.Gm.bind(this, e)),
            (0, l.effect)(this.Hm.bind(this, e)),
            this.Nn(e),
            () => {
              (this.el.textContent = ""),
                this.a.textRenderers.remove(i),
                e.destroy();
            }
          );
        }
        Gm(t) {
          t.dir = this.$props.textDir();
        }
        Hm(t) {
          if (this.Ub()) return;
          let { realCurrentTime: e, textTrack: i } = this.a.$state;
          (t.currentTime = e()),
            this.bc >= 0 && i()?.activeCues[0] && this.Gf();
        }
        Nn(t) {
          let e = this.a.player;
          if (!e) return;
          let i = this.Cm.bind(this, t);
          (0, l.listenEvent)(e, "vds-font-change", i);
        }
        Cm(t) {
          if (this.bc >= 0) {
            this.Wh();
            return;
          }
          let { textTrack: e } = this.a.$state;
          e()?.activeCues[0] ? t?.update(!0) : this.Im();
        }
        Im() {
          let t = this.Uh();
          (0, l.setAttribute)(t, "data-example", "");
          let e = this.Vh();
          (0, l.setAttribute)(e, "data-example", ""),
            (e.textContent = this.$props.exampleText()),
            t?.append(e),
            this.el?.append(t),
            this.el?.setAttribute("data-example", ""),
            this.Wh();
        }
        Wh() {
          window.clearTimeout(this.bc),
            (this.bc = window.setTimeout(this.Gf.bind(this), 2500));
        }
        Gf() {
          this.el?.removeAttribute("data-example"),
            this.el?.querySelector("[data-example]") &&
              (this.el.textContent = ""),
            (this.bc = -1);
        }
        Uh() {
          let t = document.createElement("div");
          return (0, l.setAttribute)(t, "data-part", "cue-display"), t;
        }
        Vh() {
          let t = document.createElement("div");
          return (0, l.setAttribute)(t, "data-part", "cue"), t;
        }
      };
      (sX.props = { textDir: "ltr", exampleText: "Captions look like this." }),
        (sX.M = (0, l.signal)(null));
      let sY = sX;
      class sZ extends l.Component {
        constructor() {
          super(...arguments), (this.Yh = "");
        }
        onSetup() {
          (this.a = tl()), this.Nb(), this.Xh(), this.Da(), this.Fa();
        }
        onAttach(t) {
          t.style.setProperty("pointer-events", "none"),
            (0, l.effect)(this.lf.bind(this)),
            (0, l.effect)(this.Nb.bind(this)),
            (0, l.effect)(this.Xh.bind(this)),
            (0, l.effect)(this.Da.bind(this)),
            (0, l.effect)(this.Fa.bind(this));
          let { started: e } = this.a.$state;
          this.setAttributes({
            "data-visible": () => !e() && !this.$state.hidden(),
            "data-loading": this.Qc.bind(this),
            "data-error": this.gb.bind(this),
            "data-hidden": this.$state.hidden,
          });
        }
        onConnect(t) {
          (0, l.effect)(this.Jm.bind(this)), (0, l.effect)(this.Na.bind(this));
        }
        gb() {
          let { error: t } = this.$state;
          return !(0, l.isNull)(t());
        }
        Jm() {
          let { canLoadPoster: t, poster: e } = this.a.$state;
          !t() && e() && K(e(), "preconnect");
        }
        Fa() {
          let { src: t } = this.$props,
            { poster: e, nativeControls: i } = this.a.$state;
          this.el &&
            (0, l.setAttribute)(this.el, "display", i() ? "none" : null),
            this.$state.hidden.set(this.gb() || !(t() || e()) || i());
        }
        Qc() {
          let { loading: t, hidden: e } = this.$state;
          return !e() && t();
        }
        lf() {
          let t = this.$state.img();
          t &&
            ((0, l.listenEvent)(t, "load", this.hd.bind(this)),
            (0, l.listenEvent)(t, "error", this.R.bind(this)));
        }
        Nb() {
          let { poster: t } = this.a.$props,
            {
              canLoadPoster: e,
              providedPoster: i,
              inferredPoster: s,
            } = this.a.$state,
            a = this.$props.src() || "",
            n = a || t() || s();
          this.Yh === i() && i.set(a),
            this.$state.src.set(e() && n.length ? n : null),
            (this.Yh = a);
        }
        Xh() {
          let { src: t } = this.$props,
            { alt: e } = this.$state,
            { poster: i } = this.a.$state;
          e.set(t() || i() ? this.$props.alt() : null);
        }
        Da() {
          let { crossOrigin: t } = this.$props,
            { crossOrigin: e } = this.$state,
            { crossOrigin: i, poster: s } = this.a.$state,
            a = null !== t() ? t() : i();
          e.set(
            /ytimg\.com|vimeo/.test(s() || "")
              ? null
              : !0 === a
                ? "anonymous"
                : a,
          );
        }
        Na() {
          let { loading: t, error: e } = this.$state,
            { canLoadPoster: i, poster: s } = this.a.$state;
          t.set(i() && !!s()), e.set(null);
        }
        hd() {
          let { loading: t, error: e } = this.$state;
          t.set(!1), e.set(null);
        }
        R(t) {
          let { loading: e, error: i } = this.$state;
          e.set(!1), i.set(t);
        }
      }
      (sZ.props = { src: null, alt: null, crossOrigin: null }),
        (sZ.state = new l.State({
          img: null,
          src: null,
          alt: null,
          crossOrigin: null,
          loading: !0,
          error: null,
          hidden: !1,
        }));
      class sJ extends l.Component {
        constructor() {
          super(...arguments),
            (this.Yc = (0, l.signal)(null)),
            (this.Mc = (0, l.signal)(!0)),
            (this.Nc = (0, l.signal)(!0));
        }
        onSetup() {
          (this.a = tl()), this.Zh();
          let { type: t } = this.$props;
          this.setAttributes({
            "data-type": t,
            "data-remainder": this._h.bind(this),
          }),
            new ij({ callback: this.hf.bind(this) }).attach(this);
        }
        onAttach(t) {
          t.hasAttribute("role") || (0, l.effect)(this.Km.bind(this)),
            (0, l.effect)(this.Zh.bind(this));
        }
        onConnect(t) {
          (0, l.onDispose)(tk(t, this.Mc.set)),
            (0, l.effect)(this.Fa.bind(this)),
            (0, l.effect)(this.Lm.bind(this));
        }
        hf(t) {
          this.Nc.set(t[0].isIntersecting);
        }
        Fa() {
          let { hidden: t } = this.$props;
          this.$state.hidden.set(t() || !this.Mc() || !this.Nc());
        }
        Lm() {
          if (!this.$props.toggle()) {
            this.Yc.set(null);
            return;
          }
          this.el && tw(this.el, this.Mm.bind(this));
        }
        Zh() {
          let { hidden: t, timeText: e } = this.$state,
            { duration: i } = this.a.$state;
          if (t()) return;
          let {
              type: s,
              padHours: a,
              padMinutes: n,
              showHours: r,
            } = this.$props,
            h = this.Nm(s()),
            l = i(),
            o = this._h();
          if (!Number.isFinite(h + l)) {
            e.set("LIVE");
            return;
          }
          let d = eL(o ? Math.max(0, l - h) : h, {
            padHrs: a(),
            padMins: n(),
            showHrs: r(),
          });
          e.set((o ? "-" : "") + d);
        }
        Km() {
          if (!this.el) return;
          let { toggle: t } = this.$props;
          (0, l.setAttribute)(this.el, "role", t() ? "timer" : null),
            (0, l.setAttribute)(this.el, "tabindex", t() ? 0 : null);
        }
        Nm(t) {
          let { bufferedEnd: e, duration: i, currentTime: s } = this.a.$state;
          switch (t) {
            case "buffered":
              return e();
            case "duration":
              return i();
            default:
              return s();
          }
        }
        _h() {
          return this.$props.remainder() && !1 !== this.Yc();
        }
        Mm(t) {
          if ((t.preventDefault(), null === this.Yc())) {
            this.Yc.set(!this.$props.remainder());
            return;
          }
          this.Yc.set((t) => !t);
        }
      }
      (sJ.props = {
        type: "current",
        showHours: !1,
        padHours: null,
        padMinutes: null,
        remainder: !1,
        toggle: !1,
        hidden: !1,
      }),
        (sJ.state = new l.State({ timeText: "", hidden: !1 }));
      let s0 = (0, l.createContext)();
      class s1 extends l.Component {
        onSetup() {
          (this.a = tl()),
            (0, l.provideContext)(s0, {
              ...this.$props,
              previewTime: (0, l.signal)(0),
            });
        }
      }
      s1.props = {
        clickToPlay: !0,
        clickToFullscreen: !0,
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute+volume",
          "captions",
          "settings",
          "pip",
          "airplay",
          "fullscreen",
        ],
        customIcons: !1,
        displayDuration: !1,
        download: null,
        markers: null,
        invertTime: !0,
        thumbnails: null,
        toggleTime: !0,
        translations: null,
        seekTime: 10,
        speed: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
      };
      class s2 extends e4 {}
      class s5 extends ih {}
      class s3 extends il {}
      class s7 extends io {}
      class s6 extends id {}
      class s4 extends i$ {}
      class s9 extends iP {}
      class s8 extends iE {}
      class at extends iD {}
      class ae extends iA {}
      class ai extends iC {}
      class as extends iS {}
      class aa extends ix {}
      class an extends iT {}
      class ar extends iM {}
      class ah extends ig {}
      class al extends ib {}
      class ao extends im {}
      class ad extends iG {}
      class ac extends i3 {}
      class au extends i0 {}
      class ap extends i1 {}
      class af extends i2 {}
      class ag extends i5 {}
      class ab extends iz {}
      class am extends iZ {}
      class ay extends i_ {}
      class av extends iJ {}
      class ak extends i9 {}
      class a$ extends sh {}
      class aw extends sd {}
      class ax extends sf {}
      class aT extends sc {}
      class aS extends sk {}
      class aP extends sx {}
      class aE extends sY {}
      class aA extends sW {}
      class aC extends sZ {}
      class aM extends iB {}
      class aD extends sJ {}
      let aq = h.forwardRef((t, e) => {
        let { children: i, ...s } = t,
          a = h.Children.toArray(i),
          n = a.find(aI);
        if (n) {
          let t = n.props.children,
            i = a.map((e) =>
              e !== n
                ? e
                : h.Children.count(t) > 1
                  ? h.Children.only(null)
                  : h.isValidElement(t)
                    ? t.props.children
                    : null,
            );
          return h.createElement(
            aO,
            { ...s, ref: e },
            h.isValidElement(t) ? h.cloneElement(t, void 0, i) : null,
          );
        }
        return h.createElement(aO, { ...s, ref: e }, i);
      });
      aq.displayName = "Slot";
      let aO = h.forwardRef((t, e) => {
        let { children: i, ...s } = t;
        return h.isValidElement(i)
          ? h.cloneElement(i, {
              ...(function (t, e) {
                let i = { ...e };
                for (let s in e) {
                  let a = t[s],
                    n = e[s];
                  /^on[A-Z]/.test(s)
                    ? a && n
                      ? (i[s] = (...t) => {
                          n(...t), a(...t);
                        })
                      : a && (i[s] = a)
                    : "style" === s
                      ? (i[s] = { ...a, ...n })
                      : "className" === s &&
                        (i[s] = [a, n].filter(Boolean).join(" "));
                }
                return { ...t, ...i };
              })(s, i.props),
              ref: e ? (0, l.composeRefs)(e, i.ref) : i.ref,
            })
          : h.Children.count(i) > 1
            ? h.Children.only(null)
            : null;
      });
      aO.displayName = "SlotClone";
      let aj = ({ children: t }) => h.createElement(h.Fragment, null, t);
      function aI(t) {
        return h.isValidElement(t) && t.type === aj;
      }
      let aF = ["button", "div", "span", "img", "video", "audio"].reduce(
        (t, e) => {
          let i = h.forwardRef((t, i) => {
            let { asChild: s, ...a } = t,
              n = s ? aq : e;
            return h.createElement(n, { ...a, ref: i });
          });
          return (i.displayName = `Primitive.${e}`), { ...t, [e]: i };
        },
        {},
      );
      function aL(t) {
        return t?.$$PROVIDER_TYPE === "REMOTION";
      }
      function aN(t) {
        return t?.type === "video/remotion";
      }
      let aR = ad.state.record,
        aV = Object.keys(aR).reduce((t, e) => ({ ...t, [e]: () => aR[e] }), {});
      function aG(t, e) {
        let i = (0, l.useStateContext)(iq);
        return (0, l.useSignal)((e?.current?.$state || i || aV)[t]);
      }
      let aK = s2.state.record,
        aU = Object.keys(aK).reduce((t, e) => ({ ...t, [e]: () => aK[e] }), {});
      function aH(t, e) {
        let i = (0, l.useStateContext)(ts);
        return (0, l.useSignal)((e?.current?.$state || i || aU)[t]);
      }
    },
  },
]);
