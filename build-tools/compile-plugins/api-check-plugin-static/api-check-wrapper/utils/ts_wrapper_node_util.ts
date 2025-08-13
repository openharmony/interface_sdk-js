/*
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

import * as arkts from '@koalaui/libarkts';
import { checkIdentifier } from "../src/api_check_wrapper";

export const nodeHandleFunctionMap = new Map<arkts.Es2pandaAstNodeType, (node: any, ...args: any[]) => void>([
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ASSIGNMENT_EXPRESSION, handleAssignmentExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ANNOTATION_USAGE, handleAnnotatedAstNode],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_LABELLED_STATEMENT, handleLabelledStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_THROW_STATEMENT, handleThrowStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_PROPERTY, handleClassProperty],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_VOID_KEYWORD, handleTSVoidKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_FUNCTION_TYPE, handleETSFunctionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_OPERATOR, handleTSTypeOperator],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT, handleIfStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CONSTRUCTOR_TYPE, handleTSConstructorType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DECORATOR, handleDecorator],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ENUM_DECLARATION, handleTSEnumDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NEVER_KEYWORD, handleTSNeverKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_DEFAULT_SPECIFIER, handleImportDefaultSpecifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_SPECIFIER, handleImportSpecifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CONDITIONAL_EXPRESSION, handleConditionalExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CALL_EXPRESSION, handleCallExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BIGINT_LITERAL, handleBigIntLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_IMPORT_TYPE, handleTSImportType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TAGGED_TEMPLATE_EXPRESSION, handleTaggedTemplateExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_DECLARATION, handleFunctionDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TYPE_REFERENCE, handleETSTypeReference],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_REFERENCE, handleTSTypeReference],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NAMED_TYPE, handleNamedType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NUMBER_LITERAL, handleNumberLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_FUNCTION_TYPE, handleTSFunctionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TEMPLATE_ELEMENT, handleTemplateElement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_DECLARATION, handleTSInterfaceDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATION, handleVariableDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_UNDEFINED_LITERAL, handleUndefinedLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION, handleMemberExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CLASS_IMPLEMENTS, handleTSClassImplements],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_OBJECT_KEYWORD, handleTSObjectKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_UNION_TYPE, handleETSUnionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PROPERTY_SIGNATURE, handleTSPropertySignature],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_CONDITIONAL_TYPE, handleTSConditionalType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_LITERAL_TYPE, handleTSLiteralType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ALIAS_DECLARATION, handleTSTypeAliasDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DEBUGGER_STATEMENT, handleDebuggerStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_RETURN_STATEMENT, handleReturnStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_DEFAULT_DECLARATION, handleExportDefaultDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SCRIPT_FUNCTION, handleScriptFunction],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_DEFINITION, handleClassDefinition],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_BODY, handleTSInterfaceBody],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_QUERY, handleTSTypeQuery],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_BIGINT_KEYWORD, handleTSBigintKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_PROPERTY, handleProperty],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_VARIABLE_DECLARATOR, handleVariableDeclarator],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_STRING_LITERAL, handleStringLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ASSERTION, handleTSTypeAssertion],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_EXTERNAL_MODULE_REFERENCE, handleTSExternalModuleReference],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNDEFINED_KEYWORD, handleTSUndefinedKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TUPLE, handleETSTuple],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TRY_STATEMENT, handleTryStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_UNARY_EXPRESSION, handleUnaryExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_IN_STATEMENT, handleForInStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_THIS_EXPRESSION, handleThisExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_METHOD_SIGNATURE, handleTSMethodSignature],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BINARY_EXPRESSION, handleBinaryExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SUPER_EXPRESSION, handleSuperExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ASSERT_STATEMENT, handleAssertStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_STRING_KEYWORD, handleTSStringKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPRESSION_STATEMENT, handleExpressionStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_MODULE, handleETSModule],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_META_PROPERTY_EXPRESSION, handleMetaProperty],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ARRAY_TYPE, handleTSArrayType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_SIGNATURE_DECLARATION, handleTSSignatureDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_ALL_DECLARATION, handleExportAllDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_SPECIFIER, handleExportSpecifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TUPLE_TYPE, handleTSTupleType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FUNCTION_EXPRESSION, handleFunctionExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INDEX_SIGNATURE, handleTSIndexSignature],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MODULE_DECLARATION, handleTSModuleDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_DECLARATION, handleImportDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PARENT_TYPE, handleTSParenthesizedType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CHAR_LITERAL, handleCharLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PACKAGE_DECLARATION, handleETSPackageDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_IMPORT_DECLARATION, handleETSImportDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_STRUCT_DECLARATION, handleETSStructDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MODULE_BLOCK, handleTSModuleBlock],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_ARRAY_INSTANCE_EXPRESSION, handleETSNewArrayInstanceExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ANNOTATION_DECLARATION, handleAnnotationDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ANNOTATION_USAGE, handleAnnotationUsage],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EMPTY_STATEMENT, handleEmptyStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_WHILE_STATEMENT, handleWhileStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CHAIN_EXPRESSION, handleChainExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERSECTION_TYPE, handleTSIntersectionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_UPDATE_EXPRESSION, handleUpdateExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_EXPRESSION, handleBlockExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_LITERAL, handleTSTypeLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER, handleTSTypeParameter],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BOOLEAN_LITERAL, handleTSBooleanKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PREDICATE, handleTSTypePredicate],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_NAMESPACE_SPECIFIER, handleImportNamespaceSpecifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_NAMED_DECLARATION, handleExportNamedDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PARAMETER_EXPRESSION, handleETSParameterExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER_INSTANTIATION, handleTSTypeParameterInstantiation],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NULL_LITERAL, handleNullLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INFER_TYPE, handleTSInferType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SWITCH_CASE_STATEMENT, handleSwitchCaseStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_YIELD_EXPRESSION, handleYieldExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_IMPORT_EQUALS_DECLARATION, handleTSImportEqualsDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BOOLEAN_LITERAL, handleBooleanLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NUMBER_KEYWORD, handleTSNumberKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_STATIC_BLOCK, handleClassStaticBlock],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NON_NULL_EXPRESSION, handleTSNonNullExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_PREFIX_ASSERTION_EXPRESSION, handlePrefixAssertionExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_EXPRESSION, handleClassExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_OF_STATEMENT, handleForOfStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TEMPLATE_LITERAL, handleTemplateLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNION_TYPE, handleTSUnionType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_UNKNOWN_KEYWORD, handleTSUnknownKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IDENTIFIER, handleIdentifier],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_OPAQUE_TYPE_NODE, handleOpaqueTypeNode],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BLOCK_STATEMENT, handleBlockStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DIRECT_EVAL, handleDirectEvalExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_PARAMETER_DECLARATION, handleTSTypeParameterDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_METHOD_DEFINITION, handleMethodDefinition],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NULL_KEYWORD, handleTSNullKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INTERFACE_HERITAGE, handleTSInterfaceHeritage],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_CLASS_LITERAL, handleETSClassLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_BREAK_STATEMENT, handleBreakStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_REGEXP_LITERAL, handleRegExpLiteral],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_MAPPED_TYPE, handleTSMappedType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ANY_KEYWORD, handleTSAnyKeyword],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CLASS_DECLARATION, handleClassDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_INDEXED_ACCESS_TYPE, handleTSIndexedAccessType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_QUALIFIED_NAME, handleTSQualifiedName],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_AWAIT_EXPRESSION, handleAwaitExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CONTINUE_STATEMENT, handleContinueStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_MULTI_DIM_ARRAY_INSTANCE_EXPRESSION,
    handleETSNewMultiDimArrayInstanceExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NAMED_TUPLE_MEMBER, handleTSNamedTupleMember],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IMPORT_EXPRESSION, handleImportExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NULL_TYPE, handleETSNullType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_UNDEFINED_TYPE, handleETSUndefinedType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TYPEOF_EXPRESSION, handleTypeofExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_ENUM_MEMBER, handleTSEnumMember],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SWITCH_STATEMENT, handleSwitchStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_DO_WHILE_STATEMENT, handleDoWhileStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CATCH_CLAUSE, handleCatchClause],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SEQUENCE_EXPRESSION, handleSequenceExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ARROW_FUNCTION_EXPRESSION, handleArrowFunctionExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_OMITTED_EXPRESSION, handleOmittedExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_NEW_CLASS_INSTANCE_EXPRESSION, handleETSNewClassInstanceExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_AS_EXPRESSION, handleTSAsExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_FOR_UPDATE_STATEMENT, handleForUpdateStatement],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_TYPE_REFERENCE_PART, handleETSTypeReferencePart],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_REEXPORT_STATEMENT, handleETSReExportDeclaration],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_PRIMITIVE_TYPE, handleETSPrimitiveType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_NEW_EXPRESSION, handleNewExpression],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_PARAMETER_PROPERTY, handleTSParameterProperty],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_ETS_WILDCARD_TYPE, handleETSWildcardType],
  [arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_THIS_TYPE, handleTSThisType],
])

type NodeTuple = [string, number];
const items: NodeTuple[] = [];
const isDebug = false;
const nodeMap = new Map();
let exporssionCount = 0;

/**
 * 根节点处理
 * @param { arkts.AstNode } node 
 */
