"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrayExpression = void 0;
exports.isArrayExpression = isArrayExpression;
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

class ArrayExpression extends _AnnotatedExpression.AnnotatedExpression {
  constructor(pointer) {
    super(pointer);
  }
  static createArrayExpression(elements) {
    return new ArrayExpression(_reexportForGenerated.global.generatedEs2panda._CreateArrayExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNodeArray)(elements), elements.length));
  }
  static updateArrayExpression(original, elements) {
    return new ArrayExpression(_reexportForGenerated.global.generatedEs2panda._UpdateArrayExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNodeArray)(elements), elements.length));
  }
  get elements() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ArrayExpressionElementsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setElements(elements) {
    _reexportForGenerated.global.generatedEs2panda._ArrayExpressionSetElements(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(elements), elements.length);
    return this;
  }
  get isDeclaration() {
    return _reexportForGenerated.global.generatedEs2panda._ArrayExpressionIsDeclarationConst(_reexportForGenerated.global.context, this.peer);
  }
  get isOptional() {
    return _reexportForGenerated.global.generatedEs2panda._ArrayExpressionIsOptionalConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setDeclaration() {
    _reexportForGenerated.global.generatedEs2panda._ArrayExpressionSetDeclaration(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  /** @deprecated */
  setOptional(optional_arg) {
    _reexportForGenerated.global.generatedEs2panda._ArrayExpressionSetOptional(_reexportForGenerated.global.context, this.peer, optional_arg);
    return this;
  }
  get decorators() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ArrayExpressionDecoratorsConst(_reexportForGenerated.global.context, this.peer));
  }
  get typeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ArrayExpressionTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTsTypeAnnotation(typeAnnotation) {
    _reexportForGenerated.global.generatedEs2panda._ArrayExpressionSetTsTypeAnnotation(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeAnnotation));
    return this;
  }
}
exports.ArrayExpression = ArrayExpression;
function isArrayExpression(node) {
  return _reexportForGenerated.global.es2panda._IsArrayExpression(node.peer);
}