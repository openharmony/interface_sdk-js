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

import fs from 'fs';
import path from 'path';
import { globalObject } from '../index';
import {
  CheckValidCallbackInterface,
  ConfigPermission,
  ConfigSchema,
  PermissionValidCalcGroup,
  PermissionVaildCalcInfo,
  ProjectConfig,
  SdkConfig,
  SyscapConfig
} from './api_check_plugin_typedef';
import {
  MESSAGE_CONFIG_COLOR_ERROR,
  MESSAGE_CONFIG_COLOR_RED,
  MESSAGE_CONFIG_COLOR_RESET,
  MESSAGE_CONFIG_COLOR_WARNING,
  MESSAGE_CONFIG_HEADER_ERROR,
  MESSAGE_CONFIG_HEADER_WARNING,
  PERMISSION_TAG_CHECK_ERROR,
  PERMISSION_TAG_CHECK_NAME,
  RUNTIME_OS_OH,
  SINCE_TAG_CHECK_ERROR,
  SINCE_TAG_NAME,
  STAGE_COMPILE_MODE,
  SYSCAP_TAG_CHECK_NAME
} from './api_check_plugin_define';
import {
  CurrentAddress,
  DiagnosticCategory,
  JSDoc,
  JsDocNodeCheckConfigItem,
  JSDocTag
} from '../api-check-wrapper';
import { PermissionValidTokenState } from './api_check_plugin_enums';

/**
 * 从 JSON 文件中提取所有 src 字段到数组
 * 
 * @param { string } filePath JSON 文件的绝对路径
 * @returns { string[] } 包含所有 src 字段的字符串数组
 * @throws 文件不存在、JSON 解析错误或数据结构不符时抛出异常
 */
export function extractSrcPaths(filePath: string): string[] {
  // 1. 验证路径格式和存在性
  if (!path.isAbsolute(filePath)) {
    throw new Error(`路径必须是绝对路径: ${filePath}`);
  }

  if (!fs.existsSync(filePath)) {
    throw new Error(`文件不存在: ${filePath}`);
  }

  try {
    // 2. 读取并解析 JSON 文件
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const config: ConfigSchema = JSON.parse(rawData);

    // 3. 验证数据结构
    if (!config.forms || !Array.isArray(config.forms)) {
      throw new Error('JSON 缺少 forms 数组');
    }

    // 4. 提取所有 src 字段
    const srcPaths: string[] = [];
    for (const form of config.forms) {
      if (form.src && typeof form.src === 'string') {
        let src = form.src.replace(/^\.\/ets/, '');
        srcPaths.push(globalObject.projectConfig?.projectPath + src);
      } else {
        console.warn(`跳过无效 src 字段的表单项: ${form.name}`);
      }
    }

    // 5. 返回结果数组
    return srcPaths;
  } catch (error) {
    // 6. 增强错误信息
    if (error instanceof SyntaxError) {
      throw new SyntaxError(`JSON 解析错误: ${error.message}`);
    }
    throw new Error(`处理失败: ${error instanceof Error ? error.message : String(error)}`);
  }
}

/**
 * 判断当前ets文件是否是卡片文件
 * 
 * @param { string } file 当前ets文件路径
 * @returns { boolean } 是否为卡片文件
 */
export function isCardFile(file: string): boolean {
  if (globalObject.projectConfig.cardPageSet.includes(file)) {
    return true;
  }
  return false;
}

/**
 * 校验since标签，当前api版本是否小于等于compatibleSdkVersion
 * 
 * @param { JSDoc[] } jsDocs 当前api的JSDoc
 * @param { JsDocNodeCheckConfigItem } config 当前的since标签校验规则
 * @returns { boolean } 是否报错该since标签
 */
export function checkSinceTag(jsDocs: JSDoc[], config: JsDocNodeCheckConfigItem): boolean {
  if (jsDocs && jsDocs.length > 0) {
    const minorJSDocVersion: number = getJSDocMinorVersion(jsDocs);
    const compatibleSdkVersion: number = globalObject.projectConfig.compatibleSdkVersion;
    if (minorJSDocVersion > compatibleSdkVersion) {
      config.message = SINCE_TAG_CHECK_ERROR.replace('$SINCE1', minorJSDocVersion.toString())
        .replace('$SINCE2', compatibleSdkVersion.toString());
      return true;
    }
  }
  return false;
}

/**
 * 获取最小的Since版本号
 * 
 * @param { JSDoc[] } jsDocs 
 * @returns { number }
 */
