"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classByPeer = classByPeer;
exports.clearNodeCache = clearNodeCache;
exports.getOrPut = getOrPut;
exports.nodeByType = void 0;
var _utils = require("../utils");
var _global = require("./static/global");
var _interop = require("#koalaui/interop");
var _AstNode = require("./peers/AstNode");
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
const nodeByType = exports.nodeByType = new Map([]);
const cache = new Map();
function clearNodeCache() {
  cache.clear();
}
function getOrPut(peer, create) {
  if (cache.has(peer)) {
    return cache.get(peer);
  }
  const newNode = create(peer);
  cache.set(peer, newNode);
  return newNode;
}
function classByPeer(peer) {
  var _this = this;
  if (peer === _interop.nullptr) {
    (0, _utils.throwError)('classByPeer: peer is NULLPTR');
  }
  const type = _global.global.generatedEs2panda._AstNodeTypeConst(_global.global.context, peer);
  const node = nodeByType.get(type) ?? _AstNode.UnsupportedNode;
  return getOrPut(peer, function (peer) {
    _newArrowCheck(this, _this);
    return new node(peer);
  }.bind(this));
}