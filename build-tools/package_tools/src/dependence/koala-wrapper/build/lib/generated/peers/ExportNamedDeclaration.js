"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportNamedDeclaration = void 0;
exports.isExportNamedDeclaration = isExportNamedDeclaration;
var _reexportForGenerated = require("../../reexport-for-generated");
var _Statement = require("./Statement");
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

class ExportNamedDeclaration extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_NAMED_DECLARATION);
    super(pointer);
  }
  static createExportNamedDeclaration(source, specifiers) {
    return new ExportNamedDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateExportNamedDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(source), (0, _reexportForGenerated.passNodeArray)(specifiers), specifiers.length));
  }
  static updateExportNamedDeclaration(original, source, specifiers) {
    return new ExportNamedDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateExportNamedDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(source), (0, _reexportForGenerated.passNodeArray)(specifiers), specifiers.length));
  }
  static create1ExportNamedDeclaration(decl, specifiers) {
    return new ExportNamedDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateExportNamedDeclaration1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(decl), (0, _reexportForGenerated.passNodeArray)(specifiers), specifiers.length));
  }
  static update1ExportNamedDeclaration(original, decl, specifiers) {
    return new ExportNamedDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateExportNamedDeclaration1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(decl), (0, _reexportForGenerated.passNodeArray)(specifiers), specifiers.length));
  }
  static create2ExportNamedDeclaration(decl) {
    return new ExportNamedDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateExportNamedDeclaration2(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(decl)));
  }
  static update2ExportNamedDeclaration(original, decl) {
    return new ExportNamedDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateExportNamedDeclaration2(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(decl)));
  }
  get decl() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ExportNamedDeclarationDeclConst(_reexportForGenerated.global.context, this.peer));
  }
  get source() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ExportNamedDeclarationSourceConst(_reexportForGenerated.global.context, this.peer));
  }
  get specifiers() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ExportNamedDeclarationSpecifiersConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ExportNamedDeclaration = ExportNamedDeclaration;
function isExportNamedDeclaration(node) {
  return node instanceof ExportNamedDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_NAMED_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_NAMED_DECLARATION, ExportNamedDeclaration);
}