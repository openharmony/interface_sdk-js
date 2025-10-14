"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ForUpdateStatement = void 0;
exports.isForUpdateStatement = isForUpdateStatement;
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
class ForUpdateStatement extends _LoopStatement.LoopStatement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_UPDATE_STATEMENT);
    super(pointer);
    _defineProperty(this, "brandForUpdateStatement", void 0);
  }
  static createForUpdateStatement(init, test, update, body) {
    return new ForUpdateStatement(_reexportForGenerated.global.generatedEs2panda._CreateForUpdateStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(init), (0, _reexportForGenerated.passNode)(test), (0, _reexportForGenerated.passNode)(update), (0, _reexportForGenerated.passNode)(body)));
  }
  static updateForUpdateStatement(original, init, test, update, body) {
    return new ForUpdateStatement(_reexportForGenerated.global.generatedEs2panda._UpdateForUpdateStatement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(init), (0, _reexportForGenerated.passNode)(test), (0, _reexportForGenerated.passNode)(update), (0, _reexportForGenerated.passNode)(body)));
  }
  get init() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ForUpdateStatementInit(_reexportForGenerated.global.context, this.peer));
  }
  get test() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ForUpdateStatementTest(_reexportForGenerated.global.context, this.peer));
  }
  get update() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ForUpdateStatementUpdateConst(_reexportForGenerated.global.context, this.peer));
  }
  get body() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ForUpdateStatementBody(_reexportForGenerated.global.context, this.peer));
  }
}
exports.ForUpdateStatement = ForUpdateStatement;
function isForUpdateStatement(node) {
  return node instanceof ForUpdateStatement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_UPDATE_STATEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_UPDATE_STATEMENT, ForUpdateStatement);
}