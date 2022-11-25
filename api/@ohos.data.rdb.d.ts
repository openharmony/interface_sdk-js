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

import{ AsyncCallback, Callback } from './basic';
import{ ResultSet as _ResultSet, ResultSetV9 as _ResultSetV9 } from './data/rdb/resultSet';
import Context from "./application/BaseContext";
import dataSharePredicates from './@ohos.data.dataSharePredicates';

/**
 * Provides methods for rdbStore create and delete.
 *
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 7
 */
declare namespace rdb
{
    /**
     * Obtains an RDB store.
     *
     * You can set parameters of the RDB store as required. In general, this method is recommended
     * to obtain a rdb store.
     *
     * @param {Context} context - Indicates the context of application or capability.
     * @param {StoreConfig} config - Indicates the {@link StoreConfig} configuration of the database related to this RDB store. 
     * @param {number} version - Indicates the database version for upgrade or downgrade.
     * @param {AsyncCallback<RdbStore>} callback - the RDB store {@link RdbStore}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.getRdbStoreV9
     */
    function getRdbStore(context: Context, config: StoreConfig, version: number, callback: AsyncCallback<RdbStore>): void;

    /**
     * Obtains an RDB store.
     *
     * You can set parameters of the RDB store as required. In general, this method is recommended
     * to obtain a rdb store.
     *
     * @param {Context} context - Indicates the context of application or capability.
     * @param {StoreConfig} config - Indicates the {@link StoreConfig} configuration of the database related to this RDB store. 
     * @param {number} version - Indicates the database version for upgrade or downgrade.
     * @returns {Promise<RdbStore>} the RDB store {@link RdbStore}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.getRdbStoreV9
     */
    function getRdbStore(context: Context, config: StoreConfig, version: number): Promise<RdbStore>;

    /**
     * Obtains an RDB store.
     *
     * You can set parameters of the RDB store as required. In general, this method is recommended
     * to obtain a rdb store.
     *
     * @param {Context} context - Indicates the context of application or capability.
     * @param {StoreConfigV9} config - Indicates the {@link StoreConfigV9} configuration of the database related to this RDB store.
     * @param {number} version - Indicates the database version for upgrade or downgrade.
     * @param {AsyncCallback<RdbStoreV9>} callback - the RDB store {@link RdbStoreV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @throws {BusinessError} 14800010 - if failed open database by invalid database name
     * @throws {BusinessError} 14800011 - if failed open database by database corrupted
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    function getRdbStoreV9(context: Context, config: StoreConfigV9, version: number, callback: AsyncCallback<RdbStoreV9>): void;

    /**
     * Obtains an RDB store.
     *
     * You can set parameters of the RDB store as required. In general, this method is recommended
     * to obtain a rdb store.
     *
     * @param {Context} context - Indicates the context of application or capability.
     * @param {StoreConfigV9} config - Indicates the {@link StoreConfigV9} configuration of the database related to this RDB store.
     * @param {number} version - Indicates the database version for upgrade or downgrade.
     * @returns {Promise<RdbStoreV9>} the RDB store {@link RdbStoreV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @throws {BusinessError} 14800010 - if failed open database by invalid database name
     * @throws {BusinessError} 14800011 - if failed open database by database corrupted
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    function getRdbStoreV9(context: Context, config: StoreConfigV9, version: number): Promise<RdbStoreV9>;

    /**
     * Deletes the database with a specified name.
     *
     * @param {Context} context - Indicates the context of application or capability.
     * @param {string} name - Indicates the database name.
     * @param {AsyncCallback<void>} callback - the callback of deleteRdbStore.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.deleteRdbStoreV9
     */
    function deleteRdbStore(context: Context, name: string, callback: AsyncCallback<void>): void;
    /**
     * Deletes the database with a specified name.
     *
     * @param {Context} context - Indicates the context of application or capability.
     * @param {string} name - Indicates the database name.
     * @returns {Promise<void>} the promise returned by the function.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.deleteRdbStoreV9
     */
    function deleteRdbStore(context: Context, name: string): Promise<void>;

    /**
     * Deletes the database with a specified name.
     *
     * @param {Context} context - Indicates the context of application or capability.
     * @param {string} name - Indicates the database name.
     * @param {AsyncCallback<void>} callback - the callback of deleteRdbStore.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @throws {BusinessError} 14800010 - if failed delete database by invalid database name
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    function deleteRdbStoreV9(context: Context, name: string, callback: AsyncCallback<void>): void;

    /**
     * Deletes the database with a specified name.
     *
     * @param {Context} context - Indicates the context of application or capability.
     * @param {string} name - Indicates the database name.
     * @returns {Promise<void>} the promise returned by the function.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @throws {BusinessError} 14800010 - if failed delete database by invalid database name
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    function deleteRdbStoreV9(context: Context, name: string): Promise<void>;

    /**
     * Indicates the database synchronization mode.
     *
     * @since 8
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     */
    enum SyncMode {
        /**
         * Indicates the data is pushed to remote device from local device.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         */
        SYNC_MODE_PUSH = 0,

        /**
         * Indicates the data is pulled from remote device to local device.
         *
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         */
        SYNC_MODE_PULL = 1,
    }

    /**
     * Describes the subscription type.
     *
     * @since 8
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @permission ohos.permission.DISTRIBUTED_DATASYNC
     */
    enum SubscribeType {
        /**
         * Subscription to remote data changes
         * @since 8
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         */
        SUBSCRIBE_TYPE_REMOTE = 0,
    }

    /**
     * Describes the {@code RdbStoreV9} type.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    enum SecurityLevel {
        /**
         * S1: mains the db is low level security
         * There are some low impact, when the data is leaked.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
         S1 = 1,

         /**
          * S2: mains the db is middle level security
          * There are some major impact, when the data is leaked.
          *
          * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
          * @since 9
          */
         S2 = 2,
 
