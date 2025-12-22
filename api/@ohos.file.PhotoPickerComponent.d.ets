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
 * @file A component which support other applications to select photos or videos
 * @kit MediaLibraryKit
 */

import photoAccessHelper from '@ohos.file.photoAccessHelper';
import { AsyncCallback } from '@ohos.base';

/**
 * Declare struct PhotoPickerComponent
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
@Component
export declare struct PhotoPickerComponent {
  /**
   * PickerOptions
   *
   * @type { ?PickerOptions }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  pickerOptions?: PickerOptions;

  /**
   * Callback when select photos or videos
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onSelect?: (uri: string) => void;

  /**
   * Callback when Deselect photos or videos
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onDeselect?: (uri: string) => void;

  /**
   * Callback when click item. include click camera item and thumbnail item, will return itemInfo
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onItemClicked?: (itemInfo: ItemInfo, clickType: ClickType) => boolean;

  /**
   * Callback when enter photo browser, will return photoBrowserInfo
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onEnterPhotoBrowser?: (photoBrowserInfo: PhotoBrowserInfo) => boolean;

  /**
   * Callback when exit photo browser, will return photoBrowserInfo
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onExitPhotoBrowser?: (photoBrowserInfo: PhotoBrowserInfo) => boolean;

  /**
   * Callback when pickerController is ready.
   * Set data to picker component by pickerController is supported after pickerController is ready
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onPickerControllerReady?: () => void;

  /**
   * Callback when photo browser change, will return browserItemInfo
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onPhotoBrowserChanged?: (browserItemInfo: BaseItemInfo) => boolean;

  /**
   * Callback when selected items are deleted
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  onSelectedItemsDeleted?: ItemsDeletedCallback;

  /**
   * Callback when exceed max selected
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  onExceedMaxSelected?: ExceedMaxSelectedCallback;

  /**
   * Callback when the current album is deleted
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  onCurrentAlbumDeleted?: CurrentAlbumDeletedCallback;

  /**
   * Callback when the video play state changed
   *
   * @type { ?function }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  onVideoPlayStateChanged?: videoPlayStateChangedCallback;

  /**
   * Callback when moving photo badge state changed
   *
   * @type { ?MovingPhotoBadgeStateChangedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  onMovingPhotoBadgeStateChanged?: MovingPhotoBadgeStateChangedCallback;

  /**
   * PickerController
   *
   * @type { ?PickerController }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  @ObjectLink
  pickerController: PickerController;

  /**
   * Callback when the grid stops scrolling at the starting position
   *
   * @type { ?ScrollStopAtStartCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  onScrollStopAtStart?: ScrollStopAtStartCallback;

  /**
   * Callback when the grid stops scrolling at the ending position
   *
   * @type { ?ScrollStopAtEndCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
  onScrollStopAtEnd?: ScrollStopAtEndCallback;

  /**
   * Build function of PhotoPickerComponent
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  build(): void;
}


/**
 * The callback of onSelectedItemsDeleted event
 *
 * @typedef { function } ItemsDeletedCallback
 * @param { Array<BaseItemInfo> }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export type ItemsDeletedCallback = (baseItemInfos: Array<BaseItemInfo>) => void;

/**
 * The callback of onExceedMaxSelected event
 *
 * @typedef { function } ItemsDeletedCallback
 * @param { MaxCountType }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export type ExceedMaxSelectedCallback = (exceedMaxCountType: MaxCountType) => void;

/**
 * The callback of onCurrentAlbumDeleted event
 *
 * @typedef { function } CurrentAlbumDeletedCallback
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export type CurrentAlbumDeletedCallback = () => void;

/**
 * The callback of onVideoPlayStateChanged event
 *
 * @typedef { function } videoPlayStateChangedCallback
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 14 dynamic
 */
export type videoPlayStateChangedCallback = (state: VideoPlayerState) => void;

/**
 * The callback of onMovingPhotoBadgeStateChanged event
 *
 * @typedef { function } MovingPhotoBadgeStateChangedCallback
 * @param { string } uri
 * @param { photoAccessHelper.MovingPhotoBadgeStateType } state
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 */
export type MovingPhotoBadgeStateChangedCallback =
  (uri: string, state: photoAccessHelper.MovingPhotoBadgeStateType) => void;


