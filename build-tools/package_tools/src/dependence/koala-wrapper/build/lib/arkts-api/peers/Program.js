"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Program = exports.ExternalSource = void 0;
var _ArktsObject = require("./ArktsObject");
var _global = require("../static/global");
var _private = require("../utilities/private");
var _types = require("../types");
function _newArrowCheck(n, r) { if (n !== r) throw new TypeError("Cannot instantiate an arrow function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
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
var SkipPhaseResult = /*#__PURE__*/function (SkipPhaseResult) {
  SkipPhaseResult[SkipPhaseResult["NOT_COMPUTED"] = 0] = "NOT_COMPUTED";
  SkipPhaseResult[SkipPhaseResult["CAN_SKIP"] = 1] = "CAN_SKIP";
  SkipPhaseResult[SkipPhaseResult["CANNOT_SKIP"] = 2] = "CANNOT_SKIP";
  return SkipPhaseResult;
}(SkipPhaseResult || {});
class Program extends _ArktsObject.ArktsObject {
  constructor(peer) {
    super(peer);
    _defineProperty(this, "canSkipPhaseResult", void 0);
    this.canSkipPhaseResult = SkipPhaseResult.NOT_COMPUTED;
  }
  get astNode() {
    return new _types.EtsScript(_global.global.es2panda._ProgramAst(_global.global.context, this.peer));
  }
  get externalSources() {
    var _this = this;
    return (0, _private.acceptNativeObjectArrayResult)(_global.global.es2panda._ProgramExternalSources(_global.global.context, this.peer), function (instance) {
      _newArrowCheck(this, _this);
      return new ExternalSource(instance);
    }.bind(this));
  }
  get directExternalSources() {
    var _this2 = this;
    return (0, _private.acceptNativeObjectArrayResult)(_global.global.es2panda._ProgramDirectExternalSources(_global.global.context, this.peer), function (instance) {
      _newArrowCheck(this, _this2);
      return new ExternalSource(instance);
    }.bind(this));
  }
  get fileName() {
    return (0, _private.unpackString)(_global.global.es2panda._ProgramFileNameConst(_global.global.context, this.peer));
  }
  get fileNameWithExtension() {
    return (0, _private.unpackString)(_global.global.es2panda._ProgramFileNameWithExtensionConst(_global.global.context, this.peer));
  }

  /**
   * @deprecated
   */
  get globalAbsName() {
    return (0, _private.unpackString)(_global.global.es2panda._ETSParserGetGlobalProgramAbsName(_global.global.context));
  }
  get absName() {
    return (0, _private.unpackString)(_global.global.es2panda._ProgramAbsoluteNameConst(_global.global.context, this.peer));
  }
  get moduleName() {
    return (0, _private.unpackString)(_global.global.es2panda._ProgramModuleNameConst(_global.global.context, this.peer));
  }
  isASTLowered() {
    return _global.global.es2panda._ProgramIsASTLoweredConst(_global.global.context, this.peer);
  }
  canSkipPhases() {
    if (this.canSkipPhaseResult === SkipPhaseResult.CAN_SKIP) {
      return true;
    } else if (this.canSkipPhaseResult === SkipPhaseResult.CANNOT_SKIP) {
      return false;
    }
    if (_global.global.es2panda._ProgramCanSkipPhases(_global.global.context, this.peer)) {
      this.canSkipPhaseResult = SkipPhaseResult.CAN_SKIP;
      return true;
    } else {
      this.canSkipPhaseResult = SkipPhaseResult.CANNOT_SKIP;
      return false;
    }
  }
}
exports.Program = Program;
class ExternalSource extends _ArktsObject.ArktsObject {
  constructor(peer) {
    super(peer);
  }
  getName() {
    return (0, _private.unpackString)(_global.global.es2panda._ExternalSourceName(this.peer));
  }
  get programs() {
    var _this3 = this;
    return (0, _private.acceptNativeObjectArrayResult)(_global.global.es2panda._ExternalSourcePrograms(this.peer), function (instance) {
      _newArrowCheck(this, _this3);
      return new Program(instance);
    }.bind(this));
  }
}
exports.ExternalSource = ExternalSource;