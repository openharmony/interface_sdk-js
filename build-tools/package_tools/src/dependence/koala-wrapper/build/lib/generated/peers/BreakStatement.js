"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreakStatement = void 0;
exports.isBreakStatement = isBreakStatement;
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

class BreakStatement extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_STATEMENT);
    super(pointer);
  }
  static createBreakStatement() {
    return new BreakStatement(_reexportForGenerated.global.generatedEs2panda._CreateBreakStatement(_reexportForGenerated.global.context));
  }
  static updateBreakStatement(original) {
    return new BreakStatement(_reexportForGenerated.global.generatedEs2panda._UpdateBreakStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original)));
  }
  static create1BreakStatement(ident) {
    return new BreakStatement(_reexportForGenerated.global.generatedEs2panda._CreateBreakStatement1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(ident)));
  }
  static update1BreakStatement(original, ident) {
    return new BreakStatement(_reexportForGenerated.global.generatedEs2panda._UpdateBreakStatement1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(ident)));
  }
  get ident() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._BreakStatementIdentConst(_reexportForGenerated.global.context, this.peer));
  }
  get target() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._BreakStatementTargetConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTarget(target) {
    _reexportForGenerated.global.generatedEs2panda._BreakStatementSetTarget(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(target));
    return this;
  }
}
exports.BreakStatement = BreakStatement;
function isBreakStatement(node) {
  return node instanceof BreakStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_STATEMENT, BreakStatement);
}