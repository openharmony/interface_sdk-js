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
 * 本模块提供管理屏幕的一些基础能力，包括获取屏幕对象，监听屏幕变化，创建和销毁虚拟屏幕等。
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @systemapi Hide this for inner system use.
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace screen {
  /**
   * 获取所有的屏幕，使用callback异步回调。
   *
   * @param { AsyncCallback<Array<Screen>> } callback - 回调函数。返回当前获取的屏幕对象集合。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllScreens(callback: AsyncCallback<Array<Screen>>): void;

  /**
   * 获取所有的屏幕，使用Promise异步回调。
   *
   * @returns { Promise<Array<Screen>> } Promise对象。返回当前获取的屏幕对象集合。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllScreens(): Promise<Array<Screen>>;

  /**
   * 开启屏幕状态变化的监听。
   *
   * @param { 'connect' | 'disconnect' | 'change' } eventType - 监听事件。<br/>-eventType为"connect"表示屏幕连接事件。<br/>-eventType为"
   *     disconnect"表示断开屏幕连接事件。<br/>-eventType为"change"表示屏幕状态改变事件。
   * @param { Callback<long> } callback - 回调函数。返回屏幕的id，该参数为整数。
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
   * 关闭屏幕状态变化的监听。
   *
   * @param { 'connect' | 'disconnect' | 'change' } eventType - 监听事件。<br/>-eventType为"connect"表示屏幕连接事件。<br/>-eventType为"
   *     disconnect"表示断开屏幕连接事件。<br/>-eventType为"change"表示屏幕状态改变事件。
   * @param { Callback<long> } callback - 回调函数。返回屏幕的id，该参数为整数。
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
   * 将屏幕设置为扩展模式，使用callback异步回调。
   *
   * @param { Array<ExpandOption> } options - 设置扩展屏幕的参数集合。
   * @param { AsyncCallback<long> } callback - 回调函数。返回扩展屏幕的群组id，其中id为整数。
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
   * 将屏幕设置为扩展模式，使用Promise异步回调。
   *
   * @param { Array<ExpandOption> } options - 设置扩展屏幕的参数集合。
   * @returns { Promise<long> } Promise对象。返回扩展屏幕的群组id，其中id为整数。
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
   * 停止屏幕的扩展模式，使用callback异步回调。
   *
   * @param { Array<long> } expandScreen - 扩展屏幕ID集合，其中ID为整数。 expandScreen数组大小不应超过1000。
   * @param { AsyncCallback<void> } callback - 回调函数。当停止屏幕扩展模式成功，err为undefined，否则为错误对象。
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
   * 停止屏幕的扩展模式，使用Promise异步回调。
   *
   * @param { Array<long> } expandScreen - 扩展屏幕ID集合，其中ID为整数。expandScreen数组大小不应超过1000。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 将屏幕设置为镜像模式，使用callback异步回调。
   *
   * @param { long } mainScreen - 主屏幕ID，该参数仅支持整数输入。
   * @param { Array<long> } mirrorScreen - 镜像屏幕ID集合，其中ID应为整数。
   * @param { AsyncCallback<long> } callback - 回调函数。返回镜像屏幕的群组id，其中id为整数。
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
   * 将屏幕设置为镜像模式，使用Promise异步回调。
   *
   * @param { long } mainScreen - 主屏幕ID，该参数仅支持整数输入。
   * @param { Array<long> } mirrorScreen - 镜像屏幕ID集合。其中ID应为整数。
   * @returns { Promise<long> } Promise对象。返回镜像屏幕的群组id，其中id为整数。
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
   * 将屏幕的某一矩形区域设置为镜像模式，使用Promise异步回调。调用该接口后，不建议再进行屏幕的旋转/折叠，否则可能导致镜像内容异常。
   *
   * @param { long } mainScreen - 主屏幕ID，该参数仅支持正整数输入。
   * @param { Array<long> } mirrorScreen - 镜像屏幕ID集合。其中ID应为正整数。
   * @param { Rect } mainScreenRegion - 主屏创建镜像的矩形区域。
   * @returns { Promise<long> } Promise对象。返回镜像屏幕的群组id，其中id为正整数。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  function makeMirrorWithRegion(mainScreen: long, mirrorScreen: Array<long>, mainScreenRegion: Rect): Promise<long>;

  /**
   * 停止屏幕的镜像模式，使用callback异步回调。
   *
   * @param { Array<long> } mirrorScreen - 镜像屏幕ID集合，其中ID应为整数。 mirrorScreen数组大小不应超过1000。
   * @param { AsyncCallback<void> } callback - 回调函数。当停止屏幕镜像模式成功，err为undefined，否则为错误对象。
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
   * 停止屏幕的镜像模式，使用Promise异步回调。
   *
   * @param { Array<long> } mirrorScreen - 镜像屏幕ID集合，其中ID应为整数。mirrorScreen数组大小不应超过1000。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 创建虚拟屏幕，使用callback异步回调。
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { VirtualScreenOption } options - 用于创建虚拟屏幕的参数。
   * @param { AsyncCallback<Screen> } callback - 回调函数，返回创建的虚拟屏幕对象。
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
   * 创建虚拟屏幕，使用Promise异步回调。
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { VirtualScreenOption } options - 用于创建虚拟屏幕的参数。
   * @returns { Promise<Screen> } Promise对象。返回创建的虚拟屏幕对象。
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
   * 销毁虚拟屏幕，使用callback异步回调。
   *
   * @param { long } screenId - 屏幕的id，该参数仅支持整数输入。
   * @param { AsyncCallback<void> } callback - 回调函数。当销毁虚拟屏幕成功，err为undefined，否则为错误对象。
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
   * 销毁虚拟屏幕，使用Promise异步回调。
   *
   * @param { long } screenId - 屏幕的id，该参数仅支持整数输入。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 设置虚拟屏幕的surface，使用callback异步回调。
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { long } screenId - 屏幕的id，该参数仅支持整数输入。
   * @param { string } surfaceId - 代表虚拟屏幕的surface标识符，surfaceId值可自行定义，由用户指定某一实际存在的surface对应的surfaceId。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置虚拟屏幕surface成功，err为undefined，否则为错误对象。
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
   * 设置虚拟屏幕的surface，使用Promise异步回调。
   *
   * @permission ohos.permission.CAPTURE_SCREEN
   * @param { long } screenId - 屏幕的id，该参数仅支持整数输入。
   * @param { string } surfaceId - 代表虚拟屏幕的surface标识符，surfaceId值可自行定义，由用户指定某一实际存在的surface对应的surfaceId。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 查询当前自动转屏是否锁定，使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示当前自动转屏处于锁定状态；返回false表示当前自动转屏不处于锁定状态。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isScreenRotationLocked(callback: AsyncCallback<boolean>): void;

  /**
   * 查询当前自动转屏是否锁定，使用Promise异步回调。
   *
   * @returns { Promise<boolean> } Promise对象。返回true表示当前自动转屏处于锁定状态；返回false表示当前自动转屏不处于锁定状态。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  function isScreenRotationLocked(): Promise<boolean>;

  /**
   * 设置自动转屏开关是否锁定，使用callback异步回调。
   *
   * @param { boolean } isLocked - 自动转屏开关是否锁定。true为锁定，false为未锁定。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置自动转屏是否锁定成功，err为undefined，否则为错误对象。
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
   * 设置自动转屏开关是否锁定，使用Promise异步回调。
   *
   * @param { boolean } isLocked - 自动转屏开关是否锁定。true为锁定，false为未锁定。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 设置扩展屏幕的显示模式（镜像/扩展），使用Promise异步回调。primaryScreenId和secondaryScreenId均为0时，仅在扩展屏显示。
   *
   * @param { long } primaryScreenId - 主屏的id，该参数应为非负整数。如果输入的数字包含小数部分，向下取整。
   * @param { long } secondaryScreenId - 扩展屏幕的id，该参数应为非负整数。如果输入的数字包含小数部分，向下取整。
   * @param { MultiScreenMode } secondaryScreenMode - 扩展屏幕的显示模式。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 仅在扩展模式下，设置主屏和扩展屏幕的位置信息，使用Promise异步回调。
   *
   * @param { MultiScreenPositionOptions } mainScreenOptions - 主屏的位置信息。
   * @param { MultiScreenPositionOptions } secondaryScreenOptions - 扩展屏幕的位置信息。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 修改指定虚拟屏的尺寸，使用Promise异步回调。
   *
   * @param { long } screenId - 要修改的虚拟屏的屏幕ID，取值范围为[1000, 2147483647]的正整数，超出有效范围时返回错误码1400004。
   * @param { long } width - 虚拟屏的新宽度，单位为px，取值范围为[1, 65536]的正整数，超出有效范围时返回错误码1400004。
   * @param { long } height - 虚拟屏的新高度，单位为px，取值范围为[1, 65536]的正整数，超出有效范围时返回错误码1400004。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 屏幕模式枚举。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 13 dynamic
   * @since 23 static
   */
  enum MultiScreenMode {

    /**
     * 表示屏幕为镜像模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 13 dynamic
     * @since 23 static
     */
    SCREEN_MIRROR = 0,

    /**
     * 表示屏幕为扩展模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 13 dynamic
     * @since 23 static
     */
    SCREEN_EXTEND = 1
  }

  /**
   * 屏幕位置信息。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 13 dynamic
   * @since 23 static
   */
  interface MultiScreenPositionOptions {
    /**
     * 屏幕的ID，该参数应为正整数，非正整数会作为非法参数报错。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 13 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * 屏幕的起始X轴坐标。以两块屏幕外接矩形的左上顶点为原点，向右为正方向。该参数应为正整数，非正整数会作为非法参数报错。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 13 dynamic
     * @since 23 static
     */
    startX: long;

    /**
     * 屏幕的起始Y轴坐标。以两块屏幕外接矩形的左上顶点为原点，向下为正方向。该参数应为正整数，非正整数会作为非法参数报错。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 13 dynamic
     * @since 23 static
     */
    startY: long;
  }

  /**
   * 扩展屏幕的参数。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface ExpandOption {
    /**
     * 屏幕的id，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    screenId: long;

    /**
     * 屏幕的起始X轴坐标，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    startX: long;

    /**
     * 屏幕的起始Y轴坐标，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    startY: long;
  }

  /**
   * 创建虚拟屏幕的参数。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface VirtualScreenOption {
    /**
     * 指定虚拟屏幕的名称。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 指定虚拟屏幕的宽度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * 指定虚拟屏幕的高度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * 指定虚拟屏幕的密度，该参数为浮点数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    density: double;

    /**
     * 指定虚拟屏幕的surfaceId。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    surfaceId: string;

    /**
     * 指定虚拟屏幕是否可获得焦点。true表示可获焦，false表示不可获焦，默认值为true。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 22 dynamic
     * @since 23 static
     */
    supportsFocus?: boolean;

    /**
     * 指定虚拟屏幕的用户ID，该参数为整数。默认值为-1。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    userId?: int;
  }

  /**
   * 屏幕显示内容来源模式枚举。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 10 dynamic
   * @since 23 static
   */
  enum ScreenSourceMode {
    /**
     * 表示屏幕为默认主屏。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SCREEN_MAIN = 0,

    /**
     * 表示屏幕内容来自镜像。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SCREEN_MIRROR = 1,

    /**
     * 表示屏幕内容来自扩展。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SCREEN_EXTEND = 2,

    /**
     * 表示屏幕为未指定来源。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    SCREEN_ALONE = 3
  }

  /**
   * [物理屏](docroot://displaymanager/display-terminology.md#物理屏)屏幕实例。
   * 
   * 下列API示例中都需先使用[getAllScreens()]{@link screen.getAllScreens(callback: AsyncCallback<Array<Screen>>)}、
   * [createVirtualScreen()]{@link screen.createVirtualScreen(options:VirtualScreenOption, callback: AsyncCallback<Screen>)}
   * 中的任一方法获取到Screen实例，再通过此实例调用对应方法。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface Screen {
    /**
     * 屏幕的id，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly id: long;

    /**
     * 屏幕端口的id，该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 21 dynamic
     * @since 23 static
     */
    readonly rsId: long;

    /**
     * 屏幕所属群组的id，该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly parent: long;

    /**
     * 屏幕支持的模式集合。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly supportedModeInfo: Array<ScreenModeInfo>;

    /**
     * 当前屏幕所处模式索引。模式索引的当前值和值的范围，会根据屏幕当前分辨率、刷新率和设备硬件差异产生变化。该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly activeModeIndex: long;

    /**
     * 屏幕方向。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    readonly orientation: Orientation;

    /**
     * 屏幕来源模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 10 dynamic
     * @since 23 static
     */
    readonly sourceMode: ScreenSourceMode;

    /**
     * 设置屏幕方向，使用callback异步回调。当设置的方向符合[应用旋转策略](docroot://quick-start/module-configuration-file.md#abilities标签)（可通过配置
     * module.json5文件中abilities标签的orientation字段设置应用旋转策略）时，屏幕方向才会发生改变；当设置方向不符合应用旋转策略时，屏幕方向不会发生变化，且接口不会抛异常。
     *
     * @param { Orientation } orientation - 屏幕方向。orientation值必须来自Orientation枚举方向。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置屏幕方向成功，err为undefined，否则为错误对象。
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
     * 设置屏幕方向，使用Promise异步回调。当设置的方向符合[应用旋转策略](docroot://quick-start/module-configuration-file.md#abilities标签)（可通过配置
     * module.json5文件中abilities标签的orientation字段设置应用旋转策略）时，屏幕方向才会发生改变；当设置方向不符合应用旋转策略时，屏幕方向不会发生变化，且接口不会抛异常。
     *
     * @param { Orientation } orientation - 屏幕方向。orientation值必须来自Orientation枚举方向。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 设置屏幕方向
     *
     * @param { Orientation } orientation - 屏幕方向。方向值必须来自方向枚举值。
     * @param { OrientationOptions } [orientationOptions] - Options of setting orientation.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setOrientation(orientation: Orientation, orientationOptions?: OrientationOptions): Promise<void>;

    /**
     * 设置屏幕当前显示模式，使用callback异步回调。
     *
     * @param { long } modeIndex - 模式索引。模式索引的当前值和值的范围，会根据屏幕当前分辨率、刷新率和设备硬件差异产生变化，该参数仅支持整数输入。索引为screen中
     *     [ScreenModeInfo]{@link screen.ScreenModeInfo}属性的模式id。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置屏幕当前显示模式成功，err为undefined，否则为错误对象。
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
     * 设置屏幕当前显示模式，使用Promise异步回调。
     *
     * @param { long } modeIndex - 模式索引。模式索引的当前值和值的范围，会根据屏幕当前分辨率、刷新率和设备硬件差异产生变化，该参数仅支持整数输入。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 设置屏幕的像素密度，使用callback异步回调。
     *
     * @param { double } densityDpi - 像素密度。支持的输入范围为[80, 640]，该参数仅支持整数输入。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置屏幕的像素密度成功，err为undefined，否则为错误对象。
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
     * 设置屏幕的像素密度，使用Promise异步回调。
     *
     * @param { double } densityDpi - 像素密度。支持的输入范围为[80, 640]，该参数仅支持整数输入。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 扩展屏幕的序列号，默认返回为空字符串。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 15 dynamic
     * @since 23 static
     */
    readonly serialNumber?: string;

    /**
     * 屏幕类型
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    readonly screenType?: ScreenType;
  }

  /**
   * 屏幕类型枚举
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.1.0 dynamic&static
   */
  enum ScreenType {
    /**
     * 物理集成到设备中的内置屏幕
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    BUILT_IN = 0,

    /**
     * 通过有线接口连接的外部物理显示屏
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    EXTERNAL = 1,

    /**
     * 由软件创建的虚拟显示屏，通常用于投屏、屏幕录制或多屏协作
     *
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    VIRTUAL = 2
  }

  /**
   * 屏幕方向枚举。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  enum Orientation {
    /**
     * 表示未指定屏幕方向，由系统指定。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * 表示指定屏幕为垂直方向。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    VERTICAL = 1,

    /**
     * 表示指定屏幕为水平方向。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    HORIZONTAL = 2,

    /**
     * 表示指定屏幕为反向垂直方向。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REVERSE_VERTICAL = 3,

    /**
     * 表示指定屏幕为反向水平方向。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    REVERSE_HORIZONTAL = 4
  }

  /**
   * 设置旋转行为的参数
   *
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface OrientationOptions {
    /**
     * 是否需要动效
     *
     * @default true
     * @syscap SystemCapability.Window.SessionManager
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    needAnimation?: boolean;

    /**
     * 是否忽略旋转锁定
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
   * 屏幕显示模式信息。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 9 dynamic
   * @since 23 static
   */
  interface ScreenModeInfo {
    /**
     * 屏幕的id，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * 屏幕的宽度，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * 屏幕的高度，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * 屏幕的刷新率，单位为hz，该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 9 dynamic
     * @since 23 static
     */
    refreshRate: int;
  }

  /**
   * 矩形信息。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * 矩形左上角顶点的X轴坐标，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 19 dynamic
     * @since 23 static
     */
    left: long;

    /**
     * 矩形左上角顶点的Y轴坐标，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 19 dynamic
     * @since 23 static
     */
    top: long;

    /**
     * 矩形的宽度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 19 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * 矩形的高度，单位为px，该参数应为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @systemapi Hide this for inner system use.
     * @since 19 dynamic
     * @since 23 static
     */
    height: long;
  }

  /**
   * 设置屏幕的隐私蒙版图片，使用Promise异步回调。
   *
   * @param { long } screenId - 屏幕的id，该参数仅支持正整数输入。
   * @param { image.PixelMap } [image] - 屏幕的隐私蒙版图片，不传入则使用默认隐私蒙版图片。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 将屏幕设置为异源模式，使用Promise异步回调。
   *
   * @param { Array<long> } uniqueScreen - 异源屏幕ID集合。其中ID应为大于0的整数，否则返回401错误码。
   * @returns { Promise<Array<long>> } Promise对象。返回异源屏幕的displayId集合，其中id为大于0的整数。
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