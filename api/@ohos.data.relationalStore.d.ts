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

import { AsyncCallback, Callback } from './@ohos.base';
import Context from './application/BaseContext';
import dataSharePredicates from './@ohos.data.dataSharePredicates';

/**
 * Provides methods for rdbStore create and delete.
 *
 * @namespace relationalStore
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 9
 */
/**
 * Provides methods for rdbStore create and delete.
 *
 * @namespace relationalStore
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @crossplatform
 * @since 10
 */
declare namespace relationalStore {
  /**
   * Describes the status of asset
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10
   */
  enum AssetStatus {
    /**
     * ASSET_NORMAL: means the status of asset is normal.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    ASSET_NORMAL,

    /**
     * ASSET_ABNORMAL: means the status of asset is abnormal.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    ASSET_ABNORMAL,

    /**
     * ASSET_DOWNLOADING: means the status of asset is downloading.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    ASSET_DOWNLOADING
  }

  /**
   * Records information of the asset.
   *
   * @interface Asset
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10
   */
  interface Asset {
    /**
     * The name of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    name: string;

    /**
     * The uri of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    uri: string;

    /**
     * The path of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    path: string;

    /**
     * The create time of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    createTime: string;

    /**
     * The modify time of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    modifyTime: string;

    /**
     * The size of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    size: string;

    /**
     * The status of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    status?: AssetStatus;
  }

  type Assets = Asset[];

  /**
   * Indicates possible value types
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  /**
   * Indicates possible value types
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10
   */
  type ValueType = null | number | string | boolean | Uint8Array | Asset | Assets;

  /**
   * Values in buckets are stored in key-value pairs
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  /**
   * Values in buckets are stored in key-value pairs
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10
   */
  type ValuesBucket = { [key: string]: ValueType; };

  /**
   * Manages relational database configurations.
   *
   * @interface StoreConfig
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  /**
   * Manages relational database configurations.
   *
   * @interface StoreConfig
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10
   */
  interface StoreConfig {
    /**
     * The database name.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * The database name.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    name: string;

    /**
     * Specifies the security level of the database.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    securityLevel: SecurityLevel;

    /**
     * Specifies whether the database is encrypted.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    encrypt?: boolean;
  }

  /**
   * Describes the {@code RdbStore} type.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  enum SecurityLevel {
    /**
     * S1: means the db is low level security
     * There are some low impact, when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    S1 = 1,

    /**
     * S2: means the db is middle level security
     * There are some major impact, when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    S2 = 2,

    /**
     * S3: means the db is high level security
     * There are some severity impact, when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    S3 = 3,

    /**
     * S4: means the db is critical level security
     * There are some critical impact, when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    S4 = 4
  }

  /**
   * Indicates the database synchronization mode.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  enum SyncMode {
    /**
     * Indicates the data is pushed to remote device from local device.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    SYNC_MODE_PUSH = 0,

    /**
     * Indicates the data is pulled from remote device to local device.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    SYNC_MODE_PULL = 1,

    /**
     * Indicates the data is pulled from remote device to local device.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10
     */
    SYNC_MODE_TIME_FIRST,

    /**
     * Indicates force push the native data to the cloud.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10
     */
    SYNC_MODE_NATIVE_FIRST,

    /**
     * Indicates the data is pulled from cloud to local device.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10
     */
    SYNC_MODE_CLOUD_FIRST
  }

  /**
   * Describes the subscription type.
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  enum SubscribeType {
    /**
     * Subscription to remote data changes
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    SUBSCRIBE_TYPE_REMOTE = 0,

    /**
     * Subscription to cloud data changes
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10
     */
    SUBSCRIBE_TYPE_CLOUD,

    /**
     * Subscription to cloud data changes details
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10
     */
    SUBSCRIBE_TYPE_CLOUD_DETAILS
  }

  /**
   * Describes the change type.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10
   */
  enum ChangeType {
    /**
     * Means the change type is data change.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    DATA_CHANGE = 0,

    /**
     * Means the change type is asset change.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    ASSET_CHANGE = 1
  }

  /**
   * Indicates the notify info
   *
   * @interface ChangeInfo
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @since 10
   */
  interface ChangeInfo {
    /**
     * Indicates the changed table
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    table: string;

    /**
     * Indicates the changed type
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    type: ChangeType;

    /**
     * Indicates if there is a string primary key, the inserted will keep data's primary keys
     * otherwise it will keep the data's rowid.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    inserted: Array<string> | Array<number>;

    /**
     * Indicates if there is a string primary key, the updated will keep data's primary keys
     * otherwise it will keep the data's rowid.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    updated: Array<string> | Array<number>;

    /**
     * Indicates if there is a string primary key, the deleted will keep data's primary keys
     * otherwise it will keep the data's rowid.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    deleted: Array<string> | Array<number>;
  }

  /**
   * Describes the distribution type of the tables.
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10
   */
  enum DistributedType {
    /**
     * Indicates the table is distributed among the devices
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    DISTRIBUTED_DEVICE = 0,

    /**
     * Indicates the table is distributed between the cloud and the devices.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10
     */
    DISTRIBUTED_CLOUD
  }

