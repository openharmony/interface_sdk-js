/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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

import type { AsyncCallback } from '../@ohos.base';
import ExtensionContext from './ExtensionContext';
import accessibility from '../@ohos.accessibility';
import { GesturePath } from '../@ohos.accessibility.GesturePath';
import Want from '../@ohos.app.ability.Want';

/**
  * The type of query element.
  *
  * @typedef {'content' | 'focusType' | 'focusDirection' | 'textType'}
  * @syscap SystemCapability.BarrierFree.Accessibility.Core
  * @since 20
  */
type FindElementType = 'content' | 'focusType' | 'focusDirection' | 'textType';

/**
 * The accessibility extension context. Used to configure, query information, and inject gestures.
 *
 * @extends ExtensionContext
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
export declare class AccessibilityExtensionContext extends ExtensionContext {
  /**
   * Starts a new ability.
   *
   * @param { Want } want - Indicates the start options.
   * @returns { Promise<void> }
   * @throws { BusinessError } 201 - The application does not have the permission required to call the API.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12
   */
  startAbility(want: Want): Promise<void>;
}

/**
 * Indicates an accessibility element.
 * Supports querying element attributes, requesting execution actions, and finding child elements by condition.
 *
 * @typedef AccessibilityElement
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
export declare interface AccessibilityElement {
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
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
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
   * @param { 'elementId' } type The type of query condition is element id.
   * @param { number } condition Indicates the specific content to be queried.
   * @returns { Promise<AccessibilityElement> }
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12
   */
  findElement(type: 'elementId', condition: number): Promise<AccessibilityElement>;
}

export type ElementAttribute = 'accessibilityFocused' | 'bundleName' | 'checkable' | 'checked' | 'children' |
'clickable' | 'componentId' | 'componentType' | 'contents' | 'currentIndex' | 'description' | 'editable' | 'endIndex' |
'error' | 'focusable' | 'hintText' | 'inputType' | 'inspectorKey' | 'isActive' | 'isEnable' | 'isHint' | 'isFocused' |
'isPassword' | 'isVisible' | 'itemCount' | 'lastContent' | 'layer' | 'longClickable' | 'pageId' | 'parent' |
'pluralLineSupported' | 'rect' | 'resourceName' | 'rootElement' | 'screenRect' | 'scrollable' | 'selected' |
'startIndex' | 'text' | 'textLengthLimit' | 'textMoveUnit' | 'triggerAction' | 'type' | 'valueMax' | 'valueMin' |
'valueNow' | 'windowId' | 'offset' | 'textType' | 'accessibilityText' | 'hotArea';

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
export declare interface ElementAttributeValues {
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
}

/**
 * Indicates the direction of the search focus.
 *
 * @typedef {'up' | 'down' | 'left' | 'right' | 'forward' | 'backward'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
export type FocusDirection = 'up' | 'down' | 'left' | 'right' | 'forward' | 'backward';

/**
 * Indicates the type of the focus.
 *
 * @typedef {'accessibility' | 'normal'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
export type FocusType = 'accessibility' | 'normal';

/**
 * Indicates the type of the window.
 *
 * @typedef {'application' | 'system'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
export type WindowType = 'application' | 'system';

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
