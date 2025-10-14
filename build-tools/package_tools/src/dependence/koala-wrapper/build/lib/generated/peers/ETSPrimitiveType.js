"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSPrimitiveType = void 0;
exports.isETSPrimitiveType = isETSPrimitiveType;
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

class ETSPrimitiveType extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PRIMITIVE_TYPE);
    super(pointer);
  }
  static createETSPrimitiveType(type) {
    return new ETSPrimitiveType(_reexportForGenerated.global.generatedEs2panda._CreateETSPrimitiveType(_reexportForGenerated.global.context, type));
  }
  static updateETSPrimitiveType(original, type) {
    return new ETSPrimitiveType(_reexportForGenerated.global.generatedEs2panda._UpdateETSPrimitiveType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), type));
  }
  get getPrimitiveType() {
    return _reexportForGenerated.global.generatedEs2panda._ETSPrimitiveTypeGetPrimitiveTypeConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.ETSPrimitiveType = ETSPrimitiveType;
function isETSPrimitiveType(node) {
  return node instanceof ETSPrimitiveType;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PRIMITIVE_TYPE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PRIMITIVE_TYPE, ETSPrimitiveType);
}