  /**
   * Manages the distributed configuration of the table.
   *
   * @interface DistributedConfig
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10
   */
  interface DistributedConfig {
    /**
     * Specifies whether the database auto sync.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    autoSync: boolean;
  }

  /**
   * Describes the conflict resolutions to insert data into the table.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10
   */
  enum ConflictResolution {
    /**
     * Implements no action when conflict occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    ON_CONFLICT_NONE = 0,

    /**
     * Implements rollback operation when conflict occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    ON_CONFLICT_ROLLBACK = 1,

    /**
     * Implements abort operation when conflict occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    ON_CONFLICT_ABORT = 2,

    /**
     * Implements fail operation when conflict occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    ON_CONFLICT_FAIL = 3,

    /**
     * Implements ignore operation when conflict occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    ON_CONFLICT_IGNORE = 4,

    /**
     * Implements replace operation operator when conflict occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    ON_CONFLICT_REPLACE = 5
  }

  /**
   * Manages relational database configurations.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  /**
   * Manages relational database configurations.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10
   */
  class RdbPredicates {
    /**
     * A parameterized constructor used to create a RdbPredicates instance.
     *
     * @param { string } name - Indicates the table name of the database.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * A parameterized constructor used to create a RdbPredicates instance.
     *
     * @param { string } name - Indicates the table name of the database.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    constructor(name: string);

    /**
     * Specifies remote devices which connect to local device when syncing distributed database.
     * When query database, this function should not be called.
     *
     * @param { Array<string> } devices - Indicates specified remote devices.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    inDevices(devices: Array<string>): RdbPredicates;

    /**
     * Specifies all remote devices which connect to local device when syncing distributed database.
     * When query database, this function should not be called.
     *
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    inAllDevices(): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the field whose data type is ValueType and value is equal
     * to a specified value.
     * This method is similar to = of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure the RdbPredicates to match the field whose data type is ValueType and value is equal
     * to a specified value.
     * This method is similar to = of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    equalTo(field: string, value: ValueType): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the field whose data type is ValueType and value is not equal to
     * a specified value.
     * This method is similar to != of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure the RdbPredicates to match the field whose data type is ValueType and value is not equal to
     * a specified value.
     * This method is similar to != of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    notEqualTo(field: string, value: ValueType): RdbPredicates;

    /**
     * Adds a left parenthesis to the RdbPredicates.
     * This method is similar to ( of the SQL statement and needs to be used together with endWrap().
     *
     * @returns { RdbPredicates } - The {@link RdbPredicates} with the left parenthesis.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Adds a left parenthesis to the RdbPredicates.
     * This method is similar to ( of the SQL statement and needs to be used together with endWrap().
     *
     * @returns { RdbPredicates } - The {@link RdbPredicates} with the left parenthesis.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    beginWrap(): RdbPredicates;

    /**
     * Adds a right parenthesis to the RdbPredicates.
     * This method is similar to ) of the SQL statement and needs to be used together with beginWrap().
     *
     * @returns { RdbPredicates } - The {@link RdbPredicates} with the right parenthesis.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Adds a right parenthesis to the RdbPredicates.
     * This method is similar to ) of the SQL statement and needs to be used together with beginWrap().
     *
     * @returns { RdbPredicates } - The {@link RdbPredicates} with the right parenthesis.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    endWrap(): RdbPredicates;

    /**
     * Adds an or condition to the RdbPredicates.
     * This method is similar to or of the SQL statement.
     *
     * @returns { RdbPredicates } - The {@link RdbPredicates} with the or condition.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Adds an or condition to the RdbPredicates.
     * This method is similar to or of the SQL statement.
     *
     * @returns { RdbPredicates } - The {@link RdbPredicates} with the or condition.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    or(): RdbPredicates;

    /**
     * Adds an and condition to the RdbPredicates.
     * This method is similar to and of the SQL statement.
     *
     * @returns { RdbPredicates } - The {@link RdbPredicates} with the and condition.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Adds an and condition to the RdbPredicates.
     * This method is similar to and of the SQL statement.
     *
     * @returns { RdbPredicates } - The {@link RdbPredicates} with the and condition.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    and(): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the field whose data type is string and value
     * contains a specified value.
     * This method is similar to contains of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { string } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure the RdbPredicates to match the field whose data type is string and value
     * contains a specified value.
     * This method is similar to contains of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { string } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    contains(field: string, value: string): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the field whose data type is string and value starts
     * with a specified string.
     * This method is similar to value% of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { string } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure the RdbPredicates to match the field whose data type is string and value starts
     * with a specified string.
     * This method is similar to value% of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { string } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    beginsWith(field: string, value: string): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the field whose data type is string and value
     * ends with a specified string.
     * This method is similar to %value of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { string } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure the RdbPredicates to match the field whose data type is string and value
     * ends with a specified string.
     * This method is similar to %value of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { string } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    endsWith(field: string, value: string): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the fields whose value is null.
     * This method is similar to is null of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure the RdbPredicates to match the fields whose value is null.
     * This method is similar to is null of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    isNull(field: string): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the specified fields whose value is not null.
     * This method is similar to is not null of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure the RdbPredicates to match the specified fields whose value is not null.
     * This method is similar to is not null of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @returns { RdbPredicates } - The {@link RdbPredicates} self.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    isNotNull(field: string): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the fields whose data type is string and value is
     * similar to a specified string.
     * This method is similar to like of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { string } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The {@link RdbPredicates} that match the specified field.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure the RdbPredicates to match the fields whose data type is string and value is
     * similar to a specified string.
     * This method is similar to like of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { string } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The {@link RdbPredicates} that match the specified field.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    like(field: string, value: string): RdbPredicates;

    /**
     * Configure RdbPredicates to match the specified field whose data type is string and the value contains
     * a wildcard.
     * Different from like, the input parameters of this method are case-sensitive.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { string } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure RdbPredicates to match the specified field whose data type is string and the value contains
     * a wildcard.
     * Different from like, the input parameters of this method are case-sensitive.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { string } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    glob(field: string, value: string): RdbPredicates;

    /**
     * Configure RdbPredicates to match the specified field whose value is within a given range.
     *
     * @param { string } field - Indicates the column name.
     * @param { ValueType } low - Indicates the minimum value.
     * @param { ValueType } high - Indicates the maximum value.
     * @returns { RdbPredicates } - The SQL statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure RdbPredicates to match the specified field whose value is within a given range.
     *
     * @param { string } field - Indicates the column name.
     * @param { ValueType } low - Indicates the minimum value.
     * @param { ValueType } high - Indicates the maximum value.
     * @returns { RdbPredicates } - The SQL statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    between(field: string, low: ValueType, high: ValueType): RdbPredicates;

    /**
     * Configure RdbPredicates to match the specified field whose value is out of a given range.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } low - Indicates the minimum value.
     * @param { ValueType } high - Indicates the maximum value.
     * @returns { RdbPredicates } - The SQL statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure RdbPredicates to match the specified field whose value is out of a given range.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } low - Indicates the minimum value.
     * @param { ValueType } high - Indicates the maximum value.
     * @returns { RdbPredicates } - The SQL statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    notBetween(field: string, low: ValueType, high: ValueType): RdbPredicates;

    /**
     * Restricts the value of the field to be greater than the specified value.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Restricts the value of the field to be greater than the specified value.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    greaterThan(field: string, value: ValueType): RdbPredicates;

    /**
     * Restricts the value of the field to be smaller than the specified value.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Restricts the value of the field to be smaller than the specified value.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    lessThan(field: string, value: ValueType): RdbPredicates;

    /**
     * Restricts the value of the field to be greater than or equal to the specified value.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Restricts the value of the field to be greater than or equal to the specified value.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    greaterThanOrEqualTo(field: string, value: ValueType): RdbPredicates;

    /**
     * Restricts the value of the field to be smaller than or equal to the specified value.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Restricts the value of the field to be smaller than or equal to the specified value.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    lessThanOrEqualTo(field: string, value: ValueType): RdbPredicates;

    /**
     * Restricts the ascending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @param { string } field - Indicates the column name for sorting the return list.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Restricts the ascending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @param { string } field - Indicates the column name for sorting the return list.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    orderByAsc(field: string): RdbPredicates;

    /**
     * Restricts the descending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @param { string } field - Indicates the column name for sorting the return list.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Restricts the descending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @param { string } field - Indicates the column name for sorting the return list.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    orderByDesc(field: string): RdbPredicates;

    /**
     * Restricts each row of the query result to be unique.
     *
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Restricts each row of the query result to be unique.
     *
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    distinct(): RdbPredicates;

    /**
     * Restricts the max number of return records.
     *
     * @param { number } value - Indicates the max length of the return list.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Restricts the max number of return records.
     *
     * @param { number } value - Indicates the max length of the return list.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    limitAs(value: number): RdbPredicates;

    /**
     * Configure RdbPredicates to specify the start position of the returned result.
     * Use this method together with limit(number).
     *
     * @param { number } rowOffset - Indicates the start position of the returned result. The value is a positive integer.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure RdbPredicates to specify the start position of the returned result.
     * Use this method together with limit(number).
     *
     * @param { number } rowOffset - Indicates the start position of the returned result. The value is a positive integer.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    offsetAs(rowOffset: number): RdbPredicates;

    /**
     * Configure RdbPredicates to group query results by specified columns.
     *
     * @param { Array<string> } fields - Indicates the specified columns by which query results are grouped.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure RdbPredicates to group query results by specified columns.
     *
     * @param { Array<string> } fields - Indicates the specified columns by which query results are grouped.
     * @returns { RdbPredicates } - The SQL query statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    groupBy(fields: Array<string>): RdbPredicates;

    /**
     * Configure RdbPredicates to specify the index column.
     * Before using this method, you need to create an index column.
     *
     * @param { string } field - Indicates the name of the index column.
     * @returns { RdbPredicates } - The SQL statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure RdbPredicates to specify the index column.
     * Before using this method, you need to create an index column.
     *
     * @param { string } field - Indicates the name of the index column.
     * @returns { RdbPredicates } - The SQL statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    indexedBy(field: string): RdbPredicates;

    /**
     * Configure RdbPredicates to match the specified field whose data type is ValueType array and values
     * are within a given range.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { Array<ValueType> } value - Indicates the values to match with {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure RdbPredicates to match the specified field whose data type is ValueType array and values
     * are within a given range.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { Array<ValueType> } value - Indicates the values to match with {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    in(field: string, value: Array<ValueType>): RdbPredicates;

    /**
     * Configure RdbPredicates to match the specified field whose data type is ValueType array and values
     * are out of a given range.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { Array<ValueType> } value - Indicates the values to match with {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Configure RdbPredicates to match the specified field whose data type is ValueType array and values
     * are out of a given range.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { Array<ValueType> } value - Indicates the values to match with {@link RdbPredicates}.
     * @returns { RdbPredicates } - The SQL statement with the specified {@link RdbPredicates}.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    notIn(field: string, value: Array<ValueType>): RdbPredicates;
  }

  /**
   * Provides methods for accessing a database result set generated by querying the database.
   *
   * @interface ResultSet
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  /**
   * Provides methods for accessing a database result set generated by querying the database.
   *
   * @interface ResultSet
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10
   */
  interface ResultSet {
    /**
     * Obtains the names of all columns in a result set.
     * The column names are returned as a string array, in which the strings are in the same order
     * as the columns in the result set.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Obtains the names of all columns in a result set.
     * The column names are returned as a string array, in which the strings are in the same order
     * as the columns in the result set.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    columnNames: Array<string>;

    /**
     * Obtains the number of columns in the result set.
     * The returned number is equal to the length of the string array returned by the
     * columnNames method.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Obtains the number of columns in the result set.
     * The returned number is equal to the length of the string array returned by the
     * columnNames method.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    columnCount: number;

    /**
     * Obtains the number of rows in the result set.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Obtains the number of rows in the result set.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    rowCount: number;

    /**
     * Obtains the current index of the result set.
     * The result set index starts from 0.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Obtains the current index of the result set.
     * The result set index starts from 0.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    rowIndex: number;

    /**
     * Checks whether the cursor is positioned at the first row.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Checks whether the cursor is positioned at the first row.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    isAtFirstRow: boolean;

    /**
     * Checks whether the cursor is positioned at the last row.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Checks whether the cursor is positioned at the last row.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    isAtLastRow: boolean;

    /**
     * Checks whether the cursor is positioned after the last row.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Checks whether the cursor is positioned after the last row.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    isEnded: boolean;

    /**
     * Checks whether the cursor is positioned before the first row.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Checks whether the cursor is positioned before the first row.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    isStarted: boolean;

    /**
     * Checks whether the current result set is closed.
     * If the result set is closed by calling the close method, true will be returned.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Checks whether the current result set is closed.
     * If the result set is closed by calling the close method, true will be returned.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    isClosed: boolean;

    /**
     * Obtains the column index based on the specified column name.
     * The column name is passed as an input parameter.
     *
     * @param { string } columnName - Indicates the name of the specified column in the result set.
     * @returns { number } The index of the specified column.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Obtains the column index based on the specified column name.
     * The column name is passed as an input parameter.
     *
     * @param { string } columnName - Indicates the name of the specified column in the result set.
     * @returns { number } The index of the specified column.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    getColumnIndex(columnName: string): number;

    /**
     * Obtains the column name based on the specified column index.
     * The column index is passed as an input parameter.
     *
     * @param { number } columnIndex - Indicates the index of the specified column in the result set.
     * @returns { string } The name of the specified column.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Obtains the column name based on the specified column index.
     * The column index is passed as an input parameter.
     *
     * @param { number } columnIndex - Indicates the index of the specified column in the result set.
     * @returns { string } The name of the specified column.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    getColumnName(columnIndex: number): string;

    /**
     * Go to the specified row of the result set forwards or backwards by an offset relative to its current position.
     * A positive offset indicates moving backwards, and a negative offset indicates moving forwards.
     *
     * @param { number } offset - Indicates the offset relative to the current position.
     * @returns { boolean } True if the result set is moved successfully and does not go beyond the range;
     *                   Returns false otherwise.
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Go to the specified row of the result set forwards or backwards by an offset relative to its current position.
     * A positive offset indicates moving backwards, and a negative offset indicates moving forwards.
     *
     * @param { number } offset - Indicates the offset relative to the current position.
     * @returns { boolean } True if the result set is moved successfully and does not go beyond the range;
     *                   Returns false otherwise.
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    goTo(offset: number): boolean;

    /**
     * Go to the specified row of the result set.
     *
     * @param { number } position - Indicates the index of the specified row, which starts from 0.
     * @returns { boolean } True if the result set is moved successfully; Returns false otherwise.
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Go to the specified row of the result set.
     *
     * @param { number } position - Indicates the index of the specified row, which starts from 0.
     * @returns { boolean } True if the result set is moved successfully; Returns false otherwise.
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    goToRow(position: number): boolean;

    /**
     * Go to the first row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully;
     *                    Returns false otherwise, for example, if the result set is empty.
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Go to the first row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully;
     *                    Returns false otherwise, for example, if the result set is empty.
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    goToFirstRow(): boolean;

    /**
     * Go to the last row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully;
     *                    Returns false otherwise, for example, if the result set is empty.
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Go to the last row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully;
     *                    Returns false otherwise, for example, if the result set is empty.
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    goToLastRow(): boolean;

    /**
     * Go to the next row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully;
     *                    Returns false otherwise, for example, if the result set is already in the last row.
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Go to the next row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully;
     *                    Returns false otherwise, for example, if the result set is already in the last row.
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    goToNextRow(): boolean;

    /**
     * Go to the previous row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully;
     *                    Returns false otherwise, for example, if the result set is already in the first row.
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Go to the previous row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully;
     *                    Returns false otherwise, for example, if the result set is already in the first row.
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    goToPreviousRow(): boolean;

    /**
     * Obtains the value of the specified column in the current row as a byte array.
     * The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null or the specified column is not of the Blob type.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { Uint8Array } The value of the specified column as a byte array.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Obtains the value of the specified column in the current row as a byte array.
     * The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null or the specified column is not of the Blob type.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { Uint8Array } The value of the specified column as a byte array.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    getBlob(columnIndex: number): Uint8Array;

    /**
     * Obtains the value of the specified column in the current row as string.
     * The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null or the specified column is not of the string type.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { string } The value of the specified column as a string.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Obtains the value of the specified column in the current row as string.
     * The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null or the specified column is not of the string type.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { string } The value of the specified column as a string.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    getString(columnIndex: number): string;

    /**
     * Obtains the value of the specified column in the current row as long.
     * The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null, the specified column is not of the integer type.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { number } The value of the specified column as a long.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Obtains the value of the specified column in the current row as long.
     * The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null, the specified column is not of the integer type.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { number } The value of the specified column as a long.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    getLong(columnIndex: number): number;

    /**
     * Obtains the value of the specified column in the current row as double.
     * The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null, the specified column is not of the double type.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { number } The value of the specified column as a double.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Obtains the value of the specified column in the current row as double.
     * The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null, the specified column is not of the double type.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { number } The value of the specified column as a double.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    getDouble(columnIndex: number): number;

    /**
     * Obtains the value of the specified column in the current row as an asset.
     * The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null or the specified column is not of the Asset type.
     *
     * @param { number } columnIndex - indicates the specified column index, which starts from 0.
     * @returns { Asset } the value of the specified column as an asset.
     * @throws { BusinessError } 14800013 - the column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - the parameter check failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    getAsset(columnIndex: number): Asset;

    /**
     * Obtains the value of the specified column in the current row as assets.
     * The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null or the specified column is not of the Assets type.
     *
     * @param { number } columnIndex - indicates the specified column index, which starts from 0.
     * @returns { Assets } the value of the specified column as assets.
     * @throws { BusinessError } 14800013 - the column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - the parameter check failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    getAssets(columnIndex: number): Assets;

    /**
     * Checks whether the value of the specified column in the current row is null.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { boolean } True if the value of the specified column in the current row is null;
     *                    Returns false otherwise.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Checks whether the value of the specified column in the current row is null.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { boolean } True if the value of the specified column in the current row is null;
     *                    Returns false otherwise.
     * @throws { BusinessError } 14800013 - The column value is null or the column type is incompatible.
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    isColumnNull(columnIndex: number): boolean;

    /**
     * Closes the result set.
     * Calling this method on the result set will release all of its resources and makes it ineffective.
     *
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Closes the result set.
     * Calling this method on the result set will release all of its resources and makes it ineffective.
     *
     * @throws { BusinessError } 14800012 - The result set is empty or the specified location is invalid.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    close(): void;
  }

  /**
   * Provides methods for managing the relational database (RDB).
   * This class provides methods for creating, querying, updating, and deleting RDBs.
   *
   * @interface RdbStore
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  /**
   * Provides methods for managing the relational database (RDB).
   * This class provides methods for creating, querying, updating, and deleting RDBs.
   *
   * @interface RdbStore
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10
   */
  interface RdbStore {
    /**
     * Obtains the RdbStore version. The version number must be an integer greater than 0.
     *
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    /**
     * Obtains the RdbStore version. The version number must be an integer greater than 0.
     *
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    version: number;

    /**
     * Inserts a row of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { ValuesBucket } values - Indicates the row of data {@link ValuesBucket} to be inserted into the table.
     * @param { AsyncCallback<number> } callback - The row ID if the operation is successful. returns -1 otherwise.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Inserts a row of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { ValuesBucket } values - Indicates the row of data {@link ValuesBucket} to be inserted into the table.
     * @param { AsyncCallback<number> } callback - The row ID if the operation is successful. returns -1 otherwise.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    insert(table: string, values: ValuesBucket, callback: AsyncCallback<number>): void;

    /**
     * Inserts a row of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { ValuesBucket } values - Indicates the row of data {@link ValuesBucket} to be inserted into the table.
     * @param { ConflictResolution } conflict - Indicates the {@link ConflictResolution} to insert data into the table.
     * @param { AsyncCallback<number> } callback - The row ID if the operation is successful. returns -1 otherwise.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    insert(table: string, values: ValuesBucket, conflict: ConflictResolution, callback: AsyncCallback<number>): void;

    /**
     * Inserts a row of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { ValuesBucket } values - Indicates the row of data {@link ValuesBucket} to be inserted into the table.
     * @returns { Promise<number> } The row ID if the operation is successful. return -1 otherwise.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Inserts a row of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { ValuesBucket } values - Indicates the row of data {@link ValuesBucket} to be inserted into the table.
     * @returns { Promise<number> } The row ID if the operation is successful. return -1 otherwise.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    insert(table: string, values: ValuesBucket): Promise<number>;

    /**
     * Inserts a row of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { ValuesBucket } values - Indicates the row of data {@link ValuesBucket} to be inserted into the table.
     * @param { ConflictResolution } conflict - Indicates the {@link ConflictResolution} to insert data into the table.
     * @returns { Promise<number> } The row ID if the operation is successful. return -1 otherwise.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    insert(table: string, values: ValuesBucket, conflict: ConflictResolution): Promise<number>;

    /**
     * Inserts a batch of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { Array<ValuesBucket> } values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
     * @param { AsyncCallback<number> } callback - The number of values that were inserted if the operation is successful. returns -1 otherwise.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Inserts a batch of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { Array<ValuesBucket> } values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
     * @param { AsyncCallback<number> } callback - The number of values that were inserted if the operation is successful. returns -1 otherwise.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    batchInsert(table: string, values: Array<ValuesBucket>, callback: AsyncCallback<number>): void;

    /**
     * Inserts a batch of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { Array<ValuesBucket> } values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
     * @returns { Promise<number> } The number of values that were inserted if the operation is successful. returns -1 otherwise.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Inserts a batch of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { Array<ValuesBucket> } values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
     * @returns { Promise<number> } The number of values that were inserted if the operation is successful. returns -1 otherwise.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    batchInsert(table: string, values: Array<ValuesBucket>): Promise<number>;

    /**
     * Updates data in the database based on a specified instance object of RdbPredicates.
     *
     * @param { ValuesBucket } values - Indicates the row of data to be updated in the database.
     *                         The key-value pairs are associated with column names of the database table.
     * @param { RdbPredicates } predicates - Indicates the specified update condition by the instance object of  {@link RdbPredicates}.
     * @param { AsyncCallback<number> } callback - The number of affected rows.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Updates data in the database based on a specified instance object of RdbPredicates.
     *
     * @param { ValuesBucket } values - Indicates the row of data to be updated in the database.
     *                         The key-value pairs are associated with column names of the database table.
     * @param { RdbPredicates } predicates - Indicates the specified update condition by the instance object of  {@link RdbPredicates}.
     * @param { AsyncCallback<number> } callback - The number of affected rows.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    update(values: ValuesBucket, predicates: RdbPredicates, callback: AsyncCallback<number>): void;

    /**
     * Updates data in the database based on a specified instance object of RdbPredicates.
     *
     * @param { ValuesBucket } values - Indicates the row of data to be updated in the database.
     *                         The key-value pairs are associated with column names of the database table.
     * @param { RdbPredicates } predicates - Indicates the specified update condition by the instance object of  {@link RdbPredicates}.
     * @param { ConflictResolution } conflict - Indicates the {@link ConflictResolution} to insert data into the table.
     * @param { AsyncCallback<number> } callback - The number of affected rows.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    update(values: ValuesBucket, predicates: RdbPredicates, conflict: ConflictResolution, callback: AsyncCallback<number>): void;

    /**
     * Updates data in the database based on a specified instance object of RdbPredicates.
     *
     * @param { ValuesBucket } values - Indicates the row of data to be updated in the database.
     *                         The key-value pairs are associated with column names of the database table.
     * @param { RdbPredicates } predicates - Indicates the specified update condition by the instance object of  {@link RdbPredicates}.
     * @returns { Promise<number> } The number of affected rows.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Updates data in the database based on a specified instance object of RdbPredicates.
     *
     * @param { ValuesBucket } values - Indicates the row of data to be updated in the database.
     *                         The key-value pairs are associated with column names of the database table.
     * @param { RdbPredicates } predicates - Indicates the specified update condition by the instance object of  {@link RdbPredicates}.
     * @returns { Promise<number> } The number of affected rows.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    update(values: ValuesBucket, predicates: RdbPredicates): Promise<number>;

    /**
     * Updates data in the database based on a specified instance object of RdbPredicates.
     *
     * @param { ValuesBucket } values - Indicates the row of data to be updated in the database.
     *                         The key-value pairs are associated with column names of the database table.
     * @param { RdbPredicates } predicates - Indicates the specified update condition by the instance object of  {@link RdbPredicates}.
     * @param { ConflictResolution } conflict - Indicates the {@link ConflictResolution} to insert data into the table.
     * @returns { Promise<number> } The number of affected rows.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    update(values: ValuesBucket, predicates: RdbPredicates, conflict: ConflictResolution): Promise<number>;

    /**
     * Updates data in the database based on a specified instance object of RdbPredicates.
     *
     * @param { string } table - Indicates the target table.
     * @param { ValuesBucket } values - Indicates the row of data to be updated in the database.
     *                         The key-value pairs are associated with column names of the database table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the specified update condition by
     *                                                    the instance object of {@link dataSharePredicates.DataSharePredicates}.
     * @param { AsyncCallback<number> } callback - The number of affected rows.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Updates data in the database based on a specified instance object of RdbPredicates.
     *
     * @param { string } table - Indicates the target table.
     * @param { ValuesBucket } values - Indicates the row of data to be updated in the database.
     *                         The key-value pairs are associated with column names of the database table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the specified update condition by
     *                                                    the instance object of {@link dataSharePredicates.DataSharePredicates}.
     * @param { AsyncCallback<number> } callback - The number of affected rows.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 10
     */
    update(table: string, values: ValuesBucket, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<number>): void;

