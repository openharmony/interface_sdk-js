"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IfStatement = void 0;
exports.isIfStatement = isIfStatement;
var _reexportForGenerated = require("../../reexport-for-generated");
var _Statement = require("./Statement");
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

class IfStatement extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT);
    super(pointer);
  }
  static createIfStatement(test, consequent, alternate) {
    return new IfStatement(_reexportForGenerated.global.generatedEs2panda._CreateIfStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(test), (0, _reexportForGenerated.passNode)(consequent), (0, _reexportForGenerated.passNode)(alternate)));
  }
  static updateIfStatement(original, test, consequent, alternate) {
    return new IfStatement(_reexportForGenerated.global.generatedEs2panda._UpdateIfStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(test), (0, _reexportForGenerated.passNode)(consequent), (0, _reexportForGenerated.passNode)(alternate)));
  }
  get test() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._IfStatementTestConst(_reexportForGenerated.global.context, this.peer));
  }
  get consequent() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._IfStatementConsequentConst(_reexportForGenerated.global.context, this.peer));
  }
  get alternate() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._IfStatementAlternateConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.IfStatement = IfStatement;
function isIfStatement(node) {
  return node instanceof IfStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT, IfStatement);
}