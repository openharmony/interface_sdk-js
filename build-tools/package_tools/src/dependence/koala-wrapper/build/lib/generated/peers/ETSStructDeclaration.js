"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSStructDeclaration = void 0;
exports.isETSStructDeclaration = isETSStructDeclaration;
var _reexportForGenerated = require("../../reexport-for-generated");
var _ClassDeclaration = require("./ClassDeclaration");
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

class ETSStructDeclaration extends _ClassDeclaration.ClassDeclaration {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_STRUCT_DECLARATION);
    super(pointer);
  }
  static createETSStructDeclaration(def) {
    return new ETSStructDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateETSStructDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(def)));
  }
  static updateETSStructDeclaration(original, def) {
    return new ETSStructDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateETSStructDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(def)));
  }
}
exports.ETSStructDeclaration = ETSStructDeclaration;
function isETSStructDeclaration(node) {
  return node instanceof ETSStructDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_STRUCT_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_STRUCT_DECLARATION, ETSStructDeclaration);
}