"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.acceptNativeObjectArrayResult = acceptNativeObjectArrayResult;
exports.arrayOfNullptr = exports.allFlags = void 0;
exports.assertValidPeer = assertValidPeer;
exports.attachModifiers = attachModifiers;
exports.compose = compose;
exports.passNode = passNode;
exports.passNodeArray = passNodeArray;
exports.passNodeWithNewModifiers = passNodeWithNewModifiers;
exports.passString = passString;
exports.passStringArray = passStringArray;
exports.scriptFunctionHasBody = scriptFunctionHasBody;
exports.unpackNode = unpackNode;
exports.unpackNodeArray = unpackNodeArray;
exports.unpackNonNullableNode = unpackNonNullableNode;
exports.unpackNonNullableObject = unpackNonNullableObject;
exports.unpackObject = unpackObject;
exports.unpackString = unpackString;
exports.updateNodeByNode = updateNodeByNode;
exports.updatePeerByNode = updatePeerByNode;
exports.updateThenAttach = updateThenAttach;
var _global = require("../static/global");
var _utils = require("../../utils");
var _interop = require("#koalaui/interop");
var _nativePtrDecoder = require("./nativePtrDecoder");
var _Es2pandaEnums = require("../../generated/Es2pandaEnums");
var _classByPeer = require("../class-by-peer");
var _Es2pandaEnums2 = require("../../Es2pandaEnums");
var _this = void 0;
/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
function _newArrowCheck(n, r) { if (n !== r) throw new TypeError("Cannot instantiate an arrow function"); }
const arrayOfNullptr = exports.arrayOfNullptr = new BigUint64Array([_interop.nullptr]);
const allFlags = exports.allFlags = Object.values(_Es2pandaEnums.Es2pandaModifierFlags).filter(_utils.isNumber).reduce(function (prev, next) {
  _newArrowCheck(this, _this);
  return prev | next;
}.bind(void 0), 0);
function assertValidPeer(peer, expectedKind) {
  if (peer === _interop.nullptr) {
    (0, _utils.throwError)(`invalid peer`);
  }
  const peerType = _global.global.generatedEs2panda._AstNodeTypeConst(_global.global.context, peer);
  if (peerType !== expectedKind) {
    (0, _utils.throwError)(`expected: ${_Es2pandaEnums2.Es2pandaAstNodeType[expectedKind]}, got: ${_Es2pandaEnums2.Es2pandaAstNodeType[peerType]}`);
  }
}
function acceptNativeObjectArrayResult(arrayObject, factory) {
  return new _nativePtrDecoder.NativePtrDecoder().decode(arrayObject).map(factory);
}
function unpackNonNullableNode(peer) {
  if (peer === _interop.nullptr) {
    (0, _utils.throwError)('peer is NULLPTR (maybe you should use unpackNode)');
  }
  return (0, _classByPeer.classByPeer)(peer);
}
function unpackNode(peer) {
  if (peer === _interop.nullptr) {
    return undefined;
  }
  return (0, _classByPeer.classByPeer)(peer);
}
function passNode(node) {
  return node?.peer ?? _interop.nullptr;
}

