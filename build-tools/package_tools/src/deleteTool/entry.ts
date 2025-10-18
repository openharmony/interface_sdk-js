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
// @ts-ignore
const { arkts, arktsGlobal } = require('../dependence/koala-wrapper/build/lib/es2panda');

function writeStringToFile(content, filePath, options = { encoding: 'utf8' }) {
  // 确保目录存在
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  // 写入文件
  fs.writeFile(filePath, content, options, (writeErr) => {
    if (writeErr) {
      console.error(`写入文件失败: ${writeErr.message}`);
    }
    console.log(`文件已成功写入: ${filePath}`);
  });
}

function deleteEntry(input, output) {
  const currentPath = process.env.PATH || '';
  const etspandaPath = '../dependence/ets2panda/lib'
  process.env.PATH = `${currentPath}${path.delimiter}${etspandaPath}`;
  process.env.LD_LIBRARY_PATH = etspandaPath;

  const filePath = input;
  const ets2pandaCmd = [
    '_',
    '--extension',
    'ets',
    '--arktsconfig',
    '../dependence/arktsconfig.json'
  ];
  ets2pandaCmd.push('--debug-info');
  ets2pandaCmd.push(filePath);

  const source = fs.readFileSync(filePath).toString();
  arktsGlobal.filePath = filePath;
  arktsGlobal.config = arkts.Config.create(ets2pandaCmd).peer;
  arktsGlobal.compilerContext = arkts.Context.createFromString(source);
  arkts.proceedToState(arkts.Es2pandaContextState.ES2PANDA_STATE_PARSED, arktsGlobal.compilerContext.peer);

  const ast = arkts.EtsScript.fromContext();
  const statements = ast.statements;

  let content = '';

  for (const sta of statements) {
    let nodeJSDoc = '';
    const staJSDoc = arkts.getJsdocStringFromDeclaration(sta);
    if (staJSDoc !== 'Empty Jsdoc') {
      nodeJSDoc = staJSDoc + '\n';
    }
    content += nodeJSDoc + sta.dumpSrc();
  }

  const outFilePath = path.join(path.resolve(output), path.basename(filePath));

  writeStringToFile(content, outFilePath);
}

function main() {
  const program = new commander.Command();
  program
    .name('delete')
    .version('0.0.1');
  program
    .option('--input <string>', 'path name')
    .option('--output <string>', 'path name')
    .action((opts) => {
      deleteEntry(opts.input, opts.output)
    });
  program.parse(process.argv);
}

main()