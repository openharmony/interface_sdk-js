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
 * @file A component which support other applications to select photos or videos
 * @kit MediaLibraryKit
 */

import photoAccessHelper from '@ohos.file.photoAccessHelper';
import { AsyncCallback } from '@ohos.base';
import { Component, Margin, Curve, EdgeEffect, ICurve, Length, BorderRadiuses, LocalizedBorderRadiuses } 
    from '@ohos.arkui.component';
import { Observed, ObjectLink } from './arkui/stateManagement/decorator';
import { Builder } from './arkui/component/builder';

/**
 * Declare struct PhotoPickerComponent
 *
 * @struct { PhotoPickerComponent }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Component
export declare struct PhotoPickerComponent {
  /**
   * PickerOptions
   * @type { ?PickerOptions }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  pickerOptions?: PickerOptions;

  /**
   * Callback when select photos or videos
   * @type { ?SelectCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onSelect?: SelectCallback;

  /**
   * Callback when Deselect photos or videos
   * @type { ?DeSelectCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onDeselect?: DeSelectCallback;

  /**
   * Callback when click item. include click camera item and thumbnail item, will return itemInfo
   * @type { ?ItemClickedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onItemClicked?: ItemClickedCallback;

  /**
   * Callback when enter photo browser, will return photoBrowserInfo
   * @type { ?EnterPhotoBrowserCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onEnterPhotoBrowser?: EnterPhotoBrowserCallback;

  /**
   * Callback when exit photo browser, will return photoBrowserInfo
   * @type { ?ExitPhotoBrowserCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onExitPhotoBrowser?: ExitPhotoBrowserCallback;

  /**
   * Callback when pickerController is ready.
   * Set data to picker component by pickerController is supported after pickerController is ready
   * @type { ?PickerControllerReadyCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onPickerControllerReady?: PickerControllerReadyCallback;

  /**
   * Callback when photo browser change, will return browserItemInfo
   * @type { ?PhotoBrowserChangedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onPhotoBrowserChanged?: PhotoBrowserChangedCallback;

  /**
   * Callback when selected items are deleted
   * @type { ?ItemsDeletedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onSelectedItemsDeleted?: ItemsDeletedCallback;

  /**
   * Callback when exceed max selected
   * @type { ?ExceedMaxSelectedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onExceedMaxSelected?: ExceedMaxSelectedCallback;

  /**
   * Callback when the current album is deleted
   * @type { ?CurrentAlbumDeletedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onCurrentAlbumDeleted?: CurrentAlbumDeletedCallback;

  /**
   * Callback when the video play state changed
   * @type { ?VideoPlayStateChangedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onVideoPlayStateChanged?: VideoPlayStateChangedCallback;

  /**
   * Callback when moving photo badge state changed
   * @type { ?MovingPhotoBadgeStateChangedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onMovingPhotoBadgeStateChanged?: MovingPhotoBadgeStateChangedCallback;

  /**
   * Callback when photo browser change start (upon user swipe release), will return targetPhotoInfo
   * @type { ?PhotoBrowserChangeStartCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onPhotoBrowserChangeStart?: PhotoBrowserChangeStartCallback;

  /**
   * Callback when click item. Includes camera items and thumbnail items. Returns itemInfo in the callback.
   * Must be used in conjunction with the addData method.
   * @type { ?ItemClickedNotifyCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onItemClickedNotify?: ItemClickedNotifyCallback;

  /**
   * Callback when the grid stops scrolling at the starting position.
   * @type { ?ScrollStopAtStartCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onScrollStopAtStart?: ScrollStopAtStartCallback;

  /**
   * Callback when the grid stops scrolling at the ending position.
   * @type { ?ScrollStopAtEndCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onScrollStopAtEnd?: ScrollStopAtEndCallback;

  /**
   * Callback when the grid's level is switched via pinch gesture.
   * @type { ?PinchGridSwitchedCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onPinchGridSwitched?: PinchGridSwitchedCallback;

  /**
   * Callback when an error occurs in the PhotoPickerComponent.
   * @type { ?ErrorCallback }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  onError?: ErrorCallback;

  /**
   * Callback when the zoom scale changes during large image browsing.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  onPhotoBrowserZoom?: PhotoBrowserZoomCallback;

  /**
   * PickerController
   * @type { PickerController }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @ObjectLink
  pickerController: PickerController;

  /**
   * Build function of PhotoPickerComponent
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  @Builder
  build(): void;
}

/**
 * The class for PickerController
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
@Observed
export declare class PickerController {
  /**
   * Set data to picker component
   *
   * @param { DataType } dataType - data type
   * @param { Object } data - data
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public setData(dataType: DataType, data: Object): void;

  /**
   * Add data to picker component
   *
   * @param { DataType } dataType - data type
   * @param { Object } data - data
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public addData(dataType: DataType, data: Object): void;

  /**
   * Delete data to picker component
   *
   * @param { DataType } dataType - data type
   * @param { Object } data - data
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public deleteData(dataType: DataType, data: Object): void;

  /**
   * Set max select count to picker component, include max_total_count, max_photo_count and max_video_count.
   *
   * @param { MaxSelected } maxSelected - max select count data
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public setMaxSelected(maxSelected: MaxSelected): void;

  /**
   * Set photo browser item to picker component.
   *
   * @param { string } uri - specify image uri for photo browsing
   * @param { PhotoBrowserRange } [photoBrowserRange] - photo browser slide range
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public setPhotoBrowserItem(uri: string, photoBrowserRange?: PhotoBrowserRange): void;

  /**
   * Exit photo browser.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public exitPhotoBrowser(): void;

  /**
   * Sets whether other elements on the photo browser page are visible.
   *
   * @param { PhotoBrowserUIElement[] } elements - other elements on the photo browser page
   * @param { boolean } isVisible - visible or not
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public setPhotoBrowserUIElementVisibility(elements: PhotoBrowserUIElement[], isVisible: boolean): void;

  /**
   * Display the photo after edit.
   *
   * @param { string } originalUri - Original uri
   * @param { string } newUri - New uri after replacement
   * @param { AsyncCallback<void> } callback - Returns void
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public replacePhotoPickerPreview(originalUri: string, newUri: string, callback: AsyncCallback<void>): void;

  /**
   * Save the photo assets of uris.
   *
   * @param { string[] } trustedUris - Uris need to be saved
   * @param { AsyncCallback<string[]> } callback - Returns the uri list
   * @param { photoAccessHelper.PhotoCreationConfig[] } [configs] - Photo asset creation configs
   * @param { SaveMode } [saveMode] - Mode of save
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public saveTrustedPhotoAssets(trustedUris: string[], callback: AsyncCallback<string[]>,
    configs?: photoAccessHelper.PhotoCreationConfig[], saveMode?: SaveMode): void;

  /**
   * Save the photo assets of uris.
   *
   * @param { Array<string> } trustedUris - Uris need to be saved
   * @param { Array<photoAccessHelper.CreationSetting> } [settings] - Photo asset creation settings
   * @param { SaveMode } [saveMode] - Mode of save
   * @returns { Promise<Array<string>> } - Returns the media library file uri list to application
   *     which has been authorized
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public saveTrustedPhotoAssetsEx(trustedUris: Array<string>,settings?: Array<photoAccessHelper.CreationSetting>,
      saveMode?: SaveMode): Promise<Array<string>>;

  /**
   * Update the attributes of the picker component. This method uses a promise to return the result.
   *
   * @param { UpdatablePickerConfigs } updateConfig - New attributes, which are a subset of PickerOptions
   * @returns { Promise<void> } Promise that returns no value
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public updatePickerOptions(updateConfig: UpdatablePickerConfigs): Promise<void>;

  /**
   * Sets the moving photo effect in the photo browser view.
   * This configuration only takes effect for moving photo when viewed in the photo browser.
   * Note: Only MOVING_PHOTO_ENABLED and MOVING_PHOTO_DISABLED are supported as values.
   *
   * @param { photoAccessHelper.MovingPhotoBadgeStateType } movingPhotoState - State of moving photo.
   * @returns { Promise<void> } Promise<void>
   * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
   *     1. An invalid enumeration value was passed. Only MOVING_PHOTO_ENABLED and
   *     MOVING_PHOTO_DISABLED are supported for configuration;
   * @throws { BusinessError } 23800202 - Invalid call context. Possible causes:
   *     1. The API is called outside the photo browsing scenario.
   *     2. The API is called when isMovingPhotoBadgeShown is already set to true.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public setMovingPhotoState(movingPhotoState: photoAccessHelper.MovingPhotoBadgeStateType): Promise<void>;

  /**
   * Call this method to obtain the complete data after a selection operation has finished.
   *
   * @returns { Promise<CompletedResult> } Promise<CompletedResult>
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public completed(): Promise<CompletedResult>;
}

/**
 * PickerOptions Object
 *
 * @extends photoAccessHelper.BaseSelectOptions
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class PickerOptions extends photoAccessHelper.BaseSelectOptions {
  /**
   * Support set checkBox color
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public checkBoxColor?: string;

  /**
   * Support set backgroundColor
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public backgroundColor?: string;

  /**
   * Support repeat select
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public isRepeatSelectSupported?: boolean;

  /**
   * Support to set checkbox text color
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public checkboxTextColor?: string;

  /**
   * Support to set photo browser background color mode
   * @type { ?PickerColorMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public photoBrowserBackgroundColorMode?: PickerColorMode;

  /**
   * Support to set max select number remind mode.
   * @type { ?ReminderMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public maxSelectedReminderMode?: ReminderMode;

  /**
   * Support to set display orientation
   * @type { ?PickerOrientation }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public orientation?: PickerOrientation;

  /**
   * Support to set select mode
   * @type { ?SelectMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public selectMode?: SelectMode;

  /**
   * Support to set max photo select number
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public maxPhotoSelectNumber?: int;

  /**
   * Support to set max video select number
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public maxVideoSelectNumber?: int;

  /**
   * Support to set sliding selection
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public isSlidingSelectionSupported?: boolean;

  /**
   * Support to set photo browser checkbox position
   * @type { ?[double, double] }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public photoBrowserCheckboxPosition?: [
        double,
        double
    ];

  /**
   * Support set photoBrowserMargin
   * @type { ?Margin }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public photoBrowserMargin?: Margin;

  /**
   * Support set gridMargin
   * @type { ?Margin }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public gridMargin?: Margin;

  /**
   * Single-line display mode for the PhotoPickerComponent.
   * @type { ?SingleLineConfig }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public singleLineConfig?: SingleLineConfig;

  /**
   * Support to set UIComponent color mode.
   * @type { ?PickerColorMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public uiComponentColorMode?: PickerColorMode;

  /**
   * Support to set offset between first grid item and the top of the grid
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public gridStartOffset?: int;

  /**
   * Support to set offset between last grid item and the bottom of the grid
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public gridEndOffset?: int;

  /**
   * Support to set a serial number to distinguish different picker components. Default value is -1.
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public pickerIndex?: int;

  /**
   * Support automatically selecting the user-selected image/video on the PhotoPickerComponent
   * at the specified picker index.
   * @type { ?PreselectedInfo[] }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public preselectedInfos?: PreselectedInfo[];

  /**
   * Support to config special badge display.
   * The picker component supports only one type of badge
   * @type { ?BadgeConfig }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public badgeConfig?: BadgeConfig;

  /**
   * Support to set whether sliding is supported in the PhotoPickerComponent
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public isSlidingSupported?: boolean;

  /**
   * Support to set the scrolling effect when the grid page reaches the edge
   * @type { ?EdgeEffect }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public edgeEffect?: EdgeEffect;

  /**
   * Support to display only the album content corresponding to the specified bundle name
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public appAlbumFilters?: Array<string>;

  /**
   * Support setting background opacity.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public backgroundOpacity?: double;

  /**
   * Context recovery information for restoring the last selection session.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public contextRecoveryInfo?: photoAccessHelper.ContextRecoveryInfo;
}

/**
 * BaseItemInfo
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class BaseItemInfo {
  /**
   * Uri. if the itemType is CAMERA, it will be null
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public uri?: string;

  /**
   * MimeType. if the itemType is CAMERA, it will be null
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public mimeType?: string;

  /**
   * Width. if the itemType is CAMERA, it will be null
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public width?: int;

  /**
   * Height. if the itemType is CAMERA, it will be null
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public height?: int;

  /**
   * Size. if the itemType is CAMERA, it will be null
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public size?: int;

  /**
   * Duration. if the itemType is CAMERA, it will be null; if photos, return -1
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public duration?: int;

  /**
   * PhotoSubType. Asset subtype, non-special type images default to DEFAULT(0).
   * @type { ?photoAccessHelper.PhotoSubtype }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public photoSubType?: photoAccessHelper.PhotoSubtype;

  /**
   * DynamicRangeType. Dynamic range type of media files.
   *     For movingPhoto, this specifically refers to the dynamic range type of the cover image.
   * @type { ?photoAccessHelper.DynamicRangeType }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public dynamicRangeType?: photoAccessHelper.DynamicRangeType;

  /**
   * Orientation. Image or video direction information.
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public orientation?: int;

  /**
   * State of the moving photo badge. if the itemType is CAMERA, it will be null
   * @type { ?photoAccessHelper.MovingPhotoBadgeStateType }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public movingPhotoBadgeState?: photoAccessHelper.MovingPhotoBadgeStateType;

  /**
   * VideoMode. Log mode of a video file.
   * @type { ?photoAccessHelper.VideoMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public videoMode?: photoAccessHelper.VideoMode;
}

/**
 * ItemInfo
 *
 * @extends BaseItemInfo
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ItemInfo extends BaseItemInfo {
  /**
   * itemType. include CAMERA and THUMBNAIL.
   * @type { ?ItemType }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public itemType?: ItemType;
}

/**
 * PhotoBrowserInfo
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class PhotoBrowserInfo {
  /**
   * AnimatorParams. include duration and curve
   * @type { ?AnimatorParams }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public animatorParams?: AnimatorParams;
}

/**
 * AnimatorParams
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class AnimatorParams {
  /**
   * Animate duration
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public duration?: int;

  /**
   * Animate curve
   * @type { ?(Curve | ICurve | string) }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public curve?: Curve | ICurve | string;
}

/**
 * MaxSelected
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class MaxSelected {
  /**
   * data. support to set max_total_count, max_photo_count and max_video_count.
   * @type { ?Map<MaxCountType, int> }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public data?: Map<MaxCountType, int>;
}

/**
 * Single-Line display mode.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class SingleLineConfig {
  /**
   * item display ratio
   * @type { ?ItemDisplayRatio }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public itemDisplayRatio?: ItemDisplayRatio;

  /**
   * Rounded corner radius of grid items.
   * @type { ?(Length | BorderRadiuses | LocalizedBorderRadiuses) }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public itemBorderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * item gap
   * @type { ?Length }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public itemGap?: Length;
}

/**
 * PreselectedInfo
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class PreselectedInfo {
  /**
   * Uri. Uri of the media file to be automatically selected.
   * @type { string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public uri: string;

  /**
   * PreselectablePickerIndex. Serial number of the picker component that will automatically select this media file.
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public preselectablePickerIndex?: int;
}

/**
 * BadgeConfig
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class BadgeConfig {
  /**
   * The type of the special badge.
   * @type { ?BadgeType }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public badgeType?: BadgeType;

  /**
   * The uri data of the asset that displays the badge.
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public uris?: Array<string>;
}

/**
 * UpdatablePickerConfigs. The updatable attributes of the PhotoPickerComponent,
 * which are a subset of PickerOptions.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class UpdatablePickerConfigs {
  /**
   * MIME types. If this parameter is not specified, IMAGE_VIDEO_TYPE is used by default.
   * @type { ?photoAccessHelper.PhotoViewMIMETypes }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public mimeType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
   * Configuration for file type filtering. Multiple types can be specified.
   * @type { ?photoAccessHelper.MimeTypeFilter }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public mimeTypeFilter?: photoAccessHelper.MimeTypeFilter;

  /**
   * Maximum number of media files that can be selected.
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public maxSelectNumber?: int;

  /**
   * Maximum number of images that can be selected.
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public maxPhotoSelectNumber?: int;

  /**
   * Maximum number of videos that can be selected.
   * @type { ?int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public maxVideoSelectNumber?: int;

  /**
   * Picker selection mode. SINGLE_SELECT or MULTI_SELECT. The default value is MULTI_SELECT.
   * @type { ?SelectMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public selectMode?: SelectMode;

  /**
   * Single selection mode. The default value is SingleSelectionMode.BROWSER_MODE.
   * @type { ?photoAccessHelper.SingleSelectionMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public singleSelectionMode?: photoAccessHelper.SingleSelectionMode;

  /**
   * Whether a single image can be repeatedly selected. The default value is false.
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public isRepeatSelectSupported?: boolean;

  /**
   * URIs of the selected images.
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public preselectedUris?: Array<string>;

  /**
   * Background color of the check box. The value is an 8-digit hexadecimal color code.
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public checkBoxColor?: string;

  /**
   * Text color in the check box. The value is an 8-digit hexadecimal color code.
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public checkboxTextColor?: string;

  /**
   * Background color of the Picker grid page. The value is an 8-digit hexadecimal color code.
   * @type { ?string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public backgroundColor?: string;

  /**
   * Background color of the photo browser page. The options are AUTO, LIGHT, and DARK. The default value is AUTO.
   * @type { ?PickerColorMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public photoBrowserBackgroundColorMode?: PickerColorMode;

  /**
   * Color mode of the Picker UI component. The default value is PickerColorMode.AUTO.
   * @type { ?PickerColorMode }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public uiComponentColorMode?: PickerColorMode;

  /**
   * Whether scrolling in the PhotoPickerComponent is enabled. The default value is true.
   * @type { ?boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public isSlidingSupported?: boolean;

  /**
   * Scrolling effect when the Picker grid page reaches the edge. The default value is EdgeEffect.Spring.
   * @type { ?EdgeEffect }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public edgeEffect?: EdgeEffect;

  /**
   * Playback mode of the moving photo. The maximum array length is 2.
   * @type { ?Array<photoAccessHelper.AutoPlayScene> }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public autoPlayScenes?: Array<photoAccessHelper.AutoPlayScene>;

  /**
   * Used to display only the album content corresponding to the specified bundle name.
   * @type { ?Array<string> }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public appAlbumFilters?: Array<string>;

  /**
   * Support setting background opacity.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public backgroundOpacity?: double;

  /**
   * Support set photoBrowserMargin.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public photoBrowserMargin?: Margin;

  /**
   * Support set gridMargin.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.1.0 static
   */
  public gridMargin?: Margin;
}

