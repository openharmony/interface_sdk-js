
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
 * @file Helper functions to access image and video assets
 * @kit MediaLibraryKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type Context from './application/Context';
import type image from './@ohos.multimedia.image';
import type dataSharePredicates from './@ohos.data.dataSharePredicates';
import type { CustomColors } from './@ohos.arkui.theme';

/**
 * The module provides APIs for album management, including creating an album and accessing and modifying media data in 
 * an album.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @crossplatform [since 12]
 * @atomicservice [since 11]
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace photoAccessHelper {
  /**
   * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
   *
   * @param { Context } context - Context of the ability instance.
   * @returns { PhotoAccessHelper } PhotoAccessHelper instance obtained.
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
   * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
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
   * Obtains a PhotoAccessHelper instance for the specified user, letting you access and modify media files in an album.
   *
   * @permission ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS
   * @param { Context } context - Context of the ability instance.
   * @param { int } userId - ID of the user.
   * @returns { PhotoAccessHelper } PhotoAccessHelper instance obtained.
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
   * Obtains a PhotoAccessHelper instance for accessing and modifying media files in the album.
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
   * Enumerates the supported image formats.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum SupportedImageFormat {
    /**
     * jpg format
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    AVFILE_FORMAT_JPG = 'jpg',
  }

  /**
   * Describes the information about the context of exiting the PhotoPicker. It can be used during the subsequent launch
   * of the PhotoPicker to restore the state from the previous exit.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   * @since 26.0.0 static
   */
  export class ContextRecoveryInfo {
    /**
     * URI of the album in the media library when the user selects an image and exits.
     * 
     * - If the user selects from all images, **albumUri** is a fixed **"allPhotos"** string.
     * - If the user exits after selecting from search results, text recommendations, or avatar recommendations, the 
     * next restoration is not supported, and the returned **albumUri** is an empty string.
     * 
     * The default value is an empty string.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    albumUri: string;

    /**
     * Time of the top-left image in the grid interface when the user last selected an image.
     * 
     * - For albums sorted by capture time, the capture time is returned.
     * - For albums sorted by save time, the save time is returned. The default value is **0**.
     *
     * Unit: ms, The value must be greater than or equal to 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    time: long;

    /**
     * File name of the top-left image in the grid interface when the user last selected an image. The default value is 
     * an empty string.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    displayName: string;

    /**
     * Enumerated value of the recommended content set by the user during the last selection. For details, see 
     * [RecommendationType]{@link @ohos.file.photoAccessHelper:photoAccessHelper.RecommendationType}.
     * 
     * If no recommendation was set during the last selection, the default value is **0**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    recommendationType: int;

    /**
     * Enumerated value of the recommended content selected by the user during the last selection. For details, see 
     * [RecommendationType]{@link @ohos.file.photoAccessHelper:photoAccessHelper.RecommendationType}.
     * 
     * If no recommendation was selected during the last selection or **All** was selected, the default value is **0**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    selectedRecommendationType: int;

    /**
     * Version number of the state data, used to verify the compatibility of the state information data with the state 
     * recovery capability.
     * 
     * The version number must be greater than or equal to 1.0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    version: int;

    /**
     * Level of the grid when the user exits last time.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    gridLevel?: GridLevel;

    /**
     * Sorting rule of the grid interface when the user last selected an image. The default value is an empty string.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    sortRule?: string;

    /**
     * File size of the top-left image in the grid interface when the user last selected an image. The default value is 
     * **0**.
     * Unit: Byte, The value must be an integer greater than or equal to 0.
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
   * Enumerates the media file types.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  enum PhotoType {
    /**
     * Image.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    IMAGE = 1,
    /**
     * Video.
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
   * Enumerates the [PhotoAsset]{@link photoAccessHelper.PhotoAsset} types.
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
     * Photo, which is the default type.
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
     * Screenshot and screen recording file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SCREENSHOT = 1,
    /**
     * Moving photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    MOVING_PHOTO = 3,
    /**
     * Burst photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    BURST = 4,
    /**
     * Slow-motion video file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    SLOW_MOTION_VIDEO = 6,
    /**
     * Video file using the 3D Gaussian Splatting (3DGS) rendering format.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    SPATIAL_3DGS = 7,
  }

  /**
   * Enumerates the dynamic range types of media assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 12 dynamic
   * @since 23 static
   */
  export enum DynamicRangeType {
    /**
     * Standard dynamic range (SDR).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    SDR = 0,
    /**
     * High dynamic range (HDR).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    HDR = 1
  }

  /**
   * Enumerates the visibility statuses of thumbnails.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum ThumbnailVisibility {
    /**
     * Unable to access thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    INVISIBLE = 0,
    /**
     * able to access thumbnail
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    VISIBLE = 1
  }

  /**
   * Enumerates the file locations.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi [since 10 - 15]
   * @publicapi [since 16]
   * @since 10 dynamic
   * @since 23 static
   */
  enum PositionType {
    /**
     * Stored only on a local device.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 10 - 15]
     * @publicapi [since 16]
     * @since 10 dynamic
     * @since 23 static
     */
    LOCAL = 1,
    /**
     * Stored only on the cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 10 - 15]
     * @publicapi [since 16]
     * @since 10 dynamic
     * @since 23 static
     */
    CLOUD = 2,
    /**
     * Stored both on a local device and cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 16 dynamic
     * @since 23 static
     */
    LOCAL_AND_CLOUD = 3
  }

  /**
   * Enumerates the smart analysis types.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum AnalysisType {
    /**
     * Aesthetics score.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_AESTHETICS_SCORE = 0,
    /**
     * Label.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_LABEL = 1,
    /**
     * Optical character recognition (OCR) analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_OCR = 2,
    /**
     * Facial detection analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_FACE = 3,
    /**
     * Object detection analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_OBJECT = 4,
    /**
     * Recommendation analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_RECOMMENDATION = 5,
    /**
     * Segmentation analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_SEGMENTATION = 6,
    /**
     * Aesthetic composition analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_COMPOSITION = 7,
    /**
     * Salience analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_SALIENCY = 8,
    /**
     * Detailed address analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ANALYSIS_DETAIL_ADDRESS = 9,
    /**
     * Face clustering analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_HUMAN_FACE_TAG = 10,
    /**
     * Analysis of the position of a person's or pet's head.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_HEAD_POSITION = 11,
    /**
     * Analysis of the position of skeletal elements (bones) in a human body.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_BONE_POSE = 12,
    /**
     * Video label analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_VIDEO_LABEL = 13,
    /**
     * Highlight label.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_HIGHLIGHT = 14,
    /**
     * Label for 2D panning detection boxes.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ANALYSIS_MULTI_CROP = 15,
    /**
     * Foreground index analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    ANALYSIS_SEARCH_INDEX = 16,
    /**
     * Preferred analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALYSIS_SELECTED = 17,
    /**
     * Repetition and similarity analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALYSIS_DUPLICATE_SIMILARITY = 18,
    /**
     * Negative emotion analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALYSIS_NEGATIVE_EMOTION = 19,
    /**
     * Facial aesthetics analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALYSIS_FACE_AESTHETICS = 20,
    /**
     * Magic emoji analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALYSIS_MAGIC_EMOJI = 21,
    /**
     * AI editing analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    ANALYSIS_AI_EDIT = 22
  }

  /**
   * Defines the asset analysis configuration.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AnalysisConfig {
    /**
     * Array of intelligent analysis types. The maximum size of the array is the number of members defined by the 
     * [AnalysisType]{@link photoAccessHelper.AnalysisType} enum.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    types: AnalysisType[];

    /**
     * Asset URI array.
     * 
     * Length range: [0, 100].
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    uris: string[];

    /**
     * Extended information in JSON string format.
     * 
     * Length range: (0, 500].
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    extraInfos?: string;
  }

  /**
   * Defines the asset analysis result.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  interface AnalysisResult {
    /**
     * Result code of asset analysis.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    result: int;
  }

  /**
   * Enumerates the types of recommended images.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 26.0.0 static
   */
  enum RecommendationType {
    /**
     * QR code or barcode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    QR_OR_BAR_CODE = 1,

    /**
     * QR code.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    QR_CODE = 2,

    /**
     * Barcode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    BAR_CODE = 3,

    /**
     * ID card.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    ID_CARD = 4,

    /**
     * Profile.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    PROFILE_PICTURE = 5,

    /**
     * Passport.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    PASSPORT = 6,

    /**
     * Bank card.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    BANK_CARD = 7,

    /**
     * Driver license.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    DRIVER_LICENSE = 8,

    /**
     * Vehicle license.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    DRIVING_LICENSE = 9,

    /**
     * Recommended portrait.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    FEATURED_SINGLE_PORTRAIT = 10,

    /**
     * Recommended style.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 26.0.0 static
     */
    COLOR_STYLE_PHOTO = 12,

    /**
     * Cat images will be recommended.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    CAT = 13,

    /**
     * Dog images will be recommended.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    DOG = 14,

    /**
     * Architecture images will be recommended.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    ARCHITECTURE = 15,

    /**
     * Landscape images will be recommended.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    LANDSCAPE = 16,

    /**
     * Images generated using the 3D Gaussian technology will be recommended.
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
   * Enumerates the asset delivery modes.
   * 
   * These modes are used for segmented photo or video delivery. If the device does not support segmentation, the three 
   * delivery modes below work the same way and just return the requested image or video directly. The request result is
   * returned through the 
   * [onDataPrepared]{@link @ohos.file.photoAccessHelper:photoAccessHelper.MediaAssetDataHandler.onDataPrepared(data: T, map?: Map<string, string>)}
   * callback.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11 dynamic
   * @since 23 static
   */
  enum DeliveryMode {
    /**
     * Fast mode.
     * 
     * For segmented photo or video delivery, if a high-quality version is available, it quickly returns the callback 
     * for that high-quality version. If only a low-quality version is available, it returns the callback for the low-
     * quality version right away.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    FAST_MODE = 0,

    /**
     * High-quality mode.
     * 
     * For segmented photo or video delivery, if a high-quality version is available, it quickly returns the callback 
     * for that high-quality version. If only a low-quality version is available, it starts a task to generate a high-
     * quality version and returns the callback for the high-quality version once that version is ready.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    HIGH_QUALITY_MODE = 1,

    /**
     * Balance mode.
     * 
     * - For segmented photo delivery, if a high-quality version is available, it quickly returns the callback for that 
     * high-quality version. If only a low-quality version is available, it returns the callback for the low-quality 
     * version, starts a task to generate a high-quality version, and returns the callback for the high-quality version 
     * once that version is ready.
     * - For segmented video delivery, if a high-quality version is available, it quickly returns the callback for that 
     * high-quality version. If only a low-quality version is available, it returns the callback for the low-quality 
     * version right away.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    BALANCE_MODE = 2
  }

  /**
   * Enumerates the compatible modes.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 15 dynamic
   * @since 23 static
   */
  enum CompatibleMode {
    /**
     * Maintains the original video format.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    ORIGINAL_FORMAT_MODE = 0,

    /**
     * Converts the HDR content to SDR format.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    COMPATIBLE_FORMAT_MODE = 1
  }

  /**
   * **MediaAssetProgressHandler** is used to obtain the media asset processing progress from **onProgress()**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 15 dynamic
   * @since 23 static
   */
  interface MediaAssetProgressHandler {
    /**
     * Called when the progress of the requested video is returned.
     *
     * @param { int } progress - Progress in percentage. <br>Value range: [0, 100]
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    onProgress(progress: int): void;
  }

  /**
   * Enumerates the types of the file to read.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum SourceMode {
    /**
     * Original file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ORIGINAL_MODE = 0,

    /**
     * Edited file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    EDITED_MODE = 1
  }

  /**
   * Enumerates the types of permissions for accessing media assets.
   * 
   * The permissions include temporary read permission and persistent read permission. The temporary read permission 
   * will be removed when the application is dead, while the persistent read permission will not.
   * 
   * For the same media asset and application, the persistent read permission overwrites the temporary read permission. 
   * The temporary read permission does not overwrite the persistent read permission.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum PhotoPermissionType {
    /**
     * Temporary read permission.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    TEMPORARY_READ_IMAGEVIDEO = 0,

    /**
     * Persistent read permission.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PERSISTENT_READ_IMAGEVIDEO = 1
  }

  /**
   * Enumerates the types of data masking applied to media resources when accessed by an application.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum HideSensitiveType {
    /**
     * Masks geographic location and capture parameters.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIDE_LOCATION_AND_SHOOTING_PARAM = 0,

    /**
     * Masks geographic location information only.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIDE_LOCATION_ONLY = 1,

    /**
     * Masks capture parameters only.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIDE_SHOOTING_PARAM_ONLY = 2,

    /**
     * No data masking is applied.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    NO_HIDE_SENSITIVE_TYPE = 3,

    /**
     * Applies data masking based on the 
     * [ohos.permission.MEDIA_LOCATION](docroot://security/AccessToken/permissions-for-all-user.md#ohospermissionmedia_location)
     * permission. The specifications are as follows:
     * 
     * - If this permission is available, no masking is applied.
     * - If this permission is unavailable, geographic location is masked.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    DEFAULT = 4,
  }

  /**
   * Enumerates the authorization modes.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum AuthorizationMode {
    /**
     * Temporary authorization.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SHORT_TIME_AUTHORIZATION = 0
  }

  /**
   * Enumerates the watermark editable flags.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum WatermarkType {
    /**
     * Watermarks are not editable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * Brand and common watermarks are editable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    BRAND_COMMON = 1,

    /**
     * Common watermarks are editable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    COMMON = 2,

    /**
     * Brand watermarks are editable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    BRAND = 3,
  }

  /**
   * Enumerates the text displayed on the complete button.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   * @since 26.0.0 static
   */
  enum CompleteButtonText {
    /**
     * The text "Done" is displayed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 26.0.0 static
     */
    TEXT_DONE = 0,
    /**
     * The text "Send" is displayed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 26.0.0 static
     */
    TEXT_SEND = 1,

    /**
     * The text "Add" is displayed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 26.0.0 static
     */
    TEXT_ADD = 2,
  }

  /**
   * Enumerates the display modes available for a composite image.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  enum CompositeDisplayMode {
    /**
     * Displays the original composite image.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    DEFAULT = 0,
 
    /**
     * Displays the cloud-enhanced composite image.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    CLOUD_ENHANCEMENT = 1,
  }

  /**
   * Represents request options.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface RequestOptions {
    /**
     * Delivery mode of the requested asset. The value can be **FAST_MODE**, **HIGH_QUALITY_MODE**, or **BALANCE_MODE**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     * @since 23 static
     */
    deliveryMode: DeliveryMode;

    /**
     * Type of the asset file requested, which can be the original file or edited file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    sourceMode?: SourceMode;

    /**
     * HDR video transcoding policy, which can be **FAST_ORIGINAL_FORMAT_MODE** (maintaining the original HDR format) or
     * **COMPATIBLE_FORMAT_MODE** (converting HDR content to SDR format). The default value is 
     * **FAST_ORIGINAL_FORMAT_MODE**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    compatibleMode?: CompatibleMode;

    /**
     * Callback used to return the HDR-to-SDR conversion progress.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 15 dynamic
     * @since 23 static
     */
    mediaAssetProgressHandler?: MediaAssetProgressHandler;
  }

  /**
   * MediaAssetDataHandler is a media asset handler used to customize the media asset processing logic in 
   * **onDataPrepared**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11 dynamic
   * @since 23 static
   */
  interface MediaAssetDataHandler<T> {
    /**
     * Called when the requested media asset is ready. If an error occurs, **data** returned by the callback is 
     * **undefined**. Each media asset request corresponds to a callback.
     * 
     * T supports the following data types: ArrayBuffer, [ImageSource]{@link @ohos.multimedia.image:image.ImageSource}, 
     * [MovingPhoto]{@link @ohos.file.photoAccessHelper:photoAccessHelper}, and boolean. ArrayBuffer indicates the image
     * or video asset data, [ImageSource]{@link @ohos.multimedia.image:image.ImageSource} indicates the image source, 
     * [MovingPhoto]{@link @ohos.file.photoAccessHelper:photoAccessHelper} indicates a moving photo object, and boolean 
     * indicates whether the image or video is successfully written to the application sandbox directory.
     * 
     * Information returned by **map**:
     * 
     * | Map Key | Description|
     * |----------|-------|
     * | 'quality'  | Image quality. The value **high** means high quality, and **low** means poor quality.|
     *
     * @param { T } data - Data of the image asset that is ready. It is of the generic type and supports the following
     *     data types: ArrayBuffer, [ImageSource]{@link @ohos.multimedia.image:image.ImageSource},
     *     [MovingPhoto]{@link @ohos.file.photoAccessHelper:photoAccessHelper}, and boolean.
     * @param { Map<string, string> } [map] - Additional information about the image asset, such as the image quality.
     *     Currently, only **quality** is supported. [since 12]
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     */
    onDataPrepared(data: T, map?: Map<string, string>): void;

    /**
     * Indicates required media asset data is prepared
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
   * QuickImageDataHandler is a media asset handler used to customize the media asset processing logic in 
   * **onDataPrepared**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 13 dynamic
   * @since 23 static
   */
  interface QuickImageDataHandler<T> {
    /**
     * Called when the requested image is ready. If an error occurs, **data** returned by the callback is **undefined**.
     * 
     * Information returned by **map**:
     * 
     * | Map Key | **Description**|
     * |----------|-------|
     * | 'quality'  | Image quality. The value **high** means high quality, and **low** means poor quality.|
     *
     * @param { T } data - Data of the image asset that is ready. It is of the generic type and supports the
     *     [Picture]{@link @ohos.multimedia.image:image.Picture} type.
     * @param { image.ImageSource } imageSource - Data of the image asset that is ready.
     * @param { Map<string, string> } map - Additional information about the image asset, such as the image quality.
     *     Currently, only **quality** is supported.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     */
    onDataPrepared(data: T, imageSource: image.ImageSource, map: Map<string, string>): void;

   /**
     * Indicates required media asset data quickly is prepared
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
   * Photo proxy object, which is used by the camera application to write image data.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface PhotoProxy {}

  /**
   * The MediaAssetManager class is used for manipulating the read and write operations of media assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice [since 14]
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAssetManager {
    /**
     * Requests an image. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { MediaAssetDataHandler<image.ImageSource> } dataHandler - Media asset handler, which invokes a callback
     *     to return the image when the requested image is ready.
     * @returns { Promise<string> } Promise used to return the request ID, which can be used in
     *     [cancelRequest]{@link photoAccessHelper.MediaAssetManager.cancelRequest} to cancel a request.
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
     * Requests an image quickly. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { QuickImageDataHandler<image.Picture> } dataHandler - Media asset handler, which invokes a callback to
     *     return the image when the requested image is ready.
     * @returns { Promise<string> } Promise used to return the request ID, which can be used in
     *     [cancelRequest]{@link photoAccessHelper.MediaAssetManager.cancelRequest} to cancel a request.
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
     * Requests image data. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { MediaAssetDataHandler<ArrayBuffer> } dataHandler - Media asset handler, which invokes a callback to
     *     return the image when the requested image is ready.
     * @returns { Promise<string> } Promise used to return the request ID, which can be used in
     *     [cancelRequest]{@link photoAccessHelper.MediaAssetManager.cancelRequest} to cancel a request.
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
     * Requests a moving photo object, which can be used to request the asset data of the moving photo. This API uses a 
     * promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the image.
     * @param { MediaAssetDataHandler<MovingPhoto> } dataHandler - Media asset handler, which invokes a callback to
     *     return the image when the requested image is ready.
     * @returns { Promise<string> } Promise used to return the request ID, which can be used in
     *     [cancelRequest]{@link photoAccessHelper.MediaAssetManager.cancelRequest} to cancel a request.
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
     * Cancels a request for the asset, the callback of which has not been triggered yet. This API uses a promise to 
     * return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { string } requestId - ID of the request to cancel. It is a valid request ID returned by **requestImage**.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Requests a video and saves it to the specified sandbox directory. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoAsset } asset - Image to request.
     * @param { RequestOptions } requestOptions - Options for requesting the video asset.
     * @param { string } fileUri - URI of the sandbox directory, to which the requested video asset is to be saved.
     *     Example: **'file://com.example.temptest/data/storage/el2/base/haps/entry/files/test.mp4'**.
     * @param { MediaAssetDataHandler<boolean> } dataHandler - Media asset handler. When the requested video is written
     *     to the specified directory, a callback is triggered.
     *     <br>If the video is successfully written, **true** is returned. Otherwise, **false** is returned.
     * @returns { Promise<string> } Promise used to return the request ID, which can be used in
     *     [cancelRequest]{@link photoAccessHelper.MediaAssetManager.cancelRequest} to cancel a request.
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
     * Loads a moving photo in the application sandbox. This API uses a promise to return the result.
     *
     * @param { Context } context - AbilityContext or UIExtensionContext instance.
     * @param { string } imageFileUri - URI of the image file of the moving photo in the application sandbox.
     *     <br>Example: **'file://com.example.temptest/data/storage/el2/base/haps/ImageFile.jpg'**.
     * @param { string } videoFileUri - URI of the video file of the moving photo in the application sandbox.
     *     <br>Example: **'file://com.example.temptest/data/storage/el2/base/haps/VideoFile.mp4'**.
     * @returns { Promise<MovingPhoto> } Promise used to return the
     *     [MovingPhoto]{@link @ohos.file.photoAccessHelper:photoAccessHelper} instance.
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
   * progress info of batch operations.
   * 
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
  */
  interface Progress {
      /**
       * processed info of batch operations.
       * 
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
      */
      readonly processed: int;
 
      /**
       * remain info of batch operations.
       * 
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
      */
      readonly remain: int;
  }
 
  /**
   * ResultInfo info of batch operations.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
  */
  interface ResultInfo {
      /**
       * result code of batch operations.
       * 
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
      */
      readonly code: int;
 
      /**
       * result info of batch operations.
       * 
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
      */
      readonly result: Array<string|null>;
  }
 
  /**
   * for interrupting batch operations.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export class TaskSignal {
      /**
       * cancel batch operation.
       *
       * @permission ohos.permission.WRITE_IMAGEVIDEO
       * @throws {BusinessError } 201 - Permission denied
       * @throws { BusinessError } 202 - Called by non-system application.
       * @throws {BusinessError } 23800151 - The scenarioparameter verification fails. Possible causes:
       *     <br>1. No task can be canceled.
       * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
       *     <br>Possible causes: 1. Database corrupted; 2. Thefile system is abnormal; 3. The IPC request timedout.
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
      */
      cancel(): void;
  }
 
  /**
   * Batch operation options
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
  */
  interface BatchOperationOptions {
      /**
       * size progress of batch operations.
       *
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
      */
      sizeProgressListener?: ProgressListener;
 
      /**
       * count progress of batch operations.
       *
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
      */
      countProgressListener?: ProgressListener;
 
      /**
       * interrupting of batch operations.
       *
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
      */
      taskSignal?: TaskSignal;
 
      /**
       * the result of batch operations.
       *
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
      */
      resultListener?: ResultListener;
 
      /**
       * the mode of Automatic renaming.
       *
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @systemapi
       * @stagemodelonly
       * @since 26.0.0 dynamic&static
      */
      mode?: int;
  }
 
  /**
   * Indicates the type of the progress of batch operation.
   *
   * Progress callback, which can be the size or numberof files.
   *
   * @param { Progress } progress - progress info.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type ProgressListener = (progress: Progress) => void;
 
  /**
   * Indicates the type of the result of batch operation.
   *
   * @param { ResultInfo } result - result info.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type ResultListener = (result: ResultInfo) => void;

  /**
   * Defines the types of the PhotoAsset members.
   * 
   * The member types are the union of the types listed in the following table.
   *
   * @unionmember { int } The member value is an integer.
   * @unionmember { long } The member value is a long integer.
   * @unionmember { double } The member value is a decimal number.
   * @unionmember { string } The member value is any string.
   * @unionmember { boolean } The member value is true or false.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  type MemberType = int | long | double | string | boolean;

  /**
   * Defines the array of record types that map file property names to their values.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 21 dynamic
   * @since 23 static
   */
  type PhotoAssetParams = Record<string, MemberType>[];

  /**
   * PhotoAsset provides APIs for encapsulating file asset attributes.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PhotoAsset {
    /**
     * Media asset URI, for example, **file://media/Photo/1/IMG_datetime_0001/displayName.jpg**. For details, see 
     * [Media File URI](docroot://file-management/user-file-uri-intro.md#media-file-uri).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly uri: string;
    /**
     * Type of the file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly photoType: PhotoType;
    /**
     * File name, including the file name extension, to display. The string length ranges from 1 to 255.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly displayName: string;
    /**
     * Obtains a **PhotoAsset** member parameter.
     *
     * @param { string } member - Name of the member parameter to obtain. Except **'uri'**, **'media_type'**,
     *     **'subtype'**, and **'display_name'**, you need to pass in
     *     [PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys} in **fetchColumns**. For example,
     *     to obtain the title, pass in **fetchColumns: ['title']**.
     * @returns { MemberType } **PhotoAsset** member parameter obtained.
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
     * Sets a **PhotoAsset** member parameter.
     *
     * @param { string } member - Name of the member parameter to set, for example,
     *     [PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys}.TITLE. The string length ranges
     *     from 1 to 255.
     * @param { string } value - Value of the member parameter to set. Only the value of
     *     [PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys}.TITLE can be changed. The title
     *     must meet the following requirements:
     *     <br>- It must not contain a file name extension.
     *     <br>- The string length
     *     ranges from 1 to 255. (The asset file name is in the format of title + file name extension.)
     *     <br>- It must not contain any invalid characters, which are:\ / : * ? " ' ` < > | { } [ ]
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
     * Commits the modification on the file metadata to the database. This API uses an asynchronous callback to return 
     * the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Callback function. If the file metadata is modified successfully,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
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
     * Commits the modification on the file metadata to the database. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise that returns no value.
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
     * Opens this file asset. This API uses an asynchronous callback to return the result.
     * 
     * The returned FD must be closed when it is not required.
     * 
     * > **NOTE**
     * >
     * > This API is supported since API version 10 and deprecated since API version 11. For security purposes, the API 
     * > for obtaining the media file handle is no longer provided.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } mode - Mode for opening the file, which can be **'r'** (read-only), **'w'** (write-only), or
     *     **'rw'** (read/write).
     * @param { AsyncCallback<number> } callback - Callback used to return the file descriptor (FD) of the file opened.
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
     * Opens this file asset. This API uses a promise to return the result.
     * 
     * The returned FD must be closed when it is not required.
     * 
     * > **NOTE**
     * >
     * > This API is supported since API version 10 and deprecated since API version 11. For security purposes, the API 
     * > for obtaining the media file handle is no longer provided.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO or ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } mode - Mode for opening the file, which can be **'r'** (read-only), **'w'** (write-only), or
     *     **'rw'** (read/write).
     * @returns { Promise<number> } Promise used to return the FD of the file opened.
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
     * Opens this file in read-only mode. This API uses an asynchronous callback to return the result.
     * 
     * The returned FD must be closed when it is not required.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<number> } callback - Callback function. If the current file is opened successfully,
     *     **err** is **undefined**, and **data** is the file descriptor. Otherwise, **err** is an error object.
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
     * Opens this file in read-only mode. This API uses a promise to return the result.
     * 
     * The returned FD must be closed when it is not required.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<number> } Promise used to return the FD of the file opened.
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
     * Closes the current file. This API uses an asynchronous callback to return the result.
     *
     * @param { number } fd - FD of the file to close.
     * @param { AsyncCallback<void> } callback - Callback function. If the current file is closed successfully, **err**
     *     is **undefined**. Otherwise, **err** is an error object.
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
     * Closes the current file. This API uses a promise to return the result.
     *
     * @param { number } fd - FD of the file to close.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the thumbnail of a file. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback function. If the thumbnail of a file is successfully
     *     obtained, **err** is **undefined**, and **data** is the PixelMap of the thumbnail. Otherwise, **err** is an
     *     error object.
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
     * Obtains the file thumbnail of the given size. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } size - Size of the thumbnail.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback function. If the thumbnail of a file is successfully
     *     obtained, **err** is **undefined**, and **data** is the PixelMap of the thumbnail. Otherwise, **err** is an
     *     error object.
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
     * Obtains the file thumbnail of the given size. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { image.Size } [size] - Size of the thumbnail.
     * @returns { Promise<image.PixelMap> } Promise used to return the PixelMap of the thumbnail.
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
     * Obtains the ArrayBuffer of a file thumbnail by specifying its type. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { ThumbnailType } type - Type of the thumbnail.
     * @returns { Promise<ArrayBuffer> } Promise used to return the ArrayBuffer of the thumbnail.
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
     * Favorites or unfavorites this file asset. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } favoriteState - Whether to favorite the file asset. **true** to favorite, **false** otherwise.
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
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setFavorite
     */
    setFavorite(favoriteState: boolean, callback: AsyncCallback<void>): void;
    /**
     * Favorites or unfavorites this file asset. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } favoriteState - Whether to favorite the file asset. **true** to favorite, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets this file asset to the hidden state. This API uses an asynchronous callback to return the result.
     * 
     * Private files are stored in the private album. After obtaining private files from the private album, users can 
     * set **hiddenState** to **false** to remove them from the private album.
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
     * Sets this file asset to the hidden state. This API uses a promise to return the result.
     * 
     * Private files are stored in the private album. After obtaining private files from the private album, users can 
     * set **hiddenState** to **false** to remove them from the private album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } hiddenState - Whether to set a file to hidden state. **true** to hide, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets user comment information of an image or video. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } userComment - User comment information to set, which cannot exceed 420 characters.
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
     * @useinstead photoAccessHelper.MediaAssetChangeRequest#setUserComment
     */
    setUserComment(userComment: string, callback: AsyncCallback<void>): void;
    /**
     * Sets user comment information of an image or video. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } userComment - User comment information to set, which cannot exceed 420 characters.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the Exif data from a JPG image and returns a JSON string. This API uses an asynchronous callback to 
     * return the result.
     * 
     * The Exif data obtained are provided by the [image]{@link @ohos.multimedia.image:image} module. For details about 
     * the Exif data, see [image.PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}.
     * 
     * > **NOTE**
     * >
     * > This API returns a JSON string consisting of Exif tags. The complete Exif data consists of **all_exif** and 
     * > [PhotoKeys.USER_COMMENT]{@link photoAccessHelper.PhotoKeys}. These two fields must be passed in via 
     * > [FetchOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions}.fetchColumns.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<string> } callback - Callback used to return the Exif data, in JSON strings.
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
     * Obtains analysis data. This API uses a promise to return the result.
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
     * Obtains the Exif data from a JPG image and returns a JSON string. This API uses a promise to return the result.
     * 
     * The Exif data obtained are provided by the [image]{@link @ohos.multimedia.image:image} module. For details about 
     * the Exif data, see [image.PropertyKey]{@link @ohos.multimedia.image:image.PropertyKey}.
     * 
     * > **NOTE**
     * >
     * > This API returns a JSON string consisting of Exif tags. The complete Exif data consists of **all_exif** and 
     * > [PhotoKeys.USER_COMMENT]{@link photoAccessHelper.PhotoKeys}. These two fields must be passed in via 
     * > [FetchOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.FetchOptions}.fetchColumns.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Promise used to return the Exif data, in JSON strings.
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
     * Sets the pending state for this image or video asset. This API uses an asynchronous callback to return the 
     * result.
     * 
     * The pending state can be removed only through **setPending(false)**. You can use 
     * **photoAsset.get(photoAccessHelper.PhotoKeys.PENDING)** to check whether the asset state is pending. If the asset
     * is in pending state, **true** is returned. Otherwise, **false** is returned.
     * 
     * > **NOTE**
     * >
     * > **setPending** can be used only during the file creation process. Once the FD is closed, **setPending(true)** 
     * > cannot be used to set the pending state for the file.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } pendingState - Whether to set the file to pending state. **true** to pend, **false**
     *     otherwise.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
     * Sets the pending state for this image or video asset. This API uses a promise to return the result.
     * 
     * The pending state can be removed only through **setPending(false)**. You can use 
     * **photoAsset.get(photoAccessHelper.PhotoKeys.PENDING)** to check whether the asset state is pending. If the asset
     * is in pending state, **true** is returned. Otherwise, **false** is returned.
     * 
     * > **NOTE**
     * >
     * > **setPending** can be used only during the file creation process. Once the FD is closed, **setPending(true)** 
     * > cannot be used to set the pending state for the file.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { boolean } pendingState - Whether to set the file to pending state. **true** to pend, **false**
     *     otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Checks whether this image or video asset is edited. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result indicating whether the image or
     *     video asset is edited. **true** if edited, **false** otherwise. The default value is **false**.
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
     * Checks whether this image or video asset is edited. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<boolean> } Promise used to return the result indicating whether the image or video asset is
     *     edited. **true** if edited, **false** otherwise. The default value is **false**.
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
     * Obtains the edit data of this image or video asset. This API uses an asynchronous callback to return the result.
     * 
     * If the asset has never been edited, an empty string is returned.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<string> } callback - Callback used to return the edit data obtained.
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
     * Obtains the edit data of this image or video asset. This API uses a promise to return the result.
     * 
     * If the asset has never been edited, an empty string is returned.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Promise used to return the edit data obtained.
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
     * Obtains the edited data of this asset. This API uses a promise to return the result.
     * 
     * If the asset has never been edited, an empty string is returned.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<MediaAssetEditData> } Promise used to return the edited asset data.
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
     * Clones a media asset. The file name can be set, but the file type cannot be changed. This API uses a promise to 
     * return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } title - Title of the cloned asset. The title must meet the following requirements:
     *     <br>- It must not contain a file name extension.
     *     <br>- The string length ranges from 1 to 255. (The asset file name is in
     *     the format of title + file name extension.)
     *     <br>- It must not contain any invalid characters, which are:\ / : * ? " ' ` < > | { } [ ]
     * @returns { Promise<PhotoAsset> } Promise used to return the
     *     [PhotoAsset]{@link @ohos.file.photoAccessHelper:photoAccessHelper} instance.
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
     * Duplicates an image within the same album (either user-created or application-specific) and converts it to the 
     * specified format. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } title - Title of the new image.
     * @param { SupportedImageFormat } imageFormat - Format of the new image.
     * @returns { Promise<PhotoAsset> } Promise used to return the PhotoAsset instance representing the new image file.
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
     * Creates a JPEG-compatible copy for a third-party application that does not support HEIF/HEIC image encoding. This
     * API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise that returns no value.
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
     * Opens the source file and returns the FD. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<int> } callback - Callback used to return the FD.
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
     * Opens the source file and returns the FD. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<int> } Promise used to return the FD.
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
     * Commits the edited image or video asset. This API uses an asynchronous callback to return the result.
     * 
     * The edited file is transferred to the media library based on the URI, which is **FileUri** of the edited file in 
     * the application sandbox directory. For details, see [File URI]{@link @ohos.file.fileuri:fileUri}.
     * 
     * > **NOTE**
     * >
     * > The commit operation overwrites the previous edited data.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } editData - New data to commit.
     * @param { string } uri - URI of the committed image or video in the application sandbox.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
     * Commits the edited image or video asset. This API uses a promise to return the result.
     * 
     * The edited file is transferred to the media library based on the URI, which is **FileUri** of the edited file in 
     * the application sandbox directory. For details, see [File URI]{@link @ohos.file.fileuri:fileUri}.
     * 
     * > **NOTE**
     * >
     * > The commit operation overwrites the previous edited data.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } editData - New data to commit.
     * @param { string } uri - URI of the committed image or video in the application sandbox.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Reverts to the state of the file before being edited. This API uses an asynchronous callback to return the 
     * result.
     * 
     * > **NOTE**
     * >
     * > This API deletes the edited data and edited image or video asset, and the deleted data cannot be restored. 
     * > Exercise caution when using this API.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
     * Reverts to the state of the file before being edited. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This API deletes the edited data and edited image or video asset, and the deleted data cannot be restored. 
     * > Exercise caution when using this API.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the quick thumbnail and quality thumbnail of this asset. This API uses an asynchronous callback to return
     * the result.
     * 
     * The size of a quick thumbnail is 128 x 128, and the size of a quality thumbnail is 256 x 256. After this API is 
     * called, the callback will be invoked twice to return a quick thumbnail and a quality thumbnail in sequence.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AsyncCallback<image.PixelMap> } callback - Callback invoked twice to return the quick and quality
     *     thumbnails obtained.
     * @returns { string } ID of the task for obtaining thumbnails.
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
     * Obtains the quick thumbnail and quality thumbnail of this asset.
     * This API uses an asynchronous callback to return the result.
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
     * Obtains the thumbnails of an asset based on the specified options. This API uses an asynchronous callback to 
     * return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { RequestPhotoOptions } options - Options for obtaining the asset thumbnail.
     * @param { AsyncCallback<image.PixelMap> } callback - Callback used to return the thumbnails obtained. The callback
     *     may be invoked more than once, depending on **options**.
     * @returns { string } ID of the task for obtaining thumbnails.
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
     * Obtains the thumbnails of an asset based on the specified options.
     * This API uses an asynchronous callback to return the result.
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
    requestPhoto(options: RequestPhotoOptions, callback: AsyncCallback<image.PixelMap>): string | null

    /**
     * Cancels a task for obtaining media thumbnails.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } requestId - ID of the task to cancel.
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
     * Obtains the thumbnail of the specified type for the key frame. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { long } beginFrameTimeMs - Time of the start frame, in ms. The value **0** indicates the cover frame.
     * @param { ThumbnailType } type - Type of the thumbnail.
     * @returns { Promise<image.PixelMap> } Promise used to return the PixelMap of the thumbnail obtained. The cover
     *     frame is returned by default if no thumbnail is obtained.
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
  }

  /**
   * Defines the key information about an image or video file.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  enum PhotoKeys {
    /**
     * URI of the file.
     * 
     * **Note**:
     * 
     * Only the 
     * [DataSharePredicates.equalTo]{@link @ohos.data.dataSharePredicates:dataSharePredicates.DataSharePredicates.equalTo}
     * predicate can be used for this field during photo query.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    URI = 'uri',
    /**
     * Type of the file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    PHOTO_TYPE = 'media_type',
    /**
     * File name displayed. The file name must meet the following requirements:
     * 
     * - A valid file name must include a base name and a supported image or video extension.
     * - The file name length ranges from 1 to 255.
     * - The base name must not contain any invalid characters, which are:.. \ / : * ? " ' ` < > | { } [ ]
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    DISPLAY_NAME = 'display_name',
    /**
     * File size, in bytes. The size of a moving photo includes the total size of the image and video.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    SIZE = 'size',
    /**
     * Unix timestamp when the file was created, in seconds.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    DATE_ADDED = 'date_added',
    /**
     * Unix timestamp when the file content (not the file name) was last modified, in seconds. This value is updated 
     * when the file content is modified, but not when the file name is modified.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    DATE_MODIFIED = 'date_modified',
    /**
     * Duration, in ms.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    DURATION = 'duration',
    /**
     * Image width, in pixels.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    WIDTH = 'width',
    /**
     * Image height, in pixels.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    HEIGHT = 'height',
    /**
     * Unix timestamp when the photo was taken, in seconds.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    DATE_TAKEN = 'date_taken',
    /**
     * Orientation of the file, in degrees.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    ORIENTATION = 'orientation',
    /**
     * Whether the file is marked as favorites.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    FAVORITE = 'is_favorite',
    /**
     * Title of the file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    TITLE = 'title',
    /**
     * File location type.
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
     * Date when the file was deleted. The value is the number of seconds elapsed since the Epoch time. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    DATE_TRASHED = 'date_trashed',
    /**
     * Whether the file is hidden. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    HIDDEN = 'hidden',
    /**
     * User comment information. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    USER_COMMENT = 'user_comment',
    /**
     * Key for the Ultra Snapshot feature, which allows the camera to take photos or record videos with the screen off. 
     * (This parameter is available only for the system camera, and the key value is defined by the system camera.) 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA_SHOT_KEY = 'camera_shot_key',
    /**
     * Year when the file was created. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DATE_YEAR = 'date_year',
    /**
     * Month when the file was created. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DATE_MONTH = 'date_month',
    /**
     * Date when the file was created. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DATE_DAY = 'date_day',
    /**
     * Pending state. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    PENDING = 'pending',
    /**
     * Unix timestamp when the file was created, in milliseconds.
     * 
     * **Note**:
     * 
     * The photos queried cannot be sorted based on this field.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DATE_ADDED_MS = 'date_added_ms',
    /**
     * Unix timestamp when the file was modified, in milliseconds. This value is updated when the file content is 
     * modified, but not when the file name is modified.
     * 
     * **Note**:
     * 
     * The photos queried cannot be sorted based on this field.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DATE_MODIFIED_MS = 'date_modified_ms',
    /**
     * Date when the file was deleted. The value is the number of milliseconds elapsed since the Epoch time. 
     * 
     * **NOTE**: The photos queried cannot be sorted based on this field.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DATE_TRASHED_MS = 'date_trashed_ms',
    /**
     * Subtype of the media file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    PHOTO_SUBTYPE = 'subtype',
    /**
     * Effect of the moving photo. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MOVING_PHOTO_EFFECT_MODE = 'moving_photo_effect_mode',
    /**
     * Dynamic range type of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    DYNAMIC_RANGE_TYPE = 'dynamic_range_type',
    /**
     * Position of the moving photo cover, which is the video timestamp (in μs) corresponding to the cover frame.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    COVER_POSITION = 'cover_position',
    /**
     * Unique ID of a group of burst photos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    BURST_KEY = 'burst_key',
    /**
     * Whether a thumbnail is generated. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    THUMBNAIL_READY = 'thumbnail_ready',
    /**
     * Width and height of an LCD image, in the format of a **width:height** string.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    LCD_SIZE = 'lcd_size',
    /**
     * Width and height of a thumbnail image, in the format of a **width:height** string.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    THM_SIZE = 'thm_size',
    /**
     * Detailed time. The value is a string of time when the image or video was taken in the time zone and does not 
     * change with the time zone.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 13 dynamic
     * @since 23 static
     */
    DETAIL_TIME = 'detail_time',
    /**
     * Unix timestamp when the image was captured, in milliseconds.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 13 dynamic
     * @since 23 static
     */
    DATE_TAKEN_MS = 'date_taken_ms',
    /**
     * Cloud enhancement identifier. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CE_AVAILABLE = 'ce_available',
    /**
     * Watermark type to set. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    SUPPORTED_WATERMARK_TYPE = 'supported_watermark_type',
    /**
     * Whether the thumbnail of the media asset is visible.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    THUMBNAIL_VISIBLE = 'thumbnail_visible',
    /**
     * Whether automatic cloud enhancement is supported. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    IS_CE_AUTO = 'is_auto',
    /**
     * ID of the album to which the photo belongs.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 18 - 21]
     * @publicapi [since 22]
     * @since 18 dynamic
     * @since 23 static
     */
    OWNER_ALBUM_ID = 'owner_album_id',
    /**
     * Whether the asset is displayed in the **Recent** list. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    IS_RECENT_SHOW = 'is_recent_show',
    /**
     * File name extension.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 18 dynamic
     * @since 23 static
     */
    MEDIA_SUFFIX = 'media_suffix',
    /**
     * Total size of files. When **SUM_SIZE** is filled in **fetchColumns**, only the first asset is obtained, and the 
     * property includes the total size of all assets. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    SUM_SIZE = 'sum(size)',
    /**
     * Rotational angle of the file. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    EXIF_ROTATE = 'exif_rotate',
     /**
     * Whether to enable or disable the app link association. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    HAS_APPLINK = 'has_applink',
    /**
     * Information about the app link association. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    APPLINK = 'applink',
    /**
     * HDR mode of the file. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDR_MODE = 'hdr_mode',
    /**
     * Unique ID of the file on the cloud. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    CLOUD_ID = 'cloud_id',
    /**
     * Whether a JPEG-compatible copy exists. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EXIST_COMPATIBLE_DUPLICATE = 'exist_compatible_duplicate',
    /**
     * Display status of the composite image asset. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    COMPOSITE_DISPLAY_STATUS = 'composite_display_status',
    /**
     * Log mode of a video file. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    VIDEO_MODE = 'video_mode',
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
     * Aspect ratio of the image or video.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 22 dynamic
     * @since 23 static
     */
    ASPECT_RATIO = 'aspect_ratio',
    /**
     * Edit data for the asset already exists. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    EDIT_DATA_EXIST = 'edit_data_exist',
    /**
     * Time when the photo is changed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    CHANGE_TIME = 'change_time',
    /**
     * Package name of a file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PACKAGE_NAME = 'package_name',
    /**
     * Image risk control
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    PHOTO_RISK_STATUS = 'photo_risk_status',
    /**
     * Year when an asset is added.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DATE_ADDED_YEAR = 'date_added_year',
    /**
     * Month when an asset is added.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DATE_ADDED_MONTH = 'date_added_month',
    /**
     * Date when an asset is added.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DATE_ADDED_DAY = 'date_added_day',
    /**
     * 4d livephoto status.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    LIVEPHOTO_4D_STATUS = 'livephoto_4d_status',
    /**
     * Unique id of asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    UNIQUE_ID = 'unique_id',
    /**
     * hidden time of asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    HIDDEN_TIME = 'hidden_time',
    /**
     * Status of thumbnail, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    THUMB_STATUS = 'thumb_status',
    /**
     * Size of lcd file, read only
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    LCD_FILE_SIZE = 'lcd_file_size',
    /**
     * Size of local asset, which well matched the content read by the application.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    LOCAL_ASSET_SIZE = 'local_asset_size',
    /**
     * File hidden state of filemanager.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FILE_HIDDEN = 'file_hidden',
    /**
     * Size of the asset attachment, in bytes.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ATTACHMENT_SIZE = 'attachment_size'
  }

  /**
   * Enumerates the risk types of images.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum PhotoRiskStatus {
    /**
     * Default type.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    UNIDENTIFIED = 0,
    /**
     * Approved images.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    APPROVED = 1,
    /**
     * Suspicious images.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    SUSPICIOUS = 2,
    /**
     * Rejected images.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    REJECTED = 3
  }

  /**
   * Enumeration of fusion asset type
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  enum FusionAssetType {
    /**
     * Compatible asset
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    COMPATIBLE_ASSET = 0,
  }
  /**
   * Fusion assets information.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  interface FusionAssetsInfo {
    /**
     * Assets type.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    assetsType: FusionAssetType;
    /**
     * Assets count.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    assetsCount: int;
    /**
     * Assets path.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    assetsPath: string;
  }
  /**
   * Enumerates the album keys.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AlbumKeys {
    /**
     * URI of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    URI = 'uri',
    /**
     * Name of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ALBUM_NAME = 'album_name',
    /**
     * Virtual path of the album.
     * 
     * Albums and their virtual path values:
     * 
     * - Camera application album: '/DCIM/Camera'
     * - Screenshot application album: '/Pictures/Screenshots'
     * - Screen recording application album: '/Pictures/Screenrecords'
     * - User-created album: '/Pictures/Users/{Custom album name}'
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 18 - 22]
     * @publicapi [since 23]
     * @since 18 dynamic
     * @since 23 static
     */
    ALBUM_LPATH = 'lpath',
    /**
     * Bundle name of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    BUNDLE_NAME = 'bundle_name',
    /**
     * Timestamp when the album was modified, in milliseconds.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    DATE_MODIFIED = 'date_modified',
    /**
     * Source URI of the album cover.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    COVER_URI_SOURCE = 'cover_uri_source',
    /**
     * Synchronization status of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    UPLOAD_STATUS = 'upload_status',
    /**
     * Time when the album is changed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    CHANGE_TIME = 'change_time',
    /**
     * Hidden status.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    HIDDEN = 'hidden',
    /**
     * directory hidden state of filemanager
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FILE_HIDDEN = 'file_hidden'
  }

  /**
   * Enumerates the display modes of hidden files in the system.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum HiddenPhotosDisplayMode {
    /**
     * Display all hidden files in the system.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ASSETS_MODE,
    /**
     * Display hidden files by album (display all albums that contain hidden files in the system, excluding the preset 
     * hidden album and the albums in the trash).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ALBUMS_MODE
  }

  /**
   * Defines the retrieval options.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  interface FetchOptions {
    /**
     * Names of the columns specified for query.
     * 
     * If this parameter is left blank for photos, photos are fetched by **'uri'**, **'media_type'**, **'subtype'**, and
     * **'display_name'** by default. An error will be thrown if 
     * [get]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset.get} is used to obtain other attributes of 
     * this object. 
     * 
     * Example: **fetchColumns: ['uri', 'title']**.
     * 
     * If this parameter is left blank for albums, albums are fetched by **'uri'** and **'album_name'** by default.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 20]
     * @since 10 dynamic
     * @since 23 static
     */
    fetchColumns: Array<string>;
    /**
     * Predicates that specify the fetch criteria.
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
   * Options for creating an image or video asset.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  interface PhotoCreateOptions {
    /**
     * Subtype of the image or video.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    subtype?: PhotoSubtype;
    /**
     * Key for the Ultra Snapshot feature, which allows the camera to take photos or record videos with the screen off. 
     * (This parameter is available only for the system camera, and the key value is defined by the system camera.) 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    cameraShotKey?: string;
    /**
     * User ID.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 19 dynamic
     * @since 23 static
     */
    userId?: int;
  }

  /**
   * Represents the configuration for saving a media asset (image or video) to the media library, including the file 
   * name.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface PhotoCreationConfig {
    /**
     * Title of the image or video. If this parameter is not passed, the system generates a title. The title must meet 
     * the following requirements:
     * 
     * - It must not contain a file name extension.
     * - The total length of the file name, which is in the format of title+file name extension, must be between 1 and 2
     * 55 characters.
     * - It must not contain any invalid characters, which are:\ / : * ? " ' ` < > | { } [ ]
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    title?: string;

    /**
     * File name extension, for example, **'jpg'**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    fileNameExtension: string;

    /**
     * Type of the file to create, which can be **IMAGE** or **VIDEO**. See 
     * [PhotoType]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoType}.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    photoType: PhotoType;

    /**
     * Image or video file subtype. The default value is **DEFAULT**. See 
     * [PhotoSubtype]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoSubtype}.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    subtype?: PhotoSubtype;
  }

  /**
   * Represents the configuration for saving images or videos to the media library, including the file name, file type, 
   * and other related parameters.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export interface CreationSetting {  
    /**
     * Title of the image or video.
     * 
     * If this parameter is not passed, the system generates a value. The parameter specifications are as follows:
     * 
     * - It must not contain a file name extension.
     * - It must not contain any invalid characters, which are:\ / : * ? " ' ` < > | { } [ ]
     * - The file name consists of the title and file name extension. The file name string length ranges from 1 to 255. 
     * Therefore, the title length cannot be too long.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    title?: string;

    /**
     * File name extension, for example, **'jpg'**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    fileNameExtension: string;

    /**
     * [PhotoType]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoType} of the created media file, which can 
     * be **IMAGE** or **VIDEO**.
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
   * Options for creating an image or video asset.
   * 
   * The title must meet the following requirements:
   * 
   * - It must not contain a file name extension.
   * - The total length of the file name must be between 1 and 255 characters.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 22]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  interface CreateOptions {
    /**
     * Title of the image or video.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 22]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 23 static
     */
    title?: string;
    /**
     * Subtype of the image or video file.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    subtype?: PhotoSubtype;
  }

  /**
   * Defines the options for obtaining the thumbnail of an image or video.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface RequestPhotoOptions {
    /**
     * Size of the thumbnail to obtain.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    size?: image.Size;
    /**
     * Operation to perform.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    requestPhotoType?: RequestPhotoType;
  }

  /**
   * Defines the application information provided to create assets on behalf of the application.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface PhotoCreationSource {
    /**
     * Bundle name of the target application.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    bundleName?: string;
    /**
     * Name of the target application.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    appName?: string;
    /**
     * ID of the target application.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    appId?: string;
    /**
     * Token ID of the target application.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    tokenId?: long;
  }

  /**
   * FetchResult provides APIs to manage the file retrieval result.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 20]
   * @since 10 dynamic
   * @since 23 static
   */
  interface FetchResult<T> {
    /**
     * Obtains the total number of files in the result set.
     *
     * @returns { int } Total number of files obtained.
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
     * Checks whether the cursor is in the last row of the result set.
     *
     * @returns { boolean } **true** is returned if the cursor is in the last row of the result set; **false**
     *     otherwise.
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
     * Obtains the first file asset in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback function. If the first file asset in the result set is
     *     successfully obtained, **err** is **undefined**, and **data** is the specific search result. Otherwise,
     *     **err** is an error object.
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
     * Obtains the first file asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Promise used to return the first object in the result set.
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
     * Obtains the next file asset in the result set. This API uses an asynchronous callback to return the result.
     * 
     * Before using this API, you must use [isAfterLast()]{@link photoAccessHelper.FetchResult.isAfterLast} to check 
     * whether the current position is the end of the result set.
     *
     * @param { AsyncCallback<T> } callback - Callback function. If the next file asset in the result set is
     *     successfully obtained, **err** is **undefined**, and **data** is the specific search result. Otherwise,
     *     **err** is an error object.
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
     * Obtains the next file asset in the result set. This API uses a promise to return the result.
     * 
     * Before using this API, you must use [isAfterLast()]{@link photoAccessHelper.FetchResult.isAfterLast} to check 
     * whether the current position is the end of the result set.
     *
     * @returns { Promise<T> } Promise used to return the next object in the result set.
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
     * Obtains the last file asset in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback function. If the last file asset in the result set is
     *     successfully obtained, **err** is **undefined**, and **data** is the specific search result. Otherwise,
     *     **err** is an error object.
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
     * Obtains the last file asset in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Promise used to return the last object in the result set.
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
     * Obtains a file asset with the specified index in the result set. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { int } index - Index of the file asset to obtain. The value starts from **0**.
     * @param { AsyncCallback<T> } callback - Callback function. If the file asset with the specified index in the
     *     result set is successfully obtained, **err** is **undefined**, and **data** is the specific search result.
     *     Otherwise, **err** is an error object.
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
     * Obtains a file asset with the specified index in the result set. This API uses a promise to return the result.
     *
     * @param { int } index - Index of the file asset to obtain. The value starts from **0**.
     * @returns { Promise<T> } Promise used to return the file asset obtained.
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
     * Obtains the file asset array of a specified length (second parameter) from the specified index (first parameter) 
     * in the result set. This API uses a promise to return the result.
     *
     * @param { int } index - Index of the file asset to be obtained. The value must be greater than or equal to 0 and
     *     less than the number of objects in the result set.
     * @param { int } offset - Number of file assets to be obtained. The value must be greater than 0.
     *     <br>The sum of **index** and **offset** must be less than the total number of objects in the result set. 
     *     Otherwise, error code **23800151** is thrown.
     * @returns { Promise<T[]> } Promise array.
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
     * Obtains all the file assets in the result set. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<T>> } callback - Callback function. If all file assets in the result set are
     *     successfully obtained, **err** is **undefined**, and **data** is the specific search result. Otherwise,
     *     **err** is an error object.
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
     * Obtains all the file assets in the result set. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<T>> } Promise used to return an array of all file assets.
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
     * Closes this FetchResult instance to invalidate it. After this instance is released, the APIs in this instance 
     * cannot be invoked.
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
     * Checks whether the specified file asset is contained in the result set. This API uses a promise to return the 
     * result.
     *
     * @param { T } object - Specified file asset.
     * @returns { Promise<boolean> } Promise used to return the result. **true** indicates that the specified file asset
     *     is contained in the result set, and **false** indicates the opposite.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    contains(object: T): Promise<boolean>;

    /**
     * Obtains the file asset array corresponding to the specified index set in the result set. This API uses a promise 
     * to return the result.
     *
     * @param { int[] } indexSet - Specified index set.
     * @returns { Promise<T[]> } Promise object, which returns the file asset array corresponding to the specified index
     *     set.
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
     * Obtains the index of a specified file asset in the result set. This API uses a promise to return the result.
     *
     * @param { T } object - Specified file asset.
     * @returns { Promise<int> } Promise used to return the result. If the object exists in the result set, the
     *     corresponding index is returned. Otherwise, **-1** is returned.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    getIndex(object: T): Promise<int>;
  }

  /**
   * Enumerates the album types,
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AlbumType {
    /**
     * User album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    USER = 0,
    /**
     * System album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    SYSTEM = 1024,
    /**
     * Album created by an application.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 18 - 22]
     * @publicapi [since 23]
     * @since 18 dynamic
     * @since 23 static
     */
    SOURCE = 2048,
    /**
     * Smart analysis album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SMART = 4096
  }

  /**
   * Enumerate the album subtypes.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum AlbumSubtype {
    /**
     * User album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    USER_GENERIC = 1,
    /**
     * Favorites.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FAVORITE = 1025,
    /**
     * Video album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    VIDEO,
    /**
     * Hidden album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    HIDDEN,
    /**
     * Trash. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    TRASH,
    /**
     * Album for screenshots and screen recording files. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    SCREENSHOT,
    /**
     * Album for images and videos taken by the camera. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    CAMERA,
    /**
     * Photo album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 11 - 11]
     * @publicapi [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE = 1031,
    /**
     * AI-powered cloud enhanced album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CLOUD_ENHANCEMENT = 1032,
    /**
     * 4D LivePhoto album
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    LIVEPHOTO_4D = 1033,
    /**
     * Source album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 11 - 22]
     * @publicapi [since 23]
     * @since 11 dynamic
     * @since 23 static
     */
    SOURCE_GENERIC = 2049,
    /**
     * Source album from FileManager
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SOURCE_GENERIC_FROM_FILE_MANAGER = 2050,
    /**
     * Classified album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    CLASSIFY = 4097,
    /**
     * Geographic location album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GEOGRAPHY_LOCATION = 4099,
    /**
     * City album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GEOGRAPHY_CITY,
    /**
     * Shooting mode album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SHOOTING_MODE,
    /**
     * Portrait album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    PORTRAIT,
    /**
     * Group photo album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    GROUP_PHOTO,
    /**
     * Highlights album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIGHLIGHT = 4104,
    /**
     * Highlights suggestion album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    HIGHLIGHT_SUGGESTIONS,
    /**
     * Any album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    ANY = 2147483647
  }

  /**
   * Enumerates the types of the operation for obtaining image or video thumbnails.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum RequestPhotoType {
    /**
     * Obtain both the quick thumbnail and the quality thumbnail.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    REQUEST_ALL_THUMBNAILS = 0,
    /**
     * Obtain only the quick thumbnail.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    REQUEST_FAST_THUMBNAIL,
    /**
     * Obtain only the quality thumbnail.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    REQUEST_QUALITY_THUMBNAIL
  }

  /**
   * Enumerates the sources of the album covers.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum CoverUriSource {
    /**
     * Default cover.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    DEFAULT_COVER = 0,

    /**
     * Cover manually set.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    MANUAL_COVER = 1
  }

  /**
   * Defines the abstract interface of albums.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface AbsAlbum {
    /**
     * Type of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly albumType: AlbumType;
    /**
     * Subtype of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly albumSubtype: AlbumSubtype;
    /**
     * Name of the album. System albums are not writable, whereas user albums can be written to.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    albumName: string;
    /**
     * URI of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly albumUri: string;
    /**
     * Number of files in the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly count: int;
    /**
     * URI of the cover file of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    readonly coverUri: string;
    /**
     * Virtual path of the album.
     * 
     * Albums and their virtual path values:
     * 
     * - Camera application album: '/DCIM/Camera'
     * - Screenshot application album: '/Pictures/Screenshots'
     * - Screen recording application album: '/Pictures/Screenrecords'
     * - User-created album: '/Pictures/Users/{Custom album name}'
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 18 - 22]
     * @publicapi [since 23]
     * @since 18 dynamic
     * @since 23 static
     */
    readonly lpath?: string;
    /**
     * Source URI of the album cover.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly coverUriSource?: CoverUriSource;

    /**
     * Whether the album can be synced to cloud storage or family storage. **true** if it can be synced, **false** 
     * otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    readonly uploadStatus: boolean;

    /**
     * Time when the album is changed.
     * Unit: second, The value must be greater than or equal to 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 23 dynamic&static
     */
    readonly changeTime?: long;

    /**
     * Whether the album is hidden. **true** if hidden, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly hidden?: boolean;

    /**
     * Obtains image and video assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback function. If files from the album are
     *     obtained successfully, **err** is **undefined**, and **data** is the result set of the obtained image and
     *     video data ([FetchResult]{@link @ohos.file.photoAccessHelper:photoAccessHelper}). Otherwise, **err** is an
     *     error object.
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
     * Obtains image and video assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise used to return the image and video assets obtained.
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
     * @since 13 dynamic
     * @since 23 static
     */
    getSharedPhotoAssets(options: FetchOptions): Array<SharedPhotoAsset>;
  }

  /**
   * Enumerates the types of changes that trigger the media asset or album change events.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  enum NotifyChangeType {
    /**
     * A media asset or an album is created.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFY_CHANGE_ADD = 0,
    /**
     * A media asset or an album is modified.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFY_CHANGE_UPDATE = 1,
    /**
     * A media asset or an album is deleted.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    NOTIFY_CHANGE_REMOVE = 2,
    /**
     * A high-quality image is ready in deferred photo delivery scenarios.
     * 
     * Image quality metrics such as sharpness and color accuracy can be checked in the 
     * [OnDataPrepared]{@link @ohos.file.photoAccessHelper:photoAccessHelper.QuickImageDataHandler.onDataPrepared(data: T, imageSource: image.ImageSource, map: Map<string, string>)}
     * callback.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    NOTIFY_CHANGE_YUV_READY = 3,
    /**
     * A media asset (image or video) is created in the smart analysis album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NOTIFY_CHANGE_ADD_ANALYSIS = 4,
    /**
     * A media asset (image or video) is deleted from the smart analysis album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NOTIFY_CHANGE_REMOVE_ANALYSIS = 5
  }

  /**
   * Provides APIs to manage albums.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface Album extends AbsAlbum {
    /**
     * Number of images in the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly imageCount?: int;
    /**
     * Number of videos in the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    readonly videoCount?: int;
    /**
     * Time when the album was added.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly dateAdded?: long;
    /**
     * Time when the album was modified.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    readonly dateModified?: long;
    /**
     * Commits the modification on the album attributes to the database. This API uses an asynchronous callback to 
     * return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AsyncCallback<void> } callback - Callback function. If the album properties are modified successfully,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
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
     * Commits the modification on the album attributes to the database. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise that returns no value.
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
     * Adds image and video assets to a user album. Before the operation, ensure that the image and video assets to add 
     * and the album exist. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image and video assets to add.
     * @param { AsyncCallback<void> } callback - Callback function. If an image or video is added successfully, **err**
     *     is **undefined**. Otherwise, **err** is an error object.
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
     * Adds image and video assets to a user album. Before the operation, ensure that the image and video assets to add 
     * and the album exist. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image and video assets to add.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Removes image and video assets from a user album. The album and file resources must exist. This API uses an 
     * asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image and video assets to remove.
     * @param { AsyncCallback<void> } callback - Callback function. If an image or video is removed successfully,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
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
     * Removes image and video assets from a user album. The album and file resources must exist. This API uses a 
     * promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image and video assets to remove.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Recovers image or video assets from the trash. Before the operation, ensure that the image or video assets exist 
     * in the trash. This API uses an asynchronous callback to return the result.
     * 
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image or video assets to recover.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
     * Recovers image or video assets from the trash. Before the operation, ensure that the image or video assets exist 
     * in the trash. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image or video assets to recover.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Deletes image or video assets from the trash. Before the operation, ensure that the image or video assets exist 
     * in the trash. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > This operation is irreversible. The assets deleted cannot be restored. Exercise caution when performing this 
     * > operation.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image or video assets to delete.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
     * Deletes image or video assets from the trash. Before the operation, ensure that the image or video assets exist 
     * in the trash. It is recommended that the number of images or videos to be deleted be less than or equal to 1000. 
     * This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This operation is irreversible. The assets deleted cannot be restored. Exercise caution when performing this 
     * > operation.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Array of the image or video assets to delete.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the cover of the user album. This API uses an asynchronous callback to return the result.
     * 
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } uri - URI of the file to be set as the album cover.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
     * Sets the cover of the user album. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } uri - URI of the file to be set as the album cover.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the face identifier on the cover of a portrait album or group photo album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Promise used to return **tag_id** of the portrait album, **group_tag** of the group
     *     photo album, or an empty string if no face identifier is found.
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
     * Obtains portrait album assets that meet filter criteria.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } optionCheck - Fetch options, which limit the number of assets returned.
     * @param { string } [filter] - Filter option, which must be a JSON string.
     *     <br>Currently, only **currentFileId** is supported, which indicates the file ID of the currently displayed 
     *     featured portrait card. An example is '{"currentFileId":"123"}'.
     *     <br>If this parameter is not provided, assets are returned from the beginning.
     *     <br>If **currentFileId** is provided, assets with scores less than or equal to the calculated score based 
     *     on the **currentFileId** are returned.
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise used to return the image information.
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
     * Obtains fusion assets information.
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
     * Gets album attribute info.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumAttribute[] } attrs - attributes to get for the album. The maximum length is 20 and cannot be empty.
     * @returns { Promise<Record<AlbumAttribute, AlbumAttributeInfo>> } Returns a record of attributes and their values.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Unsupported attribute;
     *     <br>2. The attrs size exceed 20;
     *     <br>3. Empty or duplicate attribute;
     * @throws { BusinessError } 23800301 - Internal system error.It is recommended to retry and check the logs
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
   * Describes the album sorting order.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface AlbumOrder {
    /**
     * Album ID.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    albumId: int;
    /**
     * Sorting value of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    albumOrder: int;
    /**
     * Sorting section of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    orderSection: int;
    /**
     * Sorting type of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    orderType: int;
    /**
     * Sorting status of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    orderStatus: int;
  }

  /**
   * Helper functions to access photos and albums.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  interface PhotoAccessHelper {
    /**
     * Obtains image and video assets. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @param { AsyncCallback<FetchResult<PhotoAsset>> } callback - Callback function. If files from the album are
     *     obtained successfully, **err** is **undefined**, and **data** is the result set of the obtained image and
     *     video data ([FetchResult]{@link @ohos.file.photoAccessHelper:photoAccessHelper}). Otherwise, **err** is an
     *     error object.
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
     * Obtains image and video assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise used to return the image and video assets obtained.
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
     * Obtains burst assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } burstKey - Universally Unique Identifier (UUID) of a group of burst photos, that is,
     *     **BURST_KEY** of [PhotoKeys]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoKeys}. The string
     *     contains 36 bytes.
     * @param { FetchOptions } options - Retrieval options.
     * @returns { Promise<FetchResult<PhotoAsset>> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 20]
     * @since 12 dynamic
     * @since 23 static
     */
    getBurstAssets(burstKey: string, options: FetchOptions): Promise<FetchResult<PhotoAsset>>;
    /**
     * Creates an image or video asset with the specified file name. This API uses an asynchronous callback to return 
     * the result.
     * 
     * The file name must meet the following requirements:
     * 
     * - A valid file name must include a base name and a supported image or video extension.
     * - The total length of the file name must be between 1 and 255 characters.
     * - The base name must not contain any invalid characters.
     * 
     * Starting from API version 18, the following characters are considered invalid: \ / : * ? " < > | 
     * 
     * For API versions 10 to 17, the following characters are considered invalid: . .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { AsyncCallback<PhotoAsset> } callback - Callback used to return the image or video created.
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
     * Creates an image or video asset with the specified file name. This API uses a promise to return the result.
     * 
     * The file name must meet the following requirements:
     * 
     * - A valid file name must include a base name and a supported image or video extension.
     * - The total length of the file name must be between 1 and 255 characters.
     * - The base name must not contain any invalid characters.
     * 
     * Starting from API version 18, the following characters are considered invalid: \ / : * ? " < > | 
     * 
     * For API versions 10 to 17, the following characters are considered invalid: . .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @returns { Promise<PhotoAsset> } Promise used to return the created image and video asset.
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
     * Creates an image or video asset with the specified file name and options. This API uses a promise to return the 
     * result.
     * 
     * The file name must meet the following requirements:
     * 
     * - A valid file name must include a base name and a supported image or video extension.
     * - The total length of the file name must be between 1 and 255 characters.
     * - The base name must not contain any invalid characters.
     * 
     * Starting from API version 18, the following characters are considered invalid: \ / : * ? " < > | 
     * 
     * For API versions 10 to 17, the following characters are considered invalid: . .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } options - Options for creating an image or video asset.
     * @returns { Promise<PhotoAsset> } Promise used to return the created image and video asset.
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
     * Creates an image or video asset with the specified file name and options. This API uses an asynchronous callback 
     * to return the result.
     * 
     * The file name must meet the following requirements:
     * 
     * - A valid file name must include a base name and a supported image or video extension.
     * - The total length of the file name must be between 1 and 255 characters.
     * - The base name must not contain any invalid characters.
     * 
     * Starting from API version 18, the following characters are considered invalid: \ / : * ? " < > | 
     * 
     * For API versions 10 to 17, the following characters are considered invalid: . .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } options - Options for creating an image or video asset.
     * @param { AsyncCallback<PhotoAsset> } callback - Callback used to return the image or video created.
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
     * Creates an image or video asset with the specified file type, file name extension, and options. This API uses an 
     * asynchronous callback to return the result.
     * 
     * If you do not have the **ohos.permission.WRITE_IMAGEVIDEO** permission, you can create a media asset by using a 
     * security component or an authorization pop-up. For details, see 
     * [Saving Media Assets](docroot://media/medialibrary/photoAccessHelper-savebutton.md).
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be **IMAGE** or **VIDEO**.
     * @param { string } extension - File name extension, for example, **'jpg'**.
     * @param { CreateOptions } options - Options used for creation. Currently, only **title** is supported, for example
     *     , **{title: 'testPhoto'}**.
     *     <br>**NOTE**
     *     <br>If a **subtype** option is passed, the configuration does not take effect. Only DEFAULT images can 
     *     be saved.
     *     <br>The file name must not contain any invalid characters, which are:.. \ / : * ? " ' ` < > | { } [ ]
     * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
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
     * Creates an image or video asset with the specified file type and file name extension. This API uses an 
     * asynchronous callback to return the result.
     * 
     * If you do not have the **ohos.permission.WRITE_IMAGEVIDEO** permission, you can create a media asset by using a 
     * security component or an authorization pop-up. For details, see 
     * [Saving Media Assets](docroot://media/medialibrary/photoAccessHelper-savebutton.md).
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be **IMAGE** or **VIDEO**.
     * @param { string } extension - File name extension, for example, **'jpg'**.
     * @param { AsyncCallback<string> } callback - Callback used to return the URI of the created image or video asset.
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
     * Creates an image or video asset with the specified file type, file name extension, and options. This API uses a 
     * promise to return the result.
     * 
     * If you do not have the **ohos.permission.WRITE_IMAGEVIDEO** permission, you can create a media asset by using a 
     * security component or an authorization pop-up. For details, see 
     * [Saving Media Assets](docroot://media/medialibrary/photoAccessHelper-savebutton.md).
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to create, which can be **IMAGE** or **VIDEO**.
     * @param { string } extension - File name extension, for example, **'jpg'**.
     * @param { CreateOptions } [options] - Options used for creation. Currently, only **title** is supported, for
     *     example, **{title: 'testPhoto'}**.
     *     <br>**NOTE**
     *     <br>If a **subtype** option is passed, the configuration does
     *     not take effect. Only DEFAULT images can be saved.
     *     <br>The file name must not contain any invalid characters, which are:.. \ / : * ? " ' ` < > | { } [ ]
     * @returns { Promise<string> } Promise used to return the URI of the created image or video asset.
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
     * Creates an image or video resource with the specified file type, extension, and title. This API uses a promise to
     * return the result.
     * 
     * If you do not have the **ohos.permission.WRITE_IMAGEVIDEO** permission, you can create a media asset by using a 
     * security component or an authorization pop-up. For details, see 
     * [Saving Media Assets](docroot://media/medialibrary/photoAccessHelper-savebutton.md).
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoType } photoType - Type of the file to be created. For example, **IMAGE** or **VIDEO**.
     * @param { string } extension - File name extension. For example, **'jpg'**.
     * @param { string } [title] - Title of the image or video resource.
     * @returns { Promise<string> } Promise used to return the URL of the created image or video.
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
     * Creates an album. This API uses an asynchronous callback to return the result.
     * 
     * The album name must meet the following requirements:
     * 
     * - The total length of the album name must be between 1 and 255 characters.
     * - It must not contain any invalid characters, which are:
     * 
     * . .. \ / : * ? " ' ` < > | { } [ ]
     * 
     * - Duplicate album names are not allowed.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Name of the album to create.
     * @param { AsyncCallback<Album> } callback - Callback used to return the created album instance.
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
     * Creates an album. This API uses a promise to return the result.
     * 
     * The album name must meet the following requirements:
     * 
     * - The total length of the album name must be between 1 and 255 characters.
     * - It must not contain any invalid characters, which are:
     * 
     * . .. \ / : * ? " ' ` < > | { } [ ]
     * 
     * - Duplicate album names are not allowed.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } name - Name of the album to create.
     * @returns { Promise<Album> } Promise used to return the created album instance.
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
     * Deletes user albums. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Albums to delete.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
     * Deletes user albums. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<Album> } albums - Albums to delete.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains albums based on the specified options and album type. This API uses an asynchronous callback to return 
     * the result.
     * 
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { FetchOptions } options - Retrieval options.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
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
     * Obtains albums by type. This API uses an asynchronous callback to return the result.
     * 
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { AsyncCallback<FetchResult<Album>> } callback - Callback used to return the result.
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
     * Obtains albums based on the specified options and album type. This API uses a promise to return the result.
     * 
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AlbumType } type - Type of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @param { FetchOptions } [options] - Retrieval options. If this parameter is not specified, the albums are
     *     obtained based on the album type by default.
     * @returns { Promise<FetchResult<Album>> } Promise used to return the result.
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
     * Obtains hidden albums based on the specified display mode and retrieval options. This API uses an asynchronous 
     * callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - Display mode of hidden albums.
     * @param { FetchOptions } options - Retrieval options.
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
    getHiddenAlbums(mode: HiddenPhotosDisplayMode, options: FetchOptions, callback: AsyncCallback<FetchResult<Album>>): void;
    /**
     * Obtains hidden albums based on the specified display mode. This API uses an asynchronous callback to return the 
     * result.
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
     * Obtains system, user, and source albums based on the specified options. This API uses a promise to return the 
     * result.
     * 
     * Before the operation, ensure that the albums to obtain exist.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { FetchOptions } [options] - Retrieval options. If this parameter is not specified, the albums are
     *     obtained based on the album type by default.
     * @returns { Promise<FetchResult<Album>> } Promise used to return the result.
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
    getPhotoAlbums(options?: FetchOptions): Promise<FetchResult<Album>>;

    /**
     * Obtains hidden albums based on the specified display mode and retrieval options. This API uses a promise to 
     * return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { HiddenPhotosDisplayMode } mode - Display mode of hidden albums.
     * @param { FetchOptions } [options] - Options for retrieving the files. If this parameter is not specified, the
     *     files are retrieved based on the display mode of hidden files.
     * @returns { Promise<FetchResult<Album>> } Promise used to return the result.
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
     * Deletes media assets. The deleted assets are moved to the trash. This API uses an asynchronous callback to return
     * the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - URIs of the media files to delete.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
     * Deletes media assets. The deleted assets are moved to the trash. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - URIs of the media files to delete.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Registers listening for the specified URI. This API uses a callback to return the result.
     *
     * @param { string } uri - URI of the photo asset, URI of the album, or
     *     [DefaultChangeUri]{@link @ohos.file.photoAccessHelper:photoAccessHelper.DefaultChangeUri}.
     * @param { boolean } forChildUris - Whether to perform fuzzy listening.
     *     <br> If **uri** is the URI of an album, the value **true** means to listen for the changes of the files in 
     *     the album; the value **false** means to listen for the changes of the album only.
     *     <br>If **uri** is the URI of a photoAsset, there is no difference between 
     *     **true** and false for **forChildUris**.
     *     <br>If **uri** is **DefaultChangeUri**, **forChildUris** must be set
     *     to **true**. If **forChildUris** is false, the URI cannot be found and no message can be received.
     * @param { Callback<ChangeData> } callback - Callback used to return
     *     [ChangeData]{@link @ohos.file.photoAccessHelper:photoAccessHelper.ChangeData}. **NOTE**: Multiple callback
     *     listeners can be registered for a URI. You can use
     *     [unRegisterChange]{@link photoAccessHelper.PhotoAccessHelper.unRegisterChange} to unregister all listeners
     *     for the URI or a specified callback listener.
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
     * Obtains the asset analysis progress. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { AnalysisType } analysisType - Analysis type. The default value is null.
     *     <br>This parameter is mandatory
     *     in API versions 12 to 21 and optional from API version 22 onwards. [since 12 - 22]
     * @param { AnalysisType } [analysisType] - Analysis type. The default value is null.
     *     <br>This parameter is mandatory in API versions 12 to 21 and optional from API version 22 onwards. [since 23]
     * @returns { Promise<string> } Promise used to return a string in JSON format. The string indicates the asset
     *     analysis progress.
     *     <br>If the parameter is empty, the overall progress is returned. If the parameter is provided, the progress
     *     corresponding to the specified analysis type is returned.
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
     * Unregisters listening for the specified URI. Multiple callbacks can be registered for a URI for listening. You 
     * can use this API to unregister the listening of the specified callbacks or all callbacks.
     *
     * @param { string } uri - URI of the photo asset, URI of the album, or
     *     [DefaultChangeUri]{@link @ohos.file.photoAccessHelper:photoAccessHelper.DefaultChangeUri}.
     * @param { Callback<ChangeData> } [callback] - Callback to unregister. If this parameter is not specified, all the
     *     callbacks for listening for the URI will be canceled. **NOTE**: The specified callback unregistered will not
     *     be invoked when the data changes.
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
     * Creates a dialog box for deleting media files. This API uses an asynchronous callback to return the result. The 
     * deleted media files are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - URIs of the media files to delete. A maximum of 300 media files can be
     *     deleted.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
     * Creates a dialog box for deleting media files. This API uses a promise to return the result. The deleted media 
     * files are moved to the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<string> } uriList - URIs of the media files to delete. A maximum of 300 media files can be
     *     deleted.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Displays a dialog box for the user to confirm whether to save the images or videos. If the user agrees to save 
     * the images or videos, this API returns a list of URIs that have been created and granted save permissions (this 
     * list is permanent), and the application can use these URIs to write the images or videos. If the user declines to
     * save the images or videos, this API returns an empty list.
     * 
     * The dialog box must display the application name, but this cannot be directly obtained. Therefore, before calling
     * this API, ensure that the **label** and **icon** items are configured in the **abilities** tag in the 
     * [module.json5 configuration file](docroot://quick-start/module-configuration-file.md). Note that the icon is not 
     * affected by the **icon** item in the **abilities** tag and cannot be modified.
     * 
     * > **NOTE**
     * >
     * > If the passed URI is a sandbox path, images or videos can be saved but cannot be previewed.
     *
     * @param { Array<string> } srcFileUris - [URIs](docroot://file-management/user-file-uri-intro.md#media-file-uri) of
     *     the images or videos to be saved to the media library.
     *     <br>**NOTE**
     *     <br>- A maximum of 100 images can be saved at a time.
     *     <br>- Only image and video URIs are supported.
     *     <br>- URIs cannot be manually constructed. You must call APIs to obtain them. For details, see
     *     [Obtaining a Media File URI](docroot://file-management/user-file-uri-intro.md#obtaining-a-media-file-uri).
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - Configuration for saving the images or videos,
     *     including the file names. The value must be consistent with that of **srcFileUris**.
     *     <br>**NOTE**
     *     <br>If a **subtype** option is passed, the configuration does not take effect. Only DEFAULT images can 
     *     be saved.
     * @returns { Promise<Array<string>> } Promise used to return a URI list. The URIs are granted with the permission
     *     for the application to write data. If the URIs fail to be generated, a batch creation error code will be
     *     returned.
     *     <br>The return values are as follows:
     *     <br>- **-3006**: Invalid characters, which are not allowed.
     *     <br>-**-2004**: The image type does not match the file name extension.
     *     <br>-**-203**: Invalid file operation.
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
     * Displays a dialog box for the user to confirm whether to save the images or videos. This API uses a promise to 
     * return the result.
     * 
     * > **NOTE**
     * >
     * > - If the user agrees, the list of created URIs with the save permission granted is returned. The list is 
     * > permanently valid and supports image or video writing. If the user rejects, an empty list is returned.
     * >
     * > - The application name and icon need to be displayed in the dialog box. The name and icon need to be configured
     * > in the **label** and **icon** items in the **abilities** tag of the 
     * > [module.json5 configuration file](docroot://quick-start/module-configuration-file.md).
     * >
     * > - When the passed URI is a sandbox path, images or videos can be saved properly, but the preview is not 
     * > displayed.
     *
     * @param { Array<string> } srcFileUris - [URIs](docroot://file-management/user-file-uri-intro.md#media-file-uri) of
     *     the images or videos to be saved to the media library.
     *     <br>**NOTE**
     *     <br>- A maximum of 100 images can be saved at a time.
     *     <br>- Only image and video URIs are supported.
     *     <br>- URIs cannot be manually constructed. You must call APIs to obtain them. For details, see
     *     [Obtaining a Media File URI](docroot://file-management/user-file-uri-intro.md#obtaining-a-media-file-uri).
     * @param { Array<CreationSetting> } creationSettings - Configuration for saving images or videos to the media
     *     library, including the file name. The URI in this parameter must correspond to that in the **srcFileUris**
     *     parameter.
     * @returns { Promise<Array<string>> } Promise used to return a URI list. The application can use the returned URI
     *     to write data.
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
     * Displays a dialog box for the user to confirm whether to save an image or video. This API uses a promise to 
     * return the result.
     * 
     * > **NOTE**
     * >
     * > - If the user agrees to save the images or videos, this API returns a URI that has been created and granted 
     * > with the save permission (this URI is permanent), and the application can use this URI to write the image or 
     * > video. If the user declines to save the image or video, this API returns an empty string.
     * >
     * > - The dialog box must display the application name, but this cannot be directly obtained. Therefore, before 
     * > calling this API, ensure that the **label** and **icon** items are configured in the **abilities** tag in the 
     * > [module.json5 configuration file](docroot://quick-start/module-configuration-file.md). Note that the icon is 
     * > not affected by the **icon** item in the **abilities** tag and cannot be modified.
     * >
     * > - If the passed URI is a sandbox path, images or videos can be saved but cannot be previewed.
     *
     * @param { string } srcFileUri - [URIs](docroot://file-management/user-file-uri-intro.md#media-file-uri) of the
     *     images or videos to be saved to the media library.
     *     <br>**NOTE**
     *     <br>- Only one image can be saved at a time.
     *     <br>- Only image and video URIs are supported.
     *     <br>- URIs cannot be manually constructed. You must call APIs to obtain them. For details, see
     *     [Obtaining a Media File URI](docroot://file-management/user-file-uri-intro.md#obtaining-a-media-file-uri).
     * @param { CreationSetting } creationSetting - Configuration for saving the image or video, including the file
     *     name. The value must be consistent with that of **srcFileUri **.
     * @param { boolean } isImageFullyDisplayed - Whether the image is displayed completely. The value **true**
     *     indicates that the image is displayed completely, and **false** indicates the opposite.
     * @returns { Promise<string> } Promise used to return the URI of the media library file to the application. The
     *     URIs are granted with the permission for the application to write data. If the URIs fail to be generated, a
     *     batch creation error code will be returned.
     *     <br>The return values are as follows:
     *     <br>- **-3006**: Invalid characters, which are not allowed.
     *     <br>-**-2004**: The image type does not match the file name extension.
     *     <br>-**-203**: Invalid file operation.
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
     * Creates media assets for an application with the specified token ID. The returned URIs have been granted with the
     * permission for writing the media assets (images or videos).
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } bundleName - Bundle name of the target application.
     * @param { string } appName - Name of the target application.
     * @param { long } tokenId - Token ID of the target application.
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - Configuration for creating (saving) the media assets
     *     in the media library.
     * @returns { Promise<Array<string>> } Promise used to return the URIs of the media asset files in the media
     *     library. The target application (identified by **tokenId**) can write the media assets based on the URIs
     *     without requesting the write permission. If the URIs fail to be generated, a batch creation error code will
     *     be returned.
     *     <br>The error code **-3006** means that there are invalid characters; **-2004** means that the image type 
     *     does not match the file name extension; **-203** means that the file operation is abnormal.
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
     * Creates an asset with a temporary permission of the given period. When this API is called by an application for 
     * the first time, a dialog box will be displayed for the user to confirm whether to save the asset. If the user 
     * agrees to save the asset, the asset instance will be created and the file URI granted with the save permission 
     * will be returned. The application can write the asset based on the URI.
     * 
     * Within 5 minutes after the user agrees to save the asset, if the same application calls this API again, the 
     * authorized URI can be automatically returned without the need to display the confirmation dialog box. Exiting the
     * application will terminate the authorization, and the user need to re-trigger the dialog box for authorization 
     * confirmation when the application is re-launched.
     *
     * @permission ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO
     * @param { PhotoCreationConfig } photoCreationConfig - Configuration for saving a media asset (image or video) to
     *     the media library, including the file name.
     *     <br>**NOTE**
     *     <br>If a **subtype** option is passed, the configuration does not take effect. Only DEFAULT images can 
     *     be saved.
     * @returns { Promise<string> } Promise used to return the URI of the asset saved. The URIs are granted with the
     *     permission for the application to write data. If the URIs fail to be generated, a batch creation error code
     *     will be returned.
     *     <br>The error code **-3006** means that there are invalid characters; **-2004** means that the image type 
     *     does not match the file name extension; **-203** means that the file operation is abnormal.
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
     * Displays the dialog box for the first time for the user to confirm whether to save the asset. This API uses a 
     * promise to return the result.
     * 
     * > **NOTE**
     * >
     * > - After the user agrees to save the asset, the API returns the URI of the created asset that has the save 
     * > permission. The application can use the URI to write the image or video.
     * >
     * > - Within 5 minutes after the user agrees to save the asset, if the same application calls this API again, the 
     * > system directly returns the authorized URI for the application to save the image or video without displaying a 
     * > confirmation dialog box. Exiting the application will terminate the authorization, and the user need to re-
     * > trigger the dialog box for authorization confirmation when the application is re-launched.
     *
     * @permission ohos.permission.SHORT_TERM_WRITE_IMAGEVIDEO
     * @param { CreationSetting } creationSetting - Configuration for saving a media asset (image or video) to the media
     *     library, including the file name.
     * @returns { Promise<string> } Promise used to return the URI of the media library file to the application. The
     *     application can use the returned URI to write data.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 14000011 - Internal system error
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    createAssetWithShortTermPermissionEx(creationSetting: CreationSetting): Promise<string>;
    /**
     * Creates assets with a temporary permission. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } bundleName - Bundle name of the target application.
     * @param { string } appName - Name of the target application.
     * @param { string } appId - ID of the target application.
     * @param { long } tokenId - Unique identifier for the temporary authorization.
     * @param { AuthorizationMode } authorizationMode - Authorization mode. No confirmation dialog box is displayed when
     *     the application with the temporary permission saves media assets in the give period of time.
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - Configuration for creating (saving) the media assets
     *     in the media library.
     * @returns { Promise<Array<string>> } Promise used to return the URIs of the media asset files in the media
     *     library. The target application (identified by **appid**) can write the media assets based on the URIs
     *     without requesting the write permission. If the URIs fail to be generated, a batch creation error code will
     *     be returned.
     *     <br>The error code **-3006** means that there are invalid characters; **-2004** means that the image type 
     *     does not match the file name extension; **-203** means that the file operation is abnormal.
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
     * <!--RP1--><!--RP1End-->Grants the read permission for unauthorized URIs, returning a list of URIs that have been created and granted the permission.
     *
     * @param { Array<string> } srcFileUris - [URIs](docroot://file-management/user-file-uri-intro.md#media-file-uri) of
     *     the images or videos to be granted with the permission.
     *     <br>**NOTE**
     *     <br>Only image and video URIs are supported, and the maximum number of URIs is 100.
     * @returns { Promise<Array<string>> } Promise used to return the URIs granted with the permission.
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
      * Grants the read permission for unauthorized URIs. This API uses a promise to return the authorization result.
      * 
      * It contains the list of URIs that have been created and granted the save permission and the list of invalid URIs.
      *
      * @param { Array<string> } srcFileUris - [URIs](docroot://file-management/user-file-uri-intro.md#media-file-uri) of
      *     the images or videos to be granted with the permission.
      *     <br>**NOTE**
      *     <br>Only image and video URIs are supported, and the maximum number of URIs is 100.
      * @returns { Promise<RequestReadPermissionResult> } Promise used to return the list of URIs granted with the
      *     permission and the list of invalid URIs.
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
     * Obtains the index of an image or video in an album. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } photoUri - URI of the media asset whose index is to be obtained.
     * @param { string } albumUri - Album URI, which can be an empty string. If it is an empty string, all the media
     *     assets in the Gallery are obtained by default.
     * @param { FetchOptions } options - Retrieval options. Only one search condition or sorting mode must be set in
     *     **predicates**. If no value is set or multiple search criteria or sorting modes are set, the API cannot be
     *     called successfully.
     * @param { AsyncCallback<int> } callback - Callback used to return the index obtained.
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
     * Obtains the index of an image or video in an album. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } photoUri - URI of the media asset whose index is to be obtained.
     * @param { string } albumUri - Album URI, which can be an empty string. If it is an empty string, all the media
     *     assets in the Gallery are obtained by default.
     * @param { FetchOptions } options - Retrieval options. Only one search condition or sorting mode must be set in
     *     **predicates**. If no value is set or multiple search criteria or sorting modes are set, the API cannot be
     *     called successfully.
     * @returns { Promise<int> } Promise used to return the index obtained.
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
     * Releases the **PhotoAccessHelper** instance. This API uses an asynchronous callback to return the result.
     * 
     * Call this API when the APIs of the PhotoAccessHelper instance are no longer used.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * Releases the **PhotoAccessHelper** instance. This API uses a promise to return the result.
     * 
     * Call this API when the APIs of the PhotoAccessHelper instance are no longer used.
     *
     * @returns { Promise<void> } Promise that returns no value.
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
     * Saves the Gallery widget information bound to a single image to the database. This API uses an asynchronous 
     * callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - Information about the Gallery widget to save, which includes the ID of the widget and
     *     the URI of the image bound to the widget.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
     * Saves the Gallery widget information bound to a single image to the database. This API uses a promise to return 
     * the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - Information about the Gallery widget to save, which includes the ID of the widget and
     *     the URI of the image bound to the widget.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Saves the Gallery widget information bound to a group of images to the database. This API uses a promise to 
     * return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { GalleryFormInfo } info - Information about the Gallery widget, which includes the ID of the widget and
     *     the URIs of the image or album bound to the widget.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Removes the Gallery widget information bound to a single image from the database. This API uses an asynchronous 
     * callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - Information about the Gallery widget to save, which includes the ID of the widget and
     *     the URI of the image bound to the widget.
     * @param { AsyncCallback<void> } callback - Callback that returns no value.
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
     * Removes the Gallery widget information bound to a single image from the database. This API uses a promise to 
     * return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { FormInfo } info - Information about the Gallery widget to save, which includes the ID of the widget and
     *     the URI of the image bound to the widget.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Removes the Gallery widget information bound to a group of images from the database. This API uses a promise to 
     * return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { GalleryFormInfo } info - Information about the Gallery widget, which includes the ID of the widget and
     *     the URIs of the image or album bound to the widget.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Updates the information about a Gallery widget and saves the information to the database. This API uses a promise
     * to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { GalleryFormInfo } info - Information about the Gallery widget, which includes the ID of the widget and
     *     the URIs of the image or album bound to the widget.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Applies media changes. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { MediaChangeRequest } mediaChangeRequest - Request for asset changes or album changes.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the index construction progress. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Promise used to return a string in JSON format. The string indicates the number of
     *     images that have been analyzed, the total number of images, the number of videos that have been analyzed, and
     *     the total number of videos.
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
     * Grants an application the permission to access multiple URIs. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { long } tokenId - ID of the target application.
     * @param { Array<string> } uriList - A list of URIs, which cannot exceed 1000.
     * @param { PhotoPermissionType } photoPermissionType - Type of the permission to be granted. For details, see the
     *     enum.
     * @param { HideSensitiveType } hideSensitiveType - Type of the information to hide. This parameter is reserved.
     *     Currently, any enumerated value of **HideSensitiveType** can be passed in.
     * @returns { Promise<int> } Promise used to return the result. The value **0** means that the permission is granted
     *     to the application. The value **-1** means that the permission fails to be granted.
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
     * Grants an application the permission to access a URI. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { long } tokenId - ID of the target application.
     * @param { string } uri - URI of the media asset.
     * @param { PhotoPermissionType } photoPermissionType - Type of the permission to be granted. For details, see the
     *     enum.
     * @param { HideSensitiveType } hideSensitiveType - Type of the information to hide. This parameter is reserved.
     *     Currently, any enumerated value of **HideSensitiveType** can be passed in.
     * @returns { Promise<int> } Promise used to return the result. The value **0** means that the permission is granted
     *     to the application. The value **1** means that the application already has the permission. The value **-1**
     *     means that the permission fails to be granted.
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
     * Cancels the permission for accessing a URI from an application. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { long } tokenId - ID of the target application.
     * @param { string } uri - URI of the media asset.
     * @param { PhotoPermissionType } photoPermissionType - Permission type.
     * @returns { Promise<int> } Promise used to return the result. The value **0** means the operation is successful,
     *     and the value **-1** means the opposite.
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
     * Generates a thumbnail based on the specified rule.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicate - Rule for generating the thumbnail.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful, the
     *     notification task ends, and **err** is undefined. If the task fails, **err** is an error object.
     * @returns { int } Promise used to return the ID of the thumbnail generation task.
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
     * Generates a thumbnail based on the specified rule. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicate - Predicates for generating a thumbnail.
     * @param { AsyncCallback<void> } callback - Callback used to notify that the task is complete when the operation is
     *     successful.
     * @param { AsyncCallback<int> } response - Callback used to return whether there are ungenerated thumbnails. If
     *     **1** is returned, all thumbnails have been generated. If **0** is returned, some thumbnails have not been
     *     generated.
     * @returns { int } Promise used to return the ID of the thumbnail generation task.
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
     * Stops generating a thumbnail.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { int } taskId - ID of the thumbnail generation task to stop.
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
     * Obtains the shared photo assets.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { FetchOptions } options - Options for obtaining the shared photo assets.
     * @returns { Array<SharedPhotoAsset> } Shared photo assets obtained.
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
     * Obtains the list of image or video file name extensions supported by the media library.
     *
     * @param { PhotoType } photoType - Type of the file.
     * @returns { Promise<Array<string>> } Promise used to return an array of the supported image or video file name
     *     extensions.
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
     * Starts asset analysis.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AnalysisType } type - Smart analysis type. Only **ANALYSIS_SEARCH_INDEX** is supported.
     * @param { Array<string> } assetUris - Array of asset URIs.
     *     <br>- If this parameter is specified, only the given assets are analyzed.
     *     <br>- If this parameter is left blank, full analysis is performed.
     * @returns { Promise<int> } Promise used to return the task ID of the service.
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
     * Starts asynchronous asset analysis. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AnalysisConfig } config - Asset analysis configuration. The **uris** in the **config** parameter are
     *     obtained from the [PhotoAsset]{@link @ohos.file.photoAccessHelper:photoAccessHelper} object.
     * @param { Callback<AnalysisResult> } callback - Callback used to return the asset analysis result.
     * @returns { Promise<int> } Promise used to return the service task ID.
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
     * Stops asset analysis.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { AnalysisConfig } config - Asset analysis configuration.
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
     * Subscribes to changes of medialibrary availability.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<MediaLibraryAvailability> } callback - Callback used to return the MediaLibraryAvailability.
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
     * Unsubscribes to changes of medialibrary availability.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<MediaLibraryAvailability> } [callback] - Callback used to return the MediaLibraryAvailability.
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
    offMediaLibraryAvailability(callback?: Callback<MediaLibraryAvailability>): void;

    /**
     * Obtains album information by album IDs. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<int> } albumIds - Array of album IDs.
     * @returns { Promise<Map<int, Album>> } Promise used to return the map object that contains the album information.
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
     * Creates assets for the current application or other applications in the specified source or user album. This API 
     * uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoCreationSource } source - Application information provided to create assets on behalf of the
     *     application.
     * @param { string } albumUri - URI of the album.
     * @param { boolean } isAuthorized - Whether to authorize other applications. **true** to authorize, **false**
     *     otherwise.
     * @param { Array<PhotoCreationConfig> } photoCreationConfigs - Configuration for creating (saving) the media assets
     *     in the media library.
     * @returns { Promise<Array<string>> } Promise used to return the URIs of the media asset files in the media
     *     library.
     *     <br>The target application (identified by **appid**) can write the media assets based on the URIs without requesting
     *     the write permission. If the URIs fail to be generated, a batch creation error code will be returned.
     *     <br>The error code **-3006** means that there are invalid characters; **-2004** means that the image type does not
     *     match the file name extension; **-203** means that the file operation is abnormal.
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
    createAssetsForAppWithAlbum(source: PhotoCreationSource, albumUri: string, isAuthorized: boolean,
      photoCreationConfigs: Array<PhotoCreationConfig>): Promise<Array<string>>;

    /**
     * Obtains the values of specified properties for an array of 
     * [PhotoAsset]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAsset} objects in batches.
     *
     * @param {PhotoAsset[]} assets - Array of files for which property values are to be retrieved.
     * @param {string[]} members - Array of properties for which values are to be retrieved.
     * @returns { PhotoAssetParams } Array of record types that map file property names to their values.
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
     * Registers a listener for the **'photoChange'** event to monitor media asset changes. This API uses a callback to 
     * return the result, and it accepts multiple callbacks.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoChange' } type - Event type. The value is fixed at **'photoChange'**. After the registration is
     *     complete, any change to the media assets is returned through the callback.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback used to return the media asset information after
     *     change, which is
     *     [PhotoAssetChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAssetChangeInfos}.
     *     <br>**NOTE**
     *     <br>You can register multiple listeners using this API, and you can call
     *     [off('photoChange')]{@link photoAccessHelper.PhotoAccessHelper.off(type: 'photoChange', callback?: Callback<PhotoAssetChangeInfos>)}
     *     to unregister all listeners or a specific one.
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
     * Unregisters the listener for the **'photoChange'** event to stop monitoring media asset changes. If multiple 
     * listeners are registered, you can unregister a specific listener by specifying **callback**. Alternatively, you 
     * can unregister all of them without specifying **callback**.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoChange' } type - Event type. The value is fixed at **'photoChange'**. After the unregistration is
     *     complete, any change to the media assets is no longer returned through the callback.
     * @param { Callback<PhotoAssetChangeInfos> } [callback] - Exact callback you previously registered with
     *     [on('photoChange')]{@link photoAccessHelper.PhotoAccessHelper.on(type: 'photoChange', callback: Callback<PhotoAssetChangeInfos>)}
     *     . If this parameter is left unspecified, all listeners for the **'photoChange'** event are unregistered.<br>
     *     **NOTE**<br>Once a specific callback is unregistered, it will not be invoked when a media asset changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     <br>1. The type is not fixed at 'photoChange'; 
     *     <br>2. The same callback is registered repeatedly.
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
     * Registers a listener for the **'hiddenPhotoChange'** event to monitor hidden media asset changes. This API uses a
     * callback to return the result, and it accepts multiple callbacks.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenPhotoChange' } type - Event type. The value is fixed at **'hiddenPhotoChange'**. After the
     *     registration is complete, any change to the hidden media assets is returned through the callback.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback used to return the hidden media asset information
     *     after change, which is
     *     [PhotoAssetChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAssetChangeInfos}.
     *     <br>**NOTE**
     *     <br>You can register multiple listeners using this API, and you can call
     *     [off('hiddenPhotoChange')]{@link photoAccessHelper.PhotoAccessHelper.off(type: 'hiddenPhotoChange', callback?: Callback<PhotoAssetChangeInfos>)}
     *     to unregister all listeners or a specific one.
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
     * Unregisters a listener for the **'hiddenPhotoChange'** event to stop monitoring hidden media asset changes. If 
     * multiple listeners are registered, you can unregister a specific listener by specifying **callback**. 
     * Alternatively, you can unregister all of them without specifying **callback**.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenPhotoChange' } type - Event type. The value is fixed at **'hiddenPhotoChange'**. After the
     *     unregistration is complete, any change to the hidden media assets is no longer returned through the callback.
     * @param { Callback<PhotoAssetChangeInfos> } [callback] - Exact callback you previously registered with
     *     [on('hiddenPhotoChange')]{@link photoAccessHelper.PhotoAccessHelper.on(type: 'hiddenPhotoChange', callback: Callback<PhotoAssetChangeInfos>)}
     *     . If this parameter is left unspecified, all listeners for the **'hiddenPhotoChange'** event are
     *     unregistered.
     *     <br>**NOTE**
     *     <br>Once a specific callback is unregistered, it will not be invoked when a hidden media asset changes.
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
     * Registers a listener for the **'trashedPhotoChange'** event to monitor media asset changes in the trash. This API
     * uses a callback to return the result, and it accepts multiple callbacks.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedPhotoChange' } type - Event type. The value is fixed at **'trashedPhotoChange'**. After the
     *     registration is complete, any change to the trashed media assets is returned through the callback.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback used to return the trashed media asset information
     *     after change, which is
     *     [PhotoAssetChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAssetChangeInfos}.
     *     <br>**NOTE**
     *     <br>You can register multiple listeners using this API, and you can call
     *     [off('trashedPhotoChange')]{@link photoAccessHelper.PhotoAccessHelper.off(type: 'trashedPhotoChange', callback?: Callback<PhotoAssetChangeInfos>)}
     *     to unregister all listeners or a specific one.
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
     * Unregisters a listener for the **'trashedPhotoChange'** event to stop monitoring media asset changes in the 
     * trash. If multiple listeners are registered, you can unregister a specific listener by specifying **callback**. 
     * Alternatively, you can unregister all of them without specifying **callback**.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedPhotoChange' } type - Event type. The value is fixed at **'trashedPhotoChange'**. After the
     *     unregistration is complete, any change to the trashed media assets is no longer returned through the
     *     callback.
     * @param { Callback<PhotoAssetChangeInfos> } [callback] - Exact callback you previously registered with
     *     [on('trashedPhotoChange')]{@link photoAccessHelper.PhotoAccessHelper.on(type: 'trashedPhotoChange', callback: Callback<PhotoAssetChangeInfos>)}
     *     . If this parameter is left unspecified, all listeners for the **'trashedPhotoChange'** event are
     *     unregistered.
     *     <br>**NOTE**
     *     <br>Once a specific callback is unregistered, it will not be invoked when a trashed media asset changes.
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
     * Listens for the changes of media assets associated with the smart analysis album. The change carries the smart 
     * analysis album change information. The asset change notification is sent only when the asset change involves the 
     * smart analysis album information change. The asset change result is returned through the callback. Multiple 
     * callbacks can be registered. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback used to return the
     *     [PhotoAssetChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAssetChangeInfos} of the
     *     corresponding smart analysis album.
     *     <br>**NOTE**
     *     <br>You can register multiple listeners using this API, and you can call
     *     [offAnalysisPhotoChange]{@link photoAccessHelper.PhotoAccessHelper.offAnalysisPhotoChange(callback?: Callback<PhotoAssetChangeInfos>)}
     *     to unregister all listeners or a specific one.
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
     * Cancels the listening for the media asset changes related to the smart analysis album. If multiple listeners are 
     * registered, you can unregister a specific listener by specifying **callback**. Alternatively, you can unregister 
     * all of them without specifying **callback**. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { Callback<PhotoAssetChangeInfos> } [callback] - Callback used to return the media asset information of
     *     the corresponding smart analysis album. If this parameter is set, the callback listener specified during
     *     [onAnalysisPhotoChange]{@link photoAccessHelper.PhotoAccessHelper.onAnalysisPhotoChange(callback: Callback<PhotoAssetChangeInfos>)}
     *     registration is canceled. If this parameter is not set, all listeners of
     *     [onAnalysisPhotoChange]{@link photoAccessHelper.PhotoAccessHelper.onAnalysisPhotoChange(callback: Callback<PhotoAssetChangeInfos>)}
     *     are canceled.
     *     <br>**NOTE**
     *     <br>Once a specific callback is unregistered, it will not be invoked when the assets
     *     in the smart analysis album change.
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
     * Registers a listener for the **'photoAlbumChange'** event to monitor album changes. This API uses a callback to 
     * return the result, and it accepts multiple callbacks.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoAlbumChange' } type - Event type. The value is fixed at **'photoAlbumChange'**. After the
     *     registration is complete, any change to the albums is returned through the callback.
     * @param { Callback<AlbumChangeInfos> } callback - Callback used to return the album information after change,
     *     which is [AlbumChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.AlbumChangeInfos}.
     *     <br>**NOTE**
     *     <br>You can register multiple listeners using this API, and you can call
     *     [off('photoAlbumChange')]{@link photoAccessHelper.PhotoAccessHelper.off(type: 'photoAlbumChange', callback?: Callback<AlbumChangeInfos>)}
     *     to unregister all listeners or a specific one.
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
     * Unregisters a listener for the **'photoAlbumChange'** event to stop monitoring album changes. If multiple 
     * listeners are registered, you can unregister a specific listener by specifying **callback**. Alternatively, you 
     * can unregister all of them without specifying **callback**.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'photoAlbumChange' } type - Event type. The value is fixed at **'photoAlbumChange'**. After the
     *     unregistration is complete, any change to the albums is no longer returned through the callback.
     * @param { Callback<AlbumChangeInfos> } [callback] - Exact callback you previously registered with
     *     [on('photoAlbumChange')]{@link photoAccessHelper.PhotoAccessHelper.on(type: 'photoAlbumChange', callback: Callback<AlbumChangeInfos>)}
     *     . If this parameter is left unspecified, all listeners for the **'photoAlbumChange'** event are unregistered.
     *     <br>**NOTE**
     *     <br>Once a specific callback is unregistered, it will not be invoked when an album changes.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 23800151 The scenario parameter verification fails. Possible causes:
     *     The same callback is unregistered repeatedly.
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
     * Registers a listener for the **'hiddenAlbumChange'** event to monitor hidden album changes. This API uses a 
     * callback to return the result, and it accepts multiple callbacks.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenAlbumChange' } type - Event type. The value is fixed at **'hiddenAlbumChange'**. After the
     *     registration is complete, any change to the hidden albums is returned through the callback.
     * @param { Callback<AlbumChangeInfos> } callback - Callback used to return the hidden album information after
     *     change, which is [AlbumChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.AlbumChangeInfos}.
     *     <br>**NOTE**
     *     <br>You can register multiple listeners using this API, and you can call
     *     [off('hiddenAlbumChange')]{@link photoAccessHelper.PhotoAccessHelper.off(type: 'hiddenAlbumChange', callback?: Callback<AlbumChangeInfos>)}
     *     to unregister all listeners or a specific one.
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
     * Unregisters a listener for the **'hiddenAlbumChange'** event to stop monitoring hidden album changes. If multiple
     * listeners are registered, you can unregister a specific listener by specifying **callback**. Alternatively, you 
     * can unregister all of them without specifying **callback**.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { 'hiddenAlbumChange' } type - Event type. The value is fixed at **'hiddenAlbumChange'**. After the
     *     unregistration is complete, any change to the hidden albums is no longer returned through the callback.
     * @param { Callback<AlbumChangeInfos> } [callback] - Exact callback you previously registered with
     *     [on('hiddenAlbumChange')]{@link photoAccessHelper.PhotoAccessHelper.on(type: 'hiddenAlbumChange', callback: Callback<AlbumChangeInfos>)}
     *     . If this parameter is left unspecified, all listeners for the **'hiddenAlbumChange'** event are
     *     unregistered.
     *     <br>**NOTE**
     *     <br>Once a specific callback is unregistered, it will not be invoked when a hidden album changes.
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
     * Registers a listener for the **'trashedAlbumChange'** event to monitor album changes in the trash. This API uses 
     * a callback to return the result, and it accepts multiple callbacks.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedAlbumChange' } type - Event type. The value is fixed at **'trashedAlbumChange'**. After the
     *     registration is complete, any change to the trashed albums is returned through the callback.
     * @param { Callback<AlbumChangeInfos> } callback - Callback used to return the trashed album information after
     *     change, which is [AlbumChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.AlbumChangeInfos}.
     *     <br>**NOTE**
     *     <br>You can register multiple listeners using this API, and you can call
     *     [off('trashedAlbumChange')]{@link photoAccessHelper.PhotoAccessHelper.off(type: 'trashedAlbumChange', callback?: Callback<AlbumChangeInfos>)}
     *     to unregister all listeners or a specific one.
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
     * Unregisters a listener for the **'trashedAlbumChange'** event to stop monitoring album changes in the trash. If 
     * multiple listeners are registered, you can unregister a specific listener by specifying **callback**. 
     * Alternatively, you can unregister all of them without specifying **callback**.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { 'trashedAlbumChange' } type - Event type. The value is fixed at **'trashedAlbumChange'**. After the
     *     unregistration is complete, any change to the trashed albums is no longer returned through the callback.
     * @param { Callback<AlbumChangeInfos> } [callback] - Exact callback you previously registered with
     *     [on('trashedAlbumChange')]{@link photoAccessHelper.PhotoAccessHelper.on(type: 'trashedAlbumChange', callback: Callback<AlbumChangeInfos>)}
     *     . If this parameter is left unspecified, all listeners for the **'trashedAlbumChange'** event are
     *     unregistered.
     *     <br>**NOTE**
     *     <br>Once a specific callback is unregistered, it will not be invoked when an album in the trash changes.
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
     * Subscribes to changes of photos and videos.
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
     * Unsubscribes from changes of photos and videos.
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
     * Subscribes to changes of hidden photos and videos.
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
     * Unsubscribes from changes of hidden photos and videos.
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
     * Subscribes to changes of trashed photos and videos.
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
     * Unsubscribes from changes of trashed photos and videos.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
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
    offTrashedPhotoChange(callback?: Callback<PhotoAssetChangeInfos>): void;

    /**
     * Subscribes to album changes.
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
     * Unsubscribes from album changes.
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
     * Subscribes to changes of hidden albums.
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
     * Unsubscribes from changes of hidden albums.
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
     * Registers a listener for changes of a single common asset. This API uses an asynchronous callback to return the 
     * result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Album } album - Album to be listened for. After the registration is complete, any change to the albums
     *     is returned through the callback.
     * @param { Callback<AlbumChangeInfos> } callback - Callback used to return the album information after change,
     *     which is [PhotoAssetChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAssetChangeInfos}.
     *     <br>**NOTE**
     *     <br>This API can be used to register multiple different callbacks.
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
     * Unregisters a listener for a single album. Note the following:
     * 
     * 1. If no parameter is specified, all listeners for the single albums are unregistered.
     * 2. If **album** is specified but **callback** is not specified, all callback listeners of the album are unregistered.
     * 3. If both **album** and **callback** are specified, only the specified callback listener is unregistered.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Album } [album] - Album for which the listener is unregistered. After the unregistration is complete,
     *     any change to the album is no longer returned through the callback.
     * @param { Callback<AlbumChangeInfos> } [callback] - Callback used for the unregistration. If this parameter is not
     *     specified, all callbacks of the **album** parameter are unregistered.
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
     * Registers a listener for changes of a single common asset. This API uses an asynchronous callback to return the 
     * result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PhotoAsset } asset - Asset to be listened for. After the registration is complete, any change to the
     *     media assets is returned through the callback.
     * @param { Callback<PhotoAssetChangeInfos> } callback - Callback used to return the media asset information after
     *     change, which is
     *     [PhotoAssetChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAssetChangeInfos}.
     *     <br>**NOTE**
     *     <br>This API can be used to register multiple different callbacks.
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
     * Unregisters the listener for a single asset. Note the following:
     * 
     * 1. If no parameter is specified, all listeners for the single assets are unregistered.
     * 2. If **asset** is specified but **callback** is not specified,
     *    all callback listeners of the **asset** are unregistered.
     * 3. If both **asset** and **callback** are specified, only the specified callback listener is unregistered.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PhotoAsset } [asset] - Asset for which the listener is canceled. After the unregistration is complete,
     *     any change to the **asset** is no longer returned through the **callback**. If this parameter is not
     *     specified, all listeners for a single asset are unregistered.
     * @param { Callback<PhotoAssetChangeInfos> } [callback] - Callback used for the unregistration. If this parameter
     *     is not specified, all callbacks of the **asset** parameter are unregistered.
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
     * Listens for the smart analysis album and returns the album change result using a callback. You can register 
     * multiple callbacks. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } callback - Callback used to return the
     *     [AlbumChangeInfos]{@link @ohos.file.photoAccessHelper:photoAccessHelper.AlbumChangeInfos} about the smart
     *     analysis album.
     *     <br>**NOTE**
     *     <br>You can register multiple listeners using this API, and you can call
     *     [offAnalysisAlbumChange]{@link photoAccessHelper.PhotoAccessHelper.offAnalysisAlbumChange(callback?: Callback<AlbumChangeInfos>)}
     *     to unregister all listeners or a specific one.
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
     * Cancels the listener for the smart analysis album. If multiple listeners are registered, you can unregister a 
     * specific listener by specifying **callback**. Alternatively, you can unregister all of them without specifying 
     * **callback**. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Callback<AlbumChangeInfos> } [callback] - Callback used to return the changed smart analysis album
     *     information. If this parameter is set, the callback listener specified during
     *     [onAnalysisAlbumChange]{@link photoAccessHelper.PhotoAccessHelper.onAnalysisAlbumChange(callback: Callback<AlbumChangeInfos>)}
     *     registration is canceled. If this parameter is not set, all listeners registered by
     *     [onAnalysisAlbumChange]{@link photoAccessHelper.PhotoAccessHelper.onAnalysisAlbumChange(callback: Callback<AlbumChangeInfos>)}
     *     are canceled.
     *     <br>**NOTE**
     *     <br>Once a specific callback is unregistered, it will not be invoked when a smart album changes.
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
     * Obtains the name of the album that the **PhotoPickerComponent** shows by default. The name string is localized to
     * match the current system language. This API uses a promise to return the result.
     *
     * @returns { Promise<string> } Promise used to return the name of the default album.
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
     * Checks whether a temporary JPEG copy should be created for an application. This API uses a promise to return the 
     * result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } bundleName - Bundle name of the application.
     * @returns { Promise<boolean> } Check result for whether a temporary JPEG copy should be created for the
     *     application. **true** if a temporary JPEG copy should be created, **false** otherwise.
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
     * Obtains the sorting order for system, user, and source albums. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { int } orderStyle - Sorting style for albums.
     *     <br>The value **0** means the phone style, and **1** means the PC style.
     * @param { FetchOptions } [options] - Retrieval options. If this parameter is not specified, the albums are
     *     obtained based on the album type by default.
     * @returns { Promise<FetchResult<AlbumOrder>> } Promise used to return the sorting order.
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
     * Sets the sorting order for system, user, and source albums. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { int } orderStyle - Sorting style for albums.
     *     <br>The value **0** means the phone style, and **1** means the PC style.
     * @param { Array<AlbumOrder> } albumOrders - Array of album sorting orders.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the information about the recent image or video when the application uses the **RecentPhotoComponent** to
     * view recent images or videos. This API uses a promise to return the result.
     *
     * @param { RecentPhotoOptions } [options] - Options for retrieving the recent image or video. If this parameter is
     *     not specified, the latest image is retrieved according to the creation time.
     *     <br>If this parameter is
     *     specified, it must match the **options** configuration in the **RecentPhotoComponent**. Otherwise, there may
     *     be discrepancies where the API finds a recent image or video but the component does not.
     * @returns { Promise<RecentPhotoInfo> } Promise used to return the information about the recent image or video.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    getRecentPhotoInfo(options?: RecentPhotoOptions): Promise<RecentPhotoInfo>;

    /**
     * Queries data in the database using the specified SQL statement. This API does not support write operations or 
     * multi-level queries. This API uses a promise to return the result.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { string } sql - SQL statement to execute.
     * @returns { Promise<ResultSet> } Promise used to return a **ResultSet** object. If the operation fails, an
     *     exception is thrown.
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
     * Obtains the current URIs of cloned assets. This API uses a promise to return the result.
     * 
     * To control the size of the database table space, the system automatically deletes the previously stored clone 
     * data during each clone operation. As a result, this API only keeps the mapping between the user's new and old 
     * device URIs from the latest clone operation.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<string> } oldUris - Array of old URIs before cloning.
     * @returns { Promise<Map<string, string>> } Promise used to return a map of URIs.
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
     * Obtains the current URIs of cloned albums. This API uses a promise to return the result.
     * 
     * To control the size of the database table space, the system automatically deletes the previously stored clone 
     * data during each clone operation. As a result, this API only keeps the mapping between the user's new and old 
     * device URIs from the latest clone operation.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<string> } oldUris - Array of old URIs before cloning.
     * @returns { Promise<Map<string, string>> } Promise used to return a map of URIs.
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
     * Start medialibrary database backup and wait for returning with backup information which only works on beta 
     * device.
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
     * deleting temporary backup database file which only works on beta device.
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
     * Get the corresponding albumId of a bundleName.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } bundleName - The app bundleName.
     * @returns { Promise<int> } - Return the corresponding albumId of the a bundleName.
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
     * Obtains the album ID in the media library based on the album's virtual path. This API uses a promise to return 
     * the result.
     * 
     * This API supports the following albums: camera application album, screenshot application album,
     * and screen recording application album.
     *
     * @param { string } lpath - Virtual path of the album. The value can contain a maximum of 255 characters.
     * @returns { Promise<int> } Promise used to return the album ID.
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
     * Convert to PhotoAsset from path of filemanagerr.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string }path - file path of filemanager.
     * @returns { Promise<PhotoAsset> } Returns successed asset.
     * @throws { BusinessError } 201 - Permission denied
     * @throws {BusinessError } 202 - Called by non-system application.
     * @throws {BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Converted an image after filtering into an asset object;
     *     <br>2.File to be converted is not exist;
     *     <br>3. Only images in the public directory of filemanager can be converted.
     * @throws { BusinessError } 23800301 - Internalsystem error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2.The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    convertToAsset(path: string): Promise<PhotoAsset>;

    /**
     * Converts the **ValuesBucket** record to a **PhotoAsset** object.
     *
     * @param { ValuesBucket[] } assetsData - Array of asset records.
     *     <br>Each element in the array contains the column name and value of the asset.
     *     <br>The array can contain a maximum of 500 elements.
     *     <br>Each element in the array must contain the following asset column information: 
     *     **file_id**, **data**, **display_name**, **media_type**, and **subtype**.
     * @returns { Promise<PhotoAsset[]> } Promise used to return the PhotoAsset object array (which may be empty).
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
     * Checks whether the specified media data is ready.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } mediaDataKey - Media data type to be queried.
     *     <br>Currently, the **date_added_year** value is
     *     supported, indicating whether the adding time (year, month, and day) of the asset is ready.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the media data
     *     is ready, and **false** indicates the opposite.
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
     * Sets the asset compatibility capability. The system performs compatibility processing on special assets (such as 
     * high-resolution assets). If you want to obtain the original assets, you need to register the compatibility 
     * capability with the system.
     *
     * @param { AssetCompatibleCapability } capability - Asset compatibility capability.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the asset compatibility capability based on the bundle name. You can obtain the compatibility capability and
     * determine whether to perform compatibility conversion based on the capability.
     *
     * @param { string } bundleName - Bundle name of the application.
     * @param { AssetCompatibleCapability } capability - Asset compatibility capability.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the asset compatibility capability based on the bundle name. When an application obtains a file, it can 
     * determine whether compatibility conversion is required.
     *
     * @param { string } bundleName - Bundle name of the application.
     * @returns { Promise<AssetCompatibleCapability> } Promise used to return the specified asset compatibility
     *     capability.
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
    getAssetCompatibleCapability(bundleName: string): Promise<AssetCompatibleCapability>

    /**
     * Query whether the assets exist and whether the invoker has read permission on the assets without permission.
     *
     * @param { string[] } uris - Asset URI list.
     * @returns {Promise<Map<string, MediaAssetPermissionState>>} - Returns
     *     whether the assets exist and whether the invoker has read permission on the assets without permission.
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
     * Configure the preferred compatible mode configured by the application based on bundleName.
     * There are three types of applications. For details, see PreferredCompatibleMode.
     *
     * @param { string } bundleName - The app bundleName.
     * @param { PreferredCompatibleMode } compatibleMode - Preferred compatible mode of the application
     * @returns { Promise<void> } Returns void.
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
     * Obtains the preferred compatible mode configured by the application based on bundleName.
     * There are three types of applications. For details, see PreferredCompatibleMode.
     *
     * @param { string } bundleName - The app bundleName.
     * @returns { Promise<PreferredCompatibleMode> } Preferred compatible mode of the application
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
     * Obtain the URI list to be transcoded based on bundleName, photoAsset list, and compatibleFlag.
     * compatibleFlags description. Bit 0 indicates a large image, and bit 1 indicates a Heif image.
     *
     * @param { string } bundleName - The app bundleName.
     * @param { Array<PhotoAsset> } assets - Array of the assets.
     * @param { int } [compatibleFlag] - Compatible configuration mask flag.
     *     <br>The value should be an integer.
     * @returns { Promise<Array<string>> } Promise used to return the media library file uri list that needs to be transcoded.
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
     * Batch create assets,
     * which also support to choose whether specifying an album and whether generating thumbnails in real time.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { CreationSetting[] } creationSettings - List of the photo asset creation settings.
     * @param { boolean } isRealTimeThumb - Option indicating whether to generate thumbnails in real time.
     * @param { string } [albumUri] - Target album when creating assets.
     * @returns { Promise<string[]> } - Returns the asset uris, which is null when creation failed.
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
     * modify the default cover order of album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { DefaultCoverOrderInfo[] } coverOrderInfos - Default cover order information for batch albums.
     * @param { boolean } disableModification - Disabling the modification option.
     * @param { boolean } isAsyncRefreshAlbum - Asynchronously refreshing the default album cover image..
     * @returns { Promise<void> } Returns void.
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
     * modify the default cover order of hidden album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO and ohos.permission.MANAGE_PRIVATE_PHOTOS
     * @param { DefaultCoverOrderInfo[] } coverOrderInfos - Default cover order information for batch albums.
     * @param { boolean } disableModification - Disabling the modification option.
     * @param { boolean } isAsyncRefreshAlbum - Asynchronously refreshing the default album cover image..
     * @returns { Promise<void> } Returns void.
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
     * move assets of medialibrary sandbox to directory of filemanager.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string[] } assets - Assets URI from medialibrary sandbox.
     * @param { string } target - Target directory of filemanager.
     * @param { BatchOperationOptions } [option] - Option for performing batch operations on assets.
     *     <br>Options for bulk operations
     * @returns { Promise<string[]> } Return the paths to the asset
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Moving to the target directory is not supported;
     *     <br>2. Assets to be Moved does not exist;
     *     <br>3. Automatic renaming is not supported.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    moveAssetsToDir(assets: string[], target: string, option?: BatchOperationOptions): Promise<string[]>;

    /**
     * move assets of filemanager to Album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string[] } assets - Assets path from filemanager(e.g., "/Download/test.jpg").
     * @param { Album } target - Target Album.
     * @param { BatchOperationOptions } [option] - Option for performing batch operations on assets.
     * @returns { Promise<string[]> } Returns successed assets URIs.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Moving to the target Album is not supported;
     *     <br>2. Assets to be Moved does not exist;
     *     <br>3. Automatic renaming is not supported.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    moveAssetsByPath(assets: string[], target: Album, option?: BatchOperationOptions): Promise<string[]>;

    /**
     * clone assets to Album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoAsset[] } assets - Assets to be cloned.
     * @param { Album } target - Target Album.
     * @param { BatchOperationOptions } [option] - Option for performing batch operations on assets.
     * @returns { Promise<PhotoAsset[]> } Returns list of successful assets.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Asset to be cloned has been deleted or hidden;
     *     <br>2. Asset to be cloned is cloud pictures, which can not be cloned;
     *     <br>3. The Target Album does not exist.
     *     <br>4. Insufficient system space.
     *     <br>5. Automatic renaming is not supported.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    cloneToAlbum(assets: PhotoAsset[], target: Album,option?: BatchOperationOptions): Promise<PhotoAsset[]>;

    /**
     * clone assets of medialibrary sandbox to directory of filemanager.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string[] } assets - Assets uri to be cloned.
     * @param { string } target - Target directory of filemanager.
     * @param { BatchOperationOptions } [option] - Optionfor performing batch operations on assets.
     * @returns { Promise<string[]> } Returns successed assets path.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Asset to be cloned has been deleted or hidden;
     *     <br>2. Asset to be cloned is cloud pictures, which can not be cloned;
     *     <br>3. The Target Album does not exist.
     *     <br>4. Insufficient system space.
     *     <br>5. Automatic renaming is not supported.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    cloneToDir(assets: string[], target: string, option?: BatchOperationOptions): Promise<string[]>;

    /**
     * clone assets of filemanager to Album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string[] } assets - Assets path to be cloned.
     * @param { Album } target - Target Album.
     * @param { BatchOperationOptions } [option] - Option for performing batch operations on assets.
     * @returns { Promise<string[]> } Returns successed assets URI.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. Asset to be cloned has been deleted or hidden;
     *     <br>2. Asset to be cloned is cloud pictures, which can not be cloned;
     *     <br>3. The Target Album does not exist.
     *     <br>4. Insufficient system space.
     *     <br>5. Automatic renaming is not supported.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    cloneAssetsByPath(assets: string[], target: Album, option?: BatchOperationOptions): Promise<string[]>;

    /**
     * Whether deep storage space optimization can be performed.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates
     *     [startDeepOptimizeSpace()]{@link photoAccessHelper.startDeepOptimizeSpace} can be invoked,
     *     **false** indicates that [startDeepOptimizeSpace()]{@link photoAccessHelper.startDeepOptimizeSpace}
     *     cannot be invoked.
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
     * Obtains the size of the deep storage space.
     * <br>Unit:Byte{s}.
     *
     * This API is time-consuming. Before using this API, you are advised to call [canPerformDeepOptimizeSpace()]
     * {@link photoAccessHelper.canPerformDeepOptimizeSpace} and call this API only when true is returned.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<long> } - Promise used to return size. The size indicates the size of the deep storage space.
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
     * Start deep optimize storage space.
     *
     * Before using this API, you are advised to call [canPerformDeepOptimizeSpace()]
     * {@link photoAccessHelper.canPerformDeepOptimizeSpace} and call this API only when true is returned.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Callback<DeepOptimizeSpaceProgress> } [callback] - Callback used to return the result
     *     `DeepOptimizeSpaceProgress` argument info, Default value: null.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Stop deep optimize storage space.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise that returns no value.
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
     * Convert Asset Attributes to Compatibility Attributes
     *
     * @param { Array<PhotoAsset> } assets - need to be converted.
     * @returns { Promise<Array<PhotoAsset>> } Promise used to return Converted assets.
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
   * Default Cover Order
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export class DefaultCoverOrderInfo {
    /**
     * Album type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public albumType: AlbumType;

    /**
     * Album subtype
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public albumSubtype: AlbumSubtype;

    /**
     * Virtual path of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public lpath?: string;

    /**
     * The field of default cover order.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public orderKey: PhotoKeys;

    /**
     * The subfield of default cover order.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public orderSubKey: PhotoKeys;

    /**
     * order type
     * The value must be an integer within [0,1].
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    public orderType: int;
   }

  /**
   * RecentPhotoOptions Object
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  export class RecentPhotoOptions {
    /**
     * Time range for displaying the recent images or videos, measured in seconds. After setting, the system shows 
     * images or videos taken within the specified time from the current moment. The longest duration you can set is 1 
     * day (86400s).
     * 
     * If the value is less than or equal to 0, greater than 86400, or not set, the system uses the longest duration (1 
     * day) by default. If there are no images or videos within the set time range, the component does not show 
     * anything.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    period?: int;

    /**
     * Types of the file displayed. The default value is **PhotoViewMIMETypes.IMAGE_VIDEO_TYPE**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    MIMEType?: photoAccessHelper.PhotoViewMIMETypes;

    /**
     * Source of the recent image or video, for example, image or video taken by the camera or screenshot. By default, 
     * the source is not restricted.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    photoSource?: PhotoSource;
  }

  /**
   * Recent photo info
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  export class RecentPhotoInfo {
    /**
     * Time when the recent image or video was shot (in milliseconds since January 1, 1970). The unit is ms.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    dateTaken?: long;

    /**
     * Hash value of the name of the recent image or video, which is used to help the application determine whether the 
     * image or video to be displayed is the same as the one displayed before.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    identifier?: string;
  }

  /**
   * Enumeration of PhotoSource type
   *
   * @enum { int } PhotoSource
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
  export enum PhotoSource {
    /**
     * Images and videos from all sources.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    ALL = 0,

    /**
     * Image or video taken by the camera.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    CAMERA = 1,

    /**
     * Screenshot or screen capture video.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    SCREENSHOT = 2
  }

  /**
   * Enumerates the change statuses of thumbnails (including images and videos).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum ThumbnailChangeStatus {
    /**
     * The thumbnail does not exist.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL_NOT_EXISTS = 0,

    /**
     * The thumbnail has been re-created.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL_ADD = 1,

    /**
     * The thumbnail has been updated.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL_UPDATE = 2,

    /**
     * The thumbnail has not changed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    THUMBNAIL_NOT_CHANGE = 3
  }

  /**
   * Enumerates the strong association types of photos.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  enum StrongAssociationType {
    /**
     * Common photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NORMAL = 0,

    /**
     * Cloud-enhanced photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    CLOUD_ENHANCEMENT = 1
  }
  
  /**
   * Enumerates the flags of asset source.
   * 
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum AssetSourceType {
    /**
     * Asset from media.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MEDIA = 0,
    /**
     * Asset from filemanager.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FILE_MANAGER = 1
  }

  /**
   * Describes the notification information about the change of a media asset.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface PhotoAssetChangeInfos {
    /**
     * Type of the media asset change.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    type: NotifyChangeType;

    /**
     * Array of changed media assets. If all media assets need to be queried again, **assetChangeDatas** is null.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    assetChangeDatas: PhotoAssetChangeData[] | null;

    /**
     * Whether the application should query all media assets again. **true** if the application should query all assets 
     * again, **false** otherwise.
     * 
     * **NOTE**
     * 
     * In scenarios involving bulk asset operations or abnormal notifications, **isForRecheck** will be **true**. In 
     * this case, the application should query all assets again.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isForRecheck: boolean;
  }

  /**
   * Describes the change data of a media asset.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface PhotoAssetChangeData {
    /**
     * Data of the media asset before change. In the case of asset addition, **assetBeforeChange** is null.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    assetBeforeChange: PhotoAssetChangeInfo | null;

    /**
     * Data of the media asset after change. In the case of asset deletion, **assetAfterChange** is null.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    assetAfterChange: PhotoAssetChangeInfo | null;

    /**
     * Whether the content of the media asset is changed. **true** if changed, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isContentChanged: boolean;

    /**
     * Whether the media asset is deleted. **true** if deleted, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isDeleted: boolean;

    /**
     * Change status of the thumbnail (image/video).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    thumbnailChangeStatus: ThumbnailChangeStatus;
    
    /**
     * Version number of the media asset notification, which is used to determine the order of notifications.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    version: long;
  }

  /**
   * Describes the information about a media asset.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface PhotoAssetChangeInfo {
    /**
     * URI of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    uri: string;

    /**
     * Type of the media asset (image or video).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    mediaType: PhotoType;

    /**
     * URI of the album that the media asset belongs to.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumUri: string;

    /**
     * ID of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    fileId: int;

    /**
     * Date when the media asset was created.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dateDay: string;

    /**
     * Whether the media asset is marked as a favorite. **true** if marked, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 20 - 24]
     * @publicapi [since 26.0.0]
     * @since 20 dynamic
     * @since 23 static
     */
    isFavorite: boolean;

    /**
     * Whether the media asset is hidden. **true** if hidden, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isHidden: boolean;

    /**
     * Strong association type of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    strongAssociation: StrongAssociationType;

    /**
     * Accessibility status of the thumbnail.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    thumbnailVisible: ThumbnailVisibility;

    /**
     * Unix timestamp when the media asset was deleted, in milliseconds.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dateTrashedMs: long;

    /**
     * Unix timestamp when the media asset was created, in milliseconds.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dateAddedMs: long;

    /**
     * Unix timestamp when the media asset was captured, in milliseconds.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    dateTakenMs: long;

    /**
     * Position of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    position?: PositionType;

    /**
     * Display name of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    displayName?: string;

    /**
     * File size of the media asset, in bytes. The size of a moving photo includes the total size of the image and 
     * video.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    size?: long;

    /**
     * Smart album change information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    albumChangeInfos?: AlbumChangeInfo[] | null;

    /**
     * The hidden time of asset.
     * <br>Unit:milliseconds.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    hiddenTime?: long;

    /**
     * The modified time of asset.
     * <br>Unit:milliseconds.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    dateModifiedMs?: long;

    /**
     * The asset source type.
     * Default value: 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    assetSourceType?: AssetSourceType;
  }

  /**
   * Describes the notification information about the change of an album.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AlbumChangeInfos {
    /**
     * Type of the album change.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    type: NotifyChangeType;

    /**
     * Array of changed albums. If all albums need to be queried again, **albumChangeDatas** is null.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumChangeDatas: AlbumChangeData[] | null;

    /**
     * Whether the application should query all media assets again. **true** if the application should query all assets 
     * again, **false** otherwise.
     * 
     * **NOTE**
     * 
     * In scenarios involving bulk asset operations or abnormal notifications, **isForRecheck** will be **true**. In 
     * this case, the application should query all assets again.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    isForRecheck: boolean;
  }

  /**
   * Describes the change data of an album.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AlbumChangeData {
    /**
     * Data of the album before change. If an album is added, **albumBeforeChange** is null.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumBeforeChange: AlbumChangeInfo | null;

    /**
     * Data of the album after change. In the case of album deletion, **albumAfterChange** is null.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumAfterChange: AlbumChangeInfo | null;

    /**
     * Version number of the album notification, which is used to determine the order of notifications.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    version: long;
  }

  /**
   * Describes the information about an album.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 20 dynamic
   * @since 23 static
   */
  interface AlbumChangeInfo {
    /**
     * Type of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumType: AlbumType;

    /**
     * Subtype of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumSubtype: AlbumSubtype;

    /**
     * Album name.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumName: string;

    /**
     * URI of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    albumUri: string;

    /**
     * Number of images in the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    imageCount: int;

    /**
     * Number of videos in the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    videoCount: int;

    /**
     * Total number of assets in the album, including images and videos.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    count: int;

    /**
     * URI of the album cover asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 20 dynamic
     * @since 23 static
     */
    coverUri: string;

    /**
     * Number of hidden assets in the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hiddenCount: int;

    /**
     * URI of the hidden cover asset in the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hiddenCoverUri: string;

    /**
     * Whether the file content of the album cover has changed. **true** if changed, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isCoverChanged: boolean;

    /**
     * Whether the file content of the hidden album cover has changed. **true** if changed, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    isHiddenCoverChanged: boolean;

    /**
     * Information of the album cover asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    coverInfo?: PhotoAssetChangeInfo;

    /**
     * Information of the hidden album cover asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    hiddenCoverInfo?: PhotoAssetChangeInfo;

    /**
     * Section that defines the order of the album, specifying where the album is displayed in the Gallery.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    orderSection?: int;

    /**
     * Sorting value of the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 dynamic&static
     */
    albumOrder?: int;

    /**
     * Whether the album is hidden. **true** if hidden, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    hidden?: boolean;
    /**
     * The virtual path of album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    lpath?: string;
  }

  /**
   * Defines the Gallery widget information.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  interface GalleryFormInfo {
    /**
     * Widget ID, which is provided when a widget is created in Gallery.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    formId: string;
    /**
     * URIs of the images or albums bound to the widget.
     * 
     * This parameter cannot be empty when creating or updating a widget.
     * 
     * If you attempt to create or update a widget with more than 500 URIs in **assetUris**, only the first 500 URIs are
     * registered for listening. Any URIs beyond the first 500 are not registered. 
     * 
     * When deleting a widget, this parameter can be omitted.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    assetUris?: Array<string>;
  }

  /**
   * Defines the Gallery widget information.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface FormInfo {
    /**
     * Widget ID, which is provided when a widget is created in Gallery.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    formId: string;
    /**
     * URI of the image bound to the widget. When a widget is created, **uri** can be empty or the URI of an image. When
     * a widget is removed, **uri** is not verified and can be empty.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    uri: string;
  }

  /**
   * Enumerates the notification event types.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10 dynamic
   * @since 23 static
   */
  enum NotifyType {
    /**
     * A file asset or album is added.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_ADD,
    /**
     * A file asset or album is updated.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_UPDATE,
    /**
     * A file asset or album is removed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_REMOVE,
    /**
     * A file asset is added to the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_ALBUM_ADD_ASSET,
    /**
     * A file asset is removed from the album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    NOTIFY_ALBUM_REMOVE_ASSET
  }

  /**
   * Enumerates the **DefaultChangeUri** subtypes.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10 dynamic
   * @since 23 static
   */
  enum DefaultChangeUri {
    /**
     * Default **PhotoAsset** URI, which must be used with **forChildUris{true}** to subscribe to change notifications 
     * of all photo assets.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    DEFAULT_PHOTO_URI = 'file://media/Photo',
    /**
     * Default album URI, which must be used with **forChildUris{true}** to subscribe to change notifications of all 
     * albums.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    DEFAULT_ALBUM_URI = 'file://media/PhotoAlbum',
    /**
     * URI of an album in the hidden albums that are displayed by album, that is, the URI of an album with hidden files.
     * Such albums do not include the preset hidden album and the albums in the trash. This URI is used to subscribe to 
     * the change notifications of the hidden albums displayed by album. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    DEFAULT_HIDDEN_ALBUM_URI = 'file://media/HiddenAlbum'
  }

  /**
   * Defines the return value of the listener callback.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 10 dynamic
   * @since 23 static
   */
  interface ChangeData {
    /**
     * Notification type.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    type: NotifyType;
    /**
     * All URIs with the same [NotifyType]{@link @ohos.file.photoAccessHelper:photoAccessHelper.NotifyType}, which can 
     * be **PhotoAsset** or **Album**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 10 dynamic
     * @since 23 static
     */
    uris: Array<string>;
    /**
     * URIs of the changed files in the album. The value may be undefined. Check whether the value is undefined before 
     * using it.
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
   * Enumerates the media file types.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 26.0.0 static
   */
  export enum PhotoViewMIMETypes {
    /**
     * Image.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    IMAGE_TYPE = 'image/*',
    /**
     * Video.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    VIDEO_TYPE = 'video/*',
    /**
     * Image and video.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    IMAGE_VIDEO_TYPE = '*/*',

    /**
     * Moving photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    MOVING_PHOTO_IMAGE_TYPE = 'image/movingPhoto'
  }

  /**
   * Enumeration type of filter operator.
   *
   * @enum { int } FilterOperator
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 26.0.0 static
   */
  export enum FilterOperator {
    /**
     * Equal to.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    EQUAL_TO = 0,
    /**
     * Not equal to.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    NOT_EQUAL_TO = 1,
    /**
     * Greater than.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    MORE_THAN = 2,
    /**
     * Less than.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    LESS_THAN = 3,
    /**
     * Greater than or equal to.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    MORE_THAN_OR_EQUAL_TO = 4,
    /**
     * Less than or equal to.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    LESS_THAN_OR_EQUAL_TO = 5,
    /**
     * Within the specified range.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    BETWEEN = 6,
  }

    /**
     * Enumeration type of single selection mode
     *
     * @enum { number } SingleSelectionMode
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 26.0.0 static
     */
  export enum SingleSelectionMode {
    /**
     * Mode for previewing large images.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 26.0.0 static
     */
    BROWSER_MODE = 0,
    /**
     * Mode for direct selection.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 26.0.0 static
     */
    SELECT_MODE = 1,
    /**
     * Compatibility mode. Tapping the bottom-right area enables direct selection, whereas tapping elsewhere switches to
     * large image preview mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 26.0.0 static
     */
    BROWSER_AND_SELECT_MODE = 2
  }

  /**
   * Defines the basic options for selecting media files from Gallery.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 26.0.0 static
   */
  export class BaseSelectOptions {
    /**
     * Available media file types. **IMAGE_VIDEO_TYPE** is used by default.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    MIMEType?: PhotoViewMIMETypes;

    /**
     * Maximum number of media files that can be selected. The maximum value is **500**, and the default value is **50**
     * .
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    maxSelectNumber?: int;

    /**
     * Whether the image is searchable. **true** if searchable, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    isSearchSupported?: boolean;

    /**
     * Whether photo taking is supported. **true** if supported, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    isPhotoTakingSupported?: boolean;

    /**
     * Image recommendation parameters.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    recommendationOptions?: RecommendationOptions;

    /**
     * URI of the preselected image.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    preselectedUris?: Array<string>;

    /**
     * Whether to enable full image preview if a single image is selected. **true** to enable, **false** otherwise. The 
     * default value is **true**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    isPreviewForSingleSelectionSupported?: boolean;

    /**
     * Single selection mode. The default value is **SingleSelectionMode.BROWSER_MODE**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 26.0.0 static
     */
    singleSelectionMode?: SingleSelectionMode;

    /**
     * Configuration for file type filtering. Multiple types can be specified.
     * 
     * When this parameter is set, the **MIMEType** configuration automatically becomes invalid.
     * 
     * When this parameter is set, only media files of the configured filter type are displayed. You are advised to 
     * notify users that only images or videos of the specified type can be selected.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    mimeTypeFilter?: MimeTypeFilter;

    /**
     * Configuration for file size filtering.
     * 
     * When this parameter is set, only media files within the specified size range are displayed. You are advised to 
     * notify users that only images or videos of the specified size can be selected.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    fileSizeFilter?: FileSizeFilter;

    /**
     * Configuration for video duration filtering.
     * 
     * When this parameter is set, only media files within the specified duration range are displayed. You are advised 
     * to notify users that only videos of the specified length can be selected.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    videoDurationFilter?: VideoDurationFilter;

    /**
     * A string array of filter criteria, supporting combinations of various types.
     * 
     * The string format is as follows: **photoType | photoSubType1,photoSubType2, ... | mimeType1,mimeType2, ...**
     * 
     * - The first part specifies a single **photoType**, which is fixed at **image** or **video**.
     * - The second part lists 1 to *N* photoSubTypes, separated by commas, with an OR relationship. Currently, the 
     * maximum value of *N* is **1**. Options include **movingPhoto** or "*" (ignore).
     * - The third part lists 1 to *N* mimeTypes, separated by commas, with an OR relationship. Currently, the maximum 
     * value of *N* is **10**. The format is similar to [MimeTypeFilter]{@link photoAccessHelper.MimeTypeFilter}.
     * 
     * Filters are combined using intersection logic.
     * 
     * The NOT logic is supported. To exclude types, use parentheses. Each string can have only one set.
     * 
     * If the filter string does not match the specifications, the result is empty.
     * 
     * Only the first three array elements are used; **MIMETypes** and **mimeTypeFilter** are ignored.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    combinedMediaTypeFilter?: Array<string>;

    /**
     * An array used to filter media files by type and size.
     * 
     * Only the first three array elements are used; **MIMETypes** and **fileSizeFilter** are ignored.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
    photoViewMimeTypeFileSizeFilters?: Array<PhotoViewMimeTypeFileSizeFilter>;

    /**
     * Whether the moving photo badge is displayed in the photo browser page. **true** to display the badge, **false** 
     * to hide it. The default is **false**.
     * 
     * If this parameter is set to **true**, [Photoselectresult]{@link photoAccessHelper.PhotoSelectResult} returns the 
     * **movingPhotoBadgeStates** array. The default status of a moving photo is 
     * [MOVING_PHOTO_ENABLED]{@link @ohos.file.photoAccessHelper:photoAccessHelper.MovingPhotoBadgeStateType}.
     * 
     * Note: Use both **isMovingPhotoBadgeShown** and **MovingPhotoBadgeStateType** to determine whether a photo is a 
     * moving photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    isMovingPhotoBadgeShown?: boolean

    /**
     * Media asset filter, with a maximum length of 50 items. If the limit is exceeded, only the first 50 items are 
     * used.
     * 
     * **NOTE**
     * 
     * 1. When this filter is applied, other filters become invalid.
     * 2. When setting multiple conditions, enclose the filter conditions in parentheses to prevent conflicts with
     *    internal filter items.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    assetFilter?: Array<OperationItem>;

    /**
     * Playback mode of the moving photo. The maximum array length is 2. If this limit is exceeded, the first two 
     * elements are used, and the extra ones are automatically ignored.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    autoPlayScenes?: Array<AutoPlayScene>;

    /**
     * Pinch mode of the grid in the picker.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    gridPinchMode?: GridPinchMode;

    /**
     * Global effect of the moving photo. Currently, only **MOVING_PHOTO_ENABLED** and **MOVING_PHOTO_DISABLED** are 
     * supported. The default value is **MOVING_PHOTO_ENABLED**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    globalMovingPhotoState?: MovingPhotoBadgeStateType;

    /**
     * Whether to display the date group information when the scroll bar is dragged. **true**: yes; **false**: no. The 
     * default value is **false**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    showDateOnScrollbar?: boolean;

    /**
     * Configuration for asset compatibility capabilities.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic
     * @since 26.0.0 static
     */
    assetCompatibleCapability?: AssetCompatibleCapability;
 
    /**
     * Preferred compatibility mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    preferredCompatibleMode?: PreferredCompatibleMode;
  }

  /**
   * Enumerates the types of the moving photo badge.
   *
   * @enum { int } MovingPhotoBadgeStateType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  export enum MovingPhotoBadgeStateType {
    /**
     * The media file is not a moving photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    NOT_MOVING_PHOTO = 0,
    /**
     * The moving photo effect is enabled.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    MOVING_PHOTO_ENABLED = 1,
    /**
     * The moving photo effect is disabled.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    MOVING_PHOTO_DISABLED =	2
  }

  /**
   * Describes the configuration for file type filtering.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 26.0.0 static
   */
  class MimeTypeFilter {
    /**
     * Types of media files that PhotoPicker allows users to filter by. The maximum array length is 10, thus supporting 
     * up to 10 specified types.
     * 
     * The filter type is defined by the MIME type, for example, image/jpeg and video/mp4.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
    mimeTypeArray: Array<string>;
  }

  /**
   * Describes the configuration for file size filtering.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 26.0.0 static
   */
    class FileSizeFilter {
    /**
     * Filter operator.
     * 
     * For example, files can be filtered based on being greater than or less than a certain file size.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
      filterOperator: FilterOperator;

    /**
     * File size used for filtering.
     * 
     * The unit is bytes.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
      fileSize: long;

    /**
     * Maximum file size in **FilterOperator.BETWEEN** mode. The default value is **-1**.
     * 
     * The unit is bytes.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
      extraFileSize?: long;
    }

  /**
   * Describes the configuration for video duration filtering.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 19 dynamic
   * @since 26.0.0 static
   */
  class VideoDurationFilter {
    /**
     * Filter operator.
     * 
     * For example, files can be filtered based on being greater than or less than a certain file size.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
      filterOperator: FilterOperator;

    /**
     * Video duration used for filtering.
     * 
     * The unit is milliseconds (ms).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
      videoDuration: int;

    /**
     * Maximum video duration in **FilterOperator.BETWEEN** mode. The default value is **-1**.
     * 
     * The unit is milliseconds (ms).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 19 dynamic
     * @since 26.0.0 static
     */
      extraVideoDuration?: int;
  }

  /**
   * Describes the settings for filtering media files by type and size.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   * @since 26.0.0 static
   */
    class PhotoViewMimeTypeFileSizeFilter {
    /**
     * Media file types used for filtering.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
      photoViewMimeType: PhotoViewMIMETypes;
  
    /**
     * Media file size used for filtering.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 20 dynamic
     * @since 26.0.0 static
     */
      sizeFilter: FileSizeFilter;
    }

    /**
     * Indicates possible value types
     * 
     * @typedef { long | double | string | boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    export type OperationValueType = long | double | string | boolean;

    /**
     * Describes the settings for filtering media files.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    export class OperationItem {
      /**
       * Predicates.
       *
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @stagemodelonly
       * @atomicservice
       * @since 22 dynamic
       * @since 26.0.0 static
       */
      operationType: OperationType;

      /**
       * Column name in the data table.
       * 
       * Currently, only the following key fields are supported: **URI**, **PHOTO_TYPE**, **DISPLAY_NAME**, **SIZE**, 
       * **DURATION**, **WIDTH**, **HEIGHT**, **ORIENTATION**, **FAVORITE**, **TITLE**, **POSITION**, **PHOTO_SUBTYPE**, 
       * **DYNAMIC_RANGE_TYPE**, **COVER_POSITION**, **BURST_KEY**, **LCD_SIZE**, **THM_SIZE**, **DETAIL_TIME**, 
       * **MEDIA_SUFFIX**, **OWNER_ALBUM_ID**, **ASPECT_RATIO** and **DATE_TAKEN_MS**.
       * 
       * When 
       * [select]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker#select(option?: PhotoSelectOptions)}
       * is used to set this parameter, an invalid field results in error code 401. When 
       * [@ohos.file.PhotoPickerComponent (PhotoPickerComponent)]{@link @ohos.file.PhotoPickerComponent} is used to set 
       * this parameter, an invalid field does not trigger the **onPickerControllerReady** callback.
       * 
       * This field is not involved in non-conditional predicates such as **and**, **or**, **beginWrap**, and **endWrap**.
       *
       * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
       * @stagemodelonly
       * @atomicservice
       * @since 22 dynamic
       * @since 26.0.0 static
       */
      field?: PhotoKeys;

      /**
       * Values needed for matching different predicates.
       * 
       * This field is not involved in non-conditional predicates such as **and**, **or**, **beginWrap**, and **endWrap**.
       * 
       * The maximum length is 10; if exceeded, only the first 10 values are considered.
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
   * Request read permission result
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export class RequestReadPermissionResult {
    /**
     * URIs that have been created and granted the save permission.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    authorizedUris?: Array<string>;

    /**
     * URIs that may be deleted, hidden, or renamed.
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
   * Represents the pinch mode of the grid in the picker.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export class GridPinchMode {
    /**
     * Grid pinch mode. If this parameter is set, the pinch function is supported. Otherwise, the pinch function is not 
     * supported.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    gridPinchModeType?: GridPinchModeType;

    /**
     * Grid level after the picker is started. The default value is **STANDARD**.
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
   * Defines additional options for selecting media assets from Gallery. It inherits from **BaseSelectOptions**. It is 
   * used to start the picker of the corresponding user ID space.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 26.0.0 static
   */
  class PhotoSelectOptions extends BaseSelectOptions {
    /**
     * Whether the image can be edited. **true** if editable, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    isEditSupported?: boolean;

    /**
     * Whether to display the button for selecting the original image. **true** to display, **false** otherwise. The 
     * default value is **false**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    isOriginalSupported?: boolean;

    /**
     * Name of the child window.
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
     * Text displayed on the complete button.
     * 
     * The complete button is located in the lower-right corner of the page. It is used by users to signify that they 
     * have finished selecting images.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 14 dynamic
     * @since 26.0.0 static
     */
    completeButtonText?: CompleteButtonText;

    /**
     * ID of the user space to access. The default value is **-1**.
     * 
     * To use it as a parameter of 
     * [PhotoViewPicker.select]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoViewPicker#select(option?: PhotoSelectOptions)}
     * , request the permission **ohos.permission.INTERACT_ACROSS_LOCAL_ACCOUNTS**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 26.0.0 static
     */
    userId?: int;

     /**
     * Information for restoring the PhotoPicker's state from the last exit.
     * 
     * When the selection process is complete, the PhotoPicker returns **contextRecoveryInfo** to the application. The 
     * application can then use the information to restore the PhotoPicker's state and the last viewed grid interface 
     * the next time it starts the PhotoPicker.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    contextRecoveryInfo?: ContextRecoveryInfo;

    /**
     * Whether destruction with 
     * [Navigation]{@link Navigation} is 
     * supported. **true** if supported, **false** otherwise. The default value is **false**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    isDestroyedWithNavigation?: boolean;

    /**
     * Maximum number of photos that can be selected.  
     * 
     * A maximum of 500 photos can be selected. The default value is **500**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    maxPhotoSelectNumber?: int;

    /**
     * Maximum number of videos that can be selected.  
     * 
     * A maximum of 500 videos can be selected. The default value is **500**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    maxVideoSelectNumber?: int;

    /**
     * Whether to automatically switch to the full image preview mode after a photo is taken in single-selection mode. 
     * **true** means to switch, and **false** means the opposite. The default value is **false**.
     * 
     * Note: This parameter takes effect only when 
     * [SingleSelectionMode]{@link @ohos.file.photoAccessHelper:photoAccessHelper.SingleSelectionMode} is set to 
     * **BROWSER_MODE** or **BROWSER_AND_SELECT_MODE** and 
     * [BaseSelectOptions.isPreviewForSingleSelectionSupported]{@link @ohos.file.photoAccessHelper:photoAccessHelper.BaseSelectOptions}
     * is set to **true**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    isReturnToPhotoBrowserEnabled?: boolean;

    /**
     * Support displaying index numbers.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isSelectionNumberVisible?: boolean;
    
    /**
     * Support selection order adjustment.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    isSelectionOrderAdjustable?: boolean;
  }

  /**
   * Defines the image recommendation options. The image recommendation feature depends on the image data analysis 
   * capability, which varies with devices.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 26.0.0 static
   */
  class RecommendationOptions {
    /**
     * Type of the recommended image.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 26.0.0 static
     */
    recommendationType?: RecommendationType;

    /**
     * Text based on which images are recommended. If both **recommendationType** and **textContextInfo** are set, 
     * **textContextInfo** takes precedence over **recommendationType**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    textContextInfo?: TextContextInfo;

    /**
     * List of recommendation types. If images of multiple categories need to be recommended based on the enumerated 
     * value, set this parameter.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    recommendationTypeList?: Array<RecommendationType>;

    /**
     * Recommended tag displayed when the picker is opened. This configuration takes effect only after 
     * **recommendationTypeList** is set.
     * 
     * If the tag exists, the tag page is displayed by default.
     * 
     * If the tag does not exist, the All tag page is displayed by default.
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
   * Represents the text information about the recommended images.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 26.0.0 static
   */
  interface TextContextInfo {
    /**
     * Text based on which images are recommended. The text cannot exceed 250 characters. The default value is an empty 
     * string.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 26.0.0 static
     */
    text?: string;
  }

  /**
   * Defines information about the images or videos selected.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 26.0.0 static
   */
  class PhotoSelectResult {
    /**
     * URIs of the media files selected.
     * 
     * This URI array can be used only by calling the 
     * [photoAccessHelper.getAssets]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>)}
     * API through temporary authorization. For details, see 
     * [Using a Media File URI](docroot://file-management/user-file-uri-intro.md#using-a-media-file-uri).
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    photoUris: Array<string>;

    /**
     * Whether the selected media file is the original image. **true** if yes, **false** otherwise. The default value is
     * **false**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    isOriginalPhoto: boolean;

    /**
     * Information about the context of exiting the PhotoPicker. This information is returned when the selection process
     * is complete and is used by the application within **PhotoSelectOptions** during the subsequent launch of the 
     * PhotoPicker to restore the state from the previous exit.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    contextRecoveryInfo: ContextRecoveryInfo;

    /**
     * Array of moving photo badge states for the media files selected from Gallery.
     * 
     * If **isMovingPhotoBadgeShown** is set to **true**, this array contains the moving photo badge states. Otherwise, 
     * it is empty.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    movingPhotoBadgeStates: Array<MovingPhotoBadgeStateType>;
  }

  /**
   * PhotoViewPicker provides APIs for the user to select images and videos. Before using the APIs of PhotoViewPicker, 
   * you need to create a PhotoViewPicker instance.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @crossplatform [since 12]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 26.0.0 static
   */
  class PhotoViewPicker {
    /**
     * Starts a **photoPicker** page for the user to select one or more images or videos. This API uses a promise to 
     * return the result. You can pass in **PhotoSelectOptions** to specify the type and maximum number of the files to 
     * select. A **PhotoSelectResult** object is returned.
     * 
     * > **NOTE**
     * >
     * > **photoUris** in the PhotoSelectResult object returned by this API has permanent authorization and can be used 
     * > only by calling 
     * > [photoAccessHelper.getAssets]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>)}
     * > . For details, see 
     * > [Using a Media File URI](docroot://file-management/user-file-uri-intro.md#using-a-media-file-uri).
     *
     * @param { PhotoSelectOptions } [option] - Options for selecting files. If this parameter is not specified, up to 5
     *     0 images and videos are selected by default.
     * @returns { Promise<PhotoSelectResult> } Promise used to return information about the images or videos selected.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     *     <br>1. An illegal enumeration value was passed to PhotoSelectOptions.globalMovingPhotoState.
     *     Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration;
     *     <br>2. An illegal enumeration value was passed to PhotoSelectOptions.assetCompatibleAbility. [since 12]
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    select(option?: PhotoSelectOptions): Promise<PhotoSelectResult>;

    /**
     * Starts a **photoPicker** page for the user to select one or more images or videos. This API uses an asynchronous 
     * callback to return the result. You can pass in **PhotoSelectOptions** to specify the media file type and the 
     * maximum number of files to select.
     * 
     * > **NOTE**
     * >
     * > **photoUris** in the PhotoSelectResult object returned by this API has permanent authorization and can be used 
     * > only by calling 
     * > [photoAccessHelper.getAssets]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>)}
     * > . For details, see 
     * > [Using a Media File URI](docroot://file-management/user-file-uri-intro.md#using-a-media-file-uri).
     *
     * @param { PhotoSelectOptions } option - Options for selecting images or videos.
     * @param { AsyncCallback<PhotoSelectResult> } callback - Callback used to return information about the images or
     *     videos selected.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types; 
     *     <br>3. Parameter verification failed.
     * @throws { BusinessError } 13900042 - Unknown error
     * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
     *     <br>1. An illegal enumeration value was passed to PhotoSelectOptions.globalMovingPhotoState.
     *     Only MOVING_PHOTO_ENABLE and MOVING_PHOTO_DISABLE are supported for configuration; [since 12]
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @crossplatform [since 12]
     * @atomicservice [since 11]
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    select(option: PhotoSelectOptions, callback: AsyncCallback<PhotoSelectResult>): void;

    /**
     * Starts a **photoPicker** page for the user to select one or more images or videos. This API uses an asynchronous 
     * callback to return the result.
     * 
     * > **NOTE**
     * >
     * > **photoUris** in the PhotoSelectResult object returned by this API has permanent authorization and can be used 
     * > only by calling 
     * > [photoAccessHelper.getAssets]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.getAssets(options: FetchOptions, callback: AsyncCallback<FetchResult<PhotoAsset>>)}
     * > . For details, see 
     * > [Using a Media File URI](docroot://file-management/user-file-uri-intro.md#using-a-media-file-uri).
     *
     * @param { AsyncCallback<PhotoSelectResult> } callback - Callback used to return information about the images or
     *     videos selected.
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
   * Represents the edited media asset data.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAssetEditData {
    /**
     * Constructor.
     *
     * @param { string } compatibleFormat - Format of the edited data.
     * @param { string } formatVersion - Version of the data format.
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
     * Format of the edited data.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    compatibleFormat: string;

    /**
     * Version of the data format.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    formatVersion: string;

    /**
     * Content edited.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    data: string;
  }

  /**
   * Enumerates the types of the resources to write.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  enum ResourceType {
    /**
     * Image resource.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    IMAGE_RESOURCE = 1,

    /**
     * Video resource.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @atomicservice
     * @since 11 dynamic
     * @since 23 static
     */
    VIDEO_RESOURCE = 2,

    /**
     * Photo proxy. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    PHOTO_PROXY = 3,

    /**
     * Private moving photo. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    PRIVATE_MOVING_PHOTO_RESOURCE = 4,

    /**
     * Metadata resource of the private moving photo. 
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 18 dynamic
     * @since 23 static
     */
    PRIVATE_MOVING_PHOTO_METADATA = 5
  }

  /**
   * Enumerates the types of image files to save.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 13 dynamic
   * @since 23 static
   */
  enum ImageFileType {
    /**
     * JPEG.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     * @since 23 static
     */
    JPEG = 1,

    /**
     * HEIF.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     * @since 23 static
     */
    HEIF = 2
  }
    
  /**
   * Enumerates the effects of a moving photo.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum MovingPhotoEffectMode {
    /**
     * Default effect.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    DEFAULT = 0,

    /**
     * Back-and-forth motion.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    BOUNCE_PLAY = 1,

    /**
     * Continuously repeated animation.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LOOP_PLAY = 2,

    /**
     * Long exposure.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    LONG_EXPOSURE = 3,

    /**
     * Multiple exposures.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    MULTI_EXPOSURE = 4,

    /**
     * Cinemagraph.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    CINEMA_GRAPH = 5,

    /**
     * Image only.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    IMAGE_ONLY = 10
  }

  /**
   * Enumerates the types of segmented video enhancement.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum VideoEnhancementType {
    /**
     * Apply enhancement on the device.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    QUALITY_ENHANCEMENT_LOCAL = 0,

    /**
     * Apply enhancement on the cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    QUALITY_ENHANCEMENT_CLOUD = 1,

    /**
     * Apply enhancement on both the device and cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    QUALITY_ENHANCEMENT_LOCAL_AND_CLOUD = 2
  }

  /**
   * Enumerates the predicates.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  export enum OperationType {
    /**
     * Checks for equality, using the first element of the **value** array to match the predicate. If the array is 
     * longer, only the first element is considered.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    EQUAL_TO = 1,

    /**
     * Checks for inequality, using the first element of the **value** array to match the predicate. If the array is 
     * longer, only the first element is considered.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    NOT_EQUAL_TO = 2,

    /**
     * Checks whether the value is greater than the predicate, using the first element of the **value** array to match 
     * the predicate. If the array is longer, only the first element is considered.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    GREATER_THAN = 3,

    /**
     * Checks whether the value is less than the predicate, using the first element of the **value** array to match the 
     * predicate. If the array is longer, only the first element is considered.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    LESS_THAN = 4,

    /**
     * Checks whether the value is greater than or equal to the predicate, using the first element of the **value** 
     * array to match the predicate. If the array is longer, only the first element is considered.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    GREATER_THAN_OR_EQUAL_TO = 5,

    /**
     * Checks whether the value is less than or equal to the predicate, using the first element of the **value** array 
     * to match the predicate. If the array is longer, only the first element is considered.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    LESS_THAN_OR_EQUAL_TO = 6,

    /**
     * Logical 'AND', similar to 'and' in database queries. No **field** or **value** is needed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    AND = 7,
    
    /**
     * Logical 'OR', similar to 'or' in database queries. No **field** or **value** is needed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    OR = 8,

    /**
     * Matches fields within a specified range, with a maximum value length of 10.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    IN = 9,

    /**
     * Matches fields outside a specified range, with a maximum value length of 10.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    NOT_IN = 10,

    /**
     * Adds a left parenthesis to the predicate, similar to "(" in database queries. It must be used with a right 
     * parenthesis. No **field** or **value** is needed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    BEGIN_WRAP = 11,

    /**
     * Adds a right parenthesis to the predicate, similar to ")" in database queries. It must be used with a left 
     * parenthesis. No **field** or **value** is needed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    END_WRAP = 12,

    /**
     * Matches fields within a specified range,
     * 
     * including both endpoints (closed interval). It uses the first two elements of the **value** array, where the 
     * first element is the lower boundary and the second is the upper boundary. For example, in the array [1, 2, 3, 4],
     * the first two elements are used, with 1 as the lower boundary and 2 as the upper boundary.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    BETWEEN = 13,

    /**
     * Matches fields outside a specified range,
     * 
     * excluding both endpoints (open interval). It uses the first two elements of the **value** array, where the first 
     * element is the lower boundary and the second is the upper boundary. For example, in the array [1, 2, 3, 4], the 
     * first two elements are used, with 1 as the lower boundary and 2 as the upper boundary.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    NOT_BETWEEN = 14,
  }

  /**
   * Media change request, which is the parent class of the asset change request and album change request.
   * 
   * > **NOTE**
   * >
   * > The media change request takes effect only after 
   * > [applyChanges]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.applyChanges} is called.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  interface MediaChangeRequest {
    /**
     * A readonly member for type checking.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly comment: string
  }

  /**
   * Represents a media asset change request.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAssetChangeRequest implements MediaChangeRequest {
    /**
     * A readonly member for type checking.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly comment: string;

    /**
     * Constructor used to initialize an asset change request.
     *
     * @param { PhotoAsset } asset - Assets to change.
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
     * Creates an image asset change request.
     * 
     * For details about data source of the asset to be created, see 
     * [@ohos.file.fileuri (File URI)]{@link @ohos.file.fileuri:fileUri}.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } fileUri - Data source of the image asset, which is specified by a URI in the application
     *     sandbox directory. Example: **'file://com.example.temptest/data/storage/el2/base/haps/entry/files/test.jpg'**
     *     .
     * @returns { MediaAssetChangeRequest } **MediaAssetChangeRequest** created.
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
     * Creates an image asset change request.
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
     * Creates a video asset change request.
     * 
     * For details about data source of the asset to be created, see 
     * [@ohos.file.fileuri (File URI)]{@link @ohos.file.fileuri:fileUri}.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } fileUri - Data source of the video asset, which is specified by a URI in the application
     *     sandbox directory. Example: **'file://com.example.temptest/data/storage/el2/base/haps/entry/files/test.mp4'**
     *     .
     * @returns { MediaAssetChangeRequest } **MediaAssetChangeRequest** created.
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
     * Creates a video asset change request.
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
     * Creates an asset change request with the specified file name.
     * 
     * The file name must meet the following requirements:
     * 
     * - A valid file name must include a base name and a supported image or video extension.
     * - The total length of the file name must be between 1 and 255 characters.
     * - The base name must not contain any invalid characters.
     * 
     * Starting from API version 18, the following characters are considered invalid: \ / : * ? " < > | 
     * 
     * For API versions 10 to 17, the following characters are considered invalid: . .. \ / : * ? " ' ` < > | { } [ ]
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } displayName - File name of the image or video to create.
     * @param { PhotoCreateOptions } [options] - Options for creating an image or video asset.
     * @returns { MediaAssetChangeRequest } **MediaAssetChangeRequest** created.
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
     * Creates an asset change request with the specified file name.
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
     * Create an asset change request based on the file type and filename extension.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { PhotoType } photoType - Type of the file to create, which can be **IMAGE** or **VIDEO**.
     * @param { string } extension - File name extension, for example, **'jpg'**.
     * @param { CreateOptions } [options] - Options for creating the image or video asset, for example,
     *     **{title: 'testPhoto'}**.
     *     <br>The file name must not contain any invalid characters, which are:.. \ / : * ? " ' ` < > | { } [ ]
     * @returns { MediaAssetChangeRequest } **MediaAssetChangeRequest** created.
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
     * Create an asset change request based on the file type and filename extension.
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
     * Deletes media assets. The deleted assets are moved to the trash. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<PhotoAsset> } assets - Array of media assets to delete. The array can contain a maximum of 300
     *     elements. <!--Del-->System applications are not subject to this limitation.<!--DelEnd-->
     * @returns { Promise<void> } Promise that returns no value.
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
     * Deletes media assets. The deleted assets are moved to the trash. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<string> } uriList - URIs of the media assets to delete. The array can contain a maximum of 300
     *     elements. <!--Del-->System applications are not subject to this limitation.<!--DelEnd-->
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the asset in this asset change request.
     * 
     * > **NOTE**
     * >
     * > For the change request used to create an asset, this API returns **null** before 
     * > [applyChanges]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.applyChanges} is called 
     * > to apply the changes.
     *
     * @returns { PhotoAsset } Asset obtained.
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
     * Obtains the asset in this asset change request.
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
     * Favorites or unfavorites this file asset.
     *
     * @param { boolean } favoriteState - Whether to favorite the file. **true** to favorite, **false** otherwise.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 11 - 24]
     * @publicapi [since 26.0.0]
     * @since 11 dynamic
     * @since 23 static
     */
    setFavorite(favoriteState: boolean): void;

    /**
     * Hides this file.
     *
     * @param { boolean } hiddenState - Whether to hide the file. **true** to hide, **false** otherwise.
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
     * Sets the user comment information of this media asset.
     *
     * @param { string } userComment - Comment information to set, which cannot exceed 420 characters.
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
     * Sets location information.
     *
     * @param { double } longitude - Longitude.
     * @param { double } latitude - Latitude.
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
     * Sets the media asset title.
     *
     * @param { string } title - Title to set.
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
     * Saves the edited data of an asset.
     *
     * @param { MediaAssetEditData } editData - Edited data to save.
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
     * Saves MovingPhoto version which is used to determine what special efficacy is supported.
     *
     * @param { int } version - Motion picture version number
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800151 - Parameter error, only supports 9.
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     Possible causes: 1. Database corrupted; 2. The file system is abnormal; 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @FaAndStageModel
     * @since 26.0.0 dynamic&static
     */
    setMovingPhotoVersion(version: int): void;

    /**
     * Obtains the handler used for writing a file to cache. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > For the same asset change request, this API cannot be repeatedly called after a temporary file write handle is 
     * > successfully obtained.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<int> } Promise used to return the write handle obtained.
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
     * Adds resources from the application sandbox based on the file URI. For details about the data source, see 
     * [@ohos.file.fileuri (File URI)]{@link @ohos.file.fileuri:fileUri}.
     * 
     * > **NOTE**
     * >
     * > For the same asset change request, this API cannot be repeatedly called after the resource is successfully 
     * > added. For a moving photo, you can call this API twice to add the image and video resources.
     *
     * @param { ResourceType } type - Type of the resource to add.
     * @param { string } fileUri - Data source of the resource to be added, which is specified by a URI in the
     *     application sandbox directory. Example:
     *     **'file://com.example.temptest/data/storage/el2/base/haps/entry/files/test.jpg'**.
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
     * Adds a resource using **ArrayBuffer** data.
     * 
     * > **NOTE**
     * >
     * > For the same asset change request, this API cannot be repeatedly called after the resource is successfully 
     * > added. For a moving photo, you can call this API twice to add the image and video resources.
     *
     * @param { ResourceType } type - Type of the resource to add.
     * @param { ArrayBuffer } data - Data of the resource to add.
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
     * Adds resources using **PhotoProxy** data.
     * 
     * > **NOTE**
     * >
     * > For the same asset change request, this API cannot be repeatedly called after resources are successfully added.
     *
     * @param { ResourceType } type - Type of the resource to add.
     * @param { PhotoProxy } proxy - PhotoProxy data of the resource to add.
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
     * Sets the Key for the Ultra Snapshot feature, which allows the camera to take photos or record videos with the 
     * screen off.
     *
     * @param { string } cameraShotKey - Key for the Ultra Snapshot feature, which allows the camera to take photos or
     *     record videos with the screen off. (This parameter is available only for the system camera, and the key value
     *     is defined by the system camera.)
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
     * Saves the photo taken by the camera.
     *
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    saveCameraPhoto(): void;

    /**
     * Saves the photo taken by the camera.
     *
     * @param { ImageFileType } imageFileType - File type of the photo to save.
     * @throws { BusinessError } 14000011 - System inner fail
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 13 dynamic
     * @since 23 static
     */
    saveCameraPhoto(imageFileType: ImageFileType): void;

    /**
     * Discards the photo taken by the camera.
     *
     * @throws { BusinessError } 14000011 - Internal system error
     * @throws { BusinessError } 14000016 - Operation Not Support
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 12 dynamic
     * @since 23 static
     */
    discardCameraPhoto(): void;

    /**
     * Sets the effect of this moving photo.
     *
     * @param { MovingPhotoEffectMode } mode - Effect to set.
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
     * Sets the orientation of this image.
     *
     * @param { int } orientation - Rotation angle of the image to set. The value can only be **0**, **90**, **180**, or
     *     **270**.
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
     * Set video enhancement attribute
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
     * Sets the watermark type supported by photos.
     *
     * @param { WatermarkType } watermarkType - Watermark type to set.
     *     <br>**NOTE**<br>**WatermarkType.DEFAULT** cannot be passed.
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
     * Adds a resource using fileUri from file management directory
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { ResourceType } type - Type of the resource to add.
     * @param { string } fileUri - Data source of the resource to be added,
     *     which is specified by a URI in the application sandbox directory.
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
     * Permanently deletes images or videos in batches. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This operation is irreversible. The assets deleted cannot be restored. Exercise caution when performing this 
     * > operation.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<PhotoAsset> } assets - Array of images or videos to be permanently deleted. The array can contain
     *     a maximum of 500 elements.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Permanently deletes images or video assets in batches by URI. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This operation is irreversible. The assets deleted cannot be restored. Exercise caution when performing this 
     * > operation.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<string> } assetUris - Array of URIs of the images or videos to be permanently deleted. The array
     *     can contain a maximum of 500 elements.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Deletes local media assets to the trash in batches. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > - If the assets are only on the local device, they are moved directly to the trash.
     * >
     * > - If the assets are only in the cloud, no changes are made.
     * >
     * > - If the assets are on both the local device and the cloud, after deletion, they only remain in the cloud, and 
     * > the local copies are moved in the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { string[] } assetUris - Array of URIs of the images or videos to be deleted. The array can contain a
     *     maximum of 500 elements.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Deletes cloud media assets to the trash in batches. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > - If the assets are only on the local device, no changes are made.
     * >
     * > - If the assets are only in the cloud, they are moved directly to the trash.
     * >
     * > - If the assets are on both the local device and the cloud, after deletion, they only remain on the local 
     * > device, and the cloud copies are moved in the trash.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { string[] } assetUris - Array of URIs of the images or videos to be deleted. The array can contain a
     *     maximum of 500 elements.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Permanently deletes images or videos in batches by URI. The deleted images or videos are not stored in the 
     * recycle bin. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > - Assets that exist only on the local device, on the cloud, or on both the local device and the cloud can be 
     * > permanently deleted. The deleted assets are not stored in the recycle bin.
     * >
     * > - This operation is irreversible. The deleted assets cannot be restored. Exercise caution when performing this 
     * > operation.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { string[] } assetUris - Array of URIs of the images or videos to be deleted. The array can contain a
     *     maximum of 500 elements.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the status of the app link association.
     *
     * @param { int } hasAppLink - Whether to enable or disable the app link association.
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
     * Sets the status of the app link association.
     *
     * @param { AppLinkState } appLinkState - Whether to enable or disable the app link association.
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
     * Sets the information about the app link association.
     *
     * @param { string } appLink - Information about the app link association.
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
     * Sets the display mode of the composite image. This API uses a promise to return the result.
     *
     * @param { CompositeDisplayMode } compositeDisplayMode - Display mode.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Set hidden state of asset.
     *
     * @param { boolean } hiddenState - Hidden status of the asset.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1. The asset is not exist;
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted.2. The filesystem is abnormal.3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setHiddenAttribute(hiddenState: boolean): void;

    /**
     * Set title by filemanger.
     *
     * @param { string } name - asset name to set.
     *     <br> Should not contain extensions.
     *     The file name contains 1 to 255 characters.
     *     Invalid English characters, including:
     *     . \ /: *? "'`< > | {} []
     *     Name-only is not allowed. Or..
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1. The asset is not exist;
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes:1. Database corrupted.2. The file system is abnormal.3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setTitleByFile(name: string): void;
  }

  /**
   * Represents a request for changing multiple assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi [since 11 - 24]
   * @publicapi [since 26.0.0]
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAssetsChangeRequest implements MediaChangeRequest {
    /**
     * Used to verify the [MediaChangeRequest]{@link @ohos.file.photoAccessHelper:photoAccessHelper.MediaChangeRequest} 
     * type.
     * <br>If a class (such as **MediaAssetsChangeRequest**) object can be accessed, it is an implementation class 
     * of **MediaChangeRequest**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly comment: string;

    /**
     * Constructor.
     *
     * @param { Array<PhotoAsset> } assets - Assets to change.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 11 - 24]
     * @publicapi [since 26.0.0]
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(assets: Array<PhotoAsset>);

    /**
     * Favorites or unfavorites this file asset.
     *
     * @param { boolean } favoriteState - Whether to favorite the file. **true** to favorite, **false** otherwise.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi [since 11 - 24]
     * @publicapi [since 26.0.0]
     * @since 11 dynamic
     * @since 23 static
     */
    setFavorite(favoriteState: boolean): void;

    /**
     * Hides this file.
     *
     * @param { boolean } hiddenState - Whether to hide the file. **true** to hide, **false** otherwise.
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
     * Sets the user comment information of this media asset.
     *
     * @param { string } userComment - Comment information to set, which cannot exceed 420 characters.
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
     * Sets whether this asset is displayed in the **Recent** list.
     *
     * @param { boolean } isRencentShow - Whether this asset is displayed in the **Recent** list. **true** if displayed,
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
   * Provides APIs for managing the media album change request.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 11 dynamic
   * @since 23 static
   */
  class MediaAlbumChangeRequest implements MediaChangeRequest {
    /**
     * A readonly member for type checking.
     *
     * @type { string }
     * @readonly
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    readonly comment: string;

    /**
     * Constructor used to initialize a new object.
     *
     * @param { Album } album - Album to change.
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
     * Creates a MediaAlbumChangeRequest instance.
     * 
     * The album name must meet the following requirements:
     * 
     * - The total length of the album name must be between 1 and 255 characters.
     * - It must not contain any invalid characters, which are:
     * 
     * . .. \ / : * ? " ' ` < > | { } [ ]
     * 
     * - The characters are case insensitive.
     * - Duplicate album names are not allowed.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } name - Name of the album.
     * @returns { MediaAlbumChangeRequest } MediaAlbumChangeRequest instance created.
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
     * Creates a MediaAlbumChangeRequest instance.
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
     * Deletes user albums. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<Album> } albums - Albums to delete.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Deletes user albums by URI. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<string> } albumUris - Array of URIs of the albums to be deleted.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets whether the albums can be synced to cloud storage or family storage. This API uses a promise to return the 
     * result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Album[] } albums - Array of albums whose sync status is to be set. You can set the sync status for user
     *     albums and source albums. The array can contain a maximum of 500 elements.
     * @param { boolean } allowUpload - Whether the albums can be synced to cloud storage or family storage. **true** if
     *     they can be synced, **false** otherwise.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the album in the current album change request.
     * 
     * > **NOTE**
     * >
     * > For the change request for creating an album, this API returns **null** before 
     * > [applyChanges]{@link @ohos.file.photoAccessHelper:photoAccessHelper.PhotoAccessHelper.applyChanges} is called 
     * > to apply the changes.
     *
     * @returns { Album } Album obtained.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 
     *     <br>1. Mandatory parameters are left unspecified;
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 14000011 - System inner fail
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 11 dynamic
     */
    getAlbum(): Album;

    /**
     * Obtains the album in the current album change request.
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
     * Sets the album cover.
     *
     * @param { string } coverUri - URI of the file to be set as the album cover.
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
     * Sets the album name.
     * 
     * The album name must meet the following requirements:
     * 
     * - The total length of the album name must be between 1 and 255 characters.
     * - It must not contain any invalid characters, which are:
     * 
     * . \ / : * ? " ' ` < > | { } [ ]
     * 
     * - It is case-insensitive.
     * - Duplicate album names are not allowed.
     *
     * @param { string } name - Album name to set.
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
     * Add assets to the album.
     *
     * @param { Array<PhotoAsset> } assets - Array of assets to add.
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
     * Removes assets from the album.
     *
     * @param { Array<PhotoAsset> } assets - Array of assets to remove.
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
     * Moves assets to another album.
     *
     * @param { Array<PhotoAsset> } assets - Assets to move.
     * @param { Album } targetAlbum - Album to which the assets are to be moved.
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
     * Moves assets in an album to another album.
     *
     * @param { Array<string> } assetUris - Array of URIs of the assets to move.
     * @param { Album } targetAlbum - Album to which the assets are to be moved.
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
     * Restores the assets corresponding to the specified PhotoAsset object array from the trash.
     *
     * @param { Array<PhotoAsset> } assets - Assets to recover.
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
     * Restores the assets corresponding to the specified URI string array from the trash.
     *
     * @param { Array<string> } assetUris - Array of URIs of the assets to recover.
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
     * Permanently deletes assets from the trash.
     * 
     * > **NOTE**
     * >
     * > This operation is irreversible. The assets deleted cannot be restored. Exercise caution when performing this 
     * > operation.
     *
     * @param { Array<PhotoAsset> } assets - Assets to be permanently deleted.
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
     * Permanently deletes assets from the trash.
     * 
     * > **NOTE**
     * >
     * > This operation is irreversible. The assets deleted cannot be restored. Exercise caution when performing this 
     * > operation.
     *
     * @param { Array<string> } assetUris - Array of URIs of the assets to be permanently deleted.
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
     * Sets the relationship between people in the portrait album to **Me**.
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
     * Sets the display level of the portrait album.
     *
     * @param { int } displayLevel - Display level to set. The options are as follows:
     *     <br>**0**: unfavorite the portrait album.
     *     <br>**1**: set the portrait album as the first to display.
     *     <br>**2**: do not display the portrait album as the first one.
     *     <br>**3**: favorite the portrait album.
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
     * Removes assets from this portrait album or group photo album.
     *
     * @param { Array<PhotoAsset> } assets - Assets to remove.
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
     * Merges two portrait albums.
     *
     * @param { Album } target - Album generated after the merge. The album must be renamed.
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
     * Places this album before an album.
     *
     * @param { Album } album - Target album. To place this album to the end, set **album** to null.
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
     * Removes this group photo album.
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
     * Resets the cover.
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
     * set hidden state of album.
     *
     * @param { boolean } hiddenState - Hidden status of the album.
     * @param { boolean } isInherited - Whether all child files or directories under an album inherit this setting.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1. The ablum is not exist;
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setHiddenAttribute(hiddenState: boolean, isInherited:boolean):void;

    /**
     * set album name by filemanger.
     *
     * @param { string } name - Album name to set.
     *     <br>Value range:1-255
     *     <br>Album name parameter specifications:
     *     The album name contains 1 to 255 characters.
     *     Invalid English characters, including:
     *     \ /: *? "'`< > | {} []
     *     It is not allowed to name only. or..
     *     English characters are case insensitive.
     *     The album name must be unique.
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     1. The album is not exist;
     * @throws { BusinessError } 23800301 - Internal system error. It is recommended to retry and check the logs.
     *     <br>Possible causes: 1. Database corrupted. 2. The file system is abnormal. 3. The IPC request timed out.
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setAlbumNameByFile(name: string): void;

    /**
     * Operates album attribute.
     *
     * @permission ohos.permission.ACCESS_MEDIALIB_THUMB_DB
     * @param { AlbumOperation } operation - operation to execute for the album.
     * @throws { BusinessError } 201 - Permission denied
     * @throws { BusinessError } 202 - Called by non-system application.
     * @throws { BusinessError } 23800151 - The scenario parameter verification fails. Possible causes:
     *     <br>1. The attr of operation is invalid;
     *     <br>2. The type of operation is invalid;
     *     <br>3. The values or operation is incorrect;
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
   * Describes the information about a shared media asset.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface SharedPhotoAsset {
    /**
     * ID of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    fileId: int;
    /**
     * URI of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    uri: string;
    /**
     * Path data of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    data: string;
    /**
     * Media type of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    mediaType: PhotoType;
    /**
     * Display name of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    displayName: string;
    /**
     * File size of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    size: long;
    /**
     * Data added to the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateAdded: long;
    /**
     * Data modified in the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateModified: long;
    /**
     * Duration of the media asset if it is a video.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    duration: int;
    /**
     * Pixel width of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    width: int;
    /**
     * Pixel height of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    height: int;
    /**
     * Timestamp when the media asset was taken and stored locally.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateTaken: long;
    /**
     * Rotation angle of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    orientation: int;
    /**
     * Whether the media asset is marked as a favorite. **true** if marked, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    isFavorite: boolean;
    /**
     * Title of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    title: string;
    /**
     * Location of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    position: PositionType;
    /**
     * Whether the media asset is moved to the trash.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateTrashed: long;
    /**
     * Whether the media asset is hidden. **true** if hidden, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    hidden: boolean;
    /**
     * User comments on the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    userComment: string;
    /**
     * Camera shot information of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    cameraShotKey: string;
    /**
     * Year when the media asset was created.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateYear: string;
    /**
     * Month when the media asset was created.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateMonth: string;
    /**
     * Time when the media asset was created.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateDay: string;
    /**
     * Whether the media asset is in a pending state. **true** if pending, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    pending: boolean;
    /**
     * Time elapsed after the media asset was added.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateAddedMs: long;
    /**
     * Modified time of the asset in milliseconds
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateModifiedMs: long;
    /**
     * Time elapsed since the media asset was trashed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dateTrashedMs: long;
    /**
     * Subtype of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    subtype: PhotoSubtype;
    /**
     * Effect of the moving photo.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    movingPhotoEffectMode: MovingPhotoEffectMode;
    /**
     * Dynamic range type of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    dynamicRangeType: DynamicRangeType;
    /**
     * Whether the thumbnail of the media asset is ready. **true** if ready, **false** otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    thumbnailReady: boolean;
    /**
     * Width and height of the LCD thumbnail of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    lcdSize: string;
    /**
     * Width and height of the thumb thumbnail of the media asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    thmSize: string;
    /**
     * Time elapsed since the thumbnail status of the media asset changed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    thumbnailModifiedMs?: long;
    /**
     * Whether the thumbnail of the media asset is visible.
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
   * MovingPhoto provides APIs for managing a moving photo instance.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface MovingPhoto {
    /**
     * Requests the image data and video data of this moving photo and writes them to the specified URIs, respectively. 
     * This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } imageFileUri - URI to which the image data of the moving photo is to be written. Example:
     *     **"file://com.example.temptest/data/storage/el2/base/haps/ImageFile.jpg"**.
     * @param { string } videoFileUri - URI to which the video data of the moving photo is to be written. Example:
     *     **"file://com.example.temptest/data/storage/el2/base/haps/VideoFile.mp4"**.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Requests the moving photo content of the specified resource type and writes it to the specified URI. This API 
     * uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { ResourceType } resourceType - Resource type of the moving photo content to request.
     * @param { string } fileUri - URI to which the moving photo content is to be written.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Requests the moving photo content of the specified resource type and returns it in ArrayBuffer format. This API 
     * uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { ResourceType } resourceType - Resource type of the moving photo content to request.
     * @returns { Promise<ArrayBuffer> } Promise used to return the requested content in an ArrayBuffer.
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
     * Obtains the URI of this moving photo.
     *
     * @returns { string } URI of the moving photo obtained.
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
     * Checks whether the video of the moving photo is ready. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<boolean> } Promise used to return the result. **true** if the video of the moving photo is
     *     ready, **false** otherwise.
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
   * Enumerates the types of the highlights album information.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum HighlightAlbumInfoType {
    /**
     * Cover information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    COVER_INFO = 0,
    /**
     * Music information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    PLAY_INFO = 1,
    /**
     * Album information.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    ALBUM_INFO = 2
  }

  /**
   * Enumerates the user behavior types of the highlights album.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enum HighlightUserActionType {
    /**
     * Number of inserted pictures.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    INSERTED_PIC_COUNT = 0,
    /**
     * Number of removed pictures.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    REMOVED_PIC_COUNT,
    /**
     * Number of times that a full-length image in a highlights album is shared.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SHARED_SCREENSHOT_COUNT,
    /**
     * Number of times that a highlights cover is shared.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    SHARED_COVER_COUNT,
    /**
     * Number of times that a highlights album is renamed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    RENAMED_COUNT,
    /**
     * Number of times that a cover is changed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    CHANGED_COVER_COUNT,
    /**
     * Number of times that the pictures in a highlights album are played.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    RENDER_VIEWED_TIMES = 100,
    /**
     * Time used to play the pictures in a highlights album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    RENDER_VIEWED_DURATION,
    /**
     * Number of times that a highlights album is viewed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ART_LAYOUT_VIEWED_TIMES,
    /**
     * Time used to view a highlights album.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    ART_LAYOUT_VIEWED_DURATION
  }

  /**
   * Enumerates the attributes of a highlights album.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 26.0.0 static
   */
  enum HighlightAlbumChangeAttribute {
    /**
     * Whether the highlights album has been viewed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    IS_VIEWED = 0,

    /**
     * Time when the application sends a highlight notification.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    NOTIFICATION_TIME = 1,

    /**
     * Whether the highlights album is marked as a favorite.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 26.0.0 static
     */
    IS_FAVORITE = 2
  }

  /**
   * Enumerates thumbnail types.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum ThumbnailType {
    /**
     * LCD thumbnail.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    LCD = 1,
    /**
     * THM thumbnail.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    THM = 2
  }

  /**
   * Provides APIs for managing the analysis album change request.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
   class MediaAnalysisAlbumChangeRequest extends MediaAlbumChangeRequest {
    /**
     * Constructor.
     *
     * @param { Album } album - **Highlights** album.
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
     * Sets the sequence of assets in the **Analysis** album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets in the album for which the sequence needs to be set.
     * @param { Array<int> } position - Sequence of assets in the album.
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
     * Sets the relationships of a person in the portrait album.
     * 
     * The supported relationship names include:
     * | Unique ID       | Description     |
     * | ---------- | ------- |
     * | me | Me|
     * | son | Son|
     * | daughter | Daughter|
     * | wife | Wife|
     * | husband | Husband|
     * | father | Father|
     * | mother | Mother|
     * | colleague | Colleague|
     * | friend | Friend|
     * | classmate | Classmate|
     * | best_friend_female | Best female friend|
     * | boyfriend | Boyfriend|
     * | girlfriend | Girlfriend|
     * | family | Family|
     * | maternal_grandfather | Maternal grandfather|
     * | maternal_grandmother | Maternal grandmother|
     * | paternal_grandfather | Paternal grandfather|
     * | paternal_grandmother | Paternal grandmother|
     * | older_brother | Older brother|
     * | older_sister | Older sister|
     * | younger_brother | Younger brother|
     * | younger_sister | Younger sister|
     * | relative | Relative|
     * | other | Other|
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } relationship - Name of the relationship to set.
     *     <br>You can set it to an empty string to remove the current relationship setting.
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
     * Creates a MediaAnalysisAlbumChangeRequest instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } name - Name of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @returns { MediaAnalysisAlbumChangeRequest | null } - Returns a MediaAnalysisAlbumChangeRequest instance.
     *     If the operation fails, returns null.
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
      context:Context,
      name: string,
      subtype: AlbumSubtype
    ): MediaAnalysisAlbumChangeRequest | null;

    /**
     * Creates a change request for the **Analysis** album.
     * 
     * > **NOTE**
     * >
     * > The album name must meet the following requirements:
     * >
     * > - The album name string length ranges from 1 to 255.
     * >
     * > - The album name cannot contain any of the following characters:.. \ / : * ? " ' ` < > | { } [ ]
     *
     * @param { Context } context - Context of the ability instance.
     * @param { string } name - Name of the album.
     * @param { AlbumSubtype } subtype - Subtype of the album.
     * @returns { MediaAnalysisAlbumChangeRequest } MediaAnalysisAlbumChangeRequest instance created.
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
      context:Context,
      name: string,
      subtype: AlbumSubtype
    ): MediaAnalysisAlbumChangeRequest;

    /**
     * Sets the default cover image for the smart album.
     *
     * @param { string } coverUri - URI of the file to be set as the default cover image of the smart album.
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
   * Provides APIs for managing the media album change request. It inherits from 
   * [MediaAnalysisAlbumChangeRequest]{@link photoAccessHelper.MediaAnalysisAlbumChangeRequest}.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 26.0.0 static
   */
  class MediaHighlightAlbumChangeRequest extends MediaAnalysisAlbumChangeRequest {
    /**
     * Constructor.
     *
     * @param { Album } album - **Highlights** album.
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
     * Sets the specified attribute value in the highlights album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { HighlightAlbumChangeAttribute } attribute - Attribute to set.
     * @param { string } value - Value to set for the attribute.
     *     <br>When **attribute** is **IS_VIEWED** or **IS_FAVORITE**, the value is **0** or **1**. 
     *     When **attribute** is **NOTIFICATION_TIME**, the value is a
     *     numeric string of a maximum of 8 bytes, for example, **12345678**.
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
   * Implements an **Analysis** album.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  class AnalysisAlbum {
    /**
     * Constructor.
     *
     * @param { Album } album - **Highlights** album.
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
     * Obtains the sequence of assets in the **Analysis** album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<PhotoAsset> } assets - Assets in the album whose sequence needs to be obtained.
     * @returns { Promise<Array<int>> } Sequence number of an asset in the album.
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
     * Obtains the relationships of a person in the portrait album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<string> } Relationships of the person in the portrait album.
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
   * Provides APIs for managing the **Highlights** album, which is an automatically generated collection of memorable 
   * photos or videos.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  class HighlightAlbum {
    /**
     * Constructor.
     *
     * @param { Album } album - **Highlights** album.
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
     * Obtains specific information about the **Highlights** album.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { HighlightAlbumInfoType } type - Type of the album information to obtain.
     * @returns { Promise<string> } Promise used to return the album information.
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
     * Obtains the ArrayBuffer for caching the specified asset.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } resourceUri - URI of the asset to cache.
     * @returns { Promise<ArrayBuffer> } Promise used to return the ArrayBuffer.
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
     * Sets the user behavior data for the **Highlights** album.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { HighlightUserActionType } type - Type of the user behavior data to set.
     * @param { int } actionData - Behavior data.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Sets the subtitle for this **Highlights** album instance.
     * 
     * The subtitle must meet the following requirements:
     * 
     * - The total length of the subtitle must be between 0 and 255 characters.
     * - It must not contain any invalid characters, which are:
     * 
     * . \ / : * ? " ' ` < > | { } [ ]
     * 
     * - The characters are case insensitive.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { string } subTitle - Subtitle to set.
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
     * Deletes highlight albums.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Context } context - Context of the ability instance.
     * @param { Array<Album> } albums - Array of highlight albums to delete.
     * @returns { Promise<int> } Promise used to return the operation result. The value **0** means that the operation
     *     is successful, and **1** means the opposite.
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
   * Enumerates the cloud enhancement task states, which are returned by 
   * [CloudEnhancementTaskState]{@link photoAccessHelper.CloudEnhancement}.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum CloudEnhancementTaskStage {
    /**
     * The cloud enhancement task is abnormal.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_EXCEPTION = -1,
    /**
     * The cloud enhancement task is being prepared.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_PREPARING,
    /**
     * The cloud enhancement task is uploading data.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_UPLOADING,
    /**
     * The cloud enhancement task is being executed.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_EXECUTING,
    /**
     * The cloud enhancement task is downloading data.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_DOWNLOADING,
    /**
     * The cloud enhancement task failed.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_FAILED,
    /**
     * The cloud enhancement task is complete.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    TASK_STAGE_COMPLETED
  }

  /**
   * Represents the cloud enhancement task information, which includes the cloud enhancement task state and other 
   * information related to certain states.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  interface CloudEnhancementTaskState {
    /**
     * Cloud enhancement task state.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly taskStage: CloudEnhancementTaskStage;
    /**
     * Size of the file transferred. This parameter is mandatory when **taskStage** is 
     * **CloudEnhancementTaskStage.TASK_STAGE_UPLOADING** or **CloudEnhancementTaskStage.TASK_STAGE_DOWNLOADING**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly transferredFileSize?: int;
    /**
     * Total file size. This parameter is mandatory when **taskStage** is 
     * **CloudEnhancementTaskStage.TASK_STAGE_UPLOADING** or **CloudEnhancementTaskStage.TASK_STAGE_DOWNLOADING**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly totalFileSize?: int;
    /**
     * Queuing time. This parameter is mandatory when **taskStage** is 
     * **CloudEnhancementTaskStage.TASK_STAGE_EXECUTING**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly expectedDuration?: int;
    /**
     * Status code. This parameter is mandatory when **taskStage** is **CloudEnhancementTaskStage.TASK_STAGE_FAILED**.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    readonly statusCode?: int;
  }

  /**
   * Provides APIs for cloud enhancement management, including managing the tasks of generating AI-powered cloud-
   * enhanced photos and obtaining the association between the original photos and AI cloud-enhanced photos.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  class CloudEnhancement {
    /**
     * Obtains a cloud enhancement instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { CloudEnhancement } A cloud enhancement instance.
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
     * Obtains a cloud enhancement instance.
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
     * Submits cloud enhancement tasks. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } photoAssets - [PhotoAsset]{@link photoAccessHelper.PhotoAsset} to enhance.
     * @param { boolean } hasCloudWatermark - Whether to add a cloud enhancement watermark to the enhanced images.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Submits cloud enhancement tasks. You can select the trigger mode of the cloud enhancement task. This API uses a 
     * promise to return the result.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } photoAssets - [PhotoAsset]{@link photoAccessHelper.PhotoAsset} to enhance.
     * @param { boolean } hasCloudWatermark - Whether to add a cloud watermark to the enhanced image. **true** to add,
     *     **false** otherwise.
     * @param { int } [triggerMode] - Trigger mode of the cloud enhancement task.
     *     <br>**- 0**: manually triggered.
     *     <br>**- 1**: automatically triggered.
     *     <br>The default value is **0**.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Prioritizes a cloud enhancement task.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { PhotoAsset } photoAsset - [PhotoAsset]{@link photoAccessHelper.PhotoAsset} whose cloud enhancement
     *     priority needs to be escalated.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Cancels cloud enhancement tasks.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @param { Array<PhotoAsset> } photoAssets - Array of [PhotoAsset]{@link photoAccessHelper.PhotoAsset} objects
     *     whose cloud enhancement tasks are to be canceled.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Cancels all cloud enhancement tasks.
     *
     * @permission ohos.permission.WRITE_IMAGEVIDEO
     * @returns { Promise<void> } Promise that returns no value.
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
     * Queries information about a cloud enhancement task.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PhotoAsset } photoAsset - [PhotoAsset]{@link photoAccessHelper.PhotoAsset} whose cloud enhancement task
     *     information is to be queried.
     * @returns { Promise<CloudEnhancementTaskState> } Promise used to return the information about the cloud
     *     enhancement task.
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
     * Synchronizes the cloud enhancement task status.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the photo after cloud enhancement.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { PhotoAsset } asset - [PhotoAsset]{@link photoAccessHelper.PhotoAsset} for which the cloud-enhanced photo
     *     is to be obtained.
     * @returns { Promise<PhotoAsset> } Promise used to return the photo after cloud enhancement.
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
   * Enumerates the cloud enhancement states.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 13 dynamic
   * @since 23 static
   */
  enum CloudEnhancementState {
    /**
     * Cloud enhancement is unavailable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    UNAVAILABLE = 0,
    /**
     * Cloud enhancement is available.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    AVAILABLE,
    /**
     * Cloud enhancement is being executed.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    EXECUTING,
    /**
     * Cloud enhancement has been completed.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 13 dynamic
     * @since 23 static
     */
    COMPLETED
  }

  /**
   * Enumerates the statuses of tasks used for downloading cloud media assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum CloudMediaAssetTaskStatus {
    /**
     * The task is in progress.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DOWNLOADING = 0,
    /**
     * The task is paused.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    PAUSED = 1,
    /**
     * There is no download task.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    IDLE = 2
  }

  /**
   * Enumerates the reasons why a cloud media asset download task is paused.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum CloudMediaTaskPauseCause {
    /**
     * Downloading is proceeding normally without any pauses.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    NO_PAUSE = 0,
    /**
     * Downloading is proceeding normally without any pauses.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    TEMPERATURE_LIMIT = 1,
    /**
     * The local disk space is insufficient.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    ROM_LIMIT = 2,
    /**
     * The local disk space is insufficient.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    NETWORK_FLOW_LIMIT = 3,
    /**
     * The network is abnormal.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    WIFI_UNAVAILABLE = 4,
    /**
     * The network is abnormal.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    POWER_LIMIT = 5,
    /**
     * The device is not in charging screen-off mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    BACKGROUND_TASK_UNAVAILABLE = 6,
    /**
     * The user is making requests too frequently.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    FREQUENT_USER_REQUESTS = 7,
    /**
     * There is an error with the cloud service.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    CLOUD_ERROR = 8,
    /**
     * The download has been paused by the user.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    USER_PAUSED = 9
  }

  /**
   * Describes the details of a cloud media asset download task. It is the return value of the API used by applications 
   * to obtain the cloud asset download task status.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  interface CloudMediaAssetStatus {
    /**
     * Status of the download task.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    readonly taskStatus: CloudMediaAssetTaskStatus;
    /**
     * Total number of and size (measured in bytes) of the assets that have been downloaded, and the total number and 
     * size (also measured in bytes) of the assets remaining to be downloaded.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    readonly taskInfo: string;
    /**
     * Reason why the download task is suspended.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    readonly errorCode: CloudMediaTaskPauseCause;
  }

  /**
   * Enumerates the types of download tasks.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum CloudMediaDownloadType {
    /**
     * High-priority download, without the need for the device to switch to screen-off charging mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DOWNLOAD_FORCE = 0,
    /**
     * Low-priority download, demanding that device be in screen-off charging mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    DOWNLOAD_GENTLE = 1
  }

  /**
   * Enumerates the modes used for deleting cloud media assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  enum CloudMediaRetainType {
    /**
     * Deletes the local metadata and thumbnail of the original files from the cloud.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 14 dynamic
     * @since 23 static
     */
    RETAIN_FORCE = 0,
    /**
     * Deletes the local metadata and thumbnail of the original files from the home storage device.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDC_RETAIN_FORCE = 1
  }

  /**
   * A class used for cloud media asset management. It is used to manage download tasks for media assets stored in the 
   * cloud and delete local data and files pertaining to these cloud-based assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  class CloudMediaAssetManager {
    /**
     * Obtains a CloudMediaAssetManager instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { CloudMediaAssetManager } CloudMediaAssetManager instance.
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
     * Obtains a CloudMediaAssetManager instance.
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
     * Starts or resumes a task to download cloud media assets.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { CloudMediaDownloadType } downloadType - Type of the download task.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Suspends a task that downloads cloud media assets.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @returns { Promise<void> } Promise that returns no value.
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
     * Cancels a task that downloads cloud media assets.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @returns { Promise<void> } Promise that returns no value.
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
     * Deletes local metadata and files of cloud media assets.
     *
     * @permission ohos.permission.CLOUDFILE_SYNC_MANAGER
     * @param { CloudMediaRetainType } retainType - Mode for deleting cloud media assets.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the status of a task that downloads cloud media assets.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @returns { Promise<CloudMediaAssetStatus> } Promise used to return the task status.
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
     * Starts a batch download for the specified cloud media assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] } assetUris - Array of URIs pointing to the original-quality images and videos to be
     *     downloaded.
     * @returns { Promise<Map<string, CloudAssetDownloadCode>> } Promise used to return a map, where each key is a URI
     *     and its value indicates the status of that individual download item.
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
     * Pauses a batch download for the specified cloud media assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] | null } assetUris - Array of URIs pointing to the original-quality images and videos to be
     *     paused.
     *     <br>If null, undefined, or an empty list is passed, it represents all existing individual download items.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Resumes a batch download for the specified cloud media assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] | null } assetUris - Array of URIs pointing to the original-quality images and videos to be
     *     resumed.
     *     <br>If null, undefined, or an empty list is passed, it represents all existing individual download items.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Cancels a batch download for the specified cloud media assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string[] | null } assetUris - Array of URIs pointing to the original-quality images and videos to be
     *     canceled.
     *     <br>If null, undefined, or an empty list is passed, it represents all existing individual download items.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains the details of a batch download for cloud media assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicates - Predicates that specify the fetch criteria.
     * @returns { Promise<CloudAssetDownloadStatus> } Promise used to return the details obtained.
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
     * Obtains the number of batch download tasks for cloud media assets. This API uses a promise to return the result.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { dataSharePredicates.DataSharePredicates } predicates - Predicates that specify the fetch criteria.
     * @returns { Promise<int> } Promise used to return the number of batch download tasks.
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
     * Registers a callback to monitor changes in the progress of a batch download for cloud media assets.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param {  Callback<CloudAssetDownloadProgressInfo> } callback - Callback to register. The callback returns
     *     progress information of the batch download.
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
     * Unregisters a callback to monitor changes in the progress of a batch download for cloud media assets.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param {  Callback<CloudAssetDownloadProgressInfo> } [callback] - Callback to unregister, which is registered by
     *     [onDownloadProgressChange]{@link photoAccessHelper.CloudMediaAssetManager.on}. If this parameter is left
     *     empty, all progress-related callbacks are unregistered.
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
   * Provides APIs for custom user behavior recording for Gallery.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  interface PhotoAssetCustomRecord {
    /**
     * File ID, which must be an integer greater than 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly fileId: int;
    /**
     * Number of times that image or video was shared. The value must be an integer greater than 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly shareCount: int;
    /**
     * Number of times the image or video was jumped to in large view. The value must be an integer greater than 0.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly lcdJumpCount: int;
  }

  /**
   * Provides APIs for custom user behavior recording for Gallery.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  class PhotoAssetCustomRecordManager {
    /**
     * Obtains an instance of custom user behavior recording for Gallery.
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { PhotoAssetCustomRecordManager } Custom user behavior recording instance.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800107 - Context is invalid
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 20 dynamic
     */
    static getCustomRecordManagerInstance(context: Context): PhotoAssetCustomRecordManager;

    /**
     * Get media asset custom record manager instance.
     *
     * @param { Context } context - Context of the ability instance.
     * @returns { PhotoAssetCustomRecordManager | null } Returns media asset custom record manager instance
     *     if operation fails, return null.
     * @throws { BusinessError } 202 - Called by non-system application
     * @throws { BusinessError } 23800107 - Context is invalid
     * @static
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 23 static
     */
    static getCustomRecordManagerInstance(context: Context): PhotoAssetCustomRecordManager | null;

    /**
     * Adds custom user behavior recordings. This API uses a promise to return the result.
     *
     * @param { Array<PhotoAssetCustomRecord> } customRecords - Custom user behavior recordings.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Obtains custom user behavior recordings based on retrieval options. This API uses a promise to return the result.
     *
     * @param { FetchOptions } optionCheck - Retrieval options.
     * @returns { Promise<FetchResult<PhotoAssetCustomRecord>> } Promise used to return the collection of custom user
     *     behavior recordings.
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
     * Updates the existing database fields based on custom user behavior recordings. This API uses a promise to return 
     * the result.
     *
     * @param { Array<PhotoAssetCustomRecord> } customRecords - Custom user behavior recordings.
     * @returns { Promise<Array<int>> } Promise used to return the file ID in the custom user behavior recordings that
     *     fail to be updated.
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
     * Removes custom user behavior recordings based on retrieval options. This API uses a promise to return the result.
     *
     * @param { FetchOptions } optionCheck - Retrieval options.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Increases the value of **shareCount** by 1 for the data in the database based on **fileId** in 
     * [PhotoAssetCustomRecord]{@link photoAccessHelper.PhotoAssetCustomRecord}. This API uses a promise to return the 
     * result.
     *
     * @param { Array<int> } ids - Array of file IDs in
     *     [PhotoAssetCustomRecord]{@link photoAccessHelper.PhotoAssetCustomRecord}.
     * @returns { Promise<Array<int>> } Promise used to return the file ID in the custom user behavior recordings that
     *     fail to be updated.
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
     * Increases the value of **LcdJumpCount** by 1 for the data in the database based on **fileId** in 
     * [PhotoAssetCustomRecord]{@link photoAccessHelper.PhotoAssetCustomRecord}. This API uses a promise to return the 
     * result.
     *
     * @param { Array<int> } ids - Array of file IDs in
     *     [PhotoAssetCustomRecord]{@link photoAccessHelper.PhotoAssetCustomRecord}.
     * @returns { Promise<Array<int>> } Promise used to return the file ID in the custom user behavior recordings that
     *     fail to be updated.
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
   * Defines the playback mode of the moving photo in different scenarios.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export class AutoPlayScene {
    /**
     * Scene of the moving photo playback.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    sceneType: SceneType;

    /**
     * Whether to support automatic playback of the moving photo.
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
   * Enumeration type of scene.
   *
   * @enum { int } SceneType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export enum SceneType {
    /**
     * Tap the grid icon to browse the large image.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    GRID_TO_PHOTO_BROWSER = 0,

    /**
     * Swipe left or right in the large image scene.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    PHOTO_BROWSER_SWIPE = 1,
  }

  /**
   * Enumeration type of grid pinch mode.
   *
   * @enum { int } GridPinchModeType
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export enum GridPinchModeType {
    /**
     * Users are allowed to pinch the grid, and then select it or click it to operate the large image.
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
   * Enumeration type of grid level.
   *
   * @enum { int } GridLevel
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export enum GridLevel {
    /**
     * Spacious grid level. This level is the number of standard grid columns minus 1.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    SPACIOUS = 0,

    /**
     * Standard grid level. The number of standard grid columns varies with the device size. If no number of standard 
     * grid columns is configured, the system uses the default number of columns.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    STANDARD = 1,

    /**
     * Compact grid level. This level is the number of standard grid columns plus 1.
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
   * Enumerates whether to support automatic playback of the moving photo.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   * @since 26.0.0 static
   */
  export enum PlayMode {
    /**
     * The automatic playback of the moving photo is not supported.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    DEFAULT = 0,
    /**
     * The automatic playback of the moving photo is supported.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic
     * @since 26.0.0 static
     */
    AUTO_PLAY = 1,
  }

  /**
   * Enumerates the HDR modes of media assets.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 26.0.0 static
   */
  enum HdrMode {
    /**
     * Default type.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    DEFAULT = 0,
    /**
     * Single-layer HDR image that complies with ISO specifications.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDR_ISO_SINGLE = 1,
    /**
     * Dual-layer HDR images that comply with ISO specifications.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDR_ISO_DUAL = 2,
    /**
     * HDR image taken by a legacy device or camera.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDR_CUVA = 3,
    /**
     * Single-layer image that complies with the HDR Vivid standard.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDR_VIVID_SINGLE = 4,
    /**
     * Dual-layer image that complies with the HDR Vivid standard.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 26.0.0 static
     */
    HDR_VIVID_DUAL = 5,
  }

  /**
   * Enumerates the log modes of video files.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @since 22 dynamic
   * @since 23 static
   */
  export enum VideoMode {
    /**
     * Default type.
     * 
     * A value of **0** indicates that the video is either not in log mode or its type has not yet been determined. This
     * value may later be updated to **1** for some videos after type determination, so it is not recommended for use in
     * queries.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 22 dynamic
     * @since 23 static
     */
    DEFAULT = 0,
    /**
     * Video file in log mode.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @since 22 dynamic
     * @since 23 static
     */
    LOG_VIDEO = 1,
  }

  /**
   * Describes the progress information about a batch download.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  interface CloudAssetDownloadProgressInfo {
    /**
     * Type of event that triggers this update.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly downloadEventType: CloudAssetDownloadNotifyType;
    
    /**
     * ID of the file being downloaded.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly fileId: int;

    /**
     * Download completion percentage.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly percent: int;

    /**
     * Reason for automatic pause.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly autoPauseReason: int;
  }

  /**
   * Describes the status information about a batch download.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  interface CloudAssetDownloadStatus {
    /**
     * Array of strings containing the information of each individual download item within this batch download.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    readonly taskInfos: string[];
  }

  /**
   * Enumerates the status codes returned when adding an item to a batch download.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  enum CloudAssetDownloadCode {
    /**
     * The individual download item is successfully added.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    ADD_DOWNLOAD_TASK_SUCCESS = 0,

    /**
     * The requested asset does not exist.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_ASSET_NOT_EXIST = 1,
  }

  /**
   * Enumerates the types of events reported during a cloud asset download.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  enum CloudAssetDownloadNotifyType {
    /**
     * Fired when download progress is updated.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_PROGRESS = 0,

    /**
     * Fired when a download completes successfully.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_FINISHED = 1,

    /**
     * Fired when a download fails.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_FAILED = 2,

    /**
     * Fired when a downloaded asset is deleted.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_ASSET_DELETED = 3,

    /**
     * Fired when the system automatically pauses a download.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_AUTO_PAUSED = 4,

    /**
     * Fired when the system automatically resumes a download.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_AUTO_RESUMED = 5,

    /**
     * Fired when the download status is refreshed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 21 dynamic
     * @since 23 static
     */
    DOWNLOAD_REFRESHED = 6,
  }

  /**
   * Defines the type of value in a KV pair. The type varies with the parameter function.
   *
   * @unionmember { int } Integer.
   * @unionmember { long } Long integer.
   * @unionmember { double } Decimal number.
   * @unionmember { string } String.
   * @unionmember { boolean } Boolean.
   * @unionmember { Uint8Array } Uint8 array.
   * @unionmember { null } Null.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  type ValueType = int | long | double | string | boolean | Uint8Array | null;

  /**
   * Defines the type of key and value in a KV pair.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  type ValuesBucket = Record<string, ValueType>;

  /**
   * Defines APIs to access the result set obtained by querying the RDB store.
   * 
   * Before calling any of the following APIs, you must use [query]{@link photoAccessHelper.PhotoAccessHelper.query} to 
   * obtain a ResultSet instance.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @since 22 dynamic
   * @since 23 static
   */
  class ResultSet {
    /**
     * Number of columns in the result set.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    columnCount: int;
    /**
     * Number of rows in the result set.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rowCount: int;
    /**
     * Index of the current row in the result set.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    rowIndex: int;
    /**
     * Whether the cursor is in the last row of the result set. **true** if the cursor is in the last row; **false** 
     * otherwise.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    isAtLastRow: boolean;
    /**
     * Moves the cursor to the specified row in the result set.
     *
     * @param { int } position - Index of the specified row, starting from 0. The value ranges from 0 to the total
     *     number of rows in the result set minus 1.
     * @returns { boolean } Operation result. **true** if the cursor is moved to the specified row; **false** otherwise.
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
     * Moves the cursor to the first row of the result set.
     *
     * @returns { boolean } Operation result. **true** if the cursor is moved to the first row; **false** otherwise.
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
     * Moves the cursor to the next row in the result set.
     *
     * @returns { boolean } Operation result. **true** if the cursor is moved to the next row; **false** otherwise.
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
     * Obtains the values of all columns in the specified row.
     *
     * @returns { ValuesBucket } Values of all columns in the specified row.
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
     * Obtains the value of the specified column in the current row.
     *
     * @param { int } columnIndex - Index of the specified column, starting from 0. The value ranges from 0 to the total
     *     number of columns in the result set minus 1.
     * @returns { ValueType } Allowed data field types.
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
     * Closes this resultSet to release memory. If it is not closed, memory leaks may occur.
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
   * Enumerates related entity filed type.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum FieldType {  
    /**
     * Field Type None
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    NONE = 0,
    /**
     * Field Type Analysis People
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ANALYSIS_PEOPLE = 1,
    /**
     * Field Type Analysis Label
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ANALYSIS_LABEL = 2,
    /**
     * Field Type Analysis City
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    ANALYSIS_CITY = 3,
    /**
     * Field Type Year
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    YEAR = 4,
    /**
     * Field Type Month
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MONTH = 5,
    /**
     * Field Type Day
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    DAY = 6,
    /**
     * Field Type Holiday
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    HOLIDAY = 7,
    /**
     * Field Type Media Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    MEDIA_TYPE = 8
  }
 
  /**
   * Enumerates related entity Ranking Method
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  enum RankingMethod {  
    /**
     * Random Vote Ranking Method
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    RANDOM_VOTE = 0
  }
 
  /**
   * Enumerates the states of a file memory link.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 24 dynamic&static
   */
  enum AppLinkState {  
    /**
     * Whether the file has a memory link cannot be determined.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    DEFAULT = 0,
    
    /**
     * The file does not have a memory link.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    HAS_NO_LINK = 1,

    /**
     * The file has a memory link.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    HAS_LINK = 2
  }
 
  /**
   * Provides APIs for input Context Map.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface ContextMap {  
    /**
     * Field Types
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    topicField: FieldType[];
  }
 
  /**
   * Provides APIs for input Options.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface Options {  
 
    /**
     * Ranking Method option
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    rankingMethod?: RankingMethod;
    /**
     * Recommendation Count option
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    recommendationCount?: int;
    /**
     * Suggestion Fields option
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    suggestionFields?: FieldType[];
  }
 
  /**
   * Provides APIs for output Entity.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  interface Entity {  
    /**
     * Indicates Entity Id.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    id: string;
 
    /**
     * Indicates Entity Name.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    name: string;
 
    /**
     * Indicates Entity Name.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    field: FieldType;
 
    /**
     * Indicates Entity Alias.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    alias: string[];
  }

  /**
   * Defines the asset compatibility capability.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic&static
   */
  interface AssetCompatibleCapability {  
    /**
     * Whether high-resolution assets are supported. **true**: yes; **false**: no.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 24 dynamic&static
     */
    supportedHighResolution: boolean;

    /**
     * Supported MIME types.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    supportedMimeType?: Array<string>;
  }

  /**
   * Search Suggestion Type.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum SearchSuggestionType {  
    /**
     * Searching for recommended words by time, location, and label.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_GEO_LABEL = 0,
	
    /**
     * Searching for recommended words by time and location.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_GEO = 1,
	
    /**
     * Searching for recommended words by time and label.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_LABEL = 2,
	
    /**
     * Searching for recommended words by time, people, location and label.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_PEOPLE_GEO_LABEL = 3,
	
    /**
     * Searching for recommended words by time, people and label.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_PEOPLE_GEO = 4,
	
    /**
     * Searching for recommended words by time, people and label.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    TIME_PEOPLE_LABEL = 5,
	
    /**
     * Searching for recommended words by time and people.
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
   * Search suggestion result.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SearchSuggestionResult {  
    /**
     * Search Suggestion Type
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    type: SearchSuggestionType;
	
    /**
     * Search suggestion
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    value: string;
	
    /**
     * Number of photos in the scenario where a recommendation word is searched.
     * The value range is all integers.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    count: int;
  }

  /**
   * Preferred compatible mode.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  enum PreferredCompatibleMode {
    /**
     * Performs transcoding based on the configured asset compatibility capabilities.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    DEFAULT = 0,
    /**
     * No transcoding is performed. The asset is returned in its original format.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    CURRENT = 1,
    /**
     * All assets are transcoded to the most widely compatible format.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    COMPATIBLE = 2
  }

  /**
   * Knowledge Content class, used for geting related entity.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  class KnowledgeContent {  
    /**
     * Get Related Entities, Smart Label
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { string } topic - Searching topic string.
     * @param { ContextMap } context - Context Map indicates topic filed.
     * @param { Options } [option] - Options for getRelatedEntity.
     * @returns { Promise<Entity[]> } Returns Array of Related Entities
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
     * Get Search Suggestion.
     *
     * @permission ohos.permission.READ_IMAGEVIDEO
     * @param { Array<SearchSuggestionType> } searchSuggestionTypes - Array of search suggestion types
     *     <br>The maximum length is 7 and cannot be empty.
     * @returns { Promise<Array<SearchSuggestionResult>> } Result of searching for recommended words
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
  }

  /**
   * Enumeration of permission level for an application to access asset.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum MediaAssetPermissionState {
    /**
     * Not media asset uri.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    URI_FORMAT_ERROR = 0,
    /**
     * Asset not exists.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FILE_NOT_EXIST = 1,
    /**
     * The application has read permission when accessing the asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    READ_PERMISSION = 2,
    /**
     * The application has no read permission when accessing the asset.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NO_READ_PERMISSION = 3
  }

  /**
   * Album operation attribute.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AlbumAttribute {  
    /**
     * The album nickname operation attribute.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NICK_NAME_ATTR = 'nickname',

    /**
     * The album extra_info operation attribute.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EXTRA_INFO_ATTR = 'extra_info',
    /**
     * The album is_removed operation attribute.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    IS_REMOVED_ATTR = 'is_removed'
  }

  /**
   * Album operation type.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AlbumOperationType {  
    /**
     * The album add operation type.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ADD = 'add',
    /**
     * The album remove operation type.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    REMOVE = 'remove',
    /**
     * The album update operation type.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UPDATE = 'update'
  }

  /**
   * Album operation info.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AlbumOperation {  
    /**
     * The album operation attribute.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    attr: AlbumAttribute;
    /**
     * The album operation type.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    type: AlbumOperationType;
    /**
     * The album operation parameters. The maximum length is 20, The array can contain a maximum of 20 strings, and
     *     each string must not exceed 500 characters in length.
     * 
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    values: string[];
  }

  /**
   * MediaLibrary availability.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface MediaLibraryAvailability {
    /**
     * MediaLibrary availability status.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    availabilityStatus: AvailabilityStatus;
    /**
     * MediaLibrary unavailability reason.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    unavailabilityReason: string;
  }

  /**
   * Enumeration of medialibrary availability status.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum AvailabilityStatus {
    /**
     * MediaLibrary available.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    AVAILABLE = 'available',
    /**
     * MediaLibrary unavailable.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    UNAVAILABLE = 'unavailable'
  }

  /**
   * Album attribute info.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AlbumAttributeInfo {
    /**
     * The album attribute value.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    attrValue?: string;
  }

  /**
   * Describes the state type of deep optimize space.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum DeepOptimizeState {
    /**
     * Indicates that the deep optimize space in process now.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    RUNNING = 0,

    /**
     * Indicates that the deep optimize space finished successfully.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    COMPLETED = 1,

    /**
     * Indicates that the deep optimize space failed.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FAILED = 2,

    /**
     * Indicates that the deep optimize space stopped.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STOPPED = 3,

    /**
     * Indicates that the deep optimize space interrupted.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    INTERRUPTED = 4
  }

  /**
   * Defines the DeepOptimizeSpaceProgress data structure.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface DeepOptimizeSpaceProgress {
    /**
     * The current deep optimize space state.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: DeepOptimizeState;
    /**
     * The percentage of deep optimize space state.
     * Unit: Percentage, The value range is all integers, Value range: [0, 100].
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    progress: int;
  }
}

export default photoAccessHelper;
