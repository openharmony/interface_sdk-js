"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateElement = void 0;
exports.isTemplateElement = isTemplateElement;
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

class TemplateElement extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TEMPLATE_ELEMENT);
    super(pointer);
  }
  static createTemplateElement() {
    return new TemplateElement(_reexportForGenerated.global.generatedEs2panda._CreateTemplateElement(_reexportForGenerated.global.context));
  }
  static updateTemplateElement(original) {
    return new TemplateElement(_reexportForGenerated.global.generatedEs2panda._UpdateTemplateElement(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original)));
  }
  static create1TemplateElement(raw, cooked) {
    return new TemplateElement(_reexportForGenerated.global.generatedEs2panda._CreateTemplateElement1(_reexportForGenerated.global.context, raw, cooked));
  }
  static update1TemplateElement(original, raw, cooked) {
    return new TemplateElement(_reexportForGenerated.global.generatedEs2panda._UpdateTemplateElement1(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), raw, cooked));
  }
  get raw() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._TemplateElementRawConst(_reexportForGenerated.global.context, this.peer));
  }
  get cooked() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._TemplateElementCookedConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TemplateElement = TemplateElement;
function isTemplateElement(node) {
  return node instanceof TemplateElement;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TEMPLATE_ELEMENT)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TEMPLATE_ELEMENT, TemplateElement);
}