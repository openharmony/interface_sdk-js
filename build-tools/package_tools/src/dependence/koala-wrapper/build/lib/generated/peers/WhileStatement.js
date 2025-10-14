"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WhileStatement = void 0;
exports.isWhileStatement = isWhileStatement;
var _reexportForGenerated = require("../../reexport-for-generated");
var _LoopStatement = require("./LoopStatement");
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

class WhileStatement extends _LoopStatement.LoopStatement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_WHILE_STATEMENT);
    super(pointer);
  }
  static createWhileStatement(test, body) {
    return new WhileStatement(_reexportForGenerated.global.generatedEs2panda._CreateWhileStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(test), (0, _reexportForGenerated.passNode)(body)));
  }
  static updateWhileStatement(original, test, body) {
    return new WhileStatement(_reexportForGenerated.global.generatedEs2panda._UpdateWhileStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(test), (0, _reexportForGenerated.passNode)(body)));
  }
  get test() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._WhileStatementTestConst(_reexportForGenerated.global.context, this.peer));
  }
  get body() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._WhileStatementBodyConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.WhileStatement = WhileStatement;
function isWhileStatement(node) {
  return node instanceof WhileStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_WHILE_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_WHILE_STATEMENT, WhileStatement);
}