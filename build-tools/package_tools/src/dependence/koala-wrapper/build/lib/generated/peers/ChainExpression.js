"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ChainExpression = void 0;
exports.isChainExpression = isChainExpression;
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

class ChainExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CHAIN_EXPRESSION);
    super(pointer);
  }
  static createChainExpression(expression) {
    return new ChainExpression(_reexportForGenerated.global.generatedEs2panda._CreateChainExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(expression)));
  }
  static updateChainExpression(original, expression) {
    return new ChainExpression(_reexportForGenerated.global.generatedEs2panda._UpdateChainExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(expression)));
  }
  get getExpression() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ChainExpressionGetExpressionConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ChainExpression = ChainExpression;
function isChainExpression(node) {
  return node instanceof ChainExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CHAIN_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CHAIN_EXPRESSION, ChainExpression);
}