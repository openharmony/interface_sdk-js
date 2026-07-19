/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

/**
 * 分布式数据管理为应用程序提供不同设备间数据库的分布式协同能力。通过调用分布式数据各个接口，应用程序可将数据保存到分布式数据库中，并可对分布式数据库中的数据进行增加、删除、修改、查询、同步等操作。
 * 该模块提供以下分布式数据管理相关的常用功能：
 *
 * - [KVManager]{@link distributedData.KVManagerConfig}：数据管理实例，用于获取KVStore的相关信息。
 * - [KvStoreResultSet<sup>8+</sup>]{@link distributedData.KvStoreResultSet}：提供获取KVStore数据库结果集的相关方法，包括查询和移动数据读取位置等。
 * - [Query<sup>8+</sup>]{@link distributedData.Query}：使用谓词表示数据库查询，提供创建Query实例、查询数据库中的数据和添加谓词的方法。
 * - [KVStore]{@link distributedData.KVStoreType}：KVStore数据库实例，提供增加数据、删除数据和订阅数据变更、订阅数据同步完成的方法。
 * - [SingleKVStore]{@link distributedData.SingleKVStore}：单版本分布式数据库，继承自[KVStore]{@link distributedData.KVStoreType}，不对数据
 * 所属设备进行区分，提供查询数据和同步数据的方法。
 * - [DeviceKVStore<sup>8+</sup>]{@link distributedData.DeviceKVStore}：设备协同数据库，继承自
 * [KVStore]{@link distributedData.KVStoreType}，以设备维度对数据进行区分，提供查询数据和同步数据的方法。
 *
 * > **说明：**
 *
 * > - 从API Version 9开始，该接口不再维护，推荐使用新接口
 * > [`@ohos.data.distributedKVStore`]{@link @ohos.data.distributedKVStore:distributedKVStore}。
 *
 * > - 本模块中所有需要获取deviceId的接口，都仅系统应用可用。
 *
 * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead ohos.data.distributedKVStore
 */
declare namespace distributedData {
  /**
   * 提供KVManager实例的配置信息，包括调用方的Bundle名称和用户信息。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.KVManagerConfig
   */
  interface KVManagerConfig {
    /**
     * 调用方的用户信息。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    userInfo: UserInfo;

    /**
     * 调用方的Bundle名称。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVManagerConfig#bundleName
     */
    bundleName: string;
  }

  /**
   * 用户信息。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  interface UserInfo {
    /**
     * 指示要设置的用户ID，默认为'0'。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    userId?: string;

    /**
     * 指示要设置的用户类型，默认为0。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    userType?: UserType;
  }

  /**
   * 用户类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  enum UserType {
    /**
     * 使用同一账号登录不同设备的用户。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    SAME_USER_ID = 0
  }

  /**
   * KVStore常量。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.Constants
   */
  namespace Constants {
    /**
     * 数据库中Key允许的最大长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Constants#MAX_KEY_LENGTH
     */
    const MAX_KEY_LENGTH = 1024;

    /**
     * 数据库中Value允许的最大长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Constants#MAX_VALUE_LENGTH
     */
    const MAX_VALUE_LENGTH = 4194303;

    /**
     * 设备密钥长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Constants#MAX_KEY_LENGTH_DEVICEs
     */
    const MAX_KEY_LENGTH_DEVICE = 896;

    /**
     * 数据库标识符允许的最大长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Constants#MAX_STORE_ID_LENGTH
     */
    const MAX_STORE_ID_LENGTH = 128;

    /**
     * 最大查询长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Constants#MAX_QUERY_LENGTH
     */
    const MAX_QUERY_LENGTH = 512000;

    /**
     * 最大批处理操作数量。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Constants#MAX_BATCH_SIZE
     */
    const MAX_BATCH_SIZE = 128;
  }

  /**
   * 数据类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.ValueType
   */
  enum ValueType {
    /**
     * 表示值类型为字符串。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.ValueType#STRING
     */
    STRING = 0,

    /**
     * 表示值类型为整数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.ValueType#INTEGER
     */
    INTEGER = 1,

    /**
     * 表示值类型为浮点数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.ValueType#FLOAT
     */
    FLOAT = 2,

    /**
     * 表示值类型为字节数组。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.ValueType#BYTE_ARRAY
     */
    BYTE_ARRAY = 3,

    /**
     * 表示值类型为布尔值。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.ValueType#BOOLEAN
     */
    BOOLEAN = 4,

    /**
     * 表示值类型为双浮点数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.ValueType#DOUBLE
     */
    DOUBLE = 5
  }

  /**
   * 存储在数据库中的值对象。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.Value
   */
  interface Value {
    /**
     * 值类型。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @memberof Value
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Value#type
     * @see ValueType
     */
    type: ValueType;
    /**
     * 值。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Value#value
     */
    value: Uint8Array | string | number | boolean;
  }

  /**
   * 存储在数据库中的键值对。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.Entry
   */
  interface Entry {
    /**
     * 键值。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Entry#key
     */
    key: string;
    /**
     * 值对象。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Entry#value
     */
    value: Value;
  }

  /**
   * 数据变更时通知的对象，包括数据插入的数据、更新的数据、删除的数据和设备ID。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.ChangeNotification
   */
  interface ChangeNotification {
    /**
     * 数据添加记录。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.ChangeNotification#insertEntries
     */
    insertEntries: Entry[];
    /**
     * 数据更新记录。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.ChangeNotification#updateEntries
     */
    updateEntries: Entry[];
    /**
     * 数据删除记录。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.ChangeNotification#deleteEntries
     */
    deleteEntries: Entry[];
    /**
     * 设备ID，此处为设备UUID。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.ChangeNotification#deviceId
     */
    deviceId: string;
  }

  /**
   * 同步模式枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.SyncMode
   */
  enum SyncMode {
    /**
     * 表示只能从远端拉取数据到本端。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SyncMode#PULL_ONLY
     */
    PULL_ONLY = 0,
    /**
     * 表示只能从本端推送数据到远端。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SyncMode#PUSH_ONLY
     */
    PUSH_ONLY = 1,
    /**
     * 表示从本端推送数据到远端，然后从远端拉取数据到本端。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SyncMode#PUSH_PULL
     */
    PUSH_PULL = 2
  }

  /**
   * 订阅类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.SubscribeType
   */
  enum SubscribeType {
    /**
     * 表示订阅本地数据变更。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SubscribeType#SUBSCRIBE_TYPE_LOCAL
     */
    SUBSCRIBE_TYPE_LOCAL = 0,

    /**
     * 表示订阅远端数据变更。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SubscribeType#SUBSCRIBE_TYPE_REMOTE
     */
    SUBSCRIBE_TYPE_REMOTE = 1,

    /**
     * 表示订阅远端和本地数据变更。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SubscribeType#SUBSCRIBE_TYPE_ALL
     */
    SUBSCRIBE_TYPE_ALL = 2
  }

  /**
   * KVStore数据库类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.KVStoreType
   */
  enum KVStoreType {
    /**
     * 表示多设备协同数据库。
     *
     * **数据库特点：** 数据以设备的维度管理，不存在冲突；支持按照设备的维度查询数据。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreType#DEVICE_COLLABORATION
     */
    DEVICE_COLLABORATION = 0,

