"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSTypeParameterDeclaration = void 0;
exports.isTSTypeParameterDeclaration = isTSTypeParameterDeclaration;
var _reexportForGenerated = require("../../reexport-for-generated");
var _Expression = require("./Expression");
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

class TSTypeParameterDeclaration extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER_DECLARATION);
    super(pointer);
  }
  static createTSTypeParameterDeclaration(params, requiredParams) {
    return new TSTypeParameterDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateTSTypeParameterDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNodeArray)(params), params.length, requiredParams));
  }
  static updateTSTypeParameterDeclaration(original, params, requiredParams) {
    return new TSTypeParameterDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateTSTypeParameterDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNodeArray)(params), params.length, requiredParams));
  }
  get params() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSTypeParameterDeclarationParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  addParam(param) {
    _reexportForGenerated.global.generatedEs2panda._TSTypeParameterDeclarationAddParam(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(param));
    return this;
  }
  get requiredParams() {
    return _reexportForGenerated.global.generatedEs2panda._TSTypeParameterDeclarationRequiredParamsConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.TSTypeParameterDeclaration = TSTypeParameterDeclaration;
function isTSTypeParameterDeclaration(node) {
  return node instanceof TSTypeParameterDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER_DECLARATION, TSTypeParameterDeclaration);
}