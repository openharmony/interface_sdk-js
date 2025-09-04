/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * @file Provides accessibility extension context
 * @kit AccessibilityKit
 */

import type { AsyncCallback, BusinessError, Callback } from '../@ohos.base';
import ExtensionContext from './ExtensionContext';
import type accessibility from '../@ohos.accessibility';
import type { GesturePath } from '../@ohos.accessibility.GesturePath';
import type Want from '../@ohos.app.ability.Want';
import { AccessibilityAction } from '../@ohos.accessibility';

/**
 * The accessibility extension context. Used to configure, query information, and inject gestures.
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
export default class AccessibilityExtensionContext extends ExtensionContext {
  /**
   * Set the bundle names that is interested in sending the event.
   *
   * @param { Array<string> } targetNames The bundle names that are interested in sending the event.
   * @param { AsyncCallback<void> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  setTargetBundleName(targetNames: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Set the bundle names that is interested in sending the event.
   *
   * @param { Array<string> } targetNames The bundle names that are interested in sending the event.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  setTargetBundleName(targetNames: Array<string>): Promise<void>;

  /**
   * Get focus element.
   *
   * @param { boolean } isAccessibilityFocus Indicates whether the acquired element has an accessibility focus.
   * @param { AsyncCallback<AccessibilityElement> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  getFocusElement(isAccessibilityFocus: boolean, callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * Get focus element.
   *
   * @param { boolean } isAccessibilityFocus Indicates whether the acquired element has an accessibility focus.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  getFocusElement(isAccessibilityFocus?: boolean): Promise<AccessibilityElement>;

  /**
   * Get focus element.
   * @param { AsyncCallback<AccessibilityElement> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  getFocusElement(callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * Get window root element.
   *
   * @param { number } windowId Indicates the window ID.
   * @param { AsyncCallback<AccessibilityElement> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  getWindowRootElement(windowId: number, callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * Get window root element.
   *
   * @param { number } [windowId] Indicates the window ID.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  getWindowRootElement(windowId?: number): Promise<AccessibilityElement>;

  /**
   * Get window root element.
   * @param { AsyncCallback<AccessibilityElement> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  getWindowRootElement(callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * Get window list.
   *
   * @param { number } displayId Indicates the display ID.
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  getWindows(displayId: number, callback: AsyncCallback<Array<AccessibilityElement>>): void;

  /**
   * Get window list.
   *
   * @param { number } displayId Indicates the display ID.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  getWindows(displayId?: number): Promise<Array<AccessibilityElement>>;

  /**
   * Get window list.
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  getWindows(callback: AsyncCallback<Array<AccessibilityElement>>): void;

  /**
   * Inject gesture path events.
   *
   * @param { GesturePath } gesturePath Indicates the gesture path.
   * @param { AsyncCallback<void> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 10
   * @useinstead AccessibilityExtensionContext/AccessibilityExtensionContext#injectGestureSync
   */
  injectGesture(gesturePath: GesturePath, callback: AsyncCallback<void>): void;

  /**
   * Inject gesture path events.
   *
   * @param { GesturePath } gesturePath Indicates the gesture path.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 10
   * @useinstead AccessibilityExtensionContext/AccessibilityExtensionContext#injectGestureSync
   */
  injectGesture(gesturePath: GesturePath): Promise<void>;

  /**
   * Inject gesture path events.
   *
   * @param { GesturePath } gesturePath Indicates the gesture path.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 10
   * @deprecated since 12
   */
  injectGestureSync(gesturePath: GesturePath): void;

  /**
   * Starts a new ability.
   *
   * @param { Want } want - Indicates the start options.
   * @returns { Promise<void> }
   * @throws { BusinessError } 201 - The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12
   */
  startAbility(want: Want): Promise<void>;

  /**
   * get all subElements in window.
   * @param { number } windowId Indicates the window ID.
   * @param { number } elementId Indicates the elementId.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *    1. Mandatory parameters are left unspecified;
   *    2. Incorrect parameter types;
   *    3. Parameter verification failed.
   * @throws { BusinessError } 9300003 - No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 18
   */
  getElements(windowId: number, elementId?: number): Promise<Array<AccessibilityElement>>;

  /**
   * Get default focused element ids.
   * @param { number } windowId Indicates whether the windowid can be used as the default focus.
   * @returns { Promise<Array<number>> }
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *    1. Mandatory parameters are left unspecified;
   *    2. Incorrect parameter types;
   *    3. Parameter verification failed.
   * @throws { BusinessError } 9300003 - No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 18
   */
  getDefaultFocusedElementIds(windowId: number): Promise<Array<number>>;

  /**
   * Hold running lock to prevent screen turning off automatically.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  holdRunningLockSync(): void;

  /**
   * Unhold running lock.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  unholdRunningLockSync(): void;

  /**
   * Register accessibilityExtensionAbility disconnect callback.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { 'preDisconnect' } type Indicates the accessibilityExtensionAbility pre disconnect.
   * @param { Callback<void> } callback Indicates the callback function.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  on(type: 'preDisconnect', callback: Callback<void>): void;

  /**
   * Unregister accessibilityExtensionAbility disconnect callback.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { 'preDisconnect' } type Indicates the accessibilityExtensionAbility pre disconnect.
   * @param { Callback<void> } callback Indicates the callback function.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  off(type: 'preDisconnect', callback?: Callback<void>): void;

  /**
   * Notify accessibility when accessibilityExtensionAbility is ready to disconnect.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  notifyDisconnect(): void;

  /**
   * Get accessibility focused element.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300003 - No accessibility permission to perform the operation.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  getAccessibilityFocusedElement(): Promise<AccessibilityElement>;

  /**
   * Get window root element.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { number } [windowId] Indicates the window ID.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300003 - No accessibility permission to perform the operation.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  getRootInActiveWindow(windowId?: number): Promise<AccessibilityElement>;

  /**
   * Get window list.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { number } [displayId] Indicates the display ID. If this parameter is not provided, indicates the default displayId.
   * @returns { Array<AccessibilityElement> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  getAccessibilityWindowsSync(displayId?: number): Array<AccessibilityElement>;
}

/**
 * Indicates an accessibility element.
 * Supports querying element attributes, requesting execution actions, and finding child elements by condition.
 *
 * @typedef AccessibilityElement
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
declare interface AccessibilityElement {
  /**
   * Get a list of attribute names.
   *
   * @param { AsyncCallback<Array<T>> } callback Indicates the listener.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  attributeNames<T extends keyof ElementAttributeValues>(callback: AsyncCallback<Array<T>>): void;

  /**
   * Get a list of attribute names.
   * @returns { Promise<Array<T>> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  attributeNames<T extends keyof ElementAttributeValues>(): Promise<Array<T>>;

  /**
   * Get the value of an attribute.
   *
   * @param { T } attributeName Indicates the attribute name.
   * @param { AsyncCallback<ElementAttributeValues[T]> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300004 - This property does not exist.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  attributeValue<T extends keyof ElementAttributeValues>(
    attributeName: T,
    callback: AsyncCallback<ElementAttributeValues[T]>
  ): void;

  /**
   * Get the value of an attribute.
   *
   * @param { T } attributeName Indicates the attribute name.
   * @returns { Promise<ElementAttributeValues[T]> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300004 - This property does not exist.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  attributeValue<T extends keyof ElementAttributeValues>(attributeName: T): Promise<ElementAttributeValues[T]>;

  /**
   * Get a list of supported actions.
   *
   * @param { AsyncCallback<Array<string>> } callback Indicates the listener.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  actionNames(callback: AsyncCallback<Array<string>>): void;

  /**
   * Get a list of supported actions.
   *
   * @returns { Promise<Array<string>> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  actionNames(): Promise<Array<string>>;

  /**
   * Perform the specified action.
   *
   * @param { string } actionName Indicates the action name.
   * @param { object } parameters Indicates the parameters needed to execute the action.
   * @param { AsyncCallback<void> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300005 - This action is not supported.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  performAction(actionName: string, parameters: object, callback: AsyncCallback<void>): void;

  /**
   * Perform the specified action.
   *
   * @param { string } actionName Indicates the action name.
   * @param { object } parameters Indicates the parameters needed to execute the action.
   * @returns { Promise<void> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300005 - This action is not supported.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  performAction(actionName: string, parameters?: object): Promise<void>;

  /**
   * Perform the specified action.
   *
   * @param { string } actionName Indicates the action name.
   * @param { AsyncCallback<void> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300005 - This action is not supported.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  performAction(actionName: string, callback: AsyncCallback<void>): void;

  /**
   * Get the position of cursor in TextInput.
   *
   * @param { AsyncCallback<number> } callback Indicates the listener.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12
   */
  getCursorPosition(callback: AsyncCallback<number>): void;

  /**
   * Get the position of cursor in TextInput.
   *
   * @returns { Promise<number> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12
   */
  getCursorPosition(): Promise<number>;

  /**
   * Set the screen curtain enable or disable.
   *
   * @param { boolean } isEnable Indicates whether the screen curtain is enabled.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300003 -  No accessibility permission to perform the operation.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12
   */
  enableScreenCurtain(isEnable: boolean): void;

  /**
   * Find elements that match the condition.
   *
   * @param { 'content' } type The type of query condition is content.
   * @param { string } condition Indicates the specific content to be queried.
   * @param { AsyncCallback<Array<AccessibilityElement>> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  findElement(type: 'content', condition: string, callback: AsyncCallback<Array<AccessibilityElement>>): void;

  /**
   * Find elements that match the condition.
   *
   * @param { 'content' } type The type of query condition is content.
   * @param { string } condition Indicates the specific content to be queried.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  findElement(type: 'content', condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * Find elements that match the condition.
   *
   * @param { 'focusType' } type The type of query condition is focus type.
   * @param { FocusType } condition Indicates the type of focus to query.
   * @param { AsyncCallback<AccessibilityElement> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  findElement(type: 'focusType', condition: FocusType, callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * Find elements that match the condition.
   *
   * @param { 'focusType' } type The type of query condition is focus type.
   * @param { FocusType } condition Indicates the type of focus to query.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  findElement(type: 'focusType', condition: FocusType): Promise<AccessibilityElement>;

  /**
   * Find elements that match the condition.
   *
   * @param { 'focusDirection' } type The type of query condition is focus direction.
   * @param { FocusDirection } condition Indicates the direction of search focus to query.
   * @param { AsyncCallback<AccessibilityElement> } callback Indicates the listener.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  findElement(type: 'focusDirection', condition: FocusDirection, callback: AsyncCallback<AccessibilityElement>): void;

  /**
   * Find elements that match the condition.
   *
   * @param { 'focusDirection' } type The type of query condition is focus direction.
   * @param { FocusDirection } condition Indicates the direction of search focus to query.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  findElement(type: 'focusDirection', condition: FocusDirection): Promise<AccessibilityElement>;

  /**
   * Find elements that match the condition.
   *
   * @param { 'textType' } type The type of query condition is text type.
   * @param { string } condition Indicates the specific content to be queried.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12
   */
  findElement(type: 'textType', condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * Find elements that match the condition.
   *
   * @param { 'elementId' } type The type of query condition is element id.
   * @param { number } condition Indicates the specific content to be queried.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12
   */
  findElement(type: 'elementId', condition: number): Promise<AccessibilityElement>;

  /**
   * Indicates accessibility focus state.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  accessibilityFocused?: boolean;

  /**
   * Indicates the bundle name to which it belongs.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  bundleName?: string;

  /**
   * Indicates whether the element is checkable.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  checkable?: boolean;

  /**
   * Indicates whether the element is checked.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  checked?: boolean;

  /**
   * Indicates whether the element is clickable.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  clickable?: boolean;

  /**
   * Indicates the component ID to which the element belongs.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  componentId?: number;

  /**
   * Indicates the component type to which the element belongs.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  componentType?: string;

  /**
   * Indicates the content.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  contents?: Array<string>;

  /**
   * Indicates the index of the current item.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  currentIndex?: number;

  /**
   * Indicates the description of the element.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  description?: string;

  /**
   * Indicates whether the element is editable.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  editable?: boolean;

  /**
   * Indicates the list index of the last item displayed on the screen.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  endIndex?: number;

  /**
   * Indicates the string of error state.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  error?: string;

  /**
   * Indicates whether the element is focusable.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  focusable?: boolean;

  /**
   * Indicates the hint text.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  hintText?: string;

  /**
   * Indicates the type of input text.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  inputType?: number;

  /**
   * Indicates the inspector key.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  inspectorKey?: string;

  /**
   * Indicates whether the element is active or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  isActive?: boolean;

  /**
   * Indicates whether the element is enable or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  isEnable?: boolean;

  /**
   * Indicates whether the element is hint state or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  isHint?: boolean;

  /**
   * Indicates whether the element is focused or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  isFocused?: boolean;

  /**
   * Indicates whether the element is password or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  isPassword?: boolean;

  /**
   * Indicates whether the element is visible or not.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  isVisible?: boolean;

  /**
   * Indicates the total count of the items.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  itemCount?: number;

  /**
   * Indicates the last content.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  lastContent?: string;

  /**
   * Indicates the display layer of the element.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  layer?: number;

  /**
   * Indicates whether the element is long clickable.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  longClickable?: boolean;

  /**
   * Indicates the page id.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  pageId?: number;

  /**
   * Indicates whether the element supports multiple lines of text.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  pluralLineSupported?: boolean;

  /**
   * Indicates the area of the element.
   *
   * @type { ?Rect }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  rect?: Rect;

  /**
   * Indicates the resource name of the element.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  resourceName?: string;

  /**
   * Indicates the display area of the element.
   *
   * @type { ?Rect }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  screenRect?: Rect;

  /**
   * Indicates whether the element is scrollable.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  scrollable?: boolean;

  /**
   * Indicates whether the element is selected.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  selected?: boolean;

  /**
   * Indicates the list index of the first item displayed on the screen.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  startIndex?: number;

  /**
   * Indicates the text of the element.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  text?: string;

  /**
   * Indicates the maximum length limit of the element text.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  textLengthLimit?: number;

  /**
   * Indicates the unit of movement of the element text as it is read.
   *
   * @type { ?accessibility.TextMoveUnit }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  textMoveUnit?: accessibility.TextMoveUnit;

  /**
   * Indicates the action that triggered the element event.
   *
   * @type { ?AccessibilityAction }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  triggerAction?: AccessibilityAction;

  /**
   * Indicates the window type of the element.
   *
   * @type { ?WindowType }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  type?: WindowType;

  /**
   * Indicates the maximum value.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  valueMax?: number;

  /**
   * Indicates the minimum value.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  valueMin?: number;

  /**
   * Indicates the current value.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  valueNow?: number;

  /**
   * Indicates the window id.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  windowId?: number;

  /**
   * Indicates the offset.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  offset?: number;

  /**
   * Indicates the text type.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  textType?: string;

  /**
   * Indicates the accessibility text of component.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  accessibilityText?: string;

  /**
   * Indicates the hot area of the element.
   *
   * @type { ?Rect }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  hotArea?: Rect;

  /**
   * Indicates the custom component type.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  customComponentType?: string;

  /**
   * Indicates the component next accessibility focus id.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  accessibilityNextFocusId?: number;

  /**
   * Indicates the component previous accessibility focus id.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  accessibilityPreviousFocusId?: number;

  /**
   * Indicates the extra info of the element.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  extraInfo?: string;

  /**
   * Indicates whether the element is scrollable for accessibility.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  accessibilityScrollable?: boolean;

  /**
   * Indicates actions the element support.
   *
   * @type { ?Array<string> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  supportedActionNames?: Array<string>;

  /**
   * Indicates whether the element is accessibilityGroup.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  accessibilityGroup?: boolean;

  /**
   * Indicates the accessibilityLevel of component.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  accessibilityLevel?: string;

  /**
   * Indicates the navDestination id of component.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  navDestinationId?: number;

  /**
   * Indicates the current item in grid of component.
   *
   * @type { ?AccessibilityGrid }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  currentItem?: AccessibilityGrid;

  /**
   * Indicates the span array of component.
   *
   * @type { ?AccessibilitySpan[] }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  spans?: AccessibilitySpan[];

  /**
   * Indicates whether the component is accessibility visible.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  accessibilityVisible?: boolean;

  /**
   * Indicates the main windowId of component.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  mainWindowId?: number;

  /**
   * Indicates whether the component need clip.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  clip?: boolean;

  /**
   * Indicates the parent element id of component.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  parentId?: number;

  /**
   * Indicates the children elements id list of component.
   *
   * @type { ?Array<number> }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  childrenIds?: Array<number>;

  /**
   * Execute the specified action.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { AccessibilityAction } action Indicates the action to execute.
   * @param { Parameter } [parameters] Indicates the parameters needed to execute the action.
   * @returns { Promise<void> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300005 - This action is not supported.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  executeAction(action: AccessibilityAction, parameters?: Parameter): Promise<void>;

  /**
   * Get element's parent.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  getParent(): Promise<AccessibilityElement>;

  /**
   * Get element's children.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  getChildren(): Promise<Array<AccessibilityElement>>;

  /**
 * Get element's root.
 *
 * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
 * @returns { Promise<AccessibilityElement> }
 * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
 * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
  getRoot(): Promise<AccessibilityElement>;

  /**
   * Find elements that match the condition.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { string } condition Indicates the specific content to be queried.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  findElementByContent(condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * Find elements that match the focus direction.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { FocusDirection } condition Indicates the direction of search focus to query.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  findElementByFocusDirection(condition: FocusDirection): Promise<AccessibilityElement>;

  /**
   * Find elements that match the condition.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { string } condition Indicates the specific json string to be queried.
   * @returns { Promise<Array<AccessibilityElement>> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  findElementsByAccessibilityHintText(condition: string): Promise<Array<AccessibilityElement>>;

  /**
   * Find elements that match the elementId.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { number } condition Indicates the elementId to query.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300006 - The target application failed to connect to accessibility service.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  findElementById(condition: number): Promise<AccessibilityElement>;
}

/**
 * Indicates grid info.
 *
 * @typedef AccessibilityGrid
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
interface AccessibilityGrid {
  /**
   * The row index in grid.
   *
   * @type { number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  rowIndex: number;
  /**
   * The colum index in grid.
   *
   * @type { number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  columnIndex: number;
}

/**
 * Indicates span info.
 *
 * @typedef AccessibilitySpan
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
interface AccessibilitySpan {
  /**
   * The id of span.
   *
   * @type { number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  spanId: number;
  /**
   * The text of span.
   *
   * @type { string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  spanText: string;
  /**
   * The accessibility text of span.
   *
   * @type { string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  accessibilityText: string;
  /**
   * The accessibility description of span.
   *
   * @type { string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  accessibilityDescription: string;
  /**
   * The accessibility level of span.
   *
   * @type { string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  accessibilityLevel: string;
}

/**
 * Indicates the parameter of the AccessibiltyAction.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
export declare class Parameter {
  /**
   * Indicates the text to set for AccessibilityAction.SET_TEXT.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  setText?: string;
  /**
   * Indicates the begin position of select text  for AccessibilityAction.SET_SELECTION.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  selectTextBegin?: string;
  /**
   * Indicates the end position of select text for AccessibilityAction.SET_SELECTION.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  selectTextEnd?: string;
  /**
   * Indicates the direction of select text for AccessibilityAction.SET_SELECTION.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  selectTextInForWard?: boolean;
  /**
   * Indicates the cursor position for AccessibilityAction.SET_CURSOR_POSITION.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  offset?: string;
  /**
   * Indicates the span id for AccessibilityAction.SPAN_CLICK.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  spanId?: string;
  /**
   * Indicates the scroll type for AccessibilityAction.SCROLL_FORWARD and AccessibilityAction.SCROLL_BACKWARD.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  scrollType?: string;
}

/**
 * Indicates the possible attributes of the element and the type of the attribute value.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
/**
 * Indicates the possible attributes of the element and the type of the attribute value.
 *
 * @typedef ElementAttributeValues
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 11
 */
interface ElementAttributeValues {
  /**
   * Indicates accessibility focus state.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  accessibilityFocused: boolean;
  /**
   * Indicates the bundle name to which it belongs.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  bundleName: string;
  /**
   * Indicates whether the element is checkable.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  checkable: boolean;
  /**
   * Indicates whether the element is checked.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  checked: boolean;
  /**
   * Indicates all child elements.
   *
   * @type {Array<AccessibilityElement>}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  children: Array<AccessibilityElement>;
  /**
   * Indicates whether the element is clickable.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  clickable: boolean;
  /**
   * Indicates the component ID to which the element belongs.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  componentId: number;
  /**
   * Indicates the component type to which the element belongs.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  componentType: string;
  /**
   * Indicates the content.
   *
   * @type {Array<string>}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  contents: Array<string>;
  /**
   * Indicates the index of the current item.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  currentIndex: number;
  /**
   * Indicates the description of the element.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  description: string;
  /**
   * Indicates whether the element is editable.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  editable: boolean;
  /**
   * Indicates the list index of the last item displayed on the screen.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  endIndex: number;
  /**
   * Indicates the string of error state.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  error: string;
  /**
   * Indicates whether the element is focusable.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  focusable: boolean;
  /**
   * Indicates the hint text.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  hintText: string;
  /**
   * Indicates the type of input text.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  inputType: number;
  /**
   * Indicates the inspector key.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  inspectorKey: string;
  /**
   * Indicates whether the element is active or not.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  isActive: boolean;
  /**
   * Indicates whether the element is enable or not.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  isEnable: boolean;
  /**
   * Indicates whether the element is hint state or not.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  isHint: boolean;
  /**
   * Indicates whether the element is focused or not.
   * 
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  isFocused: boolean;
  /**
   * Indicates whether the element is password or not.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  isPassword: boolean;
  /**
   * Indicates whether the element is visible or not.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  isVisible: boolean;
  /**
   * Indicates the total count of the items.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  itemCount: number;
  /**
   * Indicates the last content.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  lastContent: string;
  /**
   * Indicates the display layer of the element.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  layer: number;
  /**
   * Indicates whether the element is long clickable.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  longClickable: boolean;
  /**
   * Indicates the page id.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  pageId: number;
  /**
   * Indicates the parent of the element.
   *
   * @type {AccessibilityElement}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  parent: AccessibilityElement;
  /**
   * Indicates whether the element supports multiple lines of text.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  pluralLineSupported: boolean;
  /**
   * Indicates the area of the element.
   *
   * @type {Rect}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  rect: Rect;
  /**
   * Indicates the resource name of the element.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  resourceName: string;
  /**
   * Indicates the root element of the window element.
   *
   * @type {AccessibilityElement}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  rootElement: AccessibilityElement;
  /**
   * Indicates the display area of the element.
   *
   * @type {Rect}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  screenRect: Rect;
  /**
   * Indicates whether the element is scrollable.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  scrollable: boolean;
  /**
   * Indicates whether the element is selected.
   *
   * @type {boolean}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  selected: boolean;
  /**
   * Indicates the list index of the first item displayed on the screen.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  startIndex: number;
  /**
   * Indicates the text of the element.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  text: string;
  /**
   * Indicates the maximum length limit of the element text.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  textLengthLimit: number;
  /**
   * Indicates the unit of movement of the element text as it is read.
   *
   * @type {accessibility.TextMoveUnit}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  textMoveUnit: accessibility.TextMoveUnit;
  /**
   * Indicates the action that triggered the element event.
   *
   * @type {accessibility.Action}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  triggerAction: accessibility.Action;
  /**
   * Indicates the window type of the element.
   *
   * @type {WindowType}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  type: WindowType;
  /**
   * Indicates the maximum value.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  valueMax: number;
  /**
   * Indicates the minimum value.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  valueMin: number;
  /**
   * Indicates the current value.
   * 
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  valueNow: number;
  /**
   * Indicates the window id.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  windowId: number;
  /**
   * Indicates the offset.
   *
   * @type {number}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12
   */
  offset: number;
  /**
   * Indicates the text type.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12
   */
  textType: string;
  /**
   * Indicates the accessibility text of component.
   *
   * @type {string}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12
   */
  accessibilityText: string;
  /**
   * Indicates the hot area of the element.
   *
   * @type {Rect}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12
   */
  hotArea: Rect;
  /**
   * Indicates the component next accessibility focus id.
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18
   */
  accessibilityNextFocusId?: number;
  /**
   * Indicates the custom component type.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18
   */
  customComponentType?: string;
  /**
   * Indicates the extra info of the element.
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18
   */
  extraInfo?: string;
  /**
   * Indicates the component Previous accessibility focus id.
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18
   */
  accessibilityPreviousFocusId?: number;
  /**
   * Indicates whether the element is scrollable for accessibility.
   *
   * @type { ?boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 18
   */
  accessibilityScrollable?: boolean;
}

/**
 * Indicates the direction of the search focus.
 *
 * @typedef {'up' | 'down' | 'left' | 'right' | 'forward' | 'backward'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
type FocusDirection = 'up' | 'down' | 'left' | 'right' | 'forward' | 'backward';

/**
 * Indicates the type of the focus.
 *
 * @typedef {'accessibility' | 'normal'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
type FocusType = 'accessibility' | 'normal';

/**
 * Indicates the type of the window.
 *
 * @typedef {'application' | 'system'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
type WindowType = 'application' | 'system';

/**
 * Indicates rectangle.
 *
 * @typedef Rect
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
interface Rect {
  /**
   * The left position of Rect
   *
   * @type { number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  left: number;
  /**
   * The top position of Rect
   *
   * @type { number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  top: number;
  /**
   * The width position of Rect
   *
   * @type { number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  width: number;
  /**
   * The height position of Rect
   *
   * @type { number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  height: number;
}
