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
 * A DataAbilityHelper object is obtained through 
 * [acquireDataAbilityHelper]{@link ./../@ohos.ability.featureAbility:featureAbility.acquireDataAbilityHelper}.
 *
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
 * A DataAbilityHelper object is obtained through
 * [acquireDataAbilityHelper]{@link ./../@ohos.ability.featureAbility:featureAbility.acquireDataAbilityHelper}.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @famodelonly
 * @since 7 dynamiconly
 */
export interface DataAbilityHelper {
  /**
   * Opens a file with a specified URI. This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the file to open.
   * @param { string } mode - Mode for opening the file. The value r indicates read-only access, w indicates write-only
   *      access, and rw indicates read-write access.
   * @param { AsyncCallback<number> } callback - Callback used to return the file descriptor.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  openFile(uri: string, mode: string, callback: AsyncCallback<number>): void;

  /**
   * Opens a file with a specified URI. This API uses a promise to return the result.
   *
   * @param { string } uri - URI of the file to open.
   * @param { string } mode - Mode for opening the file. The value r indicates read-only access, w indicates write-only
   *     access, and rw indicates read-write access.
   * @returns { Promise<number> } Promise used to return the file descriptor.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  openFile(uri: string, mode: string): Promise<number>;

  /**
   * Registers an observer to listen for changes in the data specified by a given URI.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { 'dataChange' } type - The value 'dataChange' means data changes.
   * @param { string } uri - URI of the data.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the observer is registered, err
   *     is undefined. Otherwise, err is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void;

  /**
   * Deregisters the observer that listens for changes in the data specified by a given URI.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { 'dataChange' } type - The value 'dataChange' means data changes.
   * @param { string } uri - URI of the data.
   * @param { AsyncCallback<void> } [callback] - Callback used to return the result. If the observer is deregistered,
   *     err is undefined. Otherwise, err is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void;

  /**
   * Obtains the media resource type of the data specified by a given URI.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the data.
   * @param { AsyncCallback<string> } callback - Callback used to return the media resource type.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  getType(uri: string, callback: AsyncCallback<string>): void;

  /**
   * Obtains the media resource type of the data specified by a given URI.
   * This API uses a promise to return the result.
   *
   * @param { string } uri - URI of the data.
   * @returns { Promise<string> } Promise used to return the media resource type.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  getType(uri: string): Promise<string>;

  /**
   * Obtains the supported media resource types of a specified file.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the file.
   * @param { string } mimeTypeFilter - Media resource type of the file to obtain.
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return an array holding the media resource
   *     types.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  getFileTypes(uri: string, mimeTypeFilter: string, callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the supported media resource types of a specified file. This API uses a promise to return the result.
   *
   * @param { string } uri - URI of the file.
   * @param { string } mimeTypeFilter - Media resource type of the file to obtain.
   * @returns { Promise<Array<string>> } Promise used to return an array holding the media resource types.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  getFileTypes(uri: string, mimeTypeFilter: string): Promise<Array<string>>;

  /**
   * Converts the URI that refers to a DataAbility into a normalized URI.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI object to normalize.
   * @param { AsyncCallback<string> } callback - Callback used to return the normalized URI object if the DataAbility
   *      supports URI normalization. If the DataAbility does not support URI normalization, null is returned.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  normalizeUri(uri: string, callback: AsyncCallback<string>): void;

  /**
   * Converts a normalized URI generated by normalizeUri to a denormalized one.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI object to denormalize.
   * @returns { Promise<string> } Promise used to return the normalized URI object if the DataAbility supports URI
   *     normalization. If the DataAbility does not support URI normalization, null is returned.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  normalizeUri(uri: string): Promise<string>;

  /**
   * Converts a normalized URI generated by normalizeUri to a denormalized one.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI object to denormalize.
   * @param { AsyncCallback<string> } callback - 	Callback used to return the denormalized URI object.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  denormalizeUri(uri: string, callback: AsyncCallback<string>): void;

  /**
   * Converts a normalized URI generated by normalizeUri to a denormalized one.
   * This API uses a promise to return the result.
   *
   * @param { string } uri - URI object to normalize.
   * @returns { Promise<string> } Promise used to return the denormalized URI object
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  denormalizeUri(uri: string): Promise<string>;

  /**
   * Notifies the registered observer of a change to the data specified by the URI.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the data that changes.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the observer is registered, err
   *     is undefined. Otherwise, err is an error object.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  notifyChange(uri: string, callback: AsyncCallback<void>): void;

  /**
   * Notifies the registered observer of a change to the data specified by the URI.
   * This API uses a promise to return the result.
   *
   * @param { string } uri - URI of the data that changes.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  notifyChange(uri: string): Promise<void>;

  /**
   * Inserts a single data record into the database. This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the data to insert.
   * @param { rdb.ValuesBucket } valuesBucket - Data record to insert. If this parameter is null, a blank row will be inserted.
   * @param { AsyncCallback<number> } callback - Callback used to return the index of the inserted data record.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  insert(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void;

  /**
   * Inserts a single data record into the database. This API uses a promise to return the result.
   *
   * @param { string } uri - URI of the data to insert.
   * @param { rdb.ValuesBucket } valuesBucket - Data record to insert. If this parameter is null, a blank row will
   *     be inserted.
   * @returns { Promise<number> } Promise used to return the index of the inserted data record.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  insert(uri: string, valuesBucket: rdb.ValuesBucket): Promise<number>;

  /**
   * Inserts multiple data records into the database.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the data to insert.
   * @param { Array<rdb.ValuesBucket> } valuesBuckets - Data records to insert.
   * @param { AsyncCallback<number> } callback - Callback used to return the number of inserted data records.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>, callback: AsyncCallback<number>): void;

  /**
   * Inserts multiple data records into the database. This API uses a promise to return the result.
   *
   * @param { string } uri - URI of the data to insert.
   * @param { Array<rdb.ValuesBucket> } valuesBuckets - Data records to insert.
   * @returns { Promise<number> } Promise used to return the number of inserted data records.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>): Promise<number>;

  /**
   * Deletes one or more data records from the database. This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the data to delete.
   * @param { dataAbility.DataAbilityPredicates } predicates - 	Filter criteria. You should define the processing logic
   *     when this parameter is null.
   * @param { AsyncCallback<number> } callback - Callback used to return the number of deleted data records.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  delete(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void;

  /**
   * Deletes one or more data records from the database. This API uses a promise to return the result.
   *
   * @param { string } uri - URI of the data to delete.
   * @param { dataAbility.DataAbilityPredicates } [predicates] - Filter criteria. You should define the processing
   *     logic when this parameter is null.
   * @returns { Promise<number> } Returns the number of data records deleted.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  delete(uri: string, predicates?: dataAbility.DataAbilityPredicates): Promise<number>;

  /**
   * Uses a custom processing logic to delete data records from the database.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the data to delete.
   * @param { AsyncCallback<number> } callback - Callback used to return the number of deleted data records.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  delete(uri: string, callback: AsyncCallback<number>): void;

  /**
   * Updates data in the database.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the data to update.
   * @param { rdb.ValuesBucket } valuesBucket - New values.
   * @param { dataAbility.DataAbilityPredicates } predicates - Filter criteria. You should define the processing logic
   *     when this parameter is null.
   * @param { AsyncCallback<number> } callback - Callback used to return the number of updated data records.
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
   * Updates data in the database. This API uses a promise to return the result.
   *
   * @param { string } uri - URI of the data to update.
   * @param { rdb.ValuesBucket } valuesBucket - New values.
   * @param { dataAbility.DataAbilityPredicates } [predicates] - Filter criteria. You should define the processing
   *     logic when this parameter is null.
   * @returns { Promise<number> } Promise used to return the number of updated data records.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  update(uri: string, valuesBucket: rdb.ValuesBucket, predicates?: dataAbility.DataAbilityPredicates): Promise<number>;

  /**
   * Uses a custom processing logic to update data records in the database.
   * This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the data to update.
   * @param { rdb.ValuesBucket } valuesBucket - New values.
   * @param { AsyncCallback<number> } callback - Callback used to return the number of updated data records.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  update(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void;

  /**
   * Queries data in the database. This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the data to query.
   * @param { Array<string> } columns - Columns to query. If this parameter is null, all columns will be queried.
   * @param { dataAbility.DataAbilityPredicates } predicates - Filter criteria. When null is passed in, you need to
   *     customize the logic for querying data in the database.
   * @param { AsyncCallback<ResultSet> } callback - Callback used to return the result.
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
   * Queries data in the database. This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the data to query.
   * @param { AsyncCallback<ResultSet> } callback - Callback used to return the result.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  query(uri: string, callback: AsyncCallback<ResultSet>): void;

  /**
   * Queries data in the database. This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the data to query.
   * @param { Array<string> } columns - Columns to query. If this parameter is null, all columns will be queried.
   * @param { AsyncCallback<ResultSet> } callback - Callback used to return the result.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  query(uri: string, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;

  /**
   * Queries data in the database. This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the data to query.
   * @param { dataAbility.DataAbilityPredicates } predicates - Filter criteria. When null is passed in, you need to
   *     customize the logic for querying data in the database.
   * @param { AsyncCallback<ResultSet> } callback - Callback used to return the result.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  query(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<ResultSet>): void;

  /**
   * Queries data in the database. This API uses a promise to return the result.
   *
   * @param { string } uri - URI of the data to query.
   * @param { Array<string> } [columns] - Columns to query. If this parameter is null, all columns will be queried.
   * @param { dataAbility.DataAbilityPredicates } [predicates] - 	Filter criteria. When null is passed in, you need to
   *     customize the logic for querying data in the database.
   * @returns { Promise<ResultSet> } Returns the query result {@link ResultSet}.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  query(uri: string, columns?: Array<string>, predicates?: dataAbility.DataAbilityPredicates): Promise<ResultSet>;

  /**
   * Calls an extended method defined by the DataAbility. This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the DataAbility. Example: 'dataability:///com.example.xxx.xxxx'.
   * @param { string } method - Name of the API to call.
   * @param { string } arg - Parameter to pass in.
   * @param { PacMap } extras - Key-value pair parameter.
   * @param { AsyncCallback<PacMap> } callback - Callback used to return the extended parameters in the format of
   *     key-value pairs.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  call(uri: string, method: string, arg: string, extras: PacMap, callback: AsyncCallback<PacMap>): void;

  /**
   * Calls an extended method defined by the DataAbility. This API uses a promise to return the result.
   *
   * @param { string } uri - URI of the DataAbility. Example: 'dataability:///com.example.xxx.xxxx'.
   * @param { string } method - Name of the API to call.
   * @param { string } arg - Parameter to pass in.
   * @param { PacMap } extras - Key-value pair parameter.
   * @returns { Promise<PacMap> } Promise used to return the extended parameters in the format of key-value pairs.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  call(uri: string, method: string, arg: string, extras: PacMap): Promise<PacMap>;

  /**
   * Operates data in the database in batches. This API uses an asynchronous callback to return the result.
   *
   * @param { string } uri - URI of the DataAbility. Example: 'dataability:///com.example.xxx.xxxx'.
   * @param { Array<DataAbilityOperation> } operations - An array holding the data operations on the database.
   * @param { AsyncCallback<Array<DataAbilityResult>> } callback - Callback used to return the result of each operation
   *     in the DataAbilityResult array.
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
   * Operates data in the database in batches. This API uses a promise to return the result.
   *
   * @param { string } uri - URI of the DataAbility. Example: 'dataability:///com.example.xxx.xxxx'.
   * @param { Array<DataAbilityOperation> } operations - An array holding the data operations on the database.
   * @returns { Promise<Array<DataAbilityResult>> } Promise used to return the result of each operation in the
   *     DataAbilityResult array.
   * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
   * @famodelonly
   * @since 7 dynamiconly
   */
  executeBatch(uri: string, operations: Array<DataAbilityOperation>): Promise<Array<DataAbilityResult>>;
}

/**
 * Defines the PacMap type used for data storage.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @famodelonly [since 7 - 10]
 * @since 7 dynamic
 */
export interface PacMap {
  /**
   * Indicates the parameter of the PacMap type.
   * If a custom Sequenceable object is put in the PacMap object and will be transferred across processes,
   * you must call BasePacMap.setClassLoader(ClassLoader) to set a class loader for the custom object.
   * If the PacMap object is to be transferred to a non-OHOS process,
   * values of primitive types are supported, but not custom Sequenceable objects.
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
 * Defines the PacMap type used for data storage.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @since 23 static
 */
export type PacMap = Record<string, int | double | string | boolean | Array<string | int | double | boolean> | null>;