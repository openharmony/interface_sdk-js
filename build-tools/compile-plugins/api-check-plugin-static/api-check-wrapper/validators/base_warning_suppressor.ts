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
import { SUPPRESSWARNINGS_RULE_INFO } from '../../utils/api_check_plugin_define';

export interface NodeValidator {
  validate(node: arkts.AstNode): boolean;
  addValidator?(validator: NodeValidator[]): void;
}

export class CompositeValidator implements NodeValidator {
  constructor(private validators: NodeValidator[]) { }

  validate(node: arkts.AstNode): boolean {
    return this.validators.some(validator => validator.validate(node));
  }

  addValidator(validator: NodeValidator[]): void {
    this.validators.push(...validator);
  }
}

export class AnnotateSuppressWarningsValidator implements NodeValidator {
  private warningTypeName: string = '';
  
  constructor(warnName: string) {
    this.warningTypeName = warnName;
  }
  
  validate(node: arkts.AstNode): boolean {
    return this.checkSuppressWarningsCache(this.warningTypeName, node, 'annotation_suppressWarnings') &&
      this.checkAnnotationWarning(node);
  }

  private checkSuppressWarningsCache(warnName: string, node: arkts.AstNode, sceneName: string): boolean {
    const annotationRegex = /\s*@SuppressWarnings\s*(\()/g;
    const program = arkts.getProgramFromAstNode(node);
    if (!program) {
      return true;
    }
    const nodeSourceText = program.sourceFileText || '';
    
    if (!annotationRegex.test(nodeSourceText)) {
      return false;
    }
    
    return true;
  }

  private checkAnnotationWarning(node: arkts.AstNode): boolean {
    const decoratorNodes: arkts.AstNode[] = this.getTagDecoratorFromNode(node);
    return decoratorNodes.some(item => this.extractRulesFromDecorator(item));
  }

  private findTagDecorator(decorator: arkts.AstNode): boolean {
    if (!decorator || !decorator.expr) {
      return false;
    }
    
    const expr = decorator.expr;
    if (expr.expression && expr.expression.name) {
      return expr.expression.name === 'SuppressWarnings';
    } else if (expr.name) {
      return expr.name === 'SuppressWarnings';
    }
    
    return false;
  }

  private getTagDecoratorFromNode(node: arkts.AstNode): arkts.AstNode[] {
    const decoratorArray: arkts.AstNode[] = [];
    
    if (node.annotations && Array.isArray(node.annotations)) {
      decoratorArray.push(...node.annotations);
    }
    
    const currentSuppressWarningDecorators = decoratorArray.filter(item => this.findTagDecorator(item));
    if (currentSuppressWarningDecorators.length > 0) {
      return currentSuppressWarningDecorators;
    }
    
    const parentNode = node.parent;
    const parentSuppressWarning = parentNode ? this.getTagDecoratorFromNode(parentNode) : [];
    return [...currentSuppressWarningDecorators, ...parentSuppressWarning];
  }

  private extractRulesFromDecorator(decorator: arkts.AstNode): boolean {
    if (!decorator || !decorator.expr) {
      return false;
    }
    
    const expr = decorator.expr;
    if (!expr.arguments || expr.arguments.length === 0) {
      return false;
    }
    
    const arg = expr.arguments[0];
    if (!arg || !arg.properties || arg.properties.length === 0) {
      return false;
    }
    
    const prop = arg.properties[0];
    if (!prop.key || prop.key.name !== 'rules') {
      return false;
    }
    
    if (!prop.value || !prop.value.elements || prop.value.elements.length === 0) {
      return false;
    }
    
    const ruleValues = SUPPRESSWARNINGS_RULE_INFO.get(this.warningTypeName) || '';
    if (!ruleValues) {
      return false;
    }
    
    return prop.value.elements.some((item: arkts.AstNode) => {
      const elementName = item.name || item.text || '';
      return elementName.includes(ruleValues);
    });
  }
}

export class CommentSuppressWarningsValidator implements NodeValidator {
  private warningTypeName: string = '';
  
  constructor(warnName: string) {
    this.warningTypeName = warnName;
  }
  
  validate(node: arkts.AstNode): boolean {
    return this.checkSuppressWarningsCache(this.warningTypeName, node, 'comment_suppressWarnings') &&
      this.checkCommentsWarning(node);
  }

  private checkSuppressWarningsCache(warnName: string, node: arkts.AstNode, sceneName: string): boolean {
    const commentRegex = /\/\/\s*@SuppressWarnings\s/g;
    const program = arkts.getProgramFromAstNode(node);
    if (!program) {
      return true;
    }
    const nodeSourceText = program.sourceFileText || '';
    
    if (!commentRegex.test(nodeSourceText)) {
      return false;
    }
    
    return true;
  }

  private checkCommentsWarning(node: arkts.AstNode): boolean {
    const program = arkts.getProgramFromAstNode(node);
    if (!program || !program.sourceFileText) {
      return false;
    }
    
    const commentsMessage: string[] = this.getAllClosestComments(program.sourceFileText, node);
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