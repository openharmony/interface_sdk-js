'use static'
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
import { Component, Margin, Curve, ICurve, Length, BorderRadiuses, LocalizedBorderRadiuses }
    from '@ohos.arkui.component';
import { Observed, ObjectLink } from './arkui/stateManagement/decorator';
import { Builder } from './arkui/component/builder';

/**
 * Declare struct PhotoPickerComponent
 *
 * @struct { PhotoPickerComponent }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
@Component
export declare struct PhotoPickerComponent {
    /**
     * PickerOptions
     *
     * @type { ?PickerOptions }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    pickerOptions?: PickerOptions;

    /**
     * Callback when select photos or videos
     *
     * @type { ?SelectCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onSelect?: SelectCallback;

    /**
     * Callback when Deselect photos or videos
     *
     * @type { ?DeSelectCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onDeselect?: DeSelectCallback;

    /**
     * Callback when click item. include click camera item and thumbnail item, will return itemInfo
     *
     * @type { ?ItemClickedCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onItemClicked?: ItemClickedCallback;

    /**
     * Callback when enter photo browser, will return photoBrowserInfo
     *
     * @type { ?EnterPhotoBrowserCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onEnterPhotoBrowser?: EnterPhotoBrowserCallback;

    /**
     * Callback when exit photo browser, will return photoBrowserInfo
     *
     * @type { ?ExitPhotoBrowserCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onExitPhotoBrowser?: ExitPhotoBrowserCallback;

    /**
     * Callback when pickerController is ready.
     * Set data to picker component by pickerController is supported after pickerController is ready
     *
     * @type { ?PickerControllerReadyCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onPickerControllerReady?: PickerControllerReadyCallback;

    /**
     * Callback when photo browser change, will return browserItemInfo
     *
     * @type { ?PhotoBrowserChangedCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onPhotoBrowserChanged?: PhotoBrowserChangedCallback;

    /**
     * Callback when selected items are deleted
     *
     * @type { ?ItemsDeletedCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onSelectedItemsDeleted?: ItemsDeletedCallback;

    /**
     * Callback when exceed max selected
     *
     * @type { ?ExceedMaxSelectedCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onExceedMaxSelected?: ExceedMaxSelectedCallback;

    /**
     * Callback when the current album is deleted
     *
     * @type { ?CurrentAlbumDeletedCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onCurrentAlbumDeleted?: CurrentAlbumDeletedCallback;

    /**
     * Callback when the video play state changed
     *
     * @type { ?VideoPlayStateChangedCallback }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    onVideoPlayStateChanged?: VideoPlayStateChangedCallback;

    /**
     * PickerController
     *
     * @type { PickerController }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    @ObjectLink
    pickerController: PickerController;

    /**
     * Build function of PhotoPickerComponent
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 staticonly
     */
    @Builder
    build(): void;
}

