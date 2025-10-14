"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmptyStatement = void 0;
exports.isEmptyStatement = isEmptyStatement;
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

class EmptyStatement extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_EMPTY_STATEMENT);
    super(pointer);
  }
  static createEmptyStatement() {
    return new EmptyStatement(_reexportForGenerated.global.generatedEs2panda._CreateEmptyStatement(_reexportForGenerated.global.context));
  }
  static updateEmptyStatement(original) {
    return new EmptyStatement(_reexportForGenerated.global.generatedEs2panda._UpdateEmptyStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original)));
  }
}
exports.EmptyStatement = EmptyStatement;
function isEmptyStatement(node) {
  return node instanceof EmptyStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_EMPTY_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_EMPTY_STATEMENT, EmptyStatement);
}