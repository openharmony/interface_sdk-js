"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isArrowFunctionExpression = isArrowFunctionExpression;
exports.isAssignmentExpression = isAssignmentExpression;
exports.isCallExpression = isCallExpression;
exports.isEtsParameterExpression = isEtsParameterExpression;
exports.isEtsScript = isEtsScript;
exports.isExpressionStatement = isExpressionStatement;
exports.isFunctionDeclaration = isFunctionDeclaration;
exports.isFunctionExpression = isFunctionExpression;
exports.isIfStatement = isIfStatement;
exports.isMemberExpression = isMemberExpression;
exports.isMethodDefinition = isMethodDefinition;
exports.isNumberLiteral = isNumberLiteral;
exports.isStructDeclaration = isStructDeclaration;
exports.isVariableDeclaration = isVariableDeclaration;
exports.isVariableDeclarator = isVariableDeclarator;
var _global = require("../static/global");
var _types = require("../types");
var _MemberExpression = require("../to-be-generated/MemberExpression");
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

function isCallExpression(node) {
  return node instanceof _types.CallExpression;
}
function isMemberExpression(node) {
  return node instanceof _MemberExpression.MemberExpression;
}
function isFunctionDeclaration(node) {
  return node instanceof _types.FunctionDeclaration;
}
function isMethodDefinition(node) {
  return _global.global.es2panda._IsMethodDefinition(node.peer);
}
function isEtsScript(node) {
  return node instanceof _types.EtsScript;
}
function isExpressionStatement(node) {
  return node instanceof _types.ExpressionStatement;
}
function isArrowFunctionExpression(node) {
  return node instanceof _types.ArrowFunctionExpression;
}
function isStructDeclaration(node) {
  return node instanceof _types.StructDeclaration;
}
function isFunctionExpression(node) {
  return node instanceof _types.FunctionExpression;
}
function isEtsParameterExpression(node) {
  return node instanceof _types.ETSParameterExpression;
}
function isVariableDeclaration(node) {
  return node instanceof _types.VariableDeclaration;
}

// export function isScriptFunction(node: AstNode): node is ScriptFunction {
//     return node instanceof ScriptFunction
// }

function isIfStatement(node) {
  return node instanceof _types.IfStatement;
}
function isVariableDeclarator(node) {
  return node instanceof _types.VariableDeclarator;
}
function isAssignmentExpression(node) {
  return node instanceof _types.AssignmentExpression;
}
function isNumberLiteral(node) {
  return node instanceof _types.NumberLiteral;
}