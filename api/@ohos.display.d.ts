/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file
 * @kit ArkUI
 */

import type { AsyncCallback, Callback } from './@ohos.base';
import type colorSpaceManager from './@ohos.graphics.colorSpaceManager';
import type hdrCapability from './@ohos.graphics.hdrCapability';

/**
 * The **Display** module provides APIs for managing displays, such as obtaining information about the default display,
 * obtaining information about all displays, and listening for the addition and removal of displays.
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace display {
  /**
   * Obtains the default Display object. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Display> } callback - Callback used to return the default Display object.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead display.getDefaultDisplaySync
   */
  function getDefaultDisplay(callback: AsyncCallback<Display>): void;

  /**
   * Obtains the default Display object. This API uses a promise to return the result.
   *
   * @returns { Promise<Display> } Promise used to return the default Display object.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead display.getDefaultDisplaySync
   */
  function getDefaultDisplay(): Promise<Display>;

  /**
   * Obtains the **Display** object of the screen where the application is located. If multiple abilities of an
   * application are on different screens, the **Display** object of the main screen is returned. If multiple abilities
   * of an application are on the same screen, the **Display** object of the screen is returned.
   *
   * @returns { Display } Default Display object.
   * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause: Display is not created or destroyed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getDefaultDisplaySync(): Display;

  /**
   * Obtains the information about the primary display. For devices other than 2-in-1 devices, the Display object
   * obtained is the built-in screen. For 2-in-1 devices with an external screen, the Display object obtained is the
   * primary screen. For 2-in-1 devices without an external screen, the Display object obtained is the built-in screen.
   *
   * @returns { Display } Display object of the primary screen.
   * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause: Invalid display id.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function getPrimaryDisplaySync(): Display;

  /**
   * Obtains a Display object based on the display ID.
   *
   * @param { long } displayId - Display ID. The value must be an integer greater than or equal to 0. An object can be
   *     obtained only when the passed-in display ID is correct. You can use the value of the **displayId** property in
   *     [WindowProperties]{@link @ohos.window:window.WindowProperties} as the input parameter.
   * @returns { Display } Display object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   *     3. Parameter verification failed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally. Possible causes:
   *     Display is null, display id corresponding display does not exist.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getDisplayByIdSync(displayId: long): Display;

  /**
   * Obtains all Display objects. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<Display>> } callback - Callback used to return all the Display objects.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead display.getAllDisplays(callback: AsyncCallback<Array<Display>>)
   */
  function getAllDisplay(callback: AsyncCallback<Array<Display>>): void;

  /**
   * Obtains all Display objects. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<Display>> } Promise used to return all the Display objects.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead display.getAllDisplays()
   */
  function getAllDisplay(): Promise<Array<Display>>;

  /**
   * Obtains all Display objects. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<Display>> } callback - Callback used to return all the Display objects.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllDisplays(callback: AsyncCallback<Array<Display>>): void;

  /**
   * Obtains all Display objects. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<Display>> } Promise used to return all the Display objects.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllDisplays(): Promise<Array<Display>>;

  /**
   * Obtains all the display modes supported by the current device, along with the physical screen resolutions for each
   * mode. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<DisplayPhysicalResolution>> } Promise used to return all the DisplayPhysicalResolution
   *     objects.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllDisplayPhysicalResolution(): Promise<Array<DisplayPhysicalResolution>>;

  /**
   * Checks whether there is a visible privacy window on a display. The privacy window can be set by calling
   * [setWindowPrivacyMode()]{@link @ohos.window:window.setWindowPrivacyMode(isPrivacyMode: boolean, callback: AsyncCallback<void>)}. The
   * content in the privacy window cannot be captured or recorded.
   *
   * @param { long } displayId - ID of the display. The value must be an integer greater than or equal to 0.
   * @returns { boolean } Whether there is a visible privacy window on the display. **true** if yes, **false**
   *     otherwise.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function hasPrivateWindow(displayId: long): boolean;

  /**
   * Subscribes to display changes.
   *
   * @param { 'add' | 'remove' | 'change' } type - Event type.<br>- **add**, indicating the display addition event.
   *     Example: event that a display is connected.<br>- **remove**, indicating the display removal event. Example:
   *     event that a display is disconnected.<br>- **change**, indicating the display change event. Example: event that
   *     the display orientation is changed.
   * @param { Callback<long> } callback - Callback used to return the ID of the display, which is an integer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  function on(type: 'add' | 'remove' | 'change', callback: Callback<long>): void;

  /**
   * Subscribes to changes of specified attributes of a display.
   *
   * @param { Array<string> } displayAttributeOption - Attribute names. Only attributes contained in
   *     [Display]{@link display.Display} are supported.
   * @param { Callback<long> } callback - Callback used to return the ID of the display, which is an integer.
   * @throws { BusinessError } 801 - Capability not supported. Function onChangeWithAttribute can not work correctly
   *     due to limited device capabilities.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   *     Possible causes: Internal IPC error.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 23 dynamic&static
   */
  function onChangeWithAttribute(displayAttributeOption: Array<string>, callback: Callback<long>): void;

  /**
   * Register the callback for display add events.
   *
   * @param { Callback<long> } callback the display id of changed
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function onAdd(callback: Callback<long>): void;

  /**
   * Register the callback for display remove events.
   *
   * @param { Callback<long> } callback the display id of changed
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function onRemove(callback: Callback<long>): void;

  /**
   * Register the callback for display changes.
   *
   * @param { Callback<long> } callback the display id of changed
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function onChange(callback: Callback<long>): void;

  /**
   * Unsubscribes from display changes.
   *
   * @param { 'add' | 'remove' | 'change' } type - Event type.<br>- **add**, indicating the display addition event.
   *     Example: event that a display is connected.<br>- **remove**, indicating the display removal event. Example:
   *     event that a display is disconnected.<br>- **change**, indicating the display change event. Example: event that
   *     the display orientation is changed.
   * @param { Callback<long> } callback - Callback used to return the ID of the display, which is an integer. If this
   *     parameter is not specified, all subscriptions to the specified event are canceled. [since 7 - 19]
   * @param { Callback<long> } [callback] - Callback used to return the ID of the display, which is an integer. If this
   *     parameter is not specified, all subscriptions to the specified event are canceled. [since 20]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  function off(type: 'add' | 'remove' | 'change', callback?: Callback<long>): void;

  /**
   * Unregister the callback for display add events.
   *
   * @param { Callback<long> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function offAdd(callback?: Callback<long>): void;

  /**
   * Unregister the callback for display remove events.
   *
   * @param { Callback<long> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function offRemove(callback?: Callback<long>): void;

  /**
   * Unregister the callback for display changes.
   *
   * @param { Callback<long> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 23 static
   */
  function offChange(callback?: Callback<long>): void;

  /**
   * Subscribes to privacy mode changes of this display. When there is a privacy window in the foreground of the display
   * , the display is in privacy mode, and the content in the privacy window cannot be captured or recorded.
   *
   * @param { 'privateModeChange' } type - Event type. The value is fixed at **'privateModeChange'**, indicating that
   *     the privacy mode of the display is changed.
   * @param { Callback<boolean> } callback - Callback used to return whether the privacy mode of the display is changed.
   *     **true** if changed, **false** otherwise.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function on(type: 'privateModeChange', callback: Callback<boolean>): void;

  /**
   * Register the callback for private mode changes.
   *
   * @param { Callback<boolean> } callback Callback used to return the result whether display is on private mode or not
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onPrivateModeChange(callback: Callback<boolean>): void;

  /**
   * Unsubscribes from privacy mode changes of this display. When there is a privacy window in the foreground of the
   * display, the display is in privacy mode, and the content in the privacy window cannot be captured or recorded.
   *
   * @param { 'privateModeChange' } type - Event type. The value is fixed at **'privateModeChange'**, indicating that
   *     the privacy mode of the display is changed.
   * @param { Callback<boolean> } callback - Callback used to return whether the privacy mode of the display is changed.
   *     **true** if changed, **false** otherwise. If this parameter is not specified, all subscriptions to the
   *     specified event are canceled.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   */
  function off(type: 'privateModeChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the callback for private mode changes.
   *
   * @param { Callback<boolean> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offPrivateModeChange(callback?: Callback<boolean>): void;

  /**
   * Checks whether this device is foldable.
   *
   * @returns { boolean } Check result for whether the device is foldable. **true** if foldable, **false** otherwise.
   *     For small-screen foldable devices where the outer screen serves only as an auxiliary display (and cannot be
   *     customized by applications), the return value is always **false**. For other foldable devices, the return value
   *     is always **true**.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function isFoldable(): boolean;

  /**
   * Obtains the fold status of this foldable device.
   *
   * @returns { FoldStatus } Fold status of the device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getFoldStatus(): FoldStatus;

  /**
   * Subscribes to fold status change events of the foldable device.
   *
   * To subscribe to display mode change events of foldable devices, use
   * [display.on('foldDisplayModeChange')]{@link display.on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>)}
   * .
   *
   * The two are different. In terms of timing, the fold status changes first, and the bottom layer matches the display
   * mode status based on the fold status.
   *
   * To check whether the content is displayed on the inner or outer screen of the foldable device, use
   * [display.on('foldDisplayModeChange')]{@link display.on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>)}
   * .
   *
   * @param { 'foldStatusChange' } type - Event type. The event **'foldStatusChange'** is triggered when the fold status
   *     of the device changes.
   * @param { Callback<FoldStatus> } callback - Callback used to return the fold status.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function on(type: 'foldStatusChange', callback: Callback<FoldStatus>): void;

  /**
   * Register the callback for fold status changes.
   *
   * @param { Callback<FoldStatus> } callback Callback used to return the current fold status of device
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function onFoldStatusChange(callback: Callback<FoldStatus>): void;

  /**
   * Unsubscribes from fold status change events of the foldable device.
   *
   * @param { 'foldStatusChange' } type - Event type. The event **'foldStatusChange'** is triggered when the fold status
   *     of the device changes.
   * @param { Callback<FoldStatus> } callback - Callback used to return the fold status. If this parameter is not
   *     specified, all subscriptions to the specified event are canceled. [since 10 - 19]
   * @param { Callback<FoldStatus> } [callback] - Callback used to return the fold status. If this parameter is not
   *     specified, all subscriptions to the specified event are canceled. [since 20]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function off(type: 'foldStatusChange', callback?: Callback<FoldStatus>): void;

  /**
   * Unregister the callback for fold status changes.
   *
   * @param { Callback<FoldStatus> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function offFoldStatusChange(callback?: Callback<FoldStatus>): void;

  /**
   * Subscribes to folding angle change events of the foldable device. Note that there are two folding angles for dual-
   * fold axis devices. When oriented with the charging port at the bottom, the hinges are identified from right to left
   * as the first and second fold axes, respectively.
   *
   * @param { 'foldAngleChange' } type - Event type. The event **'foldAngleChange'** is triggered when the folding angle
   *     of the device changes.
   * @param { Callback<Array<double>> } callback - Callback used to return the folding angle (0�C180 degrees). For dual-
   *     fold axis devices, the array contains two angles. The first value represents the folding angle of the first
   *     fold axis, while the second value represents the folding angle of the second fold axis.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'foldAngleChange', callback: Callback<Array<double>>): void;

  /**
   * Register the callback for fold angle changes.
   *
   * @param { Callback<Array<double>> } callback Callback used to return the current fold angle of device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function onFoldAngleChange(callback: Callback<Array<double>>): void;

  /**
   * Unsubscribes from folding angle change events of the foldable device.
   *
   * @param { 'foldAngleChange' } type - Event type. The event **'foldAngleChange'** is triggered when the folding angle
   *     of the device changes.
   * @param { Callback<Array<double>> } callback - Callback used to return the folding angle (0�C180 degrees). If this
   *     parameter is not specified, all subscriptions to the specified event are canceled. [since 12 - 19]
   * @param { Callback<Array<double>> } [callback] - Callback used to return the folding angle (0�C180 degrees). If this
   *     parameter is not specified, all subscriptions to the specified event are canceled. [since 20]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'foldAngleChange', callback?: Callback<Array<double>>): void;

  /**
   * Unregister the callback for fold angle changes.
   *
   * @param { Callback<Array<double>> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function offFoldAngleChange(callback?: Callback<Array<double>>): void;

  /**
   * Subscribes to events indicating whether the device's screen content is being captured.
   *
   * @param { 'captureStatusChange' } type - Event type. The event **'captureStatusChange'** is triggered when the
   *     screen capture status changes.
   * @param { Callback<boolean> } callback - Callback used to return the result indicating whether the device's screen
   *     content is being captured. **true** is returned when screen content is being captured (including active screen
   *     capture, casting, recording, or the creation of a virtual screen that could be captured). **false** is
   *     returned when screen content is no longer being captured. In the case of screen capture, **true** is returned
   *     only once.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  function on(type: 'captureStatusChange', callback: Callback<boolean>): void;

  /**
   * Register the callback for device capture, casting, or recording status changes.
   *
   * @param { Callback<boolean> } callback Callback used to return the device capture, casting, or recording status.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 static
   */
  function onCaptureStatusChange(callback: Callback<boolean>): void;

  /**
   * Unsubscribes from events indicating whether the device's screen content is being captured.
   *
   * @param { 'captureStatusChange' } type - Event type. The event **'captureStatusChange'** is triggered when the
   *     screen capture status changes.
   * @param { Callback<boolean> } callback - Callback used to return the result indicating whether the device's screen
   *     content is being captured. **true** is returned when screen content is being captured (including active screen
   *     capture, casting, recording, or the creation of a virtual screen that could be captured). **false** is returned
   *     when screen content is no longer being captured. In the case of screen capture, **true** is returned only once.
   *     If this parameter is not specified, all subscriptions to the specified event are canceled.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   */
  function off(type: 'captureStatusChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the callback for device capture, casting, or recording status changes.
   *
   * @param { Callback<boolean> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 static
   */
  function offCaptureStatusChange(callback?: Callback<boolean>): void;

  /**
   * Checks whether the device's screen content is being captured.
   *
   * @returns { boolean } Check result for whether the device's screen content is being captured. **true** is returned
   *     when screen content is being captured (including active screen capture, casting, recording, or the creation of
   *     a virtual screen that could be captured). **false** is returned when screen content is no longer being
   *     captured.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function isCaptured(): boolean;

  /**
   * Check whether the device is captured, projected, or recorded by any app in the bundle name list.
   *
   * @param { Array<string> } bundleNameList - The list of application bundle names that need to be checked.
   *     The max size of array is 100.
   * @returns { boolean } true means the device is captured, projected, or recorded by any app in the bundle name list.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause:
   *     1.The size of bundleNameList is larger than 100.
   * @syscap SystemCapability.Window.SessionManager
   * @stagemodelonly
   * @atomicservice
   * @since 26.0.0 dynamic&static
   */
  function isCaptured(bundleNameList: Array<string>): boolean;

  /**
   * Obtains the display mode of this foldable device.
   *
   * @returns { FoldDisplayMode } Display mode of the foldable device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getFoldDisplayMode(): FoldDisplayMode;

  /**
   * Sets the display mode of the foldable device.
   *
   * @param { FoldDisplayMode } mode - Display mode.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function setFoldDisplayMode(mode: FoldDisplayMode): void;

  /**
   * Subscribes to display mode change events of the foldable device.
   *
   * To subscribe to fold status change events of foldable devices, use
   * [display.on('foldStatusChange')]{@link display.on(type: 'foldStatusChange', callback: Callback<FoldStatus>)}.
   *
   * The two are different. In terms of timing, the fold status changes first, and the bottom layer matches the display
   * mode status based on the fold status.
   *
   * @param { 'foldDisplayModeChange' } type - Event type. The event **'foldDisplayModeChange'** is triggered when the
   *     display mode of the device changes.
   * @param { Callback<FoldDisplayMode> } callback - Callback used to return the display mode.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>): void;

  /**
   * Register the callback for fold display mode changes.
   *
   * @param { Callback<FoldDisplayMode> } callback Callback used to return the current fold display mode
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function onFoldDisplayModeChange(callback: Callback<FoldDisplayMode>): void;

  /**
   * Unsubscribes from display mode change events of the foldable device.
   *
   * @param { 'foldDisplayModeChange' } type - Event type. The event **'foldDisplayModeChange'** is triggered when the
   *     display mode of the device changes.
   * @param { Callback<FoldDisplayMode> } callback - Callback used to return the display mode. If this parameter is not
   *     specified, all subscriptions to the specified event are canceled. [since 10 - 19]
   * @param { Callback<FoldDisplayMode> } [callback] - Callback used to return the display mode. If this parameter is
   *     not specified, all subscriptions to the specified event are canceled. [since 20]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   */
  function off(type: 'foldDisplayModeChange', callback?: Callback<FoldDisplayMode>): void;

  /**
   * Unregister the callback for fold display mode changes.
   *
   * @param { Callback<FoldDisplayMode> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform
   * @since 23 static
   */
  function offFoldDisplayModeChange(callback?: Callback<FoldDisplayMode>): void;

  /**
   * Obtains the crease region of the foldable device in the current display mode.
   *
   * @returns { FoldCreaseRegion } Crease region of the device.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getCurrentFoldCreaseRegion(): FoldCreaseRegion;

  /**
   * Sets whether to lock the current fold status of the foldable device.
   *
   * @param { boolean } locked - Whether to lock the current fold status of the foldable device. **true** to lock,
   *     **false** otherwise.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 11 dynamic
   * @since 23 static
   */
  function setFoldStatusLocked(locked: boolean): void;

  /**
   * Creates a virtual screen. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { VirtualScreenConfig } config - Virtual screen parameters.
   * @returns { Promise<long> } Promise used to return the screen ID of the created virtual screen.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.function createVirtualScreen can not work correctly due to
   *     limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap  SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  function createVirtualScreen(config: VirtualScreenConfig): Promise<long>;

  /**
   * Destroys a virtual screen. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { long } screenId - Screen ID, which must match the ID of the virtual screen created by calling the
   *     [createVirtualScreen()]{@link display.createVirtualScreen} API. This parameter only accepts integer values.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.function destroyVirtualScreen can not work correctly due
   *     to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap  SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  function destroyVirtualScreen(screenId: long): Promise<void>;

  /**
   * Sets a surface for a virtual screen. **surfaceId** identifies a surface, the content of which will be shown on this
   * virtual screen. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { long } screenId - Screen ID, which must match the ID of the virtual screen created by calling the
   *     [createVirtualScreen()]{@link display.createVirtualScreen} API. This parameter only accepts integer values.
   * @param { string } surfaceId - ID of the surface bound to the virtual screen. You can specify the ID of an existing
   *     surface. The maximum length for this parameter is 4096 bytes. If it goes beyond that, only the first 4096 bytes
   *     are used.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.function setVirtualScreenSurface can not work correctly
   *     due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap  SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  function setVirtualScreenSurface(screenId: long, surfaceId: string): Promise<void>;

  /**
   * Add surface for the virtual screen.
   *
   * @param { long } screenId - Indicates the screen id of the virtual screen.
   * @param { string } surfaceId - Indicates the surface id.
   * @param { Rect } [surfaceRegion] - Rectangular area for displaying the surface in the virtual screen.
   *     If the virtual screen has not bound any surface via
   *     [setVirtualScreenSurface()]{@link display.setVirtualScreenSurface} or 
   *     [addVirtualScreenSurface()]{@link display.addVirtualScreenSurface}, the surfaceRegion is invalid
   *     and defaults to full screen. In mirror mode, the surfaceRegion is invalid and defaults to full screen.
   *     In independent display mode, the surfaceRegion is valid.
   * @returns { Promise<void> } Promise that returns no value
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.function addVirtualScreenSurface
   *     can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function addVirtualScreenSurface(screenId: long, surfaceId: string, surfaceRegion?: Rect): Promise<void>;

  /**
   * Remove surface for the virtual screen.
   *
   * @param { long } screenId - Indicates the screen id of the virtual screen.
   * @param { string } surfaceId - Indicates the surface id.
   * @returns { Promise<void> } Promise that returns no value
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported.function removeVirtualScreenSurface
   *     can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function removeVirtualScreenSurface(screenId: long, surfaceId: string): Promise<void>;

  /**
   * Sets the screen to independent display mode. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { long } screenId - ID of the screen. Each ID must be an integer greater than 0; otherwise, error code 401
   *     is returned.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.function makeUnique can not work correctly due to limited
   *     device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  function makeUnique(screenId: long): Promise<void>;

  /**
   * Adds windows to the list of windows that are not allowed to be displayed during casting. This API takes effect only
   * for the main window of an application or system windows. This API uses a promise to return the result.
   *
   * @param { Array<int> } windowIds - List of window IDs. If a child window ID is passed in, it will not take effect.
   *     The window ID is an integer greater than 0. You are advised to call
   *     [getWindowProperties()]{@link @ohos.window:window.getwindowproperties} to
   *     obtain the window ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.Function addVirtualScreenBlocklist can not work correctly
   *     due to limited device capabilities.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function addVirtualScreenBlocklist(windowIds: Array<int>): Promise<void>;

  /**
   * Removes windows from the list of windows that are not allowed to be displayed during casting. This API takes effect
   * only for the main window of an application or system windows. This API uses a promise to return the result.
   *
   * @param { Array<int> } windowIds - List of window IDs. If a child window ID is passed in, it will not take effect.
   *     The window ID is an integer greater than 0. You are advised to call
   *     [getWindowProperties()]{@link @ohos.window:window.getwindowproperties} to
   *     obtain the window ID.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.Function removeVirtualScreenBlocklist
   *     can not work correctly due to limited device capabilities.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function removeVirtualScreenBlocklist(windowIds: Array<int>): Promise<void>;

  /**
   * Converts relative coordinates (based on the top-left corner of the screen) into global coordinates (based on the
   * top-left corner of the primary screen). This API supports only coordinate conversion between the primary screen and
   * extended screen.
   *
   * @param { RelativePosition } relativePosition - Relative coordinates to convert.
   * @returns { Position } Global coordinates based on the top-left corner of the primary screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function convertRelativeToGlobalCoordinate(relativePosition: RelativePosition): Position;

  /**
   * Converts global coordinates (based on the top-left corner of the primary screen) into relative coordinates (based
   * on the top-left corner of the screen specified by **displayId**). If **displayId** is not passed, the coordinates
   * are converted relative to the screen where the global coordinates are located. If the global coordinates are not on
   * any screen, the coordinates are converted relative to the primary screen by default.
   *
   * @param { Position } position - Global coordinates to convert.
   * @param { long } [displayId] - Display ID for the relative coordinates. If this parameter is passed, the coordinates
   *     are converted relative to this screen. If it is not provided, the coordinates are converted to the screen where
   *     the global coordinates are located, or the primary screen if they are not on any screen.
   * @returns { RelativePosition } Relative coordinates for the specified screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function convertGlobalToRelativeCoordinate(position: Position, displayId?: long): RelativePosition;

  /**
   * Obtains the screen brightness information of a display. If the screen does not support HDR, the
   * **currentHeadroom** and **maxHeadroom** fields in the returned [BrightnessInfo]{@link display.BrightnessInfo}
   * object use the default values. For virtual screens, the **sdrNits** field in the BrightnessInfo object uses the
   * default value.
   *
   * @param { long } displayId - Display ID. The value must be an integer greater than or equal to 0.
   * @returns { BrightnessInfo } Screen brightness information.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  function getBrightnessInfo(displayId: long): BrightnessInfo;

  /**
   * Defines the callback function used to listen for screen brightness information.
   *
   * @param { T1 } data1 - Display ID. The value is of the number type.
   * @param { T2 } data2 - Brightness information. The value is of the [BrightnessInfo]{@link display.BrightnessInfo}
   *     type.
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  type BrightnessCallback<T1, T2> = (data1: T1, data2: T2) => void;

  /**
   * Subscribes to events related to screen brightness information changes. If the screen does not support HDR, the
   * **currentHeadroom** and **maxHeadroom** fields in the [BrightnessInfo]{@link display.BrightnessInfo} object use the
   * default values. For virtual screens, the **sdrNits** field in the BrightnessInfo object uses the default value.
   *
   * @param { 'brightnessInfoChange' } type - Event type. The value is fixed at **'brightnessInfoChange'**, indicating
   *     that the screen brightness information is changed.
   * @param { BrightnessCallback<long, BrightnessInfo> } callback - Callback used to return the display ID (parameter 1)
   *     and the corresponding screen brightness information (parameter 2).
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   */
  function on(type: 'brightnessInfoChange', callback: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * Unsubscribes from events related to screen brightness information changes.
   *
   * @param { 'brightnessInfoChange' } type - Event type. The value is fixed at **'brightnessInfoChange'**, indicating
   *     that the screen brightness information is changed.
   * @param { BrightnessCallback<long, BrightnessInfo> } [callback] - Callback used to return the brightnessInfo status
   *     change. If this parameter is not specified, all subscriptions to the specified event are canceled. The first
   *     parameter indicates the display ID, and the second parameter indicates the screen brightness information.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   */
  function off(type: 'brightnessInfoChange', callback?: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * Register the callback for brightness info changes.
   *
   * @param { BrightnessCallback<long, BrightnessInfo> } callback - Callback used to return the display if and
   *     corresponding brightness info.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 static
   */
  function onBrightnessInfoChange(callback: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * Unregister the callback for brightness info changes.
   *
   * @param { BrightnessCallback<long, BrightnessInfo> } [callback] - Callback used to return the display corresponding
   *     brightness info. If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @since 23 static
   */
  function offBrightnessInfoChange(callback?: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * Describes the virtual screen parameters.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  interface VirtualScreenConfig {
    /**
     * Name of the virtual screen, which can be customized.
     *
     * @syscap  SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Width of the virtual screen, in px. The value must be a positive integer.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Height of the virtual screen, in px. The value must be a positive integer.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * Density of the virtual screen, in px. The value is a floating-point number.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    density: double;

    /**
     * Surface ID of the virtual screen, which can be customized. The maximum length for this parameter is 4096 bytes.
     * If it goes beyond that, only the first 4096 bytes are used.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    surfaceId: string;

    /**
     * Whether the virtual screen is focusable. **true** if focusable, **false** otherwise. The default value is
     * **true**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    supportsFocus?: boolean;
  }

  /**
   * Describes a coordinate position. In the global coordinate system, the origin is the top-left corner of the primary
   * screen. In the relative coordinate system, the origin is the top-left corner of the specified screen.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface Position {
    /**
     * X coordinate relative to the origin, measured in px. The value must be a 32-bit signed integer, and floating-
     * point numbers are rounded down.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    x: long;

    /**
     * Y coordinate relative to the origin, measured in px. The value must be a 32-bit signed integer, and floating-
     * point numbers are rounded down.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    y: long;
  }

  /**
   * Describes a coordinate position in the relative coordinate system, with the origin in the top-left corner of the
   * screen specified by **displayId**.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface RelativePosition {
    /**
     * Display ID for the relative coordinates. Only integers are supported, and the value must be greater than or equal
     * to 0.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    displayId: long;

    /**
     * Coordinates with the top-left corner of the screen specified by **displayId** as the origin.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    position: Position;
  }

  /**
   * Enumerates the fold statuses of a foldable device. For dual-fold axis devices, when oriented with the charging port
   * at the bottom, the hinges are identified from right to left as the first and second fold axes, respectively.
   *
   * > **NOTE**
   *
   * > Devices with only one fold axis can be in the **FOLD_STATUS_EXPANDED**, **FOLD_STATUS_FOLDED**, or
   * > **FOLD_STATUS_HALF_FOLDED** state.
   *
   * > Devices with two fold axes can be in any of the states provided in the table above, except for
   * > **FOLD_STATUS_UNKNOWN**, which indicates an unusable fold status.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum FoldStatus {
    /**
     * The fold status of the device is unknown or the device cannot be folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_STATUS_UNKNOWN = 0,
    /**
     * The device is fully open. For dual-fold axis devices, the first fold axis is fully open, and the second fold axis
     * is folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_STATUS_EXPANDED = 1,
    /**
     * The device is folded (completely closed). For dual-fold axis devices, both the first and second fold axes are
     * folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_STATUS_FOLDED = 2,
    /**
     * The device is half-folded, somehow between fully open and completely closed. For dual-fold axis devices, the
     * first fold axis is half-folded, and the second fold axis is folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_STATUS_HALF_FOLDED = 3,

    /**
     * For dual-fold axis devices, both the first and second fold axes are fully open.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_EXPANDED_WITH_SECOND_EXPANDED = 11,

    /**
     * For dual-fold axis devices, the first fold axis is fully open, and the second fold axis is half-folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_EXPANDED_WITH_SECOND_HALF_FOLDED = 21,

    /**
     * For dual-fold axis devices, the first fold axis is folded, and the second fold axis is fully folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_FOLDED_WITH_SECOND_HALF_FOLDED = 22,

    /**
     * For dual-fold axis devices, both the first and second fold axes are half-folded.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_HALF_FOLDED_WITH_SECOND_HALF_FOLDED = 23,

    /**
     * For dual-fold axis devices, the first fold axis is folded, and the second fold axis is fully open.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_FOLDED_WITH_SECOND_EXPANDED = 12,

    /**
     * For dual-fold axis devices, the first fold axis is half-folded, and the second fold axis is fully open.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_HALF_FOLDED_WITH_SECOND_EXPANDED = 13
  }

  /**
   * Enumerates the display modes of a foldable device.
   *
   * > **NOTE**
   *
   * > For foldable devices where both the inner and outer screens can serve as the primary screen �� like large or wide-
   * > folding models �� the inner screen's display mode is **FOLD_DISPLAY_MODE_FULL**, and the outer screen's display
   * > mode is **FOLD_DISPLAY_MODE_MAIN**.
   *
   * > For foldable devices where the outer screen serves only as an auxiliary display �� like small-folding models �� the
   * > inner screen's display mode is **FOLD_DISPLAY_MODE_MAIN**, and the outer screen's display mode is
   * > **FOLD_DISPLAY_MODE_SUB**.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum FoldDisplayMode {
    /**
     * The display mode of the device is unknown.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_UNKNOWN = 0,
    /**
     * The device is displayed in full screen.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_FULL = 1,
    /**
     * The primary screen of the device is displayed.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_MAIN = 2,
    /**
     * The secondary screen of the device is displayed.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_SUB = 3,
    /**
     * Both screens of the device are displayed in collaborative mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_COORDINATION
  }

  /**
   * Enumerates the states of a display.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum DisplayState {
    /**
     * Unknown.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_UNKNOWN = 0,
    /**
     * The display is shut down.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_OFF = 1,
    /**
     * The display is powered on.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_ON = 2,
    /**
     * The display is in sleep mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_DOZE = 3,
    /**
     * The display is in sleep mode, and the CPU is suspended.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_DOZE_SUSPEND = 4,
    /**
     * The display is in VR mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_VR = 5,
    /**
     * The display is powered on, and the CPU is suspended.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_ON_SUSPEND = 6
  }

  /**
   * Enumerates the orientations of a display.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum Orientation {
    /**
     * The display is in portrait mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PORTRAIT = 0,

    /**
     * The display is in landscape mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LANDSCAPE = 1,

    /**
     * The display is in reverse portrait mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PORTRAIT_INVERTED = 2,

    /**
     * The display is in reverse landscape mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LANDSCAPE_INVERTED = 3
  }

  /**
   * Describes the crease region of a foldable device.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface FoldCreaseRegion {
    /**
     * ID of the display where the crease is located.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly displayId: long;

    /**
     * Crease region.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly creaseRects: Array<Rect>;
  }

  /**
   * Describes the screen brightness information. The information comes from the underlying screen data.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface BrightnessInfo {
    /**
     * Screen brightness. The value is a floating-point number greater than 0. The default value is **500.0**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    readonly sdrNits: double;
    /**
     * Dynamic brightness headroom. The value is a floating-point number greater than 0. The default value is **1.0**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    readonly currentHeadroom: double;
    /**
     * Maximum brightness headroom. The value is a floating-point number greater than 0. The default value is **1.0**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    readonly maxHeadroom: double;
    /**
     * Position of the brightness bar corresponding to the current screen brightness.
     * Value range: [0.0,1.0]. Default value: 0.0.
     *
     * @readonly
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    readonly brightnessPosition?: double;
  }

  /**
   * Describes a rectangle on the display.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * Left boundary of the rectangle, in px. The value is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    left: long;

    /**
     * Top boundary of the rectangle, in px. The value is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    top: long;

    /**
     * Width of the rectangle, in px. The value is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Height of the rectangle, in px. The value is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    height: long;
  }

  /**
   * Describes the curved area on a waterfall display.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface WaterfallDisplayAreaRects {
    /**
     * Rectangle of the curved area on the left of the waterfall display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly left: Rect;

    /**
     * Rectangle of the curved area on the right of the waterfall display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly right: Rect;

    /**
     * Rectangle of the curved area on the top of the waterfall display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly top: Rect;

    /**
     * Rectangle of the curved area at the bottom of the waterfall display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bottom: Rect;
  }

  /**
   * Describes the unusable area of a display, including punch hole, notch, and curved area of a waterfall display.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface CutoutInfo {
    /**
     * Unusable areas (bounding rectangles) designed for punch holes and notches. If there are no punch holes or notches
     * , an empty array is returned.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly boundingRects: Array<Rect>;

    /**
     * Curved area on a waterfall display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly waterfallDisplayAreaRects: WaterfallDisplayAreaRects;
  }

  /**
   * Describes the display mode of a device and the corresponding physical screen resolution information.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface DisplayPhysicalResolution {
    /**
     * Display mode of the device. The value is **0** for non-foldable devices.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    foldDisplayMode: FoldDisplayMode;

    /**
     * Width of the device, in px. The value is an integer greater than 0.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    physicalWidth: long;

    /**
     * Height of the device, in px. The value is an integer greater than 0.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    physicalHeight: long;
  }

  /**
   * Implements a Display instance, with attributes and APIs defined.
   *
   * Before calling any API in Display, you must use
   * [getAllDisplays()]{@link display.getAllDisplays(callback: AsyncCallback<Array<Display>>)} or
   * [getDefaultDisplaySync()]{@link display.getDefaultDisplaySync} to obtain a Display instance.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface Display {
    /**
     * Display ID, which is an integer greater than or equal to 0.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * Name of the display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Whether the display is alive. The value **true** indicates that the display is alive
     * and running properly, and **false** indicates the opposite.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    alive: boolean;

    /**
     * State of the display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    state: DisplayState;

    /**
     * Refresh rate of the display, in Hz. The value is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    refreshRate: int;

    /**
     * Clockwise rotation angle of the display.
     * The value **0** indicates that the display rotates clockwise by 0��, which is the standard display direction.
     * The value **1** indicates that the display rotates clockwise by 90��.
     * The value **2** indicates that the display rotates clockwise by 180��.
     * The value **3** indicates that the display rotates clockwise by 270��.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    rotation: int;

    /**
     * Width of the display, in px. The value is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Height of the display, in px. The value is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * Width of the available area, in px. The value is an integer greater than 0.
     * 
     * This API can be properly called on devices running OpenHarmony 7.0.0 or later.
     * For devices running versions earlier than OpenHarmony 7.0.0,
     * this API can be properly called on PCs/2-in-1 devices and tablets,
     * but does not work for other device types.
     * To obtain the width of the available area on the current device screen, you can use the width attribute.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    availableWidth: long;

    /**
     * eight of the available area, in px. The value is an integer greater than 0.
     * 
     * This API can be properly called on devices running OpenHarmony 7.0.0 or later.
     * For devices running versions earlier than OpenHarmony 7.0.0,
     * this API can be properly called on PCs/2-in-1 devices and tablets,
     * but does not work for other device types.
     * To obtain the height of the available area on the current device screen, you can use the height attribute.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    availableHeight: long;

    /**
     * Physical pixel density of the display, that is, the number of pixels per inch. The
     * value is a floating-point number, in px. Generally, the value is **160.0** or **480.0**. The actual value depends
     * on the optional values provided by the device in use.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    densityDPI: double;

    /**
     * Orientation of the display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    orientation: Orientation;

    /**
     * Logical pixel density of the display, which is the scaling coefficient between
     * physical pixels and logical pixels. The calculation method is as follows:<br>!
     * [densityPixels](figures/densityPixels.jpg)<br>The value is a floating-point number and is restricted by the range
     * of **densityDPI**. The value range is [0.5, 4.0]. Generally, the value is **1.0** or **3.0**. The actual value
     * depends on the density DPI provided by the device in use.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    densityPixels: double;

    /**
     * Scaling factor for fonts displayed on the display. The value must be a floating
     * -point number. Generally, the value is the same as that of **densityPixels**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    scaledDensity: double;

    /**
     * Exact physical pixels per inch of the display in the X axis. The value must be a
     * floating-point number.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    xDPI: double;

    /**
     * Exact physical pixels per inch of the display in the Y axis. The value must be a
     * floating-point number.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    yDPI: double;

    /**
     * All color spaces supported by the display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    colorSpaces: Array<colorSpaceManager.ColorSpace>;

    /**
     * All HDR formats supported by the display.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    hdrFormats: Array<hdrCapability.HDRFormat>;

    /**
     * Obtains the cutout information of the display. This API uses an asynchronous callback to return the result. You
     * are advised not to use the cutout area during application layout.
     *
     * @param { AsyncCallback<CutoutInfo> } callback - Callback used to return the **CutoutInfo** object.
     * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause:
     *     1. This display is abnormal.
     *     2. Internal task error.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCutoutInfo(callback: AsyncCallback<CutoutInfo>): void;

    /**
     * Obtains the cutout information of the display. This API uses a promise to return the result. You are advised not
     * to use the cutout area during application layout.
     *
     * @returns { Promise<CutoutInfo> } Promise used to return the CutoutInfo object.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCutoutInfo(): Promise<CutoutInfo>;

    /**
     * Checks whether this display contains an immersive window. This API uses an asynchronous callback to return the
     * result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. **true** if the display contains
     *     an immersive window, **false** otherwise.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    hasImmersiveWindow(callback: AsyncCallback<boolean>): void;

    /**
     * Checks whether this display contains an immersive window. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Promise used to return the result. **true** if the display contains an immersive
     *     window, **false** otherwise.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @since 11 dynamic
     * @since 23 static
     */
    hasImmersiveWindow(): Promise<boolean>;

    /**
     * Obtains the available area of the display of the current device. This API uses a promise to return the result.
     *
     * The available area is the space left for applications after the system UI (such as the status bar and dock bar)
     * is accounted for.
     * 
     * This API can be properly called on devices running OpenHarmony 7.0.0 or later.
     * For devices running versions earlier than OpenHarmony 7.0.0,
     * this API can be properly called on PCs/2-in-1 devices and tablets,
     * but does not work for other device types. To obtain the available area on the current device screen,
     * you can use the width and height attributes in Display.
     *
     * @returns { Promise<Rect> } Promise used to return the available area, which is a rectangle.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause:
     *     1. This display is abnormal.
     *     2. Internal task error.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    getAvailableArea(): Promise<Rect>;

    /**
     * Obtains the live crease region of the foldable device in the current display mode.
     *
     * @returns { FoldCreaseRegion } Live crease region of the device.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    getLiveCreaseRegion(): FoldCreaseRegion;

    /**
     * Subscribes to changes of the available area on the display of the current device. This callback function is
     * triggered when the screen rotates, the freeform mode is enabled or disabled, or the visibility of system
     * components such as the dock bar and status bar changes, and returns the available area information.
     * 
     * This API can be properly called on devices running OpenHarmony 7.0.0 or later.
     * For devices running versions earlier than OpenHarmony 7.0.0,
     * this API can be properly called on PCs/2-in-1 devices and tablets.
     * If being called on other device types, it does not take effect and no error is reported.
     *
     * @param { 'availableAreaChange' } type - Event type. The event **'availableAreaChange'** is triggered when the
     *     available area of the display changes.
     * @param { Callback<Rect> } callback - Callback used to return the new available area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'availableAreaChange', callback: Callback<Rect>): void;

    /**
     * Register the callback for available area changes.
     * 
     * This API can be properly called on devices running OpenHarmony 7.0.0 or later.
     * For devices running versions earlier than OpenHarmony 7.0.0,
     * this API can be properly called on PCs/2-in-1 devices and tablets.
     * If being called on other device types, it does not take effect and no error is reported.
     *
     * @param { Callback<Rect> } callback - Callback used to return the available area
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onAvailableAreaChange(callback: Callback<Rect>): void;

    /**
     * Unsubscribes from changes of the available area on the display of the current device.
     * 
     * This API can be properly called on devices running OpenHarmony 7.0.0 or later.
     * For devices running versions earlier than OpenHarmony 7.0.0,
     * this API can be properly called on PCs/2-in-1 devices and tablets.
     * If being called on other device types, it does not take effect and no error is reported.
     *
     * @param { 'availableAreaChange' } type - Event type. The event **'availableAreaChange'** is triggered when the
     *     available area of the display changes.
     * @param { Callback<Rect> } [callback] - Callback used to return the new available area. If this parameter is not
     *     specified, all subscriptions to the specified event are canceled.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'availableAreaChange', callback?: Callback<Rect>): void;

    /**
     * Unregister the callback for available area changes.
     * 
     * This API can be properly called on devices running OpenHarmony 7.0.0 or later.
     * For devices running versions earlier than OpenHarmony 7.0.0,
     * this API can be properly called on PCs/2-in-1 devices and tablets.
     * If being called on other device types, it does not take effect and no error is reported.
     *
     * @param { Callback<Rect> } [callback] - Unregister the callback function.
     *     If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    offAvailableAreaChange(callback?: Callback<Rect>): void;

    /**
     * Get current display capability, including foldstatus, displaymode, rotation, and orientation information.
     *
     * @returns { string } Indicates the current foldstatus, displaymode, rotation, and orientation information.
     * @throws { BusinessError } 801 - Capability not supported.Function getDisplayCapability can not work correctly due
     *     to limited device capabilities.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     * @test
     */
    getDisplayCapability(): string;

    /**
     * Display mode for screen content. The default value is **DisplaySourceMode.NONE**.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    sourceMode?: DisplaySourceMode;

    /**
     * Screen shape of the display. The default value is **RECTANGLE**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    screenShape?: ScreenShape;

    /**
     * X coordinate of the top-left corner of the display relative to the origin,
     * which is the top-left corner of the primary screen, measured in px. The value is an integer. The default value is
     * **0**. The actual value is returned only when **DisplaySourceMode** is set to **MAIN** or **EXTEND**; otherwise,
     * the default value **0** is returned.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    x?: long;

    /**
     * Y coordinate of the top-left corner of the display relative to the origin,
     * which is the top-left corner of the primary screen, measured in px. The value is an integer. The default value is
     * **0**. The actual value is returned only when **DisplaySourceMode** is set to **MAIN** or **EXTEND**; otherwise,
     * the default value **0** is returned.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    y?: long;

    /**
     * All refresh rates supported by the display, sorted in ascending order. The refresh rate is a positive integer,
     * in Hz. The default value is empty.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    supportedRefreshRates?: Array<int>;

    /**
     * Obtains the rounded corner information of the display. The rounded corner information of the display is
     * determined by the product configuration. Only physical screens that have a defined corner-radius value returns
     * rounded corner information; otherwise, an empty array is returned. Virtual displays always return an empty array.
     *
     * @returns { Array<RoundedCorner> } Rounded corner information.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    getRoundedCorner(): Array<RoundedCorner>;
  }

  /**
   * Enumerates the screen shapes of a display.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 18 dynamic
   * @since 23 static
   */
  enum ScreenShape {
    /**
     * The screen is in the shape of a circle.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    ROUND = 1,

    /**
     * The screen is in the shape of a rectangle.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    RECTANGLE = 0
  }

  /**
   * Sets the display mode of the foldable device, with the reason for the change specified.
   *
   * @param { FoldDisplayMode } mode - Display mode.
   * @param { string } reason - Reason for changing the display mode. If this parameter is not set, an empty string is
   *     used by default.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  function setFoldDisplayMode(mode: FoldDisplayMode, reason: string): void;

  /**
   * Enumerates the display modes for screen content.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum DisplaySourceMode {
    /**
     * The primary screen of the device is currently in use.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    MAIN = 1,

    /**
     * The device is currently not in use.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * The device is currently in extended display mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    EXTEND = 3,

    /**
     * The device is currently in mirror display mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
     * The device is currently in independent display mode.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    ALONE = 4
  }

  /**
   * Enumerates the types of corners on the screen.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 23 dynamic&static
   */
  enum CornerType {
    /**
     * Top-left corner of the screen.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    TOP_LEFT = 0,

    /**
     * Top-right corner of the screen.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    TOP_RIGHT = 1,

    /**
     * Bottom-right corner of the screen.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    BOTTOM_RIGHT  = 2,

    /**
     * Bottom-left corner of the screen.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    BOTTOM_LEFT  = 3
  }

  /**
   * Describes a single rounded corner on the screen.
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 23 dynamic&static
   */
  interface RoundedCorner {
    /**
     * Type of the rounded corner.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly type: CornerType;

    /**
     * Coordinates of the center point of the rounded corner.
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly position: Position;

    /**
     * The radius of round corner, measured in px.
     *
     * @type { int }
     * @readonly
     * @syscap  SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly radius: int;
  }
}

export default display;