"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSImportType = void 0;
exports.isTSImportType = isTSImportType;
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

class TSImportType extends _TypeNode.TypeNode {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_IMPORT_TYPE);
    super(pointer);
  }
  static createTSImportType(param, typeParams, qualifier, isTypeof) {
    return new TSImportType(_reexportForGenerated.global.generatedEs2panda._CreateTSImportType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(param), (0, _reexportForGenerated.passNode)(typeParams), (0, _reexportForGenerated.passNode)(qualifier), isTypeof));
  }
  static updateTSImportType(original, param, typeParams, qualifier, isTypeof) {
    return new TSImportType(_reexportForGenerated.global.generatedEs2panda._UpdateTSImportType(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(param), (0, _reexportForGenerated.passNode)(typeParams), (0, _reexportForGenerated.passNode)(qualifier), isTypeof));
  }
  get param() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSImportTypeParamConst(_reexportForGenerated.global.context, this.peer));
  }
  get typeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSImportTypeTypeParamsConst(_reexportForGenerated.global.context, this.peer));
  }
  get qualifier() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSImportTypeQualifierConst(_reexportForGenerated.global.context, this.peer));
  }
  get isTypeof() {
    return _reexportForGenerated.global.generatedEs2panda._TSImportTypeIsTypeofConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.TSImportType = TSImportType;
function isTSImportType(node) {
  return node instanceof TSImportType;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_IMPORT_TYPE)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_IMPORT_TYPE, TSImportType);
}