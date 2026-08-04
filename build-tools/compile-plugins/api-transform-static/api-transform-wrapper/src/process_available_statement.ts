/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as arkts from '@koalaui/libarkts';
import { globalObject } from '../../index';
import {
  MOCK_FUNCTION_NAME,
  TARGET_FUNCTION_NAME,
  SDK_DEVICE_INFO_FILE,
  SINGLE_SETTER_BY_KIND,
  SLOT_SETTERS_BY_KIND
} from '../util/api_transform_plugin_define';

let replacementCount = 0;

/** 检查表达式是否为 apiAvailable 属性访问，支持 NonNull/As/TypeAssertion 包装 */
function isApiAvailableExpression(node: arkts.AstNode): boolean {
  if (arkts.isTSNonNullExpression(node) || arkts.isTSAsExpression(node) || arkts.isTSTypeAssertion(node)) {
    return isApiAvailableExpression(node.expr ?? node.expression);
  }
  if (arkts.isMemberExpression(node)) {
    if (!arkts.isIdentifier(node.property) || node.property.name !== TARGET_FUNCTION_NAME) {
      return false;
    }
    return isDeclaredInDeviceInfoSdk(node);
  }
  return false;
}

/** 验证 apiAvailable 的声明来自 @ohos.deviceInfo.d.ets SDK 文件 */
function isDeclaredInDeviceInfoSdk(node: arkts.AstNode): boolean {
  const nodeDecl = arkts.getDecl(node);
  if (!nodeDecl) {
    return false;
  }
  const program = arkts.getProgramFromAstNode(nodeDecl);
  if (!program) {
    return false;
  }
  const declFile = (program.sourceFilePath || '').replace(/\\/g, '/');
  return declFile.endsWith(SDK_DEVICE_INFO_FILE);
}

/** 提取 apiAvailable 调用链中的对象部分，如 deviceInfo.apiAvailable(12) → deviceInfo */
function extractCallChain(node: arkts.AstNode): arkts.AstNode | null {
  if (arkts.isMemberExpression(node)) {
    return node.object;
  }
  if (arkts.isTSNonNullExpression(node)) {
    return extractCallChain(node.expr);
  }
  if (arkts.isTSAsExpression(node)) {
    return extractCallChain(node.expr);
  }
  if (arkts.isTSTypeAssertion(node)) {
    return extractCallChain(node.expression);
  }
  if (arkts.isIdentifier(node)) {
    return node;
  }
  return node;
}

/** 判断节点是否在 typeof 表达式中 */
function isUnderTypeOfExpression(node: arkts.AstNode): boolean {
  let current = node.parent;
  while (current) {
    const kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, current.peer);
    if (kind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TYPEOF_EXPRESSION) {
      return true;
    }
    if (
      kind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_AS_EXPRESSION ||
      kind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_TYPE_ASSERTION ||
      kind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_TS_NON_NULL_EXPRESSION
    ) {
      current = current.parent;
      continue;
    }
    break;
  }
  return false;
}

/** 递归收集表达式中的所有 Identifier 名称 */
function collectIdentifiers(node: arkts.AstNode, names: Set<string>): void {
  if (arkts.isIdentifier(node)) {
    names.add(node.name);
  }
  const handler = arkts.arktsGlobal.generatedEs2panda._astChildrenIterate;
  if (handler) {
    handler(node, (child: arkts.AstNode) => collectIdentifiers(child, names));
  }
}

/** 生成不与 chain 中标识符冲突的闭包参数名 */
function generateUniqueParamName(chain: arkts.AstNode): string {
  const usedNames = new Set<string>();
  collectIdentifiers(chain, usedNames);
  if (!usedNames.has('v')) {
    return 'v';
  }
  let i = 0;
  while (usedNames.has('v' + i)) {
    i++;
  }
  return 'v' + i;
}

/** 调用父节点的 setter 方法替换子节点，setter 缺失时返回 false */
function applySetter(parent: any, setterName: string, newChild: arkts.AstNode): boolean {
  if (typeof parent[setterName] === 'function') {
    parent[setterName](newChild);
    return true;
  }
  return false;
}

