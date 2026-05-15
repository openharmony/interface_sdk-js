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
import { SYSCAP_TAG_CHECK_NAME } from '../../utils/api_check_plugin_define';
import { BaseWarningSuppressor, NodeValidator } from './base_warning_suppressor';
import { JSDocTag, JsDocNodeCheckConfigItem } from '../utils/api_check_wrapper_typedef';
import { globalObject } from '../../index';

class CanIUseValidator implements NodeValidator {
  private jsDocTags: JSDocTag[];
  private config: JsDocNodeCheckConfigItem;

  constructor(jsDocTags: JSDocTag[], config: JsDocNodeCheckConfigItem) {
    this.jsDocTags = jsDocTags;
    this.config = config;
  }

  validate(node: arkts.AstNode): boolean {
    const program = arkts.getProgramFromAstNode(node);
    const sourceText = program?.sourceFileText || '';
    if (!sourceText) {
      return false;
    }
    
    const needCanIUseCheck: boolean = /canIUse\(.*\)/.test(sourceText);
    if (!needCanIUseCheck) {
      return false;
    }
    
    return this.conditionCheck(node, this.jsDocTags, this.config);
  }

  private conditionCheck(node: arkts.AstNode, jsDocTags: JSDocTag[], checkConfig: JsDocNodeCheckConfigItem): boolean {
    const specifyJsDocTagValue = this.getSpecifyJsDocTagValue(jsDocTags, checkConfig.tagName);
    if (specifyJsDocTagValue === undefined) {
      return true;
    }
    
    const hasIfChecked = this.hasConditionChecked(node, specifyJsDocTagValue, checkConfig);
    if (!hasIfChecked) {
      const conditionCheckResult = this.checkSyscapCondition(jsDocTags);
      if (conditionCheckResult) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  }

  private getSpecifyJsDocTagValue(jsDocTags: JSDocTag[], specifyTag: string[]): string | undefined {
    for (const item of jsDocTags) {
      if (specifyTag.includes(item.tag)) {
        return item.comment || item.name || '';
      }
    }
    return undefined;
  }

  private hasConditionChecked(expression: arkts.AstNode, importSymbol: string,
    checkConfig: JsDocNodeCheckConfigItem): boolean {
    const result = { hasIfChecked: false };
    let container = expression;
    while (container.parent) {
      container = container.parent;
      if (arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, container.peer) === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_SCRIPT_FUNCTION) {
        break;
      }
    }
    
    this.traversalNode(expression, importSymbol, container, result, config);
    return result.hasIfChecked;
  }

  private traversalNode(node: arkts.AstNode, importSymbol: string, parent: arkts.AstNode, 
    result: { hasIfChecked: boolean }, _checkConfig: JsDocNodeCheckConfigItem): void {
    const specifyFuncName: string = 'canIUse';
    if (result.hasIfChecked) {
      return;
    }

    if (node.parent !== parent) {
      const parentKind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, node.parent.peer);
      if (parentKind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT) {
        if (this.checkSyscapConditionValidCallback(node.parent, specifyFuncName, importSymbol)) {
          result.hasIfChecked = true;
          return;
        }
      }
      this.traversalNode(node.parent, importSymbol, parent, result, _checkConfig);
    } else {
      return;
    }
  }

  private checkSyscapConditionValidCallback(node: arkts.AstNode, specifyFuncName: string, importSymbol: string): boolean {
    if (arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, node.peer) !== arkts.Es2pandaAstNodeType.AST_NODE_TYPE_IF_STATEMENT) {
      return false;
    }
    
    const ifNode = node;
    if (!ifNode.test) {
      return false;
    }
    
    const testKind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, ifNode.test.peer);
    if (testKind !== arkts.Es2pandaAstNodeType.AST_NODE_TYPE_CALL_EXPRESSION) {
      return false;
    }
    
    const callExpr = ifNode.test;
    if (!callExpr.expr) {
      return false;
    }
    
    const funcName = callExpr.expr.name || '';
    if (funcName !== specifyFuncName) {
      return false;
    }
    
    if (!callExpr.arguments || callExpr.arguments.length === 0) {
      return false;
    }
    
    const arg = callExpr.arguments[0];
    if (!arg) {
      return false;
    }
    
    const argValue = arg.getString() || arg.name || '';
    return argValue.includes(importSymbol);
  }

  private checkSyscapCondition(jsDocTags: JSDocTag[]): boolean {
    let currentSyscapValue: string = '';
    
    for (const tag of jsDocTags) {
      if (tag.tag === SYSCAP_TAG_CHECK_NAME) {
        currentSyscapValue = tag.comment || tag.name || '';
        break;
      }
    }

    if (!globalObject.projectConfig.syscapIntersectionSet || !globalObject.projectConfig.syscapUnionSet) {
      return true;
    }
    
    if (!globalObject.projectConfig.syscapIntersectionSet.has(currentSyscapValue) && 
        globalObject.projectConfig.syscapUnionSet.has(currentSyscapValue)) {
      return false;
    } else if (!globalObject.projectConfig.syscapUnionSet.has(currentSyscapValue)) {
      return false;
    }
    
    return true;
  }
}

export class SyscapWarningSuppressor extends BaseWarningSuppressor {
  constructor(
    jsDocTags: JSDocTag[],
    config: JsDocNodeCheckConfigItem
  ) {
    super(SYSCAP_TAG_CHECK_NAME);
    this.validators.addValidator([
      new CanIUseValidator(jsDocTags, config)
    ]);
  }

  public isApiVersionHandled(node: arkts.AstNode): boolean {
    if (!node) {
      return false;
    }
    return this.validators.validate(node);
  }
}