"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassDefinition = void 0;
exports.isClassDefinition = isClassDefinition;
var _reexportForGenerated = require("../../reexport-for-generated");
var _TypedAstNode = require("./TypedAstNode");
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

class ClassDefinition extends _TypedAstNode.TypedAstNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_DEFINITION);
    super(pointer);
  }
  static createClassDefinition(ident, typeParams, superTypeParams, _implements, ctor, superClass, body, modifiers, flags) {
    return new ClassDefinition(_reexportForGenerated.global.generatedEs2panda._CreateClassDefinition(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(ident), (0, _reexportForGenerated.passNode)(typeParams), (0, _reexportForGenerated.passNode)(superTypeParams), (0, _reexportForGenerated.passNodeArray)(_implements), _implements.length, (0, _reexportForGenerated.passNode)(ctor), (0, _reexportForGenerated.passNode)(superClass), (0, _reexportForGenerated.passNodeArray)(body), body.length, modifiers, flags));
  }
  static updateClassDefinition(original, ident, typeParams, superTypeParams, _implements, ctor, superClass, body, modifiers, flags) {
    return new ClassDefinition(_reexportForGenerated.global.generatedEs2panda._UpdateClassDefinition(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(ident), (0, _reexportForGenerated.passNode)(typeParams), (0, _reexportForGenerated.passNode)(superTypeParams), (0, _reexportForGenerated.passNodeArray)(_implements), _implements.length, (0, _reexportForGenerated.passNode)(ctor), (0, _reexportForGenerated.passNode)(superClass), (0, _reexportForGenerated.passNodeArray)(body), body.length, modifiers, flags));
  }
  static create1ClassDefinition(ident, body, modifiers, flags) {
    return new ClassDefinition(_reexportForGenerated.global.generatedEs2panda._CreateClassDefinition1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(ident), (0, _reexportForGenerated.passNodeArray)(body), body.length, modifiers, flags));
  }
  static update1ClassDefinition(original, ident, body, modifiers, flags) {
    return new ClassDefinition(_reexportForGenerated.global.generatedEs2panda._UpdateClassDefinition1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(ident), (0, _reexportForGenerated.passNodeArray)(body), body.length, modifiers, flags));
  }
  static create2ClassDefinition(ident, modifiers, flags) {
    return new ClassDefinition(_reexportForGenerated.global.generatedEs2panda._CreateClassDefinition2(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(ident), modifiers, flags));
  }
  static update2ClassDefinition(original, ident, modifiers, flags) {
    return new ClassDefinition(_reexportForGenerated.global.generatedEs2panda._UpdateClassDefinition2(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(ident), modifiers, flags));
  }
  get ident() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ClassDefinitionIdentConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setIdent(ident) {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetIdent(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(ident));
    return this;
  }
  get internalName() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._ClassDefinitionInternalNameConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setInternalName(internalName) {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetInternalName(_reexportForGenerated.global.context, this.peer, internalName);
    return this;
  }
  get super() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ClassDefinitionSuperConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setSuper(superClass) {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetSuper(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(superClass));
    return this;
  }
  get isGlobal() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionIsGlobalConst(_reexportForGenerated.global.context, this.peer);
  }
  get isLocal() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionIsLocalConst(_reexportForGenerated.global.context, this.peer);
  }
  get isExtern() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionIsExternConst(_reexportForGenerated.global.context, this.peer);
  }
  get isFromExternal() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionIsFromExternalConst(_reexportForGenerated.global.context, this.peer);
  }
  get isInner() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionIsInnerConst(_reexportForGenerated.global.context, this.peer);
  }
  get isGlobalInitialized() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionIsGlobalInitializedConst(_reexportForGenerated.global.context, this.peer);
  }
  get isClassDefinitionChecked() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionIsClassDefinitionCheckedConst(_reexportForGenerated.global.context, this.peer);
  }
  get isAnonymous() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionIsAnonymousConst(_reexportForGenerated.global.context, this.peer);
  }
  get isNamespaceTransformed() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionIsNamespaceTransformedConst(_reexportForGenerated.global.context, this.peer);
  }
  get isModule() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionIsModuleConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setGlobalInitialized() {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetGlobalInitialized(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  /** @deprecated */
  setInnerModifier() {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetInnerModifier(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  /** @deprecated */
  setClassDefinitionChecked() {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetClassDefinitionChecked(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  /** @deprecated */
  setAnonymousModifier() {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetAnonymousModifier(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  /** @deprecated */
  setNamespaceTransformed() {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetNamespaceTransformed(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  get modifiers() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionModifiersConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setModifiers(modifiers) {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetModifiers(_reexportForGenerated.global.context, this.peer, modifiers);
    return this;
  }
  /** @deprecated */
  addProperties(body) {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionAddProperties(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(body), body.length);
    return this;
  }
  get body() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ClassDefinitionBodyConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setCtor(ctor) {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetCtor(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(ctor));
    return this;
  }
  get implements() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ClassDefinitionImplementsConst(_reexportForGenerated.global.context, this.peer));
  }
  get typeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ClassDefinitionTypeParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTypeParams(typeParams) {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetTypeParams(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeParams));
    return this;
  }
  get superTypeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ClassDefinitionSuperTypeParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get localTypeCounter() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionLocalTypeCounter(_reexportForGenerated.global.context, this.peer);
  }
  get localIndex() {
    return _reexportForGenerated.global.generatedEs2panda._ClassDefinitionLocalIndexConst(_reexportForGenerated.global.context, this.peer);
  }
  get localPrefix() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._ClassDefinitionLocalPrefixConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setOrigEnumDecl(enumDecl) {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetOrigEnumDecl(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(enumDecl));
    return this;
  }
  get origEnumDecl() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ClassDefinitionOrigEnumDeclConst(_reexportForGenerated.global.context, this.peer));
  }
  get getAnonClass() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ClassDefinitionGetAnonClass(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnonClass(anonClass) {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetAnonClass(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(anonClass));
    return this;
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ClassDefinitionAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._ClassDefinitionSetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.ClassDefinition = ClassDefinition;
function isClassDefinition(node) {
  return node instanceof ClassDefinition;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_DEFINITION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_DEFINITION, ClassDefinition);
}