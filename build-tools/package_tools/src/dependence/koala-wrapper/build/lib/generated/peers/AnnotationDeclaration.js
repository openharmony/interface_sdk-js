"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnotationDeclaration = void 0;
exports.isAnnotationDeclaration = isAnnotationDeclaration;
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

class AnnotationDeclaration extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, 1);
    super(pointer);
  }
  static createAnnotationDeclaration(expr) {
    return new AnnotationDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateAnnotationDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(expr)));
  }
  static updateAnnotationDeclaration(original, expr) {
    return new AnnotationDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateAnnotationDeclaration(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(expr)));
  }
  static create1AnnotationDeclaration(expr, properties) {
    return new AnnotationDeclaration(_reexportForGenerated.global.generatedEs2panda._CreateAnnotationDeclaration1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(expr), (0, _reexportForGenerated.passNodeArray)(properties), properties.length));
  }
  static update1AnnotationDeclaration(original, expr, properties) {
    return new AnnotationDeclaration(_reexportForGenerated.global.generatedEs2panda._UpdateAnnotationDeclaration1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(expr), (0, _reexportForGenerated.passNodeArray)(properties), properties.length));
  }
  get internalName() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationInternalNameConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setInternalName(internalName) {
    _reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationSetInternalName(_reexportForGenerated.global.context, this.peer, internalName);
    return this;
  }
  get expr() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationExprConst(_reexportForGenerated.global.context, this.peer));
  }
  get properties() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationPropertiesConst(_reexportForGenerated.global.context, this.peer));
  }
  get propertiesPtr() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationPropertiesPtrConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  addProperties(properties) {
    _reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationAddProperties(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(properties), properties.length);
    return this;
  }
  get isSourceRetention() {
    return _reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationIsSourceRetentionConst(_reexportForGenerated.global.context, this.peer);
  }
  get isBytecodeRetention() {
    return _reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationIsBytecodeRetentionConst(_reexportForGenerated.global.context, this.peer);
  }
  get isRuntimeRetention() {
    return _reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationIsRuntimeRetentionConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setSourceRetention() {
    _reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationSetSourceRetention(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  /** @deprecated */
  setBytecodeRetention() {
    _reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationSetBytecodeRetention(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  /** @deprecated */
  setRuntimeRetention() {
    _reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationSetRuntimeRetention(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._AnnotationDeclarationSetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.AnnotationDeclaration = AnnotationDeclaration;
function isAnnotationDeclaration(node) {
  return node instanceof AnnotationDeclaration;
}
if (!_reexportForGenerated.nodeByType.has(1)) {
  _reexportForGenerated.nodeByType.set(1, AnnotationDeclaration);
}