/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit AccessibilityKit
 */

import type accessibility from './@ohos.accessibility';
import type { KeyEvent } from './@ohos.multimodalInput.keyEvent';
import type {
  AccessibilityElement as _AccessibilityElement,
  ElementAttributeValues as _ElementAttributeValues,
  FocusDirection as _FocusDirection,
  FocusType as _FocusType,
  WindowType as _WindowType,
  Rect as _Rect,
  AccessibilityAction as _AccessibilityAction,
  Parameter as _Parameter,
} from './application/AccessibilityExtensionContext';
import type * as _AccessibilityExtensionContext from './application/AccessibilityExtensionContext';


/**
 * Indicates an accessibility element.
 * Supports querying element attributes, requesting execution actions, and finding child elements by condition.
 *
 * @typedef {_AccessibilityElement}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10
 */
export type AccessibilityElement = _AccessibilityElement;

/**
 * Indicates the possible attributes of the element and the type of the attribute value.
 *
 * @typedef {_ElementAttributeValues}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10
 */
export type ElementAttributeValues = _ElementAttributeValues;

/**
 * Indicates the direction of the search focus.
 *
 * @typedef {_FocusDirection}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10
 */
export type FocusDirection = _FocusDirection;

/**
 * Indicates the key of the attribute value.
 *
 * @typedef {keyof ElementAttributeValues}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10
 */
export type ElementAttributeKeys = keyof ElementAttributeValues;

/**
 * Indicates the type of the focus.
 *
 * @typedef {_FocusType}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10
 */
export type FocusType = _FocusType;

/**
 * Indicates the type of the window.
 *
 * @typedef {_WindowType}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10
 */
export type WindowType = _WindowType;

/**
 * Indicates rectangle.
 *
 * @typedef {_Rect}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10
 */
export type Rect = _Rect;

/**
 * Accessibility action that the ability can execute.
 *
 * @typedef {_AccessibilityAction}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
export type AccessibilityAction = _AccessibilityAction;

/**
 * Indicates the parameter of the AccessibiltyAction.
 *
 * @typedef {_Parameter}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
export type Parameter = _Parameter;

/**
 * The accessibility extension context. Used to configure, query information, and inject gestures.
 *
 * @typedef {_AccessibilityExtensionContext.default}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 10
 */

export type AccessibilityExtensionContext = _AccessibilityExtensionContext.default;

