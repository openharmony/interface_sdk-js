/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
import ts from 'typescript';

import { type BasicApiInfo } from './typedef';
import { NodeProcessorHelper } from './coreImpl';

export function parse(inputFilePath: string, outputFilePath: string): void {
  const fileContent: string = fs.readFileSync(inputFilePath, 'utf-8').toString();
  const sourceFile: ts.SourceFile = ts.createSourceFile('', fileContent, ts.ScriptTarget.ES2017, true);
  const parseResult: BasicApiInfo[] = [];
  sourceFile.forEachChild((cNode: ts.Node) => {
    const apiInfos: BasicApiInfo[] = NodeProcessorHelper.processNode(cNode, sourceFile);
    parseResult.push(...apiInfos);
  });
  const indentSpaces: number = 2;
  const jsonText: string = JSON.stringify(parseResult, null, indentSpaces);
  fs.writeFileSync(outputFilePath, jsonText, 'utf-8');
}