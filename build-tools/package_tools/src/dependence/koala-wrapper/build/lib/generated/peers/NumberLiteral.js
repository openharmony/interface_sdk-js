"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NumberLiteral = void 0;
exports.isNumberLiteral = isNumberLiteral;
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

class NumberLiteral extends _Literal.Literal {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_NUMBER_LITERAL);
    super(pointer);
  }
}
exports.NumberLiteral = NumberLiteral;
function isNumberLiteral(node) {
  return node instanceof NumberLiteral;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_NUMBER_LITERAL)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_NUMBER_LITERAL, NumberLiteral);
}