"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContinueStatement = void 0;
exports.isContinueStatement = isContinueStatement;
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

class ContinueStatement extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CONTINUE_STATEMENT);
    super(pointer);
  }
  static createContinueStatement() {
    return new ContinueStatement(_reexportForGenerated.global.generatedEs2panda._CreateContinueStatement(_reexportForGenerated.global.context));
  }
  static updateContinueStatement(original) {
    return new ContinueStatement(_reexportForGenerated.global.generatedEs2panda._UpdateContinueStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original)));
  }
  static create1ContinueStatement(ident) {
    return new ContinueStatement(_reexportForGenerated.global.generatedEs2panda._CreateContinueStatement1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(ident)));
  }
  static update1ContinueStatement(original, ident) {
    return new ContinueStatement(_reexportForGenerated.global.generatedEs2panda._UpdateContinueStatement1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(ident)));
  }
  get ident() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ContinueStatementIdentConst(_reexportForGenerated.global.context, this.peer));
  }
  get target() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ContinueStatementTargetConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setTarget(target) {
    _reexportForGenerated.global.generatedEs2panda._ContinueStatementSetTarget(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(target));
    return this;
  }
}
exports.ContinueStatement = ContinueStatement;
function isContinueStatement(node) {
  return node instanceof ContinueStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CONTINUE_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CONTINUE_STATEMENT, ContinueStatement);
}