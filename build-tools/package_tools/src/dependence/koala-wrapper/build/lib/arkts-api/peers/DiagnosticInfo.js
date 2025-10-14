"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DiagnosticInfo = void 0;
var _ArktsObject = require("./ArktsObject");
var _global = require("../static/global");
var _private = require("../utilities/private");
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

class DiagnosticInfo extends _ArktsObject.ArktsObject {
  constructor(peer) {
    super(peer);
  }
  static create(kind, ...args) {
    return new DiagnosticInfo(_global.global.es2panda._CreateDiagnosticInfo(_global.global.context, kind.peer, (0, _private.passStringArray)(args), args.length));
  }
}
exports.DiagnosticInfo = DiagnosticInfo;