export function traverseProgram(node: arkts.AstNode) {
  // 处理Identifier
  if (!!node.statements) {
    node.statements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

/**
 * 获取Jsdoc信息
 * @param { arkts.AstNode } node 节点
 * @returns { string } jsdoc 字符串
 */
export function getJSDocInformation(node: arkts.AstNode): string {
  return arkts.getJsdocStringFromDeclaration(node);
}

/**
 * 解析AST
 * 
 * @param { arkts.AstNode } node 节点
 * @param { (node: any, ...args: any[]) => void } func 实际方法
 */
function handleFunction(node: arkts.AstNode, func: (node: any, ...args: any[]) => void) {
  if (isDebug) {
    items.push([func.name, node.peer.toString()]);
  }
  // Expression 下的identifier才会提示告警
  if (node instanceof arkts.Expression) {
    exporssionCount++;
  }
  if (node == null || node == undefined) {
    return;
  }

  func(node);

  if (isDebug) {
    if (nodeMap.has(node.peer.toString())) {
      if (nodeMap.get(node.peer.toString()) > 2) {
        console.error("[API_CHECK_PLUGIN] repeat traverse");
      }
      nodeMap.set(node.peer.toString(), nodeMap.get(node.peer.toString()) + 1);
    } else {
      nodeMap.set(node.peer.toString(), 1);
    }
    items.pop();
  }
  if (node instanceof arkts.Expression) {
    exporssionCount--;
  }
}

export function handleAstNode(node: arkts.AstNode) {
  if (isDebug) {
    console.info('[API_CHECK_PLUGIN] handleAstNode');
  }
  let kind: number = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, node.peer)
  if (nodeHandleFunctionMap.has(kind) && nodeHandleFunctionMap.get(kind) !== undefined) {
    handleFunction(node, nodeHandleFunctionMap.get(kind)!)
  } else {
    console.error(`[API_CHECK_PLUGIN] debug handleAstNode ${node.constructor.name} error!`)
  }
}

export function handleAnnotatedAstNode(node: arkts.AstNode) { }

export function handleAnnotatedExpression(node: arkts.AstNode) {
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleAnnotatedStatement(node: arkts.AstNode) { }

export function handleAnnotationDeclaration(node: arkts.AstNode) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.properties) {
    node.properties.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleFunction(item, handleAnnotationUsage));
  }
}