/**
 * The callback of onSelected event
 *
 * @typedef { function } SelectCallback
 * @param { string } uri
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type SelectCallback = (uri: string) => void;

/**
 * The callback of onDeSelected event
 *
 * @typedef { function } DeSelectCallback
 * @param { string } uri
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type DeSelectCallback = (uri: string) => void;

/**
 * The callback of itemClicked event
 *
 * @typedef { function } ItemClickedCallback
 * @param { ItemInfo } itemInfo
 * @param { ClickType } clickType
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type ItemClickedCallback = (itemInfo: ItemInfo, clickType: ClickType) => boolean;

/**
 * The callback of enterPhotoBrowser event
 *
 * @typedef { function } EnterPhotoBrowserCallback
 * @param { PhotoBrowserInfo } photoBrowserInfo
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type EnterPhotoBrowserCallback = (photoBrowserInfo: PhotoBrowserInfo) => boolean;

/**
 * The callback of exitPhotoBrowser event
 *
 * @typedef { function } ExitPhotoBrowserCallback
 * @param { PhotoBrowserInfo } photoBrowserInfo
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type ExitPhotoBrowserCallback = (photoBrowserInfo: PhotoBrowserInfo) => boolean;

/**
 * The callback of pickerControllerReady event
 *
 * @typedef { function } PickerControllerReadyCallback
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type PickerControllerReadyCallback = () => void;

/**
 * The callback of onSelectedItemsDeleted event
 *
 * @typedef { function } ItemsDeletedCallback
 * @param { BaseItemInfo[] } baseItemInfos
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type ItemsDeletedCallback = (baseItemInfos: BaseItemInfo[]) => void;

/**
 * The callback of onPhotoBrowserChanged event
 *
 * @typedef { function } PhotoBrowserChangedCallback
 * @param { BaseItemInfo } browserItemInfo
 * @returns { boolean }
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type PhotoBrowserChangedCallback = (browserItemInfo: BaseItemInfo) => boolean;

/**
 * The callback of onExceedMaxSelected event
 *
 * @typedef { function } ItemsDeletedCallback
 * @param { MaxCountType } exceedMaxCountType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type ExceedMaxSelectedCallback = (exceedMaxCountType: MaxCountType) => void;

/**
 * The callback of onCurrentAlbumDeleted event
 *
 * @typedef { function } CurrentAlbumDeletedCallback
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type CurrentAlbumDeletedCallback = () => void;

/**
 * The callback of onVideoPlayStateChanged event
 *
 * @typedef { function } VideoPlayStateChangedCallback
 * @param { VideoPlayerState } state - Indicates the video player state.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export type VideoPlayStateChangedCallback = (state: VideoPlayerState) => void;

/**
 * The class for PickerController
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
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
     * @since 23 static
     */
    public setData(dataType: DataType, data: Object): void;

    /**
     * Set max select count to picker component, include max_total_count, max_photo_count and max_video_count.
     *
     * @param { MaxSelected } maxSelected - max select count data
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public setMaxSelected(maxSelected: MaxSelected): void;

    /**
     * Set photo browser item to picker component.
     *
     * @param { string } uri - specify image uri for photo browsing
     * @param { PhotoBrowserRange } [photoBrowserRange] - photo browser slide range
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public setPhotoBrowserItem(uri: string, photoBrowserRange?: PhotoBrowserRange): void;

    /**
     * Exit photo browser.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public exitPhotoBrowser(): void;

    /**
     * Sets whether other elements on the photo browser page are visible.
     *
     * @param { PhotoBrowserUIElement[] } elements - other elements on the photo browser page
     * @param { boolean } isVisible - visible or not
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public setPhotoBrowserUIElementVisibility(elements: PhotoBrowserUIElement[], isVisible: boolean): void;

    /**
     * Display the photo after edit.
     *
     * @param { string } originalUri - Original uri
     * @param { string } newUri - New uri after replacement
     * @param { Promise<void> } callback - Returns void
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public replacePhotoPickerPreview(originalUri: string, newUri: string, callback: Promise<void>): void;

    /**
     * Save the photo assets of uris.
     *
     * @param { string[] } trustedUris - Uris need to be saved
     * @param { Promise<string[]> } callback - Returns the uri list
     * @param { photoAccessHelper.PhotoCreationConfig[] } [configs] - Photo asset creation configs
     * @param { SaveMode } [saveMode] - Mode of save
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public saveTrustedPhotoAssets(trustedUris: string[], callback: Promise<string[]>,
    configs?: photoAccessHelper.PhotoCreationConfig[], saveMode?: SaveMode): void;
}

/**
 * PickerOptions Object
 *
 * @extends photoAccessHelper.BaseSelectOptions
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare class PickerOptions extends photoAccessHelper.BaseSelectOptions {
    /**
     * Support set checkBox color
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public checkBoxColor?: string;

    /**
     * Support set backgroundColor
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public backgroundColor?: string;

    /**
     * Support set gridMargin
     *
     * @type { ?Margin }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public gridMargin?: Margin;

    /**
     * Support set photoBrowserMargin
     *
     * @type { ?Margin }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public photoBrowserMargin?: Margin;

    /**
     * Support repeat select
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public isRepeatSelectSupported?: boolean;

    /**
     * Support to set checkbox text color
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public checkboxTextColor?: string;

    /**
     * Support to set photo browser background color mode
     *
     * @type { ?PickerColorMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public photoBrowserBackgroundColorMode?: PickerColorMode;

    /**
     * Support to set max select number remind mode.
     *
     * @type { ?ReminderMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public maxSelectedReminderMode?: ReminderMode;

    /**
     * Support to set display orientation
     *
     * @type { ?PickerOrientation }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public orientation?: PickerOrientation;

    /**
     * Support to set select mode
     *
     * @type { ?SelectMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public selectMode?: SelectMode;

    /**
     * Support to set max photo select number
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public maxPhotoSelectNumber?: int;

    /**
     * Support to set max video select number
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public maxVideoSelectNumber?: int;

    /**
     * Support to set sliding selection
     *
     * @type { ?boolean }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public isSlidingSelectionSupported?: boolean;

    /**
     * Support to set photo browser checkbox position
     *
     * @type { ?[double, double] }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public photoBrowserCheckboxPosition?: [
        double,
        double
    ];

    /**
     * Single-line display mode for the PhotoPickerComponent.
     *
     * @type { ?SingleLineConfig }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public singleLineConfig?: SingleLineConfig;

    /**
     * Support to set UIComponent color mode.
     *
     * @type { ?PickerColorMode }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public uiComponentColorMode?: PickerColorMode;
}
/**
 * BaseItemInfo
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare class BaseItemInfo {
    /**
     * Uri. if the itemType is CAMERA, it will be null
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public uri?: string;

    /**
     * MimeType. if the itemType is CAMERA, it will be null
     *
     * @type { ?string }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public mimeType?: string;

    /**
     * Width. if the itemType is CAMERA, it will be null
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public width?: int;

    /**
     * Height. if the itemType is CAMERA, it will be null
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public height?: int;

    /**
     * Size. if the itemType is CAMERA, it will be null
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public size?: int;

    /**
     * Duration. if the itemType is CAMERA, it will be null; if photos, return -1
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public duration?: int;
}

/**
 * ItemInfo
 *
 * @extends BaseItemInfo
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare class ItemInfo extends BaseItemInfo {
    /**
     * itemType. include CAMERA and THUMBNAIL.
     *
     * @type { ?ItemType }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public itemType?: ItemType;
}

/**
 * PhotoBrowserInfo
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare class PhotoBrowserInfo {
    /**
     * AnimatorParams. include duration and curve
     *
     * @type { ?AnimatorParams }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public animatorParams?: AnimatorParams;
}
/**
 * AnimatorParams
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare class AnimatorParams {
    /**
     * Animate duration
     *
     * @type { ?int }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public duration?: int;

    /**
     * Animate curve
     *
     * @type { ?(Curve | ICurve | string) }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public curve?: Curve | ICurve | string;
}

/**
 * MaxSelected
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare class MaxSelected {
    /**
     * data. support to set max_total_count, max_photo_count and max_video_count.
     *
     * @type { ?Map<MaxCountType, int> }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public data?: Map<MaxCountType, int>;
}

/**
 * Single-Line display mode.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare class SingleLineConfig {
    /**
     * item display ratio
     *
     * @type { ?ItemDisplayRatio }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public itemDisplayRatio?: ItemDisplayRatio;

    /**
     * Rounded corner radius of grid items.
     *
     * @type { ?(Length | BorderRadiuses | LocalizedBorderRadiuses) }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public itemBorderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;

    /**
     * item gap
     *
     * @type { ?Length }
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    public itemGap?: Length;
}

/**
 * DataType represents the type of the data set to picker component
 *
 * @enum { int } DataType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum DataType {
    /**
     * DataType: set selected uris to picker component, the data should be a array of uri
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    SET_SELECTED_URIS = 1,

    /**
     * SET_ALBUM_URI. set selected album uri to picker component
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    SET_ALBUM_URI = 2
}

/**
 * ItemType. include CAMERA and THUMBNAIL
 *
 * @enum { int } ItemType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ItemType {
    /**
     * THUMBNAIL. photos or videos item
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    THUMBNAIL = 0,

    /**
     * CAMERA. camera item
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    CAMERA = 1
}

/**
 * ClickType. include SELECTED and DESELECTED
 *
 * @enum { int } ClickType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ClickType {
    /**
     * SELECTED. click to select photos or videos, if click camera item, the clickType is SELECTED.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    SELECTED = 0,

    /**
     * DESELECTED. click to deselect photos or videos
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    DESELECTED = 1
}

/**
 * PickerOrientation. include VERTICAL and HORIZONTAL
 *
 * @enum { int } PickerOrientation
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PickerOrientation {
    /**
     * VERTICAL. vertical display
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    VERTICAL = 0,

    /**
     * HORIZONTAL. horizontal display
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    HORIZONTAL = 1
}

/**
 * SelectMode. include SINGLE_SELECT and MULTI_SELECT
 *
 * @enum { int } SelectMode
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SelectMode {
    /**
     * SINGLE_SELECT. single select
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    SINGLE_SELECT = 0,

    /**
     * MULTI_SELECT. multi select
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    MULTI_SELECT = 1
}

/**
 * PickerColorMode. include AUTO, LIGHT and DARK
 *
 * @enum { int } PickerColorMode
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PickerColorMode {
    /**
     * AUTO. follow system color
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    AUTO = 0,

    /**
     * LIGHT. light color
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    LIGHT = 1,

    /**
     * DARK. dark color
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    DARK = 2
}

/**
 * ReminderMode, include NONE, TOAST and MASK
 *
 * @enum { int } ReminderMode
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ReminderMode {
    /**
     * NONE. no need to remind
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    NONE = 0,

    /**
     * TOAST. remind by toast
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    TOAST = 1,

    /**
     * MASK. remind by mask
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    MASK = 2
}

/**
 * MaxCountType. include TOTAL_MAX_COUNT, PHOTO_MAX_COUNT and VIDEO_MAX_COUNT
 *
 * @enum { int } MaxCountType
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum MaxCountType {
    /**
     * TOTAL_MAX_COUNT. total max count
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    TOTAL_MAX_COUNT = 0,

    /**
     * PHOTO_MAX_COUNT. photo max count
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    PHOTO_MAX_COUNT = 1,

    /**
     * VIDEO_MAX_COUNT. video max count
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    VIDEO_MAX_COUNT = 2
}

/**
 * PhotoBrowserRange. include ALL and SELECTED_ONLY
 *
 * @enum { int } PhotoBrowserRange
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PhotoBrowserRange {
    /**
     * ALL. all photos or vedios
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    ALL = 0,

    /**
     * SELECTED_ONLY. only selected photos or vedios
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    SELECTED_ONLY = 1
}

/**
 * PhotoBrowserUIElement. include CHECKBOX and BACK_BUTTON
 *
 * @enum { int } PhotoBrowserUIElement
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum PhotoBrowserUIElement {
    /**
     * CHECKBOX. checkbox
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    CHECKBOX = 0,

    /**
     * BACK_BUTTON. back button
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    BACK_BUTTON = 1
}

/**
 * Enumeration type of save mode.
 *
 * @enum { int } SaveMode
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum SaveMode {
    /**
     * Save as a new photo/video.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    SAVE_AS = 0,

    /**
     * Overwrite and save.
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    OVERWRITE = 1
}

/**
 * VideoPlayerState. include PLAYING, PAUSED, STOPPED, SEEK_START and SEEK_FINISH
 *
 * @enum { int } VideoPlayerState
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum VideoPlayerState {
    /**
     * PLAYING. video is playing
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    PLAYING = 0,

    /**
     * PAUSED. video is paused
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    PAUSED = 1,

    /**
     * STOPPED. video is stopped
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    STOPPED = 2,

    /**
     * SEEK_START. seek drag is start
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    SEEK_START = 3,

    /**
     * SEEK_FINISH. seek drag is finish
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    SEEK_FINISH = 4
}

/**
 * Enumerates the aspect ratios of the grid item display, including 1:1 and the original image's aspect ratio.
 *
 * @enum { int } Grid item display aspect ratio.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @since 23 static
 */
export declare enum ItemDisplayRatio {
    /**
     * Square ratio item
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    SQUARE_RATIO = 0,

    /**
     * original size ratio item
     *
     * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
     * @stagemodelonly
     * @since 23 static
     */
    ORIGINAL_SIZE_RATIO = 1
}
