"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NewExpression = void 0;
exports.isNewExpression = isNewExpression;
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

class NewExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_NEW_EXPRESSION);
    super(pointer);
  }
  static createNewExpression(callee, _arguments) {
    return new NewExpression(_reexportForGenerated.global.generatedEs2panda._CreateNewExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(callee), (0, _reexportForGenerated.passNodeArray)(_arguments), _arguments.length));
  }
  static updateNewExpression(original, callee, _arguments) {
    return new NewExpression(_reexportForGenerated.global.generatedEs2panda._UpdateNewExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(callee), (0, _reexportForGenerated.passNodeArray)(_arguments), _arguments.length));
  }
  get callee() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._NewExpressionCalleeConst(_reexportForGenerated.global.context, this.peer));
  }
  get arguments() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._NewExpressionArgumentsConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.NewExpression = NewExpression;
function isNewExpression(node) {
  return node instanceof NewExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_NEW_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_NEW_EXPRESSION, NewExpression);
}