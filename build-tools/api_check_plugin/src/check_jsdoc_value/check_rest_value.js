/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
const fs = require('fs');
const rules = require('../../code_style_rule.json');
const { commentNodeWhiteList, requireTypescriptModule, systemPermissionFile, checkOption, ErrorValueInfo,
  createErrorInfo, OPTIONAL_SYMBOL } = require('../../src/utils');
const ts = requireTypescriptModule();

function checkExtendsValue(tag, node, fileName, JSDocIndex) {
  let extendsResult = {
    checkResult: true,
    errorInfo: '',
  };
  let tagValue = tag.name;
  // 获取api中的extends信息，校验标签合法性及值规范
  if (ts.isClassDeclaration(node) || ts.isInterfaceDeclaration(node)) {
    const apiValue = node.heritageClauses ? node.heritageClauses[0].types[0].expression.escapedText : '';
    if (tagValue !== apiValue) {
      extendsResult.checkResult = false;
      extendsResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_EXTENDS, [JSDocIndex + 1]);
    }
  }
  return extendsResult;
}
exports.checkExtendsValue = checkExtendsValue;

function checkEnumValue(tag, node, fileName, JSDocIndex) {
  let enumResult = {
    checkResult: true,
    errorInfo: '',
  };
  const enumValues = ['string', 'number'];
  const tagValue = tag.type;
  const tagProblems = tag.problems.length;

  // 获取api中的enum信息，校验标签合法性及值规范
  if (tagProblems > 0 || enumValues.indexOf(tagValue) === -1) {
    enumResult.checkResult = false;
    enumResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_ENUM, [JSDocIndex + 1]);
  }
  return enumResult;
}
exports.checkEnumValue = checkEnumValue;

function checkSinceValue(tag, node, fileName, JSDocIndex) {
  let sinceResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagValue = tag.name;
  const checkNumber = /^\d+$/.test(tagValue);
  if (!checkNumber && commentNodeWhiteList.includes(node.kind)) {
    sinceResult.checkResult = false;
    sinceResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_SINCE, [JSDocIndex + 1]);
  }
  return sinceResult;
}
exports.checkSinceValue = checkSinceValue;

function checkReturnsValue(tag, node, fileName, JSDocIndex) {
  let returnsResult = {
    checkResult: true,
    errorInfo: '',
  };
  const voidArr = ['void'];
  const tagValue = tag.type;
  if (commentNodeWhiteList.includes(node.kind)) {
    const apiReturnsValue = node.type?.getText();
    if (voidArr.indexOf(apiReturnsValue) !== -1 || apiReturnsValue === undefined) {
      returnsResult.checkResult = false;
      returnsResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_RETURNS, [JSDocIndex + 1]);
    } else if (tagValue !== apiReturnsValue) {
      returnsResult.checkResult = false;
      returnsResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_RETURNS, [JSDocIndex + 1]);
    }
  }
  return returnsResult;
}
exports.checkReturnsValue = checkReturnsValue;

function checkParamValue(tag, node, fileName, JSDocIndex, tagIndex) {
  const tagNameValue = tag.name;
  const tagTypeValue = tag.type;
  let paramResult = {
    checkResult: true,
    errorInfo: '',
  };
  if (node.parameters) {
    const apiParamInfos = node.parameters;
    if (apiParamInfos[tagIndex]) {
      const apiName = apiParamInfos[tagIndex].name.escapedText;
      const apiType = apiParamInfos[tagIndex].type?.getText();
      let errorInfo = '';
      if (apiType !== tagTypeValue) {
        paramResult.checkResult = false;
        errorInfo += createErrorInfo(ErrorValueInfo.ERROR_INFO_TYPE_PARAM, [JSDocIndex + 1, tagIndex + 1, tagIndex + 1]);
      }
      if (apiName !== tagNameValue) {
        paramResult.checkResult = false;
        if (errorInfo !== '') {
          errorInfo += '\n';
        }
        errorInfo += createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_PARAM, [JSDocIndex + 1, tagIndex + 1, tagIndex + 1]);
      }
      if (!paramResult.checkResult) {
        paramResult.errorInfo = errorInfo;
      }
    }
  }
  return paramResult;
}
exports.checkParamValue = checkParamValue;

function checkThrowsValue(tag, node, fileName, JSDocIndex, tagIndex) {
  let throwsResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagNameValue = tag.name;
  const tagTypeValue = tag.type;
  let errorInfo = '';
  if (tagTypeValue !== 'BusinessError') {
    throwsResult.checkResult = false;
    errorInfo += createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE1_THROWS, [JSDocIndex + 1, tagIndex + 1]);
  }

  if (isNaN(tagNameValue)) {
    if (errorInfo !== '') {
      errorInfo += '\n';
    }
    throwsResult.checkResult = false;
    errorInfo += createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE2_THROWS, [JSDocIndex + 1, tagIndex + 1]);
  }
  if (!throwsResult.checkResult) {
    throwsResult.errorInfo = errorInfo;
  }
  return throwsResult;
}
exports.checkThrowsValue = checkThrowsValue;

