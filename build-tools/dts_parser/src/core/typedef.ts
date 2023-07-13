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

import type ts from 'typescript';

export class JsDocInfo {
  syscap: string = ''; // api的系统能力
  since: number = -1; // api的起始版本
  isForm: boolean = false; // api是否支持卡片应用
  isCrossPlatForm: boolean = false; // api是否支持跨平台
  isSystemApi: boolean = false; // api是否是系统api
  isStageModelOnly: boolean = false; // api是否仅Stage模型可用
  isFaModelOnly: boolean = false; // api是否仅FA模型可用
  deprecatedVersion: number = -1; // api的废弃版本
  useinstead: string = ''; // api的替换接口
  permission: string = '';
  errorCodes: number[] = [];
  typeInfo: string = '';
  isConstant: boolean = false;

  constructor() { }

  setSyscap(syscap?: string): void {
    if (!syscap) {
      return;
    }
    this.syscap = syscap;
  }

  getSyscap(): string {
    return this.syscap;
  }

  setSince(since: number): void {
    this.since = since;
  }

  getSince(): number {
    return this.since;
  }

  setIsForm(): void {
    this.isForm = true;
  }

  getIsForm(): boolean {
    return this.isForm;
  }

  setIsCrossPlatForm(): void {
    this.isCrossPlatForm = true;
  }

  getIsCrossPlatForm(): boolean {
    return this.isCrossPlatForm;
  }

  setIsSystemApi(): void {
    this.isSystemApi = true;
  }

  getIsSystemApi(): boolean {
    return this.isSystemApi;
  }

  setIsStageModelOnly(): void {
    this.isStageModelOnly = true;
  }

  getIsStageModelOnly(): boolean {
    return this.isStageModelOnly;
  }

  setIsFaModelOnly(): void {
    this.isFaModelOnly = true;
  }

  getIsFaModelOnly(): boolean {
    return this.isFaModelOnly;
  }

  setDeprecatedVersion(deprecatedVersion: number): void {
    this.deprecatedVersion = deprecatedVersion;
  }

  getDeprecatedVersion(): number {
    return this.deprecatedVersion;
  }

  setUseinstead(useinstead: string): void {
    this.useinstead = useinstead;
  }

  getUseinstead(): string {
    return this.useinstead;
  }

  setPermission(permission: string): void {
    this.permission = permission;
  }

  getPermission(): string {
    return this.permission;
  }

  addErrorCode(errorCode: number): void {
    this.errorCodes.push(errorCode);
  }

  getErrorCode(): number[] {
    return this.errorCodes;
  }

  setTypeInfo(typeInfo: string): void {
    this.typeInfo = typeInfo;
  }

  getTypeInfo(): string {
    return this.typeInfo;
  }

  setIsConstant(): void {
    this.isConstant = true;
  }

  getIsConstant(): boolean {
    return this.isConstant;
  }

}


export class BasicApiInfo {
  apiType: string = ''; // api 类型
  constructor(apiType: string) {
    this.apiType = apiType;
  }
}

export class ApiInfo extends BasicApiInfo {
  name: string = ''; // api的名称
  syscap: string = ''; // api的系统能力
  since: number = -1; // api的起始版本
  isForm: boolean = false; // api是否支持卡片应用
  isCrossPlatForm: boolean = false; // api是否支持跨平台
  isSystemApi: boolean = false; // api是否是系统api
  isStageModelOnly: boolean = false; // api是否仅Stage模型可用
  isFaModelOnly: boolean = false; // api是否仅FA模型可用
  deprecatedVersion: number = -1; // api的废弃版本
  useinstead: string = ''; // api的替换接口

  constructor(apiType: string, jsDocInfo: JsDocInfo) {
    super(apiType);
    this.setJsDocInfo(jsDocInfo);
  }

  setJsDocInfo(jsDocInfo: JsDocInfo): void {
    this.syscap = jsDocInfo.getSyscap();
    this.since = jsDocInfo.getSince();
    this.isForm = jsDocInfo.getIsForm();
    this.isCrossPlatForm = jsDocInfo.getIsCrossPlatForm();
    this.isSystemApi = jsDocInfo.getIsSystemApi();
    this.isStageModelOnly = jsDocInfo.getIsStageModelOnly();
    this.isFaModelOnly = jsDocInfo.getIsFaModelOnly();
    this.deprecatedVersion = jsDocInfo.getDeprecatedVersion();
    this.useinstead = jsDocInfo.getUseinstead();
  }

