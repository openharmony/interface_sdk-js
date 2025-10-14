"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SrcDumper = void 0;
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

class SrcDumper extends _reexportForGenerated.ArktsObject {
  constructor(pointer) {
    super(pointer);
  }
  static createSrcDumper(node) {
    return new SrcDumper(_reexportForGenerated.global.generatedEs2panda._CreateSrcDumper(_reexportForGenerated.global.context, (0, _reexportForGenerated.passNode)(node)));
  }
  /** @deprecated */
  add(str) {
    _reexportForGenerated.global.generatedEs2panda._SrcDumperAdd(_reexportForGenerated.global.context, this.peer, str);
    return this;
  }
  /** @deprecated */
  add1(i) {
    _reexportForGenerated.global.generatedEs2panda._SrcDumperAdd1(_reexportForGenerated.global.context, this.peer, i);
    return this;
  }
  /** @deprecated */
  add2(l) {
    _reexportForGenerated.global.generatedEs2panda._SrcDumperAdd2(_reexportForGenerated.global.context, this.peer, l);
    return this;
  }
  /** @deprecated */
  add3(f) {
    _reexportForGenerated.global.generatedEs2panda._SrcDumperAdd3(_reexportForGenerated.global.context, this.peer, f);
    return this;
  }
  /** @deprecated */
  add4(d) {
    _reexportForGenerated.global.generatedEs2panda._SrcDumperAdd4(_reexportForGenerated.global.context, this.peer, d);
    return this;
  }
  get str() {
    return (0, _reexportForGenerated.unpackString)(_reexportForGenerated.global.generatedEs2panda._SrcDumperStrConst(_reexportForGenerated.global.context, this.peer));
  }
  /** @deprecated */
  incrIndent() {
    _reexportForGenerated.global.generatedEs2panda._SrcDumperIncrIndent(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  /** @deprecated */
  decrIndent() {
    _reexportForGenerated.global.generatedEs2panda._SrcDumperDecrIndent(_reexportForGenerated.global.context, this.peer);
    return this;
  }
  /** @deprecated */
  endl(num) {
    _reexportForGenerated.global.generatedEs2panda._SrcDumperEndl(_reexportForGenerated.global.context, this.peer, num);
    return this;
  }
}
exports.SrcDumper = SrcDumper;