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
const commander = require('commander');
const { collectAllIdentifier1 } = require('./ts_wrapper_node_util');
let filetContent = '';
let nodePositionArr = [];
let inputDir = '';
let outputDir = '';
// 配置常量
const configPath = path.resolve(__dirname, '../dependence/arktsconfig.json');
const CONFIG = {
  ES2PANDA_LIB_PATH: '/build-tools/koala-wrapper/build/lib/es2panda',
  ETS_PANDA_LIB_PATH: '/build-tools/ets2panda/lib',
  ARKTS_CONFIG_PATH: configPath,
  ES_FILE_EXTENSION: 'ets',
  DEBUG_INFO_FLAG: '--debug-info',
};

function isStaticFile(path) {
  return path.endsWith('static.d.ets');
}

/**
 * 主函数：初始化命令行参数解析并执行文件处理任务
 * @returns {void}
 */
function main() {
  const program = new commander.Command();
  program.name('delete').version('0.0.1').description('使用es2panda SDK解析文件并提取源码内容');
  program
    .option('--input <string>', '输入文件目录路径')
    .option('--output <string>', '输出文件目录路径')
    .option('--build_sdk_path <string>', 'SDK构建工具路径')
    .action(opts => {
      outputDir = opts.output;
      process.env.LD_LIBRARY_PATH = opts.build_sdk_path + 'build-tools/ets2panda/lib';
      let inputPath = opts.input.split('/');
      inputPath.pop();
      inputPath = path.resolve(inputPath.join('/'));
      inputDir = inputPath;
      processFilesInDirectory(inputDir, opts.build_sdk_path)
    });
  program.parse(process.argv);
}

function configGlobal(sdkPath) {
  const req = require(sdkPath + CONFIG.ES2PANDA_LIB_PATH);
  arkts = req.arkts;
  arktsGlobal = req.arktsGlobal;
  // 不同节点对应的处理函数映射
}

/**
 * 主入口函数：遍历指定目录下的所有文件并使用SDK工具进行解析处理
 *
 * @param {string} inputDir 输入文件夹路径
 * @param {string} sdkPath SDK依赖路径
 * @throws {Error} 当输入参数无效时抛出异常
 */
function processFilesInDirectory(inputDir, sdkPath) {
  // 输入验证
  if (!inputDir || typeof inputDir !== 'string') {
    throw new Error('输入目录路径不能为空');
  }
  if (!sdkPath || typeof sdkPath !== 'string') {
    throw new Error('SDK路径不能为空');
  }

  try {
    configGlobal(sdkPath);
    const allFiles = [];
    collectAllFiles(inputDir, allFiles); // 读取文件

    if (allFiles.length === 0) {
      console.log(`未在目录 ${inputDir} 中找到任何文件`);
      return;
    }
    let fileNames = new Map();

    const currentPath = process.env.PATH || '';
    const etspandaPath = sdkPath + CONFIG.ETS_PANDA_LIB_PATH;
    process.env.PATH = `${currentPath}${path.delimiter}${etspandaPath}`;
    process.env.LD_LIBRARY_PATH = etspandaPath;

    const ets2pandaCmd = [
      '_',
      '--extension',
      CONFIG.ES_FILE_EXTENSION,
      '--arktsconfig',
      CONFIG.ARKTS_CONFIG_PATH,
      '--simultaneous',
    ];
    ets2pandaCmd.push(CONFIG.DEBUG_INFO_FLAG);
    ets2pandaCmd.push(inputDir);

    // 初始化es2panda
    arktsGlobal.filePath = inputDir;
    arktsGlobal.config = arkts.Config.create(ets2pandaCmd).peer;
    arktsGlobal.compilerContext = arkts.Context.createContextGenerateAbcForExternalSourceFiles(allFiles);
    arkts.proceedToState(arkts.Es2pandaContextState.ES2PANDA_STATE_PARSED, arktsGlobal.compilerContext.peer);
    const contextPtr = arkts.arktsGlobal.compilerContext?.peer ?? peer;

    // 获取当前ets文件路径，设置参数
    let program = arkts.getOrUpdateGlobalContext(contextPtr).program;
    const visited = new Set();
    const queue = [program];
    let index = 0;
    while (queue.length > 0) {
      const currProgram = queue.shift();
      index++
      if (visited.has(currProgram.peer)) {
        continue;
      }
      // 获取根节点，开始遍历
      if (index !== 1) {
        traverseProgram(currProgram.astNode, currProgram.absName);
      }
      visited.add(currProgram.peer);
      for (const externalSource of currProgram.externalSources) {
        visitNextProgramInQueue(queue, visited, externalSource, fileNames);
      }
    }
  } catch (error) {
    console.error('DELETE_SYSTEM_PLUGIN ERROR: ', error);
    throw error;
  }
}

