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
import ExcelJS from 'exceljs';
import path from 'path';
import fs from 'fs';
import { EnumUtils } from '../utils/EnumUtils';
import { FileUtils } from '../utils/FileUtils';
import { LogUtil } from '../utils/logUtil';
import { FilesMap, Parser } from '../coreImpl/parser/parser';
import { WriterHelper } from './writer';
import { LocalEntry } from '../coreImpl/checker/local_entry';
import { ApiResultSimpleInfo } from '../typedef/checker/result_type';
import { NumberConstant } from '../utils/Constant';
import { ApiStatisticsHelper } from '../coreImpl/statistics/Statistics';
import { ApiStatisticsInfo } from '../typedef/statistics/ApiStatistics';

/**
 * 工具名称的枚举值，用于判断执行哪个工具
 *
 * @enum { string }
 */
export enum toolNameType {
  /**
   * 统计工具
   */
  COOLECT = 'collect',
  /**
   * 检查工具
   */
  CHECK = 'check',
}

/**
 * 工具名称的set集合，通过enum生成
 */
export const toolNameSet: Set<string> = new Set(EnumUtils.enum2arr(toolNameType));

/**
 * 输出文件格式,用于判断输出什么类型的文件
 *
 * @enum { string }
 */
export enum formatType {
  JSON = 'json',
  EXCEL = 'excel',
  CHANGELOG = 'changelog',
}

/**
 * 输出文件格式的set集合，通过enum生成
 */
export const formatSet: Set<string> = new Set(EnumUtils.enum2arr(formatType));

export const Plugin: PluginType = {
  pluginOptions: {
    name: 'parser',
    version: '0.1.0',
    description: 'Compare the parser the SDKS',
    commands: [
      {
        isRequiredOption: true,
        options: [`-N,--tool-name <${[...toolNameSet]}>`, 'tool name ', 'collect'],
      },
      {
        isRequiredOption: false,
        options: ['-C,--collect-path <string>', 'collect api path', './api'],
      },
      {
        isRequiredOption: false,
        options: ['--old <string>', 'diff old sdk path', './api'],
      },
      {
        isRequiredOption: false,
        options: ['--new <string>', 'diff new sdk path', './api'],
      },
      {
        isRequiredOption: false,
        options: ['--old-version <string>', 'old sdk version', '0'],
      },
      {
        isRequiredOption: false,
        options: ['--new-version <string>', 'new sdk version', '0'],
      },
      {
        isRequiredOption: false,
        options: ['--output <string>', 'output file path', './'],
      },
      {
        isRequiredOption: false,
        options: [`--format <${[...formatSet]}>`, 'output file format', 'json'],
      },
      {
        isRequiredOption: false,
        options: ['--changelogUrl <string>', 'changelog url', ''],
      },
    ],
  },

  start: async function (argv: optionObjType) {
    const toolName: toolNameType = argv.toolName;
    const method: toolNameMethodType | undefined = toolNameMethod.get(toolName);
    if (!method) {
      LogUtil.i(
        'CommandArgs',
        `tool-name may use error name or don't have function,tool-name can use 'collect' or 'diff'`
      );
      return;
    }
    const options: optionObjType = {
      toolName: toolName,
      collectPath: argv.collectPath,
      old: argv.old,
      new: argv.new,
      oldVersion: argv.oldVersion,
      newVersion: argv.newVersion,
      output: argv.output,
      format: argv.format,
      changelogUrl: argv.changelogUrl,
    };
    const methodInfos: toolNameValueType = method(options);

    outputInfos(methodInfos.data, options, methodInfos.callback);
  },
  stop: function () {
    LogUtil.i('commander', `elapsed time: ${Date.now() - startTime}`);
  },
};
let startTime = Date.now();

/**
 * 工具获取完数据之后，根据format和其他数据处理输出
 *
 * @param {Array<any>} infos 工具返回的数据
 * @param {optionObjType} options 传入的命令参数
 * @param {(toolNameExcelCallback | undefined)} callback 导出excel的回调
 */
function outputInfos(infos: Array<any>, options: optionObjType, callback: toolNameExcelCallback | undefined): void {
  const format = options.format;
  if (!format) {
    return;
  }
  switch (format) {
    case formatType.JSON:
      WriterHelper.JSONReporter(
        infos[0],
        options.output,
        `${options.toolName}_${options.oldVersion}_${options.newVersion}.json`
      );
      break;
    case formatType.EXCEL:
      WriterHelper.ExcelReporter(infos, options.output, `${options.toolName}.xlsx`, callback);
      break;
    case formatType.CHANGELOG:
      WriterHelper.JSONReporter(infos[0], options.output, `${options.toolName}.json`);
      break;
    default:
      break;
  }
}

/**
 * 收集api工具调用方法
 *
 * @param { optionObjType } options
 * @return { toolNameValueType }
 */
