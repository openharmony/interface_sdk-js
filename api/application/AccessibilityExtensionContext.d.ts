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
 * The **AccessibilityExtensionContext** module, inherited from **ExtensionContext**, provides context for 
 * **AccessibilityExtensionAbility**.
 * 
 * You can use the APIs of this module to configure the concerned information, obtain root information, and inject 
 * gestures.
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
    AccessibilityFocusScene } from '../@ohos.accessibility';

/**
 * The accessibility extension context. Used to configure, query information, and inject gestures.
 * 
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
declare class AccessibilityExtensionContext extends ExtensionContext {
  /**
   * Sets the concerned target bundle. This API uses an asynchronous callback to return the result.
   *
   * @param { Array<string> } targetNames - Bundle name of the concerned target application. The service receives
   *     accessibility events of the concerned application. By default, accessibility events of all applications are
   *     received. Pass in an empty array if there is no concerned application.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation fails, **err** that
   *     contains data is returned.
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
   * Sets the concerned target bundle. This API uses a promise to return the result.
   *
   * @param { Array<string> } targetNames - Bundle name of the concerned target application. The service receives
   *     accessibility events of the concerned application. By default, accessibility events of all applications are
   *     received. Pass in an empty array if there is no concerned application.
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
   * @param { boolean } isAccessibilityFocus - Whether the obtained focus element is an accessibility focus. The value
   *     **True** means that the obtained focus element is an accessibility focus, and **False** means the opposite.
   * @param { AsyncCallback<AccessibilityElement> } callback - Callback used to return the current focus element.
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
   * @param { boolean } isAccessibilityFocus - Whether the obtained element is an accessibility focus. The value
   *     **true** indicates that the element is an accessibility focus, and **false** indicates the opposite.<br>Default
   *     value: **false**.
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
   * @param { AsyncCallback<AccessibilityElement> } callback - Callback used to return the current focus element.
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
   * Obtains the root element of a window. This API uses an asynchronous callback to return the result.
   *
   * @param { int } windowId - ID of the window whose root element is to be obtained. If this parameter is not specified
   *     , it indicates the current active window.
   * @param { AsyncCallback<AccessibilityElement> } callback - Callback used to return the root element.
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
   * Obtains the root element of a window. This API uses a promise to return the result.
   *
   * @param { int } windowId - ID of the window whose root element is to be obtained. If this parameter is not specified
   *     , it indicates the current active window.
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
   * Obtains the root element of a window. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<AccessibilityElement> } callback - Callback used to return the root element.
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
   * Obtains the list of windows on a display. This API uses an asynchronous callback to return the result.
   *
   * @param { long } displayId - ID of the display from which the window information is obtained. If this parameter is
   *     not specified, it indicates the default main display.
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback - Callback used to return the window list.
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
   * Obtains the list of windows on a display. This API uses a promise to return the result.
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
   * Obtains the list of windows on a display. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback - Callback used to return the window list.
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
   * Injects a gesture. This API uses an asynchronous callback to return the result.
   *
   * @param { GesturePath } gesturePath - Path of the gesture to inject.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Injects a gesture. This API uses a promise to return the result.
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
   * Injects a gesture.
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
   * Starts the foreground page. This API uses a promise to return the result.
   *
   * @param { Want } want - Want information about the target ability, such as the ability name and bundle name.
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
   * Obtains node elements in batches. This API uses a promise to return the result.
   *
   * @param { int } windowId - Window ID to be obtained.
   * @param { long } elementId - Element ID to be obtained. If this parameter is passed in, the list of all child nodes
   *     under the current node is obtained. Otherwise, all nodes in the window are obtained. The default value is
   *     **-1**.
   * @returns { Promise<Array<AccessibilityElement>> } Promise used to return the result.
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
   * Obtains the custom default focuses of an application. This API uses a promise to return the result.
   *
   * @param { int } windowId - Window ID to be obtained.
   * @returns { Promise<Array<long>> } Promise used to return the result.
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
   * Holds the running lock. After the lock is held, the screen will not turn off automatically.
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
   * Releases the running lock. After the lock is released, the screen will automatically turn off.
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
   * Subscribes to the pre-disconnection event of the accessibility extension service. This API is called when the 
   * accessibility extension service is about to be disconnected. This API uses an asynchronous callback to return the 
   * result.
   * 
   * Used together with [notifyDisconnect]{@link AccessibilityExtensionContext.notifyDisconnect}; otherwise, the 
   * accessibility extension service is automatically disconnected 30 seconds later by default.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { 'preDisconnect' } type - Name of the event to listen for. The value is fixed at **'preDisconnect'**,
   *     indicating that the accessibility extension service is about to be disconnected.
   * @param { Callback<void> } callback - Callback to be invoked when the accessibility extension service is about to be
   *     disconnected.
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
   * Unsubscribes from the pre-disconnection event of the accessibility extension service. This API is not called until 
   * the accessibility extension service is disconnected. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { 'preDisconnect' } type - Name of the event to listen for. The value is fixed at **'preDisconnect'**,
   *     indicating that the accessibility extension service is about to be disconnected.
   * @param { Callback<void> } [callback] - Callback to unregister, which must be the same as that of
   *     [on('preDisconnect')]{@link AccessibilityExtensionContext#on(type: 'preDisconnect', callback: Callback<void>)}.
   *     If this parameter is not specified, listening will be disabled for all callbacks corresponding to the specified
   *     type.
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
   * Notifies the accessibility service that the accessibility extension service can be disconnected.
   * 
   * This API must be used together with the 
   * [on('preDisconnect')]{@link AccessibilityExtensionContext#on(type: 'preDisconnect', callback: Callback<void>)} API.
   * If the **on('preDisconnect')** API is not called, this API does not take effect.
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
   * Obtains the element that is currently focused. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<AccessibilityElement> } Promise used to return the result.
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
   * Obtains the root element of an active window. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { int } windowId Indicates the window ID.
   * @returns { Promise<AccessibilityElement> } Promise used to return the result.
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
   * Obtains the accessibility windows.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { long } displayId Indicates the display ID. If this parameter is not provided, indicates the default
   *     displayId.
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
}
export default AccessibilityExtensionContext;

/**
 * Defines the **AccessibilityElement**. Before calling APIs of **AccessibilityElement**, you must call 
 * [AccessibilityExtensionContext.getFocusElement()]{@link AccessibilityExtensionContext#getFocusElement(isAccessibilityFocus?: boolean)}
 * or 
 * [AccessibilityExtensionContext.getWindowRootElement()]{@link AccessibilityExtensionContext#getWindowRootElement(windowId?: int)}
 * to obtain an **AccessibilityElement** instance.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @stagemodelonly
 * @since 9 dynamic
 * @since 23 static
 */
