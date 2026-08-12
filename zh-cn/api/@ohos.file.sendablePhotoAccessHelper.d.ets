/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * @file Helper functions to access image and video assets
 * @kit MediaLibraryKit
 */

import type Context from './application/Context';
import type image from './@ohos.multimedia.image';
import lang from '../arkts/@arkts.lang';
import photoAccessHelper from './@ohos.file.photoAccessHelper';

/**
 * 该模块基于[Sendable](docroot://arkts-utils/arkts-sendable.md)对象，提供相册管理功能，包括创建相册和访问、修改相册中的媒体数据。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamiconly
 */
declare namespace sendablePhotoAccessHelper {
  /**
   * 获取相册管理模块的实例，用于访问和修改相册中的媒体文件。
   *
   * @param { Context } context - 传入Ability实例的Context。
   * @returns { PhotoAccessHelper } 相册管理模块的实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @StageModelOnly
   * @atomicservice
   * @since 12 dynamiconly
   */
  function getPhotoAccessHelper(context: Context): PhotoAccessHelper;

  /**
   * 支持跨用户获取相册管理模块的实例，用于访问和修改相册中的媒体文件。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Context } context - 传入Ability实例的上下文。
   * @param { number } userId - 传入待访问用户的id。
   * @returns { PhotoAccessHelper } 相册管理模块的实例。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Called by non-system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @StageModelOnly
   * @since 19 dynamiconly
   */
  function getPhotoAccessHelper(context: Context, userId: number): PhotoAccessHelper;

  /**
   * 枚举，媒体文件类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  const enum PhotoType {
    /**
     * 图片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    IMAGE = 1,
    /**
     * 视频。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    VIDEO = 2
  }

  /**
   * 枚举，不同[PhotoAsset]{@link sendablePhotoAccessHelper.PhotoAsset}的类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamiconly
   */
  enum PhotoSubtype {
    /**
     * 默认照片类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamiconly
     */
    DEFAULT = 0,
    /**
     * Screenshot Photo Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    SCREENSHOT = 1,
    /**
     * 动态照片文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamiconly
     */
    MOVING_PHOTO = 3,
    /**
     * 连拍照片文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamiconly
     */
    BURST = 4
  }

  /**
   * 枚举，媒体文件的动态范围类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 14 dynamiconly
   */
  enum DynamicRangeType {
    /**
     * 标准动态范围类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 14 dynamiconly
     */
    SDR = 0,
    /**
     * 高动态范围类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 14 dynamiconly
     */
    HDR = 1
  }

