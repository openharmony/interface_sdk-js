"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockStatement = void 0;
exports.isBlockStatement = isBlockStatement;
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

class BlockStatement extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_STATEMENT);
    super(pointer);
  }
  static createBlockStatement(statementList) {
    return new BlockStatement(_reexportForGenerated.global.generatedEs2panda._CreateBlockStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNodeArray)(statementList), statementList.length));
  }
  static updateBlockStatement(original, statementList) {
    return new BlockStatement(_reexportForGenerated.global.generatedEs2panda._UpdateBlockStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNodeArray)(statementList), statementList.length));
  }
  get statements() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._BlockStatementStatementsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setStatements(statementList) {
    _reexportForGenerated.global.generatedEs2panda._BlockStatementSetStatements(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(statementList), statementList.length);
    return this;
  }
  /** @deprecated */
  addTrailingBlock(stmt, trailingBlock) {
    _reexportForGenerated.global.generatedEs2panda._BlockStatementAddTrailingBlock(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(stmt), (0, _reexportForGenerated.passNode)(trailingBlock));
    return this;
  }
}
exports.BlockStatement = BlockStatement;
function isBlockStatement(node) {
  return node instanceof BlockStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_STATEMENT, BlockStatement);
}