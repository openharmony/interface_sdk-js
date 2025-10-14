"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSFunctionType = void 0;
exports.isETSFunctionType = isETSFunctionType;
var _reexportForGenerated = require("../../reexport-for-generated");
var _TypeNode = require("./TypeNode");
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

class ETSFunctionType extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_FUNCTION_TYPE);
    super(pointer);
  }
  static createETSFunctionType(signature, funcFlags) {
    return new ETSFunctionType(_reexportForGenerated.global.generatedEs2panda._CreateETSFunctionTypeIr(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(signature), funcFlags));
  }
  static updateETSFunctionType(original, signature, funcFlags) {
    return new ETSFunctionType(_reexportForGenerated.global.generatedEs2panda._UpdateETSFunctionTypeIr(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(signature), funcFlags));
  }
  get typeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSFunctionTypeIrTypeParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get params() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ETSFunctionTypeIrParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get returnType() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSFunctionTypeIrReturnTypeConst(_reexportForGenerated.global.context, this.peer));
  }
  get functionalInterface() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSFunctionTypeIrFunctionalInterfaceConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setFunctionalInterface(functionalInterface) {
    _reexportForGenerated.global.generatedEs2panda._ETSFunctionTypeIrSetFunctionalInterface(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(functionalInterface));
    return this;
  }
  get flags() {
    return _reexportForGenerated.global.generatedEs2panda._ETSFunctionTypeIrFlags(_reexportForGenerated.global.context, this.peer);
  }
  get isThrowing() {
    return _reexportForGenerated.global.generatedEs2panda._ETSFunctionTypeIrIsThrowingConst(_reexportForGenerated.global.context, this.peer);
  }
  get isRethrowing() {
    return _reexportForGenerated.global.generatedEs2panda._ETSFunctionTypeIrIsRethrowingConst(_reexportForGenerated.global.context, this.peer);
  }
  get isExtensionFunction() {
    return _reexportForGenerated.global.generatedEs2panda._ETSFunctionTypeIrIsExtensionFunctionConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.ETSFunctionType = ETSFunctionType;
function isETSFunctionType(node) {
  return node instanceof ETSFunctionType;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_FUNCTION_TYPE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_FUNCTION_TYPE, ETSFunctionType);
}