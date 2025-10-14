"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MaybeOptionalExpression = void 0;
exports.isMaybeOptionalExpression = isMaybeOptionalExpression;
var _reexportForGenerated = require("../../reexport-for-generated");
var _Expression = require("./Expression");
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

class MaybeOptionalExpression extends _Expression.Expression {
  constructor(pointer) {
    super(pointer);
  }
  get isOptional() {
    return _reexportForGenerated.global.generatedEs2panda._MaybeOptionalExpressionIsOptionalConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  clearOptional() {
    _reexportForGenerated.global.generatedEs2panda._MaybeOptionalExpressionClearOptional(_reexportForGenerated.global.context, this.peer);
    return this;
  }
}
exports.MaybeOptionalExpression = MaybeOptionalExpression;
function isMaybeOptionalExpression(node) {
  return node instanceof MaybeOptionalExpression;
}