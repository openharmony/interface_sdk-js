"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MethodDefinition = void 0;
exports.isMethodDefinition = isMethodDefinition;
var _reexportForGenerated = require("../../reexport-for-generated");
var _ClassElement = require("./ClassElement");
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

class MethodDefinition extends _ClassElement.ClassElement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_METHOD_DEFINITION);
    super(pointer);
  }
  static createMethodDefinition(kind, key, value, modifiers, isComputed) {
    return new MethodDefinition(_reexportForGenerated.global.generatedEs2panda._CreateMethodDefinition(_reexportForGenerated.global.context, kind, (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(value), modifiers, isComputed));
  }
  static updateMethodDefinition(original, kind, key, value, modifiers, isComputed) {
    return new MethodDefinition(_reexportForGenerated.global.generatedEs2panda._UpdateMethodDefinition(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), kind, (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(value), modifiers, isComputed));
  }
  get kind() {
    return _reexportForGenerated.global.generatedEs2panda._MethodDefinitionKindConst(_reexportForGenerated.global.context, this.peer);
  }
  get isConstructor() {
    return _reexportForGenerated.global.generatedEs2panda._MethodDefinitionIsConstructorConst(_reexportForGenerated.global.context, this.peer);
  }
  get isExtensionMethod() {
    return _reexportForGenerated.global.generatedEs2panda._MethodDefinitionIsExtensionMethodConst(_reexportForGenerated.global.context, this.peer);
  }
  get overloads() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._MethodDefinitionOverloadsConst(_reexportForGenerated.global.context, this.peer));
  }
  get baseOverloadMethod() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._MethodDefinitionBaseOverloadMethodConst(_reexportForGenerated.global.context, this.peer));
  }
  get asyncPairMethod() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._MethodDefinitionAsyncPairMethodConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setOverloads(overloads) {
    _reexportForGenerated.global.generatedEs2panda._MethodDefinitionSetOverloads(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(overloads), overloads.length);
    return this;
  }
  /** @deprecated */
  clearOverloads() {
    _reexportForGenerated.global.generatedEs2panda._MethodDefinitionClearOverloads(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  /** @deprecated */
  addOverload(overload) {
    _reexportForGenerated.global.generatedEs2panda._MethodDefinitionAddOverload(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(overload));
    return this;
  }
  /** @deprecated */
  setBaseOverloadMethod(baseOverloadMethod) {
    _reexportForGenerated.global.generatedEs2panda._MethodDefinitionSetBaseOverloadMethod(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(baseOverloadMethod));
    return this;
  }
  /** @deprecated */
  setAsyncPairMethod(method) {
    _reexportForGenerated.global.generatedEs2panda._MethodDefinitionSetAsyncPairMethod(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(method));
    return this;
  }
}
exports.MethodDefinition = MethodDefinition;
function isMethodDefinition(node) {
  return node instanceof MethodDefinition;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_METHOD_DEFINITION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_METHOD_DEFINITION, MethodDefinition);
}