/**
 * 递归收集目录下所有文件路径
 * @param {string} dir 要扫描的目录路径
 * @param {Array<string>} fileArray 用于存储所有文件路径的数组
 * @throws {Error} 当目录不存在或无法访问时抛出异常
 * @returns {void}
 */
function collectAllFiles(dir, fileArray) {
  // 输入验证
  if (!dir || typeof dir !== 'string') {
    throw new Error('目录路径不能为空');
  }
  if (!Array.isArray(fileArray)) {
    throw new Error('文件数组必须为数组类型');
  }

  try {
    const files = fs.readdirSync(dir);
    files.forEach(element => {
      try {
        const filePath = path.join(dir, element);
        const status = fs.statSync(filePath);
        if (status.isDirectory()) {
          collectAllFiles(filePath, fileArray);
        } else {
          fileArray.push(filePath);
        }
      } catch (e) {
        console.warn(`无法访问文件/目录: ${element}`, e.message);
      }
    });
  } catch (e) {
    console.error(`读取目录失败: ${dir}`, e.message);
    throw e;
  }
}

function visitNextProgramInQueue(queue, visited, externalSource, fileNames) {
  const nextProgramArr = externalSource.programs ?? [];
  for (const nextProgram of nextProgramArr) {
    fileNames.set(nextProgram.peer, externalSource.getName());
    if (!visited.has(nextProgram.peer)) {
      queue.push(nextProgram);
    }
  }
}

function traverseProgram(node, filePath) {
  if (!isStaticFile(filePath)) {
    return;
  }
  filetContent = fs.readFileSync(filePath, 'utf-8');
  if (node.statements) {
    node.statements.forEach(statement => {
      collectNodePosition(statement, true)
    })
  }
  if (!/\@systemapi/.test(filetContent)) {
    writeFile(filePath, filetContent)
    return
  }
  processVisitEachChild(node, filePath);
  formatImportDeclaration(node)
  formatExportDeclaration(node)
  nodePositionArr = deduplicateAndSort(nodePositionArr)
  console.log(nodePositionArr)
  nodePositionArr.forEach(item => {
    filetContent = replaceTextByPosition(filetContent, item.startLine, item.startCol, item.endLine, item.endCol)
  })
  writeFile(filePath, filetContent)
  nodePositionArr = []
}

/**
 * 对收集到的位置信息进行去重并排序
 * @param {Array} arr 需要删除的API位置信息
 */
function deduplicateAndSort(arr) {
  // 去重
  const uniqueArr = arr.filter((obj, index, self) =>
    index === self.findIndex((o) => (
      o.startLine === obj.startLine &&
      o.startCol === obj.startCol &&
      o.endLine === obj.endLine &&
      o.endCol === obj.endCol
    ))
  );

  // 排序
  uniqueArr.sort((a, b) => {
    if (a.startLine !== b.startLine) {
      return b.startLine - a.startLine; // 由大到小
    }
    if (a.startCol !== b.startCol) {
      return b.startCol - a.startCol; // 由大到小
    }
    return b.endLine - a.endLine; // 由大到小
  });

  return uniqueArr;
}

/**
 * 递归访问AST节点的每个子节点，根据节点类型进行处理
 * @param {arkts.AstNode} node 当前AST节点
 * @returns {arkts.AstNode} 处理后的AST节点
 */