/** 在父节点的槽位中定位并替换子节点，列表槽位（如 arguments/statements）整体替换 */
function replaceIndexedChild(
  parent: any,
  prop: string,
  setterName: string,
  oldPeer: unknown,
  newChild: arkts.AstNode
): boolean {
  if (typeof parent[setterName] !== 'function') {
    return false;
  }
  const items: unknown = parent[prop];
  if (Array.isArray(items)) {
    const idx = (items as readonly arkts.AstNode[]).findIndex((item: arkts.AstNode) => item?.peer === oldPeer);
    if (idx < 0) {
      return false;
    }
    const next = [...(items as arkts.AstNode[])];
    next[idx] = newChild;
    parent[setterName](next);
    return true;
  }
  if ((items as arkts.AstNode | undefined)?.peer === oldPeer) {
    parent[setterName](newChild);
    return true;
  }
  return false;
}

/**
 * 在父节点中将 oldChild 替换为 newChild
 * @returns 是否成功替换
 */
function replaceNodeInParent(oldChild: arkts.AstNode, newChild: arkts.AstNode): boolean {
  const parent = oldChild.parent;
  if (!parent) {
    return false;
  }

  // 转为 any 来调用 @deprecated setter，因为类型定义可能不完整
  const p = parent as any;
  const kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, parent.peer);

  const singleSetter = SINGLE_SETTER_BY_KIND[kind];
  if (singleSetter) {
    return applySetter(p, singleSetter, newChild);
  }

  const slots = SLOT_SETTERS_BY_KIND[kind];
  if (slots) {
    for (const { prop, setter } of slots) {
      if (replaceIndexedChild(p, prop, setter, oldChild.peer, newChild)) {
        return true;
      }
    }
    return false;
  }

  return false;
}

/**
 * 将 oldChild 节点从 AST 树中替换为 newChild 节点
 */
export function replaceInParentTree(oldChild: arkts.AstNode, newChild: arkts.AstNode): void {
  if (oldChild.peer === newChild.peer) {
    return;
  }
  if (replaceNodeInParent(oldChild, newChild)) {
    replacementCount++;
  } else {
    const parent = oldChild.parent;
    const parentKind = parent
      ? arkts.Es2pandaAstNodeType[
          arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, parent.peer)
        ]
      : 'undefined';
    console.warn(`[api-transform] cannot replace node in parent of type ${parentKind}`);
  }
}

export function hasApiAvailableTransformed(): boolean {
  return replacementCount > 0;
}

export function resetApiAvailableTransformed(): void {
  replacementCount = 0;
}

/** 判断节点是否为 CallExpression 的 callee 部分（含 TSNonNull/TSAs/TSTypeAssertion 包装） */
function isCalleeOfCallExpression(node: arkts.AstNode): boolean {
  let current: arkts.AstNode | undefined = node;
  while (current && current.parent) {
    const parent = current.parent;
    if (arkts.isCallExpression(parent)) {
      return (parent as arkts.CallExpression).callee.peer === current.peer;
    }
    if (arkts.isTSNonNullExpression(parent) || arkts.isTSAsExpression(parent) || arkts.isTSTypeAssertion(parent)) {
      current = parent;
      continue;
    }
    break;
  }
  return false;
}

/**
 * 处理 API Available 调用和引用，将 deviceInfo.apiAvailable() 替换为 __mockApiAvailable(deviceInfo.sdkApiVersion, deviceInfo.distributionOSApiVersion, ...)
 * @param node 待处理的节点
 * @returns 替换后的新节点，无需替换则返回 undefined
 */
export function processAvailableStatement(node: arkts.AstNode): arkts.AstNode | undefined {
  if (arkts.isCallExpression(node)) {
    return handleCall(node as arkts.CallExpression);
  }
  if (arkts.isMemberExpression(node)) {
    return handleReference(node as arkts.MemberExpression);
  }
  return undefined;
}

/**
 * 处理调用场景：deviceInfo.apiAvailable(12) → __mockApiAvailable(deviceInfo.sdkApiVersion, deviceInfo.distributionOSApiVersion, 12)
 */
function handleCall(node: arkts.CallExpression): arkts.AstNode | undefined {
  const callee = node.callee;
  if (!callee) {
    return undefined;
  }
  if (!isApiAvailableExpression(callee)) {
    return undefined;
  }

  const chain = extractCallChain(callee);
  if (!chain) {
    return undefined;
  }

  const newCallee = arkts.factory.createIdentifier(MOCK_FUNCTION_NAME);

  const distOSApiVersion = arkts.factory.createMemberExpression(
    chain,
    arkts.factory.createIdentifier('distributionOSApiVersion'),
    arkts.Es2pandaMemberExpressionKind.MEMBER_EXPRESSION_KIND_PROPERTY_ACCESS,
    false,
    false
  );
  const sdkApiVersion = arkts.factory.createMemberExpression(
    chain,
    arkts.factory.createIdentifier('sdkApiVersion'),
    arkts.Es2pandaMemberExpressionKind.MEMBER_EXPRESSION_KIND_PROPERTY_ACCESS,
    false,
    false
  );

  const oldArgs: readonly arkts.AstNode[] = (node as any).arguments ?? [];
  const args: arkts.AstNode[] = [sdkApiVersion, distOSApiVersion, ...oldArgs];

  return arkts.factory.createCallExpression(newCallee, args, undefined, false, false);
}

