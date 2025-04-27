/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import { ValueType } from './@ohos.data.ValuesBucket';

/**
 * This module provides data share services based on the ExtensionAbility.
 *
 * @namespace dataSharePredicates
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @StageModelOnly
 * @crossplatform
 * @since 20
 */
declare namespace dataSharePredicates {
  /**
   * Manages relational database configurations.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @StageModelOnly
   * @crossplatform
   * @since 20
   */
  export class DataSharePredicates {
    /**
     * Configure the DataSharePredicates to match the field whose data type is ValueType and value is equal
     * to a specified value.
     * This method is similar to = of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the DataSharePredicates.
     * @returns { DataSharePredicates } Returns the DataSharePredicates that match the specified field.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform
     * @since 20
     */
    equalTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Configure the DataSharePredicates to match the field whose data type is ValueType and value is unequal to
     * a specified value.
     * This method is similar to != of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { ValueType } value - Indicates the value to match with the DataSharePredicates.
     * @returns { DataSharePredicates } Returns the DataSharePredicates that match the specified field.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 20
     */
    notEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Adds a left parenthesis to the DataSharePredicates.
     * This method is similar to ( of the SQL statement and needs to be used together with endWrap().
     *
     * @returns { DataSharePredicates } Returns the DataSharePredicates with the left parenthesis.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 20
     */
    beginWrap(): DataSharePredicates;

    /**
     * Adds a right parenthesis to the DataSharePredicates.
     * This method is similar to ) of the SQL statement and needs to be used together
     * with beginWrap().
     *
     * @returns { DataSharePredicates } Returns the DataSharePredicates with the right parenthesis.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 20
     */
    endWrap(): DataSharePredicates;

    /**
     * Adds an or condition to the DataSharePredicates.
     * This method is similar to or of the SQL statement.
     *
     * @returns { DataSharePredicates } Returns the DataSharePredicates with the or condition.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 20
     */
    or(): DataSharePredicates;

    /**
     * Adds an and condition to the DataSharePredicates.
     * This method is similar to and of the SQL statement.
     *
     * @returns { DataSharePredicates } Returns the DataSharePredicates with the and condition.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform
     * @since 20
     */
    and(): DataSharePredicates;

        /**
     * Configure the DataSharePredicates to match the field whose data type is string and value
     * contains a specified value.
     * This method is similar to contains of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { string } value - Indicates the value to match with the DataSharePredicates.
     * @returns { DataSharePredicates } Returns the DataSharePredicates that match the specified field.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9
     */
    contains(field: string, value: string): DataSharePredicates;

    /**
     * Configure the DataSharePredicates to match the fields whose data type is string and value is
     * similar to a specified string.
     * This method is similar to like of the SQL statement.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { string } value - Indicates the value to match with the DataSharePredicates. The percent sign (%) in the value
     * is a wildcard (like * in a regular expression).
     * @returns { DataSharePredicates } Returns the DataSharePredicates that match the specified field.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 20
     */
    like(field: string, value: string): DataSharePredicates;

    /**
     * Restricts the value of the field to be greater than the specified value.
     *
     * @param { string } field - Indicates the column name.
     * @param { ValueType } value - Indicates the String field.
     * @returns { DataSharePredicates } Returns the SQL query statement with the specified DataSharePredicates.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 20
     */
    greaterThan(field: string, value: ValueType): DataSharePredicates;

    /**
     * Restricts the value of the field to be smaller than the specified value.
     *
     * @param { string } field - Indicates the column name.
     * @param { ValueType } value - Indicates the String field.
     * @returns { DataSharePredicates } Returns the SQL query statement with the specified DataSharePredicates.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 20
     */
    lessThan(field: string, value: ValueType): DataSharePredicates;

    /**
     * Restricts the value of the field to be greater than or equal to the specified value.
     *
     * @param { string } field - Indicates the column name.
     * @param { ValueType } value - Indicates the String field.
     * @returns { DataSharePredicates } Returns the SQL query statement with the specified DataSharePredicates.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 20
     */
    greaterThanOrEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Restricts the ascending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @param { string } field - Indicates the column name for sorting the return list.
     * @returns { DataSharePredicates } Returns the SQL query statement with the specified DataSharePredicates.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform
     * @since 20
     */
    orderByAsc(field: string): DataSharePredicates;

    /**
     * Restricts the descending order of the return list. When there are several orders,
     * the one close to the head has the highest priority.
     *
     * @param { string } field - Indicates the column name for sorting the return list.
     * @returns { DataSharePredicates } Returns the SQL query statement with the specified DataSharePredicates.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform
     * @since 20
     */
    orderByDesc(field: string): DataSharePredicates;

    /**
     * Construct a query object to specify the number of results and the starting position.
     *
     * @param { number } total - Represents the specified number of results.
     * @param { number } offset - Indicates the starting position.
     * @returns { DataSharePredicates } Returns the query object.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform
     * @since 20
     */
    limit(total: number, offset: number): DataSharePredicates;

    /**
     * Configure {@code DataSharePredicates} to group query results by specified columns.
     *
     * @param { Array<string> } fields - Indicates the specified columns by which query results are grouped.
     * @returns { DataSharePredicates } Returns the DataSharePredicates with the specified columns by which query results are grouped.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 20
     */
    groupBy(fields: Array<string>): DataSharePredicates;

    /**
     * Configure {@code DataSharePredicates} to match the specified field whose data type is ValueType array and values
     * are within a given range.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { Array<ValueType> } value - Indicates the values to match with DataSharePredicates.
     * @returns { DataSharePredicates } Returns DataSharePredicates that matches the specified field.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform
     * @since 20
     */
    in(field: string, value: Array<ValueType>): DataSharePredicates;

    /**
     * Configure {@code DataSharePredicates} to match the specified field whose data type is String array and values
     * are out of a given range.
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { Array<ValueType> } value - Indicates the values to match with DataSharePredicates.
     * @returns { DataSharePredicates } Returns DataSharePredicates that matches the specified field.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 20
     */
    notIn(field: string, value: Array<ValueType>): DataSharePredicates;
  }
}

export default dataSharePredicates;
