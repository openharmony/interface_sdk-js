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
 * This module provides accessibility features, including obtaining the accessibility application list, obtaining the 
 * accessibility application enabling state, obtaining the captions configuration, sending accessibility events, and 
 * listening for accessibility application state changes.
 *
 * @file Accessibility
 * @kit AccessibilityKit
 */

import type { AsyncCallback } from './@ohos.base';
import type { Callback } from './@ohos.base';
import { Resource } from './global/resource';

/**
 * Enumerates executable actions for accessibility node elements.
 * 
 * An accessibility node element refers to a component on the UI that can perform accessibility operations, such as a 
 * button or text input box.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 20 dynamic
 * @since 23 static
 */
export enum AccessibilityAction {
  /**
   * Gains accessibility focus. The [Parameter]{@link ./application/AccessibilityExtensionContext:Parameter}.
   * accessibilityFocusScene parameter must be configured, with the parameter value being the accessibility focus 
   * scenario type.
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
   * Long-presses a component.
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
   * Sets the text of a component. The [Parameter]{@link ./application/AccessibilityExtensionContext:Parameter}.setText 
   * parameter must be configured, with the parameter value being the text content to set.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SET_TEXT = 10,

  /**
   * Scrolls a component forward (toward the end of the content). The 
   * [Parameter]{@link ./application/AccessibilityExtensionContext:Parameter}.scrollType parameter must be configured, 
   * with the parameter value being 'fullScreen' or 'halfScreen'.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SCROLL_FORWARD = 11,

  /**
   * Scrolls a component backward (toward the beginning of the content). The 
   * [Parameter]{@link ./application/AccessibilityExtensionContext:Parameter}.scrollType parameter must be configured, 
   * with the parameter value being 'fullScreen' or 'halfScreen'.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SCROLL_BACKWARD = 12,

  /**
   * Selects a text range within a component. The 
   * [Parameter]{@link ./application/AccessibilityExtensionContext:Parameter}.selectTextBegin, 
   * [Parameter]{@link ./application/AccessibilityExtensionContext:Parameter}.selectTextEnd, and 
   * [Parameter]{@link ./application/AccessibilityExtensionContext:Parameter}.selectTextInForWard parameters must be 
   * configured, with the parameter values being the start coordinate, end coordinate of the selected text, and whether 
   * to select forward.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SET_SELECTION = 13,

  /**
   * Sets the cursor position within a component. The 
   * [Parameter]{@link ./application/AccessibilityExtensionContext:Parameter}.offset parameter must be configured, with 
   * the parameter value being the character offset of the cursor.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SET_CURSOR_POSITION = 14,

  /**
   * Performs the operation of returning to the home screen.
   * 
   * **Usage constraint:** This operation takes effect only on the main screen in multi-screen scenarios.
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
   * Displays recent tasks.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  RECENT_TASK = 17,

  /**
   * Displays the notification center.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  NOTIFICATION_CENTER = 18,

  /**
   * Displays the control center.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  CONTROL_CENTER = 19,

  /**
   * Performs a click operation on partial text. The 
   * [Parameter]{@link ./application/AccessibilityExtensionContext:Parameter}.spanId parameter must be configured, with 
   * the parameter value being the hyperlink text ID.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  SPAN_CLICK = 20,

  /**
   * Injects an action that simulates a user operation. The 
   * [Parameter]{@link ./application/AccessibilityExtensionContext:Parameter}.injectActionType parameter must be 
   * configured, with the parameter value being the injection action type.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  INJECT_ACTION = 21,

  /**
   * Executes a custom action. The [Parameter]{@link ./application/AccessibilityExtensionContext:Parameter}.customAction
   * parameter must be configured, with the parameter value being the name of the custom action.
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
   * Long press component.
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
   * Active focus, and the focus request will not be interrupted.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_REQUEST_FOCUS_FOR_ACCESSIBILITY_NOT_INTERRUPT = 13,

  /**
   * Active announcement, and the announcement will not be interrupted.
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
   * Window active state changed.
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

  /**
   * Page content updated.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  TYPE_PAGE_CONTENT_UPDATE = 26,

  /**
   * Page state updated.
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

  /**
   * Swipe left gesture.
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
   * Swipe right gesture.
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
   * Swipe up gesture.
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
   * Swipe down gesture.
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
   * Page active state changed.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  TYPE_PAGE_ACTIVE = 69,

  /**
   * Notification content or state updated.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  TYPE_NOTIFICATION_UPDATE = 70,

  /**
   * Focus becomes invisible.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  TYPE_FOCUS_INVISIBLE = 71,

  /**
   * Single-finger double tap gesture.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  TYPE_ONE_FINGER_DOUBLE_TAP = 72,

  /**
   * Touch browsing gesture event.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  TYPE_TOUCH_GUIDE_GESTURE = 73
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
   * Target actions supported by the app. Target actions that require configuration parameters are indicated in the 
   * description column of each action in the table below.
   *
   * @unionmember { 'accessibilityFocus' } Obtain accessibility focus. The parameter **accessibilityFocusScene** must be
   *     configured, with the value being the type of the accessibility focus scene.
   * @unionmember { 'clearAccessibilityFocus' } Clear accessibility focus.
   * @unionmember { 'focus' } Obtain focus.
   * @unionmember { 'clearFocus' } Clear focus.
   * @unionmember { 'clearSelection' } Clear selection. This feature is not supported in the current version.
   * @unionmember { 'click' } Click.
   * @unionmember { 'longClick' } Long press.
   * @unionmember { 'cut' } Cut.
   * @unionmember { 'copy' } Copy.
   * @unionmember { 'paste' } Paste.
   * @unionmember { 'select' } Select.
   * @unionmember { 'setText' } Set text. The parameter **setText** must be configured, with the value being the text
   *     content to set.
   * @unionmember { 'delete' } Delete. This feature is not supported in the current version.
   * @unionmember { 'scrollForward' } Scroll forward. The parameter **scrollType** must be configured, with the value
   *     **'fullScreen'** or **'halfScreen'**.
   * @unionmember { 'scrollBackward' } Scroll backward. The parameter **scrollType** must be configured, with the value
   *     **'fullScreen'** or **'halfScreen'**.
   * @unionmember { 'setSelection' } Set the text selection range. The parameters **selectTextBegin**,
   *     **selectTextEnd**, and **selectTextInForWard** must be configured, with the values being the start coordinate,
   *     end coordinate, and whether to select forward.
   * @unionmember { 'setCursorPosition' } Set the cursor position. The parameter **offset** must be configured, with the
   *     value being the character offset of the cursor. [since 12]
   * @unionmember { 'home' } Return to the home screen. [since 12]
   * @unionmember { 'back' } Return to the previous level. [since 12]
   * @unionmember { 'recentTask' } Open recent tasks. [since 12]
   * @unionmember { 'notificationCenter' } Open the notification panel. [since 12]
   * @unionmember { 'controlCenter' } Open the control center. [since 12]
   * @unionmember { 'common' } No specific action, used for scenarios such as active focus and active
   *     announcement. [since 12]
   * @unionmember { 'injectAction' } Inject an action. The parameter **injectActionType** must be configured, with the
   *     value being the type of the injected action. [since 26.0.0]
   * @unionmember { 'executeCustomAction' } Execute a custom action. The parameter **customAction** must be configured,
   *     with the value being the name of the custom action. [since 26.0.0]
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
   * @unionmember { 'click' } Event indicating that a component is clicked.
   * @unionmember { 'longClick' } Event indicating that a component is long-pressed.
   * @unionmember { 'focus' } Event indicating that a component obtains focus. This feature is not supported in the
   *     current version.
   * @unionmember { 'select' } Event indicating that a component is selected.
   * @unionmember { 'hoverEnter' } Event indicating that the pointer hovers over a component.
   * @unionmember { 'hoverExit' } Event indicating that the pointer leaves a component.
   * @unionmember { 'textUpdate' } Event indicating that the component text has changed.
   * @unionmember { 'textSelectionUpdate' } Event indicating that the selected text has changed. This feature is not
   *     supported in the current version.
   * @unionmember { 'scroll' } Event indicating a scroll view event.
   * @unionmember { 'requestFocusForAccessibility' } Event indicating active focus. [since 12]
   * @unionmember { 'announceForAccessibility' } Event indicating active announcement. [since 12]
   * @unionmember { 'requestFocusForAccessibilityNotInterrupt' } Event indicating active focus without
   *     interruption. [since 18]
   * @unionmember { 'announceForAccessibilityNotInterrupt' } Event indicating active announcement without
   *     interruption. [since 18]
   * @unionmember { 'scrolling' } Event indicating that an item in the scroll view is scrolled off the screen. [since 18]
   * @unionmember { 'pageActive' } Event indicating a page change. The value is fixed as the string
   *     **'pageActive'**. [since 23]
   * @unionmember { 'notificationUpdate' } Event indicating a notification change. The value is fixed as the string
   *     **'notificationUpdate'**. [since 26.0.0]
   * @unionmember { 'focusInvisible' } Event indicating that the focus becomes invisible. The value is fixed as the
   *     string **'focusInvisible'**. [since 26.0.0]
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
   * @unionmember { 'disable' } The accessibility app is disabled.
   * @unionmember { 'install' } The accessibility app is installed.
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
   * @unionmember { 'touchGuide' } Capability of the touch guide mode.
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
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates the
   *     accessibility app is enabled, and **false** indicates the accessibility app is not enabled.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead accessibility.isOpenAccessibilitySync
   */
  function isOpenAccessibility(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether an accessibility application is enabled. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates the accessibility app
   *     is enabled, and **false** indicates the accessibility app is disabled.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead accessibility.isOpenAccessibilitySync
   */
  function isOpenAccessibility(): Promise<boolean>;

  /**
   * Checks whether any accessibility application has been enabled in the system.
   * 
   * To obtain information about accessibility applications in the system, you are advised to use 
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
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. The value **true** indicates that
   *     the touch browsing mode is enabled, and **false** indicates the opposite.
   * @syscap SystemCapability.BarrierFree.Accessibility.Vision
   * @since 7 dynamiconly
   * @deprecated since 10
   * @useinstead accessibility.isOpenTouchGuideSync
   */
  function isOpenTouchGuide(callback: AsyncCallback<boolean>): void;

  /**
   * Checks whether touch guide mode is enabled. This API uses a promise to return the result.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the touch
   *     browsing mode is enabled, and **false** indicates that the touch browsing mode is not enabled.
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
   * @param { AsyncCallback<Array<AccessibilityAbilityInfo>> } callback - Callback used to return the result. If the
   *     list of accessibility applications is obtained successfully, **err** is **undefined** and **data** is the list
   *     of accessibility application information; otherwise, **err** is an error object.
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
   * @param { AsyncCallback<Array<AccessibilityAbilityInfo>> } callback - Callback used to return the result. If the
   *     query of the accessibility app list is successful, **err** is **undefined** and **data** is the accessibility
   *     app information list; otherwise, the value is an error object.
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
   * This API is the synchronous version of 
   * [accessibility.getAccessibilityExtensionList]{@link accessibility.getAccessibilityExtensionList} (asynchronous 
   * version). They have the same functionality. Use this API if you need to obtain the result immediately. Use the 
   * asynchronous version if you need to query in non-blocking scenarios.
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
   * Sends an accessibility event. The event will be distributed to registered accessibility extension applications that
   * match the event type for response. This API uses an asynchronous callback to return the result.
   *
   * @param { EventInfo } event - Accessibility event object.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the accessibility event is sent
   *     successfully, err is undefined; otherwise, err is an error object.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead accessibility.sendAccessibilityEvent(event: EventInfo, callback: AsyncCallback<void>)
   */
  function sendEvent(event: EventInfo, callback: AsyncCallback<void>): void;

  /**
   * Sends an accessibility event. The event will be distributed to registered accessibility extension applications that
   * match the event type for response. This API uses a promise to return the result.
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
   * Sends an accessibility event. The event will be distributed to registered accessibility applications that match the
   * event type for response. This API uses an asynchronous callback to return the result.
   *
   * @param { EventInfo } event - Accessibility event object.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the accessibility event is sent
   *     successfully, err is undefined; otherwise, err is an error object.
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
   * Sends an accessibility event. The event will be distributed to registered accessibility extension applications that
   * match the event type for response. This API uses a promise to return the result.
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
   * Obtains the single-tap/double-tap operation mode in touch guide mode. This can be used to adjust the app's 
   * interaction response mode based on the current operation mode (for example, responding directly to taps in single-
   * tap mode, or requiring double-tap confirmation in double-tap mode).
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
   * the result.
   * 
   * To obtain information about accessibility applications in the system, you are advised to use 
   * [accessibility.getAccessibilityExtensionListSync]{@link accessibility.getAccessibilityExtensionListSync}.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, ensure that 
   * > [accessibility.off('accessibilityStateChange')]{@link accessibility.off(type: 'accessibilityStateChange', callback?: Callback<boolean>)} 
   * > is used to unsubscribe before the component instance is destroyed (for example, in the **aboutToDisappear**
   * > lifecycle callback). Otherwise, a crash may occur.
   *
   * @param { 'accessibilityStateChange' } type - Event type, which is set to **'accessibilityStateChange'** in this
   *     API.
   * @param { Callback<boolean> } callback - Callback used to return the result. When the accessibility app enabled
   *     state changes, the state is notified through this callback. This state is the global accessibility app enabled
   *     state. The value **true** indicates that the accessibility app is enabled, and **false** indicates that the
   *     accessibility app is disabled.
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
   * Subscribes to the state changes of touch guide mode. This API uses an asynchronous callback to return the result.
   * 
   * To obtain information about accessibility applications in the system, you are advised to use 
   * [accessibility.getAccessibilityExtensionListSync]{@link accessibility.getAccessibilityExtensionListSync}.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, ensure that 
   * > [accessibility.off('touchGuideStateChange')]{@link accessibility.off(type: 'touchGuideStateChange', callback?: Callback<boolean>)}
   * > is used to unsubscribe before the component instance is destroyed (for example, in the **aboutToDisappear**
   * > lifecycle callback). Otherwise, a crash may occur.
   *
   * @param { 'touchGuideStateChange' } type - Event type, which is set to **'touchGuideStateChange'** in this API.
   * @param { Callback<boolean> } callback - Callback invoked when the touch browsing enabled state changes. The value
   *     **true** indicates that the touch browsing feature is enabled, and **false** indicates that the touch browsing
   *     feature is disabled.
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
   * Subscribes to the state changes of screen reader mode. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, ensure that 
   * > [accessibility.off('screenReaderStateChange')]{@link accessibility.off(type: 'screenReaderStateChange', callback?: Callback<boolean>)}
   * > is used to unsubscribe before the component instance is destroyed (for example, in the **aboutToDisappear**
   * > lifecycle callback). Otherwise, a crash may occur.
   *
   * @param { 'screenReaderStateChange' } type - Event type, which is set to **'screenReaderStateChange'** in this API.
   * @param { Callback<boolean> } callback - Callback used to return the result. The value **true** indicates that the
   *     screen reader function is enabled, and **false** indicates that the screen reader function is disabled.
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
   *
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function onScreenReaderStateChange(callback: Callback<boolean>): void;

  /**
   * Subscribes to the single-tap/double-tap operation mode change event in touch guide mode. This API uses an 
   * asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, ensure that 
   * > [accessibility.off('touchModeChange')]{@link accessibility.off(type: 'touchModeChange', callback?: Callback<string>)}
   * > is used to unsubscribe before the component instance is destroyed (for example, in the **aboutToDisappear**
   * > lifecycle callback). Otherwise, a crash may occur.
   *
   * @param { 'touchModeChange' } type - Event type, which is set to **'touchModeChange'** in this API.
   * @param { Callback<string> } callback - Callback invoked when the single-tap/double-tap operation mode changes in
   *     touch browsing mode. The value 'singleTouchMode' indicates single-tap operation mode, 'doubleTouchMode'
   *     indicates double-tap operation mode, and 'none' indicates that touch browsing is not enabled.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform [since 23]
   * @form [since 23]
   * @atomicservice [since 23]
   * @since 20 dynamic
   */
  function on(type: 'touchModeChange', callback: Callback<string>): void;

  /**
   * Register the observe of the touch mode changed.
   *
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
   * Unsubscribes from the state changes of touch guide mode. This API uses an asynchronous callback to return the 
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
   * Unsubscribes from the state changes of screen reader mode. This API uses an asynchronous callback to return the 
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
   *
   * @param { Callback<boolean> } [callback] callback Asynchronous callback interface.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @crossplatform
   * @form
   * @atomicservice
   * @since 23 static
   */
  function offScreenReaderStateChange(callback?: Callback<boolean>): void;

  /**
   * Unsubscribes from the single-tap/double-tap operation mode change event in touch guide mode. This API uses an 
   * asynchronous callback to return the result.
   *
   * @param { 'touchModeChange' } type - Event type, which is set to **'touchModeChange'** in this API.
   * @param { Callback<string> } [callback] - Callback used to unregister. The value must be the same as the value of
   *     callback in
   *     [accessibility.on('touchModeChange')]{@link accessibility.on(type: 'touchModeChange', callback: Callback<string>)}
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
   * @since 20 dynamic
   */
  function off(type: 'touchModeChange', callback?: Callback<string>): void;

  /**
   * Unregister the observe of the touch mode changed.
   *
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
   * Subscribes to the state changes of animation reduction mode. This API uses an asynchronous callback to return the 
   * result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, ensure that 
   * > [accessibility.offAnimationReduceStateChange]{@link accessibility.offAnimationReduceStateChange} is used to
   * > unsubscribe before the component instance is destroyed (for example, in the **aboutToDisappear** lifecycle 
   * > callback). Otherwise, a crash may occur.
   *
   * @param { Callback<boolean> } callback - Callback invoked when the reduced motion mode status changes. The value
   *     **true** indicates that the reduced motion mode is enabled, and **false** indicates that the reduced motion
   *     mode is disabled.
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
   *     [accessibility.onAnimationReduceStateChange]{@link accessibility.onAnimationReduceStateChange}. If this
   *     parameter is not specified, listening will be disabled for all callbacks corresponding to the specified type.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offAnimationReduceStateChange(callback?: Callback<boolean>): void;

  /**
   * Checks whether animation reduction mode is enabled.
   * 
   * This API is the synchronous version of 
   * [accessibility.isAnimationReduceEnabled]{@link accessibility.isAnimationReduceEnabled} (asynchronous version). They
   * have the same functionality. Use this API if you need to obtain the result immediately. Use the asynchronous 
   * version if you need to query in non-blocking scenarios.
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
   * Subscribes to the state changes of flash alerts mode. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, ensure that 
   * > [accessibility.offFlashReminderStateChange]{@link accessibility.offFlashReminderStateChange} is used to 
   * > unsubscribe before the component instance is destroyed (for example, in the **aboutToDisappear** lifecycle 
   * > callback). Otherwise, a crash may occur.
   *
   * @param { Callback<boolean> } callback - Callback used to return the result. It notifies the state when the flashing
   *     reminder mode enabled state changes. The value **true** indicates that the flashing reminder mode is enabled,
   *     and **false** indicates that the flashing reminder mode is disabled.
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
   *     [accessibility.onFlashReminderStateChange]{@link accessibility.onFlashReminderStateChange}. If this parameter
   *     is not specified, listening will be disabled for all callbacks corresponding to the specified type.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offFlashReminderStateChange(callback?: Callback<boolean>): void;

  /**
   * Checks whether flash alerts mode is enabled.
   * 
   * This API is the synchronous version of 
   * [accessibility.isFlashReminderEnabled]{@link accessibility.isFlashReminderEnabled} (asynchronous version). They 
   * have the same functionality. Use this API if you need to obtain the result immediately. Use the asynchronous 
   * version if you need to query in non-blocking scenarios.
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
   * Subscribes to the state changes of mono audio mode. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, ensure that 
   * > [accessibility.offAudioMonoStateChange]{@link accessibility.offAudioMonoStateChange} is used to unsubscribe 
   * > before the component instance is destroyed (for example, in the **aboutToDisappear** lifecycle callback). 
   * > Otherwise, a crash may occur.
   *
   * @param { Callback<boolean> } callback - Callback invoked when the mono audio mode enabled state changes. The value
   *     **true** indicates that the mono audio mode is enabled, and **false** indicates that the mono audio mode is
   *     disabled.
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
   *     [accessibility.onAudioMonoStateChange]{@link accessibility.onAudioMonoStateChange}. If this parameter is not
   *     specified, listening will be disabled for all callbacks corresponding to the specified type.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function offAudioMonoStateChange(callback?: Callback<boolean>): void;

  /**
   * Checks whether mono audio mode is enabled.
   * 
   * This API is the synchronous version of [accessibility.isAudioMonoEnabled]{@link accessibility.isAudioMonoEnabled} (
   * asynchronous version). They have the same functionality. Use this API if you need to obtain the result immediately.
   * Use the asynchronous version if you need to query in non-blocking scenarios.
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
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that senior mode is
   *     enabled, and **false** indicates that senior mode is disabled.
   * @throws { BusinessError } 9300000 - System abnormality.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isSeniorModeEnabled(): Promise<boolean>;

  /**
   * Subscribes to the state changes of the senior mode. This API uses an asynchronous callback to return the result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, ensure that 
   * > [accessibility.offSeniorModeStateChange]{@link accessibility.offSeniorModeStateChange} is used to unsubscribe 
   * > before the component instance is destroyed (for example, in the **aboutToDisappear** lifecycle callback). 
   * > Otherwise, a crash may occur.
   *
   * @param { Callback<boolean> } callback - Callback invoked to return the result. The value **true** indicates that
   *     the senior mode is enabled, and **false** indicates that the senior mode is disabled.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSeniorModeStateChange(callback: Callback<boolean>): void;

  /**
   * Unsubscribes from the state changes of the senior mode. This API uses an asynchronous callback to return the 
   * result.
   *
   * @param { Callback<boolean> } [callback] - Callback for the senior mode state change event. It must be the same as
   *     the callback used in [accessibility.onSeniorModeStateChange]{@link accessibility.onSeniorModeStateChange}. If
   *     this parameter is not specified, all registered events are unsubscribed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSeniorModeStateChange(callback?: Callback<boolean>): void;

  /**
   * Subscribes to the "senior mode" change event of the app itself. This API uses an asynchronous callback to return 
   * the result.
   * 
   * Unlike [accessibility.onSeniorModeStateChange]{@link accessibility.onSeniorModeStateChange}, which listens for 
   * system-level senior mode state changes, this API only monitors the state of the app itself.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registering a listener must use a named function instead of an anonymous function. 
   * > Otherwise, a new underlying object is created each time the function is called, causing memory leakage.
   * >
   * > - After calling this method, ensure that 
   * > [accessibility.offSeniorModeStateChangeForSelf]{@link accessibility.offSeniorModeStateChangeForSelf} is used to 
   * > unsubscribe before the component instance is destroyed (for example, in the **aboutToDisappear** lifecycle 
   * > callback). Otherwise, a crash may occur.
   *
   * @param { Callback<boolean> } callback - Callback used to return the result. The value **true** indicates that the
   *     app's own senior mode is enabled, and **false** indicates that the app's own senior mode is disabled.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSeniorModeStateChangeForSelf(callback: Callback<boolean>): void;

  /**
   * Unsubscribes from the "senior mode" change event of the app itself. This API uses an asynchronous callback to 
   * return the result.
   *
   * @param { Callback<boolean> } [callback] - Callback for the senior mode state change event. It must be the same as
   *     the callback in
   *     [accessibility.onSeniorModeStateChangeForSelf]{@link accessibility.onSeniorModeStateChangeForSelf}. If not
   *     specified, all registered events are unregistered.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSeniorModeStateChangeForSelf(callback?: Callback<boolean>): void;

  /**
   * Checks whether the app has "senior mode" enabled. This API uses a promise to return the result.
   * 
   * Unlike [accessibility.isSeniorModeEnabled]{@link accessibility.isSeniorModeEnabled}, which checks whether the 
   * system-level senior mode is enabled, this API only queries the state of the app itself.
   *
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the "senior mode
   *     " of the app itself is enabled, and **false** indicates that the "senior mode" of the app itself is disabled.
   * @throws { BusinessError } 9300000 - System abnormality.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSeniorModeStateForSelf(): Promise<boolean>;

  /**
   * Sets whether the app has "senior mode" enabled. This API uses a promise to return the result.
   *
   * @param { boolean } state - Whether to enable "senior mode" for the app. The value **true** indicates that "senior
   *     mode" is enabled, and **false** indicates that "senior mode" is disabled.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 9300000 - System abnormality.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setSeniorModeStateForSelf(state: boolean): Promise<void>;

  /**
   * Manages captions configuration. Before calling any method of **CaptionsManager**, call 
   * [accessibility.getCaptionsManager()]{@link accessibility.getCaptionsManager} to obtain a **CaptionsManager** 
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
     * > - After calling this method, ensure that 
     * > [off('enableChange')]{@link accessibility.CaptionsManager.off(type: 'enableChange', callback?: Callback<boolean>)}
     * > is used to unsubscribe before the component instance is destroyed (for example, in the **aboutToDisappear** 
     * > lifecycle callback). Otherwise, a crash may occur.
     *
     * @param { 'enableChange' } type - Event type, which is set to **'enableChange'** in this API.
     * @param { Callback<boolean> } callback - Callback used to return the result. When the enabled state changes, the
     *     state is notified through this callback. The value **true** indicates that the caption configuration is
     *     enabled, and **false** indicates that the caption configuration is disabled.
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
     * > - After calling this method, ensure that 
     * > [off('styleChange')]{@link accessibility.CaptionsManager.off(type: 'styleChange', callback?: Callback<CaptionsStyle>)}
     * > is used to unsubscribe before the component instance is destroyed (for example, in the **aboutToDisappear** 
     * > lifecycle callback). Otherwise, a crash may occur.
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
     *     [on('enableChange')]{@link accessibility.CaptionsManager.on(type: 'enableChange', callback: Callback<boolean>)}.
     *     If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
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
     *     [on('styleChange')]{@link accessibility.CaptionsManager.on(type: 'styleChange', callback: Callback<CaptionsStyle>)}.
     *     If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
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
   * @unionmember { 'monospacedSerif' } Represents a monospaced Serif font.
   * @unionmember { 'serif' } Represents a Serif font.
   * @unionmember { 'monospacedSansSerif' } Represents a monospaced Sans Serif font.
   * @unionmember { 'sansSerif' } Represents a Sans Serif font.
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
     * Describes the caption font color.
     * 
     * number: HEX format color, supporting RGB or ARGB.
     * 
     * string: supports '#rrggbb', '#rrggbbaa', '#rgb', and '#rgba' formats.
     * 
     * Example: opaque red, number: 0xffff0000, string: '#ff0000', '#ff0000ff', '#f00', '#f00f'.
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
     * Describes the caption background color.
     * 
     * number: HEX format color, supporting RGB or ARGB.
     * 
     * string: supports '#rrggbb', '#rrggbbaa', '#rgb', and '#rgba' formats.
     * 
     * Example: opaque red, number: 0xffff0000, string: '#ff0000', '#ff0000ff', '#f00', '#f00f'.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Hearing
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 8 dynamic
     * @since 23 static
     */
    backgroundColor: int | string;
    /**
     * Describes the caption window color.
     * 
     * number: HEX format color, supporting RGB or ARGB.
     * 
     * string: supports '#rrggbb', '#rrggbbaa', '#rgb', and '#rgba' formats.
     * 
     * Example: opaque red, number: 0xffff0000, string: '#ff0000', '#ff0000ff', '#f00', '#f00f'.
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
     * Name of the accessibility app in the extended service list.
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
   * Defines the accessibility event information, which describes UI changes or interaction events. It is used as a 
   * parameter of [sendAccessibilityEvent]{@link accessibility.sendAccessibilityEvent} to define the event type and 
   * trigger action. The sent accessibility event will be distributed by the system to registered accessibility 
   * applications that match the event type for response. For details, see 
   * [sendAccessibilityEvent]{@link accessibility.sendAccessibilityEvent}.
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
     * @param { Object } jsonObject - JSON object containing three fields: type, bundleName, and triggerAction. For
     *     details, see the example.
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
     * @param { string } bundleName - Bundle name of the target app.
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
     * Bundle name of the target app. This parameter is mandatory.
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
     * Event description, which is customized by the developer based on service requirements. There is no special 
     * restriction. The default value is empty.
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
     * Content for proactive announcement, which supports the Resource type. The Resource can only reference string 
     * resources (for example, $r('app.string.xxx')).
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @form [since 23]
     * @atomicservice [since 23]
     * @since 18 dynamic
     * @since 23 static
     */
    textResourceAnnouncedForAccessibility?: Resource;

    /**
     * Component ID for proactive focus. Set this parameter based on the actual scenario when the app needs to 
     * proactively focus. The default value is empty.
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
   * The node query is successful. It is recommended to use the parameter bypassSelfDescendants in the next query to 
   * improve query efficiency.
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
 * Enumerates the focus scenarios for accessibility.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum AccessibilityFocusScene {
  /**
   * The current focus scenario is tap focus.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  HOVER_FOCUS = 1,
  /**
   * The current focus scenario is swipe focus.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  SWIPE_FOCUS = 2,
  /**
   * The current focus scenario is scroll focus.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  SCROLL_FOCUS = 3
}

/**
 * Enumerates the focus rule types.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum FocusRuleType {
  /**
   * Default focus type. Nodes are not filtered by a specific type, and all nodes can be focus targets.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  DEFAULT = 1,
  /**
   * Focus by link type, for example, elements on a web page that can be tapped to navigate.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  FOCUS_BY_LINK = 2,
  /**
   * Focus by title type, for example, heading elements at various levels on a page.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  FOCUS_BY_TITLE = 3
}

/**
 * Enumerates the result types of operating virtual nodes for accessibility.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum OperateVirtualNodeResult {
  /**
   * The operation is successful.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  SUCCESS = 0,
  /**
   * The node to be operated does not exist.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  ACCESSIBILITY_ELEMENT_NOT_EXIST = 1,
  /**
   * The current root node cannot be modified.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  CANNOT_MODIFY_ROOT_NODE = 2,
  /**
   * The accessibility node property is empty.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  ACCESSIBILITY_PROPERTY_IS_EMPTY = 3,
  /**
   * Failed to allocate a virtual node ID.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  ALLOCATE_ID_FAILED = 4,
  /**
   * The array of newly added virtual nodes is empty.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  VIRTUAL_NODE_PARAMETER_IS_EMPTY = 5,
  /**
   * System exception.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  INTERNAL_ERROR = 6,
  /**
   * Virtual node operations are not supported.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  VIRTUAL_NODE_NOT_SUPPORTED = 7
}

/**
 * Enumerates the source types of accessibility nodes.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
export enum AccessibilitySourceType {
  /**
   * Default node type.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  DEFAULT = 1,
  /**
   * The current node is a newly added virtual node.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  ADDED_FROM_ACCESSIBILITY_VIRTUAL_NODE = 2,
  /**
   * The current node is a node with modified properties.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  UPDATED_FROM_ACCESSIBILITY_VIRTUAL_NODE = 3
}