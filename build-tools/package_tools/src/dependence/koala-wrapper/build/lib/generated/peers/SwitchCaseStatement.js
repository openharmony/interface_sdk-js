"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchCaseStatement = void 0;
exports.isSwitchCaseStatement = isSwitchCaseStatement;
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

class SwitchCaseStatement extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_SWITCH_CASE_STATEMENT);
    super(pointer);
  }
  static createSwitchCaseStatement(test, consequent) {
    return new SwitchCaseStatement(_reexportForGenerated.global.generatedEs2panda._CreateSwitchCaseStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(test), (0, _reexportForGenerated.passNodeArray)(consequent), consequent.length));
  }
  static updateSwitchCaseStatement(original, test, consequent) {
    return new SwitchCaseStatement(_reexportForGenerated.global.generatedEs2panda._UpdateSwitchCaseStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(test), (0, _reexportForGenerated.passNodeArray)(consequent), consequent.length));
  }
  get test() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._SwitchCaseStatementTestConst(_reexportForGenerated.global.context, this.peer));
  }
  get consequent() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._SwitchCaseStatementConsequentConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.SwitchCaseStatement = SwitchCaseStatement;
function isSwitchCaseStatement(node) {
  return node instanceof SwitchCaseStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_SWITCH_CASE_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_SWITCH_CASE_STATEMENT, SwitchCaseStatement);
}