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
 * The **AlbumPickerComponent** embedded in the UI of an application allows the application to access the albums in the 
 * user directory without any permission.
 * 
 * Note that **AlbumPickerComponent** does not support nesting. Additionally, prevent overlaying components with the 
 * **overlay** attribute or of higher levels on top it, as this will prevent it from receiving gesture events.
 * 
 * This component must be used together with [PhotoPickerComponent]{@link @ohos.file.PhotoPickerComponent}. When a user 
 * selects an album by using the **AlbumPickerComponent**, the **PhotoPickerComponent** is instructed to update the 
 * images and videos in the album.
 * 
 * > **NOTE**
 * >
 * > - This component does not support [same-layer rendering](docroot://web/web-same-layer.md).
 * 
 * ###### Attributes
 * 
 * The [universal attributes]{@link common} are supported.
 *
 * @file AlbumPickerComponent
 * @kit MediaLibraryKit
 */

import { PickerColorMode } from '@ohos.file.PhotoPickerComponent';
import photoAccessHelper from '@ohos.file.photoAccessHelper';

/**
 * AlbumPickerComponent( {albumPickerOptions?: AlbumPickerOptions, onAlbumClick?: (albumInfo: AlbumInfo) => boolean,
 * onEmptyAreaClick?: EmptyAreaClickCallback, albumPickerController?: AlbumPickerController })
 *
 * The **AlbumPickerComponent** embedded in the UI of an application allows the application to access the albums in the
 * user directory without any permission.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
@Component
export declare struct AlbumPickerComponent {
  /**
   * AlbumPickerOptions
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  albumPickerOptions?: AlbumPickerOptions;

  /**
   * Callback when select an album, will return album uri
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onAlbumClick?: (albumInfo: AlbumInfo) => boolean;

  /**
   * Callback when click the empty area of the album component
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  onEmptyAreaClick?: EmptyAreaClickCallback;

  /**
   * AlbumPickerController
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  albumPickerController?: AlbumPickerController;
}

/**
 * Called when the blank area of the **AlbumPickerComponent** is tapped.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export type EmptyAreaClickCallback = () => void;

/**
 * Represents the **AlbumPicker** configuration.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class AlbumPickerOptions {
  /**
   * Theme color of the album page. The options are **AUTO**, **Light**, and **Dark**. The default value is **AUTO**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  themeColorMode?: PickerColorMode;

  /**
   * Type of the filter. You can use it to display images, videos, or both. If this parameter is not specified, images
   * and videos are displayed in a specific album.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  filterType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
   * Font size. For details about the value range, see [fontSize]{@link TextAttribute#fontSize}.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  fontSize?: number | string;
}

/**
 * Represents album information.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class AlbumInfo {
  /**
   * Album URI.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  uri?: string;

  /**
   * Album name.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  albumName?: string;
}

/**
 * A controller that enables applications to send data to the **AlbumPickerComponent**.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 20 dynamic
 */
@Observed
export declare class AlbumPickerController {
  /**
   * Sets the font size of the album list.
   *
   * @param { number | string } fontSize - Font size. For details about the value range, see
   *     [fontSize]{@link TextAttribute#fontSize}.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  setFontSize(fontSize: number | string): void;
}