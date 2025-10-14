"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSNewArrayInstanceExpression = void 0;
exports.isETSNewArrayInstanceExpression = isETSNewArrayInstanceExpression;
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

class ETSNewArrayInstanceExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_ARRAY_INSTANCE_EXPRESSION);
    super(pointer);
  }
  static createETSNewArrayInstanceExpression(typeReference, dimension) {
    return new ETSNewArrayInstanceExpression(_reexportForGenerated.global.generatedEs2panda._CreateETSNewArrayInstanceExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(typeReference), (0, _reexportForGenerated.passNode)(dimension)));
  }
  static updateETSNewArrayInstanceExpression(original, typeReference, dimension) {
    return new ETSNewArrayInstanceExpression(_reexportForGenerated.global.generatedEs2panda._UpdateETSNewArrayInstanceExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(typeReference), (0, _reexportForGenerated.passNode)(dimension)));
  }
  get typeReference() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSNewArrayInstanceExpressionTypeReferenceConst(_reexportForGenerated.global.context, this.peer));
  }
  get dimension() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSNewArrayInstanceExpressionDimensionConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setDimension(dimension) {
    _reexportForGenerated.global.generatedEs2panda._ETSNewArrayInstanceExpressionSetDimension(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(dimension));
    return this;
  }
}
exports.ETSNewArrayInstanceExpression = ETSNewArrayInstanceExpression;
function isETSNewArrayInstanceExpression(node) {
  return node instanceof ETSNewArrayInstanceExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_ARRAY_INSTANCE_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_ARRAY_INSTANCE_EXPRESSION, ETSNewArrayInstanceExpression);
}