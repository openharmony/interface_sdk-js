"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSEnumDeclaration = void 0;
exports.isTSEnumDeclaration = isTSEnumDeclaration;
var _reexportForGenerated = require("../../reexport-for-generated");
var _TypedStatement = require("./TypedStatement");
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

class TSEnumDeclaration extends _TypedStatement.TypedStatement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ENUM_DECLARATION);
    super(pointer);
  }
  static createTSEnumDeclaration(key, members, isConst, isStatic, isDeclare) {
    return new TSEnumDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateTSEnumDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNodeArray)(members), members.length, isConst, isStatic, isDeclare));
  }
  static updateTSEnumDeclaration(original, key, members, isConst, isStatic, isDeclare) {
    return new TSEnumDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateTSEnumDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNodeArray)(members), members.length, isConst, isStatic, isDeclare));
  }
  get key() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSEnumDeclarationKeyConst(_reexportForGenerated.global.context, this.peer));
  }
  get members() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSEnumDeclarationMembersConst(_reexportForGenerated.global.context, this.peer));
  }
  get internalName() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._TSEnumDeclarationInternalNameConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setInternalName(internalName) {
    _reexportForGenerated.global.generatedEs2panda._TSEnumDeclarationSetInternalName(_reexportForGenerated.global.context, this.peer, internalName);
    return this;
  }
  get boxedClass() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSEnumDeclarationBoxedClassConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setBoxedClass(wrapperClass) {
    _reexportForGenerated.global.generatedEs2panda._TSEnumDeclarationSetBoxedClass(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(wrapperClass));
    return this;
  }
  get isConst() {
    return _reexportForGenerated.global.generatedEs2panda._TSEnumDeclarationIsConstConst(_reexportForGenerated.global.context, this.peer);
  }
  get decorators() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSEnumDeclarationDecoratorsConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TSEnumDeclaration = TSEnumDeclaration;
function isTSEnumDeclaration(node) {
  return node instanceof TSEnumDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ENUM_DECLARATION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ENUM_DECLARATION, TSEnumDeclaration);
}