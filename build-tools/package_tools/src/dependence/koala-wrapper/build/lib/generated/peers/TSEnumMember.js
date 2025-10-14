"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSEnumMember = void 0;
exports.isTSEnumMember = isTSEnumMember;
var _reexportForGenerated = require("../../reexport-for-generated");
var _Statement = require("./Statement");
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

class TSEnumMember extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ENUM_MEMBER);
    super(pointer);
  }
  static createTSEnumMember(key, init) {
    return new TSEnumMember(_reexportForGenerated.global.generatedEs2panda._CreateTSEnumMember(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(init)));
  }
  static updateTSEnumMember(original, key, init) {
    return new TSEnumMember(_reexportForGenerated.global.generatedEs2panda._UpdateTSEnumMember(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(init)));
  }
  static create1TSEnumMember(key, init, isGenerated) {
    return new TSEnumMember(_reexportForGenerated.global.generatedEs2panda._CreateTSEnumMember1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(init), isGenerated));
  }
  static update1TSEnumMember(original, key, init, isGenerated) {
    return new TSEnumMember(_reexportForGenerated.global.generatedEs2panda._UpdateTSEnumMember1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(init), isGenerated));
  }
  get key() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSEnumMemberKeyConst(_reexportForGenerated.global.context, this.peer));
  }
  get init() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSEnumMemberInitConst(_reexportForGenerated.global.context, this.peer));
  }
  get isGenerated() {
    return _reexportForGenerated.global.generatedEs2panda._TSEnumMemberIsGeneratedConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.TSEnumMember = TSEnumMember;
function isTSEnumMember(node) {
  return node instanceof TSEnumMember;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ENUM_MEMBER)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ENUM_MEMBER, TSEnumMember);
}