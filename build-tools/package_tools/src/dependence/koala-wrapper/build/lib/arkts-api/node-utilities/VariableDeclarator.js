"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateVariableDeclarator = updateVariableDeclarator;
var _ArktsObject = require("../peers/ArktsObject");
var _types = require("../types");
var _private = require("../utilities/private");
var _nodeCache = require("../utilities/nodeCache");
/*
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

function updateVariableDeclarator(original, flag, name, initializer) {
  if ((0, _ArktsObject.isSameNativeObject)(name, original.name) && (0, _ArktsObject.isSameNativeObject)(initializer, original.initializer)
  /* TODO: no getter for flag */) {
    return original;
  }
  const update = (0, _private.updateThenAttach)(_types.VariableDeclarator.update, _private.attachModifiers);
  const newNode = update(original, flag, name, initializer);
  if (_nodeCache.NodeCache.getInstance().has(original)) {
    _nodeCache.NodeCache.getInstance().refresh(original, newNode);
  }
  return newNode;
}