"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Es2pandaNativeModule = void 0;
exports.initEs2panda = initEs2panda;
exports.initGeneratedEs2panda = initGeneratedEs2panda;
var _interop = require("#koalaui/interop");
var _Es2pandaNativeModule = require("./generated/Es2pandaNativeModule");
var path = _interopRequireWildcard(require("path"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
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

// TODO: this type should be in interop

class Es2pandaNativeModule {
  _ClassDefinitionSuper(context, node) {
    throw new Error('Not implemented');
  }
  _CreateTSInterfaceDeclaration(_context, _extends, _extendsLen, _id, _typeParams, _body, _isStatic, _isExternal) {
    throw new Error('Not implemented');
  }
  _CreateTSTypeParameterInstantiation(context, params, paramsLen) {
    throw new Error('Not implemented');
  }
  _ClassElementKey(context, node) {
    throw new Error('Not implemented');
  }
  _ClassElementValue(context, node) {
    throw new Error('Not implemented');
  }
  _AnnotationUsageIrExpr(context, node) {
    throw new Error('Not implemented');
  }
  _AnnotationUsageIrPropertiesConst(context, node, returnLen) {
    throw new Error('Not implemented');
  }
  _AnnotationAllowedAnnotations(context, node, returnLen) {
    throw new Error('Not implemented');
  }
  _AnnotationAllowedAnnotationsConst(context, node, returnLen) {
    throw new Error('Not implemented');
  }
  _AstNodeRebind(context, node) {
    throw new Error('Not implemented');
  }
  _AstNodeRecheck(context, node) {
    throw new Error('Not implemented');
  }
  _ContextState(context) {
    throw new Error('Not implemented');
  }
  _ContextErrorMessage(context) {
    throw new Error('Not implemented');
  }
  _GetAllErrorMessages(context) {
    throw new Error('Not implemented');
  }
  _AstNodeChildren(context, node) {
    throw new Error('Not implemented');
  }
  _ETSParserCreateExpression(context, sourceCode, flags) {
    throw new Error('Not implemented');
  }
  _AstNodeDumpModifiers(context, node) {
    throw new Error('Not implemented');
  }
  _CreateAstDumper(context, node, source) {
    throw new Error('Not implemented');
  }
  _AstDumperModifierToString(context, dumper, flags) {
    throw new Error('Not implemented');
  }
  _CreateConfig(argc, argv) {
    throw new Error('Not implemented');
  }
  _DestroyConfig(config) {
    throw new Error('Not implemented');
  }
  _CreateContextFromString(config, source, filename) {
    throw new Error('Not implemented');
  }
  _CreateContextGenerateAbcForExternalSourceFiles(config, fileCount, filenames) {
    throw new Error('Not implemented');
  }
  _CreateContextFromFile(config, filename) {
    throw new Error('Not implemented');
  }
  _DestroyContext(context) {
    throw new Error('Not implemented');
  }
  _ProceedToState(context, state) {
    throw new Error('Not implemented');
  }
  _ContextProgram(context) {
    throw new Error('Not implemented');
  }
  _ProgramAst(context, program) {
    throw new Error('Not implemented');
  }
  _CheckerStartChecker(context) {
    throw new Error('Not implemented');
  }
  _VarBinderIdentifierAnalysis(context) {
    throw new Error('Not implemented');
  }
  _VarBinderInitTopScope(context) {
    throw new Error('Not implemented');
  }
  _VarBinderSetGenStdLib(context, genStdLibT) {
    throw new Error('Not implemented');
  }
  _SourceFileGetChildren(node) {
    throw new Error('Not implemented');
  }
  _BlockGetStatements(node) {
    throw new Error('Not implemented');
  }
  _FunctionDeclarationIsAnonymousConst(context, node) {
    throw new Error('Not implemented');
  }
  _ExpressionStatementGetExpression(context, node) {
    throw new Error('Not implemented');
  }
  _CallExpressionArguments(context, node, returnLen) {
    throw new Error('Not implemented');
  }
  _CallExpressionCallee(context, node) {
    throw new Error('Not implemented');
  }
  _IdentifierGetText(node) {
    throw new Error('Not implemented');
  }
  _IdentifierIsPrivateIdentConst(context, node) {
    throw new Error('Not implemented');
  }
  _PropertyAccessExpressionGetExpression(node) {
    throw new Error('Not implemented');
  }
  _PropertyAccessExpressionGetName(node) {
    throw new Error('Not implemented');
  }
  _FunctionDeclarationFunction(context, node) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionSignature(context, node) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionParams(context, node) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionId(context, node) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionBody(context, node) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionAnnotations(context, node, returnLen) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionSetIdent(context, ast, id) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionSetSignature(context, ast, signature) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionSetBody(context, ast, body) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionSetScope(context, ast, scope) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionSetAnnotations(context, ast, annotations, annotationsLen) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionDeclareConst(context, node) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionFlagsConst(context, node) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionTypeParams(context, node) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionReturnTypeAnnotation(context, node) {
    throw new Error('Not implemented');
  }
  _ScriptFunctionAddFlag(context, node, flags) {
    throw new Error('Not implemented');
  }
  _ClassPropertyAnnotations(context, node, returnLen) {
    throw new Error('Not implemented');
  }
  _ClassPropertySetAnnotations(context, ast, annotations, annotationsLen) {
    throw new Error('Not implemented');
  }
  _UpdateBlockStatement(context, original, statementList, statementListLen) {
    throw new Error('Not implemented');
  }
  _BlockStatementSetScope(context, node, scope) {
    throw new Error('Not implemented');
  }
  _CreateIdentifier1(context, name) {
    throw new Error('Not implemented');
  }
  _CreateIdentifier2(context, name, type_annotation) {
    throw new Error('Not implemented');
  }
  _IdentifierSetName(context, node, name) {
    throw new Error('Not implemented');
  }
  _IdentifierIdentifierFlags(context, node) {
    throw new Error('Not implemented');
  }
  _CreateFunctionDeclaration(context, func, annotations, annotationsLen, isAnon) {
    throw new Error('Not implemented');
  }
  _UpdateFunctionDeclaration(context, node, annotations, annotationsLen, func, isAnon) {
    throw new Error('Not implemented');
  }
  _CreateReturnStatement1(context, argument) {
    throw new Error('Not implemented');
  }
  _ReturnStatementArgument(context, node) {
    throw new Error('Not implemented');
  }
  _CreateIfStatement(context, test, consequent, alternate) {
    throw new Error('Not implemented');
  }
  _CreateBinaryExpression(context, left, right, operatorType) {
    throw new Error('Not implemented');
  }
  _CreateAssignmentExpression(context, left, right, assignmentOperator) {
    throw new Error('Not implemented');
  }
  _CreateMethodDefinition(context, kind, key, value, modifiers, isComputed) {
    throw new Error('Not implemented');
  }
  _CreateClassProperty(context, key, value, typeAnnotation, modifiers, isComputed) {
    throw new Error('Not implemented');
  }
  _CreateETSImportDeclaration(context, importPath, specifiers, specifiersSequenceLength, importKind, programPtr, flags) {
    throw new Error('Not implemented');
  }
  _ETSImportDeclarationSourceConst(context, node) {
    throw new Error('Not implemented');
  }
  _ETSImportDeclarationResolvedSource(context, node) {
    throw new Error('Not implemented');
  }
  _ETSImportDeclarationHasDeclConst(context, node) {
    throw new Error('Not implemented');
  }
  _CreateImportSource(context, source, resolvedSource, hasDecl) {
    throw new Error('Not implemented');
  }
  _CreateImportSpecifier(context, imported, local) {
    throw new Error('Not implemented');
  }
  _CreateFunctionSignature(context, typeParams, params, paramsLen, returnTypeAnnotation, hasReceiver) {
    throw new Error('Not implemented');
  }
  _CreateScriptFunction(context, databody, datasignature, datafuncFlags, dataflags) {
    throw new Error('Not implemented');
  }
  _UpdateScriptFunction(context, original, databody, datasignature, datafuncFlags, dataflags, datadeclare) {
    throw new Error('Not implemented');
  }
  _CreateBlockStatement(context, statementList, statementListLen) {
    throw new Error('Not implemented');
  }
  _AstNodeScopeConst(context, ast) {
    throw new Error('Not implemented');
  }
  _AstNodeParent(context, ast) {
    throw new Error('Not implemented');
  }
  _AstNodeSetParent(context, ast, parent) {
    throw new Error('Not implemented');
  }
  _AstNodeClone(context, ast, parent) {
    throw new Error('Not implemented');
  }
  _AstNodeModifiers(context, ast) {
    throw new Error('Not implemented');
  }
  _AstNodeAddModifier(context, ast, flags) {
    throw new Error('Not implemented');
  }
  _AstNodeClearModifier(context, ast, flags) {
    throw new Error('Not implemented');
  }
  _AstNodeVariableConst(context, ast) {
    throw new Error('Not implemented');
  }
  _AstNodeTypeConst(context, ast) {
    throw new Error('Not implemented');
  }
  _FunctionSignatureTypeParams(context, ast) {
    throw new Error('Not implemented');
  }
  _FunctionSignatureReturnType(context, ast) {
    throw new Error('Not implemented');
  }
  _FunctionSignatureParamsConst(context, ast, returnTypeLen) {
    throw new Error('Not implemented');
  }
  _UpdateIdentifier1(context, ast, name) {
    throw new Error('Not implemented');
  }
  _UpdateIdentifier2(context, ast, name, typeAnnotation) {
    throw new Error('Not implemented');
  }
  _UpdateMethodDefinition(context, node, kind, key, value, modifiers, isComputed) {
    throw new Error('Not implemented');
  }
  _MethodDefinitionFunction(context, node) {
    throw new Error('Not implemented');
  }
  _MethodDefinitionKindConst(context, node) {
    throw new Error('Not implemented');
  }
  _CreateMemberExpression(context, object, property, kind, computed, optional) {
    throw new Error('Not implemented');
  }
  _UpdateMemberExpression(context, node, object, property, kind, computed, optional) {
    throw new Error('Not implemented');
  }
  _MemberExpressionObject(context, node) {
    throw new Error('Not implemented');
  }
  _MemberExpressionProperty(context, node) {
    throw new Error('Not implemented');
  }
  _MemberExpressionKindConst(context, node) {
    throw new Error('Not implemented');
  }
  _CreateCallExpression(context, callee, args, argsLen, typeParams, optional, trailingComma) {
    throw new Error('Not implemented');
  }
  _UpdateCallExpression(context, node, callee, args, argsLen, typeParams, optional, trailingComma) {
    throw new Error('Not implemented');
  }
  _CreateArrowFunctionExpression(context, node) {
    throw new Error('Not implemented');
  }
  _FunctionExpressionFunction(context, node) {
    throw new Error('Not implemented');
  }
  _ArrowFunctionExpressionFunction(context, node) {
    throw new Error('Not implemented');
  }
  _ArrowFunctionExpressionCreateTypeAnnotation(context, node) {
    throw new Error('Not implemented');
  }
  _CreateFunctionExpression(context, node) {
    throw new Error('Not implemented');
  }
  _UpdateFunctionExpression(context, original, node) {
    throw new Error('Not implemented');
  }
  _CreateExpressionStatement(context, expr) {
    throw new Error('Not implemented');
  }
  _UpdateExpressionStatement(context, node, expr) {
    throw new Error('Not implemented');
  }
  _CreateETSParameterExpression(context, identifier, initializer) {
    throw new Error('Not implemented');
  }
  _CreateETSPrimitiveType(context, type) {
    throw new Error('Not implemented');
  }
  _ETSPrimitiveTypeGetPrimitiveTypeConst(context, node) {
    throw new Error('Not implemented');
  }
  _CreateETSTypeReference(context, part) {
    throw new Error('Not implemented');
  }
  _CreateETSTypeReferencePart(context, name, typeParams, prev) {
    throw new Error('Not implemented');
  }
  _CreateETSTypeReferencePart1(context, name) {
    throw new Error('Not implemented');
  }
  _IsIdentifier(node) {
    throw new Error('Not implemented');
  }
  _IdentifierName(context, node) {
    throw new Error('Not implemented');
  }
  _ETSParameterExpressionIdent(context, node) {
    throw new Error('Not implemented');
  }
  _ETSParameterExpressionAnnotations(context, node, returnLen) {
    throw new Error('Not implemented');
  }
  _ETSParameterExpressionSetAnnotations(context, ast, annotations, annotationsLen) {
    throw new Error('Not implemented');
  }
  _CreateTSTypeParameterDeclaration(context, params, paramsLen, requiredParams) {
    throw new Error('Not implemented');
  }
  _TSTypeParameterDeclarationParamsConst(context, node, returnTypeLen) {
    throw new Error('Not implemented');
  }
  _CreateTSTypeParameter(context, name, constraint, defaultType) {
    throw new Error('Not implemented');
  }
  _TSTypeParameterName(context, node) {
    throw new Error('Not implemented');
  }
  _CreateTSUnionType(context, types, typesLen) {
    throw new Error('Not implemented');
  }
  _TSUnionTypeTypesConst(context, node, returnTypeLen) {
    throw new Error('Not implemented');
  }
  _CreateETSUnionTypeIr(context, types, typesLen) {
    throw new Error('Not implemented');
  }
  _ETSUnionTypeIrTypesConst(context, node, returnTypeLen) {
    throw new Error('Not implemented');
  }
  _CreateVariableDeclaration(context, kind, declarators, declaratorsLen) {
    throw new Error('Not implemented');
  }
  _UpdateVariableDeclaration(context, original, kind, declarators, declaratorsLen, declare) {
    throw new Error('Not implemented');
  }
  _CreateVariableDeclarator(context, flag, ident) {
    throw new Error('Not implemented');
  }
  _VariableDeclarationDeclaratorsConst(context, node) {
    throw new Error('Not implemented');
  }
  _VariableDeclarationKindConst(context, node) {
    throw new Error('Not implemented');
  }
  _VariableDeclaratorId(context, node) {
    throw new Error('Not implemented');
  }
  _VariableDeclaratorSetInit(context, node, init) {
    throw new Error('Not implemented');
  }
  _CreateStringLiteral(context, string) {
    throw new Error('Not implemented');
  }
  _CreateNumberLiteral(context, value) {
    throw new Error('Not implemented');
  }
  _NumberLiteralStrConst(context, node) {
    throw new Error('Not implemented');
  }
  _StringLiteralStrConst(context, node) {
    throw new Error('Not implemented');
  }
  _BlockStatementStatements(context, node) {
    throw new Error('Not implemented');
  }
  _BlockStatementSetStatements(context, node, statements, statementsLen) {
    throw new Error('Not implemented');
  }
  _ClassDeclarationDefinition(context, node) {
    throw new Error('Not implemented');
  }
  _ClassDefinitionBody(context, node) {
    throw new Error('Not implemented');
  }
  _ClassDefinitionIdent(context, node) {
    throw new Error('Not implemented');
  }
  _ClassDefinitionTypeParamsConst(context, node) {
    throw new Error('Not implemented');
  }
  _CreateETSStructDeclaration(context, def) {
    throw new Error('Not implemented');
  }
  _CreateClassDeclaration(context, def) {
    throw new Error('Not implemented');
  }
  _UpdateClassDeclaration(context, original, def) {
    throw new Error('Not implemented');
  }
  _CreateClassDefinition1(context, ident, body, bodyLen, modifiers, flags) {
    throw new Error('Not implemented');
  }
  _ClassDefinitionSetTypeParams(context, ast, typeParams) {
    throw new Error('Not implemented');
  }
  _ClassDefinitionSetSuper(context, ast, superClass) {
    throw new Error('Not implemented');
  }
  _UpdateClassDefinition1(context, original, ident, body, bodyLen, modifiers, flags) {
    throw new Error('Not implemented');
  }
  _CreateETSFunctionTypeIr(context, signature, funcFlags) {
    throw new Error('Not implemented');
  }
  _CreateSuperExpression(context) {
    throw new Error('Not implemented');
  }
  _UpdateSuperExpression(context, original) {
    throw new Error('Not implemented');
  }
  _IsProgram(context, node) {
    throw new Error('Not implemented');
  }
  _AstNodeDumpJSONConst(context, node) {
    throw new Error('Not implemented');
  }
  _AstNodeDumpEtsSrcConst(context, node) {
    throw new Error('Not implemented');
  }
  _AstNodeUpdateChildren(context, node) {
    throw new Error('Not implemented');
  }
  _AstNodeUpdateAll(context, node) {
    throw new Error('Not implemented');
  }
  _AstNodeSetOriginalNode(context, ast, originalNode) {
    throw new Error('Not implemented');
  }
  _AstNodeOriginalNodeConst(context, ast) {
    throw new Error('Not implemented');
  }
  _VarBinderSetProgram(context) {
    throw new Error('Not implemented');
  }
  _VarBinderSetContext(context) {
    throw new Error('Not implemented');
  }
  _VariableDeclaration(context, variable) {
    throw new Error('Not implemented');
  }
  _DeclNode(context, decl) {
    throw new Error('Not implemented');
  }
  _ScopeSetParent(context, ast, scope) {
    throw new Error('Not implemented');
  }
  _CallExpressionSignature(context, classInstance) {
    throw new Error('Not implemented');
  }
  _SignatureFunction(context, classInstance) {
    throw new Error('Not implemented');
  }
  _DeclarationFromIdentifier(context, identifier) {
    throw new Error('Not implemented');
  }
  _IsTSInterfaceDeclaration(ast) {
    throw new Error('Not implemented');
  }
  _IsAnnotationDeclaration(ast) {
    throw new Error('Not implemented');
  }
  _IsAnnotationUsage(ast) {
    throw new Error('Not implemented');
  }
  _IsClassProperty(ast) {
    throw new Error('Not implemented');
  }
  _CreateAnnotationUsageIr(context, ast) {
    throw new Error('Not implemented');
  }
  _IsETSUnionType(ast) {
    throw new Error('Not implemented');
  }
  _IsETSFunctionType(ast) {
    throw new Error('Not implemented');
  }
  _ProgramExternalSources(context, instance) {
    throw new Error('Not implemented');
  }
  _ProgramDirectExternalSources(context, instance) {
    throw new Error('Not implemented');
  }
  _AstNodeProgram(context, instance) {
    throw new Error('Not implemented');
  }
  _ExternalSourceName(instance) {
    throw new Error('Not implemented');
  }
  _ExternalSourcePrograms(instance) {
    throw new Error('Not implemented');
  }
  _ProgramCanSkipPhases(context, program) {
    throw new Error('Not implemented');
  }
  _GenerateTsDeclarationsFromContext(config, outputDeclEts, outputEts, exportAll, isolated) {
    throw new Error('Not implemented');
  }
  _GenerateStaticDeclarationsFromContext(config, outputPath) {
    throw new Error('Not implemented');
  }
  _InsertETSImportDeclarationAndParse(context, program, importDeclaration) {
    throw new Error('Not implemented');
  }
  _ETSParserGetImportPathManager(context) {
    throw new Error('Not implemented');
  }
  _CreateSourcePosition(context, index, line) {
    throw new Error('Not implemented');
  }
  _SourcePositionIndex(context, instance) {
    throw new Error('Not implemented');
  }
  _SourcePositionLine(context, instance) {
    throw new Error('Not implemented');
  }
  _CreateETSStringLiteralType(context, str) {
    throw new Error('Not implemented');
  }
  _ClassDefinitionIsFromStructConst(context, instance) {
    throw new Error('Not implemented');
  }
  _ClassDefinitionSetFromStructModifier(context, instance) {
    throw new Error('Not implemented');
  }
  _ProgramFileNameConst(context, program) {
    throw new Error('Not implemented');
  }
  _ProgramFileNameWithExtensionConst(context, program) {
    throw new Error('Not implemented');
  }
  _ProgramIsASTLoweredConst(context, program) {
    throw new Error('Not implemented');
  }
  _ETSParserGetGlobalProgramAbsName(context) {
    throw new Error('Not implemented');
  }
  _ProgramAbsoluteNameConst(context, instance) {
    throw new Error('Not implemented');
  }
  _ImportSpecifierIsRemovableConst(context, instance) {
    throw new Error('Not implemented');
  }
  _ImportSpecifierSetRemovable(context, instance) {
    throw new Error('Not implemented');
  }
  _ClassPropertyIsDefaultAccessModifierConst(context, receiver) {
    throw new Error('Not implemented');
  }
  _AstNodeStartConst(context, receiver) {
    throw new Error('Not implemented');
  }
  _AstNodeSetStart(context, receiver, start) {
    throw new Error('Not implemented');
  }
  _AstNodeEndConst(context, receiver) {
    throw new Error('Not implemented');
  }
  _AstNodeSetEnd(context, receiver, end) {
    throw new Error('Not implemented');
  }
  _ClassVariableDeclaration(context, classInstance) {
    throw new Error('Not implemented');
  }
  _IsMethodDefinition(node) {
    throw new Error('Not implemented');
  }
  _ProgramModuleNameConst(context, program) {
    throw new Error('Not implemented');
  }
  _AstNodeRangeConst(context, node) {
    throw new Error('CreateFunctionDecl was not overloaded by native module initialization');
  }
  _SourceRangeStart(context, range) {
    throw new Error('CreateFunctionDecl was not overloaded by native module initialization');
  }
  _SourceRangeEnd(context, range) {
    throw new Error('CreateFunctionDecl was not overloaded by native module initialization');
  }
  _CreateSourceRange(context, start, end) {
    throw new Error('CreateFunctionDecl was not overloaded by native module initialization');
  }
  _IsArrayExpression(node) {
    throw new Error('IsArrayExpression was not overloaded by native module initialization');
  }
  _MemInitialize() {
    throw new Error('MemInitialize was not overloaded by native module initialization');
  }
  _MemFinalize() {
    throw new Error('MemFinalize was not overloaded by native module initialization');
  }
  _CreateGlobalContext(configPtr, externalFileList, fileNum, lspUsage) {
    throw new Error('CreateGlobalContext was not overloaded by native module initialization');
  }
  _DestroyGlobalContext(contextPtr) {
    throw new Error('DestroyGlobalContext was not overloaded by native module initialization');
  }
  _CreateCacheContextFromFile(configPtr, filename, globalContext, isExternal) {
    throw new Error('CreateCacheContextFromFile was not overloaded by native module initialization');
  }
  _CreateDiagnosticKind(context, message, type) {
    throw new Error('Not implemented');
  }
  _CreateDiagnosticInfo(context, kind, args, argc) {
    throw new Error('Not implemented');
  }
  _CreateSuggestionInfo(context, kind, args, argc, substitutionCode) {
    throw new Error('Not implemented');
  }
  _LogDiagnostic(context, kind, argv, argc, pos) {
    throw new Error('Not implemented');
  }
  _LogDiagnosticWithSuggestion(context, diagnosticInfo, suggestionInfo, range) {
    throw new Error('Not implemented');
  }
  _SetUpSoPath(soPath) {
    throw new Error('Not implemented');
  }
  _CallExpressionIsTrailingCallConst(context, node) {
    throw new Error('CallExpressionIsTrailingCallConst was not overloaded by native module initialization');
  }
}
exports.Es2pandaNativeModule = Es2pandaNativeModule;
function initEs2panda() {
  (0, _interop.registerNativeModuleLibraryName)('NativeModule', path.resolve(__dirname, '../native/es2panda.node'));
  const instance = new Es2pandaNativeModule();
  (0, _interop.loadNativeModuleLibrary)('NativeModule', instance);
  return instance;
}
function initGeneratedEs2panda() {
  (0, _interop.registerNativeModuleLibraryName)('NativeModule', path.resolve(__dirname, '../native/es2panda.node'));
  const instance = new _Es2pandaNativeModule.Es2pandaNativeModule();
  // registerNativeModule("InteropNativeModule", NativeModule)
  (0, _interop.loadNativeModuleLibrary)('NativeModule', instance);
  return instance;
}