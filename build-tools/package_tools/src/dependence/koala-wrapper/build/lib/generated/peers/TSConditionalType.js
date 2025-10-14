"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSConditionalType = void 0;
exports.isTSConditionalType = isTSConditionalType;
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

class TSConditionalType extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CONDITIONAL_TYPE);
    super(pointer);
  }
  static createTSConditionalType(checkType, extendsType, trueType, falseType) {
    return new TSConditionalType(_reexportForGenerated.global.generatedEs2panda._CreateTSConditionalType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(checkType), (0, _reexportForGenerated.passNode)(extendsType), (0, _reexportForGenerated.passNode)(trueType), (0, _reexportForGenerated.passNode)(falseType)));
  }
  static updateTSConditionalType(original, checkType, extendsType, trueType, falseType) {
    return new TSConditionalType(_reexportForGenerated.global.generatedEs2panda._UpdateTSConditionalType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(checkType), (0, _reexportForGenerated.passNode)(extendsType), (0, _reexportForGenerated.passNode)(trueType), (0, _reexportForGenerated.passNode)(falseType)));
  }
  get checkType() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSConditionalTypeCheckTypeConst(_reexportForGenerated.global.context, this.peer));
  }
  get extendsType() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSConditionalTypeExtendsTypeConst(_reexportForGenerated.global.context, this.peer));
  }
  get trueType() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSConditionalTypeTrueTypeConst(_reexportForGenerated.global.context, this.peer));
  }
  get falseType() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSConditionalTypeFalseTypeConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TSConditionalType = TSConditionalType;
function isTSConditionalType(node) {
  return node instanceof TSConditionalType;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CONDITIONAL_TYPE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CONDITIONAL_TYPE, TSConditionalType);
}