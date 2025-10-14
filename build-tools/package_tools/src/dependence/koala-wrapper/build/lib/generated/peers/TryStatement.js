"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TryStatement = void 0;
exports.isTryStatement = isTryStatement;
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

class TryStatement extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TRY_STATEMENT);
    super(pointer);
  }
  static createTryStatement(block, catchClauses, finalizer, finalizerInsertionsLabelPair, finalizerInsertionsStatement) {
    return new TryStatement(_reexportForGenerated.global.generatedEs2panda._CreateTryStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(block), (0, _reexportForGenerated.passNodeArray)(catchClauses), catchClauses.length, (0, _reexportForGenerated.passNode)(finalizer), (0, _reexportForGenerated.passNodeArray)(finalizerInsertionsLabelPair), finalizerInsertionsLabelPair.length, (0, _reexportForGenerated.passNodeArray)(finalizerInsertionsStatement), finalizerInsertionsStatement.length));
  }
  static updateTryStatement(original, block, catchClauses, finalizer, finalizerInsertionsLabelPair, finalizerInsertionsStatement) {
    return new TryStatement(_reexportForGenerated.global.generatedEs2panda._UpdateTryStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(block), (0, _reexportForGenerated.passNodeArray)(catchClauses), catchClauses.length, (0, _reexportForGenerated.passNode)(finalizer), (0, _reexportForGenerated.passNodeArray)(finalizerInsertionsLabelPair), finalizerInsertionsLabelPair.length, (0, _reexportForGenerated.passNodeArray)(finalizerInsertionsStatement), finalizerInsertionsStatement.length));
  }
  static update1TryStatement(original, other) {
    return new TryStatement(_reexportForGenerated.global.generatedEs2panda._UpdateTryStatement1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(other)));
  }
  get finallyBlock() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TryStatementFinallyBlockConst(_reexportForGenerated.global.context, this.peer));
  }
  get block() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TryStatementBlockConst(_reexportForGenerated.global.context, this.peer));
  }
  get hasFinalizer() {
    return _reexportForGenerated.global.generatedEs2panda._TryStatementHasFinalizerConst(_reexportForGenerated.global.context, this.peer);
  }
  get hasDefaultCatchClause() {
    return _reexportForGenerated.global.generatedEs2panda._TryStatementHasDefaultCatchClauseConst(_reexportForGenerated.global.context, this.peer);
  }
  get catchClauses() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TryStatementCatchClausesConst(_reexportForGenerated.global.context, this.peer));
  }
  get finallyCanCompleteNormally() {
    return _reexportForGenerated.global.generatedEs2panda._TryStatementFinallyCanCompleteNormallyConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setFinallyCanCompleteNormally(finallyCanCompleteNormally) {
    _reexportForGenerated.global.generatedEs2panda._TryStatementSetFinallyCanCompleteNormally(_reexportForGenerated.global.context, this.peer, finallyCanCompleteNormally);
    return this;
  }
}
exports.TryStatement = TryStatement;
function isTryStatement(node) {
  return node instanceof TryStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TRY_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TRY_STATEMENT, TryStatement);
}