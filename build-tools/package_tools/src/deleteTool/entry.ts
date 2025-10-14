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

import fs from 'fs';
import path from 'path';
import commander = from'commander';
// @ts-ignore
import { arkts, arktsGlobal } from '../dependence/koala-wrapper/build/lib/es2panda';

function writeStringToFile(content: string, filePath: string, options: fs.WriteFileOptions = { encoding: 'utf8' }) {
  // 确保目录存在
  const dir: string = path.dirname(filePath);
  fs.mkdir(dir, { recursive: true }, (mkdirErr: NodeJS.ErrnoException | null) => {
    if (mkdirErr) {
      console.error(`创建目录失败: ${mkdirErr.message}`);
    } 
    // 写入文件
    fs.writeFile(filePath, content, options, (writeErr: NodeJS.ErrnoException | null) => {
      if (writeErr) {
        console.error(`写入文件失败: ${writeErr.message}`);
      }
      console.log(`文件已成功写入: ${filePath}`);
    });
  });
}

export function deleteEntry(input: string, output: string, isStatic: boolean = false) {
  const currentPath: string = process.env.PATH || '';
  const etspandaPath: string = '../dependence/ets2panda/lib'
  process.env.PATH = `${currentPath}${path.delimiter}${etspandaPath}`;
  process.env.LD_LIBRARY_PATH = etspandaPath;

  const filePath: string = input;
  const ets2pandaCmd = [
    '_',
    '--extension',
    'ets',
    '--arktsconfig',
    'D:/workspace/code/arkts2.0_sdk/bugfix/0805_testPanda/tools/arktsconfig.json'
  ];
  ets2pandaCmd.push('--debug-info');
  ets2pandaCmd.push(filePath);

  const source: string = fs.readFileSync(filePath).toString();
  arktsGlobal.filePath = filePath;
  arktsGlobal.config = arkts.Config.create(ets2pandaCmd).peer;
  arktsGlobal.compilerContext = arkts.Context.createFromString(source);
  arkts.proceedToState(arkts.Es2pandaContextState.ES2PANDA_STATE_PARSED, arktsGlobal.compilerContext.peer);

  const ast = arkts.EtsScript.fromContext();
  // traverseProgram(ast)
  const statements: any[] = ast.statements;

  let content: string = '';

  for (const sta of statements) {
    // console.log(arkts.getJsdocStringFromDeclaration(sta))
    let nodeJSDoc = '';
    const staJSDoc = arkts.getJsdocStringFromDeclaration(sta);
    if (staJSDoc !== 'Empty Jsdoc') {
      nodeJSDoc = staJSDoc + '\n';
    }
    content += nodeJSDoc + sta.dumpSrc();
  }
  const outFilePath = path.join(__dirname, 'output.txt');
  
  writeStringToFile(content, outFilePath);
}

function main() {
  const program = new commander.Command();
  program
    .name('test')
    .version('0.0.1');
  program
    .option('--path <string>', 'path name')
    .action((opts:any) => {
      deleteEntry(opts.path,'')
      console.log(1)
    });
  program.parse(process.argv);
}

main()