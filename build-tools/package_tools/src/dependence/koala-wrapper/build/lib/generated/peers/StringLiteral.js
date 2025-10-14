"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StringLiteral = void 0;
exports.isStringLiteral = isStringLiteral;
var _reexportForGenerated = require("../../reexport-for-generated");
var _Literal = require("./Literal");
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

class StringLiteral extends _Literal.Literal {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_STRING_LITERAL);
    super(pointer);
  }
  static createStringLiteral() {
    return new StringLiteral(_reexportForGenerated.global.generatedEs2panda._CreateStringLiteral(_reexportForGenerated.global.context));
  }
  static updateStringLiteral(original) {
    return new StringLiteral(_reexportForGenerated.global.generatedEs2panda._UpdateStringLiteral(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original)));
  }
  static create1StringLiteral(str) {
    return new StringLiteral(_reexportForGenerated.global.generatedEs2panda._CreateStringLiteral1(_reexportForGenerated.global.context, str));
  }
  static update1StringLiteral(original, str) {
    return new StringLiteral(_reexportForGenerated.global.generatedEs2panda._UpdateStringLiteral1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), str));
  }
  get str() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._StringLiteralStrConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.StringLiteral = StringLiteral;
function isStringLiteral(node) {
  return node instanceof StringLiteral;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_STRING_LITERAL)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_STRING_LITERAL, StringLiteral);
}