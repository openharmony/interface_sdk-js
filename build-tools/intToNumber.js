/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

const ts = require('typescript');
const fs = require('fs');
const path = require('path');
const commander = require('commander');

const typeArray = ['long', 'double', 'int'];

let inputDir = '';
let outputDir = '';
let jsDocContent = '';
let tagDataList = [];

function main() {
  const program = new commander.Command();
  program
    .name('intToNumber')
    .version('0.0.1');
  program
    .option('--path <string>', 'input path')
    .option('--output <string>', 'output path')
    .action((opts) => {
      if (!opts.path || !opts.output) {
        console.error('Error: Must provide --path and --output parameters');
        process.exit(1);
      }

      // 将相对路径解析为绝对路径
      inputDir = path.resolve(opts.path);
      outputDir = path.resolve(opts.output);

      // 检查输入目录是否存在
      if (!fs.existsSync(inputDir)) {
        console.error(`Error: Input directory does not exist: ${inputDir}`);
        process.exit(1);
      }

      const apiUtFiles1 = [];
      readFile(inputDir + '/api', apiUtFiles1);
      readFile(inputDir + '/arkts', apiUtFiles1);
      tsTransform(apiUtFiles1, recursionAstCallback);
      const apiUtFiles2 = [];
      readFile(outputDir + '/api', apiUtFiles2);
      readFile(outputDir + '/arkts', apiUtFiles2);
      tsTransform(apiUtFiles2, recursionAstCallback2);

      const jsDocUtFiles1 = [];
      readFile(outputDir + '/api', jsDocUtFiles1);
      readFile(outputDir + '/arkts', jsDocUtFiles1);
      tsTransform(jsDocUtFiles1, parseJSDocCallback);
      const jsDocUtFiles2 = [];
      readFile(outputDir + '/api', jsDocUtFiles2);
      readFile(outputDir + '/arkts', jsDocUtFiles2);
      tsTransform(jsDocUtFiles2, parseJSDocCallback2);
    });
  program.parse(process.argv);
}

/**
 * 读取目录下所有文件
 * @param {string} dir 文件目录
 * @param {Array} utFiles 所有文件
 */
function readFile(dir, utFiles) {
  try {
    const files = fs.readdirSync(dir);
    files.forEach((element) => {
      if (element === 'build-tools') {
        return;
      }
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath);
      }
    });
  } catch (e) {
    console.error('Error reading files: ' + e.message);
  }
}


/**
 * 遍历所有文件进行处理
 * @param {Array} utFiles 所有文件
 * @param {recursionAstCallback} callback 回调函数
 */
function tsTransform(utFiles, callback) {
  utFiles.forEach((url) => {
    let content = fs.readFileSync(url, 'utf-8');
    jsDocContent = content;
    const apiBaseName = path.basename(url);
    tagDataList = [];
    if (/\.d\.ts/.test(apiBaseName) || /\.d\.ets/.test(apiBaseName)) {
      const fileName = processFileName(url);
      ts.transpileModule(content, {
        compilerOptions: {
          target: ts.ScriptTarget.ES2017,
        },
        fileName: fileName,
        transformers: { before: [callback(url)] }
      });
    } else {
      const outputPath = replaceInputDirWithOutputDir(url, inputDir, outputDir);
      ensureDirectoryExists(outputPath);
      fs.writeFileSync(outputPath, content);
    }
  });
}

/**
 * 统一处理文件名称，修改后缀等
 * @param {string} filePath 文件路径
 * @returns {string} filename 文件名称
 */
function processFileName(filePath) {
  return path
    .basename(filePath)
    .replace(/\.d\.ts$/g, '.ts')
    .replace(/\.d\.ets$/g, '.ets');
}

/**
 * 每个文件处理签回调函数第一个
 * @callback recursionAstCallback
 * @param {string} url 文件路径
 * @returns {Function}
 */
function recursionAstCallback(url) {
  return (context) => {
    return (sourceFile) => {
      node = processVisitEachChild1(context, sourceFile);
      const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
      const result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
      const outputPath = replaceInputDirWithOutputDir(url, inputDir, outputDir);
      ensureDirectoryExists(outputPath);
      fs.writeFileSync(outputPath, result);
      return ts.factory.createSourceFile([], ts.SyntaxKind.EndOfFileToken, ts.NodeFlags.None);
    };
  };
}

/**
 * 每个文件处理签回调函数第一个
 * @callback recursionAstCallback
 * @param {string} url 文件路径
 * @returns {Function}
 */
function recursionAstCallback2(url) {
  return (context) => {
    return (sourceFile) => {
      node = processVisitEachChild2(context, sourceFile);
      const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
      const result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
      fs.writeFileSync(url, result);
      return ts.factory.createSourceFile([], ts.SyntaxKind.EndOfFileToken, ts.NodeFlags.None);
    };
  };
}

