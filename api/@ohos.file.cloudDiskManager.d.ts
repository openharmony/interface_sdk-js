/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * Provides cloud disk manager APIs.
 *
 * @namespace cloudDiskManager
 * @syscap SystemCapability.FileManagement.CloudDiskManager
 * @systemapi
 * @since 21
 */
declare namespace cloudDiskManager {
  /**
   * Enumerates the syncFolder state of the cloud disk.
   *
   * @enum {number}
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21
   */
  enum SyncFolderState {
    /**
     * Indicates the inactive syncFolder state.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21
     */
    INACTIVE = 0,

    /**
     * Indicates the active syncFolder state.
     *
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21
     */
    ACTIVE = 1
  }

  /**
   * Defines the syncFolder of the cloudDisk
   *
   * @typedef SyncFolder
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21
   */
  interface SyncFolder {
    /**
     * The path of the syncFolder.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21
     */
    path: string;

    /**
     * The bundleName of the syncFolder.
     *
     * @type { string }
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21
     */
    bundleName: string;

    /**
     * The state of the syncFolder.
     *
     * @type { SyncFolderState }
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21
     */
    state: SyncFolderState;

    /**
     * The displayNameResId of the syncFolder.
     *
     * @type { ?number }
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21
     */
    displayNameResId?: number;

    /**
     * The alias of the syncFolder supports user customization.
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21
     */
    customAlias?: string;
  }

  /**
   * Provides the capability to access all cloud disk syncFolders.
   *
   * @syscap SystemCapability.FileManagement.CloudDiskManager
   * @systemapi
   * @since 21
   */
  class SyncFolderAccessor {
    /**
     * A constructor used to create a SyncFolderAccessor object.
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @throws { BusinessError } 201 - Permission verification failed,
     * @throws { BusinessError } 202 - Permission verification failed.
     *    application which is not a system application uses system API.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21
     */
    constructor();

    /**
     * Get all syncFolders for all bundles.
     *
     * @permission ohos.permission.ACCESS_CLOUD_DISK_INFO
     * @returns { Promise<Array<SyncFolder>> } Returns the syncFolder list for all bundles.
     * @throws { BusinessError } 201 - Permission verification failed.
     * @throws { BusinessError } 202 - Permission verification failed,
     *    application which is not a system application uses system API.
     * @throws { BusinessError } 34400003 - IPC communication failed.
     * @throws { BusinessError } 34400015 - Internal error.
     * @throws { BusinessError } 34400016 - Cloud disk not support.
     * @syscap SystemCapability.FileManagement.CloudDiskManager
     * @systemapi
     * @since 21
     */
    getAllSyncFolders(): Promise<Array<SyncFolder>>;
  }
}

export default cloudDiskManager;
