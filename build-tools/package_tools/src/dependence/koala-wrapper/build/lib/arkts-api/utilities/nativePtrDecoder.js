"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NativePtrDecoder = void 0;
var _interop = require("#koalaui/interop");
var _global = require("../static/global");
function _newArrowCheck(n, r) { if (n !== r) throw new TypeError("Cannot instantiate an arrow function"); } /*
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
class NativeString extends _interop.NativeStringBase {
  constructor(ptr) {
    super(ptr);
  }
  bytesLength() {
    return _global.global.interop._StringLength(this.ptr);
  }
  getData(data) {
    var _this = this;
    (0, _interop.withByteArray)(data, _interop.Access.WRITE, function (dataPtr) {
      _newArrowCheck(this, _this);
      _global.global.interop._StringData(this.ptr, dataPtr, data.length);
    }.bind(this));
  }
  close() {
    _global.global.interop._InvokeFinalizer(this.ptr, _global.global.interop._GetStringFinalizer());
    this.ptr = _interop.nullptr;
  }
}
(0, _interop.providePlatformDefinedData)({
  nativeString(ptr) {
    return new NativeString(ptr);
  },
  nativeStringArrayDecoder() {
    throw new Error("Not yet implemented");
  },
  callbackRegistry() {
    return undefined;
  }
});
class NativePtrDecoder extends _interop.ArrayDecoder {
  getArraySize(blob) {
    return _global.global.interop._GetPtrVectorSize(blob);
  }
  disposeArray(blob) {
    // TODO
  }
  getArrayElement(blob, index) {
    return _global.global.interop._GetPtrVectorElement(blob, index);
  }
}
exports.NativePtrDecoder = NativePtrDecoder;