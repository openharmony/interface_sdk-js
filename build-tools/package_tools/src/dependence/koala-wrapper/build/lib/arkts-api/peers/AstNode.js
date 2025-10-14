"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnsupportedNode = exports.AstNode = void 0;
var _interop = require("#koalaui/interop");
var _global = require("../static/global");
var _private = require("../utilities/private");
var _utils = require("../../utils");
var _Es2pandaEnums = require("../../generated/Es2pandaEnums");
var _ArktsObject = require("./ArktsObject");
var _SourcePosition = require("./SourcePosition");
function _newArrowCheck(n, r) { if (n !== r) throw new TypeError("Cannot instantiate an arrow function"); } /*
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
class AstNode extends _ArktsObject.ArktsObject {
  constructor(peer) {
    if ((0, _interop.isNullPtr)(peer)) {
      (0, _utils.throwError)(`attempted to create AstNode from nullptr`);
    }
    super(peer);
    this.updateChildren();
  }
  get originalPeer() {
    const result = _global.global.generatedEs2panda._AstNodeOriginalNodeConst(_global.global.context, this.peer);
    if (result === _interop.nullptr) {
      this.originalPeer = this.peer;
      return this.peer;
    }
    return result;
  }
  set originalPeer(peer) {
    _global.global.generatedEs2panda._AstNodeSetOriginalNode(_global.global.context, this.peer, peer);
  }
  getChildren() {
    return (0, _private.unpackNodeArray)(_global.global.es2panda._AstNodeChildren(_global.global.context, this.peer));
  }
  getSubtree() {
    var _this = this;
    return this.getChildren().reduce(function (prev, curr) {
      _newArrowCheck(this, _this);
      return prev.concat(curr.getSubtree());
    }.bind(this), [this]);
  }
  updateChildren() {
    if (this.peer === _interop.nullptr) {
      (0, _utils.throwError)('updateChildren called on NULLPTR');
    }
    _global.global.es2panda._AstNodeUpdateChildren(_global.global.context, this.peer);
  }
  updateModifiers(modifierFlags) {
    _global.global.generatedEs2panda._AstNodeClearModifier(_global.global.context, this.peer, _private.allFlags);
    _global.global.generatedEs2panda._AstNodeAddModifier(_global.global.context, this.peer, modifierFlags ?? _Es2pandaEnums.Es2pandaModifierFlags.MODIFIER_FLAGS_NONE);
    return this;
  }
  dump(indentation = 0) {
    var _this2 = this;
    const children = this.getChildren().map(function (it) {
      _newArrowCheck(this, _this2);
      return it.dump(indentation + 1);
    }.bind(this));
    const msg = `${indentation}_` + ` <mods: ${this.modifiers}>` + this.dumpMessage();
    return '> ' + ' '.repeat(4 * indentation) + msg + '\n' + children.join('');
  }
  dumpMessage() {
    return ``;
  }
  dumpJson() {
    return (0, _private.unpackString)(_global.global.generatedEs2panda._AstNodeDumpJSONConst(_global.global.context, this.peer));
  }
  dumpSrc() {
    return (0, _private.unpackString)(_global.global.generatedEs2panda._AstNodeDumpEtsSrcConst(_global.global.context, this.peer));
  }
  dumpModifiers() {
    return (0, _private.unpackString)(_global.global.es2panda._AstNodeDumpModifiers(_global.global.context, this.peer));
  }
  clone() {
    const clonedNode = (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._AstNodeClone(_global.global.context, this.peer, this.parent?.peer ?? _interop.nullptr));
    clonedNode.parent = undefined;
    return clonedNode;
  }
  get parent() {
    const parent = _global.global.generatedEs2panda._AstNodeParent(_global.global.context, this.peer);
    return (0, _private.unpackNode)(parent);
  }
  set parent(node) {
    _global.global.generatedEs2panda._AstNodeSetParent(_global.global.context, this.peer, node?.peer ?? _interop.nullptr);
  }
  get modifiers() {
    return _global.global.generatedEs2panda._AstNodeModifiers(_global.global.context, this.peer);
  }
  set modifiers(flags) {
    _global.global.generatedEs2panda._AstNodeClearModifier(_global.global.context, this.peer, _private.allFlags);
    _global.global.generatedEs2panda._AstNodeAddModifier(_global.global.context, this.peer, flags ?? _Es2pandaEnums.Es2pandaModifierFlags.MODIFIER_FLAGS_NONE);
  }
  get isExport() {
    return _global.global.generatedEs2panda._AstNodeIsExportedConst(_global.global.context, this.peer);
  }
  get isDefaultExport() {
    return _global.global.generatedEs2panda._AstNodeIsDefaultExportedConst(_global.global.context, this.peer);
  }
  get isStatic() {
    return _global.global.generatedEs2panda._AstNodeIsStaticConst(_global.global.context, this.peer);
  }
  get startPosition() {
    return new _SourcePosition.SourcePosition(_global.global.es2panda._AstNodeStartConst(_global.global.context, this.peer));
  }
  set startPosition(start) {
    _global.global.es2panda._AstNodeSetStart(_global.global.context, this.peer, start.peer);
  }
  get endPosition() {
    return new _SourcePosition.SourcePosition(_global.global.es2panda._AstNodeEndConst(_global.global.context, this.peer));
  }
  set endPosition(end) {
    _global.global.es2panda._AstNodeSetEnd(_global.global.context, this.peer, end.peer);
  }
}
exports.AstNode = AstNode;
class UnsupportedNode extends AstNode {
  constructor(peer) {
    super(peer);
  }
}
exports.UnsupportedNode = UnsupportedNode;