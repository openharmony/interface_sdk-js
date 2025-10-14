"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Property = void 0;
exports.isProperty = isProperty;
var _reexportForGenerated = require("../../reexport-for-generated");
var _Expression = require("./Expression");
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

class Property extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_PROPERTY);
    super(pointer);
  }
  static createProperty(key, value) {
    return new Property(_reexportForGenerated.global.generatedEs2panda._CreateProperty(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(value)));
  }
  static updateProperty(original, key, value) {
    return new Property(_reexportForGenerated.global.generatedEs2panda._UpdateProperty(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(value)));
  }
  static create1Property(kind, key, value, isMethod, isComputed) {
    return new Property(_reexportForGenerated.global.generatedEs2panda._CreateProperty1(_reexportForGenerated.global.context, kind, (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(value), isMethod, isComputed));
  }
  static update1Property(original, kind, key, value, isMethod, isComputed) {
    return new Property(_reexportForGenerated.global.generatedEs2panda._UpdateProperty1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), kind, (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(value), isMethod, isComputed));
  }
  get key() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._PropertyKeyConst(_reexportForGenerated.global.context, this.peer));
  }
  get value() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._PropertyValueConst(_reexportForGenerated.global.context, this.peer));
  }
  get kind() {
    return _reexportForGenerated.global.generatedEs2panda._PropertyKindConst(_reexportForGenerated.global.context, this.peer);
  }
  get isMethod() {
    return _reexportForGenerated.global.generatedEs2panda._PropertyIsMethodConst(_reexportForGenerated.global.context, this.peer);
  }
  get isShorthand() {
    return _reexportForGenerated.global.generatedEs2panda._PropertyIsShorthandConst(_reexportForGenerated.global.context, this.peer);
  }
  get isComputed() {
    return _reexportForGenerated.global.generatedEs2panda._PropertyIsComputedConst(_reexportForGenerated.global.context, this.peer);
  }
  get isAccessor() {
    return _reexportForGenerated.global.generatedEs2panda._PropertyIsAccessorConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.Property = Property;
function isProperty(node) {
  return node instanceof Property;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_PROPERTY)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_PROPERTY, Property);
}