function getJSDocMinorVersion(jsDocs: JSDoc[]): number {
  let minorVersion: number = 0;
  if (jsDocs && jsDocs.length > 0) {
    const jsdoc: JSDoc = jsDocs[0];
    if (jsdoc.tags && jsdoc.tags.length > 0) {
      for (let i = 0; i < jsdoc.tags.length; i++) {
        const tag: JSDocTag = jsdoc.tags[i];
        if (tag.tag === SINCE_TAG_NAME) {
          const currentVersion: number = Number.parseInt(tag.name ?? '');
          if (minorVersion === 0 ||
            !Number.isNaN(currentVersion) && currentVersion > minorVersion) {
            minorVersion = currentVersion;
          }
          break;
        }
      }
    }
  }
  return minorVersion;
}

/**
 * 获取最新版本的JSDoc
 * 
 * @param { JSDoc[] } jsDocs 
 * @returns { JSDoc }
 */
function getCurrentJSDoc(jsDocs: JSDoc[]): JSDoc {
  let currentJsDoc: JSDoc = jsDocs[jsDocs.length - 1];
  return currentJsDoc;
}

/**
 * 获取最新版本的JSDoc
 * 
 * @param { JSDoc } jsDoc
 * @param { string } tagName
 * @returns { JSDocTag | undefined }
 */
function getJSDocTag(jsDoc: JSDoc, tagName: string): JSDocTag | undefined {
  const jsDocTag: JSDocTag | undefined = jsDoc.tags.find((item: JSDocTag) => {
    return item.tag === tagName;
  });
  return jsDocTag;
}

/**
 * STEP1. Parse the permission information configured on the API
 * STEP2. Recursive queue to obtain whether the current permission configuration supports it
 * 
 * @param { string } comment jsdoc中comment信息
 * @param { string[] } permissionsArray 应用permission集合
 * @returns { boolean }
 */
function validPermission(comment: string, permissionsArray: string[]): boolean {
  const permissionsItem: string[] = getSplitsArrayWithDesignatedCharAndStr(comment ?? '', ' ')
    .filter((item) => {
      return item !== '';
    });
  const permissionsQueue: string[] = [];
  permissionsItem.forEach((item: string) => {
    // STEP1.1 Parse'('
    const leftParenthesisItem: string[] = getSplitsArrayWithDesignatedCharAndArrayStr([item], '(');
    // STEP1.2 Parse')'
    const rightParenthesisItem: string[] = getSplitsArrayWithDesignatedCharAndArrayStr(leftParenthesisItem, ')');
    permissionsQueue.push(...rightParenthesisItem);
  });
  // STEP2
  const calcValidResult: PermissionVaildCalcInfo = {
    valid: false,
    currentToken: PermissionValidTokenState.Init,
    finish: false,
    currentPermissionMatch: true,
  };
  validPermissionRecursion(permissionsQueue, permissionsArray, calcValidResult);
  return calcValidResult.valid;
}

/**
 * 检测数组中是否包含括号
 * 
 * @param { string[] } permissionsQueue 
 * @param { string[] } permissions 
 * @param { PermissionVaildCalcInfo } calcValidResult 
 */
function validPermissionRecursion(permissionsQueue: string[], permissions: string[],
  calcValidResult: PermissionVaildCalcInfo): void {
  if (permissionsQueue.some(item => ['(', ')'].includes(item))) {
    const groups: PermissionValidCalcGroup[] = groupWithParenthesis(permissionsQueue);
    const groupJoin: string[] = getGroupItemPermission(groups, calcValidResult, permissions);
    getPermissionVaildAtoms(groupJoin, calcValidResult, permissions ?? []);
  } else {
    getPermissionVaildAtoms(permissionsQueue, calcValidResult, permissions ?? []);
  }
}

/**
 * 分割字符串
 * 
 * @param { string } permission 
 * @param { string } designatedChar 
 * @returns { string[] }
 */
function getSplitsArrayWithDesignatedCharAndStr(permission: string, designatedChar: string): string[] {
  return permission.split(designatedChar).map(item => item.trim());
}

/**
 * 处理Permission项
 * 
 * @param { PermissionValidCalcGroup[] } groups 
 * @param { PermissionVaildCalcInfo } calcValidResult 
 * @param { string[] } permissions 
 * @returns { string[] }
 */
