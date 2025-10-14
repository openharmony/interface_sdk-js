"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThisExpression = void 0;
exports.isThisExpression = isThisExpression;
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

class ThisExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_THIS_EXPRESSION);
    super(pointer);
  }
  static createThisExpression() {
    return new ThisExpression(_reexportForGenerated.global.generatedEs2panda._CreateThisExpression(_reexportForGenerated.global.context));
  }
  static updateThisExpression(original) {
    return new ThisExpression(_reexportForGenerated.global.generatedEs2panda._UpdateThisExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original)));
  }
}
exports.ThisExpression = ThisExpression;
function isThisExpression(node) {
  return node instanceof ThisExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_THIS_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_THIS_EXPRESSION, ThisExpression);
}