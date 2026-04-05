"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onRequestPost = void 0;
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
var EmailMessage = /*#__PURE__*/_createClass(function EmailMessage() {
  _classCallCheck(this, EmailMessage);
});
function escapeHtml(value) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}
function buildMimeEmail(params) {
  var boundary = "boundary_".concat(crypto.randomUUID());
  var headers = ["From: ".concat(params.from), "To: ".concat(params.to), "Subject: ".concat(params.subject), "MIME-Version: 1.0", "Content-Type: multipart/alternative; boundary=\"".concat(boundary, "\"")].concat(_toConsumableArray(params.replyTo ? ["Reply-To: ".concat(params.replyTo)] : [])).join("\r\n");
  var body = ["--".concat(boundary), "Content-Type: text/plain; charset=UTF-8", "", params.text, "", "--".concat(boundary), "Content-Type: text/html; charset=UTF-8", "", params.html, "", "--".concat(boundary, "--"), ""].join("\r\n");
  return "".concat(headers, "\r\n\r\n").concat(body);
}
var onRequestPost = exports.onRequestPost = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(context) {
    var contentType, formData, name, email, phone, propertyType, service, _message, safeName, safeEmail, safePhone, safePropertyType, safeService, safeMessage, _to, _from, subject, text, html, _raw, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          contentType = context.request.headers.get("content-type") || "";
          if (!(!contentType.includes("application/x-www-form-urlencoded") && !contentType.includes("multipart/form-data"))) {
            _context.n = 1;
            break;
          }
          return _context.a(2, new Response("Unsupported content type", {
            status: 415
          }));
        case 1:
          _context.n = 2;
          return context.request.formData();
        case 2:
          formData = _context.v;
          name = String(formData.get("name") || "").trim();
          email = String(formData.get("email") || "").trim();
          phone = String(formData.get("phone") || "").trim();
          propertyType = String(formData.get("propertyType") || "").trim();
          service = String(formData.get("service") || "").trim();
          _message = String(formData.get("message") || "").trim();
          if (!(!name || !email || !service || !_message)) {
            _context.n = 3;
            break;
          }
          return _context.a(2, new Response("Missing required fields", {
            status: 400
          }));
        case 3:
          safeName = escapeHtml(name);
          safeEmail = escapeHtml(email);
          safePhone = escapeHtml(phone);
          safePropertyType = escapeHtml(propertyType);
          safeService = escapeHtml(service);
          safeMessage = escapeHtml(_message).replace(/\n/g, "<br>");
          _to = "your-verified-inbox@example.com";
          _from = "website@yourdomain.com";
          subject = "New quote request: ".concat(service);
          text = ["New website quote request", "", "Name: ".concat(name), "Email: ".concat(email), "Phone: ".concat(phone), "Property Type: ".concat(propertyType), "Service: ".concat(service), "", "Message:", _message].join("\n");
          html = "\n        <h2>New website quote request</h2>\n        <p><strong>Name:</strong> ".concat(safeName, "</p>\n        <p><strong>Email:</strong> ").concat(safeEmail, "</p>\n        <p><strong>Phone:</strong> ").concat(safePhone, "</p>\n        <p><strong>Property Type:</strong> ").concat(safePropertyType, "</p>\n        <p><strong>Service:</strong> ").concat(safeService, "</p>\n        <p><strong>Message:</strong><br>").concat(safeMessage, "</p>\n      ");
          _raw = buildMimeEmail({
            from: _from,
            to: _to,
            replyTo: email,
            subject: subject,
            text: text,
            html: html
          });
          _context.n = 4;
          return context.env.CONTACT_NOTIFICATION_EMAIL.send(new EmailMessage(_from, _to, _raw));
        case 4:
          return _context.a(2, new Response(null, {
            status: 303,
            headers: {
              Location: "/contact/thank-you"
            }
          }));
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.error("Contact form error:", _t);
          return _context.a(2, new Response("Server error", {
            status: 500
          }));
      }
    }, _callee, null, [[0, 5]]);
  }));
  return function onRequestPost(_x) {
    return _ref.apply(this, arguments);
  };
}();