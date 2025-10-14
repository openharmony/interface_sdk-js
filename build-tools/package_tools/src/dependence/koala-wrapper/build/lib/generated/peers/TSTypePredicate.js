"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSTypePredicate = void 0;
exports.isTSTypePredicate = isTSTypePredicate;
var _reexportForGenerated = require("../../reexport-for-generated");
var _TypeNode = require("./TypeNode");
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

class TSTypePredicate extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PREDICATE);
    super(pointer);
  }
  static createTSTypePredicate(parameterName, typeAnnotation, asserts) {
    return new TSTypePredicate(_reexportForGenerated.global.generatedEs2panda._CreateTSTypePredicate(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(parameterName), (0, _reexportForGenerated.passNode)(typeAnnotation), asserts));
  }
  static updateTSTypePredicate(original, parameterName, typeAnnotation, asserts) {
    return new TSTypePredicate(_reexportForGenerated.global.generatedEs2panda._UpdateTSTypePredicate(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(parameterName), (0, _reexportForGenerated.passNode)(typeAnnotation), asserts));
  }
  get parameterName() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSTypePredicateParameterNameConst(_reexportForGenerated.global.context, this.peer));
  }
  get typeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSTypePredicateTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  get asserts() {
    return _reexportForGenerated.global.generatedEs2panda._TSTypePredicateAssertsConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.TSTypePredicate = TSTypePredicate;
function isTSTypePredicate(node) {
  return node instanceof TSTypePredicate;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PREDICATE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PREDICATE, TSTypePredicate);
}