    /**
     * 表示单版本数据库。
     *
     * **数据库特点：** 数据不分设备，设备之间修改相同的key会覆盖。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreType#SINGLE_VERSION
     */
    SINGLE_VERSION = 1,

    /**
     * 表示多版本数据库。当前暂不支持使用此接口。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    MULTI_VERSION = 2
  }

  /**
   * 数据库的安全级别枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.SecurityLevel
   */
  enum SecurityLevel {
    /**
     * 表示数据库不设置安全级别(已废弃)。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    NO_LEVEL = 0,

    /**
     * 表示数据库的安全级别为公共级别(已废弃)。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     */
    S0 = 1,

    /**
     * 表示数据库的安全级别为低级别，当数据泄露时会产生较低影响。例如，包含壁纸等系统数据的数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SecurityLevel#S1
     */
    S1 = 2,

    /**
     * 表示数据库的安全级别为中级别，当数据泄露时会产生较大影响。例如，包含录音、视频等用户生成数据或通话记录等信息的数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SecurityLevel#S2
     */
    S2 = 3,

    /**
     * 表示数据库的安全级别为高级别，当数据泄露时会产生重大影响。例如，包含用户运动、健康、位置等信息的数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SecurityLevel#S3
     */
    S3 = 5,

    /**
     * 表示数据库的安全级别为关键级别，当数据泄露时会产生严重影响。例如，包含认证凭据、财务数据等信息的数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SecurityLevel#S4
     */
    S4 = 6
  }

  /**
   * 用于提供创建数据库的配置信息。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.Options
   */
  interface Options {
    /**
     * 当数据库文件不存在时是否创建数据库，默认为true，即创建。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Options#createIfMissing
     */
    createIfMissing?: boolean;
    /**
     * 设置数据库文件是否加密，默认为false，即不加密。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Options#encrypt
     */
    encrypt?: boolean;
    /**
     * 设置数据库文件是否备份，默认为true，即备份。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Options#backup
     */
    backup?: boolean;
    /**
     * 设置数据库文件是否自动同步。默认为false，即手动同步。
     *
     * ohos.permission.DISTRIBUTED_DATASYNC
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Options#autoSync
     */
    autoSync?: boolean;
    /**
     * 设置要创建的数据库类型，默认为DEVICE_COLLABORATION，即多设备协同数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Options#kvStoreType
     */
    kvStoreType?: KVStoreType;
    /**
     * 设置数据库安全级别(S1-S4)。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Options#securityLevel
     */
    securityLevel?: SecurityLevel;
    /**
     * 设置定义存储在数据库中的值，默认为undefined，即不使用schema。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Options#schema
     */
    schema?: Schema;
  }

  /**
   * 表示数据库模式，可以在创建或打开数据库时创建Schema对象并将它们放入[Options]{@link distributedData.Options}中。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.Schema
   */
  class Schema {
    /**
     * 用于创建Schema实例的构造函数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Schema#constructor
     */
    constructor();

    /**
     * 表示json根对象。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Schema#root
     */
    root: FieldNode;
    /**
     * 表示json类型的字符串数组。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Schema#indexes
     */
    indexes: Array<string>;
    /**
     * 表示Schema的模式。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Schema#mode
     */
    mode: number;
    /**
     * Schema的跳跃大小。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Schema#skip
     */
    skip: number;
  }

  /**
   * 表示 Schema 实例的节点，提供定义存储在数据库中的值的方法。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.FieldNode
   */
  class FieldNode {
    /**
     * 用于创建带有string字段FieldNode实例的构造函数。
     *
     * @param { string } name - FieldNode的值。
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.FieldNode#constructor
     */
    constructor(name: string);

    /**
     * 在当前 FieldNode 中添加一个子节点。
     *
     * @param { FieldNode } child - 要附加的域节点。
     * @returns { boolean } 返回true表示子节点成功添加到FieldNode；返回false则表示操作失败。
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.FieldNode#appendChild
     */
    appendChild(child: FieldNode): boolean;

    /**
     * 表示Fieldnode的默认值。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.FieldNode#default
     */
    default: string;
    /**
     * 表示数据库字段是否可以为空。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.FieldNode#nullable
     */
    nullable: boolean;
    /**
     * 表示指定节点对应数据类型的值。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.FieldNode#type
     */
    type: number;
  }

  /**
   * 提供获取KVStore数据库结果集的相关方法，包括查询和移动数据读取位置等。
   * 在调用KvStoreResultSet的方法前，需要先通过
   * [getKVStore]{@link distributedData.KVManager.getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>)}
   * 构建一个KVStore实例。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.KVStoreResultSet
   */
  interface KvStoreResultSet {
    /**
     * 获取结果集中的总行数。
     *
     * @returns { number } 返回数据的总行数。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#getCount
     */
    getCount(): number;

    /**
     * 获取结果集中当前的读取位置。
     *
     * @returns { number } 返回当前读取位置。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#getPosition
     */
    getPosition(): number;

    /**
     * 将读取位置移动到第一行。如果结果集为空，则返回false。
     *
     * @returns { boolean } 返回true表示操作成功；返回false则表示操作失败。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#moveToFirst
     */
    moveToFirst(): boolean;

    /**
     * 将读取位置移动到最后一行。如果结果集为空，则返回false。
     *
     * @returns { boolean } 返回true表示操作成功；返回false则表示操作失败。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#moveToLast
     */
    moveToLast(): boolean;

    /**
     * 将读取位置移动到下一行。如果结果集为空，则返回false。
     *
     * @returns { boolean } 返回true表示操作成功；返回false则表示操作失败。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#moveToNext
     */
    moveToNext(): boolean;

    /**
     * 将读取位置移动到上一行。如果结果集为空，则返回false。
     *
     * @returns { boolean } 返回true表示操作成功；返回false则表示操作失败。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#moveToPrevious
     */
    moveToPrevious(): boolean;

    /**
     * 将读取位置移动到当前位置的相对偏移量。
     *
     * @param { number } offset - 表示与当前位置的相对偏移量，负偏移表示向后移动，正偏移表示向前移动。
     * @returns { boolean } 返回true表示操作成功；返回false则表示操作失败。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#move
     */
    move(offset: number): boolean;

    /**
     * 将读取位置从 0 移动到绝对位置。
     *
     * @param { number } position - 表示绝对位置。
     * @returns { boolean } 返回true表示操作成功；返回false则表示操作失败。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#moveToPosition
     */
    moveToPosition(position: number): boolean;

    /**
     * 检查读取位置是否为第一行。
     *
     * @returns { boolean } 返回true表示读取位置为第一行；返回false表示读取位置不是第一行。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#isFirst
     */
    isFirst(): boolean;

    /**
     * 检查读取位置是否为最后一行。
     *
     * @returns { boolean } 返回true表示读取位置为最后一行；返回false表示读取位置不是最后一行。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#isLast
     */
    isLast(): boolean;

    /**
     * 检查读取位置是否在第一行之前。
     *
     * @returns { boolean } 返回true表示读取位置在第一行之前；返回false表示读取位置不在第一行之前。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#isBeforeFirst
     */
    isBeforeFirst(): boolean;

