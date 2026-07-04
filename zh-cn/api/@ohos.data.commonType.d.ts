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
 * 数据通用类型（commonType）是数据管理中通用的数据类型。
 *
 * @syscap SystemCapability.DistributedDataManager.CommonType
 * @crossplatform
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace commonType {
  /**
   * 描述资产附件的状态枚举。请使用枚举名称而非枚举值。
   *
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  enum AssetStatus {
    /**
     * 表示资产状态正常。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_NORMAL,

    /**
     * 表示资产需要插入到云端。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_INSERT,

    /**
     * 表示资产需要更新到云端。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_UPDATE,

    /**
     * 表示资产需要在云端删除。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_DELETE,

    /**
     * 表示资产状态异常。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_ABNORMAL,

    /**
     * 表示资产正在下载到本地设备。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    ASSET_DOWNLOADING
  }

  /**
   * 记录资产附件（文件、图片、视频等类型文件）的相关信息。
   *
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  interface Asset {
    /**
     * 资产的名称。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 资产的uri，在系统里的绝对路径。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 资产在应用沙箱里的路径。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    path: string;

    /**
     * 资产被创建出来的时间。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    createTime: string;

    /**
     * 资产最后一次被修改的时间。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    modifyTime: string;

    /**
     * 资产占用空间的大小。确保在全链路中保持统一、一致的存储格式与取值逻辑。建议所有系统节点均采用标准化处理方式（单位为字节（Byte），取值为非负整数）。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    size: string;

    /**
     * 资产的状态，默认值为ASSET_NORMAL。
     *
     * @syscap SystemCapability.DistributedDataManager.CommonType
     * @crossplatform
     * @since 11 dynamic
     * @since 23 static
     */
    status?: AssetStatus;
  }

  /**
   * 表示Asset类型的数组。
   *
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  type Assets = Array<Asset>;

  /**
   * 用于表示允许的数据字段类型，接口参数具体类型根据其功能而定。。
   *
   * @unionmember { null } 表示值类型为空。
   * @unionmember { long } 表示值类型为数字。
   * @unionmember { double } 表示值类型为数字。
   * @unionmember { string } 表示值类型为字符串。
   * @unionmember { boolean } 表示值类型为布尔值。
   * @unionmember { Uint8Array } 表示值类型为Uint8类型的数组。
   * @unionmember { Asset } 表示值类型为附件Asset。
   * @unionmember { Assets } 表示值类型为附件数组Assets。
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  type ValueType = null | long | double | string | boolean | Uint8Array | Asset | Assets;

  /**
   * 用于存储键值对的类型。该类型不是多线程安全的，如果应用中存在多线程同时操作该类派生出的实例，注意加锁保护。
   *
   * @syscap SystemCapability.DistributedDataManager.CommonType
   * @crossplatform
   * @since 11 dynamic
   * @since 23 static
   */
  type ValuesBucket = Record<string, ValueType>;
}

export default commonType;