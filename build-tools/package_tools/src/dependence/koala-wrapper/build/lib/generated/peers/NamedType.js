"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NamedType = void 0;
exports.isNamedType = isNamedType;
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

class NamedType extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_NAMED_TYPE);
    super(pointer);
  }
  static createNamedType(name) {
    return new NamedType(_reexportForGenerated.global.generatedEs2panda._CreateNamedType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(name)));
  }
  static updateNamedType(original, name) {
    return new NamedType(_reexportForGenerated.global.generatedEs2panda._UpdateNamedType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(name)));
  }
  get name() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._NamedTypeNameConst(_reexportForGenerated.global.context, this.peer));
  }
  get typeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._NamedTypeTypeParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get isNullable() {
    return _reexportForGenerated.global.generatedEs2panda._NamedTypeIsNullableConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setNullable(nullable) {
    _reexportForGenerated.global.generatedEs2panda._NamedTypeSetNullable(_reexportForGenerated.global.context, this.peer, nullable);
    return this;
  }
  /** @deprecated */
  setNext(next) {
    _reexportForGenerated.global.generatedEs2panda._NamedTypeSetNext(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(next));
    return this;
  }
  /** @deprecated */
  setTypeParams(typeParams) {
    _reexportForGenerated.global.generatedEs2panda._NamedTypeSetTypeParams(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeParams));
    return this;
  }
}
exports.NamedType = NamedType;
function isNamedType(node) {
  return node instanceof NamedType;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_NAMED_TYPE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_NAMED_TYPE, NamedType);
}