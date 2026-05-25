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

import type rpc from './@ohos.rpc';
import type cloudData from './@ohos.data.cloudData';
import type relationalStore from './@ohos.data.relationalStore';

/**
 * The cloudExtension module provides APIs for third-party vendors to implement the device-cloud sharing service.
 * You can use these APIs to share the device data to the server and implement device-cloud data sharing,
 * including sharing and unsharing data, exiting a share,changing the privilege (operation permissions)
 * on the shared data, querying participants by data identifier or invitation code, 
 * and confirming or changing a sharing invitation.
 *
 * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace cloudExtension {
  /**
   * Represents the cloud asset information.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CloudAsset extends relationalStore.Asset {
    /**
     * Asset ID.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    assetId: string;

    /**
     * Hashed value of the asset modification time and size.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    hash: string;
  }

  /**
   * Represents an array of CloudAsset.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  type CloudAssets = Array<CloudAsset>;

  /**
   * Enumerates the types of the cloud data field. The specific type is determined by the parameter function.
   *
   * @unionmember { null } The value is null.
   * @unionmember { long } The value is a 64-bit integer (int64_t).
   * @unionmember { double } The value is a floating-point number (float).
   * @unionmember { string } The value is a string.
   * @unionmember { boolean } The value is true or false.
   * @unionmember { Uint8Array } The value is an array of 8-bit unsigned integers.
   * @unionmember { CloudAsset } The value is an instance of the Asset type.
   * @unionmember { CloudAssets } The value is an instance of the Assets type.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  
   type CloudType = null | long | double | string | boolean | Uint8Array | CloudAsset | CloudAssets;

  /**
   * Represents the cloud information.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CloudInfo {
    /**
     * Cloud service information.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    cloudInfo: ServiceInfo;

    /**
     * Brief application information.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    apps: Record<string, AppBriefInfo>;
  }

  /**
   * Represents the cloud service information.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ServiceInfo {
    /**
     * Whether the cloud service is enabled. The value true means that the cloud service is enabled,
     * and the value false means the opposite.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    enableCloud: boolean;

    /**
     * Cloud account ID generated using SHA-256.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * Total account space on the server, in KB.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    totalSpace: long;

    /**
     * Available account space on the server, in KB.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    remainingSpace: long;

    /**
     * Current user ID of the device.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    user: int;
  }

  /**
   * Represents the brief application information.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface AppBriefInfo {
    /**
     * Application ID.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    appId: string;

    /**
     * Bundle name of the application.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Whether the cloud service is enabled for the application.
     * The value true means the cloud service is enabled; the value false means the opposite.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    cloudSwitch: boolean;

    /**
     * Application twin ID.
     * The value 0 indicates the application itself, and the twin ID increases in ascending order.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    instanceId: int;
  }

  /**
   * Enumerates the types of the fields in a database table. Use the enum name rather than the enum value.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum FieldType {
    /**
     * NULL.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NULL = 0,

    /**
     * Number.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NUMBER = 1,

    /**
     * Double-precision floating point.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    REAL = 2,

    /**
     * Text.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    TEXT = 3,

    /**
     * Boolean.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    BOOL = 4,

    /**
     * BLOB, which can hold a binary file.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    BLOB = 5,

    /**
     * Asset. For details, see {@link relationalStore.Asset}.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET = 6,

    /**
     * Assets. For details, see {@link relationalStore.Assets}.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ASSETS = 7
  }

  /**
   * Represents a field in the database.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Field {
    /**
     * Alias of the field in the table.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    alias: string;

    /**
     * Name of the column, in which the field is located.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    colName: string;

    /**
     * Type of the field. For details, see {@link FieldType}.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    type: FieldType;

    /**
     * Whether the current column is the primary key.
     * The value true means the current column is the primary key; the value false means the opposite.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    primary: boolean;

    /**
     * Whether the current column can be null.
     * The value true means the current column can be null; the value false means the opposite.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    nullable: boolean;
  }

  /**
   * Represents the table information.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Table {
    /**
     * Alias of the table in the database.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    alias: string;

    /**
     * Table name.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Field information in the table.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    fields: Array<Field>;
  }

  /**
   * Represents the database information.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Database {
    /**
     * Name of the database.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Alias of the database on the server.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    alias: string;

    /**
     * Table in the database, including the detailed data information.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    tables: Array<Table>;
  }

  /**
   * Represents the application database schema.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface AppSchema {

    /**
     * Bundle name of the application.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * Version of the database schema.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    version: int;

    /**
     * Database information of the application.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    databases: Array<Database>;
  }

  /**
   * Represents the cloud data.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CloudData {
    /**
     * Cursor for data query.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    nextCursor: string;

    /**
     * Whether there is data to be queried on the server.
     * The value true means there is data to be queried on the server; the value false means the opposite.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    hasMore: boolean;

    /**
     * Array of data to be queried, which consists of the data value and ExtensionValue.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    values: Array<Record<string, CloudType>>;
  }

  /**
   * Represents the subscription information.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface SubscribeInfo {
    /**
     * Subscription expiration time, in ms.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    expirationTime: long;

    /**
     * Subscription information.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    subscribe: Record<string, Array<SubscribeId>>;
  }

  /**
   * Represents the subscription ID information.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface SubscribeId {
    /**
     * Name of the database on the server.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    databaseAlias: string;

    /**
     * Subscription ID.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    id: string;
  }

  /**
   * Enumerates the operations that can be performed on a database. Use the enum name rather than the enum value.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum Flag {
    /**
     * Insert data.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    INSERT = 0,

    /**
     * Update data.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UPDATE = 1,

    /**
     * Delete data.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DELETE = 2
  }

  /**
   * Represents additional information about a data record.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ExtensionValue {
    /**
     * ID generated when data is inserted.
     * An ID is generated for each row when data is first inserted to the cloud.
     * The ID must be unique for each table.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    readonly id: string;

    /**
     * Time when a row of data is created, in ms.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    readonly createTime: long;

    /**
     * Time when a row of data is modified, in ms.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    readonly modifyTime: long
    /**
     * Operation performed.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    readonly operation: Flag;
  }

  /**
   * Represents the cloud database lock information.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface LockInfo {
    /**
     * Lock period of the cloud database, in seconds.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    interval: int;

    /**
     * Lock ID.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    lockId: int;
  }

  /**
   * Enumerates the device-cloud sync states. Use the enum name rather than the enum value.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum ErrorCode {
    /**
     * The device-cloud sync is successful.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SUCCESS = 0,

    /**
     * An unknown error occurs during the device-cloud sync process.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UNKNOWN_ERROR = 1,

    /**
     * A network error occurs during the device-cloud sync process.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NETWORK_ERROR = 2,

    /**
     * Cloud sync is disabled.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    CLOUD_DISABLED = 3,

    /**
     * The device-cloud sync of another device is being performed.
     * The sync of the local device can be performed only when the device-cloud resources are available.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    LOCKED_BY_OTHERS = 4,

    /**
     * The number of records or size of the data to be synced exceeds the maximum.
     * The maximum value is configured on the cloud.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    RECORD_LIMIT_EXCEEDED = 5,

    /**
     * The remaining cloud space is less than the size of the data to be synced.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NO_SPACE_FOR_ASSET = 6
  }

  /**
   * Represents the data sharing result.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Result<T> {
    /**
     * Error code.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    code: int;

    /**
     * Detailed description of the error code. The default value is undefined.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * Value returned. The specific type is specified by the T parameter. The default value is undefined.
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    value?: T;
  }

  /**
   * Creates a RemoteObject instance based on a ShareCenter instance.
   * The system uses this object to call the APIs of the ShareCenter instance.
   * This API uses a promise to return the result.
   *
   * @param { ShareCenter } instance - Instance of the ShareCenter class.
   * @returns { Promise<rpc.RemoteObject> } Promise used to return the rpc.RemoteObject instance of ShareCenter.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function createShareServiceStub(instance: ShareCenter): Promise<rpc.RemoteObject>;

  /**
   * Creates a RemoteObject instance based on a CloudService instance.
   * The system uses this object to call the APIs of the CloudService instance.
   * This API uses a promise to return the result.
   *
   * @param { CloudService } instance - Instance of the CloudService class.
   * @returns { Promise<rpc.RemoteObject> } Promise used to return the rpc.RemoteObject instance of CloudService.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function createCloudServiceStub(instance: CloudService): Promise<rpc.RemoteObject>;

  /**
   * Creates a RemoteObject instance based on a CloudDB instance.
   * The system uses this object to call the APIs of the CloudDB instance.
   * This API uses a promise to return the result.
   *
   * @param { CloudDB } instance - CloudDB instance.
   * @returns { Promise<rpc.RemoteObject> } Promise used to return the rpc.RemoteObject instance of CloudDB.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function createCloudDBStub(instance: CloudDB): Promise<rpc.RemoteObject>;

  /**
   * Creates a RemoteObject instance based on an AssetLoader instance.
   * The system uses this object to call the APIs of the AssetLoader instance.
   * This API uses a promise to return the result.
   *
   * @param { AssetLoader } instance - AssetLoader instance.
   * @returns { Promise<rpc.RemoteObject> } Promise used to return the rpc.RemoteObject instance of AssetLoader.
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function createAssetLoaderStub(instance: AssetLoader): Promise<rpc.RemoteObject>;

  /**
   * Provides APIs for performing cloud database operations.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CloudDB {
    /**
     * Generates IDs for the data records inserted to the cloud database.
     * The IDs are unique. This API uses a promise to return the result.
     *
     * @param { int } count - Number of IDs to generate.
     * @returns { Promise<Result<Array<string>>> } Promise used to return the generated IDs in Result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    generateId(count: int): Promise<Result<Array<string>>>;

    /**
     * Inserts data to a cloud database table. This API uses a promise to return the result.
     *
     * @param { string } table - Table name.
     * @param { Array<Record<string, CloudType>> } values - Data to insert.
     * @param { Array<Record<string, CloudType>> } extensions - Extended information about the current data.
     * @returns { Promise<Array<Result<Record<string, CloudType>>>> } Promise used to return the inserted data and
     *     operation result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    insert(
      table: string,
      values: Array<Record<string, CloudType>>,
      extensions: Array<Record<string, CloudType>>
    ): Promise<Array<Result<Record<string, CloudType>>>>;

    /**
     * Updates data in the cloud. This API uses a promise to return the result.
     *
     * @param { string } table - Table name.
     * @param { Array<Record<string, CloudType>> } values - Data to insert.
     * @param { Array<Record<string, CloudType>> } extensions - Extended information about the current data.
     * @returns { Promise<Array<Result<Record<string, CloudType>>>> } Promise used to return the update result and
     *     updated data.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    update(
      table: string,
      values: Array<Record<string, CloudType>>,
      extensions: Array<Record<string, CloudType>>
    ): Promise<Array<Result<Record<string, CloudType>>>>;

    /**
     * Deletes data from a cloud database table. This API uses a promise to return the result.
     *
     * @param { string } table - Table name.
     * @param { Array<Record<string, CloudType>> } extensions - Extended information about the current data.
     * @returns { Promise<Array<Result<Record<string, CloudType>>>> } Promise used to return the deleted data and
     *     operation result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    delete(
      table: string,
      extensions: Array<Record<string, CloudType>>
    ): Promise<Array<Result<Record<string, CloudType>>>>;

    /**
     * Queries data in a cloud database table. This API uses a promise to return the result.
     *
     * @param { string } table - Table name.
     * @param { Array<string> } fields - Name of the fields to query.
     * @param { int } queryCount - Number of data records to query.
     * @param { string } queryCursor - Cursor for the query.
     * @returns { Promise<Result<CloudData>> } Promise used to return the data and operation result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    query(table: string, fields: Array<string>, queryCount: int, queryCursor: string): Promise<Result<CloudData>>;

    /**
     * Locks this cloud database. This API uses a promise to return the result.
     *
     * @returns { Promise<Result<LockInfo>> } Promise used to return the lock ID and lock period.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    lock(): Promise<Result<LockInfo>>;

    /**
     * Extends the lock period of the database. This API uses a promise to return the result.
     *
     * @param { int } lockId - Lock ID.
     * @returns { Promise<Result<LockInfo>> } Promise used to return the lock ID and lock period.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    heartbeat(lockId: int): Promise<Result<LockInfo>>;

    /**
     * Unlocks a cloud database. This API uses a promise to return the result.
     *
     * @param { int } lockId - Lock ID to release.
     * @returns { Promise<Result<boolean>> } Promise used to return the result.
     *     The value true means the operation is successful; the value false means the opposite.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    unlock(lockId: int): Promise<Result<boolean>>;
  }

  /**
   * Provides APIs for uploading and downloading assets.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface AssetLoader {
    /**
     * Downloads assets. This API uses a promise to return the result.
     *
     * @param { string } table - Table name.
     * @param { string } gid - Unique identifier generated for the data added to the cloud.
     * @param { string } prefix - Asset prefix information.
     * @param { Array<CloudAsset> } assets - Assets to download.
     * @returns { Promise<Array<Result<CloudAsset>>> } Promise used to return the asset download result,
     *     including the asset IDs and asset hash values.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    download(table: string, gid: string, prefix: string, assets: Array<CloudAsset>): Promise<Array<Result<CloudAsset>>>;

    /**
     * Uploads assets. This API uses a promise to return the result.
     *
     * @param { string } table - Table name.
     * @param { string } gid - Unique identifier generated for the data added to the cloud.
     * @param { Array<CloudAsset> } assets - Assets to upload.
     * @returns { Promise<Array<Result<CloudAsset>>> } Promise used to return the asset upload result,
     *     including the asset IDs and asset hash values.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    upload(table: string, gid: string, assets: Array<CloudAsset>): Promise<Array<Result<CloudAsset>>>;
  }

  /**
   * Provides APIs for interacting with the sharedCenter service.
   * You need to inherit this class and implement APIs of this class.
   * The system calls these APIs to initiate, cancel, or exit a device-cloud share.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ShareCenter {
    /**
     * Shares data. This API uses a promise to return the result.
     * The application that initiates the share, shared resource ID, participants of the share need to be specified.
     *
     * @param { int } userId - User ID.
     * @param { string } bundleName - Bundle name of the application.
     * @param { string } sharingResource - Shared resource ID.
     * @param { Array<cloudData.sharing.Participant> } participants - Participants of the share.
     * @returns { Promise<Result<Array<Result<cloudData.sharing.Participant>>>> } Promise used to return the result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    share(
      userId: int,
      bundleName: string,
      sharingResource: string,
      participants: Array<cloudData.sharing.Participant>
    ): Promise<Result<Array<Result<cloudData.sharing.Participant>>>>;

    /**
     * Unshares data. This API uses a promise to return the result.
     * The application, shared resource ID, and participants for the data to unshare need to be specified.
     *
     * @param { int } userId - User ID.
     * @param { string } bundleName - Bundle name of the application.
     * @param { string } sharingResource - Shared resource ID.
     * @param { Array<cloudData.sharing.Participant> } participants - Participants of the share.
     * @returns { Promise<Result<Array<Result<cloudData.sharing.Participant>>>> } Promise used to return the result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    unshare(
      userId: int,
      bundleName: string,
      sharingResource: string,
      participants: Array<cloudData.sharing.Participant>
    ): Promise<Result<Array<Result<cloudData.sharing.Participant>>>>;

    /**
     * Exits a device-cloud share. This API uses a promise to return the result.
     * The application and shared resource ID need to be specified.
     *
     * @param { int } userId - User ID.
     * @param { string } bundleName - Bundle name of the application.
     * @param { string } sharingResource - Shared resource ID.
     * @returns { Promise<Result<void>> } Promise used to return the result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    exit(userId: int, bundleName: string, sharingResource: string): Promise<Result<void>>;

    /**
     * Changes the privilege (operation permissions) on the shared data.
     * This API uses a promise to return the result.
     * The application, shared resource ID, and the participants with new privilege need to be specified.
     *
     * @param { int } userId - User ID.
     * @param { string } bundleName - Bundle name of the application.
     * @param { string } sharingResource - Shared resource ID.
     * @param { Array<cloudData.sharing.Participant> } participants - Participants of the share.
     * @returns { Promise<Result<Array<Result<cloudData.sharing.Participant>>>> } Promise used to return the result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    changePrivilege(
      userId: int,
      bundleName: string,
      sharingResource: string,
      participants: Array<cloudData.sharing.Participant>
    ): Promise<Result<Array<Result<cloudData.sharing.Participant>>>>;

    /**
     * Queries the participants of a share. This API uses a promise to return the result.
     * The application and shared resource ID need to be specified.
     *
     * @param { int } userId - User ID.
     * @param { string } bundleName - Bundle name of the application.
     * @param { string } sharingResource - Shared resource ID.
     * @returns { Promise<Result<Array<cloudData.sharing.Participant>>> } Promise used to return the result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    queryParticipants(
      userId: int,
      bundleName: string,
      sharingResource: string
    ): Promise<Result<Array<cloudData.sharing.Participant>>>;

    /**
     * Queries the participants of a share based on the invitation code.
     * This API uses a promise to return the result.
     * The application and the invitation code of the shared data need to be specified.
     *
     * @param { int } userId - User ID.
     * @param { string } bundleName - Bundle name of the application.
     * @param { string } invitationCode - Invitation code for the share.
     * @returns { Promise<Result<Array<cloudData.sharing.Participant>>> } Promise used to return the result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    queryParticipantsByInvitation(
      userId: int,
      bundleName: string,
      invitationCode: string
    ): Promise<Result<Array<cloudData.sharing.Participant>>>;

    /**
     * Confirms the invitation for a share. This API uses a promise to return the result.
     * The application, invitation code for the share, and the confirmation state need to be specified.
     *
     * @param { int } userId - User ID.
     * @param { string } bundleName - Bundle name of the application.
     * @param { string } invitationCode - Invitation code for the share.
     * @param { cloudData.sharing.State } state - Confirmation state of the invitation.
     * @returns { Promise<Result<string>> } Promise used to return the result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    confirmInvitation(
      userId: int,
      bundleName: string,
      invitationCode: string,
      state: cloudData.sharing.State
    ): Promise<Result<string>>;

    /**
     * Changes the confirmation state of a share invitation. This API uses a promise to return the result.
     * The application, shared resource ID, and the new conformation state need to be specified.
     * This API uses a promise to return the result.
     *
     * @param { int } userId - User ID.
     * @param { string } bundleName - Bundle name of the application.
     * @param { string } sharingResource - Shared resource ID.
     * @param { cloudData.sharing.State } state - New confirmation state.
     * @returns { Promise<Result<void>> } Promise used to return the result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    changeConfirmation(
      userId: int,
      bundleName: string,
      sharingResource: string,
      state: cloudData.sharing.State
    ): Promise<Result<void>>;
  }

  /**
   * Provides APIs for interacting with the cloud sync service.
   * You need to inherit this class and implement APIs of this class.
   * The system calls these APIs to connect to the cloud and use the cloud sync service.
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CloudService {
    /**
     * Obtains the server information. This API uses a promise to return the result.
     *
     * @returns { Promise<ServiceInfo> } Promise used to return the server information obtained.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getServiceInfo(): Promise<ServiceInfo>;

    /**
     * Obtains brief application information. This API uses a promise to return the result.
     *
     * @returns { Promise<Record<string, AppBriefInfo>> } Promise used to return bundleName and AppBriefInfo,
     *     in KV pairs.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getAppBriefInfo(): Promise<Record<string, AppBriefInfo>>;

    /**
     * Obtains the application database schema information. This API uses a promise to return the result.
     *
     * @param { string } bundleName - Bundle name of the application.
     * @returns { Promise<Result<AppSchema>> } Promise used to return the schema information obtained.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getAppSchema(bundleName: string): Promise<Result<AppSchema>>;

    /**
     * Subscribes to data. This API uses a promise to return the result.
     *
     * @param { Record<string, Array<Database>> } subInfo - Data to be subscribed to,
     *     in KV pairs of the application bundle name and database information.
     * @param { long } expirationTime - Subscription expiration time, in ms.
     * @returns { Promise<Result<SubscribeInfo>> } Promise used to return the result, 
     *     including the subscription expiration time and subscription information.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    subscribe(
      subInfo: Record<string, Array<Database>>,
      expirationTime: long
    ): Promise<Result<SubscribeInfo>>;

    /**
     * Unsubscribes from data changes in the cloud. This API uses a promise to return the result.
     *
     * @param { Record<string, Array<string>> } unsubscribeInfo - Data to be unsubscribed from,
     *     in an array of KV pairs consisting of the application bundle name and database information.
     * @returns { Promise<int> } Promise used to return the result.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    unsubscribe(unsubscribeInfo: Record<string, Array<string>>): Promise<int>;

    /**
     * Connects to a cloud database by obtaining a RemoteObject instance of CloudDB,
     * which is created by using createCloudDBStub. This API uses a promise to return the result.
     *
     * @param { string } bundleName - Bundle name of the application.
     * @param { Database } database - Database to connect.
     * @returns { Promise<rpc.RemoteObject> } Promise used to return the RemoteObject instance of CloudDB.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    connectDB(bundleName: string, database: Database): Promise<rpc.RemoteObject>;

    /**
     * Connects to an asset loader by obtaining a RemoteObject instance of AssetLoader,
     * which is created by using createAssetLoaderStub. This API uses a promise to return the result.
     * You can use this API to connect to the asset loader.
     *
     * @param { string } bundleName - Bundle name of the application.
     * @param { Database } database - Database to connect.
     * @returns { Promise<rpc.RemoteObject> } Promise used to return the rpc.RemoteObject instance of AssetLoader.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    connectAssetLoader(bundleName: string, database: Database): Promise<rpc.RemoteObject>;

    /**
     * Connects to ShareCenter by obtaining a RemoteObject instance of ShareCenter,
     * which is created by using createShareServiceStub. This API uses a promise to return the result.
     *
     * @param { int } userId - User ID.
     * @param { string } bundleName - Bundle name of the application.
     * @returns { Promise<rpc.RemoteObject> } Promise used to return the RemoteObject instance of ShareCenter.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    connectShareCenter(userId: int, bundleName: string): Promise<rpc.RemoteObject>;
  }
}

export default cloudExtension;