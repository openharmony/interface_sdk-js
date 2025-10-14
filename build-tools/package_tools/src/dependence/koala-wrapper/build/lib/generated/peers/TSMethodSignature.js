"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSMethodSignature = void 0;
exports.isTSMethodSignature = isTSMethodSignature;
var _reexportForGenerated = require("../../reexport-for-generated");
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

class TSMethodSignature extends _reexportForGenerated.AstNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_METHOD_SIGNATURE);
    super(pointer);
  }
  static createTSMethodSignature(key, signature, computed, optional_arg) {
    return new TSMethodSignature(_reexportForGenerated.global.generatedEs2panda._CreateTSMethodSignature(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(signature), computed, optional_arg));
  }
  static updateTSMethodSignature(original, key, signature, computed, optional_arg) {
    return new TSMethodSignature(_reexportForGenerated.global.generatedEs2panda._UpdateTSMethodSignature(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(signature), computed, optional_arg));
  }
  get key() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSMethodSignatureKeyConst(_reexportForGenerated.global.context, this.peer));
  }
  get typeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSMethodSignatureTypeParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get params() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSMethodSignatureParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get returnTypeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSMethodSignatureReturnTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  get computed() {
    return _reexportForGenerated.global.generatedEs2panda._TSMethodSignatureComputedConst(_reexportForGenerated.global.context, this.peer);
  }
  get optional() {
    return _reexportForGenerated.global.generatedEs2panda._TSMethodSignatureOptionalConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.TSMethodSignature = TSMethodSignature;
function isTSMethodSignature(node) {
  return node instanceof TSMethodSignature;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_METHOD_SIGNATURE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_METHOD_SIGNATURE, TSMethodSignature);
}