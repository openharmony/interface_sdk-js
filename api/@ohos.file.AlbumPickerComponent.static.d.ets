
'use static';
/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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
 * @file A component which supports applications to select album
 * @kit MediaLibraryKit
 */

import { PickerColorMode } from '@ohos.file.PhotoPickerComponent';

import photoAccessHelper from '@ohos.file.photoAccessHelper';

import { Component, Builder } from '@ohos.arkui.component';

import { Observed } from '@ohos.arkui.stateManagement';

/**
 * AlbumPickerComponent: can select a certain album and display the images in that album through PhotoPickerComponent
 *
 * @struct { AlbumPickerComponent }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Component
export declare struct AlbumPickerComponent {}

/**
 * The callback of onEmptyAreaClick event
 * @typedef { function }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type EmptyAreaClickCallback = () => void;

/**
 * The callback of onAlbumClick event
 * @typedef { function }
 * @param { AlbumInfo } albumInfo
 * @returns { boolean } boolean
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type AlbumClickCallback = (albumInfo: AlbumInfo) => boolean;

/**
 * AlbumPickerOptions Object
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class AlbumPickerOptions {
  /**
   * AlbumPickerComponent theme color
   * @type { ?PickerColorMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public themeColorMode?: PickerColorMode;

  /**
   * The type of the content displayed in the album
   * @type { ?photoAccessHelper.PhotoViewMIMETypes }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public filterType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
   * The size of the font displayed in the album. When `fontSize` is a number type, must use 'fp' unit
   * @type { ?(int | string) }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public fontSize?: int | string;
}


/**
 * AlbumInfo: include album uri
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class AlbumInfo {
  /**
   * Album uri
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public uri?: string;
}


/**
 * The class for AlbumPickerController
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Observed
export declare class AlbumPickerController {
  /**
   * Set font size to album picker component. Invalid value will result in the default font size being shown.
   *
   * @param { int | string } fontSize - font size of album picker component
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public setFontSize(fontSize: int | string): void;
}