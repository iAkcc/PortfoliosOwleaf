"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1927],
  {
    33222: function (e, i, r) {
      r.d(i, {
        J: function () {
          return t;
        },
      });
      var t = {
        solid: {
          default: "bg-default text-default-foreground",
          primary: "bg-primary text-primary-foreground",
          secondary: "bg-secondary text-secondary-foreground",
          success: "bg-success text-success-foreground",
          warning: "bg-warning text-warning-foreground",
          danger: "bg-danger text-danger-foreground",
          foreground: "bg-foreground text-background",
        },
        shadow: {
          default:
            "shadow-lg shadow-default/50 bg-default text-default-foreground",
          primary:
            "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
          secondary:
            "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
          success:
            "shadow-lg shadow-success/40 bg-success text-success-foreground",
          warning:
            "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
          danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
          foreground:
            "shadow-lg shadow-foreground/40 bg-foreground text-background",
        },
        bordered: {
          default: "bg-transparent border-default text-foreground",
          primary: "bg-transparent border-primary text-primary",
          secondary: "bg-transparent border-secondary text-secondary",
          success: "bg-transparent border-success text-success",
          warning: "bg-transparent border-warning text-warning",
          danger: "bg-transparent border-danger text-danger",
          foreground: "bg-transparent border-foreground text-foreground",
        },
        flat: {
          default: "bg-default/40 text-default-foreground",
          primary: "bg-primary/20 text-primary",
          secondary: "bg-secondary/20 text-secondary",
          success: "bg-success/20 text-success-600 dark:text-success",
          warning: "bg-warning/20 text-warning-600 dark:text-warning",
          danger: "bg-danger/20 text-danger dark:text-danger-500",
          foreground: "bg-foreground/10 text-foreground",
        },
        faded: {
          default: "border-default bg-default-100 text-default-foreground",
          primary: "border-default bg-default-100 text-primary",
          secondary: "border-default bg-default-100 text-secondary",
          success: "border-default bg-default-100 text-success",
          warning: "border-default bg-default-100 text-warning",
          danger: "border-default bg-default-100 text-danger",
          foreground: "border-default bg-default-100 text-foreground",
        },
        light: {
          default: "bg-transparent text-default-foreground",
          primary: "bg-transparent text-primary",
          secondary: "bg-transparent text-secondary",
          success: "bg-transparent text-success",
          warning: "bg-transparent text-warning",
          danger: "bg-transparent text-danger",
          foreground: "bg-transparent text-foreground",
        },
        ghost: {
          default: "border-default text-default-foreground hover:!bg-default",
          primary:
            "border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",
          secondary:
            "border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",
          success:
            "border-success text-success hover:!text-success-foreground hover:!bg-success",
          warning:
            "border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",
          danger:
            "border-danger text-danger hover:!text-danger-foreground hover:!bg-danger",
          foreground: "border-foreground text-foreground hover:!bg-foreground",
        },
      };
    },
    64878: function (e, i, r) {
      r.d(i, {
        M: function () {
          return eI;
        },
      });
      var t,
        o = "function",
        a = "undefined",
        n = "object",
        s = "string",
        d = "major",
        b = "model",
        u = "name",
        c = "type",
        w = "vendor",
        l = "version",
        g = "architecture",
        f = "console",
        p = "mobile",
        h = "tablet",
        m = "smarttv",
        v = "wearable",
        x = "embedded",
        y = "user-agent",
        k = "brands",
        _ = "formFactors",
        S = "fullVersionList",
        T = "platform",
        C = "platformVersion",
        q = "bitness",
        O = "sec-ch-ua",
        N = O + "-full-version-list",
        z = O + "-arch",
        A = O + "-" + q,
        E = O + "-form-factors",
        I = O + "-" + p,
        P = O + "-" + b,
        H = O + "-" + T,
        M = H + "-version",
        R = [k, S, p, b, T, C, g, _, q],
        U = "browser",
        B = "device",
        V = "engine",
        j = "result",
        F = "Amazon",
        G = "Apple",
        D = "ASUS",
        X = "BlackBerry",
        $ = "Google",
        L = "Huawei",
        W = "Lenovo",
        K = "Microsoft",
        J = "Motorola",
        Y = "Samsung",
        Z = "Sharp",
        Q = "Sony",
        ee = "Xiaomi",
        ei = "Zebra",
        er = "Mobile ",
        et = " Browser",
        eo = "Chrome",
        ea = "Firefox",
        en = "Opera",
        es = "Facebook",
        ed = "Sogou",
        eb = "Windows",
        eu =
          typeof window !== a && window.navigator ? window.navigator : void 0,
        ec = eu && eu.userAgentData ? eu.userAgentData : void 0,
        ew = function (e, i) {
          var r = {},
            t = i;
          if (!ef(i))
            for (var o in ((t = {}), i))
              for (var a in i[o]) t[a] = i[o][a].concat(t[a] ? t[a] : []);
          for (var n in e)
            r[n] = t[n] && t[n].length % 2 == 0 ? t[n].concat(e[n]) : e[n];
          return r;
        },
        el = function (e) {
          for (var i = {}, r = 0; r < e.length; r++)
            i[e[r].toUpperCase()] = e[r];
          return i;
        },
        eg = function (e, i) {
          if (typeof e === n && e.length > 0) {
            for (var r in e) if (em(e[r]) == em(i)) return !0;
            return !1;
          }
          return !!ep(e) && -1 !== em(i).indexOf(em(e));
        },
        ef = function (e, i) {
          for (var r in e)
            return (
              /^(browser|cpu|device|engine|os)$/.test(r) || (!!i && ef(e[r]))
            );
        },
        ep = function (e) {
          return typeof e === s;
        },
        eh = function (e) {
          if (e) {
            for (
              var i = [], r = ey(/\\?\"/g, e).split(","), t = 0;
              t < r.length;
              t++
            )
              if (r[t].indexOf(";") > -1) {
                var o = e_(r[t]).split(";v=");
                i[t] = { brand: o[0], version: o[1] };
              } else i[t] = e_(r[t]);
            return i;
          }
        },
        em = function (e) {
          return ep(e) ? e.toLowerCase() : e;
        },
        ev = function (e) {
          return ep(e) ? ey(/[^\d\.]/g, e).split(".")[0] : void 0;
        },
        ex = function (e) {
          for (var i in e) {
            var r = e[i];
            typeof r == n && 2 == r.length
              ? (this[r[0]] = r[1])
              : (this[r] = void 0);
          }
          return this;
        },
        ey = function (e, i) {
          return ep(i) ? i.replace(e, "") : i;
        },
        ek = function (e) {
          return ey(/\\?\"/g, e);
        },
        e_ = function (e, i) {
          if (ep(e))
            return (
              (e = ey(/^\s\s*/, e)), typeof i === a ? e : e.substring(0, 500)
            );
        },
        eS = function (e, i) {
          if (e && i)
            for (var r, t, a, s, d, b, u = 0; u < i.length && !d; ) {
              var c = i[u],
                w = i[u + 1];
              for (r = t = 0; r < c.length && !d && c[r]; )
                if ((d = c[r++].exec(e)))
                  for (a = 0; a < w.length; a++)
                    (b = d[++t]),
                      typeof (s = w[a]) === n && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == o
                            ? (this[s[0]] = s[1].call(this, b))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                            ? typeof s[1] !== o || (s[1].exec && s[1].test)
                              ? (this[s[0]] = b
                                  ? b.replace(s[1], s[2])
                                  : void 0)
                              : (this[s[0]] = b
                                  ? s[1].call(this, b, s[2])
                                  : void 0)
                            : 4 === s.length &&
                              (this[s[0]] = b
                                ? s[3].call(this, b.replace(s[1], s[2]))
                                : void 0)
                        : (this[s] = b || void 0);
              u += 2;
            }
        },
        eT = function (e, i) {
          for (var r in i)
            if (typeof i[r] === n && i[r].length > 0) {
              for (var t = 0; t < i[r].length; t++)
                if (eg(i[r][t], e)) return "?" === r ? void 0 : r;
            } else if (eg(i[r], e)) return "?" === r ? void 0 : r;
          return i.hasOwnProperty("*") ? i["*"] : e;
        },
        eC = {
          ME: "4.90",
          "NT 3.11": "NT3.51",
          "NT 4.0": "NT4.0",
          2e3: "NT 5.0",
          XP: ["NT 5.1", "NT 5.2"],
          Vista: "NT 6.0",
          7: "NT 6.1",
          8: "NT 6.2",
          8.1: "NT 6.3",
          10: ["NT 6.4", "NT 10.0"],
          RT: "ARM",
        },
        eq = {
          embedded: "Automotive",
          mobile: "Mobile",
          tablet: ["Tablet", "EInk"],
          smarttv: "TV",
          wearable: "Watch",
          xr: ["VR", "XR"],
          "?": ["Desktop", "Unknown"],
          "*": void 0,
        },
        eO = {
          browser: [
            [/\b(?:crmo|crios)\/([\w\.]+)/i],
            [l, [u, er + "Chrome"]],
            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
            [l, [u, "Edge"]],
            [
              /(opera mini)\/([-\w\.]+)/i,
              /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
              /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
            ],
            [u, l],
            [/opios[\/ ]+([\w\.]+)/i],
            [l, [u, en + " Mini"]],
            [/\bop(?:rg)?x\/([\w\.]+)/i],
            [l, [u, en + " GX"]],
            [/\bopr\/([\w\.]+)/i],
            [l, [u, en]],
            [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
            [l, [u, "Baidu"]],
            [
              /(kindle)\/([\w\.]+)/i,
              /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
              /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
              /(?:ms|\()(ie) ([\w\.]+)/i,
              /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar)\/([-\w\.]+)/i,
              /(heytap|ovi)browser\/([\d\.]+)/i,
              /(weibo)__([\d\.]+)/i,
            ],
            [u, l],
            [/\bddg\/([\w\.]+)/i],
            [l, [u, "DuckDuckGo"]],
            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
            [l, [u, "UCBrowser"]],
            [
              /microm.+\bqbcore\/([\w\.]+)/i,
              /\bqbcore\/([\w\.]+).+microm/i,
              /micromessenger\/([\w\.]+)/i,
            ],
            [l, [u, "WeChat"]],
            [/konqueror\/([\w\.]+)/i],
            [l, [u, "Konqueror"]],
            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
            [l, [u, "IE"]],
            [/ya(?:search)?browser\/([\w\.]+)/i],
            [l, [u, "Yandex"]],
            [/slbrowser\/([\w\.]+)/i],
            [l, [u, "Smart " + W + et]],
            [/(avast|avg)\/([\w\.]+)/i],
            [[u, /(.+)/, "$1 Secure" + et], l],
            [/\bfocus\/([\w\.]+)/i],
            [l, [u, ea + " Focus"]],
            [/\bopt\/([\w\.]+)/i],
            [l, [u, en + " Touch"]],
            [/coc_coc\w+\/([\w\.]+)/i],
            [l, [u, "Coc Coc"]],
            [/dolfin\/([\w\.]+)/i],
            [l, [u, "Dolphin"]],
            [/coast\/([\w\.]+)/i],
            [l, [u, en + " Coast"]],
            [/miuibrowser\/([\w\.]+)/i],
            [l, [u, "MIUI" + et]],
            [/fxios\/([\w\.-]+)/i],
            [l, [u, er + ea]],
            [/\bqihu|(qi?ho?o?|360)browser/i],
            [[u, "360" + et]],
            [/\b(qq)\/([\w\.]+)/i],
            [[u, /(.+)/, "$1Browser"], l],
            [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
            [[u, /(.+)/, "$1" + et], l],
            [/samsungbrowser\/([\w\.]+)/i],
            [l, [u, Y + " Internet"]],
            [/(comodo_dragon)\/([\w\.]+)/i],
            [[u, /_/g, " "], l],
            [/metasr[\/ ]?([\d\.]+)/i],
            [l, [u, ed + " Explorer"]],
            [/(sogou)mo\w+\/([\d\.]+)/i],
            [[u, ed + " Mobile"], l],
            [
              /(electron)\/([\w\.]+) safari/i,
              /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
              /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
            ],
            [u, l],
            [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
            [u],
            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
            [[u, es], l],
            [
              /(Klarna)\/([\w\.]+)/i,
              /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
              /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
              /safari (line)\/([\w\.]+)/i,
              /\b(line)\/([\w\.]+)\/iab/i,
              /(alipay)client\/([\w\.]+)/i,
              /(twitter)(?:and| f.+e\/([\w\.]+))/i,
              /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
            ],
            [u, l],
            [/\bgsa\/([\w\.]+) .*safari\//i],
            [l, [u, "GSA"]],
            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
            [l, [u, "TikTok"]],
            [/headlesschrome(?:\/([\w\.]+)| )/i],
            [l, [u, eo + " Headless"]],
            [/ wv\).+(chrome)\/([\w\.]+)/i],
            [[u, eo + " WebView"], l],
            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
            [l, [u, "Android" + et]],
            [/chrome\/([\w\.]+) mobile/i],
            [l, [u, er + "Chrome"]],
            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
            [u, l],
            [/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i],
            [l, [u, er + "Safari"]],
            [/iphone .*mobile(?:\/\w+ | ?)safari/i],
            [[u, er + "Safari"]],
            [/version\/([\w\.\,]+) .*(safari)/i],
            [l, u],
            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
            [u, [l, "1"]],
            [/(webkit|khtml)\/([\w\.]+)/i],
            [u, l],
            [/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i],
            [[u, er + ea], l],
            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
            [[u, "Netscape"], l],
            [/(wolvic)\/([\w\.]+)/i],
            [u, l],
            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
            [l, [u, ea + " Reality"]],
            [
              /ekiohf.+(flow)\/([\w\.]+)/i,
              /(swiftfox)/i,
              /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
              /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
              /(firefox)\/([\w\.]+)/i,
              /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
              /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
              /(links) \(([\w\.]+)/i,
            ],
            [u, [l, /_/g, "."]],
            [/(cobalt)\/([\w\.]+)/i],
            [u, [l, /[^\d\.]+./, ""]],
          ],
          cpu: [
            [/\b(?:(amd|x|x86[-_]?|wow|win)64)\b/i],
            [[g, "amd64"]],
            [/(ia32(?=;))/i, /((?:i[346]|x)86)[;\)]/i],
            [[g, "ia32"]],
            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
            [[g, "arm64"]],
            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
            [[g, "armhf"]],
            [/windows (ce|mobile); ppc;/i],
            [[g, "arm"]],
            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
            [[g, /ower/, "", em]],
            [/(sun4\w)[;\)]/i],
            [[g, "sparc"]],
            [
              /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
            ],
            [[g, em]],
          ],
          device: [
            [
              /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
            ],
            [b, [w, Y], [c, h]],
            [
              /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
              /samsung[- ]([-\w]+)/i,
              /sec-(sgh\w+)/i,
            ],
            [b, [w, Y], [c, p]],
            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
            [b, [w, G], [c, p]],
            [
              /\((ipad);[-\w\),; ]+apple/i,
              /applecoremedia\/[\w\.]+ \((ipad)/i,
              /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
            ],
            [b, [w, G], [c, h]],
            [/(macintosh);/i],
            [b, [w, G]],
            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
            [b, [w, Z], [c, p]],
            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
            [b, [w, L], [c, h]],
            [
              /(?:huawei|honor)([-\w ]+)[;\)]/i,
              /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
            ],
            [b, [w, L], [c, p]],
            [
              /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
              /\b; (\w+) build\/hm\1/i,
              /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
              /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
              /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
              /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
            ],
            [
              [b, /_/g, " "],
              [w, ee],
              [c, p],
            ],
            [
              /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
              /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
            ],
            [
              [b, /_/g, " "],
              [w, ee],
              [c, h],
            ],
            [
              /; (\w+) bui.+ oppo/i,
              /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
            ],
            [b, [w, "OPPO"], [c, p]],
            [/\b(opd2\d{3}a?) bui/i],
            [b, [w, "OPPO"], [c, h]],
            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
            [b, [w, "Vivo"], [c, p]],
            [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
            [b, [w, "Realme"], [c, p]],
            [
              /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
              /\bmot(?:orola)?[- ](\w*)/i,
              /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
            ],
            [b, [w, J], [c, p]],
            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
            [b, [w, J], [c, h]],
            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
            [b, [w, "LG"], [c, h]],
            [
              /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
              /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
              /\blg-?([\d\w]+) bui/i,
            ],
            [b, [w, "LG"], [c, p]],
            [
              /(ideatab[-\w ]+)/i,
              /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
            ],
            [b, [w, W], [c, h]],
            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
            [
              [b, /_/g, " "],
              [w, "Nokia"],
              [c, p],
            ],
            [/(pixel c)\b/i],
            [b, [w, $], [c, h]],
            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
            [b, [w, $], [c, p]],
            [
              /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
            ],
            [b, [w, Q], [c, p]],
            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
            [
              [b, "Xperia Tablet"],
              [w, Q],
              [c, h],
            ],
            [
              / (kb2005|in20[12]5|be20[12][59])\b/i,
              /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
            ],
            [b, [w, "OnePlus"], [c, p]],
            [
              /(alexa)webm/i,
              /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
              /(kf[a-z]+)( bui|\)).+silk\//i,
            ],
            [b, [w, F], [c, h]],
            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
            [
              [b, /(.+)/g, "Fire Phone $1"],
              [w, F],
              [c, p],
            ],
            [/(playbook);[-\w\),; ]+(rim)/i],
            [b, w, [c, h]],
            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
            [b, [w, X], [c, p]],
            [
              /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
            ],
            [b, [w, D], [c, h]],
            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
            [b, [w, D], [c, p]],
            [/(nexus 9)/i],
            [b, [w, "HTC"], [c, h]],
            [
              /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
              /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
              /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
            ],
            [w, [b, /_/g, " "], [c, p]],
            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
            [b, [w, "Acer"], [c, h]],
            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
            [b, [w, "Meizu"], [c, p]],
            [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
            [b, [w, "Ulefone"], [c, p]],
            [
              /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
              /(hp) ([\w ]+\w)/i,
              /(asus)-?(\w+)/i,
              /(microsoft); (lumia[\w ]+)/i,
              /(lenovo)[-_ ]?([-\w]+)/i,
              /(jolla)/i,
              /(oppo) ?([\w ]+) bui/i,
            ],
            [w, b, [c, p]],
            [
              /(kobo)\s(ereader|touch)/i,
              /(archos) (gamepad2?)/i,
              /(hp).+(touchpad(?!.+tablet)|tablet)/i,
              /(kindle)\/([\w\.]+)/i,
            ],
            [w, b, [c, h]],
            [/(surface duo)/i],
            [b, [w, K], [c, h]],
            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
            [b, [w, "Fairphone"], [c, p]],
            [/(shield[\w ]+) b/i],
            [b, [w, "Nvidia"], [c, h]],
            [/(sprint) (\w+)/i],
            [w, b, [c, p]],
            [/(kin\.[onetw]{3})/i],
            [
              [b, /\./g, " "],
              [w, K],
              [c, p],
            ],
            [/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
            [b, [w, ei], [c, h]],
            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
            [b, [w, ei], [c, p]],
            [/smart-tv.+(samsung)/i],
            [w, [c, m]],
            [/hbbtv.+maple;(\d+)/i],
            [
              [b, /^/, "SmartTV"],
              [w, Y],
              [c, m],
            ],
            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
            [
              [w, "LG"],
              [c, m],
            ],
            [/(apple) ?tv/i],
            [w, [b, G + " TV"], [c, m]],
            [/crkey/i],
            [
              [b, eo + "cast"],
              [w, $],
              [c, m],
            ],
            [/droid.+aft(\w+)( bui|\))/i],
            [b, [w, F], [c, m]],
            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
            [b, [w, Z], [c, m]],
            [/(bravia[\w ]+)( bui|\))/i],
            [b, [w, Q], [c, m]],
            [/(mitv-\w{5}) bui/i],
            [b, [w, ee], [c, m]],
            [/Hbbtv.*(technisat) (.*);/i],
            [w, b, [c, m]],
            [
              /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
              /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
            ],
            [
              [w, e_],
              [b, e_],
              [c, m],
            ],
            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
            [[c, m]],
            [/(ouya)/i, /(nintendo) (\w+)/i],
            [w, b, [c, f]],
            [/droid.+; (shield) bui/i],
            [b, [w, "Nvidia"], [c, f]],
            [/(playstation \w+)/i],
            [b, [w, Q], [c, f]],
            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
            [b, [w, K], [c, f]],
            [/((pebble))app/i],
            [w, b, [c, v]],
            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
            [b, [w, G], [c, v]],
            [/droid.+; (wt63?0{2,3})\)/i],
            [b, [w, ei], [c, v]],
            [/droid.+; (glass) \d/i],
            [b, [w, $], [c, "xr"]],
            [/(quest( \d| pro)?)/i],
            [b, [w, es], [c, "xr"]],
            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
            [w, [c, x]],
            [/(aeobc)\b/i],
            [b, [w, F], [c, x]],
            [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
            [b, [c, p]],
            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
            [b, [c, h]],
            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
            [[c, h]],
            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
            [[c, p]],
            [/(android[-\w\. ]{0,9});.+buil/i],
            [b, [w, "Generic"]],
          ],
          engine: [
            [/windows.+ edge\/([\w\.]+)/i],
            [l, [u, "EdgeHTML"]],
            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
            [l, [u, "Blink"]],
            [
              /(presto)\/([\w\.]+)/i,
              /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
              /ekioh(flow)\/([\w\.]+)/i,
              /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
              /(icab)[\/ ]([23]\.[\d\.]+)/i,
              /\b(libweb)/i,
            ],
            [u, l],
            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
            [l, u],
          ],
          os: [
            [/microsoft (windows) (vista|xp)/i],
            [u, l],
            [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
            [u, [l, eT, eC]],
            [
              /windows nt 6\.2; (arm)/i,
              /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
            ],
            [
              [l, eT, eC],
              [u, eb],
            ],
            [
              /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
              /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
              /cfnetwork\/.+darwin/i,
            ],
            [
              [l, /_/g, "."],
              [u, "iOS"],
            ],
            [
              /(mac os x) ?([\w\. ]*)/i,
              /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
            ],
            [
              [u, "macOS"],
              [l, /_/g, "."],
            ],
            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
            [l, u],
            [
              /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
              /(blackberry)\w*\/([\w\.]*)/i,
              /(tizen|kaios)[\/ ]([\w\.]+)/i,
              /\((series40);/i,
            ],
            [u, l],
            [/\(bb(10);/i],
            [l, [u, X]],
            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
            [l, [u, "Symbian"]],
            [
              /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
            ],
            [l, [u, ea + " OS"]],
            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
            [l, [u, "webOS"]],
            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
            [l, [u, "watchOS"]],
            [/crkey\/([\d\.]+)/i],
            [l, [u, eo + "cast"]],
            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
            [[u, "Chrome OS"], l],
            [
              /panasonic;(viera)/i,
              /(netrange)mmh/i,
              /(nettv)\/(\d+\.[\w\.]+)/i,
              /(nintendo|playstation) (\w+)/i,
              /(xbox); +xbox ([^\);]+)/i,
              /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
              /(mint)[\/\(\) ]?(\w*)/i,
              /(mageia|vectorlinux)[; ]/i,
              /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
              /(hurd|linux) ?([\w\.]*)/i,
              /(gnu) ?([\w\.]*)/i,
              /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
              /(haiku) (\w+)/i,
            ],
            [u, l],
            [/(sunos) ?([\w\.\d]*)/i],
            [[u, "Solaris"], l],
            [
              /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
              /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
              /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
              /(unix) ?([\w\.]*)/i,
            ],
            [u, l],
          ],
        },
        eN =
          ((t = { init: {}, isIgnore: {}, isIgnoreRgx: {}, toString: {} }),
          ex.call(t.init, [
            [U, [u, l, d, c]],
            ["cpu", [g]],
            [B, [c, b, w]],
            [V, [u, l]],
            ["os", [u, l]],
          ]),
          ex.call(t.isIgnore, [
            [U, [l, d]],
            [V, [l]],
            ["os", [l]],
          ]),
          ex.call(t.isIgnoreRgx, [
            [U, / ?browser$/i],
            ["os", / ?os$/i],
          ]),
          ex.call(t.toString, [
            [U, [u, l]],
            ["cpu", [g]],
            [B, [w, b]],
            [V, [u, l]],
            ["os", [u, l]],
          ]),
          t),
        ez = function (e, i) {
          var r = eN.init[i],
            t = eN.isIgnore[i] || 0,
            o = eN.isIgnoreRgx[i] || 0,
            n = eN.toString[i] || 0;
          function s() {
            ex.call(this, r);
          }
          return (
            (s.prototype.getItem = function () {
              return e;
            }),
            (s.prototype.withClientHints = function () {
              return ec
                ? ec.getHighEntropyValues(R).then(function (i) {
                    return e.setCH(new eA(i, !1)).parseCH().get();
                  })
                : e.parseCH().get();
            }),
            (s.prototype.withFeatureCheck = function () {
              return e.detectFeature().get();
            }),
            i != j &&
              ((s.prototype.is = function (e) {
                var i = !1;
                for (var r in this)
                  if (
                    this.hasOwnProperty(r) &&
                    !eg(t, r) &&
                    em(o ? ey(o, this[r]) : this[r]) == em(o ? ey(o, e) : e)
                  ) {
                    if (((i = !0), e != a)) break;
                  } else if (e == a && i) {
                    i = !i;
                    break;
                  }
                return i;
              }),
              (s.prototype.toString = function () {
                var e = "";
                for (var i in n)
                  typeof this[n[i]] !== a && (e += (e ? " " : "") + this[n[i]]);
                return e || a;
              })),
            ec ||
              (s.prototype.then = function (e) {
                var i = this,
                  r = function () {
                    for (var e in i) i.hasOwnProperty(e) && (this[e] = i[e]);
                  };
                r.prototype = {
                  is: s.prototype.is,
                  toString: s.prototype.toString,
                };
                var t = new r();
                return e(t), t;
              }),
            new s()
          );
        };
      function eA(e, i) {
        if (((e = e || {}), ex.call(this, R), i))
          ex.call(this, [
            [k, eh(e[O])],
            [S, eh(e[N])],
            [p, /\?1/.test(e[I])],
            [b, ek(e[P])],
            [T, ek(e[H])],
            [C, ek(e[M])],
            [g, ek(e[z])],
            [_, eh(e[E])],
            [q, ek(e[A])],
          ]);
        else
          for (var r in e)
            this.hasOwnProperty(r) && typeof e[r] !== a && (this[r] = e[r]);
      }
      function eE(e, i, r, t) {
        return (
          (this.get = function (e) {
            return e
              ? this.data.hasOwnProperty(e)
                ? this.data[e]
                : void 0
              : this.data;
          }),
          (this.set = function (e, i) {
            return (this.data[e] = i), this;
          }),
          (this.setCH = function (e) {
            return (this.uaCH = e), this;
          }),
          (this.detectFeature = function () {
            if (eu && eu.userAgent == this.ua)
              switch (this.itemType) {
                case U:
                  eu.brave &&
                    typeof eu.brave.isBrave == o &&
                    this.set(u, "Brave");
                  break;
                case B:
                  !this.get(c) && ec && ec[p] && this.set(c, p),
                    "Macintosh" == this.get(b) &&
                      eu &&
                      typeof eu.standalone !== a &&
                      eu.maxTouchPoints &&
                      eu.maxTouchPoints > 2 &&
                      this.set(b, "iPad").set(c, h);
                  break;
                case "os":
                  !this.get(u) && ec && ec[T] && this.set(u, ec[T]);
                  break;
                case j:
                  var e = this.data,
                    i = function (i) {
                      return e[i].getItem().detectFeature().get();
                    };
                  this.set(U, i(U))
                    .set("cpu", i("cpu"))
                    .set(B, i(B))
                    .set(V, i(V))
                    .set("os", i("os"));
              }
            return this;
          }),
          (this.parseUA = function () {
            return (
              this.itemType != j && eS.call(this.data, this.ua, this.rgxMap),
              this.itemType == U && this.set(d, ev(this.get(l))),
              this
            );
          }),
          (this.parseCH = function () {
            var e,
              i = this.uaCH,
              r = this.rgxMap;
            switch (this.itemType) {
              case U:
                var t,
                  o = i[S] || i[k];
                if (o)
                  for (var a in o) {
                    var n = ey(/(Google|Microsoft) /, o[a].brand || o[a]),
                      s = o[a].version;
                    !/not.a.brand/i.test(n) &&
                      (!t || (/chrom/i.test(t) && !/chromi/i.test(n))) &&
                      (this.set(u, n).set(l, s).set(d, ev(s)), (t = n));
                  }
                break;
              case "cpu":
                var h = i[g];
                h &&
                  (h && "64" == i[q] && (h += "64"),
                  eS.call(this.data, h + ";", r));
                break;
              case B:
                if (
                  (i[p] && this.set(c, p),
                  i[b] && this.set(b, i[b]),
                  "Xbox" == i[b] && this.set(c, f).set(w, K),
                  i[_])
                ) {
                  if ("string" != typeof i[_])
                    for (var m = 0; !e && m < i[_].length; )
                      e = eT(i[_][m++], eq);
                  else e = eT(i[_], eq);
                  this.set(c, e);
                }
                break;
              case "os":
                var v = i[T];
                if (v) {
                  var x = i[C];
                  v == eb && (x = parseInt(ev(x), 10) >= 13 ? "11" : "10"),
                    this.set(u, v).set(l, x);
                }
                this.get(u) == eb &&
                  "Xbox" == i[b] &&
                  this.set(u, "Xbox").set(l, void 0);
                break;
              case j:
                var y = this.data,
                  O = function (e) {
                    return y[e].getItem().setCH(i).parseCH().get();
                  };
                this.set(U, O(U))
                  .set("cpu", O("cpu"))
                  .set(B, O(B))
                  .set(V, O(V))
                  .set("os", O("os"));
            }
            return this;
          }),
          ex.call(this, [
            ["itemType", e],
            ["ua", i],
            ["uaCH", t],
            ["rgxMap", r],
            ["data", ez(this, e)],
          ]),
          this
        );
      }
      function eI(e, i, r) {
        if (
          (typeof e === n
            ? (ef(e, !0)
                ? (typeof i === n && (r = i), (i = e))
                : ((r = e), (i = void 0)),
              (e = void 0))
            : typeof e !== s || ef(i, !0) || ((r = i), (i = void 0)),
          !(this instanceof eI))
        )
          return new eI(e, i, r).getResult();
        var t =
            typeof e === s
              ? e
              : eu && eu.userAgent
                ? eu.userAgent
                : r && r[y]
                  ? r[y]
                  : "",
          o = new eA(r, !0),
          a = i ? ew(eO, i) : eO,
          d = function (e) {
            return e == j
              ? function () {
                  return new eE(e, t, a, o)
                    .set("ua", t)
                    .set(U, this.getBrowser())
                    .set("cpu", this.getCPU())
                    .set(B, this.getDevice())
                    .set(V, this.getEngine())
                    .set("os", this.getOS())
                    .get();
                }
              : function () {
                  return new eE(e, t, a[e], o).parseUA().get();
                };
          };
        return (
          ex
            .call(this, [
              ["getBrowser", d(U)],
              ["getCPU", d("cpu")],
              ["getDevice", d(B)],
              ["getEngine", d(V)],
              ["getOS", d("os")],
              ["getResult", d(j)],
              [
                "getUA",
                function () {
                  return t;
                },
              ],
              [
                "setUA",
                function (e) {
                  return ep(e) && (t = e.length > 500 ? e_(e, 500) : e), this;
                },
              ],
            ])
            .setUA(t),
          this
        );
      }
      (eI.VERSION = "2.0.0-beta.3"),
        (eI.BROWSER = el([u, l, d, c])),
        (eI.CPU = el([g])),
        (eI.DEVICE = el([b, w, c, f, p, m, h, v, x])),
        (eI.ENGINE = eI.OS = el([u, l]));
    },
  },
]);
