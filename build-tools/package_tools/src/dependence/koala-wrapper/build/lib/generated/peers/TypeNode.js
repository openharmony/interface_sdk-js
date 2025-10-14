"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TypeNode = void 0;
exports.isTypeNode = isTypeNode;
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

class TypeNode extends _Expression.Expression {
  constructor(pointer) {
    super(pointer);
  }
  get annotations() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._TypeNodeAnnotationsConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _reexportForGenerated.global.generatedEs2panda._TypeNodeSetAnnotations(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.TypeNode = TypeNode;
function isTypeNode(node) {
  return node instanceof TypeNode;
}