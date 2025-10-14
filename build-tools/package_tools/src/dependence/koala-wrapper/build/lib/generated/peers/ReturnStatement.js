"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReturnStatement = void 0;
exports.isReturnStatement = isReturnStatement;
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

class ReturnStatement extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_RETURN_STATEMENT);
    super(pointer);
  }
  static createReturnStatement() {
    return new ReturnStatement(_reexportForGenerated.global.generatedEs2panda._CreateReturnStatement(_reexportForGenerated.global.context));
  }
  static updateReturnStatement(original) {
    return new ReturnStatement(_reexportForGenerated.global.generatedEs2panda._UpdateReturnStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original)));
  }
  static create1ReturnStatement(argument) {
    return new ReturnStatement(_reexportForGenerated.global.generatedEs2panda._CreateReturnStatement1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(argument)));
  }
  static update1ReturnStatement(original, argument) {
    return new ReturnStatement(_reexportForGenerated.global.generatedEs2panda._UpdateReturnStatement1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(argument)));
  }
  get argument() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ReturnStatementArgumentConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setArgument(arg) {
    _reexportForGenerated.global.generatedEs2panda._ReturnStatementSetArgument(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(arg));
    return this;
  }
}
exports.ReturnStatement = ReturnStatement;
function isReturnStatement(node) {
  return node instanceof ReturnStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_RETURN_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_RETURN_STATEMENT, ReturnStatement);
}