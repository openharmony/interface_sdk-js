"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CatchClause = void 0;
exports.isCatchClause = isCatchClause;
var _reexportForGenerated = require("../../reexport-for-generated");
var _TypedStatement = require("./TypedStatement");
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

class CatchClause extends _TypedStatement.TypedStatement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CATCH_CLAUSE);
    super(pointer);
  }
  static createCatchClause(param, body) {
    return new CatchClause(_reexportForGenerated.global.generatedEs2panda._CreateCatchClause(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(param), (0, _reexportForGenerated.passNode)(body)));
  }
  static updateCatchClause(original, param, body) {
    return new CatchClause(_reexportForGenerated.global.generatedEs2panda._UpdateCatchClause(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(param), (0, _reexportForGenerated.passNode)(body)));
  }
  get param() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._CatchClauseParamConst(_reexportForGenerated.global.context, this.peer));
  }
  get body() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._CatchClauseBodyConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.CatchClause = CatchClause;
function isCatchClause(node) {
  return node instanceof CatchClause;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CATCH_CLAUSE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CATCH_CLAUSE, CatchClause);
}