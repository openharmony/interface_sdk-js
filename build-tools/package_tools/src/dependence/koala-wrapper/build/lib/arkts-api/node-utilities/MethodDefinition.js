"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMethodDefinition = updateMethodDefinition;
var _ArktsObject = require("../peers/ArktsObject");
var _types = require("../types");
var _private = require("../utilities/private");
var _nodeCache = require("../utilities/nodeCache");
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
function updateMethodDefinition(original, kind, key, value, modifiers, isComputed) {
  var _this = this;
  if ((0, _ArktsObject.isSameNativeObject)(kind, original.kind) && (0, _ArktsObject.isSameNativeObject)(key, original.name) && (0, _ArktsObject.isSameNativeObject)(value, original.scriptFunction) && (0, _ArktsObject.isSameNativeObject)(modifiers, original.modifiers)
  /* TODO: no getter for isComputed */) {
    return original;
  }
  const update = (0, _private.updateThenAttach)(_types.MethodDefinition.update, function (node, original) {
    _newArrowCheck(this, _this);
    return node.setOverloads(original.overloads);
  }.bind(this));
  const newNode = update(original, kind, key, value, modifiers, isComputed);
  if (_nodeCache.NodeCache.getInstance().has(original)) {
    _nodeCache.NodeCache.getInstance().refresh(original, newNode);
  }
  return newNode;
}