  /**
   * Ability to access thumbnail
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamiconly
   */
  enum ThumbnailVisibility {
    /**
     * Unable to access thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    INVISIBLE = 0,
    /**
     * able to access thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    VISIBLE = 1
  }

  /**
   * Photo asset position
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamiconly
   */
  enum PositionType {
    /**
     * Asset exists only in local device
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    LOCAL = 1 << 0,
    /**
     * Asset exists only in cloud
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    CLOUD = 1 << 1
  }

  /**
   * Enumeration of moving photo effect mode.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamiconly
   */
  enum MovingPhotoEffectMode {
    /**
     * Default
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    DEFAULT = 0,

    /**
     * Bounce play
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    BOUNCE_PLAY = 1,

    /**
     * Loop play
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    LOOP_PLAY = 2,

    /**
     * Long exposure
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    LONG_EXPOSURE = 3,

    /**
     * Multi exposure
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    MULTI_EXPOSURE = 4,

    /**
     * Cinema graph
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    CINEMA_GRAPH = 5,

    /**
     * Image only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    IMAGE_ONLY = 10
  }

  /**
   * 提供封装文件属性的方法。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface PhotoAsset extends lang.ISendable {
    /**
     * 媒体文件资源URI（如：file://media/Photo/1/IMG_datetime_0001/displayName.jpg），详情参见用户文件URI介绍中的
     * [媒体文件URI](docroot://file-management/user-file-uri-intro.md#媒体文件uri)。
     * 服务中使用。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    readonly uri: string;
    /**
     * 媒体文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly photoType: PhotoType;
    /**
     * 显示文件名，包含后缀名。字符串长度的取值范围为[1, 255]。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly displayName: string;
    /**
     * 获取PhotoAsset成员参数的值。
     *
     * @param { string } member - 成员参数名称，在get时，除了'uri'、'media_type'、'subtype'和'display_name'四个属性之外，其他的属性都需要
     * 在fetchColumns中填入需要get的[PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys}，例如：get title属性
     * fetchColumns: ['title']。
     * @returns { photoAccessHelper.MemberType } 获取PhotoAsset成员参数的值。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    get(member: string): photoAccessHelper.MemberType;
    /**
     * 设置PhotoAsset成员参数。
     *
     * @param { string } member - 成员参数名称例如：[PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys}
     *     .TITLE。字符串长度的取值范围为[1, 255]。
     * @param { string } value - 设置成员参数名称，只能修改
     *     [PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys}.TITLE的值。title的参数规格为：
     *     <br>- 不应包含扩展名。
     *     <br>- 文件名字符串长度的取值范围为[1, 255]（资产文件名为标题+扩展名）。
     *     <br>- 不允许出现的非法英文字符，包括：. \ / : * ? " ' ` < > | { } [ ]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     * @example : set(PhotoKeys.TITLE, "newTitle"), call commitModify after set
     */
    set(member: string, value: string): void;
    /**
     * 修改文件的元数据。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    commitModify(): Promise<void>;
    /**
     * 获取文件的缩略图，传入缩略图尺寸。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } [size] - 缩略图尺寸。
     * @returns { Promise<image.PixelMap> } Promise对象，返回缩略图的PixelMap。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getThumbnail(size?: image.Size): Promise<image.PixelMap>;
    /**
     * 根据智慧分析类型获取指定分析结果数据。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AnalysisType } analysisType - 需要获取的智慧分析类型。
     * @returns { Promise<string> } Promise对象，返回指定分析数据结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    getAnalysisData(analysisType: photoAccessHelper.AnalysisType): Promise<string>;
    /**
     * 打开源文件并返回fd（文件描述符）。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<number> } Promise对象，返回源文件fd。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    requestSource(): Promise<number>;
    /**
     * 将Sendable类型PhotoAsset转换为非Sendable类型PhotoAsset。
     *
     * @returns { photoAccessHelper.PhotoAsset } 返回非Sendable类型的
     *     [PhotoAsset]{@link @ohos.file.photoAccessHelper:photoAccessHelper}。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    convertToPhotoAsset(): photoAccessHelper.PhotoAsset;
  }

  /**
   * 文件检索结果集。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  interface FetchResult<T> extends lang.ISendable {
    /**
     * 获取文件检索结果中的文件总数。
     *
     * @returns { number } 检索到的文件总数。
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getCount(): number;
    /**
     * 检查结果集是否指向最后一行。
     *
     * @returns { boolean } 当读到最后一条记录后，后续没有记录返回true，否则返回false。
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    isAfterLast(): boolean;
    /**
     * 获取文件检索结果中的第一个文件资产。使用Promise异步回调。
     *
     * @returns { Promise<T> } Promise对象，返回结果集中第一个对象。
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getFirstObject(): Promise<T>;
    /**
     * 获取文件检索结果中的下一个文件资产。使用Promise异步回调。
     * 
     * 在调用此方法之前，必须使用[isAfterLast()]{@link sendablePhotoAccessHelper.FetchResult.isAfterLast}来检查当前位置是否为最后一行。
     *
     * @returns { Promise<T> } Promise对象，返回结果集中下一个对象。
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getNextObject(): Promise<T>;
    /**
     * 获取文件检索结果中的最后一个文件资产。使用Promise异步回调。
     *
     * @returns { Promise<T> } Promise对象，返回结果集中最后一个对象。
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getLastObject(): Promise<T>;
    /**
     * 获取文件检索结果中具有指定索引的文件资产。使用Promise异步回调。
     *
     * @param { number } index - 要获取的文件的索引，从0开始。
     * @returns { Promise<T> } Promise对象，返回结果集中指定索引的一个对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getObjectByPosition(index: number): Promise<T>;
    /**
     * 获取文件检索结果中的所有文件资产。使用Promise异步回调。
     *
     * @returns { Promise<Array<T>> } Promise对象，返回结果集中所有文件资产数组。
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAllObjects(): Promise<Array<T>>;
    /**
     * 释放FetchResult实例并使其失效。释放后无法调用其他方法。
     *
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    close(): void;
  }

  /**
   * 枚举，相册类型，表示是用户相册还是系统预置相册。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  const enum AlbumType {
    /**
     * 用户相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    USER = 0,
    /**
     * 系统预置相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    SYSTEM = 1024,
    /**
     * 智慧分析相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    SMART = 4096
  }

  /**
   * 枚举，相册子类型，表示具体的相册类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  const enum AlbumSubtype {
    /**
     * 用户相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    USER_GENERIC = 1,
    /**
     * 收藏夹。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    FAVORITE = 1025,
    /**
     * 视频相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    VIDEO = 1026,
    /**
     * 隐藏相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    HIDDEN = 1027,
    /**
     * 回收站。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    TRASH = 1028,
    /**
     * 截屏和录屏相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    SCREENSHOT = 1029,
    /**
     * 相机拍摄的照片和视频相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    CAMERA = 1030,
    /**
     * 图片相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    IMAGE = 1031,
    /**
     * 来源相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    SOURCE_GENERIC = 2049,
    /**
     * 分类相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    CLASSIFY = 4097,
    /**
     * 地图相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    GEOGRAPHY_LOCATION = 4099,
    /**
     * 城市相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    GEOGRAPHY_CITY = 4100,
    /**
     * 拍摄模式相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    SHOOTING_MODE = 4101,
    /**
     * 人像相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    PORTRAIT = 4102,
    /**
     * 合影相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    GROUP_PHOTO = 4103,
    /**
     * 时刻相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    HIGHLIGHT = 4104,
    /**
     * 时刻建议相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    HIGHLIGHT_SUGGESTIONS = 4105,
    /**
     * 任意相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    ANY = 2147483647
  }

  /**
   * 定义相册的抽象接口。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  interface AbsAlbum  extends lang.ISendable {
    /**
     * 相册类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly albumType: AlbumType;
    /**
     * 相册子类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly albumSubtype: AlbumSubtype;
    /**
     * 相册名称。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    albumName: string;
    /**
     * 相册Uri。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly albumUri: string;
    /**
     * 相册中文件数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly count: number;
    /**
     * 封面文件Uri。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly coverUri: string;
    /**
     * 获取图片和视频资源。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - 检索选项。
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise对象，返回图片和视频数据结果集。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Fetch shared photo assets in an album.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { FetchOptions } options - Fetch options.
     * @returns { Array<SharedPhotoAsset> } Returns the shared photo assets
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    getSharedPhotoAssets(options: photoAccessHelper.FetchOptions): Array<SharedPhotoAsset>;
  }

  /**
   * 实体相册
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamiconly
   */
  interface Album extends AbsAlbum {
    /**
     * 相册中图片数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly imageCount?: number;
    /**
     * 相册中视频数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    readonly videoCount?: number;
    /**
     * 更新相册属性修改到数据库中。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    commitModify(): Promise<void>;
    /**
     * 将Sendable类型Album转换为非Sendable类型Album。
     *
     * @returns { photoAccessHelper.Album } 返回非Sendable类型的Album。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    convertToPhotoAlbum(): photoAccessHelper.Album;
    /**
     * 获取人像相册或合影相册的封面人脸标识。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Promise对象，人像相册返回tag_id，合影相册返回group_tag，未找到返回空字符串。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamiconly
     */
    getFaceId(): Promise<string>;
  }

