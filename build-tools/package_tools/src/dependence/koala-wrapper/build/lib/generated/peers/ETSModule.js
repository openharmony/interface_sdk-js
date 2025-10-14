"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ETSModule = void 0;
exports.isETSModule = isETSModule;
var _reexportForGenerated = require("../../reexport-for-generated");
var _BlockStatement = require("./BlockStatement");
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

class ETSModule extends _BlockStatement.BlockStatement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_MODULE);
    super(pointer);
  }
  get ident() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ETSModuleIdentConst(_reexportForGenerated.global.context, this.peer));
  }
  get isETSScript() {
    return _reexportForGenerated.global.generatedEs2panda._ETSModuleIsETSScriptConst(_reexportForGenerated.global.context, this.peer);
  }
  get isNamespace() {
    return _reexportForGenerated.global.generatedEs2panda._ETSModuleIsNamespaceConst(_reexportForGenerated.global.context, this.peer);
  }
  get isNamespaceChainLastNode() {
    return _reexportForGenerated.global.generatedEs2panda._ETSModuleIsNamespaceChainLastNodeConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  setNamespaceChainLastNode() {
    _reexportForGenerated.global.generatedEs2panda._ETSModuleSetNamespaceChainLastNode(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ETSModuleAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._ETSModuleSetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.ETSModule = ETSModule;
function isETSModule(node) {
  return node instanceof ETSModule;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_MODULE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_MODULE, ETSModule);
}