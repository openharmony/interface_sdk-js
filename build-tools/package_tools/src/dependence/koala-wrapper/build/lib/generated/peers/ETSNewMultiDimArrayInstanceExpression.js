"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSNewMultiDimArrayInstanceExpression = void 0;
exports.isETSNewMultiDimArrayInstanceExpression = isETSNewMultiDimArrayInstanceExpression;
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

class ETSNewMultiDimArrayInstanceExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_MULTI_DIM_ARRAY_INSTANCE_EXPRESSION);
    super(pointer);
  }
  static createETSNewMultiDimArrayInstanceExpression(typeReference, dimensions) {
    return new ETSNewMultiDimArrayInstanceExpression(_reexportForGenerated.global.generatedEs2panda._CreateETSNewMultiDimArrayInstanceExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(typeReference), (0, _reexportForGenerated.passNodeArray)(dimensions), dimensions.length));
  }
  static updateETSNewMultiDimArrayInstanceExpression(original, typeReference, dimensions) {
    return new ETSNewMultiDimArrayInstanceExpression(_reexportForGenerated.global.generatedEs2panda._UpdateETSNewMultiDimArrayInstanceExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(typeReference), (0, _reexportForGenerated.passNodeArray)(dimensions), dimensions.length));
  }
  static create1ETSNewMultiDimArrayInstanceExpression(other) {
    return new ETSNewMultiDimArrayInstanceExpression(_reexportForGenerated.global.generatedEs2panda._CreateETSNewMultiDimArrayInstanceExpression1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(other)));
  }
  static update1ETSNewMultiDimArrayInstanceExpression(original, other) {
    return new ETSNewMultiDimArrayInstanceExpression(_reexportForGenerated.global.generatedEs2panda._UpdateETSNewMultiDimArrayInstanceExpression1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(other)));
  }
  get typeReference() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSNewMultiDimArrayInstanceExpressionTypeReferenceConst(_reexportForGenerated.global.context, this.peer));
  }
  get dimensions() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ETSNewMultiDimArrayInstanceExpressionDimensionsConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ETSNewMultiDimArrayInstanceExpression = ETSNewMultiDimArrayInstanceExpression;
function isETSNewMultiDimArrayInstanceExpression(node) {
  return node instanceof ETSNewMultiDimArrayInstanceExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_MULTI_DIM_ARRAY_INSTANCE_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_MULTI_DIM_ARRAY_INSTANCE_EXPRESSION, ETSNewMultiDimArrayInstanceExpression);
}