/**
 * 处理引用场景：obj.apiAvailable → (v) => __mockApiAvailable(obj.sdkApiVersion, obj.distributionOSApiVersion, v)
 */
function handleReference(node: arkts.MemberExpression): arkts.AstNode | undefined {
  if (!isApiAvailableExpression(node)) {
    return undefined;
  }

  if (isCalleeOfCallExpression(node)) {
    return undefined;
  }
  if (isUnderTypeOfExpression(node)) {
    return undefined;
  }

  const chain = extractCallChain(node);
  if (!chain) {
    return undefined;
  }

  const paramName = generateUniqueParamName(chain);
  const versionType = arkts.factory.createETSUnionType([
    arkts.factory.createETSPrimitiveType(arkts.Es2pandaPrimitiveType.PRIMITIVE_TYPE_INT),
    arkts.factory.createETSTypeReference(
      arkts.factory.createETSTypeReferencePart(arkts.factory.createIdentifier('string'))
    )
  ]);
  const paramIdent = arkts.factory.createETSParameterExpression(
    arkts.factory.createIdentifier(paramName, versionType),
    false
  );
  const paramRef = arkts.factory.createIdentifier(paramName);

  const distOSApiVersion = arkts.factory.createMemberExpression(
    chain,
    arkts.factory.createIdentifier('distributionOSApiVersion'),
    arkts.Es2pandaMemberExpressionKind.MEMBER_EXPRESSION_KIND_PROPERTY_ACCESS,
    false,
    false
  );
  const sdkApiVersion = arkts.factory.createMemberExpression(
    chain,
    arkts.factory.createIdentifier('sdkApiVersion'),
    arkts.Es2pandaMemberExpressionKind.MEMBER_EXPRESSION_KIND_PROPERTY_ACCESS,
    false,
    false
  );

  const mockIdent = arkts.factory.createIdentifier(MOCK_FUNCTION_NAME);
  const callExpr = arkts.factory.createCallExpression(
    mockIdent,
    [sdkApiVersion, distOSApiVersion, paramRef],
    undefined,
    false,
    false
  );

  const block = arkts.factory.createBlockStatement([arkts.factory.createReturnStatement(callExpr)]);

  const func = arkts.factory.createScriptFunction(
    block,
    undefined,
    [paramIdent],
    undefined,
    false,
    arkts.Es2pandaScriptFunctionFlags.SCRIPT_FUNCTION_FLAGS_ARROW,
    arkts.Es2pandaModifierFlags.MODIFIER_FLAGS_NONE,
    undefined,
    undefined
  );

  return arkts.factory.createArrowFunctionExpression(func);
}

/**
 * 创建 __mockApiAvailable 静态方法声明（MethodDefinition 节点）
 */
