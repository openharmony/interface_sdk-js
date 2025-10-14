"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassProperty = void 0;
exports.isClassProperty = isClassProperty;
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

class ClassProperty extends _ClassElement.ClassElement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_PROPERTY);
    super(pointer);
  }
  static createClassProperty(key, value, typeAnnotation, modifiers, isComputed) {
    return new ClassProperty(_reexportForGenerated.global.generatedEs2panda._CreateClassProperty(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(value), (0, _reexportForGenerated.passNode)(typeAnnotation), modifiers, isComputed));
  }
  static updateClassProperty(original, key, value, typeAnnotation, modifiers, isComputed) {
    return new ClassProperty(_reexportForGenerated.global.generatedEs2panda._UpdateClassProperty(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(key), (0, _reexportForGenerated.passNode)(value), (0, _reexportForGenerated.passNode)(typeAnnotation), modifiers, isComputed));
  }
  get typeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ClassPropertyTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTypeAnnotation(typeAnnotation) {
    _reexportForGenerated.global.generatedEs2panda._ClassPropertySetTypeAnnotation(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeAnnotation));
    return this;
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ClassPropertyAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._ClassPropertySetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.ClassProperty = ClassProperty;
function isClassProperty(node) {
  return node instanceof ClassProperty;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_PROPERTY)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_PROPERTY, ClassProperty);
}