// meaning unpackNonNullableNodeArray
function unpackNodeArray(nodesPtr) {
  var _this2 = this;
  if (nodesPtr === _interop.nullptr) {
    (0, _utils.throwError)('nodesPtr is NULLPTR (maybe you should use unpackNodeArray)');
  }
  return new _nativePtrDecoder.NativePtrDecoder().decode(nodesPtr).map(function (peer) {
    _newArrowCheck(this, _this2);
    return unpackNonNullableNode(peer);
  }.bind(this));
}
function passNodeArray(nodes) {
  var _this3 = this;
  return new BigUint64Array(nodes?.map(function (node) {
    _newArrowCheck(this, _this3);
    return BigInt(node.peer);
  }.bind(this)) ?? []);
}
function unpackNonNullableObject(Type, peer) {
  if (peer === _interop.nullptr) {
    (0, _utils.throwError)('peer is NULLPTR (maybe you should use unpackObject)');
  }
  return new Type(peer);
}
function unpackObject(Type, peer) {
  if (peer === _interop.nullptr) {
    return undefined;
  }
  return new Type(peer);
}
function unpackString(peer) {
  return (0, _interop.withStringResult)(peer) ?? (0, _utils.throwError)(`failed to unpack (peer shouldn't be NULLPTR)`);
}
function passString(str) {
  var _this4 = this;
  if (str === undefined) {
    return '';
  }
  return (0, _interop.withString)(str, function (it) {
    _newArrowCheck(this, _this4);
    return it;
  }.bind(this));
}
function passStringArray(strings) {
  var _this5 = this;
  return (0, _interop.withStringArray)(strings, function (it) {
    _newArrowCheck(this, _this5);
    return it;
  }.bind(this));
}
function passNodeWithNewModifiers(node, modifiers) {
  return unpackNonNullableNode(node.peer).updateModifiers(modifiers);
}
function scriptFunctionHasBody(peer) {
  const flags = _global.global.generatedEs2panda._ScriptFunctionFlagsConst(_global.global.context, peer);
  return (flags & _Es2pandaEnums.Es2pandaScriptFunctionFlags.SCRIPT_FUNCTION_FLAGS_EXTERNAL) === 0 && (flags & _Es2pandaEnums.Es2pandaScriptFunctionFlags.SCRIPT_FUNCTION_FLAGS_EXTERNAL_OVERLOAD) === 0;
}

// TODO: remove this
// TODO: update scopes and other data
function updatePeerByNode(peer, original) {
  if (peer === _interop.nullptr) {
    (0, _utils.throwError)('updatePeerByNode called on NULLPTR');
  }
  if (original === undefined) {
    return peer;
  }
  _global.global.generatedEs2panda._AstNodeSetOriginalNode(_global.global.context, peer, original.peer);
  _global.global.generatedEs2panda._AstNodeSetParent(_global.global.context, peer, _global.global.generatedEs2panda._AstNodeParent(_global.global.context, original.peer));
  _global.global.es2panda._AstNodeUpdateChildren(_global.global.context, peer);
  _global.global.generatedEs2panda._AstNodeClearModifier(_global.global.context, peer, allFlags);
  _global.global.generatedEs2panda._AstNodeAddModifier(_global.global.context, peer, original.modifiers);
  _global.global.es2panda._AstNodeUpdateChildren(_global.global.context, peer);
  return peer;
}

// TODO: update scopes and other data
function updateNodeByNode(node, original) {
  if (original.peer === _interop.nullptr) {
    (0, _utils.throwError)('update called on NULLPTR');
  }
  _global.global.generatedEs2panda._AstNodeSetOriginalNode(_global.global.context, node.peer, original.peer);
  _global.global.generatedEs2panda._AstNodeSetParent(_global.global.context, node.peer, _global.global.generatedEs2panda._AstNodeParent(_global.global.context, original.peer));
  _global.global.es2panda._AstNodeUpdateChildren(_global.global.context, node.peer);
  return node;
}

/**
 * @deprecated
 */
function compose(create, update = updateNodeByNode) {
  var _this6 = this;
  return function (node, ...args) {
    _newArrowCheck(this, _this6);
    return update(create(...args), node);
  }.bind(this);
}
function updateThenAttach(update, ...attachFuncs) {
  var _this7 = this;
  return function (node, ...args) {
    var _this8 = this;
    _newArrowCheck(this, _this7);
    let _node = update(node, ...args);
    attachFuncs.forEach(function (attach) {
      _newArrowCheck(this, _this8);
      _node = attach(_node, node);
    }.bind(this));
    return _node;
  }.bind(this);
}
function attachModifiers(node, original) {
  node.modifiers = original.modifiers;
  return node;
}