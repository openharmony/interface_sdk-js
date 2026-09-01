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
import { ResultSet as _ResultSet } from './data/rdb/resultSet';
import Context from './application/BaseContext';

/**
 * 关系型数据库（Relational Database，RDB）是一种基于关系模型来管理数据的数据库。关系型数据库基于SQLite组件提供了一套完整的对本地数据库进行管理的机制，对外提供了一系列的增、删、改、查等接口，也可以直接运行用户
 * 输入的SQL语句来满足复杂的场景需要。不支持Worker线程。
 * 
 * 该模块提供以下关系型数据库相关的常用功能：
 * 
 * - [RdbPredicates]{@link rdb.RdbPredicates}：数据库中用来代表数据实体的性质、特征或者数据实体之间关系的词项，主要用来定义数据库的操作条件。
 * - [RdbStore]{@link rdb.RdbStore}：提供管理关系数据库（RDB）方法的接口。
 * 
 * > **说明：**
 * >
 * > - 从API version 9开始，该接口不再维护，推荐使用新接口[@ohos.data.relationalStore]{@link @ohos.data.relationalStore:relationalStore}。
 *
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 7 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.data.relationalStore:relationalStore
 */
declare namespace rdb {
  /**
   * 获得一个相关的RdbStore，操作关系型数据库，用户可以根据自己的需求配置RdbStore的参数，然后通过RdbStore调用相关接口可以执行相关的数据操作，使用callback异步回调。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./app/context}。
   * @param { StoreConfig } config - 与此RDB存储相关的数据库配置。
   * @param { number } version - 数据库版本。
   *     <br>目前暂不支持通过version自动识别数据库升级降级操作，只能由开发者自行维护。
   * @param { AsyncCallback<RdbStore> } callback - 回调函数。当操作成功，err为undefined，data为RdbStore对象；否则为错误对象。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.data.relationalStore:relationalStore.getRdbStore
   */
  function getRdbStore(context: Context, config: StoreConfig, version: number, callback: AsyncCallback<RdbStore>): void;

  /**
   * 获得一个相关的RdbStore，操作关系型数据库，用户可以根据自己的需求配置RdbStore的参数，然后通过RdbStore调用相关接口可以执行相关的数据操作，使用Promise异步回调。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./app/context}。
   * @param { StoreConfig } config - 与此RDB存储相关的数据库配置。
   * @param { number } version - 数据库版本。
   *     <br>目前暂不支持通过version自动识别数据库升级降级操作，只能由开发者自行维护。
   * @returns { Promise<RdbStore> } Promise对象。返回RdbStore对象。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  function getRdbStore(context: Context, config: StoreConfig, version: number): Promise<RdbStore>;

  /**
   * 删除数据库，使用callback异步回调。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./app/context}。
   * @param { string } name - 数据库名称，不能为空字符串且不能包含路径分隔符/。
   * @param { AsyncCallback<void> } callback - 回调函数。当操作成功，err为undefined；否则为错误对象。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.data.relationalStore:relationalStore.deleteRdbStore
   */
  function deleteRdbStore(context: Context, name: string, callback: AsyncCallback<void>): void;
  /**
   * 使用指定的数据库文件配置删除数据库，使用Promise异步回调。
   *
   * @param { Context } context - 应用的上下文。
   *     <br>FA模型的应用Context定义见[Context]{@link ./app/context}。
   *     <br>Stage模型的应用Context定义见[Context]{@link ./app/context}。
   * @param { string } name - 数据库名称，不能为空字符串且不能包含路径分隔符/。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.data.relationalStore:relationalStore.deleteRdbStore
   */
  function deleteRdbStore(context: Context, name: string): Promise<void>;

  /**
   * 指数据库同步模式。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.data.relationalStore:relationalStore.SyncMode
   */
  enum SyncMode {
    /**
     * 表示数据从本地设备推送到远程设备。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.SyncMode.SYNC_MODE_PUSH
     */
    SYNC_MODE_PUSH = 0,

    /**
     * 表示数据从远程设备拉至本地设备。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.SyncMode.SYNC_MODE_PULL
     */
    SYNC_MODE_PULL = 1
  }