    /**
     * 检查读取位置是否在最后一行之后。
     *
     * @returns { boolean } 返回true表示读取位置在最后一行之后；返回false表示读取位置不在最后一行之后。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#isAfterLast
     */
    isAfterLast(): boolean;

    /**
     * 从当前位置获取对应的键值对。
     *
     * @returns { Entry } 返回键值对。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVStoreResultSet#getEntry
     */
    getEntry(): Entry;
  }

  /**
   * 使用谓词表示数据库查询，提供创建Query实例、查询数据库中的数据和添加谓词的方法。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.Query
   */
  class Query {
    /**
     * 用于创建Query实例的构造函数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#constructor
     */
    constructor();

    /**
     * 重置Query对象。
     *
     * @returns { Query } 返回重置的Query对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#reset
     */
    reset(): Query;

    /**
     * 构造一个Query对象来查询具有指定字段的条目，其值等于指定的值。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @param { number | string | boolean } value - 表示指定的值。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#equalTo
     */
    equalTo(field: string, value: number | string | boolean): Query;

    /**
     * 构造一个Query对象以查询具有指定字段且值不等于指定值的条目。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @param { number | string | boolean } value - 表示指定的值。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#notEqualTo
     */
    notEqualTo(field: string, value: number | string | boolean): Query;

    /**
     * 构造一个Query对象以查询具有大于指定值的指定字段的条目。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @param { number | string | boolean } value - 表示指定的值。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#greaterThan
     */
    greaterThan(field: string, value: number | string | boolean): Query;

    /**
     * 构造一个Query对象以查询具有小于指定值的指定字段的条目。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @param { number | string } value - 表示指定的值。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#lessThan
     */
    lessThan(field: string, value: number | string): Query;

    /**
     * 构造一个Query对象以查询具有指定字段且值大于或等于指定值的条目。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @param { number | string } value - 表示指定的值。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#greaterThanOrEqualTo
     */
    greaterThanOrEqualTo(field: string, value: number | string): Query;

    /**
     * 构造一个Query对象以查询具有指定字段且值小于或等于指定值的条目。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @param { number | string } value - 表示指定的值。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#lessThanOrEqualTo
     */
    lessThanOrEqualTo(field: string, value: number | string): Query;

    /**
     * 构造一个Query对象以查询具有值为null的指定字段的条目。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#isNull
     */
    isNull(field: string): Query;

    /**
     * 构造一个Query对象以查询具有指定字段的条目，其值在指定的值列表中。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @param { number[] } valueList - 表示指定的值列表。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#inNumber
     */
    inNumber(field: string, valueList: number[]): Query;

    /**
     * 构造一个Query对象以查询具有指定字段的条目，其值在指定的字符串值列表中。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @param { string[] } valueList - 表示指定的字符串值列表。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#inString
     */
    inString(field: string, valueList: string[]): Query;

    /**
     * 构造一个Query对象以查询具有指定字段的条目，该字段的值不在指定的值列表中。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @param { number[] } valueList - 表示指定的值列表。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#notInNumber
     */
    notInNumber(field: string, valueList: number[]): Query;

    /**
     * 构造一个Query对象以查询具有指定字段且值不在指定字符串值列表中的条目。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @param { string[] } valueList - 表示指定的字符串值列表。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#notInString
     */
    notInString(field: string, valueList: string[]): Query;

    /**
     * 构造一个Query对象以查询具有与指定字符串值相似的指定字段的条目。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @param { string } value - 表示指定的字符串值。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#like
     */
    like(field: string, value: string): Query;

    /**
     * 构造一个Query对象以查询具有与指定字符串值不相似的指定字段的条目。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @param { string } value - 表示指定的字符串值。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#unlike
     */
    unlike(field: string, value: string): Query;

    /**
     * 构造一个带有与条件的查询对象。
     *
     * @returns { Query } 返回查询对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#and
     */
    and(): Query;

    /**
     * 构造一个带有或条件的Query对象。
     *
     * @returns { Query } 返回查询对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#or
     */
    or(): Query;

    /**
     * 构造一个Query对象，将查询结果按升序排序。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#orderByAsc
     */
    orderByAsc(field: string): Query;

    /**
     * 构造一个Query对象，将查询结果按降序排序。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#orderByDesc
     */
    orderByDesc(field: string): Query;

    /**
     * 构造一个Query对象来指定结果的数量和开始位置。
     *
     * @param { number } total - 表示指定的结果数。
     * @param { number } offset - 表示起始位置。
     * @returns { Query } 返回Query对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#limit
     */
    limit(total: number, offset: number): Query;

    /**
     * 构造一个Query对象以查询具有值不为null的指定字段的条目。
     *
     * @param { string } field - 表示指定字段，不能包含' ^ '。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#isNotNull
     */
    isNotNull(field: string): Query;

    /**
     * 创建一个带有左括号的查询条件组。
     *
     * @returns { Query } 返回Query对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#beginGroup
     */
    beginGroup(): Query;

    /**
     * 创建一个带有右括号的查询条件组。
     *
     * @returns { Query } 返回Query对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#endGroup
     */
    endGroup(): Query;

    /**
     * 创建具有指定键前缀的查询条件。
     *
     * @param { string } prefix - 表示指定的键前缀。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#prefixKey
     */
    prefixKey(prefix: string): Query;

    /**
     * 设置一个指定的索引，将优先用于查询。
     *
     * @param { string } index - 指示要设置的索引。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#setSuggestIndex
     */
    setSuggestIndex(index: string): Query;

    /**
     * 添加设备ID作为key的前缀。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 指示查询的设备ID。
     * @returns { Query } 返回Query对象。
     * @throws Throws this exception if input is invalid.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#deviceId
     */
    deviceId(deviceId: string): Query;

    /**
     * 获取Query对象的查询语句。
     *
     * @returns { string } 返回一个字段列中包含对应子串的结果。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.Query#getSqlLike
     */
    getSqlLike(): string;
  }

  /**
   * KVStore数据库实例，提供增加数据、删除数据和订阅数据变更、订阅数据同步完成的方法。
   * 在调用KVStore的方法前，需要先通过
   * [getKVStore]{@link distributedData.KVManager.getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>)}
   * 构建一个KVStore实例。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @version 1
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.SingleKVStore
   */
  interface KVStore {
    /**
     * 添加指定类型键值对到数据库，使用callback异步回调。
     *
     * @param { string } key - 要添加数据的key，不能为空且长度不大于[MAX_KEY_LENGTH]{@link distributedData.Constants}。
     * @param { Uint8Array | string | number | boolean } value - 要添加数据的value，支持Uint8Array、number 、 string 、boolean，Uint8Array、
     *     string 的长度不大于[MAX_VALUE_LENGTH]{@link distributedData.Constants}。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if any of the following errors
     *     occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#put
     */
    put(key: string, value: Uint8Array | string | number | boolean, callback: AsyncCallback<void>): void;

    /**
     * 添加指定类型键值对到数据库，使用Promise异步回调。
     *
     * @param { string } key - 要添加数据的key，不能为空且长度不大于[MAX_KEY_LENGTH]{@link distributedData.Constants}。
     * @param { Uint8Array | string | number | boolean } value - 要添加数据的value，支持Uint8Array、number 、 string 、boolean，Uint8Array、
     *     string 的长度不大于[MAX_VALUE_LENGTH]{@link distributedData.Constants}。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if any of the following errors
     *     occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#put
     */
    put(key: string, value: Uint8Array | string | number | boolean): Promise<void>;

