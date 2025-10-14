"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrefixAssertionExpression = void 0;
exports.isPrefixAssertionExpression = isPrefixAssertionExpression;
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

class PrefixAssertionExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_PREFIX_ASSERTION_EXPRESSION);
    super(pointer);
  }
  static createPrefixAssertionExpression(expr, type) {
    return new PrefixAssertionExpression(_reexportForGenerated.global.generatedEs2panda._CreatePrefixAssertionExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(expr), (0, _reexportForGenerated.passNode)(type)));
  }
  static updatePrefixAssertionExpression(original, expr, type) {
    return new PrefixAssertionExpression(_reexportForGenerated.global.generatedEs2panda._UpdatePrefixAssertionExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(expr), (0, _reexportForGenerated.passNode)(type)));
  }
  get expr() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._PrefixAssertionExpressionExprConst(_reexportForGenerated.global.context, this.peer));
  }
  get type() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._PrefixAssertionExpressionTypeConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.PrefixAssertionExpression = PrefixAssertionExpression;
function isPrefixAssertionExpression(node) {
  return node instanceof PrefixAssertionExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_PREFIX_ASSERTION_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_PREFIX_ASSERTION_EXPRESSION, PrefixAssertionExpression);
}