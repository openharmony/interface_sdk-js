"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MemberExpression = void 0;
var _generated = require("../../generated");
var _reexportForGenerated = require("../../reexport-for-generated");
/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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

class MemberExpression extends _generated.Expression {
  constructor(peer) {
    (0, _reexportForGenerated.assertValidPeer)(peer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION);
    super(peer);
  }
  static create(object, property, kind, computed, optional) {
    return new MemberExpression(_reexportForGenerated.global.generatedEs2panda._CreateMemberExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(object), (0, _reexportForGenerated.passNode)(property), kind, computed, optional));
  }
  static update(node, object, property, kind, computed, optional) {
    return new MemberExpression(_reexportForGenerated.global.generatedEs2panda._UpdateMemberExpression(_reexportForGenerated.global.context, node.peer, (0, _reexportForGenerated.passNode)(object), (0, _reexportForGenerated.passNode)(property), kind, computed, optional));
  }
  dumpMessage() {
    return ` <kind: ${this.kind}>`;
  }
  get object() {
    return (0, _reexportForGenerated.unpackNonNullableNode)(_reexportForGenerated.global.generatedEs2panda._MemberExpressionObject(_reexportForGenerated.global.context, this.peer));
  }
  get property() {
    return (0, _reexportForGenerated.unpackNonNullableNode)(_reexportForGenerated.global.generatedEs2panda._MemberExpressionProperty(_reexportForGenerated.global.context, this.peer));
  }
  get kind() {
    return _reexportForGenerated.global.generatedEs2panda._MemberExpressionKindConst(_reexportForGenerated.global.context, this.peer);
  }
  get computed() {
    return _reexportForGenerated.global.generatedEs2panda._MemberExpressionIsComputedConst(_reexportForGenerated.global.context, this.peer);
  }
  get optional() {
    return false; // todo: no corresponding method in es2panda
  }

  /** @deprecated */
  setObject(object_arg) {
    _reexportForGenerated.global.generatedEs2panda._MemberExpressionSetObject(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(object_arg));
    return this;
  }
  /** @deprecated */
  setProperty(prop) {
    _reexportForGenerated.global.generatedEs2panda._MemberExpressionSetProperty(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(prop));
    return this;
  }
}
exports.MemberExpression = MemberExpression;