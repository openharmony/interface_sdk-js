"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProperty = updateProperty;
var _generated = require("../../generated");
var _ArktsObject = require("../peers/ArktsObject");
var _nodeCache = require("../utilities/nodeCache");
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

function updateProperty(original, key, value) {
  if ((0, _ArktsObject.isSameNativeObject)(key, original.key) && (0, _ArktsObject.isSameNativeObject)(value, original.value)) {
    return original;
  }
  const update = (0, _private.updateThenAttach)(_generated.Property.updateProperty, _private.attachModifiers);
  const newNode = update(original, key, value);
  if (_nodeCache.NodeCache.getInstance().has(original)) {
    _nodeCache.NodeCache.getInstance().refresh(original, newNode);
  }
  return newNode;
}