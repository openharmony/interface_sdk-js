"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CharLiteral = void 0;
exports.isCharLiteral = isCharLiteral;
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

class CharLiteral extends _Literal.Literal {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CHAR_LITERAL);
    super(pointer);
  }
  static createCharLiteral() {
    return new CharLiteral(_reexportForGenerated.global.generatedEs2panda._CreateCharLiteral(_reexportForGenerated.global.context));
  }
  static updateCharLiteral(original) {
    return new CharLiteral(_reexportForGenerated.global.generatedEs2panda._UpdateCharLiteral(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original)));
  }
}
exports.CharLiteral = CharLiteral;
function isCharLiteral(node) {
  return node instanceof CharLiteral;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CHAR_LITERAL)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CHAR_LITERAL, CharLiteral);
}