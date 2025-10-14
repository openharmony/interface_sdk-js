"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSReExportDeclaration = void 0;
exports.isETSReExportDeclaration = isETSReExportDeclaration;
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

class ETSReExportDeclaration extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_REEXPORT_STATEMENT);
    super(pointer);
  }
  get getETSImportDeclarations() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSReExportDeclarationGetETSImportDeclarationsConst(_reexportForGenerated.global.context, this.peer));
  }
  get getProgramPath() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._ETSReExportDeclarationGetProgramPathConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ETSReExportDeclaration = ETSReExportDeclaration;
function isETSReExportDeclaration(node) {
  return node instanceof ETSReExportDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_REEXPORT_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_REEXPORT_STATEMENT, ETSReExportDeclaration);
}