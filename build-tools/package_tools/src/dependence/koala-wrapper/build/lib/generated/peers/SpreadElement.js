"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpreadElement = void 0;
exports.isSpreadElement = isSpreadElement;
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

class SpreadElement extends _AnnotatedExpression.AnnotatedExpression {
  constructor(pointer) {
    super(pointer);
  }
  get argument() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._SpreadElementArgumentConst(_reexportForGenerated.global.context, this.peer));
  }
  get isOptional() {
    return _reexportForGenerated.global.generatedEs2panda._SpreadElementIsOptionalConst(_reexportForGenerated.global.context, this.peer);
  }
  get decorators() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._SpreadElementDecoratorsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setOptional(optional_arg) {
    _reexportForGenerated.global.generatedEs2panda._SpreadElementSetOptional(_reexportForGenerated.global.context, this.peer, optional_arg);
    return this;
  }
  get typeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._SpreadElementTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTsTypeAnnotation(typeAnnotation) {
    _reexportForGenerated.global.generatedEs2panda._SpreadElementSetTsTypeAnnotation(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeAnnotation));
    return this;
  }
}
exports.SpreadElement = SpreadElement;
function isSpreadElement(node) {
  return node instanceof SpreadElement;
}