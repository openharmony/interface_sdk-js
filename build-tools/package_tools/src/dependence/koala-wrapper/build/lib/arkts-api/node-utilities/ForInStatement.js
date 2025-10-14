"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateForInStatement = updateForInStatement;
var _generated = require("../../generated");
var _ArktsObject = require("../peers/ArktsObject");
var _private = require("../utilities/private");
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

function updateForInStatement(original, left, right, body) {
  if ((0, _ArktsObject.isSameNativeObject)(left, original.left) && (0, _ArktsObject.isSameNativeObject)(right, original.right) && (0, _ArktsObject.isSameNativeObject)(body, original.body)) {
    return original;
  }
  const updateNode = (0, _private.updateThenAttach)(_generated.ForInStatement.updateForInStatement, _private.attachModifiers);
  return updateNode(original, left, right, body);
}