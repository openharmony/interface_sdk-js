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
 * @param filePath JSON 文件的绝对路径
 * @returns 包含所有 src 字段的字符串数组
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

export function isCardFile(file: string): boolean {
  if (globalObject.projectConfig.cardPageSet.includes(file)) {
    return true;
  }
  return false;
}

/**
 * 校验since标签，当前api版本是否小于等于compatibleSdkVersion
 * 
 * @param { JSDoc[] } jsDocs 
 * @param config 
 * @returns 
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
 * 获取版本号最小的JSDoc
 * @param { JSDoc[] } jsDocs 
 * @returns { number }
 */
function getJSDocMinorVersion(jsDocs: JSDoc[]): number {
  let minorVersion: number = 0;
  if (jsDocs && jsDocs.length > 0) {
    for (let i = 0; i < jsDocs.length; i++) {
      const jsdoc: JSDoc = jsDocs[i];
      if (jsdoc.tags && jsdoc.tags.length > 0) {
        for (let j = 0; j < jsdoc.tags.length; j++) {
          const tag: JSDocTag = jsdoc.tags[j];
          if (tag.name === SINCE_TAG_NAME) {
            const currentVersion: number = Number.parseInt(tag.name);
            if (minorVersion === 0 ||
              !Number.isNaN(currentVersion) && currentVersion > minorVersion) {
              minorVersion = currentVersion;
            }
            break;
          }
        }
      }
    }
  }
  return minorVersion;
}

/**
 * 获取最新版本的JSDoc
 * @param { JSDoc[] } jsDocs 
 * @returns { JSDoc }
 */
function getCurrentJSDoc(jsDocs: JSDoc[]): JSDoc {
  let minorVersion: number = 0;
  let currentJsDoc: JSDoc = jsDocs[0];
  if (jsDocs && jsDocs.length > 0) {
    for (let i = 0; i < jsDocs.length; i++) {
      const jsdoc: JSDoc = jsDocs[i];
      if (jsdoc.tags && jsdoc.tags.length > 0) {
        for (let j = 0; j < jsdoc.tags.length; j++) {
          const tag: JSDocTag = jsdoc.tags[j];
          if (tag.name === SINCE_TAG_NAME) {
            const currentVersion: number = Number.parseInt(tag.name);
            if (!Number.isNaN(currentVersion) && minorVersion > currentVersion) {
              minorVersion = currentVersion;
              currentJsDoc = jsdoc;
            }
            break;
          }
        }
      }
    }
  }
  return currentJsDoc;
}

/**
 * 获取最新版本的JSDoc
 * @param { JSDoc } jsDoc
 * @param { string } tagName
 * @returns { JSDocTag | undefined }
 */
function getJSDocTag(jsDoc: JSDoc, tagName: string): JSDocTag | undefined {
  const jsDocTag: JSDocTag | undefined = jsDoc.tags.find((item: JSDocTag) => {
    return item.name === tagName;
  });
  return jsDocTag;
}

/**
 * STER1. Parse the permission information configured on the API
 * STEP2. Recursive queue to obtain whether the current permission configuration supports it
 */
function validPermission(comment: string, permissionsArray: string[]): boolean {
  const permissionsItem: string[] = getSplitsArrayWithDesignatedCharAndStr(comment ?? '', ' ')
    .filter((item) => {
      return item !== '';
    });
  const permissionsQueue: string[] = [];
  permissionsItem.forEach((item: string) => {
    //STEP1.1 Parse'('
    const leftParenthesisItem: string[] = getSplitsArrayWithDesignatedCharAndArrayStr([item], '(');
    //STEP1.2 Parse')'
    const rightParenthesisItem: string[] = getSplitsArrayWithDesignatedCharAndArrayStr(leftParenthesisItem, ')');
    permissionsQueue.push(...rightParenthesisItem);
  });
  //STEP2
  const calcValidResult: PermissionVaildCalcInfo = {
    valid: false,
    currentToken: PermissionValidTokenState.Init,
    finish: false,
    currentPermissionMatch: true,
  };
  validPermissionRecursion(permissionsQueue, permissionsArray, calcValidResult);
  return calcValidResult.valid;
}

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

