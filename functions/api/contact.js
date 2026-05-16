"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onRequestPost = void 0;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var onRequestPost = exports.onRequestPost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context) {
    var formData, turnstileToken, verifyRes, verifyData, name, email, phone, service, message, tokenRes, errorText, tokenData, emailHtml, graphRes, _errorText, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return context.request.formData();
        case 1:
          formData = _context.v;
          // Turnstile verification
          turnstileToken = String(formData.get("cf-turnstile-response") || "");
          if (turnstileToken) {
            _context.n = 2;
            break;
          }
          return _context.a(2, new Response("Missing verification", {
            status: 400
          }));
        case 2:
          _context.n = 3;
          return fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
              secret: context.env.TURNSTILE_SECRET_KEY,
              response: turnstileToken
            })
          });
        case 3:
          verifyRes = _context.v;
          _context.n = 4;
          return verifyRes.json();
        case 4:
          verifyData = _context.v;
          if (verifyData.success) {
            _context.n = 5;
            break;
          }
          return _context.a(2, new Response("Bot verification failed", {
            status: 403
          }));
        case 5:
          name = String(formData.get("name") || "").trim();
          email = String(formData.get("email") || "").trim();
          phone = String(formData.get("phone") || "").trim();
          service = String(formData.get("service") || "").trim();
          message = String(formData.get("message") || "").trim();
          if (!(!name || !email || !message)) {
            _context.n = 6;
            break;
          }
          return _context.a(2, new Response("Missing required fields", {
            status: 400
          }));
        case 6:
          _context.n = 7;
          return fetch("https://login.microsoftonline.com/".concat(context.env.AZURE_TENANT_ID, "/oauth2/v2.0/token"), {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
              client_id: context.env.AZURE_CLIENT_ID,
              client_secret: context.env.AZURE_CLIENT_SECRET,
              scope: "https://graph.microsoft.com/.default",
              grant_type: "client_credentials"
            })
          });
        case 7:
          tokenRes = _context.v;
          if (tokenRes.ok) {
            _context.n = 9;
            break;
          }
          _context.n = 8;
          return tokenRes.text();
        case 8:
          errorText = _context.v;
          console.error("Token error:", errorText);
          return _context.a(2, new Response("Failed to authenticate email service", {
            status: 500
          }));
        case 9:
          _context.n = 10;
          return tokenRes.json();
        case 10:
          tokenData = _context.v;
          emailHtml = "\n      <h2>New Website Contact Form Submission</h2>\n      <p><strong>Name:</strong> ".concat(name, "</p>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <p><strong>Phone:</strong> ").concat(phone || "Not provided", "</p>\n      <p><strong>Service:</strong> ").concat(service || "Not selected", "</p>\n      <p><strong>Message:</strong></p>\n      <p>").concat(message.replace(/\n/g, "<br>"), "</p>\n    ");
          _context.n = 11;
          return fetch("https://graph.microsoft.com/v1.0/users/".concat(context.env.GRAPH_FROM_EMAIL, "/sendMail"), {
            method: "POST",
            headers: {
              Authorization: "Bearer ".concat(tokenData.access_token),
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              message: {
                subject: "New Nova Website Inquiry".concat(service ? " - ".concat(service) : ""),
                body: {
                  contentType: "HTML",
                  content: emailHtml
                },
                toRecipients: [{
                  emailAddress: {
                    address: context.env.GRAPH_TO_EMAIL
                  }
                }],
                replyTo: [{
                  emailAddress: {
                    address: email,
                    name: name
                  }
                }]
              },
              saveToSentItems: true
            })
          });
        case 11:
          graphRes = _context.v;
          if (graphRes.ok) {
            _context.n = 13;
            break;
          }
          _context.n = 12;
          return graphRes.text();
        case 12:
          _errorText = _context.v;
          console.error("Graph sendMail error:", _errorText);
          return _context.a(2, new Response("Failed to send message", {
            status: 500
          }));
        case 13:
          return _context.a(2, Response.json({
            success: true
          }));
        case 14:
          _context.p = 14;
          _t = _context.v;
          console.error("Contact form error:", _t);
          return _context.a(2, new Response("Server error", {
            status: 500
          }));
      }
    }, _callee, null, [[0, 14]]);
  }));
  return function onRequestPost(_x) {
    return _ref.apply(this, arguments);
  };
}();