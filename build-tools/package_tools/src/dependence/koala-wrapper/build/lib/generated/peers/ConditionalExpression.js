"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConditionalExpression = void 0;
exports.isConditionalExpression = isConditionalExpression;
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

class ConditionalExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CONDITIONAL_EXPRESSION);
    super(pointer);
  }
  static createConditionalExpression(test, consequent, alternate) {
    return new ConditionalExpression(_reexportForGenerated.global.generatedEs2panda._CreateConditionalExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(test), (0, _reexportForGenerated.passNode)(consequent), (0, _reexportForGenerated.passNode)(alternate)));
  }
  static updateConditionalExpression(original, test, consequent, alternate) {
    return new ConditionalExpression(_reexportForGenerated.global.generatedEs2panda._UpdateConditionalExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(test), (0, _reexportForGenerated.passNode)(consequent), (0, _reexportForGenerated.passNode)(alternate)));
  }
  get test() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ConditionalExpressionTestConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTest(expr) {
    _reexportForGenerated.global.generatedEs2panda._ConditionalExpressionSetTest(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(expr));
    return this;
  }
  get consequent() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ConditionalExpressionConsequentConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setConsequent(expr) {
    _reexportForGenerated.global.generatedEs2panda._ConditionalExpressionSetConsequent(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(expr));
    return this;
  }
  get alternate() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ConditionalExpressionAlternateConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAlternate(expr) {
    _reexportForGenerated.global.generatedEs2panda._ConditionalExpressionSetAlternate(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(expr));
    return this;
  }
}
exports.ConditionalExpression = ConditionalExpression;
function isConditionalExpression(node) {
  return node instanceof ConditionalExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CONDITIONAL_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CONDITIONAL_EXPRESSION, ConditionalExpression);
}