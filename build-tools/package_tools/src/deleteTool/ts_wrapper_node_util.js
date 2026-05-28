/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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

const { arkts } = require('/srv/workspace/master_default_20260410_0432_huawei_18466aeab/code/interface/sdk-js/build-tools/package_tools/src/dependence/build-tools/koala-wrapper/build/lib/es2panda');

let arr = [];

/**
 * @file ts_wrapper_node_util_update.ts
 * @brief AST 节点遍历工具模块
 *
 * 本模块提供了完整的 AST 节点遍历和处理功能，用于 ArkTS/TypeScript 代码的静态检查。
 *
 * 主要功能:
 * - 遍历所有类型的 AST 节点（168 种节点类型）
 * - 对每个节点执行相应的处理逻辑
 * - 支持 API 检查和类型验证
 *
 * 核心数据结构:
 * - nodeHandleFunctionMap: 节点类型到处理函数的映射表
 *
 * ⚠️ 重要提示：不要遍历的字段（会导致循环引用或重复遍历）
 *
 * 1. 反向引用字段（会导致循环引用）:
 *    - node.target          - ContinueStatement/BreakStatement 的目标循环
 *    - node.parent          - 父节点引用（任何节点）
 *    - node.result          - BinaryExpression 的计算结果
 *    - node.container      - 容器节点引用
 *    - node.scope          - 作用域引用
 *
 * 2. 辅助数据结构字段（会导致重复遍历）:
 *    - node.returnStatements - ScriptFunction 的 return 语句数组（已在 body 中遍历）
 *    - node.params          - CallExpression/DirectEval 的参数（已在 arguments 中）
 *    - node.parameters      - FunctionDeclaration 的参数（已在 scriptFunction 中）
 *    - node.name            - FunctionDeclaration 的名称（已在 scriptFunction 中）
 *    - node.body            - FunctionDeclaration 的函数体（已在 scriptFunction 中）
 *    - node.typeParamsDecl  - FunctionDeclaration 的类型参数（已在 scriptFunction 中）
 *    - node.returnType      - FunctionDeclaration 的返回类型（已在 scriptFunction 中）
 *    - node.decorators      - Identifier 的装饰器（C++ 不遍历）
 *
 * 3. 验证规则:
 *    ✅ 必须对照 C++ Iterate 方法实现
 *    ✅ IterateAnnotations(cb) → node.annotations.forEach(...)
 *    ✅ cb(child_) → handleAstNode(node.child)
 *    ✅ children_.forEach(cb) → node.children.forEach(...)
 *
 * 4. 常见错误:
 *    ❌ 遍历了 target/parent/result 等反向引用 → 会导致循环引用
 *    ❌ 遍历了辅助数据结构 → 会导致重复遍历，影响性能
 *    ❌ 缺少 annotations 遍历 → 会遗漏类型注解中的 API
 *
 * 5. 如何验证:
 *    a. 找到对应的 C++ 文件: build-tools/ets2panda/ir/.../nodeName.cpp
 *    b. 查看 void NodeType::Iterate(const NodeTraverser &cb) const 方法
 *    c. 确认遍历的字段与 C++ 实现一致
 */