/**
 * The class for PickerController
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
@Observed
export declare class PickerController {
  /**
   * Set data to picker component
   *
   * @param { DataType } dataType - data type
   * @param { Object } data - data
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setData(dataType: DataType, data: Object): void;

  /**
   * Add data to picker component
   *
   * @param { DataType } dataType - data type
   * @param { Object } data - data
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  addData(dataType: DataType, data: Object): void;

  /**
   * Delete data to picker component
   *
   * @param { DataType } dataType - data type
   * @param { Object } data - data
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  deleteData(dataType: DataType, data: Object): void;

  /**
   * Set max select count to picker component, include max_total_count, max_photo_count and max_video_count.
   *
   * @param { MaxSelected } maxSelected - max select count data
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setMaxSelected(maxSelected: MaxSelected): void;

  /**
   * Set photo browser item to picker component.
   *
   * @param { string } uri - specify image uri for photo browsing
   * @param { PhotoBrowserRange } photoBrowserRange - photo browser slide range
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setPhotoBrowserItem(uri: string, photoBrowserRange?: PhotoBrowserRange): void;

  /**
   * Exit photo browser.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  exitPhotoBrowser(): void;

  /**
   * Sets whether other elements on the photo browser page are visible.
   *
   * @param { Array<PhotoBrowserUIElement> } elements - other elements on the photo browser page
   * @param { boolean } isVisible - visible or not
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  setPhotoBrowserUIElementVisibility(elements: Array<PhotoBrowserUIElement>, isVisible: boolean): void;

  /**
   * Display the photo after edit.
   *
   * @param { string } originalUri - Original uri 
   * @param { string } newUri - New uri after replacement
   * @param { AsyncCallback<void> } callback - Returns void
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 15 dynamic
   */
  replacePhotoPickerPreview(originalUri: string, newUri: string, callback: AsyncCallback<void>): void;

  /**
   * Save the photo assets of uris.
   *
   * @param { Array<string> } trustedUris - Uris need to be saved
   * @param { AsyncCallback<Array<string>> } callback - Returns the uri list
   * @param { Array<PhotoCreationConfig> } [configs] - Photo asset creation configs
   * @param { SaveMode } [saveMode] - Mode of save
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 15 dynamic
   */
  saveTrustedPhotoAssets(trustedUris: Array<string>, callback: AsyncCallback<Array<string>>,
    configs?: Array<photoAccessHelper.PhotoCreationConfig>, saveMode?: SaveMode): void;

  /**
   * Update options of the PhotoPicker component.
   *
   * @param { UpdatablePickerConfigs } updateConfig - Subset of PickerOptions
   * @returns { Promise<void> } Promise<void>
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  updatePickerOptions(updateConfig: UpdatablePickerConfigs): Promise<void>;
}

/**
 * PickerOptions Object
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class PickerOptions extends photoAccessHelper.BaseSelectOptions {
  /**
   * Support set checkBox color
   *
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  checkBoxColor?: string;

  /**
   * Support set backgroundColor
   *
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: string;

  /**
   * Support set gridMargin
   *
   * @type { ?Margin }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  gridMargin?: Margin;

  /**
   * Support set photoBrowserMargin
   *
   * @type { ?Margin }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  photoBrowserMargin?: Margin;

  /**
   * Support to set offset between first grid item and the top of the grid
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  gridStartOffset?: number;

  /**
   * Support to set offset between last grid item and the bottom of the grid
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  gridEndOffset?: number;

  /**
   * Support repeat select
   *
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  isRepeatSelectSupported?: boolean;

  /**
   * Support to set checkbox text color
   *
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  checkboxTextColor?: string;

  /**
   * Support to set photo browser background color mode
   *
   * @type { ?PickerColorMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  photoBrowserBackgroundColorMode?: PickerColorMode;

  /**
   * Support to set max select number remind mode.
   *
   * @type { ?ReminderMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  maxSelectedReminderMode?: ReminderMode;

  /**
   * Support to set display orientation
   *
   * @type { ?PickerOrientation }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  orientation?: PickerOrientation;

  /**
   * Support to set select mode
   *
   * @type { ?SelectMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  selectMode?: SelectMode;

  /**
   * Support to set max photo select number
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  maxPhotoSelectNumber?: number;

  /**
   * Support to set max video select number
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  maxVideoSelectNumber?: number;

  /**
   * Support to set sliding selection
   *
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  isSlidingSelectionSupported?: boolean;

  /**
   * Support to set photo browser checkbox position
   *
   * @type { ?[number, number] }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  photoBrowserCheckboxPosition?: [number, number];

  /**
   * Single-line display mode for the PhotoPickerComponent.
   *
   * @type { ?SingleLineConfig }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  singleLineConfig?: SingleLineConfig;

  /**
   * Support to set UIComponent color mode.
   *
   * @type { ?PickerColorMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  uiComponentColorMode?: PickerColorMode;

  /**
   * Support to set a serial number to distinguish different picker components. Default value is -1.
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  pickerIndex?: number;

  /**
   * Support automatically selecting the user-selected image/video on the PhotoPickerComponent
   * at the specified picker index.
   *
   * @type { ?Array<PreselectedInfo> }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  preselectedInfos?: Array<PreselectedInfo>;

  /**
  *
  * Support to config special badge display.
  * The picker component supports only one type of badge
  *
  * @type { ?BadgeConfig }
  * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
  * @atomicservice
  * @since 21 dynamic
  */
  badgeConfig?: BadgeConfig;

  /**
   * Support setting grid sliding.
   *
   * @type { ?boolean  }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
   isSlidingSupported?: boolean;

  /**
   * Grid edge slide effect.
   *
   * @type { ?EdgeEffect  }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
   edgeEffect?: EdgeEffect;
}

/**
 * UpdatablePickerConfigs
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 22 dynamic
 * @since 23 static
 */
