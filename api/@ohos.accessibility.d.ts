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
 * The **Accessibility** module implements the accessibility features, including obtaining the accessibility application
 * list, accessibility application enabling state, and captions configuration.
 *
 * @file
 * @kit AccessibilityKit
 */

import type { AsyncCallback } from './@ohos.base';
import type { Callback } from './@ohos.base';
import { Resource } from './global/resource';

/**
 * Enumerates executable actions for accessibility node elements.
 * 
 * Accessibility node elements are UI components that support accessibility actions, such as buttons, text boxes, and so
 * on.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export enum AccessibilityAction {
  /**
   * Gain an accessibility focus.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  ACCESSIBILITY_FOCUS = 0,

  /**
   * Clear an accessibility focus.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CLEAR_ACCESSIBILITY_FOCUS = 1,

  /**
   * Gain a focus for a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  FOCUS = 2,

  /**
   * Clear a focus for a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CLEAR_FOCUS = 3,

  /**
   * Click a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CLICK = 4,

  /**
   * Long press a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  LONG_CLICK = 5,

  /**
   * Cut the content of a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CUT = 6,

  /**
   * Copy the content of a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  COPY = 7,

  /**
   * Paste the content into a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  PASTE = 8,

  /**
   * Select a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SELECT = 9,

  /**
   * Set the text of a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SET_TEXT = 10,

  /**
   * Scroll a component forward.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SCROLL_FORWARD = 11,

  /**
   * Scroll a component backward.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SCROLL_BACKWARD = 12,

  /**
   * Select a text range in a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SET_SELECTION = 13,

  /**
   * Set the cursor position in a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SET_CURSOR_POSITION = 14,

  /**
   * Return to the home screen.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  HOME = 15,

  /**
   * Return to the previous screen.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  BACK = 16,

  /**
   * Open a recent task.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  RECENT_TASK = 17,

  /**
   * Open the notification center.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  NOTIFICATION_CENTER = 18,

  /**
   * Open the control center.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CONTROL_CENTER = 19,

  /**
   * Click a text span.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SPAN_CLICK = 20,

  /**
   * Injection action.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  INJECT_ACTION = 21,

  /**
   * Execute custom action on a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  EXECUTE_CUSTOM_ACTION = 22
}

/**
 * Enumerates accessibility event types.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export enum AccessibilityEventType {
  //EventType
  /**
   * Event of gaining an accessibility focus.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ACCESSIBILITY_FOCUS = 0,

  /**
   * Event of clearing an accessibility focus.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ACCESSIBILITY_FOCUS_CLEAR = 1,

  /**
   * Event of clicking a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_CLICK = 2,

  /**
   * Event of long pressing a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_LONG_CLICK = 3,

  /**
   * Event of selecting a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SELECT = 4,

  /**
   * Event indicating the mouse pointer enters a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_HOVER_ENTER = 5,

  /**
   * Event indicating the mouse pointer exits a component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_HOVER_EXIT = 6,

  /**
   * Event indicating the component gains a focus.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOCUS = 7,

  /**
   * Event indicating the component text has been updated.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TEXT_UPDATE = 8,

  /**
   * Event indicating the selected text has been updated.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TEXT_SELECTION_UPDATE = 9,

  /**
   * Event of scrolling the view.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SCROLL = 10,

  /**
   * Event of auto-focusing.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_REQUEST_FOCUS_FOR_ACCESSIBILITY = 11,

  /**
   * Event of auto-broadcasting.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ANNOUNCE_FOR_ACCESSIBILITY = 12,

  /**
   * Event of auto-focusing without interruption.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_REQUEST_FOCUS_FOR_ACCESSIBILITY_NOT_INTERRUPT = 13,

  /**
   * Event of auto-broadcasting without interruption.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ANNOUNCE_FOR_ACCESSIBILITY_NOT_INTERRUPT = 14,

  /**
   * Event indicating the component information changes.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_ELEMENT_INFO_CHANGE = 15,

  /**
   * Event indicating an item is scrolled out of the screen.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SCROLLING = 16,

  // WindowUpdateType
  /**
   * Event of adding windows.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_ADD = 17,

  /**
   * Event of deleting windows.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_REMOVE = 18,

  /**
   * Event indicating the window boundary changes.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_BOUNDS = 19,

  /**
   * Event indicating the window activity state changes.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_ACTIVE = 20,

  /**
   * Event indicating the window focus changes.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_FOCUS = 21,

  /**
   * Event indicating the window properties change, such as opacity, size, and so on.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_PROPERTY = 22,

  /**
   * Event indicating the window layer changes.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_WINDOW_LAYER = 23,

  //TouchGuideType
  /**
   * Event indicating a touch begins.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TOUCH_BEGIN = 24,

  /**
   * Event indicating a touch ends.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TOUCH_END = 25,

  //PageUpdateType
  /**
   * Event indicating the page content is updated.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_CONTENT_UPDATE = 26,

  /**
   * Event indicating the page state is updated.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_STATE_UPDATE = 27,

  /**
   * Event of opening a page.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_OPEN = 28,

  /**
   * Event of closing a page.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_CLOSE = 29,

  //GestureType
  /**
   * Event indicating the swipe-left gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_LEFT = 30,

  /**
   * Event indicating the swipe-left-then-right gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_LEFT_THEN_RIGHT = 31,

  /**
   * Event indicating the swipe-left-then-up gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_LEFT_THEN_UP = 32,

  /**
   * Event indicating the swipe-left-then-down gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_LEFT_THEN_DOWN = 33,

  /**
   * Event indicating the swipe-right gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_RIGHT = 34,

  /**
   * Event indicating the swipe-right-then-left gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_RIGHT_THEN_LEFT = 35,

  /**
   * Event indicating the swipe-right-then-up gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_RIGHT_THEN_UP = 36,

  /**
   * Event indicating the swipe-right-then-down gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_RIGHT_THEN_DOWN = 37,

  /**
   * Event indicating the swipe-up gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_UP = 38,

  /**
   * Event indicating the swipe-up-then-left gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_UP_THEN_LEFT = 39,

  /**
   * Event indicating the swipe-up-then-right gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_UP_THEN_RIGHT = 40,

  /**
   * Event indicating the swipe-up-then-down gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_UP_THEN_DOWN = 41,

  /**
   * Event indicating the swipe-down gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_DOWN = 42,

  /**
   * Event indicating the swipe-down-then-left gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_DOWN_THEN_LEFT = 43,

  /**
   * Event indicating the swipe-down-then-right gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_DOWN_THEN_RIGHT = 44,

  /**
   * Event indicating the swipe-down-then-up gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_SWIPE_DOWN_THEN_UP = 45,

  /**
   * Event indicating the two-finger single-tap gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_SINGLE_TAP = 46,

  /**
   * Event indicating the two-finger double-tap gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_DOUBLE_TAP = 47,

  /**
   * Event indicating the two-finger double-tap-and-hold gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_DOUBLE_TAP_AND_HOLD = 48,

  /**
   * Event indicating the two-finger triple-tap gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_TRIPLE_TAP = 49,

  /**
   * Event indicating the two-finger triple-tap-and-hold gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_TWO_FINGER_TRIPLE_TAP_AND_HOLD = 50,

  /**
   * Event indicating the three-finger single-tap gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SINGLE_TAP = 51,

  /**
   * Event indicating the three-finger double-tap gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_DOUBLE_TAP = 52,

  /**
   * Event indicating the three-finger double-tap-and-hold gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_DOUBLE_TAP_AND_HOLD = 53,

  /**
   * Event indicating the three-finger triple-tap gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_TRIPLE_TAP = 54,

  /**
   * Event indicating the three-finger triple-tap-and-hold gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_TRIPLE_TAP_AND_HOLD = 55,

  /**
   * Event indicating the four-finger single-tap gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SINGLE_TAP = 56,

  /**
   * Event indicating the four-finger double-tap gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_DOUBLE_TAP = 57,

  /**
   * Event indicating the four-finger double-tap-and-hold gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_DOUBLE_TAP_AND_HOLD = 58,

  /**
   * Event indicating the four-finger triple-tap gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_TRIPLE_TAP = 59,

  /**
   * Event indicating the four-finger triple-tap-and-hold gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_TRIPLE_TAP_AND_HOLD = 60,

  /**
   * Event indicating the three-finger swipe-up gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SWIPE_UP = 61,

  /**
   * Event indicating the three-finger swipe-down gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SWIPE_DOWN = 62,

  /**
   * Event indicating the three-finger swipe-left gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SWIPE_LEFT = 63,

  /**
   * Event indicating the three-finger swipe-right gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_THREE_FINGER_SWIPE_RIGHT = 64,

  /**
   * Event indicating the four-finger swipe-up gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SWIPE_UP = 65,

  /**
   * Event indicating the four-finger swipe-down gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SWIPE_DOWN = 66,

  /**
   * Event indicating the four-finger swipe-left gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SWIPE_LEFT = 67,

  /**
   * Event indicating the four-finger swipe-right gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_FOUR_FINGER_SWIPE_RIGHT = 68,

  /**
   * Event indicating the page is active.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  TYPE_PAGE_ACTIVE = 69,

  /**
   * Event indicating the notification is active.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  TYPE_NOTIFICATION_UPDATE = 70,

  /**
   * accessibility focus element is invisible type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  TYPE_FOCUS_INVISIBLE = 71,

  /**
   * one finger double tap type
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  TYPE_ONE_FINGER_DOUBLE_TAP = 72
}

/**
 * Accessibility
 * 
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @crossplatform [since 20]
 * @form [since 23]
 * @atomicservice [since 11]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace accessibility {
  /**
   * Enumerates the types of accessibility applications.
   *
   * @unionmember { 'audible' } The accessibility application provides audible feedback.
   * @unionmember { 'generic' } The accessibility application provides generic feedback.
   * @unionmember { 'haptic' } The accessibility application provides haptic feedback.
   * @unionmember { 'spoken' } The accessibility application provides spoken feedback.
   * @unionmember { 'visual' } The accessibility application provides visual feedback.
   * @unionmember { 'all' } All the preceding types. [since 9]
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type AbilityType = 'audible' | 'generic' | 'haptic' | 'spoken' | 'visual' | 'all';

  /**
   * Target actions supported by the application. The target actions for which parameters need to be set have been 
   * specified in the description of the following table.
   *
   * @unionmember { 'accessibilityFocus' } Obtain an accessibility focus.
   * @unionmember { 'clearAccessibilityFocus' } Clear an accessibility focus.
   * @unionmember { 'focus' } Obtain a focus.
   * @unionmember { 'clearFocus' } Clear a focus.
   * @unionmember { 'clearSelection' } Clear selection. Not supported yet.
   * @unionmember { 'click' } Click.
   * @unionmember { 'longClick' } Long press.
   * @unionmember { 'cut' } Cut.
   * @unionmember { 'copy' } Copy.
   * @unionmember { 'paste' } Paste.
   * @unionmember { 'select' } Select.
   * @unionmember { 'setText' } Set text. You need to set the **setText** parameter.
   * @unionmember { 'delete' } Delete. Not supported yet.
   * @unionmember { 'scrollForward' } Scroll forward.
   * @unionmember { 'scrollBackward' } Scroll backward.
   * @unionmember { 'setSelection' } Select. You need to set the **selectTextBegin**, **selectTextEnd** and
   *     **selectTextInForWard** parameters.
   * @unionmember { 'setCursorPosition' } Set cursor location. You need to set the **offset** parameter. [since 12]
   * @unionmember { 'home' } Return to the home screen. [since 12]
   * @unionmember { 'back' } Return to the previous screen. [since 12]
   * @unionmember { 'recentTask' } Open a recent task. [since 12]
   * @unionmember { 'notificationCenter' } Open the notification bar. [since 12]
   * @unionmember { 'controlCenter' } Open the control center. [since 12]
   * @unionmember { 'common' } Common actions used in auto-focusing and auto-broadcasting. [since 12]
   * @unionmember { 'injectAction' } Injection action. The **injectActionType** parameter must be set. [since 26.0.0]
   * @unionmember {'executeCustomAction'} [since 26.0.0]
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type Action = 'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' |
  'click' | 'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' |
  'scrollForward' | 'scrollBackward' | 'setSelection' | 'setCursorPosition' | 'home' |
  'back' | 'recentTask' | 'notificationCenter' | 'controlCenter' | 'common' | 'injectAction' | 'executeCustomAction';

  /**
   * Accessibility event types.
   *
   * @unionmember { 'accessibilityFocus' } Event indicating that the accessibility focus is obtained.
   * @unionmember { 'accessibilityFocusClear' } Event indicating that the accessibility focus is cleared.
   * @unionmember { 'click' } Event of clicking a component.
   * @unionmember { 'longClick' } Event indicating that the component is long pressed.
   * @unionmember { 'focus' } Event indicating that the component obtains the focus. Not supported currently.
   * @unionmember { 'select' } Event of selecting a component.
   * @unionmember { 'hoverEnter' } Event indicating that the hover enters a component.
   * @unionmember { 'hoverExit' } Event indicating that the hover exits a component.
   * @unionmember { 'textUpdate' } Event indicating that the component text has been updated.
   * @unionmember { 'textSelectionUpdate' } Event indicating that the selected text has been updated. Not supported
   *     currently.
   * @unionmember { 'scroll' } Event of the scroll view.
   * @unionmember { 'requestFocusForAccessibility' } Event of the auto-focusing. [since 12]
   * @unionmember { 'announceForAccessibility' } Event of the auto-broadcasting. [since 12]
   * @unionmember { 'requestFocusForAccessibilityNotInterrupt' } Event of the auto-focusing without
   *     interruption. [since 18]
   * @unionmember { 'announceForAccessibilityNotInterrupt' } Event of the auto-broadcasting without
   *     interruption. [since 18]
   * @unionmember { 'scrolling' } Event indicating that an item is scrolled out of the screen in the scrolling
   *     view. [since 18]
   * @unionmember { 'pageActive' } Event indicating that a page changes. The value is fixed at **'pageActive'**
   *     . [since 23]
   * @unionmember { 'notificationUpdate' } Event indicating that a notification changes. The value is fixed at
   *     **'notificationUpdate'**. [since 26.0.0]
   * @unionmember {'focusInvisible'} [since 26.0.0]
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type EventType = 'accessibilityFocus' | 'accessibilityFocusClear' |
  'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
  'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
  'announceForAccessibility' | 'requestFocusForAccessibilityNotInterrupt' | 
  'announceForAccessibilityNotInterrupt' | 'scrolling' | 'pageActive' | 'notificationUpdate' | 'focusInvisible';

  /**
   * Window update type.
   *
   * @unionmember { 'add' } Window adding.
   * @unionmember { 'remove' } Window deletion.
   * @unionmember { 'bounds' } Window boundary change.
   * @unionmember { 'active' } Window activity change.
   * @unionmember { 'focus' } Window focus change.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type WindowUpdateType = 'add' | 'remove' | 'bounds' | 'active' | 'focus';

  /**
   * Enumerates the states of an accessibility application.
   *
   * @unionmember { 'enable' } The accessibility application is enabled.
   * @unionmember { 'disable' } The accessibility application is disabled.
   * @unionmember { 'install' } The accessibility application has been installed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type AbilityState = 'enable' | 'disable' | 'install';

  /**
   * Enumerates the capabilities of an accessibility application.
   *
   * @unionmember { 'retrieve' } Capability to retrieve the window content.
   * @unionmember { 'touchGuide' } Capability of touch guide mode.
   * @unionmember { 'keyEventObserver' } Capability to filter key events.
   * @unionmember { 'zoom' } Capability to control the display zoom level. Not supported currently.
   * @unionmember { 'gesture' } Capability to perform gesture actions.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type Capability = 'retrieve' | 'touchGuide' | 'keyEventObserver' | 'zoom' | 'gesture';

  /**
   * Enumerates the movement units for traversing the node text.
   *
   * @unionmember { 'char' } The movement unit for traversing the node text is by character.
   * @unionmember { 'word' } The movement unit for traversing the node text is by word.
   * @unionmember { 'line' } The movement unit for traversing the node text is by line.
   * @unionmember { 'page' } The movement unit for traversing the node text is by page.
   * @unionmember { 'paragraph' } The movement unit for traversing the node text is by paragraph.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  type TextMoveUnit = 'char' | 'word' | 'line' | 'page' | 'paragraph';

  /**
   * Checks whether an accessibility application is enabled. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. Returns **true** if the
   *     accessibility application is enabled; returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead accessibility.isOpenAccessibilitySync
   */
  function isOpenAccessibility(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether an accessibility application is enabled. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. Returns **true** if the accessibility application
   *     is enabled; returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead accessibility.isOpenAccessibilitySync
   */
  function isOpenAccessibility(): Promise<boolean>;

  /**
   * Checks whether any accessibility application has been enabled in the system. To obtain information about 
   * accessibility applications in the system, use 
   * [accessibility.getAccessibilityExtensionListSync]{@link accessibility.getAccessibilityExtensionListSync}.
   *
   * @returns { boolean } Whether any accessibility application has been enabled in the system. Returns **true** if one
   *     or more accessibility applications are enabled; returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 20]
   * @form [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function isOpenAccessibilitySync(): boolean;

  /**
   * Checks whether touch guide mode is enabled. This API uses an asynchronous callback to return the result.
   *
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. Returns **true** if touch guide
   *     mode is enabled; returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead accessibility.isOpenTouchGuideSync
   */
  function isOpenTouchGuide(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether touch guide mode is enabled. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. Returns **true** if touch guide mode is enabled;
   *     returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead accessibility.isOpenTouchGuideSync
   */
  function isOpenTouchGuide(): Promise<boolean>;

  /**
   * Checks whether touch guide mode is enabled.
   *
   * @returns { boolean } Whether touch guide mode is enabled. Returns **true** if touch guide mode is enabled; returns
   *     **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 11]
   * @since 10 dynamic
   * @since 23 static
   */
  function isOpenTouchGuideSync(): boolean;

  /**
   * Checks whether screen reader mode is enabled.
   *
   * @returns { boolean } Whether the screen reader is enabled. Returns **true** if the screen reader is enabled;
   *     returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 18 dynamic
   * @since 23 static
   */
  function isScreenReaderOpenSync(): boolean;

  /**
   * Obtains the accessibility application list. This API uses an asynchronous callback to return the result.
   *
   * @param { AbilityType } abilityType - Accessibility application type.
   * @param { AbilityState } stateType - Accessibility application status.
   * @param { AsyncCallback<Array<AccessibilityAbilityInfo>> } callback - Callback used to return the accessibility
   *     application list. If the operation is successful, **err** is **undefined** and **data** is the accessibility
   *     application list. Otherwise, it is an error object.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead accessibility.getAccessibilityExtensionList(abilityType: AbilityType, stateType: AbilityState, callback: AsyncCallback<Array<AccessibilityAbilityInfo>>)
   */
  function getAbilityLists(
    abilityType: AbilityType,
    stateType: AbilityState,
    callback: AsyncCallback<Array<AccessibilityAbilityInfo>>
  ): void;

  /**
   * Obtains the accessibility application list. This API uses a promise to return the result.
   *
   * @param { AbilityType } abilityType - Accessibility application type.
   * @param { AbilityState } stateType - Accessibility application status.
   * @returns { Promise<Array<AccessibilityAbilityInfo>> } Promise used to return the accessibility application list.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead accessibility.getAccessibilityExtensionList(abilityType: AbilityType, stateType: AbilityState)
   */
  function getAbilityLists(abilityType: AbilityType, stateType: AbilityState): Promise<Array<AccessibilityAbilityInfo>>;

  /**
   * Obtains the accessibility application list. This API uses a promise to return the result.
   *
   * @param { AbilityType } abilityType - Accessibility application type.
   * @param { AbilityState } stateType - Accessibility application status.
   * @returns { Promise<Array<AccessibilityAbilityInfo>> } Promise used to return the accessibility application list.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAccessibilityExtensionList(
    abilityType: AbilityType,
    stateType: AbilityState
  ): Promise<Array<AccessibilityAbilityInfo>>;

  /**
   * Obtains the accessibility application list. This API uses an asynchronous callback to return the result.
   *
   * @param { AbilityType } abilityType - Accessibility application type.
   * @param { AbilityState } stateType - Accessibility application status.
   * @param { AsyncCallback<Array<AccessibilityAbilityInfo>> } callback - Callback used to return the accessibility
   *     application list. If the operation is successful, **err** is **undefined** and **data** is the accessibility
   *     application list. Otherwise, it is an error object.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function getAccessibilityExtensionList(
    abilityType: AbilityType,
    stateType: AbilityState,
    callback: AsyncCallback<Array<AccessibilityAbilityInfo>>
  ): void;

  /**
   * Query the list of accessibility applications in the current system, which can be queried by criteria.
   *
   * @param { AbilityType } abilityType - Accessibility application type.
   * @param { AbilityState } stateType - Accessibility application status.
   * @returns { Array<AccessibilityAbilityInfo> } Promise used to return the accessibility application list.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 12 dynamic
   * @since 23 static
   */
  function getAccessibilityExtensionListSync(
    abilityType: AbilityType,
    stateType: AbilityState
  ): Array<AccessibilityAbilityInfo>;

  /**
   * Sends an accessibility event. This API uses an asynchronous callback to return the result.
   *
   * @param { EventInfo } event - Accessibility event.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation fails, **err** that
   *     contains data is returned.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead accessibility.sendAccessibilityEvent(event: EventInfo, callback: AsyncCallback<void>)
   */
  function sendEvent(event: EventInfo, callback: AsyncCallback<void>): void;

  /**
   * Sends an accessibility event. This API uses a promise to return the result.
   *
   * @param { EventInfo } event - Accessibility event.
   * @returns { Promise<void> } Promise that returns no value.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead accessibility.sendAccessibilityEvent(event: EventInfo)
   */
  function sendEvent(event: EventInfo): Promise<void>;

  /**
   * Sends an accessibility event. This API uses an asynchronous callback to return the result.
   *
   * @param { EventInfo } event - Accessibility event.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation fails, **err** that
   *     contains data is returned.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function sendAccessibilityEvent(event: EventInfo, callback: AsyncCallback<void>): void;

  /**
   * Sends an accessibility event. This API uses a promise to return the result.
   *
   * @param { EventInfo } event - Accessibility event.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 9 dynamic
   * @since 23 static
   */
  function sendAccessibilityEvent(event: EventInfo): Promise<void>;

  /**
   * Queries single- or double-touch mode.
   *
   * @returns { string } Touch mode.
   *     <br>- **singleTouchMode**: Single-touch mode.
   *     <br>- **doubleTouchMode**: Double-touch mode.
   *     <br>- **none**: Touch guide mode is disabled.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 20 dynamic
   * @since 23 static
   */
  function getTouchModeSync(): string;

  /**
   * Subscribes to the state changes of the accessibility application. This API uses an asynchronous callback to return 
   * the result. To obtain information about accessibility applications in the system, use 
   * [accessibility.getAccessibilityExtensionListSync]{@link accessibility.getAccessibilityExtensionListSync}.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, you must use 
   * > [accessibility.off('accessibilityStateChange')]{@link accessibility.off(type: 'accessibilityStateChange', callback?: Callback<boolean>)}
   * > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.
   *
   * @param { 'accessibilityStateChange' } type - Event type, which is set to **'accessibilityStateChange'** in this
   *     API.
   * @param { Callback<boolean> } callback - Callback invoked when the enabled status of accessibility application
   *     changes. The returned result indicates the global enabled status of the accessibility application. The value
   *     **true** indicates that the accessibility application is enabled, and **false** indicates that the
   *     accessibility application is disabled.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 20]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   */
  function on(type: 'accessibilityStateChange', callback: Callback<boolean>): void;

  /**
   * Register the observe of the accessibility state changed.
   *
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onAccessibilityStateChange(callback: Callback<boolean>): void;

  /**
   * Subscribes to the state changes in touch guide mode. This API uses an asynchronous callback to return the result. 
   * To obtain information about accessibility applications in the system, use 
   * [accessibility.getAccessibilityExtensionListSync]{@link accessibility.getAccessibilityExtensionListSync}.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, you must use 
   * > [accessibility.off('touchGuideStateChange')]{@link accessibility.off(type: 'touchGuideStateChange', callback?: Callback<boolean>)}
   * > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.
   *
   * @param { 'touchGuideStateChange' } type - Event type, which is set to **'touchGuideStateChange'** in this API.
   * @param { Callback<boolean> } callback - Callback invoked when the enabling state of touch guide mode changes. The
   *     value **true** indicates that the touch guide mode is enabled, and the value **false** indicates that the touch
   *     guide mode is disabled.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   */
  function on(type: 'touchGuideStateChange', callback: Callback<boolean>): void;

  /**
   * Register the observe of the touchGuide state changed.
   *
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onTouchGuideStateChange(callback: Callback<boolean>): void;

  /**
   * Subscribes to the state changes of the screen reader. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, you must use 
   * > [accessibility.off('screenReaderStateChange')]{@link accessibility.off(type: 'screenReaderStateChange', callback?: Callback<boolean>)}
   * > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.
   *
   * @param { 'screenReaderStateChange' } type - Event type, which is set to **'screenReaderStateChange'** in this API.
   * @param { Callback<boolean> } callback - Callback invoked when the enabling state of screen reader changes. The
   *     value **true** indicates that the screen reader is enabled, and the value **false** indicates that the screen
   *     reader is disabled.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 18 dynamic
   */
  function on(type: 'screenReaderStateChange', callback: Callback<boolean>): void;

  /**
   * Register the observe of the screen reader state changed.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onScreenReaderStateChange(callback: Callback<boolean>): void;

  /**
   * Subscribes to the single- or double-touch event changes in touch guide mode. This API uses an asynchronous callback
   * to return the result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, you must use 
   * > [accessibility.off('touchModeChange')]{@link accessibility.off(type: 'touchModeChange', callback?: Callback<string>)}
   * > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.
   *
   * @param { 'touchModeChange' } type - Event type, which is set to **'touchModeChange'** in this API.
   * @param { Callback<string> } callback - Callback to be invoked when the single- or double-touch event changes.
   * @throws { BusinessError } 401 Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 20 dynamic
   */
  function on(type: 'touchModeChange', callback: Callback<string>): void;

  /**
   * Register the observe of the touch mode changed.
   * @param { Callback<string> } callback callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onTouchModeChange(callback: Callback<string>): void;

  /**
   * Unsubscribes from the state changes of the accessibility application. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { 'accessibilityStateChange' } type - Event type, which is set to **'accessibilityStateChange'** in this
   *     API.
   * @param { Callback<boolean> } callback - Callback used to unregister. It must be consistent with the callback used
   *     in
   *     [accessibility.on('accessibilityStateChange')]{@link accessibility.on(type: 'accessibilityStateChange', callback: Callback<boolean>)}
   *     . If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
   *     specified type. [since 7 - 19]
   * @param { Callback<boolean> } [callback] - Callback used to unregister. It must be consistent with the callback used
   *     in
   *     [accessibility.on('accessibilityStateChange')]{@link accessibility.on(type: 'accessibilityStateChange', callback: Callback<boolean>)}
   *     . If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
   *     specified type. [since 20]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 20]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   */
  function off(type: 'accessibilityStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the accessibility state changed.
   *
   * @param { Callback<boolean> } [callback] Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offAccessibilityStateChange(callback?: Callback<boolean>): void;

  /**
   * Unsubscribes from the state changes in touch guide mode. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { 'touchGuideStateChange' } type - Event type, which is set to **'touchGuideStateChange'** in this API.
   * @param { Callback<boolean> } [callback] - Callback used to unregister. It must be consistent with the callback used
   *     in
   *     [accessibility.on('touchGuideStateChange')]{@link accessibility.on(type: 'touchGuideStateChange', callback: Callback<boolean>)}
   *     . If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
   *     specified type.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   */
  function off(type: 'touchGuideStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the touchGuide state changed.
   *
   * @param { Callback<boolean> } [callback] Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offTouchGuideStateChange(callback?: Callback<boolean>): void;

  /**
   * Unsubscribes from the state changes of the screen reader. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { 'screenReaderStateChange' } type - Event type, which is set to **'screenReaderStateChange'** in this API.
   * @param { Callback<boolean> } [callback] - Callback used to unregister. It must be consistent with the callback used
   *     in
   *     [accessibility.on('screenReaderStateChange')]{@link accessibility.on(type: 'screenReaderStateChange', callback: Callback<boolean>)}
   *     . If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
   *     specified type.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 18 dynamic
   */
  function off(type: 'screenReaderStateChange', callback?: Callback<boolean>): void;

  /**
   * Unregister the observe of the screen reader state changed.
   * @param { Callback<boolean> } [callback] callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offScreenReaderStateChange(callback?: Callback<boolean>): void;

  /**
   * Unsubscribes from the single- or double-touch event changes in touch guide mode. This API uses an asynchronous 
   * callback to return the result.
   *
   * @param { 'touchModeChange' } type - Event type, which is set to **'touchModeChange'** in this API.
   * @param { Callback<string> } [callback] - Callback used to unregister. The value must be the same as the value of
   *     callback in
   *     [accessibility.on('touchModeChange')]{@link accessibility.on(type: 'touchModeChange', callback: Callback<string>)}
   *     . If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
   *     specified type.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified. 2.
   *     Incorrect parameter types. 3.Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 20 dynamic
   */
  function off(type: 'touchModeChange', callback?: Callback<string>): void;

  /**
   * Unregister the observe of the touch mode changed.
   * @param { Callback<string> } [callback] callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offTouchModeChange(callback?: Callback<string>): void;

  /**
   * Obtains a **CaptionsManager** instance.
   *
   * @returns { CaptionsManager } Captions configuration.
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @since 8 dynamiconly
   * @deprecated since 12
   */
  function getCaptionsManager(): CaptionsManager;

  /**
   * Subscribes to the state changes in animation reduction mode. This API uses an asynchronous callback to return the 
   * result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, you must use 
   * > [accessibility.offAnimationReduceStateChange]{@link accessibility.offAnimationReduceStateChange(callback?: Callback<boolean>)}
   * > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.
   *
   * @param { Callback<boolean> } callback - Callback function. Returns **true** if animation reduction mode is enabled;
   *     returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onAnimationReduceStateChange(callback: Callback<boolean>): void;

  /**
   * Unsubscribes from the state changes in animation reduction mode. This API uses an asynchronous callback to return 
   * the result.
   *
   * @param { Callback<boolean> } [callback] - Callback function. Cancels the event response of a specified callback
   *     object. The value must be the same as the value of callback in
   *     [accessibility.onAnimationReduceStateChange]{@link accessibility.onAnimationReduceStateChange(callback: Callback<boolean>)}
   *     . If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
   *     specified type.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offAnimationReduceStateChange(callback?: Callback<boolean>): void;

  /**
   * Checks whether animation reduction mode is enabled with a synchronous method.
   *
   * @returns { boolean } Whether animation reduction mode is enabled. Returns **true** if animation reduction mode is
   *     enabled; returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isAnimationReduceEnabledSync(): boolean;

  /**
   * Checks whether animation reduction mode is enabled. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. Returns **true** if animation reduction mode is
   *     enabled; returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isAnimationReduceEnabled(): Promise<boolean>;

  /**
   * Subscribes to the state changes in flash alerts mode. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, you must use 
   * > [accessibility.offFlashReminderStateChange]{@link accessibility.offFlashReminderStateChange(callback?: Callback<boolean>)}
   * > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.
   *
   * @param { Callback<boolean> } callback - Callback function. Returns **true** if flash alerts mode is enabled;
   *     returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onFlashReminderStateChange(callback: Callback<boolean>): void;

  /**
   * Unsubscribes from the state changes in flash alerts mode. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { Callback<boolean> } [callback] - Callback function. Cancels the event response of a specified callback
   *     object. The value must be the same as the value of callback in
   *     [accessibility.onFlashReminderStateChange]{@link accessibility.onFlashReminderStateChange(callback: Callback<boolean>)}
   *     . If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
   *     specified type.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offFlashReminderStateChange(callback?: Callback<boolean>): void;

  /**
   * Checks whether flash alerts mode is enabled with a synchronous method.
   *
   * @returns { boolean } Whether flash alerts mode is enabled. Returns **true** if flash alerts mode is enabled;
   *     returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isFlashReminderEnabledSync(): boolean;

  /**
   * Checks whether flash alerts mode is enabled. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. Returns **true** if flash alerts mode is enabled;
   *     returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isFlashReminderEnabled(): Promise<boolean>;

  /**
   * Subscribes to the state changes in mono audio mode. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, you must use 
   * > [accessibility.offAudioMonoStateChange]{@link accessibility.offAudioMonoStateChange(callback?: Callback<boolean>)}
   * > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.
   *
   * @param { Callback<boolean> } callback - Callback function. Returns **true** if mono audio mode is enabled; returns
   *     **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function onAudioMonoStateChange(callback: Callback<boolean>): void;

  /**
   * Unsubscribes from the state changes in mono audio mode. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { Callback<boolean> } [callback] - Callback function. Cancels the event response of a specified callback
   *     object. The value must be the same as the value of callback in
   *     [accessibility.onAudioMonoStateChange]{@link accessibility.onAudioMonoStateChange(callback: Callback<boolean>)}
   *     . If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
   *     specified type.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offAudioMonoStateChange(callback?: Callback<boolean>): void;

  /**
   * Checks whether mono audio mode is enabled with a synchronous mode.
   *
   * @returns { boolean } Whether mono audio mode is enabled. Returns **true** if mono audio mode is enabled; returns
   *     **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isAudioMonoEnabledSync(): boolean;

  /**
   * Checks whether mono audio mode is enabled. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. Returns **true** if mono audio mode is enabled;
   *     returns **false** otherwise.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function isAudioMonoEnabled(): Promise<boolean>;

  /**
   * Checks whether the senior mode is enabled. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the senior mode
   *     is enabled, and the value **false** indicates that the senior mode is disabled.
   * @throws { BusinessError } 9300000 - System abnormality.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isSeniorModeEnabled(): Promise<boolean>;

  /**
   * Listens for enabling status changes of the senior mode. This API uses an asynchronous callback to return the 
   * result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, you must use 
   * > [accessibility.offSeniorModeStateChange]{@link accessibility.offSeniorModeStateChange(callback?: Callback<boolean>)}
   * > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.
   *
   * @param { Callback<boolean> } callback - Callback function. The value **true** indicates that the senior mode is
   *     enabled, and the value **false** indicates that the senior mode is disabled.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSeniorModeStateChange(callback: Callback<boolean>): void;

  /**
   * Cancels listening for the senior mode change event. This API uses an asynchronous callback to return the result.
   *
   * @param { Callback<boolean> } [callback] - Callback function. The value **true** indicates that the senior mode is
   *     enabled, and the value **false** indicates that the senior mode is disabled. Cancels the event response of a
   *     specified callback object. It must be consistent with the callback used in
   *     [accessibility.onSeniorModeStateChange]{@link accessibility.onSeniorModeStateChange(callback: Callback<boolean>)}
   *     . If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
   *     specified type.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSeniorModeStateChange(callback?: Callback<boolean>): void;

  /**
   * Register an observer for this application's senior mode state changes.
   *
   * @param { Callback<boolean> } callback - Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSeniorModeStateChangeForSelf(callback: Callback<boolean>): void;

  /**
   * Unregister the observer for this application's senior mode state changes.
   *
   * @param { Callback<boolean> } [callback] - Asynchronous callback interface.
   *      <br>Default behavior: Unregister all callbacks for app senior mode state changes.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSeniorModeStateChangeForSelf(callback?: Callback<boolean>): void;

  /**
   * Check if this application's senior mode is enabled.
   *
   * @returns { Promise<boolean> } Returns {@code true} if senior mode is enabled; returns {@code false} otherwise.
   * @throws { BusinessError } 9300000 - System abnormality.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSeniorModeStateForSelf(): Promise<boolean>;

  /**
   * Set this application's senior mode.
   *
   * @param { boolean } state - Indicates whether to enable senior mode for this application.
   * @returns { Promise<void> } The promise returned by the function.
   * @throws { BusinessError } 9300000 - System abnormality.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setSeniorModeStateForSelf(state: boolean): Promise<void>;

  /**
   * Implements configuration management for captions. Before calling any API of **CaptionsManager**, you must use the 
   * [accessibility.getCaptionsManager()]{@link accessibility.getCaptionsManager} API to obtain a **CaptionsManager** 
   * instance.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 8 dynamic
   * @since 23 static
   */
  interface CaptionsManager {
    /**
     * Whether to enable captions configuration. The value **true** indicates that the caption configuration is enabled,
     * and **false** indicates the opposite.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    enabled: boolean;
    /**
     * Style of captions.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    style: CaptionsStyle;

    /**
     * Subscribes to the state changes of captions configuration. This API uses an asynchronous callback to return the 
     * result.
     * 
     * > **NOTE**
     * >
     * > - The callback parameter for registering a listener must use a named function instead of an anonymous function.
     * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
     * >
     * > - After calling this method, you must use 
     * > [off('enableChange')]{@link accessibility.CaptionsManager.off(type: 'enableChange', callback?: Callback<boolean>)}
     * > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.
     *
     * @param { 'enableChange' } type - Event type, which is set to **'enableChange'** in this API.
     * @param { Callback<boolean> } callback - Callback invoked when the enabled status of captions configuration
     *     changes. The value **true** indicates that the subtitle configuration is enabled, and the value **false**
     *     indicates that the subtitle configuration is disabled.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     * @deprecated since 12
     */
    on(type: 'enableChange', callback: Callback<boolean>): void;

    /**
     * Register the observe of the enable state.
     *
     * @param { Callback<boolean> } callback
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 23 static
     */
    onEnableChange(callback: Callback<boolean>): void;

    /**
     * Subscribes to captions style changes. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > - The callback parameter for registering a listener must use a named function instead of an anonymous function.
     * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
     * >
     * > - After calling this method, you must use 
     * > [off('styleChange')]{@link accessibility.CaptionsManager.off(type: 'styleChange', callback?: Callback<CaptionsStyle>)}
     * > to cancel the listener before the object's lifecycle ends. Otherwise, a crash may occur.
     *
     * @param { 'styleChange' } type - Event type, which is set to **'styleChange'** in this API.
     * @param { Callback<CaptionsStyle> } callback - Callback invoked when the style of captions changes.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     * @deprecated since 12
     */
    on(type: 'styleChange', callback: Callback<CaptionsStyle>): void;

    /**
     * Register the observer of the style.
     *
     * @param { Callback<CaptionsStyle> } callback
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 23 static
     */
    onStyleChange(callback: Callback<CaptionsStyle>): void;

    /**
     * Unsubscribes from the state changes of captions configuration. This API uses an asynchronous callback to return 
     * the result.
     *
     * @param { 'enableChange' } type - Event type, which is set to **'enableChange'** in this API.
     * @param { Callback<boolean> } [callback] - Callback used to unregister. It must be consistent with the callback
     *     used in
     *     [on('enableChange')]{@link accessibility.CaptionsManager.on(type: 'enableChange', callback: Callback<boolean>)}
     *     . If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     * @deprecated since 12
     */
    off(type: 'enableChange', callback?: Callback<boolean>): void;

    /**
     * Unregister the observe of the enable state.
     *
     * @param { Callback<boolean> } [callback]
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 23 static
     */
    offEnableChange(callback?: Callback<boolean>): void;

    /**
     * Unsubscribes from the captions style changes. This API uses an asynchronous callback to return the result.
     *
     * @param { 'styleChange' } type - Event type, which is set to **'styleChange'** in this API.
     * @param { Callback<CaptionsStyle> } [callback] - Callback used to unregister. It must be consistent with the
     *     callback used in
     *     [on('styleChange')]{@link accessibility.CaptionsManager.on(type: 'styleChange', callback: Callback<CaptionsStyle>)}
     *     . If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 8 dynamic
     * @deprecated since 12
     */
    off(type: 'styleChange', callback?: Callback<CaptionsStyle>): void;

    /**
     * Unregister the observer of the style.
     *
     * @param { Callback<CaptionsStyle> } [callback]
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @since 23 static
     */
    offStyleChange(callback?: Callback<CaptionsStyle>): void;
  }

  /**
   * Enumerates the font edge types of captions.
   *
   * @unionmember { 'none' } No effect.
   * @unionmember { 'raised' } Raised effect.
   * @unionmember { 'depressed' } Depressed effect.
   * @unionmember { 'uniform' } Uniform effect.
   * @unionmember { 'dropShadow' } Drop shadow effect.
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 8 dynamic
   * @since 23 static
   */
  type CaptionsFontEdgeType = 'none' | 'raised' | 'depressed' | 'uniform' | 'dropShadow';
  /**
   * Enumerates the font families of captions.
   *
   * @unionmember { 'default' } Default font family.
   * @unionmember { 'monospacedSerif' } Monospaced Serif fonts, which use the same width for each character.
   * @unionmember { 'serif' } Serif fonts.
   * @unionmember { 'monospacedSansSerif' } Monospaced Sans Serif fonts, which use the same width for each character.
   * @unionmember { 'sansSerif' } Sans Serif fonts.
   * @unionmember { 'casual' } Casual fonts.
   * @unionmember { 'cursive' } Cursive fonts.
   * @unionmember { 'smallCapitals' } Small caps fonts.
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 8 dynamic
   * @since 23 static
   */
  type CaptionsFontFamily = 'default' | 'monospacedSerif' | 'serif' |
     'monospacedSansSerif' | 'sansSerif' | 'casual' | 'cursive' | 'smallCapitals';
  /**
   * Describes the style of captions.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 8 dynamic
   * @since 23 static
   */
  interface CaptionsStyle {
    /**
     * Font family of captions.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    fontFamily: CaptionsFontFamily;
    /**
     * Font scale factor of captions, in percentage. The value ranges from 1 to 200.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    fontScale: int;
    /**
     * Font color of captions.
     * 
     * **number**: HEX format, used to represent colors defined in either the RGB or ARGB color models.
     * 
     * **string**: #rrggbb, #rrggbbaa, #rgb, or #rgba format.
     * 
     * Example: opaque red; number: 0xffff0000; string: '#ff0000', '#ff0000ff', '#f00', or '#f00f'
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    fontColor: int | string;
    /**
     * Font edge type of captions.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    fontEdgeType: CaptionsFontEdgeType;
    /**
     * Background color of captions.
     * 
     * **number**: HEX format, used to represent colors defined in either the RGB or ARGB color models.
     * 
     * **string**: #rrggbb, #rrggbbaa, #rgb, or #rgba format.
     * 
     * Example: opaque red; number: 0xffff0000; string: '#ff0000', '#ff0000ff', '#f00', or '#f00f'
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    backgroundColor: int | string;
    /**
     * Window color of captions.
     * 
     * **number**: HEX format, used to represent colors defined in either the RGB or ARGB color models.
     * 
     * **string**: #rrggbb, #rrggbbaa, #rgb, or #rgba format.
     * 
     * Example: opaque red; number: 0xffff0000; string: '#ff0000', '#ff0000ff', '#f00', or '#f00f'
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    windowColor: int | string;
  }

  /**
   * Provides information about an accessibility application.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  interface AccessibilityAbilityInfo {
    /**
     * Ability ID.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly id: string;

    /**
     * Ability name.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly name: string;

    /**
     * Bundle name.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly bundleName: string;

    /**
     * Name of the target bundle.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 9 dynamic
     * @since 23 static
     */
    readonly targetBundleNames: Array<string>;

    /**
     * Accessibility application type.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly abilityTypes: Array<AbilityType>;

    /**
     * Capabilities list of the accessibility application.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly capabilities: Array<Capability>;

    /**
     * Description of the accessibility application.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly description: string;

    /**
     * List of events that the accessibility application focuses on.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    readonly eventTypes: Array<EventType>;

    /**
     * Whether the auxiliary application is hidden in the list of installed extended services. The value **true** means 
     * the auxiliary application is hidden, and the value **false** means the opposite.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly needHide: boolean;

    /**
     * Name of the application in the extended service list.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     * @since 23 static
     */
    readonly label: string;
  }

  /**
   * Describes a GUI change event.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 7 dynamic
   * @since 23 static
   */
  class EventInfo {
    /**
     * Constructor, which is used to construct an EventInfo instance using a JSON object.
     *
     * @param { Object } jsonObject - JSON object that contains the **type**, **bundleName**, and **triggerAction**
     *     fields.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     */
    constructor(jsonObject: Object);

    /**
     * A constructor used to create a EventInfo object.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form
     * @atomicservice
     * @since 23 static
     */
    constructor();

    /**
     * Constructor, which is used to construct an EventInfo instance using independent parameters.
     *
     * @param { EventType } type - Accessibility event types.
     * @param { string } bundleName - Target application name.
     * @param { Action } triggerAction - Action that triggers the event.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 11 dynamic
     * @since 23 static
     */
    constructor(type: EventType, bundleName: string, triggerAction: Action);

    /**
     * Accessibility event type (mandatory).
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    type: EventType;

    /**
     * Window update type.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    windowUpdateType?: WindowUpdateType;

    /**
     * Name of the target application (mandatory).
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    bundleName: string;

    /**
     * It should correspond to the event source component type, and the default value is empty.
     * 
     * Example:
     * 
     * - Button type - > 'Button'
     * - Image type - > 'Image'
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    componentType?: string;

    /**
     * ID of the page where the event occurs. The default value is **0**.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    pageId ?: int;

    /**
     * Event description, which is set according to the actual scenario with no special restrictions, and the default 
     * value is empty.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    description?: string;

    /**
     * Action that triggers the event (mandatory).
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    triggerAction: Action;

    /**
     * Text moving granularity. The default value is char.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    textMoveUnit?: TextMoveUnit;

    /**
     * Content list, which is set according to the actual scenario with no special restrictions. The default value is 
     * empty.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    contents?: Array<string>;

    /**
     * Latest content, which is set according to the actual scenario with no special restrictions. The default value is 
     * empty.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    lastContent?: string;

    /**
     * Start index. The default value is **0**.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    beginIndex?: int;

    /**
     * Current index. The default value is **0**.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    currentIndex?: int;

    /**
     * End index. The default value is **0**.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    endIndex?: int;

    /**
     * Total number of items. The default value is **0**.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 7 dynamic
     * @since 23 static
     */
    itemCount?: int;

    /**
     * Element ID of the component. The default value is **0**.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     * @since 23 static
     */
    elementId?: int;

    /**
     * Content for auto-broadcasting. When the application needs to proactively broadcast, set the broadcast content 
     * according to the actual scenario with no special restrictions, and the default value is empty.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     * @since 23 static
     */
    textAnnouncedForAccessibility?: string;

    /**
     * Content for auto-broadcasting. The value is a string of the **Resource** type.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 18 dynamic
     * @since 23 static
     */
    textResourceAnnouncedForAccessibility?: Resource;

    /**
     * Component ID for active focusing, and the default value is empty.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @crossplatform [since 23]
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 12 dynamic
     * @since 23 static
     */
    customId?: string;
  }
}
export default accessibility;

/**
 * Enumerates the result codes returned by the focusable node query.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 23 dynamic&static
 */
export enum FocusMoveResultCode {
  /**
   * Query is not supported.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  NOT_SUPPORTED = -1,
  /**
   * The node is queried successfully.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_SUCCESS = 0,
  /**
   * The node is queried successfully. Use the **bypassSelfDescendants** parameter to quickly obtain the result in the 
   * next query.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_SUCCESS_NEXT_BYPASS_DESCENDANTS = 1,
  /**
   * Failed to query the node. The current page has no focusable node.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_FAILURE = 2,
  /**
   * Failed to query the node. The current container has no focusable node.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_FAILURE_IN_CHILD_TREE = 3,
  /**
   * Failed to query the node. The start node is not found.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_FAILURE_LOST_NODE = 4,
  /**
   * The returned node is not focusable. Continue to query from the returned node.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_NEXT = 5,
  /**
   * The returned node is not focusable. Continue to query from all descendants of the returned node.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  DOUBLE_CHECK_CHILD_PROPERTY = 6,
  /**
   * The returned node is not focusable. Continue to query from the last child node of the returned node.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  DOUBLE_CHECK_CHILD_PROPERTY_AND_GET_LAST = 7,
  /**
   * Failed to query the node in the scrollable component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  SEARCH_FAILURE_IN_SCROLL = 8
}

/**
 * Enumerates injection actions.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum InjectActionType {
  /**
   * Injects a click action.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  CLICK = 1,
  /**
   * Injects a double-click action.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  DOUBLE_CLICK = 2,
  /**
   * Injects a long-click action.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  LONG_CLICK = 3
}

/**
 * Enumeration of scenes of accessibility focus.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum AccessibilityFocusScene {
  /**
   * Hover to move the accessibility focus.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  HOVER_FOCUS = 1,
  /**
   * Swipe finger to move the accessibility focus.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  SWIPE_FOCUS = 2,
  /**
   * Move the accessibility focus after scrolling the component.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  SCROLL_FOCUS = 3
}

/**
 * Focus Rule Type Enumeration
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum FocusRuleType {
  /**
   * Default focus type.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  DEFAULT = 1,
  /**
   * Focus by link type, for example, an element that can be clicked to jump on the web page.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  FOCUS_BY_LINK = 2,
  /**
   * Focus by title type.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  FOCUS_BY_TITLE = 3
}

/**
 * Result Code Enumeration
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum OperateVirtualNodeResult {
  /**
   * Add, remove or update accessibility virtual node successfully.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  SUCCESS = 0,
  /**
   * The accessibility element does not exist.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  ACCESSIBILITY_ELEMENT_NOT_EXIST = 1,
  /**
   * Cannot modify root node.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  CANNOT_MODIFY_ROOT_NODE = 2,
  /**
   * Accessibility property is empty.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  ACCESSIBILITY_PROPERTY_IS_EMPTY = 3,
  /**
   * Allocate id failed.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  ALLOCATE_ID_FAILED = 4,
  /**
   * Virtual node parameter is empty.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  VIRTUAL_NODE_PARAMETER_IS_EMPTY = 5,
  /**
   * Internal error.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  INTERNAL_ERROR = 6,
  /**
   * Virtual node is not supported.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  VIRTUAL_NODE_NOT_SUPPORTED = 7
}

/**
 * Accessibility Element Source Type Enumeration
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum AccessibilitySourceType {
  /**
   * Default type.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  DEFAULT = 1,
  /**
   * Indicates that the accessibility element was added from a virtual node.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  ADDED_FROM_ACCESSIBILITY_VIRTUAL_NODE = 2,
  /**
   * Indicates that the accessibility element was updated from a virtual node.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  UPDATED_FROM_ACCESSIBILITY_VIRTUAL_NODE = 3
}