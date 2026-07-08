/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit AbilityKit
 */

/*** if arkts dynamic */
import { AsyncCallback } from '../@ohos.base';
import { ResultSet } from '../data/rdb/resultSet';
import { DataAbilityOperation } from './dataAbilityOperation';
import { DataAbilityResult } from './dataAbilityResult';
import dataAbility from '../@ohos.data.dataAbility';
import rdb from '../@ohos.data.rdb';
/*** endif */

/**
 * 可以通过[acquireDataAbilityHelper]{@link ./../@ohos.ability.featureAbility:featureAbility.acquireDataAbilityHelper}接口获取
 * DataAbilityHelper对象。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @famodelonly
 * @since 7 dynamiconly
 */
export interface DataAbilityHelper {
  /**
   * 打开指定uri对应的文件，返回文件描述符。使用callback异步回调。
   *
   * @param { string } uri - 表示待打开文件的uri。
   * @param { string } mode - 表示文件打开模式，可以设置为‘r’表示只读访问，‘w’表示只写访问，‘rw’表示读写访问等。
   * @param { AsyncCallback<number> } callback - 回调函数，返回文件描述符。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  openFile(uri: string, mode: string, callback: AsyncCallback<number>): void;

  /**
   * 打开指定uri对应的文件，返回文件描述符。使用Promise异步回调。
   *
   * @param { string } uri - 表示待打开文件的uri
   * @param { string } mode - 表示文件打开模式，可以设置为‘r’表示只读访问，‘w’表示只写访问，‘rw’表示读写访问等。
   * @returns { Promise<number> } Promise对象，返回文件说明符。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  openFile(uri: string, mode: string): Promise<number>;

  /**
   * 注册观察者以监听uri指定数据的数据变化通知。使用callback异步回调。
   *
   * @param { 'dataChange' } type - 表示监听操作类型，'dataChange'表示数据变化操作。
   * @param { string } uri - 表示待监听数据变化的uri。
   * @param { AsyncCallback<void> } callback - 回调函数。当注册观察者以监听uri指定数据的数据变化通知成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void;

  /**
   * 注销观察者以停止监听uri指定数据的数据变化通知。使用callback异步回调。
   *
   * @param { 'dataChange' } type - 表示监听操作类型，'dataChange'表示数据变化操作。
   * @param { string } uri - 表示待取消监听数据变化的uri。
   * @param { AsyncCallback<void> } [callback] - 回调函数。当注销观察者以停止监听uri指定数据的数据变化通知成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void;

  /**
   * 获取给定uri指向数据的媒体资源类型。使用callback异步回调。
   *
   * @param { string } uri - 表示待获取数据的uri。
   * @param { AsyncCallback<string> } callback - 回调函数，返回与uri指向数据匹配的媒体资源类型。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  getType(uri: string, callback: AsyncCallback<string>): void;

  /**
   * 获取给定uri指向数据的媒体资源类型。使用Promise异步回调。
   *
   * @param { string } uri - 表示待获取数据的uri。
   * @returns { Promise<string> } Promise对象，返回与uri指向数据匹配的媒体资源类型。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  getType(uri: string): Promise<string>;

  /**
   * 获取支持的文件媒体资源类型。使用callback异步回调。
   *
   * @param { string } uri - 表示待获取文件的uri。
   * @param { string } mimeTypeFilter - 表示待获取文件的媒体资源类型。
   * @param { AsyncCallback<Array<string>> } callback - 回调函数，返回匹配的媒体资源类型数组。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  getFileTypes(uri: string, mimeTypeFilter: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取支持的文件媒体资源类型。使用Promise异步回调。
   *
   * @param { string } uri - 表示待获取文件的uri。
   * @param { string } mimeTypeFilter - 表示待获取文件的媒体资源类型。
   * @returns { Promise<Array<string>> } Promise对象，返回匹配的媒体资源类型数组。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  getFileTypes(uri: string, mimeTypeFilter: string): Promise<Array<string>>;

  /**
   * 将引用数据功能的给定uri转换为规范化uri。使用callback异步回调。
   *
   * @param { string } uri - 表示要规范化的uri对象。
   * @param { AsyncCallback<string> } callback - 回调函数，如果数据功能支持uri规范化，则返回规范化uri对象；否则返回null。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  normalizeUri(uri: string, callback: AsyncCallback<string>): void;

  /**
   * 将引用数据功能的给定uri转换为规范化uri。使用Promise异步回调。
   *
   * @param { string } uri - 表示要规范化的uri对象。
   * @returns { Promise<string> } Promise对象，如果数据功能支持uri规范化，则返回规范化uri对象；否则返回null。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  normalizeUri(uri: string): Promise<string>;

  /**
   * 将由normalizeUri（uri）生成的给定规范化uri转换为非规范化uri。使用callback异步回调。
   *
   * @param { string } uri - 表示要反规范化的uri对象。
   * @param { AsyncCallback<string> } callback - 	回调函数，返回反规范化uri对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  denormalizeUri(uri: string, callback: AsyncCallback<string>): void;

  /**
   * 将由normalizeUri（uri）生成的给定规范化uri转换为非规范化uri。使用Promise异步回调。
   *
   * @param { string } uri - 表示要规范化的uri对象。
   * @returns { Promise<string> } Promise对象，返回反规范化uri对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  denormalizeUri(uri: string): Promise<string>;

  /**
   * 通知注册的观察者，uri指定数据的数据变化。使用callback异步回调。
   *
   * @param { string } uri - 表示数据变化的uri。
   * @param { AsyncCallback<void> } callback - 回调函数。当通知注册的观察者成功，err为undefined，否则为错误对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  notifyChange(uri: string, callback: AsyncCallback<void>): void;

  /**
   * 通知注册的观察者，uri指定数据的数据变化。使用Promise异步回调。
   *
   * @param { string } uri - 表示数据变化的uri。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  notifyChange(uri: string): Promise<void>;

  /**
   * 将单个数据记录插入数据库。使用callback异步回调。
   *
   * @param { string } uri - 表示要插入数据的uri。
   * @param { rdb.ValuesBucket } valuesBucket - 表示要插入的数据记录。如果此参数为空，将插入一个空行。
   * @param { AsyncCallback<number> } callback - 回调函数，返回插入数据记录的索引。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  insert(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void;

  /**
   * 将单个数据记录插入数据库。使用Promise异步回调。
   *
   * @param { string } uri - 表示要插入数据的uri。
   * @param { rdb.ValuesBucket } valuesBucket - 表示要插入的数据记录。如果此参数为空，将插入一个空行。
   * @returns { Promise<number> } Promise对象，返回插入数据记录的索引。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  insert(uri: string, valuesBucket: rdb.ValuesBucket): Promise<number>;

  /**
   * 将多个数据记录插入数据库。使用callback异步回调。
   *
   * @param { string } uri - 表示要插入数据的uri。
   * @param { Array<rdb.ValuesBucket> } valuesBuckets - 表示要插入的数据记录数组。
   * @param { AsyncCallback<number> } callback - 回调函数，返回插入的数据记录数。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>, callback: AsyncCallback<number>): void;

  /**
   * 将多个数据记录插入数据库。使用Promise异步回调。
   *
   * @param { string } uri - 表示要插入数据的uri。
   * @param { Array<rdb.ValuesBucket> } valuesBuckets - 表示要插入的数据记录数组。
   * @returns { Promise<number> } Promise对象，返回插入的数据记录数。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>): Promise<number>;

  /**
   * 从数据库中删除一个或多个数据记录。使用callback异步回调。
   *
   * @param { string } uri - 表示要删除数据的uri。
   * @param { dataAbility.DataAbilityPredicates } predicates - 	表示筛选条件。当此参数为null时，应定义处理逻辑。
   * @param { AsyncCallback<number> } callback - 回调函数，返回已删除的数据记录数。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  delete(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void;

  /**
   * 从数据库中删除一个或多个数据记录。使用Promise异步回调。
   *
   * @param { string } uri - 表示要删除数据的uri。
   * @param { dataAbility.DataAbilityPredicates } [predicates] - 表示筛选条件。当此参数为null时，应定义处理逻辑。
   * @returns { Promise<number> } Returns the number of data records deleted.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  delete(uri: string, predicates?: dataAbility.DataAbilityPredicates): Promise<number>;

  /**
   * predicates筛选条件为空，自定义数据库删除数据记录的处理逻辑。使用callback异步回调。
   *
   * @param { string } uri - 表示要删除数据的uri。
   * @param { AsyncCallback<number> } callback - 回调函数，返回已删除的数据记录数。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  delete(uri: string, callback: AsyncCallback<number>): void;

  /**
   * 更新数据库中的数据记录。使用callback异步回调。
   *
   * @param { string } uri - 表示要更新数据的uri。
   * @param { rdb.ValuesBucket } valuesBucket - 表示要更新的数据。
   * @param { dataAbility.DataAbilityPredicates } predicates - 表示筛选条件。当此参数为null时，应定义处理逻辑。
   * @param { AsyncCallback<number> } callback - 回调函数，返回更新的数据记录数。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  update(
    uri: string,
    valuesBucket: rdb.ValuesBucket,
    predicates: dataAbility.DataAbilityPredicates,
    callback: AsyncCallback<number>
  ): void;

  /**
   * 更新数据库中的数据记录。使用Promise异步回调。
   *
   * @param { string } uri - 表示要更新数据的uri。
   * @param { rdb.ValuesBucket } valuesBucket - 表示要更新的数据。
   * @param { dataAbility.DataAbilityPredicates } [predicates] - 表示筛选条件。当此参数为null时，应定义处理逻辑。
   * @returns { Promise<number> } Returns the number of data records updated.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  update(uri: string, valuesBucket: rdb.ValuesBucket, predicates?: dataAbility.DataAbilityPredicates): Promise<number>;

  /**
   * predicates筛选条件为空，自定义更新数据库的处理逻辑。使用callback异步回调。
   *
   * @param { string } uri - 表示要更新数据的uri。
   * @param { rdb.ValuesBucket } valuesBucket - 表示要更新的数据。
   * @param { AsyncCallback<number> } callback - 回调函数，返回更新的数据记录数。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  update(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void;

  /**
   * 查询数据库中的数据。使用callback异步回调。
   *
   * @param { string } uri - 表示要查询数据的uri。
   * @param { Array<string> } columns - 表示要查询的列。如果此参数为空，则查询所有列。
   * @param { dataAbility.DataAbilityPredicates } predicates - 表示筛选条件。当此参数为null时，自定义查询数据库中数据的处理逻辑。
   * @param { AsyncCallback<ResultSet> } callback - 回调函数，返回查询结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  query(
    uri: string,
    columns: Array<string>,
    predicates: dataAbility.DataAbilityPredicates,
    callback: AsyncCallback<ResultSet>
  ): void;

  /**
   * 查询数据库中的数据。使用callback异步回调。
   *
   * @param { string } uri - 表示要查询数据的uri。
   * @param { AsyncCallback<ResultSet> } callback - 回调函数，返回查询结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  query(uri: string, callback: AsyncCallback<ResultSet>): void;

  /**
   * 查询数据库中的数据。使用callback异步回调。
   *
   * @param { string } uri - 表示要查询数据的uri。
   * @param { Array<string> } columns - 表示要查询的列。如果此参数为空，则查询所有列。
   * @param { AsyncCallback<ResultSet> } callback - 回调函数，返回查询结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  query(uri: string, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;

  /**
   * 查询数据库中的数据。使用callback异步回调。
   *
   * @param { string } uri - 表示要查询数据的uri。
   * @param { dataAbility.DataAbilityPredicates } predicates - 表示筛选条件。当此参数为null时，自定义查询数据库中数据的处理逻辑。
   * @param { AsyncCallback<ResultSet> } callback - 回调函数，返回查询结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  query(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<ResultSet>): void;

  /**
   * 查询数据库中的数据。使用Promise异步回调。
   *
   * @param { string } uri - 表示要查询数据的uri。
   * @param { Array<string> } [columns] - 表示要查询的列。如果此参数为空，则查询所有列。
   * @param { dataAbility.DataAbilityPredicates } [predicates] - 	表示筛选条件。当此参数为null时，自定义查询数据库中数据的处理逻辑。
   * @returns { Promise<ResultSet> } Promise对象，返回查询结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  query(uri: string, columns?: Array<string>, predicates?: dataAbility.DataAbilityPredicates): Promise<ResultSet>;

  /**
   * 调用DataAbility的扩展接口。使用callback异步回调。
   *
   * @param { string } uri - 表示待处理的DataAbility。例：'dataability:///com.example.xxx.xxxx'。
   * @param { string } method - 表示被调用的方法名。
   * @param { string } arg - 表示需传入的参数。
   * @param { PacMap } extras - 表示扩展的键值对参数。
   * @param { AsyncCallback<PacMap> } callback - 回调函数，返回扩展的键值对参数。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  call(uri: string, method: string, arg: string, extras: PacMap, callback: AsyncCallback<PacMap>): void;

  /**
   * 调用DataAbility的扩展接口。使用Promise异步回调。
   *
   * @param { string } uri - 表示待处理的DataAbility。例：'dataability:///com.example.xxx.xxxx'。
   * @param { string } method - 表示被调用的方法名。
   * @param { string } arg - 表示需传入的参数。
   * @param { PacMap } extras - 表示扩展的键值对参数。
   * @returns { Promise<PacMap> } Promise对象，返回扩展的键值对参数。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  call(uri: string, method: string, arg: string, extras: PacMap): Promise<PacMap>;

  /**
   * 批量操作数据库中的数据。使用callback异步回调。
   *
   * @param { string } uri - 表示待处理的DataAbility。例：'dataability:///com.example.xxx.xxxx'。
   * @param { Array<DataAbilityOperation> } operations - 表示数据操作数组，其中可以包含对数据库的多个不同操作。
   * @param { AsyncCallback<Array<DataAbilityResult>> } callback - 回调函数，在DataAbilityResult数组中返回每个操作的结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  executeBatch(
    uri: string,
    operations: Array<DataAbilityOperation>,
    callback: AsyncCallback<Array<DataAbilityResult>>
  ): void;

  /**
   * 批量操作数据库中的数据。使用Promise异步回调。
   *
   * @param { string } uri - 表示待处理的DataAbility。例：'dataability:///com.example.xxx.xxxx'。
   * @param { Array<DataAbilityOperation> } operations - 表示数据操作数组，其中可以包含对数据库的多个不同操作。
   * @returns { Promise<Array<DataAbilityResult>> } Promise对象，在DataAbilityResult数组中返回每个操作的结果。
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  executeBatch(uri: string, operations: Array<DataAbilityOperation>): Promise<Array<DataAbilityResult>>;
}

/**
 * 用于存储数据的PacMap类型。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @famodelonly [since 7 - 10]
 * @since 7 dynamic
 */
export interface PacMap {
  /**
   * 用于存储数据的PacMap类型。
   * 如果自定义sequencable对象被放入PacMap对象中，并将跨进程传输，你必须调用BasePacMap.setClassLoader(ClassLoader)为自定义对象设置一个类加载器。
   * 如果要将PacMap对象传输到非ohos进程，支持基本类型的值，但不支持自定义可序列对象。
   *
   * @unionmember { number }
   * @unionmember { string }
   * @unionmember { boolean }
   * @unionmember { Array<string | number | boolean> }
   * @unionmember { null }
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly [since 7 - 10]
   * @since 7 dynamic
   */
  [key: string]: number | string | boolean | Array<string | number | boolean> | null;
}

/**
 * 用于存储数据的PacMap类型。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @since 23 static
 */
export type PacMap = Record<string, int | double | string | boolean | Array<string | int | double | boolean> | null>;