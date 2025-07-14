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
const fs = require('fs');
const ts = require('typescript');
const commander = require('commander');

let sourceFile = null;
let componentEtsFiles = [];
let componentEtsDeleteFiles = [];
const kitFileNeedDeleteMap = new Map();
const stmtReplacementMap = new Map();


function start() {
  const program = new commander.Command();
  program
    .name('noninterop')
    .version('0.0.1');
  program
    .option('--input <string>', 'input path')
    .option('--output <string>', 'output path')
    .action((opts) => {
      outputPath = opts.output;
      inputDir = opts.input;
      transformFiles(opts.input);
    });
  program.parse(process.argv);
}

function transformFiles(inputDir) {
  // 入口
  try {
    const utFiles = [];
    readFile(inputDir, utFiles); // 读取文件
    tsTransform(utFiles, deleteSystemApi);
  } catch (error) {
    console.error('DELETE_SYSTEM_PLUGIN ERROR: ', error);
  }
}

function getPureName(name) {
  const pureName = path.basename(name).replace('.d.ts', '').replace('.d.ets', '').replace(/_/g, '').toLowerCase();
  return pureName;
}


/**
 * 判断文件路径对应的文件是否存在
 * @param {string} importPath kit文件import
 * @param {string} apiDir 引用接口所在目录
 * @returns {boolean} importPath是否存在
 */
function hasFileByImportPath(importPath, apiDir) {
  let fileDir = path.resolve(apiDir);
  if (importPath.startsWith('@arkts')) {
    fileDir = path.resolve(inputDir, '../arkts');
  }
  return isExistArkUIFile(path.resolve(inputDir, 'arkui', 'component'), importPath) ||
    isExistImportFile(fileDir, importPath);
}

function isExistArkUIFile(resolvedPath, importPath) {
  const filePath = path.resolve(resolvedPath, importPath);
  if (
    filePath.includes(path.resolve(inputDir, '@internal', 'component', 'ets')) ||
    filePath.includes(path.resolve(inputDir, 'arkui', 'component'))
  ) {
    const fileName = getPureName(filePath);
    return componentEtsFiles.includes(fileName);
  }
  return isExistImportFile(resolvedPath, importPath);
}

function isExistImportFile(fileDir, importPath) {
  return ['.d.ts', '.d.ets'].some(ext => {
    return fs.existsSync(path.resolve(fileDir, `${importPath}${ext}`));
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

function processFileNameWithoutExt(filePath) {
  return path
    .basename(filePath)
    .replace(/\.d\.ts$/g, '')
    .replace(/\.d\.ets$/g, '')
    .replace(/\.ts$/g, '')
    .replace(/\.ets$/g, '');
}

/**
 * 对文件内容进行预处理，把下面的两行处理成符合1.1的语法：
 * @Retention({policy: "SOURCE"})
 * export declare @interface State {};
 * 
 * 转成
 * /**@reserved @Retention({policy: "SOURCE"}) #/
 * export declare const State;
 * @param {string} content 
 */
function preprocessContent(content) {
  stmtReplacementMap.clear();
  let result = content.replace(/^(\s*)(\@Retention\(\{[^\(\)\{\}]*\}\)$)/mg, '$1/**@reserved $2 */');
  const matches = result.match(/(^[^\*]*\s+\@interface\s+.*$)/mg);
  if (matches) {
    for (const match of matches) {
      const transformedStmt = match.replace(/(?<=\s+)\@interface(\s+\w+)\s*\{\}/g, 'const$1');
      result = result.replace(match, transformedStmt);
      stmtReplacementMap.set(match, transformedStmt);
    }
  }
  return result;
}

/**
 * 遍历所有文件进行处理
 * @param {Array} utFiles 所有文件
 * @param {deleteSystemApi} callback 回调函数
 */
function tsTransform(utFiles, callback) {
  utFiles.forEach((url) => {
    const apiBaseName = path.basename(url);
    let content = fs.readFileSync(url, 'utf-8'); // 文件内容
    let isTransformer = /\.d\.ts/.test(apiBaseName) || /\.d\.ets/.test(apiBaseName);
    if (/\.json/.test(url)) {
      isTransformer = false;
    }
    if (!isTransformer) {
      writeFile(url, content);
      return;
    }
    // dts文件处理
    const fileName = processFileName(url);
    ts.transpileModule(preprocessContent(content), {
      compilerOptions: {
        target: ts.ScriptTarget.ES2017,
      },
      fileName: fileName,
      transformers: { before: [callback(url)] },
    });
  });
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
      const filePath = path.join(dir, element);
      const status = fs.statSync(filePath);
      if (status.isDirectory()) {
        readFile(filePath, utFiles);
      } else {
        utFiles.push(filePath);
      }
    });
  } catch (e) {
    console.log('ETS ERROR: ' + e);
  }
}