// ========== 节点类型映射表 ==========
const nodeHandleFunctionMap = new Map([
  // 按照枚举定义顺序排列的映射表
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ARROW_FUNCTION_EXPRESSION, handleArrowFunctionExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ANNOTATION_DECLARATION, handleAnnotationDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ANNOTATION_USAGE, handleAnnotationUsage],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ASSERT_STATEMENT, handleAssertStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_AWAIT_EXPRESSION, handleAwaitExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BIGINT_LITERAL, handleBigIntLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION, handleBinaryExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_STATEMENT, handleBlockStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BOOLEAN_LITERAL, handleBooleanLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BREAK_STATEMENT, handleBreakStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CALL_EXPRESSION, handleCallExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CATCH_CLAUSE, handleCatchClause],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CHAIN_EXPRESSION, handleChainExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CHAR_LITERAL, handleCharLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_DEFINITION, handleClassDefinition],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_DECLARATION, handleClassDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_EXPRESSION, handleClassExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_PROPERTY, handleClassProperty],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_STATIC_BLOCK, handleClassStaticBlock],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CONDITIONAL_EXPRESSION, handleConditionalExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CONTINUE_STATEMENT, handleContinueStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DEBUGGER_STATEMENT, handleDebuggerStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DECORATOR, handleDecorator],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DIRECT_EVAL, handleDirectEvalExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DO_WHILE_STATEMENT, handleDoWhileStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EMPTY_STATEMENT, handleEmptyStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_ALL_DECLARATION, handleExportAllDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_DEFAULT_DECLARATION, handleExportDefaultDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_NAMED_DECLARATION, handleExportNamedDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_SPECIFIER, handleExportSpecifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPRESSION_STATEMENT, handleExpressionStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_IN_STATEMENT, handleForInStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_OF_STATEMENT, handleForOfStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_UPDATE_STATEMENT, handleForUpdateStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_DECLARATION, handleFunctionDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_EXPRESSION, handleFunctionExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IDENTIFIER, handleIdentifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DUMMYNODE, handleDummyNode],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT, handleIfStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_DECLARATION, handleImportDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_EXPRESSION, handleImportExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_DEFAULT_SPECIFIER, handleImportDefaultSpecifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_NAMESPACE_SPECIFIER, handleImportNamespaceSpecifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_SPECIFIER, handleImportSpecifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_LABELLED_STATEMENT, handleLabelledStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION, handleMemberExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_META_PROPERTY_EXPRESSION, handleMetaProperty],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_METHOD_DEFINITION, handleMethodDefinition],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NAMED_TYPE, handleNamedType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NEW_EXPRESSION, handleNewExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NULL_LITERAL, handleNullLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_UNDEFINED_LITERAL, handleUndefinedLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NUMBER_LITERAL, handleNumberLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_OMITTED_EXPRESSION, handleOmittedExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_OVERLOAD_DECLARATION, handleOverloadDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_PREFIX_ASSERTION_EXPRESSION, handlePrefixAssertionExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_PROPERTY, handleProperty],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_REGEXP_LITERAL, handleRegExpLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_REEXPORT_STATEMENT, handleETSReExportDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_RETURN_STATEMENT, handleReturnStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SCRIPT_FUNCTION, handleScriptFunction],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SEQUENCE_EXPRESSION, handleSequenceExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_STRING_LITERAL, handleStringLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NON_NULLISH_TYPE, handleETSNonNullishType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NULL_TYPE, handleETSNullType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_UNDEFINED_TYPE, handleETSUndefinedType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEVER_TYPE, handleETSNeverType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_STRING_LITERAL_TYPE, handleETSStringLiteralType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_INTRINSIC_NODE_TYPE, handleETSIntrinsicNodeType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_FUNCTION_TYPE, handleETSFunctionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_GENERIC_INSTANTIATED_NODE, handleETSGenericInstantiatedNode],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PRIMITIVE_TYPE, handleETSPrimitiveType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PACKAGE_DECLARATION, handleETSPackageDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_CLASS_LITERAL, handleETSClassLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TYPE_REFERENCE, handleETSTypeReference],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TYPE_REFERENCE_PART, handleETSTypeReferencePart],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_DESTRUCTURING, handleETSDestructuring],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_UNION_TYPE, handleETSUnionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_KEYOF_TYPE, handleETSKeyOfType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_ARRAY_INSTANCE_EXPRESSION, handleETSNewArrayInstanceExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_MULTI_DIM_ARRAY_INSTANCE_EXPRESSION, handleETSNewMultiDimArrayInstanceExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_CLASS_INSTANCE_EXPRESSION, handleETSNewClassInstanceExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_IMPORT_DECLARATION, handleETSImportDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PARAMETER_EXPRESSION, handleETSParameterExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TUPLE, handleETSTuple],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_MODULE, handleETSModule],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SUPER_EXPRESSION, handleSuperExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_STRUCT_DECLARATION, handleETSStructDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SWITCH_CASE_STATEMENT, handleSwitchCaseStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SWITCH_STATEMENT, handleSwitchStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ENUM_DECLARATION, handleTSEnumDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ENUM_MEMBER, handleTSEnumMember],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_EXTERNAL_MODULE_REFERENCE, handleTSExternalModuleReference],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NUMBER_KEYWORD, handleTSNumberKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ANY_KEYWORD, handleTSAnyKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_STRING_KEYWORD, handleTSStringKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_BOOLEAN_KEYWORD, handleTSBooleanKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_VOID_KEYWORD, handleTSVoidKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNDEFINED_KEYWORD, handleTSUndefinedKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNKNOWN_KEYWORD, handleTSUnknownKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_OBJECT_KEYWORD, handleTSObjectKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_BIGINT_KEYWORD, handleTSBigintKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NEVER_KEYWORD, handleTSNeverKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NON_NULL_EXPRESSION, handleTSNonNullExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NULL_KEYWORD, handleTSNullKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ARRAY_TYPE, handleTSArrayType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNION_TYPE, handleTSUnionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_LITERAL, handleTSTypeLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PROPERTY_SIGNATURE, handleTSPropertySignature],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_METHOD_SIGNATURE, handleTSMethodSignature],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_SIGNATURE_DECLARATION, handleTSSignatureDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PARENT_TYPE, handleTSParentType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_LITERAL_TYPE, handleTSLiteralType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INFER_TYPE, handleTSInferType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CONDITIONAL_TYPE, handleTSConditionalType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_IMPORT_TYPE, handleTSImportType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERSECTION_TYPE, handleTSIntersectionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MAPPED_TYPE, handleTSMappedType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MODULE_BLOCK, handleTSModuleBlock],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_THIS_TYPE, handleTSThisType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_OPERATOR, handleTSTypeOperator],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER, handleTSTypeParameter],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER_DECLARATION, handleTSTypeParameterDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER_INSTANTIATION, handleTSTypeParameterInstantiation],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PREDICATE, handleTSTypePredicate],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PARAMETER_PROPERTY, handleTSParameterProperty],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MODULE_DECLARATION, handleTSModuleDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_IMPORT_EQUALS_DECLARATION, handleTSImportEqualsDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_FUNCTION_TYPE, handleTSFunctionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CONSTRUCTOR_TYPE, handleTSConstructorType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ALIAS_DECLARATION, handleTSTypeAliasDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_REFERENCE, handleTSTypeReference],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_QUALIFIED_NAME, handleTSQualifiedName],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INDEXED_ACCESS_TYPE, handleTSIndexedAccessType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_DECLARATION, handleTSInterfaceDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_BODY, handleTSInterfaceBody],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_HERITAGE, handleTSInterfaceHeritage],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TUPLE_TYPE, handleTSTupleType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NAMED_TUPLE_MEMBER, handleTSNamedTupleMember],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INDEX_SIGNATURE, handleTSIndexSignature],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_QUERY, handleTSTypeQuery],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_AS_EXPRESSION, handleTSAsExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CLASS_IMPLEMENTS, handleTSClassImplements],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ASSERTION, handleTSTypeAssertion],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TAGGED_TEMPLATE_EXPRESSION, handleTaggedTemplateExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TEMPLATE_ELEMENT, handleTemplateElement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TEMPLATE_LITERAL, handleTemplateLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_THIS_EXPRESSION, handleThisExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TYPEOF_EXPRESSION, handleTypeofExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_THROW_STATEMENT, handleThrowStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TRY_STATEMENT, handleTryStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_UNARY_EXPRESSION, handleUnaryExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_UPDATE_EXPRESSION, handleUpdateExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATION, handleVariableDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATOR, handleVariableDeclarator],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_WHILE_STATEMENT, handleWhileStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_YIELD_EXPRESSION, handleYieldExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_OPAQUE_TYPE_NODE, handleOpaqueTypeNode],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_EXPRESSION, handleBlockExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ERROR_TYPE_NODE, handleErrorTypeNode],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ARRAY_EXPRESSION, handleArrayExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ARRAY_PATTERN, handleArrayPattern],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ASSIGNMENT_EXPRESSION, handleAssignmentExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ASSIGNMENT_PATTERN, handleAssignmentPattern],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_OBJECT_EXPRESSION, handleObjectExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_OBJECT_PATTERN, handleObjectPattern],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SPREAD_ELEMENT, handleSpreadElement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_REST_ELEMENT, handleRestElement]
])

