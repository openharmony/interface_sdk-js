"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSImportDeclaration = void 0;
exports.isETSImportDeclaration = isETSImportDeclaration;
var _reexportForGenerated = require("../../reexport-for-generated");
var _ImportDeclaration = require("./ImportDeclaration");
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

class ETSImportDeclaration extends _ImportDeclaration.ImportDeclaration {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_IMPORT_DECLARATION);
    super(pointer);
  }
  static createETSImportDeclaration(source, specifiers, importKind, program, flags) {
    return new ETSImportDeclaration(_reexportForGenerated.global.es2panda._CreateETSImportDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(source), (0, _reexportForGenerated.passNodeArray)(specifiers), specifiers.length, importKind, (0, _reexportForGenerated.passNode)(program), flags));
  }
  static updateETSImportDeclaration(original, source, specifiers, importKind) {
    return new ETSImportDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateETSImportDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(source), (0, _reexportForGenerated.passNodeArray)(specifiers), specifiers.length, importKind));
  }
  get hasDecl() {
    return _reexportForGenerated.global.generatedEs2panda._ETSImportDeclarationHasDeclConst(_reexportForGenerated.global.context, this.peer);
  }
  get isPureDynamic() {
    return _reexportForGenerated.global.generatedEs2panda._ETSImportDeclarationIsPureDynamicConst(_reexportForGenerated.global.context, this.peer);
  }
  get assemblerName() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._ETSImportDeclarationAssemblerNameConst(_reexportForGenerated.global.context, this.peer));
  }
  // get source(): StringLiteral | undefined {
  //     return unpackNode(global.generatedEs2panda._ETSImportDeclarationSourceConst(global.context, this.peer))
  // }
  get resolvedSource() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSImportDeclarationResolvedSourceConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ETSImportDeclaration = ETSImportDeclaration;
function isETSImportDeclaration(node) {
  return node instanceof ETSImportDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_IMPORT_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_IMPORT_DECLARATION, ETSImportDeclaration);
}