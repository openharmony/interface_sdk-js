/*
* Copyright (c) 2021-2023 Huawei Device Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the 'License');
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

const path = require('path');
const fs = require('fs');
const { parseJsDoc, commentNodeWhiteList } = require('./utils');
const ts = require(path.resolve(__dirname, "../node_modules/typescript"));
const { checkApiOrder } = require('./check_jsdoc_value/chek_order');

// 标签合法性校验
function checkJsDocLegality(node, sourcefile, checkInfoMap) {
  // 必填校验
  legalityCheck(node, sourcefile, commentNodeWhiteList, ['since', 'syscap'], true, checkInfoMap,
    (currentNode, checkResult) => {
      return true;
    }
  );
  // const定义语句必填
  legalityCheck(node, sourcefile, [ts.SyntaxKind.VariableStatement], ['constant'], true, checkInfoMap,
    (currentNode, checkResult) => {
      if ((checkResult && (currentNode.kind !== ts.SyntaxKind.VariableStatement || !/^const /.test(currentNode.getText()))) ||
        (!checkResult && currentNode.kind === ts.SyntaxKind.VariableStatement && /^const /.test(currentNode.getText()))) {
        return true;
      }
      return false;
    });
  // 'enum'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.EnumDeclaration], ['enum'], true, checkInfoMap,
    (currentNode, checkResult) => {
      return true;
    }
  );
  // 'extends'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.ClassDeclaration], ['extends'], true, checkInfoMap,
    (currentNode, checkResult) => {
      let tagCheckResult = false;
      if (ts.isClassDeclaration(currentNode) && currentNode.heritageClauses) {
        const clauses = currentNode.heritageClauses;
        clauses.forEach(claus => {
          if (/^extends /.test(claus.getText())) {
            tagCheckResult = true;
          }
        });
      }
      if ((checkResult && !tagCheckResult) || (!checkResult && tagCheckResult)) {
        return true;
      }
      return false;
    }
  );
  // 'namespace'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.ModuleDeclaration], ['namespace'], true, checkInfoMap,
    (currentNode, checkResult) => {
      return true;
    }
  );
  // 'param'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
  ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.CallSignature], ['param'], true, checkInfoMap,
    (currentNode, checkResult) => {
      if (!new Set([ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
      ts.SyntaxKind.MethodDeclaration]).has(currentNode.kind)) {
        return true;
      }
      return currentNode.parameters && currentNode.parameters.length > 0;
    }
  );
  // 'returns'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
  ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.CallSignature], ['returns'], true, checkInfoMap,
    (currentNode, checkResult) => {
      if (!checkResult && !new Set([ts.SyntaxKind.FunctionDeclaration, ts.SyntaxKind.MethodSignature,
      ts.SyntaxKind.MethodDeclaration, ts.SyntaxKind.CallSignature]).has(currentNode.kind)) {
        return false;
      }
      return currentNode.type && currentNode.type.kind !== ts.SyntaxKind.VoidKeyword;
    }
  );
  // 'useinstead'
  legalityCheck(node, sourcefile, commentNodeWhiteList, ['useinstead'], true, checkInfoMap,
    (currentNode, checkResult) => {
      return new Set(commentNodeWhiteList).has(currentNode.kind);
    }
  );
  // typedef/interface
  legalityCheck(node, sourcefile, [ts.SyntaxKind.InterfaceDeclaration], ['interface'], true, checkInfoMap,
    (currentNode, checkResult) => {
      return true;
    }
  );
  // 'type', 'readonly'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.PropertyDeclaration, ts.SyntaxKind.PropertySignature],
    ['type', 'readonly'], false, checkInfoMap, (currentNode, checkResult) => {
      return true;
    }
  );
  // 'default'
  legalityCheck(node, sourcefile, [ts.SyntaxKind.PropertyDeclaration, ts.SyntaxKind.PropertySignature,
  ts.SyntaxKind.VariableStatement], ['default'], false, checkInfoMap, (currentNode, checkResult) => {
    return true;
  }
  );
  return checkInfoMap;
}
exports.checkJsDocLegality = checkJsDocLegality;

function getIllegalKinds(legalKinds) {
  let illegalKinds = [];
  const legalKindSet = new Set(legalKinds);
  commentNodeWhiteList.forEach(kind => {
    if (!legalKindSet.has(kind)) {
      illegalKinds.push(kind);
    }
  });
  return illegalKinds;
}

function legalityCheck(node, sourcefile, legalKinds, tagsName, isRequire, checkInfoMap, extraCheckCallback) {
  const illegalKinds = getIllegalKinds(legalKinds);
  const illegalKindSet = new Set(illegalKinds);
  const legalKindSet = new Set(legalKinds);
  comments = parseJsDoc(node);
  tagsName.forEach(tagName => {
    comments.forEach((comment, index) => {
      if (!checkInfoMap[index]) {
        checkInfoMap[index] = {
          missingTags: [],
          illegalTags: []
        };
      }
      let checkResult = false;
      let useinsteadResultObj = {
        hasUseinstead: false,
        hasDeprecated: false
      };
      let paramTagNum = 0;
      let parameterNum = 0;
      comment.tags.forEach(tag => {
        if (tagName === 'useinstead') {
          if (tag.tag === tagName) {
            useinsteadResultObj.hasUseinstead = true;
          } else if (tag.tag === 'deprecated') {
            useinsteadResultObj.hasDeprecated = true;
          }
        } if (tagName === 'interface' && (tag.tag === tagName || tag.tag === 'typedef')) {
          checkResult = true;
        } else if (tag.tag === tagName) {
          checkResult = true;
        }
        if (tag.tag === 'param') {
          paramTagNum++;
        }
      });
      if (tagName === 'param' && (ts.isMethodDeclaration(node) || ts.isMethodSignature(node) ||
        ts.isFunctionDeclaration(node) || ts.isCallSignatureDeclaration(node))) {
        parameterNum = node.parameters.length;
        checkResult = parameterNum !== paramTagNum;
      }
      // useinstead特殊处理
      if (isRequire && tagName !== 'useinstead' && ((tagName !== 'useinstead' && tagName !== 'param' && !checkResult && legalKindSet.has(node.kind)) ||
        (tagName === 'param' && paramTagNum < parameterNum)) && extraCheckCallback(node, checkResult)) {
        // 报错
        // console.log(`${sourcefile.fileName}, ${node.getText()} has no @${tagName}`);
        checkInfoMap[index].missingTags.push(tagName);
      } else if (((tagName !== 'useinstead' && tagName !== 'param' && checkResult && illegalKindSet.has(node.kind)) ||
        (tagName === 'useinstead' && !useinsteadResultObj.hasDeprecated && useinsteadResultObj.hasUseinstead) ||
        (tagName === 'param' && paramTagNum > parameterNum)) && extraCheckCallback(node, checkResult)) {
        // 报错
        // console.log(`${sourcefile.fileName}, ${node.getText()} should not has @${tagName}`);
        checkInfoMap[index].illegalTags.push({
          checkResult: false,
          errorInfo: `api第[${index + 1}]段JSDoc不允许使用[${tagName}]标签, 请检查标签使用方法`,
          index: index
        });
      }
    });
  });
  return checkInfoMap;
}

function checkJsDocOfCurrentNode(node, sourcefile, permissionConfigPath) {
  let { permissionFile } = require('./utils');
  if (permissionConfigPath && fs.existsSync(permissionConfigPath)) {
    permissionFile = permissionConfigPath;
  }
  const checkInfoMap = checkJsDocLegality(node, sourcefile, {});
  const checkInfoArray = [];
  const checkOrderResult = checkApiOrder(node, sourcefile, sourcefile.fileName);
  checkOrderResult.forEach((result, index) => {
    checkInfoMap[index.toString()].orderResult = result;
  });
  const comments = parseJsDoc(node);
  comments.forEach((comment, index) => {
    const errorLogs = [];
    let paramIndex = 0;
    comment.tags.forEach(tag => {
      const { JsDocValueChecker } = require('./check_jsdoc_value/check_rest_value');
      const checker = JsDocValueChecker[tag.tag];
      if (checker) {
        let valueCheckResult;
        if (tag.tag === 'param') {
          valueCheckResult = checker(tag, node, sourcefile, sourcefile.fileName, paramIndex);
        } else {
          valueCheckResult = checker(tag, node, sourcefile, sourcefile.fileName);
        }
        if (!valueCheckResult.checkResult) {
          valueCheckResult.index = index;
          // 输出告警
          errorLogs.push(valueCheckResult);
        }
      }
    });
    checkInfoMap[index.toString()].illegalTags = checkInfoMap[index.toString()].illegalTags.concat(errorLogs);
  });
  for (const key in checkInfoMap) {
    checkInfoArray.push(checkInfoMap[key]);
  }
  return checkInfoArray;
}
exports.checkJsDocOfCurrentNode = checkJsDocOfCurrentNode;
