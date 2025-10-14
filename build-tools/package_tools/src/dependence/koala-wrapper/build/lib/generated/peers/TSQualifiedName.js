"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSQualifiedName = void 0;
exports.isTSQualifiedName = isTSQualifiedName;
var _reexportForGenerated = require("../../reexport-for-generated");
var _Expression = require("./Expression");
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

class TSQualifiedName extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_QUALIFIED_NAME);
    super(pointer);
  }
  static createTSQualifiedName(left, right) {
    return new TSQualifiedName(_reexportForGenerated.global.generatedEs2panda._CreateTSQualifiedName(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(left), (0, _reexportForGenerated.passNode)(right)));
  }
  static updateTSQualifiedName(original, left, right) {
    return new TSQualifiedName(_reexportForGenerated.global.generatedEs2panda._UpdateTSQualifiedName(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(left), (0, _reexportForGenerated.passNode)(right)));
  }
  get left() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSQualifiedNameLeftConst(_reexportForGenerated.global.context, this.peer));
  }
  get right() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSQualifiedNameRightConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TSQualifiedName = TSQualifiedName;
function isTSQualifiedName(node) {
  return node instanceof TSQualifiedName;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_QUALIFIED_NAME)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_QUALIFIED_NAME, TSQualifiedName);
}