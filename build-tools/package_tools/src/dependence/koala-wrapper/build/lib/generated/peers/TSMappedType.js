"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSMappedType = void 0;
exports.isTSMappedType = isTSMappedType;
var _reexportForGenerated = require("../../reexport-for-generated");
var _TypeNode = require("./TypeNode");
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

class TSMappedType extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MAPPED_TYPE);
    super(pointer);
  }
  static createTSMappedType(typeParameter, typeAnnotation, readonly_arg, optional_arg) {
    return new TSMappedType(_reexportForGenerated.global.generatedEs2panda._CreateTSMappedType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(typeParameter), (0, _reexportForGenerated.passNode)(typeAnnotation), readonly_arg, optional_arg));
  }
  static updateTSMappedType(original, typeParameter, typeAnnotation, readonly_arg, optional_arg) {
    return new TSMappedType(_reexportForGenerated.global.generatedEs2panda._UpdateTSMappedType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(typeParameter), (0, _reexportForGenerated.passNode)(typeAnnotation), readonly_arg, optional_arg));
  }
  get typeParameter() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSMappedTypeTypeParameter(_reexportForGenerated.global.context, this.peer));
  }
  get typeAnnotation() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSMappedTypeTypeAnnotation(_reexportForGenerated.global.context, this.peer));
  }
  get readonly() {
    return _reexportForGenerated.global.generatedEs2panda._TSMappedTypeReadonly(_reexportForGenerated.global.context, this.peer);
  }
  get optional() {
    return _reexportForGenerated.global.generatedEs2panda._TSMappedTypeOptional(_reexportForGenerated.global.context, this.peer);
  }
}
exports.TSMappedType = TSMappedType;
function isTSMappedType(node) {
  return node instanceof TSMappedType;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MAPPED_TYPE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MAPPED_TYPE, TSMappedType);
}