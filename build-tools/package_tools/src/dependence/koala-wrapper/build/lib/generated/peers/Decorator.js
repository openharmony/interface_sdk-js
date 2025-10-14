"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Decorator = void 0;
exports.isDecorator = isDecorator;
var _reexportForGenerated = require("../../reexport-for-generated");
var _Statement = require("./Statement");
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

class Decorator extends _Statement.Statement {
  constructor(pointer) {
    (0, _reexportForGenerated.assertValidPeer)(pointer, _reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_DECORATOR);
    super(pointer);
  }
  static createDecorator(expr) {
    return new Decorator(_reexportForGenerated.global.generatedEs2panda._CreateDecorator(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(expr)));
  }
  static updateDecorator(original, expr) {
    return new Decorator(_reexportForGenerated.global.generatedEs2panda._UpdateDecorator(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(original), (0, _reexportForGenerated.passNode)(expr)));
  }
  get expr() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._DecoratorExprConst(_reexportForGenerated.global.context, this.peer));
  }
}
exports.Decorator = Decorator;
function isDecorator(node) {
  return node instanceof Decorator;
}
if (!_reexportForGenerated.nodeByType.has(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_DECORATOR)) {
  _reexportForGenerated.nodeByType.set(_reexportForGenerated.Es2pandaAstNodeType.AST_NODE_TYPE_DECORATOR, Decorator);
}