"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateExpression = void 0;
exports.isUpdateExpression = isUpdateExpression;
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

class UpdateExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_UPDATE_EXPRESSION);
    super(pointer);
  }
  static createUpdateExpression(argument, updateOperator, isPrefix) {
    return new UpdateExpression(_reexportForGenerated.global.generatedEs2panda._CreateUpdateExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(argument), updateOperator, isPrefix));
  }
  static updateUpdateExpression(original, argument, updateOperator, isPrefix) {
    return new UpdateExpression(_reexportForGenerated.global.generatedEs2panda._UpdateUpdateExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(argument), updateOperator, isPrefix));
  }
  get operatorType() {
    return _reexportForGenerated.global.generatedEs2panda._UpdateExpressionOperatorTypeConst(_reexportForGenerated.global.context, this.peer);
  }
  get argument() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._UpdateExpressionArgumentConst(_reexportForGenerated.global.context, this.peer));
  }
  get isPrefix() {
    return _reexportForGenerated.global.generatedEs2panda._UpdateExpressionIsPrefixConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.UpdateExpression = UpdateExpression;
function isUpdateExpression(node) {
  return node instanceof UpdateExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_UPDATE_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_UPDATE_EXPRESSION, UpdateExpression);
}