/*
 * Copyright (c) 2025-2026 Huawei Device Co., Ltd.
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
 * 本模块是为系统文件管理应用提供获取三方网盘注册的同步根信息的能力。
 *
 * @syscap SystemCapability.FileManagement.CloudDiskManager
 * @systemapi
 * @since 21 dynamic
 * @since 23 static
 */
declare namespace cloudDiskManager {
  /**
   * 枚举，云盘的同步根的状态。
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  enum SyncFolderState {
    /**
     * 表示同步根处于未激活状态。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    INACTIVE = 0,

    /**
     * 表示同步根处于激活状态。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ACTIVE = 1
  }

  /**
   * 表示同步根信息。
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  interface SyncFolder {
    /**
     * 同步根对应的URI。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    path: string;

    /**
     * 同步根对应的包名。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 同步根对应的状态信息。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    state: SyncFolderState;

    /**
     * 资源ID，可以映射到文管列表显示的别名。默认值为undefined。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    displayNameResId?: int;

    /**
     * 在文管列表显示的别名。默认值为undefined。
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    customAlias?: string;
  }

  /**
   * 同步根管理类，负责为系统文件管理应用提供获取三方网盘注册的同步根信息的能力。
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  class SyncFolderAccessor {
    /**
     * SyncFolderAccessor的构造函数，用于获取SyncFolderAccessor类的实例。
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @throws { BusinessError } 201 - Permission verification failed,
     * @throws { BusinessError } 202 - Permission verification failed.
     *     application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 获取所有注册的同步根信息。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @returns { Promise<Array<SyncFolder>> } Promise对象。返回所有网盘应用的同步根列表。
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Device not supported.
     * @throws { BusinessError } 34400003 - IPC communication failed.
     * @throws { BusinessError } 34400014 - Temporary failure. Retry is recommended (e.g., network issues).
     * @throws { BusinessError } 34400015 - Cloud disk is not allowed on this device.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    getAllSyncFolders(): Promise<Array<SyncFolder>>;
  }
}

export default cloudDiskManager;