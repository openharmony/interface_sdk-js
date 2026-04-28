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

/**
 * Indicates the common data types.
 *
 * @syscap SystemCapability.DistributedDataManager.CommonType
 * @crossplatform
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace commonType {
  /**
   * Describes the status of asset.
   *
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  enum AssetStatus {
    /**
     * Means the status of asset is normal.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_NORMAL,

    /**
     * Means the asset needs to be inserted.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_INSERT,

    /**
     * Means the asset needs to be updated.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_UPDATE,

    /**
     * Means the asset needs to be deleted.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_DELETE,

    /**
     * Means the status of asset is abnormal.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_ABNORMAL,

    /**
     * Means the status of asset is downloading.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static上
     */
    ASSET_DOWNLOADING
  }

  /**
   * Information of the asset.
   *
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  interface Asset {
    /**
     * The name of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * The uri of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * The path of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    path: string;

    /**
     * The created time of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    createTime: string;

    /**
     * The modified time of asset. If this field changes, the asset is considered to have changed.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    modifyTime: string;

    /**
     * The size of asset. If this field changes, the asset is considered to have changed.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    size: string;

    /**
     * The status of asset.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    status?: AssetStatus;
  }

  /**
   * Indicates several assets
   *
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  type Assets = Array<Asset>;

  /**
   * Indicates possible value types.
   *
   * @unionmember { null } The value is null.
   * @unionmember { long } The value is a 64-bit integer (int64_t).
   * @unionmember { double } The value is a floating-point number (float).
   * @unionmember { string } The value is a string.
   * @unionmember { boolean } The value is true or false.
   * @unionmember { Uint8Array } The value is an array of 8-bit unsigned integers.
   * @unionmember { Asset } The value is an instance of the Asset type.
   * @unionmember { Assets } The value is an instance of the Assets type.
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  type ValueType = null | long | double | string | boolean | Uint8Array | Asset | Assets;

  /**
   * Values in buckets are stored in key-value pairs.
   *
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  type ValuesBucket = Record<string, ValueType>;
}

export default commonType;
