"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSParameterExpression = void 0;
exports.isETSParameterExpression = isETSParameterExpression;
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

class ETSParameterExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PARAMETER_EXPRESSION);
    super(pointer);
  }
  static createETSParameterExpression(identOrSpread, isOptional) {
    return new ETSParameterExpression(_reexportForGenerated.global.generatedEs2panda._CreateETSParameterExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(identOrSpread), isOptional));
  }
  static updateETSParameterExpression(original, identOrSpread, isOptional) {
    return new ETSParameterExpression(_reexportForGenerated.global.generatedEs2panda._UpdateETSParameterExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(identOrSpread), isOptional));
  }
  static create1ETSParameterExpression(identOrSpread, initializer) {
    return new ETSParameterExpression(_reexportForGenerated.global.generatedEs2panda._CreateETSParameterExpression1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(identOrSpread), (0, _reexportForGenerated.passNode)(initializer)));
  }
  static update1ETSParameterExpression(original, identOrSpread, initializer) {
    return new ETSParameterExpression(_reexportForGenerated.global.generatedEs2panda._UpdateETSParameterExpression1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(identOrSpread), (0, _reexportForGenerated.passNode)(initializer)));
  }
  /** @deprecated */
  setIdent(ident) {
    _reexportForGenerated.global.generatedEs2panda._ETSParameterExpressionSetIdent(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(ident));
    return this;
  }
  /** @deprecated */
  setLexerSaved(s) {
    _reexportForGenerated.global.generatedEs2panda._ETSParameterExpressionSetLexerSaved(_reexportForGenerated.global.context, this.peer, s);
    return this;
  }
  /** @deprecated */
  setTypeAnnotation(typeNode) {
    _reexportForGenerated.global.generatedEs2panda._ETSParameterExpressionSetTypeAnnotation(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeNode));
    return this;
  }
  get isOptional() {
    return _reexportForGenerated.global.generatedEs2panda._ETSParameterExpressionIsOptionalConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setOptional(value) {
    _reexportForGenerated.global.generatedEs2panda._ETSParameterExpressionSetOptional(_reexportForGenerated.global.context, this.peer, value);
    return this;
  }
  /** @deprecated */
  setInitializer(initExpr) {
    _reexportForGenerated.global.generatedEs2panda._ETSParameterExpressionSetInitializer(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(initExpr));
    return this;
  }
  get isRestParameter() {
    return _reexportForGenerated.global.generatedEs2panda._ETSParameterExpressionIsRestParameterConst(_reexportForGenerated.global.context, this.peer);
  }
  get getRequiredParams() {
    return _reexportForGenerated.global.generatedEs2panda._ETSParameterExpressionGetRequiredParamsConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setRequiredParams(value) {
    _reexportForGenerated.global.generatedEs2panda._ETSParameterExpressionSetRequiredParams(_reexportForGenerated.global.context, this.peer, value);
    return this;
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ETSParameterExpressionAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._ETSParameterExpressionSetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.ETSParameterExpression = ETSParameterExpression;
function isETSParameterExpression(node) {
  return node instanceof ETSParameterExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PARAMETER_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PARAMETER_EXPRESSION, ETSParameterExpression);
}