function getGroupItemPermission(
  groups: PermissionValidCalcGroup[],
  calcValidResult: PermissionVaildCalcInfo,
  permissions: string[]): string[] {
  const groupJoin: string[] = [];
  groups.forEach((groupItem: PermissionValidCalcGroup) => {
    if (groupItem.includeParenthesis) {
      const calcValidResultItem: PermissionVaildCalcInfo = {
        ...calcValidResult,
      };
      const subStack: string[] = groupItem.subQueue.slice(1, groupItem.subQueue.length - 1);
      validPermissionRecursion(subStack, permissions, calcValidResultItem);
      if (calcValidResultItem.valid) {
        groupJoin.push('');
      } else {
        groupJoin.push('NA');
      }
    } else {
      groupJoin.push(...groupItem.subQueue);
    }
  });
  return groupJoin;
}

/**
 * 使用计数器根据括号分组
 * 
 * @param { string[] } stack 
 * @returns { PermissionValidCalcGroup[] }
 */
function groupWithParenthesis(stack: string[]): PermissionValidCalcGroup[] {
  let currentLeftParenthesisCount: number = 0;
  const groups: PermissionValidCalcGroup[] = [];
  let currentGroupItem: PermissionValidCalcGroup = {
    subQueue: [],
    includeParenthesis: false,
  };
  stack.forEach((item: string, index: number) => {
    if (item === '(') {
      if (currentLeftParenthesisCount === 0) {
        groups.push(currentGroupItem);
        currentGroupItem = {
          subQueue: [item],
          includeParenthesis: true
        };
      } else {
        currentGroupItem.subQueue.push(item);
      }
      currentLeftParenthesisCount++;
    } else if (item === ')') {
      currentLeftParenthesisCount--;
      currentGroupItem.subQueue.push(item);
      if (currentLeftParenthesisCount === 0) {
        groups.push(currentGroupItem);
        currentGroupItem = {
          subQueue: [],
          includeParenthesis: false,
        };
      }
    } else {
      currentGroupItem.subQueue.push(item);
      if (index === stack.length - 1) {
        groups.push(currentGroupItem);
      }
    }
  });
  return groups;
}

/**
 * 深度优先遍历递归处理atomStacks
 * 
 * @param { string[] } atomStacks 
 * @param { PermissionVaildCalcInfo } calcValidResult 
 * @param { string[] } configPermissions 
 * @returns 
 */
function getPermissionVaildAtoms(atomStacks: string[], calcValidResult: PermissionVaildCalcInfo,
  configPermissions: string[]): void {
  if (calcValidResult.finish) {
    return;
  }
  if (atomStacks[0] === 'and') {
    calcValidResult.currentToken = PermissionValidTokenState.And;
  } else if (atomStacks[0] === 'or') {
    calcValidResult.currentToken = PermissionValidTokenState.Or;
  } else {
    if (calcValidResult.currentToken === PermissionValidTokenState.Or) {
      if (inValidOrExpression(
        atomStacks,
        calcValidResult,
        configPermissions
      )) {
        calcValidResult.currentPermissionMatch = false;
      }
    } else if (calcValidResult.currentToken === PermissionValidTokenState.And) {
      if (inValidAndExpression(
        atomStacks,
        calcValidResult,
        configPermissions
      )) {
        calcValidResult.currentPermissionMatch = false;
      }
    } else {
      calcValidResult.currentPermissionMatch =
        validPermissionItem(atomStacks[0], configPermissions);
    }
  }
  if (atomStacks.length > 1) {
    getPermissionVaildAtoms(
      atomStacks.slice(1),
      calcValidResult,
      configPermissions
    );
  } else {
    calcValidResult.valid = calcValidResult.currentPermissionMatch;
    calcValidResult.finish = true;
  }
}

/**
 * 处理Or
 * 
 * @param { string[] } atomStacks 
 * @param { PermissionVaildCalcInfo } calcValidResult 
 * @param { string[] } configPermissions 
 * @returns 
 */
function inValidOrExpression(
  atomStacks: string[],
  calcValidResult: PermissionVaildCalcInfo,
  configPermissions: string[]): boolean {
  if (
    !calcValidResult.currentPermissionMatch &&
    !validPermissionItem(atomStacks[0], configPermissions)
  ) {
    calcValidResult.valid = false;
    return true;
  }
  calcValidResult.currentPermissionMatch = true;
  return false;
}

/**
 * 处理And
 * 
 * @param { string[] } atomStacks 
 * @param { PermissionVaildCalcInfo } calcValidResult 
 * @param { string[] } configPermissions 
 * @returns 
 */
function inValidAndExpression(
  atomStacks: string[],
  calcValidResult: PermissionVaildCalcInfo,
  configPermissions: string[]): boolean {
  if (
    !calcValidResult.currentPermissionMatch ||
    !validPermissionItem(atomStacks[0], configPermissions)
  ) {
    calcValidResult.valid = false;
    return true;
  }
  calcValidResult.currentPermissionMatch =
    validPermissionItem(atomStacks[0], configPermissions);
  return false;
}

