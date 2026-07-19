/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';
import rdb from './@ohos.data.rdb';

/**
 * DataAbility谓词用于构造关系型数据库的谓词，提供用于实现不同查询方法的谓词。
 *
 * @syscap SystemCapability.DistributedDataManager.DataShare.Core
 * @since 7 dynamiconly
 */
declare namespace dataAbility {
  /**
   * 通过表名和DataAbility谓词对象创建Rdb谓词对象。
   *
   * @param { string } name - 数据库表中的表名，不能为空字符串。
   * @param { DataAbilityPredicates } dataAbilityPredicates - DataAbility谓词。
   * @returns { rdb.RdbPredicates } 返回RdbPredicates对象。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @since 7 dynamiconly
   */
  function createRdbPredicates(name: string, dataAbilityPredicates: DataAbilityPredicates): rdb.RdbPredicates;

  /**
   * 提供用于实现不同查询方法的谓词。
   *
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @since 7 dynamiconly
   */
  class DataAbilityPredicates {
    /**
     * 配置谓词以匹配数据，数据的指定字段数据类型为ValueType且值等于指定值。
     *
     * 此方法类似于SQL语句的“=”。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    equalTo(field: string, value: ValueType): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据，数据的指定字段数据类型为ValueType且不等于指定值。
     *
     * 此方法类似于SQL语句的“!=”。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    notEqualTo(field: string, value: ValueType): DataAbilityPredicates;

    /**
     * 在谓词中添加左括号。此方法类似于SQL语句的“(”，需要与[endWrap]{@link dataAbility.DataAbilityPredicates#endWrap}一起使用。
     *
     * @returns { DataAbilityPredicates } 返回带有左括号的DataAbility谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    beginWrap(): DataAbilityPredicates;

    /**
     * 在谓词中添加右括号。此方法类似于SQL语句的“)”，需要和[beginWrap]{@link dataAbility.DataAbilityPredicates#beginWrap}一起使用。
     *
     * @returns { DataAbilityPredicates } 返回带有右括号的DataAbility谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    endWrap(): DataAbilityPredicates;

    /**
     * 将或条件添加到谓词中。
     *
     * 此方法类似于SQL语句“or”。
     *
     * @returns { DataAbilityPredicates } 返回带有或条件的DataAbility谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    or(): DataAbilityPredicates;

    /**
     * 将和条件添加到谓词中。
     *
     * @returns { DataAbilityPredicates } 返回带有和条件的DataAbility谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    and(): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为string且value包含指定值的字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    contains(field: string, value: string): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为string且值以指定字符串开头的字段。
     *
     * 此方法类似于SQL语句的“value%”。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    beginsWith(field: string, value: string): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为string且值以指定字符串结尾的字段。
     *
     * 此方法类似于SQL语句的“%value”。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    endsWith(field: string, value: string): DataAbilityPredicates;

    /**
     * 配置谓词以匹配值为null的字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    isNull(field: string): DataAbilityPredicates;

    /**
     * 配置谓词以匹配值不为null的指定字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    isNotNull(field: string): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为string且值类似于指定字符串的字段。
     *
     * 此方法类似于SQL语句“like”。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    like(field: string, value: string): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为string的指定字段。与like方法不同，该方法的输入参数区分大小写。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { string } value - 指示要与谓词匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    glob(field: string, value: string): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为ValueType且value在指定范围内的指定字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } low - 指示与谓词匹配的最小值。
     * @param { ValueType } high - 指示与谓词匹配的最大值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    between(field: string, low: ValueType, high: ValueType): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为ValueType且value超出给定范围的指定字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } low - 指示与谓词匹配的最小值。
     * @param { ValueType } high - 指示与谓词匹配的最大值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    notBetween(field: string, low: ValueType, high: ValueType): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为ValueType且值大于指定值的字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    greaterThan(field: string, value: ValueType): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为ValueType且value小于指定值的字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    lessThan(field: string, value: ValueType): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为ValueType且value大于或等于指定值的字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    greaterThanOrEqualTo(field: string, value: ValueType): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为ValueType且value小于或等于指定值的字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { ValueType } value - 指示要与谓词匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    lessThanOrEqualTo(field: string, value: ValueType): DataAbilityPredicates;

    /**
     * 配置谓词以匹配其值按升序排序的列。当有多个orderByAsc使用时，最先使用的具有最高优先级。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    orderByAsc(field: string): DataAbilityPredicates;

    /**
     * 配置谓词以匹配其值按降序排序的列。当有多个orderByDesc使用时，最先使用的具有最高优先级。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    orderByDesc(field: string): DataAbilityPredicates;

    /**
     * 配置谓词以过滤重复记录并仅保留其中一个。
     *
     * @returns { DataAbilityPredicates } 返回可用于过滤重复记录的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    distinct(): DataAbilityPredicates;

    /**
     * 设置谓词的最大数据记录数量。
     *
     * @param { number } value - 最大数据记录数，取值为正整数。传入值小于等于0时，不会限制记录数量。
     * @returns { DataAbilityPredicates } 返回可用于设置最大数据记录数的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    limitAs(value: number): DataAbilityPredicates;

    /**
     * 设置谓词查询结果的起始位置。需要同步调用[limitAs]{@link dataAbility.DataAbilityPredicates#limitAs}接口指定查询数量，否则无查询结果。查询指定偏移位置后的所有行时，
     * [limitAs]{@link dataAbility.DataAbilityPredicates#limitAs}接口需传入参数-1。
     *
     * @param { number } rowOffset - 返回结果的起始位置，取值为正整数。传入值小于等于0时，查询结果将从第一个元素位置返回。
     * @returns { DataAbilityPredicates } 返回具有指定返回结果起始位置的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    offsetAs(rowOffset: number): DataAbilityPredicates;

    /**
     * 配置谓词按指定列分组查询结果。
     *
     * @param { Array<string> } fields - 指定分组依赖的列名。
     * @returns { DataAbilityPredicates } 返回分组查询列的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    groupBy(fields: Array<string>): DataAbilityPredicates;

    /**
     * 配置谓词以指定索引列。在使用此方法之前，您需要创建一个索引列。
     *
     * @param { string } field - 创建的索引列名称。
     * @returns { DataAbilityPredicates } 返回具有指定索引列的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    indexedBy(field: string): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为ValueType数组且值在给定范围内的指定字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { Array<ValueType> } value - 以ValueType类型数组形式指定的要匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    in(field: string, value: Array<ValueType>): DataAbilityPredicates;

    /**
     * 配置谓词以匹配数据类型为ValueType数组且值不在给定范围内的指定字段。
     *
     * @param { string } field - 数据库表中的列名，不能为空字符串。
     * @param { Array<ValueType> } value - 以ValueType类型数组形式指定的要匹配的值。
     * @returns { DataAbilityPredicates } 返回与指定字段匹配的谓词。
     * @syscap SystemCapability.DistributedDataManager.DataShare.Core
     * @since 7 dynamiconly
     */
    notIn(field: string, value: Array<ValueType>): DataAbilityPredicates;
  }
  /**
   * 用于表示允许的数据字段类型。
   *
   * @unionmember { number } 表示值类型为数字。
   * @unionmember { string } 表示值类型为字符串。
   * @unionmember { boolean } 表示值类型为布尔值。
   * @syscap SystemCapability.DistributedDataManager.DataShare.Core
   * @since 7 dynamiconly
   */
  type ValueType = number | string | boolean;
}

export default dataAbility;