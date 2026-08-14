/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
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
 * AccessibilityExtensionAbility provides the accessibility extension service capability based on the ExtensionAbility 
 * framework.
 *
 * @file AccessibilityExtensionAbility
 * @kit AccessibilityKit
 */

import type accessibility from './@ohos.accessibility';
import type { KeyEvent } from './@ohos.multimodalInput.keyEvent';
/*** if arkts dynamic */
import type {
  AccessibilityElement as _AccessibilityElement,
  ElementAttributeValues as _ElementAttributeValues,
  FocusDirection as _FocusDirection,
  FocusType as _FocusType,
  WindowType as _WindowType,
  Rect as _Rect,
  Parameter as _Parameter,
  FocusRule as _FocusRule,
  FocusCondition as _FocusCondition,
  FocusMoveResult as _FocusMoveResult,
  AccessibilityVirtualNode as _AccessibilityVirtualNode,
  TouchPosition as _TouchPosition
} from './application/AccessibilityExtensionContext';
import type * as _AccessibilityExtensionContext from './application/AccessibilityExtensionContext';
/*** endif */
/*** if arkts static */
import type {
  AccessibilityElement as _AccessibilityElement,
  FocusDirection as _FocusDirection,
  WindowType as _WindowType,
  Rect as _Rect,
  Parameter as _Parameter,
  FocusRule as _FocusRule,
  FocusCondition as _FocusCondition,
  FocusMoveResult as _FocusMoveResult,
  AccessibilityVirtualNode as _AccessibilityVirtualNode,
  TouchPosition as _TouchPosition
} from './application/AccessibilityExtensionContext';
import AccessibilityExtensionContext from './application/AccessibilityExtensionContext';
/*** endif */
import { AccessibilityEventType } from './@ohos.accessibility';

/**
 * Indicates an accessibility element. For details, see 
 * [AccessibilityElement]{@link ./application/AccessibilityExtensionContext:AccessibilityElement}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 * @since 23 static
 */
export type AccessibilityElement = _AccessibilityElement;

/**
 * Provides attribute names and value types of a node element. For details, see 
 * [ElementAttributeValues]{@link ./application/AccessibilityExtensionContext:ElementAttributeValues}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamiconly
 */
export type ElementAttributeValues = _ElementAttributeValues;

/**
 * Enumerates the focus directions. For details, see 
 * [FocusDirection]{@link ./application/AccessibilityExtensionContext:FocusDirection}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 * @since 23 static
 */
export type FocusDirection = _FocusDirection;

/**
 * Describes the attribute name of 
 * [ElementAttributeValues]{@link ./application/AccessibilityExtensionContext:ElementAttributeValues}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamiconly
 */
export type ElementAttributeKeys = keyof ElementAttributeValues;

/**
 * Enumerates the focus types. For details, see 
 * [FocusType]{@link ./application/AccessibilityExtensionContext:FocusType}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamiconly
 */
export type FocusType = _FocusType;

/**
 * Enumerates the window types. For details, see 
 * [WindowType]{@link ./application/AccessibilityExtensionContext:WindowType}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 * @since 23 static
 */
export type WindowType = _WindowType;

/**
 * Defines a rectangle. For details, see [Rect]{@link ./application/AccessibilityExtensionContext:Rect}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 * @since 23 static
 */
export type Rect = _Rect;

/**
 * Indicates executeAction parameter.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export type Parameter = _Parameter;

/**
 * Indicates the context of the accessibility extension. For details, see 
 * [AccessibilityExtensionContext]{@link ./application/AccessibilityExtensionContext:AccessibilityExtensionContext}.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10 dynamic
 */
export type AccessibilityExtensionContext = _AccessibilityExtensionContext.default;

/**
 * Indicates the rule of the search focus.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export type FocusRule = _FocusRule;

/**
 * Indicates the condition of the search focus.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export type FocusCondition = _FocusCondition;

/**
 * Indicates focus move result.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export type FocusMoveResult = _FocusMoveResult;

/**
 * Indicates the accessibility virtual node.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export type AccessibilityVirtualNode = _AccessibilityVirtualNode;

/**
 * The touch position of an accessibility virtual node.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export type TouchPosition = _TouchPosition;

/**
 * The accessibility extension context. Used to configure, query information, and inject gestures.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 23 static
 */