function getSplitsArrayWithDesignatedCharAndStr(permission: string, designatedChar: string): string[] {
  return permission.split(designatedChar).map(item => item.trim());
}

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

function validPermissionItem(atomStackItem: string, configPermissions: string[]): boolean {
  return atomStackItem === '' || configPermissions.includes(atomStackItem);
}

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
* get jsDocNodeCheckConfigItem object
*
* @param {string[]} tagName - tag name
* @param {string} message - error message
* @param {DiagnosticCategory} type - error type
* @param {boolean} tagNameShouldExisted - tag is required
* @param {CheckValidCallbackInterface} checkValidCallback
* @returns  {JsDocNodeCheckConfigItem}
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
 * @param { ProjectConfig } projectConfig 
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
 * 初始化工程配置
 * @param { ProjectConfig } projectConfig 
 */
export function initProjectConfig(): void {
  // 绑定cardPageSet
  readCardPageSet();
  // 绑定systemModules
  readSystemModules();
  // 绑定syscap
  readSyscapInfo();
  // 绑定permission
  readPermissions();
}

/**
 * read permissionInfo to this.share.projectConfig
 */
export function readPermissions(): void {
  const permission: ConfigPermission = globalObject.projectConfig.permissions;
  if (permission.requestPermissions) {
    globalObject.projectConfig.requestPermissions = getPermissionFromConfig(permission.requestPermissions);
  }
  if (permission.definePermissions) {
    globalObject.projectConfig.definePermissions = getPermissionFromConfig(permission.definePermissions);
  }
  globalObject.projectConfig.permissionsArray =
    [...globalObject.projectConfig.requestPermissions, ...globalObject.projectConfig.definePermissions];
}

function getPermissionFromConfig(array: Array<{ name: string }>): string[] {
  return array.map((item: { name: string }) => {
    return String(item.name);
  });
}

function readSystemModules() {
  const apiDirPath = path.resolve(globalObject.projectConfig.buildSdkPath, './api');
  const arktsDirPath = path.resolve(globalObject.projectConfig.buildSdkPath, './arkts');
  const kitsDirPath = path.resolve(globalObject.projectConfig.buildSdkPath, './kits');
  const systemModulePathArray = [apiDirPath, arktsDirPath, kitsDirPath];

  systemModulePathArray.forEach(systemModulesPath => {
    if (fs.existsSync(systemModulesPath)) {
      const modulePaths = [];
      readFile(systemModulesPath, modulePaths);
      globalObject.projectConfig.systemModules.push(...fs.readdirSync(systemModulesPath));
      modulePaths.filter(filePath => {
        const dirName = path.dirname(filePath);
        return !(dirName === apiDirPath || dirName === arktsDirPath || dirName === kitsDirPath);
      }).map((filePath: string) => {
        return filePath
          .replace(apiDirPath, '')
          .replace(arktsDirPath, '')
          .replace(kitsDirPath, '')
          .replace(/(^\\)|(.d.e?ts$)/g, '')
          .replace(/\\/g, '/');
      });
      globalObject.projectConfig.allModulesPaths.push(...modulePaths);
    }
  });
  const defaultSdkConfigs: SdkConfig[] = [
    {
      'apiPath': systemModulePathArray,
      'prefix': '@ohos'
    }, {
      'apiPath': systemModulePathArray,
      'prefix': '@system'
    }, {
      'apiPath': systemModulePathArray,
      'prefix': '@arkts'
    }
  ];
  const externalApiPathStr = globalObject.projectConfig.externalApiPaths || '';
  const externalApiPaths = externalApiPathStr.split(path.delimiter);
  globalObject.projectConfig.externalSdkPaths = [...externalApiPaths];
  const extendSdkConfigs: SdkConfig[] = [];
  collectExternalModules(externalApiPaths, extendSdkConfigs);
  globalObject.projectConfig.sdkConfigs = [...defaultSdkConfigs, ...extendSdkConfigs];
}

