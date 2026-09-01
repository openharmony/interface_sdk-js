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
 * The RecentPhotoComponent embedded in the UI of an application allows the application to access the recent image or 
 * video in the user directory without the required permission. This component grants the application only the read 
 * permission.
 * 
 * Note that **RecentPhotoComponent** does not support nesting. Additionally, prevent overlaying components with the 
 * **overlay** attribute or of higher levels on top it, as this will prevent it from receiving gesture events.
 * 
 * > **NOTE**
 * >
 * > - This component does not support [same-layer rendering](docroot://web/web-same-layer.md).
 * 
 * ###### Properties
 * 
 * The [universal properties]{@link common} are supported.
 *
 * @file RecentPhotoComponent
 * @kit MediaLibraryKit
 */

import photoAccessHelper from '@ohos.file.photoAccessHelper';
import { BaseItemInfo, PickerColorMode } from '@ohos.file.PhotoPickerComponent';

/**
 * RecentPhotoComponent({ recentPhotoOptions?: RecentPhotoOptions, onRecentPhotoCheckResult?:
 * RecentPhotoCheckResultCallback, onRecentPhotoClick: RecentPhotoClickCallback, onRecentPhotoCheckInfo?:
 * RecentPhotoCheckInfoCallback, })
 *
 * Allows an application to access the latest image or video file in the public directory  to access the recent image or
 * video in the user directory without the media access permission.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
@Component
export declare struct RecentPhotoComponent {
  /**
   * recentPhotoOptions
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  recentPhotoOptions?: RecentPhotoOptions;

  /**
   * Callback when check whether photos or videos exists
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onRecentPhotoCheckResult?: RecentPhotoCheckResultCallback;

  /**
   * Callback when select photos or videos
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onRecentPhotoClick: RecentPhotoClickCallback;

  /**
   * Callback when check whether photos or videos exists and return the recent photo info
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  onRecentPhotoCheckInfo?: RecentPhotoCheckInfoCallback;
}

/**
 * Called to return the query result of the recent image or video.
 *
 * @param { boolean } recentPhotoExists - Whether the recent image or video exists. **true** if it exists, **false**
 *     otherwise. The default value is **true**.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export type RecentPhotoCheckResultCallback = (recentPhotoExists: boolean) => void;

/**
 * Called when the recent image or video is selected. No special processing is performed on the return value.
 *
 * @param { BaseItemInfo } recentPhotoInfo - Information about the recent image or video.
 * @returns { boolean } Processing result of the recent image or video. The value **true** means that the processing is
 *     complete.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export type RecentPhotoClickCallback = (recentPhotoInfo: BaseItemInfo) => boolean;

/**
 * Called to return whether the recent image or video exists and the information about it.
 *
 * @param { boolean } recentPhotoExists - Whether the recent image or video exists. **true** if it exists, **false**
 *     otherwise. The default value is **true**.
 * @param { RecentPhotoInfo } info - Information about the recent image or video.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export type RecentPhotoCheckInfoCallback = (recentPhotoExists: boolean, info: RecentPhotoInfo) => void;

/**
 * Represents the configuration of the recent image or video.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class RecentPhotoOptions {
  /**
   * Time period for displaying the latest image sorted by creation time, in seconds. The longest duration you can set
   * is 1 day (86400s).
   *
   * If the value is less than or equal to 0, greater than 86400, or not set, the most recent photos over the longest
   * period of up to one day is displayed by default. If there is no image or video in the specified period, the
   * component is not displayed.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  period?: number;

  /**
   * Types of the file displayed. The default value is **PhotoViewMIMETypes.IMAGE_VIDEO_TYPE**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  MIMEType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
   * Source of the recent image or video, for example, image or video taken by the camera or screenshot. By default, the
   * source is not restricted.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  photoSource?: PhotoSource;

  /**
   * Whether the **RecentPhotoComponent** automatically refreshes when there are changes (including additions,
   * deletions, or modifications) to the recent images or videos that meet the requirements.
   *
   * If the component's originally displayed image or video is deleted and there are no other images or videos that meet
   * the requirements, a placeholder is displayed and the component does not automatically close.
   *
   * The default value is **false**, indicating that the component does not automatically refresh. If this parameter is
   * set to **true**, all images are displayed, and the **period** parameter is invalid.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  isAutoRefreshSupported?: boolean;

  /**
   * Color mode of the placeholder.
   *
   * This setting is used when **isAutoRefreshSupported** is set to **true** and no recent image or video meets the
   * requirements, showing a placeholder instead.
   *
   * By default, it follows the system's dark/light color mode.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  colorMode?: PickerColorMode;
}

/**
 * Represents information about the recent image or video.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export declare class RecentPhotoInfo {
  /**
   * Time when the recent image or video is taken, in ms. The value is the number of milliseconds elapsed since the Unix
   * epoch (00:00:00 UTC on January 1, 1970).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  dateTaken?: number;

  /**
   * Hash value of the name of the recent image or video, which is used to help the application determine whether the
   * image or video to be displayed is the same as the one displayed before.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  identifier?: string;
}

/**
 * Enumerates the sources of the image or video data.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PhotoSource {
  /**
   * Image or video from all sources.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  ALL = 0,

  /**
   * Image or video taken by the camera.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  CAMERA = 1,

  /**
   * Screenshot or screen capture video.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SCREENSHOT = 2
}