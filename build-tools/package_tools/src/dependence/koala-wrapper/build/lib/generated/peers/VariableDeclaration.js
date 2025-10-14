"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariableDeclaration = void 0;
exports.isVariableDeclaration = isVariableDeclaration;
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

class VariableDeclaration extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATION);
    super(pointer);
  }
  static createVariableDeclaration(kind, declarators) {
    return new VariableDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateVariableDeclaration(_reexportForGenerated.global.context, kind, (0, _reexportForGenerated.passNodeArray)(declarators), declarators.length));
  }
  static updateVariableDeclaration(original, kind, declarators) {
    return new VariableDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateVariableDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), kind, (0, _reexportForGenerated.passNodeArray)(declarators), declarators.length));
  }
  get declarators() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._VariableDeclarationDeclaratorsConst(_reexportForGenerated.global.context, this.peer));
  }
  get kind() {
    return _reexportForGenerated.global.generatedEs2panda._VariableDeclarationKindConst(_reexportForGenerated.global.context, this.peer);
  }
  get decorators() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._VariableDeclarationDecoratorsConst(_reexportForGenerated.global.context, this.peer));
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._VariableDeclarationAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._VariableDeclarationSetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.VariableDeclaration = VariableDeclaration;
function isVariableDeclaration(node) {
  return node instanceof VariableDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATION, VariableDeclaration);
}