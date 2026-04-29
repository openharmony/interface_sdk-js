/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit ArkData
 */

import { AsyncCallback, Callback } from './@ohos.base';
import type relationalStore from './@ohos.data.relationalStore';
import commonType from './@ohos.data.commonType';

/**
 * The **cloudData** module provides APIs for implementing device-cloud synergy and device-cloud sharing, and setting 
 * the device-cloud sync strategy.
 * 
 * Device-cloud synergy enables sync of the structured data (in RDB stores) between devices and the cloud. The cloud 
 * serves as a data hub to implement data backup in the cloud and data consistency between the devices with the same 
 * account.
 * This module also provides the capability of setting the device-cloud sync strategy.
 *
 * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace cloudData {
  /**
   * Enumerates the operations for clearing the downloaded cloud data locally.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  enum ClearAction {
    /**
     * Clear the cloud identifier of the data downloaded from the cloud and retain the data locally.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CLEAR_CLOUD_INFO = 0,

    /**
     * Clear the data downloaded from the cloud, excluding the cloud data that has been modified locally.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CLEAR_CLOUD_DATA_AND_INFO = 1,

    /**
     * Does not clear any data.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 23 dynamic&static
     */
    CLEAR_CLOUD_NONE = 2
  }

  /**
   * ID of the event, which indicates the change of the data in the cloud.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const DATA_CHANGE_EVENT_ID = 'cloud_data_change';

  /**
   * Represents the transparently transmitted data, which contains information required for a data change notification.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface ExtraData {
    /**
     * Event ID. The value **cloud_data_change** indicates cloud data changes.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    eventId: string;

    /**
     * Data to be transmitted transparently. **extraData** is a JSON string that must contain the **data** field. The 
     * **data** field contains information required for a change notification, including the account ID, application 
     * name, database name, database type, and database table name. All the fields cannot be empty.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    extraData: string;
  }

  /**
   * Represents the device-cloud sync statistics.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface StatisticInfo {
    /**
     * Name of the table queried. For example, the value **cloud_notes** indicates that the sync information of the 
     * **cloud_notes** table is queried.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    table: string;

    /**
     * Number of data records that are added locally and have not been synced to the cloud. For example, the value **2**
     * indicates that the table has two data records that are added locally but not synced to the cloud.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    inserted: int;

    /**
     * Number of data records that are modified locally or on the cloud but have not been synced. For example, the value
     * **2** indicates that the table has two data records that are updated locally or on the cloud but not synced.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    updated: int;

    /**
     * Number of consistent data records between the device and the cloud. For example, the value **2** indicates that 
     * table has two data records that are consistent between the device and the cloud.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    normal: int;
  }

  /**
   * Enumerates the device-cloud sync task statuses.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  enum SyncStatus {
    /**
     * The device-cloud sync task is running.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    RUNNING = 0,

    /**
     * The device-cloud sync task is completed.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    FINISHED = 1
  }

  /**
   * Represents information about the last device-cloud sync.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  interface SyncInfo {
    /**
     * Start time of the last device-cloud sync.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    startTime: Date;

    /**
     * End time of the last device-cloud sync.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    finishTime: Date;

    /**
     * Result of the last device-cloud sync.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    code: relationalStore.ProgressCode;

    /**
     * Status of the last device-cloud sync. The default value is **cloudData.SyncStatus.RUNNING**.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    syncStatus?: SyncStatus;
  }

  /**
   * Defines the switch information of a device-cloud synergy database.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DBSwitchInfo {
    /**
     * Whether to enable device-cloud synergy for the database. The value **true** indicates that device-cloud synergy 
     * is enabled, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 23 dynamic&static
     */
    enable: boolean;

    /**
     * Device-cloud synergy configuration of a table. The key is the table name, and the value is the switch status of
     * the table. The value **true** indicates that device-cloud synergy is enabled for the table, and the value
     * **false** indicates the opposite. If this parameter is not set, the device-cloud synergy is enabled for the
     * database by default.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 23 dynamic&static
     */
    tableInfo?: Record<string, boolean>;
  }

  /**
   * Defines the switch configuration of a device-cloud synergy database.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 23 dynamic&static
   */
  interface SwitchConfig {
    /**
      * Switch configuration information of a database. The key is the database name, and the value is the configuration
      * information of the database.
      *
      * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
      * @systemapi
      * @since 23 dynamic&static
      */
     dbInfo: Record<string, DBSwitchInfo>;
  }

  /**
   * Defines the clearance information of a device-cloud synergy database.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 23 dynamic&static
   */
  interface DBActionInfo {
    /**
     * Default data clearance mode of the database.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 23 dynamic&static
     */
    action: ClearAction;

    /**
     * Information about the table whose data is to be cleared and the clearance rules. The key is the table name, and
     * the value is the clearance mode of the table. If this parameter is not set, the data clearance mode of database
     * is used by default.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 23 dynamic&static
     */
    tableInfo?: Record<string, ClearAction>;
  }

  /**
   * Defines the clearance configuration of a device-cloud synergy database.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 23 dynamic&static
   */
  interface ClearConfig {
    /**
      * Information about the database whose data is to be cleared and the clearance rules. The key is the database name
      * , and the value is the clearance configuration of the database.
      *
      * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
      * @systemapi
      * @stagemodelonly
      * @since 23 dynamic&static
      */
     dbInfo: Record<string, DBActionInfo>;
  }

  /**
   * Bundle information configuration.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface BundleInfo {
    /**
     * Indicates the name of the application.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    bundleName: string;

    /**
     * Indicates the store ID.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    storeId?: string;
  }

  /**
   * Provides APIs for setting device-cloud synergy, including enabling and disabling device-cloud synergy, clearing 
   * data, and notifying data changes.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  class Config {
    /**
     * Enables device-cloud synergy. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - ID of the cloud account.
     * @param { object } switches - Device-cloud synergy settings for applications. The value **true** means to enable
     *     device-cloud synergy; the value **false** means the opposite. [since 10 - 10]
     * @param { Record<string, boolean> } switches - Device-cloud synergy settings for applications. The value **true**
     *     means to enable device-cloud synergy; the value **false** means the opposite. [since 11]
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static enableCloud(
      accountId: string,
      switches: Record<string, boolean>,
      callback: AsyncCallback<void>
    ): void;

    /**
      * Enables device-cloud synergy. This API uses a promise to return the result.
      *
      * @permission ohos.permission.CLOUDDATA_CONFIG
      * @param { string } accountId - ID of the cloud account.
      * @param { object } switches - Device-cloud synergy settings for applications. The value **true** means to enable
      *     device-cloud synergy; the value **false** means the opposite. [since 10 - 10]
      * @param { Record<string, boolean> } switches - Device-cloud synergy settings for applications. The value **true**
      *     means to enable device-cloud synergy; the value **false** means the opposite. [since 11]
      * @returns { Promise<void> } Promise that returns no value.
      * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by
      *     VerifyAccessToken.
      * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
      *     uses system API.
      * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
      *     2. Incorrect parameter types;
      *     3. Parameter verification failed.
      * @throws { BusinessError } 801 - Capability not supported.
      * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
      * @systemapi
      * @since 10 dynamic
      * @since 23 static
      */
     static enableCloud(accountId: string, switches: Record<string, boolean>): Promise<void>;

    /**
     * Disables device-cloud synergy. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - ID of the cloud account.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static disableCloud(accountId: string, callback: AsyncCallback<void>): void;

    /**
     * Disables device-cloud synergy. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - ID of the cloud account.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static disableCloud(accountId: string): Promise<void>;

    /**
     * Changes the device-cloud synergy setting for an application. This API uses an asynchronous callback to return the
     * result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - ID of the cloud account.
     * @param { string } bundleName - Bundle name of the application.
     * @param { boolean } status - New device-cloud synergy setting. The value **true** means to enable device-cloud
     *     synergy; the value **false** means the opposite.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static changeAppCloudSwitch(
      accountId: string,
      bundleName: string,
      status: boolean,
      callback: AsyncCallback<void>
    ): void;

    /**
     * Changes the device-cloud synergy setting for an application. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - ID of the cloud account.
     * @param { string } bundleName - Bundle name of the application.
     * @param { boolean } status - New device-cloud synergy setting. The value **true** means to enable device-cloud
     *     synergy; the value **false** means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static changeAppCloudSwitch(accountId: string, bundleName: string, status: boolean): Promise<void>;

    /**
     * Changes the device-cloud synergy setting for an application. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - ID of the cloud account.
     * @param { string } bundleName - Bundle name of the application.
     * @param { boolean } status - New device-cloud synergy setting. The value **true** means to enable device-cloud
     *     synergy; the value **false** means the opposite.
     * @param { SwitchConfig } [config] - Switch configuration of a device-cloud synergy database. Device-cloud synergy
     *     priority: application > database > table. If this parameter is not set, the application-level device-cloud
     *     synergy is used by default.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    static changeAppCloudSwitch(
      accountId: string,
      bundleName: string,
      status: boolean,
      config?: SwitchConfig
    ): Promise<void>;

    /**
     * Notifies the data changes in the cloud. This API uses a promise to return the result. You can specify the 
     * database and tables with data changes in the **extraData** field in **extInfo**, and specify the user ID.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { ExtraData } extInfo - Transparently transmitted data, including information about the application that
     *     has data changes.
     * @param { int } [userId] - User ID. This parameter is optional. The default value is the current user ID. If this
     *     parameter is specified, the value must be an existing user ID in the system.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed, which
     *     is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    static notifyDataChange(extInfo: ExtraData, userId?: int): Promise<void>;

    /**
     * Notifies the data changes in the cloud with the specified information, such as the database and table names (
     * specified by the **extraData** field in **extInfo**). This API uses an asynchronous callback to return the 
     * result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { ExtraData } extInfo - Transparently transmitted data, including information about the application that
     *     has data changes.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission verification failed, which
     *     is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    static notifyDataChange(extInfo: ExtraData, callback: AsyncCallback<void>): void;

    /**
     * Notifies the data changes of a user in the cloud. This API uses an asynchronous callback to return the result. 
     * You can also specify the database and tables with data changes in the **extraData** field in **extInfo**, and 
     * specify the user ID.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { ExtraData } extInfo - Transparently transmitted data, including information about the application that
     *     has data changes.
     * @param { int } userId - User ID in the system.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission verification failed, which
     *     is usually returned by <b>VerifyAccessToken</b>.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    static notifyDataChange(extInfo: ExtraData, userId: int, callback: AsyncCallback<void>): void;

    /**
     * Notifies the data changes in the cloud. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - ID of the cloud account.
     * @param { string } bundleName - Bundle name of the application.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static notifyDataChange(accountId: string, bundleName: string): Promise<void>;

    /**
     * Notifies the data changes in the cloud. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - ID of the cloud account.
     * @param { string } bundleName - Bundle name of the application.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static notifyDataChange(accountId: string, bundleName: string, callback: AsyncCallback<void>): void;

    /**
     * Queries device-cloud data statistics, which include the data not synced, data synced and consistent, and data 
     * synced but inconsistent between the device and the cloud. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - ID of the cloud account.
     * @param { string } bundleName - Bundle name of the application.
     * @param { string } [storeId] - Name of the RDB store. If this parameter is not specified, all local databases of
     *     this application are queried by default.
     * @returns { Promise<Record<string, Array<StatisticInfo>>> } Promise used to return the table name and statistics.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    static queryStatistics(
        accountId: string,
        bundleName: string,
        storeId?: string
    ): Promise<Record<string, Array<StatisticInfo>>>;

    /**
     * Queries information about the last device-cloud sync. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - ID of the cloud account.
     * @param { string } bundleName - Bundle name of the application.
     * @param { string } [storeId] - Name of the RDB store. The default value is an empty string. If the default value
     *     is used, this API queries the last device-cloud sync information of all databases of this application.
     * @returns { Promise<Record<string, SyncInfo>> } Promise used to return the database name and the result set of the
     *     last device-cloud sync.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    static queryLastSyncInfo(
        accountId: string,
        bundleName: string,
        storeId?: string
    ): Promise<Record<string, SyncInfo>>;

    /**
     * Queries the last synchronization information in batch
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - Indicates the account ID.
     *     The account ID is required by hashing cloud account.
     * @param { Array<BundleInfo> } bundleInfos - BundleInfo configuration array.
     * @returns { Promise<Record<string, Record<string, SyncInfo>>> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed,
     *     usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported
     *     because the device does not support the device-cloud capability.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. the accountId is empty;
     *     2. the bundlename is null; 3. the number of bundleInfos exceeds the upper limit or the number is 0.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static queryLastSyncInfo(
        accountId: string,
        bundleInfos: Array<BundleInfo>
    ): Promise<Record<string, Record<string, SyncInfo>>>;

    /**
     * Subscribes to changes in the sync information of a specified application.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { Array<BundleInfo> } bundleInfos - BundleInfo configuration array.
     * @param { Callback<Record<string, Record<string, SyncInfo>>> } progress - progress.
     * @throws { BusinessError } 201 - Permission verification failed,
     *     usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported
     *     because the device does not support the device-cloud capability.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. bundlename is null;
     *     <br>2. the number of bundleInfos exceeds the upper limit or the number is 0.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static onSyncInfoChanged(
        bundleInfos: Array<BundleInfo>,
        progress: Callback<Record<string, Record<string, SyncInfo>>>
    ): void;

    /**
     * Remove specified observer of specified type from the database.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { Array<BundleInfo> } bundleInfos - BundleInfo configuration array.
     * @param { Callback<Record<string, Record<string, SyncInfo>>> } [progress] - Optional progress callback.
     * @throws { BusinessError } 201 - Permission verification failed,
     *     usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported
     *     because the device does not support the device-cloud capability.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. bundlename is null;
     *     <br>2. the number of bundleInfos exceeds the upper limit or the number is 0.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static offSyncInfoChanged(
        bundleInfos: Array<BundleInfo>,
        progress?: Callback<Record<string, Record<string, SyncInfo>>>
    ): void;

    /**
     * Clears the cloud data locally. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - ID of the cloud account.
     * @param { Record<string, ClearAction> } appActions - Information about the application whose data is to be cleared and the operation to
     *     perform. [since 10 - 10]
     * @param { Record<string, ClearAction> } appActions - Information about the application whose data is to be cleared
     *     and the operation to perform. [since 11]
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    static clear(
      accountId: string,
      appActions: Record<string, ClearAction>,
      callback: AsyncCallback<void>
    ): void;

    /**
      * Clears the cloud data locally. This API uses a promise to return the result.
      *
      * @permission ohos.permission.CLOUDDATA_CONFIG
      * @param { string } accountId - ID of the cloud account.
      * @param { object } appActions - Information about the application whose data is to be cleared and the operation
      *     to perform. [since 10 - 10]
      * @param { Record<string, ClearAction> } appActions - Information about the application whose data is to be
      *     cleared and the operation to perform. [since 11]
      * @returns { Promise<void> } Promise that returns no value.
      * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by
      *     VerifyAccessToken.
      * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
      *     uses system API.
      * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
      *     2. Incorrect parameter types;
      *     3. Parameter verification failed.
      * @throws { BusinessError } 801 - Capability not supported.
      * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
      * @systemapi
      * @since 10 dynamic
      * @since 23 static
      */
     static clear(accountId: string, appActions: Record<string, ClearAction>): Promise<void>;

    /**
     * Clears the cloud data locally. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } accountId - ID of the cloud account.
     * @param { Record<string, ClearAction> } appActions - Information about the application whose data is to be cleared
     *     and the operation to perform.
     * @param { Record<string, ClearConfig> } [config] - Clearance information of a device-cloud synergy database. The
     *     key is the application name, and the value is the database clearance rules of the application. Clearance
     *     priority: table > database > application. If this parameter is not set, the application-level data clearance
     *     mode is used by default.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    static clear(
      accountId: string,
      appActions: Record<string, ClearAction>,
      config?: Record<string, ClearConfig>
    ): Promise<void>;

    /**
     * Sets a global device-cloud sync strategy. This API uses a promise to return the result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { StrategyType } strategy - Type of the strategy to set.
     * @param { Array<commonType.ValueType> } param - Strategy parameters to set. If this parameter is not specified,
     *     the strategy configuration is deleted by default.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    static setGlobalCloudStrategy(strategy: StrategyType, param?: Array<commonType.ValueType>): Promise<void>;

    /**
     * Synchronizes data of a specified application on the device to the cloud. This API uses a promise to return the 
     * result.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { string } bundleName - Name of the application to sync.
     * @param { string } storeId - Name of the database to sync.
     * @param { relationalStore.SyncMode } mode - Device-cloud sync mode.
     * @param { Callback<relationalStore.ProgressDetails> } progress - Callback used to return the sync progress.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed,
     *     <br>usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     <br>application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Empty conditions;
     *     <br>2. Missing GROUP BY clause.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    static cloudSync(
      bundleName: string,
      storeId: string,
      mode: relationalStore.SyncMode,
      progress: Callback<relationalStore.ProgressDetails>
    ): Promise<void>;

    /**
     * Sync data to cloud.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { BundleInfo } bundleInfo -  BundleInfo configuration.
     *     <br>the instance object of {@link BundleInfo}
     * @param { relationalStore.CloudSyncConfig } config -  Indicates cloud sync configuration.
     *     <br>the instance object of {@link relationalStore.CloudSyncConfig}
     * @param { Callback<relationalStore.ProgressDetails> } progress - the specified sync condition by
     *     <br>the instance object of {@link ProgressDetails}.
     * @returns { Promise<void> } : The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed,
     *     <br>usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application is not a system application.
     * @throws { BusinessError } 801 - Capability not supported
     *     because the device does not support the device-cloud capability.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Empty conditions.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static cloudSync(
        bundleInfo: BundleInfo,
        config: relationalStore.CloudSyncConfig,
        progress: Callback<relationalStore.ProgressDetails>
    ): Promise<void>;

    /**
     * Stops syncing data to the cloud.
     *
     * @permission ohos.permission.CLOUDDATA_CONFIG
     * @param { Array<BundleInfo> } bundleInfos - BundleInfo configuration array.
     * @returns { Promise<void> } : The promise returned by the function.
     * @throws { BusinessError } 201 - Permission verification failed,
     *     <br>usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system
     *     application uses system API.
     * @throws { BusinessError } 801 - Capability not supported
     *     because the device does not support the device-cloud capability.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. bundlename is null;
     *     <br>2. the number of bundleInfos exceeds the upper limit or the number is 0.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Config
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static stopCloudSync(bundleInfos: Array<BundleInfo>): Promise<void>;
  }

  /**
   * Enumerates the types of the cloud-device sync strategy.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @since 12 dynamic
   * @since 23 static
   */
  enum StrategyType {

    /**
     * Sync over the network.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 12 dynamic
     * @since 23 static
     */
    NETWORK
  }

  /**
   * Enumerates the network sync options.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @since 12 dynamic
   * @since 23 static
   */
  enum NetWorkStrategy {

    /**
     * Sync over Wi-Fi.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 12 dynamic
     * @since 23 static
     */
    WIFI = 1,

    /**
     * Sync over the cellular network.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 12 dynamic
     * @since 23 static
     */
    CELLULAR = 2,
  }

  /**
   * Sets cloud strategy.
   *
   * @param { StrategyType } strategy - Indicates the strategy type of the cloud sync.
   * @param { Array<commonType.ValueType> } param - Indicates specific strategy of the cloud sync.
   * @returns { Promise<void> } Promise used to return the result.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @since 12 dynamic
   * @since 23 static
   */
  function setCloudStrategy(strategy: StrategyType, param?: Array<commonType.ValueType>): Promise<void>;

  /**
   * Provides APIs for device-cloud data sharing, including sharing or unsharing data, exiting a share, changing the 
   * privilege on the shared data, querying participants, confirming an invitation, changing the invitation confirmation
   * state, and querying the shared resource.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export namespace sharing {
    /**
     * Enumerates the roles of the participants in a device-cloud share.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    enum Role {
      /**
       * Inviter, the one who shares data. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      ROLE_INVITER = 0,

      /**
       * Invitee, the one who can use the shared data. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      ROLE_INVITEE = 1,
    }

    /**
     * Enumerates the device-cloud sharing states.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    enum State {
      /**
       * Unknown state. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      STATE_UNKNOWN = 0,

      /**
       * The device-cloud sharing invitation is accepted. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      STATE_ACCEPTED = 1,

      /**
       * The device-cloud sharing invitation is rejected. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      STATE_REJECTED = 2,

      /**
       * The device-cloud sharing is suspended temporarily. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      STATE_SUSPENDED = 3,

      /**
       * The device-cloud sharing is unavailable. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 12 dynamic
       * @since 23 static
       */
      STATE_UNAVAILABLE = 4,
    }

    /**
     * Enumerates the error codes for device-cloud sharing.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    enum SharingCode {
      /**
       * Operation successful. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      SUCCESS = 0,

      /**
       * Repeated invitation, which means the participant has been invited. Use the enum name rather than the enum 
       * value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      REPEATED_REQUEST = 1,

      /**
       * The participant is not the inviter of this share. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      NOT_INVITER = 2,

      /**
       * Invalid participant, which means the participant is neither the inviter nor the invitee. Use the enum name 
       * rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      NOT_INVITER_OR_INVITEE = 3,

      /**
       * The number of device-cloud sharing times has reached the limit for the current account. Use the enum name 
       * rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      OVER_QUOTA = 4,

      /**
       * The number of device-cloud sharing participants has reached the limit. Use the enum name rather than the enum 
       * value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      TOO_MANY_PARTICIPANTS = 5,

      /**
       * Invalid parameter. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      INVALID_ARGS = 6,

      /**
       * Network error. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      NETWORK_ERROR = 7,

      /**
       * Cloud is disabled. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      CLOUD_DISABLED = 8,

      /**
       * Server error. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      SERVER_ERROR = 9,

      /**
       * System internal error. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      INNER_ERROR = 10,

      /**
       * Invalid invitation, which means the current invitation has expired or does not exist. Use the enum name rather 
       * than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      INVALID_INVITATION = 11,

      /**
       * The amount of data to be synced at a time has reached the limit. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      RATE_LIMIT = 12,

      /**
       * Customized error. Error codes smaller than **1000** are used to define internal error codes, and error codes 
       * greater than **1000** are used to customize error codes. Use the enum name rather than the enum value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      CUSTOM_ERROR = 1000,
    }

    /**
     * Result interface.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    interface Result<T> {
      /**
       * Error code.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      code: int;

      /**
       * Error code description.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      description?: string;

      /**
       * The result value.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      value?: T;
    }

    /**
     * Defines the privilege (permissions) on the shared data.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    interface Privilege {
      /**
       * Whether the participant can modify the shared data. The value **true** means the participant can modify the 
       * data; the value **false** means the opposite. The default value is **false**.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      writable?: boolean;

      /**
       * Whether the participant can read the shared data. The value **true** means the participant can read the data; 
       * the value **false** means the opposite. The default value is **false**.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      readable?: boolean;

      /**
       * Whether the participant can create data to share. The value **true** means the participant can create data; the
       * value **false** means the opposite. The default value is **false**.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      creatable?: boolean;

      /**
       * Whether the participant can delete the shared data. The value **true** means the participant can delete the 
       * data; the value **false** means the opposite. The default value is **false**.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      deletable?: boolean;

      /**
       * Whether the participant can share the data to others. The value **true** means the participant can share the 
       * data; the value **false** means the opposite. The default value is **false**.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      shareable?: boolean;
    }

    /**
     * Participants in cloud sharing.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    interface Participant {
      /**
       * Identity of participant.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      identity: string;

      /**
       * Role of the participant, which can be inviter or invitee.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      role?: Role;

      /**
       * State of the sharing invitation.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      state?: State;

      /**
       * Permissions for the shared data.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      privilege?: Privilege;

      /**
       * Attach information.
       *
       * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
       * @systemapi
       * @since 11 dynamic
       * @since 23 static
       */
      attachInfo?: string;
    }

    /**
     * Allocates shared resources based on conditions,
     * and shares data with the specified privilege to participants.
     *
     * @param { string } storeId - Indicates relational store name.
     * @param { relationalStore.RdbPredicates } predicates - See {@link relationalStore.RdbPredicates}.
     * @param { Array<Participant> } participants - Participants to share.
     * @param { Array<string> } [columns] - Columns to be shared.
     * @returns { Promise<relationalStore.ResultSet> } - Promise used to return {@link relationalStore.ResultSet}.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function allocResourceAndShare(
      storeId: string,
      predicates: relationalStore.RdbPredicates,
      participants: Array<Participant>,
      columns?: Array<string>
    ): Promise<relationalStore.ResultSet>;

    /**
     * Allocates shared resources based on conditions,
     * and shares data with the specified privilege to participants.
     *
     * @param { string } storeId - Indicates relational store name.
     * @param { relationalStore.RdbPredicates } predicates - See {@link relationalStore.RdbPredicates}.
     * @param { Array<Participant> } participants - Participants to share.
     * @param { AsyncCallback<relationalStore.ResultSet> } callback - Indicates the
     *     callback invoked to return the {@link relationalStore.ResultSet}.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function allocResourceAndShare(
      storeId: string,
      predicates: relationalStore.RdbPredicates,
      participants: Array<Participant>,
      callback: AsyncCallback<relationalStore.ResultSet>
    ): void;

    /**
     * Allocates shared resources based on conditions,
     * and shares data with the specified privilege to participants.
     *
     * @param { string } storeId - Indicates relational store name.
     * @param { relationalStore.RdbPredicates } predicates - See {@link relationalStore.RdbPredicates}.
     * @param { Array<Participant> } participants - Participants to share.
     * @param { Array<string> } columns - Columns to be shared.
     * @param { AsyncCallback<relationalStore.ResultSet> } callback - Indicates the
     *     callback invoked to return the {@link relationalStore.ResultSet}.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function allocResourceAndShare(
      storeId: string,
      predicates: relationalStore.RdbPredicates,
      participants: Array<Participant>,
      columns: Array<string>,
      callback: AsyncCallback<relationalStore.ResultSet>
    ): void;

    /**
     * Shares data with the specified privilege to participants.
     *
     * @param { string } sharingResource - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the participants
     *     involved in the data sharing.
     * @param { AsyncCallback<Result<Array<Result<Participant>>>> } callback - Indicates the
     *     callback invoked to return the result.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function share(
      sharingResource: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Result<Array<Result<Participant>>>>
    ): void;

    /**
     * Shares data with the specified privilege to participants.
     *
     * @param { string } sharingResource - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the participants
     *     involved in the data sharing.
     * @returns { Promise<Result<Array<Result<Participant>>>> } - Promise used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function share(
      sharingResource: string,
      participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    /**
     * UnShares data.
     *
     * @param { string } sharingResource - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the participants
     *     involved.
     * @param { AsyncCallback<Result<Array<Result<Participant>>>> } callback - Indicates the callback invoked
     *     to return the result.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function unshare(
      sharingResource: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Result<Array<Result<Participant>>>>
    ): void;

    /**
     * UnShares data.
     *
     * @param { string } sharingResource - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the participants
     *     involved.
     * @returns { Promise<Result<Array<Result<Participant>>>> } - Promise used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function unshare(
      sharingResource: string,
      participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    /**
     * Exit sharing.
     *
     * @param { string } sharingResource - Indicates the sharing resource.
     * @param { AsyncCallback<Result<void>> } callback - The callback of exit.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function exit(sharingResource: string, callback: AsyncCallback<Result<void>>): void;

    /**
     * Exit sharing.
     *
     * @param { string } sharingResource - Indicates the sharing resource.
     * @returns { Promise<Result<void>> } - The promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function exit(sharingResource: string): Promise<Result<void>>;

    /**
     * Changes the permissions for the shared data.
     *
     * @param { string } sharingResource - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the participants
     *     whose permissions are to be changed.
     * @param { AsyncCallback<Result<Array<Result<Participant>>>> } callback - Indicates the
     *     callback invoked to return the result.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function changePrivilege(
      sharingResource: string,
      participants: Array<Participant>,
      callback: AsyncCallback<Result<Array<Result<Participant>>>>
    ): void;

    /**
     * Changes the permissions for the shared data.
     *
     * @param { string } sharingResource - Indicates the sharing resource.
     * @param { Array<Participant> } participants - Indicates the participants
     *     whose permissions are to be changed.
     * @returns { Promise<Result<Array<Result<Participant>>>> } - Promise used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function changePrivilege(
      sharingResource: string,
      participants: Array<Participant>
    ): Promise<Result<Array<Result<Participant>>>>;

    /**
     * Queries the participants based on the specified shared data.
     *
     * @param { string } sharingResource - Indicates the sharing resource.
     * @param { AsyncCallback<Result<Array<Participant>>> } callback - Indicates the
     *     callback invoked to return the participants obtained.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function queryParticipants(sharingResource: string, callback: AsyncCallback<Result<Array<Participant>>>): void;

    /**
     * Queries the participants based on the specified shared data.
     *
     * @param { string } sharingResource - Indicates the sharing resource.
     * @returns { Promise<Result<Array<Participant>>> } - Promise used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function queryParticipants(sharingResource: string): Promise<Result<Array<Participant>>>;

    /**
     * Queries the participants based on the specified invitation code.
     *
     * @param { string } invitationCode - Indicates the invitation code.
     * @param { AsyncCallback<Result<Array<Participant>>> } callback - Indicates the
     *     callback invoked to return the participants obtained.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function queryParticipantsByInvitation(
      invitationCode: string,
      callback: AsyncCallback<Result<Array<Participant>>>
    ): void;

    /**
     * Queries the participants based on the specified invitation code.
     *
     * @param { string } invitationCode - Indicates the invitation code.
     * @returns { Promise<Result<Array<Participant>>> } - Promise used to return the result.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function queryParticipantsByInvitation(invitationCode: string): Promise<Result<Array<Participant>>>;

    /**
     * Confirms the invitation of cloud sharing.
     *
     * @param { string } invitationCode - Indicates the invitation code.
     * @param { State } state - Indicates the state of invitation.
     * @param { AsyncCallback<Result<string>> } callback - Indicates the callback
     *     invoked to return the sharing resource.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function confirmInvitation(invitationCode: string, state: State, callback: AsyncCallback<Result<string>>): void;

    /**
     * Confirms the invitation of cloud sharing.
     *
     * @param { string } invitationCode - Indicates the invitation code.
     * @param { State } state - Indicates the state of invitation.
     * @returns { Promise<Result<string>> } - Promise used to return the sharing resource.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function confirmInvitation(invitationCode: string, state: State): Promise<Result<string>>;

    /**
     * Changes confirmation of shared record.
     *
     * @param { string } sharingResource - Indicates the sharing resource.
     * @param { State } state - Indicates the state of invitation.
     * @param { AsyncCallback<Result<void>> } callback - Indicates the callback.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function changeConfirmation(sharingResource: string, state: State, callback: AsyncCallback<Result<void>>): void;

    /**
     * Changes confirmation of shared record.
     *
     * @param { string } sharingResource - Indicates the sharing resource.
     * @param { State } state - Indicates the state of invitation.
     * @returns { Promise<Result<void>> } - The promise returned by the function.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types;
     *     3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    function changeConfirmation(sharingResource: string, state: State): Promise<Result<void>>;
  }

  /**
   * Indicates automatic synchronization triggering method for Device-Cloud data.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AutoSyncTriggerMode {
    /**
     * Indicates account login trigger method.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ACCOUNT_LOGIN = 0,

    /**
     * Indicates the synchronization switch trigger mode.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CLOUD_SWITCH_ON = 1,

    /**
     * Indicates the trigger mode for network reconnection after recovery.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NETWORK_RECOVER = 2,

    /**
     * Indicates the cloud-side data change trigger mode.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CLOUD_DATA_CHANGE = 3,

    /**
     * Indicates the user change trigger method.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    USER_CHANGE = 4
  }

  /**
   * Describes information about the automatic synchronization trigger mode.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AutoSyncTriggerInfo {
    /**
     * Describes the automatic synchronization triggering mode.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    mode: AutoSyncTriggerMode;
  }

  /**
   * Describes the triggering method for automatic device-cloud synchronization subscription.
   *
   * @param { Callback<AutoSyncTriggerInfo> } observer - Callback for automatic synchronization trigger interception.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onAutoSyncTrigger(observer: Callback<AutoSyncTriggerInfo>): void;

  /**
   * Describes unsubscribing from the device-cloud automatic synchronization trigger mode.
   *
   * @param { Callback<AutoSyncTriggerInfo> } [observer] - Callback for automatic synchronization trigger interception.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offAutoSyncTrigger(observer?: Callback<AutoSyncTriggerInfo>): void;
}

export default cloudData;