         /**
          * S3: mains the db is high level security
          * There are some severity impact, when the data is leaked.
          *
          * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
          * @since 9
          */
         S3 = 3,
 
         /**
          * S4: mains the db is critical level security
          * There are some critical impact, when the data is leaked.
          *
          * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
          * @since 9
          */
         S4 = 4,
    }

    /**
     * Provides methods for managing the relational database (RDB).
     *
     * This class provides methods for creating, querying, updating, and deleting RDBs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbStoreV9
     */
    interface RdbStore {
        /**
         * Inserts a row of data into the target table.
         *
         * @param {string} table - Indicates the row of data to be inserted into the table.
         * @param {ValuesBucket} values - Indicates the row of data {@link ValuesBucket} to be inserted into the table. 
         * @param {AsyncCallback<number>} callback - the row ID if the operation is successful. returns -1 otherwise.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.insert
         */
        insert(table: string, values: ValuesBucket, callback: AsyncCallback<number>): void;

        /**
         * Inserts a row of data into the target table.
         *
         * @param {string} table - Indicates the row of data to be inserted into the table.
         * @param {ValuesBucket} values - Indicates the row of data {@link ValuesBucket} to be inserted into the table. 
         * @returns {Promise<void>} return the row ID if the operation is successful. return -1 otherwise.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.insert
         */
        insert(table: string, values: ValuesBucket): Promise<number>;

        /**
         * Inserts a batch of data into the target table.
         *
         * @param {string} table - Indicates the target table.
         * @param {Array<ValuesBucket>} values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
         * @param {AsyncCallback<number>} callback - the number of values that were inserted if the operation is successful. returns -1 otherwise.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.batchInsert
         */
        batchInsert(table: string, values: Array<ValuesBucket>, callback: AsyncCallback<number>): void;

        /**
         * Inserts a batch of data into the target table.
         *
         * @param {string} table - Indicates the target table.
         * @param {Array<ValuesBucket>} values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
         * @returns {Promise<void>} return the number of values that were inserted if the operation is successful. returns -1 otherwise.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.batchInsert
         */
        batchInsert(table: string, values: Array<ValuesBucket>): Promise<number>;

        /**
         * Updates data in the database based on a a specified instance object of RdbPredicates.
         *
         * @param {ValuesBucket} values - Indicates Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param {RdbPredicates} predicates - Indicates the specified update condition by the instance object of  {@link RdbPredicates}.
         * @param {AsyncCallback<number>} callback - the number of affected rows.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.update
         */
        update(values: ValuesBucket, predicates: RdbPredicates, callback: AsyncCallback<number>): void;

        /**
         * Updates data in the database based on a a specified instance object of RdbPredicates.
         *
         * @param {ValuesBucket} values - Indicates Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param {RdbPredicates} predicates - Indicates the specified update condition by the instance object of  {@link RdbPredicates}.
         * @returns {Promise<number>} return the number of affected rows.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.update
         */
        update(values: ValuesBucket, predicates: RdbPredicates): Promise<number>;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicates.
         *
         * @param {RdbPredicates} predicates - the specified delete condition by the instance object of {@link RdbPredicates}.
         * @param {AsyncCallback<number>} callback - the number of affected rows.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.delete
         */
        delete(predicates: RdbPredicates, callback: AsyncCallback<number>): void;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicates.
         *
         * @param {RdbPredicates} predicates - the specified delete condition by the instance object of {@link RdbPredicates}.
         * @returns {Promise<number>} return the number of affected rows.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.delete
         */
        delete(predicates: RdbPredicates): Promise<number>;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @param {RdbPredicates} predicates - the specified query condition by the instance object of {@link RdbPredicates}.
         * @param {Array<string>} columns - the columns to query. If the value is empty array, the query applies to all columns.
         * @param {AsyncCallback<ResultSet>} callback - the {@link ResultSet} object if the operation is successful.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.query
         */
        query(predicates: RdbPredicates, columns: Array<string>, callback: AsyncCallback<ResultSet>): void;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @param {RdbPredicates} predicates - the specified query condition by the instance object of {@link RdbPredicates}.
         * @param {Array<string>} columns - the columns to query. If the value is null, the query applies to all columns.
         * @returns {Promise<ResultSet>} return the {@link ResultSet} object if the operation is successful.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 7
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.query
         */
        query(predicates: RdbPredicates, columns ?: Array<string>): Promise<ResultSet>;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicates.
         *
         * @param {string} sql - Indicates the SQL statement to execute.
         * @param {Array<ValueType>} bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
         * @returns {Promise<ResultSet>} return the {@link ResultSet} object if the operation is successful.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.querySql
         */
        querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSet>): void;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicates.
         *
         * @param {string} sql - Indicates the SQL statement to execute.
         * @param {Array<ValueType>} bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
         * @returns {Promise<ResultSet>} return the {@link ResultSet} object if the operation is successful.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.querySql
         */
        querySql(sql: string, bindArgs ?: Array<ValueType>): Promise<ResultSet>;

        /**
         * Executes an SQL statement that contains specified parameters but returns no value.
         *
         * @param {string} sql - Indicates the SQL statement to execute.
         * @param {Array<ValueType>} bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
         * @param {AsyncCallback<void>} callback - the callback of executeSql.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.executeSql
         */
        executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>): void;

        /**
         * Executes an SQL statement that contains specified parameters but returns no value.
         *
         * @param {string} sql - Indicates the SQL statement to execute.
         * @param {Array<ValueType>} bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
         * @returns {Promise<void>} the promise returned by the function.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.executeSql
         */
        executeSql(sql: string, bindArgs ?: Array<ValueType>): Promise<void>;

        /**
         * Begin Transaction before execute your sql.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.beginTransaction
         */
        beginTransaction(): void;

        /**
         * Commit the the sql you have executed.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.commit
         */
        commit(): void;

        /**
         * Roll back the sql you have already executed.
         *
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.rollBack
         */
        rollBack(): void;

        /**
         * Set table to be distributed table.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {Array<string>} tables - Indicates the tables name you want to set.
         * @param {AsyncCallback<void>} callback - the callback of setDistributedTables.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.setDistributedTables
         */
        setDistributedTables(tables: Array<string>, callback: AsyncCallback<void>): void;

        /**
         * Set table to be distributed table.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {Array<string>} tables - Indicates the tables name you want to set.
         * @returns {Promise<void>} the promise returned by the function.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.setDistributedTables
         */
        setDistributedTables(tables: Array<string>): Promise<void>;

        /**
         * Obtain distributed table name of specified remote device according to local table name.
         * When query remote device database, distributed table name is needed.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string} device - Indicates the remote device.
         * @param {AsyncCallback<string>} callback - {string}: the distributed table name.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.obtainDistributedTableName
         */
        obtainDistributedTableName(device: string, table: string, callback: AsyncCallback<string>): void;

        /**
         * Obtain distributed table name of specified remote device according to local table name.
         * When query remote device database, distributed table name is needed.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string} device - Indicates the remote device.
         * @returns {Promise<string>} {string}: the distributed table name.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.obtainDistributedTableName
         */
        obtainDistributedTableName(device: string, table: string): Promise<string>;

        /**
         * Sync data between devices.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string} device - Indicates the remote device.
         * @param {AsyncCallback<Array<[string, number]>>} callback - {Array<[string, number]>}: devices sync status array, {string}: device id, {number}: device sync status.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.sync
         */
        sync(mode: SyncMode, predicates: RdbPredicates, callback: AsyncCallback<Array<[ string, number ]>>): void;

        /**
         * Sync data between devices.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string} device - Indicates the remote device.
         * @returns {Promise<Array<[string, number]>>} {Array<[string, number]>}: devices sync status array, {string}: device id, {number}: device sync status.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.sync
         */
        sync(mode: SyncMode, predicates: RdbPredicates): Promise<Array<[ string, number ]>>;

        /**
        * Registers an observer for the database. When data in the distributed database changes,
         * the callback will be invoked.
        *
        * @param {string} event - Indicates the event must be string 'dataChange'.
        * @param {SubscribeType} type - Indicates the subscription type, which is defined in {@link SubscribeType}.
        * @param {AsyncCallback<Array<string>>} observer - {Array<string>}: the observer of data change events in the distributed database.
        * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
        * @since 8
        * @deprecated since 9
        * @useinstead ohos.data.rdb.RdbStoreV9.on
        */
        on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;

        /**
         * Remove specified observer of specified type from the database.
         *
         * @param {string} event - Indicates the event must be string 'dataChange'.
         * @param {SubscribeType} type - Indicates the subscription type, which is defined in {@link SubscribeType}.
         * @param {AsyncCallback<Array<string>>} observer - {Array<string>}: the data change observer already registered.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 8
         * @deprecated since 9
         * @useinstead ohos.data.rdb.RdbStoreV9.off
         */
        off(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;
    }

    /**
     * Provides methods for managing the relational database (RDB).
     *
     * This class provides methods for creating, querying, updating, and deleting RDBs.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    interface RdbStoreV9 {
        /**
         * Inserts a row of data into the target table.
         *
         * @param {string} table - Indicates the row of data to be inserted into the table.
         * @param {ValuesBucket} values - Indicates the row of data {@link ValuesBucket} to be inserted into the table.
         * @param {AsyncCallback<number>} callback - the row ID if the operation is successful. returns -1 otherwise.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        insert(table: string, values: ValuesBucket, callback: AsyncCallback<number>): void;

        /**
         * Inserts a row of data into the target table.
         *
         * @param {string} table - Indicates the row of data to be inserted into the table.
         * @param {ValuesBucket} values - Indicates the row of data {@link ValuesBucket} to be inserted into the table.
         * @returns {Promise<void>} return the row ID if the operation is successful. return -1 otherwise.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        insert(table: string, values: ValuesBucket): Promise<number>;

        /**
         * Inserts a batch of data into the target table.
         *
         * @param {string} table - Indicates the target table.
         * @param {Array<ValuesBucket>} values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
         * @param {AsyncCallback<number>} callback - the number of values that were inserted if the operation is successful. returns -1 otherwise.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        batchInsert(table: string, values: Array<ValuesBucket>, callback: AsyncCallback<number>): void;

        /**
         * Inserts a batch of data into the target table.
         *
         * @param {string} table - Indicates the target table.
         * @param {Array<ValuesBucket>} values - Indicates the rows of data {@link ValuesBucket} to be inserted into the table.
         * @returns {Promise<void>} return the number of values that were inserted if the operation is successful. returns -1 otherwise.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        batchInsert(table: string, values: Array<ValuesBucket>): Promise<number>;

        /**
         * Updates data in the database based on a a specified instance object of RdbPredicatesV9.
         *
         * @param {ValuesBucket} values - Indicates Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param {RdbPredicatesV9} predicates - Indicates the specified update condition by the instance object of  {@link RdbPredicatesV9}.
         * @param {AsyncCallback<number>} callback - the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        update(values: ValuesBucket, predicates: RdbPredicatesV9, callback: AsyncCallback<number>): void;

        /**
         * Updates data in the database based on a a specified instance object of RdbPredicatesV9.
         *
         * @param {ValuesBucket} values - Indicates Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param {RdbPredicatesV9} predicates - Indicates the specified update condition by the instance object of  {@link RdbPredicatesV9}.
         * @returns {Promise<number>} return the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        update(values: ValuesBucket, predicates: RdbPredicatesV9): Promise<number>;

        /**
         * Updates data in the database based on a a specified instance object of RdbPredicatesV9.
         *
         * @param {string} table - Indicates the target table.
         * @param {ValuesBucket} values - Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param {DataSharePredicates} predicates - Indicates the specified update condition by the instance object of {@link dataSharePredicates.DataSharePredicates}.
         * @param {AsyncCallback<number>} callback - the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @systemapi
         * @since 9
         */
        update(table: string, values: ValuesBucket, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<number>): void;

        /**
         * Updates data in the database based on a a specified instance object of RdbPredicatesV9.
         *
         * @param {string} table - Indicates the target table.
         * @param {ValuesBucket} values - Indicates the row of data to be updated in the database.The key-value pairs are associated with column names of the database table.
         * @param {DataSharePredicates} predicates - Indicates the specified update condition by the instance object of {@link dataSharePredicates.DataSharePredicates}.
         * @returns {Promise<number>} return the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @systemapi
         * @since 9
         */
        update(table: string, values: ValuesBucket, predicates: dataSharePredicates.DataSharePredicates): Promise<number>;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicatesV9.
         *
         * @param {RdbPredicatesV9} predicates - the specified delete condition by the instance object of {@link RdbPredicatesV9}.
         * @param {AsyncCallback<number>} callback - the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        delete(predicates: RdbPredicatesV9, callback: AsyncCallback<number>): void;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicatesV9.
         *
         * @param {RdbPredicatesV9} predicates - the specified delete condition by the instance object of {@link RdbPredicatesV9}.
         * @returns {Promise<number>} return the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        delete(predicates: RdbPredicatesV9): Promise<number>;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicatesV9.
         *
         * @param {string} table - Indicates the target table.
         * @param {DataSharePredicates} predicates - the specified delete condition by the instance object of {@link dataSharePredicates.DataSharePredicates}.
         * @param {AsyncCallback<number>} callback - the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @systemapi
         * @since 9
         */
        delete(table: string, predicates: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<number>): void;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicatesV9.
         *
         * @param {string} table - Indicates the target table.
         * @param {DataSharePredicates} predicates - the specified delete condition by the instance object of {@link dataSharePredicates.DataSharePredicates}.
         * @param {AsyncCallback<number>} callback - the number of affected rows.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @systemapi
         * @since 9
         */
        delete(table: string, predicates: dataSharePredicates.DataSharePredicates): Promise<number>;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @param {RdbPredicatesV9} predicates - the specified query condition by the instance object of {@link RdbPredicatesV9}.
         * @param {Array<string>} columns - the columns to query. If the value is empty array, the query applies to all columns.
         * @param {AsyncCallback<ResultSetV9>} callback - the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        query(predicates: RdbPredicatesV9, columns: Array<string>, callback: AsyncCallback<ResultSetV9>): void;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @param {RdbPredicatesV9} predicates - the specified query condition by the instance object of {@link RdbPredicatesV9}.
         * @param {Array<string>} columns - the columns to query. If the value is null, the query applies to all columns.
         * @returns {Promise<ResultSetV9>} return the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        query(predicates: RdbPredicatesV9, columns ?: Array<string>): Promise<ResultSetV9>;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @param {string} table - Indicates the target table.
         * @param {dataSharePredicates.DataSharePredicates} predicates - the specified query condition by the instance object of {@link dataSharePredicates.DataSharePredicates}.
         * @param {Array<string>} columns - the columns to query. If the value is empty array, the query applies to all columns.
         * @param {AsyncCallback<ResultSetV9>} callback - the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @systemapi
         * @since 9
         */
        query(table: string, predicates: dataSharePredicates.DataSharePredicates, columns: Array<string>, callback: AsyncCallback<ResultSetV9>): void;

        /**
         * Queries data in the database based on specified conditions.
         *
         * @param {string} table - Indicates the target table.
         * @param {dataSharePredicates.DataSharePredicates} predicates - the specified query condition by the instance object of {@link dataSharePredicates.DataSharePredicates}.
         * @param {Array<string>} columns - the columns to query. If the value is null, the query applies to all columns.
         * @returns {Promise<ResultSetV9>} return the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @systemapi
         * @since 9
         */
        query(table: string, predicates: dataSharePredicates.DataSharePredicates, columns ?: Array<string>): Promise<ResultSetV9>;

        /**
         * Queries remote data in the database based on specified conditions before Synchronizing Data.
         *
         * @param {string} device - Indicates specified remote device.
         * @param {string} table - Indicates the target table.
         * @param {RdbPredicatesV9} predicates - the specified remote remote query condition by the instance object of {@link RdbPredicatesV9}.
         * @param {Array<string>} columns - the columns to remote query. If the value is empty array, the remote query applies to all columns.
         * @param {AsyncCallback<ResultSetV9>} callback - the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        remoteQuery(device: string, table: string, predicates: RdbPredicatesV9, columns: Array<string>, callback: AsyncCallback<ResultSetV9>): void;

        /**
         * Queries remote data in the database based on specified conditions before Synchronizing Data.
         *
         * @param {string} device - Indicates specified remote device.
         * @param {string} table - Indicates the target table.
         * @param {RdbPredicatesV9} predicates - the specified remote remote query condition by the instance object of {@link RdbPredicatesV9}.
         * @param {Array<string>} columns - the columns to remote query. If the value is empty array, the remote query applies to all columns.
         * @returns {Promise<ResultSetV9>} return the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        remoteQuery(device: string, table: string, predicates: RdbPredicatesV9, columns: Array<string>): Promise<ResultSetV9>;

        /**
         * Queries data in the database based on SQL statement.
         *
         * @param {string} sql - Indicates the SQL statement to execute.
         * @param {Array<ValueType>} bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
         * @param {AsyncCallback<ResultSetV9>} callback - the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        querySql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<ResultSetV9>): void;

        /**
         * Deletes data from the database based on a specified instance object of RdbPredicatesV9.
         *
         * @param {string} sql - Indicates the SQL statement to execute.
         * @param {Array<ValueType>} bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
         * @returns {Promise<ResultSetV9>} return the {@link ResultSetV9} object if the operation is successful.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        querySql(sql: string, bindArgs ?: Array<ValueType>): Promise<ResultSetV9>;

        /**
         * Executes an SQL statement that contains specified parameters but returns no value.
         *
         * @param {string} sql - Indicates the SQL statement to execute.
         * @param {Array<ValueType>} bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
         * @param {AsyncCallback<void>} callback - the callback of executeSql.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        executeSql(sql: string, bindArgs: Array<ValueType>, callback: AsyncCallback<void>): void;

        /**
         * Executes an SQL statement that contains specified parameters but returns no value.
         *
         * @param {string} sql - Indicates the SQL statement to execute.
         * @param {Array<ValueType>} bindArgs - Indicates the {@link ValueType} values of the parameters in the SQL statement. The values are strings.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        executeSql(sql: string, bindArgs ?: Array<ValueType>): Promise<void>;

        /**
         * BeginTransaction before execute your sql.
         *
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        beginTransaction(): void;

        /**
         * Commit the the sql you have executed.
         *
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        commit(): void;

        /**
         * Roll back the sql you have already executed.
         *
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        rollBack(): void;

        /**
         * Backs up a database in a specified name.
         *
         * @param {string} destName - Indicates the name that saves the database backup.
         * @param {AsyncCallback<void>} callback - the callback of backup.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        backup(destName: string, callback: AsyncCallback<void>): void;

        /**
         * Backs up a database in a specified name.
         *
         * @param {string} destName - Indicates the name that saves the database backup.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        backup(destName: string): Promise<void>;

        /**
         * Restores a database from a specified database file.
         *
         * @param {string} srcName - Indicates the name that saves the database file.
         * @param {AsyncCallback<void>} callback - the callback of restore.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        restore(srcName: string, callback: AsyncCallback<void>): void;

        /**
         * Restores a database from a specified database file.
         *
         * @param {string} srcName - Indicates the name that saves the database file.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        restore(srcName: string): Promise<void>;

        /**
         * Set table to be distributed table.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {Array<string>} tables - Indicates the tables name you want to set.
         * @param {AsyncCallback<void>} callback - the callback of setDistributedTables.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        setDistributedTables(tables: Array<string>, callback: AsyncCallback<void>): void;

        /**
         * Set table to be distributed table.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {Array<string>} tables - Indicates the tables name you want to set.
         * @returns {Promise<void>} the promise returned by the function.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        setDistributedTables(tables: Array<string>): Promise<void>;

        /**
         * Obtain distributed table name of specified remote device according to local table name.
         * When query remote device database, distributed table name is needed.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string} device - Indicates the remote device.
         * @param {AsyncCallback<string>} callback - {string}: the distributed table name.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        obtainDistributedTableName(device: string, table: string, callback: AsyncCallback<string>): void;

        /**
         * Obtain distributed table name of specified remote device according to local table name.
         * When query remote device database, distributed table name is needed.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string} device - Indicates the remote device.
         * @returns {Promise<string>} {string}: the distributed table name.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        obtainDistributedTableName(device: string, table: string): Promise<string>;

        /**
         * Sync data between devices.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string} device - Indicates the remote device.
         * @param {AsyncCallback<Array<[string, number]>>} callback - {Array<[string, number]>}: devices sync status array, {string}: device id, {number}: device sync status.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        sync(mode: SyncMode, predicates: RdbPredicatesV9, callback: AsyncCallback<Array<[ string, number ]>>): void;

        /**
         * Sync data between devices.
         *
         * @permission ohos.permission.DISTRIBUTED_DATASYNC
         * @param {string} device - Indicates the remote device.
         * @returns {Promise<Array<[string, number]>>} {Array<[string, number]>}: devices sync status array, {string}: device id, {number}: device sync status.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        sync(mode: SyncMode, predicates: RdbPredicatesV9): Promise<Array<[ string, number ]>>;

        /**
         * Registers an observer for the database. When data in the distributed database changes,
         * the callback will be invoked.
         *
         * @param {string} event - Indicates the event must be string 'dataChange'.
         * @param {SubscribeType} type - Indicates the subscription type, which is defined in {@link SubscribeType}.
         * @param {AsyncCallback<Array<string>>} observer - {Array<string>}: the observer of data change events in the distributed database.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        on(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;

        /**
         * Remove specified observer of specified type from the database.
         *
         * @param {string} event - Indicates the event must be string 'dataChange'.
         * @param {SubscribeType} type - Indicates the subscription type, which is defined in {@link SubscribeType}.
         * @param {AsyncCallback<Array<string>>} observer - {Array<string>}: the data change observer already registered.
         * @throws {BusinessError} 401 - if the parameter type is incorrect.
         * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
         * @since 9
         */
        off(event: 'dataChange', type: SubscribeType, observer: Callback<Array<string>>): void;
    }

    /**
     * Indicates possible value types
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     */
    type ValueType = number | string | boolean;

    /**
     * Values in buckets are stored in key-value pairs
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     */
    type ValuesBucket = { [key:string]: ValueType | Uint8Array | null;
}

