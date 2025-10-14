"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSTupleType = void 0;
exports.isTSTupleType = isTSTupleType;
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

class TSTupleType extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TUPLE_TYPE);
    super(pointer);
  }
  static createTSTupleType(elementTypes) {
    return new TSTupleType(_reexportForGenerated.global.generatedEs2panda._CreateTSTupleType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNodeArray)(elementTypes), elementTypes.length));
  }
  static updateTSTupleType(original, elementTypes) {
    return new TSTupleType(_reexportForGenerated.global.generatedEs2panda._UpdateTSTupleType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNodeArray)(elementTypes), elementTypes.length));
  }
  get elementType() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSTupleTypeElementTypeConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TSTupleType = TSTupleType;
function isTSTupleType(node) {
  return node instanceof TSTupleType;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TUPLE_TYPE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TUPLE_TYPE, TSTupleType);
}