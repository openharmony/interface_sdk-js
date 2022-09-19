/*
* Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';
import { ResultSet } from './data/rdb/resultSet';
import { DataAbilityOperation } from './ability/dataAbilityOperation';
import { DataAbilityResult } from './ability/dataAbilityResult';
import dataAbility from './@ohos.data.dataAbility';
import rdb from './@ohos.data.rdb';

/**
 * DataAbilityHelper
 * @interface
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @famodelonly
 * @since 9
 */
export interface DataAbilityHelper {
    /**
     * Opens a file in a specified remote path.
     * @param { string } uri - Indicates the path of the file to open.
     * @param { string } mode - Indicates the file open mode, which can be "r" for read-only access, "w" for write-only
     *                          access (erasing whatever data is currently in the file), "wt" for write access that
     *                          truncates any existing file, "wa" for write-only access to append to any existing data,
     *                          "rw" for read and write access on any existing data, or "rwt" for read and write access
     *                          that truncates any existing file.
     * @param { AsyncCallback<number> } callback - The callback is used to return the file descriptor.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    openFile(uri: string, mode: string, callback: AsyncCallback<number>): void;

    /**
     * Opens a file in a specified remote path.
     * @param { string } uri - Indicates the path of the file to open.
     * @param { string } mode - Indicates the file open mode, which can be "r" for read-only access, "w" for write-only
     *                          access (erasing whatever data is currently in the file), "wt" for write access that
     *                          truncates any existing file, "wa" for write-only access to append to any existing data,
     *                          "rw" for read and write access on any existing data, or "rwt" for read and write access
     *                          that truncates any existing file.
     * @returns { Promise<number> } Returns the promise of file descriptor.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    openFile(uri: string, mode: string): Promise<number>;

    /**
     * Registers an observer to observe data specified by the given uri.
     * @param { string } type - dataChange.
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<void> } callback - The callback when dataChange.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    on(type: 'dataChange', uri: string, callback: AsyncCallback<void>): void;

    /**
     * Deregisters all observers used for monitoring data specified by the given uri.
     * @param { string } type - dataChange.
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<void> } callback - The callback when dataChange.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    off(type: 'dataChange', uri: string, callback?: AsyncCallback<void>): void;

    /**
     * Obtains the MIME type of the date specified by the given URI.
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<string> } callback - The callback is used to return the MIME type.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    getType(uri: string, callback: AsyncCallback<string>): void;

    /**
     * Obtains the MIME type of the date specified by the given URI.
     * @param { string } uri - Indicates the path of the data to operate.
     * @returns { Promise<string> } Returns the promise of MIME type that matches the data specified by uri.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    getType(uri: string): Promise<string>;

    /**
     * Obtains the MIME types of files supported.
     * @param { string } uri - Indicates the path of the files to obtain.
     * @param { string } mimeTypeFilter - Indicates the MIME types of the files to obtain.
     * @param { AsyncCallback<Array<string>> } callback - The callback is used to return the matched MIME types Array.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    getFileTypes(uri: string, mimeTypeFilter: string, callback: AsyncCallback<Array<string>>): void;

    /**
     * Obtains the MIME types of files supported.
     * @param { string } uri - Indicates the path of the files to obtain.
     * @param { string } mimeTypeFilter - Indicates the MIME types of the files to obtain.
     * @returns { Promise<Array<string>> } Returns the promise of matched MIME types Array.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    getFileTypes(uri: string, mimeTypeFilter: string): Promise<Array<string>>;

    /**
     * Converts the given uri that refers to the Data ability into a normalized uri.
     * @param { string } uri - Indicates the uri object to normalize.
     * @param { AsyncCallback<string> } callback - The callback is used to return the normalized uri object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    normalizeUri(uri: string, callback: AsyncCallback<string>): void;

    /**
     * Converts the given uri that refers to the Data ability into a normalized uri.
     * @param { string } uri - Indicates the uri object to normalize.
     * @returns { Promise<string> } Returns the promise of normalized uri object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    normalizeUri(uri: string): Promise<string>;

    /**
     * Converts the given normalized uri generated by normalizeUri(uri) into a denormalized one.
     * @param { string } uri - Indicates the uri object to normalize.
     * @param { AsyncCallback<string> } callback - The callback is used to return the denormalized uri object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    denormalizeUri(uri: string, callback: AsyncCallback<string>): void;

    /**
     * Converts the given normalized uri generated by normalizeUri(uri) into a denormalized one.
     * @param { string } uri - Indicates the uri object to normalize.
     * @returns { Promise<string> } Returns the denormalized uri object.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    denormalizeUri(uri: string): Promise<string>;

    /**
     * Notifies the registered observers of a change to the data resource specified by uri.
     * @param { string } uri - Indicates the path of the data to operate.
     * @param { AsyncCallback<void> } callback - The callback of notifyChange.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    notifyChange(uri: string, callback: AsyncCallback<void>): void;

    /**
     * Notifies the registered observers of a change to the data resource specified by uri.
     * @param { string } uri - Indicates the path of the data to operate.
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    notifyChange(uri: string): Promise<void>;

    /**
     * Inserts a single data record into the database.
     * @param { string } uri - Indicates the path of the data to insert.
     * @param { rdb.ValuesBucket } valuesBucket - Indicates the data record to insert. If this parameter is null,
     *                                            a blank row will be inserted.
     * @param { AsyncCallback<number> } callback - The callback is used to return the index of the inserted data record.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    insert(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void;

    /**
     * Inserts a single data record into the database.
     * @param { string } uri - Indicates the path of the data to insert.
     * @param { rdb.ValuesBucket } valuesBucket - Indicates the data record to insert. If this parameter is null,
     *                                            a blank row will be inserted.
     * @returns { Promise<number> } Returns the index of the inserted data record.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    insert(uri: string, valuesBucket: rdb.ValuesBucket): Promise<number>;

    /**
     * Inserts multiple data records into the database.
     * @param { string } uri - Indicates the path of the data to batchInsert.
     * @param { Array<rdb.ValuesBucket> } valuesBuckets - Indicates the data records to insert.
     * @param { AsyncCallback<number> } callback - The callback is used to return the number of data records inserted.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>, callback: AsyncCallback<number>): void;

    /**
     * Inserts multiple data records into the database.
     * @param { string } uri - Indicates the path of the data to batchInsert.
     * @param { Array<rdb.ValuesBucket> } valuesBuckets - Indicates the data records to insert.
     * @returns { Promise<number> } Returns the number of data records inserted.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    batchInsert(uri: string, valuesBuckets: Array<rdb.ValuesBucket>): Promise<number>;

    /**
     * Deletes one or more data records from the database.
     * @param { string } uri - Indicates the path of the data to delete.
     * @param { dataAbility.DataAbilityPredicates } predicates - Indicates filter criteria. You should define the
     *                                                           processing logic when this parameter is null.
     * @param { AsyncCallback<number> } callback - The callback is used to return the number of data records deleted.
     * @returns { Promise<number> } Returns the number of data records deleted.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    delete(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void;

    /**
     * Deletes one or more data records from the database.
     * @param { string } uri - Indicates the path of the data to delete.
     * @param { dataAbility.DataAbilityPredicates } predicates - Indicates filter criteria. You should define the
     *                                                           processing logic when this parameter is null.
     * @returns { Promise<number> } Returns the number of data records deleted.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    delete(uri: string, predicates?: dataAbility.DataAbilityPredicates): Promise<number>;

    /**
     * Deletes one or more data records from the database.
     * @param { string } uri - Indicates the path of the data to delete.
     * @param { AsyncCallback<number> } callback - The callback is used to return the number of data records deleted.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    delete(uri: string, callback: AsyncCallback<number>): void;

    /**
     * Updates data records in the database.
     * @param { string } uri - Indicates the path of data to update.
     * @param { rdb.ValuesBucket } valuesBucket - Indicates the data to update.
     * @param { dataAbility.DataAbilityPredicates } predicates - Indicates filter criteria. You should define
     *                                                           the processing logic when this parameter is null.
     * @param { AsyncCallback<number> } callback - The callback is used to return the number of data records updated.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    update(uri: string, valuesBucket: rdb.ValuesBucket, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<number>): void;

    /**
     * Updates data records in the database.
     * @param { string } uri - Indicates the path of data to update.
     * @param { rdb.ValuesBucket } valuesBucket - Indicates the data to update.
     * @param { dataAbility.DataAbilityPredicates } predicates - Indicates filter criteria. You should define
     *                                                           the processing logic when this parameter is null.
     * @returns { Promise<number> } Returns the number of data records updated.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    update(uri: string, valuesBucket: rdb.ValuesBucket, predicates?: dataAbility.DataAbilityPredicates): Promise<number>;

    /**
     * Updates data records in the database.
     * @param { string } uri - Indicates the path of data to update.
     * @param { rdb.ValuesBucket } valuesBucket - Indicates the data to update.
     * @param { AsyncCallback<number> } callback - The callback is used to return the number of data records updated.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    update(uri: string, valuesBucket: rdb.ValuesBucket, callback: AsyncCallback<number>): void;

    /**
     * Queries data in the database.
     * @param { string } uri - Indicates the path of data to query.
     * @param { Array<string> } columns - Indicates the columns to query. If this parameter is null, all columns are queried.
     * @param { dataAbility.DataAbilityPredicates } predicates - Indicates filter criteria. You should define
     *                                                           the processing logic when this parameter is null.
     * @param { AsyncCallback<ResultSet> } callback - The callback is used to return the query result {@link ResultSet}.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    query(uri: string, columns: Array<string>, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database.
     * @param { string } uri - Indicates the path of data to query.
     * @param { AsyncCallback<ResultSet> } callback - The callback is used to return the query result {@link ResultSet}.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    query(uri: string, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database.
     * @param { string } uri - Indicates the path of data to query.
     * @param { Array<string> } columns - Indicates the columns to query. If this parameter is null, all columns are queried.
     * @param { AsyncCallback<ResultSet> } callback - The callback is used to return the query result {@link ResultSet}.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    query(uri: string, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database.
     * @param { string } uri - Indicates the path of data to query.
     * @param { dataAbility.DataAbilityPredicates } predicates - Indicates filter criteria. You should define
     *                                                           the processing logic when this parameter is null.
     * @param { AsyncCallback<ResultSet> } callback - The callback is used to return the query result {@link ResultSet}.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    query(uri: string, predicates: dataAbility.DataAbilityPredicates, callback: AsyncCallback<ResultSet>): void;

    /**
     * Queries data in the database.
     * @param { string } uri - Indicates the path of data to query.
     * @param { Array<string> } columns - Indicates the columns to query. If this parameter is null, all columns are queried.
     * @param { dataAbility.DataAbilityPredicates } predicates - Indicates filter criteria. You should define
     *                                                           the processing logic when this parameter is null.
     * @returns { Promise<ResultSet> } Returns the query result {@link ResultSet}.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    query(uri: string, columns?: Array<string>, predicates?: dataAbility.DataAbilityPredicates): Promise<ResultSet>;

    /**
     * Calls the extended API of the DataAbility. This method uses a promise to return the result.
     * @param { string } uri - URI of the Data ability. Example: "dataability:///com.example.xxx.xxxx"
     * @param { string } method - Indicates the method to call.
     * @param { string } arg - Indicates the parameter of the String type.
     * @param { PacMap } extras - Indicates the parameter of the PacMap type.
     * If a custom Sequenceable object is put in the PacMap object and will be transferred across processes,
     * you must call BasePacMap.setClassLoader(ClassLoader) to set a class loader for the custom object.
     * If the PacMap object is to be transferred to a non-OHOS process,
     * values of primitive types are supported, but not custom Sequenceable objects.
     * @param { AsyncCallback<PacMap> } callback - The callback is used to return the query result {@link PacMap}.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    call(uri: string, method: string, arg: string, extras: PacMap, callback: AsyncCallback<PacMap>): void;

    /**
     * Calls the extended API of the DataAbility. This method uses a promise to return the result.
     * @param { string } uri - URI of the Data ability. Example: "dataability:///com.example.xxx.xxxx"
     * @param { string } method - Indicates the method to call.
     * @param { string } arg - Indicates the parameter of the String type.
     * @param { PacMap } extras - Indicates the parameter of the PacMap type.
     * If a custom Sequenceable object is put in the PacMap object and will be transferred across processes,
     * you must call BasePacMap.setClassLoader(ClassLoader) to set a class loader for the custom object.
     * If the PacMap object is to be transferred to a non-OHOS process,
     * values of primitive types are supported, but not custom Sequenceable objects.
     * @returns { Promise<PacMap> } Returns the query result {@link PacMap}.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    call(uri: string, method: string, arg: string, extras: PacMap): Promise<PacMap>;

    /**
     * Queries data in the database.
     * @param { string } uri - Indicates the path of data to query.
     * @param { Array<DataAbilityOperation> } operations - Indicates the data operation list, which can contain
     *                                                     multiple operations on the database.
     * @param { AsyncCallback<Array<DataAbilityResult>> } callback - The callback is used to return the result of each
     *                                                               operation, in array {@link DataAbilityResult}.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    executeBatch(uri: string, operations: Array<DataAbilityOperation>, callback: AsyncCallback<Array<DataAbilityResult>>): void;

    /**
     * Queries data in the database.
     * @param { string } uri - Indicates the path of data to query.
     * @param { Array<DataAbilityOperation> } operations - Indicates the data operation list, which can contain
     *                                                     multiple operations on the database.
     * @returns { Promise<Array<DataAbilityResult>> } Returns the result of each operation, in array {@link DataAbilityResult}.
     * @throws { BusinessError } 401 - If the input parameter is not valid parameter.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    executeBatch(uri: string, operations: Array<DataAbilityOperation>): Promise<Array<DataAbilityResult>>;
}

/**
 * Defines a PacMap object for storing a series of values.
 * @typedef PacMap
 * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
 * @famodelonly
 * @since 9
 */
export interface PacMap {
    /**
     * Indicates the parameter of the PacMap type.
     * If a custom Sequenceable object is put in the PacMap object and will be transferred across processes,
     * you must call BasePacMap.setClassLoader(ClassLoader) to set a class loader for the custom object.
     * If the PacMap object is to be transferred to a non-OHOS process,
     * values of primitive types are supported, but not custom Sequenceable objects.
     * @syscap SystemCapability.Ability.AbilityRuntime.FAModel
     * @famodelonly
     * @since 9
     */
    [key: string]: number | string | boolean | Array<string | number | boolean> | null;
}
