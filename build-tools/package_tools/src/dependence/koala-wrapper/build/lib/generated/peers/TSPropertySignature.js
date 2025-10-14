"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSPropertySignature = void 0;
exports.isTSPropertySignature = isTSPropertySignature;
var _reexportForGenerated = require("../../reexport-for-generated");
var _AnnotatedAstNode = require("./AnnotatedAstNode");
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

class TSPropertySignature extends _AnnotatedAstNode.AnnotatedAstNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PROPERTY_SIGNATURE);
    super(pointer);
  }
  static createTSPropertySignature(key, typeAnnotation, computed, optional_arg, readonly_arg) {
    return new TSPropertySignature(_reexportForGenerated.global.generatedEs2panda._CreateTSPropertySignature(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(typeAnnotation), computed, optional_arg, readonly_arg));
  }
  static updateTSPropertySignature(original, key, typeAnnotation, computed, optional_arg, readonly_arg) {
    return new TSPropertySignature(_reexportForGenerated.global.generatedEs2panda._UpdateTSPropertySignature(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(typeAnnotation), computed, optional_arg, readonly_arg));
  }
  get key() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSPropertySignatureKeyConst(_reexportForGenerated.global.context, this.peer));
  }
  get computed() {
    return _reexportForGenerated.global.generatedEs2panda._TSPropertySignatureComputedConst(_reexportForGenerated.global.context, this.peer);
  }
  get optional() {
    return _reexportForGenerated.global.generatedEs2panda._TSPropertySignatureOptionalConst(_reexportForGenerated.global.context, this.peer);
  }
  get readonly() {
    return _reexportForGenerated.global.generatedEs2panda._TSPropertySignatureReadonlyConst(_reexportForGenerated.global.context, this.peer);
  }
  get typeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSPropertySignatureTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTsTypeAnnotation(typeAnnotation) {
    _reexportForGenerated.global.generatedEs2panda._TSPropertySignatureSetTsTypeAnnotation(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeAnnotation));
    return this;
  }
}
exports.TSPropertySignature = TSPropertySignature;
function isTSPropertySignature(node) {
  return node instanceof TSPropertySignature;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PROPERTY_SIGNATURE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PROPERTY_SIGNATURE, TSPropertySignature);
}