    /**
     * 从数据库中删除指定键值的数据，使用callback异步回调。
     *
     * @param { string } key - 要删除数据的key，不能为空且长度不大于[MAX_KEY_LENGTH]{@link distributedData.Constants}。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if any of the following errors
     *     occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and
     *     {@code DB_ERROR}, and {@code KEY_NOT_FOUND}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#delete
     */
    delete(key: string, callback: AsyncCallback<void>): void;

    /**
     * 从数据库中删除指定键值的数据，使用Promise异步回调。
     *
     * @param { string } key - 要删除数据的key，不能为空且长度不大于[MAX_KEY_LENGTH]{@link distributedData.Constants}。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if any of the following errors
     *     occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and
     *     {@code DB_ERROR}, and {@code KEY_NOT_FOUND}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#delete
     */
    delete(key: string): Promise<void>;

    /**
     * 订阅指定类型的数据变更通知。
     *
     * @param { 'dataChange' } event - 订阅的事件名，固定为'dataChange'，表示数据变更事件。
     * @param { SubscribeType } type - 表示订阅的类型。
     * @param { Callback<ChangeNotification> } listener - 回调函数。
     * @throws Throws this exception if any of the following errors
     *     occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR},
     *     {@code DB_ERROR}, and {@code STORE_ALREADY_SUBSCRIBE}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#on
     */
    on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void;

    /**
     * 订阅同步完成事件回调通知。
     *
     * @param { 'syncComplete' } event - 订阅的事件名，固定为'syncComplete'，表示同步完成事件。
     * @param { Callback<Array<[string, number]>> } syncCallback - 回调函数。用于向调用方发送同步结果的回调。
     * @throws Throws this exception if any of the following errors
     *     occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR},
     *     {@code DB_ERROR}, and {@code STORE_ALREADY_SUBSCRIBE}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#on
     */
    on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;

    /**
     * 取消订阅数据变更通知。
     *
     * @param { 'dataChange' } event - 取消订阅的事件名，固定为'dataChange'，表示数据变更事件。
     * @param { Callback<ChangeNotification> } listener - 取消订阅的函数。如不设置callback，则取消所有订阅的函数。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#off
     */
    off(event: 'dataChange', listener?: Callback<ChangeNotification>): void;

    /**
     * 取消订阅同步完成事件回调通知。
     *
     * @param { 'syncComplete' } event - 取消订阅的事件名，固定为'syncComplete'，表示同步完成事件。
     * @param { Callback<Array<[string, number]>> } syncCallback - 取消订阅的函数。如不设置callback，则取消所有订阅的函数。
     * @throws Throws this exception if any of the following errors
     *     occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR},
     *     {@code DB_ERROR}, and {@code STORE_ALREADY_SUBSCRIBE}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#off
     */
    off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void;

    /**
     * 批量插入键值对到KVStore数据库中，使用callback异步回调。
     *
     * @param { Entry[] } entries - 表示要批量插入的键值对。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if a database error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#putBatch
     */
    putBatch(entries: Entry[], callback: AsyncCallback<void>): void;

    /**
     * 批量插入键值对到KVStore数据库中，使用Promise异步回调。
     *
     * @param { Entry[] } entries - 表示要批量插入的键值对。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if a database error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#putBatch
     */
    putBatch(entries: Entry[]): Promise<void>;

    /**
     * 批量删除KVStore数据库中的键值对，使用callback异步回调。
     *
     * @param { string[] } keys - 表示要批量删除的键值对。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if a database error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#deleteBatch
     */
    deleteBatch(keys: string[], callback: AsyncCallback<void>): void;

    /**
     * 批量删除KVStore数据库中的键值对，使用Promise异步回调。
     *
     * @param { string[] } keys - 表示要批量删除的键值对。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if a database error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#deleteBatch
     */
    deleteBatch(keys: string[]): Promise<void>;

    /**
     * 启动KVStore数据库中的事务，使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if a database error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#startTransaction
     */
    startTransaction(callback: AsyncCallback<void>): void;

    /**
     * 启动KVStore数据库中的事务，使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if a database error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#startTransaction
     */
    startTransaction(): Promise<void>;

    /**
     * 提交KVStore数据库中的事务，使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if a database error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#commit
     */
    commit(callback: AsyncCallback<void>): void;

    /**
     * 提交KVStore数据库中的事务，使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if a database error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#commit
     */
    commit(): Promise<void>;

    /**
     * 在KVStore数据库中回滚事务，使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if a database error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#rollback
     */
    rollback(callback: AsyncCallback<void>): void;

    /**
     * 在KVStore数据库中回滚事务，使用Promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if a database error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#rollback
     */
    rollback(): Promise<void>;

    /**
     * 设定是否开启同步，使用callback异步回调。
     *
     * @param { boolean } enabled - 设定是否开启同步，true表示开启同步，false表示不启用同步。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if an internal service error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#enableSync
     */
    enableSync(enabled: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设定是否开启同步，使用Promise异步回调。
     *
     * @param { boolean } enabled - 设定是否开启同步，true表示开启同步，false表示不启用同步。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if an internal service error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#enableSync
     */
    enableSync(enabled: boolean): Promise<void>;

    /**
     * 设置同步范围标签，使用callback异步回调。
     *
     * @param { string[] } localLabels - 表示本地设备的同步标签。
     * @param { string[] } remoteSupportLabels - 表示要同步数据的设备的同步标签。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if an internal service error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#setSyncRange
     */
    setSyncRange(localLabels: string[], remoteSupportLabels: string[], callback: AsyncCallback<void>): void;

    /**
     * 设置同步范围标签，使用Promise异步回调。
     *
     * @param { string[] } localLabels - 表示本地设备的同步标签。
     * @param { string[] } remoteSupportLabels - 表示要同步数据的设备的同步标签。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if an internal service error occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#setSyncRange
     */
    setSyncRange(localLabels: string[], remoteSupportLabels: string[]): Promise<void>;
  }

  /**
   * 单版本数据库，继承自[KVStore]{@link distributedData.KVStoreType}数据库，提供查询数据和同步数据的方法。
   * 单版本数据库，不对数据所属设备进行区分，不同设备使用相同键写入数据会互相覆盖。比如，可以使用单版本数据库实现个人日历、联系人数据在不同设备间的数据同步。
   * 在调用SingleKVStore的方法前，需要先通过
   * [getKVStore]{@link distributedData.KVManager.getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>)}
   * 构建一个SingleKVStore实例。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @version 1
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.SingleKVStore
   */
  interface SingleKVStore extends KVStore {
    /**
     * 获取指定键的值，使用callback异步回调。
     *
     * @param { string } key - 要查询数据的key，不能为空且长度不大于[MAX_KEY_LENGTH]{@link distributedData.Constants}。
     * @param { AsyncCallback<Uint8Array | string | boolean | number> } callback - 回调函数。返回获取查询的值。
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}, and {@code KEY_NOT_FOUND}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#get
     */
    get(key: string, callback: AsyncCallback<Uint8Array | string | boolean | number>): void;

