"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateClassProperty = updateClassProperty;
var _generated = require("../../generated");
var _ArktsObject = require("../peers/ArktsObject");
var _private = require("../utilities/private");
var _public = require("../utilities/public");
var _Es2pandaEnums = require("../../generated/Es2pandaEnums");
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
function updateClassProperty(original, key, value, typeAnnotation, modifiers, isComputed) {
  var _this = this;
  if ((0, _ArktsObject.isSameNativeObject)(key, original.key) && (0, _ArktsObject.isSameNativeObject)(value, original.value) && (0, _ArktsObject.isSameNativeObject)(typeAnnotation, original.typeAnnotation) && (0, _ArktsObject.isSameNativeObject)(modifiers, original.modifiers) && (0, _ArktsObject.isSameNativeObject)(isComputed, original.isComputed)) {
    return original;
  }
  const update = (0, _private.updateThenAttach)(_generated.ClassProperty.updateClassProperty, function (node, original) {
    _newArrowCheck(this, _this);
    return node.setAnnotations(original.annotations);
  }.bind(this), function (node, original) {
    _newArrowCheck(this, _this);
    if ((0, _public.hasModifierFlag)(original, _Es2pandaEnums.Es2pandaModifierFlags.MODIFIER_FLAGS_OPTIONAL)) {
      return (0, _public.classPropertySetOptional)(node, true);
    }
    return node;
  }.bind(this));
  const newNode = update(original, key, value, typeAnnotation, modifiers, isComputed);
  if (_nodeCache.NodeCache.getInstance().has(original)) {
    _nodeCache.NodeCache.getInstance().refresh(original, newNode);
  }
  return newNode;
}