    /**
     * Updates data in the database based on a specified instance object of RdbPredicates.
     *
     * @param { string } table - Indicates the target table.
     * @param { ValuesBucket } values - Indicates the row of data to be updated in the database.
     *                         The key-value pairs are associated with column names of the database table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the specified update condition by
     *                                                    the instance object of {@link dataSharePredicates.DataSharePredicates}.
     * @returns { Promise<number> } The number of affected rows.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Updates data in the database based on a specified instance object of RdbPredicates.
     *
     * @param { string } table - Indicates the target table.
     * @param { ValuesBucket } values - Indicates the row of data to be updated in the database.
     *                         The key-value pairs are associated with column names of the database table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates the specified update condition by
     *                                                    the instance object of {@link dataSharePredicates.DataSharePredicates}.
     * @returns { Promise<number> } The number of affected rows.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 10
     */
    update(table: string, values: ValuesBucket, predicates: dataSharePredicates.DataSharePredicates): Promise<number>;

    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates.
     *
     * @param { RdbPredicates } predicates - The specified delete condition by the instance object of {@link RdbPredicates}.
     * @param { AsyncCallback<number> } callback - The number of affected rows.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates.
     *
     * @param { RdbPredicates } predicates - The specified delete condition by the instance object of {@link RdbPredicates}.
     * @param { AsyncCallback<number> } callback - The number of affected rows.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    delete(predicates: RdbPredicates, callback: AsyncCallback<number>): void;

    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates.
     *
     * @param { RdbPredicates } predicates - The specified delete condition by the instance object of {@link RdbPredicates}.
     * @returns { Promise<number> } The number of affected rows.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates.
     *
     * @param { RdbPredicates } predicates - The specified delete condition by the instance object of {@link RdbPredicates}.
     * @returns { Promise<number> } return the number of affected rows.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    delete(predicates: RdbPredicates): Promise<number>;

    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates.
     *
     * @param { string } table - Indicates the target table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - The specified delete condition by
     *                                                    the instance object of {@link dataSharePredicates.DataSharePredicates}.
     * @param { AsyncCallback<number> } callback - The number of affected rows.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates.
     *
     * @param { string } table - Indicates the target table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - The specified delete condition by the instance object
     *                                                    of {@link dataSharePredicates.DataSharePredicates}.
     * @param { AsyncCallback<number> } callback - The number of affected rows.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 10
     */
    delete(table: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<number>): void;

    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates.
     *
     * @param { string } table - Indicates the target table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - The specified delete condition by the instance object
     *                                                    of {@link dataSharePredicates.DataSharePredicates}.
     * @returns { Promise<number> } The number of affected rows.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates.
     *
     * @param { string } table - Indicates the target table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - The specified delete condition by the instance object
     *                                                    of {@link dataSharePredicates.DataSharePredicates}.
     * @returns { Promise<number> } The number of affected rows.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 10
     */
    delete(table: string, predicates: dataSharePredicates.DataSharePredicates): Promise<number>;