/**
 * ClickResult. Sets whether the asset with the specified URI is selected.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class ClickResult {
  /**
   * URI of the media asset.
   * @type { string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public uri: string;

  /**
   * Sets whether the specified media asset is selected.
   * @type { boolean }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public isSelected: boolean;
}

/**
 * PickerError. Describes the function name, error code, and message of the error returned
 * when an error occurs during the use of the PhotoPickerComponent.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class PickerError {
  /**
   * Function name of the error.
   * @type { string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public functionName: string;

  /**
   * Error code.
   * @type { int }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public errorCode: int;

  /**
   * Error message.
   * @type { string }
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  public message: string;
}

/**
 * CompletedResult
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare class CompletedResult {
  /**
   * URIs of the images or videos selected. The URI array can be used only by calling photoAccessHelper.getAssets
   * with temporary authorization. For details about how to use the media file URI, see Using a Media File URI.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  photoUris: Array<string>;

  /**
   * Contextual information about the PhotoPicker's exit state.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  contextRecoveryInfo: photoAccessHelper.ContextRecoveryInfo;

  /**
   * M?oving photo badge states for the selected media files in the gallery.
   * When isMovingPhotoBadgeShown is true, movingPhotoBadgeStates contains the moving photo states;
   * otherwise, it is empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  movingPhotoBadgeStates: Array<photoAccessHelper.MovingPhotoBadgeStateType>;
}

/**
 * DataType represents the type of the data set to picker component
 *
 * @enum { int } DataType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum DataType {
  /**
   * DataType: set selected uris to picker component, the data should be a array of uri
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SET_SELECTED_URIS = 1,

  /**
   * SET_ALBUM_URI. set selected album uri to picker component
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SET_ALBUM_URI = 2,

  /**
   * SET_SELECTED_INFO. Set selected information to picker component.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SET_SELECTED_INFO = 3,

  /**
   * SET_BADGE_CONFIGS. Set badge configs to picker component.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SET_BADGE_CONFIGS = 4,

  /**
   * SET_ITEM_CLICK_RESULT. Result of the click, which is of the ClickResult type.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SET_ITEM_CLICK_RESULT = 5
}

/**
 * ItemType. include CAMERA and THUMBNAIL
 *
 * @enum { int } ItemType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ItemType {
  /**
   * THUMBNAIL. photos or videos item
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  THUMBNAIL = 0,

  /**
   * CAMERA. camera item
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CAMERA = 1
}

/**
 * ClickType. include SELECTED and DESELECTED
 *
 * @enum { int } ClickType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ClickType {
  /**
   * SELECTED. click to select photos or videos, if click camera item, the clickType is SELECTED.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SELECTED = 0,

  /**
   * DESELECTED. click to deselect photos or videos
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DESELECTED = 1
}

/**
 * PickerOrientation. include VERTICAL and HORIZONTAL
 *
 * @enum { int } PickerOrientation
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum PickerOrientation {
  /**
   * VERTICAL. vertical display
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  VERTICAL = 0,

  /**
   * HORIZONTAL. horizontal display
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  HORIZONTAL = 1
}

/**
 * SelectMode. include SINGLE_SELECT and MULTI_SELECT
 *
 * @enum { int } SelectMode
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum SelectMode {
  /**
   * SINGLE_SELECT. single select
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SINGLE_SELECT = 0,

  /**
   * MULTI_SELECT. multi select
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MULTI_SELECT = 1
}

/**
 * PickerColorMode. include AUTO, LIGHT and DARK
 *
 * @enum { int } PickerColorMode
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum PickerColorMode {
  /**
   * AUTO. follow system color
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  AUTO = 0,

  /**
   * LIGHT. light color
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  LIGHT = 1,

  /**
   * DARK. dark color
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  DARK = 2
}

/**
 * ReminderMode, include NONE, TOAST and MASK
 *
 * @enum { int } ReminderMode
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ReminderMode {
  /**
   * NONE. no need to remind
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  NONE = 0,

  /**
   * TOAST. remind by toast
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TOAST = 1,

  /**
   * MASK. remind by mask
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  MASK = 2
}

/**
 * MaxCountType. include TOTAL_MAX_COUNT, PHOTO_MAX_COUNT and VIDEO_MAX_COUNT
 *
 * @enum { int } MaxCountType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum MaxCountType {
  /**
   * TOTAL_MAX_COUNT. total max count
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  TOTAL_MAX_COUNT = 0,

  /**
   * PHOTO_MAX_COUNT. photo max count
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PHOTO_MAX_COUNT = 1,

  /**
   * VIDEO_MAX_COUNT. video max count
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  VIDEO_MAX_COUNT = 2
}

/**
 * PhotoBrowserRange. include ALL and SELECTED_ONLY
 *
 * @enum { int } PhotoBrowserRange
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum PhotoBrowserRange {
  /**
   * ALL. all photos or vedios
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ALL = 0,

  /**
   * SELECTED_ONLY. only selected photos or vedios
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SELECTED_ONLY = 1
}

/**
 * PhotoBrowserUIElement. include CHECKBOX and BACK_BUTTON
 *
 * @enum { int } PhotoBrowserUIElement
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum PhotoBrowserUIElement {
  /**
   * CHECKBOX. checkbox
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  CHECKBOX = 0,

  /**
   * BACK_BUTTON. back button
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BACK_BUTTON = 1
}

/**
 * VideoPlayerState. include PLAYING, PAUSED, STOPPED, SEEK_START and SEEK_FINISH
 *
 * @enum { int } VideoPlayerState
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum VideoPlayerState {
  /**
   * PLAYING. video is playing
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PLAYING = 0,

  /**
   * PAUSED. video is paused
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  PAUSED = 1,

  /**
   * STOPPED. video is stopped
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  STOPPED = 2,

  /**
   * SEEK_START. seek drag is start
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SEEK_START = 3,

  /**
   * SEEK_FINISH. seek drag is finish
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SEEK_FINISH = 4
}

/**
 * Enumeration type of save mode.
 *
 * @enum { int } SaveMode
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum SaveMode {
  /**
   * Save as a new photo/video.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SAVE_AS = 0,

  /**
   * Overwrite and save.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  OVERWRITE = 1
}

/**
 * Enumerates the aspect ratios of the grid item display, including 1:1 and the original image's aspect ratio.
 *
 * @enum { int } Grid item display aspect ratio.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum ItemDisplayRatio {
  /**
   * Square ratio item
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  SQUARE_RATIO = 0,

  /**
   * original size ratio item
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  ORIGINAL_SIZE_RATIO = 1
}

/**
 * BadgeType.
 *
 * @enum { int } BadgeType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export declare enum BadgeType {
  /**
   * BADGE_UPLOADED. Asset uploaded.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @since 26.0.0 static
   */
  BADGE_UPLOADED = 0
}

