"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSClassImplements = void 0;
exports.isTSClassImplements = isTSClassImplements;
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

class TSClassImplements extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CLASS_IMPLEMENTS);
    super(pointer);
  }
  static createTSClassImplements(expression, typeParameters) {
    return new TSClassImplements(_reexportForGenerated.global.generatedEs2panda._CreateTSClassImplements(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(expression), (0, _reexportForGenerated.passNode)(typeParameters)));
  }
  static updateTSClassImplements(original, expression, typeParameters) {
    return new TSClassImplements(_reexportForGenerated.global.generatedEs2panda._UpdateTSClassImplements(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(expression), (0, _reexportForGenerated.passNode)(typeParameters)));
  }
  static create1TSClassImplements(expression) {
    return new TSClassImplements(_reexportForGenerated.global.generatedEs2panda._CreateTSClassImplements1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(expression)));
  }
  static update1TSClassImplements(original, expression) {
    return new TSClassImplements(_reexportForGenerated.global.generatedEs2panda._UpdateTSClassImplements1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(expression)));
  }
  get expr() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSClassImplementsExprConst(_reexportForGenerated.global.context, this.peer));
  }
  get typeParameters() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSClassImplementsTypeParametersConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TSClassImplements = TSClassImplements;
function isTSClassImplements(node) {
  return node instanceof TSClassImplements;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CLASS_IMPLEMENTS)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CLASS_IMPLEMENTS, TSClassImplements);
}