export function handleAnnotationUsage(node: arkts.AstNode) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.properties) {
    node.properties.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleArrayExpression(node: arkts.AstNode) {
  if (!!node.elements) {
    node.elements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.declarators) {
    node.declarators.forEach((item: arkts.AstNode) => handleFunction(item, handleDecorator));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleArrowFunctionExpression(node: arkts.AstNode) {
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleFunction(item, handleAnnotationUsage));
  }
  if (!!node.scriptFunction) {
    handleAstNode(node.scriptFunction);
  }
}

export function handleAssertStatement(node: arkts.AstNode) {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.second) {
    handleAstNode(node.second);
  }
}

export function handleAssignmentExpression(node: arkts.AstNode) {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
}

export function handleAstDumper(node: arkts.AstNode) {
  return;
}

export function handleAwaitExpression(node: arkts.AstNode) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

export function handleBigIntLiteral(node: arkts.AstNode) { }

export function handleBinaryExpression(node: arkts.AstNode) {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleAstNode(node.right);
  }
  if (!!node.result) {
    handleAstNode(node.result);
  }
}

export function handleBlockExpression(node: arkts.AstNode) {
  if (!!node.statements) {
    node.statements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleBlockStatement(node: arkts.AstNode) {
  if (!!node.statements) {
    node.statements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleBooleanLiteral(node: arkts.AstNode) { }

export function handleBreakStatement(node: arkts.AstNode) {
  if (!!node.ident) {
    handleFunction(node.ident, handleIdentifier);
  }
  if (!!node.target) {
    handleAstNode(node.target);
  }
}

export function handleCallExpression(node: arkts.AstNode) {
  if (!!node.trailingBlock) {
    handleAstNode(node.trailingBlock);
  }
  if (!!node.expression) {
    handleAstNode(node.expression);
  }
  if (!!node.typeArguments) {
    node.typeArguments.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
  if (!!node.arguments) {
    node.arguments.forEach((item: arkts.Expression) => handleAstNode(item));
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
}

export function handleCatchClause(node: arkts.AstNode) {
  if (!!node.param) {
    handleAstNode(node.param);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleChainExpression(node: arkts.AstNode) {
  if (!!node.getExpression) {
    handleAstNode(node.getExpression);
  }
}

export function handleCharLiteral(node: arkts.AstNode) { }

export function handleClassDeclaration(node: arkts.AstNode) {
  if (!!node.definition) {
    handleFunction(node.definition, handleClassDefinition);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleFunction(item, handleDecorator));
  }
}

export function handleClassDefinition(node: arkts.AstNode) {
  if (!!node.ident) {
    handleFunction(node.ident, handleIdentifier);
  }
  if (!!node.super) {
    handleAstNode(node.super);
  }
  if (!!node.body) {
    node.body.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.implments) {
    node.implments.forEach((item: arkts.AstNode) => handleFunction(item, handleTSClassImplements));
  }
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterDeclaration);
  }
  if (!!node.superTypeParams) {
    handleFunction(node.superTypeParams, handleTSTypeParameterInstantiation);
  }
  if (!!node.origEnumDecl) {
    handleFunction(node.origEnumDecl, handleTSEnumDeclaration);
  }
  if (!!node.getAnonClass) {
    handleAstNode(node.getAnonClass);
  }
}

export function handleClassElement(node: arkts.AstNode) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.value) {
    handleAstNode(node.value);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleFunction(item, handleDecorator));
  }
}

export function handleClassExpression(node: arkts.AstNode) {
  if (!!node.definition) {
    handleFunction(node.definition, handleClassDefinition);
  }
}

export function handleClassProperty(node: arkts.AstNode) {
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleFunction(item, handleAnnotationUsage));
  }
}