/**
 * The callback of onSelected event
 * @typedef { function }
 * @param { string } uri
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type SelectCallback = (uri: string) => void;

/**
 * The callback of onDeSelected event
 * @typedef { function }
 * @param { string } uri
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type DeSelectCallback = (uri: string) => void;

/**
 * The callback of itemClicked event
 * @typedef { function }
 * @param { ItemInfo } itemInfo
 * @param { ClickType } clickType
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ItemClickedCallback = (itemInfo: ItemInfo, clickType: ClickType) => boolean;

/**
 * The callback of enterPhotoBrowser event
 * @typedef { function }
 * @param { PhotoBrowserInfo } photoBrowserInfo
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type EnterPhotoBrowserCallback = (photoBrowserInfo: PhotoBrowserInfo) => boolean;

/**
 * The callback of exitPhotoBrowser event
 * @typedef { function }
 * @param { PhotoBrowserInfo } photoBrowserInfo
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 staticonly
 */
export type ExitPhotoBrowserCallback = (photoBrowserInfo: PhotoBrowserInfo) => boolean;

/**
 * The callback of pickerControllerReady event
 * @typedef { function }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type PickerControllerReadyCallback = () => void;

/**
 * The callback of onSelectedItemsDeleted event
 * @typedef { function }
 * @param { BaseItemInfo[] } baseItemInfos
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ItemsDeletedCallback = (baseItemInfos: BaseItemInfo[]) => void;

/**
 * The callback of onPhotoBrowserChanged event
 * @typedef { function }
 * @param { BaseItemInfo } browserItemInfo
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type PhotoBrowserChangedCallback = (browserItemInfo: BaseItemInfo) => boolean;

/**
 * The callback of onExceedMaxSelected event
 * @typedef { function }
 * @param { MaxCountType } exceedMaxCountType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ExceedMaxSelectedCallback = (exceedMaxCountType: MaxCountType) => void;

/**
 * The callback of onCurrentAlbumDeleted event
 * @typedef { function }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type CurrentAlbumDeletedCallback = () => void;

/**
 * The callback of onVideoPlayStateChanged event
 * @typedef { function }
 * @param { VideoPlayerState } state - Indicates the video player state.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type VideoPlayStateChangedCallback = (state: VideoPlayerState) => void;

/**
 * The callback of onPhotoBrowserZoom event
 *
 * @param { double } scale
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.1.0 static
 */