export declare interface AccessibilityElement {
  /**
   * Obtains all attribute names of this element. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<Array<T>> } callback - Callback used to return all attribute names of the element.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  attributeNames<T extends keyof ElementAttributeValues>(callback: AsyncCallback<Array<T>>): void;

  /**
   * Obtains all attribute names of this element. This API uses a promise to return the result.
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
   * @param { AsyncCallback<ElementAttributeValues[T]> } callback - Callback used to return the attribute value.
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
   * Obtains the attribute value based on an attribute name. This API uses a promise to return the result.
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
   * Obtains the names of all actions supported by this element. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { AsyncCallback<Array<string>> } callback - Callback used to return the names of all actions supported by
   *     the element.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  actionNames(callback: AsyncCallback<Array<string>>): void;

  /**
   * Obtains the names of all actions supported by this element. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<string>> } Promise used to return the names of all actions supported by the element.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  actionNames(): Promise<Array<string>>;

  /**
   * Performs an action based on the specified action name. This API uses an asynchronous callback to return the result.
   *
   * @param { string } actionName - Action name. For details, see
   *     [Action]{@link ./../@ohos.accessibility:accessibility.Action}.
   * @param { object } parameters - Parameters required for performing the target action. Empty by default.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Performs an action based on the specified action name. This API uses a promise to return the result.
   *
   * @param { string } actionName - Action name. For details, see
   *     [Action]{@link ./../@ohos.accessibility:accessibility.Action}.
   * @param { object } parameters - Parameters required for performing the target action. Empty by default.
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
   * Performs an action based on the specified action name. This API uses an asynchronous callback to return the result.
   *
   * @param { string } actionName - Action name. For details, see
   *     [Action]{@link ./../@ohos.accessibility:accessibility.Action}.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Obtains the cursor position in the **Text** component. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<int> } callback - Callback function used to return the result.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  getCursorPosition(callback: AsyncCallback<int>): void;

  /**
   * Obtains the cursor position in the **Text** component. This API uses a promise to return the result.
   *
   * @returns { Promise<int> } Promise used to return the result.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  getCursorPosition(): Promise<int>;

  /**
   * Enables or disables the screen curtain.
   *
   * @param { boolean } isEnable - The value **true** indicates enabled; **false** indicates disabled.
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
   * @param { 'content' } type - Type of element finding. The value is fixed at **'content'**.
   * @param { string } condition - Search criteria.
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback - Callback used to return the result.
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
   * Finds an element based on the content type. This API uses a promise to return the result.
   *
   * @param { 'content' } type - Type of element finding. The value is fixed at **'content'**.
   * @param { string } condition - Search criteria.
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
   * Finds an element based on the focus type. This API uses an asynchronous callback to return the result.
   *
   * @param { 'focusType' } type - Type of element finding. The value is fixed at **'focusType'**.
   * @param { FocusType } condition - Focus type.
   * @param { AsyncCallback<AccessibilityElement> } callback - Callback used to return the result.
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
   * Finds an element based on the focus type. This API uses a promise to return the result.
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
   * Finds an element based on the focus direction. This API uses an asynchronous callback to return the result.
   *
   * @param { 'focusDirection' } type - Type of element finding. The value is fixed at **'focusDirection'**.
   * @param { FocusDirection } condition - Direction of the next focus element.
   * @param { AsyncCallback<AccessibilityElement> } callback - Callback used to return the result.
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
   * Finds an element based on the focus direction. This API uses a promise to return the result.
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
   * Finds all node elements based on the **accessibilityTextHint** text type configured for a node. This API uses a 
   * promise to return the result.
   *
   * @param { 'textType' } type - Type of element finding. The value is fixed at **'textType'**.
   * @param { string } condition - Search criteria.
   * @returns { Promise<Array<AccessibilityElement>> } Promise used to return the result.
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
   * Finds the node element of the current active window based on the element ID. This API uses a promise to return the 
   * result.
   *
   * @param { 'elementId' } type - Type of element finding. The value is fixed at **'elementId'**.
   * @param { long } condition - **elementId** of the node element.
   * @returns { Promise<AccessibilityElement> } Promise used to return the result.
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
   * Whether the element is focused for accessibility purposes. The value **true** indicates that the element is focused
   * , and **false** indicates the opposite.
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
   * Content displayed in the element.
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
   * Error status of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  error?: string;

  /**
   * Whether the element is focusable. The value **true** indicates that the element is focusable, and **false** 
   * indicates the opposite.
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
   * Type of the input text.
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
   * Whether the element is focused. The value **true** indicates that the element is focused, and **false** indicates 
   * the opposite.
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
   * Last item.
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
   * Whether the element can be long-pressed. The value **true** indicates that the element can be long-pressed, and 
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
   * Whether the element supports multiple lines of text. The value **true** indicates that the element supports 
   * multiple lines of text, and **false** indicates the opposite.
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
   * Rectangular area for the element.
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
   * Rectangular area for the element to display.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  screenRect?: Rect;

  /**
   * Whether the element is scrollable. The value **true** indicates that the element is scrollable, and **false** 
   * indicates the opposite.
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
   * Index of the first item on the screen.
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
   * Text content of an element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  text?: string;

  /**
   * Maximum text length of an element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  textLengthLimit?: int;

  /**
   * Movement unit for traversing and reading text.
   * 
   * Default value: **0**.
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
   * Window type of an element.
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
   * Pixel offset of the content area relative to the top coordinate of a scrollable component (such as List and Grid). 
   * The unit is pixel (px).
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
   * Accessibility text type of an element, which is configured by the **accessibilityTextHint** attribute of the 
   * component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  textType?: string;

  /**
   * Accessibility text information of an element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityText?: string;

  /**
   * Custom accessibility state broadcast text of an element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  accessibilityStateDescription?: string;

  /**
   * Whether the element is mandatory for the user. The value **true** indicates that the element is mandatory, and the 
   * value **false** indicates that the element is not mandatory. The default value is **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  isEssential?: boolean;

  /**
   * Component tree ID that the element belongs to. The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  belongTreeId?: int;

  /**
   * Child component tree ID of the element. The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  childrenTreeId?: int;

  /**
   * Hot area of an element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  hotArea?: Rect;

  /**
   * Custom component type.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  customComponentType?: string;

  /**
   * ID of the next component to obtain the focus.
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
   * ID of the previous component to obtain the focus.
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
   * Additional information about an element. The value is a JSON string.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  extraInfo?: string;

  /**
   * Whether the element can be scrolled for accessibility purposes. This attribute has a higher priority than 
   * **scrollable**.
   * 
   * The value **true** indicates that the element is scrollable, and **false** indicates the opposite.
   * 
   * Default value: **true**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityScrollable?: boolean;

  /**
   * Supported action names.
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
   * Accessibility level of a component.
   * 
   * **auto**: The accessibility grouping service and ArkUI jointly determine whether the current component can be 
   * identified by accessibility services.
   * 
   * **yes**: The component can be identified by accessibility services.
   * 
   * **no**: The component cannot be identified by accessibility services.
   * 
   * **no-hide-descendants**: The current component and all its child components cannot be identified by accessibility 
   * services.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityLevel?: string;

  /**
   * Destination ID of a component for navigation.
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
   * Span array of a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spans?: AccessibilitySpan[];

  /**
   * Whether the component is visible for accessibility purposes. The value **true** indicates that the component is 
   * visible, and **false** indicates the opposite.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityVisible?: boolean;

  /**
   * Main window ID of a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  mainWindowId?: int;

  /**
   * Whether the component needs to be clipped. The value **true** indicates that the component needs to be clipped, and
   * **false** indicates the opposite.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  clip?: boolean;

  /**
   * Parent element ID of a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  parentId?: long;

  /**
   * List of child element IDs of a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  childrenIds?: Array<long>;

  /**
   * Indicates the custom actions supported by the component.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  customActions?: Array<string>;

/**
   * Executes a specific action based on the specified action type and input parameters. This API uses a promise to 
   * return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { AccessibilityAction } action - Executable action for the accessibility node.
   * @param { Parameter } parameters - Parameters set for the action. This parameter is left empty by default.
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
   * @returns { Promise<AccessibilityElement> } Promise used to return the result.
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
   * Obtains the child elements of an element. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<Array<AccessibilityElement>> } Promise used to return the result.
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
   * Obtains the root element of an active window. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<AccessibilityElement> } Promise used to return the result.
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
   * Finds elements based on the content. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { string } condition - Content.
   * @returns { Promise<Array<AccessibilityElement>> } Promise used to return the result.
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
   * Finds elements based on the focus direction. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { FocusDirection } condition - Focus direction.
   * @returns { Promise<AccessibilityElement> } Promise used to return the result.
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
   * Finds elements based on the hint text. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { string } condition - Hint text.
   * @returns { Promise<Array<AccessibilityElement>> } Promise used to return the result.
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
   * Finds elements based on element ID. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { long } condition - Element ID.
   * @returns { Promise<AccessibilityElement> } Promise used to return the result.
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
   * Finds a focusable node by conditions. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { FocusRule } rule - Rule for checking the current node and its descendants.
   * @param { FocusCondition } condition - Condition for finding a focusable node.
   * @returns { Promise<FocusMoveResult> } Promise used to return the result.
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
 * Defines accessibility grid information. For details, see the currentItem attribute in 
 * [AccessibilityElement]{@link AccessibilityElement}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
interface AccessibilityGrid {
  /**
   * Row index.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  rowIndex: int;
  /**
   * Column index.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  columnIndex: int;
}

/**
 * Defines the information about the hyperlink wrapped by the span tag. For details, see the spans attribute in 
 * [AccessibilityElement]{@link AccessibilityElement}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
interface AccessibilitySpan {
  /**
   * Hyperlink ID.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spanId: int;
  /**
   * Text content of the hyperlink.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spanText: string;
  /**
   * Accessibility text of the hyperlink.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityText: string;
  /**
   * Accessibility description of the hyperlink.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityDescription: string;
  /**
   * Accessibility level of the hyperlink.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  accessibilityLevel: string;
}

/**
 * Sets the parameter for a specific operation when the accessibility node element executes this operation. For details,
 * see [AccessibilityAction]{@link ./../@ohos.accessibility:AccessibilityAction} (executable actions for accessibility 
 * node elements).
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export declare class Parameter {
  /**
   * Text content of the component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  setText?: string;
  /**
   * Start coordinate of the selected text in the component, for example, **'2'**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selectTextBegin?: string;
  /**
   * End coordinate of the selected text in the component, for example, **'8'**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selectTextEnd?: string;
  /**
   * Whether to forward select the text within the component. The value **true** indicates to forward select the text, 
   * and the value **false** indicates the opposite.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  selectTextInForWard?: boolean;
  /**
   * Cursor offset, for example, **'1'**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  offset?: string;
  /**
   * ID of the hyperlink wrapped by the span tag.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  spanId?: string;
  /**
   * Scroll type of the component. The options are **'fullScreen'** and **'halfScreen'**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  scrollType?: string;
  /**
   * Injection action.
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
 * Provides attribute names and value types of a node element.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @stagemodelonly
 * @since 9 dynamiconly
 */
export interface ElementAttributeValues {
  /**
   * Whether the element is focused for accessibility purposes. The value **true** indicates that the element is focused
   * , and **false** indicates the opposite.
   * 
   * Default value: **false**.
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
   * indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  checkable: boolean;
  /**
   * Whether the element is checked. The value **true** indicates that the element is checked, and **false** indicates 
   * the opposite.
   * 
   * Default value: **false**.
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
   * Type of the component to which the element belongs, for example, **Button** for the button component and **Image** 
   * for the image component.
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
   * Index of the current item. 
   * 
   * Default value: **0**.
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
   * Index of the last list item displayed on the screen. 
   * 
   * Default value: **0**.
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
   * Type of the input text. 
   * 
   * Default value: **0**.
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
   * Total number of items. 
   * 
   * Default value: **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  itemCount: int;
  /**
   * Last content.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  lastContent: string;
  /**
   * Display layer of the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  layer: int;
  /**
   * Whether the element is long-clickable. The value **true** indicates that the element is long-clickable, and 
   * **false** indicates the opposite.
   * 
   * Default value: **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  longClickable: boolean;
  /**
   * Page ID. 
   * 
   * Default value: **-1**.
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
   * Area of the element.
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
   * Root element of the window element.
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
   * indicates the opposite.
   * 
   * Default value: **false**.
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
   * Index of the first list item on the screen. 
   * 
   * Default value: **0**.
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
   * Maximum text length of the element.
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
   * Custom accessibility state broadcast text of an element.
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
   * ID of the next component to be focused on. You can use **findElement('elementId')** to obtain the value of this 
   * attribute set on the component from the **AccessibilityElementInfo** object. 
   * 
   * Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  accessibilityNextFocusId?: long;
  /**
   * Custom component type. It corresponds to 
   * [AccessibilityRoleType Enumeration Description]{@link ./../@internal/component/ets/common:AccessibilityRoleType} of
   * the element.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  customComponentType?: string;
  /**
   * Extended attributes, which are used to define the attributes of specific components, including:
   * 
   * - **CheckboxGroupSelectedStatus**: selection status of the **CheckboxGroup** component. The options are as follows:
   * 
   * **0**: selected
   * 
   * **1**: partially selected
   * 
   * **2**: not selected
   * 
   * - **Row**: row where a focused item is located in **Grid**.
   * - **Column**: column where a focused item is located in **Grid**.
   * - **ListItemIndex**: row where a focused item is located in **List**.
   * - **SideBarContainerStates**: expansion state of the expandable components (such as **SideBarContainer** and 
   * **Select**). The options are as follows:
   * 
   * **0**: collapsed
   * 
   * **1**: expanded
   * 
   * - **ToggleType**: type of the **Toggle** component. The options are as follows:
   * 
   * **0**: checkbox
   * 
   * **1**: switch
   * 
   * **2**: button
   * 
   * - **BindSheet**: position of the **BindSheet** component on the screen. The options are as follows:
   * 
   * **0**: high
   * 
   * **1**: middle
   * 
   * **2**: low
   * 
   * - **hasRegisteredHover**: whether the component has registered the **onAccessibilityHover** event callback. The 
   * value **1** indicates that the component has registered the event callback; otherwise, this field is not used.
   * - **direction**: layout direction of the **List** component. The value can be **vertical** or **horizontal**.
   * - **expandedState**: expanded state of list items in the **List** component. The value can be **expanded** or 
   * **collapsed**.
   * - **componentTypeDescription**: detailed information about the component type.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  extraInfo?: string;
  /**
   * ID of the previous component to be focused on. You can use **findElement('elementId')** to obtain the value of this
   * attribute set on the component from the **AccessibilityElementInfo** object. 
   * 
   * Default value: **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  accessibilityPreviousFocusId?: long;
  /**
   * Whether an element is scrollable for accessibility. This attribute has a higher priority than **scrollable**. 
   * 
   * - **true** (default): the element is scrollable.
   * - **false**: the element is not scrollable.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18 dynamiconly
   */
  accessibilityScrollable?: boolean;
  /**
   * Whether the element is mandatory for the user. The value **true** indicates that the element is mandatory, and the 
   * value **false** indicates that the element is not mandatory. The default value is **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  isEssential?: boolean;
  /**
   * Component tree ID that the element belongs to. The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  belongTreeId?: int;

  /**
   * Child component tree ID of the element. The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  childrenTreeId?: int;
  /**
   * Position of the current element in the grid.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  currentItem?: AccessibilityGrid;
  /**
   * Array of the row and column ranges spanned by the element in the grid layout.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  span?: AccessibilitySpan[];
  /**
   * ID of the child component of the element.
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
   * Whether the element is accessibility visible. **true** means the element is accessibility visible and **false** 
   * means the element is accessibility invisible. The default value is **true**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  accessibilityVisible?: boolean;
  /**
   * ID of the navigation target associated with the element. The default value is **-1**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  navDestinationId?: long;
  /**
   * Indicates the custom actions supported by the component.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamiconly
   */
  customActions?: Array<string>;
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
 * Defines a condition for querying the focusable node.
 *
 * @unionmember { 'forward' } Queries the next focusable node. The value is fixed at **'forward'**.
 * @unionmember { 'backward' } Queries the next focusable node. The value is fixed at **'backward'**.
 * @unionmember { 'findLast' } Queries the last child node of the start node. The value is fixed at **'findLast'**.
 * @unionmember { 'getForwardScrollAncestor' } Queries the parent component that supports forward scrolling. The value
 *     is fixed at **'getForwardScrollAncestor'**.
 * @unionmember { 'getBackwardScrollAncestor' } Queries the parent component that supports backward scrolling. The value
 *     is fixed at **'getBackwardScrollAncestor'**.
 * @unionmember { 'getScrollableAncestor' } Queries the parent component that supports scrolling in any direction. The
 *     value is fixed at **'getScrollableAncestor'**.
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
 * Defines a focus rule for determining the start node and its descendants when searching for a focusable node.
 *
 * @unionmember { 'bypassSelf' } Checks only the descendants of the start node. The value is fixed at **'bypassSelf'**.
 * @unionmember { 'bypassSelfDescendants' } Skips the check on the start node and all its descendants. The value is
 *     fixed at **'bypassSelfDescendants'**.
 * @unionmember { 'checkSelf' } Checks whether the start node is focusable. If yes, use this node; otherwise, checks its
 *     descendants. The value is fixed at **'checkSelf'**.
 * @unionmember { 'checkSelfBypassDescendants' } Checks whether the start node is focusable. If yes, use this node;
 *     otherwise, skips the check on all its descendants. The value is fixed at **'checkSelfBypassDescendants'**.
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
 * Queries the return value type of the target accessibility nodes.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export declare interface FocusMoveResult {
  /**
   * Target accessibility nodes.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  target: Array<AccessibilityElement>;

  /**
   * Type of the return value.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  result: FocusMoveResultCode;
}
