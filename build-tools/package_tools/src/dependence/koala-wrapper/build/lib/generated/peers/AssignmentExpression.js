"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AssignmentExpression = void 0;
exports.isAssignmentExpression = isAssignmentExpression;
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

class AssignmentExpression extends _Expression.Expression {
  constructor(pointer) {
    super(pointer);
  }
  get left() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._AssignmentExpressionLeftConst(_reexportForGenerated.global.context, this.peer));
  }
  get right() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._AssignmentExpressionRightConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setRight(expr) {
    _reexportForGenerated.global.generatedEs2panda._AssignmentExpressionSetRight(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(expr));
    return this;
  }
  /** @deprecated */
  setLeft(expr) {
    _reexportForGenerated.global.generatedEs2panda._AssignmentExpressionSetLeft(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(expr));
    return this;
  }
  get result() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._AssignmentExpressionResultConst(_reexportForGenerated.global.context, this.peer));
  }
  get operatorType() {
    return _reexportForGenerated.global.generatedEs2panda._AssignmentExpressionOperatorTypeConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setResult(expr) {
    _reexportForGenerated.global.generatedEs2panda._AssignmentExpressionSetResult(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(expr));
    return this;
  }
  get isLogicalExtended() {
    return _reexportForGenerated.global.generatedEs2panda._AssignmentExpressionIsLogicalExtendedConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setIgnoreConstAssign() {
    _reexportForGenerated.global.generatedEs2panda._AssignmentExpressionSetIgnoreConstAssign(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  get isIgnoreConstAssign() {
    return _reexportForGenerated.global.generatedEs2panda._AssignmentExpressionIsIgnoreConstAssignConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.AssignmentExpression = AssignmentExpression;
function isAssignmentExpression(node) {
  return node instanceof AssignmentExpression;
}