function collectApi(options: optionObjType): toolNameValueType {
  const fileDir: string = path.resolve(FileUtils.getBaseDirName(), options.collectPath);
  let allApis: FilesMap;
  try {
    if (FileUtils.isDirectory(fileDir)) {
      allApis = Parser.parseDir(fileDir);
    } else {
      allApis = Parser.parseFile(path.resolve(fileDir, '..'), fileDir);
    }
    const fileContent: string = Parser.getParseResults(allApis);
    return {
      data: options.format === 'excel' ? ApiStatisticsHelper.getApiStatisticsInfos(allApis) : [fileContent],
      callback: collectApiCallback,
    };
  } catch (exception) {
    const error = exception as Error;
    LogUtil.e(`error collect`, error.stack ? error.stack : error.message);
    return {
      data: [],
      callback: collectApiCallback,
    };
  }
}

function collectApiCallback(apiData: ApiStatisticsInfo[], sheet: ExcelJS.Worksheet): void {
  const apiRelationsSet: Set<string> = new Set();
  sheet.name = 'JsApi';
  sheet.views = [{ xSplit: 1 }];
  sheet.getRow(1).values = [
    '模块名',
    '类名',
    '方法名',
    '函数',
    '类型',
    '起始版本',
    '废弃版本',
    'syscap',
    '是否为系统API',
    '模型限制',
    '权限',
    '是否支持跨平台',
    '装饰器',
    '文件路径',
  ];
  let lineNumber = 2;
  apiData.forEach((apiInfo: ApiStatisticsInfo) => {
    const apiRelations: string = `${apiInfo.getHierarchicalRelations()},${apiInfo.getDefinedText()}`;
    if (apiRelationsSet.has(apiRelations)) {
      return;
    }

    sheet.getRow(lineNumber).values = [
      apiInfo.getPackageName(),
      apiInfo.getParentModuleName(),
      apiInfo.getApiName(),
      apiInfo.getDefinedText(),
      apiInfo.getApiType(),
      apiInfo.getSince(),
      apiInfo.getDeprecatedVersion(),
      apiInfo.getSyscap(),
      apiInfo.getApiLevel(),
      apiInfo.getModelLimitation(),
      apiInfo.getPermission(),
      apiInfo.getIsCrossPlatForm(),
      apiInfo.getDecorators()?.join(),
      apiInfo.getFilePath(),
    ];
    lineNumber++;
    apiRelationsSet.add(apiRelations);
  });
}
/**
 * 收集api工具调用方法
 *
 * @param { optionObjType } options
 * @return { toolNameValueType }
 */
function checkApi(options: optionObjType): toolNameValueType {
  let allApis: FilesMap;
  try {
    let fileContent: ApiResultSimpleInfo[] = [];
    if (process.env.NODE_ENV === 'development') {
      fileContent = LocalEntry.checkEntryLocal();
    } else if (process.env.NODE_ENV === 'production') {
    }
    let finalData: (string | ApiResultSimpleInfo)[] = [];
    if (options.format === formatType.JSON) {
      finalData = [JSON.stringify(fileContent, null, NumberConstant.INDENT_SPACE)];
    } else {
      finalData = fileContent;
    }
    return {
      data: finalData,
    };
  } catch (exception) {
    const error = exception as Error;
    LogUtil.e('error collect', error.stack ? error.stack : error.message);
    return {
      data: [],
    };
  }
}

/**
 * 工具名称对应执行的方法
 */
export const toolNameMethod: Map<string, toolNameMethodType> = new Map([
  [toolNameType.COOLECT, collectApi],
  [toolNameType.CHECK, checkApi],
]);

/**
 * 命令传入参数
 */
export type optionObjType = {
  toolName: toolNameType;
  collectPath: string;
  old: string;
  new: string;
  oldVersion: string;
  newVersion: string;
  output: string;
  format: formatType;
  changelogUrl: string;
};

/**
 * 各个工具当输出为excel时的回调方法
 *
 * @param { data } data 工具获取到的数据
 * @param { ExcelJS.Worksheet } sheet ExcelJS构建的Worksheet对象
 */
export type toolNameExcelCallback = (data: Array<any>, sheet: ExcelJS.Worksheet) => void;

/**
 * 各个工具调用方法返回的格式
 */
export type toolNameValueType = {
  /**
   * 工具返回的数据格式，默认为数组，方便excel输出，如果是字符串，则将字符串传入数组第一个元素
   *
   * @type {any[]}
   */
  data: any[];

  /**
   * 用于excel方法回调，返回数据以及ExcelJS构建的Worksheet对象
   *
   * @type {toolNameExcelCallback}
   */
  callback?: toolNameExcelCallback;
};

/**
 * 各个工具调用方法
 *
 */
export type toolNameMethodType = (options: optionObjType) => toolNameValueType;

export type PluginType = {
  pluginOptions: PluginOptionsType;
  start: (argv: any) => Promise<void>;
  stop: () => void;
};

export type PluginOptionsType = {
  name: string;
  version: string;
  description: string;
  commands: CommandType[];
};

export type CommandType = {
  isRequiredOption: boolean;
  readonly options: [string, string, string];
};