export declare class UpdatablePickerConfigs {

  /**
   * The type of the file in the recent photo window.
   *
   * @type { ?photoAccessHelper.PhotoViewMIMETypes }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  mimeType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
   * Media file filtering configuration.
   *
   * @type { ?photoAccessHelper.MimeTypeFilter }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  mimeTypeFilter?: photoAccessHelper.MimeTypeFilter;

  /**
   * Maximum number of assets for a single selection.
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  maxSelectNumber?: number;

  /**
   * Maximum number of photos for a single selection.
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  maxPhotoSelectNumber?: number;

  /**
   * Maximum number of videos for a single selection.
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  maxVideoSelectNumber?: number;

  /**
   * Select mode of the picker.
   *
   * @type { ?SelectMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  selectMode?: SelectMode;

  /**
   * The mode of single selection.
   *
   * @type { ?photoAccessHelper.SingleSelectionMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  singleSelectionMode?: photoAccessHelper.SingleSelectionMode;

  /**
   * Support repeat select.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  isRepeatSelectSupported?: boolean;

  /**
   * The uri for the preselected files.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  preselectedUris?: Array<string>;

  /**
   * The checkbox color of the picker.
   *
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  checkBoxColor?: string;

  /**
   * The checkbox text color of the picker.
   *
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  checkboxTextColor?: string;

  /**
   * The background color of the picker.
   *
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  backgroundColor?: string;

  /**
   * Support to set photo browser background color mode.
   *
   * @type { ?PickerColorMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  photoBrowserBackgroundColorMode?: PickerColorMode;

  /**
   * Support to set UIComponent color mode.
   *
   * @type { ?PickerColorMode  }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
   uiComponentColorMode?: PickerColorMode;

  /**
   * Support setting grid sliding.
   *
   * @type { ?boolean  }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
   isSlidingSupported?: boolean;

  /**
   * Grid edge slide effect.
   *
   * @type { ?EdgeEffect  }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic&static
   */
   edgeEffect?: EdgeEffect;
}

