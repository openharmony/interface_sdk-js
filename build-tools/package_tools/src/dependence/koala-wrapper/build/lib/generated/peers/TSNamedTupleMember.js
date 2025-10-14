"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSNamedTupleMember = void 0;
exports.isTSNamedTupleMember = isTSNamedTupleMember;
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

class TSNamedTupleMember extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NAMED_TUPLE_MEMBER);
    super(pointer);
  }
  static createTSNamedTupleMember(label, elementType, optional_arg) {
    return new TSNamedTupleMember(_reexportForGenerated.global.generatedEs2panda._CreateTSNamedTupleMember(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(label), (0, _reexportForGenerated.passNode)(elementType), optional_arg));
  }
  static updateTSNamedTupleMember(original, label, elementType, optional_arg) {
    return new TSNamedTupleMember(_reexportForGenerated.global.generatedEs2panda._UpdateTSNamedTupleMember(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(label), (0, _reexportForGenerated.passNode)(elementType), optional_arg));
  }
  get label() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSNamedTupleMemberLabelConst(_reexportForGenerated.global.context, this.peer));
  }
  get elementType() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSNamedTupleMemberElementTypeConst(_reexportForGenerated.global.context, this.peer));
  }
  get isOptional() {
    return _reexportForGenerated.global.generatedEs2panda._TSNamedTupleMemberIsOptionalConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.TSNamedTupleMember = TSNamedTupleMember;
function isTSNamedTupleMember(node) {
  return node instanceof TSNamedTupleMember;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NAMED_TUPLE_MEMBER)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NAMED_TUPLE_MEMBER, TSNamedTupleMember);
}