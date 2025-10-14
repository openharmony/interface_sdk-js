"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSModuleDeclaration = void 0;
exports.isTSModuleDeclaration = isTSModuleDeclaration;
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

class TSModuleDeclaration extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MODULE_DECLARATION);
    super(pointer);
  }
  static createTSModuleDeclaration(name, body, declare, _global) {
    return new TSModuleDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateTSModuleDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(name), (0, _reexportForGenerated.passNode)(body), declare, _global));
  }
  static updateTSModuleDeclaration(original, name, body, declare, _global) {
    return new TSModuleDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateTSModuleDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(name), (0, _reexportForGenerated.passNode)(body), declare, _global));
  }
  get name() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSModuleDeclarationNameConst(_reexportForGenerated.global.context, this.peer));
  }
  get body() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSModuleDeclarationBodyConst(_reexportForGenerated.global.context, this.peer));
  }
  get global() {
    return _reexportForGenerated.global.generatedEs2panda._TSModuleDeclarationGlobalConst(_reexportForGenerated.global.context, this.peer);
  }
  get isExternalOrAmbient() {
    return _reexportForGenerated.global.generatedEs2panda._TSModuleDeclarationIsExternalOrAmbientConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.TSModuleDeclaration = TSModuleDeclaration;
function isTSModuleDeclaration(node) {
  return node instanceof TSModuleDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MODULE_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MODULE_DECLARATION, TSModuleDeclaration);
}