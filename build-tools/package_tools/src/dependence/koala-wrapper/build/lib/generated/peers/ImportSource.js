"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportSource = void 0;
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

class ImportSource extends _reexportForGenerated.ArktsObject {
  constructor(pointer) {
    super(pointer);
  }
  static createImportSource(source, resolvedSource, hasDecl) {
    return new ImportSource(_reexportForGenerated.global.generatedEs2panda._CreateImportSource(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(source), (0, _reexportForGenerated.passNode)(resolvedSource), hasDecl));
  }
  get source() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ImportSourceSourceConst(_reexportForGenerated.global.context, this.peer));
  }
  get resolvedSource() {
    return (0, _reexportForGenerated.unpackNode)(_reexportForGenerated.global.generatedEs2panda._ImportSourceResolvedSourceConst(_reexportForGenerated.global.context, this.peer));
  }
  get hasDecl() {
    return _reexportForGenerated.global.generatedEs2panda._ImportSourceHasDeclConst(_reexportForGenerated.global.context, this.peer);
  }
}
exports.ImportSource = ImportSource;