function writeFile(url, data, option) {
  const newFilePath = path.resolve(outputPath, path.relative(inputDir, url));
  fs.mkdir(path.dirname(newFilePath), { recursive: true }, (err) => {
    if (err) {
      console.log(`ERROR FOR CREATE PATH ${err}`);
    } else {
      if (data === '') {
        fs.rmSync(newFilePath);
        return;
      }
      fs.writeFileSync(newFilePath, data, option, (err) => {
        if (err) {
          console.log(`ERROR FOR CREATE FILE ${err}`);
        }
      });
    }
  });
}

const globalModules = new Map();

function postProcessContent(content) {
  for(const [originalStmt, transformedStmt] of stmtReplacementMap){
    content = content.replace(transformedStmt, originalStmt);
  }
  return content.replace(/^(\s*)\/\*\*\@reserved (.*) \*\/$/mg, '$1$2');
}

/**
 * 每个文件处理前回调函数第二个
 * @param {string} url 文件路径
 * @returns {Function}
 */
function formatImportDeclaration(url, copyrightMessage = '', isCopyrightDeleted = false) {
  return (context) => {
    const allIdentifierSet = new Set([]);
    return (node) => {
      sourceFile = node;
      collectAllIdentifier(node); // 获取所有标识符
      formatValue = formatAllNodes(url, node, allIdentifierSet); // 获取所有节点
      node = formatValue.node;
      const referencesMessage = formatValue.referencesMessage;
      if (formatValue.isCopyrightDeleted) {
        copyrightMessage = formatValue.copyrightMessage;
        isCopyrightDeleted = formatValue.isCopyrightDeleted;
      }
      if (!isEmptyFile(node)) {
        const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
        let result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
        if (isCopyrightDeleted) {
          // 当第一个节点被删除时会同步删除整个文件jsdoc
          result = copyrightMessage + '\n' + result;
        }
        copyrightMessage = node.getFullText().replace(node.getText(), '');
        if (referencesMessage) {
          // 将references写入文件
          result =
            result.substring(0, copyrightMessage.length) +
            '\n' +
            referencesMessage +
            result.substring(copyrightMessage.length);
        }
        result = removeNonInteropDoc(result);
        writeFile(url, postProcessContent(result));
      }
      return ts.factory.createSourceFile([], ts.SyntaxKind.EndOfFileToken, ts.NodeFlags.None);
    };
    function collectAllIdentifier(node) {
      if (ts.isSourceFile(node) && node.statements) {
        node.statements.forEach((stat) => {
          if (!ts.isImportDeclaration(stat)) {
            ts.visitEachChild(stat, collectAllNodes, context);
          }
        });
      }
    }
    function collectAllNodes(node) {
      if (ts.isIdentifier(node)) {
        allIdentifierSet.add(node.escapedText.toString());
      }
      return ts.visitEachChild(node, collectAllNodes, context);
    }
  };
}

function formatAllNodes(url, node, allIdentifierSet, copyrightMessage = '', isCopyrightDeleted = false) {
  let referencesMessage = '';
  // let currReferencesModule = formatAllNodesReferences(url);
  let currReferencesModule = [];
  if (ts.isSourceFile(node) && node.statements) {
    const newStatements = [];
    node.statements.forEach((statement) => {
      if (ts.isImportDeclaration(statement)) {
        const importInfo = formatAllNodesImportDeclaration(
          node,
          statement,
          url,
          currReferencesModule,
          allIdentifierSet
        );
        if (importInfo.statement) {
          newStatements.push(statement);
        } else if (importInfo.isCopyrightDeleted) {
          copyrightMessage = importInfo.copyrightMessage;
          isCopyrightDeleted = importInfo.isCopyrightDeleted;
        }
      } else if (ts.isStructDeclaration(statement)) {
        statement = ts.factory.updateStructDeclaration(
          statement,
          statement.modifiers,
          statement.name,
          statement.typeParameters,
          statement.heritageClauses,
          statement.members.slice(1)
        );
        newStatements.push(statement);
      } else {
        newStatements.push(statement);
      }
    });
    currReferencesModule.forEach((item) => {
      if (item.isUsed) {
        referencesMessage += item.reference + '\n';
      }
    });
    node = ts.factory.updateSourceFile(node, newStatements);
  }
  return { node, referencesMessage, copyrightMessage, isCopyrightDeleted };
}

