var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a2, b2) => (typeof require !== "undefined" ? require : a2)[b2]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all3) => {
  for (var name4 in all3)
    __defProp(target, name4, { get: all3[name4], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// wrangler-modules-watch:wrangler:modules-watch
var init_wrangler_modules_watch = __esm({
  "wrangler-modules-watch:wrangler:modules-watch"() {
    init_modules_watch_stub();
  }
});

// node_modules/wrangler/templates/modules-watch-stub.js
var init_modules_watch_stub = __esm({
  "node_modules/wrangler/templates/modules-watch-stub.js"() {
    init_wrangler_modules_watch();
  }
});

// node_modules/discord-interactions/dist/util.js
var require_util = __commonJS({
  "node_modules/discord-interactions/dist/util.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concatUint8Arrays = exports.valueToUint8Array = exports.subtleCrypto = void 0;
    function getSubtleCrypto() {
      if (typeof window !== "undefined" && window.crypto) {
        return window.crypto.subtle;
      }
      if (typeof globalThis !== "undefined" && globalThis.crypto) {
        return globalThis.crypto.subtle;
      }
      if (typeof crypto !== "undefined") {
        return crypto.subtle;
      }
      if (typeof __require === "function") {
        const cryptoPackage = "node:crypto";
        const crypto2 = __require(cryptoPackage);
        return crypto2.webcrypto.subtle;
      }
      throw new Error("No Web Crypto API implementation found");
    }
    exports.subtleCrypto = getSubtleCrypto();
    function valueToUint8Array(value, format) {
      if (value == null) {
        return new Uint8Array();
      }
      if (typeof value === "string") {
        if (format === "hex") {
          const matches = value.match(/.{1,2}/g);
          if (matches == null) {
            throw new Error("Value is not a valid hex string");
          }
          const hexVal = matches.map((byte) => Number.parseInt(byte, 16));
          return new Uint8Array(hexVal);
        }
        return new TextEncoder().encode(value);
      }
      try {
        if (Buffer.isBuffer(value)) {
          return new Uint8Array(value);
        }
      } catch (ex) {
      }
      if (value instanceof ArrayBuffer) {
        return new Uint8Array(value);
      }
      if (value instanceof Uint8Array) {
        return value;
      }
      throw new Error("Unrecognized value type, must be one of: string, Buffer, ArrayBuffer, Uint8Array");
    }
    exports.valueToUint8Array = valueToUint8Array;
    function concatUint8Arrays(arr1, arr2) {
      const merged = new Uint8Array(arr1.length + arr2.length);
      merged.set(arr1);
      merged.set(arr2, arr1.length);
      return merged;
    }
    exports.concatUint8Arrays = concatUint8Arrays;
  }
});

// node_modules/discord-interactions/dist/components.js
var require_components = __commonJS({
  "node_modules/discord-interactions/dist/components.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TextStyleTypes = exports.ChannelTypes = exports.ButtonStyleTypes = exports.MessageComponentTypes = void 0;
    var MessageComponentTypes;
    (function(MessageComponentTypes2) {
      MessageComponentTypes2[MessageComponentTypes2["ACTION_ROW"] = 1] = "ACTION_ROW";
      MessageComponentTypes2[MessageComponentTypes2["BUTTON"] = 2] = "BUTTON";
      MessageComponentTypes2[MessageComponentTypes2["STRING_SELECT"] = 3] = "STRING_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["INPUT_TEXT"] = 4] = "INPUT_TEXT";
      MessageComponentTypes2[MessageComponentTypes2["USER_SELECT"] = 5] = "USER_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["ROLE_SELECT"] = 6] = "ROLE_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["MENTIONABLE_SELECT"] = 7] = "MENTIONABLE_SELECT";
      MessageComponentTypes2[MessageComponentTypes2["CHANNEL_SELECT"] = 8] = "CHANNEL_SELECT";
    })(MessageComponentTypes || (exports.MessageComponentTypes = MessageComponentTypes = {}));
    var ButtonStyleTypes;
    (function(ButtonStyleTypes2) {
      ButtonStyleTypes2[ButtonStyleTypes2["PRIMARY"] = 1] = "PRIMARY";
      ButtonStyleTypes2[ButtonStyleTypes2["SECONDARY"] = 2] = "SECONDARY";
      ButtonStyleTypes2[ButtonStyleTypes2["SUCCESS"] = 3] = "SUCCESS";
      ButtonStyleTypes2[ButtonStyleTypes2["DANGER"] = 4] = "DANGER";
      ButtonStyleTypes2[ButtonStyleTypes2["LINK"] = 5] = "LINK";
      ButtonStyleTypes2[ButtonStyleTypes2["PREMIUM"] = 6] = "PREMIUM";
    })(ButtonStyleTypes || (exports.ButtonStyleTypes = ButtonStyleTypes = {}));
    var ChannelTypes;
    (function(ChannelTypes2) {
      ChannelTypes2[ChannelTypes2["DM"] = 1] = "DM";
      ChannelTypes2[ChannelTypes2["GROUP_DM"] = 3] = "GROUP_DM";
      ChannelTypes2[ChannelTypes2["GUILD_TEXT"] = 0] = "GUILD_TEXT";
      ChannelTypes2[ChannelTypes2["GUILD_VOICE"] = 2] = "GUILD_VOICE";
      ChannelTypes2[ChannelTypes2["GUILD_CATEGORY"] = 4] = "GUILD_CATEGORY";
      ChannelTypes2[ChannelTypes2["GUILD_ANNOUNCEMENT"] = 5] = "GUILD_ANNOUNCEMENT";
      ChannelTypes2[ChannelTypes2["GUILD_STORE"] = 6] = "GUILD_STORE";
    })(ChannelTypes || (exports.ChannelTypes = ChannelTypes = {}));
    var TextStyleTypes;
    (function(TextStyleTypes2) {
      TextStyleTypes2[TextStyleTypes2["SHORT"] = 1] = "SHORT";
      TextStyleTypes2[TextStyleTypes2["PARAGRAPH"] = 2] = "PARAGRAPH";
    })(TextStyleTypes || (exports.TextStyleTypes = TextStyleTypes = {}));
  }
});

// node_modules/discord-interactions/dist/index.js
var require_dist = __commonJS({
  "node_modules/discord-interactions/dist/index.js"(exports) {
    "use strict";
    init_modules_watch_stub();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o2[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p2 in m)
        if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2))
          __createBinding(exports2, m, p2);
    };
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.verifyKeyMiddleware = exports.verifyKey = exports.InteractionResponseFlags = exports.InteractionResponseType = exports.InteractionType = void 0;
    var util_1 = require_util();
    var InteractionType2;
    (function(InteractionType3) {
      InteractionType3[InteractionType3["PING"] = 1] = "PING";
      InteractionType3[InteractionType3["APPLICATION_COMMAND"] = 2] = "APPLICATION_COMMAND";
      InteractionType3[InteractionType3["MESSAGE_COMPONENT"] = 3] = "MESSAGE_COMPONENT";
      InteractionType3[InteractionType3["APPLICATION_COMMAND_AUTOCOMPLETE"] = 4] = "APPLICATION_COMMAND_AUTOCOMPLETE";
      InteractionType3[InteractionType3["MODAL_SUBMIT"] = 5] = "MODAL_SUBMIT";
    })(InteractionType2 || (exports.InteractionType = InteractionType2 = {}));
    var InteractionResponseType2;
    (function(InteractionResponseType3) {
      InteractionResponseType3[InteractionResponseType3["PONG"] = 1] = "PONG";
      InteractionResponseType3[InteractionResponseType3["CHANNEL_MESSAGE_WITH_SOURCE"] = 4] = "CHANNEL_MESSAGE_WITH_SOURCE";
      InteractionResponseType3[InteractionResponseType3["DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE"] = 5] = "DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE";
      InteractionResponseType3[InteractionResponseType3["DEFERRED_UPDATE_MESSAGE"] = 6] = "DEFERRED_UPDATE_MESSAGE";
      InteractionResponseType3[InteractionResponseType3["UPDATE_MESSAGE"] = 7] = "UPDATE_MESSAGE";
      InteractionResponseType3[InteractionResponseType3["APPLICATION_COMMAND_AUTOCOMPLETE_RESULT"] = 8] = "APPLICATION_COMMAND_AUTOCOMPLETE_RESULT";
      InteractionResponseType3[InteractionResponseType3["MODAL"] = 9] = "MODAL";
      InteractionResponseType3[InteractionResponseType3["PREMIUM_REQUIRED"] = 10] = "PREMIUM_REQUIRED";
    })(InteractionResponseType2 || (exports.InteractionResponseType = InteractionResponseType2 = {}));
    var InteractionResponseFlags2;
    (function(InteractionResponseFlags3) {
      InteractionResponseFlags3[InteractionResponseFlags3["EPHEMERAL"] = 64] = "EPHEMERAL";
    })(InteractionResponseFlags2 || (exports.InteractionResponseFlags = InteractionResponseFlags2 = {}));
    function verifyKey2(rawBody, signature, timestamp, clientPublicKey) {
      return __awaiter(this, void 0, void 0, function* () {
        try {
          const timestampData = (0, util_1.valueToUint8Array)(timestamp);
          const bodyData = (0, util_1.valueToUint8Array)(rawBody);
          const message = (0, util_1.concatUint8Arrays)(timestampData, bodyData);
          const publicKey = typeof clientPublicKey === "string" ? yield util_1.subtleCrypto.importKey("raw", (0, util_1.valueToUint8Array)(clientPublicKey, "hex"), {
            name: "ed25519",
            namedCurve: "ed25519"
          }, false, ["verify"]) : clientPublicKey;
          const isValid = yield util_1.subtleCrypto.verify({
            name: "ed25519"
          }, publicKey, (0, util_1.valueToUint8Array)(signature, "hex"), message);
          return isValid;
        } catch (ex) {
          return false;
        }
      });
    }
    exports.verifyKey = verifyKey2;
    function verifyKeyMiddleware(clientPublicKey) {
      if (!clientPublicKey) {
        throw new Error("You must specify a Discord client public key");
      }
      return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
        const timestamp = req.header("X-Signature-Timestamp") || "";
        const signature = req.header("X-Signature-Ed25519") || "";
        if (!timestamp || !signature) {
          res.statusCode = 401;
          res.end("[discord-interactions] Invalid signature");
          return;
        }
        function onBodyComplete(rawBody) {
          return __awaiter(this, void 0, void 0, function* () {
            const isValid = yield verifyKey2(rawBody, signature, timestamp, clientPublicKey);
            if (!isValid) {
              res.statusCode = 401;
              res.end("[discord-interactions] Invalid signature");
              return;
            }
            const body = JSON.parse(rawBody.toString("utf-8")) || {};
            if (body.type === InteractionType2.PING) {
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({
                type: InteractionResponseType2.PONG
              }));
              return;
            }
            req.body = body;
            next();
          });
        }
        if (req.body) {
          if (Buffer.isBuffer(req.body)) {
            yield onBodyComplete(req.body);
          } else if (typeof req.body === "string") {
            yield onBodyComplete(Buffer.from(req.body, "utf-8"));
          } else {
            console.warn("[discord-interactions]: req.body was tampered with, probably by some other middleware. We recommend disabling middleware for interaction routes so that req.body is a raw buffer.");
            yield onBodyComplete(Buffer.from(JSON.stringify(req.body), "utf-8"));
          }
        } else {
          const chunks = [];
          req.on("data", (chunk) => {
            chunks.push(chunk);
          });
          req.on("end", () => __awaiter(this, void 0, void 0, function* () {
            const rawBody = Buffer.concat(chunks);
            yield onBodyComplete(rawBody);
          }));
        }
      });
    }
    exports.verifyKeyMiddleware = verifyKeyMiddleware;
    __exportStar(require_components(), exports);
  }
});

// src/server.js
init_modules_watch_stub();

// node_modules/itty-router/index.mjs
init_modules_watch_stub();
var t = ({ base: e = "", routes: t2 = [], ...r2 } = {}) => ({ __proto__: new Proxy({}, { get: (r3, o2, a2, s2) => (r4, ...c2) => t2.push([o2.toUpperCase?.(), RegExp(`^${(s2 = (e + r4).replace(/\/+(\/|$)/g, "$1")).replace(/(\/?\.?):(\w+)\+/g, "($1(?<$2>*))").replace(/(\/?\.?):(\w+)/g, "($1(?<$2>[^$1/]+?))").replace(/\./g, "\\.").replace(/(\/?)\*/g, "($1.*)?")}/*$`), c2, s2]) && a2 }), routes: t2, ...r2, async fetch(e2, ...o2) {
  let a2, s2, c2 = new URL(e2.url), n2 = e2.query = { __proto__: null };
  for (let [e3, t3] of c2.searchParams)
    n2[e3] = n2[e3] ? [].concat(n2[e3], t3) : t3;
  e:
    try {
      for (let t3 of r2.before || [])
        if (null != (a2 = await t3(e2.proxy ?? e2, ...o2)))
          break e;
      t:
        for (let [r3, n3, l, i] of t2)
          if ((r3 == e2.method || "ALL" == r3) && (s2 = c2.pathname.match(n3))) {
            e2.params = s2.groups || {}, e2.route = i;
            for (let t3 of l)
              if (null != (a2 = await t3(e2.proxy ?? e2, ...o2)))
                break t;
          }
    } catch (t3) {
      if (!r2.catch)
        throw t3;
      a2 = await r2.catch(t3, e2.proxy ?? e2, ...o2);
    }
  try {
    for (let t3 of r2.finally || [])
      a2 = await t3(a2, e2.proxy ?? e2, ...o2) ?? a2;
  } catch (t3) {
    if (!r2.catch)
      throw t3;
    a2 = await r2.catch(t3, e2.proxy ?? e2, ...o2);
  }
  return a2;
} });
var r = (e = "text/plain; charset=utf-8", t2) => (r2, { ...o2 } = {}) => {
  if (void 0 === r2 || r2 instanceof Response)
    return r2;
  const a2 = new Response(t2?.(r2) ?? r2, o2);
  return a2.headers.set("content-type", e), a2;
};
var o = r("application/json; charset=utf-8", JSON.stringify);
var a = (e) => ({ 400: "Bad Request", 401: "Unauthorized", 403: "Forbidden", 404: "Not Found", 500: "Internal Server Error" })[e] || "Unknown Error";
var s = (e = 500, t2) => {
  if (e instanceof Error) {
    const { message: r2, ...o2 } = e;
    e = e.status || 500, t2 = { error: r2 || a(e), ...o2 };
  }
  return t2 = { status: e, ..."object" == typeof t2 ? t2 : { error: t2 || a(e) } }, o(t2, { status: e });
};
var c = (e) => {
  e.proxy = new Proxy(e.proxy || e, { get: (t2, r2) => void 0 !== t2[r2] ? t2[r2]?.bind?.(e) || t2[r2] : t2?.params?.[r2] });
};
var n = ({ format: e = o, missing: r2 = () => s(404), finally: a2 = [], before: n2 = [], ...l } = {}) => t({ before: [c, ...n2], catch: s, finally: [(e2, ...t2) => e2 ?? r2(e2, ...t2), e, ...a2], ...l });
var p = r("text/plain; charset=utf-8", String);
var f = r("text/html");
var u = r("image/jpeg");
var h = r("image/png");
var g = r("image/webp");

// node_modules/axios/index.js
init_modules_watch_stub();

// node_modules/axios/lib/axios.js
init_modules_watch_stub();

// node_modules/axios/lib/utils.js
init_modules_watch_stub();

// node_modules/axios/lib/helpers/bind.js
init_modules_watch_stub();
function bind(fn, thisArg) {
  return function wrap2() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
var kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray } = Array;
var isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
var isString = typeOfTest("string");
var isFunction = typeOfTest("function");
var isNumber = typeOfTest("number");
var isObject = (thing) => thing !== null && typeof thing === "object";
var isBoolean = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isStream = (val) => isObject(val) && isFunction(val.pipe);
var isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || // detect form-data instance
  kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var [isReadableStream, isRequest, isResponse, isHeaders] = ["ReadableStream", "Request", "Response", "Headers"].map(kindOfTest);
var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = (() => {
  if (typeof globalThis !== "undefined")
    return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
var isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
var extend = (a2, b2, thisArg, { allOwnKeys } = {}) => {
  forEach(b2, (val, key) => {
    if (thisArg && isFunction(val)) {
      a2[key] = bind(val, thisArg);
    } else {
      a2[key] = val;
    }
  }, { allOwnKeys });
  return a2;
};
var stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
var inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null)
    return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
var endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
var toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
var isTypedArray = ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
var forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
var matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
var isRegExp = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name4) => {
    let ret;
    if ((ret = reducer(descriptor, name4, obj)) !== false) {
      reducedDescriptors[name4] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
var freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name4) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name4) !== -1) {
      return false;
    }
    const value = obj[name4];
    if (!isFunction(value))
      return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name4 + "'");
      };
    }
  });
};
var toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = () => {
};
var toFiniteNumber = (value, defaultValue) => {
  return value != null && Number.isFinite(value = +value) ? value : defaultValue;
};
var ALPHA = "abcdefghijklmnopqrstuvwxyz";
var DIGIT = "0123456789";
var ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var isAsyncFn = kindOfTest("AsyncFunction");
var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
var _setImmediate = ((setImmediateSupported, postMessageSupported) => {
  if (setImmediateSupported) {
    return setImmediate;
  }
  return postMessageSupported ? ((token, callbacks) => {
    _global.addEventListener("message", ({ source, data }) => {
      if (source === _global && data === token) {
        callbacks.length && callbacks.shift()();
      }
    }, false);
    return (cb) => {
      callbacks.push(cb);
      _global.postMessage(token, "*");
    };
  })(`axios@${Math.random()}`, []) : (cb) => setTimeout(cb);
})(
  typeof setImmediate === "function",
  isFunction(_global.postMessage)
);
var asap = typeof queueMicrotask !== "undefined" ? queueMicrotask.bind(_global) : typeof process !== "undefined" && process.nextTick || _setImmediate;
var utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isReadableStream,
  isRequest,
  isResponse,
  isHeaders,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable,
  setImmediate: _setImmediate,
  asap
};

// node_modules/axios/lib/core/Axios.js
init_modules_watch_stub();

// node_modules/axios/lib/helpers/buildURL.js
init_modules_watch_stub();

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
init_modules_watch_stub();

// node_modules/axios/lib/helpers/toFormData.js
init_modules_watch_stub();

// node_modules/axios/lib/core/AxiosError.js
init_modules_watch_stub();
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  if (response) {
    this.response = response;
    this.status = response.status ? response.status : null;
  }
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  utils_default.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/helpers/null.js
init_modules_watch_stub();
var null_default = null;

// node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path)
    return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData, options) {
  if (!utils_default.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData = formData || new (null_default || FormData)();
  options = utils_default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils_default.isSpecCompliantForm(formData);
  if (!utils_default.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils_default.isBlob(value)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData.append(
            // eslint-disable-next-line no-nested-ternary
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils_default.isUndefined(value))
      return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils_default.forEach(value, function each(el, key) {
      const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
        formData,
        el,
        utils_default.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils_default.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function append(name4, value) {
  this._pairs.push([name4, value]);
};
prototype2.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, options) {
  if (!params) {
    return url;
  }
  const _encode = options && options.encode || encode2;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}

// node_modules/axios/lib/core/InterceptorManager.js
init_modules_watch_stub();
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(fn) {
    utils_default.forEach(this.handlers, function forEachHandler(h2) {
      if (h2 !== null) {
        fn(h2);
      }
    });
  }
};
var InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/core/dispatchRequest.js
init_modules_watch_stub();

// node_modules/axios/lib/core/transformData.js
init_modules_watch_stub();

// node_modules/axios/lib/defaults/index.js
init_modules_watch_stub();

// node_modules/axios/lib/defaults/transitional.js
init_modules_watch_stub();
var transitional_default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
init_modules_watch_stub();

// node_modules/axios/lib/platform/index.js
init_modules_watch_stub();

// node_modules/axios/lib/platform/browser/index.js
init_modules_watch_stub();

// node_modules/axios/lib/platform/browser/classes/URLSearchParams.js
init_modules_watch_stub();
var URLSearchParams_default = typeof URLSearchParams !== "undefined" ? URLSearchParams : AxiosURLSearchParams_default;

// node_modules/axios/lib/platform/browser/classes/FormData.js
init_modules_watch_stub();
var FormData_default = typeof FormData !== "undefined" ? FormData : null;

// node_modules/axios/lib/platform/browser/classes/Blob.js
init_modules_watch_stub();
var Blob_default = typeof Blob !== "undefined" ? Blob : null;

// node_modules/axios/lib/platform/browser/index.js
var browser_default = {
  isBrowser: true,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: Blob_default
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};

// node_modules/axios/lib/platform/common/utils.js
var utils_exports = {};
__export(utils_exports, {
  hasBrowserEnv: () => hasBrowserEnv,
  hasStandardBrowserEnv: () => hasStandardBrowserEnv,
  hasStandardBrowserWebWorkerEnv: () => hasStandardBrowserWebWorkerEnv,
  navigator: () => _navigator,
  origin: () => origin
});
init_modules_watch_stub();
var hasBrowserEnv = typeof window !== "undefined" && typeof document !== "undefined";
var _navigator = typeof navigator === "object" && navigator || void 0;
var hasStandardBrowserEnv = hasBrowserEnv && (!_navigator || ["ReactNative", "NativeScript", "NS"].indexOf(_navigator.product) < 0);
var hasStandardBrowserWebWorkerEnv = (() => {
  return typeof WorkerGlobalScope !== "undefined" && // eslint-disable-next-line no-undef
  self instanceof WorkerGlobalScope && typeof self.importScripts === "function";
})();
var origin = hasBrowserEnv && window.location.href || "http://localhost";

// node_modules/axios/lib/platform/index.js
var platform_default = {
  ...utils_exports,
  ...browser_default
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new platform_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (platform_default.isNode && utils_default.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
init_modules_watch_stub();
function parsePropPath(name4) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name4).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData) {
  function buildPath(path, value, target, index) {
    let name4 = path[index++];
    if (name4 === "__proto__")
      return true;
    const isNumericKey = Number.isFinite(+name4);
    const isLast = index >= path.length;
    name4 = !name4 && utils_default.isArray(target) ? target.length : name4;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name4)) {
        target[name4] = [target[name4], value];
      } else {
        target[name4] = value;
      }
      return !isNumericKey;
    }
    if (!target[name4] || !utils_default.isObject(target[name4])) {
      target[name4] = [];
    }
    const result = buildPath(path, value, target[name4], index);
    if (result && utils_default.isArray(target[name4])) {
      target[name4] = arrayToObject(target[name4]);
    }
    return !isNumericKey;
  }
  if (utils_default.isFormData(formData) && utils_default.isFunction(formData.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData, (name4, value) => {
      buildPath(parsePropPath(name4), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils_default.isFormData(data);
    if (isFormData2) {
      return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    }
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data) || utils_default.isReadableStream(data)) {
      return data;
    }
    if (utils_default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils_default.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (utils_default.isResponse(data) || utils_default.isReadableStream(data)) {
      return data;
    }
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: platform_default.classes.FormData,
    Blob: platform_default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
var defaults_default = defaults;

// node_modules/axios/lib/core/AxiosHeaders.js
init_modules_watch_stub();

// node_modules/axios/lib/helpers/parseHeaders.js
init_modules_watch_stub();
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var parseHeaders_default = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils_default.isString(value))
    return;
  if (utils_default.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils_default.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w2, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils_default.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders_default(header), valueOrRewrite);
    } else if (utils_default.isHeaders(header)) {
      for (const [key, value] of header.entries()) {
        setHeader(value, key, rewrite);
      }
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils_default.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils_default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils_default.forEach(this, (value, header) => {
      const key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils_default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype3 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype3, _header);
        accessors[lHeader] = true;
      }
    }
    utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  const config = this || defaults_default;
  const context = response || config;
  const headers = AxiosHeaders_default.from(context.headers);
  let data = context.data;
  utils_default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}

// node_modules/axios/lib/cancel/isCancel.js
init_modules_watch_stub();
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
init_modules_watch_stub();
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: true
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/adapters/adapters.js
init_modules_watch_stub();

// node_modules/axios/lib/adapters/xhr.js
init_modules_watch_stub();

// node_modules/axios/lib/core/settle.js
init_modules_watch_stub();
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_default(
      "Request failed with status code " + response.status,
      [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

// node_modules/axios/lib/helpers/parseProtocol.js
init_modules_watch_stub();
function parseProtocol(url) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/progressEventReducer.js
init_modules_watch_stub();

// node_modules/axios/lib/helpers/speedometer.js
init_modules_watch_stub();
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/helpers/throttle.js
init_modules_watch_stub();
function throttle(fn, freq) {
  let timestamp = 0;
  let threshold = 1e3 / freq;
  let lastArgs;
  let timer;
  const invoke = (args, now = Date.now()) => {
    timestamp = now;
    lastArgs = null;
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    fn.apply(null, args);
  };
  const throttled = (...args) => {
    const now = Date.now();
    const passed = now - timestamp;
    if (passed >= threshold) {
      invoke(args, now);
    } else {
      lastArgs = args;
      if (!timer) {
        timer = setTimeout(() => {
          timer = null;
          invoke(lastArgs);
        }, threshold - passed);
      }
    }
  };
  const flush = () => lastArgs && invoke(lastArgs);
  return [throttled, flush];
}
var throttle_default = throttle;

// node_modules/axios/lib/helpers/progressEventReducer.js
var progressEventReducer = (listener, isDownloadStream, freq = 3) => {
  let bytesNotified = 0;
  const _speedometer = speedometer_default(50, 250);
  return throttle_default((e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e,
      lengthComputable: total != null,
      [isDownloadStream ? "download" : "upload"]: true
    };
    listener(data);
  }, freq);
};
var progressEventDecorator = (total, throttled) => {
  const lengthComputable = total != null;
  return [(loaded) => throttled[0]({
    lengthComputable,
    total,
    loaded
  }), throttled[1]];
};
var asyncDecorator = (fn) => (...args) => utils_default.asap(() => fn(...args));

// node_modules/axios/lib/helpers/resolveConfig.js
init_modules_watch_stub();

// node_modules/axios/lib/helpers/isURLSameOrigin.js
init_modules_watch_stub();
var isURLSameOrigin_default = platform_default.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function standardBrowserEnv() {
    const msie = platform_default.navigator && /(msie|trident)/i.test(platform_default.navigator.userAgent);
    const urlParsingNode = document.createElement("a");
    let originURL;
    function resolveURL(url) {
      let href = url;
      if (msie) {
        urlParsingNode.setAttribute("href", href);
        href = urlParsingNode.href;
      }
      urlParsingNode.setAttribute("href", href);
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
      };
    }
    originURL = resolveURL(window.location.href);
    return function isURLSameOrigin(requestURL) {
      const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
      return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  }()
);

// node_modules/axios/lib/helpers/cookies.js
init_modules_watch_stub();
var cookies_default = platform_default.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(name4, value, expires, path, domain, secure) {
      const cookie = [name4 + "=" + encodeURIComponent(value)];
      utils_default.isNumber(expires) && cookie.push("expires=" + new Date(expires).toGMTString());
      utils_default.isString(path) && cookie.push("path=" + path);
      utils_default.isString(domain) && cookie.push("domain=" + domain);
      secure === true && cookie.push("secure");
      document.cookie = cookie.join("; ");
    },
    read(name4) {
      const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name4 + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove(name4) {
      this.write(name4, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);

// node_modules/axios/lib/core/buildFullPath.js
init_modules_watch_stub();

// node_modules/axios/lib/helpers/isAbsoluteURL.js
init_modules_watch_stub();
function isAbsoluteURL(url) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
}

// node_modules/axios/lib/helpers/combineURLs.js
init_modules_watch_stub();
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/?\/$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// node_modules/axios/lib/core/mergeConfig.js
init_modules_watch_stub();
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? { ...thing } : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
      return utils_default.merge.call({ caseless }, target, source);
    } else if (utils_default.isPlainObject(source)) {
      return utils_default.merge({}, source);
    } else if (utils_default.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a2, b2, caseless) {
    if (!utils_default.isUndefined(b2)) {
      return getMergedValue(a2, b2, caseless);
    } else if (!utils_default.isUndefined(a2)) {
      return getMergedValue(void 0, a2, caseless);
    }
  }
  function valueFromConfig2(a2, b2) {
    if (!utils_default.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    }
  }
  function defaultToConfig2(a2, b2) {
    if (!utils_default.isUndefined(b2)) {
      return getMergedValue(void 0, b2);
    } else if (!utils_default.isUndefined(a2)) {
      return getMergedValue(void 0, a2);
    }
  }
  function mergeDirectKeys(a2, b2, prop) {
    if (prop in config2) {
      return getMergedValue(a2, b2);
    } else if (prop in config1) {
      return getMergedValue(void 0, a2);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    withXSRFToken: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a2, b2) => mergeDeepProperties(headersToObject(a2), headersToObject(b2), true)
  };
  utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

// node_modules/axios/lib/helpers/resolveConfig.js
var resolveConfig_default = (config) => {
  const newConfig = mergeConfig({}, config);
  let { data, withXSRFToken, xsrfHeaderName, xsrfCookieName, headers, auth: auth2 } = newConfig;
  newConfig.headers = headers = AxiosHeaders_default.from(headers);
  newConfig.url = buildURL(buildFullPath(newConfig.baseURL, newConfig.url), config.params, config.paramsSerializer);
  if (auth2) {
    headers.set(
      "Authorization",
      "Basic " + btoa((auth2.username || "") + ":" + (auth2.password ? unescape(encodeURIComponent(auth2.password)) : ""))
    );
  }
  let contentType;
  if (utils_default.isFormData(data)) {
    if (platform_default.hasStandardBrowserEnv || platform_default.hasStandardBrowserWebWorkerEnv) {
      headers.setContentType(void 0);
    } else if ((contentType = headers.getContentType()) !== false) {
      const [type, ...tokens] = contentType ? contentType.split(";").map((token) => token.trim()).filter(Boolean) : [];
      headers.setContentType([type || "multipart/form-data", ...tokens].join("; "));
    }
  }
  if (platform_default.hasStandardBrowserEnv) {
    withXSRFToken && utils_default.isFunction(withXSRFToken) && (withXSRFToken = withXSRFToken(newConfig));
    if (withXSRFToken || withXSRFToken !== false && isURLSameOrigin_default(newConfig.url)) {
      const xsrfValue = xsrfHeaderName && xsrfCookieName && cookies_default.read(xsrfCookieName);
      if (xsrfValue) {
        headers.set(xsrfHeaderName, xsrfValue);
      }
    }
  }
  return newConfig;
};

// node_modules/axios/lib/adapters/xhr.js
var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    const _config = resolveConfig_default(config);
    let requestData = _config.data;
    const requestHeaders = AxiosHeaders_default.from(_config.headers).normalize();
    let { responseType, onUploadProgress, onDownloadProgress } = _config;
    let onCanceled;
    let uploadThrottled, downloadThrottled;
    let flushUpload, flushDownload;
    function done() {
      flushUpload && flushUpload();
      flushDownload && flushDownload();
      _config.cancelToken && _config.cancelToken.unsubscribe(onCanceled);
      _config.signal && _config.signal.removeEventListener("abort", onCanceled);
    }
    let request = new XMLHttpRequest();
    request.open(_config.method.toUpperCase(), _config.url, true);
    request.timeout = _config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = _config.timeout ? "timeout of " + _config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = _config.transitional || transitional_default;
      if (_config.timeoutErrorMessage) {
        timeoutErrorMessage = _config.timeoutErrorMessage;
      }
      reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils_default.isUndefined(_config.withCredentials)) {
      request.withCredentials = !!_config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = _config.responseType;
    }
    if (onDownloadProgress) {
      [downloadThrottled, flushDownload] = progressEventReducer(onDownloadProgress, true);
      request.addEventListener("progress", downloadThrottled);
    }
    if (onUploadProgress && request.upload) {
      [uploadThrottled, flushUpload] = progressEventReducer(onUploadProgress);
      request.upload.addEventListener("progress", uploadThrottled);
      request.upload.addEventListener("loadend", flushUpload);
    }
    if (_config.cancelToken || _config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      _config.cancelToken && _config.cancelToken.subscribe(onCanceled);
      if (_config.signal) {
        _config.signal.aborted ? onCanceled() : _config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(_config.url);
    if (protocol && platform_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/adapters/fetch.js
init_modules_watch_stub();

// node_modules/axios/lib/helpers/composeSignals.js
init_modules_watch_stub();
var composeSignals = (signals, timeout) => {
  const { length } = signals = signals ? signals.filter(Boolean) : [];
  if (timeout || length) {
    let controller = new AbortController();
    let aborted;
    const onabort = function(reason) {
      if (!aborted) {
        aborted = true;
        unsubscribe();
        const err = reason instanceof Error ? reason : this.reason;
        controller.abort(err instanceof AxiosError_default ? err : new CanceledError_default(err instanceof Error ? err.message : err));
      }
    };
    let timer = timeout && setTimeout(() => {
      timer = null;
      onabort(new AxiosError_default(`timeout ${timeout} of ms exceeded`, AxiosError_default.ETIMEDOUT));
    }, timeout);
    const unsubscribe = () => {
      if (signals) {
        timer && clearTimeout(timer);
        timer = null;
        signals.forEach((signal2) => {
          signal2.unsubscribe ? signal2.unsubscribe(onabort) : signal2.removeEventListener("abort", onabort);
        });
        signals = null;
      }
    };
    signals.forEach((signal2) => signal2.addEventListener("abort", onabort));
    const { signal } = controller;
    signal.unsubscribe = () => utils_default.asap(unsubscribe);
    return signal;
  }
};
var composeSignals_default = composeSignals;

// node_modules/axios/lib/helpers/trackStream.js
init_modules_watch_stub();
var streamChunk = function* (chunk, chunkSize) {
  let len = chunk.byteLength;
  if (!chunkSize || len < chunkSize) {
    yield chunk;
    return;
  }
  let pos = 0;
  let end;
  while (pos < len) {
    end = pos + chunkSize;
    yield chunk.slice(pos, end);
    pos = end;
  }
};
var readBytes = async function* (iterable, chunkSize) {
  for await (const chunk of readStream(iterable)) {
    yield* streamChunk(chunk, chunkSize);
  }
};
var readStream = async function* (stream) {
  if (stream[Symbol.asyncIterator]) {
    yield* stream;
    return;
  }
  const reader = stream.getReader();
  try {
    for (; ; ) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      yield value;
    }
  } finally {
    await reader.cancel();
  }
};
var trackStream = (stream, chunkSize, onProgress, onFinish) => {
  const iterator = readBytes(stream, chunkSize);
  let bytes = 0;
  let done;
  let _onFinish = (e) => {
    if (!done) {
      done = true;
      onFinish && onFinish(e);
    }
  };
  return new ReadableStream({
    async pull(controller) {
      try {
        const { done: done2, value } = await iterator.next();
        if (done2) {
          _onFinish();
          controller.close();
          return;
        }
        let len = value.byteLength;
        if (onProgress) {
          let loadedBytes = bytes += len;
          onProgress(loadedBytes);
        }
        controller.enqueue(new Uint8Array(value));
      } catch (err) {
        _onFinish(err);
        throw err;
      }
    },
    cancel(reason) {
      _onFinish(reason);
      return iterator.return();
    }
  }, {
    highWaterMark: 2
  });
};

// node_modules/axios/lib/adapters/fetch.js
var isFetchSupported = typeof fetch === "function" && typeof Request === "function" && typeof Response === "function";
var isReadableStreamSupported = isFetchSupported && typeof ReadableStream === "function";
var encodeText = isFetchSupported && (typeof TextEncoder === "function" ? ((encoder) => (str) => encoder.encode(str))(new TextEncoder()) : async (str) => new Uint8Array(await new Response(str).arrayBuffer()));
var test = (fn, ...args) => {
  try {
    return !!fn(...args);
  } catch (e) {
    return false;
  }
};
var supportsRequestStream = isReadableStreamSupported && test(() => {
  let duplexAccessed = false;
  const hasContentType = new Request(platform_default.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      duplexAccessed = true;
      return "half";
    }
  }).headers.has("Content-Type");
  return duplexAccessed && !hasContentType;
});
var DEFAULT_CHUNK_SIZE = 64 * 1024;
var supportsResponseStream = isReadableStreamSupported && test(() => utils_default.isReadableStream(new Response("").body));
var resolvers = {
  stream: supportsResponseStream && ((res) => res.body)
};
isFetchSupported && ((res) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((type) => {
    !resolvers[type] && (resolvers[type] = utils_default.isFunction(res[type]) ? (res2) => res2[type]() : (_, config) => {
      throw new AxiosError_default(`Response type '${type}' is not supported`, AxiosError_default.ERR_NOT_SUPPORT, config);
    });
  });
})(new Response());
var getBodyLength = async (body) => {
  if (body == null) {
    return 0;
  }
  if (utils_default.isBlob(body)) {
    return body.size;
  }
  if (utils_default.isSpecCompliantForm(body)) {
    const _request = new Request(platform_default.origin, {
      method: "POST",
      body
    });
    return (await _request.arrayBuffer()).byteLength;
  }
  if (utils_default.isArrayBufferView(body) || utils_default.isArrayBuffer(body)) {
    return body.byteLength;
  }
  if (utils_default.isURLSearchParams(body)) {
    body = body + "";
  }
  if (utils_default.isString(body)) {
    return (await encodeText(body)).byteLength;
  }
};
var resolveBodyLength = async (headers, body) => {
  const length = utils_default.toFiniteNumber(headers.getContentLength());
  return length == null ? getBodyLength(body) : length;
};
var fetch_default = isFetchSupported && (async (config) => {
  let {
    url,
    method,
    data,
    signal,
    cancelToken,
    timeout,
    onDownloadProgress,
    onUploadProgress,
    responseType,
    headers,
    withCredentials = "same-origin",
    fetchOptions
  } = resolveConfig_default(config);
  responseType = responseType ? (responseType + "").toLowerCase() : "text";
  let composedSignal = composeSignals_default([signal, cancelToken && cancelToken.toAbortSignal()], timeout);
  let request;
  const unsubscribe = composedSignal && composedSignal.unsubscribe && (() => {
    composedSignal.unsubscribe();
  });
  let requestContentLength;
  try {
    if (onUploadProgress && supportsRequestStream && method !== "get" && method !== "head" && (requestContentLength = await resolveBodyLength(headers, data)) !== 0) {
      let _request = new Request(url, {
        method: "POST",
        body: data,
        duplex: "half"
      });
      let contentTypeHeader;
      if (utils_default.isFormData(data) && (contentTypeHeader = _request.headers.get("content-type"))) {
        headers.setContentType(contentTypeHeader);
      }
      if (_request.body) {
        const [onProgress, flush] = progressEventDecorator(
          requestContentLength,
          progressEventReducer(asyncDecorator(onUploadProgress))
        );
        data = trackStream(_request.body, DEFAULT_CHUNK_SIZE, onProgress, flush);
      }
    }
    if (!utils_default.isString(withCredentials)) {
      withCredentials = withCredentials ? "include" : "omit";
    }
    const isCredentialsSupported = "credentials" in Request.prototype;
    request = new Request(url, {
      ...fetchOptions,
      signal: composedSignal,
      method: method.toUpperCase(),
      headers: headers.normalize().toJSON(),
      body: data,
      duplex: "half",
      credentials: isCredentialsSupported ? withCredentials : void 0
    });
    let response = await fetch(request);
    const isStreamResponse = supportsResponseStream && (responseType === "stream" || responseType === "response");
    if (supportsResponseStream && (onDownloadProgress || isStreamResponse && unsubscribe)) {
      const options = {};
      ["status", "statusText", "headers"].forEach((prop) => {
        options[prop] = response[prop];
      });
      const responseContentLength = utils_default.toFiniteNumber(response.headers.get("content-length"));
      const [onProgress, flush] = onDownloadProgress && progressEventDecorator(
        responseContentLength,
        progressEventReducer(asyncDecorator(onDownloadProgress), true)
      ) || [];
      response = new Response(
        trackStream(response.body, DEFAULT_CHUNK_SIZE, onProgress, () => {
          flush && flush();
          unsubscribe && unsubscribe();
        }),
        options
      );
    }
    responseType = responseType || "text";
    let responseData = await resolvers[utils_default.findKey(resolvers, responseType) || "text"](response, config);
    !isStreamResponse && unsubscribe && unsubscribe();
    return await new Promise((resolve, reject) => {
      settle(resolve, reject, {
        data: responseData,
        headers: AxiosHeaders_default.from(response.headers),
        status: response.status,
        statusText: response.statusText,
        config,
        request
      });
    });
  } catch (err) {
    unsubscribe && unsubscribe();
    if (err && err.name === "TypeError" && /fetch/i.test(err.message)) {
      throw Object.assign(
        new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request),
        {
          cause: err.cause || err
        }
      );
    }
    throw AxiosError_default.from(err, err && err.code, config, request);
  }
});

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: null_default,
  xhr: xhr_default,
  fetch: fetch_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var renderReason = (reason) => `- ${reason}`;
var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError_default(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s2 = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError_default(
        `There is no suitable adapter to dispatch the request ` + s2,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError_default(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders_default.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders_default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

// node_modules/axios/lib/helpers/validator.js
init_modules_watch_stub();

// node_modules/axios/lib/env/data.js
init_modules_watch_stub();
var VERSION = "1.7.7";

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version4, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version4 ? " in " + version4 : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    }
    if (version4 && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version4 + " and will be removed in the near future"
        )
      );
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === void 0 || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
    }
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators;
var Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(configOrUrl, config) {
    try {
      return await this._request(configOrUrl, config);
    } catch (err) {
      if (err instanceof Error) {
        let dummy;
        Error.captureStackTrace ? Error.captureStackTrace(dummy = {}) : dummy = new Error();
        const stack = dummy.stack ? dummy.stack.replace(/^.+\n/, "") : "";
        try {
          if (!err.stack) {
            err.stack = stack;
          } else if (stack && !String(err.stack).endsWith(stack.replace(/^.+\n.+\n/, ""))) {
            err.stack += "\n" + stack;
          }
        } catch (e) {
        }
      }
      throw err;
    }
  }
  _request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator_default.assertOptions(transitional2, {
        silentJSONParsing: validators2.transitional(validators2.boolean),
        forcedJSONParsing: validators2.transitional(validators2.boolean),
        clarifyTimeoutError: validators2.transitional(validators2.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils_default.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator_default.assertOptions(paramsSerializer, {
          encode: validators2.function,
          serialize: validators2.function
        }, true);
      }
    }
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
init_modules_watch_stub();
var CancelToken = class {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError_default(message, config, request);
      resolvePromise(token.reason);
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  toAbortSignal() {
    const controller = new AbortController();
    const abort = (err) => {
      controller.abort(err);
    };
    this.subscribe(abort);
    controller.signal.unsubscribe = () => this.unsubscribe(abort);
    return controller.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c2) {
      cancel = c2;
    });
    return {
      token,
      cancel
    };
  }
};
var CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
init_modules_watch_stub();
function spread(callback) {
  return function wrap2(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
init_modules_watch_stub();
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === true;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
init_modules_watch_stub();
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  const context = new Axios_default(defaultConfig);
  const instance = bind(Axios_default.prototype.request, context);
  utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
  utils_default.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters_default.getAdapter;
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  getAdapter,
  mergeConfig: mergeConfig2
} = axios_default;

// src/server.js
var import_discord_interactions = __toESM(require_dist(), 1);

// src/commands.js
init_modules_watch_stub();
var RANDOM_VIDEO_COMMAND = {
  name: "randomvideo",
  description: "Get a random alfred channel video"
};
var INVITE_COMMAND = {
  name: "invite",
  description: "Get an invite link to add the bot to your server"
};

// src/reddit.js
init_modules_watch_stub();

// src/server.js
var import_discord_interactions2 = __toESM(require_dist(), 1);

// src/randomvideo.js
init_modules_watch_stub();

// node_modules/firebase/firestore/dist/esm/index.esm.js
init_modules_watch_stub();

// node_modules/@firebase/firestore/dist/index.esm2017.js
init_modules_watch_stub();

// node_modules/@firebase/app/dist/esm/index.esm2017.js
init_modules_watch_stub();

// node_modules/@firebase/component/dist/esm/index.esm2017.js
init_modules_watch_stub();

// node_modules/@firebase/util/dist/index.esm2017.js
init_modules_watch_stub();
var stringToByteArray$1 = function(str) {
  const out = [];
  let p2 = 0;
  for (let i = 0; i < str.length; i++) {
    let c2 = str.charCodeAt(i);
    if (c2 < 128) {
      out[p2++] = c2;
    } else if (c2 < 2048) {
      out[p2++] = c2 >> 6 | 192;
      out[p2++] = c2 & 63 | 128;
    } else if ((c2 & 64512) === 55296 && i + 1 < str.length && (str.charCodeAt(i + 1) & 64512) === 56320) {
      c2 = 65536 + ((c2 & 1023) << 10) + (str.charCodeAt(++i) & 1023);
      out[p2++] = c2 >> 18 | 240;
      out[p2++] = c2 >> 12 & 63 | 128;
      out[p2++] = c2 >> 6 & 63 | 128;
      out[p2++] = c2 & 63 | 128;
    } else {
      out[p2++] = c2 >> 12 | 224;
      out[p2++] = c2 >> 6 & 63 | 128;
      out[p2++] = c2 & 63 | 128;
    }
  }
  return out;
};
var byteArrayToString = function(bytes) {
  const out = [];
  let pos = 0, c2 = 0;
  while (pos < bytes.length) {
    const c1 = bytes[pos++];
    if (c1 < 128) {
      out[c2++] = String.fromCharCode(c1);
    } else if (c1 > 191 && c1 < 224) {
      const c22 = bytes[pos++];
      out[c2++] = String.fromCharCode((c1 & 31) << 6 | c22 & 63);
    } else if (c1 > 239 && c1 < 365) {
      const c22 = bytes[pos++];
      const c3 = bytes[pos++];
      const c4 = bytes[pos++];
      const u2 = ((c1 & 7) << 18 | (c22 & 63) << 12 | (c3 & 63) << 6 | c4 & 63) - 65536;
      out[c2++] = String.fromCharCode(55296 + (u2 >> 10));
      out[c2++] = String.fromCharCode(56320 + (u2 & 1023));
    } else {
      const c22 = bytes[pos++];
      const c3 = bytes[pos++];
      out[c2++] = String.fromCharCode((c1 & 15) << 12 | (c22 & 63) << 6 | c3 & 63);
    }
  }
  return out.join("");
};
var base64 = {
  /**
   * Maps bytes to characters.
   */
  byteToCharMap_: null,
  /**
   * Maps characters to bytes.
   */
  charToByteMap_: null,
  /**
   * Maps bytes to websafe characters.
   * @private
   */
  byteToCharMapWebSafe_: null,
  /**
   * Maps websafe characters to bytes.
   * @private
   */
  charToByteMapWebSafe_: null,
  /**
   * Our default alphabet, shared between
   * ENCODED_VALS and ENCODED_VALS_WEBSAFE
   */
  ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  /**
   * Our default alphabet. Value 64 (=) is special; it means "nothing."
   */
  get ENCODED_VALS() {
    return this.ENCODED_VALS_BASE + "+/=";
  },
  /**
   * Our websafe alphabet.
   */
  get ENCODED_VALS_WEBSAFE() {
    return this.ENCODED_VALS_BASE + "-_.";
  },
  /**
   * Whether this browser supports the atob and btoa functions. This extension
   * started at Mozilla but is now implemented by many browsers. We use the
   * ASSUME_* variables to avoid pulling in the full useragent detection library
   * but still allowing the standard per-browser compilations.
   *
   */
  HAS_NATIVE_SUPPORT: typeof atob === "function",
  /**
   * Base64-encode an array of bytes.
   *
   * @param input An array of bytes (numbers with
   *     value in [0, 255]) to encode.
   * @param webSafe Boolean indicating we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeByteArray(input, webSafe) {
    if (!Array.isArray(input)) {
      throw Error("encodeByteArray takes an array as a parameter");
    }
    this.init_();
    const byteToCharMap = webSafe ? this.byteToCharMapWebSafe_ : this.byteToCharMap_;
    const output = [];
    for (let i = 0; i < input.length; i += 3) {
      const byte1 = input[i];
      const haveByte2 = i + 1 < input.length;
      const byte2 = haveByte2 ? input[i + 1] : 0;
      const haveByte3 = i + 2 < input.length;
      const byte3 = haveByte3 ? input[i + 2] : 0;
      const outByte1 = byte1 >> 2;
      const outByte2 = (byte1 & 3) << 4 | byte2 >> 4;
      let outByte3 = (byte2 & 15) << 2 | byte3 >> 6;
      let outByte4 = byte3 & 63;
      if (!haveByte3) {
        outByte4 = 64;
        if (!haveByte2) {
          outByte3 = 64;
        }
      }
      output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
    }
    return output.join("");
  },
  /**
   * Base64-encode a string.
   *
   * @param input A string to encode.
   * @param webSafe If true, we should use the
   *     alternative alphabet.
   * @return The base64 encoded string.
   */
  encodeString(input, webSafe) {
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return btoa(input);
    }
    return this.encodeByteArray(stringToByteArray$1(input), webSafe);
  },
  /**
   * Base64-decode a string.
   *
   * @param input to decode.
   * @param webSafe True if we should use the
   *     alternative alphabet.
   * @return string representing the decoded value.
   */
  decodeString(input, webSafe) {
    if (this.HAS_NATIVE_SUPPORT && !webSafe) {
      return atob(input);
    }
    return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
  },
  /**
   * Base64-decode a string.
   *
   * In base-64 decoding, groups of four characters are converted into three
   * bytes.  If the encoder did not apply padding, the input length may not
   * be a multiple of 4.
   *
   * In this case, the last group will have fewer than 4 characters, and
   * padding will be inferred.  If the group has one or two characters, it decodes
   * to one byte.  If the group has three characters, it decodes to two bytes.
   *
   * @param input Input to decode.
   * @param webSafe True if we should use the web-safe alphabet.
   * @return bytes representing the decoded value.
   */
  decodeStringToByteArray(input, webSafe) {
    this.init_();
    const charToByteMap = webSafe ? this.charToByteMapWebSafe_ : this.charToByteMap_;
    const output = [];
    for (let i = 0; i < input.length; ) {
      const byte1 = charToByteMap[input.charAt(i++)];
      const haveByte2 = i < input.length;
      const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
      ++i;
      const haveByte3 = i < input.length;
      const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      const haveByte4 = i < input.length;
      const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
      ++i;
      if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
        throw new DecodeBase64StringError();
      }
      const outByte1 = byte1 << 2 | byte2 >> 4;
      output.push(outByte1);
      if (byte3 !== 64) {
        const outByte2 = byte2 << 4 & 240 | byte3 >> 2;
        output.push(outByte2);
        if (byte4 !== 64) {
          const outByte3 = byte3 << 6 & 192 | byte4;
          output.push(outByte3);
        }
      }
    }
    return output;
  },
  /**
   * Lazy static initialization function. Called before
   * accessing any of the static map variables.
   * @private
   */
  init_() {
    if (!this.byteToCharMap_) {
      this.byteToCharMap_ = {};
      this.charToByteMap_ = {};
      this.byteToCharMapWebSafe_ = {};
      this.charToByteMapWebSafe_ = {};
      for (let i = 0; i < this.ENCODED_VALS.length; i++) {
        this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
        this.charToByteMap_[this.byteToCharMap_[i]] = i;
        this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
        this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
        if (i >= this.ENCODED_VALS_BASE.length) {
          this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
          this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
        }
      }
    }
  }
};
var DecodeBase64StringError = class extends Error {
  constructor() {
    super(...arguments);
    this.name = "DecodeBase64StringError";
  }
};
var base64Encode = function(str) {
  const utf8Bytes = stringToByteArray$1(str);
  return base64.encodeByteArray(utf8Bytes, true);
};
var base64urlEncodeWithoutPadding = function(str) {
  return base64Encode(str).replace(/\./g, "");
};
var base64Decode = function(str) {
  try {
    return base64.decodeString(str, true);
  } catch (e) {
    console.error("base64Decode failed: ", e);
  }
  return null;
};
function getGlobal() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("Unable to locate global object.");
}
var getDefaultsFromGlobal = () => getGlobal().__FIREBASE_DEFAULTS__;
var getDefaultsFromEnvVariable = () => {
  if (typeof process === "undefined" || typeof process.env === "undefined") {
    return;
  }
  const defaultsJsonString = process.env.__FIREBASE_DEFAULTS__;
  if (defaultsJsonString) {
    return JSON.parse(defaultsJsonString);
  }
};
var getDefaultsFromCookie = () => {
  if (typeof document === "undefined") {
    return;
  }
  let match;
  try {
    match = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
  } catch (e) {
    return;
  }
  const decoded = match && base64Decode(match[1]);
  return decoded && JSON.parse(decoded);
};
var getDefaults = () => {
  try {
    return getDefaultsFromGlobal() || getDefaultsFromEnvVariable() || getDefaultsFromCookie();
  } catch (e) {
    console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
    return;
  }
};
var getDefaultEmulatorHost = (productName) => {
  var _a, _b;
  return (_b = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.emulatorHosts) === null || _b === void 0 ? void 0 : _b[productName];
};
var getDefaultAppConfig = () => {
  var _a;
  return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.config;
};
var getExperimentalSetting = (name4) => {
  var _a;
  return (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a[`_${name4}`];
};
var Deferred = class {
  constructor() {
    this.reject = () => {
    };
    this.resolve = () => {
    };
    this.promise = new Promise((resolve, reject) => {
      this.resolve = resolve;
      this.reject = reject;
    });
  }
  /**
   * Our API internals are not promisified and cannot because our callback APIs have subtle expectations around
   * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
   * and returns a node-style callback which will resolve or reject the Deferred's promise.
   */
  wrapCallback(callback) {
    return (error, value) => {
      if (error) {
        this.reject(error);
      } else {
        this.resolve(value);
      }
      if (typeof callback === "function") {
        this.promise.catch(() => {
        });
        if (callback.length === 1) {
          callback(error);
        } else {
          callback(error, value);
        }
      }
    };
  }
};
function getUA() {
  if (typeof navigator !== "undefined" && true) {
    return "Cloudflare-Workers";
  } else {
    return "";
  }
}
function isMobileCordova() {
  return typeof window !== "undefined" && // @ts-ignore Setting up an broadly applicable index signature for Window
  // just to deal with this case would probably be a bad idea.
  !!(window["cordova"] || window["phonegap"] || window["PhoneGap"]) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA());
}
function isNode() {
  var _a;
  const forceEnvironment = (_a = getDefaults()) === null || _a === void 0 ? void 0 : _a.forceEnvironment;
  if (forceEnvironment === "node") {
    return true;
  } else if (forceEnvironment === "browser") {
    return false;
  }
  try {
    return Object.prototype.toString.call(global.process) === "[object process]";
  } catch (e) {
    return false;
  }
}
function isCloudflareWorker() {
  return typeof navigator !== "undefined" && true;
}
function isBrowserExtension() {
  const runtime = typeof chrome === "object" ? chrome.runtime : typeof browser === "object" ? browser.runtime : void 0;
  return typeof runtime === "object" && runtime.id !== void 0;
}
function isReactNative() {
  return typeof navigator === "object" && navigator["product"] === "ReactNative";
}
function isIE() {
  const ua = getUA();
  return ua.indexOf("MSIE ") >= 0 || ua.indexOf("Trident/") >= 0;
}
function isSafari() {
  return !isNode() && true && "Cloudflare-Workers".includes("Safari") && !"Cloudflare-Workers".includes("Chrome");
}
function isIndexedDBAvailable() {
  try {
    return typeof indexedDB === "object";
  } catch (e) {
    return false;
  }
}
function validateIndexedDBOpenable() {
  return new Promise((resolve, reject) => {
    try {
      let preExist = true;
      const DB_CHECK_NAME = "validate-browser-context-for-indexeddb-analytics-module";
      const request = self.indexedDB.open(DB_CHECK_NAME);
      request.onsuccess = () => {
        request.result.close();
        if (!preExist) {
          self.indexedDB.deleteDatabase(DB_CHECK_NAME);
        }
        resolve(true);
      };
      request.onupgradeneeded = () => {
        preExist = false;
      };
      request.onerror = () => {
        var _a;
        reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || "");
      };
    } catch (error) {
      reject(error);
    }
  });
}
var ERROR_NAME = "FirebaseError";
var FirebaseError = class extends Error {
  constructor(code, message, customData) {
    super(message);
    this.code = code;
    this.customData = customData;
    this.name = ERROR_NAME;
    Object.setPrototypeOf(this, FirebaseError.prototype);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErrorFactory.prototype.create);
    }
  }
};
var ErrorFactory = class {
  constructor(service, serviceName, errors) {
    this.service = service;
    this.serviceName = serviceName;
    this.errors = errors;
  }
  create(code, ...data) {
    const customData = data[0] || {};
    const fullCode = `${this.service}/${code}`;
    const template = this.errors[code];
    const message = template ? replaceTemplate(template, customData) : "Error";
    const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
    const error = new FirebaseError(fullCode, fullMessage, customData);
    return error;
  }
};
function replaceTemplate(template, data) {
  return template.replace(PATTERN, (_, key) => {
    const value = data[key];
    return value != null ? String(value) : `<${key}?>`;
  });
}
var PATTERN = /\{\$([^}]+)}/g;
function isEmpty(obj) {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false;
    }
  }
  return true;
}
function deepEqual(a2, b2) {
  if (a2 === b2) {
    return true;
  }
  const aKeys = Object.keys(a2);
  const bKeys = Object.keys(b2);
  for (const k of aKeys) {
    if (!bKeys.includes(k)) {
      return false;
    }
    const aProp = a2[k];
    const bProp = b2[k];
    if (isObject2(aProp) && isObject2(bProp)) {
      if (!deepEqual(aProp, bProp)) {
        return false;
      }
    } else if (aProp !== bProp) {
      return false;
    }
  }
  for (const k of bKeys) {
    if (!aKeys.includes(k)) {
      return false;
    }
  }
  return true;
}
function isObject2(thing) {
  return thing !== null && typeof thing === "object";
}
function querystring(querystringParams) {
  const params = [];
  for (const [key, value] of Object.entries(querystringParams)) {
    if (Array.isArray(value)) {
      value.forEach((arrayVal) => {
        params.push(encodeURIComponent(key) + "=" + encodeURIComponent(arrayVal));
      });
    } else {
      params.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
    }
  }
  return params.length ? "&" + params.join("&") : "";
}
function querystringDecode(querystring2) {
  const obj = {};
  const tokens = querystring2.replace(/^\?/, "").split("&");
  tokens.forEach((token) => {
    if (token) {
      const [key, value] = token.split("=");
      obj[decodeURIComponent(key)] = decodeURIComponent(value);
    }
  });
  return obj;
}
function extractQuerystring(url) {
  const queryStart = url.indexOf("?");
  if (!queryStart) {
    return "";
  }
  const fragmentStart = url.indexOf("#", queryStart);
  return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : void 0);
}
function createSubscribe(executor, onNoObservers) {
  const proxy = new ObserverProxy(executor, onNoObservers);
  return proxy.subscribe.bind(proxy);
}
var ObserverProxy = class {
  /**
   * @param executor Function which can make calls to a single Observer
   *     as a proxy.
   * @param onNoObservers Callback when count of Observers goes to zero.
   */
  constructor(executor, onNoObservers) {
    this.observers = [];
    this.unsubscribes = [];
    this.observerCount = 0;
    this.task = Promise.resolve();
    this.finalized = false;
    this.onNoObservers = onNoObservers;
    this.task.then(() => {
      executor(this);
    }).catch((e) => {
      this.error(e);
    });
  }
  next(value) {
    this.forEachObserver((observer) => {
      observer.next(value);
    });
  }
  error(error) {
    this.forEachObserver((observer) => {
      observer.error(error);
    });
    this.close(error);
  }
  complete() {
    this.forEachObserver((observer) => {
      observer.complete();
    });
    this.close();
  }
  /**
   * Subscribe function that can be used to add an Observer to the fan-out list.
   *
   * - We require that no event is sent to a subscriber synchronously to their
   *   call to subscribe().
   */
  subscribe(nextOrObserver, error, complete) {
    let observer;
    if (nextOrObserver === void 0 && error === void 0 && complete === void 0) {
      throw new Error("Missing Observer.");
    }
    if (implementsAnyMethods(nextOrObserver, [
      "next",
      "error",
      "complete"
    ])) {
      observer = nextOrObserver;
    } else {
      observer = {
        next: nextOrObserver,
        error,
        complete
      };
    }
    if (observer.next === void 0) {
      observer.next = noop2;
    }
    if (observer.error === void 0) {
      observer.error = noop2;
    }
    if (observer.complete === void 0) {
      observer.complete = noop2;
    }
    const unsub = this.unsubscribeOne.bind(this, this.observers.length);
    if (this.finalized) {
      this.task.then(() => {
        try {
          if (this.finalError) {
            observer.error(this.finalError);
          } else {
            observer.complete();
          }
        } catch (e) {
        }
        return;
      });
    }
    this.observers.push(observer);
    return unsub;
  }
  // Unsubscribe is synchronous - we guarantee that no events are sent to
  // any unsubscribed Observer.
  unsubscribeOne(i) {
    if (this.observers === void 0 || this.observers[i] === void 0) {
      return;
    }
    delete this.observers[i];
    this.observerCount -= 1;
    if (this.observerCount === 0 && this.onNoObservers !== void 0) {
      this.onNoObservers(this);
    }
  }
  forEachObserver(fn) {
    if (this.finalized) {
      return;
    }
    for (let i = 0; i < this.observers.length; i++) {
      this.sendOne(i, fn);
    }
  }
  // Call the Observer via one of it's callback function. We are careful to
  // confirm that the observe has not been unsubscribed since this asynchronous
  // function had been queued.
  sendOne(i, fn) {
    this.task.then(() => {
      if (this.observers !== void 0 && this.observers[i] !== void 0) {
        try {
          fn(this.observers[i]);
        } catch (e) {
          if (typeof console !== "undefined" && console.error) {
            console.error(e);
          }
        }
      }
    });
  }
  close(err) {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    if (err !== void 0) {
      this.finalError = err;
    }
    this.task.then(() => {
      this.observers = void 0;
      this.onNoObservers = void 0;
    });
  }
};
function implementsAnyMethods(obj, methods) {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  for (const method of methods) {
    if (method in obj && typeof obj[method] === "function") {
      return true;
    }
  }
  return false;
}
function noop2() {
}
var MAX_VALUE_MILLIS = 4 * 60 * 60 * 1e3;
function getModularInstance(service) {
  if (service && service._delegate) {
    return service._delegate;
  } else {
    return service;
  }
}

// node_modules/@firebase/component/dist/esm/index.esm2017.js
var Component = class {
  /**
   *
   * @param name The public service name, e.g. app, auth, firestore, database
   * @param instanceFactory Service factory responsible for creating the public interface
   * @param type whether the service provided by the component is public or private
   */
  constructor(name4, instanceFactory, type) {
    this.name = name4;
    this.instanceFactory = instanceFactory;
    this.type = type;
    this.multipleInstances = false;
    this.serviceProps = {};
    this.instantiationMode = "LAZY";
    this.onInstanceCreated = null;
  }
  setInstantiationMode(mode) {
    this.instantiationMode = mode;
    return this;
  }
  setMultipleInstances(multipleInstances) {
    this.multipleInstances = multipleInstances;
    return this;
  }
  setServiceProps(props) {
    this.serviceProps = props;
    return this;
  }
  setInstanceCreatedCallback(callback) {
    this.onInstanceCreated = callback;
    return this;
  }
};
var DEFAULT_ENTRY_NAME = "[DEFAULT]";
var Provider = class {
  constructor(name4, container) {
    this.name = name4;
    this.container = container;
    this.component = null;
    this.instances = /* @__PURE__ */ new Map();
    this.instancesDeferred = /* @__PURE__ */ new Map();
    this.instancesOptions = /* @__PURE__ */ new Map();
    this.onInitCallbacks = /* @__PURE__ */ new Map();
  }
  /**
   * @param identifier A provider can provide multiple instances of a service
   * if this.component.multipleInstances is true.
   */
  get(identifier) {
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    if (!this.instancesDeferred.has(normalizedIdentifier)) {
      const deferred = new Deferred();
      this.instancesDeferred.set(normalizedIdentifier, deferred);
      if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
        try {
          const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier
          });
          if (instance) {
            deferred.resolve(instance);
          }
        } catch (e) {
        }
      }
    }
    return this.instancesDeferred.get(normalizedIdentifier).promise;
  }
  getImmediate(options) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
    const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
    if (this.isInitialized(normalizedIdentifier) || this.shouldAutoInitialize()) {
      try {
        return this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
      } catch (e) {
        if (optional) {
          return null;
        } else {
          throw e;
        }
      }
    } else {
      if (optional) {
        return null;
      } else {
        throw Error(`Service ${this.name} is not available`);
      }
    }
  }
  getComponent() {
    return this.component;
  }
  setComponent(component) {
    if (component.name !== this.name) {
      throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
    }
    if (this.component) {
      throw Error(`Component for ${this.name} has already been provided`);
    }
    this.component = component;
    if (!this.shouldAutoInitialize()) {
      return;
    }
    if (isComponentEager(component)) {
      try {
        this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
      } catch (e) {
      }
    }
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      try {
        const instance = this.getOrInitializeService({
          instanceIdentifier: normalizedIdentifier
        });
        instanceDeferred.resolve(instance);
      } catch (e) {
      }
    }
  }
  clearInstance(identifier = DEFAULT_ENTRY_NAME) {
    this.instancesDeferred.delete(identifier);
    this.instancesOptions.delete(identifier);
    this.instances.delete(identifier);
  }
  // app.delete() will call this method on every provider to delete the services
  // TODO: should we mark the provider as deleted?
  async delete() {
    const services = Array.from(this.instances.values());
    await Promise.all([
      ...services.filter((service) => "INTERNAL" in service).map((service) => service.INTERNAL.delete()),
      ...services.filter((service) => "_delete" in service).map((service) => service._delete())
    ]);
  }
  isComponentSet() {
    return this.component != null;
  }
  isInitialized(identifier = DEFAULT_ENTRY_NAME) {
    return this.instances.has(identifier);
  }
  getOptions(identifier = DEFAULT_ENTRY_NAME) {
    return this.instancesOptions.get(identifier) || {};
  }
  initialize(opts = {}) {
    const { options = {} } = opts;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
    if (this.isInitialized(normalizedIdentifier)) {
      throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
    }
    if (!this.isComponentSet()) {
      throw Error(`Component ${this.name} has not been registered yet`);
    }
    const instance = this.getOrInitializeService({
      instanceIdentifier: normalizedIdentifier,
      options
    });
    for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
      const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
      if (normalizedIdentifier === normalizedDeferredIdentifier) {
        instanceDeferred.resolve(instance);
      }
    }
    return instance;
  }
  /**
   *
   * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
   * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
   *
   * @param identifier An optional instance identifier
   * @returns a function to unregister the callback
   */
  onInit(callback, identifier) {
    var _a;
    const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
    const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
    existingCallbacks.add(callback);
    this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
    const existingInstance = this.instances.get(normalizedIdentifier);
    if (existingInstance) {
      callback(existingInstance, normalizedIdentifier);
    }
    return () => {
      existingCallbacks.delete(callback);
    };
  }
  /**
   * Invoke onInit callbacks synchronously
   * @param instance the service instance`
   */
  invokeOnInitCallbacks(instance, identifier) {
    const callbacks = this.onInitCallbacks.get(identifier);
    if (!callbacks) {
      return;
    }
    for (const callback of callbacks) {
      try {
        callback(instance, identifier);
      } catch (_a) {
      }
    }
  }
  getOrInitializeService({ instanceIdentifier, options = {} }) {
    let instance = this.instances.get(instanceIdentifier);
    if (!instance && this.component) {
      instance = this.component.instanceFactory(this.container, {
        instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
        options
      });
      this.instances.set(instanceIdentifier, instance);
      this.instancesOptions.set(instanceIdentifier, options);
      this.invokeOnInitCallbacks(instance, instanceIdentifier);
      if (this.component.onInstanceCreated) {
        try {
          this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
        } catch (_a) {
        }
      }
    }
    return instance || null;
  }
  normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
    if (this.component) {
      return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
    } else {
      return identifier;
    }
  }
  shouldAutoInitialize() {
    return !!this.component && this.component.instantiationMode !== "EXPLICIT";
  }
};
function normalizeIdentifierForFactory(identifier) {
  return identifier === DEFAULT_ENTRY_NAME ? void 0 : identifier;
}
function isComponentEager(component) {
  return component.instantiationMode === "EAGER";
}
var ComponentContainer = class {
  constructor(name4) {
    this.name = name4;
    this.providers = /* @__PURE__ */ new Map();
  }
  /**
   *
   * @param component Component being added
   * @param overwrite When a component with the same name has already been registered,
   * if overwrite is true: overwrite the existing component with the new component and create a new
   * provider with the new component. It can be useful in tests where you want to use different mocks
   * for different tests.
   * if overwrite is false: throw an exception
   */
  addComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
    }
    provider.setComponent(component);
  }
  addOrOverwriteComponent(component) {
    const provider = this.getProvider(component.name);
    if (provider.isComponentSet()) {
      this.providers.delete(component.name);
    }
    this.addComponent(component);
  }
  /**
   * getProvider provides a type safe interface where it can only be called with a field name
   * present in NameServiceMapping interface.
   *
   * Firebase SDKs providing services should extend NameServiceMapping interface to register
   * themselves.
   */
  getProvider(name4) {
    if (this.providers.has(name4)) {
      return this.providers.get(name4);
    }
    const provider = new Provider(name4, this);
    this.providers.set(name4, provider);
    return provider;
  }
  getProviders() {
    return Array.from(this.providers.values());
  }
};

// node_modules/@firebase/logger/dist/esm/index.esm2017.js
init_modules_watch_stub();
var instances = [];
var LogLevel;
(function(LogLevel2) {
  LogLevel2[LogLevel2["DEBUG"] = 0] = "DEBUG";
  LogLevel2[LogLevel2["VERBOSE"] = 1] = "VERBOSE";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  LogLevel2[LogLevel2["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
var levelStringToEnum = {
  "debug": LogLevel.DEBUG,
  "verbose": LogLevel.VERBOSE,
  "info": LogLevel.INFO,
  "warn": LogLevel.WARN,
  "error": LogLevel.ERROR,
  "silent": LogLevel.SILENT
};
var defaultLogLevel = LogLevel.INFO;
var ConsoleMethod = {
  [LogLevel.DEBUG]: "log",
  [LogLevel.VERBOSE]: "log",
  [LogLevel.INFO]: "info",
  [LogLevel.WARN]: "warn",
  [LogLevel.ERROR]: "error"
};
var defaultLogHandler = (instance, logType, ...args) => {
  if (logType < instance.logLevel) {
    return;
  }
  const now = (/* @__PURE__ */ new Date()).toISOString();
  const method = ConsoleMethod[logType];
  if (method) {
    console[method](`[${now}]  ${instance.name}:`, ...args);
  } else {
    throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
  }
};
var Logger = class {
  /**
   * Gives you an instance of a Logger to capture messages according to
   * Firebase's logging scheme.
   *
   * @param name The name that the logs will be associated with
   */
  constructor(name4) {
    this.name = name4;
    this._logLevel = defaultLogLevel;
    this._logHandler = defaultLogHandler;
    this._userLogHandler = null;
    instances.push(this);
  }
  get logLevel() {
    return this._logLevel;
  }
  set logLevel(val) {
    if (!(val in LogLevel)) {
      throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
    }
    this._logLevel = val;
  }
  // Workaround for setter/getter having to be the same type.
  setLogLevel(val) {
    this._logLevel = typeof val === "string" ? levelStringToEnum[val] : val;
  }
  get logHandler() {
    return this._logHandler;
  }
  set logHandler(val) {
    if (typeof val !== "function") {
      throw new TypeError("Value assigned to `logHandler` must be a function");
    }
    this._logHandler = val;
  }
  get userLogHandler() {
    return this._userLogHandler;
  }
  set userLogHandler(val) {
    this._userLogHandler = val;
  }
  /**
   * The functions below are all based on the `console` interface
   */
  debug(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
    this._logHandler(this, LogLevel.DEBUG, ...args);
  }
  log(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.VERBOSE, ...args);
    this._logHandler(this, LogLevel.VERBOSE, ...args);
  }
  info(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
    this._logHandler(this, LogLevel.INFO, ...args);
  }
  warn(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
    this._logHandler(this, LogLevel.WARN, ...args);
  }
  error(...args) {
    this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
    this._logHandler(this, LogLevel.ERROR, ...args);
  }
};

// node_modules/idb/build/index.js
init_modules_watch_stub();

// node_modules/idb/build/wrap-idb-value.js
init_modules_watch_stub();
var instanceOfAny = (object, constructors) => constructors.some((c2) => object instanceof c2);
var idbProxyableTypes;
var cursorAdvanceMethods;
function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [
    IDBDatabase,
    IDBObjectStore,
    IDBIndex,
    IDBCursor,
    IDBTransaction
  ]);
}
function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [
    IDBCursor.prototype.advance,
    IDBCursor.prototype.continue,
    IDBCursor.prototype.continuePrimaryKey
  ]);
}
var cursorRequestMap = /* @__PURE__ */ new WeakMap();
var transactionDoneMap = /* @__PURE__ */ new WeakMap();
var transactionStoreNamesMap = /* @__PURE__ */ new WeakMap();
var transformCache = /* @__PURE__ */ new WeakMap();
var reverseTransformCache = /* @__PURE__ */ new WeakMap();
function promisifyRequest(request) {
  const promise = new Promise((resolve, reject) => {
    const unlisten = () => {
      request.removeEventListener("success", success);
      request.removeEventListener("error", error);
    };
    const success = () => {
      resolve(wrap(request.result));
      unlisten();
    };
    const error = () => {
      reject(request.error);
      unlisten();
    };
    request.addEventListener("success", success);
    request.addEventListener("error", error);
  });
  promise.then((value) => {
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    }
  }).catch(() => {
  });
  reverseTransformCache.set(promise, request);
  return promise;
}
function cacheDonePromiseForTransaction(tx) {
  if (transactionDoneMap.has(tx))
    return;
  const done = new Promise((resolve, reject) => {
    const unlisten = () => {
      tx.removeEventListener("complete", complete);
      tx.removeEventListener("error", error);
      tx.removeEventListener("abort", error);
    };
    const complete = () => {
      resolve();
      unlisten();
    };
    const error = () => {
      reject(tx.error || new DOMException("AbortError", "AbortError"));
      unlisten();
    };
    tx.addEventListener("complete", complete);
    tx.addEventListener("error", error);
    tx.addEventListener("abort", error);
  });
  transactionDoneMap.set(tx, done);
}
var idbProxyTraps = {
  get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      if (prop === "done")
        return transactionDoneMap.get(target);
      if (prop === "objectStoreNames") {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      }
      if (prop === "store") {
        return receiver.objectStoreNames[1] ? void 0 : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    }
    return wrap(target[prop]);
  },
  set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has(target, prop) {
    if (target instanceof IDBTransaction && (prop === "done" || prop === "store")) {
      return true;
    }
    return prop in target;
  }
};
function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
  if (func === IDBDatabase.prototype.transaction && !("objectStoreNames" in IDBTransaction.prototype)) {
    return function(storeNames, ...args) {
      const tx = func.call(unwrap(this), storeNames, ...args);
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap(tx);
    };
  }
  if (getCursorAdvanceMethods().includes(func)) {
    return function(...args) {
      func.apply(unwrap(this), args);
      return wrap(cursorRequestMap.get(this));
    };
  }
  return function(...args) {
    return wrap(func.apply(unwrap(this), args));
  };
}
function transformCachableValue(value) {
  if (typeof value === "function")
    return wrapFunction(value);
  if (value instanceof IDBTransaction)
    cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes()))
    return new Proxy(value, idbProxyTraps);
  return value;
}
function wrap(value) {
  if (value instanceof IDBRequest)
    return promisifyRequest(value);
  if (transformCache.has(value))
    return transformCache.get(value);
  const newValue = transformCachableValue(value);
  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }
  return newValue;
}
var unwrap = (value) => reverseTransformCache.get(value);

// node_modules/idb/build/index.js
function openDB(name4, version4, { blocked, upgrade, blocking, terminated } = {}) {
  const request = indexedDB.open(name4, version4);
  const openPromise = wrap(request);
  if (upgrade) {
    request.addEventListener("upgradeneeded", (event) => {
      upgrade(wrap(request.result), event.oldVersion, event.newVersion, wrap(request.transaction), event);
    });
  }
  if (blocked) {
    request.addEventListener("blocked", (event) => blocked(
      // Casting due to https://github.com/microsoft/TypeScript-DOM-lib-generator/pull/1405
      event.oldVersion,
      event.newVersion,
      event
    ));
  }
  openPromise.then((db2) => {
    if (terminated)
      db2.addEventListener("close", () => terminated());
    if (blocking) {
      db2.addEventListener("versionchange", (event) => blocking(event.oldVersion, event.newVersion, event));
    }
  }).catch(() => {
  });
  return openPromise;
}
var readMethods = ["get", "getKey", "getAll", "getAllKeys", "count"];
var writeMethods = ["put", "add", "delete", "clear"];
var cachedMethods = /* @__PURE__ */ new Map();
function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === "string")) {
    return;
  }
  if (cachedMethods.get(prop))
    return cachedMethods.get(prop);
  const targetFuncName = prop.replace(/FromIndex$/, "");
  const useIndex = prop !== targetFuncName;
  const isWrite = writeMethods.includes(targetFuncName);
  if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))
  ) {
    return;
  }
  const method = async function(storeName, ...args) {
    const tx = this.transaction(storeName, isWrite ? "readwrite" : "readonly");
    let target2 = tx.store;
    if (useIndex)
      target2 = target2.index(args.shift());
    return (await Promise.all([
      target2[targetFuncName](...args),
      isWrite && tx.done
    ]))[0];
  };
  cachedMethods.set(prop, method);
  return method;
}
replaceTraps((oldTraps) => ({
  ...oldTraps,
  get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
  has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop)
}));

// node_modules/@firebase/app/dist/esm/index.esm2017.js
var PlatformLoggerServiceImpl = class {
  constructor(container) {
    this.container = container;
  }
  // In initial implementation, this will be called by installations on
  // auth token refresh, and installations will send this string.
  getPlatformInfoString() {
    const providers = this.container.getProviders();
    return providers.map((provider) => {
      if (isVersionServiceProvider(provider)) {
        const service = provider.getImmediate();
        return `${service.library}/${service.version}`;
      } else {
        return null;
      }
    }).filter((logString) => logString).join(" ");
  }
};
function isVersionServiceProvider(provider) {
  const component = provider.getComponent();
  return (component === null || component === void 0 ? void 0 : component.type) === "VERSION";
}
var name$q = "@firebase/app";
var version$1 = "0.10.15";
var logger = new Logger("@firebase/app");
var name$p = "@firebase/app-compat";
var name$o = "@firebase/analytics-compat";
var name$n = "@firebase/analytics";
var name$m = "@firebase/app-check-compat";
var name$l = "@firebase/app-check";
var name$k = "@firebase/auth";
var name$j = "@firebase/auth-compat";
var name$i = "@firebase/database";
var name$h = "@firebase/data-connect";
var name$g = "@firebase/database-compat";
var name$f = "@firebase/functions";
var name$e = "@firebase/functions-compat";
var name$d = "@firebase/installations";
var name$c = "@firebase/installations-compat";
var name$b = "@firebase/messaging";
var name$a = "@firebase/messaging-compat";
var name$9 = "@firebase/performance";
var name$8 = "@firebase/performance-compat";
var name$7 = "@firebase/remote-config";
var name$6 = "@firebase/remote-config-compat";
var name$5 = "@firebase/storage";
var name$4 = "@firebase/storage-compat";
var name$3 = "@firebase/firestore";
var name$2 = "@firebase/vertexai";
var name$1 = "@firebase/firestore-compat";
var name = "firebase";
var version = "11.0.1";
var DEFAULT_ENTRY_NAME2 = "[DEFAULT]";
var PLATFORM_LOG_STRING = {
  [name$q]: "fire-core",
  [name$p]: "fire-core-compat",
  [name$n]: "fire-analytics",
  [name$o]: "fire-analytics-compat",
  [name$l]: "fire-app-check",
  [name$m]: "fire-app-check-compat",
  [name$k]: "fire-auth",
  [name$j]: "fire-auth-compat",
  [name$i]: "fire-rtdb",
  [name$h]: "fire-data-connect",
  [name$g]: "fire-rtdb-compat",
  [name$f]: "fire-fn",
  [name$e]: "fire-fn-compat",
  [name$d]: "fire-iid",
  [name$c]: "fire-iid-compat",
  [name$b]: "fire-fcm",
  [name$a]: "fire-fcm-compat",
  [name$9]: "fire-perf",
  [name$8]: "fire-perf-compat",
  [name$7]: "fire-rc",
  [name$6]: "fire-rc-compat",
  [name$5]: "fire-gcs",
  [name$4]: "fire-gcs-compat",
  [name$3]: "fire-fst",
  [name$1]: "fire-fst-compat",
  [name$2]: "fire-vertex",
  "fire-js": "fire-js",
  [name]: "fire-js-all"
};
var _apps = /* @__PURE__ */ new Map();
var _serverApps = /* @__PURE__ */ new Map();
var _components = /* @__PURE__ */ new Map();
function _addComponent(app2, component) {
  try {
    app2.container.addComponent(component);
  } catch (e) {
    logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app2.name}`, e);
  }
}
function _registerComponent(component) {
  const componentName = component.name;
  if (_components.has(componentName)) {
    logger.debug(`There were multiple attempts to register component ${componentName}.`);
    return false;
  }
  _components.set(componentName, component);
  for (const app2 of _apps.values()) {
    _addComponent(app2, component);
  }
  for (const serverApp of _serverApps.values()) {
    _addComponent(serverApp, component);
  }
  return true;
}
function _getProvider(app2, name4) {
  const heartbeatController = app2.container.getProvider("heartbeat").getImmediate({ optional: true });
  if (heartbeatController) {
    void heartbeatController.triggerHeartbeat();
  }
  return app2.container.getProvider(name4);
}
function _isFirebaseServerApp(obj) {
  return obj.settings !== void 0;
}
var ERRORS = {
  [
    "no-app"
    /* AppError.NO_APP */
  ]: "No Firebase App '{$appName}' has been created - call initializeApp() first",
  [
    "bad-app-name"
    /* AppError.BAD_APP_NAME */
  ]: "Illegal App name: '{$appName}'",
  [
    "duplicate-app"
    /* AppError.DUPLICATE_APP */
  ]: "Firebase App named '{$appName}' already exists with different options or config",
  [
    "app-deleted"
    /* AppError.APP_DELETED */
  ]: "Firebase App named '{$appName}' already deleted",
  [
    "server-app-deleted"
    /* AppError.SERVER_APP_DELETED */
  ]: "Firebase Server App has been deleted",
  [
    "no-options"
    /* AppError.NO_OPTIONS */
  ]: "Need to provide options, when not being deployed to hosting via source.",
  [
    "invalid-app-argument"
    /* AppError.INVALID_APP_ARGUMENT */
  ]: "firebase.{$appName}() takes either no argument or a Firebase App instance.",
  [
    "invalid-log-argument"
    /* AppError.INVALID_LOG_ARGUMENT */
  ]: "First argument to `onLog` must be null or a function.",
  [
    "idb-open"
    /* AppError.IDB_OPEN */
  ]: "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-get"
    /* AppError.IDB_GET */
  ]: "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-set"
    /* AppError.IDB_WRITE */
  ]: "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "idb-delete"
    /* AppError.IDB_DELETE */
  ]: "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
  [
    "finalization-registry-not-supported"
    /* AppError.FINALIZATION_REGISTRY_NOT_SUPPORTED */
  ]: "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
  [
    "invalid-server-app-environment"
    /* AppError.INVALID_SERVER_APP_ENVIRONMENT */
  ]: "FirebaseServerApp is not for use in browser environments."
};
var ERROR_FACTORY = new ErrorFactory("app", "Firebase", ERRORS);
var FirebaseAppImpl = class {
  constructor(options, config, container) {
    this._isDeleted = false;
    this._options = Object.assign({}, options);
    this._config = Object.assign({}, config);
    this._name = config.name;
    this._automaticDataCollectionEnabled = config.automaticDataCollectionEnabled;
    this._container = container;
    this.container.addComponent(new Component(
      "app",
      () => this,
      "PUBLIC"
      /* ComponentType.PUBLIC */
    ));
  }
  get automaticDataCollectionEnabled() {
    this.checkDestroyed();
    return this._automaticDataCollectionEnabled;
  }
  set automaticDataCollectionEnabled(val) {
    this.checkDestroyed();
    this._automaticDataCollectionEnabled = val;
  }
  get name() {
    this.checkDestroyed();
    return this._name;
  }
  get options() {
    this.checkDestroyed();
    return this._options;
  }
  get config() {
    this.checkDestroyed();
    return this._config;
  }
  get container() {
    return this._container;
  }
  get isDeleted() {
    return this._isDeleted;
  }
  set isDeleted(val) {
    this._isDeleted = val;
  }
  /**
   * This function will throw an Error if the App has already been deleted -
   * use before performing API actions on the App.
   */
  checkDestroyed() {
    if (this.isDeleted) {
      throw ERROR_FACTORY.create("app-deleted", { appName: this._name });
    }
  }
};
var SDK_VERSION = version;
function initializeApp(_options, rawConfig = {}) {
  let options = _options;
  if (typeof rawConfig !== "object") {
    const name5 = rawConfig;
    rawConfig = { name: name5 };
  }
  const config = Object.assign({ name: DEFAULT_ENTRY_NAME2, automaticDataCollectionEnabled: false }, rawConfig);
  const name4 = config.name;
  if (typeof name4 !== "string" || !name4) {
    throw ERROR_FACTORY.create("bad-app-name", {
      appName: String(name4)
    });
  }
  options || (options = getDefaultAppConfig());
  if (!options) {
    throw ERROR_FACTORY.create(
      "no-options"
      /* AppError.NO_OPTIONS */
    );
  }
  const existingApp = _apps.get(name4);
  if (existingApp) {
    if (deepEqual(options, existingApp.options) && deepEqual(config, existingApp.config)) {
      return existingApp;
    } else {
      throw ERROR_FACTORY.create("duplicate-app", { appName: name4 });
    }
  }
  const container = new ComponentContainer(name4);
  for (const component of _components.values()) {
    container.addComponent(component);
  }
  const newApp = new FirebaseAppImpl(options, config, container);
  _apps.set(name4, newApp);
  return newApp;
}
function getApp(name4 = DEFAULT_ENTRY_NAME2) {
  const app2 = _apps.get(name4);
  if (!app2 && name4 === DEFAULT_ENTRY_NAME2 && getDefaultAppConfig()) {
    return initializeApp();
  }
  if (!app2) {
    throw ERROR_FACTORY.create("no-app", { appName: name4 });
  }
  return app2;
}
function registerVersion(libraryKeyOrName, version4, variant) {
  var _a;
  let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
  if (variant) {
    library += `-${variant}`;
  }
  const libraryMismatch = library.match(/\s|\//);
  const versionMismatch = version4.match(/\s|\//);
  if (libraryMismatch || versionMismatch) {
    const warning = [
      `Unable to register library "${library}" with version "${version4}":`
    ];
    if (libraryMismatch) {
      warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
    }
    if (libraryMismatch && versionMismatch) {
      warning.push("and");
    }
    if (versionMismatch) {
      warning.push(`version name "${version4}" contains illegal characters (whitespace or "/")`);
    }
    logger.warn(warning.join(" "));
    return;
  }
  _registerComponent(new Component(
    `${library}-version`,
    () => ({ library, version: version4 }),
    "VERSION"
    /* ComponentType.VERSION */
  ));
}
var DB_NAME = "firebase-heartbeat-database";
var DB_VERSION = 1;
var STORE_NAME = "firebase-heartbeat-store";
var dbPromise = null;
function getDbPromise() {
  if (!dbPromise) {
    dbPromise = openDB(DB_NAME, DB_VERSION, {
      upgrade: (db2, oldVersion) => {
        switch (oldVersion) {
          case 0:
            try {
              db2.createObjectStore(STORE_NAME);
            } catch (e) {
              console.warn(e);
            }
        }
      }
    }).catch((e) => {
      throw ERROR_FACTORY.create("idb-open", {
        originalErrorMessage: e.message
      });
    });
  }
  return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app2) {
  try {
    const db2 = await getDbPromise();
    const tx = db2.transaction(STORE_NAME);
    const result = await tx.objectStore(STORE_NAME).get(computeKey(app2));
    await tx.done;
    return result;
  } catch (e) {
    if (e instanceof FirebaseError) {
      logger.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-get", {
        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
      });
      logger.warn(idbGetError.message);
    }
  }
}
async function writeHeartbeatsToIndexedDB(app2, heartbeatObject) {
  try {
    const db2 = await getDbPromise();
    const tx = db2.transaction(STORE_NAME, "readwrite");
    const objectStore = tx.objectStore(STORE_NAME);
    await objectStore.put(heartbeatObject, computeKey(app2));
    await tx.done;
  } catch (e) {
    if (e instanceof FirebaseError) {
      logger.warn(e.message);
    } else {
      const idbGetError = ERROR_FACTORY.create("idb-set", {
        originalErrorMessage: e === null || e === void 0 ? void 0 : e.message
      });
      logger.warn(idbGetError.message);
    }
  }
}
function computeKey(app2) {
  return `${app2.name}!${app2.options.appId}`;
}
var MAX_HEADER_BYTES = 1024;
var STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1e3;
var HeartbeatServiceImpl = class {
  constructor(container) {
    this.container = container;
    this._heartbeatsCache = null;
    const app2 = this.container.getProvider("app").getImmediate();
    this._storage = new HeartbeatStorageImpl(app2);
    this._heartbeatsCachePromise = this._storage.read().then((result) => {
      this._heartbeatsCache = result;
      return result;
    });
  }
  /**
   * Called to report a heartbeat. The function will generate
   * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
   * to IndexedDB.
   * Note that we only store one heartbeat per day. So if a heartbeat for today is
   * already logged, subsequent calls to this function in the same day will be ignored.
   */
  async triggerHeartbeat() {
    var _a, _b;
    try {
      const platformLogger = this.container.getProvider("platform-logger").getImmediate();
      const agent = platformLogger.getPlatformInfoString();
      const date = getUTCDateString();
      if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null) {
        this._heartbeatsCache = await this._heartbeatsCachePromise;
        if (((_b = this._heartbeatsCache) === null || _b === void 0 ? void 0 : _b.heartbeats) == null) {
          return;
        }
      }
      if (this._heartbeatsCache.lastSentHeartbeatDate === date || this._heartbeatsCache.heartbeats.some((singleDateHeartbeat) => singleDateHeartbeat.date === date)) {
        return;
      } else {
        this._heartbeatsCache.heartbeats.push({ date, agent });
      }
      this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((singleDateHeartbeat) => {
        const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
        const now = Date.now();
        return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
      });
      return this._storage.overwrite(this._heartbeatsCache);
    } catch (e) {
      logger.warn(e);
    }
  }
  /**
   * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
   * It also clears all heartbeats from memory as well as in IndexedDB.
   *
   * NOTE: Consuming product SDKs should not send the header if this method
   * returns an empty string.
   */
  async getHeartbeatsHeader() {
    var _a;
    try {
      if (this._heartbeatsCache === null) {
        await this._heartbeatsCachePromise;
      }
      if (((_a = this._heartbeatsCache) === null || _a === void 0 ? void 0 : _a.heartbeats) == null || this._heartbeatsCache.heartbeats.length === 0) {
        return "";
      }
      const date = getUTCDateString();
      const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
      const headerString = base64urlEncodeWithoutPadding(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
      this._heartbeatsCache.lastSentHeartbeatDate = date;
      if (unsentEntries.length > 0) {
        this._heartbeatsCache.heartbeats = unsentEntries;
        await this._storage.overwrite(this._heartbeatsCache);
      } else {
        this._heartbeatsCache.heartbeats = [];
        void this._storage.overwrite(this._heartbeatsCache);
      }
      return headerString;
    } catch (e) {
      logger.warn(e);
      return "";
    }
  }
};
function getUTCDateString() {
  const today = /* @__PURE__ */ new Date();
  return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
  const heartbeatsToSend = [];
  let unsentEntries = heartbeatsCache.slice();
  for (const singleDateHeartbeat of heartbeatsCache) {
    const heartbeatEntry = heartbeatsToSend.find((hb) => hb.agent === singleDateHeartbeat.agent);
    if (!heartbeatEntry) {
      heartbeatsToSend.push({
        agent: singleDateHeartbeat.agent,
        dates: [singleDateHeartbeat.date]
      });
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatsToSend.pop();
        break;
      }
    } else {
      heartbeatEntry.dates.push(singleDateHeartbeat.date);
      if (countBytes(heartbeatsToSend) > maxSize) {
        heartbeatEntry.dates.pop();
        break;
      }
    }
    unsentEntries = unsentEntries.slice(1);
  }
  return {
    heartbeatsToSend,
    unsentEntries
  };
}
var HeartbeatStorageImpl = class {
  constructor(app2) {
    this.app = app2;
    this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
  }
  async runIndexedDBEnvironmentCheck() {
    if (!isIndexedDBAvailable()) {
      return false;
    } else {
      return validateIndexedDBOpenable().then(() => true).catch(() => false);
    }
  }
  /**
   * Read all heartbeats.
   */
  async read() {
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return { heartbeats: [] };
    } else {
      const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
      if (idbHeartbeatObject === null || idbHeartbeatObject === void 0 ? void 0 : idbHeartbeatObject.heartbeats) {
        return idbHeartbeatObject;
      } else {
        return { heartbeats: [] };
      }
    }
  }
  // overwrite the storage with the provided heartbeats
  async overwrite(heartbeatsObject) {
    var _a;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: heartbeatsObject.heartbeats
      });
    }
  }
  // add heartbeats
  async add(heartbeatsObject) {
    var _a;
    const canUseIndexedDB = await this._canUseIndexedDBPromise;
    if (!canUseIndexedDB) {
      return;
    } else {
      const existingHeartbeatsObject = await this.read();
      return writeHeartbeatsToIndexedDB(this.app, {
        lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
        heartbeats: [
          ...existingHeartbeatsObject.heartbeats,
          ...heartbeatsObject.heartbeats
        ]
      });
    }
  }
};
function countBytes(heartbeatsCache) {
  return base64urlEncodeWithoutPadding(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })
  ).length;
}
function registerCoreComponents(variant) {
  _registerComponent(new Component(
    "platform-logger",
    (container) => new PlatformLoggerServiceImpl(container),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
  _registerComponent(new Component(
    "heartbeat",
    (container) => new HeartbeatServiceImpl(container),
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ));
  registerVersion(name$q, version$1, variant);
  registerVersion(name$q, version$1, "esm2017");
  registerVersion("fire-js", "");
}
registerCoreComponents("");

// node_modules/@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js
init_modules_watch_stub();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var bloom_blob_es2018 = {};
var Integer;
var Md5;
(function() {
  var h2;
  function k(f2, a2) {
    function c2() {
    }
    c2.prototype = a2.prototype;
    f2.D = a2.prototype;
    f2.prototype = new c2();
    f2.prototype.constructor = f2;
    f2.C = function(d, e, g2) {
      for (var b2 = Array(arguments.length - 2), r2 = 2; r2 < arguments.length; r2++)
        b2[r2 - 2] = arguments[r2];
      return a2.prototype[e].apply(d, b2);
    };
  }
  function l() {
    this.blockSize = -1;
  }
  function m() {
    this.blockSize = -1;
    this.blockSize = 64;
    this.g = Array(4);
    this.B = Array(this.blockSize);
    this.o = this.h = 0;
    this.s();
  }
  k(m, l);
  m.prototype.s = function() {
    this.g[0] = 1732584193;
    this.g[1] = 4023233417;
    this.g[2] = 2562383102;
    this.g[3] = 271733878;
    this.o = this.h = 0;
  };
  function n2(f2, a2, c2) {
    c2 || (c2 = 0);
    var d = Array(16);
    if ("string" === typeof a2)
      for (var e = 0; 16 > e; ++e)
        d[e] = a2.charCodeAt(c2++) | a2.charCodeAt(c2++) << 8 | a2.charCodeAt(c2++) << 16 | a2.charCodeAt(c2++) << 24;
    else
      for (e = 0; 16 > e; ++e)
        d[e] = a2[c2++] | a2[c2++] << 8 | a2[c2++] << 16 | a2[c2++] << 24;
    a2 = f2.g[0];
    c2 = f2.g[1];
    e = f2.g[2];
    var g2 = f2.g[3];
    var b2 = a2 + (g2 ^ c2 & (e ^ g2)) + d[0] + 3614090360 & 4294967295;
    a2 = c2 + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g2 + (e ^ a2 & (c2 ^ e)) + d[1] + 3905402710 & 4294967295;
    g2 = a2 + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c2 ^ g2 & (a2 ^ c2)) + d[2] + 606105819 & 4294967295;
    e = g2 + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c2 + (a2 ^ e & (g2 ^ a2)) + d[3] + 3250441966 & 4294967295;
    c2 = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a2 + (g2 ^ c2 & (e ^ g2)) + d[4] + 4118548399 & 4294967295;
    a2 = c2 + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g2 + (e ^ a2 & (c2 ^ e)) + d[5] + 1200080426 & 4294967295;
    g2 = a2 + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c2 ^ g2 & (a2 ^ c2)) + d[6] + 2821735955 & 4294967295;
    e = g2 + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c2 + (a2 ^ e & (g2 ^ a2)) + d[7] + 4249261313 & 4294967295;
    c2 = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a2 + (g2 ^ c2 & (e ^ g2)) + d[8] + 1770035416 & 4294967295;
    a2 = c2 + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g2 + (e ^ a2 & (c2 ^ e)) + d[9] + 2336552879 & 4294967295;
    g2 = a2 + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c2 ^ g2 & (a2 ^ c2)) + d[10] + 4294925233 & 4294967295;
    e = g2 + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c2 + (a2 ^ e & (g2 ^ a2)) + d[11] + 2304563134 & 4294967295;
    c2 = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a2 + (g2 ^ c2 & (e ^ g2)) + d[12] + 1804603682 & 4294967295;
    a2 = c2 + (b2 << 7 & 4294967295 | b2 >>> 25);
    b2 = g2 + (e ^ a2 & (c2 ^ e)) + d[13] + 4254626195 & 4294967295;
    g2 = a2 + (b2 << 12 & 4294967295 | b2 >>> 20);
    b2 = e + (c2 ^ g2 & (a2 ^ c2)) + d[14] + 2792965006 & 4294967295;
    e = g2 + (b2 << 17 & 4294967295 | b2 >>> 15);
    b2 = c2 + (a2 ^ e & (g2 ^ a2)) + d[15] + 1236535329 & 4294967295;
    c2 = e + (b2 << 22 & 4294967295 | b2 >>> 10);
    b2 = a2 + (e ^ g2 & (c2 ^ e)) + d[1] + 4129170786 & 4294967295;
    a2 = c2 + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g2 + (c2 ^ e & (a2 ^ c2)) + d[6] + 3225465664 & 4294967295;
    g2 = a2 + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a2 ^ c2 & (g2 ^ a2)) + d[11] + 643717713 & 4294967295;
    e = g2 + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c2 + (g2 ^ a2 & (e ^ g2)) + d[0] + 3921069994 & 4294967295;
    c2 = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a2 + (e ^ g2 & (c2 ^ e)) + d[5] + 3593408605 & 4294967295;
    a2 = c2 + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g2 + (c2 ^ e & (a2 ^ c2)) + d[10] + 38016083 & 4294967295;
    g2 = a2 + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a2 ^ c2 & (g2 ^ a2)) + d[15] + 3634488961 & 4294967295;
    e = g2 + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c2 + (g2 ^ a2 & (e ^ g2)) + d[4] + 3889429448 & 4294967295;
    c2 = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a2 + (e ^ g2 & (c2 ^ e)) + d[9] + 568446438 & 4294967295;
    a2 = c2 + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g2 + (c2 ^ e & (a2 ^ c2)) + d[14] + 3275163606 & 4294967295;
    g2 = a2 + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a2 ^ c2 & (g2 ^ a2)) + d[3] + 4107603335 & 4294967295;
    e = g2 + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c2 + (g2 ^ a2 & (e ^ g2)) + d[8] + 1163531501 & 4294967295;
    c2 = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a2 + (e ^ g2 & (c2 ^ e)) + d[13] + 2850285829 & 4294967295;
    a2 = c2 + (b2 << 5 & 4294967295 | b2 >>> 27);
    b2 = g2 + (c2 ^ e & (a2 ^ c2)) + d[2] + 4243563512 & 4294967295;
    g2 = a2 + (b2 << 9 & 4294967295 | b2 >>> 23);
    b2 = e + (a2 ^ c2 & (g2 ^ a2)) + d[7] + 1735328473 & 4294967295;
    e = g2 + (b2 << 14 & 4294967295 | b2 >>> 18);
    b2 = c2 + (g2 ^ a2 & (e ^ g2)) + d[12] + 2368359562 & 4294967295;
    c2 = e + (b2 << 20 & 4294967295 | b2 >>> 12);
    b2 = a2 + (c2 ^ e ^ g2) + d[5] + 4294588738 & 4294967295;
    a2 = c2 + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g2 + (a2 ^ c2 ^ e) + d[8] + 2272392833 & 4294967295;
    g2 = a2 + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g2 ^ a2 ^ c2) + d[11] + 1839030562 & 4294967295;
    e = g2 + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c2 + (e ^ g2 ^ a2) + d[14] + 4259657740 & 4294967295;
    c2 = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a2 + (c2 ^ e ^ g2) + d[1] + 2763975236 & 4294967295;
    a2 = c2 + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g2 + (a2 ^ c2 ^ e) + d[4] + 1272893353 & 4294967295;
    g2 = a2 + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g2 ^ a2 ^ c2) + d[7] + 4139469664 & 4294967295;
    e = g2 + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c2 + (e ^ g2 ^ a2) + d[10] + 3200236656 & 4294967295;
    c2 = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a2 + (c2 ^ e ^ g2) + d[13] + 681279174 & 4294967295;
    a2 = c2 + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g2 + (a2 ^ c2 ^ e) + d[0] + 3936430074 & 4294967295;
    g2 = a2 + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g2 ^ a2 ^ c2) + d[3] + 3572445317 & 4294967295;
    e = g2 + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c2 + (e ^ g2 ^ a2) + d[6] + 76029189 & 4294967295;
    c2 = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a2 + (c2 ^ e ^ g2) + d[9] + 3654602809 & 4294967295;
    a2 = c2 + (b2 << 4 & 4294967295 | b2 >>> 28);
    b2 = g2 + (a2 ^ c2 ^ e) + d[12] + 3873151461 & 4294967295;
    g2 = a2 + (b2 << 11 & 4294967295 | b2 >>> 21);
    b2 = e + (g2 ^ a2 ^ c2) + d[15] + 530742520 & 4294967295;
    e = g2 + (b2 << 16 & 4294967295 | b2 >>> 16);
    b2 = c2 + (e ^ g2 ^ a2) + d[2] + 3299628645 & 4294967295;
    c2 = e + (b2 << 23 & 4294967295 | b2 >>> 9);
    b2 = a2 + (e ^ (c2 | ~g2)) + d[0] + 4096336452 & 4294967295;
    a2 = c2 + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g2 + (c2 ^ (a2 | ~e)) + d[7] + 1126891415 & 4294967295;
    g2 = a2 + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a2 ^ (g2 | ~c2)) + d[14] + 2878612391 & 4294967295;
    e = g2 + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c2 + (g2 ^ (e | ~a2)) + d[5] + 4237533241 & 4294967295;
    c2 = e + (b2 << 21 & 4294967295 | b2 >>> 11);
    b2 = a2 + (e ^ (c2 | ~g2)) + d[12] + 1700485571 & 4294967295;
    a2 = c2 + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g2 + (c2 ^ (a2 | ~e)) + d[3] + 2399980690 & 4294967295;
    g2 = a2 + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a2 ^ (g2 | ~c2)) + d[10] + 4293915773 & 4294967295;
    e = g2 + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c2 + (g2 ^ (e | ~a2)) + d[1] + 2240044497 & 4294967295;
    c2 = e + (b2 << 21 & 4294967295 | b2 >>> 11);
    b2 = a2 + (e ^ (c2 | ~g2)) + d[8] + 1873313359 & 4294967295;
    a2 = c2 + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g2 + (c2 ^ (a2 | ~e)) + d[15] + 4264355552 & 4294967295;
    g2 = a2 + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a2 ^ (g2 | ~c2)) + d[6] + 2734768916 & 4294967295;
    e = g2 + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c2 + (g2 ^ (e | ~a2)) + d[13] + 1309151649 & 4294967295;
    c2 = e + (b2 << 21 & 4294967295 | b2 >>> 11);
    b2 = a2 + (e ^ (c2 | ~g2)) + d[4] + 4149444226 & 4294967295;
    a2 = c2 + (b2 << 6 & 4294967295 | b2 >>> 26);
    b2 = g2 + (c2 ^ (a2 | ~e)) + d[11] + 3174756917 & 4294967295;
    g2 = a2 + (b2 << 10 & 4294967295 | b2 >>> 22);
    b2 = e + (a2 ^ (g2 | ~c2)) + d[2] + 718787259 & 4294967295;
    e = g2 + (b2 << 15 & 4294967295 | b2 >>> 17);
    b2 = c2 + (g2 ^ (e | ~a2)) + d[9] + 3951481745 & 4294967295;
    f2.g[0] = f2.g[0] + a2 & 4294967295;
    f2.g[1] = f2.g[1] + (e + (b2 << 21 & 4294967295 | b2 >>> 11)) & 4294967295;
    f2.g[2] = f2.g[2] + e & 4294967295;
    f2.g[3] = f2.g[3] + g2 & 4294967295;
  }
  m.prototype.u = function(f2, a2) {
    void 0 === a2 && (a2 = f2.length);
    for (var c2 = a2 - this.blockSize, d = this.B, e = this.h, g2 = 0; g2 < a2; ) {
      if (0 == e)
        for (; g2 <= c2; )
          n2(this, f2, g2), g2 += this.blockSize;
      if ("string" === typeof f2)
        for (; g2 < a2; ) {
          if (d[e++] = f2.charCodeAt(g2++), e == this.blockSize) {
            n2(this, d);
            e = 0;
            break;
          }
        }
      else
        for (; g2 < a2; )
          if (d[e++] = f2[g2++], e == this.blockSize) {
            n2(this, d);
            e = 0;
            break;
          }
    }
    this.h = e;
    this.o += a2;
  };
  m.prototype.v = function() {
    var f2 = Array((56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h);
    f2[0] = 128;
    for (var a2 = 1; a2 < f2.length - 8; ++a2)
      f2[a2] = 0;
    var c2 = 8 * this.o;
    for (a2 = f2.length - 8; a2 < f2.length; ++a2)
      f2[a2] = c2 & 255, c2 /= 256;
    this.u(f2);
    f2 = Array(16);
    for (a2 = c2 = 0; 4 > a2; ++a2)
      for (var d = 0; 32 > d; d += 8)
        f2[c2++] = this.g[a2] >>> d & 255;
    return f2;
  };
  function p2(f2, a2) {
    var c2 = q;
    return Object.prototype.hasOwnProperty.call(c2, f2) ? c2[f2] : c2[f2] = a2(f2);
  }
  function t2(f2, a2) {
    this.h = a2;
    for (var c2 = [], d = true, e = f2.length - 1; 0 <= e; e--) {
      var g2 = f2[e] | 0;
      d && g2 == a2 || (c2[e] = g2, d = false);
    }
    this.g = c2;
  }
  var q = {};
  function u2(f2) {
    return -128 <= f2 && 128 > f2 ? p2(f2, function(a2) {
      return new t2([a2 | 0], 0 > a2 ? -1 : 0);
    }) : new t2([f2 | 0], 0 > f2 ? -1 : 0);
  }
  function v2(f2) {
    if (isNaN(f2) || !isFinite(f2))
      return w2;
    if (0 > f2)
      return x(v2(-f2));
    for (var a2 = [], c2 = 1, d = 0; f2 >= c2; d++)
      a2[d] = f2 / c2 | 0, c2 *= 4294967296;
    return new t2(a2, 0);
  }
  function y(f2, a2) {
    if (0 == f2.length)
      throw Error("number format error: empty string");
    a2 = a2 || 10;
    if (2 > a2 || 36 < a2)
      throw Error("radix out of range: " + a2);
    if ("-" == f2.charAt(0))
      return x(y(f2.substring(1), a2));
    if (0 <= f2.indexOf("-"))
      throw Error('number format error: interior "-" character');
    for (var c2 = v2(Math.pow(a2, 8)), d = w2, e = 0; e < f2.length; e += 8) {
      var g2 = Math.min(8, f2.length - e), b2 = parseInt(f2.substring(e, e + g2), a2);
      8 > g2 ? (g2 = v2(Math.pow(a2, g2)), d = d.j(g2).add(v2(b2))) : (d = d.j(c2), d = d.add(v2(b2)));
    }
    return d;
  }
  var w2 = u2(0), z = u2(1), A = u2(16777216);
  h2 = t2.prototype;
  h2.m = function() {
    if (B(this))
      return -x(this).m();
    for (var f2 = 0, a2 = 1, c2 = 0; c2 < this.g.length; c2++) {
      var d = this.i(c2);
      f2 += (0 <= d ? d : 4294967296 + d) * a2;
      a2 *= 4294967296;
    }
    return f2;
  };
  h2.toString = function(f2) {
    f2 = f2 || 10;
    if (2 > f2 || 36 < f2)
      throw Error("radix out of range: " + f2);
    if (C(this))
      return "0";
    if (B(this))
      return "-" + x(this).toString(f2);
    for (var a2 = v2(Math.pow(f2, 6)), c2 = this, d = ""; ; ) {
      var e = D2(c2, a2).g;
      c2 = F(c2, e.j(a2));
      var g2 = ((0 < c2.g.length ? c2.g[0] : c2.h) >>> 0).toString(f2);
      c2 = e;
      if (C(c2))
        return g2 + d;
      for (; 6 > g2.length; )
        g2 = "0" + g2;
      d = g2 + d;
    }
  };
  h2.i = function(f2) {
    return 0 > f2 ? 0 : f2 < this.g.length ? this.g[f2] : this.h;
  };
  function C(f2) {
    if (0 != f2.h)
      return false;
    for (var a2 = 0; a2 < f2.g.length; a2++)
      if (0 != f2.g[a2])
        return false;
    return true;
  }
  function B(f2) {
    return -1 == f2.h;
  }
  h2.l = function(f2) {
    f2 = F(this, f2);
    return B(f2) ? -1 : C(f2) ? 0 : 1;
  };
  function x(f2) {
    for (var a2 = f2.g.length, c2 = [], d = 0; d < a2; d++)
      c2[d] = ~f2.g[d];
    return new t2(c2, ~f2.h).add(z);
  }
  h2.abs = function() {
    return B(this) ? x(this) : this;
  };
  h2.add = function(f2) {
    for (var a2 = Math.max(this.g.length, f2.g.length), c2 = [], d = 0, e = 0; e <= a2; e++) {
      var g2 = d + (this.i(e) & 65535) + (f2.i(e) & 65535), b2 = (g2 >>> 16) + (this.i(e) >>> 16) + (f2.i(e) >>> 16);
      d = b2 >>> 16;
      g2 &= 65535;
      b2 &= 65535;
      c2[e] = b2 << 16 | g2;
    }
    return new t2(c2, c2[c2.length - 1] & -2147483648 ? -1 : 0);
  };
  function F(f2, a2) {
    return f2.add(x(a2));
  }
  h2.j = function(f2) {
    if (C(this) || C(f2))
      return w2;
    if (B(this))
      return B(f2) ? x(this).j(x(f2)) : x(x(this).j(f2));
    if (B(f2))
      return x(this.j(x(f2)));
    if (0 > this.l(A) && 0 > f2.l(A))
      return v2(this.m() * f2.m());
    for (var a2 = this.g.length + f2.g.length, c2 = [], d = 0; d < 2 * a2; d++)
      c2[d] = 0;
    for (d = 0; d < this.g.length; d++)
      for (var e = 0; e < f2.g.length; e++) {
        var g2 = this.i(d) >>> 16, b2 = this.i(d) & 65535, r2 = f2.i(e) >>> 16, E = f2.i(e) & 65535;
        c2[2 * d + 2 * e] += b2 * E;
        G(c2, 2 * d + 2 * e);
        c2[2 * d + 2 * e + 1] += g2 * E;
        G(c2, 2 * d + 2 * e + 1);
        c2[2 * d + 2 * e + 1] += b2 * r2;
        G(c2, 2 * d + 2 * e + 1);
        c2[2 * d + 2 * e + 2] += g2 * r2;
        G(c2, 2 * d + 2 * e + 2);
      }
    for (d = 0; d < a2; d++)
      c2[d] = c2[2 * d + 1] << 16 | c2[2 * d];
    for (d = a2; d < 2 * a2; d++)
      c2[d] = 0;
    return new t2(c2, 0);
  };
  function G(f2, a2) {
    for (; (f2[a2] & 65535) != f2[a2]; )
      f2[a2 + 1] += f2[a2] >>> 16, f2[a2] &= 65535, a2++;
  }
  function H2(f2, a2) {
    this.g = f2;
    this.h = a2;
  }
  function D2(f2, a2) {
    if (C(a2))
      throw Error("division by zero");
    if (C(f2))
      return new H2(w2, w2);
    if (B(f2))
      return a2 = D2(x(f2), a2), new H2(x(a2.g), x(a2.h));
    if (B(a2))
      return a2 = D2(f2, x(a2)), new H2(x(a2.g), a2.h);
    if (30 < f2.g.length) {
      if (B(f2) || B(a2))
        throw Error("slowDivide_ only works with positive integers.");
      for (var c2 = z, d = a2; 0 >= d.l(f2); )
        c2 = I(c2), d = I(d);
      var e = J2(c2, 1), g2 = J2(d, 1);
      d = J2(d, 2);
      for (c2 = J2(c2, 2); !C(d); ) {
        var b2 = g2.add(d);
        0 >= b2.l(f2) && (e = e.add(c2), g2 = b2);
        d = J2(d, 1);
        c2 = J2(c2, 1);
      }
      a2 = F(f2, e.j(a2));
      return new H2(e, a2);
    }
    for (e = w2; 0 <= f2.l(a2); ) {
      c2 = Math.max(1, Math.floor(f2.m() / a2.m()));
      d = Math.ceil(Math.log(c2) / Math.LN2);
      d = 48 >= d ? 1 : Math.pow(2, d - 48);
      g2 = v2(c2);
      for (b2 = g2.j(a2); B(b2) || 0 < b2.l(f2); )
        c2 -= d, g2 = v2(c2), b2 = g2.j(a2);
      C(g2) && (g2 = z);
      e = e.add(g2);
      f2 = F(f2, b2);
    }
    return new H2(e, f2);
  }
  h2.A = function(f2) {
    return D2(this, f2).h;
  };
  h2.and = function(f2) {
    for (var a2 = Math.max(this.g.length, f2.g.length), c2 = [], d = 0; d < a2; d++)
      c2[d] = this.i(d) & f2.i(d);
    return new t2(c2, this.h & f2.h);
  };
  h2.or = function(f2) {
    for (var a2 = Math.max(this.g.length, f2.g.length), c2 = [], d = 0; d < a2; d++)
      c2[d] = this.i(d) | f2.i(d);
    return new t2(c2, this.h | f2.h);
  };
  h2.xor = function(f2) {
    for (var a2 = Math.max(this.g.length, f2.g.length), c2 = [], d = 0; d < a2; d++)
      c2[d] = this.i(d) ^ f2.i(d);
    return new t2(c2, this.h ^ f2.h);
  };
  function I(f2) {
    for (var a2 = f2.g.length + 1, c2 = [], d = 0; d < a2; d++)
      c2[d] = f2.i(d) << 1 | f2.i(d - 1) >>> 31;
    return new t2(c2, f2.h);
  }
  function J2(f2, a2) {
    var c2 = a2 >> 5;
    a2 %= 32;
    for (var d = f2.g.length - c2, e = [], g2 = 0; g2 < d; g2++)
      e[g2] = 0 < a2 ? f2.i(g2 + c2) >>> a2 | f2.i(g2 + c2 + 1) << 32 - a2 : f2.i(g2 + c2);
    return new t2(e, f2.h);
  }
  m.prototype.digest = m.prototype.v;
  m.prototype.reset = m.prototype.s;
  m.prototype.update = m.prototype.u;
  Md5 = bloom_blob_es2018.Md5 = m;
  t2.prototype.add = t2.prototype.add;
  t2.prototype.multiply = t2.prototype.j;
  t2.prototype.modulo = t2.prototype.A;
  t2.prototype.compare = t2.prototype.l;
  t2.prototype.toNumber = t2.prototype.m;
  t2.prototype.toString = t2.prototype.toString;
  t2.prototype.getBits = t2.prototype.i;
  t2.fromNumber = v2;
  t2.fromString = y;
  Integer = bloom_blob_es2018.Integer = t2;
}).apply(typeof commonjsGlobal !== "undefined" ? commonjsGlobal : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});

// node_modules/@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js
init_modules_watch_stub();
var commonjsGlobal2 = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var webchannel_blob_es2018 = {};
var XhrIo;
var FetchXmlHttpFactory;
var WebChannel;
var EventType;
var ErrorCode;
var Stat;
var Event;
var getStatEventTarget;
var createWebChannelTransport;
(function() {
  var h2, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a2, b2, c2) {
    if (a2 == Array.prototype || a2 == Object.prototype)
      return a2;
    a2[b2] = c2.value;
    return a2;
  };
  function ba(a2) {
    a2 = ["object" == typeof globalThis && globalThis, a2, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof commonjsGlobal2 && commonjsGlobal2];
    for (var b2 = 0; b2 < a2.length; ++b2) {
      var c2 = a2[b2];
      if (c2 && c2.Math == Math)
        return c2;
    }
    throw Error("Cannot find global object");
  }
  var ca = ba(this);
  function da(a2, b2) {
    if (b2)
      a: {
        var c2 = ca;
        a2 = a2.split(".");
        for (var d = 0; d < a2.length - 1; d++) {
          var e = a2[d];
          if (!(e in c2))
            break a;
          c2 = c2[e];
        }
        a2 = a2[a2.length - 1];
        d = c2[a2];
        b2 = b2(d);
        b2 != d && null != b2 && aa(c2, a2, { configurable: true, writable: true, value: b2 });
      }
  }
  function ea(a2, b2) {
    a2 instanceof String && (a2 += "");
    var c2 = 0, d = false, e = { next: function() {
      if (!d && c2 < a2.length) {
        var f2 = c2++;
        return { value: b2(f2, a2[f2]), done: false };
      }
      d = true;
      return { done: true, value: void 0 };
    } };
    e[Symbol.iterator] = function() {
      return e;
    };
    return e;
  }
  da("Array.prototype.values", function(a2) {
    return a2 ? a2 : function() {
      return ea(this, function(b2, c2) {
        return c2;
      });
    };
  });
  var fa = fa || {}, k = this || self;
  function ha(a2) {
    var b2 = typeof a2;
    b2 = "object" != b2 ? b2 : a2 ? Array.isArray(a2) ? "array" : b2 : "null";
    return "array" == b2 || "object" == b2 && "number" == typeof a2.length;
  }
  function n2(a2) {
    var b2 = typeof a2;
    return "object" == b2 && null != a2 || "function" == b2;
  }
  function ia(a2, b2, c2) {
    return a2.call.apply(a2.bind, arguments);
  }
  function ja(a2, b2, c2) {
    if (!a2)
      throw Error();
    if (2 < arguments.length) {
      var d = Array.prototype.slice.call(arguments, 2);
      return function() {
        var e = Array.prototype.slice.call(arguments);
        Array.prototype.unshift.apply(e, d);
        return a2.apply(b2, e);
      };
    }
    return function() {
      return a2.apply(b2, arguments);
    };
  }
  function p2(a2, b2, c2) {
    p2 = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ja;
    return p2.apply(null, arguments);
  }
  function ka(a2, b2) {
    var c2 = Array.prototype.slice.call(arguments, 1);
    return function() {
      var d = c2.slice();
      d.push.apply(d, arguments);
      return a2.apply(this, d);
    };
  }
  function r2(a2, b2) {
    function c2() {
    }
    c2.prototype = b2.prototype;
    a2.aa = b2.prototype;
    a2.prototype = new c2();
    a2.prototype.constructor = a2;
    a2.Qb = function(d, e, f2) {
      for (var g2 = Array(arguments.length - 2), m = 2; m < arguments.length; m++)
        g2[m - 2] = arguments[m];
      return b2.prototype[e].apply(d, g2);
    };
  }
  function la(a2) {
    const b2 = a2.length;
    if (0 < b2) {
      const c2 = Array(b2);
      for (let d = 0; d < b2; d++)
        c2[d] = a2[d];
      return c2;
    }
    return [];
  }
  function ma(a2, b2) {
    for (let c2 = 1; c2 < arguments.length; c2++) {
      const d = arguments[c2];
      if (ha(d)) {
        const e = a2.length || 0, f2 = d.length || 0;
        a2.length = e + f2;
        for (let g2 = 0; g2 < f2; g2++)
          a2[e + g2] = d[g2];
      } else
        a2.push(d);
    }
  }
  class na {
    constructor(a2, b2) {
      this.i = a2;
      this.j = b2;
      this.h = 0;
      this.g = null;
    }
    get() {
      let a2;
      0 < this.h ? (this.h--, a2 = this.g, this.g = a2.next, a2.next = null) : a2 = this.i();
      return a2;
    }
  }
  function t2(a2) {
    return /^[\s\xa0]*$/.test(a2);
  }
  function u2() {
    var a2 = k.navigator;
    return a2 && (a2 = a2.userAgent) ? a2 : "";
  }
  function oa(a2) {
    oa[" "](a2);
    return a2;
  }
  oa[" "] = function() {
  };
  var pa = -1 != u2().indexOf("Gecko") && !(-1 != u2().toLowerCase().indexOf("webkit") && -1 == u2().indexOf("Edge")) && !(-1 != u2().indexOf("Trident") || -1 != u2().indexOf("MSIE")) && -1 == u2().indexOf("Edge");
  function qa(a2, b2, c2) {
    for (const d in a2)
      b2.call(c2, a2[d], d, a2);
  }
  function ra(a2, b2) {
    for (const c2 in a2)
      b2.call(void 0, a2[c2], c2, a2);
  }
  function sa(a2) {
    const b2 = {};
    for (const c2 in a2)
      b2[c2] = a2[c2];
    return b2;
  }
  const ta = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
  function ua(a2, b2) {
    let c2, d;
    for (let e = 1; e < arguments.length; e++) {
      d = arguments[e];
      for (c2 in d)
        a2[c2] = d[c2];
      for (let f2 = 0; f2 < ta.length; f2++)
        c2 = ta[f2], Object.prototype.hasOwnProperty.call(d, c2) && (a2[c2] = d[c2]);
    }
  }
  function va(a2) {
    var b2 = 1;
    a2 = a2.split(":");
    const c2 = [];
    for (; 0 < b2 && a2.length; )
      c2.push(a2.shift()), b2--;
    a2.length && c2.push(a2.join(":"));
    return c2;
  }
  function wa(a2) {
    k.setTimeout(() => {
      throw a2;
    }, 0);
  }
  function xa() {
    var a2 = za;
    let b2 = null;
    a2.g && (b2 = a2.g, a2.g = a2.g.next, a2.g || (a2.h = null), b2.next = null);
    return b2;
  }
  class Aa {
    constructor() {
      this.h = this.g = null;
    }
    add(a2, b2) {
      const c2 = Ba.get();
      c2.set(a2, b2);
      this.h ? this.h.next = c2 : this.g = c2;
      this.h = c2;
    }
  }
  var Ba = new na(() => new Ca(), (a2) => a2.reset());
  class Ca {
    constructor() {
      this.next = this.g = this.h = null;
    }
    set(a2, b2) {
      this.h = a2;
      this.g = b2;
      this.next = null;
    }
    reset() {
      this.next = this.g = this.h = null;
    }
  }
  let x, y = false, za = new Aa(), Ea = () => {
    const a2 = k.Promise.resolve(void 0);
    x = () => {
      a2.then(Da);
    };
  };
  var Da = () => {
    for (var a2; a2 = xa(); ) {
      try {
        a2.h.call(a2.g);
      } catch (c2) {
        wa(c2);
      }
      var b2 = Ba;
      b2.j(a2);
      100 > b2.h && (b2.h++, a2.next = b2.g, b2.g = a2);
    }
    y = false;
  };
  function z() {
    this.s = this.s;
    this.C = this.C;
  }
  z.prototype.s = false;
  z.prototype.ma = function() {
    this.s || (this.s = true, this.N());
  };
  z.prototype.N = function() {
    if (this.C)
      for (; this.C.length; )
        this.C.shift()();
  };
  function A(a2, b2) {
    this.type = a2;
    this.g = this.target = b2;
    this.defaultPrevented = false;
  }
  A.prototype.h = function() {
    this.defaultPrevented = true;
  };
  var Fa = function() {
    if (!k.addEventListener || !Object.defineProperty)
      return false;
    var a2 = false, b2 = Object.defineProperty({}, "passive", { get: function() {
      a2 = true;
    } });
    try {
      const c2 = () => {
      };
      k.addEventListener("test", c2, b2);
      k.removeEventListener("test", c2, b2);
    } catch (c2) {
    }
    return a2;
  }();
  function C(a2, b2) {
    A.call(this, a2 ? a2.type : "");
    this.relatedTarget = this.g = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.state = null;
    this.pointerId = 0;
    this.pointerType = "";
    this.i = null;
    if (a2) {
      var c2 = this.type = a2.type, d = a2.changedTouches && a2.changedTouches.length ? a2.changedTouches[0] : null;
      this.target = a2.target || a2.srcElement;
      this.g = b2;
      if (b2 = a2.relatedTarget) {
        if (pa) {
          a: {
            try {
              oa(b2.nodeName);
              var e = true;
              break a;
            } catch (f2) {
            }
            e = false;
          }
          e || (b2 = null);
        }
      } else
        "mouseover" == c2 ? b2 = a2.fromElement : "mouseout" == c2 && (b2 = a2.toElement);
      this.relatedTarget = b2;
      d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a2.clientX ? a2.clientX : a2.pageX, this.clientY = void 0 !== a2.clientY ? a2.clientY : a2.pageY, this.screenX = a2.screenX || 0, this.screenY = a2.screenY || 0);
      this.button = a2.button;
      this.key = a2.key || "";
      this.ctrlKey = a2.ctrlKey;
      this.altKey = a2.altKey;
      this.shiftKey = a2.shiftKey;
      this.metaKey = a2.metaKey;
      this.pointerId = a2.pointerId || 0;
      this.pointerType = "string" === typeof a2.pointerType ? a2.pointerType : Ga[a2.pointerType] || "";
      this.state = a2.state;
      this.i = a2;
      a2.defaultPrevented && C.aa.h.call(this);
    }
  }
  r2(C, A);
  var Ga = { 2: "touch", 3: "pen", 4: "mouse" };
  C.prototype.h = function() {
    C.aa.h.call(this);
    var a2 = this.i;
    a2.preventDefault ? a2.preventDefault() : a2.returnValue = false;
  };
  var D2 = "closure_listenable_" + (1e6 * Math.random() | 0);
  var Ha = 0;
  function Ia(a2, b2, c2, d, e) {
    this.listener = a2;
    this.proxy = null;
    this.src = b2;
    this.type = c2;
    this.capture = !!d;
    this.ha = e;
    this.key = ++Ha;
    this.da = this.fa = false;
  }
  function Ja(a2) {
    a2.da = true;
    a2.listener = null;
    a2.proxy = null;
    a2.src = null;
    a2.ha = null;
  }
  function Ka(a2) {
    this.src = a2;
    this.g = {};
    this.h = 0;
  }
  Ka.prototype.add = function(a2, b2, c2, d, e) {
    var f2 = a2.toString();
    a2 = this.g[f2];
    a2 || (a2 = this.g[f2] = [], this.h++);
    var g2 = La(a2, b2, d, e);
    -1 < g2 ? (b2 = a2[g2], c2 || (b2.fa = false)) : (b2 = new Ia(b2, this.src, f2, !!d, e), b2.fa = c2, a2.push(b2));
    return b2;
  };
  function Ma(a2, b2) {
    var c2 = b2.type;
    if (c2 in a2.g) {
      var d = a2.g[c2], e = Array.prototype.indexOf.call(d, b2, void 0), f2;
      (f2 = 0 <= e) && Array.prototype.splice.call(d, e, 1);
      f2 && (Ja(b2), 0 == a2.g[c2].length && (delete a2.g[c2], a2.h--));
    }
  }
  function La(a2, b2, c2, d) {
    for (var e = 0; e < a2.length; ++e) {
      var f2 = a2[e];
      if (!f2.da && f2.listener == b2 && f2.capture == !!c2 && f2.ha == d)
        return e;
    }
    return -1;
  }
  var Na = "closure_lm_" + (1e6 * Math.random() | 0), Oa = {};
  function Qa(a2, b2, c2, d, e) {
    if (d && d.once)
      return Ra(a2, b2, c2, d, e);
    if (Array.isArray(b2)) {
      for (var f2 = 0; f2 < b2.length; f2++)
        Qa(a2, b2[f2], c2, d, e);
      return null;
    }
    c2 = Sa(c2);
    return a2 && a2[D2] ? a2.K(b2, c2, n2(d) ? !!d.capture : !!d, e) : Ta(a2, b2, c2, false, d, e);
  }
  function Ta(a2, b2, c2, d, e, f2) {
    if (!b2)
      throw Error("Invalid event type");
    var g2 = n2(e) ? !!e.capture : !!e, m = Ua(a2);
    m || (a2[Na] = m = new Ka(a2));
    c2 = m.add(b2, c2, d, g2, f2);
    if (c2.proxy)
      return c2;
    d = Va();
    c2.proxy = d;
    d.src = a2;
    d.listener = c2;
    if (a2.addEventListener)
      Fa || (e = g2), void 0 === e && (e = false), a2.addEventListener(b2.toString(), d, e);
    else if (a2.attachEvent)
      a2.attachEvent(Wa(b2.toString()), d);
    else if (a2.addListener && a2.removeListener)
      a2.addListener(d);
    else
      throw Error("addEventListener and attachEvent are unavailable.");
    return c2;
  }
  function Va() {
    function a2(c2) {
      return b2.call(a2.src, a2.listener, c2);
    }
    const b2 = Xa;
    return a2;
  }
  function Ra(a2, b2, c2, d, e) {
    if (Array.isArray(b2)) {
      for (var f2 = 0; f2 < b2.length; f2++)
        Ra(a2, b2[f2], c2, d, e);
      return null;
    }
    c2 = Sa(c2);
    return a2 && a2[D2] ? a2.L(b2, c2, n2(d) ? !!d.capture : !!d, e) : Ta(a2, b2, c2, true, d, e);
  }
  function Ya(a2, b2, c2, d, e) {
    if (Array.isArray(b2))
      for (var f2 = 0; f2 < b2.length; f2++)
        Ya(a2, b2[f2], c2, d, e);
    else
      (d = n2(d) ? !!d.capture : !!d, c2 = Sa(c2), a2 && a2[D2]) ? (a2 = a2.i, b2 = String(b2).toString(), b2 in a2.g && (f2 = a2.g[b2], c2 = La(f2, c2, d, e), -1 < c2 && (Ja(f2[c2]), Array.prototype.splice.call(f2, c2, 1), 0 == f2.length && (delete a2.g[b2], a2.h--)))) : a2 && (a2 = Ua(a2)) && (b2 = a2.g[b2.toString()], a2 = -1, b2 && (a2 = La(b2, c2, d, e)), (c2 = -1 < a2 ? b2[a2] : null) && Za(c2));
  }
  function Za(a2) {
    if ("number" !== typeof a2 && a2 && !a2.da) {
      var b2 = a2.src;
      if (b2 && b2[D2])
        Ma(b2.i, a2);
      else {
        var c2 = a2.type, d = a2.proxy;
        b2.removeEventListener ? b2.removeEventListener(c2, d, a2.capture) : b2.detachEvent ? b2.detachEvent(Wa(c2), d) : b2.addListener && b2.removeListener && b2.removeListener(d);
        (c2 = Ua(b2)) ? (Ma(c2, a2), 0 == c2.h && (c2.src = null, b2[Na] = null)) : Ja(a2);
      }
    }
  }
  function Wa(a2) {
    return a2 in Oa ? Oa[a2] : Oa[a2] = "on" + a2;
  }
  function Xa(a2, b2) {
    if (a2.da)
      a2 = true;
    else {
      b2 = new C(b2, this);
      var c2 = a2.listener, d = a2.ha || a2.src;
      a2.fa && Za(a2);
      a2 = c2.call(d, b2);
    }
    return a2;
  }
  function Ua(a2) {
    a2 = a2[Na];
    return a2 instanceof Ka ? a2 : null;
  }
  var $a = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
  function Sa(a2) {
    if ("function" === typeof a2)
      return a2;
    a2[$a] || (a2[$a] = function(b2) {
      return a2.handleEvent(b2);
    });
    return a2[$a];
  }
  function E() {
    z.call(this);
    this.i = new Ka(this);
    this.M = this;
    this.F = null;
  }
  r2(E, z);
  E.prototype[D2] = true;
  E.prototype.removeEventListener = function(a2, b2, c2, d) {
    Ya(this, a2, b2, c2, d);
  };
  function F(a2, b2) {
    var c2, d = a2.F;
    if (d)
      for (c2 = []; d; d = d.F)
        c2.push(d);
    a2 = a2.M;
    d = b2.type || b2;
    if ("string" === typeof b2)
      b2 = new A(b2, a2);
    else if (b2 instanceof A)
      b2.target = b2.target || a2;
    else {
      var e = b2;
      b2 = new A(d, a2);
      ua(b2, e);
    }
    e = true;
    if (c2)
      for (var f2 = c2.length - 1; 0 <= f2; f2--) {
        var g2 = b2.g = c2[f2];
        e = ab(g2, d, true, b2) && e;
      }
    g2 = b2.g = a2;
    e = ab(g2, d, true, b2) && e;
    e = ab(g2, d, false, b2) && e;
    if (c2)
      for (f2 = 0; f2 < c2.length; f2++)
        g2 = b2.g = c2[f2], e = ab(g2, d, false, b2) && e;
  }
  E.prototype.N = function() {
    E.aa.N.call(this);
    if (this.i) {
      var a2 = this.i, c2;
      for (c2 in a2.g) {
        for (var d = a2.g[c2], e = 0; e < d.length; e++)
          Ja(d[e]);
        delete a2.g[c2];
        a2.h--;
      }
    }
    this.F = null;
  };
  E.prototype.K = function(a2, b2, c2, d) {
    return this.i.add(String(a2), b2, false, c2, d);
  };
  E.prototype.L = function(a2, b2, c2, d) {
    return this.i.add(String(a2), b2, true, c2, d);
  };
  function ab(a2, b2, c2, d) {
    b2 = a2.i.g[String(b2)];
    if (!b2)
      return true;
    b2 = b2.concat();
    for (var e = true, f2 = 0; f2 < b2.length; ++f2) {
      var g2 = b2[f2];
      if (g2 && !g2.da && g2.capture == c2) {
        var m = g2.listener, q = g2.ha || g2.src;
        g2.fa && Ma(a2.i, g2);
        e = false !== m.call(q, d) && e;
      }
    }
    return e && !d.defaultPrevented;
  }
  function bb(a2, b2, c2) {
    if ("function" === typeof a2)
      c2 && (a2 = p2(a2, c2));
    else if (a2 && "function" == typeof a2.handleEvent)
      a2 = p2(a2.handleEvent, a2);
    else
      throw Error("Invalid listener argument");
    return 2147483647 < Number(b2) ? -1 : k.setTimeout(a2, b2 || 0);
  }
  function cb(a2) {
    a2.g = bb(() => {
      a2.g = null;
      a2.i && (a2.i = false, cb(a2));
    }, a2.l);
    const b2 = a2.h;
    a2.h = null;
    a2.m.apply(null, b2);
  }
  class eb extends z {
    constructor(a2, b2) {
      super();
      this.m = a2;
      this.l = b2;
      this.h = null;
      this.i = false;
      this.g = null;
    }
    j(a2) {
      this.h = arguments;
      this.g ? this.i = true : cb(this);
    }
    N() {
      super.N();
      this.g && (k.clearTimeout(this.g), this.g = null, this.i = false, this.h = null);
    }
  }
  function G(a2) {
    z.call(this);
    this.h = a2;
    this.g = {};
  }
  r2(G, z);
  var fb = [];
  function gb(a2) {
    qa(a2.g, function(b2, c2) {
      this.g.hasOwnProperty(c2) && Za(b2);
    }, a2);
    a2.g = {};
  }
  G.prototype.N = function() {
    G.aa.N.call(this);
    gb(this);
  };
  G.prototype.handleEvent = function() {
    throw Error("EventHandler.handleEvent not implemented");
  };
  var hb = k.JSON.stringify;
  var ib = k.JSON.parse;
  var jb = class {
    stringify(a2) {
      return k.JSON.stringify(a2, void 0);
    }
    parse(a2) {
      return k.JSON.parse(a2, void 0);
    }
  };
  function kb() {
  }
  kb.prototype.h = null;
  function lb(a2) {
    return a2.h || (a2.h = a2.i());
  }
  function mb() {
  }
  var H2 = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
  function nb() {
    A.call(this, "d");
  }
  r2(nb, A);
  function ob() {
    A.call(this, "c");
  }
  r2(ob, A);
  var I = {}, pb = null;
  function qb() {
    return pb = pb || new E();
  }
  I.La = "serverreachability";
  function rb(a2) {
    A.call(this, I.La, a2);
  }
  r2(rb, A);
  function J2(a2) {
    const b2 = qb();
    F(b2, new rb(b2));
  }
  I.STAT_EVENT = "statevent";
  function sb(a2, b2) {
    A.call(this, I.STAT_EVENT, a2);
    this.stat = b2;
  }
  r2(sb, A);
  function K(a2) {
    const b2 = qb();
    F(b2, new sb(b2, a2));
  }
  I.Ma = "timingevent";
  function tb(a2, b2) {
    A.call(this, I.Ma, a2);
    this.size = b2;
  }
  r2(tb, A);
  function ub(a2, b2) {
    if ("function" !== typeof a2)
      throw Error("Fn must not be null and must be a function");
    return k.setTimeout(function() {
      a2();
    }, b2);
  }
  function vb() {
    this.g = true;
  }
  vb.prototype.xa = function() {
    this.g = false;
  };
  function wb(a2, b2, c2, d, e, f2) {
    a2.info(function() {
      if (a2.g)
        if (f2) {
          var g2 = "";
          for (var m = f2.split("&"), q = 0; q < m.length; q++) {
            var l = m[q].split("=");
            if (1 < l.length) {
              var v2 = l[0];
              l = l[1];
              var w2 = v2.split("_");
              g2 = 2 <= w2.length && "type" == w2[1] ? g2 + (v2 + "=" + l + "&") : g2 + (v2 + "=redacted&");
            }
          }
        } else
          g2 = null;
      else
        g2 = f2;
      return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b2 + "\n" + c2 + "\n" + g2;
    });
  }
  function xb(a2, b2, c2, d, e, f2, g2) {
    a2.info(function() {
      return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b2 + "\n" + c2 + "\n" + f2 + " " + g2;
    });
  }
  function L(a2, b2, c2, d) {
    a2.info(function() {
      return "XMLHTTP TEXT (" + b2 + "): " + yb(a2, c2) + (d ? " " + d : "");
    });
  }
  function zb(a2, b2) {
    a2.info(function() {
      return "TIMEOUT: " + b2;
    });
  }
  vb.prototype.info = function() {
  };
  function yb(a2, b2) {
    if (!a2.g)
      return b2;
    if (!b2)
      return null;
    try {
      var c2 = JSON.parse(b2);
      if (c2) {
        for (a2 = 0; a2 < c2.length; a2++)
          if (Array.isArray(c2[a2])) {
            var d = c2[a2];
            if (!(2 > d.length)) {
              var e = d[1];
              if (Array.isArray(e) && !(1 > e.length)) {
                var f2 = e[0];
                if ("noop" != f2 && "stop" != f2 && "close" != f2)
                  for (var g2 = 1; g2 < e.length; g2++)
                    e[g2] = "";
              }
            }
          }
      }
      return hb(c2);
    } catch (m) {
      return b2;
    }
  }
  var Ab = { NO_ERROR: 0, gb: 1, tb: 2, sb: 3, nb: 4, rb: 5, ub: 6, Ia: 7, TIMEOUT: 8, xb: 9 };
  var Bb = { lb: "complete", Hb: "success", Ja: "error", Ia: "abort", zb: "ready", Ab: "readystatechange", TIMEOUT: "timeout", vb: "incrementaldata", yb: "progress", ob: "downloadprogress", Pb: "uploadprogress" };
  var Cb;
  function Db() {
  }
  r2(Db, kb);
  Db.prototype.g = function() {
    return new XMLHttpRequest();
  };
  Db.prototype.i = function() {
    return {};
  };
  Cb = new Db();
  function M(a2, b2, c2, d) {
    this.j = a2;
    this.i = b2;
    this.l = c2;
    this.R = d || 1;
    this.U = new G(this);
    this.I = 45e3;
    this.H = null;
    this.o = false;
    this.m = this.A = this.v = this.L = this.F = this.S = this.B = null;
    this.D = [];
    this.g = null;
    this.C = 0;
    this.s = this.u = null;
    this.X = -1;
    this.J = false;
    this.O = 0;
    this.M = null;
    this.W = this.K = this.T = this.P = false;
    this.h = new Eb();
  }
  function Eb() {
    this.i = null;
    this.g = "";
    this.h = false;
  }
  var Fb = {}, Gb = {};
  function Hb(a2, b2, c2) {
    a2.L = 1;
    a2.v = Ib(N(b2));
    a2.m = c2;
    a2.P = true;
    Jb(a2, null);
  }
  function Jb(a2, b2) {
    a2.F = Date.now();
    Kb(a2);
    a2.A = N(a2.v);
    var c2 = a2.A, d = a2.R;
    Array.isArray(d) || (d = [String(d)]);
    Lb(c2.i, "t", d);
    a2.C = 0;
    c2 = a2.j.J;
    a2.h = new Eb();
    a2.g = Mb(a2.j, c2 ? b2 : null, !a2.m);
    0 < a2.O && (a2.M = new eb(p2(a2.Y, a2, a2.g), a2.O));
    b2 = a2.U;
    c2 = a2.g;
    d = a2.ca;
    var e = "readystatechange";
    Array.isArray(e) || (e && (fb[0] = e.toString()), e = fb);
    for (var f2 = 0; f2 < e.length; f2++) {
      var g2 = Qa(c2, e[f2], d || b2.handleEvent, false, b2.h || b2);
      if (!g2)
        break;
      b2.g[g2.key] = g2;
    }
    b2 = a2.H ? sa(a2.H) : {};
    a2.m ? (a2.u || (a2.u = "POST"), b2["Content-Type"] = "application/x-www-form-urlencoded", a2.g.ea(
      a2.A,
      a2.u,
      a2.m,
      b2
    )) : (a2.u = "GET", a2.g.ea(a2.A, a2.u, null, b2));
    J2();
    wb(a2.i, a2.u, a2.A, a2.l, a2.R, a2.m);
  }
  M.prototype.ca = function(a2) {
    a2 = a2.target;
    const b2 = this.M;
    b2 && 3 == P(a2) ? b2.j() : this.Y(a2);
  };
  M.prototype.Y = function(a2) {
    try {
      if (a2 == this.g)
        a: {
          const w2 = P(this.g);
          var b2 = this.g.Ba();
          const O = this.g.Z();
          if (!(3 > w2) && (3 != w2 || this.g && (this.h.h || this.g.oa() || Nb(this.g)))) {
            this.J || 4 != w2 || 7 == b2 || (8 == b2 || 0 >= O ? J2(3) : J2(2));
            Ob(this);
            var c2 = this.g.Z();
            this.X = c2;
            b:
              if (Pb(this)) {
                var d = Nb(this.g);
                a2 = "";
                var e = d.length, f2 = 4 == P(this.g);
                if (!this.h.i) {
                  if ("undefined" === typeof TextDecoder) {
                    Q(this);
                    Qb(this);
                    var g2 = "";
                    break b;
                  }
                  this.h.i = new k.TextDecoder();
                }
                for (b2 = 0; b2 < e; b2++)
                  this.h.h = true, a2 += this.h.i.decode(d[b2], { stream: !(f2 && b2 == e - 1) });
                d.length = 0;
                this.h.g += a2;
                this.C = 0;
                g2 = this.h.g;
              } else
                g2 = this.g.oa();
            this.o = 200 == c2;
            xb(this.i, this.u, this.A, this.l, this.R, w2, c2);
            if (this.o) {
              if (this.T && !this.K) {
                b: {
                  if (this.g) {
                    var m, q = this.g;
                    if ((m = q.g ? q.g.getResponseHeader("X-HTTP-Initial-Response") : null) && !t2(m)) {
                      var l = m;
                      break b;
                    }
                  }
                  l = null;
                }
                if (c2 = l)
                  L(this.i, this.l, c2, "Initial handshake response via X-HTTP-Initial-Response"), this.K = true, Rb(this, c2);
                else {
                  this.o = false;
                  this.s = 3;
                  K(12);
                  Q(this);
                  Qb(this);
                  break a;
                }
              }
              if (this.P) {
                c2 = true;
                let B;
                for (; !this.J && this.C < g2.length; )
                  if (B = Sb(this, g2), B == Gb) {
                    4 == w2 && (this.s = 4, K(14), c2 = false);
                    L(this.i, this.l, null, "[Incomplete Response]");
                    break;
                  } else if (B == Fb) {
                    this.s = 4;
                    K(15);
                    L(this.i, this.l, g2, "[Invalid Chunk]");
                    c2 = false;
                    break;
                  } else
                    L(this.i, this.l, B, null), Rb(this, B);
                Pb(this) && 0 != this.C && (this.h.g = this.h.g.slice(this.C), this.C = 0);
                4 != w2 || 0 != g2.length || this.h.h || (this.s = 1, K(16), c2 = false);
                this.o = this.o && c2;
                if (!c2)
                  L(this.i, this.l, g2, "[Invalid Chunked Response]"), Q(this), Qb(this);
                else if (0 < g2.length && !this.W) {
                  this.W = true;
                  var v2 = this.j;
                  v2.g == this && v2.ba && !v2.M && (v2.j.info("Great, no buffering proxy detected. Bytes received: " + g2.length), Tb(v2), v2.M = true, K(11));
                }
              } else
                L(this.i, this.l, g2, null), Rb(this, g2);
              4 == w2 && Q(this);
              this.o && !this.J && (4 == w2 ? Ub(this.j, this) : (this.o = false, Kb(this)));
            } else
              Vb(this.g), 400 == c2 && 0 < g2.indexOf("Unknown SID") ? (this.s = 3, K(12)) : (this.s = 0, K(13)), Q(this), Qb(this);
          }
        }
    } catch (w2) {
    } finally {
    }
  };
  function Pb(a2) {
    return a2.g ? "GET" == a2.u && 2 != a2.L && a2.j.Ca : false;
  }
  function Sb(a2, b2) {
    var c2 = a2.C, d = b2.indexOf("\n", c2);
    if (-1 == d)
      return Gb;
    c2 = Number(b2.substring(c2, d));
    if (isNaN(c2))
      return Fb;
    d += 1;
    if (d + c2 > b2.length)
      return Gb;
    b2 = b2.slice(d, d + c2);
    a2.C = d + c2;
    return b2;
  }
  M.prototype.cancel = function() {
    this.J = true;
    Q(this);
  };
  function Kb(a2) {
    a2.S = Date.now() + a2.I;
    Wb(a2, a2.I);
  }
  function Wb(a2, b2) {
    if (null != a2.B)
      throw Error("WatchDog timer not null");
    a2.B = ub(p2(a2.ba, a2), b2);
  }
  function Ob(a2) {
    a2.B && (k.clearTimeout(a2.B), a2.B = null);
  }
  M.prototype.ba = function() {
    this.B = null;
    const a2 = Date.now();
    0 <= a2 - this.S ? (zb(this.i, this.A), 2 != this.L && (J2(), K(17)), Q(this), this.s = 2, Qb(this)) : Wb(this, this.S - a2);
  };
  function Qb(a2) {
    0 == a2.j.G || a2.J || Ub(a2.j, a2);
  }
  function Q(a2) {
    Ob(a2);
    var b2 = a2.M;
    b2 && "function" == typeof b2.ma && b2.ma();
    a2.M = null;
    gb(a2.U);
    a2.g && (b2 = a2.g, a2.g = null, b2.abort(), b2.ma());
  }
  function Rb(a2, b2) {
    try {
      var c2 = a2.j;
      if (0 != c2.G && (c2.g == a2 || Xb(c2.h, a2))) {
        if (!a2.K && Xb(c2.h, a2) && 3 == c2.G) {
          try {
            var d = c2.Da.g.parse(b2);
          } catch (l) {
            d = null;
          }
          if (Array.isArray(d) && 3 == d.length) {
            var e = d;
            if (0 == e[0])
              a: {
                if (!c2.u) {
                  if (c2.g)
                    if (c2.g.F + 3e3 < a2.F)
                      Yb(c2), Zb(c2);
                    else
                      break a;
                  $b(c2);
                  K(18);
                }
              }
            else
              c2.za = e[1], 0 < c2.za - c2.T && 37500 > e[2] && c2.F && 0 == c2.v && !c2.C && (c2.C = ub(p2(c2.Za, c2), 6e3));
            if (1 >= ac(c2.h) && c2.ca) {
              try {
                c2.ca();
              } catch (l) {
              }
              c2.ca = void 0;
            }
          } else
            R(c2, 11);
        } else if ((a2.K || c2.g == a2) && Yb(c2), !t2(b2))
          for (e = c2.Da.g.parse(b2), b2 = 0; b2 < e.length; b2++) {
            let l = e[b2];
            c2.T = l[0];
            l = l[1];
            if (2 == c2.G)
              if ("c" == l[0]) {
                c2.K = l[1];
                c2.ia = l[2];
                const v2 = l[3];
                null != v2 && (c2.la = v2, c2.j.info("VER=" + c2.la));
                const w2 = l[4];
                null != w2 && (c2.Aa = w2, c2.j.info("SVER=" + c2.Aa));
                const O = l[5];
                null != O && "number" === typeof O && 0 < O && (d = 1.5 * O, c2.L = d, c2.j.info("backChannelRequestTimeoutMs_=" + d));
                d = c2;
                const B = a2.g;
                if (B) {
                  const ya = B.g ? B.g.getResponseHeader("X-Client-Wire-Protocol") : null;
                  if (ya) {
                    var f2 = d.h;
                    f2.g || -1 == ya.indexOf("spdy") && -1 == ya.indexOf("quic") && -1 == ya.indexOf("h2") || (f2.j = f2.l, f2.g = /* @__PURE__ */ new Set(), f2.h && (bc(f2, f2.h), f2.h = null));
                  }
                  if (d.D) {
                    const db2 = B.g ? B.g.getResponseHeader("X-HTTP-Session-Id") : null;
                    db2 && (d.ya = db2, S2(d.I, d.D, db2));
                  }
                }
                c2.G = 3;
                c2.l && c2.l.ua();
                c2.ba && (c2.R = Date.now() - a2.F, c2.j.info("Handshake RTT: " + c2.R + "ms"));
                d = c2;
                var g2 = a2;
                d.qa = cc(d, d.J ? d.ia : null, d.W);
                if (g2.K) {
                  dc(d.h, g2);
                  var m = g2, q = d.L;
                  q && (m.I = q);
                  m.B && (Ob(m), Kb(m));
                  d.g = g2;
                } else
                  ec(d);
                0 < c2.i.length && fc(c2);
              } else
                "stop" != l[0] && "close" != l[0] || R(c2, 7);
            else
              3 == c2.G && ("stop" == l[0] || "close" == l[0] ? "stop" == l[0] ? R(c2, 7) : gc(c2) : "noop" != l[0] && c2.l && c2.l.ta(l), c2.v = 0);
          }
      }
      J2(4);
    } catch (l) {
    }
  }
  var hc = class {
    constructor(a2, b2) {
      this.g = a2;
      this.map = b2;
    }
  };
  function ic(a2) {
    this.l = a2 || 10;
    k.PerformanceNavigationTiming ? (a2 = k.performance.getEntriesByType("navigation"), a2 = 0 < a2.length && ("hq" == a2[0].nextHopProtocol || "h2" == a2[0].nextHopProtocol)) : a2 = !!(k.chrome && k.chrome.loadTimes && k.chrome.loadTimes() && k.chrome.loadTimes().wasFetchedViaSpdy);
    this.j = a2 ? this.l : 1;
    this.g = null;
    1 < this.j && (this.g = /* @__PURE__ */ new Set());
    this.h = null;
    this.i = [];
  }
  function jc(a2) {
    return a2.h ? true : a2.g ? a2.g.size >= a2.j : false;
  }
  function ac(a2) {
    return a2.h ? 1 : a2.g ? a2.g.size : 0;
  }
  function Xb(a2, b2) {
    return a2.h ? a2.h == b2 : a2.g ? a2.g.has(b2) : false;
  }
  function bc(a2, b2) {
    a2.g ? a2.g.add(b2) : a2.h = b2;
  }
  function dc(a2, b2) {
    a2.h && a2.h == b2 ? a2.h = null : a2.g && a2.g.has(b2) && a2.g.delete(b2);
  }
  ic.prototype.cancel = function() {
    this.i = kc(this);
    if (this.h)
      this.h.cancel(), this.h = null;
    else if (this.g && 0 !== this.g.size) {
      for (const a2 of this.g.values())
        a2.cancel();
      this.g.clear();
    }
  };
  function kc(a2) {
    if (null != a2.h)
      return a2.i.concat(a2.h.D);
    if (null != a2.g && 0 !== a2.g.size) {
      let b2 = a2.i;
      for (const c2 of a2.g.values())
        b2 = b2.concat(c2.D);
      return b2;
    }
    return la(a2.i);
  }
  function lc(a2) {
    if (a2.V && "function" == typeof a2.V)
      return a2.V();
    if ("undefined" !== typeof Map && a2 instanceof Map || "undefined" !== typeof Set && a2 instanceof Set)
      return Array.from(a2.values());
    if ("string" === typeof a2)
      return a2.split("");
    if (ha(a2)) {
      for (var b2 = [], c2 = a2.length, d = 0; d < c2; d++)
        b2.push(a2[d]);
      return b2;
    }
    b2 = [];
    c2 = 0;
    for (d in a2)
      b2[c2++] = a2[d];
    return b2;
  }
  function mc(a2) {
    if (a2.na && "function" == typeof a2.na)
      return a2.na();
    if (!a2.V || "function" != typeof a2.V) {
      if ("undefined" !== typeof Map && a2 instanceof Map)
        return Array.from(a2.keys());
      if (!("undefined" !== typeof Set && a2 instanceof Set)) {
        if (ha(a2) || "string" === typeof a2) {
          var b2 = [];
          a2 = a2.length;
          for (var c2 = 0; c2 < a2; c2++)
            b2.push(c2);
          return b2;
        }
        b2 = [];
        c2 = 0;
        for (const d in a2)
          b2[c2++] = d;
        return b2;
      }
    }
  }
  function nc(a2, b2) {
    if (a2.forEach && "function" == typeof a2.forEach)
      a2.forEach(b2, void 0);
    else if (ha(a2) || "string" === typeof a2)
      Array.prototype.forEach.call(a2, b2, void 0);
    else
      for (var c2 = mc(a2), d = lc(a2), e = d.length, f2 = 0; f2 < e; f2++)
        b2.call(void 0, d[f2], c2 && c2[f2], a2);
  }
  var oc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");
  function pc(a2, b2) {
    if (a2) {
      a2 = a2.split("&");
      for (var c2 = 0; c2 < a2.length; c2++) {
        var d = a2[c2].indexOf("="), e = null;
        if (0 <= d) {
          var f2 = a2[c2].substring(0, d);
          e = a2[c2].substring(d + 1);
        } else
          f2 = a2[c2];
        b2(f2, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
      }
    }
  }
  function T(a2) {
    this.g = this.o = this.j = "";
    this.s = null;
    this.m = this.l = "";
    this.h = false;
    if (a2 instanceof T) {
      this.h = a2.h;
      qc(this, a2.j);
      this.o = a2.o;
      this.g = a2.g;
      rc(this, a2.s);
      this.l = a2.l;
      var b2 = a2.i;
      var c2 = new sc();
      c2.i = b2.i;
      b2.g && (c2.g = new Map(b2.g), c2.h = b2.h);
      tc(this, c2);
      this.m = a2.m;
    } else
      a2 && (b2 = String(a2).match(oc)) ? (this.h = false, qc(this, b2[1] || "", true), this.o = uc(b2[2] || ""), this.g = uc(b2[3] || "", true), rc(this, b2[4]), this.l = uc(b2[5] || "", true), tc(this, b2[6] || "", true), this.m = uc(b2[7] || "")) : (this.h = false, this.i = new sc(null, this.h));
  }
  T.prototype.toString = function() {
    var a2 = [], b2 = this.j;
    b2 && a2.push(vc(b2, wc, true), ":");
    var c2 = this.g;
    if (c2 || "file" == b2)
      a2.push("//"), (b2 = this.o) && a2.push(vc(b2, wc, true), "@"), a2.push(encodeURIComponent(String(c2)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c2 = this.s, null != c2 && a2.push(":", String(c2));
    if (c2 = this.l)
      this.g && "/" != c2.charAt(0) && a2.push("/"), a2.push(vc(c2, "/" == c2.charAt(0) ? xc : yc, true));
    (c2 = this.i.toString()) && a2.push("?", c2);
    (c2 = this.m) && a2.push("#", vc(c2, zc));
    return a2.join("");
  };
  function N(a2) {
    return new T(a2);
  }
  function qc(a2, b2, c2) {
    a2.j = c2 ? uc(b2, true) : b2;
    a2.j && (a2.j = a2.j.replace(/:$/, ""));
  }
  function rc(a2, b2) {
    if (b2) {
      b2 = Number(b2);
      if (isNaN(b2) || 0 > b2)
        throw Error("Bad port number " + b2);
      a2.s = b2;
    } else
      a2.s = null;
  }
  function tc(a2, b2, c2) {
    b2 instanceof sc ? (a2.i = b2, Ac(a2.i, a2.h)) : (c2 || (b2 = vc(b2, Bc)), a2.i = new sc(b2, a2.h));
  }
  function S2(a2, b2, c2) {
    a2.i.set(b2, c2);
  }
  function Ib(a2) {
    S2(a2, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36));
    return a2;
  }
  function uc(a2, b2) {
    return a2 ? b2 ? decodeURI(a2.replace(/%25/g, "%2525")) : decodeURIComponent(a2) : "";
  }
  function vc(a2, b2, c2) {
    return "string" === typeof a2 ? (a2 = encodeURI(a2).replace(b2, Cc), c2 && (a2 = a2.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a2) : null;
  }
  function Cc(a2) {
    a2 = a2.charCodeAt(0);
    return "%" + (a2 >> 4 & 15).toString(16) + (a2 & 15).toString(16);
  }
  var wc = /[#\/\?@]/g, yc = /[#\?:]/g, xc = /[#\?]/g, Bc = /[#\?@]/g, zc = /#/g;
  function sc(a2, b2) {
    this.h = this.g = null;
    this.i = a2 || null;
    this.j = !!b2;
  }
  function U(a2) {
    a2.g || (a2.g = /* @__PURE__ */ new Map(), a2.h = 0, a2.i && pc(a2.i, function(b2, c2) {
      a2.add(decodeURIComponent(b2.replace(/\+/g, " ")), c2);
    }));
  }
  h2 = sc.prototype;
  h2.add = function(a2, b2) {
    U(this);
    this.i = null;
    a2 = V(this, a2);
    var c2 = this.g.get(a2);
    c2 || this.g.set(a2, c2 = []);
    c2.push(b2);
    this.h += 1;
    return this;
  };
  function Dc(a2, b2) {
    U(a2);
    b2 = V(a2, b2);
    a2.g.has(b2) && (a2.i = null, a2.h -= a2.g.get(b2).length, a2.g.delete(b2));
  }
  function Ec(a2, b2) {
    U(a2);
    b2 = V(a2, b2);
    return a2.g.has(b2);
  }
  h2.forEach = function(a2, b2) {
    U(this);
    this.g.forEach(function(c2, d) {
      c2.forEach(function(e) {
        a2.call(b2, e, d, this);
      }, this);
    }, this);
  };
  h2.na = function() {
    U(this);
    const a2 = Array.from(this.g.values()), b2 = Array.from(this.g.keys()), c2 = [];
    for (let d = 0; d < b2.length; d++) {
      const e = a2[d];
      for (let f2 = 0; f2 < e.length; f2++)
        c2.push(b2[d]);
    }
    return c2;
  };
  h2.V = function(a2) {
    U(this);
    let b2 = [];
    if ("string" === typeof a2)
      Ec(this, a2) && (b2 = b2.concat(this.g.get(V(this, a2))));
    else {
      a2 = Array.from(this.g.values());
      for (let c2 = 0; c2 < a2.length; c2++)
        b2 = b2.concat(a2[c2]);
    }
    return b2;
  };
  h2.set = function(a2, b2) {
    U(this);
    this.i = null;
    a2 = V(this, a2);
    Ec(this, a2) && (this.h -= this.g.get(a2).length);
    this.g.set(a2, [b2]);
    this.h += 1;
    return this;
  };
  h2.get = function(a2, b2) {
    if (!a2)
      return b2;
    a2 = this.V(a2);
    return 0 < a2.length ? String(a2[0]) : b2;
  };
  function Lb(a2, b2, c2) {
    Dc(a2, b2);
    0 < c2.length && (a2.i = null, a2.g.set(V(a2, b2), la(c2)), a2.h += c2.length);
  }
  h2.toString = function() {
    if (this.i)
      return this.i;
    if (!this.g)
      return "";
    const a2 = [], b2 = Array.from(this.g.keys());
    for (var c2 = 0; c2 < b2.length; c2++) {
      var d = b2[c2];
      const f2 = encodeURIComponent(String(d)), g2 = this.V(d);
      for (d = 0; d < g2.length; d++) {
        var e = f2;
        "" !== g2[d] && (e += "=" + encodeURIComponent(String(g2[d])));
        a2.push(e);
      }
    }
    return this.i = a2.join("&");
  };
  function V(a2, b2) {
    b2 = String(b2);
    a2.j && (b2 = b2.toLowerCase());
    return b2;
  }
  function Ac(a2, b2) {
    b2 && !a2.j && (U(a2), a2.i = null, a2.g.forEach(function(c2, d) {
      var e = d.toLowerCase();
      d != e && (Dc(this, d), Lb(this, e, c2));
    }, a2));
    a2.j = b2;
  }
  function Fc(a2, b2) {
    const c2 = new vb();
    if (k.Image) {
      const d = new Image();
      d.onload = ka(W, c2, "TestLoadImage: loaded", true, b2, d);
      d.onerror = ka(W, c2, "TestLoadImage: error", false, b2, d);
      d.onabort = ka(W, c2, "TestLoadImage: abort", false, b2, d);
      d.ontimeout = ka(W, c2, "TestLoadImage: timeout", false, b2, d);
      k.setTimeout(function() {
        if (d.ontimeout)
          d.ontimeout();
      }, 1e4);
      d.src = a2;
    } else
      b2(false);
  }
  function Gc(a2, b2) {
    const c2 = new vb(), d = new AbortController(), e = setTimeout(() => {
      d.abort();
      W(c2, "TestPingServer: timeout", false, b2);
    }, 1e4);
    fetch(a2, { signal: d.signal }).then((f2) => {
      clearTimeout(e);
      f2.ok ? W(c2, "TestPingServer: ok", true, b2) : W(c2, "TestPingServer: server error", false, b2);
    }).catch(() => {
      clearTimeout(e);
      W(c2, "TestPingServer: error", false, b2);
    });
  }
  function W(a2, b2, c2, d, e) {
    try {
      e && (e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null), d(c2);
    } catch (f2) {
    }
  }
  function Hc() {
    this.g = new jb();
  }
  function Ic(a2, b2, c2) {
    const d = c2 || "";
    try {
      nc(a2, function(e, f2) {
        let g2 = e;
        n2(e) && (g2 = hb(e));
        b2.push(d + f2 + "=" + encodeURIComponent(g2));
      });
    } catch (e) {
      throw b2.push(d + "type=" + encodeURIComponent("_badmap")), e;
    }
  }
  function Jc(a2) {
    this.l = a2.Ub || null;
    this.j = a2.eb || false;
  }
  r2(Jc, kb);
  Jc.prototype.g = function() {
    return new Kc(this.l, this.j);
  };
  Jc.prototype.i = function(a2) {
    return function() {
      return a2;
    };
  }({});
  function Kc(a2, b2) {
    E.call(this);
    this.D = a2;
    this.o = b2;
    this.m = void 0;
    this.status = this.readyState = 0;
    this.responseType = this.responseText = this.response = this.statusText = "";
    this.onreadystatechange = null;
    this.u = new Headers();
    this.h = null;
    this.B = "GET";
    this.A = "";
    this.g = false;
    this.v = this.j = this.l = null;
  }
  r2(Kc, E);
  h2 = Kc.prototype;
  h2.open = function(a2, b2) {
    if (0 != this.readyState)
      throw this.abort(), Error("Error reopening a connection");
    this.B = a2;
    this.A = b2;
    this.readyState = 1;
    Lc(this);
  };
  h2.send = function(a2) {
    if (1 != this.readyState)
      throw this.abort(), Error("need to call open() first. ");
    this.g = true;
    const b2 = { headers: this.u, method: this.B, credentials: this.m, cache: void 0 };
    a2 && (b2.body = a2);
    (this.D || k).fetch(new Request(this.A, b2)).then(this.Sa.bind(this), this.ga.bind(this));
  };
  h2.abort = function() {
    this.response = this.responseText = "";
    this.u = new Headers();
    this.status = 0;
    this.j && this.j.cancel("Request was aborted.").catch(() => {
    });
    1 <= this.readyState && this.g && 4 != this.readyState && (this.g = false, Mc(this));
    this.readyState = 0;
  };
  h2.Sa = function(a2) {
    if (this.g && (this.l = a2, this.h || (this.status = this.l.status, this.statusText = this.l.statusText, this.h = a2.headers, this.readyState = 2, Lc(this)), this.g && (this.readyState = 3, Lc(this), this.g)))
      if ("arraybuffer" === this.responseType)
        a2.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
      else if ("undefined" !== typeof k.ReadableStream && "body" in a2) {
        this.j = a2.body.getReader();
        if (this.o) {
          if (this.responseType)
            throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');
          this.response = [];
        } else
          this.response = this.responseText = "", this.v = new TextDecoder();
        Nc(this);
      } else
        a2.text().then(this.Ra.bind(this), this.ga.bind(this));
  };
  function Nc(a2) {
    a2.j.read().then(a2.Pa.bind(a2)).catch(a2.ga.bind(a2));
  }
  h2.Pa = function(a2) {
    if (this.g) {
      if (this.o && a2.value)
        this.response.push(a2.value);
      else if (!this.o) {
        var b2 = a2.value ? a2.value : new Uint8Array(0);
        if (b2 = this.v.decode(b2, { stream: !a2.done }))
          this.response = this.responseText += b2;
      }
      a2.done ? Mc(this) : Lc(this);
      3 == this.readyState && Nc(this);
    }
  };
  h2.Ra = function(a2) {
    this.g && (this.response = this.responseText = a2, Mc(this));
  };
  h2.Qa = function(a2) {
    this.g && (this.response = a2, Mc(this));
  };
  h2.ga = function() {
    this.g && Mc(this);
  };
  function Mc(a2) {
    a2.readyState = 4;
    a2.l = null;
    a2.j = null;
    a2.v = null;
    Lc(a2);
  }
  h2.setRequestHeader = function(a2, b2) {
    this.u.append(a2, b2);
  };
  h2.getResponseHeader = function(a2) {
    return this.h ? this.h.get(a2.toLowerCase()) || "" : "";
  };
  h2.getAllResponseHeaders = function() {
    if (!this.h)
      return "";
    const a2 = [], b2 = this.h.entries();
    for (var c2 = b2.next(); !c2.done; )
      c2 = c2.value, a2.push(c2[0] + ": " + c2[1]), c2 = b2.next();
    return a2.join("\r\n");
  };
  function Lc(a2) {
    a2.onreadystatechange && a2.onreadystatechange.call(a2);
  }
  Object.defineProperty(Kc.prototype, "withCredentials", { get: function() {
    return "include" === this.m;
  }, set: function(a2) {
    this.m = a2 ? "include" : "same-origin";
  } });
  function Oc(a2) {
    let b2 = "";
    qa(a2, function(c2, d) {
      b2 += d;
      b2 += ":";
      b2 += c2;
      b2 += "\r\n";
    });
    return b2;
  }
  function Pc(a2, b2, c2) {
    a: {
      for (d in c2) {
        var d = false;
        break a;
      }
      d = true;
    }
    d || (c2 = Oc(c2), "string" === typeof a2 ? null != c2 && encodeURIComponent(String(c2)) : S2(a2, b2, c2));
  }
  function X2(a2) {
    E.call(this);
    this.headers = /* @__PURE__ */ new Map();
    this.o = a2 || null;
    this.h = false;
    this.v = this.g = null;
    this.D = "";
    this.m = 0;
    this.l = "";
    this.j = this.B = this.u = this.A = false;
    this.I = null;
    this.H = "";
    this.J = false;
  }
  r2(X2, E);
  var Qc = /^https?$/i, Rc = ["POST", "PUT"];
  h2 = X2.prototype;
  h2.Ha = function(a2) {
    this.J = a2;
  };
  h2.ea = function(a2, b2, c2, d) {
    if (this.g)
      throw Error("[goog.net.XhrIo] Object is active with another request=" + this.D + "; newUri=" + a2);
    b2 = b2 ? b2.toUpperCase() : "GET";
    this.D = a2;
    this.l = "";
    this.m = 0;
    this.A = false;
    this.h = true;
    this.g = this.o ? this.o.g() : Cb.g();
    this.v = this.o ? lb(this.o) : lb(Cb);
    this.g.onreadystatechange = p2(this.Ea, this);
    try {
      this.B = true, this.g.open(b2, String(a2), true), this.B = false;
    } catch (f2) {
      Sc(this, f2);
      return;
    }
    a2 = c2 || "";
    c2 = new Map(this.headers);
    if (d)
      if (Object.getPrototypeOf(d) === Object.prototype)
        for (var e in d)
          c2.set(e, d[e]);
      else if ("function" === typeof d.keys && "function" === typeof d.get)
        for (const f2 of d.keys())
          c2.set(f2, d.get(f2));
      else
        throw Error("Unknown input type for opt_headers: " + String(d));
    d = Array.from(c2.keys()).find((f2) => "content-type" == f2.toLowerCase());
    e = k.FormData && a2 instanceof k.FormData;
    !(0 <= Array.prototype.indexOf.call(Rc, b2, void 0)) || d || e || c2.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    for (const [f2, g2] of c2)
      this.g.setRequestHeader(f2, g2);
    this.H && (this.g.responseType = this.H);
    "withCredentials" in this.g && this.g.withCredentials !== this.J && (this.g.withCredentials = this.J);
    try {
      Tc(this), this.u = true, this.g.send(a2), this.u = false;
    } catch (f2) {
      Sc(this, f2);
    }
  };
  function Sc(a2, b2) {
    a2.h = false;
    a2.g && (a2.j = true, a2.g.abort(), a2.j = false);
    a2.l = b2;
    a2.m = 5;
    Uc(a2);
    Vc(a2);
  }
  function Uc(a2) {
    a2.A || (a2.A = true, F(a2, "complete"), F(a2, "error"));
  }
  h2.abort = function(a2) {
    this.g && this.h && (this.h = false, this.j = true, this.g.abort(), this.j = false, this.m = a2 || 7, F(this, "complete"), F(this, "abort"), Vc(this));
  };
  h2.N = function() {
    this.g && (this.h && (this.h = false, this.j = true, this.g.abort(), this.j = false), Vc(this, true));
    X2.aa.N.call(this);
  };
  h2.Ea = function() {
    this.s || (this.B || this.u || this.j ? Wc(this) : this.bb());
  };
  h2.bb = function() {
    Wc(this);
  };
  function Wc(a2) {
    if (a2.h && "undefined" != typeof fa && (!a2.v[1] || 4 != P(a2) || 2 != a2.Z())) {
      if (a2.u && 4 == P(a2))
        bb(a2.Ea, 0, a2);
      else if (F(a2, "readystatechange"), 4 == P(a2)) {
        a2.h = false;
        try {
          const g2 = a2.Z();
          a:
            switch (g2) {
              case 200:
              case 201:
              case 202:
              case 204:
              case 206:
              case 304:
              case 1223:
                var b2 = true;
                break a;
              default:
                b2 = false;
            }
          var c2;
          if (!(c2 = b2)) {
            var d;
            if (d = 0 === g2) {
              var e = String(a2.D).match(oc)[1] || null;
              !e && k.self && k.self.location && (e = k.self.location.protocol.slice(0, -1));
              d = !Qc.test(e ? e.toLowerCase() : "");
            }
            c2 = d;
          }
          if (c2)
            F(a2, "complete"), F(a2, "success");
          else {
            a2.m = 6;
            try {
              var f2 = 2 < P(a2) ? a2.g.statusText : "";
            } catch (m) {
              f2 = "";
            }
            a2.l = f2 + " [" + a2.Z() + "]";
            Uc(a2);
          }
        } finally {
          Vc(a2);
        }
      }
    }
  }
  function Vc(a2, b2) {
    if (a2.g) {
      Tc(a2);
      const c2 = a2.g, d = a2.v[0] ? () => {
      } : null;
      a2.g = null;
      a2.v = null;
      b2 || F(a2, "ready");
      try {
        c2.onreadystatechange = d;
      } catch (e) {
      }
    }
  }
  function Tc(a2) {
    a2.I && (k.clearTimeout(a2.I), a2.I = null);
  }
  h2.isActive = function() {
    return !!this.g;
  };
  function P(a2) {
    return a2.g ? a2.g.readyState : 0;
  }
  h2.Z = function() {
    try {
      return 2 < P(this) ? this.g.status : -1;
    } catch (a2) {
      return -1;
    }
  };
  h2.oa = function() {
    try {
      return this.g ? this.g.responseText : "";
    } catch (a2) {
      return "";
    }
  };
  h2.Oa = function(a2) {
    if (this.g) {
      var b2 = this.g.responseText;
      a2 && 0 == b2.indexOf(a2) && (b2 = b2.substring(a2.length));
      return ib(b2);
    }
  };
  function Nb(a2) {
    try {
      if (!a2.g)
        return null;
      if ("response" in a2.g)
        return a2.g.response;
      switch (a2.H) {
        case "":
        case "text":
          return a2.g.responseText;
        case "arraybuffer":
          if ("mozResponseArrayBuffer" in a2.g)
            return a2.g.mozResponseArrayBuffer;
      }
      return null;
    } catch (b2) {
      return null;
    }
  }
  function Vb(a2) {
    const b2 = {};
    a2 = (a2.g && 2 <= P(a2) ? a2.g.getAllResponseHeaders() || "" : "").split("\r\n");
    for (let d = 0; d < a2.length; d++) {
      if (t2(a2[d]))
        continue;
      var c2 = va(a2[d]);
      const e = c2[0];
      c2 = c2[1];
      if ("string" !== typeof c2)
        continue;
      c2 = c2.trim();
      const f2 = b2[e] || [];
      b2[e] = f2;
      f2.push(c2);
    }
    ra(b2, function(d) {
      return d.join(", ");
    });
  }
  h2.Ba = function() {
    return this.m;
  };
  h2.Ka = function() {
    return "string" === typeof this.l ? this.l : String(this.l);
  };
  function Xc(a2, b2, c2) {
    return c2 && c2.internalChannelParams ? c2.internalChannelParams[a2] || b2 : b2;
  }
  function Yc(a2) {
    this.Aa = 0;
    this.i = [];
    this.j = new vb();
    this.ia = this.qa = this.I = this.W = this.g = this.ya = this.D = this.H = this.m = this.S = this.o = null;
    this.Ya = this.U = 0;
    this.Va = Xc("failFast", false, a2);
    this.F = this.C = this.u = this.s = this.l = null;
    this.X = true;
    this.za = this.T = -1;
    this.Y = this.v = this.B = 0;
    this.Ta = Xc("baseRetryDelayMs", 5e3, a2);
    this.cb = Xc("retryDelaySeedMs", 1e4, a2);
    this.Wa = Xc("forwardChannelMaxRetries", 2, a2);
    this.wa = Xc("forwardChannelRequestTimeoutMs", 2e4, a2);
    this.pa = a2 && a2.xmlHttpFactory || void 0;
    this.Xa = a2 && a2.Tb || void 0;
    this.Ca = a2 && a2.useFetchStreams || false;
    this.L = void 0;
    this.J = a2 && a2.supportsCrossDomainXhr || false;
    this.K = "";
    this.h = new ic(a2 && a2.concurrentRequestLimit);
    this.Da = new Hc();
    this.P = a2 && a2.fastHandshake || false;
    this.O = a2 && a2.encodeInitMessageHeaders || false;
    this.P && this.O && (this.O = false);
    this.Ua = a2 && a2.Rb || false;
    a2 && a2.xa && this.j.xa();
    a2 && a2.forceLongPolling && (this.X = false);
    this.ba = !this.P && this.X && a2 && a2.detectBufferingProxy || false;
    this.ja = void 0;
    a2 && a2.longPollingTimeout && 0 < a2.longPollingTimeout && (this.ja = a2.longPollingTimeout);
    this.ca = void 0;
    this.R = 0;
    this.M = false;
    this.ka = this.A = null;
  }
  h2 = Yc.prototype;
  h2.la = 8;
  h2.G = 1;
  h2.connect = function(a2, b2, c2, d) {
    K(0);
    this.W = a2;
    this.H = b2 || {};
    c2 && void 0 !== d && (this.H.OSID = c2, this.H.OAID = d);
    this.F = this.X;
    this.I = cc(this, null, this.W);
    fc(this);
  };
  function gc(a2) {
    Zc(a2);
    if (3 == a2.G) {
      var b2 = a2.U++, c2 = N(a2.I);
      S2(c2, "SID", a2.K);
      S2(c2, "RID", b2);
      S2(c2, "TYPE", "terminate");
      $c(a2, c2);
      b2 = new M(a2, a2.j, b2);
      b2.L = 2;
      b2.v = Ib(N(c2));
      c2 = false;
      if (k.navigator && k.navigator.sendBeacon)
        try {
          c2 = k.navigator.sendBeacon(b2.v.toString(), "");
        } catch (d) {
        }
      !c2 && k.Image && (new Image().src = b2.v, c2 = true);
      c2 || (b2.g = Mb(b2.j, null), b2.g.ea(b2.v));
      b2.F = Date.now();
      Kb(b2);
    }
    ad(a2);
  }
  function Zb(a2) {
    a2.g && (Tb(a2), a2.g.cancel(), a2.g = null);
  }
  function Zc(a2) {
    Zb(a2);
    a2.u && (k.clearTimeout(a2.u), a2.u = null);
    Yb(a2);
    a2.h.cancel();
    a2.s && ("number" === typeof a2.s && k.clearTimeout(a2.s), a2.s = null);
  }
  function fc(a2) {
    if (!jc(a2.h) && !a2.s) {
      a2.s = true;
      var b2 = a2.Ga;
      x || Ea();
      y || (x(), y = true);
      za.add(b2, a2);
      a2.B = 0;
    }
  }
  function bd(a2, b2) {
    if (ac(a2.h) >= a2.h.j - (a2.s ? 1 : 0))
      return false;
    if (a2.s)
      return a2.i = b2.D.concat(a2.i), true;
    if (1 == a2.G || 2 == a2.G || a2.B >= (a2.Va ? 0 : a2.Wa))
      return false;
    a2.s = ub(p2(a2.Ga, a2, b2), cd(a2, a2.B));
    a2.B++;
    return true;
  }
  h2.Ga = function(a2) {
    if (this.s)
      if (this.s = null, 1 == this.G) {
        if (!a2) {
          this.U = Math.floor(1e5 * Math.random());
          a2 = this.U++;
          const e = new M(this, this.j, a2);
          let f2 = this.o;
          this.S && (f2 ? (f2 = sa(f2), ua(f2, this.S)) : f2 = this.S);
          null !== this.m || this.O || (e.H = f2, f2 = null);
          if (this.P)
            a: {
              var b2 = 0;
              for (var c2 = 0; c2 < this.i.length; c2++) {
                b: {
                  var d = this.i[c2];
                  if ("__data__" in d.map && (d = d.map.__data__, "string" === typeof d)) {
                    d = d.length;
                    break b;
                  }
                  d = void 0;
                }
                if (void 0 === d)
                  break;
                b2 += d;
                if (4096 < b2) {
                  b2 = c2;
                  break a;
                }
                if (4096 === b2 || c2 === this.i.length - 1) {
                  b2 = c2 + 1;
                  break a;
                }
              }
              b2 = 1e3;
            }
          else
            b2 = 1e3;
          b2 = dd(this, e, b2);
          c2 = N(this.I);
          S2(c2, "RID", a2);
          S2(c2, "CVER", 22);
          this.D && S2(c2, "X-HTTP-Session-Id", this.D);
          $c(this, c2);
          f2 && (this.O ? b2 = "headers=" + encodeURIComponent(String(Oc(f2))) + "&" + b2 : this.m && Pc(c2, this.m, f2));
          bc(this.h, e);
          this.Ua && S2(c2, "TYPE", "init");
          this.P ? (S2(c2, "$req", b2), S2(c2, "SID", "null"), e.T = true, Hb(e, c2, null)) : Hb(e, c2, b2);
          this.G = 2;
        }
      } else
        3 == this.G && (a2 ? ed(this, a2) : 0 == this.i.length || jc(this.h) || ed(this));
  };
  function ed(a2, b2) {
    var c2;
    b2 ? c2 = b2.l : c2 = a2.U++;
    const d = N(a2.I);
    S2(d, "SID", a2.K);
    S2(d, "RID", c2);
    S2(d, "AID", a2.T);
    $c(a2, d);
    a2.m && a2.o && Pc(d, a2.m, a2.o);
    c2 = new M(a2, a2.j, c2, a2.B + 1);
    null === a2.m && (c2.H = a2.o);
    b2 && (a2.i = b2.D.concat(a2.i));
    b2 = dd(a2, c2, 1e3);
    c2.I = Math.round(0.5 * a2.wa) + Math.round(0.5 * a2.wa * Math.random());
    bc(a2.h, c2);
    Hb(c2, d, b2);
  }
  function $c(a2, b2) {
    a2.H && qa(a2.H, function(c2, d) {
      S2(b2, d, c2);
    });
    a2.l && nc({}, function(c2, d) {
      S2(b2, d, c2);
    });
  }
  function dd(a2, b2, c2) {
    c2 = Math.min(a2.i.length, c2);
    var d = a2.l ? p2(a2.l.Na, a2.l, a2) : null;
    a: {
      var e = a2.i;
      let f2 = -1;
      for (; ; ) {
        const g2 = ["count=" + c2];
        -1 == f2 ? 0 < c2 ? (f2 = e[0].g, g2.push("ofs=" + f2)) : f2 = 0 : g2.push("ofs=" + f2);
        let m = true;
        for (let q = 0; q < c2; q++) {
          let l = e[q].g;
          const v2 = e[q].map;
          l -= f2;
          if (0 > l)
            f2 = Math.max(0, e[q].g - 100), m = false;
          else
            try {
              Ic(v2, g2, "req" + l + "_");
            } catch (w2) {
              d && d(v2);
            }
        }
        if (m) {
          d = g2.join("&");
          break a;
        }
      }
    }
    a2 = a2.i.splice(0, c2);
    b2.D = a2;
    return d;
  }
  function ec(a2) {
    if (!a2.g && !a2.u) {
      a2.Y = 1;
      var b2 = a2.Fa;
      x || Ea();
      y || (x(), y = true);
      za.add(b2, a2);
      a2.v = 0;
    }
  }
  function $b(a2) {
    if (a2.g || a2.u || 3 <= a2.v)
      return false;
    a2.Y++;
    a2.u = ub(p2(a2.Fa, a2), cd(a2, a2.v));
    a2.v++;
    return true;
  }
  h2.Fa = function() {
    this.u = null;
    fd(this);
    if (this.ba && !(this.M || null == this.g || 0 >= this.R)) {
      var a2 = 2 * this.R;
      this.j.info("BP detection timer enabled: " + a2);
      this.A = ub(p2(this.ab, this), a2);
    }
  };
  h2.ab = function() {
    this.A && (this.A = null, this.j.info("BP detection timeout reached."), this.j.info("Buffering proxy detected and switch to long-polling!"), this.F = false, this.M = true, K(10), Zb(this), fd(this));
  };
  function Tb(a2) {
    null != a2.A && (k.clearTimeout(a2.A), a2.A = null);
  }
  function fd(a2) {
    a2.g = new M(a2, a2.j, "rpc", a2.Y);
    null === a2.m && (a2.g.H = a2.o);
    a2.g.O = 0;
    var b2 = N(a2.qa);
    S2(b2, "RID", "rpc");
    S2(b2, "SID", a2.K);
    S2(b2, "AID", a2.T);
    S2(b2, "CI", a2.F ? "0" : "1");
    !a2.F && a2.ja && S2(b2, "TO", a2.ja);
    S2(b2, "TYPE", "xmlhttp");
    $c(a2, b2);
    a2.m && a2.o && Pc(b2, a2.m, a2.o);
    a2.L && (a2.g.I = a2.L);
    var c2 = a2.g;
    a2 = a2.ia;
    c2.L = 1;
    c2.v = Ib(N(b2));
    c2.m = null;
    c2.P = true;
    Jb(c2, a2);
  }
  h2.Za = function() {
    null != this.C && (this.C = null, Zb(this), $b(this), K(19));
  };
  function Yb(a2) {
    null != a2.C && (k.clearTimeout(a2.C), a2.C = null);
  }
  function Ub(a2, b2) {
    var c2 = null;
    if (a2.g == b2) {
      Yb(a2);
      Tb(a2);
      a2.g = null;
      var d = 2;
    } else if (Xb(a2.h, b2))
      c2 = b2.D, dc(a2.h, b2), d = 1;
    else
      return;
    if (0 != a2.G) {
      if (b2.o)
        if (1 == d) {
          c2 = b2.m ? b2.m.length : 0;
          b2 = Date.now() - b2.F;
          var e = a2.B;
          d = qb();
          F(d, new tb(d, c2));
          fc(a2);
        } else
          ec(a2);
      else if (e = b2.s, 3 == e || 0 == e && 0 < b2.X || !(1 == d && bd(a2, b2) || 2 == d && $b(a2)))
        switch (c2 && 0 < c2.length && (b2 = a2.h, b2.i = b2.i.concat(c2)), e) {
          case 1:
            R(a2, 5);
            break;
          case 4:
            R(a2, 10);
            break;
          case 3:
            R(a2, 6);
            break;
          default:
            R(a2, 2);
        }
    }
  }
  function cd(a2, b2) {
    let c2 = a2.Ta + Math.floor(Math.random() * a2.cb);
    a2.isActive() || (c2 *= 2);
    return c2 * b2;
  }
  function R(a2, b2) {
    a2.j.info("Error code " + b2);
    if (2 == b2) {
      var c2 = p2(a2.fb, a2), d = a2.Xa;
      const e = !d;
      d = new T(d || "//www.google.com/images/cleardot.gif");
      k.location && "http" == k.location.protocol || qc(d, "https");
      Ib(d);
      e ? Fc(d.toString(), c2) : Gc(d.toString(), c2);
    } else
      K(2);
    a2.G = 0;
    a2.l && a2.l.sa(b2);
    ad(a2);
    Zc(a2);
  }
  h2.fb = function(a2) {
    a2 ? (this.j.info("Successfully pinged google.com"), K(2)) : (this.j.info("Failed to ping google.com"), K(1));
  };
  function ad(a2) {
    a2.G = 0;
    a2.ka = [];
    if (a2.l) {
      const b2 = kc(a2.h);
      if (0 != b2.length || 0 != a2.i.length)
        ma(a2.ka, b2), ma(a2.ka, a2.i), a2.h.i.length = 0, la(a2.i), a2.i.length = 0;
      a2.l.ra();
    }
  }
  function cc(a2, b2, c2) {
    var d = c2 instanceof T ? N(c2) : new T(c2);
    if ("" != d.g)
      b2 && (d.g = b2 + "." + d.g), rc(d, d.s);
    else {
      var e = k.location;
      d = e.protocol;
      b2 = b2 ? b2 + "." + e.hostname : e.hostname;
      e = +e.port;
      var f2 = new T(null);
      d && qc(f2, d);
      b2 && (f2.g = b2);
      e && rc(f2, e);
      c2 && (f2.l = c2);
      d = f2;
    }
    c2 = a2.D;
    b2 = a2.ya;
    c2 && b2 && S2(d, c2, b2);
    S2(d, "VER", a2.la);
    $c(a2, d);
    return d;
  }
  function Mb(a2, b2, c2) {
    if (b2 && !a2.J)
      throw Error("Can't create secondary domain capable XhrIo object.");
    b2 = a2.Ca && !a2.pa ? new X2(new Jc({ eb: c2 })) : new X2(a2.pa);
    b2.Ha(a2.J);
    return b2;
  }
  h2.isActive = function() {
    return !!this.l && this.l.isActive(this);
  };
  function gd() {
  }
  h2 = gd.prototype;
  h2.ua = function() {
  };
  h2.ta = function() {
  };
  h2.sa = function() {
  };
  h2.ra = function() {
  };
  h2.isActive = function() {
    return true;
  };
  h2.Na = function() {
  };
  function hd() {
  }
  hd.prototype.g = function(a2, b2) {
    return new Y2(a2, b2);
  };
  function Y2(a2, b2) {
    E.call(this);
    this.g = new Yc(b2);
    this.l = a2;
    this.h = b2 && b2.messageUrlParams || null;
    a2 = b2 && b2.messageHeaders || null;
    b2 && b2.clientProtocolHeaderRequired && (a2 ? a2["X-Client-Protocol"] = "webchannel" : a2 = { "X-Client-Protocol": "webchannel" });
    this.g.o = a2;
    a2 = b2 && b2.initMessageHeaders || null;
    b2 && b2.messageContentType && (a2 ? a2["X-WebChannel-Content-Type"] = b2.messageContentType : a2 = { "X-WebChannel-Content-Type": b2.messageContentType });
    b2 && b2.va && (a2 ? a2["X-WebChannel-Client-Profile"] = b2.va : a2 = { "X-WebChannel-Client-Profile": b2.va });
    this.g.S = a2;
    (a2 = b2 && b2.Sb) && !t2(a2) && (this.g.m = a2);
    this.v = b2 && b2.supportsCrossDomainXhr || false;
    this.u = b2 && b2.sendRawJson || false;
    (b2 = b2 && b2.httpSessionIdParam) && !t2(b2) && (this.g.D = b2, a2 = this.h, null !== a2 && b2 in a2 && (a2 = this.h, b2 in a2 && delete a2[b2]));
    this.j = new Z2(this);
  }
  r2(Y2, E);
  Y2.prototype.m = function() {
    this.g.l = this.j;
    this.v && (this.g.J = true);
    this.g.connect(this.l, this.h || void 0);
  };
  Y2.prototype.close = function() {
    gc(this.g);
  };
  Y2.prototype.o = function(a2) {
    var b2 = this.g;
    if ("string" === typeof a2) {
      var c2 = {};
      c2.__data__ = a2;
      a2 = c2;
    } else
      this.u && (c2 = {}, c2.__data__ = hb(a2), a2 = c2);
    b2.i.push(new hc(b2.Ya++, a2));
    3 == b2.G && fc(b2);
  };
  Y2.prototype.N = function() {
    this.g.l = null;
    delete this.j;
    gc(this.g);
    delete this.g;
    Y2.aa.N.call(this);
  };
  function id(a2) {
    nb.call(this);
    a2.__headers__ && (this.headers = a2.__headers__, this.statusCode = a2.__status__, delete a2.__headers__, delete a2.__status__);
    var b2 = a2.__sm__;
    if (b2) {
      a: {
        for (const c2 in b2) {
          a2 = c2;
          break a;
        }
        a2 = void 0;
      }
      if (this.i = a2)
        a2 = this.i, b2 = null !== b2 && a2 in b2 ? b2[a2] : void 0;
      this.data = b2;
    } else
      this.data = a2;
  }
  r2(id, nb);
  function jd() {
    ob.call(this);
    this.status = 1;
  }
  r2(jd, ob);
  function Z2(a2) {
    this.g = a2;
  }
  r2(Z2, gd);
  Z2.prototype.ua = function() {
    F(this.g, "a");
  };
  Z2.prototype.ta = function(a2) {
    F(this.g, new id(a2));
  };
  Z2.prototype.sa = function(a2) {
    F(this.g, new jd());
  };
  Z2.prototype.ra = function() {
    F(this.g, "b");
  };
  hd.prototype.createWebChannel = hd.prototype.g;
  Y2.prototype.send = Y2.prototype.o;
  Y2.prototype.open = Y2.prototype.m;
  Y2.prototype.close = Y2.prototype.close;
  createWebChannelTransport = webchannel_blob_es2018.createWebChannelTransport = function() {
    return new hd();
  };
  getStatEventTarget = webchannel_blob_es2018.getStatEventTarget = function() {
    return qb();
  };
  Event = webchannel_blob_es2018.Event = I;
  Stat = webchannel_blob_es2018.Stat = { mb: 0, pb: 1, qb: 2, Jb: 3, Ob: 4, Lb: 5, Mb: 6, Kb: 7, Ib: 8, Nb: 9, PROXY: 10, NOPROXY: 11, Gb: 12, Cb: 13, Db: 14, Bb: 15, Eb: 16, Fb: 17, ib: 18, hb: 19, jb: 20 };
  Ab.NO_ERROR = 0;
  Ab.TIMEOUT = 8;
  Ab.HTTP_ERROR = 6;
  ErrorCode = webchannel_blob_es2018.ErrorCode = Ab;
  Bb.COMPLETE = "complete";
  EventType = webchannel_blob_es2018.EventType = Bb;
  mb.EventType = H2;
  H2.OPEN = "a";
  H2.CLOSE = "b";
  H2.ERROR = "c";
  H2.MESSAGE = "d";
  E.prototype.listen = E.prototype.K;
  WebChannel = webchannel_blob_es2018.WebChannel = mb;
  FetchXmlHttpFactory = webchannel_blob_es2018.FetchXmlHttpFactory = Jc;
  X2.prototype.listenOnce = X2.prototype.L;
  X2.prototype.getLastError = X2.prototype.Ka;
  X2.prototype.getLastErrorCode = X2.prototype.Ba;
  X2.prototype.getStatus = X2.prototype.Z;
  X2.prototype.getResponseJson = X2.prototype.Oa;
  X2.prototype.getResponseText = X2.prototype.oa;
  X2.prototype.send = X2.prototype.ea;
  X2.prototype.setWithCredentials = X2.prototype.Ha;
  XhrIo = webchannel_blob_es2018.XhrIo = X2;
}).apply(typeof commonjsGlobal2 !== "undefined" ? commonjsGlobal2 : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {});

// node_modules/@firebase/firestore/dist/index.esm2017.js
var w = "@firebase/firestore";
var User = class {
  constructor(e) {
    this.uid = e;
  }
  isAuthenticated() {
    return null != this.uid;
  }
  /**
   * Returns a key representing this user, suitable for inclusion in a
   * dictionary.
   */
  toKey() {
    return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
  }
  isEqual(e) {
    return e.uid === this.uid;
  }
};
User.UNAUTHENTICATED = new User(null), // TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
User.GOOGLE_CREDENTIALS = new User("google-credentials-uid"), User.FIRST_PARTY = new User("first-party-uid"), User.MOCK_USER = new User("mock-user");
var S = "11.0.0";
var b = new Logger("@firebase/firestore");
function __PRIVATE_getLogLevel() {
  return b.logLevel;
}
function __PRIVATE_logDebug(e, ...t2) {
  if (b.logLevel <= LogLevel.DEBUG) {
    const n2 = t2.map(__PRIVATE_argToString);
    b.debug(`Firestore (${S}): ${e}`, ...n2);
  }
}
function __PRIVATE_logError(e, ...t2) {
  if (b.logLevel <= LogLevel.ERROR) {
    const n2 = t2.map(__PRIVATE_argToString);
    b.error(`Firestore (${S}): ${e}`, ...n2);
  }
}
function __PRIVATE_logWarn(e, ...t2) {
  if (b.logLevel <= LogLevel.WARN) {
    const n2 = t2.map(__PRIVATE_argToString);
    b.warn(`Firestore (${S}): ${e}`, ...n2);
  }
}
function __PRIVATE_argToString(e) {
  if ("string" == typeof e)
    return e;
  try {
    return function __PRIVATE_formatJSON(e2) {
      return JSON.stringify(e2);
    }(e);
  } catch (t2) {
    return e;
  }
}
function fail(e = "Unexpected state") {
  const t2 = `FIRESTORE (${S}) INTERNAL ASSERTION FAILED: ` + e;
  throw __PRIVATE_logError(t2), new Error(t2);
}
function __PRIVATE_hardAssert(e, t2) {
  e || fail();
}
function __PRIVATE_debugCast(e, t2) {
  return e;
}
var D = {
  // Causes are copied from:
  // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
  /** Not an error; returned on success. */
  OK: "ok",
  /** The operation was cancelled (typically by the caller). */
  CANCELLED: "cancelled",
  /** Unknown error or an error from a different error domain. */
  UNKNOWN: "unknown",
  /**
   * Client specified an invalid argument. Note that this differs from
   * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
   * problematic regardless of the state of the system (e.g., a malformed file
   * name).
   */
  INVALID_ARGUMENT: "invalid-argument",
  /**
   * Deadline expired before operation could complete. For operations that
   * change the state of the system, this error may be returned even if the
   * operation has completed successfully. For example, a successful response
   * from a server could have been delayed long enough for the deadline to
   * expire.
   */
  DEADLINE_EXCEEDED: "deadline-exceeded",
  /** Some requested entity (e.g., file or directory) was not found. */
  NOT_FOUND: "not-found",
  /**
   * Some entity that we attempted to create (e.g., file or directory) already
   * exists.
   */
  ALREADY_EXISTS: "already-exists",
  /**
   * The caller does not have permission to execute the specified operation.
   * PERMISSION_DENIED must not be used for rejections caused by exhausting
   * some resource (use RESOURCE_EXHAUSTED instead for those errors).
   * PERMISSION_DENIED must not be used if the caller cannot be identified
   * (use UNAUTHENTICATED instead for those errors).
   */
  PERMISSION_DENIED: "permission-denied",
  /**
   * The request does not have valid authentication credentials for the
   * operation.
   */
  UNAUTHENTICATED: "unauthenticated",
  /**
   * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
   * entire file system is out of space.
   */
  RESOURCE_EXHAUSTED: "resource-exhausted",
  /**
   * Operation was rejected because the system is not in a state required for
   * the operation's execution. For example, directory to be deleted may be
   * non-empty, an rmdir operation is applied to a non-directory, etc.
   *
   * A litmus test that may help a service implementor in deciding
   * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
   *  (a) Use UNAVAILABLE if the client can retry just the failing call.
   *  (b) Use ABORTED if the client should retry at a higher-level
   *      (e.g., restarting a read-modify-write sequence).
   *  (c) Use FAILED_PRECONDITION if the client should not retry until
   *      the system state has been explicitly fixed. E.g., if an "rmdir"
   *      fails because the directory is non-empty, FAILED_PRECONDITION
   *      should be returned since the client should not retry unless
   *      they have first fixed up the directory by deleting files from it.
   *  (d) Use FAILED_PRECONDITION if the client performs conditional
   *      REST Get/Update/Delete on a resource and the resource on the
   *      server does not match the condition. E.g., conflicting
   *      read-modify-write on the same resource.
   */
  FAILED_PRECONDITION: "failed-precondition",
  /**
   * The operation was aborted, typically due to a concurrency issue like
   * sequencer check failures, transaction aborts, etc.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  ABORTED: "aborted",
  /**
   * Operation was attempted past the valid range. E.g., seeking or reading
   * past end of file.
   *
   * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
   * if the system state changes. For example, a 32-bit file system will
   * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
   * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
   * an offset past the current file size.
   *
   * There is a fair bit of overlap between FAILED_PRECONDITION and
   * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
   * when it applies so that callers who are iterating through a space can
   * easily look for an OUT_OF_RANGE error to detect when they are done.
   */
  OUT_OF_RANGE: "out-of-range",
  /** Operation is not implemented or not supported/enabled in this service. */
  UNIMPLEMENTED: "unimplemented",
  /**
   * Internal errors. Means some invariants expected by underlying System has
   * been broken. If you see one of these errors, Something is very broken.
   */
  INTERNAL: "internal",
  /**
   * The service is currently unavailable. This is a most likely a transient
   * condition and may be corrected by retrying with a backoff.
   *
   * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
   * and UNAVAILABLE.
   */
  UNAVAILABLE: "unavailable",
  /** Unrecoverable data loss or corruption. */
  DATA_LOSS: "data-loss"
};
var FirestoreError = class extends FirebaseError {
  /** @hideconstructor */
  constructor(e, t2) {
    super(e, t2), this.code = e, this.message = t2, // HACK: We write a toString property directly because Error is not a real
    // class and so inheritance does not work correctly. We could alternatively
    // do the same "back-door inheritance" trick that FirebaseError does.
    this.toString = () => `${this.name}: [code=${this.code}]: ${this.message}`;
  }
};
var __PRIVATE_Deferred = class {
  constructor() {
    this.promise = new Promise((e, t2) => {
      this.resolve = e, this.reject = t2;
    });
  }
};
var __PRIVATE_OAuthToken = class {
  constructor(e, t2) {
    this.user = t2, this.type = "OAuth", this.headers = /* @__PURE__ */ new Map(), this.headers.set("Authorization", `Bearer ${e}`);
  }
};
var __PRIVATE_EmptyAuthCredentialsProvider = class {
  getToken() {
    return Promise.resolve(null);
  }
  invalidateToken() {
  }
  start(e, t2) {
    e.enqueueRetryable(() => t2(User.UNAUTHENTICATED));
  }
  shutdown() {
  }
};
var __PRIVATE_FirebaseAuthCredentialsProvider = class {
  constructor(e) {
    this.t = e, /** Tracks the current User. */
    this.currentUser = User.UNAUTHENTICATED, /**
     * Counter used to detect if the token changed while a getToken request was
     * outstanding.
     */
    this.i = 0, this.forceRefresh = false, this.auth = null;
  }
  start(e, t2) {
    __PRIVATE_hardAssert(void 0 === this.o);
    let n2 = this.i;
    const __PRIVATE_guardedChangeListener = (e2) => this.i !== n2 ? (n2 = this.i, t2(e2)) : Promise.resolve();
    let r2 = new __PRIVATE_Deferred();
    this.o = () => {
      this.i++, this.currentUser = this.u(), r2.resolve(), r2 = new __PRIVATE_Deferred(), e.enqueueRetryable(() => __PRIVATE_guardedChangeListener(this.currentUser));
    };
    const __PRIVATE_awaitNextToken = () => {
      const t3 = r2;
      e.enqueueRetryable(async () => {
        await t3.promise, await __PRIVATE_guardedChangeListener(this.currentUser);
      });
    }, __PRIVATE_registerAuth = (e2) => {
      __PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth detected"), this.auth = e2, this.o && (this.auth.addAuthTokenListener(this.o), __PRIVATE_awaitNextToken());
    };
    this.t.onInit((e2) => __PRIVATE_registerAuth(e2)), // Our users can initialize Auth right after Firestore, so we give it
    // a chance to register itself with the component framework before we
    // determine whether to start up in unauthenticated mode.
    setTimeout(() => {
      if (!this.auth) {
        const e2 = this.t.getImmediate({
          optional: true
        });
        e2 ? __PRIVATE_registerAuth(e2) : (
          // If auth is still not available, proceed with `null` user
          (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "Auth not yet detected"), r2.resolve(), r2 = new __PRIVATE_Deferred())
        );
      }
    }, 0), __PRIVATE_awaitNextToken();
  }
  getToken() {
    const e = this.i, t2 = this.forceRefresh;
    return this.forceRefresh = false, this.auth ? this.auth.getToken(t2).then((t3) => (
      // Cancel the request since the token changed while the request was
      // outstanding so the response is potentially for a previous user (which
      // user, we can't be sure).
      this.i !== e ? (__PRIVATE_logDebug("FirebaseAuthCredentialsProvider", "getToken aborted due to token change."), this.getToken()) : t3 ? (__PRIVATE_hardAssert("string" == typeof t3.accessToken), new __PRIVATE_OAuthToken(t3.accessToken, this.currentUser)) : null
    )) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.auth && this.o && this.auth.removeAuthTokenListener(this.o), this.o = void 0;
  }
  // Auth.getUid() can return null even with a user logged in. It is because
  // getUid() is synchronous, but the auth code populating Uid is asynchronous.
  // This method should only be called in the AuthTokenListener callback
  // to guarantee to get the actual user.
  u() {
    const e = this.auth && this.auth.getUid();
    return __PRIVATE_hardAssert(null === e || "string" == typeof e), new User(e);
  }
};
var __PRIVATE_FirstPartyToken = class {
  constructor(e, t2, n2) {
    this.l = e, this.h = t2, this.P = n2, this.type = "FirstParty", this.user = User.FIRST_PARTY, this.I = /* @__PURE__ */ new Map();
  }
  /**
   * Gets an authorization token, using a provided factory function, or return
   * null.
   */
  T() {
    return this.P ? this.P() : null;
  }
  get headers() {
    this.I.set("X-Goog-AuthUser", this.l);
    const e = this.T();
    return e && this.I.set("Authorization", e), this.h && this.I.set("X-Goog-Iam-Authorization-Token", this.h), this.I;
  }
};
var __PRIVATE_FirstPartyAuthCredentialsProvider = class {
  constructor(e, t2, n2) {
    this.l = e, this.h = t2, this.P = n2;
  }
  getToken() {
    return Promise.resolve(new __PRIVATE_FirstPartyToken(this.l, this.h, this.P));
  }
  start(e, t2) {
    e.enqueueRetryable(() => t2(User.FIRST_PARTY));
  }
  shutdown() {
  }
  invalidateToken() {
  }
};
var AppCheckToken = class {
  constructor(e) {
    this.value = e, this.type = "AppCheck", this.headers = /* @__PURE__ */ new Map(), e && e.length > 0 && this.headers.set("x-firebase-appcheck", this.value);
  }
};
var __PRIVATE_FirebaseAppCheckTokenProvider = class {
  constructor(e) {
    this.A = e, this.forceRefresh = false, this.appCheck = null, this.R = null;
  }
  start(e, t2) {
    __PRIVATE_hardAssert(void 0 === this.o);
    const onTokenChanged = (e2) => {
      null != e2.error && __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Error getting App Check token; using placeholder token instead. Error: ${e2.error.message}`);
      const n2 = e2.token !== this.R;
      return this.R = e2.token, __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", `Received ${n2 ? "new" : "existing"} token.`), n2 ? t2(e2.token) : Promise.resolve();
    };
    this.o = (t3) => {
      e.enqueueRetryable(() => onTokenChanged(t3));
    };
    const __PRIVATE_registerAppCheck = (e2) => {
      __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck detected"), this.appCheck = e2, this.o && this.appCheck.addTokenListener(this.o);
    };
    this.A.onInit((e2) => __PRIVATE_registerAppCheck(e2)), // Our users can initialize AppCheck after Firestore, so we give it
    // a chance to register itself with the component framework.
    setTimeout(() => {
      if (!this.appCheck) {
        const e2 = this.A.getImmediate({
          optional: true
        });
        e2 ? __PRIVATE_registerAppCheck(e2) : (
          // If AppCheck is still not available, proceed without it.
          __PRIVATE_logDebug("FirebaseAppCheckTokenProvider", "AppCheck not yet detected")
        );
      }
    }, 0);
  }
  getToken() {
    const e = this.forceRefresh;
    return this.forceRefresh = false, this.appCheck ? this.appCheck.getToken(e).then((e2) => e2 ? (__PRIVATE_hardAssert("string" == typeof e2.token), this.R = e2.token, new AppCheckToken(e2.token)) : null) : Promise.resolve(null);
  }
  invalidateToken() {
    this.forceRefresh = true;
  }
  shutdown() {
    this.appCheck && this.o && this.appCheck.removeTokenListener(this.o), this.o = void 0;
  }
};
function __PRIVATE_primitiveComparator(e, t2) {
  return e < t2 ? -1 : e > t2 ? 1 : 0;
}
function __PRIVATE_arrayEquals(e, t2, n2) {
  return e.length === t2.length && e.every((e2, r2) => n2(e2, t2[r2]));
}
var Timestamp = class {
  /**
   * Creates a new timestamp.
   *
   * @param seconds - The number of seconds of UTC time since Unix epoch
   *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
   *     9999-12-31T23:59:59Z inclusive.
   * @param nanoseconds - The non-negative fractions of a second at nanosecond
   *     resolution. Negative second values with fractions must still have
   *     non-negative nanoseconds values that count forward in time. Must be
   *     from 0 to 999,999,999 inclusive.
   */
  constructor(e, t2) {
    if (this.seconds = e, this.nanoseconds = t2, t2 < 0)
      throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t2);
    if (t2 >= 1e9)
      throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + t2);
    if (e < -62135596800)
      throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
    if (e >= 253402300800)
      throw new FirestoreError(D.INVALID_ARGUMENT, "Timestamp seconds out of range: " + e);
  }
  /**
   * Creates a new timestamp with the current date, with millisecond precision.
   *
   * @returns a new timestamp representing the current date.
   */
  static now() {
    return Timestamp.fromMillis(Date.now());
  }
  /**
   * Creates a new timestamp from the given date.
   *
   * @param date - The date to initialize the `Timestamp` from.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     date.
   */
  static fromDate(e) {
    return Timestamp.fromMillis(e.getTime());
  }
  /**
   * Creates a new timestamp from the given number of milliseconds.
   *
   * @param milliseconds - Number of milliseconds since Unix epoch
   *     1970-01-01T00:00:00Z.
   * @returns A new `Timestamp` representing the same point in time as the given
   *     number of milliseconds.
   */
  static fromMillis(e) {
    const t2 = Math.floor(e / 1e3), n2 = Math.floor(1e6 * (e - 1e3 * t2));
    return new Timestamp(t2, n2);
  }
  /**
   * Converts a `Timestamp` to a JavaScript `Date` object. This conversion
   * causes a loss of precision since `Date` objects only support millisecond
   * precision.
   *
   * @returns JavaScript `Date` object representing the same point in time as
   *     this `Timestamp`, with millisecond precision.
   */
  toDate() {
    return new Date(this.toMillis());
  }
  /**
   * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
   * epoch). This operation causes a loss of precision.
   *
   * @returns The point in time corresponding to this timestamp, represented as
   *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
   */
  toMillis() {
    return 1e3 * this.seconds + this.nanoseconds / 1e6;
  }
  _compareTo(e) {
    return this.seconds === e.seconds ? __PRIVATE_primitiveComparator(this.nanoseconds, e.nanoseconds) : __PRIVATE_primitiveComparator(this.seconds, e.seconds);
  }
  /**
   * Returns true if this `Timestamp` is equal to the provided one.
   *
   * @param other - The `Timestamp` to compare against.
   * @returns true if this `Timestamp` is equal to the provided one.
   */
  isEqual(e) {
    return e.seconds === this.seconds && e.nanoseconds === this.nanoseconds;
  }
  /** Returns a textual representation of this `Timestamp`. */
  toString() {
    return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
  }
  /** Returns a JSON-serializable representation of this `Timestamp`. */
  toJSON() {
    return {
      seconds: this.seconds,
      nanoseconds: this.nanoseconds
    };
  }
  /**
   * Converts this object to a primitive string, which allows `Timestamp` objects
   * to be compared using the `>`, `<=`, `>=` and `>` operators.
   */
  valueOf() {
    const e = this.seconds - -62135596800;
    return String(e).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
  }
};
var SnapshotVersion = class {
  constructor(e) {
    this.timestamp = e;
  }
  static fromTimestamp(e) {
    return new SnapshotVersion(e);
  }
  static min() {
    return new SnapshotVersion(new Timestamp(0, 0));
  }
  static max() {
    return new SnapshotVersion(new Timestamp(253402300799, 999999999));
  }
  compareTo(e) {
    return this.timestamp._compareTo(e.timestamp);
  }
  isEqual(e) {
    return this.timestamp.isEqual(e.timestamp);
  }
  /** Returns a number representation of the version for use in spec tests. */
  toMicroseconds() {
    return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
  }
  toString() {
    return "SnapshotVersion(" + this.timestamp.toString() + ")";
  }
  toTimestamp() {
    return this.timestamp;
  }
};
var BasePath = class {
  constructor(e, t2, n2) {
    void 0 === t2 ? t2 = 0 : t2 > e.length && fail(), void 0 === n2 ? n2 = e.length - t2 : n2 > e.length - t2 && fail(), this.segments = e, this.offset = t2, this.len = n2;
  }
  get length() {
    return this.len;
  }
  isEqual(e) {
    return 0 === BasePath.comparator(this, e);
  }
  child(e) {
    const t2 = this.segments.slice(this.offset, this.limit());
    return e instanceof BasePath ? e.forEach((e2) => {
      t2.push(e2);
    }) : t2.push(e), this.construct(t2);
  }
  /** The index of one past the last segment of the path. */
  limit() {
    return this.offset + this.length;
  }
  popFirst(e) {
    return e = void 0 === e ? 1 : e, this.construct(this.segments, this.offset + e, this.length - e);
  }
  popLast() {
    return this.construct(this.segments, this.offset, this.length - 1);
  }
  firstSegment() {
    return this.segments[this.offset];
  }
  lastSegment() {
    return this.get(this.length - 1);
  }
  get(e) {
    return this.segments[this.offset + e];
  }
  isEmpty() {
    return 0 === this.length;
  }
  isPrefixOf(e) {
    if (e.length < this.length)
      return false;
    for (let t2 = 0; t2 < this.length; t2++)
      if (this.get(t2) !== e.get(t2))
        return false;
    return true;
  }
  isImmediateParentOf(e) {
    if (this.length + 1 !== e.length)
      return false;
    for (let t2 = 0; t2 < this.length; t2++)
      if (this.get(t2) !== e.get(t2))
        return false;
    return true;
  }
  forEach(e) {
    for (let t2 = this.offset, n2 = this.limit(); t2 < n2; t2++)
      e(this.segments[t2]);
  }
  toArray() {
    return this.segments.slice(this.offset, this.limit());
  }
  static comparator(e, t2) {
    const n2 = Math.min(e.length, t2.length);
    for (let r2 = 0; r2 < n2; r2++) {
      const n3 = e.get(r2), i = t2.get(r2);
      if (n3 < i)
        return -1;
      if (n3 > i)
        return 1;
    }
    return e.length < t2.length ? -1 : e.length > t2.length ? 1 : 0;
  }
};
var ResourcePath = class extends BasePath {
  construct(e, t2, n2) {
    return new ResourcePath(e, t2, n2);
  }
  canonicalString() {
    return this.toArray().join("/");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns a string representation of this path
   * where each path segment has been encoded with
   * `encodeURIComponent`.
   */
  toUriEncodedString() {
    return this.toArray().map(encodeURIComponent).join("/");
  }
  /**
   * Creates a resource path from the given slash-delimited string. If multiple
   * arguments are provided, all components are combined. Leading and trailing
   * slashes from all components are ignored.
   */
  static fromString(...e) {
    const t2 = [];
    for (const n2 of e) {
      if (n2.indexOf("//") >= 0)
        throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid segment (${n2}). Paths must not contain // in them.`);
      t2.push(...n2.split("/").filter((e2) => e2.length > 0));
    }
    return new ResourcePath(t2);
  }
  static emptyPath() {
    return new ResourcePath([]);
  }
};
var v = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
var FieldPath$1 = class extends BasePath {
  construct(e, t2, n2) {
    return new FieldPath$1(e, t2, n2);
  }
  /**
   * Returns true if the string could be used as a segment in a field path
   * without escaping.
   */
  static isValidIdentifier(e) {
    return v.test(e);
  }
  canonicalString() {
    return this.toArray().map((e) => (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), FieldPath$1.isValidIdentifier(e) || (e = "`" + e + "`"), e)).join(".");
  }
  toString() {
    return this.canonicalString();
  }
  /**
   * Returns true if this field references the key of a document.
   */
  isKeyField() {
    return 1 === this.length && "__name__" === this.get(0);
  }
  /**
   * The field designating the key of a document.
   */
  static keyField() {
    return new FieldPath$1(["__name__"]);
  }
  /**
   * Parses a field string from the given server-formatted string.
   *
   * - Splitting the empty string is not allowed (for now at least).
   * - Empty segments within the string (e.g. if there are two consecutive
   *   separators) are not allowed.
   *
   * TODO(b/37244157): we should make this more strict. Right now, it allows
   * non-identifier path components, even if they aren't escaped.
   */
  static fromServerFormat(e) {
    const t2 = [];
    let n2 = "", r2 = 0;
    const __PRIVATE_addCurrentSegment = () => {
      if (0 === n2.length)
        throw new FirestoreError(D.INVALID_ARGUMENT, `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);
      t2.push(n2), n2 = "";
    };
    let i = false;
    for (; r2 < e.length; ) {
      const t3 = e[r2];
      if ("\\" === t3) {
        if (r2 + 1 === e.length)
          throw new FirestoreError(D.INVALID_ARGUMENT, "Path has trailing escape character: " + e);
        const t4 = e[r2 + 1];
        if ("\\" !== t4 && "." !== t4 && "`" !== t4)
          throw new FirestoreError(D.INVALID_ARGUMENT, "Path has invalid escape sequence: " + e);
        n2 += t4, r2 += 2;
      } else
        "`" === t3 ? (i = !i, r2++) : "." !== t3 || i ? (n2 += t3, r2++) : (__PRIVATE_addCurrentSegment(), r2++);
    }
    if (__PRIVATE_addCurrentSegment(), i)
      throw new FirestoreError(D.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
    return new FieldPath$1(t2);
  }
  static emptyPath() {
    return new FieldPath$1([]);
  }
};
var DocumentKey = class {
  constructor(e) {
    this.path = e;
  }
  static fromPath(e) {
    return new DocumentKey(ResourcePath.fromString(e));
  }
  static fromName(e) {
    return new DocumentKey(ResourcePath.fromString(e).popFirst(5));
  }
  static empty() {
    return new DocumentKey(ResourcePath.emptyPath());
  }
  get collectionGroup() {
    return this.path.popLast().lastSegment();
  }
  /** Returns true if the document is in the specified collectionId. */
  hasCollectionId(e) {
    return this.path.length >= 2 && this.path.get(this.path.length - 2) === e;
  }
  /** Returns the collection group (i.e. the name of the parent collection) for this key. */
  getCollectionGroup() {
    return this.path.get(this.path.length - 2);
  }
  /** Returns the fully qualified path to the parent collection. */
  getCollectionPath() {
    return this.path.popLast();
  }
  isEqual(e) {
    return null !== e && 0 === ResourcePath.comparator(this.path, e.path);
  }
  toString() {
    return this.path.toString();
  }
  static comparator(e, t2) {
    return ResourcePath.comparator(e.path, t2.path);
  }
  static isDocumentKey(e) {
    return e.length % 2 == 0;
  }
  /**
   * Creates and returns a new document key with the given segments.
   *
   * @param segments - The segments of the path to the document
   * @returns A new instance of DocumentKey
   */
  static fromSegments(e) {
    return new DocumentKey(new ResourcePath(e.slice()));
  }
};
var FieldIndex = class {
  constructor(e, t2, n2, r2) {
    this.indexId = e, this.collectionGroup = t2, this.fields = n2, this.indexState = r2;
  }
};
FieldIndex.UNKNOWN_ID = -1;
function __PRIVATE_newIndexOffsetSuccessorFromReadTime(e, t2) {
  const n2 = e.toTimestamp().seconds, r2 = e.toTimestamp().nanoseconds + 1, i = SnapshotVersion.fromTimestamp(1e9 === r2 ? new Timestamp(n2 + 1, 0) : new Timestamp(n2, r2));
  return new IndexOffset(i, DocumentKey.empty(), t2);
}
function __PRIVATE_newIndexOffsetFromDocument(e) {
  return new IndexOffset(e.readTime, e.key, -1);
}
var IndexOffset = class {
  constructor(e, t2, n2) {
    this.readTime = e, this.documentKey = t2, this.largestBatchId = n2;
  }
  /** Returns an offset that sorts before all regular offsets. */
  static min() {
    return new IndexOffset(SnapshotVersion.min(), DocumentKey.empty(), -1);
  }
  /** Returns an offset that sorts after all regular offsets. */
  static max() {
    return new IndexOffset(SnapshotVersion.max(), DocumentKey.empty(), -1);
  }
};
function __PRIVATE_indexOffsetComparator(e, t2) {
  let n2 = e.readTime.compareTo(t2.readTime);
  return 0 !== n2 ? n2 : (n2 = DocumentKey.comparator(e.documentKey, t2.documentKey), 0 !== n2 ? n2 : __PRIVATE_primitiveComparator(e.largestBatchId, t2.largestBatchId));
}
var PersistenceTransaction = class {
  constructor() {
    this.onCommittedListeners = [];
  }
  addOnCommittedListener(e) {
    this.onCommittedListeners.push(e);
  }
  raiseOnCommittedEvent() {
    this.onCommittedListeners.forEach((e) => e());
  }
};
var PersistencePromise = class {
  constructor(e) {
    this.nextCallback = null, this.catchCallback = null, // When the operation resolves, we'll set result or error and mark isDone.
    this.result = void 0, this.error = void 0, this.isDone = false, // Set to true when .then() or .catch() are called and prevents additional
    // chaining.
    this.callbackAttached = false, e((e2) => {
      this.isDone = true, this.result = e2, this.nextCallback && // value should be defined unless T is Void, but we can't express
      // that in the type system.
      this.nextCallback(e2);
    }, (e2) => {
      this.isDone = true, this.error = e2, this.catchCallback && this.catchCallback(e2);
    });
  }
  catch(e) {
    return this.next(void 0, e);
  }
  next(e, t2) {
    return this.callbackAttached && fail(), this.callbackAttached = true, this.isDone ? this.error ? this.wrapFailure(t2, this.error) : this.wrapSuccess(e, this.result) : new PersistencePromise((n2, r2) => {
      this.nextCallback = (t3) => {
        this.wrapSuccess(e, t3).next(n2, r2);
      }, this.catchCallback = (e2) => {
        this.wrapFailure(t2, e2).next(n2, r2);
      };
    });
  }
  toPromise() {
    return new Promise((e, t2) => {
      this.next(e, t2);
    });
  }
  wrapUserFunction(e) {
    try {
      const t2 = e();
      return t2 instanceof PersistencePromise ? t2 : PersistencePromise.resolve(t2);
    } catch (e2) {
      return PersistencePromise.reject(e2);
    }
  }
  wrapSuccess(e, t2) {
    return e ? this.wrapUserFunction(() => e(t2)) : PersistencePromise.resolve(t2);
  }
  wrapFailure(e, t2) {
    return e ? this.wrapUserFunction(() => e(t2)) : PersistencePromise.reject(t2);
  }
  static resolve(e) {
    return new PersistencePromise((t2, n2) => {
      t2(e);
    });
  }
  static reject(e) {
    return new PersistencePromise((t2, n2) => {
      n2(e);
    });
  }
  static waitFor(e) {
    return new PersistencePromise((t2, n2) => {
      let r2 = 0, i = 0, s2 = false;
      e.forEach((e2) => {
        ++r2, e2.next(() => {
          ++i, s2 && i === r2 && t2();
        }, (e3) => n2(e3));
      }), s2 = true, i === r2 && t2();
    });
  }
  /**
   * Given an array of predicate functions that asynchronously evaluate to a
   * boolean, implements a short-circuiting `or` between the results. Predicates
   * will be evaluated until one of them returns `true`, then stop. The final
   * result will be whether any of them returned `true`.
   */
  static or(e) {
    let t2 = PersistencePromise.resolve(false);
    for (const n2 of e)
      t2 = t2.next((e2) => e2 ? PersistencePromise.resolve(e2) : n2());
    return t2;
  }
  static forEach(e, t2) {
    const n2 = [];
    return e.forEach((e2, r2) => {
      n2.push(t2.call(this, e2, r2));
    }), this.waitFor(n2);
  }
  /**
   * Concurrently map all array elements through asynchronous function.
   */
  static mapArray(e, t2) {
    return new PersistencePromise((n2, r2) => {
      const i = e.length, s2 = new Array(i);
      let o2 = 0;
      for (let _ = 0; _ < i; _++) {
        const a2 = _;
        t2(e[a2]).next((e2) => {
          s2[a2] = e2, ++o2, o2 === i && n2(s2);
        }, (e2) => r2(e2));
      }
    });
  }
  /**
   * An alternative to recursive PersistencePromise calls, that avoids
   * potential memory problems from unbounded chains of promises.
   *
   * The `action` will be called repeatedly while `condition` is true.
   */
  static doWhile(e, t2) {
    return new PersistencePromise((n2, r2) => {
      const process2 = () => {
        true === e() ? t2().next(() => {
          process2();
        }, r2) : n2();
      };
      process2();
    });
  }
};
function __PRIVATE_getAndroidVersion(e) {
  const t2 = e.match(/Android ([\d.]+)/i), n2 = t2 ? t2[1].split(".").slice(0, 2).join(".") : "-1";
  return Number(n2);
}
function __PRIVATE_isIndexedDbTransactionError(e) {
  return "IndexedDbTransactionError" === e.name;
}
var __PRIVATE_ListenSequence = class {
  constructor(e, t2) {
    this.previousValue = e, t2 && (t2.sequenceNumberHandler = (e2) => this.ie(e2), this.se = (e2) => t2.writeSequenceNumber(e2));
  }
  ie(e) {
    return this.previousValue = Math.max(e, this.previousValue), this.previousValue;
  }
  next() {
    const e = ++this.previousValue;
    return this.se && this.se(e), e;
  }
};
__PRIVATE_ListenSequence.oe = -1;
function __PRIVATE_isNullOrUndefined(e) {
  return null == e;
}
function __PRIVATE_isNegativeZero(e) {
  return 0 === e && 1 / e == -1 / 0;
}
var H = [...[...[...[...["mutationQueues", "mutations", "documentMutations", "remoteDocuments", "targets", "owner", "targetGlobal", "targetDocuments"], "clientMetadata"], "remoteDocumentGlobal"], "collectionParents"], "bundles", "namedQueries"];
var J = [...H, "documentOverlays"];
var Y = ["mutationQueues", "mutations", "documentMutations", "remoteDocumentsV14", "targets", "owner", "targetGlobal", "targetDocuments", "clientMetadata", "remoteDocumentGlobal", "collectionParents", "bundles", "namedQueries", "documentOverlays"];
var Z = Y;
var X = [...Z, "indexConfiguration", "indexState", "indexEntries"];
var te = [...X, "globals"];
function __PRIVATE_objectSize(e) {
  let t2 = 0;
  for (const n2 in e)
    Object.prototype.hasOwnProperty.call(e, n2) && t2++;
  return t2;
}
function forEach2(e, t2) {
  for (const n2 in e)
    Object.prototype.hasOwnProperty.call(e, n2) && t2(n2, e[n2]);
}
function isEmpty2(e) {
  for (const t2 in e)
    if (Object.prototype.hasOwnProperty.call(e, t2))
      return false;
  return true;
}
var SortedMap = class {
  constructor(e, t2) {
    this.comparator = e, this.root = t2 || LLRBNode.EMPTY;
  }
  // Returns a copy of the map, with the specified key/value added or replaced.
  insert(e, t2) {
    return new SortedMap(this.comparator, this.root.insert(e, t2, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
  }
  // Returns a copy of the map, with the specified key removed.
  remove(e) {
    return new SortedMap(this.comparator, this.root.remove(e, this.comparator).copy(null, null, LLRBNode.BLACK, null, null));
  }
  // Returns the value of the node with the given key, or null.
  get(e) {
    let t2 = this.root;
    for (; !t2.isEmpty(); ) {
      const n2 = this.comparator(e, t2.key);
      if (0 === n2)
        return t2.value;
      n2 < 0 ? t2 = t2.left : n2 > 0 && (t2 = t2.right);
    }
    return null;
  }
  // Returns the index of the element in this sorted map, or -1 if it doesn't
  // exist.
  indexOf(e) {
    let t2 = 0, n2 = this.root;
    for (; !n2.isEmpty(); ) {
      const r2 = this.comparator(e, n2.key);
      if (0 === r2)
        return t2 + n2.left.size;
      r2 < 0 ? n2 = n2.left : (
        // Count all nodes left of the node plus the node itself
        (t2 += n2.left.size + 1, n2 = n2.right)
      );
    }
    return -1;
  }
  isEmpty() {
    return this.root.isEmpty();
  }
  // Returns the total number of nodes in the map.
  get size() {
    return this.root.size;
  }
  // Returns the minimum key in the map.
  minKey() {
    return this.root.minKey();
  }
  // Returns the maximum key in the map.
  maxKey() {
    return this.root.maxKey();
  }
  // Traverses the map in key order and calls the specified action function
  // for each key/value pair. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.root.inorderTraversal(e);
  }
  forEach(e) {
    this.inorderTraversal((t2, n2) => (e(t2, n2), false));
  }
  toString() {
    const e = [];
    return this.inorderTraversal((t2, n2) => (e.push(`${t2}:${n2}`), false)), `{${e.join(", ")}}`;
  }
  // Traverses the map in reverse key order and calls the specified action
  // function for each key/value pair. If action returns true, traversal is
  // aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.root.reverseTraversal(e);
  }
  // Returns an iterator over the SortedMap.
  getIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, false);
  }
  getIteratorFrom(e) {
    return new SortedMapIterator(this.root, e, this.comparator, false);
  }
  getReverseIterator() {
    return new SortedMapIterator(this.root, null, this.comparator, true);
  }
  getReverseIteratorFrom(e) {
    return new SortedMapIterator(this.root, e, this.comparator, true);
  }
};
var SortedMapIterator = class {
  constructor(e, t2, n2, r2) {
    this.isReverse = r2, this.nodeStack = [];
    let i = 1;
    for (; !e.isEmpty(); )
      if (i = t2 ? n2(e.key, t2) : 1, // flip the comparison if we're going in reverse
      t2 && r2 && (i *= -1), i < 0)
        e = this.isReverse ? e.left : e.right;
      else {
        if (0 === i) {
          this.nodeStack.push(e);
          break;
        }
        this.nodeStack.push(e), e = this.isReverse ? e.right : e.left;
      }
  }
  getNext() {
    let e = this.nodeStack.pop();
    const t2 = {
      key: e.key,
      value: e.value
    };
    if (this.isReverse)
      for (e = e.left; !e.isEmpty(); )
        this.nodeStack.push(e), e = e.right;
    else
      for (e = e.right; !e.isEmpty(); )
        this.nodeStack.push(e), e = e.left;
    return t2;
  }
  hasNext() {
    return this.nodeStack.length > 0;
  }
  peek() {
    if (0 === this.nodeStack.length)
      return null;
    const e = this.nodeStack[this.nodeStack.length - 1];
    return {
      key: e.key,
      value: e.value
    };
  }
};
var LLRBNode = class {
  constructor(e, t2, n2, r2, i) {
    this.key = e, this.value = t2, this.color = null != n2 ? n2 : LLRBNode.RED, this.left = null != r2 ? r2 : LLRBNode.EMPTY, this.right = null != i ? i : LLRBNode.EMPTY, this.size = this.left.size + 1 + this.right.size;
  }
  // Returns a copy of the current node, optionally replacing pieces of it.
  copy(e, t2, n2, r2, i) {
    return new LLRBNode(null != e ? e : this.key, null != t2 ? t2 : this.value, null != n2 ? n2 : this.color, null != r2 ? r2 : this.left, null != i ? i : this.right);
  }
  isEmpty() {
    return false;
  }
  // Traverses the tree in key order and calls the specified action function
  // for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  inorderTraversal(e) {
    return this.left.inorderTraversal(e) || e(this.key, this.value) || this.right.inorderTraversal(e);
  }
  // Traverses the tree in reverse key order and calls the specified action
  // function for each node. If action returns true, traversal is aborted.
  // Returns the first truthy value returned by action, or the last falsey
  // value returned by action.
  reverseTraversal(e) {
    return this.right.reverseTraversal(e) || e(this.key, this.value) || this.left.reverseTraversal(e);
  }
  // Returns the minimum node in the tree.
  min() {
    return this.left.isEmpty() ? this : this.left.min();
  }
  // Returns the maximum key in the tree.
  minKey() {
    return this.min().key;
  }
  // Returns the maximum key in the tree.
  maxKey() {
    return this.right.isEmpty() ? this.key : this.right.maxKey();
  }
  // Returns new tree, with the key/value added.
  insert(e, t2, n2) {
    let r2 = this;
    const i = n2(e, r2.key);
    return r2 = i < 0 ? r2.copy(null, null, null, r2.left.insert(e, t2, n2), null) : 0 === i ? r2.copy(null, t2, null, null, null) : r2.copy(null, null, null, null, r2.right.insert(e, t2, n2)), r2.fixUp();
  }
  removeMin() {
    if (this.left.isEmpty())
      return LLRBNode.EMPTY;
    let e = this;
    return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp();
  }
  // Returns new tree, with the specified item removed.
  remove(e, t2) {
    let n2, r2 = this;
    if (t2(e, r2.key) < 0)
      r2.left.isEmpty() || r2.left.isRed() || r2.left.left.isRed() || (r2 = r2.moveRedLeft()), r2 = r2.copy(null, null, null, r2.left.remove(e, t2), null);
    else {
      if (r2.left.isRed() && (r2 = r2.rotateRight()), r2.right.isEmpty() || r2.right.isRed() || r2.right.left.isRed() || (r2 = r2.moveRedRight()), 0 === t2(e, r2.key)) {
        if (r2.right.isEmpty())
          return LLRBNode.EMPTY;
        n2 = r2.right.min(), r2 = r2.copy(n2.key, n2.value, null, null, r2.right.removeMin());
      }
      r2 = r2.copy(null, null, null, null, r2.right.remove(e, t2));
    }
    return r2.fixUp();
  }
  isRed() {
    return this.color;
  }
  // Returns new tree after performing any needed rotations.
  fixUp() {
    let e = this;
    return e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()), e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()), e.left.isRed() && e.right.isRed() && (e = e.colorFlip()), e;
  }
  moveRedLeft() {
    let e = this.colorFlip();
    return e.right.left.isRed() && (e = e.copy(null, null, null, null, e.right.rotateRight()), e = e.rotateLeft(), e = e.colorFlip()), e;
  }
  moveRedRight() {
    let e = this.colorFlip();
    return e.left.left.isRed() && (e = e.rotateRight(), e = e.colorFlip()), e;
  }
  rotateLeft() {
    const e = this.copy(null, null, LLRBNode.RED, null, this.right.left);
    return this.right.copy(null, null, this.color, e, null);
  }
  rotateRight() {
    const e = this.copy(null, null, LLRBNode.RED, this.left.right, null);
    return this.left.copy(null, null, this.color, null, e);
  }
  colorFlip() {
    const e = this.left.copy(null, null, !this.left.color, null, null), t2 = this.right.copy(null, null, !this.right.color, null, null);
    return this.copy(null, null, !this.color, e, t2);
  }
  // For testing.
  checkMaxDepth() {
    const e = this.check();
    return Math.pow(2, e) <= this.size + 1;
  }
  // In a balanced RB tree, the black-depth (number of black nodes) from root to
  // leaves is equal on both sides.  This function verifies that or asserts.
  check() {
    if (this.isRed() && this.left.isRed())
      throw fail();
    if (this.right.isRed())
      throw fail();
    const e = this.left.check();
    if (e !== this.right.check())
      throw fail();
    return e + (this.isRed() ? 0 : 1);
  }
};
LLRBNode.EMPTY = null, LLRBNode.RED = true, LLRBNode.BLACK = false;
LLRBNode.EMPTY = new // Represents an empty node (a leaf node in the Red-Black Tree).
class LLRBEmptyNode {
  constructor() {
    this.size = 0;
  }
  get key() {
    throw fail();
  }
  get value() {
    throw fail();
  }
  get color() {
    throw fail();
  }
  get left() {
    throw fail();
  }
  get right() {
    throw fail();
  }
  // Returns a copy of the current node.
  copy(e, t2, n2, r2, i) {
    return this;
  }
  // Returns a copy of the tree, with the specified key/value added.
  insert(e, t2, n2) {
    return new LLRBNode(e, t2);
  }
  // Returns a copy of the tree, with the specified key removed.
  remove(e, t2) {
    return this;
  }
  isEmpty() {
    return true;
  }
  inorderTraversal(e) {
    return false;
  }
  reverseTraversal(e) {
    return false;
  }
  minKey() {
    return null;
  }
  maxKey() {
    return null;
  }
  isRed() {
    return false;
  }
  // For testing.
  checkMaxDepth() {
    return true;
  }
  check() {
    return 0;
  }
}();
var SortedSet = class {
  constructor(e) {
    this.comparator = e, this.data = new SortedMap(this.comparator);
  }
  has(e) {
    return null !== this.data.get(e);
  }
  first() {
    return this.data.minKey();
  }
  last() {
    return this.data.maxKey();
  }
  get size() {
    return this.data.size;
  }
  indexOf(e) {
    return this.data.indexOf(e);
  }
  /** Iterates elements in order defined by "comparator" */
  forEach(e) {
    this.data.inorderTraversal((t2, n2) => (e(t2), false));
  }
  /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */
  forEachInRange(e, t2) {
    const n2 = this.data.getIteratorFrom(e[0]);
    for (; n2.hasNext(); ) {
      const r2 = n2.getNext();
      if (this.comparator(r2.key, e[1]) >= 0)
        return;
      t2(r2.key);
    }
  }
  /**
   * Iterates over `elem`s such that: start &lt;= elem until false is returned.
   */
  forEachWhile(e, t2) {
    let n2;
    for (n2 = void 0 !== t2 ? this.data.getIteratorFrom(t2) : this.data.getIterator(); n2.hasNext(); ) {
      if (!e(n2.getNext().key))
        return;
    }
  }
  /** Finds the least element greater than or equal to `elem`. */
  firstAfterOrEqual(e) {
    const t2 = this.data.getIteratorFrom(e);
    return t2.hasNext() ? t2.getNext().key : null;
  }
  getIterator() {
    return new SortedSetIterator(this.data.getIterator());
  }
  getIteratorFrom(e) {
    return new SortedSetIterator(this.data.getIteratorFrom(e));
  }
  /** Inserts or updates an element */
  add(e) {
    return this.copy(this.data.remove(e).insert(e, true));
  }
  /** Deletes an element */
  delete(e) {
    return this.has(e) ? this.copy(this.data.remove(e)) : this;
  }
  isEmpty() {
    return this.data.isEmpty();
  }
  unionWith(e) {
    let t2 = this;
    return t2.size < e.size && (t2 = e, e = this), e.forEach((e2) => {
      t2 = t2.add(e2);
    }), t2;
  }
  isEqual(e) {
    if (!(e instanceof SortedSet))
      return false;
    if (this.size !== e.size)
      return false;
    const t2 = this.data.getIterator(), n2 = e.data.getIterator();
    for (; t2.hasNext(); ) {
      const e2 = t2.getNext().key, r2 = n2.getNext().key;
      if (0 !== this.comparator(e2, r2))
        return false;
    }
    return true;
  }
  toArray() {
    const e = [];
    return this.forEach((t2) => {
      e.push(t2);
    }), e;
  }
  toString() {
    const e = [];
    return this.forEach((t2) => e.push(t2)), "SortedSet(" + e.toString() + ")";
  }
  copy(e) {
    const t2 = new SortedSet(this.comparator);
    return t2.data = e, t2;
  }
};
var SortedSetIterator = class {
  constructor(e) {
    this.iter = e;
  }
  getNext() {
    return this.iter.getNext().key;
  }
  hasNext() {
    return this.iter.hasNext();
  }
};
var FieldMask = class {
  constructor(e) {
    this.fields = e, // TODO(dimond): validation of FieldMask
    // Sort the field mask to support `FieldMask.isEqual()` and assert below.
    e.sort(FieldPath$1.comparator);
  }
  static empty() {
    return new FieldMask([]);
  }
  /**
   * Returns a new FieldMask object that is the result of adding all the given
   * fields paths to this field mask.
   */
  unionWith(e) {
    let t2 = new SortedSet(FieldPath$1.comparator);
    for (const e2 of this.fields)
      t2 = t2.add(e2);
    for (const n2 of e)
      t2 = t2.add(n2);
    return new FieldMask(t2.toArray());
  }
  /**
   * Verifies that `fieldPath` is included by at least one field in this field
   * mask.
   *
   * This is an O(n) operation, where `n` is the size of the field mask.
   */
  covers(e) {
    for (const t2 of this.fields)
      if (t2.isPrefixOf(e))
        return true;
    return false;
  }
  isEqual(e) {
    return __PRIVATE_arrayEquals(this.fields, e.fields, (e2, t2) => e2.isEqual(t2));
  }
};
var __PRIVATE_Base64DecodeError = class extends Error {
  constructor() {
    super(...arguments), this.name = "Base64DecodeError";
  }
};
var ByteString = class {
  constructor(e) {
    this.binaryString = e;
  }
  static fromBase64String(e) {
    const t2 = function __PRIVATE_decodeBase64(e2) {
      try {
        return atob(e2);
      } catch (e3) {
        throw "undefined" != typeof DOMException && e3 instanceof DOMException ? new __PRIVATE_Base64DecodeError("Invalid base64 string: " + e3) : e3;
      }
    }(e);
    return new ByteString(t2);
  }
  static fromUint8Array(e) {
    const t2 = (
      /**
      * Helper function to convert an Uint8array to a binary string.
      */
      function __PRIVATE_binaryStringFromUint8Array(e2) {
        let t3 = "";
        for (let n2 = 0; n2 < e2.length; ++n2)
          t3 += String.fromCharCode(e2[n2]);
        return t3;
      }(e)
    );
    return new ByteString(t2);
  }
  [Symbol.iterator]() {
    let e = 0;
    return {
      next: () => e < this.binaryString.length ? {
        value: this.binaryString.charCodeAt(e++),
        done: false
      } : {
        value: void 0,
        done: true
      }
    };
  }
  toBase64() {
    return function __PRIVATE_encodeBase64(e) {
      return btoa(e);
    }(this.binaryString);
  }
  toUint8Array() {
    return function __PRIVATE_uint8ArrayFromBinaryString(e) {
      const t2 = new Uint8Array(e.length);
      for (let n2 = 0; n2 < e.length; n2++)
        t2[n2] = e.charCodeAt(n2);
      return t2;
    }(this.binaryString);
  }
  approximateByteSize() {
    return 2 * this.binaryString.length;
  }
  compareTo(e) {
    return __PRIVATE_primitiveComparator(this.binaryString, e.binaryString);
  }
  isEqual(e) {
    return this.binaryString === e.binaryString;
  }
};
ByteString.EMPTY_BYTE_STRING = new ByteString("");
var ne = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
function __PRIVATE_normalizeTimestamp(e) {
  if (__PRIVATE_hardAssert(!!e), "string" == typeof e) {
    let t2 = 0;
    const n2 = ne.exec(e);
    if (__PRIVATE_hardAssert(!!n2), n2[1]) {
      let e2 = n2[1];
      e2 = (e2 + "000000000").substr(0, 9), t2 = Number(e2);
    }
    const r2 = new Date(e);
    return {
      seconds: Math.floor(r2.getTime() / 1e3),
      nanos: t2
    };
  }
  return {
    seconds: __PRIVATE_normalizeNumber(e.seconds),
    nanos: __PRIVATE_normalizeNumber(e.nanos)
  };
}
function __PRIVATE_normalizeNumber(e) {
  return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0;
}
function __PRIVATE_normalizeByteString(e) {
  return "string" == typeof e ? ByteString.fromBase64String(e) : ByteString.fromUint8Array(e);
}
function __PRIVATE_isServerTimestamp(e) {
  var t2, n2;
  return "server_timestamp" === (null === (n2 = ((null === (t2 = null == e ? void 0 : e.mapValue) || void 0 === t2 ? void 0 : t2.fields) || {}).__type__) || void 0 === n2 ? void 0 : n2.stringValue);
}
function __PRIVATE_getPreviousValue(e) {
  const t2 = e.mapValue.fields.__previous_value__;
  return __PRIVATE_isServerTimestamp(t2) ? __PRIVATE_getPreviousValue(t2) : t2;
}
function __PRIVATE_getLocalWriteTime(e) {
  const t2 = __PRIVATE_normalizeTimestamp(e.mapValue.fields.__local_write_time__.timestampValue);
  return new Timestamp(t2.seconds, t2.nanos);
}
var DatabaseId = class {
  constructor(e, t2) {
    this.projectId = e, this.database = t2 || "(default)";
  }
  static empty() {
    return new DatabaseId("", "");
  }
  get isDefaultDatabase() {
    return "(default)" === this.database;
  }
  isEqual(e) {
    return e instanceof DatabaseId && e.projectId === this.projectId && e.database === this.database;
  }
};
var re = {
  mapValue: {
    fields: {
      __type__: {
        stringValue: "__max__"
      }
    }
  }
};
function __PRIVATE_typeOrder(e) {
  return "nullValue" in e ? 0 : "booleanValue" in e ? 1 : "integerValue" in e || "doubleValue" in e ? 2 : "timestampValue" in e ? 3 : "stringValue" in e ? 5 : "bytesValue" in e ? 6 : "referenceValue" in e ? 7 : "geoPointValue" in e ? 8 : "arrayValue" in e ? 9 : "mapValue" in e ? __PRIVATE_isServerTimestamp(e) ? 4 : __PRIVATE_isMaxValue(e) ? 9007199254740991 : __PRIVATE_isVectorValue(e) ? 10 : 11 : fail();
}
function __PRIVATE_valueEquals(e, t2) {
  if (e === t2)
    return true;
  const n2 = __PRIVATE_typeOrder(e);
  if (n2 !== __PRIVATE_typeOrder(t2))
    return false;
  switch (n2) {
    case 0:
    case 9007199254740991:
      return true;
    case 1:
      return e.booleanValue === t2.booleanValue;
    case 4:
      return __PRIVATE_getLocalWriteTime(e).isEqual(__PRIVATE_getLocalWriteTime(t2));
    case 3:
      return function __PRIVATE_timestampEquals(e2, t3) {
        if ("string" == typeof e2.timestampValue && "string" == typeof t3.timestampValue && e2.timestampValue.length === t3.timestampValue.length)
          return e2.timestampValue === t3.timestampValue;
        const n3 = __PRIVATE_normalizeTimestamp(e2.timestampValue), r2 = __PRIVATE_normalizeTimestamp(t3.timestampValue);
        return n3.seconds === r2.seconds && n3.nanos === r2.nanos;
      }(e, t2);
    case 5:
      return e.stringValue === t2.stringValue;
    case 6:
      return function __PRIVATE_blobEquals(e2, t3) {
        return __PRIVATE_normalizeByteString(e2.bytesValue).isEqual(__PRIVATE_normalizeByteString(t3.bytesValue));
      }(e, t2);
    case 7:
      return e.referenceValue === t2.referenceValue;
    case 8:
      return function __PRIVATE_geoPointEquals(e2, t3) {
        return __PRIVATE_normalizeNumber(e2.geoPointValue.latitude) === __PRIVATE_normalizeNumber(t3.geoPointValue.latitude) && __PRIVATE_normalizeNumber(e2.geoPointValue.longitude) === __PRIVATE_normalizeNumber(t3.geoPointValue.longitude);
      }(e, t2);
    case 2:
      return function __PRIVATE_numberEquals(e2, t3) {
        if ("integerValue" in e2 && "integerValue" in t3)
          return __PRIVATE_normalizeNumber(e2.integerValue) === __PRIVATE_normalizeNumber(t3.integerValue);
        if ("doubleValue" in e2 && "doubleValue" in t3) {
          const n3 = __PRIVATE_normalizeNumber(e2.doubleValue), r2 = __PRIVATE_normalizeNumber(t3.doubleValue);
          return n3 === r2 ? __PRIVATE_isNegativeZero(n3) === __PRIVATE_isNegativeZero(r2) : isNaN(n3) && isNaN(r2);
        }
        return false;
      }(e, t2);
    case 9:
      return __PRIVATE_arrayEquals(e.arrayValue.values || [], t2.arrayValue.values || [], __PRIVATE_valueEquals);
    case 10:
    case 11:
      return function __PRIVATE_objectEquals(e2, t3) {
        const n3 = e2.mapValue.fields || {}, r2 = t3.mapValue.fields || {};
        if (__PRIVATE_objectSize(n3) !== __PRIVATE_objectSize(r2))
          return false;
        for (const e3 in n3)
          if (n3.hasOwnProperty(e3) && (void 0 === r2[e3] || !__PRIVATE_valueEquals(n3[e3], r2[e3])))
            return false;
        return true;
      }(e, t2);
    default:
      return fail();
  }
}
function __PRIVATE_arrayValueContains(e, t2) {
  return void 0 !== (e.values || []).find((e2) => __PRIVATE_valueEquals(e2, t2));
}
function __PRIVATE_valueCompare(e, t2) {
  if (e === t2)
    return 0;
  const n2 = __PRIVATE_typeOrder(e), r2 = __PRIVATE_typeOrder(t2);
  if (n2 !== r2)
    return __PRIVATE_primitiveComparator(n2, r2);
  switch (n2) {
    case 0:
    case 9007199254740991:
      return 0;
    case 1:
      return __PRIVATE_primitiveComparator(e.booleanValue, t2.booleanValue);
    case 2:
      return function __PRIVATE_compareNumbers(e2, t3) {
        const n3 = __PRIVATE_normalizeNumber(e2.integerValue || e2.doubleValue), r3 = __PRIVATE_normalizeNumber(t3.integerValue || t3.doubleValue);
        return n3 < r3 ? -1 : n3 > r3 ? 1 : n3 === r3 ? 0 : (
          // one or both are NaN.
          isNaN(n3) ? isNaN(r3) ? 0 : -1 : 1
        );
      }(e, t2);
    case 3:
      return __PRIVATE_compareTimestamps(e.timestampValue, t2.timestampValue);
    case 4:
      return __PRIVATE_compareTimestamps(__PRIVATE_getLocalWriteTime(e), __PRIVATE_getLocalWriteTime(t2));
    case 5:
      return __PRIVATE_primitiveComparator(e.stringValue, t2.stringValue);
    case 6:
      return function __PRIVATE_compareBlobs(e2, t3) {
        const n3 = __PRIVATE_normalizeByteString(e2), r3 = __PRIVATE_normalizeByteString(t3);
        return n3.compareTo(r3);
      }(e.bytesValue, t2.bytesValue);
    case 7:
      return function __PRIVATE_compareReferences(e2, t3) {
        const n3 = e2.split("/"), r3 = t3.split("/");
        for (let e3 = 0; e3 < n3.length && e3 < r3.length; e3++) {
          const t4 = __PRIVATE_primitiveComparator(n3[e3], r3[e3]);
          if (0 !== t4)
            return t4;
        }
        return __PRIVATE_primitiveComparator(n3.length, r3.length);
      }(e.referenceValue, t2.referenceValue);
    case 8:
      return function __PRIVATE_compareGeoPoints(e2, t3) {
        const n3 = __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e2.latitude), __PRIVATE_normalizeNumber(t3.latitude));
        if (0 !== n3)
          return n3;
        return __PRIVATE_primitiveComparator(__PRIVATE_normalizeNumber(e2.longitude), __PRIVATE_normalizeNumber(t3.longitude));
      }(e.geoPointValue, t2.geoPointValue);
    case 9:
      return __PRIVATE_compareArrays(e.arrayValue, t2.arrayValue);
    case 10:
      return function __PRIVATE_compareVectors(e2, t3) {
        var n3, r3, i, s2;
        const o2 = e2.fields || {}, _ = t3.fields || {}, a2 = null === (n3 = o2.value) || void 0 === n3 ? void 0 : n3.arrayValue, u2 = null === (r3 = _.value) || void 0 === r3 ? void 0 : r3.arrayValue, c2 = __PRIVATE_primitiveComparator((null === (i = null == a2 ? void 0 : a2.values) || void 0 === i ? void 0 : i.length) || 0, (null === (s2 = null == u2 ? void 0 : u2.values) || void 0 === s2 ? void 0 : s2.length) || 0);
        if (0 !== c2)
          return c2;
        return __PRIVATE_compareArrays(a2, u2);
      }(e.mapValue, t2.mapValue);
    case 11:
      return function __PRIVATE_compareMaps(e2, t3) {
        if (e2 === re.mapValue && t3 === re.mapValue)
          return 0;
        if (e2 === re.mapValue)
          return 1;
        if (t3 === re.mapValue)
          return -1;
        const n3 = e2.fields || {}, r3 = Object.keys(n3), i = t3.fields || {}, s2 = Object.keys(i);
        r3.sort(), s2.sort();
        for (let e3 = 0; e3 < r3.length && e3 < s2.length; ++e3) {
          const t4 = __PRIVATE_primitiveComparator(r3[e3], s2[e3]);
          if (0 !== t4)
            return t4;
          const o2 = __PRIVATE_valueCompare(n3[r3[e3]], i[s2[e3]]);
          if (0 !== o2)
            return o2;
        }
        return __PRIVATE_primitiveComparator(r3.length, s2.length);
      }(e.mapValue, t2.mapValue);
    default:
      throw fail();
  }
}
function __PRIVATE_compareTimestamps(e, t2) {
  if ("string" == typeof e && "string" == typeof t2 && e.length === t2.length)
    return __PRIVATE_primitiveComparator(e, t2);
  const n2 = __PRIVATE_normalizeTimestamp(e), r2 = __PRIVATE_normalizeTimestamp(t2), i = __PRIVATE_primitiveComparator(n2.seconds, r2.seconds);
  return 0 !== i ? i : __PRIVATE_primitiveComparator(n2.nanos, r2.nanos);
}
function __PRIVATE_compareArrays(e, t2) {
  const n2 = e.values || [], r2 = t2.values || [];
  for (let e2 = 0; e2 < n2.length && e2 < r2.length; ++e2) {
    const t3 = __PRIVATE_valueCompare(n2[e2], r2[e2]);
    if (t3)
      return t3;
  }
  return __PRIVATE_primitiveComparator(n2.length, r2.length);
}
function canonicalId(e) {
  return __PRIVATE_canonifyValue(e);
}
function __PRIVATE_canonifyValue(e) {
  return "nullValue" in e ? "null" : "booleanValue" in e ? "" + e.booleanValue : "integerValue" in e ? "" + e.integerValue : "doubleValue" in e ? "" + e.doubleValue : "timestampValue" in e ? function __PRIVATE_canonifyTimestamp(e2) {
    const t2 = __PRIVATE_normalizeTimestamp(e2);
    return `time(${t2.seconds},${t2.nanos})`;
  }(e.timestampValue) : "stringValue" in e ? e.stringValue : "bytesValue" in e ? function __PRIVATE_canonifyByteString(e2) {
    return __PRIVATE_normalizeByteString(e2).toBase64();
  }(e.bytesValue) : "referenceValue" in e ? function __PRIVATE_canonifyReference(e2) {
    return DocumentKey.fromName(e2).toString();
  }(e.referenceValue) : "geoPointValue" in e ? function __PRIVATE_canonifyGeoPoint(e2) {
    return `geo(${e2.latitude},${e2.longitude})`;
  }(e.geoPointValue) : "arrayValue" in e ? function __PRIVATE_canonifyArray(e2) {
    let t2 = "[", n2 = true;
    for (const r2 of e2.values || [])
      n2 ? n2 = false : t2 += ",", t2 += __PRIVATE_canonifyValue(r2);
    return t2 + "]";
  }(e.arrayValue) : "mapValue" in e ? function __PRIVATE_canonifyMap(e2) {
    const t2 = Object.keys(e2.fields || {}).sort();
    let n2 = "{", r2 = true;
    for (const i of t2)
      r2 ? r2 = false : n2 += ",", n2 += `${i}:${__PRIVATE_canonifyValue(e2.fields[i])}`;
    return n2 + "}";
  }(e.mapValue) : fail();
}
function isInteger(e) {
  return !!e && "integerValue" in e;
}
function isArray2(e) {
  return !!e && "arrayValue" in e;
}
function __PRIVATE_isMapValue(e) {
  return !!e && "mapValue" in e;
}
function __PRIVATE_isVectorValue(e) {
  var t2, n2;
  return "__vector__" === (null === (n2 = ((null === (t2 = null == e ? void 0 : e.mapValue) || void 0 === t2 ? void 0 : t2.fields) || {}).__type__) || void 0 === n2 ? void 0 : n2.stringValue);
}
function __PRIVATE_deepClone(e) {
  if (e.geoPointValue)
    return {
      geoPointValue: Object.assign({}, e.geoPointValue)
    };
  if (e.timestampValue && "object" == typeof e.timestampValue)
    return {
      timestampValue: Object.assign({}, e.timestampValue)
    };
  if (e.mapValue) {
    const t2 = {
      mapValue: {
        fields: {}
      }
    };
    return forEach2(e.mapValue.fields, (e2, n2) => t2.mapValue.fields[e2] = __PRIVATE_deepClone(n2)), t2;
  }
  if (e.arrayValue) {
    const t2 = {
      arrayValue: {
        values: []
      }
    };
    for (let n2 = 0; n2 < (e.arrayValue.values || []).length; ++n2)
      t2.arrayValue.values[n2] = __PRIVATE_deepClone(e.arrayValue.values[n2]);
    return t2;
  }
  return Object.assign({}, e);
}
function __PRIVATE_isMaxValue(e) {
  return "__max__" === (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue;
}
var ObjectValue = class {
  constructor(e) {
    this.value = e;
  }
  static empty() {
    return new ObjectValue({
      mapValue: {}
    });
  }
  /**
   * Returns the value at the given path or null.
   *
   * @param path - the path to search
   * @returns The value at the path or null if the path is not set.
   */
  field(e) {
    if (e.isEmpty())
      return this.value;
    {
      let t2 = this.value;
      for (let n2 = 0; n2 < e.length - 1; ++n2)
        if (t2 = (t2.mapValue.fields || {})[e.get(n2)], !__PRIVATE_isMapValue(t2))
          return null;
      return t2 = (t2.mapValue.fields || {})[e.lastSegment()], t2 || null;
    }
  }
  /**
   * Sets the field to the provided value.
   *
   * @param path - The field path to set.
   * @param value - The value to set.
   */
  set(e, t2) {
    this.getFieldsMap(e.popLast())[e.lastSegment()] = __PRIVATE_deepClone(t2);
  }
  /**
   * Sets the provided fields to the provided values.
   *
   * @param data - A map of fields to values (or null for deletes).
   */
  setAll(e) {
    let t2 = FieldPath$1.emptyPath(), n2 = {}, r2 = [];
    e.forEach((e2, i2) => {
      if (!t2.isImmediateParentOf(i2)) {
        const e3 = this.getFieldsMap(t2);
        this.applyChanges(e3, n2, r2), n2 = {}, r2 = [], t2 = i2.popLast();
      }
      e2 ? n2[i2.lastSegment()] = __PRIVATE_deepClone(e2) : r2.push(i2.lastSegment());
    });
    const i = this.getFieldsMap(t2);
    this.applyChanges(i, n2, r2);
  }
  /**
   * Removes the field at the specified path. If there is no field at the
   * specified path, nothing is changed.
   *
   * @param path - The field path to remove.
   */
  delete(e) {
    const t2 = this.field(e.popLast());
    __PRIVATE_isMapValue(t2) && t2.mapValue.fields && delete t2.mapValue.fields[e.lastSegment()];
  }
  isEqual(e) {
    return __PRIVATE_valueEquals(this.value, e.value);
  }
  /**
   * Returns the map that contains the leaf element of `path`. If the parent
   * entry does not yet exist, or if it is not a map, a new map will be created.
   */
  getFieldsMap(e) {
    let t2 = this.value;
    t2.mapValue.fields || (t2.mapValue = {
      fields: {}
    });
    for (let n2 = 0; n2 < e.length; ++n2) {
      let r2 = t2.mapValue.fields[e.get(n2)];
      __PRIVATE_isMapValue(r2) && r2.mapValue.fields || (r2 = {
        mapValue: {
          fields: {}
        }
      }, t2.mapValue.fields[e.get(n2)] = r2), t2 = r2;
    }
    return t2.mapValue.fields;
  }
  /**
   * Modifies `fieldsMap` by adding, replacing or deleting the specified
   * entries.
   */
  applyChanges(e, t2, n2) {
    forEach2(t2, (t3, n3) => e[t3] = n3);
    for (const t3 of n2)
      delete e[t3];
  }
  clone() {
    return new ObjectValue(__PRIVATE_deepClone(this.value));
  }
};
var MutableDocument = class {
  constructor(e, t2, n2, r2, i, s2, o2) {
    this.key = e, this.documentType = t2, this.version = n2, this.readTime = r2, this.createTime = i, this.data = s2, this.documentState = o2;
  }
  /**
   * Creates a document with no known version or data, but which can serve as
   * base document for mutations.
   */
  static newInvalidDocument(e) {
    return new MutableDocument(
      e,
      0,
      /* version */
      SnapshotVersion.min(),
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      SnapshotVersion.min(),
      ObjectValue.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist with the given data at the
   * given version.
   */
  static newFoundDocument(e, t2, n2, r2) {
    return new MutableDocument(
      e,
      1,
      /* version */
      t2,
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      n2,
      r2,
      0
      /* DocumentState.SYNCED */
    );
  }
  /** Creates a new document that is known to not exist at the given version. */
  static newNoDocument(e, t2) {
    return new MutableDocument(
      e,
      2,
      /* version */
      t2,
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      SnapshotVersion.min(),
      ObjectValue.empty(),
      0
      /* DocumentState.SYNCED */
    );
  }
  /**
   * Creates a new document that is known to exist at the given version but
   * whose data is not known (e.g. a document that was updated without a known
   * base document).
   */
  static newUnknownDocument(e, t2) {
    return new MutableDocument(
      e,
      3,
      /* version */
      t2,
      /* readTime */
      SnapshotVersion.min(),
      /* createTime */
      SnapshotVersion.min(),
      ObjectValue.empty(),
      2
      /* DocumentState.HAS_COMMITTED_MUTATIONS */
    );
  }
  /**
   * Changes the document type to indicate that it exists and that its version
   * and data are known.
   */
  convertToFoundDocument(e, t2) {
    return !this.createTime.isEqual(SnapshotVersion.min()) || 2 !== this.documentType && 0 !== this.documentType || (this.createTime = e), this.version = e, this.documentType = 1, this.data = t2, this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it doesn't exist at the given
   * version.
   */
  convertToNoDocument(e) {
    return this.version = e, this.documentType = 2, this.data = ObjectValue.empty(), this.documentState = 0, this;
  }
  /**
   * Changes the document type to indicate that it exists at a given version but
   * that its data is not known (e.g. a document that was updated without a known
   * base document).
   */
  convertToUnknownDocument(e) {
    return this.version = e, this.documentType = 3, this.data = ObjectValue.empty(), this.documentState = 2, this;
  }
  setHasCommittedMutations() {
    return this.documentState = 2, this;
  }
  setHasLocalMutations() {
    return this.documentState = 1, this.version = SnapshotVersion.min(), this;
  }
  setReadTime(e) {
    return this.readTime = e, this;
  }
  get hasLocalMutations() {
    return 1 === this.documentState;
  }
  get hasCommittedMutations() {
    return 2 === this.documentState;
  }
  get hasPendingWrites() {
    return this.hasLocalMutations || this.hasCommittedMutations;
  }
  isValidDocument() {
    return 0 !== this.documentType;
  }
  isFoundDocument() {
    return 1 === this.documentType;
  }
  isNoDocument() {
    return 2 === this.documentType;
  }
  isUnknownDocument() {
    return 3 === this.documentType;
  }
  isEqual(e) {
    return e instanceof MutableDocument && this.key.isEqual(e.key) && this.version.isEqual(e.version) && this.documentType === e.documentType && this.documentState === e.documentState && this.data.isEqual(e.data);
  }
  mutableCopy() {
    return new MutableDocument(this.key, this.documentType, this.version, this.readTime, this.createTime, this.data.clone(), this.documentState);
  }
  toString() {
    return `Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`;
  }
};
var Bound = class {
  constructor(e, t2) {
    this.position = e, this.inclusive = t2;
  }
};
function __PRIVATE_boundCompareToDocument(e, t2, n2) {
  let r2 = 0;
  for (let i = 0; i < e.position.length; i++) {
    const s2 = t2[i], o2 = e.position[i];
    if (s2.field.isKeyField())
      r2 = DocumentKey.comparator(DocumentKey.fromName(o2.referenceValue), n2.key);
    else {
      r2 = __PRIVATE_valueCompare(o2, n2.data.field(s2.field));
    }
    if ("desc" === s2.dir && (r2 *= -1), 0 !== r2)
      break;
  }
  return r2;
}
function __PRIVATE_boundEquals(e, t2) {
  if (null === e)
    return null === t2;
  if (null === t2)
    return false;
  if (e.inclusive !== t2.inclusive || e.position.length !== t2.position.length)
    return false;
  for (let n2 = 0; n2 < e.position.length; n2++) {
    if (!__PRIVATE_valueEquals(e.position[n2], t2.position[n2]))
      return false;
  }
  return true;
}
var OrderBy = class {
  constructor(e, t2 = "asc") {
    this.field = e, this.dir = t2;
  }
};
function __PRIVATE_orderByEquals(e, t2) {
  return e.dir === t2.dir && e.field.isEqual(t2.field);
}
var Filter = class {
};
var FieldFilter = class extends Filter {
  constructor(e, t2, n2) {
    super(), this.field = e, this.op = t2, this.value = n2;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, t2, n2) {
    return e.isKeyField() ? "in" === t2 || "not-in" === t2 ? this.createKeyFieldInFilter(e, t2, n2) : new __PRIVATE_KeyFieldFilter(e, t2, n2) : "array-contains" === t2 ? new __PRIVATE_ArrayContainsFilter(e, n2) : "in" === t2 ? new __PRIVATE_InFilter(e, n2) : "not-in" === t2 ? new __PRIVATE_NotInFilter(e, n2) : "array-contains-any" === t2 ? new __PRIVATE_ArrayContainsAnyFilter(e, n2) : new FieldFilter(e, t2, n2);
  }
  static createKeyFieldInFilter(e, t2, n2) {
    return "in" === t2 ? new __PRIVATE_KeyFieldInFilter(e, n2) : new __PRIVATE_KeyFieldNotInFilter(e, n2);
  }
  matches(e) {
    const t2 = e.data.field(this.field);
    return "!=" === this.op ? null !== t2 && this.matchesComparison(__PRIVATE_valueCompare(t2, this.value)) : null !== t2 && __PRIVATE_typeOrder(this.value) === __PRIVATE_typeOrder(t2) && this.matchesComparison(__PRIVATE_valueCompare(t2, this.value));
  }
  matchesComparison(e) {
    switch (this.op) {
      case "<":
        return e < 0;
      case "<=":
        return e <= 0;
      case "==":
        return 0 === e;
      case "!=":
        return 0 !== e;
      case ">":
        return e > 0;
      case ">=":
        return e >= 0;
      default:
        return fail();
    }
  }
  isInequality() {
    return [
      "<",
      "<=",
      ">",
      ">=",
      "!=",
      "not-in"
      /* Operator.NOT_IN */
    ].indexOf(this.op) >= 0;
  }
  getFlattenedFilters() {
    return [this];
  }
  getFilters() {
    return [this];
  }
};
var CompositeFilter = class extends Filter {
  constructor(e, t2) {
    super(), this.filters = e, this.op = t2, this.ae = null;
  }
  /**
   * Creates a filter based on the provided arguments.
   */
  static create(e, t2) {
    return new CompositeFilter(e, t2);
  }
  matches(e) {
    return __PRIVATE_compositeFilterIsConjunction(this) ? void 0 === this.filters.find((t2) => !t2.matches(e)) : void 0 !== this.filters.find((t2) => t2.matches(e));
  }
  getFlattenedFilters() {
    return null !== this.ae || (this.ae = this.filters.reduce((e, t2) => e.concat(t2.getFlattenedFilters()), [])), this.ae;
  }
  // Returns a mutable copy of `this.filters`
  getFilters() {
    return Object.assign([], this.filters);
  }
};
function __PRIVATE_compositeFilterIsConjunction(e) {
  return "and" === e.op;
}
function __PRIVATE_compositeFilterIsFlatConjunction(e) {
  return __PRIVATE_compositeFilterIsFlat(e) && __PRIVATE_compositeFilterIsConjunction(e);
}
function __PRIVATE_compositeFilterIsFlat(e) {
  for (const t2 of e.filters)
    if (t2 instanceof CompositeFilter)
      return false;
  return true;
}
function __PRIVATE_canonifyFilter(e) {
  if (e instanceof FieldFilter)
    return e.field.canonicalString() + e.op.toString() + canonicalId(e.value);
  if (__PRIVATE_compositeFilterIsFlatConjunction(e))
    return e.filters.map((e2) => __PRIVATE_canonifyFilter(e2)).join(",");
  {
    const t2 = e.filters.map((e2) => __PRIVATE_canonifyFilter(e2)).join(",");
    return `${e.op}(${t2})`;
  }
}
function __PRIVATE_filterEquals(e, t2) {
  return e instanceof FieldFilter ? function __PRIVATE_fieldFilterEquals(e2, t3) {
    return t3 instanceof FieldFilter && e2.op === t3.op && e2.field.isEqual(t3.field) && __PRIVATE_valueEquals(e2.value, t3.value);
  }(e, t2) : e instanceof CompositeFilter ? function __PRIVATE_compositeFilterEquals(e2, t3) {
    if (t3 instanceof CompositeFilter && e2.op === t3.op && e2.filters.length === t3.filters.length) {
      return e2.filters.reduce((e3, n2, r2) => e3 && __PRIVATE_filterEquals(n2, t3.filters[r2]), true);
    }
    return false;
  }(e, t2) : void fail();
}
function __PRIVATE_stringifyFilter(e) {
  return e instanceof FieldFilter ? function __PRIVATE_stringifyFieldFilter(e2) {
    return `${e2.field.canonicalString()} ${e2.op} ${canonicalId(e2.value)}`;
  }(e) : e instanceof CompositeFilter ? function __PRIVATE_stringifyCompositeFilter(e2) {
    return e2.op.toString() + " {" + e2.getFilters().map(__PRIVATE_stringifyFilter).join(" ,") + "}";
  }(e) : "Filter";
}
var __PRIVATE_KeyFieldFilter = class extends FieldFilter {
  constructor(e, t2, n2) {
    super(e, t2, n2), this.key = DocumentKey.fromName(n2.referenceValue);
  }
  matches(e) {
    const t2 = DocumentKey.comparator(e.key, this.key);
    return this.matchesComparison(t2);
  }
};
var __PRIVATE_KeyFieldInFilter = class extends FieldFilter {
  constructor(e, t2) {
    super(e, "in", t2), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("in", t2);
  }
  matches(e) {
    return this.keys.some((t2) => t2.isEqual(e.key));
  }
};
var __PRIVATE_KeyFieldNotInFilter = class extends FieldFilter {
  constructor(e, t2) {
    super(e, "not-in", t2), this.keys = __PRIVATE_extractDocumentKeysFromArrayValue("not-in", t2);
  }
  matches(e) {
    return !this.keys.some((t2) => t2.isEqual(e.key));
  }
};
function __PRIVATE_extractDocumentKeysFromArrayValue(e, t2) {
  var n2;
  return ((null === (n2 = t2.arrayValue) || void 0 === n2 ? void 0 : n2.values) || []).map((e2) => DocumentKey.fromName(e2.referenceValue));
}
var __PRIVATE_ArrayContainsFilter = class extends FieldFilter {
  constructor(e, t2) {
    super(e, "array-contains", t2);
  }
  matches(e) {
    const t2 = e.data.field(this.field);
    return isArray2(t2) && __PRIVATE_arrayValueContains(t2.arrayValue, this.value);
  }
};
var __PRIVATE_InFilter = class extends FieldFilter {
  constructor(e, t2) {
    super(e, "in", t2);
  }
  matches(e) {
    const t2 = e.data.field(this.field);
    return null !== t2 && __PRIVATE_arrayValueContains(this.value.arrayValue, t2);
  }
};
var __PRIVATE_NotInFilter = class extends FieldFilter {
  constructor(e, t2) {
    super(e, "not-in", t2);
  }
  matches(e) {
    if (__PRIVATE_arrayValueContains(this.value.arrayValue, {
      nullValue: "NULL_VALUE"
    }))
      return false;
    const t2 = e.data.field(this.field);
    return null !== t2 && !__PRIVATE_arrayValueContains(this.value.arrayValue, t2);
  }
};
var __PRIVATE_ArrayContainsAnyFilter = class extends FieldFilter {
  constructor(e, t2) {
    super(e, "array-contains-any", t2);
  }
  matches(e) {
    const t2 = e.data.field(this.field);
    return !(!isArray2(t2) || !t2.arrayValue.values) && t2.arrayValue.values.some((e2) => __PRIVATE_arrayValueContains(this.value.arrayValue, e2));
  }
};
var __PRIVATE_TargetImpl = class {
  constructor(e, t2 = null, n2 = [], r2 = [], i = null, s2 = null, o2 = null) {
    this.path = e, this.collectionGroup = t2, this.orderBy = n2, this.filters = r2, this.limit = i, this.startAt = s2, this.endAt = o2, this.ue = null;
  }
};
function __PRIVATE_newTarget(e, t2 = null, n2 = [], r2 = [], i = null, s2 = null, o2 = null) {
  return new __PRIVATE_TargetImpl(e, t2, n2, r2, i, s2, o2);
}
function __PRIVATE_canonifyTarget(e) {
  const t2 = __PRIVATE_debugCast(e);
  if (null === t2.ue) {
    let e2 = t2.path.canonicalString();
    null !== t2.collectionGroup && (e2 += "|cg:" + t2.collectionGroup), e2 += "|f:", e2 += t2.filters.map((e3) => __PRIVATE_canonifyFilter(e3)).join(","), e2 += "|ob:", e2 += t2.orderBy.map((e3) => function __PRIVATE_canonifyOrderBy(e4) {
      return e4.field.canonicalString() + e4.dir;
    }(e3)).join(","), __PRIVATE_isNullOrUndefined(t2.limit) || (e2 += "|l:", e2 += t2.limit), t2.startAt && (e2 += "|lb:", e2 += t2.startAt.inclusive ? "b:" : "a:", e2 += t2.startAt.position.map((e3) => canonicalId(e3)).join(",")), t2.endAt && (e2 += "|ub:", e2 += t2.endAt.inclusive ? "a:" : "b:", e2 += t2.endAt.position.map((e3) => canonicalId(e3)).join(",")), t2.ue = e2;
  }
  return t2.ue;
}
function __PRIVATE_targetEquals(e, t2) {
  if (e.limit !== t2.limit)
    return false;
  if (e.orderBy.length !== t2.orderBy.length)
    return false;
  for (let n2 = 0; n2 < e.orderBy.length; n2++)
    if (!__PRIVATE_orderByEquals(e.orderBy[n2], t2.orderBy[n2]))
      return false;
  if (e.filters.length !== t2.filters.length)
    return false;
  for (let n2 = 0; n2 < e.filters.length; n2++)
    if (!__PRIVATE_filterEquals(e.filters[n2], t2.filters[n2]))
      return false;
  return e.collectionGroup === t2.collectionGroup && (!!e.path.isEqual(t2.path) && (!!__PRIVATE_boundEquals(e.startAt, t2.startAt) && __PRIVATE_boundEquals(e.endAt, t2.endAt)));
}
var __PRIVATE_QueryImpl = class {
  /**
   * Initializes a Query with a path and optional additional query constraints.
   * Path must currently be empty if this is a collection group query.
   */
  constructor(e, t2 = null, n2 = [], r2 = [], i = null, s2 = "F", o2 = null, _ = null) {
    this.path = e, this.collectionGroup = t2, this.explicitOrderBy = n2, this.filters = r2, this.limit = i, this.limitType = s2, this.startAt = o2, this.endAt = _, this.ce = null, // The corresponding `Target` of this `Query` instance, for use with
    // non-aggregate queries.
    this.le = null, // The corresponding `Target` of this `Query` instance, for use with
    // aggregate queries. Unlike targets for non-aggregate queries,
    // aggregate query targets do not contain normalized order-bys, they only
    // contain explicit order-bys.
    this.he = null, this.startAt, this.endAt;
  }
};
function __PRIVATE_newQuery(e, t2, n2, r2, i, s2, o2, _) {
  return new __PRIVATE_QueryImpl(e, t2, n2, r2, i, s2, o2, _);
}
function __PRIVATE_queryMatchesAllDocuments(e) {
  return 0 === e.filters.length && null === e.limit && null == e.startAt && null == e.endAt && (0 === e.explicitOrderBy.length || 1 === e.explicitOrderBy.length && e.explicitOrderBy[0].field.isKeyField());
}
function __PRIVATE_isCollectionGroupQuery(e) {
  return null !== e.collectionGroup;
}
function __PRIVATE_queryNormalizedOrderBy(e) {
  const t2 = __PRIVATE_debugCast(e);
  if (null === t2.ce) {
    t2.ce = [];
    const e2 = /* @__PURE__ */ new Set();
    for (const n3 of t2.explicitOrderBy)
      t2.ce.push(n3), e2.add(n3.field.canonicalString());
    const n2 = t2.explicitOrderBy.length > 0 ? t2.explicitOrderBy[t2.explicitOrderBy.length - 1].dir : "asc", r2 = function __PRIVATE_getInequalityFilterFields(e3) {
      let t3 = new SortedSet(FieldPath$1.comparator);
      return e3.filters.forEach((e4) => {
        e4.getFlattenedFilters().forEach((e5) => {
          e5.isInequality() && (t3 = t3.add(e5.field));
        });
      }), t3;
    }(t2);
    r2.forEach((r3) => {
      e2.has(r3.canonicalString()) || r3.isKeyField() || t2.ce.push(new OrderBy(r3, n2));
    }), // Add the document key field to the last if it is not explicitly ordered.
    e2.has(FieldPath$1.keyField().canonicalString()) || t2.ce.push(new OrderBy(FieldPath$1.keyField(), n2));
  }
  return t2.ce;
}
function __PRIVATE_queryToTarget(e) {
  const t2 = __PRIVATE_debugCast(e);
  return t2.le || (t2.le = __PRIVATE__queryToTarget(t2, __PRIVATE_queryNormalizedOrderBy(e))), t2.le;
}
function __PRIVATE__queryToTarget(e, t2) {
  if ("F" === e.limitType)
    return __PRIVATE_newTarget(e.path, e.collectionGroup, t2, e.filters, e.limit, e.startAt, e.endAt);
  {
    t2 = t2.map((e2) => {
      const t3 = "desc" === e2.dir ? "asc" : "desc";
      return new OrderBy(e2.field, t3);
    });
    const n2 = e.endAt ? new Bound(e.endAt.position, e.endAt.inclusive) : null, r2 = e.startAt ? new Bound(e.startAt.position, e.startAt.inclusive) : null;
    return __PRIVATE_newTarget(e.path, e.collectionGroup, t2, e.filters, e.limit, n2, r2);
  }
}
function __PRIVATE_queryWithLimit(e, t2, n2) {
  return new __PRIVATE_QueryImpl(e.path, e.collectionGroup, e.explicitOrderBy.slice(), e.filters.slice(), t2, n2, e.startAt, e.endAt);
}
function __PRIVATE_queryEquals(e, t2) {
  return __PRIVATE_targetEquals(__PRIVATE_queryToTarget(e), __PRIVATE_queryToTarget(t2)) && e.limitType === t2.limitType;
}
function __PRIVATE_canonifyQuery(e) {
  return `${__PRIVATE_canonifyTarget(__PRIVATE_queryToTarget(e))}|lt:${e.limitType}`;
}
function __PRIVATE_stringifyQuery(e) {
  return `Query(target=${function __PRIVATE_stringifyTarget(e2) {
    let t2 = e2.path.canonicalString();
    return null !== e2.collectionGroup && (t2 += " collectionGroup=" + e2.collectionGroup), e2.filters.length > 0 && (t2 += `, filters: [${e2.filters.map((e3) => __PRIVATE_stringifyFilter(e3)).join(", ")}]`), __PRIVATE_isNullOrUndefined(e2.limit) || (t2 += ", limit: " + e2.limit), e2.orderBy.length > 0 && (t2 += `, orderBy: [${e2.orderBy.map((e3) => function __PRIVATE_stringifyOrderBy(e4) {
      return `${e4.field.canonicalString()} (${e4.dir})`;
    }(e3)).join(", ")}]`), e2.startAt && (t2 += ", startAt: ", t2 += e2.startAt.inclusive ? "b:" : "a:", t2 += e2.startAt.position.map((e3) => canonicalId(e3)).join(",")), e2.endAt && (t2 += ", endAt: ", t2 += e2.endAt.inclusive ? "a:" : "b:", t2 += e2.endAt.position.map((e3) => canonicalId(e3)).join(",")), `Target(${t2})`;
  }(__PRIVATE_queryToTarget(e))}; limitType=${e.limitType})`;
}
function __PRIVATE_queryMatches(e, t2) {
  return t2.isFoundDocument() && function __PRIVATE_queryMatchesPathAndCollectionGroup(e2, t3) {
    const n2 = t3.key.path;
    return null !== e2.collectionGroup ? t3.key.hasCollectionId(e2.collectionGroup) && e2.path.isPrefixOf(n2) : DocumentKey.isDocumentKey(e2.path) ? e2.path.isEqual(n2) : e2.path.isImmediateParentOf(n2);
  }(e, t2) && function __PRIVATE_queryMatchesOrderBy(e2, t3) {
    for (const n2 of __PRIVATE_queryNormalizedOrderBy(e2))
      if (!n2.field.isKeyField() && null === t3.data.field(n2.field))
        return false;
    return true;
  }(e, t2) && function __PRIVATE_queryMatchesFilters(e2, t3) {
    for (const n2 of e2.filters)
      if (!n2.matches(t3))
        return false;
    return true;
  }(e, t2) && function __PRIVATE_queryMatchesBounds(e2, t3) {
    if (e2.startAt && !/**
    * Returns true if a document sorts before a bound using the provided sort
    * order.
    */
    function __PRIVATE_boundSortsBeforeDocument(e3, t4, n2) {
      const r2 = __PRIVATE_boundCompareToDocument(e3, t4, n2);
      return e3.inclusive ? r2 <= 0 : r2 < 0;
    }(e2.startAt, __PRIVATE_queryNormalizedOrderBy(e2), t3))
      return false;
    if (e2.endAt && !function __PRIVATE_boundSortsAfterDocument(e3, t4, n2) {
      const r2 = __PRIVATE_boundCompareToDocument(e3, t4, n2);
      return e3.inclusive ? r2 >= 0 : r2 > 0;
    }(e2.endAt, __PRIVATE_queryNormalizedOrderBy(e2), t3))
      return false;
    return true;
  }(e, t2);
}
function __PRIVATE_newQueryComparator(e) {
  return (t2, n2) => {
    let r2 = false;
    for (const i of __PRIVATE_queryNormalizedOrderBy(e)) {
      const e2 = __PRIVATE_compareDocs(i, t2, n2);
      if (0 !== e2)
        return e2;
      r2 = r2 || i.field.isKeyField();
    }
    return 0;
  };
}
function __PRIVATE_compareDocs(e, t2, n2) {
  const r2 = e.field.isKeyField() ? DocumentKey.comparator(t2.key, n2.key) : function __PRIVATE_compareDocumentsByField(e2, t3, n3) {
    const r3 = t3.data.field(e2), i = n3.data.field(e2);
    return null !== r3 && null !== i ? __PRIVATE_valueCompare(r3, i) : fail();
  }(e.field, t2, n2);
  switch (e.dir) {
    case "asc":
      return r2;
    case "desc":
      return -1 * r2;
    default:
      return fail();
  }
}
var ObjectMap = class {
  constructor(e, t2) {
    this.mapKeyFn = e, this.equalsFn = t2, /**
     * The inner map for a key/value pair. Due to the possibility of collisions we
     * keep a list of entries that we do a linear search through to find an actual
     * match. Note that collisions should be rare, so we still expect near
     * constant time lookups in practice.
     */
    this.inner = {}, /** The number of entries stored in the map */
    this.innerSize = 0;
  }
  /** Get a value for this key, or undefined if it does not exist. */
  get(e) {
    const t2 = this.mapKeyFn(e), n2 = this.inner[t2];
    if (void 0 !== n2) {
      for (const [t3, r2] of n2)
        if (this.equalsFn(t3, e))
          return r2;
    }
  }
  has(e) {
    return void 0 !== this.get(e);
  }
  /** Put this key and value in the map. */
  set(e, t2) {
    const n2 = this.mapKeyFn(e), r2 = this.inner[n2];
    if (void 0 === r2)
      return this.inner[n2] = [[e, t2]], void this.innerSize++;
    for (let n3 = 0; n3 < r2.length; n3++)
      if (this.equalsFn(r2[n3][0], e))
        return void (r2[n3] = [e, t2]);
    r2.push([e, t2]), this.innerSize++;
  }
  /**
   * Remove this key from the map. Returns a boolean if anything was deleted.
   */
  delete(e) {
    const t2 = this.mapKeyFn(e), n2 = this.inner[t2];
    if (void 0 === n2)
      return false;
    for (let r2 = 0; r2 < n2.length; r2++)
      if (this.equalsFn(n2[r2][0], e))
        return 1 === n2.length ? delete this.inner[t2] : n2.splice(r2, 1), this.innerSize--, true;
    return false;
  }
  forEach(e) {
    forEach2(this.inner, (t2, n2) => {
      for (const [t3, r2] of n2)
        e(t3, r2);
    });
  }
  isEmpty() {
    return isEmpty2(this.inner);
  }
  size() {
    return this.innerSize;
  }
};
var oe = new SortedMap(DocumentKey.comparator);
function __PRIVATE_mutableDocumentMap() {
  return oe;
}
var _e = new SortedMap(DocumentKey.comparator);
function documentMap(...e) {
  let t2 = _e;
  for (const n2 of e)
    t2 = t2.insert(n2.key, n2);
  return t2;
}
function __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e) {
  let t2 = _e;
  return e.forEach((e2, n2) => t2 = t2.insert(e2, n2.overlayedDocument)), t2;
}
function __PRIVATE_newOverlayMap() {
  return __PRIVATE_newDocumentKeyMap();
}
function __PRIVATE_newMutationMap() {
  return __PRIVATE_newDocumentKeyMap();
}
function __PRIVATE_newDocumentKeyMap() {
  return new ObjectMap((e) => e.toString(), (e, t2) => e.isEqual(t2));
}
var ae = new SortedMap(DocumentKey.comparator);
var ue = new SortedSet(DocumentKey.comparator);
function __PRIVATE_documentKeySet(...e) {
  let t2 = ue;
  for (const n2 of e)
    t2 = t2.add(n2);
  return t2;
}
var ce = new SortedSet(__PRIVATE_primitiveComparator);
function __PRIVATE_targetIdSet() {
  return ce;
}
function __PRIVATE_toDouble(e, t2) {
  if (e.useProto3Json) {
    if (isNaN(t2))
      return {
        doubleValue: "NaN"
      };
    if (t2 === 1 / 0)
      return {
        doubleValue: "Infinity"
      };
    if (t2 === -1 / 0)
      return {
        doubleValue: "-Infinity"
      };
  }
  return {
    doubleValue: __PRIVATE_isNegativeZero(t2) ? "-0" : t2
  };
}
function __PRIVATE_toInteger(e) {
  return {
    integerValue: "" + e
  };
}
var TransformOperation = class {
  constructor() {
    this._ = void 0;
  }
};
function __PRIVATE_applyTransformOperationToLocalView(e, t2, n2) {
  return e instanceof __PRIVATE_ServerTimestampTransform ? function serverTimestamp$1(e2, t3) {
    const n3 = {
      fields: {
        __type__: {
          stringValue: "server_timestamp"
        },
        __local_write_time__: {
          timestampValue: {
            seconds: e2.seconds,
            nanos: e2.nanoseconds
          }
        }
      }
    };
    return t3 && __PRIVATE_isServerTimestamp(t3) && (t3 = __PRIVATE_getPreviousValue(t3)), t3 && (n3.fields.__previous_value__ = t3), {
      mapValue: n3
    };
  }(n2, t2) : e instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e, t2) : e instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e, t2) : function __PRIVATE_applyNumericIncrementTransformOperationToLocalView(e2, t3) {
    const n3 = __PRIVATE_computeTransformOperationBaseValue(e2, t3), r2 = asNumber(n3) + asNumber(e2.Pe);
    return isInteger(n3) && isInteger(e2.Pe) ? __PRIVATE_toInteger(r2) : __PRIVATE_toDouble(e2.serializer, r2);
  }(e, t2);
}
function __PRIVATE_applyTransformOperationToRemoteDocument(e, t2, n2) {
  return e instanceof __PRIVATE_ArrayUnionTransformOperation ? __PRIVATE_applyArrayUnionTransformOperation(e, t2) : e instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_applyArrayRemoveTransformOperation(e, t2) : n2;
}
function __PRIVATE_computeTransformOperationBaseValue(e, t2) {
  return e instanceof __PRIVATE_NumericIncrementTransformOperation ? (
    /** Returns true if `value` is either an IntegerValue or a DoubleValue. */
    function __PRIVATE_isNumber(e2) {
      return isInteger(e2) || function __PRIVATE_isDouble(e3) {
        return !!e3 && "doubleValue" in e3;
      }(e2);
    }(t2) ? t2 : {
      integerValue: 0
    }
  ) : null;
}
var __PRIVATE_ServerTimestampTransform = class extends TransformOperation {
};
var __PRIVATE_ArrayUnionTransformOperation = class extends TransformOperation {
  constructor(e) {
    super(), this.elements = e;
  }
};
function __PRIVATE_applyArrayUnionTransformOperation(e, t2) {
  const n2 = __PRIVATE_coercedFieldValuesArray(t2);
  for (const t3 of e.elements)
    n2.some((e2) => __PRIVATE_valueEquals(e2, t3)) || n2.push(t3);
  return {
    arrayValue: {
      values: n2
    }
  };
}
var __PRIVATE_ArrayRemoveTransformOperation = class extends TransformOperation {
  constructor(e) {
    super(), this.elements = e;
  }
};
function __PRIVATE_applyArrayRemoveTransformOperation(e, t2) {
  let n2 = __PRIVATE_coercedFieldValuesArray(t2);
  for (const t3 of e.elements)
    n2 = n2.filter((e2) => !__PRIVATE_valueEquals(e2, t3));
  return {
    arrayValue: {
      values: n2
    }
  };
}
var __PRIVATE_NumericIncrementTransformOperation = class extends TransformOperation {
  constructor(e, t2) {
    super(), this.serializer = e, this.Pe = t2;
  }
};
function asNumber(e) {
  return __PRIVATE_normalizeNumber(e.integerValue || e.doubleValue);
}
function __PRIVATE_coercedFieldValuesArray(e) {
  return isArray2(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
}
function __PRIVATE_fieldTransformEquals(e, t2) {
  return e.field.isEqual(t2.field) && function __PRIVATE_transformOperationEquals(e2, t3) {
    return e2 instanceof __PRIVATE_ArrayUnionTransformOperation && t3 instanceof __PRIVATE_ArrayUnionTransformOperation || e2 instanceof __PRIVATE_ArrayRemoveTransformOperation && t3 instanceof __PRIVATE_ArrayRemoveTransformOperation ? __PRIVATE_arrayEquals(e2.elements, t3.elements, __PRIVATE_valueEquals) : e2 instanceof __PRIVATE_NumericIncrementTransformOperation && t3 instanceof __PRIVATE_NumericIncrementTransformOperation ? __PRIVATE_valueEquals(e2.Pe, t3.Pe) : e2 instanceof __PRIVATE_ServerTimestampTransform && t3 instanceof __PRIVATE_ServerTimestampTransform;
  }(e.transform, t2.transform);
}
var Precondition = class {
  constructor(e, t2) {
    this.updateTime = e, this.exists = t2;
  }
  /** Creates a new empty Precondition. */
  static none() {
    return new Precondition();
  }
  /** Creates a new Precondition with an exists flag. */
  static exists(e) {
    return new Precondition(void 0, e);
  }
  /** Creates a new Precondition based on a version a document exists at. */
  static updateTime(e) {
    return new Precondition(e);
  }
  /** Returns whether this Precondition is empty. */
  get isNone() {
    return void 0 === this.updateTime && void 0 === this.exists;
  }
  isEqual(e) {
    return this.exists === e.exists && (this.updateTime ? !!e.updateTime && this.updateTime.isEqual(e.updateTime) : !e.updateTime);
  }
};
function __PRIVATE_preconditionIsValidForDocument(e, t2) {
  return void 0 !== e.updateTime ? t2.isFoundDocument() && t2.version.isEqual(e.updateTime) : void 0 === e.exists || e.exists === t2.isFoundDocument();
}
var Mutation = class {
};
function __PRIVATE_calculateOverlayMutation(e, t2) {
  if (!e.hasLocalMutations || t2 && 0 === t2.fields.length)
    return null;
  if (null === t2)
    return e.isNoDocument() ? new __PRIVATE_DeleteMutation(e.key, Precondition.none()) : new __PRIVATE_SetMutation(e.key, e.data, Precondition.none());
  {
    const n2 = e.data, r2 = ObjectValue.empty();
    let i = new SortedSet(FieldPath$1.comparator);
    for (let e2 of t2.fields)
      if (!i.has(e2)) {
        let t3 = n2.field(e2);
        null === t3 && e2.length > 1 && (e2 = e2.popLast(), t3 = n2.field(e2)), null === t3 ? r2.delete(e2) : r2.set(e2, t3), i = i.add(e2);
      }
    return new __PRIVATE_PatchMutation(e.key, r2, new FieldMask(i.toArray()), Precondition.none());
  }
}
function __PRIVATE_mutationApplyToRemoteDocument(e, t2, n2) {
  e instanceof __PRIVATE_SetMutation ? function __PRIVATE_setMutationApplyToRemoteDocument(e2, t3, n3) {
    const r2 = e2.value.clone(), i = __PRIVATE_serverTransformResults(e2.fieldTransforms, t3, n3.transformResults);
    r2.setAll(i), t3.convertToFoundDocument(n3.version, r2).setHasCommittedMutations();
  }(e, t2, n2) : e instanceof __PRIVATE_PatchMutation ? function __PRIVATE_patchMutationApplyToRemoteDocument(e2, t3, n3) {
    if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t3))
      return void t3.convertToUnknownDocument(n3.version);
    const r2 = __PRIVATE_serverTransformResults(e2.fieldTransforms, t3, n3.transformResults), i = t3.data;
    i.setAll(__PRIVATE_getPatch(e2)), i.setAll(r2), t3.convertToFoundDocument(n3.version, i).setHasCommittedMutations();
  }(e, t2, n2) : function __PRIVATE_deleteMutationApplyToRemoteDocument(e2, t3, n3) {
    t3.convertToNoDocument(n3.version).setHasCommittedMutations();
  }(0, t2, n2);
}
function __PRIVATE_mutationApplyToLocalView(e, t2, n2, r2) {
  return e instanceof __PRIVATE_SetMutation ? function __PRIVATE_setMutationApplyToLocalView(e2, t3, n3, r3) {
    if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t3))
      return n3;
    const i = e2.value.clone(), s2 = __PRIVATE_localTransformResults(e2.fieldTransforms, r3, t3);
    return i.setAll(s2), t3.convertToFoundDocument(t3.version, i).setHasLocalMutations(), null;
  }(e, t2, n2, r2) : e instanceof __PRIVATE_PatchMutation ? function __PRIVATE_patchMutationApplyToLocalView(e2, t3, n3, r3) {
    if (!__PRIVATE_preconditionIsValidForDocument(e2.precondition, t3))
      return n3;
    const i = __PRIVATE_localTransformResults(e2.fieldTransforms, r3, t3), s2 = t3.data;
    if (s2.setAll(__PRIVATE_getPatch(e2)), s2.setAll(i), t3.convertToFoundDocument(t3.version, s2).setHasLocalMutations(), null === n3)
      return null;
    return n3.unionWith(e2.fieldMask.fields).unionWith(e2.fieldTransforms.map((e3) => e3.field));
  }(e, t2, n2, r2) : function __PRIVATE_deleteMutationApplyToLocalView(e2, t3, n3) {
    if (__PRIVATE_preconditionIsValidForDocument(e2.precondition, t3))
      return t3.convertToNoDocument(t3.version).setHasLocalMutations(), null;
    return n3;
  }(e, t2, n2);
}
function __PRIVATE_mutationEquals(e, t2) {
  return e.type === t2.type && (!!e.key.isEqual(t2.key) && (!!e.precondition.isEqual(t2.precondition) && (!!function __PRIVATE_fieldTransformsAreEqual(e2, t3) {
    return void 0 === e2 && void 0 === t3 || !(!e2 || !t3) && __PRIVATE_arrayEquals(e2, t3, (e3, t4) => __PRIVATE_fieldTransformEquals(e3, t4));
  }(e.fieldTransforms, t2.fieldTransforms) && (0 === e.type ? e.value.isEqual(t2.value) : 1 !== e.type || e.data.isEqual(t2.data) && e.fieldMask.isEqual(t2.fieldMask)))));
}
var __PRIVATE_SetMutation = class extends Mutation {
  constructor(e, t2, n2, r2 = []) {
    super(), this.key = e, this.value = t2, this.precondition = n2, this.fieldTransforms = r2, this.type = 0;
  }
  getFieldMask() {
    return null;
  }
};
var __PRIVATE_PatchMutation = class extends Mutation {
  constructor(e, t2, n2, r2, i = []) {
    super(), this.key = e, this.data = t2, this.fieldMask = n2, this.precondition = r2, this.fieldTransforms = i, this.type = 1;
  }
  getFieldMask() {
    return this.fieldMask;
  }
};
function __PRIVATE_getPatch(e) {
  const t2 = /* @__PURE__ */ new Map();
  return e.fieldMask.fields.forEach((n2) => {
    if (!n2.isEmpty()) {
      const r2 = e.data.field(n2);
      t2.set(n2, r2);
    }
  }), t2;
}
function __PRIVATE_serverTransformResults(e, t2, n2) {
  const r2 = /* @__PURE__ */ new Map();
  __PRIVATE_hardAssert(e.length === n2.length);
  for (let i = 0; i < n2.length; i++) {
    const s2 = e[i], o2 = s2.transform, _ = t2.data.field(s2.field);
    r2.set(s2.field, __PRIVATE_applyTransformOperationToRemoteDocument(o2, _, n2[i]));
  }
  return r2;
}
function __PRIVATE_localTransformResults(e, t2, n2) {
  const r2 = /* @__PURE__ */ new Map();
  for (const i of e) {
    const e2 = i.transform, s2 = n2.data.field(i.field);
    r2.set(i.field, __PRIVATE_applyTransformOperationToLocalView(e2, s2, t2));
  }
  return r2;
}
var __PRIVATE_DeleteMutation = class extends Mutation {
  constructor(e, t2) {
    super(), this.key = e, this.precondition = t2, this.type = 2, this.fieldTransforms = [];
  }
  getFieldMask() {
    return null;
  }
};
var MutationBatch = class {
  /**
   * @param batchId - The unique ID of this mutation batch.
   * @param localWriteTime - The original write time of this mutation.
   * @param baseMutations - Mutations that are used to populate the base
   * values when this mutation is applied locally. This can be used to locally
   * overwrite values that are persisted in the remote document cache. Base
   * mutations are never sent to the backend.
   * @param mutations - The user-provided mutations in this mutation batch.
   * User-provided mutations are applied both locally and remotely on the
   * backend.
   */
  constructor(e, t2, n2, r2) {
    this.batchId = e, this.localWriteTime = t2, this.baseMutations = n2, this.mutations = r2;
  }
  /**
   * Applies all the mutations in this MutationBatch to the specified document
   * to compute the state of the remote document
   *
   * @param document - The document to apply mutations to.
   * @param batchResult - The result of applying the MutationBatch to the
   * backend.
   */
  applyToRemoteDocument(e, t2) {
    const n2 = t2.mutationResults;
    for (let t3 = 0; t3 < this.mutations.length; t3++) {
      const r2 = this.mutations[t3];
      if (r2.key.isEqual(e.key)) {
        __PRIVATE_mutationApplyToRemoteDocument(r2, e, n2[t3]);
      }
    }
  }
  /**
   * Computes the local view of a document given all the mutations in this
   * batch.
   *
   * @param document - The document to apply mutations to.
   * @param mutatedFields - Fields that have been updated before applying this mutation batch.
   * @returns A `FieldMask` representing all the fields that are mutated.
   */
  applyToLocalView(e, t2) {
    for (const n2 of this.baseMutations)
      n2.key.isEqual(e.key) && (t2 = __PRIVATE_mutationApplyToLocalView(n2, e, t2, this.localWriteTime));
    for (const n2 of this.mutations)
      n2.key.isEqual(e.key) && (t2 = __PRIVATE_mutationApplyToLocalView(n2, e, t2, this.localWriteTime));
    return t2;
  }
  /**
   * Computes the local view for all provided documents given the mutations in
   * this batch. Returns a `DocumentKey` to `Mutation` map which can be used to
   * replace all the mutation applications.
   */
  applyToLocalDocumentSet(e, t2) {
    const n2 = __PRIVATE_newMutationMap();
    return this.mutations.forEach((r2) => {
      const i = e.get(r2.key), s2 = i.overlayedDocument;
      let o2 = this.applyToLocalView(s2, i.mutatedFields);
      o2 = t2.has(r2.key) ? null : o2;
      const _ = __PRIVATE_calculateOverlayMutation(s2, o2);
      null !== _ && n2.set(r2.key, _), s2.isValidDocument() || s2.convertToNoDocument(SnapshotVersion.min());
    }), n2;
  }
  keys() {
    return this.mutations.reduce((e, t2) => e.add(t2.key), __PRIVATE_documentKeySet());
  }
  isEqual(e) {
    return this.batchId === e.batchId && __PRIVATE_arrayEquals(this.mutations, e.mutations, (e2, t2) => __PRIVATE_mutationEquals(e2, t2)) && __PRIVATE_arrayEquals(this.baseMutations, e.baseMutations, (e2, t2) => __PRIVATE_mutationEquals(e2, t2));
  }
};
var Overlay = class {
  constructor(e, t2) {
    this.largestBatchId = e, this.mutation = t2;
  }
  getKey() {
    return this.mutation.key;
  }
  isEqual(e) {
    return null !== e && this.mutation === e.mutation;
  }
  toString() {
    return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
  }
};
var le;
var he;
function __PRIVATE_mapCodeFromRpcCode(e) {
  if (void 0 === e)
    return __PRIVATE_logError("GRPC error has no .code"), D.UNKNOWN;
  switch (e) {
    case le.OK:
      return D.OK;
    case le.CANCELLED:
      return D.CANCELLED;
    case le.UNKNOWN:
      return D.UNKNOWN;
    case le.DEADLINE_EXCEEDED:
      return D.DEADLINE_EXCEEDED;
    case le.RESOURCE_EXHAUSTED:
      return D.RESOURCE_EXHAUSTED;
    case le.INTERNAL:
      return D.INTERNAL;
    case le.UNAVAILABLE:
      return D.UNAVAILABLE;
    case le.UNAUTHENTICATED:
      return D.UNAUTHENTICATED;
    case le.INVALID_ARGUMENT:
      return D.INVALID_ARGUMENT;
    case le.NOT_FOUND:
      return D.NOT_FOUND;
    case le.ALREADY_EXISTS:
      return D.ALREADY_EXISTS;
    case le.PERMISSION_DENIED:
      return D.PERMISSION_DENIED;
    case le.FAILED_PRECONDITION:
      return D.FAILED_PRECONDITION;
    case le.ABORTED:
      return D.ABORTED;
    case le.OUT_OF_RANGE:
      return D.OUT_OF_RANGE;
    case le.UNIMPLEMENTED:
      return D.UNIMPLEMENTED;
    case le.DATA_LOSS:
      return D.DATA_LOSS;
    default:
      return fail();
  }
}
(he = le || (le = {}))[he.OK = 0] = "OK", he[he.CANCELLED = 1] = "CANCELLED", he[he.UNKNOWN = 2] = "UNKNOWN", he[he.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", he[he.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", he[he.NOT_FOUND = 5] = "NOT_FOUND", he[he.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", he[he.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", he[he.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", he[he.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", he[he.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", he[he.ABORTED = 10] = "ABORTED", he[he.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", he[he.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", he[he.INTERNAL = 13] = "INTERNAL", he[he.UNAVAILABLE = 14] = "UNAVAILABLE", he[he.DATA_LOSS = 15] = "DATA_LOSS";
var Ie = new Integer([4294967295, 4294967295], 0);
var Te = (() => {
  const e = {
    asc: "ASCENDING",
    desc: "DESCENDING"
  };
  return e;
})();
var Ee = (() => {
  const e = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
  };
  return e;
})();
var de = (() => {
  const e = {
    and: "AND",
    or: "OR"
  };
  return e;
})();
var JsonProtoSerializer = class {
  constructor(e, t2) {
    this.databaseId = e, this.useProto3Json = t2;
  }
};
function __PRIVATE_fromVersion(e) {
  return __PRIVATE_hardAssert(!!e), SnapshotVersion.fromTimestamp(function fromTimestamp(e2) {
    const t2 = __PRIVATE_normalizeTimestamp(e2);
    return new Timestamp(t2.seconds, t2.nanos);
  }(e));
}
function __PRIVATE_toResourcePath(e, t2) {
  const n2 = function __PRIVATE_fullyQualifiedPrefixPath(e2) {
    return new ResourcePath(["projects", e2.projectId, "databases", e2.database]);
  }(e).child("documents");
  return void 0 === t2 ? n2 : n2.child(t2);
}
function __PRIVATE_fromResourceName(e) {
  const t2 = ResourcePath.fromString(e);
  return __PRIVATE_hardAssert(__PRIVATE_isValidResourceName(t2)), t2;
}
function __PRIVATE_fromQueryPath(e) {
  const t2 = __PRIVATE_fromResourceName(e);
  return 4 === t2.length ? ResourcePath.emptyPath() : __PRIVATE_extractLocalPathFromResourceName(t2);
}
function __PRIVATE_extractLocalPathFromResourceName(e) {
  return __PRIVATE_hardAssert(e.length > 4 && "documents" === e.get(4)), e.popFirst(5);
}
function __PRIVATE_convertQueryTargetToQuery(e) {
  let t2 = __PRIVATE_fromQueryPath(e.parent);
  const n2 = e.structuredQuery, r2 = n2.from ? n2.from.length : 0;
  let i = null;
  if (r2 > 0) {
    __PRIVATE_hardAssert(1 === r2);
    const e2 = n2.from[0];
    e2.allDescendants ? i = e2.collectionId : t2 = t2.child(e2.collectionId);
  }
  let s2 = [];
  n2.where && (s2 = function __PRIVATE_fromFilters(e2) {
    const t3 = __PRIVATE_fromFilter(e2);
    if (t3 instanceof CompositeFilter && __PRIVATE_compositeFilterIsFlatConjunction(t3))
      return t3.getFilters();
    return [t3];
  }(n2.where));
  let o2 = [];
  n2.orderBy && (o2 = function __PRIVATE_fromOrder(e2) {
    return e2.map((e3) => function __PRIVATE_fromPropertyOrder(e4) {
      return new OrderBy(
        __PRIVATE_fromFieldPathReference(e4.field),
        // visible for testing
        function __PRIVATE_fromDirection(e5) {
          switch (e5) {
            case "ASCENDING":
              return "asc";
            case "DESCENDING":
              return "desc";
            default:
              return;
          }
        }(e4.direction)
      );
    }(e3));
  }(n2.orderBy));
  let _ = null;
  n2.limit && (_ = function __PRIVATE_fromInt32Proto(e2) {
    let t3;
    return t3 = "object" == typeof e2 ? e2.value : e2, __PRIVATE_isNullOrUndefined(t3) ? null : t3;
  }(n2.limit));
  let a2 = null;
  n2.startAt && (a2 = function __PRIVATE_fromStartAtCursor(e2) {
    const t3 = !!e2.before, n3 = e2.values || [];
    return new Bound(n3, t3);
  }(n2.startAt));
  let u2 = null;
  return n2.endAt && (u2 = function __PRIVATE_fromEndAtCursor(e2) {
    const t3 = !e2.before, n3 = e2.values || [];
    return new Bound(n3, t3);
  }(n2.endAt)), __PRIVATE_newQuery(t2, i, o2, s2, _, "F", a2, u2);
}
function __PRIVATE_fromFilter(e) {
  return void 0 !== e.unaryFilter ? function __PRIVATE_fromUnaryFilter(e2) {
    switch (e2.unaryFilter.op) {
      case "IS_NAN":
        const t2 = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(t2, "==", {
          doubleValue: NaN
        });
      case "IS_NULL":
        const n2 = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(n2, "==", {
          nullValue: "NULL_VALUE"
        });
      case "IS_NOT_NAN":
        const r2 = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(r2, "!=", {
          doubleValue: NaN
        });
      case "IS_NOT_NULL":
        const i = __PRIVATE_fromFieldPathReference(e2.unaryFilter.field);
        return FieldFilter.create(i, "!=", {
          nullValue: "NULL_VALUE"
        });
      default:
        return fail();
    }
  }(e) : void 0 !== e.fieldFilter ? function __PRIVATE_fromFieldFilter(e2) {
    return FieldFilter.create(__PRIVATE_fromFieldPathReference(e2.fieldFilter.field), function __PRIVATE_fromOperatorName(e3) {
      switch (e3) {
        case "EQUAL":
          return "==";
        case "NOT_EQUAL":
          return "!=";
        case "GREATER_THAN":
          return ">";
        case "GREATER_THAN_OR_EQUAL":
          return ">=";
        case "LESS_THAN":
          return "<";
        case "LESS_THAN_OR_EQUAL":
          return "<=";
        case "ARRAY_CONTAINS":
          return "array-contains";
        case "IN":
          return "in";
        case "NOT_IN":
          return "not-in";
        case "ARRAY_CONTAINS_ANY":
          return "array-contains-any";
        default:
          return fail();
      }
    }(e2.fieldFilter.op), e2.fieldFilter.value);
  }(e) : void 0 !== e.compositeFilter ? function __PRIVATE_fromCompositeFilter(e2) {
    return CompositeFilter.create(e2.compositeFilter.filters.map((e3) => __PRIVATE_fromFilter(e3)), function __PRIVATE_fromCompositeOperatorName(e3) {
      switch (e3) {
        case "AND":
          return "and";
        case "OR":
          return "or";
        default:
          return fail();
      }
    }(e2.compositeFilter.op));
  }(e) : fail();
}
function __PRIVATE_fromFieldPathReference(e) {
  return FieldPath$1.fromServerFormat(e.fieldPath);
}
function __PRIVATE_isValidResourceName(e) {
  return e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2);
}
var __PRIVATE_LocalSerializer = class {
  constructor(e) {
    this.ct = e;
  }
};
function __PRIVATE_fromBundledQuery(e) {
  const t2 = __PRIVATE_convertQueryTargetToQuery({
    parent: e.parent,
    structuredQuery: e.structuredQuery
  });
  return "LAST" === e.limitType ? __PRIVATE_queryWithLimit(
    t2,
    t2.limit,
    "L"
    /* LimitType.Last */
  ) : t2;
}
var __PRIVATE_FirestoreIndexValueWriter = class {
  constructor() {
  }
  // The write methods below short-circuit writing terminators for values
  // containing a (terminating) truncated value.
  // As an example, consider the resulting encoding for:
  // ["bar", [2, "foo"]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TERM, TERM, TERM)
  // ["bar", [2, truncated("foo")]] -> (STRING, "bar", TERM, ARRAY, NUMBER, 2, STRING, "foo", TRUNC)
  // ["bar", truncated(["foo"])] -> (STRING, "bar", TERM, ARRAY. STRING, "foo", TERM, TRUNC)
  /** Writes an index value.  */
  It(e, t2) {
    this.Tt(e, t2), // Write separator to split index values
    // (see go/firestore-storage-format#encodings).
    t2.Et();
  }
  Tt(e, t2) {
    if ("nullValue" in e)
      this.dt(t2, 5);
    else if ("booleanValue" in e)
      this.dt(t2, 10), t2.At(e.booleanValue ? 1 : 0);
    else if ("integerValue" in e)
      this.dt(t2, 15), t2.At(__PRIVATE_normalizeNumber(e.integerValue));
    else if ("doubleValue" in e) {
      const n2 = __PRIVATE_normalizeNumber(e.doubleValue);
      isNaN(n2) ? this.dt(t2, 13) : (this.dt(t2, 15), __PRIVATE_isNegativeZero(n2) ? (
        // -0.0, 0 and 0.0 are all considered the same
        t2.At(0)
      ) : t2.At(n2));
    } else if ("timestampValue" in e) {
      let n2 = e.timestampValue;
      this.dt(t2, 20), "string" == typeof n2 && (n2 = __PRIVATE_normalizeTimestamp(n2)), t2.Rt(`${n2.seconds || ""}`), t2.At(n2.nanos || 0);
    } else if ("stringValue" in e)
      this.Vt(e.stringValue, t2), this.ft(t2);
    else if ("bytesValue" in e)
      this.dt(t2, 30), t2.gt(__PRIVATE_normalizeByteString(e.bytesValue)), this.ft(t2);
    else if ("referenceValue" in e)
      this.yt(e.referenceValue, t2);
    else if ("geoPointValue" in e) {
      const n2 = e.geoPointValue;
      this.dt(t2, 45), t2.At(n2.latitude || 0), t2.At(n2.longitude || 0);
    } else
      "mapValue" in e ? __PRIVATE_isMaxValue(e) ? this.dt(t2, Number.MAX_SAFE_INTEGER) : __PRIVATE_isVectorValue(e) ? this.wt(e.mapValue, t2) : (this.St(e.mapValue, t2), this.ft(t2)) : "arrayValue" in e ? (this.bt(e.arrayValue, t2), this.ft(t2)) : fail();
  }
  Vt(e, t2) {
    this.dt(t2, 25), this.Dt(e, t2);
  }
  Dt(e, t2) {
    t2.Rt(e);
  }
  St(e, t2) {
    const n2 = e.fields || {};
    this.dt(t2, 55);
    for (const e2 of Object.keys(n2))
      this.Vt(e2, t2), this.Tt(n2[e2], t2);
  }
  wt(e, t2) {
    var n2, r2;
    const i = e.fields || {};
    this.dt(t2, 53);
    const s2 = "value", o2 = (null === (r2 = null === (n2 = i[s2].arrayValue) || void 0 === n2 ? void 0 : n2.values) || void 0 === r2 ? void 0 : r2.length) || 0;
    this.dt(t2, 15), t2.At(__PRIVATE_normalizeNumber(o2)), // Vectors then sort by position value
    this.Vt(s2, t2), this.Tt(i[s2], t2);
  }
  bt(e, t2) {
    const n2 = e.values || [];
    this.dt(t2, 50);
    for (const e2 of n2)
      this.Tt(e2, t2);
  }
  yt(e, t2) {
    this.dt(t2, 37);
    DocumentKey.fromName(e).path.forEach((e2) => {
      this.dt(t2, 60), this.Dt(e2, t2);
    });
  }
  dt(e, t2) {
    e.At(t2);
  }
  ft(e) {
    e.At(2);
  }
};
__PRIVATE_FirestoreIndexValueWriter.vt = new __PRIVATE_FirestoreIndexValueWriter();
var __PRIVATE_MemoryIndexManager = class {
  constructor() {
    this.un = new __PRIVATE_MemoryCollectionParentIndex();
  }
  addToCollectionParentIndex(e, t2) {
    return this.un.add(t2), PersistencePromise.resolve();
  }
  getCollectionParents(e, t2) {
    return PersistencePromise.resolve(this.un.getEntries(t2));
  }
  addFieldIndex(e, t2) {
    return PersistencePromise.resolve();
  }
  deleteFieldIndex(e, t2) {
    return PersistencePromise.resolve();
  }
  deleteAllFieldIndexes(e) {
    return PersistencePromise.resolve();
  }
  createTargetIndexes(e, t2) {
    return PersistencePromise.resolve();
  }
  getDocumentsMatchingTarget(e, t2) {
    return PersistencePromise.resolve(null);
  }
  getIndexType(e, t2) {
    return PersistencePromise.resolve(
      0
      /* IndexType.NONE */
    );
  }
  getFieldIndexes(e, t2) {
    return PersistencePromise.resolve([]);
  }
  getNextCollectionGroupToUpdate(e) {
    return PersistencePromise.resolve(null);
  }
  getMinOffset(e, t2) {
    return PersistencePromise.resolve(IndexOffset.min());
  }
  getMinOffsetFromCollectionGroup(e, t2) {
    return PersistencePromise.resolve(IndexOffset.min());
  }
  updateCollectionGroup(e, t2, n2) {
    return PersistencePromise.resolve();
  }
  updateIndexEntries(e, t2) {
    return PersistencePromise.resolve();
  }
};
var __PRIVATE_MemoryCollectionParentIndex = class {
  constructor() {
    this.index = {};
  }
  // Returns false if the entry already existed.
  add(e) {
    const t2 = e.lastSegment(), n2 = e.popLast(), r2 = this.index[t2] || new SortedSet(ResourcePath.comparator), i = !r2.has(n2);
    return this.index[t2] = r2.add(n2), i;
  }
  has(e) {
    const t2 = e.lastSegment(), n2 = e.popLast(), r2 = this.index[t2];
    return r2 && r2.has(n2);
  }
  getEntries(e) {
    return (this.index[e] || new SortedSet(ResourcePath.comparator)).toArray();
  }
};
var Ae = new Uint8Array(0);
var LruParams = class {
  constructor(e, t2, n2) {
    this.cacheSizeCollectionThreshold = e, this.percentileToCollect = t2, this.maximumSequenceNumbersToCollect = n2;
  }
  static withCacheSize(e) {
    return new LruParams(e, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT);
  }
};
LruParams.DEFAULT_COLLECTION_PERCENTILE = 10, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3, LruParams.DEFAULT = new LruParams(41943040, LruParams.DEFAULT_COLLECTION_PERCENTILE, LruParams.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT), LruParams.DISABLED = new LruParams(-1, 0, 0);
var __PRIVATE_TargetIdGenerator = class {
  constructor(e) {
    this.Ln = e;
  }
  next() {
    return this.Ln += 2, this.Ln;
  }
  static Bn() {
    return new __PRIVATE_TargetIdGenerator(0);
  }
  static kn() {
    return new __PRIVATE_TargetIdGenerator(-1);
  }
};
var RemoteDocumentChangeBuffer = class {
  constructor() {
    this.changes = new ObjectMap((e) => e.toString(), (e, t2) => e.isEqual(t2)), this.changesApplied = false;
  }
  /**
   * Buffers a `RemoteDocumentCache.addEntry()` call.
   *
   * You can only modify documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  addEntry(e) {
    this.assertNotApplied(), this.changes.set(e.key, e);
  }
  /**
   * Buffers a `RemoteDocumentCache.removeEntry()` call.
   *
   * You can only remove documents that have already been retrieved via
   * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
   */
  removeEntry(e, t2) {
    this.assertNotApplied(), this.changes.set(e, MutableDocument.newInvalidDocument(e).setReadTime(t2));
  }
  /**
   * Looks up an entry in the cache. The buffered changes will first be checked,
   * and if no buffered change applies, this will forward to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKey - The key of the entry to look up.
   * @returns The cached document or an invalid document if we have nothing
   * cached.
   */
  getEntry(e, t2) {
    this.assertNotApplied();
    const n2 = this.changes.get(t2);
    return void 0 !== n2 ? PersistencePromise.resolve(n2) : this.getFromCache(e, t2);
  }
  /**
   * Looks up several entries in the cache, forwarding to
   * `RemoteDocumentCache.getEntry()`.
   *
   * @param transaction - The transaction in which to perform any persistence
   *     operations.
   * @param documentKeys - The keys of the entries to look up.
   * @returns A map of cached documents, indexed by key. If an entry cannot be
   *     found, the corresponding key will be mapped to an invalid document.
   */
  getEntries(e, t2) {
    return this.getAllFromCache(e, t2);
  }
  /**
   * Applies buffered changes to the underlying RemoteDocumentCache, using
   * the provided transaction.
   */
  apply(e) {
    return this.assertNotApplied(), this.changesApplied = true, this.applyChanges(e);
  }
  /** Helper to assert this.changes is not null  */
  assertNotApplied() {
  }
};
var OverlayedDocument = class {
  constructor(e, t2) {
    this.overlayedDocument = e, this.mutatedFields = t2;
  }
};
var LocalDocumentsView = class {
  constructor(e, t2, n2, r2) {
    this.remoteDocumentCache = e, this.mutationQueue = t2, this.documentOverlayCache = n2, this.indexManager = r2;
  }
  /**
   * Get the local view of the document identified by `key`.
   *
   * @returns Local view of the document or null if we don't have any cached
   * state for it.
   */
  getDocument(e, t2) {
    let n2 = null;
    return this.documentOverlayCache.getOverlay(e, t2).next((r2) => (n2 = r2, this.remoteDocumentCache.getEntry(e, t2))).next((e2) => (null !== n2 && __PRIVATE_mutationApplyToLocalView(n2.mutation, e2, FieldMask.empty(), Timestamp.now()), e2));
  }
  /**
   * Gets the local view of the documents identified by `keys`.
   *
   * If we don't have cached state for a document in `keys`, a NoDocument will
   * be stored for that key in the resulting set.
   */
  getDocuments(e, t2) {
    return this.remoteDocumentCache.getEntries(e, t2).next((t3) => this.getLocalViewOfDocuments(e, t3, __PRIVATE_documentKeySet()).next(() => t3));
  }
  /**
   * Similar to `getDocuments`, but creates the local view from the given
   * `baseDocs` without retrieving documents from the local store.
   *
   * @param transaction - The transaction this operation is scoped to.
   * @param docs - The documents to apply local mutations to get the local views.
   * @param existenceStateChanged - The set of document keys whose existence state
   *   is changed. This is useful to determine if some documents overlay needs
   *   to be recalculated.
   */
  getLocalViewOfDocuments(e, t2, n2 = __PRIVATE_documentKeySet()) {
    const r2 = __PRIVATE_newOverlayMap();
    return this.populateOverlays(e, r2, t2).next(() => this.computeViews(e, t2, r2, n2).next((e2) => {
      let t3 = documentMap();
      return e2.forEach((e3, n3) => {
        t3 = t3.insert(e3, n3.overlayedDocument);
      }), t3;
    }));
  }
  /**
   * Gets the overlayed documents for the given document map, which will include
   * the local view of those documents and a `FieldMask` indicating which fields
   * are mutated locally, `null` if overlay is a Set or Delete mutation.
   */
  getOverlayedDocuments(e, t2) {
    const n2 = __PRIVATE_newOverlayMap();
    return this.populateOverlays(e, n2, t2).next(() => this.computeViews(e, t2, n2, __PRIVATE_documentKeySet()));
  }
  /**
   * Fetches the overlays for {@code docs} and adds them to provided overlay map
   * if the map does not already contain an entry for the given document key.
   */
  populateOverlays(e, t2, n2) {
    const r2 = [];
    return n2.forEach((e2) => {
      t2.has(e2) || r2.push(e2);
    }), this.documentOverlayCache.getOverlays(e, r2).next((e2) => {
      e2.forEach((e3, n3) => {
        t2.set(e3, n3);
      });
    });
  }
  /**
   * Computes the local view for the given documents.
   *
   * @param docs - The documents to compute views for. It also has the base
   *   version of the documents.
   * @param overlays - The overlays that need to be applied to the given base
   *   version of the documents.
   * @param existenceStateChanged - A set of documents whose existence states
   *   might have changed. This is used to determine if we need to re-calculate
   *   overlays from mutation queues.
   * @return A map represents the local documents view.
   */
  computeViews(e, t2, n2, r2) {
    let i = __PRIVATE_mutableDocumentMap();
    const s2 = __PRIVATE_newDocumentKeyMap(), o2 = function __PRIVATE_newOverlayedDocumentMap() {
      return __PRIVATE_newDocumentKeyMap();
    }();
    return t2.forEach((e2, t3) => {
      const o3 = n2.get(t3.key);
      r2.has(t3.key) && (void 0 === o3 || o3.mutation instanceof __PRIVATE_PatchMutation) ? i = i.insert(t3.key, t3) : void 0 !== o3 ? (s2.set(t3.key, o3.mutation.getFieldMask()), __PRIVATE_mutationApplyToLocalView(o3.mutation, t3, o3.mutation.getFieldMask(), Timestamp.now())) : (
        // no overlay exists
        // Using EMPTY to indicate there is no overlay for the document.
        s2.set(t3.key, FieldMask.empty())
      );
    }), this.recalculateAndSaveOverlays(e, i).next((e2) => (e2.forEach((e3, t3) => s2.set(e3, t3)), t2.forEach((e3, t3) => {
      var n3;
      return o2.set(e3, new OverlayedDocument(t3, null !== (n3 = s2.get(e3)) && void 0 !== n3 ? n3 : null));
    }), o2));
  }
  recalculateAndSaveOverlays(e, t2) {
    const n2 = __PRIVATE_newDocumentKeyMap();
    let r2 = new SortedMap((e2, t3) => e2 - t3), i = __PRIVATE_documentKeySet();
    return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e, t2).next((e2) => {
      for (const i2 of e2)
        i2.keys().forEach((e3) => {
          const s2 = t2.get(e3);
          if (null === s2)
            return;
          let o2 = n2.get(e3) || FieldMask.empty();
          o2 = i2.applyToLocalView(s2, o2), n2.set(e3, o2);
          const _ = (r2.get(i2.batchId) || __PRIVATE_documentKeySet()).add(e3);
          r2 = r2.insert(i2.batchId, _);
        });
    }).next(() => {
      const s2 = [], o2 = r2.getReverseIterator();
      for (; o2.hasNext(); ) {
        const r3 = o2.getNext(), _ = r3.key, a2 = r3.value, u2 = __PRIVATE_newMutationMap();
        a2.forEach((e2) => {
          if (!i.has(e2)) {
            const r4 = __PRIVATE_calculateOverlayMutation(t2.get(e2), n2.get(e2));
            null !== r4 && u2.set(e2, r4), i = i.add(e2);
          }
        }), s2.push(this.documentOverlayCache.saveOverlays(e, _, u2));
      }
      return PersistencePromise.waitFor(s2);
    }).next(() => n2);
  }
  /**
   * Recalculates overlays by reading the documents from remote document cache
   * first, and saves them after they are calculated.
   */
  recalculateAndSaveOverlaysForDocumentKeys(e, t2) {
    return this.remoteDocumentCache.getEntries(e, t2).next((t3) => this.recalculateAndSaveOverlays(e, t3));
  }
  /**
   * Performs a query against the local view of all documents.
   *
   * @param transaction - The persistence transaction.
   * @param query - The query to match documents against.
   * @param offset - Read time and key to start scanning by (exclusive).
   * @param context - A optional tracker to keep a record of important details
   *   during database local query execution.
   */
  getDocumentsMatchingQuery(e, t2, n2, r2) {
    return function __PRIVATE_isDocumentQuery$1(e2) {
      return DocumentKey.isDocumentKey(e2.path) && null === e2.collectionGroup && 0 === e2.filters.length;
    }(t2) ? this.getDocumentsMatchingDocumentQuery(e, t2.path) : __PRIVATE_isCollectionGroupQuery(t2) ? this.getDocumentsMatchingCollectionGroupQuery(e, t2, n2, r2) : this.getDocumentsMatchingCollectionQuery(e, t2, n2, r2);
  }
  /**
   * Given a collection group, returns the next documents that follow the provided offset, along
   * with an updated batch ID.
   *
   * <p>The documents returned by this method are ordered by remote version from the provided
   * offset. If there are no more remote documents after the provided offset, documents with
   * mutations in order of batch id from the offset are returned. Since all documents in a batch are
   * returned together, the total number of documents returned can exceed {@code count}.
   *
   * @param transaction
   * @param collectionGroup The collection group for the documents.
   * @param offset The offset to index into.
   * @param count The number of documents to return
   * @return A LocalWriteResult with the documents that follow the provided offset and the last processed batch id.
   */
  getNextDocuments(e, t2, n2, r2) {
    return this.remoteDocumentCache.getAllFromCollectionGroup(e, t2, n2, r2).next((i) => {
      const s2 = r2 - i.size > 0 ? this.documentOverlayCache.getOverlaysForCollectionGroup(e, t2, n2.largestBatchId, r2 - i.size) : PersistencePromise.resolve(__PRIVATE_newOverlayMap());
      let o2 = -1, _ = i;
      return s2.next((t3) => PersistencePromise.forEach(t3, (t4, n3) => (o2 < n3.largestBatchId && (o2 = n3.largestBatchId), i.get(t4) ? PersistencePromise.resolve() : this.remoteDocumentCache.getEntry(e, t4).next((e2) => {
        _ = _.insert(t4, e2);
      }))).next(() => this.populateOverlays(e, t3, i)).next(() => this.computeViews(e, _, t3, __PRIVATE_documentKeySet())).next((e2) => ({
        batchId: o2,
        changes: __PRIVATE_convertOverlayedDocumentMapToDocumentMap(e2)
      })));
    });
  }
  getDocumentsMatchingDocumentQuery(e, t2) {
    return this.getDocument(e, new DocumentKey(t2)).next((e2) => {
      let t3 = documentMap();
      return e2.isFoundDocument() && (t3 = t3.insert(e2.key, e2)), t3;
    });
  }
  getDocumentsMatchingCollectionGroupQuery(e, t2, n2, r2) {
    const i = t2.collectionGroup;
    let s2 = documentMap();
    return this.indexManager.getCollectionParents(e, i).next((o2) => PersistencePromise.forEach(o2, (o3) => {
      const _ = function __PRIVATE_asCollectionQueryAtPath(e2, t3) {
        return new __PRIVATE_QueryImpl(
          t3,
          /*collectionGroup=*/
          null,
          e2.explicitOrderBy.slice(),
          e2.filters.slice(),
          e2.limit,
          e2.limitType,
          e2.startAt,
          e2.endAt
        );
      }(t2, o3.child(i));
      return this.getDocumentsMatchingCollectionQuery(e, _, n2, r2).next((e2) => {
        e2.forEach((e3, t3) => {
          s2 = s2.insert(e3, t3);
        });
      });
    }).next(() => s2));
  }
  getDocumentsMatchingCollectionQuery(e, t2, n2, r2) {
    let i;
    return this.documentOverlayCache.getOverlaysForCollection(e, t2.path, n2.largestBatchId).next((s2) => (i = s2, this.remoteDocumentCache.getDocumentsMatchingQuery(e, t2, n2, i, r2))).next((e2) => {
      i.forEach((t3, n4) => {
        const r3 = n4.getKey();
        null === e2.get(r3) && (e2 = e2.insert(r3, MutableDocument.newInvalidDocument(r3)));
      });
      let n3 = documentMap();
      return e2.forEach((e3, r3) => {
        const s2 = i.get(e3);
        void 0 !== s2 && __PRIVATE_mutationApplyToLocalView(s2.mutation, r3, FieldMask.empty(), Timestamp.now()), // Finally, insert the documents that still match the query
        __PRIVATE_queryMatches(t2, r3) && (n3 = n3.insert(e3, r3));
      }), n3;
    });
  }
};
var __PRIVATE_MemoryBundleCache = class {
  constructor(e) {
    this.serializer = e, this.hr = /* @__PURE__ */ new Map(), this.Pr = /* @__PURE__ */ new Map();
  }
  getBundleMetadata(e, t2) {
    return PersistencePromise.resolve(this.hr.get(t2));
  }
  saveBundleMetadata(e, t2) {
    return this.hr.set(
      t2.id,
      /** Decodes a BundleMetadata proto into a BundleMetadata object. */
      function __PRIVATE_fromBundleMetadata(e2) {
        return {
          id: e2.id,
          version: e2.version,
          createTime: __PRIVATE_fromVersion(e2.createTime)
        };
      }(t2)
    ), PersistencePromise.resolve();
  }
  getNamedQuery(e, t2) {
    return PersistencePromise.resolve(this.Pr.get(t2));
  }
  saveNamedQuery(e, t2) {
    return this.Pr.set(t2.name, function __PRIVATE_fromProtoNamedQuery(e2) {
      return {
        name: e2.name,
        query: __PRIVATE_fromBundledQuery(e2.bundledQuery),
        readTime: __PRIVATE_fromVersion(e2.readTime)
      };
    }(t2)), PersistencePromise.resolve();
  }
};
var __PRIVATE_MemoryDocumentOverlayCache = class {
  constructor() {
    this.overlays = new SortedMap(DocumentKey.comparator), this.Ir = /* @__PURE__ */ new Map();
  }
  getOverlay(e, t2) {
    return PersistencePromise.resolve(this.overlays.get(t2));
  }
  getOverlays(e, t2) {
    const n2 = __PRIVATE_newOverlayMap();
    return PersistencePromise.forEach(t2, (t3) => this.getOverlay(e, t3).next((e2) => {
      null !== e2 && n2.set(t3, e2);
    })).next(() => n2);
  }
  saveOverlays(e, t2, n2) {
    return n2.forEach((n3, r2) => {
      this.ht(e, t2, r2);
    }), PersistencePromise.resolve();
  }
  removeOverlaysForBatchId(e, t2, n2) {
    const r2 = this.Ir.get(n2);
    return void 0 !== r2 && (r2.forEach((e2) => this.overlays = this.overlays.remove(e2)), this.Ir.delete(n2)), PersistencePromise.resolve();
  }
  getOverlaysForCollection(e, t2, n2) {
    const r2 = __PRIVATE_newOverlayMap(), i = t2.length + 1, s2 = new DocumentKey(t2.child("")), o2 = this.overlays.getIteratorFrom(s2);
    for (; o2.hasNext(); ) {
      const e2 = o2.getNext().value, s3 = e2.getKey();
      if (!t2.isPrefixOf(s3.path))
        break;
      s3.path.length === i && (e2.largestBatchId > n2 && r2.set(e2.getKey(), e2));
    }
    return PersistencePromise.resolve(r2);
  }
  getOverlaysForCollectionGroup(e, t2, n2, r2) {
    let i = new SortedMap((e2, t3) => e2 - t3);
    const s2 = this.overlays.getIterator();
    for (; s2.hasNext(); ) {
      const e2 = s2.getNext().value;
      if (e2.getKey().getCollectionGroup() === t2 && e2.largestBatchId > n2) {
        let t3 = i.get(e2.largestBatchId);
        null === t3 && (t3 = __PRIVATE_newOverlayMap(), i = i.insert(e2.largestBatchId, t3)), t3.set(e2.getKey(), e2);
      }
    }
    const o2 = __PRIVATE_newOverlayMap(), _ = i.getIterator();
    for (; _.hasNext(); ) {
      if (_.getNext().value.forEach((e2, t3) => o2.set(e2, t3)), o2.size() >= r2)
        break;
    }
    return PersistencePromise.resolve(o2);
  }
  ht(e, t2, n2) {
    const r2 = this.overlays.get(n2.key);
    if (null !== r2) {
      const e2 = this.Ir.get(r2.largestBatchId).delete(n2.key);
      this.Ir.set(r2.largestBatchId, e2);
    }
    this.overlays = this.overlays.insert(n2.key, new Overlay(t2, n2));
    let i = this.Ir.get(t2);
    void 0 === i && (i = __PRIVATE_documentKeySet(), this.Ir.set(t2, i)), this.Ir.set(t2, i.add(n2.key));
  }
};
var __PRIVATE_MemoryGlobalsCache = class {
  constructor() {
    this.sessionToken = ByteString.EMPTY_BYTE_STRING;
  }
  getSessionToken(e) {
    return PersistencePromise.resolve(this.sessionToken);
  }
  setSessionToken(e, t2) {
    return this.sessionToken = t2, PersistencePromise.resolve();
  }
};
var __PRIVATE_ReferenceSet = class {
  constructor() {
    this.Tr = new SortedSet(__PRIVATE_DocReference.Er), // A set of outstanding references to a document sorted by target id.
    this.dr = new SortedSet(__PRIVATE_DocReference.Ar);
  }
  /** Returns true if the reference set contains no references. */
  isEmpty() {
    return this.Tr.isEmpty();
  }
  /** Adds a reference to the given document key for the given ID. */
  addReference(e, t2) {
    const n2 = new __PRIVATE_DocReference(e, t2);
    this.Tr = this.Tr.add(n2), this.dr = this.dr.add(n2);
  }
  /** Add references to the given document keys for the given ID. */
  Rr(e, t2) {
    e.forEach((e2) => this.addReference(e2, t2));
  }
  /**
   * Removes a reference to the given document key for the given
   * ID.
   */
  removeReference(e, t2) {
    this.Vr(new __PRIVATE_DocReference(e, t2));
  }
  mr(e, t2) {
    e.forEach((e2) => this.removeReference(e2, t2));
  }
  /**
   * Clears all references with a given ID. Calls removeRef() for each key
   * removed.
   */
  gr(e) {
    const t2 = new DocumentKey(new ResourcePath([])), n2 = new __PRIVATE_DocReference(t2, e), r2 = new __PRIVATE_DocReference(t2, e + 1), i = [];
    return this.dr.forEachInRange([n2, r2], (e2) => {
      this.Vr(e2), i.push(e2.key);
    }), i;
  }
  pr() {
    this.Tr.forEach((e) => this.Vr(e));
  }
  Vr(e) {
    this.Tr = this.Tr.delete(e), this.dr = this.dr.delete(e);
  }
  yr(e) {
    const t2 = new DocumentKey(new ResourcePath([])), n2 = new __PRIVATE_DocReference(t2, e), r2 = new __PRIVATE_DocReference(t2, e + 1);
    let i = __PRIVATE_documentKeySet();
    return this.dr.forEachInRange([n2, r2], (e2) => {
      i = i.add(e2.key);
    }), i;
  }
  containsKey(e) {
    const t2 = new __PRIVATE_DocReference(e, 0), n2 = this.Tr.firstAfterOrEqual(t2);
    return null !== n2 && e.isEqual(n2.key);
  }
};
var __PRIVATE_DocReference = class {
  constructor(e, t2) {
    this.key = e, this.wr = t2;
  }
  /** Compare by key then by ID */
  static Er(e, t2) {
    return DocumentKey.comparator(e.key, t2.key) || __PRIVATE_primitiveComparator(e.wr, t2.wr);
  }
  /** Compare by ID then by key */
  static Ar(e, t2) {
    return __PRIVATE_primitiveComparator(e.wr, t2.wr) || DocumentKey.comparator(e.key, t2.key);
  }
};
var __PRIVATE_MemoryMutationQueue = class {
  constructor(e, t2) {
    this.indexManager = e, this.referenceDelegate = t2, /**
     * The set of all mutations that have been sent but not yet been applied to
     * the backend.
     */
    this.mutationQueue = [], /** Next value to use when assigning sequential IDs to each mutation batch. */
    this.Sr = 1, /** An ordered mapping between documents and the mutations batch IDs. */
    this.br = new SortedSet(__PRIVATE_DocReference.Er);
  }
  checkEmpty(e) {
    return PersistencePromise.resolve(0 === this.mutationQueue.length);
  }
  addMutationBatch(e, t2, n2, r2) {
    const i = this.Sr;
    this.Sr++, this.mutationQueue.length > 0 && this.mutationQueue[this.mutationQueue.length - 1];
    const s2 = new MutationBatch(i, t2, n2, r2);
    this.mutationQueue.push(s2);
    for (const t3 of r2)
      this.br = this.br.add(new __PRIVATE_DocReference(t3.key, i)), this.indexManager.addToCollectionParentIndex(e, t3.key.path.popLast());
    return PersistencePromise.resolve(s2);
  }
  lookupMutationBatch(e, t2) {
    return PersistencePromise.resolve(this.Dr(t2));
  }
  getNextMutationBatchAfterBatchId(e, t2) {
    const n2 = t2 + 1, r2 = this.vr(n2), i = r2 < 0 ? 0 : r2;
    return PersistencePromise.resolve(this.mutationQueue.length > i ? this.mutationQueue[i] : null);
  }
  getHighestUnacknowledgedBatchId() {
    return PersistencePromise.resolve(0 === this.mutationQueue.length ? -1 : this.Sr - 1);
  }
  getAllMutationBatches(e) {
    return PersistencePromise.resolve(this.mutationQueue.slice());
  }
  getAllMutationBatchesAffectingDocumentKey(e, t2) {
    const n2 = new __PRIVATE_DocReference(t2, 0), r2 = new __PRIVATE_DocReference(t2, Number.POSITIVE_INFINITY), i = [];
    return this.br.forEachInRange([n2, r2], (e2) => {
      const t3 = this.Dr(e2.wr);
      i.push(t3);
    }), PersistencePromise.resolve(i);
  }
  getAllMutationBatchesAffectingDocumentKeys(e, t2) {
    let n2 = new SortedSet(__PRIVATE_primitiveComparator);
    return t2.forEach((e2) => {
      const t3 = new __PRIVATE_DocReference(e2, 0), r2 = new __PRIVATE_DocReference(e2, Number.POSITIVE_INFINITY);
      this.br.forEachInRange([t3, r2], (e3) => {
        n2 = n2.add(e3.wr);
      });
    }), PersistencePromise.resolve(this.Cr(n2));
  }
  getAllMutationBatchesAffectingQuery(e, t2) {
    const n2 = t2.path, r2 = n2.length + 1;
    let i = n2;
    DocumentKey.isDocumentKey(i) || (i = i.child(""));
    const s2 = new __PRIVATE_DocReference(new DocumentKey(i), 0);
    let o2 = new SortedSet(__PRIVATE_primitiveComparator);
    return this.br.forEachWhile((e2) => {
      const t3 = e2.key.path;
      return !!n2.isPrefixOf(t3) && // Rows with document keys more than one segment longer than the query
      // path can't be matches. For example, a query on 'rooms' can't match
      // the document /rooms/abc/messages/xyx.
      // TODO(mcg): we'll need a different scanner when we implement
      // ancestor queries.
      (t3.length === r2 && (o2 = o2.add(e2.wr)), true);
    }, s2), PersistencePromise.resolve(this.Cr(o2));
  }
  Cr(e) {
    const t2 = [];
    return e.forEach((e2) => {
      const n2 = this.Dr(e2);
      null !== n2 && t2.push(n2);
    }), t2;
  }
  removeMutationBatch(e, t2) {
    __PRIVATE_hardAssert(0 === this.Fr(t2.batchId, "removed")), this.mutationQueue.shift();
    let n2 = this.br;
    return PersistencePromise.forEach(t2.mutations, (r2) => {
      const i = new __PRIVATE_DocReference(r2.key, t2.batchId);
      return n2 = n2.delete(i), this.referenceDelegate.markPotentiallyOrphaned(e, r2.key);
    }).next(() => {
      this.br = n2;
    });
  }
  On(e) {
  }
  containsKey(e, t2) {
    const n2 = new __PRIVATE_DocReference(t2, 0), r2 = this.br.firstAfterOrEqual(n2);
    return PersistencePromise.resolve(t2.isEqual(r2 && r2.key));
  }
  performConsistencyCheck(e) {
    return this.mutationQueue.length, PersistencePromise.resolve();
  }
  /**
   * Finds the index of the given batchId in the mutation queue and asserts that
   * the resulting index is within the bounds of the queue.
   *
   * @param batchId - The batchId to search for
   * @param action - A description of what the caller is doing, phrased in passive
   * form (e.g. "acknowledged" in a routine that acknowledges batches).
   */
  Fr(e, t2) {
    return this.vr(e);
  }
  /**
   * Finds the index of the given batchId in the mutation queue. This operation
   * is O(1).
   *
   * @returns The computed index of the batch with the given batchId, based on
   * the state of the queue. Note this index can be negative if the requested
   * batchId has already been removed from the queue or past the end of the
   * queue if the batchId is larger than the last added batch.
   */
  vr(e) {
    if (0 === this.mutationQueue.length)
      return 0;
    return e - this.mutationQueue[0].batchId;
  }
  /**
   * A version of lookupMutationBatch that doesn't return a promise, this makes
   * other functions that uses this code easier to read and more efficient.
   */
  Dr(e) {
    const t2 = this.vr(e);
    if (t2 < 0 || t2 >= this.mutationQueue.length)
      return null;
    return this.mutationQueue[t2];
  }
};
var __PRIVATE_MemoryRemoteDocumentCacheImpl = class {
  /**
   * @param sizer - Used to assess the size of a document. For eager GC, this is
   * expected to just return 0 to avoid unnecessarily doing the work of
   * calculating the size.
   */
  constructor(e) {
    this.Mr = e, /** Underlying cache of documents and their read times. */
    this.docs = function __PRIVATE_documentEntryMap() {
      return new SortedMap(DocumentKey.comparator);
    }(), /** Size of all cached documents. */
    this.size = 0;
  }
  setIndexManager(e) {
    this.indexManager = e;
  }
  /**
   * Adds the supplied entry to the cache and updates the cache size as appropriate.
   *
   * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  addEntry(e, t2) {
    const n2 = t2.key, r2 = this.docs.get(n2), i = r2 ? r2.size : 0, s2 = this.Mr(t2);
    return this.docs = this.docs.insert(n2, {
      document: t2.mutableCopy(),
      size: s2
    }), this.size += s2 - i, this.indexManager.addToCollectionParentIndex(e, n2.path.popLast());
  }
  /**
   * Removes the specified entry from the cache and updates the cache size as appropriate.
   *
   * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
   * returned by `newChangeBuffer()`.
   */
  removeEntry(e) {
    const t2 = this.docs.get(e);
    t2 && (this.docs = this.docs.remove(e), this.size -= t2.size);
  }
  getEntry(e, t2) {
    const n2 = this.docs.get(t2);
    return PersistencePromise.resolve(n2 ? n2.document.mutableCopy() : MutableDocument.newInvalidDocument(t2));
  }
  getEntries(e, t2) {
    let n2 = __PRIVATE_mutableDocumentMap();
    return t2.forEach((e2) => {
      const t3 = this.docs.get(e2);
      n2 = n2.insert(e2, t3 ? t3.document.mutableCopy() : MutableDocument.newInvalidDocument(e2));
    }), PersistencePromise.resolve(n2);
  }
  getDocumentsMatchingQuery(e, t2, n2, r2) {
    let i = __PRIVATE_mutableDocumentMap();
    const s2 = t2.path, o2 = new DocumentKey(s2.child("")), _ = this.docs.getIteratorFrom(o2);
    for (; _.hasNext(); ) {
      const { key: e2, value: { document: o3 } } = _.getNext();
      if (!s2.isPrefixOf(e2.path))
        break;
      e2.path.length > s2.length + 1 || (__PRIVATE_indexOffsetComparator(__PRIVATE_newIndexOffsetFromDocument(o3), n2) <= 0 || (r2.has(o3.key) || __PRIVATE_queryMatches(t2, o3)) && (i = i.insert(o3.key, o3.mutableCopy())));
    }
    return PersistencePromise.resolve(i);
  }
  getAllFromCollectionGroup(e, t2, n2, r2) {
    fail();
  }
  Or(e, t2) {
    return PersistencePromise.forEach(this.docs, (e2) => t2(e2));
  }
  newChangeBuffer(e) {
    return new __PRIVATE_MemoryRemoteDocumentChangeBuffer(this);
  }
  getSize(e) {
    return PersistencePromise.resolve(this.size);
  }
};
var __PRIVATE_MemoryRemoteDocumentChangeBuffer = class extends RemoteDocumentChangeBuffer {
  constructor(e) {
    super(), this.cr = e;
  }
  applyChanges(e) {
    const t2 = [];
    return this.changes.forEach((n2, r2) => {
      r2.isValidDocument() ? t2.push(this.cr.addEntry(e, r2)) : this.cr.removeEntry(n2);
    }), PersistencePromise.waitFor(t2);
  }
  getFromCache(e, t2) {
    return this.cr.getEntry(e, t2);
  }
  getAllFromCache(e, t2) {
    return this.cr.getEntries(e, t2);
  }
};
var __PRIVATE_MemoryTargetCache = class {
  constructor(e) {
    this.persistence = e, /**
     * Maps a target to the data about that target
     */
    this.Nr = new ObjectMap((e2) => __PRIVATE_canonifyTarget(e2), __PRIVATE_targetEquals), /** The last received snapshot version. */
    this.lastRemoteSnapshotVersion = SnapshotVersion.min(), /** The highest numbered target ID encountered. */
    this.highestTargetId = 0, /** The highest sequence number encountered. */
    this.Lr = 0, /**
     * A ordered bidirectional mapping between documents and the remote target
     * IDs.
     */
    this.Br = new __PRIVATE_ReferenceSet(), this.targetCount = 0, this.kr = __PRIVATE_TargetIdGenerator.Bn();
  }
  forEachTarget(e, t2) {
    return this.Nr.forEach((e2, n2) => t2(n2)), PersistencePromise.resolve();
  }
  getLastRemoteSnapshotVersion(e) {
    return PersistencePromise.resolve(this.lastRemoteSnapshotVersion);
  }
  getHighestSequenceNumber(e) {
    return PersistencePromise.resolve(this.Lr);
  }
  allocateTargetId(e) {
    return this.highestTargetId = this.kr.next(), PersistencePromise.resolve(this.highestTargetId);
  }
  setTargetsMetadata(e, t2, n2) {
    return n2 && (this.lastRemoteSnapshotVersion = n2), t2 > this.Lr && (this.Lr = t2), PersistencePromise.resolve();
  }
  Kn(e) {
    this.Nr.set(e.target, e);
    const t2 = e.targetId;
    t2 > this.highestTargetId && (this.kr = new __PRIVATE_TargetIdGenerator(t2), this.highestTargetId = t2), e.sequenceNumber > this.Lr && (this.Lr = e.sequenceNumber);
  }
  addTargetData(e, t2) {
    return this.Kn(t2), this.targetCount += 1, PersistencePromise.resolve();
  }
  updateTargetData(e, t2) {
    return this.Kn(t2), PersistencePromise.resolve();
  }
  removeTargetData(e, t2) {
    return this.Nr.delete(t2.target), this.Br.gr(t2.targetId), this.targetCount -= 1, PersistencePromise.resolve();
  }
  removeTargets(e, t2, n2) {
    let r2 = 0;
    const i = [];
    return this.Nr.forEach((s2, o2) => {
      o2.sequenceNumber <= t2 && null === n2.get(o2.targetId) && (this.Nr.delete(s2), i.push(this.removeMatchingKeysForTargetId(e, o2.targetId)), r2++);
    }), PersistencePromise.waitFor(i).next(() => r2);
  }
  getTargetCount(e) {
    return PersistencePromise.resolve(this.targetCount);
  }
  getTargetData(e, t2) {
    const n2 = this.Nr.get(t2) || null;
    return PersistencePromise.resolve(n2);
  }
  addMatchingKeys(e, t2, n2) {
    return this.Br.Rr(t2, n2), PersistencePromise.resolve();
  }
  removeMatchingKeys(e, t2, n2) {
    this.Br.mr(t2, n2);
    const r2 = this.persistence.referenceDelegate, i = [];
    return r2 && t2.forEach((t3) => {
      i.push(r2.markPotentiallyOrphaned(e, t3));
    }), PersistencePromise.waitFor(i);
  }
  removeMatchingKeysForTargetId(e, t2) {
    return this.Br.gr(t2), PersistencePromise.resolve();
  }
  getMatchingKeysForTargetId(e, t2) {
    const n2 = this.Br.yr(t2);
    return PersistencePromise.resolve(n2);
  }
  containsKey(e, t2) {
    return PersistencePromise.resolve(this.Br.containsKey(t2));
  }
};
var __PRIVATE_MemoryPersistence = class {
  /**
   * The constructor accepts a factory for creating a reference delegate. This
   * allows both the delegate and this instance to have strong references to
   * each other without having nullable fields that would then need to be
   * checked or asserted on every access.
   */
  constructor(e, t2) {
    this.qr = {}, this.overlays = {}, this.Qr = new __PRIVATE_ListenSequence(0), this.Kr = false, this.Kr = true, this.$r = new __PRIVATE_MemoryGlobalsCache(), this.referenceDelegate = e(this), this.Ur = new __PRIVATE_MemoryTargetCache(this);
    this.indexManager = new __PRIVATE_MemoryIndexManager(), this.remoteDocumentCache = function __PRIVATE_newMemoryRemoteDocumentCache(e2) {
      return new __PRIVATE_MemoryRemoteDocumentCacheImpl(e2);
    }((e2) => this.referenceDelegate.Wr(e2)), this.serializer = new __PRIVATE_LocalSerializer(t2), this.Gr = new __PRIVATE_MemoryBundleCache(this.serializer);
  }
  start() {
    return Promise.resolve();
  }
  shutdown() {
    return this.Kr = false, Promise.resolve();
  }
  get started() {
    return this.Kr;
  }
  setDatabaseDeletedListener() {
  }
  setNetworkEnabled() {
  }
  getIndexManager(e) {
    return this.indexManager;
  }
  getDocumentOverlayCache(e) {
    let t2 = this.overlays[e.toKey()];
    return t2 || (t2 = new __PRIVATE_MemoryDocumentOverlayCache(), this.overlays[e.toKey()] = t2), t2;
  }
  getMutationQueue(e, t2) {
    let n2 = this.qr[e.toKey()];
    return n2 || (n2 = new __PRIVATE_MemoryMutationQueue(t2, this.referenceDelegate), this.qr[e.toKey()] = n2), n2;
  }
  getGlobalsCache() {
    return this.$r;
  }
  getTargetCache() {
    return this.Ur;
  }
  getRemoteDocumentCache() {
    return this.remoteDocumentCache;
  }
  getBundleCache() {
    return this.Gr;
  }
  runTransaction(e, t2, n2) {
    __PRIVATE_logDebug("MemoryPersistence", "Starting transaction:", e);
    const r2 = new __PRIVATE_MemoryTransaction(this.Qr.next());
    return this.referenceDelegate.zr(), n2(r2).next((e2) => this.referenceDelegate.jr(r2).next(() => e2)).toPromise().then((e2) => (r2.raiseOnCommittedEvent(), e2));
  }
  Hr(e, t2) {
    return PersistencePromise.or(Object.values(this.qr).map((n2) => () => n2.containsKey(e, t2)));
  }
};
var __PRIVATE_MemoryTransaction = class extends PersistenceTransaction {
  constructor(e) {
    super(), this.currentSequenceNumber = e;
  }
};
var __PRIVATE_MemoryEagerDelegate = class {
  constructor(e) {
    this.persistence = e, /** Tracks all documents that are active in Query views. */
    this.Jr = new __PRIVATE_ReferenceSet(), /** The list of documents that are potentially GCed after each transaction. */
    this.Yr = null;
  }
  static Zr(e) {
    return new __PRIVATE_MemoryEagerDelegate(e);
  }
  get Xr() {
    if (this.Yr)
      return this.Yr;
    throw fail();
  }
  addReference(e, t2, n2) {
    return this.Jr.addReference(n2, t2), this.Xr.delete(n2.toString()), PersistencePromise.resolve();
  }
  removeReference(e, t2, n2) {
    return this.Jr.removeReference(n2, t2), this.Xr.add(n2.toString()), PersistencePromise.resolve();
  }
  markPotentiallyOrphaned(e, t2) {
    return this.Xr.add(t2.toString()), PersistencePromise.resolve();
  }
  removeTarget(e, t2) {
    this.Jr.gr(t2.targetId).forEach((e2) => this.Xr.add(e2.toString()));
    const n2 = this.persistence.getTargetCache();
    return n2.getMatchingKeysForTargetId(e, t2.targetId).next((e2) => {
      e2.forEach((e3) => this.Xr.add(e3.toString()));
    }).next(() => n2.removeTargetData(e, t2));
  }
  zr() {
    this.Yr = /* @__PURE__ */ new Set();
  }
  jr(e) {
    const t2 = this.persistence.getRemoteDocumentCache().newChangeBuffer();
    return PersistencePromise.forEach(this.Xr, (n2) => {
      const r2 = DocumentKey.fromPath(n2);
      return this.ei(e, r2).next((e2) => {
        e2 || t2.removeEntry(r2, SnapshotVersion.min());
      });
    }).next(() => (this.Yr = null, t2.apply(e)));
  }
  updateLimboDocument(e, t2) {
    return this.ei(e, t2).next((e2) => {
      e2 ? this.Xr.delete(t2.toString()) : this.Xr.add(t2.toString());
    });
  }
  Wr(e) {
    return 0;
  }
  ei(e, t2) {
    return PersistencePromise.or([() => PersistencePromise.resolve(this.Jr.containsKey(t2)), () => this.persistence.getTargetCache().containsKey(e, t2), () => this.persistence.Hr(e, t2)]);
  }
};
var __PRIVATE_LocalViewChanges = class {
  constructor(e, t2, n2, r2) {
    this.targetId = e, this.fromCache = t2, this.$i = n2, this.Ui = r2;
  }
  static Wi(e, t2) {
    let n2 = __PRIVATE_documentKeySet(), r2 = __PRIVATE_documentKeySet();
    for (const e2 of t2.docChanges)
      switch (e2.type) {
        case 0:
          n2 = n2.add(e2.doc.key);
          break;
        case 1:
          r2 = r2.add(e2.doc.key);
      }
    return new __PRIVATE_LocalViewChanges(e, t2.fromCache, n2, r2);
  }
};
var QueryContext = class {
  constructor() {
    this._documentReadCount = 0;
  }
  get documentReadCount() {
    return this._documentReadCount;
  }
  incrementDocumentReadCount(e) {
    this._documentReadCount += e;
  }
};
var __PRIVATE_QueryEngine = class {
  constructor() {
    this.Gi = false, this.zi = false, /**
     * SDK only decides whether it should create index when collection size is
     * larger than this.
     */
    this.ji = 100, this.Hi = /**
    * This cost represents the evaluation result of
    * (([index, docKey] + [docKey, docContent]) per document in the result set)
    * / ([docKey, docContent] per documents in full collection scan) coming from
    * experiment [enter PR experiment URL here].
    */
    function __PRIVATE_getDefaultRelativeIndexReadCostPerDocument() {
      return isSafari() ? 8 : __PRIVATE_getAndroidVersion(getUA()) > 0 ? 6 : 4;
    }();
  }
  /** Sets the document view to query against. */
  initialize(e, t2) {
    this.Ji = e, this.indexManager = t2, this.Gi = true;
  }
  /** Returns all local documents matching the specified query. */
  getDocumentsMatchingQuery(e, t2, n2, r2) {
    const i = {
      result: null
    };
    return this.Yi(e, t2).next((e2) => {
      i.result = e2;
    }).next(() => {
      if (!i.result)
        return this.Zi(e, t2, r2, n2).next((e2) => {
          i.result = e2;
        });
    }).next(() => {
      if (i.result)
        return;
      const n3 = new QueryContext();
      return this.Xi(e, t2, n3).next((r3) => {
        if (i.result = r3, this.zi)
          return this.es(e, t2, n3, r3.size);
      });
    }).next(() => i.result);
  }
  es(e, t2, n2, r2) {
    return n2.documentReadCount < this.ji ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "SDK will not create cache indexes for query:", __PRIVATE_stringifyQuery(t2), "since it only creates cache indexes for collection contains", "more than or equal to", this.ji, "documents"), PersistencePromise.resolve()) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Query:", __PRIVATE_stringifyQuery(t2), "scans", n2.documentReadCount, "local documents and returns", r2, "documents as results."), n2.documentReadCount > this.Hi * r2 ? (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "The SDK decides to create cache indexes for query:", __PRIVATE_stringifyQuery(t2), "as using cache indexes may help improve performance."), this.indexManager.createTargetIndexes(e, __PRIVATE_queryToTarget(t2))) : PersistencePromise.resolve());
  }
  /**
   * Performs an indexed query that evaluates the query based on a collection's
   * persisted index values. Returns `null` if an index is not available.
   */
  Yi(e, t2) {
    if (__PRIVATE_queryMatchesAllDocuments(t2))
      return PersistencePromise.resolve(null);
    let n2 = __PRIVATE_queryToTarget(t2);
    return this.indexManager.getIndexType(e, n2).next((r2) => 0 === r2 ? null : (null !== t2.limit && 1 === r2 && // We cannot apply a limit for targets that are served using a partial
    // index. If a partial index will be used to serve the target, the
    // query may return a superset of documents that match the target
    // (e.g. if the index doesn't include all the target's filters), or
    // may return the correct set of documents in the wrong order (e.g. if
    // the index doesn't include a segment for one of the orderBys).
    // Therefore, a limit should not be applied in such cases.
    (t2 = __PRIVATE_queryWithLimit(
      t2,
      null,
      "F"
      /* LimitType.First */
    ), n2 = __PRIVATE_queryToTarget(t2)), this.indexManager.getDocumentsMatchingTarget(e, n2).next((r3) => {
      const i = __PRIVATE_documentKeySet(...r3);
      return this.Ji.getDocuments(e, i).next((r4) => this.indexManager.getMinOffset(e, n2).next((n3) => {
        const s2 = this.ts(t2, r4);
        return this.ns(t2, s2, i, n3.readTime) ? this.Yi(e, __PRIVATE_queryWithLimit(
          t2,
          null,
          "F"
          /* LimitType.First */
        )) : this.rs(e, s2, t2, n3);
      }));
    })));
  }
  /**
   * Performs a query based on the target's persisted query mapping. Returns
   * `null` if the mapping is not available or cannot be used.
   */
  Zi(e, t2, n2, r2) {
    return __PRIVATE_queryMatchesAllDocuments(t2) || r2.isEqual(SnapshotVersion.min()) ? PersistencePromise.resolve(null) : this.Ji.getDocuments(e, n2).next((i) => {
      const s2 = this.ts(t2, i);
      return this.ns(t2, s2, n2, r2) ? PersistencePromise.resolve(null) : (__PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Re-using previous result from %s to execute query: %s", r2.toString(), __PRIVATE_stringifyQuery(t2)), this.rs(e, s2, t2, __PRIVATE_newIndexOffsetSuccessorFromReadTime(r2, -1)).next((e2) => e2));
    });
  }
  /** Applies the query filter and sorting to the provided documents.  */
  ts(e, t2) {
    let n2 = new SortedSet(__PRIVATE_newQueryComparator(e));
    return t2.forEach((t3, r2) => {
      __PRIVATE_queryMatches(e, r2) && (n2 = n2.add(r2));
    }), n2;
  }
  /**
   * Determines if a limit query needs to be refilled from cache, making it
   * ineligible for index-free execution.
   *
   * @param query - The query.
   * @param sortedPreviousResults - The documents that matched the query when it
   * was last synchronized, sorted by the query's comparator.
   * @param remoteKeys - The document keys that matched the query at the last
   * snapshot.
   * @param limboFreeSnapshotVersion - The version of the snapshot when the
   * query was last synchronized.
   */
  ns(e, t2, n2, r2) {
    if (null === e.limit)
      return false;
    if (n2.size !== t2.size)
      return true;
    const i = "F" === e.limitType ? t2.last() : t2.first();
    return !!i && (i.hasPendingWrites || i.version.compareTo(r2) > 0);
  }
  Xi(e, t2, n2) {
    return __PRIVATE_getLogLevel() <= LogLevel.DEBUG && __PRIVATE_logDebug("QueryEngine", "Using full collection scan to execute query:", __PRIVATE_stringifyQuery(t2)), this.Ji.getDocumentsMatchingQuery(e, t2, IndexOffset.min(), n2);
  }
  /**
   * Combines the results from an indexed execution with the remaining documents
   * that have not yet been indexed.
   */
  rs(e, t2, n2, r2) {
    return this.Ji.getDocumentsMatchingQuery(e, n2, r2).next((e2) => (
      // Merge with existing results
      (t2.forEach((t3) => {
        e2 = e2.insert(t3.key, t3);
      }), e2)
    ));
  }
};
var __PRIVATE_LocalStoreImpl = class {
  constructor(e, t2, n2, r2) {
    this.persistence = e, this.ss = t2, this.serializer = r2, /**
     * Maps a targetID to data about its target.
     *
     * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
     * of `applyRemoteEvent()` idempotent.
     */
    this.os = new SortedMap(__PRIVATE_primitiveComparator), /** Maps a target to its targetID. */
    // TODO(wuandy): Evaluate if TargetId can be part of Target.
    this._s = new ObjectMap((e2) => __PRIVATE_canonifyTarget(e2), __PRIVATE_targetEquals), /**
     * A per collection group index of the last read time processed by
     * `getNewDocumentChanges()`.
     *
     * PORTING NOTE: This is only used for multi-tab synchronization.
     */
    this.us = /* @__PURE__ */ new Map(), this.cs = e.getRemoteDocumentCache(), this.Ur = e.getTargetCache(), this.Gr = e.getBundleCache(), this.ls(n2);
  }
  ls(e) {
    this.documentOverlayCache = this.persistence.getDocumentOverlayCache(e), this.indexManager = this.persistence.getIndexManager(e), this.mutationQueue = this.persistence.getMutationQueue(e, this.indexManager), this.localDocuments = new LocalDocumentsView(this.cs, this.mutationQueue, this.documentOverlayCache, this.indexManager), this.cs.setIndexManager(this.indexManager), this.ss.initialize(this.localDocuments, this.indexManager);
  }
  collectGarbage(e) {
    return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (t2) => e.collect(t2, this.os));
  }
};
function __PRIVATE_newLocalStore(e, t2, n2, r2) {
  return new __PRIVATE_LocalStoreImpl(e, t2, n2, r2);
}
async function __PRIVATE_localStoreHandleUserChange(e, t2) {
  const n2 = __PRIVATE_debugCast(e);
  return await n2.persistence.runTransaction("Handle user change", "readonly", (e2) => {
    let r2;
    return n2.mutationQueue.getAllMutationBatches(e2).next((i) => (r2 = i, n2.ls(t2), n2.mutationQueue.getAllMutationBatches(e2))).next((t3) => {
      const i = [], s2 = [];
      let o2 = __PRIVATE_documentKeySet();
      for (const e3 of r2) {
        i.push(e3.batchId);
        for (const t4 of e3.mutations)
          o2 = o2.add(t4.key);
      }
      for (const e3 of t3) {
        s2.push(e3.batchId);
        for (const t4 of e3.mutations)
          o2 = o2.add(t4.key);
      }
      return n2.localDocuments.getDocuments(e2, o2).next((e3) => ({
        hs: e3,
        removedBatchIds: i,
        addedBatchIds: s2
      }));
    });
  });
}
var __PRIVATE_LocalClientState = class {
  constructor() {
    this.activeTargetIds = __PRIVATE_targetIdSet();
  }
  fs(e) {
    this.activeTargetIds = this.activeTargetIds.add(e);
  }
  gs(e) {
    this.activeTargetIds = this.activeTargetIds.delete(e);
  }
  /**
   * Converts this entry into a JSON-encoded format we can use for WebStorage.
   * Does not encode `clientId` as it is part of the key in WebStorage.
   */
  Vs() {
    const e = {
      activeTargetIds: this.activeTargetIds.toArray(),
      updateTimeMs: Date.now()
    };
    return JSON.stringify(e);
  }
};
var __PRIVATE_MemorySharedClientState = class {
  constructor() {
    this.so = new __PRIVATE_LocalClientState(), this.oo = {}, this.onlineStateHandler = null, this.sequenceNumberHandler = null;
  }
  addPendingMutation(e) {
  }
  updateMutationState(e, t2, n2) {
  }
  addLocalQueryTarget(e, t2 = true) {
    return t2 && this.so.fs(e), this.oo[e] || "not-current";
  }
  updateQueryState(e, t2, n2) {
    this.oo[e] = t2;
  }
  removeLocalQueryTarget(e) {
    this.so.gs(e);
  }
  isLocalQueryTarget(e) {
    return this.so.activeTargetIds.has(e);
  }
  clearQueryState(e) {
    delete this.oo[e];
  }
  getAllActiveQueryTargets() {
    return this.so.activeTargetIds;
  }
  isActiveQueryTarget(e) {
    return this.so.activeTargetIds.has(e);
  }
  start() {
    return this.so = new __PRIVATE_LocalClientState(), Promise.resolve();
  }
  handleUserChange(e, t2, n2) {
  }
  setOnlineState(e) {
  }
  shutdown() {
  }
  writeSequenceNumber(e) {
  }
  notifyBundleLoaded(e) {
  }
};
var __PRIVATE_NoopConnectivityMonitor = class {
  _o(e) {
  }
  shutdown() {
  }
};
var __PRIVATE_BrowserConnectivityMonitor = class {
  constructor() {
    this.ao = () => this.uo(), this.co = () => this.lo(), this.ho = [], this.Po();
  }
  _o(e) {
    this.ho.push(e);
  }
  shutdown() {
    window.removeEventListener("online", this.ao), window.removeEventListener("offline", this.co);
  }
  Po() {
    window.addEventListener("online", this.ao), window.addEventListener("offline", this.co);
  }
  uo() {
    __PRIVATE_logDebug("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
    for (const e of this.ho)
      e(
        0
        /* NetworkStatus.AVAILABLE */
      );
  }
  lo() {
    __PRIVATE_logDebug("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
    for (const e of this.ho)
      e(
        1
        /* NetworkStatus.UNAVAILABLE */
      );
  }
  // TODO(chenbrian): Consider passing in window either into this component or
  // here for testing via FakeWindow.
  /** Checks that all used attributes of window are available. */
  static D() {
    return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
  }
};
var me = null;
function __PRIVATE_generateUniqueDebugId() {
  return null === me ? me = function __PRIVATE_generateInitialUniqueDebugId() {
    return 268435456 + Math.round(2147483648 * Math.random());
  }() : me++, "0x" + me.toString(16);
}
var fe = {
  BatchGetDocuments: "batchGet",
  Commit: "commit",
  RunQuery: "runQuery",
  RunAggregationQuery: "runAggregationQuery"
};
var __PRIVATE_StreamBridge = class {
  constructor(e) {
    this.Io = e.Io, this.To = e.To;
  }
  Eo(e) {
    this.Ao = e;
  }
  Ro(e) {
    this.Vo = e;
  }
  mo(e) {
    this.fo = e;
  }
  onMessage(e) {
    this.po = e;
  }
  close() {
    this.To();
  }
  send(e) {
    this.Io(e);
  }
  yo() {
    this.Ao();
  }
  wo() {
    this.Vo();
  }
  So(e) {
    this.fo(e);
  }
  bo(e) {
    this.po(e);
  }
};
var ge = "WebChannelConnection";
var __PRIVATE_WebChannelConnection = class extends /**
 * Base class for all Rest-based connections to the backend (WebChannel and
 * HTTP).
 */
class __PRIVATE_RestConnection {
  constructor(e) {
    this.databaseInfo = e, this.databaseId = e.databaseId;
    const t2 = e.ssl ? "https" : "http", n2 = encodeURIComponent(this.databaseId.projectId), r2 = encodeURIComponent(this.databaseId.database);
    this.Do = t2 + "://" + e.host, this.vo = `projects/${n2}/databases/${r2}`, this.Co = "(default)" === this.databaseId.database ? `project_id=${n2}` : `project_id=${n2}&database_id=${r2}`;
  }
  get Fo() {
    return false;
  }
  Mo(e, t2, n2, r2, i) {
    const s2 = __PRIVATE_generateUniqueDebugId(), o2 = this.xo(e, t2.toUriEncodedString());
    __PRIVATE_logDebug("RestConnection", `Sending RPC '${e}' ${s2}:`, o2, n2);
    const _ = {
      "google-cloud-resource-prefix": this.vo,
      "x-goog-request-params": this.Co
    };
    return this.Oo(_, r2, i), this.No(e, o2, _, n2).then((t3) => (__PRIVATE_logDebug("RestConnection", `Received RPC '${e}' ${s2}: `, t3), t3), (t3) => {
      throw __PRIVATE_logWarn("RestConnection", `RPC '${e}' ${s2} failed with error: `, t3, "url: ", o2, "request:", n2), t3;
    });
  }
  Lo(e, t2, n2, r2, i, s2) {
    return this.Mo(e, t2, n2, r2, i);
  }
  /**
   * Modifies the headers for a request, adding any authorization token if
   * present and any additional headers for the request.
   */
  Oo(e, t2, n2) {
    e["X-Goog-Api-Client"] = // SDK_VERSION is updated to different value at runtime depending on the entry point,
    // so we need to get its value when we need it in a function.
    function __PRIVATE_getGoogApiClientValue() {
      return "gl-js/ fire/" + S;
    }(), // Content-Type: text/plain will avoid preflight requests which might
    // mess with CORS and redirects by proxies. If we add custom headers
    // we will need to change this code to potentially use the $httpOverwrite
    // parameter supported by ESF to avoid triggering preflight requests.
    e["Content-Type"] = "text/plain", this.databaseInfo.appId && (e["X-Firebase-GMPID"] = this.databaseInfo.appId), t2 && t2.headers.forEach((t3, n3) => e[n3] = t3), n2 && n2.headers.forEach((t3, n3) => e[n3] = t3);
  }
  xo(e, t2) {
    const n2 = fe[e];
    return `${this.Do}/v1/${t2}:${n2}`;
  }
  /**
   * Closes and cleans up any resources associated with the connection. This
   * implementation is a no-op because there are no resources associated
   * with the RestConnection that need to be cleaned up.
   */
  terminate() {
  }
} {
  constructor(e) {
    super(e), this.forceLongPolling = e.forceLongPolling, this.autoDetectLongPolling = e.autoDetectLongPolling, this.useFetchStreams = e.useFetchStreams, this.longPollingOptions = e.longPollingOptions;
  }
  No(e, t2, n2, r2) {
    const i = __PRIVATE_generateUniqueDebugId();
    return new Promise((s2, o2) => {
      const _ = new XhrIo();
      _.setWithCredentials(true), _.listenOnce(EventType.COMPLETE, () => {
        try {
          switch (_.getLastErrorCode()) {
            case ErrorCode.NO_ERROR:
              const t3 = _.getResponseJson();
              __PRIVATE_logDebug(ge, `XHR for RPC '${e}' ${i} received:`, JSON.stringify(t3)), s2(t3);
              break;
            case ErrorCode.TIMEOUT:
              __PRIVATE_logDebug(ge, `RPC '${e}' ${i} timed out`), o2(new FirestoreError(D.DEADLINE_EXCEEDED, "Request time out"));
              break;
            case ErrorCode.HTTP_ERROR:
              const n3 = _.getStatus();
              if (__PRIVATE_logDebug(ge, `RPC '${e}' ${i} failed with status:`, n3, "response text:", _.getResponseText()), n3 > 0) {
                let e2 = _.getResponseJson();
                Array.isArray(e2) && (e2 = e2[0]);
                const t4 = null == e2 ? void 0 : e2.error;
                if (t4 && t4.status && t4.message) {
                  const e3 = function __PRIVATE_mapCodeFromHttpResponseErrorStatus(e4) {
                    const t5 = e4.toLowerCase().replace(/_/g, "-");
                    return Object.values(D).indexOf(t5) >= 0 ? t5 : D.UNKNOWN;
                  }(t4.status);
                  o2(new FirestoreError(e3, t4.message));
                } else
                  o2(new FirestoreError(D.UNKNOWN, "Server responded with status " + _.getStatus()));
              } else
                o2(new FirestoreError(D.UNAVAILABLE, "Connection failed."));
              break;
            default:
              fail();
          }
        } finally {
          __PRIVATE_logDebug(ge, `RPC '${e}' ${i} completed.`);
        }
      });
      const a2 = JSON.stringify(r2);
      __PRIVATE_logDebug(ge, `RPC '${e}' ${i} sending request:`, r2), _.send(t2, "POST", a2, n2, 15);
    });
  }
  Bo(e, t2, n2) {
    const r2 = __PRIVATE_generateUniqueDebugId(), i = [this.Do, "/", "google.firestore.v1.Firestore", "/", e, "/channel"], s2 = createWebChannelTransport(), o2 = getStatEventTarget(), _ = {
      // Required for backend stickiness, routing behavior is based on this
      // parameter.
      httpSessionIdParam: "gsessionid",
      initMessageHeaders: {},
      messageUrlParams: {
        // This param is used to improve routing and project isolation by the
        // backend and must be included in every request.
        database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`
      },
      sendRawJson: true,
      supportsCrossDomainXhr: true,
      internalChannelParams: {
        // Override the default timeout (randomized between 10-20 seconds) since
        // a large write batch on a slow internet connection may take a long
        // time to send to the backend. Rather than have WebChannel impose a
        // tight timeout which could lead to infinite timeouts and retries, we
        // set it very large (5-10 minutes) and rely on the browser's builtin
        // timeouts to kick in if the request isn't working.
        forwardChannelRequestTimeoutMs: 6e5
      },
      forceLongPolling: this.forceLongPolling,
      detectBufferingProxy: this.autoDetectLongPolling
    }, a2 = this.longPollingOptions.timeoutSeconds;
    void 0 !== a2 && (_.longPollingTimeout = Math.round(1e3 * a2)), this.useFetchStreams && (_.useFetchStreams = true), this.Oo(_.initMessageHeaders, t2, n2), // Sending the custom headers we just added to request.initMessageHeaders
    // (Authorization, etc.) will trigger the browser to make a CORS preflight
    // request because the XHR will no longer meet the criteria for a "simple"
    // CORS request:
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
    // Therefore to avoid the CORS preflight request (an extra network
    // roundtrip), we use the encodeInitMessageHeaders option to specify that
    // the headers should instead be encoded in the request's POST payload,
    // which is recognized by the webchannel backend.
    _.encodeInitMessageHeaders = true;
    const u2 = i.join("");
    __PRIVATE_logDebug(ge, `Creating RPC '${e}' stream ${r2}: ${u2}`, _);
    const c2 = s2.createWebChannel(u2, _);
    let l = false, h2 = false;
    const P = new __PRIVATE_StreamBridge({
      Io: (t3) => {
        h2 ? __PRIVATE_logDebug(ge, `Not sending because RPC '${e}' stream ${r2} is closed:`, t3) : (l || (__PRIVATE_logDebug(ge, `Opening RPC '${e}' stream ${r2} transport.`), c2.open(), l = true), __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r2} sending:`, t3), c2.send(t3));
      },
      To: () => c2.close()
    }), __PRIVATE_unguardedEventListen = (e2, t3, n3) => {
      e2.listen(t3, (e3) => {
        try {
          n3(e3);
        } catch (e4) {
          setTimeout(() => {
            throw e4;
          }, 0);
        }
      });
    };
    return __PRIVATE_unguardedEventListen(c2, WebChannel.EventType.OPEN, () => {
      h2 || (__PRIVATE_logDebug(ge, `RPC '${e}' stream ${r2} transport opened.`), P.yo());
    }), __PRIVATE_unguardedEventListen(c2, WebChannel.EventType.CLOSE, () => {
      h2 || (h2 = true, __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r2} transport closed`), P.So());
    }), __PRIVATE_unguardedEventListen(c2, WebChannel.EventType.ERROR, (t3) => {
      h2 || (h2 = true, __PRIVATE_logWarn(ge, `RPC '${e}' stream ${r2} transport errored:`, t3), P.So(new FirestoreError(D.UNAVAILABLE, "The operation could not be completed")));
    }), __PRIVATE_unguardedEventListen(c2, WebChannel.EventType.MESSAGE, (t3) => {
      var n3;
      if (!h2) {
        const i2 = t3.data[0];
        __PRIVATE_hardAssert(!!i2);
        const s3 = i2, o3 = s3.error || (null === (n3 = s3[0]) || void 0 === n3 ? void 0 : n3.error);
        if (o3) {
          __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r2} received error:`, o3);
          const t4 = o3.status;
          let n4 = (
            /**
            * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
            *
            * @returns The Code equivalent to the given status string or undefined if
            *     there is no match.
            */
            function __PRIVATE_mapCodeFromRpcStatus(e2) {
              const t5 = le[e2];
              if (void 0 !== t5)
                return __PRIVATE_mapCodeFromRpcCode(t5);
            }(t4)
          ), i3 = o3.message;
          void 0 === n4 && (n4 = D.INTERNAL, i3 = "Unknown error status: " + t4 + " with message " + o3.message), // Mark closed so no further events are propagated
          h2 = true, P.So(new FirestoreError(n4, i3)), c2.close();
        } else
          __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r2} received:`, i2), P.bo(i2);
      }
    }), __PRIVATE_unguardedEventListen(o2, Event.STAT_EVENT, (t3) => {
      t3.stat === Stat.PROXY ? __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r2} detected buffering proxy`) : t3.stat === Stat.NOPROXY && __PRIVATE_logDebug(ge, `RPC '${e}' stream ${r2} detected no buffering proxy`);
    }), setTimeout(() => {
      P.wo();
    }, 0), P;
  }
};
function getDocument() {
  return "undefined" != typeof document ? document : null;
}
function __PRIVATE_newSerializer(e) {
  return new JsonProtoSerializer(
    e,
    /* useProto3Json= */
    true
  );
}
var __PRIVATE_ExponentialBackoff = class {
  constructor(e, t2, n2 = 1e3, r2 = 1.5, i = 6e4) {
    this.ui = e, this.timerId = t2, this.ko = n2, this.qo = r2, this.Qo = i, this.Ko = 0, this.$o = null, /** The last backoff attempt, as epoch milliseconds. */
    this.Uo = Date.now(), this.reset();
  }
  /**
   * Resets the backoff delay.
   *
   * The very next backoffAndWait() will have no delay. If it is called again
   * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
   * subsequent ones will increase according to the backoffFactor.
   */
  reset() {
    this.Ko = 0;
  }
  /**
   * Resets the backoff delay to the maximum delay (e.g. for use after a
   * RESOURCE_EXHAUSTED error).
   */
  Wo() {
    this.Ko = this.Qo;
  }
  /**
   * Returns a promise that resolves after currentDelayMs, and increases the
   * delay for any subsequent attempts. If there was a pending backoff operation
   * already, it will be canceled.
   */
  Go(e) {
    this.cancel();
    const t2 = Math.floor(this.Ko + this.zo()), n2 = Math.max(0, Date.now() - this.Uo), r2 = Math.max(0, t2 - n2);
    r2 > 0 && __PRIVATE_logDebug("ExponentialBackoff", `Backing off for ${r2} ms (base delay: ${this.Ko} ms, delay with jitter: ${t2} ms, last attempt: ${n2} ms ago)`), this.$o = this.ui.enqueueAfterDelay(this.timerId, r2, () => (this.Uo = Date.now(), e())), // Apply backoff factor to determine next delay and ensure it is within
    // bounds.
    this.Ko *= this.qo, this.Ko < this.ko && (this.Ko = this.ko), this.Ko > this.Qo && (this.Ko = this.Qo);
  }
  jo() {
    null !== this.$o && (this.$o.skipDelay(), this.$o = null);
  }
  cancel() {
    null !== this.$o && (this.$o.cancel(), this.$o = null);
  }
  /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */
  zo() {
    return (Math.random() - 0.5) * this.Ko;
  }
};
var __PRIVATE_DatastoreImpl = class extends class Datastore {
} {
  constructor(e, t2, n2, r2) {
    super(), this.authCredentials = e, this.appCheckCredentials = t2, this.connection = n2, this.serializer = r2, this.y_ = false;
  }
  w_() {
    if (this.y_)
      throw new FirestoreError(D.FAILED_PRECONDITION, "The client has already been terminated.");
  }
  /** Invokes the provided RPC with auth and AppCheck tokens. */
  Mo(e, t2, n2, r2) {
    return this.w_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([i, s2]) => this.connection.Mo(e, __PRIVATE_toResourcePath(t2, n2), r2, i, s2)).catch((e2) => {
      throw "FirebaseError" === e2.name ? (e2.code === D.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e2) : new FirestoreError(D.UNKNOWN, e2.toString());
    });
  }
  /** Invokes the provided RPC with streamed results with auth and AppCheck tokens. */
  Lo(e, t2, n2, r2, i) {
    return this.w_(), Promise.all([this.authCredentials.getToken(), this.appCheckCredentials.getToken()]).then(([s2, o2]) => this.connection.Lo(e, __PRIVATE_toResourcePath(t2, n2), r2, s2, o2, i)).catch((e2) => {
      throw "FirebaseError" === e2.name ? (e2.code === D.UNAUTHENTICATED && (this.authCredentials.invalidateToken(), this.appCheckCredentials.invalidateToken()), e2) : new FirestoreError(D.UNKNOWN, e2.toString());
    });
  }
  terminate() {
    this.y_ = true, this.connection.terminate();
  }
};
var __PRIVATE_OnlineStateTracker = class {
  constructor(e, t2) {
    this.asyncQueue = e, this.onlineStateHandler = t2, /** The current OnlineState. */
    this.state = "Unknown", /**
     * A count of consecutive failures to open the stream. If it reaches the
     * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
     * Offline.
     */
    this.S_ = 0, /**
     * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
     * transition from OnlineState.Unknown to OnlineState.Offline without waiting
     * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
     */
    this.b_ = null, /**
     * Whether the client should log a warning message if it fails to connect to
     * the backend (initially true, cleared after a successful stream, or if we've
     * logged the message already).
     */
    this.D_ = true;
  }
  /**
   * Called by RemoteStore when a watch stream is started (including on each
   * backoff attempt).
   *
   * If this is the first attempt, it sets the OnlineState to Unknown and starts
   * the onlineStateTimer.
   */
  v_() {
    0 === this.S_ && (this.C_(
      "Unknown"
      /* OnlineState.Unknown */
    ), this.b_ = this.asyncQueue.enqueueAfterDelay("online_state_timeout", 1e4, () => (this.b_ = null, this.F_("Backend didn't respond within 10 seconds."), this.C_(
      "Offline"
      /* OnlineState.Offline */
    ), Promise.resolve())));
  }
  /**
   * Updates our OnlineState as appropriate after the watch stream reports a
   * failure. The first failure moves us to the 'Unknown' state. We then may
   * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
   * actually transition to the 'Offline' state.
   */
  M_(e) {
    "Online" === this.state ? this.C_(
      "Unknown"
      /* OnlineState.Unknown */
    ) : (this.S_++, this.S_ >= 1 && (this.x_(), this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`), this.C_(
      "Offline"
      /* OnlineState.Offline */
    )));
  }
  /**
   * Explicitly sets the OnlineState to the specified state.
   *
   * Note that this resets our timers / failure counters, etc. used by our
   * Offline heuristics, so must not be used in place of
   * handleWatchStreamStart() and handleWatchStreamFailure().
   */
  set(e) {
    this.x_(), this.S_ = 0, "Online" === e && // We've connected to watch at least once. Don't warn the developer
    // about being offline going forward.
    (this.D_ = false), this.C_(e);
  }
  C_(e) {
    e !== this.state && (this.state = e, this.onlineStateHandler(e));
  }
  F_(e) {
    const t2 = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
    this.D_ ? (__PRIVATE_logError(t2), this.D_ = false) : __PRIVATE_logDebug("OnlineStateTracker", t2);
  }
  x_() {
    null !== this.b_ && (this.b_.cancel(), this.b_ = null);
  }
};
var __PRIVATE_RemoteStoreImpl = class {
  constructor(e, t2, n2, r2, i) {
    this.localStore = e, this.datastore = t2, this.asyncQueue = n2, this.remoteSyncer = {}, /**
     * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
     * LocalStore via fillWritePipeline() and have or will send to the write
     * stream.
     *
     * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
     * restart the write stream. When the stream is established the writes in the
     * pipeline will be sent in order.
     *
     * Writes remain in writePipeline until they are acknowledged by the backend
     * and thus will automatically be re-sent if the stream is interrupted /
     * restarted before they're acknowledged.
     *
     * Write responses from the backend are linked to their originating request
     * purely based on order, and so we can just shift() writes from the front of
     * the writePipeline as we receive responses.
     */
    this.O_ = [], /**
     * A mapping of watched targets that the client cares about tracking and the
     * user has explicitly called a 'listen' for this target.
     *
     * These targets may or may not have been sent to or acknowledged by the
     * server. On re-establishing the listen stream, these targets should be sent
     * to the server. The targets removed with unlistens are removed eagerly
     * without waiting for confirmation from the listen stream.
     */
    this.N_ = /* @__PURE__ */ new Map(), /**
     * A set of reasons for why the RemoteStore may be offline. If empty, the
     * RemoteStore may start its network connections.
     */
    this.L_ = /* @__PURE__ */ new Set(), /**
     * Event handlers that get called when the network is disabled or enabled.
     *
     * PORTING NOTE: These functions are used on the Web client to create the
     * underlying streams (to support tree-shakeable streams). On Android and iOS,
     * the streams are created during construction of RemoteStore.
     */
    this.B_ = [], this.k_ = i, this.k_._o((e2) => {
      n2.enqueueAndForget(async () => {
        __PRIVATE_canUseNetwork(this) && (__PRIVATE_logDebug("RemoteStore", "Restarting streams for network reachability change."), await async function __PRIVATE_restartNetwork(e3) {
          const t3 = __PRIVATE_debugCast(e3);
          t3.L_.add(
            4
            /* OfflineCause.ConnectivityChange */
          ), await __PRIVATE_disableNetworkInternal(t3), t3.q_.set(
            "Unknown"
            /* OnlineState.Unknown */
          ), t3.L_.delete(
            4
            /* OfflineCause.ConnectivityChange */
          ), await __PRIVATE_enableNetworkInternal(t3);
        }(this));
      });
    }), this.q_ = new __PRIVATE_OnlineStateTracker(n2, r2);
  }
};
async function __PRIVATE_enableNetworkInternal(e) {
  if (__PRIVATE_canUseNetwork(e))
    for (const t2 of e.B_)
      await t2(
        /* enabled= */
        true
      );
}
async function __PRIVATE_disableNetworkInternal(e) {
  for (const t2 of e.B_)
    await t2(
      /* enabled= */
      false
    );
}
function __PRIVATE_canUseNetwork(e) {
  return 0 === __PRIVATE_debugCast(e).L_.size;
}
async function __PRIVATE_remoteStoreApplyPrimaryState(e, t2) {
  const n2 = __PRIVATE_debugCast(e);
  t2 ? (n2.L_.delete(
    2
    /* OfflineCause.IsSecondary */
  ), await __PRIVATE_enableNetworkInternal(n2)) : t2 || (n2.L_.add(
    2
    /* OfflineCause.IsSecondary */
  ), await __PRIVATE_disableNetworkInternal(n2), n2.q_.set(
    "Unknown"
    /* OnlineState.Unknown */
  ));
}
var DelayedOperation = class {
  constructor(e, t2, n2, r2, i) {
    this.asyncQueue = e, this.timerId = t2, this.targetTimeMs = n2, this.op = r2, this.removalCallback = i, this.deferred = new __PRIVATE_Deferred(), this.then = this.deferred.promise.then.bind(this.deferred.promise), // It's normal for the deferred promise to be canceled (due to cancellation)
    // and so we attach a dummy catch callback to avoid
    // 'UnhandledPromiseRejectionWarning' log spam.
    this.deferred.promise.catch((e2) => {
    });
  }
  get promise() {
    return this.deferred.promise;
  }
  /**
   * Creates and returns a DelayedOperation that has been scheduled to be
   * executed on the provided asyncQueue after the provided delayMs.
   *
   * @param asyncQueue - The queue to schedule the operation on.
   * @param id - A Timer ID identifying the type of operation this is.
   * @param delayMs - The delay (ms) before the operation should be scheduled.
   * @param op - The operation to run.
   * @param removalCallback - A callback to be called synchronously once the
   *   operation is executed or canceled, notifying the AsyncQueue to remove it
   *   from its delayedOperations list.
   *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
   *   the DelayedOperation class public.
   */
  static createAndSchedule(e, t2, n2, r2, i) {
    const s2 = Date.now() + n2, o2 = new DelayedOperation(e, t2, s2, r2, i);
    return o2.start(n2), o2;
  }
  /**
   * Starts the timer. This is called immediately after construction by
   * createAndSchedule().
   */
  start(e) {
    this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
  }
  /**
   * Queues the operation to run immediately (if it hasn't already been run or
   * canceled).
   */
  skipDelay() {
    return this.handleDelayElapsed();
  }
  /**
   * Cancels the operation if it hasn't already been executed or canceled. The
   * promise will be rejected.
   *
   * As long as the operation has not yet been run, calling cancel() provides a
   * guarantee that the operation will not be run.
   */
  cancel(e) {
    null !== this.timerHandle && (this.clearTimeout(), this.deferred.reject(new FirestoreError(D.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))));
  }
  handleDelayElapsed() {
    this.asyncQueue.enqueueAndForget(() => null !== this.timerHandle ? (this.clearTimeout(), this.op().then((e) => this.deferred.resolve(e))) : Promise.resolve());
  }
  clearTimeout() {
    null !== this.timerHandle && (this.removalCallback(this), clearTimeout(this.timerHandle), this.timerHandle = null);
  }
};
var __PRIVATE_EventManagerImpl = class {
  constructor() {
    this.queries = __PRIVATE_newQueriesObjectMap(), this.onlineState = "Unknown", this.Y_ = /* @__PURE__ */ new Set();
  }
  terminate() {
    !function __PRIVATE_errorAllTargets(e, t2) {
      const n2 = __PRIVATE_debugCast(e), r2 = n2.queries;
      n2.queries = __PRIVATE_newQueriesObjectMap(), r2.forEach((e2, n3) => {
        for (const e3 of n3.j_)
          e3.onError(t2);
      });
    }(this, new FirestoreError(D.ABORTED, "Firestore shutting down"));
  }
};
function __PRIVATE_newQueriesObjectMap() {
  return new ObjectMap((e) => __PRIVATE_canonifyQuery(e), __PRIVATE_queryEquals);
}
function __PRIVATE_raiseSnapshotsInSyncEvent(e) {
  e.Y_.forEach((e2) => {
    e2.next();
  });
}
var pe;
var ye;
(ye = pe || (pe = {})).ea = "default", /** Listen to changes in cache only */
ye.Cache = "cache";
var __PRIVATE_SyncEngineImpl = class {
  constructor(e, t2, n2, r2, i, s2) {
    this.localStore = e, this.remoteStore = t2, this.eventManager = n2, this.sharedClientState = r2, this.currentUser = i, this.maxConcurrentLimboResolutions = s2, this.Ca = {}, this.Fa = new ObjectMap((e2) => __PRIVATE_canonifyQuery(e2), __PRIVATE_queryEquals), this.Ma = /* @__PURE__ */ new Map(), /**
     * The keys of documents that are in limbo for which we haven't yet started a
     * limbo resolution query. The strings in this set are the result of calling
     * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
     *
     * The `Set` type was chosen because it provides efficient lookup and removal
     * of arbitrary elements and it also maintains insertion order, providing the
     * desired queue-like FIFO semantics.
     */
    this.xa = /* @__PURE__ */ new Set(), /**
     * Keeps track of the target ID for each document that is in limbo with an
     * active target.
     */
    this.Oa = new SortedMap(DocumentKey.comparator), /**
     * Keeps track of the information about an active limbo resolution for each
     * active target ID that was started for the purpose of limbo resolution.
     */
    this.Na = /* @__PURE__ */ new Map(), this.La = new __PRIVATE_ReferenceSet(), /** Stores user completion handlers, indexed by User and BatchId. */
    this.Ba = {}, /** Stores user callbacks waiting for all pending writes to be acknowledged. */
    this.ka = /* @__PURE__ */ new Map(), this.qa = __PRIVATE_TargetIdGenerator.kn(), this.onlineState = "Unknown", // The primary state is set to `true` or `false` immediately after Firestore
    // startup. In the interim, a client should only be considered primary if
    // `isPrimary` is true.
    this.Qa = void 0;
  }
  get isPrimaryClient() {
    return true === this.Qa;
  }
};
function __PRIVATE_syncEngineApplyOnlineStateChange(e, t2, n2) {
  const r2 = __PRIVATE_debugCast(e);
  if (r2.isPrimaryClient && 0 === n2 || !r2.isPrimaryClient && 1 === n2) {
    const e2 = [];
    r2.Fa.forEach((n3, r3) => {
      const i = r3.view.Z_(t2);
      i.snapshot && e2.push(i.snapshot);
    }), function __PRIVATE_eventManagerOnOnlineStateChange(e3, t3) {
      const n3 = __PRIVATE_debugCast(e3);
      n3.onlineState = t3;
      let r3 = false;
      n3.queries.forEach((e4, n4) => {
        for (const e5 of n4.j_)
          e5.Z_(t3) && (r3 = true);
      }), r3 && __PRIVATE_raiseSnapshotsInSyncEvent(n3);
    }(r2.eventManager, t2), e2.length && r2.Ca.d_(e2), r2.onlineState = t2, r2.isPrimaryClient && r2.sharedClientState.setOnlineState(t2);
  }
}
async function __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(e, t2, n2) {
  const r2 = __PRIVATE_debugCast(e), i = [], s2 = [], o2 = [];
  r2.Fa.isEmpty() || (r2.Fa.forEach((e2, _) => {
    o2.push(r2.Ka(_, t2, n2).then((e3) => {
      var t3;
      if ((e3 || n2) && r2.isPrimaryClient) {
        const i2 = e3 ? !e3.fromCache : null === (t3 = null == n2 ? void 0 : n2.targetChanges.get(_.targetId)) || void 0 === t3 ? void 0 : t3.current;
        r2.sharedClientState.updateQueryState(_.targetId, i2 ? "current" : "not-current");
      }
      if (e3) {
        i.push(e3);
        const t4 = __PRIVATE_LocalViewChanges.Wi(_.targetId, e3);
        s2.push(t4);
      }
    }));
  }), await Promise.all(o2), r2.Ca.d_(i), await async function __PRIVATE_localStoreNotifyLocalViewChanges(e2, t3) {
    const n3 = __PRIVATE_debugCast(e2);
    try {
      await n3.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (e3) => PersistencePromise.forEach(t3, (t4) => PersistencePromise.forEach(t4.$i, (r3) => n3.persistence.referenceDelegate.addReference(e3, t4.targetId, r3)).next(() => PersistencePromise.forEach(t4.Ui, (r3) => n3.persistence.referenceDelegate.removeReference(e3, t4.targetId, r3)))));
    } catch (e3) {
      if (!__PRIVATE_isIndexedDbTransactionError(e3))
        throw e3;
      __PRIVATE_logDebug("LocalStore", "Failed to update sequence numbers: " + e3);
    }
    for (const e3 of t3) {
      const t4 = e3.targetId;
      if (!e3.fromCache) {
        const e4 = n3.os.get(t4), r3 = e4.snapshotVersion, i2 = e4.withLastLimboFreeSnapshotVersion(r3);
        n3.os = n3.os.insert(t4, i2);
      }
    }
  }(r2.localStore, s2));
}
async function __PRIVATE_syncEngineHandleCredentialChange(e, t2) {
  const n2 = __PRIVATE_debugCast(e);
  if (!n2.currentUser.isEqual(t2)) {
    __PRIVATE_logDebug("SyncEngine", "User change. New user:", t2.toKey());
    const e2 = await __PRIVATE_localStoreHandleUserChange(n2.localStore, t2);
    n2.currentUser = t2, // Fails tasks waiting for pending writes requested by previous user.
    function __PRIVATE_rejectOutstandingPendingWritesCallbacks(e3, t3) {
      e3.ka.forEach((e4) => {
        e4.forEach((e5) => {
          e5.reject(new FirestoreError(D.CANCELLED, t3));
        });
      }), e3.ka.clear();
    }(n2, "'waitForPendingWrites' promise is rejected due to a user change."), // TODO(b/114226417): Consider calling this only in the primary tab.
    n2.sharedClientState.handleUserChange(t2, e2.removedBatchIds, e2.addedBatchIds), await __PRIVATE_syncEngineEmitNewSnapsAndNotifyLocalStore(n2, e2.hs);
  }
}
var __PRIVATE_MemoryOfflineComponentProvider = class {
  constructor() {
    this.kind = "memory", this.synchronizeTabs = false;
  }
  async initialize(e) {
    this.serializer = __PRIVATE_newSerializer(e.databaseInfo.databaseId), this.sharedClientState = this.Wa(e), this.persistence = this.Ga(e), await this.persistence.start(), this.localStore = this.za(e), this.gcScheduler = this.ja(e, this.localStore), this.indexBackfillerScheduler = this.Ha(e, this.localStore);
  }
  ja(e, t2) {
    return null;
  }
  Ha(e, t2) {
    return null;
  }
  za(e) {
    return __PRIVATE_newLocalStore(this.persistence, new __PRIVATE_QueryEngine(), e.initialUser, this.serializer);
  }
  Ga(e) {
    return new __PRIVATE_MemoryPersistence(__PRIVATE_MemoryEagerDelegate.Zr, this.serializer);
  }
  Wa(e) {
    return new __PRIVATE_MemorySharedClientState();
  }
  async terminate() {
    var e, t2;
    null === (e = this.gcScheduler) || void 0 === e || e.stop(), null === (t2 = this.indexBackfillerScheduler) || void 0 === t2 || t2.stop(), this.sharedClientState.shutdown(), await this.persistence.shutdown();
  }
};
__PRIVATE_MemoryOfflineComponentProvider.provider = {
  build: () => new __PRIVATE_MemoryOfflineComponentProvider()
};
var OnlineComponentProvider = class {
  async initialize(e, t2) {
    this.localStore || (this.localStore = e.localStore, this.sharedClientState = e.sharedClientState, this.datastore = this.createDatastore(t2), this.remoteStore = this.createRemoteStore(t2), this.eventManager = this.createEventManager(t2), this.syncEngine = this.createSyncEngine(
      t2,
      /* startAsPrimary=*/
      !e.synchronizeTabs
    ), this.sharedClientState.onlineStateHandler = (e2) => __PRIVATE_syncEngineApplyOnlineStateChange(
      this.syncEngine,
      e2,
      1
      /* OnlineStateSource.SharedClientState */
    ), this.remoteStore.remoteSyncer.handleCredentialChange = __PRIVATE_syncEngineHandleCredentialChange.bind(null, this.syncEngine), await __PRIVATE_remoteStoreApplyPrimaryState(this.remoteStore, this.syncEngine.isPrimaryClient));
  }
  createEventManager(e) {
    return function __PRIVATE_newEventManager() {
      return new __PRIVATE_EventManagerImpl();
    }();
  }
  createDatastore(e) {
    const t2 = __PRIVATE_newSerializer(e.databaseInfo.databaseId), n2 = function __PRIVATE_newConnection(e2) {
      return new __PRIVATE_WebChannelConnection(e2);
    }(e.databaseInfo);
    return function __PRIVATE_newDatastore(e2, t3, n3, r2) {
      return new __PRIVATE_DatastoreImpl(e2, t3, n3, r2);
    }(e.authCredentials, e.appCheckCredentials, n2, t2);
  }
  createRemoteStore(e) {
    return function __PRIVATE_newRemoteStore(e2, t2, n2, r2, i) {
      return new __PRIVATE_RemoteStoreImpl(e2, t2, n2, r2, i);
    }(this.localStore, this.datastore, e.asyncQueue, (e2) => __PRIVATE_syncEngineApplyOnlineStateChange(
      this.syncEngine,
      e2,
      0
      /* OnlineStateSource.RemoteStore */
    ), function __PRIVATE_newConnectivityMonitor() {
      return __PRIVATE_BrowserConnectivityMonitor.D() ? new __PRIVATE_BrowserConnectivityMonitor() : new __PRIVATE_NoopConnectivityMonitor();
    }());
  }
  createSyncEngine(e, t2) {
    return function __PRIVATE_newSyncEngine(e2, t3, n2, r2, i, s2, o2) {
      const _ = new __PRIVATE_SyncEngineImpl(e2, t3, n2, r2, i, s2);
      return o2 && (_.Qa = true), _;
    }(this.localStore, this.remoteStore, this.eventManager, this.sharedClientState, e.initialUser, e.maxConcurrentLimboResolutions, t2);
  }
  async terminate() {
    var e, t2;
    await async function __PRIVATE_remoteStoreShutdown(e2) {
      const t3 = __PRIVATE_debugCast(e2);
      __PRIVATE_logDebug("RemoteStore", "RemoteStore shutting down."), t3.L_.add(
        5
        /* OfflineCause.Shutdown */
      ), await __PRIVATE_disableNetworkInternal(t3), t3.k_.shutdown(), // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
      // triggering spurious listener events with cached data, etc.
      t3.q_.set(
        "Unknown"
        /* OnlineState.Unknown */
      );
    }(this.remoteStore), null === (e = this.datastore) || void 0 === e || e.terminate(), null === (t2 = this.eventManager) || void 0 === t2 || t2.terminate();
  }
};
OnlineComponentProvider.provider = {
  build: () => new OnlineComponentProvider()
};
function __PRIVATE_cloneLongPollingOptions(e) {
  const t2 = {};
  return void 0 !== e.timeoutSeconds && (t2.timeoutSeconds = e.timeoutSeconds), t2;
}
var we = /* @__PURE__ */ new Map();
function __PRIVATE_validateIsNotUsedTogether(e, t2, n2, r2) {
  if (true === t2 && true === r2)
    throw new FirestoreError(D.INVALID_ARGUMENT, `${e} and ${n2} cannot be used together.`);
}
var FirestoreSettingsImpl = class {
  constructor(e) {
    var t2, n2;
    if (void 0 === e.host) {
      if (void 0 !== e.ssl)
        throw new FirestoreError(D.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
      this.host = "firestore.googleapis.com", this.ssl = true;
    } else
      this.host = e.host, this.ssl = null === (t2 = e.ssl) || void 0 === t2 || t2;
    if (this.credentials = e.credentials, this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties, this.localCache = e.localCache, void 0 === e.cacheSizeBytes)
      this.cacheSizeBytes = 41943040;
    else {
      if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576)
        throw new FirestoreError(D.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
      this.cacheSizeBytes = e.cacheSizeBytes;
    }
    __PRIVATE_validateIsNotUsedTogether("experimentalForceLongPolling", e.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", e.experimentalAutoDetectLongPolling), this.experimentalForceLongPolling = !!e.experimentalForceLongPolling, this.experimentalForceLongPolling ? this.experimentalAutoDetectLongPolling = false : void 0 === e.experimentalAutoDetectLongPolling ? this.experimentalAutoDetectLongPolling = true : (
      // For backwards compatibility, coerce the value to boolean even though
      // the TypeScript compiler has narrowed the type to boolean already.
      // noinspection PointlessBooleanExpressionJS
      this.experimentalAutoDetectLongPolling = !!e.experimentalAutoDetectLongPolling
    ), this.experimentalLongPollingOptions = __PRIVATE_cloneLongPollingOptions(null !== (n2 = e.experimentalLongPollingOptions) && void 0 !== n2 ? n2 : {}), function __PRIVATE_validateLongPollingOptions(e2) {
      if (void 0 !== e2.timeoutSeconds) {
        if (isNaN(e2.timeoutSeconds))
          throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (must not be NaN)`);
        if (e2.timeoutSeconds < 5)
          throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (minimum allowed value is 5)`);
        if (e2.timeoutSeconds > 30)
          throw new FirestoreError(D.INVALID_ARGUMENT, `invalid long polling timeout: ${e2.timeoutSeconds} (maximum allowed value is 30)`);
      }
    }(this.experimentalLongPollingOptions), this.useFetchStreams = !!e.useFetchStreams;
  }
  isEqual(e) {
    return this.host === e.host && this.ssl === e.ssl && this.credentials === e.credentials && this.cacheSizeBytes === e.cacheSizeBytes && this.experimentalForceLongPolling === e.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === e.experimentalAutoDetectLongPolling && function __PRIVATE_longPollingOptionsEqual(e2, t2) {
      return e2.timeoutSeconds === t2.timeoutSeconds;
    }(this.experimentalLongPollingOptions, e.experimentalLongPollingOptions) && this.ignoreUndefinedProperties === e.ignoreUndefinedProperties && this.useFetchStreams === e.useFetchStreams;
  }
};
var Firestore$1 = class {
  /** @hideconstructor */
  constructor(e, t2, n2, r2) {
    this._authCredentials = e, this._appCheckCredentials = t2, this._databaseId = n2, this._app = r2, /**
     * Whether it's a Firestore or Firestore Lite instance.
     */
    this.type = "firestore-lite", this._persistenceKey = "(lite)", this._settings = new FirestoreSettingsImpl({}), this._settingsFrozen = false, // A task that is assigned when the terminate() is invoked and resolved when
    // all components have shut down. Otherwise, Firestore is not terminated,
    // which can mean either the FirestoreClient is in the process of starting,
    // or restarting.
    this._terminateTask = "notTerminated";
  }
  /**
   * The {@link @firebase/app#FirebaseApp} associated with this `Firestore` service
   * instance.
   */
  get app() {
    if (!this._app)
      throw new FirestoreError(D.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
    return this._app;
  }
  get _initialized() {
    return this._settingsFrozen;
  }
  get _terminated() {
    return "notTerminated" !== this._terminateTask;
  }
  _setSettings(e) {
    if (this._settingsFrozen)
      throw new FirestoreError(D.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
    this._settings = new FirestoreSettingsImpl(e), void 0 !== e.credentials && (this._authCredentials = function __PRIVATE_makeAuthCredentialsProvider(e2) {
      if (!e2)
        return new __PRIVATE_EmptyAuthCredentialsProvider();
      switch (e2.type) {
        case "firstParty":
          return new __PRIVATE_FirstPartyAuthCredentialsProvider(e2.sessionIndex || "0", e2.iamToken || null, e2.authTokenFactory || null);
        case "provider":
          return e2.client;
        default:
          throw new FirestoreError(D.INVALID_ARGUMENT, "makeAuthCredentialsProvider failed due to invalid credential type");
      }
    }(e.credentials));
  }
  _getSettings() {
    return this._settings;
  }
  _freezeSettings() {
    return this._settingsFrozen = true, this._settings;
  }
  _delete() {
    return "notTerminated" === this._terminateTask && (this._terminateTask = this._terminate()), this._terminateTask;
  }
  async _restart() {
    "notTerminated" === this._terminateTask ? await this._terminate() : this._terminateTask = "notTerminated";
  }
  /** Returns a JSON-serializable representation of this `Firestore` instance. */
  toJSON() {
    return {
      app: this._app,
      databaseId: this._databaseId,
      settings: this._settings
    };
  }
  /**
   * Terminates all components used by this client. Subclasses can override
   * this method to clean up their own dependencies, but must also call this
   * method.
   *
   * Only ever called once.
   */
  _terminate() {
    return function __PRIVATE_removeComponents(e) {
      const t2 = we.get(e);
      t2 && (__PRIVATE_logDebug("ComponentProvider", "Removing Datastore"), we.delete(e), t2.terminate());
    }(this), Promise.resolve();
  }
};
var __PRIVATE_AsyncQueueImpl = class {
  constructor(e = Promise.resolve()) {
    this.Pu = [], // Is this AsyncQueue being shut down? Once it is set to true, it will not
    // be changed again.
    this.Iu = false, // Operations scheduled to be queued in the future. Operations are
    // automatically removed after they are run or canceled.
    this.Tu = [], // visible for testing
    this.Eu = null, // Flag set while there's an outstanding AsyncQueue operation, used for
    // assertion sanity-checks.
    this.du = false, // Enabled during shutdown on Safari to prevent future access to IndexedDB.
    this.Au = false, // List of TimerIds to fast-forward delays for.
    this.Ru = [], // Backoff timer used to schedule retries for retryable operations
    this.t_ = new __PRIVATE_ExponentialBackoff(
      this,
      "async_queue_retry"
      /* TimerId.AsyncQueueRetry */
    ), // Visibility handler that triggers an immediate retry of all retryable
    // operations. Meant to speed up recovery when we regain file system access
    // after page comes into foreground.
    this.Vu = () => {
      const e2 = getDocument();
      e2 && __PRIVATE_logDebug("AsyncQueue", "Visibility state changed to " + e2.visibilityState), this.t_.jo();
    }, this.mu = e;
    const t2 = getDocument();
    t2 && "function" == typeof t2.addEventListener && t2.addEventListener("visibilitychange", this.Vu);
  }
  get isShuttingDown() {
    return this.Iu;
  }
  /**
   * Adds a new operation to the queue without waiting for it to complete (i.e.
   * we ignore the Promise result).
   */
  enqueueAndForget(e) {
    this.enqueue(e);
  }
  enqueueAndForgetEvenWhileRestricted(e) {
    this.fu(), // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.gu(e);
  }
  enterRestrictedMode(e) {
    if (!this.Iu) {
      this.Iu = true, this.Au = e || false;
      const t2 = getDocument();
      t2 && "function" == typeof t2.removeEventListener && t2.removeEventListener("visibilitychange", this.Vu);
    }
  }
  enqueue(e) {
    if (this.fu(), this.Iu)
      return new Promise(() => {
      });
    const t2 = new __PRIVATE_Deferred();
    return this.gu(() => this.Iu && this.Au ? Promise.resolve() : (e().then(t2.resolve, t2.reject), t2.promise)).then(() => t2.promise);
  }
  enqueueRetryable(e) {
    this.enqueueAndForget(() => (this.Pu.push(e), this.pu()));
  }
  /**
   * Runs the next operation from the retryable queue. If the operation fails,
   * reschedules with backoff.
   */
  async pu() {
    if (0 !== this.Pu.length) {
      try {
        await this.Pu[0](), this.Pu.shift(), this.t_.reset();
      } catch (e) {
        if (!__PRIVATE_isIndexedDbTransactionError(e))
          throw e;
        __PRIVATE_logDebug("AsyncQueue", "Operation failed with retryable error: " + e);
      }
      this.Pu.length > 0 && // If there are additional operations, we re-schedule `retryNextOp()`.
      // This is necessary to run retryable operations that failed during
      // their initial attempt since we don't know whether they are already
      // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
      // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
      // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
      // call scheduled here.
      // Since `backoffAndRun()` cancels an existing backoff and schedules a
      // new backoff on every call, there is only ever a single additional
      // operation in the queue.
      this.t_.Go(() => this.pu());
    }
  }
  gu(e) {
    const t2 = this.mu.then(() => (this.du = true, e().catch((e2) => {
      this.Eu = e2, this.du = false;
      const t3 = (
        /**
        * Chrome includes Error.message in Error.stack. Other browsers do not.
        * This returns expected output of message + stack when available.
        * @param error - Error or FirestoreError
        */
        function __PRIVATE_getMessageOrStack(e3) {
          let t4 = e3.message || "";
          e3.stack && (t4 = e3.stack.includes(e3.message) ? e3.stack : e3.message + "\n" + e3.stack);
          return t4;
        }(e2)
      );
      throw __PRIVATE_logError("INTERNAL UNHANDLED ERROR: ", t3), e2;
    }).then((e2) => (this.du = false, e2))));
    return this.mu = t2, t2;
  }
  enqueueAfterDelay(e, t2, n2) {
    this.fu(), // Fast-forward delays for timerIds that have been overridden.
    this.Ru.indexOf(e) > -1 && (t2 = 0);
    const r2 = DelayedOperation.createAndSchedule(this, e, t2, n2, (e2) => this.yu(e2));
    return this.Tu.push(r2), r2;
  }
  fu() {
    this.Eu && fail();
  }
  verifyOperationInProgress() {
  }
  /**
   * Waits until all currently queued tasks are finished executing. Delayed
   * operations are not run.
   */
  async wu() {
    let e;
    do {
      e = this.mu, await e;
    } while (e !== this.mu);
  }
  /**
   * For Tests: Determine if a delayed operation with a particular TimerId
   * exists.
   */
  Su(e) {
    for (const t2 of this.Tu)
      if (t2.timerId === e)
        return true;
    return false;
  }
  /**
   * For Tests: Runs some or all delayed operations early.
   *
   * @param lastTimerId - Delayed operations up to and including this TimerId
   * will be drained. Pass TimerId.All to run all delayed operations.
   * @returns a Promise that resolves once all operations have been run.
   */
  bu(e) {
    return this.wu().then(() => {
      this.Tu.sort((e2, t2) => e2.targetTimeMs - t2.targetTimeMs);
      for (const t2 of this.Tu)
        if (t2.skipDelay(), "all" !== e && t2.timerId === e)
          break;
      return this.wu();
    });
  }
  /**
   * For Tests: Skip all subsequent delays for a timer id.
   */
  Du(e) {
    this.Ru.push(e);
  }
  /** Called once a DelayedOperation is run or canceled. */
  yu(e) {
    const t2 = this.Tu.indexOf(e);
    this.Tu.splice(t2, 1);
  }
};
var Firestore = class extends Firestore$1 {
  /** @hideconstructor */
  constructor(e, t2, n2, r2) {
    super(e, t2, n2, r2), /**
     * Whether it's a {@link Firestore} or Firestore Lite instance.
     */
    this.type = "firestore", this._queue = new __PRIVATE_AsyncQueueImpl(), this._persistenceKey = (null == r2 ? void 0 : r2.name) || "[DEFAULT]";
  }
  async _terminate() {
    if (this._firestoreClient) {
      const e = this._firestoreClient.terminate();
      this._queue = new __PRIVATE_AsyncQueueImpl(e), this._firestoreClient = void 0, await e;
    }
  }
};
function initializeFirestore(e, t2, n2) {
  n2 || (n2 = "(default)");
  const r2 = _getProvider(e, "firestore");
  if (r2.isInitialized(n2)) {
    const e2 = r2.getImmediate({
      identifier: n2
    }), i = r2.getOptions(n2);
    if (deepEqual(i, t2))
      return e2;
    throw new FirestoreError(D.FAILED_PRECONDITION, "initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.");
  }
  if (void 0 !== t2.cacheSizeBytes && void 0 !== t2.localCache)
    throw new FirestoreError(D.INVALID_ARGUMENT, "cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");
  if (void 0 !== t2.cacheSizeBytes && -1 !== t2.cacheSizeBytes && t2.cacheSizeBytes < 1048576)
    throw new FirestoreError(D.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
  return r2.initialize({
    options: t2,
    instanceIdentifier: n2
  });
}
var De = new RegExp("[~\\*/\\[\\]]");
!function __PRIVATE_registerFirestore(e, t2 = true) {
  !function __PRIVATE_setSDKVersion(e2) {
    S = e2;
  }(SDK_VERSION), _registerComponent(new Component("firestore", (e2, { instanceIdentifier: n2, options: r2 }) => {
    const i = e2.getProvider("app").getImmediate(), s2 = new Firestore(new __PRIVATE_FirebaseAuthCredentialsProvider(e2.getProvider("auth-internal")), new __PRIVATE_FirebaseAppCheckTokenProvider(e2.getProvider("app-check-internal")), function __PRIVATE_databaseIdFromApp(e3, t3) {
      if (!Object.prototype.hasOwnProperty.apply(e3.options, ["projectId"]))
        throw new FirestoreError(D.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
      return new DatabaseId(e3.options.projectId, t3);
    }(i, n2), i);
    return r2 = Object.assign({
      useFetchStreams: t2
    }, r2), s2._setSettings(r2), s2;
  }, "PUBLIC").setMultipleInstances(true)), registerVersion(w, "4.7.4", e), // BUILD_TARGET will be replaced by values like esm2017, cjs2017, etc during the compilation
  registerVersion(w, "4.7.4", "esm2017");
}();

// .firebase/firebaseConfig.js
init_modules_watch_stub();

// node_modules/firebase/app/dist/esm/index.esm.js
init_modules_watch_stub();
var name2 = "firebase";
var version2 = "11.0.1";
registerVersion(name2, version2, "app");

// node_modules/firebase/auth/dist/esm/index.esm.js
init_modules_watch_stub();

// node_modules/@firebase/auth/dist/esm2017/index.js
init_modules_watch_stub();

// node_modules/@firebase/auth/dist/esm2017/index-a7d5cfcc.js
init_modules_watch_stub();

// node_modules/tslib/tslib.es6.mjs
init_modules_watch_stub();
function __rest(s2, e) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p2 = Object.getOwnPropertySymbols(s2); i < p2.length; i++) {
      if (e.indexOf(p2[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i]))
        t2[p2[i]] = s2[p2[i]];
    }
  return t2;
}

// node_modules/@firebase/auth/dist/esm2017/index-a7d5cfcc.js
function _prodErrorMap() {
  return {
    [
      "dependent-sdk-initialized-before-auth"
      /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    ]: "Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."
  };
}
var prodErrorMap = _prodErrorMap;
var _DEFAULT_AUTH_ERROR_FACTORY = new ErrorFactory("auth", "Firebase", _prodErrorMap());
var logClient = new Logger("@firebase/auth");
function _logWarn(msg, ...args) {
  if (logClient.logLevel <= LogLevel.WARN) {
    logClient.warn(`Auth (${SDK_VERSION}): ${msg}`, ...args);
  }
}
function _logError(msg, ...args) {
  if (logClient.logLevel <= LogLevel.ERROR) {
    logClient.error(`Auth (${SDK_VERSION}): ${msg}`, ...args);
  }
}
function _fail(authOrCode, ...rest) {
  throw createErrorInternal(authOrCode, ...rest);
}
function _createError(authOrCode, ...rest) {
  return createErrorInternal(authOrCode, ...rest);
}
function _errorWithCustomMessage(auth2, code, message) {
  const errorMap = Object.assign(Object.assign({}, prodErrorMap()), { [code]: message });
  const factory = new ErrorFactory("auth", "Firebase", errorMap);
  return factory.create(code, {
    appName: auth2.name
  });
}
function _serverAppCurrentUserOperationNotSupportedError(auth2) {
  return _errorWithCustomMessage(auth2, "operation-not-supported-in-this-environment", "Operations that alter the current user are not supported in conjunction with FirebaseServerApp");
}
function createErrorInternal(authOrCode, ...rest) {
  if (typeof authOrCode !== "string") {
    const code = rest[0];
    const fullParams = [...rest.slice(1)];
    if (fullParams[0]) {
      fullParams[0].appName = authOrCode.name;
    }
    return authOrCode._errorFactory.create(code, ...fullParams);
  }
  return _DEFAULT_AUTH_ERROR_FACTORY.create(authOrCode, ...rest);
}
function _assert(assertion, authOrCode, ...rest) {
  if (!assertion) {
    throw createErrorInternal(authOrCode, ...rest);
  }
}
function debugFail(failure) {
  const message = `INTERNAL ASSERTION FAILED: ` + failure;
  _logError(message);
  throw new Error(message);
}
function debugAssert(assertion, message) {
  if (!assertion) {
    debugFail(message);
  }
}
function _getCurrentUrl() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.href) || "";
}
function _isHttpOrHttps() {
  return _getCurrentScheme() === "http:" || _getCurrentScheme() === "https:";
}
function _getCurrentScheme() {
  var _a;
  return typeof self !== "undefined" && ((_a = self.location) === null || _a === void 0 ? void 0 : _a.protocol) || null;
}
function _isOnline() {
  if (typeof navigator !== "undefined" && navigator && "onLine" in navigator && typeof navigator.onLine === "boolean" && // Apply only for traditional web apps and Chrome extensions.
  // This is especially true for Cordova apps which have unreliable
  // navigator.onLine behavior unless cordova-plugin-network-information is
  // installed which overwrites the native navigator.onLine value and
  // defines navigator.connection.
  (_isHttpOrHttps() || isBrowserExtension() || "connection" in navigator)) {
    return navigator.onLine;
  }
  return true;
}
function _getUserLanguage() {
  if (typeof navigator === "undefined") {
    return null;
  }
  const navigatorLanguage = navigator;
  return (
    // Most reliable, but only supported in Chrome/Firefox.
    navigatorLanguage.languages && navigatorLanguage.languages[0] || // Supported in most browsers, but returns the language of the browser
    // UI, not the language set in browser settings.
    navigatorLanguage.language || // Couldn't determine language.
    null
  );
}
var Delay = class {
  constructor(shortDelay, longDelay) {
    this.shortDelay = shortDelay;
    this.longDelay = longDelay;
    debugAssert(longDelay > shortDelay, "Short delay should be less than long delay!");
    this.isMobile = isMobileCordova() || isReactNative();
  }
  get() {
    if (!_isOnline()) {
      return Math.min(5e3, this.shortDelay);
    }
    return this.isMobile ? this.longDelay : this.shortDelay;
  }
};
function _emulatorUrl(config, path) {
  debugAssert(config.emulator, "Emulator should always be set here");
  const { url } = config.emulator;
  if (!path) {
    return url;
  }
  return `${url}${path.startsWith("/") ? path.slice(1) : path}`;
}
var FetchProvider = class {
  static initialize(fetchImpl, headersImpl, responseImpl) {
    this.fetchImpl = fetchImpl;
    if (headersImpl) {
      this.headersImpl = headersImpl;
    }
    if (responseImpl) {
      this.responseImpl = responseImpl;
    }
  }
  static fetch() {
    if (this.fetchImpl) {
      return this.fetchImpl;
    }
    if (typeof self !== "undefined" && "fetch" in self) {
      return self.fetch;
    }
    if (typeof globalThis !== "undefined" && globalThis.fetch) {
      return globalThis.fetch;
    }
    if (typeof fetch !== "undefined") {
      return fetch;
    }
    debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static headers() {
    if (this.headersImpl) {
      return this.headersImpl;
    }
    if (typeof self !== "undefined" && "Headers" in self) {
      return self.Headers;
    }
    if (typeof globalThis !== "undefined" && globalThis.Headers) {
      return globalThis.Headers;
    }
    if (typeof Headers !== "undefined") {
      return Headers;
    }
    debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
  static response() {
    if (this.responseImpl) {
      return this.responseImpl;
    }
    if (typeof self !== "undefined" && "Response" in self) {
      return self.Response;
    }
    if (typeof globalThis !== "undefined" && globalThis.Response) {
      return globalThis.Response;
    }
    if (typeof Response !== "undefined") {
      return Response;
    }
    debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill");
  }
};
var SERVER_ERROR_MAP = {
  // Custom token errors.
  [
    "CREDENTIAL_MISMATCH"
    /* ServerError.CREDENTIAL_MISMATCH */
  ]: "custom-token-mismatch",
  // This can only happen if the SDK sends a bad request.
  [
    "MISSING_CUSTOM_TOKEN"
    /* ServerError.MISSING_CUSTOM_TOKEN */
  ]: "internal-error",
  // Create Auth URI errors.
  [
    "INVALID_IDENTIFIER"
    /* ServerError.INVALID_IDENTIFIER */
  ]: "invalid-email",
  // This can only happen if the SDK sends a bad request.
  [
    "MISSING_CONTINUE_URI"
    /* ServerError.MISSING_CONTINUE_URI */
  ]: "internal-error",
  // Sign in with email and password errors (some apply to sign up too).
  [
    "INVALID_PASSWORD"
    /* ServerError.INVALID_PASSWORD */
  ]: "wrong-password",
  // This can only happen if the SDK sends a bad request.
  [
    "MISSING_PASSWORD"
    /* ServerError.MISSING_PASSWORD */
  ]: "missing-password",
  // Thrown if Email Enumeration Protection is enabled in the project and the email or password is
  // invalid.
  [
    "INVALID_LOGIN_CREDENTIALS"
    /* ServerError.INVALID_LOGIN_CREDENTIALS */
  ]: "invalid-credential",
  // Sign up with email and password errors.
  [
    "EMAIL_EXISTS"
    /* ServerError.EMAIL_EXISTS */
  ]: "email-already-in-use",
  [
    "PASSWORD_LOGIN_DISABLED"
    /* ServerError.PASSWORD_LOGIN_DISABLED */
  ]: "operation-not-allowed",
  // Verify assertion for sign in with credential errors:
  [
    "INVALID_IDP_RESPONSE"
    /* ServerError.INVALID_IDP_RESPONSE */
  ]: "invalid-credential",
  [
    "INVALID_PENDING_TOKEN"
    /* ServerError.INVALID_PENDING_TOKEN */
  ]: "invalid-credential",
  [
    "FEDERATED_USER_ID_ALREADY_LINKED"
    /* ServerError.FEDERATED_USER_ID_ALREADY_LINKED */
  ]: "credential-already-in-use",
  // This can only happen if the SDK sends a bad request.
  [
    "MISSING_REQ_TYPE"
    /* ServerError.MISSING_REQ_TYPE */
  ]: "internal-error",
  // Send Password reset email errors:
  [
    "EMAIL_NOT_FOUND"
    /* ServerError.EMAIL_NOT_FOUND */
  ]: "user-not-found",
  [
    "RESET_PASSWORD_EXCEED_LIMIT"
    /* ServerError.RESET_PASSWORD_EXCEED_LIMIT */
  ]: "too-many-requests",
  [
    "EXPIRED_OOB_CODE"
    /* ServerError.EXPIRED_OOB_CODE */
  ]: "expired-action-code",
  [
    "INVALID_OOB_CODE"
    /* ServerError.INVALID_OOB_CODE */
  ]: "invalid-action-code",
  // This can only happen if the SDK sends a bad request.
  [
    "MISSING_OOB_CODE"
    /* ServerError.MISSING_OOB_CODE */
  ]: "internal-error",
  // Operations that require ID token in request:
  [
    "CREDENTIAL_TOO_OLD_LOGIN_AGAIN"
    /* ServerError.CREDENTIAL_TOO_OLD_LOGIN_AGAIN */
  ]: "requires-recent-login",
  [
    "INVALID_ID_TOKEN"
    /* ServerError.INVALID_ID_TOKEN */
  ]: "invalid-user-token",
  [
    "TOKEN_EXPIRED"
    /* ServerError.TOKEN_EXPIRED */
  ]: "user-token-expired",
  [
    "USER_NOT_FOUND"
    /* ServerError.USER_NOT_FOUND */
  ]: "user-token-expired",
  // Other errors.
  [
    "TOO_MANY_ATTEMPTS_TRY_LATER"
    /* ServerError.TOO_MANY_ATTEMPTS_TRY_LATER */
  ]: "too-many-requests",
  [
    "PASSWORD_DOES_NOT_MEET_REQUIREMENTS"
    /* ServerError.PASSWORD_DOES_NOT_MEET_REQUIREMENTS */
  ]: "password-does-not-meet-requirements",
  // Phone Auth related errors.
  [
    "INVALID_CODE"
    /* ServerError.INVALID_CODE */
  ]: "invalid-verification-code",
  [
    "INVALID_SESSION_INFO"
    /* ServerError.INVALID_SESSION_INFO */
  ]: "invalid-verification-id",
  [
    "INVALID_TEMPORARY_PROOF"
    /* ServerError.INVALID_TEMPORARY_PROOF */
  ]: "invalid-credential",
  [
    "MISSING_SESSION_INFO"
    /* ServerError.MISSING_SESSION_INFO */
  ]: "missing-verification-id",
  [
    "SESSION_EXPIRED"
    /* ServerError.SESSION_EXPIRED */
  ]: "code-expired",
  // Other action code errors when additional settings passed.
  // MISSING_CONTINUE_URI is getting mapped to INTERNAL_ERROR above.
  // This is OK as this error will be caught by client side validation.
  [
    "MISSING_ANDROID_PACKAGE_NAME"
    /* ServerError.MISSING_ANDROID_PACKAGE_NAME */
  ]: "missing-android-pkg-name",
  [
    "UNAUTHORIZED_DOMAIN"
    /* ServerError.UNAUTHORIZED_DOMAIN */
  ]: "unauthorized-continue-uri",
  // getProjectConfig errors when clientId is passed.
  [
    "INVALID_OAUTH_CLIENT_ID"
    /* ServerError.INVALID_OAUTH_CLIENT_ID */
  ]: "invalid-oauth-client-id",
  // User actions (sign-up or deletion) disabled errors.
  [
    "ADMIN_ONLY_OPERATION"
    /* ServerError.ADMIN_ONLY_OPERATION */
  ]: "admin-restricted-operation",
  // Multi factor related errors.
  [
    "INVALID_MFA_PENDING_CREDENTIAL"
    /* ServerError.INVALID_MFA_PENDING_CREDENTIAL */
  ]: "invalid-multi-factor-session",
  [
    "MFA_ENROLLMENT_NOT_FOUND"
    /* ServerError.MFA_ENROLLMENT_NOT_FOUND */
  ]: "multi-factor-info-not-found",
  [
    "MISSING_MFA_ENROLLMENT_ID"
    /* ServerError.MISSING_MFA_ENROLLMENT_ID */
  ]: "missing-multi-factor-info",
  [
    "MISSING_MFA_PENDING_CREDENTIAL"
    /* ServerError.MISSING_MFA_PENDING_CREDENTIAL */
  ]: "missing-multi-factor-session",
  [
    "SECOND_FACTOR_EXISTS"
    /* ServerError.SECOND_FACTOR_EXISTS */
  ]: "second-factor-already-in-use",
  [
    "SECOND_FACTOR_LIMIT_EXCEEDED"
    /* ServerError.SECOND_FACTOR_LIMIT_EXCEEDED */
  ]: "maximum-second-factor-count-exceeded",
  // Blocking functions related errors.
  [
    "BLOCKING_FUNCTION_ERROR_RESPONSE"
    /* ServerError.BLOCKING_FUNCTION_ERROR_RESPONSE */
  ]: "internal-error",
  // Recaptcha related errors.
  [
    "RECAPTCHA_NOT_ENABLED"
    /* ServerError.RECAPTCHA_NOT_ENABLED */
  ]: "recaptcha-not-enabled",
  [
    "MISSING_RECAPTCHA_TOKEN"
    /* ServerError.MISSING_RECAPTCHA_TOKEN */
  ]: "missing-recaptcha-token",
  [
    "INVALID_RECAPTCHA_TOKEN"
    /* ServerError.INVALID_RECAPTCHA_TOKEN */
  ]: "invalid-recaptcha-token",
  [
    "INVALID_RECAPTCHA_ACTION"
    /* ServerError.INVALID_RECAPTCHA_ACTION */
  ]: "invalid-recaptcha-action",
  [
    "MISSING_CLIENT_TYPE"
    /* ServerError.MISSING_CLIENT_TYPE */
  ]: "missing-client-type",
  [
    "MISSING_RECAPTCHA_VERSION"
    /* ServerError.MISSING_RECAPTCHA_VERSION */
  ]: "missing-recaptcha-version",
  [
    "INVALID_RECAPTCHA_VERSION"
    /* ServerError.INVALID_RECAPTCHA_VERSION */
  ]: "invalid-recaptcha-version",
  [
    "INVALID_REQ_TYPE"
    /* ServerError.INVALID_REQ_TYPE */
  ]: "invalid-req-type"
  /* AuthErrorCode.INVALID_REQ_TYPE */
};
var DEFAULT_API_TIMEOUT_MS = new Delay(3e4, 6e4);
function _addTidIfNecessary(auth2, request) {
  if (auth2.tenantId && !request.tenantId) {
    return Object.assign(Object.assign({}, request), { tenantId: auth2.tenantId });
  }
  return request;
}
async function _performApiRequest(auth2, method, path, request, customErrorMap = {}) {
  return _performFetchWithErrorHandling(auth2, customErrorMap, async () => {
    let body = {};
    let params = {};
    if (request) {
      if (method === "GET") {
        params = request;
      } else {
        body = {
          body: JSON.stringify(request)
        };
      }
    }
    const query2 = querystring(Object.assign({ key: auth2.config.apiKey }, params)).slice(1);
    const headers = await auth2._getAdditionalHeaders();
    headers[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/json";
    if (auth2.languageCode) {
      headers[
        "X-Firebase-Locale"
        /* HttpHeader.X_FIREBASE_LOCALE */
      ] = auth2.languageCode;
    }
    const fetchArgs = Object.assign({
      method,
      headers
    }, body);
    if (!isCloudflareWorker()) {
      fetchArgs.referrerPolicy = "no-referrer";
    }
    return FetchProvider.fetch()(_getFinalTarget(auth2, auth2.config.apiHost, path, query2), fetchArgs);
  });
}
async function _performFetchWithErrorHandling(auth2, customErrorMap, fetchFn) {
  auth2._canInitEmulator = false;
  const errorMap = Object.assign(Object.assign({}, SERVER_ERROR_MAP), customErrorMap);
  try {
    const networkTimeout = new NetworkTimeout(auth2);
    const response = await Promise.race([
      fetchFn(),
      networkTimeout.promise
    ]);
    networkTimeout.clearNetworkTimeout();
    const json = await response.json();
    if ("needConfirmation" in json) {
      throw _makeTaggedError(auth2, "account-exists-with-different-credential", json);
    }
    if (response.ok && !("errorMessage" in json)) {
      return json;
    } else {
      const errorMessage = response.ok ? json.errorMessage : json.error.message;
      const [serverErrorCode, serverErrorMessage] = errorMessage.split(" : ");
      if (serverErrorCode === "FEDERATED_USER_ID_ALREADY_LINKED") {
        throw _makeTaggedError(auth2, "credential-already-in-use", json);
      } else if (serverErrorCode === "EMAIL_EXISTS") {
        throw _makeTaggedError(auth2, "email-already-in-use", json);
      } else if (serverErrorCode === "USER_DISABLED") {
        throw _makeTaggedError(auth2, "user-disabled", json);
      }
      const authError = errorMap[serverErrorCode] || serverErrorCode.toLowerCase().replace(/[_\s]+/g, "-");
      if (serverErrorMessage) {
        throw _errorWithCustomMessage(auth2, authError, serverErrorMessage);
      } else {
        _fail(auth2, authError);
      }
    }
  } catch (e) {
    if (e instanceof FirebaseError) {
      throw e;
    }
    _fail(auth2, "network-request-failed", { "message": String(e) });
  }
}
async function _performSignInRequest(auth2, method, path, request, customErrorMap = {}) {
  const serverResponse = await _performApiRequest(auth2, method, path, request, customErrorMap);
  if ("mfaPendingCredential" in serverResponse) {
    _fail(auth2, "multi-factor-auth-required", {
      _serverResponse: serverResponse
    });
  }
  return serverResponse;
}
function _getFinalTarget(auth2, host, path, query2) {
  const base = `${host}${path}?${query2}`;
  if (!auth2.config.emulator) {
    return `${auth2.config.apiScheme}://${base}`;
  }
  return _emulatorUrl(auth2.config, base);
}
function _parseEnforcementState(enforcementStateStr) {
  switch (enforcementStateStr) {
    case "ENFORCE":
      return "ENFORCE";
    case "AUDIT":
      return "AUDIT";
    case "OFF":
      return "OFF";
    default:
      return "ENFORCEMENT_STATE_UNSPECIFIED";
  }
}
var NetworkTimeout = class {
  constructor(auth2) {
    this.auth = auth2;
    this.timer = null;
    this.promise = new Promise((_, reject) => {
      this.timer = setTimeout(() => {
        return reject(_createError(
          this.auth,
          "network-request-failed"
          /* AuthErrorCode.NETWORK_REQUEST_FAILED */
        ));
      }, DEFAULT_API_TIMEOUT_MS.get());
    });
  }
  clearNetworkTimeout() {
    clearTimeout(this.timer);
  }
};
function _makeTaggedError(auth2, code, response) {
  const errorParams = {
    appName: auth2.name
  };
  if (response.email) {
    errorParams.email = response.email;
  }
  if (response.phoneNumber) {
    errorParams.phoneNumber = response.phoneNumber;
  }
  const error = _createError(auth2, code, errorParams);
  error.customData._tokenResponse = response;
  return error;
}
function isEnterprise(grecaptcha) {
  return grecaptcha !== void 0 && grecaptcha.enterprise !== void 0;
}
var RecaptchaConfig = class {
  constructor(response) {
    this.siteKey = "";
    this.recaptchaEnforcementState = [];
    if (response.recaptchaKey === void 0) {
      throw new Error("recaptchaKey undefined");
    }
    this.siteKey = response.recaptchaKey.split("/")[3];
    this.recaptchaEnforcementState = response.recaptchaEnforcementState;
  }
  /**
   * Returns the reCAPTCHA Enterprise enforcement state for the given provider.
   *
   * @param providerStr - The provider whose enforcement state is to be returned.
   * @returns The reCAPTCHA Enterprise enforcement state for the given provider.
   */
  getProviderEnforcementState(providerStr) {
    if (!this.recaptchaEnforcementState || this.recaptchaEnforcementState.length === 0) {
      return null;
    }
    for (const recaptchaEnforcementState of this.recaptchaEnforcementState) {
      if (recaptchaEnforcementState.provider && recaptchaEnforcementState.provider === providerStr) {
        return _parseEnforcementState(recaptchaEnforcementState.enforcementState);
      }
    }
    return null;
  }
  /**
   * Returns true if the reCAPTCHA Enterprise enforcement state for the provider is set to ENFORCE or AUDIT.
   *
   * @param providerStr - The provider whose enablement state is to be returned.
   * @returns Whether or not reCAPTCHA Enterprise protection is enabled for the given provider.
   */
  isProviderEnabled(providerStr) {
    return this.getProviderEnforcementState(providerStr) === "ENFORCE" || this.getProviderEnforcementState(providerStr) === "AUDIT";
  }
  /**
   * Returns true if reCAPTCHA Enterprise protection is enabled in at least one provider, otherwise
   * returns false.
   *
   * @returns Whether or not reCAPTCHA Enterprise protection is enabled for at least one provider.
   */
  isAnyProviderEnabled() {
    return this.isProviderEnabled(
      "EMAIL_PASSWORD_PROVIDER"
      /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
    ) || this.isProviderEnabled(
      "PHONE_PROVIDER"
      /* RecaptchaAuthProvider.PHONE_PROVIDER */
    );
  }
};
async function getRecaptchaConfig(auth2, request) {
  return _performApiRequest(auth2, "GET", "/v2/recaptchaConfig", _addTidIfNecessary(auth2, request));
}
async function deleteAccount(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v1/accounts:delete", request);
}
async function getAccountInfo(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v1/accounts:lookup", request);
}
function utcTimestampToDateString(utcTimestamp) {
  if (!utcTimestamp) {
    return void 0;
  }
  try {
    const date = new Date(Number(utcTimestamp));
    if (!isNaN(date.getTime())) {
      return date.toUTCString();
    }
  } catch (e) {
  }
  return void 0;
}
async function getIdTokenResult(user, forceRefresh = false) {
  const userInternal = getModularInstance(user);
  const token = await userInternal.getIdToken(forceRefresh);
  const claims = _parseToken(token);
  _assert(
    claims && claims.exp && claims.auth_time && claims.iat,
    userInternal.auth,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const firebase = typeof claims.firebase === "object" ? claims.firebase : void 0;
  const signInProvider = firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_provider"];
  return {
    claims,
    token,
    authTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.auth_time)),
    issuedAtTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.iat)),
    expirationTime: utcTimestampToDateString(secondsStringToMilliseconds(claims.exp)),
    signInProvider: signInProvider || null,
    signInSecondFactor: (firebase === null || firebase === void 0 ? void 0 : firebase["sign_in_second_factor"]) || null
  };
}
function secondsStringToMilliseconds(seconds) {
  return Number(seconds) * 1e3;
}
function _parseToken(token) {
  const [algorithm, payload, signature] = token.split(".");
  if (algorithm === void 0 || payload === void 0 || signature === void 0) {
    _logError("JWT malformed, contained fewer than 3 sections");
    return null;
  }
  try {
    const decoded = base64Decode(payload);
    if (!decoded) {
      _logError("Failed to decode base64 JWT payload");
      return null;
    }
    return JSON.parse(decoded);
  } catch (e) {
    _logError("Caught error parsing JWT payload as JSON", e === null || e === void 0 ? void 0 : e.toString());
    return null;
  }
}
function _tokenExpiresIn(token) {
  const parsedToken = _parseToken(token);
  _assert(
    parsedToken,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  _assert(
    typeof parsedToken.exp !== "undefined",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  _assert(
    typeof parsedToken.iat !== "undefined",
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  return Number(parsedToken.exp) - Number(parsedToken.iat);
}
async function _logoutIfInvalidated(user, promise, bypassAuthState = false) {
  if (bypassAuthState) {
    return promise;
  }
  try {
    return await promise;
  } catch (e) {
    if (e instanceof FirebaseError && isUserInvalidated(e)) {
      if (user.auth.currentUser === user) {
        await user.auth.signOut();
      }
    }
    throw e;
  }
}
function isUserInvalidated({ code }) {
  return code === `auth/${"user-disabled"}` || code === `auth/${"user-token-expired"}`;
}
var ProactiveRefresh = class {
  constructor(user) {
    this.user = user;
    this.isRunning = false;
    this.timerId = null;
    this.errorBackoff = 3e4;
  }
  _start() {
    if (this.isRunning) {
      return;
    }
    this.isRunning = true;
    this.schedule();
  }
  _stop() {
    if (!this.isRunning) {
      return;
    }
    this.isRunning = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
    }
  }
  getInterval(wasError) {
    var _a;
    if (wasError) {
      const interval = this.errorBackoff;
      this.errorBackoff = Math.min(
        this.errorBackoff * 2,
        96e4
        /* Duration.RETRY_BACKOFF_MAX */
      );
      return interval;
    } else {
      this.errorBackoff = 3e4;
      const expTime = (_a = this.user.stsTokenManager.expirationTime) !== null && _a !== void 0 ? _a : 0;
      const interval = expTime - Date.now() - 3e5;
      return Math.max(0, interval);
    }
  }
  schedule(wasError = false) {
    if (!this.isRunning) {
      return;
    }
    const interval = this.getInterval(wasError);
    this.timerId = setTimeout(async () => {
      await this.iteration();
    }, interval);
  }
  async iteration() {
    try {
      await this.user.getIdToken(true);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"network-request-failed"}`) {
        this.schedule(
          /* wasError */
          true
        );
      }
      return;
    }
    this.schedule();
  }
};
var UserMetadata = class {
  constructor(createdAt, lastLoginAt) {
    this.createdAt = createdAt;
    this.lastLoginAt = lastLoginAt;
    this._initializeTime();
  }
  _initializeTime() {
    this.lastSignInTime = utcTimestampToDateString(this.lastLoginAt);
    this.creationTime = utcTimestampToDateString(this.createdAt);
  }
  _copy(metadata) {
    this.createdAt = metadata.createdAt;
    this.lastLoginAt = metadata.lastLoginAt;
    this._initializeTime();
  }
  toJSON() {
    return {
      createdAt: this.createdAt,
      lastLoginAt: this.lastLoginAt
    };
  }
};
async function _reloadWithoutSaving(user) {
  var _a;
  const auth2 = user.auth;
  const idToken = await user.getIdToken();
  const response = await _logoutIfInvalidated(user, getAccountInfo(auth2, { idToken }));
  _assert(
    response === null || response === void 0 ? void 0 : response.users.length,
    auth2,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  const coreAccount = response.users[0];
  user._notifyReloadListener(coreAccount);
  const newProviderData = ((_a = coreAccount.providerUserInfo) === null || _a === void 0 ? void 0 : _a.length) ? extractProviderData(coreAccount.providerUserInfo) : [];
  const providerData = mergeProviderData(user.providerData, newProviderData);
  const oldIsAnonymous = user.isAnonymous;
  const newIsAnonymous = !(user.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
  const isAnonymous = !oldIsAnonymous ? false : newIsAnonymous;
  const updates = {
    uid: coreAccount.localId,
    displayName: coreAccount.displayName || null,
    photoURL: coreAccount.photoUrl || null,
    email: coreAccount.email || null,
    emailVerified: coreAccount.emailVerified || false,
    phoneNumber: coreAccount.phoneNumber || null,
    tenantId: coreAccount.tenantId || null,
    providerData,
    metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
    isAnonymous
  };
  Object.assign(user, updates);
}
async function reload(user) {
  const userInternal = getModularInstance(user);
  await _reloadWithoutSaving(userInternal);
  await userInternal.auth._persistUserIfCurrent(userInternal);
  userInternal.auth._notifyListenersIfCurrent(userInternal);
}
function mergeProviderData(original, newData) {
  const deduped = original.filter((o2) => !newData.some((n2) => n2.providerId === o2.providerId));
  return [...deduped, ...newData];
}
function extractProviderData(providers) {
  return providers.map((_a) => {
    var { providerId } = _a, provider = __rest(_a, ["providerId"]);
    return {
      providerId,
      uid: provider.rawId || "",
      displayName: provider.displayName || null,
      email: provider.email || null,
      phoneNumber: provider.phoneNumber || null,
      photoURL: provider.photoUrl || null
    };
  });
}
async function requestStsToken(auth2, refreshToken) {
  const response = await _performFetchWithErrorHandling(auth2, {}, async () => {
    const body = querystring({
      "grant_type": "refresh_token",
      "refresh_token": refreshToken
    }).slice(1);
    const { tokenApiHost, apiKey } = auth2.config;
    const url = _getFinalTarget(auth2, tokenApiHost, "/v1/token", `key=${apiKey}`);
    const headers = await auth2._getAdditionalHeaders();
    headers[
      "Content-Type"
      /* HttpHeader.CONTENT_TYPE */
    ] = "application/x-www-form-urlencoded";
    return FetchProvider.fetch()(url, {
      method: "POST",
      headers,
      body
    });
  });
  return {
    accessToken: response.access_token,
    expiresIn: response.expires_in,
    refreshToken: response.refresh_token
  };
}
async function revokeToken(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v2/accounts:revokeToken", _addTidIfNecessary(auth2, request));
}
var StsTokenManager = class {
  constructor() {
    this.refreshToken = null;
    this.accessToken = null;
    this.expirationTime = null;
  }
  get isExpired() {
    return !this.expirationTime || Date.now() > this.expirationTime - 3e4;
  }
  updateFromServerResponse(response) {
    _assert(
      response.idToken,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    _assert(
      typeof response.idToken !== "undefined",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    _assert(
      typeof response.refreshToken !== "undefined",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const expiresIn = "expiresIn" in response && typeof response.expiresIn !== "undefined" ? Number(response.expiresIn) : _tokenExpiresIn(response.idToken);
    this.updateTokensAndExpiration(response.idToken, response.refreshToken, expiresIn);
  }
  updateFromIdToken(idToken) {
    _assert(
      idToken.length !== 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const expiresIn = _tokenExpiresIn(idToken);
    this.updateTokensAndExpiration(idToken, null, expiresIn);
  }
  async getToken(auth2, forceRefresh = false) {
    if (!forceRefresh && this.accessToken && !this.isExpired) {
      return this.accessToken;
    }
    _assert(
      this.refreshToken,
      auth2,
      "user-token-expired"
      /* AuthErrorCode.TOKEN_EXPIRED */
    );
    if (this.refreshToken) {
      await this.refresh(auth2, this.refreshToken);
      return this.accessToken;
    }
    return null;
  }
  clearRefreshToken() {
    this.refreshToken = null;
  }
  async refresh(auth2, oldToken) {
    const { accessToken, refreshToken, expiresIn } = await requestStsToken(auth2, oldToken);
    this.updateTokensAndExpiration(accessToken, refreshToken, Number(expiresIn));
  }
  updateTokensAndExpiration(accessToken, refreshToken, expiresInSec) {
    this.refreshToken = refreshToken || null;
    this.accessToken = accessToken || null;
    this.expirationTime = Date.now() + expiresInSec * 1e3;
  }
  static fromJSON(appName, object) {
    const { refreshToken, accessToken, expirationTime } = object;
    const manager = new StsTokenManager();
    if (refreshToken) {
      _assert(typeof refreshToken === "string", "internal-error", {
        appName
      });
      manager.refreshToken = refreshToken;
    }
    if (accessToken) {
      _assert(typeof accessToken === "string", "internal-error", {
        appName
      });
      manager.accessToken = accessToken;
    }
    if (expirationTime) {
      _assert(typeof expirationTime === "number", "internal-error", {
        appName
      });
      manager.expirationTime = expirationTime;
    }
    return manager;
  }
  toJSON() {
    return {
      refreshToken: this.refreshToken,
      accessToken: this.accessToken,
      expirationTime: this.expirationTime
    };
  }
  _assign(stsTokenManager) {
    this.accessToken = stsTokenManager.accessToken;
    this.refreshToken = stsTokenManager.refreshToken;
    this.expirationTime = stsTokenManager.expirationTime;
  }
  _clone() {
    return Object.assign(new StsTokenManager(), this.toJSON());
  }
  _performRefresh() {
    return debugFail("not implemented");
  }
};
function assertStringOrUndefined(assertion, appName) {
  _assert(typeof assertion === "string" || typeof assertion === "undefined", "internal-error", { appName });
}
var UserImpl = class {
  constructor(_a) {
    var { uid, auth: auth2, stsTokenManager } = _a, opt = __rest(_a, ["uid", "auth", "stsTokenManager"]);
    this.providerId = "firebase";
    this.proactiveRefresh = new ProactiveRefresh(this);
    this.reloadUserInfo = null;
    this.reloadListener = null;
    this.uid = uid;
    this.auth = auth2;
    this.stsTokenManager = stsTokenManager;
    this.accessToken = stsTokenManager.accessToken;
    this.displayName = opt.displayName || null;
    this.email = opt.email || null;
    this.emailVerified = opt.emailVerified || false;
    this.phoneNumber = opt.phoneNumber || null;
    this.photoURL = opt.photoURL || null;
    this.isAnonymous = opt.isAnonymous || false;
    this.tenantId = opt.tenantId || null;
    this.providerData = opt.providerData ? [...opt.providerData] : [];
    this.metadata = new UserMetadata(opt.createdAt || void 0, opt.lastLoginAt || void 0);
  }
  async getIdToken(forceRefresh) {
    const accessToken = await _logoutIfInvalidated(this, this.stsTokenManager.getToken(this.auth, forceRefresh));
    _assert(
      accessToken,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    if (this.accessToken !== accessToken) {
      this.accessToken = accessToken;
      await this.auth._persistUserIfCurrent(this);
      this.auth._notifyListenersIfCurrent(this);
    }
    return accessToken;
  }
  getIdTokenResult(forceRefresh) {
    return getIdTokenResult(this, forceRefresh);
  }
  reload() {
    return reload(this);
  }
  _assign(user) {
    if (this === user) {
      return;
    }
    _assert(
      this.uid === user.uid,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    this.displayName = user.displayName;
    this.photoURL = user.photoURL;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.phoneNumber = user.phoneNumber;
    this.isAnonymous = user.isAnonymous;
    this.tenantId = user.tenantId;
    this.providerData = user.providerData.map((userInfo) => Object.assign({}, userInfo));
    this.metadata._copy(user.metadata);
    this.stsTokenManager._assign(user.stsTokenManager);
  }
  _clone(auth2) {
    const newUser = new UserImpl(Object.assign(Object.assign({}, this), { auth: auth2, stsTokenManager: this.stsTokenManager._clone() }));
    newUser.metadata._copy(this.metadata);
    return newUser;
  }
  _onReload(callback) {
    _assert(
      !this.reloadListener,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    this.reloadListener = callback;
    if (this.reloadUserInfo) {
      this._notifyReloadListener(this.reloadUserInfo);
      this.reloadUserInfo = null;
    }
  }
  _notifyReloadListener(userInfo) {
    if (this.reloadListener) {
      this.reloadListener(userInfo);
    } else {
      this.reloadUserInfo = userInfo;
    }
  }
  _startProactiveRefresh() {
    this.proactiveRefresh._start();
  }
  _stopProactiveRefresh() {
    this.proactiveRefresh._stop();
  }
  async _updateTokensIfNecessary(response, reload2 = false) {
    let tokensRefreshed = false;
    if (response.idToken && response.idToken !== this.stsTokenManager.accessToken) {
      this.stsTokenManager.updateFromServerResponse(response);
      tokensRefreshed = true;
    }
    if (reload2) {
      await _reloadWithoutSaving(this);
    }
    await this.auth._persistUserIfCurrent(this);
    if (tokensRefreshed) {
      this.auth._notifyListenersIfCurrent(this);
    }
  }
  async delete() {
    if (_isFirebaseServerApp(this.auth.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this.auth));
    }
    const idToken = await this.getIdToken();
    await _logoutIfInvalidated(this, deleteAccount(this.auth, { idToken }));
    this.stsTokenManager.clearRefreshToken();
    return this.auth.signOut();
  }
  toJSON() {
    return Object.assign(Object.assign({
      uid: this.uid,
      email: this.email || void 0,
      emailVerified: this.emailVerified,
      displayName: this.displayName || void 0,
      isAnonymous: this.isAnonymous,
      photoURL: this.photoURL || void 0,
      phoneNumber: this.phoneNumber || void 0,
      tenantId: this.tenantId || void 0,
      providerData: this.providerData.map((userInfo) => Object.assign({}, userInfo)),
      stsTokenManager: this.stsTokenManager.toJSON(),
      // Redirect event ID must be maintained in case there is a pending
      // redirect event.
      _redirectEventId: this._redirectEventId
    }, this.metadata.toJSON()), {
      // Required for compatibility with the legacy SDK (go/firebase-auth-sdk-persistence-parsing):
      apiKey: this.auth.config.apiKey,
      appName: this.auth.name
    });
  }
  get refreshToken() {
    return this.stsTokenManager.refreshToken || "";
  }
  static _fromJSON(auth2, object) {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    const displayName = (_a = object.displayName) !== null && _a !== void 0 ? _a : void 0;
    const email = (_b = object.email) !== null && _b !== void 0 ? _b : void 0;
    const phoneNumber = (_c = object.phoneNumber) !== null && _c !== void 0 ? _c : void 0;
    const photoURL = (_d = object.photoURL) !== null && _d !== void 0 ? _d : void 0;
    const tenantId = (_e2 = object.tenantId) !== null && _e2 !== void 0 ? _e2 : void 0;
    const _redirectEventId = (_f = object._redirectEventId) !== null && _f !== void 0 ? _f : void 0;
    const createdAt = (_g = object.createdAt) !== null && _g !== void 0 ? _g : void 0;
    const lastLoginAt = (_h = object.lastLoginAt) !== null && _h !== void 0 ? _h : void 0;
    const { uid, emailVerified, isAnonymous, providerData, stsTokenManager: plainObjectTokenManager } = object;
    _assert(
      uid && plainObjectTokenManager,
      auth2,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const stsTokenManager = StsTokenManager.fromJSON(this.name, plainObjectTokenManager);
    _assert(
      typeof uid === "string",
      auth2,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    assertStringOrUndefined(displayName, auth2.name);
    assertStringOrUndefined(email, auth2.name);
    _assert(
      typeof emailVerified === "boolean",
      auth2,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    _assert(
      typeof isAnonymous === "boolean",
      auth2,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    assertStringOrUndefined(phoneNumber, auth2.name);
    assertStringOrUndefined(photoURL, auth2.name);
    assertStringOrUndefined(tenantId, auth2.name);
    assertStringOrUndefined(_redirectEventId, auth2.name);
    assertStringOrUndefined(createdAt, auth2.name);
    assertStringOrUndefined(lastLoginAt, auth2.name);
    const user = new UserImpl({
      uid,
      auth: auth2,
      email,
      emailVerified,
      displayName,
      isAnonymous,
      photoURL,
      phoneNumber,
      tenantId,
      stsTokenManager,
      createdAt,
      lastLoginAt
    });
    if (providerData && Array.isArray(providerData)) {
      user.providerData = providerData.map((userInfo) => Object.assign({}, userInfo));
    }
    if (_redirectEventId) {
      user._redirectEventId = _redirectEventId;
    }
    return user;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromIdTokenResponse(auth2, idTokenResponse, isAnonymous = false) {
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromServerResponse(idTokenResponse);
    const user = new UserImpl({
      uid: idTokenResponse.localId,
      auth: auth2,
      stsTokenManager,
      isAnonymous
    });
    await _reloadWithoutSaving(user);
    return user;
  }
  /**
   * Initialize a User from an idToken server response
   * @param auth
   * @param idTokenResponse
   */
  static async _fromGetAccountInfoResponse(auth2, response, idToken) {
    const coreAccount = response.users[0];
    _assert(
      coreAccount.localId !== void 0,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const providerData = coreAccount.providerUserInfo !== void 0 ? extractProviderData(coreAccount.providerUserInfo) : [];
    const isAnonymous = !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length);
    const stsTokenManager = new StsTokenManager();
    stsTokenManager.updateFromIdToken(idToken);
    const user = new UserImpl({
      uid: coreAccount.localId,
      auth: auth2,
      stsTokenManager,
      isAnonymous
    });
    const updates = {
      uid: coreAccount.localId,
      displayName: coreAccount.displayName || null,
      photoURL: coreAccount.photoUrl || null,
      email: coreAccount.email || null,
      emailVerified: coreAccount.emailVerified || false,
      phoneNumber: coreAccount.phoneNumber || null,
      tenantId: coreAccount.tenantId || null,
      providerData,
      metadata: new UserMetadata(coreAccount.createdAt, coreAccount.lastLoginAt),
      isAnonymous: !(coreAccount.email && coreAccount.passwordHash) && !(providerData === null || providerData === void 0 ? void 0 : providerData.length)
    };
    Object.assign(user, updates);
    return user;
  }
};
var instanceCache = /* @__PURE__ */ new Map();
function _getInstance(cls) {
  debugAssert(cls instanceof Function, "Expected a class definition");
  let instance = instanceCache.get(cls);
  if (instance) {
    debugAssert(instance instanceof cls, "Instance stored in cache mismatched with class");
    return instance;
  }
  instance = new cls();
  instanceCache.set(cls, instance);
  return instance;
}
var InMemoryPersistence = class {
  constructor() {
    this.type = "NONE";
    this.storage = {};
  }
  async _isAvailable() {
    return true;
  }
  async _set(key, value) {
    this.storage[key] = value;
  }
  async _get(key) {
    const value = this.storage[key];
    return value === void 0 ? null : value;
  }
  async _remove(key) {
    delete this.storage[key];
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
InMemoryPersistence.type = "NONE";
var inMemoryPersistence = InMemoryPersistence;
function _persistenceKeyName(key, apiKey, appName) {
  return `${"firebase"}:${key}:${apiKey}:${appName}`;
}
var PersistenceUserManager = class {
  constructor(persistence, auth2, userKey) {
    this.persistence = persistence;
    this.auth = auth2;
    this.userKey = userKey;
    const { config, name: name4 } = this.auth;
    this.fullUserKey = _persistenceKeyName(this.userKey, config.apiKey, name4);
    this.fullPersistenceKey = _persistenceKeyName("persistence", config.apiKey, name4);
    this.boundEventHandler = auth2._onStorageEvent.bind(auth2);
    this.persistence._addListener(this.fullUserKey, this.boundEventHandler);
  }
  setCurrentUser(user) {
    return this.persistence._set(this.fullUserKey, user.toJSON());
  }
  async getCurrentUser() {
    const blob = await this.persistence._get(this.fullUserKey);
    return blob ? UserImpl._fromJSON(this.auth, blob) : null;
  }
  removeCurrentUser() {
    return this.persistence._remove(this.fullUserKey);
  }
  savePersistenceForRedirect() {
    return this.persistence._set(this.fullPersistenceKey, this.persistence.type);
  }
  async setPersistence(newPersistence) {
    if (this.persistence === newPersistence) {
      return;
    }
    const currentUser = await this.getCurrentUser();
    await this.removeCurrentUser();
    this.persistence = newPersistence;
    if (currentUser) {
      return this.setCurrentUser(currentUser);
    }
  }
  delete() {
    this.persistence._removeListener(this.fullUserKey, this.boundEventHandler);
  }
  static async create(auth2, persistenceHierarchy, userKey = "authUser") {
    if (!persistenceHierarchy.length) {
      return new PersistenceUserManager(_getInstance(inMemoryPersistence), auth2, userKey);
    }
    const availablePersistences = (await Promise.all(persistenceHierarchy.map(async (persistence) => {
      if (await persistence._isAvailable()) {
        return persistence;
      }
      return void 0;
    }))).filter((persistence) => persistence);
    let selectedPersistence = availablePersistences[0] || _getInstance(inMemoryPersistence);
    const key = _persistenceKeyName(userKey, auth2.config.apiKey, auth2.name);
    let userToMigrate = null;
    for (const persistence of persistenceHierarchy) {
      try {
        const blob = await persistence._get(key);
        if (blob) {
          const user = UserImpl._fromJSON(auth2, blob);
          if (persistence !== selectedPersistence) {
            userToMigrate = user;
          }
          selectedPersistence = persistence;
          break;
        }
      } catch (_a) {
      }
    }
    const migrationHierarchy = availablePersistences.filter((p2) => p2._shouldAllowMigration);
    if (!selectedPersistence._shouldAllowMigration || !migrationHierarchy.length) {
      return new PersistenceUserManager(selectedPersistence, auth2, userKey);
    }
    selectedPersistence = migrationHierarchy[0];
    if (userToMigrate) {
      await selectedPersistence._set(key, userToMigrate.toJSON());
    }
    await Promise.all(persistenceHierarchy.map(async (persistence) => {
      if (persistence !== selectedPersistence) {
        try {
          await persistence._remove(key);
        } catch (_a) {
        }
      }
    }));
    return new PersistenceUserManager(selectedPersistence, auth2, userKey);
  }
};
function _getBrowserName(userAgent) {
  const ua = userAgent.toLowerCase();
  if (ua.includes("opera/") || ua.includes("opr/") || ua.includes("opios/")) {
    return "Opera";
  } else if (_isIEMobile(ua)) {
    return "IEMobile";
  } else if (ua.includes("msie") || ua.includes("trident/")) {
    return "IE";
  } else if (ua.includes("edge/")) {
    return "Edge";
  } else if (_isFirefox(ua)) {
    return "Firefox";
  } else if (ua.includes("silk/")) {
    return "Silk";
  } else if (_isBlackBerry(ua)) {
    return "Blackberry";
  } else if (_isWebOS(ua)) {
    return "Webos";
  } else if (_isSafari(ua)) {
    return "Safari";
  } else if ((ua.includes("chrome/") || _isChromeIOS(ua)) && !ua.includes("edge/")) {
    return "Chrome";
  } else if (_isAndroid(ua)) {
    return "Android";
  } else {
    const re2 = /([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/;
    const matches = userAgent.match(re2);
    if ((matches === null || matches === void 0 ? void 0 : matches.length) === 2) {
      return matches[1];
    }
  }
  return "Other";
}
function _isFirefox(ua = getUA()) {
  return /firefox\//i.test(ua);
}
function _isSafari(userAgent = getUA()) {
  const ua = userAgent.toLowerCase();
  return ua.includes("safari/") && !ua.includes("chrome/") && !ua.includes("crios/") && !ua.includes("android");
}
function _isChromeIOS(ua = getUA()) {
  return /crios\//i.test(ua);
}
function _isIEMobile(ua = getUA()) {
  return /iemobile/i.test(ua);
}
function _isAndroid(ua = getUA()) {
  return /android/i.test(ua);
}
function _isBlackBerry(ua = getUA()) {
  return /blackberry/i.test(ua);
}
function _isWebOS(ua = getUA()) {
  return /webos/i.test(ua);
}
function _isIOS(ua = getUA()) {
  return /iphone|ipad|ipod/i.test(ua) || /macintosh/i.test(ua) && /mobile/i.test(ua);
}
function _isIOSStandalone(ua = getUA()) {
  var _a;
  return _isIOS(ua) && !!((_a = window.navigator) === null || _a === void 0 ? void 0 : _a.standalone);
}
function _isIE10() {
  return isIE() && document.documentMode === 10;
}
function _isMobileBrowser(ua = getUA()) {
  return _isIOS(ua) || _isAndroid(ua) || _isWebOS(ua) || _isBlackBerry(ua) || /windows phone/i.test(ua) || _isIEMobile(ua);
}
function _getClientVersion(clientPlatform, frameworks = []) {
  let reportedPlatform;
  switch (clientPlatform) {
    case "Browser":
      reportedPlatform = _getBrowserName(getUA());
      break;
    case "Worker":
      reportedPlatform = `${_getBrowserName(getUA())}-${clientPlatform}`;
      break;
    default:
      reportedPlatform = clientPlatform;
  }
  const reportedFrameworks = frameworks.length ? frameworks.join(",") : "FirebaseCore-web";
  return `${reportedPlatform}/${"JsCore"}/${SDK_VERSION}/${reportedFrameworks}`;
}
var AuthMiddlewareQueue = class {
  constructor(auth2) {
    this.auth = auth2;
    this.queue = [];
  }
  pushCallback(callback, onAbort) {
    const wrappedCallback = (user) => new Promise((resolve, reject) => {
      try {
        const result = callback(user);
        resolve(result);
      } catch (e) {
        reject(e);
      }
    });
    wrappedCallback.onAbort = onAbort;
    this.queue.push(wrappedCallback);
    const index = this.queue.length - 1;
    return () => {
      this.queue[index] = () => Promise.resolve();
    };
  }
  async runMiddleware(nextUser) {
    if (this.auth.currentUser === nextUser) {
      return;
    }
    const onAbortStack = [];
    try {
      for (const beforeStateCallback of this.queue) {
        await beforeStateCallback(nextUser);
        if (beforeStateCallback.onAbort) {
          onAbortStack.push(beforeStateCallback.onAbort);
        }
      }
    } catch (e) {
      onAbortStack.reverse();
      for (const onAbort of onAbortStack) {
        try {
          onAbort();
        } catch (_) {
        }
      }
      throw this.auth._errorFactory.create("login-blocked", {
        originalMessage: e === null || e === void 0 ? void 0 : e.message
      });
    }
  }
};
async function _getPasswordPolicy(auth2, request = {}) {
  return _performApiRequest(auth2, "GET", "/v2/passwordPolicy", _addTidIfNecessary(auth2, request));
}
var MINIMUM_MIN_PASSWORD_LENGTH = 6;
var PasswordPolicyImpl = class {
  constructor(response) {
    var _a, _b, _c, _d;
    const responseOptions = response.customStrengthOptions;
    this.customStrengthOptions = {};
    this.customStrengthOptions.minPasswordLength = (_a = responseOptions.minPasswordLength) !== null && _a !== void 0 ? _a : MINIMUM_MIN_PASSWORD_LENGTH;
    if (responseOptions.maxPasswordLength) {
      this.customStrengthOptions.maxPasswordLength = responseOptions.maxPasswordLength;
    }
    if (responseOptions.containsLowercaseCharacter !== void 0) {
      this.customStrengthOptions.containsLowercaseLetter = responseOptions.containsLowercaseCharacter;
    }
    if (responseOptions.containsUppercaseCharacter !== void 0) {
      this.customStrengthOptions.containsUppercaseLetter = responseOptions.containsUppercaseCharacter;
    }
    if (responseOptions.containsNumericCharacter !== void 0) {
      this.customStrengthOptions.containsNumericCharacter = responseOptions.containsNumericCharacter;
    }
    if (responseOptions.containsNonAlphanumericCharacter !== void 0) {
      this.customStrengthOptions.containsNonAlphanumericCharacter = responseOptions.containsNonAlphanumericCharacter;
    }
    this.enforcementState = response.enforcementState;
    if (this.enforcementState === "ENFORCEMENT_STATE_UNSPECIFIED") {
      this.enforcementState = "OFF";
    }
    this.allowedNonAlphanumericCharacters = (_c = (_b = response.allowedNonAlphanumericCharacters) === null || _b === void 0 ? void 0 : _b.join("")) !== null && _c !== void 0 ? _c : "";
    this.forceUpgradeOnSignin = (_d = response.forceUpgradeOnSignin) !== null && _d !== void 0 ? _d : false;
    this.schemaVersion = response.schemaVersion;
  }
  validatePassword(password) {
    var _a, _b, _c, _d, _e2, _f;
    const status = {
      isValid: true,
      passwordPolicy: this
    };
    this.validatePasswordLengthOptions(password, status);
    this.validatePasswordCharacterOptions(password, status);
    status.isValid && (status.isValid = (_a = status.meetsMinPasswordLength) !== null && _a !== void 0 ? _a : true);
    status.isValid && (status.isValid = (_b = status.meetsMaxPasswordLength) !== null && _b !== void 0 ? _b : true);
    status.isValid && (status.isValid = (_c = status.containsLowercaseLetter) !== null && _c !== void 0 ? _c : true);
    status.isValid && (status.isValid = (_d = status.containsUppercaseLetter) !== null && _d !== void 0 ? _d : true);
    status.isValid && (status.isValid = (_e2 = status.containsNumericCharacter) !== null && _e2 !== void 0 ? _e2 : true);
    status.isValid && (status.isValid = (_f = status.containsNonAlphanumericCharacter) !== null && _f !== void 0 ? _f : true);
    return status;
  }
  /**
   * Validates that the password meets the length options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordLengthOptions(password, status) {
    const minPasswordLength = this.customStrengthOptions.minPasswordLength;
    const maxPasswordLength = this.customStrengthOptions.maxPasswordLength;
    if (minPasswordLength) {
      status.meetsMinPasswordLength = password.length >= minPasswordLength;
    }
    if (maxPasswordLength) {
      status.meetsMaxPasswordLength = password.length <= maxPasswordLength;
    }
  }
  /**
   * Validates that the password meets the character options for the policy.
   *
   * @param password Password to validate.
   * @param status Validation status.
   */
  validatePasswordCharacterOptions(password, status) {
    this.updatePasswordCharacterOptionsStatuses(
      status,
      /* containsLowercaseCharacter= */
      false,
      /* containsUppercaseCharacter= */
      false,
      /* containsNumericCharacter= */
      false,
      /* containsNonAlphanumericCharacter= */
      false
    );
    let passwordChar;
    for (let i = 0; i < password.length; i++) {
      passwordChar = password.charAt(i);
      this.updatePasswordCharacterOptionsStatuses(
        status,
        /* containsLowercaseCharacter= */
        passwordChar >= "a" && passwordChar <= "z",
        /* containsUppercaseCharacter= */
        passwordChar >= "A" && passwordChar <= "Z",
        /* containsNumericCharacter= */
        passwordChar >= "0" && passwordChar <= "9",
        /* containsNonAlphanumericCharacter= */
        this.allowedNonAlphanumericCharacters.includes(passwordChar)
      );
    }
  }
  /**
   * Updates the running validation status with the statuses for the character options.
   * Expected to be called each time a character is processed to update each option status
   * based on the current character.
   *
   * @param status Validation status.
   * @param containsLowercaseCharacter Whether the character is a lowercase letter.
   * @param containsUppercaseCharacter Whether the character is an uppercase letter.
   * @param containsNumericCharacter Whether the character is a numeric character.
   * @param containsNonAlphanumericCharacter Whether the character is a non-alphanumeric character.
   */
  updatePasswordCharacterOptionsStatuses(status, containsLowercaseCharacter, containsUppercaseCharacter, containsNumericCharacter, containsNonAlphanumericCharacter) {
    if (this.customStrengthOptions.containsLowercaseLetter) {
      status.containsLowercaseLetter || (status.containsLowercaseLetter = containsLowercaseCharacter);
    }
    if (this.customStrengthOptions.containsUppercaseLetter) {
      status.containsUppercaseLetter || (status.containsUppercaseLetter = containsUppercaseCharacter);
    }
    if (this.customStrengthOptions.containsNumericCharacter) {
      status.containsNumericCharacter || (status.containsNumericCharacter = containsNumericCharacter);
    }
    if (this.customStrengthOptions.containsNonAlphanumericCharacter) {
      status.containsNonAlphanumericCharacter || (status.containsNonAlphanumericCharacter = containsNonAlphanumericCharacter);
    }
  }
};
var AuthImpl = class {
  constructor(app2, heartbeatServiceProvider, appCheckServiceProvider, config) {
    this.app = app2;
    this.heartbeatServiceProvider = heartbeatServiceProvider;
    this.appCheckServiceProvider = appCheckServiceProvider;
    this.config = config;
    this.currentUser = null;
    this.emulatorConfig = null;
    this.operations = Promise.resolve();
    this.authStateSubscription = new Subscription(this);
    this.idTokenSubscription = new Subscription(this);
    this.beforeStateQueue = new AuthMiddlewareQueue(this);
    this.redirectUser = null;
    this.isProactiveRefreshEnabled = false;
    this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION = 1;
    this._canInitEmulator = true;
    this._isInitialized = false;
    this._deleted = false;
    this._initializationPromise = null;
    this._popupRedirectResolver = null;
    this._errorFactory = _DEFAULT_AUTH_ERROR_FACTORY;
    this._agentRecaptchaConfig = null;
    this._tenantRecaptchaConfigs = {};
    this._projectPasswordPolicy = null;
    this._tenantPasswordPolicies = {};
    this.lastNotifiedUid = void 0;
    this.languageCode = null;
    this.tenantId = null;
    this.settings = { appVerificationDisabledForTesting: false };
    this.frameworks = [];
    this.name = app2.name;
    this.clientVersion = config.sdkClientVersion;
  }
  _initializeWithPersistence(persistenceHierarchy, popupRedirectResolver) {
    if (popupRedirectResolver) {
      this._popupRedirectResolver = _getInstance(popupRedirectResolver);
    }
    this._initializationPromise = this.queue(async () => {
      var _a, _b;
      if (this._deleted) {
        return;
      }
      this.persistenceManager = await PersistenceUserManager.create(this, persistenceHierarchy);
      if (this._deleted) {
        return;
      }
      if ((_a = this._popupRedirectResolver) === null || _a === void 0 ? void 0 : _a._shouldInitProactively) {
        try {
          await this._popupRedirectResolver._initialize(this);
        } catch (e) {
        }
      }
      await this.initializeCurrentUser(popupRedirectResolver);
      this.lastNotifiedUid = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.uid) || null;
      if (this._deleted) {
        return;
      }
      this._isInitialized = true;
    });
    return this._initializationPromise;
  }
  /**
   * If the persistence is changed in another window, the user manager will let us know
   */
  async _onStorageEvent() {
    if (this._deleted) {
      return;
    }
    const user = await this.assertedPersistence.getCurrentUser();
    if (!this.currentUser && !user) {
      return;
    }
    if (this.currentUser && user && this.currentUser.uid === user.uid) {
      this._currentUser._assign(user);
      await this.currentUser.getIdToken();
      return;
    }
    await this._updateCurrentUser(
      user,
      /* skipBeforeStateCallbacks */
      true
    );
  }
  async initializeCurrentUserFromIdToken(idToken) {
    try {
      const response = await getAccountInfo(this, { idToken });
      const user = await UserImpl._fromGetAccountInfoResponse(this, response, idToken);
      await this.directlySetCurrentUser(user);
    } catch (err) {
      console.warn("FirebaseServerApp could not login user with provided authIdToken: ", err);
      await this.directlySetCurrentUser(null);
    }
  }
  async initializeCurrentUser(popupRedirectResolver) {
    var _a;
    if (_isFirebaseServerApp(this.app)) {
      const idToken = this.app.settings.authIdToken;
      if (idToken) {
        return new Promise((resolve) => {
          setTimeout(() => this.initializeCurrentUserFromIdToken(idToken).then(resolve, resolve));
        });
      } else {
        return this.directlySetCurrentUser(null);
      }
    }
    const previouslyStoredUser = await this.assertedPersistence.getCurrentUser();
    let futureCurrentUser = previouslyStoredUser;
    let needsTocheckMiddleware = false;
    if (popupRedirectResolver && this.config.authDomain) {
      await this.getOrInitRedirectPersistenceManager();
      const redirectUserEventId = (_a = this.redirectUser) === null || _a === void 0 ? void 0 : _a._redirectEventId;
      const storedUserEventId = futureCurrentUser === null || futureCurrentUser === void 0 ? void 0 : futureCurrentUser._redirectEventId;
      const result = await this.tryRedirectSignIn(popupRedirectResolver);
      if ((!redirectUserEventId || redirectUserEventId === storedUserEventId) && (result === null || result === void 0 ? void 0 : result.user)) {
        futureCurrentUser = result.user;
        needsTocheckMiddleware = true;
      }
    }
    if (!futureCurrentUser) {
      return this.directlySetCurrentUser(null);
    }
    if (!futureCurrentUser._redirectEventId) {
      if (needsTocheckMiddleware) {
        try {
          await this.beforeStateQueue.runMiddleware(futureCurrentUser);
        } catch (e) {
          futureCurrentUser = previouslyStoredUser;
          this._popupRedirectResolver._overrideRedirectResult(this, () => Promise.reject(e));
        }
      }
      if (futureCurrentUser) {
        return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
      } else {
        return this.directlySetCurrentUser(null);
      }
    }
    _assert(
      this._popupRedirectResolver,
      this,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    );
    await this.getOrInitRedirectPersistenceManager();
    if (this.redirectUser && this.redirectUser._redirectEventId === futureCurrentUser._redirectEventId) {
      return this.directlySetCurrentUser(futureCurrentUser);
    }
    return this.reloadAndSetCurrentUserOrClear(futureCurrentUser);
  }
  async tryRedirectSignIn(redirectResolver) {
    let result = null;
    try {
      result = await this._popupRedirectResolver._completeRedirectFn(this, redirectResolver, true);
    } catch (e) {
      await this._setRedirectUser(null);
    }
    return result;
  }
  async reloadAndSetCurrentUserOrClear(user) {
    try {
      await _reloadWithoutSaving(user);
    } catch (e) {
      if ((e === null || e === void 0 ? void 0 : e.code) !== `auth/${"network-request-failed"}`) {
        return this.directlySetCurrentUser(null);
      }
    }
    return this.directlySetCurrentUser(user);
  }
  useDeviceLanguage() {
    this.languageCode = _getUserLanguage();
  }
  async _delete() {
    this._deleted = true;
  }
  async updateCurrentUser(userExtern) {
    if (_isFirebaseServerApp(this.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
    }
    const user = userExtern ? getModularInstance(userExtern) : null;
    if (user) {
      _assert(
        user.auth.config.apiKey === this.config.apiKey,
        this,
        "invalid-user-token"
        /* AuthErrorCode.INVALID_AUTH */
      );
    }
    return this._updateCurrentUser(user && user._clone(this));
  }
  async _updateCurrentUser(user, skipBeforeStateCallbacks = false) {
    if (this._deleted) {
      return;
    }
    if (user) {
      _assert(
        this.tenantId === user.tenantId,
        this,
        "tenant-id-mismatch"
        /* AuthErrorCode.TENANT_ID_MISMATCH */
      );
    }
    if (!skipBeforeStateCallbacks) {
      await this.beforeStateQueue.runMiddleware(user);
    }
    return this.queue(async () => {
      await this.directlySetCurrentUser(user);
      this.notifyAuthListeners();
    });
  }
  async signOut() {
    if (_isFirebaseServerApp(this.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
    }
    await this.beforeStateQueue.runMiddleware(null);
    if (this.redirectPersistenceManager || this._popupRedirectResolver) {
      await this._setRedirectUser(null);
    }
    return this._updateCurrentUser(
      null,
      /* skipBeforeStateCallbacks */
      true
    );
  }
  setPersistence(persistence) {
    if (_isFirebaseServerApp(this.app)) {
      return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(this));
    }
    return this.queue(async () => {
      await this.assertedPersistence.setPersistence(_getInstance(persistence));
    });
  }
  _getRecaptchaConfig() {
    if (this.tenantId == null) {
      return this._agentRecaptchaConfig;
    } else {
      return this._tenantRecaptchaConfigs[this.tenantId];
    }
  }
  async validatePassword(password) {
    if (!this._getPasswordPolicyInternal()) {
      await this._updatePasswordPolicy();
    }
    const passwordPolicy = this._getPasswordPolicyInternal();
    if (passwordPolicy.schemaVersion !== this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION) {
      return Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version", {}));
    }
    return passwordPolicy.validatePassword(password);
  }
  _getPasswordPolicyInternal() {
    if (this.tenantId === null) {
      return this._projectPasswordPolicy;
    } else {
      return this._tenantPasswordPolicies[this.tenantId];
    }
  }
  async _updatePasswordPolicy() {
    const response = await _getPasswordPolicy(this);
    const passwordPolicy = new PasswordPolicyImpl(response);
    if (this.tenantId === null) {
      this._projectPasswordPolicy = passwordPolicy;
    } else {
      this._tenantPasswordPolicies[this.tenantId] = passwordPolicy;
    }
  }
  _getPersistence() {
    return this.assertedPersistence.persistence.type;
  }
  _updateErrorMap(errorMap) {
    this._errorFactory = new ErrorFactory("auth", "Firebase", errorMap());
  }
  onAuthStateChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.authStateSubscription, nextOrObserver, error, completed);
  }
  beforeAuthStateChanged(callback, onAbort) {
    return this.beforeStateQueue.pushCallback(callback, onAbort);
  }
  onIdTokenChanged(nextOrObserver, error, completed) {
    return this.registerStateListener(this.idTokenSubscription, nextOrObserver, error, completed);
  }
  authStateReady() {
    return new Promise((resolve, reject) => {
      if (this.currentUser) {
        resolve();
      } else {
        const unsubscribe = this.onAuthStateChanged(() => {
          unsubscribe();
          resolve();
        }, reject);
      }
    });
  }
  /**
   * Revokes the given access token. Currently only supports Apple OAuth access tokens.
   */
  async revokeAccessToken(token) {
    if (this.currentUser) {
      const idToken = await this.currentUser.getIdToken();
      const request = {
        providerId: "apple.com",
        tokenType: "ACCESS_TOKEN",
        token,
        idToken
      };
      if (this.tenantId != null) {
        request.tenantId = this.tenantId;
      }
      await revokeToken(this, request);
    }
  }
  toJSON() {
    var _a;
    return {
      apiKey: this.config.apiKey,
      authDomain: this.config.authDomain,
      appName: this.name,
      currentUser: (_a = this._currentUser) === null || _a === void 0 ? void 0 : _a.toJSON()
    };
  }
  async _setRedirectUser(user, popupRedirectResolver) {
    const redirectManager = await this.getOrInitRedirectPersistenceManager(popupRedirectResolver);
    return user === null ? redirectManager.removeCurrentUser() : redirectManager.setCurrentUser(user);
  }
  async getOrInitRedirectPersistenceManager(popupRedirectResolver) {
    if (!this.redirectPersistenceManager) {
      const resolver = popupRedirectResolver && _getInstance(popupRedirectResolver) || this._popupRedirectResolver;
      _assert(
        resolver,
        this,
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      );
      this.redirectPersistenceManager = await PersistenceUserManager.create(
        this,
        [_getInstance(resolver._redirectPersistence)],
        "redirectUser"
        /* KeyName.REDIRECT_USER */
      );
      this.redirectUser = await this.redirectPersistenceManager.getCurrentUser();
    }
    return this.redirectPersistenceManager;
  }
  async _redirectUserForId(id) {
    var _a, _b;
    if (this._isInitialized) {
      await this.queue(async () => {
      });
    }
    if (((_a = this._currentUser) === null || _a === void 0 ? void 0 : _a._redirectEventId) === id) {
      return this._currentUser;
    }
    if (((_b = this.redirectUser) === null || _b === void 0 ? void 0 : _b._redirectEventId) === id) {
      return this.redirectUser;
    }
    return null;
  }
  async _persistUserIfCurrent(user) {
    if (user === this.currentUser) {
      return this.queue(async () => this.directlySetCurrentUser(user));
    }
  }
  /** Notifies listeners only if the user is current */
  _notifyListenersIfCurrent(user) {
    if (user === this.currentUser) {
      this.notifyAuthListeners();
    }
  }
  _key() {
    return `${this.config.authDomain}:${this.config.apiKey}:${this.name}`;
  }
  _startProactiveRefresh() {
    this.isProactiveRefreshEnabled = true;
    if (this.currentUser) {
      this._currentUser._startProactiveRefresh();
    }
  }
  _stopProactiveRefresh() {
    this.isProactiveRefreshEnabled = false;
    if (this.currentUser) {
      this._currentUser._stopProactiveRefresh();
    }
  }
  /** Returns the current user cast as the internal type */
  get _currentUser() {
    return this.currentUser;
  }
  notifyAuthListeners() {
    var _a, _b;
    if (!this._isInitialized) {
      return;
    }
    this.idTokenSubscription.next(this.currentUser);
    const currentUid = (_b = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.uid) !== null && _b !== void 0 ? _b : null;
    if (this.lastNotifiedUid !== currentUid) {
      this.lastNotifiedUid = currentUid;
      this.authStateSubscription.next(this.currentUser);
    }
  }
  registerStateListener(subscription, nextOrObserver, error, completed) {
    if (this._deleted) {
      return () => {
      };
    }
    const cb = typeof nextOrObserver === "function" ? nextOrObserver : nextOrObserver.next.bind(nextOrObserver);
    let isUnsubscribed = false;
    const promise = this._isInitialized ? Promise.resolve() : this._initializationPromise;
    _assert(
      promise,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    promise.then(() => {
      if (isUnsubscribed) {
        return;
      }
      cb(this.currentUser);
    });
    if (typeof nextOrObserver === "function") {
      const unsubscribe = subscription.addObserver(nextOrObserver, error, completed);
      return () => {
        isUnsubscribed = true;
        unsubscribe();
      };
    } else {
      const unsubscribe = subscription.addObserver(nextOrObserver);
      return () => {
        isUnsubscribed = true;
        unsubscribe();
      };
    }
  }
  /**
   * Unprotected (from race conditions) method to set the current user. This
   * should only be called from within a queued callback. This is necessary
   * because the queue shouldn't rely on another queued callback.
   */
  async directlySetCurrentUser(user) {
    if (this.currentUser && this.currentUser !== user) {
      this._currentUser._stopProactiveRefresh();
    }
    if (user && this.isProactiveRefreshEnabled) {
      user._startProactiveRefresh();
    }
    this.currentUser = user;
    if (user) {
      await this.assertedPersistence.setCurrentUser(user);
    } else {
      await this.assertedPersistence.removeCurrentUser();
    }
  }
  queue(action) {
    this.operations = this.operations.then(action, action);
    return this.operations;
  }
  get assertedPersistence() {
    _assert(
      this.persistenceManager,
      this,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    return this.persistenceManager;
  }
  _logFramework(framework) {
    if (!framework || this.frameworks.includes(framework)) {
      return;
    }
    this.frameworks.push(framework);
    this.frameworks.sort();
    this.clientVersion = _getClientVersion(this.config.clientPlatform, this._getFrameworks());
  }
  _getFrameworks() {
    return this.frameworks;
  }
  async _getAdditionalHeaders() {
    var _a;
    const headers = {
      [
        "X-Client-Version"
        /* HttpHeader.X_CLIENT_VERSION */
      ]: this.clientVersion
    };
    if (this.app.options.appId) {
      headers[
        "X-Firebase-gmpid"
        /* HttpHeader.X_FIREBASE_GMPID */
      ] = this.app.options.appId;
    }
    const heartbeatsHeader = await ((_a = this.heartbeatServiceProvider.getImmediate({
      optional: true
    })) === null || _a === void 0 ? void 0 : _a.getHeartbeatsHeader());
    if (heartbeatsHeader) {
      headers[
        "X-Firebase-Client"
        /* HttpHeader.X_FIREBASE_CLIENT */
      ] = heartbeatsHeader;
    }
    const appCheckToken = await this._getAppCheckToken();
    if (appCheckToken) {
      headers[
        "X-Firebase-AppCheck"
        /* HttpHeader.X_FIREBASE_APP_CHECK */
      ] = appCheckToken;
    }
    return headers;
  }
  async _getAppCheckToken() {
    var _a;
    const appCheckTokenResult = await ((_a = this.appCheckServiceProvider.getImmediate({ optional: true })) === null || _a === void 0 ? void 0 : _a.getToken());
    if (appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.error) {
      _logWarn(`Error while retrieving App Check token: ${appCheckTokenResult.error}`);
    }
    return appCheckTokenResult === null || appCheckTokenResult === void 0 ? void 0 : appCheckTokenResult.token;
  }
};
function _castAuth(auth2) {
  return getModularInstance(auth2);
}
var Subscription = class {
  constructor(auth2) {
    this.auth = auth2;
    this.observer = null;
    this.addObserver = createSubscribe((observer) => this.observer = observer);
  }
  get next() {
    _assert(
      this.observer,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    return this.observer.next.bind(this.observer);
  }
};
var externalJSProvider = {
  async loadJS() {
    throw new Error("Unable to load external scripts");
  },
  recaptchaV2Script: "",
  recaptchaEnterpriseScript: "",
  gapiScript: ""
};
function _setExternalJSProvider(p2) {
  externalJSProvider = p2;
}
function _loadJS(url) {
  return externalJSProvider.loadJS(url);
}
function _recaptchaEnterpriseScriptUrl() {
  return externalJSProvider.recaptchaEnterpriseScript;
}
function _gapiScriptUrl() {
  return externalJSProvider.gapiScript;
}
function _generateCallbackName(prefix) {
  return `__${prefix}${Math.floor(Math.random() * 1e6)}`;
}
var MockGreCAPTCHATopLevel = class {
  constructor() {
    this.enterprise = new MockGreCAPTCHA();
  }
  ready(callback) {
    callback();
  }
  execute(_siteKey, _options) {
    return Promise.resolve("token");
  }
  render(_container, _parameters) {
    return "";
  }
};
var MockGreCAPTCHA = class {
  ready(callback) {
    callback();
  }
  execute(_siteKey, _options) {
    return Promise.resolve("token");
  }
  render(_container, _parameters) {
    return "";
  }
};
var RECAPTCHA_ENTERPRISE_VERIFIER_TYPE = "recaptcha-enterprise";
var FAKE_TOKEN = "NO_RECAPTCHA";
var RecaptchaEnterpriseVerifier = class {
  /**
   *
   * @param authExtern - The corresponding Firebase {@link Auth} instance.
   *
   */
  constructor(authExtern) {
    this.type = RECAPTCHA_ENTERPRISE_VERIFIER_TYPE;
    this.auth = _castAuth(authExtern);
  }
  /**
   * Executes the verification process.
   *
   * @returns A Promise for a token that can be used to assert the validity of a request.
   */
  async verify(action = "verify", forceRefresh = false) {
    async function retrieveSiteKey(auth2) {
      if (!forceRefresh) {
        if (auth2.tenantId == null && auth2._agentRecaptchaConfig != null) {
          return auth2._agentRecaptchaConfig.siteKey;
        }
        if (auth2.tenantId != null && auth2._tenantRecaptchaConfigs[auth2.tenantId] !== void 0) {
          return auth2._tenantRecaptchaConfigs[auth2.tenantId].siteKey;
        }
      }
      return new Promise(async (resolve, reject) => {
        getRecaptchaConfig(auth2, {
          clientType: "CLIENT_TYPE_WEB",
          version: "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }).then((response) => {
          if (response.recaptchaKey === void 0) {
            reject(new Error("recaptcha Enterprise site key undefined"));
          } else {
            const config = new RecaptchaConfig(response);
            if (auth2.tenantId == null) {
              auth2._agentRecaptchaConfig = config;
            } else {
              auth2._tenantRecaptchaConfigs[auth2.tenantId] = config;
            }
            return resolve(config.siteKey);
          }
        }).catch((error) => {
          reject(error);
        });
      });
    }
    function retrieveRecaptchaToken(siteKey, resolve, reject) {
      const grecaptcha = window.grecaptcha;
      if (isEnterprise(grecaptcha)) {
        grecaptcha.enterprise.ready(() => {
          grecaptcha.enterprise.execute(siteKey, { action }).then((token) => {
            resolve(token);
          }).catch(() => {
            resolve(FAKE_TOKEN);
          });
        });
      } else {
        reject(Error("No reCAPTCHA enterprise script loaded."));
      }
    }
    if (this.auth.settings.appVerificationDisabledForTesting) {
      const mockRecaptcha = new MockGreCAPTCHATopLevel();
      return mockRecaptcha.execute("siteKey", { action: "verify" });
    }
    return new Promise((resolve, reject) => {
      retrieveSiteKey(this.auth).then((siteKey) => {
        if (!forceRefresh && isEnterprise(window.grecaptcha)) {
          retrieveRecaptchaToken(siteKey, resolve, reject);
        } else {
          if (typeof window === "undefined") {
            reject(new Error("RecaptchaVerifier is only supported in browser"));
            return;
          }
          let url = _recaptchaEnterpriseScriptUrl();
          if (url.length !== 0) {
            url += siteKey;
          }
          _loadJS(url).then(() => {
            retrieveRecaptchaToken(siteKey, resolve, reject);
          }).catch((error) => {
            reject(error);
          });
        }
      }).catch((error) => {
        reject(error);
      });
    });
  }
};
async function injectRecaptchaFields(auth2, request, action, isCaptchaResp = false, isFakeToken = false) {
  const verifier = new RecaptchaEnterpriseVerifier(auth2);
  let captchaResponse;
  if (isFakeToken) {
    captchaResponse = FAKE_TOKEN;
  } else {
    try {
      captchaResponse = await verifier.verify(action);
    } catch (error) {
      captchaResponse = await verifier.verify(action, true);
    }
  }
  const newRequest = Object.assign({}, request);
  if (action === "mfaSmsEnrollment" || action === "mfaSmsSignIn") {
    if ("phoneEnrollmentInfo" in newRequest) {
      const phoneNumber = newRequest.phoneEnrollmentInfo.phoneNumber;
      const recaptchaToken = newRequest.phoneEnrollmentInfo.recaptchaToken;
      Object.assign(newRequest, {
        "phoneEnrollmentInfo": {
          phoneNumber,
          recaptchaToken,
          captchaResponse,
          "clientType": "CLIENT_TYPE_WEB",
          "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }
      });
    } else if ("phoneSignInInfo" in newRequest) {
      const recaptchaToken = newRequest.phoneSignInInfo.recaptchaToken;
      Object.assign(newRequest, {
        "phoneSignInInfo": {
          recaptchaToken,
          captchaResponse,
          "clientType": "CLIENT_TYPE_WEB",
          "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
          /* RecaptchaVersion.ENTERPRISE */
        }
      });
    }
    return newRequest;
  }
  if (!isCaptchaResp) {
    Object.assign(newRequest, { captchaResponse });
  } else {
    Object.assign(newRequest, { "captchaResp": captchaResponse });
  }
  Object.assign(newRequest, {
    "clientType": "CLIENT_TYPE_WEB"
    /* RecaptchaClientType.WEB */
  });
  Object.assign(newRequest, {
    "recaptchaVersion": "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  });
  return newRequest;
}
async function handleRecaptchaFlow(authInstance, request, actionName, actionMethod, recaptchaAuthProvider) {
  var _a, _b;
  if (recaptchaAuthProvider === "EMAIL_PASSWORD_PROVIDER") {
    if ((_a = authInstance._getRecaptchaConfig()) === null || _a === void 0 ? void 0 : _a.isProviderEnabled(
      "EMAIL_PASSWORD_PROVIDER"
      /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
    )) {
      const requestWithRecaptcha = await injectRecaptchaFields(
        authInstance,
        request,
        actionName,
        actionName === "getOobCode"
        /* RecaptchaActionName.GET_OOB_CODE */
      );
      return actionMethod(authInstance, requestWithRecaptcha);
    } else {
      return actionMethod(authInstance, request).catch(async (error) => {
        if (error.code === `auth/${"missing-recaptcha-token"}`) {
          console.log(`${actionName} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);
          const requestWithRecaptcha = await injectRecaptchaFields(
            authInstance,
            request,
            actionName,
            actionName === "getOobCode"
            /* RecaptchaActionName.GET_OOB_CODE */
          );
          return actionMethod(authInstance, requestWithRecaptcha);
        } else {
          return Promise.reject(error);
        }
      });
    }
  } else if (recaptchaAuthProvider === "PHONE_PROVIDER") {
    if ((_b = authInstance._getRecaptchaConfig()) === null || _b === void 0 ? void 0 : _b.isProviderEnabled(
      "PHONE_PROVIDER"
      /* RecaptchaAuthProvider.PHONE_PROVIDER */
    )) {
      const requestWithRecaptcha = await injectRecaptchaFields(authInstance, request, actionName);
      return actionMethod(authInstance, requestWithRecaptcha).catch(async (error) => {
        var _a2;
        if (((_a2 = authInstance._getRecaptchaConfig()) === null || _a2 === void 0 ? void 0 : _a2.getProviderEnforcementState(
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        )) === "AUDIT") {
          if (error.code === `auth/${"missing-recaptcha-token"}` || error.code === `auth/${"invalid-app-credential"}`) {
            console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${actionName} flow.`);
            const requestWithRecaptchaFields = await injectRecaptchaFields(
              authInstance,
              request,
              actionName,
              false,
              // isCaptchaResp
              true
              // isFakeToken
            );
            return actionMethod(authInstance, requestWithRecaptchaFields);
          }
        }
        return Promise.reject(error);
      });
    } else {
      const requestWithRecaptchaFields = await injectRecaptchaFields(
        authInstance,
        request,
        actionName,
        false,
        // isCaptchaResp
        true
        // isFakeToken
      );
      return actionMethod(authInstance, requestWithRecaptchaFields);
    }
  } else {
    return Promise.reject(recaptchaAuthProvider + " provider is not supported.");
  }
}
async function _initializeRecaptchaConfig(auth2) {
  const authInternal = _castAuth(auth2);
  const response = await getRecaptchaConfig(authInternal, {
    clientType: "CLIENT_TYPE_WEB",
    version: "RECAPTCHA_ENTERPRISE"
    /* RecaptchaVersion.ENTERPRISE */
  });
  const config = new RecaptchaConfig(response);
  if (authInternal.tenantId == null) {
    authInternal._agentRecaptchaConfig = config;
  } else {
    authInternal._tenantRecaptchaConfigs[authInternal.tenantId] = config;
  }
  if (config.isAnyProviderEnabled()) {
    const verifier = new RecaptchaEnterpriseVerifier(authInternal);
    void verifier.verify();
  }
}
function initializeAuth(app2, deps) {
  const provider = _getProvider(app2, "auth");
  if (provider.isInitialized()) {
    const auth3 = provider.getImmediate();
    const initialOptions = provider.getOptions();
    if (deepEqual(initialOptions, deps !== null && deps !== void 0 ? deps : {})) {
      return auth3;
    } else {
      _fail(
        auth3,
        "already-initialized"
        /* AuthErrorCode.ALREADY_INITIALIZED */
      );
    }
  }
  const auth2 = provider.initialize({ options: deps });
  return auth2;
}
function _initializeAuthInstance(auth2, deps) {
  const persistence = (deps === null || deps === void 0 ? void 0 : deps.persistence) || [];
  const hierarchy = (Array.isArray(persistence) ? persistence : [persistence]).map(_getInstance);
  if (deps === null || deps === void 0 ? void 0 : deps.errorMap) {
    auth2._updateErrorMap(deps.errorMap);
  }
  auth2._initializeWithPersistence(hierarchy, deps === null || deps === void 0 ? void 0 : deps.popupRedirectResolver);
}
function connectAuthEmulator(auth2, url, options) {
  const authInternal = _castAuth(auth2);
  _assert(
    authInternal._canInitEmulator,
    authInternal,
    "emulator-config-failed"
    /* AuthErrorCode.EMULATOR_CONFIG_FAILED */
  );
  _assert(
    /^https?:\/\//.test(url),
    authInternal,
    "invalid-emulator-scheme"
    /* AuthErrorCode.INVALID_EMULATOR_SCHEME */
  );
  const disableWarnings = !!(options === null || options === void 0 ? void 0 : options.disableWarnings);
  const protocol = extractProtocol(url);
  const { host, port } = extractHostAndPort(url);
  const portStr = port === null ? "" : `:${port}`;
  authInternal.config.emulator = { url: `${protocol}//${host}${portStr}/` };
  authInternal.settings.appVerificationDisabledForTesting = true;
  authInternal.emulatorConfig = Object.freeze({
    host,
    port,
    protocol: protocol.replace(":", ""),
    options: Object.freeze({ disableWarnings })
  });
  if (!disableWarnings) {
    emitEmulatorWarning();
  }
}
function extractProtocol(url) {
  const protocolEnd = url.indexOf(":");
  return protocolEnd < 0 ? "" : url.substr(0, protocolEnd + 1);
}
function extractHostAndPort(url) {
  const protocol = extractProtocol(url);
  const authority = /(\/\/)?([^?#/]+)/.exec(url.substr(protocol.length));
  if (!authority) {
    return { host: "", port: null };
  }
  const hostAndPort = authority[2].split("@").pop() || "";
  const bracketedIPv6 = /^(\[[^\]]+\])(:|$)/.exec(hostAndPort);
  if (bracketedIPv6) {
    const host = bracketedIPv6[1];
    return { host, port: parsePort(hostAndPort.substr(host.length + 1)) };
  } else {
    const [host, port] = hostAndPort.split(":");
    return { host, port: parsePort(port) };
  }
}
function parsePort(portStr) {
  if (!portStr) {
    return null;
  }
  const port = Number(portStr);
  if (isNaN(port)) {
    return null;
  }
  return port;
}
function emitEmulatorWarning() {
  function attachBanner() {
    const el = document.createElement("p");
    const sty = el.style;
    el.innerText = "Running in emulator mode. Do not use with production credentials.";
    sty.position = "fixed";
    sty.width = "100%";
    sty.backgroundColor = "#ffffff";
    sty.border = ".1em solid #000000";
    sty.color = "#b50000";
    sty.bottom = "0px";
    sty.left = "0px";
    sty.margin = "0px";
    sty.zIndex = "10000";
    sty.textAlign = "center";
    el.classList.add("firebase-emulator-warning");
    document.body.appendChild(el);
  }
  if (typeof console !== "undefined" && typeof console.info === "function") {
    console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");
  }
  if (typeof window !== "undefined" && typeof document !== "undefined") {
    if (document.readyState === "loading") {
      window.addEventListener("DOMContentLoaded", attachBanner);
    } else {
      attachBanner();
    }
  }
}
var AuthCredential = class {
  /** @internal */
  constructor(providerId, signInMethod) {
    this.providerId = providerId;
    this.signInMethod = signInMethod;
  }
  /**
   * Returns a JSON-serializable representation of this object.
   *
   * @returns a JSON-serializable representation of this object.
   */
  toJSON() {
    return debugFail("not implemented");
  }
  /** @internal */
  _getIdTokenResponse(_auth) {
    return debugFail("not implemented");
  }
  /** @internal */
  _linkToIdToken(_auth, _idToken) {
    return debugFail("not implemented");
  }
  /** @internal */
  _getReauthenticationResolver(_auth) {
    return debugFail("not implemented");
  }
};
async function linkEmailPassword(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v1/accounts:signUp", request);
}
async function signInWithPassword(auth2, request) {
  return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPassword", _addTidIfNecessary(auth2, request));
}
async function signInWithEmailLink$1(auth2, request) {
  return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth2, request));
}
async function signInWithEmailLinkForLinking(auth2, request) {
  return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithEmailLink", _addTidIfNecessary(auth2, request));
}
var EmailAuthCredential = class extends AuthCredential {
  /** @internal */
  constructor(_email, _password, signInMethod, _tenantId = null) {
    super("password", signInMethod);
    this._email = _email;
    this._password = _password;
    this._tenantId = _tenantId;
  }
  /** @internal */
  static _fromEmailAndPassword(email, password) {
    return new EmailAuthCredential(
      email,
      password,
      "password"
      /* SignInMethod.EMAIL_PASSWORD */
    );
  }
  /** @internal */
  static _fromEmailAndCode(email, oobCode, tenantId = null) {
    return new EmailAuthCredential(email, oobCode, "emailLink", tenantId);
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  toJSON() {
    return {
      email: this._email,
      password: this._password,
      signInMethod: this.signInMethod,
      tenantId: this._tenantId
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an {@link  AuthCredential}.
   *
   * @param json - Either `object` or the stringified representation of the object. When string is
   * provided, `JSON.parse` would be called first.
   *
   * @returns If the JSON input does not represent an {@link AuthCredential}, null is returned.
   */
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    if ((obj === null || obj === void 0 ? void 0 : obj.email) && (obj === null || obj === void 0 ? void 0 : obj.password)) {
      if (obj.signInMethod === "password") {
        return this._fromEmailAndPassword(obj.email, obj.password);
      } else if (obj.signInMethod === "emailLink") {
        return this._fromEmailAndCode(obj.email, obj.password, obj.tenantId);
      }
    }
    return null;
  }
  /** @internal */
  async _getIdTokenResponse(auth2) {
    switch (this.signInMethod) {
      case "password":
        const request = {
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return handleRecaptchaFlow(
          auth2,
          request,
          "signInWithPassword",
          signInWithPassword,
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
        );
      case "emailLink":
        return signInWithEmailLink$1(auth2, {
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(
          auth2,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  async _linkToIdToken(auth2, idToken) {
    switch (this.signInMethod) {
      case "password":
        const request = {
          idToken,
          returnSecureToken: true,
          email: this._email,
          password: this._password,
          clientType: "CLIENT_TYPE_WEB"
          /* RecaptchaClientType.WEB */
        };
        return handleRecaptchaFlow(
          auth2,
          request,
          "signUpPassword",
          linkEmailPassword,
          "EMAIL_PASSWORD_PROVIDER"
          /* RecaptchaAuthProvider.EMAIL_PASSWORD_PROVIDER */
        );
      case "emailLink":
        return signInWithEmailLinkForLinking(auth2, {
          idToken,
          email: this._email,
          oobCode: this._password
        });
      default:
        _fail(
          auth2,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  /** @internal */
  _getReauthenticationResolver(auth2) {
    return this._getIdTokenResponse(auth2);
  }
};
async function signInWithIdp(auth2, request) {
  return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithIdp", _addTidIfNecessary(auth2, request));
}
var IDP_REQUEST_URI$1 = "http://localhost";
var OAuthCredential = class extends AuthCredential {
  constructor() {
    super(...arguments);
    this.pendingToken = null;
  }
  /** @internal */
  static _fromParams(params) {
    const cred = new OAuthCredential(params.providerId, params.signInMethod);
    if (params.idToken || params.accessToken) {
      if (params.idToken) {
        cred.idToken = params.idToken;
      }
      if (params.accessToken) {
        cred.accessToken = params.accessToken;
      }
      if (params.nonce && !params.pendingToken) {
        cred.nonce = params.nonce;
      }
      if (params.pendingToken) {
        cred.pendingToken = params.pendingToken;
      }
    } else if (params.oauthToken && params.oauthTokenSecret) {
      cred.accessToken = params.oauthToken;
      cred.secret = params.oauthTokenSecret;
    } else {
      _fail(
        "argument-error"
        /* AuthErrorCode.ARGUMENT_ERROR */
      );
    }
    return cred;
  }
  /** {@inheritdoc AuthCredential.toJSON}  */
  toJSON() {
    return {
      idToken: this.idToken,
      accessToken: this.accessToken,
      secret: this.secret,
      nonce: this.nonce,
      pendingToken: this.pendingToken,
      providerId: this.providerId,
      signInMethod: this.signInMethod
    };
  }
  /**
   * Static method to deserialize a JSON representation of an object into an
   * {@link  AuthCredential}.
   *
   * @param json - Input can be either Object or the stringified representation of the object.
   * When string is provided, JSON.parse would be called first.
   *
   * @returns If the JSON input does not represent an {@link  AuthCredential}, null is returned.
   */
  static fromJSON(json) {
    const obj = typeof json === "string" ? JSON.parse(json) : json;
    const { providerId, signInMethod } = obj, rest = __rest(obj, ["providerId", "signInMethod"]);
    if (!providerId || !signInMethod) {
      return null;
    }
    const cred = new OAuthCredential(providerId, signInMethod);
    cred.idToken = rest.idToken || void 0;
    cred.accessToken = rest.accessToken || void 0;
    cred.secret = rest.secret;
    cred.nonce = rest.nonce;
    cred.pendingToken = rest.pendingToken || null;
    return cred;
  }
  /** @internal */
  _getIdTokenResponse(auth2) {
    const request = this.buildRequest();
    return signInWithIdp(auth2, request);
  }
  /** @internal */
  _linkToIdToken(auth2, idToken) {
    const request = this.buildRequest();
    request.idToken = idToken;
    return signInWithIdp(auth2, request);
  }
  /** @internal */
  _getReauthenticationResolver(auth2) {
    const request = this.buildRequest();
    request.autoCreate = false;
    return signInWithIdp(auth2, request);
  }
  buildRequest() {
    const request = {
      requestUri: IDP_REQUEST_URI$1,
      returnSecureToken: true
    };
    if (this.pendingToken) {
      request.pendingToken = this.pendingToken;
    } else {
      const postBody = {};
      if (this.idToken) {
        postBody["id_token"] = this.idToken;
      }
      if (this.accessToken) {
        postBody["access_token"] = this.accessToken;
      }
      if (this.secret) {
        postBody["oauth_token_secret"] = this.secret;
      }
      postBody["providerId"] = this.providerId;
      if (this.nonce && !this.pendingToken) {
        postBody["nonce"] = this.nonce;
      }
      request.postBody = querystring(postBody);
    }
    return request;
  }
};
async function sendPhoneVerificationCode(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v1/accounts:sendVerificationCode", _addTidIfNecessary(auth2, request));
}
async function signInWithPhoneNumber$1(auth2, request) {
  return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth2, request));
}
async function linkWithPhoneNumber$1(auth2, request) {
  const response = await _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth2, request));
  if (response.temporaryProof) {
    throw _makeTaggedError(auth2, "account-exists-with-different-credential", response);
  }
  return response;
}
var VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_ = {
  [
    "USER_NOT_FOUND"
    /* ServerError.USER_NOT_FOUND */
  ]: "user-not-found"
  /* AuthErrorCode.USER_DELETED */
};
async function verifyPhoneNumberForExisting(auth2, request) {
  const apiRequest = Object.assign(Object.assign({}, request), { operation: "REAUTH" });
  return _performSignInRequest(auth2, "POST", "/v1/accounts:signInWithPhoneNumber", _addTidIfNecessary(auth2, apiRequest), VERIFY_PHONE_NUMBER_FOR_EXISTING_ERROR_MAP_);
}
var PhoneAuthCredential = class extends AuthCredential {
  constructor(params) {
    super(
      "phone",
      "phone"
      /* SignInMethod.PHONE */
    );
    this.params = params;
  }
  /** @internal */
  static _fromVerification(verificationId, verificationCode) {
    return new PhoneAuthCredential({ verificationId, verificationCode });
  }
  /** @internal */
  static _fromTokenResponse(phoneNumber, temporaryProof) {
    return new PhoneAuthCredential({ phoneNumber, temporaryProof });
  }
  /** @internal */
  _getIdTokenResponse(auth2) {
    return signInWithPhoneNumber$1(auth2, this._makeVerificationRequest());
  }
  /** @internal */
  _linkToIdToken(auth2, idToken) {
    return linkWithPhoneNumber$1(auth2, Object.assign({ idToken }, this._makeVerificationRequest()));
  }
  /** @internal */
  _getReauthenticationResolver(auth2) {
    return verifyPhoneNumberForExisting(auth2, this._makeVerificationRequest());
  }
  /** @internal */
  _makeVerificationRequest() {
    const { temporaryProof, phoneNumber, verificationId, verificationCode } = this.params;
    if (temporaryProof && phoneNumber) {
      return { temporaryProof, phoneNumber };
    }
    return {
      sessionInfo: verificationId,
      code: verificationCode
    };
  }
  /** {@inheritdoc AuthCredential.toJSON} */
  toJSON() {
    const obj = {
      providerId: this.providerId
    };
    if (this.params.phoneNumber) {
      obj.phoneNumber = this.params.phoneNumber;
    }
    if (this.params.temporaryProof) {
      obj.temporaryProof = this.params.temporaryProof;
    }
    if (this.params.verificationCode) {
      obj.verificationCode = this.params.verificationCode;
    }
    if (this.params.verificationId) {
      obj.verificationId = this.params.verificationId;
    }
    return obj;
  }
  /** Generates a phone credential based on a plain object or a JSON string. */
  static fromJSON(json) {
    if (typeof json === "string") {
      json = JSON.parse(json);
    }
    const { verificationId, verificationCode, phoneNumber, temporaryProof } = json;
    if (!verificationCode && !verificationId && !phoneNumber && !temporaryProof) {
      return null;
    }
    return new PhoneAuthCredential({
      verificationId,
      verificationCode,
      phoneNumber,
      temporaryProof
    });
  }
};
function parseMode(mode) {
  switch (mode) {
    case "recoverEmail":
      return "RECOVER_EMAIL";
    case "resetPassword":
      return "PASSWORD_RESET";
    case "signIn":
      return "EMAIL_SIGNIN";
    case "verifyEmail":
      return "VERIFY_EMAIL";
    case "verifyAndChangeEmail":
      return "VERIFY_AND_CHANGE_EMAIL";
    case "revertSecondFactorAddition":
      return "REVERT_SECOND_FACTOR_ADDITION";
    default:
      return null;
  }
}
function parseDeepLink(url) {
  const link = querystringDecode(extractQuerystring(url))["link"];
  const doubleDeepLink = link ? querystringDecode(extractQuerystring(link))["deep_link_id"] : null;
  const iOSDeepLink = querystringDecode(extractQuerystring(url))["deep_link_id"];
  const iOSDoubleDeepLink = iOSDeepLink ? querystringDecode(extractQuerystring(iOSDeepLink))["link"] : null;
  return iOSDoubleDeepLink || iOSDeepLink || doubleDeepLink || link || url;
}
var ActionCodeURL = class {
  /**
   * @param actionLink - The link from which to extract the URL.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @internal
   */
  constructor(actionLink) {
    var _a, _b, _c, _d, _e2, _f;
    const searchParams = querystringDecode(extractQuerystring(actionLink));
    const apiKey = (_a = searchParams[
      "apiKey"
      /* QueryField.API_KEY */
    ]) !== null && _a !== void 0 ? _a : null;
    const code = (_b = searchParams[
      "oobCode"
      /* QueryField.CODE */
    ]) !== null && _b !== void 0 ? _b : null;
    const operation = parseMode((_c = searchParams[
      "mode"
      /* QueryField.MODE */
    ]) !== null && _c !== void 0 ? _c : null);
    _assert(
      apiKey && code && operation,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    );
    this.apiKey = apiKey;
    this.operation = operation;
    this.code = code;
    this.continueUrl = (_d = searchParams[
      "continueUrl"
      /* QueryField.CONTINUE_URL */
    ]) !== null && _d !== void 0 ? _d : null;
    this.languageCode = (_e2 = searchParams[
      "languageCode"
      /* QueryField.LANGUAGE_CODE */
    ]) !== null && _e2 !== void 0 ? _e2 : null;
    this.tenantId = (_f = searchParams[
      "tenantId"
      /* QueryField.TENANT_ID */
    ]) !== null && _f !== void 0 ? _f : null;
  }
  /**
   * Parses the email action link string and returns an {@link ActionCodeURL} if the link is valid,
   * otherwise returns null.
   *
   * @param link  - The email action link string.
   * @returns The {@link ActionCodeURL} object, or null if the link is invalid.
   *
   * @public
   */
  static parseLink(link) {
    const actionLink = parseDeepLink(link);
    try {
      return new ActionCodeURL(actionLink);
    } catch (_a) {
      return null;
    }
  }
};
var EmailAuthProvider = class {
  constructor() {
    this.providerId = EmailAuthProvider.PROVIDER_ID;
  }
  /**
   * Initialize an {@link AuthCredential} using an email and password.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credential(email, password);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * const userCredential = await signInWithEmailAndPassword(auth, email, password);
   * ```
   *
   * @param email - Email address.
   * @param password - User account password.
   * @returns The auth provider credential.
   */
  static credential(email, password) {
    return EmailAuthCredential._fromEmailAndPassword(email, password);
  }
  /**
   * Initialize an {@link AuthCredential} using an email and an email link after a sign in with
   * email link operation.
   *
   * @example
   * ```javascript
   * const authCredential = EmailAuthProvider.credentialWithLink(auth, email, emailLink);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * ```javascript
   * await sendSignInLinkToEmail(auth, email);
   * // Obtain emailLink from user.
   * const userCredential = await signInWithEmailLink(auth, email, emailLink);
   * ```
   *
   * @param auth - The {@link Auth} instance used to verify the link.
   * @param email - Email address.
   * @param emailLink - Sign-in email link.
   * @returns - The auth provider credential.
   */
  static credentialWithLink(email, emailLink) {
    const actionCodeUrl = ActionCodeURL.parseLink(emailLink);
    _assert(
      actionCodeUrl,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    );
    return EmailAuthCredential._fromEmailAndCode(email, actionCodeUrl.code, actionCodeUrl.tenantId);
  }
};
EmailAuthProvider.PROVIDER_ID = "password";
EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD = "password";
EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD = "emailLink";
var FederatedAuthProvider = class {
  /**
   * Constructor for generic OAuth providers.
   *
   * @param providerId - Provider for which credentials should be generated.
   */
  constructor(providerId) {
    this.providerId = providerId;
    this.defaultLanguageCode = null;
    this.customParameters = {};
  }
  /**
   * Set the language gode.
   *
   * @param languageCode - language code
   */
  setDefaultLanguage(languageCode) {
    this.defaultLanguageCode = languageCode;
  }
  /**
   * Sets the OAuth custom parameters to pass in an OAuth request for popup and redirect sign-in
   * operations.
   *
   * @remarks
   * For a detailed list, check the reserved required OAuth 2.0 parameters such as `client_id`,
   * `redirect_uri`, `scope`, `response_type`, and `state` are not allowed and will be ignored.
   *
   * @param customOAuthParameters - The custom OAuth parameters to pass in the OAuth request.
   */
  setCustomParameters(customOAuthParameters) {
    this.customParameters = customOAuthParameters;
    return this;
  }
  /**
   * Retrieve the current list of {@link CustomParameters}.
   */
  getCustomParameters() {
    return this.customParameters;
  }
};
var BaseOAuthProvider = class extends FederatedAuthProvider {
  constructor() {
    super(...arguments);
    this.scopes = [];
  }
  /**
   * Add an OAuth scope to the credential.
   *
   * @param scope - Provider OAuth scope to add.
   */
  addScope(scope) {
    if (!this.scopes.includes(scope)) {
      this.scopes.push(scope);
    }
    return this;
  }
  /**
   * Retrieve the current list of OAuth scopes.
   */
  getScopes() {
    return [...this.scopes];
  }
};
var FacebookAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super(
      "facebook.com"
      /* ProviderId.FACEBOOK */
    );
  }
  /**
   * Creates a credential for Facebook.
   *
   * @example
   * ```javascript
   * // `event` from the Facebook auth.authResponseChange callback.
   * const credential = FacebookAuthProvider.credential(event.authResponse.accessToken);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param accessToken - Facebook access token.
   */
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: FacebookAuthProvider.PROVIDER_ID,
      signInMethod: FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
      accessToken
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return FacebookAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return FacebookAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return FacebookAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD = "facebook.com";
FacebookAuthProvider.PROVIDER_ID = "facebook.com";
var GoogleAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super(
      "google.com"
      /* ProviderId.GOOGLE */
    );
    this.addScope("profile");
  }
  /**
   * Creates a credential for Google. At least one of ID token and access token is required.
   *
   * @example
   * ```javascript
   * // \`googleUser\` from the onsuccess Google Sign In callback.
   * const credential = GoogleAuthProvider.credential(googleUser.getAuthResponse().id_token);
   * const result = await signInWithCredential(credential);
   * ```
   *
   * @param idToken - Google ID token.
   * @param accessToken - Google access token.
   */
  static credential(idToken, accessToken) {
    return OAuthCredential._fromParams({
      providerId: GoogleAuthProvider.PROVIDER_ID,
      signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
      idToken,
      accessToken
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return GoogleAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return GoogleAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse) {
      return null;
    }
    const { oauthIdToken, oauthAccessToken } = tokenResponse;
    if (!oauthIdToken && !oauthAccessToken) {
      return null;
    }
    try {
      return GoogleAuthProvider.credential(oauthIdToken, oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD = "google.com";
GoogleAuthProvider.PROVIDER_ID = "google.com";
var GithubAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super(
      "github.com"
      /* ProviderId.GITHUB */
    );
  }
  /**
   * Creates a credential for GitHub.
   *
   * @param accessToken - GitHub access token.
   */
  static credential(accessToken) {
    return OAuthCredential._fromParams({
      providerId: GithubAuthProvider.PROVIDER_ID,
      signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
      accessToken
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return GithubAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return GithubAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse || !("oauthAccessToken" in tokenResponse)) {
      return null;
    }
    if (!tokenResponse.oauthAccessToken) {
      return null;
    }
    try {
      return GithubAuthProvider.credential(tokenResponse.oauthAccessToken);
    } catch (_a) {
      return null;
    }
  }
};
GithubAuthProvider.GITHUB_SIGN_IN_METHOD = "github.com";
GithubAuthProvider.PROVIDER_ID = "github.com";
var TwitterAuthProvider = class extends BaseOAuthProvider {
  constructor() {
    super(
      "twitter.com"
      /* ProviderId.TWITTER */
    );
  }
  /**
   * Creates a credential for Twitter.
   *
   * @param token - Twitter access token.
   * @param secret - Twitter secret.
   */
  static credential(token, secret) {
    return OAuthCredential._fromParams({
      providerId: TwitterAuthProvider.PROVIDER_ID,
      signInMethod: TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,
      oauthToken: token,
      oauthTokenSecret: secret
    });
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link UserCredential}.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    return TwitterAuthProvider.credentialFromTaggedObject(userCredential);
  }
  /**
   * Used to extract the underlying {@link OAuthCredential} from a {@link AuthError} which was
   * thrown during a sign-in, link, or reauthenticate operation.
   *
   * @param userCredential - The user credential.
   */
  static credentialFromError(error) {
    return TwitterAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse) {
      return null;
    }
    const { oauthAccessToken, oauthTokenSecret } = tokenResponse;
    if (!oauthAccessToken || !oauthTokenSecret) {
      return null;
    }
    try {
      return TwitterAuthProvider.credential(oauthAccessToken, oauthTokenSecret);
    } catch (_a) {
      return null;
    }
  }
};
TwitterAuthProvider.TWITTER_SIGN_IN_METHOD = "twitter.com";
TwitterAuthProvider.PROVIDER_ID = "twitter.com";
var UserCredentialImpl = class {
  constructor(params) {
    this.user = params.user;
    this.providerId = params.providerId;
    this._tokenResponse = params._tokenResponse;
    this.operationType = params.operationType;
  }
  static async _fromIdTokenResponse(auth2, operationType, idTokenResponse, isAnonymous = false) {
    const user = await UserImpl._fromIdTokenResponse(auth2, idTokenResponse, isAnonymous);
    const providerId = providerIdForResponse(idTokenResponse);
    const userCred = new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: idTokenResponse,
      operationType
    });
    return userCred;
  }
  static async _forOperation(user, operationType, response) {
    await user._updateTokensIfNecessary(
      response,
      /* reload */
      true
    );
    const providerId = providerIdForResponse(response);
    return new UserCredentialImpl({
      user,
      providerId,
      _tokenResponse: response,
      operationType
    });
  }
};
function providerIdForResponse(response) {
  if (response.providerId) {
    return response.providerId;
  }
  if ("phoneNumber" in response) {
    return "phone";
  }
  return null;
}
var MultiFactorError = class extends FirebaseError {
  constructor(auth2, error, operationType, user) {
    var _a;
    super(error.code, error.message);
    this.operationType = operationType;
    this.user = user;
    Object.setPrototypeOf(this, MultiFactorError.prototype);
    this.customData = {
      appName: auth2.name,
      tenantId: (_a = auth2.tenantId) !== null && _a !== void 0 ? _a : void 0,
      _serverResponse: error.customData._serverResponse,
      operationType
    };
  }
  static _fromErrorAndOperation(auth2, error, operationType, user) {
    return new MultiFactorError(auth2, error, operationType, user);
  }
};
function _processCredentialSavingMfaContextIfNecessary(auth2, operationType, credential, user) {
  const idTokenProvider = operationType === "reauthenticate" ? credential._getReauthenticationResolver(auth2) : credential._getIdTokenResponse(auth2);
  return idTokenProvider.catch((error) => {
    if (error.code === `auth/${"multi-factor-auth-required"}`) {
      throw MultiFactorError._fromErrorAndOperation(auth2, error, operationType, user);
    }
    throw error;
  });
}
async function _link$1(user, credential, bypassAuthState = false) {
  const response = await _logoutIfInvalidated(user, credential._linkToIdToken(user.auth, await user.getIdToken()), bypassAuthState);
  return UserCredentialImpl._forOperation(user, "link", response);
}
async function _reauthenticate(user, credential, bypassAuthState = false) {
  const { auth: auth2 } = user;
  if (_isFirebaseServerApp(auth2.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth2));
  }
  const operationType = "reauthenticate";
  try {
    const response = await _logoutIfInvalidated(user, _processCredentialSavingMfaContextIfNecessary(auth2, operationType, credential, user), bypassAuthState);
    _assert(
      response.idToken,
      auth2,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const parsed = _parseToken(response.idToken);
    _assert(
      parsed,
      auth2,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const { sub: localId } = parsed;
    _assert(
      user.uid === localId,
      auth2,
      "user-mismatch"
      /* AuthErrorCode.USER_MISMATCH */
    );
    return UserCredentialImpl._forOperation(user, operationType, response);
  } catch (e) {
    if ((e === null || e === void 0 ? void 0 : e.code) === `auth/${"user-not-found"}`) {
      _fail(
        auth2,
        "user-mismatch"
        /* AuthErrorCode.USER_MISMATCH */
      );
    }
    throw e;
  }
}
async function _signInWithCredential(auth2, credential, bypassAuthState = false) {
  if (_isFirebaseServerApp(auth2.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth2));
  }
  const operationType = "signIn";
  const response = await _processCredentialSavingMfaContextIfNecessary(auth2, operationType, credential);
  const userCredential = await UserCredentialImpl._fromIdTokenResponse(auth2, operationType, response);
  if (!bypassAuthState) {
    await auth2._updateCurrentUser(userCredential.user);
  }
  return userCredential;
}
function onIdTokenChanged(auth2, nextOrObserver, error, completed) {
  return getModularInstance(auth2).onIdTokenChanged(nextOrObserver, error, completed);
}
function beforeAuthStateChanged(auth2, callback, onAbort) {
  return getModularInstance(auth2).beforeAuthStateChanged(callback, onAbort);
}
function startEnrollPhoneMfa(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth2, request));
}
function finalizeEnrollPhoneMfa(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth2, request));
}
function startEnrollTotpMfa(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v2/accounts/mfaEnrollment:start", _addTidIfNecessary(auth2, request));
}
function finalizeEnrollTotpMfa(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v2/accounts/mfaEnrollment:finalize", _addTidIfNecessary(auth2, request));
}
var STORAGE_AVAILABLE_KEY = "__sak";
var BrowserPersistenceClass = class {
  constructor(storageRetriever, type) {
    this.storageRetriever = storageRetriever;
    this.type = type;
  }
  _isAvailable() {
    try {
      if (!this.storage) {
        return Promise.resolve(false);
      }
      this.storage.setItem(STORAGE_AVAILABLE_KEY, "1");
      this.storage.removeItem(STORAGE_AVAILABLE_KEY);
      return Promise.resolve(true);
    } catch (_a) {
      return Promise.resolve(false);
    }
  }
  _set(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
    return Promise.resolve();
  }
  _get(key) {
    const json = this.storage.getItem(key);
    return Promise.resolve(json ? JSON.parse(json) : null);
  }
  _remove(key) {
    this.storage.removeItem(key);
    return Promise.resolve();
  }
  get storage() {
    return this.storageRetriever();
  }
};
var _POLLING_INTERVAL_MS$1 = 1e3;
var IE10_LOCAL_STORAGE_SYNC_DELAY = 10;
var BrowserLocalPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(
      () => window.localStorage,
      "LOCAL"
      /* PersistenceType.LOCAL */
    );
    this.boundEventHandler = (event, poll) => this.onStorageEvent(event, poll);
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.fallbackToPolling = _isMobileBrowser();
    this._shouldAllowMigration = true;
  }
  forAllChangedKeys(cb) {
    for (const key of Object.keys(this.listeners)) {
      const newValue = this.storage.getItem(key);
      const oldValue = this.localCache[key];
      if (newValue !== oldValue) {
        cb(key, oldValue, newValue);
      }
    }
  }
  onStorageEvent(event, poll = false) {
    if (!event.key) {
      this.forAllChangedKeys((key2, _oldValue, newValue) => {
        this.notifyListeners(key2, newValue);
      });
      return;
    }
    const key = event.key;
    if (poll) {
      this.detachListener();
    } else {
      this.stopPolling();
    }
    const triggerListeners = () => {
      const storedValue2 = this.storage.getItem(key);
      if (!poll && this.localCache[key] === storedValue2) {
        return;
      }
      this.notifyListeners(key, storedValue2);
    };
    const storedValue = this.storage.getItem(key);
    if (_isIE10() && storedValue !== event.newValue && event.newValue !== event.oldValue) {
      setTimeout(triggerListeners, IE10_LOCAL_STORAGE_SYNC_DELAY);
    } else {
      triggerListeners();
    }
  }
  notifyListeners(key, value) {
    this.localCache[key] = value;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(value ? JSON.parse(value) : value);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(() => {
      this.forAllChangedKeys((key, oldValue, newValue) => {
        this.onStorageEvent(
          new StorageEvent("storage", {
            key,
            oldValue,
            newValue
          }),
          /* poll */
          true
        );
      });
    }, _POLLING_INTERVAL_MS$1);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  attachListener() {
    window.addEventListener("storage", this.boundEventHandler);
  }
  detachListener() {
    window.removeEventListener("storage", this.boundEventHandler);
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      if (this.fallbackToPolling) {
        this.startPolling();
      } else {
        this.attachListener();
      }
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */ new Set();
      this.localCache[key] = this.storage.getItem(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.detachListener();
      this.stopPolling();
    }
  }
  // Update local cache on base operations:
  async _set(key, value) {
    await super._set(key, value);
    this.localCache[key] = JSON.stringify(value);
  }
  async _get(key) {
    const value = await super._get(key);
    this.localCache[key] = JSON.stringify(value);
    return value;
  }
  async _remove(key) {
    await super._remove(key);
    delete this.localCache[key];
  }
};
BrowserLocalPersistence.type = "LOCAL";
var browserLocalPersistence = BrowserLocalPersistence;
var BrowserSessionPersistence = class extends BrowserPersistenceClass {
  constructor() {
    super(
      () => window.sessionStorage,
      "SESSION"
      /* PersistenceType.SESSION */
    );
  }
  _addListener(_key, _listener) {
    return;
  }
  _removeListener(_key, _listener) {
    return;
  }
};
BrowserSessionPersistence.type = "SESSION";
var browserSessionPersistence = BrowserSessionPersistence;
function _allSettled(promises) {
  return Promise.all(promises.map(async (promise) => {
    try {
      const value = await promise;
      return {
        fulfilled: true,
        value
      };
    } catch (reason) {
      return {
        fulfilled: false,
        reason
      };
    }
  }));
}
var Receiver = class {
  constructor(eventTarget) {
    this.eventTarget = eventTarget;
    this.handlersMap = {};
    this.boundEventHandler = this.handleEvent.bind(this);
  }
  /**
   * Obtain an instance of a Receiver for a given event target, if none exists it will be created.
   *
   * @param eventTarget - An event target (such as window or self) through which the underlying
   * messages will be received.
   */
  static _getInstance(eventTarget) {
    const existingInstance = this.receivers.find((receiver) => receiver.isListeningto(eventTarget));
    if (existingInstance) {
      return existingInstance;
    }
    const newInstance = new Receiver(eventTarget);
    this.receivers.push(newInstance);
    return newInstance;
  }
  isListeningto(eventTarget) {
    return this.eventTarget === eventTarget;
  }
  /**
   * Fans out a MessageEvent to the appropriate listeners.
   *
   * @remarks
   * Sends an {@link Status.ACK} upon receipt and a {@link Status.DONE} once all handlers have
   * finished processing.
   *
   * @param event - The MessageEvent.
   *
   */
  async handleEvent(event) {
    const messageEvent = event;
    const { eventId, eventType, data } = messageEvent.data;
    const handlers = this.handlersMap[eventType];
    if (!(handlers === null || handlers === void 0 ? void 0 : handlers.size)) {
      return;
    }
    messageEvent.ports[0].postMessage({
      status: "ack",
      eventId,
      eventType
    });
    const promises = Array.from(handlers).map(async (handler) => handler(messageEvent.origin, data));
    const response = await _allSettled(promises);
    messageEvent.ports[0].postMessage({
      status: "done",
      eventId,
      eventType,
      response
    });
  }
  /**
   * Subscribe an event handler for a particular event.
   *
   * @param eventType - Event name to subscribe to.
   * @param eventHandler - The event handler which should receive the events.
   *
   */
  _subscribe(eventType, eventHandler) {
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.addEventListener("message", this.boundEventHandler);
    }
    if (!this.handlersMap[eventType]) {
      this.handlersMap[eventType] = /* @__PURE__ */ new Set();
    }
    this.handlersMap[eventType].add(eventHandler);
  }
  /**
   * Unsubscribe an event handler from a particular event.
   *
   * @param eventType - Event name to unsubscribe from.
   * @param eventHandler - Optional event handler, if none provided, unsubscribe all handlers on this event.
   *
   */
  _unsubscribe(eventType, eventHandler) {
    if (this.handlersMap[eventType] && eventHandler) {
      this.handlersMap[eventType].delete(eventHandler);
    }
    if (!eventHandler || this.handlersMap[eventType].size === 0) {
      delete this.handlersMap[eventType];
    }
    if (Object.keys(this.handlersMap).length === 0) {
      this.eventTarget.removeEventListener("message", this.boundEventHandler);
    }
  }
};
Receiver.receivers = [];
function _generateEventId(prefix = "", digits = 10) {
  let random = "";
  for (let i = 0; i < digits; i++) {
    random += Math.floor(Math.random() * 10);
  }
  return prefix + random;
}
var Sender = class {
  constructor(target) {
    this.target = target;
    this.handlers = /* @__PURE__ */ new Set();
  }
  /**
   * Unsubscribe the handler and remove it from our tracking Set.
   *
   * @param handler - The handler to unsubscribe.
   */
  removeMessageHandler(handler) {
    if (handler.messageChannel) {
      handler.messageChannel.port1.removeEventListener("message", handler.onMessage);
      handler.messageChannel.port1.close();
    }
    this.handlers.delete(handler);
  }
  /**
   * Send a message to the Receiver located at {@link target}.
   *
   * @remarks
   * We'll first wait a bit for an ACK , if we get one we will wait significantly longer until the
   * receiver has had a chance to fully process the event.
   *
   * @param eventType - Type of event to send.
   * @param data - The payload of the event.
   * @param timeout - Timeout for waiting on an ACK from the receiver.
   *
   * @returns An array of settled promises from all the handlers that were listening on the receiver.
   */
  async _send(eventType, data, timeout = 50) {
    const messageChannel = typeof MessageChannel !== "undefined" ? new MessageChannel() : null;
    if (!messageChannel) {
      throw new Error(
        "connection_unavailable"
        /* _MessageError.CONNECTION_UNAVAILABLE */
      );
    }
    let completionTimer;
    let handler;
    return new Promise((resolve, reject) => {
      const eventId = _generateEventId("", 20);
      messageChannel.port1.start();
      const ackTimer = setTimeout(() => {
        reject(new Error(
          "unsupported_event"
          /* _MessageError.UNSUPPORTED_EVENT */
        ));
      }, timeout);
      handler = {
        messageChannel,
        onMessage(event) {
          const messageEvent = event;
          if (messageEvent.data.eventId !== eventId) {
            return;
          }
          switch (messageEvent.data.status) {
            case "ack":
              clearTimeout(ackTimer);
              completionTimer = setTimeout(
                () => {
                  reject(new Error(
                    "timeout"
                    /* _MessageError.TIMEOUT */
                  ));
                },
                3e3
                /* _TimeoutDuration.COMPLETION */
              );
              break;
            case "done":
              clearTimeout(completionTimer);
              resolve(messageEvent.data.response);
              break;
            default:
              clearTimeout(ackTimer);
              clearTimeout(completionTimer);
              reject(new Error(
                "invalid_response"
                /* _MessageError.INVALID_RESPONSE */
              ));
              break;
          }
        }
      };
      this.handlers.add(handler);
      messageChannel.port1.addEventListener("message", handler.onMessage);
      this.target.postMessage({
        eventType,
        eventId,
        data
      }, [messageChannel.port2]);
    }).finally(() => {
      if (handler) {
        this.removeMessageHandler(handler);
      }
    });
  }
};
function _window() {
  return window;
}
function _setWindowLocation(url) {
  _window().location.href = url;
}
function _isWorker() {
  return typeof _window()["WorkerGlobalScope"] !== "undefined" && typeof _window()["importScripts"] === "function";
}
async function _getActiveServiceWorker() {
  if (!(navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker)) {
    return null;
  }
  try {
    const registration = await navigator.serviceWorker.ready;
    return registration.active;
  } catch (_a) {
    return null;
  }
}
function _getServiceWorkerController() {
  var _a;
  return ((_a = navigator === null || navigator === void 0 ? void 0 : navigator.serviceWorker) === null || _a === void 0 ? void 0 : _a.controller) || null;
}
function _getWorkerGlobalScope() {
  return _isWorker() ? self : null;
}
var DB_NAME2 = "firebaseLocalStorageDb";
var DB_VERSION2 = 1;
var DB_OBJECTSTORE_NAME = "firebaseLocalStorage";
var DB_DATA_KEYPATH = "fbase_key";
var DBPromise = class {
  constructor(request) {
    this.request = request;
  }
  toPromise() {
    return new Promise((resolve, reject) => {
      this.request.addEventListener("success", () => {
        resolve(this.request.result);
      });
      this.request.addEventListener("error", () => {
        reject(this.request.error);
      });
    });
  }
};
function getObjectStore(db2, isReadWrite) {
  return db2.transaction([DB_OBJECTSTORE_NAME], isReadWrite ? "readwrite" : "readonly").objectStore(DB_OBJECTSTORE_NAME);
}
function _deleteDatabase() {
  const request = indexedDB.deleteDatabase(DB_NAME2);
  return new DBPromise(request).toPromise();
}
function _openDatabase() {
  const request = indexedDB.open(DB_NAME2, DB_VERSION2);
  return new Promise((resolve, reject) => {
    request.addEventListener("error", () => {
      reject(request.error);
    });
    request.addEventListener("upgradeneeded", () => {
      const db2 = request.result;
      try {
        db2.createObjectStore(DB_OBJECTSTORE_NAME, { keyPath: DB_DATA_KEYPATH });
      } catch (e) {
        reject(e);
      }
    });
    request.addEventListener("success", async () => {
      const db2 = request.result;
      if (!db2.objectStoreNames.contains(DB_OBJECTSTORE_NAME)) {
        db2.close();
        await _deleteDatabase();
        resolve(await _openDatabase());
      } else {
        resolve(db2);
      }
    });
  });
}
async function _putObject(db2, key, value) {
  const request = getObjectStore(db2, true).put({
    [DB_DATA_KEYPATH]: key,
    value
  });
  return new DBPromise(request).toPromise();
}
async function getObject(db2, key) {
  const request = getObjectStore(db2, false).get(key);
  const data = await new DBPromise(request).toPromise();
  return data === void 0 ? null : data.value;
}
function _deleteObject(db2, key) {
  const request = getObjectStore(db2, true).delete(key);
  return new DBPromise(request).toPromise();
}
var _POLLING_INTERVAL_MS = 800;
var _TRANSACTION_RETRY_COUNT = 3;
var IndexedDBLocalPersistence = class {
  constructor() {
    this.type = "LOCAL";
    this._shouldAllowMigration = true;
    this.listeners = {};
    this.localCache = {};
    this.pollTimer = null;
    this.pendingWrites = 0;
    this.receiver = null;
    this.sender = null;
    this.serviceWorkerReceiverAvailable = false;
    this.activeServiceWorker = null;
    this._workerInitializationPromise = this.initializeServiceWorkerMessaging().then(() => {
    }, () => {
    });
  }
  async _openDb() {
    if (this.db) {
      return this.db;
    }
    this.db = await _openDatabase();
    return this.db;
  }
  async _withRetries(op) {
    let numAttempts = 0;
    while (true) {
      try {
        const db2 = await this._openDb();
        return await op(db2);
      } catch (e) {
        if (numAttempts++ > _TRANSACTION_RETRY_COUNT) {
          throw e;
        }
        if (this.db) {
          this.db.close();
          this.db = void 0;
        }
      }
    }
  }
  /**
   * IndexedDB events do not propagate from the main window to the worker context.  We rely on a
   * postMessage interface to send these events to the worker ourselves.
   */
  async initializeServiceWorkerMessaging() {
    return _isWorker() ? this.initializeReceiver() : this.initializeSender();
  }
  /**
   * As the worker we should listen to events from the main window.
   */
  async initializeReceiver() {
    this.receiver = Receiver._getInstance(_getWorkerGlobalScope());
    this.receiver._subscribe("keyChanged", async (_origin, data) => {
      const keys = await this._poll();
      return {
        keyProcessed: keys.includes(data.key)
      };
    });
    this.receiver._subscribe("ping", async (_origin, _data) => {
      return [
        "keyChanged"
        /* _EventType.KEY_CHANGED */
      ];
    });
  }
  /**
   * As the main window, we should let the worker know when keys change (set and remove).
   *
   * @remarks
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready | ServiceWorkerContainer.ready}
   * may not resolve.
   */
  async initializeSender() {
    var _a, _b;
    this.activeServiceWorker = await _getActiveServiceWorker();
    if (!this.activeServiceWorker) {
      return;
    }
    this.sender = new Sender(this.activeServiceWorker);
    const results = await this.sender._send(
      "ping",
      {},
      800
      /* _TimeoutDuration.LONG_ACK */
    );
    if (!results) {
      return;
    }
    if (((_a = results[0]) === null || _a === void 0 ? void 0 : _a.fulfilled) && ((_b = results[0]) === null || _b === void 0 ? void 0 : _b.value.includes(
      "keyChanged"
      /* _EventType.KEY_CHANGED */
    ))) {
      this.serviceWorkerReceiverAvailable = true;
    }
  }
  /**
   * Let the worker know about a changed key, the exact key doesn't technically matter since the
   * worker will just trigger a full sync anyway.
   *
   * @remarks
   * For now, we only support one service worker per page.
   *
   * @param key - Storage key which changed.
   */
  async notifyServiceWorker(key) {
    if (!this.sender || !this.activeServiceWorker || _getServiceWorkerController() !== this.activeServiceWorker) {
      return;
    }
    try {
      await this.sender._send(
        "keyChanged",
        { key },
        // Use long timeout if receiver has previously responded to a ping from us.
        this.serviceWorkerReceiverAvailable ? 800 : 50
        /* _TimeoutDuration.ACK */
      );
    } catch (_a) {
    }
  }
  async _isAvailable() {
    try {
      if (!indexedDB) {
        return false;
      }
      const db2 = await _openDatabase();
      await _putObject(db2, STORAGE_AVAILABLE_KEY, "1");
      await _deleteObject(db2, STORAGE_AVAILABLE_KEY);
      return true;
    } catch (_a) {
    }
    return false;
  }
  async _withPendingWrite(write) {
    this.pendingWrites++;
    try {
      await write();
    } finally {
      this.pendingWrites--;
    }
  }
  async _set(key, value) {
    return this._withPendingWrite(async () => {
      await this._withRetries((db2) => _putObject(db2, key, value));
      this.localCache[key] = value;
      return this.notifyServiceWorker(key);
    });
  }
  async _get(key) {
    const obj = await this._withRetries((db2) => getObject(db2, key));
    this.localCache[key] = obj;
    return obj;
  }
  async _remove(key) {
    return this._withPendingWrite(async () => {
      await this._withRetries((db2) => _deleteObject(db2, key));
      delete this.localCache[key];
      return this.notifyServiceWorker(key);
    });
  }
  async _poll() {
    const result = await this._withRetries((db2) => {
      const getAllRequest = getObjectStore(db2, false).getAll();
      return new DBPromise(getAllRequest).toPromise();
    });
    if (!result) {
      return [];
    }
    if (this.pendingWrites !== 0) {
      return [];
    }
    const keys = [];
    const keysInResult = /* @__PURE__ */ new Set();
    if (result.length !== 0) {
      for (const { fbase_key: key, value } of result) {
        keysInResult.add(key);
        if (JSON.stringify(this.localCache[key]) !== JSON.stringify(value)) {
          this.notifyListeners(key, value);
          keys.push(key);
        }
      }
    }
    for (const localKey of Object.keys(this.localCache)) {
      if (this.localCache[localKey] && !keysInResult.has(localKey)) {
        this.notifyListeners(localKey, null);
        keys.push(localKey);
      }
    }
    return keys;
  }
  notifyListeners(key, newValue) {
    this.localCache[key] = newValue;
    const listeners = this.listeners[key];
    if (listeners) {
      for (const listener of Array.from(listeners)) {
        listener(newValue);
      }
    }
  }
  startPolling() {
    this.stopPolling();
    this.pollTimer = setInterval(async () => this._poll(), _POLLING_INTERVAL_MS);
  }
  stopPolling() {
    if (this.pollTimer) {
      clearInterval(this.pollTimer);
      this.pollTimer = null;
    }
  }
  _addListener(key, listener) {
    if (Object.keys(this.listeners).length === 0) {
      this.startPolling();
    }
    if (!this.listeners[key]) {
      this.listeners[key] = /* @__PURE__ */ new Set();
      void this._get(key);
    }
    this.listeners[key].add(listener);
  }
  _removeListener(key, listener) {
    if (this.listeners[key]) {
      this.listeners[key].delete(listener);
      if (this.listeners[key].size === 0) {
        delete this.listeners[key];
      }
    }
    if (Object.keys(this.listeners).length === 0) {
      this.stopPolling();
    }
  }
};
IndexedDBLocalPersistence.type = "LOCAL";
var indexedDBLocalPersistence = IndexedDBLocalPersistence;
function startSignInPhoneMfa(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v2/accounts/mfaSignIn:start", _addTidIfNecessary(auth2, request));
}
function finalizeSignInPhoneMfa(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth2, request));
}
function finalizeSignInTotpMfa(auth2, request) {
  return _performApiRequest(auth2, "POST", "/v2/accounts/mfaSignIn:finalize", _addTidIfNecessary(auth2, request));
}
var _JSLOAD_CALLBACK = _generateCallbackName("rcb");
var NETWORK_TIMEOUT_DELAY = new Delay(3e4, 6e4);
var RECAPTCHA_VERIFIER_TYPE = "recaptcha";
async function _verifyPhoneNumber(auth2, options, verifier) {
  var _a;
  if (!auth2._getRecaptchaConfig()) {
    try {
      await _initializeRecaptchaConfig(auth2);
    } catch (error) {
      console.log("Failed to initialize reCAPTCHA Enterprise config. Triggering the reCAPTCHA v2 verification.");
    }
  }
  try {
    let phoneInfoOptions;
    if (typeof options === "string") {
      phoneInfoOptions = {
        phoneNumber: options
      };
    } else {
      phoneInfoOptions = options;
    }
    if ("session" in phoneInfoOptions) {
      const session = phoneInfoOptions.session;
      if ("phoneNumber" in phoneInfoOptions) {
        _assert(
          session.type === "enroll",
          auth2,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const startPhoneMfaEnrollmentRequest = {
          idToken: session.credential,
          phoneEnrollmentInfo: {
            phoneNumber: phoneInfoOptions.phoneNumber,
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */
          }
        };
        const startEnrollPhoneMfaActionCallback = async (authInstance, request) => {
          if (request.phoneEnrollmentInfo.captchaResponse === FAKE_TOKEN) {
            _assert(
              (verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE,
              authInstance,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return startEnrollPhoneMfa(authInstance, requestWithRecaptchaV2);
          }
          return startEnrollPhoneMfa(authInstance, request);
        };
        const startPhoneMfaEnrollmentResponse = handleRecaptchaFlow(
          auth2,
          startPhoneMfaEnrollmentRequest,
          "mfaSmsEnrollment",
          startEnrollPhoneMfaActionCallback,
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        );
        const response = await startPhoneMfaEnrollmentResponse.catch((error) => {
          return Promise.reject(error);
        });
        return response.phoneSessionInfo.sessionInfo;
      } else {
        _assert(
          session.type === "signin",
          auth2,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        const mfaEnrollmentId = ((_a = phoneInfoOptions.multiFactorHint) === null || _a === void 0 ? void 0 : _a.uid) || phoneInfoOptions.multiFactorUid;
        _assert(
          mfaEnrollmentId,
          auth2,
          "missing-multi-factor-info"
          /* AuthErrorCode.MISSING_MFA_INFO */
        );
        const startPhoneMfaSignInRequest = {
          mfaPendingCredential: session.credential,
          mfaEnrollmentId,
          phoneSignInInfo: {
            clientType: "CLIENT_TYPE_WEB"
            /* RecaptchaClientType.WEB */
          }
        };
        const startSignInPhoneMfaActionCallback = async (authInstance, request) => {
          if (request.phoneSignInInfo.captchaResponse === FAKE_TOKEN) {
            _assert(
              (verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE,
              authInstance,
              "argument-error"
              /* AuthErrorCode.ARGUMENT_ERROR */
            );
            const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
            return startSignInPhoneMfa(authInstance, requestWithRecaptchaV2);
          }
          return startSignInPhoneMfa(authInstance, request);
        };
        const startPhoneMfaSignInResponse = handleRecaptchaFlow(
          auth2,
          startPhoneMfaSignInRequest,
          "mfaSmsSignIn",
          startSignInPhoneMfaActionCallback,
          "PHONE_PROVIDER"
          /* RecaptchaAuthProvider.PHONE_PROVIDER */
        );
        const response = await startPhoneMfaSignInResponse.catch((error) => {
          return Promise.reject(error);
        });
        return response.phoneResponseInfo.sessionInfo;
      }
    } else {
      const sendPhoneVerificationCodeRequest = {
        phoneNumber: phoneInfoOptions.phoneNumber,
        clientType: "CLIENT_TYPE_WEB"
        /* RecaptchaClientType.WEB */
      };
      const sendPhoneVerificationCodeActionCallback = async (authInstance, request) => {
        if (request.captchaResponse === FAKE_TOKEN) {
          _assert(
            (verifier === null || verifier === void 0 ? void 0 : verifier.type) === RECAPTCHA_VERIFIER_TYPE,
            authInstance,
            "argument-error"
            /* AuthErrorCode.ARGUMENT_ERROR */
          );
          const requestWithRecaptchaV2 = await injectRecaptchaV2Token(authInstance, request, verifier);
          return sendPhoneVerificationCode(authInstance, requestWithRecaptchaV2);
        }
        return sendPhoneVerificationCode(authInstance, request);
      };
      const sendPhoneVerificationCodeResponse = handleRecaptchaFlow(
        auth2,
        sendPhoneVerificationCodeRequest,
        "sendVerificationCode",
        sendPhoneVerificationCodeActionCallback,
        "PHONE_PROVIDER"
        /* RecaptchaAuthProvider.PHONE_PROVIDER */
      );
      const response = await sendPhoneVerificationCodeResponse.catch((error) => {
        return Promise.reject(error);
      });
      return response.sessionInfo;
    }
  } finally {
    verifier === null || verifier === void 0 ? void 0 : verifier._reset();
  }
}
async function injectRecaptchaV2Token(auth2, request, recaptchaV2Verifier) {
  _assert(
    recaptchaV2Verifier.type === RECAPTCHA_VERIFIER_TYPE,
    auth2,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  );
  const recaptchaV2Token = await recaptchaV2Verifier.verify();
  _assert(
    typeof recaptchaV2Token === "string",
    auth2,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  );
  const newRequest = Object.assign({}, request);
  if ("phoneEnrollmentInfo" in newRequest) {
    const phoneNumber = newRequest.phoneEnrollmentInfo.phoneNumber;
    const captchaResponse = newRequest.phoneEnrollmentInfo.captchaResponse;
    const clientType = newRequest.phoneEnrollmentInfo.clientType;
    const recaptchaVersion = newRequest.phoneEnrollmentInfo.recaptchaVersion;
    Object.assign(newRequest, {
      "phoneEnrollmentInfo": {
        phoneNumber,
        recaptchaToken: recaptchaV2Token,
        captchaResponse,
        clientType,
        recaptchaVersion
      }
    });
    return newRequest;
  } else if ("phoneSignInInfo" in newRequest) {
    const captchaResponse = newRequest.phoneSignInInfo.captchaResponse;
    const clientType = newRequest.phoneSignInInfo.clientType;
    const recaptchaVersion = newRequest.phoneSignInInfo.recaptchaVersion;
    Object.assign(newRequest, {
      "phoneSignInInfo": {
        recaptchaToken: recaptchaV2Token,
        captchaResponse,
        clientType,
        recaptchaVersion
      }
    });
    return newRequest;
  } else {
    Object.assign(newRequest, { "recaptchaToken": recaptchaV2Token });
    return newRequest;
  }
}
var PhoneAuthProvider = class {
  /**
   * @param auth - The Firebase {@link Auth} instance in which sign-ins should occur.
   *
   */
  constructor(auth2) {
    this.providerId = PhoneAuthProvider.PROVIDER_ID;
    this.auth = _castAuth(auth2);
  }
  /**
   *
   * Starts a phone number authentication flow by sending a verification code to the given phone
   * number.
   *
   * @example
   * ```javascript
   * const provider = new PhoneAuthProvider(auth);
   * const verificationId = await provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
   * const userCredential = await signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * An alternative flow is provided using the `signInWithPhoneNumber` method.
   * ```javascript
   * const confirmationResult = signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const userCredential = confirmationResult.confirm(verificationCode);
   * ```
   *
   * @param phoneInfoOptions - The user's {@link PhoneInfoOptions}. The phone number should be in
   * E.164 format (e.g. +16505550101).
   * @param applicationVerifier - An {@link ApplicationVerifier}, which prevents
   * requests from unauthorized clients. This SDK includes an implementation
   * based on reCAPTCHA v2, {@link RecaptchaVerifier}. If you've enabled
   * reCAPTCHA Enterprise bot protection in Enforce mode, this parameter is
   * optional; in all other configurations, the parameter is required.
   *
   * @returns A Promise for a verification ID that can be passed to
   * {@link PhoneAuthProvider.credential} to identify this flow.
   */
  verifyPhoneNumber(phoneOptions, applicationVerifier) {
    return _verifyPhoneNumber(this.auth, phoneOptions, getModularInstance(applicationVerifier));
  }
  /**
   * Creates a phone auth credential, given the verification ID from
   * {@link PhoneAuthProvider.verifyPhoneNumber} and the code that was sent to the user's
   * mobile device.
   *
   * @example
   * ```javascript
   * const provider = new PhoneAuthProvider(auth);
   * const verificationId = provider.verifyPhoneNumber(phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const authCredential = PhoneAuthProvider.credential(verificationId, verificationCode);
   * const userCredential = signInWithCredential(auth, authCredential);
   * ```
   *
   * @example
   * An alternative flow is provided using the `signInWithPhoneNumber` method.
   * ```javascript
   * const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, applicationVerifier);
   * // Obtain verificationCode from the user.
   * const userCredential = await confirmationResult.confirm(verificationCode);
   * ```
   *
   * @param verificationId - The verification ID returned from {@link PhoneAuthProvider.verifyPhoneNumber}.
   * @param verificationCode - The verification code sent to the user's mobile device.
   *
   * @returns The auth provider credential.
   */
  static credential(verificationId, verificationCode) {
    return PhoneAuthCredential._fromVerification(verificationId, verificationCode);
  }
  /**
   * Generates an {@link AuthCredential} from a {@link UserCredential}.
   * @param userCredential - The user credential.
   */
  static credentialFromResult(userCredential) {
    const credential = userCredential;
    return PhoneAuthProvider.credentialFromTaggedObject(credential);
  }
  /**
   * Returns an {@link AuthCredential} when passed an error.
   *
   * @remarks
   *
   * This method works for errors like
   * `auth/account-exists-with-different-credentials`. This is useful for
   * recovering when attempting to set a user's phone number but the number
   * in question is already tied to another account. For example, the following
   * code tries to update the current user's phone number, and if that
   * fails, links the user with the account associated with that number:
   *
   * ```js
   * const provider = new PhoneAuthProvider(auth);
   * const verificationId = await provider.verifyPhoneNumber(number, verifier);
   * try {
   *   const code = ''; // Prompt the user for the verification code
   *   await updatePhoneNumber(
   *       auth.currentUser,
   *       PhoneAuthProvider.credential(verificationId, code));
   * } catch (e) {
   *   if ((e as FirebaseError)?.code === 'auth/account-exists-with-different-credential') {
   *     const cred = PhoneAuthProvider.credentialFromError(e);
   *     await linkWithCredential(auth.currentUser, cred);
   *   }
   * }
   *
   * // At this point, auth.currentUser.phoneNumber === number.
   * ```
   *
   * @param error - The error to generate a credential from.
   */
  static credentialFromError(error) {
    return PhoneAuthProvider.credentialFromTaggedObject(error.customData || {});
  }
  static credentialFromTaggedObject({ _tokenResponse: tokenResponse }) {
    if (!tokenResponse) {
      return null;
    }
    const { phoneNumber, temporaryProof } = tokenResponse;
    if (phoneNumber && temporaryProof) {
      return PhoneAuthCredential._fromTokenResponse(phoneNumber, temporaryProof);
    }
    return null;
  }
};
PhoneAuthProvider.PROVIDER_ID = "phone";
PhoneAuthProvider.PHONE_SIGN_IN_METHOD = "phone";
function _withDefaultResolver(auth2, resolverOverride) {
  if (resolverOverride) {
    return _getInstance(resolverOverride);
  }
  _assert(
    auth2._popupRedirectResolver,
    auth2,
    "argument-error"
    /* AuthErrorCode.ARGUMENT_ERROR */
  );
  return auth2._popupRedirectResolver;
}
var IdpCredential = class extends AuthCredential {
  constructor(params) {
    super(
      "custom",
      "custom"
      /* ProviderId.CUSTOM */
    );
    this.params = params;
  }
  _getIdTokenResponse(auth2) {
    return signInWithIdp(auth2, this._buildIdpRequest());
  }
  _linkToIdToken(auth2, idToken) {
    return signInWithIdp(auth2, this._buildIdpRequest(idToken));
  }
  _getReauthenticationResolver(auth2) {
    return signInWithIdp(auth2, this._buildIdpRequest());
  }
  _buildIdpRequest(idToken) {
    const request = {
      requestUri: this.params.requestUri,
      sessionId: this.params.sessionId,
      postBody: this.params.postBody,
      tenantId: this.params.tenantId,
      pendingToken: this.params.pendingToken,
      returnSecureToken: true,
      returnIdpCredential: true
    };
    if (idToken) {
      request.idToken = idToken;
    }
    return request;
  }
};
function _signIn(params) {
  return _signInWithCredential(params.auth, new IdpCredential(params), params.bypassAuthState);
}
function _reauth(params) {
  const { auth: auth2, user } = params;
  _assert(
    user,
    auth2,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  return _reauthenticate(user, new IdpCredential(params), params.bypassAuthState);
}
async function _link(params) {
  const { auth: auth2, user } = params;
  _assert(
    user,
    auth2,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  return _link$1(user, new IdpCredential(params), params.bypassAuthState);
}
var AbstractPopupRedirectOperation = class {
  constructor(auth2, filter2, resolver, user, bypassAuthState = false) {
    this.auth = auth2;
    this.resolver = resolver;
    this.user = user;
    this.bypassAuthState = bypassAuthState;
    this.pendingPromise = null;
    this.eventManager = null;
    this.filter = Array.isArray(filter2) ? filter2 : [filter2];
  }
  execute() {
    return new Promise(async (resolve, reject) => {
      this.pendingPromise = { resolve, reject };
      try {
        this.eventManager = await this.resolver._initialize(this.auth);
        await this.onExecution();
        this.eventManager.registerConsumer(this);
      } catch (e) {
        this.reject(e);
      }
    });
  }
  async onAuthEvent(event) {
    const { urlResponse, sessionId, postBody, tenantId, error, type } = event;
    if (error) {
      this.reject(error);
      return;
    }
    const params = {
      auth: this.auth,
      requestUri: urlResponse,
      sessionId,
      tenantId: tenantId || void 0,
      postBody: postBody || void 0,
      user: this.user,
      bypassAuthState: this.bypassAuthState
    };
    try {
      this.resolve(await this.getIdpTask(type)(params));
    } catch (e) {
      this.reject(e);
    }
  }
  onError(error) {
    this.reject(error);
  }
  getIdpTask(type) {
    switch (type) {
      case "signInViaPopup":
      case "signInViaRedirect":
        return _signIn;
      case "linkViaPopup":
      case "linkViaRedirect":
        return _link;
      case "reauthViaPopup":
      case "reauthViaRedirect":
        return _reauth;
      default:
        _fail(
          this.auth,
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
    }
  }
  resolve(cred) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.resolve(cred);
    this.unregisterAndCleanUp();
  }
  reject(error) {
    debugAssert(this.pendingPromise, "Pending promise was never set");
    this.pendingPromise.reject(error);
    this.unregisterAndCleanUp();
  }
  unregisterAndCleanUp() {
    if (this.eventManager) {
      this.eventManager.unregisterConsumer(this);
    }
    this.pendingPromise = null;
    this.cleanUp();
  }
};
var _POLL_WINDOW_CLOSE_TIMEOUT = new Delay(2e3, 1e4);
var PopupOperation = class extends AbstractPopupRedirectOperation {
  constructor(auth2, filter2, provider, resolver, user) {
    super(auth2, filter2, resolver, user);
    this.provider = provider;
    this.authWindow = null;
    this.pollId = null;
    if (PopupOperation.currentPopupAction) {
      PopupOperation.currentPopupAction.cancel();
    }
    PopupOperation.currentPopupAction = this;
  }
  async executeNotNull() {
    const result = await this.execute();
    _assert(
      result,
      this.auth,
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    return result;
  }
  async onExecution() {
    debugAssert(this.filter.length === 1, "Popup operations only handle one event");
    const eventId = _generateEventId();
    this.authWindow = await this.resolver._openPopup(
      this.auth,
      this.provider,
      this.filter[0],
      // There's always one, see constructor
      eventId
    );
    this.authWindow.associatedEvent = eventId;
    this.resolver._originValidation(this.auth).catch((e) => {
      this.reject(e);
    });
    this.resolver._isIframeWebStorageSupported(this.auth, (isSupported) => {
      if (!isSupported) {
        this.reject(_createError(
          this.auth,
          "web-storage-unsupported"
          /* AuthErrorCode.WEB_STORAGE_UNSUPPORTED */
        ));
      }
    });
    this.pollUserCancellation();
  }
  get eventId() {
    var _a;
    return ((_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.associatedEvent) || null;
  }
  cancel() {
    this.reject(_createError(
      this.auth,
      "cancelled-popup-request"
      /* AuthErrorCode.EXPIRED_POPUP_REQUEST */
    ));
  }
  cleanUp() {
    if (this.authWindow) {
      this.authWindow.close();
    }
    if (this.pollId) {
      window.clearTimeout(this.pollId);
    }
    this.authWindow = null;
    this.pollId = null;
    PopupOperation.currentPopupAction = null;
  }
  pollUserCancellation() {
    const poll = () => {
      var _a, _b;
      if ((_b = (_a = this.authWindow) === null || _a === void 0 ? void 0 : _a.window) === null || _b === void 0 ? void 0 : _b.closed) {
        this.pollId = window.setTimeout(
          () => {
            this.pollId = null;
            this.reject(_createError(
              this.auth,
              "popup-closed-by-user"
              /* AuthErrorCode.POPUP_CLOSED_BY_USER */
            ));
          },
          8e3
          /* _Timeout.AUTH_EVENT */
        );
        return;
      }
      this.pollId = window.setTimeout(poll, _POLL_WINDOW_CLOSE_TIMEOUT.get());
    };
    poll();
  }
};
PopupOperation.currentPopupAction = null;
var PENDING_REDIRECT_KEY = "pendingRedirect";
var redirectOutcomeMap = /* @__PURE__ */ new Map();
var RedirectAction = class extends AbstractPopupRedirectOperation {
  constructor(auth2, resolver, bypassAuthState = false) {
    super(auth2, [
      "signInViaRedirect",
      "linkViaRedirect",
      "reauthViaRedirect",
      "unknown"
      /* AuthEventType.UNKNOWN */
    ], resolver, void 0, bypassAuthState);
    this.eventId = null;
  }
  /**
   * Override the execute function; if we already have a redirect result, then
   * just return it.
   */
  async execute() {
    let readyOutcome = redirectOutcomeMap.get(this.auth._key());
    if (!readyOutcome) {
      try {
        const hasPendingRedirect = await _getAndClearPendingRedirectStatus(this.resolver, this.auth);
        const result = hasPendingRedirect ? await super.execute() : null;
        readyOutcome = () => Promise.resolve(result);
      } catch (e) {
        readyOutcome = () => Promise.reject(e);
      }
      redirectOutcomeMap.set(this.auth._key(), readyOutcome);
    }
    if (!this.bypassAuthState) {
      redirectOutcomeMap.set(this.auth._key(), () => Promise.resolve(null));
    }
    return readyOutcome();
  }
  async onAuthEvent(event) {
    if (event.type === "signInViaRedirect") {
      return super.onAuthEvent(event);
    } else if (event.type === "unknown") {
      this.resolve(null);
      return;
    }
    if (event.eventId) {
      const user = await this.auth._redirectUserForId(event.eventId);
      if (user) {
        this.user = user;
        return super.onAuthEvent(event);
      } else {
        this.resolve(null);
      }
    }
  }
  async onExecution() {
  }
  cleanUp() {
  }
};
async function _getAndClearPendingRedirectStatus(resolver, auth2) {
  const key = pendingRedirectKey(auth2);
  const persistence = resolverPersistence(resolver);
  if (!await persistence._isAvailable()) {
    return false;
  }
  const hasPendingRedirect = await persistence._get(key) === "true";
  await persistence._remove(key);
  return hasPendingRedirect;
}
function _overrideRedirectResult(auth2, result) {
  redirectOutcomeMap.set(auth2._key(), result);
}
function resolverPersistence(resolver) {
  return _getInstance(resolver._redirectPersistence);
}
function pendingRedirectKey(auth2) {
  return _persistenceKeyName(PENDING_REDIRECT_KEY, auth2.config.apiKey, auth2.name);
}
async function _getRedirectResult(auth2, resolverExtern, bypassAuthState = false) {
  if (_isFirebaseServerApp(auth2.app)) {
    return Promise.reject(_serverAppCurrentUserOperationNotSupportedError(auth2));
  }
  const authInternal = _castAuth(auth2);
  const resolver = _withDefaultResolver(authInternal, resolverExtern);
  const action = new RedirectAction(authInternal, resolver, bypassAuthState);
  const result = await action.execute();
  if (result && !bypassAuthState) {
    delete result.user._redirectEventId;
    await authInternal._persistUserIfCurrent(result.user);
    await authInternal._setRedirectUser(null, resolverExtern);
  }
  return result;
}
var EVENT_DUPLICATION_CACHE_DURATION_MS = 10 * 60 * 1e3;
var AuthEventManager = class {
  constructor(auth2) {
    this.auth = auth2;
    this.cachedEventUids = /* @__PURE__ */ new Set();
    this.consumers = /* @__PURE__ */ new Set();
    this.queuedRedirectEvent = null;
    this.hasHandledPotentialRedirect = false;
    this.lastProcessedEventTime = Date.now();
  }
  registerConsumer(authEventConsumer) {
    this.consumers.add(authEventConsumer);
    if (this.queuedRedirectEvent && this.isEventForConsumer(this.queuedRedirectEvent, authEventConsumer)) {
      this.sendToConsumer(this.queuedRedirectEvent, authEventConsumer);
      this.saveEventToCache(this.queuedRedirectEvent);
      this.queuedRedirectEvent = null;
    }
  }
  unregisterConsumer(authEventConsumer) {
    this.consumers.delete(authEventConsumer);
  }
  onEvent(event) {
    if (this.hasEventBeenHandled(event)) {
      return false;
    }
    let handled = false;
    this.consumers.forEach((consumer) => {
      if (this.isEventForConsumer(event, consumer)) {
        handled = true;
        this.sendToConsumer(event, consumer);
        this.saveEventToCache(event);
      }
    });
    if (this.hasHandledPotentialRedirect || !isRedirectEvent(event)) {
      return handled;
    }
    this.hasHandledPotentialRedirect = true;
    if (!handled) {
      this.queuedRedirectEvent = event;
      handled = true;
    }
    return handled;
  }
  sendToConsumer(event, consumer) {
    var _a;
    if (event.error && !isNullRedirectEvent(event)) {
      const code = ((_a = event.error.code) === null || _a === void 0 ? void 0 : _a.split("auth/")[1]) || "internal-error";
      consumer.onError(_createError(this.auth, code));
    } else {
      consumer.onAuthEvent(event);
    }
  }
  isEventForConsumer(event, consumer) {
    const eventIdMatches = consumer.eventId === null || !!event.eventId && event.eventId === consumer.eventId;
    return consumer.filter.includes(event.type) && eventIdMatches;
  }
  hasEventBeenHandled(event) {
    if (Date.now() - this.lastProcessedEventTime >= EVENT_DUPLICATION_CACHE_DURATION_MS) {
      this.cachedEventUids.clear();
    }
    return this.cachedEventUids.has(eventUid(event));
  }
  saveEventToCache(event) {
    this.cachedEventUids.add(eventUid(event));
    this.lastProcessedEventTime = Date.now();
  }
};
function eventUid(e) {
  return [e.type, e.eventId, e.sessionId, e.tenantId].filter((v2) => v2).join("-");
}
function isNullRedirectEvent({ type, error }) {
  return type === "unknown" && (error === null || error === void 0 ? void 0 : error.code) === `auth/${"no-auth-event"}`;
}
function isRedirectEvent(event) {
  switch (event.type) {
    case "signInViaRedirect":
    case "linkViaRedirect":
    case "reauthViaRedirect":
      return true;
    case "unknown":
      return isNullRedirectEvent(event);
    default:
      return false;
  }
}
async function _getProjectConfig(auth2, request = {}) {
  return _performApiRequest(auth2, "GET", "/v1/projects", request);
}
var IP_ADDRESS_REGEX = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
var HTTP_REGEX = /^https?/;
async function _validateOrigin(auth2) {
  if (auth2.config.emulator) {
    return;
  }
  const { authorizedDomains } = await _getProjectConfig(auth2);
  for (const domain of authorizedDomains) {
    try {
      if (matchDomain(domain)) {
        return;
      }
    } catch (_a) {
    }
  }
  _fail(
    auth2,
    "unauthorized-domain"
    /* AuthErrorCode.INVALID_ORIGIN */
  );
}
function matchDomain(expected) {
  const currentUrl = _getCurrentUrl();
  const { protocol, hostname } = new URL(currentUrl);
  if (expected.startsWith("chrome-extension://")) {
    const ceUrl = new URL(expected);
    if (ceUrl.hostname === "" && hostname === "") {
      return protocol === "chrome-extension:" && expected.replace("chrome-extension://", "") === currentUrl.replace("chrome-extension://", "");
    }
    return protocol === "chrome-extension:" && ceUrl.hostname === hostname;
  }
  if (!HTTP_REGEX.test(protocol)) {
    return false;
  }
  if (IP_ADDRESS_REGEX.test(expected)) {
    return hostname === expected;
  }
  const escapedDomainPattern = expected.replace(/\./g, "\\.");
  const re2 = new RegExp("^(.+\\." + escapedDomainPattern + "|" + escapedDomainPattern + ")$", "i");
  return re2.test(hostname);
}
var NETWORK_TIMEOUT = new Delay(3e4, 6e4);
function resetUnloadedGapiModules() {
  const beacon = _window().___jsl;
  if (beacon === null || beacon === void 0 ? void 0 : beacon.H) {
    for (const hint of Object.keys(beacon.H)) {
      beacon.H[hint].r = beacon.H[hint].r || [];
      beacon.H[hint].L = beacon.H[hint].L || [];
      beacon.H[hint].r = [...beacon.H[hint].L];
      if (beacon.CP) {
        for (let i = 0; i < beacon.CP.length; i++) {
          beacon.CP[i] = null;
        }
      }
    }
  }
}
function loadGapi(auth2) {
  return new Promise((resolve, reject) => {
    var _a, _b, _c;
    function loadGapiIframe() {
      resetUnloadedGapiModules();
      gapi.load("gapi.iframes", {
        callback: () => {
          resolve(gapi.iframes.getContext());
        },
        ontimeout: () => {
          resetUnloadedGapiModules();
          reject(_createError(
            auth2,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        },
        timeout: NETWORK_TIMEOUT.get()
      });
    }
    if ((_b = (_a = _window().gapi) === null || _a === void 0 ? void 0 : _a.iframes) === null || _b === void 0 ? void 0 : _b.Iframe) {
      resolve(gapi.iframes.getContext());
    } else if (!!((_c = _window().gapi) === null || _c === void 0 ? void 0 : _c.load)) {
      loadGapiIframe();
    } else {
      const cbName = _generateCallbackName("iframefcb");
      _window()[cbName] = () => {
        if (!!gapi.load) {
          loadGapiIframe();
        } else {
          reject(_createError(
            auth2,
            "network-request-failed"
            /* AuthErrorCode.NETWORK_REQUEST_FAILED */
          ));
        }
      };
      return _loadJS(`${_gapiScriptUrl()}?onload=${cbName}`).catch((e) => reject(e));
    }
  }).catch((error) => {
    cachedGApiLoader = null;
    throw error;
  });
}
var cachedGApiLoader = null;
function _loadGapi(auth2) {
  cachedGApiLoader = cachedGApiLoader || loadGapi(auth2);
  return cachedGApiLoader;
}
var PING_TIMEOUT = new Delay(5e3, 15e3);
var IFRAME_PATH = "__/auth/iframe";
var EMULATED_IFRAME_PATH = "emulator/auth/iframe";
var IFRAME_ATTRIBUTES = {
  style: {
    position: "absolute",
    top: "-100px",
    width: "1px",
    height: "1px"
  },
  "aria-hidden": "true",
  tabindex: "-1"
};
var EID_FROM_APIHOST = /* @__PURE__ */ new Map([
  ["identitytoolkit.googleapis.com", "p"],
  ["staging-identitytoolkit.sandbox.googleapis.com", "s"],
  ["test-identitytoolkit.sandbox.googleapis.com", "t"]
  // test
]);
function getIframeUrl(auth2) {
  const config = auth2.config;
  _assert(
    config.authDomain,
    auth2,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  const url = config.emulator ? _emulatorUrl(config, EMULATED_IFRAME_PATH) : `https://${auth2.config.authDomain}/${IFRAME_PATH}`;
  const params = {
    apiKey: config.apiKey,
    appName: auth2.name,
    v: SDK_VERSION
  };
  const eid = EID_FROM_APIHOST.get(auth2.config.apiHost);
  if (eid) {
    params.eid = eid;
  }
  const frameworks = auth2._getFrameworks();
  if (frameworks.length) {
    params.fw = frameworks.join(",");
  }
  return `${url}?${querystring(params).slice(1)}`;
}
async function _openIframe(auth2) {
  const context = await _loadGapi(auth2);
  const gapi2 = _window().gapi;
  _assert(
    gapi2,
    auth2,
    "internal-error"
    /* AuthErrorCode.INTERNAL_ERROR */
  );
  return context.open({
    where: document.body,
    url: getIframeUrl(auth2),
    messageHandlersFilter: gapi2.iframes.CROSS_ORIGIN_IFRAMES_FILTER,
    attributes: IFRAME_ATTRIBUTES,
    dontclear: true
  }, (iframe) => new Promise(async (resolve, reject) => {
    await iframe.restyle({
      // Prevent iframe from closing on mouse out.
      setHideOnLeave: false
    });
    const networkError = _createError(
      auth2,
      "network-request-failed"
      /* AuthErrorCode.NETWORK_REQUEST_FAILED */
    );
    const networkErrorTimer = _window().setTimeout(() => {
      reject(networkError);
    }, PING_TIMEOUT.get());
    function clearTimerAndResolve() {
      _window().clearTimeout(networkErrorTimer);
      resolve(iframe);
    }
    iframe.ping(clearTimerAndResolve).then(clearTimerAndResolve, () => {
      reject(networkError);
    });
  }));
}
var BASE_POPUP_OPTIONS = {
  location: "yes",
  resizable: "yes",
  statusbar: "yes",
  toolbar: "no"
};
var DEFAULT_WIDTH = 500;
var DEFAULT_HEIGHT = 600;
var TARGET_BLANK = "_blank";
var FIREFOX_EMPTY_URL = "http://localhost";
var AuthPopup = class {
  constructor(window2) {
    this.window = window2;
    this.associatedEvent = null;
  }
  close() {
    if (this.window) {
      try {
        this.window.close();
      } catch (e) {
      }
    }
  }
};
function _open(auth2, url, name4, width = DEFAULT_WIDTH, height = DEFAULT_HEIGHT) {
  const top = Math.max((window.screen.availHeight - height) / 2, 0).toString();
  const left = Math.max((window.screen.availWidth - width) / 2, 0).toString();
  let target = "";
  const options = Object.assign(Object.assign({}, BASE_POPUP_OPTIONS), {
    width: width.toString(),
    height: height.toString(),
    top,
    left
  });
  const ua = getUA().toLowerCase();
  if (name4) {
    target = _isChromeIOS(ua) ? TARGET_BLANK : name4;
  }
  if (_isFirefox(ua)) {
    url = url || FIREFOX_EMPTY_URL;
    options.scrollbars = "yes";
  }
  const optionsString = Object.entries(options).reduce((accum, [key, value]) => `${accum}${key}=${value},`, "");
  if (_isIOSStandalone(ua) && target !== "_self") {
    openAsNewWindowIOS(url || "", target);
    return new AuthPopup(null);
  }
  const newWin = window.open(url || "", target, optionsString);
  _assert(
    newWin,
    auth2,
    "popup-blocked"
    /* AuthErrorCode.POPUP_BLOCKED */
  );
  try {
    newWin.focus();
  } catch (e) {
  }
  return new AuthPopup(newWin);
}
function openAsNewWindowIOS(url, target) {
  const el = document.createElement("a");
  el.href = url;
  el.target = target;
  const click = document.createEvent("MouseEvent");
  click.initMouseEvent("click", true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 1, null);
  el.dispatchEvent(click);
}
var WIDGET_PATH = "__/auth/handler";
var EMULATOR_WIDGET_PATH = "emulator/auth/handler";
var FIREBASE_APP_CHECK_FRAGMENT_ID = encodeURIComponent("fac");
async function _getRedirectUrl(auth2, provider, authType, redirectUrl, eventId, additionalParams) {
  _assert(
    auth2.config.authDomain,
    auth2,
    "auth-domain-config-required"
    /* AuthErrorCode.MISSING_AUTH_DOMAIN */
  );
  _assert(
    auth2.config.apiKey,
    auth2,
    "invalid-api-key"
    /* AuthErrorCode.INVALID_API_KEY */
  );
  const params = {
    apiKey: auth2.config.apiKey,
    appName: auth2.name,
    authType,
    redirectUrl,
    v: SDK_VERSION,
    eventId
  };
  if (provider instanceof FederatedAuthProvider) {
    provider.setDefaultLanguage(auth2.languageCode);
    params.providerId = provider.providerId || "";
    if (!isEmpty(provider.getCustomParameters())) {
      params.customParameters = JSON.stringify(provider.getCustomParameters());
    }
    for (const [key, value] of Object.entries(additionalParams || {})) {
      params[key] = value;
    }
  }
  if (provider instanceof BaseOAuthProvider) {
    const scopes = provider.getScopes().filter((scope) => scope !== "");
    if (scopes.length > 0) {
      params.scopes = scopes.join(",");
    }
  }
  if (auth2.tenantId) {
    params.tid = auth2.tenantId;
  }
  const paramsDict = params;
  for (const key of Object.keys(paramsDict)) {
    if (paramsDict[key] === void 0) {
      delete paramsDict[key];
    }
  }
  const appCheckToken = await auth2._getAppCheckToken();
  const appCheckTokenFragment = appCheckToken ? `#${FIREBASE_APP_CHECK_FRAGMENT_ID}=${encodeURIComponent(appCheckToken)}` : "";
  return `${getHandlerBase(auth2)}?${querystring(paramsDict).slice(1)}${appCheckTokenFragment}`;
}
function getHandlerBase({ config }) {
  if (!config.emulator) {
    return `https://${config.authDomain}/${WIDGET_PATH}`;
  }
  return _emulatorUrl(config, EMULATOR_WIDGET_PATH);
}
var WEB_STORAGE_SUPPORT_KEY = "webStorageSupport";
var BrowserPopupRedirectResolver = class {
  constructor() {
    this.eventManagers = {};
    this.iframes = {};
    this.originValidationPromises = {};
    this._redirectPersistence = browserSessionPersistence;
    this._completeRedirectFn = _getRedirectResult;
    this._overrideRedirectResult = _overrideRedirectResult;
  }
  // Wrapping in async even though we don't await anywhere in order
  // to make sure errors are raised as promise rejections
  async _openPopup(auth2, provider, authType, eventId) {
    var _a;
    debugAssert((_a = this.eventManagers[auth2._key()]) === null || _a === void 0 ? void 0 : _a.manager, "_initialize() not called before _openPopup()");
    const url = await _getRedirectUrl(auth2, provider, authType, _getCurrentUrl(), eventId);
    return _open(auth2, url, _generateEventId());
  }
  async _openRedirect(auth2, provider, authType, eventId) {
    await this._originValidation(auth2);
    const url = await _getRedirectUrl(auth2, provider, authType, _getCurrentUrl(), eventId);
    _setWindowLocation(url);
    return new Promise(() => {
    });
  }
  _initialize(auth2) {
    const key = auth2._key();
    if (this.eventManagers[key]) {
      const { manager, promise: promise2 } = this.eventManagers[key];
      if (manager) {
        return Promise.resolve(manager);
      } else {
        debugAssert(promise2, "If manager is not set, promise should be");
        return promise2;
      }
    }
    const promise = this.initAndGetManager(auth2);
    this.eventManagers[key] = { promise };
    promise.catch(() => {
      delete this.eventManagers[key];
    });
    return promise;
  }
  async initAndGetManager(auth2) {
    const iframe = await _openIframe(auth2);
    const manager = new AuthEventManager(auth2);
    iframe.register("authEvent", (iframeEvent) => {
      _assert(
        iframeEvent === null || iframeEvent === void 0 ? void 0 : iframeEvent.authEvent,
        auth2,
        "invalid-auth-event"
        /* AuthErrorCode.INVALID_AUTH_EVENT */
      );
      const handled = manager.onEvent(iframeEvent.authEvent);
      return {
        status: handled ? "ACK" : "ERROR"
        /* GapiOutcome.ERROR */
      };
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
    this.eventManagers[auth2._key()] = { manager };
    this.iframes[auth2._key()] = iframe;
    return manager;
  }
  _isIframeWebStorageSupported(auth2, cb) {
    const iframe = this.iframes[auth2._key()];
    iframe.send(WEB_STORAGE_SUPPORT_KEY, { type: WEB_STORAGE_SUPPORT_KEY }, (result) => {
      var _a;
      const isSupported = (_a = result === null || result === void 0 ? void 0 : result[0]) === null || _a === void 0 ? void 0 : _a[WEB_STORAGE_SUPPORT_KEY];
      if (isSupported !== void 0) {
        cb(!!isSupported);
      }
      _fail(
        auth2,
        "internal-error"
        /* AuthErrorCode.INTERNAL_ERROR */
      );
    }, gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER);
  }
  _originValidation(auth2) {
    const key = auth2._key();
    if (!this.originValidationPromises[key]) {
      this.originValidationPromises[key] = _validateOrigin(auth2);
    }
    return this.originValidationPromises[key];
  }
  get _shouldInitProactively() {
    return _isMobileBrowser() || _isSafari() || _isIOS();
  }
};
var browserPopupRedirectResolver = BrowserPopupRedirectResolver;
var MultiFactorAssertionImpl = class {
  constructor(factorId) {
    this.factorId = factorId;
  }
  _process(auth2, session, displayName) {
    switch (session.type) {
      case "enroll":
        return this._finalizeEnroll(auth2, session.credential, displayName);
      case "signin":
        return this._finalizeSignIn(auth2, session.credential);
      default:
        return debugFail("unexpected MultiFactorSessionType");
    }
  }
};
var PhoneMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
  constructor(credential) {
    super(
      "phone"
      /* FactorId.PHONE */
    );
    this.credential = credential;
  }
  /** @internal */
  static _fromCredential(credential) {
    return new PhoneMultiFactorAssertionImpl(credential);
  }
  /** @internal */
  _finalizeEnroll(auth2, idToken, displayName) {
    return finalizeEnrollPhoneMfa(auth2, {
      idToken,
      displayName,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
  /** @internal */
  _finalizeSignIn(auth2, mfaPendingCredential) {
    return finalizeSignInPhoneMfa(auth2, {
      mfaPendingCredential,
      phoneVerificationInfo: this.credential._makeVerificationRequest()
    });
  }
};
var PhoneMultiFactorGenerator = class {
  constructor() {
  }
  /**
   * Provides a {@link PhoneMultiFactorAssertion} to confirm ownership of the phone second factor.
   *
   * @remarks
   * This method does not work in a Node.js environment.
   *
   * @param phoneAuthCredential - A credential provided by {@link PhoneAuthProvider.credential}.
   * @returns A {@link PhoneMultiFactorAssertion} which can be used with
   * {@link MultiFactorResolver.resolveSignIn}
   */
  static assertion(credential) {
    return PhoneMultiFactorAssertionImpl._fromCredential(credential);
  }
};
PhoneMultiFactorGenerator.FACTOR_ID = "phone";
var TotpMultiFactorGenerator = class {
  /**
   * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of
   * the TOTP (time-based one-time password) second factor.
   * This assertion is used to complete enrollment in TOTP second factor.
   *
   * @param secret A {@link TotpSecret} containing the shared secret key and other TOTP parameters.
   * @param oneTimePassword One-time password from TOTP App.
   * @returns A {@link TotpMultiFactorAssertion} which can be used with
   * {@link MultiFactorUser.enroll}.
   */
  static assertionForEnrollment(secret, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromSecret(secret, oneTimePassword);
  }
  /**
   * Provides a {@link TotpMultiFactorAssertion} to confirm ownership of the TOTP second factor.
   * This assertion is used to complete signIn with TOTP as the second factor.
   *
   * @param enrollmentId identifies the enrolled TOTP second factor.
   * @param oneTimePassword One-time password from TOTP App.
   * @returns A {@link TotpMultiFactorAssertion} which can be used with
   * {@link MultiFactorResolver.resolveSignIn}.
   */
  static assertionForSignIn(enrollmentId, oneTimePassword) {
    return TotpMultiFactorAssertionImpl._fromEnrollmentId(enrollmentId, oneTimePassword);
  }
  /**
   * Returns a promise to {@link TotpSecret} which contains the TOTP shared secret key and other parameters.
   * Creates a TOTP secret as part of enrolling a TOTP second factor.
   * Used for generating a QR code URL or inputting into a TOTP app.
   * This method uses the auth instance corresponding to the user in the multiFactorSession.
   *
   * @param session The {@link MultiFactorSession} that the user is part of.
   * @returns A promise to {@link TotpSecret}.
   */
  static async generateSecret(session) {
    var _a;
    const mfaSession = session;
    _assert(
      typeof ((_a = mfaSession.user) === null || _a === void 0 ? void 0 : _a.auth) !== "undefined",
      "internal-error"
      /* AuthErrorCode.INTERNAL_ERROR */
    );
    const response = await startEnrollTotpMfa(mfaSession.user.auth, {
      idToken: mfaSession.credential,
      totpEnrollmentInfo: {}
    });
    return TotpSecret._fromStartTotpMfaEnrollmentResponse(response, mfaSession.user.auth);
  }
};
TotpMultiFactorGenerator.FACTOR_ID = "totp";
var TotpMultiFactorAssertionImpl = class extends MultiFactorAssertionImpl {
  constructor(otp, enrollmentId, secret) {
    super(
      "totp"
      /* FactorId.TOTP */
    );
    this.otp = otp;
    this.enrollmentId = enrollmentId;
    this.secret = secret;
  }
  /** @internal */
  static _fromSecret(secret, otp) {
    return new TotpMultiFactorAssertionImpl(otp, void 0, secret);
  }
  /** @internal */
  static _fromEnrollmentId(enrollmentId, otp) {
    return new TotpMultiFactorAssertionImpl(otp, enrollmentId);
  }
  /** @internal */
  async _finalizeEnroll(auth2, idToken, displayName) {
    _assert(
      typeof this.secret !== "undefined",
      auth2,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    );
    return finalizeEnrollTotpMfa(auth2, {
      idToken,
      displayName,
      totpVerificationInfo: this.secret._makeTotpVerificationInfo(this.otp)
    });
  }
  /** @internal */
  async _finalizeSignIn(auth2, mfaPendingCredential) {
    _assert(
      this.enrollmentId !== void 0 && this.otp !== void 0,
      auth2,
      "argument-error"
      /* AuthErrorCode.ARGUMENT_ERROR */
    );
    const totpVerificationInfo = { verificationCode: this.otp };
    return finalizeSignInTotpMfa(auth2, {
      mfaPendingCredential,
      mfaEnrollmentId: this.enrollmentId,
      totpVerificationInfo
    });
  }
};
var TotpSecret = class {
  // The public members are declared outside the constructor so the docs can be generated.
  constructor(secretKey, hashingAlgorithm, codeLength, codeIntervalSeconds, enrollmentCompletionDeadline, sessionInfo, auth2) {
    this.sessionInfo = sessionInfo;
    this.auth = auth2;
    this.secretKey = secretKey;
    this.hashingAlgorithm = hashingAlgorithm;
    this.codeLength = codeLength;
    this.codeIntervalSeconds = codeIntervalSeconds;
    this.enrollmentCompletionDeadline = enrollmentCompletionDeadline;
  }
  /** @internal */
  static _fromStartTotpMfaEnrollmentResponse(response, auth2) {
    return new TotpSecret(response.totpSessionInfo.sharedSecretKey, response.totpSessionInfo.hashingAlgorithm, response.totpSessionInfo.verificationCodeLength, response.totpSessionInfo.periodSec, new Date(response.totpSessionInfo.finalizeEnrollmentTime).toUTCString(), response.totpSessionInfo.sessionInfo, auth2);
  }
  /** @internal */
  _makeTotpVerificationInfo(otp) {
    return { sessionInfo: this.sessionInfo, verificationCode: otp };
  }
  /**
   * Returns a QR code URL as described in
   * https://github.com/google/google-authenticator/wiki/Key-Uri-Format
   * This can be displayed to the user as a QR code to be scanned into a TOTP app like Google Authenticator.
   * If the optional parameters are unspecified, an accountName of <userEmail> and issuer of <firebaseAppName> are used.
   *
   * @param accountName the name of the account/app along with a user identifier.
   * @param issuer issuer of the TOTP (likely the app name).
   * @returns A QR code URL string.
   */
  generateQrCodeUrl(accountName, issuer) {
    var _a;
    let useDefaults = false;
    if (_isEmptyString(accountName) || _isEmptyString(issuer)) {
      useDefaults = true;
    }
    if (useDefaults) {
      if (_isEmptyString(accountName)) {
        accountName = ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.email) || "unknownuser";
      }
      if (_isEmptyString(issuer)) {
        issuer = this.auth.name;
      }
    }
    return `otpauth://totp/${issuer}:${accountName}?secret=${this.secretKey}&issuer=${issuer}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`;
  }
};
function _isEmptyString(input) {
  return typeof input === "undefined" || (input === null || input === void 0 ? void 0 : input.length) === 0;
}
var name3 = "@firebase/auth";
var version3 = "1.8.0";
var AuthInterop = class {
  constructor(auth2) {
    this.auth = auth2;
    this.internalListeners = /* @__PURE__ */ new Map();
  }
  getUid() {
    var _a;
    this.assertAuthConfigured();
    return ((_a = this.auth.currentUser) === null || _a === void 0 ? void 0 : _a.uid) || null;
  }
  async getToken(forceRefresh) {
    this.assertAuthConfigured();
    await this.auth._initializationPromise;
    if (!this.auth.currentUser) {
      return null;
    }
    const accessToken = await this.auth.currentUser.getIdToken(forceRefresh);
    return { accessToken };
  }
  addAuthTokenListener(listener) {
    this.assertAuthConfigured();
    if (this.internalListeners.has(listener)) {
      return;
    }
    const unsubscribe = this.auth.onIdTokenChanged((user) => {
      listener((user === null || user === void 0 ? void 0 : user.stsTokenManager.accessToken) || null);
    });
    this.internalListeners.set(listener, unsubscribe);
    this.updateProactiveRefresh();
  }
  removeAuthTokenListener(listener) {
    this.assertAuthConfigured();
    const unsubscribe = this.internalListeners.get(listener);
    if (!unsubscribe) {
      return;
    }
    this.internalListeners.delete(listener);
    unsubscribe();
    this.updateProactiveRefresh();
  }
  assertAuthConfigured() {
    _assert(
      this.auth._initializationPromise,
      "dependent-sdk-initialized-before-auth"
      /* AuthErrorCode.DEPENDENT_SDK_INIT_BEFORE_AUTH */
    );
  }
  updateProactiveRefresh() {
    if (this.internalListeners.size > 0) {
      this.auth._startProactiveRefresh();
    } else {
      this.auth._stopProactiveRefresh();
    }
  }
};
function getVersionForPlatform(clientPlatform) {
  switch (clientPlatform) {
    case "Node":
      return "node";
    case "ReactNative":
      return "rn";
    case "Worker":
      return "webworker";
    case "Cordova":
      return "cordova";
    case "WebExtension":
      return "web-extension";
    default:
      return void 0;
  }
}
function registerAuth(clientPlatform) {
  _registerComponent(new Component(
    "auth",
    (container, { options: deps }) => {
      const app2 = container.getProvider("app").getImmediate();
      const heartbeatServiceProvider = container.getProvider("heartbeat");
      const appCheckServiceProvider = container.getProvider("app-check-internal");
      const { apiKey, authDomain } = app2.options;
      _assert(apiKey && !apiKey.includes(":"), "invalid-api-key", { appName: app2.name });
      const config = {
        apiKey,
        authDomain,
        clientPlatform,
        apiHost: "identitytoolkit.googleapis.com",
        tokenApiHost: "securetoken.googleapis.com",
        apiScheme: "https",
        sdkClientVersion: _getClientVersion(clientPlatform)
      };
      const authInstance = new AuthImpl(app2, heartbeatServiceProvider, appCheckServiceProvider, config);
      _initializeAuthInstance(authInstance, deps);
      return authInstance;
    },
    "PUBLIC"
    /* ComponentType.PUBLIC */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ).setInstanceCreatedCallback((container, _instanceIdentifier, _instance) => {
    const authInternalProvider = container.getProvider(
      "auth-internal"
      /* _ComponentName.AUTH_INTERNAL */
    );
    authInternalProvider.initialize();
  }));
  _registerComponent(new Component(
    "auth-internal",
    (container) => {
      const auth2 = _castAuth(container.getProvider(
        "auth"
        /* _ComponentName.AUTH */
      ).getImmediate());
      return ((auth3) => new AuthInterop(auth3))(auth2);
    },
    "PRIVATE"
    /* ComponentType.PRIVATE */
  ).setInstantiationMode(
    "EXPLICIT"
    /* InstantiationMode.EXPLICIT */
  ));
  registerVersion(name3, version3, getVersionForPlatform(clientPlatform));
  registerVersion(name3, version3, "esm2017");
}
var DEFAULT_ID_TOKEN_MAX_AGE = 5 * 60;
var authIdTokenMaxAge = getExperimentalSetting("authIdTokenMaxAge") || DEFAULT_ID_TOKEN_MAX_AGE;
var lastPostedIdToken = null;
var mintCookieFactory = (url) => async (user) => {
  const idTokenResult = user && await user.getIdTokenResult();
  const idTokenAge = idTokenResult && ((/* @__PURE__ */ new Date()).getTime() - Date.parse(idTokenResult.issuedAtTime)) / 1e3;
  if (idTokenAge && idTokenAge > authIdTokenMaxAge) {
    return;
  }
  const idToken = idTokenResult === null || idTokenResult === void 0 ? void 0 : idTokenResult.token;
  if (lastPostedIdToken === idToken) {
    return;
  }
  lastPostedIdToken = idToken;
  await fetch(url, {
    method: idToken ? "POST" : "DELETE",
    headers: idToken ? {
      "Authorization": `Bearer ${idToken}`
    } : {}
  });
};
function getAuth(app2 = getApp()) {
  const provider = _getProvider(app2, "auth");
  if (provider.isInitialized()) {
    return provider.getImmediate();
  }
  const auth2 = initializeAuth(app2, {
    popupRedirectResolver: browserPopupRedirectResolver,
    persistence: [
      indexedDBLocalPersistence,
      browserLocalPersistence,
      browserSessionPersistence
    ]
  });
  const authTokenSyncPath = getExperimentalSetting("authTokenSyncURL");
  if (authTokenSyncPath && typeof isSecureContext === "boolean" && isSecureContext) {
    const authTokenSyncUrl = new URL(authTokenSyncPath, location.origin);
    if (location.origin === authTokenSyncUrl.origin) {
      const mintCookie = mintCookieFactory(authTokenSyncUrl.toString());
      beforeAuthStateChanged(auth2, mintCookie, () => mintCookie(auth2.currentUser));
      onIdTokenChanged(auth2, (user) => mintCookie(user));
    }
  }
  const authEmulatorHost = getDefaultEmulatorHost("auth");
  if (authEmulatorHost) {
    connectAuthEmulator(auth2, `http://${authEmulatorHost}`);
  }
  return auth2;
}
function getScriptParentElement() {
  var _a, _b;
  return (_b = (_a = document.getElementsByTagName("head")) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : document;
}
_setExternalJSProvider({
  loadJS(url) {
    return new Promise((resolve, reject) => {
      const el = document.createElement("script");
      el.setAttribute("src", url);
      el.onload = resolve;
      el.onerror = (e) => {
        const error = _createError(
          "internal-error"
          /* AuthErrorCode.INTERNAL_ERROR */
        );
        error.customData = e;
        reject(error);
      };
      el.type = "text/javascript";
      el.charset = "UTF-8";
      getScriptParentElement().appendChild(el);
    });
  },
  gapiScript: "https://apis.google.com/js/api.js",
  recaptchaV2Script: "https://www.google.com/recaptcha/api.js",
  recaptchaEnterpriseScript: "https://www.google.com/recaptcha/enterprise.js?render="
});
registerAuth(
  "Browser"
  /* ClientPlatform.BROWSER */
);

// .firebase/firebaseConfig.js
var firebaseConfig = {
  apiKey: "AIzaSyALq81lplF-fbG6FHcfLNDm4Y09oRLUSx4",
  authDomain: "alfredchannel-ef79e.firebaseapp.com",
  projectId: "alfredchannel-ef79e",
  storageBucket: "alfredchannel-ef79e.firebasestorage.app",
  messagingSenderId: "1083959316030",
  appId: "1:1083959316030:web:7799ada2eee4f8d1facb6f"
};
var app = initializeApp(firebaseConfig);
var db = initializeFirestore(app, { experimentalAutoDetectLongPolling: true });
var auth = getAuth(app);

// src/server.js
var JsonResponse = class extends Response {
  constructor(body, init) {
    const jsonBody = JSON.stringify(body);
    init = init || {
      headers: {
        "content-type": "application/json;charset=UTF-8"
      }
    };
    super(jsonBody, init);
  }
};
var router = n();
router.get("/", (request, env) => {
  return new Response(`\u{1F44B} ${env.DISCORD_APPLICATION_ID}`);
});
router.post("/", async (request, env) => {
  const { isValid, interaction } = await server.verifyDiscordRequest(
    request,
    env
  );
  if (!isValid || !interaction) {
    return new Response("Bad request signature.", { status: 401 });
  }
  if (interaction.type === import_discord_interactions.InteractionType.PING) {
    return new JsonResponse({
      type: import_discord_interactions.InteractionResponseType.PONG
    });
  }
  if (interaction.type === import_discord_interactions.InteractionType.APPLICATION_COMMAND) {
    switch (interaction.data.name.toLowerCase()) {
      case RANDOM_VIDEO_COMMAND.name.toLowerCase(): {
        const jsonData = await fetchJsonData();
        console.log(jsonData);
        const videoUrl = jsonData.video_url;
        const messageLink = jsonData.message_link;
        console.log("got url");
        if (jsonData.rank == "SSR") {
          return new JsonResponse({
            type: import_discord_interactions.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: `*You rolled:*
# SSR ultra fucking rare video holy shit
# :star: :star: :star:
Message Link: ${messageLink}

${videoUrl}`
            }
          });
        } else if (jsonData.rank == "SR") {
          return new JsonResponse({
            type: import_discord_interactions.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: `*You rolled:*
 moderately rare video 
# :star: :star:
Message Link: ${messageLink}

${videoUrl}`
            }
          });
        } else if (jsonData.rank == "N") {
          return new JsonResponse({
            type: import_discord_interactions.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: `*You rolled:*
# ZERO STAR
# fuck you
Message Link: ${messageLink}

${videoUrl}`
            }
          });
        } else {
          return new JsonResponse({
            type: import_discord_interactions.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
              content: `*You rolled:*

 bargain bin video try again
# :star: 
Message Link: ${messageLink}

${videoUrl}`
            }
          });
        }
      }
      case INVITE_COMMAND.name.toLowerCase(): {
        const applicationId = env.DISCORD_APPLICATION_ID;
        const INVITE_URL = `https://discord.com/oauth2/authorize?client_id=${applicationId}&scope=applications.commands`;
        return new JsonResponse({
          type: import_discord_interactions.InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
          data: {
            content: INVITE_URL,
            flags: import_discord_interactions2.InteractionResponseFlags.EPHEMERAL
          }
        });
      }
      default:
        return new JsonResponse({ error: "Unknown Type" }, { status: 400 });
    }
  }
  console.error("Unknown Type");
  return new JsonResponse({ error: "Unknown Type" }, { status: 400 });
});
router.all("*", () => new Response("Not Found.", { status: 404 }));
async function verifyDiscordRequest(request, env) {
  const signature = request.headers.get("x-signature-ed25519");
  const timestamp = request.headers.get("x-signature-timestamp");
  const body = await request.text();
  const isValidRequest = signature && timestamp && await (0, import_discord_interactions.verifyKey)(body, signature, timestamp, env.DISCORD_PUBLIC_KEY);
  if (!isValidRequest) {
    return { isValid: false };
  }
  return { interaction: JSON.parse(body), isValid: true };
}
async function fetchJsonData() {
  try {
    const response = await axios_default.get("https://alfredrpk.pythonanywhere.com/fetch-random-video");
    const jsonData = response.data;
    if (jsonData) {
      return jsonData;
    } else {
      console.log("video_url field not found in the response.");
    }
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
}
var server = {
  verifyDiscordRequest,
  fetch: router.fetch
};
var server_default = server;
export {
  server_default as default
};
/*! Bundled license information:

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/util/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/component/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/logger/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/app/dist/esm/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/webchannel-wrapper/dist/bloom-blob/esm/bloom_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/webchannel-wrapper/dist/webchannel-blob/esm/webchannel_blob_es2018.js:
  (** @license
  Copyright The Closure Library Authors.
  SPDX-License-Identifier: Apache-2.0
  *)
  (** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
  * @license
  * Copyright 2020 Google LLC
  *
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *   http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2024 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/firestore/dist/index.esm2017.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

firebase/app/dist/esm/index.esm.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2022 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2023 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2019 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

@firebase/auth/dist/esm2017/index-a7d5cfcc.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2020 Google LLC.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
  (**
   * @license
   * Copyright 2021 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=server.js.map
