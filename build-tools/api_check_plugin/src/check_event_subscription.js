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

const { ErrorType, ErrorLevel, LogType, requireTypescriptModule, checkVersionNeedCheck } = require('./utils');
const { addAPICheckErrorLogs } = require('./compile_info');
const { checkSmallHump } = require('./check_hump');
const ts = requireTypescriptModule();

// check if on and off functions show in pair
function checkOnAndOffAppearInPair(node, sourcefile, fileName, onEventAllNames, onEventCheckNames, offEventAllNames, offEventCheckNames) {
  for (const value of onEventCheckNames) {
    if (!offEventAllNames.has(value)) {
      const checkErrorResult = 'The on and off event subscription methods do not appear in pair.';
      addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.API_PAIR_ERRORS, checkErrorResult, LogType.LOG_API,
        ErrorLevel.MIDDLE);
    }
  }
  for (const value of offEventCheckNames) {
    if (!onEventAllNames.has(value)) {
      const checkErrorResult = 'The on and off event subscription methods do not appear in pair.';
      addAPICheckErrorLogs(node, sourcefile, fileName, ErrorType.API_PAIR_ERRORS, checkErrorResult, LogType.LOG_API,
        ErrorLevel.MIDDLE);
    }
  }
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
function handleVariousEventSubscriptionAPI(childNode, childNodeName, sourcefile, fileName, onEventAllNames, onEventCheckNames,
  offEventAllNames, offEventCheckNames, offEventNodes) {
  // judge the event subscription api type
  if (childNodeName === 'on') {
    let eventName = '';
    // store the event name
    if (childNode.parameters[0].type.kind === ts.SyntaxKind.LiteralType) {
      eventName = childNode.parameters[0].type.literal.text;
      onEventAllNames.add(eventName);
    } else if (childNode.parameters[0].type.kind === ts.SyntaxKind.StringKeyword) {
      eventName = 'string';
      onEventAllNames.add(eventName);
    }
    // check the version
    if (!checkVersionNeedCheck(childNode)) {
      return;
    } else if (eventName !== '') {
      onEventCheckNames.add(eventName);
    }
    checkTheFirstParameter(childNode, sourcefile, fileName, childNodeName);
  } else if (childNodeName === 'off') {
    let eventName = '';
    // store the event name
    if (childNode.parameters[0].type.kind === ts.SyntaxKind.LiteralType) {
      eventName = childNode.parameters[0].type.literal.text;
      offEventAllNames.add(eventName);
    } else if (childNode.parameters[0].type.kind === ts.SyntaxKind.StringKeyword) {
      eventName = 'string';
      offEventAllNames.add(eventName);
    }
    // store the off function node based on their names
    if (!offEventNodes.get(eventName)) {
      offEventNodes.set(eventName, [childNode]);
    } else {
      let curNodes = offEventNodes.get(eventName);
      curNodes.push(childNode);
      offEventNodes.set(eventName, curNodes);
    }
    // check the version
    if (!checkVersionNeedCheck(childNode)) {
      return;
    } else if (eventName !== '') {
      offEventCheckNames.add(eventName);
    }
    checkTheFirstParameter(childNode, sourcefile, fileName, childNodeName);
  } else if (childNodeName === 'once' || childNodeName === 'emit') {
    // check the version
    if (!checkVersionNeedCheck(childNode)) {
      return;
    }
    checkTheFirstParameter(childNode, sourcefile, fileName, childNodeName);
  }
}

function checkEventSubscription(node, sourcefile, fileName) {
  // if the node is namespace or interface
  if ((ts.isInterfaceDeclaration(node)) || ts.isModuleBlock(node) || ts.isModuleDeclaration(node) ||
    ts.isClassDeclaration(node) || node === sourcefile) {
    const onEventAllNames = new Set();
    const onEventCheckNames = new Set();
    const offEventAllNames = new Set();
    const offEventCheckNames = new Set();
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
        let childNodeName = '';
        if (childNode.name && ts.isIdentifier(childNode.name)) {
          childNodeName = childNode.name.getText();
        }
        handleVariousEventSubscriptionAPI(childNode, childNodeName, sourcefile, fileName, onEventAllNames, onEventCheckNames, offEventAllNames,
          offEventCheckNames, offEventNodes);
      }
    });
    // check the callback parameter of off function is optional
    for (let event of offEventCheckNames) {
      checkOffFunctions(offEventNodes.get(event), sourcefile, fileName);
    }
    // check if the on and off functions of one event shows in pair
    checkOnAndOffAppearInPair(node, sourcefile, fileName, onEventAllNames, onEventCheckNames, offEventAllNames, offEventCheckNames)
  }
}
exports.checkEventSubscription = checkEventSubscription;