"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FunctionDeclaration = void 0;
exports.isFunctionDeclaration = isFunctionDeclaration;
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

class FunctionDeclaration extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_DECLARATION);
    super(pointer);
  }
  static createFunctionDeclaration(func, annotations, isAnonymous) {
    return new FunctionDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateFunctionDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(func), (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length, isAnonymous));
  }
  static updateFunctionDeclaration(original, func, annotations, isAnonymous) {
    return new FunctionDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateFunctionDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(func), (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length, isAnonymous));
  }
  static create1FunctionDeclaration(func, isAnonymous) {
    return new FunctionDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateFunctionDeclaration1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(func), isAnonymous));
  }
  static update1FunctionDeclaration(original, func, isAnonymous) {
    return new FunctionDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateFunctionDeclaration1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(func), isAnonymous));
  }
  get isAnonymous() {
    return _reexportForGenerated.global.generatedEs2panda._FunctionDeclarationIsAnonymousConst(_reexportForGenerated.global.context, this.peer);
  }
  get function() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._FunctionDeclarationFunctionConst(_reexportForGenerated.global.context, this.peer));
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._FunctionDeclarationAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._FunctionDeclarationSetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.FunctionDeclaration = FunctionDeclaration;
function isFunctionDeclaration(node) {
  return node instanceof FunctionDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_DECLARATION, FunctionDeclaration);
}