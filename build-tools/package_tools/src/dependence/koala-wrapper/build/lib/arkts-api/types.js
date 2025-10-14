"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VariableDeclarator = exports.VariableDeclaration = exports.TSUnionType = exports.SuperExpression = exports.StructDeclaration = exports.NumberLiteral = exports.MethodDefinition = exports.IfStatement = exports.FunctionExpression = exports.FunctionDeclaration = exports.ExpressionStatement = exports.EtsScript = exports.ETSStringLiteralType = exports.ETSParameterExpression = exports.CallExpression = exports.AssignmentExpression = exports.ArrowFunctionExpression = void 0;
var _global = require("./static/global");
var _interop = require("#koalaui/interop");
var _Es2pandaEnums = require("../generated/Es2pandaEnums");
var _private = require("./utilities/private");
var _public = require("./utilities/public");
var _Es2pandaEnums2 = require("../Es2pandaEnums");
var _AstNode = require("./peers/AstNode");
var _Config = require("./peers/Config");
var _Context = require("./peers/Context");
var _classByPeer = require("./class-by-peer");
var _MemberExpression = require("./to-be-generated/MemberExpression");
var _generated = require("../generated");
var _this = void 0;
function _newArrowCheck(n, r) { if (n !== r) throw new TypeError("Cannot instantiate an arrow function"); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /*
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
class EtsScript extends _AstNode.AstNode {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_MODULE);
    super(peer);
  }
  static fromContext() {
    console.log('[TS WRAPPER] GET AST FROM CONTEXT');
    return new EtsScript(_global.global.es2panda._ProgramAst(_global.global.context, _global.global.es2panda._ContextProgram(_global.global.context)));
  }

  /**
   * @deprecated
   */
  static createFromSource(source, state = _Es2pandaEnums.Es2pandaContextState.ES2PANDA_STATE_PARSED) {
    if (!_global.global.configIsInitialized()) {
      _global.global.config = _Config.Config.createDefault().peer;
    }
    _global.global.compilerContext = _Context.Context.createFromString(source);
    (0, _public.proceedToState)(state, _global.global.context);
    return new EtsScript(_global.global.es2panda._ProgramAst(_global.global.context, _global.global.es2panda._ContextProgram(_global.global.context)));
  }

  /**
   * @deprecated
   */
  static updateByStatements(node, statements) {
    _global.global.generatedEs2panda._BlockStatementSetStatements(_global.global.context, node.peer, (0, _private.passNodeArray)(statements), statements.length);
    return node;
  }
  get statements() {
    return (0, _private.unpackNodeArray)(_global.global.generatedEs2panda._BlockStatementStatements(_global.global.context, this.peer));
  }
  set statements(nodes) {
    _global.global.generatedEs2panda._BlockStatementSetStatements(_global.global.context, this.peer, (0, _private.passNodeArray)(nodes), nodes.length);
  }
}
exports.EtsScript = EtsScript;
class ExpressionStatement extends _AstNode.AstNode {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_EXPRESSION_STATEMENT);
    super(peer);
  }
  static create(expression) {
    return new ExpressionStatement(_global.global.generatedEs2panda._CreateExpressionStatement(_global.global.context, expression.peer));
  }
  static update(node, expression) {
    return new ExpressionStatement(_global.global.generatedEs2panda._UpdateExpressionStatement(_global.global.context, node.peer, expression.peer));
  }
  get expression() {
    return (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._ExpressionStatementGetExpressionConst(_global.global.context, this.peer));
  }
  /** @deprecated */
  setExpression(expr) {
    _global.global.generatedEs2panda._ExpressionStatementSetExpression(_global.global.context, this.peer, (0, _private.passNode)(expr));
    return this;
  }
}

