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
 * **DataShareExtensionAbility**基于ExtensionAbility框架，提供支持数据共享业务的能力。
 *
 * @file 数据共享扩展能力
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
 * @param { Want } want - Want类型信息，包括Ability名称、Bundle名称等。
 * @param { AsyncCallback<void> } callback - 回调函数。无返回值。
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type OnCreateFn = (want: Want, callback: AsyncCallback<void>) => void;

/**
 * 插入操作的属性类型。
 *
 * @param { string } uri - 指示要插入的数据的路径。
 * @param { ValuesBucket } valueBucket - 指示要插入的数据。
 * @param { AsyncCallback<int> } callback - 回调函数。返回插入数据记录的索引。
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type InsertFn = (uri: string, valueBucket: ValuesBucket, callback: AsyncCallback<int>) => void;

/**
 * 更新操作的属性类型。
 *
 * @param { string } uri - 指示要更新的数据的路径。
 * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件。
 * @param { ValuesBucket } valueBucket - 指示要更新的数据。
 * @param { AsyncCallback<int> } callback - 回调函数。返回更新的数据记录数。
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
 * @param { Record<string, Array<UpdateOperation>> } operations - 表示入参为Record<string, Array<UpdateOperation>>和
 * AsyncCallback<Record<string, Array<int>>>的函数类型。
 * @param { AsyncCallback<Record<string, Array<int>>> } callback - 回调函数。返回更新的数据记录数集合，更新失败的UpdateOperation的数据记录数为-1。
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
 * @param { string } uri - 指示要删除的数据的路径。
 * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件。
 * @param { AsyncCallback<int> } callback - 回调函数。返回已删除的数据记录数。
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
 * @param { string } uri - 指示要查询的数据的路径。
 * @param { dataSharePredicates.DataSharePredicates } predicates - 指示筛选条件。
 * @param { Array<string> } columns - 指示要查询的列。如果此参数为空，则查询所有列。
 * @param { AsyncCallback<Object> } callback - 回调函数。返回查询到的结果集。
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
 * @param { string } uri - 指示要批量插入的数据的路径。
 * @param { Array<ValuesBucket> } valueBuckets - 指示要批量插入的数据。
 * @param { AsyncCallback<int> } callback - 回调函数。返回插入的数据记录数。
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type BatchInsertFn = (uri: string, valueBuckets: Array<ValuesBucket>, callback: AsyncCallback<int>) => void;

/**
 * 用户给定的URI转换为服务端使用的URI操作的属性类型。
 *
 * @param { string } uri - 指示用户传入的[URI](docroot://reference/apis-arkts/js-apis-uri.md#uri)。
 * @param { AsyncCallback<string> } callback - 回调函数。如果支持URI规范化，则返回规范化URI，否则返回空。
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type NormalizeUriFn = (uri: string, callback: AsyncCallback<string>) => void;

/**
 * 服务端使用的URI转换为用户传入的初始URI操作的属性类型。
 *
 * @param { string } uri - 指示服务端使用的[URI](docroot://reference/apis-arkts/js-apis-uri.md#uri)。
 * @param { AsyncCallback<string> } callback - 回调函数。如果反规范化成功，则返回反规范化的URI；如果无需进行反规范化，则返回原始URI；若不支持则返回空。
 * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
 * @systemapi
 * @stagemodelonly
 * @since 23 static
 */
type DenormalizeUriFn = (uri: string, callback: AsyncCallback<string>) => void;

/**
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
   * 初始化业务逻辑配置，默认为空（未定义），函数被定义后在DataShare客户端连接DataShareExtensionAbility服务端时，服务端回调触发。
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
   * 插入操作配置，默认为空（未定义），在数据库插入时，服务端回调触发。
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
   * 更新操作配置，默认为空（未定义），在数据库更新时，服务端回调触发。
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
   * 批量更新操作配置，在数据库批量更新时，服务端回调触发。
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
   * 删除操作配置，默认为空（未定义），在删除数据库记录时，服务端回调触发。
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
   * 查询操作配置，默认为空（未定义），在查询数据库时，服务端回调触发。
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
   * 批量插入操作配置，默认为空（未定义），在数据库批量插入时，服务端回调触发。
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
   * 用户给定的URI转换为服务端使用的URI时，服务端回调触发。
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
   * 服务端使用的URI转换为用户传入的初始URI时，服务端回调触发。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Provider
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  denormalizeUri?: DenormalizeUriFn;
}

export default DataShareExtensionAbility;