/**
 * 基础校验PermissionItem
 * 
 * @param { string } atomStackItem 
 * @param { string[] } configPermissions 
 * @returns { boolean }
 */
function validPermissionItem(atomStackItem: string, configPermissions: string[]): boolean {
  return atomStackItem === '' || configPermissions.includes(atomStackItem);
}

/**
 * 递归分割leftParenthesisItems
 * 
 * @param { string[] } leftParenthesisItems 
 * @param { string } designatedChar 
 * @returns { string[] }
 */
function getSplitsArrayWithDesignatedCharAndArrayStr(
  leftParenthesisItems: string[],
  designatedChar: string
): string[] {
  const rightParenthesisItems: string[] = [];
  leftParenthesisItems.forEach((leftParenthesisItem: string) => {
    if (leftParenthesisItem.includes(designatedChar)) {
      const rightParenthesis: string[] =
        getSplitsArrayWithDesignatedCharAndStr(
          leftParenthesisItem,
          designatedChar
        );
      rightParenthesis.forEach((item: string) => {
        if (item === '') {
          rightParenthesisItems.push(designatedChar);
        } else {
          rightParenthesisItems.push(item);
        }
      });
    } else {
      rightParenthesisItems.push(leftParenthesisItem);
    }
  });
  return rightParenthesisItems;
}

/**
* 获取jsDocNodeCheckConfigItem配置项
*
* @param { string[] } tagName - tag name
* @param { string } message - error message
* @param { DiagnosticCategory } type - error type
* @param { boolean } tagNameShouldExisted - tag is required
* @param { CheckValidCallbackInterface } checkValidCallback
* @returns { JsDocNodeCheckConfigItem }
*/
export function getJsDocNodeCheckConfigItem(tagName: string[], message: string, type: DiagnosticCategory,
  tagNameShouldExisted: boolean, checkValidCallback?: CheckValidCallbackInterface): JsDocNodeCheckConfigItem {
  return {
    tagName: tagName,
    message: message,
    type: type,
    tagNameShouldExisted: tagNameShouldExisted,
    checkValidCallback: checkValidCallback
  };
}

/**
 * 创建/清空工程配置
 * 
 * @returns { ProjectConfig }
 */
export function createOrCleanProjectConfig(): ProjectConfig {
  return {
    bundleName: '',
    moduleName: '',
    cachePath: '',
    aceModuleJsonPath: '',
    compileMode: '',
    permissions: {
      requestPermissions: [],
      definePermissions: []
    },
    requestPermissions: [],
    definePermissions: [],
    projectRootPath: '',
    isCrossplatform: false,
    ignoreCrossplatformCheck: false,
    bundleType: '',
    compileSdkVersion: 0,
    compatibleSdkVersion: 0,
    projectPath: '',
    aceProfilePath: '',
    cardPageSet: [],
    compileSdkPath: '',
    systemModules: [],
    allModulesPaths: [],
    sdkConfigs: [],
    externalApiPaths: '',
    externalSdkPaths: [],
    sdkConfigPrefix: '',
    deviceTypes: [],
    deviceTypesMessage: '',
    runtimeOS: '',
    syscapIntersectionSet: new Set([]),
    syscapUnionSet: new Set([]),
    permissionsArray: [],
    buildSdkPath: '',
    nativeDependencies: [],
    aceSoPath: ''
  };
}

/**
 * 递归读取目录下所有文件路径
 * 
 * @param { string } dir 
 * @param { string[] } utFiles 
 */
export function readFile(dir: string, utFiles: string[]): void {
  try {
    const files: string[] = fs.readdirSync(dir);
    files.forEach((element) => {
      const filePath: string = path.join(dir, element);
      const status: fs.Stats = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath);
      }
    });
  } catch (e) {
    console.error(MESSAGE_CONFIG_COLOR_RED, 'ArkTS ERROR: ' + e, MESSAGE_CONFIG_COLOR_RESET);
  }
}

/**
*  确认是否校验permission
*
* @param { JSDoc[] } jsDocs
* @param { JsDocNodeCheckConfigItem } config
* @returns { boolean }
*/
export function checkPermissionTag(jsDocs: JSDoc[], config: JsDocNodeCheckConfigItem): boolean {
  const currentJSDoc: JSDoc = getCurrentJSDoc(jsDocs);
  const jsDocTag: JSDocTag | undefined = getJSDocTag(currentJSDoc, PERMISSION_TAG_CHECK_NAME);
  if (!jsDocTag) {
    return false;
  }
  const permissionExpression: string = jsDocTag.comment ?? '';
  config.message = PERMISSION_TAG_CHECK_ERROR.replace('$DT', permissionExpression);
  return permissionExpression !== '' && 
  !validPermission(permissionExpression, globalObject.projectConfig.permissionsArray);
}

