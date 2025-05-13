/*
 * Copyright (C) 2025 Huawei Device Co., Ltd.
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

import { Callback } from './@ohos.base';

/**
 * Defines the error interface.
 *
 * @extends Error
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 20
 */
export declare class AccessibilityError extends Error {
    constructor(code: int, message: string);
    code: int;
}

/**
 * Defines the basic callback.
 *
 * @typedef { AccessibilityCallback<T> }
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @since 20
 */
type AccessibilityCallback<T> = (err: AccessibilityError, data?: T) => void;

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
declare namespace accessibility {
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
   * @typedef {'accessibilityFocus' | 'clearAccessibilityFocus' | 'focus' | 'clearFocus' | 'clearSelection' | 'click' |
   *     'longClick' | 'cut' | 'copy' | 'paste' | 'select' | 'setText' | 'delete' | 'scrollForward' | 'scrollBackward' |
   *     'setSelection' | 'setCursorPosition' | 'home' | 'back' | 'recentTask' | 'notificationCenter' |
   *     'controlCenter' | 'common'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12
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
   * @typedef {'accessibilityFocus' | 'accessibilityFocusClear' | 'click' | 'longClick' | 'focus' | 'select' |
   *     'hoverEnter' | 'hoverExit' | 'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
   *     'announceForAccessibility'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 12
   */
  type EventType = 'accessibilityFocus' | 'accessibilityFocusClear' |
  'click' | 'longClick' | 'focus' | 'select' | 'hoverEnter' | 'hoverExit' |
  'textUpdate' | 'textSelectionUpdate' | 'scroll' | 'requestFocusForAccessibility' |
  'announceForAccessibility';

  /**
   * The change type of the windowsChange event.
   * It's used when received the {@code windowsChange} event.
   *
   * @typedef {'add' | 'remove' | 'bounds' | 'active' | 'focus'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  type WindowUpdateType = 'add' | 'remove' | 'bounds' | 'active' | 'focus';

  /**
   * The type of the observer.
   *
   * @typedef {'accessibilityStateChange' | 'touchGuideStateChange' | 'screenReaderStateChange'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  type ObserverEventType = 'accessibilityStateChange' | 'touchGuideStateChange' | 'screenReaderStateChange';

  /**
   * The granularity of text move.
   *
   * @typedef {'char' | 'word' | 'line' | 'page' | 'paragraph'}
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 20
   */
  type TextMoveUnit = 'char' | 'word' | 'line' | 'page' | 'paragraph';

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
  function isOpenAccessibilitySync(): boolean;

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
   * @since 11
   */
  function isOpenTouchGuideSync(): boolean;

  /**
   * Send accessibility event.
   *
   * @param { EventInfo } event The object of the accessibility {@code EventInfo} .
   * @param { AccessibilityCallback<void> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 9
   */
  function sendAccessibilityEvent(event: EventInfo, callback: AccessibilityCallback<void>): void;

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
   * @since 9
   */
  function sendAccessibilityEvent(event: EventInfo): Promise<void>;

  /**
   * Register the observe.
   *
   * @param { ObserverEventType } type state event type.
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  function on(type: ObserverEventType, callback: Callback<boolean>): void;

  /**
   * Unregister the observe.
   *
   * @param { ObserverEventType } type state event type
   * @param { Callback<boolean> } callback Asynchronous callback interface.
   * @throws { BusinessError } 401 - Input parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  function off(type: ObserverEventType, callback?: Callback<boolean>): void;

  /**
   * Indicates the info of events.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @since 7
   */
  class EventInfo {
    /**
     * A constructor used to create a EventInfo object.
     *
     * @param { EventType } type - The type of the accessibility event.
     * @param { string } bundleName - The name of the bundle.
     * @param { Action } triggerAction - The action that the ability can execute.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 11
     */
    constructor(type: EventType, bundleName: string, triggerAction: Action);
    /**
     * The type of an accessibility event.
     * @type { EventType }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public type: EventType;

    /**
     * The type of the window change event.
     * @type { ?WindowUpdateType }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public windowUpdateType?: WindowUpdateType;

    /**
     * The bundle name of the target application.
     * @type { string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public bundleName: string;

    /**
     * The type of the event source component,such as button, chart.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public componentType?: string;

    /**
     * The page id of the event source.
     * @type { ?number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public pageId?: number;

    /**
     * The accessibility event description.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public description?: string;

    /**
     * The action that triggers the accessibility event, for example, clicking or focusing a view.
     * @type { Action }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public triggerAction: Action;

    /**
     * The movement step used for reading texts.
     * @type { ?TextMoveUnit }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public textMoveUnit?: TextMoveUnit;

    /**
     * The content list.
     * @type { ?Array<string> }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public contents?: Array<string>;

    /**
     * The content changed before.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public lastContent?: string;

    /**
     * The start index of listed items on the screen.
     * @type { ?number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public beginIndex?: number;

    /**
     * The index of the current item on the screen.
     * @type { ?number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public currentIndex?: number;

    /**
     * The end index of listed items on the screen.
     * @type { ?number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public endIndex?: number;

    /**
     * The total of the items, talkback used it when scroll.
     * @type { ?number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 7
     */
    public itemCount?: number;

    /**
     * The id of element.
     * @type { ?number }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 12
     */
    public elementId?: number;

    /**
     * The content of announce accessibility text.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 12
     */
    public textAnnouncedForAccessibility?: string;

    /**
     * The customized element id.
     * @type { ?string }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @since 12
     */
    public customId?: string;
  }
}
export default accessibility;