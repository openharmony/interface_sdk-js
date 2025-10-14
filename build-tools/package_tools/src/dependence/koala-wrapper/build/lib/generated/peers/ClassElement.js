"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClassElement = void 0;
exports.isClassElement = isClassElement;
var _reexportForGenerated = require("../../reexport-for-generated");
var _TypedStatement = require("./TypedStatement");
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

class ClassElement extends _TypedStatement.TypedStatement {
  constructor(pointer) {
    super(pointer);
  }
  get key() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ClassElementKeyConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  setValue(value) {
    _reexportForGenerated.global.generatedEs2panda._ClassElementSetValue(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(value));
    return this;
  }
  get value() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ClassElementValueConst(_reexportForGenerated.global.context, this.peer));
  }
  get decorators() {
    return (0, _reexportForGenerated.unpackNodeArray)(_reexportForGenerated.global.generatedEs2panda._ClassElementDecoratorsConst(_reexportForGenerated.global.context, this.peer));
  }
  get isComputed() {
    return _reexportForGenerated.global.generatedEs2panda._ClassElementIsComputedConst(_reexportForGenerated.global.context, this.peer);
  }
  /** @deprecated */
  addDecorator(decorator) {
    _reexportForGenerated.global.generatedEs2panda._ClassElementAddDecorator(_reexportForGenerated.global.context, this.peer, (0, _reexportForGenerated.passNode)(decorator));
    return this;
  }
}
exports.ClassElement = ClassElement;
function isClassElement(node) {
  return node instanceof ClassElement;
}