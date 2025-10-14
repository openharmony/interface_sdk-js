"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetaProperty = void 0;
exports.isMetaProperty = isMetaProperty;
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

class MetaProperty extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_META_PROPERTY_EXPRESSION);
    super(pointer);
  }
  static createMetaProperty(kind) {
    return new MetaProperty(_reexportForGenerated.global.generatedEs2panda._CreateMetaProperty(_reexportForGenerated.global.context, kind));
  }
  static updateMetaProperty(original, kind) {
    return new MetaProperty(_reexportForGenerated.global.generatedEs2panda._UpdateMetaProperty(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), kind));
  }
  get kind() {
    return _reexportForGenerated.global.generatedEs2panda._MetaPropertyKindConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.MetaProperty = MetaProperty;
function isMetaProperty(node) {
  return node instanceof MetaProperty;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_META_PROPERTY_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_META_PROPERTY_EXPRESSION, MetaProperty);
}