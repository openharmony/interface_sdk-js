"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSTuple = void 0;
exports.isETSTuple = isETSTuple;
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

class ETSTuple extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TUPLE);
    super(pointer);
  }
  static createETSTuple() {
    return new ETSTuple(_reexportForGenerated.global.generatedEs2panda._CreateETSTuple(_reexportForGenerated.global.context));
  }
  static updateETSTuple(original) {
    return new ETSTuple(_reexportForGenerated.global.generatedEs2panda._UpdateETSTuple(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original)));
  }
  static create1ETSTuple(size) {
    return new ETSTuple(_reexportForGenerated.global.generatedEs2panda._CreateETSTuple1(_reexportForGenerated.global.context, size));
  }
  static update1ETSTuple(original, size) {
    return new ETSTuple(_reexportForGenerated.global.generatedEs2panda._UpdateETSTuple1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), size));
  }
  static create2ETSTuple(typeList) {
    return new ETSTuple(_reexportForGenerated.global.generatedEs2panda._CreateETSTuple2(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNodeArray)(typeList), typeList.length));
  }
  static update2ETSTuple(original, typeList) {
    return new ETSTuple(_reexportForGenerated.global.generatedEs2panda._UpdateETSTuple2(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNodeArray)(typeList), typeList.length));
  }
  get getTupleSize() {
    return _reexportForGenerated.global.generatedEs2panda._ETSTupleGetTupleSizeConst(_reexportForGenerated.global.context, this.peer);
  }
  get getTupleTypeAnnotationsList() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ETSTupleGetTupleTypeAnnotationsListConst(_reexportForGenerated.global.context, this.peer));
  }
  get hasSpreadType() {
    return _reexportForGenerated.global.generatedEs2panda._ETSTupleHasSpreadTypeConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setSpreadType(newSpreadType) {
    _reexportForGenerated.global.generatedEs2panda._ETSTupleSetSpreadType(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(newSpreadType));
    return this;
  }
  /** @deprecated */
  setTypeAnnotationsList(typeNodeList) {
    _reexportForGenerated.global.generatedEs2panda._ETSTupleSetTypeAnnotationsList(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(typeNodeList), typeNodeList.length);
    return this;
  }
}
exports.ETSTuple = ETSTuple;
function isETSTuple(node) {
  return node instanceof ETSTuple;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TUPLE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TUPLE, ETSTuple);
}