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
 * ###### Usage
 * 
 * Before using AccessibilityExtensionContext, obtain an AccessibilityExtensionContext instance through an 
 * AccessibilityExtensionAbility subclass instance.
 * 
 * ```ts
 * import { AccessibilityExtensionAbility } from '@kit.AccessibilityKit';
 * class EntryAbility extends AccessibilityExtensionAbility {
 *   onConnect(): void {
 *     let axContext = this.context; 
 *   } 
 * }
 * ```
 *
 * @file Provides accessibility extension context
 * @kit AccessibilityKit
 */

import type { AsyncCallback, BusinessError, Callback } from '../@ohos.base';
import ExtensionContext from './ExtensionContext';
import type accessibility from '../@ohos.accessibility';
/*** if arkts dynamic */
import type { GesturePath } from '../@ohos.accessibility.GesturePath';
/*** endif */
import type Want from '../@ohos.app.ability.Want';
import { AccessibilityAction, FocusMoveResultCode, InjectActionType,
  AccessibilityFocusScene, FocusRuleType, OperateVirtualNodeResult,
  AccessibilitySourceType } from '../@ohos.accessibility';

/**
 * The **AccessibilityExtensionContext** module, inherited from **ExtensionContext**, provides context for 
 * **AccessibilityExtensionAbility**.
 * 
 * The Accessibility Extension Context module provides capabilities related to the accessibility extension, including 
 * configuring concerned information types, querying node information, and gesture injection.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
declare class AccessibilityExtensionContext extends ExtensionContext {
  /**
   * Sets the bundle name of the concerned app. This API uses an asynchronous callback to return the result.
   *
   * @param { Array<string> } targetNames - Package name of the app to focus on. After setting, the service receives
   *     accessibility events only from the focused app. If not set, accessibility events from all apps are received by
   *     default. To cancel the focus on an app, pass an empty array.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the target package name is set
   *     successfully, **err** is **undefined**; otherwise, it is an error object.
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
   * Sets the bundle name of the concerned app. This API uses a promise to return the result.
   *
   * @param { Array<string> } targetNames - Sets the package names of the apps of interest. After setting, the service
   *     receives only accessibility events of the apps of interest. If not set, the service receives accessibility
   *     events of all apps by default. To cancel the focus on apps, pass an empty array.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the focus element. This API uses an asynchronous callback to return the result.
   *
   * @param { boolean } isAccessibilityFocus - Whether the element obtained is an accessibility focus element. The value
   *     **true** indicates that it is an accessibility focus element, and **false** indicates the opposite.
   * @param { AsyncCallback<AccessibilityElement> } callback - Callback invoked to return the result. If the focus
   *     element is obtained successfully, **err** is **undefined** and **data** is the corresponding focus element;
   *     otherwise, **err** is an error object.
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
   * Obtains the focus element. This API uses a promise to return the result.
   *
   * @param { boolean } isAccessibilityFocus - Whether to obtain the accessibility focus element. The value **true**
   *     indicates that it is an accessibility focus element, and **false** indicates that it is not an accessibility
   *     focus element. Default value: **false**.
   * @returns { Promise<AccessibilityElement> } Promise used to return the current focus element.
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
   * Obtains the focus element. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<AccessibilityElement> } callback - Callback used to return the focus element. If the
   *     operation is successful, **err** is **undefined** and **data** is the current focus element; otherwise, **err**
   *     is an error object.
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
   * Obtains the root element of the specified window. This API uses an asynchronous callback to return the result.
   *
   * @param { int } windowId - Number of the specified window.
   * @param { AsyncCallback<AccessibilityElement> } callback - Callback used to return the result. If the root node
   *     element is obtained successfully, **err** is **undefined** and **data** is the root node element of the
   *     specified window; otherwise, **err** is an error object.
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
   * Obtains the root element of the specified window. This API uses a promise to return the result.
   *
   * @param { int } windowId - ID of the window whose root element is to be obtained. If this parameter is not
   *     specified, it indicates the current active window.
   * @returns { Promise<AccessibilityElement> } Promise used to return the root element of the specified window.
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
   * Obtains the root element of the currently active window. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { AsyncCallback<AccessibilityElement> } callback - Callback invoked to return the result. If the root node
   *     element is obtained successfully, err is undefined and data is the root node element of the currently active
   *     window; otherwise, err is an error object.
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
   * Obtains all windows on the specified display. This API uses an asynchronous callback to return the result.
   *
   * @param { long } displayId - ID of the specified screen, used to identify the screen for which to obtain windows.
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback - Callback used to return the result. If the windows
   *     are obtained successfully, **err** is **undefined** and **data** is all windows on the specified screen;
   *     otherwise, **err** is an error object.
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
   * Obtains all windows on the specified display. This API uses a promise to return the result.
   *
   * @param { long } displayId - ID of the display from which the window information is obtained. If this parameter is
   *     not specified, it indicates the default main display.
   * @returns { Promise<Array<AccessibilityElement>> } Promise used to return the window list.
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
   * Obtains all windows on the default main display. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback - Callback invoked to return the result. If the
   *     window is obtained successfully, **err** is **undefined** and **data** is all windows of the default home
   *     screen; otherwise, it is an error object.
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
   * Injects a gesture, applicable to scenarios where an accessibility app performs touch interactions on behalf of the 
   * user, such as tap and swipe operations. This API uses an asynchronous callback to return the result.
   *
   * @param { GesturePath } gesturePath - Path of the gesture to inject.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the gesture injection is
   *     successful, **err** is **undefined**; otherwise, it is an error object.
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
   * Injects a gesture, applicable to scenarios where an accessibility app performs touch interactions on behalf of the 
   * user, such as tap and swipe operations. This API uses a promise to return the result.
   *
   * @param { GesturePath } gesturePath - Path of the gesture to inject.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Injects a gesture, applicable to scenarios where an accessibility app performs touch interactions on behalf of the 
   * user, such as tap and swipe operations.
   *
   * @param { GesturePath } gesturePath - Path of the gesture to inject.
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
   * Starts a foreground page. This API uses a promise to return the result.
   *
   * @param { Want } want - Want type parameter, which passes in the information about the ability to start, such as the
   *     ability name and bundle name.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Queries all descendant accessibility nodes in a specified window or under a specified node in batches. This API 
   * uses a promise to return the result.
   *
   * @param { int } windowId - ID of the window to query.
   * @param { long } elementId - ID of the node to query. If this parameter is passed, all child nodes under this node (
   *     excluding the node itself) are queried. If this parameter is not passed or **-1** is passed, the complete node
   *     tree (including the root node) in the specified window is queried. The default value is **-1**.
   * @returns { Promise<Array<AccessibilityElement>> } Promise used to return the list of all child nodes in the current
   *     window or under the current node.
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
   * Queries the list of default focus element IDs customized by the app. This API uses a promise to return the result.
   * 
   * Default focus refers to the element that the accessibility service prioritizes for focusing when a window is 
   * opened.
   *
   * @param { int } windowId - ID of the window to query.
   * @returns { Promise<Array<long>> } Promise used to return the list of custom default focus IDs in the current
   *     window.
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
   * Holds the RunningLock. After the lock is held, the screen will not automatically turn off. After this method is 
   * called, call [unholdRunningLockSync]{@link AccessibilityExtensionContext#unholdRunningLockSync} to release the lock
   * and restore the automatic screen-off mechanism when the screen no longer needs to stay on.
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
   * Releases the RunningLock and restores automatic screen-off. Used in pair with 
   * [holdRunningLockSync]{@link AccessibilityExtensionContext#holdRunningLockSync}.
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
   * Registers a callback with the accessibility service, which is invoked before the accessibility service closes this 
   * Accessibility Extension Service. This API uses an asynchronous callback to return the result.
   * 
   * This registration function must be used together with 
   * [notifyDisconnect]{@link AccessibilityExtensionContext#notifyDisconnect}. If 
   * [notifyDisconnect]{@link AccessibilityExtensionContext#notifyDisconnect} is not called, the Accessibility Extension
   * Service is automatically closed after a default wait of 30 seconds.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { 'preDisconnect' } type - Listening event name, which is fixed to 'preDisconnect', indicating the event
   *     that the Accessibility Extension Service is about to be closed.
   * @param { Callback<void> } callback - Callback invoked when the Accessibility Extension Service is about to be
   *     closed.
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
   * Unregisters the pre-disconnect callback registered with the accessibility service. This callback must be registered
   * via on('preDisconnect') before it can be unregistered. After unregistration, the callback will no longer be 
   * executed before the accessibility service closes this extension service.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { 'preDisconnect' } type - Event name, which is fixed to 'preDisconnect', indicating that the accessibility
   *     extension service is about to be closed.
   * @param { Callback<void> } [callback] - Callback for the event that the accessibility extension service is about to
   *     be closed. It must be the same as the callback in
   *     [on('preDisconnect')]{@link AccessibilityExtensionContext#on(type: 'preDisconnect', callback: Callback<void>)}.
   *     If this parameter is not specified, all registered events are unregistered.
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
   * Notifies the accessibility service that the accessibility extension service can be closed.
   * 
   * This function must be used together with the pre-disconnection registration API 
   * [on('preDisconnect')]{@link AccessibilityExtensionContext#on(type: 'preDisconnect', callback: Callback<void>)}. If 
   * the pre-disconnection registration function has not been called, calling this function directly has no effect.
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
   * Obtains the element that currently has the accessibility focus. This API uses a promise to return the result.
   * 
   * The accessibility focus refers to the node currently focused by the accessibility service, which is different from 
   * the input focus.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<AccessibilityElement> } Promise used to return the element that currently has the focus.
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
   * Obtains the root element of the accessibility node tree of the active window. This API uses a promise to return the
   * result.
   * 
   * The active window refers to the foreground app window that currently gains focus.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { int } windowId - ID of the window to query. If this parameter is not provided, the root element of the
   *     active window is queried by default.
   * @returns { Promise<AccessibilityElement> } Promise used to return the root element of the active window.
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

  /**
   * Obtains the list of all accessibility-accessible windows on the current display device.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { long } displayId - Display ID. If this parameter is not provided, the default displayId is used.
   * @returns { Array<AccessibilityElement> } List of windows.
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
   * Adds a virtual accessibility node tree. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { long } elementId - Parent node ID of the virtual node tree to add.
   * @param { int } windowId - Parent window ID of the virtual node tree to add.
   * @param { Array<AccessibilityVirtualNode> } nodes - Array of virtual nodes to add. The virtual nodes in the array
   *     are organized into a tree based on the parentId and childNodeIds parent-child relationships.
   * @returns { Promise<OperateVirtualNodeResult> } Promise used to return the execution result.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300000 - System abnormality.Possible causes:
   *     <br>1.Internal operation failed.
   *     <br>2.Failed to obtain the required service or client object (null pointer).
   *     <br>3.IPC communication failed.
   *     <br>4.Failed to obtain the accessibility service proxy.
   *     <br>5.Timed out while waiting for the result of an asynchronous operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  addAccessibilityVirtualNodes(elementId: long, windowId: int, nodes: Array<AccessibilityVirtualNode>): Promise<OperateVirtualNodeResult>;

  /**
   * Modifies the accessibility node property. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { long } elementId - ID of the accessibility node to modify.
   * @param { int } windowId - ID of the window of the accessibility node to modify.
   * @param { AccessibilityVirtualNode } node - Property values of the accessibility node to modify. The modifiable
   *     properties include:
   *     <br>accessibilityText, accessibilityGroup, accessibilityLevel, checkable, checked, selected, clickable,
   *     enabled, customComponentType.
   * @returns { Promise<OperateVirtualNodeResult> } Promise used to return the execution result.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300000 - System abnormality.Possible causes:
   *     <br>1.Internal operation failed.
   *     <br>2.Failed to obtain the required service or client object (null pointer).
   *     <br>3.IPC communication failed.
   *     <br>4.Failed to obtain the accessibility service proxy.
   *     <br>5.Timed out while waiting for the result of an asynchronous operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  updateAccessibilityElementProperty(elementId: long, windowId: int, node: AccessibilityVirtualNode): Promise<OperateVirtualNodeResult>;

  /**
   * Deletes the added accessibility virtual node tree. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { long } elementId - ID of the node where the virtual node tree to be deleted is located.
   * @param { int } windowId - ID of the window where the virtual node tree to be deleted is located.
   * @returns { Promise<OperateVirtualNodeResult> } Promise used to return the execution result.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300000 - System abnormality.Possible causes:
   *     <br>1.Internal operation failed.
   *     <br>2.Failed to obtain the required service or client object (null pointer).
   *     <br>3.IPC communication failed.
   *     <br>4.Failed to obtain the accessibility service proxy.
   *     <br>5.Timed out while waiting for the result of an asynchronous operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  removeAccessibilityVirtualNodes(elementId: long, windowId: int): Promise<OperateVirtualNodeResult>;
}

export default AccessibilityExtensionContext;

/**
 * An accessibility node element that provides capabilities such as querying parent/child elements, finding elements by 
 * content or focus direction, and performing accessibility actions. It is applicable to scenarios where an 
 * accessibility app needs to interact with and operate on UI nodes.
 * 
 * Before calling methods of AccessibilityElement, obtain an AccessibilityElement instance through 
 * [AccessibilityExtensionContext.getFocusElement()]{@link AccessibilityExtensionContext#getFocusElement(isAccessibilityFocus?: boolean)}
 * or 
 * [AccessibilityExtensionContext.getWindowRootElement()]{@link AccessibilityExtensionContext#getWindowRootElement(windowId?: int)}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface AccessibilityElement {
  /**
   * Obtains all attribute names of the node element. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<T>> } callback - Callback invoked to return the result. If the attribute names are
   *     obtained successfully, **err** is undefined and **data** contains all attribute names of the node element;
   *     otherwise, **err** is an error object.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  attributeNames<T extends keyof ElementAttributeValues>(callback: AsyncCallback<Array<T>>): void;

  /**
   * Obtains all attribute names of the node element. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<T>> } Promise used to return all attribute names of the element.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  attributeNames<T extends keyof ElementAttributeValues>(): Promise<Array<T>>;

  /**
   * Obtains the attribute value based on an attribute name. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { T } attributeName - Attribute name.
   * @param { AsyncCallback<ElementAttributeValues[T]> } callback - Callback used to return the result. If the attribute
   *     value is obtained successfully, err is undefined and data is the value of the corresponding attribute;
   *     otherwise, the value is an error object.
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
   * Obtains the attribute value based on the attribute name. This API uses a promise to return the result.
   *
   * @param { T } attributeName - Attribute name.
   * @returns { Promise<ElementAttributeValues[T]> } Promise used to return the attribute value.
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
   * Obtains the names of all actions supported by the node element. This API uses an asynchronous callback to return 
   * the result.
   *
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return the result. If the action names are
   *     obtained successfully, **err** is **undefined** and **data** contains all action names supported by the node
   *     element; otherwise, **err** is an error object.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  actionNames(callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the names of all actions supported by the node element. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<string>> } Promise used to return the names of all actions supported by the element.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  actionNames(): Promise<Array<string>>;

  /**
   * Performs the specified action on the accessibility node element. This API uses an asynchronous callback to return 
   * the result.
   *
   * @param { string } actionName - Name of the action. For the value range, see
   *     [Action]{@link @ohos.accessibility:accessibility.Action}.
   * @param { object } parameters - Parameters required for executing the action. Different action types require
   *     different parameter structures. For details about the parameter format, see the description of each Action. For
   *     example, setSelection requires the selectTextBegin, selectTextEnd, and selectTextInForWard parameters, and
   *     setCursorPosition requires the offset parameter.
   * @param { AsyncCallback<void> } callback - Callback invoked to return the result. If the action is executed
   *     successfully, err is undefined; otherwise, err is an error object.
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
   * Performs the specified action on the accessibility node element. This API uses a promise to return the result.
   *
   * @param { string } actionName - Name of the action. For the value range, see
   *     [Action]{@link @ohos.accessibility:accessibility.Action}.
   * @param { object } parameters - Parameters required for executing the action. Different actions require different
   *     parameter key names and value types. For details about the value principles, see the definition of each Action.
   *     For example, setSelection requires the selectTextBegin, selectTextEnd, and selectTextInForWard parameters, and
   *     setCursorPosition requires the offset parameter. If not passed, this parameter is empty by default.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Performs the specified action on the accessibility node element. This API uses an asynchronous callback to return 
   * the result.
   *
   * @param { string } actionName - Name of the action. For the value range, see
   *     [Action]{@link @ohos.accessibility:accessibility.Action}.
   * @param { AsyncCallback<void> } callback - Callback invoked when the operation is executed. If the operation
   *     succeeds, **err** is **undefined**; otherwise, **err** is an error object.
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
   * Obtains the cursor position in a text component. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback used to return the result. If the cursor position is obtained
   *     successfully, **err** is undefined and **data** is the position index of the cursor in the text; otherwise,
   *     **err** is an error object.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  getCursorPosition(callback: AsyncCallback<int>): void;

  /**
   * Obtains the cursor position in a text component. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the current cursor position.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  getCursorPosition(): Promise<int>;

  /**
   * Enables or disables the screen curtain. When the screen curtain is enabled, the screen content is hidden (the 
   * screen dims), but the device still responds to operations normally.
   *
   * @param { boolean } isEnable - Whether to enable the screen curtain. The value `true` means to enable the screen
   *     curtain, and `false` means to disable it.
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
   * Finds an element based on the content type. This API uses an asynchronous callback to return the result.
   *
   * @param { 'content' } type - Fixed to 'content', which means the search type is node element content.
   * @param { string } condition - Keyword condition for searching, used to match the text content of node elements.
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback - Callback used to return the result. If the node
   *     elements are found successfully, **err** is **undefined** and **data** is all node elements that meet the
   *     specified search keyword; otherwise, **err** is an error object.
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
   * Finds all node elements based on the node content. This API uses a promise to return the result.
   *
   * @param { 'content' } type - The value is fixed at 'content', indicating that the search type is node element
   *     content.
   * @param { string } condition - Keyword condition for the search, used to match the text content of the node element.
   * @returns { Promise<Array<AccessibilityElement>> } Promise used to return the result.
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
   * Finds a node element based on the focus element type. This API uses an asynchronous callback to return the result.
   *
   * @param { 'focusType' } type - Type of element finding. The value is fixed at **'focusType'**.
   * @param { FocusType } condition - Focus type.
   * @param { AsyncCallback<AccessibilityElement> } callback - Callback invoked to return the result. If the node
   *     element is found, **err** is **undefined** and **data** is the node element that matches the specified query
   *     focus element type; otherwise, an error object is returned.
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
   * Finds a node element based on the focus element type. This API uses a promise to return the result.
   *
   * @param { 'focusType' } type - Type of element finding. The value is fixed at **'focusType'**.
   * @param { FocusType } condition - Focus type.
   * @returns { Promise<AccessibilityElement> } Promise used to return the result.
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
   * Finds a node element based on the next focus element direction. This API uses an asynchronous callback to return 
   * the result.
   *
   * @param { 'focusDirection' } type - Fixed value **'focusDirection'**, representing the query type as the direction
   *     of the next focus element of the node.
   * @param { FocusDirection } condition - Direction for querying the next focus element.
   * @param { AsyncCallback<AccessibilityElement> } callback - Callback invoked to return the result. If the node
   *     element is found successfully, **err** is **undefined** and **data** is the node element that meets the
   *     specified direction for querying the next focus element; otherwise, **err** is an error object.
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
   * Finds a node element based on the next focus element direction. This API uses a promise to return the result.
   *
   * @param { 'focusDirection' } type - Type of element finding. The value is fixed at **'focusDirection'**.
   * @param { FocusDirection } condition - Focus direction.
   * @returns { Promise<AccessibilityElement> } Promise used to return the result.
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
   * Searches for all node elements based on the accessibility text type configured in the component's 
   * accessibilityTextHint attribute. This API uses a promise to return the result.
   *
   * @param { 'textType' } type - Fixed to 'textType', indicating that elements are searched by text type.
   * @param { string } condition - Accessibility text type condition for the search. All node elements whose
   *     accessibilityTextHint attribute matches this text type will be returned.
   * @returns { Promise<Array<AccessibilityElement>> } Promise used to return all node elements that match the specified
   *     accessibility text type.
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
   * Queries the node element in the current active window based on the element ID. This API uses a promise to return 
   * the result.
   * 
   * This method and [findElementById]{@link AccessibilityElement.findElementById} both find a node element by element 
   * ID. They are functionally equivalent. It is recommended to use findElementById.
   *
   * @param { 'elementId' } type - Fixed value **'elementId'**, indicating that the node element in the current active
   *     window is queried by element ID.
   * @param { long } condition - Element ID of the node element to query.
   * @returns { Promise<AccessibilityElement> } Promise used to return the result, which is the node element that meets
   *     the specified query condition.
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
   * Whether the element gains focus for accessibility purposes. The value **true** indicates that the element has 
   * gained focus, and **false** indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityFocused?: boolean;
  /**
   * Bundle name.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  bundleName?: string;
  /**
   * Whether the element is checkable. The value **true** indicates that the element is checkable, and **false** 
   * indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  checkable?: boolean;
  /**
   * Whether the element is checked. The value **true** indicates that the element is checked, and **false** indicates 
   * the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  checked?: boolean;
  /**
   * Whether the element is clickable. The value **true** indicates that the element is clickable, and **false** 
   * indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  clickable?: boolean;
  /**
   * ID of the component to which the element belongs.
   * 
   * Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  componentId?: long;
  /**
   * Type of the component to which the element belongs.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  componentType?: string;
  /**
   * Content displayed by the element. Default value: empty array.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  contents?: Array<string>;
  /**
   * Index of the current item.
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  currentIndex?: int;
  /**
   * Description of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  description?: string;
  /**
   * Whether the element is editable. The value **true** indicates that the element is editable, and **false** indicates
   * the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  editable?: boolean;
  /**
   * Index of the last list item displayed on the screen.
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  endIndex?: int;
  /**
   * Error state of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  error?: string;
  /**
   * Whether the element can gain focus (here it refers to accessibility focus, which is different from input focus). 
   * The value **true** indicates that the element can gain focus, and **false** indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  focusable?: boolean;
  /**
   * Hint text.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  hintText?: string;
  /**
   * Type of the input text. Different values correspond to different input modes: **0** indicates no specific type; 
   * **1** indicates text; **2** indicates email; **3** indicates date; **4** indicates time; **5** indicates number; 
   * **6** indicates password; **7** indicates phone number; **8** indicates username; **9** indicates new password.
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  inputType?: int;
  /**
   * Inspector key.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  inspectorKey?: string;
  /**
   * Whether the element is active. The value **true** indicates that the element is active, and **false** indicates the
   * opposite.
   * 
   * Default value: **true**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isActive?: boolean;
  /**
   * Whether the element is enabled. The value **true** indicates that the element is enabled, and **false** indicates 
   * the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isEnable?: boolean;
  /**
   * Whether the element is a hint. The value **true** indicates that the element is a hint, and **false** indicates the
   * opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isHint?: boolean;
  /**
   * Whether the element has gained focus (here it refers to accessibility focus, which is different from input focus). 
   * The value **true** indicates that the element has gained focus, and **false** indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isFocused?: boolean;
  /**
   * Whether the element is a password. The value **true** indicates that the element is a password, and **false** 
   * indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isPassword?: boolean;
  /**
   * Whether the element is visible. The value **true** indicates that the element is visible, and **false** indicates 
   * the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  isVisible?: boolean;
  /**
   * Total number of items.
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  itemCount?: int;
  /**
   * Content of the last item.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  lastContent?: string;
  /**
   * Display layer of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  layer?: int;
  /**
   * Whether the element is long-clickable. The value **true** indicates that the element is long-clickable, and 
   * **false** indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  longClickable?: boolean;
  /**
   * Page ID.
   * 
   * Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  pageId?: int;
  /**
   * Whether the element supports multi-line text. The value **true** indicates that the element supports multi-line 
   * text, and **false** indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  pluralLineSupported?: boolean;
  /**
   * Area of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  rect?: Rect;
  /**
   * Resource name of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  resourceName?: string;
  /**
   * Display area of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  screenRect?: Rect;
  /**
   * Whether the element is scrollable. The value **true** indicates that the element is scrollable, and **false** 
   * indicates the opposite. When the value conflicts with that of accessibilityScrollable, the value of 
   * accessibilityScrollable prevails.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  scrollable?: boolean;
  /**
   * Whether the element is selected. The value **true** indicates that the element is selected, and **false** indicates
   * the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selected?: boolean;
  /**
   * Index of the first list item on the screen.
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  startIndex?: int;
  /**
   * Text content of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  text?: string;
  /**
   * Maximum text length of the element. Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  textLengthLimit?: int;
  /**
   * Movement unit for text reading.
   * 
   * Default value: **char**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  textMoveUnit?: accessibility.TextMoveUnit;
  /**
   * Action that triggers the element event.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  triggerAction?: AccessibilityAction;
  /**
   * Window type of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  type?: WindowType;
  /**
   * Maximum value.
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  valueMax?: double;
  /**
   * Minimum value.
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  valueMin?: double;
  /**
   * Current value.
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  valueNow?: double;
  /**
   * Window ID.
   * 
   * Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  windowId?: int;
  /**
   * Pixel offset of the content area relative to the top coordinate of the scrollable component (such as List and Grid
   * ), in pixels (px).
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  offset?: double;
  /**
   * Accessibility text type of the element, configured by the accessibilityTextHint attribute of the component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  textType?: string;
  /**
   * Accessibility text information of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityText?: string;
  /**
   * Custom accessibility state announcement text of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  accessibilityStateDescription?: string;
  /**
   * Whether the element is essential to the user. The value **true** indicates that the element is essential, and 
   * **false** indicates the opposite. Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  isEssential?: boolean;
  /**
   * ID of the component tree to which the element belongs. Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  belongTreeId?: int;
  /**
   * ID of the child component tree of the element. Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  childrenTreeId?: int;
  /**
   * Touchable area of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  hotArea?: Rect;
  /**
   * Custom component type. Corresponds to the [AccessibilityRoleType]{@link ./../@internal/component/ets/common:AccessibilityRoleType} type of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  customComponentType?: string;
  /**
   * ID of the next component to gain focus.
   * 
   * Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityNextFocusId?: long;
  /**
   * ID of the previous component to gain focus.
   * 
   * Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityPreviousFocusId?: long;
  /**
   * Extra information of the element. The value is a JSON string.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  extraInfo?: string;
  /**
   * Whether the element is scrollable for accessibility purposes. This attribute has a higher priority than scrollable.
   * That is, when the value of accessibilityScrollable conflicts with that of scrollable, the value of 
   * accessibilityScrollable prevails.
   * 
   * The value **true** indicates that the element is scrollable, and **false** indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityScrollable?: boolean;
  /**
   * Supported action names. Default value: empty array.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  supportedActionNames?: Array<string>;
  /**
   * Whether the element is an accessibility group. The value **true** indicates that the element is an accessibility 
   * group, and **false** indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityGroup?: boolean;
  /**
   * Accessibility level of the component.
   * 
   * **'auto'**: The accessibility grouping service and ArkUI jointly determine whether the component can be recognized 
   * by accessibility.
   * 
   * **'yes'**: The component can be recognized by accessibility.
   * 
   * **'no'**: The component cannot be recognized by accessibility.
   * 
   * **'no-hide-descendants'**: The component and all its child components cannot be recognized by accessibility. 
   * Default value: **'auto'**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityLevel?: string;
  /**
   * Navigation destination ID of the component. Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  navDestinationId?: long;
  /**
   * Current item in the component grid.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  currentItem?: AccessibilityGrid;
  /**
   * Array of accessibility hyperlink text information of the component. Default value: empty array.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spans?: AccessibilitySpan[];
  /**
   * Whether the component is visible for accessibility. The value **true** indicates that the component is visible, and
   * **false** indicates the opposite. Default value: **true**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityVisible?: boolean;
  /**
   * Main window ID of the component. Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  mainWindowId?: int;
  /**
   * Whether the component needs clipping. The value **true** indicates that clipping is needed, and **false** indicates
   * the opposite. Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  clip?: boolean;
  /**
   * Parent element ID of the component. Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  parentId?: long;
  /**
   * List of child element IDs of the component. Default value: empty array.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  childrenIds?: Array<long>;
  /**
   * List of custom actions supported by the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  customActions?: Array<string>;
  /**
   * Source type of the component, used to distinguish default components from newly added or modified virtual 
   * components.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  sourceType?: AccessibilitySourceType;

  /**
   * Performs an action on an accessibility node element based on the action type and parameters specified. This API 
   * uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { AccessibilityAction } action - Action that can be performed on the accessibility node.
   * @param { Parameter } parameters - Parameter value set when performing the action. This parameter is passed when
   *     performing actions that require additional parameter configuration (such as SET_SELECTION, SET_CURSOR_POSITION,
   *     etc.); it is not required when performing parameterless actions (such as CLICK, etc.). Defaults to empty if not
   *     passed.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Obtains the parent element of an accessibility node. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<AccessibilityElement> } Promise used to return the parent element of the current element.
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
   * Obtains the list of child elements of this element. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<Array<AccessibilityElement>> } Promise used to return the list of child elements of the current
   *     element.
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
   * Obtains the root element of the active window. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<AccessibilityElement> } Promise used to return the root element of the active window.
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
   * Searches for node elements by their content text, and returns all node elements that contain the specified text. 
   * This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { string } condition - Content text of the element to find. After this parameter is set, all node elements
   *     that contain this text content are returned.
   * @returns { Promise<Array<AccessibilityElement>> } Promise used to return the result. The value is a list of
   *     elements that contain the specified content.
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
   * Searches for an element based on the focus direction. This API uses a promise to return the result.
   * 
   * Compared with 
   * [findElementsByCondition]{@link AccessibilityElement.findElementsByCondition(rule: FocusRule, condition: FocusCondition)},
   * this method is mainly used to search for web components, while findElementsByCondition is mainly used to search for
   * UI components.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { FocusDirection } condition - Focus direction, which specifies the search direction for finding elements.
   *     For example, 'forward' indicates forward search and 'backward' indicates backward search.
   * @returns { Promise<AccessibilityElement> } Promise used to return the result. The element in the specified focus
   *     direction.
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
   * Searches for an element based on the focus direction and focus rule type. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { FocusDirection } condition - Focus direction.
   * @param { FocusRuleType } type - Focus rule type.
   * @returns { Promise<AccessibilityElement> } Promise used to return the element that matches the focus rule type in
   *     the specified focus direction.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  findElementByFocusDirection(condition: FocusDirection, type: FocusRuleType): Promise<AccessibilityElement>;

  /**
   * Searches for elements by hint text, and returns all node elements whose accessibilityTextHint attribute matches the
   * text. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { string } condition - Hint text of the element to find.
   * @returns { Promise<Array<AccessibilityElement>> } Promise used to return the list of elements with the specified
   *     hint text.
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
   * Searches for a node element in the active window by element ID. This API uses a promise to return the result.
   * 
   * This method is functionally equivalent to 
   * [findElement('elementId')]{@link AccessibilityElement.findElement(type: 'elementId', condition: long)} and is 
   * recommended for priority use.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { long } condition - ID of the node element to query.
   * @returns { Promise<AccessibilityElement> } Promise used to return the element with the specified ID.
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
   * Queries focusable nodes that meet the conditions. This API uses a promise to return the result.
   * 
   * Compared with 
   * [findElementByFocusDirection]{@link AccessibilityElement.findElementByFocusDirection(condition: FocusDirection)}, 
   * this method is mainly used to find UI components, while findElementByFocusDirection is mainly used to find Web 
   * components.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { FocusRule } rule - Rule for checking the current node and its child nodes.
   * @param { FocusCondition } condition - Mode for querying focusable nodes.
   * @returns { Promise<FocusMoveResult> } Promise used to return the result. The FocusMoveResult object contains the
   *     queried accessibility node list and the query result status code.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  findElementsByCondition(rule: FocusRule, condition: FocusCondition): Promise<FocusMoveResult>;

  /**
   * Searches for focusable nodes of the target type based on the rule and query condition. This API uses a promise to 
   * return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { FocusRule } rule - Rule for checking the current node and its child nodes.
   * @param { FocusCondition } condition - Method for querying focusable nodes.
   * @param { FocusRuleType } type - Focus type.
   * @returns { Promise<FocusMoveResult> } Promise used to return the query result object.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  findElementsByCondition(rule: FocusRule, condition: FocusCondition, type: FocusRuleType): Promise<FocusMoveResult>;
}

/**
 * Accessibility grid information. For details, see the property currentItem in 
 * [AccessibilityElement]{@link AccessibilityElement}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
interface AccessibilityGrid {
  /**
   * Grid row index.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  rowIndex: int;
  /**
   * Grid column index.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  columnIndex: int;
}

/**
 * Hyperlink text information for accessibility. For details, see the attribute spans in 
 * [AccessibilityElement]{@link AccessibilityElement}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
interface AccessibilitySpan {
  /**
   * Hyperlink text number.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spanId: int;
  /**
   * Text content of the hyperlink text.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spanText: string;
  /**
   * Accessibility text of the hyperlink text.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityText: string;
  /**
   * Accessibility description of the hyperlink text.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityDescription: string;
  /**
   * Accessibility level of the hyperlink text. 'auto': whether the text can be identified by accessibility is 
   * determined by the system; 'yes': can be identified by accessibility; 'no': cannot be identified by accessibility; '
   * no-hide-descendants': the current text and its child content cannot be identified by accessibility.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityLevel: string;
}

/**
 * Provides parameter values for specific settings when an accessibility node element performs a specific action. 
 * Different action types require different parameter fields. For details about the mapping between action types and 
 * parameter fields, see [AccessibilityAction]{@link @ohos.accessibility:AccessibilityAction} (actions that can be 
 * performed by an accessibility node element).
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export declare class Parameter {
  /**
   * Configured when executing [AccessibilityAction]{@link @ohos.accessibility:AccessibilityAction}.SET_TEXT. Text 
   * content to set for the component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  setText?: string;
  /**
   * Configured when executing [AccessibilityAction]{@link @ohos.accessibility:AccessibilityAction}.SET_SELECTION. Start
   * coordinate for selecting text within the component, for example, '2'. Must be set together with selectTextEnd and 
   * selectTextInForWard.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selectTextBegin?: string;
  /**
   * Configured when executing [AccessibilityAction]{@link @ohos.accessibility:AccessibilityAction}.SET_SELECTION. End 
   * coordinate for selecting text within the component, for example, '8'. Must be set together with selectTextBegin and
   * selectTextInForWard.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selectTextEnd?: string;
  /**
   * Configured when executing [AccessibilityAction]{@link @ohos.accessibility:AccessibilityAction}.SET_SELECTION. 
   * Whether to select forward when selecting text within the component. The value true means forward selection, and 
   * false means backward selection. Must be set together with selectTextBegin and selectTextEnd.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selectTextInForWard?: boolean;
  /**
   * Configured when executing [AccessibilityAction]{@link @ohos.accessibility:AccessibilityAction}.SET_CURSOR_POSITION.
   * Character offset for setting the cursor, for example, '1'.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  offset?: string;
  /**
   * Configured when executing [AccessibilityAction]{@link @ohos.accessibility:AccessibilityAction}.SPAN_CLICK. Text ID 
   * for tapping the hyperlink text.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spanId?: string;
  /**
   * Configured when executing [AccessibilityAction]{@link @ohos.accessibility:AccessibilityAction}.SCROLL_FORWARD or 
   * SCROLL_BACKWARD. Component scroll type. The value 'fullScreen' means full-screen scrolling, and 'halfScreen' means 
   * half-screen scrolling.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  scrollType?: string;
  /**
   * Sets the injected action type. Configured when executing 
   * [AccessibilityAction]{@link @ohos.accessibility:AccessibilityAction}.INJECT_ACTION.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  injectActionType?: InjectActionType;
  /**
   * Configured when executing [AccessibilityAction]{@link @ohos.accessibility:AccessibilityAction}.
   * EXECUTE_CUSTOM_ACTION. Name of the custom action.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  customAction?: string;
  /**
   * Configured when executing [AccessibilityAction]{@link @ohos.accessibility:AccessibilityAction}.ACCESSIBILITY_FOCUS.
   * Accessibility focus scenario.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accessibilityFocusScene?: AccessibilityFocusScene;
}

/**
 * Provides attribute names and value types of a node element.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @stagemodelonly
 * @since 9 dynamiconly
 */