function collectExternalModules(sdkPaths: string[], extendSdkConfigs: SdkConfig[]): void {
  for (let i = 0; i < sdkPaths.length; i++) {
    const sdkPath = sdkPaths[i];
    const sdkConfigPath = path.resolve(sdkPath, 'sdkConfig.json');
    if (!fs.existsSync(sdkConfigPath)) {
      continue;
    }
    const sdkConfig: SdkConfig = JSON.parse(fs.readFileSync(sdkConfigPath, 'utf-8'));
    if (!sdkConfig.apiPath) {
      continue;
    }
    let externalApiPathArray: string[] = [];
    if (Array.isArray(sdkConfig.apiPath)) {
      externalApiPathArray = sdkConfig.apiPath;
    } else {
      externalApiPathArray.push(sdkConfig.apiPath);
    }
    const resolveApiPathArray: string[] = [];
    externalApiPathArray.forEach((element: string) => {
      const resolvePath: string = path.resolve(sdkPath, element);
      resolveApiPathArray.push(resolvePath);
      if (fs.existsSync(resolvePath)) {
        const extrenalModulePaths = [];
        globalObject.projectConfig.systemModules.push(...fs.readdirSync(resolvePath));
        readFile(resolvePath, extrenalModulePaths);
        globalObject.projectConfig.allModulesPaths.push(...extrenalModulePaths);
      }
    });
    globalObject.projectConfig.sdkConfigPrefix += `|${sdkConfig.prefix.replace(/^@/, '')}`;
    sdkConfig.apiPath = resolveApiPathArray;
    extendSdkConfigs.push(sdkConfig);
  }
}

/**
 * 根据配置读取卡片列表
 */
function readCardPageSet(): void {
  if (globalObject.projectConfig.aceModuleJsonPath && fs.existsSync(globalObject.projectConfig.aceModuleJsonPath)) {
    globalObject.projectConfig.compileMode = STAGE_COMPILE_MODE;
    const moduleJson: any = JSON.parse(fs.readFileSync(globalObject.projectConfig.aceModuleJsonPath).toString());
    const extensionAbilities: any = moduleJson?.module?.extensionAbilities;
    if (extensionAbilities && extensionAbilities.length > 0) {
      setCardPages(extensionAbilities);
    }
  }
}

function setCardPages(extensionAbilities: any) {
  if (extensionAbilities && extensionAbilities.length > 0) {
    extensionAbilities.forEach((extensionAbility: any) => {
      if (extensionAbility.type === 'form' && extensionAbility.metadata) {
        extensionAbility.metadata.forEach((metadata: any) => {
          if (metadata.resource) {
            readCardResource(metadata.resource);
          }
        });
      }
    });
  }
}

function readCardResource(resource: string) {
  const cardJsonFileName: string = `${resource.replace(/\$profile\:/, '')}.json`;
  const modulePagePath: string = path.resolve(globalObject.projectConfig.aceProfilePath, cardJsonFileName);
  if (fs.existsSync(modulePagePath)) {
    const cardConfig: any = JSON.parse(fs.readFileSync(modulePagePath, 'utf-8'));
    if (cardConfig.forms) {
      cardConfig.forms.forEach((form: any) => {
        readCardForm(form);
      });
    }
  }
}

function readCardForm(form: any) {
  if ((form.type && form.type === 'eTS') || (form.uiSyntax && form.uiSyntax === 'arkts')) {
    const cardPath = path.resolve(globalObject.projectConfig.projectPath, '..', form.src);
    if (cardPath && fs.existsSync(cardPath) && !globalObject.projectConfig.cardPageSet.includes(cardPath)) {
      globalObject.projectConfig.cardPageSet.push(cardPath);
    }
  }
}

/**
 * 更新工程配置
 * @param { ProjectConfig } targetProjectConfig 
 * @param { ProjectConfig } newProjectConfig 
 */