/**
 * class of accessibility extension ability.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
export default class AccessibilityExtensionAbility {
  /**
   * Indicates accessibility extension ability context.
   *
   * @type {AccessibilityExtensionContext}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  context: AccessibilityExtensionContext;

  /**
   * Called when extension ability is connected.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  onConnect(): void;

  /**
   * Called when extension ability is disconnected.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  onDisconnect(): void;

  /**
   * Called when an accessibility event occurs, such as when the user touches the application interface.
   *
   * @param { AccessibilityEvent } event Indicates an accessibility event.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  onAccessibilityEvent(event: AccessibilityEvent): void;

  /**
   * Called when a physical key is pressed, such as when the user presses the volume button .
   *
   * @param { KeyEvent } keyEvent Indicates the physical key event.
   * @returns { boolean }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   * @deprecated since 12
   */
  onKeyEvent(keyEvent: KeyEvent): boolean;

  /**
   * Called when extension ability is connected.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  onAccessibilityConnect(): void;

  /**
   * Called when extension ability is disconnected.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  onAccessibilityDisconnect(): void;

  /**
   * Called when an accessibility event occurs, such as when the user touches the application interface.
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { AccessibilityEventInfo } event Indicates an accessibility event.
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  onAccessibilityEventInfo(event: AccessibilityEventInfo): void;

  /**
   * Called when a physical key is pressed, such as when the user presses the volume button .
   *
   * @permission ohos.permission.ACCESSIBILITY_EXTENSION_ABILITY
   * @param { KeyEvent } keyEvent Indicates the physical key event.
   * @returns { boolean }
   * @throws { BusinessError } 201 - Permission verification failed.The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  onAccessibilityKeyEvent(keyEvent: KeyEvent): boolean;
}

/**
 * Indicates the accessibility event.
 * It provides the event type and the target element of the event if any.
 *
 * @typedef AccessibilityEventInfo
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
declare interface AccessibilityEventInfo {
  /**
   * EventType
   *
   * @type { AccessibilityEventType }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  eventType: AccessibilityEventType;

  /**
   * Target
   *
   * @type { ?AccessibilityElement }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  target?: AccessibilityElement;

  /**
   * TimeStamp
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  timestamp?: number;

  /**
   * The content of add/remove accessibility extraInfo text.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  extraInfo?: string;
}

/**
 * AccessibilityEvent type
 *
 * @enum { number }
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
export enum AccessibilityEventType {
  //EventType
  /**
   * AccessibilityFocus type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_ACCESSIBILITY_FOCUS = 0,

  /**
   * AccessibilityFocusClear type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_ACCESSIBILITY_FOCUS_CLEAR = 1,

  /**
   * Click type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_CLICK = 2,

  /**
   * LongClick type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_LONG_CLICK = 3,

  /**
   * Select type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SELECT = 4,

  /**
   * HoverEnter type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_HOVER_ENTER = 5,

  /**
   * HoverExit type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_HOVER_EXIT = 6,

  /**
   * Focus type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_FOCUS = 7,

  /**
   * TextUpdate type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_TEXT_UPDATE = 8,

  /**
   * TextSelectionUpdate type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_TEXT_SELECTION_UPDATE = 9,

  /**
   * Scroll type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SCROLL = 10,

  /**
   * RequestFocusForAccessibility type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_REQUEST_FOCUS_FOR_ACCESSIBILITY = 11,

  /**
   * AnnounceForAccessibility type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_ANNOUNCE_FOR_ACCESSIBILITY = 12,

  /**
   * RequestFocusForAccessibilityNotInterrupt type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_REQUEST_FOCUS_FOR_ACCESSIBILITY_NOT_INTERRUPT = 13,

  /**
   * AnnounceForAccessibilityNotInterrupt type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_ANNOUNCE_FOR_ACCESSIBILITY_NOT_INTERRUPT = 14,

  /**
   * ElementInfoChange type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_ELEMENT_INFO_CHANGE = 15,

  /**
   * Scrolling type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SCROLLING = 16,

  // WindowUpdateType
  /**
   * Window add type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_WINDOW_ADD = 17,

  /**
   * Window remove type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_WINDOW_REMOVE = 18,

  /**
   * Window bounds type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_WINDOW_BOUNDS = 19,

  /**
   * Window active type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_WINDOW_ACTIVE = 20,

  /**
   * Window focus type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_WINDOW_FOCUS = 21,

  /**
   * Window property type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_WINDOW_PROPERTY = 22,

  /**
   * Window layer type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_WINDOW_LAYER = 23,

  //TouchGuideType
  /**
   * TouchBegin type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_TOUCH_BEGIN = 24,

  /**
   * TouchEnd type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_TOUCH_END = 25,

  //PageUpdateType
  /**
   * PageContentUpdate type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_PAGE_CONTENT_UPDATE = 26,

  /**
   * PageStateUpdate type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_PAGE_STATE_UPDATE = 27,

  /**
   * PageOpen type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_PAGE_OPEN = 28,

  /**
   * PageClose type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_PAGE_CLOSE = 29,

  //GestureType
  /**
   * left type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_LEFT = 30,

  /**
   * leftThenRight type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_LEFT_THEN_RIGHT = 31,

  /**
   * leftThenUp type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_LEFT_THEN_UP = 32,

  /**
   * leftThenDown type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_LEFT_THEN_DOWN = 33,

  /**
   * right type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_RIGHT = 34,

  /**
   * rightThenLeft type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_RIGHT_THEN_LEFT = 35,

  /**
   * rightThenUp type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_RIGHT_THEN_UP = 36,

  /**
   * rightThenDown type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_RIGHT_THEN_DOWN = 37,

  /**
   * up type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_UP = 38,

  /**
   * upThenLeft type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_UP_THEN_LEFT = 39,

  /**
   * upThenRight type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_UP_THEN_RIGHT = 40,

  /**
   * upThenDown type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_UP_THEN_DOWN = 41,

  /**
   * down type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_DOWN = 42,

  /**
   * downThenLeft type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_DOWN_THEN_LEFT = 43,

  /**
 * downThenRight type
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
  TYPE_SWIPE_DOWN_THEN_RIGHT = 44,

  /**
   * downThenUp type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_SWIPE_DOWN_THEN_UP = 45,

  /**
   * twoFingerSingleTap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_TWO_FINGER_SINGLE_TAP = 46,

  /**
   * twoFingerDoubleTap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_TWO_FINGER_DOUBLE_TAP = 47,

  /**
   * twoFingerDoubleTapAndHold type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_TWO_FINGER_DOUBLE_TAP_AND_HOLD = 48,

  /**
 * twoFingerTripleTap type
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
  TYPE_TWO_FINGER_TRIPLE_TAP = 49,

  /**
   * twoFingerTripleTapAndHold type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_TWO_FINGER_TRIPLE_TAP_AND_HOLD = 50,

  /**
   * threeFingerSingleTap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_THREE_FINGER_SINGLE_TAP = 51,

  /**
   * threeFingerDoubleTap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_THREE_FINGER_DOUBLE_TAP = 52,

  /**
   * threeFingerDoubleTapAndHold type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_THREE_FINGER_DOUBLE_TAP_AND_HOLD = 53,

  /**
 * threeFingerTripleTap type
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
  TYPE_THREE_FINGER_TRIPLE_TAP = 54,

  /**
   * threeFingerTripleTapAndHold type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_THREE_FINGER_TRIPLE_TAP_AND_HOLD = 55,

  /**
   * fourFingerSingleTap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_FOUR_FINGER_SINGLE_TAP = 56,

  /**
   * fourFingerDoubleTap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_FOUR_FINGER_DOUBLE_TAP = 57,

  /**
   * fourFingerDoubleTapAndHold type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_FOUR_FINGER_DOUBLE_TAP_AND_HOLD = 58,

  /**
 * fourFingerTripleTap type
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
  TYPE_FOUR_FINGER_TRIPLE_TAP = 59,

  /**
   * fourFingerTripleTapAndHold type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_FOUR_FINGER_TRIPLE_TAP_AND_HOLD = 60,

  /**
   * threeFingerSwipeUp type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_THREE_FINGER_SWIPE_UP = 61,

  /**
   * threeFingerSwipeDown type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_THREE_FINGER_SWIPE_DOWN = 62,

  /**
   * threeFingerSwipeLeft type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_THREE_FINGER_SWIPE_LEFT = 63,

  /**
   * threeFingerSwipeRight type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_THREE_FINGER_SWIPE_RIGHT = 64,

  /**
   * fourFingerSwipeUp type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_FOUR_FINGER_SWIPE_UP = 65,

  /**
   * fourFingerSwipeDown type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_FOUR_FINGER_SWIPE_DOWN = 66,

  /**
 * fourFingerSwipeLeft type
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
  TYPE_FOUR_FINGER_SWIPE_LEFT = 67,

  /**
   * fourFingerSwipeRight type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  TYPE_FOUR_FINGER_SWIPE_RIGHT = 68
}

/**
 * Indicates the accessibility event.
 * It provides the event type and the target element of the event if any.
 *
 * @typedef AccessibilityEvent
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
declare interface AccessibilityEvent {
  /**
   * EventType
   *
   * @type { accessibility.EventType | accessibility.WindowUpdateType | TouchGuideType | GestureType | PageUpdateType }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  eventType: accessibility.EventType | accessibility.WindowUpdateType | TouchGuideType | GestureType | PageUpdateType;

  /**
   * Target
   *
   * @type { ?AccessibilityElement }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  target?: AccessibilityElement;

  /**
   * TimeStamp
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  timeStamp?: number;

  /**
   * ElementId
   *
   * @type { ?number }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12
   */
  elementId?: number;

  /**
   * The content of announce accessibility text.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12
   */
  textAnnouncedForAccessibility?: string;

  /**
   * The content of add/remove accessibility extraInfo text.
   *
   * @type { ?string }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 20
   */
  extraInfo?: string;
}

