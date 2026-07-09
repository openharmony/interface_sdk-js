/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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

import { AsyncCallback, Callback } from './@ohos.base';

import image from './@ohos.multimedia.image';

/**
 * The module implements basic screen management. You can use the APIs of this module to obtain a Screen object, listen
 * for screen changes, and create and destroy virtual screens.
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi Hide this for inner system use.
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace screen {
  /**
   * Obtains all screens. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<Screen>> } callback - Callback used to return all the Screen objects obtained.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllScreens(callback: AsyncCallback<Array<Screen>>): void;

  /**
   * Obtains all screens. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<Screen>> } callback - Callback used to return the result. If obtaining all screens is
   *     successful is successful, **err** is **undefined**, and the returned object is screen object set obtained.
   *     Otherwise, **err** is an error object.
   * @param { boolean } [isNeedUnused] - Indicates whether unused screen information is required.
   *     This parameter is optional. If not provided, the unused screen information will not be returned
   *     <br>Default value: false.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getAllScreens(callback: AsyncCallback<Array<Screen>>, isNeedUnused?: boolean): void;

  /**
   * Obtains all screens. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<Screen>> } Promise used to return all the Screen objects obtained.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllScreens(): Promise<Array<Screen>>;

  /**
   * Obtains all screens. This API uses a promise to return the result.
   *
   * @param { boolean } [isNeedUnused] - Indicates whether unused screen information is required.
   *     This parameter is optional. If not provided, the unused screen information will not be returned
   *     <br>Default value: false.
   * @returns { Promise<Array<Screen>> } Promise used to return all the Screen objects obtained.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getAllScreens(isNeedUnused?: boolean): Promise<Array<Screen>>;

  /**
   * Subscribes to events related to the screen state.
   *
   * @param { 'connect' | 'disconnect' | 'change' } eventType - Event type.<br>- **connect**: an event indicating that
   *     the screen is connected.<br>- **disconnect**: an event indicating that the screen is disconnected.<br>-
   *     **change**: an event indicating that the screen state changes.
   * @param { Callback<long> } callback - Callback used to return the screen ID, which is an integer.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function on(eventType: 'connect' | 'disconnect' | 'change', callback: Callback<long>): void;

  /**
   * Register the callback for screen connection events.
   *
   * @param { Callback<long> } callback Callback used to return the screen ID. This parameter is callable.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onConnect(callback: Callback<long>): void;

  /**
   * Register the callback for screen disconnection events.
   *
   * @param { Callback<long> } callback Callback used to return the screen ID. This parameter is callable.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onDisconnect(callback: Callback<long>): void;

  /**
   * Register the callback for screen change.
   *
   * @param { Callback<long> } callback Callback used to return the screen ID. This parameter is callable.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function onChange(callback: Callback<long>): void;

  /**
   * Unsubscribes from events related to the screen state.
   *
   * @param { 'connect' | 'disconnect' | 'change' } eventType - Event type.<br>- **connect**: an event indicating that
   *     the screen is connected.<br>- **disconnect**: an event indicating that the screen is disconnected.<br>-
   *     **change**: an event indicating that the screen state changes.
   * @param { Callback<long> } callback - Callback used to return the screen ID, which is an integer.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   */
  function off(eventType: 'connect' | 'disconnect' | 'change', callback?: Callback<long>): void;

  /**
   * Unregister the callback for screen connection events.
   *
   * @param { Callback<long> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offConnect(callback?: Callback<long>): void;

  /**
   * Unregister the callback for screen disconnection events.
   *
   * @param { Callback<long> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offDisconnect(callback?: Callback<long>): void;

  /**
   * Unregister the callback for screen changes.
   *
   * @param { Callback<long> } [callback] - Unregister the callback function.
   *     If not provided, all callbacks for the given event type will be removed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 23 static
   */
  function offChange(callback?: Callback<long>): void;

  /**
   * Sets the screen to extended mode. This API uses an asynchronous callback to return the result.
   *
   * @param { Array<ExpandOption> } options - Parameters for expanding the screen.
   * @param { AsyncCallback<long> } callback - Callback used to return the group ID of the extended screens, where the
   *     ID is an integer.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamiconly
   * @deprecated since 20
   */
  function makeExpand(options:Array<ExpandOption>, callback: AsyncCallback<long>): void;

  /**
   * Sets the screen to extended mode. This API uses a promise to return the result.
   *
   * @param { Array<ExpandOption> } options - Parameters for expanding the screen.
   * @returns { Promise<long> } Promise used to return the group ID of the extended screens, where the ID is an integer.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamiconly
   * @deprecated since 20
   */
  function makeExpand(options:Array<ExpandOption>): Promise<long>;

  /**
   * Stops extended mode. This API uses an asynchronous callback to return the result.
   *
   * @param { Array<long> } expandScreen - IDs of the extended screens. Each ID is an integer. The size of the
   *     **expandScreen** array cannot exceed 1000.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If extended mode is stopped, **err**
   *     is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 20
   */
  function stopExpand(expandScreen:Array<long>, callback: AsyncCallback<void>): void;

  /**
   * Stops extended mode. This API uses a promise to return the result.
   *
   * @param { Array<long> } expandScreen - IDs of the extended screens. Each ID is an integer. The size of the
   *     **expandScreen** array cannot exceed 1000.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamiconly
   * @deprecated since 20
   */
  function stopExpand(expandScreen:Array<long>): Promise<void>;

  /**
   * Sets the screen to mirror mode. This API uses an asynchronous callback to return the result.
   *
   * @param { long } mainScreen - ID of the primary screen. The ID must be an integer.
   * @param { Array<long> } mirrorScreen - Array of IDs of secondary screens. Each ID must be an integer.
   * @param { AsyncCallback<long> } callback - Callback used to return the group ID of the secondary screens, where the
   *     ID is an integer.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function makeMirror(mainScreen:long, mirrorScreen:Array<long>, callback: AsyncCallback<long>): void;

  /**
   * Sets the screen to mirror mode. This API uses a promise to return the result.
   *
   * @param { long } mainScreen - ID of the primary screen. The ID must be an integer.
   * @param { Array<long> } mirrorScreen - Array of IDs of secondary screens. Each ID must be an integer.
   * @returns { Promise<long> } Promise used to return the group ID of the secondary screens, where the ID is an
   *     integer.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function makeMirror(mainScreen:long, mirrorScreen:Array<long>): Promise<long>;

  /**
   * Sets a rectangle on the screen to mirror mode. This API uses a promise to return the result. After this API is
   * called, you are advised not to rotate or fold the screen further. Otherwise, the mirrored content may be abnormal.
   *
   * @param { long } mainScreen - ID of the primary screen. The ID must be a positive integer.
   * @param { Array<long> } mirrorScreen - Array of IDs of secondary screens. Each ID must be a positive integer.
   * @param { Rect } mainScreenRegion - Rectangle on the primary screen to be mirrored.
   * @returns { Promise<long> } Promise used to return the group ID of the secondary screens, where the ID is a positive
   *     integer.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  function makeMirrorWithRegion(mainScreen: long, mirrorScreen: Array<long>, mainScreenRegion: Rect): Promise<long>;

  /**
   * Stops mirror mode. This API uses an asynchronous callback to return the result.
   *
   * @param { Array<long> } mirrorScreen - Array of IDs of secondary screens. Each ID must be an integer. The size of
   *     the **mirrorScreen** array cannot exceed 1000.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If mirror mode is stopped, **err** is
   *     **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function stopMirror(mirrorScreen:Array<long>, callback: AsyncCallback<void>): void;

  /**
   * Stops mirror mode. This API uses a promise to return the result.
   *
   * @param { Array<long> } mirrorScreen - Array of IDs of secondary screens. Each ID must be an integer. The size of
   *     the **mirrorScreen** array cannot exceed 1000.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  function stopMirror(mirrorScreen:Array<long>): Promise<void>;

  /**
   * Creates a virtual screen. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { VirtualScreenOption } options - Virtual screen parameters.
   * @param { AsyncCallback<Screen> } callback - Callback used to return the created virtual screen.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function createVirtualScreen(options:VirtualScreenOption, callback: AsyncCallback<Screen>): void;

  /**
   * Creates a virtual screen. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { VirtualScreenOption } options - Virtual screen parameters.
   * @returns { Promise<Screen> } Promise used to return the created virtual screen.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function createVirtualScreen(options:VirtualScreenOption): Promise<Screen>;

  /**
   * Destroys a virtual screen. This API uses an asynchronous callback to return the result.
   *
   * @param { long } screenId - Screen ID. The value must be an integer.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the virtual screen is destroyed,
   *     **err** is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400002 - Unauthorized operation.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function destroyVirtualScreen(screenId:long, callback: AsyncCallback<void>): void;

  /**
   * Destroys a virtual screen. This API uses a promise to return the result.
   *
   * @param { long } screenId - Screen ID. The value must be an integer.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400002 - Unauthorized operation.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function destroyVirtualScreen(screenId:long): Promise<void>;

  /**
   * Sets a surface for a virtual screen. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { long } screenId - Screen ID. The value must be an integer.
   * @param { string } surfaceId - Surface ID of the virtual screen. The value can be customized. You can specify the
   *     surface ID of an existing surface.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the virtual screen surface is
   *     successfully set, **err** is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setVirtualScreenSurface(screenId:long, surfaceId: string, callback: AsyncCallback<void>): void;

  /**
   * Sets a surface for a virtual screen. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { long } screenId - Screen ID. The value must be an integer.
   * @param { string } surfaceId - Surface ID of the virtual screen. The value can be customized. You can specify the
   *     surface ID of an existing surface.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setVirtualScreenSurface(screenId:long, surfaceId: string): Promise<void>;

  /**
   * Checks whether auto rotate is locked. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If **true** is returned, auto
   *     rotate is locked. If **false** is returned, auto rotate is unlocked.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isScreenRotationLocked(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether auto rotate is locked. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. If **true** is returned, auto rotate is locked. If
   *     **false** is returned, auto rotate is unlocked.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isScreenRotationLocked(): Promise<boolean>;

  /**
   * Sets whether to lock auto rotate. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } isLocked - Whether to lock auto rotate. **true** to lock; **false** otherwise.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setScreenRotationLocked(isLocked:boolean, callback: AsyncCallback<void>): void;

  /**
   * Sets whether to lock auto rotate. This API uses a promise to return the result.
   *
   * @param { boolean } isLocked - Whether to lock auto rotate. **true** to lock; **false** otherwise.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     <br>2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function setScreenRotationLocked(isLocked:boolean): Promise<void>;

  /**
   * Sets the display mode (mirror or extend) of the secondary screen. This API uses a promise to return the result. If
   * both **primaryScreenId** and **secondaryScreenId** are set to **0**, the content is displayed only on the secondary
   * screen.
   *
   * @param { long } primaryScreenId - ID of the primary screen. The value must be a non-negative integer. Floating-
   *     point numbers are rounded down.
   * @param { long } secondaryScreenId - ID of the secondary screen. The value must be a non-negative integer. Floating-
   *     point numbers are rounded down.
   * @param { MultiScreenMode } secondaryScreenMode - Display mode of the secondary screen.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 13 dynamic
   * @since 23 static
   */
  function setMultiScreenMode(primaryScreenId: long, secondaryScreenId: long,
    secondaryScreenMode: MultiScreenMode): Promise<void>;

  /**
   * Sets the positions of the primary and secondary screens in extend mode. This API uses a promise to return the
   * result.
   *
   * @param { MultiScreenPositionOptions } mainScreenOptions - Position of the primary screen.
   * @param { MultiScreenPositionOptions } secondaryScreenOptions - Position of the secondary screen.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 13 dynamic
   * @since 23 static
   */
  function setMultiScreenRelativePosition(mainScreenOptions: MultiScreenPositionOptions,
    secondaryScreenOptions: MultiScreenPositionOptions): Promise<void>;

  /**
   * Resizes the virtual screen. This API uses a promise to return the result.
   *
   * @param { long } screenId - ID of the virtual screen to be resized. The value is a positive integer within the range
   *     of [1000, 2147483647]. If the value is not within the valid range, error code 1400004 is returned.
   * @param { long } width - New width of the virtual screen, in px. The value is a positive integer within the range of
   *     [1, 65536]. If the value is not within the valid range, error code 1400004 is returned.
   * @param { long } height - New height of the virtual screen, in px. The value is a positive integer within the range
   *     of [1, 65536]. If the value is not within the valid range, error code 1400004 is returned.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Function can not work because the current device does
   *     not support this ability.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 24 dynamic&static
   */
  function resizeVirtualScreen(screenId:long, width: long, height: long): Promise<void>;

  /**
   * Enumerates the display modes of secondary screens.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 13 dynamic
   * @since 23 static
   */
  enum MultiScreenMode {

    /**
     * Mirror mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 13 dynamic
     * @since 23 static
     */
    SCREEN_MIRROR = 0,

    /**
     * Extend mode.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 13 dynamic
     * @since 23 static
     */
    SCREEN_EXTEND = 1
  }

  /**
   * Describes the screen position information.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 13 dynamic
   * @since 23 static
   */
  interface MultiScreenPositionOptions {
    /**
     * Screen ID. The value must be a positive integer. Any non-positive integer values will be considered invalid and
     * result in an error.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 13 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * Start X coordinate of the screen. The top-left vertex of the bounding rectangle formed by the two screens is used
     * as the origin, with the positive direction being rightwards. The value must be a positive integer. Any non-
     * positive integer values will be considered invalid and result in an error.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 13 dynamic
     * @since 23 static
     */
    startX: long;

    /**
     * Start Y coordinate of the screen. The top-left vertex of the bounding rectangle formed by the two screens is used
     * as the origin, with the positive direction being downwards. The value must be a positive integer. Any non-
     * positive integer values will be considered invalid and result in an error.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 13 dynamic
     * @since 23 static
     */
    startY: long;
  }

  /**
   * Defines the parameters for expanding a screen.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface ExpandOption {
    /**
     * Screen ID. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    screenId: long;

    /**
     * Start X coordinate of the screen. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    startX: long;

    /**
     * Start Y coordinate of the screen. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    startY: long;
  }

  /**
   * Defines virtual screen parameters.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface VirtualScreenOption {
    /**
     * Name of a virtual screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Width of the virtual screen, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Height of the virtual screen, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * Density of the virtual screen, in px. The value must be a floating-point number.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    density: double;

    /**
     * Surface ID of the virtual screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    surfaceId: string;

    /**
     * Whether the virtual screen is focusable. **true** if focusable; **false** otherwise. The default value is
     * **true**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 22 dynamic
     * @since 23 static
     */
    supportsFocus?: boolean;

    /**
     * User ID of the virtual screen, which is an integer. The default value is **-1**.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    userId?: int;
  }

  /**
   * Enumerates the sources of the content displayed on the screen.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum ScreenSourceMode {
    /**
     * Content from the primary screen (default).
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SCREEN_MAIN = 0,

    /**
     * Content from a mirror screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SCREEN_MIRROR = 1,

    /**
     * Content from an extended screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SCREEN_EXTEND = 2,

    /**
     * The source is unspecified.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SCREEN_ALONE = 3
  }

  /**
   * Defines the [physical screen](docroot://displaymanager/display-terminology.md#physical-screen) instance.
   *
   * Before calling any API in Screen, you must use
   * [getAllScreens()]{@link screen.getAllScreens(callback: AsyncCallback<Array<Screen>>)} or
   * [createVirtualScreen()]{@link screen.createVirtualScreen(options:VirtualScreenOption, callback: AsyncCallback<Screen>)}
   * to obtain a Screen instance.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface Screen {
    /**
     * Screen ID, which is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly id: long;

    /**
     * Screen port ID, which is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 21 dynamic
     * @since 23 static
     */
    readonly rsId: long;

    /**
     * ID of the group to which a screen belongs, where the ID is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly parent: long;

    /**
     * Mode set supported by the screen.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly supportedModeInfo: Array<ScreenModeInfo>;

    /**
     * Index of the active screen mode. The current value and value range of this parameter vary according to the
     * screen resolution, refresh rate, and device hardware. The value is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly activeModeIndex: long;

    /**
     * Screen orientation.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly orientation: Orientation;

    /**
     * Source mode of the screen
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    readonly sourceMode: ScreenSourceMode;

    /**
     * Sets the screen orientation. This API uses an asynchronous callback to return the result. The screen orientation
     * changes only when the specified orientation complies with the
     * [application rotation policy](docroot://quick-start/module-configuration-file.md#abilities) (you can configure
     * the application rotation policy by setting the **orientation** field in the **abilities** tag in the
     * **module.json5** file). If the specified orientation does not comply with the application rotation policy, the
     * screen orientation does not change and no exception is thrown.
     *
     * @param { Orientation } orientation - Screen orientation. The value must be an enumerated value of
     *     **Orientation**.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the screen orientation is
     *     successfully set, **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setOrientation(orientation: Orientation, callback: AsyncCallback<void>): void;

    /**
     * Sets the screen orientation. This API uses a promise to return the result. The screen orientation changes only
     * when the specified orientation complies with the
     * [application rotation policy](docroot://quick-start/module-configuration-file.md#abilities) (you can configure
     * the application rotation policy by setting the **orientation** field in the **abilities** tag in the
     * **module.json5** file). If the specified orientation does not comply with the application rotation policy, the
     * screen orientation does not change and no exception is thrown.
     *
     * @param { Orientation } orientation - Screen orientation. The value must be an enumerated value of
     *     **Orientation**.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setOrientation(orientation: Orientation): Promise<void>;

    /**
     * Set the orientation of the screen
     *
     * @param { Orientation } orientation - Screen orientation. orientation value must from enum Orientation.
     * @param { OrientationOptions } [orientationOptions] - Options of setting orientation.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause: The screen is not an external
     *     display in extended mode.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setOrientation(orientation: Orientation, orientationOptions?: OrientationOptions): Promise<void>;

    /**
     * Sets the active mode of the screen. This API uses an asynchronous callback to return the result.
     *
     * @param { long } modeIndex - Index of the mode to set. The current value and value range of this parameter vary
     *     according to the screen resolution, refresh rate, and device hardware. The value must be an integer. The
     *     index is the mode ID in the [ScreenModeInfo]{@link screen.ScreenModeInfo} property of the screen.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the active mode is successfully
     *     set, **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setScreenActiveMode(modeIndex: long, callback: AsyncCallback<void>): void;

    /**
     * Sets the active mode of the screen. This API uses a promise to return the result.
     *
     * @param { long } modeIndex - Index of the mode to set. The current value and value range of this parameter vary
     *     according to the screen resolution, refresh rate, and device hardware. The value must be an integer.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setScreenActiveMode(modeIndex: long): Promise<void>;

    /**
     * Sets the pixel density of the screen. This API uses an asynchronous callback to return the result.
     *
     * @param { double } densityDpi - Pixel density. The value must be an integer in the range [80, 640].
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the pixel density is
     *     successfully set, **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setDensityDpi(densityDpi: double, callback: AsyncCallback<void>): void;

    /**
     * Sets the pixel density of the screen. This API uses a promise to return the result.
     *
     * @param { double } densityDpi - Pixel density. The value must be an integer in the range [80, 640].
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    setDensityDpi(densityDpi: double): Promise<void>;

    /**
     * Serial number of the extended screen. By default, the value is an empty string.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 15 dynamic
     * @since 23 static
     */
    readonly serialNumber?: string;

    /**
     * Physical pixel density of the screen, that is, the number of pixels per inch.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly densityDpi?: double;

    /**
     * The screen is in use
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly isInUse?: boolean;
  }

  /**
   * Enumerates the screen orientations.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum Orientation {
    /**
     * Unspecified. The screen orientation is determined by the system.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * Vertical.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    VERTICAL = 1,

    /**
     * Horizontal.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    HORIZONTAL = 2,

    /**
     * Reverse vertical.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REVERSE_VERTICAL = 3,

    /**
     * Reverse horizontal.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REVERSE_HORIZONTAL = 4
  }

  /**
   * The parameter of setting orientation
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface OrientationOptions {
    /**
     * Whether to need animation.
     * The value true means rotating the screen with animation,
     *     while false means rotating the screen without animation.
     *
     * @default true
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    needAnimation?: boolean;

    /**
     * Whether to ignore rotation lock.
     * The value true means allowing the screen to rotate even if some system windows lock screen rotation,
     *     while false means preventing the screen from rotating when any system windows lock it.
     *
     * @default false
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ignoreRotationLock?: boolean;
  }

  /**
   * Defines the screen mode information.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface ScreenModeInfo {
    /**
     * Screen ID. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * Width of the screen, in px. The value is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Height of the screen, in px. The value is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * Refresh rate of the screen, in hz. The value is an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    refreshRate: int;
  }

  /**
   * Describes the rectangle information.
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * X coordinate of the vertex in the top-left corner of the rectangle, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 19 dynamic
     * @since 23 static
     */
    left: long;

    /**
     * Y coordinate of the vertex in the top-left corner of the rectangle, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 19 dynamic
     * @since 23 static
     */
    top: long;

    /**
     * Width of the rectangle, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 19 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * Height of the rectangle, in px. The value must be an integer.
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 19 dynamic
     * @since 23 static
     */
    height: long;
  }

  /**
   * Sets a privacy mask image for the screen. This API uses a promise to return the result.
   *
   * @param { long } screenId - Screen ID. The value must be a positive integer.
   * @param { image.PixelMap } [image] - Privacy mask image. If no value is passed, the default privacy mask image is
   *     used.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  function setScreenPrivacyMaskImage(screenId: long, image?: image.PixelMap): Promise<void>;

  /**
   * Sets the screen to independent display mode. This API uses a promise to return the result.
   *
   * @param { Array<long> } uniqueScreen - Arry of independent screen IDs. Each ID must be an integer greater than 0;
   *     otherwise, error code 401 is returned.
   * @returns { Promise<Array<long>> } Promise used to return the independent screen IDs, where each ID is an integer
   *     greater than 0.
   * @throws { BusinessError } 202 - Permission verification failed, non-system application uses system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   *     Failed to call the API due to limited device capabilities.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 18 dynamic
   * @since 23 static
   */
  function makeUnique(uniqueScreen: Array<long>): Promise<Array<long>>;
}

export default screen;