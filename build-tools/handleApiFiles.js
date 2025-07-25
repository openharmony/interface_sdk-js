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

const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const commander = require('commander');
// 处理的目录类型
let dirType = '';
const deleteApiSet = new Set();
const importNameSet = new Set();

// 处理的目录类型，ets代表处理的是1.1目录，ets2代表处理的是1.2目录里有@arkts 1.1&1.2标签的文件，
// noTagInEts2代表处理的是1.2目录里无标签的文件
const DirType = {
  'typeOne': 'ets',
  'typeTwo': 'ets2',
  'typeThree': 'noTagInEts2',
};

const NotNullFilePath = [
  'api',
  'api/@internal/ets',
  'api/@internal/component/ets',
  'api/arkui/component',
  'arkts',
  'kits',
];

const NOT_COPY_DIR = ['build-tools', '.git', '.gitee'];

function isEtsFile(path) {
  return path.endsWith('d.ets');
}

function isTsFile(path) {
  return path.endsWith('d.ts');
}

function hasEtsFile(path) {
  // 为StateManagement.d.ts设定白名单，在1.2打包的时候在Linux上有大小写不同的重名，碰到直接返回true
  if (path.includes('StateManagement.d.ts')) {
    console.log('StateManagement.d.ts is in white list, return true. path = ', path);
    return true;
  } else {
    return fs.existsSync(path.replace(/\.d\.[e]?ts$/g, '.d.ets'));
  }
}

function hasTsFile(path) {
  return fs.existsSync(path.replace(/\.d\.[e]?ts$/g, '.d.ts'));
}

/**
 * 配置参数
 */
function start() {
  const program = new commander.Command();
  program
    .name('handleApiFile')
    .version('0.0.1');
  program
    .option('--path <string>', 'path name')
    .option('--type <string>', 'handle type')
    .option('--output <string>', 'output path')
    .option('--create-keep-file <string>', 'create keep file', 'false')
    .action((opts) => {
      dirType = opts.type;
      handleApiFiles(opts.path, opts.type, opts.output, opts.createKeepFile);
    });
  program.parse(process.argv);
}
/**
 * 处理API文件的入口函数
 * 
 * @param {*} rootPath 
 * @param {*} type 
 */
function handleApiFiles(rootPath, type, output, createKeepFile) {
  const allApiFilePathSet = new Set();
  const fileNames = fs.readdirSync(rootPath);
  const apiRootPath = rootPath.replace(/\\/g, '/');
  fileNames.forEach(fileName => {
    const apiPath = path.join(apiRootPath, fileName);
    const stat = fs.statSync(apiPath);
    if (NOT_COPY_DIR.includes(fileName)) {
      return;
    }
    if (stat.isDirectory()) {
      getApiFileName(apiPath, apiRootPath, allApiFilePathSet);
    } else {
      allApiFilePathSet.add(fileName);
    }

  });

  for (const apiRelativePath of allApiFilePathSet) {
    try {
      handleApiFileByType(apiRelativePath, rootPath, type, output);
    } catch (error) {
      console.log('error===>', error);
    }
  }
  const needCreateKeepFile = createKeepFile.toString() === 'true';
  if (type === DirType.typeTwo && needCreateKeepFile) {
    NotNullFilePath.forEach((dir) => {
      const outDir = path.join(output, dir);
      if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
        writeFile(path.join(outDir, '.keep'), ' ');
        return;
      }
      const fileNames = fs.readdirSync(outDir);
      if (fileNames.length === 0) {
        writeFile(path.join(outDir, '.keep'), ' ');
      }
    });
  }
}


/**
 * 根据传入的type值去处理文件
 * 
 * @param {*} apiRelativePath 
 * @param {*} allApiFilePathSet 
 * @param {*} rootPath 
 * @param {*} type 
 * @returns 
 */
