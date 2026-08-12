/*
 * Copyright (C) 2023-2025 Huawei Device Co., Ltd.
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
 * @file MediaAssetManager
 * @kit MediaLibraryKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';
import type image from './@ohos.multimedia.image';
import type dataSharePredicates from './@ohos.data.dataSharePredicates';
import type { CustomColors } from './@ohos.arkui.theme';

/**
 * 该模块提供相册管理能力，包括创建相册、访问和修改相册中的媒体数据。
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace photoAccessHelper {
  /**
   * 获取相册管理模块的实例，用于访问和修改相册中的媒体文件。
   *
   * @param { Context } context - 传入Ability实例的上下文。
   * @returns { PhotoAccessHelper } 相册管理模块的实例。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   */
  function getPhotoAccessHelper(context: Context): PhotoAccessHelper;

  /**
   * 获取相册管理模块的实例，用于访问和修改相册中的媒体文件。
   *
   * @param { Context } context - Context of the ability instance.
   * @returns { PhotoAccessHelper | null } Instance of PhotoAccessHelper. if the operation fails, returns null.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     <br>1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types;
   *     <br>3. Parameter verification failed.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @crossplatform
   * @atomicservice
   * @since 23 static
   */
  function getPhotoAccessHelper(context: Context): PhotoAccessHelper | null;

  /**
   * 枚举，媒体文件类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  enum PhotoType {
    /**
     * 图片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    IMAGE = 1,
    /**
     * 视频。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    VIDEO = 2
  }

  /**
   * PhotoSubtype是不同[PhotoAsset]{@link photoAccessHelper.PhotoAsset}类型的枚举。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi [since 10 - 11]
   * @publicapi [since 12]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  export enum PhotoSubtype {
    /**
     * 默认照片文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 10 - 11]
     * @publicapi [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * 截屏录屏文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SCREENSHOT = 1,
    /**
     * 动态照片文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MOVING_PHOTO = 3,
    /**
     * 连拍照片文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    BURST = 4,
    /**
     * 电影视频文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 26.1.0 dynamic&static
     */
    CINEMATIC_VIDEO = 5,
    /**
     * 慢动作视频文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    SLOW_MOTION_VIDEO = 6,
    /**
     * 3DGS（3D高斯点渲染）视频文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    SPATIAL_3DGS = 7,
    /**
     * 电影版本2视频文件。与CINEMATIC_VIDEO相比，它增加了更多效果，如希区柯克风格。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 26.1.0 dynamic&static
     */
    CINEMATIC_VIDEO_V2 = 8
  }

  /**
   * 枚举，媒体文件的动态范围类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamic
   * @since 23 static
   */
  export enum DynamicRangeType {
    /**
     * 标准动态范围类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SDR = 0,
    /**
     * 高动态范围类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR = 1
  }

  /**
   * 枚举，媒体资产的HDR模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  enum HdrMode {
    /**
     * 默认类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    DEFAULT = 0,
    /**
     * 符合ISO标准的单层HDR图片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDR_ISO_SINGLE = 1,
    /**
     * 符合ISO标准的双层HDR图片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDR_ISO_DUAL = 2,
    /**
     * 历史产品拍摄的HDR图片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDR_CUVA = 3,
    /**
     * 符合HDR Vivid标准的单层图片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDR_VIVID_SINGLE = 4,
    /**
     * 符合HDR Vivid标准的双层图片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDR_VIVID_DUAL = 5
  }

  /**
   * 枚举，缩略图是否可访问。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum ThumbnailVisibility {
    /**
     * 缩略图不可访问。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    INVISIBLE = 0,
    /**
     * 缩略图可访问。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    VISIBLE = 1
  }

  /**
   * 枚举，文件位置，表示文件在本地或云端。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi [since 10 - 15]
   * @publicapi [since 16]
   * @since 10 dynamic
   * @since 23 static
   */
  enum PositionType {
    /**
     * 文件只存在于本端设备。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 10 - 15]
     * @publicapi [since 16]
     * @since 10 dynamic
     * @since 23 static
     */
    LOCAL = 1,
    /**
     * 文件只存在于云端。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 10 - 15]
     * @publicapi [since 16]
     * @since 10 dynamic
     * @since 23 static
     */
    CLOUD = 2,
    /**
     * 文件存在于本端设备和云端。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 16 dynamic
     * @since 23 static
     */
    LOCAL_AND_CLOUD = 3
  }

  /**
   * 枚举，智慧分析类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum AnalysisType {
    /**
     * 美学评分分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_AESTHETICS_SCORE = 0,
    /**
     * 分类标签分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_LABEL = 1,
    /**
     * 文字识别分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_OCR = 2,
    /**
     * 人脸检测分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_FACE = 3,
    /**
     * 目标检测分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_OBJECT = 4,
    /**
     * 推荐构图分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_RECOMMENDATION = 5,
    /**
     * 抠图分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_SEGMENTATION = 6,
    /**
     * 美学构图分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_COMPOSITION = 7,
    /**
     * 最佳呈现主体中心分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_SALIENCY = 8,
    /**
     * 详细地址分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_DETAIL_ADDRESS = 9,
    /**
     * 人像聚类信息分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_HUMAN_FACE_TAG = 10,
    /**
     * 人头、宠物头位置分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_HEAD_POSITION = 11,
    /**
     * 人体骨骼点信息分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_BONE_POSE = 12,
    /**
     * 视频标签。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_VIDEO_LABEL = 13,
    /**
     * 时刻标签。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_HIGHLIGHT = 14,
    /**
     * 2D运镜检测框标签。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_MULTI_CROP = 15,
    /**
     * 前台索引分析。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    ANALYSIS_SEARCH_INDEX = 16,
    /**
     * 优选分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALYSIS_SELECTED = 17,
    /**
     * 重复和相似度分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALYSIS_DUPLICATE_SIMILARITY = 18,
    /**
     * 负向情绪分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALYSIS_NEGATIVE_EMOTION = 19,
    /**
     * 人脸美学分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALYSIS_FACE_AESTHETICS = 20,
    /**
     * 魔法表情分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALYSIS_MAGIC_EMOJI = 21,
    /**
     * AI编辑分析类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALYSIS_AI_EDIT = 22
  }

  /**
   * 枚举，推荐的图片类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 26.0.0 static
   */
  enum RecommendationType {
    /**
     * 二维码或条码。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    QR_OR_BAR_CODE = 1,

    /**
     * 二维码。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    QR_CODE = 2,

    /**
     * 条码。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    BAR_CODE = 3,

    /**
     * 身份证。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    ID_CARD = 4,

    /**
     * 头像。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    PROFILE_PICTURE = 5,

    /**
     * 护照。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    PASSPORT = 6,

    /**
     * 银行卡。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    BANK_CARD = 7,

    /**
     * 驾驶证。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    DRIVER_LICENSE = 8,

    /**
     * 行驶证。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    DRIVING_LICENSE = 9,

    /**
     * 推荐人像。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    FEATURED_SINGLE_PORTRAIT = 10,

    /**
     * 推荐风格。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 26.0.0 static
     */
    COLOR_STYLE_PHOTO = 12,

    /**
     * CAT表示猫咪照片会被推荐。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    CAT = 13,

    /**
     * DOG表示狗照片会被推荐。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    DOG = 14,

    /**
     * ARCHITECTURE表示建筑照片会被推荐。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    ARCHITECTURE = 15,

    /**
     * LANDSCAPE表示风景照片会被推荐。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    LANDSCAPE = 16,

    /**
     * GAUSSIAN_SPLAT_3D表示通过3D高斯技术生成的照片会被推荐。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    GAUSSIAN_SPLAT_3D = 17
  }

  /**
   * 枚举，资源分发模式。
   * 
   * 该模式适用于分段式拍照或分段式视频。如果当前设备不具备分段式能力，则以下三种分发模式无区别，直接返回请求的图片或视频资源。
   * 请求的结果通过
   * [onDataPrepared]{@link @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetDataHandler.onDataPrepared(
   * data: T, map?: Map<string, string>)}
   * 回调返回。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum DeliveryMode {
    /**
     * 快速模式。
     * 
     * 针对分段式拍照或视频场景，若当前存在高质量图或视频，则立即返回高质量图或视频的请求结果回调；若当前存在低质量图或视频，
     * 则立即返回低质量图或视频的请求结果回调。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    FAST_MODE = 0,

    /**
     * 高质量模式。
     * 
     * 针对分段式拍照或视频场景，若当前存在高质量图或视频，则立即返回高质量图或视频的请求结果回调；若当前存在低质量图或视频，
     * 则申请高质量图或视频的生成任务，待高质量图或视频生成后，返回高质量图或视频的请求结果回调。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    HIGH_QUALITY_MODE = 1,

    /**
     * 均衡模式。
     * 
     * - 针对分段式拍照场景，若当前存在高质量图，则立即返回高质量图的请求结果回调；若当前存在低质量图，则立即返回低质量图的请求
     * 结果回调，并申请高质量图生成任务，待高质量图生成后，再次返回高质量图的请求结果回调。
     * - 针对分段式视频场景，若当前存在高质量视频，则立即返回高质量视频的请求结果回调；若当前存在低质量视频，
     * 则立即返回低质量视频的请求结果回调。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    BALANCE_MODE = 2
  }

  /**
   * 配置转码模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 15 dynamic
   * @since 23 static
   */
  enum CompatibleMode {
    /**
     * 原视频资源内容模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    ORIGINAL_FORMAT_MODE = 0,

    /**
     * 兼容模式，从HDR视频资源转换为SDR视频资源。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    COMPATIBLE_FORMAT_MODE = 1
  }

  /**
   * 媒体资产进度处理器，应用于onProgress方法中获取媒体资产进度。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 15开始支持。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface MediaAssetProgressHandler {
    /**
     * 当所请求的视频资源返回进度时系统会回调此方法。
     *
     * @param { int } progress - 返回的进度百分比，范围为[0, 100]。
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    onProgress(progress: int): void;
  }

  /**
   * 枚举，资源文件的读取类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum SourceMode {
    /**
     * 读取源文件。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ORIGINAL_MODE = 0,

    /**
     * 读取编辑后的文件。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    EDITED_MODE = 1
  }

  /**
   * 枚举，应用对媒体资源不同访问权限的类型。
   * 
   * 包括临时读权限和永久读权限，临时读权限会随着应用的死亡而删除，永久读权限不会。
   * 
   * 同一个应用对同一个媒体资源的权限覆盖规则：永久读会覆盖临时读，而临时读不会覆盖永久读。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum PhotoPermissionType {
    /**
     * 临时读权限类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TEMPORARY_READ_IMAGEVIDEO = 0,

    /**
     * 永久读权限类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PERSISTENT_READ_IMAGEVIDEO = 1
  }

  /**
   * 枚举，应用访问媒体资源时，对媒体资源进行信息脱敏的类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum HideSensitiveType {
    /**
     * 脱敏地理位置和拍摄参数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIDE_LOCATION_AND_SHOOTING_PARAM = 0,

    /**
     * 脱敏地理位置信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIDE_LOCATION_ONLY = 1,

    /**
     * 脱敏拍摄参数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIDE_SHOOTING_PARAM_ONLY = 2,

    /**
     * 不脱敏。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NO_HIDE_SENSITIVE_TYPE = 3,

    /**
     * 根据
     * [ohos.permission.MEDIA_LOCATION](
     * docroot://security/AccessToken/permissions-for-all-user.md#ohospermissionmedia_location)
     * 权限进行脱敏。规格为：
     * 
     * - 有ohos.permission.MEDIA_LOCATION权限：不脱敏。
     * - 无ohos.permission.MEDIA_LOCATION权限：脱敏地理位置信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    DEFAULT = 4
  }

  /**
   * 枚举，授权模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AuthorizationMode {
    /**
     * 短时授权。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SHORT_TIME_AUTHORIZATION = 0
  }

  /**
   * 枚举，水印可编辑标识。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum WatermarkType {
    /**
     * 不支持水印可编辑。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * 支持品牌和通用水印可编辑。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    BRAND_COMMON = 1,

    /**
     * 支持通用水印可编辑。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    COMMON = 2,

    /**
     * 支持品牌水印可编辑。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    BRAND = 3
  }

  /**
   * 枚举，表示复合图显示模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  enum CompositeDisplayMode {
    /**
     * 复合图显示模式为原图。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    DEFAULT = 0,

    /**
     * 复合图显示模式为云增强。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    CLOUD_ENHANCEMENT = 1
  }

  /**
   * 配置完成按钮显示内容。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   * @since 26.0.0 static
   */
  enum CompleteButtonText {
    /**
     * 显示“完成”。 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 26.0.0 static
     */
    TEXT_DONE = 0,

    /**
     * 显示“发送”。 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 26.0.0 static
     */
    TEXT_SEND = 1,

    /**
     * 显示“添加”。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 26.0.0 static
     */
    TEXT_ADD = 2
  }

  /**
   * 请求策略。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface RequestOptions {
    /**
     * 请求资源分发模式，可以指定对于该资源的请求策略，可被配置为快速模式，高质量模式，均衡模式三种策略。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    deliveryMode: DeliveryMode;

    /**
     * 资源文件的读取类型，可以指定当前请求获取的是源文件或编辑后的文件。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    sourceMode?: SourceMode;

    /**
     * 配置HDR视频资源转码模式，可指定配置为转码和不转码两种策略。默认为原视频资源内容模式即不转码。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    compatibleMode?: CompatibleMode;

    /**
     * 配置HDR视频转码为SDR视频时的进度级回调。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    mediaAssetProgressHandler?: MediaAssetProgressHandler;
  }

  /**
   * 媒体资源处理器，应用在onDataPrepared方法中可自定义媒体资源处理逻辑。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 11开始支持。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface MediaAssetDataHandler<T> {
    /**
     * 媒体资源就绪通知，系统在资源准备就绪时回调此方法。若资源准备出错，回调的data为undefined。资源请求与回调一一对应。
     * 
     * T支持ArrayBuffer，[ImageSource]{@link @ohos.multimedia.image:image.ImageSource}，
     * [MovingPhoto]{@link photoAccessHelper.MovingPhoto}和boolean四种数据类型。其中，ArrayBuffer表示图片/视频资源数据，
     * [ImageSource]{@link @ohos.multimedia.image:image.ImageSource}表示图片源，
     * [MovingPhoto]{@link photoAccessHelper.MovingPhoto}表示动态照片对象，boolean表示图片/视频资源是否成功写入应用沙箱，true表示成功，false表示失败。
     * 
     * map支持返回的信息：
     * 
     * | map键名  | 值说明 |
     * |----------|-------|
     * | 'quality'  | 图片质量。高质量为'high'，低质量为'low'。 |
     *
     * @param { T } data - 已就绪的图片资源数据。泛型，支持ArrayBuffer,
     *     [ImageSource]{@link @ohos.multimedia.image:image.ImageSource},
     *     [MovingPhoto]{@link photoAccessHelper.MovingPhoto}和boolean四种数据类型。
     * @param { Map<string, string> } [map] - 用于获取图片资源的额外信息，如图片质量。当前仅支持'quality'。 [since 12]
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     */
    onDataPrepared(data: T, map?: Map<string, string>): void;

    /**
     * 所需的媒体资产数据已准备就绪。
     *
     * @param { T | undefined } data - the returned data of media asset
     *     if data of media asset is invalid, return undefined.
     * @param { Map<string, string> } [map] - additional information for the data
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    onDataPrepared(data: T | undefined, map?: Map<string, string>): void;
  }

  /**
   * 媒体资源处理器，应用在onDataPrepared方法中可自定义媒体资源处理逻辑。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 13开始支持。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 13 dynamic
   * @since 23 static
   */
  interface QuickImageDataHandler<T> {
    /**
     * 当请求的图片资源准备就绪时，系统会回调媒体资源就绪通知方法。如果资源准备出错，回调的data将为undefined。
     * 
     * map支持返回的信息：
     * 
     * | map键名  | 值说明 |
     * |----------|-------|
     * | 'quality'  | 图片质量。高质量为'high'，低质量为'low'。 |
     *
     * @param { T } data - 已就绪的图片资源数据。 It is of the generic type and supports the
     *     [Picture]{@link @ohos.multimedia.image:image.Picture} type.
     * @param { image.ImageSource } imageSource - 已就绪的图片资源数据。
     * @param { Map<string, string> } map - 用于获取图片资源的额外信息，如图片质量。仅支持'quality'。
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     */
    onDataPrepared(data: T, imageSource: image.ImageSource, map: Map<string, string>): void;

    /**
     * 所需的媒体资产数据已快速准备就绪。
     *
     * @param { T | undefined } data - the returned data of picture
     *     if data of media asset is invalid, return undefined.
     * @param { image.ImageSource | null } imageSource - the returned data of imageSource
     *     if data of imageSource is invalid, return null.
     * @param { Map<string, string> } map - additional information for the data
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    onDataPrepared(data: T | undefined, imageSource: image.ImageSource | null, map: Map<string, string>): void;
  }

  /**
   * 照片代理，相机应用通过该对象写入图片数据。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface PhotoProxy {  }

  /**
   * 媒体资产管理类，管理媒体资源读取。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 11开始支持。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice [since 14]
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAssetManager {
    /**
     * 根据不同的策略模式，请求图片资源。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的上下文。
     * @param { PhotoAsset } asset - 待请求的媒体文件对象。
     * @param { RequestOptions } requestOptions - 图片请求策略模式配置项。
     * @param { MediaAssetDataHandler<image.ImageSource> } dataHandler - 媒体资源处理器，请求完成时触发回调。
     * @returns { Promise<string> } Promise对象，返回请求id，可用于
     *     [cancelRequest]{@link photoAccessHelper.MediaAssetManager#cancelRequest}取消请求。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    static requestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<image.ImageSource>
    ): Promise<string>;

    /**
     * 根据不同的策略模式，快速请求图片资源。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的上下文。
     * @param { PhotoAsset } asset - 待请求的媒体文件对象。
     * @param { RequestOptions } requestOptions - 图片请求策略模式配置项。
     * @param { QuickImageDataHandler<image.Picture> } dataHandler - 媒体资源处理器，当所请求的图片资源准备完成时会触发回调。
     * @returns { Promise<string> } Promise对象，返回请求id，可用于
     *     [cancelRequest]{@link photoAccessHelper.MediaAssetManager.cancelRequest}取消请求。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     * @since 26.0.0 static
     */
    static quickRequestImage(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: QuickImageDataHandler<image.Picture>
    ): Promise<string>;

    /**
     * 根据不同的策略模式，请求图片资源数据。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的上下文。
     * @param { PhotoAsset } asset - 待请求的媒体文件对象。
     * @param { RequestOptions } requestOptions - 图片请求策略模式配置项。
     * @param { MediaAssetDataHandler<ArrayBuffer> } dataHandler - 媒体资源处理器，当所请求的图片资源准备完成时会触发回调。
     * @returns { Promise<string> } Promise对象，返回请求id，可用于
     *     [cancelRequest]{@link photoAccessHelper.MediaAssetManager#cancelRequest}取消请求。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    static requestImageData(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<ArrayBuffer>
    ): Promise<string>;

    /**
     * 根据不同的策略模式，请求动态照片对象（动态照片对象可用于请求动态照片的资源数据）。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的上下文。
     * @param { PhotoAsset } asset - 待请求的媒体文件对象。
     * @param { RequestOptions } requestOptions - 图片请求策略模式配置项。
     * @param { MediaAssetDataHandler<MovingPhoto> } dataHandler - 媒体资源处理器，当所请求的图片资源准备完成时会触发回调。
     * @returns { Promise<string> } Promise对象，返回请求id，可用于
     *     [cancelRequest]{@link photoAccessHelper.MediaAssetManager.cancelRequest}取消请求。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. [since 18]
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    static requestMovingPhoto(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      dataHandler: MediaAssetDataHandler<MovingPhoto>
    ): Promise<string>;

    /**
     * 取消未触发回调的资产内容请求。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的上下文。
     * @param { string } requestId - 需要取消的请求id，requestImage等接口返回的有效请求id。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    static cancelRequest(context: Context, requestId: string): Promise<void>;

    /**
     * 根据不同的策略模式，请求视频资源数据到沙箱路径。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的上下文。
     * @param { PhotoAsset } asset - 待请求的媒体文件对象。
     * @param { RequestOptions } requestOptions - 视频请求策略模式配置项。
     * @param { string } fileUri - 目标写入沙箱路径uri。
     *     示例fileUri：'file://com.example.temptest/data/storage/el2/base/haps/entry/files/test.mp4'。
     * @param { MediaAssetDataHandler<boolean> } dataHandler - 媒体资源处理器，当所请求的视频资源写入完成时会触发回调。
     *     <br>视频资源写入成功时返回true，写入失败则返回false。
     * @returns { Promise<string> } Promise对象，返回请求id，可用于
     *     [cancelRequest]{@link photoAccessHelper.MediaAssetManager.cancelRequest}取消请求。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported. [since 15]
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    static requestVideoFile(
      context: Context,
      asset: PhotoAsset,
      requestOptions: RequestOptions,
      fileUri: string,
      dataHandler: MediaAssetDataHandler<boolean>
    ): Promise<string>;

    /**
     * 加载应用沙箱的动态照片。使用Promise异步回调。
     *
     * @param { Context } context - 传入AbilityContext或者UIExtensionContext的实例。
     * @param { string } imageFileUri - 应用沙箱动态照片的图片uri。
     *     <br>示例：'file://com.example.temptest/data/storage/el2/base/haps/ImageFile.jpg'
     * @param { string } videoFileUri - 应用沙箱动态照片的视频uri。
     *     <br>示例：'file://com.example.temptest/data/storage/el2/base/haps/VideoFile.mp4'
     * @returns { Promise<MovingPhoto> } Promise对象，返回
     *     [MovingPhoto]{@link @ohos.file.photoAccessHelper:photoAccessHelper}实例。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 14]
     * @since 12 dynamic
     * @since 23 static
     */
    static loadMovingPhoto(
      context: Context,
      imageFileUri: string,
      videoFileUri: string
    ): Promise<MovingPhoto>;
  }

  /**
   * 复制操作的进度信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface Progress {
    /**
     * 复制操作中已处理的信息数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly processed: int;

    /**
     * 复制操作中剩余需要处理的信息数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly remain: int;
  }

  /**
   * 复制操作的结果信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ResultInfo {
    /**
     * 复制操作的结果码。异常返回错误码23800151和23800301。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly code: int;

    /**
     * 复制操作的结果信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly result: Array<string|null>;
  }


  /**
   * 用于中断复制操作的信号。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export class TaskSignal {
    /**
     * 取消复制操作。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. No task can be canceled.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    cancel(): void;
  }

  /**
   * 批量复制操作选项。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface BatchOperationOptions {
    /**
     * 复制操作的大小进度监听器。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sizeProgressListener?: ProgressListener;

    /**
     * 复制操作的数量进度监听器。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    countProgressListener?: ProgressListener;

    /**
     * 复制操作的中断信号。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    taskSignal?: TaskSignal;

    /**
     * 复制操作的结果监听器。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    resultListener?: ResultListener;

    /**
     * 复制操作的自动重命名模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    mode?: int;
  }

  /**
   * 表示复制操作进度的监听类型。
   * 
   * 进度回调可以表示复制操作的大小进度和复制操作的文件数量进度。
   *
   * @param { Progress } progress - 进度信息。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type ProgressListener = (progress: Progress) => void;

  /**
   * 表示复制操作结果的监听类型。
   *
   * @param { ResultInfo } result - 结果回调信息。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type ResultListener = (result: ResultInfo) => void;

  /**
   * PhotoAsset的成员类型。
   * 
   * 成员类型为下表类型的并集。
   *
   * @unionmember { int } 表示值类型为数字，可取整型。
   * @unionmember { long } 表示值类型为数字，可取长整型。
   * @unionmember { double } 表示值类型为数字，可取小数。
   * @unionmember { string } 表示值类型为字符，可取任意值。
   * @unionmember { boolean } 表示值类型为布尔类型。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  type MemberType = int | long | double | string | boolean;

  /**
   * 文件属性名称及其值的Record类型数组。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 21 dynamic
   * @since 23 static
   */
  type PhotoAssetParams = Record<string, MemberType>[];

  /**
   * 提供封装文件属性的方法。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PhotoAsset {
    /**
     * 媒体文件资源URI（如：**file://media/Photo/1/IMG_datetime_0001/displayName.jpg**）， 详情参见用户文件URI介绍中的
     * [媒体文件URI](docroot://file-management/user-file-uri-intro.md#media-file-uri).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly uri: string;
    /**
     * 媒体文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly photoType: PhotoType;
    /**
     * 显示文件名，包含后缀名。字符串长度的取值范围为[1, 255]。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly displayName: string;
    /**
     * 获取PhotoAsset成员参数的值。
     *
     * @param { string } member - Name of the member parameter to obtain. Except **'uri'**, **'media_type'**,
     *     **'subtype'**, and **'display_name'**, you need to pass in
     *     [PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys} in **fetchColumns**. For example,
     *     to obtain the title, pass in **fetchColumns: ['title']**.
     * @returns { MemberType }      **PhotoAsset** member parameter obtained.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    get(member: string): MemberType;
    /**
     * 设置PhotoAsset成员参数。
     *
     * @param { string } member - 成员参数名称例如：
     *     [PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys}
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
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000014 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     * @example : set(PhotoKeys.TITLE, "newTitle"), call commitModify after set
     */
    set(member: string, value: string): void;
    /**
     * 修改文件的元数据。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - 回调函数。当修改文件元数据成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied [since 10 - 10]
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * 修改文件的元数据。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied [since 10 - 10]
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    commitModify(): Promise<void>;
    /**
     * 打开当前文件。使用callback异步回调。
     * 
     * 该接口返回的文件描述符在使用完毕后需要调用close进行释放。
     * 
     * > **说明：**
     * >
     * > 从API version 10开始支持，从API version 11开始废弃。出于安全考量，不再提供获取正式媒体文件句柄的接口。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } mode - 打开文件方式，分别为：'r'（只读）, 'w'（只写）, 'rw'（读写）。
     * @param { AsyncCallback<number> } callback - callback返回文件描述符。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.file.fs:fileIo.open
     */
    open(mode: string, callback: AsyncCallback<number>): void;
    /**
     * 打开当前文件。使用Promise异步回调。
     * 
     * 该接口返回的文件描述符在使用完毕后需要调用close进行释放。
     * 
     * > **说明：**
     * >
     * > 从API version 10开始支持，从API version 11开始废弃。出于安全考量，不再提供获取正式媒体文件句柄的接口。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } mode - 打开文件方式，分别为：'r'（只读）, 'w'（只写）, 'rw'（读写）。
     * @returns { Promise<number> } Promise对象，返回文件描述符。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.file.fs:fileIo.open
     */
    open(mode: string): Promise<number>;
    /**
     * 以只读方式打开当前文件。使用callback异步回调。
     * 
     * 使用完毕后调用close释放文件描述符。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<number> } callback - 回调函数。当打开当前文件成功，err为undefined，data为文件描述符；
     *     否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.file.fs:fileIo.open
     */
    getReadOnlyFd(callback: AsyncCallback<number>): void;
    /**
     * 以只读方式打开当前文件。使用promise异步回调。
     * 
     * 返回的文件描述符在使用完毕后需要调用close进行释放。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<number> } Promise对象，返回文件描述符。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.file.fs:fileIo.open
     */
    getReadOnlyFd(): Promise<number>;
    /**
     * 关闭当前文件。使用callback异步回调。
     *
     * @param { number } fd - 文件描述符。
     * @param { AsyncCallback<void> } callback - 回调函数。当关闭当前文件成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.file.fs:fileIo.close
     */
    close(fd: number, callback: AsyncCallback<void>): void;
    /**
     * 关闭当前文件。使用Promise异步回调。
     *
     * @param { number } fd - 文件描述符。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead @ohos.file.fs:fileIo.close
     */
    close(fd: number): Promise<void>;
    /**
     * 获取文件的缩略图。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - 回调函数。当获取文件的缩略图成功，err为undefined，
     *     data为缩略图的PixelMap；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    getThumbnail(callback: AsyncCallback<image.PixelMap>): void;
    /**
     * 获取文件的缩略图，传入缩略图尺寸。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } size - 缩略图尺寸。
     * @param { AsyncCallback<image.PixelMap> } callback - 回调函数。当获取文件的缩略图成功，err为undefined，
     *     data为缩略图的PixelMap；否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    getThumbnail(size: image.Size, callback: AsyncCallback<image.PixelMap>): void;
    /**
     * 获取文件的缩略图，传入缩略图尺寸。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } [size] - 缩略图尺寸。
     * @returns { Promise<image.PixelMap> } Promise对象，返回缩略图的PixelMap。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 22]
     * @since 10 dynamic
     * @since 23 static
     */
    getThumbnail(size?: image.Size): Promise<image.PixelMap>;
    /**
     * 获取文件缩略图的ArrayBuffer，传入缩略图的类型。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { ThumbnailType } type - 缩略图类型。
     * @returns { Promise<ArrayBuffer> } Promise对象，返回缩略图的ArrayBuffer。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getThumbnailData(type: ThumbnailType): Promise<ArrayBuffer>;
    /**
     * 将文件设置为收藏文件。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } favoriteState - 是否设置为收藏文件， true：设置为收藏文件，false：取消收藏。
     * @param { AsyncCallback<void> } callback - callback返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setFavorite
     */
    setFavorite(favoriteState: boolean, callback: AsyncCallback<void>): void;
    /**
     * 将文件设置为收藏文件。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } favoriteState - 是否设置为收藏文件， true：设置为收藏文件，false：取消收藏。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setFavorite
     */
    setFavorite(favoriteState: boolean): Promise<void>;
    /**
     * 将文件设置为隐私文件。使用callback异步回调。
     * 
     * 隐私文件存在隐私相册中，用户通过隐私相册去获取隐私文件后可以通过设置hiddenState为false来从隐私相册中移除。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - Whether to set a file to hidden state. **true** to hide, **false** otherwise.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setHidden
     */
    setHidden(hiddenState: boolean, callback: AsyncCallback<void>): void;
    /**
     * 将文件设置为隐私文件。使用Promise异步回调。
     * 
     * 隐私文件存在隐私相册中，用户通过隐私相册去获取隐私文件后可以通过设置hiddenState为false来从隐私相册中移除。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - 是否设置为隐藏文件，true:将文件资产放入隐藏相册;false:从隐藏相册中恢复。
     * @returns { Promise<void> } callback返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setHidden
     */
    setHidden(hiddenState: boolean): Promise<void>;
    /**
     * 修改图片或者视频的备注信息。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } userComment - 待修改的图片或视频的备注信息，备注信息最长为420字符。
     * @param { AsyncCallback<void> } callback - callback返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setUserComment
     */
    setUserComment(userComment: string, callback: AsyncCallback<void>): void;
    /**
     * 修改图片或者视频的备注信息。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } userComment - 待修改的图片或视频的备注信息，备注信息最长为420字符。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setUserComment
     */
    setUserComment(userComment: string): Promise<void>;
    /**
     * 读取jpg格式图片的Exif标签，并返回json格式的字符串。使用callback异步回调。
     * 
     * 此接口中获取的Exif标签信息是由 [image]{@link @ohos.multimedia.image:image}模块提供。Exif标签详细信息请参考 
   	 * [image.PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}。
     * 
     * > **注意：**
     * >
     * > 此接口返回的是Exif标签组成的json格式的字符串，完整Exif信息由all_exif与
     * > [PhotoKeys.USER_COMMENT]{@link photoAccessHelper.PhotoKeys}组成， 
     * > [FetchOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions}.fetchColumns需要传入这两个字段。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<string> } callback - 返回Exif字段组成的json格式的字符串。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getExif(callback: AsyncCallback<string>): void;
    /**
     * 根据智慧分析类型获取指定分析结果数据。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AnalysisType } analysisType - Smart analysis type.
     * @returns { Promise<string> } Returns analysis info into a json string
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getAnalysisData(analysisType: AnalysisType): Promise<string>;
    /**
     * 读取jpg格式图片的Exif标签，并返回json格式的字符串。使用Promise异步回调。
     * 
     * 此接口中获取的Exif标签信息是由[image]{@link @ohos.multimedia.image:image} 模块提供。Exif标签详细信息请参考
     * [image.PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}.
     * 
     * > **注意：**
     * >
     * > 此接口返回的是Exif标签组成的json格式的字符串，完整Exif信息由all_exif与
     * > [PhotoKeys.USER_COMMENT]{@link photoAccessHelper.PhotoKeys}组成，
     * > [FetchOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions}.fetchColumns需要传入这两个字段。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } 返回Exif标签组成的json格式的字符串。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getExif(): Promise<string>;
    /**
     * 为图片或视频资源设置pending状态。使用callback异步回调。
     * 
     * 将文件通过`setPending(true)`设置为pending状态后，只能通过`setPending(false)`解除pending状态。
   	 * 可以通过`photoAsset.get(photoAccessHelper.PhotoKeys.PENDING)`的方式获取是否为pending状态，pending状态下返回true，
     * 否则返回false。
     * 
     * > **注意：**
     * >
     * > setPending只能在文件的创建期使用，在文件的首次创建流程的close之后，无法通过setPending(true)将文件设置为pending状态。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } pendingState - 设置的pending状态，true为设置pending状态，false为解除pending状态。
     * @param { AsyncCallback<void> } callback - Callback对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setPending(pendingState: boolean, callback: AsyncCallback<void>): void;
    /**
     * 为图片或视频资源设置pending状态。使用Promise异步回调。
     * 
     * 将文件通过`setPending(true)`设置为pending状态后，只能通过`setPending(false)`解除pending状态。
     * 可以通过`photoAsset.get(photoAccessHelper.PhotoKeys.PENDING)`的方式获取是否为pending状态，pending状态下返回true，
     * 否则返回false。
     * 
     * > **注意：**
     * >
     * > setPending只能在文件的创建期使用，在文件的首次创建流程的close之后，无法通过setPending(true)将文件设置为pending状态。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } pendingState - 设置的pending状态，true为设置pending状态，false为解除pending状态。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setPending(pendingState: boolean): Promise<void>;
    /**
     * 查询图片或视频资源是否被编辑过。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<boolean> } callback - Callback对象，返回图片或视频资源是否被编辑过。
     *     true为被编辑过，false为没有被编辑过，默认是false。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isEdited(callback: AsyncCallback<boolean>): void;
    /**
     * 查询图片或视频资源是否被编辑过。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<boolean> } Promise对象，返回图片或视频资源是否被编辑过。
     *     true为被编辑过，false为没有被编辑过，默认是false。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isEdited(): Promise<boolean>;
    /**
     * 获得图片或视频资源的编辑数据。使用callback异步回调。
     * 
     * 如果资源未编辑过，则返回一个空字符串。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<string> } callback - Callback对象，返回图片或视频资源的编辑数据。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    requestEditData(callback: AsyncCallback<string>): void;
    /**
     * 获得图片或视频资源的编辑数据。使用Promise异步回调。
     * 
     * 如果资源未编辑过，则返回一个空字符串。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Promise对象，返回图片或视频资源的编辑数据。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    requestEditData(): Promise<string>;
    /**
     * 获得资产编辑数据。使用Promise异步回调。
     * 
     * 如果资源未编辑过，则返回的编辑数据的内容为空字符串。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<MediaAssetEditData> } Promise对象，返回资产编辑数据。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getEditData(): Promise<MediaAssetEditData>;
    /**
     * 克隆资产，可设置文件名，但不支持修改文件类型。使用promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } title - 克隆后资产的标题。参数规格为：
     *     <br>- 不应包含扩展名。
     *     <br>- 文件名字符串长度的取值范围为[1, 255]（资产文件名为标题+扩展名）。
     *     <br>- 不允许出现的非法英文字符，包括：. \ / : * ? " ' ` < > | { } [ ]
     * @returns { Promise<PhotoAsset> } Promise对象，返回
     *     [PhotoAsset]{@link @ohos.file.photoAccessHelper:photoAccessHelper}。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 14 dynamic
     * @since 23 static
     */
    clone(title: string): Promise<PhotoAsset>;
    /**
     * 打开源文件并返回fd（文件描述符）。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<int> } callback - Callback对象，返回源文件fd。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    requestSource(callback: AsyncCallback<int>): void;
    /**
     * 打开源文件并返回fd（文件描述符）。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<int> } Promise对象，返回源文件fd。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    requestSource(): Promise<int>;
    /**
     * 提交编辑数据以及编辑后的图片或视频。使用callback异步回调。
     * 
     * 通过uri将编辑后的文件传递给媒体库，uri是编辑后的文件在应用沙箱下的FileUri，可参考
     * [FileUri]{@link @ohos.file.fileuri:fileUri}。
     * 
     * > **注意：**
     * >
     * > 新的编辑数据提交后，将覆盖掉原来的编辑数据。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } editData - 提交的编辑数据。
     * @param { string } uri - 提交的编辑后的图片或视频，在应用沙箱下的uri。
     * @param { AsyncCallback<void> } callback - Callback对象，返回void。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    commitEditedAsset(editData: string, uri: string, callback: AsyncCallback<void>): void;
    /**
     * 提交编辑数据以及编辑后的图片或视频。使用Promise异步回调。
     * 
     * 通过uri将编辑后的文件传递给媒体库，uri是编辑后的文件在应用沙箱下的FileUri，可参考
     * [FileUri]{@link @ohos.file.fileuri:fileUri}。
     * 
     * > **注意：**
     * >
     * > 新的编辑数据提交后，将覆盖掉原来的编辑数据。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } editData - 提交的编辑数据。
     * @param { string } uri - 提交的编辑后的图片或视频，在应用沙箱下的uri。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    commitEditedAsset(editData: string, uri: string): Promise<void>;
    /**
     * 回退到编辑前的状态。使用callback异步回调。
     * 
     * > **注意：**
     * >
     * > 调用该接口后，编辑数据和编辑后的图片或视频资源都将被删除，无法恢复，请谨慎调用。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Callback对象，返回void。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    revertToOriginal(callback: AsyncCallback<void>): void;
    /**
     * 回退到编辑前的状态。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > 调用该接口后，编辑数据和编辑后的图片或视频资源都将被删除，无法恢复，请谨慎调用。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    revertToOriginal(): Promise<void>;
    /**
     * 通过callback的形式，获取资源的快速缩略图和普通缩略图。
     * 
     * 快速缩略图尺寸为128*128，普通缩略图尺寸为256*256。应用调用接口后，callback将返回两次缩略图对象，第一次为快速缩略图，
     * 第二次为普通缩略图。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback对象，返回获取的缩略图，调用2次。
     * @returns { string } 本次获取任务的id。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     */
    requestPhoto(callback: AsyncCallback<image.PixelMap>): string;
    /**
     * 通过callback的形式，获取资源的快速缩略图和普通缩略图。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback invoked twice to return the quick
     *     and quality thumbnails obtained.
     * @returns { string | null } Returns request photo task id. if the operation fails, returns null.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    requestPhoto(callback: AsyncCallback<image.PixelMap>): string | null;
    /**
     * 通过callback的形式，根据传入的选项，获取资源的缩略图。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { RequestPhotoOptions } options - 获取资源缩略图的选项。
     * @param { AsyncCallback<image.PixelMap> } callback - Callback对象，返回获取的缩略图，根据选项的设置可能调用超过1次。
     * @returns { string } 本次获取任务的id。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     */
    requestPhoto(options: RequestPhotoOptions, callback: AsyncCallback<image.PixelMap>): string;
    /**
     * 通过callback的形式，根据传入的选项，获取资源的缩略图。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { RequestPhotoOptions } options - Options for obtaining the asset thumbnail.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the thumbnails obtained.
     *     The callback may be invoked more than once, depending on options.
     * @returns { string | null } Returns request photo task id. if the operation fails, returns null.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed,
     *     application which is not a system application uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    requestPhoto(options: RequestPhotoOptions, callback: AsyncCallback<image.PixelMap>): string | null;
    /**
     * 根据id取消指定的获取媒体缩略图的任务。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } requestId - 待取消的获取媒体缩略图的任务id。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    cancelPhotoRequest(requestId: string): void;
    /**
     * 获取视频中关键视频帧位置的指定类型缩略图。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { long } beginFrameTimeMs - 获取视频帧的时间位置，单位ms，0：封面帧。
     * @param { ThumbnailType } type - 缩略图类型。
     * @returns { Promise<image.PixelMap> } Promise对象，返回缩略图的PixelMap。若获取不到，默认返回封面帧
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getKeyFrameThumbnail(beginFrameTimeMs: long, type: ThumbnailType): Promise<image.PixelMap>;
    /**
     * 复制同一相册（用户创建的相册或应用相册）中的图片，并转换为指定格式。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } title - 转换后的图片标题。
     * @param { SupportedImageFormat } imageFormat - 支持的目标格式类型。
     * @returns { Promise<PhotoAsset> } Promise对象，返回转码后文件的PhotoAsset。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     *     <br>1. The original file does not exist locally in PhotoAsset;
     *     <br>2. The original file format is not within the supported range;
     *     <br>3. The original file is a temporary file or is being edited;
     *     <br>4. The title is the same with an image in the same album;
     *     <br>5. PhotoAsset is a photo in the trash or a hidden photo;
     *     <br>6. The title does not meet the parameter specifications.
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the
     *     logs.Possible causes:
     *     <br>1. Database corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    convertImageFormat(title: string, imageFormat: SupportedImageFormat): Promise<PhotoAsset>;
    /**
     * 为不支持HEIF/HEIC图片编码格式的第三方应用创建JPEG格式的兼容副本。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     *     <br>1. The original file does not exist locally in PhotoAsset;
     *     <br>2. The original file format is not within the supported range;
     *     <br>3. The original file is a temporary file or is being edited;
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the
     *     logs.Possible causes:
     *     <br>1. Database corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    createTemporaryCompatibleDuplicate(): Promise<void>;

    /**
     * 打开文件，当从云端流读视频文件时会在图库沙箱进行缓存。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<int> } 返回打开文件的Fd。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     *     The image and video files corresponding to the photoasset do not exist.
     * @throws { BusinessError } 23800302 - Failed to open the file. Possible causes:
     *     1. Unable to access cloud images due to network connectivity issues;
     *     2. File system malfunction.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    getReadOnlyFdWithCached(): Promise<int>;
  }

  /**
   * 枚举，图片和视频文件关键信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  enum PhotoKeys {
    /**
     * 文件uri。
     * 
     * **注意：**
     * 
     * 查询照片时，该字段仅支持使用
     * [DataSharePredicates.equalTo]{@link @ohos.data.dataSharePredicates:dataSharePredicates.DataSharePredicates#equalTo}
     * 谓词。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    URI = 'uri',
    /**
     * 媒体文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    PHOTO_TYPE = 'media_type',
    /**
     * 显示名字。规格为：
     * 
     * - 应包含有效文件主名和图片或视频扩展名。
     * - 文件名字符串长度的取值范围为[1, 255]。
     * - 文件主名中不允许出现的非法英文字符，包括：. .. \ / : * ? " ' ` < > | { } [ ]。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    DISPLAY_NAME = 'display_name',
    /**
     * 文件大小（单位：字节）。动态照片的size包括图片和视频的总大小。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    SIZE = 'size',
    /**
     * 文件创建时的Unix时间戳（单位：秒）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    DATE_ADDED = 'date_added',
    /**
     * 文件修改时的Unix时间戳（单位：秒）。修改文件名不会改变此值，当文件内容发生修改时才会更新。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    DATE_MODIFIED = 'date_modified',
    /**
     * 持续时间（单位：毫秒）。
     * 在API version 23之前，动态照片的duration将返回0；
     * 在API version 23及之后，返回动态照片附带视频片段的时长，异常场景返回-1。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    DURATION = 'duration',
    /**
     * 图片宽度（单位：像素）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    WIDTH = 'width',
    /**
     * 图片高度（单位：像素）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    HEIGHT = 'height',
    /**
     * 拍摄时的Unix时间戳（单位：秒）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    DATE_TAKEN = 'date_taken',
    /**
     * 文件的旋转角度，单位为度。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    ORIENTATION = 'orientation',
    /**
     * 收藏。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    FAVORITE = 'is_favorite',
    /**
     * 文件标题。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    TITLE = 'title',
    /**
     * 文件位置类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 10 - 15]
     * @publicapi [since 16]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    POSITION = 'position',
    /**
     * 删除日期（删除文件时间距1970年1月1日的秒数值）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    DATE_TRASHED = 'date_trashed',
    /**
     * 文件的隐藏状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    HIDDEN = 'hidden',
    /**
     * 用户注释信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    USER_COMMENT = 'user_comment',
    /**
     * 锁屏相机拍照或录像的标记字段（仅开放给系统相机,其key值由系统相机定义）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_SHOT_KEY = 'camera_shot_key',
    /**
     * 创建文件的年份。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DATE_YEAR = 'date_year',
    /**
     * 创建文件的月份。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DATE_MONTH = 'date_month',
    /**
     * 创建文件的日期。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DATE_DAY = 'date_day',
    /**
     * pending状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    PENDING = 'pending',
    /**
     * 文件创建时的Unix时间戳（单位：毫秒）。
     * 
     * **注意：**
     * 
     * 查询照片时，不支持基于该字段排序。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DATE_ADDED_MS = 'date_added_ms',
    /**
     * 文件修改时的Unix时间戳（单位：毫秒）。修改文件名不会改变此值，当文件内容发生修改时才会更新。
     * 
     * **注意：**
     * 
     * 查询照片时，不支持基于该字段排序。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DATE_MODIFIED_MS = 'date_modified_ms',
    /**
     * 删除日期（删除文件时间距1970年1月1日的毫秒数值）。
     * 
     * **注意：** 查询照片时，不支持基于该字段排序。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DATE_TRASHED_MS = 'date_trashed_ms',
    /**
     * 媒体文件的子类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    PHOTO_SUBTYPE = 'subtype',
    /**
     * 动态照片效果模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MOVING_PHOTO_EFFECT_MODE = 'moving_photo_effect_mode',
    /**
     * 媒体文件的动态范围类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DYNAMIC_RANGE_TYPE = 'dynamic_range_type',
    /**
     * 动态照片的封面位置，具体表示封面帧所对应的视频时间戳（单位：微秒）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    COVER_POSITION = 'cover_position',
    /**
     * 一组连拍照片的唯一标识：uuid。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    BURST_KEY = 'burst_key',
    /**
     * 缩略图生成标识。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    THUMBNAIL_READY = 'thumbnail_ready',
    /**
     * LCD图片的宽高，值为width:height拼接而成的字符串。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    LCD_SIZE = 'lcd_size',
    /**
     * THUMB图片的宽高，值为width:height拼接而成的字符串。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    THM_SIZE = 'thm_size',
    /**
     * 大图浏览时间，值为拍摄时对应时区的时间的字符串，不会跟随时区变化。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 13 dynamic
     * @since 23 static
     */
    DETAIL_TIME = 'detail_time',
    /**
     * 拍摄时的Unix时间戳（单位：毫秒）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 13 dynamic
     * @since 23 static
     */
    DATE_TAKEN_MS = 'date_taken_ms',
    /**
     * 云增强任务标识。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CE_AVAILABLE = 'ce_available',
    /**
     * 水印可编辑标识。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    SUPPORTED_WATERMARK_TYPE = 'supported_watermark_type',
    /**
     * 缩略图可见标识。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    THUMBNAIL_VISIBLE = 'thumbnail_visible',
    /**
     * 是否支持自动云增强。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    IS_CE_AUTO = 'is_auto',
    /**
     * 照片所属的相册id。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 18 - 21]
     * @publicapi [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    OWNER_ALBUM_ID = 'owner_album_id',
    /**
     * 是否设置为最近显示。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    IS_RECENT_SHOW = 'is_recent_show',
    /**
     * 文件的后缀名。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 18 dynamic
     * @since 23 static
     */
    MEDIA_SUFFIX = 'media_suffix',
    /**
     * 文件大小总和。在fetchColumns中填入SUM_SIZE属性时，仅获取到第一个资产，并且属性中带有所有资产的总大小。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    SUM_SIZE = 'sum(size)',
    /**
     * 文件的旋转角度信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    EXIF_ROTATE = 'exif_rotate',
    /**
     * 文件记忆链接的状态信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    HAS_APPLINK = 'has_applink',
    /**
     * I文件记忆链接的信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    APPLINK = 'applink',
    /**
     * 文件的HDR模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDR_MODE = 'hdr_mode',
    /**
     * 复合图资产显示状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    COMPOSITE_DISPLAY_STATUS = 'composite_display_status',
    /**
     * Source type of assets, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    ASSET_SOURCE_TYPE = 'file_source_type',
    /**
     * Storage path of fusion assets, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    FUSION_ASSET_STORAGE_PATH = 'storage_path',
    /**
     * 文件在云端的唯一标识。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    CLOUD_ID = 'cloud_id',
    /**
     * 兼容副本的状态信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EXIST_COMPATIBLE_DUPLICATE = 'exist_compatible_duplicate',
    /**
     * 视频文件的log模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    VIDEO_MODE = 'video_mode',
    /**
     * 资产的编辑数据已存在。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EDIT_DATA_EXIST = 'edit_data_exist',
    /**
     * 照片的更改时间（单位：秒）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    CHANGE_TIME = 'change_time',
    /**
     * 图片和视频的宽高比。
     * 
     * ​
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    ASPECT_RATIO = 'aspect_ratio',
    /**
     * 文件的包名信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PACKAGE_NAME = 'package_name',
    /**
     * 图片风控状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PHOTO_RISK_STATUS = 'photo_risk_status',
    /**
     * 资产添加时间的年份。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DATE_ADDED_YEAR = 'date_added_year',
    /**
     * 资产添加时间的月份。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DATE_ADDED_MONTH = 'date_added_month',
    /**
     * 资产添加时间的日期。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DATE_ADDED_DAY = 'date_added_day',
    /**
     * 子弹时间动图
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LIVEPHOTO_4D_STATUS = 'livephoto_4d_status',
    /**
     * 资产的unique id
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    UNIQUE_ID = 'unique_id',
    /**
     * 缩略图状态标识。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    THUMB_STATUS = 'thumb_status',
    /**
     * LCD图大小。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    LCD_FILE_SIZE = 'lcd_file_size',
    /**
     * 文件的隐藏状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FILE_HIDDEN = 'file_hidden',
    /**
     * 文件隐藏时间（隐藏文件时间距1970年1月1日的毫秒数值）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HIDDEN_TIME = 'hidden_time',
    /**
     * 本地文件的实际大小（单位：字节）。
     * 
     * - 该属性仅表示本地文件大小，默认值为0表示纯云文件或尚未识别的本地文件大小。
     * - 当本地文件为动态照片且模式发生变化时，该属性会发生变化。例如：当图库中的动态照片处于“关闭动态”状态时，该属性仅表示封面帧大小。
     * 
     * ​
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    LOCAL_ASSET_SIZE = 'local_asset_size',
    /**
     * 附件文件的大小。单位为字节（Byte）。
   	 *
   	 * - 默认值为0，表示尚未识别的附件文件大小或附件文件大小为0。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ATTACHMENT_SIZE = 'attachment_size',
    /**
     * 文件大小总和。在fetchColumns中填入SUM_SIZE属性时，仅获取到第一个资产，并且属性中带有所有资产的总大小。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     */
    SUM_SIZE = 'sum(size)',
  }

  /**
   * 枚举，用于标识图片是否存在风险的类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum PhotoRiskStatus {
    /**
     * 默认类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    UNIDENTIFIED = 0,
    /**
     * 无风险图片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    APPROVED = 1,
    /**
     * 疑似风险图片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SUSPICIOUS = 2,
    /**
     * 确认风险图片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    REJECTED = 3
  }

  /**
   * 枚举，视频文件的log模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 22 dynamic
   * @since 23 static
   */
  export enum VideoMode {
    /**
     * 默认类型。
     * 
     * 取值为0表示当前视频非log模式或未判断类型，后续部分视频判断后字段会更新为1，因此不建议使用此字段进行查询。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 22 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * log模式视频的文件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 22 dynamic
     * @since 23 static
     */
    LOG_VIDEO = 1
  }

  /**
   * 融合资产类型枚举表。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  enum FusionAssetType {
    /**
     * 兼容资产
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    COMPATIBLE_ASSET = 0
  }
  /**
   * 融合资产信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  interface FusionAssetsInfo {
    /**
     * 融合资产类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    assetsType: FusionAssetType;
    /**
     * 资产数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    assetsCount: int;
    /**
     * 路径。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    assetsPath: string;
  }
  /**
   * 枚举，相册关键信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AlbumKeys {
    /**
     * 相册uri。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    URI = 'uri',
    /**
     * 相册名字。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ALBUM_NAME = 'album_name',
    /**
     * 相册的虚拟路径。
     * 
     * 支持的相册及对应的lpath值：
     * 
     * - 相机应用相册：'/DCIM/Camera' 
     * - 截图应用相册：'/Pictures/Screenshots' 
     * - 屏幕录制应用相册：'/Pictures/Screenrecords' 
     * - 用户创建的相册：'/Pictures/Users/{用户自定义相册名称}'
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 18 - 22]
     * @publicapi [since 23]
     * @since 18 dynamic
     * @since 23 static
     */
    ALBUM_LPATH = 'lpath',
    /**
     * 相册的包名。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    BUNDLE_NAME = 'bundle_name',
    /**
     * 相册修改的时间戳（单位：毫秒）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    DATE_MODIFIED = 'date_modified',
    /**
     * 相册封面的来源。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COVER_URI_SOURCE = 'cover_uri_source',
    /**
     * 相册同步状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    UPLOAD_STATUS = 'upload_status',
    /**
     * 相册的更改时间（单位：秒）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    CHANGE_TIME = 'change_time',
    /**
     * 相册为隐藏状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    HIDDEN = 'hidden',
    /**
     * 文件管理中文件夹的隐藏状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FILE_HIDDEN = 'file_hidden'
  }

  /**
   * 枚举，系统中隐藏文件显示模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum HiddenPhotosDisplayMode {
    /**
     * 按系统预置的隐藏相册显示隐藏文件，即显示系统中所有的隐藏文件。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ASSETS_MODE = 0,
    /**
     * 按相册显示隐藏文件（即显示系统中所有包含隐藏文件的相册，除系统预置的隐藏相册本身和回收站相册以外）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ALBUMS_MODE = 1
  }

  /**
   * 检索条件。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  interface FetchOptions {
    /**
     * 检索条件，指定列名查询。
     * 
     * 对于照片，如果该参数为空，默认查询'uri'、'media_type'、'subtype'和'display_name'，使用[get]{@link photoAccessHelper.PhotoAsset.get}接口获取当
     * 前对象的其他属性时将会报错。示例：fetchColumns: ['uri', 'title']。
     * 
     * 对于相册，如果该参数为空，默认查询'uri'和'album_name'。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    fetchColumns: Array<string>;
    /**
     * 谓词查询，显示过滤条件。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    predicates: dataSharePredicates.DataSharePredicates;
  }

  /**
   * 图片或视频的创建选项。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface PhotoCreateOptions {
    /**
     * 图片或者视频的子类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    subtype?: PhotoSubtype;
    /**
     * 锁屏相机拍照或录像的标记字段（仅开放给系统相机,其key值由系统相机定义）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    cameraShotKey?: string;
    /**
     * 用户id。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    userId?: int;
  }

  /**
   * 保存图片/视频到媒体库的配置，包括保存的文件名等。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface PhotoCreationConfig {
    /**
     * 图片或者视频的标题，不传入时由系统生成。参数规格为：
     * 
     * - 不应包含扩展名。
     * - 文件名字符串长度为1~255（资产文件名为标题+扩展名）。
     * - 不允许出现的非法英文字符，包括：. \ / : * ? " ' ` < > | { } [ ]
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * 文件扩展名，例如'jpg'。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    fileNameExtension: string;

    /**
     * 创建的文件类型[PhotoType]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoType}，IMAGE或者VIDEO。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    photoType: PhotoType;

    /**
     * 图片或者视频的文件子类型[PhotoSubtype]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSubtype}，不传入时默认为DEFAULT。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    subtype?: PhotoSubtype;
  }

  /**
   * 保存图片或视频到媒体库时的配置项，包括保存的文件名、文件类型和其他相关参数。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  interface CreationSetting {}

  /**
   * 保存图片或视频到媒体库时的配置项，包括保存的文件名、文件类型和其他相关参数。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export interface CreationSetting {
    /**
     * 图片或者视频的标题。
     * 
     * 不传入时由系统生成，参数规格如下：
     * 
     * - 不应包含扩展名。
     * - 不允许出现的非法英文字符，包括：. \ / : * ? " ' ` < > | { } [ ]
     * - 由于文件名由标题 + 扩展名组成，文件名字符串长度范围为[1, 255]，因此请注意标题长度不宜过长。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    title?: string;

    /**
     * 文件扩展名，例如'jpg'。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    fileNameExtension: string;

    /**
     * 创建的媒体文件类型[PhotoType]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoType}，包含IMAGE或VIDEO。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    photoType: PhotoType;
  }

  /**
   * 图片或视频的创建选项。
   * 
   * title参数的规格如下：
   * 
   * - 不应包含扩展名。
   * - 文件名字符串长度为1~255。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CreateOptions {
    /**
     * 图片或者视频的标题。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    title?: string;
    /**
     * 图片或者视频的文件子类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    subtype?: PhotoSubtype;
  }

  /**
   * 获取图片或视频缩略图的选项。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface RequestPhotoOptions {
    /**
     * 获取缩略图的尺寸。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    size?: image.Size;
    /**
     * 获取的操作类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    requestPhotoType?: RequestPhotoType;
  }

  /**
   * 代替应用创建资产传入的应用信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface PhotoCreationSource {
    /**
     * 需保存图片/视频文件的应用bundle name。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    bundleName?: string;
    /**
     * 需保存图片/视频文件的app name。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    appName?: string;
    /**
     * 需保存图片/视频文件的app id。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    appId?: string;
    /**
     * 应用标识，将访问权限授予tokenId标识的应用。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    tokenId?: long;
  }

  /**
   * 文件检索结果集。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  interface FetchResult<T> {
    /**
     * 获取文件检索结果中的文件总数。
     *
     * @returns { int } 检索到的文件总数。
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getCount(): int;
    /**
     * 检查结果集是否指向最后一行。
     *
     * @returns { boolean } 当结果集指向最后一行时返回true，否则返回false。
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    isAfterLast(): boolean;
    /**
     * 获取文件检索结果中的第一个文件资产。使用callback异步回调。
     *
     * @param { AsyncCallback<T> } callback - 回调函数。当获取结果集中的第一个文件资产成功，err为undefined，data为具体检索结果；否则为错误对象。
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getFirstObject(callback: AsyncCallback<T>): void;
    /**
     * 获取文件检索结果中的第一个文件资产。使用Promise异步回调。
     *
     * @returns { Promise<T> } Promise对象，返回结果集中第一个对象。
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getFirstObject(): Promise<T>;
    /**
     * 获取文件检索结果中的下一个文件资产。使用callback异步回调。
     * 
     * 在调用此方法之前，必须使用[isAfterLast()]{@link photoAccessHelper.FetchResult.isAfterLast}来检查当前位置是否为最后一行。
     *
     * @param { AsyncCallback<T> } callback - 回调函数。当获取结果集中的下一个文件资产成功，err为undefined，data为具体检索结果；否则为错误对象。
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getNextObject(callback: AsyncCallback<T>): void;
    /**
     * 获取文件检索结果中的下一个文件资产。使用Promise异步回调。
     * 
     * 在调用此方法之前，必须使用[isAfterLast()]{@link photoAccessHelper.FetchResult.isAfterLast}来检查当前位置是否为最后一行。
     *
     * @returns { Promise<T> } Promise对象，返回结果集中下一个对象。
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getNextObject(): Promise<T>;
    /**
     * 获取文件检索结果中的最后一个文件资产。使用callback异步回调。
     *
     * @param { AsyncCallback<T> } callback - 回调函数。当获取结果集中的最后一个文件资产成功，err为undefined，data为具体检索结果；否则为错误对象。
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getLastObject(callback: AsyncCallback<T>): void;
    /**
     * 获取文件检索结果中的最后一个文件资产。使用Promise异步回调。
     *
     * @returns { Promise<T> } Promise对象，返回结果集中的最后一个对象。
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getLastObject(): Promise<T>;
    /**
     * 获取文件检索结果中具有指定索引的文件资产。使用callback异步回调。
     *
     * @param { int } index - 要获取的文件的索引，从0开始。
     * @param { AsyncCallback<T> } callback - 回调函数。当获取结果集中指定索引的文件资产成功，err为undefined，data为具体检索结果；否则为错误对象。
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getObjectByPosition(index: int, callback: AsyncCallback<T>): void;
    /**
     * 获取文件检索结果中指定索引的文件资产。使用Promise异步回调。
     *
     * @param { int } index - 要获取的文件的索引，从0开始。
     * @returns { Promise<T> } Promise对象，返回结果集中指定索引的一个对象。
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getObjectByPosition(index: int): Promise<T>;
    /**
     * 获取文件检索结果中的所有文件资产。使用callback异步回调。
     *
     * @param { AsyncCallback<Array<T>> } callback - 回调函数。当获取结果集中的所有文件资产成功，err为undefined，data为具体检索结果；否则为错误对象。
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getAllObjects(callback: AsyncCallback<Array<T>>): void;
    /**
     * 获取文件检索结果中的所有文件资产。使用Promise异步回调。
     *
     * @returns { Promise<Array<T>> } Promise对象，返回所有文件资产的数组。
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getAllObjects(): Promise<Array<T>>;
    /**
     * 在文件检索结果中，从指定索引（第一个参数）开始，获取指定长度（第二个参数）的文件资产数组。使用Promise异步回调。
     *
     * @param { int } index - 开始获取的文件资产索引，大于等于0，小于文件检索结果中对象数量。
     * @param { int } offset - 要获取的文件资产数量，大于0。
     *     <br>index和offset之和需要小于检索结果中的对象数量，否则抛出23800151错误码。
     * @returns { Promise<T[]> } 返回Promise异步回调数组。
     * @throws { BusinessError } 202 - Called by non-system application [since 21 - 22]
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: index or offset validity check failed.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 21 - 22]
     * @publicapi [since 23]
     * @since 21 dynamic
     * @since 23 static
     */
    getRangeObjects(index: int, offset: int): Promise<T[]>;
    /**
     * 释放FetchResult实例并使其失效，释放后无法再调用其他方法。
     *
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    close(): void;

    /**
     * 判断文件检索结果中是否包含指定的文件资产。使用Promise异步回调。
     *
     * @param { T } object - 指定的文件资产。
     * @returns { Promise<boolean> } Promise对象。返回true表示指定的文件资产在文件检索结果中；返回false表示指定的文件资产不在文件检索结果中。
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    contains(object: T): Promise<boolean>;

    /**
     * 获取文件检索结果中指定索引集合对应的文件资产数组。使用Promise异步回调。
     *
     * @param { int[] } indexSet - 指定的索引集合。
     * @returns { Promise<T[]> } Promise对象，返回指定索引集合所对应的文件资产数组。
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1.The indexSet is null, undefined or empty.
     *     <br>2.The indexSet length is bigger than 500.
     *     <br>3.The max value of indexSet is equal or bigger than the fetch result length.
     *     <br>4.The min value of indexSet is less than 0.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    getObjectsByIndexSet(indexSet: int[]): Promise<T[]>;

    /**
     * 获取指定文件资产在文件检索结果中的索引。使用Promise异步回调。
     *
     * @param { T } object - 指定的文件资产。
     * @returns { Promise<int> } Promise对象，返回查询结果。如果对象在文件检索结果中则返回对应的索引，不存在则返回-1。
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    getIndex(object: T): Promise<int>;
  }

  /**
   * 枚举，相册类型。例如，用户相册、系统预置相册或由应用创建的相册。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AlbumType {
    /**
     * 用户相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    USER = 0,
    /**
     * 系统预置相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    SYSTEM = 1024,
    /**
     * 由应用创建的相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 18 - 22]
     * @publicapi [since 23]
     * @since 18 dynamic
     * @since 23 static
     */
    SOURCE = 2048,
    /**
     * 智慧分析相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SMART = 4096
  }

  /**
   * 枚举，相册子类型，表示具体的相册类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AlbumSubtype {
    /**
     * 用户相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    USER_GENERIC = 1,
    /**
     * 收藏夹。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FAVORITE = 1025,
    /**
     * 视频相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    VIDEO = 1026,
    /**
     * 隐藏相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    HIDDEN = 1027,
    /**
     * 回收站。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    TRASH = 1028,
    /**
     * 截屏和录屏相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SCREENSHOT = 1029,
    /**
     * 相机拍摄的照片和视频相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA = 1030,
    /**
     * 图片相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 11 - 11]
     * @publicapi [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE = 1031,
    /**
     * AI云增强相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CLOUD_ENHANCEMENT = 1032,
    /**
     * 子弹时间相册
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    LIVEPHOTO_4D = 1033,
    /**
     * 来源相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 11 - 22]
     * @publicapi [since 23]
     * @since 11 dynamic
     * @since 23 static
     */
    SOURCE_GENERIC = 2049,
    /**
     * 来自文件管理的来源相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SOURCE_GENERIC_FROM_FILE_MANAGER = 2050,
    /**
     * 分类相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    CLASSIFY = 4097,
    /**
     * 地图相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GEOGRAPHY_LOCATION = 4099,
    /**
     * 城市相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GEOGRAPHY_CITY = 4100,
    /**
     * 拍摄模式相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SHOOTING_MODE = 4101,
    /**
     * 人像相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    PORTRAIT = 4102,
    /**
     * 合影相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    GROUP_PHOTO = 4103,
    /**
     * 时刻相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIGHLIGHT = 4104,
    /**
     * 时刻建议相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIGHLIGHT_SUGGESTIONS = 4105,
    /**
     * 任意相册。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ANY = 2147483647
  }

  /**
   * 枚举，获取图片或视频缩略图的操作类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum RequestPhotoType {
    /**
     * 即获取快速缩略图，又获取质量缩略图。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    REQUEST_ALL_THUMBNAILS = 0,
    /**
     * 只获取快速缩略图。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    REQUEST_FAST_THUMBNAIL = 1,
    /**
     * 只获取质量缩略图。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    REQUEST_QUALITY_THUMBNAIL = 2
  }

  /**
   * 枚举，表示相册封面的来源。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum CoverUriSource {
    /**
     * 默认封面。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    DEFAULT_COVER = 0,

    /**
     * 手动设置的封面。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    MANUAL_COVER = 1
  }

  /**
   * 定义相册的抽象接口。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AbsAlbum {
    /**
     * 相册类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly albumType: AlbumType;
    /**
     * 相册子类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly albumSubtype: AlbumSubtype;
    /**
     * 相册名称。预置相册不可写，用户相册可写。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    albumName: string;
    /**
     * 相册uri。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly albumUri: string;
    /**
     * 相册中文件数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly count: int;
    /**
     * 封面文件uri。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    readonly coverUri: string;
    /**
     * 相册的虚拟路径。
     * 
     * 支持的相册及对应的lpath值：
     * 
     * - 相机应用相册：'/DCIM/Camera' 
     * - 截图应用相册：'/Pictures/Screenshots' 
     * - 屏幕录制应用相册：'/Pictures/Screenrecords' 
     * - 用户创建的相册：'/Pictures/Users/{用户自定义相册名称}'
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 18 - 22]
     * @publicapi [since 23]
     * @since 18 dynamic
     * @since 23 static
     */
    readonly lpath?: string;
    /**
     * 相册封面来源。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly coverUriSource?: CoverUriSource;

    /**
     * 表示是否允许相册同步到云空间或家庭存储。true表示允许，false表示不允许。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    readonly uploadStatus: boolean;

    /**
     * 相册的更改时间，单位：秒。
     * 单位为： second，取值应≥0。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    readonly changeTime?: long;

    /**
     * 相册是否为隐藏状态。true表示相册为隐藏状态，false表示相册不为隐藏状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly hidden?: boolean;

    /**
     * 获取相册中的文件。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - 检索选项。
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - 回调函数。当获取相册中的文件成功，err为undefined，data为获取到的图片和视频数据结果集
   	 * [FetchResult]{@link @ohos.file.photoAccessHelper:photoAccessHelper}；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied [since 10 - 11]
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void;
    /**
     * 获取相册中的文件。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - 检索选项。
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise对象，返回图片和视频数据结果集。
     * @throws { BusinessError } 201 - Permission denied [since 20]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied [since 10 - 19]
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * 获取共享的照片资产。
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
     * @since 13 dynamic
     * @since 23 static
     */
    getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>;
  }

  /**
   * 枚举，媒体资产（图片/视频）或相册变更事件的通知类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum NotifyChangeType {
    /**
     * 媒体资产（图片/视频）或相册创建事件的通知类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFY_CHANGE_ADD = 0,
    /**
    * 媒体资产（图片/视频）或相册修改事件的通知类型。
    *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFY_CHANGE_UPDATE = 1,
    /**
    * 媒体资产（图片/视频）或相册删除事件的通知类型。
    *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFY_CHANGE_REMOVE = 2,
    /**
     * 分段式拍照场景下高质量图已准备完成。
     * 
     * 图像的清晰度、色彩准确度等质量指标可在请求图像的回调中判断：
     * [OnDataPrepared]{@link @ohos.file.photoAccessHelper:photoAccessHelper.QuickImageDataHandler.onDataPrepared(data: T, imageSource: image.ImageSource, map: Map<string, string>)}。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    NOTIFY_CHANGE_YUV_READY = 3,
    /**
     * 智慧分析相册内媒体资产（图片/视频）已经创建。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NOTIFY_CHANGE_ADD_ANALYSIS = 4,
    /**
     * 智慧分析相册内媒体资产（图片/视频）已经删除。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NOTIFY_CHANGE_REMOVE_ANALYSIS = 5
  }

  /**
   * 实体相册。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Album extends AbsAlbum {
    /**
     * 相册中图片数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly imageCount?: int;
    /**
     * 相册中视频数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly videoCount?: int;
    /**
     * 相册添加时间，单位：秒。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly dateAdded?: long;
    /**
     * 相册修改时间，单位：秒。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly dateModified?: long;
    /**
     * 更新相册属性修改到数据库中。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - 回调函数。当相册属性修改成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    commitModify(callback: AsyncCallback<void>): void;
    /**
     * 更新相册属性修改到数据库中。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    commitModify(): Promise<void>;
    /**
     * 向用户相册中添加图片或视频，需预置相册和文件资源。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - 待添加到相册中的图片或视频数组。
     * @param { AsyncCallback<void> } callback - 回调函数。当添加图片或视频成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#addAssets
     */
    addAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * 向用户相册添加图片或视频，需预置相册和文件资源。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - 待添加到相册中的图片或视频数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#addAssets
     */
    addAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * 从用户相册移除图片或视频，需预置相册和文件资源。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - 相册中待移除的图片或视频数组。
     * @param { AsyncCallback<void> } callback - 回调函数。当移除图片或视频成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#removeAssets
     */
    removeAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * 从用户相册中移除图片或视频，需预置相册和文件资源。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - 相册中待移除的图片或视频数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#removeAssets
     */
    removeAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * 从回收站中恢复图片或者视频，需要先在回收站中预置文件资源。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - 回收站中待恢复图片或者视频数组。
     * @param { AsyncCallback<void> } callback - callback返回void。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#recoverAssets
     */
    recoverAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * 从回收站中恢复图片或者视频，需要先在回收站中预置文件资源。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - 回收站中待恢复图片或者视频数组。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#recoverAssets
     */
    recoverAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * 从回收站中彻底删除图片或者视频，需要先在回收站中预置文件资源。使用callback异步回调。
     * 
     * > **说明：**
     * >
     * > 此操作不可逆，执行此操作后文件资源将彻底删除，请谨慎操作。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - 回收站中待彻底删除图片或者视频数组。
     * @param { AsyncCallback<void> } callback - callback返回void。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#deleteAssets
     */
    deleteAssets(assets: Array<PhotoAsset>, callback: AsyncCallback<void>): void;
    /**
     * 从回收站中彻底删除图片或者视频，需要先在回收站中预置文件资源，建议删除数量不超过1000张。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > 此操作不可逆，执行此操作后文件资源将彻底删除，请谨慎操作。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - 回收站中待彻底删除图片或者视频数组。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#deleteAssets
     */
    deleteAssets(assets: Array<PhotoAsset>): Promise<void>;
    /**
     * 设置用户相册封面。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } uri - 待设置为相册封面文件的uri。
     * @param { AsyncCallback<void> } callback - callback返回void。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#setCoverUri
     */
    setCoverUri(uri: string, callback: AsyncCallback<void>): void;
    /**
     * 设置用户相册封面。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } uri - 待设置为相册封面文件的uri。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest#setCoverUri
     */
    setCoverUri(uri: string): Promise<void>;
    /**
     * 获取人像相册或合影相册的封面人脸标识。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Promise对象，人像相册返回tag_id，合影相册返回group_tag，未找到返回空字符串。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getFaceId(): Promise<string>;
    /**
     * 获取融合资产信息。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<FusionAssetsInfo[]> } Returns fusion assets information.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    getFusionAssetsInfo(): Promise<FusionAssetsInfo[]>;
    /**
     * 获取符合系统预设筛选条件的人像相册资产。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } optionCheck - 检索选项，限制返回资产数量。
     * @param { string } [filter] - 过滤选项，必须是一个Json字符串
     *     <br>过滤选项，必须是一个Json字符串。<br>当前仅支持传递currentFileId，表示当前精选人像卡片展示图片的file_id。例如:'{"
     *     currentFileId":"123"}'。
     *     <br>>如果不填写，则从头开始返回资产。
     *     <br>如果填写了currentFileId，则根据该currentFileId内部计算评分，返回评分小于或等于该评分的资产。
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise对象，返回获取的图片结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: 1. The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    getSelectedAssets(optionCheck: FetchOptions, filter?: string): Promise<FetchResult<PhotoAsset>>;

    /**
     * 获取相册属性信息。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumAttribute[] } attrs - 相册获取的属性。 最大长度为20且不能为空。
     * @returns { Promise<Record<AlbumAttribute, AlbumAttributeInfo>> } Returns a record of attributes and their values.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Unsupported attribute;
     *     <br>2. The attrs size exceed 20;
     *     <br>3. Empty or duplicate attribute;
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getAttribute(attrs: AlbumAttribute[]): Promise<Record<AlbumAttribute, AlbumAttributeInfo>>;
  }

  /**
   * 提供访问照片和相册的功能。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PhotoAccessHelper {
    /**
     * 获取相册中的文件。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - 检索选项。
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - 回调函数。当获取相册中的文件成功，err为undefined，data为获取到的图片和视频数据结果集
   	 * [FetchResult]{@link @ohos.file.photoAccessHelper:photoAccessHelper}；否则为错误对象。
     * @throws { BusinessError } 201 - Permission denied [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied [since 10 - 11]
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>): void;
    /**
     * 获取图片和视频资源，使用Promise方式返回结果。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - 图片和视频检索选项。
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise对象，返回图片和视频数据结果集。
     * @throws { BusinessError } 201 - Permission denied [since 20]
     * @throws { BusinessError } 13900012 - Permission denied [since 10 - 19]
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    getAssets(options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * 获取连拍照片资源，使用Promise方式返回结果。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } burstKey - 一组连拍照片的唯一标识：uuid（可传入[PhotoKeys]{@link photoAccessHelper.PhotoKeys}的BURST_KEY）。字符串长度为
     * 36字节。
     * @param { FetchOptions } options - 连拍照片检索选项。
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise对象，返回连拍照片数据结果集。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getBurstAssets(burstKey: string, options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * 指定待创建的图片或者视频的文件名，创建图片或视频资源。使用callback异步回调。
     * 
     * 待创建的文件名参数规格为：
     * 
     * - 应包含有效文件主名和图片或视频扩展名。
     * - 文件名字符串长度为1~255。
     * - 文件主名中不允许出现的非法英文字符。
     * 
     * API18开始，非法字符包括： \ / : * ? " < > |
     * 
     * API10-17，非法字符包括：. .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - 创建的图片或者视频文件名。
     * @param { AsyncCallback<PhotoAsset> } callback - callback返回创建的图片和视频结果。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    createAsset(displayName: string, callback: AsyncCallback<PhotoAsset>): void;
    /**
     * 指定待创建的图片或者视频的文件名，创建图片或视频资源。使用Promise异步回调。
     * 
     * 待创建的文件名参数规格为：
     * 
     * - 应包含有效文件主名和图片或视频扩展名。
     * - 文件名字符串长度为1~255。
     * - 文件主名中不允许出现的非法英文字符。
     * 
     * API18开始，非法字符包括： \ / : * ? " < > |
     * 
     * API10-17，非法字符包括：. .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - 创建的图片或者视频文件名。
     * @returns { Promise<PhotoAsset> } Promise对象，返回创建的图片和视频结果。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
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
     * API10-17，非法字符包括：. .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - 创建的图片或者视频文件名。
     * @param { PhotoCreateOptions } options - 图片或视频的创建选项。
     * @returns { Promise<PhotoAsset> } Promise对象，返回创建的图片和视频结果。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    createAsset(displayName: string, options: PhotoCreateOptions): Promise<PhotoAsset>;
    /**
     * 指定待创建的图片或者视频的文件名和创建选项，创建图片或视频资源。使用callback异步回调。
     * 
     * 待创建的文件名参数规格为：
     * 
     * - 应包含有效文件主名和图片或视频扩展名。
     * - 文件名字符串长度为1~255。
     * - 文件主名中不允许出现的非法英文字符。
     * 
     * API18开始，非法字符包括： \ / : * ? " < > |
     * 
     * API10-17，非法字符包括：. .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - 创建的图片或者视频文件名。
     * @param { PhotoCreateOptions } options - 图片或视频的创建选项。
     * @param { AsyncCallback<PhotoAsset> } callback - callback返回创建的图片和视频结果。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    createAsset(displayName: string, options: PhotoCreateOptions, callback: AsyncCallback<PhotoAsset>): void;
    /**
     * 指定文件类型、后缀和创建选项，创建图片或视频资源。使用callback方式返回结果。
     * 
     * 在未申请相册管理模块权限'ohos.permission.WRITE_IMAGEVIDEO'时，可以使用安全控件或授权弹窗的方式创建媒体资源，详情请参考
     * [保存媒体库资源](docroot://media/medialibrary/photoAccessHelper-savebutton.md)。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - 创建的文件类型，IMAGE或者VIDEO类型。
     * @param { string } extension - 文件名后缀参数，例如：'jpg'。
     * @param { CreateOptions } options - 创建选项，当前仅支持'title'，例如{title: 'testPhoto'}。
     *     <br>**注意：**
     *     <br>传入'subtype'选项，配置不生效，仅支持保存DEFAULT类型图片。
     *     <br>文件名中不允许出现非法英文字符，包括： . .. \ / : * ? " ' ` < > | { } [ ]
     * @param { AsyncCallback<string> } callback - callback返回创建的图片和视频的uri。
     * @throws { BusinessError } 201 - Permission denied [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied [since 10 - 10]
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    createAsset(photoType: PhotoType, extension: string, options: CreateOptions, callback: AsyncCallback<string>): void;
    /**
     * 指定文件类型和后缀，创建图片或视频资源，使用callback方式返回结果。
     * 
     * 在未申请相册管理模块权限'ohos.permission.WRITE_IMAGEVIDEO'时，可以使用安全控件或授权弹窗的方式创建媒体资源，详情请参考
     * [保存媒体库资源](docroot://media/medialibrary/photoAccessHelper-savebutton.md)。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - 创建的文件类型，IMAGE或者VIDEO类型。
     * @param { string } extension - 文件名后缀参数，例如：'jpg'。
     * @param { AsyncCallback<string> } callback - callback返回创建的图片和视频的uri。
     * @throws { BusinessError } 201 - Permission denied [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied [since 10 - 10]
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    createAsset(photoType: PhotoType, extension: string, callback: AsyncCallback<string>): void;
    /**
     * 指定文件类型、后缀和创建选项，创建图片或视频资源，以Promise方式返回结果。
     * 
     * 在未申请相册管理模块权限'ohos.permission.WRITE_IMAGEVIDEO'时，可以使用安全控件或授权弹窗的方式创建媒体资源，详情请参考
     * [保存媒体库资源](docroot://media/medialibrary/photoAccessHelper-savebutton.md)。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - 创建的文件类型，IMAGE或者VIDEO类型。
     * @param { string } extension - 文件名后缀参数，例如：'jpg'。
     * @param { CreateOptions } [options] - 创建选项，当前仅支持'title'，例如{title: 'testPhoto'}。
     *     <br>**注意：**
     *     <br>传入'subtype'选项，配置不生效，仅支持保存DEFAULT类型图片。
     *     <br>文件名中不允许出现非法英文字符，包括： . .. \ / : * ? " ' ` < > | { } [ ]
     * @returns { Promise<string> } Promise对象，返回创建的图片和视频的uri。
     * @throws { BusinessError } 201 - Permission denied [since 11]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied [since 10 - 10]
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    createAsset(photoType: PhotoType, extension: string, options?: CreateOptions): Promise<string>;
    /**
     * 指定文件类型、后缀和标题，创建图片或视频资源。使用Promise异步回调。
     * 
     * 在未申请相册管理模块权限'ohos.permission.WRITE_IMAGEVIDEO'时，可以使用安全控件或授权弹窗的方式创建媒体资源，详情请参考
     * [开发指南](docroot://media/medialibrary/photoAccessHelper-savebutton.md)。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - 创建的文件类型。例如：IMAGE或者VIDEO类型。
     * @param { string } extension - 文件名后缀参数。例如：'jpg'。
     * @param { string } [title] - 图片或视频资产的标题。
     * @returns { Promise<string> } Promise对象，返回创建的图片或视频的URL。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The extension format is unsupported
     *     <br>2. Title contains unsupported  character, such as . .. \ / : * ? " ' ` < > | { } [ ]
     *     <br>3. The title is an empty string
     *     <br>4. The total length of title and extension is more than 255
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    createPhotoAsset(photoType: PhotoType, extension: string, title?: string): Promise<string>;
    /**
     * 创建相册。使用callback异步回调。
     * 
     * 待创建的相册名参数规格为：
     * 
     * - 相册名字符串长度为1~255。
     * - 不允许出现的非法英文字符，包括：
     * 
     * . .. \ / : * ? " ' ` < > | { } [ ]
     * 
     * - 相册名不允许重名。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - 待创建相册的相册名。
     * @param { AsyncCallback<Album> } callback - callback返回创建的相册实例。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900015 - The file name already exists.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest.createAlbumRequest
     */
    createAlbum(name: string, callback: AsyncCallback<Album>): void;
    /**
     * 创建相册。使用Promise异步回调。
     * 
     * 待创建的相册名参数规格为：
     * 
     * - 相册名字符串长度为1~255。
     * - 不允许出现的非法英文字符，包括：
     * 
     * . .. \ / : * ? " ' ` < > | { } [ ]
     * 
     * - 相册名不允许重名。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - 待创建相册的相册名。
     * @returns { Promise<Album> } Promise对象，返回创建的相册实例。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900015 - The file name already exists.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest.createAlbumRequest
     */
    createAlbum(name: string): Promise<Album>;
    /**
     * 删除存在的用户相册。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - 待删除相册的数组。
     * @param { AsyncCallback<void> } callback - callback返回void。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest.deleteAlbums
     */
    deleteAlbums(albums: Array<Album>, callback: AsyncCallback<void>): void;
    /**
     * 删除存在的用户相册。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - 待删除相册的数组。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAlbumChangeRequest.deleteAlbums
     */
    deleteAlbums(albums: Array<Album>): Promise<void>;
    /**
     * 根据检索选项和相册类型获取相册，使用callback方式返回结果。
     * 
     * 获取相册前，确保相册已存在。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - 相册类型。
     * @param { AlbumSubtype } subtype - 相册子类型。
     * @param { FetchOptions } options - 检索选项。
     * @param { AsyncCallback<FetchResult<Album>> } callback - callback返回获取相册的结果集。
     * @throws { BusinessError } 201 - Permission denied [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied [since 10 - 11]
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAlbums(
      type: AlbumType,
      subtype: AlbumSubtype,
      options: FetchOptions,
      callback: AsyncCallback<FetchResult<Album>>
    ): void;
    /**
     * 根据相册类型获取相册，使用callback方式返回结果。
     * 
     * 获取相册前需先保证相册存在。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - 相册类型。
     * @param { AlbumSubtype } subtype - 相册子类型。
     * @param { AsyncCallback<FetchResult<Album>> } callback - callback返回获取相册的结果集。
     * @throws { BusinessError } 201 - Permission denied [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied [since 10 - 11]
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAlbums(type: AlbumType, subtype: AlbumSubtype, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * 根据检索选项和相册类型获取相册，使用Promise方式返回结果。
     * 
     * 在获取相册之前，确保相册已存在。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - 相册类型。
     * @param { AlbumSubtype } subtype - 相册子类型。
     * @param { FetchOptions } [options] - 检索选项，不填时默认根据相册类型检索。
     * @returns { Promise<FetchResult<Album>> } Promise对象，返回获取相册的结果集。
     * @throws { BusinessError } 201 - Permission denied [since 12]
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied [since 10 - 11]
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    getAlbums(type: AlbumType, subtype: AlbumSubtype, options?: FetchOptions): Promise<FetchResult<Album>>;
    /**
     * 根据隐藏文件显示模式和检索选项获取系统中的隐藏相册。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - 隐藏文件显示模式。
     * @param { FetchOptions } options - 检索选项。
     * @param { AsyncCallback<FetchResult<Album>> } callback - callback返回获取相册的结果集。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getHiddenAlbums(mode: HiddenPhotosDisplayMode, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * 根据隐藏文件显示模式获取系统中的隐藏相册。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - Display mode of hidden albums.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getHiddenAlbums(mode: HiddenPhotosDisplayMode, callback: AsyncCallback<FetchResult<Album>>): void;

    /**
     * 根据指定的选项获取系统、用户和来源相册。使用Promise异步回调。
     * 
     * 在获取相册之前，确保相册已存在。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } [options] - 检索选项，不填时默认根据相册类型检索。
     * @returns { Promise<FetchResult<Album>> } Promise对象，返回获取相册的结果集。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getPhotoAlbums(options?: FetchOptions):Promise<FetchResult<Album>>;

    /**
     * 根据隐藏文件显示模式和检索选项获取系统中的隐藏相册。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - 隐藏文件显示模式。
     * @param { FetchOptions } [options] - 检索选项，不填时默认根据隐藏文件显示模式检索。
     * @returns { Promise<FetchResult<Album>> } Promise对象，返回获取相册的结果集。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    getHiddenAlbums(mode: HiddenPhotosDisplayMode, options?: FetchOptions): Promise<FetchResult<Album>>;
    /**
     * 删除媒体文件，删除的文件进入到回收站。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - 待删除的媒体文件uri数组。
     * @param { AsyncCallback<void> } callback - callback返回void。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000002 - The uri format is incorrect or does not exist.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest.deleteAssets
     */
    deleteAssets(uriList: Array<string>, callback: AsyncCallback<void>): void;
    /**
     * 删除媒体文件，删除的文件进入到回收站。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - 待删除的媒体文件uri数组。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000002 - The uri format is incorrect or does not exist.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest.deleteAssets
     */
    deleteAssets(uriList: Array<string>): Promise<void>;
    /**
     * 注册指定uri的监听，并通过callback方式返回异步结果。
     *
     * @param { string } uri - PhotoAsset的uri, Album的uri或[DefaultChangeUri]{@link photoAccessHelper.DefaultChangeUri}的值。
     * @param { boolean } forChildUris - 是否模糊监听。uri为相册uri时：forChildUris为true，能监听到相册中文件的变化。如果是false，只能监听相册本身变化；uri为
     *     photoAsset时：forChildUris为true、false没有区别；uri为DefaultChangeUri时：forChildUris必须为true，如果为false将找不到该uri，收不到任何消息。
     * @param { Callback<ChangeData> } callback - 返回要监听的[ChangeData]{@link photoAccessHelper.ChangeData}。注：uri可以注册多个不同的
     *     callback监听，[unRegisterChange]{@link photoAccessHelper.PhotoAccessHelper.unRegisterChange}可以关闭该uri所有监听，也可以关闭指定
     *     callback的监听。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    registerChange(uri: string, forChildUris: boolean, callback: Callback<ChangeData>): void;
    /**
     * 获取资产的分析进度。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AnalysisType } analysisType - 需要获取的智慧分析类型，默认为空值。
     *     <br>该参数在API version 12-21为必选参数，从API version 22开始及以后为可选参数。 [since 12 - 22]
     * @param { AnalysisType } [analysisType] - 需要获取的智慧分析类型，默认为空值。
     *     <br>该参数在API version 12-21为必选参数，从API version 22开始及以后为可选。 [since 23]
     * @returns { Promise<string> } Promise对象，返回一个json格式的字符串。表示资产分析的进度。
     *     <br>参数为空时返回整体的进度，参数不为空时返回analysisType对应的进度。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Incorrect parameter types;
     *     <br>2. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getDataAnalysisProgress(analysisType?: AnalysisType): Promise<string>;
    /**
     * 取消指定uri的监听，一个uri可以注册多个监听，存在多个callback监听时，可以取消指定注册的callback的监听；不指定callback时取消该uri的所有监听。
     *
     * @param { string } uri - PhotoAsset的uri, Album的uri或[DefaultChangeUri]{@link photoAccessHelper.DefaultChangeUri}的值。
     * @param { Callback<ChangeData> } [callback] - 取消
     *     [registerChange]{@link photoAccessHelper.PhotoAccessHelper.registerChange}注册时的callback的监听，不填时，取消该uri的所有监听。注：
     *     off指定注册的callback后不会进入此回调。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    unRegisterChange(uri: string, callback?: Callback<ChangeData>): void;
    /**
     * 创建一个弹出框来删除照片，删除的文件进入到回收站，使用callback方式返回结果。
     * 
     * > **说明：**
     * >
     * > 从API version 10开始支持，从API version 11开始废弃。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - 待删除的媒体文件uri数组，最大删除数量300。
     * @param { AsyncCallback<void> } callback - callback返回void。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest.deleteAssets
     */
    createDeleteRequest(uriList: Array<string>, callback: AsyncCallback<void>): void;
    /**
     * 创建一个弹出框来删除照片，删除的文件进入到回收站，使用Promise方式返回结果。
     * 
     * > **说明：**
     * >
     * > 从API version 10开始支持，从API version 11开始废弃。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - 待删除的媒体文件uri数组，最大删除数量300。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamiconly
     * @deprecated since 11
     * @useinstead photoAccessHelper.MediaAssetChangeRequest.deleteAssets
     */
    createDeleteRequest(uriList: Array<string>): Promise<void>;
    /**
     * 调用接口显示保存确认弹窗。如果用户同意保存，将返回一个已创建并授予保存权限的URI列表（此列表永久生效），应用可使用这些URI写入图片或视频。如果用户拒绝保存，将返回一个空列表。
     * 
     * 弹框需显示应用名称，但无法直接获取。因此，调用此接口时，请确保[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中的
     * `abilities`标签已配置`label`和`icon`项。需要注意的是，图标不受`abilities`标签中的`icon`项影响，不支持修改。
     * 
     * > **说明：**
     * >
     * > 当传入URI为沙箱路径时，可正常保存图片/视频，但无界面预览。
     *
     * @param { Array<string> } srcFileUris - 需保存到媒体库中的图片/视频文件对应的
     *     [媒体文件URI](docroot://file-management/user-file-uri-intro.md#媒体文件uri)。
     *     <br>**注意：**
     *     <br>- 一次弹窗最多保存100张图片。
     *     <br>- 仅支持处理图片、视频URI。
     *     <br>- 不支持手动拼接的URI，需调用接口获取，获取方式参考[媒体文件URI获取方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri获取方式)。
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - 保存图片或视频到媒体库的配置，包括文件名等，与srcFileUris保持一一对应。
     *     <br>**注意：**
     *     <br>传入'subtype'选项，配置项不生效，仅支持保存DEFAULT类型图片。
     * @returns { Promise<Array<string>> } Promise对象，返回给应用的媒体库文件URI列表。URI已对应用授权，支持应用写入数据。如果生成URI异常，则返回批量创建错误码。
     *     <br>具体返回值情况如下：
     *     <br>- 返回-3006表示不允许出现非法字符。
     *     <br>- 返回-2004表示图片类型和后缀不符。
     *     <br>- 返回-203表示文件操作异常。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    showAssetsCreationDialog(srcFileUris: Array<string>, photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>;

    /**
     * 调用接口显示保存确认弹窗。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 用户同意后，返回已创建并授予保存权限的URI列表，该列表永久有效，支持写入图片/视频。用户拒绝时，返回空列表。
     * >
     * > - 弹框需显示应用名称，名称和图标需在[module.json5配置文件](docroot://quick-start/module-configuration-file.md)的`abilities`标签中配置
     * > `label`和`icon`项。
     * >
     * > - 当传入URI为沙箱路径时，可正常保存图片或视频，但不显示界面预览。
     *
     * @param { Array<string> } srcFileUris - 需保存到媒体库中的图片或视频文件对应的
     *     [媒体文件URI](docroot://file-management/user-file-uri-intro.md#媒体文件uri)。
     *     <br>**注意：**
     *     <br>- 一次弹窗最多保存100张图片。
     *     <br>- 仅支持处理图片和视频URI。
     *     <br>- 不支持手动拼接URI，需调用接口获取，具体请参考[媒体文件URI获取方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri获取方式)。
     * @param { Array<CreationSetting> } creationSettings - 保存图片或视频到媒体库的配置，包括文件名等，与srcFileUris参数中的URI保持一一对应。
     * @returns { Promise<Array<string>> } Promise对象，返回给应用的媒体库文件URI列表。支持应用使用返回的URI写入数据。
     * @throws { BusinessError } 23800301 - Internal system error.
     *     It is recommended to retry and check the logs. Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    showAssetsCreationDialogEx(srcFileUris: Array<string>, creationSettings: Array<CreationSetting>): Promise<Array<string>>;

    /**
     * 针对单个图片/视频调用接口显示保存确认弹窗。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 如果用户同意保存，将返回一个已创建并授予保存权限的URI（此URI永久生效），应用可使用这个URI写入图片或视频。如果用户拒绝保存，将返回一个空字符串。
     * >
     * > - 弹框需显示应用名称，但无法直接获取。因此，调用此接口时，请确保[module.json5配置文件](docroot://quick-start/module-configuration-file.md)中的
     * > `abilities`标签已配置`label`和`icon`项。需要注意的是，图标不受`abilities`标签中的`icon`项影响，不支持修改。
     * >
     * > - 当传入URI为沙箱路径时，可正常保存图片/视频，但无界面预览。
     *
     * @param { string } srcFileUri - 需要保存到媒体库中的图片/视频文件所对应的
     *     [媒体文件URI](docroot://file-management/user-file-uri-intro.md#媒体文件uri)。
     *     <br>**注意：**
     *     <br>- 一次弹窗最多保存1张图片。
     *     <br>- 仅支持处理图片、视频URI。
     *     <br>- 不支持手动拼接的URI，需调用接口获取，具体请参考[媒体文件URI获取方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri获取方式)。
     * @param { CreationSetting } creationSetting - 保存图片或视频到媒体库的配置（包括文件名等），与srcFileUri保持对应。
     * @param { boolean } isImageFullyDisplayed - 表示是否完整显示图片。true表示完整显示，false表示不完整显示。
     * @returns { Promise<string> } Promise对象，返回给应用的媒体库文件URI。URI已对应用授权，支持应用写入数据。如果生成URI异常，则返回批量创建错误码。
     *     <br>具体返回值情况如下：
     *     <br>- 返回-3006表示不允许出现非法字符。
     *     <br>- 返回-2004表示图片类型和后缀不符。
     *     <br>- 返回-203表示文件操作异常。
     * @throws { BusinessError } 23800301 - Internal system error.
     *     It is recommended to retry and check the logs. Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    showSingleAssetCreationDialogEx(srcFileUri: string, creationSetting: CreationSetting, isImageFullyDisplayed: boolean): Promise<string>;

    /**
     * 调用接口代替应用创建媒体库uri列表。Uri已对tokenId对应的应用授权，支持应用使用uri写入图片/视频。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } bundleName - 需保存图片/视频文件的应用bundle name。
     * @param { string } appName - 需保存图片/视频文件的应用app name。
     * @param { long } tokenId - 需保存图片/视频文件的应用tokenId。
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - 保存图片/视频到媒体库的配置。
     * @returns { Promise<Array<string>> } 对象，返回给接口调用方的媒体库文件uri列表。Uri已对tokenId对应的应用授权，支持应用写入数据。
     *     如果生成uri异常，则返回批量创建错误码。
     *     <br>返回-3006表不允许出现非法字符；返回-2004表示图片类型和后缀不符；返回-203表示文件操作异常。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1. The photoCreationConfigs is empty;
     *     <br>2. Incorrect photoCreationConfigs format.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    createAssetsForApp(bundleName: string, appName: string, tokenId: long, photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>;
    /**
     * 接口提供给应用调用，支持首次调用后拉起保存确认弹框。在用户同意保存后返回已创建并授予保存权限的uri，支持应用使用uri写入图片/视频。
     * 
     * 在用户"同意"后的5分钟之内，同一个应用再次调用接口，支持无需弹框确认自动返回已授权的uri给应用，支持应用保存图片/视频。退出应用会结束授权，再次进入需要重新弹出弹框进行确认授权。
     *
     * @permission ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO
     * @param { PhotoCreationConfig } photoCreationConfig - 保存图片/视频到媒体库的配置，包括保存的文件名等。
     *     <br>**注意：**
     *     <br>传入'subtype'选项，配置项不生效，仅支持保存DEFAULT类型图片。
     * @returns { Promise<string> } Promise对象，返回给应用的媒体库文件uri。uri已对应用授权，支持应用写入数据。如果生成uri异常，则返回批量创建错误码。
     *     <br>返回-3006表示不允许出现非法字符；返回-2004表示图片类型和后缀不符；返回-203表示文件操作异常。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    createAssetWithShortTermPermission(photoCreationConfig: PhotoCreationConfig): Promise<string>;

    /**
     * 应用调用该接口后，系统会首次拉起保存确认弹框。使用Promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 用户同意保存后，接口将返回已创建并授予保存权限的URI，应用可使用该URI写入图片/视频。
     * >
     * > - 在用户同意后的5分钟内，若同一应用再次调用此接口，系统将无需弹框确认，直接返回已授权的URI，供应用保存图片/视频。退出应用会结束授权，再次进入需要重新弹出弹框进行确认授权。
     *
     * @permission ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO
     * @param { CreationSetting } creationSetting - 保存图片或视频到媒体库时的配置项，包括保存的文件名等。
     * @returns { Promise<string> } Promise对象，返回给应用的媒体库文件URI。支持应用使用返回的URI写入数据。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    createAssetWithShortTermPermissionEx(creationSetting: CreationSetting): Promise<string>;

    /**
     * 提供给应用保存短时授权。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } bundleName - 需要保存图片/视频文件的应用bundleName。
     * @param { string } appName - 需要保存图片/视频文件的应用appName。
     * @param { string } appId - 需要保存图片/视频文件的应用app id。
     * @param { long } tokenId - 需要短时授权应用的唯一标识。
     * @param { AuthorizationMode } authorizationMode - 授权模式。授予应用短期内再次保存无需重复弹框确认。
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - 保存图片/视频到媒体库的配置。
     * @returns { Promise<Array<string>> } Promise对象，返回给接口调用方的媒体库文件uri列表。Uri已对appId对应的应用授权，支持应用写入数据。如果生成uri异常，则返回批量创建错误码
     *     。
     *     <br>返回-3006表不允许出现非法字符；返回-2004表示图片类型和后缀不符；返回-203表示文件操作异常。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    createAssetsForAppWithMode(
      bundleName: string,
      appName: string,
      appId: string,
      tokenId: long,
      authorizationMode: AuthorizationMode,
      photoCreationConfigs: Array<PhotoCreationConfig>
    ): Promise<Array<string>>;
    /**
     * <!--RP1--><!--RP1End-->调用接口给未授权的URI进行授权，返回已创建并授予保存权限的URI列表。
     *
     * @param { Array<string> } srcFileUris - 需进行授权的图片/视频文件对应的
     *     [媒体文件URI](docroot://file-management/user-file-uri-intro.md#媒体文件uri)。
     *     <br>**注意：**
     *     <br>仅支持处理图片、视频URI，且最大数量限制为100个。
     * @returns { Promise<Array<string>> } Promise对象，返回已授权的URI列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 26.0.0 static
     */
    requestPhotoUrisReadPermission(srcFileUris: Array<string>): Promise<Array<string>>;

    /**
     * 应用调用接口为未授权的URI授权。使用promise异步回调。
     * 
     * 返回授权结果，其中包含已创建并授予保存权限的URI列表以及无效的URI列表。
     *
     * @param { Array<string> } srcFileUris - 需进行授权的图片/视频文件对应的
     *     [媒体库uri](docroot://file-management/user-file-uri-intro.md#媒体文件uri)。
     *     <br>**注意：**
     *     <br>仅支持处理图片、视频uri，且最大数量限制为100个。
     * @returns { Promise<RequestReadPermissionResult> } Promise对象，返回已授权的uri列表和无效的uri列表。
     * @throws { BusinessError } 23800301 - Internal system error.
     *     It is recommended to retry and check the logs. Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    requestPhotoUrisReadPermissionEx(srcFileUris: Array<string>): Promise<RequestReadPermissionResult>;

    /**
     * 获取相册中图片或视频的位置。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } photoUri - 所查询的图库资源的uri。
     * @param { string } albumUri - 相册uri，可以为空字符串，为空字符串时默认查询全部图库资源。
     * @param { FetchOptions } options - 检索选项，predicates中必须设置一种检索排序方式，不设置或多设置均会导致接口调用异常。
     * @param { AsyncCallback<int> } callback - callback返回相册中资源的索引。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions, callback: AsyncCallback<int>): void;
    /**
     * 获取相册中图片或视频的位置。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } photoUri - 所查询的图库资源的uri。
     * @param { string } albumUri - 相册uri，可以为空字符串，为空字符串时默认查询全部图库资源。
     * @param { FetchOptions } options - 检索选项，predicates中必须设置一种检索排序方式，不设置或多设置均会导致接口调用异常。
     * @returns { Promise<int> } 返回相册中资源的索引。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900012 - Permission denied
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    getPhotoIndex(photoUri: string, albumUri: string, options: FetchOptions): Promise<int>;
    /**
     * 释放PhotoAccessHelper实例。使用callback异步回调。
     * 
     * 当后续不需要使用PhotoAccessHelper实例中的方法时调用。
     *
     * @param { AsyncCallback<void> } callback - 回调表示成功还是失败。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    release(callback: AsyncCallback<void>): void;
    /**
     * 释放PhotoAccessHelper实例。使用Promise异步回调。
     * 
     * 当后续不需要使用PhotoAccessHelper实例中的方法时调用。
     *
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    release(): Promise<void>;
    /**
     * 将绑定单个图片的图库卡片信息保存到数据库中。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - 图库卡片信息，包括图库卡片的id和卡片绑定的图片的uri。
     * @param { AsyncCallback<void> } callback - callback返回void。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    saveFormInfo(info: FormInfo, callback: AsyncCallback<void>): void;
    /**
     * 将绑定单个图片的图库卡片信息保存到数据库中。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - 图库卡片信息，包括图库卡片的id和卡片绑定的图片的uri。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    saveFormInfo(info: FormInfo): Promise<void>;
    /**
     * 将绑定一组图片的图库卡片信息保存到数据库中。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { GalleryFormInfo } info - 图库卡片信息，包括图库卡片的id、卡片绑定的图片或相册的uri集合。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    saveGalleryFormInfo(info: GalleryFormInfo): Promise<void>;
    /**
     * 通过克隆后的资产URI列表获取当前uri。使用Promise异步回调。
     *
     * 为控制数据库表空间占用规模，当前每次克隆时都会自动将上次存储的克隆数据进行清除，所以该接口只保存最近一次克隆时用户新/旧设备uri的对应关系。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<string> } oldUris - 克隆前的旧URI数组。
     * @returns { Promise<Map<string, string>> } Promise对象，返回由克隆后URI组成的Map列表。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     Possible causes: The size of input parameter exceeds 100 or is 0.
     * @throws { BusinessError } 23800301 - Internal system error.
     *     It is recommended to retry and check the logs. Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    getClonedAssetUris(oldUris: Array<string>): Promise<Map<string, string>>;
    /**
     * 通过克隆后的相册URI列表获取当前uri。使用Promise异步回调。
     *
     * 为控制数据库表空间占用规模，当前每次克隆时都会自动将上次存储的克隆数据进行清除，所以该接口只保存最近一次克隆时用户新/旧设备uri的对应关系。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<string> } oldUris - 克隆前的旧URI数组。
     * @returns { Promise<Map<string, string>> } Promise对象，返回由克隆后的URI组成的Map列表。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     Possible causes: The size of input parameter exceeds 100 or is 0.
     * @throws { BusinessError } 23800301 - Internal system error.
     *     It is recommended to retry and check the logs. Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    getClonedAlbumUris(oldUris: Array<string>): Promise<Map<string, string>>;
    /**
     * 从数据库中删除绑定单个图片的图库卡片信息。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - 图库卡片信息，包括图库卡片的id和卡片绑定的图片的uri。
     * @param { AsyncCallback<void> } callback - callback返回void。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    removeFormInfo(info: FormInfo, callback: AsyncCallback<void>): void;
    /**
     * 从数据库中删除绑定单个图片的图库卡片信息。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - 图库卡片信息，包括图库卡片的id和卡片绑定的图片的uri。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    removeFormInfo(info: FormInfo): Promise<void>;
    /**
     * 从数据库中删除绑定一组图片的图库卡片信息。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { GalleryFormInfo } info - 图库卡片信息，包括图库卡片的id、卡片绑定的图片或相册的uri集合。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    removeGalleryFormInfo(info: GalleryFormInfo): Promise<void>;
    /**
     * 更新既存的图库卡片的相关信息，并保存到数据库中。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { GalleryFormInfo } info - 图库卡片信息，包括图库卡片的id、卡片绑定的图片或相册的uri集合。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission verification failed, usually the result returned by VerifyAccessToken.
     * @throws { BusinessError } 202 - Permission verification failed, application which is not a system application
     *     uses system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    updateGalleryFormInfo(info: GalleryFormInfo): Promise<void>;
    /**
     * 提交媒体变更请求，使用Promise方式返回结果。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { MediaChangeRequest } mediaChangeRequest - 媒体变更请求，支持资产变更请求和相册变更请求。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    applyChanges(mediaChangeRequest: MediaChangeRequest): Promise<void>;
    /**
     * 获取索引构建进度。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Promise对象，返回一个json格式的字符串。表示已完成智慧分析的图片数量、总数和已经完成智慧分析的视频数量、总数。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getIndexConstructProgress(): Promise<string>;
    /**
     * 给应用授予uri列表的访问权限。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { long } tokenId - 应用标识，将访问权限授予给tokenId标识的应用。
     * @param { Array<string> } uriList - 媒体资源的uri列表，uri列表中的资源的访问权限将授予给应用。uri列表最多容纳 1000 条uri。
     * @param { PhotoPermissionType } photoPermissionType - 权限类型，将photoPermissionType表示的权限授予给应用。权限的覆盖规则参考枚举类。
     * @param { HideSensitiveType } hideSensitiveType - 脱敏类型，预留参数，目前可传枚举类中任一值。
     * @returns { Promise<int> } Promise对象，0: 授权成功。 -1:授权失败。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1. Incorrect uri format;
     *     <br>2. The value of photoPermissionType or hideSensitiveType is out of range.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    grantPhotoUrisPermission(
      tokenId: long, 
      uriList: Array<string>, 
      photoPermissionType: PhotoPermissionType, 
      hideSensitiveType: HideSensitiveType
    ): Promise<int>;
    /**
     * 给应用授予uri的访问权限。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { long } tokenId - 应用标识，将访问权限授予给tokenId标识的应用。
     * @param { string } uri - 媒体资源的uri，uri表示的资源的访问权限将授予给应用。
     * @param { PhotoPermissionType } photoPermissionType - 权限类型，将photoPermissionType表示的权限授予给应用。权限的覆盖规则参考枚举类。
     * @param { HideSensitiveType } hideSensitiveType - 脱敏类型，预留参数，目前可传枚举类中任一值。
     * @returns { Promise<int> } Promise对象，0:授权成功。 1:已有权限。-1:授权失败。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1. Incorrect uri format;
     *     <br>2. The value of photoPermissionType or hideSensitiveType is out of range.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    grantPhotoUriPermission(
      tokenId: long, 
      uri: string, 
      photoPermissionType: PhotoPermissionType, 
      hideSensitiveType: HideSensitiveType
    ): Promise<int>;
    /**
     * 取消应用对uri的访问权限。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { long } tokenId - 应用标识，将取消tokenId标识应用对媒体资源的访问权限。
     * @param { string } uri - 媒体资源的uri，取消应用对uri表示的资源的访问权限。
     * @param { PhotoPermissionType } photoPermissionType - 权限类型，取消应用对媒体资源的访问权限为photoPermissionType。
     * @returns { Promise<int> } Promise对象，0:取消成功。-1:取消失败。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument. Possible causes:
     *     <br>1. Incorrect uri format;
     *     <br>2. The value of photoPermissionType or hideSensitiveType is out of range.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    cancelPhotoUriPermission(tokenId: long, uri: string, photoPermissionType: PhotoPermissionType): Promise<int>;
    /**
     * 按指定规则生成缩略图。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicate - 生成缩略图选项。
     * @param { AsyncCallback<void> } callback - 回调函数。当成功时标识通知任务结束，err为undefined，否则为错误对象。
     * @returns { int } 返回缩略图生成任务id。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    startThumbnailCreationTask(predicate: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<void>): int;
    /**
     * 根据指定规则生成缩略图。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicate - 用于生成缩略图的查询条件。
     * @param { AsyncCallback<void> } callback - 回调函数。当操作成功完成时通知任务结束。
     * @param { AsyncCallback<int> } response - 回调函数。返回是否有未生成的缩略图，返回1表示所有缩略图已生成完成，返回0表示未生成完成。
     * @returns { int } 返回缩略图生成任务id。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     Possible causes: The predicates invalid.
     * @throws { BusinessError } 23800301 - Internal system error.
     *     It is recommended to retry and check the logs. Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    startThumbnailCreationTask(predicate: dataSharePredicates.DataSharePredicates, callback: AsyncCallback<void>, response: AsyncCallback<int>): int;
    /**
     * 停止生成缩略图。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { int } taskId - 需要停止的缩略图生成任务id。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    stopThumbnailCreationTask(taskId: int): void;
    /**
     * 获取共享的照片资产。
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { FetchOptions } options - 获取共享的照片资产选项。
     * @returns { Array<SharedPhotoAsset> } 返回共享的照片资产。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>;
    /**
     * 接口提供给应用调用，获取媒体库支持的图片或者视频后缀列表。
     *
     * @param { PhotoType } photoType - 媒体文件类型。
     * @returns { Promise<Array<string>> } Promise对象，返回支持的图片或者视频后缀列表。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 18 dynamic
     * @since 23 static
     */
    getSupportedPhotoFormats(photoType: PhotoType): Promise<Array<string>>;
    /**
     * 启动资产分析服务。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AnalysisType } type - 需要启动的智慧分析类型，仅支持ANALYSIS_SEARCH_INDEX。
     * @param { Array<string> } assetUris - 资产uri的数组。
     *     <br>- 填写：仅分析指定资产。
     *     <br>- 不填：全量分析。
     * @returns { Promise<int> } Promise对象。服务的任务id。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    startAssetAnalysis(type: AnalysisType, assetUris?: Array<string>): Promise<int>;
    /**
     * 通过相册id查询相册信息。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<int> } albumIds - 相册id列表。
     * @returns { Promise<Map<int, Album>> } Promise对象。返回相册信息map对象。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getAlbumsByIds(albumIds: Array<int>): Promise<Map<int, Album>>;
    /**
     * 为应用自己或者其他应用创建资产到指定来源或者用户相册。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoCreationSource } source - 代替应用创建资产传入的应用信息。
     * @param { string } albumUri - 相册uri。
     * @param { boolean } isAuthorized - 是否授权其他应用。true表示授权，false表示不授权。
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - 保存图片/视频到媒体库的配置。
     * @returns { Promise<Array<string>> } Promise对象，返回接口调用方的媒体库文件uri列表。
     *     <br>uri已对appId对应的应用授权，支持应用写入数据。如果生成uri异常，则返回批量创建错误码。
     *     <br>返回-3006表示不允许出现非法字符；返回-2004表示图片类型和后缀不符；返回-203表示文件操作异常。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    createAssetsForAppWithAlbum(source: PhotoCreationSource, albumUri: string, isAuthorized: boolean, photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>;

    /**
     * 应用使用RecentPhotoComponent组件查看最近图片时，支持调用API获取最近图片信息。使用Promise异步回调。
     *
     * @param { RecentPhotoOptions } [options] - 最近图片配置选项参数。若无此参数，则取按照创建时间排序的最新一张图片。
     *     <br>该参数在配置的情况下，需与RecentPhotoComponent组件中的options配置相同才可以查到一样的图片，否则可能存在接口能查到最近图片，组件没查到最近图片的情况。
     * @returns { Promise<RecentPhotoInfo> } Promise对象，返回最近图片信息。
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    getRecentPhotoInfo(options?: RecentPhotoOptions): Promise<RecentPhotoInfo>;

    /**
     * 获取系统、用户和来源相册的排序信息。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { int } orderStyle - 选择相册的排序风格。
     *     <br>0：Phone风格。1：PC风格。
     * @param { FetchOptions } [options] - 检索选项，不填时默认根据相册类型检索。
     * @returns { Promise<FetchResult<AlbumOrder>> } Promise对象，返回获取相册排序的结果集。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     Possible causes: The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error.
     *     It is recommended to retry and check the logs. Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getPhotoAlbumOrder(orderStyle: int, options?: FetchOptions): Promise<FetchResult<AlbumOrder>>;

    /**
     * 设置系统、用户和来源相册的排序。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { int } orderStyle - 选择相册的排序风格。
     *     <br>0：Phone风格。1：PC风格。
     * @param { Array<AlbumOrder> } albumOrders - 待设置的相册排序结果数组。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: 1.The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setPhotoAlbumOrder(orderStyle: int, albumOrders: Array<AlbumOrder>): Promise<void>;

    /**
     * 注册'photoChange'监听媒体资产，并通过callback方式返回资产变化结果，可以注册多个callback。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoChange' } type - 注册监听媒体资产，取值为'photoChange'。注册完成后，有资产发生变化时，通过callback返回变更信息。
     * @param { Callback<PhotoAssetChangeInfos> } callback - 返回变更的媒体资产信息
     *     [PhotoAssetChangeInfos]{@link photoAccessHelper.PhotoAssetChangeInfos}。
     *     <br>**注意：**
     *     <br>该接口可以注册多个不同的callback监听，
     *     [off('photoChange')]{@link photoAccessHelper.PhotoAccessHelper.off(type: 'photoChange', callback?: Callback<PhotoAssetChangeInfos>)}
     *     既可以关闭所有监听，也可以关闭指定callback监听。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The type is not fixed at 'photoChange';
     *     <br>2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     */
    on(type: 'photoChange', callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 注册对普通资产变化的监听。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<PhotoAssetChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    onPhotoChange(callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 注册对普通单个资产变化的监听。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PhotoAsset } asset - 注册单个监听的媒体资产。注册完成后，有资产发生变化时，通过callback返回变更信息。
     * @param { Callback<PhotoAssetChangeInfos> } callback - 返回变更的媒体资产信息
     *     [PhotoAssetChangeInfos]{@link @ohos.file.photoAccessHelper.PhotoAssetChangeInfos}。
     *     <br>**注意：**
     *     <br>该接口可以注册多个不同的callback监听。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The same callback is registered repeatedly.
     *     <br>2. Asset has been removed.
     *     <br>3. The uri of the asset invalid.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    onSinglePhotoChange(asset: PhotoAsset, callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 取消对'photoChange'媒体资产的监听。存在多个callback监听时，可以取消指定注册的callback监听；不指定callback时取消所有监听。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoChange' } type - 取消监听媒体资产，取值为'photoChange'。取消监听后，有资产发生变化时，不再通过callback返回变更信息。
     * @param { Callback<PhotoAssetChangeInfos> } [callback] - 取消
     *     [on('photoChange')]{@link photoAccessHelper.PhotoAccessHelper.on(type: 'photoChange', callback: Callback<PhotoAssetChangeInfos>)}
     *     注册时指定的callback监听；不填时，则取消对'photoChange'的所有监听。
     *     <br>**注意：**
     *     <br>取消注册的callback后，有资产发生变化时，不会进入此回调。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The type is not fixed at 'photoChange';
     *     <br>2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     */
    off(type: 'photoChange', callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 取消资产的监听。
   	 *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<PhotoAssetChangeInfos> } [callback] Callback used for unsubscription.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    offPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 取消单个资产的监听。具体规则如下：
     * 
     * 1. 不携带参数时，取消所有单个资产监听。
     * 2. 携带asset，不携带callback时，取消该asset下所有callback监听。
     * 3. 携带asset和callback时，仅取消指定callback监听。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PhotoAsset } [asset] - 取消监听资产。取消asset资产监听后,当asset发生变化时,不再通过callback返回变更信息。不携带时，取消注册过的所有单个资产监听。
     * @param { Callback<PhotoAssetChangeInfos> } [callback] - 用于取消订阅的回调。不携带时，取消asset参数下所有callback。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The same callback is unregistered repeatedly.
     *     <br>2. The uri of the asset invalid.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    offSinglePhotoChange(asset?: PhotoAsset, callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 注册'hiddenPhotoChange'监听隐藏的媒体资产，并通过callback方式返回隐藏资产变化结果，可以注册多个callback。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenPhotoChange' } type - 注册监听隐藏资产，取值为'hiddenPhotoChange'。注册完成后，有隐藏资产发生变化时，通过callback返回变更信息。
     * @param { Callback<PhotoAssetChangeInfos> } callback - 返回变更的隐藏媒体资产信息
     *     [PhotoAssetChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAssetChangeInfos}.
     *     <br>**注意：**
     *     <br>该接口可以注册多个不同的callback监听，
     *     [off('hiddenPhotoChange')]{@link photoAccessHelper.PhotoAccessHelper.off(type: 'hiddenPhotoChange', callback?: Callback<PhotoAssetChangeInfos>)}
     *     既可以关闭所有监听，也可以关闭指定callback监听。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     1. The type is not fixed at 'hiddenPhotoChange'; 2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'hiddenPhotoChange', callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 注册监听隐藏的媒体资产。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<PhotoAssetChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    onHiddenPhotoChange(callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 取消对'hiddenPhotoChange'隐藏资产的监听。存在多个callback监听时，可以取消指定注册的callback监听；不指定callback时取消所有监听。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenPhotoChange' } type - 取消监听隐藏资产，取值为'hiddenPhotoChange'。取消监听后，有隐藏资产发生变化时，不再通过callback返回变更信息。
     * @param { Callback<PhotoAssetChangeInfos> } [callback] - 取消
     *     [on('hiddenPhotoChange')]{@link photoAccessHelper.PhotoAccessHelper.on(type: 'hiddenPhotoChange', callback: Callback<PhotoAssetChangeInfos>)}
     *     注册时指定的callback监听；不填时，则取消对'hiddenPhotoChange'的所有监听。
     *     <br>**注意：**
     *     <br>取消注册的callback后，有隐藏资产发生变化时，不会进入此回调。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The type is not fixed at 'hiddenPhotoChange';
     *     <br>2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'hiddenPhotoChange', callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 取消监听隐藏的媒体资产。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<PhotoAssetChangeInfos> } [callback] Callback used for unsubscription.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    offHiddenPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 注册'trashedPhotoChange'监听回收站的媒体资产，并通过callback方式返回回收站资产变化结果，可以注册多个callback。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedPhotoChange' } type - 注册监听回收站资产，取值为'trashedPhotoChange'。注册完成后，有回收站资产发生变化时，通过callback返回变更信息。
     * @param { Callback<PhotoAssetChangeInfos> } callback - 返回变更的回收站媒体资产信息
     *     [PhotoAssetChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAssetChangeInfos}.
     *     <br>**注意：**
     *     <br>该接口可以注册多个不同的callback监听，
     *     [off('trashedPhotoChange')]{@link photoAccessHelper.PhotoAccessHelper.off(type: 'trashedPhotoChange', callback?: Callback<PhotoAssetChangeInfos>)}
     *     既可以关闭所有监听，也可以关闭指定callback监听。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The type is not fixed at 'trashedPhotoChange';
     *     <br>2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'trashedPhotoChange', callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 注册回收站媒体资产监听。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<PhotoAssetChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    onTrashedPhotoChange(callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 取消对'trashedPhotoChange'回收站资产的监听。存在多个callback监听时，可以取消指定注册的callback监听；不指定callback时取消所有监听。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedPhotoChange' } type - 取消监听回收站资产，取值为'trashedPhotoChange'。取消监听后，有回收站资产发生变化时，不再通过callback返回变更信息。
     * @param { Callback<PhotoAssetChangeInfos> } [callback] - 取消
     *     [on('trashedPhotoChange')]{@link photoAccessHelper.PhotoAccessHelper.on(type: 'trashedPhotoChange', callback: Callback<PhotoAssetChangeInfos>)}
     *     注册时指定的callback监听；不填时，则取消对'trashedPhotoChange'的所有监听。
     *     <br>**注意：**
     *     <br>取消注册的callback后，有回收站资产发生变化时，不会进入此回调。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The type is not fixed at 'trashedPhotoChange';
     *     <br>2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'trashedPhotoChange', callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 注销回收站媒体资产监听。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<PhotoAssetChangeInfos> } [callback] 监听图片和视频的回调
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    offTrashedPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 共享相册资产的监听
     *
     * @permission ohos.permission.MANAGE_SHARE_PHOTO
     * @param { Callback<PhotoAssetChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 26.1.0 dynamic&static
     */
    onSharePhotoChange(callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 注销共享相册图片和视频的监听
     *
     * @permission ohos.permission.MANAGE_SHARE_PHOTO
     * @param { Callback<PhotoAssetChangeInfos> } [callback] 监听图片和视频的回调
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 26.1.0 dynamic&static
     */
    offSharePhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 监听与智慧分析相册相关的媒体资产的变更情况，该变更携带智慧分析相册变更信息，当且仅当资产变更涉及智慧分析相册信息变更时，才会发送该资产变更通知，
   	 *      通过callback返回资产变化结果，可以注册多个callback。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<PhotoAssetChangeInfos> } callback - 回调函数，返回含对应智慧分析相册变更的媒体资产信息
     *     [PhotoAssetChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAssetChangeInfos}。
     *     <br>**注意：**
     *     <br>该接口可以注册多个不同的callback监听，
     *     [offAnalysisPhotoChange]{@link photoAccessHelper.PhotoAccessHelper.offAnalysisPhotoChange(callback?: Callback<PhotoAssetChangeInfos>)}
     *     既可以关闭所有监听，也可以关闭指定callback监听。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onAnalysisPhotoChange(callback: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 取消对与智慧分析相册相关的媒体资产变更的监听。存在多个callback监听时，可以取消指定注册的callback监听；不指定callback时取消所有监听。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<PhotoAssetChangeInfos> } [callback] - 回调函数，返回含对应智慧分析相册变更的媒体资产信息，填入时取消
     *     [onAnalysisPhotoChange]{@link photoAccessHelper.PhotoAccessHelper.onAnalysisPhotoChange(callback: Callback<PhotoAssetChangeInfos>)}
     *     注册时指定的callback监听；不填时，则取消对
     *     [onAnalysisPhotoChange]{@link photoAccessHelper.PhotoAccessHelper.onAnalysisPhotoChange(callback: Callback<PhotoAssetChangeInfos>)}
     *     的所有监听。
     *     <br>**注意：**
     *     <br>取消注册的callback后，智慧分析相册的资产变更时，不再进入此回调。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offAnalysisPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * 注册'photoAlbumChange'监听相册，并通过callback方式返回相册变化结果，可以注册多个callback。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoAlbumChange' } type - 注册监听相册，取值为'photoAlbumChange'。注册完成后，有相册发生变化时，通过callback返回变更信息。
     * @param { Callback<AlbumChangeInfos> } callback - 返回变更的相册信息
     *     [AlbumChangeInfos]{@link photoAccessHelper.AlbumChangeInfos}。
     *     <br>**注意：**
     *     <br>该接口可以注册多个不同的callback监听，
     *     [off('photoAlbumChange')]{@link photoAccessHelper.PhotoAccessHelper.off(type: 'photoAlbumChange', callback?: Callback<AlbumChangeInfos>)}
     *     既可以关闭所有监听，也可以关闭指定callback监听。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The type is not fixed at 'photoAlbumChange';
     *     <br>2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     */
    on(type: 'photoAlbumChange', callback: Callback<AlbumChangeInfos>): void;

    /**
     * 注册相册监听。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    onPhotoAlbumChange(callback: Callback<AlbumChangeInfos>): void;

    /**
     * 注册对普通单个相册变化的监听。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Album } album - 注册单个监听的媒体相册。注册完成后，当该相册发生变化时，通过callback返回变更信息。
     * @param { Callback<AlbumChangeInfos> } callback - 返回变更的媒体相册信息
     *     [PhotoAssetChangeInfos]{@link photoAccessHelper.PhotoAssetChangeInfos}。
     *     <br>**注意：**
     *     <br>该接口可以注册多个不同的callback监听。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     1. The same callback is registered repeatedly. 2. Album has been removed. 3. The uri of the a invalid.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    onSinglePhotoAlbumChange(album: Album, callback: Callback<AlbumChangeInfos>): void;

    /**
     * 取消对'photoAlbumChange'相册的监听。存在多个callback监听时，可以取消指定注册的callback监听；不指定callback时取消所有监听。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoAlbumChange' } type - 取消监听相册，取值为'photoAlbumChange'。取消监听后，有相册发生变化时，不再通过callback返回变更信息。
     * @param { Callback<AlbumChangeInfos> } [callback] - 取消
     *     [on('photoAlbumChange')]{@link photoAccessHelper.PhotoAccessHelper.on(type: 'photoAlbumChange', callback: Callback<AlbumChangeInfos>)}
     *     注册时指定的callback监听；不填时，则取消对'photoAlbumChange'的所有监听。
     *     <br>**注意：**
     *     <br>取消注册的callback后，有相册发生变化时，不会进入此回调。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The type is not fixed at 'photoAlbumChange';
     *     <br>2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the
     *     logs.
     *     <br>Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     */
    off(type: 'photoAlbumChange', callback?: Callback<AlbumChangeInfos>): void;

    /**
     * 注销相册监听。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } [callback] Callback used for unsubscription.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    offPhotoAlbumChange(callback?: Callback<AlbumChangeInfos>): void;

    /**
     * 取消对单个相册的监听。具体规则如下：
     * 
     * 1. 不携带任何参数时，取消所有单个相册监听。
     * 2. 携带album，不携带callback时，取消该album下所有callback监听。
     * 3. 携带album和callback时，仅取消指定callback监听。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Album } [album] - 取消监听相册。取消监听后,有相册发生变化时,不再通过callback返回变更信息。
     * @param { Callback<AlbumChangeInfos> } [callback] - 用于取消订阅的回调。不携带时，取消album参数下所有callback。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The same callback is unregistered repeatedly.
     *     <br>2. The uri of the album invalid.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    offSinglePhotoAlbumChange(album?: Album, callback?: Callback<AlbumChangeInfos>): void;

    /**
     * 注册'hiddenAlbumChange'监听隐藏相册，并通过callback方式返回相册变化结果，可以注册多个callback。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenAlbumChange' } type - 注册监听隐藏相册，取值为'hiddenAlbumChange'。注册完成后，有隐藏相册发生变化时，通过callback返回变更信息。
     * @param { Callback<AlbumChangeInfos> } callback - 返回变更的隐藏相册信息
     *     [AlbumChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.AlbumChangeInfos}。
     *     <br>**注意：**
     *     <br>该接口可以注册多个不同的callback监听，
     *     [off('hiddenAlbumChange')]{@link photoAccessHelper.PhotoAccessHelper.off(type: 'hiddenAlbumChange', callback?: Callback<AlbumChangeInfos>)}
     *     既可以关闭所有监听，也可以关闭指定callback监听。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The type is not fixed at 'hiddenAlbumChange';
     *     <br>2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'hiddenAlbumChange', callback: Callback<AlbumChangeInfos>): void;

    /**
     * 注册隐藏相册监听。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<AlbumChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    onHiddenAlbumChange(callback: Callback<AlbumChangeInfos>): void;

    /**
     * 取消对'hiddenAlbumChange'隐藏相册的监听。存在多个callback监听时，可以取消指定注册的callback监听；不指定callback时取消所有监听。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenAlbumChange' } type - 取消监听隐藏相册，取值为'hiddenAlbumChange'。取消监听后，有隐藏相册发生变化时，不再通过callback返回变更信息。
     * @param { Callback<AlbumChangeInfos> } [callback] - 取消
     *     [on('hiddenAlbumChange')]{@link photoAccessHelper.PhotoAccessHelper.on(type: 'hiddenAlbumChange', callback: Callback<AlbumChangeInfos>)}
     *     注册时指定的callback监听；不填时，则取消对'hiddenAlbumChange'的所有监听。
     *     <br>**注意：**
     *     <br>取消注册的callback后，有隐藏相册发生变化时，不会进入此回调。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The type is not fixed at 'hiddenAlbumChange';
     *     <br>2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'hiddenAlbumChange', callback?: Callback<AlbumChangeInfos>): void;

    /**
     * 注销隐藏相册监听。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<AlbumChangeInfos> } [callback] Callback used for unsubscription.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    offhiddenAlbumChange(callback?: Callback<AlbumChangeInfos>): void;

    /**
     * 注册'trashedAlbumChange'监听回收站相册，并通过callback方式返回相册变化结果，可以注册多个callback。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedAlbumChange' } type - 注册监听回收站相册，取值为'trashedAlbumChange'。注册完成后，有回收站相册发生变化时，通过callback返回变更信息。
     * @param { Callback<AlbumChangeInfos> } callback - 返回变更的相册信息
     *     [AlbumChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.AlbumChangeInfos}。
     *     <br>**注意：**
     *     <br>该接口可以注册多个不同的callback监听，
     *     [off('trashedAlbumChange')]{@link photoAccessHelper.PhotoAccessHelper.off(type: 'trashedAlbumChange', callback?: Callback<AlbumChangeInfos>)}
     *     既可以关闭所有监听，也可以关闭指定callback监听。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The type is not fixed at 'trashedAlbumChange';
     *     <br>2. The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    on(type: 'trashedAlbumChange', callback: Callback<AlbumChangeInfos>): void;

    /**
     * Subscribes to changes of the trashed album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    onTrashedAlbumChange(callback: Callback<AlbumChangeInfos>): void;

    /**
     * 取消对'trashedAlbumChange'回收站相册的监听。存在多个callback监听时，可以取消指定注册的callback监听；不指定callback时取消所有监听。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedAlbumChange' } type - 取消监听回收站相册，取值为'trashedAlbumChange'。取消监听后，有回收站相册发生变化时，不再通过callback返回变更信息。
     * @param { Callback<AlbumChangeInfos> } [callback] - 取消
     *     [on('trashedAlbumChange')]{@link photoAccessHelper.PhotoAccessHelper.on(type: 'trashedAlbumChange', callback: Callback<AlbumChangeInfos>)}
     *     注册时指定的callback监听；不填时，则取消对'trashedAlbumChange'的所有监听。
     *     <br>**注意：**
     *     <br>取消注册的callback后，有回收站相册发生变化时，不会进入此回调。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The type is not fixed at 'trashedAlbumChange';
     *     <br>2. The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    off(type: 'trashedAlbumChange', callback?: Callback<AlbumChangeInfos>): void;

    /**
     * Unsubscribes from changes in the trashed album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } [callback] Callback used for unsubscription.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    offTrashedAlbumChange(callback?: Callback<AlbumChangeInfos>): void;

    /**
     * 监听共享相册的变化
     *
     * @permission ohos.permission.MANAGE_SHARE_PHOTO
     * @param { Callback<AlbumChangeInfos> } callback Callback used to notify the application of the changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 26.1.0 dynamic&static
     */
    onShareAlbumChange(callback: Callback<AlbumChangeInfos>): void;

    /**
     * 注销共享相册的监听
     *
     * @permission ohos.permission.MANAGE_SHARE_PHOTO
     * @param { Callback<AlbumChangeInfos> } [callback] 共享相册的监听回调
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 26.1.0 dynamic&static
     */
    offShareAlbumChange(callback?: Callback<AlbumChangeInfos>): void;

    /**
     * 监听智慧分析相册，并通过callback方式返回相册变化结果，可以注册多个callback。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } callback - 回调函数，返回变更的智慧分析相册信息
     *     [AlbumChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.AlbumChangeInfos}。
     *     <br>**注意：**
     *     <br>该接口可以注册多个不同的callback监听，
     *     [offAnalysisAlbumChange]{@link photoAccessHelper.PhotoAccessHelper.offAnalysisAlbumChange(callback?: Callback<AlbumChangeInfos>)}
     *     既可以关闭所有监听，也可以关闭指定callback监听。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is registered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onAnalysisAlbumChange(callback: Callback<AlbumChangeInfos>): void;

    /**
     * 取消对智慧分析相册的监听。存在多个callback监听时，可以取消指定注册的callback监听；不指定callback时取消所有监听。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } [callback] - 回调函数，返回变更的智慧分析相册信息，填入时取消
     *     [onAnalysisAlbumChange]{@link photoAccessHelper.PhotoAccessHelper.onAnalysisAlbumChange(callback: Callback<AlbumChangeInfos>)}
     *     注册时指定的callback监听；不填时，则取消
     *     [onAnalysisAlbumChange]{@link photoAccessHelper.PhotoAccessHelper.onAnalysisAlbumChange(callback: Callback<AlbumChangeInfos>)}
     *     注册的所有监听。
     *     <br>**注意：**
     *     <br>取消注册的callback后，有智慧相册发生变化时，不会进入此回调。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    offAnalysisAlbumChange(callback?: Callback<AlbumChangeInfos>): void;

    /**
     * 应用使用PhotoPickerComponent组件选择照片时，支持调用API获取组件默认显示相册的相册名字符串。跟随当前系统语言，支持返回当前语言的相册名。使用Promise异步回调。
     *
     * @returns { Promise<string> } Promise对象，返回默认相册的相册名。
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. The IPC request timed out.
     *     <br>2. system running error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    getPhotoPickerComponentDefaultAlbumName(): Promise<string>;

    /**
     * 检查是否要为指定应用创建JPEG格式的临时副本。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } bundleName - 需查询的应用包名。
     * @returns { Promise<boolean> } 检查是否要为指定应用创建JPEG格式的临时副本。true表示创建，false表示不创建。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. The IPC request timed out.
     *     <br>2. system running error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    isCompatibleDuplicateSupported(bundleName: string): Promise<boolean>;

    /**
     * 批量获取传入的[PhotoAsset](js-apis-photoAccessHelper-sys.md#photoasset)对象数组中指定属性的值。
     *
     * @param {PhotoAsset[]} assets - 需要批量获取属性的文件数组。
     * @param {string[]} members - 需要批量获取的属性数组。
     * @returns { PhotoAssetParams } 文件属性名称及其值的Record类型数组。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: The attribute to be queried does not exist in assets.
     * @throws { BusinessError } 23800104 - The provided member must be a property name of PhotoKey.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    batchGetPhotoAssetParams(assets: PhotoAsset[], members: string[]): PhotoAssetParams;
    /**
     * 根据指定的SQL语句查询数据库数据，不支持写操作和多级查询。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { string } sql - 指定要执行的SQL语句。
     * @returns { Promise<ResultSet> } Promise对象，如果操作成功，则返回ResultSet对象。如果操作失败，则抛出异常。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes: The SQL statement is abnormal.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    query(sql: string): Promise<ResultSet>;

    /**
     * Start medialibrary database backup and wait for returning with backup infomation which only works on beta device.
     *
     * @param { string } betaIssueId - The beta issue id.
     * @param { string } betaScenario - The beta scenario.
     * @returns { Promise<Map<string, string>> } - The  returning with backup information,
     *     which includes FILE_FD, FILE_NAME and FILE_SIZE.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The betaIssueId parameter is invalid, such as null, undefined or empty string.
     *     <br>2. The betaScenario parameter is invalid, such as null, undefined or empty string.
     *     <br>3. The same betaIssueId task is processing.
     * @throws { BusinessError } 23800201 - Unsupported operation type, this api only works on beta device.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    acquireDebugDatabase(betaIssueId: string, betaScenario: string): Promise<Map<string, string>>;

    /**
     * Release medialibrary database backup resources incluses closing backup database fd and
     *     deleting temporary backup database file which only works on beta device.
     *
     * @param { string } betaIssueId - The beta issue id.
     * @param { int } dbFd - The backup database fd.
     * @returns { Promise<void> } - Return void.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The betaIssueId parameter is invalid, such as null, undefined or empty string.
     *     <br>2. The daFd parameter is invalid, such as out of range 0~1023.
     * @throws { BusinessError } 23800201 - Unsupported operation type, this api only works on beta device.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    releaseDebugDatabase(betaIssueId: string, dbFd: int): Promise<void>;

    /**
     * 根据bundleName获取媒体库相册的ID。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } bundleName - 应用的bundleName
     * @returns { Promise<int> } - 返回对应bundleName的albumId
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The bundleName is invalid, such as null, undefined and empty.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    getAlbumIdByBundleName(bundleName: string): Promise<int>;

    /**
     * 根据相册的虚拟路径获取媒体库相册的ID。使用Promise异步回调。
     * 
     * 该接口仅支持以下相册：相机相册（'/DCIM/Camera'）、截图相册（'/Pictures/Screenshots'）和屏幕录制相册（'/Pictures/Screenrecords'）。
     * 
     * ​**模型约束**： 此接口仅可在Stage模型下使用。
     *
     * @param { string } lpath - 相册的虚拟路径，lpath长度不能超过255个字符。
     * @returns { Promise<int> } Promise对象，返回相册lpath对应的媒体库相册的ID。
     * @throws { BusinessError } 23800151 - The lpath is invalid, such as null, undefined and empty.
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    getAlbumIdByLpath(lpath: string): Promise<int>;

    /**
     * 将ValuesBucket记录转换为PhotoAsset对象。
     *
     * @param { ValuesBucket[] } assetsData - 资产记录的数组。
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
     * @since 24 dynamic&static
     */
    getPhotoAssets(assetsData: ValuesBucket[]): Promise<PhotoAsset[]>;

    /**
     * 判断指定的媒体数据是否已经准备完成。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } mediaDataKey - 查询的媒体数据类型。
     *     <br>当前支持配置的取值为"date_added_year"，表示查询资产的添加时间（年月日）数据是否准备完成。
     * @returns { Promise<boolean> } Promise对象。返回true表示媒体数据准备完成；返回false表示媒体数据未准备完成。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails, unsupported media data type.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    isMediaDataReady(mediaDataKey: string): Promise<boolean>;

    /**
     * 根据bundleName获取资产兼容能力。当应用程序获取文件时，可判断该应用程序是否需要进行兼容性转换。
     *
     * @param { string } bundleName - 目标应用的BundleName。
     * @returns { Promise<AssetCompatibleCapability> } 返回指定的资产兼容能力。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The bundleName is invalid, such as null, undefined and empty.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    getAssetCompatibleCapability(bundleName: string): Promise<AssetCompatibleCapability>;

    /**
     * 根据bundleName配置资产兼容能力。开发者可以获取兼容性能力，并决定是否根据兼容性能力进行兼容性转换。
     *
     * @param { string } bundleName - 应用的bundleName。
     * @param { AssetCompatibleCapability } capability - 资产兼容能力。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The bundleName or capability is invalid.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setAssetCompatibleCapability(bundleName: string, capability: AssetCompatibleCapability): Promise<void>;

    /**
     * 配置资产兼容能力。系统会对特殊的资产（如高分辨率资产）进行兼容性处理，如果开发者希望获得原始资产需要向系统注册兼容能力。
     * 
     * ​
     *
     * @param { AssetCompatibleCapability } capability - 资产兼容能力。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 23800151 - The capability is invalid.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setAssetCompatibleCapability(capability: AssetCompatibleCapability): Promise<void>;

    /**
     * 根据bundleName获取应用配置的首选兼容模式。使用Promise异步回调。
     *
     * @param { string } bundleName - 应用包名。
     * @returns { Promise<PreferredCompatibleMode> } 资产兼容能力。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The bundleName is invalid, such as null, undefined and empty.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getPreferredCompatibleMode(bundleName: string): Promise<PreferredCompatibleMode>;

    /**
     * 根据bundleName配置应用程序设置的首选兼容模式。使用Promise异步回调。
     *
     * @param { string } bundleName - 应用捆绑包名称。
     * @param { PreferredCompatibleMode } compatibleMode - 资产兼容能力。
     * @returns { Promise<void> } 返回void。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The bundleName is invalid, such as null, undefined and empty.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setPreferredCompatibleMode(bundleName: string, compatibleMode: PreferredCompatibleMode): Promise<void>;

    /**
     * 根据bundleName、photoAsset列表和compatibleFlag获取需要转码的URI列表。使用Promise异步回调。
     *
     * @param { string } bundleName - 应用捆绑包名称
     * @param { Array<PhotoAsset> } assets - 资产的数组
     * @param { int } [compatibleFlag] - 兼容配置掩码标志
     *     <br>取值范围为全体整数。
     * @returns { Promise<Array<string>> } Promise用于返回需要转码的媒体库文件uri列表。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     Possible causes:
     *     <br>1. The bundleName is invalid;
     *     <br>2. The compatibleFlag is invalid;
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getAssetCompatibleUris(bundleName: string, assets: Array<PhotoAsset>, compatibleFlag?: int): Promise<Array<string>>;

    /**
     * 移动资产到文件管理目录中。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string[] } assets - 媒体库沙箱资产uri
     * @param { string } target - 文管公共目录
     * @param { BatchOperationOptions } [option] - 批量操作的选项
     *     <br>批量操作的选项
     * @returns { Promise<string[]> } 返回资产的路径
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Moving to the target directory is not supported;
     *     <br>2. Assets to be Moved does not exist;
     *     <br>3. Automatic renaming is not supported.
     *     <br>4. The task is interrupted.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    moveAssetsToDir(assets: string[], target: string, option?: BatchOperationOptions): Promise<string[]>;

    /**
     * 将文件管理中的资产移动到目标相册中。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string[] } assets - 文管公共目录的资产
     * @param { Album } target - 图库相册
     * @param { BatchOperationOptions } [option] - 批量操作的选项
     * @returns { Promise<string[]> } 返回成功的资产URI。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Moving to the target Album is not supported;
     *     <br>2. Assets to be Moved does not exist;
     *     <br>3. Automatic renaming is not supported.
     *     <br>4. The task is interrupted.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    moveAssetsByPath(assets: string[], target: Album, option?: BatchOperationOptions): Promise<string[]>;

    /**
     * 复制资产到目标相册。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoAsset[] } assets - 资产
     * @param { Album } target - 相册
     * @param { BatchOperationOptions } [option] - 批量操作选项
     * @returns { Promise<PhotoAsset[]> } Returns list of successful assets.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Asset to be cloned has been deleted or hidden;
     *     <br>2. Asset to be cloned is cloud pictures, which can not be cloned;
     *     <br>3. The Target Album does not exist.
     *     <br>4. Insufficient system space.
     *     <br>5. Automatic renaming is not supported.
     *     <br>6. The clone task is interrupted.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    cloneToAlbum(assets: PhotoAsset[], target: Album, option?: BatchOperationOptions): Promise<PhotoAsset[]>;

    /**
     * 复制资产到文件管理目录中。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string[] } assets - 待复制的图库资产
     * @param { string } target - 文管公共目录
     * @param { BatchOperationOptions } [option] - 批量操作选项
     * @returns { Promise<string[]> } Returns successed assets path.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Asset to be cloned has been deleted or hidden;
     *     <br>2. Asset to be cloned is cloud pictures, which can not be cloned;
     *     <br>3. The Target Album does not exist.
     *     <br>4. Insufficient system space.
     *     <br>5. Automatic renaming is not supported.
     *     <br>6. The clone task is interrupted.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    cloneToDir(assets: string[], target: string, option?: BatchOperationOptions): Promise<string[]>;

    /**
     * 将文件管理中的资产复制到目标相册中。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string[] } assets - 文管公共目录的图片
     * @param { Album } target - 相册
     * @param { BatchOperationOptions } [option] - 批量操作选项
     * @returns { Promise<string[]> } Returns successed assets URI.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Asset to be cloned has been delete or hidden;
     *     <br>2. Asset to be cloned is cloud pictures, which can not be cloned;
     *     <br>3. The Target Album does not exist.
     *     <br>4. Insufficient system space.
     *     <br>5. Automatic renaming is not supported.
     *     <br>6. The clone task is interrupted.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    cloneAssetsByPath(assets: string[], target: Album, option?: BatchOperationOptions): Promise<string[]>;

    /**
     * 将文件管理公共目录中的资产转换为资产对象。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } path - 文管公共目录的图片。
     * @returns { Promise<PhotoAsset> } Returns successed asset.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Converted an image after filtering into an asset object;
     *     <br>2. File to be converted is not exist;
     *     <br>3. Only images in the public directory of filemanager can be converted.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    convertToAsset(path: string): Promise<PhotoAsset>;

    /**
     * 启动异步资产分析。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AnalysisConfig } config - 资产分析配置，config中的uris从
     *     [PhotoAsset]{@link @ohos.file.photoAccessHelper:photoAccessHelper}对象中获取。
     * @param { Callback<AnalysisResult> } callback - 回调函数，用于返回资产分析结果信息。
     * @returns { Promise<int> } Promise对象，返回服务的任务ID。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Unsupported or invalid types of config;
     *     <br>2. The types or uris array size of config exceed max value.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    startAssetAnalysisAsync(config: AnalysisConfig, callback: Callback<AnalysisResult>): Promise<int>;

    /**
     * 停止资产分析。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AnalysisConfig } config - 资产分析配置。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Unsupported or invalid AnalysisType of config;
     *     <br>2. The types or uris array size of config exceed max value.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    stopAssetAnalysis(config: AnalysisConfig): void;

    /**
     * 查询URI对应资产的读权限，以及资产是否存在。使用Promise异步回调。
     *
     * @param { string[] } uris - 待查询的URI数组，单次最多查询500条。
     * @returns {Promise<Map<string, MediaAssetPermissionState>>} - Promise对象，返回URI与MediaAssetPermissionState的键值对集合。
     * @throws { BusinessError } 23800151 - Scenario-specific parameters are incorrect. Possible causes are as follows:
     *     <br>1. The length of the input parameter queue is greater than 500.
     *     <br>2. The input parameter is null or undefined.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    checkPhotoUrisReadPermission(uris: string[]): Promise<Map<string, MediaAssetPermissionState>>;

    /**
     * 注册媒体库可用性状态，返回媒体库当前可用状态和不可用原因。使用callback异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<MediaLibraryAvailability> } callback - 回调函数，返回媒体库可用性信息。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 - Scenario-specific parameters are incorrect. Possible causes are as follows:
     *     <br>1. The input parameter is null or undefined.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onMediaLibraryAvailability(callback: Callback<MediaLibraryAvailability>): void;

    /**
     * 取消注册媒体库可用性状态。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<MediaLibraryAvailability> } [callback] - 回调函数，返回取消
     *     [onMediaLibraryAvailability]{@link photoAccessHelper.PhotoAccessHelper.onMediaLibraryAvailability(callback: Callback<MediaLibraryAvailability>)}
     *     注册时指定的callback监听。不填时，则取消对媒体库可用性变化的所有监听。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offMediaLibraryAvailability(callback? : Callback<MediaLibraryAvailability>):void;

    /**
     * 批量创建资产
     * 同时支持选择是否指定相册和是否立即生成缩略图
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { CreationSetting[] } creationSettings - 待创建资产列表。
     * @param { boolean } isRealTimeThumb - 是否实时生成缩略图。
     * @param { string } [albumUri] - 创建资产的目标相册。
     * @returns { Promise<string[]> } - 返回资产uri，若某一条失败则为null
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - Scenario-specific parameters are incorrect. Possible causes are as follows:
     *     <br>1. The input parameter creationSettings is null or undefined.
     *     <br>2. The array length of creationSettings is bigger than 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    createAssetsWithAlbum(
      creationSettings: CreationSetting[], 
      isRealTimeThumb: boolean, 
      albumUri?: string): Promise<string[]>;

    /**
     * 修改相册的默认封面选择顺序
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { DefaultCoverOrderInfo[] } coverOrderInfos - 批量处理的相册封面修改信息
     * @param { boolean } disableModification - 去使能修改项
     * @param { boolean } isAsyncRefreshAlbum - 针对克隆等场景，若存在大量相册需要刷新相册，比较耗时，建议应用使用异步刷新
     * @returns { Promise<void> } 无返回值
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Only the system album can be set without lpath. Otherwise, the setting is not supported;
     *     <br>2. The orderKey and orderSubKey are not in the specified range;
     *     <br>3. The order type must be either descending or ascending.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    modifyAlbumDefaultCoverOrder(coverOrderInfos: DefaultCoverOrderInfo[], 
    disableModification: boolean, 
    isAsyncRefreshAlbum: boolean): Promise<void>;

    /**
     * 修改隐藏相册的默认封面选择顺序
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { DefaultCoverOrderInfo[] } coverOrderInfos - 批量修改默认封面顺序信息
     * @param { boolean } disableModification - 去使能修改项
     * @param { boolean } isAsyncRefreshAlbum - 克隆等场景，若大量刷新相册封面，建议应用异步刷新相册
     * @returns { Promise<void> } 返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Only the system album can be set without lpath. Otherwise, the setting is not supported;
     *     <br>2. The orderKey and orderSubKey are not in the specified range;
     *     <br>3. The order type must be either descending or ascending.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    modifyHiddenAlbumDefaultCoverOrder(coverOrderInfos: DefaultCoverOrderInfo[], 
    disableModification: boolean, 
    isAsyncRefreshAlbum: boolean): Promise<void>;

    /**
     * 查询当前系统是否可以执行深度优化存储空间功能。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<boolean> } Promise对象。**true**表示可以调用
     *     [startDeepOptimizeSpace()]{@link photoAccessHelper.startDeepOptimizeSpace}。
     *     **false**表示[startDeepOptimizeSpace()]{@link photoAccessHelper.startDeepOptimizeSpace} 不可以调用。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    canPerformDeepOptimizeSpace(): Promise<boolean>;

    /**
     * 获取可以深度优化存储空间的大小，单位为字节（byte）。使用Promise异步回调。

     * <br>
     * Unit:Byte{s}.
     * 
     * - 此接口耗时较长，建议先调用[canPerformDeepOptimizeSpace](#canperformdeepoptimizespace)确认当前系统状态是否允许执行。
   	 * - 仅在返回true时调用此接口。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<long> } - Promise对象。返回可以深度优化存储空间大小。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeepOptimizeSpace(): Promise<long>;

    /**
     * 开启深度优化存储空间。使用Promise异步回调。
     * 
     * 建议先调用[canPerformDeepOptimizeSpace](#canperformdeepoptimizespace)确认当前系统状态是否允许执行，仅在返回true时调用此接口。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Callback<DeepOptimizeSpaceProgress> } [callback] - 深度优化存储空间进度回调函数
     *     默认值： null。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800201 - Unsupported operation type, Possible causes:
     *     <br>1. Restarted repeatedly;
     *     <br>2. system is busy. Please try again later;
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    startDeepOptimizeSpace(callback?: Callback<DeepOptimizeSpaceProgress>): Promise<void>;

    /**
     * 停止深度优化存储空间。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopDeepOptimizeSpace(): Promise<void>;

    /**
     * 触发分析工具的执行。该接口使用promise返回结果。
     *
     * @permission ohos.permission.CONTROL_IMAGEVIDEO_ANALYSIS
     * @param { ToolInvokeConfig } config - 工具调用配置。
     * @param { Callback<AnalysisToolResult> } callback - 工具执行完成时调用的回调。
     * @returns { Promise<string> } Promise用于返回任务ID。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Unsupported tool type;
     *     <br>2. The length of **param** in **ToolInvokeConfig** exceeds 16KB.
     * @throws { BusinessError } 23800301 - Internal system error. Possible causes:
     *     <br>1. IPC timeout;
     *     <br>2. System exception.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    invokeAnalysisTool(config: ToolInvokeConfig, callback: Callback<AnalysisToolResult>): Promise<string>;

    /**
     * 取消执行智能分析工具。
     *
     * @permission ohos.permission.CONTROL_IMAGEVIDEO_ANALYSIS
     * @param { ToolCancelConfig } config - 取消工具配置。
     * @returns { Promise<void> } 不会返回任何值的Promise。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Invalid task id.
     *     <br>2. The length of **param** in **ToolCancelConfig** exceeds 16KB.
     * @throws { BusinessError } 23800301 - Internal system error. Possible causes:
     *     <br>1. IPC timeout;
     *     <br>2. System exception.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    cancelAnalysisTool(config: ToolCancelConfig): Promise<void>;

    /**
     * 转换传入的PhotoAsset属性到媒体库兼容文件格式属性。
     *
     * @param { Array<PhotoAsset> } assets - 需要转换。
     * @returns { Promise<Array<PhotoAsset>> } Promise用于返回已转换的资产。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Invalid Array<PhotoAsset>.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    convertAssetToCompatibleAsset(assets: Array<PhotoAsset>): Promise<Array<PhotoAsset>>;
  }

  /**
   * 相册默认封面选择规则信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export class DefaultCoverOrderInfo {
    /**
     * 相册类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public albumType: AlbumType;

    /**
     * 相册子类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public albumSubtype: AlbumSubtype;

    /**
     * 相册的虚拟路径。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public lpath?: string;

    /**
     * 默认封面选择依赖的主字段。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public orderKey: PhotoKeys;

    /**
     * 默认封面选择依赖的辅助字段。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public orderSubKey: PhotoKeys;

    /**
     * 默认封面选择依赖字段的排序类型。
     * 值为整数，取值范围为[0, 1]。0表示按照orderKey和orderSubKey字段降序排列选择默认封面，1表示按照orderKey和orderSubKey字段升序排列选择默认封面。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public orderType: int;
  }

  /**
   * 最近图片配置选项。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  export class RecentPhotoOptions {
    /**
     * 配置最近图片显示的时间范围，单位为秒（s）。配置后，系统将显示距离当前时间点指定时长内的图片。最长可配置时长为1天（86400s）。
     * 
     * 当值小于等于0、大于86400或者未配置时，默认按最长时间段（1天）显示最近图片。当配置时间段内无符合的图片或视频时，组件不显示。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    period?: int;

    /**
     * 最近图片控件显示的文件类型，默认为PhotoViewMIMETypes.IMAGE_VIDEO_TYPE。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    MIMEType?: photoAccessHelper.PhotoViewMIMETypes;

    /**
     * 配置最近图片视频显示内容的来源，比如拍照、截屏等。默认不限制来源。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    photoSource?: PhotoSource;
  }

  /**
   * 最近图片相关信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  export class RecentPhotoInfo {
    /**
     * 最近图片/视频的拍摄时间（距1970年1月1日的毫秒数值），单位为毫秒（ms）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    dateTaken?: long;

    /**
     * 最近图片/视频的名称hash值，用于辅助应用区分最新图片组件将要显示的图片/视频与之前曾显示过的图片/视频是否为同一个。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    identifier?: string;
  }

  /**
   * 枚举，图片或者视频数据的来源类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  export enum PhotoSource {
    /**
     * 所有来源的图片、视频。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    ALL = 0,

    /**
     * 仅相机拍摄的图片、视频。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    CAMERA = 1,

    /**
     * 截屏图片或者录屏视频。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    SCREENSHOT = 2
  }

  /**
   * 枚举，表示缩略图（包括图片/视频）更新的状态。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum ThumbnailChangeStatus {
    /**
     * 缩略图不存在。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL_NOT_EXISTS = 0,

    /**
     * 缩略图已重新创建。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL_ADD = 1,

    /**
     * 缩略图已更新。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL_UPDATE = 2,

    /**
     * 缩略图没有变化。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL_NOT_CHANGE = 3
  }

  /**
   * 枚举，表示图片的强关联类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum StrongAssociationType {
    /**
     * 普通图片类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NORMAL = 0,
    /**
     * 云增强图片类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    CLOUD_ENHANCEMENT = 1
  }
  /**
   * 资产的来源
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum AssetSourceType {
    /**
     * 来自媒体库自身的图片
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MEDIA = 0,
    /**
     * 来自文管公共目录的图片
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FILE_MANAGER = 1
  }

  /**
   * 媒体资产（图片/视频）的变更通知信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface PhotoAssetChangeInfos {
    /**
     * 媒体资产（图片/视频）变更的通知类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    type: NotifyChangeType;

    /**
     * 变更的媒体资产（图片/视频）数组。如果需要重新查询所有媒体资产，assetChangeDatas为null。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    assetChangeDatas: PhotoAssetChangeData[] | null;

    /**
     * 应用是否应该重新查询所有媒体资产（图片/视频）信息。true表示需要重新查询所有资产，false表示无需查询所有资产。
     * 
     * **注意：**
     * 
     * 在大量资产操作或者异常通知的场景下，应用收到的isForRecheck为true，表示重新查询所有资产信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isForRecheck: boolean;
  }

  /**
   * 媒体资产（图片/视频）的具体变更数据。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface PhotoAssetChangeData {
    /**
     * 变更前的媒体资产（图片/视频）数据。如果是新增资产，assetBeforeChange为null。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    assetBeforeChange: PhotoAssetChangeInfo | null;

    /**
     * 变更后的媒体资产（图片/视频）数据。如果是删除资产，assetAfterChange为null。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    assetAfterChange: PhotoAssetChangeInfo | null;

    /**
     * 媒体资产（图片/视频）内容是否变化。true表示文件内容发生变化，false表示文件内容未发生变化。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isContentChanged: boolean;

    /**
     * 媒体资产（图片/视频）是否被删除。true表示资产被彻底删除，false表示资产未被彻底删除。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isDeleted: boolean;

    /**
     * 缩略图（图片/视频）更新的状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    thumbnailChangeStatus: ThumbnailChangeStatus;

    /**
     * 媒体资产（图片/视频）信息通知的版本号，用于确定通知的顺序。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    version: long;
  }

  /**
   * 媒体资产（图片/视频）信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface PhotoAssetChangeInfo {
    /**
     * 媒体文件资源uri。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * 媒体资产的类型（图片/视频）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mediaType: PhotoType;

    /**
     * 媒体资产（图片/视频）所属相册的uri。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumUri: string;

    /**
     * 媒体资产（图片/视频）的id。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    fileId: int;

    /**
     * 创建媒体文件的日期。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dateDay: string;

    /**
     * 表示媒体资产（图片/视频）的收藏状态。true表示资产已收藏，false表示资产未收藏。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 20 - 24]
     * @publicapi [since 26.0.0]
     * @since 20 dynamic
     * @since 23 static
     */
    isFavorite: boolean;

    /**
     * 表示媒体资产（图片/视频）的隐藏状态。true表示资产已隐藏，false表示资产未隐藏。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isHidden: boolean;

    /**
     * 图片的强关联类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    strongAssociation: StrongAssociationType;

    /**
     * 缩略图的可访问性。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    thumbnailVisible: ThumbnailVisibility;

    /**
     * 文件删除时的Unix时间戳（单位：毫秒）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dateTrashedMs: long;

    /**
     * 文件创建时的Unix时间戳（单位：毫秒）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dateAddedMs: long;

    /**
     * 文件拍摄时的Unix时间戳（单位：毫秒）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dateTakenMs: long;

    /**
     * 媒体资产（图片/视频）的所在位置。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    position?: PositionType;

    /**
     * 媒体资产（图片/视频）的显示名称。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    displayName?: string;

    /**
     * 媒体资产（图片/视频）的文件大小（单位：字节）。动态照片的size包括图片和视频的总大小。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    size?: long;

    /**
     * 智慧相册的相册变更信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    albumChangeInfos?: AlbumChangeInfo[] | null;

    /**
     * 资产来源类型
     * 默认值： 0。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    assetSourceType?: AssetSourceType;

    /**
     * 媒体资产（图片/视频）的隐藏时间。

     * <br>
     * 单位为毫秒。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    hiddenTime?: long;

    /**
     * 文件修改时的Unix时间戳。

     * <br>
     * 单位为毫秒。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    dateModifiedMs?: long;
  }

  /**
   * 相册排序信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface AlbumOrder {
    /**
     * 相册ID。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    albumId: int;
    /**
     * 相册排序值。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    albumOrder: int;
    /**
     * 相册排序区域。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    orderSection: int;
    /**
     * 相册排序类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    orderType: int;
    /**
     * 相册排序状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    orderStatus: int;
  }

  /**
   * 相册的变更通知信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AlbumChangeInfos {
    /**
     * 相册变更的通知类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    type: NotifyChangeType;
    /**
     * 变更的相册数组。如果需要重新查询所有相册，albumChangeDatas为null。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumChangeDatas: AlbumChangeData[] | null;
    /**
     * 应用是否应该重新查询所有媒体资产（图片/视频）信息。true表示需要重新查询所有资产，false表示无需查询所有资产。
     * 
     * **注意：**
     * 
     * 在大量资产操作或者异常通知的场景下，应用收到的isForRecheck为true，表示重新查询所有资产信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isForRecheck: boolean;
  }

  /**
   * 相册的具体变更数据。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AlbumChangeData {
    /**
     * 变更前的相册数据。如果是新增相册，albumBeforeChange为null。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumBeforeChange: AlbumChangeInfo | null;
    /**
     * 变更后的相册数据。如果是删除相册，albumAfterChange为null。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumAfterChange: AlbumChangeInfo | null;
    /**
     * 相册信息通知的版本号，用于确定通知的顺序。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    version: long;
  }

  /**
   * 相册信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AlbumChangeInfo {
    /**
     * 相册类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumType: AlbumType;
    /**
     * 相册子类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumSubtype: AlbumSubtype;
    /**
     * 相册名。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumName: string;
    /**
     * 相册uri。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumUri: string;
    /**
     * 相册中的图片数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    imageCount: int;
    /**
     * 相册中的视频数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    videoCount: int;
    /**
     * 相册中的资产总数，包括图片和视频。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    count: int;
    /**
     * 相册封面资产的uri。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    coverUri: string;
    /**
     * 相册中的隐藏资产数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hiddenCount: int;
    /**
     * 相册中隐藏封面资产的uri。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hiddenCoverUri: string;
    /**
     * 相册封面文件内容是否变化。true表示封面文件内容发生变化，false表示封面文件内容未发生变化。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isCoverChanged: boolean;
    /**
     * 相册隐藏封面文件内容是否变化。true表示隐藏封面文件内容发生变化，false表示隐藏封面文件内容未发生变化。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isHiddenCoverChanged: boolean;
    /**
     * 相册封面资产的信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    coverInfo?: PhotoAssetChangeInfo;
    /**
     * 相册隐藏封面资产的信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hiddenCoverInfo?: PhotoAssetChangeInfo;
    /**
     * 相册的排序区域，用于确认相册在图库中的展示区域。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    orderSection?: int;
    /**
     * 相册的排序值。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    albumOrder?: int;
    /**
     * 相册是否为隐藏状态。true表示相册为隐藏状态，false表示相册不为隐藏状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    hidden?: boolean;
    /**
     * 相册虚拟路径。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    lpath?: string;
  }

  /**
   * 图库卡片相关信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface GalleryFormInfo {
    /**
     * 卡片的ID，由图库创建卡片时提供。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    formId: string;
    /**
     * 卡片绑定的图片或相册的uri集合。
     * 
     * 创建和更新卡片时，assetUris不可为空。
     * 
     * 单次创建或更新卡片时，assetUris中的uri个数如果超出500个，则只创建或更新500个uri的监听，超出500个后的uri不会被注册。
     * 
     * 移除卡片时，assetUris可省略。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    assetUris?: Array<string>;
  }

  /**
   * 图库卡片相关信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface FormInfo {
    /**
     * 卡片的ID，由图库创建卡片时提供。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    formId: string;
    /**
     * 卡片绑定的图片的uri。创建卡片时uri可为空或图片的uri，移除卡片时uri不做校验，传空即可。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;
  }

  /**
   * 枚举，通知事件的类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10 dynamic
   * @since 23 static
   */
  enum NotifyType {
    /**
     * 添加文件集或相册的通知类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_ADD = 0,
    /**
     * 文件集或相册的更新通知类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_UPDATE = 1,
    /**
     * 删除文件集或相册的通知类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_REMOVE = 2,
    /**
     * 在相册中添加的文件集的通知类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_ALBUM_ADD_ASSET = 3,
    /**
     * 在相册中删除的文件集的通知类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_ALBUM_REMOVE_ASSET = 4
  }

  /**
   * 枚举，DefaultChangeUri子类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10 dynamic
   * @since 23 static
   */
  enum DefaultChangeUri {
    /**
     * 默认PhotoAsset的uri，与forSubUri{true}一起使用，将接收所有PhotoAsset的更改通知。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    DEFAULT_PHOTO_URI = 'file://media/Photo',
    /**
     * 默认相册的uri，与forSubUri{true}一起使用，将接收所有相册的更改通知。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    DEFAULT_ALBUM_URI = 'file://media/PhotoAlbum',
    /**
     * 隐藏相册-相册视图中相册的Uri，即系统中包含隐藏文件的相册（不包含系统预置隐藏相册和回收站相册）的Uri，
   	 * 仅用于隐藏相册-相册视图场景的通知。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DEFAULT_HIDDEN_ALBUM_URI = 'file://media/HiddenAlbum'
  }

  /**
   * 监听器回调函数的返回值。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10 dynamic
   * @since 23 static
   */
  interface ChangeData {
    /**
     * ChangeData的通知类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    type: NotifyType;
    /**
     * 相同[NotifyType]{@link photoAccessHelper.NotifyType}的所有uri，可以是PhotoAsset或Album。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    uris: Array<string>;
    /**
     * 相册中变动文件的uri数组。可能为undefined，使用前需要检查是否为undefined。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    extraUris: Array<string>;
    /**
     * sharedPhotoAssets of the same type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    sharedPhotoAssets: Array<SharedPhotoAsset>;
    /**
     * sharedAlbumAssets of the same type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    sharedAlbumAssets: Array<SharedAlbumAsset>;
    /**
     * sharedExtraPhotoAssets of the same type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    sharedExtraPhotoAssets: Array<SharedPhotoAsset>;
  }

  /**
   * 枚举，可选择的媒体文件类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 26.0.0 static
   */
  export enum PhotoViewMIMETypes {

    /**
     * 图片类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    IMAGE_TYPE = 'image/*',

    /**
     * 视频类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    VIDEO_TYPE = 'video/*',

    /**
     * 图片和视频类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    IMAGE_VIDEO_TYPE = '*/*',

    /**
     * 动态照片类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    MOVING_PHOTO_IMAGE_TYPE = 'image/movingPhoto'
  }

  /**
   * 枚举，支持进行过滤的操作符。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 26.0.0 static
   */
  export enum FilterOperator {
    /**
     * 等于。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    EQUAL_TO = 0,
    /**
     * 不等于。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    NOT_EQUAL_TO = 1,
    /**
     * 大于。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    MORE_THAN = 2,
    /**
     * 小于。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    LESS_THAN = 3,
    /**
     * 大于等于。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    MORE_THAN_OR_EQUAL_TO = 4,
    /**
     * 小于等于。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    LESS_THAN_OR_EQUAL_TO = 5,
    /**
     * 在指定范围内。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    BETWEEN = 6
  }

  /**
   * 枚举，单选模式类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 18 dynamic
   * @since 26.0.0 static
   */
  export enum SingleSelectionMode {
    /**
     * 大图预览模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 26.0.0 static
     */
    BROWSER_MODE = 0,
    /**
     * 直接选中模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 26.0.0 static
     */
    SELECT_MODE = 1,
    /**
     * 兼容模式，点击右下角区域为直接选中模式，点击其他区域进入大图预览模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 26.0.0 static
     */
    BROWSER_AND_SELECT_MODE = 2
  }

  /**
   * 图库选择选项基类。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 26.0.0 static
   */
  export class BaseSelectOptions {
    /**
     * 可选择的媒体文件类型，若无此参数，则默认为图片和视频类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    MIMEType?: PhotoViewMIMETypes;

    /**
     * 选择媒体文件数量的最大值（最大可设置的值为500，若不设置则默认为50）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    maxSelectNumber?: int;

    /**
     * 是否支持搜索，true表示支持，false表示不支持，默认为true。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    isSearchSupported?: boolean;

    /**
     * 是否支持拍照，true表示支持，false表示不支持，默认为true。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    isPhotoTakingSupported?: boolean;

    /**
     * 图片推荐相关配置参数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    recommendationOptions?: RecommendationOptions;

    /**
     * 预选择图片的uri数据。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    preselectedUris?: Array<string>;

    /**
     * 单选模式下是否需要进大图预览，true表示需要，false表示不需要，默认为true。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    isPreviewForSingleSelectionSupported?: boolean;

    /**
     * 单选模式类型。默认为大图预览模式（SingleSelectionMode.BROWSER_MODE）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 26.0.0 static
     */
    singleSelectionMode?: SingleSelectionMode;

    /**
     * 文件类型的过滤配置，支持指定多个类型过滤。
     * 
     * 当配置mimeTypeFilter参数时，MIMEType的配置自动失效。
     * 
     * 配置该参数时，仅显示配置过滤类型对应的媒体文件，建议提示用户仅支持选择指定类型的图片/视频。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    mimeTypeFilter?: MimeTypeFilter;

    /**
     * 可选择媒体文件大小的过滤配置。
     * 
     * 配置该参数时，仅显示配置文件大小范围的媒体文件，建议提示用户仅支持选择指定大小的图片/视频。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    fileSizeFilter?: FileSizeFilter;

    /**
     * 可选择媒体文件视频时长的过滤配置。
     * 
     * 配置该参数时，仅显示配置视频时长范围的媒体文件，建议提示用户仅支持选择指定时长视频。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    videoDurationFilter?: VideoDurationFilter;

    /**
     * 将过滤条件配置为字符串数组，支持多种类型组合。
     * 
     * 字符串格式如下：`photoType | photoSubType1,photoSubType2, … | mimeType1,mimeType2, …`。
     * 
     * - 第1段指定1个photoType，固定为image（图片）或video（视频）。
     * - 第2段指定1~N个photoSubType，多个photoSubType之间使用逗号隔开，之间为“或（OR）”的逻辑取并集；N目前支持最大为1；可选的PhotoSubType包括movingPhoto或“*”（忽略）。
     * - 第3段指定1~N个mimeType，多个mimeType之间使用逗号隔开，之间为“或（OR）”的逻辑取并集；N最大为10，格式类似于
     * [MimeTypeFilter]{@link photoAccessHelper.MimeTypeFilter}。
     * 
     * 三段过滤的组合取交集处理。
     * 
     * 支持“非”的逻辑。对于需要排除的类型，进行加括号的方式进行标识；一个string最多可使用1个括号。
     * 
     * 当应用配置的过滤条件string不满足上述规格时，过滤结果为空。
     * 
     * 配置该参数时，仅取数组前三个参数进行处理，MIMEType、mimeTypeFilter参数自动失效。
     * 
     * **原子化服务API：** 从API version 20开始支持在原子化服务中使用。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    combinedMediaTypeFilter?: Array<string>;

    /**
     * 指定媒体文件类型和文件大小进行过滤。
     * 
     * 配置该参数时，仅取数组前三个参数进行处理，MIMETypes和fileSizeFilter自动失效。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    photoViewMimeTypeFileSizeFilters?: Array<PhotoViewMimeTypeFileSizeFilter>;

    /**
     * 是否在大图浏览模式下展示动态照片图标，true表示展示，false表示不展示，默认为false。
     * 
     * 若设置为true，[Photoselectresult]{@link photoAccessHelper.PhotoSelectResult}返回movingPhotoBadgeStates数组，动态照片默认返回状态为
     * [MOVING_PHOTO_ENABLED]{@link photoAccessHelper.MovingPhotoBadgeStateType}。
     * 
     * **注意：** 必须同时使用isMovingPhotoBadgeShown和MovingPhotoBadgeStateType判断照片是否是动态照片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    isMovingPhotoBadgeShown?: boolean;

    /**
     * 媒体资产过滤器，长度限制为50个，超出取前50个。
     * 
     * **注意：**
     * 
     * 1. 当使用该过滤器时，其他过滤器会失效。
     * 2. 当配置多个条件时，过滤条件前后需要配置英文括号，否则可能和内部过滤项冲突。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    assetFilter?: Array<OperationItem>;

    /**
     * 设置动态照片播放模式。长度限制为2个，超出取前2个，多余的会自动忽略。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    autoPlayScenes?: Array<AutoPlayScene>;

    /**
     * picker内宫格捏合模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    gridPinchMode?: GridPinchMode;

    /**
     * 设置全局动态照片的效果，当前仅支持MOVING_PHOTO_ENABLED和MOVING_PHOTO_DISABLED。默认为MOVING_PHOTO_ENABLED。 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    globalMovingPhotoState?: MovingPhotoBadgeStateType;

    /**
     * 是否在拖动滚动条时展示日期分组信息，true表示展示，false表示不展示，默认为false。 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    showDateOnScrollbar?: boolean;

    /**
     * 资产兼容性能力配置。 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    assetCompatibleCapability?: AssetCompatibleCapability;

    /**
     * 资产兼容性模式配置。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    preferredCompatibleMode?: PreferredCompatibleMode;
  }

  /**
   * 文件类型的过滤配置。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 26.0.0 static
   */
  class MimeTypeFilter {
    /**
     * PhotoPicker可供用户选择媒体文件的过滤类型。数组长度最大为10，因此支持最多十种指定类型。
     * 
     * 过滤类型参考MIME类型定义，例如：“image/jpeg”、“video/mp4”等。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    mimeTypeArray: Array<string>;
  }

  /**
   * 可选择媒体文件大小的过滤配置。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 26.0.0 static
   */
  class FileSizeFilter {
    /**
     * 过滤操作符。
     * 
     * 例如：按照大于/小于某个fileSize的方式过滤文件。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    filterOperator: FilterOperator;

    /**
     * 指定进行过滤的文件大小。
     * 
     * 单位为字节（Byte）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    fileSize: long;

    /**
     * 针对FilterOperator.BETWEEN情况下，配置文件大小的上限值。默认值为-1。
     * 
     * 单位为字节（Byte）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    extraFileSize?: long;
  }

  /**
   * 可选择媒体文件视频时长的过滤配置。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 26.0.0 static
   */
  class VideoDurationFilter {
    /**
     * 过滤操作符。
     * 
     * 例如：按照大于/小于某个fileSize的方式过滤文件。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    filterOperator: FilterOperator;

    /**
     * 指定过滤视频的时长。
     * 
     * 单位为毫秒（ms）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    videoDuration: int;

    /**
     * 针对FilterOperator.BETWEEN情况下，配置视频时长的上限值。默认值为-1。
     * 
     * 单位为毫秒（ms）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    extraVideoDuration?: int;
  }

  /**
   * 指定媒体文件类型和文件大小进行过滤。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  class PhotoViewMimeTypeFileSizeFilter {
    /**
     * 指定媒体文件类型，用于文件大小过滤。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    photoViewMimeType: PhotoViewMIMETypes;

    /**
     * 指定文件大小过滤规则。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    sizeFilter: FileSizeFilter;
  }

  /**
   * 表示不同谓词所需要匹配的值。
   *
   * @unionmember { long } 表示字段类型为数字，可取长整型。
   * @unionmember { double } 表示字段类型为数字，可取小数。
   * @unionmember { string } 表示字段类型为字符串，可取任意值。
   * @unionmember { boolean } 表示字段类型为布尔值。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  export type OperationValueType = long | double | string | boolean;

  /**
   * 选择媒体文件的过滤配置。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  export class OperationItem {
    /**
     * 各类谓词的枚举。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    operationType: OperationType;

    /**
     * 数据表中的列名。
     * 
     * 当前仅支持如下关键字段：URI、PHOTO_TYPE、DISPLAY_NAME、SIZE、DURATION、WIDTH、HEIGHT、ORIENTATION、FAVORITE、TITLE、POSITION、
     * PHOTO_SUBTYPE、DYNAMIC_RANGE_TYPE、COVER_POSITION、BURST_KEY、LCD_SIZE、THM_SIZE、DETAIL_TIME、MEDIA_SUFFIX、
     * OWNER_ALBUM_ID、ASPECT_RATIO、DATE_TAKEN_MS<sup>24+</sup>
     * 
     * 通过[select]{@link photoAccessHelper.PhotoViewPicker#select(option?: PhotoSelectOptions)}接口配置此参数时，输入非法字段会抛出错误码401；通
     * 过[PhotoPickerComponent (PhotoPicker组件)]{@link @ohos.file.PhotoPickerComponent}配置此参数时，输入非法字段无
     * onPickerControllerReady回调。
     * 
     * 非条件谓词如and、or、beginWrap、endWrap等不涉及该字段。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    field?: PhotoKeys;

    /**
     * 不同谓词所需匹配的值。
     * 
     * 非条件谓词如and、or、beginWrap、endWrap等不涉及该字段。
     * 
     * 限制最大长度为10，超出则取前10个值。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    value?: Array<OperationValueType>;
  }

  /**
   * 包含已授权的uri列表和无效的uri列表。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export class RequestReadPermissionResult {
    /**
     * 返回已创建并授予保存权限的uri列表。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    authorizedUris?: Array<string>;

    /**
     * 返回可能被删除、隐藏或重命名的无效uri列表。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    invalidUris?: Array<string>;
  }

  /**
   * picker内宫格的捏合模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export class GridPinchMode {
    /**
     * 宫格捏合模式类型，配置即支持捏合功能，反之不支持捏合功能。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    gridPinchModeType?: GridPinchModeType;

    /**
     * 拉起picker后宫格档位，默认为STANDARD。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    defaultGridLevel?: GridLevel;
  }

  /**
   * 图库选择选项子类，继承于BaseSelectOptions。用于拉起对应userId空间的picker。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 26.0.0 static
   */
  class PhotoSelectOptions extends BaseSelectOptions {
    /**
     * 是否支持编辑照片，true表示支持，false表示不支持，默认为true。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    isEditSupported?: boolean;

    /**
     * 是否显示选择原图按钮，true表示显示，false表示不显示，默认为false。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    isOriginalSupported?: boolean;

    /**
     * 子窗口名称。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    subWindowName?: string;

    /**
     * Theme color
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    themeColor?: CustomColors;

    /**
     * 完成按钮显示的内容。
     * 
     * 完成按钮指在界面右下方，用户点击表示图片选择已完成的按钮。 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 26.0.0 static
     */
    completeButtonText?: CompleteButtonText;

    /**
     * 指定访问空间的Id。默认值为-1。
     * 
     * 当需要作为
     * [PhotoViewPicker.select]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker#select(option?: PhotoSelectOptions)}
     * 的选择参数时，请申请ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 26.0.0 static
     */
    userId?: int;

    /**
     * 用于恢复上次退出时PhotoPicker现场的信息。
     * 
     * 上次完成选择时photoPicker将返回contextRecoveryInfo给应用，应用可使用返回的contextRecoveryInfo，在下次启动时恢复上次使用picker，最后浏览的宫格界面。 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    contextRecoveryInfo?: ContextRecoveryInfo;

    /**
     * 是否支持跟随[Navigation](docroot://reference/apis-arkui/arkui-ts/ts-basic-components-navigation.md#navigation-1)销毁，true
     * 表示支持，false表示不支持，默认为false。
     * 
     * **模型约束**： 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    isDestroyedWithNavigation?: boolean;

    /**
     * 支持设置的图片最大的选择数量。单位：个。
     * 
     * 受到最大选择总数的限制，最大值为500。默认为500。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    maxPhotoSelectNumber?: int;

    /**
     * 支持设置的视频最大的选择数量。单位：个。
     * 
     * 受到系统中所有媒体文件最大选择总数的限制，最大值为500。默认为500。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    maxVideoSelectNumber?: int;

    /**
     * 是否支持选择序号。true表示支持，false表示不支持，默认值为false。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isSelectionNumberVisible?: boolean;

    /**
     * 是否支持调整选择顺序。true表示支持，false表示不支持，默认值为false。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isSelectionOrderAdjustable?: boolean;

    /**
     * 在单选模式下，拍完照是否能自动跳转到大图预览模式，true表示支持，false表示不支持，默认为false。
     * 
     * **注意：** 该参数配置为true时仅在[SingleSelectionMode]{@link photoAccessHelper.SingleSelectionMode}为BROWSER_MODE（大图预览模式）或者
     * BROWSER_AND_SELECT_MODE（兼容模式）并且
     * [BaseSelectOptions.isPreviewForSingleSelectionSupported]{@link photoAccessHelper.BaseSelectOptions}参数为true时生效。
     * 
     * **模型约束**： 此接口仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    isReturnToPhotoBrowserEnabled?: boolean;

    /**
     * 选择器颜色模式。Picker上其他组件的深色/浅色模式（不包括背景色）。
     * 包括搜索框、摄像头入口、使用图库的安全提示、推荐气泡等。
     * 属性通常与**backgroundColor**配合使用。默认值为**PickerColorMode.AUTO**。
     * 遵循系统的深色/浅色模式。
     * 设置此属性时，请避免使用**PickerColorMode.LIGHT**与深色背景颜色搭配使用，因为这样可能会使
     * 组件或难以看到的文本。避免使用**PickerColorMode.DARK**与浅色背景颜色相同
     * 理由。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    pickerColorMode?: PickerColorMode;
  }

  /**
   * 图片推荐选项(基于图片数据分析结果，依赖设备适配)。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 26.0.0 static
   */
  class RecommendationOptions {
    /**
     * 如果需要根据枚举值推荐相应的图片，则配置此参数。 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    recommendationType?: RecommendationType;

    /**
     * 如果需要根据文本信息推荐相应的图片，则配置此参数（如果同时配置了recommendationType，则仅textContextInfo生效）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    textContextInfo?: TextContextInfo;

    /**
     * 如果需要根据枚举值同时推荐多个分类的图片，则配置此参数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    recommendationTypeList?: Array<RecommendationType>;

    /**
     * 表示打开Picker直接显示的推荐标签。需要配置recommendationTypeList后，该配置才生效。
     * 
     * 如果该标签存在，则默认显示该标签页。
     * 
     * 如果该标签不存在，则默认显示“全部”标签页。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    defaultRecommendationType?: RecommendationType;
  }

  /**
   * 文本信息，用于推荐图片的文本信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 26.0.0 static
   */
  interface TextContextInfo {
    /**
     * 如果需要根据文本（支持250字以内的简体中文）推荐相应的图片，则配置此参数。text默认是空字符串。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    text?: string;
  }

  /**
   * 返回图库选择后的结果集。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 26.0.0 static
   */
  class PhotoSelectResult {
    /**
     * 返回图库选择后的媒体文件的URI数组。
     * 
     * 此URI数组只能通过临时授权的方式调用
     * [photoAccessHelper.getAssets]{@link photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>)}
     * 接口去使用，具体使用方式请参考[媒体文件URI的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri的使用方式)。
     * 
     * **注意：**
     * 
     * 当资源为连拍照片类型时，则返回该连拍组的所有资源，判断是否为连拍图的方式请参考
     * [通过URI判断连拍图资源](docroot://media/medialibrary/medialibrary-faqs/medialibrary-asset-judgment-faq.md#通过uri判断连拍图资源)。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    photoUris: Array<string>;

    /**
     * 返回图库选择后的媒体文件是否为原图。true表示是原图，false表示不是原图，默认值是false。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    isOriginalPhoto: boolean;

    /**
     * 当用户完成选择时返回的photoSelectResult将包含退出picker的上下文信息contextRecoveryInfo，支持应用下次启动PhotoPicker时设置给PhotoSelectOptions用于上次退出时
     * 现场的恢复。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    contextRecoveryInfo: ContextRecoveryInfo;

    /**
     * 返回图库选择的媒体文件动态照片状态数组。
     * 
     * 当isMovingPhotoBadgeShown为true时，movingPhotoBadgeStates携带动态照片状态，反之为空。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    movingPhotoBadgeStates: Array<MovingPhotoBadgeStateType>;
  }

  /**
   * 图库选择器对象用于支持选择图片、视频等用户场景。使用前，需先创建PhotoViewPicker实例。
   * 
   * > **说明：**
   * >
   * > - 如果需要重复拉起PhotoViewPicker，需要先通过NavDestination或跟随进程销毁前一个photoViewPicker。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 26.0.0 static
   */
  class PhotoViewPicker {
    /**
     * 通过选择模式拉起photoPicker界面，用户可以选择一个或多个图片/视频。使用Promise异步回调。传入可选参数PhotoSelectOptions对象，返回PhotoSelectResult对象。
     * 
     * > **注意：**
     * >
     * > 此接口返回的PhotoSelectResult对象中的photoUris具有永久授权，可通过调用接口
     * > [photoAccessHelper.getAssets]{@link photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>)}
     * > 去使用。具体操作请参考[媒体文件URI的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri的使用方式)。
     *
     * @param { PhotoSelectOptions } [option] - photoPicker选择选项，若无此参数，则默认选择媒体文件类型为图片和视频类型，默认选择媒体文件数量的最大值为50。
     * @returns { Promise<PhotoSelectResult> } Promise对象。返回photoPicker选择后的结果集
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     *     <br>1. An illegal enumeration value was passed to PhotoSelectOptions.globalMovingPhotoState.
     *     Only MOVING_PHOTO_ENABLED and MOVING_PHOTO_DISABLED are supported for configuration;
     *     <br>2. An illegal enumeration value was passed to PhotoSelectOptions.assetCompatibleAbility. [since 12]
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    select(option?: PhotoSelectOptions): Promise<PhotoSelectResult>;

    /**
     * 通过选择模式拉起photoPicker界面，用户可以选择一个或多个图片/视频。接口采用callback异步返回形式，传入参数PhotoSelectOptions对象，返回PhotoSelectResult对象。
     * 
     * > **注意：**
     * >
     * > 此接口返回的PhotoSelectResult对象中的photoUris具有永久授权，可通过调用接口
     * > [photoAccessHelper.getAssets]{@link photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>)}
     * > 去使用。具体操作请参考[媒体文件URI的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri的使用方式)。
     *
     * @param { PhotoSelectOptions } option - photoPicker选择选项。
     * @param { AsyncCallback<PhotoSelectResult> } callback - callback 返回photoPicker选择后的结果集。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     *     <br>1. An illegal enumeration value was passed to PhotoSelectOptions.globalMovingPhotoState.
     *     Only MOVING_PHOTO_ENABLED and MOVING_PHOTO_DISABLED are supported for configuration; [since 12]
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>): void;

    /**
     * 通过选择模式拉起photoPicker界面，用户可以选择一个或多个图片/视频。接口采用callback异步返回形式，返回PhotoSelectResult对象。
     * 
     * > **注意：**
     * >
     * > 此接口返回的PhotoSelectResult对象中的photoUris具有永久授权，可通过调用接口
     * > [photoAccessHelper.getAssets]{@link photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>)}
     * > 去使用。具体操作请参考[媒体文件URI的使用方式](docroot://file-management/user-file-uri-intro.md#媒体文件uri的使用方式)。
     *
     * @param { AsyncCallback<PhotoSelectResult> } callback - callback 返回photoPicker选择后的结果集。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 13900042 - Unknown error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    select(callback: AsyncCallback<PhotoSelectResult>): void;
  }

  /**
   * 动态照片在不同场景中的播放模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export class AutoPlayScene {
    /**
     * 动态照片播放的场景。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    sceneType: SceneType;

    /**
     * 是否支持动态照片自动播放。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    playMode: PlayMode;
  }

  /**
   * 资产编辑数据。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAssetEditData {
    /**
     * 构造函数。
     *
     * @param { string } compatibleFormat - 编辑数据的格式。
     * @param { string } formatVersion - 编辑数据格式的版本。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(compatibleFormat: string, formatVersion: string);

    /**
     * 编辑数据的格式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    compatibleFormat: string;

    /**
     * 编辑数据格式的版本。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    formatVersion: string;

    /**
     * 编辑数据的内容。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    data: string;
  }

  /**
   * 枚举，写入资源的类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum ResourceType {
    /**
     * 表示图片资源。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE_RESOURCE = 1,

    /**
     * 表示视频资源。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_RESOURCE = 2,

    /**
     * 表示照片代理资源。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    PHOTO_PROXY = 3,

    /**
     * 表示私有动态照片资源。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    PRIVATE_MOVING_PHOTO_RESOURCE = 4,

    /**
     * 表示私有动态照片元数据资源。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    PRIVATE_MOVING_PHOTO_METADATA = 5
  }

  /**
   * 枚举，图片保存类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 13 dynamic
   * @since 23 static
   */
  enum ImageFileType {
    /**
     * 表示jpeg图片类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     * @since 23 static
     */
    JPEG = 1,

    /**
     * 表示heif图片类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     * @since 23 static
     */
    HEIF = 2
  }

  /**
   * 枚举，动态照片效果模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum MovingPhotoEffectMode {
    /**
     * 默认模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * 来回播放。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BOUNCE_PLAY = 1,

    /**
     * 循环播放。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LOOP_PLAY = 2,

    /**
     * 长曝光。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LONG_EXPOSURE = 3,

    /**
     * 多曝光。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MULTI_EXPOSURE = 4,

    /**
     * 微动瞬间。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CINEMA_GRAPH = 5,

    /**
     * 关闭模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    IMAGE_ONLY = 10
  }

  /**
   * 枚举，分段式视频的二段式触发类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum VideoEnhancementType {
    /**
     * 在端侧增强处理。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    QUALITY_ENHANCEMENT_LOCAL = 0,

    /**
     * 在云侧增强处理。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    QUALITY_ENHANCEMENT_CLOUD = 1,

    /**
     * 在端侧和云侧同时增强处理。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    QUALITY_ENHANCEMENT_LOCAL_AND_CLOUD = 2
  }

  /**
   * 枚举，动态照片状态。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  export enum MovingPhotoBadgeStateType {
    /**
     * 非动态照片。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    NOT_MOVING_PHOTO = 0,

    /**
     * 打开动态照片效果。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    MOVING_PHOTO_ENABLED = 1,

    /**
     * 关闭动态照片效果。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    MOVING_PHOTO_DISABLED = 2
  }

  /**
   * 枚举，动态照片播放的场景。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export enum SceneType {
    /**
     * 从宫格点击进入大图。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    GRID_TO_PHOTO_BROWSER = 0,

    /**
     * 在大图场景左右滑动。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    PHOTO_BROWSER_SWIPE = 1
  }

  /**
   * 枚举，是否支持动态照片自动播放。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export enum PlayMode {
    /**
     * 不支持动态照片自动播放。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    DEFAULT = 0,

    /**
     * 支持动态照片自动播放。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    AUTO_PLAY = 1
  }

  /**
   * 枚举，宫格捏合模式类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export enum GridPinchModeType {
    /**
     * 宫格支持捏合，捏合后支持选中、点击进大图操纵。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    FULL_FUNCTION_GRID = 0
  }

  /**
   * 枚举类型，用于设置拉起picker后的宫格列数档位。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export enum GridLevel {
    /**
     * 宽松宫格档位。该挡位为标准宫格的列数减1。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SPACIOUS = 0,

    /**
     * 标准宫格档位。不同设备尺寸对应的标准宫格列数各不相同，当未配置标准宫格列数时，系统将使用默认列数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    STANDARD = 1,

    /**
     * 紧密宫格档位。该挡位为标准宫格的列数加1。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    COMPACT = 2
  }

  /**
   * 表示各类谓词的枚举。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  export enum OperationType {
    /**
     * 等于，取value数组的第一个元素与谓词匹配。超出长度取第1个。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    EQUAL_TO = 1,

    /**
     * 不等于，取value数组的第一个元素与谓词匹配。超出长度取第1个。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    NOT_EQUAL_TO = 2,

    /**
     * 大于，取value数组的第一个元素与谓词匹配。 超出长度取第1个。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    GREATER_THAN = 3,

    /**
     * 小于，取value数组的第一个元素与谓词匹配。超出长度取第1个。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    LESS_THAN = 4,

    /**
     * 大于等于，取value数组的第一个元素与谓词匹配。超出长度取第1个。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    GREATER_THAN_OR_EQUAL_TO = 5,

    /**
     * 小于等于，取value数组的第一个元素与谓词匹配。超出长度取第1个。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    LESS_THAN_OR_EQUAL_TO = 6,

    /**
     * 逻辑'与'，相当于数据库查询语句的'and'。无需传入field和value。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    AND = 7,

    /**
     * 逻辑'或'，相当于数据库查询语句的'or'。无需传入field和value。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    OR = 8,

    /**
     * 匹配在指定范围内的字段，value长度限制10个。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    IN = 9,

    /**
     * 匹配不在指定范围内的字段，value长度限制10个。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    NOT_IN = 10,

    /**
     * 用于向谓词添加英文左括号，相当于数据库查询语句的"("，必须和英文右括号一起使用。无需传入field和value。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    BEGIN_WRAP = 11,

    /**
     * 用于向谓词添加英文右括号，相当于数据库查询语句的")"，必须和英文左括号一起使用。无需传入field和value。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    END_WRAP = 12,

    /**
     * 匹配指定范围内的字段。
     * 
     * 包含两端边界值，为左闭右闭区间。取value数组的前两个元素与谓词匹配，超出长度取前2个，分别表示左右边界。例如：[1, 2, 3, 4]中取前两个，1表示左边界，2表示右边界。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    BETWEEN = 13,

    /**
     * 匹配超出指定范围内的字段。
     * 
     * 不包含两端边界值，为左开右开区间。取value数组的前两个元素与谓词匹配，超出长度取前2个，分别表示左右边界。例如：[1, 2, 3, 4]中取前两个，1表示左边界，2表示右边界。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    NOT_BETWEEN = 14
  }

  /**
   * 媒体变更请求，资产变更请求和相册变更请求的父类型。
   * 
   * > **注意**：
   * >
   * > 媒体变更请求需要在调用[applyChanges]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.applyChanges}后才会
   * > 提交生效。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface MediaChangeRequest {
    /**
     * 用于MediaChangeRequest类型校验。
     * 
     * 如果类（如[MediaAssetChangeRequest]{@link photoAccessHelper.MediaAssetChangeRequest}或
     * [MediaAlbumChangeRequest]{@link photoAccessHelper.MediaAlbumChangeRequest}）对象可以访问，就说明该类是MediaChangeRequest的实现类。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly comment: string;
  }

  /**
   * MediaAssetChangeRequest implements [MediaChangeRequest]{@link photoAccessHelper.MediaChangeRequest}.
   * 
   * 资产变更请求。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 11开始支持。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAssetChangeRequest implements MediaChangeRequest {
    /**
     * 用于MediaChangeRequest类型校验。
     * 
     * 如果类（如[MediaAssetChangeRequest]{@link photoAccessHelper.MediaAssetChangeRequest}或
     * [MediaAlbumChangeRequest]{@link photoAccessHelper.MediaAlbumChangeRequest}）对象可以访问，就说明该类是MediaChangeRequest的实现类。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly comment: string;

    /**
     * 构造函数，用于初始化资产变更请求。
     *
     * @param { PhotoAsset } asset - 需要变更的资产。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(asset: PhotoAsset);

    /**
     * 创建图片资产变更请求。
     * 
     * 指定待创建资产的数据来源，可参考
     * [@ohos.file.fileuri (File URI)]{@link @ohos.file.fileuri:fileUri}.
     *
     * @param { Context } context - 传入Ability实例的上下文。
     * @param { string } fileUri - fileUri - 图片资产的数据来源，在应用沙箱下的uri。示例fileUri：'file://com.example.temptest/data/storage/
     *     el2/base/haps/entry/files/test.jpg'。
     * @returns { MediaAssetChangeRequest } 返回创建资产的变更请求。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    static createImageAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest;

    /**
     * 创建图片资产变更请求。
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } fileUri - Data source of the image asset,
     *     which is specified by a URI in the application sandbox directory.
     * @returns { MediaAssetChangeRequest | null } - Returns a MediaAssetChangeRequest instance,
     *     if the operation fails, returns null
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 23800101 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 23 static
     */
    static createImageAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest | null;

    /**
     * 创建视频资产变更请求。
     * 
     * 指定待创建资产的数据来源，可参考
     * [@ohos.file.fileuri (File URI)]{@link @ohos.file.fileuri:fileUri}.
     *
     * @param { Context } context - 传入Ability实例的上下文。
     * @param { string } fileUri - 视频资产的数据来源，在应用沙箱下的uri。示例fileUri：'file://com.example.temptest/data/storage/
     *     el2/base/haps/entry/files/test.mp4'。
     * @returns { MediaAssetChangeRequest } 返回创建资产的变更请求。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     */
    static createVideoAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest;

    /**
     * 创建视频资产变更请求。
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } fileUri - Data source of the video asset,
     *     which is specified by a URI in the application sandbox directory.
     * @returns { MediaAssetChangeRequest | null } - Returns a MediaAssetChangeRequest instance.
     *     if the operation fails, returns null.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 23800101 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    static createVideoAssetRequest(context: Context, fileUri: string): MediaAssetChangeRequest | null;

    /**
     * 指定待创建的图片或者视频的文件名，创建资产变更请求。
     * 
     * 待创建的文件名参数规格为：
     * 
     * - 应包含有效文件主名和图片或视频扩展名。
     * - 文件名字符串长度为1~255。
     * - 文件主名中不允许出现的非法英文字符。
     * 
     * API18开始，非法字符包括： \ / : * ? " < > |
     * 
     * API10-17，非法字符包括：. .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @param { Context } context - 传入Ability实例的Context。
     * @param { string } displayName - 待创建的图片或者视频文件名。
     * @param { PhotoCreateOptions } [options] - 图片或视频的创建选项。
     * @returns { MediaAssetChangeRequest } 返回创建资产的变更请求。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000001 - Invalid display name
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     */
    static createAssetRequest(context: Context, displayName: string, options?: PhotoCreateOptions): MediaAssetChangeRequest;

    /**
     * 指定待创建的图片或者视频的文件名，创建资产变更请求。
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } [options] - Options for creating an image or video asset.
     * @returns { MediaAssetChangeRequest | null } - Returns a MediaAssetChangeRequest instance.
     *     if the operation fails, returns null
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 23800102 - The format or length of the display name does not meet the specifications.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    static createAssetRequest(context: Context, displayName: string, options?: PhotoCreateOptions): MediaAssetChangeRequest | null;

    /**
     * 指定文件类型和扩展名，创建资产变更请求。
     *
     * @param { Context } context - 传入Ability实例的上下文。
     * @param { PhotoType } photoType - 待创建的文件类型，IMAGE或者VIDEO类型。
     * @param { string } extension - 文件扩展名，例如：'jpg'。
     * @param { CreateOptions } [options] - 创建选项，例如：{title: 'testPhoto'}。
     *     <br>文件名中不允许出现非法英文字符，包括：. .. \ / : * ? " ' ` < > | { } [ ]
     * @returns { MediaAssetChangeRequest }      **MediaAssetChangeRequest** created.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     */
    static createAssetRequest(context: Context, photoType: PhotoType, extension: string, options?: CreateOptions): MediaAssetChangeRequest;

    /**
     * 指定文件类型和扩展名，创建资产变更请求。
     *
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoType } photoType - Type of the file to create, which can be IMAGE or VIDEO.
     * @param { string } extension - File name extension, for example, 'jpg'.
     * @param { CreateOptions } [options] - Options for creating the image or video asset,
     *     for example, {title: 'testPhoto'}.
     * @returns { MediaAssetChangeRequest | null } - Returns a MediaAssetChangeRequest instance,
     *     if the operation fails, returns null
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 23 static
     */
    static createAssetRequest(context: Context, photoType: PhotoType, extension: string, options?: CreateOptions): MediaAssetChangeRequest | null;

    /**
     * 通过PhotoAsset对象删除媒体文件（删除的文件会进入到回收站）。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的上下文。
     * @param { Array<PhotoAsset> } assets - 待删除的媒体文件数组，数组中元素个数不超过300
     *     个。<!--Del-->系统应用对此无限制。<!--DelEnd-->
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    static deleteAssets(context: Context, assets: Array<PhotoAsset>): Promise<void>;

    /**
     * 通过uri删除媒体文件（删除的文件会进入到回收站）。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的上下文。
     * @param { Array<string> } uriList - 待删除的媒体文件uri数组，数组中元素个数不超过300
     *     个。<!--Del-->系统应用对此无限制。<!--DelEnd-->
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000002 - The uri format is incorrect or does not exist.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     */
    static deleteAssets(context: Context, uriList: Array<string>): Promise<void>;

    /**
     * Deletes media assets. This API uses a promise to return the result. The deleted assets are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<string> } uriList - URIs of the media files to delete.
     * @returns { Promise<void> } - Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 -  The scenario parameter verification fails. Possible causes:
     *     <br>1. context is null or invalid;
     *     <br>2. The uri format is incorrect or does not exist.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    static deleteAssetsToTrashWithUris(context: Context, uriList: Array<string>): Promise<void>;

    /**
     * 获取当前资产变更请求中的资产。
     * 
     * > **注意：**
     * >
     * > 对于创建资产的变更请求，在调用接口
     * > > [applyChanges]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.applyChanges}
     * > > 的提交生效之前，该接口会返回null。
     *
     * @returns { PhotoAsset } 返回当前资产变更请求中的资产。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     */
    getAsset(): PhotoAsset;

    /**
     * 获取当前资产变更请求中的资产。
     *
     * @returns { PhotoAsset | null } - Returns the asset. if the operation fails, returns null.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 23 static
     */
    getAsset(): PhotoAsset | null;

    /**
     * 将文件设置为收藏文件。
     *
     * @param { boolean } favoriteState - 是否设置为收藏文件， true：设置为收藏文件；false：取消收藏。
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 11 - 24]
     * @publicapi [since 26.0.0]
     * @since 11 dynamic
     * @since 23 static
     */
    setFavorite(favoriteState: boolean): void;

    /**
     * 将文件设置为隐藏文件。
     *
     * @param { boolean } hiddenState - 是否设置为隐藏文件，true：将文件资产放入隐藏相册；false：从隐藏相册中恢复。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setHidden(hiddenState: boolean): void;

    /**
     * 修改媒体资产的备注信息。
     *
     * @param { string } userComment - 待修改的资产备注信息，备注信息最长为420字符。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setUserComment(userComment: string): void;

    /**
     * 设置文件的经纬度信息。
     *
     * @param { double } longitude - 经度。
     * @param { double } latitude - 纬度。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setLocation(longitude: double, latitude: double): void;

    /**
     * 修改媒体资产的标题。
     *
     * @param { string } title - 待修改的资产标题。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    setTitle(title: string): void;

    /**
     * 保存资产的编辑数据。
     *
     * @param { MediaAssetEditData } editData - 待保存的资产编辑数据。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setEditData(editData: MediaAssetEditData): void;

    /**
     * 保存资产的摄像机编辑数据。
     *
     * @param { MediaAssetEditData } editData - 要保存的编辑数据。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @FaAndStageModel
     * @since 26.1.0 dynamic&static
     */
    setCameraEditData(editData: MediaAssetEditData): void;


    /**
     * 保存动态照片的版本号。
     *
     * @param { int } version - 动图版本号
	        <br>取值范围为全体整数。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Parameter error, only supports 9.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    setMovingPhotoVersion(version: int): void;

    /**
     * 获取临时文件写句柄。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > 对于同一个资产变更请求，不支持在成功获取临时文件写句柄后，重复调用该接口。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<int> } Promise对象，返回临时文件写句柄。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    getWriteCacheHandler(): Promise<int>;

    /**
     * 通过文件URI从应用沙箱添加资源，待添加资源的数据来源可参考
     * [@ohos.file.fileuri (File URI)]{@link @ohos.file.fileuri:fileUri}.
     * 
     * > **注意：**
     * >
     * > 对于同一个资产变更请求，成功添加资源后不支持重复调用该接口。对于动态照片，可调用两次该接口分别添加图片和视频资源。
     *
     * @param { ResourceType } type - 待添加资源的类型。
     * @param { string } fileUri - 待添加资源的数据来源，在应用沙箱下的uri。示例fileUri：'file://com.example.temptest/data/storage/el2/base/
     *     haps/entry/files/test.jpg'。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900002 - The file corresponding to the URI is not in the app sandbox.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    addResource(type: ResourceType, fileUri: string): void;

    /**
     * 通过ArrayBuffer数据添加资源。
     * 
     * > **注意：**
     * >
     * > 对于同一个资产变更请求，成功添加资源后不支持重复调用该接口。对于动态照片，可调用两次该接口分别添加图片和视频资源。
     *
     * @param { ResourceType } type - 待添加资源的类型。
     * @param { ArrayBuffer } data - 待添加资源的数据。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    addResource(type: ResourceType, data: ArrayBuffer): void;

    /**
     * 通过PhotoProxy数据添加资源。
     * 
     * > **注意：**
     * >
     * > 对于同一个资产变更请求，不支持在成功添加资源后，重复调用该接口。
     *
     * @param { ResourceType } type - 待添加资源的类型。
     * @param { PhotoProxy } proxy - 待添加资源的PhotoProxy 数据。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    addResource(type: ResourceType, proxy: PhotoProxy): void;

    /**
     * 设置锁屏相机拍照或录像的标记字段。
     *
     * @param { string } cameraShotKey - 锁屏相机拍照或录像的标记字段（仅开放给系统相机，其key值由系统相机定义）。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setCameraShotKey(cameraShotKey: string): void;

    /**
     * 保存相机拍摄的照片。
     *
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    saveCameraPhoto(): void;

    /**
     * 保存相机拍摄的照片。需要指定保存的类型。
     *
     * @param { ImageFileType } imageFileType - 需要保存的类型。
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     * @since 23 static
     */
    saveCameraPhoto(imageFileType: ImageFileType): void;

    /**
     * 删除相机拍摄的照片。
     *
     * @throws { BusinessError } 14000011 - Internal system error
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    discardCameraPhoto(): void;

    /**
     * 设置动态照片的效果模式。
     *
     * @param { MovingPhotoEffectMode } mode - 动态照片效果模式。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setEffectMode(mode: MovingPhotoEffectMode): void;

    /**
     * 设置图片的显示旋转角度。本接口通过修改exif元数据实现对图片旋转角度的调整。
     *
     * @param { int } orientation - 待修改的图片旋转角度，且只能为0、90、180、270。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    setOrientation(orientation: int): void;

    /**
     * 设置文件记忆链接的状态信息。
     *
     * @param { int } hasAppLink - 设置文件记忆链接的状态信息。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * @throws { BusinessError } 23800151 -  The scenario parameter verification fails. Possible causes:
     *     The input parameter is not within the valid range.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    setHasAppLink(hasAppLink: int): void;

    /**
     * 设置文件记忆链接的状态信息。
     *
     * @param { AppLinkState } appLinkState - 设置文件记忆链接的状态信息。
     * @throws { BusinessError } 202 - Invoked by non-system applications
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     The input parameter is not within the valid range.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setAppLinkState(appLinkState: AppLinkState): void;

    /**
     * 设置文件记忆链接的信息。
     *
     * @param { string } appLink - 设置文件记忆链接的信息。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * @throws { BusinessError } 23800151 -  The scenario parameter verification fails. Possible causes:
     *     The input parameter's length is not within the valid range.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    setAppLinkInfo(appLink: string): void;

    /**
     * 设置视频的二阶段增强处理类型。
     *
     * @param { VideoEnhancementType } videoEnhancementType - The type of video enhancement
     * @param { string } photoId - The photo id of video
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    setVideoEnhancementAttr(videoEnhancementType: VideoEnhancementType, photoId: string): void;

    /**
     * 设置拍照照片支持的水印类型。
     *
     * @param { WatermarkType } watermarkType - 水印可编辑标识。
     *     <br>**注意：**
     *     <br>不支持传入WatermarkType.DEFAULT。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    setSupportedWatermarkType(watermarkType: WatermarkType): void;

    /**
     * 通过[fileUri](../apis-core-file-kit/js-apis-file-fileuri.md)从应用沙箱添加资源。
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { ResourceType } type - 待加载的图片或者视频类型
     * @param { string } fileUri - 待加载图片或者视频的路径
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The file corresponding to the URI is not in the app sandbox.
     *     <br>2. ResourceType must be image or video
     * @throws { BusinessError } 23800301 - Internal system error. You are advised to retry and check the logs.
     *     Possible causes:
     *     <br>1. The database is corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    addResourceForPicker(type: ResourceType, fileUri: string): void;

    /**
     * 批量彻底删除照片或者视频。使用Promise异步回调。
     * 
     * > **注意：**
     * >
     * > 此操作不可逆，执行此操作后文件资源将彻底删除，请谨慎操作。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的Context。
     * @param { Array<PhotoAsset> } assets - 待彻底删除的图片或者视频数组，数组中元素个数不超过500个。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    static deleteLocalAssetsPermanently(context: Context, assets: Array<PhotoAsset>): Promise<void>;

    /**
     * 通过资产Uri批量彻底删除照片或者视频。使用promise异步回调。
     * 
     * > **注意：**
     * >
     * > 此操作不可逆，执行此操作后文件资源将被彻底删除，请谨慎操作。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的Context。
     * @param { Array<string> } assetUris - 待彻底删除的图片或者视频Uri数组，数组中元素个数不超过500个。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    static deleteLocalAssetsPermanentlyWithUri(context: Context, assetUris: Array<string>): Promise<void>;

    /**
     * 批量删除本地状态的媒体资产（照片或视频）到回收站。使用promise异步回调。
     *
     * > **说明：**
     * >
     * > - 对仅存在于本端设备的资产，直接删除到回收站。
     * >
     * > - 对仅存在于云端的资产，不做任何处理。
     * >
     * > - 对存在于本端设备和云端的资产，删除后变化为云端资产，本地资产进入回收站。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的Context。
     * @param { string[] } assetUris - 待删除的图片或者视频Uri数组，数组中元素个数不超过500个。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The context is empty;
     *     <br>2. Asset uri array size is empty or bigger than 500 .
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1.Database corrupted;
     *     <br>2.The file system is abnormal;
     *     <br>3.The IPC request timed out;
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    static deleteLocalAssetsWithUri(context: Context, assetUris: string[]): Promise<void>;

    /**
     * 批量删除云端状态的媒体资产（照片或视频）到回收站。使用promise异步回调。
     *
     * > **说明：**
     * >
     * > - 对仅存在于本端设备的资产，不做任何处理。
     * >
     * > - 对仅存在于云端的资产，直接删除到回收站。
     * >
     * > - 对存在于本端设备和云端的资产，删除后变化为本地资产，云端资产进入回收站。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的Context。
     * @param { string[] } assetUris - 待删除的图片或者视频Uri数组，数组中元素个数不超过500个。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The context is empty;
     *     <br>2. Asset uri array size is empty or bigger than 500 .
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out;
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    static deleteCloudAssetsWithUri(context: Context, assetUris: string[]): Promise<void>;

    /**
     * 通过资产URI批量彻底删除照片或视频，不经过回收站。使用promise异步回调。
     * 
     * > **说明：**
     * >
     * > - 对仅存在于本端设备的资产、仅存在于云端的资产、存在于本端设备和云端的资产，均可以彻底删除，不经过回收站。
     * >
     * > - 此操作不可逆。执行此操作后文件资源将被彻底删除，请谨慎操作。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的Context。
     * @param { string[] } assetUris - 待删除的图片或视频URI数组，数组中元素个数不超过500个。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by nonsystem application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The context is empty;
     *     <br>2. Asset uri array size is empty or bigger than 500 .
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out;
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    static deleteAssetsPermanentlyWithUri(context: Context, assetUris: string[]): Promise<void>;

    /**
     * 设置复合图的展示模式。使用Promise异步回调。
     *
     * @param { CompositeDisplayMode } compositeDisplayMode - 设置复合图的展示模式。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - Scene parameter verification failed. Possible causes:
     *     <br>1. The compositeDisplayMode is not within the supported range.
     *     <br>2. The original file does not exist locally in PhotoAsset.
     *     <br>3. The PhotoAsset is not a composite asset.
     *     <br>4. The original file format is not within the supported range.
     *     <br>5. The original file has been edited.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    setCompositeDisplayMode(compositeDisplayMode: CompositeDisplayMode): Promise<void>;

    /**
     * 子弹时间状态
     *
     * @param { LivePhoto4dStatus } status - 子弹时间状态
     * @param { string } [livephoto_4d_latest_pair] - 该动图生成的最近的子弹时间
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setLivePhoto4dStatus(status: LivePhoto4dStatus, livephoto_4d_latest_pair?: string): void;

    /**
     * 设置资产的UI隐藏属性
     *
     * @param { boolean } hiddenState - 资产的隐藏状态
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The asset is not exist;
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    setHiddenAttribute(hiddenState: boolean): void;

    /**
     * 设置文件名，支持文管规则.命名
     *
     * @param { string } name - 资产修改名称。
     *     <br>取值范围:1-255
     *     <br>不应包含扩展名。
     *     文件名字符串长度为1~255。
     *     不允许出现的非法英文字符，包括：
     *     . \ / : * ? " ' ` < > | { } [ ]
     *     不允许仅命名.或者..
     *     文管目录下不允许重名
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The asset is not exist;
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    setTitleByFile(name: string): void;

    /**
     * Set recentShow state of the asset.
     *
     * @param { boolean } isRencentShow - the new recentShow state of the asset
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
     * <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     */
    setIsRecentShow(isRencentShow: boolean): void;
  }

  /**
   * 批量资产变更请求。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAssetsChangeRequest implements MediaChangeRequest {
    /**
     * 用于[MediaChangeRequest]{@link @ohos.file.photoAccessHelper:photoAccessHelper.MediaChangeRequest}
     * 类型校验。
     * <br>如果类（如MediaAssetsChangeRequest）对象可以访问，就说明该类是MediaChangeRequest的实现类。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly comment: string;

    /**
     * 构造函数。用于初始化批量资产变更请求。
     *
     * @param { Array<PhotoAsset> } assets - 需要变更的资产数组。
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 11 - 24]
     * @publicapi [since 26.0.0]
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(assets: Array<PhotoAsset>);

    /**
     * 批量将文件设置为收藏文件。
     *
     * @param { boolean } favoriteState - 是否设置为收藏文件， true：设置为收藏文件；false：取消收藏。
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 11 - 24]
     * @publicapi [since 26.0.0]
     * @since 11 dynamic
     * @since 23 static
     */
    setFavorite(favoriteState: boolean): void;

    /**
     * 将文件设置为隐藏文件。
     *
     * @param { boolean } hiddenState - 是否设置为隐藏文件，true：将文件资产放入隐藏相册；false：从隐藏相册中恢复。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setHidden(hiddenState: boolean): void;

    /**
     * 修改媒体资产的备注信息。
     *
     * @param { string } userComment - 待修改的资产备注信息，备注信息最长为420字符。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setUserComment(userComment: string): void;

    /**
     * 设置当前资产是否在“最近”列表中显示。
     *
     * @param { boolean } isRencentShow - 表示当前资产是否在“最近”列表中显示。true表示显示，false表示不显示。
     *     **false** otherwise.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setIsRecentShow(isRencentShow: boolean): void;
  }

  /**
   * MediaAlbumChangeRequest implements [MediaChangeRequest]{@link photoAccessHelper.MediaChangeRequest}.
   * 
   * 相册变更请求。
   * 
   * > **说明：**
   * >
   * > - 本Class首批接口从API version 11开始支持。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAlbumChangeRequest implements MediaChangeRequest {
    /**
     * 用于[MediaChangeRequest](arkts-apis-photoAccessHelper-i.md#mediachangerequest11)类型校验。
   	 * <br>如果类（如MediaAlbumChangeRequest）对象可以访问，就说明该类是MediaChangeRequest的实现类
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly comment: string;

    /**
     * 构造函数用于初始化新创建的对象。用于对相册进行操作。
     *
     * @param { Album } album - 需要变更的相册。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(album: Album);

    /**
     * 创建相册变更请求。
     * 
     * 相册名的参数规格为：
     * 
     * - 相册名字符串长度为1~255。
     * - 不允许出现的非法英文字符，包括：
     * 
     * . .. \ / : * ? " ' ` < > | { } [ ]
     * 
     * - 英文字符大小写不敏感。
     * - 相册名不允许重名。
     *
     * @param { Context } context - 传入Ability实例的Context。
     * @param { string } name - 待创建相册的名称。
     * @returns { MediaAlbumChangeRequest } 返回创建相册的变更请求。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     */
    static createAlbumRequest(context: Context, name: string): MediaAlbumChangeRequest;

    /**
     * 创建相册变更请求。
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } name - Name of the album.
     * @returns { MediaAlbumChangeRequest | null } - Returns a MediaAlbumChangeRequest instance.
     *     if the operation fails, returns null.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    static createAlbumRequest(context: Context, name: string): MediaAlbumChangeRequest | null;

    /**
     * 删除存在的用户相册。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的Context。
     * @param { Array<Album> } albums - 待删除的相册数组。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    static deleteAlbums(context: Context, albums: Array<Album>): Promise<void>;

    /**
     * 删除已存在的用户相册。使用promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的Context。
     * @param { Array<string> } albumUris - 待删除相册Uri的数组。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out;
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    static deleteAlbumsWithUri(context: Context, albumUris: Array<string>): Promise<void>;

    /**
     * 设置相册是否可以同步到云空间或家庭存储。使用promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的Context。
     * @param { Album[] } albums - 待设置同步状态的相册数组，支持设置用户相册和来源相册，数组中元素个数不超过500个。
     * @param { boolean } allowUpload - 是否允许相册同步，true表示允许，false表示不允许。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 -  The scenario parameter verification fails. Possible causes:
     *     <br>1. The context is empty;
     *     <br>2. Album array size is bigger than 500.
     * @throws { BusinessError } 23800301  - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1.Database corrupted;
     *     <br>2.The file system is abnormal;
     *     <br>3.The IPC request timed out;
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    static setUploadStatus(context: Context, albums: Album[], allowUpload: boolean): Promise<void>;

    /**
     * 获取当前相册变更请求中的相册。
     * 
     * > **注意：**
     * >
     * > 对于创建相册的变更请求，在调用接口
     * > > [applyChanges]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.applyChanges}
     * > > 的提交生效之前，该接口会返回null。
     *
     * @returns { Album } 返回当前相册变更请求中的相册。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     */
    getAlbum(): Album;

    /**
     * 获取当前相册变更请求中的相册。
     *
     * @returns { Album | null } - Returns the album, if the operation fails, returns null
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 static
     */
    getAlbum(): Album | null;

    /**
     * 设置相册封面。
     *
     * @param { string } coverUri - 待设置为相册封面文件的uri。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setCoverUri(coverUri: string): void;

    /**
     * 设置相册名称。
     * 
     * 相册名参数规格：
     * 
     * - 相册名字符串长度为1~255。
     * - 不允许出现的非法英文字符，包括：
     * 
     * . \ / : * ? " ' ` < > | { } [ ]
     * 
     * - 英文字符大小写不敏感。
     * - 相册名不允许重名。
     *
     * @param { string } name - 待设置的相册名称。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    setAlbumName(name: string): void;

    /**
     * 向相册中添加资产。
     *
     * @param { Array<PhotoAsset> } assets - 待添加到相册中的资产数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    addAssets(assets: Array<PhotoAsset>): void;

    /**
     * 从相册中移除资产。
     *
     * @param { Array<PhotoAsset> } assets - 待从相册中移除的资产数组。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    removeAssets(assets: Array<PhotoAsset>): void;

    /**
     * 从相册中移动资产到另一个目标相册。
     *
     * @param { Array<PhotoAsset> } assets - 待从相册中移出的资产数组。
     * @param { Album } targetAlbum - 待移入资产的目标相册。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    moveAssets(assets: Array<PhotoAsset>, targetAlbum: Album): void;

    /**
     * 把相册中的资产移动到另一个目标相册。
     *
     * @param { Array<string> } assetUris - 待从相册中移出的资产Uri数组。
     * @param { Album } targetAlbum - 待移入资产的目标相册。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    moveAssetsWithUri(assetUris: Array<string>, targetAlbum: Album): void;

    /**
     * 从回收站中恢复指定的PhotoAsset对象数组所对应的资产。
     *
     * @param { Array<PhotoAsset> } assets - 待从回收站中恢复的资产数组。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    recoverAssets(assets: Array<PhotoAsset>): void;

    /**
     * 从回收站中恢复指定的URI字符串数组所对应的资产。
     *
     * @param { Array<string> } assetUris - 待从回收站中恢复的资产Uri数组。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    recoverAssetsWithUri(assetUris: Array<string>): void;

    /**
     * 从回收站中彻底删除资产。
     * 
     * > **注意：**
     * >
     * > 此操作不可逆，执行此操作后文件资源将彻底删除，请谨慎操作。
     *
     * @param { Array<PhotoAsset> } assets - 待从回收站中彻底删除的资产数组。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    deleteAssets(assets: Array<PhotoAsset>): void;

    /**
     * 从回收站中彻底删除资产。
     * 
     * > **注意：**
     * >
     * > 此操作不可逆，执行此操作后文件资源将被彻底删除，请谨慎操作。
     *
     * @param { Array<string> } assetUris - 待从回收站中彻底删除的资产Uri数组。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 13900020 - Invalid argument
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    deleteAssetsWithUri(assetUris: Array<string>): void;

    /**
     * 将人像相册的人物关系设置为“我”。
     *
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setIsMe(): void;

    /**
     * 设置人像相册的显示级别。
     *
     * @param { int } displayLevel - 设置人像相册的显示级别，
     *     <br>0：取消该人像相册收藏；
     *     <br>1：设置人像相册为首届面；
     *     <br>2：设置人像相册为更多界面；
     *     <br>3：设置人像相册为收藏界面。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    setDisplayLevel(displayLevel: int): void;

    /**
     * 从该人像相册或合影相册中移除指定图片。
     *
     * @param { Array<PhotoAsset> } assets - 需要移除的文件列表。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    dismissAssets(assets: Array<PhotoAsset>): void;

    /**
     * 将两个人像相册合并。
     *
     * @param { Album } target - 需要合并的目标相册，合并相册必须重命名。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    mergeAlbum(target: Album): void;

    /**
     * 将当前相册排序到目标相册之前。
     *
     * @param { Album } album - 目标相册。如果要将当前相册排序到末位，则目标相册传入null。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    placeBefore(album: Album): void;

    /**
     * 删除合影相册。
     *
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dismiss(): void;

    /**
     * 恢复默认封面。
     *
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    resetCoverUri(): void;

    /**
     * 设置相册的UI隐藏属性
     *
     * @param { boolean } hiddenState - 是否隐藏状态
   	 *     <br>相册的UI隐藏状态
     * @param { boolean } isInherited - 目录下所有文件或者子文件是否继承UI隐藏属性
   	 *     <br>是否所有子文件或者子目录是否继承
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The ablum is not exist;
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    setHiddenAttribute(hiddenState: boolean, isInherited: boolean): void;

    /**
     * 设置相册名称，支持文管规则的.命名
     *
     * @param { string } name - 相册名。
     *     <br>取值范围:1-255
     *     <br>相册名参数规格：
     *     相册名字符串长度为1~255。
     *     不允许出现的非法英文字符，包括：
     *     \ / : * ? " ' ` < > | { } [ ]
     *     不允许仅命名为.或者..
     *     英文字符大小写不敏感。
     *     相册名不允许重名。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The album is not exist;
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted.
     *     <br>2. The file system is abnormal.
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    setAlbumNameByFile(name: string): void;

    /**
     * 操作相册属性。
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB [since 26.0.0 - 26.0.0]
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB or ohos.permission.WRITE_IMAGEVIDEO [since 26.1.0]
     * @param { AlbumOperation } operation - 为相册执行的操作。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The attr of operation is invalid;
     *     <br>2. The type of operation is invalid;
     *     <br>3. The values of operation is incorrect;
     * @throws { BusinessError } 23800201 - Unsupported operation type. It is recommended to check the logs.
     *     Possible causes:
     *     <br>1. Unsupported AlbumAttribute for the album.
     *     <br>2. Unsupported AlbumOperationType for the AlbumAttribute.
     *     <br>3. Other operation limit.
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     *     <br>Possible causes:1. Database corrupted.2. The file system is abnormal.3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    operateAttribute(operation: AlbumOperation): void;
  }

  /**
   * 共享图片资产。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface SharedPhotoAsset {
    /**
     * 图片资产标识id。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    fileId: int;
    /**
     * 图片资产uri。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * 图片资产的路径数据。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    data: string;
    /**
     * 图片资产的媒体类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    mediaType: PhotoType;
    /**
     * 图片资产的显示名称。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    displayName: string;
    /**
     * 图片资产文件大小，单位：字节。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    size: long;
    /**
     * 添加了图片资产数据，单位：秒。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateAdded: long;
    /**
     * 更改了图片资产数据，单位：秒。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateModified: long;
    /**
     * 视频类型的图片资产时长，单位：毫秒。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    duration: int;
    /**
     * 图片资产的像素宽度，单位：像素。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    width: int;
    /**
     * 图片资产的像素高度，单位：像素。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    height: int;
    /**
     * 图片资产拍照后存入本地时间，单位：秒。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateTaken: long;
    /**
     * 图片资产的旋转角度，单位：度（°）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    orientation: int;
    /**
     * 是否收藏了此图片。true表示已收藏，false表示未收藏。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isFavorite: boolean;
    /**
     * 图片资产的标题。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    title: string;
    /**
     * 图片资产存在位置。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    position: PositionType;
    /**
     * 图片资产是否在回收站中。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateTrashed: long;
    /**
     * 图片资产是否隐藏。true表示已隐藏，false表示未隐藏。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    hidden: boolean;
    /**
     * 图片资产的用户评论信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    userComment: string;
    /**
     * 图片资产相机拍摄信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    cameraShotKey: string;
    /**
     * 图片资产创建年份时间。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateYear: string;
    /**
     * 图片资产创建月份时间。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateMonth: string;
    /**
     * 图片资产创建日时间。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateDay: string;
    /**
     * 图片资产等待状态，true表示等待，false表示解除等待。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    pending: boolean;
    /**
     * 图片资产数据添加后经过时间，单位：毫秒。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateAddedMs: long;
    /**
     * 文件修改时的Unix时间戳。单位为毫秒。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateModifiedMs: long;
    /**
     * 图片资产数据进回收站后经过时间，单位：毫秒。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateTrashedMs: long;
    /**
     * 图片资产子类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    subtype: PhotoSubtype;
    /**
     * 动态照片效果模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    movingPhotoEffectMode: MovingPhotoEffectMode;
    /**
     * 媒体文件的动态范围类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dynamicRangeType: DynamicRangeType;
    /**
     * 图片资产的缩略图是否准备好。true表示已准备好，false表示未准备好。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    thumbnailReady: boolean;
    /**
     * 图片资产的lcd缩略图宽高信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    lcdSize: string;
    /**
     * 图片资产的thumb缩略图宽高信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    thmSize: string;
    /**
     * 图片资产的缩略图状态改变后经过时间，单位：毫秒。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    thumbnailModifiedMs?: long;
    /**
     * 缩略图可见标识。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    thumbnailVisible: ThumbnailVisibility;
  }

  /**
   * Defines the shared album asset
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  interface SharedAlbumAsset {
    /**
     * album id of album asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    albumId: int;
    /**
     * type of album asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    albumType: AlbumType;
    /**
     * subtype of album asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    albumSubType: AlbumSubtype;
    /**
     * album name
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    albumName: string;
    /**
     * uri of album cover
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    coverUri: string;
    /**
     * number of assets in this album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    count: int;
    /**
     * number of photo assets in this album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    imageCount: int;
    /**
     * number of video assets in this album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    videoCount: int;
  }

  /**
   * 动态照片对象。
   * 
   * > **说明：**
   * >
   * > - 本Interface首批接口从API version 12开始支持。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface MovingPhoto {
    /**
     * 同时请求动态照片的图片内容和视频内容，并写入参数指定的对应的uri中。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } imageFileUri - 待写入动态照片图片内容的uri。示例imageFileUri为："file://com.example.temptest/data/storage/el2/
     *     base/haps/ImageFile.jpg"。
     * @param { string } videoFileUri - 待写入动态照片视频内容的uri。示例videoFileUri为："file://com.example.temptest/data/storage/el2/
     *     base/haps/VideoFile.mp4"。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    requestContent(imageFileUri: string, videoFileUri: string): Promise<void>;

    /**
     * 请求指定资源类型的动态照片内容，并写入参数指定的uri中。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { ResourceType } resourceType - 所请求动态照片内容的资源类型。
     * @param { string } fileUri - 待写入动态照片内容的uri。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    requestContent(resourceType: ResourceType, fileUri: string): Promise<void>;

    /**
     * 请求指定资源类型的动态照片内容，以ArrayBuffer的形式返回。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { ResourceType } resourceType - 所请求动态照片内容的资源类型。
     * @returns { Promise<ArrayBuffer> } Promise对象，返回包含所请求文件内容的ArrayBuffer。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - System inner fail. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    requestContent(resourceType: ResourceType): Promise<ArrayBuffer>;

    /**
     * 获取动态照片的uri。
     *
     * @returns { string } 动态照片的uri。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     */
    getUri(): string;

    /**
     * Obtains the URI of this moving photo.
     *
     * @returns { string | null } Returns uri of the moving photo, if the operation fails, returns null
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 23 static
     */
    getUri(): string | null;

    /**
     * 查询动态照片的视频是否已生成。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<boolean> } Promise对象。返回true表示动态照片视频已生成; 返回false表示动态照片视频未生成完成。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the
     *     logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isVideoReady(): Promise<boolean>;
  }

  /**
   * 枚举，时刻相册信息类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum HighlightAlbumInfoType {
    /**
     * 封面信息类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    COVER_INFO = 0,
    /**
     * 音乐信息类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PLAY_INFO = 1,
    /**
     * 相册信息类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    ALBUM_INFO = 2
  }

  /**
   * 枚举，时刻用户行为类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum HighlightUserActionType {
    /**
     * 新增图片数量类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    INSERTED_PIC_COUNT = 0,
    /**
     * 移除图片数量类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    REMOVED_PIC_COUNT = 1,
    /**
     * 分享二级界面长图次数类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SHARED_SCREENSHOT_COUNT = 2,
    /**
     * 分享时刻封面次数类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SHARED_COVER_COUNT = 3,
    /**
     * 重命名次数类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    RENAMED_COUNT = 4,
    /**
     * 修改封面次数类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CHANGED_COVER_COUNT = 5,
    /**
     * 轮播观看次数类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    RENDER_VIEWED_TIMES = 100,
    /**
     * 轮播观看总时长类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    RENDER_VIEWED_DURATION = 101,
    /**
     * 二级界面观看次数类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ART_LAYOUT_VIEWED_TIMES = 102,
    /**
     * 二级界面观看总时长类别。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ART_LAYOUT_VIEWED_DURATION = 103
  }

  /**
   * 枚举，时刻相册属性。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 26.0.0 static
   */
  enum HighlightAlbumChangeAttribute {
    /**
     * 该时刻相册是否被查看过。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    IS_VIEWED = 0,

    /**
     * 应用发送时刻通知提示的时间。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    NOTIFICATION_TIME = 1,

    /**
     * 该时刻相册是否被收藏。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    IS_FAVORITE = 2
  }

  /**
   * 枚举，缩略图类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum ThumbnailType {
    /**
     * 获取LCD缩略图
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    LCD = 1,
    /**
     * 获取THM缩略图
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    THM = 2
  }

  /**
   * 智慧相册变更请求。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  class MediaAnalysisAlbumChangeRequest extends MediaAlbumChangeRequest {
    /**
     * 构造函数。
     *
     * @param { Album } album - 智慧相册。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    constructor(album: Album);

    /**
     * 设置智慧相册中资产的顺序位置。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - 需要设置顺序位置的相册中资产。
     * @param { Array<int> } position - 相册中资产的顺序位置。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setOrderPosition(assets: Array<PhotoAsset>, position: Array<int>): void;

    /**
     * 设置人像相册中的人物关系。
     * 
     * 支持的人物关系名称范围：
     * | 唯一标识       | 含义     |
     * | ---------- | ------- |
     * | me | 我 |
     * | son | 儿子 |
     * | daughter | 女儿 |
     * | wife | 妻子 |
     * | husband | 丈夫 |
     * | father | 爸爸 |
     * | mother | 妈妈 |
     * | colleague | 同事 |
     * | friend | 朋友 |
     * | classmate | 同学 |
     * | best_friend_female | 闺蜜 |
     * | boyfriend | 男朋友 |
     * | girlfriend | 女朋友 |
     * | family | 家人 |
     * | maternal_grandfather | 外公 |
     * | maternal_grandmother | 外婆 |
     * | paternal_grandfather | 爷爷 |
     * | paternal_grandmother | 奶奶 |
     * | older_brother | 哥哥 |
     * | older_sister | 姐姐 |
     * | younger_brother | 弟弟 |
     * | younger_sister | 妹妹 |
     * | relative | 亲戚 |
     * | other | 其他 |
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } relationship - 需要设置的人物关系名称。
     *     <br>支持设置为空字符串，功能为取消当前设置的人物关系。
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes:
     *     <br>1. The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    setRelationship(relationship: string): Promise<void>;

    /**
     * 创建一个 MediaAnalysisAlbumChangeRequest 实例
     *
     * @param { Context } context - 实例的上下文
     * @param { string } name - 相册名称
     * @param { AlbumSubtype } subtype - 相册子类
     * @returns { MediaAnalysisAlbumChangeRequest | null } - 返回一个智慧相册变更句柄
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes:
     *     <br>1. The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    static createAnalysisAlbumRequest(
      context: Context, 
      name: string, 
      subtype: AlbumSubtype
    ): MediaAnalysisAlbumChangeRequest | null;

    /**
     * 创建智慧相册的变更请求。
     * 
     * > **说明**
     * >
     * > 相册名的参数规格如下：
     * >
     * > - 相册名字符串长度的取值范围为[1, 255]。
     * >
     * > - 不允许出现非法英文字符，包括：. .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @param { Context } context - 传入Ability实例的Context。
     * @param { string } name - 待创建相册的名称。
     * @param { AlbumSubtype } subtype - 待创建智慧相册的子类型。
     * @returns { MediaAnalysisAlbumChangeRequest } 返回创建智慧相册的变更请求。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes:
     *     <br>1. The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     */
    static createAnalysisAlbumRequest(
      context: Context, 
      name: string, 
      subtype: AlbumSubtype
    ): MediaAnalysisAlbumChangeRequest;

    /**
     * 设置智慧相册的默认封面。
     *
     * @param { string } coverUri - 待设置为智慧相册默认封面的文件URI。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails.
     *     <br>Possible causes:
     *     <br>1. The input parameter is not within the valid range.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    setDefaultCoverUri(coverUri: string): void;
  }

  /**
   * 时刻相册变更请求，MediaHighlightAlbumChangeRequest继承自
   * [MediaAnalysisAlbumChangeRequest]{@link photoAccessHelper.MediaAnalysisAlbumChangeRequest}。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 26.0.0 static
   */
  class MediaHighlightAlbumChangeRequest extends MediaAnalysisAlbumChangeRequest {
    /**
     * 构造函数。
     *
     * @param { Album } album - 时刻相册。
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    constructor(album: Album);

    /**
     * 设置时刻相册中对应的属性值。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { HighlightAlbumChangeAttribute } attribute - 需要设置的时刻属性。
     * @param { string } value - 需要设置的时刻属性值。
     *     <br>当attribute为**IS_VIEWED** 或者 **IS_FAVORITE**, 时，取值为"0"或"1"；
     *     当attribute为 **NOTIFICATION_TIME**时，取值范围为长度在8字节以内的数字字符串，
     *     例如"12345678"。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    setHighlightAttribute(attribute: HighlightAlbumChangeAttribute, value: string): void;
  }

  /**
   * 智慧相册。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  class AnalysisAlbum {
    /**
     * 构造函数。
     *
     * @param { Album } album - 智慧相册。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    constructor(album: Album);
    /**
     * 获取智慧相册中资产的顺序位置。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - 需要获取顺序位置的相册中资产。
     * @returns { Promise<Array<int>> } 相册中资产的顺序位置值。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    getOrderPosition(assets: Array<PhotoAsset>): Promise<Array<int>>;

    /**
     * 获取人像相册中的人物关系。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } 获取的人像相册中的人物关系。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    getRelationship(): Promise<string>;
  }

  /**
   * 时刻相册。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  class HighlightAlbum {
    /**
     * 构造函数。
     *
     * @param { Album } album - 智慧相册。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    constructor(album: Album);

    /**
     * 获取指定时刻相册的特定信息。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { HighlightAlbumInfoType } type - 需要获取的时刻相册信息类型。
     * @returns { Promise<string> } Promise对象，返回指定的时刻相册信息。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getHighlightAlbumInfo(type: HighlightAlbumInfoType): Promise<string>;

    /**
     * 获取指定时刻缓存资源的ArrayBuffer。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } resourceUri - 指定时刻缓存资源uri。
     * @returns { Promise<ArrayBuffer> } Promise对象，返回资源的ArrayBuffer。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. Possible causes:
     *     <br>1. The database is corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    getHighlightResource(resourceUri: string): Promise<ArrayBuffer>;

    /**
     * 设置指定时刻用户行为数据。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { HighlightUserActionType } type - 需要设置的用户行为数据类型。
     * @param { int } actionData - 行为数据。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    setHighlightUserActionData(type: HighlightUserActionType, actionData: int): Promise<void>;

    /**
     * 设置时刻副标题内容。
     * 
     * 副标题参数规格为：
     * 
     * - 副标题字符串长度为0~255。
     * - 不允许出现的非法英文字符，包括：
     * 
     * . \ / : * ? " ' ` < > | { } [ ]
     * 
     * - 英文字符大小写不敏感。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } subTitle - 需要设置的时刻副标题内容。
     * @returns { Promise<void> } Returns void
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    setSubTitle(subTitle: string): Promise<void>;

    /**
     * 删除指定时刻相册。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - 传入Ability实例的Context。
     * @param { Array<Album> } albums - 需要删除的时刻相册。
     * @returns { Promise<int> } 是否成功删除相册。成功返回0，失败返回1。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    static deleteHighlightAlbums(context: Context, albums: Array<Album>): Promise<int>;
  }

  /**
   * 枚举，应用查询云增强任务状态时，在[CloudEnhancementTaskState]{@link photoAccessHelper.CloudEnhancement}接口中返回，表示云增强任务状态。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum CloudEnhancementTaskStage {
    /**
     * 云增强任务异常。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_EXCEPTION = -1,

    /**
     * 云增强任务准备中。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_PREPARING = 0,

    /**
     * 云增强任务上传中。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_UPLOADING = 1,

    /**
     * 云增强任务执行中。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_EXECUTING = 2,

    /**
     * 云增强任务下载中。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_DOWNLOADING = 3,

    /**
     * 云增强任务失败。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_FAILED = 4,

    /**
     * 云增强任务已完成。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_COMPLETED = 5
  }

  /**
   * 云增强任务状态，应用调用云增强任务查询接口的返回类型，包含云增强任务状态及部分状态下的额外信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface CloudEnhancementTaskState {
    /**
     * 云增强任务状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly taskStage: CloudEnhancementTaskStage;
    /**
     * 已传输的文件大小，单位：字节。当taskStage为CloudEnhancementTaskStage.TASK_STAGE_UPLOADING或者
     * CloudEnhancementTaskStage.TASK_STAGE_DOWNLOADING时提供。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly transferredFileSize?: int;
    /**
     * 总文件大小，单位：字节。当taskStage为CloudEnhancementTaskStage.TASK_STAGE_UPLOADING或者
     * CloudEnhancementTaskStage.TASK_STAGE_DOWNLOADING时提供。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly totalFileSize?: int;
    /**
     * 排队时间，单位：毫秒。当taskStage为CloudEnhancementTaskStage.TASK_STAGE_EXECUTING时提供。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly expectedDuration?: int;
    /**
     * 状态码。当taskStage为CloudEnhancementTaskStage.TASK_STAGE_FAILED时提供。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly statusCode?: int;
  }

  /**
   * 云增强管理类，该类用于生成AI云增强照片任务的管理、获取原照片与AI云增强照片的关联关系。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  class CloudEnhancement {
    /**
     * 获取云增强类实例。
     *
     * @param { Context } context - 传入Ability实例的Context。
     * @returns { CloudEnhancement } 返回云增强管理类实例。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     */
    static getCloudEnhancementInstance(context: Context): CloudEnhancement;
    /**
     * 获取云增强类实例。
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { CloudEnhancement | null } Returns cloud enhancement instance, if the operation fails, returns null
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    static getCloudEnhancementInstance(context: Context): CloudEnhancement | null;

    /**
     * 提交云增强任务。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } photoAssets - 需要增强照片的[PhotoAsset]{@link photoAccessHelper.PhotoAsset}集合。
     * @param { boolean } hasCloudWatermark - 增强后图片是否添加云增强水印。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    submitCloudEnhancementTasks(photoAssets: Array<PhotoAsset>, hasCloudWatermark: boolean): Promise<void>;

    /**
     * 提升指定云增强任务的优先级。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoAsset } photoAsset - 需要修改云增强优先级照片的[PhotoAsset]{@link photoAccessHelper.PhotoAsset}。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    prioritizeCloudEnhancementTask(photoAsset: PhotoAsset): Promise<void>;

    /**
     * 提交云增强任务，支持选择云增强任务触发类型。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } photoAssets - 需要增强照片的[PhotoAsset]{@link photoAccessHelper.PhotoAsset}集合。
     * @param { boolean } hasCloudWatermark - 若为true，增强后图片添加云增强水印；若为false，增强后图片不添加云增强水印。
     * @param { int } [triggerMode] - 云增强任务触发类型。<br>- 0：手动触发。<br>- 1：自动触发。<br>- 默认值为0。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    submitCloudEnhancementTasks(
      photoAssets: Array<PhotoAsset>,
      hasCloudWatermark: boolean,
      triggerMode?: int
    ): Promise<void>;

    /**
     * 取消指定云增强任务。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } photoAssets - 需要取消云增强任务的[PhotoAsset]{@link photoAccessHelper.PhotoAsset}集合。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    cancelCloudEnhancementTasks(photoAssets: Array<PhotoAsset>): Promise<void>;

    /**
     * 取消全部云增强任务。
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    cancelAllCloudEnhancementTasks(): Promise<void>;

    /**
     * 查询云增强任务信息。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PhotoAsset } photoAsset - 需要查询云增强任务信息的[PhotoAsset]{@link photoAccessHelper.PhotoAsset}。
     * @returns { Promise<CloudEnhancementTaskState> } 返回云增强任务信息。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    queryCloudEnhancementTaskState(photoAsset: PhotoAsset): Promise<CloudEnhancementTaskState>;

    /**
     * 同步云增强任务状态。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    syncCloudEnhancementTaskStatus(): Promise<void>;

    /**
     * 查询云增强配对照片。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PhotoAsset } asset - 需要查询云增强配对照片的[PhotoAsset]{@link photoAccessHelper.PhotoAsset}。
     * @returns { Promise<PhotoAsset> } 返回云增强配对照片。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    getCloudEnhancementPair(asset: PhotoAsset): Promise<PhotoAsset>;
  }

  /**
   * 枚举，表示云增强状态。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum CloudEnhancementState {
    /**
     * 云增强不可用。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    UNAVAILABLE = 0,
    /**
     * 云增强可用。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    AVAILABLE = 1,
    /**
     * 云增强执行中。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    EXECUTING = 2,
    /**
     * 云增强已完成。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    COMPLETED = 3
  }

  /**
   * 枚举，表示云端媒体资产的下载任务状态。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum CloudMediaAssetTaskStatus {
    /**
     * 当前任务下载中。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DOWNLOADING = 0,
    /**
     * 当前任务已暂停。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    PAUSED = 1,
    /**
     * 当前无下载任务。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    IDLE = 2
  }

  /**
   * 枚举，表示云端媒体资产下载任务暂停的类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum CloudMediaTaskPauseCause {
    /**
     * 正常下载，无暂停。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    NO_PAUSE = 0,
    /**
     * 正常下载，无暂停。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    TEMPERATURE_LIMIT = 1,
    /**
     * 本地磁盘空间不足。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    ROM_LIMIT = 2,
    /**
     * 本地磁盘空间不足。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    NETWORK_FLOW_LIMIT = 3,
    /**
     * 网络异常。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    WIFI_UNAVAILABLE = 4,
    /**
     * 网络异常。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    POWER_LIMIT = 5,
    /**
     * 充电息屏未启动。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    BACKGROUND_TASK_UNAVAILABLE = 6,
    /**
     * 用户请求频繁。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    FREQUENT_USER_REQUESTS = 7,
    /**
     * 端云错误。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    CLOUD_ERROR = 8,
    /**
     * 用户暂停。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    USER_PAUSED = 9
  }

  /**
   * 云端媒体资产下载任务的详细信息，应用调用云端资产下载任务查询接口的返回类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  interface CloudMediaAssetStatus {
    /**
     * 云端媒体资产下载任务状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    readonly taskStatus: CloudMediaAssetTaskStatus;
    /**
     * 下载资产的总个数和总大小（byte），以及未下载的总个数和总大小（byte）。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    readonly taskInfo: string;
    /**
     * 云端媒体资产下载任务暂停类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    readonly errorCode: CloudMediaTaskPauseCause;
  }

  /**
   * 枚举，表示云端媒体资产的下载方式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum CloudMediaDownloadType {
    /**
     * 高优先级下载，无需进入息屏充电模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DOWNLOAD_FORCE = 0,
    /**
     * 低优先级下载，需要进入息屏充电模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DOWNLOAD_GENTLE = 1
  }

  /**
   * 枚举，表示云端媒体资产的删除方式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum CloudMediaRetainType {
    /**
     * 删除原文件在云空间的本地元数据和缩略图。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    RETAIN_FORCE = 0,
    /**
     * 删除原文件在家庭存储设备的本地元数据和缩略图。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDC_RETAIN_FORCE = 1
  }

  /**
   * 云端媒体资产管理类，该类用于管理云端资产的下载任务，以及删除云端资产在本地的数据和文件。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  class CloudMediaAssetManager {
    /**
     * 获取云端媒体资产管理类实例。
     *
     * @param { Context } context - 传入Ability实例的Context。
     * @returns { CloudMediaAssetManager } 返回云端媒体资产管理类实例。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     */
    static getCloudMediaAssetManagerInstance(context: Context): CloudMediaAssetManager;

    /**
     * 获取云端媒体资产管理类实例。
     *
     * @param { Context } context - Obtains a CloudMediaAssetManager instance.
     * @returns { CloudMediaAssetManager | null } Returns cloud media asset manager instance,
     *     if the operation fails, returns null
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    static getCloudMediaAssetManagerInstance(context: Context): CloudMediaAssetManager | null;
    /**
     * 开始或恢复云端媒体资产下载任务。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { CloudMediaDownloadType } downloadType - 云端媒体资产的下载方式。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    startDownloadCloudMedia(downloadType: CloudMediaDownloadType): Promise<void>;

    /**
     * 暂停云端媒体资产下载任务。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    pauseDownloadCloudMedia(): Promise<void>;

    /**
     * 取消云端媒体资产下载任务。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted; 2
     *     <br>. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    cancelDownloadCloudMedia(): Promise<void>;

    /**
     * 删除云端媒体资产在本地的元数据和文件。
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { CloudMediaRetainType } retainType - 云端媒体资产的删除方式。
     * @returns { Promise<void> } Promise对象，返回void。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types;
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    retainCloudMediaAsset(retainType: CloudMediaRetainType): Promise<void>;

    /**
     * 查询云端媒体资产下载任务状态。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<CloudMediaAssetStatus> } Promise对象，返回云端媒体资产下载任务状态。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 14000011 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    getCloudMediaAssetStatus(): Promise<CloudMediaAssetStatus>;

    /**
     * 开始云端媒体资产批量下载任务。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] } assetUris - 需要下载的原图和视频的uri列表。
     * @returns { Promise<Map<string, CloudAssetDownloadCode>> } Promise对象，返回uri列表对应的下载任务是否添加成功。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The assetUris array is empty;
     *     <br>2. The assetUris array size is bigger than 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    startDownloadSpecificCloudMedia(assetUris: string[]): Promise<Map<string, CloudAssetDownloadCode>>;

    /**
     * 暂停云端媒体资产批量下载任务。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] | null } assetUris - 需要暂停下载的原图和视频的uri列表。
     *     <br>当传入null、undefined和空列表时，表示已存在的所有批量下载任务。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151  - The scenario parameter verification fails. Possible causes:
     *     The assetUris array size is bigger than 500.
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    pauseDownloadSpecificCloudMedia(assetUris: string[] | null): Promise<void>;

    /**
     * 恢复云端媒体资产批量下载任务。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] | null } assetUris - 需要恢复下载的原图和视频的uri列表。
     *     <br>当传入null、undefined和空列表时，表示已存在的所有批量下载任务。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151  - The scenario parameter verification fails. Possible causes:
     *     The assetUris array size is bigger than 500.
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    resumeDownloadSpecificCloudMedia(assetUris: string[] | null): Promise<void>;

    /**
     * 取消云端媒体资产批量下载任务。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] | null } assetUris - 需要取消下载的原图和视频的uri列表。
     *     <br>当传入null、undefined和空列表时，表示已存在的所有批量下载任务。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151  - The scenario parameter verification fails. Possible causes:
     *     The assetUris array size is bigger than 500.
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    cancelDownloadSpecificCloudMedia(assetUris: string[] | null): Promise<void>;

    /**
     * 查询云端媒体资产批量下载任务信息。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicates - 谓词查询，显示过滤条件。
     * @returns { Promise<CloudAssetDownloadStatus> } Promise对象，返回下载任务信息。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    queryDownloadSpecificCloudMediaDetails(predicates: dataSharePredicates.DataSharePredicates): Promise<CloudAssetDownloadStatus>;

    /**
     * 查询云端媒体资产批量下载任务总量。使用Promise异步回调。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicates - 谓词查询，显示过滤条件。
     * @returns { Promise<int> } Promise对象，返回总量。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    queryDownloadSpecificCloudMediaTaskCount(predicates: dataSharePredicates.DataSharePredicates): Promise<int>;

    /**
     * 监听云端媒体资产批量下载进度。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param {  Callback<CloudAssetDownloadProgressInfo> } callback - 注册指定的callback监听，回调返回批量下载进度相关通知。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    onDownloadProgressChange(callback: Callback<CloudAssetDownloadProgressInfo>): void;

    /**
     * 取消监听云端媒体资产批量下载进度相关通知。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param {  Callback<CloudAssetDownloadProgressInfo> } [callback] - 取消监听
     *     [onDownloadProgressChange]{@link photoAccessHelper.CloudMediaAssetManager.on}注册指定的callback监听；不填时，则取消所有进度相关监听。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301  -  Internal system error. It is recommended to retry and check the logs.
     *     Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    offDownloadProgressChange(callback?: Callback<CloudAssetDownloadProgressInfo>): void;
  }

  /**
   * 批量下载进度信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  interface CloudAssetDownloadProgressInfo {
    /**
     * 批量下载事件类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly downloadEventType: CloudAssetDownloadNotifyType;

    /**
     * 批量下载文件id。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly fileId: int;

    /**
     * 下载进度信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly percent: int;

    /**
     * 自动通知原因。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly autoPauseReason: int;
  }

  /**
   * 批量下载任务信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  interface CloudAssetDownloadStatus {
    /**
     * 批量下载任务信息。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly taskInfos: string[];
  }

  /**
   * 枚举，批量下载添加返回值类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  enum CloudAssetDownloadCode {
    /**
     * 添加下载任务成功。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ADD_DOWNLOAD_TASK_SUCCESS = 0,

    /**
     * 添加下载任务时，资源不存在。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_ASSET_NOT_EXIST = 1
  }

  /**
   * 枚举，下载进度通知事件类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  enum CloudAssetDownloadNotifyType {
    /**
     * 下载进度通知。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_PROGRESS = 0,

    /**
     * 下载完成通知。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_FINISHED = 1,

    /**
     * 下载失败通知。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_FAILED = 2,

    /**
     * 下载资产删除通知。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_ASSET_DELETED = 3,

    /**
     * 下载自动停止通知。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_AUTO_PAUSED = 4,

    /**
     * 下载自动恢复通知。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_AUTO_RESUMED = 5,

    /**
     * 下载刷新通知。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_REFRESHED = 6
  }

  /**
   * 媒体库支持图库自定义用户统计行为。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface PhotoAssetCustomRecord {
    /**
     * 图片id，必须为大于0的整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly fileId: int;
    /**
     * 图片和视频被分享的次数，必须为大于0的整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly shareCount: int;
    /**
     * 大图跳转分享等次数，必须为大于0的整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly lcdJumpCount: int;
  }

  /**
   * 媒体库支持图库自定义用户统计行为。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  class PhotoAssetCustomRecordManager {
    /**
     * 获取图库自定义用户统计行为实例。
     *
     * @param { Context } context - 传入Ability实例的上下文。
     * @returns { PhotoAssetCustomRecordManager } 用户自定义行为统计实例。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800107 - Context is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    static getCustomRecordManagerInstance(context: Context): PhotoAssetCustomRecordManager;

    /**
     * 获取图库自定义用户统计行为实例。
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { PhotoAssetCustomRecordManager | null} Returns media asset custom record manager instance
     *     if operation fails, return null.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800107 - Context is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    static getCustomRecordManagerInstance(context: Context): PhotoAssetCustomRecordManager | null;

    /**
     * 新增自定义用户统计行为数据。使用Promise异步回调。
     *
     * @param { Array<PhotoAssetCustomRecord> } customRecords - 新增自定义用户统计行为数据。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     *     <br>1. The value range of mandatory parameters in photoAssetCustomRecord does not meet the requirements.
     *     <br>2. The transferred record already exists. 3. The number of transferred records exceeds 200.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    createCustomRecords(customRecords: Array<PhotoAssetCustomRecord>): Promise<void>;
    /**
     * 根据检索选项获取自定义用户统计行为数据。使用Promise异步回调。
     *
     * @param { FetchOptions } optionCheck - 检索选项。
     * @returns { Promise<FetchResult<PhotoAssetCustomRecord>> } Promise对象，返回自定义用户统计行为数据集合。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     *     1. The filter criteria or fetchColumns that are not supported by options are transferred.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    getCustomRecords(optionCheck: FetchOptions): Promise<FetchResult<PhotoAssetCustomRecord>>;
    /**
     * 根据自定义用户统计行为数据，更新已存在的数据库字段。使用Promise异步回调。
     *
     * @param { Array<PhotoAssetCustomRecord> } customRecords - 自定义用户统计行为数据。
     * @returns { Promise<Array<int>> } 更新失败的自定义用户统计行为数据中的fileId。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     *     <br>1. The value range of mandatory parameters in photoAssetCustomRecord does not meet the requirements.
     *     <br>2. The number of transferred records exceeds 200.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    setCustomRecords(customRecords: Array<PhotoAssetCustomRecord>): Promise<Array<int>>;
    /**
     * 根据检索选项删除自定义用户统计行为数据。使用Promise异步回调。
     *
     * @param { FetchOptions } optionCheck - 检索选项。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     *     <br>1. The filter criteria or fetchColumns that are not supported by options are transferred.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    removeCustomRecords(optionCheck: FetchOptions): Promise<void>;
    /**
     * 根据[PhotoAssetCustomRecord](#photoassetcustomrecord20)中的fileId给数据库中对应数据的shareCount加1。使用Promise异步回调。
     *
     * @param { Array<int> } ids - [PhotoAssetCustomRecord]{@link photoAccessHelper.PhotoAssetCustomRecord}中的fileId集合。
     * @returns { Promise<Array<int>> } 更新失败的自定义用户统计行为数据中的fileId。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     *     <br>1. The ids list is empty. 2. The number of ids lists exceeds 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    addShareCount(ids: Array<int>): Promise<Array<int>>;
    /**
     * 根据[PhotoAssetCustomRecord](#photoassetcustomrecord20)中的fileId给数据库中对应数据的LcdJumpCount加1。使用Promise异步回调。
     *
     * @param { Array<int> } ids - [PhotoAssetCustomRecord]{@link photoAccessHelper.PhotoAssetCustomRecord}中的fileId集合。
     * @returns { Promise<Array<int>> } 更新失败的自定义用户统计行为数据中的fileId。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     *     <br>1. The ids list is empty.
     *     <br>2. The number of ids lists exceeds 500.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    addLcdJumpCount(ids: Array<int>): Promise<Array<int>>;
  }

  /**
   * 支持跨用户获取相册管理模块的实例，用于访问和修改相册中的媒体文件。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Context } context - 传入Ability实例的上下文。
   * @param { int } userId - 传入待访问用户的id。
   * @returns { PhotoAccessHelper } 相册管理模块的实例。
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Called by non-system application
   * @throws { BusinessError } 13900020 - Invalid argument
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @StageModelOnly
   * @since 19 dynamic
   */
  function getPhotoAccessHelper(context: Context, userId: int): PhotoAccessHelper;

  /**
   * 支持跨用户获取相册管理模块的实例，用于访问和修改相册中的媒体文件。
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Context } context - Context of the ability instance.
   * @param { int } userId - Target userId
   * @returns { PhotoAccessHelper | null } Instance of PhotoAccessHelper. if the operation fails, returns null.
   * @throws { BusinessError } 201 - Permission denied
   * @throws { BusinessError } 202 - Called by non-system application
   * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
   *     <br>1. userId is invalid.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 static
   */
  function getPhotoAccessHelper(context: Context, userId: int): PhotoAccessHelper | null;

  /**
   * 枚举，支持转换的图片格式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum SupportedImageFormat {
    /**
     * jpg格式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    AVFILE_FORMAT_JPG = 'jpg'
  }

  /**
   * 介绍退出PhotoPicker的上下文信息。可以在后续的发射中使用
   * 的PhotoPicker，以从上一个出口恢复状态。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 26.0.0 static
   */
  export class ContextRecoveryInfo {
    /**
     * 用户选择图片后，退出时的相册信息。
     * 
     * albumUri对应媒体库中相册的uri。
     * 
     * - 当上次在所有图片中选择时，albumUri为固定的"allPhotos"字符串。
     * - 当用户在搜索结果/文本推荐/头像推荐中完成选择退出时，不支持下次恢复现场，此时Picker返回的albumUri为空字符串。
     * 
     * 默认值为空字符串。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    albumUri: string;

    /**
     * 用户上次选择图片的宫格界面，左上角首张图片的时间。
     * 
     * - 按拍摄时间排序的相册，返回拍摄时间。
     * - 按保存时间排序的相册返回保存时间。默认为0。
   	 * 单位为： ms，取值应≥0。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    time: long;

    /**
     * 用户上次选择图片的宫格界面，左上角首张图片的文件名。默认为空字符串。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    displayName: string;

    /**
     * 用户上次选择时设置的推荐内容枚举值，参考[RecommendationType]{@link photoAccessHelper.RecommendationType}值定义。
     * 
     * 上次选择时未设置推荐时，默认为0。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    recommendationType: int;

    /**
     * 用户上次选择时选中的推荐内容枚举值，参考[RecommendationType]{@link photoAccessHelper.RecommendationType}值定义。
     * 
     * 当上次选择未选中推荐项，选中"全部"时，默认为0。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    selectedRecommendationType: int;

    /**
     * 现场数据版本号，用于校验现场信息数据与现场恢复能力的匹配度。
     * 
     * 版本号必须大于等于1.0。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    version: int;

    /**
     * 用户上次退出宫格时的档位。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    gridLevel?: GridLevel;

    /**
     * 用户上次选择图片的宫格界面的排序规则，默认为空字符串。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    sortRule?: string;

    /**
     * 用户上次选择图片的宫格界面中，左上角首张图片的文件大小，默认为0。
     * 单位为： Byte，取值应为≥0的整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    fileSize?: int;
  }

  /**
   * 用于表示允许的数据字段类型，接口参数的具体类型根据其功能而定。
   *
   * @unionmember { int } 表示值类型为数字，可取整型。
   * @unionmember { long } 表示值类型为数字，可取长整型。
   * @unionmember { double } 表示值类型为数字，可取小数。
   * @unionmember { string } 表示值类型为字符串。
   * @unionmember { boolean } 表示值类型为布尔值。
   * @unionmember { Uint8Array } 表示值类型为Uint8类型的数组。
   * @unionmember { null } 表示值类型为空。
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  type ValueType = int | long | double | string | boolean | Uint8Array | null;

  /**
   * 用于存储键值对的类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  type ValuesBucket = Record<string, ValueType>;

  /**
   * 提供通过查询数据库生成的数据库结果集的访问方法。
   * 
   * 下列API示例中，需先使用[query]{@link photoAccessHelper.PhotoAccessHelper.query}方法获取ResultSet实例，再调用对应方法。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  class ResultSet {
    /**
     * 获取结果集的列数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    columnCount: int;
    /**
     * 获取结果集的行数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rowCount: int;
    /**
     * 获取结果集的当前行索引。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rowIndex: int;
    /**
     * 检查游标是否位于最后一行。true表示位于最后一行，false表示不位于最后一行。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    isAtLastRow: boolean;
    /**
     * 转到结果集的指定行。
     *
     * @param { int } position - 指定行的索引，从0开始。取值范围为0到结果集行数减1。
     * @returns { boolean } 如果成功转到结果集的指定行，则为true；否则返回false。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes: position invalid.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    goToRow(position: int): boolean;
    /**
     * 转到结果集的第一行。
     *
     * @returns { boolean } 如果成功转到结果集的第一行，则为true；否则返回false。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    goToFirstRow(): boolean;
    /**
     * 转到结果集的下一行。
     *
     * @returns { boolean } 如果成功转到结果集的下一行，则为true；否则返回false。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    goToNextRow(): boolean;
    /**
     * 获取指定行的所有列值。
     *
     * @returns { ValuesBucket } 返回指定行的值。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getRow(): ValuesBucket;
    /**
     * 获取当前行中指定列的值。
     *
     * @param { int } columnIndex - 指定的列索引，从0开始。取值范围为0到结果集列数减1。
     * @returns { ValueType } 表示允许的数据字段类型。
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes: columnIndex invalid.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    getValue(columnIndex: int): ValueType;
    /**
     * 关闭结果集，若不关闭可能会引起内存泄漏。
     *
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    close(): void;
  }

  /**
   * Smartlabel类型字段名
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum FieldType {
    /**
     * 默认类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NONE = 0,
    /**
     * 人员类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ANALYSIS_PEOPLE = 1,
    /**
     * 标签类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ANALYSIS_LABEL = 2,
    /**
     * 地点类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ANALYSIS_CITY = 3,
    /**
     * 年类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    YEAR = 4,
    /**
     * 年月类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MONTH = 5,
    /**
     * 天类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DAY = 6,
    /**
     * 假期类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    HOLIDAY = 7,
    /**
     * 媒体类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MEDIA_TYPE = 8
  }

  /**
   * 随机类型
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum RankingMethod {
    /**
     * 默认值
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RANDOM_VOTE = 0
  }

  /**
   * 枚举，用于标识文件记忆链接的状态信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum AppLinkState {
    /**
     * 无法确定文件是否具有记忆链接标记。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT = 0,

    /**
     * 文件无记忆链接标记。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    HAS_NO_LINK = 1,

    /**
     * 文件具有记忆链接标记。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    HAS_LINK = 2
  }

  /**
    * 枚举，根据配置的资产兼容性执行转码。
    *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum PreferredCompatibleMode {
    /**
     * 根据配置的资产兼容性功能执行转码。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DEFAULT = 0,

    /**
     * 不进行转码。资产将以其原始格式返回。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CURRENT = 1,

    /**
     * 所有资产都被转码为最广泛兼容的格式(如JPEG)。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    COMPATIBLE = 2
  }

  /**
   * 用户输入的字段类型
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ContextMap {
    /**
     * 用户输入的字段类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    topicField: FieldType[];
  }

  /**
   * 可选参数
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface Options {

    /**
     * 随机类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    rankingMethod?: RankingMethod;
    /**
     * 推荐返回数量
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    recommendationCount?: int;
    /**
     * 指定返回的标签类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    suggestionFields?: FieldType[];
  }

  /**
   * 标签返回结构
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface Entity {
    /**
     * 返回的标签ID
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    id: string;

    /**
     * 返回的标签名
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    name: string;

    /**
     * 返回的标签名
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    field: FieldType;

    /**
     * 标签别名
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    alias: string[];
  }

  /**
   * 资产兼容能力。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface AssetCompatibleCapability {
    /**
     * 是否支持启用高分辨率资产。true表示支持，false表示不支持。
     * 
     * **原子化服务API:** 从API version 24开始，该接口支持在原子化服务中使用。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    supportedHighResolution: boolean;

    /**
     * 支持MIME types的类型。
     * 
     * - 配置image/heic表示应用支持heif格式。
     * - 配置image/jpeg表示应用仅支持jpeg格式不支持heif格式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    supportedMimeType?: Array<string>;
  }

  /**
   * 搜索推荐词类型
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum SearchSuggestionType {
    /**
     * 时间+地点+标签场景
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_GEO_LABEL = 0,

    /**
     * 时间 + 地点场景
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_GEO = 1,

    /**
     * 时间 + 标签场景
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_LABEL = 2,

    /**
     * 时间 + 人物 + 地点 + 标签场景
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_PEOPLE_GEO_LABEL = 3,

    /**
     * 时间 + 人物 + 地点
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_PEOPLE_GEO = 4,

    /**
     * 时间 + 人物 + 地点
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_PEOPLE_LABEL = 5,

    /**
     * 时间 + 人物
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_PEOPLE = 6
  }

  /**
   * 搜索推荐词结果
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SearchSuggestionResult {
    /**
     * 搜索推荐词类型
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    type: SearchSuggestionType;

    /**
     * 搜索推荐词结果
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    value: string;

    /**
     * 搜索推荐词场景的照片数量
     * 取值范围为全体整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    count: int;
  }

  /**
   * 支持的MIME类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  class KnowledgeContent {
    /**
     * 返回Smartlabel推荐标签
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } topic - Searching topic string.
     * @param { ContextMap } context - Context Map indicates topic filed.
     * @param { Options } [option] - Options for getRelatedEntity.
     * @returns { Promise<Entity[]> } 返回推荐标签内容
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by nonsystem application
     * @throws { BusinessError } 13900020 - Parameter error. Possible causes:
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    static getRelatedEntity (topic: string, context: ContextMap, option?: Options): Promise<Entity[]>;

    /**
     * 获取搜索推荐词
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<SearchSuggestionType> } searchSuggestionTypes - 搜索推荐词场景类型列表
     *     <br>最大长度为7且不能为空。
     *     <br>The maximum length is 7 and cannot be empty.
     * @returns { Promise<Array<SearchSuggestionResult>> } 搜索推荐词结果
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by nonsystem application
     * @throws { BusinessError } 23800151 - Scenario parameters fail to pass the verification.Possible causes:
     *     <br>1. The searchSuggestionTypes list is empty.
     *     <br>2. The searchSuggestionTypes error.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:
     *     <br>1. Database corrupted;
     *     <br>2. The file system is abnormal;
     *     <br>3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    static getSearchSuggestion( searchSuggestionTypes: Array<SearchSuggestionType>): Promise<Array<SearchSuggestionResult>>;

    /**
     * 根据提供的查询搜索媒资。该接口使用promise返回结果。
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { SearchQuery } query - 搜索查询配置。
     * @returns { Promise<SearchResult> } Promise用于返回包含匹配资产的搜索结果。
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Invalid input data format.
     *     <br>2. The length of **queryString** or **param** in **SearchQuery** exceeds 16KB.
     * @throws { BusinessError } 23800301 - Internal system error. Possible causes:
     *     <br>1. IPC timeout;
     *     <br>2. System exception.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    static getSearchResult(query: SearchQuery): Promise<SearchResult>;
  }

  /**
   * 子弹时间状态枚举
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum LivePhoto4dStatus {
    /**
     * 未被检测的资产
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    UNIDENTIFIED = 0,
    /**
     * 动态不支持子弹时间
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    UNSUPPORTED = 1,
    /**
     * 该动图支持生成子弹时刻
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    SUPPORTED = 2,
    /**
     * 该动图已经生成了子弹时间
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    USED = 3,
    /**
     * 该动图本身是子弹时间
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LIVEPHOTO_4D = 4
  }

  /**
   * 资产分析配置。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AnalysisConfig {
    /**
     * 智慧分析类型数组，数组大小上限为[AnalysisType]{@link photoAccessHelper.AnalysisType}枚举定义成员数量。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    types: AnalysisType[];

    /**
     * 资产URI数组。
     * 
     * 长度范围：[0, 100]。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    uris: string[];

    /**
     * JSON字符串格式的扩展信息。
     * 
     * 长度范围：(0, 500]。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    extraInfos?: string;
  }

  /**
   * 资产分析结果信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AnalysisResult {
    /**
     * 资产分析的结果码。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    result: int;
  }

  /**
   * 媒体库可用性信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface MediaLibraryAvailability {
    /**
     * 媒体库可用性状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    availabilityStatus: AvailabilityStatus;
    /**
     * 媒体库不可用原因，例如"Database corrupted"。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    unavailabilityReason: string;
  }

  /**
   * 枚举，媒体库可用性状态。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AvailabilityStatus {
    /**
     * 媒体库可用。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    AVAILABLE = 'available',
    /**
     * 媒体库不可用。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNAVAILABLE = 'unavailable'
  }

  /**
   * 枚举，媒体库资产读权限状态。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum MediaAssetPermissionState {
    /**
     * URI格式错误或非媒体库URI。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    URI_FORMAT_ERROR = 0,
    /**
     * 资产不存在。资产可能被隐藏、放入回收站或被永久删除。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FILE_NOT_EXIST = 1,
    /**
     * 应用在获取资产时有读权限。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    READ_PERMISSION = 2,
    /**
     * 应用在获取资产时没有读权限。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NO_READ_PERMISSION = 3
  }

  /**
   * 枚举，相册的属性类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AlbumAttribute {
    /**
     * 相册昵称。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NICK_NAME_ATTR = 'nickname',
    /**
     * 相册扩展信息操作属性。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EXTRA_INFO_ATTR = 'extra_info',
    /**
     * 相册是否已删除。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    IS_REMOVED_ATTR = 'is_removed',
    /**
     * 相册friend_id操作属性。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    FRIEND_ID_ATTR = 'friend_id'
  }

  /**
   * 枚举，设置相册属性的操作类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AlbumOperationType {
    /**
     * 对相册属性的新增操作。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ADD = 'add',
    /**
     * 对相册属性的移除操作。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    REMOVE = 'remove',
    /**
     * 对相册属性的更新操作。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UPDATE = 'update'
  }

  /**
   * 相册操作信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AlbumOperation {
    /**
     * 设置相册的属性类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    attr: AlbumAttribute;
    /**
     * 设置相册属性的操作类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    type: AlbumOperationType;
    /**
     * 设置相册属性的字符串参数。数组最大长度为20；数组中的每个字符串长度不超过500个字符。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    values: string[];
  }

  /**
   * 相册属性信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AlbumAttributeInfo {
    /**
     * 相册属性值。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    attrValue?: string;
  }

  /**
   * 表示深度优化存储空间的状态类型的枚举。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum DeepOptimizeState {
    /**
     * 深度优化存储空间正在进行。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RUNNING = 0,

    /**
     * 深度优化存储空间成功完成。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMPLETED = 1,

    /**
     * 深度优化存储空间失败。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FAILED = 2,

    /**
     * 深度优化存储空间已停止。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STOPPED = 3,

    /**
     * 深度优化存储空间被中断。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    INTERRUPTED = 4
  }

  /**
   * 深度优化存储空间的进度信息。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface DeepOptimizeSpaceProgress {
    /**
     * 当前深度优化状态。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: DeepOptimizeState;
    /**
     * 深度优化进度百分比。取值范围为[0, 100]。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    progress: int;
  }

  /**
   * 枚举智慧分析工具类型。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  export enum AnalysisToolType {
    /**
     * 默认工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    ANALYSIS_BASE_TOOL_TYPE = 0,
    /**
     * 图片检索工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    IMAGE_RETRIEVAL_TOOL_TYPE = 1,
    /**
     * 负向过滤工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    NEGATIVE_FILTER_TOOL_TYPE = 2,
    /**
     * 人脸识别工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    FACE_RECOGNITION_TOOL_TYPE = 3,
    /**
     * 批量相似度选择工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    BATCH_SIMILARITY_SELECTION_TOOL_TYPE = 4,
    /**
     * 平衡选材工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    BALANCED_SELECTION_TOOL_TYPE = 5,
    /**
     * 封面优选工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    COVER_GRID_SELECTION_TOOL_TYPE = 6,
    /**
     * 时刻工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    HIGHLIGHT_TOOL_TYPE = 7,
    /**
     * 搜索工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SEARCH_TOOL_TYPE = 8,
    /**
     * 精选场景工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SELECTION_TOOL_TYPE = 9,
    /**
     * 人像相册工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    PORTRAIT_ALBUM_TOOL_TYPE = 10,
    /**
     * 分类相册工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    CLASSIFY_ALBUM_TOOL_TYPE = 11,
    /**
     * 相似性清理工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    SIMILARITY_CLEANING_TOOL_TYPE = 12,
    /**
     * 编辑推荐工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    EDIT_RECOMMENDATION_TOOL_TYPE = 13,
    /**
     * AI搜索工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    AI_SEARCH_TOOL_TYPE = 14
  }

  /**
   * 枚举选择器颜色模式。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic&static
   */
  export declare enum PickerColorMode {
    /**
     * 与系统相同。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    AUTO = 0,

    /**
     * 浅色模式。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    LIGHT = 1,

    /**
     * 深色模式
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.1.0 dynamic&static
     */
    DARK = 2
  }

  /**
   * 调用分析工具的配置。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface ToolInvokeConfig {
    /**
     * 调用的分析工具类型。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    type: AnalysisToolType;
    /**
     * 可选附加参数。
     * 最大长度为5000且不能为空。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    param?: string;
  }

  /**
   * 分析工具执行的结果。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface AnalysisToolResult {
    /**
     * 工具执行错误码。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    errCode: int;
    /**
     * 工具执行结果。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    result?: string;
  }

  /**
   * 取消分析工具的配置。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface ToolCancelConfig {
    /**
     * 要停止的任务ID。
     * 最大长度为100且不能为空。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    taskId: string;
    /**
     * 可选附加参数。
     * 最大长度为500且不能为空。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    param?: string;
  }

  /**
   * 搜索资产的查询配置。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface SearchQuery {
    /**
     * 由用户输入的LLM分析生成的查询字符串。
     * 最大长度为1000且不能为空。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    queryString: string;
    /**
     * 分页偏移量。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    offset: int;
    /**
     * 每个查询要返回的结果数。
     * 取值限定为整数。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    size: int;
  }

  /**
   * 搜索查询的结果。
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  interface SearchResult {
    /**
     * 与搜索查询匹配的uri列表。
     * 最大长度为5000且不能为空。
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    results: string[];
  }
}

export default photoAccessHelper;