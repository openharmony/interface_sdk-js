/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * @file 关系型数据库
 * @kit ArkData
 */

import { AsyncCallback, Callback } from './@ohos.base';
import Context from './application/BaseContext';
import dataSharePredicates from './@ohos.data.dataSharePredicates';
/*** if arkts dynamic */
import sendableRelationalStore from './@ohos.data.sendableRelationalStore';
/*** endif */
/**
 * 关系型数据库（Relational Database，RDB）是一种基于关系模型来管理数据的数据库。关系型数据库基于SQLite组件提供了一套完整的对本地数据库进行管理的机制，对外提供了一系列的增、删、改、查等接口，也可以直接运行用户
 * 输入的SQL语句来满足复杂的场景需要。支持通过[ResultSet.getSendableRow]{@link relationalStore.ResultSet.getSendableRow}方法获取Sendable数据，进行跨线程
 * 传递。
 * 
 * 为保证插入并读取数据成功，建议一条数据不超过2MB。如果数据超过2MB，插入操作将成功，读取操作将失败。
 * 
 * 大数据量场景下查询数据可能会导致耗时长甚至应用卡死，如有相关操作可参考文档[批量数据写数据库场景](docroot://arkts-utils/batch-database-operations-guide.md)，且有建议如下：
 * 
 * - 单次查询数据量不超过5000条。
 * - 在[TaskPool]{@link @ohos.taskpool:taskpool}中查询。
 * - 拼接SQL语句尽量简洁。
 * - 合理地分批次查询。
 * 
 * 该模块提供以下关系型数据库相关的常用功能：
 * 
 * - [RdbPredicates]{@link relationalStore.RdbPredicates}：数据库中用来代表数据实体的性质、特征或者数据实体之间关系的谓词，主要用来定义数据库的操作条件。
 * - [RdbStore]{@link relationalStore.RdbStore}：提供管理关系数据库（RDB）方法的接口。
 * - [ResultSet]{@link relationalStore.ResultSet}：提供用户调用关系型数据库查询接口之后返回的结果集合。
 * - [LiteResultSet]{@link relationalStore.LiteResultSet}：提供用户调用关系型数据库
 * [queryWithoutRowCount]{@link relationalStore.RdbStore.queryWithoutRowCount}、
 * [querySqlWithoutRowCount]{@link relationalStore.RdbStore.querySqlWithoutRowCount}等查询接口之后返回的结果集合。与
 * [ResultSet]{@link relationalStore.ResultSet}相比，LiteResultSet不包含查询结果的总行数信息。
 * - [Transaction]{@link relationalStore.Transaction}：提供管理事务对象的接口。
 *
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @crossplatform [since 10]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace relationalStore {
  /**
   * 描述资产附件的状态枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  enum AssetStatus {
    /**
     * 表示资产状态正常。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    ASSET_NORMAL,

    /**
     * 表示资产需要插入到云端。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    ASSET_INSERT,

    /**
     * 表示资产需要更新到云端。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    ASSET_UPDATE,

    /**
     * 表示资产需要在云端删除。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    ASSET_DELETE,

    /**
     * 表示资产状态异常。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    ASSET_ABNORMAL,

    /**
     * 表示资产正在下载到本地设备。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    ASSET_DOWNLOADING,

    /**
     * 表示资产待下载。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ASSET_TO_DOWNLOAD
  }

  /**
   * 记录资产附件（文件、图片、视频等类型文件）的相关信息。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  interface Asset {
    /**
     * 资产的名称，长度不超过256字节。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 资产的uri，在系统里的绝对路径，路径长度不超过1024字节。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 资产在应用沙箱里的路径，路径长度不超过1024字节。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    path: string;

    /**
     * 资产被创建出来的时间。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    createTime: string;

    /**
     * 资产最后一次被修改的时间。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    modifyTime: string;

    /**
     * 资产占用空间的大小。在端云同步机制中，本字段作为判定资产是否发生变更的关键依据之一，需确保在全链路中保持统一、一致的存储格式与取值逻辑。建议所有系统节点均采用标准化处理方式（单位为字节（Byte），取值为非负整数），避免因格式
     * 差异导致同步异常或误判。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    size: string;

    /**
     * 资产的状态，默认值为ASSET_NORMAL。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    status?: AssetStatus;
  }

  /**
   * 表示[Asset]{@link relationalStore.Asset}类型的数组。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  type Assets = Asset[];

  /**
   * 用于表示允许的数据字段类型，接口参数具体类型根据其功能而定。
   *
   * @unionmember { null } 表示值类型为空。
   * @unionmember { long } 表示值类型为长整型。
   * @unionmember { double } 表示值类型为双精度浮点型。
   * @unionmember { string } 表示值类型为字符串。
   * @unionmember { boolean } 表示值类型为布尔值。
   * @unionmember { Uint8Array } 表示值类型为Uint8类型的数组。
   * @unionmember { Asset } 表示值类型为附件Asset。[since 10]
   * @unionmember { Assets } 表示值类型为附件数组Assets。[since 10]
   * @unionmember { Float32Array } 表示值类型为浮点数组。[since 12]
   * @unionmember { bigint } 表示值类型为任意长度的整数。[since 12]
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */

  type ValueType = null | long | double | string | boolean | Uint8Array | Asset | Assets | Float32Array | bigint;

  /**
   * 用于存储键值对的类型。不支持Sendable跨线程传递。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  type ValuesBucket = Record<string, ValueType>;

  /**
   * 用于表示数据库表某一行主键的数据类型。
   *
   * @unionmember { long } 主键的类型可以是长整型。
   * @unionmember { double } 主键的类型可以是双精度浮点型。
   * @unionmember { string } 主键的类型可以是string。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @FaAndStageModel
   * @since 10 dynamic
   * @since 23 static
   */

  type PRIKeyType = long | double | string;

  /**
   * 用于表示UTC时间的数据类型。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10 dynamic
   * @since 23 static
   */
  type UTCTime = Date;

  /**
   * 用于存储数据库表的主键和修改时间的数据类型。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10 dynamic
   * @since 23 static
   */
  type ModifyTime = Map<PRIKeyType, UTCTime>;

  /**
   * 用于表示数据库表中的某一行数据。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 dynamic&static
   */
  type RowData = Array<ValueType>;

  /**
   * 用于表示数据库表中的多行数据。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 dynamic&static
   */
  type RowsData = Array<RowData>;

  /**
   * 管理关系数据库配置。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  interface StoreConfig {
    /**
     * 数据库文件名，也是数据库唯一标识符，不能为空字符串且不能包含路径分隔符/。同一进程禁止创建两个同名的数据库，否则可能导致端端同步、端云同步、静默访问以及密钥备份等功能出现异常。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 设置数据库安全级别。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 9 dynamic
     * @since 23 static
     */
    securityLevel: SecurityLevel;

    /**
     * 指定数据库是否加密，默认非加密。数据库创建完成后，此参数不允许直接修改。如需变更数据库加密状态，请调用[rekeyEx]{@link relationalStore.RdbStore.rekeyEx}接口进行更新操作。
     * 
     * true：加密。
     * 
     * false：非加密。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    encrypt?: boolean;

    /**
     * 应用组ID，<!--RP1-->暂不支持指定dataGroupId在对应的沙箱路径下创建RdbStore实例。<!--RP1End-->
     * 
     * **模型约束：** 此属性仅在Stage模型下可用。
     * 
     * 从API version 10开始，支持此可选参数。dataGroupId共享沙箱的方式不支持多进程访问加密数据库，当此参数不填时，默认在本应用沙箱目录下创建RdbStore实例。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @StageModelOnly
     * @since 10 dynamic
     * @since 23 static
     */
    dataGroupId?: string;

    /**
     * 数据库自定义路径。
     * 
     * **使用约束：** 数据库路径大小限制为128字节，如果超过该大小会开库失败，抛出错误码401，请参见[通用错误码](docroot://reference/errorcode-universal.md)。
     * 
     * 从API version 11开始，支持此可选参数。数据库将在如下的目录结构中被创建：context.databaseDir + "/rdb/" + customDir，其中context.databaseDir是应用沙箱对应
     * 的路径，"/rdb/"表示创建的是关系型数据库，customDir表示自定义的路径。当此参数不填时，默认在本应用沙箱目录下创建RdbStore实例。从API version 18开始，如果同时配置了rootDir参数，将打开或
     * 删除如下路径数据库：rootDir + "/" + customDir + "/" + name。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    customDir?: string;

    /**
     * 指定数据库根路径，默认值为空字符串。
     * 
     * 从API version 18开始，支持此可选参数。将从如下目录打开或删除数据库：rootDir + "/" + customDir。通过设置此参数打开的数据库为只读模式，不允许对数据库进行写操作，否则返回错误码801。配置此
     * 参数打开或删除数据库时，应确保对应路径下数据库文件存在，并且有读取权限，否则返回错误码14800010。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    rootDir?: string;

    /**
     * 指定是否自动清理云端删除后同步到本地的数据，true表示自动清理，false表示手动清理，默认自动清理。
     * 
     * 对于端云协同的数据库，当云端删除的数据同步到设备端时，可通过该参数设置设备端是否自动清理。手动清理可以通过
     * [cleanDirtyData<sup>11+</sup>]{@link relationalStore.RdbStore.cleanDirtyData(table: string, cursor: long, callback: AsyncCallback<void>)}
     * 接口清理。
     * 
     * 从API version 11开始，支持此可选参数。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 11 dynamic
     * @since 23 static
     */
    autoCleanDirtyData?: boolean;

    /**
     * 指定本地设备是否自动清理远端设备删除后同步过来的数据，true表示自动清理，false表示手动清理，默认自动清理。若设置为false，需要主动调用
     * [cleanDeviceDirtyData]{@link relationalStore.RdbStore.cleanDeviceDirtyData}进行脏数据清理。
     * 
     * [多设备协同表模式](docroot://database/data-sync-of-rdb-store.md#数据同步存储机制)分布式数据表配置不生效。
     * 
     * **系统接口：** 此接口为系统接口。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    autoCleanDeviceDirtyData?: boolean

    /**
     * 指定数据库是否支持搜索，true表示支持搜索，false表示不支持搜索，默认不支持搜索。
     * 
     * **系统接口：** 此接口为系统接口。
     * 
     * 从API version 11开始，支持此可选参数。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isSearchable?: boolean;

    /**
     * 指定数据库是否支持异常时自动删除，并重建一个空库空表，默认不自动删除。
     * 
     * true：自动删除。
     * 
     * false：不自动删除。
     * 
     * 从API version 12开始，支持此可选参数。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamic
     * @since 23 static
     */
    allowRebuild?: boolean;

    /**
     * 指定数据库是否是向量数据库，true表示向量数据库，false表示关系型数据库，默认为false。
     * 
     * 向量数据库适用于存储和处理高维向量数据，关系型数据库适用于存储和处理结构化数据。
     * 
     * 当使用向量数据库时，在调用deleteRdbStore接口前，应当确保向量数据库已打开的RdbStore和ResultSet均已成功关闭。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 18 dynamic
     * @since 23 static
     */
    vector?: boolean;

    /**
     * 指定数据库是否只读，默认为数据库可读写。
     * 
     * true：只允许从数据库读取数据，不允许对数据库进行写操作，否则会返回错误码801。
     * 
     * false：允许对数据库进行读写操作。
     * 
     * 从API version 12开始，支持此可选参数。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    isReadOnly?: boolean;

    /**
     * 配置加载自定义动态库，数组中可传入多个动态库名称，默认值为空数组。具体请见
     * [pluginLibs的使用约束和示例](docroot://reference/apis-arkdata/arkts-apis-data-relationalStore-i.md#pluginlibs的使用约束和示例)。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamic
     * @since 23 static
     */
    pluginLibs?: Array<string>;

    /**
     * 指定关系型数据库存储的高可用性模式，SINGLE表示将数据写入单个关系型数据库存储，MAIN_REPLICA表示将数据写入主关系型数据库存储和副本关系型数据库存储，但不支持加密场景和attach场景。MAIN_REPLICA会
     * 导致数据库写入性能的劣化，默认为SINGLE。
     * 
     * **系统接口：** 此接口为系统接口。
     * 
     * 从API version 12开始，支持此可选参数。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    haMode?: HAMode;

    /**
     * 指定用户自定义的加密参数。
     * 
     * 当此参数不填时，使用默认的加密参数，见[CryptoParam]{@link relationalStore.CryptoParam}各参数默认值。
     * 
     * 此配置只有在encrypt选项设置为true或密钥非空时才有效。
     * 
     * 从API version 14开始，支持此可选参数。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    cryptoParam?: CryptoParam;

    /**
     * 指定用户在FTS（Full-Text Search）场景下使用哪种分词器。
     * 
     * 当此参数不填时，则在FTS下不支持中文以及多国语言分词，但仍可支持英文分词。
     * 
     * 如果用户想使用自定义分词器，可以通过pluginLibs参数进行配置，具体请见
     * [pluginLibs的使用约束和示例](docroot://reference/apis-arkdata/arkts-apis-data-relationalStore-i.md#pluginlibs的使用约束和示例)。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 17 dynamic
     * @since 23 static
     */
    tokenizer?: Tokenizer;

    /**
     * 指定数据库是否需要持久化。true表示持久化，false表示不持久化，即内存数据库。默认为true。
     * 
     * 内存数据库不支持加密、backup、restore、跨进程访问及分布式能力，securityLevel属性会被忽略。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 18 dynamic
     * @since 23 static
     */
    persist?: boolean;

    /**
     * 指定数据库是否启用语义索引处理功能。true表示启用语义索引处理功能，false表示不启用。默认为false。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20 dynamic
     * @since 23 static
     */

    enableSemanticIndex?: boolean;
  }

  /**
   * 描述关系型数据库存储的高可用性模式的枚举。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum HAMode {
    /**
     * 表示将数据写入单个关系型数据库存储。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SINGLE = 0,

    /**
     * 表示将数据写入主关系型数据库存储和副本关系型数据库存储，不支持加密场景和attach场景，会导致数据库写入性能的劣化。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MAIN_REPLICA = 1
  }

  /**
   * 数据库加密参数配置。此配置只有在StoreConfig的encrypt选项设置为true或密钥非空时有效。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 20]
   * @since 14 dynamic
   * @since 23 static
   */
  interface CryptoParam {
    /**
     * 指定数据库加/解密使用的密钥。
     * 
     * 如传入密钥为空，则由数据库负责生成并保存密钥，并使用生成的密钥打开数据库文件。
     * 
     * 使用完后用户需要将密钥内容全部置为零。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    encryptionKey: Uint8Array;

    /**
     * 整数类型，指定数据库PBKDF2算法的迭代次数，默认值为10000。
     * 
     * 迭代次数应当为大于零的整数，若非整数则向下取整，若小于零则抛出错误码401，请参见[通用错误码](docroot://reference/errorcode-universal.md)。
     * 
     * 不指定此参数或指定为零时，使用默认值10000，并使用默认加密算法AES_256_GCM。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    iterationCount?: int;

    /**
     * 指定数据库加解密使用的加密算法。如不指定，默认值为 AES_256_GCM。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    encryptionAlgo?: EncryptionAlgo;

    /**
     * 指定数据库加解密使用的HMAC算法。如不指定，默认值为SHA256。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    hmacAlgo?: HmacAlgo;

    /**
     * 指定数据库加解密使用的PBKDF2算法。如不指定，默认使用和HMAC算法相等的算法。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    kdfAlgo?: KdfAlgo;

    /**
     * 整数类型，指定数据库加解密使用的页大小，单位：字节。如不指定，默认值为1024字节。
     * 
     * 用户指定的页大小应为1024到65536范围内的整数，并且为2<sup>n</sup>。若指定值非整数，则向下取整。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    cryptoPageSize?: int;
  }

  /**
   * 数据库的加密方式枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 20]
   * @since 14 dynamic
   * @since 23 static
   */
  enum EncryptionAlgo {
    /**
     * 数据库使用AES_256_GCM加密。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    AES_256_GCM = 0,

    /**
     * 数据库使用AES_256_CBC加密。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    AES_256_CBC = 1,

    /**
     * 数据库不进行加密。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    PLAIN_TEXT = 2
  }

  /**
   * 数据库的HMAC算法枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 20]
   * @since 14 dynamic
   * @since 23 static
   */
  enum HmacAlgo {
    /**
     * HMAC_SHA1算法。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    SHA1 = 0,

    /**
     * HMAC_SHA256算法。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    SHA256 = 1,

    /**
     * HMAC_SHA512算法。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    SHA512 = 2
  }

  /**
   * 数据库的PBKDF2算法枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 20]
   * @since 14 dynamic
   * @since 23 static
   */
  enum KdfAlgo {
    /**
     * PBKDF2_HMAC_SHA1算法。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    KDF_SHA1 = 0,

    /**
     * PBKDF2_HMAC_SHA256算法。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    KDF_SHA256 = 1,

    /**
     * PBKDF2_HMAC_SHA512算法。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    KDF_SHA512 = 2
  }

  /**
   * 描述fts（全文搜索）场景下使用的分词器枚举。请使用枚举名称而非枚举值。
   * 
   * 在使用不同的分词器时，使用的建表语句会有所区别。
   * 
   * 示例代码中this.context定义见Stage模型的应用[Context]{@link ./app/context}。
   * 
   * 使用ICU_TOKENIZER分词器时，创建表的示例：
   * 
   * 使用CUSTOM_TOKENIZER分词器时，创建表的示例：
   * 
   * 使用CUSTOM_TOKENIZER分词器，并指定分词模式时，创建表的示例：
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 17 dynamic
   * @since 23 static
   */
  enum Tokenizer {
    /**
     * 不使用分词器。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 17 dynamic
     * @since 23 static
     */
    NONE_TOKENIZER = 0,
    /**
     * 表示使用icu分词器，支持中文以及多国语言。指定icu分词器时，可指定使用哪种语言，例如zh_CN表示中文，tr_TR表示土耳其语等。支持的语言种类，请查阅
     * [ICU分词器](https://gitcode.com/openharmony/third_party_icu/blob/master/icu4c/source/data/lang/zh.txt)。语言缩写请查阅该目录（
     * [ICU支持的语言缩写](https://gitcode.com/openharmony/third_party_icu/tree/master/icu4c/source/data/locales)）下的文件名。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 17 dynamic
     * @since 23 static
     */
    ICU_TOKENIZER = 1,
    /**
     * 表示使用自研分词器，可支持中文（简体、繁体）、英文、阿拉伯数字。CUSTOM_TOKENIZER相比ICU_TOKENIZER在分词准确率、常驻内存占用上更有优势。自研分词器支持默认分词模式和短词分词模式（
     * short_words）两种，使用参数cut_mode可指定模式，不指定模式时使用默认模式。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 18 dynamic
     * @since 23 static
     */
    CUSTOM_TOKENIZER = 2
  }

  /**
   * 描述端云同步过程的枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10 dynamic
   * @since 23 static
   */
  enum Progress {
    /**
     * 表示端云同步过程开始。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    SYNC_BEGIN = 0,

    /**
     * 表示正在端云同步过程中。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    SYNC_IN_PROGRESS = 1,

    /**
     * 表示端云同步过程已完成。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    SYNC_FINISH = 2
  }

  /**
   * 描述数据库表的端云同步过程的统计信息。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10 dynamic
   * @since 23 static
   */
  interface Statistic {
    /**
     * 表示数据库表中需要端云同步的总行数。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    total: int;

    /**
     * 表示数据库表中端云同步成功的行数。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    successful: int;

    /**
     * 表示数据库表中端云同步失败的行数。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    failed: int;

    /**
     * 表示数据库表中端云同步剩余未执行的行数。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    remained: int;
  }

  /**
   * 描述数据库表执行端云同步任务上传和下载的统计信息。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10 dynamic
   * @since 23 static
   */
  interface TableDetails {
    /**
     * 表示数据库表中端云同步上传过程的统计信息。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    upload: Statistic;

    /**
     * 表示数据库表中端云同步下载过程的统计信息。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    download: Statistic;
  }

  /**
   * 表示端云同步过程的状态码。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10 dynamic
   * @since 23 static
   */
  enum ProgressCode {
    /**
     * 表示端云同步过程成功。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    SUCCESS = 0,

    /**
     * 表示端云同步过程遇到未知错误。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    UNKNOWN_ERROR = 1,

    /**
     * 表示端云同步过程遇到网络错误。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NETWORK_ERROR = 2,

    /**
     * 表示云端不可用。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    CLOUD_DISABLED = 3,

    /**
     * 表示有其他设备正在端云同步，本设备无法进行端云同步。
     * 
     * 请确保无其他设备占用云端资源后，再使用本设备进行端云同步任务。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    LOCKED_BY_OTHERS = 4,

    /**
     * 表示本次端云同步需要同步的条目或大小超出最大值。由云端配置最大值。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    RECORD_LIMIT_EXCEEDED = 5,

    /**
     * 表示云空间剩余空间小于待同步的资产大小。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NO_SPACE_FOR_ASSET = 6,

    /**
     * 表示端云同步被网络策略限制。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamic
     * @since 23 static
     */
    BLOCKED_BY_NETWORK_STRATEGY = 7,

    /**
     * 表示端云同步被停止。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STOP_CLOUD_SYNC = 8
  }

  /**
   * 描述数据库整体执行端云同步任务上传和下载的统计信息。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10 dynamic
   * @since 23 static
   */
  interface ProgressDetails {
    /**
     * 表示端云同步过程。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    schedule: Progress;

    /**
     * 表示端云同步过程的状态。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    code: ProgressCode;

    /**
     * 同步状态的详细消息。通过message信息查看详细的失败原因。默认值为空。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    message?: string;

    /**
     * 表示端云同步各表的统计信息。
     * 
     * 键表示表名，值表示该表的端云同步过程统计信息。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    details: Record<string, TableDetails>;
  }

  /**
   * 描述数据库执行的SQL语句的统计信息。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 20]
   * @since 12 dynamic
   * @since 23 static
   */
  interface SqlExecutionInfo {
    /**
     * 表示执行的SQL语句的数组。当
     * [batchInsert]{@link relationalStore.RdbStore.batchInsert(table: string, values: Array<ValuesBucket>, callback: AsyncCallback<long>)}
     * 的参数太大时，可能有多个SQL。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    sql: Array<string>;

    /**
     * 表示执行SQL语句的总时间，单位为μs。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    totalTime: long;

    /**
     * 表示获取句柄的时间，单位为μs。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    waitTime: long;

    /**
     * 表示准备SQL和绑定参数的时间，单位为μs。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    prepareTime: long;

    /**
     * 表示执行SQL语句的时间，单位为μs。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    executeTime: long;
  }

  /**
   * 描述数据库执行的SQL语句的错误信息。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20 dynamic
   * @since 23 static
   */
  interface ExceptionMessage {
    /**
     * 表示执行SQL返回的错误码，对应的取值和含义请见[SQLite错误码](https://www.sqlite.org/rescode.html)。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    code: int;

    /**
     * 表示执行SQL返回的错误信息，长度不超过1024字节。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    message: string;

    /**
     * 表示报错执行的SQL语句，长度不超过1024字节。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    sql: string;
  }

  /**
   * 描述数据库执行的SQL语句的详细信息。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20 dynamic
   * @since 23 static
   */
  interface SqlInfo {
    /**
     * 表示执行的SQL语句。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    sql: string;

    /**
     * 表示执行SQL中的参数信息。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    args: Array<ValueType>;
  }

  /**
   * 数据库的安全级别枚举。请使用枚举名称而非枚举值。数据库的安全级别仅支持由低向高设置，不支持由高向低设置。
   * 
   * > **说明：**
   * >
   * > 若需要进行同步操作，数据库安全级别应不高于对端设备安全级别，具体可见
   * > [跨设备同步访问控制机制](docroot://database/sync-app-data-across-devices-overview.md#跨设备同步访问控制机制)。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 9 dynamic
   * @since 23 static
   */
  enum SecurityLevel {
    /**
     * 表示数据库的安全级别为低级别，当数据泄露时会产生较低影响。例如，包含壁纸等系统数据的数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 9 dynamic
     * @since 23 static
     */
    S1 = 1,

    /**
     * 表示数据库的安全级别为中级别，当数据泄露时会产生较大影响。例如，包含录音、视频等用户生成数据或通话记录等信息的数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 9 dynamic
     * @since 23 static
     */
    S2 = 2,

    /**
     * 表示数据库的安全级别为高级别，当数据泄露时会产生重大影响。例如，包含用户运动、健康、位置等信息的数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 9 dynamic
     * @since 23 static
     */
    S3 = 3,

    /**
     * 表示数据库的安全级别为关键级别，当数据泄露时会产生严重影响。例如，包含认证凭据、财务数据等信息的数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 9 dynamic
     * @since 23 static
     */
    S4 = 4
  }

  /**
   * 指数据库同步模式。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9 dynamic
   * @since 23 static
   */
  enum SyncMode {
    /**
     * 表示数据从本地设备推送到远程设备。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    SYNC_MODE_PUSH = 0,

    /**
     * 表示数据从远程设备拉至本地设备。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    SYNC_MODE_PULL = 1,

    /**
     * 表示数据从修改时间较近的一端同步到修改时间较远的一端。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10 dynamic
     * @since 23 static
     */
    SYNC_MODE_TIME_FIRST,

    /**
     * 表示数据从本地设备同步到云端。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10 dynamic
     * @since 23 static
     */
    SYNC_MODE_NATIVE_FIRST,

    /**
     * 表示数据从云端同步到本地设备。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10 dynamic
     * @since 23 static
     */
    SYNC_MODE_CLOUD_FIRST
  }

  /**
   * 描述订阅类型。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 9 dynamic
   * @since 23 static
   */
  enum SubscribeType {
    /**
     * 订阅远程数据更改。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    SUBSCRIBE_TYPE_REMOTE = 0,

    /**
     * 订阅云端数据更改。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC [since 10 - 11]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10 dynamic
     * @since 23 static
     */
    SUBSCRIBE_TYPE_CLOUD = 1,

    /**
     * 订阅云端数据更改详情。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC [since 10 - 11]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10 dynamic
     * @since 23 static
     */
    SUBSCRIBE_TYPE_CLOUD_DETAILS = 2,

    /**
     * 订阅本地数据更改详情。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SUBSCRIBE_TYPE_LOCAL_DETAILS
  }

  /**
   * 描述数据变更类型的枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10 dynamic
   * @since 23 static
   */
  enum ChangeType {
    /**
     * 表示是数据发生变更。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC [since 10 - 11]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    DATA_CHANGE = 0,

    /**
     * 表示是资产附件发生了变更。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC [since 10 - 11]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    ASSET_CHANGE = 1
  }

  /**
   * 记录端云同步过程详情。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10 dynamic
   * @since 23 static
   */
  interface ChangeInfo {
    /**
     * 表示发生变化的表的名称。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    table: string;

    /**
     * 表示发生变化的数据的类型，数据或者资产附件发生变化。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    type: ChangeType;

    /**
     * 记录插入数据的位置，如果该表的主键是string类型，该值是主键的值，否则该值表示插入数据的行号。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    inserted: Array<string> | Array<long>;

    /**
     * 记录更新数据的位置，如果该表的主键是string类型，该值是主键的值，否则该值表示更新数据的行号。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    updated: Array<string> | Array<long>;

    /**
     * 记录删除数据的位置，如果该表的主键是string类型，该值是主键的值，否则该值表示删除数据的行号。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    deleted: Array<string> | Array<long>;
  }

  /**
   * 分布式表类型的枚举。请使用枚举名称而非枚举值。此配置项为数据库级配置，如果数据库中有多张分布式表，则所有表必须使用相同的分布式表类型，且不支持切换升级。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 23 dynamic&static
   */
  enum DistributedTableType {
    /**
     * 多设备协同表，各设备的数据将被隔离存储在独立的分布式表中，而非写入本地表，分布式表名为在原来表名前拼接对端设备的DeviceID标识符。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DEVICE_COLLABORATION = 0,

    /**
     * 单版本表，数据通过分布式数据管理框架直接写入对端设备的本地表中。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SINGLE_VERSION = 1
  }

  /**
   * 描述表的分布式类型的枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10 dynamic
   * @since 23 static
   */
  enum DistributedType {
    /**
     * 表示在不同设备之间分布式的数据库表。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    DISTRIBUTED_DEVICE = 0,

    /**
     * 表示在设备和云端之间分布式的数据库表。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC [since 10 - 11]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10 dynamic
     * @since 23 static
     */
    DISTRIBUTED_CLOUD = 1
  }

  /**
   * 资产冲突策略枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AssetConflictPolicy {
    /**
     * 默认冲突策略，按照端云同步模式[SyncMode]{@link relationalStore.SyncMode}执行。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONFLICT_POLICY_DEFAULT = 0,

    /**
     * 基于时间优先的冲突策略。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONFLICT_POLICY_TIME_FIRST = 1,

    /**
     * 基于临时路径的冲突策略。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONFLICT_POLICY_TEMP_PATH = 2
  }

  /**
   * 记录表之间通过表字段指定的关联关系。其中表a关联到表b，称a为b关联的子表，b为a关联的父表。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface Reference {
    /**
     * 关联的子表名称。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    sourceTable: string;

    /**
     * 关联的父表名称。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    targetTable: string;

    /**
     * 表示关联表的关联字段。键值数据中键为子表字段，值为父表字段。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    refFields: Record<string, string>;
  }

  /**
   * 记录表的分布式配置信息。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 10 dynamic
   * @since 23 static
   */
  interface DistributedConfig {
    /**
     * 表示该表是否支持端云自动同步。为true时，支持系统自动触发端云同步；为false时不支持系统自动触发端云同步，需要调用
     * [cloudSync]{@link relationalStore.RdbStore.cloudSync(mode: SyncMode, tables: string[], progress: Callback<ProgressDetails>)}
     * 接口触发端云同步。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    autoSync: boolean;

    /**
     * 设置表之间的关联关系，可以设置多个字段的关联，子表和父表关联字段的值必须相同。默认数据库表之间无关联关系。
     * 
     * **系统接口：** 此接口为系统接口。
     * 
     * 从API version 11开始，支持此可选参数。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    references?: Array<Reference>;

    /**
     * 表示当前数据库在端云同步时，同步或异步下载资产。true表示优先下载完所有数据后，使用异步任务下载资产；false表示同步下载资产；默认值为false。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 18 dynamic
     * @since 23 static
     */
    asyncDownloadAsset?: boolean;

    /**
     * 表示当前数据库是否允许端云同步。true表示允许端云同步；false表示不允许端云同步。默认值为true。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 18 dynamic
     * @since 23 static
     */
    enableCloud?: boolean;

    /**
     * 分布式表类型。DEVICE_COLLABORATION表示设备协作表；SINGLE_VERSION表示单版本表。跨设备数据同步时，默认值为DEVICE_COLLABORATION；端云数据同步时，默认值为
     * SINGLE_VERSION，不支持DEVICE_COLLABORATION。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 23 dynamic&static
     */
    tableType?: DistributedTableType;

    /**
     * 资产冲突策略。默认值为CONFLICT_POLICY_DEFAULT。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    assetConflictPolicy?: AssetConflictPolicy;

    /**
     * 资产临时路径。仅当assetConflictPolicy值为CONFLICT_POLICY_TEMP_PATH时生效，需指定为
     * [distributedfiles](docroot://file-management/app-sandbox-directory.md#应用文件目录与应用文件路径)下的临时路径，格式示例：tmp/，若未填写或路径不合规，将
     * 抛出 401 错误码。默认值为空。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    assetTempPath?: string;

    /**
     * 是否按需下载资产。true表示仅下行数据到本地，当需要下载资产时，调用[cloudSyncEx]{@link relationalStore.RdbStore.cloudSyncEx}接口触发资产下载；false表示数据与资产
     * 都下行到本地。默认值为false。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    assetDownloadOnDemand?: boolean;

    /**
     * 是否启用自动同步开关。true表示启用自动同步，false表示不启用。默认值为true。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    autoSyncSwitch?: boolean;
  }

  /**
   * 记录分布式信息。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface DistributedInfo {  
    /**
     * 表示数据来源，不传入则保持原有数值。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    flag?: DistributedOrigin;

    /**
     * 表示数据产生者的设备id，不传入则保持原有设备id。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    oriDevice?: string;
  }

  /**
   * 云同步配置信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface CloudSyncConfig {
    /**
     * 数据库同步模式。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    mode: SyncMode;

    /**
     * 是否仅下行云端数据到本地。true表示仅下行云端数据到本地，false表示先下行云端数据到本地，再上行本地数据到云侧的同步流程。默认值为false。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    downloadOnly?: boolean;

    /**
     * 是否启用表级同步开关。true表示启用表级同步，false表示不启用。默认值为false。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enablePredicate?: boolean;

    /**
     * 表级同步谓词。仅当enablePredicate为true时，此参数有效。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    predicate?: RdbPredicates;
  }

  /**
   * 用于谓词查询条件的特殊字段。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum DistributedField {  
    /**
     * 用于查找或更新时指定数据来源的字段名。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGIN = '#_origin',
    /**
     * 用于查找或更新时指定数据产生者的设备id，该值传入若为空，则表示本地设备；若不为空，则表示其他组网设备。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORIGIN_ORIDEVICE = '#_ori_device',

    /**
     * 用于cursor查找的字段名。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CURSOR_FIELD = '#_cursor',

    /**
     * 用于cursor查找的结果集返回时填充的字段。true表示对端删除的数据，同步到本端。false表示对端写入或更新的数据，同步到本端；或者本端写入或更新的数据。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DELETED_FLAG_FIELD = '#_deleted_flag'
  }

  /**
   * 表示数据来源。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum DistributedOrigin {  
    /**
     * 表示本地数据。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORI_LOCAL = 0,

    /**
     * 表示云端同步的数据。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORI_CLOUD = 1,

    /**
     * 表示端端同步的数据。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ORI_REMOTE = 2
  }

  /**
   * 插入和修改接口的冲突解决模式。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  enum ConflictResolution {
    /**
     * 表示当冲突发生时，不做任何处理。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    ON_CONFLICT_NONE = 0,

    /**
     * 表示当冲突发生时，中止SQL语句并回滚当前事务。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    ON_CONFLICT_ROLLBACK = 1,

    /**
     * 表示当冲突发生时，中止当前SQL语句，并撤销当前 SQL 语句所做的任何更改，但是由同一事务中先前的 SQL 语句引起的更改被保留并且事务保持活动状态。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    ON_CONFLICT_ABORT = 2,

    /**
     * 表示当冲突发生时，中止当前 SQL 语句。但它不会撤销失败的 SQL 语句的先前更改，也不会结束事务。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    ON_CONFLICT_FAIL = 3,

    /**
     * 表示当冲突发生时，跳过包含违反约束的行并继续处理 SQL 语句的后续行。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    ON_CONFLICT_IGNORE = 4,

    /**
     * 表示当冲突发生时，在插入或更新当前行之前删除导致约束违例的预先存在的行，并且命令会继续正常执行。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    ON_CONFLICT_REPLACE = 5
  }

  /**
   * 表示数据来源。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @since 11 dynamic
   * @since 23 static
   */
  enum Origin {
    /**
     * 表示本地数据。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 11 dynamic
     * @since 23 static
     */
    LOCAL = 0,

    /**
     * 表示云端同步的数据。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 11 dynamic
     * @since 23 static
     */
    CLOUD = 1,

    /**
     * 表示端端同步的数据。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 11 dynamic
     * @since 23 static
     */
    REMOTE = 2
  }

  /**
   * 用于谓词查询条件的特殊字段。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
   * @crossplatform [since 20]
   * @since 11 dynamic
   * @since 23 static
   */
  enum Field {
    /**
     * 用于cursor查找的字段名。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    CURSOR_FIELD = '#_cursor',

    /**
     * 用于cursor查找时指定数据来源的字段名。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    ORIGIN_FIELD = '#_origin',

    /**
     * 用于cursor查找的结果集返回时填充的字段，表示云端删除的数据同步到本地后数据是否清理。
     * 
     * 返回的结果集中，该字段对应的value为false表示数据未清理，true表示数据已清理。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    DELETED_FLAG_FIELD = '#_deleted_flag',

    /**
     * 用于cursor查找的结果集返回时填充的字段，返回的结果集中，该字段对应的0表示正常数据，1表示退出账号保留数据，2表示云侧同步删除，3表示退出账户删除数据。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DATA_STATUS_FIELD = '#_data_status',

    /**
     * 用于共享表中查找owner时，返回的结果集中填充的字段，表示当前共享记录的共享发起者。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    OWNER_FIELD = '#_cloud_owner',

    /**
     * 用于共享表中查找共享数据权限时，返回的结果集中填充的字段，表示当前共享记录的允许的操作权限。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    PRIVILEGE_FIELD = '#_cloud_privilege',

    /**
     * 用于数据共享查找共享数据的共享资源时，返回的结果集中填充的字段，表示共享数据的共享资源标识。
     *
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @crossplatform [since 20]
     * @since 11 dynamic
     * @since 23 static
     */
    SHARING_RESOURCE_FIELD = '#_sharing_resource_field'
  }

  /**
   * 描述数据库重建类型的枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamic
   * @since 23 static
   */
  enum RebuildType {
    /**
     * 表示数据库未进行重建。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 表示数据库进行了重建并且生成了空数据库，需要应用重新建表和恢复数据。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamic
     * @since 23 static
     */
    REBUILT = 1,

    /**
     * 表示数据库进行了修复，恢复了未损坏的数据，当前只有向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）具备该能力。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamic
     * @since 23 static
     */
    REPAIRED = 2
  }

  /**
   * 描述创建事务对象的枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 20]
   * @since 14 dynamic
   * @since 23 static
   */
  enum TransactionType {
    /**
     * 表示创建一个DEFERRED类型的事务对象，该类型的事务对象在创建时只会关闭自动提交而不会真正开始事务，只有在首次读或写操作时会真正开始一个读或写事务。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    DEFERRED = 0,

    /**
     * 表示创建一个IMMEDIATE类型的事务对象，该类型的事务对象在创建时会真正开始一个写事务；如果有别的写事务未提交，则会创建失败，返回错误码14800024。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    IMMEDIATE = 1,

    /**
     * 表示创建一个EXCLUSIVE类型的事务对象，该类型的事务在WAL模式下和IMMEDIATE相同，但在其他日志模式下能够防止事务期间有其他连接读取数据库。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    EXCLUSIVE = 2
  }

  /**
   * 事务对象的配置信息。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 20]
   * @since 14 dynamic
   * @since 23 static
   */
  interface TransactionOptions {
    /**
     * 事务类型。默认为DEFERRED。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    transactionType?: TransactionType;
  }

  /**
   * 描述数据库列存储类型的枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 18 dynamic
   * @since 23 static
   */
  enum ColumnType {
    /**
     * 表示列数据类型为NULL。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    NULL = 0,

    /**
     * 表示列数据类型为64位整数。可用于保存8位（包括布尔值）、16位、32位、64位整数。如果64位整数大于2^53或小于-2^53，需使用
     * [getString]{@link relationalStore.ResultSet.getString}将64位整数转换为字符串。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    INTEGER = 1,

    /**
     * 表示列类型为浮点数。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    REAL = 2,

    /**
     * 表示列类型为字符串。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    TEXT = 3,

    /**
     * 表示列类型为Uint8Array。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    BLOB = 4,

    /**
     * 表示列类型为[Asset]{@link relationalStore.Asset}。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    ASSET = 5,

    /**
     * 表示列类型为[Assets]{@link relationalStore.Assets}。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    ASSETS = 6,

    /**
     * 表示列类型为Float32Array。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    FLOAT_VECTOR = 7,

    /**
     * 表示列类型为bigint。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    UNLIMITED_INT = 8
  }

  /**
   * 指定returning相关接口操作后需要返回的字段名列表和结果集中允许包含的最大记录数。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 dynamic&static
   */
  interface ReturningConfig {
    /**
     * 指定结果集中返回的字段，支持传入1到4个字段。注意：不能传入带有空格、逗号以及星号的字段名。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    columns: Array<string>;

    /**
     * 指定结果集返回的最大行数量，默认为1024条，最大支持32766条。注意：当实际修改行数超过maxReturningCount设置的值时，系统会丢弃超出部分的数据。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    maxReturningCount?: int;
  }

  /**
   * 记录受影响的数据行数量和结果集。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 dynamic&static
   */
  interface Result {
    /**
     * 表示受影响的行数量。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    readonly changed: long;

    /**
     * 表示受影响数据的结果集。默认返回1024行，最大支持32766行，超出部分将被丢弃。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    readonly resultSet: LiteResultSet;
  }

  /**
   * 描述设备同步状态的枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum SyncResultCode {  
    /**
     * 表示同步成功。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SUCCESS = 0,

    /**
     * 表示同步失败。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FAIL = 1,

    /**
     * 表示远端设备离线。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    OFFLINE = 2,

    /**
     * 表示参数无效。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    INVALID_ARGS = 3,

    /**
     * 表示本端设备或远端设备未设置分布式表。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DISTRIBUTED_TABLE_NOT_SET = 4,

    /**
     * 表示对端设备与本端设备本地表的同步字段不一致。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TABLE_FIELD_MISMATCH = 5,

    /**
     * 表示对端设备与本端设备分布式表的Schema字段不一致，或者存在一个分布式表没有配置Schema。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DISTRIBUTED_SCHEMA_MISMATCH = 6,

    /**
     * 表示数据库繁忙。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    BUSY = 7,

    /**
     * 表示数据库损坏。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CORRUPTED = 8,

    /**
     * 表示同步操作因超时失败。常见原因包括：对端设备数据库未创建、连接中断或网络抖动导致丢包。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TIMEOUT = 9,

    /**
     * 表示在同步过程中表结构已更改。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCHEMA_CHANGED = 10,

    /**
     * 表示同步数据时违反约束条件。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONSTRAINT_VIOLATION = 11,
  }

  /**
   * 表示设备同步结果。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SyncResult {  
    /**
     * 表示同步的设备ID，可通过
     * [getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * 等接口获取所有可信设备ID列表。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly device:string;

    /**
     * 表示同步结果的状态码。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly code:SyncResultCode;

    /**
     * 表示同步结果的信息。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly message:string;
  }

  /**
   * 表示关系型数据库（RDB）的谓词。该类确定RDB中条件表达式的值是true还是false。谓词间支持多语句拼接，拼接时默认使用and()连接。不支持Sendable跨线程传递。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  class RdbPredicates {
    /**
     * 构造函数。
     *
     * @param { string } name - 数据库表名，不能为空字符串。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    constructor(name: string);

    /**
     * 同步分布式数据库时连接到组网内指定的远程设备。
     * 
     * > **说明：**
     * >
     * > 其中devices通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     * >
     * > 调用
     * > [sync]{@link relationalStore.RdbStore.sync(mode: SyncMode, predicates: RdbPredicates, callback: AsyncCallback<Array<[string, int]>>)}
     * > 接口同步数据库时，在入参谓词中调用inDevices接口以选择设备。如果不调用inDevices接口，则默认连接组网内所有的设备。
     *
     * @param { Array<string> } devices - 指定的组网内的远程设备ID。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    inDevices(devices: Array<string>): RdbPredicates;

    /**
     * 同步分布式数据库时连接到组网内所有的远程设备。
     *
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    inAllDevices(): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值为value的字段。该方法等同于SQL语句中的"="。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    equalTo(field: string, value: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值不为value的字段。该方法等同于SQL语句中的"!="。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    notEqualTo(field: string, value: ValueType): RdbPredicates;

    /**
     * 向谓词添加左括号。
     *
     * @returns { RdbPredicates } 返回带有左括号的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    beginWrap(): RdbPredicates;

    /**
     * 向谓词添加右括号。
     *
     * @returns { RdbPredicates } 返回带有右括号的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    endWrap(): RdbPredicates;

    /**
     * 将或条件添加到谓词中。
     *
     * @returns { RdbPredicates } 返回带有或条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    or(): RdbPredicates;

    /**
     * 向谓词添加和条件。
     *
     * @returns { RdbPredicates } 返回带有和条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    and(): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中包含value的字段。该方法等同于SQL语句中的"LIKE '%xxx%'"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    contains(field: string, value: string): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中以value开头的字段。该方法等同于SQL语句中的"LIKE 'xxx%'"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    beginsWith(field: string, value: string): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中以value结尾的字段。该方法等同于SQL语句中的"LIKE '%xxx'"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    endsWith(field: string, value: string): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值为null的字段。该方法等同于SQL语句中的"IS NULL"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    isNull(field: string): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值不为null的字段。该方法等同于SQL语句中的"IS NOT NULL"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    isNotNull(field: string): RdbPredicates;

    /**
     * 配置模糊查询条件，指定`field`列的模糊匹配条件。该方法等同于SQL语句中的"LIKE"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指定模糊匹配条件，通常配合通配符使用，`%`表示任意长度任意字符，`_`表示单个字符。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    like(field: string, value: string): RdbPredicates;

    /**
     * 配置RdbPredicates匹配数据字段为string且值符合指定通配符模式的字段，其中*匹配任意多个字符，?匹配单个字符。该方法等同于SQL语句中的"GLOB"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值，长度不超过1024字节。
     *     <br>支持通配符，*表示0个、1个或多个数字或字符，?表示1个数字或字符。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    glob(field: string, value: string): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值在给定范围内的字段（包含范围边界）。该方法等同于SQL语句中的"BETWEEN"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } low - 指示与谓词匹配的最小值。
     * @param { ValueType } high - 指示与谓词匹配的最大值。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    between(field: string, low: ValueType, high: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值超出给定范围的字段（不包含范围边界）。该方法等同于SQL语句中的"NOT BETWEEN"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } low - 指示与谓词匹配的最小值。
     * @param { ValueType } high - 指示与谓词匹配的最大值。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    notBetween(field: string, low: ValueType, high: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值大于value的字段。该方法等同于SQL语句中的">"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    greaterThan(field: string, value: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值小于value的字段。该方法等同于SQL语句中的"<"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    lessThan(field: string, value: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值大于或者等于value的字段。该方法等同于SQL语句中的">="。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    greaterThanOrEqualTo(field: string, value: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值小于或者等于value的字段。该方法等同于SQL语句中的"<="。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    lessThanOrEqualTo(field: string, value: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值按升序排序的列。该方法等同于SQL语句中的"ORDER BY ASC"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    orderByAsc(field: string): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值按降序排序的列。该方法等同于SQL语句中的"ORDER BY DESC"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    orderByDesc(field: string): RdbPredicates;

    /**
     * 配置谓词以过滤重复记录并仅保留其中一个。
     *
     * @returns { RdbPredicates } 返回可用于过滤重复记录的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    distinct(): RdbPredicates;

    /**
     * 设置谓词的最大数据记录数量。
     *
     * @param { int } value - 最大数据记录数，取值应为正整数，传入值小于等于0时，不会限制记录数量。
     * @returns { RdbPredicates } 返回可用于设置最大数据记录数的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    limitAs(value: int): RdbPredicates;

    /**
     * 设置谓词查询结果返回的起始位置。需要同步调用limitAs接口指定查询数量，否则将无查询结果。如需查询指定偏移位置后的所有行，limitAs接口入参需小于等于0。
     *
     * @param { int } rowOffset - 指定查询结果的起始位置，默认初始位置为结果集的最前端。当rowOffset为负数时，起始位置为结果集的最前端。当rowOffset超出结果集最后位置时，查询结果为空。
     * @returns { RdbPredicates } 返回具有指定返回结果起始位置的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    offsetAs(rowOffset: int): RdbPredicates;

    /**
     * 配置谓词按指定列分组查询结果。
     *
     * @param { Array<string> } fields - 指定分组依赖的列名。
     * @returns { RdbPredicates } 返回分组查询列的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    groupBy(fields: Array<string>): RdbPredicates;

    /**
     * 配置谓词以指定索引列。
     *
     * @param { string } field - 索引列的名称，不能为空字符串。
     * @returns { RdbPredicates } 返回具有指定索引列的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    indexedBy(field: string): RdbPredicates;

    /**
     * 配置谓词条件，表示字段`field`的值必须在给定的`value`列表内。该方法等同于SQL语句中的"IN"。
     * 
     * > **说明：**
     * >
     * > `value`集合不能为空。如果传入空集，此条件将失效，导致操作针对所有数据（如全量查询、更新或删除）。请在调用前判断`value`是否为空集，避免误操作。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { Array<ValueType> } value - 以ValueType型数组形式指定的要匹配的值。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    in(field: string, value: Array<ValueType>): RdbPredicates;

    /**
     * 配置谓词条件，表示字段`field`的值必须在给定的`value`列表内。该方法等同于SQL语句中的"IN"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { Array<ValueType> } value - 以ValueType型数组形式指定的要匹配的值。
     * @returns { RdbPredicates } 返回配置了谓词条件的RdbPredicates对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 23 static
     */
    inValues(field: string, value: Array<ValueType>): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中值不在给定的value集合内的字段。该方法等同于SQL语句中的"NOT IN"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { Array<ValueType> } value - 以ValueType数组形式指定的要匹配的值。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     */
    notIn(field: string, value: Array<ValueType>): RdbPredicates;

    /**
     * 配置谓词条件，表示字段`field`的值不在给定的`value`列表内。该方法等同于SQL语句中的"NOT IN"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { Array<ValueType> } value - 以ValueType型数组形式指定的要匹配的值。
     * @returns { RdbPredicates } 返回配置了谓词条件的RdbPredicates对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 23 static
     */
    notInValues(field: string, value: Array<ValueType>): RdbPredicates;

    /**
     * 配置谓词以匹配数据表的field列中不包含value的字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    notContains(field: string, value: string): RdbPredicates;

    /**
     * 配置模糊查询条件，指定`field`列**不包含**的模糊匹配条件。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指定**不包含**的模糊匹配条件，通常配合通配符使用，`%`表示任意长度任意字符，`_`表示单个字符。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    notLike(field: string, value: string): RdbPredicates;

    /**
     * 筛选符合条件的分组数据。
     *
     * @param { string } conditions - 用于过滤使用[groupBy]{@link relationalStore.RdbPredicates#groupBy}获得的数据，conditions参数不能为空
     *     字符串且必须与[groupBy]{@link relationalStore.RdbPredicates#groupBy}配合使用。
     * @param { Array<ValueType> } args - 条件中使用的参数，用来替换条件语句中的占位符，不传时默认为空数组。
     * @returns { RdbPredicates } 返回与指定字段匹配的谓词。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range;
     *     <br>2. Missing GROUP BY clause.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    having(conditions: string, args?: Array<ValueType>): RdbPredicates;
  }

  /**
   * 提供通过查询数据库生成的数据库结果集的访问方法。结果集是指用户调用关系型数据库查询接口之后返回的结果集合，提供了多种灵活的数据访问方式，以便用户获取各项数据。
   * 
   * ResultSet实例不会实时刷新。使用结果集后，如果数据库中的数据发生变化（如增删改操作），需要重新查询才能获取到最新的数据。
   * 
   * 下列API示例中，都需先使用
   * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
   * 、
   * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
   * 、
   * [remoteQuery]{@link relationalStore.RdbStore.remoteQuery(device: string, table: string, predicates: RdbPredicates, columns: Array<string>)}
   * 、[queryLockedRow]{@link relationalStore.RdbStore.queryLockedRow}等query类方法中任一方法获取到ResultSet实例，再通过此实例调用对应方法。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  interface ResultSet {
    /**
     * columnNames: Array\<string\>
     * 
     * 获取结果集中所有列的名称。当结果集中包含重名列时，获取的列名会不符合预期，建议使用[getColumnNames]{@link relationalStore.ResultSet.getColumnNames}接口获取。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    columnNames: Array<string>;

    /**
     * columnCount: int
     * 
     * 获取结果集中列的数量。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    columnCount: int;

    /**
     * rowCount: int
     * 
     * 获取结果集中行的数量。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    rowCount: int;

    /**
     * rowIndex: int
     * 
     * 获取结果集当前行的索引位置，默认值为-1。索引位置下标从0开始。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    rowIndex: int;

    /**
     * isAtFirstRow: boolean
     * 
     * 检查结果集指针是否位于第一行（行索引为0），true表示位于第一行，false表示不位于第一行。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    isAtFirstRow: boolean;

    /**
     * isAtLastRow: boolean
     * 
     * 检查结果集指针是否位于最后一行，true表示位于最后一行，false表示不位于最后一行。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    isAtLastRow: boolean;

    /**
     * isEnded: boolean
     * 
     * 检查结果集指针是否位于最后一行之后，true表示位于最后一行之后，false表示不位于最后一行之后。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    isEnded: boolean;

    /**
     * isStarted: boolean
     * 
     * 检查指针是否移动过，true表示指针已移动过，false表示指针未移动过。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    isStarted: boolean;

    /**
     * isClosed: boolean
     * 
     * 检查当前结果集是否关闭，true表示结果集已关闭，false表示结果集未关闭。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    isClosed: boolean;

    /**
     * 获取结果集中所有列的名称。
     * 
     * 列名以字符串数组的形式返回，数组中字符串的顺序与结果集中列的顺序一致。
     *
     * @returns { Array<string> } 返回结果集中所有列的名称。支持获取包含重名列的列名。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getColumnNames(): Array<string>;

    /**
     * 根据指定的列名获取列索引。
     *
     * @param { string } columnName - 表示结果集中指定列的名称。
     * @returns { int } 返回指定列的索引。当结果集中包含重名列时，返回值会不符合预期。
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800019 - The SQL must be a query statement. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getColumnIndex(columnName: string): int;

    /**
     * 根据指定的列索引获取列名。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { string } 返回指定列的名称。当结果集中包含重名列时，返回值会不符合预期。
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800019 - The SQL must be a query statement. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getColumnName(columnIndex: int): string;

    /**
     * 根据指定的列索引或列名称获取列数据类型，使用Promise异步回调。
     *
     * @param { int | string } columnIdentifier - 表示结果集中指定列的索引或列名。索引必须是非负整数，且必须小于属性columnNames的长度。列名必须是属性columnNames内的名
     *     称。
     * @returns { Promise<ColumnType> } Promise对象。返回指定列的数据类型。当结果集中包含重名列时，通过列名获取的结果会不符合预期，建议使用列索引形式获取。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
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
     * @since 18 dynamic
     * @since 23 static
     */
    getColumnType(columnIdentifier: int | string): Promise<ColumnType>;

    /**
     * 根据指定的列索引或列名称获取列数据类型。
     *
     * @param { int | string } columnIdentifier - 表示结果集中指定列的索引或名称。索引必须是非负整数，最大不能超过属性columnNames的长度。列名必须是属性columnNames内的名
     *     称。
     * @returns { ColumnType } 返回指定列的数据类型。当结果集中包含重名列时，通过列名获取的结果会不符合预期，建议使用列索引形式获取。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
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
     * @since 18 dynamic
     * @since 23 static
     */
    getColumnTypeSync(columnIdentifier: int | string): ColumnType;

    /**
     * 指定相对当前结果集指针位置的偏移量，以移动结果集的指针位置。
     *
     * @param { int } offset - 表示相对当前结果集指针位置的偏移量，正值表示向后移动，负值表示向前移动。
     * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800019 - The SQL must be a query statement. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    goTo(offset: int): boolean;

    /**
     * 转到结果集的指定行。
     *
     * @param { int } position - 表示要移动到的指定位置。
     * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800019 - The SQL must be a query statement. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    goToRow(position: int): boolean;

    /**
     * 转到结果集的第一行。
     *
     * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800019 - The SQL must be a query statement. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    goToFirstRow(): boolean;

    /**
     * 转到结果集的最后一行。
     *
     * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800019 - The SQL must be a query statement. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    goToLastRow(): boolean;

    /**
     * 转到结果集的下一行。
     *
     * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800019 - The SQL must be a query statement. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    goToNextRow(): boolean;

    /**
     * 转到结果集的上一行。
     *
     * @returns { boolean } 如果成功移动结果集，则为true；否则返回false。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800019 - The SQL must be a query statement. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    goToPreviousRow(): boolean;

    /**
     * 以字节数组的形式获取当前行中指定列的值，如果当前列的数据类型为INTEGER、DOUBLE、TEXT、BLOB类型，会转成字节数组类型返回指定值，如果该列内容为空时，会返回空字节数组，其他类型则抛出错误码14800000。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { Uint8Array } 以字节数组的形式返回指定列的值。
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getBlob(columnIndex: int): Uint8Array;

    /**
     * 以字符串形式获取当前行中指定列的值，如果当前列中的值为INTEGER、DOUBLE、TEXT、BLOB类型，会以字符串形式返回指定值，如果是当前列中的值为INTEGER，并且为空，则会返回空字符串""，其他类型则抛出错误码14
     * 800000。如果当前列中的值为DOUBLE类型，可能存在精度的丢失，建议使用[getDouble]{@link relationalStore.ResultSet.getDouble}接口获取。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { string } 以字符串形式返回指定列的值。
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getString(columnIndex: int): string;

    /**
     * 以Long形式获取当前行中指定列的值，如果当前列的数据类型为INTEGER、DOUBLE、TEXT、BLOB类型，会转成Long类型返回指定值，如果该列内容为空时，会返回0，其他类型则抛出错误码14800000。如果当前列的数
     * 据类型为INTEGER，值大于 Number.MAX_SAFE_INTEGER 或小于 Number.MIN_SAFE_INTEGER 且不希望丢失精度，建议使用
     * [getString]{@link relationalStore.ResultSet.getString}接口获取。如果当前列的数据类型为DOUBLE且不希望丢失精度，建议使用
     * [getDouble]{@link relationalStore.ResultSet.getDouble}接口获取。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { long } 以Long形式返回指定列的值。
     *     <br>该接口支持的精度范围是：Number.MIN_SAFE_INTEGER ~ Number.MAX_SAFE_INTEGER，若超出该范围，建议对于DOUBLE类型的值使用
     *     [getDouble]{@link relationalStore.ResultSet.getDouble}，对于INTEGER类型的值使用
     *     [getString]{@link relationalStore.ResultSet.getString}。
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getLong(columnIndex: int): long;

    /**
     * 以double形式获取当前行中指定列的值，如果当前列的数据类型为INTEGER、DOUBLE、TEXT、BLOB类型，会转成double类型返回指定值，如果该列内容为空时，会返回0.0，其他类型则抛出错误码14800000。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { double } 以double形式返回指定列的值。
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    getDouble(columnIndex: int): double;

    /**
     * 以[Asset]{@link relationalStore.Asset}形式获取当前行中指定列的值，如果当前列的数据类型为Asset类型，会以Asset类型返回指定值，如果当前列中的值为null时，会返回null，其他类型则
     * 抛出错误码14800000。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { Asset } 以Asset形式返回指定列的值。
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    getAsset(columnIndex: int): Asset;

    /**
     * 以[Assets]{@link relationalStore.Assets}形式获取当前行中指定列的值，如果当前列的数据类型为Assets类型，会以Assets类型返回指定值，如果当前列中的值为null时，会返回null，其
     * 他类型则抛出14800000。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { Assets } 以Assets形式返回指定列的值。
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    getAssets(columnIndex: int): Assets;

    /**
     * 获取当前行中指定列的值，如果值类型是ValueType中指定的任意类型，返回指定类型的值，否则抛出错误码14800000。如果值类型为INTEGER，值大于 Number.MAX_SAFE_INTEGER 或小于 
     * Number.MIN_SAFE_INTEGER 且不希望丢失精度，建议使用[getString]{@link relationalStore.ResultSet.getString}接口获取。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { ValueType } 表示允许的数据字段类型。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
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
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getValue(columnIndex: int): ValueType;

    /**
     * 以浮点数组的形式获取当前行中指定列的值，仅可在向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）下可用。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { Float32Array } 以浮点数组的形式返回指定列的值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - The capability is not supported because the database is not a vector DB.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
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
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getFloat32Array(columnIndex: int): Float32Array;

    /**
     * 获取当前行。
     *
     * @returns { ValuesBucket } 返回指定行的值。当结果集中包含重名列时，返回值会不符合预期，建议使用
     *     [getCurrentRowData]{@link relationalStore.ResultSet.getCurrentRowData}接口获取。
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds. [since 12]
     * @throws { BusinessError } 14800013 - Column index is out of bounds. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    getRow(): ValuesBucket;

    /**
     * 从结果集中获取指定数量的数据，使用Promise异步回调。禁止与[ResultSet]{@link relationalStore.ResultSet}的其他接口并发调用，否则获取的数据可能非预期。
     *
     * @param { int } maxCount - 正整数，指定要从结果集中获取数据的条数。不为正整数则参数非法，抛出错误码401。
     * @param { int } [position] - 非负整数，指定从结果集中获取数据的起始位置，不填则从结果集的当前行（默认首次获取数据时为当前结果集的第一行）开始获取数据。不为非负整数则参数非法，抛出错误码401。
     * @returns { Promise<Array<ValuesBucket>> } 返回maxCount条数据，剩余数据不足maxCount条则返回剩余数据，返回空数组时代表已经遍历到结果集的末尾。当结果集中包含重名列时，返回
     *     值会不符合预期，建议使用[getRowsData]{@link relationalStore.ResultSet.getRowsData}接口获取。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    getRows(maxCount: int, position?: int): Promise<Array<ValuesBucket>>;

    /**
     * 获取当前行数据的sendable形式，用于跨线程传递。
     *
     * @returns { sendableRelationalStore.ValuesBucket } 当前行数据的sendable形式，用于跨线程传递。
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
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
     * @since 12 dynamiconly
     */
    getSendableRow(): sendableRelationalStore.ValuesBucket;

    /**
     * 获取当前行所有列的值。
     *
     * @returns { RowData } 返回当前行所有列的值。支持获取包含重名列的值。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getCurrentRowData(): RowData;

    /**
     * 从指定位置position开始，最多获取maxCount行数据。使用Promise异步回调。禁止与[ResultSet]{@link relationalStore.ResultSet}的其他接口并发调用，否则获取的数据可能非
     * 预期。
     *
     * @param { int } maxCount - 正整数，指定从结果集中获取数据的条数。不为正整数则参数非法，抛出错误码14800001。
     * @param { int } [position] - 非负整数，指定从结果集中获取数据的起始位置，不填则从结果集的当前行（默认首次获取数据时为当前结果集的第一行）开始获取数据。不为非负整数则参数非法，抛出错误码1480000
     *     1。
     * @returns { Promise<RowsData> } 返回maxCount条数据，剩余数据不足maxCount条则返回剩余数据，返回空数组时代表已经遍历到结果集的末尾。支持获取包含重名列的值。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getRowsData(maxCount: int, position?: int): Promise<RowsData>;

    /**
     * 检查当前行中指定列的值是否为null。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { boolean } 如果当前行中指定列的值为null，则返回true，否则返回false。
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    isColumnNull(columnIndex: int): boolean;

    /**
     * 关闭结果集，若不关闭可能会引起FD（File Descriptor）泄漏和内存泄漏。
     *
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    close(): void;
  }

  /**
   * 提供查询数据库后生成的结果集的访问方法。结果集是指用户调用关系型数据库查询接口之后返回的结果集合，提供了多种灵活的数据访问方式，以便用户获取各项数据。
   * 
   * LiteResultSet实例不会实时刷新。使用结果集后，如果数据库中的数据发生变化（如增删改操作），需要重新查询才能获取到最新的数据。
   * 
   * 下列API示例中，都需先使用[queryWithoutRowCount]{@link relationalStore.RdbStore.queryWithoutRowCount}、
   * [querySqlWithoutRowCount]{@link relationalStore.RdbStore.querySqlWithoutRowCount}等query类方法中任一方法获取到LiteResultSet实例，再
   * 通过此实例调用对应方法。
   * 
   * > **说明：**
   * >
   * > - 本class首批接口从API version 23开始支持。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @stagemodelonly
   * @crossplatform
   * @since 23 dynamic&static
   */
  class LiteResultSet {
    /**
     * 获取结果集中所有列的名称。
     * 
     * 列名以字符串数组的形式返回，数组中字符串的顺序与结果集中列的顺序一致。
     *
     * @returns { Array<string> } 返回结果集中所有列的名称。支持获取包含重名列的列名。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getColumnNames(): Array<string>;

    /**
     * 根据指定的列名获取列索引。
     *
     * @param { string } columnName - 表示结果集中指定列的名称。
     * @returns { int } 返回指定列的索引。当结果集中包含重名列时，返回值会不符合预期。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getColumnIndex(columnName: string): int;

    /**
     * 根据指定的列索引获取列名。
     *
     * @param { int } columnIndex - 表示结果集中指定列的索引，从0开始。
     * @returns { string } 返回指定列的名称。当结果集中包含重名列时，返回值会不符合预期。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getColumnName(columnIndex: int): string;

    /**
     * 根据指定的列索引或列名称获取列数据类型，使用Promise异步回调。
     *
     * @param { int | string } columnIdentifier - 表示结果集中指定列的索引或名称，索引从0开始。
     * @returns { Promise<ColumnType> } Promise对象。返回指定列的数据类型。当结果集中包含重名列时，通过列名获取的结果会不符合预期。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getColumnType(columnIdentifier: int | string): Promise<ColumnType>;

    /**
     * 根据指定的列索引或列名称获取列数据类型。
     *
     * @param { int | string } columnIdentifier - 表示结果集中指定列的索引或名称，索引从0开始。
     * @returns { ColumnType } 返回指定列的数据类型。当结果集中包含重名列时，通过列名获取的结果会不符合预期。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getColumnTypeSync(columnIdentifier: int | string): ColumnType;

    /**
     * 移动结果集到下一行。
     *
     * @returns { boolean } 如果成功移动结果集到下一行，返回true；否则返回false。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    goToNextRow(): boolean;

    /**
     * 以字节数组的形式获取当前行中指定列的值。
     * 
     * 如果当前列的数据类型为INTEGER、DOUBLE、TEXT、BLOB类型，会转成字节数组类型返回指定值，如果该列内容为空时，会返回空字节数组。
     * 
     * 如果当前列的数据类型为ASSET、ASSETS、FLOATVECTOR、BIGINT类型，会抛出错误码14800041。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { Uint8Array } 以字节数组的形式返回指定列的值。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800041 - Type conversion failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getBlob(columnIndex: int): Uint8Array;

    /**
     * 以字符串形式获取当前行中指定列的值。
     * 
     * 如果当前列中的值为INTEGER、DOUBLE、TEXT、BLOB类型，会以字符串形式返回指定值；如果该列内容为空，则会返回空字符串""。
     *
     * 如果当前列中的值为DOUBLE类型，可能存在精度的丢失，建议使用[getDouble]{@link relationalStore.LiteResultSet#getDouble}接口获取。
     * 
     * 如果当前列的数据类型为ASSET、ASSETS、FLOATVECTOR、BIGINT类型，会返回14800041。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { string } 以字符串形式返回指定列的值。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800041 - Type conversion failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getString(columnIndex: int): string;

/**
     * 以Long形式获取当前行中指定列的值。
     * 
     * 如果当前列的数据类型为INTEGER、DOUBLE、TEXT会转成Long类型返回指定值，非数字的TEXT、BLOB类型会返回0。如果该列内容为空时，会返回0。
     * 
     * 如果当前列的数据类型为INTEGER，值大于Number.MAX_SAFE_INTEGER 或小于Number.MIN_SAFE_INTEGER时，如果不希望丢失精度，建议使用
     * [getString]{@link relationalStore.LiteResultSet#getString}接口获取。
     * 
     * 如果当前列的数据类型为DOUBLE时，如果不希望丢失精度，建议使用[getDouble]{@link relationalStore.LiteResultSet#getDouble}接口获取。
     * 
     * 如果当前列的数据类型为ASSET、ASSETS、FLOATVECTOR、BIGINT类型，会返回14800041。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { long } 以Long形式返回指定列的值。
     *     <br>该接口支持的精度范围是：Number.MIN_SAFE_INTEGER ~ Number.MAX_SAFE_INTEGER，若超出该范围，建议对于DOUBLE类型的值使用
     *     [getDouble]{@link relationalStore.LiteResultSet#getDouble}，对于INTEGER类型的值使用
     *     [getString]{@link relationalStore.LiteResultSet#getString}。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800041 - Type conversion failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getLong(columnIndex: int): long;

    /**
     * 以double形式获取当前行中指定列的值。
     * 
     * 如果当前列的数据类型为INTEGER、DOUBLE、TEXT会转成double类型返回指定值，非数字的TEXT、BLOB类型会返回0.0。如果该列内容为空时，会返回0.0。
     * 
     * 如果当前列的数据类型为ASSET、ASSETS、FLOATVECTOR、BIGINT类型，会返回14800041。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { double } 以double形式返回指定列的值。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800041 - Type conversion failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getDouble(columnIndex: int): double;

    /**
     * 以[Asset]{@link relationalStore.Asset}形式获取当前行中指定列的值。
     * 
     * 如果当前列的数据类型为Asset类型，会以Asset类型返回指定值；如果当前列中的值为null时，会返回null；如果当前列的数据类型非Asset类型，则返回14800041。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { Asset } 以Asset形式返回指定列的值。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800041 - Type conversion failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getAsset(columnIndex: int): Asset;

    /**
     * 以[Assets]{@link relationalStore.Assets}形式获取当前行中指定列的值。
     * 
     * 如果当前列的数据类型为Assets类型，会以Assets类型返回指定值；如果当前列中的值为null时，会返回null；如果当前列的数据类型非Assets类型，则返回14800041。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { Assets } 以Assets形式返回指定列的值。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800041 - Type conversion failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getAssets(columnIndex: int): Assets;

    /**
     * 获取当前行中指定列的值。
     * 
     * 如果值类型为INTEGER，值大于Number.MAX_SAFE_INTEGER或小于Number.MIN_SAFE_INTEGER时，如果不希望丢失精度，建议使用
     * [getString]{@link relationalStore.LiteResultSet#getString}接口获取。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { ValueType } 允许返回的数据字段类型。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getValue(columnIndex: int): ValueType;

    /**
     * 以浮点数组的形式获取当前行中指定列的值，仅在向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）下可用。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { Float32Array } 以浮点数组的形式返回指定列的值。
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800041 - Type conversion failed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getFloat32Array(columnIndex: int): Float32Array;

    /**
     * 获取当前行的数据。
     *
     * @returns { ValuesBucket } 返回指定行的值。当结果集中包含重名列时，返回值会不符合预期，建议使用
     *     [getCurrentRowData]{@link relationalStore.LiteResultSet#getCurrentRowData}接口获取。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getRow(): ValuesBucket;

    /**
     * 从结果集中获取指定数量的数据，使用Promise异步回调。禁止与[LiteResultSet]{@link relationalStore.LiteResultSet}的其他接口并发调用，否则获取的数据可能非预期。
     *
     * @param { int } maxCount - 正整数，指定要从结果集中获取数据的条数。
     * @param { int } [position] - 非负整数，指定从结果集中获取数据的起始位置，不填则从结果集的当前行（默认首次获取数据时为当前结果集的第一行）开始获取数据。
     * @returns { Promise<Array<ValuesBucket>> } 返回maxCount条数据，剩余数据不足maxCount条则返回剩余数据，返回空数组时代表已经遍历到结果集的末尾。当结果集中包含重名列时，返回
     *     值会不符合预期，建议使用[getRowsData]{@link relationalStore.LiteResultSet#getRowsData}接口获取。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getRows(maxCount: int, position?: int): Promise<Array<ValuesBucket>>;

    /**
     * 获取当前行所有列的值。
     *
     * @returns { RowData } 返回当前行所有列的值。支持获取包含重名列的值。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getCurrentRowData(): RowData;

    /**
     * 从指定位置position开始，最多获取maxCount行数据。使用Promise异步回调。禁止与[LiteResultSet]{@link relationalStore.LiteResultSet}的其他接口并发调用，否则
     * 获取的数据可能非预期。
     *
     * @param { int } maxCount - 正整数，指定从结果集中获取数据的条数。不为正整数则参数非法，抛出错误码14800001。
     * @param { int } [position] - 非负整数，指定从结果集中获取数据的起始位置，不填则从结果集的当前行（默认首次获取数据时为当前结果集的第一行）开始获取数据。不为非负整数则参数非法，抛出错误码1480000
     *     1。
     * @returns { Promise<RowsData> } 返回maxCount条数据，剩余数据不足maxCount条则返回剩余数据，返回空数组时代表已经遍历到结果集的末尾。支持获取包含重名列的值。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    getRowsData(maxCount: int, position?: int): Promise<RowsData>;

    /**
     * 检查当前行中指定列的值是否为null。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。
     * @returns { boolean } 如果当前行中指定列的值为null，则返回true；否则返回false。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800012 - ResultSet is empty or pointer index is out of bounds.
     * @throws { BusinessError } 14800013 - Column index is out of bounds.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800019 - The SQL must be a query statement.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    isColumnNull(columnIndex: int): boolean;

    /**
     * 关闭结果集，若不关闭可能会引起fd泄漏和内存泄漏。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    close(): void;
  }

  /**
   * 提供管理关系数据库（RDB）方法的接口。
   * 
   * 在使用以下API前，请先通过[getRdbStore]{@link relationalStore.getRdbStore}方法获取RdbStore实例，并使用该实例调用对应接口方法。
   * 
   * 在此基础上，建议优先使用[execute]{@link relationalStore.RdbStore.execute(sql: string, args?: Array<ValueType>)}方法完成数据库表结构和初始数据的
   * 初始化，以确保相关接口调用的前置条件已满足。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  interface RdbStore {
    /**
     * version: int
     * 
     * 设置和获取数据库版本，值为正整数。读取和设置version属性会占用数据库连接，避免对该属性进行频繁操作。使用临时变量保存读取到的version值，在数据库变更完成后将其赋值给RdbStore实例的version属性。数据库升
     * 级时变更version属性的场景，请参考[开发指南示例代码](docroot://database/data-persistence-by-rdb-store.md#开发步骤)。
     *
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. [since 12]
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    version: int;

    /**
     * rebuilt: [RebuildType]{@link relationalStore.RebuildType}
     * 
     * 用于获取数据库是否进行过重建或修复。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamic
     * @since 23 static
     */
    rebuilt: RebuildType;

    /**
     * 向目标表中插入一行数据，使用callback异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { ValuesBucket } values - 表示要插入到表中的数据行。
     * @param { AsyncCallback<long> } callback - 回调函数。当插入数据成功，err为undefined，data为行ID；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    insert(table: string, values: ValuesBucket, callback: AsyncCallback<long>): void;

    /**
     * 向目标表中插入一行数据，可以通过conflict参数指定冲突解决模式[ConflictResolution]{@link relationalStore.ConflictResolution}，使用callback异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { ValuesBucket } values - 表示要插入到表中的数据行。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。
     * @param { AsyncCallback<long> } callback - 回调函数。当插入数据成功，err为undefined，data为行ID；否则为错误对象。
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @FaAndStageModel
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    insert(table: string, values: ValuesBucket, conflict: ConflictResolution, callback: AsyncCallback<long>): void;

    /**
     * 向目标表中插入一行数据，使用Promise异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { ValuesBucket } values - 表示要插入到表中的数据行。
     * @returns { Promise<long> } Promise对象。返回插入数据的行ID。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    insert(table: string, values: ValuesBucket): Promise<long>;

    /**
     * 向目标表中插入一行数据，可以通过conflict参数指定冲突解决模式[ConflictResolution]{@link relationalStore.ConflictResolution}，使用Promise异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { ValuesBucket } values - 表示要插入到表中的数据行。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。
     * @returns { Promise<long> } Promise对象。返回插入数据的行ID。
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    insert(table: string, values: ValuesBucket, conflict: ConflictResolution): Promise<long>;

    /**
     * 向目标表中插入一行数据。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { ValuesBucket } values - 表示要插入到表中的数据行。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。
     * @returns { long } 返回插入数据的行ID。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
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
     * @since 12 dynamic
     * @since 23 static
     */
    insertSync(table: string, values: ValuesBucket, conflict?: ConflictResolution): long;

    /**
     * 传入Sendable数据，向目标表中插入一行数据。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { sendableRelationalStore.ValuesBucket } values - 表示要插入到表中的可跨线程传递数据。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。
     * @returns { number } 返回插入数据的行ID。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
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
     * @since 12 dynamiconly
     */
    insertSync(table: string, values: sendableRelationalStore.ValuesBucket, conflict?: ConflictResolution): number;

    /**
     * 向目标表中插入一组数据，使用callback异步回调。
     * 
     * 接口报错，表示插入数据失败；接口没有报错但返回值为-1时，也表示插入数据失败。
     * 
     * 按每批32766个参数，分批以[ConflictResolution.ON_CONFLICT_REPLACE]{@link relationalStore.ConflictResolution}策略写入，参数数量计算方式为插入
     * 数据条数乘以插入数据的所有字段的并集大小，中途失败则立即返回。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     * 
     * 从API version 20开始，支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。
     * @param { AsyncCallback<long> } callback - 回调函数。当批量插入成功，err为undefined，data为插入的数据个数；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    batchInsert(table: string, values: Array<ValuesBucket>, callback: AsyncCallback<long>): void;

    /**
     * 向目标表中插入一组数据，使用Promise异步回调。
     * 
     * 接口报错，表示插入数据失败；接口没有报错但返回值为-1时，也表示插入数据失败。
     * 
     * 按每批32766个参数，分批以[ConflictResolution.ON_CONFLICT_REPLACE]{@link relationalStore.ConflictResolution}策略写入，参数数量计算方式为插入
     * 数据条数乘以插入数据的所有字段的并集大小，中途失败则立即返回。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     * 
     * 从API version 20开始，该接口支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）使用。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。
     * @returns { Promise<long> } Promise对象。返回批量插入的数据个数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    batchInsert(table: string, values: Array<ValuesBucket>): Promise<long>;

    /**
     * 向目标表中插入一组数据。
     * 
     * 接口报错，表示插入数据失败；接口没有报错但返回值为-1时，也表示插入数据失败。
     * 
     * 按每批32766个参数，分批以[ConflictResolution.ON_CONFLICT_REPLACE]{@link relationalStore.ConflictResolution}策略写入，参数数量计算方式为插入
     * 数据条数乘以插入数据的所有字段的并集大小，中途失败则立即返回。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。
     * @returns { long } 返回批量插入的数据个数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
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
     * @since 12 dynamic
     * @since 23 static
     */
    batchInsertSync(table: string, values: Array<ValuesBucket>): long;

    /**
     * 向目标表中插入一组数据，可以通过conflict参数指定冲突解决模式[ConflictResolution]{@link relationalStore.ConflictResolution}。使用Promise异步回调。
     * 
     * 单次插入参数的最大数量限制为32766，超出上限会返回14800000错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。
     * 
     * 例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。
     * 
     * 请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。
     * @returns { Promise<long> } Promise对象。返回批量插入的数据个数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
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
     * @since 18 dynamic
     * @since 23 static
     */
    batchInsertWithConflictResolution(
        table: string,
        values: Array<ValuesBucket>, 
        conflict: ConflictResolution
    ): Promise<long>;

    /**
     * 向目标表中插入一组数据，可以通过conflict参数指定冲突解决模式[ConflictResolution]{@link relationalStore.ConflictResolution}。
     * 
     * 单次插入参数的最大数量限制为32766，超出上限会返回14800000错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。
     * 
     * 例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。
     * 
     * 请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。
     * @returns { long } 返回批量插入的数据个数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
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
     * @FaAndStageModel
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    batchInsertWithConflictResolutionSync(
        table: string,
        values: Array<ValuesBucket>,
        conflict: ConflictResolution
    ): long;

    /**
     * 向目标表中插入一组数据，可以通过conflict参数指定当发生数据冲突时的解决模式[ConflictResolution]{@link relationalStore.ConflictResolution}，返回
     * [Result]{@link relationalStore.Result}。使用Promise异步回调。
     * 
     * 单次插入参数的最大数量限制为32766，超出上限会返回14800001错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。
     * 
     * 例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。
     * 
     * 请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。
     * 
     * conflict参数不建议使用ON_CONFLICT_FAIL策略，可能无法返回正确的结果。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 要插入的目标表名。注意：正确的表名不应包含空格、逗号和星号，不能以点开头和结尾等，否则会抛出参数错误。
     * @param { Array<ValuesBucket> } values - 要插入到表中的一组数据。注意：空数组、含有重复资产数据会抛出参数错误。
     * @param { ReturningConfig } config - 指定返回值的配置信息。
     * @param { ConflictResolution } [conflict] - 指定冲突解决模式。默认为ON_CONFLICT_NONE。
     * @returns { Promise<Result> } Promise对象。返回受影响的数据集。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    batchInsertWithReturning(table: string, values: Array<ValuesBucket>, config: ReturningConfig,
      conflict?: ConflictResolution): Promise<Result>;

    /**
     * 向目标表中插入一组数据，可以通过conflict参数指定当发生数据冲突时的解决模式[ConflictResolution]{@link relationalStore.ConflictResolution}，返回
     * [Result]{@link relationalStore.Result}。
     * 
     * 单次插入参数的最大数量限制为32766，超出上限会返回14800001错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。
     * 
     * 例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。
     * 
     * 请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。
     * 
     * conflict参数不建议使用ON_CONFLICT_FAIL策略，可能无法返回正确的结果。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 要插入的目标表名。注意：正确的表名不应包含空格、逗号和星号，不能以点开头和结尾等，否则会抛出参数错误。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。注意：空数组、含有重复资产数据会抛出参数错误。
     * @param { ReturningConfig } config - 指定返回值的配置信息。
     * @param { ConflictResolution } [conflict] - 指定冲突解决模式。默认为ON_CONFLICT_NONE。
     * @returns { Result } 返回受影响的数据集。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    batchInsertWithReturningSync(table: string, values: Array<ValuesBucket>, config: ReturningConfig,
      conflict?: ConflictResolution): Result;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据，使用callback异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @param { AsyncCallback<long> } callback - 回调函数。当更新数据成功，err为undefined，data为受影响的行数；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    update(values: ValuesBucket, predicates: RdbPredicates, callback: AsyncCallback<long>): void;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据，可以通过conflict参数指定冲突解决模式
     * [ConflictResolution]{@link relationalStore.ConflictResolution}，使用callback异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。
     * @param { AsyncCallback<long> } callback - 回调函数。当更新数据成功，err为undefined，data为受影响的行数；否则为错误对象。
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @FaAndStageModel
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    update(
      values: ValuesBucket,
      predicates: RdbPredicates,
      conflict: ConflictResolution,
      callback: AsyncCallback<long>
    ): void;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据，使用Promise异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @returns { Promise<long> } Promise对象。返回受影响的行数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    update(values: ValuesBucket, predicates: RdbPredicates): Promise<long>;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据，可以通过conflict参数指定冲突解决模式
     * [ConflictResolution]{@link relationalStore.ConflictResolution}，使用Promise异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。
     * @returns { Promise<long> } Promise对象。返回受影响的行数。
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    update(values: ValuesBucket, predicates: RdbPredicates, conflict: ConflictResolution): Promise<long>;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。
     * @returns { long } 返回受影响的行数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
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
     * @since 12 dynamic
     * @since 23 static
     */
    updateSync(values: ValuesBucket, predicates: RdbPredicates, conflict?: ConflictResolution): long;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据，可以通过conflict参数指定当发生数据冲突时的解决模式
     * [ConflictResolution]{@link relationalStore.ConflictResolution}，返回[Result]{@link relationalStore.Result}，使用Promise
     * 异步回调。
     * 
     * conflict参数不建议使用ON_CONFLICT_FAIL策略，可能无法返回正确的结果。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @param { ReturningConfig } config - 指定返回值的配置信息。
     * @param { ConflictResolution } [conflict] - 指定冲突解决模式。默认为ON_CONFLICT_NONE。
     * @returns { Promise<Result> } Promise对象。返回受影响的数据集。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of    valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    updateWithReturning(values: ValuesBucket, predicates: RdbPredicates, config: ReturningConfig,
      conflict?: ConflictResolution): Promise<Result>;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据，可以通过conflict参数指定当发生数据冲突时的解决模式
     * [ConflictResolution]{@link relationalStore.ConflictResolution}，返回[Result]{@link relationalStore.Result}。
     * 
     * conflict参数不建议使用ON_CONFLICT_FAIL策略，可能无法返回正确的结果。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @param { ReturningConfig } config - 指定返回值的配置信息。
     * @param { ConflictResolution } [conflict] - 指定冲突解决模式。默认为ON_CONFLICT_NONE。
     * @returns { Result } 返回受影响的数据集。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of    valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    updateWithReturningSync(values: ValuesBucket, predicates: RdbPredicates, config: ReturningConfig,
      conflict?: ConflictResolution): Result;

    /**
     * 根据DataSharePredicates的指定实例对象更新数据库中的数据，使用callback异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限制，在后续通过
     * RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { dataSharePredicates.DataSharePredicates } predicates - DataSharePredicates的实例对象指定的更新条件。
     * @param { AsyncCallback<long> } callback - 回调函数。返回受影响的行数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    update(
      table: string,
      values: ValuesBucket,
      predicates: dataSharePredicates.DataSharePredicates,
      callback: AsyncCallback<long>
    ): void;

    /**
     * 根据DataSharePredicates的指定实例对象更新数据库中的数据，使用Promise异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限制，在后续通过RdbStore
     * 的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { dataSharePredicates.DataSharePredicates } predicates - DataSharePredicates的实例对象指定的更新条件。
     * @returns { Promise<long> } Promise对象。返回受影响的行数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    update(table: string, values: ValuesBucket, predicates: dataSharePredicates.DataSharePredicates): Promise<long>;

    /**
     * 根据RdbPredicates的指定实例对象从数据库中删除数据，使用callback异步回调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的删除条件。
     * @param { AsyncCallback<long> } callback - 回调函数。当删除数据成功，err为undefined，data为受影响的行数量；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(predicates: RdbPredicates, callback: AsyncCallback<long>): void;

    /**
     * 根据RdbPredicates的指定实例对象从数据库中删除数据，使用Promise异步回调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的删除条件。
     * @returns { Promise<long> } Promise对象。返回受影响的行数量。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    delete(predicates: RdbPredicates): Promise<long>;

    /**
     * 根据RdbPredicates的指定实例对象从数据库中删除数据。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的删除条件。
     * @returns { long } 返回受影响的行数量。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
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
     * @since 12 dynamic
     * @since 23 static
     */
    deleteSync(predicates: RdbPredicates): long;

    /**
     * 根据RdbPredicates的实例对象从数据库中删除数据，返回[Result]{@link relationalStore.Result}，使用Promise异步回调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的删除条件。
     * @param { ReturningConfig } config - 指定返回值的配置信息。
     * @returns { Promise<Result> } Promise对象。返回受影响的数据集。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of    valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    deleteWithReturning(predicates: RdbPredicates, config: ReturningConfig): Promise<Result>;

    /**
     * 根据RdbPredicates的实例对象从数据库中删除数据，返回[Result]{@link relationalStore.Result}。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的删除条件。
     * @param { ReturningConfig } config - 指定返回值的配置信息。
     * @returns { Result } 返回受影响的数据集。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    deleteWithReturningSync(predicates: RdbPredicates, config: ReturningConfig): Result;

    /**
     * 根据DataSharePredicates的指定实例对象从数据库中删除数据，使用callback异步回调。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { dataSharePredicates.DataSharePredicates } predicates - DataSharePredicates的实例对象指定的删除条件。
     * @param { AsyncCallback<long> } callback - 回调函数。当删除数据成功，err为undefined，data为受影响的行数量；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 9 dynamic
     * @since 23 static
     */
    delete(table: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<long>): void;

    /**
     * 根据DataSharePredicates的指定实例对象从数据库中删除数据，使用Promise异步回调。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { dataSharePredicates.DataSharePredicates } predicates - DataSharePredicates的实例对象指定的删除条件。
     * @returns { Promise<long> } Promise对象。返回受影响的行数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    delete(table: string, predicates: dataSharePredicates.DataSharePredicates): Promise<long>;

    /**
     * 根据指定条件查询数据库中的数据，使用callback异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限制，使用此接口获取ResultSet后，调用
     * [getValue]{@link relationalStore.ResultSet.getValue}、[getString]{@link relationalStore.ResultSet.getString}等get方法
     * 时将无法成功获取数据，并可能导致操作失败或抛出异常。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { AsyncCallback<ResultSet> } callback - 回调函数。当查询成功，err为undefined，data为ResultSet对象；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    query(predicates: RdbPredicates, callback: AsyncCallback<ResultSet>): void;

    /**
     * 根据指定条件查询数据库中的数据，支持指定要查询的列，使用callback异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限制，使用此接口获取ResultSet后，调用
     * [getValue]{@link relationalStore.ResultSet.getValue}、[getString]{@link relationalStore.ResultSet.getString}等get方法
     * 时将无法成功获取数据，并可能导致操作失败或抛出异常。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } columns - 表示要查询的列。如果值为空，则查询应用于所有列。
     * @param { AsyncCallback<ResultSet> } callback - 回调函数。当查询成功，err为undefined，data为ResultSet对象；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;

    /**
     * 根据指定条件查询数据库中的数据，使用Promise异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限制，使用此接口获取ResultSet后，调用
     * [getValue]{@link relationalStore.ResultSet.getValue}、[getString]{@link relationalStore.ResultSet.getString}等get方法
     * 时将无法成功获取数据，并可能导致操作失败或抛出异常。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } columns - 表示要查询的列。如果值为空，则查询应用于所有列。
     * @returns { Promise<ResultSet> } Promise对象。返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    query(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>;

    /**
     * 根据指定条件查询数据库中的数据，使用callback异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限制，使用此接口获取ResultSet后，调用
     * [getValue]{@link relationalStore.ResultSet.getValue}、[getString]{@link relationalStore.ResultSet.getString}等get方法
     * 时将无法成功获取数据，并可能导致操作失败或抛出异常。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { dataSharePredicates.DataSharePredicates } predicates - DataSharePredicates的实例对象指定的查询条件。
     * @param { AsyncCallback<ResultSet> } callback - 回调函数。返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 10 dynamic
     * @since 23 static
     */
    query(table: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<ResultSet>): void;

    /**
     * 根据指定条件查询数据库中的数据，支持指定要查询的列，使用callback异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限制，使用此接口获取ResultSet后，调用
     * [getValue]{@link relationalStore.ResultSet.getValue}、[getString]{@link relationalStore.ResultSet.getString}等get方法
     * 时将无法成功获取数据，并可能导致操作失败或抛出异常。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { dataSharePredicates.DataSharePredicates } predicates - DataSharePredicates的实例对象指定的查询条件。
     * @param { Array<string> } columns - 表示要查询的列。如果值为空，则查询应用于所有列。
     * @param { AsyncCallback<ResultSet> } callback - 回调函数。返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    query(
      table: string,
      predicates: dataSharePredicates.DataSharePredicates,
      columns: Array<string>,
      callback: AsyncCallback<ResultSet>
    ): void;

    /**
     * 根据指定条件查询数据库中的数据，使用Promise异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限制，使用此接口获取ResultSet后，调用
     * [getValue]{@link relationalStore.ResultSet.getValue}、[getString]{@link relationalStore.ResultSet.getString}等get方法
     * 时将无法成功获取数据，并可能导致操作失败或抛出异常。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { dataSharePredicates.DataSharePredicates } predicates - DataSharePredicates的实例对象指定的查询条件。
     * @param { Array<string> } columns - 表示要查询的列。如果值为空，则查询应用于所有列。
     * @returns { Promise<ResultSet> } 返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    query(
      table: string,
      predicates: dataSharePredicates.DataSharePredicates,
      columns?: Array<string>
    ): Promise<ResultSet>;

    /**
     * 根据指定条件查询数据库中的数据。对query同步接口获得的resultSet进行操作时，若逻辑复杂且循环次数过多，可能造成freeze问题，建议将此步骤放到
     * [taskpool]{@link @ohos.taskpool:taskpool}线程中执行。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } columns - 表示要查询的列。如果值为空，则查询应用于所有列。默认值为空。
     * @returns { ResultSet } 返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    querySync(predicates: RdbPredicates, columns?: Array<string>): ResultSet;

    /**
     * 根据指定SQL语句查询数据库中的数据，SQL语句中的各种表达式和操作符之间的关系操作符号不超过1000个，使用callback异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此
     * 限制，使用此接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 该接口支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）使用，当前支持的语法见
     * [规格限制](docroot://database/data-persistence-by-vector-store.md#规格限制)。
     * 
     * 聚合函数不支持嵌套使用。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { AsyncCallback<ResultSet> } callback - 回调函数。当查询成功，err为undefined，data为ResultSet对象；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    querySql(sql: string, callback: AsyncCallback<ResultSet>): void;

    /**
     * 根据指定SQL语句查询数据库中的数据，SQL语句中的各种表达式和操作符之间的关系操作符号不超过1000个，支持传入SQL语句中参数的值，使用callback异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格
     * 小于2MB。如果单条数据超过此限制，使用此接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 该接口支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）使用，当前支持的语法见
     * [规格限制](docroot://database/data-persistence-by-vector-store.md#规格限制)。
     * 
     * 聚合函数不支持嵌套使用。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } bindArgs - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空数组。
     * @param { AsyncCallback<ResultSet> } callback - 回调函数。当查询成功，err为undefined，data为ResultSet对象；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>): void;

    /**
     * 根据指定SQL语句查询数据库中的数据，SQL语句中的各种表达式和操作符之间的关系操作符号不超过1000个，使用Promise异步回调。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。如果单条数据超过此限
     * 制，使用此接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 该接口支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）使用，当前支持的语法见
     * [规格限制](docroot://database/data-persistence-by-vector-store.md#规格限制)。
     * 
     * 聚合函数不支持嵌套使用。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } bindArgs - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空数组。
     * @returns { Promise<ResultSet> } Promise对象。返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    querySql(sql: string, bindArgs?: Array<ValueType>): Promise<ResultSet>;

    /**
     * 根据指定SQL语句查询数据库中的数据，SQL语句中的各种表达式和操作符之间的关系操作符号不超过1000个。对query同步接口获得的resultSet进行操作时，若逻辑复杂且循环次数过多，可能造成freeze问题，建议将此步骤
     * 放到[taskpool]{@link @ohos.taskpool:taskpool}线程中执行。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } bindArgs - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空数组。
     * @returns { ResultSet } 返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 12 dynamic
     * @since 23 static
     */
    querySqlSync(sql: string, bindArgs?: Array<ValueType>): ResultSet;

    /**
     * 根据指定条件查询数据库中的数据，查询时不计算行数，性能优于
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns?: Array<string>)}接口。使用Promise异步回
     * 调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } [columns] - 表示要查询的列。如果值为空，则查询该表的所有列。默认值为空。
     * @returns { Promise<LiteResultSet> } 返回LiteResultSet对象。
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    queryWithoutRowCount(predicates: RdbPredicates, columns?: Array<string>): Promise<LiteResultSet>;

    /**
     * 根据指定条件查询数据库中的数据，查询时不计算行数。对queryWithoutRowCountSync同步接口获得的LiteResultSet进行操作时，若逻辑复杂且循环次数过多，可能造成freeze问题，建议将此步骤放到
     * [taskpool]{@link @ohos.taskpool:taskpool}线程中执行。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } [columns] - 表示要查询的列。如果值为空，则查询应用于所有列。默认值为空。
     * @returns { LiteResultSet } 返回LiteResultSet对象。
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    queryWithoutRowCountSync(predicates: RdbPredicates, columns?: Array<string>): LiteResultSet;

    /**
     * 根据指定条件查询数据库中的数据，查询时不计算行数。使用Promise异步回调。性能优于
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs?: Array<ValueType>)}接口。SQL语句中的各种表达式和操作符之
     * 间的关系操作符号不超过1000个。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } [bindArgs] - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空数组。
     * @returns { Promise<LiteResultSet> } Promise对象。返回LiteResultSet对象。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    querySqlWithoutRowCount(sql: string, bindArgs?: Array<ValueType>): Promise<LiteResultSet>;

    /**
     * 根据指定SQL语句查询数据库中的数据，查询时不计算行数。SQL语句中的各种表达式和操作符之间的关系操作符号不超过1000个。对querySqlWithoutRowCountSync同步接口获得的LiteResultSet进行操
     * 作时，若逻辑复杂且循环次数过多，可能造成freeze问题，建议将此步骤放到[taskpool]{@link @ohos.taskpool:taskpool}线程中执行。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } [bindArgs] - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空数组。
     * @returns { LiteResultSet } 返回LiteResultSet对象。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    querySqlWithoutRowCountSync(sql: string, bindArgs?: Array<ValueType>): LiteResultSet;

    /**
     * 根据指定SQL语句查询数据库中的数据，SQL语句中的各种表达式和操作符之间的关系操作符不超过1000个，使用Promise异步回调。该接口按行逐步获取结果，不存在2MB的单条数据大小限制。
     * 
     * 聚合函数不支持嵌套使用。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     *     <br>必须使用有效的SQL语句。否则在使用ResultSet时可能会抛出错误码。
     * @param { Array<ValueType> } [bindArgs] - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。默认值为空数组。
     * @returns { Promise<ResultSet> } Promise对象。返回ResultSet对象。
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic&static
     */
    queryByStep(sql: string, bindArgs?: Array<ValueType>): Promise<ResultSet>;

    /**
     * 根据指定条件查询数据库中的数据，使用Promise异步回调。该接口按行逐步获取结果，不存在2MB的单条数据大小限制。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } [columns] - 表示要查询的列。如果值为空，则查询应用于所有列。默认值为空数组。
     * @returns { Promise<ResultSet> } Promise对象。返回ResultSet对象。
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 26.0.0 dynamic&static
     */
    queryByStep(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>;

    /**
     * 获取数据库表中数据的最后修改时间，使用Promise异步回调。
     *
     * @param { string } table - 指定要查询的数据库表的表名。
     * @param { string } columnName - 指定要查询的数据库表的列名。
     * @param { PRIKeyType[] } primaryKeys - 指定要查询的行的主键。
     *     <br>如果数据库表无主键，参数columnName需传入"rowid"，此时primaryKeys为要查询的数据库表的行号。
     *     <br>如果数据库表无主键，参数columnName传入不为"rowid"，返回对应的错误码。
     * @returns { Promise<ModifyTime> } 返回ModifyTime类型的Promise对象，表示数据最后的修改时间。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Need 3 - 4  parameter(s)! 2. The RdbStore must be not nullptr.
     *     3. The tablesNames must be not empty string. 4. The columnName must be not empty string.
     *     5. The PRIKey must be number or string.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getModifyTime(table: string, columnName: string, primaryKeys: PRIKeyType[]): Promise<ModifyTime>;

    /**
     * 获取数据库表中数据的最后修改时间，使用callback异步回调。
     *
     * @param { string } table - 指定要查询的数据库表的表名。
     * @param { string } columnName - 指定要查询的数据库表的列名。
     * @param { PRIKeyType[] } primaryKeys - 指定要查询的行的主键。
     *     <br>如果数据库表无主键，参数columnName需传入"rowid"，此时primaryKeys为要查询的数据库表的行号。
     *     <br>如果数据库表无主键，参数columnName传入不为"rowid"，返回对应的错误码。
     * @param { AsyncCallback<ModifyTime> } callback - 回调函数。当获取修改时间成功，err为undefined，data为ModifyTime对象；否则为错误对象。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Need 3 - 4  parameter(s)! 2. The RdbStore must be not nullptr.
     *     3. The tablesNames must be not empty string. 4. The columnName must be not empty string.
     *     5. The PRIKey must be number or string.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    getModifyTime(
      table: string,
      columnName: string,
      primaryKeys: PRIKeyType[],
      callback: AsyncCallback<ModifyTime>
    ): void;

    /**
     * 清理云端删除的数据同步到本地后，未自动清理的，且数据的游标（cursor）小于指定游标的数据。使用callback异步回调。
     *
     * @param { string } table - 表示当前数据库的表的名称。
     * @param { long } cursor - 整数类型，表示数据游标，小于此游标的脏数据将被清理。
     * @param { AsyncCallback<void> } callback - 回调函数。当清理成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Need 1 - 3  parameter(s)! 2. The RdbStore must be not nullptr.
     *     3. The tablesNames must be not empty string. 4. The cursor must be valid cursor.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @FaAndStageModel
     * @since 11 dynamic
     * @since 23 static
     */
    cleanDirtyData(table: string, cursor: long, callback: AsyncCallback<void>): void;

    /**
     * 清理云端删除的数据同步到本地后，未自动清理的所有数据。使用callback异步回调。
     *
     * @param { string } table - 表示当前数据库的表的名称。
     * @param { AsyncCallback<void> } callback - 回调函数。当清理成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Need 1 - 3  parameter(s). 2. The RdbStore must be not nullptr.
     *     3. The tablesNames must be not empty string.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 11 dynamic
     * @since 23 static
     */
    cleanDirtyData(table: string, callback: AsyncCallback<void>): void;

    /**
     * 清理云端删除的数据同步到本地后，未自动清理的，且数据的游标（cursor）小于指定游标的数据，使用Promise异步回调。若无cursor参数，将全部清理。
     *
     * @param { string } table - 表示当前数据库的表的名称。
     * @param { long } [cursor] - 整数类型，表示数据游标，小于此游标的脏数据将被清理。当此参数不填时，清理当前表的所有脏数据。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Need 1 - 3  parameter(s)! 2. The RdbStore must be not nullptr.
     *     3. The tablesNames must be not empty string. 4. The cursor must be valid cursor.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 11 dynamic
     * @since 23 static
     */
    cleanDirtyData(table: string, cursor?: long): Promise<void>;

    /**
     * 本端手动清理对端删除后同步过来的数据。使用Promise异步回调。
     *
     * @param { string } table - 表示需要清理数据库表的名称。数据库表名只能由字母、数字和下划线组成，不能包含其他字符，长度为[1, 256]。
     * @param { long } [cursor] - 表示数据游标，不大于此游标的脏数据将被清理。整数类型，取值应大于0。当传入小于等于0的值时，会抛出异常，异常信息为无效的参数。当此参数不填时，清理当前表的所有脏数据。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800043 - The database does not support this scenario.
     *     Possible causes: 1. The database type is not support;2. The table type is not supported;
     *     3. This is a read-only database.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    cleanDeviceDirtyData(table: string, cursor?: long): Promise<void>

    /**
     * 根据谓词条件匹配的数据记录查找对应记录的共享资源标识，返回查找的结果集。如果指定了列字段，则返回结果集中同时包含对应列的字段值，使用Promise异步回调。
     *
     * @param { RdbPredicates } predicates - 表示查询的谓词条件。
     * @param { Array<string> } [columns] - 表示要查找的列字段名。此参数不填时，返回的结果集中只包含共享资源标识字段。
     * @returns { Promise<ResultSet> } Promise对象。返回查询的结果集。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Need 1 - 3  parameter(s)! 2. The RdbStore must be not nullptr.
     *     3. The predicates must be an RdbPredicates. 4. The columns must be a string array.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    querySharingResource(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>;

    /**
     * 根据谓词条件匹配的数据记录查找对应记录的共享资源，返回查找的结果集，使用callback异步回调。
     *
     * @param { RdbPredicates } predicates - 表示查询的谓词条件。
     * @param { AsyncCallback<ResultSet> } callback - 回调函数。返回查询的结果集。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Need 1 - 3  parameter(s)! 2. The RdbStore must be not nullptr.
     *     3. The predicates must be an RdbPredicates.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    querySharingResource(predicates: RdbPredicates, callback: AsyncCallback<ResultSet>): void;

    /**
     * 根据谓词条件匹配的数据记录查找对应记录的共享资源，返回查找到的共享资源的结果集，同时在结果集中返回谓词条件匹配的指定列名的字段值，使用callback异步回调。
     *
     * @param { RdbPredicates } predicates - 表示查询的谓词条件。
     * @param { Array<string> } columns - 表示要查找的列字段名。
     * @param { AsyncCallback<ResultSet> } callback - 回调函数。返回查询的结果集。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Need 1 - 3  parameter(s)! 2. The RdbStore must be not nullptr.
     *     3. The predicates must be an RdbPredicates. 4. The columns must be a string array.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    querySharingResource(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;

    /**
     * 执行指定的SQL语句，语句中的各种表达式和操作符之间的关系操作符号不超过1000个，使用callback异步回调。
     * 
     * 此接口不支持执行查询、附加数据库和事务操作，可以使用
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, callback: AsyncCallback<ResultSet>)}、
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, callback: AsyncCallback<ResultSet>)}、
     * [attach]{@link relationalStore.RdbStore.attach(fullPath: string, attachName: string, waitTime?: int)}、
     * [beginTransaction]{@link relationalStore.RdbStore.beginTransaction}、
     * [commit]{@link relationalStore.RdbStore.commit()}等接口代替。
     * 
     * 不支持分号分隔的多条语句。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { AsyncCallback<void> } callback - 回调函数。当执行SQL成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported the sql(attach,begin,commit,rollback etc.). [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 10 dynamic
     * @since 23 static
     */
    executeSql(sql: string, callback: AsyncCallback<void>): void;

    /**
     * 执行指定的SQL语句，支持传入SQL语句中参数的值，语句中的各种表达式和操作符之间的关系操作符号不超过1000个，使用callback异步回调。
     * 
     * 此接口不支持执行查询、附加数据库和事务操作，可以使用
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, callback: AsyncCallback<ResultSet>)}、
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, callback: AsyncCallback<ResultSet>)}、
     * [attach]{@link relationalStore.RdbStore.attach(fullPath: string, attachName: string, waitTime?: int)}、
     * [beginTransaction]{@link relationalStore.RdbStore.beginTransaction}、
     * [commit]{@link relationalStore.RdbStore.commit()}等接口代替。
     * 
     * 不支持分号分隔的多条语句。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } bindArgs - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空数组。
     * @param { AsyncCallback<void> } callback - 回调函数。当执行SQL成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 801 - Capability not supported the sql(attach,begin,commit,rollback etc.). [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>): void;

    /**
     * 执行指定的SQL语句，语句中的各种表达式和操作符之间的关系操作符号不超过1000个，使用Promise异步回调。
     * 
     * 此接口不支持执行查询、附加数据库和事务操作，可以使用
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, callback: AsyncCallback<ResultSet>)}、
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, callback: AsyncCallback<ResultSet>)}、
     * [attach]{@link relationalStore.RdbStore.attach(fullPath: string, attachName: string, waitTime?: int)}、
     * [beginTransaction]{@link relationalStore.RdbStore.beginTransaction}、
     * [commit]{@link relationalStore.RdbStore.commit()}等接口代替。
     * 
     * 不支持分号分隔的多条语句。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } bindArgs - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 801 - Capability not supported the sql(attach,begin,commit,rollback etc.). [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    executeSql(sql: string, bindArgs?: Array<ValueType>): Promise<void>;

    /**
     * 执行包含指定参数的SQL语句，语句中的各种表达式和操作符之间的关系操作符号不超过1000个，返回值类型为ValueType，使用Promise异步回调。
     * 
     * 该接口支持执行增删改操作，支持执行PRAGMA语法的sql，支持对表的操作（建表、删表、修改表），返回结果类型由执行具体sql的结果决定。
     * 
     * 此接口不支持执行查询、附加数据库和事务操作，可以使用
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, callback: AsyncCallback<ResultSet>)}、
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, callback: AsyncCallback<ResultSet>)}、
     * [attach]{@link relationalStore.RdbStore.attach(fullPath: string, attachName: string, waitTime?: int)}、
     * [beginTransaction]{@link relationalStore.RdbStore.beginTransaction}、
     * [commit]{@link relationalStore.RdbStore.commit()}等接口代替。
     * 
     * 向量数据库使用该接口执行插入操作，数据来源于子查询时，支持全字段插入，暂不支持部分字段插入。
     * 
     * 不支持分号分隔的多条语句。
     * 
     * 不支持开头包含注释的语句。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } args - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空数组。
     * @returns { Promise<ValueType> } Promise对象，返回SQL执行后的结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported the sql(attach,begin,commit,rollback etc.).
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
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
     * @since 12 dynamic
     * @since 23 static
     */
    execute(sql: string, args?: Array<ValueType>): Promise<ValueType>;

    /**
     * 执行包含指定参数的SQL语句，语句中的各种表达式和操作符之间的关系操作符号不超过1000个，使用Promise异步回调。
     * 
     * 该接口仅支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）使用。使用该接口执行插入操作，数据来源于子查询时，支持全字段插入，暂不支持
     * 部分字段插入。
     * 
     * 此接口不支持执行查询，可以使用
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, callback: AsyncCallback<ResultSet>)}接口代替。
     * 
     * 不支持分号分隔的多条语句。
     * 
     * 不支持开头包含注释的语句。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { long } txId - 通过[beginTrans]{@link relationalStore.RdbStore.beginTrans}获取的事务ID，如果传0，该语句默认在单独事务内。
     * @param { Array<ValueType> } args - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空数组。
     * @returns { Promise<ValueType> } Promise对象，返回SQL执行后的结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported the sql(attach,begin,commit,rollback etc.).
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
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
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    execute(sql: string, txId: long, args?: Array<ValueType>): Promise<ValueType>;

    /**
     * 执行包含指定参数的SQL语句，语句中的各种表达式和操作符之间的关系操作符号不超过1000个，返回值类型为ValueType。
     * 
     * 该接口支持执行增删改操作，支持执行PRAGMA语法的sql，支持对表的操作（建表、删表、修改表），返回结果类型由执行具体sql的结果决定。
     * 
     * 此接口不支持执行查询、附加数据库和事务操作，可以使用
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, callback: AsyncCallback<ResultSet>)}、
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, callback: AsyncCallback<ResultSet>)}、
     * [attach]{@link relationalStore.RdbStore.attach(fullPath: string, attachName: string, waitTime?: int)}、
     * [beginTransaction]{@link relationalStore.RdbStore.beginTransaction}、
     * [commit]{@link relationalStore.RdbStore.commit()}等接口代替。
     * 
     * 不支持分号分隔的多条语句。
     * 
     * 不支持开头包含注释的语句。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } args - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。该参数不填，或者填null或undefined，都认为是sql参数语句完整，默认值为空数组。
     * @returns { ValueType } 返回SQL执行后的结果
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
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
     * @since 12 dynamic
     * @since 23 static
     */
    executeSync(sql: string, args?: Array<ValueType>): ValueType;

    /**
     * 在开始执行SQL语句之前，开始事务。
     * 
     * 此接口不允许嵌套事务，且不支持在多进程或多线程中使用。
     *
     * @throws { BusinessError } 401 - Parameter error.  Possible causes: The RdbStore verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit. [since 10]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    beginTransaction(): void;

    /**
     * 在开始执行SQL语句之前，开始事务，使用Promise异步回调。
     * 
     * 与[beginTransaction]{@link relationalStore.RdbStore.beginTransaction}的区别在于：该接口会返回事务ID，
     * [execute]{@link relationalStore.RdbStore.execute(sql: string, txId: long, args?: Array<ValueType>)}可以指定不同事务ID达到事务
     * 隔离目的。
     * 
     * 该接口仅支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）使用。
     *
     * @returns { Promise<long> } Promise对象，返回事务ID。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: The RdbStore verification failed.
     * @throws { BusinessError } 801 - Capability not supported the sql(attach,begin,commit,rollback etc.).
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
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
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    beginTrans(): Promise<long>;

    /**
     * 提交已执行的SQL语句，跟[beginTransaction]{@link relationalStore.RdbStore.beginTransaction}配合使用。
     * 
     * 此接口不允许嵌套事务，且不支持在多进程或多线程中使用。
     *
     * @throws { BusinessError } 401 - Parameter error.  Possible causes: The RdbStore verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    commit(): void;

    /**
     * 提交已执行的SQL语句，跟[beginTrans]{@link relationalStore.RdbStore.beginTrans}配合使用，使用Promise异步回调。
     * 
     * 该接口仅支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）使用。
     *
     * @param { long } txId - 通过[beginTrans]{@link relationalStore.RdbStore.beginTrans}获取的事务ID。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
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
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    commit(txId : long): Promise<void>;

    /**
     * 回滚已经执行的SQL语句。
     * 
     * 此接口不允许嵌套事务，且不支持在多进程或多线程中使用。
     *
     * @throws { BusinessError } 401 - Parameter error.  Possible causes: The RdbStore verification failed.
     * @throws { BusinessError } 14800000 - Inner error. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @FaAndStageModel
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    rollBack(): void;

    /**
     * 回滚已经执行的SQL语句，跟[beginTrans]{@link relationalStore.RdbStore.beginTrans}配合使用，使用Promise异步回调。
     * 
     * 该接口仅支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）使用。
     *
     * @param { long } txId - 通过[beginTrans]{@link relationalStore.RdbStore.beginTrans}获取的事务ID。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
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
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    rollback(txId : long): Promise<void>;

    /**
     * 以指定名称备份数据库，使用callback异步回调。
     * 
     * 该接口支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）使用。
     *
     * @param { string } destName - 指定数据库的备份文件名，不能为空字符串。
     * @param { AsyncCallback<void> } callback - 回调函数。当备份成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800010 - Failed to open or delete the database by an invalid database path. [since 12]
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    backup(destName: string, callback: AsyncCallback<void>): void;

    /**
     * 以指定名称备份数据库，使用Promise异步回调。
     * 
     * 该接口支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）使用。
     *
     * @param { string } destName - 指定数据库的备份文件名，不能为空字符串。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    backup(destName: string): Promise<void>;

    /**
     * 从指定的数据库备份文件恢复数据库，使用callback异步回调。
     * 
     * 该接口支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）使用。
     *
     * @param { string } srcName - 指定数据库的备份文件名，不能为空字符串。
     * @param { AsyncCallback<void> } callback - 回调函数。当恢复成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    restore(srcName: string, callback: AsyncCallback<void>): void;

    /**
     * 从指定的数据库备份文件恢复数据库，使用Promise异步回调。
     * 
     * 该接口支持向量数据库（在[StoreConfig]{@link relationalStore.StoreConfig}中配置vector为true）使用。
     *
     * @param { string } srcName - 指定数据库的备份文件名，不能为空字符串。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted. [since 12]
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @throws { BusinessError } 14800015 - The database does not respond. [since 12]
     * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked. [since 12]
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked. [since 12]
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory. [since 12]
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
     * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit. [since 12]
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation. [since 12]
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch. [since 12]
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 10]
     * @since 9 dynamic
     * @since 23 static
     */
    restore(srcName: string): Promise<void>;

    /**
     * 从副本关系型数据库文件恢复数据库，使用Promise异步回调。此接口仅供[HAMode]{@link relationalStore.HAMode}为MAIN_REPLICA时使用，且不支持在事务中使用。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800010 - Failed to open or delete the database by an invalid database path.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
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
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    restore(): Promise<void>;

    /**
     * 设置分布式数据库表，使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Array<string> } tables - 要设置的分布式数据库的表名。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置分布式列表成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    setDistributedTables(tables: Array<string>, callback: AsyncCallback<void>): void;

    /**
     * 设置分布式数据库表，使用Promise异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Array<string> } tables - 要设置的分布式数据库的表名。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    setDistributedTables(tables: Array<string>): Promise<void>;

    /**
     * 设置分布式数据库表，支持指定表的分布式类型，使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Array<string> } tables - 要设置的分布式数据库的表名。
     * @param { DistributedType } type - 表的分布式类型。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置分布式列表成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800051 - The type of the distributed table does not match.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    setDistributedTables(tables: Array<string>, type: DistributedType, callback: AsyncCallback<void>): void;

    /**
     * 设置分布式数据库表，支持指定表的分布式类型和表的分布式配置信息，使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Array<string> } tables - 要设置的分布式数据库的表名。
     * @param { DistributedType } type - 表的分布式类型。
     * @param { DistributedConfig } config - 表的分布式配置信息。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置分布式列表成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800051 - The type of the distributed table does not match.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    setDistributedTables(
      tables: Array<string>,
      type: DistributedType,
      config: DistributedConfig,
      callback: AsyncCallback<void>
    ): void;

    /**
     * 设置分布式数据库表，支持指定表的分布式类型和表的分布式配置信息，使用Promise异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Array<string> } tables - 要设置的分布式数据库的表名。
     * @param { DistributedType } type - 表的分布式类型。默认值是relationalStore.DistributedType.DISTRIBUTED_DEVICE。
     * @param { DistributedConfig } config - 表的分布式配置信息。不传入时默认autoSync为false，需要调用
     *     [cloudSync]{@link relationalStore.RdbStore.cloudSync(mode: SyncMode, tables: string[], progress: Callback<ProgressDetails>)}
     *     接口触发端云同步。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800051 - The type of the distributed table does not match.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    setDistributedTables(tables: Array<string>, type?: DistributedType, config?: DistributedConfig): Promise<void>;

    /**
     * 保留对应[单版本表模式](docroot://database/data-sync-of-rdb-store.md#数据同步存储机制)分布式数据表中对应设备同步过来的数据，删除其他设备同步过来的数据，使用Promise异步回
     * 调。
     * 
     * 不支持对[多设备协同表模式](docroot://database/data-sync-of-rdb-store.md#数据同步存储机制)分布式数据表进行删除。
     * 
     * 要删除数据越多，执行所需的时间越长。
     * 
     * > **说明：**
     * >
     * > 入参允许为空，数据库表名对应的设备id列表也允许为空，但是数据库表名和设备id不允许为空字符串。
     * >
     * > 入参如果为空，则删除当前数据库所有单版本分布式表中所有其他设备同步过来的数据。
     * >
     * > 入参中如果数据库表名对应的设备id列表为空，则删除该表下所有其他设备同步过来的数据。
     * >
     * > 保留本地写入以及传入设备id同步过来的数据，其他设备id同步过来的数据会被删除。
     *
     * @param { Record<string, Array<string>> } [retainDevices] - 指定要保留的分布式数据库表名和对应的设备id，无默认值，不传入则删除当前数据库中所有单版本分布式表中全量同步
     *     数据。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The RdbStore or ResultSet is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800042 - The database does not exist. Possible causes: 1. The database is deleted;
     *     <br>2. The database is not created.
     * @throws { BusinessError } 14800043 - The database does not support this scenario.
     *     Possible causes: 1. The database type is not supported;2. The table type is not supported;
     *     3. This is a read-only database.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    retainDeviceData(retainDevices?: Record<string, Array<string>>): Promise<void>;

    /**
     * 更新分布式信息，只支持单版本表模式，使用Promise异步回调。
     * 
     * 不支持对多设备协同表模式分布式数据表进行更新。
     * 
     * 要更新数据越多，执行所需的时间越长。
     * 
     * > **说明：**
     * >
     * > 入参info中若要传入设备id信息，则设备id必须是已与当前设备建立网络连接的设备id。
     * >
     * > 入参predicates中若要传入[ORIGIN_ORIDEVICE]{@link relationalStore.DistributedField}，则只允许使用等于空或不等于空。
     *
     * @param { DistributedInfo } info - 指定要更新的分布式表的日志信息。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @returns { Promise<long> } Promise对象。返回更新的数据个数。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The RdbStore or ResultSet is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800043 - The database does not support this scenario.
     *     Possible causes: 1. The database type is not supported;2. The table type is not supported;
     *     3. This is a read-only database.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    updateDistributedInfo(info: DistributedInfo, predicates: RdbPredicates): Promise<long>;

    /**
     * 根据远程设备的本地表名获取指定远程设备的分布式表名。在查询远程设备数据库时，需要使用分布式表名，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 其中device通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } device - 远程设备ID，不能为空字符串。
     * @param { string } table - 远程设备的本地表名。
     * @param { AsyncCallback<string> } callback - 回调函数。当获取分布式表名成功，err为undefined，data为远程设备的分布式表名；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    obtainDistributedTableName(device: string, table: string, callback: AsyncCallback<string>): void;

    /**
     * 根据远程设备的本地表名获取指定远程设备的分布式表名。在查询远程设备数据库时，需要使用分布式表名，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 其中device通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } device - 远程设备ID，不能为空字符串。
     * @param { string } table - 远程设备的本地表名。
     * @returns { Promise<string> } Promise对象。返回远程设备的分布式表名。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    obtainDistributedTableName(device: string, table: string): Promise<string>;

    /**
     * 在设备之间同步数据，使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { SyncMode } mode - 指同步模式。该值可以是relationalStore.SyncMode.SYNC_MODE_PUSH、
     *     relationalStore.SyncMode.SYNC_MODE_PULL。
     * @param { RdbPredicates } predicates - 约束同步数据和设备。
     * @param { AsyncCallback<Array<[string, int]>> } callback - 回调函数，用于向调用者发送同步结果。string：设备ID；number：每个设备同步状态，0表示成功，1表示
     *     失败。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @FaAndStageModel
     * @since 9 dynamic
     * @since 23 static
     */
    sync(mode: SyncMode, predicates: RdbPredicates, callback: AsyncCallback<Array<[string, int]>>): void;

    /**
     * 在设备之间同步数据，使用Promise异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { SyncMode } mode - 指同步模式。该值可以是relationalStore.SyncMode.SYNC_MODE_PUSH、
     *     relationalStore.SyncMode.SYNC_MODE_PULL。
     * @param { RdbPredicates } predicates - 约束同步数据和设备。
     * @returns { Promise<Array<[string, int]>> } Promise对象。返回同步结果。string：设备ID；number：每个设备同步状态，0表示成功，1表示失败。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    sync(mode: SyncMode, predicates: RdbPredicates): Promise<Array<[string, int]>>;

    /**
     * 在设备之间同步数据，使用Promise异步回调，可以返回具体的同步状态信息。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { SyncMode } mode - 同步模式。该值可以是relationalStore.SyncMode.SYNC_MODE_PUSH、
     *     relationalStore.SyncMode.SYNC_MODE_PULL。
     * @param { RdbPredicates } predicates - 约束同步数据和设备。
     * @returns { Promise<Array<SyncResult>> } Promise对象。返回SyncResult数组。
     * @throws { BusinessError } 201 - the application does not have permission to call this function.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    syncEx(mode: SyncMode, predicates: RdbPredicates): Promise<Array<SyncResult>>;

    /**
     * 主动执行对所有分布式表的端云同步，使用callback异步回调。使用该接口需要实现云服务功能。
     *
     * @param { SyncMode } mode - 表示数据库的同步模式。
     * @param { Callback<ProgressDetails> } progress - 用来处理数据库同步详细信息的回调函数。
     * @param { AsyncCallback<void> } callback - 回调函数。当同步成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.
     *     Possible causes: 1. Need 2 - 4  parameter(s). 2. The RdbStore must be not nullptr.
     *     3. The mode must be a SyncMode of cloud. 4. The progress must be a callback type.
     *     5. The callback must be a function.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10 dynamic
     * @since 23 static
     */
    cloudSync(mode: SyncMode, progress: Callback<ProgressDetails>, callback: AsyncCallback<void>): void;

    /**
     * 主动执行对所有分布式表的端云同步，使用Promise异步回调。使用该接口需要实现云服务功能。
     *
     * @param { SyncMode } mode - 表示数据库的同步模式。
     * @param { Callback<ProgressDetails> } progress - 用来处理数据库同步详细信息的回调函数。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error.
     *     Possible causes: 1. Need 2 - 4  parameter(s). 2. The RdbStore must be not nullptr.
     *     3. The mode must be a SyncMode of cloud. 4. The progress must be a callback type.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10 dynamic
     * @since 23 static
     */
    cloudSync(mode: SyncMode, progress: Callback<ProgressDetails>): Promise<void>;

    /**
     * 主动执行对指定表的端云同步，使用callback异步回调。使用该接口需要实现云服务功能。
     *
     * @param { SyncMode } mode - 表示数据库的同步模式。
     * @param { string[] } tables - 指定同步的表名。
     * @param { Callback<ProgressDetails> } progress - 用来处理数据库同步详细信息的回调函数。
     * @param { AsyncCallback<void> } callback - 回调函数。当同步成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified.
     *     <br> 2. Incorrect parameter types.
     *     <br> 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10 dynamic
     * @since 23 static
     */
    cloudSync(
      mode: SyncMode,
      tables: string[],
      progress: Callback<ProgressDetails>,
      callback: AsyncCallback<void>
    ): void;

    /**
     * 主动执行对指定表的端云同步，使用Promise异步回调。使用该接口需要实现云服务功能。
     *
     * @param { SyncMode } mode - 表示数据库的同步模式。
     * @param { string[] } tables - 指定同步的表名。
     * @param { Callback<ProgressDetails> } progress - 用来处理数据库同步详细信息的回调函数。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error.
     *     Possible causes: 1. Need 2 - 4  parameter(s). 2. The RdbStore must be not nullptr.
     *     3. The mode must be a SyncMode of cloud. 4. The tablesNames must be not empty.
     *     5. The progress must be a callback type.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @since 10 dynamic
     * @since 23 static
     */
    cloudSync(mode: SyncMode, tables: string[], progress: Callback<ProgressDetails>): Promise<void>;

    /**
     * 手动执行按条件进行端云同步，使用callback异步回调。使用该接口需要实现云同步功能。
     * 
     * > **说明：**
     * >
     * > 从API version 18开始，手动执行端云同步时，设置谓词条件时新增支持指定资产下载能力。此时，同步模式需要设置为`relationalStore.SyncMode.SYNC_MODE_CLOUD_FIRST`。
     * >
     * > 谓词中支持使用主键（必填）和资产（可选）作为同步条件：选择资产作为同步条件时，谓词仅支持[equalTo]{@link relationalStore.RdbPredicates#equalTo}；指定资产的数量较多时（最
     * > 多支持指定50个资产），建议谓词中仅使用主键作为同步条件。
     *
     * @param { SyncMode } mode - 表示数据库的同步模式。
     * @param { RdbPredicates } predicates - 表示同步数据的谓词条件。
     * @param { Callback<ProgressDetails> } progress - 用来处理数据库同步详细信息的回调函数。
     * @param { AsyncCallback<void> } callback - 回调函数。当同步成功，err为undefined；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error.
     *     Possible causes: 1. Need 2 - 4  parameter(s). 2. The RdbStore must be not nullptr.
     *     3. The mode must be a SyncMode of cloud. 4. The tablesNames must be not empty.
     *     5. The progress must be a callback type. 6. The callback must be a function.
     * @throws { BusinessError } 202 -
     *     if permission verification failed, application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    cloudSync(
      mode: SyncMode,
      predicates: RdbPredicates,
      progress: Callback<ProgressDetails>,
      callback: AsyncCallback<void>
    ): void;

    /**
     * 手动执行按条件进行端云同步，使用Promise异步回调。使用该接口需要实现云同步功能。
     * 
     * > **说明：**
     * >
     * > 从API version 18开始，手动执行端云同步时，设置谓词条件时新增支持指定资产下载能力。此时，同步模式需要设置为`relationalStore.SyncMode.SYNC_MODE_CLOUD_FIRST`。
     * >
     * > 谓词中支持使用主键（必填）和资产（可选）作为同步条件：选择资产作为同步条件时，谓词仅支持[equalTo]{@link relationalStore.RdbPredicates#equalTo}；指定资产的数量较多时（最
     * > 多支持指定50个资产），建议谓词中仅使用主键作为同步条件。
     *
     * @param { SyncMode } mode - 表示数据库的同步模式。
     * @param { RdbPredicates } predicates - 表示同步数据的谓词条件。
     * @param { Callback<ProgressDetails> } progress - 用来处理数据库同步详细信息的回调函数。
     * @returns { Promise<void> } Promise对象。返回同步结果。
     * @throws { BusinessError } 401 - Parameter error.
     *     Possible causes: 1. Need 2 - 4  parameter(s). 2. The RdbStore must be not nullptr.
     *     3. The mode must be a SyncMode of cloud. 4. The tablesNames must be not empty.
     *     5. The progress must be a callback type.
     * @throws { BusinessError } 202 - if permission verification failed, application which is not a system
     *     application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    cloudSync(mode: SyncMode, predicates: RdbPredicates, progress: Callback<ProgressDetails>): Promise<void>;

    /**
     * 主动执行端云同步，根据云同步配置信息进行同步，使用Promise异步回调。使用该接口需要实现云服务功能。
     * 
     * > **说明：**
     * >
     * > [CloudSyncConfig]{@link relationalStore.CloudSyncConfig}中仅支持以下谓词：
     * >
     * > - [beginWrap]{@link relationalStore.RdbPredicates#beginWrap}
     * >
     * > - [endWrap]{@link relationalStore.RdbPredicates#endWrap}
     * >
     * > - [or]{@link relationalStore.RdbPredicates#or}
     * >
     * > - [and]{@link relationalStore.RdbPredicates#and}
     * >
     * > - 以下谓词的数据字段类型[ValueType]{@link relationalStore.ValueType}仅支持number类型的整数和string：
     * >
     * > - [equalTo]{@link relationalStore.RdbPredicates#equalTo}
     * >
     * > - [notEqualTo]{@link relationalStore.RdbPredicates#notEqualTo}
     * >
     * > - [in]{@link relationalStore.RdbPredicates#in}
     * >
     * > - [notIn]{@link relationalStore.RdbPredicates#notIn}
     * >
     * > - 以下谓词的数据字段类型[ValueType]{@link relationalStore.ValueType}仅支持number类型的整数：
     * >
     * > - [greaterThan]{@link relationalStore.RdbPredicates#greaterThan}
     * >
     * > - [lessThan]{@link relationalStore.RdbPredicates#lessThan}
     * >
     * > - [greaterThanOrEqualTo]{@link relationalStore.RdbPredicates#greaterThanOrEqualTo}
     * >
     * > - [lessThanOrEqualTo]{@link relationalStore.RdbPredicates#lessThanOrEqualTo}
     * >
     * > 谓词中支持使用主键（必填）和资产（可选）作为同步条件：当选择资产作为同步条件时，同步模式需要设置为relationalStore.SyncMode.SYNC_MODE_CLOUD_FIRST；指定资产的数量较多时（最多支持
     * > 指定50个资产），建议谓词中仅使用主键作为同步条件。
     *
     * @param { CloudSyncConfig } config - 云同步配置。
     * @param { Callback<ProgressDetails> } progress - 进度回调函数，返回ProgressDetails实例对象。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    cloudSyncEx(config: CloudSyncConfig, progress: Callback<ProgressDetails>): Promise<void>;

    /**
     * 停止与云端的数据同步，使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported
     *     because the device does not support the cloud synchronization capability.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.CloudSync.Client
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopCloudSync(): Promise<void>;

    /**
     * 根据指定条件查询远程设备数据库中的数据。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 其中device通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     *
     * @param { string } device - 指定的远程设备ID，不能为空字符串。
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象，指定查询的条件。
     * @param { Array<string> } columns - 表示要查询的列。如果值为空，则查询应用于所有列。
     * @param { AsyncCallback<ResultSet> } callback - 回调函数。当查询成功，err为undefined，data为ResultSet对象；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    remoteQuery(
      device: string,
      table: string,
      predicates: RdbPredicates,
      columns: Array<string>,
      callback: AsyncCallback<ResultSet>
    ): void;

    /**
     * 根据指定条件查询远程设备数据库中的数据。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 其中device通过调用
     * > [deviceManager.getAvailableDeviceListSync]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceListSync}
     * > 方法得到。
     *
     * @param { string } device - 指定的远程设备ID，不能为空字符串。
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象，指定查询的条件。
     * @param { Array<string> } columns - 表示要查询的列。如果值为空，则查询应用于所有列。
     * @returns { Promise<ResultSet> } Promise对象。返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     * @since 23 static
     */
    remoteQuery(device: string, table: string, predicates: RdbPredicates, columns: Array<string>): Promise<ResultSet>;

    /**
     * 注册数据库的数据变更的事件监听。当分布式数据库中的数据发生更改时，将调用回调。
     *
     * @param { 'dataChange' } event - 取值为'dataChange'，表示数据更改。
     * @param { SubscribeType } type - 订阅类型。
     * @param { Callback<Array<string>> } observer - 指分布式数据库中数据更改事件的观察者。Array<string>为数据库中的数据发生改变的对端设备ID。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     */
    on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;

    /**
     * 注册数据库的数据变更的事件监听。当分布式数据库或本地数据库中的数据发生更改时，将调用回调。
     *
     * @param { 'dataChange' } event - 取值为'dataChange'，表示数据更改。
     * @param { SubscribeType } type - 订阅类型。
     * @param { Callback<Array<string>> | Callback<Array<ChangeInfo>> } observer - 回调函数。
     *     <br>当type为SUBSCRIBE_TYPE_REMOTE，observer类型需为Callback<Array<string>>，其中Array<string>为数据库中的数据发生改变的对端设备ID。
     *     <br>当type为SUBSCRIBE_TYPE_CLOUD，observer类型需为Callback<Array<string>>，其中Array<string>为数据库中的数据发生改变的云端账号。
     *     <br>当type为SUBSCRIBE_TYPE_CLOUD_DETAILS，observer类型需为Callback<Array<ChangeInfo>>，其中Array<ChangeInfo>为数据库端云同步过程的
     *     详情。
     *     <br>当type为SUBSCRIBE_TYPE_LOCAL_DETAILS，observer类型需为Callback<Array<ChangeInfo>>，其中Array<ChangeInfo>为本地数据库中的数据更
     *     改的详情。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     */
    on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>> | Callback<Array<ChangeInfo>>): void;

    /**
     * 订阅数据库的数据变更事件。当分布式数据库中的数据发生更改时，将调用回调。
     *
     * @param { SubscribeType } type - 订阅类型。
     * @param { Callback<Array<string>> | Callback<Array<ChangeInfo>> } observer - 回调函数。Array<string>为数据库中的数据发生改变的对端设备
     *     ID；Array<ChangeInfo>为数据变更的详细信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 23 static
     */
    onDataChange(
      type: SubscribeType, 
      observer: Callback<Array<string>> | Callback<Array<ChangeInfo>>
    ): void;

    /**
     * 注册数据库的进程内或者进程间事件监听。当调用[emit]{@link relationalStore.RdbStore.emit}接口时，将调用回调。
     *
     * @param { string } event - 订阅事件名称，与emit接口触发事件时的名称一致。
     * @param { boolean } interProcess - 指定是进程间还是本进程订阅。<br/> true：进程间。<br/> false：本进程。
     * @param { Callback<void> } observer - 回调函数。当进程间或本进程数据变更时触发回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800050 - Failed to obtain the subscription service.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    on(event: string, interProcess: boolean, observer: Callback<void>): void;

    /**
     * 在已打开端云同步，并且网络状态正常的条件下，注册自动同步进度通知，自动同步进行时调用回调。
     *
     * @param { 'autoSyncProgress' } event - 取值为'autoSyncProgress'，表示自动同步进度通知。
     * @param { Callback<ProgressDetails> } progress - 用于返回[ProgressDetails]{@link relationalStore.ProgressDetails}结果的回调
     *     函数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed;
     *     <br>4. The event must be a not empty string; 5. The progress must be function.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 11 dynamic
     */
    on(event: 'autoSyncProgress', progress: Callback<ProgressDetails>): void;

    /**
     * 注册数据库的自动同步回调。当数据库自动同步进度发生变化时，将调用回调。
     *
     * @param { Callback<ProgressDetails> } progress - 回调函数，返回同步过程的详细信息。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 23 static
     */
    onAutoSyncProgress(progress: Callback<ProgressDetails>): void;

    /**
     * 订阅SQL统计信息。
     *
     * @param { 'statistics' } event - 订阅事件名称，取值为'statistics'，表示sql执行时间的统计。
     * @param { Callback<SqlExecutionInfo> } observer - 回调函数。用于返回数据库中SQL执行时间的统计信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    on(event: 'statistics', observer: Callback<SqlExecutionInfo> ): void;

    /**
     * 订阅SQL执行统计信息。当SQL执行统计信息发生变化时，将调用回调。
     *
     * @param { Callback<SqlExecutionInfo> } observer - 回调函数，返回SQL执行统计信息。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 static
     */
    onStatistics(observer: Callback<SqlExecutionInfo> ): void;

    /**
     * 订阅SQL统计信息。使用[createTransaction]{@link relationalStore.RdbStore.createTransaction}创建的事务进行相关操作（
     * [Transaction]{@link relationalStore.Transaction}），只会在事务结束（COMMIT/ROLLBACK）时通知一次统计信息。
     *
     * @param { 'perfStat' } event - 订阅事件名称，取值为'perfStat'，统计执行SQL的时间。
     * @param { Callback<SqlExecutionInfo> } observer - 回调函数。用于返回数据库执行SQL的时间。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20 dynamic
     */
    on(event: 'perfStat', observer: Callback<SqlExecutionInfo>): void;

    /**
     * 订阅SQL性能统计信息。当SQL性能统计信息发生变化时，将调用回调。
     *
     * @param { Callback<SqlExecutionInfo> } observer - 回调函数，返回SQL性能统计信息。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 23 static
     */
    onPerfStat(observer: Callback<SqlExecutionInfo>): void;

    /**
     * 记录执行SQL语句时的异常日志。
     *
     * @param { 'sqliteErrorOccurred' } event - 订阅事件名称，取值为'sqliteErrorOccurred'，记录SQL语句执行过程中的错误信息。
     * @param { Callback<ExceptionMessage> } observer - 回调函数。用于返回SQL执行时出现的异常信息。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20 dynamic
     */
    on(event: 'sqliteErrorOccurred', observer: Callback<ExceptionMessage>): void;

    /**
     * 订阅SQL执行错误日志。当SQL执行发生错误时，将调用回调。
     *
     * @param { Callback<ExceptionMessage> } observer - 回调函数，返回SQL执行错误日志。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 23 static
     */
    onSqliteErrorOccurred(observer: Callback<ExceptionMessage>): void;

    /**
     * 取消数据变更的事件监听。
     *
     * @param { 'dataChange' } event - 取值为'dataChange'，表示数据更改。
     * @param { SubscribeType } type - 订阅类型。
     * @param { Callback<Array<string>> } observer - 指已注册的数据更改观察者。Array<string>为数据库中的数据发生改变的对端设备ID。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9 dynamic
     */
    off(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;

    /**
     * 取消数据变更的事件监听。
     *
     * @param { 'dataChange' } event - 取值为'dataChange'，表示数据更改。
     * @param { SubscribeType } type - 订阅类型。
     * @param { Callback<Array<string>> | Callback<Array<ChangeInfo>> } observer - 回调函数。<br/>当type为
     *     SUBSCRIBE_TYPE_REMOTE，observer类型需为Callback<Array<string>>，其中Array<string>为数据库中的数据发生改变的对端设备ID。<br/> 当type为
     *     SUBSCRIBE_TYPE_CLOUD，observer类型需为Callback<Array<string>>，其中Array<string>为数据库中的数据发生改变的云端账号。<br/> 当type为
     *     SUBSCRIBE_TYPE_CLOUD_DETAILS，observer类型需为Callback<Array<ChangeInfo>>，其中Array<ChangeInfo>为数据库端云同步过程的详情。
     *     <br>当type为SUBSCRIBE_TYPE_LOCAL_DETAILS，observer类型需为Callback<Array<ChangeInfo>>，其中Array<ChangeInfo>为本地数据库中的数据更
     *     改的详情。
     *     <br>当observer没有传入时，表示取消当前type类型下所有数据变更的事件监听。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     */
    off(
      event: 'dataChange',
      type: SubscribeType,
      observer?: Callback<Array<string>> | Callback<Array<ChangeInfo>>
    ): void;

    /**
     * 取消订阅数据库的数据变更事件。
     *
     * @param { SubscribeType } type - 订阅类型。
     * @param { Callback<Array<string>> | Callback<Array<ChangeInfo>> } [observer] - 已注册的数据变更回调。若不传入，则取消所有该类型订阅。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 23 static
     */
    offDataChange(type: SubscribeType, observer?: Callback<Array<string>> | Callback<Array<ChangeInfo>>): void;

    /**
     * 取消数据库的进程内或者进程间事件监听。
     *
     * @param { string } event - 取消订阅事件名称。事件名称与on接口调用时订阅事件的名称一致。
     * @param { boolean } interProcess - 指定是进程间还是本进程取消订阅。<br/> true：进程间。<br/> false：本进程。
     * @param { Callback<void> } observer - 该参数存在，则取消指定Callback监听回调，否则取消该event事件的所有监听回调。 [since 10 - 11]
     * @param { Callback<void> } [observer] - 该参数存在，则取消指定Callback监听回调，否则取消该event事件的所有监听回调。 [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800050 - Failed to obtain the subscription service.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    off(event: string, interProcess: boolean, observer?: Callback<void>): void;

    /**
     * 取消订阅自动同步进度的通知。
     *
     * @param { 'autoSyncProgress' } event - 取值为'autoSyncProgress'，表示自动同步进度通知。
     * @param { Callback<ProgressDetails> } progress - 指已注册的自动同步进度观察者。该参数存在，则取消订阅指定回调，该参数为null或undefined或不存在，则取消订阅所有回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Need 1 - 3  parameter(s)! 2. The RdbStore must be valid.
     *     3. The event must be a not empty string. 4. The progress must be function.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 11 dynamic
     */
    off(event: 'autoSyncProgress', progress?: Callback<ProgressDetails>): void;

    /**
     * 取消注册数据库的自动同步回调。
     *
     * @param { Callback<ProgressDetails> } [progress] - 已注册的自动同步回调。若不传入，则取消所有自动同步订阅。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 23 static
     */
    offAutoSyncProgress(progress?: Callback<ProgressDetails>): void;

    /**
     * 取消订阅SQL统计信息。
     *
     * @param { 'statistics' } event - 取消订阅事件名称。取值为'statistics'，表示sql执行时间的统计。
     * @param { Callback<SqlExecutionInfo> } observer - 回调函数。该参数存在，则取消指定Callback监听回调，否则取消该event事件的所有监听回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 12 dynamic
     */
    off(event: 'statistics', observer?: Callback<SqlExecutionInfo> ): void;

    /**
     * 取消订阅SQL执行统计信息。
     *
     * @param { Callback<SqlExecutionInfo> } [observer] - 已注册的SQL统计回调。若不传入，则取消所有SQL统计订阅。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 static
     */
    offStatistics(observer?: Callback<SqlExecutionInfo> ): void;

    /**
     * 取消订阅SQL统计信息。
     *
     * @param { 'perfStat' } event - 取消订阅事件名称。取值为'perfStat'，统计执行SQL的时间。
     * @param { Callback<SqlExecutionInfo> } observer - 回调函数，表示订阅时的回调函数。该参数存在，则取消指定Callback监听回调，否则取消该event事件的所有监听回调。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20 dynamic
     */
    off(event: 'perfStat', observer?: Callback<SqlExecutionInfo>): void;

    /**
     * 取消订阅SQL性能统计信息。
     *
     * @param { Callback<SqlExecutionInfo> } [observer] - 已注册的SQL性能统计回调。若不传入，则取消所有SQL性能统计订阅。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 23 static
     */
    offPerfStat(observer?: Callback<SqlExecutionInfo>): void;

    /**
     * 停止记录SQL执行过程中的异常日志。
     *
     * @param { 'sqliteErrorOccurred' } event - 取消订阅事件名称，取值为'sqliteErrorOccurred'，记录SQL语句执行过程中的错误信息。
     * @param { Callback<ExceptionMessage> } observer - 回调函数。该参数存在，则取消指定Callback监听回调，否则取消该event事件的所有监听回调。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20 dynamic
     */
    off(event: 'sqliteErrorOccurred', observer?: Callback<ExceptionMessage>): void;

    /**
     * 取消订阅SQL执行错误日志。
     *
     * @param { Callback<ExceptionMessage> } [observer] - 已注册的SQL错误日志回调。若不传入，则取消所有SQL错误日志订阅。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 23 static
     */
    offSqliteErrorOccurred(observer?: Callback<ExceptionMessage>): void;

    /**
     * 通知通过[on](docroot://reference/apis-arkdata/arkts-apis-data-relationalStore-RdbStore.md#on10)注册的进程间或者进程内监听事件。
     *
     * @param { string } event - 通知订阅事件的名称，可自定义事件名称，不能与系统已有事件[dataChange]{@link relationalStore.RdbStore.onDataChange}，
     *     [autoSyncProgress](docroot://reference/apis-arkdata/arkts-apis-data-relationalStore-RdbStore.md#onautosyncprogress11)，
     *     [statistics](docroot://reference/apis-arkdata/arkts-apis-data-relationalStore-RdbStore.md#onstatistics12)名称重
     *     复。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800050 - Failed to obtain the subscription service.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800014 - The target instance is already closed. [since 12]
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 10 dynamic
     * @since 23 static
     */
    emit(event: string): void;

    /**
     * 关闭数据库，使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: The RdbStore verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    close(): Promise<void>;

    /**
     * 将一个数据库文件附加到当前数据库中，以便在SQL语句中可以直接访问附加数据库中的数据，使用Promise异步回调。
     * 
     * 数据库文件来自文件，且此API不支持附加加密数据库。调用attach接口后，数据库切换为非WAL模式，性能会存在一定的劣化。
     * 
     * attach时，数据库会切换为非WAL模式，切换模式需要确保所有的ResultSet都已经Close，所有的写操作已经结束，否则会报错14800015。
     * 
     * attach不能并发调用，否则可能出现未响应情况并报错14800015，需要重试。
     *
     * @param { string } fullPath - 表示要附加的数据库的路径，不能为空字符串，路径长度不超过1024字节。
     * @param { string } attachName - 表示附加后的数据库的别名，不能为空字符串。
     * @param { int } [waitTime] - 表示附加数据库文件的等待时长，单位：s。默认值2s，最小值1s，最大值300s。
     * @returns { Promise<int> } Promise对象。返回附加数据库的数量。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800010 - Failed to open or delete the database by an invalid database path.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800016 - The database alias already exists.
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
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    attach(fullPath: string, attachName: string, waitTime?: int) : Promise<int>;

    /**
     * 将一个当前应用的数据库附加到当前数据库中，以便在SQL语句中可以直接访问附加数据库中的数据，使用Promise异步回调。
     * 
     * 此API不支持加密数据库附加非加密数据库。调用attach接口后，数据库切换为非WAL模式，性能会存在一定的劣化。
     * 
     * attach时，数据库会切换为非WAL模式，切换模式需要确保所有的ResultSet都已经Close，所有的写操作已经结束，否则会报错14800015。
     * 
     * attach不能并发调用，否则可能出现未响应情况并报错14800015，需要重试。除此之外，attach附加加密数据库时，可能受到并发的影响，出现解密失败的情况，报错14800011，需要显式指定加密参数并重试。
     *
     * @param { Context } context - 应用的上下文。
     *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
     *     <br>Stage模型的应用Context定义见[Context]{@link ./app/context}。
     * @param { StoreConfig } config - 与此RDB存储相关的数据库配置。
     * @param { string } attachName - 表示附加后的数据库的别名，不能为空字符串。
     * @param { int } [waitTime] - 表示附加数据库文件的等待时长，单位：s。默认值2s，最小值1s，最大值300s。
     * @returns { Promise<int> } Promise对象。返回附加数据库的数量。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800010 - Failed to open or delete the database by an invalid database path.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800016 - The database alias already exists.
     * @throws { BusinessError } 14801001 - The operation is supported in the stage model only.
     * @throws { BusinessError } 14801002 - Invalid data group ID.
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
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    attach(context: Context, config: StoreConfig, attachName: string, waitTime?: int) : Promise<int>;

    /**
     * 将附加的数据库从当前数据库中分离，使用Promise异步回调。
     * 
     * 当所有的附加的数据库被分离后，数据库会重新切换为WAL模式。
     * 
     * 在detach之前，所有的数据库操作要确保已经结束，所有的ResultSet已经Close。并且不能并发调用，可能出现未响应情况，需要重试。
     *
     * @param { string } attachName - 表示附加后的数据库的别名，不能为空字符串。
     * @param { int } [waitTime] - 表示分离数据库的等待时长，单位：s。默认值2s，最小值1s，最大值300s。
     * @returns { Promise<int> } Promise对象。返回分离后剩余附加的数据库的数量。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
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
     * @FaAndStageModel
     * @since 12 dynamic
     * @since 23 static
     */
    detach(attachName: string, waitTime?: int) : Promise<int>;

    /**
     * 根据RdbPredicates的指定实例对象从数据库中锁定数据，锁定数据不执行端云同步，使用Promise异步回调。
     * 
     * 该接口只支持主键为基本类型的表、不支持共享表、无主键表和复合类型主键表。
     * 
     * 该接口不支持依赖关系表之间的锁传递，如果表存在依赖关系，需要根据依赖关系手动调用该接口。
     * 
     * 该接口不支持对已删除数据的操作。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的锁定条件。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800018 - No data meets the condition.
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
     * @since 12 dynamic
     * @since 23 static
     */
    lockRow(predicates: RdbPredicates): Promise<void>;

    /**
     * 根据RdbPredicates的指定实例对象从数据库中解锁数据，使用Promise异步回调。
     * 
     * 该接口只支持主键为基本类型的表、不支持共享表、无主键表和复合类型主键表。
     * 
     * 该接口不支持依赖关系表之间的锁传递，如果表存在依赖关系，需要根据依赖关系手动调用该接口。
     * 
     * 该接口不支持对已删除数据的操作。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的锁定条件。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800018 - No data meets the condition.
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
     * @since 12 dynamic
     * @since 23 static
     */
    unlockRow(predicates: RdbPredicates): Promise<void>;

    /**
     * 根据指定条件查询数据库中锁定的数据，使用Promise异步回调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } [columns] - 表示要查询的列。如果值为空，则查询应用于所有列。
     * @returns { Promise<ResultSet> } Promise对象。返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
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
     * @since 12 dynamic
     * @since 23 static
     */
    queryLockedRow(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>;

    /**
     * 手动对应用云端数据库加锁，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 若手动加锁成功，则其他同账户设备的同应用禁止同步到云端。使用该接口需要实现云同步功能。
     *
     * @returns { Promise<int> } Promise对象。如果加锁成功，返回锁的有效时长；如果加锁失败，返回0，单位：ms。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    lockCloudContainer(): Promise<int>;

    /**
     * 手动对应用云端数据库解锁，使用Promise异步回调。使用该接口需要实现云同步功能。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    unlockCloudContainer(): Promise<void>;

    /**
     * 创建一个事务对象并开始事务，使用Promise异步回调。
     * 
     * 与[beginTransaction]{@link relationalStore.RdbStore.beginTransaction}的区别在于：createTransaction接口会返回一个事务对象，不同事务对象之间是隔
     * 离的。使用事务对象进行插入、删除或更新数据等操作，无法被注册数据变更通知[on('dataChange')]{@link relationalStore.RdbStore.onDataChange}监听到。
     * 
     * 一个store最多支持同时存在四个事务对象，超过后会返回14800015错误码，此时需要检查是否持有事务对象时间过长或并发事务过多，若确认无法通过上述优化解决问题，建议等待现有事务释放后，再尝试新建事务对象。
     * 
     * 优先使用createTransaction，不再推荐使用beginTransaction。
     *
     * @param { TransactionOptions } options - 表示事务对象的配置信息，默认值为DEFERRED。
     * @returns { Promise<Transaction> } Promise对象，返回事务对象。
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database is busy.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    createTransaction(options?: TransactionOptions): Promise<Transaction>;

    /**
     * 手动更新加密数据库的密钥。使用Promise异步回调。
     * 
     * 从API版本26.0.0开始，支持使用该接口更新向量数据库（创建数据库时配置StoreConfig的vector字段为true）的密钥。
     * 
     * 仅支持加密数据库进行密钥更新，不支持非加密数据库变加密数据库及加密数据库变非加密数据库，且需要保持加密参数和密钥生成方式与建库时一致。
     * 
     * 不支持对非WAL模式的数据库进行密钥更新。
     * 
     * 手动更新密钥时需要独占访问数据库，此时若存在任何未释放的结果集（ResultSet）、事务（Transaction）或其他进程打开的数据库均会引发失败。
     * 
     * 数据库越大，密钥更新所需的时间越长。
     *
     * @param { CryptoParam } cryptoParam - 指定用户自定义的加密参数。<br/>当此参数不填时，使用默认的加密参数，见CryptoParam。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800015 - The database does not respond.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 20 dynamic
     * @since 23 static
     */
    rekey(cryptoParam?: CryptoParam): Promise<void>;

    /**
     * 设置自定义排序的语言。使用Promise异步回调。
     * 
     * 该值符合ISO 639标准，但是仅支持ICU中的部分语言，对于不支持的语言，设置自定义排序的语言时会报错14800001。
     *
     * @param { string } locale - 设置自定义排序的语言，不能为空字符串。该值符合ISO 639标准，如："zh"。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 20 dynamic
     * @since 23 static
     */
    setLocale(locale: string) : Promise<void>;

    /**
     * 手动更新数据库的密钥或加密参数，使用Promise异步回调。
     * 
     * 不支持对非WAL模式的数据库进行密钥更新。
     * 
     * 手动更新时需要独占访问数据库，此时若存在任何未释放的结果集（ResultSet）、事务（Transaction）或其他进程打开的数据库均会导致更新失败。
     * 
     * 支持加密数据库的参数更新，以及加密数据库与非加密数据库之间的相互转换。
     * 
     * 数据库越大，执行更新所需的时间越长。
     * 
     * > **说明：**
     * >
     * > 加密参数变更需谨慎，在完成rekeyEx操作后，getRdbStore时必须使用新的参数来打开数据库，否则可能会导致开库失败。
     * >
     * > 如果rekey过程因设备断电等原因中断，操作可能成功也可能失败。因此，建议业务方做好兜底保障（使用RekeyEx前后的参数进行冗余重试），确保不会错误地判断数据库的状态，从而避免出现数据库无法打开的问题。
     * >
     * > 如果有加密参数变更，不建议getRdbStore时使用AllowedRebuild参数，防止因为传入的错误加密参数导致数据库发生重建。
     *
     * @param { CryptoParam } cryptoParam - 指定用户自定义的加密参数。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 22 dynamic
     * @since 23 static
     */
    rekeyEx(cryptoParam: CryptoParam): Promise<void>;
  }

  /**
   * 提供以事务方式管理数据库的方法。事务对象是通过[createTransaction]{@link relationalStore.RdbStore.createTransaction}接口创建的，不同事务对象之间的操作是隔离的，不
   * 同类型事务的区别见[TransactionType]{@link relationalStore.TransactionType} 。
   * 
   * 当前关系型数据库同一时刻仅支持一个写事务，所以如果当前[RdbStore]{@link relationalStore.RdbStore}存在写事务未释放，创建IMMEDIATE或EXCLUSIVE事务会返回14800024错误
   * 码。如果是创建的DEFERRED事务，则可能在首次使用DEFERRED事务调用写操作时返回14800024错误码。通过IMMEDIATE或EXCLUSIVE创建写事务或者DEFERRED事务升级到写事务之后，
   * [RdbStore]{@link relationalStore.RdbStore}的写操作也会返回14800024错误码。
   * 
   * 当事务并发量较高且写事务持续时间较长时，返回14800024错误码的次数可能会变多，开发者可以通过减少事务占用时长减少14800024出现的次数，也可以通过重试的方式处理14800024错误码。
   * 
   * 在使用以下API前，请先通过[createTransaction]{@link relationalStore.RdbStore.createTransaction}方法获取Transaction实例，再通过此实例调用对应方法。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 14开始支持。
   * 
   * **示例：**
   * 
   * 示例代码中this.context定义见Stage模型的应用[Context]{@link ./app/context}。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 14 dynamic
   * @since 23 static
   */
  interface Transaction {
    /**
     * 提交已执行的SQL语句，使用Promise异步回调。如果是使用异步接口执行SQL语句，请确保异步接口执行完成之后再调用commit接口，否则可能会丢失SQL操作。调用commit接口之后，该Transaction对象及创建的
     * ResultSet对象都将被关闭。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    commit(): Promise<void>;

    /**
     * 回滚已经执行的SQL语句，使用Promise异步回调。调用rollback接口之后，该Transaction对象及创建的ResultSet对象都会被关闭。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    rollback(): Promise<void>;

    /**
     * 向目标表中插入一行数据，使用Promise异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串，不应包含空格、逗号和星号，不能以点开头和结尾等，否则会抛出401错误码。
     * @param { ValuesBucket } values - 表示要插入到表中的数据行。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。
     * @returns { Promise<long> } Promise对象。返回插入数据的行ID。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    insert(table: string, values: ValuesBucket, conflict?: ConflictResolution): Promise<long>;

    /**
     * 向目标表中插入一行数据。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { ValuesBucket | sendableRelationalStore.ValuesBucket } values - 表示要插入到表中的数据行。
     * @param { ConflictResolution } [conflict] - 指定冲突解决模式。默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。
     * @returns { number } 返回插入数据的行ID。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamiconly
     */
    insertSync(table: string, values: ValuesBucket | sendableRelationalStore.ValuesBucket,
      conflict?: ConflictResolution): number;

    /**
     * 向目标表中插入一行数据。由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 如果单条数据超过此限制，在后续通过RdbStore的query或querySql接口获取ResultSet后，调用getValue、getString等get方法时将无法成功获取数据，
     * 并可能导致操作失败或抛出异常。如需读取超过2MB的数据，请使用queryByStep接口。
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { string } table - Indicates the target table.
     * @param { ValuesBucket } values - Indicates the row of data {@link ValuesBucket} to be inserted into the table.
     * @param { ConflictResolution } [conflict] -
     *     Indicates the {@link ConflictResolution} to insert data into the table.
     * @returns { long } The row ID if the operation is successful. return -1 otherwise.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 23 static
     */
    insertSync(table: string, values: ValuesBucket, conflict?: ConflictResolution): long;

    /**
     * 向目标表中插入一组数据，使用Promise异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     * 
     * 按每批32766个参数，分批以[ConflictResolution.ON_CONFLICT_REPLACE]{@link relationalStore.ConflictResolution}策略写入，参数数量计算方式为插入
     * 数据条数乘以插入数据的所有字段的并集大小，中途失败则立即返回。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。
     * @returns { Promise<long> } Promise对象。返回批量插入的数据个数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    batchInsert(table: string, values: Array<ValuesBucket>): Promise<long>;

    /**
     * 向目标表中插入一组数据。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     * 
     * 按每批32766个参数，分批以[ConflictResolution.ON_CONFLICT_REPLACE]{@link relationalStore.ConflictResolution}策略写入，参数数量计算方式为插入
     * 数据条数乘以插入数据的所有字段的并集大小，中途失败则立即返回。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。
     * @returns { long } 返回批量插入的数据个数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    batchInsertSync(table: string, values: Array<ValuesBucket>): long;

    /**
     * 向目标表中插入一组数据，可以通过conflict参数指定冲突解决模式[ConflictResolution]{@link relationalStore.ConflictResolution}。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     * 
     * 单次插入参数的最大数量限制为32766，超出上限会返回14800000错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。
     * 
     * 例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。
     * 
     * 请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。如果是ON_CONFLICT_ROLLBACK模式，当发生冲突时会回滚整个事务。
     * @returns { long } 返回批量插入的数据个数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    batchInsertWithConflictResolutionSync(table: string, values: Array<ValuesBucket>,
      conflict: ConflictResolution): long;

    /**
     * 向目标表中插入一组数据，可以通过conflict参数指定冲突解决模式[ConflictResolution]{@link relationalStore.ConflictResolution}，使用Promise异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     * 
     * 单次插入参数的最大数量限制为32766，超出上限会返回14800000错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。
     * 
     * 例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。
     * 
     * 请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。如果是ON_CONFLICT_ROLLBACK模式，当发生冲突时会回滚整个事务。
     * @returns { Promise<long> } Promise对象。返回批量插入的数据个数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800034 - SQLite: Library used incorrectly.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    batchInsertWithConflictResolution(
        table: string,
        values: Array<ValuesBucket>,
        conflict: ConflictResolution
    ): Promise<long>;

    /**
     * 向目标表中插入一组数据，可以通过conflict参数指定当发生数据冲突时的解决模式[ConflictResolution]{@link relationalStore.ConflictResolution}，返回
     * [Result]{@link relationalStore.Result}。使用Promise异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     * 
     * 单次插入参数的最大数量限制为32766，超出上限会返回14800001错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。
     * 
     * 例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。
     * 
     * 请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。
     * 
     * conflict参数不建议使用ON_CONFLICT_FAIL策略，可能无法返回正确的结果。
     *
     * @param { string } table - 要插入的目标表名。注意：正确的表名不应包含空格、逗号和星号，不能以点开头和结尾等，否则会抛出参数错误。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。注意：空数组、含有重复资产数据会抛出参数错误。
     * @param { ReturningConfig } config - 指定返回值的配置信息。
     * @param { ConflictResolution } [conflict] - 指定冲突解决模式。默认为ON_CONFLICT_NONE。
     * @returns { Promise<Result> } Promise对象。返回受影响的数据集。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    batchInsertWithReturning(table: string, values: Array<ValuesBucket>, config: ReturningConfig,
      conflict?: ConflictResolution): Promise<Result>;

    /**
     * 向目标表中插入一组数据，可以通过conflict参数指定当发生数据冲突时的解决模式[ConflictResolution]{@link relationalStore.ConflictResolution}，返回
     * [Result]{@link relationalStore.Result}。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     * 
     * 单次插入参数的最大数量限制为32766，超出上限会返回14800001错误码。参数数量计算方式为插入数据条数乘以插入数据的所有字段的并集大小。
     * 
     * 例如：插入数据的所有字段的并集大小为10，则最多可以插入3276条数据（3276*10=32760）。
     * 
     * 请确保在调用接口时遵守此限制，以避免因参数数量过多而导致错误。
     * 
     * conflict参数不建议使用ON_CONFLICT_FAIL策略，可能无法返回正确的结果。
     *
     * @param { string } table - 要插入的目标表名。注意：正确的表名不应包含空格、逗号和星号，不能以点开头和结尾等，否则会抛出参数错误。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。注意：空数组、含有重复资产数据会抛出参数错误。
     * @param { ReturningConfig } config - 指定返回值的配置信息。
     * @param { ConflictResolution } [conflict] - 指定冲突解决模式。默认为ON_CONFLICT_NONE。
     * @returns { Result } 返回受影响的数据集。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    batchInsertWithReturningSync(table: string, values: Array<ValuesBucket>, config: ReturningConfig,
      conflict?: ConflictResolution): Result;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据，使用Promise异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。
     * @returns { Promise<long> } Promise对象。返回受影响的行数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    update(values: ValuesBucket, predicates: RdbPredicates, conflict?: ConflictResolution): Promise<long>;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @param { ConflictResolution } conflict - 指定冲突解决模式。默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。
     * @returns { long } 返回受影响的行数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    updateSync(values: ValuesBucket, predicates: RdbPredicates, conflict?: ConflictResolution): long;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据，可以通过conflict参数指定当发生数据冲突时的解决模式
     * [ConflictResolution]{@link relationalStore.ConflictResolution}，返回[Result]{@link relationalStore.Result}，使用Promise
     * 异步回调。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     * 
     * conflict参数不建议使用ON_CONFLICT_FAIL策略，可能无法返回正确的结果。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @param { ReturningConfig } config - 指定返回值的配置信息。
     * @param { ConflictResolution } [conflict] - 指定冲突解决模式。默认为ON_CONFLICT_NONE。
     * @returns { Promise<Result> } Promise对象。返回受影响的数据集。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of    valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    updateWithReturning(values: ValuesBucket, predicates: RdbPredicates, config: ReturningConfig,
      conflict?: ConflictResolution): Promise<Result>;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据，可以通过conflict参数指定当发生数据冲突时的解决模式
     * [ConflictResolution]{@link relationalStore.ConflictResolution}，返回[Result]{@link relationalStore.Result}。
     * 
     * 由于共享内存的大小限制为2MB，因此单条数据的大小也必须严格小于2MB。
     * 
     * 如果单条数据超过此限制，在后续通过RdbStore的
     * [query]{@link relationalStore.RdbStore.query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>)}
     * 或
     * [querySql]{@link relationalStore.RdbStore.querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>)}
     * 接口获取ResultSet后，调用[getValue]{@link relationalStore.ResultSet.getValue}、
     * [getString]{@link relationalStore.ResultSet.getString}等get方法时将无法成功获取数据，并可能导致操作失败或抛出异常。
     * 
     * 如需读取超过2MB的数据，请使用
     * [queryByStep]{@link relationalStore.RdbStore.queryByStep(sql: string, bindArgs?: Array<ValueType>)}接口。
     * 
     * 单条字符串类型字段最大支持写入8MB，超出部分将被截断，仅保留前8MB数据，若需存储超过8MB的内容，建议使用blob类型。
     * 
     * conflict参数不建议使用ON_CONFLICT_FAIL策略，可能无法返回正确的结果。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @param { ReturningConfig } config - 指定返回值的配置信息。
     * @param { ConflictResolution } [conflict] - 指定冲突解决模式。默认为ON_CONFLICT_NONE。
     * @returns { Result } 返回受影响的数据集。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of    valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    updateWithReturningSync(values: ValuesBucket, predicates: RdbPredicates, config: ReturningConfig,
      conflict?: ConflictResolution): Result;

    /**
     * 根据RdbPredicates的指定实例对象从数据库中删除数据，使用Promise异步回调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的删除条件。
     * @returns { Promise<long> } Promise对象。返回受影响的行数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    delete(predicates: RdbPredicates): Promise<long>;

    /**
     * 根据RdbPredicates的指定实例对象从数据库中删除数据。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的删除条件。
     * @returns { long } 返回受影响的行数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    deleteSync(predicates: RdbPredicates): long;

    /**
     * 根据RdbPredicates的实例对象从数据库中删除数据，返回[Result]{@link relationalStore.Result}，使用Promise异步回调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的删除条件。
     * @param { ReturningConfig } config - 指定返回值的配置信息。
     * @returns { Promise<Result> } Promise对象。返回受影响的数据集。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of    valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    deleteWithReturning(predicates: RdbPredicates, config: ReturningConfig): Promise<Result>;

    /**
     * 根据RdbPredicates的实例对象从数据库中删除数据，返回[Result]{@link relationalStore.Result}。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的删除条件。
     * @param { ReturningConfig } config - 指定返回值的配置信息。
     * @returns { Result } 返回受影响的数据集。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800032 - SQLite: Abort due to constraint violation.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    deleteWithReturningSync(predicates: RdbPredicates, config: ReturningConfig): Result;

    /**
     * 根据指定条件查询数据库中的数据，使用Promise异步回调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } columns - 表示要查询的列。如果值为空，则查询应用于所有列。
     * @returns { Promise<ResultSet> } Promise对象。返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    query(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>;

    /**
     * 根据指定条件查询数据库中的数据。对query同步接口获得的resultSet进行操作时，若逻辑复杂且循环次数过多，可能造成freeze问题，建议将此步骤放到
     * [taskpool]{@link @ohos.taskpool:taskpool}线程中执行。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } columns - 表示要查询的列。如果值为空，则查询应用于所有列。默认值为空。
     * @returns { ResultSet } 返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    querySync(predicates: RdbPredicates, columns?: Array<string>): ResultSet;

    /**
     * 根据指定SQL语句查询数据库中的数据，SQL语句中的各种表达式和操作符之间的关系操作符号不超过1000个，使用Promise异步回调。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } args - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空。
     * @returns { Promise<ResultSet> } Promise对象。返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    querySql(sql: string, args?: Array<ValueType>): Promise<ResultSet>;

    /**
     * 根据指定SQL语句查询数据库中的数据，SQL语句中的各种表达式和操作符之间的关系操作符号不超过1000个。对query同步接口获得的resultSet进行操作时，若逻辑复杂且循环次数过多，可能造成freeze问题，建议将此步骤
     * 放到[taskpool]{@link @ohos.taskpool:taskpool}线程中执行。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } [args] - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空。
     * @returns { ResultSet } 返回ResultSet对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    querySqlSync(sql: string, args?: Array<ValueType>): ResultSet;

    /**
     * 根据指定条件查询数据库中的数据，查询时不计算行数，性能优于[query]{@link relationalStore.Transaction.query}接口。使用Promise异步回调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } [columns] - 表示要查询的列。如果值为空，则查询应用于所有列。默认值为空。
     * @returns { Promise<LiteResultSet> } 返回LiteResultSet对象。
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    queryWithoutRowCount(predicates: RdbPredicates, columns?: Array<string>): Promise<LiteResultSet>;

    /**
     * 根据指定条件查询数据库中的数据，查询时不计算行数。对queryWithoutRowCountSync同步接口获得的LiteResultSet进行操作时，若逻辑复杂且循环次数过多，可能造成freeze问题，建议将此步骤放到
     * [taskpool]{@link @ohos.taskpool:taskpool}线程中执行。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } [columns] - 表示要查询的列。如果值为空，则查询应用于所有列。默认值为空。
     * @returns { LiteResultSet } 返回LiteResultSet对象。
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    queryWithoutRowCountSync(predicates: RdbPredicates, columns?: Array<string>): LiteResultSet;
    
    /**
     * 根据指定条件查询数据库中的数据，查询时不计算行数。使用Promise异步回调。性能优于[querySql]{@link relationalStore.Transaction.querySql}接口。SQL语句中的各种表达式和
     * 操作符之间的关系操作符号不超过1000个。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } [bindArgs] - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空。
     * @returns { Promise<LiteResultSet> } Promise对象。返回LiteResultSet对象。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    querySqlWithoutRowCount(sql: string, bindArgs?: Array<ValueType>): Promise<LiteResultSet>;
        
    /**
     * 根据指定SQL语句查询数据库中的数据，查询时不计算行数。SQL语句中的各种表达式和操作符之间的关系操作符号不超过1000个。对querySqlWithoutRowCountSync同步接口获得的LiteResultSet进行操
     * 作时，若逻辑复杂且循环次数过多，可能造成freeze问题，建议将此步骤放到[taskpool]{@link @ohos.taskpool:taskpool}线程中执行。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } [bindArgs] - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。默认值为空。
     * @returns { LiteResultSet } 返回LiteResultSet对象。
     * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @stagemodelonly
     * @crossplatform
     * @since 23 dynamic&static
     */
    querySqlWithoutRowCountSync(sql: string, bindArgs?: Array<ValueType>): LiteResultSet;

    /**
     * 执行包含指定参数的SQL语句，语句中的各种表达式和操作符之间的关系操作符号不超过1000个，返回值类型为ValueType，使用Promise异步回调。
     * 
     * 该接口支持执行增删改操作，支持执行PRAGMA语法的sql，支持对表的操作（建表、删表、修改表），返回结果类型由执行具体sql的结果决定。
     * 
     * 此接口不支持执行查询、附加数据库和事务操作，查询可以使用[querySql]{@link relationalStore.Transaction.querySql}、
     * [query]{@link relationalStore.Transaction.query}接口代替、附加数据库可以使用
     * [attach]{@link relationalStore.RdbStore.attach(fullPath: string, attachName: string, waitTime?: int)}接口代替。
     * 
     * 不支持分号分隔的多条语句。
     * 
     * 不支持开头包含注释的语句。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } args - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。 [since 14 - 19]
     * @param { Array<ValueType> } [args] - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。 [since 20]
     * @returns { Promise<ValueType> } Promise对象，返回sql执行后的结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported the sql(attach,begin,commit,rollback etc.).
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform [since 20]
     * @since 14 dynamic
     * @since 23 static
     */
    execute(sql: string, args?: Array<ValueType>): Promise<ValueType>;

    /**
     * 执行包含指定参数的SQL语句，语句中的各种表达式和操作符之间的关系操作符号不超过1000个，返回值类型为ValueType。
     * 
     * 该接口支持执行增删改操作，支持执行PRAGMA语法的sql，支持对表的操作（建表、删表、修改表），返回结果类型由执行具体sql的结果决定。
     * 
     * 此接口不支持执行查询、附加数据库和事务操作，查询可以使用[querySql]{@link relationalStore.Transaction.querySql}、
     * [query]{@link relationalStore.Transaction.query}接口代替、附加数据库可以使用
     * [attach]{@link relationalStore.RdbStore.attach(fullPath: string, attachName: string, waitTime?: int)}接口代替。
     * 
     * 不支持分号分隔的多条语句。
     * 
     * 不支持开头包含注释的语句。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } [args] - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。该参数不填，或者填null或undefined，都认为是sql参数语句完整。默认值为空。
     * @returns { ValueType } 返回sql执行后的结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported the sql(attach,begin,commit,rollback etc.).
     * @throws { BusinessError } 14800000 - Inner error.
     * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
     * @throws { BusinessError } 14800014 - The target instance is already closed.
     * @throws { BusinessError } 14800021 - SQLite: Generic error.
     *     Possible causes: Insert failed or the updated data does not exist.
     * @throws { BusinessError } 14800023 - SQLite: Access permission denied.
     * @throws { BusinessError } 14800024 - SQLite: The database file is locked.
     * @throws { BusinessError } 14800025 - SQLite: A table in the database is locked.
     * @throws { BusinessError } 14800026 - SQLite: The database is out of memory.
     * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
     * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
     * @throws { BusinessError } 14800029 - SQLite: The database is full.
     * @throws { BusinessError } 14800031 - SQLite: TEXT or BLOB exceeds size limit.
     * @throws { BusinessError } 14800033 - SQLite: Data type mismatch.
     * @throws { BusinessError } 14800047 - The WAL file size exceeds the default limit.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @crossplatform
     * @since 14 dynamic
     * @since 23 static
     */
    executeSync(sql: string, args?: Array<ValueType>): ValueType;
  }

  /**
   * 创建或打开已有的关系型数据库，开发者可以根据自己的需求配置config参数，然后通过RdbStore调用相关接口执行数据操作。使用callback异步回调。
   * 
   * 对应沙箱路径下无数据库文件时，将创建数据库文件，文件创建位置详见[StoreConfig]{@link relationalStore.StoreConfig}。对应路径下已有数据库文件时，将打开已有数据库文件。
   * 
   * 开发者在创建数据库时，应谨慎配置是否进行数据库加密的参数[encrypt]{@link relationalStore.StoreConfig}，数据库创建后，禁止对该参数进行修改。
   * 
   * | 当前打开数据库时配置的加密类型  | 本设备上创建该数据库时的加密类型           | 结果 |
   * | ------- | -------------------------------- | ---- |
   * | 非加密 | 加密                          | 使用加密配置（encrypt=true）打开数据库。   |
   * | 加密 | 非加密                          | 使用非加密配置（encrypt=false）打开数据库。   |
   * 
   * getRdbStore支持多线程并发操作。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./app/context}。
   * @param { StoreConfig } config - 与此RDB存储相关的数据库配置。
   * @param { AsyncCallback<RdbStore> } callback - 回调函数。当获取RdbStore成功，err为undefined，data为RdbStore对象；否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete the database by an invalid database path.
   * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
   * @throws { BusinessError } 14801001 - The operation is supported in the stage model only. [since 10]
   * @throws { BusinessError } 14801002 - Invalid data group ID. [since 10]
   * @throws { BusinessError } 14800017 - StoreConfig is changed. [since 12]
   * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
   * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 12]
   * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 12]
   * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
   * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
   * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
   * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
   * @throws { BusinessError } 14800020 - The secret key is corrupted or lost. [since 14]
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  function getRdbStore(context: Context, config: StoreConfig, callback: AsyncCallback<RdbStore>): void;

  /**
   * 创建或打开已有的关系型数据库，开发者可以根据自己的需求配置config参数，然后通过RdbStore调用相关接口执行数据操作。使用Promise异步回调。
   * 
   * 对应沙箱路径下无数据库文件时，将创建数据库文件，文件创建位置详见[StoreConfig]{@link relationalStore.StoreConfig}。对应路径下已有数据库文件时，将打开已有数据库文件。
   * 
   * 开发者在创建数据库时，应谨慎配置是否进行数据库加密的参数[encrypt]{@link relationalStore.StoreConfig}，数据库创建后，禁止对该参数进行修改。
   * 
   * | 当前打开数据库时配置的加密类型  | 本设备上创建该数据库时的加密类型           | 结果 |
   * | ------- | -------------------------------- | ---- |
   * | 非加密 | 加密                          | 使用加密配置（encrypt=true）打开数据库。   |
   * | 加密 | 非加密                          | 使用非加密配置（encrypt=false）打开数据库。   |
   * 
   * getRdbStore支持多线程并发操作。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./app/context}。
   * @param { StoreConfig } config - 与此RDB存储相关的数据库配置。
   * @returns { Promise<RdbStore> } Promise对象。返回RdbStore对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete the database by an invalid database path.
   * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
   * @throws { BusinessError } 14801001 - The operation is supported in the stage model only. [since 10]
   * @throws { BusinessError } 14801002 - Invalid data group ID. [since 10]
   * @throws { BusinessError } 14800017 - StoreConfig is changed. [since 12]
   * @throws { BusinessError } 14800021 - SQLite: Generic error. [since 12]
   * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database. [since 12]
   * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred. [since 12]
   * @throws { BusinessError } 14800029 - SQLite: The database is full. [since 12]
   * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file. [since 12]
   * @throws { BusinessError } 14800020 - The secret key is corrupted or lost. [since 14]
   * @throws { BusinessError } 14800022 - SQLite: Callback routine requested an abort. [since 14]
   * @throws { BusinessError } 14800023 - SQLite: Access permission denied. [since 14]
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  function getRdbStore(context: Context, config: StoreConfig): Promise<RdbStore>;

  /**
   * 创建或打开已有的关系型数据库。开发者可以根据自己的需求配置config参数，然后通过RdbStore调用相关接口执行数据操作。这是一个同步方法，会阻塞线程直到获取到RdbStore。
   * 
   * 对应沙箱路径下无数据库文件时，将创建数据库文件，文件创建位置详见[StoreConfig]{@link relationalStore.StoreConfig}。对应路径下已有数据库文件时，将打开已有数据库文件。
   * 
   * 开发者在创建数据库时，应谨慎配置是否进行数据库加密的参数[encrypt]{@link relationalStore.StoreConfig}，数据库创建后，禁止对该参数进行修改。如果有修改参数，则会报错误码。
   * 
   * | 当前打开数据库时配置的加密类型  | 本设备上创建该数据库时的加密类型           | 结果 |
   * | ------- | -------------------------------- | ---- |
   * | 非加密 | 加密                          | 使用加密配置（encrypt=true）打开数据库。   |
   * | 加密 | 非加密                          | 使用非加密配置（encrypt=false）打开数据库。   |
   * 
   * getRdbStoreSync支持多线程并发操作。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./app/context}。
   * @param { StoreConfig } config - 与此RDB存储相关的数据库配置。
   * @returns { RdbStore } 返回RdbStore对象。
   * @throws { BusinessError } 14800001 - Invalid args.
   * @throws { BusinessError } 14800010 - Invalid database path.
   * @throws { BusinessError } 14800011 - The current operation failed because the database is corrupted.
   * @throws { BusinessError } 14801001 - The operation is supported in the stage model only.
   * @throws { BusinessError } 14801002 - Invalid data group ID.
   * @throws { BusinessError } 14800017 - Config changed.
   * @throws { BusinessError } 14800020 - The secret key is corrupted or lost.
   * @throws { BusinessError } 14800021 - SQLite: Generic error.
   * @throws { BusinessError } 14800027 - SQLite: Attempt to write a readonly database.
   * @throws { BusinessError } 14800028 - SQLite: Some kind of disk I/O error occurred.
   * @throws { BusinessError } 14800029 - SQLite: The database is full.
   * @throws { BusinessError } 14800030 - SQLite: Unable to open the database file.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @stagemodelonly
   * @crossplatform
   * @since 24 dynamic&static
   */
  function getRdbStoreSync(context: Context, config: StoreConfig): RdbStore;

  /**
   * 删除数据库文件，使用callback异步回调。
   * 
   * 删除成功后，建议将数据库对象置为null。建立数据库时，若在[StoreConfig]{@link relationalStore.StoreConfig}中配置了自定义路径，则调用此接口进行删库无效，必须使用 
   * [deleteRdbStore]{@link relationalStore.deleteRdbStore} 接口进行删库。
   * 
   * 当使用向量数据库时，在调用deleteRdbStore接口前，应当确保向量数据库已打开的RdbStore和ResultSet均已成功关闭。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./app/context}。
   * @param { string } name - 数据库名称，不能为空字符串且不能包含路径分隔符/。
   * @param { AsyncCallback<void> } callback - 回调函数。当删除数据库成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete the database by an invalid database path.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteRdbStore(context: Context, name: string, callback: AsyncCallback<void>): void;

  /**
   * 使用指定的数据库文件配置删除数据库，使用callback异步回调。
   * 
   * 删除成功后，建议将数据库对象置为null。若数据库文件处于公共沙箱目录下，则删除数据库时必须使用该接口，当存在多个进程操作同一个数据库的情况，建议向其他进程发送数据库删除通知使其感知并处理。建立数据库时，若在
   * [StoreConfig]{@link relationalStore.StoreConfig}中配置了自定义路径，则必须调用此接口进行删库。
   * 
   * 当使用向量数据库时，在调用deleteRdbStore接口前，应当确保向量数据库已打开的RdbStore和ResultSet均已成功关闭。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./app/context}。
   * @param { StoreConfig } config - 与此RDB存储相关的数据库配置。
   * @param { AsyncCallback<void> } callback - 回调函数。当删除数据库成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete the database by an invalid database path.
   * @throws { BusinessError } 14801001 - The operation is supported in the stage model only.
   * @throws { BusinessError } 14801002 - Invalid data group ID.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  function deleteRdbStore(context: Context, config: StoreConfig, callback: AsyncCallback<void>): void;

  /**
   * 删除数据库文件，使用Promise异步回调。
   * 
   * 删除成功后，建议将数据库对象置为null。建立数据库时，若在[StoreConfig]{@link relationalStore.StoreConfig}中配置了自定义路径，则调用此接口进行删库无效，必须使用 
   * [deleteRdbStore]{@link relationalStore.deleteRdbStore} 接口进行删库。
   * 
   * 当使用向量数据库时，在调用deleteRdbStore接口前，应当确保向量数据库已打开的RdbStore和ResultSet均已成功关闭。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./app/context}。
   * @param { string } name - 数据库名称，不能为空字符串且不能包含路径分隔符/。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete the database by an invalid database path.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform [since 10]
   * @since 9 dynamic
   * @since 23 static
   */
  function deleteRdbStore(context: Context, name: string): Promise<void>;

  /**
   * 使用指定的数据库文件配置删除数据库，使用Promise异步回调。
   * 
   * 删除成功后，建议将数据库对象置为null。若数据库文件处于公共沙箱目录下，则删除数据库时必须使用该接口，当存在多个进程操作同一个数据库的情况，建议向其他进程发送数据库删除通知使其感知并处理。建立数据库时，若在
   * [StoreConfig]{@link relationalStore.StoreConfig}中配置了自定义路径，则必须调用此接口进行删库。
   * 
   * 当使用向量数据库时，在调用deleteRdbStore接口前，应当确保向量数据库已打开的RdbStore和ResultSet均已成功关闭。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./app/context}。
   * @param { StoreConfig } config - 与此RDB存储相关的数据库配置。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14800000 - Inner error.
   * @throws { BusinessError } 14800010 - Failed to open or delete the database by an invalid database path.
   * @throws { BusinessError } 14801001 - The operation is supported in the stage model only.
   * @throws { BusinessError } 14801002 - Invalid data group ID.
   * @throws { BusinessError } 801 - Capability not supported. [since 12]
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 10 dynamic
   * @since 23 static
   */
  function deleteRdbStore(context: Context, config: StoreConfig): Promise<void>;

  /**
   * 判断系统是否提供向量数据库能力。
   *
   * @returns { boolean } 系统具备向量数据库能力时返回true，否则返回false。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 18 dynamic
   * @since 23 static
   */
  function isVectorSupported(): boolean;

  /**
   * 判断当前平台是否支持传入的分词器，此为同步接口。
   * 
   * 如果当前平台支持传入的分词器时，此接口返回值为true；反之，返回值为false。
   *
   * @param { Tokenizer } tokenizer - 需要被判断是否支持的分词器。
   * @returns { boolean } true表示当前平台支持当前传入的分词器，false表示当前平台不支持当前传入的分词器。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 18 dynamic
   * @since 23 static
   */
  function isTokenizerSupported(tokenizer: Tokenizer): boolean;

  /**
   * 获取用于插入数据的SQL语句，此为同步接口。
   *
   * @param { string } table - 要写入数据的数据库表名，不能为空字符串。
   * @param { ValuesBucket } values - 要写入数据库中数据的字段信息以及对应的值信息。
   * @param { ConflictResolution } conflict - 指定冲突解决模式。默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。
   * @returns { SqlInfo } SqlInfo对象，其中sql为返回的SQL语句，args为执行SQL中的参数信息。
   * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20 dynamic
   * @since 23 static
   */
  function getInsertSqlInfo(table: string, values: ValuesBucket, conflict?: ConflictResolution):SqlInfo;

  /**
   * 获取用于更新数据的SQL语句，此为同步接口。
   *
   * @param { RdbPredicates } predicates - 与指定字段匹配的谓词。
   * @param { ValuesBucket } values - 要写入数据库中数据的字段信息以及对应的值信息。
   * @param { ConflictResolution } conflict - 指定冲突解决模式。 默认值是relationalStore.ConflictResolution.ON_CONFLICT_NONE。
   * @returns { SqlInfo } SqlInfo对象，其中sql为返回的SQL语句，args为执行SQL中的参数信息。
   * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20 dynamic
   * @since 23 static
   */
  function getUpdateSqlInfo(predicates: RdbPredicates, values: ValuesBucket, conflict?: ConflictResolution):SqlInfo;

  /**
   * 获取用于删除数据的SQL语句，此为同步接口。
   *
   * @param { RdbPredicates } predicates - 与指定字段匹配的谓词。
   * @returns { SqlInfo } SqlInfo对象，其中sql为返回的SQL语句，args为执行SQL中的参数信息。
   * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20 dynamic
   * @since 23 static
   */
  function getDeleteSqlInfo(predicates: RdbPredicates):SqlInfo;

  /**
   * 获取用于查询数据的SQL语句，此为同步接口。
   *
   * @param { RdbPredicates } predicates - 与指定字段匹配的谓词。
   * @param { Array<string> } columns - 要查询的列；如果不指定此参数，则查询所有列。
   * @returns { SqlInfo } SqlInfo对象，其中sql为返回的SQL语句，args为执行SQL中的参数信息。
   * @throws { BusinessError } 14800001 - Invalid arguments. Possible causes: 1. Parameter is out of valid range.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @crossplatform
   * @since 20 dynamic
   * @since 23 static
   */
  function getQuerySqlInfo(predicates: RdbPredicates, columns?: Array<string>):SqlInfo;
}

export default relationalStore;