/**
 * 
 * 1.引用不同文件的api接口
 * xxx.xxx#xxx
 * 
 * 2.引用不同文件的模块接口
 * xxx.xxx
 * 
 * 3.引用不同文件的api事件接口
 * xxx.xxx#event:xxx
 */
function checkModule(moduleValue) {
  return /^[A-Za-z_]+\b(\.[A-Za-z_]+\b)*$/.test(moduleValue) ||
    /^[A-Za-z_]+\b(\.[A-Za-z_]+\b)*\#[A-Za-z_]+\b$/.test(moduleValue) ||
    /^[A-Za-z_]+\b(\.[A-Za-z_]+\b)*\#event:[A-Za-z_]+\b$/.test(moduleValue);
}

function splitUseinsteadValue(useinsteadValue, JSDocIndex) {
  if (!useinsteadValue || useinsteadValue === '') {
    return undefined;
  }
  const splitResult = {
    checkResult: true,
    errorInfo: ''
  }
  // 拆分字符串
  const splitArray = useinsteadValue.split(/\//g);
  if (splitArray.length === 1) {
    // 同一文件
    splitResult.checkResult = checkModule(splitArray[0]);

  } else if (splitArray.length === 2) {
    // 不同文件
    const fileNameArray = splitArray[0].split('.');
    if (fileNameArray.length === 1) {
      // arkui
      if (!/^[A-Za-z_]+\b$/.test(fileNameArray[0]) || !checkModule(splitArray[1])) {
        splitResult.checkResult = false;
      }
    } else {
      // 非arkui
      let checkFileName = true;
      for (let i = 0; i < fileNameArray.length; i++) {
        if (fileNameArray[0] !== 'ohos' || !/^[A-Za-z_]+\b$/.test(fileNameArray[i])) {
          checkFileName = false;
        }
      }
      if (!checkFileName || !checkModule(splitArray[1])) {
        splitResult.checkResult = false;
      }
    }
  } else {
    // 格式错误
    splitResult.checkResult = false;
  }
  if (!splitResult.checkResult) {
    splitResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_USEINSTEAD, [JSDocIndex + 1]);
  }
  return splitResult;
}

// 精确校验功能待补全
function checkUseinsteadValue(tag, node, fileName, JSDocIndex) {
  const tagNameValue = tag.name;
  let useinsteadResult = {
    checkResult: true,
    errorInfo: '',
  };
  if (tagNameValue === '') {
    useinsteadResult.checkResult = false;
    useinsteadResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_USEINSTEAD, [JSDocIndex + 1]);
  } else {
    const result = splitUseinsteadValue(tagNameValue, JSDocIndex, fileName);
    if (result && !result.checkResult) {
      useinsteadResult = result;
    }
  }
  return useinsteadResult;
}
exports.checkUseinsteadValue = checkUseinsteadValue;

function checkTypeValue(tag, node, fileName, JSDocIndex) {
  let typeResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagTypeValue = tag.type;
  let apiTypeValue = '';
  if (commentNodeWhiteList.includes(node.kind)) {
    if (node.type) {
      if (ts.isFunctionTypeNode(node.type)) {
        apiTypeValue = 'function';
      } else if (ts.isTypeLiteralNode(node.type)) {
        apiTypeValue = 'object';
      } else {
        apiTypeValue = node.type?.getText();
      }
    }
    apiTypeValue = node.questionToken ? OPTIONAL_SYMBOL.concat(apiTypeValue) : apiTypeValue;
    if (apiTypeValue !== tagTypeValue) {
      typeResult.checkResult = false;
      typeResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_TYPE, [JSDocIndex + 1]);
    }
  }
  return typeResult;
}
exports.checkTypeValue = checkTypeValue;

function checkDefaultValue(tag, node, fileName, JSDocIndex) {
  let defaultResult = {
    checkResult: true,
    errorInfo: '',
  };
  if (commentNodeWhiteList.includes(node.kind) && tag.name.length === 0 && tag.type.length === 0) {
    defaultResult.checkResult = false;
    defaultResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_DEFAULT, [JSDocIndex + 1]);
  }
  return defaultResult;
}
exports.checkDefaultValue = checkDefaultValue;

/**
 * 门禁环境优先使用systemPermissionFile
 * 本地环境从指定分支上下载
 * 下载失败则使用默认配置
 *
 * @returns Set<string>
 */