// TODO:
//  the CallExpression idl Create signature doesn't include the trailing block at all.
//  Need to clarify with the compiler people if they will provide create signature with a trailing block argument.
exports.ExpressionStatement = ExpressionStatement;
class CallExpression extends _generated.Expression {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_CALL_EXPRESSION);
    super(peer);
    _defineProperty(this, "expression", void 0);
    // Expression
    _defineProperty(this, "typeArguments", void 0);
    _defineProperty(this, "arguments", void 0);
    _defineProperty(this, "typeParams", void 0);
    this.expression = (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._CallExpressionCallee(_global.global.context, this.peer));
    this.typeParams = (0, _private.unpackNode)(_global.global.generatedEs2panda._CallExpressionTypeParams(_global.global.context, this.peer));
    this.typeArguments = this.typeParams ? (0, _private.unpackNodeArray)(_global.global.generatedEs2panda._TSTypeParameterInstantiationParamsConst(_global.global.context, this.typeParams.peer)) : undefined;
    this.arguments = (0, _private.unpackNodeArray)(_global.global.generatedEs2panda._CallExpressionArguments(_global.global.context, this.peer));
  }
  static create(expression, typeArguments, args, isOptional = false, trailingComma = false) {
    const peer = _global.global.generatedEs2panda._CreateCallExpression(_global.global.context, (0, _private.passNode)(expression), (0, _private.passNodeArray)(args), args?.length ?? 0, typeArguments ? (0, _private.passNode)(_generated.TSTypeParameterInstantiation.createTSTypeParameterInstantiation(typeArguments)) : _interop.nullptr, isOptional, trailingComma);
    return new CallExpression(peer);
  }
  static update(node, expression, typeArguments, args, isOptional = false, trailingComma = false) {
    const peer = _global.global.es2panda._UpdateCallExpression(_global.global.context, node.peer, (0, _private.passNode)(expression), (0, _private.passNodeArray)(args), args?.length ?? 0, typeArguments ? (0, _private.passNode)(_generated.TSTypeParameterInstantiation.createTSTypeParameterInstantiation(typeArguments)) : _interop.nullptr, isOptional, trailingComma);
    return new CallExpression(peer);
  }
  get trailingBlock() {
    return (0, _private.unpackNode)(_global.global.generatedEs2panda._CallExpressionTrailingBlockConst(_global.global.context, this.peer));
  }
  setTralingBlock(trailingBlock) {
    if (!trailingBlock) return this;
    _global.global.generatedEs2panda._CallExpressionSetTrailingBlock(_global.global.context, this.peer, trailingBlock.peer);
    return this;
  }

  /** @deprecated */
  setCallee(callee) {
    _global.global.generatedEs2panda._CallExpressionSetCallee(_global.global.context, this.peer, (0, _private.passNode)(callee));
    return this;
  }

  /** @deprecated */
  setTypeParams(typeParams) {
    _global.global.generatedEs2panda._CallExpressionSetTypeParams(_global.global.context, this.peer, (0, _private.passNode)(typeParams));
    return this;
  }
  get hasTrailingComma() {
    return _global.global.generatedEs2panda._CallExpressionHasTrailingCommaConst(_global.global.context, this.peer);
  }
  get isTrailingCall() {
    return _global.global.es2panda._CallExpressionIsTrailingCallConst(_global.global.context, this.peer);
  }
}
exports.CallExpression = CallExpression;
class AssignmentExpression extends _AstNode.AstNode {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_ASSIGNMENT_EXPRESSION);
    super(peer);
  }
  static create(left, assignmentOperator, right) {
    return new AssignmentExpression(_global.global.generatedEs2panda._CreateAssignmentExpression(_global.global.context, (0, _private.passNode)(left), (0, _private.passNode)(right), assignmentOperator));
  }
  static update(node, left, assignmentOperator, right) {
    return new AssignmentExpression(_global.global.generatedEs2panda._UpdateAssignmentExpression(_global.global.context, node.peer, (0, _private.passNode)(left), (0, _private.passNode)(right), assignmentOperator));
  }
  get left() {
    return (0, _private.unpackNode)(_global.global.generatedEs2panda._AssignmentExpressionLeftConst(_global.global.context, this.peer));
  }
  get right() {
    return (0, _private.unpackNode)(_global.global.generatedEs2panda._AssignmentExpressionRightConst(_global.global.context, this.peer));
  }
  get operatorType() {
    return _global.global.generatedEs2panda._AssignmentExpressionOperatorTypeConst(_global.global.context, this.peer);
  }
  /** @deprecated */
  setRight(expr) {
    _global.global.generatedEs2panda._AssignmentExpressionSetRight(_global.global.context, this.peer, (0, _private.passNode)(expr));
    return this;
  }
  /** @deprecated */
  setLeft(expr) {
    _global.global.generatedEs2panda._AssignmentExpressionSetLeft(_global.global.context, this.peer, (0, _private.passNode)(expr));
    return this;
  }
  setOperatorType(operatorType) {
    _global.global.generatedEs2panda._AssignmentExpressionSetOperatorType(_global.global.context, this.peer, operatorType);
    return this;
  }
}
exports.AssignmentExpression = AssignmentExpression;
class TSUnionType extends _AstNode.AstNode {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNION_TYPE);
    super(peer);
    _defineProperty(this, "types", void 0);
    this.types = (0, _private.unpackNodeArray)(_global.global.generatedEs2panda._TSUnionTypeTypesConst(_global.global.context, this.peer));
  }
  static create(node, types) {
    return new TSUnionType((0, _private.updatePeerByNode)(_global.global.generatedEs2panda._CreateTSUnionType(_global.global.context, (0, _private.passNodeArray)(types), types.length), node));
  }
}
exports.TSUnionType = TSUnionType;
class NumberLiteral extends _generated.Literal {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_NUMBER_LITERAL);
    super(peer);
    _defineProperty(this, "value", 0.0);
    this.value = 0.0;
  }
  static create(value) {
    return new NumberLiteral(_global.global.es2panda._CreateNumberLiteral(_global.global.context, value));
  }
  dumpMessage() {
    return ` <value: ${this.value}>`;
  }
}
exports.NumberLiteral = NumberLiteral;
class ArrowFunctionExpression extends _generated.Expression {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_ARROW_FUNCTION_EXPRESSION);
    super(peer);
    _defineProperty(this, "scriptFunction", void 0);
    this.scriptFunction = (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._ArrowFunctionExpressionFunction(_global.global.context, this.peer));
  }
  static create(func) {
    return new ArrowFunctionExpression(_global.global.generatedEs2panda._CreateArrowFunctionExpression(_global.global.context, (0, _private.passNode)(func)));
  }
  static update(node, func) {
    return new ArrowFunctionExpression(_global.global.generatedEs2panda._UpdateArrowFunctionExpression(_global.global.context, node.peer, (0, _private.passNode)(func)));
  }
  get annotations() {
    return (0, _private.unpackNodeArray)(_global.global.generatedEs2panda._ArrowFunctionExpressionAnnotations(_global.global.context, this.peer));
  }
  setAnnotations(annotations) {
    _global.global.generatedEs2panda._ArrowFunctionExpressionSetAnnotations(_global.global.context, this.peer, (0, _private.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.ArrowFunctionExpression = ArrowFunctionExpression;
class FunctionDeclaration extends _AstNode.AstNode {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_DECLARATION);
    super(peer);
    _defineProperty(this, "scriptFunction", void 0);
    _defineProperty(this, "parameters", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "body", void 0);
    _defineProperty(this, "typeParamsDecl", void 0);
    _defineProperty(this, "returnType", void 0);
    _defineProperty(this, "isAnon", void 0);
    this.scriptFunction = (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._FunctionDeclarationFunction(_global.global.context, this.peer));
    this.parameters = (0, _private.unpackNodeArray)(_global.global.generatedEs2panda._ScriptFunctionParams(_global.global.context, this.scriptFunction.peer));
    this.name = (0, _private.unpackNode)(_global.global.generatedEs2panda._ScriptFunctionId(_global.global.context, this.scriptFunction.peer));
    this.body = (0, _private.unpackNode)(_global.global.generatedEs2panda._ScriptFunctionBody(_global.global.context, this.scriptFunction.peer));
    this.typeParamsDecl = (0, _private.unpackNode)(_global.global.generatedEs2panda._ScriptFunctionTypeParams(_global.global.context, this.scriptFunction.peer));
    this.returnType = (0, _private.unpackNode)(_global.global.generatedEs2panda._ScriptFunctionReturnTypeAnnotation(_global.global.context, this.scriptFunction.peer));
    this.isAnon = _global.global.generatedEs2panda._FunctionDeclarationIsAnonymousConst(_global.global.context, this.peer);
  }
  static create(scriptFunction, isAnon, annotations) {
    const res = new FunctionDeclaration(_global.global.es2panda._CreateFunctionDeclaration(_global.global.context, scriptFunction.peer,
    // TODO: support annotations
    _private.arrayOfNullptr, 0, isAnon));
    // TODO: maybe wrong
    res.modifiers = scriptFunction.modifiers;
    if (annotations) {
      res.annotations = annotations;
    }
    return res;
  }
  static update(node, scriptFunction, isAnon, annotations) {
    const res = new FunctionDeclaration(_global.global.generatedEs2panda._UpdateFunctionDeclaration(_global.global.context, node.peer, scriptFunction.peer,
    // TODO: support annotations
    (0, _private.passNodeArray)(annotations), 0, isAnon));
    if (annotations) {
      res.annotations = annotations;
    }
    return res;
  }
  get annotations() {
    return (0, _private.unpackNodeArray)(_global.global.generatedEs2panda._FunctionDeclarationAnnotationsConst(_global.global.context, this.peer));
  }
  set annotations(newAnnotations) {
    _global.global.generatedEs2panda._FunctionDeclarationSetAnnotations(_global.global.context, this.peer, (0, _private.passNodeArray)(newAnnotations), newAnnotations.length);
  }
}
exports.FunctionDeclaration = FunctionDeclaration;
class FunctionExpression extends _AstNode.AstNode {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_EXPRESSION);
    super(peer);
    _defineProperty(this, "scriptFunction", void 0);
    this.scriptFunction = (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._FunctionExpressionFunction(_global.global.context, this.peer));
  }
  static create(expression) {
    return new FunctionExpression(_global.global.generatedEs2panda._CreateFunctionExpression(_global.global.context, (0, _private.passNode)(expression)));
  }
  static update(node, expression) {
    return new FunctionExpression(_global.global.generatedEs2panda._UpdateFunctionExpression(_global.global.context, node.peer, (0, _private.passNode)(expression)));
  }
}
exports.FunctionExpression = FunctionExpression;
class ETSParameterExpression extends _generated.Expression {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PARAMETER_EXPRESSION);
    super(peer);
  }
  static create(identifier, initializer) {
    if (initializer !== undefined) {
      return new ETSParameterExpression(_global.global.generatedEs2panda._CreateETSParameterExpression1(_global.global.context, (0, _private.passNode)(identifier), (0, _private.passNode)(initializer)));
    }
    return new ETSParameterExpression(_global.global.generatedEs2panda._CreateETSParameterExpression(_global.global.context, (0, _private.passNode)(identifier), false));
  }
  static update(node, identifier, initializer) {
    if (initializer !== undefined) {
      return new ETSParameterExpression(_global.global.generatedEs2panda._UpdateETSParameterExpression1(_global.global.context, node.peer, (0, _private.passNode)(identifier), (0, _private.passNode)(initializer)));
    }
    return new ETSParameterExpression(_global.global.generatedEs2panda._UpdateETSParameterExpression(_global.global.context, node.peer, (0, _private.passNode)(identifier), false));
  }
  get annotations() {
    return (0, _private.unpackNodeArray)(_global.global.es2panda._ETSParameterExpressionAnnotations(_global.global.context, this.peer, _interop.nullptr));
  }
  set annotations(newAnnotations) {
    _global.global.es2panda._ETSParameterExpressionSetAnnotations(_global.global.context, this.peer, (0, _private.passNodeArray)(newAnnotations), newAnnotations.length);
  }
  get type() {
    return (0, _private.unpackNode)(_global.global.generatedEs2panda._ETSParameterExpressionTypeAnnotation(_global.global.context, this.peer));
  }
  set type(t) {
    if (t === undefined) return;
    _global.global.generatedEs2panda._ETSParameterExpressionSetTypeAnnotation(_global.global.context, this.peer, t.peer);
  }
  get optional() {
    return _global.global.generatedEs2panda._ETSParameterExpressionIsOptionalConst(_global.global.context, this.peer);
  }
  get initializer() {
    return (0, _private.unpackNode)(_global.global.generatedEs2panda._ETSParameterExpressionInitializerConst(_global.global.context, this.peer));
  }

  /** @deprecated */
  setInitializer(initExpr) {
    _global.global.generatedEs2panda._ETSParameterExpressionSetInitializer(_global.global.context, this.peer, (0, _private.passNode)(initExpr));
    return this;
  }
  setOptional(value) {
    _global.global.generatedEs2panda._ETSParameterExpressionSetOptional(_global.global.context, this.peer, value);
    return this;
  }
  get identifier() {
    return (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._ETSParameterExpressionIdentConst(_global.global.context, this.peer));
  }

  /** @deprecated */
  setIdent(ident) {
    _global.global.generatedEs2panda._ETSParameterExpressionSetIdent(_global.global.context, this.peer, (0, _private.passNode)(ident));
    return this;
  }
}
exports.ETSParameterExpression = ETSParameterExpression;
class IfStatement extends _AstNode.AstNode {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT);
    super(peer);
    _defineProperty(this, "test", void 0);
    _defineProperty(this, "consequent", void 0);
    _defineProperty(this, "alternate", void 0);
    this.test = (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._IfStatementTest(_global.global.context, this.peer));
    this.consequent = (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._IfStatementConsequent(_global.global.context, this.peer));
    this.alternate = (0, _private.unpackNode)(_global.global.generatedEs2panda._IfStatementAlternate(_global.global.context, this.peer));
  }
  static create(test, consequent, alternate) {
    return new IfStatement(_global.global.generatedEs2panda._CreateIfStatement(_global.global.context, (0, _private.passNode)(test), (0, _private.passNode)(consequent), (0, _private.passNode)(alternate)));
  }
  static update(node, test, consequent, alternate) {
    return new IfStatement(_global.global.generatedEs2panda._UpdateIfStatement(_global.global.context, node.peer, (0, _private.passNode)(test), (0, _private.passNode)(consequent), (0, _private.passNode)(alternate)));
  }
}
exports.IfStatement = IfStatement;
class StructDeclaration extends _AstNode.AstNode {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_STRUCT_DECLARATION);
    super(peer);
    // TODO: is struct definition the same as struct definition?
    _defineProperty(this, "definition", void 0);
    this.definition = (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._ClassDeclarationDefinition(_global.global.context, this.peer));
  }
  static create(definition) {
    return new StructDeclaration(_global.global.generatedEs2panda._CreateETSStructDeclaration(_global.global.context, (0, _private.passNode)(definition)));
  }
  static update(node, definition) {
    return new StructDeclaration(_global.global.generatedEs2panda._UpdateETSStructDeclaration(_global.global.context, node.peer, (0, _private.passNode)(definition)));
  }
}
exports.StructDeclaration = StructDeclaration;
class MethodDefinition extends _AstNode.AstNode {
  constructor(peer, key) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_METHOD_DEFINITION);
    super(peer);
    _defineProperty(this, "kind", void 0);
    _defineProperty(this, "scriptFunction", void 0);
    _defineProperty(this, "name", void 0);
    _defineProperty(this, "funcExpr", void 0);
    this.kind = _global.global.generatedEs2panda._MethodDefinitionKindConst(_global.global.context, this.peer);
    this.funcExpr = (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._ClassElementValue(_global.global.context, this.peer));
    this.scriptFunction = this.funcExpr.scriptFunction;
    (0, _private.assertValidPeer)(this.scriptFunction.peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_SCRIPT_FUNCTION);

    // Somehow the scriptFunction cannot attach method's key to its ident after checker
    if (key) {
      (0, _private.assertValidPeer)(key, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_IDENTIFIER);
      const _name = (0, _private.unpackNonNullableNode)(key);
      this.scriptFunction = this.scriptFunction.setIdent(_name);
    }
    this.name = (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._ScriptFunctionId(_global.global.context, this.scriptFunction.peer));
    this.kind = _global.global.generatedEs2panda._MethodDefinitionKindConst(_global.global.context, this.peer);
  }
  static create(kind, key, value, modifiers, isComputed) {
    return new MethodDefinition(_global.global.generatedEs2panda._CreateMethodDefinition(_global.global.context, kind, (0, _private.passNode)(key), (0, _private.passNode)(FunctionExpression.create(value)), modifiers, isComputed), key.peer);
  }
  static update(node, kind, key, value, modifiers, isComputed) {
    return new MethodDefinition(_global.global.generatedEs2panda._UpdateMethodDefinition(_global.global.context, node.peer, kind, (0, _private.passNode)(key), (0, _private.passNode)(FunctionExpression.update(node.funcExpr, value)), modifiers, isComputed), key.peer);
  }

  // TODO: does not work
  isConstructor() {
    return _global.global.generatedEs2panda._MethodDefinitionIsConstructorConst(_global.global.context, this.peer);
  }
  get overloads() {
    return (0, _private.unpackNodeArray)(_global.global.generatedEs2panda._MethodDefinitionOverloadsConst(_global.global.context, this.peer));
  }
  setOverloads(overloads) {
    _global.global.generatedEs2panda._MethodDefinitionSetOverloads(_global.global.context, this.peer, (0, _private.passNodeArray)(overloads), overloads.length);
    return this;
  }
}
exports.MethodDefinition = MethodDefinition;
class VariableDeclaration extends _AstNode.AstNode {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATION);
    super(peer);
    _defineProperty(this, "declarationKind", void 0);
    _defineProperty(this, "declarators", void 0);
    this.declarationKind = _global.global.generatedEs2panda._VariableDeclarationKindConst(_global.global.context, this.peer);
    this.declarators = (0, _private.unpackNodeArray)(_global.global.generatedEs2panda._VariableDeclarationDeclaratorsConst(_global.global.context, this.peer));
  }
  static create(modifiers, kind, declarators) {
    const peer = _global.global.generatedEs2panda._CreateVariableDeclaration(_global.global.context, kind, (0, _private.passNodeArray)(declarators), declarators.length);
    _global.global.generatedEs2panda._AstNodeClearModifier(_global.global.context, peer, _private.allFlags);
    _global.global.generatedEs2panda._AstNodeAddModifier(_global.global.context, peer, modifiers);
    return new VariableDeclaration(peer);
  }
  static update(node, modifiers, kind, declarators) {
    const peer = _global.global.generatedEs2panda._UpdateVariableDeclaration(_global.global.context, node.peer, kind, (0, _private.passNodeArray)(declarators), declarators.length);
    _global.global.generatedEs2panda._AstNodeClearModifier(_global.global.context, peer, _private.allFlags);
    _global.global.generatedEs2panda._AstNodeAddModifier(_global.global.context, peer, modifiers);
    return new VariableDeclaration(peer);
  }
  get annotations() {
    return (0, _private.unpackNodeArray)(_global.global.generatedEs2panda._VariableDeclarationAnnotationsConst(_global.global.context, this.peer));
  }
  /** @deprecated */
  setAnnotations(annotations) {
    _global.global.generatedEs2panda._VariableDeclarationSetAnnotations(_global.global.context, this.peer, (0, _private.passNodeArray)(annotations), annotations.length);
    return this;
  }
}
exports.VariableDeclaration = VariableDeclaration;
class VariableDeclarator extends _AstNode.AstNode {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATOR);
    super(peer);
    _defineProperty(this, "name", void 0);
    this.name = (0, _private.unpackNonNullableNode)(_global.global.generatedEs2panda._VariableDeclaratorId(_global.global.context, this.peer));
  }
  static create(flag, name, initializer) {
    const peer = _global.global.generatedEs2panda._CreateVariableDeclarator(_global.global.context, flag, (0, _private.passNode)(name));
    if (initializer !== undefined) {
      _global.global.generatedEs2panda._VariableDeclaratorSetInit(_global.global.context, peer, initializer.peer);
    }
    return new VariableDeclarator(peer);
  }
  static update(node, flag, name, initializer) {
    const peer = _global.global.generatedEs2panda._UpdateVariableDeclarator(_global.global.context, node.peer, flag, (0, _private.passNode)(name));
    if (initializer !== undefined) {
      _global.global.generatedEs2panda._VariableDeclaratorSetInit(_global.global.context, peer, initializer.peer);
    }
    return new VariableDeclarator(peer);
  }
  get initializer() {
    return (0, _private.unpackNode)(_global.global.generatedEs2panda._VariableDeclaratorInit(_global.global.context, this.peer));
  }

  /** @deprecated */
  setInit(init) {
    _global.global.generatedEs2panda._VariableDeclaratorSetInit(_global.global.context, this.peer, (0, _private.passNode)(init));
    return this;
  }
  get flag() {
    return _global.global.generatedEs2panda._VariableDeclaratorFlag(_global.global.context, this.peer);
  }
}
exports.VariableDeclarator = VariableDeclarator;
class SuperExpression extends _AstNode.AstNode {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_SUPER_EXPRESSION);
    super(peer);
    _defineProperty(this, "id", void 0);
    this.id = (0, _private.unpackNode)(_global.global.generatedEs2panda._TSInterfaceDeclarationId(_global.global.context, this.peer));
  }
  static create() {
    return new SuperExpression(_global.global.generatedEs2panda._CreateSuperExpression(_global.global.context));
  }
}
exports.SuperExpression = SuperExpression;
class ETSStringLiteralType extends _generated.TypeNode {
  constructor(peer) {
    (0, _private.assertValidPeer)(peer, _Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_STRING_LITERAL_TYPE);
    super(peer);
  }
  static create(str) {
    return new ETSStringLiteralType(_global.global.es2panda._CreateETSStringLiteralType(_global.global.context, (0, _private.passString)(str)));
  }
}
exports.ETSStringLiteralType = ETSStringLiteralType;
const pairs = [[_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_MODULE, EtsScript], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_IDENTIFIER, _generated.Identifier], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_NUMBER_LITERAL, NumberLiteral], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_EXPRESSION_STATEMENT, ExpressionStatement], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_DECLARATION, FunctionDeclaration], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_SCRIPT_FUNCTION, _generated.ScriptFunction], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_STATEMENT, _generated.BlockStatement], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PARAMETER_EXPRESSION, ETSParameterExpression], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER_DECLARATION, _generated.TSTypeParameterDeclaration], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_CALL_EXPRESSION, CallExpression], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION, _MemberExpression.MemberExpression], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT, IfStatement], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_ARROW_FUNCTION_EXPRESSION, ArrowFunctionExpression], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_STRUCT_DECLARATION, StructDeclaration], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_METHOD_DEFINITION, MethodDefinition], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_ASSIGNMENT_EXPRESSION, AssignmentExpression], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATION, VariableDeclaration], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATOR, VariableDeclarator], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_EXPRESSION, FunctionExpression], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TYPE_REFERENCE, _generated.ETSTypeReference], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TYPE_REFERENCE_PART, _generated.ETSTypeReferencePart], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_OBJECT_EXPRESSION, _generated.ObjectExpression], [_Es2pandaEnums2.Es2pandaAstNodeType.AST_NODE_TYPE_ARRAY_EXPRESSION, _generated.ArrayExpression]];
pairs.forEach(function ([nodeType, astNode]) {
  _newArrowCheck(this, _this);
  return _classByPeer.nodeByType.set(nodeType, astNode);
}.bind(void 0));