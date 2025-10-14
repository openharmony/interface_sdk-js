"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TSTypeParameter = void 0;
exports.isTSTypeParameter = isTSTypeParameter;
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

class TSTypeParameter extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER);
    super(pointer);
  }
  static createTSTypeParameter(name, constraint, defaultType) {
    return new TSTypeParameter(_reexportForGenerated.global.generatedEs2panda._CreateTSTypeParameter(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(name), (0, _reexportForGenerated.passNode)(constraint), (0, _reexportForGenerated.passNode)(defaultType)));
  }
  static updateTSTypeParameter(original, name, constraint, defaultType) {
    return new TSTypeParameter(_reexportForGenerated.global.generatedEs2panda._UpdateTSTypeParameter(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(name), (0, _reexportForGenerated.passNode)(constraint), (0, _reexportForGenerated.passNode)(defaultType)));
  }
  static create1TSTypeParameter(name, constraint, defaultType, flags) {
    return new TSTypeParameter(_reexportForGenerated.global.generatedEs2panda._CreateTSTypeParameter1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(name), (0, _reexportForGenerated.passNode)(constraint), (0, _reexportForGenerated.passNode)(defaultType), flags));
  }
  static update1TSTypeParameter(original, name, constraint, defaultType, flags) {
    return new TSTypeParameter(_reexportForGenerated.global.generatedEs2panda._UpdateTSTypeParameter1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(name), (0, _reexportForGenerated.passNode)(constraint), (0, _reexportForGenerated.passNode)(defaultType), flags));
  }
  get name() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSTypeParameterNameConst(_reexportForGenerated.global.context, this.peer));
  }
  get constraint() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSTypeParameterConstraintConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setConstraint(constraint) {
    _reexportForGenerated.global.generatedEs2panda._TSTypeParameterSetConstraint(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(constraint));
    return this;
  }
  get defaultType() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TSTypeParameterDefaultTypeConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setDefaultType(defaultType) {
    _reexportForGenerated.global.generatedEs2panda._TSTypeParameterSetDefaultType(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(defaultType));
    return this;
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TSTypeParameterAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._TSTypeParameterSetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.TSTypeParameter = TSTypeParameter;
function isTSTypeParameter(node) {
  return node instanceof TSTypeParameter;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER, TSTypeParameter);
}