/**
 * BaseItemInfo
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class BaseItemInfo {
  /**
   * Uri. if the itemType is CAMERA, it will be null
   *
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  uri?: string;

  /**
   * MimeType. if the itemType is CAMERA, it will be null
   *
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  mimeType?: string;

  /**
   * Width. if the itemType is CAMERA, it will be null
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  width?: number;

  /**
   * Height. if the itemType is CAMERA, it will be null
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  height?: number;

  /**
   * Size. if the itemType is CAMERA, it will be null
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  size?: number;

  /**
   * Duration. if the itemType is CAMERA, it will be null; if photos, return -1
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  duration?: number;

  /**
   * PhotoSubtype. Asset subtype, non-special type images default to DEFAULT(0).
   *
   * @type { ?photoAccessHelper.PhotoSubtype }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  photoSubType?: photoAccessHelper.PhotoSubtype;

  /**
   * DynamicRangeType. Dynamic range type of media files.
   * For movingPhoto, this specifically refers to the dynamic range type of the cover image.
   *
   * @type { ?photoAccessHelper.DynamicRangeType }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  dynamicRangeType?: photoAccessHelper.DynamicRangeType;

  /**
   * Orientation. Image/Video orientation information.
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  orientation?: number;

  /**
   * MovingPhotoBadgeState. Badge state of moving photo.
   *
   * @type { ?photoAccessHelper.MovingPhotoBadgeStateType }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  movingPhotoBadgeState?: photoAccessHelper.MovingPhotoBadgeStateType;

  /**
   * VideoMode. Mode of video.
   *
   * @type { ?photoAccessHelper.VideoMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  videoMode?: photoAccessHelper.VideoMode;
}

/**
 * ItemInfo
 *
 * @extends BaseItemInfo
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ItemInfo extends BaseItemInfo {
  /**
   * itemType. include CAMERA and THUMBNAIL.
   *
   * @type { ?ItemType }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  itemType?: ItemType;
}

/**
 * PhotoBrowserInfo
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class PhotoBrowserInfo {
  /**
   * AnimatorParams. include duration and curve
   *
   * @type { ?AnimatorParams }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  animatorParams?: AnimatorParams;
}

/**
 * AnimatorParams
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class AnimatorParams {
  /**
   * Animate duration
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  duration?: number;

  /**
   * Animate curve
   *
   * @type { ?Curve | ICurve | string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  curve?: Curve | ICurve | string;
}

/**
 * MaxSelected
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class MaxSelected {
  /**
   * data. support to set max_total_count, max_photo_count and max_video_count.
   *
   * @type { ?Map<MaxCountType, number> }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  data?: Map<MaxCountType, number>;
}


/**
 * Single-Line display mode.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 20 dynamic
 */
export declare class SingleLineConfig {
  /**
   * item display ratio
   *
   * @type { ?ItemDisplayRatio }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  itemDisplayRatio?: ItemDisplayRatio;

  /**
   * Rounded corner radius of grid items.
   *
   * @type { ?(Length | BorderRadiuses | LocalizedBorderRadiuses) }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  itemBorderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * item gap
   *
   * @type { ?Length }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  itemGap?: Length;  
}

/**
 * PreselectedInfo
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 21 dynamic
 */
export declare class PreselectedInfo {
  /**
   * Uri. Uri of the media file to be automatically selected.
   *
   * @type { string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  uri: string;

  /**
   * PreselectablePickerIndex. Serial number of the picker component that will automatically select this media file.
   *
   * @type { ?number }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  preselectablePickerIndex?: number;
}

/**
 * BadgeConfig
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 21 dynamic
 */
export declare class BadgeConfig {
  /**
  * The type of the special badge.
  *
  * @type { ?BadgeConfig }
  * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
  * @atomicservice
  * @since 21 dynamic
  */
  badgeType?: BadgeType;