/**
 * 每个文件处理签回调函数第一个
 * @callback parseJSDocCallback
 * @param {string} url 文件路径
 * @returns {Function}
 */
function parseJSDocCallback(url) {
  return (context) => {
    return (sourceFile) => {
      node = parseJSDocVisitEachChild1(context, sourceFile);
      changeContent(tagDataList);
      fs.writeFileSync(url, jsDocContent);
      return ts.factory.createSourceFile([], ts.SyntaxKind.EndOfFileToken, ts.NodeFlags.None);
    };
  };
}

/**
 * 每个文件处理签回调函数第一个
 * @callback parseJSDocCallback
 * @param {string} url 文件路径
 * @returns {Function}
 */
function parseJSDocCallback2(url) {
  return (context) => {
    return (sourceFile) => {
      const contents = fs.readFileSync(url, 'utf-8');
      node = parseJSDocVisitEachChild2(context, sourceFile, contents);
      changeContent(tagDataList);
      fs.writeFileSync(url, jsDocContent);
      return ts.factory.createSourceFile([], ts.SyntaxKind.EndOfFileToken, ts.NodeFlags.None);
    };
  };
}

/**
 * 遍历处理tsnode节点
 * @param {context} 解下过后的内容
 * @param {node} 解下过后的节点
 * @returns ts.node
 */
function parseJSDocVisitEachChild1(context, node) {
  return ts.visitEachChild(node, processAllNodes, context);
  function processAllNodes(node) {
    if (node.jsDoc) {
      processAllNodesJSDoc(node.jsDoc);
    }
    return ts.visitEachChild(node, processAllNodes, context);
  }
  function jsDocNodeForeach(tags) {
    tags.forEach(tag => {
      if (!tag.typeExpression) {
        return;
      }
      const typeExpr = tag.typeExpression;
      const newTypeExpr = parseTypeExpr(typeExpr);
      applJSDocTransformations(typeExpr.type, newTypeExpr, tagDataList);
    });
  }
  function processAllNodesJSDoc(jsDocNode) {
    jsDocNode.forEach(doc => {
      if (!doc.tags) {
        return;
      }
      if (/(long|double|int)/g.test(doc.getText())) {
        jsDocNodeForeach(doc.tags);
      }
    });
  }
  function parseTypeExpr(typeExpr) {
    let newTypeExpr = typeExpr;
    if (typeExpr.type.kind === ts.SyntaxKind.JSDocNullableType) {
      newTypeExpr = judgeKind(typeExpr.type);
    } else {
      newTypeExpr = parseTypeExpression(typeExpr.type);
    }
    return newTypeExpr;
  }
  function judgeKind(typeExprType) {
    if (typeExprType.type.kind && typeExprType.type.kind === ts.SyntaxKind.ParenthesizedType) {
      return parseTypeExpression(typeExprType.type.type);
    } else {
      return parseTypeExpression(typeExprType.type);
    }
  }
  function parseTypeExpression(node) {
    if (ts.isTypeReferenceNode(node) && ts.isIdentifier(node.typeName) && typeArray.includes(node.typeName.getText())) {
      node = ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    }
    return ts.visitEachChild(node, parseTypeExpression, context);
  }
}

/**
 * 
 * @param {typeExpr} 原始typeExpr 
 * @param {newTypeExpr} 新typeExpr 
 * @param {content} 文本内容 
 */
function applJSDocTransformations(typeExpr, newTypeExpr, tagDataList) {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  const finalContent = printer.printNode(ts.EmitHint.Unspecified, newTypeExpr);
  if (finalContent.includes('number')) {
    const data = {
      pos: typeExpr.pos,
      end: typeExpr.end,
      convertedText: finalContent
    };
    tagDataList.push(data);
  }
}

/**
 * 
 * @param {typeExpr} 原始typeExpr 
 * @param {newTypeExpr} 新typeExpr 
 * @param {content} 文本内容 
 */
function changeContent(tagDataList) {
  tagDataList.sort((a, b) => b.pos - a.pos);
  for (const data of tagDataList) {
    const before = jsDocContent.substring(0, data.pos);
    const after = jsDocContent.substring(data.end);
    jsDocContent = before + ` ${data.convertedText}` + after;
  }
}

/**
 * 遍历处理tsnode节点
 * @param {context} 解下过后的内容
 * @param {node} 解下过后的节点
 * @returns ts.node
 */
