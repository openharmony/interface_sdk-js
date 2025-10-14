"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockExpression = void 0;
exports.isBlockExpression = isBlockExpression;
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

class BlockExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_EXPRESSION);
    super(pointer);
  }
  static createBlockExpression(statements) {
    return new BlockExpression(_reexportForGenerated.global.generatedEs2panda._CreateBlockExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNodeArray)(statements), statements.length));
  }
  static updateBlockExpression(original, statements) {
    return new BlockExpression(_reexportForGenerated.global.generatedEs2panda._UpdateBlockExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNodeArray)(statements), statements.length));
  }
  get statements() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._BlockExpressionStatementsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  addStatements(statements) {
    _reexportForGenerated.global.generatedEs2panda._BlockExpressionAddStatements(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(statements), statements.length);
    return this;
  }
  /** @deprecated */
  addStatement(statement) {
    _reexportForGenerated.global.generatedEs2panda._BlockExpressionAddStatement(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(statement));
    return this;
  }
}
exports.BlockExpression = BlockExpression;
function isBlockExpression(node) {
  return node instanceof BlockExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_EXPRESSION, BlockExpression);
}