"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.factory = void 0;
var _types = require("../types");
var _MemberExpression = require("../to-be-generated/MemberExpression");
var _generated = require("../../generated");
var _Identifier = require("../node-utilities/Identifier");
var _CallExpression = require("../node-utilities/CallExpression");
var _ExpressionStatement = require("../node-utilities/ExpressionStatement");
var _MemberExpression2 = require("../node-utilities/MemberExpression");
var _FunctionDeclaration = require("../node-utilities/FunctionDeclaration");
var _BlockStatement = require("../node-utilities/BlockStatement");
var _ArrowFunctionExpression = require("../node-utilities/ArrowFunctionExpression");
var _ScriptFunction = require("../node-utilities/ScriptFunction");
var _StringLiteral = require("../node-utilities/StringLiteral");
var _NumberLiteral = require("../node-utilities/NumberLiteral");
var _ETSParameterExpression = require("../node-utilities/ETSParameterExpression");
var _TSTypeParameter = require("../node-utilities/TSTypeParameter");
var _TSTypeParameterDeclaration = require("../node-utilities/TSTypeParameterDeclaration");
var _ETSPrimitiveType = require("../node-utilities/ETSPrimitiveType");
var _ETSTypeReference = require("../node-utilities/ETSTypeReference");
var _ETSTypeReferencePart = require("../node-utilities/ETSTypeReferencePart");
var _ETSImportDeclaration = require("../node-utilities/ETSImportDeclaration");
var _ImportSpecifier = require("../node-utilities/ImportSpecifier");
var _VariableDeclaration = require("../node-utilities/VariableDeclaration");
var _VariableDeclarator = require("../node-utilities/VariableDeclarator");
var _ETSUnionType = require("../node-utilities/ETSUnionType");
var _ReturnStatement = require("../node-utilities/ReturnStatement");
var _IfStatement = require("../node-utilities/IfStatement");
var _BinaryExpression = require("../node-utilities/BinaryExpression");
var _ClassDeclaration = require("../node-utilities/ClassDeclaration");
var _StructDeclaration = require("../node-utilities/StructDeclaration");
var _ClassDefinition = require("../node-utilities/ClassDefinition");
var _ClassProperty = require("../node-utilities/ClassProperty");
var _ETSFunctionType = require("../node-utilities/ETSFunctionType");
var _FunctionExpression = require("../node-utilities/FunctionExpression");
var _MethodDefinition = require("../node-utilities/MethodDefinition");
var _SuperExpression = require("../node-utilities/SuperExpression");
var _TSTypeParameterInstantiation = require("../node-utilities/TSTypeParameterInstantiation");
var _TSInterfaceDeclaration = require("../node-utilities/TSInterfaceDeclaration");
var _TSInterfaceBody = require("../node-utilities/TSInterfaceBody");
var _UndefinedLiteral = require("../node-utilities/UndefinedLiteral");
var _AnnotationUsage = require("../node-utilities/AnnotationUsage");
var _AssignmentExpression = require("../node-utilities/AssignmentExpression");
var _ETSUndefinedType = require("../node-utilities/ETSUndefinedType");
var _ConditionalExpression = require("../node-utilities/ConditionalExpression");
var _TSAsExpression = require("../node-utilities/TSAsExpression");
var _ThisExpression = require("../node-utilities/ThisExpression");
var _TSTypeAliasDeclaration = require("../node-utilities/TSTypeAliasDeclaration");
var _TSNonNullExpression = require("../node-utilities/TSNonNullExpression");
var _ChainExpression = require("../node-utilities/ChainExpression");
var _BlockExpression = require("../node-utilities/BlockExpression");
var _NullLiteral = require("../node-utilities/NullLiteral");
var _ETSNewClassInstanceExpression = require("../node-utilities/ETSNewClassInstanceExpression");
var _ObjectExpression = require("../node-utilities/ObjectExpression");
var _Property = require("../node-utilities/Property");
var _TemplateLiteral = require("../node-utilities/TemplateLiteral");
var _ArrayExpression = require("../node-utilities/ArrayExpression");
var _AnnotationDeclaration = require("../node-utilities/AnnotationDeclaration");
var _TryStatement = require("../node-utilities/TryStatement");
var _TSClassImplements = require("../node-utilities/TSClassImplements");
var _ForUpdateStatement = require("../node-utilities/ForUpdateStatement");
var _ForInStatement = require("../node-utilities/ForInStatement");
var _ForOfStatement = require("../node-utilities/ForOfStatement");
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