export type PhotoBrowserZoomCallback = (scale: double) => void;

/**
 * Callback to be invoked when the moving photo effect of the PhotoPickerComponent is enabled or disabled.
 * @typedef { function }
 * @param { string } uri
 * @param { photoAccessHelper.MovingPhotoBadgeStateType } state
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type MovingPhotoBadgeStateChangedCallback =
  (uri: string, state: photoAccessHelper.MovingPhotoBadgeStateType) => void;

/**
 * Callback to be invoked when the user stops scrolling at the beginning of the grid content.
 * @typedef { function }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ScrollStopAtStartCallback = () => void;

/**
 * Callback to be invoked when the user stops scrolling at the end of the grid content.
 * @typedef { function }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ScrollStopAtEndCallback = () => void;

/**
 * Callback to be invoked when an item in a PhotoPickerComponent is clicked.
 * @typedef { function }
 * @param { ItemInfo } itemInfo
 * @param { ClickType } clickType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ItemClickedNotifyCallback = (itemInfo: ItemInfo, clickType: ClickType) => void;

/**
 * Callback to be invoked when a user pinches a grid component.
 * @typedef { function }
 * @param { photoAccessHelper.GridLevel } gridLevel
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type PinchGridSwitchedCallback = (gridLevel: photoAccessHelper.GridLevel) => void;

/**
 * Callback to be invoked when a grid view switches to the photo browser page or the photo browser page is switched.
 * @typedef { function }
 * @param { BaseItemInfo } targetPhotoInfo
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type PhotoBrowserChangeStartCallback = (targetPhotoInfo: BaseItemInfo) => void;

/**
 * Callback to be invoked when an error occurs in the PhotoPickerComponent.
 * @typedef { function }
 * @param { PickerError } pickerError
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 26.0.0 static
 */
export type ErrorCallback = (pickerError: PickerError) => void;