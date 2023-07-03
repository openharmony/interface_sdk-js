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

import type { AsyncCallback } from './@ohos.base';

/**
 * This module provides the capabilities to manage the state and data of cloud file synchronization.
 *
 * @namespace cloudSyncManager
 * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
 * @since 10
 */
declare namespace cloudSyncManager {
  /**
   * Modify switch state of the application's cloud synchronization capability.
   *
   * @param { string } accountId - Current account id
   * @param { string } bundleName - Name of bundle whose switchStatus is changing
   * @param { boolean } status - New switch status
   * @returns { Promise<void> } - Return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10
   */
  function changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean): Promise<void>;

  /**
   * Modify switch state of the application's cloud synchronization capability.
   *
   * @param { string } accountId - Current account id
   * @param { string } bundleName - Name of bundle whose switchStatus is changing
   * @param { boolean } status - New switch status
   * @param { AsyncCallback<void> } [callback] - Callback function
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10
   */
  function changeAppCloudSwitch(
    accountId: string,
    bundleName: string,
    status: boolean,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Notify the change of data in cloud.
   *
   * @param { string } accountId - Current account id
   * @param { string } bundleName - Name of bundle whose switchStatus is changing
   * @returns { Promise<void> } Return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10
   */
  function notifyDataChange(accountId: string, bundleName: string): Promise<void>;

  /**
   * Notify the change of data in cloud.
   *
   * @param { string } accountId - Current account id
   * @param { string } bundleName - Name of bundle whose switchStatus is changing
   * @param { AsyncCallback<void> } [callback] - Callback function
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10
   */
  function notifyDataChange(accountId: string, bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Enable the cloud file synchronization function.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - Current account id.
   * @param { object } switches - Indicates switches information of all applications.
   * @returns { Promise<void> } Return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10
   */
  function enableCloud(accountId: string, switches: { [bundleName: string]: boolean }): Promise<void>;

  /**
   * Enable the cloud file synchronization function.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - Current account id
   * @param { object } switches - Indicates switches information of all applications.
   * @param { AsyncCallback<void> } [callback] - Callback function
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10
   */
  function enableCloud(
    accountId: string,
    switches: { [bundleName: string]: boolean },
    callback: AsyncCallback<void>
  ): void;

  /**
   * Disable the cloud file synchronization function.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - Current account id.
   * @returns { Promise<void> } Return Promise.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10
   */
  function disableCloud(accountId: string): Promise<void>;

  /**
   * Disable the cloud file synchronization function.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - Current account id.
   * @param { AsyncCallback<void> } callback - Callback function
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10
   */
  function disableCloud(accountId: string, callback: AsyncCallback<void>): void;

  /**
   * Describes the clear action type.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @enum { number }
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10
   */
  enum Action {
    /**
     * Indicates clearing cloud identification only, retaining local cached data.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 10
     */
    RETAIN_DATA,

    /**
     * Indicates clearing all cloud-related file data, which synchronized with the cloud.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
     * @systemapi
     * @since 10
     */
    CLEAR_DATA
  }

  /**
   * Clean up cloud-related file data based on specific action.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - Current account id.
   * @param { object } appActions - Indicates information about cloud file need to clear in which way.
   * @returns { Promise<void> } Return Promise.
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10
   */
  function clean(accountId: string, appActions: { [bundleName: string]: Action }): Promise<void>;

  /**
   * Clean up cloud-related file data based on specific action.
   *
   * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
   * @param { string } accountId - Current account id.
   * @param { object } appActions - Indicates information about cloud file need to clear in which way.
   * @param { AsyncCallback<void> } callback - Callback function
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @since 10
   */
  function clean(accountId: string, appActions: { [bundleName: string]: Action }, callback: AsyncCallback<void>): void;
}

export default cloudSyncManager;