export function handleClassStaticBlock(node: arkts.AstNode) { }

export function handleConditionalExpression(node: arkts.AstNode) {
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

export function handleContext(node: arkts.AstNode) { }

/**
 * target重复节点，不遍历
 * @param { arkts.AstNode } node 
 */
export function handleContinueStatement(node: arkts.AstNode) {
  if (!!node.ident) {
    handleFunction(node.ident, handleIdentifier);
  }
}

export function handleDebuggerStatement(node: arkts.AstNode) { }

export function handleDecorator(node: arkts.AstNode) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

export function handleDirectEvalExpression(node: arkts.AstNode) {
  if (!!node.trailingBlock) {
    handleAstNode(node.trailingBlock);
  }
  if (!!node.expression) {
    handleAstNode(node.expression);
  }
  if (!!node.typeArguments) {
    node.typeArguments.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
  if (!!node.arguments) {
    node.arguments.forEach((item: arkts.Expression) => handleAstNode(item));
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
}

export function handleDoWhileStatement(node: arkts.AstNode) {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleETSClassLiteral(node: arkts.AstNode) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

export function handleETSDynamicFunctionType(node: arkts.AstNode) {
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterDeclaration);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
  if (!!node.functionInterface) {
    handleAstNode(node.functionInterface);
  }
}

export function handleETSFunctionType(node: arkts.AstNode) {
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterDeclaration);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
  if (!!node.functionInterface) {
    handleAstNode(node.functionInterface);
  }
}

export function handleETSImportDeclaration(node: arkts.AstNode) { }

export function handleETSModule(node: arkts.AstNode) {
  if (!!node.ident) {
    handleFunction(node.ident, handleIdentifier);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleFunction(item, handleAnnotationUsage));
  }
  if (!!node.statements) {
    node.statements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleETSNewArrayInstanceExpression(node: arkts.AstNode) {
  if (!!node.typeReference) {
    handleAstNode(node.typeReference);
  }
  if (!!node.dimension) {
    handleAstNode(node.dimension);
  }
}

export function handleETSNewClassInstanceExpression(node: arkts.AstNode) {
  if (!!node.getTypeRef) {
    handleAstNode(node.getTypeRef);
  }
  if (!!node.getArgments) {
    node.getArgments.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleETSNewMultiDimArrayInstanceExpression(node: arkts.AstNode) {
  if (!!node.dimensions) {
    node.dimensions.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.typeReference) {
    handleAstNode(node.typeReference);
  }
}

export function handleETSNullType(node: arkts.AstNode) { }

export function handleETSPackageDeclaration(node: arkts.AstNode) { }

export function handleETSParameterExpression(node: arkts.AstNode) {
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleFunction(item, handleAnnotationUsage));
  }
  if (!!node.type) {
    handleAstNode(node.type);
  }
  if (!!node.initializer) {
    handleAstNode(node.initializer);
  }
  if (!!node.identifier) {
    handleFunction(node.identifier, handleIdentifier);
  }
}

export function handleETSPrimitiveType(node: arkts.AstNode) {
}

export function handleETSReExportDeclaration(node: arkts.AstNode) {
  if (!!node.getETSImportDeclarations) {
    handleFunction(node.getETSImportDeclarations, handleETSImportDeclaration);
  }
}

export function handleETSStructDeclaration(node: arkts.AstNode) {
  if (!!node.definition) {
    handleFunction(node.definition, handleClassDefinition);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleFunction(item, handleDecorator));
  }
}

export function handleETSTuple(node: arkts.AstNode) {
  if (!!node.getTupleTypeAnnotationsList) {
    node.getTupleTypeAnnotationsList.forEach((item: arkts.AstNde) => handleAstNode(item));
  }
}

export function handleETSTypeReference(node: arkts.AstNode) {
  if (!!node.part) {
    handleFunction(node.part, handleETSTypeReferencePart);
  }
}

export function handleETSTypeReferencePart(node: arkts.AstNode) {
  if (!!node.previous) {
    handleFunction(node.previous, handleETSTypeReferencePart);
  }
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterInstantiation);
  }
}

export function handleETSUndefinedType(node: arkts.AstNode) { }

export function handleETSUnionType(node: arkts.AstNode) {
  if (!!node.types) {
    node.types.forEach((item: arkts.AstNde) => handleAstNode(item));
  }
}

