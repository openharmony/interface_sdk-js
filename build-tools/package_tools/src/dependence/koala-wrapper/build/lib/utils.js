"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterSource = filterSource;
exports.getEnumName = getEnumName;
exports.isNumber = isNumber;
exports.throwError = throwError;
exports.withWarning = withWarning;
function _newArrowCheck(n, r) { if (n !== r) throw new TypeError("Cannot instantiate an arrow function"); }
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

function throwError(error) {
  throw new Error(error);
}
function withWarning(value, message) {
  console.warn(message);
  return value;
}
function isNumber(value) {
  return typeof value === `number`;
}
function replacePercentOutsideStrings(code) {
  var _this = this;
  const stringPattern = /("[^"]*"|'[^']*'|`[^`]*`)/g;
  const percentPattern = /(?<!["'`])(%)(?![\d\s])/g;
  const strings = code.match(stringPattern) || [];
  let placeholderCounter = 0;
  const placeholderMap = new Map();
  strings.forEach(function (string) {
    _newArrowCheck(this, _this);
    const placeholder = `__STRING_PLACEHOLDER_${placeholderCounter++}__`;
    placeholderMap.set(placeholder, string);
    code = code.replace(string, placeholder);
  }.bind(this));
  code = code.replace(percentPattern, '_');
  placeholderMap.forEach(function (originalString, placeholder) {
    _newArrowCheck(this, _this);
    code = code.replace(new RegExp(placeholder, 'g'), originalString);
  }.bind(this));
  return code;
}
function replaceIllegalHashes(code) {
  var _this2 = this;
  const stringPattern = /("[^"]*"|'[^']*'|`[^`]*`)/g;
  const strings = code.match(stringPattern) || [];
  let placeholderCounter = 0;
  const placeholderMap = new Map();
  strings.forEach(function (string) {
    _newArrowCheck(this, _this2);
    const placeholder = `__STRING_PLACEHOLDER_${placeholderCounter++}__`;
    placeholderMap.set(placeholder, string);
    code = code.replace(string, placeholder);
  }.bind(this));
  code = code.replace(/#/g, '_');
  placeholderMap.forEach(function (originalString, placeholder) {
    _newArrowCheck(this, _this2);
    code = code.replace(new RegExp(placeholder, 'g'), originalString);
  }.bind(this));
  return code;
}

/*
    TODO:
     The lowerings insert %% and other special symbols into names of temporary variables.
     Until we keep feeding ast dumps back to the parser this function is needed.
 */
function filterSource(text) {
  const filtered = replaceIllegalHashes(replacePercentOutsideStrings(text)).replaceAll("<cctor>", "_cctor_");
  return filtered;
}
function getEnumName(enumType, value) {
  return enumType[value];
}