function hasCopyright(node) {
  return /http\:\/\/www\.apache\.org\/licenses\/LICENSE\-2\.0/g.test(node.getFullText().replace(node.getText(), ''));
}


/**
 * 处理Import节点 去除未使用、不存在、References中没有对应模块的导入
 * @param {ts.node} node 当前节点
 * @param {ts.ImportDeclaration} statement 导入节点
 * @param {string} url 文件路径
 * @param {string} url 文件路径
 * @param {Set} allIdentifierSet 该文件的所有Identifier关键字
 * @returns {{statement:ts.ImportDeclaration,copyrightMessage:string,isCopyrightDeleted:boolean}} statement 处理完成的导入节点、copyrightMessage
 */
function formatAllNodesImportDeclaration(node, statement, url, currReferencesModule, allIdentifierSet) {
  // 是import节点 import { AsyncCallback } from './@ohos.base';
  const clauseSet = new Set([]);
  if (statement.importClause && ts.isImportClause(statement.importClause)) {
    // 标识符
    const clauseNode = statement.importClause;
    if (!clauseNode.namedBindings && clauseNode.name && ts.isIdentifier(clauseNode.name)) {
      // 没有大括号的标识符
      clauseSet.add(clauseNode.name.escapedText.toString());
    } else if (
      clauseNode.namedBindings &&
      clauseNode.namedBindings.name &&
      ts.isIdentifier(clauseNode.namedBindings.name)
    ) {
      // 没有标识符 *号
      clauseSet.add(clauseNode.namedBindings.name.escapedText.toString());
    } else if (clauseNode.namedBindings && clauseNode.namedBindings.elements) {
      // 有花括号的标识符
      clauseNode.namedBindings.elements.forEach((ele) => {
        if (ele.name && ts.isIdentifier(ele.name)) {
          clauseSet.add(ele.name.escapedText.toString());
        }
      });
    }
  }
  const importSpecifier = statement.moduleSpecifier.getText().replace(/[\'\"]/g, '');
  const fileDir = path.dirname(url);
  let hasImportSpecifierFile = hasFileByImportPath(importSpecifier, fileDir);
  let hasImportSpecifierInModules = globalModules.has(importSpecifier);
  if ((hasImportSpecifierFile || hasImportSpecifierInModules) && clauseSet.size > 0) {
    let currModule = [];
    if (hasImportSpecifierInModules) {
      let index = globalModules.get(importSpecifier);
      currModule = currReferencesModule[index].modules[importSpecifier];
    }
    const clasueCheckList = [];
    let exsitClauseSet = new Set([]);
    for (const clause of clauseSet) {
      let flag = allIdentifierSet.has(clause);
      if (hasImportSpecifierInModules) {
        flag = allIdentifierSet.has(clause) && currModule.includes(clause);
      }
      if (flag) {
        // 标识符使用到了当前import中的引用
        exsitClauseSet.add(clause);
        clasueCheckList.push('exist');
      } else {
        clasueCheckList.push('non-exist');
      }
    }
    let hasExsitStatus = false;
    let hasNonExsitStatus = false;
    clasueCheckList.forEach((ele) => {
      if (ele === 'exist') {
        hasExsitStatus = true;
      } else {
        hasNonExsitStatus = true;
      }
    });
    if (hasExsitStatus) {
      // 有使用到的标识符
      if (hasNonExsitStatus) {
        // 有没有使用到的标识符
        const newSpecifiers = [];
        statement.importClause.namedBindings.elements.forEach((element) => {
          if (exsitClauseSet.has(element.name.escapedText.toString())) {
            newSpecifiers.push(element);
          }
        });
        statement.importClause.namedBindings = ts.factory.updateNamedImports(
          statement.importClause.namedBindings,
          newSpecifiers
        );
      }
      if (hasImportSpecifierInModules) {
        let index = globalModules.get(importSpecifier);
        currReferencesModule[index].isUsed = true;
      }
      return { statement };
    } else if (hasCopyright(statement)) {
      return { copyrightMessage: node.getFullText().replace(node.getText(), ''), isCopyrightDeleted: true };
    }
  } else if (hasCopyright(statement)) {
    return { copyrightMessage: node.getFullText().replace(node.getText(), ''), isCopyrightDeleted: true };
  }
  return { statement: undefined, copyrightMessage: '', isCopyrightDeleted: false };
}

/**
 * 
 * 防止@file和@kit段注释丢失
 * @param {string} fileFullText 
 * @returns {string}
 * 
 */
function getFileAndKitComment(fileFullText) {
  let fileAndKitComment = '';
  let pattern = /\/\*\*\s*\*\s*@file[\s\S]*?@kit[\s\S]*?\*\//;
  let comment = fileFullText.match(pattern);
  if (comment) {
    fileAndKitComment = comment[0];
  }
  return fileAndKitComment;
}

/**
 * 处理最终结果中的noninterop
 * @param {string} result 
 */
function removeNonInteropDoc(result) {
  result.split;
  return result.replace(/\/\*\*[\s\S]*?\*\//g, (substring, p1) => {
    return /@noninterop/g.test(substring) ? '' : substring;
  });
}

/**
 * 每个文件处理前回调函数第一个
 * @callback deleteSystemApi
 * @param {string} url 文件路径
 * @returns {Function}
 */
function deleteSystemApi(url) {
  return (context) => {
    return (node) => {
      const fullText = String(node.getFullText());
      //获取文件头部的注释信息--这里可能会涉及到@file和@kit段注释丢失
      let fileAndKitComment = getFileAndKitComment(fullText);
      const copyrightMessage = fullText.replace(node.getText(), '').split(/\/\*\*/)[0] + fileAndKitComment + '\n';
      let kitName = '';
      if (fullText.match(/\@kit (.*)\r?\n/g)) {
        kitName = RegExp.$1.replace(/\s/g, '');
      }
      sourceFile = node;
      const deleteNode = processSourceFile(node, kitName, url); // 处理最外层节点
      node = processVisitEachChild(context, deleteNode.node);
      if (!isEmptyFile(node)) {
        const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
        const result = printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
        const fileName = processFileName(url);
        ts.transpileModule(result, {
          compilerOptions: {
            target: ts.ScriptTarget.ES2017,
          },
          fileName: fileName,
          transformers: { before: [formatImportDeclaration(url, copyrightMessage, deleteNode.isCopyrightDeleted)] },
        });
      }
      return ts.factory.createSourceFile([], ts.SyntaxKind.EndOfFileToken, ts.NodeFlags.None);
    };
  };
}

exports.deleteSystemApi = deleteSystemApi;

/**
 * 遍历每个文件下的所有节点，然后删除节点
 * @param node
 * @returns
 */

/**
 * 处理最外层的节点看是否删除
 * @param node 解析过后的节点
 * @param kitName 当前文件kitName
 * @returns
 */
function processSourceFile(node, kitName, url) {
  let isCopyrightDeleted = false;
  const newStatements = [];
  const newStatementsWithoutExport = [];
  const deleteSystemApiSet = new Set();
  let needDeleteExport = {
    fileName: '',
    default: '',
    exportName: new Set(),
  };
  isCopyrightDeleted = addNewStatements(node, newStatements, deleteSystemApiSet, needDeleteExport);
  newStatements.forEach((statement) => {
    const names = getExportIdentifierName(statement);
    if (ts.isExportDeclaration(statement) && statement.moduleSpecifier && statement.moduleSpecifier.text.startsWith('./arkui/component/')) {
      const importPath = statement.moduleSpecifier.text.replace('./arkui/component/', '');
      const isDeleteSystemFile = componentEtsDeleteFiles.includes(getPureName(importPath));
      const hasEtsFile = componentEtsFiles.includes(getPureName(importPath));
      const existFile = isExistImportFile(path.dirname(url), statement.moduleSpecifier.text.toString());
      if (isDeleteSystemFile || !hasEtsFile && !existFile) {
        return;
      }
    }
    if (names.length === 0) {
      newStatementsWithoutExport.push(statement);
      return;
    }
    if (names.length === 1 && !deleteSystemApiSet.has(names[0])) {
      //exports.name = test;
      //export default test1
      //export {test1}
      newStatementsWithoutExport.push(statement);
      return;
    }
    processExportNode(statement, node, needDeleteExport, names, deleteSystemApiSet, newStatementsWithoutExport);
  });
  if (needDeleteExport.fileName !== '') {
    kitFileNeedDeleteMap.set(needDeleteExport.fileName, needDeleteExport);
  }
  return {
    node: ts.factory.updateSourceFile(node, newStatementsWithoutExport, node.isDeclarationFile, node.referencedFiles),
    isCopyrightDeleted,
  };
}

function processExportNode(statement, node, needDeleteExport, names, deleteSystemApiSet, newStatementsWithoutExport) {
  //删除export节点信息
  if (ts.isExportAssignment(statement)) {
    //export default abilityAccessCtrl;
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    needDeleteExport.default = statement.expression.escapedText.toString();
  } else if (ts.isExportDeclaration(statement)) {
    //export {test1 as test,testa as test2}
    let needExport = false;
    const newSpecifiers = [];
    names.forEach((name, index) => {
      const exportSpecifier = statement.exportClause.elements[index];
      if (!deleteSystemApiSet.has(name)) {
        //未被删除的节点
        newSpecifiers.push(exportSpecifier);
        needExport = true;
      } else {
        //被删除的节点
        needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
        needDeleteExport.exportName.add(exportSpecifier.name.escapedText.toString());
      }
    });
    if (needExport) {
      statement.exportClause = ts.factory.updateNamedExports(statement.exportClause, newSpecifiers);
      newStatementsWithoutExport.push(statement);
    }
  }
}

function addNewStatements(node, newStatements, deleteSystemApiSet, needDeleteExport) {
  let isCopyrightDeleted = false;
  node.statements.forEach((statement, index) => {
    if (!isNonInterop(statement)) {
      newStatements.push(statement);
      return;
    }
    if (index === 0) {
      isCopyrightDeleted = true;
    }
    if (ts.isVariableStatement(statement)) {
      deleteSystemApiSet.add(variableStatementGetEscapedText(statement));
    } else if (
      ts.isModuleDeclaration(statement) ||
      ts.isInterfaceDeclaration(statement) ||
      ts.isClassDeclaration(statement) ||
      ts.isEnumDeclaration(statement) ||
      ts.isStructDeclaration(statement) ||
      ts.isTypeAliasDeclaration(statement)
    ) {
      if (statement && statement.name && statement.name.escapedText) {
        deleteSystemApiSet.add(statement.name.escapedText.toString());
      }
      setDeleteExport(statement, node, needDeleteExport, deleteSystemApiSet);
    } else if (ts.isExportAssignment(statement) || ts.isExportDeclaration(statement)) {
      setDeleteExport(statement, node, needDeleteExport, deleteSystemApiSet);
    }
  });

  return isCopyrightDeleted;
}

function setDeleteExport(statement, node, needDeleteExport, deleteSystemApiSet) {
  if (ts.isExportAssignment(statement) && deleteSystemApiSet.has(statement.expression.escapedText.toString())) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    needDeleteExport.default = statement.expression.escapedText.toString();
  } else if (ts.isExportDeclaration(statement)) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    statement.exportClause.elements.forEach((element) => {
      const exportName = element.propertyName ?
        element.propertyName.escapedText.toString() :
        element.name.escapedText.toString();
      if (deleteSystemApiSet.has(exportName)) {
        needDeleteExport.exportName.add(element.name.escapedText.toString());
      }
    });
  }
  //export namespace test {}
  const modifiers = statement.modifiers;
  if (modifiers === undefined) {
    return;
  }
  const exportFlag = modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword);
  const defaultFlag = modifiers.some((modifier) => modifier.kind === ts.SyntaxKind.DefaultKeyword);
  if (exportFlag && defaultFlag) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    needDeleteExport.default = statement.name.escapedText.toString();
  } else if (exportFlag) {
    needDeleteExport.fileName = processFileNameWithoutExt(node.fileName);
    needDeleteExport.exportName.add(statement.name.escapedText.toString());
  }
}

