"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Config = void 0;
var _ArktsObject = require("./ArktsObject");
var _global = require("../static/global");
var _private = require("../utilities/private");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
class Config extends _ArktsObject.ArktsObject {
  constructor(peer) {
    super(peer);
    // TODO: wait for getter from api
    _defineProperty(this, "path", void 0);
    this.path = ``;
  }
  static create(input) {
    console.log("[TS WRAPPER] CREATE CONFIG");
    return new Config(_global.global.es2panda._CreateConfig(input.length, (0, _private.passStringArray)(input)));
  }
  static createDefault() {
    if (_global.global.configIsInitialized()) {
      console.warn(`Config already initialized`);
      return new Config(_global.global.config);
    }
    return new Config(_global.global.es2panda._CreateConfig(4, (0, _private.passStringArray)(["", "--arktsconfig", "./arktsconfig.json", _global.global.filePath])));
  }
}
exports.Config = Config;