// Debug模式开关
const isDebug = false;

// 有效的节点校验路径列表(字符串版本)
/**
 *
 * 根节点处理
 * @param { arkts.AstNode } node
 */
function traverseProgram(node) {
  // 处理Identifier
  if (!!node.statements) {
    node.statements.forEach((item) => handleAstNode(item));
  }
}

/**
 * 获取Jsdoc信息
 * @param { arkts.AstNode } node 节点
 * @returns { string } jsdoc 字符串
 */
function getJSDocInformation(node) {
  return arkts.getJsdocStringFromDeclaration(node);
}

exports.collectAllIdentifierNode = function collectAllIdentifierNode(node) {
  handleAstNode(node)
  return arr
}

/**
 * 节点通用处理逻辑
 * @param { arkts.AstNode } node 节点
 */
function handleAstNode(node) {
  // 用于判断是否重复访问或者陷入循环
  if (node === null || node === undefined) {
    return;
  }
  // 通过CAPI获取节点具体类型
  let kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, node.peer)
  if (!nodeHandleFunctionMap.has(kind) || nodeHandleFunctionMap.get(kind) === undefined) {
    return;
  }
  // 根据类型获取到具体节点对应处理方法
  let func = nodeHandleFunctionMap.get(kind)
  // 编译节点属性
  func(node);
  if (arkts.isIdentifier(node) && !isSystemapi(node)) {
    // console.log(!arr.includes(node.name))
    if (!arr.includes(node.name)) {
      arr.push(node.name)
    }
    // console.log(arr)
  }
}

function isSystemapi(node) {
  const statementJSDoc = arkts.getJsdocStringFromDeclaration(node);
  const notesArr = statementJSDoc.split(/\/\*\*/);
  const notesStr = notesArr[notesArr.length - 1];
  if (notesStr.length !== 0) {
    return /@systemapi/g.test(notesStr);
  }
  return false;
}

function handleAnnotatedAstNode(node) { }

function handleAnnotatedExpression(node) {
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

function handleAnnotatedStatement(node) { }

function handleAnnotationDeclaration(node) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.properties) {
    node.properties.forEach((item) => handleAstNode(item));
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

function handleAnnotationUsage(node) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.properties) {
    node.properties.forEach((item) => handleAstNode(item));
  }
}