export function handleETSWildcardType(node: arkts.AstNode) {
  if (!!node.typeReference) {
    handleFunction(node.typeReference, handleETSTypeReference);
  }
}

export function handleEmptyStatement(node: arkts.AstNode) { }

export function handleExportAllDeclaration(node: arkts.AstNode) {
  if (!!node.source) {
    handleFunction(node.source, handleStringLiteral);
  }
  if (!!node.exported) {
    handleFunction(node.exported, handleIdentifier);
  }
}

export function handleExportDefaultDeclaration(node: arkts.AstNode) {
  if (!!node.decl) {
    handleAstNode(node.decl);
  }
}

export function handleExportNamedDeclaration(node: arkts.AstNode) {
  if (!!node.decl) {
    handleAstNode(node.decl);
  }
  if (!!node.source) {
    handleFunction(node.source, handleStringLiteral);
  }
  if (!!node.specifiers) {
    node.specifiers.forEach((item: arkts.AstNode) => handleFunction(item, handleExportSpecifier));
  }
}

export function handleExportSpecifier(node: arkts.AstNode) {
  if (!!node.local) {
    handleFunction(node.local, handleIdentifier);
  }
  if (!!node.exported) {
    handleFunction(node.exported, handleIdentifier);
  }
}

export function handleExpression(node: arkts.AstNode) { }

export function handleExpressionStatement(node: arkts.AstNode) {
  if (!!node.expression) {
    handleAstNode(node.expression);
  }
}

export function handleForInStatement(node: arkts.AstNode) {
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

export function handleForOfStatement(node: arkts.AstNode) {
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

export function handleForUpdateStatement(node: arkts.AstNode) {
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

export function handleFunctionDecl(node: arkts.AstNode) {
  if (!!node.id) {
    handleFunction(node.id, handleIdentifier);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnStatements) {
    node.returnStatements.forEach((item: arkts.AstNode) => handleFunction(item, handleReturnStatement));
  }
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterDeclaration);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
  if (!!node.returnTypeAnnotation) {
    handleAstNode(node.returnTypeAnnotation);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNde) => handleFunction(item, handleAnnotationUsage));
  }
}

export function handleFunctionDeclaration(node: arkts.AstNode) {
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleFunction(item, handleAnnotationUsage));
  }
  if (!!node.scriptFunction) {
    handleAstNode(node.scriptFunction);
  }
  if (!!node.parameters) {
    node.parameters.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.name) {
    handleFunction(node.name, handleIdentifier);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
  if (!!node.typeParamsDecl) {
    handleFunction(node.typeParamsDecl, handleTSTypeParameterDeclaration);
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
}

export function handleFunctionExpression(node: arkts.AstNode) {
  if (!!node.scriptFunction) {
    handleAstNode(node.scriptFunction);
  }

}

export function handleFunctionSignature(node: arkts.AstNode) {
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterDeclaration);
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
}

export function handleIdentifier(node: arkts.AstNode) {
  if (exporssionCount > 1) {
    checkIdentifier(node);
  }

  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleFunction(item, handleDecorator));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleIfStatement(node: arkts.AstNode) {
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

export function handleImportDeclaration(node: arkts.AstNode) {
}

export function handleImportDefaultSpecifier(node: arkts.AstNode) {
  if (!!node.local) {
    handleFunction(node.local, handleIdentifier);
  }
}

export function handleImportExpression(node: arkts.AstNode) {
  if (!!node.source) {
    handleFunction(node.source, handleStringLiteral);
  }
}

export function handleImportNamespaceSpecifier(node: arkts.AstNode) {
  if (!!node.local) {
    handleFunction(node.local, handleIdentifier);
  }

}

export function handleImportSource(node: arkts.AstNode) {
  if (!!node.source) {
    handleFunction(node.source, handleStringLiteral);
  }
  if (!!node.resolvedSource) {
    handleFunction(node.resolvedSource, handleStringLiteral);
  }
}

export function handleImportSpecifier(node: arkts.AstNode) {
  if (!!node.imported) {
    handleFunction(node.imported, handleIdentifier);
  }
  if (!!node.local) {
    handleFunction(node.local, handleIdentifier);
  }

}

export function handleInterfaceDecl(node: arkts.AstNode) {
  if (!!node.id) {
    handleFunction(node.id, handleIdentifier);
  }
  if (!!node.body) {
    handleFunction(node.body, handleTSInterfaceBody);
  }
  if (!!node.typeParams) {
    handleFunction(node.typeParam, handleTSTypeParameterDeclaration);
  }
  if (!!node.extends) {
    node.extends.forEach((item: arkts.TypeNode) => handleFunction(item, handleTSInterfaceHeritage));
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleFunction(item, handleDecorator));
  }
  if (!!node.getAnonClass) {
    handleAstNode(node.getAnonClass);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleFunction(item, handleAnnotationUsage));
  }
}