function processVisitEachChild(node, filePath) {
  return arkts.visitEachChild(node, (child) => processAllNodes(child));
  function processAllNodes(node) {
    let kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, node.peer);
    const statementJSDoc = arkts.getJsdocStringFromDeclaration(node);
    if (arkts.isTSInterfaceDeclaration(node)) {
      node.body.body.forEach(item => {
        collectNodePosition(item, true);
      });
    } else if (arkts.isClassDeclaration(node)) {
      if (node.definition.body) {
        node.definition.body.forEach(item => {
          collectNodePosition(item, true);
        })
      }
    } else if (arkts.isEtsScript(node)) {
      if (node.statements) {
        node.statements.forEach(item => {
          collectNodePosition(item, true);
        })
      }

    } else if (arkts.isTSEnumDeclaration(node)) {
      if (node.members) {
        node.members.forEach(item => {
          collectNodePosition(item, true);
        })
      }
    } else if (arkts.isStructDeclaration(node)) {
      if (node.definition.body) {
        node.definition.body.forEach(item => {
          collectNodePosition(item, true);
        })
      }

    } else if (arkts.isAnnotationDeclaration(node)) {
      if (node.properties) {
        node.properties.forEach(item => {
          collectNodePosition(item, true);
        })
      }

    } else if (arkts.isTSTypeAliasDeclaration(node)) {
      if (node.typeAnnotation && node.typeAnnotation.types) {
        node.typeAnnotation.types.forEach(item => {
          collectNodePosition(item, true);
        })
      }
    } else if (arkts.isFunctionDeclaration(node)) {
      collectNodePosition(node, true);
    } else {
      if (statementJSDoc !== 'Empty Jsdoc' && statementJSDoc !== '') {
        processVisitEachChild(node);
      }
    }
    return node;
  }
}

function collectNodePosition(node, isHasJSDoc) {
  if (!isSystemapi(node)) {
    return;
  }
  let startLinePosition = ''
  if (isHasJSDoc) {
    startLinePosition = findCommentBoundariesAsync(node.startPosition.line() + 1)
    if (nodePositionArr.length !== 0) {
      if (node.parent.startPosition.line() > 1) {
        const result = nodePositionArr.some(item =>
          item.startLine === findCommentBoundariesAsync(node.parent.startPosition.line() + 1) &&
          item.startCol === 1 &&
          item.endLine === node.parent.endPosition.line() + 1 &&
          item.endCol === node.parent.endPosition.col() + 1
        );
        if (result) {
          return;
        }
      }
    }
    nodePositionArr.push({ startLine: startLinePosition, startCol: node.startPosition.col(), endLine: node.endPosition.line() + 1, endCol: node.endPosition.col() + 1 })
  } else {
    nodePositionArr.push({ startLine: node.startPosition.line() + 1, startCol: node.startPosition.col(), endLine: node.endPosition.line() + 1, endCol: node.endPosition.col() + 1 })
  }
}

function findCommentBoundariesAsync(startLine) {
  const lines = filetContent.split(/\r?\n/);
  if (startLine < 1 || startLine > lines.length) {
    throw new Error('Invalid start line number');
  }
  let endLine = -1;
  let startComment = -1;
  for (let i = startLine - 1; i >= 0; i--) {
    const line = lines[i].trim();
    if (endLine === -1 && line === '*/') {
      endLine = i + 1;
      continue;
    }
    if (endLine !== -1 && line === '/**') {
      startComment = i + 1;
      break;
    }
  }
  if (startComment === -1 || endLine === -1) {
    throw new Error('Comment boundaries not found');
  }
  return startComment
}

/**
 * 替换文本中指定位置的内容为 ""
 * @param {string} originalText - 原始文本
 * @param {number} startLine - 起始行号(从1开始)
 * @param {number} startCol - 起始列号(从1开始)
 * @param {number} endLine - 结束行号(从1开始)
 * @param {number} endCol - 结束列号(从1开始)
 * @returns {string} 替换后的文本
 */
function replaceTextByPosition(originalText, startLine, startCol, endLine, endCol) {
  // 将文本按行分割
  const lines = originalText.split('\n');
  // 验证输入的行列号是否有效
  if (startLine < 1 || endLine < 1) {
    throw new Error('Invalid line or column numbers');
  }
  // 处理单行替换的情况
  if (startLine === endLine) {
    const line = lines[startLine - 1];
    const newLine = line.substring(0, startCol - 1) + '' + line.substring(endCol - 1);
    lines[startLine - 1] = newLine;
  } else {
    lines.splice(startLine - 1, (endLine - startLine) + 1);
  }
  // 重新组合文本
  return lines.join('\n');
}

/**
 * 判断节点是否包含@systemapi标签
 * @param {arkts.AstNode} node 要检查的AST节点
 * @returns {boolean} 如果节点包含@systemapi标签则返回true，否则返回false
 */
function isSystemapi(node) {
  const statementJSDoc = arkts.getJsdocStringFromDeclaration(node);
  const notesArr = statementJSDoc.split(/\/\*\*/);
  const notesStr = notesArr[notesArr.length - 1];
  if (notesStr.length !== 0) {
    return /@systemapi/g.test(notesStr);
  }
  return false;
}

