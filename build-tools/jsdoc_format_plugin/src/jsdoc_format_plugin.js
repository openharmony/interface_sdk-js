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

const path = require('path');
const ts = require('typescript');
const { overwriteApiFile, getApiFiles, tsTransform, hasAPINote, getApiInfo, JSDOC_WRITELIST_SET, getAPINote,
  hasCopyright, getParentApiInfo, TS_KEYWORD_SET } = require('./utils');

const formatedNodes = new Set([]);
let copyrightMessage = "";

function formatApiFile(url) {
  return (context) => {
    return (node) => {
      sourceFile = node;
      const fileName = url.replace(/\.d\.ts$/, ".new.d.ts");
      const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
      const result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
      overwriteApiFile(fileName, result, {});
      tsTransform([fileName], formatJsDoc);
      return node;
    }
  }
}

function checkJsDoc(node) {
  if (hasAPINote(node)) {
    if (!getApiInfo(node).version) {
      return false;
    }
  }
  return true;
}

function createNewJsdoc(node, docContent) {
  // step1. get api information
  let hasCR = false;
  if (hasCopyright(docContent)) {
    contents = docContent.split(/\*\//);
    hasCR = true;
    if (hasCopyright(contents[0])) {
      copyrightMessage = contents[0] + "*/";
    }
    docContent = docContent.replace(copyrightMessage, "");
  }
  // 根据* @拆分jsDoc
  const docs = docContent.split(/ *\* *\@/);

  let docInfo = {};
  docs.forEach((doc, docsIndex) => {
    const lineInfos = doc.split(/[(\r\n)\r\n]+/);
    let decoratorContent = "";
    lineInfos.forEach((lineInfo) => {
      const content = lineInfo.replace(/( *\/\*\* *)|( *\*\/ *)|( *\* *)/g, "");
      if (content !== "") {
        decoratorContent += `${content} `;
      }
    });
    decoratorContent = decoratorContent.trim();
    if (docsIndex === 0) {
      docInfo["description"] = decoratorContent;
      // 待补充全量报错场景
      if (ts.isConstructorDeclaration(node)) {
        docInfo["apiName"] = "constructor";
      } else {
        if (!node.name) {
          console.log(node.getFullText())
        }
        docInfo["apiName"] = node.name.escapedText.toString();
      }
    } else {
      const decoratorName = decoratorContent.match(/^[a-z]+\b/)[0];
      if (JSDOC_WRITELIST_SET.has(decoratorName)) {
        if (!docInfo[decoratorName]) {
          docInfo[decoratorName] = [decoratorContent.replace(`${decoratorName} `, "")];
        } else {
          docInfo[decoratorName] = docInfo[decoratorName].push(decoratorContent.replace(`${decoratorName} `, ""));
        }
      }
    }
  });
  docInfo = getParentApiInfo(node, docInfo);
  // 缩进空格
  const indentations = docContent.match(/(?<=\n) *(?=$)/g)[0];

  // step2. create jsdoc
  let newNodeFullText = "";
  if (ts.isModuleDeclaration(node)) {
    const docSystemapi = docInfo.systemapi && docInfo.systemapi[0] ? `${indentations + " * "}@systemapi\n` : "";
    const docModel = docInfo.model && docInfo.model[0] ? `${indentations + " * "}@${docInfo.model[0]}\n` : "";
    const docCrossplatform = docInfo.crossplatform && docInfo.crossplatform[0] ?
      `${indentations + " * "}@crossplatform\n` : "";
    const docDeprecated = docInfo.deprecated && docInfo.deprecated[0] ?
      `${indentations + " * "}@deprecated ${docInfo.deprecated[0]}\n` : "";
    const docUseinstead = docInfo.useinstead && docInfo.useinstead[0] ?
      `${indentations + " * "}@useinstead ${docInfo.useinstead[0]}\n` : "";
    const docPermission =  docInfo.permission && docInfo.permission[0] ?
    `${indentations + " * "}@useinstead ${docInfo.permission[0]}\n` : "";

    newNodeFullText = `${indentations}/**\n` +
      `${indentations + " * "}${docInfo.description}\n` +
      `${indentations + " * "}@namespace ${docInfo.namespace ? docInfo.namespace : docInfo.apiName}\n` +
      docPermission +
      `${indentations + " * "}@syscap ${docInfo.syscap}\n` +
      docSystemapi + docModel + docCrossplatform +
      `${indentations + " * "}@since ${docInfo.since}\n` +
      docDeprecated + docUseinstead +
      `${indentations + " */"}\n${indentations}`;
    if (hasCR) {
      newNodeFullText = copyrightMessage + "\n" + newNodeFullText + node.getText();
    }
  }
  return newNodeFullText;
}

function formatJsDoc(fileName) {
  return (context) => {
    return (node) => {
      sourceFile = node;
      node = ts.visitEachChild(node, processAllNodes, context);
      const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
      const result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
      overwriteApiFile(fileName, result, {});
      return node;
    }
    function processAllNodes(node) {
      if (hasAPINote(node) && !formatedNodes.has(fileName + node.pos + node.end) && !TS_KEYWORD_SET.has(node.kind)) {
        formatedNodes.add(fileName + node.pos + node.end);
        if (ts.isModuleDeclaration(node)) {
          const result = createNewJsdoc(node, getAPINote(node));
          console.log(result);
        }
      }
      return ts.visitEachChild(node, processAllNodes, context);
    }
  }
}

function main(apiDir) {
  const apiFiles = getApiFiles(apiDir);
  tsTransform(apiFiles, formatApiFile);
}

const testDir = path.resolve(__dirname, "../plugin/api_file_path.txt");
main(testDir);