  /**
   * 描述订阅类型。
   *
   * @permission ohos.permission.DISTRIBUTED_DATASYNC
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.data.relationalStore:relationalStore.SubscribeType
   */
  enum SubscribeType {
    /**
     * 订阅远程数据更改。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.SubscribeType.SUBSCRIBE_TYPE_REMOTE
     */
    SUBSCRIBE_TYPE_REMOTE = 0
  }

  /**
   * 提供管理关系数据库（RDB）方法的接口。
   * 
   * 在使用以下相关接口前，请使用
   * [executeSql]{@link rdb.RdbStore.executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>)}
   * 接口初始化数据库表结构和相关数据。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore
   */
  interface RdbStore {
    /**
     * 向目标表中插入一行数据，使用callback异步回调。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { ValuesBucket } values - 表示要插入到表中的数据行。
     * @param { AsyncCallback<number> } callback - 回调函数。当操作成功，err为undefined，data为行ID；否则为错误对象。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.insert
     */
    insert(table: string, values: ValuesBucket, callback: AsyncCallback<number>): void;

    /**
     * 向目标表中插入一行数据，使用Promise异步回调。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { ValuesBucket } values - 表示要插入到表中的数据行。
     * @returns { Promise<number> } Promise对象。如果操作成功，返回行ID；否则返回-1。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.insert
     */
    insert(table: string, values: ValuesBucket): Promise<number>;

    /**
     * 向目标表中插入一组数据，使用callback异步回调。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。
     * @param { AsyncCallback<number> } callback - 回调函数。当操作成功，err为undefined，data为插入的数据个数；否则为错误对象。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.batchInsert
     */
    batchInsert(table: string, values: Array<ValuesBucket>, callback: AsyncCallback<number>): void;

    /**
     * 向目标表中插入一组数据，使用Promise异步回调。
     *
     * @param { string } table - 指定的目标表名，不能为空字符串。
     * @param { Array<ValuesBucket> } values - 表示要插入到表中的一组数据。
     * @returns { Promise<number> } Promise对象。如果操作成功，返回插入的数据个数，否则返回-1。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.batchInsert
     */
    batchInsert(table: string, values: Array<ValuesBucket>): Promise<number>;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据，使用callback异步回调。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @param { AsyncCallback<number> } callback - 回调函数。当操作成功，err为undefined，data为受影响的行数；否则为错误对象。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.update
     */
    update(values: ValuesBucket, predicates: RdbPredicates, callback: AsyncCallback<number>): void;

    /**
     * 根据RdbPredicates的指定实例对象更新数据库中的数据，使用Promise异步回调。
     *
     * @param { ValuesBucket } values - values指示数据库中要更新的数据行。键值对与数据库表的列名相关联。
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的更新条件。
     * @returns { Promise<number> } 指定的Promise回调方法。返回受影响的行数。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.update
     */
    update(values: ValuesBucket, predicates: RdbPredicates): Promise<number>;

    /**
     * 根据RdbPredicates的指定实例对象从数据库中删除数据，使用callback异步回调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的删除条件。
     * @param { AsyncCallback<number> } callback - 回调函数。当操作成功，err为undefined，data为受影响的行数；否则为错误对象。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.delete
     */
    delete(predicates: RdbPredicates, callback: AsyncCallback<number>): void;

    /**
     * 根据RdbPredicates的指定实例对象从数据库中删除数据，使用Promise异步回调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的删除条件。
     * @returns { Promise<number> } Promise对象。返回受影响的行数。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.delete
     */
    delete(predicates: RdbPredicates): Promise<number>;

    /**
     * 根据指定条件查询数据库中的数据，使用callback异步回调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } columns - 表示要查询的列。如果值为空，则查询应用于所有列。
     * @param { AsyncCallback<ResultSet> } callback - 回调函数。当操作成功，err为undefined，data为ResultSet对象；否则为错误对象。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.query
     */
    query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;

