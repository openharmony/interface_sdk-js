"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SourcePosition = void 0;
var _ArktsObject = require("./ArktsObject");
var _global = require("../static/global");
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

class SourcePosition extends _ArktsObject.ArktsObject {
  constructor(peer) {
    super(peer);
  }
  static create(index, line) {
    return new SourcePosition(_global.global.es2panda._CreateSourcePosition(_global.global.context, index, line));
  }
  index() {
    return _global.global.es2panda._SourcePositionIndex(_global.global.context, this.peer);
  }
  line() {
    return _global.global.es2panda._SourcePositionLine(_global.global.context, this.peer);
  }
}
exports.SourcePosition = SourcePosition;