"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScriptFunction = void 0;
exports.isScriptFunction = isScriptFunction;
var _reexportForGenerated = require("../../reexport-for-generated");
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

class ScriptFunction extends _reexportForGenerated.AstNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_SCRIPT_FUNCTION);
    super(pointer);
  }
  static createScriptFunction(databody, datasignature, datafuncFlags, dataflags) {
    return new ScriptFunction(_reexportForGenerated.global.generatedEs2panda._CreateScriptFunction(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(databody), (0, _reexportForGenerated.passNode)(datasignature), datafuncFlags, dataflags));
  }
  static updateScriptFunction(original, databody, datasignature, datafuncFlags, dataflags) {
    return new ScriptFunction(_reexportForGenerated.global.generatedEs2panda._UpdateScriptFunction(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(databody), (0, _reexportForGenerated.passNode)(datasignature), datafuncFlags, dataflags));
  }
  get id() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ScriptFunctionIdConst(_reexportForGenerated.global.context, this.peer));
  }
  get params() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ScriptFunctionParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get returnStatements() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ScriptFunctionReturnStatementsConst(_reexportForGenerated.global.context, this.peer));
  }
  get typeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ScriptFunctionTypeParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get body() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ScriptFunctionBodyConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  addReturnStatement(returnStatement) {
    _reexportForGenerated.global.generatedEs2panda._ScriptFunctionAddReturnStatement(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(returnStatement));
    return this;
  }
  /** @deprecated */
  setBody(body) {
    _reexportForGenerated.global.generatedEs2panda._ScriptFunctionSetBody(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(body));
    return this;
  }
  get returnTypeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ScriptFunctionReturnTypeAnnotationConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setReturnTypeAnnotation(node) {
    _reexportForGenerated.global.generatedEs2panda._ScriptFunctionSetReturnTypeAnnotation(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(node));
    return this;
  }
  get isEntryPoint() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsEntryPointConst(_reexportForGenerated.global.context, this.peer);
  }
  get isGenerator() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsGeneratorConst(_reexportForGenerated.global.context, this.peer);
  }
  get isAsyncFunc() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsAsyncFuncConst(_reexportForGenerated.global.context, this.peer);
  }
  get isAsyncImplFunc() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsAsyncImplFuncConst(_reexportForGenerated.global.context, this.peer);
  }
  get isArrow() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsArrowConst(_reexportForGenerated.global.context, this.peer);
  }
  get isOverload() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsOverloadConst(_reexportForGenerated.global.context, this.peer);
  }
  get isExternalOverload() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsExternalOverloadConst(_reexportForGenerated.global.context, this.peer);
  }
  get isConstructor() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsConstructorConst(_reexportForGenerated.global.context, this.peer);
  }
  get isGetter() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsGetterConst(_reexportForGenerated.global.context, this.peer);
  }
  get isSetter() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsSetterConst(_reexportForGenerated.global.context, this.peer);
  }
  get isExtensionAccessor() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsExtensionAccessorConst(_reexportForGenerated.global.context, this.peer);
  }
  get isMethod() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsMethodConst(_reexportForGenerated.global.context, this.peer);
  }
  get isProxy() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsProxyConst(_reexportForGenerated.global.context, this.peer);
  }
  get isStaticBlock() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsStaticBlockConst(_reexportForGenerated.global.context, this.peer);
  }
  get isEnum() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsEnumConst(_reexportForGenerated.global.context, this.peer);
  }
  get isHidden() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsHiddenConst(_reexportForGenerated.global.context, this.peer);
  }
  get isExternal() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsExternalConst(_reexportForGenerated.global.context, this.peer);
  }
  get isImplicitSuperCallNeeded() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsImplicitSuperCallNeededConst(_reexportForGenerated.global.context, this.peer);
  }
  get hasBody() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionHasBodyConst(_reexportForGenerated.global.context, this.peer);
  }
  get hasRestParameter() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionHasRestParameterConst(_reexportForGenerated.global.context, this.peer);
  }
  get hasReturnStatement() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionHasReturnStatementConst(_reexportForGenerated.global.context, this.peer);
  }
  get hasThrowStatement() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionHasThrowStatementConst(_reexportForGenerated.global.context, this.peer);
  }
  get isThrowing() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsThrowingConst(_reexportForGenerated.global.context, this.peer);
  }
  get isRethrowing() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsRethrowingConst(_reexportForGenerated.global.context, this.peer);
  }
  get isDynamic() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsDynamicConst(_reexportForGenerated.global.context, this.peer);
  }
  get isExtensionMethod() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionIsExtensionMethodConst(_reexportForGenerated.global.context, this.peer);
  }
  get flags() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionFlagsConst(_reexportForGenerated.global.context, this.peer);
  }
  get hasReceiver() {
    return _reexportForGenerated.global.generatedEs2panda._ScriptFunctionHasReceiverConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setIdent(id) {
    _reexportForGenerated.global.generatedEs2panda._ScriptFunctionSetIdent(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(id));
    return this;
  }
  /** @deprecated */
  addFlag(flags) {
    _reexportForGenerated.global.generatedEs2panda._ScriptFunctionAddFlag(_reexportForGenerated.global.context, this.peer, flags);
    return this;
  }
  /** @deprecated */
  addModifier(flags) {
    _reexportForGenerated.global.generatedEs2panda._AstNodeAddModifier(_reexportForGenerated.global.context, this.peer, flags);
    return this;
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ScriptFunctionAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._ScriptFunctionSetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.ScriptFunction = ScriptFunction;
function isScriptFunction(node) {
  return node instanceof ScriptFunction;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_SCRIPT_FUNCTION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_SCRIPT_FUNCTION, ScriptFunction);
}