export function createMockApiAvailableMethod(): arkts.MethodDefinition {
  const id = (name: string, typeAnnotation?: arkts.TypeNode): arkts.Identifier =>
    arkts.factory.createIdentifier(name, typeAnnotation);
  const intType = (): arkts.TypeNode =>
    arkts.factory.createETSPrimitiveType(arkts.Es2pandaPrimitiveType.PRIMITIVE_TYPE_INT);
  const boolType = (): arkts.TypeNode =>
    arkts.factory.createETSPrimitiveType(arkts.Es2pandaPrimitiveType.PRIMITIVE_TYPE_BOOLEAN);
  const typeRef = (name: string): arkts.TypeNode =>
    arkts.factory.createETSTypeReference(arkts.factory.createETSTypeReferencePart(id(name)));
  const versionType = (): arkts.TypeNode => arkts.factory.createETSUnionType([intType(), typeRef('string')]);
  const num = (value: number): arkts.NumberLiteral => arkts.factory.createNumberLiteral(value);
  const str = (value: string): arkts.StringLiteral => arkts.factory.createStringLiteral(value);
  const bin = (
    left: arkts.Expression,
    right: arkts.Expression,
    operatorType: arkts.Es2pandaTokenType
  ): arkts.BinaryExpression => arkts.factory.createBinaryExpression(left, right, operatorType);
  const call = (callee: arkts.Expression, args: arkts.Expression[]): arkts.CallExpression =>
    arkts.factory.createCallExpression(callee, args, undefined, false, false);
  const callIdent = (name: string, args: arkts.Expression[]): arkts.CallExpression => call(id(name), args);
  const typeAs = (expr: arkts.Expression, typeAnnotation: arkts.TypeNode): arkts.TSAsExpression =>
    arkts.factory.createTSAsExpression(expr, typeAnnotation, false);
  const member = (object: arkts.Expression, property: string): arkts.MemberExpression =>
    arkts.factory.createMemberExpression(
      object,
      id(property),
      arkts.Es2pandaMemberExpressionKind.MEMBER_EXPRESSION_KIND_PROPERTY_ACCESS,
      false,
      false
    );
  const element = (object: arkts.Expression, index: number): arkts.MemberExpression =>
    arkts.factory.createMemberExpression(
      object,
      num(index),
      arkts.Es2pandaMemberExpressionKind.MEMBER_EXPRESSION_KIND_ELEMENT_ACCESS,
      true,
      false
    );
  const returnBool = (value: boolean): arkts.ReturnStatement =>
    arkts.factory.createReturnStatement(arkts.factory.createBooleanLiteral(value));
  const constDecl = (
    name: string,
    init: arkts.Expression,
    typeAnnotation?: arkts.TypeNode
  ): arkts.VariableDeclaration =>
    arkts.factory.createVariableDeclaration(arkts.Es2pandaVariableDeclarationKind.VARIABLE_DECLARATION_KIND_CONST, [
      arkts.factory.createVariableDeclarator(
        arkts.Es2pandaVariableDeclaratorFlag.VARIABLE_DECLARATOR_FLAG_CONST,
        id(name, typeAnnotation),
        init
      )
    ]);
  const typeOfVersionIs = (typeName: string): arkts.BinaryExpression =>
    bin(
      arkts.TypeofExpression.createTypeofExpression(id('version')),
      str(typeName),
      arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_STRICT_EQUAL
    );
  const versionAsInt = (): arkts.TSAsExpression => typeAs(id('version'), intType());
  const versionAsString = (): arkts.TSAsExpression => typeAs(id('version'), typeRef('string'));

  const isOH = globalObject.projectConfig.runtimeOS === 'OpenHarmony';

  // (version < 1) || (version > 25)
  const intRangeCheck = bin(
    bin(versionAsInt(), num(1), arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_LESS_THAN),
    bin(versionAsInt(), num(25), arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_GREATER_THAN),
    arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_LOGICAL_OR
  );

  // if (typeof version === 'int') {
  //   if ((version < 1) || (version > 25)) return false;
  //   return sdkApiVersion >= version;
  // }
  const numberBranch = arkts.factory.createIfStatement(
    typeOfVersionIs('int'),
    arkts.factory.createBlockStatement([
      arkts.factory.createIfStatement(
        intRangeCheck,
        arkts.factory.createBlockStatement([returnBool(false)]),
        undefined
      ),
      arkts.factory.createReturnStatement(
        bin(id('sdkApiVersion'), versionAsInt(), arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_GREATER_THAN_EQUAL)
      )
    ]),
    undefined
  );

  const regexPattern = isOH
    ? '^(2[6-9]|[3-9]\\d)\\.(0|[1-9]\\d{0,1})\\.(0|[1-9]\\d{0,1})$'
    : '^([1-9]\\d{0,1})\\.(0|[1-9]\\d{0,1})\\.(0|[1-9]\\d{0,1})(\\(([1-9]\\d{0,1})\\))?$';
  // const versionReg = new RegExp(regexPattern)
  const versionRegDecl = constDecl(
    'versionReg',
    arkts.factory.createETSNewClassInstanceExpression(arkts.factory.createIdentifier('RegExp'), [
      arkts.factory.createStringLiteral(regexPattern)
    ]),
    typeRef('RegExp')
  );
  // const matchResult = version.toString().match(versionReg)
  const matchResultDecl = constDecl('matchResult', call(member(versionAsString(), 'match'), [id('versionReg')]));
  // if (!matchResult) return false
  const matchResultCheck = arkts.factory.createIfStatement(
    arkts.factory.createUnaryExpression(
      id('matchResult'),
      arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_EXCLAMATION_MARK
    ),
    arkts.factory.createBlockStatement([returnBool(false)]),
    undefined
  );
  // const M = matchResult[1], S = matchResult[2], F = matchResult[3]
  const majorDecl = constDecl('M', element(id('matchResult'), 1));
  const minorDecl = constDecl('S', element(id('matchResult'), 2));
  const featureDecl = constDecl('F', element(id('matchResult'), 3));

  // 非OH模式额外检查：if (Number(M) >= 26 && matchResult[4]) return false
  const extraStringChecks = isOH
    ? []
    : [
        arkts.factory.createIfStatement(
          bin(
            bin(
              callIdent('Number', [id('M')]),
              num(26),
              arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_GREATER_THAN_EQUAL
            ),
            element(id('matchResult'), 4),
            arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_LOGICAL_AND
          ),
          arkts.factory.createBlockStatement([returnBool(false)]),
          undefined
        )
      ];

  // Number(M) * 10000
  const majorValue = bin(
    callIdent('Number', [id('M')]),
    num(10000),
    arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_MULTIPLY
  );
  // Number(S) * 100
  const minorValue = bin(
    callIdent('Number', [id('S')]),
    num(100),
    arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_MULTIPLY
  );
  // const versionNumber = Number(M) * 10000 + Number(S) * 100 + Number(F)
  const versionNumberDecl = constDecl(
    'versionNumber',
    bin(
      bin(majorValue, minorValue, arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_PLUS),
      callIdent('Number', [id('F')]),
      arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_PLUS
    )
  );

  // if (typeof version === 'string') { ... return distributionOSApiVersion >= versionNumber; }
  const stringBranch = arkts.factory.createIfStatement(
    typeOfVersionIs('string'),
    arkts.factory.createBlockStatement([
      versionRegDecl,
      matchResultDecl,
      matchResultCheck,
      majorDecl,
      minorDecl,
      featureDecl,
      ...extraStringChecks,
      versionNumberDecl,
      arkts.factory.createReturnStatement(
        bin(
          id('distributionOSApiVersion'),
          id('versionNumber'),
          arkts.Es2pandaTokenType.TOKEN_TYPE_PUNCTUATOR_GREATER_THAN_EQUAL
        )
      )
    ]),
    undefined
  );

  // { ... } 最外层函数体: int分支 + string分支 + return false
  const body = arkts.factory.createBlockStatement([numberBranch, stringBranch, returnBool(false)]);

  // function __mockApiAvailable(sdkApiVersion: int, distributionOSApiVersion: int, version: int | string): boolean
  const scriptFunc = arkts.factory.createScriptFunction(
    body,
    undefined,
    [
      arkts.factory.createETSParameterExpression(id('sdkApiVersion', intType()), false),
      arkts.factory.createETSParameterExpression(id('distributionOSApiVersion', intType()), false),
      arkts.factory.createETSParameterExpression(id('version', versionType()), false)
    ],
    boolType(),
    false,
    arkts.Es2pandaScriptFunctionFlags.SCRIPT_FUNCTION_FLAGS_NONE,
    arkts.Es2pandaModifierFlags.MODIFIER_FLAGS_STATIC | arkts.Es2pandaModifierFlags.MODIFIER_FLAGS_PUBLIC,
    id(MOCK_FUNCTION_NAME),
    undefined
  );

  // __mockApiAvailable = function(...) { ... }
  const funcExpr = arkts.factory.createFunctionExpression(id(MOCK_FUNCTION_NAME), scriptFunc);

  // MethodDefinition: 作为静态方法声明插入 ETSGLOBAL class
  return arkts.factory.createMethodDefinition(
    arkts.Es2pandaMethodDefinitionKind.METHOD_DEFINITION_KIND_METHOD,
    id(MOCK_FUNCTION_NAME),
    funcExpr,
    arkts.Es2pandaModifierFlags.MODIFIER_FLAGS_STATIC | arkts.Es2pandaModifierFlags.MODIFIER_FLAGS_PUBLIC,
    false
  );
}

/**
 * 判断版本号是否为点分格式（如 '26.0.0'），首位版本号大于26
 */
export function isPointVersion(version: string | number): boolean {
  const REG_MSF = /^\'?(?:2[6-9]|[3-9][0-9])\.(?:[0-9]|[1-9][0-9]?)\.(?:[0-9]|[1-9][0-9]?)(\(\d+\))?\'?$/;
  return REG_MSF.test(version.toString());
}