function handleApiFileByType(apiRelativePath, rootPath, type, output) {
  const fullPath = path.join(rootPath, apiRelativePath);
  const isEndWithEts = isEtsFile(apiRelativePath);
  const isEndWithTs = isTsFile(apiRelativePath);
  const outputPath = output ? path.join(output, apiRelativePath) : fullPath;
  const fileContent = fs.readFileSync(fullPath, 'utf-8');

  if (!isEndWithEts && !isEndWithTs) {
    writeFile(outputPath, fileContent);
    return;
  }
  if (type === 'ets2' && !(hasEtsFile(fullPath) && isEndWithTs)) {
    handleFileInSecondType(apiRelativePath, fullPath, type, output);
  } else if (type === 'ets' && !(hasTsFile(fullPath) && isEndWithEts)) {
    handleFileInFirstType(apiRelativePath, fullPath, type, output);
  }
}

/**
 * 处理文件过滤 if arkts 1.1|1.2|1.1&1.2 定义
 * 
 * @param {*} type 
 * @param {*} fileContent 
 * @returns 
 */
function handleArktsDefinition(type, fileContent) {
  let regx = /\/\*\*\* if arkts 1\.1 \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  let regx2 = /\/\*\*\* if arkts 1\.2 \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  let regx3 = /\/\*\*\* if arkts 1\.1\&1\.2 \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  fileContent = fileContent.replace(regx, (substring, p1) => {
    return type === 'ets' ? p1 : '';
  });
  fileContent = fileContent.replace(regx2, (substring, p1) => {
    if (type === 'ets2') {
      return p1.replace(/(\s*)(\*\s\@since)/g, '$1* @arkts 1.2$1$2');
    } else {
      return '';
    }
  });
  fileContent = fileContent.replace(regx3, (substring, p1) => {
    if (type === 'ets') {
      return p1;
    } else {
      return p1.replace(/(\s*)(\*\s\@since)/g, '$1* @arkts 1.2$1$2');
    }
  });
  return fileContent;
}

/**
 * 保留每个api最新一段jsdoc
 * 
 * @param {*} fileContent 
 * @returns 
 */
function saveLatestJsDoc(fileContent) {
  let regx = /(\/\*[\s\S]*?\*\*\/)/g;

  fileContent = fileContent.split('').reverse().join('');
  let preset = 0;
  fileContent = fileContent.replace(regx, (substring, p1, offset, str) => {
    if (!/ecnis@\s*\*/g.test(substring)) {
      return substring;
    }
    const preStr = str.substring(preset, offset);
    preset = offset + substring.length;
    if (/\S/g.test(preStr)) {
      return substring;
    }
    return '';
  });
  fileContent = fileContent.split('').reverse().join('');
  return fileContent;
}

/**
 * 处理ets目录
 * 
 * @param {string} apiRelativePath 
 * @param {string} fullPath 
 * @returns 
 */
function handleFileInFirstType(apiRelativePath, fullPath, type, output) {
  const outputPath = output ? path.join(output, apiRelativePath) : fullPath;
  let fileContent = fs.readFileSync(fullPath, 'utf-8');
  //删除使用/*** if arkts 1.2 */
  fileContent = handleArktsDefinition(type, fileContent);

  const sourceFile = ts.createSourceFile(path.basename(apiRelativePath), fileContent, ts.ScriptTarget.ES2017, true);
  const secondRegx = /(?:@arkts1.2only|@arkts\s+>=\s*1.2|@arkts\s*1.2)/;
  const thirdRegx = /(?:\*\s*@arkts\s+1.1&1.2\s*(\r|\n)\s*)/;
  if (sourceFile.statements.length === 0) {
    // reference文件识别不到首段jsdoc，全文匹配1.2标签，有的话直接删除
    if (secondRegx.test(sourceFile.getFullText())) {
      return;
    }
    // 标有@arkts 1.1&1.2的声明文件，处理since版本号，删除@arkts 1.1&1.2标签
    if (thirdRegx.test(sourceFile.getFullText())) {
      fileContent = handleSinceInFirstType(deleteArktsTag(fileContent));
      writeFile(outputPath, fileContent);
      return;
    }

    handleNoTagFileInFirstType(sourceFile, outputPath, fileContent);
    return;
  }
  const firstNode = sourceFile.statements.find(statement => {
    return !ts.isExpressionStatement(statement);
  });

  if (firstNode) {
    const firstJsdocText = getFileJsdoc(firstNode);
    // 标有1.2标签的声明文件，不拷贝
    if (secondRegx.test(firstJsdocText)) {
      return;
    }
    // 标有@arkts 1.1&1.2的声明文件，处理since版本号，删除@arkts 1.1&1.2标签
    if (thirdRegx.test(firstJsdocText)) {
      fileContent = handleSinceInFirstType(deleteArktsTag(fileContent));
      writeFile(outputPath, fileContent);
      return;
    }
  }

  handleNoTagFileInFirstType(sourceFile, outputPath, fileContent);
}