export function handleLabelPair(node: arkts.AstNode) {
  if (!!node.ident) {
    handleFunction(node.ident, handleIdentifier);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleLabelledStatement(node: arkts.AstNode) { }

export function handleLiteral(node: arkts.AstNode) { }

export function handleLoopStatement(node: arkts.AstNode) { }

export function handleMaybeOptionalExpression(node: arkts.AstNode) { }

export function handleMemberExpression(node: arkts.AstNode) {
  if (!!node.object) {
    handleAstNode(node.object);
  }
  if (!!node.property) {
    handleAstNode(node.property);
  }
}

export function handleMetaProperty(node: arkts.AstNode) { }

export function handleMethodDefinition(node: arkts.AstNode) {
  if (!!node.overloads) {
    node.overloads.forEach((item: arkts.AstNode) => handleFunction(item, handleMethodDefinition));
  }
  if (!!node.scriptFunction) {
    handleAstNode(node.scriptFunction);
  }
  if (!!node.name) {
    handleFunction(node.name, handleIdentifier);
  }
}

export function handleNamedType(node: arkts.AstNode) {
  if (!!node.name) {
    handleFunction(node.name, handleIdentifier);
  }
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterInstantiation);
  }
}

export function handleNewExpression(node: arkts.AstNode) {
  if (!!node.callee) {
    handleAstNode(node.callee);
  }
  if (!!node.arguments) {
    node.arguments.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleNullLiteral(node: arkts.AstNode) { }

export function handleNumberLiteral(node: arkts.AstNode) { }

export function handleObjectExpression(node: arkts.AstNode) {
  if (!!node.properties) {
    node.properties.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleFunction(item, handleDecorator));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleOmittedExpression(node: arkts.AstNode) { }

export function handleOpaqueTypeNode(node: arkts.AstNode) { }

export function handlePrefixAssertionExpression(node: arkts.AstNode) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.type) {
    handleAstNode(node.type);
  }
}

export function handleProperty(node: arkts.AstNode) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.value) {
    handleAstNode(node.value);
  }
}

export function handleRegExpLiteral(node: arkts.AstNode) { }

export function handleReturnStatement(node: arkts.AstNode) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

export function handleScriptFunction(node: arkts.AstNode) {
  if (!!node.id) {
    handleFunction(node.id, handleIdentifier);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnStatements) {
    node.returnStatements.forEach((item: arkts.AstNode) => handleFunction(item, handleReturnStatement));
  }
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterDeclaration);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
  if (!!node.returnTypeAnnotation) {
    handleAstNode(node.returnTypeAnnotation);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNde) => handleFunction(item, handleAnnotationUsage));
  }
}

export function handleSequenceExpression(node: arkts.AstNode) {
  if (!!node.sequence) {
    node.sequence.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleSpreadElement(node: arkts.AstNode) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleFunction(item, handleDecorator));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleSrcDumper(node: arkts.AstNode) {
  return;
}

export function handleStatement(node: arkts.AstNode) {
}

export function handleStringLiteral(node: arkts.AstNode) { }

export function handleSuperExpression(node: arkts.AstNode) {
  if (!!node.id) {
    handleFunction(node.id, handleIdentifier);
  }
}

export function handleSwitchCaseStatement(node: arkts.AstNode) {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.consequent) {
    node.consequent.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleSwitchStatement(node: arkts.AstNode) {
  if (!!node.discriminant) {
    handleAstNode(node.discriminant);
  }
  if (!!node.cases) {
    node.cases.forEach((item: arkts.AstNode) => handleFunction(item, handleSwitchCaseStatement));
  }
}

export function handleTSAnyKeyword(node: arkts.AstNode) {
}

export function handleTSArrayType(node: arkts.AstNode) {
  if (!!node.elementType) {
    handleAstNode(node.elementType);
  }
}

export function handleTSAsExpression(node: arkts.AstNode) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleTSBigintKeyword(node: arkts.AstNode) { }

export function handleTSBooleanKeyword(node: arkts.AstNode) { }

export function handleTSClassImplements(node: arkts.AstNode) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
  if (!!node.typeParameters) {
    handleFunction(node.typeParameters, handleTSTypeParameterInstantiation);
  }
}

export function handleTSConditionalType(node: arkts.AstNode) {
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

export function handleTSConstructorType(node: arkts.AstNode) {
  if (!!node.typeParams) {
    handleFunction(node.typeParameters, handleTSTypeParameterInstantiation);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
}

export function handleTSEnumDeclaration(node: arkts.AstNode) {
  if (!!node.key) {
    handleFunction(node.key, handleIdentifier);
  }
  if (!!node.members) {
    node.members.forEach((item: arkts.AstNde) => handleAstNode(item));
  }
  if (!!node.boxedClass) {
    handleFunction(node.boxedClass, handleClassDefinition);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleFunction(item, handleDecorator));
  }
}

export function handleTSEnumMember(node: arkts.AstNode) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.init) {
    handleAstNode(node.init);
  }
}