/**
 * Manages relational database configurations.
 *
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.data.rdb.StoreConfigV9
 */
interface StoreConfig {
    name: string;
}

/**
 * Manages relational database configurations.
 *
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 9
 */
interface StoreConfigV9 {
    /**
     * The database name.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    name: string;

    /**
     * Specifies whether the database is encrypted.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    securityLevel: SecurityLevel;

    /**
     * Specifies whether the database is encrypted.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    encrypt ?: boolean;
}

/**
 * Manages relational database configurations.
 *
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 7
 * @deprecated since 9
 * @useinstead ohos.data.rdb.RdbPredicatesV9
 */
class RdbPredicates {
    /**
     * A parameterized constructor used to create an RdbPredicates instance.
     *
     * @param {string} name - Indicates the table name of the database.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.constructor
     */
    constructor(name: string)

    /**
     * Sync data between devices.
     * When query database, this function should not be called.
     *
     * @param {Array<string>} devices - Indicates specified remote devices.
     * @returns {RdbPredicatesV9} -  the {@link RdbPredicatesV9} self.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.inDevices
     */
    inDevices(devices: Array<string>): RdbPredicates;

    /**
     * Specify all remote devices which connect to local device when syncing distributed database.
     * When query database, this function should not be called.
     *
     * @returns {RdbPredicates} -  the {@link RdbPredicates} self.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 8
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.inAllDevices
     */
    inAllDevices(): RdbPredicates;

