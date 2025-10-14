"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SequenceExpression = void 0;
exports.isSequenceExpression = isSequenceExpression;
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

class SequenceExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_SEQUENCE_EXPRESSION);
    super(pointer);
  }
  static createSequenceExpression(sequence_arg) {
    return new SequenceExpression(_reexportForGenerated.global.generatedEs2panda._CreateSequenceExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNodeArray)(sequence_arg), sequence_arg.length));
  }
  static updateSequenceExpression(original, sequence_arg) {
    return new SequenceExpression(_reexportForGenerated.global.generatedEs2panda._UpdateSequenceExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNodeArray)(sequence_arg), sequence_arg.length));
  }
  get sequence() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._SequenceExpressionSequenceConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.SequenceExpression = SequenceExpression;
function isSequenceExpression(node) {
  return node instanceof SequenceExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_SEQUENCE_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_SEQUENCE_EXPRESSION, SequenceExpression);
}