export function handleTSExternalModuleReference(node: arkts.AstNode) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

export function handleTSFunctionType(node: arkts.AstNode) {
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterInstantiation);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
  if (!!node.returnType) {
    handleAstNode(node.returnType);
  }
}

export function handleTSImportEqualsDeclaration(node: arkts.AstNode) {
  if (!!node.id) {
    handleFunction(node.id, handleIdentifier);
  }
  if (!!node.moduleReference) {
    handleAstNode(node.moduleReference);
  }
}

export function handleTSImportType(node: arkts.AstNode) {
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterInstantiation);
  }
  if (!!node.params) {
    handleAstNode(node.params);
  }
  if (!!node.qualifier) {
    handleAstNode(node.qualifier);
  }
}

export function handleTSIndexSignature(node: arkts.AstNode) {
  if (!!node.objectType) {
    handleAstNode(node.objectType);
  }
  if (!!node.indexType) {
    handleAstNode(node.indexType);
  }
}

export function handleTSIndexedAccessType(node: arkts.AstNode) {
  if (!!node.param) {
    handleAstNode(node.param);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleTSInferType(node: arkts.AstNode) {
  if (!!node.typeParam) {
    handleFunction(node.typeParam, handleTSTypeParameter);
  }
}

export function handleTSInterfaceBody(node: arkts.AstNode) {
  if (!!node.body) {
    node.body.forEach((item: arkts.TypeNode) => handleAstNode(item));
  }
}

export function handleTSInterfaceDeclaration(node: arkts.AstNode) {
  if (!!node.id) {
    handleFunction(node.id, handleIdentifier);
  }
  if (!!node.body) {
    handleFunction(node.body, handleTSInterfaceBody);
  }
  if (!!node.typeParams) {
    handleFunction(node.typeParam, handleTSTypeParameterDeclaration);
  }
  if (!!node.extends) {
    node.extends.forEach((item: arkts.TypeNode) => handleFunction(item, handleTSInterfaceHeritage));
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleFunction(item, handleDecorator));
  }
  if (!!node.getAnonClass) {
    handleAstNode(node.getAnonClass);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleFunction(item, handleAnnotationUsage));
  }
}

export function handleTSInterfaceHeritage(node: arkts.AstNode) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