    /**
     * Queries data in the database based on specified conditions.
     *
     * @param { RdbPredicates } predicates - The specified query condition by the instance object of {@link RdbPredicates}.
     * @param { AsyncCallback<ResultSet> } callback - The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    query(predicates: RdbPredicates, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database based on specified conditions.
     *
     * @param { RdbPredicates } predicates - The specified query condition by the instance object of {@link RdbPredicates}.
     * @param { Array<string> } columns - The columns to query. If the value is empty array, the query applies to all columns.
     * @param { AsyncCallback<ResultSet> } callback - The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Queries data in the database based on specified conditions.
     *
     * @param { RdbPredicates } predicates - The specified query condition by the instance object of {@link RdbPredicates}.
     * @param { Array<string> } columns - The columns to query. If the value is empty array, the query applies to all columns.
     * @param { AsyncCallback<ResultSet> } callback - The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database based on specified conditions.
     *
     * @param { RdbPredicates } predicates - The specified query condition by the instance object of {@link RdbPredicates}.
     * @param { Array<string> } columns - The columns to query. If the value is null, the query applies to all columns.
     * @returns { Promise<ResultSet> } The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Queries data in the database based on specified conditions.
     *
     * @param { RdbPredicates } predicates - The specified query condition by the instance object of {@link RdbPredicates}.
     * @param { Array<string> } columns - The columns to query. If the value is null, the query applies to all columns.
     * @returns { Promise<ResultSet> } The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    query(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>;

    /**
     * Queries data in the database based on specified conditions.
     *
     * @param { string } table - Indicates the target table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - The specified query condition by the instance object
     *                                                    of {@link dataSharePredicates.DataSharePredicates}.
     * @param { AsyncCallback<ResultSet> } callback - The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 10
     */
    query(table: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database based on specified conditions.
     *
     * @param { string } table - Indicates the target table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - The specified query condition by the instance object
     *                                                    of {@link dataSharePredicates.DataSharePredicates}.
     * @param { Array<string> } columns - The columns to query. If the value is empty array, the query applies to all columns.
     * @param { AsyncCallback<ResultSet> } callback - The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    query(table: string, predicates: dataSharePredicates.DataSharePredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database based on specified conditions.
     *
     * @param { string } table - Indicates the target table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - The specified query condition by the instance object
     *                                                    of {@link dataSharePredicates.DataSharePredicates}.
     * @param { Array<string> } columns - The columns to query. If the value is null, the query applies to all columns.
     * @returns { Promise<ResultSet> } The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    query(table: string, predicates: dataSharePredicates.DataSharePredicates, columns?: Array<string>): Promise<ResultSet>;

    /**
     * Queries data in the database based on SQL statement.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { AsyncCallback<ResultSet> } callback - The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    querySql(sql: string, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database based on SQL statement.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { Array<ValueType> } bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
     * @param { AsyncCallback<ResultSet> } callback - The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Queries data in the database based on SQL statement.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { Array<ValueType> } bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
     * @param { AsyncCallback<ResultSet> } callback - The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database based on SQL statement.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { Array<ValueType> } bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
     * @returns { Promise<ResultSet> } The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Queries data in the database based on SQL statement.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { Array<ValueType> } bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
     * @returns { Promise<ResultSet> } The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    querySql(sql: string, bindArgs?: Array<ValueType>): Promise<ResultSet>;

    /**
     * Executes a SQL statement that contains specified parameters but returns no value.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { AsyncCallback<void> } callback - The callback of executeSql.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    executeSql(sql: string, callback: AsyncCallback<void>): void;

    /**
     * Executes a SQL statement that contains specified parameters but returns no value.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { Array<ValueType> } bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
     * @param { AsyncCallback<void> } callback - The callback of executeSql.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Executes a SQL statement that contains specified parameters but returns no value.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { Array<ValueType> } bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
     * @param { AsyncCallback<void> } callback - The callback of executeSql.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>): void;

    /**
     * Executes a SQL statement that contains specified parameters but returns no value.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { Array<ValueType> } bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Executes a SQL statement that contains specified parameters but returns no value.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { Array<ValueType> } bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.+
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    executeSql(sql: string, bindArgs?: Array<ValueType>): Promise<void>;

    /**
     * BeginTransaction before execute your sql.
     *
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * BeginTransaction before execute your sql.
     *
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    beginTransaction(): void;

    /**
     * Commit the the sql you have executed.
     *
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Commit the the sql you have executed.
     *
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    commit(): void;

    /**
     * Roll back the sql you have already executed.
     *
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Roll back the sql you have already executed.
     *
     * @throws { BusinessError } 401 - Parameter error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    rollBack(): void;

    /**
     * Backs up a database in a specified name.
     *
     * @param { string } destName - Indicates the name that saves the database backup.
     * @param { AsyncCallback<void> } callback - The callback of backup.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Backs up a database in a specified name.
     *
     * @param { string } destName - Indicates the name that saves the database backup.
     * @param { AsyncCallback<void> } callback - The callback of backup.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    backup(destName: string, callback: AsyncCallback<void>): void;

    /**
     * Backs up a database in a specified name.
     *
     * @param { string } destName - Indicates the name that saves the database backup.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Backs up a database in a specified name.
     *
     * @param { string } destName - Indicates the name that saves the database backup.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    backup(destName: string): Promise<void>;

    /**
     * Restores a database from a specified database file.
     *
     * @param { string } srcName - Indicates the name that saves the database file.
     * @param { AsyncCallback<void> } callback - The callback of restore.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Restores a database from a specified database file.
     *
     * @param { string } srcName - Indicates the name that saves the database file.
     * @param { AsyncCallback<void> } callback - The callback of restore.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    restore(srcName: string, callback: AsyncCallback<void>): void;

    /**
     * Restores a database from a specified database file.
     *
     * @param { string } srcName - Indicates the name that saves the database file.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    /**
     * Restores a database from a specified database file.
     *
     * @param { string } srcName - Indicates the name that saves the database file.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10
     */
    restore(srcName: string): Promise<void>;

    /**
     * Set table to be distributed table.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Array<string> } tables - Indicates the tables name you want to set.
     * @param { AsyncCallback<void> } callback - The callback of setDistributedTables.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    setDistributedTables(tables: Array<string>, callback: AsyncCallback<void>): void;

    /**
     * Set table to be distributed table.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Array<string> } tables - Indicates the tables name you want to set.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    setDistributedTables(tables: Array<string>): Promise<void>;

    /**
     * Set table to be distributed table.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Array<string> } tables - indicates the tables name you want to set.
     * @param { number } type - indicates the tables distributed type {@link DistributedType}.
     * This method only works when type equals to DistributedType.DISTRIBUTED_CLOUD
     * @param { DistributedConfig } config - indicates the distributed config of the tables. {@link DistributedConfig}.
     * @param { AsyncCallback<void> } callback - the callback of setDistributedTables.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    setDistributedTables(tables: Array<string>, type: number, config: DistributedConfig, callback: AsyncCallback<void>): void;

    /**
     * Set table to be a distributed table.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Array<string> } tables - indicates the tables name you want to set.
     * @param { number } type - indicates the distribution type of the tables. {@link DistributedType}.
     * This method only works when type equals to DistributedType.DISTRIBUTED_CLOUD
     * @param { DistributedConfig } config - indicates the distributed config of the tables. {@link DistributedConfig}.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    setDistributedTables(tables: Array<string>, type?: number, config?: DistributedConfig): Promise<void>;

    /**
     * Obtain distributed table name of specified remote device according to local table name.
     * When query remote device database, distributed table name is needed.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } device - Indicates the remote device.
     * @param { string } table - {string}: the distributed table name.
     * @param { AsyncCallback<string> } callback
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    obtainDistributedTableName(device: string, table: string, callback: AsyncCallback<string>): void;

    /**
     * Obtain distributed table name of specified remote device according to local table name.
     * When query remote device database, distributed table name is needed.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } device - Indicates the remote device.
     * @param { string } table
     * @returns { Promise<string> } {string}: the distributed table name.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    obtainDistributedTableName(device: string, table: string): Promise<string>;

    /**
     * Sync data between devices.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { SyncMode } mode - Indicates the database synchronization mode.
     * @param { RdbPredicates } predicates - The specified sync condition by the instance object of {@link RdbPredicates}.
     * @param { AsyncCallback<Array<[string, number]>> } callback - {Array<[string, number]>}: devices sync status array,
     *                                                              {string}: device id,
     *                                                              {number}: device sync status.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    sync(mode: SyncMode, predicates: RdbPredicates, callback: AsyncCallback<Array<[string, number]>>): void;

    /**
     * Sync data between devices.
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { SyncMode } mode - Indicates the database synchronization mode.
     * @param { RdbPredicates } predicates - The specified sync condition by the instance object of {@link RdbPredicates}.
     * @returns { Promise<Array<[string, number]>> } {Array<[string, number]>}: devices sync status array, {string}: device id, {number}: device sync status.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    sync(mode: SyncMode, predicates: RdbPredicates): Promise<Array<[string, number]>>;

    /**
     * Queries remote data in the database based on specified conditions before Synchronizing Data.
     *
     * @param { string } device - Indicates specified remote device.
     * @param { string } table - Indicates the target table.
     * @param { RdbPredicates } predicates - The specified remote remote query condition by the instance object of {@link RdbPredicates}.
     * @param { Array<string> } columns - The columns to remote query. If the value is empty array, the remote query applies to all columns.
     * @param { AsyncCallback<ResultSet> } callback - The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    remoteQuery(device: string, table: string, predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries remote data in the database based on specified conditions before Synchronizing Data.
     *
     * @param { string } device - Indicates specified remote device.
     * @param { string } table - Indicates the target table.
     * @param { RdbPredicates } predicates - The specified remote remote query condition by the instance object of {@link RdbPredicates}.
     * @param { Array<string> } columns - The columns to remote query. If the value is empty array, the remote query applies to all columns.
     * @returns { Promise<ResultSet> } The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    remoteQuery(device: string, table: string, predicates: RdbPredicates, columns: Array<string>): Promise<ResultSet>;

    /**
     * Registers an observer for the database. When data in the distributed database changes,
     * the callback will be invoked.
     *
     * @param { 'dataChange' } event - Indicates the event must be string 'dataChange'.
     * @param { SubscribeType } type - Indicates the subscription type, which is defined in {@link SubscribeType}.
     *                          If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required.
     * @param { Callback<Array<string>> } observer - {Array<string>}: the observer of data change events in the distributed database.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;

    /**
     * Registers an observer for the database. When data in the distributed database changes,
     * the callback will be invoked.
     *
     * @param { 'dataChange' } event - indicates the event must be string 'dataChange'.
     * @param { SubscribeType } type - indicates the subscription type, which is defined in {@link SubscribeType}.If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required.
     * @param { Callback<Array<string>> | Callback<Array<ChangeInfo>> } observer
     * {Array<string>}: the observer of data change events in the distributed database.
     * {Array<ChangeInfo>}: the change info of data change events in the distributed database.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 202 - if permission verification failed, application does not have permission ohos.permission.DISTRIBUTED_DATASYNC.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>> | Callback<Array<ChangeInfo>>): void;

    /**
     * Remove specified observer of specified type from the database.
     *
     * @param { 'dataChange' } event - Indicates the event must be string 'dataChange'.
     * @param { SubscribeType } type - Indicates the subscription type, which is defined in {@link SubscribeType}.
     *                          If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required.
     * @param { Callback<Array<string>> } observer - {Array<string>}: the data change observer already registered.
     * @throws { BusinessError } 401 - Parameter error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    off(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;

    /**
     * Remove specified observer of specified type from the database.
     *
     * @param { 'dataChange' } event - indicates the event must be string 'dataChange'.
     * @param { SubscribeType } type - indicates the subscription type, which is defined in {@link SubscribeType}.
     * If its value is SUBSCRIBE_TYPE_REMOTE, ohos.permission.DISTRIBUTED_DATASYNC is required.
     * @param { Callback<Array<string>> | Callback<Array<ChangeInfo>> } observer - {Array<string>}: the data change observer already registered.
     * {Array<ChangeInfo>}: the change info already registered.
     * @throws { BusinessError } 401 - if the parameter type is incorrect.
     * @throws { BusinessError } 202 - if permission verification failed, application does not have permission ohos.permission.DISTRIBUTED_DATASYNC.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10
     */
    off(event: 'dataChange', type: SubscribeType, observer?: Callback<Array<string>> | Callback<Array<ChangeInfo>>): void;
  }

  /**
   * Obtains a RDB store.
   * You can set parameters of the RDB store as required. In general, this method is recommended
   * to obtain a rdb store.
   *
   * @param { Context } context - Indicates the context of application or capability.
   * @param { StoreConfig } config - Indicates the {@link StoreConfig} configuration of the database related to this RDB store.
   * @param { AsyncCallback<RdbStore> } callback - The RDB store {@link RdbStore}.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete database by invalid database path.
   * @throws { BusinessError } 14800011 - Failed to open database by database corrupted.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  /**
   * Obtains a RDB store.
   * You can set parameters of the RDB store as required. In general, this method is recommended
   * to obtain a rdb store.
   *
   * @param { Context } context - Indicates the context of application or capability.
   * @param { StoreConfig } config - Indicates the {@link StoreConfig} configuration of the database related to this RDB store.
   * @param { AsyncCallback<RdbStore> } callback - The RDB store {@link RdbStore}.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete database by invalid database path.
   * @throws { BusinessError } 14800011 - Failed to open database by database corrupted.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10
   */
  function getRdbStore(context: Context, config: StoreConfig, callback: AsyncCallback<RdbStore>): void;

  /**
   * Obtains a RDB store.
   * You can set parameters of the RDB store as required. In general, this method is recommended
   * to obtain a rdb store.
   *
   * @param { Context } context - Indicates the context of application or capability.
   * @param { StoreConfig } config - Indicates the {@link StoreConfig} configuration of the database related to this RDB store.
   * @returns { Promise<RdbStore> } The RDB store {@link RdbStore}.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete database by invalid database path.
   * @throws { BusinessError } 14800011 - Failed to open database by database corrupted.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  /**
   * Obtains a RDB store.
   * You can set parameters of the RDB store as required. In general, this method is recommended
   * to obtain a rdb store.
   *
   * @param { Context } context - Indicates the context of application or capability.
   * @param { StoreConfig } config - Indicates the {@link StoreConfig} configuration of the database related to this RDB store.
   * @returns { Promise<RdbStore> } The RDB store {@link RdbStore}.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete database by invalid database path.
   * @throws { BusinessError } 14800011 - Failed to open database by database corrupted.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10
   */
  function getRdbStore(context: Context, config: StoreConfig): Promise<RdbStore>;

  /**
   * Deletes the database with a specified name.
   *
   * @param { Context } context - Indicates the context of application or capability.
   * @param { string } name - Indicates the database name.
   * @param { AsyncCallback<void> } callback - The callback of deleteRdbStore.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete database by invalid database path.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  /**
   * Deletes the database with a specified name.
   *
   * @param { Context } context - Indicates the context of application or capability.
   * @param { string } name - Indicates the database name.
   * @param { AsyncCallback<void> } callback - The callback of deleteRdbStore.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete database by invalid database path.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10
   */
  function deleteRdbStore(context: Context, name: string, callback: AsyncCallback<void>): void;

  /**
   * Deletes the database with a specified name.
   *
   * @param { Context } context - Indicates the context of application or capability.
   * @param { string } name - Indicates the database name.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete database by invalid database path.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9
   */
  /**
   * Deletes the database with a specified name.
   *
   * @param { Context } context - Indicates the context of application or capability.
   * @param { string } name - Indicates the database name.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 401 - Parameter error.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete database by invalid database path.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10
   */
  function deleteRdbStore(context: Context, name: string): Promise<void>;
}

export default relationalStore;
