"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MemberExpression = void 0;
exports.isMemberExpression = isMemberExpression;
var _reexportForGenerated = require("../../reexport-for-generated");
var _MaybeOptionalExpression = require("./MaybeOptionalExpression");
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

class MemberExpression extends _MaybeOptionalExpression.MaybeOptionalExpression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION);
    super(pointer);
  }
  static createMemberExpression(object_arg, property, kind, computed, optional_arg) {
    return new MemberExpression(_reexportForGenerated.global.generatedEs2panda._CreateMemberExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(object_arg), (0, _reexportForGenerated.passNode)(property), kind, computed, optional_arg));
  }
  static updateMemberExpression(original, object_arg, property, kind, computed, optional_arg) {
    return new MemberExpression(_reexportForGenerated.global.generatedEs2panda._UpdateMemberExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(object_arg), (0, _reexportForGenerated.passNode)(property), kind, computed, optional_arg));
  }
  get object() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._MemberExpressionObjectConst(_reexportForGenerated.global.context, this.peer));
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
  get property() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._MemberExpressionPropertyConst(_reexportForGenerated.global.context, this.peer));
  }
  get isComputed() {
    return _reexportForGenerated.global.generatedEs2panda._MemberExpressionIsComputedConst(_reexportForGenerated.global.context, this.peer);
  }
  get kind() {
    return _reexportForGenerated.global.generatedEs2panda._MemberExpressionKindConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  addMemberKind(kind) {
    _reexportForGenerated.global.generatedEs2panda._MemberExpressionAddMemberKind(_reexportForGenerated.global.context, this.peer, kind);
    return this;
  }
  /** @deprecated */
  removeMemberKind(kind) {
    _reexportForGenerated.global.generatedEs2panda._MemberExpressionRemoveMemberKind(_reexportForGenerated.global.context, this.peer, kind);
    return this;
  }
  get isIgnoreBox() {
    return _reexportForGenerated.global.generatedEs2panda._MemberExpressionIsIgnoreBoxConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setIgnoreBox() {
    _reexportForGenerated.global.generatedEs2panda._MemberExpressionSetIgnoreBox(_reexportForGenerated.global.context, this.peer);
    return this;
  }
}
exports.MemberExpression = MemberExpression;
function isMemberExpression(node) {
  return node instanceof MemberExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION, MemberExpression);
}