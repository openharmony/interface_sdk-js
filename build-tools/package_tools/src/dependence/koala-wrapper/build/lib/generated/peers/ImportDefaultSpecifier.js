"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportDefaultSpecifier = void 0;
exports.isImportDefaultSpecifier = isImportDefaultSpecifier;
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

class ImportDefaultSpecifier extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_DEFAULT_SPECIFIER);
    super(pointer);
  }
  static createImportDefaultSpecifier(local) {
    return new ImportDefaultSpecifier(_reexportForGenerated.global.generatedEs2panda._CreateImportDefaultSpecifier(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(local)));
  }
  static updateImportDefaultSpecifier(original, local) {
    return new ImportDefaultSpecifier(_reexportForGenerated.global.generatedEs2panda._UpdateImportDefaultSpecifier(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(local)));
  }
  get local() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ImportDefaultSpecifierLocalConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ImportDefaultSpecifier = ImportDefaultSpecifier;
function isImportDefaultSpecifier(node) {
  return node instanceof ImportDefaultSpecifier;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_DEFAULT_SPECIFIER)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_DEFAULT_SPECIFIER, ImportDefaultSpecifier);
}