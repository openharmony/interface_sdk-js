"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportSpecifier = void 0;
exports.isImportSpecifier = isImportSpecifier;
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

class ImportSpecifier extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_SPECIFIER);
    super(pointer);
  }
  static createImportSpecifier(imported, local) {
    return new ImportSpecifier(_reexportForGenerated.global.generatedEs2panda._CreateImportSpecifier(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(imported), (0, _reexportForGenerated.passNode)(local)));
  }
  static updateImportSpecifier(original, imported, local) {
    return new ImportSpecifier(_reexportForGenerated.global.generatedEs2panda._UpdateImportSpecifier(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(imported), (0, _reexportForGenerated.passNode)(local)));
  }
  get imported() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ImportSpecifierImportedConst(_reexportForGenerated.global.context, this.peer));
  }
  get local() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ImportSpecifierLocalConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ImportSpecifier = ImportSpecifier;
function isImportSpecifier(node) {
  return node instanceof ImportSpecifier;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_SPECIFIER)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_SPECIFIER, ImportSpecifier);
}