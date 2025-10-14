"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSAsExpression = void 0;
exports.isTSAsExpression = isTSAsExpression;
var _reexportForGenerated = require("../../reexport-for-generated");
var _AnnotatedExpression = require("./AnnotatedExpression");
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

class TSAsExpression extends _AnnotatedExpression.AnnotatedExpression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_AS_EXPRESSION);
    super(pointer);
  }
  static createTSAsExpression(expression, typeAnnotation, isConst) {
    return new TSAsExpression(_reexportForGenerated.global.generatedEs2panda._CreateTSAsExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(expression), (0, _reexportForGenerated.passNode)(typeAnnotation), isConst));
  }
  static updateTSAsExpression(original, expression, typeAnnotation, isConst) {
    return new TSAsExpression(_reexportForGenerated.global.generatedEs2panda._UpdateTSAsExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(expression), (0, _reexportForGenerated.passNode)(typeAnnotation), isConst));
  }
  get expr() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSAsExpressionExprConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setExpr(expr) {
    _reexportForGenerated.global.generatedEs2panda._TSAsExpressionSetExpr(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(expr));
    return this;
  }
  get isConst() {
    return _reexportForGenerated.global.generatedEs2panda._TSAsExpressionIsConstConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setUncheckedCast(isUncheckedCast) {
    _reexportForGenerated.global.generatedEs2panda._TSAsExpressionSetUncheckedCast(_reexportForGenerated.global.context, this.peer, isUncheckedCast);
    return this;
  }
  get typeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSAsExpressionTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTsTypeAnnotation(typeAnnotation) {
    _reexportForGenerated.global.generatedEs2panda._TSAsExpressionSetTsTypeAnnotation(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeAnnotation));
    return this;
  }
}
exports.TSAsExpression = TSAsExpression;
function isTSAsExpression(node) {
  return node instanceof TSAsExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_AS_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_AS_EXPRESSION, TSAsExpression);
}