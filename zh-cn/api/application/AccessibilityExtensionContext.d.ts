/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * AccessibilityExtensionContext是AccessibilityExtensionAbility上下文环境，继承自ExtensionContext。
 * 
 * 辅助功能扩展上下文模块提供辅助功能扩展的上下文环境的能力，包括允许配置辅助应用关注信息类型、查询节点信息、手势注入等。
 *
 * @file Provides accessibility extension context
 * @kit AccessibilityKit
 */

import type { AsyncCallback } from '../@ohos.base';
import type { Callback } from './@ohos.base';
import ExtensionContext from './ExtensionContext';
import type accessibility from '../@ohos.accessibility';
import { AccessibilityAction, FocusMoveResultCode, InjectActionType,
    AccessibilityFocusScene } from '../@ohos.accessibility';
/*** if arkts dynamic */
import type { GesturePath } from '../@ohos.accessibility.GesturePath';
/*** endif */
import type Want from '../@ohos.app.ability.Want';

/**
 * 辅助功能扩展的上下文环境，用来配置辅助应用关注信息类型、查询节点信息、手势注入等。
 * 
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
declare class AccessibilityExtensionContext extends ExtensionContext {
  /**
   * 设置关注的目标包名，使用callback异步回调。
   *
   * @param { Array<string> } targetNames - 设置关注应用的包名，服务接收关注应用的无障碍事件，默认接收所有应用的无障碍事件，取消关注应用则传空数组。
   * @param { AsyncCallback<void> } callback - 回调函数，如果设置关注的目标包名失败，则AsyncCallback中err有数据返回。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  setTargetBundleName(targetNames: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * 设置关注的目标包名，使用Promise异步回调。
   *
   * @param { Array<string> } targetNames - 设置关注应用的包名，服务接收关注应用的无障碍事件，默认接收所有应用的无障碍事件，取消关注应用则传空数组。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  setTargetBundleName(targetNames: Array<string>): Promise<void>;

  /**
   * 获取焦点元素, 使用callback异步回调。
   *
   * @param { boolean } isAccessibilityFocus - 获取的是否是无障碍焦点元素，True表示是，False表示否。
   * @param { AsyncCallback<AccessibilityElement> } callback - 回调函数，返回当前对应的焦点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getFocusElement(isAccessibilityFocus: boolean, callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * 获取焦点元素, 使用Promise异步回调。
   *
   * @param { boolean } isAccessibilityFocus - 获取的是否是无障碍焦点元素，true表示是，false表示否，默认为否。
   * @returns { Promise<AccessibilityElement> } Promise对象，返回当前对应的焦点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getFocusElement(isAccessibilityFocus?: boolean): Promise<AccessibilityElement>;

  /**
   * 获取焦点元素, 使用callback异步回调。
   *
   * @param { AsyncCallback<AccessibilityElement> } callback - 回调函数，返回当前对应的焦点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getFocusElement(callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * 获取指定窗口的根节点元素, 使用callback异步回调。
   *
   * @param { int } windowId - 指定窗口的编号，未指定则从当前活跃窗口获取。
   * @param { AsyncCallback<AccessibilityElement> } callback - 回调函数，返回指定窗口的根节点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getWindowRootElement(windowId: int, callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * 获取指定窗口的根节点元素, 使用Promise异步回调。
   *
   * @param { int } windowId - 指定窗口的编号，未指定则从当前活跃窗口获取。
   * @returns { Promise<AccessibilityElement> } Promise对象，返回指定窗口的根节点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getWindowRootElement(windowId?: int): Promise<AccessibilityElement>;

  /**
   * 获取指定窗口的根节点元素, 使用callback异步回调。
   *
   * @param { AsyncCallback<AccessibilityElement> } callback - 回调函数，返回指定窗口的根节点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getWindowRootElement(callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * 获取指定屏幕中的所有窗口，使用callback异步回调。
   *
   * @param { long } displayId - 指定的屏幕编号，未指定则从默认主屏幕获取。
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback - 回调函数，返回指定屏幕的所有窗口。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getWindows(displayId: long, callback: AsyncCallback<Array<AccessibilityElement>>): void;

  /**
   * 获取指定屏幕中的所有窗口，使用Promise异步回调。
   *
   * @param { long } displayId - 指定的屏幕编号，未指定则从默认主屏幕获取。
   * @returns { Promise<Array<AccessibilityElement>> } Promise对象，返回指定屏幕的所有窗口。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getWindows(displayId?: long): Promise<Array<AccessibilityElement>>;

  /**
   * 获取指定屏幕中的所有窗口，使用callback异步回调。
   *
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback - 回调函数，返回指定屏幕的所有窗口。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  getWindows(callback: AsyncCallback<Array<AccessibilityElement>>): void;

  /**
   * 获取窗口列表。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { long } displayId - 显示ID。如果未提供此参数，则表示默认displayId。
   * @returns { Array<AccessibilityElement> } 窗口列表。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  getAccessibilityWindowsSync(displayId?: long): Array<AccessibilityElement>;

  /**
   * 注入手势，使用callback异步回调。
   *
   * @param { GesturePath } gesturePath - 表示手势的路径信息。
   * @param { AsyncCallback<void> } callback - 回调函数，表示注入手势执行结果的回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead AccessibilityExtensionContext.injectGestureSync
   */
  injectGesture(gesturePath: GesturePath, callback: AsyncCallback<void>): void;

  /**
   * 注入手势，使用Promise异步回调。
   *
   * @param { GesturePath } gesturePath - 表示手势的路径信息。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 10
   * @useinstead AccessibilityExtensionContext.injectGestureSync
   */
  injectGesture(gesturePath: GesturePath): Promise<void>;

  /**
   * 注入手势。
   *
   * @param { GesturePath } gesturePath - 表示手势的路径信息。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 10 dynamiconly
   * @deprecated since 12
   */
  injectGestureSync(gesturePath: GesturePath): void;

  /**
   * 提供拉起前台页面的能力。使用Promise异步回调。
   *
   * @param { Want } want - Want类型参数，传入需要启动的ability的信息，如Ability名称，Bundle名称等。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  startAbility(want: Want): Promise<void>;

  /**
   * 提供批量查询节点的能力。使用Promise异步回调。
   *
   * @param { int } windowId - 表示查询的窗口id。
   * @param { long } elementId - 表示查询的节点id。传入此参数表示查询当前节点下的所有子节点列表，不传则查询窗口下所有节点。默认值为-1。
   * @returns { Promise<Array<AccessibilityElement>> } Promise对象，返回当前窗口或者当前节点下的所有子节点列表。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 - No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  getElements(windowId: int, elementId?: long): Promise<Array<AccessibilityElement>>;

  /**
   * 提供查询应用自定义默认焦点的能力。使用Promise异步回调。
   *
   * @param { int } windowId - 表示查询的窗口id。
   * @returns { Promise<Array<long>> } Promise对象，返回当前窗口下的自定义默认焦点列表。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 - No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 18 dynamic
   * @since 23 static
   */
  getDefaultFocusedElementIds(windowId: int): Promise<Array<long>>;

  /**
   * 持有RunningLock锁，持锁后，屏幕不会自动灭屏。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  holdRunningLockSync(): void;

  /**
   * 释放RunningLock锁，恢复自动灭屏。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  unholdRunningLockSync(): void;

  /**
   * 向无障碍服务注册回调函数，在无障碍服务关闭该无障碍扩展服务前会执行该回调函数。使用callback异步回调。
   * 
   * 此注册函数需要与[notifyDisconnect]{@link AccessibilityExtensionContext.notifyDisconnect}配合使用，如果不调用
   * [notifyDisconnect]{@link AccessibilityExtensionContext.notifyDisconnect}，则默认等待30秒后，无障碍扩展服务会自动关闭。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { 'preDisconnect' } type - 监听事件名，固定为‘preDisconnect’，即无障碍扩展服务即将关闭事件。
   * @param { Callback<void> } callback - 回调函数，在无障碍扩展服务即将关闭时回调。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   */
  on(type: 'preDisconnect', callback: Callback<void>): void;

  /**
   * Register accessibilityExtensionAbility disconnect callback.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { Callback<void> } callback Indicates the callback function.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  onPreDisconnect(callback: Callback<void>): void;

  /**
   * 取消已经向无障碍服务注册的预关闭回调函数，无障碍服务关闭该扩展服务前不再执行该回调。使用callback异步回调。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { 'preDisconnect' } type - 监听事件名，固定为‘preDisconnect’，即无障碍扩展服务即将关闭事件。
   * @param { Callback<void> } [callback] - 回调函数，取消指定无障碍扩展服务即将关闭时的回调。需与
   *     [on('preDisconnect')]{@link AccessibilityExtensionContext#on(type: 'preDisconnect', callback: Callback<void>)}的
   *     callback一致。缺省时，表示注销所有已注册事件。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   */
  off(type: 'preDisconnect', callback?: Callback<void>): void;

  /**
   * Unregister accessibilityExtensionAbility disconnect callback.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { Callback<void> } [callback] Indicates the callback function.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  offPreDisconnect(callback?: Callback<void>): void;

  /**
   * 通知无障碍服务可以关闭该无障碍扩展服务。
   * 
   * 此函数需要与注册预关闭接口
   * [on('preDisconnect')]{@link AccessibilityExtensionContext#on(type: 'preDisconnect', callback: Callback<void>)}配合使用，
   * 如果没有调用过注册预关闭函数，直接调用此函数不生效。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  notifyDisconnect(): void;

  /**
   * 获取当前获得焦点的元素。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<AccessibilityElement> } Promise对象，返回当前获得焦点的元素。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300003 - No accessibility permission to perform the operation.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  getAccessibilityFocusedElement(): Promise<AccessibilityElement>;

  /**
   * 获取活动窗口根元素。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { int } windowId Indicates the window ID.
   * @returns { Promise<AccessibilityElement> } Promise对象，返回活动窗口的根元素。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300003 - No accessibility permission to perform the operation.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  getRootInActiveWindow(windowId?: int): Promise<AccessibilityElement>;
}

export default AccessibilityExtensionContext;

/**
 * 无障碍节点元素。在调用 **AccessibilityElement** 的 API 之前，应该调用 
 * [AccessibilityExtensionContext.getAccessibilityFocusedElement()]{@link AccessibilityExtensionContext.getAccessibilityFocusedElement}
 * 或 [AccessibilityExtensionContext.getRootInActiveWindow()]{@link AccessibilityExtensionContext.getRootInActiveWindow} 
 * 来获取一个 **AccessibilityElement** 实例。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface AccessibilityElement {
  /**
   * 表示元素是否因无障碍目的获得焦点。true表示已获得焦点，false表示未获得焦点。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityFocused?: boolean;
  /**
   * 包名。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  bundleName?: string;
  /**
   * 元素是否可勾选。true表示可勾选，false表示不可勾选。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  checkable?: boolean;
  /**
   * 元素是否已勾选。true表示已勾选，false表示未勾选。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  checked?: boolean;
  /**
   * 元素是否可点击。true表示可点击，false表示不可点击。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  clickable?: boolean;
  /**
   * 元素所属组件的ID。
   * 
   * 默认值：-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  componentId?: long;
  /**
   * 元素所属组件的类型。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  componentType?: string;
  /**
   * 元素显示内容。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  contents?: Array<string>;
  /**
   * 当前项的索引。
   * 
   * 默认值：0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  currentIndex?: int;
  /**
   * 元素的描述信息。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  description?: string;
  /**
   * 元素是否可编辑。true表示可编辑，false表示不可编辑。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  editable?: boolean;
  /**
   * 屏幕上显示的最后一个列表项的索引。
   * 
   * 默认值：0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  endIndex?: int;
  /**
   * 元素的错误状态。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  error?: string;
  /**
   * 元素是否可获得焦点。true表示可获得焦点，false表示不可获得焦点。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  focusable?: boolean;
  /**
   * 提示文本。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  hintText?: string;
  /**
   * 输入文本的类型。
   * 
   * 默认值：0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  inputType?: int;
  /**
   * 检查器键。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  inspectorKey?: string;
  /**
   * 元素是否处于活动状态。true表示活动状态，false表示非活动状态。
   * 
   * 默认值：true。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isActive?: boolean;
  /**
   * 元素是否启用。true表示启用，false表示未启用。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isEnable?: boolean;
  /**
   * 元素是否为提示信息。true表示元素是提示信息，false表示非提示信息。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isHint?: boolean;
  /**
   * 表示元素是否已获得焦点。true表示已获得焦点，false表示未获得焦点。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isFocused?: boolean;
  /**
   * 元素是否为密码。true表示元素是密码，false表示不是密码。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isPassword?: boolean;
  /**
   * 元素是否可见。true表示元素可见，false表示元素不可见。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isVisible?: boolean;
  /**
   * 项目总数。
   * 
   * 默认值：0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  itemCount?: int;
  /**
   * 最后一项内容。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  lastContent?: string;
  /**
   * 元素的显示层级。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  layer?: int;
  /**
   * 元素是否可长按。true表示可长按，false表示不可长按。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  longClickable?: boolean;
  /**
   * 页面ID。
   * 
   * 默认值：-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  pageId?: int;
  /**
   * 表示元素是否支持多行文本。true表示支持，false表示不支持。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  pluralLineSupported?: boolean;
  /**
   * 元素的区域。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  rect?: Rect;
  /**
   * 元素的资源名称。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  resourceName?: string;
  /**
   * 元素的显示区域。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  screenRect?: Rect;
  /**
   * 元素是否可滚动。true表示元素可滚动，false表示不可滚动。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  scrollable?: boolean;
  /**
   * 元素是否已选中。true表示已选中，false表示未选中。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selected?: boolean;
  /**
   * 屏幕上第一个列表项的索引。
   * 
   * 默认值：0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  startIndex?: int;
  /**
   * 元素的文本内容。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  text?: string;
  /**
   * 元素的最大文本长度。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  textLengthLimit?: int;
  /**
   * 文本朗读时的移动单位。
   * 
   * 默认值：0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  textMoveUnit?: accessibility.TextMoveUnit;
  /**
   * 触发元素事件的操作。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  triggerAction?: AccessibilityAction;
  /**
   * 元素的窗口类型。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  type?: WindowType;
  /**
   * 最大值。
   * 
   * 默认值：0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  valueMax?: double;
  /**
   * 最小值。
   * 
   * 默认值：0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  valueMin?: double;
  /**
   * 当前值。
   * 
   * 默认值：0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  valueNow?: double;
  /**
   * 窗口ID。
   * 
   * 默认值：-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  windowId?: int;
  /**
   * 内容区域相对于可滚动组件（如List和Grid）顶部坐标的像素偏移量，单位为像素（px）。
   * 
   * 默认值：0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  offset?: double;
  /**
   * 元素的无障碍文本类型，由组件的accessibilityTextHint属性配置。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  textType?: string;
  /**
   * 元素的无障碍文本信息。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityText?: string;
  /**
   * 元素的可触摸区域。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  hotArea?: Rect;
  /**
   * 自定义组件类型。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  customComponentType?: string;
  /**
   * 下一个要获得焦点的组件的ID。
   * 
   * 默认值：-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityNextFocusId?: long;
  /**
   * 上一个要获得焦点的组件的ID。
   * 
   * 默认值：-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityPreviousFocusId?: long;
  /**
   * 元素的额外信息。值为JSON字符串。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  extraInfo?: string;
  /**
   * 元素是否因无障碍目的而可滚动。此属性优先级高于scrollable。
   * 
   * true表示元素可滚动，false表示元素不可滚动。
   * 
   * 默认值：true。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityScrollable?: boolean;
  /**
   * 支持的操作名称。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  supportedActionNames?: Array<string>;
  /**
   * 元素是否为无障碍组。true表示元素是无障碍组，false表示元素不是无障碍组。
   * 
   * 默认值：false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityGroup?: boolean;
  /**
   * 组件的无障碍级别。
   * 
   * 'auto'：当前组件由无障碍分组服务和ArkUI进行综合判断组件是否可被辅助功能识别。
   * 
   * 'yes'：当前组件可被辅助功能识别。
   * 
   * 'no'：当前组件不可被辅助功能识别。
   * 
   * 'no-hide-descendants'：当前组件及其所有子组件不可被辅助功能识别。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityLevel?: string;
  /**
   * 组件的导航目标ID。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  navDestinationId?: long;
  /**
   * 组件网格中的当前项。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  currentItem?: AccessibilityGrid;
  /**
   * 组件的跨度数组。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spans?: AccessibilitySpan[];
  /**
   * 组件是否无障碍可见。true表示可见，false表示不可见。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityVisible?: boolean;
  /**
   * 组件的主窗口ID。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  mainWindowId?: int;
  /**
   * 组件是否需要裁剪。true表示需要裁剪，false表示不需要裁剪。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  clip?: boolean;
  /**
   * 组件的父元素ID。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  parentId?: long;
  /**
   * 组件的子元素ID列表。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  childrenIds?: Array<long>;

  /**
   * 元素的自定义无障碍状态播报文本信息。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  accessibilityStateDescription?: string;

  /**
   * 表示元素对用户是否是必需的。true表示元素是必需的，false表示元素不是必需的，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  isEssential?: boolean;

  /**
   * 表示元素所属的组件树ID。默认值为-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  belongTreeId?: int;

  /**
   * 表示元素的子组件树ID。默认值为-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  childrenTreeId?: int;

  /**
   * Indicates the custom actions supported by the component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  customActions?: Array<string>;

  /**
   * 获取节点元素的所有属性名称，使用callback异步回调。
   *
   * @param { AsyncCallback<Array<T>> } callback - 回调函数，返回节点元素的所有属性名称。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  attributeNames<T extends keyof ElementAttributeValues>(callback: AsyncCallback<Array<T>>): void;

  /**
   * 获取节点元素的所有属性名称，使用Promise异步回调。
   *
   * @returns { Promise<Array<T>> } Promise对象，返回节点元素的所有属性名称。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  attributeNames<T extends keyof ElementAttributeValues>(): Promise<Array<T>>;

  /**
   * 根据属性名称获取属性值。使用callback异步回调。
   *
   * @param { T } attributeName - 表示属性的名称。
   * @param { AsyncCallback<ElementAttributeValues[T]> } callback - 回调函数，返回根据节点属性名称获取的属性值。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300004 - This property does not exist.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  attributeValue<T extends keyof ElementAttributeValues>(
    attributeName: T,
    callback: AsyncCallback<ElementAttributeValues[T]>
  ): void;

  /**
   * 根据属性名称获取属性值，使用Promise异步回调。
   *
   * @param { T } attributeName - 表示属性的名称。
   * @returns { Promise<ElementAttributeValues[T]> } Promise对象，返回根据节点属性名称获取的属性值。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300004 - This property does not exist.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  attributeValue<T extends keyof ElementAttributeValues>(attributeName: T): Promise<ElementAttributeValues[T]>;

  /**
   * 获取节点元素支持的所有操作名称，使用callback异步回调。
   *
   * @param { AsyncCallback<Array<string>> } callback - 回调函数，返回节点元素支持的所有操作名称。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  actionNames(callback: AsyncCallback<Array<string>>): void;

  /**
   * 获取节点元素支持的所有操作名称，使用Promise异步回调。
   *
   * @returns { Promise<Array<string>> } Promise对象，返回节点元素支持的所有操作名称。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  actionNames(): Promise<Array<string>>;

  /**
   * 根据操作名称执行某个操作，使用callback异步回调。
   *
   * @param { string } actionName - 表示属性的名称，取值参考[Action]{@link ./../@ohos.accessibility:accessibility.Action}。
   * @param { object } parameters - 表示执行操作时所需要的参数；默认为空。
   * @param { AsyncCallback<void> } callback - 回调函数，表示执行指定操作的回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300005 - This action is not supported.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  performAction(actionName: string, parameters: object, callback: AsyncCallback<void>): void;

  /**
   * 根据操作名称执行某个操作，使用Promise异步回调。
   *
   * @param { string } actionName - 表示属性的名称，取值参考[Action]{@link ./../@ohos.accessibility:accessibility.Action}。
   * @param { object } parameters - 表示执行操作时所需要的参数；默认为空。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300005 - This action is not supported.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  performAction(actionName: string, parameters?: object): Promise<void>;

  /**
   * 根据操作名称执行某个操作，使用callback异步回调。
   *
   * @param { string } actionName - 表示属性的名称，取值参考[Action]{@link ./../@ohos.accessibility:accessibility.Action}。
   * @param { AsyncCallback<void> } callback - 回调函数，表示执行指定操作的回调。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300005 - This action is not supported.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  performAction(actionName: string, callback: AsyncCallback<void>): void;

  /**
   * 根据action指定的操作类型和parameters传入的参数，执行特定操作。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { AccessibilityAction } action - 无障碍节点可执行的操作。
   * @param { Parameter } parameters - 执行操作时设置的参数值，默认为空。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300005 - This action is not supported.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  executeAction(action: AccessibilityAction, parameters?: Parameter): Promise<void>;

  /**
   * 获取文本组件中光标位置，使用callback异步回调。
   *
   * @param { AsyncCallback<int> } callback - 回调函数，表示文本组件中光标位置。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  getCursorPosition(callback: AsyncCallback<int>): void;

  /**
   * 获取文本组件中光标位置，使用Promise异步回调。
   *
   * @returns { Promise<int> } Promise对象，返回当前光标所处位置。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  getCursorPosition(): Promise<int>;

  /**
   * 提供开启/关闭幕帘屏的能力。
   *
   * @param { boolean } isEnable - true表示打开幕帘屏功能，false表示关闭幕帘屏功能。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  enableScreenCurtain(isEnable: boolean): void;

  /**
   * 根据节点内容查询所有节点元素。使用callback异步回调。
   *
   * @param { 'content' } type - 固定为'content',表示查找的类型为节点元素内容。
   * @param { string } condition - 表示查找的条件。
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback - 回调函数，返回满足指定查询关键字的所有节点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  findElement(type: 'content', condition: string, callback: AsyncCallback<Array<AccessibilityElement>>): void;

  /**
   * 根据节点内容查询所有节点元素，使用Promise异步回调。
   *
   * @param { 'content' } type - 固定为'content', 表示查找的类型为节点元素内容。
   * @param { string } condition - 表示查找的条件。
   * @returns { Promise<Array<AccessibilityElement>> } Promise对象，返回满足指定查询关键字的所有节点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  findElement(type: 'content', condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * 根据焦点元素类型查询节点元素，使用callback异步回调。
   *
   * @param { 'focusType' } type - 固定为'focusType'，表示查询的类型为节点的焦点元素类型。
   * @param { FocusType } condition - 表示查询焦点元素的类型。
   * @param { AsyncCallback<AccessibilityElement> } callback - 回调函数，返回满足指定查询焦点元素类型的节点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  findElement(type: 'focusType', condition: FocusType, callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * 根据焦点元素类型查询节点元素，使用Promise异步回调。
   *
   * @param { 'focusType' } type - 固定为'focusType'，表示查询的类型为节点的焦点元素类型。
   * @param { FocusType } condition - 表示查询焦点元素的类型。
   * @returns { Promise<AccessibilityElement> } Promise对象，返回满足指定查询焦点元素类型的节点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  findElement(type: 'focusType', condition: FocusType): Promise<AccessibilityElement>;

  /**
   * 根据下一焦点元素方向查询节点元素，使用callback异步回调。
   *
   * @param { 'focusDirection' } type - 固定为'focusDirection', 表示查询的类型为节点的下一焦点元素方向。
   * @param { FocusDirection } condition - 表示下一查询焦点元素的方向。
   * @param { AsyncCallback<AccessibilityElement> } callback - 回调函数，返回满足指定查询下一焦点元素方向的节点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  findElement(type: 'focusDirection', condition: FocusDirection, callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * 根据下一焦点元素方向查询节点元素，使用Promise异步回调。
   *
   * @param { 'focusDirection' } type - 固定为'focusDirection'，表示查询的类型为节点的下一焦点元素方向。
   * @param { FocusDirection } condition - 表示查询下一焦点元素的方向。
   * @returns { Promise<AccessibilityElement> } Promise对象，返回满足指定查询下一焦点元素方向的节点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  findElement(type: 'focusDirection', condition: FocusDirection): Promise<AccessibilityElement>;

  /**
   * 根据节点配置的accessibilityTextHint无障碍文本类型查询所有节点元素，使用Promise异步回调。
   *
   * @param { 'textType' } type - 固定为'textType', 表示根据文本类型查找节点元素。
   * @param { string } condition - 表示查找的条件。
   * @returns { Promise<Array<AccessibilityElement>> } Promise对象，返回满足指定查询关键字的所有节点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   */
  findElement(type: 'textType', condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * Find elements that match the condition.
   *
   * @param { string } condition Indicates the specific content to be queried.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  findElementByTextType(condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * 根据elementId查询当前活动窗口下的节点元素。使用Promise异步回调。
   *
   * @param { 'elementId' } type - 固定为'elementId', 表示根据elementId查询当前活动窗口下的节点元素。
   * @param { long } condition - 表示要查询的节点元素的elementId。
   * @returns { Promise<AccessibilityElement> } Promise对象，返回满足指定查询条件的节点元素。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   */
  findElement(type: 'elementId', condition: long): Promise<AccessibilityElement>;

  /**
   * Find elements that match the condition.
   *
   * @param { long } condition Indicates the specific content to be queried.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  findElementByElementId(condition: long): Promise<AccessibilityElement>;

  /**
   * 获取无障碍节点元素的父元素。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<AccessibilityElement> } Promise对象，返回当前元素的父元素。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  getParent(): Promise<AccessibilityElement>;

  /**
   * 获取元素的子元素列表。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<Array<AccessibilityElement>> } Promise对象，返回当前元素的子元素列表。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  getChildren(): Promise<Array<AccessibilityElement>>;

  /**
   * 获取活动窗口中的根元素。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<AccessibilityElement> } Promise对象，返回活动窗口中的根元素。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  getRoot(): Promise<AccessibilityElement>;

  /**
   * 根据内容查找元素。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { string } condition - 内容。
   * @returns { Promise<Array<AccessibilityElement>> } Promise对象，返回包含指定内容的元素列表。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  findElementByContent(condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * 根据焦点方向查找元素。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { FocusDirection } condition - 焦点方向。
   * @returns { Promise<AccessibilityElement> } Promise对象，返回指定焦点方向的元素。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  findElementByFocusDirection(condition: FocusDirection): Promise<AccessibilityElement>;

  /**
   * 根据提示文本查找元素。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { string } condition - 提示文本。
   * @returns { Promise<Array<AccessibilityElement>> } Promise对象，返回包含指定提示文本的元素列表。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  findElementsByAccessibilityHintText(condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * 根据元素 ID 查找元素。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { long } condition - 元素 ID。
   * @returns { Promise<AccessibilityElement> } Promise对象，返回指定 ID 的元素。
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  findElementById(condition: long): Promise<AccessibilityElement>;

  /**
   * 查询满足条件的可聚焦节点。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { FocusRule } rule - 检查当前节点及其子节点的规则。
   * @param { FocusCondition } condition - 表示查询可聚焦节点方式。
   * @returns { Promise<FocusMoveResult> } Promise对象，返回查询结果对象。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  findElementsByCondition(rule: FocusRule, condition: FocusCondition): Promise<FocusMoveResult>;
}

/**
 * 节点元素具备的属性名称及属性值类型信息。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @stagemodelonly
 * @since 9 dynamiconly
 */
export interface ElementAttributeValues {
  /**
   * 表示元素是否处于无障碍焦点状态。true表示元素当前处于无障碍焦点状态，false表示元素当前不处于无障碍焦点状态，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  accessibilityFocused: boolean;
  /**
   * 应用包名。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  bundleName: string;
  /**
   * 表示元素是否支持点击操作。true表示元素支持点击操作，false表示元素不支持点击操作，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  checkable: boolean;
  /**
   * 表示元素当前的可点击状态。true表示元素当前是可点击的，false表示元素当前是不可点击的，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  checked: boolean;
  /**
   * 所有子元素。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  children: Array<AccessibilityElement>;
  /**
   * 表示元素是否可点击。true表示元素可点击，false表示元素不可点击，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  clickable: boolean;
  /**
   * 元素所属的组件ID。默认值为-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  componentId: long;
  /**
   * 应与元素所属的组件类型所对应，如：按钮Button类型->'Button'、图像Image类型->'Image'。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  componentType: string;
  /**
   * 内容列表。根据实际场景设置，无特殊限制。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  contents: Array<string>;
  /**
   * 当前项的索引。默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  currentIndex: int;
  /**
   * 元素的描述信息。根据实际场景设置，无特殊限制。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  description: string;
  /**
   * 表示元素是否可编辑。true表示元素可编辑，false表示元素不可编辑，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  editable: boolean;
  /**
   * 屏幕最后显示项的列表索引。默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  endIndex: int;
  /**
   * 错误状态字符串。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  error: string;
  /**
   * 表示元素是否可聚焦。true表示元素可聚焦，false表示元素不可聚焦，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  focusable: boolean;
  /**
   * 提示文本。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  hintText: string;
  /**
   * 输入文本的类型。默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  inputType: int;
  /**
   * 表示元素的别名。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  inspectorKey: string;
  /**
   * 表示元素是否处于活动状态。true表示元素处于活动状态，false表示元素不处于活动状态，默认值为true。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isActive: boolean;
  /**
   * 表示元素是否启用。true表示元素已启用，false表示元素未启用，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isEnable: boolean;
  /**
   * 表示元素是否为提示状态。true表示元素处于提示状态，false表示元素不处于提示状态，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isHint: boolean;
  /**
   * 表示元素是否聚焦。true表示元素处于聚焦状态，false表示元素不处于聚焦状态，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isFocused: boolean;
  /**
   * 表示元素是否为密码。true表示元素为密码，false表示元素不为密码，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isPassword: boolean;
  /**
   * 表示元素是否可见。true表示元素可见，false表示元素不可见，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isVisible: boolean;
  /**
   * 项目的总数。默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  itemCount: int;
  /**
   * 最后的内容。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  lastContent: string;
  /**
   * 该元素的显示层。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  layer: int;
  /**
   * 表示元素是否可长单击。true表示元素可长单击，false表示元素不可长单击，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  longClickable: boolean;
  /**
   * 页码id。默认值为-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  pageId: int;
  /**
   * 元素的父元素。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  parent: AccessibilityElement;
  /**
   * 表示元素是否支持多行文本。true表示元素支持多行文本，false表示元素不支持多行文本，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  pluralLineSupported: boolean;
  /**
   * 元素的面积。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  rect: Rect;
  /**
   * 元素的资源名称。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  resourceName: string;
  /**
   * 窗口元素的根元素。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  rootElement: AccessibilityElement;
  /**
   * 元素的显示区域。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  screenRect: Rect;
  /**
   * 表示元素是否可滚动。true表示元素可滚动，false表示元素不可滚动，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  scrollable: boolean;
  /**
   * 表示元素是否被选中。true表示元素被选中，false表示元素未被选中，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  selected: boolean;
  /**
   * 在屏幕上的第一个项目的列表索引。默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  startIndex: int;
  /**
   * 元素的文本。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  text: string;
  /**
   * 元素文本的最大长度限制。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  textLengthLimit: int;
  /**
   * 文本被读取时的移动粒度。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  textMoveUnit: accessibility.TextMoveUnit;
  /**
   * 触发元素事件的动作。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  triggerAction: accessibility.Action;
  /**
   * 元素的窗口类型。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  type: WindowType;
  /**
   * 最大值。默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  valueMax: double;
  /**
   * 最小值。默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  valueMin: double;
  /**
   * 当前值。默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  valueNow: double;
  /**
   * 窗口ID。默认值为-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  windowId: int;
  /**
   * 对于可滚动类控件，如List、Grid，内容区相对控件的顶部坐标滚动的像素偏移量，单位为像素（px）。默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  offset: double;
  /**
   * 元素的无障碍文本类型，由组件accessibilityTextHint属性配置。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  textType: string;
  /**
   * 元素的无障碍文本信息。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  accessibilityText: string;
  /**
   * 元素的可触摸区域。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  hotArea: Rect;
  /**
   * 自定义组件类型。与元素的[AccessibilityRoleType枚举说明]{@link ./../@internal/component/ets/common:AccessibilityRoleType}类型所对应。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  customComponentType?: string;
  /**
   * 下一个要聚焦的组件ID。通过findElement('elementId')查询到的AccessibilityElementInfo对象中可获取到用户在控件上设置的该属性值。默认值为-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  accessibilityNextFocusId?: long;
  /**
   * 上一个聚焦的组件ID。通过findElement('elementId')查询到的AccessibilityElementInfo对象中可获取到用户在控件上设置的该属性值。默认值为-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  accessibilityPreviousFocusId?: long;
  /**
   * 扩展属性，用于定义一些特定组件的属性，包含：
   * 
   * - CheckboxGroupSelectedStatus：表示CheckboxGroup组件的选中状态，其中取值0表示已选中，取值1表示部分选中，取值2表示未选中。
   * - Row：Grid组件中聚焦item的行信息，表示该item在第几行。
   * - Column：Grid组件中聚焦的item的列，表示该item在第几列。
   * - ListItemIndex：List组件中聚焦item的行信息，表示当前该item在第几行。
   * - SideBarContainerStates：表示可展开类组件（SideBarContainer、Select）的展开状态，其中取值0表示收起态，取值1表示展开态。
   * - ToggleType：表示Toggle组件的具体类型，其中取值0表示Checkbox，取值1表示Switch，取值2表示Button。
   * - BindSheet：表示BindSheet组件的状态，其中取值0表示状态高，取值1表示状态中，取值2表示状态低。
   * - hasRegisteredHover：表示组件是否注册了onAccessibilityHover事件回调，取值为1表示组件注册了事件回调，若未注册不会使用该字段。
   * - direction：表示list组件的布局方向，其中取值"vertical"表示竖向，取值"horizontal"表示横向。
   * - expandedState：表示list组件中listItem的展开状态，其中取值"expanded"表示展开态，取值"collapsed"表示收起态。
   * - componentTypeDescription：组件类型详细信息，对componentType的补充描述。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  extraInfo?: string;
  /**
   * 表示无障碍模式下元素是否滚动，优先级高于scrollable。其中，true表示可滚动，false表示不可滚动，默认值为true。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  accessibilityScrollable?: boolean;
  /**
   * 元素的自定义无障碍状态播报文本信息。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamiconly
   */
  accessibilityStateDescription?: string;
  /**
   * 表示元素对用户是否是必需的。true表示元素是必需的，false表示元素不是必需的，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  isEssential?: boolean;
  /**
   * 表示元素所属的组件树ID。默认值为-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  belongTreeId?: int;

  /**
   * 表示元素的子组件树ID。默认值为-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  childrenTreeId?: int;
  /**
   * 表示当前元素所在网格中的位置。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  currentItem?: AccessibilityGrid;
  /**
   * 表示元素在网格布局中所跨越的行列范围数组。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  span?: AccessibilitySpan[];
  /**
   * 表示元素的子组件ID。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  childrenIds?: Array<long>;
  /**
   * 表示元素的父组件ID。默认值为-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  parentId?: long;
  /**
   * 表示元素的主窗口ID。默认值为-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  mainWindowId?: int;
  /**
   * 表示元素是否是无障碍可见的。true表示元素是无障碍可见的，false表示元素是无障碍不可见的，默认值为true。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  accessibilityVisible?: boolean;
  /**
   * 表示元素所关联的导航目标ID。默认值为-1。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  navDestinationId?: long;
  /**
   * Indicates the custom actions supported by the component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  customActions?: Array<string>;
}

/**
 * 表示查询下一焦点元素的方向。
 *
 * @unionmember { 'up' } 表示向上查询。
 * @unionmember { 'down' } 表示向下查询。
 * @unionmember { 'left' } 表示向左查询。
 * @unionmember { 'right' } 表示向右查询。
 * @unionmember { 'forward' } 表示向前查询。
 * @unionmember { 'backward' } 表示向后查询。
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
export type FocusDirection = 'up' | 'down' | 'left' | 'right' | 'forward' | 'backward';

/**
 * 表示查询可聚焦节点方式。
 *
 * @unionmember { 'forward' } 表示当前节点下一个可聚焦节点，值固定为'forward' 字符串。
 * @unionmember { 'backward' } 表示当前节点上一个可聚焦节点，值固定为'backward'字符串。
 * @unionmember { 'findLast' } 表示查找起始节点的子节点中的最后一个节点，值固定为'findLast'字符串。
 * @unionmember { 'getForwardScrollAncestor' } 表示查找支持前向滚动父组件，值固定为'getForwardScrollAncestor'字符串。
 * @unionmember { 'getBackwardScrollAncestor' } 表示查找支持后向滚动父组件，值固定为'getBackwardScrollAncestor'字符串。
 * @unionmember { 'getScrollableAncestor' } 表示查找支持任意滚动父组件，值固定为'getScrollableAncestor'字符串。
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export type FocusCondition = 'forward' | 'backward' |
'findLast' | 'getForwardScrollAncestor' | 'getBackwardScrollAncestor' | 'getScrollableAncestor';

/**
 * 表示查询焦点元素的类型。
 *
 * @unionmember { 'accessibility' } 表示无障碍的焦点类型。
 * @unionmember { 'normal' } 表示普通的焦点类型。
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
export type FocusType = 'accessibility' | 'normal';

/**
 * 表示窗口的类型。
 *
 * @unionmember { 'application' } 表示应用窗口类型。
 * @unionmember { 'system' } 表示系统窗口类型。
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
export type WindowType = 'application' | 'system';

/**
 * 表示查找可聚焦节点时，如何判断起始节点及其子节点的聚焦能力。
 *
 * @unionmember { 'bypassSelf' } 表示跳过对起始节点的检查，只检查其子节点。值固定为'bypassSelf'字符串。
 * @unionmember { 'bypassSelfDescendants' } 表示跳过对起始节点及其所有子节点的检查。值固定为'bypassSelfDescendants'字符串。
 * @unionmember { 'checkSelf' } 表示先检查起始节点是否可以聚焦，如果可以则直接使用；如果不能聚焦，则继续检查其子节点。值固定为'checkSelf'字符串。
 * @unionmember { 'checkSelfBypassDescendants' } 表示先检查起始节点是否可以聚焦，如果可以则使用；如果不能聚焦，则跳过所有子节点的检查。值固定为'
 *     checkSelfBypassDescendants'字符串。
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export type FocusRule = 'bypassSelf' | 'bypassSelfDescendants' |
'checkSelf' | 'checkSelfBypassDescendants';

/**
 * 表示矩形区域。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
export interface Rect {
  /**
   * 矩形区域的左边界，单位为像素（px）。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  left: int;
  /**
   * 矩形区域的上边界，单位为像素（px）。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  top: int;
  /**
   * 矩形区域的宽度，单位为像素（px）。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  width: int;
  /**
   * 矩形区域的高度，单位为像素（px）。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  height: int;
}

/**
 * 辅助功能网格信息。详见[AccessibilityElement]{@link AccessibilityElement}中的属性currentItem。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
interface AccessibilityGrid {
  /**
   * 网格行索引。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  rowIndex: int;
  /**
   * 网格列索引。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  columnIndex: int;
}

/**
 * 辅助功能超链接文本信息。详见[AccessibilityElement]{@link AccessibilityElement}中的属性spans。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
interface AccessibilitySpan {
  /**
   * 超链接文本编号。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spanId: int;
  /**
   * 超链接文本的文本内容。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spanText: string;
  /**
   * 超链接文本的辅助功能文本。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityText: string;
  /**
   * 超链接文本的辅助功能描述。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityDescription: string;
  /**
   * 超链接文本的辅助功能级别。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityLevel: string;
}

/**
 * 无障碍节点元素执行特定操作时，为操作提供具体设置的参数值。详见[AccessibilityAction]{@link ./../@ohos.accessibility:AccessibilityAction}（无障碍节点元素可执行的操
 * 作）。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export declare class Parameter {
  /**
   * 设置组件文本时文本内容。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  setText?: string;
  /**
   * 选定组件内文本时的起始坐标，如：'2'。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selectTextBegin?: string;
  /**
   * 选定组件内文本时的结束坐标，如：'8'。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selectTextEnd?: string;
  /**
   * 表示选定组件内文本时是否向前选择。true表示向前选择，false表示不向前选择。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selectTextInForWard?: boolean;
  /**
   * 设置光标的偏移量，如：'1'。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  offset?: string;
  /**
   * 对超链接文本进行点击操作时文本编号。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spanId?: string;
  /**
   * 组件滚动类型，包括'fullScreen'（全屏）和'halfScreen'（半屏）。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  scrollType?: string;
  /**
   * 设置注入的动作。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  injectActionType?: InjectActionType;
  /**
   * Indicates the action for AccessibilityAction.EXECUTE_CUSTOM_ACTION.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  customAction?: string;
  /**
   * Indicates the scene for AccessibilityAction.ACCESSIBILITY_FOCUS.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accessibilityFocusScene?: AccessibilityFocusScene;
}

/**
 * 查询无障碍节点返回值类型。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export declare interface FocusMoveResult {
  /**
   * 查询返回的无障碍节点。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  target: Array<AccessibilityElement>;

  /**
   * 查询无障碍节点返回结果类型。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  result: FocusMoveResultCode;
}