  /**
  * The uri data of the asset that displays the badge.
  *
  * @type { ?Array<string> }
  * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
  * @atomicservice
  * @since 21 dynamic
  */
  uris?: Array<string>;
}

/**
 * DataType represents the type of the data set to picker component
 *
 * @enum { number } DataType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum DataType {
  /**
   * DataType: set selected uris to picker component, the data should be a array of uri
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SET_SELECTED_URIS = 1,

  /**
   * SET_ALBUM_URI. set selected album uri to picker component
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SET_ALBUM_URI = 2,

  /**
   * SET_SELECTED_INFO. Set selected information to picker component.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  SET_SELECTED_INFO = 3,
  
  /**
   * SET_BADGE_CONFIGS. Set badge configs to picker component.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  SET_BADGE_CONFIGS = 4
}

/**
 * ItemType. include CAMERA and THUMBNAIL
 *
 * @enum { number } ItemType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum ItemType {
  /**
   * THUMBNAIL. photos or videos item
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  THUMBNAIL = 0,

  /**
   * CAMERA. camera item
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  CAMERA = 1
}

/**
 * ClickType. include SELECTED and DESELECTED
 *
 * @enum { number } ClickType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum ClickType {
  /**
   * SELECTED. click to select photos or videos, if click camera item, the clickType is SELECTED.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SELECTED = 0,

  /**
   * DESELECTED. click to deselect photos or videos
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  DESELECTED = 1
}

/**
 * PickerOrientation. include VERTICAL and HORIZONTAL
 *
 * @enum { number } PickerOrientation
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PickerOrientation {
  /**
   * VERTICAL. vertical display
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  VERTICAL = 0,

  /**
   * HORIZONTAL. horizontal display
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  HORIZONTAL = 1
}

/**
 * SelectMode. include SINGLE_SELECT and MULTI_SELECT
 *
 * @enum { number } SelectMode
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum SelectMode {
  /**
   * SINGLE_SELECT. single select
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SINGLE_SELECT = 0,

  /**
   * MULTI_SELECT. multi select
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  MULTI_SELECT = 1
}

/**
 * PickerColorMode. include AUTO, LIGHT and DARK
 *
 * @enum { number } PickerColorMode
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PickerColorMode {
  /**
   * AUTO. follow system color
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  AUTO = 0,

  /**
   * LIGHT. light color
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  LIGHT = 1,

  /**
   * DARK. dark color
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  DARK = 2
}

/**
 * ReminderMode, include NONE, TOAST and MASK
 *
 * @enum { number } ReminderMode
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum ReminderMode {
  /**
   * NONE. no need to remind
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  NONE = 0,

  /**
   * TOAST. remind by toast
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  TOAST = 1,

  /**
   * MASK. remind by mask
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  MASK = 2
}

/**
 * MaxCountType. include TOTAL_MAX_COUNT, PHOTO_MAX_COUNT and VIDEO_MAX_COUNT
 *
 * @enum { number } MaxCountType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum MaxCountType {
  /**
   * TOTAL_MAX_COUNT. total max count
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  TOTAL_MAX_COUNT = 0,

  /**
   * PHOTO_MAX_COUNT. photo max count
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  PHOTO_MAX_COUNT = 1,

  /**
   * VIDEO_MAX_COUNT. video max count
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  VIDEO_MAX_COUNT = 2
}

/**
 * PhotoBrowserRange. include ALL and SELECTED_ONLY
 *
 * @enum { number } PhotoBrowserRange
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PhotoBrowserRange {
  /**
   * ALL. all photos or vedios
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  ALL = 0,

  /**
   * SELECTED_ONLY. only selected photos or vedios
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SELECTED_ONLY = 1,
}

/**
 * PhotoBrowserUIElement. include CHECKBOX and BACK_BUTTON
 *
 * @enum { number } PhotoBrowserUIElement
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export declare enum PhotoBrowserUIElement {
  /**
   * CHECKBOX. checkbox
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  CHECKBOX = 0,

  /**
   * BACK_BUTTON. back button
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  BACK_BUTTON = 1
}

/**
 * Enumeration type of save mode.
 *
 * @enum { number } SaveMode
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 15 dynamic
 */
export declare enum SaveMode {
  /**
   * Save as a new photo/video.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 15 dynamic
   */
  SAVE_AS = 0,

  /**
   * Overwrite and save.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 15 dynamic
   */
  OVERWRITE = 1
}

/**
 * BadgeType.
 *
 * @enum { int } BadgeType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 21 dynamic
 */
export declare enum BadgeType {
  /**
   * BADGE_UPLOADED. Asset uploaded.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  BADGE_UPLOADED = 0
}

/**
 * VideoPlayerState. include PLAYING, PAUSED, STOPPED, SEEK_START and SEEK_FINISH
 *
 * @enum { number } VideoPlayerState
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 14 dynamic
 */
export declare enum VideoPlayerState {
  /**
   * PLAYING. video is playing
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  PLAYING = 0,

  /**
   * PAUSED. video is paused
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  PAUSED = 1,

   /**
   * STOPPED. video is stopped
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  STOPPED = 2,

   /**
   * SEEK_START. seek drag is start
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  SEEK_START = 3,

   /**
   * SEEK_FINISH. seek drag is finish
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  SEEK_FINISH = 4
}

/**
 * Enumerates the aspect ratios of the grid item display, including 1:1 and the original image's aspect ratio.
 *
 * @enum { number } Grid item display aspect ratio.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 20 dynamic
 */
export declare enum ItemDisplayRatio {
  /**
   * Square ratio item
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  SQUARE_RATIO = 0,

  /**
   * original size ratio item
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  ORIGINAL_SIZE_RATIO = 1
}
/**
  * The callback of onScrollStopAtStart event
  *
  * @typedef { function } ScrollStopAtStartCallback
  * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
  * @stagemodelonly
  * @atomicservice
  * @since 23 dynamic&static
  */
export type ScrollStopAtStartCallback = () => void;

/**
  * The callback of onScrollStopAtEnd event
  *
  * @typedef { function } ScrollStopAtEndCallback
  * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
  * @stagemodelonly
  * @atomicservice
  * @since 23 dynamic&static
  */
export type ScrollStopAtEndCallback = () => void;