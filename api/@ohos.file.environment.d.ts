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
 * The **Environment** module provides ArkTS APIs for obtaining the root directories of the storage and user files.
 *
 * @syscap SystemCapability.FileManagement.File.Environment
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace Environment {
  /**
   * Obtains the root directory of the memory. This API uses a promise to return the result.
   *
   * @returns { Promise<string> } Promise used to return the root directory of the memory.
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
   * Obtains the root directory of the memory. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<string> } [callback] - Callback used to return the root directory of the memory.
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
   * Obtains the root directory of user files. This API uses a promise to return the result.
   *
   * @returns { Promise<string> } Promise used to return the root directory of user files.
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
   * Obtains the root directory of user files. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<string> } [callback] - Callback used to return the root directory of user files.
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
   * Obtains the sandbox path of the pre-authorized **Download** directory.
   *
   * @permission ohos.permission.READ_WRITE_DOWNLOAD_DIRECTORY [since 11 - 11]
   * @returns { string } Sandbox path of the **Download** directory obtained.
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
   * Obtains the sandbox path of the pre-authorized **Desktop** directory.
   *
   * @permission ohos.permission.READ_WRITE_DESKTOP_DIRECTORY [since 11 - 11]
   * @returns { string } Sandbox path of the **Desktop** directory obtained.
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
   * Obtains the sandbox path of the pre-authorized **Document** directory.
   *
   * @permission ohos.permission.READ_WRITE_DOCUMENTS_DIRECTORY [since 11 - 11]
   * @returns { string } Sandbox path of the **Documents** directory obtained.
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
   * Obtains the sandbox path of the root directory of an external storage card. This API is available only to the
   * devices with the SystemCapability.FileManagement.File.Environment.FolderObtain system capability.
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @returns { string } Sandbox path of the root directory obtained.
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
   * Obtains the sandbox path of the built-in card directory of the current user. This API is available only to the
   * devices with the SystemCapability.FileManagement.File.Environment.FolderObtain system capability.
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @returns { string } Sandbox path of the built-in card directory obtained.
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