/**
 * 处理1.1目录中无arkts标签的文件
 * @param {*} sourceFile 
 * @param {*} outputPath 
 * @returns 
 */
function handleNoTagFileInFirstType(sourceFile, outputPath, fileContent) {
  if (path.basename(outputPath) === 'index-full.d.ts') {
    writeFile(outputPath, fileContent);
    return;
  }
  fileContent = deleteApi(sourceFile);

  if (fileContent === '') {
    return;
  }
  fileContent = deleteArktsTag(fileContent);
  fileContent = joinFileJsdoc(fileContent, sourceFile);

  fileContent = handleSinceInFirstType(fileContent);
  writeFile(outputPath, fileContent);
}

/**
 * 删除指定的arkts标签
 * 
 * @param {*} fileContent 文件内容
 * @param {*} regx 删除的正则表达式
 * @returns 
 */
function deleteArktsTag(fileContent) {
  const arktsTagRegx = /\*\s*@arkts\s+1.1&1.2\s*(\r|\n)\s*|\*\s*@arkts\s*1.2s*(\r|\n)\s*|\*\s*@arkts\s*1.1s*(\r|\n)\s*/g;
  fileContent = fileContent.replace(arktsTagRegx, (substring, p1) => {
    return '';
  });
  return fileContent;
}

/**
 * 生成1.1目录里文件时，需要去掉since标签里的1.2版本号
 * 
 * @param {*} sourceFile 
 * @param {*} fullPath 
 */