    /**
     * 获取指定键的值，使用Promise异步回调。
     *
     * @param { string } key - 要查询数据的key，不能为空且长度不大于[MAX_KEY_LENGTH]{@link distributedData.Constants}。
     * @returns { Promise<Uint8Array | string | boolean | number> } Promise对象。返回获取查询的值。
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}, and {@code KEY_NOT_FOUND}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#get
     */
    get(key: string): Promise<Uint8Array | string | boolean | number>;

    /**
     * 获取匹配指定键前缀的所有键值对，使用callback异步回调。
     *
     * @param { string } keyPrefix - 表示要匹配的键前缀。
     * @param { AsyncCallback<Entry[]> } callback - 回调函数。返回匹配指定前缀的键值对列表。
     * @returns { void } Returns void.
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#getEntries
     */
    getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void;

    /**
     * 获取匹配指定键前缀的所有键值对，使用Promise异步回调。
     *
     * @param { string } keyPrefix - 表示要匹配的键前缀。
     * @returns { Promise<Entry[]> } Promise对象。返回匹配指定前缀的键值对列表。
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#getEntries
     */
    getEntries(keyPrefix: string): Promise<Entry[]>;

    /**
     * 获取与指定Query对象匹配的键值对列表，使用callback异步回调。
     *
     * @param { Query } query - 表示要匹配的键前缀。
     * @param { AsyncCallback<Entry[]> } callback - 回调函数。返回与指定Query对象匹配的键值对列表。
     * @returns { Entry[] } Returns the list of key-value pairs matching the specified {@code Query} object.
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#getEntries
     */
    getEntries(query: Query, callback: AsyncCallback<Entry[]>): void;

    /**
     * 获取与指定Query对象匹配的键值对列表，使用Promise异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<Entry[]> } Promise对象。返回与指定Query对象匹配的键值对列表。
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#getEntries
     */
    getEntries(query: Query): Promise<Entry[]>;

    /**
     * 从KvStore数据库中获取具有指定前缀的结果集，使用callback异步回调。
     *
     * @param { string } keyPrefix - 表示要匹配的键前缀。
     * @param { AsyncCallback<KvStoreResultSet> } callback - 回调函数。返回具有指定前缀的结果集。
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#getResultSet
     */
    getResultSet(keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>): void;

    /**
     * 从KVStore数据库中获取具有指定前缀的结果集，使用Promise异步回调。
     *
     * @param { string } keyPrefix - 表示要匹配的键前缀。
     * @returns { Promise<KvStoreResultSet> } Promise对象。返回具有指定前缀的结果集。
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#getResultSet
     */
    getResultSet(keyPrefix: string): Promise<KvStoreResultSet>;

    /**
     * 获取与指定Query对象匹配的KvStoreResultSet对象，使用callback异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<KvStoreResultSet> } callback - 回调函数，获取与指定Query对象匹配的KvStoreResultSet对象。
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#getResultSet
     */
    getResultSet(query: Query, callback: AsyncCallback<KvStoreResultSet>): void;

    /**
     * 获取与指定Query对象匹配的KvStoreResultSet对象，使用Promise异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<KvStoreResultSet> } Promise对象。获取与指定Query对象匹配的KvStoreResultSet对象。
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#getResultSet
     */
    getResultSet(query: Query): Promise<KvStoreResultSet>;

    /**
     * 关闭由
     * [SingleKVStore.getResultSet]{@link distributedData.SingleKVStore.getResultSet(keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>)}
     * 返回的KvStoreResultSet对象，使用callback异步回调。
     *
     * @param { KvStoreResultSet } resultSet - 表示要关闭的KvStoreResultSet对象。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#closeResultSet
     */
    closeResultSet(resultSet: KvStoreResultSet, callback: AsyncCallback<void>): void;

    /**
     * 关闭由
     * [SingleKVStore.getResultSet]{@link distributedData.SingleKVStore.getResultSet(keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>)}
     * 返回的KvStoreResultSet对象，使用Promise异步回调。
     *
     * @param { KvStoreResultSet } resultSet - 表示要关闭的KvStoreResultSet对象。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#closeResultSet
     */
    closeResultSet(resultSet: KvStoreResultSet): Promise<void>;

    /**
     * 获取与指定Query对象匹配的结果数，使用callback异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<number> } callback - 回调函数。返回与指定Query对象匹配的结果数。
     * @returns { number } Returns the number of results matching the specified {@code Query} object.
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#getResultSize
     */
    getResultSize(query: Query, callback: AsyncCallback<number>): void;

    /**
     * 获取与指定Query对象匹配的结果数，使用Promise异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<number> } Promise对象。获取与指定Query对象匹配的结果数。
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#getResultSize
     */
    getResultSize(query: Query): Promise<number>;

    /**
     * 删除指定设备的数据，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 表示要删除设备的名称。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#removeDeviceData
     */
    removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void;

    /**
     * 删除指定设备的数据，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 表示要删除设备的名称。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#removeDeviceData
     */
    removeDeviceData(deviceId: string): Promise<void>;

    /**
     * 在手动同步方式下，触发数据库同步。
     *
     * > **说明：**
     * >
     * > 其中deviceIds为<!--RP2-->[DeviceInfo]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceInfo}中的
     * > networkId, 通过调用
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP2End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string[] } deviceIds - 同一组网环境下，需要同步的设备的networkId列表。
     * @param { SyncMode } mode - 同步模式。
     * @param { number } delayMs - 可选参数，允许延时时间，单位：ms（毫秒），默认为0。
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#sync
     */
    sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void;

    /**
     * 订阅指定类型的数据变更通知。
     *
     * @param { 'dataChange' } event - 订阅的事件名，固定为'dataChange'，表示数据变更事件。
     * @param { SubscribeType } type - 表示订阅的类型。
     * @param { Callback<ChangeNotification> } listener - 回调函数。
     * @throws Throws this exception if no {@code SingleKvStore} database is available.
     *     {@code DB_ERROR}, and {@code STORE_ALREADY_SUBSCRIBE}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#on
     */
    on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void;

    /**
     * 订阅同步完成事件回调通知。
     *
     * @param { 'syncComplete' } event - 订阅的事件名，固定为'syncComplete'，表示同步完成事件。
     * @param { Callback<Array<[string, number]>> } syncCallback - 回调函数。用于向调用方发送同步结果的回调。
     * @throws Throws this exception if no {@code SingleKvStore} database is available.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#on
     */
    on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;

    /**
     * 取消订阅数据变更通知。
     *
     * @param { 'dataChange' } event - 取消订阅的事件名，固定为'dataChange'，表示数据变更事件。
     * @param { Callback<ChangeNotification> } listener - 取消订阅的函数。如不设置callback，则取消所有订阅的函数。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#off
     */
    off(event: 'dataChange', listener?: Callback<ChangeNotification>): void;

    /**
     * 取消订阅同步完成事件回调通知。
     *
     * @param { 'syncComplete' } event - 取消订阅的事件名，固定为'syncComplete'，表示同步完成事件。
     * @param { Callback<Array<[string, number]>> } syncCallback - 取消订阅的函数。如不设置callback，则取消所有订阅的函数。
     * @throws Throws this exception if no {@code SingleKvStore} database is available.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#off
     */
    off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void;

