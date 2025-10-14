"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSLiteralType = void 0;
exports.isTSLiteralType = isTSLiteralType;
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

class TSLiteralType extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_LITERAL_TYPE);
    super(pointer);
  }
  static createTSLiteralType(literal) {
    return new TSLiteralType(_reexportForGenerated.global.generatedEs2panda._CreateTSLiteralType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(literal)));
  }
  static updateTSLiteralType(original, literal) {
    return new TSLiteralType(_reexportForGenerated.global.generatedEs2panda._UpdateTSLiteralType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(literal)));
  }
  get literal() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSLiteralTypeLiteralConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TSLiteralType = TSLiteralType;
function isTSLiteralType(node) {
  return node instanceof TSLiteralType;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_LITERAL_TYPE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_LITERAL_TYPE, TSLiteralType);
}