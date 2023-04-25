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
 * @since 10
 * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
 */
declare namespace cloudSyncManager {
  /**
   * Modify switch state of the application's cloud synchronization capability.
   *
   * @since 10
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @param {string} accountId - Current account id
   * @param {string} bundleName - Name of bundle whose switchStatus is changing
   * @param {boolean} status - New switch status
   * @returns {Promise<void>} - Return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   */
  function changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean): Promise<void>;

  /**
   * Modify switch state of the application's cloud synchronization capability.
   *
   * @since 10
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @param {string} accountId - Current account id
   * @param {string} bundleName - Name of bundle whose switchStatus is changing
   * @param {boolean} status - New switch status
   * @param {AsyncCallback<void>} [callback] - Callback function
   * @returns {void} Return void
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   */
  function changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean, callback: AsyncCallback<void>): void;

  /**
   * Notify the change of data in cloud.
   *
   * @since 10
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @param {string} accountId - Current account id
   * @param {string} bundleName - Name of bundle whose switchStatus is changing
   * @returns {Promise<void>} Return Promise
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   */
  function notifyDataChange(accountId: string, bundleName: string): Promise<void>;

  /**
   * Notify the change of data in cloud.
   *
   * @since 10
   * @syscap SystemCapability.FileManagement.DistributedFileService.CloudSyncManager
   * @systemapi
   * @param {string} accountId - Current account id
   * @param {string} bundleName - Name of bundle whose switchStatus is changing
   * @param {AsyncCallback<void>} [callback] - Callback function
   * @returns {void} Return void
   * @throws { BusinessError } 201 - Permission verification failed.
   * @throws { BusinessError } 202 - The caller is not a system application.
   * @throws { BusinessError } 401 - The input parameter is invalid.
   */
  function notifyDataChange(accountId: string, bundleName: string, callback: AsyncCallback<void>): void;
}

export default cloudSyncManager;