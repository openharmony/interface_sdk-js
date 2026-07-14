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
 * 端云共享Extension，提供第三方厂商适配共享云服务的能力。
 * 通过实现端云共享Extension提供的接口，将端侧的数据共享到服务端，实现端云共享的发起、取消或退出，更改共享数据的操作权限、查询共享参与者、根据共享邀请码查询共享参与者、确认或更改共享邀请，并支持返回共享云服务的相关结果。
 * 其中，端云共享资源标识是指：对于应用发起共享的每一条数据记录，该条数据在进行端云同步时会生成唯一的共享资源标识（字符串类型的值），此标识作为该条数据记录共享时的识别标识。
 * 端云共享参与者是指：共享发起者根据好友列表选中的参与当前数据共享的所有人员。
 * 端云共享邀请码是指：共享发起后，在共享的服务端会生成当前共享操作的邀请码，并将该邀请码附加到当前共享邀请中，通过推送消息推送到被邀请者的设备端，被邀请者可以通过该邀请码进行邀请的确认。
 * 同步云是指：端云同步的服务端，即同应用同账号跨设备的同步。
 * 共享云是指：端云共享的服务端，即同应用跨账号跨设备的共享。
 *
 * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace cloudExtension {
  /**
   * 云资产的信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CloudAsset extends relationalStore.Asset {
    /**
     * 资产ID。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    assetId: string;

    /**
     * 资产的修改时间和大小转换成的哈希值。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    hash: string;
  }

  /**
   * 表示CloudAsset类型的数组。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  type CloudAssets = Array<CloudAsset>;

  /**
   * 表示云数据字段可使用的类型。各接口参数的实际类型视其功能而定。
   *
   * @unionmember { null } 表示值的类型为空。
   * @unionmember { long } 表示值的类型为数字类型。
   * @unionmember { double } 表示值的类型为数字类型。
   * @unionmember { string } 表示值的类型为字符串类型。
   * @unionmember { boolean } 表示值的类型为布尔类型。
   * @unionmember { Uint8Array } 表示值的类型为Uint8Array类型。
   * @unionmember { CloudAsset } 表示值的类型为云资产类型。
   * @unionmember { CloudAssets } 表示值的类型为云资产数组类型。
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  
   type CloudType = null | long | double | string | boolean | Uint8Array | CloudAsset | CloudAssets;

  /**
   * 云信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CloudInfo {
    /**
     * 云服务信息。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    cloudInfo: ServiceInfo;

    /**
     * 简要应用信息。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    apps: Record<string, AppBriefInfo>;
  }

  /**
   * 云服务信息
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ServiceInfo {
    /**
     * 表示是否启用了云服务。true表示启用云服务，false表示未启用
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    enableCloud: boolean;

    /**
     * 使用哈希函数SHA256生成的云账号ID。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    id: string;

    /**
     * 服务器上账号的总空间（KB）。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    totalSpace: long;

    /**
     * 服务器上账号的可用空间（KB）。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    remainingSpace: long;

    /**
     * 设备的当前用户ID。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    user: int;
  }

  /**
   * 简要应用信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface AppBriefInfo {
    /**
     * 应用程序ID。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    appId: string;

    /**
     * 应用包名。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 应用程序的云开关。true表示启用云，false表示不启用云。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    cloudSwitch: boolean;

    /**
     * 应用分身ID，0表示应用本身，分身ID依次递增。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    instanceId: int;
  }

  /**
   * 描述数据库表中字段类型的枚举。请使用枚举名而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum FieldType {
    /**
     * 类型为空。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NULL = 0,

    /**
     * 数值类型。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NUMBER = 1,

    /**
     * 双精度浮点类型。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    REAL = 2,

    /**
     * 文本类型。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    TEXT = 3,

    /**
     * 布尔类型。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    BOOL = 4,

    /**
     * 二进制大对象类型，可以存储二进制文件。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    BLOB = 5,

    /**
     * 资产类型。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET = 6,

    /**
     * 资产列表类型。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ASSETS = 7
  }

  /**
   * 数据库中的字段结构。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Field {
    /**
     * 该字段在服务器表中的别名。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    alias: string;

    /**
     * 列名。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    colName: string;

    /**
     * 字段类型。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    type: FieldType;

    /**
     * 当前列是否为主键。true表示是主键，false表示不是主键。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    primary: boolean;

    /**
     * 当前列是否允许为空值。true表示允许为空，false表示不允许为空。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    nullable: boolean;
  }

  /**
   * 表结构信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Table {
    /**
     * 该表在服务器数据库中的别名。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    alias: string;

    /**
     * 表名。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 数据库表中的字段结构信息。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    fields: Array<Field>;
  }

  /**
   * 数据库结构信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Database {
    /**
     * 数据库名称。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 该数据库在服务器中的别名。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    alias: string;

    /**
     * 数据库中的表，包含数据详细信息。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    tables: Array<Table>;
  }

  /**
   * 应用数据库模式。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface AppSchema {

    /**
     * 应用包名。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 数据库模式的版本。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    version: int;

    /**
     * 应用的数据库信息。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    databases: Array<Database>;
  }

  /**
   * 云数据。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CloudData {
    /**
     * 查询游标。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    nextCursor: string;

    /**
     * 服务器是否存在更多数据可供查询。true表示服务器上还有数据等待查询，false表示服务器上不存在可查询的数据。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    hasMore: boolean;

    /**
     * 需要查询数据的数组，包括数据记录的实际值和ExtensionValue（扩展值）。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    values: Array<Record<string, CloudType>>;
  }

  /**
   * 订阅信息
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface SubscribeInfo {
    /**
     * 订阅过期时间（ms）。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    expirationTime: long;

    /**
     * 订阅信息。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    subscribe: Record<string, Array<SubscribeId>>;
  }

  /**
   * 订阅ID。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface SubscribeId {
    /**
     * 服务器上数据库的名称。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    databaseAlias: string;

    /**
     * 订阅ID。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    id: string;
  }

  /**
   * 描述数据库上执行操作的枚举。请使用枚举名而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum Flag {
    /**
     * 插入操作。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    INSERT = 0,

    /**
     * 更新操作。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UPDATE = 1,

    /**
     * 删除操作。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DELETE = 2
  }

  /**
   * 当前数据记录的扩展信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ExtensionValue {
    /**
     * 执行插入操作时系统自动生成的ID。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    readonly id: string;

    /**
     * 创建行数据的时间（ms）。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    readonly createTime: long;

    /**
     * 修改行数据的时间（ms）。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    readonly modifyTime: long
    /**
     * 对行数据所做的操作。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    readonly operation: Flag;
  }

  /**
   * 云数据库锁信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface LockInfo {
    /**
     * 云数据库锁的持续时间，单位为s。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    interval: int;

    /**
     * 锁ID。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    lockId: int;
  }

  /**
   * 表示端云同步过程的状态。请使用枚举名而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export enum ErrorCode {
    /**
     * 表示端云同步过程成功。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SUCCESS = 0,

    /**
     * 表示端云同步过程中遇到未知错误。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    UNKNOWN_ERROR = 1,

    /**
     * 表示端云同步过程中遇到网络错误。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NETWORK_ERROR = 2,

    /**
     * 表示云同步开关未开启，请检查云空间同步开关状态。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    CLOUD_DISABLED = 3,

    /**
     * 表示有其他设备正在进行端云同步，本设备无法进行端云同步。请确保无其他设备占用端云资源后，再使用本设备进行端云同步任务。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    LOCKED_BY_OTHERS = 4,

    /**
     * 表示本次端云同步需要同步的条目或大小超出最大值。由云端配置最大值。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    RECORD_LIMIT_EXCEEDED = 5,

    /**
     * 表示云空间剩余空间小于待同步的资产大小。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    NO_SPACE_FOR_ASSET = 6
  }

  /**
   * 端云共享结果的返回值。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface Result<T> {
    /**
     * 错误码。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    code: int;

    /**
     * 错误码详细描述，默认为undefined。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * 返回结果的值，具体类型由参数T指定，默认为undefined。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    value?: T;
  }

  /**
   * 根据ShareCenter类的实例创建对应的RemoteObject对象，系统内部通过该对象调用ShareCenter的实现接口，使用Promise异步回调。
   *
   * @param { ShareCenter } instance - ShareCenter类的实例。
   * @returns { Promise<rpc.RemoteObject> } Promise对象，返回ShareCenter的RemoteObject对象。
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function createShareServiceStub(instance: ShareCenter): Promise<rpc.RemoteObject>;

  /**
   * 根据CloudService类的实例创建对应的RemoteObject对象，系统内部通过该对象调用CloudService的实现接口。使用Promise异步回调。
   *
   * @param { CloudService } instance - CloudService类的实例。
   * @returns { Promise<rpc.RemoteObject> } Promise对象，返回CloudService的RemoteObject对象。
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function createCloudServiceStub(instance: CloudService): Promise<rpc.RemoteObject>;

  /**
   * 根据CloudDB类的实例创建对应的RemoteObject对象，系统内部通过该对象调用CloudDB的实现接口，使用Promise异步回调。
   *
   * @param { CloudDB } instance - CloudDB类的实例。
   * @returns { Promise<rpc.RemoteObject> } Promise对象，返回CloudDB的rpc.RemoteObject对象。
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function createCloudDBStub(instance: CloudDB): Promise<rpc.RemoteObject>;

  /**
   * 根据AssetLoader类的实例创建对应的RemoteObject对象，系统内部通过该对象调用AssetLoader的实现接口，使用Promise异步回调。
   *
   * @param { AssetLoader } instance - 表示一个AssetLoader类型的实例。
   * @returns { Promise<rpc.RemoteObject> } Promise对象，返回AssetLoader的rpc.RemoteObject对象。
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function createAssetLoaderStub(instance: AssetLoader): Promise<rpc.RemoteObject>;

  /**
   * 提供云数据库操作接口的类。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CloudDB {
    /**
     * 为插入的云数据生成具有唯一性的ID。使用Promise异步回调。
     *
     * @param { int } count - 表示要生成ID的数量。取值范围大于等于1。
     * @returns { Promise<Result<Array<string>>> } Promise对象，以Result结构将生成的ID以数组形式返回。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    generateId(count: int): Promise<Result<Array<string>>>;

    /**
     * 将数据插入云数据库表中。使用Promise异步回调。
     *
     * @param { string } table - 表名。
     * @param { Array<Record<string, CloudType>> } values - 表示要插入的数据。
     * @param { Array<Record<string, CloudType>> } extensions - 表示当前数据的扩展信息。
     * @returns { Promise<Array<Result<Record<string, CloudType>>>> } Promise对象，返回插入的数据和插入结果。
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
     * 通过该接口更新云上的数据。使用Promise异步回调。
     *
     * @param { string } table - 表名。
     * @param { Array<Record<string, CloudType>> } values - 表示要更新的数据。
     * @param { Array<Record<string, CloudType>> } extensions - 表示当前数据的扩展信息。
     * @returns { Promise<Array<Result<Record<string, CloudType>>>> } Promise对象，返回更新的数据和更新结果。
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
     * 删除云数据库表中的指定数据。使用Promise异步回调。
     *
     * @param { string } table - 表名。
     * @param { Array<Record<string, CloudType>> } extensions - 表示当前数据的扩展信息。
     * @returns { Promise<Array<Result<Record<string, CloudType>>>> } Promise对象，返回被删除的数据和删除结果。
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
     * 在云数据库表中查询数据。使用Promise异步回调。
     *
     * @param { string } table - 表名。
     * @param { Array<string> } fields - 表示要查询的字段名数组。
     * @param { int } queryCount - 表示要查询的数据记录条数。取值范围大于等于1。
     * @param { string } queryCursor - 表示要查询的游标。
     * @returns { Promise<Result<CloudData>> } Promise对象，返回被查询的数据和查询结果。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    query(table: string, fields: Array<string>, queryCount: int, queryCursor: string): Promise<Result<CloudData>>;

    /**
     * 为云数据库加锁。使用Promise异步回调。
     *
     * @returns { Promise<Result<LockInfo>> } Promise对象，返回加锁的信息，包含加锁时长和锁的ID。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    lock(): Promise<Result<LockInfo>>;

    /**
     * 延长数据库的加锁时效。使用Promise异步回调。
     *
     * @param { int } lockId - 表示需要延时的锁ID，取值为lock方法返回的LockInfo中的lockId。
     * @returns { Promise<Result<LockInfo>> } Promise对象，返回锁的信息，包含加锁时长和锁的ID。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    heartbeat(lockId: int): Promise<Result<LockInfo>>;

    /**
     * 为云数据库解锁。使用Promise异步回调。
     *
     * @param { int } lockId - 表示锁的ID，取值为lock方法返回的LockInfo中的lockId。
     * @returns { Promise<Result<boolean>> } Promise对象，返回解锁结果，true表示解锁成功，false表示解锁失败。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    unlock(lockId: int): Promise<Result<boolean>>;
  }

  /**
   * 提供资产上传下载接口的类。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface AssetLoader {
    /**
     * 通过该接口实现资产的下载。使用Promise异步回调。
     *
     * @param { string } table - 表名。
     * @param { string } gid - 数据上云后生成的唯一标记。
     * @param { string } prefix - 表示资产下载目录的前缀信息。
     * @param { Array<CloudAsset> } assets - 表示需要下载的资产。
     * @returns { Promise<Array<Result<CloudAsset>>> } Promise对象，返回资产下载结果，包含资产ID和资产哈希值。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    download(table: string, gid: string, prefix: string, assets: Array<CloudAsset>): Promise<Array<Result<CloudAsset>>>;

    /**
     * 通过该接口实现资产的上传。使用Promise异步回调。
     *
     * @param { string } table - 表名。
     * @param { string } gid - 表示GID，数据上云后生成的唯一标记。
     * @param { Array<CloudAsset> } assets - 表示需要上传的资产。
     * @returns { Promise<Array<Result<CloudAsset>>> } Promise对象，返回资产上云的结果，包含资产ID和资产哈希值。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    upload(table: string, gid: string, assets: Array<CloudAsset>): Promise<Array<Result<CloudAsset>>>;
  }

  /**
   * 提供对接共享云服务的类。开发者需要继承此类并实现类的接口，系统内部通过该类的接口连接并使用共享云服务，实现端云共享的发起、取消或退出等能力。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface ShareCenter {
    /**
     * 发起端云共享邀请。共享邀请时，需指定当前发起共享的应用、共享数据的资源标识和共享参与者，使用Promise异步回调。
     *
     * @param { int } userId - 表示用户账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { string } sharingResource - 端云共享资源的标识。
     * @param { Array<cloudData.sharing.Participant> } participants - 端云共享参与者。
     * @returns { Promise<Result<Array<Result<cloudData.sharing.Participant>>>> } Promise对象，返回发起共享的结果。
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
     * 取消端云共享。取消共享时，需指定当前取消共享的应用、取消共享数据的资源标识和取消共享的参与者，使用Promise异步回调。
     *
     * @param { int } userId - 表示用户账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { string } sharingResource - 端云共享数据的资源标识。
     * @param { Array<cloudData.sharing.Participant> } participants - 端云共享参与者。
     * @returns { Promise<Result<Array<Result<cloudData.sharing.Participant>>>> } Promise对象，返回取消共享的结果。
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
     * 退出端云共享。退出共享时，需指定当前退出共享的应用以及退出共享数据的资源标识，使用Promise异步回调。
     *
     * @param { int } userId - 表示用户账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { string } sharingResource - 端云共享资源标识。
     * @returns { Promise<Result<void>> } Promise对象，返回退出共享的结果。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    exit(userId: int, bundleName: string, sharingResource: string): Promise<Result<void>>;

    /**
     * 更改已共享数据的操作权限。更改权限时，需指定当前更改权限的应用、更改权限数据的资源标识和更改权限的参与者，使用Promise异步回调。
     *
     * @param { int } userId - 表示用户账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { string } sharingResource - 端云共享资源标识。
     * @param { Array<cloudData.sharing.Participant> } participants - 端云共享参与者。
     * @returns { Promise<Result<Array<Result<cloudData.sharing.Participant>>>> } Promise对象，返回更改权限的结果。
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
     * 查询当前端云共享的参与者。查询时，需指定当前查询参与者的应用、查询参与者数据的资源标识，使用Promise异步回调。
     *
     * @param { int } userId - 表示用户账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { string } sharingResource - 端云共享资源标识。
     * @returns { Promise<Result<Array<cloudData.sharing.Participant>>> } Promise对象，返回查询共享参与者的结果。
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
     * 根据邀请码查询端云共享参与者。查询时，需指定当前查询参与者的应用、共享数据的邀请码，使用Promise异步回调。
     *
     * @param { int } userId - 表示用户账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { string } invitationCode - 端云共享邀请码。
     * @returns { Promise<Result<Array<cloudData.sharing.Participant>>> } Promise对象，返回根据邀请码查询共享参与者的结果。
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
     * 被邀请者确认端云共享邀请。确认时，需指定当前确认邀请的应用、共享数据的邀请码以及确认状态，使用Promise异步回调。
     *
     * @param { int } userId - 表示用户账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { string } invitationCode - 端云共享邀请码。
     * @param { cloudData.sharing.State } state - 共享邀请的确认状态。
     * @returns { Promise<Result<string>> } Promise对象，返回确认端云共享邀请数据的共享资源标识。
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
     * 更改端云共享邀请。更改共享邀请时，需指定当前更改共享邀请的应用、共享数据的共享资源标识以及更改的状态，使用Promise异步回调。
     *
     * @param { int } userId - 表示用户账号ID。
     * @param { string } bundleName - 应用包名。
     * @param { string } sharingResource - 端云共享资源标识。
     * @param { cloudData.sharing.State } state - 共享邀请的更改状态。
     * @returns { Promise<Result<void>> } Promise对象，返回更改共享邀请的结果。
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
   * 提供对接同步云服务的类。开发者需要继承此类并实现类的接口，系统内部通过该类的接口连接并使用同步云服务。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export interface CloudService {
    /**
     * 获取服务器上的信息。使用Promise异步回调。
     *
     * @returns { Promise<ServiceInfo> } Promise对象，返回获取的服务器信息。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getServiceInfo(): Promise<ServiceInfo>;

    /**
     * 获取简要应用信息。使用Promise异步回调。
     *
     * @returns { Promise<Record<string, AppBriefInfo>> } Promise对象，返回以bundleName为键、AppBriefInfo为值的键值对。
     *     in KV pairs.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getAppBriefInfo(): Promise<Record<string, AppBriefInfo>>;

    /**
     * 获取应用Schema（数据库模式）信息。使用Promise异步回调。
     *
     * @param { string } bundleName - 应用包名。
     * @returns { Promise<Result<AppSchema>> } Promise对象，返回数据库的schema信息。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getAppSchema(bundleName: string): Promise<Result<AppSchema>>;

    /**
     * 订阅云数据库的变化通知。使用Promise异步回调。
     *
     * @param { Record<string, Array<Database>> } subInfo - 需要订阅的数据，由应用包名称和数据库信息组成的键值对。
     * @param { long } expirationTime - 表示订阅到期时间（ms）。
     * @returns { Promise<Result<SubscribeInfo>> } Promise对象，返回订阅的结果，包含订阅的过期时间和订阅信息。
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
     * 取消已订阅的云数据变化通知。使用Promise异步回调。
     *
     * @param { Record<string, Array<string>> } unsubscribeInfo - 需要取消订阅的数据信息，由应用包名和数据库名组成的键值对。
     * @returns { Promise<int> } Promise对象，返回取消订阅结果的错误码。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    unsubscribe(unsubscribeInfo: Record<string, Array<string>>): Promise<int>;

    /**
     * 系统内部通过该接口获取CloudDB的RemoteObject对象，可以通过createCloudDBStub接口进行创建，使用Promise异步回调。
     *
     * @param { string } bundleName - 应用包名。
     * @param { Database } database - 需要连接的数据库。
     * @returns { Promise<rpc.RemoteObject> } Promise对象，返回CloudDB的RemoteObject对象。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    connectDB(bundleName: string, database: Database): Promise<rpc.RemoteObject>;

    /**
     * 系统内部通过该接口获取AssetLoader的RemoteObject对象，可以通过createAssetLoaderStub接口进行创建，使用Promise异步回调。
     *
     * @param { string } bundleName - 应用包名。
     * @param { Database } database - 需要连接的数据库。
     * @returns { Promise<rpc.RemoteObject> } Promise对象，返回AssetLoader的RemoteObject对象。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    connectAssetLoader(bundleName: string, database: Database): Promise<rpc.RemoteObject>;

    /**
     * 系统内部通过该接口获取ShareCenter的RemoteObject对象，可以通过createShareServiceStub接口进行创建，使用Promise异步回调。
     *
     * @param { int } userId - 表示用户账号ID。
     * @param { string } bundleName - 应用包名。
     * @returns { Promise<rpc.RemoteObject> } Promise对象，返回ShareCenter的RemoteObject对象。
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Server
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    connectShareCenter(userId: int, bundleName: string): Promise<rpc.RemoteObject>;
  }
}

export default cloudExtension;