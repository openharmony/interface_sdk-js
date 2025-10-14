"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InterfaceDecl = void 0;
exports.isInterfaceDecl = isInterfaceDecl;
var _TSInterfaceDeclaration = require("./TSInterfaceDeclaration");
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

class InterfaceDecl extends _TSInterfaceDeclaration.TSInterfaceDeclaration {
  constructor(pointer) {
    super(pointer);
  }
}
exports.InterfaceDecl = InterfaceDecl;
function isInterfaceDecl(node) {
  return node instanceof InterfaceDecl;
}