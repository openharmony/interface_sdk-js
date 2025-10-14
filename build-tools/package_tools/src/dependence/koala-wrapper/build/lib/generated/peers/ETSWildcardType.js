"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSWildcardType = void 0;
exports.isETSWildcardType = isETSWildcardType;
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

class ETSWildcardType extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_WILDCARD_TYPE);
    super(pointer);
  }
  static createETSWildcardType(typeReference, flags) {
    return new ETSWildcardType(_reexportForGenerated.global.generatedEs2panda._CreateETSWildcardType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(typeReference), flags));
  }
  static updateETSWildcardType(original, typeReference, flags) {
    return new ETSWildcardType(_reexportForGenerated.global.generatedEs2panda._UpdateETSWildcardType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(typeReference), flags));
  }
  get typeReference() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSWildcardTypeTypeReferenceConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ETSWildcardType = ETSWildcardType;
function isETSWildcardType(node) {
  return node instanceof ETSWildcardType;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_WILDCARD_TYPE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_WILDCARD_TYPE, ETSWildcardType);
}