    /**
     * 根据指定条件查询数据库中的数据，使用Promise异步回调。
     *
     * @param { RdbPredicates } predicates - RdbPredicates的实例对象指定的查询条件。
     * @param { Array<string> } columns - 表示要查询的列。如果值为空，则查询应用于所有列。
     * @returns { Promise<ResultSet> } Promise对象。如果操作成功，则返回ResultSet对象。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.query
     */
    query(predicates: RdbPredicates, columns?: Array<string>): Promise<ResultSet>;

    /**
     * 根据指定SQL语句查询数据库中的数据，使用callback异步回调。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } bindArgs - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数需为空数组。
     * @param { AsyncCallback<ResultSet> } callback - 回调函数。当操作成功，err为undefined，data为ResultSet对象；否则为错误对象。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.querySql
     */
    querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>): void;

    /**
     * 根据指定SQL语句查询数据库中的数据，使用Promise异步回调。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } bindArgs - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。
     * @returns { Promise<ResultSet> } Promise对象。如果操作成功，则返回ResultSet对象。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.querySql
     */
    querySql(sql: string, bindArgs?: Array<ValueType>): Promise<ResultSet>;

    /**
     * 执行包含指定参数但不返回值的SQL语句，使用callback异步回调。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } bindArgs - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数需为空数组。
     * @param { AsyncCallback<void> } callback - 回调函数。当操作成功，err为undefined；否则为错误对象。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.executeSql
     */
    executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>): void;

    /**
     * 执行包含指定参数但不返回值的SQL语句，使用Promise异步回调。
     *
     * @param { string } sql - 指定要执行的SQL语句，不能为空字符串。
     * @param { Array<ValueType> } bindArgs - SQL语句中参数的值。该值与sql参数语句中的占位符相对应。当sql参数语句完整时，该参数不填。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.executeSql
     */
    executeSql(sql: string, bindArgs?: Array<ValueType>): Promise<void>;

    /**
     * 在开始执行SQL语句之前，开始事务。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.beginTransaction
     */
    beginTransaction(): void;

    /**
     * 提交已执行的SQL语句。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.commit
     */
    commit(): void;

    /**
     * 回滚已经执行的SQL语句。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.rollBack
     */
    rollBack(): void;

    /**
     * 设置分布式列表，使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Array<string> } tables - 要设置的分布式列表表名。
     * @param { AsyncCallback<void> } callback - 回调函数。当操作成功，err为undefined；否则为错误对象。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.setDistributedTables
     */
    setDistributedTables(tables: Array<string>, callback: AsyncCallback<void>): void;

    /**
     * 设置分布式列表，使用Promise异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { Array<string> } tables - 要设置的分布式列表表名。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.setDistributedTables
     */
    setDistributedTables(tables: Array<string>): Promise<void>;

    /**
     * 根据远程设备的本地表名获取指定远程设备的分布式表名。在查询远程设备数据库时，需要使用分布式表名，使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 其中device通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } device - 远程设备ID 。
     * @param { string } table - 远程设备的本地表名。
     * @param { AsyncCallback<string> } callback - 回调函数。当操作成功，err为undefined，data为远程设备的分布式表名；否则为错误对象。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.obtainDistributedTableName
     */
    obtainDistributedTableName(device: string, table: string, callback: AsyncCallback<string>): void;

    /**
     * 根据远程设备的本地表名获取指定远程设备的分布式表名。在查询远程设备数据库时，需要使用分布式表名，使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 其中device通过调用<!--RP1-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP1End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { string } device - 远程设备ID。
     * @param { string } table - 远程设备的本地表名。
     * @returns { Promise<string> } Promise对象。如果操作成功，返回远程设备的分布式表名。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.obtainDistributedTableName
     */
    obtainDistributedTableName(device: string, table: string): Promise<string>;

    /**
     * 在设备之间同步数据，使用callback异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { SyncMode } mode - 指同步模式。该值可以是推、拉。
     * @param { RdbPredicates } predicates - 约束同步数据和设备。
     * @param { AsyncCallback<Array<[string, number]>> } callback - 回调函数。当操作成功，err为undefined，data为同步结果，其中string为设备ID，
     *     number为每个设备同步状态，0表示成功，其他值表示失败；否则为错误对象。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.sync
     */
    sync(mode: SyncMode, predicates: RdbPredicates, callback: AsyncCallback<Array<[string, number]>>): void;

    /**
     * 在设备之间同步数据，使用Promise异步回调。
     *
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     * @param { SyncMode } mode - 指同步模式。该值可以是推、拉。
     * @param { RdbPredicates } predicates - 约束同步数据和设备。
     * @returns { Promise<Array<[string, number]>> } Promise对象，用于向调用者发送同步结果。string：设备ID；number：每个设备同步状态，0表示成功，其他值表示失败。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.sync
     */
    sync(mode: SyncMode, predicates: RdbPredicates): Promise<Array<[string, number]>>;

    /**
     * 注册数据库的观察者。当分布式数据库中的数据发生更改时，将调用回调。
     *
     * @param { 'dataChange' } event - 取值为'dataChange'，表示数据更改。
     * @param { SubscribeType } type - 订阅类型。
     * @param { Callback<Array<string>> } observer - 指分布式数据库中数据更改事件的观察者。Array<string>为数据库中的数据发生改变的对端设备ID。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.on
     */
    on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;

    /**
     * 从数据库中删除指定类型的指定观察者，使用callback异步回调。
     *
     * @param { 'dataChange' } event - 取值为'dataChange'，表示数据更改。
     * @param { SubscribeType } type - 订阅类型。
     * @param { Callback<Array<string>> } observer - 指已注册的数据更改观察者。Array<string>为数据库中的数据发生改变的对端设备ID。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbStore.off
     */
    off(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;
  }

  /**
   * 用于表示允许的数据字段类型。
   *
   * @unionmember { number } 表示值类型为数字。
   * @unionmember { string } 表示值类型为字符串。
   * @unionmember { boolean } 表示值类型为布尔值。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.data.relationalStore:relationalStore.ValueType
   */
  type ValueType = number | string | boolean;

  /**
   * 用于存储键值对的类型。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.data.relationalStore:relationalStore.ValuesBucket
   */
  type ValuesBucket = { [key: string]: ValueType | Uint8Array | null };

  /**
   * 管理关系数据库配置。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.data.relationalStore:relationalStore.StoreConfig
   */
  interface StoreConfig {
    /**
     * 数据库文件名，不能为空字符串且不能包含路径分隔符/。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.StoreConfig.name
     */
    name: string;
  }

  /**
   * 表示关系型数据库（RDB）的谓词。该类确定RDB中条件表达式的值是true还是false。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates
   */
  class RdbPredicates {
    /**
     * 构造函数。
     *
     * @param { string } name - 数据库表名，不能为空字符串。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates
     */
    constructor(name: string);

    /**
     * 同步分布式数据库时连接到组网内指定的远程设备。
     * 
     * > **说明：**
     * >
     * > 其中devices通过调用<!--RP2-->
     * > [deviceManager.getTrustedDeviceListSync]{@link @ohos.distributedHardware.deviceManager:deviceManager.DeviceManager.getTrustedDeviceListSync()}
     * > 方法得到。<!--RP2End-->deviceManager模块的接口均为系统接口，仅系统应用可用。
     *
     * @param { Array<string> } devices - 指定的组网内的远程设备ID，不能为空字符串。
     * @returns { RdbPredicates } 返回配置了指定远程设备同步条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.inDevices
     */
    inDevices(devices: Array<string>): RdbPredicates;

    /**
     * 同步分布式数据库时连接到组网内所有的远程设备。
     *
     * @returns { RdbPredicates } 返回配置了所有远程设备同步条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.inAllDevices
     */
    inAllDevices(): RdbPredicates;

    /**
     * 配置谓词以匹配数据字段为ValueType且值等于指定值的字段。该方法等同于SQL语句中的"="。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值。
     * @returns { RdbPredicates } 返回配置了等于指定值条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.equalTo
     */
    equalTo(field: string, value: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配数据字段为ValueType且值不等于指定值的字段。该方法等同于SQL语句中的"!="。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值。
     * @returns { RdbPredicates } 返回配置了不等于指定值条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.notEqualTo
     */
    notEqualTo(field: string, value: ValueType): RdbPredicates;

    /**
     * 向谓词添加左括号。
     *
     * @returns { RdbPredicates } 返回带有左括号的Rdb谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.beginWrap
     */
    beginWrap(): RdbPredicates;

    /**
     * 向谓词添加右括号。
     *
     * @returns { RdbPredicates } 返回带有右括号的Rdb谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.endWrap
     */
    endWrap(): RdbPredicates;

    /**
     * 将或条件添加到谓词中。
     *
     * @returns { RdbPredicates } 返回带有或条件的Rdb谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.or
     */
    or(): RdbPredicates;

    /**
     * 向谓词添加和条件。
     *
     * @returns { RdbPredicates } 返回带有和条件的Rdb谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.and
     */
    and(): RdbPredicates;

    /**
     * 配置谓词以匹配数据字段为string且value包含指定值的字段。该方法等同于SQL语句中的"LIKE '%xxx%'"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回配置了包含指定值条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.contains
     */
    contains(field: string, value: string): RdbPredicates;

    /**
     * 配置谓词以匹配数据字段为string且值以指定字符串开头的字段。该方法等同于SQL语句中的"LIKE 'xxx%'"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回配置了以指定字符串开头条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.beginsWith
     */
    beginsWith(field: string, value: string): RdbPredicates;

    /**
     * 配置谓词以匹配数据字段为string且值以指定字符串结尾的字段。该方法等同于SQL语句中的"LIKE '%xxx'"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回配置了以指定字符串结尾条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.endsWith
     */
    endsWith(field: string, value: string): RdbPredicates;

    /**
     * 配置谓词以匹配值为null的字段。该方法等同于SQL语句中的"IS NULL"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @returns { RdbPredicates } 返回配置了值为null条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.isNull
     */
    isNull(field: string): RdbPredicates;

    /**
     * 配置谓词以匹配值不为null的指定字段。该方法等同于SQL语句中的"IS NOT NULL"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @returns { RdbPredicates } 返回配置了值不为null条件的谓词。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2
     *     . Incorrect parameter types.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.isNotNull
     */
    isNotNull(field: string): RdbPredicates;

    /**
     * 配置谓词以匹配数据字段为string且值类似于指定字符串的字段。该方法等同于SQL语句中的"LIKE"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值，长度不超过1024字节。
     * @returns { RdbPredicates } 返回配置了类似指定字符串条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.like
     */
    like(field: string, value: string): RdbPredicates;

    /**
     * 配置RdbPredicates匹配数据字段为string且值符合指定通配符模式的字段，其中*匹配任意多个字符，?匹配单个字符。该方法等同于SQL语句中的"GLOB"
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值，长度不超过1024字节
     *     <br>支持通配符，*表示0个、1个或多个数字或字符，?表示1个数字或字符。
     * @returns { RdbPredicates } 返回配置了匹配指定通配符模式条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.glob
     */
    glob(field: string, value: string): RdbPredicates;

    /**
     * 将谓词配置为匹配数据字段为ValueType且value在给定范围内的指定字段。该方法等同于SQL语句中的"BETWEEN"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } low - 指示与谓词匹配的最小值。
     * @param { ValueType } high - 指示要与谓词匹配的最大值。
     * @returns { RdbPredicates } 返回配置了在给定范围内条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.between
     */
    between(field: string, low: ValueType, high: ValueType): RdbPredicates;

    /**
     * 配置RdbPredicates以匹配数据字段为ValueType且value超出给定范围的指定字段。该方法等同于SQL语句中的"NOT BETWEEN"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } low - 指示与谓词匹配的最小值。
     * @param { ValueType } high - 指示要与谓词匹配的最大值。
     * @returns { RdbPredicates } 返回配置了超出给定范围条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.notBetween
     */
    notBetween(field: string, low: ValueType, high: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配数据字段为ValueType且值大于指定值的字段。该方法等同于SQL语句中的">"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值。
     * @returns { RdbPredicates } 返回配置了大于指定值条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.greaterThan
     */
    greaterThan(field: string, value: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配数据字段为valueType且value小于指定值的字段。该方法等同于SQL语句中的"<"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值。
     * @returns { RdbPredicates } 返回配置了小于指定值条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.lessThan
     */
    lessThan(field: string, value: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配数据字段为ValueType且value大于或等于指定值的字段。该方法等同于SQL语句中的">="。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值。
     * @returns { RdbPredicates } 返回配置了大于或等于指定值条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.greaterThanOrEqualTo
     */
    greaterThanOrEqualTo(field: string, value: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配数据字段为ValueType且value小于或等于指定值的字段。该方法等同于SQL语句中的"<="。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值。
     * @returns { RdbPredicates } 返回配置了小于或等于指定值条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.lessThanOrEqualTo
     */
    lessThanOrEqualTo(field: string, value: ValueType): RdbPredicates;

    /**
     * 配置谓词以匹配其值按升序排序的列。该方法等同于SQL语句中的"ORDER BY"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @returns { RdbPredicates } 返回配置了按升序排序条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.orderByAsc
     */
    orderByAsc(field: string): RdbPredicates;

    /**
     * 配置谓词以匹配其值按降序排序的列。该方法等同于SQL语句中的"ORDER BY"。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @returns { RdbPredicates } 返回配置了按降序排序条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.orderByDesc
     */
    orderByDesc(field: string): RdbPredicates;

    /**
     * 配置谓词以过滤重复记录并仅保留其中一个。该方法等同于SQL语句中的"DISTINCT"。
     *
     * @returns { RdbPredicates } 返回可用于过滤重复记录的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.distinct
     */
    distinct(): RdbPredicates;

    /**
     * 设置最大数据记录数的谓词。该方法等同于SQL语句中的"LIMIT"。
     *
     * @param { number } value - 最大数据记录数。
     * @returns { RdbPredicates } 返回可用于设置最大数据记录数的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.limitAs
     */
    limitAs(value: number): RdbPredicates;

    /**
     * 配置RdbPredicates以指定返回结果的起始位置。需要同步调用limitAs接口指定查询数量，否则将无查询结果。如需查询指定偏移位置后的所有行，limitAs接口调用需传参数-1。该方法等同于SQL语句中的"OFFSET
     * "。
     *
     * @param { number } rowOffset - 返回结果的起始位置，取值为正整数。
     * @returns { RdbPredicates } 返回具有指定返回结果起始位置的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.offsetAs
     */
    offsetAs(rowOffset: number): RdbPredicates;

    /**
     * 配置RdbPredicates按指定列分组查询结果。该方法等同于SQL语句中的"GROUP BY"。
     *
     * @param { Array<string> } fields - 指定分组依赖的列名，不能为空字符串。
     * @returns { RdbPredicates } 返回分组查询列的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.groupBy
     */
    groupBy(fields: Array<string>): RdbPredicates;

    /**
     * 配置RdbPredicates以指定索引列。该方法等同于SQL语句中的"INDEXED BY"。
     *
     * @param { string } field - 索引列的名称，不能为空字符串。
     * @returns { RdbPredicates } 返回具有指定索引列的RdbPredicates。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.indexedBy
     */
    indexedBy(field: string): RdbPredicates;

    /**
     * 配置RdbPredicates以匹配数据字段为ValueType数组且值在给定范围内的指定字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { Array<ValueType> } value - 以ValueType型数组形式指定的要匹配的值。
     * @returns { RdbPredicates } 返回配置了值在给定范围内条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.in
     */
    in(field: string, value: Array<ValueType>): RdbPredicates;

    /**
     * 将RdbPredicates配置为匹配数据字段为ValueType且值超出给定范围的指定字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { Array<ValueType> } value - 以ValueType数组形式指定的要匹配的值。
     * @returns { RdbPredicates } 返回配置了值超出给定范围内条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead @ohos.data.relationalStore:relationalStore.RdbPredicates.notIn
     */
    notIn(field: string, value: Array<ValueType>): RdbPredicates;
  }

  /**
   * 配置RdbPredicates以匹配数据字段为ValueType且value超出给定范围的指定字段。该方法等同于SQL语句中的"NOT BETWEEN"。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   */
  export type ResultSet = _ResultSet;
}

/**
 * 提供管理关系数据库（RDB）方法的接口。
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 7 dynamiconly
 * @deprecated since 9
 */
export default rdb;
