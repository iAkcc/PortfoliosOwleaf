"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4491],
  {
    64491: function (e, t, s) {
      s.d(t, {
        Bm: function () {
          return tD;
        },
      });
      let a = new Set([
        65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678,
        327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823,
        655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502,
        917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111,
      ]);
      ((S = O = O || (O = {}))[(S.EOF = -1)] = "EOF"),
        (S[(S.NULL = 0)] = "NULL"),
        (S[(S.TABULATION = 9)] = "TABULATION"),
        (S[(S.CARRIAGE_RETURN = 13)] = "CARRIAGE_RETURN"),
        (S[(S.LINE_FEED = 10)] = "LINE_FEED"),
        (S[(S.FORM_FEED = 12)] = "FORM_FEED"),
        (S[(S.SPACE = 32)] = "SPACE"),
        (S[(S.EXCLAMATION_MARK = 33)] = "EXCLAMATION_MARK"),
        (S[(S.QUOTATION_MARK = 34)] = "QUOTATION_MARK"),
        (S[(S.NUMBER_SIGN = 35)] = "NUMBER_SIGN"),
        (S[(S.AMPERSAND = 38)] = "AMPERSAND"),
        (S[(S.APOSTROPHE = 39)] = "APOSTROPHE"),
        (S[(S.HYPHEN_MINUS = 45)] = "HYPHEN_MINUS"),
        (S[(S.SOLIDUS = 47)] = "SOLIDUS"),
        (S[(S.DIGIT_0 = 48)] = "DIGIT_0"),
        (S[(S.DIGIT_9 = 57)] = "DIGIT_9"),
        (S[(S.SEMICOLON = 59)] = "SEMICOLON"),
        (S[(S.LESS_THAN_SIGN = 60)] = "LESS_THAN_SIGN"),
        (S[(S.EQUALS_SIGN = 61)] = "EQUALS_SIGN"),
        (S[(S.GREATER_THAN_SIGN = 62)] = "GREATER_THAN_SIGN"),
        (S[(S.QUESTION_MARK = 63)] = "QUESTION_MARK"),
        (S[(S.LATIN_CAPITAL_A = 65)] = "LATIN_CAPITAL_A"),
        (S[(S.LATIN_CAPITAL_F = 70)] = "LATIN_CAPITAL_F"),
        (S[(S.LATIN_CAPITAL_X = 88)] = "LATIN_CAPITAL_X"),
        (S[(S.LATIN_CAPITAL_Z = 90)] = "LATIN_CAPITAL_Z"),
        (S[(S.RIGHT_SQUARE_BRACKET = 93)] = "RIGHT_SQUARE_BRACKET"),
        (S[(S.GRAVE_ACCENT = 96)] = "GRAVE_ACCENT"),
        (S[(S.LATIN_SMALL_A = 97)] = "LATIN_SMALL_A"),
        (S[(S.LATIN_SMALL_F = 102)] = "LATIN_SMALL_F"),
        (S[(S.LATIN_SMALL_X = 120)] = "LATIN_SMALL_X"),
        (S[(S.LATIN_SMALL_Z = 122)] = "LATIN_SMALL_Z"),
        (S[(S.REPLACEMENT_CHARACTER = 65533)] = "REPLACEMENT_CHARACTER");
      let r = {
        DASH_DASH: "--",
        CDATA_START: "[CDATA[",
        DOCTYPE: "doctype",
        SCRIPT: "script",
        PUBLIC: "public",
        SYSTEM: "system",
      };
      function i(e) {
        return e >= 55296 && e <= 57343;
      }
      function n(e) {
        return (
          (32 !== e &&
            10 !== e &&
            13 !== e &&
            9 !== e &&
            12 !== e &&
            e >= 1 &&
            e <= 31) ||
          (e >= 127 && e <= 159)
        );
      }
      function o(e) {
        return (e >= 64976 && e <= 65007) || a.has(e);
      }
      ((R = L = L || (L = {})).controlCharacterInInputStream =
        "control-character-in-input-stream"),
        (R.noncharacterInInputStream = "noncharacter-in-input-stream"),
        (R.surrogateInInputStream = "surrogate-in-input-stream"),
        (R.nonVoidHtmlElementStartTagWithTrailingSolidus =
          "non-void-html-element-start-tag-with-trailing-solidus"),
        (R.endTagWithAttributes = "end-tag-with-attributes"),
        (R.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus"),
        (R.unexpectedSolidusInTag = "unexpected-solidus-in-tag"),
        (R.unexpectedNullCharacter = "unexpected-null-character"),
        (R.unexpectedQuestionMarkInsteadOfTagName =
          "unexpected-question-mark-instead-of-tag-name"),
        (R.invalidFirstCharacterOfTagName =
          "invalid-first-character-of-tag-name"),
        (R.unexpectedEqualsSignBeforeAttributeName =
          "unexpected-equals-sign-before-attribute-name"),
        (R.missingEndTagName = "missing-end-tag-name"),
        (R.unexpectedCharacterInAttributeName =
          "unexpected-character-in-attribute-name"),
        (R.unknownNamedCharacterReference =
          "unknown-named-character-reference"),
        (R.missingSemicolonAfterCharacterReference =
          "missing-semicolon-after-character-reference"),
        (R.unexpectedCharacterAfterDoctypeSystemIdentifier =
          "unexpected-character-after-doctype-system-identifier"),
        (R.unexpectedCharacterInUnquotedAttributeValue =
          "unexpected-character-in-unquoted-attribute-value"),
        (R.eofBeforeTagName = "eof-before-tag-name"),
        (R.eofInTag = "eof-in-tag"),
        (R.missingAttributeValue = "missing-attribute-value"),
        (R.missingWhitespaceBetweenAttributes =
          "missing-whitespace-between-attributes"),
        (R.missingWhitespaceAfterDoctypePublicKeyword =
          "missing-whitespace-after-doctype-public-keyword"),
        (R.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers =
          "missing-whitespace-between-doctype-public-and-system-identifiers"),
        (R.missingWhitespaceAfterDoctypeSystemKeyword =
          "missing-whitespace-after-doctype-system-keyword"),
        (R.missingQuoteBeforeDoctypePublicIdentifier =
          "missing-quote-before-doctype-public-identifier"),
        (R.missingQuoteBeforeDoctypeSystemIdentifier =
          "missing-quote-before-doctype-system-identifier"),
        (R.missingDoctypePublicIdentifier =
          "missing-doctype-public-identifier"),
        (R.missingDoctypeSystemIdentifier =
          "missing-doctype-system-identifier"),
        (R.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier"),
        (R.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier"),
        (R.cdataInHtmlContent = "cdata-in-html-content"),
        (R.incorrectlyOpenedComment = "incorrectly-opened-comment"),
        (R.eofInScriptHtmlCommentLikeText =
          "eof-in-script-html-comment-like-text"),
        (R.eofInDoctype = "eof-in-doctype"),
        (R.nestedComment = "nested-comment"),
        (R.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment"),
        (R.eofInComment = "eof-in-comment"),
        (R.incorrectlyClosedComment = "incorrectly-closed-comment"),
        (R.eofInCdata = "eof-in-cdata"),
        (R.absenceOfDigitsInNumericCharacterReference =
          "absence-of-digits-in-numeric-character-reference"),
        (R.nullCharacterReference = "null-character-reference"),
        (R.surrogateCharacterReference = "surrogate-character-reference"),
        (R.characterReferenceOutsideUnicodeRange =
          "character-reference-outside-unicode-range"),
        (R.controlCharacterReference = "control-character-reference"),
        (R.noncharacterCharacterReference = "noncharacter-character-reference"),
        (R.missingWhitespaceBeforeDoctypeName =
          "missing-whitespace-before-doctype-name"),
        (R.missingDoctypeName = "missing-doctype-name"),
        (R.invalidCharacterSequenceAfterDoctypeName =
          "invalid-character-sequence-after-doctype-name"),
        (R.duplicateAttribute = "duplicate-attribute"),
        (R.nonConformingDoctype = "non-conforming-doctype"),
        (R.missingDoctype = "missing-doctype"),
        (R.misplacedDoctype = "misplaced-doctype"),
        (R.endTagWithoutMatchingOpenElement =
          "end-tag-without-matching-open-element"),
        (R.closingOfElementWithOpenChildElements =
          "closing-of-element-with-open-child-elements"),
        (R.disallowedContentInNoscriptInHead =
          "disallowed-content-in-noscript-in-head"),
        (R.openElementsLeftAfterEof = "open-elements-left-after-eof"),
        (R.abandonedHeadElementChild = "abandoned-head-element-child"),
        (R.misplacedStartTagForHeadElement =
          "misplaced-start-tag-for-head-element"),
        (R.nestedNoscriptInHead = "nested-noscript-in-head"),
        (R.eofInElementThatCanContainOnlyText =
          "eof-in-element-that-can-contain-only-text");
      class E {
        constructor(e) {
          (this.handler = e),
            (this.html = ""),
            (this.pos = -1),
            (this.lastGapPos = -2),
            (this.gapStack = []),
            (this.skipNextNewLine = !1),
            (this.lastChunkWritten = !1),
            (this.endOfChunkHit = !1),
            (this.bufferWaterline = 65536),
            (this.isEol = !1),
            (this.lineStartPos = 0),
            (this.droppedBufferSize = 0),
            (this.line = 1),
            (this.lastErrOffset = -1);
        }
        get col() {
          return (
            this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos)
          );
        }
        get offset() {
          return this.droppedBufferSize + this.pos;
        }
        getError(e) {
          let { line: t, col: s, offset: a } = this;
          return {
            code: e,
            startLine: t,
            endLine: t,
            startCol: s,
            endCol: s,
            startOffset: a,
            endOffset: a,
          };
        }
        _err(e) {
          this.handler.onParseError &&
            this.lastErrOffset !== this.offset &&
            ((this.lastErrOffset = this.offset),
            this.handler.onParseError(this.getError(e)));
        }
        _addGap() {
          this.gapStack.push(this.lastGapPos), (this.lastGapPos = this.pos);
        }
        _processSurrogate(e) {
          if (this.pos !== this.html.length - 1) {
            let t = this.html.charCodeAt(this.pos + 1);
            if (t >= 56320 && t <= 57343)
              return this.pos++, this._addGap(), (e - 55296) * 1024 + 9216 + t;
          } else if (!this.lastChunkWritten)
            return (this.endOfChunkHit = !0), O.EOF;
          return this._err(L.surrogateInInputStream), e;
        }
        willDropParsedChunk() {
          return this.pos > this.bufferWaterline;
        }
        dropParsedChunk() {
          this.willDropParsedChunk() &&
            ((this.html = this.html.substring(this.pos)),
            (this.lineStartPos -= this.pos),
            (this.droppedBufferSize += this.pos),
            (this.pos = 0),
            (this.lastGapPos = -2),
            (this.gapStack.length = 0));
        }
        write(e, t) {
          this.html.length > 0 ? (this.html += e) : (this.html = e),
            (this.endOfChunkHit = !1),
            (this.lastChunkWritten = t);
        }
        insertHtmlAtCurrentPos(e) {
          (this.html =
            this.html.substring(0, this.pos + 1) +
            e +
            this.html.substring(this.pos + 1)),
            (this.endOfChunkHit = !1);
        }
        startsWith(e, t) {
          if (this.pos + e.length > this.html.length)
            return (this.endOfChunkHit = !this.lastChunkWritten), !1;
          if (t) return this.html.startsWith(e, this.pos);
          for (let t = 0; t < e.length; t++)
            if ((32 | this.html.charCodeAt(this.pos + t)) !== e.charCodeAt(t))
              return !1;
          return !0;
        }
        peek(e) {
          let t = this.pos + e;
          if (t >= this.html.length)
            return (this.endOfChunkHit = !this.lastChunkWritten), O.EOF;
          let s = this.html.charCodeAt(t);
          return s === O.CARRIAGE_RETURN ? O.LINE_FEED : s;
        }
        advance() {
          if (
            (this.pos++,
            this.isEol &&
              ((this.isEol = !1), this.line++, (this.lineStartPos = this.pos)),
            this.pos >= this.html.length)
          )
            return (this.endOfChunkHit = !this.lastChunkWritten), O.EOF;
          let e = this.html.charCodeAt(this.pos);
          return e === O.CARRIAGE_RETURN
            ? ((this.isEol = !0), (this.skipNextNewLine = !0), O.LINE_FEED)
            : e === O.LINE_FEED && ((this.isEol = !0), this.skipNextNewLine)
              ? (this.line--,
                (this.skipNextNewLine = !1),
                this._addGap(),
                this.advance())
              : ((this.skipNextNewLine = !1),
                i(e) && (e = this._processSurrogate(e)),
                null === this.handler.onParseError ||
                  (e > 31 && e < 127) ||
                  e === O.LINE_FEED ||
                  e === O.CARRIAGE_RETURN ||
                  (e > 159 && e < 64976) ||
                  this._checkForProblematicCharacters(e),
                e);
        }
        _checkForProblematicCharacters(e) {
          n(e)
            ? this._err(L.controlCharacterInInputStream)
            : o(e) && this._err(L.noncharacterInInputStream);
        }
        retreat(e) {
          for (this.pos -= e; this.pos < this.lastGapPos; )
            (this.lastGapPos = this.gapStack.pop()), this.pos--;
          this.isEol = !1;
        }
      }
      function c(e, t) {
        for (let s = e.attrs.length - 1; s >= 0; s--)
          if (e.attrs[s].name === t) return e.attrs[s].value;
        return null;
      }
      ((D = f = f || (f = {}))[(D.CHARACTER = 0)] = "CHARACTER"),
        (D[(D.NULL_CHARACTER = 1)] = "NULL_CHARACTER"),
        (D[(D.WHITESPACE_CHARACTER = 2)] = "WHITESPACE_CHARACTER"),
        (D[(D.START_TAG = 3)] = "START_TAG"),
        (D[(D.END_TAG = 4)] = "END_TAG"),
        (D[(D.COMMENT = 5)] = "COMMENT"),
        (D[(D.DOCTYPE = 6)] = "DOCTYPE"),
        (D[(D.EOF = 7)] = "EOF"),
        (D[(D.HIBERNATION = 8)] = "HIBERNATION");
      var T,
        h,
        _,
        A,
        l,
        d,
        m,
        u,
        p,
        N,
        I,
        C,
        S,
        R,
        D,
        O,
        L,
        f,
        M,
        g,
        k,
        P,
        b,
        B,
        H,
        F,
        U,
        G,
        y,
        w,
        x,
        Y = new Uint16Array(
          'ᵁ<\xd5ıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms\x7f\x84\x8b\x90\x95\x98\xa6\xb3\xb9\xc8\xcflig耻\xc6䃆P耻&䀦cute耻\xc1䃁reve;䄂Āiyx}rc耻\xc2䃂;䐐r;쀀\ud835\udd04rave耻\xc0䃀pha;䎑acr;䄀d;橓Āgp\x9d\xa1on;䄄f;쀀\ud835\udd38plyFunction;恡ing耻\xc5䃅Ācs\xbe\xc3r;쀀\ud835\udc9cign;扔ilde耻\xc3䃃ml耻\xc4䃄Ѐaceforsu\xe5\xfb\xfeėĜĢħĪĀcr\xea\xf2kslash;或Ŷ\xf6\xf8;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀\ud835\udd05pf;쀀\ud835\udd39eve;䋘c\xf2ēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻\xa9䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻\xc7䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷\xf2ſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀\ud835\udc9epĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀\ud835\udd07Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀\ud835\udd3bƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegra\xecȹoɴ͹\0\0ͻ\xbb͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔e\xe5ˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀\ud835\udc9frok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻\xd0䃐cute耻\xc9䃉ƀaiyӒӗӜron;䄚rc耻\xca䃊;䐭ot;䄖r;쀀\ud835\udd08rave耻\xc8䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀\ud835\udd3csilon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻\xcb䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀\ud835\udd09lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀\ud835\udd3dAll;戀riertrf;愱c\xf2׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀\ud835\udd0a;拙pf;쀀\ud835\udd3eeater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀\ud835\udca2;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅ\xf2کrok;䄦mpńېۘownHum\xf0įqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻\xcd䃍Āiyܓܘrc耻\xce䃎;䐘ot;䄰r;愑rave耻\xcc䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lie\xf3ϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀\ud835\udd40a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻\xcf䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀\ud835\udd0dpf;쀀\ud835\udd41ǣ߇\0ߌr;쀀\ud835\udca5rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀\ud835\udd0epf;쀀\ud835\udd42cr;쀀\ud835\udca6րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ight\xe1Μs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀\ud835\udd0fĀ;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊight\xe1οight\xe1ϊf;쀀\ud835\udd43erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂ\xf2ࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀\ud835\udd10nusPlus;戓pf;쀀\ud835\udd44c\xf2੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘\xeb૙eryThi\xee૙tedĀGL૸ଆreaterGreate\xf2ٳessLes\xf3ੈLine;䀊r;쀀\ud835\udd11ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀\ud835\udca9ilde耻\xd1䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻\xd3䃓Āiy෎ීrc耻\xd4䃔;䐞blac;䅐r;쀀\ud835\udd12rave耻\xd2䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀\ud835\udd46enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀\ud835\udcaaash耻\xd8䃘iŬื฼de耻\xd5䃕es;樷ml耻\xd6䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀\ud835\udd13i;䎦;䎠usMinus;䂱Āipຢອncareplan\xe5ڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀\ud835\udcab;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀\ud835\udd14pf;愚cr;쀀\ud835\udcac؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻\xae䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r\xbbཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀\ud835\udd16ortȀDLRUᄪᄴᄾᅉownArrow\xbbОeftArrow\xbb࢚ightArrow\xbb࿝pArrow;憑gma;䎣allCircle;战pf;쀀\ud835\udd4aɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀\ud835\udcaear;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Th\xe1ྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et\xbbሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻\xde䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀\ud835\udd17Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀\ud835\udd4bipleDot;惛Āctዖዛr;쀀\ud835\udcafrok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻\xda䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻\xdb䃛;䐣blac;䅰r;쀀\ud835\udd18rave耻\xd9䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀\ud835\udd4cЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥own\xe1ϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀\ud835\udcb0ilde;䅨ml耻\xdc䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀\ud835\udd19pf;쀀\ud835\udd4dcr;쀀\ud835\udcb1dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀\ud835\udd1apf;쀀\ud835\udd4ecr;쀀\ud835\udcb2Ȁfiosᓋᓐᓒᓘr;쀀\ud835\udd1b;䎞pf;쀀\ud835\udd4fcr;쀀\ud835\udcb3ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻\xdd䃝Āiyᔉᔍrc;䅶;䐫r;쀀\ud835\udd1cpf;쀀\ud835\udd50cr;쀀\ud835\udcb4ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidt\xe8૙a;䎖r;愨pf;愤cr;쀀\ud835\udcb5௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻\xe1䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻\xe2䃢te肻\xb4̆;䐰lig耻\xe6䃦Ā;r\xb2ᖺ;쀀\ud835\udd1erave耻\xe0䃠ĀepᗊᗖĀfpᗏᗔsym;愵\xe8ᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e\xbbᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢\xbb\xb9arr;捼Āgpᙣᙧon;䄅f;쀀\ud835\udd52΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒ\xf1ᚃing耻\xe5䃥ƀctyᚡᚦᚨr;쀀\ud835\udcb6;䀪mpĀ;e዁ᚯ\xf1ʈilde耻\xe3䃣ml耻\xe4䃤Āciᛂᛈonin\xf4ɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e\xbbᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰s\xe9ᜌno\xf5ēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀\ud835\udd1fg΀costuvwឍឝឳេ៕៛៞ƀaiuបពរ\xf0ݠrc;旯p\xbb፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄e\xe5ᑄ\xe5ᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀\ud835\udd53Ā;tᏋᡣom\xbbᏌtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻\xa6䂦Ȁceioᥑᥖᥚᥠr;쀀\ud835\udcb7mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t\xbb᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁\xeeړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻\xe7䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻\xb8ƭptyv;榲t脀\xa2;eᨭᨮ䂢r\xe4Ʋr;쀀\ud835\udd20ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark\xbbᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟\xbbཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it\xbb᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;q\xc7\xc6ɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁\xeeᅠeĀmx᫱᫶ent\xbb᫩e\xf3ɍǧ᫾\0ᬇĀ;dኻᬂot;橭n\xf4Ɇƀfryᬐᬔᬗ;쀀\ud835\udd54o\xe4ɔ脀\xa9;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀\ud835\udcb8Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒre\xe3᭳u\xe3᭵ee;拎edge;拏en耻\xa4䂤earrowĀlrᯮ᯳eft\xbbᮀight\xbbᮽe\xe4ᯝĀciᰁᰇonin\xf4Ƿnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍r\xf2΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸\xf2ᄳhĀ;vᱚᱛ怐\xbbऊūᱡᱧarow;椏a\xe3̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻\xb0䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀\ud835\udd21arĀlrᲳᲵ\xbbࣜ\xbbသʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀\xf7;o᳧ᳰntimes;拇n\xf8᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀\ud835\udd55ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedg\xe5\xfanƀadhᄮᵝᵧownarrow\xf3ᲃarpoonĀlrᵲᵶef\xf4Ჴigh\xf4ᲶŢᵿᶅkaro\xf7གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀\ud835\udcb9;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃r\xf2Щa\xf2ྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴo\xf4ᲉĀcsḎḔute耻\xe9䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻\xea䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀\ud835\udd22ƀ;rsṐṑṗ檚ave耻\xe8䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et\xbbẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀\ud835\udd56ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on\xbbớ;䏵ȀcsuvỪỳἋἣĀioữḱrc\xbbḮɩỹ\0\0ỻ\xedՈantĀglἂἆtr\xbbṝess\xbbṺƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯o\xf4͒ĀahὉὋ;䎷耻\xf0䃰Āmrὓὗl耻\xeb䃫o;悬ƀcipὡὤὧl;䀡s\xf4ծĀeoὬὴctatio\xeeՙnential\xe5չৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotse\xf1Ṅy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀\ud835\udd23lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀\ud835\udd57ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻\xbd䂽;慓耻\xbc䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻\xbe䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀\ud835\udcbbࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lan\xf4٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀\ud835\udd24Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox\xbbℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀\ud835\udd58Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎pro\xf8₞r;楸qĀlqؿ↖les\xf3₈i\xed٫Āen↣↭rtneqq;쀀≩︀\xc5↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽r\xf2ΠȀilmr⇐⇔⇗⇛rs\xf0ᒄf\xbb․il\xf4کĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it\xbb∊lip;怦con;抹r;쀀\ud835\udd25sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀\ud835\udd59bar;怕ƀclt≯≴≸r;쀀\ud835\udcbdas\xe8⇴rok;䄧Ābp⊂⊇ull;恃hen\xbbᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻\xed䃭ƀ;iyݱ⊰⊵rc耻\xee䃮;䐸Ācx⊼⊿y;䐵cl耻\xa1䂡ĀfrΟ⋉;쀀\ud835\udd26rave耻\xec䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓in\xe5ގar\xf4ܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝do\xf4⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙er\xf3ᕣ\xe3⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀\ud835\udd5aa;䎹uest耻\xbf䂿Āci⎊⎏r;쀀\ud835\udcbenʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻\xef䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀\ud835\udd27ath;䈷pf;쀀\ud835\udd5bǣ⏬\0⏱r;쀀\ud835\udcbfrcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀\ud835\udd28reen;䄸cy;䑅cy;䑜pf;쀀\ud835\udd5ccr;쀀\ud835\udcc0஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼r\xf2৆\xf2Εail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴ra\xeeࡌbda;䎻gƀ;dlࢎⓁⓃ;榑\xe5ࢎ;檅uo耻\xab䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝\xeb≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼\xecࢰ\xe2┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□a\xe9⓶arpoonĀdu▯▴own\xbbњp\xbb०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoon\xf3྘quigarro\xf7⇰hreetimes;拋ƀ;qs▋ও◺lan\xf4বʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋ppro\xf8Ⓠot;拖qĀgq♃♅\xf4উgt\xf2⒌\xf4ছi\xedলƀilr♕࣡♚sht;楼;쀀\ud835\udd29Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖r\xf2◁orne\xf2ᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che\xbb⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox\xbb⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽r\xebࣁgƀlmr⛿✍✔eftĀar০✇ight\xe1৲apsto;柼ight\xe1৽parrowĀlr✥✩ef\xf4⓭ight;憬ƀafl✶✹✽r;榅;쀀\ud835\udd5dus;樭imes;樴š❋❏st;戗\xe1ፎƀ;ef❗❘᠀旊nge\xbb❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇r\xf2ࢨorne\xf2ᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀\ud835\udcc1mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹re\xe5◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀\xc5⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻\xaf䂯Āet⡗⡙;時Ā;e⡞⡟朠se\xbb⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻ow\xeeҌef\xf4ए\xf0Ꮡker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle\xbbᘦr;쀀\ud835\udd2ao;愧ƀcdn⢯⢴⣉ro耻\xb5䂵Ȁ;acdᑤ⢽⣀⣄s\xf4ᚧir;櫰ot肻\xb7Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛\xf2−\xf0ઁĀdp⣩⣮els;抧f;쀀\ud835\udd5eĀct⣸⣽r;쀀\ud835\udcc2pos\xbbᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la\xbb˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉ro\xf8඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻\xa0ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸ui\xf6ୣĀei⩊⩎ar;椨\xed஘istĀ;s஠டr;쀀\ud835\udd2bȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lan\xf4௢i\xed௪Ā;rஶ⪁\xbbஷƀAap⪊⪍⪑r\xf2⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹r\xf2⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro\xf7⫁ightarro\xf7⪐ƀ;qs఻⪺⫪lan\xf4ౕĀ;sౕ⫴\xbbశi\xedౝĀ;rవ⫾iĀ;eచథi\xe4ඐĀpt⬌⬑f;쀀\ud835\udd5f膀\xac;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lle\xec୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳u\xe5ಥĀ;cಘ⭸Ā;eಒ⭽\xf1ಘȀAait⮈⮋⮝⮧r\xf2⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow\xbb⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉u\xe5൅;쀀\ud835\udcc3ortɭ⬅\0\0⯖ar\xe1⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭\xe5೸\xe5ഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗ\xf1സȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇ\xecௗlde耻\xf1䃱\xe7ృiangleĀlrⱒⱜeftĀ;eచⱚ\xf1దightĀ;eೋⱥ\xf1೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻\xf3䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻\xf4䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀\ud835\udd2cͯ⵹\0\0⵼\0ⶂn;䋛ave耻\xf2䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨr\xf2᪀Āir⶝ⶠr;榾oss;榻n\xe5๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀\ud835\udd60ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨r\xf2᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f\xbbⷿ耻\xaa䂪耻\xba䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧\xf2⸁ash耻\xf8䃸l;折iŬⸯ⸴de耻\xf5䃵esĀ;aǛ⸺s;樶ml耻\xf6䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀\xb6;l⹭⹮䂶le\xecЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀\ud835\udd2dƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕ma\xf4੶ne;明ƀ;tv⺿⻀⻈䏀chfork\xbb´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎\xf6⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻\xb1ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀\ud835\udd61nd耻\xa3䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷u\xe5໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾ppro\xf8⽃urlye\xf1໙\xf1໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨i\xedໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺\xf0⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴\xef໻rel;抰Āci⿀⿅r;쀀\ud835\udcc5;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀\ud835\udd2epf;쀀\ud835\udd62rime;恗cr;쀀\ud835\udcc6ƀaeo⿸〉〓tĀei⿾々rnion\xf3ڰnt;樖stĀ;e【】䀿\xf1Ἑ\xf4༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがr\xf2Ⴓ\xf2ϝail;検ar\xf2ᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕i\xe3ᅮmptyv;榳gȀ;del࿑らるろ;榒;榥\xe5࿑uo耻\xbb䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞\xeb≝\xf0✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶al\xf3༞ƀabrョリヮr\xf2៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗\xec࿲\xe2ヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜn\xe5Ⴛar\xf4ྩt;断ƀilrㅩဣㅮsht;楽;쀀\ud835\udd2fĀaoㅷㆆrĀduㅽㅿ\xbbѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭa\xe9トarpoonĀduㆻㆿow\xeeㅾp\xbb႒eftĀah㇊㇐rrow\xf3࿪arpoon\xf3Ցightarrows;應quigarro\xf7ニhreetimes;拌g;䋚ingdotse\xf1ἲƀahm㈍㈐㈓r\xf2࿪a\xf2Ց;怏oustĀ;a㈞㈟掱che\xbb㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾r\xebဃƀafl㉇㉊㉎r;榆;쀀\ud835\udd63us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒ar\xf2㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀\ud835\udcc7Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠re\xe5ㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛qu\xef➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡u\xe5ᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓i\xedሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒\xeb∨Ā;oਸ਼਴t耻\xa7䂧i;䀻war;椩mĀin㍩\xf0nu\xf3\xf1t;朶rĀ;o㍶⁕쀀\ud835\udd30Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜i\xe4ᑤara\xec⹯耻\xad䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲ar\xf2ᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetm\xe9㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀\ud835\udd64aĀdr㑍ЂesĀ;u㑔㑕晠it\xbb㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍\xf1ᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝\xf1ᆮƀ;afᅻ㒦ְrť㒫ֱ\xbbᅼar\xf2ᅈȀcemt㒹㒾㓂㓅r;쀀\ud835\udcc8tm\xee\xf1i\xec㐕ar\xe6ᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psilo\xeeỠh\xe9⺯s\xbb⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦ppro\xf8㋺urlye\xf1ᇾ\xf1ᇳƀaes㖂㖈㌛ppro\xf8㌚q\xf1㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻\xb9䂹耻\xb2䂲耻\xb3䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨\xeb∮Ā;oਫ਩war;椪lig耻\xdf䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄r\xeb๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀\ud835\udd31Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮ppro\xf8዁im\xbbኬs\xf0ኞĀas㚺㚮\xf0዁rn耻\xfe䃾Ǭ̟㛆⋧es膀\xd7;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀\xe1⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀\ud835\udd65rk;櫚\xe1㍢rime;怴ƀaip㜏㜒㝤d\xe5ቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own\xbbᶻeftĀ;e⠀㜾\xf1म;扜ightĀ;e㊪㝋\xf1ၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀\ud835\udcc9;䑆cy;䑛rok;䅧Āio㞋㞎x\xf4᝷headĀlr㞗㞠eftarro\xf7ࡏightarrow\xbbཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶r\xf2ϭar;楣Ācr㟜㟢ute耻\xfa䃺\xf2ᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻\xfb䃻;䑃ƀabh㠃㠆㠋r\xf2Ꭽlac;䅱a\xf2ᏃĀir㠓㠘sht;楾;쀀\ud835\udd32rave耻\xf9䃹š㠧㠱rĀlr㠬㠮\xbbॗ\xbbႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r\xbb㡆op;挏ri;旸Āal㡖㡚cr;䅫肻\xa8͉Āgp㡢㡦on;䅳f;쀀\ud835\udd66̀adhlsuᅋ㡸㡽፲㢑㢠own\xe1ᎳarpoonĀlr㢈㢌ef\xf4㠭igh\xf4㠯iƀ;hl㢙㢚㢜䏅\xbbᏺon\xbb㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r\xbb㢽op;挎ng;䅯ri;旹cr;쀀\ud835\udccaƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨\xbb᠓Āam㣯㣲r\xf2㢨l耻\xfc䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠r\xf2ϷarĀ;v㤦㤧櫨;櫩as\xe8ϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖app\xe1␕othin\xe7ẖƀhir㓫⻈㥙op\xf4⾵Ā;hᎷ㥢\xefㆍĀiu㥩㥭gm\xe1㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟et\xe1㚜iangleĀlr㦪㦯eft\xbbथight\xbbၑy;䐲ash\xbbံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨa\xf2ᑩr;쀀\ud835\udd33tr\xe9㦮suĀbp㧯㧱\xbbജ\xbb൙pf;쀀\ud835\udd67ro\xf0໻tr\xe9㦴Ācu㨆㨋r;쀀\ud835\udccbĀbp㨐㨘nĀEe㦀㨖\xbb㥾nĀEe㦒㨞\xbb㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀\ud835\udd34pf;쀀\ud835\udd68Ā;eᑹ㩦at\xe8ᑹcr;쀀\ud835\udcccૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tr\xe9៑r;쀀\ud835\udd35ĀAa㪔㪗r\xf2σr\xf2৶;䎾ĀAa㪡㪤r\xf2θr\xf2৫a\xf0✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀\ud835\udd69im\xe5ឲĀAa㫇㫊r\xf2ώr\xf2ਁĀcq㫒ីr;쀀\ud835\udccdĀpt៖㫜r\xe9។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻\xfd䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻\xa5䂥r;쀀\ud835\udd36cy;䑗pf;쀀\ud835\udd6acr;쀀\ud835\udcceĀcm㬦㬩y;䑎l耻\xff䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡tr\xe6ᕟa;䎶r;쀀\ud835\udd37cy;䐶grarr;懝pf;쀀\ud835\udd6bcr;쀀\ud835\udccfĀjn㮅㮇;怍j;怌'
            .split("")
            .map((e) => e.charCodeAt(0)),
        ),
        v = new Uint16Array(
          "Ȁaglq	\x15\x18\x1bɭ\x0f\0\0\x12p;䀦os;䀧t;䀾t;䀼uot;䀢"
            .split("")
            .map((e) => e.charCodeAt(0)),
        );
      let Q = new Map([
          [0, 65533],
          [128, 8364],
          [130, 8218],
          [131, 402],
          [132, 8222],
          [133, 8230],
          [134, 8224],
          [135, 8225],
          [136, 710],
          [137, 8240],
          [138, 352],
          [139, 8249],
          [140, 338],
          [142, 381],
          [145, 8216],
          [146, 8217],
          [147, 8220],
          [148, 8221],
          [149, 8226],
          [150, 8211],
          [151, 8212],
          [152, 732],
          [153, 8482],
          [154, 353],
          [155, 8250],
          [156, 339],
          [158, 382],
          [159, 376],
        ]),
        q =
          null !== (M = String.fromCodePoint) && void 0 !== M
            ? M
            : function (e) {
                let t = "";
                return (
                  e > 65535 &&
                    ((e -= 65536),
                    (t += String.fromCharCode(((e >>> 10) & 1023) | 55296)),
                    (e = 56320 | (1023 & e))),
                  (t += String.fromCharCode(e))
                );
              };
      function W(e) {
        return e >= g.ZERO && e <= g.NINE;
      }
      ((T = g || (g = {}))[(T.NUM = 35)] = "NUM"),
        (T[(T.SEMI = 59)] = "SEMI"),
        (T[(T.EQUALS = 61)] = "EQUALS"),
        (T[(T.ZERO = 48)] = "ZERO"),
        (T[(T.NINE = 57)] = "NINE"),
        (T[(T.LOWER_A = 97)] = "LOWER_A"),
        (T[(T.LOWER_F = 102)] = "LOWER_F"),
        (T[(T.LOWER_X = 120)] = "LOWER_X"),
        (T[(T.LOWER_Z = 122)] = "LOWER_Z"),
        (T[(T.UPPER_A = 65)] = "UPPER_A"),
        (T[(T.UPPER_F = 70)] = "UPPER_F"),
        (T[(T.UPPER_Z = 90)] = "UPPER_Z"),
        ((h = k || (k = {}))[(h.VALUE_LENGTH = 49152)] = "VALUE_LENGTH"),
        (h[(h.BRANCH_LENGTH = 16256)] = "BRANCH_LENGTH"),
        (h[(h.JUMP_TABLE = 127)] = "JUMP_TABLE"),
        ((_ = P || (P = {}))[(_.EntityStart = 0)] = "EntityStart"),
        (_[(_.NumericStart = 1)] = "NumericStart"),
        (_[(_.NumericDecimal = 2)] = "NumericDecimal"),
        (_[(_.NumericHex = 3)] = "NumericHex"),
        (_[(_.NamedEntity = 4)] = "NamedEntity"),
        ((A = b || (b = {}))[(A.Legacy = 0)] = "Legacy"),
        (A[(A.Strict = 1)] = "Strict"),
        (A[(A.Attribute = 2)] = "Attribute");
      class X {
        constructor(e, t, s) {
          (this.decodeTree = e),
            (this.emitCodePoint = t),
            (this.errors = s),
            (this.state = P.EntityStart),
            (this.consumed = 1),
            (this.result = 0),
            (this.treeIndex = 0),
            (this.excess = 1),
            (this.decodeMode = b.Strict);
        }
        startEntity(e) {
          (this.decodeMode = e),
            (this.state = P.EntityStart),
            (this.result = 0),
            (this.treeIndex = 0),
            (this.excess = 1),
            (this.consumed = 1);
        }
        write(e, t) {
          switch (this.state) {
            case P.EntityStart:
              if (e.charCodeAt(t) === g.NUM)
                return (
                  (this.state = P.NumericStart),
                  (this.consumed += 1),
                  this.stateNumericStart(e, t + 1)
                );
              return (this.state = P.NamedEntity), this.stateNamedEntity(e, t);
            case P.NumericStart:
              return this.stateNumericStart(e, t);
            case P.NumericDecimal:
              return this.stateNumericDecimal(e, t);
            case P.NumericHex:
              return this.stateNumericHex(e, t);
            case P.NamedEntity:
              return this.stateNamedEntity(e, t);
          }
        }
        stateNumericStart(e, t) {
          return t >= e.length
            ? -1
            : (32 | e.charCodeAt(t)) === g.LOWER_X
              ? ((this.state = P.NumericHex),
                (this.consumed += 1),
                this.stateNumericHex(e, t + 1))
              : ((this.state = P.NumericDecimal),
                this.stateNumericDecimal(e, t));
        }
        addToNumericResult(e, t, s, a) {
          if (t !== s) {
            let r = s - t;
            (this.result =
              this.result * Math.pow(a, r) + parseInt(e.substr(t, r), a)),
              (this.consumed += r);
          }
        }
        stateNumericHex(e, t) {
          let s = t;
          for (; t < e.length; ) {
            var a;
            let r = e.charCodeAt(t);
            if (
              !W(r) &&
              (!((a = r) >= g.UPPER_A) || !(a <= g.UPPER_F)) &&
              (!(a >= g.LOWER_A) || !(a <= g.LOWER_F))
            )
              return (
                this.addToNumericResult(e, s, t, 16),
                this.emitNumericEntity(r, 3)
              );
            t += 1;
          }
          return this.addToNumericResult(e, s, t, 16), -1;
        }
        stateNumericDecimal(e, t) {
          let s = t;
          for (; t < e.length; ) {
            let a = e.charCodeAt(t);
            if (!W(a))
              return (
                this.addToNumericResult(e, s, t, 10),
                this.emitNumericEntity(a, 2)
              );
            t += 1;
          }
          return this.addToNumericResult(e, s, t, 10), -1;
        }
        emitNumericEntity(e, t) {
          var s, a, r;
          if (this.consumed <= t)
            return (
              null === (s = this.errors) ||
                void 0 === s ||
                s.absenceOfDigitsInNumericCharacterReference(this.consumed),
              0
            );
          if (e === g.SEMI) this.consumed += 1;
          else if (this.decodeMode === b.Strict) return 0;
          return (
            this.emitCodePoint(
              ((a = this.result) >= 55296 && a <= 57343) || a > 1114111
                ? 65533
                : null !== (r = Q.get(a)) && void 0 !== r
                  ? r
                  : a,
              this.consumed,
            ),
            this.errors &&
              (e !== g.SEMI &&
                this.errors.missingSemicolonAfterCharacterReference(),
              this.errors.validateNumericCharacterReference(this.result)),
            this.consumed
          );
        }
        stateNamedEntity(e, t) {
          let { decodeTree: s } = this,
            a = s[this.treeIndex],
            r = (a & k.VALUE_LENGTH) >> 14;
          for (; t < e.length; t++, this.excess++) {
            let i = e.charCodeAt(t);
            if (
              ((this.treeIndex = V(s, a, this.treeIndex + Math.max(1, r), i)),
              this.treeIndex < 0)
            )
              return 0 === this.result ||
                (this.decodeMode === b.Attribute &&
                  (0 === r ||
                    (function (e) {
                      var t;
                      return (
                        e === g.EQUALS ||
                        ((t = e) >= g.UPPER_A && t <= g.UPPER_Z) ||
                        (t >= g.LOWER_A && t <= g.LOWER_Z) ||
                        W(t)
                      );
                    })(i)))
                ? 0
                : this.emitNotTerminatedNamedEntity();
            if (0 != (r = ((a = s[this.treeIndex]) & k.VALUE_LENGTH) >> 14)) {
              if (i === g.SEMI)
                return this.emitNamedEntityData(
                  this.treeIndex,
                  r,
                  this.consumed + this.excess,
                );
              this.decodeMode !== b.Strict &&
                ((this.result = this.treeIndex),
                (this.consumed += this.excess),
                (this.excess = 0));
            }
          }
          return -1;
        }
        emitNotTerminatedNamedEntity() {
          var e;
          let { result: t, decodeTree: s } = this,
            a = (s[t] & k.VALUE_LENGTH) >> 14;
          return (
            this.emitNamedEntityData(t, a, this.consumed),
            null === (e = this.errors) ||
              void 0 === e ||
              e.missingSemicolonAfterCharacterReference(),
            this.consumed
          );
        }
        emitNamedEntityData(e, t, s) {
          let { decodeTree: a } = this;
          return (
            this.emitCodePoint(1 === t ? a[e] & ~k.VALUE_LENGTH : a[e + 1], s),
            3 === t && this.emitCodePoint(a[e + 2], s),
            s
          );
        }
        end() {
          var e;
          switch (this.state) {
            case P.NamedEntity:
              return 0 !== this.result &&
                (this.decodeMode !== b.Attribute ||
                  this.result === this.treeIndex)
                ? this.emitNotTerminatedNamedEntity()
                : 0;
            case P.NumericDecimal:
              return this.emitNumericEntity(0, 2);
            case P.NumericHex:
              return this.emitNumericEntity(0, 3);
            case P.NumericStart:
              return (
                null === (e = this.errors) ||
                  void 0 === e ||
                  e.absenceOfDigitsInNumericCharacterReference(this.consumed),
                0
              );
            case P.EntityStart:
              return 0;
          }
        }
      }
      function K(e) {
        let t = "",
          s = new X(e, (e) => (t += q(e)));
        return function (e, a) {
          let r = 0,
            i = 0;
          for (; (i = e.indexOf("&", i)) >= 0; ) {
            (t += e.slice(r, i)), s.startEntity(a);
            let n = s.write(e, i + 1);
            if (n < 0) {
              r = i + s.end();
              break;
            }
            (r = i + n), (i = 0 === n ? r + 1 : r);
          }
          let n = t + e.slice(r);
          return (t = ""), n;
        };
      }
      function V(e, t, s, a) {
        let r = (t & k.BRANCH_LENGTH) >> 7,
          i = t & k.JUMP_TABLE;
        if (0 === r) return 0 !== i && a === i ? s : -1;
        if (i) {
          let t = a - i;
          return t < 0 || t >= r ? -1 : e[s + t] - 1;
        }
        let n = s,
          o = n + r - 1;
        for (; n <= o; ) {
          let t = (n + o) >>> 1,
            s = e[t];
          if (s < a) n = t + 1;
          else {
            if (!(s > a)) return e[t + r];
            o = t - 1;
          }
        }
        return -1;
      }
      K(Y),
        K(v),
        ((l = B = B || (B = {})).HTML = "http://www.w3.org/1999/xhtml"),
        (l.MATHML = "http://www.w3.org/1998/Math/MathML"),
        (l.SVG = "http://www.w3.org/2000/svg"),
        (l.XLINK = "http://www.w3.org/1999/xlink"),
        (l.XML = "http://www.w3.org/XML/1998/namespace"),
        (l.XMLNS = "http://www.w3.org/2000/xmlns/"),
        ((d = H = H || (H = {})).TYPE = "type"),
        (d.ACTION = "action"),
        (d.ENCODING = "encoding"),
        (d.PROMPT = "prompt"),
        (d.NAME = "name"),
        (d.COLOR = "color"),
        (d.FACE = "face"),
        (d.SIZE = "size"),
        ((m = F = F || (F = {})).NO_QUIRKS = "no-quirks"),
        (m.QUIRKS = "quirks"),
        (m.LIMITED_QUIRKS = "limited-quirks"),
        ((u = U = U || (U = {})).A = "a"),
        (u.ADDRESS = "address"),
        (u.ANNOTATION_XML = "annotation-xml"),
        (u.APPLET = "applet"),
        (u.AREA = "area"),
        (u.ARTICLE = "article"),
        (u.ASIDE = "aside"),
        (u.B = "b"),
        (u.BASE = "base"),
        (u.BASEFONT = "basefont"),
        (u.BGSOUND = "bgsound"),
        (u.BIG = "big"),
        (u.BLOCKQUOTE = "blockquote"),
        (u.BODY = "body"),
        (u.BR = "br"),
        (u.BUTTON = "button"),
        (u.CAPTION = "caption"),
        (u.CENTER = "center"),
        (u.CODE = "code"),
        (u.COL = "col"),
        (u.COLGROUP = "colgroup"),
        (u.DD = "dd"),
        (u.DESC = "desc"),
        (u.DETAILS = "details"),
        (u.DIALOG = "dialog"),
        (u.DIR = "dir"),
        (u.DIV = "div"),
        (u.DL = "dl"),
        (u.DT = "dt"),
        (u.EM = "em"),
        (u.EMBED = "embed"),
        (u.FIELDSET = "fieldset"),
        (u.FIGCAPTION = "figcaption"),
        (u.FIGURE = "figure"),
        (u.FONT = "font"),
        (u.FOOTER = "footer"),
        (u.FOREIGN_OBJECT = "foreignObject"),
        (u.FORM = "form"),
        (u.FRAME = "frame"),
        (u.FRAMESET = "frameset"),
        (u.H1 = "h1"),
        (u.H2 = "h2"),
        (u.H3 = "h3"),
        (u.H4 = "h4"),
        (u.H5 = "h5"),
        (u.H6 = "h6"),
        (u.HEAD = "head"),
        (u.HEADER = "header"),
        (u.HGROUP = "hgroup"),
        (u.HR = "hr"),
        (u.HTML = "html"),
        (u.I = "i"),
        (u.IMG = "img"),
        (u.IMAGE = "image"),
        (u.INPUT = "input"),
        (u.IFRAME = "iframe"),
        (u.KEYGEN = "keygen"),
        (u.LABEL = "label"),
        (u.LI = "li"),
        (u.LINK = "link"),
        (u.LISTING = "listing"),
        (u.MAIN = "main"),
        (u.MALIGNMARK = "malignmark"),
        (u.MARQUEE = "marquee"),
        (u.MATH = "math"),
        (u.MENU = "menu"),
        (u.META = "meta"),
        (u.MGLYPH = "mglyph"),
        (u.MI = "mi"),
        (u.MO = "mo"),
        (u.MN = "mn"),
        (u.MS = "ms"),
        (u.MTEXT = "mtext"),
        (u.NAV = "nav"),
        (u.NOBR = "nobr"),
        (u.NOFRAMES = "noframes"),
        (u.NOEMBED = "noembed"),
        (u.NOSCRIPT = "noscript"),
        (u.OBJECT = "object"),
        (u.OL = "ol"),
        (u.OPTGROUP = "optgroup"),
        (u.OPTION = "option"),
        (u.P = "p"),
        (u.PARAM = "param"),
        (u.PLAINTEXT = "plaintext"),
        (u.PRE = "pre"),
        (u.RB = "rb"),
        (u.RP = "rp"),
        (u.RT = "rt"),
        (u.RTC = "rtc"),
        (u.RUBY = "ruby"),
        (u.S = "s"),
        (u.SCRIPT = "script"),
        (u.SECTION = "section"),
        (u.SELECT = "select"),
        (u.SOURCE = "source"),
        (u.SMALL = "small"),
        (u.SPAN = "span"),
        (u.STRIKE = "strike"),
        (u.STRONG = "strong"),
        (u.STYLE = "style"),
        (u.SUB = "sub"),
        (u.SUMMARY = "summary"),
        (u.SUP = "sup"),
        (u.TABLE = "table"),
        (u.TBODY = "tbody"),
        (u.TEMPLATE = "template"),
        (u.TEXTAREA = "textarea"),
        (u.TFOOT = "tfoot"),
        (u.TD = "td"),
        (u.TH = "th"),
        (u.THEAD = "thead"),
        (u.TITLE = "title"),
        (u.TR = "tr"),
        (u.TRACK = "track"),
        (u.TT = "tt"),
        (u.U = "u"),
        (u.UL = "ul"),
        (u.SVG = "svg"),
        (u.VAR = "var"),
        (u.WBR = "wbr"),
        (u.XMP = "xmp"),
        ((p = G = G || (G = {}))[(p.UNKNOWN = 0)] = "UNKNOWN"),
        (p[(p.A = 1)] = "A"),
        (p[(p.ADDRESS = 2)] = "ADDRESS"),
        (p[(p.ANNOTATION_XML = 3)] = "ANNOTATION_XML"),
        (p[(p.APPLET = 4)] = "APPLET"),
        (p[(p.AREA = 5)] = "AREA"),
        (p[(p.ARTICLE = 6)] = "ARTICLE"),
        (p[(p.ASIDE = 7)] = "ASIDE"),
        (p[(p.B = 8)] = "B"),
        (p[(p.BASE = 9)] = "BASE"),
        (p[(p.BASEFONT = 10)] = "BASEFONT"),
        (p[(p.BGSOUND = 11)] = "BGSOUND"),
        (p[(p.BIG = 12)] = "BIG"),
        (p[(p.BLOCKQUOTE = 13)] = "BLOCKQUOTE"),
        (p[(p.BODY = 14)] = "BODY"),
        (p[(p.BR = 15)] = "BR"),
        (p[(p.BUTTON = 16)] = "BUTTON"),
        (p[(p.CAPTION = 17)] = "CAPTION"),
        (p[(p.CENTER = 18)] = "CENTER"),
        (p[(p.CODE = 19)] = "CODE"),
        (p[(p.COL = 20)] = "COL"),
        (p[(p.COLGROUP = 21)] = "COLGROUP"),
        (p[(p.DD = 22)] = "DD"),
        (p[(p.DESC = 23)] = "DESC"),
        (p[(p.DETAILS = 24)] = "DETAILS"),
        (p[(p.DIALOG = 25)] = "DIALOG"),
        (p[(p.DIR = 26)] = "DIR"),
        (p[(p.DIV = 27)] = "DIV"),
        (p[(p.DL = 28)] = "DL"),
        (p[(p.DT = 29)] = "DT"),
        (p[(p.EM = 30)] = "EM"),
        (p[(p.EMBED = 31)] = "EMBED"),
        (p[(p.FIELDSET = 32)] = "FIELDSET"),
        (p[(p.FIGCAPTION = 33)] = "FIGCAPTION"),
        (p[(p.FIGURE = 34)] = "FIGURE"),
        (p[(p.FONT = 35)] = "FONT"),
        (p[(p.FOOTER = 36)] = "FOOTER"),
        (p[(p.FOREIGN_OBJECT = 37)] = "FOREIGN_OBJECT"),
        (p[(p.FORM = 38)] = "FORM"),
        (p[(p.FRAME = 39)] = "FRAME"),
        (p[(p.FRAMESET = 40)] = "FRAMESET"),
        (p[(p.H1 = 41)] = "H1"),
        (p[(p.H2 = 42)] = "H2"),
        (p[(p.H3 = 43)] = "H3"),
        (p[(p.H4 = 44)] = "H4"),
        (p[(p.H5 = 45)] = "H5"),
        (p[(p.H6 = 46)] = "H6"),
        (p[(p.HEAD = 47)] = "HEAD"),
        (p[(p.HEADER = 48)] = "HEADER"),
        (p[(p.HGROUP = 49)] = "HGROUP"),
        (p[(p.HR = 50)] = "HR"),
        (p[(p.HTML = 51)] = "HTML"),
        (p[(p.I = 52)] = "I"),
        (p[(p.IMG = 53)] = "IMG"),
        (p[(p.IMAGE = 54)] = "IMAGE"),
        (p[(p.INPUT = 55)] = "INPUT"),
        (p[(p.IFRAME = 56)] = "IFRAME"),
        (p[(p.KEYGEN = 57)] = "KEYGEN"),
        (p[(p.LABEL = 58)] = "LABEL"),
        (p[(p.LI = 59)] = "LI"),
        (p[(p.LINK = 60)] = "LINK"),
        (p[(p.LISTING = 61)] = "LISTING"),
        (p[(p.MAIN = 62)] = "MAIN"),
        (p[(p.MALIGNMARK = 63)] = "MALIGNMARK"),
        (p[(p.MARQUEE = 64)] = "MARQUEE"),
        (p[(p.MATH = 65)] = "MATH"),
        (p[(p.MENU = 66)] = "MENU"),
        (p[(p.META = 67)] = "META"),
        (p[(p.MGLYPH = 68)] = "MGLYPH"),
        (p[(p.MI = 69)] = "MI"),
        (p[(p.MO = 70)] = "MO"),
        (p[(p.MN = 71)] = "MN"),
        (p[(p.MS = 72)] = "MS"),
        (p[(p.MTEXT = 73)] = "MTEXT"),
        (p[(p.NAV = 74)] = "NAV"),
        (p[(p.NOBR = 75)] = "NOBR"),
        (p[(p.NOFRAMES = 76)] = "NOFRAMES"),
        (p[(p.NOEMBED = 77)] = "NOEMBED"),
        (p[(p.NOSCRIPT = 78)] = "NOSCRIPT"),
        (p[(p.OBJECT = 79)] = "OBJECT"),
        (p[(p.OL = 80)] = "OL"),
        (p[(p.OPTGROUP = 81)] = "OPTGROUP"),
        (p[(p.OPTION = 82)] = "OPTION"),
        (p[(p.P = 83)] = "P"),
        (p[(p.PARAM = 84)] = "PARAM"),
        (p[(p.PLAINTEXT = 85)] = "PLAINTEXT"),
        (p[(p.PRE = 86)] = "PRE"),
        (p[(p.RB = 87)] = "RB"),
        (p[(p.RP = 88)] = "RP"),
        (p[(p.RT = 89)] = "RT"),
        (p[(p.RTC = 90)] = "RTC"),
        (p[(p.RUBY = 91)] = "RUBY"),
        (p[(p.S = 92)] = "S"),
        (p[(p.SCRIPT = 93)] = "SCRIPT"),
        (p[(p.SECTION = 94)] = "SECTION"),
        (p[(p.SELECT = 95)] = "SELECT"),
        (p[(p.SOURCE = 96)] = "SOURCE"),
        (p[(p.SMALL = 97)] = "SMALL"),
        (p[(p.SPAN = 98)] = "SPAN"),
        (p[(p.STRIKE = 99)] = "STRIKE"),
        (p[(p.STRONG = 100)] = "STRONG"),
        (p[(p.STYLE = 101)] = "STYLE"),
        (p[(p.SUB = 102)] = "SUB"),
        (p[(p.SUMMARY = 103)] = "SUMMARY"),
        (p[(p.SUP = 104)] = "SUP"),
        (p[(p.TABLE = 105)] = "TABLE"),
        (p[(p.TBODY = 106)] = "TBODY"),
        (p[(p.TEMPLATE = 107)] = "TEMPLATE"),
        (p[(p.TEXTAREA = 108)] = "TEXTAREA"),
        (p[(p.TFOOT = 109)] = "TFOOT"),
        (p[(p.TD = 110)] = "TD"),
        (p[(p.TH = 111)] = "TH"),
        (p[(p.THEAD = 112)] = "THEAD"),
        (p[(p.TITLE = 113)] = "TITLE"),
        (p[(p.TR = 114)] = "TR"),
        (p[(p.TRACK = 115)] = "TRACK"),
        (p[(p.TT = 116)] = "TT"),
        (p[(p.U = 117)] = "U"),
        (p[(p.UL = 118)] = "UL"),
        (p[(p.SVG = 119)] = "SVG"),
        (p[(p.VAR = 120)] = "VAR"),
        (p[(p.WBR = 121)] = "WBR"),
        (p[(p.XMP = 122)] = "XMP");
      let z = new Map([
        [U.A, G.A],
        [U.ADDRESS, G.ADDRESS],
        [U.ANNOTATION_XML, G.ANNOTATION_XML],
        [U.APPLET, G.APPLET],
        [U.AREA, G.AREA],
        [U.ARTICLE, G.ARTICLE],
        [U.ASIDE, G.ASIDE],
        [U.B, G.B],
        [U.BASE, G.BASE],
        [U.BASEFONT, G.BASEFONT],
        [U.BGSOUND, G.BGSOUND],
        [U.BIG, G.BIG],
        [U.BLOCKQUOTE, G.BLOCKQUOTE],
        [U.BODY, G.BODY],
        [U.BR, G.BR],
        [U.BUTTON, G.BUTTON],
        [U.CAPTION, G.CAPTION],
        [U.CENTER, G.CENTER],
        [U.CODE, G.CODE],
        [U.COL, G.COL],
        [U.COLGROUP, G.COLGROUP],
        [U.DD, G.DD],
        [U.DESC, G.DESC],
        [U.DETAILS, G.DETAILS],
        [U.DIALOG, G.DIALOG],
        [U.DIR, G.DIR],
        [U.DIV, G.DIV],
        [U.DL, G.DL],
        [U.DT, G.DT],
        [U.EM, G.EM],
        [U.EMBED, G.EMBED],
        [U.FIELDSET, G.FIELDSET],
        [U.FIGCAPTION, G.FIGCAPTION],
        [U.FIGURE, G.FIGURE],
        [U.FONT, G.FONT],
        [U.FOOTER, G.FOOTER],
        [U.FOREIGN_OBJECT, G.FOREIGN_OBJECT],
        [U.FORM, G.FORM],
        [U.FRAME, G.FRAME],
        [U.FRAMESET, G.FRAMESET],
        [U.H1, G.H1],
        [U.H2, G.H2],
        [U.H3, G.H3],
        [U.H4, G.H4],
        [U.H5, G.H5],
        [U.H6, G.H6],
        [U.HEAD, G.HEAD],
        [U.HEADER, G.HEADER],
        [U.HGROUP, G.HGROUP],
        [U.HR, G.HR],
        [U.HTML, G.HTML],
        [U.I, G.I],
        [U.IMG, G.IMG],
        [U.IMAGE, G.IMAGE],
        [U.INPUT, G.INPUT],
        [U.IFRAME, G.IFRAME],
        [U.KEYGEN, G.KEYGEN],
        [U.LABEL, G.LABEL],
        [U.LI, G.LI],
        [U.LINK, G.LINK],
        [U.LISTING, G.LISTING],
        [U.MAIN, G.MAIN],
        [U.MALIGNMARK, G.MALIGNMARK],
        [U.MARQUEE, G.MARQUEE],
        [U.MATH, G.MATH],
        [U.MENU, G.MENU],
        [U.META, G.META],
        [U.MGLYPH, G.MGLYPH],
        [U.MI, G.MI],
        [U.MO, G.MO],
        [U.MN, G.MN],
        [U.MS, G.MS],
        [U.MTEXT, G.MTEXT],
        [U.NAV, G.NAV],
        [U.NOBR, G.NOBR],
        [U.NOFRAMES, G.NOFRAMES],
        [U.NOEMBED, G.NOEMBED],
        [U.NOSCRIPT, G.NOSCRIPT],
        [U.OBJECT, G.OBJECT],
        [U.OL, G.OL],
        [U.OPTGROUP, G.OPTGROUP],
        [U.OPTION, G.OPTION],
        [U.P, G.P],
        [U.PARAM, G.PARAM],
        [U.PLAINTEXT, G.PLAINTEXT],
        [U.PRE, G.PRE],
        [U.RB, G.RB],
        [U.RP, G.RP],
        [U.RT, G.RT],
        [U.RTC, G.RTC],
        [U.RUBY, G.RUBY],
        [U.S, G.S],
        [U.SCRIPT, G.SCRIPT],
        [U.SECTION, G.SECTION],
        [U.SELECT, G.SELECT],
        [U.SOURCE, G.SOURCE],
        [U.SMALL, G.SMALL],
        [U.SPAN, G.SPAN],
        [U.STRIKE, G.STRIKE],
        [U.STRONG, G.STRONG],
        [U.STYLE, G.STYLE],
        [U.SUB, G.SUB],
        [U.SUMMARY, G.SUMMARY],
        [U.SUP, G.SUP],
        [U.TABLE, G.TABLE],
        [U.TBODY, G.TBODY],
        [U.TEMPLATE, G.TEMPLATE],
        [U.TEXTAREA, G.TEXTAREA],
        [U.TFOOT, G.TFOOT],
        [U.TD, G.TD],
        [U.TH, G.TH],
        [U.THEAD, G.THEAD],
        [U.TITLE, G.TITLE],
        [U.TR, G.TR],
        [U.TRACK, G.TRACK],
        [U.TT, G.TT],
        [U.U, G.U],
        [U.UL, G.UL],
        [U.SVG, G.SVG],
        [U.VAR, G.VAR],
        [U.WBR, G.WBR],
        [U.XMP, G.XMP],
      ]);
      function J(e) {
        var t;
        return null !== (t = z.get(e)) && void 0 !== t ? t : G.UNKNOWN;
      }
      let j = G,
        Z = {
          [B.HTML]: new Set([
            j.ADDRESS,
            j.APPLET,
            j.AREA,
            j.ARTICLE,
            j.ASIDE,
            j.BASE,
            j.BASEFONT,
            j.BGSOUND,
            j.BLOCKQUOTE,
            j.BODY,
            j.BR,
            j.BUTTON,
            j.CAPTION,
            j.CENTER,
            j.COL,
            j.COLGROUP,
            j.DD,
            j.DETAILS,
            j.DIR,
            j.DIV,
            j.DL,
            j.DT,
            j.EMBED,
            j.FIELDSET,
            j.FIGCAPTION,
            j.FIGURE,
            j.FOOTER,
            j.FORM,
            j.FRAME,
            j.FRAMESET,
            j.H1,
            j.H2,
            j.H3,
            j.H4,
            j.H5,
            j.H6,
            j.HEAD,
            j.HEADER,
            j.HGROUP,
            j.HR,
            j.HTML,
            j.IFRAME,
            j.IMG,
            j.INPUT,
            j.LI,
            j.LINK,
            j.LISTING,
            j.MAIN,
            j.MARQUEE,
            j.MENU,
            j.META,
            j.NAV,
            j.NOEMBED,
            j.NOFRAMES,
            j.NOSCRIPT,
            j.OBJECT,
            j.OL,
            j.P,
            j.PARAM,
            j.PLAINTEXT,
            j.PRE,
            j.SCRIPT,
            j.SECTION,
            j.SELECT,
            j.SOURCE,
            j.STYLE,
            j.SUMMARY,
            j.TABLE,
            j.TBODY,
            j.TD,
            j.TEMPLATE,
            j.TEXTAREA,
            j.TFOOT,
            j.TH,
            j.THEAD,
            j.TITLE,
            j.TR,
            j.TRACK,
            j.UL,
            j.WBR,
            j.XMP,
          ]),
          [B.MATHML]: new Set([
            j.MI,
            j.MO,
            j.MN,
            j.MS,
            j.MTEXT,
            j.ANNOTATION_XML,
          ]),
          [B.SVG]: new Set([j.TITLE, j.FOREIGN_OBJECT, j.DESC]),
          [B.XLINK]: new Set(),
          [B.XML]: new Set(),
          [B.XMLNS]: new Set(),
        };
      function $(e) {
        return (
          e === j.H1 ||
          e === j.H2 ||
          e === j.H3 ||
          e === j.H4 ||
          e === j.H5 ||
          e === j.H6
        );
      }
      U.STYLE, U.SCRIPT, U.XMP, U.IFRAME, U.NOEMBED, U.NOFRAMES, U.PLAINTEXT;
      let ee = new Map([
        [128, 8364],
        [130, 8218],
        [131, 402],
        [132, 8222],
        [133, 8230],
        [134, 8224],
        [135, 8225],
        [136, 710],
        [137, 8240],
        [138, 352],
        [139, 8249],
        [140, 338],
        [142, 381],
        [145, 8216],
        [146, 8217],
        [147, 8220],
        [148, 8221],
        [149, 8226],
        [150, 8211],
        [151, 8212],
        [152, 732],
        [153, 8482],
        [154, 353],
        [155, 8250],
        [156, 339],
        [158, 382],
        [159, 376],
      ]);
      ((N = y || (y = {}))[(N.DATA = 0)] = "DATA"),
        (N[(N.RCDATA = 1)] = "RCDATA"),
        (N[(N.RAWTEXT = 2)] = "RAWTEXT"),
        (N[(N.SCRIPT_DATA = 3)] = "SCRIPT_DATA"),
        (N[(N.PLAINTEXT = 4)] = "PLAINTEXT"),
        (N[(N.TAG_OPEN = 5)] = "TAG_OPEN"),
        (N[(N.END_TAG_OPEN = 6)] = "END_TAG_OPEN"),
        (N[(N.TAG_NAME = 7)] = "TAG_NAME"),
        (N[(N.RCDATA_LESS_THAN_SIGN = 8)] = "RCDATA_LESS_THAN_SIGN"),
        (N[(N.RCDATA_END_TAG_OPEN = 9)] = "RCDATA_END_TAG_OPEN"),
        (N[(N.RCDATA_END_TAG_NAME = 10)] = "RCDATA_END_TAG_NAME"),
        (N[(N.RAWTEXT_LESS_THAN_SIGN = 11)] = "RAWTEXT_LESS_THAN_SIGN"),
        (N[(N.RAWTEXT_END_TAG_OPEN = 12)] = "RAWTEXT_END_TAG_OPEN"),
        (N[(N.RAWTEXT_END_TAG_NAME = 13)] = "RAWTEXT_END_TAG_NAME"),
        (N[(N.SCRIPT_DATA_LESS_THAN_SIGN = 14)] = "SCRIPT_DATA_LESS_THAN_SIGN"),
        (N[(N.SCRIPT_DATA_END_TAG_OPEN = 15)] = "SCRIPT_DATA_END_TAG_OPEN"),
        (N[(N.SCRIPT_DATA_END_TAG_NAME = 16)] = "SCRIPT_DATA_END_TAG_NAME"),
        (N[(N.SCRIPT_DATA_ESCAPE_START = 17)] = "SCRIPT_DATA_ESCAPE_START"),
        (N[(N.SCRIPT_DATA_ESCAPE_START_DASH = 18)] =
          "SCRIPT_DATA_ESCAPE_START_DASH"),
        (N[(N.SCRIPT_DATA_ESCAPED = 19)] = "SCRIPT_DATA_ESCAPED"),
        (N[(N.SCRIPT_DATA_ESCAPED_DASH = 20)] = "SCRIPT_DATA_ESCAPED_DASH"),
        (N[(N.SCRIPT_DATA_ESCAPED_DASH_DASH = 21)] =
          "SCRIPT_DATA_ESCAPED_DASH_DASH"),
        (N[(N.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22)] =
          "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"),
        (N[(N.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23)] =
          "SCRIPT_DATA_ESCAPED_END_TAG_OPEN"),
        (N[(N.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24)] =
          "SCRIPT_DATA_ESCAPED_END_TAG_NAME"),
        (N[(N.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25)] =
          "SCRIPT_DATA_DOUBLE_ESCAPE_START"),
        (N[(N.SCRIPT_DATA_DOUBLE_ESCAPED = 26)] = "SCRIPT_DATA_DOUBLE_ESCAPED"),
        (N[(N.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27)] =
          "SCRIPT_DATA_DOUBLE_ESCAPED_DASH"),
        (N[(N.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28)] =
          "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"),
        (N[(N.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29)] =
          "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"),
        (N[(N.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30)] =
          "SCRIPT_DATA_DOUBLE_ESCAPE_END"),
        (N[(N.BEFORE_ATTRIBUTE_NAME = 31)] = "BEFORE_ATTRIBUTE_NAME"),
        (N[(N.ATTRIBUTE_NAME = 32)] = "ATTRIBUTE_NAME"),
        (N[(N.AFTER_ATTRIBUTE_NAME = 33)] = "AFTER_ATTRIBUTE_NAME"),
        (N[(N.BEFORE_ATTRIBUTE_VALUE = 34)] = "BEFORE_ATTRIBUTE_VALUE"),
        (N[(N.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35)] =
          "ATTRIBUTE_VALUE_DOUBLE_QUOTED"),
        (N[(N.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36)] =
          "ATTRIBUTE_VALUE_SINGLE_QUOTED"),
        (N[(N.ATTRIBUTE_VALUE_UNQUOTED = 37)] = "ATTRIBUTE_VALUE_UNQUOTED"),
        (N[(N.AFTER_ATTRIBUTE_VALUE_QUOTED = 38)] =
          "AFTER_ATTRIBUTE_VALUE_QUOTED"),
        (N[(N.SELF_CLOSING_START_TAG = 39)] = "SELF_CLOSING_START_TAG"),
        (N[(N.BOGUS_COMMENT = 40)] = "BOGUS_COMMENT"),
        (N[(N.MARKUP_DECLARATION_OPEN = 41)] = "MARKUP_DECLARATION_OPEN"),
        (N[(N.COMMENT_START = 42)] = "COMMENT_START"),
        (N[(N.COMMENT_START_DASH = 43)] = "COMMENT_START_DASH"),
        (N[(N.COMMENT = 44)] = "COMMENT"),
        (N[(N.COMMENT_LESS_THAN_SIGN = 45)] = "COMMENT_LESS_THAN_SIGN"),
        (N[(N.COMMENT_LESS_THAN_SIGN_BANG = 46)] =
          "COMMENT_LESS_THAN_SIGN_BANG"),
        (N[(N.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47)] =
          "COMMENT_LESS_THAN_SIGN_BANG_DASH"),
        (N[(N.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48)] =
          "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"),
        (N[(N.COMMENT_END_DASH = 49)] = "COMMENT_END_DASH"),
        (N[(N.COMMENT_END = 50)] = "COMMENT_END"),
        (N[(N.COMMENT_END_BANG = 51)] = "COMMENT_END_BANG"),
        (N[(N.DOCTYPE = 52)] = "DOCTYPE"),
        (N[(N.BEFORE_DOCTYPE_NAME = 53)] = "BEFORE_DOCTYPE_NAME"),
        (N[(N.DOCTYPE_NAME = 54)] = "DOCTYPE_NAME"),
        (N[(N.AFTER_DOCTYPE_NAME = 55)] = "AFTER_DOCTYPE_NAME"),
        (N[(N.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56)] =
          "AFTER_DOCTYPE_PUBLIC_KEYWORD"),
        (N[(N.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57)] =
          "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"),
        (N[(N.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58)] =
          "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"),
        (N[(N.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59)] =
          "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"),
        (N[(N.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60)] =
          "AFTER_DOCTYPE_PUBLIC_IDENTIFIER"),
        (N[(N.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61)] =
          "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"),
        (N[(N.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62)] =
          "AFTER_DOCTYPE_SYSTEM_KEYWORD"),
        (N[(N.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63)] =
          "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"),
        (N[(N.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64)] =
          "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"),
        (N[(N.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65)] =
          "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"),
        (N[(N.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66)] =
          "AFTER_DOCTYPE_SYSTEM_IDENTIFIER"),
        (N[(N.BOGUS_DOCTYPE = 67)] = "BOGUS_DOCTYPE"),
        (N[(N.CDATA_SECTION = 68)] = "CDATA_SECTION"),
        (N[(N.CDATA_SECTION_BRACKET = 69)] = "CDATA_SECTION_BRACKET"),
        (N[(N.CDATA_SECTION_END = 70)] = "CDATA_SECTION_END"),
        (N[(N.CHARACTER_REFERENCE = 71)] = "CHARACTER_REFERENCE"),
        (N[(N.NAMED_CHARACTER_REFERENCE = 72)] = "NAMED_CHARACTER_REFERENCE"),
        (N[(N.AMBIGUOUS_AMPERSAND = 73)] = "AMBIGUOUS_AMPERSAND"),
        (N[(N.NUMERIC_CHARACTER_REFERENCE = 74)] =
          "NUMERIC_CHARACTER_REFERENCE"),
        (N[(N.HEXADEMICAL_CHARACTER_REFERENCE_START = 75)] =
          "HEXADEMICAL_CHARACTER_REFERENCE_START"),
        (N[(N.HEXADEMICAL_CHARACTER_REFERENCE = 76)] =
          "HEXADEMICAL_CHARACTER_REFERENCE"),
        (N[(N.DECIMAL_CHARACTER_REFERENCE = 77)] =
          "DECIMAL_CHARACTER_REFERENCE"),
        (N[(N.NUMERIC_CHARACTER_REFERENCE_END = 78)] =
          "NUMERIC_CHARACTER_REFERENCE_END");
      let et = {
        DATA: y.DATA,
        RCDATA: y.RCDATA,
        RAWTEXT: y.RAWTEXT,
        SCRIPT_DATA: y.SCRIPT_DATA,
        PLAINTEXT: y.PLAINTEXT,
        CDATA_SECTION: y.CDATA_SECTION,
      };
      function es(e) {
        return e >= O.DIGIT_0 && e <= O.DIGIT_9;
      }
      function ea(e) {
        return e >= O.LATIN_CAPITAL_A && e <= O.LATIN_CAPITAL_Z;
      }
      function er(e) {
        return (e >= O.LATIN_SMALL_A && e <= O.LATIN_SMALL_Z) || ea(e);
      }
      function ei(e) {
        return er(e) || es(e);
      }
      function en(e) {
        return e >= O.LATIN_CAPITAL_A && e <= O.LATIN_CAPITAL_F;
      }
      function eo(e) {
        return e >= O.LATIN_SMALL_A && e <= O.LATIN_SMALL_F;
      }
      function eE(e) {
        return (
          e === O.SPACE ||
          e === O.LINE_FEED ||
          e === O.TABULATION ||
          e === O.FORM_FEED
        );
      }
      function ec(e) {
        return eE(e) || e === O.SOLIDUS || e === O.GREATER_THAN_SIGN;
      }
      class eT {
        constructor(e, t) {
          (this.options = e),
            (this.handler = t),
            (this.paused = !1),
            (this.inLoop = !1),
            (this.inForeignNode = !1),
            (this.lastStartTagName = ""),
            (this.active = !1),
            (this.state = y.DATA),
            (this.returnState = y.DATA),
            (this.charRefCode = -1),
            (this.consumedAfterSnapshot = -1),
            (this.currentCharacterToken = null),
            (this.currentToken = null),
            (this.currentAttr = { name: "", value: "" }),
            (this.preprocessor = new E(t)),
            (this.currentLocation = this.getCurrentLocation(-1));
        }
        _err(e) {
          var t, s;
          null === (s = (t = this.handler).onParseError) ||
            void 0 === s ||
            s.call(t, this.preprocessor.getError(e));
        }
        getCurrentLocation(e) {
          return this.options.sourceCodeLocationInfo
            ? {
                startLine: this.preprocessor.line,
                startCol: this.preprocessor.col - e,
                startOffset: this.preprocessor.offset - e,
                endLine: -1,
                endCol: -1,
                endOffset: -1,
              }
            : null;
        }
        _runParsingLoop() {
          if (!this.inLoop) {
            for (this.inLoop = !0; this.active && !this.paused; ) {
              this.consumedAfterSnapshot = 0;
              let e = this._consume();
              this._ensureHibernation() || this._callState(e);
            }
            this.inLoop = !1;
          }
        }
        pause() {
          this.paused = !0;
        }
        resume(e) {
          if (!this.paused) throw Error("Parser was already resumed");
          (this.paused = !1),
            this.inLoop ||
              (this._runParsingLoop(), this.paused || null == e || e());
        }
        write(e, t, s) {
          (this.active = !0),
            this.preprocessor.write(e, t),
            this._runParsingLoop(),
            this.paused || null == s || s();
        }
        insertHtmlAtCurrentPos(e) {
          (this.active = !0),
            this.preprocessor.insertHtmlAtCurrentPos(e),
            this._runParsingLoop();
        }
        _ensureHibernation() {
          return (
            !!this.preprocessor.endOfChunkHit &&
            (this._unconsume(this.consumedAfterSnapshot),
            (this.active = !1),
            !0)
          );
        }
        _consume() {
          return this.consumedAfterSnapshot++, this.preprocessor.advance();
        }
        _unconsume(e) {
          (this.consumedAfterSnapshot -= e), this.preprocessor.retreat(e);
        }
        _reconsumeInState(e, t) {
          (this.state = e), this._callState(t);
        }
        _advanceBy(e) {
          this.consumedAfterSnapshot += e;
          for (let t = 0; t < e; t++) this.preprocessor.advance();
        }
        _consumeSequenceIfMatch(e, t) {
          return (
            !!this.preprocessor.startsWith(e, t) &&
            (this._advanceBy(e.length - 1), !0)
          );
        }
        _createStartTagToken() {
          this.currentToken = {
            type: f.START_TAG,
            tagName: "",
            tagID: G.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(1),
          };
        }
        _createEndTagToken() {
          this.currentToken = {
            type: f.END_TAG,
            tagName: "",
            tagID: G.UNKNOWN,
            selfClosing: !1,
            ackSelfClosing: !1,
            attrs: [],
            location: this.getCurrentLocation(2),
          };
        }
        _createCommentToken(e) {
          this.currentToken = {
            type: f.COMMENT,
            data: "",
            location: this.getCurrentLocation(e),
          };
        }
        _createDoctypeToken(e) {
          this.currentToken = {
            type: f.DOCTYPE,
            name: e,
            forceQuirks: !1,
            publicId: null,
            systemId: null,
            location: this.currentLocation,
          };
        }
        _createCharacterToken(e, t) {
          this.currentCharacterToken = {
            type: e,
            chars: t,
            location: this.currentLocation,
          };
        }
        _createAttr(e) {
          (this.currentAttr = { name: e, value: "" }),
            (this.currentLocation = this.getCurrentLocation(0));
        }
        _leaveAttrName() {
          var e, t;
          let s = this.currentToken;
          null === c(s, this.currentAttr.name)
            ? (s.attrs.push(this.currentAttr),
              s.location &&
                this.currentLocation &&
                (((null !== (e = (t = s.location).attrs) && void 0 !== e
                  ? e
                  : (t.attrs = Object.create(null)))[this.currentAttr.name] =
                  this.currentLocation),
                this._leaveAttrValue()))
            : this._err(L.duplicateAttribute);
        }
        _leaveAttrValue() {
          this.currentLocation &&
            ((this.currentLocation.endLine = this.preprocessor.line),
            (this.currentLocation.endCol = this.preprocessor.col),
            (this.currentLocation.endOffset = this.preprocessor.offset));
        }
        prepareToken(e) {
          this._emitCurrentCharacterToken(e.location),
            (this.currentToken = null),
            e.location &&
              ((e.location.endLine = this.preprocessor.line),
              (e.location.endCol = this.preprocessor.col + 1),
              (e.location.endOffset = this.preprocessor.offset + 1)),
            (this.currentLocation = this.getCurrentLocation(-1));
        }
        emitCurrentTagToken() {
          let e = this.currentToken;
          this.prepareToken(e),
            (e.tagID = J(e.tagName)),
            e.type === f.START_TAG
              ? ((this.lastStartTagName = e.tagName),
                this.handler.onStartTag(e))
              : (e.attrs.length > 0 && this._err(L.endTagWithAttributes),
                e.selfClosing && this._err(L.endTagWithTrailingSolidus),
                this.handler.onEndTag(e)),
            this.preprocessor.dropParsedChunk();
        }
        emitCurrentComment(e) {
          this.prepareToken(e),
            this.handler.onComment(e),
            this.preprocessor.dropParsedChunk();
        }
        emitCurrentDoctype(e) {
          this.prepareToken(e),
            this.handler.onDoctype(e),
            this.preprocessor.dropParsedChunk();
        }
        _emitCurrentCharacterToken(e) {
          if (this.currentCharacterToken) {
            switch (
              (e &&
                this.currentCharacterToken.location &&
                ((this.currentCharacterToken.location.endLine = e.startLine),
                (this.currentCharacterToken.location.endCol = e.startCol),
                (this.currentCharacterToken.location.endOffset =
                  e.startOffset)),
              this.currentCharacterToken.type)
            ) {
              case f.CHARACTER:
                this.handler.onCharacter(this.currentCharacterToken);
                break;
              case f.NULL_CHARACTER:
                this.handler.onNullCharacter(this.currentCharacterToken);
                break;
              case f.WHITESPACE_CHARACTER:
                this.handler.onWhitespaceCharacter(this.currentCharacterToken);
            }
            this.currentCharacterToken = null;
          }
        }
        _emitEOFToken() {
          let e = this.getCurrentLocation(0);
          e &&
            ((e.endLine = e.startLine),
            (e.endCol = e.startCol),
            (e.endOffset = e.startOffset)),
            this._emitCurrentCharacterToken(e),
            this.handler.onEof({ type: f.EOF, location: e }),
            (this.active = !1);
        }
        _appendCharToCurrentCharacterToken(e, t) {
          if (this.currentCharacterToken) {
            if (this.currentCharacterToken.type !== e)
              (this.currentLocation = this.getCurrentLocation(0)),
                this._emitCurrentCharacterToken(this.currentLocation),
                this.preprocessor.dropParsedChunk();
            else {
              this.currentCharacterToken.chars += t;
              return;
            }
          }
          this._createCharacterToken(e, t);
        }
        _emitCodePoint(e) {
          let t = eE(e)
            ? f.WHITESPACE_CHARACTER
            : e === O.NULL
              ? f.NULL_CHARACTER
              : f.CHARACTER;
          this._appendCharToCurrentCharacterToken(t, String.fromCodePoint(e));
        }
        _emitChars(e) {
          this._appendCharToCurrentCharacterToken(f.CHARACTER, e);
        }
        _matchNamedCharacterReference(e) {
          let t = null,
            s = 0,
            a = !1;
          for (
            let i = 0, n = Y[0];
            i >= 0 && !((i = V(Y, n, i + 1, e)) < 0);
            e = this._consume()
          ) {
            s += 1;
            let o = (n = Y[i]) & k.VALUE_LENGTH;
            if (o) {
              var r;
              let n = (o >> 14) - 1;
              if (
                (e !== O.SEMICOLON &&
                this._isCharacterReferenceInAttribute() &&
                ((r = this.preprocessor.peek(1)) === O.EQUALS_SIGN || ei(r))
                  ? ((t = [O.AMPERSAND]), (i += n))
                  : ((t =
                      0 === n
                        ? [Y[i] & ~k.VALUE_LENGTH]
                        : 1 === n
                          ? [Y[++i]]
                          : [Y[++i], Y[++i]]),
                    (s = 0),
                    (a = e !== O.SEMICOLON)),
                0 === n)
              ) {
                this._consume();
                break;
              }
            }
          }
          return (
            this._unconsume(s),
            a &&
              !this.preprocessor.endOfChunkHit &&
              this._err(L.missingSemicolonAfterCharacterReference),
            this._unconsume(1),
            t
          );
        }
        _isCharacterReferenceInAttribute() {
          return (
            this.returnState === y.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
            this.returnState === y.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
            this.returnState === y.ATTRIBUTE_VALUE_UNQUOTED
          );
        }
        _flushCodePointConsumedAsCharacterReference(e) {
          this._isCharacterReferenceInAttribute()
            ? (this.currentAttr.value += String.fromCodePoint(e))
            : this._emitCodePoint(e);
        }
        _callState(e) {
          switch (this.state) {
            case y.DATA:
              this._stateData(e);
              break;
            case y.RCDATA:
              this._stateRcdata(e);
              break;
            case y.RAWTEXT:
              this._stateRawtext(e);
              break;
            case y.SCRIPT_DATA:
              this._stateScriptData(e);
              break;
            case y.PLAINTEXT:
              this._statePlaintext(e);
              break;
            case y.TAG_OPEN:
              this._stateTagOpen(e);
              break;
            case y.END_TAG_OPEN:
              this._stateEndTagOpen(e);
              break;
            case y.TAG_NAME:
              this._stateTagName(e);
              break;
            case y.RCDATA_LESS_THAN_SIGN:
              this._stateRcdataLessThanSign(e);
              break;
            case y.RCDATA_END_TAG_OPEN:
              this._stateRcdataEndTagOpen(e);
              break;
            case y.RCDATA_END_TAG_NAME:
              this._stateRcdataEndTagName(e);
              break;
            case y.RAWTEXT_LESS_THAN_SIGN:
              this._stateRawtextLessThanSign(e);
              break;
            case y.RAWTEXT_END_TAG_OPEN:
              this._stateRawtextEndTagOpen(e);
              break;
            case y.RAWTEXT_END_TAG_NAME:
              this._stateRawtextEndTagName(e);
              break;
            case y.SCRIPT_DATA_LESS_THAN_SIGN:
              this._stateScriptDataLessThanSign(e);
              break;
            case y.SCRIPT_DATA_END_TAG_OPEN:
              this._stateScriptDataEndTagOpen(e);
              break;
            case y.SCRIPT_DATA_END_TAG_NAME:
              this._stateScriptDataEndTagName(e);
              break;
            case y.SCRIPT_DATA_ESCAPE_START:
              this._stateScriptDataEscapeStart(e);
              break;
            case y.SCRIPT_DATA_ESCAPE_START_DASH:
              this._stateScriptDataEscapeStartDash(e);
              break;
            case y.SCRIPT_DATA_ESCAPED:
              this._stateScriptDataEscaped(e);
              break;
            case y.SCRIPT_DATA_ESCAPED_DASH:
              this._stateScriptDataEscapedDash(e);
              break;
            case y.SCRIPT_DATA_ESCAPED_DASH_DASH:
              this._stateScriptDataEscapedDashDash(e);
              break;
            case y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN:
              this._stateScriptDataEscapedLessThanSign(e);
              break;
            case y.SCRIPT_DATA_ESCAPED_END_TAG_OPEN:
              this._stateScriptDataEscapedEndTagOpen(e);
              break;
            case y.SCRIPT_DATA_ESCAPED_END_TAG_NAME:
              this._stateScriptDataEscapedEndTagName(e);
              break;
            case y.SCRIPT_DATA_DOUBLE_ESCAPE_START:
              this._stateScriptDataDoubleEscapeStart(e);
              break;
            case y.SCRIPT_DATA_DOUBLE_ESCAPED:
              this._stateScriptDataDoubleEscaped(e);
              break;
            case y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH:
              this._stateScriptDataDoubleEscapedDash(e);
              break;
            case y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH:
              this._stateScriptDataDoubleEscapedDashDash(e);
              break;
            case y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN:
              this._stateScriptDataDoubleEscapedLessThanSign(e);
              break;
            case y.SCRIPT_DATA_DOUBLE_ESCAPE_END:
              this._stateScriptDataDoubleEscapeEnd(e);
              break;
            case y.BEFORE_ATTRIBUTE_NAME:
              this._stateBeforeAttributeName(e);
              break;
            case y.ATTRIBUTE_NAME:
              this._stateAttributeName(e);
              break;
            case y.AFTER_ATTRIBUTE_NAME:
              this._stateAfterAttributeName(e);
              break;
            case y.BEFORE_ATTRIBUTE_VALUE:
              this._stateBeforeAttributeValue(e);
              break;
            case y.ATTRIBUTE_VALUE_DOUBLE_QUOTED:
              this._stateAttributeValueDoubleQuoted(e);
              break;
            case y.ATTRIBUTE_VALUE_SINGLE_QUOTED:
              this._stateAttributeValueSingleQuoted(e);
              break;
            case y.ATTRIBUTE_VALUE_UNQUOTED:
              this._stateAttributeValueUnquoted(e);
              break;
            case y.AFTER_ATTRIBUTE_VALUE_QUOTED:
              this._stateAfterAttributeValueQuoted(e);
              break;
            case y.SELF_CLOSING_START_TAG:
              this._stateSelfClosingStartTag(e);
              break;
            case y.BOGUS_COMMENT:
              this._stateBogusComment(e);
              break;
            case y.MARKUP_DECLARATION_OPEN:
              this._stateMarkupDeclarationOpen(e);
              break;
            case y.COMMENT_START:
              this._stateCommentStart(e);
              break;
            case y.COMMENT_START_DASH:
              this._stateCommentStartDash(e);
              break;
            case y.COMMENT:
              this._stateComment(e);
              break;
            case y.COMMENT_LESS_THAN_SIGN:
              this._stateCommentLessThanSign(e);
              break;
            case y.COMMENT_LESS_THAN_SIGN_BANG:
              this._stateCommentLessThanSignBang(e);
              break;
            case y.COMMENT_LESS_THAN_SIGN_BANG_DASH:
              this._stateCommentLessThanSignBangDash(e);
              break;
            case y.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH:
              this._stateCommentLessThanSignBangDashDash(e);
              break;
            case y.COMMENT_END_DASH:
              this._stateCommentEndDash(e);
              break;
            case y.COMMENT_END:
              this._stateCommentEnd(e);
              break;
            case y.COMMENT_END_BANG:
              this._stateCommentEndBang(e);
              break;
            case y.DOCTYPE:
              this._stateDoctype(e);
              break;
            case y.BEFORE_DOCTYPE_NAME:
              this._stateBeforeDoctypeName(e);
              break;
            case y.DOCTYPE_NAME:
              this._stateDoctypeName(e);
              break;
            case y.AFTER_DOCTYPE_NAME:
              this._stateAfterDoctypeName(e);
              break;
            case y.AFTER_DOCTYPE_PUBLIC_KEYWORD:
              this._stateAfterDoctypePublicKeyword(e);
              break;
            case y.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER:
              this._stateBeforeDoctypePublicIdentifier(e);
              break;
            case y.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED:
              this._stateDoctypePublicIdentifierDoubleQuoted(e);
              break;
            case y.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED:
              this._stateDoctypePublicIdentifierSingleQuoted(e);
              break;
            case y.AFTER_DOCTYPE_PUBLIC_IDENTIFIER:
              this._stateAfterDoctypePublicIdentifier(e);
              break;
            case y.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS:
              this._stateBetweenDoctypePublicAndSystemIdentifiers(e);
              break;
            case y.AFTER_DOCTYPE_SYSTEM_KEYWORD:
              this._stateAfterDoctypeSystemKeyword(e);
              break;
            case y.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER:
              this._stateBeforeDoctypeSystemIdentifier(e);
              break;
            case y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED:
              this._stateDoctypeSystemIdentifierDoubleQuoted(e);
              break;
            case y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED:
              this._stateDoctypeSystemIdentifierSingleQuoted(e);
              break;
            case y.AFTER_DOCTYPE_SYSTEM_IDENTIFIER:
              this._stateAfterDoctypeSystemIdentifier(e);
              break;
            case y.BOGUS_DOCTYPE:
              this._stateBogusDoctype(e);
              break;
            case y.CDATA_SECTION:
              this._stateCdataSection(e);
              break;
            case y.CDATA_SECTION_BRACKET:
              this._stateCdataSectionBracket(e);
              break;
            case y.CDATA_SECTION_END:
              this._stateCdataSectionEnd(e);
              break;
            case y.CHARACTER_REFERENCE:
              this._stateCharacterReference(e);
              break;
            case y.NAMED_CHARACTER_REFERENCE:
              this._stateNamedCharacterReference(e);
              break;
            case y.AMBIGUOUS_AMPERSAND:
              this._stateAmbiguousAmpersand(e);
              break;
            case y.NUMERIC_CHARACTER_REFERENCE:
              this._stateNumericCharacterReference(e);
              break;
            case y.HEXADEMICAL_CHARACTER_REFERENCE_START:
              this._stateHexademicalCharacterReferenceStart(e);
              break;
            case y.HEXADEMICAL_CHARACTER_REFERENCE:
              this._stateHexademicalCharacterReference(e);
              break;
            case y.DECIMAL_CHARACTER_REFERENCE:
              this._stateDecimalCharacterReference(e);
              break;
            case y.NUMERIC_CHARACTER_REFERENCE_END:
              this._stateNumericCharacterReferenceEnd(e);
              break;
            default:
              throw Error("Unknown state");
          }
        }
        _stateData(e) {
          switch (e) {
            case O.LESS_THAN_SIGN:
              this.state = y.TAG_OPEN;
              break;
            case O.AMPERSAND:
              (this.returnState = y.DATA), (this.state = y.CHARACTER_REFERENCE);
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), this._emitCodePoint(e);
              break;
            case O.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateRcdata(e) {
          switch (e) {
            case O.AMPERSAND:
              (this.returnState = y.RCDATA),
                (this.state = y.CHARACTER_REFERENCE);
              break;
            case O.LESS_THAN_SIGN:
              this.state = y.RCDATA_LESS_THAN_SIGN;
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), this._emitChars("�");
              break;
            case O.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateRawtext(e) {
          switch (e) {
            case O.LESS_THAN_SIGN:
              this.state = y.RAWTEXT_LESS_THAN_SIGN;
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), this._emitChars("�");
              break;
            case O.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptData(e) {
          switch (e) {
            case O.LESS_THAN_SIGN:
              this.state = y.SCRIPT_DATA_LESS_THAN_SIGN;
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), this._emitChars("�");
              break;
            case O.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _statePlaintext(e) {
          switch (e) {
            case O.NULL:
              this._err(L.unexpectedNullCharacter), this._emitChars("�");
              break;
            case O.EOF:
              this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateTagOpen(e) {
          if (er(e))
            this._createStartTagToken(),
              (this.state = y.TAG_NAME),
              this._stateTagName(e);
          else
            switch (e) {
              case O.EXCLAMATION_MARK:
                this.state = y.MARKUP_DECLARATION_OPEN;
                break;
              case O.SOLIDUS:
                this.state = y.END_TAG_OPEN;
                break;
              case O.QUESTION_MARK:
                this._err(L.unexpectedQuestionMarkInsteadOfTagName),
                  this._createCommentToken(1),
                  (this.state = y.BOGUS_COMMENT),
                  this._stateBogusComment(e);
                break;
              case O.EOF:
                this._err(L.eofBeforeTagName),
                  this._emitChars("<"),
                  this._emitEOFToken();
                break;
              default:
                this._err(L.invalidFirstCharacterOfTagName),
                  this._emitChars("<"),
                  (this.state = y.DATA),
                  this._stateData(e);
            }
        }
        _stateEndTagOpen(e) {
          if (er(e))
            this._createEndTagToken(),
              (this.state = y.TAG_NAME),
              this._stateTagName(e);
          else
            switch (e) {
              case O.GREATER_THAN_SIGN:
                this._err(L.missingEndTagName), (this.state = y.DATA);
                break;
              case O.EOF:
                this._err(L.eofBeforeTagName),
                  this._emitChars("</"),
                  this._emitEOFToken();
                break;
              default:
                this._err(L.invalidFirstCharacterOfTagName),
                  this._createCommentToken(2),
                  (this.state = y.BOGUS_COMMENT),
                  this._stateBogusComment(e);
            }
        }
        _stateTagName(e) {
          let t = this.currentToken;
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              this.state = y.BEFORE_ATTRIBUTE_NAME;
              break;
            case O.SOLIDUS:
              this.state = y.SELF_CLOSING_START_TAG;
              break;
            case O.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentTagToken();
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), (t.tagName += "�");
              break;
            case O.EOF:
              this._err(L.eofInTag), this._emitEOFToken();
              break;
            default:
              t.tagName += String.fromCodePoint(ea(e) ? e + 32 : e);
          }
        }
        _stateRcdataLessThanSign(e) {
          e === O.SOLIDUS
            ? (this.state = y.RCDATA_END_TAG_OPEN)
            : (this._emitChars("<"),
              (this.state = y.RCDATA),
              this._stateRcdata(e));
        }
        _stateRcdataEndTagOpen(e) {
          er(e)
            ? ((this.state = y.RCDATA_END_TAG_NAME),
              this._stateRcdataEndTagName(e))
            : (this._emitChars("</"),
              (this.state = y.RCDATA),
              this._stateRcdata(e));
        }
        handleSpecialEndTag(e) {
          if (!this.preprocessor.startsWith(this.lastStartTagName, !1))
            return !this._ensureHibernation();
          switch (
            (this._createEndTagToken(),
            (this.currentToken.tagName = this.lastStartTagName),
            this.preprocessor.peek(this.lastStartTagName.length))
          ) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              return (
                this._advanceBy(this.lastStartTagName.length),
                (this.state = y.BEFORE_ATTRIBUTE_NAME),
                !1
              );
            case O.SOLIDUS:
              return (
                this._advanceBy(this.lastStartTagName.length),
                (this.state = y.SELF_CLOSING_START_TAG),
                !1
              );
            case O.GREATER_THAN_SIGN:
              return (
                this._advanceBy(this.lastStartTagName.length),
                this.emitCurrentTagToken(),
                (this.state = y.DATA),
                !1
              );
            default:
              return !this._ensureHibernation();
          }
        }
        _stateRcdataEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = y.RCDATA),
            this._stateRcdata(e));
        }
        _stateRawtextLessThanSign(e) {
          e === O.SOLIDUS
            ? (this.state = y.RAWTEXT_END_TAG_OPEN)
            : (this._emitChars("<"),
              (this.state = y.RAWTEXT),
              this._stateRawtext(e));
        }
        _stateRawtextEndTagOpen(e) {
          er(e)
            ? ((this.state = y.RAWTEXT_END_TAG_NAME),
              this._stateRawtextEndTagName(e))
            : (this._emitChars("</"),
              (this.state = y.RAWTEXT),
              this._stateRawtext(e));
        }
        _stateRawtextEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = y.RAWTEXT),
            this._stateRawtext(e));
        }
        _stateScriptDataLessThanSign(e) {
          switch (e) {
            case O.SOLIDUS:
              this.state = y.SCRIPT_DATA_END_TAG_OPEN;
              break;
            case O.EXCLAMATION_MARK:
              (this.state = y.SCRIPT_DATA_ESCAPE_START), this._emitChars("<!");
              break;
            default:
              this._emitChars("<"),
                (this.state = y.SCRIPT_DATA),
                this._stateScriptData(e);
          }
        }
        _stateScriptDataEndTagOpen(e) {
          er(e)
            ? ((this.state = y.SCRIPT_DATA_END_TAG_NAME),
              this._stateScriptDataEndTagName(e))
            : (this._emitChars("</"),
              (this.state = y.SCRIPT_DATA),
              this._stateScriptData(e));
        }
        _stateScriptDataEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = y.SCRIPT_DATA),
            this._stateScriptData(e));
        }
        _stateScriptDataEscapeStart(e) {
          e === O.HYPHEN_MINUS
            ? ((this.state = y.SCRIPT_DATA_ESCAPE_START_DASH),
              this._emitChars("-"))
            : ((this.state = y.SCRIPT_DATA), this._stateScriptData(e));
        }
        _stateScriptDataEscapeStartDash(e) {
          e === O.HYPHEN_MINUS
            ? ((this.state = y.SCRIPT_DATA_ESCAPED_DASH_DASH),
              this._emitChars("-"))
            : ((this.state = y.SCRIPT_DATA), this._stateScriptData(e));
        }
        _stateScriptDataEscaped(e) {
          switch (e) {
            case O.HYPHEN_MINUS:
              (this.state = y.SCRIPT_DATA_ESCAPED_DASH), this._emitChars("-");
              break;
            case O.LESS_THAN_SIGN:
              this.state = y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), this._emitChars("�");
              break;
            case O.EOF:
              this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedDash(e) {
          switch (e) {
            case O.HYPHEN_MINUS:
              (this.state = y.SCRIPT_DATA_ESCAPED_DASH_DASH),
                this._emitChars("-");
              break;
            case O.LESS_THAN_SIGN:
              this.state = y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter),
                (this.state = y.SCRIPT_DATA_ESCAPED),
                this._emitChars("�");
              break;
            case O.EOF:
              this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = y.SCRIPT_DATA_ESCAPED), this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedDashDash(e) {
          switch (e) {
            case O.HYPHEN_MINUS:
              this._emitChars("-");
              break;
            case O.LESS_THAN_SIGN:
              this.state = y.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
              break;
            case O.GREATER_THAN_SIGN:
              (this.state = y.SCRIPT_DATA), this._emitChars(">");
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter),
                (this.state = y.SCRIPT_DATA_ESCAPED),
                this._emitChars("�");
              break;
            case O.EOF:
              this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = y.SCRIPT_DATA_ESCAPED), this._emitCodePoint(e);
          }
        }
        _stateScriptDataEscapedLessThanSign(e) {
          e === O.SOLIDUS
            ? (this.state = y.SCRIPT_DATA_ESCAPED_END_TAG_OPEN)
            : er(e)
              ? (this._emitChars("<"),
                (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPE_START),
                this._stateScriptDataDoubleEscapeStart(e))
              : (this._emitChars("<"),
                (this.state = y.SCRIPT_DATA_ESCAPED),
                this._stateScriptDataEscaped(e));
        }
        _stateScriptDataEscapedEndTagOpen(e) {
          er(e)
            ? ((this.state = y.SCRIPT_DATA_ESCAPED_END_TAG_NAME),
              this._stateScriptDataEscapedEndTagName(e))
            : (this._emitChars("</"),
              (this.state = y.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataEscapedEndTagName(e) {
          this.handleSpecialEndTag(e) &&
            (this._emitChars("</"),
            (this.state = y.SCRIPT_DATA_ESCAPED),
            this._stateScriptDataEscaped(e));
        }
        _stateScriptDataDoubleEscapeStart(e) {
          if (
            this.preprocessor.startsWith(r.SCRIPT, !1) &&
            ec(this.preprocessor.peek(r.SCRIPT.length))
          ) {
            this._emitCodePoint(e);
            for (let e = 0; e < r.SCRIPT.length; e++)
              this._emitCodePoint(this._consume());
            this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED;
          } else
            this._ensureHibernation() ||
              ((this.state = y.SCRIPT_DATA_ESCAPED),
              this._stateScriptDataEscaped(e));
        }
        _stateScriptDataDoubleEscaped(e) {
          switch (e) {
            case O.HYPHEN_MINUS:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH),
                this._emitChars("-");
              break;
            case O.LESS_THAN_SIGN:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars("<");
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), this._emitChars("�");
              break;
            case O.EOF:
              this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedDash(e) {
          switch (e) {
            case O.HYPHEN_MINUS:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH),
                this._emitChars("-");
              break;
            case O.LESS_THAN_SIGN:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars("<");
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter),
                (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitChars("�");
              break;
            case O.EOF:
              this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedDashDash(e) {
          switch (e) {
            case O.HYPHEN_MINUS:
              this._emitChars("-");
              break;
            case O.LESS_THAN_SIGN:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN),
                this._emitChars("<");
              break;
            case O.GREATER_THAN_SIGN:
              (this.state = y.SCRIPT_DATA), this._emitChars(">");
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter),
                (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitChars("�");
              break;
            case O.EOF:
              this._err(L.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
              break;
            default:
              (this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED),
                this._emitCodePoint(e);
          }
        }
        _stateScriptDataDoubleEscapedLessThanSign(e) {
          e === O.SOLIDUS
            ? ((this.state = y.SCRIPT_DATA_DOUBLE_ESCAPE_END),
              this._emitChars("/"))
            : ((this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED),
              this._stateScriptDataDoubleEscaped(e));
        }
        _stateScriptDataDoubleEscapeEnd(e) {
          if (
            this.preprocessor.startsWith(r.SCRIPT, !1) &&
            ec(this.preprocessor.peek(r.SCRIPT.length))
          ) {
            this._emitCodePoint(e);
            for (let e = 0; e < r.SCRIPT.length; e++)
              this._emitCodePoint(this._consume());
            this.state = y.SCRIPT_DATA_ESCAPED;
          } else
            this._ensureHibernation() ||
              ((this.state = y.SCRIPT_DATA_DOUBLE_ESCAPED),
              this._stateScriptDataDoubleEscaped(e));
        }
        _stateBeforeAttributeName(e) {
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              break;
            case O.SOLIDUS:
            case O.GREATER_THAN_SIGN:
            case O.EOF:
              (this.state = y.AFTER_ATTRIBUTE_NAME),
                this._stateAfterAttributeName(e);
              break;
            case O.EQUALS_SIGN:
              this._err(L.unexpectedEqualsSignBeforeAttributeName),
                this._createAttr("="),
                (this.state = y.ATTRIBUTE_NAME);
              break;
            default:
              this._createAttr(""),
                (this.state = y.ATTRIBUTE_NAME),
                this._stateAttributeName(e);
          }
        }
        _stateAttributeName(e) {
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
            case O.SOLIDUS:
            case O.GREATER_THAN_SIGN:
            case O.EOF:
              this._leaveAttrName(),
                (this.state = y.AFTER_ATTRIBUTE_NAME),
                this._stateAfterAttributeName(e);
              break;
            case O.EQUALS_SIGN:
              this._leaveAttrName(), (this.state = y.BEFORE_ATTRIBUTE_VALUE);
              break;
            case O.QUOTATION_MARK:
            case O.APOSTROPHE:
            case O.LESS_THAN_SIGN:
              this._err(L.unexpectedCharacterInAttributeName),
                (this.currentAttr.name += String.fromCodePoint(e));
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter),
                (this.currentAttr.name += "�");
              break;
            default:
              this.currentAttr.name += String.fromCodePoint(ea(e) ? e + 32 : e);
          }
        }
        _stateAfterAttributeName(e) {
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              break;
            case O.SOLIDUS:
              this.state = y.SELF_CLOSING_START_TAG;
              break;
            case O.EQUALS_SIGN:
              this.state = y.BEFORE_ATTRIBUTE_VALUE;
              break;
            case O.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentTagToken();
              break;
            case O.EOF:
              this._err(L.eofInTag), this._emitEOFToken();
              break;
            default:
              this._createAttr(""),
                (this.state = y.ATTRIBUTE_NAME),
                this._stateAttributeName(e);
          }
        }
        _stateBeforeAttributeValue(e) {
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              break;
            case O.QUOTATION_MARK:
              this.state = y.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
              break;
            case O.APOSTROPHE:
              this.state = y.ATTRIBUTE_VALUE_SINGLE_QUOTED;
              break;
            case O.GREATER_THAN_SIGN:
              this._err(L.missingAttributeValue),
                (this.state = y.DATA),
                this.emitCurrentTagToken();
              break;
            default:
              (this.state = y.ATTRIBUTE_VALUE_UNQUOTED),
                this._stateAttributeValueUnquoted(e);
          }
        }
        _stateAttributeValueDoubleQuoted(e) {
          switch (e) {
            case O.QUOTATION_MARK:
              this.state = y.AFTER_ATTRIBUTE_VALUE_QUOTED;
              break;
            case O.AMPERSAND:
              (this.returnState = y.ATTRIBUTE_VALUE_DOUBLE_QUOTED),
                (this.state = y.CHARACTER_REFERENCE);
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter),
                (this.currentAttr.value += "�");
              break;
            case O.EOF:
              this._err(L.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAttributeValueSingleQuoted(e) {
          switch (e) {
            case O.APOSTROPHE:
              this.state = y.AFTER_ATTRIBUTE_VALUE_QUOTED;
              break;
            case O.AMPERSAND:
              (this.returnState = y.ATTRIBUTE_VALUE_SINGLE_QUOTED),
                (this.state = y.CHARACTER_REFERENCE);
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter),
                (this.currentAttr.value += "�");
              break;
            case O.EOF:
              this._err(L.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAttributeValueUnquoted(e) {
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              this._leaveAttrValue(), (this.state = y.BEFORE_ATTRIBUTE_NAME);
              break;
            case O.AMPERSAND:
              (this.returnState = y.ATTRIBUTE_VALUE_UNQUOTED),
                (this.state = y.CHARACTER_REFERENCE);
              break;
            case O.GREATER_THAN_SIGN:
              this._leaveAttrValue(),
                (this.state = y.DATA),
                this.emitCurrentTagToken();
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter),
                (this.currentAttr.value += "�");
              break;
            case O.QUOTATION_MARK:
            case O.APOSTROPHE:
            case O.LESS_THAN_SIGN:
            case O.EQUALS_SIGN:
            case O.GRAVE_ACCENT:
              this._err(L.unexpectedCharacterInUnquotedAttributeValue),
                (this.currentAttr.value += String.fromCodePoint(e));
              break;
            case O.EOF:
              this._err(L.eofInTag), this._emitEOFToken();
              break;
            default:
              this.currentAttr.value += String.fromCodePoint(e);
          }
        }
        _stateAfterAttributeValueQuoted(e) {
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              this._leaveAttrValue(), (this.state = y.BEFORE_ATTRIBUTE_NAME);
              break;
            case O.SOLIDUS:
              this._leaveAttrValue(), (this.state = y.SELF_CLOSING_START_TAG);
              break;
            case O.GREATER_THAN_SIGN:
              this._leaveAttrValue(),
                (this.state = y.DATA),
                this.emitCurrentTagToken();
              break;
            case O.EOF:
              this._err(L.eofInTag), this._emitEOFToken();
              break;
            default:
              this._err(L.missingWhitespaceBetweenAttributes),
                (this.state = y.BEFORE_ATTRIBUTE_NAME),
                this._stateBeforeAttributeName(e);
          }
        }
        _stateSelfClosingStartTag(e) {
          switch (e) {
            case O.GREATER_THAN_SIGN:
              (this.currentToken.selfClosing = !0),
                (this.state = y.DATA),
                this.emitCurrentTagToken();
              break;
            case O.EOF:
              this._err(L.eofInTag), this._emitEOFToken();
              break;
            default:
              this._err(L.unexpectedSolidusInTag),
                (this.state = y.BEFORE_ATTRIBUTE_NAME),
                this._stateBeforeAttributeName(e);
          }
        }
        _stateBogusComment(e) {
          let t = this.currentToken;
          switch (e) {
            case O.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentComment(t);
              break;
            case O.EOF:
              this.emitCurrentComment(t), this._emitEOFToken();
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), (t.data += "�");
              break;
            default:
              t.data += String.fromCodePoint(e);
          }
        }
        _stateMarkupDeclarationOpen(e) {
          this._consumeSequenceIfMatch(r.DASH_DASH, !0)
            ? (this._createCommentToken(r.DASH_DASH.length + 1),
              (this.state = y.COMMENT_START))
            : this._consumeSequenceIfMatch(r.DOCTYPE, !1)
              ? ((this.currentLocation = this.getCurrentLocation(
                  r.DOCTYPE.length + 1,
                )),
                (this.state = y.DOCTYPE))
              : this._consumeSequenceIfMatch(r.CDATA_START, !0)
                ? this.inForeignNode
                  ? (this.state = y.CDATA_SECTION)
                  : (this._err(L.cdataInHtmlContent),
                    this._createCommentToken(r.CDATA_START.length + 1),
                    (this.currentToken.data = "[CDATA["),
                    (this.state = y.BOGUS_COMMENT))
                : this._ensureHibernation() ||
                  (this._err(L.incorrectlyOpenedComment),
                  this._createCommentToken(2),
                  (this.state = y.BOGUS_COMMENT),
                  this._stateBogusComment(e));
        }
        _stateCommentStart(e) {
          switch (e) {
            case O.HYPHEN_MINUS:
              this.state = y.COMMENT_START_DASH;
              break;
            case O.GREATER_THAN_SIGN: {
              this._err(L.abruptClosingOfEmptyComment), (this.state = y.DATA);
              let e = this.currentToken;
              this.emitCurrentComment(e);
              break;
            }
            default:
              (this.state = y.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentStartDash(e) {
          let t = this.currentToken;
          switch (e) {
            case O.HYPHEN_MINUS:
              this.state = y.COMMENT_END;
              break;
            case O.GREATER_THAN_SIGN:
              this._err(L.abruptClosingOfEmptyComment),
                (this.state = y.DATA),
                this.emitCurrentComment(t);
              break;
            case O.EOF:
              this._err(L.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "-"), (this.state = y.COMMENT), this._stateComment(e);
          }
        }
        _stateComment(e) {
          let t = this.currentToken;
          switch (e) {
            case O.HYPHEN_MINUS:
              this.state = y.COMMENT_END_DASH;
              break;
            case O.LESS_THAN_SIGN:
              (t.data += "<"), (this.state = y.COMMENT_LESS_THAN_SIGN);
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), (t.data += "�");
              break;
            case O.EOF:
              this._err(L.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              t.data += String.fromCodePoint(e);
          }
        }
        _stateCommentLessThanSign(e) {
          let t = this.currentToken;
          switch (e) {
            case O.EXCLAMATION_MARK:
              (t.data += "!"), (this.state = y.COMMENT_LESS_THAN_SIGN_BANG);
              break;
            case O.LESS_THAN_SIGN:
              t.data += "<";
              break;
            default:
              (this.state = y.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentLessThanSignBang(e) {
          e === O.HYPHEN_MINUS
            ? (this.state = y.COMMENT_LESS_THAN_SIGN_BANG_DASH)
            : ((this.state = y.COMMENT), this._stateComment(e));
        }
        _stateCommentLessThanSignBangDash(e) {
          e === O.HYPHEN_MINUS
            ? (this.state = y.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH)
            : ((this.state = y.COMMENT_END_DASH), this._stateCommentEndDash(e));
        }
        _stateCommentLessThanSignBangDashDash(e) {
          e !== O.GREATER_THAN_SIGN &&
            e !== O.EOF &&
            this._err(L.nestedComment),
            (this.state = y.COMMENT_END),
            this._stateCommentEnd(e);
        }
        _stateCommentEndDash(e) {
          let t = this.currentToken;
          switch (e) {
            case O.HYPHEN_MINUS:
              this.state = y.COMMENT_END;
              break;
            case O.EOF:
              this._err(L.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "-"), (this.state = y.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentEnd(e) {
          let t = this.currentToken;
          switch (e) {
            case O.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentComment(t);
              break;
            case O.EXCLAMATION_MARK:
              this.state = y.COMMENT_END_BANG;
              break;
            case O.HYPHEN_MINUS:
              t.data += "-";
              break;
            case O.EOF:
              this._err(L.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "--"), (this.state = y.COMMENT), this._stateComment(e);
          }
        }
        _stateCommentEndBang(e) {
          let t = this.currentToken;
          switch (e) {
            case O.HYPHEN_MINUS:
              (t.data += "--!"), (this.state = y.COMMENT_END_DASH);
              break;
            case O.GREATER_THAN_SIGN:
              this._err(L.incorrectlyClosedComment),
                (this.state = y.DATA),
                this.emitCurrentComment(t);
              break;
            case O.EOF:
              this._err(L.eofInComment),
                this.emitCurrentComment(t),
                this._emitEOFToken();
              break;
            default:
              (t.data += "--!"),
                (this.state = y.COMMENT),
                this._stateComment(e);
          }
        }
        _stateDoctype(e) {
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              this.state = y.BEFORE_DOCTYPE_NAME;
              break;
            case O.GREATER_THAN_SIGN:
              (this.state = y.BEFORE_DOCTYPE_NAME),
                this._stateBeforeDoctypeName(e);
              break;
            case O.EOF: {
              this._err(L.eofInDoctype), this._createDoctypeToken(null);
              let e = this.currentToken;
              (e.forceQuirks = !0),
                this.emitCurrentDoctype(e),
                this._emitEOFToken();
              break;
            }
            default:
              this._err(L.missingWhitespaceBeforeDoctypeName),
                (this.state = y.BEFORE_DOCTYPE_NAME),
                this._stateBeforeDoctypeName(e);
          }
        }
        _stateBeforeDoctypeName(e) {
          if (ea(e))
            this._createDoctypeToken(String.fromCharCode(e + 32)),
              (this.state = y.DOCTYPE_NAME);
          else
            switch (e) {
              case O.SPACE:
              case O.LINE_FEED:
              case O.TABULATION:
              case O.FORM_FEED:
                break;
              case O.NULL:
                this._err(L.unexpectedNullCharacter),
                  this._createDoctypeToken("�"),
                  (this.state = y.DOCTYPE_NAME);
                break;
              case O.GREATER_THAN_SIGN: {
                this._err(L.missingDoctypeName), this._createDoctypeToken(null);
                let e = this.currentToken;
                (e.forceQuirks = !0),
                  this.emitCurrentDoctype(e),
                  (this.state = y.DATA);
                break;
              }
              case O.EOF: {
                this._err(L.eofInDoctype), this._createDoctypeToken(null);
                let e = this.currentToken;
                (e.forceQuirks = !0),
                  this.emitCurrentDoctype(e),
                  this._emitEOFToken();
                break;
              }
              default:
                this._createDoctypeToken(String.fromCodePoint(e)),
                  (this.state = y.DOCTYPE_NAME);
            }
        }
        _stateDoctypeName(e) {
          let t = this.currentToken;
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              this.state = y.AFTER_DOCTYPE_NAME;
              break;
            case O.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentDoctype(t);
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), (t.name += "�");
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.name += String.fromCodePoint(ea(e) ? e + 32 : e);
          }
        }
        _stateAfterDoctypeName(e) {
          let t = this.currentToken;
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              break;
            case O.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentDoctype(t);
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._consumeSequenceIfMatch(r.PUBLIC, !1)
                ? (this.state = y.AFTER_DOCTYPE_PUBLIC_KEYWORD)
                : this._consumeSequenceIfMatch(r.SYSTEM, !1)
                  ? (this.state = y.AFTER_DOCTYPE_SYSTEM_KEYWORD)
                  : this._ensureHibernation() ||
                    (this._err(L.invalidCharacterSequenceAfterDoctypeName),
                    (t.forceQuirks = !0),
                    (this.state = y.BOGUS_DOCTYPE),
                    this._stateBogusDoctype(e));
          }
        }
        _stateAfterDoctypePublicKeyword(e) {
          let t = this.currentToken;
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              this.state = y.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case O.QUOTATION_MARK:
              this._err(L.missingWhitespaceAfterDoctypePublicKeyword),
                (t.publicId = ""),
                (this.state = y.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case O.APOSTROPHE:
              this._err(L.missingWhitespaceAfterDoctypePublicKeyword),
                (t.publicId = ""),
                (this.state = y.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
              break;
            case O.GREATER_THAN_SIGN:
              this._err(L.missingDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.DATA),
                this.emitCurrentDoctype(t);
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(L.missingQuoteBeforeDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBeforeDoctypePublicIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              break;
            case O.QUOTATION_MARK:
              (t.publicId = ""),
                (this.state = y.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case O.APOSTROPHE:
              (t.publicId = ""),
                (this.state = y.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED);
              break;
            case O.GREATER_THAN_SIGN:
              this._err(L.missingDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.DATA),
                this.emitCurrentDoctype(t);
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(L.missingQuoteBeforeDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateDoctypePublicIdentifierDoubleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case O.QUOTATION_MARK:
              this.state = y.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), (t.publicId += "�");
              break;
            case O.GREATER_THAN_SIGN:
              this._err(L.abruptDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = y.DATA);
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.publicId += String.fromCodePoint(e);
          }
        }
        _stateDoctypePublicIdentifierSingleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case O.APOSTROPHE:
              this.state = y.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), (t.publicId += "�");
              break;
            case O.GREATER_THAN_SIGN:
              this._err(L.abruptDoctypePublicIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = y.DATA);
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.publicId += String.fromCodePoint(e);
          }
        }
        _stateAfterDoctypePublicIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              this.state = y.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
              break;
            case O.GREATER_THAN_SIGN:
              (this.state = y.DATA), this.emitCurrentDoctype(t);
              break;
            case O.QUOTATION_MARK:
              this._err(
                L.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers,
              ),
                (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case O.APOSTROPHE:
              this._err(
                L.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers,
              ),
                (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(L.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBetweenDoctypePublicAndSystemIdentifiers(e) {
          let t = this.currentToken;
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              break;
            case O.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = y.DATA);
              break;
            case O.QUOTATION_MARK:
              (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case O.APOSTROPHE:
              (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(L.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateAfterDoctypeSystemKeyword(e) {
          let t = this.currentToken;
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              this.state = y.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case O.QUOTATION_MARK:
              this._err(L.missingWhitespaceAfterDoctypeSystemKeyword),
                (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case O.APOSTROPHE:
              this._err(L.missingWhitespaceAfterDoctypeSystemKeyword),
                (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case O.GREATER_THAN_SIGN:
              this._err(L.missingDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.DATA),
                this.emitCurrentDoctype(t);
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(L.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBeforeDoctypeSystemIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              break;
            case O.QUOTATION_MARK:
              (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED);
              break;
            case O.APOSTROPHE:
              (t.systemId = ""),
                (this.state = y.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED);
              break;
            case O.GREATER_THAN_SIGN:
              this._err(L.missingDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.DATA),
                this.emitCurrentDoctype(t);
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(L.missingQuoteBeforeDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateDoctypeSystemIdentifierDoubleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case O.QUOTATION_MARK:
              this.state = y.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), (t.systemId += "�");
              break;
            case O.GREATER_THAN_SIGN:
              this._err(L.abruptDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = y.DATA);
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.systemId += String.fromCodePoint(e);
          }
        }
        _stateDoctypeSystemIdentifierSingleQuoted(e) {
          let t = this.currentToken;
          switch (e) {
            case O.APOSTROPHE:
              this.state = y.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter), (t.systemId += "�");
              break;
            case O.GREATER_THAN_SIGN:
              this._err(L.abruptDoctypeSystemIdentifier),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                (this.state = y.DATA);
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              t.systemId += String.fromCodePoint(e);
          }
        }
        _stateAfterDoctypeSystemIdentifier(e) {
          let t = this.currentToken;
          switch (e) {
            case O.SPACE:
            case O.LINE_FEED:
            case O.TABULATION:
            case O.FORM_FEED:
              break;
            case O.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = y.DATA);
              break;
            case O.EOF:
              this._err(L.eofInDoctype),
                (t.forceQuirks = !0),
                this.emitCurrentDoctype(t),
                this._emitEOFToken();
              break;
            default:
              this._err(L.unexpectedCharacterAfterDoctypeSystemIdentifier),
                (this.state = y.BOGUS_DOCTYPE),
                this._stateBogusDoctype(e);
          }
        }
        _stateBogusDoctype(e) {
          let t = this.currentToken;
          switch (e) {
            case O.GREATER_THAN_SIGN:
              this.emitCurrentDoctype(t), (this.state = y.DATA);
              break;
            case O.NULL:
              this._err(L.unexpectedNullCharacter);
              break;
            case O.EOF:
              this.emitCurrentDoctype(t), this._emitEOFToken();
          }
        }
        _stateCdataSection(e) {
          switch (e) {
            case O.RIGHT_SQUARE_BRACKET:
              this.state = y.CDATA_SECTION_BRACKET;
              break;
            case O.EOF:
              this._err(L.eofInCdata), this._emitEOFToken();
              break;
            default:
              this._emitCodePoint(e);
          }
        }
        _stateCdataSectionBracket(e) {
          e === O.RIGHT_SQUARE_BRACKET
            ? (this.state = y.CDATA_SECTION_END)
            : (this._emitChars("]"),
              (this.state = y.CDATA_SECTION),
              this._stateCdataSection(e));
        }
        _stateCdataSectionEnd(e) {
          switch (e) {
            case O.GREATER_THAN_SIGN:
              this.state = y.DATA;
              break;
            case O.RIGHT_SQUARE_BRACKET:
              this._emitChars("]");
              break;
            default:
              this._emitChars("]]"),
                (this.state = y.CDATA_SECTION),
                this._stateCdataSection(e);
          }
        }
        _stateCharacterReference(e) {
          e === O.NUMBER_SIGN
            ? (this.state = y.NUMERIC_CHARACTER_REFERENCE)
            : ei(e)
              ? ((this.state = y.NAMED_CHARACTER_REFERENCE),
                this._stateNamedCharacterReference(e))
              : (this._flushCodePointConsumedAsCharacterReference(O.AMPERSAND),
                this._reconsumeInState(this.returnState, e));
        }
        _stateNamedCharacterReference(e) {
          let t = this._matchNamedCharacterReference(e);
          if (this._ensureHibernation());
          else if (t) {
            for (let e = 0; e < t.length; e++)
              this._flushCodePointConsumedAsCharacterReference(t[e]);
            this.state = this.returnState;
          } else
            this._flushCodePointConsumedAsCharacterReference(O.AMPERSAND),
              (this.state = y.AMBIGUOUS_AMPERSAND);
        }
        _stateAmbiguousAmpersand(e) {
          ei(e)
            ? this._flushCodePointConsumedAsCharacterReference(e)
            : (e === O.SEMICOLON && this._err(L.unknownNamedCharacterReference),
              this._reconsumeInState(this.returnState, e));
        }
        _stateNumericCharacterReference(e) {
          (this.charRefCode = 0),
            e === O.LATIN_SMALL_X || e === O.LATIN_CAPITAL_X
              ? (this.state = y.HEXADEMICAL_CHARACTER_REFERENCE_START)
              : es(e)
                ? ((this.state = y.DECIMAL_CHARACTER_REFERENCE),
                  this._stateDecimalCharacterReference(e))
                : (this._err(L.absenceOfDigitsInNumericCharacterReference),
                  this._flushCodePointConsumedAsCharacterReference(O.AMPERSAND),
                  this._flushCodePointConsumedAsCharacterReference(
                    O.NUMBER_SIGN,
                  ),
                  this._reconsumeInState(this.returnState, e));
        }
        _stateHexademicalCharacterReferenceStart(e) {
          es(e) || en(e) || eo(e)
            ? ((this.state = y.HEXADEMICAL_CHARACTER_REFERENCE),
              this._stateHexademicalCharacterReference(e))
            : (this._err(L.absenceOfDigitsInNumericCharacterReference),
              this._flushCodePointConsumedAsCharacterReference(O.AMPERSAND),
              this._flushCodePointConsumedAsCharacterReference(O.NUMBER_SIGN),
              this._unconsume(2),
              (this.state = this.returnState));
        }
        _stateHexademicalCharacterReference(e) {
          en(e)
            ? (this.charRefCode = 16 * this.charRefCode + e - 55)
            : eo(e)
              ? (this.charRefCode = 16 * this.charRefCode + e - 87)
              : es(e)
                ? (this.charRefCode = 16 * this.charRefCode + e - 48)
                : e === O.SEMICOLON
                  ? (this.state = y.NUMERIC_CHARACTER_REFERENCE_END)
                  : (this._err(L.missingSemicolonAfterCharacterReference),
                    (this.state = y.NUMERIC_CHARACTER_REFERENCE_END),
                    this._stateNumericCharacterReferenceEnd(e));
        }
        _stateDecimalCharacterReference(e) {
          es(e)
            ? (this.charRefCode = 10 * this.charRefCode + e - 48)
            : e === O.SEMICOLON
              ? (this.state = y.NUMERIC_CHARACTER_REFERENCE_END)
              : (this._err(L.missingSemicolonAfterCharacterReference),
                (this.state = y.NUMERIC_CHARACTER_REFERENCE_END),
                this._stateNumericCharacterReferenceEnd(e));
        }
        _stateNumericCharacterReferenceEnd(e) {
          if (this.charRefCode === O.NULL)
            this._err(L.nullCharacterReference),
              (this.charRefCode = O.REPLACEMENT_CHARACTER);
          else if (this.charRefCode > 1114111)
            this._err(L.characterReferenceOutsideUnicodeRange),
              (this.charRefCode = O.REPLACEMENT_CHARACTER);
          else if (i(this.charRefCode))
            this._err(L.surrogateCharacterReference),
              (this.charRefCode = O.REPLACEMENT_CHARACTER);
          else if (o(this.charRefCode))
            this._err(L.noncharacterCharacterReference);
          else if (
            n(this.charRefCode) ||
            this.charRefCode === O.CARRIAGE_RETURN
          ) {
            this._err(L.controlCharacterReference);
            let e = ee.get(this.charRefCode);
            void 0 !== e && (this.charRefCode = e);
          }
          this._flushCodePointConsumedAsCharacterReference(this.charRefCode),
            this._reconsumeInState(this.returnState, e);
        }
      }
      let eh = new Set([
          G.DD,
          G.DT,
          G.LI,
          G.OPTGROUP,
          G.OPTION,
          G.P,
          G.RB,
          G.RP,
          G.RT,
          G.RTC,
        ]),
        e_ = new Set([
          ...eh,
          G.CAPTION,
          G.COLGROUP,
          G.TBODY,
          G.TD,
          G.TFOOT,
          G.TH,
          G.THEAD,
          G.TR,
        ]),
        eA = new Map([
          [G.APPLET, B.HTML],
          [G.CAPTION, B.HTML],
          [G.HTML, B.HTML],
          [G.MARQUEE, B.HTML],
          [G.OBJECT, B.HTML],
          [G.TABLE, B.HTML],
          [G.TD, B.HTML],
          [G.TEMPLATE, B.HTML],
          [G.TH, B.HTML],
          [G.ANNOTATION_XML, B.MATHML],
          [G.MI, B.MATHML],
          [G.MN, B.MATHML],
          [G.MO, B.MATHML],
          [G.MS, B.MATHML],
          [G.MTEXT, B.MATHML],
          [G.DESC, B.SVG],
          [G.FOREIGN_OBJECT, B.SVG],
          [G.TITLE, B.SVG],
        ]),
        el = [G.H1, G.H2, G.H3, G.H4, G.H5, G.H6],
        ed = [G.TR, G.TEMPLATE, G.HTML],
        em = [G.TBODY, G.TFOOT, G.THEAD, G.TEMPLATE, G.HTML],
        eu = [G.TABLE, G.TEMPLATE, G.HTML],
        ep = [G.TD, G.TH];
      class eN {
        get currentTmplContentOrNode() {
          return this._isInTemplate()
            ? this.treeAdapter.getTemplateContent(this.current)
            : this.current;
        }
        constructor(e, t, s) {
          (this.treeAdapter = t),
            (this.handler = s),
            (this.items = []),
            (this.tagIDs = []),
            (this.stackTop = -1),
            (this.tmplCount = 0),
            (this.currentTagId = G.UNKNOWN),
            (this.current = e);
        }
        _indexOf(e) {
          return this.items.lastIndexOf(e, this.stackTop);
        }
        _isInTemplate() {
          return (
            this.currentTagId === G.TEMPLATE &&
            this.treeAdapter.getNamespaceURI(this.current) === B.HTML
          );
        }
        _updateCurrentElement() {
          (this.current = this.items[this.stackTop]),
            (this.currentTagId = this.tagIDs[this.stackTop]);
        }
        push(e, t) {
          this.stackTop++,
            (this.items[this.stackTop] = e),
            (this.current = e),
            (this.tagIDs[this.stackTop] = t),
            (this.currentTagId = t),
            this._isInTemplate() && this.tmplCount++,
            this.handler.onItemPush(e, t, !0);
        }
        pop() {
          let e = this.current;
          this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--,
            this.stackTop--,
            this._updateCurrentElement(),
            this.handler.onItemPop(e, !0);
        }
        replace(e, t) {
          let s = this._indexOf(e);
          (this.items[s] = t), s === this.stackTop && (this.current = t);
        }
        insertAfter(e, t, s) {
          let a = this._indexOf(e) + 1;
          this.items.splice(a, 0, t),
            this.tagIDs.splice(a, 0, s),
            this.stackTop++,
            a === this.stackTop && this._updateCurrentElement(),
            this.handler.onItemPush(
              this.current,
              this.currentTagId,
              a === this.stackTop,
            );
        }
        popUntilTagNamePopped(e) {
          let t = this.stackTop + 1;
          do t = this.tagIDs.lastIndexOf(e, t - 1);
          while (
            t > 0 &&
            this.treeAdapter.getNamespaceURI(this.items[t]) !== B.HTML
          );
          this.shortenToLength(t < 0 ? 0 : t);
        }
        shortenToLength(e) {
          for (; this.stackTop >= e; ) {
            let t = this.current;
            this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1),
              this.stackTop--,
              this._updateCurrentElement(),
              this.handler.onItemPop(t, this.stackTop < e);
          }
        }
        popUntilElementPopped(e) {
          let t = this._indexOf(e);
          this.shortenToLength(t < 0 ? 0 : t);
        }
        popUntilPopped(e, t) {
          let s = this._indexOfTagNames(e, t);
          this.shortenToLength(s < 0 ? 0 : s);
        }
        popUntilNumberedHeaderPopped() {
          this.popUntilPopped(el, B.HTML);
        }
        popUntilTableCellPopped() {
          this.popUntilPopped(ep, B.HTML);
        }
        popAllUpToHtmlElement() {
          (this.tmplCount = 0), this.shortenToLength(1);
        }
        _indexOfTagNames(e, t) {
          for (let s = this.stackTop; s >= 0; s--)
            if (
              e.includes(this.tagIDs[s]) &&
              this.treeAdapter.getNamespaceURI(this.items[s]) === t
            )
              return s;
          return -1;
        }
        clearBackTo(e, t) {
          let s = this._indexOfTagNames(e, t);
          this.shortenToLength(s + 1);
        }
        clearBackToTableContext() {
          this.clearBackTo(eu, B.HTML);
        }
        clearBackToTableBodyContext() {
          this.clearBackTo(em, B.HTML);
        }
        clearBackToTableRowContext() {
          this.clearBackTo(ed, B.HTML);
        }
        remove(e) {
          let t = this._indexOf(e);
          t >= 0 &&
            (t === this.stackTop
              ? this.pop()
              : (this.items.splice(t, 1),
                this.tagIDs.splice(t, 1),
                this.stackTop--,
                this._updateCurrentElement(),
                this.handler.onItemPop(e, !1)));
        }
        tryPeekProperlyNestedBodyElement() {
          return this.stackTop >= 1 && this.tagIDs[1] === G.BODY
            ? this.items[1]
            : null;
        }
        contains(e) {
          return this._indexOf(e) > -1;
        }
        getCommonAncestor(e) {
          let t = this._indexOf(e) - 1;
          return t >= 0 ? this.items[t] : null;
        }
        isRootHtmlElementCurrent() {
          return 0 === this.stackTop && this.tagIDs[0] === G.HTML;
        }
        hasInScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let s = this.tagIDs[t],
              a = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (s === e && a === B.HTML) break;
            if (eA.get(s) === a) return !1;
          }
          return !0;
        }
        hasNumberedHeaderInScope() {
          for (let e = this.stackTop; e >= 0; e--) {
            let t = this.tagIDs[e],
              s = this.treeAdapter.getNamespaceURI(this.items[e]);
            if ($(t) && s === B.HTML) break;
            if (eA.get(t) === s) return !1;
          }
          return !0;
        }
        hasInListItemScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let s = this.tagIDs[t],
              a = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (s === e && a === B.HTML) break;
            if (((s === G.UL || s === G.OL) && a === B.HTML) || eA.get(s) === a)
              return !1;
          }
          return !0;
        }
        hasInButtonScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let s = this.tagIDs[t],
              a = this.treeAdapter.getNamespaceURI(this.items[t]);
            if (s === e && a === B.HTML) break;
            if ((s === G.BUTTON && a === B.HTML) || eA.get(s) === a) return !1;
          }
          return !0;
        }
        hasInTableScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let s = this.tagIDs[t];
            if (this.treeAdapter.getNamespaceURI(this.items[t]) === B.HTML) {
              if (s === e) break;
              if (s === G.TABLE || s === G.TEMPLATE || s === G.HTML) return !1;
            }
          }
          return !0;
        }
        hasTableBodyContextInTableScope() {
          for (let e = this.stackTop; e >= 0; e--) {
            let t = this.tagIDs[e];
            if (this.treeAdapter.getNamespaceURI(this.items[e]) === B.HTML) {
              if (t === G.TBODY || t === G.THEAD || t === G.TFOOT) break;
              if (t === G.TABLE || t === G.HTML) return !1;
            }
          }
          return !0;
        }
        hasInSelectScope(e) {
          for (let t = this.stackTop; t >= 0; t--) {
            let s = this.tagIDs[t];
            if (this.treeAdapter.getNamespaceURI(this.items[t]) === B.HTML) {
              if (s === e) break;
              if (s !== G.OPTION && s !== G.OPTGROUP) return !1;
            }
          }
          return !0;
        }
        generateImpliedEndTags() {
          for (; eh.has(this.currentTagId); ) this.pop();
        }
        generateImpliedEndTagsThoroughly() {
          for (; e_.has(this.currentTagId); ) this.pop();
        }
        generateImpliedEndTagsWithExclusion(e) {
          for (; this.currentTagId !== e && e_.has(this.currentTagId); )
            this.pop();
        }
      }
      ((I = w = w || (w = {}))[(I.Marker = 0)] = "Marker"),
        (I[(I.Element = 1)] = "Element");
      let eI = { type: w.Marker };
      class eC {
        constructor(e) {
          (this.treeAdapter = e), (this.entries = []), (this.bookmark = null);
        }
        _getNoahArkConditionCandidates(e, t) {
          let s = [],
            a = t.length,
            r = this.treeAdapter.getTagName(e),
            i = this.treeAdapter.getNamespaceURI(e);
          for (let e = 0; e < this.entries.length; e++) {
            let t = this.entries[e];
            if (t.type === w.Marker) break;
            let { element: n } = t;
            if (
              this.treeAdapter.getTagName(n) === r &&
              this.treeAdapter.getNamespaceURI(n) === i
            ) {
              let t = this.treeAdapter.getAttrList(n);
              t.length === a && s.push({ idx: e, attrs: t });
            }
          }
          return s;
        }
        _ensureNoahArkCondition(e) {
          if (this.entries.length < 3) return;
          let t = this.treeAdapter.getAttrList(e),
            s = this._getNoahArkConditionCandidates(e, t);
          if (s.length < 3) return;
          let a = new Map(t.map((e) => [e.name, e.value])),
            r = 0;
          for (let e = 0; e < s.length; e++) {
            let t = s[e];
            t.attrs.every((e) => a.get(e.name) === e.value) &&
              (r += 1) >= 3 &&
              this.entries.splice(t.idx, 1);
          }
        }
        insertMarker() {
          this.entries.unshift(eI);
        }
        pushElement(e, t) {
          this._ensureNoahArkCondition(e),
            this.entries.unshift({ type: w.Element, element: e, token: t });
        }
        insertElementAfterBookmark(e, t) {
          let s = this.entries.indexOf(this.bookmark);
          this.entries.splice(s, 0, { type: w.Element, element: e, token: t });
        }
        removeEntry(e) {
          let t = this.entries.indexOf(e);
          t >= 0 && this.entries.splice(t, 1);
        }
        clearToLastMarker() {
          let e = this.entries.indexOf(eI);
          e >= 0 ? this.entries.splice(0, e + 1) : (this.entries.length = 0);
        }
        getElementEntryInScopeWithTagName(e) {
          let t = this.entries.find(
            (t) =>
              t.type === w.Marker ||
              this.treeAdapter.getTagName(t.element) === e,
          );
          return t && t.type === w.Element ? t : null;
        }
        getElementEntry(e) {
          return this.entries.find(
            (t) => t.type === w.Element && t.element === e,
          );
        }
      }
      function eS(e) {
        return { nodeName: "#text", value: e, parentNode: null };
      }
      let eR = {
          createDocument: () => ({
            nodeName: "#document",
            mode: F.NO_QUIRKS,
            childNodes: [],
          }),
          createDocumentFragment: () => ({
            nodeName: "#document-fragment",
            childNodes: [],
          }),
          createElement: (e, t, s) => ({
            nodeName: e,
            tagName: e,
            attrs: s,
            namespaceURI: t,
            childNodes: [],
            parentNode: null,
          }),
          createCommentNode: (e) => ({
            nodeName: "#comment",
            data: e,
            parentNode: null,
          }),
          appendChild(e, t) {
            e.childNodes.push(t), (t.parentNode = e);
          },
          insertBefore(e, t, s) {
            let a = e.childNodes.indexOf(s);
            e.childNodes.splice(a, 0, t), (t.parentNode = e);
          },
          setTemplateContent(e, t) {
            e.content = t;
          },
          getTemplateContent: (e) => e.content,
          setDocumentType(e, t, s, a) {
            let r = e.childNodes.find((e) => "#documentType" === e.nodeName);
            r
              ? ((r.name = t), (r.publicId = s), (r.systemId = a))
              : eR.appendChild(e, {
                  nodeName: "#documentType",
                  name: t,
                  publicId: s,
                  systemId: a,
                  parentNode: null,
                });
          },
          setDocumentMode(e, t) {
            e.mode = t;
          },
          getDocumentMode: (e) => e.mode,
          detachNode(e) {
            if (e.parentNode) {
              let t = e.parentNode.childNodes.indexOf(e);
              e.parentNode.childNodes.splice(t, 1), (e.parentNode = null);
            }
          },
          insertText(e, t) {
            if (e.childNodes.length > 0) {
              let s = e.childNodes[e.childNodes.length - 1];
              if (eR.isTextNode(s)) {
                s.value += t;
                return;
              }
            }
            eR.appendChild(e, eS(t));
          },
          insertTextBefore(e, t, s) {
            let a = e.childNodes[e.childNodes.indexOf(s) - 1];
            a && eR.isTextNode(a)
              ? (a.value += t)
              : eR.insertBefore(e, eS(t), s);
          },
          adoptAttributes(e, t) {
            let s = new Set(e.attrs.map((e) => e.name));
            for (let a = 0; a < t.length; a++)
              s.has(t[a].name) || e.attrs.push(t[a]);
          },
          getFirstChild: (e) => e.childNodes[0],
          getChildNodes: (e) => e.childNodes,
          getParentNode: (e) => e.parentNode,
          getAttrList: (e) => e.attrs,
          getTagName: (e) => e.tagName,
          getNamespaceURI: (e) => e.namespaceURI,
          getTextNodeContent: (e) => e.value,
          getCommentNodeContent: (e) => e.data,
          getDocumentTypeNodeName: (e) => e.name,
          getDocumentTypeNodePublicId: (e) => e.publicId,
          getDocumentTypeNodeSystemId: (e) => e.systemId,
          isTextNode: (e) => "#text" === e.nodeName,
          isCommentNode: (e) => "#comment" === e.nodeName,
          isDocumentTypeNode: (e) => "#documentType" === e.nodeName,
          isElementNode: (e) =>
            Object.prototype.hasOwnProperty.call(e, "tagName"),
          setNodeSourceCodeLocation(e, t) {
            e.sourceCodeLocation = t;
          },
          getNodeSourceCodeLocation: (e) => e.sourceCodeLocation,
          updateNodeSourceCodeLocation(e, t) {
            e.sourceCodeLocation = { ...e.sourceCodeLocation, ...t };
          },
        },
        eD = "html",
        eO = [
          "+//silmaril//dtd html pro v0r11 19970101//",
          "-//as//dtd html 3.0 aswedit + extensions//",
          "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
          "-//ietf//dtd html 2.0 level 1//",
          "-//ietf//dtd html 2.0 level 2//",
          "-//ietf//dtd html 2.0 strict level 1//",
          "-//ietf//dtd html 2.0 strict level 2//",
          "-//ietf//dtd html 2.0 strict//",
          "-//ietf//dtd html 2.0//",
          "-//ietf//dtd html 2.1e//",
          "-//ietf//dtd html 3.0//",
          "-//ietf//dtd html 3.2 final//",
          "-//ietf//dtd html 3.2//",
          "-//ietf//dtd html 3//",
          "-//ietf//dtd html level 0//",
          "-//ietf//dtd html level 1//",
          "-//ietf//dtd html level 2//",
          "-//ietf//dtd html level 3//",
          "-//ietf//dtd html strict level 0//",
          "-//ietf//dtd html strict level 1//",
          "-//ietf//dtd html strict level 2//",
          "-//ietf//dtd html strict level 3//",
          "-//ietf//dtd html strict//",
          "-//ietf//dtd html//",
          "-//metrius//dtd metrius presentational//",
          "-//microsoft//dtd internet explorer 2.0 html strict//",
          "-//microsoft//dtd internet explorer 2.0 html//",
          "-//microsoft//dtd internet explorer 2.0 tables//",
          "-//microsoft//dtd internet explorer 3.0 html strict//",
          "-//microsoft//dtd internet explorer 3.0 html//",
          "-//microsoft//dtd internet explorer 3.0 tables//",
          "-//netscape comm. corp.//dtd html//",
          "-//netscape comm. corp.//dtd strict html//",
          "-//o'reilly and associates//dtd html 2.0//",
          "-//o'reilly and associates//dtd html extended 1.0//",
          "-//o'reilly and associates//dtd html extended relaxed 1.0//",
          "-//sq//dtd html 2.0 hotmetal + extensions//",
          "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
          "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
          "-//spyglass//dtd html 2.0 extended//",
          "-//sun microsystems corp.//dtd hotjava html//",
          "-//sun microsystems corp.//dtd hotjava strict html//",
          "-//w3c//dtd html 3 1995-03-24//",
          "-//w3c//dtd html 3.2 draft//",
          "-//w3c//dtd html 3.2 final//",
          "-//w3c//dtd html 3.2//",
          "-//w3c//dtd html 3.2s draft//",
          "-//w3c//dtd html 4.0 frameset//",
          "-//w3c//dtd html 4.0 transitional//",
          "-//w3c//dtd html experimental 19960712//",
          "-//w3c//dtd html experimental 970421//",
          "-//w3c//dtd w3 html//",
          "-//w3o//dtd w3 html 3.0//",
          "-//webtechs//dtd mozilla html 2.0//",
          "-//webtechs//dtd mozilla html//",
        ],
        eL = [
          ...eO,
          "-//w3c//dtd html 4.01 frameset//",
          "-//w3c//dtd html 4.01 transitional//",
        ],
        ef = new Set([
          "-//w3o//dtd w3 html strict 3.0//en//",
          "-/w3c/dtd html 4.0 transitional/en",
          "html",
        ]),
        eM = [
          "-//w3c//dtd xhtml 1.0 frameset//",
          "-//w3c//dtd xhtml 1.0 transitional//",
        ],
        eg = [
          ...eM,
          "-//w3c//dtd html 4.01 frameset//",
          "-//w3c//dtd html 4.01 transitional//",
        ];
      function ek(e, t) {
        return t.some((t) => e.startsWith(t));
      }
      let eP = {
          TEXT_HTML: "text/html",
          APPLICATION_XML: "application/xhtml+xml",
        },
        eb = new Map(
          [
            "attributeName",
            "attributeType",
            "baseFrequency",
            "baseProfile",
            "calcMode",
            "clipPathUnits",
            "diffuseConstant",
            "edgeMode",
            "filterUnits",
            "glyphRef",
            "gradientTransform",
            "gradientUnits",
            "kernelMatrix",
            "kernelUnitLength",
            "keyPoints",
            "keySplines",
            "keyTimes",
            "lengthAdjust",
            "limitingConeAngle",
            "markerHeight",
            "markerUnits",
            "markerWidth",
            "maskContentUnits",
            "maskUnits",
            "numOctaves",
            "pathLength",
            "patternContentUnits",
            "patternTransform",
            "patternUnits",
            "pointsAtX",
            "pointsAtY",
            "pointsAtZ",
            "preserveAlpha",
            "preserveAspectRatio",
            "primitiveUnits",
            "refX",
            "refY",
            "repeatCount",
            "repeatDur",
            "requiredExtensions",
            "requiredFeatures",
            "specularConstant",
            "specularExponent",
            "spreadMethod",
            "startOffset",
            "stdDeviation",
            "stitchTiles",
            "surfaceScale",
            "systemLanguage",
            "tableValues",
            "targetX",
            "targetY",
            "textLength",
            "viewBox",
            "viewTarget",
            "xChannelSelector",
            "yChannelSelector",
            "zoomAndPan",
          ].map((e) => [e.toLowerCase(), e]),
        ),
        eB = new Map([
          [
            "xlink:actuate",
            { prefix: "xlink", name: "actuate", namespace: B.XLINK },
          ],
          [
            "xlink:arcrole",
            { prefix: "xlink", name: "arcrole", namespace: B.XLINK },
          ],
          ["xlink:href", { prefix: "xlink", name: "href", namespace: B.XLINK }],
          ["xlink:role", { prefix: "xlink", name: "role", namespace: B.XLINK }],
          ["xlink:show", { prefix: "xlink", name: "show", namespace: B.XLINK }],
          [
            "xlink:title",
            { prefix: "xlink", name: "title", namespace: B.XLINK },
          ],
          ["xlink:type", { prefix: "xlink", name: "type", namespace: B.XLINK }],
          ["xml:base", { prefix: "xml", name: "base", namespace: B.XML }],
          ["xml:lang", { prefix: "xml", name: "lang", namespace: B.XML }],
          ["xml:space", { prefix: "xml", name: "space", namespace: B.XML }],
          ["xmlns", { prefix: "", name: "xmlns", namespace: B.XMLNS }],
          [
            "xmlns:xlink",
            { prefix: "xmlns", name: "xlink", namespace: B.XMLNS },
          ],
        ]),
        eH = new Map(
          [
            "altGlyph",
            "altGlyphDef",
            "altGlyphItem",
            "animateColor",
            "animateMotion",
            "animateTransform",
            "clipPath",
            "feBlend",
            "feColorMatrix",
            "feComponentTransfer",
            "feComposite",
            "feConvolveMatrix",
            "feDiffuseLighting",
            "feDisplacementMap",
            "feDistantLight",
            "feFlood",
            "feFuncA",
            "feFuncB",
            "feFuncG",
            "feFuncR",
            "feGaussianBlur",
            "feImage",
            "feMerge",
            "feMergeNode",
            "feMorphology",
            "feOffset",
            "fePointLight",
            "feSpecularLighting",
            "feSpotLight",
            "feTile",
            "feTurbulence",
            "foreignObject",
            "glyphRef",
            "linearGradient",
            "radialGradient",
            "textPath",
          ].map((e) => [e.toLowerCase(), e]),
        ),
        eF = new Set([
          G.B,
          G.BIG,
          G.BLOCKQUOTE,
          G.BODY,
          G.BR,
          G.CENTER,
          G.CODE,
          G.DD,
          G.DIV,
          G.DL,
          G.DT,
          G.EM,
          G.EMBED,
          G.H1,
          G.H2,
          G.H3,
          G.H4,
          G.H5,
          G.H6,
          G.HEAD,
          G.HR,
          G.I,
          G.IMG,
          G.LI,
          G.LISTING,
          G.MENU,
          G.META,
          G.NOBR,
          G.OL,
          G.P,
          G.PRE,
          G.RUBY,
          G.S,
          G.SMALL,
          G.SPAN,
          G.STRONG,
          G.STRIKE,
          G.SUB,
          G.SUP,
          G.TABLE,
          G.TT,
          G.U,
          G.UL,
          G.VAR,
        ]);
      function eU(e) {
        for (let t = 0; t < e.attrs.length; t++)
          if ("definitionurl" === e.attrs[t].name) {
            e.attrs[t].name = "definitionURL";
            break;
          }
      }
      function eG(e) {
        for (let t = 0; t < e.attrs.length; t++) {
          let s = eb.get(e.attrs[t].name);
          null != s && (e.attrs[t].name = s);
        }
      }
      function ey(e) {
        for (let t = 0; t < e.attrs.length; t++) {
          let s = eB.get(e.attrs[t].name);
          s &&
            ((e.attrs[t].prefix = s.prefix),
            (e.attrs[t].name = s.name),
            (e.attrs[t].namespace = s.namespace));
        }
      }
      ((C = x || (x = {}))[(C.INITIAL = 0)] = "INITIAL"),
        (C[(C.BEFORE_HTML = 1)] = "BEFORE_HTML"),
        (C[(C.BEFORE_HEAD = 2)] = "BEFORE_HEAD"),
        (C[(C.IN_HEAD = 3)] = "IN_HEAD"),
        (C[(C.IN_HEAD_NO_SCRIPT = 4)] = "IN_HEAD_NO_SCRIPT"),
        (C[(C.AFTER_HEAD = 5)] = "AFTER_HEAD"),
        (C[(C.IN_BODY = 6)] = "IN_BODY"),
        (C[(C.TEXT = 7)] = "TEXT"),
        (C[(C.IN_TABLE = 8)] = "IN_TABLE"),
        (C[(C.IN_TABLE_TEXT = 9)] = "IN_TABLE_TEXT"),
        (C[(C.IN_CAPTION = 10)] = "IN_CAPTION"),
        (C[(C.IN_COLUMN_GROUP = 11)] = "IN_COLUMN_GROUP"),
        (C[(C.IN_TABLE_BODY = 12)] = "IN_TABLE_BODY"),
        (C[(C.IN_ROW = 13)] = "IN_ROW"),
        (C[(C.IN_CELL = 14)] = "IN_CELL"),
        (C[(C.IN_SELECT = 15)] = "IN_SELECT"),
        (C[(C.IN_SELECT_IN_TABLE = 16)] = "IN_SELECT_IN_TABLE"),
        (C[(C.IN_TEMPLATE = 17)] = "IN_TEMPLATE"),
        (C[(C.AFTER_BODY = 18)] = "AFTER_BODY"),
        (C[(C.IN_FRAMESET = 19)] = "IN_FRAMESET"),
        (C[(C.AFTER_FRAMESET = 20)] = "AFTER_FRAMESET"),
        (C[(C.AFTER_AFTER_BODY = 21)] = "AFTER_AFTER_BODY"),
        (C[(C.AFTER_AFTER_FRAMESET = 22)] = "AFTER_AFTER_FRAMESET");
      let ew = {
          startLine: -1,
          startCol: -1,
          startOffset: -1,
          endLine: -1,
          endCol: -1,
          endOffset: -1,
        },
        ex = new Set([G.TABLE, G.TBODY, G.TFOOT, G.THEAD, G.TR]),
        eY = {
          scriptingEnabled: !0,
          sourceCodeLocationInfo: !1,
          treeAdapter: eR,
          onParseError: null,
        };
      class ev {
        constructor(e, t, s = null, a = null) {
          (this.fragmentContext = s),
            (this.scriptHandler = a),
            (this.currentToken = null),
            (this.stopped = !1),
            (this.insertionMode = x.INITIAL),
            (this.originalInsertionMode = x.INITIAL),
            (this.headElement = null),
            (this.formElement = null),
            (this.currentNotInHTML = !1),
            (this.tmplInsertionModeStack = []),
            (this.pendingCharacterTokens = []),
            (this.hasNonWhitespacePendingCharacterToken = !1),
            (this.framesetOk = !0),
            (this.skipNextNewLine = !1),
            (this.fosterParentingEnabled = !1),
            (this.options = { ...eY, ...e }),
            (this.treeAdapter = this.options.treeAdapter),
            (this.onParseError = this.options.onParseError),
            this.onParseError && (this.options.sourceCodeLocationInfo = !0),
            (this.document = null != t ? t : this.treeAdapter.createDocument()),
            (this.tokenizer = new eT(this.options, this)),
            (this.activeFormattingElements = new eC(this.treeAdapter)),
            (this.fragmentContextID = s
              ? J(this.treeAdapter.getTagName(s))
              : G.UNKNOWN),
            this._setContextModes(
              null != s ? s : this.document,
              this.fragmentContextID,
            ),
            (this.openElements = new eN(this.document, this.treeAdapter, this));
        }
        static parse(e, t) {
          let s = new this(t);
          return s.tokenizer.write(e, !0), s.document;
        }
        static getFragmentParser(e, t) {
          let s = { ...eY, ...t };
          null != e ||
            (e = s.treeAdapter.createElement(U.TEMPLATE, B.HTML, []));
          let a = s.treeAdapter.createElement("documentmock", B.HTML, []),
            r = new this(s, a, e);
          return (
            r.fragmentContextID === G.TEMPLATE &&
              r.tmplInsertionModeStack.unshift(x.IN_TEMPLATE),
            r._initTokenizerForFragmentParsing(),
            r._insertFakeRootElement(),
            r._resetInsertionMode(),
            r._findFormInFragmentContext(),
            r
          );
        }
        getFragment() {
          let e = this.treeAdapter.getFirstChild(this.document),
            t = this.treeAdapter.createDocumentFragment();
          return this._adoptNodes(e, t), t;
        }
        _err(e, t, s) {
          var a;
          if (!this.onParseError) return;
          let r = null !== (a = e.location) && void 0 !== a ? a : ew,
            i = {
              code: t,
              startLine: r.startLine,
              startCol: r.startCol,
              startOffset: r.startOffset,
              endLine: s ? r.startLine : r.endLine,
              endCol: s ? r.startCol : r.endCol,
              endOffset: s ? r.startOffset : r.endOffset,
            };
          this.onParseError(i);
        }
        onItemPush(e, t, s) {
          var a, r;
          null === (r = (a = this.treeAdapter).onItemPush) ||
            void 0 === r ||
            r.call(a, e),
            s && this.openElements.stackTop > 0 && this._setContextModes(e, t);
        }
        onItemPop(e, t) {
          var s, a;
          if (
            (this.options.sourceCodeLocationInfo &&
              this._setEndLocation(e, this.currentToken),
            null === (a = (s = this.treeAdapter).onItemPop) ||
              void 0 === a ||
              a.call(s, e, this.openElements.current),
            t)
          ) {
            let e, t;
            0 === this.openElements.stackTop && this.fragmentContext
              ? ((e = this.fragmentContext), (t = this.fragmentContextID))
              : ({ current: e, currentTagId: t } = this.openElements),
              this._setContextModes(e, t);
          }
        }
        _setContextModes(e, t) {
          let s =
            e === this.document ||
            this.treeAdapter.getNamespaceURI(e) === B.HTML;
          (this.currentNotInHTML = !s),
            (this.tokenizer.inForeignNode =
              !s && !this._isIntegrationPoint(t, e));
        }
        _switchToTextParsing(e, t) {
          this._insertElement(e, B.HTML),
            (this.tokenizer.state = t),
            (this.originalInsertionMode = this.insertionMode),
            (this.insertionMode = x.TEXT);
        }
        switchToPlaintextParsing() {
          (this.insertionMode = x.TEXT),
            (this.originalInsertionMode = x.IN_BODY),
            (this.tokenizer.state = et.PLAINTEXT);
        }
        _getAdjustedCurrentElement() {
          return 0 === this.openElements.stackTop && this.fragmentContext
            ? this.fragmentContext
            : this.openElements.current;
        }
        _findFormInFragmentContext() {
          let e = this.fragmentContext;
          for (; e; ) {
            if (this.treeAdapter.getTagName(e) === U.FORM) {
              this.formElement = e;
              break;
            }
            e = this.treeAdapter.getParentNode(e);
          }
        }
        _initTokenizerForFragmentParsing() {
          if (
            this.fragmentContext &&
            this.treeAdapter.getNamespaceURI(this.fragmentContext) === B.HTML
          )
            switch (this.fragmentContextID) {
              case G.TITLE:
              case G.TEXTAREA:
                this.tokenizer.state = et.RCDATA;
                break;
              case G.STYLE:
              case G.XMP:
              case G.IFRAME:
              case G.NOEMBED:
              case G.NOFRAMES:
              case G.NOSCRIPT:
                this.tokenizer.state = et.RAWTEXT;
                break;
              case G.SCRIPT:
                this.tokenizer.state = et.SCRIPT_DATA;
                break;
              case G.PLAINTEXT:
                this.tokenizer.state = et.PLAINTEXT;
            }
        }
        _setDocumentType(e) {
          let t = e.name || "",
            s = e.publicId || "",
            a = e.systemId || "";
          if (
            (this.treeAdapter.setDocumentType(this.document, t, s, a),
            e.location)
          ) {
            let t = this.treeAdapter
              .getChildNodes(this.document)
              .find((e) => this.treeAdapter.isDocumentTypeNode(e));
            t && this.treeAdapter.setNodeSourceCodeLocation(t, e.location);
          }
        }
        _attachElementToTree(e, t) {
          if (this.options.sourceCodeLocationInfo) {
            let s = t && { ...t, startTag: t };
            this.treeAdapter.setNodeSourceCodeLocation(e, s);
          }
          if (this._shouldFosterParentOnInsertion())
            this._fosterParentElement(e);
          else {
            let t = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.appendChild(t, e);
          }
        }
        _appendElement(e, t) {
          let s = this.treeAdapter.createElement(e.tagName, t, e.attrs);
          this._attachElementToTree(s, e.location);
        }
        _insertElement(e, t) {
          let s = this.treeAdapter.createElement(e.tagName, t, e.attrs);
          this._attachElementToTree(s, e.location),
            this.openElements.push(s, e.tagID);
        }
        _insertFakeElement(e, t) {
          let s = this.treeAdapter.createElement(e, B.HTML, []);
          this._attachElementToTree(s, null), this.openElements.push(s, t);
        }
        _insertTemplate(e) {
          let t = this.treeAdapter.createElement(e.tagName, B.HTML, e.attrs),
            s = this.treeAdapter.createDocumentFragment();
          this.treeAdapter.setTemplateContent(t, s),
            this._attachElementToTree(t, e.location),
            this.openElements.push(t, e.tagID),
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(s, null);
        }
        _insertFakeRootElement() {
          let e = this.treeAdapter.createElement(U.HTML, B.HTML, []);
          this.options.sourceCodeLocationInfo &&
            this.treeAdapter.setNodeSourceCodeLocation(e, null),
            this.treeAdapter.appendChild(this.openElements.current, e),
            this.openElements.push(e, G.HTML);
        }
        _appendCommentNode(e, t) {
          let s = this.treeAdapter.createCommentNode(e.data);
          this.treeAdapter.appendChild(t, s),
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(s, e.location);
        }
        _insertCharacters(e) {
          let t, s;
          if (
            (this._shouldFosterParentOnInsertion()
              ? (({ parent: t, beforeElement: s } =
                  this._findFosterParentingLocation()),
                s
                  ? this.treeAdapter.insertTextBefore(t, e.chars, s)
                  : this.treeAdapter.insertText(t, e.chars))
              : ((t = this.openElements.currentTmplContentOrNode),
                this.treeAdapter.insertText(t, e.chars)),
            !e.location)
          )
            return;
          let a = this.treeAdapter.getChildNodes(t),
            r = s ? a.lastIndexOf(s) : a.length,
            i = a[r - 1];
          if (this.treeAdapter.getNodeSourceCodeLocation(i)) {
            let { endLine: t, endCol: s, endOffset: a } = e.location;
            this.treeAdapter.updateNodeSourceCodeLocation(i, {
              endLine: t,
              endCol: s,
              endOffset: a,
            });
          } else
            this.options.sourceCodeLocationInfo &&
              this.treeAdapter.setNodeSourceCodeLocation(i, e.location);
        }
        _adoptNodes(e, t) {
          for (
            let s = this.treeAdapter.getFirstChild(e);
            s;
            s = this.treeAdapter.getFirstChild(e)
          )
            this.treeAdapter.detachNode(s), this.treeAdapter.appendChild(t, s);
        }
        _setEndLocation(e, t) {
          if (this.treeAdapter.getNodeSourceCodeLocation(e) && t.location) {
            let s = t.location,
              a = this.treeAdapter.getTagName(e),
              r =
                t.type === f.END_TAG && a === t.tagName
                  ? {
                      endTag: { ...s },
                      endLine: s.endLine,
                      endCol: s.endCol,
                      endOffset: s.endOffset,
                    }
                  : {
                      endLine: s.startLine,
                      endCol: s.startCol,
                      endOffset: s.startOffset,
                    };
            this.treeAdapter.updateNodeSourceCodeLocation(e, r);
          }
        }
        shouldProcessStartTagTokenInForeignContent(e) {
          let t, s;
          return (
            !!this.currentNotInHTML &&
            (0 === this.openElements.stackTop && this.fragmentContext
              ? ((t = this.fragmentContext), (s = this.fragmentContextID))
              : ({ current: t, currentTagId: s } = this.openElements),
            (e.tagID !== G.SVG ||
              this.treeAdapter.getTagName(t) !== U.ANNOTATION_XML ||
              this.treeAdapter.getNamespaceURI(t) !== B.MATHML) &&
              (this.tokenizer.inForeignNode ||
                ((e.tagID === G.MGLYPH || e.tagID === G.MALIGNMARK) &&
                  !this._isIntegrationPoint(s, t, B.HTML))))
          );
        }
        _processToken(e) {
          switch (e.type) {
            case f.CHARACTER:
              this.onCharacter(e);
              break;
            case f.NULL_CHARACTER:
              this.onNullCharacter(e);
              break;
            case f.COMMENT:
              this.onComment(e);
              break;
            case f.DOCTYPE:
              this.onDoctype(e);
              break;
            case f.START_TAG:
              this._processStartTag(e);
              break;
            case f.END_TAG:
              this.onEndTag(e);
              break;
            case f.EOF:
              this.onEof(e);
              break;
            case f.WHITESPACE_CHARACTER:
              this.onWhitespaceCharacter(e);
          }
        }
        _isIntegrationPoint(e, t, s) {
          let a = this.treeAdapter.getNamespaceURI(t),
            r = this.treeAdapter.getAttrList(t);
          return (
            ((!s || s === B.HTML) &&
              (function (e, t, s) {
                if (t === B.MATHML && e === G.ANNOTATION_XML) {
                  for (let e = 0; e < s.length; e++)
                    if (s[e].name === H.ENCODING) {
                      let t = s[e].value.toLowerCase();
                      return t === eP.TEXT_HTML || t === eP.APPLICATION_XML;
                    }
                }
                return (
                  t === B.SVG &&
                  (e === G.FOREIGN_OBJECT || e === G.DESC || e === G.TITLE)
                );
              })(e, a, r)) ||
            ((!s || s === B.MATHML) &&
              a === B.MATHML &&
              (e === G.MI ||
                e === G.MO ||
                e === G.MN ||
                e === G.MS ||
                e === G.MTEXT))
          );
        }
        _reconstructActiveFormattingElements() {
          let e = this.activeFormattingElements.entries.length;
          if (e) {
            let t = this.activeFormattingElements.entries.findIndex(
                (e) =>
                  e.type === w.Marker || this.openElements.contains(e.element),
              ),
              s = t < 0 ? e - 1 : t - 1;
            for (let e = s; e >= 0; e--) {
              let t = this.activeFormattingElements.entries[e];
              this._insertElement(
                t.token,
                this.treeAdapter.getNamespaceURI(t.element),
              ),
                (t.element = this.openElements.current);
            }
          }
        }
        _closeTableCell() {
          this.openElements.generateImpliedEndTags(),
            this.openElements.popUntilTableCellPopped(),
            this.activeFormattingElements.clearToLastMarker(),
            (this.insertionMode = x.IN_ROW);
        }
        _closePElement() {
          this.openElements.generateImpliedEndTagsWithExclusion(G.P),
            this.openElements.popUntilTagNamePopped(G.P);
        }
        _resetInsertionMode() {
          for (let e = this.openElements.stackTop; e >= 0; e--)
            switch (
              0 === e && this.fragmentContext
                ? this.fragmentContextID
                : this.openElements.tagIDs[e]
            ) {
              case G.TR:
                this.insertionMode = x.IN_ROW;
                return;
              case G.TBODY:
              case G.THEAD:
              case G.TFOOT:
                this.insertionMode = x.IN_TABLE_BODY;
                return;
              case G.CAPTION:
                this.insertionMode = x.IN_CAPTION;
                return;
              case G.COLGROUP:
                this.insertionMode = x.IN_COLUMN_GROUP;
                return;
              case G.TABLE:
                this.insertionMode = x.IN_TABLE;
                return;
              case G.BODY:
                this.insertionMode = x.IN_BODY;
                return;
              case G.FRAMESET:
                this.insertionMode = x.IN_FRAMESET;
                return;
              case G.SELECT:
                this._resetInsertionModeForSelect(e);
                return;
              case G.TEMPLATE:
                this.insertionMode = this.tmplInsertionModeStack[0];
                return;
              case G.HTML:
                this.insertionMode = this.headElement
                  ? x.AFTER_HEAD
                  : x.BEFORE_HEAD;
                return;
              case G.TD:
              case G.TH:
                if (e > 0) {
                  this.insertionMode = x.IN_CELL;
                  return;
                }
                break;
              case G.HEAD:
                if (e > 0) {
                  this.insertionMode = x.IN_HEAD;
                  return;
                }
            }
          this.insertionMode = x.IN_BODY;
        }
        _resetInsertionModeForSelect(e) {
          if (e > 0)
            for (let t = e - 1; t > 0; t--) {
              let e = this.openElements.tagIDs[t];
              if (e === G.TEMPLATE) break;
              if (e === G.TABLE) {
                this.insertionMode = x.IN_SELECT_IN_TABLE;
                return;
              }
            }
          this.insertionMode = x.IN_SELECT;
        }
        _isElementCausesFosterParenting(e) {
          return ex.has(e);
        }
        _shouldFosterParentOnInsertion() {
          return (
            this.fosterParentingEnabled &&
            this._isElementCausesFosterParenting(this.openElements.currentTagId)
          );
        }
        _findFosterParentingLocation() {
          for (let e = this.openElements.stackTop; e >= 0; e--) {
            let t = this.openElements.items[e];
            switch (this.openElements.tagIDs[e]) {
              case G.TEMPLATE:
                if (this.treeAdapter.getNamespaceURI(t) === B.HTML)
                  return {
                    parent: this.treeAdapter.getTemplateContent(t),
                    beforeElement: null,
                  };
                break;
              case G.TABLE: {
                let s = this.treeAdapter.getParentNode(t);
                if (s) return { parent: s, beforeElement: t };
                return {
                  parent: this.openElements.items[e - 1],
                  beforeElement: null,
                };
              }
            }
          }
          return { parent: this.openElements.items[0], beforeElement: null };
        }
        _fosterParentElement(e) {
          let t = this._findFosterParentingLocation();
          t.beforeElement
            ? this.treeAdapter.insertBefore(t.parent, e, t.beforeElement)
            : this.treeAdapter.appendChild(t.parent, e);
        }
        _isSpecialElement(e, t) {
          return Z[this.treeAdapter.getNamespaceURI(e)].has(t);
        }
        onCharacter(e) {
          if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
            this._insertCharacters(e), (this.framesetOk = !1);
            return;
          }
          switch (this.insertionMode) {
            case x.INITIAL:
              eX(this, e);
              break;
            case x.BEFORE_HTML:
              eK(this, e);
              break;
            case x.BEFORE_HEAD:
              eV(this, e);
              break;
            case x.IN_HEAD:
              ej(this, e);
              break;
            case x.IN_HEAD_NO_SCRIPT:
              eZ(this, e);
              break;
            case x.AFTER_HEAD:
              e$(this, e);
              break;
            case x.IN_BODY:
            case x.IN_CAPTION:
            case x.IN_CELL:
            case x.IN_TEMPLATE:
              e3(this, e);
              break;
            case x.TEXT:
            case x.IN_SELECT:
            case x.IN_SELECT_IN_TABLE:
              this._insertCharacters(e);
              break;
            case x.IN_TABLE:
            case x.IN_TABLE_BODY:
            case x.IN_ROW:
              tt(this, e);
              break;
            case x.IN_TABLE_TEXT:
              tn(this, e);
              break;
            case x.IN_COLUMN_GROUP:
              tT(this, e);
              break;
            case x.AFTER_BODY:
              tN(this, e);
              break;
            case x.AFTER_AFTER_BODY:
              tI(this, e);
          }
        }
        onNullCharacter(e) {
          if (((this.skipNextNewLine = !1), this.tokenizer.inForeignNode)) {
            (e.chars = "�"), this._insertCharacters(e);
            return;
          }
          switch (this.insertionMode) {
            case x.INITIAL:
              eX(this, e);
              break;
            case x.BEFORE_HTML:
              eK(this, e);
              break;
            case x.BEFORE_HEAD:
              eV(this, e);
              break;
            case x.IN_HEAD:
              ej(this, e);
              break;
            case x.IN_HEAD_NO_SCRIPT:
              eZ(this, e);
              break;
            case x.AFTER_HEAD:
              e$(this, e);
              break;
            case x.TEXT:
              this._insertCharacters(e);
              break;
            case x.IN_TABLE:
            case x.IN_TABLE_BODY:
            case x.IN_ROW:
              tt(this, e);
              break;
            case x.IN_COLUMN_GROUP:
              tT(this, e);
              break;
            case x.AFTER_BODY:
              tN(this, e);
              break;
            case x.AFTER_AFTER_BODY:
              tI(this, e);
          }
        }
        onComment(e) {
          if (((this.skipNextNewLine = !1), this.currentNotInHTML)) {
            eq(this, e);
            return;
          }
          switch (this.insertionMode) {
            case x.INITIAL:
            case x.BEFORE_HTML:
            case x.BEFORE_HEAD:
            case x.IN_HEAD:
            case x.IN_HEAD_NO_SCRIPT:
            case x.AFTER_HEAD:
            case x.IN_BODY:
            case x.IN_TABLE:
            case x.IN_CAPTION:
            case x.IN_COLUMN_GROUP:
            case x.IN_TABLE_BODY:
            case x.IN_ROW:
            case x.IN_CELL:
            case x.IN_SELECT:
            case x.IN_SELECT_IN_TABLE:
            case x.IN_TEMPLATE:
            case x.IN_FRAMESET:
            case x.AFTER_FRAMESET:
              eq(this, e);
              break;
            case x.IN_TABLE_TEXT:
              to(this, e);
              break;
            case x.AFTER_BODY:
              !(function (e, t) {
                e._appendCommentNode(t, e.openElements.items[0]);
              })(this, e);
              break;
            case x.AFTER_AFTER_BODY:
            case x.AFTER_AFTER_FRAMESET:
              !(function (e, t) {
                e._appendCommentNode(t, e.document);
              })(this, e);
          }
        }
        onDoctype(e) {
          switch (((this.skipNextNewLine = !1), this.insertionMode)) {
            case x.INITIAL:
              !(function (e, t) {
                e._setDocumentType(t);
                let s = t.forceQuirks
                  ? F.QUIRKS
                  : (function (e) {
                      if (e.name !== eD) return F.QUIRKS;
                      let { systemId: t } = e;
                      if (
                        t &&
                        "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd" ===
                          t.toLowerCase()
                      )
                        return F.QUIRKS;
                      let { publicId: s } = e;
                      if (null !== s) {
                        if (((s = s.toLowerCase()), ef.has(s))) return F.QUIRKS;
                        let e = null === t ? eL : eO;
                        if (ek(s, e)) return F.QUIRKS;
                        if (ek(s, (e = null === t ? eM : eg)))
                          return F.LIMITED_QUIRKS;
                      }
                      return F.NO_QUIRKS;
                    })(t);
                (t.name === eD &&
                  null === t.publicId &&
                  (null === t.systemId ||
                    "about:legacy-compat" === t.systemId)) ||
                  e._err(t, L.nonConformingDoctype),
                  e.treeAdapter.setDocumentMode(e.document, s),
                  (e.insertionMode = x.BEFORE_HTML);
              })(this, e);
              break;
            case x.BEFORE_HEAD:
            case x.IN_HEAD:
            case x.IN_HEAD_NO_SCRIPT:
            case x.AFTER_HEAD:
              this._err(e, L.misplacedDoctype);
              break;
            case x.IN_TABLE_TEXT:
              to(this, e);
          }
        }
        onStartTag(e) {
          (this.skipNextNewLine = !1),
            (this.currentToken = e),
            this._processStartTag(e),
            e.selfClosing &&
              !e.ackSelfClosing &&
              this._err(e, L.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
        _processStartTag(e) {
          this.shouldProcessStartTagTokenInForeignContent(e)
            ? (function (e, t) {
                if (
                  (function (e) {
                    let t = e.tagID;
                    return (
                      (t === G.FONT &&
                        e.attrs.some(
                          ({ name: e }) =>
                            e === H.COLOR || e === H.SIZE || e === H.FACE,
                        )) ||
                      eF.has(t)
                    );
                  })(t)
                )
                  tC(e), e._startTagOutsideForeignContent(t);
                else {
                  let s = e._getAdjustedCurrentElement(),
                    a = e.treeAdapter.getNamespaceURI(s);
                  a === B.MATHML
                    ? eU(t)
                    : a === B.SVG &&
                      ((function (e) {
                        let t = eH.get(e.tagName);
                        null != t &&
                          ((e.tagName = t), (e.tagID = J(e.tagName)));
                      })(t),
                      eG(t)),
                    ey(t),
                    t.selfClosing
                      ? e._appendElement(t, a)
                      : e._insertElement(t, a),
                    (t.ackSelfClosing = !0);
                }
              })(this, e)
            : this._startTagOutsideForeignContent(e);
        }
        _startTagOutsideForeignContent(e) {
          switch (this.insertionMode) {
            case x.INITIAL:
              eX(this, e);
              break;
            case x.BEFORE_HTML:
              e.tagID === G.HTML
                ? (this._insertElement(e, B.HTML),
                  (this.insertionMode = x.BEFORE_HEAD))
                : eK(this, e);
              break;
            case x.BEFORE_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case G.HTML:
                    e6(e, t);
                    break;
                  case G.HEAD:
                    e._insertElement(t, B.HTML),
                      (e.headElement = e.openElements.current),
                      (e.insertionMode = x.IN_HEAD);
                    break;
                  default:
                    eV(e, t);
                }
              })(this, e);
              break;
            case x.IN_HEAD:
              ez(this, e);
              break;
            case x.IN_HEAD_NO_SCRIPT:
              !(function (e, t) {
                switch (t.tagID) {
                  case G.HTML:
                    e6(e, t);
                    break;
                  case G.BASEFONT:
                  case G.BGSOUND:
                  case G.HEAD:
                  case G.LINK:
                  case G.META:
                  case G.NOFRAMES:
                  case G.STYLE:
                    ez(e, t);
                    break;
                  case G.NOSCRIPT:
                    e._err(t, L.nestedNoscriptInHead);
                    break;
                  default:
                    eZ(e, t);
                }
              })(this, e);
              break;
            case x.AFTER_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case G.HTML:
                    e6(e, t);
                    break;
                  case G.BODY:
                    e._insertElement(t, B.HTML),
                      (e.framesetOk = !1),
                      (e.insertionMode = x.IN_BODY);
                    break;
                  case G.FRAMESET:
                    e._insertElement(t, B.HTML),
                      (e.insertionMode = x.IN_FRAMESET);
                    break;
                  case G.BASE:
                  case G.BASEFONT:
                  case G.BGSOUND:
                  case G.LINK:
                  case G.META:
                  case G.NOFRAMES:
                  case G.SCRIPT:
                  case G.STYLE:
                  case G.TEMPLATE:
                  case G.TITLE:
                    e._err(t, L.abandonedHeadElementChild),
                      e.openElements.push(e.headElement, G.HEAD),
                      ez(e, t),
                      e.openElements.remove(e.headElement);
                    break;
                  case G.HEAD:
                    e._err(t, L.misplacedStartTagForHeadElement);
                    break;
                  default:
                    e$(e, t);
                }
              })(this, e);
              break;
            case x.IN_BODY:
              e6(this, e);
              break;
            case x.IN_TABLE:
              ts(this, e);
              break;
            case x.IN_TABLE_TEXT:
              to(this, e);
              break;
            case x.IN_CAPTION:
              !(function (e, t) {
                let s = t.tagID;
                tE.has(s)
                  ? e.openElements.hasInTableScope(G.CAPTION) &&
                    (e.openElements.generateImpliedEndTags(),
                    e.openElements.popUntilTagNamePopped(G.CAPTION),
                    e.activeFormattingElements.clearToLastMarker(),
                    (e.insertionMode = x.IN_TABLE),
                    ts(e, t))
                  : e6(e, t);
              })(this, e);
              break;
            case x.IN_COLUMN_GROUP:
              tc(this, e);
              break;
            case x.IN_TABLE_BODY:
              th(this, e);
              break;
            case x.IN_ROW:
              tA(this, e);
              break;
            case x.IN_CELL:
              !(function (e, t) {
                let s = t.tagID;
                tE.has(s)
                  ? (e.openElements.hasInTableScope(G.TD) ||
                      e.openElements.hasInTableScope(G.TH)) &&
                    (e._closeTableCell(), tA(e, t))
                  : e6(e, t);
              })(this, e);
              break;
            case x.IN_SELECT:
              td(this, e);
              break;
            case x.IN_SELECT_IN_TABLE:
              !(function (e, t) {
                let s = t.tagID;
                s === G.CAPTION ||
                s === G.TABLE ||
                s === G.TBODY ||
                s === G.TFOOT ||
                s === G.THEAD ||
                s === G.TR ||
                s === G.TD ||
                s === G.TH
                  ? (e.openElements.popUntilTagNamePopped(G.SELECT),
                    e._resetInsertionMode(),
                    e._processStartTag(t))
                  : td(e, t);
              })(this, e);
              break;
            case x.IN_TEMPLATE:
              !(function (e, t) {
                switch (t.tagID) {
                  case G.BASE:
                  case G.BASEFONT:
                  case G.BGSOUND:
                  case G.LINK:
                  case G.META:
                  case G.NOFRAMES:
                  case G.SCRIPT:
                  case G.STYLE:
                  case G.TEMPLATE:
                  case G.TITLE:
                    ez(e, t);
                    break;
                  case G.CAPTION:
                  case G.COLGROUP:
                  case G.TBODY:
                  case G.TFOOT:
                  case G.THEAD:
                    (e.tmplInsertionModeStack[0] = x.IN_TABLE),
                      (e.insertionMode = x.IN_TABLE),
                      ts(e, t);
                    break;
                  case G.COL:
                    (e.tmplInsertionModeStack[0] = x.IN_COLUMN_GROUP),
                      (e.insertionMode = x.IN_COLUMN_GROUP),
                      tc(e, t);
                    break;
                  case G.TR:
                    (e.tmplInsertionModeStack[0] = x.IN_TABLE_BODY),
                      (e.insertionMode = x.IN_TABLE_BODY),
                      th(e, t);
                    break;
                  case G.TD:
                  case G.TH:
                    (e.tmplInsertionModeStack[0] = x.IN_ROW),
                      (e.insertionMode = x.IN_ROW),
                      tA(e, t);
                    break;
                  default:
                    (e.tmplInsertionModeStack[0] = x.IN_BODY),
                      (e.insertionMode = x.IN_BODY),
                      e6(e, t);
                }
              })(this, e);
              break;
            case x.AFTER_BODY:
              e.tagID === G.HTML ? e6(this, e) : tN(this, e);
              break;
            case x.IN_FRAMESET:
              !(function (e, t) {
                switch (t.tagID) {
                  case G.HTML:
                    e6(e, t);
                    break;
                  case G.FRAMESET:
                    e._insertElement(t, B.HTML);
                    break;
                  case G.FRAME:
                    e._appendElement(t, B.HTML), (t.ackSelfClosing = !0);
                    break;
                  case G.NOFRAMES:
                    ez(e, t);
                }
              })(this, e);
              break;
            case x.AFTER_FRAMESET:
              !(function (e, t) {
                switch (t.tagID) {
                  case G.HTML:
                    e6(e, t);
                    break;
                  case G.NOFRAMES:
                    ez(e, t);
                }
              })(this, e);
              break;
            case x.AFTER_AFTER_BODY:
              e.tagID === G.HTML ? e6(this, e) : tI(this, e);
              break;
            case x.AFTER_AFTER_FRAMESET:
              !(function (e, t) {
                switch (t.tagID) {
                  case G.HTML:
                    e6(e, t);
                    break;
                  case G.NOFRAMES:
                    ez(e, t);
                }
              })(this, e);
          }
        }
        onEndTag(e) {
          (this.skipNextNewLine = !1),
            (this.currentToken = e),
            this.currentNotInHTML
              ? (function (e, t) {
                  if (t.tagID === G.P || t.tagID === G.BR) {
                    tC(e), e._endTagOutsideForeignContent(t);
                    return;
                  }
                  for (let s = e.openElements.stackTop; s > 0; s--) {
                    let a = e.openElements.items[s];
                    if (e.treeAdapter.getNamespaceURI(a) === B.HTML) {
                      e._endTagOutsideForeignContent(t);
                      break;
                    }
                    let r = e.treeAdapter.getTagName(a);
                    if (r.toLowerCase() === t.tagName) {
                      (t.tagName = r), e.openElements.shortenToLength(s);
                      break;
                    }
                  }
                })(this, e)
              : this._endTagOutsideForeignContent(e);
        }
        _endTagOutsideForeignContent(e) {
          var t;
          switch (this.insertionMode) {
            case x.INITIAL:
              eX(this, e);
              break;
            case x.BEFORE_HTML:
              !(function (e, t) {
                let s = t.tagID;
                (s === G.HTML || s === G.HEAD || s === G.BODY || s === G.BR) &&
                  eK(e, t);
              })(this, e);
              break;
            case x.BEFORE_HEAD:
              !(function (e, t) {
                let s = t.tagID;
                s === G.HEAD || s === G.BODY || s === G.HTML || s === G.BR
                  ? eV(e, t)
                  : e._err(t, L.endTagWithoutMatchingOpenElement);
              })(this, e);
              break;
            case x.IN_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case G.HEAD:
                    e.openElements.pop(), (e.insertionMode = x.AFTER_HEAD);
                    break;
                  case G.BODY:
                  case G.BR:
                  case G.HTML:
                    ej(e, t);
                    break;
                  case G.TEMPLATE:
                    eJ(e, t);
                    break;
                  default:
                    e._err(t, L.endTagWithoutMatchingOpenElement);
                }
              })(this, e);
              break;
            case x.IN_HEAD_NO_SCRIPT:
              !(function (e, t) {
                switch (t.tagID) {
                  case G.NOSCRIPT:
                    e.openElements.pop(), (e.insertionMode = x.IN_HEAD);
                    break;
                  case G.BR:
                    eZ(e, t);
                    break;
                  default:
                    e._err(t, L.endTagWithoutMatchingOpenElement);
                }
              })(this, e);
              break;
            case x.AFTER_HEAD:
              !(function (e, t) {
                switch (t.tagID) {
                  case G.BODY:
                  case G.HTML:
                  case G.BR:
                    e$(e, t);
                    break;
                  case G.TEMPLATE:
                    eJ(e, t);
                    break;
                  default:
                    e._err(t, L.endTagWithoutMatchingOpenElement);
                }
              })(this, e);
              break;
            case x.IN_BODY:
              e7(this, e);
              break;
            case x.TEXT:
              e.tagID === G.SCRIPT &&
                (null === (t = this.scriptHandler) ||
                  void 0 === t ||
                  t.call(this, this.openElements.current)),
                this.openElements.pop(),
                (this.insertionMode = this.originalInsertionMode);
              break;
            case x.IN_TABLE:
              ta(this, e);
              break;
            case x.IN_TABLE_TEXT:
              to(this, e);
              break;
            case x.IN_CAPTION:
              !(function (e, t) {
                let s = t.tagID;
                switch (s) {
                  case G.CAPTION:
                  case G.TABLE:
                    e.openElements.hasInTableScope(G.CAPTION) &&
                      (e.openElements.generateImpliedEndTags(),
                      e.openElements.popUntilTagNamePopped(G.CAPTION),
                      e.activeFormattingElements.clearToLastMarker(),
                      (e.insertionMode = x.IN_TABLE),
                      s === G.TABLE && ta(e, t));
                    break;
                  case G.BODY:
                  case G.COL:
                  case G.COLGROUP:
                  case G.HTML:
                  case G.TBODY:
                  case G.TD:
                  case G.TFOOT:
                  case G.TH:
                  case G.THEAD:
                  case G.TR:
                    break;
                  default:
                    e7(e, t);
                }
              })(this, e);
              break;
            case x.IN_COLUMN_GROUP:
              !(function (e, t) {
                switch (t.tagID) {
                  case G.COLGROUP:
                    e.openElements.currentTagId === G.COLGROUP &&
                      (e.openElements.pop(), (e.insertionMode = x.IN_TABLE));
                    break;
                  case G.TEMPLATE:
                    eJ(e, t);
                    break;
                  case G.COL:
                    break;
                  default:
                    tT(e, t);
                }
              })(this, e);
              break;
            case x.IN_TABLE_BODY:
              t_(this, e);
              break;
            case x.IN_ROW:
              tl(this, e);
              break;
            case x.IN_CELL:
              !(function (e, t) {
                let s = t.tagID;
                switch (s) {
                  case G.TD:
                  case G.TH:
                    e.openElements.hasInTableScope(s) &&
                      (e.openElements.generateImpliedEndTags(),
                      e.openElements.popUntilTagNamePopped(s),
                      e.activeFormattingElements.clearToLastMarker(),
                      (e.insertionMode = x.IN_ROW));
                    break;
                  case G.TABLE:
                  case G.TBODY:
                  case G.TFOOT:
                  case G.THEAD:
                  case G.TR:
                    e.openElements.hasInTableScope(s) &&
                      (e._closeTableCell(), tl(e, t));
                    break;
                  case G.BODY:
                  case G.CAPTION:
                  case G.COL:
                  case G.COLGROUP:
                  case G.HTML:
                    break;
                  default:
                    e7(e, t);
                }
              })(this, e);
              break;
            case x.IN_SELECT:
              tm(this, e);
              break;
            case x.IN_SELECT_IN_TABLE:
              !(function (e, t) {
                let s = t.tagID;
                s === G.CAPTION ||
                s === G.TABLE ||
                s === G.TBODY ||
                s === G.TFOOT ||
                s === G.THEAD ||
                s === G.TR ||
                s === G.TD ||
                s === G.TH
                  ? e.openElements.hasInTableScope(s) &&
                    (e.openElements.popUntilTagNamePopped(G.SELECT),
                    e._resetInsertionMode(),
                    e.onEndTag(t))
                  : tm(e, t);
              })(this, e);
              break;
            case x.IN_TEMPLATE:
              e.tagID === G.TEMPLATE && eJ(this, e);
              break;
            case x.AFTER_BODY:
              tp(this, e);
              break;
            case x.IN_FRAMESET:
              e.tagID !== G.FRAMESET ||
                this.openElements.isRootHtmlElementCurrent() ||
                (this.openElements.pop(),
                this.fragmentContext ||
                  this.openElements.currentTagId === G.FRAMESET ||
                  (this.insertionMode = x.AFTER_FRAMESET));
              break;
            case x.AFTER_FRAMESET:
              e.tagID === G.HTML &&
                (this.insertionMode = x.AFTER_AFTER_FRAMESET);
              break;
            case x.AFTER_AFTER_BODY:
              tI(this, e);
          }
        }
        onEof(e) {
          switch (this.insertionMode) {
            case x.INITIAL:
              eX(this, e);
              break;
            case x.BEFORE_HTML:
              eK(this, e);
              break;
            case x.BEFORE_HEAD:
              eV(this, e);
              break;
            case x.IN_HEAD:
              ej(this, e);
              break;
            case x.IN_HEAD_NO_SCRIPT:
              eZ(this, e);
              break;
            case x.AFTER_HEAD:
              e$(this, e);
              break;
            case x.IN_BODY:
            case x.IN_TABLE:
            case x.IN_CAPTION:
            case x.IN_COLUMN_GROUP:
            case x.IN_TABLE_BODY:
            case x.IN_ROW:
            case x.IN_CELL:
            case x.IN_SELECT:
            case x.IN_SELECT_IN_TABLE:
              te(this, e);
              break;
            case x.TEXT:
              this._err(e, L.eofInElementThatCanContainOnlyText),
                this.openElements.pop(),
                (this.insertionMode = this.originalInsertionMode),
                this.onEof(e);
              break;
            case x.IN_TABLE_TEXT:
              to(this, e);
              break;
            case x.IN_TEMPLATE:
              tu(this, e);
              break;
            case x.AFTER_BODY:
            case x.IN_FRAMESET:
            case x.AFTER_FRAMESET:
            case x.AFTER_AFTER_BODY:
            case x.AFTER_AFTER_FRAMESET:
              eW(this, e);
          }
        }
        onWhitespaceCharacter(e) {
          if (
            this.skipNextNewLine &&
            ((this.skipNextNewLine = !1), e.chars.charCodeAt(0) === O.LINE_FEED)
          ) {
            if (1 === e.chars.length) return;
            e.chars = e.chars.substr(1);
          }
          if (this.tokenizer.inForeignNode) {
            this._insertCharacters(e);
            return;
          }
          switch (this.insertionMode) {
            case x.IN_HEAD:
            case x.IN_HEAD_NO_SCRIPT:
            case x.AFTER_HEAD:
            case x.TEXT:
            case x.IN_COLUMN_GROUP:
            case x.IN_SELECT:
            case x.IN_SELECT_IN_TABLE:
            case x.IN_FRAMESET:
            case x.AFTER_FRAMESET:
              this._insertCharacters(e);
              break;
            case x.IN_BODY:
            case x.IN_CAPTION:
            case x.IN_CELL:
            case x.IN_TEMPLATE:
            case x.AFTER_BODY:
            case x.AFTER_AFTER_BODY:
            case x.AFTER_AFTER_FRAMESET:
              e1(this, e);
              break;
            case x.IN_TABLE:
            case x.IN_TABLE_BODY:
            case x.IN_ROW:
              tt(this, e);
              break;
            case x.IN_TABLE_TEXT:
              ti(this, e);
          }
        }
      }
      function eQ(e, t) {
        for (let s = 0; s < 8; s++) {
          let s = (function (e, t) {
            let s =
              e.activeFormattingElements.getElementEntryInScopeWithTagName(
                t.tagName,
              );
            return (
              s
                ? e.openElements.contains(s.element)
                  ? e.openElements.hasInScope(t.tagID) || (s = null)
                  : (e.activeFormattingElements.removeEntry(s), (s = null))
                : e9(e, t),
              s
            );
          })(e, t);
          if (!s) break;
          let a = (function (e, t) {
            let s = null,
              a = e.openElements.stackTop;
            for (; a >= 0; a--) {
              let r = e.openElements.items[a];
              if (r === t.element) break;
              e._isSpecialElement(r, e.openElements.tagIDs[a]) && (s = r);
            }
            return (
              s ||
                (e.openElements.shortenToLength(a < 0 ? 0 : a),
                e.activeFormattingElements.removeEntry(t)),
              s
            );
          })(e, s);
          if (!a) break;
          e.activeFormattingElements.bookmark = s;
          let r = (function (e, t, s) {
              let a = t,
                r = e.openElements.getCommonAncestor(t);
              for (let i = 0, n = r; n !== s; i++, n = r) {
                r = e.openElements.getCommonAncestor(n);
                let s = e.activeFormattingElements.getElementEntry(n),
                  o = s && i >= 3;
                !s || o
                  ? (o && e.activeFormattingElements.removeEntry(s),
                    e.openElements.remove(n))
                  : ((n = (function (e, t) {
                      let s = e.treeAdapter.getNamespaceURI(t.element),
                        a = e.treeAdapter.createElement(
                          t.token.tagName,
                          s,
                          t.token.attrs,
                        );
                      return (
                        e.openElements.replace(t.element, a), (t.element = a), a
                      );
                    })(e, s)),
                    a === t && (e.activeFormattingElements.bookmark = s),
                    e.treeAdapter.detachNode(a),
                    e.treeAdapter.appendChild(n, a),
                    (a = n));
              }
              return a;
            })(e, a, s.element),
            i = e.openElements.getCommonAncestor(s.element);
          e.treeAdapter.detachNode(r),
            i &&
              (function (e, t, s) {
                let a = J(e.treeAdapter.getTagName(t));
                if (e._isElementCausesFosterParenting(a))
                  e._fosterParentElement(s);
                else {
                  let r = e.treeAdapter.getNamespaceURI(t);
                  a === G.TEMPLATE &&
                    r === B.HTML &&
                    (t = e.treeAdapter.getTemplateContent(t)),
                    e.treeAdapter.appendChild(t, s);
                }
              })(e, i, r),
            (function (e, t, s) {
              let a = e.treeAdapter.getNamespaceURI(s.element),
                { token: r } = s,
                i = e.treeAdapter.createElement(r.tagName, a, r.attrs);
              e._adoptNodes(t, i),
                e.treeAdapter.appendChild(t, i),
                e.activeFormattingElements.insertElementAfterBookmark(i, r),
                e.activeFormattingElements.removeEntry(s),
                e.openElements.remove(s.element),
                e.openElements.insertAfter(t, i, r.tagID);
            })(e, a, s);
        }
      }
      function eq(e, t) {
        e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
      }
      function eW(e, t) {
        if (((e.stopped = !0), t.location)) {
          let s = e.fragmentContext ? 0 : 2;
          for (let a = e.openElements.stackTop; a >= s; a--)
            e._setEndLocation(e.openElements.items[a], t);
          if (!e.fragmentContext && e.openElements.stackTop >= 0) {
            let s = e.openElements.items[0],
              a = e.treeAdapter.getNodeSourceCodeLocation(s);
            if (
              a &&
              !a.endTag &&
              (e._setEndLocation(s, t), e.openElements.stackTop >= 1)
            ) {
              let s = e.openElements.items[1],
                a = e.treeAdapter.getNodeSourceCodeLocation(s);
              a && !a.endTag && e._setEndLocation(s, t);
            }
          }
        }
      }
      function eX(e, t) {
        e._err(t, L.missingDoctype, !0),
          e.treeAdapter.setDocumentMode(e.document, F.QUIRKS),
          (e.insertionMode = x.BEFORE_HTML),
          e._processToken(t);
      }
      function eK(e, t) {
        e._insertFakeRootElement(),
          (e.insertionMode = x.BEFORE_HEAD),
          e._processToken(t);
      }
      function eV(e, t) {
        e._insertFakeElement(U.HEAD, G.HEAD),
          (e.headElement = e.openElements.current),
          (e.insertionMode = x.IN_HEAD),
          e._processToken(t);
      }
      function ez(e, t) {
        switch (t.tagID) {
          case G.HTML:
            e6(e, t);
            break;
          case G.BASE:
          case G.BASEFONT:
          case G.BGSOUND:
          case G.LINK:
          case G.META:
            e._appendElement(t, B.HTML), (t.ackSelfClosing = !0);
            break;
          case G.TITLE:
            e._switchToTextParsing(t, et.RCDATA);
            break;
          case G.NOSCRIPT:
            e.options.scriptingEnabled
              ? e._switchToTextParsing(t, et.RAWTEXT)
              : (e._insertElement(t, B.HTML),
                (e.insertionMode = x.IN_HEAD_NO_SCRIPT));
            break;
          case G.NOFRAMES:
          case G.STYLE:
            e._switchToTextParsing(t, et.RAWTEXT);
            break;
          case G.SCRIPT:
            e._switchToTextParsing(t, et.SCRIPT_DATA);
            break;
          case G.TEMPLATE:
            e._insertTemplate(t),
              e.activeFormattingElements.insertMarker(),
              (e.framesetOk = !1),
              (e.insertionMode = x.IN_TEMPLATE),
              e.tmplInsertionModeStack.unshift(x.IN_TEMPLATE);
            break;
          case G.HEAD:
            e._err(t, L.misplacedStartTagForHeadElement);
            break;
          default:
            ej(e, t);
        }
      }
      function eJ(e, t) {
        e.openElements.tmplCount > 0
          ? (e.openElements.generateImpliedEndTagsThoroughly(),
            e.openElements.currentTagId !== G.TEMPLATE &&
              e._err(t, L.closingOfElementWithOpenChildElements),
            e.openElements.popUntilTagNamePopped(G.TEMPLATE),
            e.activeFormattingElements.clearToLastMarker(),
            e.tmplInsertionModeStack.shift(),
            e._resetInsertionMode())
          : e._err(t, L.endTagWithoutMatchingOpenElement);
      }
      function ej(e, t) {
        e.openElements.pop(),
          (e.insertionMode = x.AFTER_HEAD),
          e._processToken(t);
      }
      function eZ(e, t) {
        let s =
          t.type === f.EOF
            ? L.openElementsLeftAfterEof
            : L.disallowedContentInNoscriptInHead;
        e._err(t, s),
          e.openElements.pop(),
          (e.insertionMode = x.IN_HEAD),
          e._processToken(t);
      }
      function e$(e, t) {
        e._insertFakeElement(U.BODY, G.BODY),
          (e.insertionMode = x.IN_BODY),
          e0(e, t);
      }
      function e0(e, t) {
        switch (t.type) {
          case f.CHARACTER:
            e3(e, t);
            break;
          case f.WHITESPACE_CHARACTER:
            e1(e, t);
            break;
          case f.COMMENT:
            eq(e, t);
            break;
          case f.START_TAG:
            e6(e, t);
            break;
          case f.END_TAG:
            e7(e, t);
            break;
          case f.EOF:
            te(e, t);
        }
      }
      function e1(e, t) {
        e._reconstructActiveFormattingElements(), e._insertCharacters(t);
      }
      function e3(e, t) {
        e._reconstructActiveFormattingElements(),
          e._insertCharacters(t),
          (e.framesetOk = !1);
      }
      function e5(e, t) {
        e._reconstructActiveFormattingElements(),
          e._appendElement(t, B.HTML),
          (e.framesetOk = !1),
          (t.ackSelfClosing = !0);
      }
      function e8(e) {
        let t = c(e, H.TYPE);
        return null != t && "hidden" === t.toLowerCase();
      }
      function e2(e, t) {
        e._switchToTextParsing(t, et.RAWTEXT);
      }
      function e4(e, t) {
        e._reconstructActiveFormattingElements(), e._insertElement(t, B.HTML);
      }
      function e6(e, t) {
        switch (t.tagID) {
          case G.I:
          case G.S:
          case G.B:
          case G.U:
          case G.EM:
          case G.TT:
          case G.BIG:
          case G.CODE:
          case G.FONT:
          case G.SMALL:
          case G.STRIKE:
          case G.STRONG:
            e._reconstructActiveFormattingElements(),
              e._insertElement(t, B.HTML),
              e.activeFormattingElements.pushElement(e.openElements.current, t);
            break;
          case G.A:
            !(function (e, t) {
              let s =
                e.activeFormattingElements.getElementEntryInScopeWithTagName(
                  U.A,
                );
              s &&
                (eQ(e, t),
                e.openElements.remove(s.element),
                e.activeFormattingElements.removeEntry(s)),
                e._reconstructActiveFormattingElements(),
                e._insertElement(t, B.HTML),
                e.activeFormattingElements.pushElement(
                  e.openElements.current,
                  t,
                );
            })(e, t);
            break;
          case G.H1:
          case G.H2:
          case G.H3:
          case G.H4:
          case G.H5:
          case G.H6:
            e.openElements.hasInButtonScope(G.P) && e._closePElement(),
              $(e.openElements.currentTagId) && e.openElements.pop(),
              e._insertElement(t, B.HTML);
            break;
          case G.P:
          case G.DL:
          case G.OL:
          case G.UL:
          case G.DIV:
          case G.DIR:
          case G.NAV:
          case G.MAIN:
          case G.MENU:
          case G.ASIDE:
          case G.CENTER:
          case G.FIGURE:
          case G.FOOTER:
          case G.HEADER:
          case G.HGROUP:
          case G.DIALOG:
          case G.DETAILS:
          case G.ADDRESS:
          case G.ARTICLE:
          case G.SECTION:
          case G.SUMMARY:
          case G.FIELDSET:
          case G.BLOCKQUOTE:
          case G.FIGCAPTION:
            e.openElements.hasInButtonScope(G.P) && e._closePElement(),
              e._insertElement(t, B.HTML);
            break;
          case G.LI:
          case G.DD:
          case G.DT:
            !(function (e, t) {
              e.framesetOk = !1;
              let s = t.tagID;
              for (let t = e.openElements.stackTop; t >= 0; t--) {
                let a = e.openElements.tagIDs[t];
                if (
                  (s === G.LI && a === G.LI) ||
                  ((s === G.DD || s === G.DT) && (a === G.DD || a === G.DT))
                ) {
                  e.openElements.generateImpliedEndTagsWithExclusion(a),
                    e.openElements.popUntilTagNamePopped(a);
                  break;
                }
                if (
                  a !== G.ADDRESS &&
                  a !== G.DIV &&
                  a !== G.P &&
                  e._isSpecialElement(e.openElements.items[t], a)
                )
                  break;
              }
              e.openElements.hasInButtonScope(G.P) && e._closePElement(),
                e._insertElement(t, B.HTML);
            })(e, t);
            break;
          case G.BR:
          case G.IMG:
          case G.WBR:
          case G.AREA:
          case G.EMBED:
          case G.KEYGEN:
            e5(e, t);
            break;
          case G.HR:
            e.openElements.hasInButtonScope(G.P) && e._closePElement(),
              e._appendElement(t, B.HTML),
              (e.framesetOk = !1),
              (t.ackSelfClosing = !0);
            break;
          case G.RB:
          case G.RTC:
            e.openElements.hasInScope(G.RUBY) &&
              e.openElements.generateImpliedEndTags(),
              e._insertElement(t, B.HTML);
            break;
          case G.RT:
          case G.RP:
            e.openElements.hasInScope(G.RUBY) &&
              e.openElements.generateImpliedEndTagsWithExclusion(G.RTC),
              e._insertElement(t, B.HTML);
            break;
          case G.PRE:
          case G.LISTING:
            e.openElements.hasInButtonScope(G.P) && e._closePElement(),
              e._insertElement(t, B.HTML),
              (e.skipNextNewLine = !0),
              (e.framesetOk = !1);
            break;
          case G.XMP:
            e.openElements.hasInButtonScope(G.P) && e._closePElement(),
              e._reconstructActiveFormattingElements(),
              (e.framesetOk = !1),
              e._switchToTextParsing(t, et.RAWTEXT);
            break;
          case G.SVG:
            e._reconstructActiveFormattingElements(),
              eG(t),
              ey(t),
              t.selfClosing
                ? e._appendElement(t, B.SVG)
                : e._insertElement(t, B.SVG),
              (t.ackSelfClosing = !0);
            break;
          case G.HTML:
            0 === e.openElements.tmplCount &&
              e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
            break;
          case G.BASE:
          case G.LINK:
          case G.META:
          case G.STYLE:
          case G.TITLE:
          case G.SCRIPT:
          case G.BGSOUND:
          case G.BASEFONT:
          case G.TEMPLATE:
            ez(e, t);
            break;
          case G.BODY:
            !(function (e, t) {
              let s = e.openElements.tryPeekProperlyNestedBodyElement();
              s &&
                0 === e.openElements.tmplCount &&
                ((e.framesetOk = !1),
                e.treeAdapter.adoptAttributes(s, t.attrs));
            })(e, t);
            break;
          case G.FORM:
            !(function (e, t) {
              let s = e.openElements.tmplCount > 0;
              (e.formElement && !s) ||
                (e.openElements.hasInButtonScope(G.P) && e._closePElement(),
                e._insertElement(t, B.HTML),
                s || (e.formElement = e.openElements.current));
            })(e, t);
            break;
          case G.NOBR:
            e._reconstructActiveFormattingElements(),
              e.openElements.hasInScope(G.NOBR) &&
                (eQ(e, t), e._reconstructActiveFormattingElements()),
              e._insertElement(t, B.HTML),
              e.activeFormattingElements.pushElement(e.openElements.current, t);
            break;
          case G.MATH:
            e._reconstructActiveFormattingElements(),
              eU(t),
              ey(t),
              t.selfClosing
                ? e._appendElement(t, B.MATHML)
                : e._insertElement(t, B.MATHML),
              (t.ackSelfClosing = !0);
            break;
          case G.TABLE:
            e.treeAdapter.getDocumentMode(e.document) !== F.QUIRKS &&
              e.openElements.hasInButtonScope(G.P) &&
              e._closePElement(),
              e._insertElement(t, B.HTML),
              (e.framesetOk = !1),
              (e.insertionMode = x.IN_TABLE);
            break;
          case G.INPUT:
            e._reconstructActiveFormattingElements(),
              e._appendElement(t, B.HTML),
              e8(t) || (e.framesetOk = !1),
              (t.ackSelfClosing = !0);
            break;
          case G.PARAM:
          case G.TRACK:
          case G.SOURCE:
            e._appendElement(t, B.HTML), (t.ackSelfClosing = !0);
            break;
          case G.IMAGE:
            (t.tagName = U.IMG), (t.tagID = G.IMG), e5(e, t);
            break;
          case G.BUTTON:
            e.openElements.hasInScope(G.BUTTON) &&
              (e.openElements.generateImpliedEndTags(),
              e.openElements.popUntilTagNamePopped(G.BUTTON)),
              e._reconstructActiveFormattingElements(),
              e._insertElement(t, B.HTML),
              (e.framesetOk = !1);
            break;
          case G.APPLET:
          case G.OBJECT:
          case G.MARQUEE:
            e._reconstructActiveFormattingElements(),
              e._insertElement(t, B.HTML),
              e.activeFormattingElements.insertMarker(),
              (e.framesetOk = !1);
            break;
          case G.IFRAME:
            (e.framesetOk = !1), e._switchToTextParsing(t, et.RAWTEXT);
            break;
          case G.SELECT:
            e._reconstructActiveFormattingElements(),
              e._insertElement(t, B.HTML),
              (e.framesetOk = !1),
              (e.insertionMode =
                e.insertionMode === x.IN_TABLE ||
                e.insertionMode === x.IN_CAPTION ||
                e.insertionMode === x.IN_TABLE_BODY ||
                e.insertionMode === x.IN_ROW ||
                e.insertionMode === x.IN_CELL
                  ? x.IN_SELECT_IN_TABLE
                  : x.IN_SELECT);
            break;
          case G.OPTION:
          case G.OPTGROUP:
            e.openElements.currentTagId === G.OPTION && e.openElements.pop(),
              e._reconstructActiveFormattingElements(),
              e._insertElement(t, B.HTML);
            break;
          case G.NOEMBED:
            e2(e, t);
            break;
          case G.FRAMESET:
            !(function (e, t) {
              let s = e.openElements.tryPeekProperlyNestedBodyElement();
              e.framesetOk &&
                s &&
                (e.treeAdapter.detachNode(s),
                e.openElements.popAllUpToHtmlElement(),
                e._insertElement(t, B.HTML),
                (e.insertionMode = x.IN_FRAMESET));
            })(e, t);
            break;
          case G.TEXTAREA:
            e._insertElement(t, B.HTML),
              (e.skipNextNewLine = !0),
              (e.tokenizer.state = et.RCDATA),
              (e.originalInsertionMode = e.insertionMode),
              (e.framesetOk = !1),
              (e.insertionMode = x.TEXT);
            break;
          case G.NOSCRIPT:
            e.options.scriptingEnabled ? e2(e, t) : e4(e, t);
            break;
          case G.PLAINTEXT:
            e.openElements.hasInButtonScope(G.P) && e._closePElement(),
              e._insertElement(t, B.HTML),
              (e.tokenizer.state = et.PLAINTEXT);
            break;
          case G.COL:
          case G.TH:
          case G.TD:
          case G.TR:
          case G.HEAD:
          case G.FRAME:
          case G.TBODY:
          case G.TFOOT:
          case G.THEAD:
          case G.CAPTION:
          case G.COLGROUP:
            break;
          default:
            e4(e, t);
        }
      }
      function e9(e, t) {
        let s = t.tagName,
          a = t.tagID;
        for (let t = e.openElements.stackTop; t > 0; t--) {
          let r = e.openElements.items[t],
            i = e.openElements.tagIDs[t];
          if (
            a === i &&
            (a !== G.UNKNOWN || e.treeAdapter.getTagName(r) === s)
          ) {
            e.openElements.generateImpliedEndTagsWithExclusion(a),
              e.openElements.stackTop >= t && e.openElements.shortenToLength(t);
            break;
          }
          if (e._isSpecialElement(r, i)) break;
        }
      }
      function e7(e, t) {
        switch (t.tagID) {
          case G.A:
          case G.B:
          case G.I:
          case G.S:
          case G.U:
          case G.EM:
          case G.TT:
          case G.BIG:
          case G.CODE:
          case G.FONT:
          case G.NOBR:
          case G.SMALL:
          case G.STRIKE:
          case G.STRONG:
            eQ(e, t);
            break;
          case G.P:
            e.openElements.hasInButtonScope(G.P) ||
              e._insertFakeElement(U.P, G.P),
              e._closePElement();
            break;
          case G.DL:
          case G.UL:
          case G.OL:
          case G.DIR:
          case G.DIV:
          case G.NAV:
          case G.PRE:
          case G.MAIN:
          case G.MENU:
          case G.ASIDE:
          case G.BUTTON:
          case G.CENTER:
          case G.FIGURE:
          case G.FOOTER:
          case G.HEADER:
          case G.HGROUP:
          case G.DIALOG:
          case G.ADDRESS:
          case G.ARTICLE:
          case G.DETAILS:
          case G.SECTION:
          case G.SUMMARY:
          case G.LISTING:
          case G.FIELDSET:
          case G.BLOCKQUOTE:
          case G.FIGCAPTION:
            !(function (e, t) {
              let s = t.tagID;
              e.openElements.hasInScope(s) &&
                (e.openElements.generateImpliedEndTags(),
                e.openElements.popUntilTagNamePopped(s));
            })(e, t);
            break;
          case G.LI:
            e.openElements.hasInListItemScope(G.LI) &&
              (e.openElements.generateImpliedEndTagsWithExclusion(G.LI),
              e.openElements.popUntilTagNamePopped(G.LI));
            break;
          case G.DD:
          case G.DT:
            !(function (e, t) {
              let s = t.tagID;
              e.openElements.hasInScope(s) &&
                (e.openElements.generateImpliedEndTagsWithExclusion(s),
                e.openElements.popUntilTagNamePopped(s));
            })(e, t);
            break;
          case G.H1:
          case G.H2:
          case G.H3:
          case G.H4:
          case G.H5:
          case G.H6:
            e.openElements.hasNumberedHeaderInScope() &&
              (e.openElements.generateImpliedEndTags(),
              e.openElements.popUntilNumberedHeaderPopped());
            break;
          case G.BR:
            e._reconstructActiveFormattingElements(),
              e._insertFakeElement(U.BR, G.BR),
              e.openElements.pop(),
              (e.framesetOk = !1);
            break;
          case G.BODY:
            !(function (e, t) {
              if (
                e.openElements.hasInScope(G.BODY) &&
                ((e.insertionMode = x.AFTER_BODY),
                e.options.sourceCodeLocationInfo)
              ) {
                let s = e.openElements.tryPeekProperlyNestedBodyElement();
                s && e._setEndLocation(s, t);
              }
            })(e, t);
            break;
          case G.HTML:
            e.openElements.hasInScope(G.BODY) &&
              ((e.insertionMode = x.AFTER_BODY), tp(e, t));
            break;
          case G.FORM:
            !(function (e) {
              let t = e.openElements.tmplCount > 0,
                { formElement: s } = e;
              t || (e.formElement = null),
                (s || t) &&
                  e.openElements.hasInScope(G.FORM) &&
                  (e.openElements.generateImpliedEndTags(),
                  t
                    ? e.openElements.popUntilTagNamePopped(G.FORM)
                    : s && e.openElements.remove(s));
            })(e);
            break;
          case G.APPLET:
          case G.OBJECT:
          case G.MARQUEE:
            !(function (e, t) {
              let s = t.tagID;
              e.openElements.hasInScope(s) &&
                (e.openElements.generateImpliedEndTags(),
                e.openElements.popUntilTagNamePopped(s),
                e.activeFormattingElements.clearToLastMarker());
            })(e, t);
            break;
          case G.TEMPLATE:
            eJ(e, t);
            break;
          default:
            e9(e, t);
        }
      }
      function te(e, t) {
        e.tmplInsertionModeStack.length > 0 ? tu(e, t) : eW(e, t);
      }
      function tt(e, t) {
        if (ex.has(e.openElements.currentTagId))
          switch (
            ((e.pendingCharacterTokens.length = 0),
            (e.hasNonWhitespacePendingCharacterToken = !1),
            (e.originalInsertionMode = e.insertionMode),
            (e.insertionMode = x.IN_TABLE_TEXT),
            t.type)
          ) {
            case f.CHARACTER:
              tn(e, t);
              break;
            case f.WHITESPACE_CHARACTER:
              ti(e, t);
          }
        else tr(e, t);
      }
      function ts(e, t) {
        switch (t.tagID) {
          case G.TD:
          case G.TH:
          case G.TR:
            e.openElements.clearBackToTableContext(),
              e._insertFakeElement(U.TBODY, G.TBODY),
              (e.insertionMode = x.IN_TABLE_BODY),
              th(e, t);
            break;
          case G.STYLE:
          case G.SCRIPT:
          case G.TEMPLATE:
            ez(e, t);
            break;
          case G.COL:
            e.openElements.clearBackToTableContext(),
              e._insertFakeElement(U.COLGROUP, G.COLGROUP),
              (e.insertionMode = x.IN_COLUMN_GROUP),
              tc(e, t);
            break;
          case G.FORM:
            e.formElement ||
              0 !== e.openElements.tmplCount ||
              (e._insertElement(t, B.HTML),
              (e.formElement = e.openElements.current),
              e.openElements.pop());
            break;
          case G.TABLE:
            e.openElements.hasInTableScope(G.TABLE) &&
              (e.openElements.popUntilTagNamePopped(G.TABLE),
              e._resetInsertionMode(),
              e._processStartTag(t));
            break;
          case G.TBODY:
          case G.TFOOT:
          case G.THEAD:
            e.openElements.clearBackToTableContext(),
              e._insertElement(t, B.HTML),
              (e.insertionMode = x.IN_TABLE_BODY);
            break;
          case G.INPUT:
            e8(t) ? e._appendElement(t, B.HTML) : tr(e, t),
              (t.ackSelfClosing = !0);
            break;
          case G.CAPTION:
            e.openElements.clearBackToTableContext(),
              e.activeFormattingElements.insertMarker(),
              e._insertElement(t, B.HTML),
              (e.insertionMode = x.IN_CAPTION);
            break;
          case G.COLGROUP:
            e.openElements.clearBackToTableContext(),
              e._insertElement(t, B.HTML),
              (e.insertionMode = x.IN_COLUMN_GROUP);
            break;
          default:
            tr(e, t);
        }
      }
      function ta(e, t) {
        switch (t.tagID) {
          case G.TABLE:
            e.openElements.hasInTableScope(G.TABLE) &&
              (e.openElements.popUntilTagNamePopped(G.TABLE),
              e._resetInsertionMode());
            break;
          case G.TEMPLATE:
            eJ(e, t);
            break;
          case G.BODY:
          case G.CAPTION:
          case G.COL:
          case G.COLGROUP:
          case G.HTML:
          case G.TBODY:
          case G.TD:
          case G.TFOOT:
          case G.TH:
          case G.THEAD:
          case G.TR:
            break;
          default:
            tr(e, t);
        }
      }
      function tr(e, t) {
        let s = e.fosterParentingEnabled;
        (e.fosterParentingEnabled = !0),
          e0(e, t),
          (e.fosterParentingEnabled = s);
      }
      function ti(e, t) {
        e.pendingCharacterTokens.push(t);
      }
      function tn(e, t) {
        e.pendingCharacterTokens.push(t),
          (e.hasNonWhitespacePendingCharacterToken = !0);
      }
      function to(e, t) {
        let s = 0;
        if (e.hasNonWhitespacePendingCharacterToken)
          for (; s < e.pendingCharacterTokens.length; s++)
            tr(e, e.pendingCharacterTokens[s]);
        else
          for (; s < e.pendingCharacterTokens.length; s++)
            e._insertCharacters(e.pendingCharacterTokens[s]);
        (e.insertionMode = e.originalInsertionMode), e._processToken(t);
      }
      let tE = new Set([
        G.CAPTION,
        G.COL,
        G.COLGROUP,
        G.TBODY,
        G.TD,
        G.TFOOT,
        G.TH,
        G.THEAD,
        G.TR,
      ]);
      function tc(e, t) {
        switch (t.tagID) {
          case G.HTML:
            e6(e, t);
            break;
          case G.COL:
            e._appendElement(t, B.HTML), (t.ackSelfClosing = !0);
            break;
          case G.TEMPLATE:
            ez(e, t);
            break;
          default:
            tT(e, t);
        }
      }
      function tT(e, t) {
        e.openElements.currentTagId === G.COLGROUP &&
          (e.openElements.pop(),
          (e.insertionMode = x.IN_TABLE),
          e._processToken(t));
      }
      function th(e, t) {
        switch (t.tagID) {
          case G.TR:
            e.openElements.clearBackToTableBodyContext(),
              e._insertElement(t, B.HTML),
              (e.insertionMode = x.IN_ROW);
            break;
          case G.TH:
          case G.TD:
            e.openElements.clearBackToTableBodyContext(),
              e._insertFakeElement(U.TR, G.TR),
              (e.insertionMode = x.IN_ROW),
              tA(e, t);
            break;
          case G.CAPTION:
          case G.COL:
          case G.COLGROUP:
          case G.TBODY:
          case G.TFOOT:
          case G.THEAD:
            e.openElements.hasTableBodyContextInTableScope() &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = x.IN_TABLE),
              ts(e, t));
            break;
          default:
            ts(e, t);
        }
      }
      function t_(e, t) {
        let s = t.tagID;
        switch (t.tagID) {
          case G.TBODY:
          case G.TFOOT:
          case G.THEAD:
            e.openElements.hasInTableScope(s) &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = x.IN_TABLE));
            break;
          case G.TABLE:
            e.openElements.hasTableBodyContextInTableScope() &&
              (e.openElements.clearBackToTableBodyContext(),
              e.openElements.pop(),
              (e.insertionMode = x.IN_TABLE),
              ta(e, t));
            break;
          case G.BODY:
          case G.CAPTION:
          case G.COL:
          case G.COLGROUP:
          case G.HTML:
          case G.TD:
          case G.TH:
          case G.TR:
            break;
          default:
            ta(e, t);
        }
      }
      function tA(e, t) {
        switch (t.tagID) {
          case G.TH:
          case G.TD:
            e.openElements.clearBackToTableRowContext(),
              e._insertElement(t, B.HTML),
              (e.insertionMode = x.IN_CELL),
              e.activeFormattingElements.insertMarker();
            break;
          case G.CAPTION:
          case G.COL:
          case G.COLGROUP:
          case G.TBODY:
          case G.TFOOT:
          case G.THEAD:
          case G.TR:
            e.openElements.hasInTableScope(G.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = x.IN_TABLE_BODY),
              th(e, t));
            break;
          default:
            ts(e, t);
        }
      }
      function tl(e, t) {
        switch (t.tagID) {
          case G.TR:
            e.openElements.hasInTableScope(G.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = x.IN_TABLE_BODY));
            break;
          case G.TABLE:
            e.openElements.hasInTableScope(G.TR) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = x.IN_TABLE_BODY),
              t_(e, t));
            break;
          case G.TBODY:
          case G.TFOOT:
          case G.THEAD:
            (e.openElements.hasInTableScope(t.tagID) ||
              e.openElements.hasInTableScope(G.TR)) &&
              (e.openElements.clearBackToTableRowContext(),
              e.openElements.pop(),
              (e.insertionMode = x.IN_TABLE_BODY),
              t_(e, t));
            break;
          case G.BODY:
          case G.CAPTION:
          case G.COL:
          case G.COLGROUP:
          case G.HTML:
          case G.TD:
          case G.TH:
            break;
          default:
            ta(e, t);
        }
      }
      function td(e, t) {
        switch (t.tagID) {
          case G.HTML:
            e6(e, t);
            break;
          case G.OPTION:
            e.openElements.currentTagId === G.OPTION && e.openElements.pop(),
              e._insertElement(t, B.HTML);
            break;
          case G.OPTGROUP:
            e.openElements.currentTagId === G.OPTION && e.openElements.pop(),
              e.openElements.currentTagId === G.OPTGROUP &&
                e.openElements.pop(),
              e._insertElement(t, B.HTML);
            break;
          case G.INPUT:
          case G.KEYGEN:
          case G.TEXTAREA:
          case G.SELECT:
            e.openElements.hasInSelectScope(G.SELECT) &&
              (e.openElements.popUntilTagNamePopped(G.SELECT),
              e._resetInsertionMode(),
              t.tagID !== G.SELECT && e._processStartTag(t));
            break;
          case G.SCRIPT:
          case G.TEMPLATE:
            ez(e, t);
        }
      }
      function tm(e, t) {
        switch (t.tagID) {
          case G.OPTGROUP:
            e.openElements.stackTop > 0 &&
              e.openElements.currentTagId === G.OPTION &&
              e.openElements.tagIDs[e.openElements.stackTop - 1] ===
                G.OPTGROUP &&
              e.openElements.pop(),
              e.openElements.currentTagId === G.OPTGROUP &&
                e.openElements.pop();
            break;
          case G.OPTION:
            e.openElements.currentTagId === G.OPTION && e.openElements.pop();
            break;
          case G.SELECT:
            e.openElements.hasInSelectScope(G.SELECT) &&
              (e.openElements.popUntilTagNamePopped(G.SELECT),
              e._resetInsertionMode());
            break;
          case G.TEMPLATE:
            eJ(e, t);
        }
      }
      function tu(e, t) {
        e.openElements.tmplCount > 0
          ? (e.openElements.popUntilTagNamePopped(G.TEMPLATE),
            e.activeFormattingElements.clearToLastMarker(),
            e.tmplInsertionModeStack.shift(),
            e._resetInsertionMode(),
            e.onEof(t))
          : eW(e, t);
      }
      function tp(e, t) {
        var s;
        if (t.tagID === G.HTML) {
          if (
            (e.fragmentContext || (e.insertionMode = x.AFTER_AFTER_BODY),
            e.options.sourceCodeLocationInfo &&
              e.openElements.tagIDs[0] === G.HTML)
          ) {
            e._setEndLocation(e.openElements.items[0], t);
            let a = e.openElements.items[1];
            !a ||
              (null === (s = e.treeAdapter.getNodeSourceCodeLocation(a)) ||
              void 0 === s
                ? void 0
                : s.endTag) ||
              e._setEndLocation(a, t);
          }
        } else tN(e, t);
      }
      function tN(e, t) {
        (e.insertionMode = x.IN_BODY), e0(e, t);
      }
      function tI(e, t) {
        (e.insertionMode = x.IN_BODY), e0(e, t);
      }
      function tC(e) {
        for (
          ;
          e.treeAdapter.getNamespaceURI(e.openElements.current) !== B.HTML &&
          !e._isIntegrationPoint(
            e.openElements.currentTagId,
            e.openElements.current,
          );

        )
          e.openElements.pop();
      }
      let tS = new Map([
        [34, "&quot;"],
        [38, "&amp;"],
        [39, "&apos;"],
        [60, "&lt;"],
        [62, "&gt;"],
      ]);
      function tR(e, t) {
        return function (s) {
          let a;
          let r = 0,
            i = "";
          for (; (a = e.exec(s)); )
            r !== a.index && (i += s.substring(r, a.index)),
              (i += t.get(a[0].charCodeAt(0))),
              (r = a.index + 1);
          return i + s.substring(r);
        };
      }
      function tD(e, t, s) {
        "string" == typeof e && ((s = t), (t = e), (e = null));
        let a = ev.getFragmentParser(e, s);
        return a.tokenizer.write(t, !0), a.getFragment();
      }
      null != String.prototype.codePointAt ||
        ((e, t) =>
          (64512 & e.charCodeAt(t)) == 55296
            ? (e.charCodeAt(t) - 55296) * 1024 +
              e.charCodeAt(t + 1) -
              56320 +
              65536
            : e.charCodeAt(t)),
        tR(/[&<>'"]/g, tS),
        tR(
          /["&\u00A0]/g,
          new Map([
            [34, "&quot;"],
            [38, "&amp;"],
            [160, "&nbsp;"],
          ]),
        ),
        tR(
          /[&<>\u00A0]/g,
          new Map([
            [38, "&amp;"],
            [60, "&lt;"],
            [62, "&gt;"],
            [160, "&nbsp;"],
          ]),
        ),
        U.AREA,
        U.BASE,
        U.BASEFONT,
        U.BGSOUND,
        U.BR,
        U.COL,
        U.EMBED,
        U.FRAME,
        U.HR,
        U.IMG,
        U.INPUT,
        U.KEYGEN,
        U.LINK,
        U.META,
        U.PARAM,
        U.SOURCE,
        U.TRACK,
        U.WBR;
    },
  },
]);