    /**
     * 设置数据库同步允许的默认延迟，使用callback异步回调。
     *
     * @param { number } defaultAllowedDelayMs - 表示数据库同步允许的默认延迟，以毫秒为单位。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#setSyncParam
     */
    setSyncParam(defaultAllowedDelayMs: number, callback: AsyncCallback<void>): void;

    /**
     * 设置数据库同步允许的默认延迟，使用Promise异步回调。
     *
     * @param { number } defaultAllowedDelayMs - 表示数据库同步允许的默认延迟，以毫秒为单位。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if any of the following errors occurs:{@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#setSyncParam
     */
    setSyncParam(defaultAllowedDelayMs: number): Promise<void>;

    /**
     * 获取数据库的安全级别，使用callback异步回调。
     *
     * @param { AsyncCallback<SecurityLevel> } callback - 回调函数。返回数据库的安全级别。
     * @returns { SecurityLevel } {@code SecurityLevel} the security level of the database.
     * @throws Throws this exception if any of the following errors occurs:{@code SERVER_UNAVAILABLE},
     *     {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#getSecurityLevel
     */
    getSecurityLevel(callback: AsyncCallback<SecurityLevel>): void;

    /**
     * 获取数据库的安全级别，使用Promise异步回调。
     *
     * @returns { Promise<SecurityLevel> } Promise对象。返回数据库的安全级别。
     * @throws Throws this exception if any of the following errors occurs:{@code SERVER_UNAVAILABLE},
     *     {@code IPC_ERROR}, and {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.SingleKVStore#getSecurityLevel
     */
    getSecurityLevel(): Promise<SecurityLevel>;
  }

  /**
   * 设备协同数据库，继承自KVStore，提供查询数据和同步数据的方法。
   * 设备协同数据库，以设备维度对数据进行区分，每台设备仅能写入和修改本设备的数据，其它设备的数据对其是只读的，无法修改其它设备的数据。
   * 比如，可以使用设备协同数据库实现设备间的图片分享，可以查看其他设备的图片，但无法修改和删除其他设备的图片。
   * 在调用DeviceKVStore的方法前，需要先通过
   * [getKVStore]{@link distributedData.KVManager.getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>)}
   * 构建一个DeviceKVStore实例。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.DeviceKVStore
   */
  interface DeviceKVStore extends KVStore {
    /**
     * 获取与指定设备ID和key匹配的string值，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 标识要查询其数据的设备。
     * @param { string } key - 表示要查询key值的键。
     * @param { AsyncCallback<boolean | string | number | Uint8Array> } callback - 回调函数，返回匹配给定条件的字符串值。
     * @returns { void } Returns void.
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}, and {@code KEY_NOT_FOUND}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#get
     */
    get(deviceId: string, key: string, callback: AsyncCallback<boolean | string | number | Uint8Array>): void;

    /**
     * 获取与指定设备ID和key匹配的string值，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 标识要查询其数据的设备。
     * @param { string } key - 表示要查询key值的键。
     * @returns { Promise<boolean | string | number | Uint8Array> } Promise对象。返回匹配给定条件的字符串值。
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}, and {@code KEY_NOT_FOUND}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#get
     */
    get(deviceId: string, key: string): Promise<boolean | string | number | Uint8Array>;

    /**
     * 获取与指定设备ID和key前缀匹配的所有键值对，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 标识要查询其数据的设备。
     * @param { string } keyPrefix - 表示要匹配的键前缀。
     * @param { AsyncCallback<Entry[]> } callback - 回调函数，返回满足给定条件的所有键值对的列表。
     * @returns { void } Returns void.
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getEntries
     */
    getEntries(deviceId: string, keyPrefix: string, callback: AsyncCallback<Entry[]>): void;

    /**
     * 获取与指定设备ID和key前缀匹配的所有键值对，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 标识要查询其数据的设备。
     * @param { string } keyPrefix - 表示要匹配的键前缀。
     * @returns { Promise<Entry[]> } Promise对象。返回匹配给定条件的所有键值对的列表。
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getEntries
     */
    getEntries(deviceId: string, keyPrefix: string): Promise<Entry[]>;

    /**
     * 获取与指定Query对象匹配的键值对列表，使用callback异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<Entry[]> } callback - 回调函数，返回与指定Query对象匹配的键值对列表。
     * @returns { Entry[] } Returns the list of key-value pairs matching the specified {@code Query} object.
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getEntries
     */
    getEntries(query: Query, callback: AsyncCallback<Entry[]>): void;

    /**
     * 获取与指定Query对象匹配的键值对列表，使用Promise异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<Entry[]> } Promise对象。返回与指定Query对象匹配的键值对列表。
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getEntries
     */
    getEntries(query: Query): Promise<Entry[]>;

    /**
     * 获取与指定设备ID和Query对象匹配的键值对列表，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 键值对所属的设备ID。
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<Entry[]> } callback - 回调函数。返回与指定设备ID和Query对象匹配的键值对列表。
     * @returns { Entry[] } Returns the list of key-value pairs matching the specified {@code Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getEntries
     */
    getEntries(deviceId: string, query: Query, callback: AsyncCallback<Entry[]>): void;

    /**
     * 获取与指定设备ID和Query对象匹配的键值对列表，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 键值对所属的设备ID。
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<Entry[]> } Promise对象。返回与指定设备ID和Query对象匹配的键值对列表。
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getEntries
     */
    getEntries(deviceId: string, query: Query): Promise<Entry[]>;

    /**
     * 获取与指定设备ID和key前缀匹配的KvStoreResultSet对象，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 标识要查询其数据的设备。
     * @param { string } keyPrefix - 表示要匹配的键前缀。
     * @param { AsyncCallback<KvStoreResultSet> } callback - 回调函数。返回与指定设备ID和key前缀匹配的KvStoreResultSet对象。
     * @returns { KvStoreResultSet } Returns the {@code KvStoreResultSet} objects.
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getResultSet
     */
    getResultSet(deviceId: string, keyPrefix: string, callback: AsyncCallback<KvStoreResultSet>): void;

    /**
     * 获取与指定设备ID和key前缀匹配的KvStoreResultSet对象，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 标识要查询其数据的设备。
     * @param { string } keyPrefix - 表示要匹配的键前缀。
     * @returns { Promise<KvStoreResultSet> } Promise对象。返回与指定设备ID和key前缀匹配的KvStoreResultSet对象。
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getResultSet
     */
    getResultSet(deviceId: string, keyPrefix: string): Promise<KvStoreResultSet>;

    /**
     * 获取与指定Query对象匹配的KvStoreResultSet对象，使用callback异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<KvStoreResultSet> } callback - 回调函数，返回与指定Query对象匹配的KvStoreResultSet对象。
     * @returns { KvStoreResultSet } Returns the {@code KvStoreResultSet} object matching the specified {@code Query} object.
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getResultSet
     */
    getResultSet(query: Query, callback: AsyncCallback<KvStoreResultSet>): void;

    /**
     * 获取与指定Query对象匹配的KvStoreResultSet对象，使用Promise异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<KvStoreResultSet> } Promise对象。返回与指定Query对象匹配的KvStoreResultSet对象。
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getResultSet
     */
    getResultSet(query: Query): Promise<KvStoreResultSet>;

