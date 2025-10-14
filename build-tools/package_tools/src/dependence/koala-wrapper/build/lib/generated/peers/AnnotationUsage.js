"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnotationUsage = void 0;
exports.isAnnotationUsage = isAnnotationUsage;
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

class AnnotationUsage extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ANNOTATION_USAGE);
    super(pointer);
  }
  static createAnnotationUsage(expr) {
    return new AnnotationUsage(_reexportForGenerated.global.generatedEs2panda._CreateAnnotationUsageIr(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(expr)));
  }
  static updateAnnotationUsage(original, expr) {
    return new AnnotationUsage(_reexportForGenerated.global.generatedEs2panda._UpdateAnnotationUsageIr(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(expr)));
  }
  static create1AnnotationUsage(expr, properties) {
    return new AnnotationUsage(_reexportForGenerated.global.generatedEs2panda._CreateAnnotationUsageIr1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(expr), (0, _reexportForGenerated.passNodeArray)(properties), properties.length));
  }
  static update1AnnotationUsage(original, expr, properties) {
    return new AnnotationUsage(_reexportForGenerated.global.generatedEs2panda._UpdateAnnotationUsageIr1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(expr), (0, _reexportForGenerated.passNodeArray)(properties), properties.length));
  }
  get expr() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._AnnotationUsageIrExpr(_reexportForGenerated.global.context, this.peer));
  }
  get properties() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._AnnotationUsageIrPropertiesConst(_reexportForGenerated.global.context, this.peer));
  }
  get propertiesPtr() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._AnnotationUsageIrPropertiesPtrConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  addProperty(property) {
    _reexportForGenerated.global.generatedEs2panda._AnnotationUsageIrAddProperty(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(property));
    return this;
  }
  /** @deprecated */
  setProperties(properties) {
    _reexportForGenerated.global.generatedEs2panda._AnnotationUsageIrSetProperties(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(properties), properties.length);
    return this;
  }
}
exports.AnnotationUsage = AnnotationUsage;
function isAnnotationUsage(node) {
  return node instanceof AnnotationUsage;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ANNOTATION_USAGE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ANNOTATION_USAGE, AnnotationUsage);
}