/**
 * 获取export节点的名字，只获取第一个关键词
 * @param {ts.node} statement
 * @returns {Array<string>}
 */
function getExportIdentifierName(statement) {
  const names = [];
  if (ts.isExpressionStatement(statement)) {
    //exports.name = test;
    if (ts.isBinaryExpression(statement.expression)) {
      names.push(statement.expression.right.escapedText.toString());
    }
  } else if (ts.isExportAssignment(statement)) {
    //export default test1
    names.push(statement.expression.escapedText.toString());
  } else if (ts.isExportDeclaration(statement)) {
    //export {test1} 、export {test1 as test} 、export * from './featureability'
    const exportClause = statement.exportClause;
    if (exportClause) {
      const specifiers = exportClause.elements;
      specifiers.forEach((specifier) => {
        if (ts.isExportSpecifier(specifier)) {
          const name = specifier.propertyName ? specifier.propertyName : specifier.name;
          names.push(name.escapedText.toString());
        }
      });
    }
  }
  return names;
}

/**
 * 遍历处理tsnode节点
 * @param  context 解析过后的内容
 * @param  node 解析过后的节点
 * @returns ts.node
 */
function processVisitEachChild(context, node) {
  return ts.visitEachChild(node, processAllNodes, context); // 遍历所有子节点
  function processAllNodes(node) {
    if (ts.isInterfaceDeclaration(node)) {
      node = processInterfaceDeclaration(node);
    } else if (ts.isClassDeclaration(node)) {
      node = processClassDeclaration(node);
    } else if (ts.isModuleDeclaration(node) && node.body && ts.isModuleBlock(node.body)) {
      const newStatements = [];
      node.body.statements.forEach((statement) => {
        if (!isNonInterop(statement)) {
          newStatements.push(statement);
        }
      });
      const newModuleBody = ts.factory.updateModuleBlock(node.body, newStatements);
      node = ts.factory.updateModuleDeclaration(
        node,
        node.modifiers,
        node.name,
        newModuleBody
      );
    } else if (ts.isEnumDeclaration(node)) {
      node = processEnumDeclaration(node);
    } else if (ts.isStructDeclaration(node)) {
      node = processStructDeclaration(node);
    }
    return ts.visitEachChild(node, processAllNodes, context);
  }
}