/**
 * Indicates the gesture type.
 * value range: { 'left' | 'leftThenRight' | 'leftThenUp' | 'leftThenDown' |
 * 'right' | 'rightThenLeft' | 'rightThenUp' | 'rightThenDown' |
 * 'up' | 'upThenLeft' | 'upThenRight' | 'upThenDown' |
 * 'down' | 'downThenLeft' | 'downThenRight' | 'downThenUp' }
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
/**
 * Indicates the gesture type.
 * value range: { 'left' | 'leftThenRight' | 'leftThenUp' | 'leftThenDown' |
 * 'right' | 'rightThenLeft' | 'rightThenUp' | 'rightThenDown' |
 * 'up' | 'upThenLeft' | 'upThenRight' | 'upThenDown' |
 * 'down' | 'downThenLeft' | 'downThenRight' | 'downThenUp' |
 * 'twoFingerSingleTap' | 'twoFingerDoubleTap' | 'twoFingerDoubleTapAndHold' | 'twoFingerTripleTap' |
 * 'twoFingerTripleTapAndHold' | 'threeFingerSingleTap' | 'threeFingerDoubleTap' | 'threeFingerDoubleTapAndHold' |
 * 'threeFingerTripleTap' | 'threeFingerTripleTapAndHold' | 'fourFingerSingleTap' | 'fourFingerDoubleTap' |
 * 'fourFingerDoubleTapAndHold' | 'fourFingerTripleTap' | 'fourFingerTripleTapAndHold' |
 * 'threeFingerSwipeUp' | 'threeFingerSwipeDown' | 'threeFingerSwipeLeft' | 'threeFingerSwipeRight' |
 * 'fourFingerSwipeUp' | 'fourFingerSwipeDown' | 'fourFingerSwipeLeft' | 'fourFingerSwipeRight' }
* @typedef {'left' | 'leftThenRight' | 'leftThenUp' | 'leftThenDown' | 'right' | 'rightThenLeft' | 'rightThenUp' | 'rightThenDown' | 'up' | 'upThenLeft' | 'upThenRight' | 'upThenDown' | 'down' | 'downThenLeft' | 'downThenRight' | 'downThenUp' | 'twoFingerSingleTap' | 'twoFingerDoubleTap' | 'twoFingerDoubleTapAndHold' | 'twoFingerTripleTap' | 'twoFingerTripleTapAndHold' | 'threeFingerSingleTap' | 'threeFingerDoubleTap' | 'threeFingerDoubleTapAndHold' | 'threeFingerTripleTap' | 'threeFingerTripleTapAndHold' | 'fourFingerSingleTap' | 'fourFingerDoubleTap' | 'fourFingerDoubleTapAndHold' | 'fourFingerTripleTap' | 'fourFingerTripleTapAndHold' | 'threeFingerSwipeUp' | 'threeFingerSwipeDown' | 'threeFingerSwipeLeft' | 'threeFingerSwipeRight' | 'fourFingerSwipeUp' | 'fourFingerSwipeDown' | 'fourFingerSwipeLeft' | 'fourFingerSwipeRight'}
* @syscap SystemCapability.BarrierFree.Accessibility.Core
* @since 11
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
  'fourFingerSwipeUp' | 'fourFingerSwipeDown' | 'fourFingerSwipeLeft' | 'fourFingerSwipeRight';

/**
 * Indicates the page update type.
 *
 * @typedef {'pageContentUpdate' | 'pageStateUpdate'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
type PageUpdateType = 'pageContentUpdate' | 'pageStateUpdate';

/**
 * Indicates the type of touch event during touch browsing.
 *
 * @typedef {'touchBegin' | 'touchEnd'}
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 9
 */
type TouchGuideType = 'touchBegin' | 'touchEnd';
