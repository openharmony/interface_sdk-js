"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSUnionType = void 0;
exports.isTSUnionType = isTSUnionType;
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

class TSUnionType extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNION_TYPE);
    super(pointer);
  }
  static createTSUnionType(types) {
    return new TSUnionType(_reexportForGenerated.global.generatedEs2panda._CreateTSUnionType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNodeArray)(types), types.length));
  }
  static updateTSUnionType(original, types) {
    return new TSUnionType(_reexportForGenerated.global.generatedEs2panda._UpdateTSUnionType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNodeArray)(types), types.length));
  }
  get types() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSUnionTypeTypesConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TSUnionType = TSUnionType;
function isTSUnionType(node) {
  return node instanceof TSUnionType;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNION_TYPE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNION_TYPE, TSUnionType);
}