/**
 * 处理interface子节点 
 */
function processInterfaceDeclaration(node) {
  const newMembers = [];
  node.members.forEach((member) => {
    if (!isNonInterop(member)) {
      newMembers.push(member);
    }
  });
  node = ts.factory.updateInterfaceDeclaration(
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
 * 处理class子节点 
 */
function processClassDeclaration(node) {
  const newMembers = [];
  node.members.forEach((member) => {
    if (!isNonInterop(member)) {
      newMembers.push(member);
    }
  });
  node = ts.factory.updateClassDeclaration(
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
 * 处理enum子节点 
 */
function processEnumDeclaration(node) {
  const newMembers = [];
  node.members.forEach((member) => {
    if (!isNonInterop(member)) {
      newMembers.push(member);
    }
  });
  node = ts.factory.updateEnumDeclaration(
    node,
    node.modifiers,
    node.name,
    newMembers
  );
  return node;
}

/**
 * 处理struct子节点 
 */
function processStructDeclaration(node) {
  const newMembers = [];
  node.members.forEach((member, index) => {
    if (index >= 1 && !isNonInterop(member)) {
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

function variableStatementGetEscapedText(statement) {
  let name = '';
  if (
    statement &&
    statement.declarationList &&
    statement.declarationList.declarations &&
    statement.declarationList.declarations.length > 0 &&
    statement.declarationList.declarations[0].name &&
    statement.declarationList.declarations[0].name.escapedText
  ) {
    name = statement.declarationList.declarations[0].name.escapedText.toString();
  }
  return name;
}

function isNonInterop(node) {
  const notesContent = node.getFullText().replace(node.getText(), '').replace(/[\s]/g, '');
  const notesArr = notesContent.split(/\/\*\*/);
  const notesStr = notesArr[notesArr.length - 1];
  for (const note of notesArr) {
    if (note.length !== 0 && /@noninterop/g.test(note)) {
      return true;
    }
  }
  return false;
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
  const fileName = getPureName(node.fileName.replace('.ts', '').replace('.ets', ''));
  if (isEmpty && componentEtsFiles.includes(fileName)) {
    componentEtsDeleteFiles.push(fileName);
  }
  return isEmpty;
}

let outputPath = '';
let inputDir = '';
start();
