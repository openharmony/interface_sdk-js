"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateVariableDeclaration = updateVariableDeclaration;
var _ArktsObject = require("../peers/ArktsObject");
var _types = require("../types");
var _private = require("../utilities/private");
function _newArrowCheck(n, r) { if (n !== r) throw new TypeError("Cannot instantiate an arrow function"); } /*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
function updateVariableDeclaration(original, modifiers, kind, declarators) {
  var _this = this;
  if ((0, _ArktsObject.isSameNativeObject)(modifiers, original.modifiers) && (0, _ArktsObject.isSameNativeObject)(kind, original.declarationKind) && (0, _ArktsObject.isSameNativeObject)(declarators, original.declarators)) {
    return original;
  }
  const update = (0, _private.updateThenAttach)(_types.VariableDeclaration.update, _private.attachModifiers, function (node, original) {
    _newArrowCheck(this, _this);
    return node.setAnnotations(original.annotations);
  }.bind(this));
  return update(original, modifiers, kind, declarators);
}