export { AccessibilityExtensionContext };

/**
 * AccessibilityExtensionAbility provides the accessibility extension service capability based on the ExtensionAbility 
 * framework.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamic
 * @since 23 static
 */
declare class AccessibilityExtensionAbility {
  /**
   * Indicates the context of the accessibility extension.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamic
   * @since 23 static
   */
  context: AccessibilityExtensionContext;

  /**
   * Called when the **AccessibilityExtensionAbility** is enabled and connected to the system service. In this API, you 
   * can have the service logic initialized. This API can be overridden as required.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onConnect(): void;

  /**
   * Called when the **AccessibilityExtensionAbility** is disabled and disconnected from the system service. In this 
   * API, you can implement the service logic of resource release and exit. This API can be overridden as required.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onDisconnect(): void;

  /**
   * Called when an accessibility event occurs. In this API, you can implement event-specific service logic based on the
   * event information. Generally, this API needs to be overridden.
   *
   * @param { AccessibilityEvent } event - Accessibility event information.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onAccessibilityEvent(event: AccessibilityEvent): void;

  /**
   * Called when a physical key is pressed. In this API, you can determine whether to consume the event based on the 
   * service. This API can be overridden as required.
   *
   * @param { KeyEvent } keyEvent - Key event.
   * @returns { boolean } Returns **true** if the event is consumed and will not be transferred;
   *     <br>returns **false** if the event is not consumed and will be transferred.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   * @deprecated since 12
   */
  onKeyEvent(keyEvent: KeyEvent): boolean;

  /**
   * Callback invoked when the accessibility service is successfully connected.
   * 
   * When the user enables AccessibilityExtensionAbility, the system service calls this API after the connection is 
   * established to notify the ability that it has been successfully connected. You can implement service logic 
   * initialization in this method. This API can be overridden as required.
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
  onAccessibilityConnect(): void;

  /**
   * Callback invoked when the accessibility service is successfully disconnected.
   * 
   * When the user disables AccessibilityExtensionAbility, the system service calls this API after the disconnection is 
   * completed. You can implement resource reclamation and service exit operations in this method. This API can be 
   * overridden as required.
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
  onAccessibilityDisconnect(): void;

  /**
   * When an accessibility event occurs, the system distributes the event to the connected AccessibilityExtensionAbility
   * and calls this API. You can process service logic based on the event information. This API usually needs to be 
   * overridden. For details about event types, see 
   * [AccessibilityEventType]{@link @ohos.accessibility:AccessibilityEventType}.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { AccessibilityEventInfo } event - Accessibility event information.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  onAccessibilityEventInfo(event: AccessibilityEventInfo): void;

  /**
   * Called when a key is pressed. You can determine whether to consume the event based on the service logic in this 
   * method. This API can be overridden as required.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { KeyEvent } keyEvent - Key event.
   * @returns { boolean } The value **true** indicates that the event is consumed and will not be propagated.
   *     <br>The value **false** indicates that the event is not consumed and will continue to be propagated.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  onAccessibilityKeyEvent(keyEvent: KeyEvent): boolean;
}

export default AccessibilityExtensionAbility;

/**
 * Describes the accessibility event information.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export declare interface AccessibilityEventInfo {
  /**
   * Accessibility event type.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  eventType: AccessibilityEventType;

  /**
   * Target component where the event occurs. When the accessibility event involves a specific component, this property 
   * contains the component information.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  target?: AccessibilityElement;

  /**
   * Event timestamp, in milliseconds. The default value is **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  timestamp?: long;

  /**
   * For TextArea, TextInput, SearchField, and RichEdit components, when text content is added or deleted, this property
   * indicates the specific text content added or deleted. The default value is an empty string.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  extraInfo?: string;
}

/**
 * Defines the accessibility event information. An accessibility event is generated by the system accessibility service 
 * upon user operations or UI changes, with the event category identified by **eventType** (including accessibility 
 * event types, window change types, touch exploration event types, gesture event types, and page update types). The 
 * accessibility extension can receive and process these events through the **onAccessibilityEvent** callback.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
export declare interface AccessibilityEvent {
  /**
   * Specific event type, which identifies the category of the current accessibility event.
   * 
   * EventType: accessibility event type;
   * 
   * WindowUpdateType: window change type;
   * 
   * TouchGuideType: touch exploration event type;
   * 
   * GestureType: gesture event type;
   * 
   * PageUpdateType: page update type.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  eventType: accessibility.EventType | accessibility.WindowUpdateType |
        TouchGuideType | GestureType | PageUpdateType;

  /**
   * Target element on which the event occurs. When the accessibility event involves a specific element, this attribute 
   * contains the element information.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  target?: AccessibilityElement;

  /**
   * Event timestamp, which is a non-negative integer in milliseconds. The default value is **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9 dynamiconly
   */
  timeStamp?: long;

