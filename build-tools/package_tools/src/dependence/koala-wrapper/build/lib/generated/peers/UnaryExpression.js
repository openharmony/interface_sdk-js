"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnaryExpression = void 0;
exports.isUnaryExpression = isUnaryExpression;
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

class UnaryExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_UNARY_EXPRESSION);
    super(pointer);
  }
  static createUnaryExpression(argument, unaryOperator) {
    return new UnaryExpression(_reexportForGenerated.global.generatedEs2panda._CreateUnaryExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(argument), unaryOperator));
  }
  static updateUnaryExpression(original, argument, unaryOperator) {
    return new UnaryExpression(_reexportForGenerated.global.generatedEs2panda._UpdateUnaryExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(argument), unaryOperator));
  }
  get operatorType() {
    return _reexportForGenerated.global.generatedEs2panda._UnaryExpressionOperatorTypeConst(_reexportForGenerated.global.context, this.peer);
  }
  get argument() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._UnaryExpressionArgumentConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.UnaryExpression = UnaryExpression;
function isUnaryExpression(node) {
  return node instanceof UnaryExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_UNARY_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_UNARY_EXPRESSION, UnaryExpression);
}