    /**
     * Configure the RdbPredicatesV9 to match the field whose data type is ValueType and value is equal
     * to a specified value.
     * This method is similar to = of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns {RdbPredicates} - the {@link RdbPredicates} self.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.equalTo
     */
    equalTo(field: string, value: ValueType): RdbPredicates;

    /**
     * Configure the RdbPredicatesV9 to match the field whose data type is ValueType and value is not equal to
     * a specified value.
     * This method is similar to != of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns {RdbPredicates} - the {@link RdbPredicates} self.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.notEqualTo
     */
    notEqualTo(field: string, value: ValueType): RdbPredicates;

    /**
     * Adds a left parenthesis to the RdbPredicates.
     * This method is similar to ( of the SQL statement and needs to be used together with endWrap().
     *
     * @returns {RdbPredicates} - the {@link RdbPredicates} with the left parenthesis.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.beginWrap
     */
    beginWrap(): RdbPredicates;

    /**
     * Adds a right parenthesis to the RdbPredicates.
     * This method is similar to ) of the SQL statement and needs to be used together
     *
     * with beginWrap().
     * @returns {RdbPredicates} - the {@link RdbPredicates} with the right parenthesis.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.endWrap
     */
    endWrap(): RdbPredicates;

    /**
     * Adds an or condition to the RdbPredicates.
     * This method is similar to or of the SQL statement.
     *
     * @returns Returns the {@link RdbPredicates} with the or condition.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.or
     */
    or(): RdbPredicates;