export function updateProjectConfig(newProjectConfig: ProjectConfig): void {
  Object.assign(globalObject.projectConfig, {
    bundleName: newProjectConfig.bundleName,
    moduleName: newProjectConfig.moduleName,
    cachePath: newProjectConfig.cachePath,
    requestPermissions: newProjectConfig.requestPermissions,
    projectRootPath: newProjectConfig.projectRootPath,
    isCrossplatform: newProjectConfig.isCrossplatform,
    ignoreCrossplatformCheck: newProjectConfig.ignoreCrossplatformCheck,
    bundleType: newProjectConfig.bundleType,
    compileSdkVersion: newProjectConfig.compileSdkVersion,
    compatibleSdkVersion: newProjectConfig.compatibleSdkVersion,
    projectPath: newProjectConfig.projectPath,
    aceProfilePath: newProjectConfig.aceProfilePath,
    buildSdkPath: newProjectConfig.buildSdkPath
  });
}

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
*  Determine the necessity of permission check
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
  const permissionExpression: string = jsDocTag.name + ' ' + jsDocTag.description;
  config.message = PERMISSION_TAG_CHECK_ERROR.replace('$DT', permissionExpression);
  return permissionExpression !== '' && !validPermission(permissionExpression, globalObject.projectConfig.permissionsArray);
}

/**
 * Confirm compliance since
 * Only major version can be passed in, such as "19";
 * major and minor version can be passed in, such as "19.1"; major minor and patch
 * patch version can be passed in, such as "19.1.2"
 * the major version be from 1-999
 * the minor version be from 0-999
 * the patch version be from 0-999
 * 
 * @param {string} since
 * @return {boolean}
 */
function isCompliantSince(since: string): boolean {
  return /^(?!0\d)[1-9]\d{0,2}(?:\.[1-9]\d{0,2}|\.0){0,2}$\d{0,2}$/.test(since);
}

/**
 * compare point version
 * @param { string } firstVersion 
 * @param { string } secondVersion 
 * @returns { number }
 */
function comparePointVersion(firstVersion: string, secondVersion: string): number {
  const firstPointVersion = firstVersion.split('.');
  const secondPointVersion = secondVersion.split('.');
  for (let i = 0; i < 3; i++) {
    const part1 = parseInt(firstPointVersion[i] || '0', 10);
    const part2 = parseInt(secondPointVersion[i] || '0', 10);
    if (part1 < part2) {
      return -1;
    }
    if (part1 > part2) {
      return 1;
    }
  }
  return 0;
}

/**
 * Determine the necessity of syscap check.
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
      if (jsDocTag && jsDocTag.name === SYSCAP_TAG_CHECK_NAME) {
        currentSyscapValue = jsDocTag.comment;
        break;
      }
    }
  }
  return globalObject.projectConfig.syscapIntersectionSet && !globalObject.projectConfig.syscapIntersectionSet.has(currentSyscapValue);
}

/**
 * read syscapInfo to projectConfig
 */
export function readSyscapInfo(): void {
  globalObject.projectConfig.deviceTypesMessage = globalObject.projectConfig.deviceTypes.join(',');
  const deviceDir: string = path.resolve(__dirname, '../../../../../api/device-define/');
  const deviceInfoMap: Map<string, string[]> = new Map();
  const syscaps: Array<string[]> = [];
  let allSyscaps: string[] = [];
  globalObject.projectConfig.deviceTypes.forEach((deviceType: string) => {
    collectOhSyscapInfos(deviceType, deviceDir, deviceInfoMap);
  });
  if (globalObject.projectConfig.runtimeOS !== RUNTIME_OS_OH) {
    collectExternalSyscapInfos(globalObject.projectConfig.externalSdkPaths, globalObject.projectConfig.deviceTypes,
      deviceInfoMap);
  }
  deviceInfoMap.forEach((value: string[]) => {
    syscaps.push(value);
    allSyscaps = allSyscaps.concat(value);
  });
  const intersectNoRepeatTwice = (arrs: Array<string[]>) => {
    return arrs.reduce(function (prev: string[], cur: string[]) {
      return Array.from(new Set(cur.filter((item: string) => {
        return prev.includes(item);
      })));
    });
  };
  let syscapIntersection: string[] = [];
  if (globalObject.projectConfig.deviceTypes.length === 1 || syscaps.length === 1) {
    syscapIntersection = syscaps[0];
  } else if (syscaps.length > 1) {
    syscapIntersection = intersectNoRepeatTwice(syscaps);
  }
  globalObject.projectConfig.syscapIntersectionSet = new Set(syscapIntersection);
  globalObject.projectConfig.syscapUnionSet = new Set(allSyscaps);
}

