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
 * This module enables the File Manager to obtain the sync root information registered by third-party cloud disks.
 *
 * @syscap SystemCapability.FileManagement.CloudDiskManager
 * @systemapi
 * @since 21 dynamic
 * @since 23 static
 */
declare namespace cloudDiskManager {
  /**
   * Enumerates the states of the sync root.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  enum SyncFolderState {
    /**
     * The sync root is inactive.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    INACTIVE = 0,

    /**
     * The sync root is active.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ACTIVE = 1
  }

  /**
   * Encapsulates the sync root information.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  interface SyncFolder {
    /**
     * URI of the sync root.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    path: string;

    /**
     * Bundle name of the sync root.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * State of the sync root.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    state: SyncFolderState;

    /**
     * Resource ID, which can be mapped to the alias displayed in the File Manager list. The default value is
     * **undefined**.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    displayNameResId?: int;

    /**
     * Custom alias displayed in the File Manager list. The default value is **undefined**.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    customAlias?: string;
  }

  /**
   * A sync root management class that enables the File Manager to access the sync root information registered by third-
   * party cloud disks.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  class SyncFolderAccessor {
    /**
     * A constructor used to create a **SyncFolderAccessor** instance.
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
     * Obtains information about all registered sync roots. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @returns { Promise<Array<SyncFolder>> } Promise that returns the sync root list of all cloud disk applications.
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