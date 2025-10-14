"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSNeverKeyword = void 0;
exports.isTSNeverKeyword = isTSNeverKeyword;
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

class TSNeverKeyword extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NEVER_KEYWORD);
    super(pointer);
  }
  static createTSNeverKeyword() {
    return new TSNeverKeyword(_reexportForGenerated.global.generatedEs2panda._CreateTSNeverKeyword(_reexportForGenerated.global.context));
  }
  static updateTSNeverKeyword(original) {
    return new TSNeverKeyword(_reexportForGenerated.global.generatedEs2panda._UpdateTSNeverKeyword(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original)));
  }
}
exports.TSNeverKeyword = TSNeverKeyword;
function isTSNeverKeyword(node) {
  return node instanceof TSNeverKeyword;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NEVER_KEYWORD)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NEVER_KEYWORD, TSNeverKeyword);
}