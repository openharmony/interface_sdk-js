"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Context = void 0;
var _ArktsObject = require("./ArktsObject");
var _global = require("../static/global");
var _utils = require("../../utils");
var _private = require("../utilities/private");
var _Program = require("./Program");
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

class Context extends _ArktsObject.ArktsObject {
  constructor(peer) {
    super(peer);
  }
  static createFromString(source) {
    if (!_global.global.configIsInitialized()) {
      (0, _utils.throwError)(`Config not initialized`);
    }
    return new Context(_global.global.es2panda._CreateContextFromString(_global.global.config, (0, _private.passString)(source), (0, _private.passString)(_global.global.filePath)));
  }
  static createCacheContextFromFile(configPtr, fileName, globalContextPtr, isExternal) {
    return new Context(_global.global.es2panda._CreateCacheContextFromFile(configPtr, (0, _private.passString)(fileName), globalContextPtr, isExternal));
  }
  static createContextGenerateAbcForExternalSourceFiles(filenames) {
    if (!_global.global.configIsInitialized()) {
      (0, _utils.throwError)(`Config not initialized`);
    }
    return new Context(_global.global.es2panda._CreateContextGenerateAbcForExternalSourceFiles(_global.global.config, filenames.length, (0, _private.passStringArray)(filenames)));
  }
  static destroyAndRecreate(ast) {
    console.log('[TS WRAPPER] DESTROY AND RECREATE');
    const source = (0, _utils.filterSource)(ast.dumpSrc());
    _global.global.es2panda._DestroyContext(_global.global.context);
    _global.global.compilerContext = Context.createFromString(source);
    return new Context(_global.global.context);
  }
  get program() {
    return new _Program.Program(_global.global.es2panda._ContextProgram(this.peer));
  }
}
exports.Context = Context;