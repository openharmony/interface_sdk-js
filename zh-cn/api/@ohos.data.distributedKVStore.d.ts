/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * @file 分布式键值数据库
 * @kit ArkData
 */

import { AsyncCallback, Callback } from './@ohos.base';
import { ValuesBucket } from './@ohos.data.ValuesBucket';
import dataSharePredicates from './@ohos.data.dataSharePredicates';
import BaseContext from './application/BaseContext';

/**
 * 分布式键值数据库为应用程序提供不同设备间数据库的分布式协同能力。通过调用分布式键值数据库各个接口，应用程序可将数据保存到分布式键值数据库中，并可对分布式键值数据库中的数据进行增加、删除、修改、查询、端端同步等操作。
 *
 * 该模块提供以下常用功能：
 *
 * - [KVManager]{@link distributedKVStore.KVManager}：分布式键值数据库管理实例，用于获取数据库的相关信息。
 * - [KVStoreResultSet]{@link distributedKVStore.KVStoreResultSet}：提供获取数据库结果集的相关方法，包括查询和移动数据读取位置等。
 * - [Query]{@link distributedKVStore.Query}：使用谓词表示数据库查询，提供创建Query实例、查询数据库中的数据和添加谓词的方法。
 * - [SingleKVStore]{@link distributedKVStore.SingleKVStore}：单版本分布式键值数据库，不对数据所属设备进行区分，提供查询数据和端端同步数据的方法。
 * - [DeviceKVStore]{@link distributedKVStore.DeviceKVStore}：设备协同数据库，继承自
 * [SingleKVStore]{@link distributedKVStore.SingleKVStore}，以设备维度对数据进行区分，提供查询数据和端端同步数据的方法。
 *
 * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
 * @stagemodelonly [staticonly]
 * @crossplatform [since 24]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace distributedKVStore {
  /**
   * 提供KVManager实例的配置信息，包括调用方的包名和应用的上下文。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  interface KVManagerConfig {
    /**
     * 调用方的包名，不可为空且长度范围为1-256字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * 应用的上下文。
     *
     * FA模型的应用Context定义见[Context]{@link ./app/context}。
     *
     * Stage模型的应用Context定义见[Context]{@link ./application/UIAbilityContext:UIAbilityContext}。
     *
     * 从API version 10开始，context的参数类型为[BaseContext]{@link ./application/BaseContext:BaseContext}。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     *     if swap the area, you should close all the KV store and use the new Context to create the
     *     KVManager [since 9 - 9]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     *     if swap the area, you should close all the KV store and use the new BaseContext to create the
     *     KVManager [since 10]
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    context: BaseContext;
  }

  /**
   * 分布式键值数据库常量。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @crossplatform [since 24]
   * @since 9 dynamic
   */
  interface Constants {
    /**
     * 值为1024，表示数据库中Key允许的最大长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform [since 24]
     * @since 9 dynamic
     */
    readonly MAX_KEY_LENGTH: number;

    /**
     * 值为4194303，表示数据库中Value允许的最大长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform [since 24]
     * @since 9 dynamic
     */
    readonly MAX_VALUE_LENGTH: number;

    /**
     * 值为896，表示设备协同数据库中Key允许的最大长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform [since 24]
     * @since 9 dynamic
     */
    readonly MAX_KEY_LENGTH_DEVICE: number;

    /**
     * 值为128，表示数据库标识符允许的最大长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform [since 24]
     * @since 9 dynamic
     */
    readonly MAX_STORE_ID_LENGTH: number;

    /**
     * 值为512000，表示最大查询长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform [since 24]
     * @since 9 dynamic
     */
    readonly MAX_QUERY_LENGTH: number;

    /**
     * 值为128，表示最大批处理操作数量。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform [since 24]
     * @since 9 dynamic
     */
    readonly MAX_BATCH_SIZE: number;
  }

  /**
   * 分布式键值数据库常量
   *
   * @enum { int }
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly
   * @since 23 static
   */
  enum Constants {
    /**
     * 值为128，表示最大批处理操作数量。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    MAX_BATCH_SIZE = 128,

    /**
     * 值为128，表示数据库标识符允许的最大长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    MAX_STORE_ID_LENGTH = 128,

    /**
     * 值为896，表示设备协同数据库中Key允许的最大长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    MAX_KEY_LENGTH_DEVICE = 896,

    /**
     * 值为1024，表示数据库中Key允许的最大长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    MAX_KEY_LENGTH = 1024,

    /**
     * 值为512000，表示最大查询长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    MAX_QUERY_LENGTH = 512000,

    /**
     * 值为4194303，表示数据库中Value允许的最大长度，单位字节。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    MAX_VALUE_LENGTH = 4194303,
  }

  /**
   * 数据类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  enum ValueType {
    /**
     * 表示值类型为字符串。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    STRING = 0,

    /**
     * 表示值类型为整数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform [since 24]
     * @since 9 dynamic
     */
    INTEGER = 1,

    /**
     * 表示值类型为浮点数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @crossplatform [since 24]
     * @since 9 dynamic
     */
    FLOAT = 2,

    /**
     * 表示值类型为字节数组。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    BYTE_ARRAY = 3,

    /**
     * 表示值类型为布尔值。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    BOOLEAN = 4,

    /**
     * 表示值类型为双浮点数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    DOUBLE = 5,

    /**
     * 表示值类型为长整数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    LONG = 6
  }

  /**
   * 存储在数据库中的值对象。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Value {
    /**
     * 值类型。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     * @see ValueType
     */
    type: ValueType;

    /**
     * 键值对中的值。Uint8Array、string类型的长度范围为0-[MAX_VALUE_LENGTH]{@link distributedKVStore.Constants}，number和boolean类型的取值范围由其自
     * 身类型决定。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    value: Uint8Array | string | long | double | boolean;
  }

  /**
   * 存储在数据库中的键值对。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Entry {
    /**
     * 表示键名。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    key: string;

    /**
     * 值对象。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    value: Value;
  }

  /**
   * 数据变更时通知的对象，包括插入的数据、更新的数据、删除的数据和设备ID。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  interface ChangeNotification {
    /**
     * 数据添加记录。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    insertEntries: Entry[];

    /**
     * 数据更新记录。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    updateEntries: Entry[];

    /**
     * 数据删除记录。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    deleteEntries: Entry[];

    /**
     * 设备ID，此处为设备UUID。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId: string;
  }

  /**
   * 同步模式枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  enum SyncMode {
    /**
     * 表示只能从远端拉取数据到本端。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    PULL_ONLY,

    /**
     * 表示只能从本端推送数据到远端。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    PUSH_ONLY,

    /**
     * 表示从本端推送数据到远端，然后从远端拉取数据到本端。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    PUSH_PULL
  }

  /**
   * 订阅类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  enum SubscribeType {
    /**
     * 表示订阅本地数据变更。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    SUBSCRIBE_TYPE_LOCAL,

    /**
     * 表示订阅远端数据变更。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    SUBSCRIBE_TYPE_REMOTE,

    /**
     * 表示订阅远端和本地数据变更。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    SUBSCRIBE_TYPE_ALL
  }

  /**
   * 分布式键值数据库类型枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  enum KVStoreType {
    /**
     * 表示多设备协同数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    DEVICE_COLLABORATION,

    /**
     * 表示单版本数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    SINGLE_VERSION
  }

  /**
   * 数据库的安全级别枚举。
   *
   * > **说明：**
   * >
   * > 在单设备使用场景下，KV数据库支持修改securityLevel参数进行安全等级升级。升级操作需要注意以下几点：
   * >
   * > * 该操作不支持跨设备同步的数据库。不同安全等级的数据库之间不能进行数据同步。若需升级数据库的安全等级，建议重新创建更高安全等级的数据库。
   * >
   * > * 关闭当前数据库后，修改securityLevel参数以重新设置数据库的安全等级，然后调用
   * > [getKVStore]{@link distributedKVStore.KVManager.getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>)}
   * > 接口重新打开数据库。
   * >
   * > * 该操作仅支持升级，例如从S2到S3，不支持降级，例如从S3到S2。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  enum SecurityLevel {
    /**
     * 表示数据库的安全级别为低级别，数据的泄露、篡改、破坏、销毁可能会给个人或组织导致有限的不利影响。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    S1,

    /**
     * 表示数据库的安全级别为中级别，数据的泄露、篡改、破坏、销毁可能会给个人或组织导致严重的不利影响。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    S2,

    /**
     * 表示数据库的安全级别为高级别，数据的泄露、篡改、破坏、销毁可能会给个人或组织导致严峻的不利影响。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    S3,

    /**
     * 表示数据库的安全级别为关键级别，业界法律法规中定义的特殊数据类型，涉及个人的最私密领域的信息，一旦泄露、篡改、破坏、销毁可能会给个人或组织造成重大的不利影响。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    S4
  }

  /**
   * 用于提供创建数据库的配置信息。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Options {
    /**
     * 当数据库文件不存在时是否创建数据库，true为创建，false为不创建，默认为true。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    createIfMissing?: boolean;

    /**
     * 设置数据库文件是否加密，true为加密，false为不加密，默认为false。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    encrypt?: boolean;

    /**
     * 设置数据库文件是否备份，true为备份，false为不备份，默认为true。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    backup?: boolean;

    /**
     * 设置数据库是否支持跨设备自动同步。默认为false，即只支持手动同步。配置为true，即只支持在跨设备Call调用实现的多端协同中生效，其他场景无法生效。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    autoSync?: boolean;

    /**
     * 设置要创建的数据库类型，默认为DEVICE_COLLABORATION，即多设备协同数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    kvStoreType?: KVStoreType;

    /**
     * 设置数据库安全级别。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    securityLevel: SecurityLevel;

    /**
     * 设置定义存储在数据库中的值，默认为undefined，即不使用Schema。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    schema?: Schema;

    /**
     * 设置数据库文件存储路径，不设置即为默认路径（context.databaseDir）。不能设置空字符串，创建数据库和删除数据库时目录必须有访问权限且存在，关闭数据库不校验此参数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 24 dynamic&static
     */
    rootDir?: string;
  }

  /**
   * 用于备份数据库的配置信息。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @since 24 dynamic&static
   */
  interface BackupConfig {
    /**
     * 备份数据库的名称，无长度限制，不能包含特殊字符'/'。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 24 dynamic&static
     */
    fileName: string;

    /**
     * 备份数据库的路径，无长度限制。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 24 dynamic&static
     */
    filePath: string;
  }

  /**
   * 表示数据库模式，可以在创建或打开数据库时创建Schema对象并将它们放入[Options]{@link distributedKVStore.Options}中。
   *
   * STRICT：STRICT模式要求用户插入的值必须与Schema定义严格匹配，字段数量和格式都不能有差异。如果不匹配，数据库将在插入数据时返回错误。
   *
   * COMPATIBLE：选择为COMPATIBLE模式时，数据库在检查Value格式时较为宽松，只要Value具有Schema描述的特征即可，允许存在额外字段。例如，定义了id、name字段时，可以插入id、name、age等多个字
   * 段。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  class Schema {
    /**
     * 用于创建Schema实例的构造函数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 获取Value中所有字段的定义。
     *
     * @returns { FieldNode } 返回Value中所有字段的定义.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    get root(): FieldNode;

    /**
     * 设置Value中所有字段的定义。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    set root(root: FieldNode);

    /**
     * 获取索引字段定义。
     *
     * @returns { Array<string> } 返回索引字段定义.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    get indexes(): Array<string>;

    /**
     * 设置索引字段定义
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    set indexes(indexes: Array<string>);

    /**
     * 获取Schema的模式。
     *
     * @returns { int } 返回Schema的模式。
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    get mode(): int;

    /**
     * 设置Schema的模式。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    set mode(mode: int);

    /**
     * 获取跳过的字节数。
     *
     * @returns { int } 返回跳过的字节数。
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    get skip(): int;

    /**
     * 设置跳过的字节数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    set skip(skip: int);
  }

  /**
   * 表示 Schema 实例的节点，提供定义存储在数据库中的值的方法。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  class FieldNode {
    /**
     * 用于创建带有string字段FieldNode实例的构造函数。
     *
     * @param { string } name - FieldNode的值，不能为空，长度范围为1-64个字符。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    constructor(name: string);

    /**
     * 在当前 FieldNode 中添加一个子节点。
     *
     * @param { FieldNode } child - 要附加的子节点。
     * @returns { boolean } 返回true表示子节点成功添加到FieldNode；返回false则表示操作失败。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    appendChild(child: FieldNode): boolean;

    /**
     * 表示FieldNode的默认值。default需传入type对应类型可解析的字符串字面量，确保内容类型与type字段类型一致。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @crossplatform [since 24]
     * @since 9 dynamic
     */
    default: string;

    /**
     * 获取FieldNode的默认值。
     *
     * @returns { string } 返回FieldNode的默认值.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly
     * @since 23 static
     */
    get defaultValue(): string;

    /**
     * 设置FieldNode的默认值.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly
     * @since 23 static
     */
    set defaultValue(defaultValue: string);

    /**
     * 获取数据库字段是否为空。
     *
     * @returns { boolean } 返回数据库字段是否为空。
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    get nullable(): boolean;

    /**
     * 设置数据库字段是否为空.
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    set nullable(isnullable: boolean);

    /**
     * 获取节点对应的数据类型。
     *
     * @returns { int } 返回节点对应的数据类型.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    get type(): int;

    /**
     * 设置节点对应的数据类型。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    set type(type: int);
  }

  /**
   * 提供获取数据库结果集的相关方法，包括查询和移动数据读取位置等。同时允许打开的结果集的最大数量为8个。
   *
   * KVStoreResultSet实例不会实时刷新。使用结果集后，如果数据库中的数据发生变化（如增删改操作），需要重新查询才能获取到最新的数据。
   *
   * 在调用KVStoreResultSet的方法前，需要先通过
   * [getKVStore]{@link distributedKVStore.KVManager.getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>)}
   * 构建一个SingleKVStore或者DeviceKVStore实例。
   *
   * > **说明：**
   * >
   * > KVStoreResultSet的游标起始位置为-1。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  interface KVStoreResultSet {
    /**
     * 获取结果集中的总行数。
     *
     * @returns { int } 返回数据的总行数。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    getCount(): int;

    /**
     * 获取结果集中当前的读取位置。读取位置会因[moveToFirst]{@link distributedKVStore.KVStoreResultSet.moveToFirst}、
     * [moveToLast]{@link distributedKVStore.KVStoreResultSet.moveToLast}等操作而发生变化。
     *
     * @returns { int } 返回当前读取位置。取值范围>= -1，值为 -1 时表示还未开始读取，值为 0 时表示第一行。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    getPosition(): int;

    /**
     * 将读取位置移动到第一行。如果结果集为空，则返回false。
     *
     * @returns { boolean } 返回true表示操作成功；返回false则表示操作失败。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    moveToFirst(): boolean;

    /**
     * 将读取位置移动到最后一行。如果结果集为空，则返回false。
     *
     * @returns { boolean } 返回true表示操作成功；返回false则表示操作失败。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    moveToLast(): boolean;

    /**
     * 将读取位置移动到下一行。如果结果集为空，则返回false。适用于全量获取数据库结果集的场景。
     *
     * @returns { boolean } 返回true表示操作成功；返回false则表示操作失败。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    moveToNext(): boolean;

    /**
     * 将读取位置移动到上一行。如果结果集为空，则返回false。适用于全量获取数据库结果集的场景。
     *
     * @returns { boolean } 返回true表示操作成功；返回false则表示操作失败。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    moveToPrevious(): boolean;

    /**
     * 将读取位置移动到当前位置的相对偏移量。即当前游标位置向下偏移 offset 行。
     *
     * @param { int } offset - 表示与当前位置的相对偏移量，正偏移表示向结果集末尾方向移动（行号增大），负偏移表示向结果集起始方向移动（行号减小）。当游标超出结果集最前或者最后的位置时，接口返回false。
     * @returns { boolean } 返回true表示操作成功；返回false则表示操作失败。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    move(offset: int): boolean;

    /**
     * 将读取位置从 0 移动到绝对位置。
     *
     * @param { int } position - 表示绝对位置。当绝对位置超出结果集最前或者最后的位置时，接口返回false。
     * @returns { boolean } 返回true表示操作成功；返回false则表示操作失败。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    moveToPosition(position: int): boolean;

    /**
     * 检查读取位置是否为第一行。
     *
     * @returns { boolean } 返回true表示读取位置为第一行；返回false表示读取位置不是第一行。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    isFirst(): boolean;

    /**
     * 检查读取位置是否为最后一行。
     *
     * @returns { boolean } 返回true表示读取位置为最后一行；返回false表示读取位置不是最后一行。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    isLast(): boolean;

    /**
     * 检查读取位置是否在第一行之前。
     *
     * @returns { boolean } 返回true表示读取位置在第一行之前；返回false表示读取位置不在第一行之前。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    isBeforeFirst(): boolean;

    /**
     * 检查读取位置是否在最后一行之后。
     *
     * @returns { boolean } 返回true表示读取位置在最后一行之后；返回false表示读取位置不在最后一行之后。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    isAfterLast(): boolean;

    /**
     * 从当前位置获取对应的键值对。
     *
     * @returns { Entry } 返回键值对。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntry(): Entry;
  }

  /**
   * 使用谓词表示数据库查询，提供创建Query实例、查询数据库中的数据和添加谓词的方法。Query对象的谓词方法均返回自身，支持链式调用。一个Query对象中谓词数量上限为256个。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  class Query {
    /**
     * 用于创建Query实例的构造函数。
     *
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    constructor();

    /**
     * 重置Query对象。
     *
     * @returns { Query } 返回重置后的Query对象，所有已添加的谓词条件被清空，可用于重新构建查询条件。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    reset(): Query;

    /**
     * 构造一个Query对象来查询具有指定字段的条目，其值等于指定的值。
     *
     * > **说明：**
     * >
     * > 使用equalTo时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { long | double | string | boolean } value - 表示指定字段要匹配的值，值的类型应与Schema中定义的字段类型一致。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    equalTo(field: string, value: long | double | string | boolean): Query;

    /**
     * 构造一个Query对象以查询具有指定字段且值不等于指定值的条目。
     *
     * > **说明：**
     * >
     * > 使用notEqualTo时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { long | double | string | boolean } value - 表示指定字段要匹配的值，值的类型应与Schema中定义的字段类型一致。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    notEqualTo(field: string, value: long | double | string | boolean): Query;

    /**
     * 构造一个Query对象以查询具有大于指定值的指定字段的条目。
     *
     * > **说明：**
     * >
     * > 使用greaterThan时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - Indicates the field, which cannot contain ^.
     * @param { long | double | string | boolean } value - Indicates the value to be compared.
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    greaterThan(field: string, value: long | double | string | boolean): Query;

    /**
     * 构造一个Query对象以查询具有小于指定值的指定字段的条目。
     *
     * > **说明：**
     * >
     * > 使用lessThan时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { long | double | string } value - 表示指定字段要匹配的值，值的类型应与Schema中定义的字段类型一致。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    lessThan(field: string, value: long | double | string): Query;

    /**
     * 构造一个Query对象以查询具有指定字段且值大于或等于指定值的条目。
     *
     * > **说明：**
     * >
     * > 使用greaterThanOrEqualTo时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { long | double | string } value - 表示指定字段要匹配的值，值的类型应与Schema中定义的字段类型一致。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    greaterThanOrEqualTo(field: string, value: long | double | string): Query;

    /**
     * 构造一个Query对象以查询具有指定字段且值小于或等于指定值的条目。
     *
     * > **说明：**
     * >
     * > 使用lessThanOrEqualTo时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { long | double | string } value - 表示指定字段要匹配的值，值的类型应与Schema中定义的字段类型一致。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    lessThanOrEqualTo(field: string, value: long | double | string): Query;

    /**
     * 构造一个Query对象以查询具有值为null的指定字段的条目。
     *
     * > **说明：**
     * >
     * > 使用isNull时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    isNull(field: string): Query;

    /**
     * 构造一个Query对象以查询具有指定字段的条目，其值在指定的值列表中。
     *
     * > **说明：**
     * >
     * > 使用inNumber时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { long[] | double[] } valueList - 是
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    inNumber(field: string, valueList: long[] | double[]): Query;

    /**
     * 构造一个Query对象以查询具有指定字段的条目，其值在指定的字符串值列表中。
     *
     * > **说明：**
     * >
     * > 使用inString时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { string[] } valueList - 表示指定的字符串值列表。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    inString(field: string, valueList: string[]): Query;

    /**
     * 构造一个Query对象以查询具有指定字段的条目，该字段的值不在指定的值列表中。
     *
     * > **说明：**
     * >
     * > 使用notInNumber时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { long[] | double[] } valueList - 是
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    notInNumber(field: string, valueList: long[] | double[]): Query;

    /**
     * 构造一个Query对象以查询具有指定字段且值不在指定字符串值列表中的条目。
     *
     * > **说明：**
     * >
     * > 使用notInString时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { string[] } valueList - 表示指定的字符串值列表。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    notInString(field: string, valueList: string[]): Query;

    /**
     * 构造一个Query对象以查询具有与指定字符串值相似的指定字段的条目。
     *
     * > **说明：**
     * >
     * > 使用like时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { string } value - 表示指定字段要匹配的字符串值。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    like(field: string, value: string): Query;

    /**
     * 构造一个Query对象以查询具有与指定字符串值不相似的指定字段的条目。
     *
     * > **说明：**
     * >
     * > 使用unlike时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { string } value - 表示指定字段要不匹配的字符串值。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    unlike(field: string, value: string): Query;

    /**
     * 构造一个带有与条件的查询对象。需先通过equalTo、notEqualTo等谓词方法添加查询条件后，再调用and()连接多个条件，无前置谓词时调用and()无效。
     *
     * @returns { Query } 返回查询对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    and(): Query;

    /**
     * 构造一个带有或条件的Query对象。需先通过equalTo、notEqualTo等谓词方法添加查询条件后，再调用or()连接多个条件，无前置谓词时调用or()无效。
     *
     * @returns { Query } 返回查询对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    or(): Query;

    /**
     * 构造一个Query对象，将查询结果按升序排序。
     *
     * > **说明：**
     * >
     * > 使用orderByAsc时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    orderByAsc(field: string): Query;

    /**
     * 构造一个Query对象，将查询结果按降序排序。
     *
     * > **说明：**
     * >
     * > 使用orderByDesc时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    orderByDesc(field: string): Query;

    /**
     * 构造一个Query对象来指定结果的数量和开始位置。该接口必须要在Query对象查询和升降序等操作之后调用，调用limit接口后，不可再对Query对象进行查询和升降序等操作。
     *
     * @param { int } total - 表示最大数据记录数。<br/>取值为非负整数时表示指定的最大记录数。<br/>取值为负数时，表示查询整个结果集。
     * @param { int } offset - 指定查询结果的起始位置。取值为非负整数时表示指定的起始位置；取值为负数时，表示查询整个结果集。当offset超出结果集最后位置时，查询结果为空。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    limit(total: int, offset: int): Query;

    /**
     * 构造一个Query对象以查询具有值不为null的指定字段的条目。
     *
     * > **说明：**
     * >
     * > 使用isNotNull时需要结合[Schema]{@link distributedKVStore.Schema}使用。
     * >
     * > 使用Schema创建数据库请参见[通过键值型数据库实现数据持久化](docroot://database/data-persistence-by-kv-store.md#开发步骤)中使用getKVStore()方法创建并获
     * > 取键值数据库示例。
     *
     * @param { string } field - 表示指定字段，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    isNotNull(field: string): Query;

    /**
     * 创建一个带有左括号的查询条件组。必须与[endGroup()]{@link distributedKVStore.Query#endGroup}成对使用，以形成完整的查询条件分组。
     *
     * @returns { Query } 返回Query对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    beginGroup(): Query;

    /**
     * 创建一个带有右括号的查询条件组。必须与[beginGroup()]{@link distributedKVStore.Query#beginGroup}成对使用，以形成完整的查询条件分组。
     *
     * @returns { Query } 返回Query对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    endGroup(): Query;

    /**
     * 创建具有指定键前缀的查询条件。
     *
     * @param { string } prefix - 表示指定的键前缀，长度范围为0-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}，不能包含'^'。包含'^'将导致谓
     *     词失效，查询结果会返回数据库中的所有数据。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    prefixKey(prefix: string): Query;

    /**
     * 设置一个指定的索引，将优先用于查询。
     *
     * @param { string } index - 表示要设置的索引，不能包含'^'。包含'^'将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    setSuggestIndex(index: string): Query;

    /**
     * 添加设备ID作为Key的前缀。
     *
     * > **说明：**
     * >
     * > 其中deviceId为[DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo}中的
     * > networkId，通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @returns { Query } 返回Query对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    deviceId(deviceId: string): Query;

    /**
     * 获取Query对象的查询语句。
     *
     * @returns { string } 返回Query对象构建的查询语句字符串，可用于查看和调试当前的查询条件。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    getSqlLike(): string;
  }

  /**
   * SingleKVStore数据库实例，提供增加数据、删除数据和订阅数据变更、订阅数据端端同步完成的方法。
   *
   * 在调用SingleKVStore的方法前，需要先通过
   * [getKVStore]{@link distributedKVStore.KVManager.getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>)}
   * 构建一个SingleKVStore实例。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  interface SingleKVStore {
    /**
     * 添加指定类型键值对到数据库，使用callback异步回调。若Key已存在则更新对应Value；若已订阅数据变更通知，将触发变更通知回调。
     *
     * @param { string } key - 要添加数据的Key，不能为空且长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。
     * @param { Uint8Array | string | long | double | boolean } value - 要添加数据的value，支持Uint8Array、string、number、boolean，
     *     Uint8Array、string的长度范围为0-[MAX_VALUE_LENGTH]{@link distributedKVStore.Constants}。
     * @param { AsyncCallback<void> } callback - 回调函数。数据添加成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    put(key: string, value: Uint8Array | string | long | double | boolean, callback: AsyncCallback<void>): void;

    /**
     * 添加指定类型键值对到数据库，使用Promise异步回调。若Key已存在则更新对应Value；若已订阅数据变更通知，将触发变更通知回调。
     *
     * @param { string } key - 要添加数据的Key，不能为空且长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。
     * @param { Uint8Array | string | long | double | boolean } value - 要添加数据的value，支持Uint8Array、string、number、boolean，
     *     Uint8Array、string的长度范围为0-[MAX_VALUE_LENGTH]{@link distributedKVStore.Constants}。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    put(key: string, value: Uint8Array | string | long | double | boolean): Promise<void>;

    /**
     * 批量插入键值对到SingleKVStore数据库中，使用callback异步回调。若Key已存在则更新对应Value；若已订阅数据变更通知，将触发变更通知回调。
     *
     * @param { Entry[] } entries - 表示要批量插入的键值对。一个entries对象中允许的最大数据量为512MB。
     * @param { AsyncCallback<void> } callback - 回调函数。数据批量插入成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    putBatch(entries: Entry[], callback: AsyncCallback<void>): void;

    /**
     * 批量插入键值对到SingleKVStore数据库中，使用Promise异步回调。若Key已存在则更新对应Value；若已订阅数据变更通知，将触发变更通知回调。
     *
     * @param { Entry[] } entries - 表示要批量插入的键值对。一个entries对象中允许的最大数据量为512MB。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    putBatch(entries: Entry[]): Promise<void>;

    /**
     * 批量写入键值对数据，每个ValuesBucket对象包含key和value字段，使用callback异步回调。

     *
     * @param { Array<ValuesBucket> } value - 表示要插入的数据。
     * @param { AsyncCallback<void> } callback - 回调函数。成功时err为undefined，失败时err为错误对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @systemapi
     * @StageModelOnly
     * [@since](https://gitcode.com/since) 9 dynamic
     */
    putBatch(value: Array<ValuesBucket>, callback: AsyncCallback<void>): void;

    /**
     * 批量写入键值对数据，每个ValuesBucket对象包含key和value字段，使用Promise异步回调。
     *
     * @param { Array<ValuesBucket> } value - 表示要插入的数据。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @systemapi
     * @StageModelOnly
     * [@since](https://gitcode.com/since) 9 dynamic
     */
    putBatch(value: Array<ValuesBucket>): Promise<void>;

    /**
     * 将值写入SingleKVStore数据库，使用callback异步回调。
     *
     * @param { Array<ValuesBucket> } value - 表示要插入的数据。
     * @param { AsyncCallback<void> } callback - 回调函数。
     * [@throws](https://gitcode.com/throws) { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @systemapi
     * @stagemodelonly
     * [@since](https://gitcode.com/since) 23 static
     */
    putValuesBuckets(value: Array<ValuesBucket>, callback: AsyncCallback<void>): void;

    /**
     * 将valuesbucket类型的值写入SingleKVStore数据库，使用Promise异步回调。
     *
     * @param { Array<ValuesBucket> } value - 表示要插入的数据。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @systemapi
     * @stagemodelonly
     * [@since](https://gitcode.com/since) 23 static
     */
    putValuesBuckets(value: Array<ValuesBucket>): Promise<void>;

    /**
     * 从数据库中删除指定键值的数据，使用callback异步回调。删除成功后，指定键值对将被永久删除，无法再通过get等方法查询；若已订阅数据变更通知，将触发变更通知回调。
     *
     * @param { string } key - 要删除数据的Key，不能为空且长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。
     * @param { AsyncCallback<void> } callback - 回调函数。删除指定的数据成功，err为undefined，否则为错误对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    delete(key: string, callback: AsyncCallback<void>): void;

    /**
     * 从数据库中删除指定键值的数据，使用Promise异步回调。删除成功后，指定键值对将被永久删除，无法再通过get等方法查询；若已订阅数据变更通知，将触发变更通知回调。
     *
     * @param { string } key - 要删除数据的Key，不能为空且长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    delete(key: string): Promise<void>;

    /**
     * 从数据库中删除符合predicates条件的键值对，使用callback异步回调。
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件，不允许为null。
     * @param { AsyncCallback<void> } callback - 回调函数。成功时err为undefined，失败时err为错误对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    delete(predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<void>): void;

    /**
     * 从数据库中删除符合predicates条件的键值对，使用Promise异步回调。
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件，不允许为null。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    delete(predicates: dataSharePredicates.DataSharePredicates): Promise<void>;

    /**
     * 批量删除SingleKVStore数据库中的键值对，使用callback异步回调。删除成功后，指定键值对将被永久删除，无法再通过get等方法查询；若已订阅数据变更通知，将触发变更通知回调。
     *
     * @param { string[] } keys - 表示要批量删除的键名列表，不能为空，数组中每个元素的长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。
     * @param { AsyncCallback<void> } callback - 回调函数。批量删除指定的数据成功，err为undefined，否则为错误对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    deleteBatch(keys: string[], callback: AsyncCallback<void>): void;

    /**
     * 批量删除SingleKVStore数据库中的键值对，使用Promise异步回调。删除成功后，指定键值对将被永久删除，无法再通过get等方法查询；若已订阅数据变更通知，将触发变更通知回调。
     *
     * @param { string[] } keys - 表示要批量删除的键名列表，不能为空，数组中每个元素的长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    deleteBatch(keys: string[]): Promise<void>;

    /**
     * 删除指定设备的数据，使用callback异步回调。删除成功后，指定设备的所有数据将从本地数据库中永久移除，无法再通过get等方法查询该设备的数据。
     *
     * > **说明：**
     * >
     * > 其中deviceId为[DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo}中的
     * > networkId，通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要删除其数据的设备，不能为空。
     * @param { AsyncCallback<void> } callback - 回调函数。删除指定设备的数据成功，err为undefined，否则为错误对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    removeDeviceData(deviceId: string, callback: AsyncCallback<void>): void;

    /**
     * 删除指定设备的数据，使用Promise异步回调。删除成功后，指定设备的所有数据将从本地数据库中永久移除，无法再通过get等方法查询该设备的数据。
     *
     * > **说明：**
     * >
     * > 其中deviceId为[DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo}中的
     * > networkId，通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要删除其数据的设备，不能为空。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    removeDeviceData(deviceId: string): Promise<void>;

    /**
     * 获取指定键的值，使用callback异步回调。
     *
     * @param { string } key - 要查询数据的Key，不能为空且长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。
     * @param { AsyncCallback<boolean | string | long | double | Uint8Array> } callback - 回调函数。返回获取查询的值，值的类型取决于存储时的数据类型。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100004 - Not found.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    get(key: string, callback: AsyncCallback<boolean | string | long | double | Uint8Array>): void;

    /**
     * 获取指定键的值，使用Promise异步回调。
     *
     * @param { string } key - 要查询数据的Key，不能为空且长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。
     * @returns { Promise<boolean | string | long | double | Uint8Array> } Promise对象。返回指定键对应的值，值的类型取决于存储时的数据类型。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100004 - Not found.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    get(key: string): Promise<boolean | string | long | double | Uint8Array>;

    /**
     * 获取匹配指定键前缀的所有键值对，使用callback异步回调。
     *
     * @param { string } keyPrefix - 表示要匹配的键前缀，长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。不能包含'^'，包含'^'
     *     将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { AsyncCallback<Entry[]> } callback - 回调函数。返回匹配指定前缀的键值对列表。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void;

    /**
     * 获取匹配指定键前缀的所有键值对，使用Promise异步回调。
     *
     * @param { string } keyPrefix - 表示要匹配的键前缀，长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。不能包含'^'，包含'^'
     *     将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @returns { Promise<Entry[]> } Promise对象。返回匹配指定前缀的键值对列表。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    getEntries(keyPrefix: string): Promise<Entry[]>;

    /**
     * 获取与指定Query对象匹配的键值对列表，使用callback异步回调。
     *
     * @param { Query } query - 表示要查询的对象。
     * @param { AsyncCallback<Entry[]> } callback - 回调函数。返回与指定Query对象匹配的键值对列表。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    getEntries(query: Query, callback: AsyncCallback<Entry[]>): void;

    /**
     * 获取与指定Query对象匹配的键值对列表，使用Promise异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<Entry[]> } Promise对象。返回与指定Query对象匹配的键值对列表。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    getEntries(query: Query): Promise<Entry[]>;

    /**
     * 从SingleKVStore数据库中获取具有指定前缀的结果集，使用callback异步回调。获取结果集后，在使用完毕时需调用
     * [closeResultSet]{@link distributedKVStore.SingleKVStore.closeResultSet(resultSet: KVStoreResultSet, callback: AsyncCallback<void>)}
     * 关闭结果集释放资源。
     *
     * @param { string } keyPrefix - 表示要匹配的键前缀，长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。不能包含'^'，包含'^'
     *     将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { AsyncCallback<KVStoreResultSet> } callback - 回调函数。返回具有指定前缀的结果集。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    getResultSet(keyPrefix: string, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * 从SingleKVStore数据库中获取具有指定前缀的结果集，使用Promise异步回调。获取结果集后，在使用完毕时需调用
     * [closeResultSet]{@link distributedKVStore.SingleKVStore.closeResultSet(resultSet: KVStoreResultSet, callback: AsyncCallback<void>)}
     * 关闭结果集释放资源。
     *
     * @param { string } keyPrefix - 表示要匹配的键前缀，长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。不能包含'^'，包含'^'
     *     将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @returns { Promise<KVStoreResultSet> } Promise对象。返回具有指定前缀的结果集。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    getResultSet(keyPrefix: string): Promise<KVStoreResultSet>;

    /**
     * 获取与指定Query对象匹配的KVStoreResultSet对象，使用callback异步回调。获取结果集后，在使用完毕时需调用
     * [closeResultSet]{@link distributedKVStore.SingleKVStore.closeResultSet(resultSet: KVStoreResultSet, callback: AsyncCallback<void>)}
     * 关闭结果集释放资源。
     *
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<KVStoreResultSet> } callback - 回调函数，获取与指定Query对象匹配的KVStoreResultSet对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    getResultSet(query: Query, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * 获取与指定Query对象匹配的KVStoreResultSet对象，使用Promise异步回调。获取结果集后，在使用完毕时需调用
     * [closeResultSet]{@link distributedKVStore.SingleKVStore.closeResultSet(resultSet: KVStoreResultSet, callback: AsyncCallback<void>)}
     * 关闭结果集释放资源。
     *
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<KVStoreResultSet> } Promise对象。获取与指定Query对象匹配的KVStoreResultSet对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    getResultSet(query: Query): Promise<KVStoreResultSet>;

    /**
     * 获取与指定Predicates对象匹配的KVStoreResultSet对象，使用callback异步回调。获取结果集后，需要及时调用closeResultSet方法关闭结果集以释放资源。
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件，不允许为null。
     * @param { AsyncCallback<KVStoreResultSet> } callback - 回调函数，获取与指定Predicates对象匹配的KVStoreResultSet对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    getResultSet(predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * 获取与指定Predicates对象匹配的KVStoreResultSet对象，使用Promise异步回调。获取结果集后，需要及时调用closeResultSet方法关闭结果集以释放资源。
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件，不允许为null。
     * @returns { Promise<KVStoreResultSet> } Promise对象。返回KVStoreResultSet对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    getResultSet(predicates: dataSharePredicates.DataSharePredicates): Promise<KVStoreResultSet>;

    /**
     * 关闭由[SingleKVStore.getResultSet]{@link distributedKVStore.SingleKVStore.getResultSet(keyPrefix: string)}返回的
     * KVStoreResultSet对象，使用callback异步回调。关闭结果集后，该结果集对象将不可再用，相关数据库资源被释放。
     *
     * @param { KVStoreResultSet } resultSet - 表示要关闭的KVStoreResultSet对象。
     * @param { AsyncCallback<void> } callback - 回调函数。关闭KVStoreResultSet对象成功，err为undefined，否则为错误对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    closeResultSet(resultSet: KVStoreResultSet, callback: AsyncCallback<void>): void;

    /**
     * 关闭由[SingleKVStore.getResultSet]{@link distributedKVStore.SingleKVStore.getResultSet(keyPrefix: string)}返回的
     * KVStoreResultSet对象，使用Promise异步回调。关闭结果集后，该结果集对象将不可再用，相关数据库资源被释放。
     *
     * @param { KVStoreResultSet } resultSet - 表示要关闭的KVStoreResultSet对象。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    closeResultSet(resultSet: KVStoreResultSet): Promise<void>;

    /**
     * 获取与指定Query对象匹配的结果数，使用callback异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<int> } callback - 回调函数。返回与指定Query对象匹配的结果数。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100004 - Not found.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    getResultSize(query: Query, callback: AsyncCallback<int>): void;

    /**
     * 获取与指定Query对象匹配的结果数，使用Promise异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<int> } Promise对象。获取与指定Query对象匹配的结果数。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100003 - Database corrupted.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100004 - Not found.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    getResultSize(query: Query): Promise<int>;

    /**
     * 以指定名称备份数据库到默认路径（context.databaseDir），使用callback异步回调。如需备份到自定义路径，请使用
     * [backupEx]{@link distributedKVStore.SingleKVStore.backupEx}接口。
     *
     * @param { string } file - 备份数据库的指定名称，不能为空，无长度限制，不能包含特殊字符'/'。
     * @param { AsyncCallback<void> } callback - 回调函数。当以指定名称备份数据库成功，err为undefined，否则为错误对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    backup(file: string, callback: AsyncCallback<void>): void;

    /**
     * 以指定名称备份数据库到默认路径（context.databaseDir），使用Promise异步回调。如需备份到自定义路径，请使用
     * [backupEx]{@link distributedKVStore.SingleKVStore.backupEx}接口。
     *
     * @param { string } file - 备份数据库的指定名称，不能为空，无长度限制，不能包含特殊字符'/'。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    backup(file: string): Promise<void>;

    /**
     * 以指定名称和路径备份数据库，使用Promise异步回调。
     *
     * @param { BackupConfig } backupConfig - 备份数据库的信息（名称和路径）。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100000 - Input parameters do not meet the API requirements, such as invalid value
     *     ranges, length limits, or incorrect formats.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * [@since](https://gitcode.com/since) 24 dynamic&static
     */
    backupEx(backupConfig: BackupConfig): Promise<void>;

    /**
     * 从数据库默认路径（context.databaseDir）下指定名称的备份文件恢复数据库，使用callback异步回调。恢复成功后，当前数据库中的数据将被替换为备份文件中的数据，原有的未备份数据将丢失。如需从自定义路径恢复，请
     * 使用[restoreEx]{@link distributedKVStore.SingleKVStore.restoreEx}接口。
     *
     * @param { string } file - 指定的数据库文件名称，不能为空，无长度限制，不能包含特殊字符'/'。
     * @param { AsyncCallback<void> } callback - 回调函数。当从指定的数据库文件恢复数据库成功，err为undefined，否则为错误对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    restore(file: string, callback: AsyncCallback<void>): void;

    /**
     * 从数据库默认路径（context.databaseDir）下指定名称的备份文件恢复数据库，使用Promise异步回调。恢复成功后，当前数据库中的数据将被替换为备份文件中的数据，原有的未备份数据将丢失。如需从自定义路径恢复，请使
     * 用[restoreEx]{@link distributedKVStore.SingleKVStore.restoreEx}接口。
     *
     * @param { string } file - 指定的数据库文件名称，不能为空，无长度限制，不能包含特殊字符'/'。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    restore(file: string): Promise<void>;

    /**
     * 从指定路径和名称的备份文件恢复数据库，使用Promise异步回调。恢复成功后，当前数据库中的数据将被替换为备份文件中的数据，原有的未备份数据将丢失。
     *
     * @param { BackupConfig } backupConfig - 备份数据库的信息（名称和路径）。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100000 - Input parameters do not meet the API requirements, such as invalid value
     *     ranges, length limits, or incorrect formats.
     * [@throws](https://gitcode.com/throws) { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * [@since](https://gitcode.com/since) 24 dynamic&static
     */
    restoreEx(backupConfig: BackupConfig): Promise<void>;

    /**
     * 根据指定名称从默认路径（context.databaseDir）删除备份文件，使用callback异步回调。删除备份文件后，将无法再通过
     * [restore]{@link distributedKVStore.SingleKVStore.restore(file: string)}接口恢复该备份文件中的数据。如需从自定义路径删除备份，请使用
     * [deleteBackupEx]{@link distributedKVStore.SingleKVStore.deleteBackupEx}接口。
     *
     * @param { Array<string> } files - 删除备份文件所指定的名称，不能为空，无长度限制，不能包含特殊字符'/'。
     * @param { AsyncCallback<Array<[string, int]>> } callback - 回调函数，返回删除备份的文件名及其处理结果。
     * [@throws](https://gitcode.com/throws) { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * [@since](https://gitcode.com/since) 9 dynamic
     * [@since](https://gitcode.com/since) 23 static
     */
    deleteBackup(files: Array<string>, callback: AsyncCallback<Array<[string, int]>>): void;

    /**
     * 根据指定名称从默认路径（context.databaseDir）删除备份文件，使用Promise异步回调。删除备份文件后，将无法再通过
     * [restore]{@link distributedKVStore.SingleKVStore.restore(file: string, callback: AsyncCallback<void>)}接口恢复该备份文件中的
     * 数据。如需从自定义路径删除备份，请使用[deleteBackupEx]{@link distributedKVStore.SingleKVStore.deleteBackupEx}接口。
     *
     * @param { Array<string> } files - 删除备份文件所指定的名称，不能为空，无长度限制，不能包含特殊字符'/'。
     * @returns { Promise<Array<[string, int]>> } Promise对象，返回删除备份的文件名及其处理结果。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    deleteBackup(files: Array<string>): Promise<Array<[string, int]>>;

    /**
     * 根据指定名称和路径删除备份文件，使用Promise异步回调。
     *
     * @param { BackupConfig } backupConfig - 备份数据库的信息（名称和路径）。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 15100000 - Input parameters do not meet the API requirements, such as invalid value
     *     ranges, length limits, or incorrect formats.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 24 dynamic&static
     */
    deleteBackupEx(backupConfig: BackupConfig): Promise<void>;

    /**
     * 启动SingleKVStore数据库中的事务，使用callback异步回调。启动事务后，后续的数据库操作将纳入此事务范围，直到调用
     * [commit]{@link distributedKVStore.SingleKVStore.commit(callback: AsyncCallback<void>)}提交或
     * [rollback]{@link distributedKVStore.SingleKVStore.rollback(callback: AsyncCallback<void>)}回滚才会结束事务。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。启动SingleKVStore数据库中的事务成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    startTransaction(callback: AsyncCallback<void>): void;

    /**
     * 启动SingleKVStore数据库中的事务，使用Promise异步回调。启动事务后，后续的数据库操作将纳入此事务范围，直到调用
     * [commit]{@link distributedKVStore.SingleKVStore.commit(callback: AsyncCallback<void>)}提交或
     * [rollback]{@link distributedKVStore.SingleKVStore.rollback(callback: AsyncCallback<void>)}回滚才会结束事务。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    startTransaction(): Promise<void>;

    /**
     * 提交SingleKVStore数据库中的事务，使用callback异步回调。需先调用
     * [startTransaction]{@link distributedKVStore.SingleKVStore.startTransaction(callback: AsyncCallback<void>)}启动事务后再调
     * 用本接口提交事务。提交成功后，事务期间的所有数据变更将永久生效并写入数据库。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。提交SingleKVStore数据库中的事务成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    commit(callback: AsyncCallback<void>): void;

    /**
     * 提交SingleKVStore数据库中的事务，使用Promise异步回调。需先调用
     * [startTransaction]{@link distributedKVStore.SingleKVStore.startTransaction(callback: AsyncCallback<void>)}启动事务后再调
     * 用本接口提交事务。提交成功后，事务期间的所有数据变更将永久生效并写入数据库。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    commit(): Promise<void>;

    /**
     * 在SingleKVStore数据库中回滚事务，使用callback异步回调。需先调用
     * [startTransaction]{@link distributedKVStore.SingleKVStore.startTransaction(callback: AsyncCallback<void>)}启动事务后再调
     * 用本接口回滚事务。回滚成功后，事务期间的所有数据变更将被丢弃，不会写入数据库。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。SingleKVStore数据库中回滚事务成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    rollback(callback: AsyncCallback<void>): void;

    /**
     * 在SingleKVStore数据库中回滚事务，使用Promise异步回调。需先调用
     * [startTransaction]{@link distributedKVStore.SingleKVStore.startTransaction(callback: AsyncCallback<void>)}启动事务后再调
     * 用本接口回滚事务。回滚成功后，事务期间的所有数据变更将被丢弃，不会写入数据库。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    rollback(): Promise<void>;

    /**
     * 设定是否开启端端同步，使用callback异步回调。开启端端同步后，数据库中的数据可在多设备间自动同步；关闭后则不会自动同步，需要手动调用
     * [sync]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}接口触发同步。
     *
     * @param { boolean } enabled - 设定是否开启端端同步，true表示开启端端同步，false表示不启用端端同步。
     * @param { AsyncCallback<void> } callback - 回调函数。设定成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    enableSync(enabled: boolean, callback: AsyncCallback<void>): void;

    /**
     * 设定是否开启端端同步，使用Promise异步回调。开启端端同步后，数据库中的数据可在多设备间自动同步；关闭后则不会自动同步，需要手动调用
     * [sync]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}接口触发同步。
     *
     * @param { boolean } enabled - 设定是否开启端端同步，true表示开启端端同步，false表示不启用端端同步。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    enableSync(enabled: boolean): Promise<void>;

    /**
     * 设置同步范围标签，使用callback异步回调。通过设置本地设备和远程设备的同步标签，决定哪些设备间可以进行数据同步。只有当本地设备的标签与远程设备的标签存在交集时，两端才允许同步数据。
     *
     * @param { string[] } localLabels - 表示本地设备的同步标签，用于标识本设备可参与同步的范围。
     * @param { string[] } remoteSupportLabels - 表示期望同步数据的对端设备的同步标签，用于标识允许同步的对端设备范围。当本端的remoteSupportLabels与对端的
     *     localLabels存在交集时，设备间才允许数据同步。
     * @param { AsyncCallback<void> } callback - 回调函数。设置成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    setSyncRange(localLabels: string[], remoteSupportLabels: string[], callback: AsyncCallback<void>): void;

    /**
     * 设置同步范围标签，使用Promise异步回调。通过设置本地设备和远程设备的同步标签，决定哪些设备间可以进行数据同步。只有当本地设备的标签与远程设备的标签存在交集时，两端才允许同步数据。
     *
     * @param { string[] } localLabels - 表示本地设备的同步标签，用于标识本设备可参与同步的范围。
     * @param { string[] } remoteSupportLabels - 表示期望同步数据的对端设备的同步标签，用于标识允许同步的对端设备范围。当本端的remoteSupportLabels与对端的
     *     localLabels存在交集时，设备间才允许数据同步。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    setSyncRange(localLabels: string[], remoteSupportLabels: string[]): Promise<void>;

    /**
     * 设置数据库端端同步允许的默认延时，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 设置默认延时后，调用
     * > [sync]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}接口不会立即触发
     * > 端端同步，而是等待指定的延时时间后再执行。
     *
     * @param { int } defaultAllowedDelayMs - 表示一个延时时间，单位为毫秒（ms），取值范围为0或[100, 86400000]。
     * @param { AsyncCallback<void> } callback - 回调函数。设置成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    setSyncParam(defaultAllowedDelayMs: int, callback: AsyncCallback<void>): void;

    /**
     * 设置数据库端端同步允许的默认延时，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 设置默认延时后，调用
     * > [sync]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}接口不会立即触发
     * > 端端同步，而是等待指定的延时时间后再执行。
     *
     * @param { int } defaultAllowedDelayMs - 表示一个延时时间，单位为毫秒（ms），取值范围为0或[100, 86400000]。
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    setSyncParam(defaultAllowedDelayMs: int): Promise<void>;

    /**
     * 在手动同步方式下，触发数据库端端同步。同步结果可通过订阅
     * [on('syncComplete')]{@link distributedKVStore.SingleKVStore.on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>)}
     * 事件获取。关于键值型数据库的端端同步方式说明，请见[键值型数据库跨设备数据同步](docroot://database/data-sync-of-kv-store.md)。
     *
     * > **说明：**
     * >
     * > 其中deviceIds为[DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo}中的
     * > networkId, 通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string[] } deviceIds - 同一组网环境下，需要同步的设备的networkId列表。
     * @param { SyncMode } mode - 同步模式。
     * @param { int } delayMs - 可选参数，允许延时时间，单位：ms（毫秒），默认为0。设置delayMs后，调用sync接口时延时时间为delayMs。未设置时以
     *     [setSyncParam]{@link distributedKVStore.SingleKVStore.setSyncParam(defaultAllowedDelayMs: int, callback: AsyncCallback<void>)}
     *     设置的时长为准。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    sync(deviceIds: string[], mode: SyncMode, delayMs?: int): void;

    /**
     * 在手动同步方式下，触发数据库端端同步，支持按查询条件过滤同步数据。同步结果可通过订阅
     * [on('syncComplete')]{@link distributedKVStore.SingleKVStore.on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>)}
     * 事件获取。关于键值型数据库的端端同步方式说明，请见[键值型数据库跨设备数据同步](docroot://database/data-sync-of-kv-store.md)。
     *
     * > **说明：**
     * >
     * > 其中deviceIds为[DeviceBasicInfo]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceBasicInfo}中的
     * > networkId, 通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string[] } deviceIds - 同一组网环境下，需要同步的设备的networkId列表。
     * @param { Query } query - 表示数据库的查询谓词条件。
     * @param { SyncMode } mode - 同步模式。
     * @param { int } delayMs - 可选参数，允许延时时间，单位：ms（毫秒），默认为0。设置delayMs后，调用sync接口时延时时间为delayMs。未设置时以
     *     [setSyncParam]{@link distributedKVStore.SingleKVStore.setSyncParam(defaultAllowedDelayMs: int, callback: AsyncCallback<void>)}
     *     设置的时长为准。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    sync(deviceIds: string[], query: Query, mode: SyncMode, delayMs?: int): void;

    /**
     * 订阅指定类型的数据变更通知。调用on订阅后，在不需要监听时必须调用
     * [off('dataChange')]{@link distributedKVStore.SingleKVStore.off(event: 'dataChange', listener?: Callback<ChangeNotification>)}
     * 取消订阅。
     *
     * @param { 'dataChange' } event - 订阅的事件名，固定为'dataChange'，表示数据变更事件。
     * @param { SubscribeType } type - 表示订阅的类型。
     * @param { Callback<ChangeNotification> } listener - 回调函数。成功返回数据变更时通知的对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>): void;

    /**
     * 订阅指定类型的数据变更通知。调用onDataChange订阅后，在不需要监听时必须调用offDataChange取消订阅。
     *
     * @param { SubscribeType } type - 表示订阅的类型。.
     * @param { Callback<ChangeNotification> } listener - 回调函数。成功返回数据变更时通知的对象。
     * @throws { BusinessError } 15100001 - Over max limits.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    onDataChange(type: SubscribeType, listener: Callback<ChangeNotification>): void;

    /**
     * 订阅端端同步完成事件回调通知。调用on订阅后，在不需要监听时必须调用
     * [off('syncComplete')]{@link distributedKVStore.SingleKVStore.off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>)}
     * 取消订阅。
     *
     * @param { 'syncComplete' } event - 订阅的事件名，固定为'syncComplete'，表示同步完成事件。
     * @param { Callback<Array<[string, number]>> } syncCallback - 回调函数。用于向调用方发送同步结果的回调。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>): void;

    /**
     * 订阅端端同步完成事件回调通知。调用onSyncComplete订阅后，在不需要监听时必须调用offSyncComplete取消订阅。
     *
     * @param { Callback<Array<[string, int]>> } syncCallback - 回调函数。用于向调用方发送同步结果的回调。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    onSyncComplete(syncCallback: Callback<Array<[string, int]>>): void;

    /**
     * 取消订阅数据变更通知。必须先调用
     * [on('dataChange')]{@link distributedKVStore.SingleKVStore.on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>)}
     * 订阅后，才能调用off取消订阅。
     *
     * @param { 'dataChange' } event - 取消订阅的事件名，固定为'dataChange'，表示数据变更事件。
     * @param { Callback<ChangeNotification> } listener - 取消订阅的函数。如不设置callback，则取消所有已订阅的函数。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    off(event: 'dataChange', listener?: Callback<ChangeNotification>): void;

    /**
     * 取消订阅数据变更通知。必须先调用onDataChange订阅后，才能调用offDataChange取消订阅。
     *
     * @param { Callback<ChangeNotification> } 取消订阅的函数。如不设置callback，则取消所有已订阅的函数。
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    offDataChange(listener?: Callback<ChangeNotification>): void;

    /**
     * 取消订阅端端同步完成事件回调通知。必须先调用
     * [on('syncComplete')]{@link distributedKVStore.SingleKVStore.on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>)}
     * 订阅后，才能调用off取消订阅。
     *
     * @param { 'syncComplete' } event - 取消订阅的事件名，固定为'syncComplete'，表示同步完成事件。
     * @param { Callback<Array<[string, number]>> } syncCallback - 取消订阅的同步完成回调函数。如果该参数不填，则取消所有已订阅的同步完成回调函数。需要注意的是：如果同一个数
     *     据库存在多个ArkTS实例（通过
     *     [getKVStore]{@link distributedKVStore.KVManager.getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>)}
     *     接口获取），且这些实例分别注册了同步完成事件回调，那么当任意一个实例调用off('syncComplete')且不传入syncCallback参数（即取消该实例的所有回调）时，其他实例已订阅的同步完成回调函数也会被一并
     *     取消。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @since 9 dynamic
     */
    off(event: 'syncComplete', syncCallback?: Callback<Array<[string, number]>>): void;

    /**
     * 取消订阅端端同步完成事件回调通知。必须先调用onSyncComplete订阅后，才能调用offSyncComplete取消订阅。
     *
     * @param { Callback<Array<[string, int]>> } 取消订阅的同步完成回调函数。如果该参数不填，则取消所有已订阅的同步完成回调函数。
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 23 static
     */
    offSyncComplete(syncCallback?: Callback<Array<[string, int]>>): void;

    /**
     * 获取数据库的安全级别，使用callback异步回调。
     *
     * @param { AsyncCallback<SecurityLevel> } callback - 回调函数。返回数据库的安全级别。
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getSecurityLevel(callback: AsyncCallback<SecurityLevel>): void;

    /**
     * 获取数据库的安全级别，使用Promise异步回调。
     *
     * @returns { Promise<SecurityLevel> } Promise对象。返回数据库的安全级别。
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getSecurityLevel(): Promise<SecurityLevel>;

    /**
     * 更新数据库的加密密钥，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > rekey仅对创建时已启用加密的数据库有效，即Options中encrypt需设置为true，非加密数据库调用此接口将返回错误。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100006 - Failed to update the key.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    rekey(): Promise<void>;
  }

  /**
   * 设备协同数据库，继承自SingleKVStore，提供查询数据和端端同步数据的方法，可以使用SingleKVStore的方法例如：put、putBatch等。
   *
   * 设备协同数据库，以设备维度对数据进行区分，每台设备仅能写入和修改本设备的数据，其它设备的数据对其是只读的，无法修改其它设备的数据。
   *
   * 比如，可以使用设备协同数据库实现设备间的图片分享，可以查看其他设备的图片，但无法修改和删除其他设备的图片。
   *
   * 在调用DeviceKVStore的方法前，需要先通过
   * [getKVStore]{@link distributedKVStore.KVManager.getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>)}
   * 构建一个DeviceKVStore实例。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
   * @stagemodelonly [staticonly]
   * @since 9 dynamic
   * @since 23 static
   */
  interface DeviceKVStore extends SingleKVStore {
    /**
     * 获取本设备指定键的值，使用callback异步回调。
     *
     * @param { string } key - 要查询数据的Key，不能为空且长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。
     * @param { AsyncCallback<boolean | string | long | double | Uint8Array> } callback - 回调函数。返回获取查询的值。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    get(key: string, callback: AsyncCallback<boolean | string | long | double | Uint8Array>): void;

    /**
     * 获取本设备指定键的值，使用Promise异步回调。
     *
     * @param { string } key - 要查询数据的Key，不能为空且长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。
     * @returns { Promise<boolean | string | long | double | Uint8Array> } Promise对象。返回获取查询的值，值的类型取决于存储时的数据类型。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    get(key: string): Promise<boolean | string | long | double | Uint8Array>;

    /**
     * 获取与指定设备ID和Key匹配的值，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @param { string } key - 要查询数据的键名，不能为空且长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。
     * @param { AsyncCallback<boolean | string | long | double | Uint8Array> } callback - 回调函数。成功时返回匹配给定条件的值（值的类型取决于存储时的
     *     数据类型），失败时返回错误对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    get(deviceId: string, key: string, callback: AsyncCallback<boolean | string | long | double | Uint8Array>): void;

    /**
     * 获取与指定设备ID和Key匹配的值，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @param { string } key - 表示要查询Key值的键，不能为空且长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。
     * @returns { Promise<boolean | string | long | double | Uint8Array> } Promise对象。返回匹配给定条件的值，值的类型取决于存储时的数据类型。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    get(deviceId: string, key: string): Promise<boolean | string | long | double | Uint8Array>;

    /**
     * 获取匹配本设备指定键前缀的所有键值对，使用callback异步回调。
     *
     * @param { string } keyPrefix - 表示要匹配的键前缀，长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。不能包含'^'，包含'^'
     *     将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { AsyncCallback<Entry[]> } callback - 回调函数。返回匹配指定前缀的键值对列表。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(keyPrefix: string, callback: AsyncCallback<Entry[]>): void;

    /**
     * 获取匹配本设备指定键前缀的所有键值对，使用Promise异步回调。
     *
     * @param { string } keyPrefix - 表示要匹配的键前缀，长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。不能包含'^'，包含'^'
     *     将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @returns { Promise<Entry[]> } Promise对象。返回匹配指定前缀的键值对列表。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(keyPrefix: string): Promise<Entry[]>;

    /**
     * 获取与指定设备ID和Key前缀匹配的所有键值对，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @param { string } keyPrefix - 表示要匹配的键前缀，长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。不能包含'^'，包含'^'
     *     将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { AsyncCallback<Entry[]> } callback - 回调函数，返回满足给定条件的所有键值对的列表。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(deviceId: string, keyPrefix: string, callback: AsyncCallback<Entry[]>): void;

    /**
     * 获取与指定设备ID和Key前缀匹配的所有键值对，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @param { string } keyPrefix - 表示要匹配的键前缀，长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。不能包含'^'，包含'^'
     *     将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @returns { Promise<Entry[]> } Promise对象。返回匹配给定条件的所有键值对的列表。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(deviceId: string, keyPrefix: string): Promise<Entry[]>;

    /**
     * 获取本设备与指定Query对象匹配的键值对列表，使用callback异步回调。
     *
     * @param { Query } query - 表示要查询的对象。
     * @param { AsyncCallback<Entry[]> } callback - 回调函数。返回本设备与指定Query对象匹配的键值对列表。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(query: Query, callback: AsyncCallback<Entry[]>): void;

    /**
     * 获取本设备与指定Query对象匹配的键值对列表，使用Promise异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<Entry[]> } Promise对象。返回本设备与指定Query对象匹配的键值对列表。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(query: Query): Promise<Entry[]>;

    /**
     * 获取与指定设备ID和Query对象匹配的键值对列表，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<Entry[]> } callback - 回调函数。返回与指定设备ID和Query对象匹配的键值对列表。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(deviceId: string, query: Query, callback: AsyncCallback<Entry[]>): void;

    /**
     * 获取与指定设备ID和Query对象匹配的键值对列表，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<Entry[]> } Promise对象。返回与指定设备ID和Query对象匹配的键值对列表。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getEntries(deviceId: string, query: Query): Promise<Entry[]>;

    /**
     * 从DeviceKVStore数据库中获取本设备具有指定前缀的结果集，使用callback异步回调。获取结果集后，在使用完毕时需调用
     * [closeResultSet]{@link distributedKVStore.SingleKVStore.closeResultSet(resultSet: KVStoreResultSet, callback: AsyncCallback<void>)}
     * 关闭结果集释放资源。
     *
     * @param { string } keyPrefix - 表示要匹配的键前缀，长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。不能包含'^'，包含'^'
     *     将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { AsyncCallback<KVStoreResultSet> } callback - 回调函数。返回具有指定前缀的结果集。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSet(keyPrefix: string, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * 从DeviceKVStore数据库中获取本设备具有指定前缀的结果集，使用Promise异步回调。获取结果集后，在使用完毕时需调用
     * [closeResultSet]{@link distributedKVStore.SingleKVStore.closeResultSet(resultSet: KVStoreResultSet, callback: AsyncCallback<void>)}
     * 关闭结果集释放资源。
     *
     * @param { string } keyPrefix - 表示要匹配的键前缀，长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。不能包含'^'，包含'^'
     *     将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @returns { Promise<KVStoreResultSet> } Promise对象。返回具有指定前缀的结果集。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSet(keyPrefix: string): Promise<KVStoreResultSet>;

    /**
     * 获取与指定设备ID和Key前缀匹配的KVStoreResultSet对象，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @param { string } keyPrefix - 表示要匹配的键前缀，长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。不能包含'^'，包含'^'
     *     将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @param { AsyncCallback<KVStoreResultSet> } callback - 回调函数。返回与指定设备ID和Key前缀匹配的KVStoreResultSet对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSet(deviceId: string, keyPrefix: string, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * 获取与指定设备ID和Key前缀匹配的KVStoreResultSet对象，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @param { string } keyPrefix - 表示要匹配的键前缀，长度范围为1-[MAX_KEY_LENGTH]{@link distributedKVStore.Constants}。不能包含'^'，包含'^'
     *     将导致谓词失效，查询结果会返回数据库中的所有数据。
     * @returns { Promise<KVStoreResultSet> } Promise对象。返回与指定设备ID和Key前缀匹配的KVStoreResultSet对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSet(deviceId: string, keyPrefix: string): Promise<KVStoreResultSet>;

    /**
     * 获取与本设备指定Query对象匹配的KVStoreResultSet对象，使用callback异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<KVStoreResultSet> } callback - 回调函数。成功时返回与指定Query对象匹配的KVStoreResultSet对象，失败时返回错误对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSet(query: Query, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * 获取与本设备指定Query对象匹配的KVStoreResultSet对象，使用Promise异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<KVStoreResultSet> } Promise对象。获取与本设备指定Query对象匹配的KVStoreResultSet对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSet(query: Query): Promise<KVStoreResultSet>;

    /**
     * 获取与指定设备ID和Query对象匹配的KVStoreResultSet对象，使用callback异步回调。获取结果集后，在使用完毕时需调用
     * [closeResultSet]{@link distributedKVStore.SingleKVStore.closeResultSet(resultSet: KVStoreResultSet, callback: AsyncCallback<void>)}
     * 关闭结果集释放资源。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<KVStoreResultSet> } callback - 回调函数。返回与指定设备ID和Query对象匹配的KVStoreResultSet对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSet(deviceId: string, query: Query, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * 获取与指定设备ID和Query对象匹配的KVStoreResultSet对象，使用Promise异步回调。获取结果集后，在使用完毕时需调用
     * [closeResultSet]{@link distributedKVStore.SingleKVStore.closeResultSet(resultSet: KVStoreResultSet, callback: AsyncCallback<void>)}
     * 关闭结果集释放资源。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<KVStoreResultSet> } Promise对象。返回与指定设备ID和Query对象匹配的KVStoreResultSet对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSet(deviceId: string, query: Query): Promise<KVStoreResultSet>;

    /**
     * 获取与指定Predicates对象匹配的KVStoreResultSet对象，使用callback异步回调。获取结果集后，需要及时调用closeResultSet方法关闭结果集以释放资源。
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件，不允许为null。
     * @param { AsyncCallback<KVStoreResultSet> } callback - Promise对象。返回KVStoreResultSet对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSet(predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * 获取与指定Predicates对象匹配的KVStoreResultSet对象，使用Promise异步回调。获取结果集后，需要及时调用closeResultSet方法关闭结果集以释放资源。
     *
     * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件，不允许为null。
     * @returns { Promise<KVStoreResultSet> } Promise对象。返回KVStoreResultSet对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSet(predicates: dataSharePredicates.DataSharePredicates): Promise<KVStoreResultSet>;

    /**
     * 获取与本设备指定Predicates对象匹配的KVStoreResultSet对象，使用callback异步回调。获取结果集后，需要及时调用closeResultSet方法关闭结果集以释放资源。
     *
     * @param { string } deviceId Indicates the ID of the device to which the results belong.
     * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件，不允许为null。
     * @param { AsyncCallback<KVStoreResultSet> } callback - 回调函数，获取与指定Predicates对象匹配的KVStoreResultSet对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSet(deviceId: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<KVStoreResultSet>): void;

    /**
     * 获取与本设备指定Predicates对象匹配的KVStoreResultSet对象，使用Promise异步回调。获取结果集后，需要及时调用closeResultSet方法关闭结果集以释放资源。
     *
     * @param { string } deviceId Indicates the ID of the device to which the results belong.
     * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件，不允许为null。
     * @returns { Promise<KVStoreResultSet> } Promise对象。返回KVStoreResultSet对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     * <br>2.Incorrect parameters types.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @throws { BusinessError } 15100001 - Over max limits. [since 10]
     * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSet(deviceId: string, predicates: dataSharePredicates.DataSharePredicates): Promise<KVStoreResultSet>;

    /**
     * 获取与本设备指定Query对象匹配的结果数，使用callback异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<int> } callback - 回调函数。返回与本设备指定Query对象匹配的结果数。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSize(query: Query, callback: AsyncCallback<int>): void;

    /**
     * 获取与本设备指定Query对象匹配的结果数，使用Promise异步回调。
     *
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<int> } Promise对象。获取与本设备指定Query对象匹配的结果数。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSize(query: Query): Promise<int>;

    /**
     * 获取与指定设备ID和Query对象匹配的结果数，使用callback异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @param { Query } query - 表示查询对象。
     * @param { AsyncCallback<int> } callback - 回调函数。返回与指定设备ID和Query对象匹配的结果数。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSize(deviceId: string, query: Query, callback: AsyncCallback<int>): void;

    /**
     * 获取与指定设备ID和Query对象匹配的结果数，使用Promise异步回调。
     *
     * > **说明：**
     * >
     * > 其中deviceId通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > deviceId具体获取方式请参考
     * > [sync接口示例]{@link distributedKVStore.SingleKVStore.sync(deviceIds: string[], mode: SyncMode, delayMs?: int)}。
     *
     * @param { string } deviceId - 设备的networkId，标识要查询其数据的设备，不能为空。
     * @param { Query } query - 表示查询对象。
     * @returns { Promise<int> } Promise对象。返回与指定设备ID和Query对象匹配的结果数。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @throws { BusinessError } 15100004 - Not found.
     * @throws { BusinessError } 15100005 - Database or result set already closed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getResultSize(deviceId: string, query: Query): Promise<int>;
  }

  /**
   * 创建一个KVManager对象实例，用于管理数据库对象。
   *
   * @param { KVManagerConfig } config - 提供KVManager实例的配置信息，包括应用的上下文和调用方的包名（不能为空）。
   * @returns { KVManager } 返回创建的KVManager对象实例。
   * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
   *     <br>2.Incorrect parameters types;
   *     <br>3.Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  function createKVManager(config: KVManagerConfig): KVManager;

  /**
   * 分布式键值数据库管理实例，用于获取分布式键值数据库的相关信息。在调用KVManager的方法前，需要先通过[createKVManager]{@link distributedKVStore.createKVManager}构建一
   * 个KVManager实例。
   *
   * @syscap SystemCapability.DistributedDataManager.KVStore.Core
   * @stagemodelonly [staticonly]
   * @crossplatform [since 24]
   * @since 9 dynamic
   * @since 23 static
   */
  interface KVManager {
    /**
     * 通过指定options和storeId，创建并获取分布式键值数据库，使用callback异步回调。获取数据库后，在使用完毕时需调用
     * [closeKVStore]{@link distributedKVStore.KVManager.closeKVStore(appId: string, storeId: string, callback: AsyncCallback<void>)}
     * 关闭数据库释放资源。
     *
     * > **注意：**
     * >
     * > 在获取已有的分布式键值数据库时，如果数据库文件无法打开（例如文件头损坏），将触发自动重建逻辑，并返回新创建的分布式键值数据库实例。建议对重要且无法重新生成的数据使用备份恢复功能，以防止数据丢失。有关备份恢复的使用方法，请参
     * > 阅[数据库备份与恢复](docroot://database/data-backup-and-restore.md)。
     *
     * @param { string } storeId - 数据库唯一标识符，长度范围为1-[MAX_STORE_ID_LENGTH]{@link distributedKVStore.Constants}，且只能包含字母数字或下
     *     划线_。
     * @param { Options } options - 创建分布式键值实例的配置信息。
     * @param { AsyncCallback<T> } callback - 回调函数。返回创建的分布式键值数据库实例（根据kvStoreType的不同，可以创建SingleKVStore实例和DeviceKVStore实例）
     *     。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100002 - Open existed database with changed options.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>): void;

    /**
     * 指定options和storeId，创建并获取分布式键值数据库，使用Promise回调。获取数据库后，在使用完毕时需调用
     * [closeKVStore]{@link distributedKVStore.KVManager.closeKVStore(appId: string, storeId: string, callback: AsyncCallback<void>)}
     * 关闭数据库释放资源。
     *
     * > **注意：**
     * >
     * > 获取已有的分布式键值数据库时，如果数据库文件无法打开（如文件头损坏），将触发自动重建逻辑，并返回新创建的分布式键值数据库实例。建议对重要且无法重新生成的数据使用备份恢复功能，防止数据丢失。备份恢复的使用方法详见
     * > [数据库备份与恢复](docroot://database/data-backup-and-restore.md)。
     *
     * @param { string } storeId - 数据库唯一标识符，长度范围为1-[MAX_STORE_ID_LENGTH]{@link distributedKVStore.Constants}，且只能包含字母数字或下
     *     划线_。
     * @param { Options } options - 创建分布式键值实例的配置信息。
     * @returns { Promise<T> } Promise对象。返回创建的分布式键值数据库实例（根据kvStoreType的不同，可以创建SingleKVStore实例和DeviceKVStore实例）。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @throws { BusinessError } 15100002 - Open existed database with changed options.
     * @throws { BusinessError } 15100003 - Database corrupted.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    getKVStore<T>(storeId: string, options: Options): Promise<T>;

    /**
     * 通过storeId的值关闭指定的分布式键值数据库，使用callback异步回调。此方法与getKVStore()方法配对使用，使用完毕的数据库应通过此方法关闭。
     *
     * @param { string } appId - 应用的BundleName，不可为空且长度范围为1-256字节。
     * @param { string } storeId - 要关闭的数据库唯一标识符，长度范围为1-[MAX_STORE_ID_LENGTH]{@link distributedKVStore.Constants}，且只能包含字母
     *     数字或下划线_。
     * @param { AsyncCallback<void> } callback - 回调函数。当要关闭的数据库成功关闭，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    closeKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void;

    /**
     * 通过storeId的值关闭指定的分布式键值数据库，如果使用kvConfig参数，关闭的是指定路径下的分布式键值数据库，使用Promise异步回调。
     *
     * @param { string } appId - 应用的BundleName，不可为空且长度范围为1-256字节。
     * @param { string } storeId - 要关闭的数据库唯一标识符，长度范围为1-[MAX_STORE_ID_LENGTH]{@link distributedKVStore.Constants}，且只能包含字母
     *     数字或下划线_。
     * @param { Options } [kvConfig] - 要关闭的数据库的配置信息，默认为空。 [since 24]
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    closeKVStore(appId: string, storeId: string, kvConfig?: Options): Promise<void>;

    /**
     * 通过storeId的值删除指定的分布式键值数据库，使用callback异步回调。
     *
     * @param { string } appId - 应用的BundleName，不可为空且长度范围为1-256字节。
     * @param { string } storeId - 要删除的数据库唯一标识符，长度范围为1-[MAX_STORE_ID_LENGTH]{@link distributedKVStore.Constants}，且只能包含字母
     *     数字或下划线_。
     * @param { AsyncCallback<void> } callback - 回调函数。当要删除的数据库成功删除，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100004 - Not found.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>): void;

    /**
     * 通过storeId的值删除指定的分布式键值数据库，如果使用kvConfig参数，删除的是指定路径下的分布式键值数据库，使用Promise异步回调。
     *
     * @param { string } appId - 应用的BundleName，不可为空且长度范围为1-256字节。
     * @param { string } storeId - 要删除的数据库唯一标识符，长度范围为1-[MAX_STORE_ID_LENGTH]{@link distributedKVStore.Constants}，且只能包含字母
     *     数字或下划线_。
     * @param { Options } [kvConfig] - 要删除的数据库的配置信息，默认为空。 [since 24]
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @throws { BusinessError } 15100004 - Not found.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @crossplatform [since 24]
     * @since 9 dynamic
     * @since 23 static
     */
    deleteKVStore(appId: string, storeId: string, kvConfig?: Options): Promise<void>;

    /**
     * 获取所有通过
     * [getKVStore]{@link distributedKVStore.KVManager.getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>)}
     * 方法创建的且没有调用
     * [deleteKVStore]{@link distributedKVStore.KVManager.deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>)}
     * 方法删除的分布式键值数据库的storeId，使用callback异步回调。
     *
     * @param { string } appId - 应用的BundleName，不可为空且长度范围为1-256字节。
     * @param { AsyncCallback<string[]> } callback - 回调函数。返回所有创建的分布式键值数据库的storeId。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getAllKVStoreId(appId: string, callback: AsyncCallback<string[]>): void;

    /**
     * 获取所有通过
     * [getKVStore]{@link distributedKVStore.KVManager.getKVStore<T>(storeId: string, options: Options, callback: AsyncCallback<T>)}
     * 方法创建的且没有调用
     * [deleteKVStore]{@link distributedKVStore.KVManager.deleteKVStore(appId: string, storeId: string, callback: AsyncCallback<void>)}
     * 方法删除的分布式键值数据库的storeId，使用Promise异步回调。
     *
     * @param { string } appId - 应用的BundleName，不可为空且长度范围为1-256字节。
     * @returns { Promise<string[]> } Promise对象。返回所有创建的分布式键值数据库的storeId。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.Core
     * @stagemodelonly [staticonly]
     * @since 9 dynamic
     * @since 23 static
     */
    getAllKVStoreId(appId: string): Promise<string[]>;

    /**
     * 订阅服务终止事件。如果服务终止，需要重新调用
     * [on('dataChange')]{@link distributedKVStore.SingleKVStore.on(event: 'dataChange', type: SubscribeType, listener: Callback<ChangeNotification>)}
     * 和
     * [on('syncComplete')]{@link distributedKVStore.SingleKVStore.on(event: 'syncComplete', syncCallback: Callback<Array<[string, number]>>)}
     * 注册数据变更通知和端端同步完成事件回调通知，并且端端同步操作会返回失败。调用on订阅后，在不需要监听时必须调用
     * [off('distributedDataServiceDie')]{@link distributedKVStore.KVManager.off(event: 'distributedDataServiceDie', deathCallback?: Callback<void>)}
     * 取消订阅。
     *
     * @param { 'distributedDataServiceDie' } event - 订阅的事件名，固定为'distributedDataServiceDie'，即服务终止事件。
     * @param { Callback<void> } deathCallback - 回调函数。订阅成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 9 dynamic
     */
    on(event: 'distributedDataServiceDie', deathCallback: Callback<void>): void;

    /**
     * 订阅服务终止事件。如果服务终止，需要重新调用onDataChange和onSyncComplete注册数据变更通知和端端同步完成事件回调通知，并且端端同步操作会返回失败。
     * 调用onDistributedDataServiceDie订阅后，在不需要监听时必须调用offDistributedDataServiceDie取消订阅
     *
     * @param { Callback<void> } deathCallback -回调函数。订阅成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly
     * @since 23 static
     */
    onDistributedDataServiceDie(deathCallback: Callback<void>): void;

    /**
     * 取消订阅服务状态变更通知。必须先调用
     * [on('distributedDataServiceDie')]{@link distributedKVStore.KVManager.on(event: 'distributedDataServiceDie', deathCallback: Callback<void>)}
     * 订阅后，才能调用off取消订阅。参数中的deathCallback必须是已经订阅过的deathCallback，否则会取消订阅失败。
     *
     * @param { 'distributedDataServiceDie' } event - 取消订阅的事件名，固定为'distributedDataServiceDie'，即服务状态变更事件。
     * @param { Callback<void> } deathCallback - 回调函数。如果该参数不填，那么会将之前订阅过的所有的deathCallback取消订阅。
     * @throws { BusinessError } 401 - Parameter error.Possible causes:1.Mandatory parameters are left unspecified;
     *     <br>2.Incorrect parameters types;
     *     <br>3.Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @since 9 dynamic
     */
    off(event: 'distributedDataServiceDie', deathCallback?: Callback<void>): void;

    /**
     * 取消订阅服务状态变更通知。必须先调用onDistributedDataServiceDie订阅后，才能调用offDistributedDataServiceDie取消订阅。
     * 参数中的deathCallback必须是已经订阅过的deathCallback，否则会取消订阅失败。
     *
     * @param { Callback<void> } [deathCallback] - 回调函数。如果该参数不填，那么会将之前订阅过的所有的deathCallback取消订阅。
     * @syscap SystemCapability.DistributedDataManager.KVStore.DistributedKVStore
     * @stagemodelonly
     * @since 23 static
     */
    offDistributedDataServiceDie(deathCallback?: Callback<void>): void;
  }
}

export default distributedKVStore;