  setName(name: string | undefined): void {
    if (!name) {
      return;
    }
    this.name = name;
  }

}

export class DeclareConstInfo extends ApiInfo {
  type: string = '';

  setType(type: string): void {
    this.type = type;
  }
}

export class PropertyInfo extends ApiInfo {
  type: string = '';
  isReadOnly: boolean = false;
  isRequired: boolean = false;
  isStatic: boolean = false;
  permission: string = '';

  constructor(apiType: string, jsDocInfo: JsDocInfo) {
    super(apiType, jsDocInfo);
    this.setPermission(jsDocInfo.getPermission());
  }

  setType(type: string): void {
    this.type = type;
  }

  setIsReadOnly(): void {
    this.isReadOnly = true;
  }

  setIsRequired(isRequired: boolean): void {
    this.isRequired = isRequired;
  }

  setIsStatic(): void {
    this.isStatic = true;
  }

  setPermission(permission: string): void {
    this.permission = permission;
  }
}

export class ConstantInfo extends ApiInfo {
  type: string = '';
  value: string = '';

  setType(type: string): void {
    this.type = type;
  }

  setValue(value: string): void {
    this.value = value;
  }
}

export class UnionTypeInfo extends ApiInfo {
  valueRange: string[] = [];

  addValueRange(value: string): void {
    this.valueRange.push(value);
  }
}

export class EnumValueInfo extends ApiInfo {
  value: string = '';

  setValue(value: string): void {
    this.value = value;
  }
}

export class TypeAliasInfo extends ApiInfo {
  type: string = '';

  setType(type: string): void {
    this.type = type;
  }
}

export class MethodInfo extends ApiInfo {
  callForm: string = '';
  params: ParamInfo[] = [];
  returnValue: string = '';
  isStatic: boolean = false;
  permission: string = '';
  errorCodes: number[] = [];

  constructor(apiType: string, jsDocInfo: JsDocInfo) {
    super(apiType, jsDocInfo);
    this.setPermission(jsDocInfo.getPermission());
    this.setErrorCodes(jsDocInfo.getErrorCode());
  }

  setCallForm(callForm: string): void {
    this.callForm = callForm;
  }

  addParam(paramInfo: ParamInfo): void {
    this.params.push(paramInfo);
  }

  setReturnValue(returnValue: string): void {
    this.returnValue = returnValue;
  }

  setIsStatic(): void {
    this.isStatic = true;
  }

  setPermission(permission: string): void {
    this.permission = permission;
  }

  setErrorCodes(errorCodes: number[]): void {
    this.errorCodes.push(...errorCodes);
  }
}

export class ParamInfo extends ApiInfo {
  type: string = '';
  isRequired: boolean = false;

  setType(type: string | undefined): void {
    if (!type) {
      return;
    }
    this.type = type;
  }

  setIsRequired(isRequired: boolean): void {
    this.isRequired = isRequired;
  }
}

export class NamespaceEnumInfo extends ApiInfo {
  childApis: BasicApiInfo[] = [];

  addChildApi(childApis: BasicApiInfo[]): void {
    this.childApis.push(...childApis);
  }
}

export class ClassInterfaceInfo extends NamespaceEnumInfo {
  parentClasses: string[] = [];

  setParentClasses(parentClasses: string[]): void {
    this.parentClasses.push(...parentClasses);
  }
}

export class ExportDefaultInfo extends BasicApiInfo {
  name: string = '';

  createObject(): ExportDefaultInfo {
    return new ExportDefaultInfo(this.apiType);
  }

  setName(name: string): void {
    this.name = name;
  }
}

export class ImportInfo extends BasicApiInfo {
  importValues: string[] = [];

  addImportValue(value: string | undefined): void {
    if (!value) {
      return;
    }
    this.importValues.push(value);
  }
}

export interface JsDocProcessorInterface {
  (jsDocInfo: JsDocInfo, option?: string): void;
}

export interface ModifierProcessorInterface {
  (propertyInfo: PropertyInfo | MethodInfo): void;
}

export class Options {
  isConstant: boolean = false;
  value: string = '';
  jsDocInfo: JsDocInfo = new JsDocInfo();

  constructor() { }

  setIsConstant(isConstant: boolean): void {
    this.isConstant = isConstant;
  }

  getIsConstant(): boolean {
    return this.isConstant;
  }

  setValue(value: string): void {
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }

