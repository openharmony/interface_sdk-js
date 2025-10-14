"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CallExpression = void 0;
exports.isCallExpression = isCallExpression;
var _reexportForGenerated = require("../../reexport-for-generated");
var _MaybeOptionalExpression = require("./MaybeOptionalExpression");
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

class CallExpression extends _MaybeOptionalExpression.MaybeOptionalExpression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CALL_EXPRESSION);
    super(pointer);
  }
  static createCallExpression(callee, _arguments, typeParams, optional_arg, trailingComma) {
    return new CallExpression(_reexportForGenerated.global.generatedEs2panda._CreateCallExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(callee), (0, _reexportForGenerated.passNodeArray)(_arguments), _arguments.length, (0, _reexportForGenerated.passNode)(typeParams), optional_arg, trailingComma));
  }
  static create1CallExpression(other) {
    return new CallExpression(_reexportForGenerated.global.generatedEs2panda._CreateCallExpression1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(other)));
  }
  static update1CallExpression(original, other) {
    return new CallExpression(_reexportForGenerated.global.generatedEs2panda._UpdateCallExpression1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(other)));
  }
  get callee() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._CallExpressionCalleeConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setCallee(callee) {
    _reexportForGenerated.global.generatedEs2panda._CallExpressionSetCallee(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(callee));
    return this;
  }
  get typeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._CallExpressionTypeParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get arguments() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._CallExpressionArgumentsConst(_reexportForGenerated.global.context, this.peer));
  }
  get hasTrailingComma() {
    return _reexportForGenerated.global.generatedEs2panda._CallExpressionHasTrailingCommaConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setTypeParams(typeParams) {
    _reexportForGenerated.global.generatedEs2panda._CallExpressionSetTypeParams(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(typeParams));
    return this;
  }
  /** @deprecated */
  setTrailingBlock(block) {
    _reexportForGenerated.global.generatedEs2panda._CallExpressionSetTrailingBlock(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(block));
    return this;
  }
  get trailingBlock() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._CallExpressionTrailingBlockConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setIsTrailingBlockInNewLine(isNewLine) {
    _reexportForGenerated.global.generatedEs2panda._CallExpressionSetIsTrailingBlockInNewLine(_reexportForGenerated.global.context, this.peer, isNewLine);
    return this;
  }
  get isTrailingBlockInNewLine() {
    return _reexportForGenerated.global.generatedEs2panda._CallExpressionIsTrailingBlockInNewLineConst(_reexportForGenerated.global.context, this.peer);
  }
  get isETSConstructorCall() {
    return _reexportForGenerated.global.generatedEs2panda._CallExpressionIsETSConstructorCallConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.CallExpression = CallExpression;
function isCallExpression(node) {
  return node instanceof CallExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CALL_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CALL_EXPRESSION, CallExpression);
}