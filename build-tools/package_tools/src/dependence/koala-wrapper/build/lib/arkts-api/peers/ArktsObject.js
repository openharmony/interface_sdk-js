"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArktsObject = void 0;
exports.isSameNativeObject = isSameNativeObject;
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/*
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

class ArktsObject {
  constructor(peer) {
    _defineProperty(this, "peer", void 0);
    this.peer = peer;
  }
}
exports.ArktsObject = ArktsObject;
function isSameNativeObject(first, second) {
  if (Array.isArray(first) && Array.isArray(second)) {
    if (first.length !== second.length) {
      return false;
    }
    for (let i = 0; i < first.length; i++) {
      if (!isSameNativeObject(first[i], second[i])) {
        return false;
      }
    }
    return true;
  }
  if (first instanceof ArktsObject && second instanceof ArktsObject) {
    return first?.peer === second?.peer;
  }
  return first === second;
}