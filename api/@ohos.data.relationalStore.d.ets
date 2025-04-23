/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
import Context from './application/BaseContext';
import dataSharePredicates from './@ohos.data.dataSharePredicates';
/**
 * Provides methods for rdbStore create and delete.
 *
 * @namespace relationalStore
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @crossplatform
 * @since 20
 */
declare namespace relationalStore {
  /**
   * Describes the status of asset
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  export enum AssetStatus {
    /**
     * ASSET_NORMAL: means the status of asset is normal.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    ASSET_NORMAL,

    /**
     * ASSET_ABNORMAL: means the asset needs to be inserted.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    ASSET_INSERT,

    /**
     * ASSET_ABNORMAL: means the asset needs to be updated.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    ASSET_UPDATE,

    /**
     * ASSET_ABNORMAL: means the asset needs to be deleted.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    ASSET_DELETE,

    /**
     * ASSET_ABNORMAL: means the status of asset is abnormal.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    ASSET_ABNORMAL,

    /**
     * ASSET_DOWNLOADING: means the status of asset is downloading.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    ASSET_DOWNLOADING
  }

  /**
   * Records information of the asset.
   *
   * @interface Asset
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  export interface Asset {
    /**
     * The name of asset.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    name: string;

    /**
     * The uri of asset.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    uri: string;

    /**
     * The path of asset.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    path: string;

    /**
     * The create time of asset.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    createTime: string;

    /**
     * The modify time of asset.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    modifyTime: string;

    /**
     * The size of asset.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    size: string;

    /**
     * The status of asset.
     *
     * @type { ?AssetStatus }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    status?: AssetStatus;
  }

  /**
   * Indicates several assets in one column
   *
   * @typedef { Asset[] } Assets
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  type Assets = Asset[];

  /**
   * Indicates possible value types
   *
   * @typedef { null | number | string | boolean | Uint8Array | Asset | Assets | Float32Array | bigint } ValueType
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  type ValueType = null | number | string | boolean | Uint8Array | Asset | Assets | Float32Array | bigint;

  /**
   * Values in buckets are stored in key-value pairs, change {[key: string]: ValueType;} to Record<string, ValueType>
   *
   * @typedef { Record<string, ValueType> } ValuesBucket
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  export type ValuesBucket = Record<string, ValueType>;

  /**
   * The type of the priority key can be number or string
   *
   * @typedef { number | string } PRIKeyType
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  type PRIKeyType = number | string;

  /**
   * The time is in UTC format.
   *
   * @typedef { Date } UTCTime
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  type UTCTime = Date;

  /**
   * Indicates the primary key and UTC time of the modified rows.
   *
   * @typedef { Map<PRIKeyType, UTCTime> } ModifyTime
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  type ModifyTime = Map<PRIKeyType, UTCTime>;

  /**
   * Manages relational database configurations.
   *
   * @interface StoreConfig
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  /**
   * Manages relational database configurations.
   *
   * @interface StoreConfig
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  export interface StoreConfig {
    /**
     * The database name.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    name: string;

    /**
     * Specifies the security level of the database.
     *
     * @type { SecurityLevel }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    securityLevel: SecurityLevel;

    /**
     * Specifies whether the database is encrypted.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    encrypt?: boolean;

    /**
     * The data group id of application.
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @StageModelOnly
     * @since 20
     */
    dataGroupId?: string;

    /**
     * Specifies the directory relative to the database directory obtained from context
     *
     * @type { ?string }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    customDir?: string;

    /**
     * Specifies whether to clean up dirty data that is synchronized to
     * the local but deleted in the cloud.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 20
     */
    autoCleanDirtyData?: boolean;

    /**
     * Specifies whether data can be searched.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 20
     */
    isSearchable?: boolean;

    /**
     * Specifies whether database allows rebuild.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    allowRebuild?: boolean;

    /**
     * Specifies whether the vector type is supported.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 20
     */
    vector?: boolean;

