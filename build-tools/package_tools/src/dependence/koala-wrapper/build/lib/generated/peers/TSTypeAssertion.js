"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSTypeAssertion = void 0;
exports.isTSTypeAssertion = isTSTypeAssertion;
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

class TSTypeAssertion extends _AnnotatedExpression.AnnotatedExpression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ASSERTION);
    super(pointer);
  }
  static createTSTypeAssertion(typeAnnotation, expression) {
    return new TSTypeAssertion(_reexportForGenerated.global.generatedEs2panda._CreateTSTypeAssertion(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(typeAnnotation), (0, _reexportForGenerated.passNode)(expression)));
  }
  static updateTSTypeAssertion(original, typeAnnotation, expression) {
    return new TSTypeAssertion(_reexportForGenerated.global.generatedEs2panda._UpdateTSTypeAssertion(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(typeAnnotation), (0, _reexportForGenerated.passNode)(expression)));
  }
  get getExpression() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSTypeAssertionGetExpressionConst(_reexportForGenerated.global.context, this.peer));
  }
  get typeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSTypeAssertionTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTsTypeAnnotation(typeAnnotation) {
    _reexportForGenerated.global.generatedEs2panda._TSTypeAssertionSetTsTypeAnnotation(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeAnnotation));
    return this;
  }
}
exports.TSTypeAssertion = TSTypeAssertion;
function isTSTypeAssertion(node) {
  return node instanceof TSTypeAssertion;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ASSERTION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ASSERTION, TSTypeAssertion);
}