"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InteropNativeModule = void 0;
exports.initInterop = initInterop;
var _interop = require("#koalaui/interop");
var path = _interopRequireWildcard(require("path"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class InteropNativeModule {
  _StringLength(ptr) {
    throw new Error("Not implemented");
  }
  _StringData(ptr, buffer, length) {
    throw new Error("Not implemented");
  }
  _GetStringFinalizer() {
    throw new Error("Not implemented");
  }
  _InvokeFinalizer(ptr, finalizer) {
    throw new Error("Not implemented");
  }
  _GetPtrVectorSize(ptr) {
    throw new Error("Not implemented");
  }
  _GetPtrVectorElement(ptr, index) {
    throw new Error("Not implemented");
  }
}
exports.InteropNativeModule = InteropNativeModule;
function initInterop() {
  (0, _interop.registerNativeModuleLibraryName)("InteropNativeModule", path.join(__dirname, "../native/es2panda.node"));
  const instance = new InteropNativeModule();
  (0, _interop.loadNativeModuleLibrary)("InteropNativeModule", instance);
  return instance;
}