    /**
     * Adds an and condition to the RdbPredicates.
     * This method is similar to or of the SQL statement.
     *
     * @returns Returns the {@link RdbPredicates} with the or condition.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.and
     */
    and(): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the field whose data type is string and value
     * contains a specified value.
     * This method is similar to contains of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns {RdbPredicates} - the {@link RdbPredicates} self.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.contains
     */
    contains(field: string, value: string): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the field whose data type is string and value starts
     * with a specified string.
     * This method is similar to value% of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns {RdbPredicates} - the {@link RdbPredicates} self.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.beginsWith
     */
    beginsWith(field: string, value: string): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the field whose data type is string and value
     * ends with a specified string.
     * This method is similar to %value of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns {RdbPredicates} - the {@link RdbPredicates} self.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.endsWith
     */
    endsWith(field: string, value: string): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the fields whose value is null.
     * This method is similar to is null of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @returns {RdbPredicates} - the {@link RdbPredicates} self.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.isNull
     */
    isNull(field: string): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the specified fields whose value is not null.
     * This method is similar to is not null of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @returns {RdbPredicates} - the {@link RdbPredicates} self.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.isNotNull
     */
    isNotNull(field: string): RdbPredicates;

    /**
     * Configure the RdbPredicates to match the fields whose data type is string and value is
     * similar to a specified string.
     * This method is similar to like of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns {RdbPredicates} - the {@link RdbPredicates} that match the specified field.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.like
     */
    like(field: string, value: string): RdbPredicates;

