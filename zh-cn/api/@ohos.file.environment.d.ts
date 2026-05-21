/*
 * Copyright (C) 2021-2025 Huawei Device Co., Ltd.
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
 * @file
 * @kit CoreFileKit
 */

import type { AsyncCallback } from './@ohos.base';

/**
 * 该模块提供环境目录能力，获取内存存储根目录、公共文件根目录的ArkTS接口。
 *
 * @syscap SystemCapability.FileManagement.File.Environment
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace Environment {
  /**
   * 异步方法获取内存存储根目录，使用promise异步回调。
   *
   * @returns { Promise<string> } 返回存储根目录。
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getStorageDataDir(): Promise<string>;

  /**
   * 异步方法获取内存存储根目录，使用callback异步回调。
   *
   * @param { AsyncCallback<string> } [callback] - 异步获取内存存储根目录之后的回调。
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getStorageDataDir(callback: AsyncCallback<string>): void;

  /**
   * 异步方法获取公共文件根目录，使用promise异步回调。
   *
   * @returns { Promise<string> } 返回公共文件根目录。
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getUserDataDir(): Promise<string>;

  /**
   * 异步方法获取公共文件根目录，使用callback异步回调。
   *
   * @param { AsyncCallback<string> } [callback] - 异步获取公共文件根目录之后的回调。
   * @throws { BusinessError } 202 - The caller is not a system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.File.Environment
   * @systemapi
   * @since 8 dynamic
   * @since 23 static
   */
  function getUserDataDir(callback: AsyncCallback<string>): void;

  /**
   * 获取当前用户预授权下载目录的沙箱路径。
   *
   * @permission ohos.permission.READ_WRITE_DOWNLOAD_DIRECTORY [since 11 - 11]
   * @returns { string } 返回当前用户预授权下载目录的沙箱路径。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   *     [since 11 - 11]
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.File.Environment.FolderObtain
   * @since 11 dynamic
   * @since 23 static
   */
  function getUserDownloadDir(): string;

  /**
   * 获取当前用户预授权桌面目录的沙箱路径。
   *
   * @permission ohos.permission.READ_WRITE_DESKTOP_DIRECTORY [since 11 - 11]
   * @returns { string } 返回当前用户预授权桌面目录的沙箱路径。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   *     [since 11 - 11]
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.File.Environment.FolderObtain
   * @since 11 dynamic
   * @since 23 static
   */
  function getUserDesktopDir(): string;

  /**
   * 获取当前用户预授权文档目录的沙箱路径。
   *
   * @permission ohos.permission.READ_WRITE_DOCUMENTS_DIRECTORY [since 11 - 11]
   * @returns { string } 返回当前用户预授权文档目录的沙箱路径。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   *     [since 11 - 11]
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.File.Environment.FolderObtain
   * @since 11 dynamic
   * @since 23 static
   */
  function getUserDocumentDir(): string;

  /**
   * 获取外卡根目录的沙箱路径，该接口仅对具有该系统能力的设备开放。
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @returns { string } 返回外卡根目录的沙箱路径。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
   *     system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.File.Environment.FolderObtain
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getExternalStorageDir(): string;

  /**
   * 获取当前用户下应用沙箱路径的内卡目录，该接口仅对具有该系统能力的设备开放。
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @returns { string } 返回当前用户下应用沙箱路径的内卡目录。
   * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
   * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses
   *     system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 13900042 - Unknown error.
   * @syscap SystemCapability.FileManagement.File.Environment.FolderObtain
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getUserHomeDir(): string;
}

export default Environment;