  /**
   * ID of the element that is actively focused. Active focus means that the app actively focuses on a specified element
   * through the accessibility service, which is different from manual navigation focus by the user. The default value 
   * is **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  elementId?: long;

  /**
   * Content actively announced. When the app needs to actively announce content, set the announcement content based on 
   * the actual scenario. There is no special restriction. The default value is an empty string.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12 dynamiconly
   */
  textAnnouncedForAccessibility?: string;

  /**
   * For TextArea, TextInput, SearchField, and RichEdit components, when text content is added or deleted, this carries 
   * the added or deleted text content. Set based on the actual scenario. There is no special restriction. The default 
   * value is an empty string.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 20 dynamiconly
   */
  extraInfo?: string;
}

/**
 * Enumerates the gesture event types. A gesture event is triggered by the accessibility service when the user performs 
 * a specific gesture operation. The accessibility extension can receive and process the corresponding gesture event 
 * through the **onAccessibilityEvent** callback.
 *
 * @unionmember { 'left' } Left gesture.
 * @unionmember { 'leftThenRight' } Left-then-right gesture.
 * @unionmember { 'leftThenUp' } Left-then-up gesture.
 * @unionmember { 'leftThenDown' } Left-then-down gesture.
 * @unionmember { 'right' } Right gesture.
 * @unionmember { 'rightThenLeft' } Right-then-left gesture.
 * @unionmember { 'rightThenUp' } Right-then-up gesture.
 * @unionmember { 'rightThenDown' } Right-then-down gesture.
 * @unionmember { 'up' } Up gesture.
 * @unionmember { 'upThenLeft' } Up-then-left gesture.
 * @unionmember { 'upThenRight' } Up-then-right gesture.
 * @unionmember { 'upThenDown' } Up-then-down gesture.
 * @unionmember { 'down' } Down gesture.
 * @unionmember { 'downThenLeft' } Down-then-left gesture.
 * @unionmember { 'downThenRight' } Down-then-right gesture.
 * @unionmember { 'downThenUp' } Down-then-up gesture.
 * @unionmember { 'twoFingerSingleTap' } Two-finger single-tap gesture. [since 11]
 * @unionmember { 'twoFingerDoubleTap' } Two-finger double-tap gesture. [since 11]
 * @unionmember { 'twoFingerDoubleTapAndHold' } Two-finger double-tap-and-hold gesture. [since 11]
 * @unionmember { 'twoFingerTripleTap' } Two-finger triple-tap gesture. [since 11]
 * @unionmember { 'twoFingerTripleTapAndHold' } Two-finger triple-tap-and-hold gesture. [since 11]
 * @unionmember { 'threeFingerSingleTap' } Three-finger single-tap gesture. [since 11]
 * @unionmember { 'threeFingerDoubleTap' } Three-finger double-tap gesture. [since 11]
 * @unionmember { 'threeFingerDoubleTapAndHold' } Three-finger double-tap-and-hold gesture. [since 11]
 * @unionmember { 'threeFingerTripleTap' } Three-finger triple-tap gesture. [since 11]
 * @unionmember { 'threeFingerTripleTapAndHold' } Three-finger triple-tap-and-hold gesture. [since 11]
 * @unionmember { 'fourFingerSingleTap' } Four-finger single-tap gesture. [since 11]
 * @unionmember { 'fourFingerDoubleTap' } Four-finger double-tap gesture. [since 11]
 * @unionmember { 'fourFingerDoubleTapAndHold' } Four-finger double-tap-and-hold gesture. [since 11]
 * @unionmember { 'fourFingerTripleTap' } Four-finger triple-tap gesture. [since 11]
 * @unionmember { 'fourFingerTripleTapAndHold' } Four-finger triple-tap-and-hold gesture. [since 11]
 * @unionmember { 'threeFingerSwipeUp' } Three-finger swipe-up gesture. [since 11]
 * @unionmember { 'threeFingerSwipeDown' } Three-finger swipe-down gesture. [since 11]
 * @unionmember { 'threeFingerSwipeLeft' } Three-finger swipe-left gesture. [since 11]
 * @unionmember { 'threeFingerSwipeRight' } Three-finger swipe-right gesture. [since 11]
 * @unionmember { 'fourFingerSwipeUp' } Four-finger swipe-up gesture. [since 11]
 * @unionmember { 'fourFingerSwipeDown' } Four-finger swipe-down gesture. [since 11]
 * @unionmember { 'fourFingerSwipeLeft' } Four-finger swipe-left gesture. [since 11]
 * @unionmember { 'fourFingerSwipeRight' } Four-finger swipe-right gesture. [since 11]
 * @unionmember { 'oneFingerDoubleTap' } Single-finger double-tap gesture. [since 26.0.0]
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @stagemodelonly
 * @since 9 dynamiconly
 */
