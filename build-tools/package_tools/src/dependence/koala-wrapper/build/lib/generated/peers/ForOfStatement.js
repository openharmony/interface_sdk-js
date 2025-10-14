"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForOfStatement = void 0;
exports.isForOfStatement = isForOfStatement;
var _reexportForGenerated = require("../../reexport-for-generated");
var _LoopStatement = require("./LoopStatement");
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
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
class ForOfStatement extends _LoopStatement.LoopStatement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_OF_STATEMENT);
    super(pointer);
    _defineProperty(this, "brandForOfStatement", void 0);
  }
  static createForOfStatement(left, right, body, isAwait) {
    return new ForOfStatement(_reexportForGenerated.global.generatedEs2panda._CreateForOfStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(left), (0, _reexportForGenerated.passNode)(right), (0, _reexportForGenerated.passNode)(body), isAwait));
  }
  static updateForOfStatement(original, left, right, body, isAwait) {
    return new ForOfStatement(_reexportForGenerated.global.generatedEs2panda._UpdateForOfStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(left), (0, _reexportForGenerated.passNode)(right), (0, _reexportForGenerated.passNode)(body), isAwait));
  }
  get left() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ForOfStatementLeft(_reexportForGenerated.global.context, this.peer));
  }
  get right() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ForOfStatementRight(_reexportForGenerated.global.context, this.peer));
  }
  get body() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ForOfStatementBody(_reexportForGenerated.global.context, this.peer));
  }
  get isAwait() {
    return _reexportForGenerated.global.generatedEs2panda._ForOfStatementIsAwaitConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.ForOfStatement = ForOfStatement;
function isForOfStatement(node) {
  return node instanceof ForOfStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_OF_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_OF_STATEMENT, ForOfStatement);
}