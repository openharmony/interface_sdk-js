"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.global = void 0;
var _utils = require("../../utils");
var _Es2pandaNativeModule = require("../../Es2pandaNativeModule");
var _InteropNativeModule = require("../../InteropNativeModule");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
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
class global {
  static set config(config) {
    if (global._config !== undefined) {
      (0, _utils.throwError)('Global.config already initialized');
    }
    global._config = config;
  }
  static get config() {
    return global._config ?? (0, _utils.throwError)('Global.config not initialized');
  }
  static configIsInitialized() {
    return global._config !== undefined;
  }

  // TODO: rename to contextPeer
  static get context() {
    return global.compilerContext?.peer ?? (0, _utils.throwError)('Global.context not initialized');
  }

  // unsafe - could be undefined

  static clearContext() {
    this.compilerContext = undefined;
  }
  static get es2panda() {
    if (this._es2panda === undefined) {
      this._es2panda = (0, _Es2pandaNativeModule.initEs2panda)();
    }
    return this._es2panda;
  }
  static get generatedEs2panda() {
    if (this._generatedEs2panda === undefined) {
      this._generatedEs2panda = (0, _Es2pandaNativeModule.initGeneratedEs2panda)();
    }
    return this._generatedEs2panda;
  }
  static get interop() {
    if (this._interop === undefined) this._interop = (0, _InteropNativeModule.initInterop)();
    return this._interop;
  }
  static resetConfig() {
    global._config = undefined;
  }
}
exports.global = global;
_defineProperty(global, "filePath", "./plugins/input/main.sts");
_defineProperty(global, "_config", void 0);
_defineProperty(global, "compilerContext", void 0);
_defineProperty(global, "_es2panda", undefined);
_defineProperty(global, "_generatedEs2panda", undefined);
_defineProperty(global, "_interop", undefined);