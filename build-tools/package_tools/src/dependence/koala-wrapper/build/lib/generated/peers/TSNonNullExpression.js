"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSNonNullExpression = void 0;
exports.isTSNonNullExpression = isTSNonNullExpression;
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

class TSNonNullExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NON_NULL_EXPRESSION);
    super(pointer);
  }
  static createTSNonNullExpression(expr) {
    return new TSNonNullExpression(_reexportForGenerated.global.generatedEs2panda._CreateTSNonNullExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(expr)));
  }
  static updateTSNonNullExpression(original, expr) {
    return new TSNonNullExpression(_reexportForGenerated.global.generatedEs2panda._UpdateTSNonNullExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(expr)));
  }
  get expr() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSNonNullExpressionExprConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setExpr(expr) {
    _reexportForGenerated.global.generatedEs2panda._TSNonNullExpressionSetExpr(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(expr));
    return this;
  }
}
exports.TSNonNullExpression = TSNonNullExpression;
function isTSNonNullExpression(node) {
  return node instanceof TSNonNullExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NON_NULL_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NON_NULL_EXPRESSION, TSNonNullExpression);
}