const factory = exports.factory = {
  get createIdentifier() {
    return _generated.Identifier.create2Identifier;
  },
  get updateIdentifier() {
    return _Identifier.updateIdentifier;
  },
  get createCallExpression() {
    return _types.CallExpression.create;
  },
  get updateCallExpression() {
    return _CallExpression.updateCallExpression;
  },
  get createExpressionStatement() {
    return _types.ExpressionStatement.create;
  },
  get updateExpressionStatement() {
    return _ExpressionStatement.updateExpressionStatement;
  },
  get createMemberExpression() {
    return _MemberExpression.MemberExpression.create;
  },
  get updateMemberExpression() {
    return _MemberExpression2.updateMemberExpression;
  },
  get createEtsScript() {
    return _types.EtsScript.createFromSource;
  },
  get updateEtsScript() {
    return _types.EtsScript.updateByStatements;
  },
  get createFunctionDeclaration() {
    return _types.FunctionDeclaration.create;
  },
  get updateFunctionDeclaration() {
    return _FunctionDeclaration.updateFunctionDeclaration;
  },
  get createBlock() {
    return _generated.BlockStatement.createBlockStatement;
  },
  get updateBlock() {
    return _BlockStatement.updateBlockStatement;
  },
  get createArrowFunction() {
    return _types.ArrowFunctionExpression.create;
  },
  get updateArrowFunction() {
    return _ArrowFunctionExpression.updateArrowFunctionExpression;
  },
  get createScriptFunction() {
    return _generated.ScriptFunction.createScriptFunction;
  },
  get updateScriptFunction() {
    return _ScriptFunction.updateScriptFunction;
  },
  get createStringLiteral() {
    return _generated.StringLiteral.create1StringLiteral;
  },
  get updateStringLiteral() {
    return _StringLiteral.updateStringLiteral;
  },
  get create1StringLiteral() {
    return _generated.StringLiteral.create1StringLiteral;
  },
  get update1StringLiteral() {
    return _StringLiteral.updateStringLiteral;
  },
  get createNumericLiteral() {
    return _types.NumberLiteral.create;
  },
  get updateNumericLiteral() {
    return _NumberLiteral.updateNumberLiteral;
  },
  get createParameterDeclaration() {
    return _types.ETSParameterExpression.create;
  },
  get updateParameterDeclaration() {
    return _ETSParameterExpression.updateETSParameterExpression;
  },
  get createTypeParameter() {
    return _generated.TSTypeParameter.createTSTypeParameter;
  },
  get updateTypeParameter() {
    return _TSTypeParameter.updateTSTypeParameter;
  },
  get createTypeParameterDeclaration() {
    return _generated.TSTypeParameterDeclaration.createTSTypeParameterDeclaration;
  },
  get updateTypeParameterDeclaration() {
    return _TSTypeParameterDeclaration.updateTSTypeParameterDeclaration;
  },
  get createPrimitiveType() {
    return _generated.ETSPrimitiveType.createETSPrimitiveType;
  },
  get updatePrimitiveType() {
    return _ETSPrimitiveType.updateETSPrimitiveType;
  },
  get createTypeReference() {
    return _generated.ETSTypeReference.createETSTypeReference;
  },
  get updateTypeReference() {
    return _ETSTypeReference.updateETSTypeReference;
  },
  get createTypeReferencePart() {
    return _generated.ETSTypeReferencePart.createETSTypeReferencePart;
  },
  get updateTypeReferencePart() {
    return _ETSTypeReferencePart.updateETSTypeReferencePart;
  },
  get createImportDeclaration() {
    return _generated.ETSImportDeclaration.createETSImportDeclaration;
  },
  get updateImportDeclaration() {
    return _ETSImportDeclaration.updateETSImportDeclaration;
  },
  get createImportSpecifier() {
    return _generated.ImportSpecifier.createImportSpecifier;
  },
  get updateImportSpecifier() {
    return _ImportSpecifier.updateImportSpecifier;
  },
  get createVariableDeclaration() {
    return _types.VariableDeclaration.create;
  },
  get updateVariableDeclaration() {
    return _VariableDeclaration.updateVariableDeclaration;
  },
  get createVariableDeclarator() {
    return _types.VariableDeclarator.create;
  },
  get updateVariableDeclarator() {
    return _VariableDeclarator.updateVariableDeclarator;
  },
  get createUnionType() {
    return _generated.ETSUnionType.createETSUnionType;
  },
  get updateUnionType() {
    return _ETSUnionType.updateETSUnionType;
  },
  get createReturnStatement() {
    return _generated.ReturnStatement.create1ReturnStatement;
  },
  get updateReturnStatement() {
    return _ReturnStatement.updateReturnStatement;
  },
  get createIfStatement() {
    return _types.IfStatement.create;
  },
  get updateIfStatement() {
    return _IfStatement.updateIfStatement;
  },
  get createBinaryExpression() {
    return _generated.BinaryExpression.createBinaryExpression;
  },
  get updateBinaryExpression() {
    return _BinaryExpression.updateBinaryExpression;
  },
  get createClassDeclaration() {
    return _generated.ClassDeclaration.createClassDeclaration;
  },
  get updateClassDeclaration() {
    return _ClassDeclaration.updateClassDeclaration;
  },
  get createStructDeclaration() {
    return _types.StructDeclaration.create;
  },
  get updateStructDeclaration() {
    return _StructDeclaration.updateStructDeclaration;
  },
  get createClassDefinition() {
    return _generated.ClassDefinition.createClassDefinition;
  },
  get updateClassDefinition() {
    return _ClassDefinition.updateClassDefinition;
  },
  get createClassProperty() {
    return _generated.ClassProperty.createClassProperty;
  },
  get updateClassProperty() {
    return _ClassProperty.updateClassProperty;
  },
  get createFunctionType() {
    return _generated.ETSFunctionType.createETSFunctionType;
  },
  get updateFunctionType() {
    return _ETSFunctionType.updateETSFunctionType;
  },
  get createFunctionExpression() {
    return _types.FunctionExpression.create;
  },
  get updateFunctionExpression() {
    return _FunctionExpression.updateFunctionExpression;
  },
  get createMethodDefinition() {
    return _types.MethodDefinition.create;
  },
  get updateMethodDefinition() {
    return _MethodDefinition.updateMethodDefinition;
  },
  get createSuperExpression() {
    return _generated.SuperExpression.createSuperExpression;
  },
  get updateSuperExpression() {
    return _SuperExpression.updateSuperExpression;
  },
  get createTSTypeParameterInstantiation() {
    return _generated.TSTypeParameterInstantiation.createTSTypeParameterInstantiation;
  },
  get updateTSTypeParameterInstantiation() {
    return _TSTypeParameterInstantiation.updateTSTypeParameterInstantiation;
  },
  get createInterfaceDeclaration() {
    return _generated.TSInterfaceDeclaration.createTSInterfaceDeclaration;
  },
  get updateInterfaceDeclaration() {
    return _TSInterfaceDeclaration.updateTSInterfaceDeclaration;
  },
  get createInterfaceBody() {
    return _generated.TSInterfaceBody.createTSInterfaceBody;
  },
  get updateInterfaceBody() {
    return _TSInterfaceBody.updateTSInterfaceBody;
  },
  get createUndefinedLiteral() {
    return _generated.UndefinedLiteral.createUndefinedLiteral;
  },
  get updateUndefinedLiteral() {
    return _UndefinedLiteral.updateUndefinedLiteral;
  },
  get createAnnotationDeclaration() {
    return _generated.AnnotationDeclaration.create1AnnotationDeclaration;
  },
  get updateAnnotationDeclaration() {
    return _AnnotationDeclaration.updateAnnotationDeclaration;
  },
  get createAnnotationUsage() {
    return _generated.AnnotationUsage.createAnnotationUsage;
  },
  get updateAnnotationUsage() {
    return _AnnotationUsage.updateAnnotationUsage;
  },
  get create1AnnotationUsage() {
    return _generated.AnnotationUsage.create1AnnotationUsage;
  },
  get update1AnnotationUsage() {
    return _AnnotationUsage.update1AnnotationUsage;
  },
  get createAssignmentExpression() {
    return _types.AssignmentExpression.create;
  },
  get updateAssignmentExpression() {
    return _AssignmentExpression.updateAssignmentExpression;
  },
  get createETSUndefinedType() {
    return _generated.ETSUndefinedType.createETSUndefinedType;
  },
  get updateETSUndefinedType() {
    return _ETSUndefinedType.updateETSUndefinedType;
  },
  get createFunctionSignature() {
    return _generated.FunctionSignature.createFunctionSignature;
  },
  get createConditionalExpression() {
    return _generated.ConditionalExpression.createConditionalExpression;
  },
  get updateConditionalExpression() {
    return _ConditionalExpression.updateConditionalExpression;
  },
  get createTSAsExpression() {
    return _generated.TSAsExpression.createTSAsExpression;
  },
  get updateTSAsExpression() {
    return _TSAsExpression.updateTSAsExpression;
  },
  get createThisExpression() {
    return _generated.ThisExpression.createThisExpression;
  },
  get updateThisExpression() {
    return _ThisExpression.updateThisExpression;
  },
  get createTSTypeAliasDeclaration() {
    return _generated.TSTypeAliasDeclaration.createTSTypeAliasDeclaration;
  },
  get updateTSTypeAliasDeclaration() {
    return _TSTypeAliasDeclaration.updateTSTypeAliasDeclaration;
  },
  get createTSNonNullExpression() {
    return _generated.TSNonNullExpression.createTSNonNullExpression;
  },
  get updateTSNonNullExpression() {
    return _TSNonNullExpression.updateTSNonNullExpression;
  },
  get createChainExpression() {
    return _generated.ChainExpression.createChainExpression;
  },
  get updateChainExpression() {
    return _ChainExpression.updateChainExpression;
  },
  get createBlockExpression() {
    return _generated.BlockExpression.createBlockExpression;
  },
  get updateBlockExpression() {
    return _BlockExpression.updateBlockExpression;
  },
  get createNullLiteral() {
    return _generated.NullLiteral.createNullLiteral;
  },
  get updateNullLiteral() {
    return _NullLiteral.updateNullLiteral;
  },
  get createETSNewClassInstanceExpression() {
    return _generated.ETSNewClassInstanceExpression.createETSNewClassInstanceExpression;
  },
  get updateETSNewClassInstanceExpression() {
    return _ETSNewClassInstanceExpression.updateETSNewClassInstanceExpression;
  },
  get createETSStringLiteralType() {
    return _types.ETSStringLiteralType.create;
  },
  get createBooleanLiteral() {
    return _generated.BooleanLiteral.createBooleanLiteral;
  },
  get createObjectExpression() {
    return _generated.ObjectExpression.createObjectExpression;
  },
  get updateObjectExpression() {
    return _ObjectExpression.updateObjectExpression;
  },
  get createProperty() {
    return _generated.Property.createProperty;
  },
  get updateProperty() {
    return _Property.updateProperty;
  },
  get createTemplateLiteral() {
    return _generated.TemplateLiteral.createTemplateLiteral;
  },
  get updateTemplateLiteral() {
    return _TemplateLiteral.updateTemplateLiteral;
  },
  get createArrayExpression() {
    return _generated.ArrayExpression.createArrayExpression;
  },
  get updateArrayExpression() {
    return _ArrayExpression.updateArrayExpression;
  },
  get createTryStatement() {
    return _generated.TryStatement.createTryStatement;
  },
  get updateTryStatement() {
    return _TryStatement.updateTryStatement;
  },
  get createTSClassImplements() {
    return _generated.TSClassImplements.createTSClassImplements;
  },
  get UpdateTSClassImplements() {
    return _TSClassImplements.updateTSClassImplements;
  },
  get createForUpdateStatement() {
    return _generated.ForUpdateStatement.createForUpdateStatement;
  },
  get updateForUpdateStatement() {
    return _ForUpdateStatement.updateForUpdateStatement;
  },
  get createForInStatement() {
    return _generated.ForInStatement.createForInStatement;
  },
  get updateForInStatement() {
    return _ForInStatement.updateForInStatement;
  },
  get createForOfStatement() {
    return _generated.ForOfStatement.createForOfStatement;
  },
  get updateForOfStatement() {
    return _ForOfStatement.updateForOfStatement;
  },
  /** @deprecated */
  createTypeParameter1_(name, constraint, defaultType) {
    return _generated.TSTypeParameter.createTSTypeParameter(_generated.Identifier.create1Identifier(name.name), constraint, defaultType);
  }
};