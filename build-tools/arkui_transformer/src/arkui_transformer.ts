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

import { program } from "commander"
import * as ts from 'typescript';
import * as path from 'path';
import * as fs from 'fs';
import { handleComponentAttribute, convertComponentDeclaration } from "./interface_converter"
import { ComponentFile } from './component_file';
import { exportAllTransformer } from './add_export'

const TARGET_DIR = "../../output/"

function transformer(program: ts.Program, componentFile: ComponentFile): ts.TransformerFactory<ts.SourceFile> {
  return (context) => {
    const visit: ts.Visitor = (node) => {
      if (convertComponentDeclaration(node, componentFile)) {
        return undefined;
      }
      return ts.visitEachChild(node, visit, context);
    };

    return (sourceFile) => ts.visitNode(sourceFile, visit);
  };
}


function getFiles(dir: string, fileFilter: (f: string) => boolean): string[] {
  const result: string[] = []
  const dirents = fs.readdirSync(dir, { withFileTypes: true })
  for (const entry of dirents) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isFile() && fileFilter(fullPath)) {
      result.push(fullPath)
    }
  }
  return result
}

function convertFiles(files: string[]): string[] {
  const result: string[] = []
  for (const file of files) {
    const dest = file.replace(".d.ets", ".d.ts")
    fs.copyFile(file, dest, () => { })
    result.push(dest)
  }
  return result
}

function printResult(source: string, file: ComponentFile) {
  const outPath = path.join(options.targetDir, file.outFileName)
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, source.concat(file.concactSource))
}


function main() {
  const files = getFiles(options.inputDir, f => f.endsWith(".d.ets"))
  const convertedFile = convertFiles(files)
  const program = ts.createProgram(convertedFile, { allowJs: true })
  convertedFile.forEach(f => {
    const sourceFile = program.getSourceFile(f)!;
    const componentFile = new ComponentFile(f, sourceFile)
    const result = ts.transform(sourceFile, [transformer(program, componentFile), exportAllTransformer()]);
    const transformedSource = ts.createPrinter().printFile(result.transformed[0]);
    printResult(transformedSource, componentFile)
  })
}

const options = program
  .option('--input-dir <path>', "Path of where d.ets exist")
  .option('--target-dir <path>', "Path to generate d.ets file")
  .parse()
  .opts()

main()