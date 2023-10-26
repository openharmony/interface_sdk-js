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
import path from 'path';
import fs, { Stats } from 'fs';
import { Workbook, Worksheet } from 'exceljs';
import ts, { LineAndCharacter } from 'typescript';
import { ApiResultSimpleInfo, ApiResultInfo } from '../typedef/checker/result_type';

export class PosOfNode {
  /**
  * 获取行列信息
  * @param { ts.Node } node 
  * @param { ts.Diagnostic } diagnostic 
  */
  static getPosOfNode(node: ts.Node, diagnostic: ts.Diagnostic): string {
    const posOfNode: LineAndCharacter = ts.getLineAndCharacterOfPosition(node.getSourceFile(),
      diagnostic.start as number);
    const location: string = diagnostic.file?.fileName as string +
      `(line: ${posOfNode.line + 1}, col: ${posOfNode.character + 1})`;
    return location;
  }
}
export class CompolerOptions {
  /**
   * tsconfig配置项设置
   */
  static getCompolerOptions(): ts.CompilerOptions {
    const compilerOptions: ts.CompilerOptions = ts.readConfigFile(path.resolve(__dirname, '../../tsconfig.json'),
      ts.sys.readFile).config.compilerOptions;
    Object.assign(compilerOptions, {
      target: 'es2020',
      jsx: 'preserve',
      incremental: undefined,
      declaration: undefined,
      declarationMap: undefined,
      emitDeclarationOnly: undefined,
      outFile: undefined,
      composite: undefined,
      tsBuildInfoFile: undefined,
      noEmit: undefined,
      isolatedModules: true,
      paths: undefined,
      rootDirs: undefined,
      types: undefined,
      out: undefined,
      noLib: undefined,
      noResolve: true,
      noEmitOnError: undefined,
      declarationDir: undefined,
      suppressOutputPathCheck: true,
      allowNonTsExtensions: true
    });
    return compilerOptions;
  }
}

export class GenerateFile {
  /**
   * 将错误信息输出为txt文件
   * @param { ApiResultSimpleInfo[] } resultData 
   * @param { string } outputPath 
   * @param { string } option 
   */
  static writeFile(resultData: ApiResultSimpleInfo[], outputPath: string, option: object): void {
    const STANDARD_INDENT: number = 2;
    fs.writeFile(path.resolve(__dirname, outputPath), JSON.stringify(resultData, null, STANDARD_INDENT), option, (err) => {
      if (err) {
        console.error(`ERROR FOR CREATE FILE:${err}`);
      } else {
        console.log('API CHECK FINISH!');
      }
    });
  }

  /**
   * 将错误信息输出为excel文件
   * @param { ApiResultInfo[] } apiCheckArr 
   */
  static async writeExcelFile(apiCheckArr: ApiResultInfo[]): Promise<void> {
    const workbook: Workbook = new Workbook();
    const sheet: Worksheet = workbook.addWorksheet('Js Api', { views: [{ xSplit: 1 }] });
    sheet.getRow(1).values = ['order', 'errorType', 'fileName', 'apiName', 'apiContent', 'type', 'errorInfo', 'version', 'model'];
    for (let i = 1; i <= apiCheckArr.length; i++) {
      const apiData: ApiResultInfo = apiCheckArr[i - 1];
      sheet.getRow(i + 1).values = [i, apiData.getErrorType(), apiData.getLocation(), apiData.getApiName(),
        apiData.getApiFullText(), apiData.getApiType(), apiData.getMessage(), apiData.getVersion(), apiData.getBaseName()];
    }
    workbook.xlsx.writeBuffer().then((buffer) => {
      fs.writeFile(path.resolve(__dirname, '../coreImpl/checker/Js_Api.xlsx'), buffer, function (err) {
        if (err) {
          console.error(err);
          return;
        }
      });
    });
  }
}

export class ObtainFullPath {
  /**
   * 获取仓库中api文件夹下的所有d.ts和d.ets路径
   * @param { string } dir -api路径
   * @param { string[] } utFiles -存放具体路径的数组
   */
  static getFullFiles(dir: string, utFiles: string[]): void {
    try {
      const files: string[] = fs.readdirSync(dir);
      files.forEach((element) => {
        const filePath: string = path.join(dir, element);
        const status: Stats = fs.statSync(filePath);
        if (status.isDirectory()) {
          ObtainFullPath.getFullFiles(filePath, utFiles);
        } else {
          if (/\.d\.ts/.test(filePath) || /\.d\.ets/.test(filePath) || /\.ts/.test(filePath)) {
            utFiles.push(filePath);
          }
        }
      });
    } catch (e) {
      console.error('ETS ERROR: ' + e);
    }
  }
}