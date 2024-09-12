var Xa = { exports: {} }, _r = {}, Oi = { exports: {} }, K = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Aa;
function lf() {
  if (Aa) return K;
  Aa = 1;
  var a = Symbol.for("react.element"), p = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), P = Symbol.for("react.context"), _ = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), U = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), V = Symbol.iterator;
  function H(f) {
    return f === null || typeof f != "object" ? null : (f = V && f[V] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var de = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, ie = Object.assign, B = {};
  function F(f, w, G) {
    this.props = f, this.context = w, this.refs = B, this.updater = G || de;
  }
  F.prototype.isReactComponent = {}, F.prototype.setState = function(f, w) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, w, "setState");
  }, F.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function re() {
  }
  re.prototype = F.prototype;
  function ge(f, w, G) {
    this.props = f, this.context = w, this.refs = B, this.updater = G || de;
  }
  var Te = ge.prototype = new re();
  Te.constructor = ge, ie(Te, F.prototype), Te.isPureReactComponent = !0;
  var fe = Array.isArray, Oe = Object.prototype.hasOwnProperty, ze = { current: null }, Le = { key: !0, ref: !0, __self: !0, __source: !0 };
  function We(f, w, G) {
    var Y, Z = {}, J = null, oe = null;
    if (w != null) for (Y in w.ref !== void 0 && (oe = w.ref), w.key !== void 0 && (J = "" + w.key), w) Oe.call(w, Y) && !Le.hasOwnProperty(Y) && (Z[Y] = w[Y]);
    var te = arguments.length - 2;
    if (te === 1) Z.children = G;
    else if (1 < te) {
      for (var pe = Array(te), Je = 0; Je < te; Je++) pe[Je] = arguments[Je + 2];
      Z.children = pe;
    }
    if (f && f.defaultProps) for (Y in te = f.defaultProps, te) Z[Y] === void 0 && (Z[Y] = te[Y]);
    return { $$typeof: a, type: f, key: J, ref: oe, props: Z, _owner: ze.current };
  }
  function rt(f, w) {
    return { $$typeof: a, type: f.type, key: w, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function be(f) {
    return typeof f == "object" && f !== null && f.$$typeof === a;
  }
  function ct(f) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(G) {
      return w[G];
    });
  }
  var X = /\/+/g;
  function Ie(f, w) {
    return typeof f == "object" && f !== null && f.key != null ? ct("" + f.key) : w.toString(36);
  }
  function Fe(f, w, G, Y, Z) {
    var J = typeof f;
    (J === "undefined" || J === "boolean") && (f = null);
    var oe = !1;
    if (f === null) oe = !0;
    else switch (J) {
      case "string":
      case "number":
        oe = !0;
        break;
      case "object":
        switch (f.$$typeof) {
          case a:
          case p:
            oe = !0;
        }
    }
    if (oe) return oe = f, Z = Z(oe), f = Y === "" ? "." + Ie(oe, 0) : Y, fe(Z) ? (G = "", f != null && (G = f.replace(X, "$&/") + "/"), Fe(Z, w, G, "", function(Je) {
      return Je;
    })) : Z != null && (be(Z) && (Z = rt(Z, G + (!Z.key || oe && oe.key === Z.key ? "" : ("" + Z.key).replace(X, "$&/") + "/") + f)), w.push(Z)), 1;
    if (oe = 0, Y = Y === "" ? "." : Y + ":", fe(f)) for (var te = 0; te < f.length; te++) {
      J = f[te];
      var pe = Y + Ie(J, te);
      oe += Fe(J, w, G, pe, Z);
    }
    else if (pe = H(f), typeof pe == "function") for (f = pe.call(f), te = 0; !(J = f.next()).done; ) J = J.value, pe = Y + Ie(J, te++), oe += Fe(J, w, G, pe, Z);
    else if (J === "object") throw w = String(f), Error("Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead.");
    return oe;
  }
  function Ze(f, w, G) {
    if (f == null) return f;
    var Y = [], Z = 0;
    return Fe(f, Y, "", "", function(J) {
      return w.call(G, J, Z++);
    }), Y;
  }
  function Ce(f) {
    if (f._status === -1) {
      var w = f._result;
      w = w(), w.then(function(G) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = G);
      }, function(G) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = G);
      }), f._status === -1 && (f._status = 0, f._result = w);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ue = { current: null }, z = { transition: null }, I = { ReactCurrentDispatcher: ue, ReactCurrentBatchConfig: z, ReactCurrentOwner: ze };
  function R() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return K.Children = { map: Ze, forEach: function(f, w, G) {
    Ze(f, function() {
      w.apply(this, arguments);
    }, G);
  }, count: function(f) {
    var w = 0;
    return Ze(f, function() {
      w++;
    }), w;
  }, toArray: function(f) {
    return Ze(f, function(w) {
      return w;
    }) || [];
  }, only: function(f) {
    if (!be(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, K.Component = F, K.Fragment = s, K.Profiler = E, K.PureComponent = ge, K.StrictMode = v, K.Suspense = O, K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, K.act = R, K.cloneElement = function(f, w, G) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var Y = ie({}, f.props), Z = f.key, J = f.ref, oe = f._owner;
    if (w != null) {
      if (w.ref !== void 0 && (J = w.ref, oe = ze.current), w.key !== void 0 && (Z = "" + w.key), f.type && f.type.defaultProps) var te = f.type.defaultProps;
      for (pe in w) Oe.call(w, pe) && !Le.hasOwnProperty(pe) && (Y[pe] = w[pe] === void 0 && te !== void 0 ? te[pe] : w[pe]);
    }
    var pe = arguments.length - 2;
    if (pe === 1) Y.children = G;
    else if (1 < pe) {
      te = Array(pe);
      for (var Je = 0; Je < pe; Je++) te[Je] = arguments[Je + 2];
      Y.children = te;
    }
    return { $$typeof: a, type: f.type, key: Z, ref: J, props: Y, _owner: oe };
  }, K.createContext = function(f) {
    return f = { $$typeof: P, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: S, _context: f }, f.Consumer = f;
  }, K.createElement = We, K.createFactory = function(f) {
    var w = We.bind(null, f);
    return w.type = f, w;
  }, K.createRef = function() {
    return { current: null };
  }, K.forwardRef = function(f) {
    return { $$typeof: _, render: f };
  }, K.isValidElement = be, K.lazy = function(f) {
    return { $$typeof: $, _payload: { _status: -1, _result: f }, _init: Ce };
  }, K.memo = function(f, w) {
    return { $$typeof: U, type: f, compare: w === void 0 ? null : w };
  }, K.startTransition = function(f) {
    var w = z.transition;
    z.transition = {};
    try {
      f();
    } finally {
      z.transition = w;
    }
  }, K.unstable_act = R, K.useCallback = function(f, w) {
    return ue.current.useCallback(f, w);
  }, K.useContext = function(f) {
    return ue.current.useContext(f);
  }, K.useDebugValue = function() {
  }, K.useDeferredValue = function(f) {
    return ue.current.useDeferredValue(f);
  }, K.useEffect = function(f, w) {
    return ue.current.useEffect(f, w);
  }, K.useId = function() {
    return ue.current.useId();
  }, K.useImperativeHandle = function(f, w, G) {
    return ue.current.useImperativeHandle(f, w, G);
  }, K.useInsertionEffect = function(f, w) {
    return ue.current.useInsertionEffect(f, w);
  }, K.useLayoutEffect = function(f, w) {
    return ue.current.useLayoutEffect(f, w);
  }, K.useMemo = function(f, w) {
    return ue.current.useMemo(f, w);
  }, K.useReducer = function(f, w, G) {
    return ue.current.useReducer(f, w, G);
  }, K.useRef = function(f) {
    return ue.current.useRef(f);
  }, K.useState = function(f) {
    return ue.current.useState(f);
  }, K.useSyncExternalStore = function(f, w, G) {
    return ue.current.useSyncExternalStore(f, w, G);
  }, K.useTransition = function() {
    return ue.current.useTransition();
  }, K.version = "18.3.1", K;
}
var Ua;
function Wi() {
  return Ua || (Ua = 1, Oi.exports = lf()), Oi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Va;
function uf() {
  if (Va) return _r;
  Va = 1;
  var a = Wi(), p = Symbol.for("react.element"), s = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, E = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(_, O, U) {
    var $, V = {}, H = null, de = null;
    U !== void 0 && (H = "" + U), O.key !== void 0 && (H = "" + O.key), O.ref !== void 0 && (de = O.ref);
    for ($ in O) v.call(O, $) && !S.hasOwnProperty($) && (V[$] = O[$]);
    if (_ && _.defaultProps) for ($ in O = _.defaultProps, O) V[$] === void 0 && (V[$] = O[$]);
    return { $$typeof: p, type: _, key: H, ref: de, props: V, _owner: E.current };
  }
  return _r.Fragment = s, _r.jsx = P, _r.jsxs = P, _r;
}
Xa.exports = uf();
var ee = Xa.exports;
const sf = (a) => a.replace(/-([a-z])/g, (p, s) => s.toUpperCase());
var Ai = {}, ba = { exports: {} }, Xe = {}, Ii = { exports: {} }, Fi = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wa;
function af() {
  return Wa || (Wa = 1, function(a) {
    function p(z, I) {
      var R = z.length;
      z.push(I);
      e: for (; 0 < R; ) {
        var f = R - 1 >>> 1, w = z[f];
        if (0 < E(w, I)) z[f] = I, z[R] = w, R = f;
        else break e;
      }
    }
    function s(z) {
      return z.length === 0 ? null : z[0];
    }
    function v(z) {
      if (z.length === 0) return null;
      var I = z[0], R = z.pop();
      if (R !== I) {
        z[0] = R;
        e: for (var f = 0, w = z.length, G = w >>> 1; f < G; ) {
          var Y = 2 * (f + 1) - 1, Z = z[Y], J = Y + 1, oe = z[J];
          if (0 > E(Z, R)) J < w && 0 > E(oe, Z) ? (z[f] = oe, z[J] = R, f = J) : (z[f] = Z, z[Y] = R, f = Y);
          else if (J < w && 0 > E(oe, R)) z[f] = oe, z[J] = R, f = J;
          else break e;
        }
      }
      return I;
    }
    function E(z, I) {
      var R = z.sortIndex - I.sortIndex;
      return R !== 0 ? R : z.id - I.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var S = performance;
      a.unstable_now = function() {
        return S.now();
      };
    } else {
      var P = Date, _ = P.now();
      a.unstable_now = function() {
        return P.now() - _;
      };
    }
    var O = [], U = [], $ = 1, V = null, H = 3, de = !1, ie = !1, B = !1, F = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, ge = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Te(z) {
      for (var I = s(U); I !== null; ) {
        if (I.callback === null) v(U);
        else if (I.startTime <= z) v(U), I.sortIndex = I.expirationTime, p(O, I);
        else break;
        I = s(U);
      }
    }
    function fe(z) {
      if (B = !1, Te(z), !ie) if (s(O) !== null) ie = !0, Ce(Oe);
      else {
        var I = s(U);
        I !== null && ue(fe, I.startTime - z);
      }
    }
    function Oe(z, I) {
      ie = !1, B && (B = !1, re(We), We = -1), de = !0;
      var R = H;
      try {
        for (Te(I), V = s(O); V !== null && (!(V.expirationTime > I) || z && !ct()); ) {
          var f = V.callback;
          if (typeof f == "function") {
            V.callback = null, H = V.priorityLevel;
            var w = f(V.expirationTime <= I);
            I = a.unstable_now(), typeof w == "function" ? V.callback = w : V === s(O) && v(O), Te(I);
          } else v(O);
          V = s(O);
        }
        if (V !== null) var G = !0;
        else {
          var Y = s(U);
          Y !== null && ue(fe, Y.startTime - I), G = !1;
        }
        return G;
      } finally {
        V = null, H = R, de = !1;
      }
    }
    var ze = !1, Le = null, We = -1, rt = 5, be = -1;
    function ct() {
      return !(a.unstable_now() - be < rt);
    }
    function X() {
      if (Le !== null) {
        var z = a.unstable_now();
        be = z;
        var I = !0;
        try {
          I = Le(!0, z);
        } finally {
          I ? Ie() : (ze = !1, Le = null);
        }
      } else ze = !1;
    }
    var Ie;
    if (typeof ge == "function") Ie = function() {
      ge(X);
    };
    else if (typeof MessageChannel < "u") {
      var Fe = new MessageChannel(), Ze = Fe.port2;
      Fe.port1.onmessage = X, Ie = function() {
        Ze.postMessage(null);
      };
    } else Ie = function() {
      F(X, 0);
    };
    function Ce(z) {
      Le = z, ze || (ze = !0, Ie());
    }
    function ue(z, I) {
      We = F(function() {
        z(a.unstable_now());
      }, I);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, a.unstable_continueExecution = function() {
      ie || de || (ie = !0, Ce(Oe));
    }, a.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : rt = 0 < z ? Math.floor(1e3 / z) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, a.unstable_getFirstCallbackNode = function() {
      return s(O);
    }, a.unstable_next = function(z) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var I = 3;
          break;
        default:
          I = H;
      }
      var R = H;
      H = I;
      try {
        return z();
      } finally {
        H = R;
      }
    }, a.unstable_pauseExecution = function() {
    }, a.unstable_requestPaint = function() {
    }, a.unstable_runWithPriority = function(z, I) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var R = H;
      H = z;
      try {
        return I();
      } finally {
        H = R;
      }
    }, a.unstable_scheduleCallback = function(z, I, R) {
      var f = a.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? f + R : f) : R = f, z) {
        case 1:
          var w = -1;
          break;
        case 2:
          w = 250;
          break;
        case 5:
          w = 1073741823;
          break;
        case 4:
          w = 1e4;
          break;
        default:
          w = 5e3;
      }
      return w = R + w, z = { id: $++, callback: I, priorityLevel: z, startTime: R, expirationTime: w, sortIndex: -1 }, R > f ? (z.sortIndex = R, p(U, z), s(O) === null && z === s(U) && (B ? (re(We), We = -1) : B = !0, ue(fe, R - f))) : (z.sortIndex = w, p(O, z), ie || de || (ie = !0, Ce(Oe))), z;
    }, a.unstable_shouldYield = ct, a.unstable_wrapCallback = function(z) {
      var I = H;
      return function() {
        var R = H;
        H = I;
        try {
          return z.apply(this, arguments);
        } finally {
          H = R;
        }
      };
    };
  }(Fi)), Fi;
}
var Ba;
function cf() {
  return Ba || (Ba = 1, Ii.exports = af()), Ii.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $a;
function df() {
  if ($a) return Xe;
  $a = 1;
  var a = Wi(), p = cf();
  function s(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var v = /* @__PURE__ */ new Set(), E = {};
  function S(e, t) {
    P(e, t), P(e + "Capture", t);
  }
  function P(e, t) {
    for (E[e] = t, e = 0; e < t.length; e++) v.add(t[e]);
  }
  var _ = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), O = Object.prototype.hasOwnProperty, U = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, $ = {}, V = {};
  function H(e) {
    return O.call(V, e) ? !0 : O.call($, e) ? !1 : U.test(e) ? V[e] = !0 : ($[e] = !0, !1);
  }
  function de(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function ie(e, t, n, r) {
    if (t === null || typeof t > "u" || de(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function B(e, t, n, r, o, l, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = l, this.removeEmptyString = i;
  }
  var F = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    F[e] = new B(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    F[t] = new B(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    F[e] = new B(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    F[e] = new B(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    F[e] = new B(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    F[e] = new B(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    F[e] = new B(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    F[e] = new B(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    F[e] = new B(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var re = /[\-:]([a-z])/g;
  function ge(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      re,
      ge
    );
    F[t] = new B(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(re, ge);
    F[t] = new B(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(re, ge);
    F[t] = new B(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    F[e] = new B(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), F.xlinkHref = new B("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    F[e] = new B(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Te(e, t, n, r) {
    var o = F.hasOwnProperty(t) ? F[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (ie(t, n, o, r) && (n = null), r || o === null ? H(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName, r = o.attributeNamespace, n === null ? e.removeAttribute(t) : (o = o.type, n = o === 3 || o === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var fe = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Oe = Symbol.for("react.element"), ze = Symbol.for("react.portal"), Le = Symbol.for("react.fragment"), We = Symbol.for("react.strict_mode"), rt = Symbol.for("react.profiler"), be = Symbol.for("react.provider"), ct = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), Fe = Symbol.for("react.suspense_list"), Ze = Symbol.for("react.memo"), Ce = Symbol.for("react.lazy"), ue = Symbol.for("react.offscreen"), z = Symbol.iterator;
  function I(e) {
    return e === null || typeof e != "object" ? null : (e = z && e[z] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var R = Object.assign, f;
  function w(e) {
    if (f === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      f = t && t[1] || "";
    }
    return `
` + f + e;
  }
  var G = !1;
  function Y(e, t) {
    if (!e || G) return "";
    G = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (g) {
          var r = g;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (g) {
          r = g;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (g) {
          r = g;
        }
        e();
      }
    } catch (g) {
      if (g && r && typeof g.stack == "string") {
        for (var o = g.stack.split(`
`), l = r.stack.split(`
`), i = o.length - 1, u = l.length - 1; 1 <= i && 0 <= u && o[i] !== l[u]; ) u--;
        for (; 1 <= i && 0 <= u; i--, u--) if (o[i] !== l[u]) {
          if (i !== 1 || u !== 1)
            do
              if (i--, u--, 0 > u || o[i] !== l[u]) {
                var c = `
` + o[i].replace(" at new ", " at ");
                return e.displayName && c.includes("<anonymous>") && (c = c.replace("<anonymous>", e.displayName)), c;
              }
            while (1 <= i && 0 <= u);
          break;
        }
      }
    } finally {
      G = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? w(e) : "";
  }
  function Z(e) {
    switch (e.tag) {
      case 5:
        return w(e.type);
      case 16:
        return w("Lazy");
      case 13:
        return w("Suspense");
      case 19:
        return w("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Y(e.type, !1), e;
      case 11:
        return e = Y(e.type.render, !1), e;
      case 1:
        return e = Y(e.type, !0), e;
      default:
        return "";
    }
  }
  function J(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Le:
        return "Fragment";
      case ze:
        return "Portal";
      case rt:
        return "Profiler";
      case We:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case Fe:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case ct:
        return (e.displayName || "Context") + ".Consumer";
      case be:
        return (e._context.displayName || "Context") + ".Provider";
      case X:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case Ze:
        return t = e.displayName || null, t !== null ? t : J(e.type) || "Memo";
      case Ce:
        t = e._payload, e = e._init;
        try {
          return J(e(t));
        } catch {
        }
    }
    return null;
  }
  function oe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return J(t);
      case 8:
        return t === We ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function te(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function pe(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Je(e) {
    var t = pe(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, l = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return o.call(this);
      }, set: function(i) {
        r = "" + i, l.call(this, i);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Rr(e) {
    e._valueTracker || (e._valueTracker = Je(e));
  }
  function Hi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = pe(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Tr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Wo(e, t) {
    var n = t.checked;
    return R({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Qi(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = te(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Gi(e, t) {
    t = t.checked, t != null && Te(e, "checked", t, !1);
  }
  function Bo(e, t) {
    Gi(e, t);
    var n = te(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? $o(e, t.type, n) : t.hasOwnProperty("defaultValue") && $o(e, t.type, te(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Ki(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function $o(e, t, n) {
    (t !== "number" || Tr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Vn = Array.isArray;
  function pn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + te(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ho(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(s(91));
    return R({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Yi(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(s(92));
        if (Vn(n)) {
          if (1 < n.length) throw Error(s(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: te(n) };
  }
  function Xi(e, t) {
    var n = te(t.value), r = te(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function bi(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Zi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Qo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Zi(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var Lr, Ji = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, o);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (Lr = Lr || document.createElement("div"), Lr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Lr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Wn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, ac = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bn).forEach(function(e) {
    ac.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Bn[t] = Bn[e];
    });
  });
  function qi(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bn.hasOwnProperty(e) && Bn[e] ? ("" + t).trim() : t + "px";
  }
  function eu(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, o = qi(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o;
    }
  }
  var cc = R({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Go(e, t) {
    if (t) {
      if (cc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(s(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(s(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(s(62));
    }
  }
  function Ko(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Yo = null;
  function Xo(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var bo = null, mn = null, hn = null;
  function tu(e) {
    if (e = cr(e)) {
      if (typeof bo != "function") throw Error(s(280));
      var t = e.stateNode;
      t && (t = eo(t), bo(e.stateNode, e.type, t));
    }
  }
  function nu(e) {
    mn ? hn ? hn.push(e) : hn = [e] : mn = e;
  }
  function ru() {
    if (mn) {
      var e = mn, t = hn;
      if (hn = mn = null, tu(e), t) for (e = 0; e < t.length; e++) tu(t[e]);
    }
  }
  function ou(e, t) {
    return e(t);
  }
  function lu() {
  }
  var Zo = !1;
  function iu(e, t, n) {
    if (Zo) return e(t, n);
    Zo = !0;
    try {
      return ou(e, t, n);
    } finally {
      Zo = !1, (mn !== null || hn !== null) && (lu(), ru());
    }
  }
  function $n(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = eo(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(s(231, t, typeof n));
    return n;
  }
  var Jo = !1;
  if (_) try {
    var Hn = {};
    Object.defineProperty(Hn, "passive", { get: function() {
      Jo = !0;
    } }), window.addEventListener("test", Hn, Hn), window.removeEventListener("test", Hn, Hn);
  } catch {
    Jo = !1;
  }
  function dc(e, t, n, r, o, l, i, u, c) {
    var g = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, g);
    } catch (k) {
      this.onError(k);
    }
  }
  var Qn = !1, jr = null, Mr = !1, qo = null, fc = { onError: function(e) {
    Qn = !0, jr = e;
  } };
  function pc(e, t, n, r, o, l, i, u, c) {
    Qn = !1, jr = null, dc.apply(fc, arguments);
  }
  function mc(e, t, n, r, o, l, i, u, c) {
    if (pc.apply(this, arguments), Qn) {
      if (Qn) {
        var g = jr;
        Qn = !1, jr = null;
      } else throw Error(s(198));
      Mr || (Mr = !0, qo = g);
    }
  }
  function qt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function uu(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function su(e) {
    if (qt(e) !== e) throw Error(s(188));
  }
  function hc(e) {
    var t = e.alternate;
    if (!t) {
      if (t = qt(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var l = o.alternate;
      if (l === null) {
        if (r = o.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === l.child) {
        for (l = o.child; l; ) {
          if (l === n) return su(o), e;
          if (l === r) return su(o), t;
          l = l.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== r.return) n = o, r = l;
      else {
        for (var i = !1, u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) {
          for (u = l.child; u; ) {
            if (u === n) {
              i = !0, n = l, r = o;
              break;
            }
            if (u === r) {
              i = !0, r = l, n = o;
              break;
            }
            u = u.sibling;
          }
          if (!i) throw Error(s(189));
        }
      }
      if (n.alternate !== r) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function au(e) {
    return e = hc(e), e !== null ? cu(e) : null;
  }
  function cu(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = cu(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var du = p.unstable_scheduleCallback, fu = p.unstable_cancelCallback, gc = p.unstable_shouldYield, vc = p.unstable_requestPaint, ke = p.unstable_now, yc = p.unstable_getCurrentPriorityLevel, el = p.unstable_ImmediatePriority, pu = p.unstable_UserBlockingPriority, Or = p.unstable_NormalPriority, wc = p.unstable_LowPriority, mu = p.unstable_IdlePriority, Ir = null, yt = null;
  function kc(e) {
    if (yt && typeof yt.onCommitFiberRoot == "function") try {
      yt.onCommitFiberRoot(Ir, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var dt = Math.clz32 ? Math.clz32 : Cc, xc = Math.log, Sc = Math.LN2;
  function Cc(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (xc(e) / Sc | 0) | 0;
  }
  var Fr = 64, Dr = 4194304;
  function Gn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ar(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, o = e.suspendedLanes, l = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var u = i & ~o;
      u !== 0 ? r = Gn(u) : (l &= i, l !== 0 && (r = Gn(l)));
    } else i = n & ~o, i !== 0 ? r = Gn(i) : l !== 0 && (r = Gn(l));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r, l = t & -t, o >= l || o === 16 && (l & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - dt(t), o = 1 << n, r |= e[n], t &= ~o;
    return r;
  }
  function Ec(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function _c(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, l = e.pendingLanes; 0 < l; ) {
      var i = 31 - dt(l), u = 1 << i, c = o[i];
      c === -1 ? (!(u & n) || u & r) && (o[i] = Ec(u, t)) : c <= t && (e.expiredLanes |= u), l &= ~u;
    }
  }
  function tl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function hu() {
    var e = Fr;
    return Fr <<= 1, !(Fr & 4194240) && (Fr = 64), e;
  }
  function nl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Kn(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - dt(t), e[t] = n;
  }
  function zc(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - dt(n), l = 1 << o;
      t[o] = 0, r[o] = -1, e[o] = -1, n &= ~l;
    }
  }
  function rl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - dt(n), o = 1 << r;
      o & t | e[r] & t && (e[r] |= t), n &= ~o;
    }
  }
  var ne = 0;
  function gu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var vu, ol, yu, wu, ku, ll = !1, Ur = [], jt = null, Mt = null, Ot = null, Yn = /* @__PURE__ */ new Map(), Xn = /* @__PURE__ */ new Map(), It = [], Nc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function xu(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        jt = null;
        break;
      case "dragenter":
      case "dragleave":
        Mt = null;
        break;
      case "mouseover":
      case "mouseout":
        Ot = null;
        break;
      case "pointerover":
      case "pointerout":
        Yn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xn.delete(t.pointerId);
    }
  }
  function bn(e, t, n, r, o, l) {
    return e === null || e.nativeEvent !== l ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: l, targetContainers: [o] }, t !== null && (t = cr(t), t !== null && ol(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function Pc(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return jt = bn(jt, e, t, n, r, o), !0;
      case "dragenter":
        return Mt = bn(Mt, e, t, n, r, o), !0;
      case "mouseover":
        return Ot = bn(Ot, e, t, n, r, o), !0;
      case "pointerover":
        var l = o.pointerId;
        return Yn.set(l, bn(Yn.get(l) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return l = o.pointerId, Xn.set(l, bn(Xn.get(l) || null, e, t, n, r, o)), !0;
    }
    return !1;
  }
  function Su(e) {
    var t = en(e.target);
    if (t !== null) {
      var n = qt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = uu(n), t !== null) {
            e.blockedOn = t, ku(e.priority, function() {
              yu(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Vr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Yo = r, n.target.dispatchEvent(r), Yo = null;
      } else return t = cr(n), t !== null && ol(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Cu(e, t, n) {
    Vr(e) && n.delete(t);
  }
  function Rc() {
    ll = !1, jt !== null && Vr(jt) && (jt = null), Mt !== null && Vr(Mt) && (Mt = null), Ot !== null && Vr(Ot) && (Ot = null), Yn.forEach(Cu), Xn.forEach(Cu);
  }
  function Zn(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ll || (ll = !0, p.unstable_scheduleCallback(p.unstable_NormalPriority, Rc)));
  }
  function Jn(e) {
    function t(o) {
      return Zn(o, e);
    }
    if (0 < Ur.length) {
      Zn(Ur[0], e);
      for (var n = 1; n < Ur.length; n++) {
        var r = Ur[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (jt !== null && Zn(jt, e), Mt !== null && Zn(Mt, e), Ot !== null && Zn(Ot, e), Yn.forEach(t), Xn.forEach(t), n = 0; n < It.length; n++) r = It[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < It.length && (n = It[0], n.blockedOn === null); ) Su(n), n.blockedOn === null && It.shift();
  }
  var gn = fe.ReactCurrentBatchConfig, Wr = !0;
  function Tc(e, t, n, r) {
    var o = ne, l = gn.transition;
    gn.transition = null;
    try {
      ne = 1, il(e, t, n, r);
    } finally {
      ne = o, gn.transition = l;
    }
  }
  function Lc(e, t, n, r) {
    var o = ne, l = gn.transition;
    gn.transition = null;
    try {
      ne = 4, il(e, t, n, r);
    } finally {
      ne = o, gn.transition = l;
    }
  }
  function il(e, t, n, r) {
    if (Wr) {
      var o = ul(e, t, n, r);
      if (o === null) El(e, t, r, Br, n), xu(e, r);
      else if (Pc(o, e, t, n, r)) r.stopPropagation();
      else if (xu(e, r), t & 4 && -1 < Nc.indexOf(e)) {
        for (; o !== null; ) {
          var l = cr(o);
          if (l !== null && vu(l), l = ul(e, t, n, r), l === null && El(e, t, r, Br, n), l === o) break;
          o = l;
        }
        o !== null && r.stopPropagation();
      } else El(e, t, r, null, n);
    }
  }
  var Br = null;
  function ul(e, t, n, r) {
    if (Br = null, e = Xo(r), e = en(e), e !== null) if (t = qt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = uu(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Br = e, null;
  }
  function Eu(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (yc()) {
          case el:
            return 1;
          case pu:
            return 4;
          case Or:
          case wc:
            return 16;
          case mu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ft = null, sl = null, $r = null;
  function _u() {
    if ($r) return $r;
    var e, t = sl, n = t.length, r, o = "value" in Ft ? Ft.value : Ft.textContent, l = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === o[l - r]; r++) ;
    return $r = o.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Hr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Qr() {
    return !0;
  }
  function zu() {
    return !1;
  }
  function qe(e) {
    function t(n, r, o, l, i) {
      this._reactName = n, this._targetInst = o, this.type = r, this.nativeEvent = l, this.target = i, this.currentTarget = null;
      for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(l) : l[u]);
      return this.isDefaultPrevented = (l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1) ? Qr : zu, this.isPropagationStopped = zu, this;
    }
    return R(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Qr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Qr);
    }, persist: function() {
    }, isPersistent: Qr }), t;
  }
  var vn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, al = qe(vn), qn = R({}, vn, { view: 0, detail: 0 }), jc = qe(qn), cl, dl, er, Gr = R({}, qn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: pl, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== er && (er && e.type === "mousemove" ? (cl = e.screenX - er.screenX, dl = e.screenY - er.screenY) : dl = cl = 0, er = e), cl);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : dl;
  } }), Nu = qe(Gr), Mc = R({}, Gr, { dataTransfer: 0 }), Oc = qe(Mc), Ic = R({}, qn, { relatedTarget: 0 }), fl = qe(Ic), Fc = R({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Dc = qe(Fc), Ac = R({}, vn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Uc = qe(Ac), Vc = R({}, vn, { data: 0 }), Pu = qe(Vc), Wc = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Bc = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, $c = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Hc(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $c[e]) ? !!t[e] : !1;
  }
  function pl() {
    return Hc;
  }
  var Qc = R({}, qn, { key: function(e) {
    if (e.key) {
      var t = Wc[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Hr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: pl, charCode: function(e) {
    return e.type === "keypress" ? Hr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Hr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Gc = qe(Qc), Kc = R({}, Gr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ru = qe(Kc), Yc = R({}, qn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: pl }), Xc = qe(Yc), bc = R({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Zc = qe(bc), Jc = R({}, Gr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), qc = qe(Jc), ed = [9, 13, 27, 32], ml = _ && "CompositionEvent" in window, tr = null;
  _ && "documentMode" in document && (tr = document.documentMode);
  var td = _ && "TextEvent" in window && !tr, Tu = _ && (!ml || tr && 8 < tr && 11 >= tr), Lu = " ", ju = !1;
  function Mu(e, t) {
    switch (e) {
      case "keyup":
        return ed.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ou(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var yn = !1;
  function nd(e, t) {
    switch (e) {
      case "compositionend":
        return Ou(t);
      case "keypress":
        return t.which !== 32 ? null : (ju = !0, Lu);
      case "textInput":
        return e = t.data, e === Lu && ju ? null : e;
      default:
        return null;
    }
  }
  function rd(e, t) {
    if (yn) return e === "compositionend" || !ml && Mu(e, t) ? (e = _u(), $r = sl = Ft = null, yn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Tu && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var od = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function Iu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!od[e.type] : t === "textarea";
  }
  function Fu(e, t, n, r) {
    nu(r), t = Zr(t, "onChange"), 0 < t.length && (n = new al("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var nr = null, rr = null;
  function ld(e) {
    es(e, 0);
  }
  function Kr(e) {
    var t = Cn(e);
    if (Hi(t)) return e;
  }
  function id(e, t) {
    if (e === "change") return t;
  }
  var Du = !1;
  if (_) {
    var hl;
    if (_) {
      var gl = "oninput" in document;
      if (!gl) {
        var Au = document.createElement("div");
        Au.setAttribute("oninput", "return;"), gl = typeof Au.oninput == "function";
      }
      hl = gl;
    } else hl = !1;
    Du = hl && (!document.documentMode || 9 < document.documentMode);
  }
  function Uu() {
    nr && (nr.detachEvent("onpropertychange", Vu), rr = nr = null);
  }
  function Vu(e) {
    if (e.propertyName === "value" && Kr(rr)) {
      var t = [];
      Fu(t, rr, e, Xo(e)), iu(ld, t);
    }
  }
  function ud(e, t, n) {
    e === "focusin" ? (Uu(), nr = t, rr = n, nr.attachEvent("onpropertychange", Vu)) : e === "focusout" && Uu();
  }
  function sd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Kr(rr);
  }
  function ad(e, t) {
    if (e === "click") return Kr(t);
  }
  function cd(e, t) {
    if (e === "input" || e === "change") return Kr(t);
  }
  function dd(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var ft = typeof Object.is == "function" ? Object.is : dd;
  function or(e, t) {
    if (ft(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!O.call(t, o) || !ft(e[o], t[o])) return !1;
    }
    return !0;
  }
  function Wu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bu(e, t) {
    var n = Wu(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Wu(n);
    }
  }
  function $u(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $u(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Hu() {
    for (var e = window, t = Tr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Tr(e.document);
    }
    return t;
  }
  function vl(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function fd(e) {
    var t = Hu(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && $u(n.ownerDocument.documentElement, n)) {
      if (r !== null && vl(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var o = n.textContent.length, l = Math.min(r.start, o);
          r = r.end === void 0 ? l : Math.min(r.end, o), !e.extend && l > r && (o = r, r = l, l = o), o = Bu(n, l);
          var i = Bu(
            n,
            r
          );
          o && i && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(o.node, o.offset), e.removeAllRanges(), l > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var pd = _ && "documentMode" in document && 11 >= document.documentMode, wn = null, yl = null, lr = null, wl = !1;
  function Qu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    wl || wn == null || wn !== Tr(r) || (r = wn, "selectionStart" in r && vl(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), lr && or(lr, r) || (lr = r, r = Zr(yl, "onSelect"), 0 < r.length && (t = new al("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = wn)));
  }
  function Yr(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var kn = { animationend: Yr("Animation", "AnimationEnd"), animationiteration: Yr("Animation", "AnimationIteration"), animationstart: Yr("Animation", "AnimationStart"), transitionend: Yr("Transition", "TransitionEnd") }, kl = {}, Gu = {};
  _ && (Gu = document.createElement("div").style, "AnimationEvent" in window || (delete kn.animationend.animation, delete kn.animationiteration.animation, delete kn.animationstart.animation), "TransitionEvent" in window || delete kn.transitionend.transition);
  function Xr(e) {
    if (kl[e]) return kl[e];
    if (!kn[e]) return e;
    var t = kn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Gu) return kl[e] = t[n];
    return e;
  }
  var Ku = Xr("animationend"), Yu = Xr("animationiteration"), Xu = Xr("animationstart"), bu = Xr("transitionend"), Zu = /* @__PURE__ */ new Map(), Ju = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Dt(e, t) {
    Zu.set(e, t), S(t, [e]);
  }
  for (var xl = 0; xl < Ju.length; xl++) {
    var Sl = Ju[xl], md = Sl.toLowerCase(), hd = Sl[0].toUpperCase() + Sl.slice(1);
    Dt(md, "on" + hd);
  }
  Dt(Ku, "onAnimationEnd"), Dt(Yu, "onAnimationIteration"), Dt(Xu, "onAnimationStart"), Dt("dblclick", "onDoubleClick"), Dt("focusin", "onFocus"), Dt("focusout", "onBlur"), Dt(bu, "onTransitionEnd"), P("onMouseEnter", ["mouseout", "mouseover"]), P("onMouseLeave", ["mouseout", "mouseover"]), P("onPointerEnter", ["pointerout", "pointerover"]), P("onPointerLeave", ["pointerout", "pointerover"]), S("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), S("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), S("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), S("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), S("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var ir = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gd = new Set("cancel close invalid load scroll toggle".split(" ").concat(ir));
  function qu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, mc(r, t, void 0, e), e.currentTarget = null;
  }
  function es(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], o = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i], c = u.instance, g = u.currentTarget;
          if (u = u.listener, c !== l && o.isPropagationStopped()) break e;
          qu(o, u, g), l = c;
        }
        else for (i = 0; i < r.length; i++) {
          if (u = r[i], c = u.instance, g = u.currentTarget, u = u.listener, c !== l && o.isPropagationStopped()) break e;
          qu(o, u, g), l = c;
        }
      }
    }
    if (Mr) throw e = qo, Mr = !1, qo = null, e;
  }
  function se(e, t) {
    var n = t[Tl];
    n === void 0 && (n = t[Tl] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (ts(t, e, 2, !1), n.add(r));
  }
  function Cl(e, t, n) {
    var r = 0;
    t && (r |= 4), ts(n, e, r, t);
  }
  var br = "_reactListening" + Math.random().toString(36).slice(2);
  function ur(e) {
    if (!e[br]) {
      e[br] = !0, v.forEach(function(n) {
        n !== "selectionchange" && (gd.has(n) || Cl(n, !1, e), Cl(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[br] || (t[br] = !0, Cl("selectionchange", !1, t));
    }
  }
  function ts(e, t, n, r) {
    switch (Eu(t)) {
      case 1:
        var o = Tc;
        break;
      case 4:
        o = Lc;
        break;
      default:
        o = il;
    }
    n = o.bind(null, t, n, e), o = void 0, !Jo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), r ? o !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: o }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, { passive: o }) : e.addEventListener(t, n, !1);
  }
  function El(e, t, n, r, o) {
    var l = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === o || u.nodeType === 8 && u.parentNode === o) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var c = i.tag;
          if ((c === 3 || c === 4) && (c = i.stateNode.containerInfo, c === o || c.nodeType === 8 && c.parentNode === o)) return;
          i = i.return;
        }
        for (; u !== null; ) {
          if (i = en(u), i === null) return;
          if (c = i.tag, c === 5 || c === 6) {
            r = l = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
    iu(function() {
      var g = l, k = Xo(n), x = [];
      e: {
        var y = Zu.get(e);
        if (y !== void 0) {
          var N = al, L = e;
          switch (e) {
            case "keypress":
              if (Hr(n) === 0) break e;
            case "keydown":
            case "keyup":
              N = Gc;
              break;
            case "focusin":
              L = "focus", N = fl;
              break;
            case "focusout":
              L = "blur", N = fl;
              break;
            case "beforeblur":
            case "afterblur":
              N = fl;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = Nu;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = Oc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = Xc;
              break;
            case Ku:
            case Yu:
            case Xu:
              N = Dc;
              break;
            case bu:
              N = Zc;
              break;
            case "scroll":
              N = jc;
              break;
            case "wheel":
              N = qc;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = Uc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Ru;
          }
          var j = (t & 4) !== 0, xe = !j && e === "scroll", m = j ? y !== null ? y + "Capture" : null : y;
          j = [];
          for (var d = g, h; d !== null; ) {
            h = d;
            var C = h.stateNode;
            if (h.tag === 5 && C !== null && (h = C, m !== null && (C = $n(d, m), C != null && j.push(sr(d, C, h)))), xe) break;
            d = d.return;
          }
          0 < j.length && (y = new N(y, L, null, n, k), x.push({ event: y, listeners: j }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (y = e === "mouseover" || e === "pointerover", N = e === "mouseout" || e === "pointerout", y && n !== Yo && (L = n.relatedTarget || n.fromElement) && (en(L) || L[Ct])) break e;
          if ((N || y) && (y = k.window === k ? k : (y = k.ownerDocument) ? y.defaultView || y.parentWindow : window, N ? (L = n.relatedTarget || n.toElement, N = g, L = L ? en(L) : null, L !== null && (xe = qt(L), L !== xe || L.tag !== 5 && L.tag !== 6) && (L = null)) : (N = null, L = g), N !== L)) {
            if (j = Nu, C = "onMouseLeave", m = "onMouseEnter", d = "mouse", (e === "pointerout" || e === "pointerover") && (j = Ru, C = "onPointerLeave", m = "onPointerEnter", d = "pointer"), xe = N == null ? y : Cn(N), h = L == null ? y : Cn(L), y = new j(C, d + "leave", N, n, k), y.target = xe, y.relatedTarget = h, C = null, en(k) === g && (j = new j(m, d + "enter", L, n, k), j.target = h, j.relatedTarget = xe, C = j), xe = C, N && L) t: {
              for (j = N, m = L, d = 0, h = j; h; h = xn(h)) d++;
              for (h = 0, C = m; C; C = xn(C)) h++;
              for (; 0 < d - h; ) j = xn(j), d--;
              for (; 0 < h - d; ) m = xn(m), h--;
              for (; d--; ) {
                if (j === m || m !== null && j === m.alternate) break t;
                j = xn(j), m = xn(m);
              }
              j = null;
            }
            else j = null;
            N !== null && ns(x, y, N, j, !1), L !== null && xe !== null && ns(x, xe, L, j, !0);
          }
        }
        e: {
          if (y = g ? Cn(g) : window, N = y.nodeName && y.nodeName.toLowerCase(), N === "select" || N === "input" && y.type === "file") var M = id;
          else if (Iu(y)) if (Du) M = cd;
          else {
            M = sd;
            var D = ud;
          }
          else (N = y.nodeName) && N.toLowerCase() === "input" && (y.type === "checkbox" || y.type === "radio") && (M = ad);
          if (M && (M = M(e, g))) {
            Fu(x, M, n, k);
            break e;
          }
          D && D(e, y, g), e === "focusout" && (D = y._wrapperState) && D.controlled && y.type === "number" && $o(y, "number", y.value);
        }
        switch (D = g ? Cn(g) : window, e) {
          case "focusin":
            (Iu(D) || D.contentEditable === "true") && (wn = D, yl = g, lr = null);
            break;
          case "focusout":
            lr = yl = wn = null;
            break;
          case "mousedown":
            wl = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            wl = !1, Qu(x, n, k);
            break;
          case "selectionchange":
            if (pd) break;
          case "keydown":
          case "keyup":
            Qu(x, n, k);
        }
        var A;
        if (ml) e: {
          switch (e) {
            case "compositionstart":
              var W = "onCompositionStart";
              break e;
            case "compositionend":
              W = "onCompositionEnd";
              break e;
            case "compositionupdate":
              W = "onCompositionUpdate";
              break e;
          }
          W = void 0;
        }
        else yn ? Mu(e, n) && (W = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (W = "onCompositionStart");
        W && (Tu && n.locale !== "ko" && (yn || W !== "onCompositionStart" ? W === "onCompositionEnd" && yn && (A = _u()) : (Ft = k, sl = "value" in Ft ? Ft.value : Ft.textContent, yn = !0)), D = Zr(g, W), 0 < D.length && (W = new Pu(W, e, null, n, k), x.push({ event: W, listeners: D }), A ? W.data = A : (A = Ou(n), A !== null && (W.data = A)))), (A = td ? nd(e, n) : rd(e, n)) && (g = Zr(g, "onBeforeInput"), 0 < g.length && (k = new Pu("onBeforeInput", "beforeinput", null, n, k), x.push({ event: k, listeners: g }), k.data = A));
      }
      es(x, t);
    });
  }
  function sr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Zr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e, l = o.stateNode;
      o.tag === 5 && l !== null && (o = l, l = $n(e, n), l != null && r.unshift(sr(e, l, o)), l = $n(e, t), l != null && r.push(sr(e, l, o))), e = e.return;
    }
    return r;
  }
  function xn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ns(e, t, n, r, o) {
    for (var l = t._reactName, i = []; n !== null && n !== r; ) {
      var u = n, c = u.alternate, g = u.stateNode;
      if (c !== null && c === r) break;
      u.tag === 5 && g !== null && (u = g, o ? (c = $n(n, l), c != null && i.unshift(sr(n, c, u))) : o || (c = $n(n, l), c != null && i.push(sr(n, c, u)))), n = n.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var vd = /\r\n?/g, yd = /\u0000|\uFFFD/g;
  function rs(e) {
    return (typeof e == "string" ? e : "" + e).replace(vd, `
`).replace(yd, "");
  }
  function Jr(e, t, n) {
    if (t = rs(t), rs(e) !== t && n) throw Error(s(425));
  }
  function qr() {
  }
  var _l = null, zl = null;
  function Nl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Pl = typeof setTimeout == "function" ? setTimeout : void 0, wd = typeof clearTimeout == "function" ? clearTimeout : void 0, os = typeof Promise == "function" ? Promise : void 0, kd = typeof queueMicrotask == "function" ? queueMicrotask : typeof os < "u" ? function(e) {
    return os.resolve(null).then(e).catch(xd);
  } : Pl;
  function xd(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Rl(e, t) {
    var n = t, r = 0;
    do {
      var o = n.nextSibling;
      if (e.removeChild(n), o && o.nodeType === 8) if (n = o.data, n === "/$") {
        if (r === 0) {
          e.removeChild(o), Jn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = o;
    } while (n);
    Jn(t);
  }
  function At(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function ls(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Sn = Math.random().toString(36).slice(2), wt = "__reactFiber$" + Sn, ar = "__reactProps$" + Sn, Ct = "__reactContainer$" + Sn, Tl = "__reactEvents$" + Sn, Sd = "__reactListeners$" + Sn, Cd = "__reactHandles$" + Sn;
  function en(e) {
    var t = e[wt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ct] || n[wt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = ls(e); e !== null; ) {
          if (n = e[wt]) return n;
          e = ls(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function cr(e) {
    return e = e[wt] || e[Ct], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Cn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(s(33));
  }
  function eo(e) {
    return e[ar] || null;
  }
  var Ll = [], En = -1;
  function Ut(e) {
    return { current: e };
  }
  function ae(e) {
    0 > En || (e.current = Ll[En], Ll[En] = null, En--);
  }
  function le(e, t) {
    En++, Ll[En] = e.current, e.current = t;
  }
  var Vt = {}, De = Ut(Vt), He = Ut(!1), tn = Vt;
  function _n(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Vt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, l;
    for (l in n) o[l] = t[l];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o;
  }
  function Qe(e) {
    return e = e.childContextTypes, e != null;
  }
  function to() {
    ae(He), ae(De);
  }
  function is(e, t, n) {
    if (De.current !== Vt) throw Error(s(168));
    le(De, t), le(He, n);
  }
  function us(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(s(108, oe(e) || "Unknown", o));
    return R({}, n, r);
  }
  function no(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Vt, tn = De.current, le(De, e), le(He, He.current), !0;
  }
  function ss(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(s(169));
    n ? (e = us(e, t, tn), r.__reactInternalMemoizedMergedChildContext = e, ae(He), ae(De), le(De, e)) : ae(He), le(He, n);
  }
  var Et = null, ro = !1, jl = !1;
  function as(e) {
    Et === null ? Et = [e] : Et.push(e);
  }
  function Ed(e) {
    ro = !0, as(e);
  }
  function Wt() {
    if (!jl && Et !== null) {
      jl = !0;
      var e = 0, t = ne;
      try {
        var n = Et;
        for (ne = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        Et = null, ro = !1;
      } catch (o) {
        throw Et !== null && (Et = Et.slice(e + 1)), du(el, Wt), o;
      } finally {
        ne = t, jl = !1;
      }
    }
    return null;
  }
  var zn = [], Nn = 0, oo = null, lo = 0, ot = [], lt = 0, nn = null, _t = 1, zt = "";
  function rn(e, t) {
    zn[Nn++] = lo, zn[Nn++] = oo, oo = e, lo = t;
  }
  function cs(e, t, n) {
    ot[lt++] = _t, ot[lt++] = zt, ot[lt++] = nn, nn = e;
    var r = _t;
    e = zt;
    var o = 32 - dt(r) - 1;
    r &= ~(1 << o), n += 1;
    var l = 32 - dt(t) + o;
    if (30 < l) {
      var i = o - o % 5;
      l = (r & (1 << i) - 1).toString(32), r >>= i, o -= i, _t = 1 << 32 - dt(t) + o | n << o | r, zt = l + e;
    } else _t = 1 << l | n << o | r, zt = e;
  }
  function Ml(e) {
    e.return !== null && (rn(e, 1), cs(e, 1, 0));
  }
  function Ol(e) {
    for (; e === oo; ) oo = zn[--Nn], zn[Nn] = null, lo = zn[--Nn], zn[Nn] = null;
    for (; e === nn; ) nn = ot[--lt], ot[lt] = null, zt = ot[--lt], ot[lt] = null, _t = ot[--lt], ot[lt] = null;
  }
  var et = null, tt = null, me = !1, pt = null;
  function ds(e, t) {
    var n = at(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function fs(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, et = e, tt = At(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, et = e, tt = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = nn !== null ? { id: _t, overflow: zt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = at(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, et = e, tt = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Il(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Fl(e) {
    if (me) {
      var t = tt;
      if (t) {
        var n = t;
        if (!fs(e, t)) {
          if (Il(e)) throw Error(s(418));
          t = At(n.nextSibling);
          var r = et;
          t && fs(e, t) ? ds(r, n) : (e.flags = e.flags & -4097 | 2, me = !1, et = e);
        }
      } else {
        if (Il(e)) throw Error(s(418));
        e.flags = e.flags & -4097 | 2, me = !1, et = e;
      }
    }
  }
  function ps(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    et = e;
  }
  function io(e) {
    if (e !== et) return !1;
    if (!me) return ps(e), me = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Nl(e.type, e.memoizedProps)), t && (t = tt)) {
      if (Il(e)) throw ms(), Error(s(418));
      for (; t; ) ds(e, t), t = At(t.nextSibling);
    }
    if (ps(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                tt = At(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        tt = null;
      }
    } else tt = et ? At(e.stateNode.nextSibling) : null;
    return !0;
  }
  function ms() {
    for (var e = tt; e; ) e = At(e.nextSibling);
  }
  function Pn() {
    tt = et = null, me = !1;
  }
  function Dl(e) {
    pt === null ? pt = [e] : pt.push(e);
  }
  var _d = fe.ReactCurrentBatchConfig;
  function dr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(s(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(s(147, e));
        var o = r, l = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === l ? t.ref : (t = function(i) {
          var u = o.refs;
          i === null ? delete u[l] : u[l] = i;
        }, t._stringRef = l, t);
      }
      if (typeof e != "string") throw Error(s(284));
      if (!n._owner) throw Error(s(290, e));
    }
    return e;
  }
  function uo(e, t) {
    throw e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function hs(e) {
    var t = e._init;
    return t(e._payload);
  }
  function gs(e) {
    function t(m, d) {
      if (e) {
        var h = m.deletions;
        h === null ? (m.deletions = [d], m.flags |= 16) : h.push(d);
      }
    }
    function n(m, d) {
      if (!e) return null;
      for (; d !== null; ) t(m, d), d = d.sibling;
      return null;
    }
    function r(m, d) {
      for (m = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? m.set(d.key, d) : m.set(d.index, d), d = d.sibling;
      return m;
    }
    function o(m, d) {
      return m = Xt(m, d), m.index = 0, m.sibling = null, m;
    }
    function l(m, d, h) {
      return m.index = h, e ? (h = m.alternate, h !== null ? (h = h.index, h < d ? (m.flags |= 2, d) : h) : (m.flags |= 2, d)) : (m.flags |= 1048576, d);
    }
    function i(m) {
      return e && m.alternate === null && (m.flags |= 2), m;
    }
    function u(m, d, h, C) {
      return d === null || d.tag !== 6 ? (d = Pi(h, m.mode, C), d.return = m, d) : (d = o(d, h), d.return = m, d);
    }
    function c(m, d, h, C) {
      var M = h.type;
      return M === Le ? k(m, d, h.props.children, C, h.key) : d !== null && (d.elementType === M || typeof M == "object" && M !== null && M.$$typeof === Ce && hs(M) === d.type) ? (C = o(d, h.props), C.ref = dr(m, d, h), C.return = m, C) : (C = jo(h.type, h.key, h.props, null, m.mode, C), C.ref = dr(m, d, h), C.return = m, C);
    }
    function g(m, d, h, C) {
      return d === null || d.tag !== 4 || d.stateNode.containerInfo !== h.containerInfo || d.stateNode.implementation !== h.implementation ? (d = Ri(h, m.mode, C), d.return = m, d) : (d = o(d, h.children || []), d.return = m, d);
    }
    function k(m, d, h, C, M) {
      return d === null || d.tag !== 7 ? (d = fn(h, m.mode, C, M), d.return = m, d) : (d = o(d, h), d.return = m, d);
    }
    function x(m, d, h) {
      if (typeof d == "string" && d !== "" || typeof d == "number") return d = Pi("" + d, m.mode, h), d.return = m, d;
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case Oe:
            return h = jo(d.type, d.key, d.props, null, m.mode, h), h.ref = dr(m, null, d), h.return = m, h;
          case ze:
            return d = Ri(d, m.mode, h), d.return = m, d;
          case Ce:
            var C = d._init;
            return x(m, C(d._payload), h);
        }
        if (Vn(d) || I(d)) return d = fn(d, m.mode, h, null), d.return = m, d;
        uo(m, d);
      }
      return null;
    }
    function y(m, d, h, C) {
      var M = d !== null ? d.key : null;
      if (typeof h == "string" && h !== "" || typeof h == "number") return M !== null ? null : u(m, d, "" + h, C);
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Oe:
            return h.key === M ? c(m, d, h, C) : null;
          case ze:
            return h.key === M ? g(m, d, h, C) : null;
          case Ce:
            return M = h._init, y(
              m,
              d,
              M(h._payload),
              C
            );
        }
        if (Vn(h) || I(h)) return M !== null ? null : k(m, d, h, C, null);
        uo(m, h);
      }
      return null;
    }
    function N(m, d, h, C, M) {
      if (typeof C == "string" && C !== "" || typeof C == "number") return m = m.get(h) || null, u(d, m, "" + C, M);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case Oe:
            return m = m.get(C.key === null ? h : C.key) || null, c(d, m, C, M);
          case ze:
            return m = m.get(C.key === null ? h : C.key) || null, g(d, m, C, M);
          case Ce:
            var D = C._init;
            return N(m, d, h, D(C._payload), M);
        }
        if (Vn(C) || I(C)) return m = m.get(h) || null, k(d, m, C, M, null);
        uo(d, C);
      }
      return null;
    }
    function L(m, d, h, C) {
      for (var M = null, D = null, A = d, W = d = 0, Re = null; A !== null && W < h.length; W++) {
        A.index > W ? (Re = A, A = null) : Re = A.sibling;
        var q = y(m, A, h[W], C);
        if (q === null) {
          A === null && (A = Re);
          break;
        }
        e && A && q.alternate === null && t(m, A), d = l(q, d, W), D === null ? M = q : D.sibling = q, D = q, A = Re;
      }
      if (W === h.length) return n(m, A), me && rn(m, W), M;
      if (A === null) {
        for (; W < h.length; W++) A = x(m, h[W], C), A !== null && (d = l(A, d, W), D === null ? M = A : D.sibling = A, D = A);
        return me && rn(m, W), M;
      }
      for (A = r(m, A); W < h.length; W++) Re = N(A, m, W, h[W], C), Re !== null && (e && Re.alternate !== null && A.delete(Re.key === null ? W : Re.key), d = l(Re, d, W), D === null ? M = Re : D.sibling = Re, D = Re);
      return e && A.forEach(function(bt) {
        return t(m, bt);
      }), me && rn(m, W), M;
    }
    function j(m, d, h, C) {
      var M = I(h);
      if (typeof M != "function") throw Error(s(150));
      if (h = M.call(h), h == null) throw Error(s(151));
      for (var D = M = null, A = d, W = d = 0, Re = null, q = h.next(); A !== null && !q.done; W++, q = h.next()) {
        A.index > W ? (Re = A, A = null) : Re = A.sibling;
        var bt = y(m, A, q.value, C);
        if (bt === null) {
          A === null && (A = Re);
          break;
        }
        e && A && bt.alternate === null && t(m, A), d = l(bt, d, W), D === null ? M = bt : D.sibling = bt, D = bt, A = Re;
      }
      if (q.done) return n(
        m,
        A
      ), me && rn(m, W), M;
      if (A === null) {
        for (; !q.done; W++, q = h.next()) q = x(m, q.value, C), q !== null && (d = l(q, d, W), D === null ? M = q : D.sibling = q, D = q);
        return me && rn(m, W), M;
      }
      for (A = r(m, A); !q.done; W++, q = h.next()) q = N(A, m, W, q.value, C), q !== null && (e && q.alternate !== null && A.delete(q.key === null ? W : q.key), d = l(q, d, W), D === null ? M = q : D.sibling = q, D = q);
      return e && A.forEach(function(of) {
        return t(m, of);
      }), me && rn(m, W), M;
    }
    function xe(m, d, h, C) {
      if (typeof h == "object" && h !== null && h.type === Le && h.key === null && (h = h.props.children), typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case Oe:
            e: {
              for (var M = h.key, D = d; D !== null; ) {
                if (D.key === M) {
                  if (M = h.type, M === Le) {
                    if (D.tag === 7) {
                      n(m, D.sibling), d = o(D, h.props.children), d.return = m, m = d;
                      break e;
                    }
                  } else if (D.elementType === M || typeof M == "object" && M !== null && M.$$typeof === Ce && hs(M) === D.type) {
                    n(m, D.sibling), d = o(D, h.props), d.ref = dr(m, D, h), d.return = m, m = d;
                    break e;
                  }
                  n(m, D);
                  break;
                } else t(m, D);
                D = D.sibling;
              }
              h.type === Le ? (d = fn(h.props.children, m.mode, C, h.key), d.return = m, m = d) : (C = jo(h.type, h.key, h.props, null, m.mode, C), C.ref = dr(m, d, h), C.return = m, m = C);
            }
            return i(m);
          case ze:
            e: {
              for (D = h.key; d !== null; ) {
                if (d.key === D) if (d.tag === 4 && d.stateNode.containerInfo === h.containerInfo && d.stateNode.implementation === h.implementation) {
                  n(m, d.sibling), d = o(d, h.children || []), d.return = m, m = d;
                  break e;
                } else {
                  n(m, d);
                  break;
                }
                else t(m, d);
                d = d.sibling;
              }
              d = Ri(h, m.mode, C), d.return = m, m = d;
            }
            return i(m);
          case Ce:
            return D = h._init, xe(m, d, D(h._payload), C);
        }
        if (Vn(h)) return L(m, d, h, C);
        if (I(h)) return j(m, d, h, C);
        uo(m, h);
      }
      return typeof h == "string" && h !== "" || typeof h == "number" ? (h = "" + h, d !== null && d.tag === 6 ? (n(m, d.sibling), d = o(d, h), d.return = m, m = d) : (n(m, d), d = Pi(h, m.mode, C), d.return = m, m = d), i(m)) : n(m, d);
    }
    return xe;
  }
  var Rn = gs(!0), vs = gs(!1), so = Ut(null), ao = null, Tn = null, Al = null;
  function Ul() {
    Al = Tn = ao = null;
  }
  function Vl(e) {
    var t = so.current;
    ae(so), e._currentValue = t;
  }
  function Wl(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ln(e, t) {
    ao = e, Al = Tn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ge = !0), e.firstContext = null);
  }
  function it(e) {
    var t = e._currentValue;
    if (Al !== e) if (e = { context: e, memoizedValue: t, next: null }, Tn === null) {
      if (ao === null) throw Error(s(308));
      Tn = e, ao.dependencies = { lanes: 0, firstContext: e };
    } else Tn = Tn.next = e;
    return t;
  }
  var on = null;
  function Bl(e) {
    on === null ? on = [e] : on.push(e);
  }
  function ys(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n, Bl(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Nt(e, r);
  }
  function Nt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Bt = !1;
  function $l(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ws(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Pt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function $t(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, b & 2) {
      var o = r.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Nt(e, n);
    }
    return o = r.interleaved, o === null ? (t.next = t, Bl(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Nt(e, n);
  }
  function co(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, rl(e, n);
    }
  }
  function ks(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var o = null, l = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          l === null ? o = l = i : l = l.next = i, n = n.next;
        } while (n !== null);
        l === null ? o = l = t : l = l.next = t;
      } else o = l = t;
      n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: l, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function fo(e, t, n, r) {
    var o = e.updateQueue;
    Bt = !1;
    var l = o.firstBaseUpdate, i = o.lastBaseUpdate, u = o.shared.pending;
    if (u !== null) {
      o.shared.pending = null;
      var c = u, g = c.next;
      c.next = null, i === null ? l = g : i.next = g, i = c;
      var k = e.alternate;
      k !== null && (k = k.updateQueue, u = k.lastBaseUpdate, u !== i && (u === null ? k.firstBaseUpdate = g : u.next = g, k.lastBaseUpdate = c));
    }
    if (l !== null) {
      var x = o.baseState;
      i = 0, k = g = c = null, u = l;
      do {
        var y = u.lane, N = u.eventTime;
        if ((r & y) === y) {
          k !== null && (k = k.next = {
            eventTime: N,
            lane: 0,
            tag: u.tag,
            payload: u.payload,
            callback: u.callback,
            next: null
          });
          e: {
            var L = e, j = u;
            switch (y = t, N = n, j.tag) {
              case 1:
                if (L = j.payload, typeof L == "function") {
                  x = L.call(N, x, y);
                  break e;
                }
                x = L;
                break e;
              case 3:
                L.flags = L.flags & -65537 | 128;
              case 0:
                if (L = j.payload, y = typeof L == "function" ? L.call(N, x, y) : L, y == null) break e;
                x = R({}, x, y);
                break e;
              case 2:
                Bt = !0;
            }
          }
          u.callback !== null && u.lane !== 0 && (e.flags |= 64, y = o.effects, y === null ? o.effects = [u] : y.push(u));
        } else N = { eventTime: N, lane: y, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, k === null ? (g = k = N, c = x) : k = k.next = N, i |= y;
        if (u = u.next, u === null) {
          if (u = o.shared.pending, u === null) break;
          y = u, u = y.next, y.next = null, o.lastBaseUpdate = y, o.shared.pending = null;
        }
      } while (!0);
      if (k === null && (c = x), o.baseState = c, o.firstBaseUpdate = g, o.lastBaseUpdate = k, t = o.shared.interleaved, t !== null) {
        o = t;
        do
          i |= o.lane, o = o.next;
        while (o !== t);
      } else l === null && (o.shared.lanes = 0);
      sn |= i, e.lanes = i, e.memoizedState = x;
    }
  }
  function xs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], o = r.callback;
      if (o !== null) {
        if (r.callback = null, r = n, typeof o != "function") throw Error(s(191, o));
        o.call(r);
      }
    }
  }
  var fr = {}, kt = Ut(fr), pr = Ut(fr), mr = Ut(fr);
  function ln(e) {
    if (e === fr) throw Error(s(174));
    return e;
  }
  function Hl(e, t) {
    switch (le(mr, t), le(pr, e), le(kt, fr), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Qo(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Qo(t, e);
    }
    ae(kt), le(kt, t);
  }
  function jn() {
    ae(kt), ae(pr), ae(mr);
  }
  function Ss(e) {
    ln(mr.current);
    var t = ln(kt.current), n = Qo(t, e.type);
    t !== n && (le(pr, e), le(kt, n));
  }
  function Ql(e) {
    pr.current === e && (ae(kt), ae(pr));
  }
  var ve = Ut(0);
  function po(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Gl = [];
  function Kl() {
    for (var e = 0; e < Gl.length; e++) Gl[e]._workInProgressVersionPrimary = null;
    Gl.length = 0;
  }
  var mo = fe.ReactCurrentDispatcher, Yl = fe.ReactCurrentBatchConfig, un = 0, ye = null, Ee = null, Ne = null, ho = !1, hr = !1, gr = 0, zd = 0;
  function Ae() {
    throw Error(s(321));
  }
  function Xl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!ft(e[n], t[n])) return !1;
    return !0;
  }
  function bl(e, t, n, r, o, l) {
    if (un = l, ye = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, mo.current = e === null || e.memoizedState === null ? Td : Ld, e = n(r, o), hr) {
      l = 0;
      do {
        if (hr = !1, gr = 0, 25 <= l) throw Error(s(301));
        l += 1, Ne = Ee = null, t.updateQueue = null, mo.current = jd, e = n(r, o);
      } while (hr);
    }
    if (mo.current = yo, t = Ee !== null && Ee.next !== null, un = 0, Ne = Ee = ye = null, ho = !1, t) throw Error(s(300));
    return e;
  }
  function Zl() {
    var e = gr !== 0;
    return gr = 0, e;
  }
  function xt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Ne === null ? ye.memoizedState = Ne = e : Ne = Ne.next = e, Ne;
  }
  function ut() {
    if (Ee === null) {
      var e = ye.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ee.next;
    var t = Ne === null ? ye.memoizedState : Ne.next;
    if (t !== null) Ne = t, Ee = e;
    else {
      if (e === null) throw Error(s(310));
      Ee = e, e = { memoizedState: Ee.memoizedState, baseState: Ee.baseState, baseQueue: Ee.baseQueue, queue: Ee.queue, next: null }, Ne === null ? ye.memoizedState = Ne = e : Ne = Ne.next = e;
    }
    return Ne;
  }
  function vr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Jl(e) {
    var t = ut(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = Ee, o = r.baseQueue, l = n.pending;
    if (l !== null) {
      if (o !== null) {
        var i = o.next;
        o.next = l.next, l.next = i;
      }
      r.baseQueue = o = l, n.pending = null;
    }
    if (o !== null) {
      l = o.next, r = r.baseState;
      var u = i = null, c = null, g = l;
      do {
        var k = g.lane;
        if ((un & k) === k) c !== null && (c = c.next = { lane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), r = g.hasEagerState ? g.eagerState : e(r, g.action);
        else {
          var x = {
            lane: k,
            action: g.action,
            hasEagerState: g.hasEagerState,
            eagerState: g.eagerState,
            next: null
          };
          c === null ? (u = c = x, i = r) : c = c.next = x, ye.lanes |= k, sn |= k;
        }
        g = g.next;
      } while (g !== null && g !== l);
      c === null ? i = r : c.next = u, ft(r, t.memoizedState) || (Ge = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = c, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      o = e;
      do
        l = o.lane, ye.lanes |= l, sn |= l, o = o.next;
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ql(e) {
    var t = ut(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, o = n.pending, l = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var i = o = o.next;
      do
        l = e(l, i.action), i = i.next;
      while (i !== o);
      ft(l, t.memoizedState) || (Ge = !0), t.memoizedState = l, t.baseQueue === null && (t.baseState = l), n.lastRenderedState = l;
    }
    return [l, r];
  }
  function Cs() {
  }
  function Es(e, t) {
    var n = ye, r = ut(), o = t(), l = !ft(r.memoizedState, o);
    if (l && (r.memoizedState = o, Ge = !0), r = r.queue, ei(Ns.bind(null, n, r, e), [e]), r.getSnapshot !== t || l || Ne !== null && Ne.memoizedState.tag & 1) {
      if (n.flags |= 2048, yr(9, zs.bind(null, n, r, o, t), void 0, null), Pe === null) throw Error(s(349));
      un & 30 || _s(n, t, o);
    }
    return o;
  }
  function _s(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ye.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function zs(e, t, n, r) {
    t.value = n, t.getSnapshot = r, Ps(t) && Rs(e);
  }
  function Ns(e, t, n) {
    return n(function() {
      Ps(t) && Rs(e);
    });
  }
  function Ps(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ft(e, n);
    } catch {
      return !0;
    }
  }
  function Rs(e) {
    var t = Nt(e, 1);
    t !== null && vt(t, e, 1, -1);
  }
  function Ts(e) {
    var t = xt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: vr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Rd.bind(null, ye, e), [t.memoizedState, e];
  }
  function yr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ye.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ye.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ls() {
    return ut().memoizedState;
  }
  function go(e, t, n, r) {
    var o = xt();
    ye.flags |= e, o.memoizedState = yr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function vo(e, t, n, r) {
    var o = ut();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (Ee !== null) {
      var i = Ee.memoizedState;
      if (l = i.destroy, r !== null && Xl(r, i.deps)) {
        o.memoizedState = yr(t, n, l, r);
        return;
      }
    }
    ye.flags |= e, o.memoizedState = yr(1 | t, n, l, r);
  }
  function js(e, t) {
    return go(8390656, 8, e, t);
  }
  function ei(e, t) {
    return vo(2048, 8, e, t);
  }
  function Ms(e, t) {
    return vo(4, 2, e, t);
  }
  function Os(e, t) {
    return vo(4, 4, e, t);
  }
  function Is(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Fs(e, t, n) {
    return n = n != null ? n.concat([e]) : null, vo(4, 4, Is.bind(null, t, e), n);
  }
  function ti() {
  }
  function Ds(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xl(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function As(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Xl(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function Us(e, t, n) {
    return un & 21 ? (ft(n, t) || (n = hu(), ye.lanes |= n, sn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ge = !0), e.memoizedState = n);
  }
  function Nd(e, t) {
    var n = ne;
    ne = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Yl.transition;
    Yl.transition = {};
    try {
      e(!1), t();
    } finally {
      ne = n, Yl.transition = r;
    }
  }
  function Vs() {
    return ut().memoizedState;
  }
  function Pd(e, t, n) {
    var r = Kt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ws(e)) Bs(t, n);
    else if (n = ys(e, t, n, r), n !== null) {
      var o = $e();
      vt(n, e, r, o), $s(n, t, r);
    }
  }
  function Rd(e, t, n) {
    var r = Kt(e), o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ws(e)) Bs(t, o);
    else {
      var l = e.alternate;
      if (e.lanes === 0 && (l === null || l.lanes === 0) && (l = t.lastRenderedReducer, l !== null)) try {
        var i = t.lastRenderedState, u = l(i, n);
        if (o.hasEagerState = !0, o.eagerState = u, ft(u, i)) {
          var c = t.interleaved;
          c === null ? (o.next = o, Bl(t)) : (o.next = c.next, c.next = o), t.interleaved = o;
          return;
        }
      } catch {
      } finally {
      }
      n = ys(e, t, o, r), n !== null && (o = $e(), vt(n, e, r, o), $s(n, t, r));
    }
  }
  function Ws(e) {
    var t = e.alternate;
    return e === ye || t !== null && t === ye;
  }
  function Bs(e, t) {
    hr = ho = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function $s(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, rl(e, n);
    }
  }
  var yo = { readContext: it, useCallback: Ae, useContext: Ae, useEffect: Ae, useImperativeHandle: Ae, useInsertionEffect: Ae, useLayoutEffect: Ae, useMemo: Ae, useReducer: Ae, useRef: Ae, useState: Ae, useDebugValue: Ae, useDeferredValue: Ae, useTransition: Ae, useMutableSource: Ae, useSyncExternalStore: Ae, useId: Ae, unstable_isNewReconciler: !1 }, Td = { readContext: it, useCallback: function(e, t) {
    return xt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: it, useEffect: js, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, go(
      4194308,
      4,
      Is.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return go(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return go(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = xt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = xt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Pd.bind(null, ye, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = xt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: Ts, useDebugValue: ti, useDeferredValue: function(e) {
    return xt().memoizedState = e;
  }, useTransition: function() {
    var e = Ts(!1), t = e[0];
    return e = Nd.bind(null, e[1]), xt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ye, o = xt();
    if (me) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else {
      if (n = t(), Pe === null) throw Error(s(349));
      un & 30 || _s(r, t, n);
    }
    o.memoizedState = n;
    var l = { value: n, getSnapshot: t };
    return o.queue = l, js(Ns.bind(
      null,
      r,
      l,
      e
    ), [e]), r.flags |= 2048, yr(9, zs.bind(null, r, l, n, t), void 0, null), n;
  }, useId: function() {
    var e = xt(), t = Pe.identifierPrefix;
    if (me) {
      var n = zt, r = _t;
      n = (r & ~(1 << 32 - dt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = gr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = zd++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, Ld = {
    readContext: it,
    useCallback: Ds,
    useContext: it,
    useEffect: ei,
    useImperativeHandle: Fs,
    useInsertionEffect: Ms,
    useLayoutEffect: Os,
    useMemo: As,
    useReducer: Jl,
    useRef: Ls,
    useState: function() {
      return Jl(vr);
    },
    useDebugValue: ti,
    useDeferredValue: function(e) {
      var t = ut();
      return Us(t, Ee.memoizedState, e);
    },
    useTransition: function() {
      var e = Jl(vr)[0], t = ut().memoizedState;
      return [e, t];
    },
    useMutableSource: Cs,
    useSyncExternalStore: Es,
    useId: Vs,
    unstable_isNewReconciler: !1
  }, jd = { readContext: it, useCallback: Ds, useContext: it, useEffect: ei, useImperativeHandle: Fs, useInsertionEffect: Ms, useLayoutEffect: Os, useMemo: As, useReducer: ql, useRef: Ls, useState: function() {
    return ql(vr);
  }, useDebugValue: ti, useDeferredValue: function(e) {
    var t = ut();
    return Ee === null ? t.memoizedState = e : Us(t, Ee.memoizedState, e);
  }, useTransition: function() {
    var e = ql(vr)[0], t = ut().memoizedState;
    return [e, t];
  }, useMutableSource: Cs, useSyncExternalStore: Es, useId: Vs, unstable_isNewReconciler: !1 };
  function mt(e, t) {
    if (e && e.defaultProps) {
      t = R({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ni(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : R({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var wo = { isMounted: function(e) {
    return (e = e._reactInternals) ? qt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), o = Kt(e), l = Pt(r, o);
    l.payload = t, n != null && (l.callback = n), t = $t(e, l, o), t !== null && (vt(t, e, o, r), co(t, e, o));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = $e(), o = Kt(e), l = Pt(r, o);
    l.tag = 1, l.payload = t, n != null && (l.callback = n), t = $t(e, l, o), t !== null && (vt(t, e, o, r), co(t, e, o));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = $e(), r = Kt(e), o = Pt(n, r);
    o.tag = 2, t != null && (o.callback = t), t = $t(e, o, r), t !== null && (vt(t, e, r, n), co(t, e, r));
  } };
  function Hs(e, t, n, r, o, l, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, l, i) : t.prototype && t.prototype.isPureReactComponent ? !or(n, r) || !or(o, l) : !0;
  }
  function Qs(e, t, n) {
    var r = !1, o = Vt, l = t.contextType;
    return typeof l == "object" && l !== null ? l = it(l) : (o = Qe(t) ? tn : De.current, r = t.contextTypes, l = (r = r != null) ? _n(e, o) : Vt), t = new t(n, l), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = wo, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = l), t;
  }
  function Gs(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && wo.enqueueReplaceState(t, t.state, null);
  }
  function ri(e, t, n, r) {
    var o = e.stateNode;
    o.props = n, o.state = e.memoizedState, o.refs = {}, $l(e);
    var l = t.contextType;
    typeof l == "object" && l !== null ? o.context = it(l) : (l = Qe(t) ? tn : De.current, o.context = _n(e, l)), o.state = e.memoizedState, l = t.getDerivedStateFromProps, typeof l == "function" && (ni(e, t, l, n), o.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state, typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(), t !== o.state && wo.enqueueReplaceState(o, o.state, null), fo(e, n, o, r), o.state = e.memoizedState), typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Mn(e, t) {
    try {
      var n = "", r = t;
      do
        n += Z(r), r = r.return;
      while (r);
      var o = n;
    } catch (l) {
      o = `
Error generating stack: ` + l.message + `
` + l.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function oi(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function li(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var Md = typeof WeakMap == "function" ? WeakMap : Map;
  function Ks(e, t, n) {
    n = Pt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      zo || (zo = !0, ki = r), li(e, t);
    }, n;
  }
  function Ys(e, t, n) {
    n = Pt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      n.payload = function() {
        return r(o);
      }, n.callback = function() {
        li(e, t);
      };
    }
    var l = e.stateNode;
    return l !== null && typeof l.componentDidCatch == "function" && (n.callback = function() {
      li(e, t), typeof r != "function" && (Qt === null ? Qt = /* @__PURE__ */ new Set([this]) : Qt.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
    }), n;
  }
  function Xs(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new Md();
      var o = /* @__PURE__ */ new Set();
      r.set(t, o);
    } else o = r.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), r.set(t, o));
    o.has(n) || (o.add(n), e = Kd.bind(null, e, t, n), t.then(e, e));
  }
  function bs(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Zs(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = o, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Pt(-1, 1), t.tag = 2, $t(n, t, 1))), n.lanes |= 1), e);
  }
  var Od = fe.ReactCurrentOwner, Ge = !1;
  function Be(e, t, n, r) {
    t.child = e === null ? vs(t, null, n, r) : Rn(t, e.child, n, r);
  }
  function Js(e, t, n, r, o) {
    n = n.render;
    var l = t.ref;
    return Ln(t, o), r = bl(e, t, n, r, l, o), n = Zl(), e !== null && !Ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rt(e, t, o)) : (me && n && Ml(t), t.flags |= 1, Be(e, t, r, o), t.child);
  }
  function qs(e, t, n, r, o) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" && !Ni(l) && l.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = l, ea(e, t, l, r, o)) : (e = jo(n.type, null, r, t, t.mode, o), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (l = e.child, !(e.lanes & o)) {
      var i = l.memoizedProps;
      if (n = n.compare, n = n !== null ? n : or, n(i, r) && e.ref === t.ref) return Rt(e, t, o);
    }
    return t.flags |= 1, e = Xt(l, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ea(e, t, n, r, o) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (or(l, r) && e.ref === t.ref) if (Ge = !1, t.pendingProps = r = l, (e.lanes & o) !== 0) e.flags & 131072 && (Ge = !0);
      else return t.lanes = e.lanes, Rt(e, t, o);
    }
    return ii(e, t, n, r, o);
  }
  function ta(e, t, n) {
    var r = t.pendingProps, o = r.children, l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, le(In, nt), nt |= n;
    else {
      if (!(n & 1073741824)) return e = l !== null ? l.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, le(In, nt), nt |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = l !== null ? l.baseLanes : n, le(In, nt), nt |= r;
    }
    else l !== null ? (r = l.baseLanes | n, t.memoizedState = null) : r = n, le(In, nt), nt |= r;
    return Be(e, t, o, n), t.child;
  }
  function na(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function ii(e, t, n, r, o) {
    var l = Qe(n) ? tn : De.current;
    return l = _n(t, l), Ln(t, o), n = bl(e, t, n, r, l, o), r = Zl(), e !== null && !Ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Rt(e, t, o)) : (me && r && Ml(t), t.flags |= 1, Be(e, t, n, o), t.child);
  }
  function ra(e, t, n, r, o) {
    if (Qe(n)) {
      var l = !0;
      no(t);
    } else l = !1;
    if (Ln(t, o), t.stateNode === null) xo(e, t), Qs(t, n, r), ri(t, n, r, o), r = !0;
    else if (e === null) {
      var i = t.stateNode, u = t.memoizedProps;
      i.props = u;
      var c = i.context, g = n.contextType;
      typeof g == "object" && g !== null ? g = it(g) : (g = Qe(n) ? tn : De.current, g = _n(t, g));
      var k = n.getDerivedStateFromProps, x = typeof k == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      x || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || c !== g) && Gs(t, i, r, g), Bt = !1;
      var y = t.memoizedState;
      i.state = y, fo(t, r, i, o), c = t.memoizedState, u !== r || y !== c || He.current || Bt ? (typeof k == "function" && (ni(t, n, k, r), c = t.memoizedState), (u = Bt || Hs(t, n, u, r, y, c, g)) ? (x || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = c), i.props = r, i.state = c, i.context = g, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      i = t.stateNode, ws(e, t), u = t.memoizedProps, g = t.type === t.elementType ? u : mt(t.type, u), i.props = g, x = t.pendingProps, y = i.context, c = n.contextType, typeof c == "object" && c !== null ? c = it(c) : (c = Qe(n) ? tn : De.current, c = _n(t, c));
      var N = n.getDerivedStateFromProps;
      (k = typeof N == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== x || y !== c) && Gs(t, i, r, c), Bt = !1, y = t.memoizedState, i.state = y, fo(t, r, i, o);
      var L = t.memoizedState;
      u !== x || y !== L || He.current || Bt ? (typeof N == "function" && (ni(t, n, N, r), L = t.memoizedState), (g = Bt || Hs(t, n, g, r, y, L, c) || !1) ? (k || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, L, c), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, L, c)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = L), i.props = r, i.state = L, i.context = c, r = g) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && y === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return ui(e, t, n, r, l, o);
  }
  function ui(e, t, n, r, o, l) {
    na(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return o && ss(t, n, !1), Rt(e, t, l);
    r = t.stateNode, Od.current = t;
    var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = Rn(t, e.child, null, l), t.child = Rn(t, null, u, l)) : Be(e, t, u, l), t.memoizedState = r.state, o && ss(t, n, !0), t.child;
  }
  function oa(e) {
    var t = e.stateNode;
    t.pendingContext ? is(e, t.pendingContext, t.pendingContext !== t.context) : t.context && is(e, t.context, !1), Hl(e, t.containerInfo);
  }
  function la(e, t, n, r, o) {
    return Pn(), Dl(o), t.flags |= 256, Be(e, t, n, r), t.child;
  }
  var si = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ai(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ia(e, t, n) {
    var r = t.pendingProps, o = ve.current, l = !1, i = (t.flags & 128) !== 0, u;
    if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0), u ? (l = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1), le(ve, o & 1), e === null)
      return Fl(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, l ? (r = t.mode, l = t.child, i = { mode: "hidden", children: i }, !(r & 1) && l !== null ? (l.childLanes = 0, l.pendingProps = i) : l = Mo(i, r, 0, null), e = fn(e, r, n, null), l.return = t, e.return = t, l.sibling = e, t.child = l, t.child.memoizedState = ai(n), t.memoizedState = si, e) : ci(t, i));
    if (o = e.memoizedState, o !== null && (u = o.dehydrated, u !== null)) return Id(e, t, i, r, u, o, n);
    if (l) {
      l = r.fallback, i = t.mode, o = e.child, u = o.sibling;
      var c = { mode: "hidden", children: r.children };
      return !(i & 1) && t.child !== o ? (r = t.child, r.childLanes = 0, r.pendingProps = c, t.deletions = null) : (r = Xt(o, c), r.subtreeFlags = o.subtreeFlags & 14680064), u !== null ? l = Xt(u, l) : (l = fn(l, i, n, null), l.flags |= 2), l.return = t, r.return = t, r.sibling = l, t.child = r, r = l, l = t.child, i = e.child.memoizedState, i = i === null ? ai(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, l.memoizedState = i, l.childLanes = e.childLanes & ~n, t.memoizedState = si, r;
    }
    return l = e.child, e = l.sibling, r = Xt(l, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ci(e, t) {
    return t = Mo({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function ko(e, t, n, r) {
    return r !== null && Dl(r), Rn(t, e.child, null, n), e = ci(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Id(e, t, n, r, o, l, i) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = oi(Error(s(422))), ko(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (l = r.fallback, o = t.mode, r = Mo({ mode: "visible", children: r.children }, o, 0, null), l = fn(l, o, i, null), l.flags |= 2, r.return = t, l.return = t, r.sibling = l, t.child = r, t.mode & 1 && Rn(t, e.child, null, i), t.child.memoizedState = ai(i), t.memoizedState = si, l);
    if (!(t.mode & 1)) return ko(e, t, i, null);
    if (o.data === "$!") {
      if (r = o.nextSibling && o.nextSibling.dataset, r) var u = r.dgst;
      return r = u, l = Error(s(419)), r = oi(l, r, void 0), ko(e, t, i, r);
    }
    if (u = (i & e.childLanes) !== 0, Ge || u) {
      if (r = Pe, r !== null) {
        switch (i & -i) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        o = o & (r.suspendedLanes | i) ? 0 : o, o !== 0 && o !== l.retryLane && (l.retryLane = o, Nt(e, o), vt(r, e, o, -1));
      }
      return zi(), r = oi(Error(s(421))), ko(e, t, i, r);
    }
    return o.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Yd.bind(null, e), o._reactRetry = t, null) : (e = l.treeContext, tt = At(o.nextSibling), et = t, me = !0, pt = null, e !== null && (ot[lt++] = _t, ot[lt++] = zt, ot[lt++] = nn, _t = e.id, zt = e.overflow, nn = t), t = ci(t, r.children), t.flags |= 4096, t);
  }
  function ua(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Wl(e.return, t, n);
  }
  function di(e, t, n, r, o) {
    var l = e.memoizedState;
    l === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o } : (l.isBackwards = t, l.rendering = null, l.renderingStartTime = 0, l.last = r, l.tail = n, l.tailMode = o);
  }
  function sa(e, t, n) {
    var r = t.pendingProps, o = r.revealOrder, l = r.tail;
    if (Be(e, t, r.children, n), r = ve.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && ua(e, n, t);
        else if (e.tag === 19) ua(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (le(ve, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; ) e = n.alternate, e !== null && po(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), di(t, !1, o, n, l);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && po(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        di(t, !0, n, null, l);
        break;
      case "together":
        di(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function xo(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function Rt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), sn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = Xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Xt(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function Fd(e, t, n) {
    switch (t.tag) {
      case 3:
        oa(t), Pn();
        break;
      case 5:
        Ss(t);
        break;
      case 1:
        Qe(t.type) && no(t);
        break;
      case 4:
        Hl(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, o = t.memoizedProps.value;
        le(so, r._currentValue), r._currentValue = o;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (le(ve, ve.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ia(e, t, n) : (le(ve, ve.current & 1), e = Rt(e, t, n), e !== null ? e.sibling : null);
        le(ve, ve.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return sa(e, t, n);
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), le(ve, ve.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, ta(e, t, n);
    }
    return Rt(e, t, n);
  }
  var aa, fi, ca, da;
  aa = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, fi = function() {
  }, ca = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      e = t.stateNode, ln(kt.current);
      var l = null;
      switch (n) {
        case "input":
          o = Wo(e, o), r = Wo(e, r), l = [];
          break;
        case "select":
          o = R({}, o, { value: void 0 }), r = R({}, r, { value: void 0 }), l = [];
          break;
        case "textarea":
          o = Ho(e, o), r = Ho(e, r), l = [];
          break;
        default:
          typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = qr);
      }
      Go(n, r);
      var i;
      n = null;
      for (g in o) if (!r.hasOwnProperty(g) && o.hasOwnProperty(g) && o[g] != null) if (g === "style") {
        var u = o[g];
        for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else g !== "dangerouslySetInnerHTML" && g !== "children" && g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && g !== "autoFocus" && (E.hasOwnProperty(g) ? l || (l = []) : (l = l || []).push(g, null));
      for (g in r) {
        var c = r[g];
        if (u = o?.[g], r.hasOwnProperty(g) && c !== u && (c != null || u != null)) if (g === "style") if (u) {
          for (i in u) !u.hasOwnProperty(i) || c && c.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in c) c.hasOwnProperty(i) && u[i] !== c[i] && (n || (n = {}), n[i] = c[i]);
        } else n || (l || (l = []), l.push(
          g,
          n
        )), n = c;
        else g === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, c != null && u !== c && (l = l || []).push(g, c)) : g === "children" ? typeof c != "string" && typeof c != "number" || (l = l || []).push(g, "" + c) : g !== "suppressContentEditableWarning" && g !== "suppressHydrationWarning" && (E.hasOwnProperty(g) ? (c != null && g === "onScroll" && se("scroll", e), l || u === c || (l = [])) : (l = l || []).push(g, c));
      }
      n && (l = l || []).push("style", n);
      var g = l;
      (t.updateQueue = g) && (t.flags |= 4);
    }
  }, da = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function wr(e, t) {
    if (!me) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ue(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags & 14680064, r |= o.flags & 14680064, o.return = e, o = o.sibling;
    else for (o = e.child; o !== null; ) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Dd(e, t, n) {
    var r = t.pendingProps;
    switch (Ol(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ue(t), null;
      case 1:
        return Qe(t.type) && to(), Ue(t), null;
      case 3:
        return r = t.stateNode, jn(), ae(He), ae(De), Kl(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (io(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, pt !== null && (Ci(pt), pt = null))), fi(e, t), Ue(t), null;
      case 5:
        Ql(t);
        var o = ln(mr.current);
        if (n = t.type, e !== null && t.stateNode != null) ca(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(s(166));
            return Ue(t), null;
          }
          if (e = ln(kt.current), io(t)) {
            r = t.stateNode, n = t.type;
            var l = t.memoizedProps;
            switch (r[wt] = t, r[ar] = l, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                se("cancel", r), se("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                se("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < ir.length; o++) se(ir[o], r);
                break;
              case "source":
                se("error", r);
                break;
              case "img":
              case "image":
              case "link":
                se(
                  "error",
                  r
                ), se("load", r);
                break;
              case "details":
                se("toggle", r);
                break;
              case "input":
                Qi(r, l), se("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!l.multiple }, se("invalid", r);
                break;
              case "textarea":
                Yi(r, l), se("invalid", r);
            }
            Go(n, l), o = null;
            for (var i in l) if (l.hasOwnProperty(i)) {
              var u = l[i];
              i === "children" ? typeof u == "string" ? r.textContent !== u && (l.suppressHydrationWarning !== !0 && Jr(r.textContent, u, e), o = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (l.suppressHydrationWarning !== !0 && Jr(
                r.textContent,
                u,
                e
              ), o = ["children", "" + u]) : E.hasOwnProperty(i) && u != null && i === "onScroll" && se("scroll", r);
            }
            switch (n) {
              case "input":
                Rr(r), Ki(r, l, !0);
                break;
              case "textarea":
                Rr(r), bi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = qr);
            }
            r = o, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = o.nodeType === 9 ? o : o.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Zi(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[wt] = t, e[ar] = r, aa(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (i = Ko(n, r), n) {
                case "dialog":
                  se("cancel", e), se("close", e), o = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  se("load", e), o = r;
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < ir.length; o++) se(ir[o], e);
                  o = r;
                  break;
                case "source":
                  se("error", e), o = r;
                  break;
                case "img":
                case "image":
                case "link":
                  se(
                    "error",
                    e
                  ), se("load", e), o = r;
                  break;
                case "details":
                  se("toggle", e), o = r;
                  break;
                case "input":
                  Qi(e, r), o = Wo(e, r), se("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, o = R({}, r, { value: void 0 }), se("invalid", e);
                  break;
                case "textarea":
                  Yi(e, r), o = Ho(e, r), se("invalid", e);
                  break;
                default:
                  o = r;
              }
              Go(n, o), u = o;
              for (l in u) if (u.hasOwnProperty(l)) {
                var c = u[l];
                l === "style" ? eu(e, c) : l === "dangerouslySetInnerHTML" ? (c = c ? c.__html : void 0, c != null && Ji(e, c)) : l === "children" ? typeof c == "string" ? (n !== "textarea" || c !== "") && Wn(e, c) : typeof c == "number" && Wn(e, "" + c) : l !== "suppressContentEditableWarning" && l !== "suppressHydrationWarning" && l !== "autoFocus" && (E.hasOwnProperty(l) ? c != null && l === "onScroll" && se("scroll", e) : c != null && Te(e, l, c, i));
              }
              switch (n) {
                case "input":
                  Rr(e), Ki(e, r, !1);
                  break;
                case "textarea":
                  Rr(e), bi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + te(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, l = r.value, l != null ? pn(e, !!r.multiple, l, !1) : r.defaultValue != null && pn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = qr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ue(t), null;
      case 6:
        if (e && t.stateNode != null) da(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(s(166));
          if (n = ln(mr.current), ln(kt.current), io(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[wt] = t, (l = r.nodeValue !== n) && (e = et, e !== null)) switch (e.tag) {
              case 3:
                Jr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Jr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            l && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[wt] = t, t.stateNode = r;
        }
        return Ue(t), null;
      case 13:
        if (ae(ve), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (me && tt !== null && t.mode & 1 && !(t.flags & 128)) ms(), Pn(), t.flags |= 98560, l = !1;
          else if (l = io(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
              l[wt] = t;
            } else Pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Ue(t), l = !1;
          } else pt !== null && (Ci(pt), pt = null), l = !0;
          if (!l) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || ve.current & 1 ? _e === 0 && (_e = 3) : zi())), t.updateQueue !== null && (t.flags |= 4), Ue(t), null);
      case 4:
        return jn(), fi(e, t), e === null && ur(t.stateNode.containerInfo), Ue(t), null;
      case 10:
        return Vl(t.type._context), Ue(t), null;
      case 17:
        return Qe(t.type) && to(), Ue(t), null;
      case 19:
        if (ae(ve), l = t.memoizedState, l === null) return Ue(t), null;
        if (r = (t.flags & 128) !== 0, i = l.rendering, i === null) if (r) wr(l, !1);
        else {
          if (_e !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (i = po(e), i !== null) {
              for (t.flags |= 128, wr(l, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) l = n, e = r, l.flags &= 14680066, i = l.alternate, i === null ? (l.childLanes = 0, l.lanes = e, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = i.childLanes, l.lanes = i.lanes, l.child = i.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = i.memoizedProps, l.memoizedState = i.memoizedState, l.updateQueue = i.updateQueue, l.type = i.type, e = i.dependencies, l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return le(ve, ve.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          l.tail !== null && ke() > Fn && (t.flags |= 128, r = !0, wr(l, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = po(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), wr(l, !0), l.tail === null && l.tailMode === "hidden" && !i.alternate && !me) return Ue(t), null;
          } else 2 * ke() - l.renderingStartTime > Fn && n !== 1073741824 && (t.flags |= 128, r = !0, wr(l, !1), t.lanes = 4194304);
          l.isBackwards ? (i.sibling = t.child, t.child = i) : (n = l.last, n !== null ? n.sibling = i : t.child = i, l.last = i);
        }
        return l.tail !== null ? (t = l.tail, l.rendering = t, l.tail = t.sibling, l.renderingStartTime = ke(), t.sibling = null, n = ve.current, le(ve, r ? n & 1 | 2 : n & 1), t) : (Ue(t), null);
      case 22:
      case 23:
        return _i(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? nt & 1073741824 && (Ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ue(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Ad(e, t) {
    switch (Ol(t), t.tag) {
      case 1:
        return Qe(t.type) && to(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return jn(), ae(He), ae(De), Kl(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Ql(t), null;
      case 13:
        if (ae(ve), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(s(340));
          Pn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ae(ve), null;
      case 4:
        return jn(), null;
      case 10:
        return Vl(t.type._context), null;
      case 22:
      case 23:
        return _i(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var So = !1, Ve = !1, Ud = typeof WeakSet == "function" ? WeakSet : Set, T = null;
  function On(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      we(e, t, r);
    }
    else n.current = null;
  }
  function pi(e, t, n) {
    try {
      n();
    } catch (r) {
      we(e, t, r);
    }
  }
  var fa = !1;
  function Vd(e, t) {
    if (_l = Wr, e = Hu(), vl(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset, l = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, l.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, u = -1, c = -1, g = 0, k = 0, x = e, y = null;
          t: for (; ; ) {
            for (var N; x !== n || o !== 0 && x.nodeType !== 3 || (u = i + o), x !== l || r !== 0 && x.nodeType !== 3 || (c = i + r), x.nodeType === 3 && (i += x.nodeValue.length), (N = x.firstChild) !== null; )
              y = x, x = N;
            for (; ; ) {
              if (x === e) break t;
              if (y === n && ++g === o && (u = i), y === l && ++k === r && (c = i), (N = x.nextSibling) !== null) break;
              x = y, y = x.parentNode;
            }
            x = N;
          }
          n = u === -1 || c === -1 ? null : { start: u, end: c };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (zl = { focusedElem: e, selectionRange: n }, Wr = !1, T = t; T !== null; ) if (t = T, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, T = e;
    else for (; T !== null; ) {
      t = T;
      try {
        var L = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (L !== null) {
              var j = L.memoizedProps, xe = L.memoizedState, m = t.stateNode, d = m.getSnapshotBeforeUpdate(t.elementType === t.type ? j : mt(t.type, j), xe);
              m.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          case 3:
            var h = t.stateNode.containerInfo;
            h.nodeType === 1 ? h.textContent = "" : h.nodeType === 9 && h.documentElement && h.removeChild(h.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(s(163));
        }
      } catch (C) {
        we(t, t.return, C);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, T = e;
        break;
      }
      T = t.return;
    }
    return L = fa, fa = !1, L;
  }
  function kr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & e) === e) {
          var l = o.destroy;
          o.destroy = void 0, l !== void 0 && pi(t, n, l);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Co(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function mi(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function pa(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, pa(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[wt], delete t[ar], delete t[Tl], delete t[Sd], delete t[Cd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ma(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function ha(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ma(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function hi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = qr));
    else if (r !== 4 && (e = e.child, e !== null)) for (hi(e, t, n), e = e.sibling; e !== null; ) hi(e, t, n), e = e.sibling;
  }
  function gi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (gi(e, t, n), e = e.sibling; e !== null; ) gi(e, t, n), e = e.sibling;
  }
  var je = null, ht = !1;
  function Ht(e, t, n) {
    for (n = n.child; n !== null; ) ga(e, t, n), n = n.sibling;
  }
  function ga(e, t, n) {
    if (yt && typeof yt.onCommitFiberUnmount == "function") try {
      yt.onCommitFiberUnmount(Ir, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        Ve || On(n, t);
      case 6:
        var r = je, o = ht;
        je = null, Ht(e, t, n), je = r, ht = o, je !== null && (ht ? (e = je, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : je.removeChild(n.stateNode));
        break;
      case 18:
        je !== null && (ht ? (e = je, n = n.stateNode, e.nodeType === 8 ? Rl(e.parentNode, n) : e.nodeType === 1 && Rl(e, n), Jn(e)) : Rl(je, n.stateNode));
        break;
      case 4:
        r = je, o = ht, je = n.stateNode.containerInfo, ht = !0, Ht(e, t, n), je = r, ht = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Ve && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          o = r = r.next;
          do {
            var l = o, i = l.destroy;
            l = l.tag, i !== void 0 && (l & 2 || l & 4) && pi(n, t, i), o = o.next;
          } while (o !== r);
        }
        Ht(e, t, n);
        break;
      case 1:
        if (!Ve && (On(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (u) {
          we(n, t, u);
        }
        Ht(e, t, n);
        break;
      case 21:
        Ht(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Ve = (r = Ve) || n.memoizedState !== null, Ht(e, t, n), Ve = r) : Ht(e, t, n);
        break;
      default:
        Ht(e, t, n);
    }
  }
  function va(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ud()), t.forEach(function(r) {
        var o = Xd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
    }
  }
  function gt(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var l = e, i = t, u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              je = u.stateNode, ht = !1;
              break e;
            case 3:
              je = u.stateNode.containerInfo, ht = !0;
              break e;
            case 4:
              je = u.stateNode.containerInfo, ht = !0;
              break e;
          }
          u = u.return;
        }
        if (je === null) throw Error(s(160));
        ga(l, i, o), je = null, ht = !1;
        var c = o.alternate;
        c !== null && (c.return = null), o.return = null;
      } catch (g) {
        we(o, t, g);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ya(t, e), t = t.sibling;
  }
  function ya(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (gt(t, e), St(e), r & 4) {
          try {
            kr(3, e, e.return), Co(3, e);
          } catch (j) {
            we(e, e.return, j);
          }
          try {
            kr(5, e, e.return);
          } catch (j) {
            we(e, e.return, j);
          }
        }
        break;
      case 1:
        gt(t, e), St(e), r & 512 && n !== null && On(n, n.return);
        break;
      case 5:
        if (gt(t, e), St(e), r & 512 && n !== null && On(n, n.return), e.flags & 32) {
          var o = e.stateNode;
          try {
            Wn(o, "");
          } catch (j) {
            we(e, e.return, j);
          }
        }
        if (r & 4 && (o = e.stateNode, o != null)) {
          var l = e.memoizedProps, i = n !== null ? n.memoizedProps : l, u = e.type, c = e.updateQueue;
          if (e.updateQueue = null, c !== null) try {
            u === "input" && l.type === "radio" && l.name != null && Gi(o, l), Ko(u, i);
            var g = Ko(u, l);
            for (i = 0; i < c.length; i += 2) {
              var k = c[i], x = c[i + 1];
              k === "style" ? eu(o, x) : k === "dangerouslySetInnerHTML" ? Ji(o, x) : k === "children" ? Wn(o, x) : Te(o, k, x, g);
            }
            switch (u) {
              case "input":
                Bo(o, l);
                break;
              case "textarea":
                Xi(o, l);
                break;
              case "select":
                var y = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!l.multiple;
                var N = l.value;
                N != null ? pn(o, !!l.multiple, N, !1) : y !== !!l.multiple && (l.defaultValue != null ? pn(
                  o,
                  !!l.multiple,
                  l.defaultValue,
                  !0
                ) : pn(o, !!l.multiple, l.multiple ? [] : "", !1));
            }
            o[ar] = l;
          } catch (j) {
            we(e, e.return, j);
          }
        }
        break;
      case 6:
        if (gt(t, e), St(e), r & 4) {
          if (e.stateNode === null) throw Error(s(162));
          o = e.stateNode, l = e.memoizedProps;
          try {
            o.nodeValue = l;
          } catch (j) {
            we(e, e.return, j);
          }
        }
        break;
      case 3:
        if (gt(t, e), St(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Jn(t.containerInfo);
        } catch (j) {
          we(e, e.return, j);
        }
        break;
      case 4:
        gt(t, e), St(e);
        break;
      case 13:
        gt(t, e), St(e), o = e.child, o.flags & 8192 && (l = o.memoizedState !== null, o.stateNode.isHidden = l, !l || o.alternate !== null && o.alternate.memoizedState !== null || (wi = ke())), r & 4 && va(e);
        break;
      case 22:
        if (k = n !== null && n.memoizedState !== null, e.mode & 1 ? (Ve = (g = Ve) || k, gt(t, e), Ve = g) : gt(t, e), St(e), r & 8192) {
          if (g = e.memoizedState !== null, (e.stateNode.isHidden = g) && !k && e.mode & 1) for (T = e, k = e.child; k !== null; ) {
            for (x = T = k; T !== null; ) {
              switch (y = T, N = y.child, y.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  kr(4, y, y.return);
                  break;
                case 1:
                  On(y, y.return);
                  var L = y.stateNode;
                  if (typeof L.componentWillUnmount == "function") {
                    r = y, n = y.return;
                    try {
                      t = r, L.props = t.memoizedProps, L.state = t.memoizedState, L.componentWillUnmount();
                    } catch (j) {
                      we(r, n, j);
                    }
                  }
                  break;
                case 5:
                  On(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    xa(x);
                    continue;
                  }
              }
              N !== null ? (N.return = y, T = N) : xa(x);
            }
            k = k.sibling;
          }
          e: for (k = null, x = e; ; ) {
            if (x.tag === 5) {
              if (k === null) {
                k = x;
                try {
                  o = x.stateNode, g ? (l = o.style, typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none") : (u = x.stateNode, c = x.memoizedProps.style, i = c != null && c.hasOwnProperty("display") ? c.display : null, u.style.display = qi("display", i));
                } catch (j) {
                  we(e, e.return, j);
                }
              }
            } else if (x.tag === 6) {
              if (k === null) try {
                x.stateNode.nodeValue = g ? "" : x.memoizedProps;
              } catch (j) {
                we(e, e.return, j);
              }
            } else if ((x.tag !== 22 && x.tag !== 23 || x.memoizedState === null || x === e) && x.child !== null) {
              x.child.return = x, x = x.child;
              continue;
            }
            if (x === e) break e;
            for (; x.sibling === null; ) {
              if (x.return === null || x.return === e) break e;
              k === x && (k = null), x = x.return;
            }
            k === x && (k = null), x.sibling.return = x.return, x = x.sibling;
          }
        }
        break;
      case 19:
        gt(t, e), St(e), r & 4 && va(e);
        break;
      case 21:
        break;
      default:
        gt(
          t,
          e
        ), St(e);
    }
  }
  function St(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ma(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(s(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Wn(o, ""), r.flags &= -33);
            var l = ha(e);
            gi(e, l, o);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, u = ha(e);
            hi(e, u, i);
            break;
          default:
            throw Error(s(161));
        }
      } catch (c) {
        we(e, e.return, c);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Wd(e, t, n) {
    T = e, wa(e);
  }
  function wa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; T !== null; ) {
      var o = T, l = o.child;
      if (o.tag === 22 && r) {
        var i = o.memoizedState !== null || So;
        if (!i) {
          var u = o.alternate, c = u !== null && u.memoizedState !== null || Ve;
          u = So;
          var g = Ve;
          if (So = i, (Ve = c) && !g) for (T = o; T !== null; ) i = T, c = i.child, i.tag === 22 && i.memoizedState !== null ? Sa(o) : c !== null ? (c.return = i, T = c) : Sa(o);
          for (; l !== null; ) T = l, wa(l), l = l.sibling;
          T = o, So = u, Ve = g;
        }
        ka(e);
      } else o.subtreeFlags & 8772 && l !== null ? (l.return = o, T = l) : ka(e);
    }
  }
  function ka(e) {
    for (; T !== null; ) {
      var t = T;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ve || Co(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Ve) if (n === null) r.componentDidMount();
              else {
                var o = t.elementType === t.type ? n.memoizedProps : mt(t.type, n.memoizedProps);
                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var l = t.updateQueue;
              l !== null && xs(t, l, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                xs(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var c = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    c.autoFocus && n.focus();
                    break;
                  case "img":
                    c.src && (n.src = c.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var g = t.alternate;
                if (g !== null) {
                  var k = g.memoizedState;
                  if (k !== null) {
                    var x = k.dehydrated;
                    x !== null && Jn(x);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(s(163));
          }
          Ve || t.flags & 512 && mi(t);
        } catch (y) {
          we(t, t.return, y);
        }
      }
      if (t === e) {
        T = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, T = n;
        break;
      }
      T = t.return;
    }
  }
  function xa(e) {
    for (; T !== null; ) {
      var t = T;
      if (t === e) {
        T = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, T = n;
        break;
      }
      T = t.return;
    }
  }
  function Sa(e) {
    for (; T !== null; ) {
      var t = T;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Co(4, t);
            } catch (c) {
              we(t, n, c);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (c) {
                we(t, o, c);
              }
            }
            var l = t.return;
            try {
              mi(t);
            } catch (c) {
              we(t, l, c);
            }
            break;
          case 5:
            var i = t.return;
            try {
              mi(t);
            } catch (c) {
              we(t, i, c);
            }
        }
      } catch (c) {
        we(t, t.return, c);
      }
      if (t === e) {
        T = null;
        break;
      }
      var u = t.sibling;
      if (u !== null) {
        u.return = t.return, T = u;
        break;
      }
      T = t.return;
    }
  }
  var Bd = Math.ceil, Eo = fe.ReactCurrentDispatcher, vi = fe.ReactCurrentOwner, st = fe.ReactCurrentBatchConfig, b = 0, Pe = null, Se = null, Me = 0, nt = 0, In = Ut(0), _e = 0, xr = null, sn = 0, _o = 0, yi = 0, Sr = null, Ke = null, wi = 0, Fn = 1 / 0, Tt = null, zo = !1, ki = null, Qt = null, No = !1, Gt = null, Po = 0, Cr = 0, xi = null, Ro = -1, To = 0;
  function $e() {
    return b & 6 ? ke() : Ro !== -1 ? Ro : Ro = ke();
  }
  function Kt(e) {
    return e.mode & 1 ? b & 2 && Me !== 0 ? Me & -Me : _d.transition !== null ? (To === 0 && (To = hu()), To) : (e = ne, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Eu(e.type)), e) : 1;
  }
  function vt(e, t, n, r) {
    if (50 < Cr) throw Cr = 0, xi = null, Error(s(185));
    Kn(e, n, r), (!(b & 2) || e !== Pe) && (e === Pe && (!(b & 2) && (_o |= n), _e === 4 && Yt(e, Me)), Ye(e, r), n === 1 && b === 0 && !(t.mode & 1) && (Fn = ke() + 500, ro && Wt()));
  }
  function Ye(e, t) {
    var n = e.callbackNode;
    _c(e, t);
    var r = Ar(e, e === Pe ? Me : 0);
    if (r === 0) n !== null && fu(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && fu(n), t === 1) e.tag === 0 ? Ed(Ea.bind(null, e)) : as(Ea.bind(null, e)), kd(function() {
        !(b & 6) && Wt();
      }), n = null;
      else {
        switch (gu(r)) {
          case 1:
            n = el;
            break;
          case 4:
            n = pu;
            break;
          case 16:
            n = Or;
            break;
          case 536870912:
            n = mu;
            break;
          default:
            n = Or;
        }
        n = ja(n, Ca.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Ca(e, t) {
    if (Ro = -1, To = 0, b & 6) throw Error(s(327));
    var n = e.callbackNode;
    if (Dn() && e.callbackNode !== n) return null;
    var r = Ar(e, e === Pe ? Me : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Lo(e, r);
    else {
      t = r;
      var o = b;
      b |= 2;
      var l = za();
      (Pe !== e || Me !== t) && (Tt = null, Fn = ke() + 500, cn(e, t));
      do
        try {
          Qd();
          break;
        } catch (u) {
          _a(e, u);
        }
      while (!0);
      Ul(), Eo.current = l, b = o, Se !== null ? t = 0 : (Pe = null, Me = 0, t = _e);
    }
    if (t !== 0) {
      if (t === 2 && (o = tl(e), o !== 0 && (r = o, t = Si(e, o))), t === 1) throw n = xr, cn(e, 0), Yt(e, r), Ye(e, ke()), n;
      if (t === 6) Yt(e, r);
      else {
        if (o = e.current.alternate, !(r & 30) && !$d(o) && (t = Lo(e, r), t === 2 && (l = tl(e), l !== 0 && (r = l, t = Si(e, l))), t === 1)) throw n = xr, cn(e, 0), Yt(e, r), Ye(e, ke()), n;
        switch (e.finishedWork = o, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(s(345));
          case 2:
            dn(e, Ke, Tt);
            break;
          case 3:
            if (Yt(e, r), (r & 130023424) === r && (t = wi + 500 - ke(), 10 < t)) {
              if (Ar(e, 0) !== 0) break;
              if (o = e.suspendedLanes, (o & r) !== r) {
                $e(), e.pingedLanes |= e.suspendedLanes & o;
                break;
              }
              e.timeoutHandle = Pl(dn.bind(null, e, Ke, Tt), t);
              break;
            }
            dn(e, Ke, Tt);
            break;
          case 4:
            if (Yt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var i = 31 - dt(r);
              l = 1 << i, i = t[i], i > o && (o = i), r &= ~l;
            }
            if (r = o, r = ke() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Bd(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = Pl(dn.bind(null, e, Ke, Tt), r);
              break;
            }
            dn(e, Ke, Tt);
            break;
          case 5:
            dn(e, Ke, Tt);
            break;
          default:
            throw Error(s(329));
        }
      }
    }
    return Ye(e, ke()), e.callbackNode === n ? Ca.bind(null, e) : null;
  }
  function Si(e, t) {
    var n = Sr;
    return e.current.memoizedState.isDehydrated && (cn(e, t).flags |= 256), e = Lo(e, t), e !== 2 && (t = Ke, Ke = n, t !== null && Ci(t)), e;
  }
  function Ci(e) {
    Ke === null ? Ke = e : Ke.push.apply(Ke, e);
  }
  function $d(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var o = n[r], l = o.getSnapshot;
          o = o.value;
          try {
            if (!ft(l(), o)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Yt(e, t) {
    for (t &= ~yi, t &= ~_o, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - dt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Ea(e) {
    if (b & 6) throw Error(s(327));
    Dn();
    var t = Ar(e, 0);
    if (!(t & 1)) return Ye(e, ke()), null;
    var n = Lo(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = tl(e);
      r !== 0 && (t = r, n = Si(e, r));
    }
    if (n === 1) throw n = xr, cn(e, 0), Yt(e, t), Ye(e, ke()), n;
    if (n === 6) throw Error(s(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, dn(e, Ke, Tt), Ye(e, ke()), null;
  }
  function Ei(e, t) {
    var n = b;
    b |= 1;
    try {
      return e(t);
    } finally {
      b = n, b === 0 && (Fn = ke() + 500, ro && Wt());
    }
  }
  function an(e) {
    Gt !== null && Gt.tag === 0 && !(b & 6) && Dn();
    var t = b;
    b |= 1;
    var n = st.transition, r = ne;
    try {
      if (st.transition = null, ne = 1, e) return e();
    } finally {
      ne = r, st.transition = n, b = t, !(b & 6) && Wt();
    }
  }
  function _i() {
    nt = In.current, ae(In);
  }
  function cn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, wd(n)), Se !== null) for (n = Se.return; n !== null; ) {
      var r = n;
      switch (Ol(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && to();
          break;
        case 3:
          jn(), ae(He), ae(De), Kl();
          break;
        case 5:
          Ql(r);
          break;
        case 4:
          jn();
          break;
        case 13:
          ae(ve);
          break;
        case 19:
          ae(ve);
          break;
        case 10:
          Vl(r.type._context);
          break;
        case 22:
        case 23:
          _i();
      }
      n = n.return;
    }
    if (Pe = e, Se = e = Xt(e.current, null), Me = nt = t, _e = 0, xr = null, yi = _o = sn = 0, Ke = Sr = null, on !== null) {
      for (t = 0; t < on.length; t++) if (n = on[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var o = r.next, l = n.pending;
        if (l !== null) {
          var i = l.next;
          l.next = o, r.next = i;
        }
        n.pending = r;
      }
      on = null;
    }
    return e;
  }
  function _a(e, t) {
    do {
      var n = Se;
      try {
        if (Ul(), mo.current = yo, ho) {
          for (var r = ye.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), r = r.next;
          }
          ho = !1;
        }
        if (un = 0, Ne = Ee = ye = null, hr = !1, gr = 0, vi.current = null, n === null || n.return === null) {
          _e = 1, xr = t, Se = null;
          break;
        }
        e: {
          var l = e, i = n.return, u = n, c = t;
          if (t = Me, u.flags |= 32768, c !== null && typeof c == "object" && typeof c.then == "function") {
            var g = c, k = u, x = k.tag;
            if (!(k.mode & 1) && (x === 0 || x === 11 || x === 15)) {
              var y = k.alternate;
              y ? (k.updateQueue = y.updateQueue, k.memoizedState = y.memoizedState, k.lanes = y.lanes) : (k.updateQueue = null, k.memoizedState = null);
            }
            var N = bs(i);
            if (N !== null) {
              N.flags &= -257, Zs(N, i, u, l, t), N.mode & 1 && Xs(l, g, t), t = N, c = g;
              var L = t.updateQueue;
              if (L === null) {
                var j = /* @__PURE__ */ new Set();
                j.add(c), t.updateQueue = j;
              } else L.add(c);
              break e;
            } else {
              if (!(t & 1)) {
                Xs(l, g, t), zi();
                break e;
              }
              c = Error(s(426));
            }
          } else if (me && u.mode & 1) {
            var xe = bs(i);
            if (xe !== null) {
              !(xe.flags & 65536) && (xe.flags |= 256), Zs(xe, i, u, l, t), Dl(Mn(c, u));
              break e;
            }
          }
          l = c = Mn(c, u), _e !== 4 && (_e = 2), Sr === null ? Sr = [l] : Sr.push(l), l = i;
          do {
            switch (l.tag) {
              case 3:
                l.flags |= 65536, t &= -t, l.lanes |= t;
                var m = Ks(l, c, t);
                ks(l, m);
                break e;
              case 1:
                u = c;
                var d = l.type, h = l.stateNode;
                if (!(l.flags & 128) && (typeof d.getDerivedStateFromError == "function" || h !== null && typeof h.componentDidCatch == "function" && (Qt === null || !Qt.has(h)))) {
                  l.flags |= 65536, t &= -t, l.lanes |= t;
                  var C = Ys(l, u, t);
                  ks(l, C);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        Pa(n);
      } catch (M) {
        t = M, Se === n && n !== null && (Se = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function za() {
    var e = Eo.current;
    return Eo.current = yo, e === null ? yo : e;
  }
  function zi() {
    (_e === 0 || _e === 3 || _e === 2) && (_e = 4), Pe === null || !(sn & 268435455) && !(_o & 268435455) || Yt(Pe, Me);
  }
  function Lo(e, t) {
    var n = b;
    b |= 2;
    var r = za();
    (Pe !== e || Me !== t) && (Tt = null, cn(e, t));
    do
      try {
        Hd();
        break;
      } catch (o) {
        _a(e, o);
      }
    while (!0);
    if (Ul(), b = n, Eo.current = r, Se !== null) throw Error(s(261));
    return Pe = null, Me = 0, _e;
  }
  function Hd() {
    for (; Se !== null; ) Na(Se);
  }
  function Qd() {
    for (; Se !== null && !gc(); ) Na(Se);
  }
  function Na(e) {
    var t = La(e.alternate, e, nt);
    e.memoizedProps = e.pendingProps, t === null ? Pa(e) : Se = t, vi.current = null;
  }
  function Pa(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = Ad(n, t), n !== null) {
          n.flags &= 32767, Se = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          _e = 6, Se = null;
          return;
        }
      } else if (n = Dd(n, t, nt), n !== null) {
        Se = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Se = t;
        return;
      }
      Se = t = e;
    } while (t !== null);
    _e === 0 && (_e = 5);
  }
  function dn(e, t, n) {
    var r = ne, o = st.transition;
    try {
      st.transition = null, ne = 1, Gd(e, t, n, r);
    } finally {
      st.transition = o, ne = r;
    }
    return null;
  }
  function Gd(e, t, n, r) {
    do
      Dn();
    while (Gt !== null);
    if (b & 6) throw Error(s(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(s(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var l = n.lanes | n.childLanes;
    if (zc(e, l), e === Pe && (Se = Pe = null, Me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || No || (No = !0, ja(Or, function() {
      return Dn(), null;
    })), l = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || l) {
      l = st.transition, st.transition = null;
      var i = ne;
      ne = 1;
      var u = b;
      b |= 4, vi.current = null, Vd(e, n), ya(n, e), fd(zl), Wr = !!_l, zl = _l = null, e.current = n, Wd(n), vc(), b = u, ne = i, st.transition = l;
    } else e.current = n;
    if (No && (No = !1, Gt = e, Po = o), l = e.pendingLanes, l === 0 && (Qt = null), kc(n.stateNode), Ye(e, ke()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, { componentStack: o.stack, digest: o.digest });
    if (zo) throw zo = !1, e = ki, ki = null, e;
    return Po & 1 && e.tag !== 0 && Dn(), l = e.pendingLanes, l & 1 ? e === xi ? Cr++ : (Cr = 0, xi = e) : Cr = 0, Wt(), null;
  }
  function Dn() {
    if (Gt !== null) {
      var e = gu(Po), t = st.transition, n = ne;
      try {
        if (st.transition = null, ne = 16 > e ? 16 : e, Gt === null) var r = !1;
        else {
          if (e = Gt, Gt = null, Po = 0, b & 6) throw Error(s(331));
          var o = b;
          for (b |= 4, T = e.current; T !== null; ) {
            var l = T, i = l.child;
            if (T.flags & 16) {
              var u = l.deletions;
              if (u !== null) {
                for (var c = 0; c < u.length; c++) {
                  var g = u[c];
                  for (T = g; T !== null; ) {
                    var k = T;
                    switch (k.tag) {
                      case 0:
                      case 11:
                      case 15:
                        kr(8, k, l);
                    }
                    var x = k.child;
                    if (x !== null) x.return = k, T = x;
                    else for (; T !== null; ) {
                      k = T;
                      var y = k.sibling, N = k.return;
                      if (pa(k), k === g) {
                        T = null;
                        break;
                      }
                      if (y !== null) {
                        y.return = N, T = y;
                        break;
                      }
                      T = N;
                    }
                  }
                }
                var L = l.alternate;
                if (L !== null) {
                  var j = L.child;
                  if (j !== null) {
                    L.child = null;
                    do {
                      var xe = j.sibling;
                      j.sibling = null, j = xe;
                    } while (j !== null);
                  }
                }
                T = l;
              }
            }
            if (l.subtreeFlags & 2064 && i !== null) i.return = l, T = i;
            else e: for (; T !== null; ) {
              if (l = T, l.flags & 2048) switch (l.tag) {
                case 0:
                case 11:
                case 15:
                  kr(9, l, l.return);
              }
              var m = l.sibling;
              if (m !== null) {
                m.return = l.return, T = m;
                break e;
              }
              T = l.return;
            }
          }
          var d = e.current;
          for (T = d; T !== null; ) {
            i = T;
            var h = i.child;
            if (i.subtreeFlags & 2064 && h !== null) h.return = i, T = h;
            else e: for (i = d; T !== null; ) {
              if (u = T, u.flags & 2048) try {
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Co(9, u);
                }
              } catch (M) {
                we(u, u.return, M);
              }
              if (u === i) {
                T = null;
                break e;
              }
              var C = u.sibling;
              if (C !== null) {
                C.return = u.return, T = C;
                break e;
              }
              T = u.return;
            }
          }
          if (b = o, Wt(), yt && typeof yt.onPostCommitFiberRoot == "function") try {
            yt.onPostCommitFiberRoot(Ir, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        ne = n, st.transition = t;
      }
    }
    return !1;
  }
  function Ra(e, t, n) {
    t = Mn(n, t), t = Ks(e, t, 1), e = $t(e, t, 1), t = $e(), e !== null && (Kn(e, 1, t), Ye(e, t));
  }
  function we(e, t, n) {
    if (e.tag === 3) Ra(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        Ra(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Qt === null || !Qt.has(r))) {
          e = Mn(n, e), e = Ys(t, e, 1), t = $t(t, e, 1), e = $e(), t !== null && (Kn(t, 1, e), Ye(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Kd(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = $e(), e.pingedLanes |= e.suspendedLanes & n, Pe === e && (Me & n) === n && (_e === 4 || _e === 3 && (Me & 130023424) === Me && 500 > ke() - wi ? cn(e, 0) : yi |= n), Ye(e, t);
  }
  function Ta(e, t) {
    t === 0 && (e.mode & 1 ? (t = Dr, Dr <<= 1, !(Dr & 130023424) && (Dr = 4194304)) : t = 1);
    var n = $e();
    e = Nt(e, t), e !== null && (Kn(e, t, n), Ye(e, n));
  }
  function Yd(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Ta(e, n);
  }
  function Xd(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(s(314));
    }
    r !== null && r.delete(t), Ta(e, n);
  }
  var La;
  La = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || He.current) Ge = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return Ge = !1, Fd(e, t, n);
      Ge = !!(e.flags & 131072);
    }
    else Ge = !1, me && t.flags & 1048576 && cs(t, lo, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        xo(e, t), e = t.pendingProps;
        var o = _n(t, De.current);
        Ln(t, n), o = bl(null, t, r, e, o, n);
        var l = Zl();
        return t.flags |= 1, typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Qe(r) ? (l = !0, no(t)) : l = !1, t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null, $l(t), o.updater = wo, t.stateNode = o, o._reactInternals = t, ri(t, r, e, n), t = ui(null, t, r, !0, l, n)) : (t.tag = 0, me && l && Ml(t), Be(null, t, o, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (xo(e, t), e = t.pendingProps, o = r._init, r = o(r._payload), t.type = r, o = t.tag = Zd(r), e = mt(r, e), o) {
            case 0:
              t = ii(null, t, r, e, n);
              break e;
            case 1:
              t = ra(null, t, r, e, n);
              break e;
            case 11:
              t = Js(null, t, r, e, n);
              break e;
            case 14:
              t = qs(null, t, r, mt(r.type, e), n);
              break e;
          }
          throw Error(s(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), ii(e, t, r, o, n);
      case 1:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), ra(e, t, r, o, n);
      case 3:
        e: {
          if (oa(t), e === null) throw Error(s(387));
          r = t.pendingProps, l = t.memoizedState, o = l.element, ws(e, t), fo(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, l.isDehydrated) if (l = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = l, t.memoizedState = l, t.flags & 256) {
            o = Mn(Error(s(423)), t), t = la(e, t, r, n, o);
            break e;
          } else if (r !== o) {
            o = Mn(Error(s(424)), t), t = la(e, t, r, n, o);
            break e;
          } else for (tt = At(t.stateNode.containerInfo.firstChild), et = t, me = !0, pt = null, n = vs(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Pn(), r === o) {
              t = Rt(e, t, n);
              break e;
            }
            Be(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Ss(t), e === null && Fl(t), r = t.type, o = t.pendingProps, l = e !== null ? e.memoizedProps : null, i = o.children, Nl(r, o) ? i = null : l !== null && Nl(r, l) && (t.flags |= 32), na(e, t), Be(e, t, i, n), t.child;
      case 6:
        return e === null && Fl(t), null;
      case 13:
        return ia(e, t, n);
      case 4:
        return Hl(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Rn(t, null, r, n) : Be(e, t, r, n), t.child;
      case 11:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), Js(e, t, r, o, n);
      case 7:
        return Be(e, t, t.pendingProps, n), t.child;
      case 8:
        return Be(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Be(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, o = t.pendingProps, l = t.memoizedProps, i = o.value, le(so, r._currentValue), r._currentValue = i, l !== null) if (ft(l.value, i)) {
            if (l.children === o.children && !He.current) {
              t = Rt(e, t, n);
              break e;
            }
          } else for (l = t.child, l !== null && (l.return = t); l !== null; ) {
            var u = l.dependencies;
            if (u !== null) {
              i = l.child;
              for (var c = u.firstContext; c !== null; ) {
                if (c.context === r) {
                  if (l.tag === 1) {
                    c = Pt(-1, n & -n), c.tag = 2;
                    var g = l.updateQueue;
                    if (g !== null) {
                      g = g.shared;
                      var k = g.pending;
                      k === null ? c.next = c : (c.next = k.next, k.next = c), g.pending = c;
                    }
                  }
                  l.lanes |= n, c = l.alternate, c !== null && (c.lanes |= n), Wl(
                    l.return,
                    n,
                    t
                  ), u.lanes |= n;
                  break;
                }
                c = c.next;
              }
            } else if (l.tag === 10) i = l.type === t.type ? null : l.child;
            else if (l.tag === 18) {
              if (i = l.return, i === null) throw Error(s(341));
              i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Wl(i, n, t), i = l.sibling;
            } else i = l.child;
            if (i !== null) i.return = l;
            else for (i = l; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (l = i.sibling, l !== null) {
                l.return = i.return, i = l;
                break;
              }
              i = i.return;
            }
            l = i;
          }
          Be(e, t, o.children, n), t = t.child;
        }
        return t;
      case 9:
        return o = t.type, r = t.pendingProps.children, Ln(t, n), o = it(o), r = r(o), t.flags |= 1, Be(e, t, r, n), t.child;
      case 14:
        return r = t.type, o = mt(r, t.pendingProps), o = mt(r.type, o), qs(e, t, r, o, n);
      case 15:
        return ea(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : mt(r, o), xo(e, t), t.tag = 1, Qe(r) ? (e = !0, no(t)) : e = !1, Ln(t, n), Qs(t, r, o), ri(t, r, o, n), ui(null, t, r, !0, e, n);
      case 19:
        return sa(e, t, n);
      case 22:
        return ta(e, t, n);
    }
    throw Error(s(156, t.tag));
  };
  function ja(e, t) {
    return du(e, t);
  }
  function bd(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function at(e, t, n, r) {
    return new bd(e, t, n, r);
  }
  function Ni(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Zd(e) {
    if (typeof e == "function") return Ni(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === X) return 11;
      if (e === Ze) return 14;
    }
    return 2;
  }
  function Xt(e, t) {
    var n = e.alternate;
    return n === null ? (n = at(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function jo(e, t, n, r, o, l) {
    var i = 2;
    if (r = e, typeof e == "function") Ni(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case Le:
        return fn(n.children, o, l, t);
      case We:
        i = 8, o |= 8;
        break;
      case rt:
        return e = at(12, n, t, o | 2), e.elementType = rt, e.lanes = l, e;
      case Ie:
        return e = at(13, n, t, o), e.elementType = Ie, e.lanes = l, e;
      case Fe:
        return e = at(19, n, t, o), e.elementType = Fe, e.lanes = l, e;
      case ue:
        return Mo(n, o, l, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case be:
            i = 10;
            break e;
          case ct:
            i = 9;
            break e;
          case X:
            i = 11;
            break e;
          case Ze:
            i = 14;
            break e;
          case Ce:
            i = 16, r = null;
            break e;
        }
        throw Error(s(130, e == null ? e : typeof e, ""));
    }
    return t = at(i, n, t, o), t.elementType = e, t.type = r, t.lanes = l, t;
  }
  function fn(e, t, n, r) {
    return e = at(7, e, r, t), e.lanes = n, e;
  }
  function Mo(e, t, n, r) {
    return e = at(22, e, r, t), e.elementType = ue, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function Pi(e, t, n) {
    return e = at(6, e, null, t), e.lanes = n, e;
  }
  function Ri(e, t, n) {
    return t = at(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Jd(e, t, n, r, o) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = nl(0), this.expirationTimes = nl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = nl(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null;
  }
  function Ti(e, t, n, r, o, l, i, u, c) {
    return e = new Jd(e, t, n, u, c), t === 1 ? (t = 1, l === !0 && (t |= 8)) : t = 0, l = at(3, null, null, t), e.current = l, l.stateNode = e, l.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $l(l), e;
  }
  function qd(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: ze, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ma(e) {
    if (!e) return Vt;
    e = e._reactInternals;
    e: {
      if (qt(e) !== e || e.tag !== 1) throw Error(s(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Qe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(s(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Qe(n)) return us(e, n, t);
    }
    return t;
  }
  function Oa(e, t, n, r, o, l, i, u, c) {
    return e = Ti(n, r, !0, e, o, l, i, u, c), e.context = Ma(null), n = e.current, r = $e(), o = Kt(n), l = Pt(r, o), l.callback = t ?? null, $t(n, l, o), e.current.lanes = o, Kn(e, o, r), Ye(e, r), e;
  }
  function Oo(e, t, n, r) {
    var o = t.current, l = $e(), i = Kt(o);
    return n = Ma(n), t.context === null ? t.context = n : t.pendingContext = n, t = Pt(l, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = $t(o, t, i), e !== null && (vt(e, o, i, l), co(e, o, i)), i;
  }
  function Io(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Ia(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Li(e, t) {
    Ia(e, t), (e = e.alternate) && Ia(e, t);
  }
  function ef() {
    return null;
  }
  var Fa = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ji(e) {
    this._internalRoot = e;
  }
  Fo.prototype.render = ji.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    Oo(e, t, null, null);
  }, Fo.prototype.unmount = ji.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      an(function() {
        Oo(null, e, null, null);
      }), t[Ct] = null;
    }
  };
  function Fo(e) {
    this._internalRoot = e;
  }
  Fo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = wu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < It.length && t !== 0 && t < It[n].priority; n++) ;
      It.splice(n, 0, e), n === 0 && Su(e);
    }
  };
  function Mi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Do(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Da() {
  }
  function tf(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var l = r;
        r = function() {
          var g = Io(i);
          l.call(g);
        };
      }
      var i = Oa(t, r, e, 0, null, !1, !1, "", Da);
      return e._reactRootContainer = i, e[Ct] = i.current, ur(e.nodeType === 8 ? e.parentNode : e), an(), i;
    }
    for (; o = e.lastChild; ) e.removeChild(o);
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var g = Io(c);
        u.call(g);
      };
    }
    var c = Ti(e, 0, !1, null, null, !1, !1, "", Da);
    return e._reactRootContainer = c, e[Ct] = c.current, ur(e.nodeType === 8 ? e.parentNode : e), an(function() {
      Oo(t, c, n, r);
    }), c;
  }
  function Ao(e, t, n, r, o) {
    var l = n._reactRootContainer;
    if (l) {
      var i = l;
      if (typeof o == "function") {
        var u = o;
        o = function() {
          var c = Io(i);
          u.call(c);
        };
      }
      Oo(t, i, e, o);
    } else i = tf(n, t, e, o, r);
    return Io(i);
  }
  vu = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Gn(t.pendingLanes);
          n !== 0 && (rl(t, n | 1), Ye(t, ke()), !(b & 6) && (Fn = ke() + 500, Wt()));
        }
        break;
      case 13:
        an(function() {
          var r = Nt(e, 1);
          if (r !== null) {
            var o = $e();
            vt(r, e, 1, o);
          }
        }), Li(e, 1);
    }
  }, ol = function(e) {
    if (e.tag === 13) {
      var t = Nt(e, 134217728);
      if (t !== null) {
        var n = $e();
        vt(t, e, 134217728, n);
      }
      Li(e, 134217728);
    }
  }, yu = function(e) {
    if (e.tag === 13) {
      var t = Kt(e), n = Nt(e, t);
      if (n !== null) {
        var r = $e();
        vt(n, e, t, r);
      }
      Li(e, t);
    }
  }, wu = function() {
    return ne;
  }, ku = function(e, t) {
    var n = ne;
    try {
      return ne = e, t();
    } finally {
      ne = n;
    }
  }, bo = function(e, t, n) {
    switch (t) {
      case "input":
        if (Bo(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = eo(r);
              if (!o) throw Error(s(90));
              Hi(r), Bo(r, o);
            }
          }
        }
        break;
      case "textarea":
        Xi(e, n);
        break;
      case "select":
        t = n.value, t != null && pn(e, !!n.multiple, t, !1);
    }
  }, ou = Ei, lu = an;
  var nf = { usingClientEntryPoint: !1, Events: [cr, Cn, eo, nu, ru, Ei] }, Er = { findFiberByHostInstance: en, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rf = { bundleType: Er.bundleType, version: Er.version, rendererPackageName: Er.rendererPackageName, rendererConfig: Er.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: fe.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = au(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: Er.findFiberByHostInstance || ef, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Uo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Uo.isDisabled && Uo.supportsFiber) try {
      Ir = Uo.inject(rf), yt = Uo;
    } catch {
    }
  }
  return Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nf, Xe.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Mi(t)) throw Error(s(200));
    return qd(e, t, null, n);
  }, Xe.createRoot = function(e, t) {
    if (!Mi(e)) throw Error(s(299));
    var n = !1, r = "", o = Fa;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (o = t.onRecoverableError)), t = Ti(e, 1, !1, null, null, n, !1, r, o), e[Ct] = t.current, ur(e.nodeType === 8 ? e.parentNode : e), new ji(t);
  }, Xe.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = au(t), e = e === null ? null : e.stateNode, e;
  }, Xe.flushSync = function(e) {
    return an(e);
  }, Xe.hydrate = function(e, t, n) {
    if (!Do(t)) throw Error(s(200));
    return Ao(null, e, t, !0, n);
  }, Xe.hydrateRoot = function(e, t, n) {
    if (!Mi(e)) throw Error(s(405));
    var r = n != null && n.hydratedSources || null, o = !1, l = "", i = Fa;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Oa(t, null, e, 1, n ?? null, o, !1, l, i), e[Ct] = t.current, ur(e), r) for (e = 0; e < r.length; e++) n = r[e], o = n._getVersion, o = o(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(
      n,
      o
    );
    return new Fo(t);
  }, Xe.render = function(e, t, n) {
    if (!Do(t)) throw Error(s(200));
    return Ao(null, e, t, !1, n);
  }, Xe.unmountComponentAtNode = function(e) {
    if (!Do(e)) throw Error(s(40));
    return e._reactRootContainer ? (an(function() {
      Ao(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Ct] = null;
      });
    }), !0) : !1;
  }, Xe.unstable_batchedUpdates = Ei, Xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Do(n)) throw Error(s(200));
    if (e == null || e._reactInternals === void 0) throw Error(s(38));
    return Ao(e, t, n, !1, r);
  }, Xe.version = "18.3.1-next-f1338f8080-20240426", Xe;
}
function Za() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Za);
    } catch (a) {
      console.error(a);
    }
}
Za(), ba.exports = df();
var ff = ba.exports, Ha = ff;
Ai.createRoot = Ha.createRoot, Ai.hydrateRoot = Ha.hydrateRoot;
var he = Wi();
function pf(a, p) {
  typeof a == "function" ? a(p) : a != null && (a.current = p);
}
function mf(...a) {
  return (p) => a.forEach((s) => pf(s, p));
}
var Ja = he.forwardRef((a, p) => {
  const { children: s, ...v } = a, E = he.Children.toArray(s), S = E.find(gf);
  if (S) {
    const P = S.props.children, _ = E.map((O) => O === S ? he.Children.count(P) > 1 ? he.Children.only(null) : he.isValidElement(P) ? P.props.children : null : O);
    return /* @__PURE__ */ ee.jsx(Ui, { ...v, ref: p, children: he.isValidElement(P) ? he.cloneElement(P, void 0, _) : null });
  }
  return /* @__PURE__ */ ee.jsx(Ui, { ...v, ref: p, children: s });
});
Ja.displayName = "Slot";
var Ui = he.forwardRef((a, p) => {
  const { children: s, ...v } = a;
  if (he.isValidElement(s)) {
    const E = yf(s);
    return he.cloneElement(s, {
      ...vf(v, s.props),
      // @ts-ignore
      ref: p ? mf(p, E) : E
    });
  }
  return he.Children.count(s) > 1 ? he.Children.only(null) : null;
});
Ui.displayName = "SlotClone";
var hf = ({ children: a }) => /* @__PURE__ */ ee.jsx(ee.Fragment, { children: a });
function gf(a) {
  return he.isValidElement(a) && a.type === hf;
}
function vf(a, p) {
  const s = { ...p };
  for (const v in p) {
    const E = a[v], S = p[v];
    /^on[A-Z]/.test(v) ? E && S ? s[v] = (..._) => {
      S(..._), E(..._);
    } : E && (s[v] = E) : v === "style" ? s[v] = { ...E, ...S } : v === "className" && (s[v] = [E, S].filter(Boolean).join(" "));
  }
  return { ...a, ...s };
}
function yf(a) {
  let p = Object.getOwnPropertyDescriptor(a.props, "ref")?.get, s = p && "isReactWarning" in p && p.isReactWarning;
  return s ? a.ref : (p = Object.getOwnPropertyDescriptor(a, "ref")?.get, s = p && "isReactWarning" in p && p.isReactWarning, s ? a.props.ref : a.props.ref || a.ref);
}
function qa(a) {
  var p, s, v = "";
  if (typeof a == "string" || typeof a == "number") v += a;
  else if (typeof a == "object") if (Array.isArray(a)) for (p = 0; p < a.length; p++) a[p] && (s = qa(a[p])) && (v && (v += " "), v += s);
  else for (p in a) a[p] && (v && (v += " "), v += p);
  return v;
}
function wf() {
  for (var a, p, s = 0, v = ""; s < arguments.length; ) (a = arguments[s++]) && (p = qa(a)) && (v && (v += " "), v += p);
  return v;
}
const Qa = (a) => typeof a == "boolean" ? "".concat(a) : a === 0 ? "0" : a, Ga = wf, kf = (a, p) => (s) => {
  var v;
  if (p?.variants == null) return Ga(a, s?.class, s?.className);
  const { variants: E, defaultVariants: S } = p, P = Object.keys(E).map((U) => {
    const $ = s?.[U], V = S?.[U];
    if ($ === null) return null;
    const H = Qa($) || Qa(V);
    return E[U][H];
  }), _ = s && Object.entries(s).reduce((U, $) => {
    let [V, H] = $;
    return H === void 0 || (U[V] = H), U;
  }, {}), O = p == null || (v = p.compoundVariants) === null || v === void 0 ? void 0 : v.reduce((U, $) => {
    let { class: V, className: H, ...de } = $;
    return Object.entries(de).every((ie) => {
      let [B, F] = ie;
      return Array.isArray(F) ? F.includes({
        ...S,
        ..._
      }[B]) : {
        ...S,
        ..._
      }[B] === F;
    }) ? [
      ...U,
      V,
      H
    ] : U;
  }, []);
  return Ga(a, P, O, s?.class, s?.className);
};
function ec(a) {
  var p, s, v = "";
  if (typeof a == "string" || typeof a == "number") v += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var E = a.length;
    for (p = 0; p < E; p++) a[p] && (s = ec(a[p])) && (v && (v += " "), v += s);
  } else for (s in a) a[s] && (v && (v += " "), v += s);
  return v;
}
function xf() {
  for (var a, p, s = 0, v = "", E = arguments.length; s < E; s++) (a = arguments[s]) && (p = ec(a)) && (v && (v += " "), v += p);
  return v;
}
const Bi = "-", Sf = (a) => {
  const p = Ef(a), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: v
  } = a;
  return {
    getClassGroupId: (P) => {
      const _ = P.split(Bi);
      return _[0] === "" && _.length !== 1 && _.shift(), tc(_, p) || Cf(P);
    },
    getConflictingClassGroupIds: (P, _) => {
      const O = s[P] || [];
      return _ && v[P] ? [...O, ...v[P]] : O;
    }
  };
}, tc = (a, p) => {
  if (a.length === 0)
    return p.classGroupId;
  const s = a[0], v = p.nextPart.get(s), E = v ? tc(a.slice(1), v) : void 0;
  if (E)
    return E;
  if (p.validators.length === 0)
    return;
  const S = a.join(Bi);
  return p.validators.find(({
    validator: P
  }) => P(S))?.classGroupId;
}, Ka = /^\[(.+)\]$/, Cf = (a) => {
  if (Ka.test(a)) {
    const p = Ka.exec(a)[1], s = p?.substring(0, p.indexOf(":"));
    if (s)
      return "arbitrary.." + s;
  }
}, Ef = (a) => {
  const {
    theme: p,
    prefix: s
  } = a, v = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return zf(Object.entries(a.classGroups), s).forEach(([S, P]) => {
    Vi(P, v, S, p);
  }), v;
}, Vi = (a, p, s, v) => {
  a.forEach((E) => {
    if (typeof E == "string") {
      const S = E === "" ? p : Ya(p, E);
      S.classGroupId = s;
      return;
    }
    if (typeof E == "function") {
      if (_f(E)) {
        Vi(E(v), p, s, v);
        return;
      }
      p.validators.push({
        validator: E,
        classGroupId: s
      });
      return;
    }
    Object.entries(E).forEach(([S, P]) => {
      Vi(P, Ya(p, S), s, v);
    });
  });
}, Ya = (a, p) => {
  let s = a;
  return p.split(Bi).forEach((v) => {
    s.nextPart.has(v) || s.nextPart.set(v, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), s = s.nextPart.get(v);
  }), s;
}, _f = (a) => a.isThemeGetter, zf = (a, p) => p ? a.map(([s, v]) => {
  const E = v.map((S) => typeof S == "string" ? p + S : typeof S == "object" ? Object.fromEntries(Object.entries(S).map(([P, _]) => [p + P, _])) : S);
  return [s, E];
}) : a, Nf = (a) => {
  if (a < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let p = 0, s = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  const E = (S, P) => {
    s.set(S, P), p++, p > a && (p = 0, v = s, s = /* @__PURE__ */ new Map());
  };
  return {
    get(S) {
      let P = s.get(S);
      if (P !== void 0)
        return P;
      if ((P = v.get(S)) !== void 0)
        return E(S, P), P;
    },
    set(S, P) {
      s.has(S) ? s.set(S, P) : E(S, P);
    }
  };
}, nc = "!", Pf = (a) => {
  const {
    separator: p,
    experimentalParseClassName: s
  } = a, v = p.length === 1, E = p[0], S = p.length, P = (_) => {
    const O = [];
    let U = 0, $ = 0, V;
    for (let F = 0; F < _.length; F++) {
      let re = _[F];
      if (U === 0) {
        if (re === E && (v || _.slice(F, F + S) === p)) {
          O.push(_.slice($, F)), $ = F + S;
          continue;
        }
        if (re === "/") {
          V = F;
          continue;
        }
      }
      re === "[" ? U++ : re === "]" && U--;
    }
    const H = O.length === 0 ? _ : _.substring($), de = H.startsWith(nc), ie = de ? H.substring(1) : H, B = V && V > $ ? V - $ : void 0;
    return {
      modifiers: O,
      hasImportantModifier: de,
      baseClassName: ie,
      maybePostfixModifierPosition: B
    };
  };
  return s ? (_) => s({
    className: _,
    parseClassName: P
  }) : P;
}, Rf = (a) => {
  if (a.length <= 1)
    return a;
  const p = [];
  let s = [];
  return a.forEach((v) => {
    v[0] === "[" ? (p.push(...s.sort(), v), s = []) : s.push(v);
  }), p.push(...s.sort()), p;
}, Tf = (a) => ({
  cache: Nf(a.cacheSize),
  parseClassName: Pf(a),
  ...Sf(a)
}), Lf = /\s+/, jf = (a, p) => {
  const {
    parseClassName: s,
    getClassGroupId: v,
    getConflictingClassGroupIds: E
  } = p, S = [], P = a.trim().split(Lf);
  let _ = "";
  for (let O = P.length - 1; O >= 0; O -= 1) {
    const U = P[O], {
      modifiers: $,
      hasImportantModifier: V,
      baseClassName: H,
      maybePostfixModifierPosition: de
    } = s(U);
    let ie = !!de, B = v(ie ? H.substring(0, de) : H);
    if (!B) {
      if (!ie) {
        _ = U + (_.length > 0 ? " " + _ : _);
        continue;
      }
      if (B = v(H), !B) {
        _ = U + (_.length > 0 ? " " + _ : _);
        continue;
      }
      ie = !1;
    }
    const F = Rf($).join(":"), re = V ? F + nc : F, ge = re + B;
    if (S.includes(ge))
      continue;
    S.push(ge);
    const Te = E(B, ie);
    for (let fe = 0; fe < Te.length; ++fe) {
      const Oe = Te[fe];
      S.push(re + Oe);
    }
    _ = U + (_.length > 0 ? " " + _ : _);
  }
  return _;
};
function Mf() {
  let a = 0, p, s, v = "";
  for (; a < arguments.length; )
    (p = arguments[a++]) && (s = rc(p)) && (v && (v += " "), v += s);
  return v;
}
const rc = (a) => {
  if (typeof a == "string")
    return a;
  let p, s = "";
  for (let v = 0; v < a.length; v++)
    a[v] && (p = rc(a[v])) && (s && (s += " "), s += p);
  return s;
};
function Of(a, ...p) {
  let s, v, E, S = P;
  function P(O) {
    const U = p.reduce(($, V) => V($), a());
    return s = Tf(U), v = s.cache.get, E = s.cache.set, S = _, _(O);
  }
  function _(O) {
    const U = v(O);
    if (U)
      return U;
    const $ = jf(O, s);
    return E(O, $), $;
  }
  return function() {
    return S(Mf.apply(null, arguments));
  };
}
const ce = (a) => {
  const p = (s) => s[a] || [];
  return p.isThemeGetter = !0, p;
}, oc = /^\[(?:([a-z-]+):)?(.+)\]$/i, If = /^\d+\/\d+$/, Ff = /* @__PURE__ */ new Set(["px", "full", "screen"]), Df = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Af = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Uf = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Vf = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Wf = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Lt = (a) => An(a) || Ff.has(a) || If.test(a), Zt = (a) => Un(a, "length", Xf), An = (a) => !!a && !Number.isNaN(Number(a)), Di = (a) => Un(a, "number", An), zr = (a) => !!a && Number.isInteger(Number(a)), Bf = (a) => a.endsWith("%") && An(a.slice(0, -1)), Q = (a) => oc.test(a), Jt = (a) => Df.test(a), $f = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Hf = (a) => Un(a, $f, lc), Qf = (a) => Un(a, "position", lc), Gf = /* @__PURE__ */ new Set(["image", "url"]), Kf = (a) => Un(a, Gf, Zf), Yf = (a) => Un(a, "", bf), Nr = () => !0, Un = (a, p, s) => {
  const v = oc.exec(a);
  return v ? v[1] ? typeof p == "string" ? v[1] === p : p.has(v[1]) : s(v[2]) : !1;
}, Xf = (a) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Af.test(a) && !Uf.test(a)
), lc = () => !1, bf = (a) => Vf.test(a), Zf = (a) => Wf.test(a), Jf = () => {
  const a = ce("colors"), p = ce("spacing"), s = ce("blur"), v = ce("brightness"), E = ce("borderColor"), S = ce("borderRadius"), P = ce("borderSpacing"), _ = ce("borderWidth"), O = ce("contrast"), U = ce("grayscale"), $ = ce("hueRotate"), V = ce("invert"), H = ce("gap"), de = ce("gradientColorStops"), ie = ce("gradientColorStopPositions"), B = ce("inset"), F = ce("margin"), re = ce("opacity"), ge = ce("padding"), Te = ce("saturate"), fe = ce("scale"), Oe = ce("sepia"), ze = ce("skew"), Le = ce("space"), We = ce("translate"), rt = () => ["auto", "contain", "none"], be = () => ["auto", "hidden", "clip", "visible", "scroll"], ct = () => ["auto", Q, p], X = () => [Q, p], Ie = () => ["", Lt, Zt], Fe = () => ["auto", An, Q], Ze = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Ce = () => ["solid", "dashed", "dotted", "double", "none"], ue = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], z = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], I = () => ["", "0", Q], R = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], f = () => [An, Q];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Nr],
      spacing: [Lt, Zt],
      blur: ["none", "", Jt, Q],
      brightness: f(),
      borderColor: [a],
      borderRadius: ["none", "", "full", Jt, Q],
      borderSpacing: X(),
      borderWidth: Ie(),
      contrast: f(),
      grayscale: I(),
      hueRotate: f(),
      invert: I(),
      gap: X(),
      gradientColorStops: [a],
      gradientColorStopPositions: [Bf, Zt],
      inset: ct(),
      margin: ct(),
      opacity: f(),
      padding: X(),
      saturate: f(),
      scale: f(),
      sepia: I(),
      skew: f(),
      space: X(),
      translate: X()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Q]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Jt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": R()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": R()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...Ze(), Q]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: be()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": be()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": be()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: rt()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": rt()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": rt()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [B]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [B]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [B]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [B]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [B]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [B]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [B]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [B]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [B]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", zr, Q]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: ct()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", Q]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: I()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: I()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", zr, Q]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Nr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", zr, Q]
        }, Q]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Fe()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Fe()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Nr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [zr, Q]
        }, Q]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Fe()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Fe()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", Q]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Q]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [H]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [H]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [H]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...z()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...z(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...z(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [ge]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [ge]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [ge]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [ge]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [ge]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [ge]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [ge]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [ge]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [ge]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [F]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [F]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [F]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [F]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [F]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [F]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [F]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [F]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [F]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [Le]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [Le]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Q, p]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Q, p, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Q, p, "none", "full", "min", "max", "fit", "prose", {
          screen: [Jt]
        }, Jt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Q, p, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Q, p, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Q, p, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Q, p, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Jt, Zt]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Di]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Nr]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Q]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", An, Di]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Lt, Q]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Q]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Q]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [a]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [re]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [a]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [re]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Ce(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Lt, Zt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Lt, Q]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [a]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: X()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Q]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", Q]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [re]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...Ze(), Qf]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Hf]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Kf]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [a]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [ie]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [ie]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [ie]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [de]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [de]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [de]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [S]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [S]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [S]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [S]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [S]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [S]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [S]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [S]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [S]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [S]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [S]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [S]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [S]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [S]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [S]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [_]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [_]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [_]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [_]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [_]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [_]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [_]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [_]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [_]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [re]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Ce(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [_]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [_]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [re]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Ce()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [E]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [E]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [E]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [E]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [E]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [E]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [E]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [E]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...Ce()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Lt, Q]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Lt, Zt]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [a]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Ie()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [a]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [re]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Lt, Zt]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [a]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Jt, Yf]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Nr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [re]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ue(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ue()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [s]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [v]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [O]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Jt, Q]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [U]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [$]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [V]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Te]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [Oe]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [s]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [v]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [O]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [U]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [$]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [V]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [re]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Te]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [Oe]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [P]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [P]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [P]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Q]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: f()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Q]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: f()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Q]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [fe]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [fe]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [fe]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [zr, Q]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [We]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [We]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [ze]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [ze]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Q]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", a]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Q]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [a]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": X()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": X()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": X()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": X()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": X()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": X()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": X()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": X()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": X()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": X()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": X()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": X()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": X()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": X()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": X()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": X()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": X()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": X()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", Q]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [a, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Lt, Zt, Di]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [a, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, qf = /* @__PURE__ */ Of(Jf);
function $i(...a) {
  return qf(xf(a));
}
const ep = kf(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Vo = he.forwardRef(
  ({ className: a, variant: p, size: s, asChild: v = !1, ...E }, S) => {
    const P = v ? Ja : "button";
    return /* @__PURE__ */ ee.jsx(
      P,
      {
        className: $i(ep({ variant: p, size: s, className: a })),
        ref: S,
        ...E
      }
    );
  }
);
Vo.displayName = "Button";
const ic = he.forwardRef(
  ({ className: a, ...p }, s) => /* @__PURE__ */ ee.jsx(
    "textarea",
    {
      className: $i(
        "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        a
      ),
      ref: s,
      ...p
    }
  )
);
ic.displayName = "Textarea";
const uc = he.forwardRef(
  ({ className: a, type: p, ...s }, v) => /* @__PURE__ */ ee.jsx(
    "input",
    {
      type: p,
      className: $i(
        "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        a
      ),
      ref: v,
      ...s
    }
  )
);
uc.displayName = "Input";
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tp = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), sc = (...a) => a.filter((p, s, v) => !!p && v.indexOf(p) === s).join(" ");
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var np = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const rp = he.forwardRef(
  ({
    color: a = "currentColor",
    size: p = 24,
    strokeWidth: s = 2,
    absoluteStrokeWidth: v,
    className: E = "",
    children: S,
    iconNode: P,
    ..._
  }, O) => he.createElement(
    "svg",
    {
      ref: O,
      ...np,
      width: p,
      height: p,
      stroke: a,
      strokeWidth: v ? Number(s) * 24 / Number(p) : s,
      className: sc("lucide", E),
      ..._
    },
    [
      ...P.map(([U, $]) => he.createElement(U, $)),
      ...Array.isArray(S) ? S : [S]
    ]
  )
);
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const op = (a, p) => {
  const s = he.forwardRef(
    ({ className: v, ...E }, S) => he.createElement(rp, {
      ref: S,
      iconNode: p,
      className: sc(`lucide-${tp(a)}`, v),
      ...E
    })
  );
  return s.displayName = `${a}`, s;
};
/**
 * @license lucide-react v0.439.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lp = op("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), Pr = '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;letter-spacing:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*{border-color:hsl(var(--border))}body{background-color:hsl(var(--background));color:hsl(var(--foreground))}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.fixed{position:fixed}.bottom-4{bottom:1rem}.left-4{left:1rem}.right-4{right:1rem}.top-4{top:1rem}.z-50{z-index:50}.mb-4{margin-bottom:1rem}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.h-10{height:2.5rem}.h-4{height:1rem}.h-8{height:2rem}.h-9{height:2.25rem}.min-h-\\[60px\\]{min-height:60px}.w-4{width:1rem}.w-80{width:20rem}.w-9{width:2.25rem}.w-full{width:100%}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.whitespace-nowrap{white-space:nowrap}.rounded-lg{border-radius:var(--radius)}.rounded-md{border-radius:calc(var(--radius) - 2px)}.border{border-width:1px}.border-input{border-color:hsl(var(--input))}.bg-background{background-color:hsl(var(--background))}.bg-destructive{background-color:hsl(var(--destructive))}.bg-primary{background-color:hsl(var(--primary))}.bg-secondary{background-color:hsl(var(--secondary))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity: 1;background-color:rgb(255 255 255 / var(--tw-bg-opacity))}.p-6{padding:1.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-8{padding-left:2rem;padding-right:2rem}.py-1{padding-top:.25rem;padding-bottom:.25rem}.py-2{padding-top:.5rem;padding-bottom:.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.text-destructive-foreground{color:hsl(var(--destructive-foreground))}.text-primary{color:hsl(var(--primary))}.text-primary-foreground{color:hsl(var(--primary-foreground))}.text-secondary-foreground{color:hsl(var(--secondary-foreground))}.underline-offset-4{text-underline-offset:4px}.shadow{--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / .1), 0 1px 2px -1px rgb(0 0 0 / .1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-lg{--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / .1), 0 4px 6px -4px rgb(0 0 0 / .1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.shadow-sm{--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / .05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}.outline{outline-style:solid}.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}@keyframes enter{0%{opacity:var(--tw-enter-opacity, 1);transform:translate3d(var(--tw-enter-translate-x, 0),var(--tw-enter-translate-y, 0),0) scale3d(var(--tw-enter-scale, 1),var(--tw-enter-scale, 1),var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0))}}@keyframes exit{to{opacity:var(--tw-exit-opacity, 1);transform:translate3d(var(--tw-exit-translate-x, 0),var(--tw-exit-translate-y, 0),0) scale3d(var(--tw-exit-scale, 1),var(--tw-exit-scale, 1),var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0))}}.file\\:border-0::file-selector-button{border-width:0px}.file\\:bg-transparent::file-selector-button{background-color:transparent}.file\\:text-sm::file-selector-button{font-size:.875rem;line-height:1.25rem}.file\\:font-medium::file-selector-button{font-weight:500}.placeholder\\:text-muted-foreground::-moz-placeholder{color:hsl(var(--muted-foreground))}.placeholder\\:text-muted-foreground::placeholder{color:hsl(var(--muted-foreground))}.hover\\:bg-accent:hover{background-color:hsl(var(--accent))}.hover\\:bg-destructive\\/90:hover{background-color:hsl(var(--destructive) / .9)}.hover\\:bg-primary\\/90:hover{background-color:hsl(var(--primary) / .9)}.hover\\:bg-secondary\\/80:hover{background-color:hsl(var(--secondary) / .8)}.hover\\:text-accent-foreground:hover{color:hsl(var(--accent-foreground))}.hover\\:underline:hover{text-decoration-line:underline}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-1:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.focus-visible\\:ring-ring:focus-visible{--tw-ring-color: hsl(var(--ring))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-50:disabled{opacity:.5}';
function ip({
  position: a,
  primaryColor: p,
  companyName: s
}) {
  const [v, E] = he.useState(!1), [S, P] = he.useState(""), [_, O] = he.useState(""), U = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4"
  }, $ = async (V) => {
    V.preventDefault(), console.log("Feedback submitted:", { feedback: S, email: _ }), E(!1), P(""), O("");
  };
  return /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
    /* @__PURE__ */ ee.jsx("style", { children: Pr }),
    /* @__PURE__ */ ee.jsxs("div", { className: `fixed ${U[a]} z-50`, children: [
      !v && /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
        /* @__PURE__ */ ee.jsx("style", { children: Pr }),
        /* @__PURE__ */ ee.jsx(
          Vo,
          {
            onClick: () => E(!0),
            style: { backgroundColor: p },
            children: "Feedback"
          }
        )
      ] }),
      v && /* @__PURE__ */ ee.jsxs(ee.Fragment, { children: [
        /* @__PURE__ */ ee.jsx("style", { children: Pr }),
        /* @__PURE__ */ ee.jsxs("div", { className: "bg-white rounded-lg shadow-lg p-6 w-80", children: [
          /* @__PURE__ */ ee.jsxs("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ ee.jsxs("h3", { className: "text-lg font-semibold", children: [
              "Send Feedback to ",
              s
            ] }),
            /* @__PURE__ */ ee.jsx(
              Vo,
              {
                variant: "ghost",
                size: "icon",
                onClick: () => E(!1),
                children: /* @__PURE__ */ ee.jsx(lp, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ ee.jsx("style", { children: Pr }),
          /* @__PURE__ */ ee.jsxs("form", { onSubmit: $, className: "space-y-4", children: [
            /* @__PURE__ */ ee.jsx("style", { children: Pr }),
            /* @__PURE__ */ ee.jsx(
              ic,
              {
                placeholder: "Your feedback...",
                value: S,
                onChange: (V) => P(V.target.value),
                required: !0,
                className: "w-full"
              }
            ),
            /* @__PURE__ */ ee.jsx(
              uc,
              {
                type: "email",
                placeholder: "Your email (optional)",
                value: _,
                onChange: (V) => O(V.target.value),
                className: "w-full"
              }
            ),
            /* @__PURE__ */ ee.jsx(
              Vo,
              {
                type: "submit",
                style: { backgroundColor: p },
                className: "w-full",
                children: "Send Feedback"
              }
            )
          ] })
        ] })
      ] })
    ] })
  ] });
}
class up extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const p = this.getPropsFromAttributes();
    this.shadowRoot && Ai.createRoot(this.shadowRoot).render(
      /* @__PURE__ */ ee.jsx(
        ip,
        {
          position: p.position || "bottom-right",
          primaryColor: p.primaryColor || "#000000",
          companyName: p.companyName || "Empresa",
          ...p
        }
      )
    );
  }
  getPropsFromAttributes() {
    const p = {};
    for (const { name: s, value: v } of this.attributes)
      p[sf(s)] = v;
    return p;
  }
}
customElements.define("feedback-widget", up);
