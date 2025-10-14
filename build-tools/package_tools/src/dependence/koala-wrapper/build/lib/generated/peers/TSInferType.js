"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSInferType = void 0;
exports.isTSInferType = isTSInferType;
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

class TSInferType extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INFER_TYPE);
    super(pointer);
  }
  static createTSInferType(typeParam) {
    return new TSInferType(_reexportForGenerated.global.generatedEs2panda._CreateTSInferType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(typeParam)));
  }
  static updateTSInferType(original, typeParam) {
    return new TSInferType(_reexportForGenerated.global.generatedEs2panda._UpdateTSInferType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(typeParam)));
  }
  get typeParam() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSInferTypeTypeParamConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TSInferType = TSInferType;
function isTSInferType(node) {
  return node instanceof TSInferType;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INFER_TYPE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INFER_TYPE, TSInferType);
}