function handleArrayExpression(node) {
  if (!!node.elements) {
    node.elements.forEach((item) => handleAstNode(item));
  }
  if (!!node.declarators) {
    node.declarators.forEach((item) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

function handleArrowFunctionExpression(node) {
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
  if (!!node.scriptFunction) {
    handleAstNode(node.scriptFunction);
  }
}

function handleAssertStatement(node) {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.second) {
    handleAstNode(node.second);
  }
}

function handleAssignmentExpression(node) {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
}

function handleAstDumper(node) {
  return;
}

function handleAwaitExpression(node) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

function handleBigIntLiteral(node) { }

function handleBinaryExpression(node) {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
}

function handleBlockExpression(node) {
  if (!!node.statements) {
    node.statements.forEach((item) => handleAstNode(item));
  }
}

function handleBlockStatement(node) {
  if (!!node.statements) {
    node.statements.forEach((item) => handleAstNode(item));
  }
}

function handleBooleanLiteral(node) { }

function handleBreakStatement(node) {
  if (!!node.ident) {
    handleAstNode(node.ident);
  }
}

/**
 * 处理 CallExpression 节点（函数调用表达式）
 * 遍历子节点: trailingBlock, expression (callee), typeArguments, arguments, params
 * @param node AST 节点
 */
function handleCallExpression(node) {
  if (!!node.trailingBlock) {
    handleAstNode(node.trailingBlock);
  }
  if (!!node.expression) {
    handleAstNode(node.expression);
  }
  if (!!node.typeArguments) {
    node.typeArguments.forEach((item) => handleAstNode(item));
  }
  if (!!node.arguments) {
    node.arguments.forEach((item) => handleAstNode(item));
  }
}

function handleCatchClause(node) {
  if (!!node.param) {
    handleAstNode(node.param);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

function handleChainExpression(node) {
  if (!!node.getExpression) {
    handleAstNode(node.getExpression);
  }
}

function handleCharLiteral(node) { }

function handleClassDeclaration(node) {
  if (!!node.definition) {
    handleAstNode(node.definition);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
}

function handleClassDefinition(node) {
  if (!!node.ident) {
    handleAstNode(node.ident);
  }
  if (!!node.super) {
    handleAstNode(node.super);
  }
  if (!!node.ctor) {
    handleAstNode(node.ctor);
  }
  if (!!node.body) {
    node.body.forEach((item) => handleAstNode(item));
  }
  if (!!node.implments) {
    node.implments.forEach((item) => handleAstNode(item));
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.superTypeParams) {
    handleAstNode(node.superTypeParams);
  }
  if (!!node.origEnumDecl) {
    handleAstNode(node.origEnumDecl);
  }
  if (!!node.getAnonClass) {
    handleAstNode(node.getAnonClass);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

function handleClassElement(node) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.value) {
    handleAstNode(node.value);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
}

function handleClassExpression(node) {
  if (!!node.definition) {
    handleAstNode(node.definition);
  }
}

function handleClassProperty(node) {
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.value) {
    handleAstNode(node.value);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
}

function handleClassStaticBlock(node) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.value) {
    handleAstNode(node.value);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
}

function handleConditionalExpression(node) {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.consequent) {
    handleAstNode(node.consequent);
  }
  if (!!node.alternate) {
    handleAstNode(node.alternate);
  }
}

function handleContext(node) { }

/**
 * target重复节点，不遍历
 * @param { arkts.AstNode } node
 */
function handleContinueStatement(node) {
  if (!!node.ident) {
    handleAstNode(node.ident);
  }
}

function handleDebuggerStatement(node) { }

function handleDecorator(node) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

function handleDirectEvalExpression(node) {
  if (!!node.trailingBlock) {
    handleAstNode(node.trailingBlock);
  }
  if (!!node.expression) {
    handleAstNode(node.expression);
  }
  if (!!node.typeArguments) {
    node.typeArguments.forEach((item) => handleAstNode(item));
  }
  if (!!node.arguments) {
    node.arguments.forEach((item) => handleAstNode(item));
  }
}

function handleDoWhileStatement(node) {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

function handleETSClassLiteral(node) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

function handleETSDynamicFunctionType(node) {
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.params) {
    node.params.forEach((item) => handleAstNode(item));
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
  if (!!node.functionInterface) {
    handleAstNode(node.functionInterface);
  }
}

function handleETSFunctionType(node) {
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.params) {
    node.params.forEach((item) => handleAstNode(item));
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
  if (!!node.functionInterface) {
    handleAstNode(node.functionInterface);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

function handleETSImportDeclaration(node) { }

function handleETSModule(node) {
  if (!!node.ident) {
    handleAstNode(node.ident);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
  if (!!node.statements) {
    node.statements.forEach((item) => handleAstNode(item));
  }
}

function handleETSNewArrayInstanceExpression(node) {
  if (!!node.typeReference) {
    handleAstNode(node.typeReference);
  }
  if (!!node.dimension) {
    handleAstNode(node.dimension);
  }
}

function handleETSNewClassInstanceExpression(node) {
  if (!!node.getTypeRef) {
    handleAstNode(node.getTypeRef);
  }
  if (!!node.getArgments) {
    node.getArgments.forEach((item) => handleAstNode(item));
  }
}

function handleETSNewMultiDimArrayInstanceExpression(node) {
  if (!!node.dimensions) {
    node.dimensions.forEach((item) => handleAstNode(item));
  }
  if (!!node.typeReference) {
    handleAstNode(node.typeReference);
  }
}

function handleETSNullType(node) { }

function handleETSPackageDeclaration(node) { }

function handleETSParameterExpression(node) {
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
  if (!!node.type) {
    handleAstNode(node.type);
  }
  if (!!node.initializer) {
    handleAstNode(node.initializer);
  }
  if (!!node.identifier) {
    handleAstNode(node.identifier);
  }
}

function handleETSPrimitiveType(node) {
}

function handleETSReExportDeclaration(node) {
  if (!!node.getETSImportDeclarations) {
    handleAstNode(node.getETSImportDeclarations);
  }
}

function handleETSStructDeclaration(node) {
  if (!!node.definition) {
    handleAstNode(node.definition);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
}

function handleETSTuple(node) {
  if (!!node.getTupleTypeAnnotationsList) {
    node.getTupleTypeAnnotationsList.forEach((item) =>
      handleAstNode(item)
    );
  }
}

function handleETSTypeReference(node) {
  if (!!node.part) {
    handleAstNode(node.part);
  }
}

function handleETSTypeReferencePart(node) {
  if (!!node.previous) {
    handleAstNode(node.previous);
  }
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
}

function handleETSUndefinedType(node) { }

function handleETSUnionType(node) {
  if (!!node.types) {
    node.types.forEach((item) => handleAstNode(item));
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

function handleEmptyStatement(node) { }

function handleExportAllDeclaration(node) {
  if (!!node.source) {
    handleAstNode(node.source);
  }
  if (!!node.exported) {
    handleAstNode(node.exported);
  }
}

function handleExportDefaultDeclaration(node) {
  if (!!node.decl) {
    handleAstNode(node.decl);
  }
}

function handleExportNamedDeclaration(node) {
  if (!!node.decl) {
    handleAstNode(node.decl);
  }
  if (!!node.source) {
    handleAstNode(node.source);
  }
  if (!!node.specifiers) {
    node.specifiers.forEach((item) => handleAstNode(item));
  }
}

function handleExportSpecifier(node) {
  if (!!node.local) {
    handleAstNode(node.local);
  }
  if (!!node.exported) {
    handleAstNode(node.exported);
  }
}

function handleExpression(node) { }

function handleExpressionStatement(node) {
  if (!!node.expression) {
    handleAstNode(node.expression);
  }
}

function handleForInStatement(node) {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

function handleForOfStatement(node) {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

function handleForUpdateStatement(node) {
  if (!!node.init) {
    handleAstNode(node.init);
  }
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.update) {
    handleAstNode(node.update);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

function handleFunctionDeclaration(node) {
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
  if (!!node.scriptFunction) {
    handleAstNode(node.scriptFunction);
  }
}

function handleFunctionExpression(node) {
  if (!!node.scriptFunction) {
    handleAstNode(node.scriptFunction);
  }

}

function handleFunctionSignature(node) {
  if (!!node.params) {
    node.params.forEach((item) => handleAstNode(item));
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
}

function handleIdentifier(node) {
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

function handleIfStatement(node) {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.consequent) {
    handleAstNode(node.consequent);
  }
  if (!!node.alternate) {
    handleAstNode(node.alternate);
  }
}

function handleImportDeclaration(node) {
}

function handleImportDefaultSpecifier(node) {
  if (!!node.local) {
    handleAstNode(node.local);
  }
}

function handleImportExpression(node) {
  if (!!node.source) {
    handleAstNode(node.source);
  }
}

function handleImportNamespaceSpecifier(node) {
  if (!!node.local) {
    handleAstNode(node.local);
  }

}

function handleImportSource(node) {
  if (!!node.source) {
    handleAstNode(node.source);
  }
  if (!!node.resolvedSource) {
    handleAstNode(node.resolvedSource);
  }
}

function handleImportSpecifier(node) {
  if (!!node.imported) {
    handleAstNode(node.imported);
  }
  if (!!node.local) {
    handleAstNode(node.local);
  }

}

function handleInterfaceDecl(node) {
  if (!!node.id) {
    handleAstNode(node.id);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParam);
  }
  if (!!node.extends) {
    node.extends.forEach((item) => handleAstNode(item));
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
  if (!!node.getAnonClass) {
    handleAstNode(node.getAnonClass);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

function handleLabelPair(node) {
  if (!!node.ident) {
    handleAstNode(node.ident);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

function handleLabelledStatement(node) { }

function handleLiteral(node) { }

function handleLoopStatement(node) { }

function handleMaybeOptionalExpression(node) { }

function handleMemberExpression(node) {
  if (!!node.object) {
    handleAstNode(node.object);
  }
  if (!!node.property) {
    handleAstNode(node.property);
  }
}

function handleMetaProperty(node) { }

function handleMethodDefinition(node) {
  if (!!node.overloads) {
    node.overloads.forEach((item) => handleAstNode(item));
  }
  if (!!node.scriptFunction) {
    handleAstNode(node.scriptFunction);
  }
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.value) {
    handleAstNode(node.value);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
}

function handleNamedType(node) {
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
}

function handleNewExpression(node) {
  if (!!node.callee) {
    handleAstNode(node.callee);
  }
  if (!!node.arguments) {
    node.arguments.forEach((item) => handleAstNode(item));
  }
}

function handleNullLiteral(node) { }

function handleNumberLiteral(node) { }

function handleObjectExpression(node) {
  if (!!node.properties) {
    node.properties.forEach((item) => handleAstNode(item));
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

function handleOmittedExpression(node) { }

function handleOpaqueTypeNode(node) { }

function handlePrefixAssertionExpression(node) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.type) {
    handleAstNode(node.type);
  }
}

function handleProperty(node) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.value) {
    handleAstNode(node.value);
  }
}

function handleRegExpLiteral(node) { }

function handleReturnStatement(node) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

/**
 * 处理 ScriptFunction 节点（函数）
 * ✅ 已验证: 对照 scriptFunction.cpp:281-295
 * 遍历子节点: id, params, typeParams, body, returnTypeAnnotation, annotations
 * ⚠️ 不要遍历: returnStatements (辅助数据，已在 body 中)
 * @param node AST 节点
 */
/**
 * 处理 ScriptFunction 节点（函数）
 * ✅ 已验证: 对照 scriptFunction.cpp:281-295
 * 遍历子节点: id, params, typeParams, body, returnTypeAnnotation, annotations
 * ⚠️ 不要遍历: returnStatements (辅助数据，已在 body 中)
 * @param node AST 节点
 */
function handleScriptFunction(node) {
  if (!!node.id) {
    handleAstNode(node.id);
  }
  if (!!node.params) {
    node.params.forEach((item) => handleAstNode(item));
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
  if (!!node.returnTypeAnnotation) {
    handleAstNode(node.returnTypeAnnotation);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

function handleSequenceExpression(node) {
  if (!!node.sequence) {
    node.sequence.forEach((item) => handleAstNode(item));
  }
}

function handleSpreadElement(node) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

function handleSrcDumper(node) {
  return;
}

function handleStatement(node) {
}

function handleStringLiteral(node) { }

function handleSuperExpression(node) {
  if (!!node.id) {
    handleAstNode(node.id);
  }
}

function handleSwitchCaseStatement(node) {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.consequent) {
    node.consequent.forEach((item) => handleAstNode(item));
  }
}

function handleSwitchStatement(node) {
  if (!!node.discriminant) {
    handleAstNode(node.discriminant);
  }
  if (!!node.cases) {
    node.cases.forEach((item) => handleAstNode(item));
  }
}

function handleTSAnyKeyword(node) {
}

function handleTSArrayType(node) {
  if (!!node.elementType) {
    handleAstNode(node.elementType);
  }
}

function handleTSAsExpression(node) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

function handleTSBigintKeyword(node) { }

function handleTSBooleanKeyword(node) { }

function handleTSClassImplements(node) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.typeParameters) {
    handleAstNode(node.typeParameters);
  }
}

function handleTSConditionalType(node) {
  if (!!node.checkType) {
    handleAstNode(node.checkType);
  }
  if (!!node.extendsType) {
    handleAstNode(node.extendsType);
  }
  if (!!node.trueType) {
    handleAstNode(node.trueType);
  }
  if (!!node.falseType) {
    handleAstNode(node.falseType);
  }
}

function handleTSConstructorType(node) {
  if (!!node.typeParams) {
    handleAstNode(node.typeParameters);
  }
  if (!!node.params) {
    node.params.forEach((item) => handleAstNode(item));
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
}

function handleTSEnumDeclaration(node) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.members) {
    node.members.forEach((item) => handleAstNode(item));
  }
  if (!!node.boxedClass) {
    handleAstNode(node.boxedClass);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
}

function handleTSEnumMember(node) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.init) {
    handleAstNode(node.init);
  }
}

function handleTSExternalModuleReference(node) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

function handleTSFunctionType(node) {
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.params) {
    node.params.forEach((item) => handleAstNode(item));
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
}

function handleTSImportEqualsDeclaration(node) {
  if (!!node.id) {
    handleAstNode(node.id);
  }
  if (!!node.moduleReference) {
    handleAstNode(node.moduleReference);
  }
}

function handleTSImportType(node) {
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.params) {
    handleAstNode(node.params);
  }
  if (!!node.qualifier) {
    handleAstNode(node.qualifier);
  }
}

function handleTSIndexSignature(node) {
  if (!!node.objectType) {
    handleAstNode(node.objectType);
  }
  if (!!node.indexType) {
    handleAstNode(node.indexType);
  }
}

function handleTSIndexedAccessType(node) {
  if (!!node.param) {
    handleAstNode(node.param);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

function handleTSInferType(node) {
  if (!!node.typeParam) {
    handleAstNode(node.typeParam);
  }
}

function handleTSInterfaceBody(node) {
  if (!!node.body) {
    node.body.forEach((item) => handleAstNode(item));
  }
}

function handleTSInterfaceDeclaration(node) {
  if (!!node.id) {
    handleAstNode(node.id);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParam);
  }
  if (!!node.extends) {
    node.extends.forEach((item) => handleAstNode(item));
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
  if (!!node.getAnonClass) {
    handleAstNode(node.getAnonClass);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

function handleTSInterfaceHeritage(node) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

function handleTSIntersectionType(node) {
  if (!!node.types) {
    node.types.forEach((item) => handleAstNode(item));
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

function handleTSLiteralType(node) {
  if (!!node.literal) {
    handleAstNode(node.literal);
  }
}

function handleTSMappedType(node) {
  if (!!node.typeParameter) {
    handleAstNode(node.typeParameter);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

function handleTSMethodSignature(node) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.params) {
    node.params.forEach((item) => handleAstNode(item));
  }
  if (!!node.returnTypeAnnotation) {
    handleAstNode(node.returnTypeAnnotation);
  }
}

function handleTSModuleBlock(node) {
  if (!!node.statements) {
    node.statements.forEach((item) => handleAstNode(item));
  }
}

function handleTSModuleDeclaration(node) {
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

function handleTSNamedTupleMember(node) {
  if (!!node.label) {
    handleAstNode(node.label);
  }
  if (!!node.elementType) {
    handleAstNode(node.elementType);
  }
}

function handleTSNeverKeyword(node) { }

function handleTSNonNullExpression(node) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

function handleTSNullKeyword(node) { }

function handleTSNumberKeyword(node) { }

function handleTSObjectKeyword(node) { }

function handleTSParameterProperty(node) {
  if (!!node.parameter) {
    handleAstNode(node.parameter);
  }
}

function handleTSParenthesizedType(node) {
  if (!!node.type) {
    handleAstNode(node.type);
  }
}

function handleTSPropertySignature(node) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

function handleTSQualifiedName(node) {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
}

function handleTSSignatureDeclaration(node) {
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.params) {
    node.params.forEach((item) => handleAstNode(item));
  }
  if (!!node.returnTypeAnnotation) {
    handleAstNode(node.returnTypeAnnotation);
  }
}

function handleTSStringKeyword(node) { }

function handleTSThisType(node) { }

function handleTSTupleType(node) {
  if (!!node.elementType) {
    node.elementType.forEach((item) => handleAstNode(item));
  }
}

function handleTSTypeAliasDeclaration(node) {
  if (!!node.id) {
    handleAstNode(node.id);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

function handleTSTypeAssertion(node) {
  if (!!node.getExpression) {
    handleAstNode(node.getExpression);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }

}

function handleTSTypeLiteral(node) {
  if (!!node.members) {
    node.members.forEach((item) => handleAstNode(item));
  }
  if (!!node.type) {
    handleAstNode(node.type);
  }
}

function handleTSTypeOperator(node) {
  if (!!node.type) {
    handleAstNode(node.type);
  }
}

function handleTSTypeParameter(node) {
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.constraint) {
    handleAstNode(node.constraint);
  }
  if (!!node.defaultType) {
    handleAstNode(node.defaultType);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

function handleTSTypeParameterDeclaration(node) {
  if (!!node.params) {
    node.params.forEach((item) => handleAstNode(item));
  }
}

function handleTSTypeParameterInstantiation(node) {
  if (!!node.params) {
    node.params.forEach((item) => handleAstNode(item));
  }
}

function handleTSTypePredicate(node) {
  if (!!node.parameterName) {
    handleAstNode(node.parameterName);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

function handleTSTypeQuery(node) {
  if (!!node.exprName) {
    handleAstNode(node.exprName);
  }
}

function handleTSTypeReference(node) {
  if (!!node.typeName) {
    handleAstNode(node.typeName);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

function handleTSUndefinedKeyword(node) { }

/**
 * 处理 TSUnionType 节点（TypeScript 联合类型）
 * 遍历子节点: types
 * @param node AST 节点
 */
function handleTSUnionType(node) {
  if (!!node.types) {
    node.types.forEach((item) => handleAstNode(item));
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

function handleTSUnknownKeyword(node) { }

function handleTSVoidKeyword(node) { }

function handleTaggedTemplateExpression(node) {
  if (!!node.tag) {
    handleAstNode(node.tag);
  }
  if (!!node.quasi) {
    handleAstNode(node.quasi);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
}

function handleTemplateElement(node) { }

function handleTemplateLiteral(node) {
  if (!!node.quasis) {
    node.quasis.forEach((item) => handleAstNode(item));
  }
  if (!!node.expressions) {
    node.expressions.forEach((item) => handleAstNode(item));
  }
}

function handleThisExpression(node) { }

function handleThrowStatement(node) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

function handleTryStatement(node) {
  if (!!node.finallyBlock) {
    handleAstNode(node.finallyBlock);
  }
  if (!!node.block) {
    handleAstNode(node.block);
  }
  if (!!node.catchClauses) {
    node.catchClauses.forEach((item) => handleAstNode(item));
  }
}

function handleTypeNode(node) { }

function handleTypedAstNode(node) { }

function handleTypedStatement(node) { }

function handleTypeofExpression(node) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

function handleUnaryExpression(node) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

function handleUndefinedLiteral(node) { }

function handleUpdateExpression(node) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

function handleValidationInfo(node) { }

function handleVariableDeclaration(node) {
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
  if (!!node.declarators) {
    node.declarators.forEach((item) => handleAstNode(item));
  }
}

function handleVariableDeclarator(node) {
  if (!!node.initializer) {
    handleAstNode(node.initializer);
  }
  if (!!node.name) {
    handleAstNode(node.name);
  }
}

function handleWhileStatement(node) {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

function handleYieldExpression(node) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

// ========== 新增节点处理函数 ==========

/**
 * 处理 OverloadDeclaration 节点（重载声明）
 * 遍历子节点: key, overloadedList
 * @param node AST 节点
 */
function handleOverloadDeclaration(node) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.overloadedList) {
    node.overloadedList.forEach((item) => handleAstNode(item));
  }
}

/**
 * 处理 DummyNode 节点（占位节点）
 * 无子节点需要遍历
 * @param node AST 节点
 */
function handleDummyNode(node) {
  // 空实现 - 无子节点
}

/**
 * 处理 ErrorTypeNode 节点（错误类型节点/BrokenTypeNode）
 * 无子节点需要遍历
 * @param node AST 节点
 */
function handleErrorTypeNode(node) {
  // 空实现 - 无子节点
}

/**
 * 处理 ETSNeverType 节点（ETS Never 类型）
 * 遍历子节点: annotations
 * @param node AST 节点
 */
function handleETSNeverType(node) {
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

/**
 * 处理 ETSKeyofType 节点（ETS Keyof 类型）
 * 遍历子节点: type, annotations
 * @param node AST 节点
 */
function handleETSKeyOfType(node) {
  if (!!node.type) {
    handleAstNode(node.type);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

/**
 * 处理 ETSIntrinsicNode 节点（ETS 内置函数节点）
 * 遍历子节点: arguments
 * @param node AST 节点
 */
function handleETSIntrinsicNodeType(node) {
  if (!!node.arguments) {
    node.arguments.forEach((item) => handleAstNode(item));
  }
}

/**
 * 处理 ETSDestructuring 节点（ETS 解构赋值）
 * 遍历子节点: elements, typeAnnotation
 * @param node AST 节点
 */
function handleETSDestructuring(node) {
  if (!!node.elements) {
    node.elements.forEach((item) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

/**
 * 处理 ETSGenericInstantiatedNode 节点（ETS 泛型实例化节点）
 * 遍历子节点: expression, typeParams
 * @param node AST 节点
 */
function handleETSGenericInstantiatedNode(node) {
  if (!!node.expression) {
    handleAstNode(node.expression);
  }
  if (!!node.typeParams) {
    handleAstNode(node.typeParams);
  }
}

/**
 * 处理 ETSNonNullishType 节点（ETS 非空类型）
 * 遍历子节点: typeNode
 * @param node AST 节点
 */
function handleETSNonNullishType(node) {
  if (!!node.typeNode) {
    handleAstNode(node.typeNode);
  }
}

/**
 * 处理 ETSStringLiteralType 节点（ETS 字符串字面量类型）
 * 遍历子节点: annotations
 * @param node AST 节点
 */
function handleETSStringLiteralType(node) {
  if (!!node.annotations) {
    node.annotations.forEach((item) => handleAstNode(item));
  }
}

// ========== Pattern 节点独立处理函数 ==========

/**
 * 处理 ArrayPattern 节点（数组解构模式）
 * 遍历子节点: elements, declarators, typeAnnotation
 * @param node AST 节点
 */
function handleArrayPattern(node) {
  if (!!node.elements) {
    node.elements.forEach((item) => handleAstNode(item));
  }
  if (!!node.declarators) {
    node.declarators.forEach((item) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

/**
 * 处理 AssignmentPattern 节点（赋值解构模式）
 * 遍历子节点: left, right
 * @param node AST 节点
 */
function handleAssignmentPattern(node) {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
}

/**
 * 处理 ObjectPattern 节点（对象解构模式）
 * 遍历子节点: properties, decorators, typeAnnotation
 * @param node AST 节点
 */
function handleObjectPattern(node) {
  if (!!node.properties) {
    node.properties.forEach((item) => handleAstNode(item));
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

/**
 * 处理 RestElement 节点（Rest 元素）
 * 遍历子节点: argument, decorators, typeAnnotation
 * @param node AST 节点
 */
function handleRestElement(node) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item) => handleAstNode(item));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

/**
 * 处理 TSParentType 节点（TypeScript 括号类型）
 * 遍历子节点: type
 * @param node AST 节点
 */
function handleTSParentType(node) {
  if (!!node.type) {
    handleAstNode(node.type);
  }
}
