"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BinaryExpression = void 0;
exports.isBinaryExpression = isBinaryExpression;
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

class BinaryExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION);
    super(pointer);
  }
  static createBinaryExpression(left, right, operatorType) {
    return new BinaryExpression(_reexportForGenerated.global.generatedEs2panda._CreateBinaryExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(left), (0, _reexportForGenerated.passNode)(right), operatorType));
  }
  static updateBinaryExpression(original, left, right, operatorType) {
    return new BinaryExpression(_reexportForGenerated.global.generatedEs2panda._UpdateBinaryExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(left), (0, _reexportForGenerated.passNode)(right), operatorType));
  }
  get left() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._BinaryExpressionLeftConst(_reexportForGenerated.global.context, this.peer));
  }
  get right() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._BinaryExpressionRightConst(_reexportForGenerated.global.context, this.peer));
  }
  get result() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._BinaryExpressionResultConst(_reexportForGenerated.global.context, this.peer));
  }
  get operatorType() {
    return _reexportForGenerated.global.generatedEs2panda._BinaryExpressionOperatorTypeConst(_reexportForGenerated.global.context, this.peer);
  }
  get isLogical() {
    return _reexportForGenerated.global.generatedEs2panda._BinaryExpressionIsLogicalConst(_reexportForGenerated.global.context, this.peer);
  }
  get isLogicalExtended() {
    return _reexportForGenerated.global.generatedEs2panda._BinaryExpressionIsLogicalExtendedConst(_reexportForGenerated.global.context, this.peer);
  }
  get isBitwise() {
    return _reexportForGenerated.global.generatedEs2panda._BinaryExpressionIsBitwiseConst(_reexportForGenerated.global.context, this.peer);
  }
  get isArithmetic() {
    return _reexportForGenerated.global.generatedEs2panda._BinaryExpressionIsArithmeticConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setLeft(expr) {
    _reexportForGenerated.global.generatedEs2panda._BinaryExpressionSetLeft(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(expr));
    return this;
  }
  /** @deprecated */
  setRight(expr) {
    _reexportForGenerated.global.generatedEs2panda._BinaryExpressionSetRight(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(expr));
    return this;
  }
  /** @deprecated */
  setResult(expr) {
    _reexportForGenerated.global.generatedEs2panda._BinaryExpressionSetResult(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(expr));
    return this;
  }
  /** @deprecated */
  setOperator(operatorType) {
    _reexportForGenerated.global.generatedEs2panda._BinaryExpressionSetOperator(_reexportForGenerated.global.context, this.peer, operatorType);
    return this;
  }
}
exports.BinaryExpression = BinaryExpression;
function isBinaryExpression(node) {
  return node instanceof BinaryExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION, BinaryExpression);
}