    /**
     * Configure RdbPredicates to match the specified field whose data type is string and the value contains
     * a wildcard.
     * Different from like, the input parameters of this method are case-sensitive.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns {RdbPredicates} - the SQL statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.glob
     */
    glob(field: string, value: string): RdbPredicates;

    /**
     * Configure RdbPredicates to match the specified field whose data type is string and the value contains
     * a wildcard.
     *
     * @param {string} field - Indicates the column name.
     * @param {ValueType} low - Indicates the minimum value.
     * @param {ValueType} high - Indicates the maximum value.
     * @returns {RdbPredicates} - the SQL statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.between
     */
    between(field: string, low: ValueType, high: ValueType): RdbPredicates;

    /**
     * Configure RdbPredicates to match the specified field whose data type is int and value is
     * out of a given range.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} low - Indicates the minimum value.
     * @param {ValueType} high - Indicates  the maximum value to.
     * @returns {RdbPredicates} - the SQL statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.notBetween
     */
    notBetween(field: string, low: ValueType, high: ValueType): RdbPredicates;

    /**
     * Restricts the value of the field to be greater than the specified value.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns {RdbPredicates} - the SQL query statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.greaterThan
     */
    greaterThan(field: string, value: ValueType): RdbPredicates;

    /**
     * Restricts the value of the field to be smaller than the specified value.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns {RdbPredicates} - the SQL query statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.lessThan
     */
    lessThan(field: string, value: ValueType): RdbPredicates;

    /**
     * Restricts the value of the field to be greater than or equal to the specified value.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns {RdbPredicates} - the SQL query statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.greaterThanOrEqualTo
     */
    greaterThanOrEqualTo(field: string, value: ValueType): RdbPredicates;