export interface ElementAttributeValues {
  /**
   * Whether the element is in the accessibility focus state. The value **true** indicates that the element is in the 
   * accessibility focus state, and **false** indicates the opposite. The default value is **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  accessibilityFocused: boolean;
  /**
   * Bundle name.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  bundleName: string;
  /**
   * Whether the element is checkable. The value **true** indicates that the element is checkable, and **false** 
   * indicates the opposite. The default value is **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  checkable: boolean;
  /**
   * Whether the element is checked. The value **true** indicates that the element is checked, and **false** indicates 
   * the opposite. The default value is **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  checked: boolean;
  /**
   * All child elements.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  children: Array<AccessibilityElement>;
  /**
   * Whether the element is clickable. The value **true** indicates that the element is clickable, and **false** 
   * indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  clickable: boolean;
  /**
   * ID of the component to which the element belongs. 
   * 
   * Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  componentId: long;
  /**
   * Component type of the element, for example, 'Button' for the Button component and 'Image' for the Image component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  componentType: string;
  /**
   * List of contents. Set this parameter based on site requirements. No special restrictions.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  contents: Array<string>;
  /**
   * Index of the current item. The value range is greater than or equal to 0. The default value is **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  currentIndex: int;
  /**
   * Description of the element. Set this parameter based on site requirements. No special restrictions.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  description: string;
  /**
   * Whether the element is editable. The value **true** indicates that the element is editable, and **false** indicates
   * the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  editable: boolean;
  /**
   * List index of the last displayed item on the screen. The value range is greater than or equal to 0. The default 
   * value is **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  endIndex: int;
  /**
   * Error status.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  error: string;
  /**
   * Whether the element is focusable. The value **true** indicates that the element is focusable, and **false** 
   * indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  focusable: boolean;
  /**
   * Hint text.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  hintText: string;
  /**
   * Type of the input text. Different values correspond to different input modes: **0** indicates no specific type; 
   * **1** indicates text; **2** indicates email; **3** indicates date; **4** indicates time; **5** indicates number; 
   * **6** indicates password; **7** indicates phone number; **8** indicates username; **9** indicates new password. The
   * default value is **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  inputType: int;
  /**
   * Alias of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  inspectorKey: string;
  /**
   * Whether the element is active. The value **true** indicates that the element is active and **false** indicates the 
   * opposite.
   * 
   * Default value: **true**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isActive: boolean;
  /**
   * Whether the element is enabled. The value **true** indicates that the element is enabled, and **false** indicates 
   * the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isEnable: boolean;
  /**
   * Whether the element is a hint. The value **true** indicates that the element is a hint, and **false** indicates the
   * opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isHint: boolean;
  /**
   * Whether the element is focused. The value **true** indicates that the element is focused, and **false** indicates 
   * the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isFocused: boolean;
  /**
   * Whether the element is a password. The value **true** indicates that the element is a password, and **false** 
   * indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isPassword: boolean;
  /**
   * Whether the element is visible. The value **true** indicates that the element is visible, and **false** indicates 
   * the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  isVisible: boolean;
  /**
   * Total number of items. The value range is greater than or equal to 0. The default value is **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  itemCount: int;
  /**
   * Content of the last item in a list or scrollable control.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  lastContent: string;
  /**
   * Display layer of the element. The value range is greater than or equal to 0. The default value is **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  layer: int;
  /**
   * Whether the element is long-clickable. The value **true** indicates that the element is long-clickable, and 
   * **false** indicates the opposite. The default value is **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  longClickable: boolean;
  /**
   * Page ID. The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  pageId: int;
  /**
   * Parent element of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  parent: AccessibilityElement;
  /**
   * Whether the element supports multiple lines of text. The value **true** indicates that the element supports 
   * multiple lines of text, and **false** indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  pluralLineSupported: boolean;
  /**
   * Rectangular area of the element, including position and size information.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  rect: Rect;
  /**
   * Resource name of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  resourceName: string;
  /**
   * Root node element of the window element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  rootElement: AccessibilityElement;
  /**
   * Display area of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  screenRect: Rect;
  /**
   * Whether the element is scrollable. The value **true** indicates that the element is scrollable, and **false** 
   * indicates the opposite. The default value is **false**. In accessibility mode, when the values of 
   * accessibilityScrollable and scrollable conflict, the accessibilityScrollable attribute takes precedence.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  scrollable: boolean;
  /**
   * Whether the element is selected. The value **true** indicates that the element is selected, and **false** indicates
   * the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  selected: boolean;
  /**
   * List index of the first item on the screen. The value range is greater than or equal to 0. The default value is 
   * **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  startIndex: int;
  /**
   * Text of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  text: string;
  /**
   * Maximum length limit of the element text. The value range is greater than or equal to 0. The default value is 
   * **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  textLengthLimit: int;
  /**
   * Granularity of movement when the text is read.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  textMoveUnit: accessibility.TextMoveUnit;
  /**
   * Action that triggers the element event.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  triggerAction: accessibility.Action;
  /**
   * Window type of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  type: WindowType;
  /**
   * Maximum value. 
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  valueMax: double;
  /**
   * Minimum value. 
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  valueMin: double;
  /**
   * Current value. 
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  valueNow: double;
  /**
   * Window ID. 
   * 
   * Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  windowId: int;
  /**
   * For scrollable components such as **List** and **Grid**, this attribute indicates the pixel offset of the content 
   * area relative to the top coordinate of the component. The unit is pixel (px). 
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  offset: double;
  /**
   * Accessibility text type of an element, which is configured by the **accessibilityTextHint** attribute of the 
   * component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  textType: string;
  /**
   * Accessibility text information of an element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  accessibilityText: string;
  /**
   * Custom accessibility status announcement text information of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamiconly
   */
  accessibilityStateDescription?: string;
  /**
   * Touchable area of an element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  hotArea: Rect;
  /**
   * ID of the next component to be focused. This attribute value set by the user on the control can be obtained from 
   * the AccessibilityElement object queried through findElement('elementId'). The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  accessibilityNextFocusId?: long;
  /**
   * Custom component type. Corresponds to the [AccessibilityRoleType]{@link ./../@internal/component/ets/common:AccessibilityRoleType} of the element. The 
   * default value is an empty string.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  customComponentType?: string;
  /**
   * Extended attribute used to define properties of specific components. The default value is an empty string. It 
   * includes:
   * 
   * - CheckboxGroupSelectedStatus: indicates the selection state of the CheckboxGroup component, where **0** indicates 
   * selected, **1** indicates partially selected, and **2** indicates unselected.
   * - Row: row information of the focused item in the Grid component, indicating the row number of the item.
   * - Column: column information of the focused item in the Grid component, indicating the column number of the item.
   * - ListItemIndex: row information of the focused item in the List component, indicating the row number of the 
   * current item.
   * - SideBarContainerStates: indicates the expanded state of expandable components (SideBarContainer, Select), where 
   * **0** indicates collapsed and **1** indicates expanded.
   * - ToggleType: indicates the specific type of the Toggle component, where **0** indicates Checkbox, **1** indicates 
   * Switch, and **2** indicates Button.
   * - BindSheet: indicates the display height state of the BindSheet half-modal dialog box component, where **0** 
   * indicates large height display state, **1** indicates medium height display state, and **2** indicates small height
   * display state.
   * - hasRegisteredHover: indicates whether the component has registered the onAccessibilityHover event callback. The 
   * value **1** indicates that the component has registered the event callback. This field is not used if the callback 
   * is not registered.
   * - direction: indicates the layout direction of the List component, where "vertical" indicates vertical and "
   * horizontal" indicates horizontal.
   * - expandedState: indicates the expanded state of a ListItem in the List component, where "expanded" indicates 
   * expanded and "collapsed" indicates collapsed.
   * - componentTypeDescription: detailed information about the component type, serving as a supplementary description 
   * for componentType.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  extraInfo?: string;
  /**
   * ID of the previously focused component. This attribute value set by the user on the control can be obtained from 
   * the AccessibilityElement object queried through findElement('elementId'). The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  accessibilityPreviousFocusId?: long;
  /**
   * Whether the element is scrollable in accessibility mode. This attribute takes precedence over scrollable, meaning 
   * the accessibilityScrollable attribute value prevails. The value **true** indicates scrollable, and **false** 
   * indicates not scrollable. The default value is **true**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  accessibilityScrollable?: boolean;
  /**
   * Whether the element is essential to the user. The value **true** means the element is essential, and **false** 
   * means the opposite. The default value is **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  isEssential?: boolean;
  /**
   * ID of the component tree to which the element belongs. The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  belongTreeId?: int;

  /**
   * ID of the child component tree of the element. The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  childrenTreeId?: int;
  /**
   * Current item in the component grid.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  currentItem?: AccessibilityGrid;
  /**
   * Array of hyperlink text information of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  span?: AccessibilitySpan[];
  /**
   * List of child component IDs of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  childrenIds?: Array<long>;
  /**
   * ID of the parent component of the element. The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  parentId?: long;
  /**
   * ID of the main window of the element. The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  mainWindowId?: int;
  /**
   * Whether the element is accessibility visible. The value **true** means the element is accessibility visible, and 
   * **false** means the opposite. The default value is **true**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  accessibilityVisible?: boolean;
  /**
   * ID of the navigation destination associated with the element. The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  navDestinationId?: long;
  /**
   * List of custom actions supported by the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  customActions?: Array<string>;
  /**
   * Indicates the source of this element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  sourceType?: AccessibilitySourceType;
}

/**
 * Defines an accessibility virtual node.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare interface AccessibilityVirtualNode {
  /**
   * Custom virtual node ID of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  virtualNodeId: long;
  /**
   * Text content of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  text?: string;
  /**
   * Accessibility text information of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accessibilityText?: string;
  /**
   * Whether the element is an accessibility group. The value true indicates that the element is an accessibility group,
   * and false indicates that the element is not an accessibility group.
   * 
   * Default value: true.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accessibilityGroup?: boolean;
  /**
   * Accessibility level of the component.
   * 
   * 'auto': The accessibility grouping service and ArkUI jointly determine whether the component can be identified by 
   * accessibility.
   * 
   * 'yes': The component can be identified by accessibility.
   * 
   * 'no': The component cannot be identified by accessibility.
   * 
   * 'no-hide-descendants': The component and all its child components cannot be identified by accessibility.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accessibilityLevel?: string;
  /**
   * Area of the element (relative to the parent node).
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  rect?: Rect;
  /**
   * Whether the element is checkable. The value true indicates that the element is checkable, and false indicates that 
   * the element is not checkable.
   * 
   * Default value: false.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  checkable?: boolean;
  /**
   * Whether the element is checked. The value true indicates that the element is checked, and false indicates that the 
   * element is not checked.
   * 
   * Default value: false.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  checked?: boolean;
  /**
   * Whether the element is clickable. The value true indicates that the element is clickable, and false indicates that 
   * the element is not clickable.
   * 
   * Default value: false.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  clickable?: boolean;
  /**
   * Whether the element is enabled. The value true indicates that the element is enabled, and false indicates that the 
   * element is not enabled.
   * 
   * Corresponds to the isEnable attribute of AccessibilityElement. Default value: false.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enabled?: boolean;
  /**
   * Whether the element is selected. The value true indicates that the element is selected, and false indicates that 
   * the element is not selected.
   * 
   * Default value: false.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  selected?: boolean;
  /**
   * Custom component type.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  customComponentType?: string;
  /**
   * Simulated touch position.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  touchPosition?: TouchPosition;
  /**
   * Whether the element has gained focus for accessibility purposes. The value true indicates that the element has 
   * gained focus, and false indicates that the element has not gained focus.
   * 
   * Default value: false.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  accessibilityFocused?: boolean;
  /**
   * Parent element ID of the component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  parentId?: long;
  /**
   * List of child element IDs of the component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  childNodeIds?: Array<long>;
  /**
   * ID of the component to which the element belongs.
   * 
   * Default value: -1.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  elementId?: long;
  /**
   * Supported action names.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  supportedActionNames?: Array<string>;
}

/**
 * Enumerates the focus directions.
 *
 * @unionmember { 'up' } Search for the next focusable item above the current item in focus.
 * @unionmember { 'down' } Search for the next focusable item below the current item in focus.
 * @unionmember { 'left' } Search for the next focusable item on the left of the current item in focus.
 * @unionmember { 'right' } Search for the next focusable item on the right of the current item in focus.
 * @unionmember { 'forward' } Search for the next focusable item before the current item in focus.
 * @unionmember { 'backward' } Search for the next focusable item after the current item in focus.
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
export type FocusDirection = 'up' | 'down' | 'left' | 'right' | 'forward' | 'backward';

/**
 * Describes the method for querying focusable nodes.
 *
 * @unionmember { 'forward' } The next focusable node after the current node. The value is fixed to the 'forward'
 *     string.
 * @unionmember { 'backward' } The previous focusable node before the current node. The value is fixed to the 'backward'
 *     string.
 * @unionmember { 'findLast' } The last node among the child nodes of the starting node. The value is fixed to the '
 *     findLast' string.
 * @unionmember { 'getForwardScrollAncestor' } The scrollable parent component that supports forward scrolling. The
 *     value is fixed to the 'getForwardScrollAncestor' string.
 * @unionmember { 'getBackwardScrollAncestor' } The scrollable parent component that supports backward scrolling. The
 *     value is fixed to the 'getBackwardScrollAncestor' string.
 * @unionmember { 'getScrollableAncestor' } The scrollable parent component that supports scrolling in any direction.
 *     The value is fixed to the 'getScrollableAncestor' string.
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export type FocusCondition = 'forward' | 'backward' |
'findLast' | 'getForwardScrollAncestor' | 'getBackwardScrollAncestor' | 'getScrollableAncestor';

/**
 * Enumerates the focus types.
 *
 * @unionmember { 'accessibility' } Accessibility focus.
 * @unionmember { 'normal' } Normal focus.
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
export type FocusType = 'accessibility' | 'normal';

/**
 * Enumerates the window types.
 *
 * @unionmember { 'application' } Application window.
 * @unionmember { 'system' } System window.
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
export type WindowType = 'application' | 'system';

/**
 * Describes how to determine the focus capability of the starting node and its child nodes when searching for focusable
 * nodes.
 *
 * @unionmember { 'bypassSelf' } Skips the check on the starting node and only checks its child nodes. The value is
 *     fixed to the 'bypassSelf' string.
 * @unionmember { 'bypassSelfDescendants' } Skips the check on the starting node and all its child nodes. The value is
 *     fixed to the 'bypassSelfDescendants' string.
 * @unionmember { 'checkSelf' } Checks whether the starting node can gain focus first. If yes, uses it directly; if not,
 *     continues to check its child nodes. The value is fixed to the 'checkSelf' string.
 * @unionmember { 'checkSelfBypassDescendants' } Checks whether the starting node can gain focus first. If yes, uses it;
 *     if not, skips the check on all child nodes. The value is fixed to the 'checkSelfBypassDescendants' string.
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export type FocusRule = 'bypassSelf' | 'bypassSelfDescendants' |
'checkSelf' | 'checkSelfBypassDescendants';

/**
 * Defines a rectangle.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
export interface Rect {
  /**
   * Left boundary of the rectangle, in pixels.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  left: int;
  /**
   * Top boundary of the rectangle, in pixels.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  top: int;
  /**
   * Width of the rectangle, in pixels.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  width: int;
  /**
   * Height of the rectangle, in pixels.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  height: int;
}

/**
 * Return value type of the accessibility node query.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export declare interface FocusMoveResult {
  /**
   * List of accessibility nodes returned by the query.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  target: Array<AccessibilityElement>;

  /**
   * Result type of the accessibility node query.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  result: FocusMoveResultCode;
}

/**
 * Touch tap position.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export declare interface TouchPosition {
  /**
   * X-coordinate of the tap position, in px.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  x: int;
  /**
   * Y-coordinate of the tap position, in px.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  y: int;
}