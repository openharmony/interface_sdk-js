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
 * **谓词(DataSharePredicates)** 是开发者通过DataShare查询数据库中的数据所使用的筛选条件，经常被应用在更新数据、删除数据和查询数据中。
 *
 * 谓词的接口函数与数据库的筛选条件一一对应，开发者在使用前需了解数据库相关知识。
 *
 * > **说明**
 * > 谓词(DataSharePredicates)的使用场景如下：
 * > - 用于在媒体文件管理服务作为检索条件使用，参考相册管理模块检索条件[FetchOptions]{@link
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
   * 提供用于不同实现不同查询方法的数据共享谓词。该类型不是多线程安全的，如果应用中存在多线程同时操作该类派生出的实例，注意加锁保护。
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
     * 该接口用于配置谓词以匹配值等于指定值的字段。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。field为undefined或者null时，此次调用接口配置的谓词无效。
     * @param { ValueType } value - 指示要与谓词匹配的值。value为undefined或者null时，此次调用接口配置的谓词无效。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    equalTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值不等于指定值的字段。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。当field为undefined或null时，此次调用接口配置的谓词无效。当field为字符串'null'或'undefined'时，键
     *     值型数据库和关系型数据库接口使用该谓词时，可能匹配结果非预期或抛出异常。
     * @param { ValueType } value - 指示要与谓词匹配的值。value为undefined或null时，此次调用接口配置的谓词无效。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    notEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * 该接口用于向谓词添加左括号，相当于sql语句的“(”，必须和右括号一起使用。
     *
     * 目前仅关系型数据库支持该谓词。
     *
     * @returns { DataSharePredicates } 返回带有左括号的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    beginWrap(): DataSharePredicates;

    /**
     * 该接口用于向谓词添加右括号，相当于sql语句的“)”，必须和左括号一起使用。
     *
     * 目前仅关系型数据库支持该谓词。
     *
     * @returns { DataSharePredicates } 返回带有右括号的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    endWrap(): DataSharePredicates;

    /**
     * 该接口用于将或条件添加到谓词中。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @returns { DataSharePredicates } 返回带有或条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    or(): DataSharePredicates;

    /**
     * 该接口用于将和条件添加到谓词中。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @returns { DataSharePredicates } 返回带有和条件的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    and(): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值包含指定字段的字段。
     *
     * 目前仅关系型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。
     * @param { string } value - 指示值中包含该字段。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    contains(field: string, value: string): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值以指定字符串起始的字段。
     *
     * 目前仅关系型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。
     * @param { string } value - 指示值以该字符串起始。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    beginsWith(field: string, value: string): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值以指定字符串结尾的字段。
     *
     * 目前仅关系型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。
     * @param { string } value - 指示值以该字符串结尾。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    endsWith(field: string, value: string): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值为null的字段。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。
     * @returns { DataSharePredicates }      **DataSharePredicates** object created.
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    isNull(field: string): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值不为null的字段。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    isNotNull(field: string): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配指定通配符表达式的字段。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。field为undefined或null时，此次调用接口配置的谓词无效。当field为字符串'null'或'undefined'时，键值
     *     型数据库和关系型数据库接口使用该谓词时，可能匹配结果非预期或抛出异常。
     * @param { string } value - 指示要与谓词匹配的通配符表达式。 表达式中'%'代表零个、一个或多个数字或字符，'_'代表一个单一的数字或字符，不区分大小写。value为undefined
     *     或null时，此次调用接口配置的谓词无效。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    like(field: string, value: string): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配不类似指定通配符表达式的字段。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。
     * @param { string } value - 指示要与谓词匹配的通配符表达式。表达式中'%'代表零个、一个或多个数字或字符，'_'代表一个单一的数字或字符，不区分大小写。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    unlike(field: string, value: string): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配指定通配符表达式的字段。
     *
     * 目前仅关系型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。
     * @param { string } value - 指示要与谓词匹配的通配符表达式。表达式中'*'代表零个、一个或多个数字或字符，'?'代表一个单一的数字或字符，区分大小写。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    glob(field: string, value: string): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值在指定范围内的字段。包含两端边界值，为左闭右闭区间。
     *
     * 目前仅关系型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。field为undefined或null时，此次调用接口配置的谓词无效。当field为字符串'null'或'undefined'时，键值
     *     型数据库和关系型数据库接口使用该谓词时，可能匹配结果非预期或抛出异常。
     * @param { ValueType } low - 指示与谓词匹配的最小值。low为number时，按数值排序指定匹配范围。low为string时，按字典序排序指定匹配范围。low为
     *     boolean时，按数值排序指定匹配范围。
     * @param { ValueType } high - 指示与谓词匹配的最大值。high为number时，按数值排序指定匹配范围。high为string时，按字典序排序指定匹配范围。high为
     *     boolean时，按数值排序指定匹配范围。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    between(field: string, low: ValueType, high: ValueType): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值超出指定范围的字段。不包含两端边界值，为左开右开区间。
     *
     * 目前仅关系型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。field为undefined或null时，此次调用接口配置的谓词无效。当field为字符串'null'或'undefined'时，键值
     *     型数据库和关系型数据库接口使用该谓词时，可能匹配结果非预期或抛出异常。
     * @param { ValueType } low - 指示与谓词匹配的最小值。low为number时，按数值排序指定匹配范围。low为string时，按字典序排序指定匹配范围。low为
     *     boolean时，按数值排序指定匹配范围。
     * @param { ValueType } high - 指示与谓词匹配的最大值。high为number时，按数值排序指定匹配范围。high为string时，按字典序排序指定匹配范围。high为
     *     boolean时，按数值排序指定匹配范围。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    notBetween(field: string, low: ValueType, high: ValueType): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值大于指定值的字段。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。field为undefined或null时，此次调用接口配置的谓词无效。当field为字符串'null'或'undefined'时，键值
     *     型数据库和关系型数据库接口使用该谓词时，可能匹配结果非预期或抛出异常。
     * @param { ValueType } value - 指示要与谓词匹配的值。value为undefined或null时，此次调用接口配置的谓词无效。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    greaterThan(field: string, value: ValueType): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值小于指定值的字段。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。当field为null或undefined时，此次调用接口配置的谓词无效。当field为字符串'null'或'undefined'时，键
     *     值型数据库和关系型数据库接口使用该谓词时，可能匹配结果非预期或抛出异常。
     * @param { ValueType } value - 指示要与谓词匹配的值。value为undefined或null时，此次调用接口配置的谓词无效。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    lessThan(field: string, value: ValueType): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值大于或等于指定值的字段。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。field为undefined或null时，此次调用接口配置的谓词无效。当field为字符串'null'或'undefined'时，此次
     *     调用接口配置的谓词匹配结果非预期或抛出异常。
     * @param { ValueType } value - 指示要与谓词匹配的值。value为undefined或null时，此次调用接口配置的谓词无效。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    greaterThanOrEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值小于或等于指定值的字段。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。field为undefined或null时，此次调用接口配置的谓词无效。当field为字符串'null'或'undefined'时，键值
     *     型数据库和关系型数据库接口使用该谓词时，可能匹配结果非预期或抛出异常。
     * @param { ValueType } value - 指示要与谓词匹配的值。value为undefined或null时，此次调用接口配置的谓词无效。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi [since 9 - 22]
     * @publicapi [since 23]
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    lessThanOrEqualTo(field: string, value: ValueType): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配其值按升序排序的列。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。 field为undefined或者null时，此次调用接口配置的谓词无效。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    orderByAsc(field: string): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配其值按降序排序的列。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。field为undefined或者null时，此次调用接口配置的谓词无效。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @StageModelOnly
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    orderByDesc(field: string): DataSharePredicates;

    /**
     * 该接口用于配置谓词以过滤重复记录并仅保留其中一个。
     *
     * 目前仅关系型数据库支持该谓词。
     *
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    distinct(): DataSharePredicates;

    /**
     * 该接口用于配置谓词以指定结果数和起始位置。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { int } total - 最大数据记录数。当使用键值型数据库且total为undefined或null时，会限制最大记录数为0。当使用关系型数据库且total为undefined或
     *     null时，不会限制最大记录数。当使用键值型数据库时，取值范围参考
     *     [键值型数据库limit接口]{@link @ohos.data.distributedKVStore:distributedKVStore.Query.limit}中的total参数说明。当使用关系型数据库
     *     时，取值范围参考[关系型数据库limitAs接口]{@link @ohos.data.relationalStore:relationalStore.RdbPredicates.limitAs}中的value参数说明。
     * @param { int } offset - 指定查询结果的起始位置。当offset为undefined或null时，起始位置为结果集的最前端。当使用键值型数据库时，取值范围参考
     *     [键值型数据库limit接口]{@link @ohos.data.distributedKVStore:distributedKVStore.Query.limit}中的offset参数说明。当使用关系型数据
     *     库时，取值范围参考[关系型数据库offsetAs接口]{@link @ohos.data.relationalStore:relationalStore.RdbPredicates.offsetAs}中的
     *     rowOffset参数说明。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @stagemodelonly
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    limit(total: int, offset: int): DataSharePredicates;

    /**
     * 该接口用于配置谓词按指定列分组查询结果。
     *
     * 目前仅关系型数据库支持该谓词。
     *
     * @param { Array<string> } fields - 指定分组依赖的列名。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    groupBy(fields: Array<string>): DataSharePredicates;

    /**
     * 该接口用于配置谓词按指定索引列查询结果。使用该方法前，需要设置索引列。
     *
     * 目前仅关系型数据库支持该谓词。
     *
     * @param { string } field - 索引列的名称。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    indexedBy(field: string): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配值在指定范围内的字段。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。field为undefined或者null时，此次调用接口配置的谓词无效。
     * @param { Array<ValueType> } value - 以ValueType型数组形式指定的要匹配的值。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
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
     * 该接口用于配置谓词以匹配值不在指定范围内的字段。
     *
     * 目前仅关系型数据库及键值型数据库支持该谓词。
     *
     * @param { string } field - 数据库表中的列名。field为undefined或null时，此次调用接口配置的谓词无效。当field为字符串'null'或'undefined'时，键值
     *     型数据库和关系型数据库接口使用该谓词时，可能匹配结果非预期或抛出异常。
     * @param { Array<ValueType> } value - 以ValueType型数组形式指定的要匹配的值。value为undefined或null时，此次调用接口配置的谓词无效。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
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
     * 该接口用于配置谓词以匹配键前缀的指定字段。
     *
     * 目前仅KVDB支持该谓词。
     *
     * @param { string } prefix - 指定的键前缀。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @systemapi
     * @StageModelOnly
     * @since 9 dynamic
     * @since 23 static
     */
    prefixKey(prefix: string): DataSharePredicates;

    /**
     * 该接口用于配置谓词以匹配键在指定范围内的字段。
     *
     * 目前仅KVDB支持该谓词。
     *
     * @param { Array<string> } keys - 指定范围的键数组。
     * @returns { DataSharePredicates } 返回与指定字段匹配的谓词。
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