function parseJSDocVisitEachChild2(context, node) {
  return ts.visitEachChild(node, processAllNodes, context);
  function processAllNodes(node) {
    if (node.jsDoc) {
      removeChangeData(node.jsDoc);
    }
    return ts.visitEachChild(node, processAllNodes, context);
  }
  function jsDocNodeForeach(tags) {
    tags.forEach(tag => {
      if (!tag.typeExpression) {
        return;
      }
      writeDataToFile(tag);
    });
  }
  function removeChangeData(node) {
    node.forEach(doc => {
      if (!doc.tags) {
        return;
      }
      jsDocNodeForeach(doc.tags);
    });
  }
  function writeDataToFile(tag) {
    const typeExpr = tag.typeExpression;
    const newTypeExpr = parseTypeExpression(typeExpr.type);
    applJSDocTransformations(typeExpr.type, newTypeExpr, tagDataList);
  }
  function parseTypeExpression(node) {
    if (ts.isUnionTypeNode(node)) {
      const types = node.types;
      const newTypes1 = [];
      let newTypes2 = [];
      types.forEach(type => {
        newTypes1.push(collectNewTypes(type));
      });
      newTypes1.forEach(type => {
        newTypes2 = duplicateRemoval(type);
      });
      node = ts.factory.updateUnionTypeNode(node, newTypes2);
    }
    return ts.visitEachChild(node, parseTypeExpression, context);
  }
}


/**
 * @param {type} 需要去重的节点 
 */
function collectNewTypes(type) {
  if (ts.isTypeReferenceNode(type) && ts.isIdentifier(type.typeName) && typeArray.includes(type.typeName.getText())) {
    return ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
  } else {
    return type;
  }
}


/**
 * 
 * @param {type} 解析过后的节点 
 * @returns 
 */
function duplicateRemoval(type) {
  let newTypes2 = [];
  let hasNumberKeyWorld = false;
  if (type.kind === ts.SyntaxKind.NumberKeyword) {
    if (!hasNumberKeyWorld) {
      newTypes2.push(type);
      hasNumberKeyWorld = true;
    }
  } else {
    newTypes2.push(type);
  }
  return newTypes2;
}

/**
 * 遍历处理tsnode节点
 * @param {context} 解下过后的内容
 * @param {node} 解下过后的节点
 * @returns ts.node
 */
function processVisitEachChild1(context, node) {
  return ts.visitEachChild(node, processAllNodes, context);
  function processAllNodes(node) {
    if (ts.isTypeReferenceNode(node) && ts.isIdentifier(node.typeName) && typeArray.includes(node.typeName.getText())) {
      node = ts.factory.createKeywordTypeNode(ts.SyntaxKind.NumberKeyword);
    }
    if (ts.isStructDeclaration(node)) {
      node = processStructDeclaration(node);
    }
    return ts.visitEachChild(node, processAllNodes, context);
  };
}

/**
 * 处理struct子节点 
 */
function processStructDeclaration(node) {
  const newMembers = [];
  node.members.forEach((member, index) => {
    if (index >= 1) {
      newMembers.push(member);
    }
  });
  node = ts.factory.updateStructDeclaration(
    node,
    node.modifiers,
    node.name,
    node.typeParameters,
    node.heritageClauses,
    newMembers
  );
  return node;
}


/**
 * 遍历处理tsnode节点去重
 * @param {context} 解下过后的内容
 * @param {node} 解下过后的节点
 * @returns ts.node
 */
function processVisitEachChild2(context, node) {
  const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
  return ts.visitEachChild(node, processAllNodes, context);
  function processAllNodes(node) {
    if (ts.isUnionTypeNode(node)) {
      node = apiDuplicateRemoval(node);
    }
    if (ts.isStructDeclaration(node)) {
      node = processStructDeclaration(node);
    }
    return ts.visitEachChild(node, processAllNodes, context);
  };

  function apiDuplicateRemoval(node) {
    const types = node.types;
    const newTypes = [];
    const newTypesText = new Set([]);
    types.forEach(type => {
      const text = printer.printNode(ts.EmitHint.Unspecified, type);
      if (!newTypesText.has(text)) {
        newTypes.push(type);
        newTypesText.add(text);
      }
    });
    node = ts.factory.updateUnionTypeNode(node, newTypes);
    return node;
  }
}

/**
 * 将输入路径替换为输出路径
 * @param {string} inputFilePath 输入文件的绝对路径
 * @param {string} inputDir 输入目录的绝对路径
 * @param {string} outputDir 输出目录的绝对路径
 * @returns {string} 输出文件的绝对路径
 */
function replaceInputDirWithOutputDir(inputFilePath, inputDir, outputDir) {
  return inputFilePath.replace(inputDir, outputDir);
}

/**
 * 确保目录结构存在，如果不存在则创建
 * @param {string} filePath 文件路径
 */
function ensureDirectoryExists(filePath) {
  try {
    const dir = path.dirname(filePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  } catch (error) {
    console.error(`Error creating directory: ${error.message}`);
  }
}

main();