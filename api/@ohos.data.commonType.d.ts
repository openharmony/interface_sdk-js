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
 * @namespace commonType
 * @syscap SystemCapability.DistributedDataManager.CommonType
 * @crossplatform
 * @since 11 dynamic
 */
declare namespace commonType {
  /**
   * Describes the status of asset.
   *
   * @enum { number }
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   */
  enum AssetStatus {
    /**
     * Means the status of asset is normal.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    ASSET_NORMAL,

    /**
     * Means the asset needs to be inserted.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    ASSET_INSERT,

    /**
     * Means the asset needs to be updated.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    ASSET_UPDATE,

    /**
     * Means the asset needs to be deleted.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    ASSET_DELETE,

    /**
     * Means the status of asset is abnormal.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    ASSET_ABNORMAL,

    /**
     * Means the status of asset is downloading.
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    ASSET_DOWNLOADING
  }

  /**
   * Information of the asset.
   *
   * @interface Asset
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   */
  interface Asset {
    /**
     * The name of asset.
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    name: string;

    /**
     * The uri of asset.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    uri: string;

    /**
     * The path of asset.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    path: string;

    /**
     * The created time of asset.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    createTime: string;

    /**
     * The modified time of asset. If this field changes, the asset is considered to have changed.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    modifyTime: string;

    /**
     * The size of asset. If this field changes, the asset is considered to have changed.
     *
     * @type { string }
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    size: string;

    /**
     * The status of asset.
     *
     * @type { ?AssetStatus }
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     */
    status?: AssetStatus;
  }

  /**
   * Indicates several assets
   *
   * @typedef { Array<Asset> }
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   */
  type Assets = Array<Asset>;

  /**
   * Indicates possible value types.
   *
   * @typedef { null | number | string | boolean | Uint8Array | Asset | Assets }
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 22 static
   */
  type ValueType = null | long | double | string | boolean | Uint8Array | Asset | Assets;

  /**
   * Values in buckets are stored in key-value pairs.
   *
   * @typedef { Record<string, ValueType> }
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   */
  type ValuesBucket = Record<string, ValueType>;
}

export default commonType;
