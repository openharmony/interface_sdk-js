/*
 * Copyright (C) 2021-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
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

import type { AsyncCallback } from './@ohos.base';
import type { Callback } from './@ohos.base';
import { Resource } from './global/resource';

/**
 * Accessibility action that the ability can execute.
 *
 * @enum { number }
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20
 */
export enum AccessibilityAction {
  /**
   * AccessibilityFocus
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  ACCESSIBILITY_FOCUS = 0,

  /**
   * ClearAccessibilityFocus
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  CLEAR_ACCESSIBILITY_FOCUS = 1,

  /**
   * Focus
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  FOCUS = 2,

  /**
   * ClearFocus
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  CLEAR_FOCUS = 3,

  /**
   * Click
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  CLICK = 4,

  /**
   * LongClick
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  LONG_CLICK = 5,

  /**
   * Cut
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  CUT = 6,

  /**
   * Copy
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  COPY = 7,

  /**
   * Paste
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  PASTE = 8,

  /**
   * Select
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  SELECT = 9,

  /**
   * SetText
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  SET_TEXT = 10,

  /**
   * ScrollForward
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  SCROLL_FORWARD = 11,

  /**
   * ScrollBackward
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  SCROLL_BACKWARD = 12,

  /**
   * SetSelection
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  SET_SELECTION = 13,

  /**
   * SetCursorPosition
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  SET_CURSOR_POSITION = 14,

  /**
   * Home
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  HOME = 15,

  /**
   * Back
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  BACK = 16,

  /**
   * RecentTask
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  RECENT_TASK = 17,

  /**
   * NotificationCenter
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  NOTIFICATION_CENTER = 18,

  /**
   * ControlCenter
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  CONTROL_CENTER = 19,

  /**
   * SpanClick
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20
   */
  SPAN_CLICK = 21
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
 * Accessibility
 *
 * @namespace accessibility
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 7
 */
/**
 * Accessibility
 *
 * @namespace accessibility
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @atomicservice
 * @since 11
 */
/**
 * Accessibility
 *
 * @namespace accessibility
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @crossplatform
 * @atomicservice
 * @since 20
 * @arkts 1.1&1.2
 */
declare namespace accessibility {
  /**
   * The type of the Ability app.
   *
   *{ 'audible' | 'generic' | 'haptic' | 'spoken' | 'visual' }
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  /**
   * The type of the Ability app.
   *
   * { 'audible' | 'generic' | 'haptic' | 'spoken' | 'visual' | 'all' }
   * @typedef {'audible' | 'generic' | 'haptic' | 'spoken' | 'visual' | 'all'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  type AbilityType = 'audible' | 'generic' | 'haptic' | 'spoken' | 'visual' | 'all';

  /**
   * The action that the ability can execute.
   * value range: { 'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' |
   * 'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' |
   * 'scrollForward' | 'scrollBackward' | 'setSelection' }
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  /**
   * The action that the ability can execute.
   * value range: { 'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' |
   * 'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' |
   * 'scrollForward' | 'scrollBackward' | 'setSelection' | 'setCursorPosition' | 'home' |
   * 'back' | 'recentTask' | 'notificationCenter' | 'controlCenter' | 'common' }
   *
   * @typedef {'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' | 'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' | 'scrollForward' | 'scrollBackward' | 'setSelection' | 'setCursorPosition' | 'home' | 'back' | 'recentTask' | 'notificationCenter' | 'controlCenter' | 'common'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since arkts {'1.1':'12', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  type Action = 'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' |
  'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' |
  'scrollForward' | 'scrollBackward' | 'setSelection' | 'setCursorPosition' | 'home' |
  'back' | 'recentTask' | 'notificationCenter' | 'controlCenter' | 'common';

  /**
   * The type of the accessibility event.
   * windowsChange/windowContentChange/windowStateChange/announcement/notificationChange/textTraversedAtMove
   * value range: { 'accessibilityFocus' | 'accessibilityFocusClear' |
   * 'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
   * 'textUpdate' | 'textSelectionUpdate' | 'scroll' }
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  /**
   * The type of the accessibility event.
   * windowsChange/windowContentChange/windowStateChange/announcement/notificationChange/textTraversedAtMove
   * value range: { 'accessibilityFocus' | 'accessibilityFocusClear' |
   * 'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
   * 'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
   * 'announceForAccessibility' }
   *
   * @typedef {'accessibilityFocus' | 'accessibilityFocusClear' | 'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' | 'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' | 'announceForAccessibility'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12
   */
  /**
   * The type of the accessibility event.
   * windowsChange/windowContentChange/windowStateChange/announcement/notificationChange/textTraversedAtMove
   * value range: { 'accessibilityFocus' | 'accessibilityFocusClear' |
   * 'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
   * 'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
   * 'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' |
   * 'announceForAccessibilityNotInterrupt' | 'scrolling' }
   *
   * @typedef {'accessibilityFocus' | 'accessibilityFocusClear' | 'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' | 'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' | 'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' | 'announceForAccessibilityNotInterrupt' | 'scrolling'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  type EventType = 'accessibilityFocus' | 'accessibilityFocusClear' |
  'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
  'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
  'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' |
  'announceForAccessibilityNotInterrupt' | 'scrolling';

  /**
   * The change type of the windowsChange event.
   * It's used when received the {@code windowsChange} event.
   *
   * @typedef {'add' | 'remove' | 'bounds' | 'active' | 'focus'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  type WindowUpdateType = 'add' | 'remove' | 'bounds' | 'active' | 'focus';

  /**
   * The type of the ability state.
   *
   * @typedef {'enable' | 'disable' | 'install'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  type AbilityState = 'enable' | 'disable' | 'install';

  /**
   * The ability that accessibility subsystem support.
   * touchExplorer: Describes the capability to talkback.
   * magnification: Describes the capability to request to control the display magnification.
   * gesturesSimulation: Describes the capability to request to simulate the gesture.
   * windowContent: Describes the capability to search for the content of the active window.
   * filterKeyEvents: Describes the capability to request to filter key events.
   * fingerprintGesture: Describes the capability to request to fingerprint gesture.
   *
   * @typedef {'retrieve' | 'touchGuide' | 'keyEventObserver' | 'zoom' | 'gesture'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  type Capability = 'retrieve' | 'touchGuide' | 'keyEventObserver' | 'zoom' | 'gesture';

  /**
   * The granularity of text move.
   *
   * @typedef {'char' | 'word' | 'line' | 'page' | 'paragraph'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  type TextMoveUnit = 'char' | 'word' | 'line' | 'page' | 'paragraph';

  /**
   * Checks whether accessibility ability is enabled.
   *
   * @param { AsyncCallback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   * @deprecated since 10
   * @useinstead ohos.accessibility#isOpenAccessibilitySync
   */
  function isOpenAccessibility(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether accessibility ability is enabled.
   *
   * @returns { Promise<boolean> } Returns {@code true} if the accessibility is enabled; returns {@code false} otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   * @deprecated since 10
   * @useinstead ohos.accessibility#isOpenAccessibilitySync
   */
  function isOpenAccessibility(): Promise<boolean>;

  /**
   * Checks whether accessibility ability is enabled.
   *
   * @returns { boolean } Returns true if the accessibility is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 10
   */
  /**
   * Checks whether accessibility ability is enabled.
   *
   * @returns { boolean } Returns true if the accessibility is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @atomicservice
   * @since 11
   */
  /**
   * Checks whether accessibility ability is enabled.
   *
   * @returns { boolean } Returns true if the accessibility is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @atomicservice
   * @since 20
   * @arkts 1.1&1.2
   */
  function isOpenAccessibilitySync(): boolean;

  /**
   * Checks touch browser ability (which is used by talkback) is enabled.
   *
   * @param { AsyncCallback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 7
   * @deprecated since 10
   * @useinstead ohos.accessibility#isOpenTouchGuideSync
   */
  function isOpenTouchGuide(callback: AsyncCallback<boolean>): void;

  /**
   * Checks touch browser ability (which is used by talkback) is enabled.
   *
   * @returns { Promise<boolean> } Returns {@code true} if the touch browser is enabled; returns {@code false} otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 7
   * @deprecated since 10
   * @useinstead ohos.accessibility#isOpenTouchGuideSync
   */
  function isOpenTouchGuide(): Promise<boolean>;

  /**
   * Checks touch browser ability (which is used by talkback) is enabled.
   *
   * @returns { boolean } Returns true if the touch browser is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 10
   */
  /**
   * Checks touch browser ability (which is used by talkback) is enabled.
   *
   * @returns { boolean } Returns true if the touch browser is enabled; returns false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @atomicservice
   * @since arkts {'1.1':'11', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function isOpenTouchGuideSync(): boolean;

  /**
   * Checks screen reader ability (which is used by talkback) is enabled.
   * @returns { boolean } Returns true if the screen reader is enabled; return false otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @atomicservice
   * @since 18
   */
  function isScreenReaderOpenSync(): boolean;

  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @param { AsyncCallback<Array<AccessibilityAbilityInfo>> } callback
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.accessibility#getAccessibilityExtensionList
   */
  function getAbilityLists(
    abilityType: AbilityType,
    stateType: AbilityState,
    callback: AsyncCallback<Array<AccessibilityAbilityInfo>>
  ): void;

  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @returns { Promise<Array<AccessibilityAbilityInfo>> } Returns the list of abilityInfos.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.accessibility#getAccessibilityExtensionList
   */
  function getAbilityLists(abilityType: AbilityType, stateType: AbilityState): Promise<Array<AccessibilityAbilityInfo>>;

  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @returns { Promise<Array<AccessibilityAbilityInfo>> } Returns the list of abilityInfos.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  function getAccessibilityExtensionList(
    abilityType: AbilityType,
    stateType: AbilityState
  ): Promise<Array<AccessibilityAbilityInfo>>;

  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @param { AsyncCallback<Array<AccessibilityAbilityInfo>> } callback
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  function getAccessibilityExtensionList(
    abilityType: AbilityType,
    stateType: AbilityState,
    callback: AsyncCallback<Array<AccessibilityAbilityInfo>>
  ): void;

  /**
   * Queries the list of accessibility abilities.
   *
   * @param { AbilityType } abilityType The type of the accessibility ability. {@code AbilityType} eg.spoken
   * @param { AbilityState } stateType The state of the accessibility ability.  {@code AbilityState} eg.installed
   * @returns { Array<AccessibilityAbilityInfo> } Returns the list of abilityInfos.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12
   */
  function getAccessibilityExtensionListSync(
    abilityType: AbilityType,
    stateType: AbilityState
  ): Array<AccessibilityAbilityInfo>;

  /**
   * Send accessibility Event.
   *
   * @param { EventInfo } event The object of the accessibility {@code EventInfo} .
   * @param { AsyncCallback<void> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.accessibility#sendAccessibilityEvent
   */
  function sendEvent(event: EventInfo, callback: AsyncCallback<void>): void;

  /**
   * Send accessibility Event.
   *
   * @param { EventInfo } event The object of the accessibility {@code EventInfo} .
   * @returns { Promise<void> } Returns {@code true} if success ; returns {@code false} otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   * @deprecated since 9
   * @useinstead ohos.accessibility#sendAccessibilityEvent
   */
  function sendEvent(event: EventInfo): Promise<void>;

  /**
   * Send accessibility event.
   *
   * @param { EventInfo } event The object of the accessibility {@code EventInfo} .
   * @param { AsyncCallback<void> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function sendAccessibilityEvent(event: EventInfo, callback: AsyncCallback<void>): void;

  /**
   * Send accessibility event.
   *
   * @param { EventInfo } event The object of the accessibility {@code EventInfo} .
   * @returns { Promise<void> } Returns {@code true} if success ; returns {@code false} otherwise.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since arkts {'1.1':'9', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function sendAccessibilityEvent(event: EventInfo): Promise<void>;

  /**
   * Gets touch mode type.
   * @returns { string } Returns touch mode type, include 'singleTouchMode', 'doubleTouchMode', and 'none'.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 20
   */
  function getTouchModeSync(): string;

  /**
   * Register the observe of the accessibility state changed.
   *
   * @param { 'accessibilityStateChange' } type state event type.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  /**
   * Register the observe of the accessibility state changed.
   *
   * @param { 'accessibilityStateChange' } type state event type.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @since 20
   * @arkts 1.1&1.2
   */
  function on(type: 'accessibilityStateChange', callback: Callback<boolean>): void;

  /**
   * Register the observe of the touchGuide state changed.
   *
   * @param { 'touchGuideStateChange' } type state event type.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function on(type: 'touchGuideStateChange', callback: Callback<boolean>): void;

  /**
   * Register the observe of the screen reader state changed.
   * @param { 'screenReaderStateChange' } type state event type.
   * @param { Callback<boolean> } callback callback Asynchronous callback interface.
   * @throws { BusinessError } 401 Input parameter error. Possible causes:
   * 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types;
   * 3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function on(type: 'screenReaderStateChange', callback: Callback<boolean>): void;

  /**
   * Register the observe of the touch mode changed.
   * @param { 'touchModeChange' } type touch mode change.
   * @param { Callback<string> } callback callback Asynchronous callback interface.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   * 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types;
   * 3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 20
   */
  function on(type: 'touchModeChange', callback: Callback<string>): void;

  /**
   * Unregister the observe of the accessibility state changed.
   *
   * @param { 'accessibilityStateChange' } type state event type
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  /**
   * Unregister the observe of the accessibility state changed.
   *
   * @param { 'accessibilityStateChange' } type state event type
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @since 20
   * @arkts 1.1&1.2
   */
  function off(type: 'accessibilityStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the touchGuide state changed.
   *
   * @param { 'touchGuideStateChange' } type state event type
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function off(type: 'touchGuideStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the screen reader state changed.
   * @param { 'screenReaderStateChange' } type state event type
   * @param { Callback<boolean> } callback callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   * 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types;
   * 3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since arkts {'1.1':'18', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  function off(type: 'screenReaderStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the touch mode changed.
   * @param { 'touchModeChange' } type touch mode change.
   * @param { Callback<string> } callback callback Asynchronous callback interface.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   * 1. Mandatory parameters are left unspecified;
   * 2. Incorrect parameter types;
   * 3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 20
   */
  function off(type: 'touchModeChange', callback?: Callback<string>): void;

  /**
   * Get the captions manager.
   *
   * @returns { CaptionsManager } Returns the captions manager.
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @since 8
   * @deprecated since 12
   */
  function getCaptionsManager(): CaptionsManager;

  /**
   * Indicates the captions manager.
   *
   * @typedef CaptionsManager
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @since 8
   */
  interface CaptionsManager {
    /**
     * Indicates whether captions are enabled.
     *
     * @type {boolean}
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8
     */
    enabled: boolean;
    /**
     * Indicates the style of captions.
     *
     * @type {CaptionsStyle}
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8
     */
    style: CaptionsStyle;

    /**
     * Register the observe of the enable state.
     *
     * @param { 'enableChange' } type
     * @param { Callback<boolean> } callback
     * @throws { BusinessError } 401 - Input parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8
     * @deprecated since 12
     */
    on(type: 'enableChange', callback: Callback<boolean>): void;

    /**
     * Register the observer of the style.
     *
     * @param { 'styleChange' } type
     * @param { Callback<CaptionsStyle> } callback
     * @throws { BusinessError } 401 - Input parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8
     * @deprecated since 12
     */
    on(type: 'styleChange', callback: Callback<CaptionsStyle>): void;

    /**
     * Unregister the observe of the enable state.
     *
     * @param { 'enableChange' } type
     * @param { Callback<boolean> } callback
     * @throws { BusinessError } 401 - Input parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8
     * @deprecated since 12
     */
    off(type: 'enableChange', callback?: Callback<boolean>): void;

    /**
     * Unregister the observer of the style.
     *
     * @param { 'styleChange' } type
     * @param { Callback<CaptionsStyle> } callback
     * @throws { BusinessError } 401 - Input parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8
     * @deprecated since 12
     */
    off(type: 'styleChange', callback?: Callback<CaptionsStyle>): void;
  }

  /**
   * Indicates the edge type of the captions font.
   *
   * @typedef {'none' | 'raised' | 'depressed' | 'uniform' | 'dropShadow'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @since 8
   */
  type CaptionsFontEdgeType = 'none' | 'raised' | 'depressed' | 'uniform' | 'dropShadow';
  /**
   * Indicates the font family of captions.
   *
   * @typedef {'default' | 'monospacedSerif' | 'serif' | 'monospacedSansSerif' | 'sansSerif' | 'casual' | 'cursive' | 'smallCapitals'}     
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @since 8
   */
  type CaptionsFontFamily = 'default' | 'monospacedSerif' | 'serif' |      
  'monospacedSansSerif' | 'sansSerif' | 'casual' | 'cursive' | 'smallCapitals';
  /**
   * Indicates the style of captions.
   *
   * @typedef CaptionsStyle
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @since 8
   */
  interface CaptionsStyle {
    /**
     * Indicates the font family of captions.
     *
     * @type {CaptionsFontFamily}
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8
     */
    fontFamily: CaptionsFontFamily;
    /**
     * Indicates the font scaling of captions.
     * @type { number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8
     */
    fontScale: number;
    /**
     * Indicates the font color of captions.
     * @type { number | string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8
     */
    fontColor: number | string;
    /**
     * Indicates the edge type of the captions font.
     * @type { CaptionsFontEdgeType }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8
     */
    fontEdgeType: CaptionsFontEdgeType;
    /**
     * Indicates the background color of captions.
     * @type { number | string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8
     */
    backgroundColor: number | string;
    /**
     * Indicates the window color of captions.
     * @type { number | string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8
     */
    windowColor: number | string;
  }

  /**
   * Indicates the info of accessibility.
   *
   * @typedef AccessibilityAbilityInfo
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  interface AccessibilityAbilityInfo {
    /**
     * The ability id.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    readonly id: string;

    /**
     * The ability name.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    readonly name: string;

    /**
     * The bundle name of the ability.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    readonly bundleName: string;
    /**
     * The target bundle name for the observation.
     * @type { Array<string> }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 9
     */
    readonly targetBundleNames: Array<string>;

    /**
     * The type of the ability.
     * @type { Array<AbilityType> }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    readonly abilityTypes: Array<AbilityType>;

    /**
     * The capabilities of the ability.
     * @type { Array<Capability> }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    readonly capabilities: Array<Capability>;

    /**
     * The description of the ability.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    readonly description: string;

    /**
     * The events which the accessibility ability wants to observe.
     * @type { Array<EventType> }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    readonly eventTypes: Array<EventType>;

    /**
     * Indicates whether the extended service needs to be hidden.
     * @type { boolean }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 12
     */
    readonly needHide: boolean;

    /**
     * The label of the ability.
     * @type { string }
     * @readonly
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 12
     */
    readonly label: string;
  }

  /**
   * Indicates the info of events.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since arkts {'1.1':'7', '1.2':'20'}
   * @arkts 1.1&1.2
   */
  class EventInfo {
    /**
     * A constructor used to create a EventInfo object.
     *
     * @param jsonObject - Character string in JSON format required for creating an object.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    constructor(jsonObject);
    /**
     * A constructor used to create a EventInfo object.
     *
     * @param { EventType } type - The type of the accessibility event.
     * @param { string } bundleName - The name of the bundle.
     * @param { Action } triggerAction - The action that the ability can execute.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'11', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    constructor(type: EventType, bundleName: string, triggerAction: Action);
    /**
     * The type of an accessibility event.
     * @type { EventType }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    type: EventType;

    /**
     * The type of the window change event.
     * @type { ?WindowUpdateType }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    windowUpdateType?: WindowUpdateType;

    /**
     * The bundle name of the target application.
     * @type { string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    bundleName: string;

    /**
     * The type of the event source component,such as button, chart.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    componentType?: string;

    /**
     * The page id of the event source.
     * @type { ?number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    pageId?: number;

    /**
     * The accessibility event description.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    description?: string;

    /**
     * The action that triggers the accessibility event, for example, clicking or focusing a view.
     * @type { Action }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    triggerAction: Action;

    /**
     * The movement step used for reading texts.
     * @type { ?TextMoveUnit }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    textMoveUnit?: TextMoveUnit;

    /**
     * The content list.
     * @type { ?Array<string> }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    contents?: Array<string>;

    /**
     * The content changed before.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    lastContent?: string;

    /**
     * The start index of listed items on the screen.
     * @type { ?number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    beginIndex?: number;

    /**
     * The index of the current item on the screen.
     * @type { ?number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    currentIndex?: number;

    /**
     * The end index of listed items on the screen.
     * @type { ?number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    endIndex?: number;

    /**
     * The total of the items, talkback used it when scroll.
     * @type { ?number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'7', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    itemCount?: number;

    /**
     * The id of element.
     * @type { ?number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    elementId?: number;

    /**
     * The content of announce accessibility text.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    textAnnouncedForAccessibility?: string;

    /**
     * The content of announce accessibility text.
     * @type { ?Resource }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 18
     */
    textResourceAnnouncedForAccessibility?: Resource;

    /**
     * The customized element id.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since arkts {'1.1':'12', '1.2':'20'}
     * @arkts 1.1&1.2
     */
    customId?: string;
  }
}
export default accessibility;
