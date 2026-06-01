/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * **DataSharePredicates** provides a filter object to query data in a database by using **DataShare** APIs. It is often
 * used to update, delete, and query data.
 *
 * The APIs provided by **DataSharePredicates** correspond to the filter criteria of the database. Before using the APIs
 * , you need to have basic database knowledge.
 *
 * **DataSharePredicates** applies to the following scenario:
 *
 * - It is used as a search criterion in the media file management service. For details, see
 * [FetchOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions} in the fetch options of the album
 * management. In this scenario, you do not need to pay attention to the database type.
 *
 * <!--Del-->
 *
 * - It is used as a search criterion when APIs of the
 * [RDB store](docroot://apis-arkdata/js-apis-data-relationalStore-sys.md) and
 * [KV store](docroot://apis-arkdata/js-apis-distributedKVStore-sys.md) are called. In this scenario, use the
 * corresponding predicate based on the database type.
 *
 * <!--DelEnd-->
 *
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @systemapi [since 9 - 9]
 * @publicapi [since 10]
 * @StageModelOnly
 * @crossplatform [since 12]
 * @atomicservice [since 20]
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace dataSharePredicates {
  /**
   * Provides APIs for setting different **DataSharePredicates** objects. This type is not multi-thread safe. If a
   * **DataSharePredicates** instance is operated by multiple threads at the same time in an application, use a lock for
   * it.
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @systemapi [since 9 - 9]
   * @publicapi [since 10]
   * @StageModelOnly
   * @crossplatform [since 12]
   * @atomicservice [since 20]
   * @since 9 dynamic
   * @since 23 static
   */
  class DataSharePredicates {
    /**
     * Creates a **DataSharePredicates** object to search for the records in the specified column that are equal to the
     * given value.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.
     * @param { ValueType } value - Value to match.If this parameter is set to **undefined** or **null**, the
     *     predicate used is invalid.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    equalTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that is not equal to the specified value.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in
     *     string, the matching result may not be as expected or an exception may be thrown when the predicate is used
     *     by the KV store and RDB store APIs.
     * @param { ValueType } value - Value to match.If this parameter is set to **undefined** or **null**, the
     *     predicate used is invalid.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    notEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Adds a left parenthesis to this **DataSharePredicates**. This API is similar to "(" in an SQL statement and must
     * be used with the right parenthesis.
     *
     * Currently, only RDB store supports this predicate.
     *
     * @returns { DataSharePredicates } **DataSharePredicates** object with a left parenthesis.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    beginWrap(): DataSharePredicates;

    /**
     * Adds a right parenthesis to this **DataSharePredicates**. This API is similar to ")" in an SQL statement and must
     * be used with the left parenthesis.
     *
     * Currently, only RDB store supports this predicate.
     *
     * @returns { DataSharePredicates } **DataSharePredicates** object with a right parenthesis.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    endWrap(): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to add the OR condition.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @returns { DataSharePredicates } **DataSharePredicates** object with the OR operator.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    or(): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to add the AND condition.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @returns { DataSharePredicates } **DataSharePredicates** object with the AND operator.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    and(): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that contains the specified value.
     *
     * Currently, only RDB store supports this predicate.
     *
     * @param { string } field - Column name in the database table.
     * @param { string } value - Value to match.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    contains(field: string, value: string): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that begins with the specified value.
     *
     * Currently, only RDB store supports this predicate.
     *
     * @param { string } field - Column name in the database table.
     * @param { string } value - Start value to match.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    beginsWith(field: string, value: string): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that ends with the specified value.
     *
     * Currently, only RDB store supports this predicate.
     *
     * @param { string } field - Column name in the database table.
     * @param { string } value - End value to match.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    endsWith(field: string, value: string): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data whose value is null.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    isNull(field: string): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data whose value is not null.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    isNotNull(field: string): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that matches the specified wildcard expression.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in
     *     string, the matching result may not be as expected or an exception may be thrown when the predicate is used
     *     by the KV store and RDB store APIs.
     * @param { string } value - Wildcard expression to match.In the expression, '%' represents zero, one, or more
     *     digits or characters, and '_' represents a single digit or character. It is case insensitive.If this
     *     parameter is set to **undefined** or **null**, the predicate used is invalid.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    like(field: string, value: string): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that does not match the specified wildcard expression.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.
     * @param { string } value - Wildcard expression to match.In the expression, '%' represents zero, one, or more
     *     digits or characters, and '_' represents a single digit or character. It is case insensitive.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    unlike(field: string, value: string): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that matches the specified wildcard expression.
     *
     * Currently, only RDB store supports this predicate.
     *
     * @param { string } field - Column name in the database table.
     * @param { string } value - Wildcard expression to match.In the expression, '*' represents zero, one, or more
     *     digits or characters, and '?' represents a single digit or character. It is case sensitive.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    glob(field: string, value: string): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that is within the specified range, including the
     * start and end values.
     *
     * Currently, only RDB store supports this predicate.
     *
     * @param { string } field - Column name in the database table.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in
     *     string, the matching result may not be as expected or an exception may be thrown when the predicate is used
     *     by the KV store and RDB store APIs.
     * @param { ValueType } low - Minimum value of the range to set.If **low** is set to a number, the matching
     *     range is specified based on the numeric order.If **low** is set to a string, the matching range is
     *     specified based on the lexicographical order.If **low** is set to boolean, the matching range is
     *     specified based on the numeric order.
     * @param { ValueType } high - Maximum value to match the **DataAbilityPredicates**.If **high** is set to a
     *     number, the matching range is specified based on the numeric order.If **high** is set to a string, the
     *     matching range is specified based on the lexicographical order.If **high** is set to boolean, the
     *     matching range is specified based on the numeric order.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    between(field: string, low: ValueType, high: ValueType): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that is out of the specified range, excluding the
     * start and end values.
     *
     * Currently, only RDB store supports this predicate.
     *
     * @param { string } field - Column name in the database table.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in
     *     string, the matching result may not be as expected or an exception may be thrown when the predicate is used
     *     by the KV store and RDB store APIs.
     * @param { ValueType } low - Minimum value of the range to set.If **low** is set to a number, the matching
     *     range is specified based on the numeric order.If **low** is set to a string, the matching range is
     *     specified based on the lexicographical order.If **low** is set to boolean, the matching range is
     *     specified based on the numeric order.
     * @param { ValueType } high - Maximum value to match the **DataAbilityPredicates**.If **high** is set to a
     *     number, the matching range is specified based on the numeric order.If **high** is set to a string, the
     *     matching range is specified based on the lexicographical order.If **high** is set to boolean, the
     *     matching range is specified based on the numeric order.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    notBetween(field: string, low: ValueType, high: ValueType): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that is greater than the specified value.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in
     *     string, the matching result may not be as expected or an exception may be thrown when the predicate is used
     *     by the KV store and RDB store APIs.
     * @param { ValueType } value - Value to match.If this parameter is set to **undefined** or **null**, the
     *     predicate used is invalid.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    greaterThan(field: string, value: ValueType): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that is less than the specified value.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.If field is null or undefined, the predicate
     *     configured by calling this API is invalid.If this parameter is set to **'null'** or **'undefined'** in
     *     string, the matching result may not be as expected or an exception may be thrown when the predicate is used
     *     by the KV store and RDB store APIs.
     * @param { ValueType } value - Value to match.If this parameter is set to **undefined** or **null**, the
     *     predicate used is invalid.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    lessThan(field: string, value: ValueType): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that is greater than or equal to the specified value.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in
     *     string, the matching result may not be as expected or an exception may be thrown.
     * @param { ValueType } value - Value to match.If this parameter is set to **undefined** or **null**, the
     *     predicate used is invalid.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    greaterThanOrEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that is less than or equal to the specified value.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in
     *     string, the matching result may not be as expected or an exception may be thrown when the predicate is used
     *     by the KV store and RDB store APIs.
     * @param { ValueType } value - Value to match.If this parameter is set to **undefined** or **null**, the
     *     predicate used is invalid.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    lessThanOrEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object that sorts records in ascending order.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    orderByAsc(field: string): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object that sorts data in descending order.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    orderByDesc(field: string): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to filter out duplicate data records.
     *
     * Currently, only RDB store supports this predicate.
     *
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    distinct(): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to specify the number of records in the result and the start position.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { int } total - Maximum number of records.If the KV store is used and **total** is **undefined** or
     *     **null**, the maximum number of records is 0. For details about the value range, see the description of this
     *     parameter in [limit]{@link @ohos.data.distributedKVStore:distributedKVStore.Query.limit}.If the RDB store
     *     is used and **total** is **undefined** or **null**, the maximum number of records is not limited. For details
     *     about the value range, see the description of this parameter in
     *     [limitAs]{@link @ohos.data.distributedKVStore:distributedKVStore.Query.limit}.
     * @param { int } offset - Start position of the query result.If this parameter is set to **undefined** or
     *     **null**, the start position is the beginning of the result set.For details about the value range in a KV
     *     store, see the description of this parameter in
     *     [limit]{@link @ohos.data.distributedKVStore:distributedKVStore.Query.limit}.For details about the value
     *     range in an RDB store, see the description of the **rowOffset** parameter in
     *     [offsetAs]{@link @ohos.data.relationalStore:relationalStore.RdbPredicates.offsetAs}.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    limit(total: int, offset: int): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object group the records according to the specified fields.
     *
     * Currently, only RDB store supports this predicate.
     *
     * @param { Array<string> } fields - Names of the columns by which the records are grouped.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    groupBy(fields: Array<string>): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to list data by the specified index. Before using this API, ensure that
     * the index column exists.
     *
     * Currently, only RDB store supports this predicate.
     *
     * @param { string } field - Name of the index column.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    indexedBy(field: string): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that is within the specified range.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.
     * @param { Array<ValueType> } value - Array of the values to match.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     */
    in(field: string, value: Array<ValueType>): DataSharePredicates;

    /**
     * Configure {@code DataSharePredicates} to match the specified field whose data type is ValueType array and values
     * are within a given range.
     * Currently only used for RDB and KVDB(schema).
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { Array<ValueType> } value - Indicates the values to match with DataSharePredicates.
     * @returns { DataSharePredicates } Returns DataSharePredicates that matches the specified field.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @stagemodelonly
     * @since 23 static
     */
    inValues(field: string, value: Array<ValueType>): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data that is not in the specified value.
     *
     * Currently, both the RDB store and KV store support this predicate.
     *
     * @param { string } field - Column name in the database table.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.If this parameter is set to **'null'** or **'undefined'** in
     *     string, the matching result may not be as expected or an exception may be thrown when the predicate is used
     *     by the KV store and RDB store APIs.
     * @param { Array<ValueType> } value - Array of the values to match.If this parameter is set to **undefined** or
     *     **null**, the predicate used is invalid.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     */
    notIn(field: string, value: Array<ValueType>): DataSharePredicates;

    /**
     * Configure {@code DataSharePredicates} to match the specified field whose data type is String array and values
     * are out of a given range.
     * Currently only used for RDB and KVDB(schema).
     *
     * @param { string } field - Indicates the column name in the database table.
     * @param { Array<ValueType> } value - Indicates the values to match with DataSharePredicates.
     * @returns { DataSharePredicates } Returns DataSharePredicates that matches the specified field.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @stagemodelonly
     * @since 23 static
     */
    notInValues(field: string, value: Array<ValueType>): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data with the specified key prefix.
     *
     * Currently, only the KVDB supports this **DataSharePredicates** object.
     *
     * @param { string } prefix - Key prefix to match.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    prefixKey(prefix: string): DataSharePredicates;

    /**
     * Creates a **DataSharePredicates** object to match the data whose keys are within the given range.
     *
     * Currently, only the KVDB supports this **DataSharePredicates** object.
     *
     * @param { Array<string> } keys - Array of the keys to match.
     * @returns { DataSharePredicates } **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    inKeys(keys: Array<string>): DataSharePredicates;
  }
}

export default dataSharePredicates;