    /**
     * Restricts the value of the field to be smaller than or equal to the specified value.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicates}.
     * @returns {RdbPredicates} - the SQL query statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.lessThanOrEqualTo
     */
    lessThanOrEqualTo(field: string, value: ValueType): RdbPredicates;

    /**
     * Restricts the ascending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @param {string} field - Indicates the column name for sorting the return list.
     * @returns {RdbPredicates} - the SQL query statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.orderByAsc
     */
    orderByAsc(field: string): RdbPredicates;

    /**
     * Restricts the descending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @param {string} field - Indicates the column name for sorting the return list.
     * @returns {RdbPredicates} - the SQL query statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.orderByDesc
     */
    orderByDesc(field: string): RdbPredicates;

    /**
     * Restricts each row of the query result to be unique.
     *
     * @returns {RdbPredicates} - the SQL query statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.distinct
     */
    distinct(): RdbPredicates;

    /**
     * Restricts the max number of return records.
     *
     * @param {number} value - Indicates the max length of the return list.
     * @returns {RdbPredicates} - the SQL query statement with the specified {@link RdbPredicates}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.limitAs
     */
    limitAs(value: number): RdbPredicates;

    /**
     * Configure RdbPredicatesV9 to specify the start position of the returned result.
     * Use this method together with limit(int).
     *
     * @param {number} rowOffset - Indicates the start position of the returned result. The value is a positive integer.
     * @returns {RdbPredicatesV9} - the SQL query statement with the specified {@link RdbPredicatesV9}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.offsetAs
     */
    offsetAs(rowOffset: number): RdbPredicates;

    /**
     * Configure RdbPredicatesV9 to group query results by specified columns.
     *
     * @param {Array<string>} fields - Indicates the specified columns by which query results are grouped.
     * @returns {RdbPredicatesV9} - the SQL query statement with the specified {@link RdbPredicatesV9}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.groupBy
     */
    groupBy(fields: Array<string>): RdbPredicates;

    /**
     * Configure RdbPredicatesV9 to specify the index column.
     * Before using this method, you need to create an index column.
     *
     * @param {string} field - Indicates the name of the index column.
     * @returns {RdbPredicatesV9} - the SQL statement with the specified {@link RdbPredicatesV9}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.indexedBy
     */
    indexedBy(field: string): RdbPredicates;

    /**
     * Configure RdbPredicatesV9 to match the specified field whose data type is ValueType array and values
     * are within a given range.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {Array<ValueType>} value - Indicates the values to match with {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the SQL statement with the specified {@link RdbPredicatesV9}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.in
     */
    in(field: string, value: Array<ValueType>): RdbPredicates;

