"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Performance = void 0;
var _Performance;
function _newArrowCheck(n, r) { if (n !== r) throw new TypeError("Cannot instantiate an arrow function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
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

function formatTime(ms) {
  const milliseconds = Math.floor(ms % 1000);
  const seconds = Math.floor(ms / 1000 % 60);
  const minutes = Math.floor(ms / (1000 * 60) % 60);
  const hours = Math.floor(ms / (1000 * 60 * 60));
  return `${pad(hours, 2)}:${pad(minutes, 2)}:${pad(seconds, 2)}:${pad(milliseconds, 3)}`;
}
function pad(value, length) {
  return value.toString().padStart(length, '0');
}
function round(value, index = 2) {
  const factor = Math.pow(10, index);
  return Math.round(value * factor) / factor;
}
class Performance {
  constructor() {
    _defineProperty(this, "events", void 0);
    _defineProperty(this, "historyEvents", new Map());
    _defineProperty(this, "scopes", void 0);
    _defineProperty(this, "shouldSkip", void 0);
    _defineProperty(this, "totalDuration", void 0);
    this.events = new Map();
    this.historyEvents = new Map();
    this.scopes = [];
    this.shouldSkip = true;
    this.totalDuration = 0;
  }
  static getInstance() {
    if (!this.instance) {
      this.instance = new Performance();
    }
    return this.instance;
  }
  skip(shouldSkip = true) {
    this.shouldSkip = shouldSkip;
  }
  createEvent(name) {
    if (this.shouldSkip) {
      return {
        name: '',
        startTime: 0
      };
    }
    const startTime = performance.now();
    const newEvent = {
      name,
      startTime
    };
    this.events.set(name, newEvent);
    this.scopes.push(name);
    return newEvent;
  }
  stopEvent(name, shouldLog = false) {
    if (this.shouldSkip) {
      return {
        name: '',
        startTime: 0
      };
    }
    if (!this.events.has(name) || this.scopes.length === 0) {
      throw new Error(`Event ${name} is not created.`);
    }
    if (this.scopes[this.scopes.length - 1] !== name) {
      console.warn(`[PERFORMANCE WARNING] Event ${name} early exit.`);
    }
    this.scopes.pop();
    const event = this.events.get(name);
    const endTime = performance.now();
    const parentEvent = this.scopes[this.scopes.length - 1];
    const duration = endTime - event.startTime;
    if (!parentEvent) {
      this.totalDuration += duration;
    }
    if (shouldLog) {
      console.log(`[PERFORMANCE] name: ${event.name}, parent: ${parentEvent}, duration: ${formatTime(duration)}(${round(duration)}), total: ${formatTime(this.totalDuration)}(${round(this.totalDuration)})`);
    }
    const newEvent = {
      ...event,
      endTime,
      parentEvent,
      duration
    };
    const history = this.historyEvents.get(parentEvent ?? null) || [];
    this.historyEvents.set(parentEvent ?? null, [...history, newEvent]);
    return newEvent;
  }
  stopLastEvent(shouldLog = false) {
    if (this.shouldSkip) {
      return {
        name: '',
        startTime: 0
      };
    }
    if (this.scopes.length === 0) {
      throw new Error("No last event");
    }
    const name = this.scopes.pop();
    if (!this.events.has(name)) {
      throw new Error(`Event ${name} is not created.`);
    }
    const event = this.events.get(name);
    const endTime = performance.now();
    const parentEvent = this.scopes[this.scopes.length - 1];
    const duration = endTime - event.startTime;
    if (!parentEvent) {
      this.totalDuration += duration;
    }
    if (shouldLog) {
      console.log(`[PERFORMANCE] name: ${event.name}, parent: ${parentEvent}, duration: ${formatTime(duration)}(${round(duration)}), total: ${formatTime(this.totalDuration)}(${round(this.totalDuration)})`);
    }
    const newEvent = {
      ...event,
      endTime,
      parentEvent,
      duration
    };
    const history = this.historyEvents.get(parentEvent ?? null) || [];
    this.historyEvents.set(parentEvent ?? null, [...history, newEvent]);
    return newEvent;
  }
  clearAllEvents(shouldLog = false) {
    if (this.shouldSkip) {
      return;
    }
    for (let i = 0; i < this.scopes.length; i++) {
      this.stopLastEvent(shouldLog);
    }
    this.events = new Map();
  }
  clearTotalDuration() {
    this.totalDuration = 0;
  }
  clearHistory() {
    this.historyEvents = new Map();
  }
  visualizeEvents(shouldLog = false) {
    if (this.shouldSkip) {
      return;
    }
    const that = this;
    function buildVisualization(parentKey, indentLevel) {
      var _this = this;
      const children = that.historyEvents.get(parentKey) || [];
      let result = '';
      children.forEach(function (child) {
        _newArrowCheck(this, _this);
        const indent = '  '.repeat(indentLevel);
        const duration = child.duration ?? 0;
        const [_result, count] = buildVisualization(child.name, indentLevel + 1);
        result += `${indent}- ${child.name}: ${formatTime(duration)}(${round(duration)}), ${count}\n`;
        result += _result;
      }.bind(this));
      return [result, children.length];
    }
    const [finalResult, _] = buildVisualization(null, 0);
    if (shouldLog) {
      console.log(`[PERFORMANCE] ===== FINAL RESULT ====`);
      console.log(`TOTAL: ${formatTime(this.totalDuration)}(${round(this.totalDuration)})`);
      console.log(finalResult.trimEnd());
      console.log(`[PERFORMANCE] ===== FINAL RESULT ====`);
    }
  }
}
exports.Performance = Performance;
_Performance = Performance;
_defineProperty(Performance, "instance", void 0);