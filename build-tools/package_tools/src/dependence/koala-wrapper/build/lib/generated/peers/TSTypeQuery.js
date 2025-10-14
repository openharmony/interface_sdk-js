"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSTypeQuery = void 0;
exports.isTSTypeQuery = isTSTypeQuery;
var _reexportForGenerated = require("../../reexport-for-generated");
var _TypeNode = require("./TypeNode");
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

class TSTypeQuery extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_QUERY);
    super(pointer);
  }
  static createTSTypeQuery(exprName) {
    return new TSTypeQuery(_reexportForGenerated.global.generatedEs2panda._CreateTSTypeQuery(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(exprName)));
  }
  static updateTSTypeQuery(original, exprName) {
    return new TSTypeQuery(_reexportForGenerated.global.generatedEs2panda._UpdateTSTypeQuery(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(exprName)));
  }
  get exprName() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSTypeQueryExprNameConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TSTypeQuery = TSTypeQuery;
function isTSTypeQuery(node) {
  return node instanceof TSTypeQuery;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_QUERY)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_QUERY, TSTypeQuery);
}