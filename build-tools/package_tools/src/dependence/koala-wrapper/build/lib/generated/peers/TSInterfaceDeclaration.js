"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSInterfaceDeclaration = void 0;
exports.isTSInterfaceDeclaration = isTSInterfaceDeclaration;
var _reexportForGenerated = require("../../reexport-for-generated");
var _TypedStatement = require("./TypedStatement");
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

class TSInterfaceDeclaration extends _TypedStatement.TypedStatement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_DECLARATION);
    super(pointer);
  }
  static createTSInterfaceDeclaration(_extends, id, typeParams, body, isStatic, isExternal) {
    return new TSInterfaceDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateTSInterfaceDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNodeArray)(_extends), _extends.length, (0, _reexportForGenerated.passNode)(id), (0, _reexportForGenerated.passNode)(typeParams), (0, _reexportForGenerated.passNode)(body), isStatic, isExternal));
  }
  static updateTSInterfaceDeclaration(original, _extends, id, typeParams, body, isStatic, isExternal) {
    return new TSInterfaceDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateTSInterfaceDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNodeArray)(_extends), _extends.length, (0, _reexportForGenerated.passNode)(id), (0, _reexportForGenerated.passNode)(typeParams), (0, _reexportForGenerated.passNode)(body), isStatic, isExternal));
  }
  get body() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationBodyConst(_reexportForGenerated.global.context, this.peer));
  }
  get id() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationIdConst(_reexportForGenerated.global.context, this.peer));
  }
  get internalName() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationInternalNameConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setInternalName(internalName) {
    _reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationSetInternalName(_reexportForGenerated.global.context, this.peer, internalName);
    return this;
  }
  get isStatic() {
    return _reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationIsStaticConst(_reexportForGenerated.global.context, this.peer);
  }
  get isFromExternal() {
    return _reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationIsFromExternalConst(_reexportForGenerated.global.context, this.peer);
  }
  get typeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationTypeParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get extends() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationExtendsConst(_reexportForGenerated.global.context, this.peer));
  }
  get decorators() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationDecoratorsConst(_reexportForGenerated.global.context, this.peer));
  }
  get getAnonClass() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationGetAnonClassConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnonClass(anonClass) {
    _reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationSetAnonClass(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(anonClass));
    return this;
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._TSInterfaceDeclarationSetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.TSInterfaceDeclaration = TSInterfaceDeclaration;
function isTSInterfaceDeclaration(node) {
  return node instanceof TSInterfaceDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_DECLARATION, TSInterfaceDeclaration);
}