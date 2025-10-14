"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSNewClassInstanceExpression = void 0;
exports.isETSNewClassInstanceExpression = isETSNewClassInstanceExpression;
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

class ETSNewClassInstanceExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_CLASS_INSTANCE_EXPRESSION);
    super(pointer);
  }
  static createETSNewClassInstanceExpression(typeReference, _arguments) {
    return new ETSNewClassInstanceExpression(_reexportForGenerated.global.generatedEs2panda._CreateETSNewClassInstanceExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(typeReference), (0, _reexportForGenerated.passNodeArray)(_arguments), _arguments.length));
  }
  static updateETSNewClassInstanceExpression(original, typeReference, _arguments) {
    return new ETSNewClassInstanceExpression(_reexportForGenerated.global.generatedEs2panda._UpdateETSNewClassInstanceExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(typeReference), (0, _reexportForGenerated.passNodeArray)(_arguments), _arguments.length));
  }
  static create1ETSNewClassInstanceExpression(other) {
    return new ETSNewClassInstanceExpression(_reexportForGenerated.global.generatedEs2panda._CreateETSNewClassInstanceExpression1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(other)));
  }
  static update1ETSNewClassInstanceExpression(original, other) {
    return new ETSNewClassInstanceExpression(_reexportForGenerated.global.generatedEs2panda._UpdateETSNewClassInstanceExpression1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(other)));
  }
  get getTypeRef() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSNewClassInstanceExpressionGetTypeRefConst(_reexportForGenerated.global.context, this.peer));
  }
  get getArguments() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ETSNewClassInstanceExpressionGetArgumentsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setArguments(_arguments) {
    _reexportForGenerated.global.generatedEs2panda._ETSNewClassInstanceExpressionSetArguments(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(_arguments), _arguments.length);
    return this;
  }
  /** @deprecated */
  addToArgumentsFront(expr) {
    _reexportForGenerated.global.generatedEs2panda._ETSNewClassInstanceExpressionAddToArgumentsFront(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(expr));
    return this;
  }
}
exports.ETSNewClassInstanceExpression = ETSNewClassInstanceExpression;
function isETSNewClassInstanceExpression(node) {
  return node instanceof ETSNewClassInstanceExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_CLASS_INSTANCE_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_CLASS_INSTANCE_EXPRESSION, ETSNewClassInstanceExpression);
}