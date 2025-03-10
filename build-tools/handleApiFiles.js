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
    .action((opts) => {
      handleApiFiles(opts.path, opts.type);
    });
  program.parse(process.argv);
}
/**
 * 处理API文件的入口函数
 * 
 * @param {*} rootPath 
 * @param {*} type 
 */
function handleApiFiles(rootPath, type) {
  const allApiFilePathSet = new Set();
  const fileNames = fs.readdirSync(rootPath);
  const apiRootPath = rootPath.replace(/\\/g, '/');
  fileNames.forEach(fileName => {
    const apiPath = path.join(apiRootPath, fileName);
    const stat = fs.statSync(apiPath);
    if (stat.isDirectory()) {
      getApiFileName(apiPath, apiRootPath, allApiFilePathSet);
    } else {
      allApiFilePathSet.add(fileName);
    }

  });

  for (const apiRelativePath of allApiFilePathSet) {
    try {
      handleApiFileByType(apiRelativePath, allApiFilePathSet, rootPath, type);
    } catch (error) {
      console.log('error===>', error);
    }
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
function handleApiFileByType(apiRelativePath, allApiFilePathSet, rootPath, type) {
  const fullPath = path.join(rootPath, apiRelativePath);
  const isEndWithEts = apiRelativePath.endsWith('d.ets');
  const isEndWithTs = apiRelativePath.endsWith('d.ts');
  if (!isEndWithEts && !isEndWithTs) {
    return;
  }
  const hasEtsFile = fs.existsSync(fullPath.replace(/\.d\.[e]?ts$/g, '.d.ets'));
  const hasTsFile = fs.existsSync(fullPath.replace(/\.d\.[e]?ts$/g, '.d.ts'));
  if (type === 'ets2' && !(hasEtsFile && isEndWithTs)) {
    handelFileInSecondType(fullPath);
  } else if (type === 'ets' && !(hasTsFile && isEndWithEts)) {
    handelFileInFirstType(apiRelativePath, fullPath);
  } else {
    deleteSameNameFile(fullPath);
  }
}

/**
 * 处理ets目录
 * 
 * @param {string} apiRelativePath 
 * @param {string} fullPath 
 * @returns 
 */
function handelFileInFirstType(apiRelativePath, fullPath) {
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const apiFileName = path.basename(apiRelativePath).replace(/d.ts|d.ets/g, 'ts');
  const sourceFile = ts.createSourceFile(apiFileName, fileContent, ts.ScriptTarget.ES2017, true);
  if (sourceFile.statements.length === 0) {
    // reference文件识别不到首段jsdoc，特殊处理
    if (/@arkts\s+>=\s+1.2/.test(sourceFile.getFullText())) {
      deleteSameNameFile(fullPath);
      return;
    }
    return;
  }

  // 文件没有标签的，处理API里的since标签
  if (!sourceFile.statements[0].jsDoc) {
    if (/@arkts\s+>=\s+1.2/.test(sourceFile.statements[0].getFullText())) {
      deleteSameNameFile(fullPath);
      return;
    }
    handleSinceInFirstType(sourceFile, fullPath);
    return;
  }

  const firstJsdocText = sourceFile.statements[0].jsDoc[0].getText();
  // 标有@arkts >= 1.2的d.ts文件，删除
  if (firstJsdocText.match(/\@arkts\s+>=\s+1.2/g)) {
    deleteSameNameFile(fullPath);
    return;
  }

  handleSinceInFirstType(sourceFile, fullPath);
}


/**
 * 生成1.1目录里文件时，需要去掉since标签里的static版本号
 * 
 * @param {*} sourceFile 
 * @param {*} fullPath 
 */
function handleSinceInFirstType(sourceFile, fullPath) {
  let sourceFileText = sourceFile.getFullText();
  sourceFileText = sourceFileText.replace(/\s+static\s+\d+/g, '').replace(/dynamic\s+/g, '');
  fs.writeFileSync(fullPath, sourceFileText);
}

/**
 * 处理ets2目录
 * 
 * @param {string} fullPath 文件完整路径
 * @returns 
 */
function handelFileInSecondType(fullPath) {
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const apiFileName = path.basename(fullPath).replace(/d.ts|d.ets/g, 'ts');
  const sourceFile = ts.createSourceFile(apiFileName, fileContent, ts.ScriptTarget.ES2017, true);
  if (sourceFile.statements.length === 0) {
    // reference文件识别不到首段jsdoc，特殊处理
    if (/@arkts\s+<=\s+1.1/.test(sourceFile.getFullText())) {
      deleteSameNameFile(fullPath);
      return;
    }

    if (fullPath.endsWith('d.ts')) {
      const newPath = fullPath.replace('.d.ts', '.d.ets');
      fs.renameSync(fullPath, newPath);
      return;
    }
    return;
  }

  // 没有文件jsdoc，直接遍历节点，删除API
  if (!sourceFile.statements[0].jsDoc) {
    writeFile(sourceFile, fullPath);
    return;
  }

  if (sourceFile.statements && sourceFile.statements[0].jsDoc && sourceFile.statements[0].jsDoc[0].tags) {
    const firstJsdocText = sourceFile.statements[0].jsDoc[0].getText();
    // 从节点中获取首段标签，删除标有@arkts <= 1.1的文件
    if (firstJsdocText.match(/\@arkts\s+<=\s+1.1/g)) {
      deleteSameNameFile(fullPath);
      return;
    }
  }

  // 遍历节点，删除API，重写文件
  writeFile(sourceFile, fullPath);
}

function writeFile(sourceFile, fullPath) {
  const fileJsdoc = sourceFile.getFullText().replace(sourceFile.getText(), '');
  const copyrightMessage = fileJsdoc.split('*/')[0];
  let kitMessage = '';
  if (/@kit | @file/.test(fileJsdoc)) {
    kitMessage = fileJsdoc.split('*/')[1];
  }
  const deletionContent = deleteApi(sourceFile);
  if (deletionContent === '') {
    deleteSameNameFile(fullPath);
    return;
  }
  let newContent = deletionContent;

  if (!hasCopyright(deletionContent) && !/@kit | @file/.test(deletionContent)) {
    newContent = copyrightMessage + kitMessage + deletionContent;
  }

  if (!hasCopyright(deletionContent)) {
    newContent = copyrightMessage + deletionContent;
  }

  if (hasCopyright(deletionContent) && !/@kit | @file/.test(deletionContent)) {
    const joinFileJsdoc = copyrightMessage + kitMessage;
    newContent = deletionContent.replace(copyrightMessage, joinFileJsdoc);
  }

  if (fullPath.endsWith('d.ts')) {
    const newPath = fullPath.replace('.d.ts', '.d.ets');
    fs.renameSync(fullPath, newPath);
    fs.writeFileSync(newPath, newContent);
  } else {
    fs.writeFileSync(fullPath, newContent);
  }
}

/**
 * 判断新生成的文件内容有没有版权头
 * 
 * @param {*} fileText 新生成的文件内容
 * @returns 
 */
function hasCopyright(fileText) {
  return /http\:\/\/www\.apache\.org\/licenses\/LICENSE\-2\.0/g.test(fileText);
}

// 创建 Transformer
const transformer = (context) => {
  return (rootNode) => {
    const visit = (node) => {
      // 判断是否为要删除的变量声明
      if (apiNodeTypeArr.includes(node.kind) && judgeIsDeleteApi(node)) {
        // 删除该节点
        return undefined;
      }

      // 非目标节点：继续遍历子节点
      return ts.visitEachChild(node, visit, context);
    };
    return ts.visitNode(rootNode, visit);
  };
};

/**
 * 删除有famodelonly/deprecated/arkts <= 1.1标签
 * @param {*} sourceFile 
 * @returns 
 */
function deleteApi(sourceFile) {
  const result = ts.transform(sourceFile, [transformer]);
  const newSourceFile = result.transformed[0];
  if (isEmptyFile(newSourceFile)) {
    return '';
  }
  // 打印结果
  const printer = ts.createPrinter();
  const fileContent = printer.printFile(newSourceFile);
  return handleSinceInSecondType(fileContent);
}

function isEmptyFile(node) {
  let isEmpty = true;
  if (ts.isSourceFile(node) && node.statements) {
    for (let i = 0; i < node.statements.length; i++) {
      const statement = node.statements[i];
      if (ts.isImportDeclaration(statement)) {
        continue;
      }
      isEmpty = false;
      break;
    }
  }
  return isEmpty;
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
  if (notesStr.length !== 0) {
    return /@famodelonly/ig.test(notesStr) || /@deprecated/g.test(notesStr) || /@arkts<=1.1/g.test(notesStr);
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
  const newFileContent = fileContent.replace(/\s+dynamic\s+\d+/g, '').replace(/static\s+/g, '');
  return newFileContent;
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
  ts.SyntaxKind.ExportAssignment,
  ts.SyntaxKind.ExportDeclaration,
  ts.SyntaxKind.ImportDeclaration,
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
  ts.SyntaxKind.StructDeclaration
];

start();
