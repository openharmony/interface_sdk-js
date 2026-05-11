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
 * 屏幕属性提供管理显示设备的一些基础能力，包括获取默认显示设备的信息，获取所有显示设备的信息以及监听显示设备的插拔行为。
 *
 * @syscap SystemCapability.WindowManager.WindowManager.Core
 * @crossplatform [since 10]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace display {
  /**
   * 获取当前默认的Display对象，使用callback异步回调。
   *
   * @param { AsyncCallback<Display> } callback - 回调函数。返回当前默认的Display对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead display.getDefaultDisplaySync
   */
  function getDefaultDisplay(callback: AsyncCallback<Display>): void;

  /**
   * 获取当前默认的Display对象，使用Promise异步回调。
   *
   * @returns { Promise<Display> } Promise对象。返回当前默认的Display对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead display.getDefaultDisplaySync
   */
  function getDefaultDisplay(): Promise<Display>;

  /**
   * 返回应用所在屏幕的Display对象。若应用内多个Ability在不同屏幕，返回主屏的Display对象，若应用内多个Ability在同一屏幕，返回所在屏幕的Display对象。
   *
   * @returns { Display } 返回默认的Display对象。
   * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause: Display is not created or destroyed.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 9 dynamic
   * @since 23 static
   */
  function getDefaultDisplaySync(): Display;

  /**
   * 获取主屏信息。除2in1之外的设备获取的是设备自带屏幕的Display对象；2in1设备外接屏幕时获取的是当前主屏幕的Display对象；2in1设备没有外接屏幕时获取的是自带屏幕的Display对象。
   *
   * @returns { Display } 当前设备主屏幕的Display对象。
   * @throws { BusinessError } 1400001 - Invalid display or screen. Possible cause: Invalid display id.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 14 dynamic
   * @since 23 static
   */
  function getPrimaryDisplaySync(): Display;

  /**
   * 根据displayId获取对应的Display对象。
   *
   * @param { long } displayId - 屏幕ID。该参数仅支持整数输入，该参数大于等于0。需要确保displayId准确才能成功获取到对应结果。可以通过
   *     [WindowProperties]{@link @ohos.window:window.WindowProperties}的displayId属性获取到准确的displayId作为入参。
   * @returns { Display } 返回displayId对应的Display对象。
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
   * 获取当前所有的Display对象，使用callback异步回调。
   *
   * @param { AsyncCallback<Array<Display>> } callback - 回调函数。返回当前所有的Display对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead display.getAllDisplays(callback: AsyncCallback<Array<Display>>)
   */
  function getAllDisplay(callback: AsyncCallback<Array<Display>>): void;

  /**
   * 获取当前所有的Display对象，使用Promise异步回调。
   *
   * @returns { Promise<Array<Display>> } Promise对象。返回当前所有的Display对象。
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead display.getAllDisplays()
   */
  function getAllDisplay(): Promise<Array<Display>>;

  /**
   * 获取当前所有的Display对象，使用callback异步回调。
   *
   * @param { AsyncCallback<Array<Display>> } callback - 回调函数。返回当前所有的Display对象。
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllDisplays(callback: AsyncCallback<Array<Display>>): void;

  /**
   * 获取当前所有的Display对象，使用Promise异步回调。
   *
   * @returns { Promise<Array<Display>> } Promise对象。返回当前所有的Display对象。
   * @throws { BusinessError } 1400001 - Invalid display or screen.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAllDisplays(): Promise<Array<Display>>;

  /**
   * 获取当前设备支持的所有显示模式及其对应的物理屏幕分辨率信息对象。使用Promise异步回调。
   *
   * @returns { Promise<Array<DisplayPhysicalResolution>> } Promise对象。返回当前所有的DisplayPhysicalResolution对象。
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function getAllDisplayPhysicalResolution(): Promise<Array<DisplayPhysicalResolution>>;

  /**
   * 查询指定display对象上是否有可见的隐私窗口。可通过
   * [setWindowPrivacyMode()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#setwindowprivacymode9)接口设置隐私窗口。
   * 隐私窗口内容将无法被截屏或录屏。
   *
   * @param { long } displayId - 屏幕ID，该参数仅支持整数输入。该参数大于等于0。
   * @returns { boolean } 查询的display对象上是否有可见的隐私窗口。true表示此display对象上有可见的隐私窗口，false表示此display对象上没有可见的隐私窗口。
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
   * 开启显示设备变化的监听。
   *
   * @param { 'add' | 'remove' | 'change' } type - 监听事件。<br/>- type为"add"，表示增加显示设备事件。例如：插入显示器。<br/>- type为"remove"，表示移除显
   *     示设备事件。例如：移除显示器。<br/>- type为"change"，表示改变显示设备事件。例如：显示器方向改变。
   * @param { Callback<long> } callback - 回调函数。返回监听到的屏幕ID，该参数为整数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types.
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  function on(type: 'add' | 'remove' | 'change', callback: Callback<long>): void;

  /**
   * 开启显示设备指定属性变化的监听。
   *
   * @param { Array<string> } displayAttributeOption - 指定需要监听的屏幕属性名称，且仅限于
   *     [display属性](docroot://reference/apis-arkui/js-apis-display.md#属性)中包含的属性。
   * @param { Callback<long> } callback - 回调函数。返回监听到的屏幕ID，该参数为整数。
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
   * 关闭显示设备变化的监听。
   *
   * @param { 'add' | 'remove' | 'change' } type - 监听事件。<br/>- type为"add"，表示增加显示设备事件。例如：插入显示器。<br/>- type为"remove"，表示移除显
   *     示设备事件。例如：移除显示器。<br/>- type为"change"，表示改变显示设备事件。例如：显示器方向改变。
   * @param { Callback<long> } callback - 需要取消注册的回调函数。返回监听到的屏幕ID，该参数为整数。若无此参数，则取消注册当前type类型事件监听的所有回调函数。 [since 7 - 19]
   * @param { Callback<long> } [callback] - 需要取消注册的回调函数。返回监听到的屏幕ID，该参数为整数。若无此参数，则取消注册当前type类型事件监听的所有回调函数。 [since 20]
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
   * 开启屏幕隐私模式变化的监听。当屏幕前台有隐私窗口，则屏幕处于隐私模式，屏幕中的隐私窗口内容无法被截屏或录屏。
   *
   * @param { 'privateModeChange' } type - 监听事件，固定为'privateModeChange'，表示屏幕隐私模式状态发生变化。
   * @param { Callback<boolean> } callback - 回调函数。表示屏幕隐私模式是否改变。true表示屏幕由非隐私窗口模式变为隐私模式，false表示屏幕由隐私模式变为非隐私模式。
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
   * 关闭屏幕隐私模式变化的监听。当屏幕前台有隐私窗口，则屏幕处于隐私模式，屏幕中的隐私窗口内容无法被截屏或录屏。
   *
   * @param { 'privateModeChange' } type - 监听事件，固定为'privateModeChange'，表示屏幕隐私模式状态发生变化。
   * @param { Callback<boolean> } callback - 需要取消注册的回调函数。表示屏幕隐私模式是否改变。true表示屏幕由非隐私窗口模式变为隐私模式，false表示屏幕由隐私模式变为非隐私模式。若无此参数
   *     ，则取消注册屏幕隐私模式变化监听的所有回调函数。
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
   * 判断设备是否可折叠。
   *
   * @returns { boolean } boolean对象，返回当前设备是否可折叠的结果。false表示不可折叠，true表示可折叠。对于外屏只有简单辅助显示作用的小折叠设备，应用无法自定义外屏界面，故其返回值为false。其他
   *     可折叠设备的返回值均为true。
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function isFoldable(): boolean;

  /**
   * 获取可折叠设备当前的折叠状态。
   *
   * @returns { FoldStatus } FoldStatus对象，返回当前可折叠设备的折叠状态。
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getFoldStatus(): FoldStatus;

  /**
   * 开启折叠设备折叠状态变化的监听。
   * 
   * 本接口监听设备物理折叠状态的变化，如果要监听屏幕显示模式的变化，需要使用
   * [display.on('foldDisplayModeChange')]{@link display.on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>)}
   * 接口。
   * 
   * 两者存在差异，时序上物理折叠状态变化在前，底层会根据物理折叠状态匹配屏幕显示模式状态。
   * 
   * 若需监听当前显示内容是显示在折叠设备的内屏还是外屏，请使用
   * [display.on('foldDisplayModeChange')]{@link display.on(type: 'foldDisplayModeChange', callback: Callback<FoldDisplayMode>)}
   * 。
   *
   * @param { 'foldStatusChange' } type - 监听事件，固定为'foldStatusChange'，表示折叠设备折叠状态发生变化。
   * @param { Callback<FoldStatus> } callback - 回调函数。表示折叠设备折叠状态。
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
   * 关闭折叠设备折叠状态变化的监听。
   *
   * @param { 'foldStatusChange' } type - 监听事件，固定为'foldStatusChange'，表示折叠设备折叠状态发生变化。
   * @param { Callback<FoldStatus> } callback - 需要取消注册的回调函数。表示折叠设备折叠状态。若无此参数，则取消注册折叠状态变化监听的所有回调函数。 [since 10 - 19]
   * @param { Callback<FoldStatus> } [callback] - 需要取消注册的回调函数。表示折叠设备折叠状态。若无此参数，则取消注册折叠状态变化监听的所有回调函数。 [since 20]
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
   * 开启折叠设备折叠角度变化的监听。如果是双折轴设备，则有两个角度值；在充电口朝下的状态下，从右到左分别是折轴一和折轴二。
   *
   * @param { 'foldAngleChange' } type - 监听事件，固定为'foldAngleChange'，表示折叠设备折叠角度发生变化。
   * @param { Callback<Array<double>> } callback - 回调函数。表示折叠设备屏幕折叠角度值（0度~180度）。如果是双折轴设备，则数组返回两个角度值，第一个值是折轴一的折叠角度值，第二个值是折
   *     轴二的折叠角度值。
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
   * 关闭折叠设备折叠角度变化的监听。
   *
   * @param { 'foldAngleChange' } type - 监听事件，固定为'foldAngleChange'表示折叠设备折叠角度发生变化。
   * @param { Callback<Array<double>> } callback - 需要取消注册的回调函数。表示折叠设备屏幕折叠角度值（0度~180度）。若无此参数，则取消注册折叠角度变化监听的所有回调函数
   *     。 [since 12 - 19]
   * @param { Callback<Array<double>> } [callback] - 需要取消注册的回调函数。表示折叠设备屏幕折叠角度值（0度~180度）。若无此参数，则取消注册折叠角度变化监听的所有回调函数
   *     。 [since 20]
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
   * 开启设备的屏幕显示信息是否被获取的监听。
   *
   * @param { 'captureStatusChange' } type - 监听事件，固定为'captureStatusChange'表示设备的屏幕显示信息被获取的状态发生变化。
   * @param { Callback<boolean> } callback - 回调函数。表示设备的屏幕显示信息是否被获取。true表示设备的屏幕显示信息开始被获取，包括处于截屏、投屏、录屏状态，或创建了虚拟屏幕(虚拟屏幕可能被
   *     应用获取屏幕图像)，截屏仅返回一次true；false表示获取结束。
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
   * 关闭设备的屏幕显示信息是否被获取的监听。
   *
   * @param { 'captureStatusChange' } type - 监听事件，固定为'captureStatusChange'表示设备的屏幕显示信息被获取的状态发生变化。
   * @param { Callback<boolean> } callback - 需要取消注册的回调函数。表示设备的屏幕显示信息是否被获取。true表示设备的屏幕显示信息开始被获取，包括处于截屏、投屏、录屏状态，或创建了虚拟屏幕(虚
   *     拟屏幕可能被应用获取屏幕图像)，截屏仅返回一次true；false表示获取结束。若无此参数，则取消注册设备的屏幕显示信息是否存在被获取监听的所有回调函数。
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
   * 检查设备的屏幕显示信息是否被获取。
   *
   * @returns { boolean } boolean值，返回设备的屏幕显示信息是否存在被获取的情况。返回true表示设备的屏幕信息存在被获取的情况，可能为：设备正处于截屏、投屏、录屏状态，或已创建虚拟屏幕(虚拟屏幕可能被应用获
   *     取屏幕图像)；返回false则表示设备的屏幕信息不存在被获取的情况。
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  function isCaptured(): boolean;

  /**
   * 检查该设备是否被bundle名称列表中的任何应用抓拍、投影或录制。
   *
   * @param { Array<string> } bundleNameList - 需要检查的应用包名称列表。数组的最大大小为100。
   * @returns { boolean } true表示该设备包名称列表中的任何应用捕获、投影或录制。
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
   * 获取可折叠设备当前的显示模式。
   *
   * @returns { FoldDisplayMode } FoldDisplayMode对象，返回可折叠设备当前的显示模式。
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getFoldDisplayMode(): FoldDisplayMode;

  /**
   * 更改可折叠设备的显示模式。
   *
   * @param { FoldDisplayMode } mode - 可折叠设备的显示模式。
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
   * 开启折叠设备屏幕显示模式变化的监听。
   * 
   * 本接口监听设备屏幕显示模式的变化，如果要监听设备物理折叠状态的变化，需要使用
   * [display.on('foldStatusChange')]{@link display.on(type: 'foldStatusChange', callback: Callback<FoldStatus>)}接口。
   * 
   * 两者存在差异，时序上物理折叠状态变化在前，底层会根据物理折叠状态匹配屏幕显示模式状态。
   *
   * @param { 'foldDisplayModeChange' } type - 监听事件，固定为'foldDisplayModeChange'，表示折叠设备屏幕显示模式发生变化。
   * @param { Callback<FoldDisplayMode> } callback - 回调函数。表示折叠设备屏幕显示模式。
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
   * 关闭折叠设备屏幕显示模式变化的监听。
   *
   * @param { 'foldDisplayModeChange' } type - 监听事件，固定为'foldDisplayModeChange'，表示折叠设备屏幕显示模式发生变化。
   * @param { Callback<FoldDisplayMode> } callback - 需要取消注册的回调函数。表示折叠设备屏幕显示模式。若无此参数，则取消注册屏幕显示模式变化监听的所有回调函数
   *     。 [since 10 - 19]
   * @param { Callback<FoldDisplayMode> } [callback] - 需要取消注册的回调函数。表示折叠设备屏幕显示模式。若无此参数，则取消注册屏幕显示模式变化监听的所有回调函数。 [since 20]
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
   * 在当前显示模式下获取折叠折痕区域。
   *
   * @returns { FoldCreaseRegion } FoldCreaseRegion对象，返回设备在当前显示模式下的折叠折痕区域。
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  function getCurrentFoldCreaseRegion(): FoldCreaseRegion;

  /**
   * 设置可折叠设备当前折叠状态的锁定状态。
   *
   * @param { boolean } locked - 可折叠设备的折叠状态是否锁定。true表示锁定，false表示不锁定。
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
   * 创建虚拟屏幕，使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { VirtualScreenConfig } config - 用于创建虚拟屏幕的参数。
   * @returns { Promise<long> } Promise对象。返回创建的虚拟屏幕的ScreenId。
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
   * 销毁虚拟屏幕，使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { long } screenId - 屏幕ID，与创建的虚拟屏幕ID保持一致，即使用[createVirtualScreen()]{@link display.createVirtualScreen}接口成功创建对
   *     应虚拟屏幕时的返回值，该参数仅支持整数输入。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 设置虚拟屏幕的surfaceId，surfaceId用于标识一个surface，表示当前虚拟屏用于显示对应surface中的内容。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { long } screenId - 屏幕ID，与创建的虚拟屏幕ID保持一致，即使用[createVirtualScreen()]{@link display.createVirtualScreen}接口成功创建对
   *     应虚拟屏幕时的返回值，该参数仅支持整数输入。
   * @param { string } surfaceId - 代表虚拟屏幕绑定的surfaceId，由用户指定某一实际存在的surface对应的surfaceId，该参数最大长度为4096个字节，超出最大长度时则取前4096个字节。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 为虚拟屏幕添加surface。
   *
   * @param { long } screenId - 虚拟屏幕的屏幕ID。
   * @param { string } surfaceId - surface的id。
   * @param { Rect } [surfaceRegion] - 虚拟屏用于显示surface的矩形区域。
   *     默认值：虚拟屏幕的完整区域。
   * @returns { Promise<void> } 不返回任何值的Promise
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
   * 删除虚拟屏的surface
   *
   * @param { long } screenId - 虚拟屏幕的屏幕ID。
   * @param { string } surfaceId - surface的id。
   * @returns { Promise<void> } 不返回任何值的Promise
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
   * 将屏幕设置为异源模式，使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_VIRTUAL_SCREEN
   * @param { long } screenId - 要设置成异源模式的屏幕ID。其中id应为大于0的整数，否则返回401错误码。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 将窗口添加到禁止投屏显示的名单中，被添加的窗口无法在投屏时显示。仅对应用主窗或系统窗口生效。使用Promise异步回调。
   *
   * @param { Array<int> } windowIds - 窗口id列表，传入子窗窗口id时不生效。窗口id为大于0的整数。推荐使用
   *     [getWindowProperties()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9)方法获取窗口
   *     id属性。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 将窗口从禁止投屏显示的名单中移除，被移除的窗口可以在投屏时显示。仅对应用主窗或系统窗口生效。使用Promise异步回调。
   *
   * @param { Array<int> } windowIds - 窗口id列表，传入子窗窗口id时不生效。窗口id为大于0的整数。推荐使用
   *     [getWindowProperties()](docroot://reference/apis-arkui/arkts-apis-window-Window.md#getwindowproperties9)方法获取窗口
   *     id属性。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 将指定屏幕左上角为原点的相对坐标转换成主屏左上角为原点的全局坐标，仅支持主屏和扩展屏的坐标转换。
   *
   * @param { RelativePosition } relativePosition - 需要转化为全局坐标的相对坐标。
   * @returns { Position } 返回相对于主屏左上角的全局坐标。
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function convertRelativeToGlobalCoordinate(relativePosition: RelativePosition): Position;

  /**
   * 将主屏左上角为原点的全局坐标转换成displayId指定屏幕左上角为原点的相对坐标。若未传入displayId，默认转换为全局坐标所在屏幕的相对坐标系。若全局坐标不在任何屏幕上，默认转换成主屏的相对坐标。
   *
   * @param { Position } position - 需要转化为相对坐标的全局坐标。
   * @param { long } [displayId] - 相对坐标系原点所在的屏幕ID，传递该参数表示以指定屏幕左上角为原点转换相对坐标。不指定则不传参，默认转换成全局坐标所在屏幕的相对坐标，若全局坐标不在任何屏幕上，则默认转换
   *     成主屏的相对坐标。
   * @returns { RelativePosition } 返回对应屏幕的相对坐标。
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 20 dynamic
   * @since 23 static
   */
  function convertGlobalToRelativeCoordinate(position: Position, displayId?: long): RelativePosition;

  /**
   * 获取指定displayId对应屏幕的亮度信息。如果屏幕不支持HDR，返回的[BrightnessInfo]{@link display.BrightnessInfo}对象中的currentHeadroom和maxHeadroom
   * 为默认值。虚拟屏的BrightnessInfo对象中sdrNits为默认值。
   *
   * @param { long } displayId - 屏幕ID。该参数仅支持整数输入，该参数大于等于0。
   * @returns { BrightnessInfo } 返回displayId对应屏幕的亮度信息。
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
   * 监听屏幕亮度信息时使用的回调函数类型。
   *
   * @param { T1 } data1 - 表示displayId，类型为number。
   * @param { T2 } data2 - 表示brightnessInfo，类型为[BrightnessInfo]{@link display.BrightnessInfo}。
   * @syscap SystemCapability.Window.SessionManager
   * @since 22 dynamic
   * @since 23 static
   */
  type BrightnessCallback<T1, T2> = (data1: T1, data2: T2) => void;

  /**
   * 开启所有屏幕亮度信息变化的监听。如果屏幕不支持HDR，监听到的[BrightnessInfo]{@link display.BrightnessInfo}对象中的currentHeadroom和maxHeadroom为默认值。虚拟
   * 屏的BrightnessInfo对象中sdrNits为默认值。
   *
   * @param { 'brightnessInfoChange' } type - 监听事件，固定为'brightnessInfoChange'，表示屏幕亮度信息状态发生变化。
   * @param { BrightnessCallback<long, BrightnessInfo> } callback - 回调函数。返回屏幕亮度信息改变的displayId(参数1)及对应的屏幕亮度信息(参数2)。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @throws { BusinessError } 1400004 - Parameter error. Possible cause: 1. Invalid parameter range.
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   */
  function on(type: 'brightnessInfoChange', callback: BrightnessCallback<long, BrightnessInfo>): void;

  /**
   * 关闭所有屏幕亮度信息状态变化的监听。
   *
   * @param { 'brightnessInfoChange' } type - 监听事件，固定为'brightnessInfoChange'，表示屏幕亮度信息状态发生变化。
   * @param { BrightnessCallback<long, BrightnessInfo> } [callback] - 需要取消注册的回调函数。表示brightnessInfo状态发生改变。若无此参数，则取消所有注册
   *     brightnessInfo状态发生改变的回调函数。参数1为displayId，参数2为屏幕亮度信息。
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
   * 创建虚拟屏幕的参数。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 16 dynamic
   * @since 23 static
   */
  interface VirtualScreenConfig {
    /**
     * 指定虚拟屏幕的名称，用户可自行定义。
     *
     * @syscap  SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 指定虚拟屏幕的宽度，单位为px，该参数应为正整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * 指定虚拟屏幕的高度，单位为px，该参数应为正整数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * 指定虚拟屏幕的密度，单位为px，该参数为浮点数。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    density: double;

    /**
     * 指定虚拟屏幕的surfaceId，用户可自行定义，该参数最大长度为4096个字节，超出最大长度时则取前4096个字节。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 16 dynamic
     * @since 23 static
     */
    surfaceId: string;

    /**
     * 指定虚拟屏幕是否可获得焦点。true表示可获焦，false表示不可获焦，默认值为true。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 22 dynamic
     * @since 23 static
     */
    supportsFocus?: boolean;
  }

  /**
   * 坐标位置：在全局坐标系中，以主屏左上角为原点。在相对坐标系中，以指定屏幕左上角为原点。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface Position {
    /**
     * 相对原点的横坐标，单位为px，该参数应为32位有符号整数，输入浮点数时向下取整。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    x: long;

    /**
     * 相对原点的纵坐标，单位为px，该参数应为32位有符号整数，输入浮点数时向下取整。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    y: long;
  }

  /**
   * 相对坐标系下的坐标位置，以displayId对应的屏幕左上角为原点。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @since 20 dynamic
   * @since 23 static
   */
  interface RelativePosition {
    /**
     * 相对坐标所对应的屏幕ID，仅支持整数输入，且需大于等于0。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    displayId: long;

    /**
     * 以displayId所指定屏幕左上角为原点的坐标值。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    position: Position;
  }

  /**
   * 当前可折叠设备的折叠状态枚举。如果是双折轴设备，则在充电口朝下的状态下，从右到左分别是折轴一和折轴二。
   * 
   * > **说明：**
   * 
   * > 只有一个折轴的产品包含FOLD_STATUS_EXPANDED、FOLD_STATUS_FOLDED、FOLD_STATUS_HALF_FOLDED三种折叠状态。
   * 
   * > 具有两个折轴的产品包含上表除FOLD_STATUS_UNKNOWN以外的九种折叠状态。
   * 
   * > FOLD_STATUS_UNKNOWN是一种不可用的折叠状态。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum FoldStatus {
    /**
     * 表示设备当前折叠状态无法确定或设备本身不可折叠。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_STATUS_UNKNOWN = 0,
    /**
     * 表示设备当前折叠状态为完全展开。如果是双折轴设备，则表示折轴一折叠状态为完全展开，折轴二折叠状态为折叠。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_STATUS_EXPANDED = 1,
    /**
     * 表示设备当前折叠状态为折叠。如果是双折轴设备，则表示折轴一和折轴二的折叠状态均为折叠。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_STATUS_FOLDED = 2,
    /**
     * 表示设备当前折叠状态为半折叠。半折叠指完全展开和折叠之间的状态。如果是双折轴设备，则表示折轴一折叠状态为半折叠，折轴二折叠状态为折叠。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_STATUS_HALF_FOLDED = 3,

    /**
     * 表示双折轴设备折轴一和折轴二的折叠状态均为完全展开。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_EXPANDED_WITH_SECOND_EXPANDED = 11,

    /**
     * 表示双折轴设备折轴一折叠状态为完全展开，折轴二折叠状态为半折叠。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_EXPANDED_WITH_SECOND_HALF_FOLDED = 21,

    /**
     * 表示双折轴设备折轴一折叠状态为折叠，折轴二折叠状态为半折叠。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_FOLDED_WITH_SECOND_HALF_FOLDED = 22,

    /**
     * 表示双折轴设备折轴一和折轴二的折叠状态均为半折叠。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_HALF_FOLDED_WITH_SECOND_HALF_FOLDED = 23,

    /**
     * 表示双折轴设备折轴一折叠状态为折叠，折轴二折叠状态为完全展开。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_FOLDED_WITH_SECOND_EXPANDED = 12,

    /**
     * 表示双折轴设备折轴一折叠状态为半折叠，折轴二折叠状态为完全展开。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 15 dynamic
     * @since 23 static
     */
    FOLD_STATUS_HALF_FOLDED_WITH_SECOND_EXPANDED = 13
  }

  /**
   * 可折叠设备的显示模式枚举。
   * 
   * > **说明：**
   * 
   * > 对于内外屏均可作为主屏幕使用的折叠产品，例如大折叠、阔折叠，内屏显示状态为FOLD_DISPLAY_MODE_FULL，外屏显示状态为FOLD_DISPLAY_MODE_MAIN。
   * 
   * > 对于外屏只有简单的辅助显示作用的折叠产品，例如小折叠，内屏显示状态为FOLD_DISPLAY_MODE_MAIN，外屏显示状态为FOLD_DISPLAY_MODE_SUB。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @crossplatform [since 20]
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum FoldDisplayMode {
    /**
     * 表示设备当前折叠显示模式未知。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_UNKNOWN = 0,
    /**
     * 表示设备当前全屏显示。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_FULL = 1,
    /**
     * 表示设备当前主屏幕显示。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_MAIN = 2,
    /**
     * 表示设备当前子屏幕显示。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_SUB = 3,
    /**
     * 表示设备当前双屏协同显示。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    FOLD_DISPLAY_MODE_COORDINATION = 4
  }

  /**
   * 显示设备的状态枚举。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum DisplayState {
    /**
     * 表示显示设备状态未知。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_UNKNOWN = 0,
    /**
     * 表示显示设备状态为关闭。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_OFF = 1,
    /**
     * 表示显示设备状态为开启。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_ON = 2,
    /**
     * 表示显示设备为低电耗模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_DOZE = 3,
    /**
     * 表示显示设备为睡眠模式，CPU为挂起状态。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_DOZE_SUSPEND = 4,
    /**
     * 表示显示设备为VR模式。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_VR = 5,
    /**
     * 表示显示设备为开启状态，CPU为挂起状态。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_ON_SUSPEND = 6
  }

  /**
   * 显示设备当前显示的方向枚举。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  enum Orientation {
    /**
     * 表示设备当前以竖屏方式显示。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PORTRAIT = 0,

    /**
     * 表示设备当前以横屏方式显示。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    LANDSCAPE = 1,

    /**
     * 表示设备当前以反向竖屏方式显示。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    PORTRAIT_INVERTED = 2,

    /**
     * 表示设备当前以反向横屏方式显示。
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
   * 折叠折痕区域。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice [since 12]
   * @since 10 dynamic
   * @since 23 static
   */
  interface FoldCreaseRegion {
    /**
     * 屏幕ID，用于识别折痕所在的屏幕。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly displayId: long;

    /**
     * 折痕区域。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    readonly creaseRects: Array<Rect>;
  }

  /**
   * 屏幕亮度信息。此类型中的信息均来自底层屏幕信息数据。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 22 dynamic
   * @since 23 static
   */
  interface BrightnessInfo {
    /**
     * 屏幕的亮度，该参数为大于0的浮点数。默认值为500.0。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    readonly sdrNits: double;
    /**
     * 当前亮度动态余量，该参数为大于0的浮点数。默认值为1.0。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    readonly currentHeadroom: double;
    /**
     * 当前最大亮度余量，该参数为大于0的浮点数。默认值为1.0。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 22 dynamic
     * @since 23 static
     */
    readonly maxHeadroom: double;
  }

  /**
   * 矩形区域。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface Rect {
    /**
     * 矩形区域的左边界，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    left: long;

    /**
     * 矩形区域的上边界，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    top: long;

    /**
     * 矩形区域的宽度，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * 矩形区域的高度，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    height: long;
  }

  /**
   * 瀑布屏曲面部分显示区域。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface WaterfallDisplayAreaRects {
    /**
     * 瀑布曲面区域的左侧矩形区域。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly left: Rect;

    /**
     * 瀑布曲面区域的右侧矩形区域。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly right: Rect;

    /**
     * 瀑布曲面区域的顶部矩形区域。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly top: Rect;

    /**
     * 瀑布曲面区域的底部矩形区域。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bottom: Rect;
  }

  /**
   * 挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @atomicservice [since 12]
   * @since 9 dynamic
   * @since 23 static
   */
  interface CutoutInfo {
    /**
     * 挖孔、刘海等区域的边界矩形。如果没有挖孔、刘海等区域，数组返回为空。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly boundingRects: Array<Rect>;

    /**
     * 瀑布屏曲面部分显示区域。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly waterfallDisplayAreaRects: WaterfallDisplayAreaRects;
  }

  /**
   * 设备的显示模式以及对应的物理屏幕分辨率信息。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @atomicservice
   * @since 12 dynamic
   * @since 23 static
   */
  interface DisplayPhysicalResolution {
    /**
     * 设备的显示模式，非折叠设备时值为0。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    foldDisplayMode: FoldDisplayMode;

    /**
     * 设备的宽度，单位为px，该参数为大于0的整数。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    physicalWidth: long;

    /**
     * 设备的高度，单位为px，该参数为大于0的整数。
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
   * 屏幕实例。描述Display对象的属性和方法。
   * 
   * 下列API示例中都需先使用[getAllDisplays()]{@link display.getAllDisplays(callback: AsyncCallback<Array<Display>>)}、
   * [getDefaultDisplaySync()]{@link display.getDefaultDisplaySync}中的任一方法获取到Display实例，再通过此实例调用对应方法。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform [since 10]
   * @atomicservice [since 11]
   * @since 7 dynamic
   * @since 23 static
   */
  interface Display {
    /**
     * 显示设备的屏幕ID，该参数为大于等于0的整数。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    id: long;

    /**
     * 显示设备的名称。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 显示设备的启用状态，表示设备是否处于正常运行状态。true表示已启用，处于正常运行状态；false表示未启用，未处于正常运行状态。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    alive: boolean;

    /**
     * 显示设备的状态。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    state: DisplayState;

    /**
     * 显示设备当前采用的刷新率，该参数为整数，单位为Hz。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    refreshRate: int;

    /**
     * 显示设备的屏幕顺时针旋转角度。
     * 
     * 值为0时，表示显示设备屏幕顺时针旋转为0°，表示显示设备的标准显示方向；
     * 
     * 值为1时，表示显示设备屏幕顺时针旋转为90°；
     * 
     * 值为2时，表示显示设备屏幕顺时针旋转为180°；
     * 
     * 值为3时，表示显示设备屏幕顺时针旋转为270°。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    rotation: int;

    /**
     * 显示设备的屏幕宽度，单位为px，该参数为整数。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * 显示设备的屏幕高度，单位为px，该参数为整数。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 10]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * 显示设备的可用区域宽度，单位为px，该参数为大于0的整数。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     * 
     * 该接口在2in1设备、Tablet设备中可正常调用；在其他设备中不可用，请通过width属性获取当前设备屏幕的可用区域宽度。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    availableWidth: long;

    /**
     * 显示设备的可用区域高度，单位为px，该参数为大于0的整数。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     * 
     * 该接口在2in1设备、Tablet设备中可正常调用；在其他设备中不可用，请通过height属性获取当前设备屏幕的可用区域高度。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice
     * @since 12 dynamic
     * @since 23 static
     */
    availableHeight: long;

    /**
     * 显示设备的物理像素密度，表示每英寸上的像素点数。该参数为浮点数，单位为px。一般取值160.0、480.0等，实际能取到的值取决于不同设备设置里提供的可选值。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    densityDPI: double;

    /**
     * 表示显示设备当前显示的方向。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @atomicservice [since 12]
     * @since 10 dynamic
     * @since 23 static
     */
    orientation: Orientation;

    /**
     * 显示设备逻辑像素的密度，代表物理像素与逻辑像素的缩放系数，计算方式为：![densityPixels](docroot://reference/apis-arkui/figures/densityPixels.jpg)
     * 
     * 该参数为浮点数，受densityDPI范围限制，取值范围在[0.5，4.0]。一般取值1.0、3.0等，实际取值取决于不同设备提供的densityDPI。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 11]
     * @since 7 dynamic
     * @since 23 static
     */
    densityPixels: double;

    /**
     * 显示设备上的字体的缩放因子。该参数为浮点数，通常与densityPixels相同。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 11]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    scaledDensity: double;

    /**
     * x轴方向中每英寸屏幕的确切物理像素值，该参数为浮点数。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    xDPI: double;

    /**
     * y轴方向中每英寸屏幕的确切物理像素值，该参数为浮点数。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform [since 20]
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    yDPI: double;

    /**
     * 显示设备支持的所有色域类型。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    colorSpaces: Array<colorSpaceManager.ColorSpace>;

    /**
     * 显示设备支持的所有HDR格式。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 11 dynamic
     * @since 23 static
     */
    hdrFormats: Array<hdrCapability.HDRFormat>;

    /**
     * 获取挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。使用callback异步回调。建议应用布局规避该区域。
     *
     * @param { AsyncCallback<CutoutInfo> } callback - 回调函数。返回不可用屏幕区域对象。
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
     * 获取挖孔屏、刘海屏、瀑布屏等不可用屏幕区域信息。使用Promise异步回调。建议应用布局规避该区域。
     *
     * @returns { Promise<CutoutInfo> } Promise对象。返回描述不可用屏幕区域的CutoutInfo对象。
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice [since 12]
     * @since 9 dynamic
     * @since 23 static
     */
    getCutoutInfo(): Promise<CutoutInfo>;

    /**
     * 判断当前屏幕是否包含沉浸式窗口，使用callback异步回调。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。返回true表示当前屏幕包含沉浸式窗口，false表示不包含。
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
     * 判断当前屏幕是否包含沉浸式窗口，使用Promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示当前屏幕包含沉浸式窗口，false表示不包含。
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
     * 获取当前设备屏幕的可用区域，使用Promise异步回调。
     * 
     * 可用区域是扣除系统UI（如状态栏、Dock栏）后，可供应用程序自由使用的区域。
     *
     * @returns { Promise<Rect> } Promise对象。返回当前屏幕可用矩形区域。
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
     * 获取当前显示模式下的实时折痕区域。
     *
     * @returns { FoldCreaseRegion } 返回设备在当前显示模式下的折叠折痕区域。
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 20 dynamic
     * @since 23 static
     */
    getLiveCreaseRegion(): FoldCreaseRegion;

    /**
     * 开启当前设备屏幕可用区域的监听。当屏幕旋转、进入/退出自由多窗模式、设置Dock栏/状态栏等系统控件可见性变化时，触发回调函数，返回可用区域信息。
     *
     * @param { 'availableAreaChange' } type - 监听事件。固定为'availableAreaChange'，表示屏幕可用区域变更。
     * @param { Callback<Rect> } callback - 回调函数。返回改变后的可用区域。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    on(type: 'availableAreaChange', callback: Callback<Rect>): void;

    /**
     * Register the callback for available area changes.
     *
     * @param { Callback<Rect> } callback - Callback used to return the available area
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @since 23 static
     */
    onAvailableAreaChange(callback: Callback<Rect>): void;

    /**
     * 关闭当前设备屏幕可用区域变化的监听。
     *
     * @param { 'availableAreaChange' } type - 监听事件，固定为'availableAreaChange'，表示屏幕可用区域变更。
     * @param { Callback<Rect> } [callback] - 需要取消注册的回调函数。返回改变后的可用区域。若无此参数，则取消注册屏幕可用区域变化监听的所有回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified.
     *     <br>2. Incorrect parameter types.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 12 dynamic
     */
    off(type: 'availableAreaChange', callback?: Callback<Rect>): void;

    /**
     * Unregister the callback for available area changes.
     *
     * @param { Callback<Rect> } [callback] - Unregister the callback function.
     *	    If not provided, all callbacks for the given event type will be removed.
     * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
     *     capabilities.
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
     * 显示设备的显示模式枚举，默认值为DisplaySourceMode.NONE。
     * 
     * SystemCapability.Window.SessionManager
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    sourceMode?: DisplaySourceMode;

    /**
     * 显示设备的屏幕形状，默认值为RECTANGLE。
     * 
     * SystemCapability.WindowManager.WindowManager.Core
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @atomicservice
     * @since 18 dynamic
     * @since 23 static
     */
    screenShape?: ScreenShape;

    /**
     * 显示设备左上角相对于原点的y轴坐标，原点为主屏左上角，单位为px，该参数为整数，默认值为0。仅DisplaySourceMode为MAIN和EXTEND时返回实际值，其余默认返回默认值0。
     * 
     * SystemCapability.Window.SessionManager
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    x?: long;

    /**
     * 显示设备左上角相对于原点的y轴坐标，原点为主屏左上角，单位为px，该参数为整数，默认值为0。仅DisplaySourceMode为MAIN和EXTEND时返回实际值，其余默认返回默认值0。
     * 
     * SystemCapability.Window.SessionManager
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    y?: long;

    /**
     * 显示设备支持的所有刷新率，从小到大排序。刷新率值为正整数，单位为Hz。默认为空。
     * 
     * SystemCapability.Window.SessionManager
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 20 dynamic
     * @since 23 static
     */
    supportedRefreshRates?: Array<int>;

    /**
     * 获取屏幕的圆角信息。屏幕圆角信息由产品配置决定，只有配置了屏幕圆角半径的物理屏幕才能返回圆角信息，否则返回空数组，虚拟屏同样返回空数组。
     *
     * @returns { Array<RoundedCorner> } 返回当前屏幕的圆角信息。
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 1400001 - Invalid display or screen.
     * @throws { BusinessError } 1400003 - This display manager service works abnormally.
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    getRoundedCorner(): Array<RoundedCorner>;

    /**
     * 显示设备首选的色彩空间
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 26.0.0 dynamic&static
     */
    readonly preferredColorSpace?: colorSpaceManager.ColorSpace;
  }

  /**
   * 显示设备的屏幕形状枚举。
   *
   * @syscap SystemCapability.WindowManager.WindowManager.Core
   * @crossplatform
   * @since 18 dynamic
   * @since 23 static
   */
  enum ScreenShape {
    /**
     * 表示设备屏幕形状为圆形。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    ROUND = 1,

    /**
     * 表示设备屏幕形状为矩形。
     *
     * @syscap SystemCapability.WindowManager.WindowManager.Core
     * @crossplatform
     * @since 18 dynamic
     * @since 23 static
     */
    RECTANGLE = 0
  }

  /**
   * 更改可折叠设备的显示模式，并指明更改原因。
   *
   * @param { FoldDisplayMode } mode - 可折叠设备的显示模式。
   * @param { string } reason - 更改显示模式的原因。不设置，则默认为空字符串。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 1400003 - This display manager service works abnormally.
   * @syscap SystemCapability.Window.SessionManager
   * @systemapi Hide this for inner system use.
   * @since 19 dynamic
   * @since 23 static
   */
  function setFoldDisplayMode(mode: FoldDisplayMode, reason: string): void;

  /**
   * 屏幕显示内容的显示模式枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 19 dynamic
   * @since 23 static
   */
  enum DisplaySourceMode {
    /**
     * 表示设备当前为主屏。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    MAIN = 1,

    /**
     * 表示设备当前未使用。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 表示设备当前为扩展显示模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    EXTEND = 3,

    /**
     * 表示设备当前为镜像显示模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    MIRROR = 2,

    /**
     * 表示设备当前为异源显示模式。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 19 dynamic
     * @since 23 static
     */
    ALONE = 4
  }

  /**
   * 屏幕圆角类型枚举。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 23 dynamic&static
   */
  enum CornerType {
    /**
     * 屏幕左上方的圆角。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    TOP_LEFT = 0,

    /**
     * 屏幕右上方的圆角。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    TOP_RIGHT = 1,

    /**
     * 屏幕右下方的圆角。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    BOTTOM_RIGHT  = 2,

    /**
     * 屏幕左下方的圆角。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @atomicservice
     * @since 23 dynamic&static
     */
    BOTTOM_LEFT  = 3
  }

  /**
   * 屏幕圆角定义。
   *
   * @syscap SystemCapability.Window.SessionManager
   * @atomicservice
   * @since 23 dynamic&static
   */
  interface RoundedCorner {
    /**
     * 圆角类型。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly type: CornerType;

    /**
     * 圆角圆心的坐标点。
     *
     * @syscap SystemCapability.Window.SessionManager
     * @stagemodelonly
     * @atomicservice
     * @since 23 dynamic&static
     */
    readonly position: Position;

    /**
     * 圆角半径，单位为px。
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