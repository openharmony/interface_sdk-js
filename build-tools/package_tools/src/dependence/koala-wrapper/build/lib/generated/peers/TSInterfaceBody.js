"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSInterfaceBody = void 0;
exports.isTSInterfaceBody = isTSInterfaceBody;
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

class TSInterfaceBody extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_BODY);
    super(pointer);
  }
  static createTSInterfaceBody(body) {
    return new TSInterfaceBody(_reexportForGenerated.global.generatedEs2panda._CreateTSInterfaceBody(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNodeArray)(body), body.length));
  }
  static updateTSInterfaceBody(original, body) {
    return new TSInterfaceBody(_reexportForGenerated.global.generatedEs2panda._UpdateTSInterfaceBody(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNodeArray)(body), body.length));
  }
  get bodyPtr() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSInterfaceBodyBodyPtr(_reexportForGenerated.global.context, this.peer));
  }
  get body() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSInterfaceBodyBodyConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TSInterfaceBody = TSInterfaceBody;
function isTSInterfaceBody(node) {
  return node instanceof TSInterfaceBody;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_BODY)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_BODY, TSInterfaceBody);
}