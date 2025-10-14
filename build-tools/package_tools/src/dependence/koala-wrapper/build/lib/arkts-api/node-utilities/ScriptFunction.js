"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateScriptFunction = updateScriptFunction;
var _generated = require("../../generated");
var _ArktsObject = require("../peers/ArktsObject");
var _nodeCache = require("../utilities/nodeCache");
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
function updateScriptFunction(original, databody, datasignature, datafuncFlags, dataflags) {
  var _this = this;
  if ((0, _ArktsObject.isSameNativeObject)(databody, original.body) && (0, _ArktsObject.isSameNativeObject)(datasignature?.params, original.params) && (0, _ArktsObject.isSameNativeObject)(datasignature?.typeParams, original.typeParams) && (0, _ArktsObject.isSameNativeObject)(datasignature?.returnType, original.returnTypeAnnotation) && (0, _ArktsObject.isSameNativeObject)(datasignature?.hasReceiver, original.hasReceiver) && (0, _ArktsObject.isSameNativeObject)(datafuncFlags, original.flags) && (0, _ArktsObject.isSameNativeObject)(dataflags, original.modifiers)) {
    return original;
  }
  const update = (0, _private.updateThenAttach)(_generated.ScriptFunction.updateScriptFunction, function (node, original) {
    _newArrowCheck(this, _this);
    return !!original.id ? node.setIdent(original.id) : node;
  }.bind(this), function (node, original) {
    _newArrowCheck(this, _this);
    return node.setAnnotations(original.annotations);
  }.bind(this));
  const newNode = update(original, databody, datasignature, datafuncFlags, dataflags);
  if (_nodeCache.NodeCache.getInstance().has(original)) {
    _nodeCache.NodeCache.getInstance().refresh(original, newNode);
  }
  return newNode;
}