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
 * The **sendableRelationalStore** module provides APIs for obtaining **ValuesBucket** of the sendable type from the
 * query result set and transferring it between concurrent instances.
 *
 * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
 * @since 12 dynamiconly
 */
declare namespace sendableRelationalStore {
  /**
   * Represent the asset (such as a document, image, or video). **Asset** inherits from
   * [lang.ISendable]{@link @arkts.lang:lang.ISendable} and is used to implement cross-thread transfer of asset data.
   * The asset data does not support **Datashare** APIs. Use 
   * [sendableRelationalStore.toSendableAsset]{@link sendableRelationalStore.toSendableAsset} to create an **Asset**
   * instance.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  interface Asset extends lang.ISendable {
    /**
     * Asset name.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    name: string;

    /**
     * Asset URI, which is an absolute path in the system.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    uri: string;

    /**
     * Application sandbox path of the asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    path: string;

    /**
     * Time when the asset was created.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    createTime: string;

    /**
     * Time when the asset was last modified.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    modifyTime: string;

    /**
     * Size of the asset.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    size: string;

    /**
     * Asset status. For details, see
     * [relationalStore.AssetStatus]{@link @ohos.data.relationalStore:relationalStore.AssetStatus}. The default value is
     * **relationalStore.AssetStatus.ASSET_NORMAL**.
     *
     * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
     * @since 12 dynamiconly
     */
    status?: number;
  }

  /**
   * Represent an array of [Assets]{@link sendableRelationalStore.Asset}, which allows assets to be passed across
   * threads.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  type Assets = collections.Array<Asset>;

  /**
   * Defines the types of the value in a KV pair. The type varies with the parameter function.
   *
   * @unionmember { null } The value is null.
   * @unionmember { number } The value is a number.
   * @unionmember { string } The value is a string.
   * @unionmember { boolean } The value is **true** or **false**.
   * @unionmember { collections.Uint8Array } The value is a Uint8 array.
   * @unionmember { Asset } The value is an asset.
   *     <br>If the value type is **Asset**, the type in the SQL statement for creating a table must be **ASSET**.
   * @unionmember { Assets } The value is an array of assets.
   *     <br>If the value type is **Assets**, the type in the SQL statement for creating a table must be **ASSETS**.
   * @unionmember { collections.Float32Array } The value is an array of 32-bit floating-point numbers.
   *     <br>If the field type is **collections.Float32Array**, the type in the SQL statement for creating a table must
   *     be **floatvector(128)**.
   * @unionmember { bigint } The value is an integer of any length.
   *     <br>If the value type is bigint, the type in the SQL statement for creating a table must be **UNLIMITED INT**.
   *     For details, see [Persisting RDB Store Data](docroot://database/data-persistence-by-rdb-store.md).
   *     <br>**NOTE**
   *     <br>The bigint type does not support value comparison and cannot be used with the following predicates:
   *     **between**, **notBetween**, **greaterThan**, **lessThan**, **greaterThanOrEqualTo**, **lessThanOrEqualTo**,
   *     **orderByAsc**, and **orderByDesc**
   *     <br>To write a value of bigint type, use **BigInt()** or add **n** to the end of the value, for example,
   *     'let data = BigInt(1234)' or 'let data = 1234n'.
   *     <br>If data of the number type is written to a bigint field, the type of the return value obtained (queried) is
   *     number but not bigint.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  type ValueType = null | number | string | boolean | collections.Uint8Array | Asset | Assets |
    collections.Float32Array | bigint;

  /**
   * Represents the KV pair of the [ValueType]{@link sendableRelationalStore.ValueType} data that can be passed across
   * threads.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  type ValuesBucket = collections.Map<string, ValueType>;

  /**
   * Represents the KV pair that cannot be passed across threads.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  type NonSendableBucket = relationalStore.ValuesBucket;

  /**
   * Represents the asset (such as a document, image, or video) that cannot be passed across threads.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 12 dynamiconly
   */
  type NonSendableAsset = relationalStore.Asset;

  /**
   * Converts a KV pair that can be passed across threads into the data that cannot be passed across threads.
   *
   * @param { ValuesBucket } valuesBucket - Data that can be passed across threads.
   * @returns { NonSendableBucket } Data that cannot be passed across threads.
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
   * Converts a key-value (KV) pair that cannot be passed across threads into the data that can be passed across
   * threads.
   *
   * @param { NonSendableBucket } valuesBucket - Data that cannot be passed across threads.
   * @returns { ValuesBucket } Data that can be passed across threads.
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
   * Converts the asset data that can be passed across threads into the data that cannot be passed across threads.
   *
   * @param { Asset } asset - Asset data that can be passed across threads.
   * @returns { NonSendableAsset } Asset data that cannot be passed across threads.
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
   * Converts the asset data that cannot be passed across threads into the data that can be passed across threads.
   *
   * @param { NonSendableAsset } asset - Asset data that cannot be passed across threads.
   * @returns { Asset } Asset data that can be passed across threads.
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
   * Represents the [ValueType]{@link @ohos.data.relationalStore:relationalStore.ValueType} array that cannot be passed
   * across threads.
   *
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20 dynamiconly
   */
  type NonSendableValues = Array<relationalStore.ValueType>;

  /**
   * Converts the array data that can be passed across threads into the data that cannot be passed across threads.
   *
   * @param { collections.Array<ValueType> } values - Array data that can be passed across threads.
   * @returns { NonSendableValues } Array data that cannot be passed across threads.
   * @throws { BusinessError } 14800000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20 dynamiconly
   */
  function fromSendableValues(values: collections.Array<ValueType>): NonSendableValues;

  /**
   * Converts the array data that cannot be passed across threads into the data that can be passed across threads.
   *
   * @param { NonSendableValues } values - Array data that cannot be passed across threads.
   * @returns { collections.Array<ValueType> } Array data that can be passed across threads.
   * @throws { BusinessError } 14800000 - Inner error.
   * @syscap SystemCapability.DistributedDataManager.RelationalStore.Core
   * @since 20 dynamiconly
   */
  function toSendableValues(values: NonSendableValues): collections.Array<ValueType>;
}

export default sendableRelationalStore;