    /**
     * 获取与指定设备ID和Query对象匹配的KvStoreResultSet对象，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - KvStoreResultSet对象所属的设备ID。
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<KvStoreResultSet> } callback - 回调函数。返回与指定设备ID和Query对象匹配的KvStoreResultSet对象。
     * @returns { KvStoreResultSet } Returns the {@code KvStoreResultSet} object matching the specified {@code Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getResultSet
     */
    getResultSet(deviceId: string, query: Query, callback: AsyncCallback<KvStoreResultSet>): void;

    /**
     * 获取与指定设备ID和Query对象匹配的KvStoreResultSet对象，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - KvStoreResultSet对象所属的设备ID。
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<KvStoreResultSet> } Promise对象。返回与指定设备ID和Query对象匹配的KvStoreResultSet对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getResultSet
     */
    getResultSet(deviceId: string, query: Query): Promise<KvStoreResultSet>;

    /**
     * 关闭由[DeviceKVStore.getResultSet](docroot://reference/apis-arkdata/js-apis-distributed-data.md#getresultset8-4)返回的
     * KvStoreResultSet对象，使用callback异步回调。
     *
     * @param { KvStoreResultSet } resultSet - 指示要关闭的KvStoreResultSet对象。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#closeResultSet
     */
    closeResultSet(resultSet: KvStoreResultSet, callback: AsyncCallback<void>): void;

    /**
     * 关闭由[DeviceKVStore.getResultSet](docroot://reference/apis-arkdata/js-apis-distributed-data.md#getresultset8-4)返回的
     * KvStoreResultSet对象，使用Promise异步回调。
     *
     * @param { KvStoreResultSet } resultSet - 指示要关闭的KvStoreResultSet对象。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#closeResultSet
     */
    closeResultSet(resultSet: KvStoreResultSet): Promise<void>;

    /**
     * 获取与指定Query对象匹配的结果数，使用callback异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<number> } callback - 回调函数，返回与指定Query对象匹配的结果数。
     * @returns { number } Returns the number of results matching the specified {@code Query} object.
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getResultSize
     */
    getResultSize(query: Query, callback: AsyncCallback<number>): void;

    /**
     * 获取与指定Query对象匹配的结果数，使用Promise异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<number> } Promise对象。返回与指定Query对象匹配的结果数。
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getResultSize
     */
    getResultSize(query: Query): Promise<number>;

    /**
     * 获取与指定设备ID和Query对象匹配的结果数，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - KvStoreResultSet对象所属的设备ID。
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<number> } callback - 回调函数。返回与指定设备ID和Query对象匹配的结果数。
     * @returns { number } Returns the number of results matching the specified {@code Query} object.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getResultSize
     */
    getResultSize(deviceId: string, query: Query, callback: AsyncCallback<number>): void;

    /**
     * 获取与指定设备ID和Query对象匹配的结果数，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - KvStoreResultSet对象所属的设备ID。
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<number> } Promise对象。返回与指定设备ID和Query对象匹配的结果数。
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#getResultSize
     */
    getResultSize(deviceId: string, query: Query): Promise<number>;

    /**
     * 从当前数据库中删除指定设备的数据，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 标识要删除其数据的设备。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#removeDeviceData
     */
    removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void;

    /**
     * 从当前数据库中删除指定设备的数据，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     * > > deviceId具体获取方式请参考[sync接口示例]{@link distributedData.SingleKVStore.sync}。
     *
     * @param { string } deviceId - 标识要删除其数据的设备。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if any of the following errors occurs: {@code INVALID_ARGUMENT},
     *     {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR}, {@code DB_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#removeDeviceData
     */
    removeDeviceData(deviceId: string): Promise<void>;

    /**
     * 在手动同步方式下，触发数据库同步。
     *
     * > **说明：**
     * >
     * > 其中deviceIds为<!--RP2-->[DeviceInfo]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceInfo}中的
     * > networkId, 通过调用
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP2End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string[] } deviceIds - 需要同步DeviceKVStore数据库的设备networkId列表。
     * @param { number } delayMs - 可选参数，允许延时时间，单位：ms（毫秒），默认为0。
     * @param { SyncMode } mode - 同步模式。
     * @throws Throws this exception if no DeviceKVStore database is available.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#sync
     */
    sync(deviceIds: string[], mode: SyncMode, delayMs?: number): void;

    /**
     * 订阅指定类型的数据变更通知。
     *
     * @param { 'dataChange' } event - 订阅的事件名，固定为'dataChange'，表示数据变更事件。
     * @param { SubscribeType } type - 表示订阅的类型。
     * @param { Callback<ChangeNotification> } listener - 回调函数。
     * @throws Throws this exception if any of the following errors
     *     occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR},
     *     {@code DB_ERROR}, and {@code STORE_ALREADY_SUBSCRIBE}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#on
     */
    on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void;


    /**
     * 订阅同步完成事件回调通知。
     *
     * @param { 'syncComplete' } event - 订阅的事件名，固定为'syncComplete'，表示同步完成事件。
     * @param { Callback<Array<[string, number]>> } syncCallback - 回调函数。用于向调用方发送同步结果的回调。
     * @throws Throws this exception if no DeviceKVStore database is available.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#on
     */
    on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;

    /**
     * 取消订阅数据变更通知。
     *
     * @param { 'dataChange' } event - 取消订阅的事件名，固定为'dataChange'，表示数据变更事件。
     * @param { Callback<ChangeNotification> } listener - 取消订阅的函数。如不设置callback，则取消所有订阅的函数。
     * @throws Throws this exception if any of the following errors
     *     occurs: {@code SERVER_UNAVAILABLE}, {@code IPC_ERROR},
     *     {@code DB_ERROR}, and {@code STORE_ALREADY_SUBSCRIBE}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#off
     */
    off(event: 'dataChange', listener?: Callback<ChangeNotification>): void;

    /**
     * 取消订阅同步完成事件回调通知。
     *
     * @param { 'syncComplete' } event - 取消订阅的事件名，固定为'syncComplete'，表示同步完成事件。
     * @param { Callback<Array<[string, number]>> } syncCallback - 取消订阅的函数。如不设置callback，则取消所有订阅的函数。
     * @throws Throws this exception if no DeviceKVStore database is available.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.DeviceKVStore#off
     */
    off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void;
  }

  /**
   * 创建一个KVManager对象实例，用于管理数据库对象，使用callback异步回调。
   *
   * @param { KVManagerConfig } config - 提供KVManager实例的配置信息，包括调用方的Bundle名称和用户信息。
   * @param { AsyncCallback<KVManager> } callback - 回调函数。返回创建的KVManager对象实例。
   * @returns { void } Returns the {@code KVManager} instance.
   * @throws Throws exception if input is invalid.
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore#createKVManager
   */
  function createKVManager(config: KVManagerConfig, callback: AsyncCallback<KVManager>): void;

  /**
   * 创建一个KVManager对象实例，用于管理数据库对象，使用Promise异步回调。
   *
   * @param { KVManagerConfig } config - 提供KVManager实例的配置信息，包括调用方的包名和用户信息。
   * @returns { Promise<KVManager> } Promise对象。返回创建的KVManager对象实例。
   * @throws Throws exception if input is invalid.
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore#createKVManager
   */
  function createKVManager(config: KVManagerConfig): Promise<KVManager>;

