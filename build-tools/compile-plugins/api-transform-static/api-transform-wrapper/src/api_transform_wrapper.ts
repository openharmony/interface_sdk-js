/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
import { globalObject } from '../../index';
import {
  createMockApiAvailableMethod,
  hasApiAvailableTransformed,
  isPointVersion,
  processAvailableStatement,
  replaceInParentTree,
  resetApiAvailableTransformed
} from './process_available_statement';

/**
 * 从编译器上下文出发，广度优先遍历所有 Program（含外部依赖），
 * 对每个同时编译的 Program 执行 AST 遍历以直接转换 apiAvailable 节点
 * @returns 更新后的 program
 */
export function transformApiExpression(peer: arkts.KNativePointer | undefined): arkts.Program | undefined {
  const contextPtr = arkts.arktsGlobal.compilerContext?.peer ?? peer;
  if (contextPtr === null || contextPtr === undefined) {
    return undefined;
  }

  const program = arkts.getOrUpdateGlobalContext(contextPtr).program;

  const visited: Set<arkts.KNativePointer> = new Set();
  const queue: arkts.Program[] = [program];

  while (queue.length > 0) {
    const currProgram: arkts.Program = queue.shift()!;
    if (visited.has(currProgram.peer)) {
      continue;
    }
    if (currProgram.peer !== program.peer) {
      if (currProgram.isBuiltSimultaneously) {
        traverseThenUpdateProgram(currProgram);
      }
    }
    visited.add(currProgram.peer);
    for (const externalSource of currProgram.getExternalSources()) {
      visitNextProgramInQueue(queue, visited, externalSource);
    }
  }

  return program;
}

function traverseThenUpdateProgram(prog: arkts.Program): void {
  const script = prog.ast as arkts.ETSModule;
  resetApiAvailableTransformed();
  traverseProgram(script);

  if (!hasApiAvailableTransformed()) {
    prog.setAst(script);
    return;
  }
  const helperDecl: arkts.MethodDefinition = createMockApiAvailableMethod();
  // 使用 visitEachChild 遍历找到 ETSGlobalClass 并添加方法
  const updatedScript = arkts.visitEachChild(script, (node: arkts.AstNode) => {
    if (
      arkts.isClassDeclaration(node) &&
      arkts.isClassDefinition(node.definition) &&
      node.definition.ident?.name === 'ETSGLOBAL'
    ) {
      // 将 MethodDefinition 添加到 ETSGlobalClass 中
      let definition = node.definition;
      definition = arkts.factory.updateClassDefinition(
        definition,
        definition.ident,
        definition.typeParams,
        definition.superTypeParams,
        definition.implements,
        definition.ctor,
        definition.super,
        [...definition.body, helperDecl],
        definition.modifiers,
        definition.modifierFlags,
        definition.annotations
      );
      return arkts.factory.updateClassDeclaration(node, definition);
    }
    return node;
  }) as arkts.ETSModule;
  prog.setAst(updatedScript);
  arkts.setAllParents(updatedScript);
}

function visitNextProgramInQueue(
  queue: arkts.Program[],
  visited: Set<arkts.KNativePointer>,
  externalSource: arkts.ExternalSource
): void {
  const nextProgramArr: readonly arkts.Program[] = externalSource.programs ?? [];
  for (const nextProgram of nextProgramArr) {
    if (!visited.has(nextProgram.peer)) {
      queue.push(nextProgram);
    }
  }
}

function traverseProgram(program: arkts.ETSModule): void {
  if (!program) {
    return;
  }
  if (
    globalObject.projectConfig.originCompatibleSdkVersion &&
    isPointVersion(globalObject.projectConfig.originCompatibleSdkVersion)
  ) {
    return;
  }
  const needProcessAvailable: boolean = /\.apiAvailable/.test(program.dumpSrc());
  if (!needProcessAvailable) {
    return;
  }
  let nodeArray: arkts.AstNode[] = arkts.filterNodesByTypes(program, [
    arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CALL_EXPRESSION,
    arkts.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION
  ]);
  nodeArray.forEach((node: arkts.AstNode) => {
    let kind: number = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, node.peer);
    if (
      kind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CALL_EXPRESSION ||
      kind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_MEMBER_EXPRESSION
    ) {
      const replacement = processAvailableStatement(node);
      if (replacement !== undefined) {
        replaceInParentTree(node, replacement);
      }
    }
  });
}