    /**
     * Configure RdbPredicatesV9 to match the specified field whose data type is ValueType array and values
     * are out of a given range.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {Array<ValueType>} value - Indicates the values to match with {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the SQL statement with the specified {@link RdbPredicatesV9}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 7
     * @deprecated since 9
     * @useinstead ohos.data.rdb.RdbPredicatesV9.notIn
     */
    notIn(field: string, value: Array<ValueType>): RdbPredicates;
}

/**
 * Manages relational database configurations.
 *
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 9
 */
class RdbPredicatesV9 {
    /**
     * A parameterized constructor used to create an RdbPredicates instance.
     *
     * @param {string} name - Indicates the table name of the database.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    constructor(name: string)

    /**
     * Sync data between devices.
     * When query database, this function should not be called.
     *
     * @param {Array<string>} devices - Indicates specified remote devices.
     * @returns {RdbPredicatesV9} -  the {@link RdbPredicatesV9} self.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    inDevices(devices: Array<string>): RdbPredicatesV9;

    /**
     * Specify all remote devices which connect to local device when syncing distributed database.
     * When query database, this function should not be called.
     *
     * @returns {RdbPredicatesV9} -  the {@link RdbPredicatesV9} self.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    inAllDevices(): RdbPredicatesV9;

    /**
     * Configure the RdbPredicatesV9 to match the field whose data type is ValueType and value is equal
     * to a specified value.
     * This method is similar to = of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the {@link RdbPredicatesV9} self.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    equalTo(field: string, value: ValueType): RdbPredicatesV9;

    /**
     * Configure the RdbPredicatesV9 to match the field whose data type is ValueType and value is not equal to
     * a specified value.
     * This method is similar to != of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the {@link RdbPredicatesV9} self.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    notEqualTo(field: string, value: ValueType): RdbPredicatesV9;

    /**
     * Adds a left parenthesis to the RdbPredicatesV9.
     * This method is similar to ( of the SQL statement and needs to be used together with endWrap().
     *
     * @returns {RdbPredicatesV9} - the {@link RdbPredicatesV9} with the left parenthesis.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    beginWrap(): RdbPredicatesV9;

    /**
     * Adds a right parenthesis to the RdbPredicatesV9.
     * This method is similar to ) of the SQL statement and needs to be used together
     *
     * with beginWrap().
     * @returns {RdbPredicatesV9} - the {@link RdbPredicatesV9} with the right parenthesis.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    endWrap(): RdbPredicatesV9;

    /**
     * Adds an or condition to the RdbPredicatesV9.
     * This method is similar to or of the SQL statement.
     *
     * @returns Returns the {@link RdbPredicatesV9} with the or condition.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    or(): RdbPredicatesV9;

    /**
     * Adds an and condition to the RdbPredicatesV9.
     * This method is similar to or of the SQL statement.
     *
     * @returns Returns the {@link RdbPredicatesV9} with the or condition.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    and(): RdbPredicatesV9;

    /**
     * Configure the RdbPredicatesV9 to match the field whose data type is string and value
     * contains a specified value.
     * This method is similar to contains of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the {@link RdbPredicatesV9} self.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    contains(field: string, value: string): RdbPredicatesV9;

    /**
     * Configure the RdbPredicatesV9 to match the field whose data type is string and value starts
     * with a specified string.
     * This method is similar to value% of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the {@link RdbPredicatesV9} self.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    beginsWith(field: string, value: string): RdbPredicatesV9;

    /**
     * Configure the RdbPredicatesV9 to match the field whose data type is string and value
     * ends with a specified string.
     * This method is similar to %value of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the {@link RdbPredicatesV9} self.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    endsWith(field: string, value: string): RdbPredicatesV9;

    /**
     * Configure the RdbPredicatesV9 to match the fields whose value is null.
     * This method is similar to is null of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @returns {RdbPredicatesV9} - the {@link RdbPredicatesV9} self.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    isNull(field: string): RdbPredicatesV9;

    /**
     * Configure the RdbPredicatesV9 to match the specified fields whose value is not null.
     * This method is similar to is not null of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @returns {RdbPredicatesV9} - the {@link RdbPredicatesV9} self.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    isNotNull(field: string): RdbPredicatesV9;

    /**
     * Configure the RdbPredicatesV9 to match the fields whose data type is string and value is
     * similar to a specified string.
     * This method is similar to like of the SQL statement.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the {@link RdbPredicatesV9} that match the specified field.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    like(field: string, value: string): RdbPredicatesV9;

    /**
     * Configure RdbPredicatesV9 to match the specified field whose data type is string and the value contains
     * a wildcard.
     * Different from like, the input parameters of this method are case-sensitive.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the SQL statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    glob(field: string, value: string): RdbPredicatesV9;

    /**
     * Configure RdbPredicatesV9 to match the specified field whose data type is string and the value contains
     * a wildcard.
     *
     * @param {string} field - Indicates the column name.
     * @param {ValueType} low - Indicates the minimum value.
     * @param {ValueType} high - Indicates the maximum value.
     * @returns {RdbPredicatesV9} - the SQL statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    between(field: string, low: ValueType, high: ValueType): RdbPredicatesV9;

    /**
     * Configure RdbPredicatesV9 to match the specified field whose data type is int and value is
     * out of a given range.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} low - Indicates the minimum value.
     * @param {ValueType} high - Indicates  the maximum value to.
     * @returns {RdbPredicatesV9} - the SQL statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    notBetween(field: string, low: ValueType, high: ValueType): RdbPredicatesV9;

    /**
     * Restricts the value of the field to be greater than the specified value.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the SQL query statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    greaterThan(field: string, value: ValueType): RdbPredicatesV9;

    /**
     * Restricts the value of the field to be smaller than the specified value.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the SQL query statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    lessThan(field: string, value: ValueType): RdbPredicatesV9;

    /**
     * Restricts the value of the field to be greater than or equal to the specified value.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the SQL query statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    greaterThanOrEqualTo(field: string, value: ValueType): RdbPredicatesV9;

    /**
     * Restricts the value of the field to be smaller than or equal to the specified value.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {ValueType} value - Indicates the value to match with the {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the SQL query statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    lessThanOrEqualTo(field: string, value: ValueType): RdbPredicatesV9;

    /**
     * Restricts the ascending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @param {string} field - Indicates the column name for sorting the return list.
     * @returns {RdbPredicatesV9} - the SQL query statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    orderByAsc(field: string): RdbPredicatesV9;

    /**
     * Restricts the descending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @param {string} field - Indicates the column name for sorting the return list.
     * @returns {RdbPredicatesV9} - the SQL query statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    orderByDesc(field: string): RdbPredicatesV9;

    /**
     * Restricts each row of the query result to be unique.
     *
     * @returns {RdbPredicatesV9} - the SQL query statement with the specified {@link RdbPredicatesV9}.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    distinct(): RdbPredicatesV9;

    /**
     * Restricts the max number of return records.
     *
     * @param {number} value - Indicates the max length of the return list.
     * @returns {RdbPredicatesV9} - the SQL query statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    limitAs(value: number): RdbPredicatesV9;

    /**
     * Configure RdbPredicatesV9 to specify the start position of the returned result.
     * Use this method together with limit(int).
     *
     * @param {number} rowOffset - Indicates the start position of the returned result. The value is a positive integer.
     * @returns {RdbPredicatesV9} - the SQL query statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    offsetAs(rowOffset: number): RdbPredicatesV9;

    /**
     * Configure RdbPredicatesV9 to group query results by specified columns.
     *
     * @param {Array<string>} fields - Indicates the specified columns by which query results are grouped.
     * @returns {RdbPredicatesV9} - the SQL query statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    groupBy(fields: Array<string>): RdbPredicatesV9;

    /**
     * Configure RdbPredicatesV9 to specify the index column.
     * Before using this method, you need to create an index column.
     *
     * @param {string} field - Indicates the name of the index column.
     * @returns {RdbPredicatesV9} - the SQL statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    indexedBy(field: string): RdbPredicatesV9;

    /**
     * Configure RdbPredicatesV9 to match the specified field whose data type is ValueType array and values
     * are within a given range.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {Array<ValueType>} value - Indicates the values to match with {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the SQL statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    in(field: string, value: Array<ValueType>): RdbPredicatesV9;

    /**
     * Configure RdbPredicatesV9 to match the specified field whose data type is ValueType array and values
     * are out of a given range.
     *
     * @param {string} field - Indicates the column name in the database table.
     * @param {Array<ValueType>} value - Indicates the values to match with {@link RdbPredicatesV9}.
     * @returns {RdbPredicatesV9} - the SQL statement with the specified {@link RdbPredicatesV9}.
     * @throws {BusinessError} 401 - if the parameter type is incorrect.
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 9
     */
    notIn(field: string, value: Array<ValueType>): RdbPredicatesV9;
}

export type ResultSet = _ResultSet;
export type ResultSetV9 = _ResultSetV9;
}

export default rdb;
