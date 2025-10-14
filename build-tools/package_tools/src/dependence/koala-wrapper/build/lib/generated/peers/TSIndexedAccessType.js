"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSIndexedAccessType = void 0;
exports.isTSIndexedAccessType = isTSIndexedAccessType;
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

class TSIndexedAccessType extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INDEXED_ACCESS_TYPE);
    super(pointer);
  }
  static createTSIndexedAccessType(objectType, indexType) {
    return new TSIndexedAccessType(_reexportForGenerated.global.generatedEs2panda._CreateTSIndexedAccessType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(objectType), (0, _reexportForGenerated.passNode)(indexType)));
  }
  static updateTSIndexedAccessType(original, objectType, indexType) {
    return new TSIndexedAccessType(_reexportForGenerated.global.generatedEs2panda._UpdateTSIndexedAccessType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(objectType), (0, _reexportForGenerated.passNode)(indexType)));
  }
  get objectType() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSIndexedAccessTypeObjectTypeConst(_reexportForGenerated.global.context, this.peer));
  }
  get indexType() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSIndexedAccessTypeIndexTypeConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TSIndexedAccessType = TSIndexedAccessType;
function isTSIndexedAccessType(node) {
  return node instanceof TSIndexedAccessType;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INDEXED_ACCESS_TYPE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INDEXED_ACCESS_TYPE, TSIndexedAccessType);
}