export function handleTSIntersectionType(node: arkts.AstNode) {
  if (!!node.types) {
    node.types.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSLiteralType(node: arkts.AstNode) {
  if (!!node.literal) {
    handleAstNode(node.literal);
  }
}

export function handleTSMappedType(node: arkts.AstNode) {
  if (!!node.typeParameter) {
    handleFunction(node.typeParameter, handleTSTypeParameter);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleTSMethodSignature(node: arkts.AstNode) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterDeclaration);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnTypeAnnotation) {
    handleAstNode(node.returnTypeAnnotation);
  }
}

export function handleTSModuleBlock(node: arkts.AstNode) {
  if (!!node.statements) {
    node.statements.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSModuleDeclaration(node: arkts.AstNode) {
  if (!!node.name) {
    handleAstNode(node.name);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleTSNamedTupleMember(node: arkts.AstNode) {
  if (!!node.label) {
    handleAstNode(node.label);
  }
  if (!!node.elementType) {
    handleAstNode(node.elementType);
  }
}

export function handleTSNeverKeyword(node: arkts.AstNode) { }

export function handleTSNonNullExpression(node: arkts.AstNode) {
  if (!!node.expr) {
    handleAstNode(node.expr);
  }
}

export function handleTSNullKeyword(node: arkts.AstNode) { }

export function handleTSNumberKeyword(node: arkts.AstNode) { }

export function handleTSObjectKeyword(node: arkts.AstNode) { }

export function handleTSParameterProperty(node: arkts.AstNode) {
  if (!!node.parameter) {
    handleAstNode(node.parameter);
  }
}

export function handleTSParenthesizedType(node: arkts.AstNode) {
  if (!!node.type) {
    handleAstNode(node.type);
  }
}

export function handleTSPropertySignature(node: arkts.AstNode) {
  if (!!node.key) {
    handleAstNode(node.key);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleTSQualifiedName(node: arkts.AstNode) {
  if (!!node.left) {
    handleAstNode(node.left);
  }
  if (!!node.right) {
    handleFunction(node.right, handleIdentifier);
  }
}

export function handleTSSignatureDeclaration(node: arkts.AstNode) {
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterDeclaration);
  }
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.returnTypeAnnotation) {
    handleAstNode(node.returnTypeAnnotation);
  }
}

export function handleTSStringKeyword(node: arkts.AstNode) { }

export function handleTSThisType(node: arkts.AstNode) { }

export function handleTSTupleType(node: arkts.AstNode) {
  if (!!node.elementType) {
    node.elementType.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSTypeAliasDeclaration(node: arkts.AstNode) {
  if (!!node.id) {
    handleFunction(node.id, handleIdentifier);
  }
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterDeclaration);
  }
  if (!!node.decorators) {
    node.decorators.forEach((item: arkts.AstNode) => handleFunction(item, handleDecorator));
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleFunction(item, handleAnnotationUsage));
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleTSTypeAssertion(node: arkts.AstNode) {
  if (!!node.getExpression) {
    handleAstNode(node.getExpression);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }

}

export function handleTSTypeLiteral(node: arkts.AstNode) {
  if (!!node.members) {
    node.members.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
  if (!!node.type) {
    handleAstNode(node.type);
  }
}

export function handleTSTypeOperator(node: arkts.AstNode) {
  if (!!node.type) {
    handleAstNode(node.type);
  }
}

export function handleTSTypeParameter(node: arkts.AstNode) {
  if (!!node.name) {
    handleFunction(node.name, handleIdentifier);
  }
  if (!!node.constraint) {
    handleAstNode(node.constraint);
  }
  if (!!node.defaultType) {
    handleAstNode(node.defaultType);
  }
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleFunction(item, handleAnnotationUsage));
  }
}

export function handleTSTypeParameterDeclaration(node: arkts.AstNode) {
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleFunction(item, handleTSTypeParameter));
  }
}

export function handleTSTypeParameterInstantiation(node: arkts.AstNode) {
  if (!!node.params) {
    node.params.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleTSTypePredicate(node: arkts.AstNode) {
  if (!!node.parameterName) {
    handleAstNode(node.parameterName);
  }
  if (!!node.typeAnnotation) {
    handleAstNode(node.typeAnnotation);
  }
}

export function handleTSTypeQuery(node: arkts.AstNode) {
  if (!!node.exprName) {
    handleAstNode(node.exprName);
  }
}

export function handleTSTypeReference(node: arkts.AstNode) {
  if (!!node.typeName) {
    handleAstNode(node.typeName);
  }
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterInstantiation);
  }
}

export function handleTSUndefinedKeyword(node: arkts.AstNode) { }

export function handleTSUnionType(node: arkts.AstNode) {
  if (!!node.types) {
    node.types.forEach((item: arkts.AstNode) => traverseProgram(item));
  }
}

export function handleTSUnknownKeyword(node: arkts.AstNode) { }

export function handleTSVoidKeyword(node: arkts.AstNode) { }

export function handleTaggedTemplateExpression(node: arkts.AstNode) {
  if (!!node.tag) {
    handleAstNode(node.tag);
  }
  if (!!node.quasi) {
    handleFunction(node.quasi, handleTemplateLiteral);
  }
  if (!!node.typeParams) {
    handleFunction(node.typeParams, handleTSTypeParameterInstantiation);
  }
}

export function handleTemplateElement(node: arkts.AstNode) { }

export function handleTemplateLiteral(node: arkts.AstNode) {
  if (!!node.quasis) {
    node.quasis.forEach((item: arkts.AstNode) => handleFunction(item, handleTemplateLiteral));
  }
  if (!!node.expressions) {
    node.expressions.forEach((item: arkts.AstNode) => handleAstNode(item));
  }
}

export function handleThisExpression(node: arkts.AstNode) { }

export function handleThrowStatement(node: arkts.AstNode) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

export function handleTryStatement(node: arkts.AstNode) {
  if (!!node.finallyBlock) {
    handleAstNode(node.finallyBlock);
  }
  if (!!node.block) {
    handleAstNode(node.block);
  }
  if (!!node.catchClauses) {
    node.catchClauses.forEach((item: arkts.AstNode) => handleFunction(item, handleCatchClause));
  }
}

export function handleTypeNode(node: arkts.AstNode) { }

export function handleTypedAstNode(node: arkts.AstNode) { }

export function handleTypedStatement(node: arkts.AstNode) { }

export function handleTypeofExpression(node: arkts.AstNode) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

export function handleUnaryExpression(node: arkts.AstNode) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

export function handleUndefinedLiteral(node: arkts.AstNode) { }

export function handleUpdateExpression(node: arkts.AstNode) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}

export function handleValidationInfo(node: arkts.AstNode) { }

export function handleVariableDeclaration(node: arkts.AstNode) {
  if (!!node.annotations) {
    node.annotations.forEach((item: arkts.AstNode) => handleFunction(item, handleAnnotationUsage));
  }
  if (!!node.declarators) {
    node.declarators.forEach((item: arkts.AstNode) => handleFunction(item, handleVariableDeclarator));
  }
}

export function handleVariableDeclarator(node: arkts.AstNode) {
  if (!!node.initializer) {
    handleAstNode(node.initializer);
  }
  if (!!node.name) {
    handleFunction(node.name, handleIdentifier);
  }
}

export function handleWhileStatement(node: arkts.AstNode) {
  if (!!node.test) {
    handleAstNode(node.test);
  }
  if (!!node.body) {
    handleAstNode(node.body);
  }
}

export function handleYieldExpression(node: arkts.AstNode) {
  if (!!node.argument) {
    handleAstNode(node.argument);
  }
}
