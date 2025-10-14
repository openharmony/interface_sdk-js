"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AnnotatedAstNode = void 0;
exports.isAnnotatedAstNode = isAnnotatedAstNode;
var _reexportForGenerated = require("../../reexport-for-generated");
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

class AnnotatedAstNode extends _reexportForGenerated.AstNode {
  constructor(pointer) {
    super(pointer);
  }
}
exports.AnnotatedAstNode = AnnotatedAstNode;
function isAnnotatedAstNode(node) {
  return node instanceof AnnotatedAstNode;
}