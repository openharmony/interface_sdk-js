"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowFunctionExpression = void 0;
exports.isArrowFunctionExpression = isArrowFunctionExpression;
var _reexportForGenerated = require("../../reexport-for-generated");
var _Expression = require("./Expression");
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

class ArrowFunctionExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ARROW_FUNCTION_EXPRESSION);
    super(pointer);
  }
  static createArrowFunctionExpression(func) {
    return new ArrowFunctionExpression(_reexportForGenerated.global.generatedEs2panda._CreateArrowFunctionExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(func)));
  }
  static updateArrowFunctionExpression(original, func) {
    return new ArrowFunctionExpression(_reexportForGenerated.global.generatedEs2panda._UpdateArrowFunctionExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(func)));
  }
  static create1ArrowFunctionExpression(other) {
    return new ArrowFunctionExpression(_reexportForGenerated.global.generatedEs2panda._CreateArrowFunctionExpression1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(other)));
  }
  static update1ArrowFunctionExpression(original, other) {
    return new ArrowFunctionExpression(_reexportForGenerated.global.generatedEs2panda._UpdateArrowFunctionExpression1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(other)));
  }
  get function() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ArrowFunctionExpressionFunctionConst(_reexportForGenerated.global.context, this.peer));
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ArrowFunctionExpressionAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._ArrowFunctionExpressionSetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.ArrowFunctionExpression = ArrowFunctionExpression;
function isArrowFunctionExpression(node) {
  return node instanceof ArrowFunctionExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ARROW_FUNCTION_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ARROW_FUNCTION_EXPRESSION, ArrowFunctionExpression);
}