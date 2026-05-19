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
import { SUPPRESSWARNINGS_RULE_INFO } from '../api_check_plugin_define';
import { suppressWarningsCheckPlugin } from '../../index';
import { NodeValidator, CompositeValidator, AnnotateSuppressWarningsValidator } from './api_validate_node';


export class CommentSuppressWarningsValidator implements NodeValidator {
  private warningTypeName: string = '';

  constructor(warnName: string) {
    this.warningTypeName = warnName;
  }

  validate(node: arkts.AstNode): boolean {
    return checkSuppressWarningsCache(this.warningTypeName, node, 'comment_suppressWarnings') &&
      this.checkCommentsWarning(node);
  }

  private checkCommentsWarning(node: arkts.AstNode): boolean {
    const nodeDecl = arkts.getDecl(node);
    const program = arkts.getProgramFromAstNode(nodeDecl);
    if (!program || !program.astNode.dumpSrc()) {
      return false;
    }

    const commentsMessage: string[] = this.getAllClosestComments(program.astNode.dumpSrc(), node);
    if (!commentsMessage || commentsMessage.length === 0) {
      return false;
    }

    return this.checkCommentsMessage(commentsMessage);
  }

  private getAllClosestComments(sourceText: string, node: arkts.AstNode): string[] {
    const comments: string[] = [];
    const startPos = node.startPosition;
    if (!startPos) {
      return comments;
    }

    const nodePos = startPos.offset || 0;

    const commentRegex = /\/\/[^\n]*@SuppressWarnings[^\n]*\n/g;
    let match;
    const textBeforeNode = sourceText.substring(0, nodePos);

    while ((match = commentRegex.exec(textBeforeNode)) !== null) {
      comments.push(match[0]);
    }

    return comments;
  }

  private checkCommentsMessage(commentsMessage: string[]): boolean {
    const ruleValue = SUPPRESSWARNINGS_RULE_INFO.get(this.warningTypeName) || '';
    if (!ruleValue) {
      return false;
    }

    return commentsMessage.some(comment => comment.includes(ruleValue));
  }
}

export abstract class BaseWarningSuppressor {
  public validators: CompositeValidator;

  constructor(warnName: string) {
    this.validators = new CompositeValidator([]);

    if (!SUPPRESSWARNINGS_RULE_INFO.has(warnName)) {
      return;
    }
    this.validators.addValidator([
      new AnnotateSuppressWarningsValidator(warnName),
      new CommentSuppressWarningsValidator(warnName)
    ]);
  }
}

/**
 * Check the suppressWarnings scenario in the cache.
 * @param node - Obtain the content of the currently compiled file.
 * @param sceneName - comment or annotation scene.
 * @returns - Do not check when there is no data in the cache, and perform verification when there is data.
 */
function checkSuppressWarningsCache(warnName: string, node: arkts.AstNode, sceneName: string): boolean {
  const commentRegex = /\/\/\s*@SuppressWarnings\s/g;
  const annotationRegex = /\s*@SuppressWarnings\s*(\()/g;
  const contentRegex = sceneName === 'comment_suppressWarnings' ? commentRegex : annotationRegex;
  const nodeDecl = arkts.getDecl(node);
  const program = arkts.getProgramFromAstNode(nodeDecl);
  if (!program) {
    return true;
  }
  const nodeSourceText = program.astNode.dumpSrc() || '';
  const nodeSourceFile = program.fileName;
  const mapKey = `${warnName}_${sceneName}_${nodeSourceFile}`;
  if (suppressWarningsCheckPlugin.has(mapKey)) {
    const hasSuppressWarnings = suppressWarningsCheckPlugin.get(mapKey)!;
    if (!hasSuppressWarnings.get(sceneName)) {
      return false;
    }
  } else {
    try {
      const contentChecker = contentRegex.test(nodeSourceText);
      const commentMap = new Map([
        [sceneName, contentChecker]
      ]);
      suppressWarningsCheckPlugin.set(mapKey, commentMap);
      if (!contentChecker) {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  return true;
}