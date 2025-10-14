"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Identifier = void 0;
exports.isIdentifier = isIdentifier;
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

class Identifier extends _AnnotatedExpression.AnnotatedExpression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_IDENTIFIER);
    super(pointer);
  }
  static createIdentifier() {
    return new Identifier(_reexportForGenerated.global.generatedEs2panda._CreateIdentifier(_reexportForGenerated.global.context));
  }
  static updateIdentifier(original) {
    return new Identifier(_reexportForGenerated.global.generatedEs2panda._UpdateIdentifier(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original)));
  }
  static create1Identifier(name) {
    return new Identifier(_reexportForGenerated.global.generatedEs2panda._CreateIdentifier1(_reexportForGenerated.global.context, name));
  }
  static update1Identifier(original, name) {
    return new Identifier(_reexportForGenerated.global.generatedEs2panda._UpdateIdentifier1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), name));
  }
  static create2Identifier(name, typeAnnotation) {
    return new Identifier(_reexportForGenerated.global.generatedEs2panda._CreateIdentifier2(_reexportForGenerated.global.context, name, (0, _reexportForGenerated.passNode)(typeAnnotation)));
  }
  static update2Identifier(original, name, typeAnnotation) {
    return new Identifier(_reexportForGenerated.global.generatedEs2panda._UpdateIdentifier2(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), name, (0, _reexportForGenerated.passNode)(typeAnnotation)));
  }
  get name() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._IdentifierNameConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setName(newName) {
    _reexportForGenerated.global.generatedEs2panda._IdentifierSetName(_reexportForGenerated.global.context, this.peer, newName);
    return this;
  }
  get decorators() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._IdentifierDecoratorsConst(_reexportForGenerated.global.context, this.peer));
  }
  get isErrorPlaceHolder() {
    return _reexportForGenerated.global.generatedEs2panda._IdentifierIsErrorPlaceHolderConst(_reexportForGenerated.global.context, this.peer);
  }
  get isOptional() {
    return _reexportForGenerated.global.generatedEs2panda._IdentifierIsOptionalConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setOptional(optional_arg) {
    _reexportForGenerated.global.generatedEs2panda._IdentifierSetOptional(_reexportForGenerated.global.context, this.peer, optional_arg);
    return this;
  }
  get isReference() {
    return _reexportForGenerated.global.generatedEs2panda._IdentifierIsReferenceConst(_reexportForGenerated.global.context, this.peer);
  }
  get isTdz() {
    return _reexportForGenerated.global.generatedEs2panda._IdentifierIsTdzConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setTdz() {
    _reexportForGenerated.global.generatedEs2panda._IdentifierSetTdz(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  /** @deprecated */
  setAccessor() {
    _reexportForGenerated.global.generatedEs2panda._IdentifierSetAccessor(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  get isAccessor() {
    return _reexportForGenerated.global.generatedEs2panda._IdentifierIsAccessorConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setMutator() {
    _reexportForGenerated.global.generatedEs2panda._IdentifierSetMutator(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  get isMutator() {
    return _reexportForGenerated.global.generatedEs2panda._IdentifierIsMutatorConst(_reexportForGenerated.global.context, this.peer);
  }
  get isReceiver() {
    return _reexportForGenerated.global.generatedEs2panda._IdentifierIsReceiverConst(_reexportForGenerated.global.context, this.peer);
  }
  get isPrivateIdent() {
    return _reexportForGenerated.global.generatedEs2panda._IdentifierIsPrivateIdentConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setPrivate(isPrivate) {
    _reexportForGenerated.global.generatedEs2panda._IdentifierSetPrivate(_reexportForGenerated.global.context, this.peer, isPrivate);
    return this;
  }
  get isIgnoreBox() {
    return _reexportForGenerated.global.generatedEs2panda._IdentifierIsIgnoreBoxConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setIgnoreBox() {
    _reexportForGenerated.global.generatedEs2panda._IdentifierSetIgnoreBox(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  get isAnnotationDecl() {
    return _reexportForGenerated.global.generatedEs2panda._IdentifierIsAnnotationDeclConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setAnnotationDecl() {
    _reexportForGenerated.global.generatedEs2panda._IdentifierSetAnnotationDecl(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  get isAnnotationUsage() {
    return _reexportForGenerated.global.generatedEs2panda._IdentifierIsAnnotationUsageConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setAnnotationUsage() {
    _reexportForGenerated.global.generatedEs2panda._IdentifierSetAnnotationUsage(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  get typeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._IdentifierTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTsTypeAnnotation(typeAnnotation) {
    _reexportForGenerated.global.generatedEs2panda._IdentifierSetTsTypeAnnotation(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeAnnotation));
    return this;
  }
}
exports.Identifier = Identifier;
function isIdentifier(node) {
  return node instanceof Identifier;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_IDENTIFIER)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_IDENTIFIER, Identifier);
}