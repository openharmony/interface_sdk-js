"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSParameterProperty = void 0;
exports.isTSParameterProperty = isTSParameterProperty;
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

class TSParameterProperty extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PARAMETER_PROPERTY);
    super(pointer);
  }
  static createTSParameterProperty(accessibility, parameter, readonly_arg, isStatic, isExport) {
    return new TSParameterProperty(_reexportForGenerated.global.generatedEs2panda._CreateTSParameterProperty(_reexportForGenerated.global.context, accessibility, (0, _reexportForGenerated.passNode)(parameter), readonly_arg, isStatic, isExport));
  }
  static updateTSParameterProperty(original, accessibility, parameter, readonly_arg, isStatic, isExport) {
    return new TSParameterProperty(_reexportForGenerated.global.generatedEs2panda._UpdateTSParameterProperty(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), accessibility, (0, _reexportForGenerated.passNode)(parameter), readonly_arg, isStatic, isExport));
  }
  get accessibility() {
    return _reexportForGenerated.global.generatedEs2panda._TSParameterPropertyAccessibilityConst(_reexportForGenerated.global.context, this.peer);
  }
  get readonly() {
    return _reexportForGenerated.global.generatedEs2panda._TSParameterPropertyReadonlyConst(_reexportForGenerated.global.context, this.peer);
  }
  get isStatic() {
    return _reexportForGenerated.global.generatedEs2panda._TSParameterPropertyIsStaticConst(_reexportForGenerated.global.context, this.peer);
  }
  get isExport() {
    return _reexportForGenerated.global.generatedEs2panda._TSParameterPropertyIsExportConst(_reexportForGenerated.global.context, this.peer);
  }
  get parameter() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSParameterPropertyParameterConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TSParameterProperty = TSParameterProperty;
function isTSParameterProperty(node) {
  return node instanceof TSParameterProperty;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PARAMETER_PROPERTY)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PARAMETER_PROPERTY, TSParameterProperty);
}