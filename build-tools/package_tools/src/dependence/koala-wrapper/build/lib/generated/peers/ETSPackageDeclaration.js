"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSPackageDeclaration = void 0;
exports.isETSPackageDeclaration = isETSPackageDeclaration;
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

class ETSPackageDeclaration extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PACKAGE_DECLARATION);
    super(pointer);
  }
  static createETSPackageDeclaration(name) {
    return new ETSPackageDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateETSPackageDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(name)));
  }
  static updateETSPackageDeclaration(original, name) {
    return new ETSPackageDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateETSPackageDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(name)));
  }
}
exports.ETSPackageDeclaration = ETSPackageDeclaration;
function isETSPackageDeclaration(node) {
  return node instanceof ETSPackageDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PACKAGE_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PACKAGE_DECLARATION, ETSPackageDeclaration);
}