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
const fs = require('fs');
const path = require('path');
const ts = require('typescript');
const commander = require('commander');


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
  if (!apiRelativePath.endsWith('d.ets') && !apiRelativePath.endsWith('d.ts')) {
    return;
  }

  const sameName = apiRelativePath.endsWith('d.ets') ? apiRelativePath.replace('d.ets', 'd.ts') : apiRelativePath.replace('d.ts', 'd.ets');

  if (type === 'ets2') {
    handelFileInSecondType(sameName, apiRelativePath, fullPath, allApiFilePathSet, rootPath);
  } else if (type === 'ets') {
    handelFileInFirstType(sameName, apiRelativePath, fullPath, allApiFilePathSet);
  }
}

/**
 * 处理ets目录
 * 
 * @param {string} sameName 
 * @param {string} apiRelativePath 
 * @param {string} fullPath 
 * @returns 
 */
function handelFileInFirstType(sameName, apiRelativePath, fullPath, allApiFilePathSet) {
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const apiFileName = path.basename(apiRelativePath).replace(/d.ts|d.ets/g, 'ts');
  const sourceFile = ts.createSourceFile(apiFileName, fileContent, ts.ScriptTarget.ES2017, true);
  const regx = /(?:@arkts1.2only|@arkts\s+>=\s+1.2)/g;
  // 节点中识别不到首段jsdoc，直接使用全文字符串去匹配，标有1.2的文件，删除
  if (sourceFile.statements.length === 0) {
    if (regx.test(sourceFile.getFullText())) {
      deleteSameNameFile(fullPath);
      return;
    }
    return;
  }
  const fiestNode = sourceFile.statements.find(statement=>{
    return !ts.isExpressionStatement(statement);
  });
  // 没有@arkts标签的，不处理
  if (!fiestNode || !fiestNode.jsDoc) {
    return;
  }

  const firstJsdocText = fiestNode.jsDoc[0].getText();
  // 标有1.2的文件，删除
  if (regx.test(firstJsdocText)) {
    deleteSameNameFile(fullPath);
    return;
  }

  // 判断是否有同名文件，删除同名文件里的d.ets文件
  if (allApiFilePathSet.has(sameName) && apiRelativePath.endsWith('d.ets')) {
    // 文件名相同时，删除d.ets文件
    deleteSameNameFile(fullPath);
    return;
  }
}

/**
 * 处理ets2目录
 * 
 * @param {string} sameName 
 * @param {string} apiRelativePath 
 * @param {string} fullPath 
 * @returns 
 */
function handelFileInSecondType(sameName, apiRelativePath, fullPath, allApiFilePathSet, rootPath) {
  const fileContent = fs.readFileSync(fullPath, 'utf-8');
  const sourceFile = ts.createSourceFile(path.basename(apiRelativePath), fileContent, ts.ScriptTarget.ES2017, true);
  const regx = /(?:@arkts1.1only|@arkts\s+<=\s+1.1)/g;
  if (sourceFile.statements.length === 0) {
    // 节点中识别不到首段jsdoc，直接使用全文字符串去匹配，如果有1.1标签的文件，删除
    if (regx.test(sourceFile.getFullText())) {
      deleteSameNameFile(fullPath);
      return;
    }
    return;
  }

  if (sourceFile.statements[0].jsDoc && sourceFile.statements[0].jsDoc[0].tags) {
    const firstJsdocText = sourceFile.statements[0].jsDoc[0].getText();
    // 从节点中获取首段标签，删除标有1.1的文件
    if (regx.test(firstJsdocText)) {
      deleteSameNameFile(fullPath);
      return;
    }
  }

  if (allApiFilePathSet.has(sameName) && apiRelativePath.endsWith('d.ts')) {
    // 文件名相同时，删除d.ts文件
    deleteSameNameFile(fullPath);
    return;
  }
  // 剩余d.ts文件，重命名为d.ets文件，d.ets文件不做处理
  if (apiRelativePath.endsWith('d.ts')) {
    try {
      fs.renameSync(path.join(rootPath, apiRelativePath), path.join(rootPath, sameName));
    } catch (error) {
      console.error('rename file failed: ', error);
    }
    return;
  }
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

start();