function collectOhSyscapInfos(deviceType: string, deviceDir: string, deviceInfoMap: Map<string, string[]>) {
  let syscapFilePath: string = '';
  if (deviceType === 'phone') {
    syscapFilePath = path.resolve(deviceDir, 'default.json');
  } else {
    syscapFilePath = path.resolve(deviceDir, deviceType + '.json');
  }
  if (fs.existsSync(syscapFilePath)) {
    const content: SyscapConfig = JSON.parse(fs.readFileSync(syscapFilePath, 'utf-8'));
    if (deviceInfoMap.get(deviceType)) {
      deviceInfoMap.set(deviceType, (deviceInfoMap.get(deviceType) as string[]).concat(content.sysCaps));
    } else {
      deviceInfoMap.set(deviceType, content.sysCaps);
    }
  }
}

function collectExternalSyscapInfos(
  externalApiPaths: string[],
  deviceTypes: string[],
  deviceInfoMap: Map<string, string[]>
) {
  const externalDeviceDirs: string[] = [];
  externalApiPaths.forEach((externalApiPath: string) => {
    const externalDeviceDir: string = path.resolve(externalApiPath, './api/device-define');
    if (fs.existsSync(externalDeviceDir)) {
      externalDeviceDirs.push(externalDeviceDir);
    }
  });
  externalDeviceDirs.forEach((externalDeviceDir: string) => {
    deviceTypes.forEach((deviceType: string) => {
      let syscapFilePath: string = '';
      const files: string[] = fs.readdirSync(externalDeviceDir);
      files.forEach((fileName: string) => {
        if (fileName.startsWith(deviceType)) {
          syscapFilePath = path.resolve(externalDeviceDir, fileName);
          if (fs.existsSync(syscapFilePath)) {
            const content: SyscapConfig = JSON.parse(fs.readFileSync(syscapFilePath, 'utf-8'));
            if (deviceInfoMap.get(deviceType)) {
              deviceInfoMap.set(deviceType, (deviceInfoMap.get(deviceType) as string[]).concat(content.sysCaps));
            } else {
              deviceInfoMap.set(deviceType, content.sysCaps);
            }
          }
        }
      });
    });
  });
}

export function pushLog(apiName: string, currentFilePath: string, currentAddress: CurrentAddress,
  logLevel: DiagnosticCategory, logMessage: string) {
  // 组装文件全路径
  const fileFullPath: string = currentFilePath + `(${currentAddress.column}:${currentAddress.line}).`;
  // 替换api名称
  logMessage = logMessage.replace('{0}', apiName);
  // 打印日志信息
  printMessage(fileFullPath, logMessage, logLevel);
}

/**
 * 日志打印
 * @param fileInfo 
 * @param message 
 * @param level 
 */
function printMessage(fileInfo: string, message: string, level: DiagnosticCategory) {
  let messageHead: string = MESSAGE_CONFIG_HEADER_WARNING;
  let messageColor: string = MESSAGE_CONFIG_COLOR_WARNING;
  if (level === DiagnosticCategory.Error) {
    messageHead = MESSAGE_CONFIG_HEADER_ERROR;
    messageColor = MESSAGE_CONFIG_COLOR_ERROR;
  }
  // TODO: 待工具链日志输出方式确认后同步适配
  console.log(`%c${messageHead}${fileInfo}\n ${message}`, messageColor);
}

export function collectInfo(moduleName: string[], modulePath: string, currentFilePath: string) {
  // 收集so模块依赖
  if (/lib(\S+)\.so/g.test(modulePath) && !globalObject.projectConfig.nativeDependencies.includes(currentFilePath)) {
    globalObject.projectConfig.nativeDependencies.push(currentFilePath);
  }
}

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

function mkDir(path_: string): void {
  const parent: string = path.join(path_, '..');
  if (!(fs.existsSync(parent) && !fs.statSync(parent).isFile())) {
    mkDir(parent);
  }
  fs.mkdirSync(path_);
}