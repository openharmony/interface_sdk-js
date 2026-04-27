/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * 该模块提供最近访问列表插入、移除、查询等常用能力。
 * 
 * > **说明：**
 * >
 * > - 当前只支持文件管理器调用。
 *
 * @syscap SystemCapability.FileManagement.UserFileService
 * @systemapi
 * @StageModelOnly
 * @since 10 dynamiconly
 * @deprecated since 23
 */
declare namespace recent {
  /**
   * 最近访问列表文件信息。
   *
   * @syscap SystemCapability.FileManagement.UserFileService
   * @systemapi
   * @StageModelOnly
   * @since 10 dynamiconly
   * @deprecated since 23
   */
  interface FileInfo {
    /**
     * 文件URI。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly uri: string;

    /**
     * 文件路径。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly srcPath: string;

    /**
     * 文件名。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly fileName: string;

    /**
     * [文件权限信息]{@link @ohos.file.fs:Stat}。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly mode: number;

    /**
     * 文件的大小（单位：字节）。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly size: number;

    /**
     * 文件的修改时间。自1970年1月1日起至目标时间的毫秒数。
     *
     * @syscap SystemCapability.FileManagement.UserFileService
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamiconly
     * @deprecated since 23
     */
    readonly mtime: number;

    /**
     * 文件的创建时间。自1970年1月1日起至目标时间的秒数。
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
   * 查询最近访问列表中文件信息。
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
   * 将uri对应的文件加入最近访问列表。
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @param { string } uri - 公共目录文件类URI。
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
   * 将uri对应的文件从最近访问列表中移除。
   *
   * @permission ohos.permission.FILE_ACCESS_MANAGER
   * @param { string } uri - 公共目录文件类URI。
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
