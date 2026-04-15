/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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

/**
 * The **file.recent** module provides APIs for managing the list of recently accessed files.
 * 
 * > **NOTE**
 * >
 * > - Currently, the APIs of this module can be called only by **FileManager**.
 *
 * @syscap SystemCapability.FileManagement.UserFileService
 * @systemapi
 * @StageModelOnly
 * @since 10 dynamiconly
 * @deprecated since 23
 */
declare namespace recent {
  /**
   * Represents information about the recent file list.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  interface FileInfo {
    /**
     * File URI.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly uri: string;

    /**
     * File path.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly srcPath: string;

    /**
     * File name.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly fileName: string;

    /**
     * [Permissions on the file]{@link @ohos.file.fs:Stat}.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly mode: number;

    /**
     * File size, in bytes.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly size: number;

    /**
     * Time when the file was last modified.
     * <br>Unit: ms.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly mtime: number;

    /**
     * Time when the file was created.
     * <br>Unit: second.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly ctime: number;
  }

  /**
   * Lists the files that are accessed recently.
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @returns { Array<FileInfo> } Returns the next level FileInfo Object.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  function listFile(): Array<FileInfo>;

  /**
   * Adds the file of the specified URI to the recent file list.
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @param { string } uri - File URI.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  function add(uri: string): void;

  /**
   * Removes the file of the specified URI from the recent file list.
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @param { string } uri - File URI.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  function remove(uri: string): void;
}

export default recent;
