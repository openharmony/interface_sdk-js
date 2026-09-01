/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

import collections from '../arkts/@arkts.collections';
import lang from '../arkts/@arkts.lang';
import relationalStore from './@ohos.data.relationalStore';

/**
 * 该模块针对关系型数据库（Relational Database，RDB）提供了sendable支持。支持从查询结果集中获取sendable类型ValuesBucket用于并发实例间传递。
 *
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 12 dynamiconly
 */
declare namespace sendableRelationalStore {
  /**
   * 记录资产附件（文件、图片、视频等类型文件）的相关信息。用于支持资产数据跨线程传递，继承自
   * [lang.ISendable](docroot://reference/apis-arkts/js-apis-arkts-lang.md#langisendable)。资产类型的相关接口暂不支持Datashare。使用
   * [sendableRelationalStore.toSendableAsset]{@link sendableRelationalStore.toSendableAsset}方法创建。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  interface Asset extends lang.ISendable {
    /**
     * 资产的名称。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    name: string;

    /**
     * 资产的uri，在系统里的绝对路径。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    uri: string;

    /**
     * 资产在应用沙箱里的路径。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    path: string;

    /**
     * 资产被创建出来的时间。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    createTime: string;

    /**
     * 资产最后一次被修改的时间。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    modifyTime: string;

    /**
     * 资产占用空间的大小。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    size: string;

    /**
     * 资产的状态，取值与[relationalStore.AssetStatus]{@link @ohos.data.relationalStore:relationalStore.AssetStatus}枚举值保持一致，默认值为
     * relationalStore.AssetStatus.ASSET_NORMAL。
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    status?: number;
  }

  /**
   * 表示[Asset]{@link sendableRelationalStore.Asset}类型数据的集合。用于支持Asset数据集合跨线程传递。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  type Assets = collections.Array<Asset>;

  /**
   * 用于表示允许的数据字段类型，接口参数具体类型根据其功能而定。
   *
   * @unionmember { null } 表示值类型为空。
   * @unionmember { number } 表示值类型为数字。
   * @unionmember { string } 表示值类型为字符串。
   * @unionmember { boolean } 表示值类型为布尔值。
   * @unionmember { collections.Uint8Array } 表示值类型为Uint8类型的数组。
   * @unionmember { Asset } 表示值类型为附件Asset。<br/>当字段类型是Asset时，在创建表的SQL语句中，类型应当为：ASSET。
   * @unionmember { Assets } 表示值类型为附件数据集合Assets。<br/>当字段类型是Assets时，在创建表的SQL语句中，类型应当为：ASSETS。
   * @unionmember { collections.Float32Array } 表示值类型为浮点数组。<br/>当字段类型是collections.Float32Array时，在创建表的SQL语句中，类型应当为：
   *     floatvector(128)。
   * @unionmember { bigint } 表示值类型为任意长度的整数。<br/>当字段类型是bigint时，在创建表的SQL语句中，类型应当为：UNLIMITED INT，详见
   *     [通过关系型数据库实现数据持久化](docroot://database/data-persistence-by-rdb-store.md)。<br/>**说明：** 
   *     <br>bigint类型字段不能比较大小，不适用以下谓词操作：between、notBetween、greaterThan、lessThan、greaterThanOrEqualTo、lessThanOrEqualTo、
   *     orderByAsc、orderByDesc。<br/>bigint类型字段的数据写入时，需通过BigInt()方法或在数据尾部添加'n'的方式明确为bigint类型，如'let data = BigInt(1234)'或
   *     'let data = 1234n'。<br/>bigint字段如果写入number类型的数据，则查询该数据的返回类型为number，而非bigint。
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  type ValueType = null | number | string | boolean | collections.Uint8Array | Asset | Assets |
    collections.Float32Array | bigint;

  /**
   * 表示[ValueType]{@link sendableRelationalStore.ValueType}数据的键值对存储，用于支持ValueType数据跨线程传递。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  type ValuesBucket = collections.Map<string, ValueType>;

  /**
   * 用于存储键值对的类型。不支持跨线程传递。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  type NonSendableBucket = relationalStore.ValuesBucket;

  /**
   * 记录资产附件（文件、图片、视频等类型文件）的相关信息。不支持跨线程传递。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  type NonSendableAsset = relationalStore.Asset;

  /**
   * 将可用于跨线程传递的键值对数据，转换为不能用于跨线程传递的键值对数据。
   *
   * @param { ValuesBucket } valuesBucket - 可用于跨线程传递的ValuesBucket数据。
   * @returns { NonSendableBucket } 不可跨线程传递的ValuesBucket数据。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 14800000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  function fromSendableValuesBucket(valuesBucket: ValuesBucket): NonSendableBucket;

  /**
   * 将不能用于跨线程传递的键值对数据，转换为可用于跨线程传递的键值对数据。
   *
   * @param { NonSendableBucket } valuesBucket - 不可跨线程传递的ValuesBucket数据。
   * @returns { ValuesBucket } 可用于跨线程传递的ValuesBucket数据。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 14800000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  function toSendableValuesBucket(valuesBucket: NonSendableBucket): ValuesBucket;

  /**
   * 将可跨线程传递的附件数据，转换为不可跨线程传递的附件数据。
   *
   * @param { Asset } asset - 可跨线程传递的Asset数据。
   * @returns { NonSendableAsset } 不可跨线程传递的Asset数据。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 14800000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  function fromSendableAsset(asset: Asset): NonSendableAsset;

  /**
   * 将不可跨线程传递的附件数据，转换为可跨线程传递的附件数据。
   *
   * @param { NonSendableAsset } asset - 不可跨线程传递的Asset数据。
   * @returns { Asset } 可跨线程传递的Asset数据。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @throws { BusinessError } 14800000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  function toSendableAsset(asset: NonSendableAsset): Asset;

  /**
   * 表示[ValueType]{@link @ohos.data.relationalStore:relationalStore.ValueType}数据数组存储。不支持跨线程传递。
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20 dynamiconly
   */
  type NonSendableValues = Array<relationalStore.ValueType>;

  /**
   * 将可跨线程传递的数组数据，转换为不可跨线程传递的数组数据。
   *
   * @param { collections.Array<ValueType> } values - 可跨线程传递的数组数据。
   * @returns { NonSendableValues } 不可跨线程传递的数组数据。
   * @throws { BusinessError } 14800000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20 dynamiconly
   */
  function fromSendableValues(values: collections.Array<ValueType>): NonSendableValues;

  /**
   * 将不可跨线程传递的数组数据，转换为可跨线程传递的数组数据。
   *
   * @param { NonSendableValues } values - 不可跨线程传递的数组数据。
   * @returns { collections.Array<ValueType> } 可跨线程传递的数组数据。
   * @throws { BusinessError } 14800000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20 dynamiconly
   */
  function toSendableValues(values: NonSendableValues): collections.Array<ValueType>;
}

export default sendableRelationalStore;