function getPermissionList() {
  const permissionTags = ['ohos.permission.HEALTH_DATA', 'ohos.permission.HEART_RATE', 'ohos.permission.ACCELERATION'];
  let permissionFileContent;
  if (fs.existsSync(systemPermissionFile)) {
    permissionFileContent = require(systemPermissionFile);
  } else if (checkOption.permissionContent) {
    permissionFileContent = JSON.parse(checkOption.permissionContent);
  } else {
    permissionFileContent = require('../../config/config.json');
  }
  const permissionTagsObj = permissionFileContent.module.definePermissions;
  permissionTagsObj.forEach((item) => {
    permissionTags.push(item.name);
  });
  const permissionRuleSets = new Set(permissionTags);
  return permissionRuleSets;
}

function checkPermissionTag(tag, node, fileName, JSDocIndex) {
  const permissionRuleSet = getPermissionList();
  let hasPermissionError = false;
  let errorInfo = '';
  let permissionResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagValue = tag.name + tag.description;
  const permissionArr = tagValue.replace(/\s|\(|\)/g, '').replace(/(or|and)/g, '$').split('$');
  permissionArr.forEach(permissionStr => {
    if ((permissionStr !== '' && !permissionRuleSet.has(permissionStr) && permissionStr !== 'N/A') ||
      permissionStr === '') {
      hasPermissionError = true;
      errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_PERMISSION, [JSDocIndex + 1]);
    }
  });
  if (hasPermissionError) {
    permissionResult.checkResult = false;
    permissionResult.errorInfo = errorInfo;
  }
  return permissionResult;
}
exports.checkPermissionTag = checkPermissionTag;

function checkDeprecatedTag(tag, node, fileName, JSDocIndex) {
  let deprecatedResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagValue1 = tag.name;
  const tagValue2 = tag.description;
  const checkNumber = /^\d+$/.test(tagValue2);
  if ((tagValue1 !== 'since' || !checkNumber) && commentNodeWhiteList.includes(node.kind)) {
    deprecatedResult.checkResult = false;
    deprecatedResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_DEPRECATED, [JSDocIndex + 1]);
  }
  return deprecatedResult;
}
exports.checkDeprecatedTag = checkDeprecatedTag;

function checkSyscapTag(tag, node, fileName, JSDocIndex) {
  let syscapResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagValue = tag.name;
  const syscapRuleSet = new Set(rules.syscap.SystemCapability);
  if (!syscapRuleSet.has(tagValue)) {
    syscapResult.checkResult = false;
    syscapResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_SYSCAP, [JSDocIndex + 1]);
  }
  return syscapResult;
}
exports.checkSyscapTag = checkSyscapTag;

function checkNamespaceTag(tag, node, fileName, JSDocIndex) {
  let namespaceResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagValue = tag.name;
  if (commentNodeWhiteList.includes(node.kind)) {
    let apiValue = node.name?.escapedText;
    if (apiValue !== undefined && tagValue !== apiValue) {
      namespaceResult.checkResult = false;
      namespaceResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_NAMESPACE, [JSDocIndex + 1]);
    }
  }
  return namespaceResult;
}
exports.checkNamespaceTag = checkNamespaceTag;

function checkInterfaceTypedefTag(tag, node, fileName, JSDocIndex) {
  let interfaceResult = {
    checkResult: true,
    errorInfo: '',
  };
  const tagValue = tag.name;
  if (commentNodeWhiteList.includes(node.kind)) {
    let apiValue = node.name?.escapedText;
    if (apiValue !== undefined && tagValue !== apiValue) {
      interfaceResult.checkResult = false;
      if (tag.tag === 'interface') {
        interfaceResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_INTERFACE, [JSDocIndex + 1]);
      } else if (tag.tag === 'typedef') {
        interfaceResult.errorInfo = createErrorInfo(ErrorValueInfo.ERROR_INFO_VALUE_TYPEDEF, [JSDocIndex + 1]);
      }
    }
  }
  return interfaceResult;
}
exports.checkInterfaceTypedefTag = checkInterfaceTypedefTag;

const JsDocValueChecker = {
  'extends': checkExtendsValue,
  'enum': checkEnumValue,
  'since': checkSinceValue,
  'returns': checkReturnsValue,
  'param': checkParamValue,
  'throws': checkThrowsValue,
  'useinstead': checkUseinsteadValue,
  'type': checkTypeValue,
  'default': checkDefaultValue,
  'permission': checkPermissionTag,
  'deprecated': checkDeprecatedTag,
  'syscap': checkSyscapTag,
  'namespace': checkNamespaceTag,
  'interface': checkInterfaceTypedefTag,
  'typedef': checkInterfaceTypedefTag
};
exports.JsDocValueChecker = JsDocValueChecker;
