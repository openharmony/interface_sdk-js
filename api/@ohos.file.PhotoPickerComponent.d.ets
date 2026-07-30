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
 * You can embed the **PhotoPickerComponent** in your application's layout to let users pick images or videos without 
 * requiring extra permissions. Once the users have made their selection, your application gets read-only access to the 
 * chosen images or videos.
 * 
 * Note that **PhotoPickerComponent** does not support nesting. Additionally, prevent overlaying components with the 
 * **overlay** attribute or of higher levels on top it, as this will prevent it from receiving gesture events.
 * 
 * Once embedded, users can directly select images or videos within the **PhotoPickerComponent**.
 * 
 * > **NOTE**
 * >
 * > - This component does not support [same-layer rendering](docroot://web/web-same-layer.md).
 * 
 * ###### Attributes
 * 
 * The [universal attributes]{@link common} are supported.
 * 
 * @file PhotoPickerComponent
 * @kit MediaLibraryKit
 */

import photoAccessHelper from '@ohos.file.photoAccessHelper';
import { AsyncCallback } from '@ohos.base';

/**
 * PhotoPickerComponent({ pickerOptions?: PickerOptions, onSelect?: (uri: string) => void, onDeselect?: (uri: string) =>
 * void, onItemClicked?: (itemInfo: ItemInfo, clickType: ClickType) => boolean, onItemClickedNotify?:
 * ItemClickedNotifyCallback, onEnterPhotoBrowser?: (photoBrowserInfo: PhotoBrowserInfo) => boolean, onExitPhotoBrowser?
 * : (photoBrowserInfo: PhotoBrowserInfo) => boolean, onPickerControllerReady?: () => void, onPhotoBrowserChanged?: (
 * browserItemInfo: BaseItemInfo) => boolean, onSelectedItemsDeleted?: ItemsDeletedCallback, onExceedMaxSelected?:
 * ExceedMaxSelectedCallback, onCurrentAlbumDeleted?: CurrentAlbumDeletedCallback, onVideoPlayStateChanged?:
 * videoPlayStateChangedCallback, pickerController: PickerController })
 *
 * Allows the application to access images or videos in the user directory without any permission.
 *
 * > **NOTE**
 * >
 * > If the **PhotoPickerComponent** is used with the **Tabs** component, the swipe gestures of the **Tabs** component
 * > conflict with those of the photo browser page.
 * >
 * > To prevent this problem, you can disable the swipe operation for the **Tabs** component in
 * > **onEnterPhotoBrowser()** and enable it in **onExitPhotoBrowser()**. This conflict will be resolved in later
 * > versions.
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
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  pickerOptions?: PickerOptions;

  /**
   * Callback when select photos or videos
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onSelect?: (uri: string) => void;

  /**
   * Callback when Deselect photos or videos
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onDeselect?: (uri: string) => void;

  /**
   * Callback when click item. include click camera item and thumbnail item, will return itemInfo
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onItemClicked?: (itemInfo: ItemInfo, clickType: ClickType) => boolean;

  /**
   * Callback when enter photo browser, will return photoBrowserInfo
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onEnterPhotoBrowser?: (photoBrowserInfo: PhotoBrowserInfo) => boolean;

  /**
   * Callback when exit photo browser, will return photoBrowserInfo
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onExitPhotoBrowser?: (photoBrowserInfo: PhotoBrowserInfo) => boolean;

  /**
   * Callback when pickerController is ready.
   * Set data to picker component by pickerController is supported after pickerController is ready
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onPickerControllerReady?: () => void;

  /**
   * Callback when photo browser change, will return browserItemInfo
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  onPhotoBrowserChanged?: (browserItemInfo: BaseItemInfo) => boolean;

  /**
   * Callback when selected items are deleted
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  onSelectedItemsDeleted?: ItemsDeletedCallback;

  /**
   * Callback when exceed max selected
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  onExceedMaxSelected?: ExceedMaxSelectedCallback;

  /**
   * Callback when the current album is deleted
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  onCurrentAlbumDeleted?: CurrentAlbumDeletedCallback;

  /**
   * Callback when the video play state changed
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  onVideoPlayStateChanged?: videoPlayStateChangedCallback;

  /**
   * Callback when moving photo badge state changed
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  onMovingPhotoBadgeStateChanged?: MovingPhotoBadgeStateChangedCallback;

  /**
   * Callback when photo browser change start (upon user swipe release), will return targetPhotoInfo
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  onPhotoBrowserChangeStart?: PhotoBrowserChangeStartCallback;

  /**
   * Callback when click item. Includes camera items and thumbnail items. Returns itemInfo in the callback.
   * Must be used in conjunction with the addData method.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  onItemClickedNotify?: ItemClickedNotifyCallback;

  /**
   * Callback when the grid stops scrolling at the starting position.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  onScrollStopAtStart?: ScrollStopAtStartCallback;

  /**
   * Callback when the grid stops scrolling at the ending position.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  onScrollStopAtEnd?: ScrollStopAtEndCallback;

  /**
   * Callback when the grid's level is switched via pinch gesture.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  onPinchGridSwitched?: PinchGridSwitchedCallback;

  /**
   * Callback when an error occurs in the PhotoPickerComponent.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  onError?: ErrorCallback;

  /**
   * Callback when the photo picker restores the previously grid state.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onPickerRecovery?: PickerRecoveryCallback;

  /**
   * Callback when the zoom scale changes during large image browsing.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  onPhotoBrowserZoom?: PhotoBrowserZoomCallback;

  /**
   * Callback when an unselectable item is clicked.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  onUnselectableItemClicked?: UnselectableItemClickedCallback;

  /**
   * PickerController
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  @ObjectLink
  pickerController: PickerController;

  /**
   * Build function of PhotoPickerComponent
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  @Builder
  build(): void;
}

/**
 * Defines an instance used to send data to the **PhotoPickerComponent**.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
@Observed
export declare class PickerController {
  /**
   * Sends data of the specified type to the **PhotoPickerComponent**.
   *
   * @param { DataType } dataType - Type of the data to send.
   * @param { Object } data - Data to send.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setData(dataType: DataType, data: Object): void;

  /**
   * Sends additional configuration data to the **PhotoPickerComponent**. The [DataType]{@link DataType} parameter
   * identifies the type of data to send. In versions earlier than API version 23, only the **SET_BADGE_CONFIGS** type
   * is supported.
   *
   * @param { DataType } dataType - Type of additional configuration data to send.
   * @param { Object } data - Additional configuration data to send.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  addData(dataType: DataType, data: Object): void;

  /**
   * Sends removal configuration data to the **PhotoPickerComponent**. The [DataType]{@link DataType} parameter
   * identifies the type of data to send, and only the **SET_BADGE_CONFIGS** type is supported currently.
   *
   * @param { DataType } dataType - Type of removal configuration data to send.
   * @param { Object } data - Removal configuration data to send.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  deleteData(dataType: DataType, data: Object): void;

  /**
   * Sets the maximum number of images, videos, or images and videos that can be selected in real time.
   *
   * @param { MaxSelected } maxSelected - Maximum number of media assets that can be selected at a time.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setMaxSelected(maxSelected: MaxSelected): void;

  /**
   * Switches from the **PhotoPickerComponent** to the photo browser page or from the photo browser page to the image to
   * be viewed.
   *
   * @param { string } uri - URI of the image to view. Only the images selected by the user are supported.
   * @param { PhotoBrowserRange } photoBrowserRange - View range on the photo browser page. The value can be **ALL** or
   *     **SELECTED_ONLY**. The default value is **ALL**, which means to view all images and videos.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  setPhotoBrowserItem(uri: string, photoBrowserRange?: PhotoBrowserRange): void;

  /**
   * Exits the photo browser page.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  exitPhotoBrowser(): void;

  /**
   * Sets whether other UI elements are visible on the photo browser page. By default, other UI elements are visible.
   *
   * @param { Array<PhotoBrowserUIElement> } elements - Other UI elements on the photo browser page.
   * @param { boolean } isVisible - Whether the specified elements are visible. **true**: visible; **false**: not
   *     visible. The default value is **false**.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  setPhotoBrowserUIElementVisibility(elements: Array<PhotoBrowserUIElement>, isVisible: boolean): void;

  /**
   * Replaces the image selected by the user in the **PhotoPickerComponent** with the image edited by the application.
   *
   * @param { string } originalUri - URI of the original image, which will be replaced.
   * @param { string } newUri - URI of the new image. The new image is temporarily stored in the application sandbox
   *     path. Therefore, this URI specifies a directory in the application sandbox path.
   * @param { AsyncCallback<void> } callback - Callback invoked when image replacement is complete.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 15 dynamic
   */
  replacePhotoPickerPreview(originalUri: string, newUri: string, callback: AsyncCallback<void>): void;

  /**
   * Saves files in a URI list. Generally, this API is used together with
   * [replacePhotoPickerPreview]{@link PickerController#replacePhotoPickerPreview} to save the new images or videos in
   * the application sandbox path to Gallery.
   *
   * @param { Array<string> } trustedUris - URIs of the images or videos in the application sandbox path. Generally,
   *     **trustedUris** comes from **newUri** of new images generated by
   *     [replacePhotoPickerPreview]{@link PickerController#replacePhotoPickerPreview}.
   * @param { AsyncCallback<Array<string>> } callback - URIs of the new files in Gallery.
   * @param { Array<PhotoCreationConfig> } [configs] - Configuration parameters corresponding to the original files.
   *     <br>**NOTE**
   *     <br>1. If a **subtype** option is passed, the configuration does not take effect. Only **DEFAULT** images can
   *     be saved.
   *     <br>By default, the values of **title**, **fileNameExtension**, and **photoType** of **mediaItem**
   *     corresponding to **trustedUris** are used, and the value of **subtype** is fixed to **DEFAULT**.
   *     <br>2. This parameter does not take effect when [SaveMode]{@link SaveMode} is set to **OVERWRITE**.
   * @param { SaveMode } [saveMode] - Mode for saving the files.
   *     <br>By default, the **SAVE_AS** mode is used to save the files as new files.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 15 dynamic
   */
  saveTrustedPhotoAssets(trustedUris: Array<string>, callback: AsyncCallback<Array<string>>,
    configs?: Array<photoAccessHelper.PhotoCreationConfig>, saveMode?: SaveMode): void;

  /**
   * Saves files in a URI list. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > This API is usually used together with
   * > [replacePhotoPickerPreview]{@link PickerController#replacePhotoPickerPreview} to save the new images or videos in
   * > the application sandbox path to Gallery.
   *
   * @param { Array<string> } trustedUris - URIs of the images or videos in the application sandbox path.
   *     <br>**trustedUris** is usually the **newUri** of the images or videos in the application sandbox path that are
   *     successfully replaced by [replacePhotoPickerPreview]{@link PickerController#replacePhotoPickerPreview}.
   * @param { Array<photoAccessHelper.CreationSetting> } [settings] - Configuration parameters corresponding to the
   *     original files.
   *     <br>By default, the **title**, **fileNameExtension**, and **photoType** values of **mediaItem** corresponding
   *     to **trustedUris** are used.
   * @param { SaveMode } [saveMode] - Mode for saving images or videos.
   *     <br>By default, the **SAVE_AS** mode is used to save the files as new files.
   * @returns { Promise<Array<string>> } Promise used to return the URI of the new asset.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  saveTrustedPhotoAssetsEx(trustedUris: Array<string>,settings?: Array<photoAccessHelper.CreationSetting>,
    saveMode?: SaveMode): Promise<Array<string>>;

  /**
   * Updates the attributes of the **PhotoPickerComponent**. This API uses a promise to return the result.
   *
   * @param { UpdatablePickerConfigs } updateConfig - New attributes, which are a subset of
   *     [PickerOptions]{@link PickerOptions}.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  updatePickerOptions(updateConfig: UpdatablePickerConfigs): Promise<void>;

  /**
   * Sets the state of the moving photo on the photo browser page. This API uses a promise to return the result.
   *
   * This parameter takes effect only on the photo browser page. **NOT_MOVING_PHOTO** cannot be set.
   *
   * @param { photoAccessHelper.MovingPhotoBadgeStateType } movingPhotoState - State of the moving photo on the photo
   *     browser page.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 23800151 - Scene parameters validate failed, possible causes:
   *     1. An invalid enumeration value was passed. Only MOVING_PHOTO_ENABLED and
   *     MOVING_PHOTO_DISABLED are supported for configuration;
   * @throws { BusinessError } 23800202 - Invalid call context. Possible causes:
   *     1. The API is called outside the photo browsing scenario.
   *     2. The API is called when isMovingPhotoBadgeShown is already set to true.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  setMovingPhotoState(movingPhotoState: photoAccessHelper.MovingPhotoBadgeStateType): Promise<void>;

  /**
   * This API is used by an application to obtain the complete data after a selection operation is completed on the
   * Picker page. The data can be used to restore the scene when the Picker is started next time.
   *
   * @returns { Promise<CompletedResult> } Promise used to return the information about the restored scene.
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  completed(): Promise<CompletedResult>;
}

/**
 * Describes the configuration of a Picker. It inherits from
 * [photoAccessHelper.BaseSelectOptions]{@link @ohos.file.photoAccessHelper:photoAccessHelper.BaseSelectOptions}.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class PickerOptions extends photoAccessHelper.BaseSelectOptions {
  /**
   * Background color of the check box.
   *
   * The value is an 8-digit hexadecimal color code. The first two digits indicate the transparency, and the last six
   * digits indicate the RGB color value.
   *
   * For example, '#FFFFFFFF' indicates a white opaque background, and '#80FF0000' indicates a semi-transparent red
   * background.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  checkBoxColor?: string;

  /**
   * Background color of the Picker grid page. The value is an 8-digit hexadecimal color code.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  backgroundColor?: string;

  /**
   * Whether a single image can be repeatedly selected. **true** if supported, **false** otherwise. The default value is
   * **false**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  isRepeatSelectSupported?: boolean;

  /**
   * Text color in the check box. The value is an 8-digit hexadecimal color code. (This parameter is supported since API
   * version 19. In earlier versions, the system defaults to white.)
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  checkboxTextColor?: string;

  /**
   * Background color of the photo browser page. The options are **AUTO**, **LIGHT**, and **DARK**. The default value is
   * **AUTO**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  photoBrowserBackgroundColorMode?: PickerColorMode;

  /**
   * Mode of the reminder when the number of selected items reaches the maximum. The options are **NONE**, **TOAST**,
   * and **MASK**. The default value **TOAST**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  maxSelectedReminderMode?: ReminderMode;

  /**
   * Sliding preview direction of the grid page. The options are **HORIZONTAL** and **VERTICAL**. The default value is
   * **VERTICAL**. (This parameter is supported since API version 20. In earlier versions, the system defaults to
   * vertical.)
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  orientation?: PickerOrientation;

  /**
   * Select mode, which can be **SINGLE_SELECT** or **MULTI_SELECT**. The default value is **MULTI_SELECT**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  selectMode?: SelectMode;

  /**
   * Maximum number of images that can be selected. The maximum value is **500**, which is limited by **MaxSelected**.
   * The default value is **500**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  maxPhotoSelectNumber?: number;

  /**
   * Maximum number of videos that can be selected. The maximum value is **500**, and it is restricted by the maximum
   * number of media files that can be selected in the system. The default value is **500**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  maxVideoSelectNumber?: number;

  /**
   * Whether to support multiple selections by sliding. **true**: yes; **false**: no. The default value is **false**.
   * This parameter is not available for repeat selection.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  isSlidingSelectionSupported?: boolean;

  /**
   * Position of the check box on the photo browser page. The first parameter specifies the offset in the X direction,
   * and the second parameter specifies the offset in the Y direction. The value range is [0, 1], which indicates the
   * offset (from 0% to 100%) to the upper-left corner of the component. The default value is [0, 0].
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  photoBrowserCheckboxPosition?: [number, number];

  /**
   * Margin of the component on a photo browser page.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  photoBrowserMargin?: Margin;

  /**
   * Margin of the component on a grid page.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  gridMargin?: Margin;

  /**
   * Single-line display mode of a grid page. In single-line mode, the component does not provide functions for viewing
   * a larger image. The component does not support callbacks related to large images, and the PickerController does not
   * support APIs related to large images, making API calls ineffective.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  singleLineConfig?: SingleLineConfig;

  /**
   * Picker color mode. Dark/Light color mode (excluding the background color) of other components on the Picker grid
   * page, including the search box, camera entry, safety tips for using Gallery, and recommendation bubble. This
   * attribute is usually used together with **backgroundColor**. The default value is **PickerColorMode.AUTO**, which
   * follows the system's dark/light color mode.
   *
   * When setting this attribute, avoid using **PickerColorMode.LIGHT** with a dark backgroundColor, as it may make
   * components or text hard to see. Avoid using **PickerColorMode.DARK** with a light backgroundColor for the same
   * reason.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  uiComponentColorMode?: PickerColorMode;

  /**
   * Space between the top of the component and the first row of the grid thumbnail. The default value is **0**, in vp.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  gridStartOffset?: number;

  /**
   * Space between the bottom of the component and the last row of the grid thumbnail. The default value is **0**, in
   * vp.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  gridEndOffset?: number;

  /**
   * Unique serial number used to distinguish different picker components. The default value is **-1**, indicating that
   * no distinction is made.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  pickerIndex?: number;

  /**
   * Array of information previously selected by the user, so that the PhotoPickerComponent identified by
   * **pickerIndex** can display the information.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  preselectedInfos?: Array<PreselectedInfo>;

  /**
   * Badge configuration. Currently, the **PhotoPickerComponent** supports only one type of badge. For details, see
   * [BadgeType]{@link BadgeType}.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  badgeConfig?: BadgeConfig;

  /**
   * Whether scrolling in the **PhotoPickerComponent** is enabled. The value **true** means that scrolling is not
   * blocked and the component responds to user scroll gestures. The value **false** means that scrolling is blocked and
   * the component does not respond to user scroll gestures.
   *
   * The default value is **true**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  isSlidingSupported?: boolean;

  /**
   * Scrolling effect when the Picker grid page reaches the edge.
   *
   * The default value is [EdgeEffect.Spring]{@link EdgeEffect}.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  edgeEffect?: EdgeEffect;

  /**
   * Used to display only the album content corresponding to the specified bundle name.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  appAlbumFilters?: Array<string>;

  /**
   * Background opacity of the picker. The value range is [0, 1]. **0** indicates completely transparent, and **1**
   * indicates completely opaque.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  backgroundOpacity?: number;

  /**
   * Information for restoring the PhotoPicker's state from the last exit.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  contextRecoveryInfo?: photoAccessHelper.ContextRecoveryInfo;
}

/**
 * Represents basic image and video information.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class BaseItemInfo {
  /**
   * URI of the image or video.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * **NOTE**
   *
   * If the resource is a burst shot photo, only the cover image of the burst shot photo group is returned.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  uri?: string;

  /**
   * MIME type of the image or video.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * You can determine the media type based on the prefix of the **mimeType** string. If the string starts with "image/"
   * , it indicates an image. If the string starts with "video/", it indicates a video. For details, see
   * [Identifying Asset Types Using the mimeType Field](docroot://media/medialibrary/medialibrary-faqs/medialibrary-asset-judgment-faq.md#identifying-asset-types-using-the-mimetype-field).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  mimeType?: string;

  /**
   * Width of the image or video, in px.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  width?: number;

  /**
   * Height of the image or video, in px.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  height?: number;

  /**
   * Size of the image or video, in bytes.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 12 dynamic
   */
  size?: number;

  /**
   * Video duration, in milliseconds. In versions earlier than API version 23, the value of **duration** is **0** for
   * moving photos. In API version 23 and later versions, the value of **duration** is the duration of the video clip
   * attached to moving photos. If an exception occurs, **-1** is returned.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  duration?: number;

  /**
   * Subtype of the photo. The options are **DEFAULT**, **MOVING_PHOTO**, and **BURST**.
   *
   * The default value is **DEFAULT (0)**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  photoSubType?: photoAccessHelper.PhotoSubtype;

  /**
   * Dynamic range type of the media file. The options are **HDR** and **SDR**.
   *
   * For moving photos, this parameter specifies the dynamic range type of the cover image.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  dynamicRangeType?: photoAccessHelper.DynamicRangeType;

  /**
   * Image or video direction information.
   *
   * 1: **TOP-left**: The image is not rotated.
   *
   * 2: **TOP-right**: The image is flipped horizontally.
   *
   * 3: **Bottom-right**: The image is rotated by 180°.
   *
   * 4: **Bottom-left**: The image is flipped vertically.
   *
   * 5: **Left-top**: The image is flipped horizontally and then rotated clockwise by 270°.
   *
   * 6: **Right-top**: The image is rotated clockwise by 90°.
   *
   * 7: **Right-bottom**: The image is vertically flipped and then rotated clockwise by 90°.
   *
   * 8: **Left-bottom**: The image is rotated clockwise by 270°.
   *
   * Images with mirroring information retain their original width and height attributes regardless of rotation, whereas
   * images without such information have these attributes updated to reflect the post-rotation dimensions.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  orientation?: number;

  /**
   * State of the moving photo badge.
   *
   * This parameter is supported only when [ItemType]{@link ItemType} is set to **THUMBNAIL**. Otherwise, it is left
   * empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  movingPhotoBadgeState?: photoAccessHelper.MovingPhotoBadgeStateType;

  /**
   * Log mode of a video file.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  videoMode?: photoAccessHelper.VideoMode;
}

/**
 * It inherits from [BaseItemInfo]{@link BaseItemInfo}, adding the parameter **itemType**.
 *
 * Represents basic image and video information.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class ItemInfo extends BaseItemInfo {
  /**
   * Type of the item, which can be **THUMBNAIL** or **CAMERA**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  itemType?: ItemType;
}

/**
 * Represents information about the photo browser page.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class PhotoBrowserInfo {
  /**
   * Animation for entering or exiting the photo browser page.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  animatorParams?: AnimatorParams;
}

/**
 * Defines animation parameters for entering or exiting the photo browser page.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class AnimatorParams {
  /**
   * Animation duration, in ms.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  duration?: number;

  /**
   * Animation curve.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  curve?: Curve | ICurve | string;
}

/**
 * Represents the maximum number of media assets that can be selected at a time.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare class MaxSelected {
  /**
   * Maximum number of media assets (images, videos, or both) that can be selected at a time.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  data?: Map<MaxCountType, number>;
}

/**
 * Represents the single-line display mode. In single-line mode, the component does not provide functions for viewing a
 * larger image. The component does not support callbacks related to large images, and the PickerController does not
 * support APIs related to large images, making API calls ineffective.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 20 dynamic
 */
export declare class SingleLineConfig {
  /**
   * Aspect ratio for grid display. Both 1:1 and the original image aspect ratio are supported. The default value is 1:
   * 1.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  itemDisplayRatio?: ItemDisplayRatio;

  /**
   * Rounded corner radius for grid items.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  itemBorderRadius?: Length | BorderRadiuses | LocalizedBorderRadiuses;

  /**
   * Spacing between grid items.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  itemGap?: Length;
}

/**
 * Describes the information about the preselected files and their corresponding **PhotoPickerComponent** index.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 21 dynamic
 */
export declare class PreselectedInfo {
  /**
   * URI of the preselected media file.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  uri: string;

  /**
   * Index of the **PhotoPickerComponent** that can be used in automatic selection. The default value is **-1**, which
   * allows automatic selection in any **PhotoPickerComponent**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  preselectablePickerIndex?: number;
}

/**
 * Describes the badge configuration.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 21 dynamic
 */
export declare class BadgeConfig {
  /**
   * Badge type.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  badgeType?: BadgeType;

  /**
   * URIs of the assets for the badge.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  uris?: Array<string>;
}

/**
 * Describes the updatable attributes of the **PhotoPickerComponent**. These attributes are a subset of
 * [PickerOptions]{@link PickerOptions}.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 22 dynamic
 */
export declare class UpdatablePickerConfigs {
  /**
   * MIME types.
   *
   * If this parameter is not specified, **IMAGE_VIDEO_TYPE** is used by default.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  mimeType?: photoAccessHelper.PhotoViewMIMETypes;

  /**
   * Configuration for file type filtering. Multiple types can be specified.
   *
   * - When this parameter is set, the **mimeType** configuration automatically becomes invalid.
   * - When this parameter is set, only media files of the configured filter type are displayed. You are advised to
   * notify users that only images or videos of the specified type can be selected.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  mimeTypeFilter?: photoAccessHelper.MimeTypeFilter;

  /**
   * Maximum number of media files that can be selected.
   *
   * The maximum value is 500, and the default value is 50.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  maxSelectNumber?: number;

  /**
   * Maximum number of images that can be selected (unit: number).
   *
   * The maximum value is **500**, which is limited by **MaxSelected**. The default value is **500**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  maxPhotoSelectNumber?: number;

  /**
   * Maximum number of videos that can be selected (unit: number).
   *
   * The maximum value is **500**, and it is restricted by the maximum number of media files that can be selected in the
   * system. The default value is **500**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  maxVideoSelectNumber?: number;

  /**
   * Picker selection mode.
   *
   * **SINGLE_SELECT** or **MULTI_SELECT**. The default value is **MULTI_SELECT**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  selectMode?: SelectMode;

  /**
   * Single selection mode. The default value is **SingleSelectionMode.BROWSER_MODE**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  singleSelectionMode?: photoAccessHelper.SingleSelectionMode;

  /**
   * Whether a single image can be repeatedly selected.
   *
   * **true** if supported, **false** otherwise. The default value is **false**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  isRepeatSelectSupported?: boolean;

  /**
   * URIs of the selected images.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  preselectedUris?: Array<string>;

  /**
   * Background color of the check box.
   *
   * The value is an 8-digit hexadecimal color code.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  checkBoxColor?: string;

  /**
   * Text color in the check box.
   *
   * The value is an 8-digit hexadecimal color code.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  checkboxTextColor?: string;

  /**
   * Background color of the Picker grid page.
   *
   * The value is an 8-digit hexadecimal color code.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  backgroundColor?: string;

  /**
   * Background color of the photo browser page.
   *
   * The options are **AUTO**, **LIGHT**, and **DARK**. The default value is **AUTO**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  photoBrowserBackgroundColorMode?: PickerColorMode;

  /**
   * Color mode of the Picker UI component.
   *
   * Dark/Light color mode (excluding the background color) of other components on the Picker grid page, including the
   * search box, camera entry, safety tips for using Gallery, and recommendation bubble. This attribute is usually used
   * together with **backgroundColor**. The default value is **PickerColorMode.AUTO**, which follows the system's dark/
   * light color mode.
   *
   * When setting this attribute, avoid using **PickerColorMode.LIGHT** with a dark background color, as it may make
   * components or text hard to see. Avoid using **PickerColorMode.DARK** with a light background color for the same
   * reason.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 22 dynamic
   */
  uiComponentColorMode?: PickerColorMode;

  /**
   * Whether scrolling in the **PhotoPickerComponent** is enabled. The value **true** means that scrolling is not
   * blocked and the component responds to user scroll gestures. The value **false** means that scrolling is blocked and
   * the component does not respond to user scroll gestures.
   *
   * The default value is **true**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  isSlidingSupported?: boolean;

  /**
   * Scrolling effect when the Picker grid page reaches the edge.
   *
   * The default value is [EdgeEffect.Spring]{@link EdgeEffect}.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  edgeEffect?: EdgeEffect;

  /**
   * Playback mode of the moving photo. The maximum array length is 2. If this limit is exceeded, the first two elements
   * are used, and the extra ones are automatically ignored.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  autoPlayScenes?: Array<photoAccessHelper.AutoPlayScene>;

  /**
   * Used to display only the album content corresponding to the specified bundle name.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  appAlbumFilters?: Array<string>;

  /**
   * Background opacity of the picker. The value range is [0, 1]. **0** indicates completely transparent, and **1**
   * indicates completely opaque.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 24 dynamic
   */
  backgroundOpacity?: number;

  /**
   * Margin of the component large image.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  photoBrowserMargin?: Margin;

  /**
   * Margin of the component grid.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  gridMargin?: Margin;
}

/**
 * Sets whether the asset with the specified URI is selected.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export declare class ClickResult {
  /**
   * URI of the media asset.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  uri: string;

  /**
   * Sets whether the specified media asset is selected. The value **true** indicates that the asset is selected, and
   * **false** indicates the opposite.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  isSelected: boolean;
}

/**
 * Describes the function name, error code, and message of the error returned when an error occurs during the use of the
 * **PhotoPickerComponent** component.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export declare class PickerError {
  /**
   * Function name of the error.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  functionName: string;

  /**
   * Error code.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  errorCode: number;

  /**
   * Error message.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  message: string;
}

/**
 * Defines the information about the Picker's state from the last exit.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export declare class CompletedResult {
  /**
   * URI of the selected image or video. The URI array can be used only by calling **photoAccessHelper.getAssets** in
   * temporary authorization mode.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  photoUris: Array<string>;

  /**
   * Context information of the PhotoPicker exit status.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  contextRecoveryInfo: photoAccessHelper.ContextRecoveryInfo;

  /**
   * Moving photo badge states of the selected media files. When **isMovingPhotoBadgeShown** is set to **true**,
   * **movingPhotoBadgeStates** contains the moving photo status. Otherwise, the value is empty.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic
   */
  movingPhotoBadgeStates: Array<photoAccessHelper.MovingPhotoBadgeStateType>;
}

/**
 * RecoveryResult
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare class RecoveryResult {
  /**
   * URI of the restored album.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  albumUri: string;

  /**
   * Name of the restored album.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  albumName: string;
}

/**
 * UnselectableItemInfo
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export declare class UnselectableItemInfo {
  /**
   * MimeType.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  public mimeType?: string;

  /**
   * PhotoSubtype. Asset subtype, non-special type images default to DEFAULT(0).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 26.1.0 dynamic
   */
  public photoSubType?: photoAccessHelper.PhotoSubtype;
}

/**
 * Enumerates the types of data sent from **PickerController** to the **PhotoPickerComponent**.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum DataType {
  /**
   * Sends a list of selected items to instruct the **PhotoPickerComponent** to refresh the selection status. A string
   * array needs to be passed in.
   *
   * For example, after an image is deleted from an application's page, the application calls **setData()** to notify
   * the **PhotoPickerComponent** of the remaining selected items. Then, the **PhotoPickerComponent** refreshes the
   * check box status.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SET_SELECTED_URIS = 1,

  /**
   * Sends the selected album to instruct the **PhotoPickerComponent** to refresh the album data. A string array needs
   * to be passed in.
   *
   * For example, after an album is selected from an application's page, the application calls **setData** to notify the
   * **PhotoPickerComponent** of the URI of the selected album. Then, the **PhotoPickerComponent** refreshes the album
   * data.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SET_ALBUM_URI = 2,

  /**
   * Sends the URI of the selected file and the index of the selected **PhotoPickerComponent**. If the index of a
   * **PhotoPickerComponent** matches the one provided in the parameter, the selected file is automatically highlighted
   * in that **PhotoPickerComponent**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  SET_SELECTED_INFO = 3,

  /**
   * Sends the badge configurations, which are of the [badgeConfig]{@link BadgeConfig} type and include a list of data
   * with badge types and corresponding file URIs. Once configured, the badge of the configured type is displayed in the
   * specified file.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  SET_BADGE_CONFIGS = 4,

  /**
   * Result of the click, which is of the [ClickResult]{@link ClickResult} type.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @stagemodelonly
   * @atomicservice
   * @since 23 dynamic
   */
  SET_ITEM_CLICK_RESULT = 5
}

/**
 * Enumerates the types of the item clicked.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum ItemType {
  /**
   * Image or video (thumbnail).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  THUMBNAIL = 0,

  /**
   * Camera item.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  CAMERA = 1
}

/**
 * Enumerates the click operation types.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum ClickType {
  /**
   * Select (select an image or click a camera item).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SELECTED = 0,

  /**
   * Deselect (deselect an image).
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  DESELECTED = 1
}

/**
 * Enumerates the sliding preview directions of the Picker grid page.
 *
 * This capability can be configured since API version 20. If this capability is set since API version 12 to 19, the
 * setting does not take effect and the default direction (vertical) is used.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PickerOrientation {
  /**
   * Vertical direction.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  VERTICAL = 0,

  /**
   * Horizontal direction.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  HORIZONTAL = 1
}

/**
 * Enumerates the selection modes.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum SelectMode {
  /**
   * Select a single option.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SINGLE_SELECT = 0,

  /**
   * Select multiple options.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  MULTI_SELECT = 1
}

/**
 * Enumerates the Picker color modes.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PickerColorMode {
  /**
   * Same with the system.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  AUTO = 0,

  /**
   * Light mode.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  LIGHT = 1,

  /**
   * Dark mode.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  DARK = 2
}

/**
 * Enumerates the types of the reminder when the number of selected items reaches the maximum.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum ReminderMode {
  /**
   * No reminder.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  NONE = 0,

  /**
   * Toast message.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  TOAST = 1,

  /**
   * Grayed-out hint.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  MASK = 2
}

/**
 * Enumerates the types of the maximum count.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum MaxCountType {
  /**
   * Total number of media assets (images and videos) that can be selected.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  TOTAL_MAX_COUNT = 0,

  /**
   * Total number of images that can be selected. The value cannot be greater than **Total_MAX_Count**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  PHOTO_MAX_COUNT = 1,

  /**
   * Total number of videos that can be selected. The value cannot be greater than **Total_MAX_Count**.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  VIDEO_MAX_COUNT = 2
}

/**
 * Enumerates the view range on the photo browser page.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 12 dynamic
 */
export declare enum PhotoBrowserRange {
  /**
   * View all images and videos.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  ALL = 0,

  /**
   * View selected images and videos only.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 12 dynamic
   */
  SELECTED_ONLY = 1
}

/**
 * Represents other UI elements except the image preview component on the photo browser page.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export declare enum PhotoBrowserUIElement {
  /**
   * Check box on the photo browser page.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  CHECKBOX = 0,

  /**
   * **Back** button on the photo browser page.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 13 dynamic
   */
  BACK_BUTTON = 1
}

/**
 * Enumerates the video playback states.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 14 dynamic
 */
export declare enum VideoPlayerState {
  /**
   * The video is being played.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  PLAYING = 0,

  /**
   * Video playback is paused.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  PAUSED = 1,

  /**
   * Video playback is stopped.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  STOPPED = 2,

  /**
   * Started dragging the progress bar.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  SEEK_START = 3,

  /**
   * Finished dragging the progress bar.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 14 dynamic
   */
  SEEK_FINISH = 4
}

/**
 * Enumerates the modes for saving images or videos.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 15 dynamic
 */
export declare enum SaveMode {

  /**
   * Saves the image or video as a new one.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 15 dynamic
   */
  SAVE_AS = 0,

  /**
   * Replaces the original image or video. After the replacements, you can roll back the saved content in Gallery to
   * restore the original image or video.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 15 dynamic
   */
  OVERWRITE = 1
}

/**
 * Enumerates the aspect ratios for grid display in single-line display mode.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 20 dynamic
 */
export declare enum ItemDisplayRatio {
  /**
   * 1:1 ratio.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  SQUARE_RATIO = 0,

  /**
   * Original image aspect ratio.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 20 dynamic
   */
  ORIGINAL_SIZE_RATIO = 1
}

/**
 * Enumerates the badge types.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 21 dynamic
 */
export declare enum BadgeType {
  /**
   * Uploaded.
   *
   * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
   * @atomicservice
   * @since 21 dynamic
   */
  BADGE_UPLOADED = 0
}

/**
 * Called when the selected items are deleted.
 *
 * @param { Array<BaseItemInfo> } baseItemInfos - Basic information about the selected items.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export type ItemsDeletedCallback = (baseItemInfos: Array<BaseItemInfo>) => void;

/**
 * Called when items are selected after the maximum count has been reached.
 *
 * @param { MaxCountType } exceedMaxCountType - Type of the maximum count that has been reached. It can be the maximum
 *     count of selected images, maximum count of selected videos, or maximum count of selected images and videos.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export type ExceedMaxSelectedCallback = (exceedMaxCountType: MaxCountType) => void;

/**
 * Called when the current album is deleted.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 13 dynamic
 */
export type CurrentAlbumDeletedCallback = () => void;

/**
 * Callback to be invoked when the video playback state on a photo browser page changes.
 *
 * @param { VideoPlayerState } state - Enumerates the video playback states.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 14 dynamic
 */
export type videoPlayStateChangedCallback = (state: VideoPlayerState) => void;

/**
 * Callback to be invoked when the moving photo effect of the **PhotoPickerComponent** is enabled or disabled.
 *
 * @param { string } uri - URI of the moving photo.
 * @param { photoAccessHelper.MovingPhotoBadgeStateType } state - State of the moving photo badge.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @atomicservice
 * @since 22 dynamic
 */
export type MovingPhotoBadgeStateChangedCallback = 
  (uri: string, state: photoAccessHelper.MovingPhotoBadgeStateType) => void;

/**
 * Callback to be invoked when the user stops scrolling and is positioned at the beginning of the grid content in the
 * **PhotoPickerComponent**.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export type ScrollStopAtStartCallback = () => void;

/**
 * Callback to be invoked when the user stops scrolling and is positioned at the end of the grid content in the
 * **PhotoPickerComponent**.
 *
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export type ScrollStopAtEndCallback = () => void;

/**
 * Callback to be invoked when an item in a **PhotoPickerComponent** is clicked.
 *
 * @param { ItemInfo } itemInfo - Type of the clicked item, which can be a thumbnail item or a camera item.
 * @param { ClickType } clickType - Enumerates the click operation types.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export type ItemClickedNotifyCallback = (itemInfo: ItemInfo, clickType: ClickType) => void;

/**
 * Callback to be invoked when a user pinches a grid component.
 *
 * @param { photoAccessHelper.GridLevel } gridLevel - Number of columns in the grid.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export type PinchGridSwitchedCallback = (gridLevel: photoAccessHelper.GridLevel) => void;

/**
 * Callback to be invoked when a grid view switches to the photo browser page or the photo browser page is switched.
 *
 * @param { BaseItemInfo } targetPhotoInfo - Basic information about the selected items.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export type PhotoBrowserChangeStartCallback = (targetPhotoInfo: BaseItemInfo) => void;

/**
 * Callback to be invoked when an error occurs in the **PhotoPickerComponent**.
 *
 * @param { PickerError } pickerError - Basic information about the error.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 23 dynamic
 */
export type ErrorCallback = (pickerError: PickerError) => void;

/**
 * The callback of onPickerRecovery event
 *
 * @param { RecoveryResult } recoveryResult
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export type PickerRecoveryCallback = (recoveryResult: RecoveryResult) => void;

/**
 * Callback to be invoked when the large image is zoomed in or out after the large image is entered through the
 * **PhotoPickerComponent**.
 *
 * @param { double } scale - Scale of the image compared with the original image.
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.0.0 dynamic
 */
export type PhotoBrowserZoomCallback = (scale: double) => void;

/**
 * The callback of onUnselectableItemInfo event
 *
 * @param { UnselectableItemInfo } unselectableItemInfo
 * @syscap SystemCapability.FileManagement.PhotoAccessHelper.Core
 * @stagemodelonly
 * @atomicservice
 * @since 26.1.0 dynamic
 */
export type UnselectableItemClickedCallback = (unselectableItemInfo: UnselectableItemInfo) => void;