  setJsDocInfo(jsDocInfo: JsDocInfo): void {
    this.jsDocInfo = jsDocInfo;
  }

  getJsDocInfo(): JsDocInfo {
    return this.jsDocInfo;
  }
}

export interface NodeProcessorInterface {
  (node: ts.Node, jsDocInfo: JsDocInfo, option?: Options): BasicApiInfo;
}


export enum JsDocTag {
  SYSCAP = 'syscap',
  SINCE = 'since',
  FORM = 'form',
  CROSS_PLAT_FORM = 'crossplatform',
  SYSTEM_API = 'systemapi',
  STAGE_MODEL_ONLY = 'stagemodelonly',
  FA_MODEL_ONLY = 'famodelonly',
  DEPRECATED = 'deprecated',
  USEINSTEAD = 'useinstead',
  TYPE = 'type',
  CONSTANT = 'constant',
  PERMISSION = 'permission',
  THROWS = 'throws',
}

export enum ApiType {
  PROPERTY = 'property',
  CLASS = 'class',
  INTERFACE = 'interface',
  NAMESPACE = 'namespace',
  METHOD = 'method',
  EXPORT_DEFAULT = 'exportDefault',
  CONSTANT = 'constant',
  IMPORT = 'import',
  DECLARE_CONST = 'declareConst',
  UNIONTYPE = 'unionType',
  ENUM_VALUE = 'enumValue',
  TYPE_ALIAS = 'typeAlias',
  PARAM = 'param',
  ENUM = 'enum'
}

export type PropertyNode = ts.PropertyDeclaration | ts.PropertySignature;

export type MethodType = ts.MethodDeclaration | ts.MethodSignature | ts.FunctionDeclaration | ts.CallSignatureDeclaration;

export namespace comment {
  /**
   * 注释信息
   */
  export interface CommentInfo {

    /**
     * 原始注释文本
     */
    text: string;

    /**
     * 是否为多行注释
     */
    isMultiLine: boolean;

    /**
     * true为头注释，false为未注释
     */
    isLeading: boolean;

    /**
     * 注释描述
     */
    description: string;

    /**
     * 注释标签列表
     */
    commentTags: Array<CommentTag>;

    /**
     * 结构化的注释对象
     */
    parsedComment: any;

    /**
     * 注释起始位置
     */
    pos: number;

    /**
     * 注释结束位置
     */
    end: number;

    /**
     * 是否忽略此注释
     */
    ignore: boolean;

    /**
     * 是否是api注释
     */
    isApiComment: boolean,

    /**
     * 是否为特殊日志。例如，为了增加空行而添加的特殊单行日志。
     */
    isInstruct: boolean;
  }

  export interface CommentTag {

    /**
     * 注释标签，例如 @param
     */
    tag: string;

    /**
     * 标签名称, 例如 @param name
     */
    name: string;

    /**
     *  类型, 例如 @param { type } name
     */
    type: string;

    /**
     * 是否可选
     */
    optional: boolean;

    /**
     * 描述
     */
    description: string;

    /**
     * 默认值
     */
    defaultValue?: string;

    /**
     * 原始注释内容
     */
    source: string;

    /**
     * 行号
     */
    lineNumber: number;

    /**
     * tag 的描述可能有多行, 首行包含tag信息，其余包含tag的描述信息。
     */
    tokenSource: Array<comment.CommentSource>;
  }

  export interface CommentSource {

    /**
     * 行号
     */
    number: number;

    /**
     * 原始注释行
     */
    source: string;

    /**
     * 注释被拆分后的对象
     */
    tokens: CommentToken;
  }

  /**
   * 注释被拆分为以下部分:
   * |start|delimiter|postDelimiter|tag|postTag|name|postName|type|postType|description|end\
   */
  export interface CommentToken {

    /**
     * 注释每行起始字符
     */
    start: string;

    /**
     * 注释行开始定界符
     */
    delimiter: string;

    /**
     * 定界符之后的字符
     */
    postDelimiter: string;

    /**
     * 标签
     */
    tag: string;

    /**
     * 标签之后的字符
     */
    postTag: string;

    /**
     * 标签名称
     */
    name: string;

    /**
     * 标签后的字符
     */
    postName: string;

    /**
     * 类型
     */
    type: string;

    /**
     * 类型后的字符
     */
    postType: string;

    /**
     * 描述
     */
    description: string;

    /**
     * 结束字符
     */
    end: string;

    /**
     * 行结束字符
     */
    lineEnd: string;
  }

}