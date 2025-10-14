"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateLiteral = void 0;
exports.isTemplateLiteral = isTemplateLiteral;
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

class TemplateLiteral extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TEMPLATE_LITERAL);
    super(pointer);
  }
  static createTemplateLiteral(quasis, expressions, multilineString) {
    return new TemplateLiteral(_reexportForGenerated.global.generatedEs2panda._CreateTemplateLiteral(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNodeArray)(quasis), quasis.length, (0, _reexportForGenerated.passNodeArray)(expressions), expressions.length, multilineString));
  }
  static updateTemplateLiteral(original, quasis, expressions, multilineString) {
    return new TemplateLiteral(_reexportForGenerated.global.generatedEs2panda._UpdateTemplateLiteral(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNodeArray)(quasis), quasis.length, (0, _reexportForGenerated.passNodeArray)(expressions), expressions.length, multilineString));
  }
  get quasis() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TemplateLiteralQuasisConst(_reexportForGenerated.global.context, this.peer));
  }
  get expressions() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TemplateLiteralExpressionsConst(_reexportForGenerated.global.context, this.peer));
  }
  get multilineString() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._TemplateLiteralGetMultilineStringConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TemplateLiteral = TemplateLiteral;
function isTemplateLiteral(node) {
  return node instanceof TemplateLiteral;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TEMPLATE_LITERAL)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TEMPLATE_LITERAL, TemplateLiteral);
}