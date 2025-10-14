"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSTypeAliasDeclaration = void 0;
exports.isTSTypeAliasDeclaration = isTSTypeAliasDeclaration;
var _reexportForGenerated = require("../../reexport-for-generated");
var _AnnotatedStatement = require("./AnnotatedStatement");
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

class TSTypeAliasDeclaration extends _AnnotatedStatement.AnnotatedStatement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ALIAS_DECLARATION);
    super(pointer);
  }
  static createTSTypeAliasDeclaration(id, typeParams, typeAnnotation) {
    return new TSTypeAliasDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateTSTypeAliasDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(id), (0, _reexportForGenerated.passNode)(typeParams), (0, _reexportForGenerated.passNode)(typeAnnotation)));
  }
  static updateTSTypeAliasDeclaration(original, id, typeParams, typeAnnotation) {
    return new TSTypeAliasDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateTSTypeAliasDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(id), (0, _reexportForGenerated.passNode)(typeParams), (0, _reexportForGenerated.passNode)(typeAnnotation)));
  }
  static create1TSTypeAliasDeclaration(id) {
    return new TSTypeAliasDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateTSTypeAliasDeclaration1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(id)));
  }
  static update1TSTypeAliasDeclaration(original, id) {
    return new TSTypeAliasDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateTSTypeAliasDeclaration1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(id)));
  }
  get id() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSTypeAliasDeclarationIdConst(_reexportForGenerated.global.context, this.peer));
  }
  get typeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSTypeAliasDeclarationTypeParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get decorators() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSTypeAliasDeclarationDecoratorsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTypeParameters(typeParams) {
    _reexportForGenerated.global.generatedEs2panda._TSTypeAliasDeclarationSetTypeParameters(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeParams));
    return this;
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSTypeAliasDeclarationAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._TSTypeAliasDeclarationSetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
  get typeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSTypeAliasDeclarationTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTsTypeAnnotation(typeAnnotation) {
    _reexportForGenerated.global.generatedEs2panda._TSTypeAliasDeclarationSetTsTypeAnnotation(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeAnnotation));
    return this;
  }
}
exports.TSTypeAliasDeclaration = TSTypeAliasDeclaration;
function isTSTypeAliasDeclaration(node) {
  return node instanceof TSTypeAliasDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ALIAS_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ALIAS_DECLARATION, TSTypeAliasDeclaration);
}