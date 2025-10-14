"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NodeCache = void 0;
var _AstNode = require("../peers/AstNode");
var _global = require("../static/global");
var _classByPeer = require("../class-by-peer");
var _NodeCache;
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
class NodeCache {
  constructor() {
    _defineProperty(this, "_isCollected", false);
    _defineProperty(this, "cacheMap", void 0);
    this.cacheMap = new Map();
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new NodeCache();
    }
    return this.instance;
  }
  collect(node, metadata) {
    const peer = node.peer;
    const type = _global.global.generatedEs2panda._AstNodeTypeConst(_global.global.context, node.peer);
    let currMetadata = metadata ?? {};
    if (this.cacheMap.has(peer)) {
      const oldMetadata = this.cacheMap.get(peer).metadata ?? {};
      currMetadata = {
        ...oldMetadata,
        ...currMetadata
      };
    }
    currMetadata = Object.keys(currMetadata).length === 0 ? undefined : currMetadata;
    this.cacheMap.set(peer, {
      peer,
      type,
      metadata: currMetadata
    });
    this._isCollected = true;
  }
  refresh(original, node) {
    let metadata;
    if (this.has(original)) {
      metadata = this.get(original)?.metadata;
      this.cacheMap.delete(original.peer);
    }
    this.collect(node, metadata);
  }
  isCollected() {
    return this._isCollected;
  }
  has(node) {
    return this.cacheMap.has(node.peer);
  }
  get(node) {
    return this.cacheMap.get(node.peer);
  }
  clear() {
    this.cacheMap.clear();
    this._isCollected = false;
  }
  visualize() {
    var _this = this;
    Array.from(this.cacheMap.values()).forEach(function ({
      peer,
      type,
      metadata
    }) {
      var _this2 = this;
      _newArrowCheck(this, _this);
      const node = _classByPeer.nodeByType.get(type) ?? _AstNode.UnsupportedNode;
      const newNode = (0, _classByPeer.getOrPut)(peer, function (peer) {
        _newArrowCheck(this, _this2);
        return new node(peer);
      }.bind(this));
      console.log(`[NODE CACHE] ptr ${peer}, type: ${type}, metadata: ${JSON.stringify(metadata)}, node: `, newNode.dumpSrc());
    }.bind(this));
  }
}
exports.NodeCache = NodeCache;
_NodeCache = NodeCache;
_defineProperty(NodeCache, "instance", void 0);