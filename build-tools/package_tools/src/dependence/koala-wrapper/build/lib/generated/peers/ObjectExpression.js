"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ObjectExpression = void 0;
exports.isObjectExpression = isObjectExpression;
var _reexportForGenerated = require("../../reexport-for-generated");
var _AnnotatedExpression = require("./AnnotatedExpression");
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

class ObjectExpression extends _AnnotatedExpression.AnnotatedExpression {
  constructor(pointer) {
    super(pointer);
  }
  get properties() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ObjectExpressionPropertiesConst(_reexportForGenerated.global.context, this.peer));
  }
  get isDeclaration() {
    return _reexportForGenerated.global.generatedEs2panda._ObjectExpressionIsDeclarationConst(_reexportForGenerated.global.context, this.peer);
  }
  get isOptional() {
    return _reexportForGenerated.global.generatedEs2panda._ObjectExpressionIsOptionalConst(_reexportForGenerated.global.context, this.peer);
  }
  get decorators() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ObjectExpressionDecoratorsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setDeclaration() {
    _reexportForGenerated.global.generatedEs2panda._ObjectExpressionSetDeclaration(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  /** @deprecated */
  setOptional(optional_arg) {
    _reexportForGenerated.global.generatedEs2panda._ObjectExpressionSetOptional(_reexportForGenerated.global.context, this.peer, optional_arg);
    return this;
  }
  get typeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ObjectExpressionTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTsTypeAnnotation(typeAnnotation) {
    _reexportForGenerated.global.generatedEs2panda._ObjectExpressionSetTsTypeAnnotation(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeAnnotation));
    return this;
  }
  static createObjectExpression(nodeType, properties, trailingComma) {
    return new ObjectExpression(_reexportForGenerated.global.generatedEs2panda._CreateObjectExpression(_reexportForGenerated.global.context, nodeType, (0, _reexportForGenerated.passNodeArray)(properties), properties.length, trailingComma));
  }
  static updateObjectExpression(original, nodeType, properties, trailingComma) {
    return new ObjectExpression(_reexportForGenerated.global.generatedEs2panda._UpdateObjectExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), nodeType, (0, _reexportForGenerated.passNodeArray)(properties), properties.length, trailingComma));
  }
}
exports.ObjectExpression = ObjectExpression;
function isObjectExpression(node) {
  return node instanceof ObjectExpression;
}