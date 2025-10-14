"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSClassLiteral = void 0;
exports.isETSClassLiteral = isETSClassLiteral;
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

class ETSClassLiteral extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_CLASS_LITERAL);
    super(pointer);
  }
  static createETSClassLiteral(expr) {
    return new ETSClassLiteral(_reexportForGenerated.global.generatedEs2panda._CreateETSClassLiteral(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(expr)));
  }
  static updateETSClassLiteral(original, expr) {
    return new ETSClassLiteral(_reexportForGenerated.global.generatedEs2panda._UpdateETSClassLiteral(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(expr)));
  }
  get expr() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSClassLiteralExprConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ETSClassLiteral = ETSClassLiteral;
function isETSClassLiteral(node) {
  return node instanceof ETSClassLiteral;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_CLASS_LITERAL)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_CLASS_LITERAL, ETSClassLiteral);
}