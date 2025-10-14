"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSTypeReferencePart = void 0;
exports.isETSTypeReferencePart = isETSTypeReferencePart;
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

class ETSTypeReferencePart extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TYPE_REFERENCE_PART);
    super(pointer);
  }
  static createETSTypeReferencePart(name, typeParams, prev) {
    return new ETSTypeReferencePart(_reexportForGenerated.global.generatedEs2panda._CreateETSTypeReferencePart(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(name), (0, _reexportForGenerated.passNode)(typeParams), (0, _reexportForGenerated.passNode)(prev)));
  }
  static updateETSTypeReferencePart(original, name, typeParams, prev) {
    return new ETSTypeReferencePart(_reexportForGenerated.global.generatedEs2panda._UpdateETSTypeReferencePart(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(name), (0, _reexportForGenerated.passNode)(typeParams), (0, _reexportForGenerated.passNode)(prev)));
  }
  static create1ETSTypeReferencePart(name) {
    return new ETSTypeReferencePart(_reexportForGenerated.global.generatedEs2panda._CreateETSTypeReferencePart1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(name)));
  }
  static update1ETSTypeReferencePart(original, name) {
    return new ETSTypeReferencePart(_reexportForGenerated.global.generatedEs2panda._UpdateETSTypeReferencePart1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(name)));
  }
  get previous() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSTypeReferencePartPreviousConst(_reexportForGenerated.global.context, this.peer));
  }
  get typeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSTypeReferencePartTypeParams(_reexportForGenerated.global.context, this.peer));
  }
  get name() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSTypeReferencePartNameConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ETSTypeReferencePart = ETSTypeReferencePart;
function isETSTypeReferencePart(node) {
  return node instanceof ETSTypeReferencePart;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TYPE_REFERENCE_PART)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TYPE_REFERENCE_PART, ETSTypeReferencePart);
}