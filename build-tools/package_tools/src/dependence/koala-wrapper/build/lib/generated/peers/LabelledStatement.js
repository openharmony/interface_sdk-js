"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelledStatement = void 0;
exports.isLabelledStatement = isLabelledStatement;
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

class LabelledStatement extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_LABELLED_STATEMENT);
    super(pointer);
  }
  static createLabelledStatement(ident, body) {
    return new LabelledStatement(_reexportForGenerated.global.generatedEs2panda._CreateLabelledStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(ident), (0, _reexportForGenerated.passNode)(body)));
  }
  static updateLabelledStatement(original, ident, body) {
    return new LabelledStatement(_reexportForGenerated.global.generatedEs2panda._UpdateLabelledStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(ident), (0, _reexportForGenerated.passNode)(body)));
  }
  get body() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._LabelledStatementBodyConst(_reexportForGenerated.global.context, this.peer));
  }
  get ident() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._LabelledStatementIdentConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.LabelledStatement = LabelledStatement;
function isLabelledStatement(node) {
  return node instanceof LabelledStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_LABELLED_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_LABELLED_STATEMENT, LabelledStatement);
}