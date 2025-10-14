"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ThrowStatement = void 0;
exports.isThrowStatement = isThrowStatement;
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

class ThrowStatement extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_THROW_STATEMENT);
    super(pointer);
  }
  static createThrowStatement(argument) {
    return new ThrowStatement(_reexportForGenerated.global.generatedEs2panda._CreateThrowStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(argument)));
  }
  static updateThrowStatement(original, argument) {
    return new ThrowStatement(_reexportForGenerated.global.generatedEs2panda._UpdateThrowStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(argument)));
  }
  get argument() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ThrowStatementArgumentConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ThrowStatement = ThrowStatement;
function isThrowStatement(node) {
  return node instanceof ThrowStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_THROW_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_THROW_STATEMENT, ThrowStatement);
}