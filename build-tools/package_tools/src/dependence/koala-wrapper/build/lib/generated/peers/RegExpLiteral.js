"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RegExpLiteral = void 0;
exports.isRegExpLiteral = isRegExpLiteral;
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

class RegExpLiteral extends _Literal.Literal {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_REGEXP_LITERAL);
    super(pointer);
  }
  static createRegExpLiteral(pattern, flags, flagsStr) {
    return new RegExpLiteral(_reexportForGenerated.global.generatedEs2panda._CreateRegExpLiteral(_reexportForGenerated.global.context, pattern, flags, flagsStr));
  }
  static updateRegExpLiteral(original, pattern, flags, flagsStr) {
    return new RegExpLiteral(_reexportForGenerated.global.generatedEs2panda._UpdateRegExpLiteral(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), pattern, flags, flagsStr));
  }
  get pattern() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._RegExpLiteralPatternConst(_reexportForGenerated.global.context, this.peer));
  }
  get flags() {
    return _reexportForGenerated.global.generatedEs2panda._RegExpLiteralFlagsConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.RegExpLiteral = RegExpLiteral;
function isRegExpLiteral(node) {
  return node instanceof RegExpLiteral;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_REGEXP_LITERAL)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_REGEXP_LITERAL, RegExpLiteral);
}