  /**
   * 数据管理实例，用于获取KVStore的相关信息。在调用KVManager的方法前，需要先通过
   * [createKVManager]{@link distributedData.createKVManager(config: KVManagerConfig, callback: AsyncCallback<KVManager>)}
   * 构建一个KVManager实例。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @version 1
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.data.distributedKVStore.KVManager
   */
  interface KVManager {
    /**
     * 通过指定Options和storeId，创建并获取KVStore数据库，使用Promise异步回调。
     *
     * @param { Options } options - 创建KVStore实例的配置信息。
     * @param { string } storeId - 数据库唯一标识符，长度不大于[MAX_STORE_ID_LENGTH]{@link distributedData.Constants}。
     * @returns { Promise<T>, <T extends KVStore> } Promise对象。返回创建的KVStore数据库实例。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVManager#getKVStore
     */
    getKVStore<T extends KVStore>(storeId: string, options: Options): Promise<T>;

    /**
     * 通过指定Options和storeId，创建并获取KVStore数据库，使用callback异步回调。
     *
     * @param { Options } options - 创建KVStore实例的配置信息。
     * @param { string } storeId - 数据库唯一标识符，长度不大于[MAX_STORE_ID_LENGTH]{@link distributedData.Constants}。
     * @param { AsyncCallback<T> } callback - 回调函数。返回创建的KVStore数据库实例。
     * @returns { void } Returns a {@code KVStore}, or {@code SingleKVStore}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVManager#getKVStore
     */
    getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>): void;

    /**
     * 通过storeId的值关闭指定的KVStore数据库，使用callback异步回调。
     *
     * @param { string } appId - 所调用数据库方的包名。
     * @param { string } storeId - Unique identifier of the 要关闭的KVStore数据库。 The length cannot exceed
     *     [MAX_STORE_ID_LENGTH]{@link distributedData.Constants}.
     * @param { KVStore } kvStore - 要关闭的KVStore数据库。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if any of the following errors
     * occurs:{@code INVALID_ARGUMENT}, {@code SERVER_UNAVAILABLE},
     * {@code STORE_NOT_OPEN}, {@code STORE_NOT_FOUND}, {@code DB_ERROR},
     * {@code PERMISSION_DENIED}, and {@code IPC_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVManager#closeKVStore
     */
    closeKVStore(appId: string, storeId: string, kvStore: KVStore, callback: AsyncCallback<void>): void;

    /**
     * 通过storeId的值关闭指定的KVStore数据库，使用Promise异步回调。
     *
     * @param { string } appId - 所调用数据库方的包名。
     * @param { string } storeId - Unique identifier of the 要关闭的KVStore数据库。 The length cannot exceed
     *     [MAX_STORE_ID_LENGTH]{@link distributedData.Constants}.
     * @param { KVStore } kvStore - 要关闭的KVStore数据库。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if any of the following errors
     * occurs:{@code INVALID_ARGUMENT}, {@code SERVER_UNAVAILABLE},
     * {@code STORE_NOT_OPEN}, {@code STORE_NOT_FOUND}, {@code DB_ERROR},
     * {@code PERMISSION_DENIED}, and {@code IPC_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVManager#closeKVStore
     */
    closeKVStore(appId: string, storeId: string, kvStore: KVStore): Promise<void>;

    /**
     * 通过storeId的值删除指定的KVStore数据库，使用callback异步回调。
     *
     * @param { string } appId - 所调用数据库方的包名。
     * @param { string } storeId - 要删除的数据库唯一标识符，长度不大于[MAX_STORE_ID_LENGTH]{@link distributedData.Constants}。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * @throws Throws this exception if any of the following errors
     * occurs: {@code INVALID_ARGUMENT},
     * {@code SERVER_UNAVAILABLE}, {@code STORE_NOT_FOUND},
     * {@code DB_ERROR}, {@code PERMISSION_DENIED}, and {@code IPC_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVManager#deleteKVStore
     */
    deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void;

    /**
     * 通过storeId的值删除指定的KVStore数据库，使用Promise异步回调。
     *
     * @param { string } appId - 所调用数据库方的包名。
     * @param { string } storeId - 要删除的数据库唯一标识符，长度不大于[MAX_STORE_ID_LENGTH]{@link distributedData.Constants}。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws Throws this exception if any of the following errors
     * occurs: {@code INVALID_ARGUMENT},
     * {@code SERVER_UNAVAILABLE}, {@code STORE_NOT_FOUND},
     * {@code DB_ERROR}, {@code PERMISSION_DENIED}, and {@code IPC_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVManager#deleteKVStore
     */
    deleteKVStore(appId: string, storeId: string): Promise<void>;

    /**
     * 获取所有通过
     * [getKVStore]{@link distributedData.KVManager.getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>)}
     * 方法创建的且没有调用
     * [deleteKVStore]{@link distributedData.KVManager.deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>)}
     * 方法删除的KVStore数据库的storeId，使用callback异步回调。
     *
     * @param { string } appId - 所调用数据库方的包名。
     * @param { AsyncCallback<string[]> } callback - 回调函数。返回所有创建的KvStore数据库的storeId。
     * @returns { void } Returns the storeId of all created {@code KvStore} databases.
     * @throws Throws this exception if any of the following errors
     * occurs: {@code SERVER_UNAVAILABLE}, {@code DB_ERROR},
     * {@code PERMISSION_DENIED}, and {@code IPC_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVManager#getAllKVStoreId
     */
    getAllKVStoreId(appId: string, callback: AsyncCallback<string[]>): void;

    /**
     * 获取所有通过
     * [getKVStore]{@link distributedData.KVManager.getKVStore<T extends KVStore>(storeId: string, options: Options, callback: AsyncCallback<T>)}
     * 方法创建的且没有调用
     * [deleteKVStore]{@link distributedData.KVManager.deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>)}
     * 方法删除的KVStore数据库的storeId，使用Promise异步回调。
     *
     * @param { string } appId - 所调用数据库方的包名。
     * @returns { Promise<string[]> } Promise对象。返回所有创建的KvStore数据库的storeId。
     * @throws Throws this exception if any of the following errors
     * occurs: {@code SERVER_UNAVAILABLE}, {@code DB_ERROR},
     * {@code PERMISSION_DENIED}, and {@code IPC_ERROR}.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVManager#getAllKVStoreId
     */
    getAllKVStoreId(appId: string): Promise<string[]>;

    /**
     * 订阅服务状态变更通知。
     *
     * @param { 'distributedDataServiceDie' } event - 订阅的事件名，固定为'distributedDataServiceDie'，即服务状态变更事件。
     * @param { Callback<void> } deathCallback - 回调函数。
     * @throws    exception maybe occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVManager#on
     */
    on(event: 'distributedDataServiceDie', deathCallback: Callback<void>): void;

    /**
     * 取消订阅服务状态变更通知。
     *
     * @param { 'distributedDataServiceDie' } event - 取消订阅的事件名，固定为'distributedDataServiceDie'，即服务状态变更事件。
     * @param { Callback<void> } deathCallback - 取消订阅的函数。如不设置callback，则取消所有已订阅的函数。
     * @throws exception maybe occurs.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.data.distributedKVStore.KVManager#off
     */
    off(event: 'distributedDataServiceDie', deathCallback?: Callback<void>): void;
  }
}

export default distributedData;