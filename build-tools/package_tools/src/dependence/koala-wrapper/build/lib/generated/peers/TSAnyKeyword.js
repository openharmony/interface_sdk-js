"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSAnyKeyword = void 0;
exports.isTSAnyKeyword = isTSAnyKeyword;
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

class TSAnyKeyword extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ANY_KEYWORD);
    super(pointer);
  }
  static createTSAnyKeyword() {
    return new TSAnyKeyword(_reexportForGenerated.global.generatedEs2panda._CreateTSAnyKeyword(_reexportForGenerated.global.context));
  }
  static updateTSAnyKeyword(original) {
    return new TSAnyKeyword(_reexportForGenerated.global.generatedEs2panda._UpdateTSAnyKeyword(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original)));
  }
}
exports.TSAnyKeyword = TSAnyKeyword;
function isTSAnyKeyword(node) {
  return node instanceof TSAnyKeyword;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ANY_KEYWORD)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ANY_KEYWORD, TSAnyKeyword);
}