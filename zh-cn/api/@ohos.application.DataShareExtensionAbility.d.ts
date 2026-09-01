/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

/**
 * DataShareExtensionAbility基于ExtensionAbility框架，提供支持数据共享业务的能力。
 *
 * @file
 * @kit ArkData
 */

import { AsyncCallback } from './@ohos.base';
import ExtensionContext from './application/ExtensionContext';
import Want from './@ohos.app.ability.Want';
import dataSharePredicates from './@ohos.data.dataSharePredicates';
import { ValuesBucket } from './@ohos.data.ValuesBucket';
import dataShare from './@ohos.data.dataShare';

/**
 * 批量更新操作的参数结构。
 *
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 12 dynamic
 * @since 23 static
 */
export type UpdateOperation = dataShare.UpdateOperation;

/**
 * 业务逻辑初始化操作的属性类型。
 *
 * @param { Want } want - Indicates connection information about the datashare extension ability.
 * @param { AsyncCallback<void> } callback - callback function, no return value.
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type OnCreateFn = (want: Want, callback: AsyncCallback<void>) => void;

/**
 * 插入操作的属性类型。
 *
 * @param { string } uri - Indicates the position where the data is to insert.
 * @param { ValuesBucket } valueBucket - Indicates the data to insert.
 * @param { AsyncCallback<int> } callback - Returns the index of the newly inserted data record.
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type InsertFn = (uri: string, valueBucket: ValuesBucket, callback: AsyncCallback<int>) => void;

/**
 * 更新操作的属性类型。
 *
 * @param { string } uri - Indicates the database table storing the data to update.
 * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria. If this parameter is
 *     null, all data records will be updated by default.
 * @param { ValuesBucket } valueBucket - Indicates the data to update. This parameter can be null.
 * @param { AsyncCallback<int> } callback - Returns the number of data records updated.
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type UpdateFn = (
  uri: string,
  predicates: dataSharePredicates.DataSharePredicates,
  valueBucket: ValuesBucket,
  callback: AsyncCallback<int>
) => void;

/**
 * 批量更新操作的属性类型。
 *
 * @param { Record<string, Array<UpdateOperation>> } operations - Indicates the data to update.
 * @param { AsyncCallback<Record<string, Array<int>>> } callback - Callback used to return the result.
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type BatchUpdateFn = (
  operations: Record<string, Array<UpdateOperation>>,
  callback: AsyncCallback<Record<string, Array<int>>>
) => void;

/**
 * 删除操作的属性类型。
 *
 * @param { string } uri - Indicates the database table storing the data to delete.
 * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria. If this parameter is
 *     null, all data records will be deleted by default.
 * @param { AsyncCallback<int> } callback - Returns the number of data records deleted.
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type DeleteFn = (
  uri: string,
  predicates: dataSharePredicates.DataSharePredicates,
  callback: AsyncCallback<int>
) => void;

/**
 * 查询操作的属性类型。
 *
 * @param { string } uri - Indicates the database table storing the data to query.
 * @param { dataSharePredicates.DataSharePredicates } predicates - Indicates filter criteria. If this parameter is
 *     null, all data records will be queried by default.
 * @param { Array<string> } columns - Indicates the columns to be queried, in array, for example, {"name","age"}.
 *     You should define the processing logic when this parameter is null.
 * @param { AsyncCallback<Object> } callback - Returns the queried data, only support result set of rdb or kvstore.
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type QueryFn = (
  uri: string,
  predicates: dataSharePredicates.DataSharePredicates,
  columns: Array<string>,
  callback: AsyncCallback<Object>
) => void;

/**
 * 批量插入操作的属性类型。
 *
 * @param { string } uri - Indicates the position where the data is to insert.
 * @param { Array<ValuesBucket> } valueBuckets - Indicates the data to insert.
 * @param { AsyncCallback<int> } callback - Returns the number of data records inserted.
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type BatchInsertFn = (uri: string, valueBuckets: Array<ValuesBucket>, callback: AsyncCallback<int>) => void;

/**
 * 用户给定的URI转换为服务端使用的URI操作的属性类型。
 *
 * @param { string } uri - Indicates the uri to normalize.
 * @param { AsyncCallback<string> } callback - Returns the normalized uri if the data share supports URI normalization.
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type NormalizeUriFn = (uri: string, callback: AsyncCallback<string>) => void;

/**
 * 服务端使用的URI转换为用户传入的初始URI操作的属性类型。
 *
 * @param { string } uri - Indicates the uri to denormalize.
 * @param { AsyncCallback<string> } callback - Returns the denormalized {@code uri} object if the denormalization is
 *     successful; returns the original {@code uri} passed to this method if
 *     there is nothing to do; returns {@code null} if the data identified by
 *     the original {@code uri} cannot be found in the current environment.
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type DenormalizeUriFn = (uri: string, callback: AsyncCallback<string>) => void;

/**
 * 本模块提供数据共享和扩展功能。
 *
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
declare class DataShareExtensionAbility {
  /**
   * 表示数据共享扩展能力上下文。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 10 dynamic
   * @since 23 static
   */
  context: ExtensionContext;

  /**
   * DataShare客户端连接DataShareExtensionAbility服务端时，服务端回调此接口，执行初始化业务逻辑操作。该方法可以选择性重写。
   *
   * @param { Want } want - Want类型信息，包括Ability名称、Bundle名称等。
   * @param { AsyncCallback<void> } callback - 回调函数。无返回值。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   */
  onCreate?(want: Want, callback: AsyncCallback<void>): void;

  /**
   * 当datashare extension ability启动初始化时会被调用
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  onCreate?: OnCreateFn;

  /**
   * 在数据库插入时回调此接口，该方法可以选择性重写。
   *
   * @param { string } uri - 指示要插入的数据的路径。
   * @param { ValuesBucket } valueBucket - 指示要插入的数据。
   * @param { AsyncCallback<number> } callback - 回调函数。返回插入数据记录的索引。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   */
  insert?(uri: string, valueBucket: ValuesBucket, callback: AsyncCallback<number>): void;

  /**
   * 插入数据到数据库中，该方法可被datashare数据提供方重写
   *
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  insert?: InsertFn;

  /**
   * 在数据库更新时服务端回调此接口，该方法可以选择性重写。
   *
   * @param { string } uri - 指示要更新的数据的路径。
   * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件。
   * @param { ValuesBucket } valueBucket - 指示要更新的数据。
   * @param { AsyncCallback<number> } callback - 回调函数。返回更新的数据记录数。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   */
  update?(
    uri: string,
    predicates: dataSharePredicates.DataSharePredicates,
    valueBucket: ValuesBucket,
    callback: AsyncCallback<number>
  ): void;

  /**
   * 更新数据库中一个或多个数据，该方法可被datashare数据提供方重写
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  update?: UpdateFn;

  /**
   * 在数据库批量更新时服务端回调此接口，该方法可以选择性重写。
   *
   * @param { Record<string, Array<UpdateOperation>> } operations - 要更新数据的路径、筛选条件和数据集合。
   * @param { AsyncCallback<Record<string, Array<number>>> } callback - 回调函数。返回更新的数据记录数集合，更新失败的UpdateOperation的数据记录数为-1。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 12 dynamic
   */
  batchUpdate?(
    operations: Record<string, Array<UpdateOperation>>,
    callback: AsyncCallback<Record<string, Array<number>>>
  ): void;

  /**
   * 更新数据库中多个数据。该方法可被datashare数据提供方重写。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  batchUpdate?: BatchUpdateFn;

  /**
   * 在删除数据库记录时服务端回调此接口，该方法可以选择性重写。
   *
   * @param { string } uri - 指示要删除的数据的路径。
   * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件。
   * @param { AsyncCallback<number> } callback - 回调函数。返回已删除的数据记录数。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   */
  delete?(uri: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<number>): void;

  /**
   * 删除数据库中一个或多个数据，该方法可被datashare数据提供方重写
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  delete?: DeleteFn;

  /**
   * 在查询数据库时服务端回调此接口，该方法可以选择性重写。
   *
   * @param { string } uri - 指示要查询的数据的路径。
   * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件。
   * @param { Array<string> } columns - 指示要查询的列。如果此参数为空，则查询所有列。
   * @param { AsyncCallback<Object> } callback - 回调函数。返回查询到的结果集。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   */
  query?(
    uri: string,
    predicates: dataSharePredicates.DataSharePredicates,
    columns: Array<string>,
    callback: AsyncCallback<Object>
  ): void;

  /**
   * 查询数据库中一个或多个数据记录。该方法可被datashare数据提供方重写。只支持RDB和分布式KVDB的结果集。当前版本不支持自定义结果集。
   *
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  query?: QueryFn;

  /**
   * 在数据库批量插入时服务端回调此接口，该方法可以选择性重写。
   *
   * @param { string } uri - 指示要批量插入的数据的路径。
   * @param { Array<ValuesBucket> } valueBuckets - 指示要批量插入的数据。
   * @param { AsyncCallback<number> } callback - 回调函数。返回插入的数据记录数。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   */
  batchInsert?(uri: string, valueBuckets: Array<ValuesBucket>, callback: AsyncCallback<number>): void;

  /**
   * 插入多个数据到数据库中。该方法可被datashare数据提供方重写
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  batchInsert?: BatchInsertFn;

  /**
   * 用户给定的URI转换为服务端使用的URI时回调此接口，该方法可以选择性重写。
   *
   * @param { string } uri - 指示用户传入的[URI]{@link @ohos.uri:uri.URI}。
   * @param { AsyncCallback<string> } callback - 回调函数。如果支持URI规范化，则返回规范化URI，否则返回空。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   */
  normalizeUri?(uri: string, callback: AsyncCallback<string>): void;

  /**
   * 将给定的引用数据共享的 URI 转换为标准 URI。标准 URI 可以在设备之间使用，可以持久化、备份和恢复。即使上下文发生变化，它也可以引用数据共享中的同一项。
   *
   *
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  normalizeUri?: NormalizeUriFn;

  /**
   * 服务端使用的URI转换为用户传入的初始URI时服务端回调此接口，该方法可以选择性重写。
   *
   * @param { string } uri - 指示服务端使用的[URI]{@link @ohos.uri:uri.URI}。
   * @param { AsyncCallback<string> } callback - 回调函数。如果反规范化成功，则返回反规范化的URI；如果无需进行反规范化，则返回原始URI；若不支持则返回空。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 9 dynamic
   */
  denormalizeUri?(uri: string, callback: AsyncCallback<string>): void;

  /**
   * 将通过 normalizeUri(uri) 生成的给定标准化uri转换为非标准化uri。此方法的默认实现返回传递给它的原始 uri。
   *
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  denormalizeUri?: DenormalizeUriFn;
}

export default DataShareExtensionAbility;