"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExportAllDeclaration = void 0;
exports.isExportAllDeclaration = isExportAllDeclaration;
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

class ExportAllDeclaration extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_ALL_DECLARATION);
    super(pointer);
  }
  static createExportAllDeclaration(source, exported) {
    return new ExportAllDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateExportAllDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(source), (0, _reexportForGenerated.passNode)(exported)));
  }
  static updateExportAllDeclaration(original, source, exported) {
    return new ExportAllDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateExportAllDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(source), (0, _reexportForGenerated.passNode)(exported)));
  }
  get source() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ExportAllDeclarationSourceConst(_reexportForGenerated.global.context, this.peer));
  }
  get exported() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ExportAllDeclarationExportedConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ExportAllDeclaration = ExportAllDeclaration;
function isExportAllDeclaration(node) {
  return node instanceof ExportAllDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_ALL_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_ALL_DECLARATION, ExportAllDeclaration);
}