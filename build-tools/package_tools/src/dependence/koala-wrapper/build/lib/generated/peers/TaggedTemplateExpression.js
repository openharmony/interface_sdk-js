"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TaggedTemplateExpression = void 0;
exports.isTaggedTemplateExpression = isTaggedTemplateExpression;
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

class TaggedTemplateExpression extends _Expression.Expression {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TAGGED_TEMPLATE_EXPRESSION);
    super(pointer);
  }
  static createTaggedTemplateExpression(tag, quasi, typeParams) {
    return new TaggedTemplateExpression(_reexportForGenerated.global.generatedEs2panda._CreateTaggedTemplateExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(tag), (0, _reexportForGenerated.passNode)(quasi), (0, _reexportForGenerated.passNode)(typeParams)));
  }
  static updateTaggedTemplateExpression(original, tag, quasi, typeParams) {
    return new TaggedTemplateExpression(_reexportForGenerated.global.generatedEs2panda._UpdateTaggedTemplateExpression(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(tag), (0, _reexportForGenerated.passNode)(quasi), (0, _reexportForGenerated.passNode)(typeParams)));
  }
  get tag() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TaggedTemplateExpressionTagConst(_reexportForGenerated.global.context, this.peer));
  }
  get quasi() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TaggedTemplateExpressionQuasiConst(_reexportForGenerated.global.context, this.peer));
  }
  get typeParams() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._TaggedTemplateExpressionTypeParamsConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.TaggedTemplateExpression = TaggedTemplateExpression;
function isTaggedTemplateExpression(node) {
  return node instanceof TaggedTemplateExpression;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TAGGED_TEMPLATE_EXPRESSION)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_TAGGED_TEMPLATE_EXPRESSION, TaggedTemplateExpression);
}