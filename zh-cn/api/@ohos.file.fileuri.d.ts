/*
 * Copyright (C) 2022-2025 Huawei Device Co., Ltd.
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

/**
 * @file 文件URI
 * @kit CoreFileKit
 */

import uri from './@ohos.uri';

/**
 * 提供文件URI相关接口。
 *
 * @namespace fileUri
 * @syscap SystemCapability.FileManagement.AppFileService
 * @since 9
 */

/**
 * 提供文件URI相关接口，可用于URI与应用沙箱路径之间的转换。
 *
 * @namespace fileUri
 * @syscap SystemCapability.FileManagement.AppFileService
 * @atomicservice
 * @since 15 dynamic
 * @since 23 static
 */
declare namespace fileUri {
  /**
   * FileUri表示文件的URI，继承自uri.URI。
   *
   * @extends uri.URI
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 10
   */
  /**
   * FileUri表示文件的URI，继承自uri.URI。
   *
   * @extends uri.URI
   * @syscap SystemCapability.FileManagement.AppFileService
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  class FileUri extends uri.URI {
    /**
     * FileUri的构造函数，用于创建FileUri实例。
     *
     * @param { string } uriOrPath - URI或路径。
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 10
     */
    /**
     * FileUri的构造函数，用于创建FileUri实例。
     *
     * @param { string } uriOrPath - URI或路径。
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 14300002 - Invalid uri
     * @syscap SystemCapability.FileManagement.AppFileService
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    constructor(uriOrPath: string);

    /**
     * 通过传入的URI获取文件名称。如果文件名中存在百分号编码字符，将解码后拼接在原处。
     *
     * @returns { string }
     * string：返回URI中的文件名称。
     * @readonly
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 10
     */
    /**
     * 通过传入的URI获取文件名称。如果文件名中存在百分号编码字符，将解码后拼接在原处。
     *
     * @returns { string }
     * string：返回URI中的文件名称。
     * @readonly
     * @throws { BusinessError } 13900005 - I/O error
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    get name(): string;

    /**
     * 获取当前文件URI所在路径的完整目录URI。URI指向目录时直接返回原URI。
     *
     * @returns { string } 返回文件所在路径的目录URI；URI指向目录时返回当前URI。
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 11
     */
    /**
     * 获取当前文件URI所在路径的完整目录URI。URI指向目录时直接返回原URI。
     *
     * @returns { string } 返回文件所在路径的目录URI；URI指向目录时返回当前URI。
     * @throws { BusinessError } 13900002 - No such file or directory
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    getFullDirectoryUri(): string;

    /**
     * 判断当前URI是否为包含远端标识networkid的远端URI。
     *
     * @returns { boolean } 返回true表示远端URI，返回false表示本地URI。
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @since 12
     */
    /**
     * 判断当前URI是否为包含远端标识networkid的远端URI。
     *
     * @returns { boolean } 返回true表示远端URI，返回false表示本地URI。
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.AppFileService
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    isRemoteUri(): boolean;

    /**
     * 将当前URI转换为序列化字符串。
     *
     * @returns { string } 返回字符串类型的URI。
     * @syscap SystemCapability.Utils.Lang
     * @stagemodelonly   
     * @since 23 static
     */
    toString(): string;
  }
  
  /**
   * 通过应用沙箱内的文件路径生成URI。路径中的中文及非数字字母的特殊字符会进行百分号编码。
   *
   * @param { string } path 应用沙箱内的文件路径。
   * @returns { string } 返回通过文件路径生成的URI。
   * @throws { BusinessError } 401 - The input parameter is invalidPossible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.AppFileService
   * @since 9
   */
  /**
   * 通过应用沙箱内的文件路径生成URI。路径中的中文及非数字字母的特殊字符会进行百分号编码。
   *
   * @param { string } path 应用沙箱内的文件路径。
   * @returns { string } 返回通过文件路径生成的URI。
   * @throws { BusinessError } 401 - The input parameter is invalidPossible causes:1.Mandatory parameters are left unspecified;
   * <br>2.Incorrect parameter types.
   * @syscap SystemCapability.FileManagement.AppFileService
   * @atomicservice
   * @since 15 dynamic
   * @since 23 static
   */
  function getUriFromPath(path: string): string;
}

export default fileUri;
