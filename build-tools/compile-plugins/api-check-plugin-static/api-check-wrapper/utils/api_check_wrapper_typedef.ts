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

/**
 * Diagnostic category enum for log levels
 */
export enum DiagnosticCategory {
  WARNING = 0,
  ERROR = 1
}
/**
 * ApiCheckWrapper服务，绑定校验规则
 */
export interface ApiCheckWrapperServiceHost {
  getJsDocNodeCheckedConfig: (currentFileName: string, symbolSourceFilePath: string) => JsDocNodeCheckConfig;
  getFileCheckedModuleInfo: (containFilePath: string) => FileCheckModuleInfo;
  pushLogInfo: (
    apiName: string, currentFilePath: string,
    currentAddress: CurrentAddress, logLevel: DiagnosticCategory, logMessage: string) => void;
  collectImportInfo: (moduleName: string[], modulePath: string, currentFilePath: string) => void;
}

/**
* Verify logical interface.
* 
* @interface JsDocNodeCheckConfigItemInterface
*/
export interface JsDocNodeCheckConfigItemInterface {
  /**
  * check node
  * @type { string[] } 
  */
  tagName: string[],
  /**
  * check message
  * @type { string }
  */
  message: string,
  /**
  * check type wanr/error
  * @type { DiagnosticCategory }
  */
  type: DiagnosticCategory,
  /**
  * check node should exist
  * @type { boolean }
  */
  tagNameShouldExisted: boolean,
  /**
  * check suppress call back
  * @type {CheckJsDocSpecialValidCallbackInterface}
  */
  checkJsDocSuppressorValidCallback?: CheckJsDocSpecialValidCallbackInterface
}

export interface CheckJsDocSpecialValidCallbackInterface {
  (jsDocTags: readonly JSDocTag[], config: JsDocNodeCheckConfigItem, node?: arkts.AstNode, declaration?: arkts.AstNode): boolean;
}

export interface JsDocNodeCheckConfig {
  nodeNeedCheck: boolean;
  checkConfig: JsDocNodeCheckConfigItem[];
}

export interface JsDocNodeCheckConfigItem {
  tagName: string[];
  message: string;
  type: DiagnosticCategory;
  tagNameShouldExisted: boolean;
  checkJsDocSuppressorValidCallback?: CheckJsDocSpecialValidCallbackInterface;
}

/**
 * JSDoc类型
 */
export interface JSDoc {
  description: string;
  tags: JSDocTag[];
}

/**
 * JSDoc标签类型
 */
export interface JSDocTag {
  /**
   * 标签名
   */
  tag: string;
  /**
   * 参数名称
   */
  name: string;
  /**
   * 默认值
   */
  default?: string;
  /**
   * 描述
   */
  description: string;
  /**
   * 完整内容
   */
  comment: string;
}

export interface CurrentAddress {
  line: number;
  column: number;
}

export interface FileCheckModuleInfo {
  currentFileName: string;
  fileNeedCheck: boolean;
}

export interface ConditionCheckResult {
  valid: boolean;
  type?: DiagnosticCategory;
  message?: string;
}

// export interface ASTDeclaration extends arkts.AstNode {
//   kind: number;
//   pos: number;
//   end: number;
//   parent?: ASTDeclaration;
//   jsDoc?: JSDoc[];
// }

export interface ASTIdentifier extends arkts.AstNode {
  kind: number;
  text: string;
}

export interface ASTSourceFile extends arkts.AstNode {
  fileName: string;
  text: string;
}

/**
 * 存储需要验证的节点键值对
 */
export interface LegacyStructMap {
  [key: string]: string;
}