"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PluginDiagnosticType = exports.DiagnosticKind = void 0;
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
let PluginDiagnosticType = exports.PluginDiagnosticType = /*#__PURE__*/function (PluginDiagnosticType) {
  PluginDiagnosticType[PluginDiagnosticType["ES2PANDA_PLUGIN_WARNING"] = 0] = "ES2PANDA_PLUGIN_WARNING";
  PluginDiagnosticType[PluginDiagnosticType["ES2PANDA_PLUGIN_ERROR"] = 1] = "ES2PANDA_PLUGIN_ERROR";
  PluginDiagnosticType[PluginDiagnosticType["ES2PANDA_PLUGIN_SUGGESTION"] = 2] = "ES2PANDA_PLUGIN_SUGGESTION";
  return PluginDiagnosticType;
}({});
;
class DiagnosticKind extends _ArktsObject.ArktsObject {
  constructor(peer) {
    super(peer);
  }
  static create(message, type) {
    return new DiagnosticKind(_global.global.es2panda._CreateDiagnosticKind(_global.global.context, message, type));
  }
}
exports.DiagnosticKind = DiagnosticKind;