  /**
   * Defines the shared photo asset
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamiconly
   */
  interface SharedPhotoAsset extends lang.ISendable {
    /**
     * File id of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    fileId: number;
    /**
     * URI of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    uri: string;
    /**
     * Path data of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    data: string;
    /**
     * Media type of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    mediaType: PhotoType;
    /**
     * Display name of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    displayName: string;
    /**
     * Size of photo asset
     * 单位为： Byte，取值应为≥0的整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    size: number;
    /**
     * Added date of photo asset
     * 单位为： ms，取值应为≥0的整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateAdded: number;
    /**
     * Modify date of photo asset
     * 单位为： ms，取值应为≥0的整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateModified: number;
    /**
     * Duration of video photo asset
     * 单位为： ms，取值应为≥0的整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    duration: number;
    /**
     * Width of photo asset
     * 单位为： px，取值应为≥0的整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    width: number;
    /**
     * Height of photo asset
     * 单位为： px，取值应为≥0的整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    height: number;
    /**
     * DateTaken of photo asset
     * 单位为： ms，取值应为≥0的整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateTaken: number;
    /**
     * Orientation of photo asset
     * 单位为： deg，取值应为[0,359]内的整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    orientation: number;
    /**
     * Favorite state of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    isFavorite: boolean;
    /**
     * Title of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    title: string;
    /**
     * Position of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    position: PositionType;
    /**
     * Trashed date of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateTrashed: number;
    /**
     * Hidden state of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    hidden: boolean;
    /**
     * User comment info of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    userComment: string;
    /**
     * Camera shot key of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    cameraShotKey: string;
    /**
     * The year of the file created
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateYear: string;
    /**
     * The month of the file created
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateMonth: string;
    /**
     * The day of the file created
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateDay: string;
    /**
     * Pending state of the asset, true means asset is pending
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    pending: boolean;
    /**
     * Added date of photo asset in milliseconds
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateAddedMs: number;
    /**
     * Modified time of the asset in milliseconds
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateModifiedMs: number;
    /**
     * Trashed time of the asset in milliseconds
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dateTrashedMs: number;
    /**
     * Subtype of photo asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    subtype: PhotoSubtype;
    /**
     * Effect mode of moving photo
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    movingPhotoEffectMode: MovingPhotoEffectMode;
    /**
     * Dynamic range type of the asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    dynamicRangeType: DynamicRangeType;
    /**
     * Ready state of thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    thumbnailReady: boolean;
    /**
     * Width and height information of lcd picture
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    lcdSize: string;
    /**
     * Width and height information of thumbnail picture
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    thmSize: string;
    /**
     * modified time of thumbnail status
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    thumbnailModifiedMs: number;
    /**
     * visibility of thumbnails
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    thumbnailVisible: ThumbnailVisibility;
  }

  /**
   * 提供操作系统媒体资源能力的接口。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamiconly
   */
  interface PhotoAccessHelper extends lang.ISendable {
    /**
     * 获取图片和视频资源。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - 图片和视频检索选项。
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise对象，返回图片和视频数据结果集。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAssets(options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * 获取连拍照片资源。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } burstKey - 一组连拍照片的唯一标识：uuid（可传入
     *     [PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys}的BURST_KEY）。
     *     字符串长度为36字节。
     * @param { photoAccessHelper.FetchOptions } options - 连拍照片检索选项。
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise对象，返回连拍照片数据结果集。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getBurstAssets(burstKey: string, options: photoAccessHelper.FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * 指定待创建的图片或者视频的文件名，创建图片或视频资源。使用Promise异步回调。
     * 
     * 待创建的文件名参数规格为：
     * 
     * - 应包含有效文件主名和图片或视频扩展名。
     * - 文件名字符串长度为1~255。
     * - 文件主名中不允许出现的非法英文字符。
     * 
     * API18开始，非法字符包括：\ / : * ? " < > |
     * 
     * API10-17，非法字符包括：. .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - 创建的图片或者视频文件名。
     * @returns { Promise<PhotoAsset> } Promise对象，返回创建的图片和视频结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument.
     * @throws { BusinessError } 14000001 - Invalid display name.
     * @throws { BusinessError } 14000011 - Internal system error.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    createAsset(displayName: string): Promise<PhotoAsset>;
    /**
     * 指定待创建的图片或者视频的文件名和创建选项，创建图片或视频资源。使用Promise异步回调。
     * 
     * 待创建的文件名参数规格为：
     * 
     * - 应包含有效文件主名和图片或视频扩展名。
     * - 文件名字符串长度为1~255。
     * - 文件主名中不允许出现的非法英文字符。
     * 
     * API18开始，非法字符包括： \ / : * ? " < > |
     * 
     * API10-17，非法字符包括： . .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - 创建的图片或者视频文件名。
     * @param { PhotoCreateOptions } options - 图片或视频的创建选项。
     * @returns { Promise<PhotoAsset> } Promise used to return the created asset.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument.
     * @throws { BusinessError } 14000001 - Invalid display name.
     * @throws { BusinessError } 14000011 - Internal system error.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    createAsset(displayName: string, options: photoAccessHelper.PhotoCreateOptions): Promise<PhotoAsset>;
    /**
     * 指定文件类型、后缀和创建选项，创建图片或视频资源。使用Promise异步回调。
     * 
     * 此接口在未申请相册管理模块权限'ohos.permission.WRITE_IMAGEVIDEO'时，可以使用安全控件创建媒体资源，详情请参考
     * [保存媒体库资源](docroot://media/medialibrary/photoAccessHelper-savebutton.md).
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - 创建的文件类型，IMAGE或者VIDEO类型。
     * @param { string } extension - 文件名后缀参数，例如：'jpg'。字符串长度的取值范围为[1, 255]。
     *     .
     * @param { CreateOptions } [options] - 创建选项，例如{title: 'testPhoto'}。
     *     <br>文件名中不允许出现非法英文字符。
     *     <br>API18开始，非法字符包括： \ / : * ? " < > |
     *     <br>API10-17，非法字符包括： . .. \ / : * ? " ' ` < > | { } [ ]
     * @returns { Promise<string> } Promise对象，返回创建的图片和视频的uri。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamiconly
     */
    createAsset(photoType: PhotoType, extension: string, options?: photoAccessHelper.CreateOptions): Promise<string>;
    /**
     * 根据检索选项获取相册。使用Promise异步回调。
     * 
     * 获取相册前需先保证相册存在。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } [options] - 检索选项。
     * @returns { Promise<FetchResult<Album>> } Promise对象，返回获取相册的结果集。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAlbums(options: photoAccessHelper.FetchOptions): Promise<FetchResult<Album>>;
    /**
     * 根据检索选项和相册类型获取相册。使用Promise异步回调。
     * 
     * 获取相册前需先保证相册存在。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - 相册类型。
     * @param { AlbumSubtype } subtype - 相册子类型。
     * @param { FetchOptions } [options] - 检索选项，不填时默认根据相册类型检索。
     * @returns { Promise<FetchResult<Album>> } Promise对象，返回获取相册的结果集。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    getAlbums(type: AlbumType, subtype: AlbumSubtype, options?: photoAccessHelper.FetchOptions): Promise<FetchResult<Album>>;
    /**
     * 根据隐藏文件显示模式和检索选项获取系统中的隐藏相册。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - 隐藏文件显示模式。
     * @param { FetchOptions } [options] - 检索选项，不填时默认根据隐藏文件显示模式检索。
     * @returns { Promise<FetchResult<Album>> } Promise对象，返回获取相册的结果集。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamiconly
     */
    getHiddenAlbums(
      mode: photoAccessHelper.HiddenPhotosDisplayMode, 
      options?: photoAccessHelper.FetchOptions
    ): Promise<FetchResult<Album>>;
    /**
     * 释放PhotoAccessHelper实例，当后续不需要使用PhotoAccessHelper实例中的方法时调用。使用Promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamiconly
     */
    release(): Promise<void>;
    /**
     * Fetch shared photo assets.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { FetchOptions } options - Fetch options.
     * @returns { Array<SharedPhotoAsset> } Returns the shared photo assets
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamiconly
     */
    getSharedPhotoAssets(options: photoAccessHelper.FetchOptions): Array<SharedPhotoAsset>;
    /**
     * 将ValuesBucket记录转换为PhotoAsset对象。
     *
     * @param { photoAccessHelper.ValuesBucket[] } assetsData - 资产记录的数组。
     *     <br>数组中的每个元素包含资产的列名称及其对应的值。
     *     <br>数组的大小不能超过500个。
     *     <br>数组中的每个元素必须包含以下资产列信息：file_id、data、display_name、media_type、subtype。
     * @returns { Promise<PhotoAsset[]> } Promise对象，返回PhotoAsset对象的数组（数组可能为空）。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Invalid value type in ValuesBucket;
     *     <br>2. Missing required column in ValuesBucket;
     *     <br>3. Array size exceeds 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamiconly
     */
    getPhotoAssets(assetsData: photoAccessHelper.ValuesBucket[]): Promise<PhotoAsset[]>;
  }
}

export default sendablePhotoAccessHelper;