    /**
     * Specifies whether the database opened is read-only.
     * If isReadOnly is true, other configuration items will become invalid.
     *
     * @type { ?boolean }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    isReadOnly?: boolean;

    /**
     * Indicates the names of the shared library containing fts etc.
     *
     * @type { ?Array<string> }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    pluginLibs?: Array<string>;

    /**
     * Enumerates the high availability modes of the RDB store.
     *
     * @type { ?HAMode }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 20
     */
    haMode?: HAMode;

    /**
     * Specifies the cryptographic parameters used when opening an encrypted database.
     *
     * @type { ?CryptoParam }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    cryptoParam?: CryptoParam;
  }

  /**
   * Enumerates the high availability modes of the RDB store.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @systemapi
   * @since 20
   */
  export enum HAMode {
    /**
     * SINGLE: Data is written to a single RDB store.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 20
     */
    SINGLE = 0,

    /**
     * MAIN_REPLICA: Data is written to the main and replica RDB stores.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 20
     */
    MAIN_REPLICA
  }

  /**
   * Specifies the cryptographic parameters used when opening an encrypted database.
   *
   * @typedef CryptoParam
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export interface CryptoParam {
    /**
     * Specifies the key used when opening an encrypted database.
     * When finished passing the key to the database, its content should be set to all-zero.
     *
     * @type { Uint8Array }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    encryptionKey: Uint8Array;

    /**
     * Specifies the number of KDF iterations used when opening an encrypted database.
     * Default number is 10000.
     * When the number is set to 0, use default iteration number and encryption algorithm.
     *
     * @type { ?number }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    iterationCount?: number;

    /**
     * Specifies the encryption algorithm when opening an encrypted database.
     * Default encryption algorithm is AES_256_GCM.
     *
     * @type { ?EncryptionAlgo }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    encryptionAlgo?: EncryptionAlgo;

    /**
     * Specifies the HMAC algorithm when opening an encrypted database.
     * Default HMAC algorithm is SHA256.
     *
     * @type { ?HmacAlgo }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    hmacAlgo?: HmacAlgo;

    /**
     * Specifies the KDF algorithm when opening an encrypted database.
     * Default KDF SHA algorithm is the same as HMAC algorithm.
     *
     * @type { ?KdfAlgo }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    kdfAlgo?: KdfAlgo;

    /**
     * Specifies the page size used when opening an encrypted database.
     * Default crypto page size is 1024.
     *
     * @type { ?number }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    cryptoPageSize?: number;
  }

  /**
   * Enumerates the supported encryption algorithm when opening a database.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export enum EncryptionAlgo {
    /**
     * AES_256_GCM: Database is encrypted using AES_256_GCM.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    AES_256_GCM = 0,

    /**
     * AES_256_CBC: Database is encrypted using AES_256_CBC.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    AES_256_CBC
  }

  /**
   * Enumerates the supported HMAC algorithm when opening a database.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export enum HmacAlgo {
    /**
     * SHA1: HMAC_SHA1 algorithm.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    SHA1 = 0,

    /**
     * SHA256: HMAC_SHA256 algorithm.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    SHA256,

    /**
     * SHA512: HMAC_SHA512 algorithm.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    SHA512
  }

  /**
   * Enumerates the supported KDF algorithm when opening a database.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export enum KdfAlgo {
    /**
     * KDF_SHA1: PBKDF2_HMAC_SHA1 algorithm.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    KDF_SHA1 = 0,

    /**
     * KDF_SHA256: PBKDF2_HMAC_SHA256 algorithm.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    KDF_SHA256,

    /**
     * KDF_SHA512: PBKDF2_HMAC_SHA512 algorithm.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    KDF_SHA512
  }

  /**
   * The cloud sync progress
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export enum Progress {
    /**
     * SYNC_BEGIN: means the sync process begin.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    SYNC_BEGIN,

    /**
     * SYNC_BEGIN: means the sync process is in progress
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    SYNC_IN_PROGRESS,

    /**
     * SYNC_BEGIN: means the sync process is finished
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    SYNC_FINISH
  }

  /**
   * Describes the statistic of the cloud sync process.
   *
   * @interface Statistic
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export interface Statistic {
    /**
     * Describes the total number of data to sync.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    total: number;

    /**
     * Describes the number of successfully synced data.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    successful: number;

    /**
     * Describes the number of data failed to sync.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    failed: number;

    /**
     * Describes the number of data remained to sync.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    remained: number;
  }

  /**
   * Describes the {@code Statistic} details of the table.
   *
   * @interface TableDetails
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export interface TableDetails {
    /**
     * Describes the {@code Statistic} details of the upload process.
     *
     * @type { Statistic }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    upload: Statistic;

    /**
     * Describes the {@code Statistic} details of the download process.
     *
     * @type { Statistic }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    download: Statistic;
  }

  /**
   * Describes the status of {@code Progress}.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export enum ProgressCode {
    /**
     * SUCCESS: means the status of progress is success.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    SUCCESS,

    /**
     * UNKNOWN_ERROR: means the progress meets unknown error.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    UNKNOWN_ERROR,

    /**
     * NETWORK_ERROR: means the progress meets network error.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    NETWORK_ERROR,

    /**
     * CLOUD_DISABLED: means cloud is disabled.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    CLOUD_DISABLED,

    /**
     * LOCKED_BY_OTHERS: means the progress is locked by others.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    LOCKED_BY_OTHERS,

    /**
     * RECORD_LIMIT_EXCEEDED: means the record exceeds the limit.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    RECORD_LIMIT_EXCEEDED,

    /**
     * NO_SPACE_FOR_ASSET: means the cloud has no space for the asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    NO_SPACE_FOR_ASSET,

    /**
     * BLOCKED_BY_NETWORK_STRATEGY: means the sync blocked by network strategy.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    BLOCKED_BY_NETWORK_STRATEGY
  }

  /**
   * Describes detail of the cloud sync {@code Progress}.
   *
   * @interface ProgressDetails
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export interface ProgressDetails {
    /**
     * Describes the status of data sync progress.
     *
     * @type { Progress }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    schedule: Progress;

    /**
     * Describes the code of data sync progress.
     *
     * @type { ProgressCode }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    code: ProgressCode;

    /**
     * The statistic details of the tables.
     *
     * @type { Record<string, TableDetails> }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    details: Record<string, TableDetails>;
  }

  /**
   * Defines information about the SQL statements executed.
   *
   * @interface SqlExecutionInfo
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export interface SqlExecutionInfo {
    /**
     * Array of SQL statements executed. When the args of batchInsert is too large, there may be more than one SQL.
     *
     * @type { Array<string> }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    sql: Array<string>;

    /**
     * Total time used for executing the SQL statements, in μs.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    totalTime: number;

    /**
     * Maximum time allowed to obtain the SQL file handle, in μs.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    waitTime: number;

    /**
     * Time used to prepare SQL and args, in μs.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    prepareTime: number;

    /**
     * Time used to execute the SQL statements, in μs.
     *
     * @type { number }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    executeTime: number;
  }

  /**
   * Describes the {@code RdbStore} type.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  export enum SecurityLevel {
    /**
     * S1: means the db is low level security
     * There are some low impact, when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    S1 = 1,

    /**
     * S2: means the db is middle level security
     * There are some major impact, when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    S2 = 2,

    /**
     * S3: means the db is high level security
     * There are some severity impact, when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    S3 = 3,

    /**
     * S4: means the db is critical level security
     * There are some critical impact, when the data is leaked.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    S4 = 4
  }

  /**
   * Indicates the database synchronization mode.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export enum SyncMode {
    /**
     * Indicates the data is pushed to remote device from local device.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    SYNC_MODE_PUSH = 0,

    /**
     * Indicates the data is pulled from remote device to local device.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    SYNC_MODE_PULL = 1,

    /**
     * Indicates the data is pulled from remote device to local device.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 20
     */
    SYNC_MODE_TIME_FIRST,