type GestureType = 'left' | 'leftThenRight' | 'leftThenUp' | 'leftThenDown' |
  'right' | 'rightThenLeft' | 'rightThenUp' | 'rightThenDown' |
  'up' | 'upThenLeft' | 'upThenRight' | 'upThenDown' |
  'down' | 'downThenLeft' | 'downThenRight' | 'downThenUp' |
  'twoFingerSingleTap' | 'twoFingerDoubleTap' | 'twoFingerDoubleTapAndHold' | 'twoFingerTripleTap' |
  'twoFingerTripleTapAndHold' | 'threeFingerSingleTap' | 'threeFingerDoubleTap' | 'threeFingerDoubleTapAndHold' |
  'threeFingerTripleTap' | 'threeFingerTripleTapAndHold' | 'fourFingerSingleTap' | 'fourFingerDoubleTap' |
  'fourFingerDoubleTapAndHold' | 'fourFingerTripleTap' | 'fourFingerTripleTapAndHold' |
  'threeFingerSwipeUp' | 'threeFingerSwipeDown' | 'threeFingerSwipeLeft' | 'threeFingerSwipeRight' |
  'fourFingerSwipeUp' | 'fourFingerSwipeDown' | 'fourFingerSwipeLeft' | 'fourFingerSwipeRight' | 'oneFingerDoubleTap';

/**
 * Enumerates the page update types. A page update event is triggered by the accessibility service when the page content
 * or state changes. The accessibility extension can receive and process the corresponding page update event through the
 * **onAccessibilityEvent** callback.
 *
 * @unionmember { 'pageContentUpdate' } Page content updated.
 * @unionmember { 'pageStateUpdate' } Page state updated.
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
type PageUpdateType = 'pageContentUpdate' | 'pageStateUpdate';

/**
 * Enumerates the touch exploration event types. Touch exploration is an interaction mode in accessibility features, in 
 * which the user explores UI elements by touch without directly activating them.
 *
 * @unionmember { 'touchBegin' } Start of touch.
 * @unionmember { 'touchEnd' } End of touch.
 * @unionmember { 'touchGuideGesture' } Represents a touch exploration gesture.  [since 26.0.0]
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9 dynamiconly
 */
type TouchGuideType = 'touchBegin' | 'touchEnd' | 'touchGuideGesture';