/**
 * 确定是否检查syscap
 * 
 * @param { JSDoc[] } jsDocs
 * @param { JsDocNodeCheckConfigItem } config 
 * @returns { boolean }
 */
export function checkSyscapTag(jsDocs: JSDoc[], config: JsDocNodeCheckConfigItem): boolean {
  let currentSyscapValue: string = '';
  if (jsDocs && jsDocs.length > 0) {
    const jsDoc: JSDoc = getCurrentJSDoc(jsDocs);
    for (let i = 0; i < jsDoc.tags.length; i++) {
      const jsDocTag: JSDocTag = jsDoc.tags[i];
      if (jsDocTag && jsDocTag.tag === SYSCAP_TAG_CHECK_NAME) {
        currentSyscapValue = jsDocTag.name ?? '';
        break;
      }
    }
  }
  return globalObject.projectConfig.syscapIntersectionSet && 
  !globalObject.projectConfig.syscapIntersectionSet.has(currentSyscapValue);
}

/**
 * 组装打印信息
 * 
 * @param { string } apiName 
 * @param { string } currentFilePath 
 * @param { CurrentAddress } currentAddress 
 * @param { DiagnosticCategory } logLevel 
 * @param { string } logMessage 
 */
export function pushLog(apiName: string, currentFilePath: string, currentAddress: CurrentAddress,
  logLevel: DiagnosticCategory, logMessage: string) {
  // 组装文件全路径
  const fileFullPath: string = currentFilePath + `(${currentAddress.line}:${currentAddress.column}).`;
  // 替换api名称
  logMessage = logMessage.replace('{0}', apiName);
  // 打印日志信息
  printMessage(fileFullPath, logMessage, logLevel);
}

/**
 * 日志打印
 * 
 * @param { string } fileInfo 
 * @param { string } message 
 * @param { DiagnosticCategory } level 
 */
function printMessage(fileInfo: string, message: string, level: DiagnosticCategory) {
  let messageHead: string = MESSAGE_CONFIG_HEADER_WARNING;
  let messageColor: string = MESSAGE_CONFIG_COLOR_WARNING;
  if (level === DiagnosticCategory.ERROR) {
    messageHead = MESSAGE_CONFIG_HEADER_ERROR;
    messageColor = MESSAGE_CONFIG_COLOR_ERROR;
  }
  // TODO: 待工具链日志输出方式确认后同步适配
  console.info(`%c${messageHead}${fileInfo}\n ${message}`, messageColor);
}

/**
 * 收集so模块依赖
 * 
 * @param { string[] } moduleName 
 * @param { string } modulePath 
 * @param { string } currentFilePath 
 */
export function collectInfo(moduleName: string[], modulePath: string, currentFilePath: string) {
  // 收集so模块依赖
  if (/lib(\S+)\.so/g.test(modulePath) && !globalObject.projectConfig.nativeDependencies.includes(currentFilePath)) {
    globalObject.projectConfig.nativeDependencies.push(currentFilePath);
  }
}

/**
 * 写入预览文件
 * 
 * @param { string[] } useOSFiles 
 */
export function writeUseOSFiles(useOSFiles: string[]): void {
  let info: string = useOSFiles.join('\n');
  if (!fs.existsSync(globalObject.projectConfig.aceSoPath)) {
    const parent: string = path.resolve(globalObject.projectConfig.aceSoPath, '..');
    if (!(fs.existsSync(parent) && !fs.statSync(parent).isFile())) {
      mkDir(parent);
    }
  } else {
    const currentUseOSFiles: string[] = fs.readFileSync(globalObject.projectConfig.aceSoPath, 'utf-8').split('\n');
    useOSFiles.forEach((filePath: string) => {
      if (!currentUseOSFiles.includes(filePath)) {
        currentUseOSFiles.push(filePath);
      }
    });
    info = currentUseOSFiles.join('\n');
  }
  fs.writeFileSync(globalObject.projectConfig.aceSoPath, info);
}

/**
 * 根据路径创建文件
 * 
 * @param { string } path_ 
 */
function mkDir(path_: string): void {
  const parent: string = path.join(path_, '..');
  if (!(fs.existsSync(parent) && !fs.statSync(parent).isFile())) {
    mkDir(parent);
  }
  fs.mkdirSync(path_);
}