    /**
     * Indicates force push the native data to the cloud.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 20
     */
    SYNC_MODE_NATIVE_FIRST,

    /**
     * Indicates the data is pulled from cloud to local device.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 20
     */
    SYNC_MODE_CLOUD_FIRST
  }

  /**
   * Describes the subscription type.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export enum SubscribeType {
    /**
     * Subscription to remote data changes
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    SUBSCRIBE_TYPE_REMOTE = 0,

    /**
     * Subscription to cloud data changes
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 20
     */
    SUBSCRIBE_TYPE_CLOUD,

    /**
     * Subscription to cloud data changes details
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 20
     */
    SUBSCRIBE_TYPE_CLOUD_DETAILS,

    /**
     * Subscription to local data changes details
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    SUBSCRIBE_TYPE_LOCAL_DETAILS
  }

  /**
   * Describes the change type.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export enum ChangeType {
    /**
     * Means the change type is data change.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    DATA_CHANGE,

    /**
     * Means the change type is asset change.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    ASSET_CHANGE
  }

  /**
   * Indicates the notify info
   *
   * @interface ChangeInfo
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export interface ChangeInfo {
    /**
     * Indicates the changed table
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    table: string;

    /**
     * Indicates the changed type
     *
     * @type { ChangeType }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    type: ChangeType;

    /**
     * Indicates if there is a string primary key, the inserted will keep data's primary keys
     * otherwise it will keep the data's rowid.
     *
     * @type { Array<string> | Array<number> }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    inserted: Array<string> | Array<number>;

    /**
     * Indicates if there is a string primary key, the updated will keep data's primary keys
     * otherwise it will keep the data's rowid.
     *
     * @type { Array<string> | Array<number> }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    updated: Array<string> | Array<number>;

    /**
     * Indicates if there is a string primary key, the deleted will keep data's primary keys
     * otherwise it will keep the data's rowid.
     *
     * @type { Array<string> | Array<number> }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    deleted: Array<string> | Array<number>;
  }

  /**
   * Describes the distribution type of the tables.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export enum DistributedType {
    /**
     * Indicates the table is distributed among the devices
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    DISTRIBUTED_DEVICE,

    /**
     * Indicates the table is distributed between the cloud and the devices.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 20
     */
    DISTRIBUTED_CLOUD
  }

  /**
   * Indicates the reference between tables.
   *
   * @interface Reference
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @systemapi
   * @since 20
   */
  export interface Reference {
    /**
     * Indicates the table that references another table.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 20
     */
    sourceTable: string;

    /**
     * Indicates the table to be referenced.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 20
     */
    targetTable: string;

    /**
     * Indicates the reference fields.
     *
     * @type { Record<string, string> }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 20
     */
    refFields: Record<string, string>
  }

  /**
   * Manages the distributed configuration of the table.
   *
   * @interface DistributedConfig
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export interface DistributedConfig {
    /**
     * Specifies whether the database auto sync.
     *
     * @type { boolean }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    autoSync: boolean;

    /**
     * Specifies the reference relationships between tables.
     *
     * @type { ?Array<Reference> }
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 20
     */
    references?: Array<Reference>;
  }

  /**
   * Describes the conflict resolutions to insert data into the table.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  export enum ConflictResolution {
    /**
     * Implements no action when conflict occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    ON_CONFLICT_NONE = 0,

    /**
     * Implements rollback operation when conflict occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    ON_CONFLICT_ROLLBACK = 1,

    /**
     * Implements abort operation when conflict occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    ON_CONFLICT_ABORT = 2,

    /**
     * Implements fail operation when conflict occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    ON_CONFLICT_FAIL = 3,

    /**
     * Implements ignore operation when conflict occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    ON_CONFLICT_IGNORE = 4,

    /**
     * Implements replace operation operator when conflict occurs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    ON_CONFLICT_REPLACE = 5
  }

  /**
   * Enumerates the type of rebuild.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20
   */
  export enum RebuildType {
    /**
     * The database is not rebuilt or repaired.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    NONE,

    /**
     * The database is rebuilt.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    REBUILT,

    /**
     * The database is repaired.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20
     */
    REPAIRED
  }

  /**
   * Manages relational database configurations.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  export class RdbPredicates {
    /**
     * A parameterized constructor used to create a RdbPredicates instance.
     *
     * @param { string } name - Indicates the table name of the database.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    constructor(name: string);
  }

  /**
   * Provides methods for accessing a database result set generated by querying the database.
   *
   * @interface ResultSet
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  export interface ResultSet {
    /**
     * Obtains the column index based on the specified column name.
     * The column name is passed as an input parameter.
     *
     * @param { string } columnName - Indicates the name of the specified column in the result set.
     * @returns { number } The index of the specified column.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800013 - Column out of bounds.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    getColumnIndex(columnName: string): number;

    /**
     * Go to the first row of the result set.
     *
     * @returns { boolean } True if the result set is moved successfully;
     *                    Returns false otherwise, for example, if the result set is empty.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800012 - Row out of bounds.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    goToFirstRow(): boolean;

    /**
     * Obtains the value of the specified column in the current row as string.
     * The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null or the specified column is not of the string type.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { string } The value of the specified column as a string.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800012 - Row out of bounds.
     * @throws { BusinessError } 14800013 - Column out of bounds.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    getString(columnIndex: number): string;

    /**
     * Obtains the value of the specified column in the current row as long.
     * The implementation class determines whether to throw an exception if the value of the specified column
     * in the current row is null, the specified column is not of the integer type.
     *
     * @param { number } columnIndex - Indicates the specified column index, which starts from 0.
     * @returns { number } The value of the specified column as a long.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800012 - Row out of bounds.
     * @throws { BusinessError } 14800013 - Column out of bounds.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    getLong(columnIndex: number): number;
  }

  /**
   * Provides methods for managing the relational database (RDB).
   * This class provides methods for creating, querying, updating, and deleting RDBs.
   *
   * @interface RdbStore
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  export interface RdbStore {
    /**
     * Inserts a batch of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { Array<ValuesBucket> } values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
     * @param { AsyncCallback<number> } callback - The number of values that were inserted if the operation is successful. returns -1 otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    batchInsert(table: string, values: Array<ValuesBucket>, callback: AsyncCallback<number>): void;

    /**
     * Inserts a batch of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { Array<ValuesBucket> } values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
     * @returns { Promise<number> } The number of values that were inserted if the operation is successful. returns -1 otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    batchInsert(table: string, values: Array<ValuesBucket>): Promise<number>;

    /**
     * Inserts a batch of data into the target table.
     *
     * @param { string } table - Indicates the target table.
     * @param { Array<ValuesBucket> } values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
     * @returns { number } The number of values that were inserted if the operation is successful. returns -1 otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    batchInsertSync(table: string, values: Array<ValuesBucket>): number;

    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates.
     *
     * @param { RdbPredicates } predicates - The specified delete condition by the instance object of {@link RdbPredicates}.
     * @param { AsyncCallback<number> } callback - The number of affected rows.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    delete(predicates: RdbPredicates, callback: AsyncCallback<number>): void;

    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates.
     *
     * @param { RdbPredicates } predicates - The specified delete condition by the instance object of {@link RdbPredicates}.
     * @returns { Promise<number> } return the number of affected rows.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    delete(predicates: RdbPredicates): Promise<number>;

    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates with sync interface.
     *
     * @param { RdbPredicates } predicates - The specified delete condition by the instance object of {@link RdbPredicates}.
     * @returns { number } return the number of affected rows.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    deleteSync(predicates: RdbPredicates): number;

    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates.
     *
     * @param { string } table - Indicates the target table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - The specified delete condition by the instance object
     *                                                    of {@link dataSharePredicates.DataSharePredicates}.
     * @param { AsyncCallback<number> } callback - The number of affected rows.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 20
     */
    delete(table: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<number>): void;

    /**
     * Deletes data from the database based on a specified instance object of RdbPredicates.
     *
     * @param { string } table - Indicates the target table.
     * @param { dataSharePredicates.DataSharePredicates } predicates - The specified delete condition by the instance object
     *                                                    of {@link dataSharePredicates.DataSharePredicates}.
     * @returns { Promise<number> } The number of affected rows.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 20
     */
    delete(table: string, predicates: dataSharePredicates.DataSharePredicates): Promise<number>;

    /**
     * Queries data in the database based on SQL statement with sync interface.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { Array<ValueType> } bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
     * @returns { ResultSet } The {@link ResultSet} object if the operation is successful.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    querySqlSync(sql: string, bindArgs?: Array<ValueType>): ResultSet;

    /**
     * Executes a SQL statement that contains specified parameters but returns no value.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { AsyncCallback<void> } callback - The callback of executeSql.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported the sql(attach,begin,commit,rollback etc.).
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    executeSql(sql: string, callback: AsyncCallback<void>): void;

    /**
     * Executes a SQL statement that contains specified parameters but returns no value.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { Array<ValueType> } bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
     * @param { AsyncCallback<void> } callback - The callback of executeSql.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported the sql(attach,begin,commit,rollback etc.).
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>): void;

    /**
     * Executes a SQL statement that contains specified parameters but returns no value.
     *
     * @param { string } sql - Indicates the SQL statement to execute.
     * @param { Array<ValueType> } bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported the sql(attach,begin,commit,rollback etc.).
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    executeSql(sql: string, bindArgs?: Array<ValueType>): Promise<void>;

    /**
     * BeginTransaction before execute your sql.
     *
     * @throws { BusinessError } 401 - Parameter error. The store must not be nullptr.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    beginTransaction(): void;

    /**
     * Commit the the sql you have executed.
     *
     * @throws { BusinessError } 401 - Parameter error. The store must not be nullptr.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    commit(): void;

    /**
     * Roll back the sql you have already executed.
     *
     * @throws { BusinessError } 401 - Parameter error. The store must not be nullptr.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - Database corrupted.
     * @throws { BusinessError } 14800014 - Already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20
     */
    rollBack(): void;
  }

  /**
   * Obtains a RDB store.
   * You can set parameters of the RDB store as required. In general, this method is recommended
   * to obtain a rdb store.
   *
   * @param { Context } context - Indicates the context of an application or ability.
   * @param { StoreConfig } config - Indicates the {@link StoreConfig} configuration of the database related to this RDB
   * store.
   * @param { AsyncCallback<RdbStore> } callback - The RDB store {@link RdbStore}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Invalid database path.
   * @throws { BusinessError } 14800011 - Database corrupted.
   * @throws { BusinessError } 14801001 - Only supported in stage mode.
   * @throws { BusinessError } 14801002 - The data group id is not valid.
   * @throws { BusinessError } 14800017 - Config changed.
   * @throws { BusinessError } 14800021 - SQLite: Generic error.
   * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
   * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
   * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
   * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
   * @throws { BusinessError } 14800029 - SQLite: The database is full.
   * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  export function getRdbStore(context: Context, config: StoreConfig, callback: AsyncCallback<RdbStore>): void;

  /**
   * Obtains a RDB store.
   * You can set parameters of the RDB store as required. In general, this method is recommended
   * to obtain a rdb store.
   *
   * @param { Context } context - Indicates the context of an application or ability.
   * @param { StoreConfig } config - Indicates the {@link StoreConfig} configuration of the database related to this RDB
   * store.
   * @returns { Promise<RdbStore> } The RDB store {@link RdbStore}.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   * <br>2. Incorrect parameter types.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Invalid database path.
   * @throws { BusinessError } 14800011 - Database corrupted.
   * @throws { BusinessError } 14801001 - Only supported in stage mode.
   * @throws { BusinessError } 14801002 - The data group id is not valid.
   * @throws { BusinessError } 14800017 - Config changed.
   * @throws { BusinessError } 14800021 - SQLite: Generic error.
   * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
   * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
   * @throws { BusinessError } 14800029 - SQLite: The database is full.
   * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20
   */
  export function getRdbStore(context: Context, config: StoreConfig): Promise<RdbStore>;
}

export default relationalStore;