function formatImportDeclaration(node) {
  const allIdentifierSet = new Set([]);
  let identifierArr = []
  identifierArr = collectAllIdentifier1(node);
  processVisitEachImportChild(node, identifierArr)
  if (identifierArr.length !== 0) {
    identifierArr.forEach(item => {
      allIdentifierSet.add(item)
    })
  }
  let importItemArr = []
  node.statements.forEach(item => {
    if (arkts.isETSImportDeclaration(item)) {
      item.specifiers.forEach(specifier => {
        if (!allIdentifierSet.has(specifier.local.name)) {
          importItemArr.push(specifier)
        }
      })
      if (importItemArr.length === item.specifiers.length) {
        collectNodePosition(item, false)
      } else if (importItemArr.length !== 0) {
        importItemArr.forEach(importItem => {
          collectNodePosition(importItem, false)
        })
      }
    }
    importItemArr = [];
  })
}

function processVisitEachImportChild(node, arr) {
  return arkts.visitEachChild(node, (child) => processAllNodes(child));
  function processAllNodes(node) {
    const statementJSDoc = arkts.getJsdocStringFromDeclaration(node);
    if (arkts.isTSInterfaceDeclaration(node)) {
      node.body.body.forEach(item => {
        collectIdentifierNode(node);
      });
    } else if (arkts.isClassDeclaration(node)) {
      if (node.definition.body) {
        node.definition.body.forEach(item => {
          collectIdentifierNode(node);
        })
      }
    } else if (arkts.isEtsScript(node)) {
      if (node.statements) {
        node.statements.forEach(item => {
          collectIdentifierNode(node);
        })
      }

    } else if (arkts.isTSEnumDeclaration(node)) {
      if (node.members) {
        node.members.forEach(item => {
          collectIdentifierNode(node);
        })
      }
    } else if (arkts.isStructDeclaration(node)) {
      if (node.definition.body) {
        node.definition.body.forEach(item => {
          collectIdentifierNode(node);
        })
      }

    } else if (arkts.isAnnotationDeclaration(node)) {
      if (node.properties) {
        node.properties.forEach(item => {
          collectIdentifierNode(node);
        })
      }
    } else if (arkts.isTSTypeAliasDeclaration(node)) {
      if (node.typeAnnotation && node.typeAnnotation.types) {
        node.typeAnnotation.types.forEach(item => {
          collectIdentifierNode(node);
        })
      }
    } else if (arkts.isFunctionDeclaration(node)) {
      collectIdentifierNode(node);
    } else {
      if (statementJSDoc !== 'Empty Jsdoc' && statementJSDoc !== '') {
        processVisitEachChild(node);
      }
    }
    return node;
  }
}

function collectIdentifierNode(node) {
  if (!isSystemapi(node)) {
    let newArr = collectAllIdentifier1(node)
    newArr.forEach(item => {
      if (!arr.includes(item)) {
        arr.push(item)
      }
    })
  }
}

/**
 * 获取当前节点类型
 * @param {arkts.AstNode} node 当前AST节点
 * @returns {void} 
 */
function getNodeType(node) {
  let kind = arkts.arktsGlobal.generatedEs2panda._AstNodeTypeConst(arkts.arktsGlobal.context, node.peer);
  return kind
}

function formatExportDeclaration(node) {
  const allIdentifierSet = new Set([]);
  let identifierArr = collectAllIdentifier1(node)
  if (identifierArr.length !== 0) {
    identifierArr.forEach(item => {
      allIdentifierSet.add(item)
    })
  }
  node.statements.forEach(statement => {
    let kind = getNodeType(statement)
    if (kind === arkts.Es2pandaAstNodeType.AST_NODE_TYPE_EXPORT_NAMED_DECLARATION) {
      statement.specifiers.forEach(specifier => {
        if (!allIdentifierSet.has(specifier.local.name)) {
          collectNodePosition(specifier, false)
        }
      })
    }
  })
}

function writeFile(url, data) {
  if (!outputDir) {
    return
  }
  const relativePath = path.relative(inputDir, url);
  const newFilePath = path.resolve(outputDir, relativePath).replace(/\.static\.d\.ets$/, '.d.ets');
  fs.mkdir(path.dirname(newFilePath), { recursive: true }, (err) => {
    if (err) {
      console.log(`ERROR FOR CREATE PATH ${err.message}`);
    } else {
      if (data === '') {
        fs.rmSync(newFilePath, { force: true });
        return;
      }
      fs.writeFileSync(newFilePath, data, (err) => {
        if (err) {
          console.log(`ERROR FOR CREATE FILE ${err}`);
        }
      });
    }
  });
}

main()