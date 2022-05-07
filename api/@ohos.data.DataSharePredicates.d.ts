/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * Manages relational database configurations.
 *
 * @since 9
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @import import data_dataShare from '@ohos.data.dataShare';
 * @permission N/A
 */
export default class DataSharePredicates {
    /**
     * Configures the DataSharePredicates to match the field whose data type is ValueType and value is equal
     * to a specified value.
     *
     * @note This method is similar to = of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    equalTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the field whose data type is ValueType and value is unequal to
     * a specified value.
     *
     * @note This method is similar to != of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    notEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Adds a left parenthesis to the DataSharePredicates.
     *
     * @note This method is similar to ( of the SQL statement and needs to be used together with endWrap().
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @return Returns the DataSharePredicates with the left parenthesis.
     */
    beginWrap(): DataSharePredicates;

    /**
     * Adds a right parenthesis to the DataSharePredicates.
     *
     * @note This method is similar to ) of the SQL statement and needs to be used together
     * with beginWrap().
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @return Returns the DataSharePredicates with the right parenthesis.
     */
    endWrap(): DataSharePredicates;

    /**
     * Adds an or condition to the DataSharePredicates.
     *
     * @note This method is similar to or of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @return Returns the DataSharePredicates with the or condition.
     */
    or(): DataSharePredicates;

    /**
     * Adds an and condition to the DataSharePredicates.
     *
     * @note This method is similar to and of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @return Returns the DataSharePredicates with the and condition.
     */
    and(): DataSharePredicates;
    /**
     * Configures the DataSharePredicates to match the field whose data type is string and value
     * contains a specified value.
     *
     * @note This method is similar to contains of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    contains(field: string, value: string): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the field whose data type is string and value starts
     * with a specified string.
     *
     * @note This method is similar to value% of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    beginsWith(field: string, value: string): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the field whose data type is string and value
     * ends with a specified string.
     *
     * @note This method is similar to %value of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    endsWith(field: string, value: string): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the fields whose value is null.
     *
     * @note This method is similar to is null of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    isNull(field: string): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the specified fields whose value is not null.
     *
     * @note This method is similar to is not null of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @return Returns the DataSharePredicates that match the specified field.
     */
    isNotNull(field: string): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the fields whose data type is string and value is
     * similar to a specified string.
     *
     * @note This method is similar to like of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates. The percent sign (%) in the value
     * is a wildcard (like * in a regular expression).
     * @return Returns the DataSharePredicates that match the specified field.
     */
    like(field: string, value: string): DataSharePredicates;

    /**
     * Configures the DataSharePredicates to match the fields whose data type is string and value is
     * similar to a specified string.
     *
     * @note This method is similar to unlike of the SQL statement.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with the DataSharePredicates. The percent sign (%) in the value
     * is a wildcard (like * in a regular expression).
     * @return Returns the DataSharePredicates that match the specified field.
     */
     unlike(field: string, value: string): DataSharePredicates;

    /**
     * Configures DataSharePredicates to match the specified field whose data type is string and the value contains
     * a wildcard.
     *
     * @note Different from like, the input parameters of this method are case-sensitive.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @param value Indicates the value to match with DataSharePredicates.
     * @return Returns the SQL statement with the specified DataSharePredicates.
     */
    glob(field: string, value: string): DataSharePredicates;

