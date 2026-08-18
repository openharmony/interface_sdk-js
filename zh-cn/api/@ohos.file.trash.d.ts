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
 * 该模块提供可以查询、还原或彻底删除最近删除（回收站）里的文件/文件夹的能力。当前仅支持本地文件目录。
 * 应用可通过FileAccess的删除操作将文件/文件夹移动到回收站，
 * 具体可参考[@ohos.file.fileAccess]{@link @ohos.file.fileAccess:fileAccess}。
 *
 * > **说明：**
 * >
 * > - 当前只支持FilePicker、文件管理器调用。
 * > - 本模块为系统接口。
 * > - 当前只支持文件管理器调用。
 * > - 本模块接口从API version 23开始废弃。不建议使用以下接口。
 *
 * @syscap SystemCapability.FileManagement.UserFileService
 * @systemapi
 * @StageModelOnly
 * @since 10 dynamiconly
 * @deprecated since 23
 */
declare namespace trash {
  /**
   * 最近删除（回收站）内文件的FileInfo对象。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  interface FileInfo {
    /**
     * 回收站文件/文件夹URI。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly uri: string;

    /**
     * 文件/目录删除前原路径。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly srcPath: string;

    /**
     * 文件/目录文件名。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly fileName: string;

    /**
     * 文件/目录权限信息。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly mode: number;

    /**
     * 文件/目录的大小，单位为Byte。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly size: number;
    
    /**
     * 文件/目录的修改时间。自1970年1月1日起至目标时间的毫秒数。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly mtime: number;

    /**
     * 文件/目录的创建时间。自1970年1月1日起至目标时间的秒数。
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
   * 查询最近删除（回收站）列表中文件/目录信息。
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @returns { Array<FileInfo> } 已获取的文件和目录列表。
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
   * 将uri对应文件/目录恢复到原路径。
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @param { string } uri - 回收站文件/文件夹URI。
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
   * 将uri对应文件/目录从最近删除（回收站）列表中彻底删除。
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @param { string } uri - 回收站文件/文件夹URI。
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