function handleSinceInFirstType(fileContent) {
  const regx = /@since\s+arkts\s*(\{.*\})/g;
  fileContent = fileContent.replace(regx, (substring, p1) => {
    return '@since ' + JSON.parse(p1.replace(/'/g, '"'))['1.1'];
  });
  return fileContent;
}

/**
 * 处理ets2目录
 * 
 * @param {string} fullPath 文件完整路径
 * @returns 
 */
function handleFileInSecondType(apiRelativePath, fullPath, type, output) {
  const secondRegx = /(?:@arkts1.2only|@arkts\s+>=\s*1.2|@arkts\s*1.2)/;
  const thirdRegx = /(?:\*\s*@arkts\s+1.1&1.2\s*(\r|\n)\s*)/;
  const arktsRegx = /\/\*\*\* if arkts (1.1&)?1.2 \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  let fileContent = fs.readFileSync(fullPath, 'utf-8');
  let sourceFile = ts.createSourceFile(path.basename(fullPath), fileContent, ts.ScriptTarget.ES2017, true);
  const outputPath = output ? path.join(output, apiRelativePath) : fullPath;
  if (!secondRegx.test(fileContent) && !thirdRegx.test(fileContent) && arktsRegx.test(fileContent)) {
    saveApiByArktsDefinition(sourceFile, fileContent, outputPath);
    return;
  }
  //删除使用/*** if arkts 1.2 */
  fileContent = handleArktsDefinition(type, fileContent);
  sourceFile = ts.createSourceFile(path.basename(fullPath), fileContent, ts.ScriptTarget.ES2017, true);
  const regx = /(?:@arkts1.1only|@arkts\s+<=\s+1.1)/;

  if (sourceFile.statements.length === 0) {
    // 有1.2标签的文件，删除标记
    if (secondRegx.test(sourceFile.getFullText())) {
      writeFile(outputPath, deleteArktsTag(fileContent));
      return;
    }
    // 处理标有@arkts 1.1&1.2的声明文件
    if (thirdRegx.test(sourceFile.getFullText())) {
      handlehasTagFile(sourceFile, outputPath);
      return;
    }
    // 处理既没有@arkts 1.2，也没有@arkts 1.1&1.2的声明文件
    handleNoTagFileInSecondType(sourceFile, outputPath, fullPath);
    return;
  }

  const firstNode = sourceFile.statements.find(statement => {
    return !ts.isExpressionStatement(statement);
  });

  if (firstNode) {
    const firstJsdocText = getFileJsdoc(firstNode);
    if (regx.test(firstJsdocText)) {
      return;
    }
    // 有1.2标签的文件，删除标记
    if (secondRegx.test(firstJsdocText)) {
      writeFile(outputPath, deleteArktsTag(fileContent));
      return;
    }
    // 处理标有@arkts 1.1&1.2的声明文件
    if (thirdRegx.test(firstJsdocText)) {
      handlehasTagFile(sourceFile, outputPath);
      return;
    }
  }

  // 处理既没有@arkts 1.2，也没有@arkts 1.1&1.2的声明文件
  handleNoTagFileInSecondType(sourceFile, outputPath, fullPath);
}

/**
 * 获取文件jsdoc
 * @param {*} firstNode 
 * @returns 
 */
function getFileJsdoc(firstNode) {
  const firstNodeJSDoc = firstNode.getFullText().replace(firstNode.getText(), '');
  const jsdocs = firstNodeJSDoc.split('*/');
  let fileJSDoc = '';
  for (let i = 0; i < jsdocs.length; i++) {
    const jsdoc = jsdocs[i];
    if (/\@file/.test(jsdoc)) {
      fileJSDoc = jsdoc;
      break;
    }
  }
  return fileJSDoc;
}

/**
 * 处理有@arkts 1.1&1.2标签的文件
 * @param {*} outputPath 
 */
function handlehasTagFile(sourceFile, outputPath) {
  dirType = DirType.typeTwo;
  let newContent = getDeletionContent(sourceFile);
  if (newContent === '') {
    return;
  }
  // 保留最后一段注释
  newContent = saveLatestJsDoc(newContent);
  writeFile(outputPath, deleteArktsTag(newContent));
}

/**
 * 处理1.2目录中无arkts标签的文件
 * @param {*} sourceFile 
 * @param {*} outputPath 
 * @returns 
 */
function handleNoTagFileInSecondType(sourceFile, outputPath, fullPath) {
  dirType = DirType.typeThree;
  const arktsTagRegx = /\*\s*@arkts\s+1.1&1.2\s*(\r|\n)\s*|@arkts\s*1.2/g;
  const fileContent = sourceFile.getFullText();
  let newContent = '';
  // API未标@arkts 1.2或@arkts 1.1&1.2标签，删除文件
  if (!arktsTagRegx.test(fileContent)) {
    if (fullPath.endsWith('.d.ts') && hasEtsFile(fullPath) || fullPath.endsWith('.d.ets') && hasTsFile(fullPath)) {
      newContent = saveLatestJsDoc(fileContent);
      newContent = deleteArktsTag(newContent);
      writeFile(outputPath, newContent);
    }
    return;
  }
  newContent = getDeletionContent(sourceFile);
  if (newContent === '') {
    return;
  }
  // 保留最后一段注释
  newContent = saveLatestJsDoc(newContent);
  newContent = deleteArktsTag(newContent);
  writeFile(outputPath, newContent);
}

/**
 * 没有arkts标签，但有if arkts 1.2和1.1&1.2的情况
 * @param {*} sourceFile 
 * @param {*} fileContent 
 * @param {*} outputPath 
 */
function saveApiByArktsDefinition(sourceFile, fileContent, outputPath) {
  const regx = /\/\*\*\* if arkts (1.1&)?1.2 \*\/\s*([\s\S]*?)\s*\/\*\*\* endif \*\//g;
  const regex = /\/\*\r?\n\s*\*\s*Copyright[\s\S]*?limitations under the License\.\r?\n\s*\*\//g;
  const copyrightMessage = fileContent.match(regex)[0];
  const firstNode = sourceFile.statements.find(statement => {
    return !ts.isExpressionStatement(statement);
  });
  let fileJsdoc = firstNode ? getFileJsdoc(firstNode) + '*/\n' : '';
  let newContent = copyrightMessage + fileJsdoc + Array.from(fileContent.matchAll(regx), match => match[2]).join('\n');

  writeFile(outputPath, saveLatestJsDoc(newContent));
}

/**
 * 拼接上被删除的文件注释
 * 
 * @param {*} deletionContent 
 * @param {*} sourceFile 
 * @returns 
 */
function joinFileJsdoc(deletionContent, sourceFile) {
  const fileJsdoc = sourceFile.getFullText().replace(sourceFile.getText(), '');
  const copyrightMessage = hasCopyright(fileJsdoc.split('*/')[0]) ? fileJsdoc.split('*/')[0] + '*/\r\n' : '';
  const regx = /@kit | @file/g;
  let kitMessage = '';

  if (regx.test(fileJsdoc)) {
    kitMessage = fileJsdoc.split('*/')[1] + '*/\r\n';
  }
  let newContent = deletionContent;
  const isHasCopyright = hasCopyright(deletionContent);

  if (!isHasCopyright && !regx.test(deletionContent)) {
    newContent = copyrightMessage + kitMessage + deletionContent;
  } else if (!isHasCopyright) {
    newContent = copyrightMessage + deletionContent;
  } else if (isHasCopyright && !/@kit | @file/g.test(deletionContent)) {
    const joinFileJsdoc = copyrightMessage + kitMessage;
    newContent = deletionContent.replace(copyrightMessage, joinFileJsdoc);
  }

  if (dirType !== DirType.typeOne) {
    // TODO：添加use static字符串
  }
  return newContent;
}

function getDeletionContent(sourceFile) {
  const deletionContent = deleteApi(sourceFile);
  if (deletionContent === '') {
    return '';
  }
  let newContent = joinFileJsdoc(deletionContent, sourceFile);

  // 处理since版本
  newContent = handleSinceInSecondType(newContent);
  return newContent;
}

/**
 * 重写文件内容
 * @param {*} outputPath 
 * @param {*} fileContent 
 */
function writeFile(outputPath, fileContent) {
  const outputDir = path.dirname(outputPath);
  let newPath = outputPath;
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  if (dirType !== DirType.typeOne && isTsFile(outputPath)) {
    newPath = outputPath.replace('.d.ts', '.d.ets');
  }
  fs.writeFileSync(newPath, fileContent);
}

/**
 * 添加use static字符串
 * 
 * @param {*} fileContent 文件内容
 * @param {*} copyrightMessage 版权头内容
 * @returns 
 */
function addStaticString(fileContent, copyrightMessage) {
  const hasStaticMessage = /use\s+static/g.test(fileContent);
  const regex = /\/\*\r?\n\s*\*\s*Copyright[\s\S]*?limitations under the License\.\r?\n\s*\*\//g;
  const staticMessage = 'use static';
  let newContent = fileContent;
  if (!hasStaticMessage) {
    const newfileJsdoc = `${copyrightMessage}'${staticMessage}'\r\n`;
    newContent = newContent.replace(regex, newfileJsdoc);
  }
  return newContent;
}

/**
 * 判断新生成的文件内容有没有版权头
 * 
 * @param {*} fileText 新生成的文件内容
 * @returns 
 */
function hasCopyright(fileText) {
  return /http(\:|\?:)\/\/www(\.|\/)apache\.org\/licenses\/LICENSE\-2\.0 | Copyright\s*\(c\)/gi.test(fileText);
}

// 创建 Transformer
const transformer = (context) => {
  return (rootNode) => {
    const visit = (node) => {
      //struct节点下面会自动生成constructor节点, 置为undefined
      if (node.kind === ts.SyntaxKind.Constructor && node.parent.kind === ts.SyntaxKind.StructDeclaration) {
        return undefined;
      }

      // 判断是否为要删除的变量声明
      if ((apiNodeTypeArr.includes(node.kind) || validateExportDeclaration(node)) && judgeIsDeleteApi(node)) {
        collectDeletionApiName(node);
        // 删除该节点
        return undefined;
      }

      // 非目标节点：继续遍历子节点
      return ts.visitEachChild(node, visit, context);
    };
    return ts.visitNode(rootNode, visit);
  };
};

function validateExportDeclaration(node) {
  return ts.isExportDeclaration(node) && node.moduleSpecifier && node.jsDoc && node.jsDoc.length !== 0;
}

/**
 * 删除API
 * @param {*} sourceFile 
 * @returns 
 */
function deleteApi(sourceFile) {
  let result = ts.transform(sourceFile, [transformer]);
  const newSourceFile = result.transformed[0];
  if (isEmptyFile(newSourceFile)) {
    return '';
  }

  // 打印结果
  const printer = ts.createPrinter();
  let fileContent = printer.printFile(newSourceFile);
  result = ts.transform(newSourceFile, [transformExportApi]);
  fileContent = printer.printFile(result.transformed[0]);
  deleteApiSet.clear();
  return fileContent.replace(/export\s*(?:type\s*)?\{\s*\}\s*(;)?/g, '');
}

/**
 * api被删除后，对应的export api也需要被删除
 * @param {*} context 
 * @returns 
 */
const transformExportApi = (context) => {
  return (rootNode) => {
    const importOrExportNodeVisitor = (node) => {
      if (ts.isImportClause(node) && node.name && ts.isIdentifier(node.name) ||
        ts.isImportSpecifier(node) && node.name && ts.isIdentifier(node.name)) {
        importNameSet.add(node.name?.getText());
      }
      // 剩下未被删除的API中，如果还有与被删除API名字一样的API，就将其从set集合中删掉
      if (apiNodeTypeArr.includes(node.kind) && deleteApiSet.has(node.name?.getText())) {
        deleteApiSet.delete(node.name?.getText());
      }
      // 非目标节点：继续遍历子节点
      return ts.visitEachChild(node, importOrExportNodeVisitor, context);
    };
    ts.visitNode(rootNode, importOrExportNodeVisitor);

    const allNodeVisitor = (node) => {
      // 判断是否为要删除的变量声明
      if (ts.isExportAssignment(node) && deleteApiSet.has(node.expression.escapedText.toString()) &&
        !importNameSet.has(node.expression.escapedText.toString())) {
        return undefined;
      }

      if (ts.isExportSpecifier(node) && deleteApiSet.has(node.name.escapedText.toString()) &&
        !importNameSet.has(node.name.escapedText.toString())) {
        return undefined;
      }

      // 非目标节点：继续遍历子节点
      return ts.visitEachChild(node, allNodeVisitor, context);
    };
    return ts.visitNode(rootNode, allNodeVisitor);
  };
};

function isEmptyFile(node) {
  let isEmpty = true;
  if (ts.isSourceFile(node) && node.statements) {
    const needExportName = new Set();
    for (let i = 0; i < node.statements.length; i++) {
      const statement = node.statements[i];
      if (ts.isExportDeclaration(statement) && statement.moduleSpecifier) {
        isEmpty = false;
        break;
      }
      if (judgeExportHasImport(statement, needExportName)) {
        continue;
      }
      isEmpty = false;
      break;
    }
  }
  return isEmpty;
}

function collectDeletionApiName(node) {
  if (!ts.isImportClause(node)) {
    deleteApiSet.add(node.name?.getText());
    return;
  }

  if (ts.isImportDeclaration(node) && node.importClause?.name) {
    deleteApiSet.add(node.importClause.name.escapedText.toString());
    return;
  }
  const namedBindings = node.namedBindings;
  if (namedBindings !== undefined && ts.isNamedImports(namedBindings)) {
    const elements = namedBindings.elements;
    elements.forEach((element) => {
      const exportName = element.propertyName ?
        element.propertyName.escapedText.toString() :
        element.name.escapedText.toString();
      deleteApiSet.add(exportName);
    });
  }
}

/**
 * 判断import节点和export节点。
 * 当前文本如果还有其他节点则不能删除，
 * 如果只有import和export则判断是否export导出import节点
 * 
 * @param {*} statement 
 * @param {*} needExportName 
 * @returns 
 */
function judgeExportHasImport(statement, needExportName) {
  if (ts.isImportDeclaration(statement)) {
    processImportDeclaration(statement, needExportName);
    return true;
  } else if (ts.isExportAssignment(statement) &&
    !needExportName.has(statement.expression.escapedText.toString())) {
    return true;
  } else if (ts.isExportDeclaration(statement)) {
    return !statement.exportClause.elements.some((element) => {
      const exportName = element.propertyName ?
        element.propertyName.escapedText.toString() :
        element.name.escapedText.toString();
      return needExportName.has(exportName);
    });
  }
  return false;
}

function processImportDeclaration(statement, needExportName) {
  const importClause = statement.importClause;
  if (!ts.isImportClause(importClause)) {
    return;
  }
  if (importClause.name) {
    needExportName.add(importClause.name.escapedText.toString());
  }
  const namedBindings = importClause.namedBindings;
  if (namedBindings !== undefined && ts.isNamedImports(namedBindings)) {
    const elements = namedBindings.elements;
    elements.forEach((element) => {
      const exportName = element.propertyName ?
        element.propertyName.escapedText.toString() :
        element.name.escapedText.toString();
      needExportName.add(exportName);
    });
  }
}

/**
 * 判断node节点中是否有famodelonly/deprecated/arkts <=1.1标签
 * 
 * @param {*} node 
 * @returns 
 */
function judgeIsDeleteApi(node) {
  const notesContent = node.getFullText().replace(node.getText(), '').replace(/[\s]/g, '');
  const notesArr = notesContent.split(/\/\*\*/);
  const notesStr = notesArr[notesArr.length - 1];
  const sinceArr = notesStr.match(/@since\d+/);
  let sinceVersion = 20;

  if (dirType === DirType.typeOne) {
    return /@arkts1\.2(?!\d)/g.test(notesStr);
  }

  if (sinceArr) {
    sinceVersion = sinceArr[0].replace('@since', '');
  }

  if (dirType === DirType.typeTwo) {
    return (/@deprecated/g.test(notesStr) && sinceVersion < 20) || /@arkts<=1.1/g.test(notesStr);
  }

  if (dirType === DirType.typeThree) {
    return !/@arkts1\.2\*|@arkts1\.1&1\.2\*/g.test(notesStr);
  }

  return false;
}

/**
 * 生成1.2目录里文件时，需要去掉since标签里的dynamic版本号
 * 
 * @param {*} fileContent 
 * @returns 
 */
function handleSinceInSecondType(fileContent) {
  const regx = /@since\s+arkts\s*(\{.*\})/g;
  fileContent = fileContent.replace(regx, (substring, p1) => {
    return '@since ' + JSON.parse(p1.replace(/'/g, '"'))['1.2'];
  });
  return fileContent;
}


function deleteSameNameFile(fullPath) {
  try {
    fs.unlinkSync(fullPath);
  } catch (error) {
    console.error('delete file failed: ', error);
  }
}

/**
 * 
 * @param { string } apiPath 需要处理的api文件所在路径
 * @param { string } rootPath ets文件夹路径
 * @returns { Set<string> } 需要处理的api文件的相对于ets目录的路径
 */
function getApiFileName(apiPath, rootPath, allApiFilePathSet) {
  const apiFilePathSet = new Set();
  const fileNames = fs.readdirSync(apiPath);

  fileNames.forEach(fileName => {
    const apiFilePath = path.join(apiPath, fileName).replace(/\\/g, '/');
    const stat = fs.statSync(apiFilePath);

    if (stat.isDirectory()) {
      getApiFileName(apiFilePath, rootPath, allApiFilePathSet);
    } else {
      const apiRelativePath = apiFilePath.replace(rootPath, '');
      allApiFilePathSet.add(apiRelativePath);
    }
  });

  return apiFilePathSet;
}

// 所有API的节点类型
const apiNodeTypeArr = [
  ts.SyntaxKind.VariableStatement,
  ts.SyntaxKind.MethodDeclaration,
  ts.SyntaxKind.MethodSignature,
  ts.SyntaxKind.FunctionDeclaration,
  ts.SyntaxKind.Constructor,
  ts.SyntaxKind.ConstructSignature,
  ts.SyntaxKind.CallSignature,
  ts.SyntaxKind.PropertyDeclaration,
  ts.SyntaxKind.PropertySignature,
  ts.SyntaxKind.EnumMember,
  ts.SyntaxKind.EnumDeclaration,
  ts.SyntaxKind.TypeAliasDeclaration,
  ts.SyntaxKind.ClassDeclaration,
  ts.SyntaxKind.InterfaceDeclaration,
  ts.SyntaxKind.ModuleDeclaration,
  ts.SyntaxKind.StructDeclaration,
  ts.SyntaxKind.GetAccessor,
  ts.SyntaxKind.SetAccessor,
  ts.SyntaxKind.IndexSignature,
];

start();
