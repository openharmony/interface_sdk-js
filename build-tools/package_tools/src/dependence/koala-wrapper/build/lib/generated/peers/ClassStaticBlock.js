"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassStaticBlock = void 0;
exports.isClassStaticBlock = isClassStaticBlock;
var _reexportForGenerated = require("../../reexport-for-generated");
var _ClassElement = require("./ClassElement");
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

class ClassStaticBlock extends _ClassElement.ClassElement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_STATIC_BLOCK);
    super(pointer);
  }
  static createClassStaticBlock(value) {
    return new ClassStaticBlock(_reexportForGenerated.global.generatedEs2panda._CreateClassStaticBlock(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(value)));
  }
  static updateClassStaticBlock(original, value) {
    return new ClassStaticBlock(_reexportForGenerated.global.generatedEs2panda._UpdateClassStaticBlock(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(value)));
  }
}
exports.ClassStaticBlock = ClassStaticBlock;
function isClassStaticBlock(node) {
  return node instanceof ClassStaticBlock;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_STATIC_BLOCK)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_STATIC_BLOCK, ClassStaticBlock);
}