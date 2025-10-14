"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSSignatureDeclaration = void 0;
exports.isTSSignatureDeclaration = isTSSignatureDeclaration;
var _reexportForGenerated = require("../../reexport-for-generated");
var _TypedAstNode = require("./TypedAstNode");
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

class TSSignatureDeclaration extends _TypedAstNode.TypedAstNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_SIGNATURE_DECLARATION);
    super(pointer);
  }
  static createTSSignatureDeclaration(kind, signature) {
    return new TSSignatureDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateTSSignatureDeclaration(_reexportForGenerated.global.context, kind, (0, _reexportForGenerated.passNode)(signature)));
  }
  static updateTSSignatureDeclaration(original, kind, signature) {
    return new TSSignatureDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateTSSignatureDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), kind, (0, _reexportForGenerated.passNode)(signature)));
  }
  get typeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSSignatureDeclarationTypeParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get params() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSSignatureDeclarationParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get returnTypeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSSignatureDeclarationReturnTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  get kind() {
    return _reexportForGenerated.global.generatedEs2panda._TSSignatureDeclarationKindConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.TSSignatureDeclaration = TSSignatureDeclaration;
function isTSSignatureDeclaration(node) {
  return node instanceof TSSignatureDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_SIGNATURE_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_SIGNATURE_DECLARATION, TSSignatureDeclaration);
}