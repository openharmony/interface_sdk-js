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
 * The **file.trash** module provides APIs for querying, recovering, or permanently deleting the files or directories in
 * Recently deleted (trash). Currently, only local files and directories are supported.
 * You can use **delete()** of [@ohos.file.fileAccess]{@link @ohos.file.fileAccess:fileAccess} to move a file or 
 * directory to the trash.
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
declare namespace trash {
  /**
   * Represents information about a file or directory in the **Recently deleted** list.
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  interface FileInfo {
    /**
     * URI of the file or directory.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly uri: string;

    /**
     * Path of the file or directory before being deleted.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly srcPath: string;

    /**
     * Name of the file or directory.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly fileName: string;

    /**
     * Permission on the file or directory.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly mode: number;

    /**
     * Size of a file or directory, in bytes.
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly size: number;
    
    /**
     * Time when the file or directory was last modified. It is the number of milliseconds elapsed since the Unix epoch 
     * (00:00:00 UTC on January 1, 1970).
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly mtime: number;

    /**
     * Time when the file or directory was created. It is the number of seconds elapsed since the Unix epoch (00:00:00 
     * UTC on January 1, 1970).
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
   * Lists the files and directories in the **Recently deleted** list.
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
   * Recovers a file or directory from the trash.
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @param { string } uri - URI of the file or directory.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  function recover(uri: string): void;

  /**
   * Permanently deletes a file or directory from the **Recently deleted** list.
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @param { string } uri - URI of the file or directory.
   * @throws { BusinessError } 13900002 - No such file or directory
   * @throws { BusinessError } 13900020 - Invalid argument
   * @throws { BusinessError } 13900042 - Unknown error
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  function completelyDelete(uri: string): void;
}

export default trash;
