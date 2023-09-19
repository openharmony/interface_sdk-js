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
import path from 'path';
import ts from 'typescript';
import _ from 'lodash';

import { NodeProcessorHelper } from './NodeProcessor';
import { ResultsProcessHelper } from './ResultsProcess';
import { ApiType, BasicApiInfo } from '../../typedef/parser/ApiInfoDefination';
import { StringConstant } from '../../utils/Constant';
import { FileUtils } from '../../utils/FileUtils';
import * as ResultsInfo from '../../typedef/parser/ResultsInfo';

/**
 * 解析d.ts工具类
 */
export class Parser {
  /**
   * 根据传入的文件目录，对目录下的d.ts文件进行解析，
   * 并将其整合到一个map对象中
   *
   * @param { string } fileDir 传入的文件目录
   * @returns { FilesMap } 返回解析后的map对象
   */
  static parseDir(fileDir: string): FilesMap {
    const files: Array<string> = FileUtils.readFilesInDir(fileDir, (name) => {
      return name.endsWith(StringConstant.DTS_EXTENSION) || name.endsWith(StringConstant.DETS_EXTENSION);
    });
    const apiMap: FilesMap = new Map();
    files.forEach((filePath: string) => {
      Parser.parseFile(fileDir, filePath, apiMap);
    });
    return apiMap;
  }

  /**
   * 根据文件名解析api信息
   *
   * @param { string } fileDir 文件的跟路径
   * @param { string } filePath 文件路径名
   * @param {(FilesMap | undefined)} [apiMap=undefined] 返回处理后的存储api信息的map对象
   * @returns { FilesMap } 返回处理后的存储api信息的map对象
   */
  static parseFile(fileDir: string, filePath: string, apiMap: FilesMap | undefined = undefined): FilesMap {
    if (!fs.existsSync(filePath)) {
      return new Map();
    }
    const fileContent: string = fs.readFileSync(filePath, StringConstant.UTF8);
    let relFilePath: string = '';
    relFilePath = path.relative(fileDir, filePath);
    const fileName = path
      .basename(filePath)
      .replace(new RegExp(StringConstant.DTS_EXTENSION, 'g'), StringConstant.TS_EXTENSION)
      .replace(new RegExp(StringConstant.DETS_EXTENSION, 'g'), StringConstant.ETS_EXTENSION);
    const sourceFile: ts.SourceFile = ts.createSourceFile(fileName, fileContent, ts.ScriptTarget.ES2017, true);
    const sourceFileInfo: BasicApiInfo = new BasicApiInfo(ApiType.SOURCE_FILE, sourceFile, undefined);
    sourceFileInfo.setFilePath(relFilePath);
    sourceFileInfo.setApiName(relFilePath);
    sourceFileInfo.setIsStruct(filePath.endsWith(StringConstant.ETS_EXTENSION));
    const currentApiMap: FileInfoMap = new Map();
    currentApiMap.set(StringConstant.SELF, [sourceFileInfo]);
    NodeProcessorHelper.processReference(sourceFile, currentApiMap, sourceFileInfo);
    sourceFile.forEachChild((cNode: ts.Node) => {
      NodeProcessorHelper.processNode(cNode, currentApiMap, sourceFileInfo);
    });
    if (!apiMap) {
      apiMap = new Map();
    }
    apiMap.set(relFilePath, currentApiMap);
    return apiMap;
  }

  /**
   * 根据api节点的层级关系获取解析后的api对象
   *
   * @param { string[] } locations api节点的层级关系
   * @param { FilesMap } apiMap api所在的map对象
   * @returns { BasicApiInfo[] | undefined } 查询结果
   */
  static getApiInfo(locations: string[], apiMap: FilesMap): BasicApiInfo[] {
    const apiInfos: BasicApiInfo[] = [];
    if (locations.length === 0) {
      return apiInfos;
    }
    let currentMap: Map<string, object> = apiMap;
    for (let i = 0; i < locations.length; i++) {
      const key: string = locations[i];
      const tempMap: object | undefined = currentMap.get(key);
      if (!tempMap) {
        return apiInfos;
      }
      currentMap = tempMap as Map<string, object>;
    }
    const currentMapValue: object | undefined = currentMap.get(StringConstant.SELF);
    if (!currentMapValue) {
      return apiInfos;
    }
    apiInfos.push(...(currentMapValue as BasicApiInfo[]));
    return apiInfos;
  }

  /**
   * 该方法主要目的为了后续验证第一步基础解析的结果是否正确
   *
   * @param { FilesMap } apiMap 根据文件解析的map对象
   * @returns { string } 返回解析后的字符串
   */
  static getParseResults(apiMap: FilesMap): string {
    const clonedApiMap: FilesMap = _.cloneDeep(apiMap);
    const apiResults: Map<string, BasicApiInfo[]> = new Map();
    // map的第一层key均为文件路径名
    for (const filePath of clonedApiMap.keys()) {
      const fileMap: FileInfoMap = apiMap.get(filePath) as FileInfoMap;
      const apis: BasicApiInfo[] = ResultsProcessHelper.processFileApiMap(fileMap);
      apiResults.set(filePath, apis);
    }
    return JSON.stringify(Object.fromEntries(apiResults), null, 2);
  }

  static getParseEachSince(apiMap: FilesMap): string {
    const clonedApiMap: FilesMap = _.cloneDeep(apiMap);
    const apiResults: Map<string, Array<ResultsInfo.BasicApiInfo>> = new Map();
    // map的第一层key均为文件路径名
    for (const filePath of clonedApiMap.keys()) {
      const fileMap: FileInfoMap = apiMap.get(filePath) as FileInfoMap;
      const sinceArr: Array<ResultsInfo.BasicApiInfo> = ResultsProcessHelper.processFileApiMapForEachSince(fileMap);
      apiResults.set(filePath, sinceArr);
      return JSON.stringify(sinceArr, null, 2);
    }
    return '';
  }
}

export type BasicApiInfoMap = Map<'_self', BasicApiInfo[]>;

export type ApiInfosMap = Map<string, BasicApiInfoMap | BasicApiInfo[]>;

export type FileInfoMap = Map<string, ApiInfosMap | BasicApiInfo[]>;

export type FilesMap = Map<string, FileInfoMap>;
