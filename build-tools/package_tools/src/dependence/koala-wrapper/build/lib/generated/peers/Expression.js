"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Expression = void 0;
exports.isExpression = isExpression;
var _reexportForGenerated = require("../../reexport-for-generated");
var _TypedAstNode = require("./TypedAstNode");
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

class Expression extends _TypedAstNode.TypedAstNode {
  constructor(pointer) {
    super(pointer);
  }
  get isGrouped() {
    return _reexportForGenerated.global.generatedEs2panda._ExpressionIsGroupedConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setGrouped() {
    _reexportForGenerated.global.generatedEs2panda._ExpressionSetGrouped(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  get isLiteral() {
    return _reexportForGenerated.global.generatedEs2panda._ExpressionIsLiteralConst(_reexportForGenerated.global.context, this.peer);
  }
  get isTypeNode() {
    return _reexportForGenerated.global.generatedEs2panda._ExpressionIsTypeNodeConst(_reexportForGenerated.global.context, this.peer);
  }
  get isAnnotatedExpression() {
    return _reexportForGenerated.global.generatedEs2panda._ExpressionIsAnnotatedExpressionConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.Expression = Expression;
function isExpression(node) {
  return node instanceof Expression;
}