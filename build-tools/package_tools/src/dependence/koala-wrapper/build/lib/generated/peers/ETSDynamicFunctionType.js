"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSDynamicFunctionType = void 0;
exports.isETSDynamicFunctionType = isETSDynamicFunctionType;
var _ETSFunctionType = require("./ETSFunctionType");
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

class ETSDynamicFunctionType extends _ETSFunctionType.ETSFunctionType {
  constructor(pointer) {
    super(pointer);
  }
}
exports.ETSDynamicFunctionType = ETSDynamicFunctionType;
function isETSDynamicFunctionType(node) {
  return node instanceof ETSDynamicFunctionType;
}