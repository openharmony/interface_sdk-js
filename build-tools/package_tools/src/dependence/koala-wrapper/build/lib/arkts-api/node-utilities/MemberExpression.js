"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMemberExpression = updateMemberExpression;
var _ArktsObject = require("../peers/ArktsObject");
var _MemberExpression = require("../to-be-generated/MemberExpression");
var _private = require("../utilities/private");
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

function updateMemberExpression(original, object, property, kind, computed, optional) {
  if ((0, _ArktsObject.isSameNativeObject)(object, original.object) && (0, _ArktsObject.isSameNativeObject)(property, original.property) && (0, _ArktsObject.isSameNativeObject)(kind, original.kind) && (0, _ArktsObject.isSameNativeObject)(computed, original.computed) && (0, _ArktsObject.isSameNativeObject)(optional, original.optional)) {
    return original;
  }
  const update = (0, _private.updateThenAttach)(_MemberExpression.MemberExpression.update, _private.attachModifiers);
  return update(original, object, property, kind, computed, optional);
}