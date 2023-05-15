/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

const { getApiInfo, ErrorType, ErrorLevel, LogType, requireTypescriptModule, getcheckApiVersion } = require('./utils');
const { addAPICheckErrorLogs } = require('./compile_info');
const { checkSmallHump } = require('./check_hump');
const ts = requireTypescriptModule();

// check if two sets are equal
function areSetsEqual(set1, set2) {
  if (set1.size !== set2.size) {
    return false;
  }
  for (const value of set1) {
    if (!set2.has(value)) {
      return false;
    }
  }
  return true;
}  

// check the api version
function checkVersionNeedCheck(node) {
  const apiInfo = getApiInfo(node);
  const apiCheckVersion = getcheckApiVersion();
  if (parseInt(apiInfo.version) >= parseInt(apiCheckVersion)) {
    return true;
  }
  return false;
}

function checkTheFirstParameter(node, sourcefile, fileName) {
  // check the type of first parameter
  if ((node.parameters[0].type.kind === ts.SyntaxKind.LiteralType && node.parameters[0].type.literal.kind === 
    ts.SyntaxKind.StringLiteral)) {
    // if the first parameter is string
    const parameterName = node.parameters[0].type.literal.text;
    if (!checkSmallHump(parameterName)) {
    const checkErrorResult = 'The event name [${parameterName}] should be named by small hump.';
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.PARAMETER_ERRORS, checkErrorResult, LogType.LOG_API,
      ErrorLevel.MIDDLE);
      return;
    }
  } else if (node.parameters[0].type.kind === ts.SyntaxKind.StringKeyword) {
    // if the first parameter is 'string'
    return;
  } else {
    const checkErrorResult = 'The event name should be string.';
    addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.PARAMETER_ERRORS, checkErrorResult, LogType.LOG_API,
      ErrorLevel.MIDDLE);
  }
}

// check if the callback parameter of off function is optional
function checkOffFunctions(nodes, sourcefile, fileName) {
  let hasOffWithoutCallbackParameter = false;
  let hasOffCallbackParameterNotOptional = false;
  for (let node of nodes) {
    if (node.parameters.length > 1) {
      const lastParameter = node.parameters[node.parameters.length - 1];
      if (lastParameter.name.escapedText !== 'callback' || lastParameter.name.escapedText !== 'observerCallback' ||
      lastParameter.name.escapedText !== 'listener') {
        hasOffWithoutCallbackParameter = true;
      } else if (lastParameter.questionToken === undefined) {
        hasOffCallbackParameterNotOptional = true;
      }
    } else {
      hasOffWithoutCallbackParameter = true;
    }
  }
  // has off fucntion with callback parameter which is not optional, and doesn't have off function without callback parameter
  if (hasOffCallbackParameterNotOptional && !hasOffWithoutCallbackParameter) {
    const checkErrorResult = 'The callback parameter of off function should be optional.';
    addAPICheckErrorLogs(nodes[0], sourcefile, fileName, ErrorType.PARAMETER_ERRORS, checkErrorResult, LogType.LOG_API, 
      ErrorLevel.MIDDLE);
  } 
}

// handle event subscription node
function handleVariousEventSubscriptionAPI(childNode, childNodeName, sourcefile, fileName, onEventNames, offEventNames, offEventNodes) {
  // judge the event subscription api type
  if (childNodeName === 'on') {
    checkTheFirstParameter(childNode, sourcefile, fileName, childNodeName);
    // if the function is 'on'
    if (childNode.parameters[0].type.kind === ts.SyntaxKind.LiteralType) {
      onEventNames.add(childNode.parameters[0].type.literal.text);
    } else if (childNode.parameters[0].type.kind === ts.SyntaxKind.StringKeyword) {
      onEventNames.add("string");
    }
  } else if (childNodeName === 'off') {
    checkTheFirstParameter(childNode, sourcefile, fileName, childNodeName);
    let eventName = '';
    // the function is 'off'
    if (childNode.parameters[0].type.kind === ts.SyntaxKind.LiteralType) {
      eventName = childNode.parameters[0].type.literal.text;
      offEventNames.add(eventName);
    } else if (childNode.parameters[0].type.kind === ts.SyntaxKind.StringKeyword) {
      eventName = 'string';
      offEventNames.add("string");
    }
    // store the off function node based on their names
    if (!offEventNodes.get(eventName)) {
      offEventNodes.set(eventName, [childNode]);
    } else {
      let curNodes = offEventNodes.get(eventName);
      curNodes.push(childNode);
      offEventNodes.set(eventName, curNodes);
    }
  } else if (childNodeName === 'once' || childNodeName === 'emit') {
    checkTheFirstParameter(childNode, sourcefile, fileName, childNodeName);
  }
}

function checkEventSubscription(node, sourcefile, fileName) { 
  // if the node is namespace or interface
  if ((ts.isInterfaceDeclaration(node)) || ts.isModuleBlock(node) || ts.isModuleDeclaration(node) ||
   ts.isClassDeclaration(node) || node === sourcefile) {
    const onEventNames = new Set();
    const offEventNames = new Set();
    const offEventNodes = new Map();
    let childNodes = node.members;
    if (ts.isModuleDeclaration(node)) {
        childNodes = node.body.statements;
    }
    if (childNodes === undefined) {
        return;
    }
    childNodes.forEach((childNode) => {
      // if the node is method or function
      if (ts.isFunctionDeclaration(childNode) || ts.isMethodDeclaration(childNode) || ts.isMethodSignature(childNode)) {
        // if the version needed to be check
        if (!checkVersionNeedCheck(childNode)) {
          return;
        }
        let childNodeName = '';
        if (childNode.name && ts.isIdentifier(childNode.name)) {
          childNodeName = childNode.name.getText();
        }
        handleVariousEventSubscriptionAPI(childNode, childNodeName, sourcefile, fileName, onEventNames, offEventNames, offEventNodes);
      }
    });
    // check the callback parameter of off function is optional
    for (let event of offEventNames) {
      checkOffFunctions(offEventNodes.get(event), sourcefile, fileName);
    }

    // check if the on and off functions of one event shows in pair
    if (!areSetsEqual(onEventNames, offEventNames)) {
      const checkErrorResult = 'The on and off event subscription methods do not appear in pair.';
      addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.API_PAIR_ERRORS, checkErrorResult, LogType.LOG_API,
        ErrorLevel.MIDDLE);
    }
  }
}
exports.checkEventSubscription = checkEventSubscription;