    /**
     * Restricts the value of the field to the range between low value and high value.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name.
     * @param low Indicates the minimum value.
     * @param high Indicates the maximum value.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    between(field: string, low: ValueType, high: ValueType): DataSharePredicates;

    /**
     * Configures DataSharePredicates to match the specified field whose data type is int and value is
     * out of a given range.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @param low Indicates the minimum value to match with DataSharePredicates}.
     * @param high Indicates the maximum value to match with DataSharePredicates}.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    notBetween(field: string, low: ValueType, high: ValueType): DataSharePredicates;

    /**
     * Restricts the value of the field to be greater than the specified value.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name.
     * @param value Indicates the String field.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    greaterThan(field: string, value: ValueType): DataSharePredicates;

    /**
     * Restricts the value of the field to be smaller than the specified value.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name.
     * @param value Indicates the String field.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    lessThan(field: string, value: ValueType): DataSharePredicates;

    /**
     * Restricts the value of the field to be greater than or equal to the specified value.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name.
     * @param value Indicates the String field.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    greaterThanOrEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Restricts the value of the field to be smaller than or equal to the specified value.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name.
     * @param value Indicates the String field.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    lessThanOrEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Restricts the ascending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name for sorting the return list.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    orderByAsc(field: string): DataSharePredicates;

    /**
     * Restricts the descending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name for sorting the return list.
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    orderByDesc(field: string): DataSharePredicates;

    /**
     * Restricts each row of the query result to be unique.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @return Returns the SQL query statement with the specified DataSharePredicates.
     */
    distinct(): DataSharePredicates;

    /**
     * Construct a query object to specify the number of results and the starting position.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param total Represents the specified number of results.
     * @param offset Indicates the starting position.
     * @return Returns the query object.
     */
    limit(total: number, offset: number): DataSharePredicates;

    /**
     * Configures DataSharePredicates to specify the start position of the returned result.
     *
     * @note Use this method together with limit(int).
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param rowOffset Indicates the start position of the returned result. The value is a positive integer.
     * @return Returns the SQL query statement with the specified AbsPredicates.
     */
    offsetAs(rowOffset: number): DataSharePredicates;

    /**
     * Configures DataSharePredicates to group query results by specified columns.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param fields Indicates the specified columns by which query results are grouped.
     * @return Returns the DataSharePredicates with the specified columns by which query results are grouped.
     */
    groupBy(fields: Array<string>): DataSharePredicates;

    /**
     * Configures DataSharePredicates to specify the index column.
     *
     * @note Before using this method, you need to create an index column.
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param indexName Indicates the name of the index column.
     * @return Returns DataSharePredicates with the specified index column.
     */
    indexedBy(field: string): DataSharePredicates;

    /**
     * Configures DataSharePredicates to match the specified field whose data type is ValueType array and values
     * are within a given range.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @param values Indicates the values to match with DataSharePredicates.
     * @return Returns DataSharePredicates that matches the specified field.
     */
    in(field: string, value: Array<ValueType>): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} to match the specified field whose data type is String array and values
     * are out of a given range.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param field Indicates the column name in the database table.
     * @param values Indicates the values to match with DataSharePredicates.
     * @return Returns DataSharePredicates that matches the specified field.
     */
    notIn(field: string, value: Array<ValueType>): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} Creates a query condition using the specified key prefix.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param prefix Represents the specified key prefix.
     * @return Returns the query object.
     */
    prefixKey(prefix: string): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} Sets a specified index
     * that will be preferentially used for DataSharePredicates.
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param index Indicates the index to set.
     * @return Returns the query object.
     */
    setSuggestIndex(index: string): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} Specify all remote devices which connect to local device
     * when syncing distributed database.
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @return Returns DataSharePredicates that matches the specified field.
     */
    inAllDevices(): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} Specify remote devices when syncing distributed database.
     * when syncing distributed database.
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param devices The remote device ID within the specified network.
     * @return Returns the predicate that matches the specified field.
     */
    inDevices(devices: Array<string>): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} Public query reset.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @return Returns the reset query object.
     */
    reset(): DataSharePredicates;

    /**
     * Configures {@code DataSharePredicates} Set a table name.
     *
     * @note N/A
     * @since 9
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @param name Table name.
     * @return Returns the query object.
     */
    setTableName(name:string): DataSharePredicates;
}
/**
 * Indicates possible value types
 * @since 9
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @permission N/A
 */
type ValueType = number | string | boolean;
