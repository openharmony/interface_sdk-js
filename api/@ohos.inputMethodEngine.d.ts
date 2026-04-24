/*
 * Copyright (c) 2021-2024 Huawei Device Co., Ltd.
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
 * @kit IMEKit
 */
import type { AsyncCallback, BusinessError, Callback } from './@ohos.base';
import type { KeyEvent as InputKeyEvent } from './@ohos.multimodalInput.keyEvent';
import InputMethodSubtype from './@ohos.InputMethodSubtype';
import BaseContext from './application/BaseContext';
import window from './@ohos.window';
/*** if arkts static */
import { LocalStorage } from '@ohos.arkui.stateManagement';
/*** endif */

import { InputMethodExtraConfig } from './@ohos.inputMethod.ExtraConfig';
/**
 * The **inputMethodEngine** module is oriented to input method applications (including system and third-party input 
 * method applications). With the APIs of this module, input method applications are able to create soft keyboard 
 * windows, insert or delete characters, select text, and listen for physical keyboard events.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace inputMethodEngine {
  /**
   * No function is specified for the key.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_UNSPECIFIED: int;

  /**
   * Key that executes a command or navigates to a specific location.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_GO: int;

  /**
   * Key that initiates a search operation.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_SEARCH: int;

  /**
   * Key that sends the text to its target.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_SEND: int;

  /**
   * Key that moves the focus to the next item in a sequence.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_NEXT: int;

  /**
   * Key that indicates that a task or input is complete.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_DONE: int;

  /**
   * Key that moves the focus to the previous item in a sequence.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_PREVIOUS: int;

  /**
   * Key that inserts a new line.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_NEWLINE: int;

  /**
   * Any type of edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_NULL: int;

  /**
   * Text edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_TEXT: int;

  /**
   * Number edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_NUMBER: int;

  /**
   * Phone number edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_PHONE: int;

  /**
   * Date edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_DATETIME: int;

  /**
   * Email edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_EMAIL: int;

  /**
   * URI edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_URI: int;

  /**
   * Password edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_PASSWORD: int;

  /**
   * Screen lock password edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  const PATTERN_PASSWORD_SCREEN_LOCK: int;

  /**
   * Numeric password edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  const PATTERN_PASSWORD_NUMBER: int;

  /**
   * User name edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  const PATTERN_USER_NAME: int = 10;

  /**
   * New password edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  const PATTERN_NEW_PASSWORD: int = 11;

  /**
   * Edit box for numbers with decimal points.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  const PATTERN_NUMBER_DECIMAL: int = 12;

  /**
   * Verification code edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  const PATTERN_ONE_TIME_CODE: int = 13;

  /**
   * The edit box is being selected.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const FLAG_SELECTING: int;

  /**
   * The edit box allows only single-line input.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const FLAG_SINGLE_LINE: int;

  /**
   * The edit box is displayed in half-screen mode.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const DISPLAY_MODE_PART: int;

  /**
   * The edit box is displayed in full screen.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const DISPLAY_MODE_FULL: int;

  /**
   * ASCII values are allowed.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_ASCII: int;

  /**
   * No input attribute is specified.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_NONE: int;

  /**
   * Characters are allowed.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_AUTO_CAP_CHARACTERS: int;

  /**
   * Sentences are allowed.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_AUTO_CAP_SENTENCES: int;

  /**
   * Words are allowed.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_AUTO_WORDS: int;

  /**
   * Multiple lines are allowed.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_MULTI_LINE: int;

  /**
   * Half-screen style.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_NO_FULLSCREEN: int;

  /**
   * The caret moves upward.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_UP: int;

  /**
   * The caret moves downward.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_DOWN: int;

  /**
   * The caret moves leftward.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_LEFT: int;

  /**
   * The caret moves rightward.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_RIGHT: int;

  /**
   * The input method is displayed in a floating window.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const WINDOW_TYPE_INPUT_METHOD_FLOAT: int;

  /**
   * Obtains an [InputMethodAbility]{@link inputMethodEngine.InputMethodAbility} instance for the input method. This API
   * can be called only by an input method.
   * 
   * The input method can use the obtained instance to subscribe to a soft keyboard display/hide request event, create/
   * destroy an input method panel, and the like.
   *
   * @returns { InputMethodAbility } **InputMethodAbility** instance.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   */
  function getInputMethodAbility(): InputMethodAbility;

  /**
   * Get InputMethodAbility object to subscribe events about IME.
   *
   * @returns { InputMethodAbility | null } the object of the InputMethodAbility.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  function getInputMethodAbility(): InputMethodAbility | null;

  /**
   * Obtains an [InputMethodEngine]{@link inputMethodEngine.InputMethodEngine} instance for the input method.
   * 
   * The input method can use the obtained instance to subscribe to a soft keyboard display/hide request event.
   *
   * @returns { InputMethodEngine } **InputMethodAbility** instance.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethodEngine.getInputMethodAbility()
   */
  function getInputMethodEngine(): InputMethodEngine;

  /**
   * Obtains a [KeyboardDelegate]{@link inputMethodEngine.KeyboardDelegate} instance for the input method.
   * 
   * The input method can use the obtained instance to subscribe to a physical keyboard event, text selection change 
   * event, and more.
   *
   * @returns { KeyboardDelegate } **KeyboardDelegate** instance.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   */
  function getKeyboardDelegate(): KeyboardDelegate;

  /**
   * Get KeyboardDelegate object to subscribe key event or events about editor.
   *
   * @returns { KeyboardDelegate | null } the object of KeyboardDelegate.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  function getKeyboardDelegate(): KeyboardDelegate | null;

  /**
   * Obtains a [KeyboardDelegate]{@link inputMethodEngine.KeyboardDelegate} instance for the input method. The input 
   * method can use the obtained instance to subscribe to a physical keyboard event, text selection change event, and 
   * more.
   *
   * @returns { KeyboardDelegate } **KeyboardDelegate** instance.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethodEngine.getKeyboardDelegate()
   */
  function createKeyboardDelegate(): KeyboardDelegate;

  /**
   * Defines the private data type, which varies depending on its function.
   *
   * @unionmember { int } Number.
   * @unionmember { string } String.
   * @unionmember { boolean } Boolean.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  type CommandDataType = int | string | boolean;

  /**
   * The callback of 'inputStart' event.
   *
   * @param { KeyboardController } kbController - keyboard controller.
   * @param { InputClient } inputClient - input client.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 static
   */
  export type IMAInputStartCallback = (kbController: KeyboardController, inputClient: InputClient) => void;

  /**
   * The callback of 'keyDown' or 'keyUp' event.
   *
   * @param { KeyEvent } event - the key event.
   * @returns { boolean } whether to consume this key event.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type KeyEventCallback = (event: KeyEvent) => boolean;

  /**
   * The callback of 'keyEvent' event.
   *
   * @param { InputKeyEvent } event - the key event.
   * @returns { boolean } whether to consume this key event.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type InputKeyEventCallback = (event: InputKeyEvent) => boolean;

  /**
   * The callback of 'cursorContextChange' event.
   *
   * @param { double } x - the left point of the cursor, unit is px.
   * @param { double } y - the top point of the cursor, unit is px.
   * @param { double } height - the height of the cursor, unit is px.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type CursorContextChangeCallback = (x: double, y: double, height: double) => void;

  /**
   * The callback of 'selectionChange' event.
   *
   * @param { int } oldBegin - the old begin of the selected text.
   * @param { int } oldEnd - the old end of the selected text.
   * @param { int } newBegin - the new begin of the selected text.
   * @param { int } newEnd - the new end of the selected text.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type SelectionChangeCallback = (oldBegin: int, oldEnd: int, newBegin: int, newEnd: int) => void;

  /**
   * Callback triggered when the size of the input method panel changes.
   *
   * @param { window.Size } size - Panel size.
   * @param { KeyboardArea } keyboardArea - Size of the keyboard area.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  export type SizeUpdateCallback = (size: window.Size, keyboardArea: KeyboardArea) => void;

  /**
   * Callback triggered when the size of the input method panel changes.
   *
   * @param { window.Size } size - Panel size.
   * @param { KeyboardArea } keyboardArea - Size of the keyboard area.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export type SizeChangeCallback = (size: window.Size, keyboardArea?: KeyboardArea) => void;

  /**
   * In the following API examples, you must first use 
   * [getKeyboardDelegate]{@link inputMethodEngine.getKeyboardDelegate()} to obtain a **KeyboardDelegate** instance, and
   * then call the APIs using the obtained instance.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyboardController {
    /**
     * Hides the keyboard. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hide(callback: AsyncCallback<void>): void;

    /**
     * Hides the keyboard. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hide(): Promise<void>;

    /**
     * Hides the keyboard. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.KeyboardController.hide(callback: AsyncCallback<void>)
     */
    hideKeyboard(callback: AsyncCallback<void>): void;

    /**
     * Hides the keyboard. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.KeyboardController.hide()
     */
    hideKeyboard(): Promise<void>;

    /**
     * Exits this input type. This API can be called only by the preconfigured default input method. This API uses an 
     * asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    exitCurrentInputType(callback: AsyncCallback<void>): void;

    /**
     * Exits this input type. This API can be called only by the preconfigured default input method. This API uses a 
     * promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    exitCurrentInputType(): Promise<void>;
  }

  /**
   * In the following API examples, you must first use 
   * [getInputMethodEngine]{@link inputMethodEngine.getInputMethodEngine} to obtain an **InputMethodEngine** instance, 
   * and then call the APIs using the obtained instance.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 23
   * @useinstead inputMethodEngine.InputMethodAbility
   */
  interface InputMethodEngine {
    /**
     * Enables listening for the input method binding event. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'inputStart' } type - Event type, which is **'inputStart'**.
     * @param { function } callback - Callback used to return the **KeyboardController** and **TextInputClient**
     *     instances.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 23
     * @useinstead inputMethodEngine.InputMethodAbility.on(type: 'inputStart', callback: (kbController: KeyboardController, inputClient: InputClient) => void): void;
     */
    on(
      type: 'inputStart',
      callback: (kbController: KeyboardController, textInputClient: TextInputClient) => void
    ): void;

    /**
     * Disables listening for the input method binding event.
     *
     * @param { 'inputStart' } type - Event type, which is **'inputStart'**.
     * @param { function } callback - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 23
     * @useinstead inputMethodEngine.InputMethodAbility.off(type: 'inputStart', callback?: (kbController: KeyboardController, inputClient: InputClient) => void): void;
     */
    off(
      type: 'inputStart',
      callback?: (kbController: KeyboardController, textInputClient: TextInputClient) => void
    ): void;

    /**
     * Enables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - Event type.
     *     <br>- The value **'keyboardShow'** indicates the keyboard display event.
     *     <br>- The value **'keyboardHide'** indicates the keyboard hiding event.
     * @param { function } callback - Callback used to return the result.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 23
     * @useinstead inputMethodEngine.InputMethodAbility.on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void;
     */
    on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void;

    /**
     * Disables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - Event type.
     *     <br>- The value **'keyboardShow'** indicates the keyboard display event.
     *     <br>- The value **'keyboardHide'** indicates the keyboard hiding event.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 23
     * @useinstead inputMethodEngine.InputMethodAbility.off_keyboardShow
     */
    off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void;
  }

  /**
   * In the following API examples, you must first use 
   * [getInputMethodAbility]{@link inputMethodEngine.getInputMethodAbility()} to obtain an **InputMethodAbility** 
   * instance, and then call the APIs using the obtained instance.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  interface InputMethodAbility {
    /**
     * Enables listening for the input method binding event. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'inputStart' } type - Event type, which is **'inputStart'**.
     * @param { function } callback - Callback used to return instances related to input method operations.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'inputStart', callback: (kbController: KeyboardController, inputClient: InputClient) => void): void;

    /**
     * Disables listening for the input method binding event. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'inputStart' } type - Event type, which is **'inputStart'**.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'inputStart', callback?: (kbController: KeyboardController, inputClient: InputClient) => void): void;

    /**
     * Enables listening for the input method unbinding event. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'inputStop' } type - Event type, which is **'inputStop'**.
     * @param { function } callback - Callback used to return the result.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'inputStop', callback: () => void): void;

    /**
     * Disables listening for the input method stop event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'inputStop' } type - Event type, which is **'inputStop'**.
     * @param { function } callback - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'inputStop', callback: () => void): void;

    /**
     * Enables listening for the window invocation setting event. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'setCallingWindow' } type - Event type, which is **'setCallingWindow'**.
     * @param { function } callback - Callback used to return the window ID of the caller.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'setCallingWindow', callback: (wid: number) => void): void;

    /**
     * Disables listening for the window invocation setting event. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'setCallingWindow' } type - Event type, which is **'setCallingWindow'**.
     * @param { function } callback - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'setCallingWindow', callback: (wid: number) => void): void;

    /**
     * Enables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - Event type.
     *     <br>- The value **'keyboardShow'** indicates the keyboard display event.
     *     <br>- The value **'keyboardHide'** indicates the keyboard hiding event.
     * @param { function } callback - Callback used to return the result.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void;

    /**
     * Disables listening for a keyboard visibility event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - Event type.
     *     <br>- The value **'keyboardShow'** indicates the keyboard display event.
     *     <br>- The value **'keyboardHide'** indicates the keyboard hiding event.
     * @param { function } [callback] - Callback used to return the result.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void;

    /**
     * Enables listening for the input method subtype setting event. This API uses an asynchronous callback to return 
     * the result.
     *
     * @param { 'setSubtype' } type - Event type, which is **'setSubtype'**.
     * @param { function } callback - Callback used to return the input method subtype.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'setSubtype', callback: (inputMethodSubtype: InputMethodSubtype) => void): void;

    /**
     * Disables listening for the input method subtype setting event. This API uses an asynchronous callback to return 
     * the result.
     *
     * @param { 'setSubtype' } type - Event type, which is **'setSubtype'**.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'setSubtype', callback?: (inputMethodSubtype: InputMethodSubtype) => void): void;

    /**
     * Enables listening for the security mode changes of the input method. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { 'securityModeChange' } type - Event type, which is **'securityModeChange'**.
     * @param { Callback<SecurityMode> } callback - Callback used to return the current security mode.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     */
    on(type: 'securityModeChange', callback: Callback<SecurityMode>): void;

    /**
     * Disables listening for the security mode changes of the input method. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { 'securityModeChange' } type - Event type, which is **'securityModeChange'**.
     * @param { Callback<SecurityMode> } [callback] - Callback to unregister. If this parameter is not specified, this
     *     API unregisters all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     */
    off(type: 'securityModeChange', callback?: Callback<SecurityMode>): void;

    /**
     * Enables listening for the private data event of the input method. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { 'privateCommand' } type - Event type, which is **'privateCommand'**.
     * @param { Callback<Record<string, CommandDataType>> } callback - Callback used to return the private data sent to
     *     the input method application.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    on(type: 'privateCommand', callback: Callback<Record<string, CommandDataType>>): void;

    /**
     * Disables listening for the private data event of the input method. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { 'privateCommand' } type - Event type, which is **'privateCommand'**.
     * @param { Callback<Record<string, CommandDataType>> } [callback] - Callback to unregister. If this parameter is
     *     not specified, this API unregisters all callbacks for the specified type.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    off(type: 'privateCommand', callback?: Callback<Record<string, CommandDataType>>): void;

    /**
     * Enables listening for changes of the screen ID of the window associated with the edit box. This API uses an 
     * asynchronous callback to return the result.
     *
     * @param { 'callingDisplayDidChange' } type - Event type, which is **'callingDisplayDidChange'**.
     * @param { Callback<number> } callback - Callback used to return the screen ID of the window corresponding to the
     *     edit box.
     * @throws { BusinessError } 801 - capability not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18 dynamic
     */
    on(type: 'callingDisplayDidChange', callback: Callback<number>): void;

    /**
     * Disables listening for changes of the screen ID of the window associated with the edit box. This API uses an 
     * asynchronous callback to return the result.
     *
     * @param { 'callingDisplayDidChange' } type - Event type, which is **'callingDisplayDidChange'**.
     * @param { Callback<number> } [callback] - Callback to unregister. If this parameter is not specified, this API
     *     unregisters all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18 dynamic
     */
    off(type: 'callingDisplayDidChange', callback?: Callback<number>): void;

    /**
     * Subscribes to the event of discarding candidate words and sends the event to the input method. This API uses an 
     * asynchronous callback to return the result.
     *
     * @param { 'discardTypingText' } type - Event type, which is **'discardTypingText'**.
     *     <br> - **'discardTypingText'**
     *     : indicates subscribing to the event of discarding candidate words and sending the event to the input method.
     * @param { Callback<void> } callback - Callback used to return the result. If the operation is successful, **err**
     *     is **undefined**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     */
    on(type: 'discardTypingText', callback: Callback<void>): void;

    /**
     * Unsubscribes from the event of discarding candidate words and sends the event to the input method. This API uses 
     * an asynchronous callback to return the result.
     *
     * @param { 'discardTypingText' } type - Event type, which is **'discardTypingText'**.
     *     <br> - **'discardTypingText'**: indicates unsubscribing from the event of discarding candidate words and
     *     sending the event to the input method.
     * @param { Callback<void> } [callback] - Callback to unregister. If this parameter is not specified, this API
     *     unregisters all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     */
    off(type: 'discardTypingText', callback?: Callback<void>): void;

    /**
     * Obtains the current security mode of the input method.
     *
     * @returns { SecurityMode } Security mode.
     * @throws { BusinessError } 12800004 - not an input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getSecurityMode(): SecurityMode;

    /**
     * Creates an input method panel. This API can be called only by the input method application in the 
     * [InputMethodExtensionAbility]{@link @ohos.InputMethodExtensionAbility:InputMethodExtensionAbility} class. This 
     * API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > Only one [SOFT_KEYBOARD]{@link inputMethodEngine.PanelType} panel and one 
     * > [STATUS_BAR]{@link inputMethodEngine.PanelType} panel can be created for a single input method.
     * 
     * > The input method panel does not support subwindows. For example, subwindows cannot be created using APIs such 
     * > as 
     * > [window.createWindow]{@link window.createWindow}
     * > , [bindContextMenu]{@link CommonMethod<T>.bindContextMenu}, 
     * > and [CustomDialog]{@link ./@internal/component/ets/custom_dialog_controller}. You are advised to adopt 
     * > alternative solutions to sub-windows, such as using a [dialog box]{@link @ohos.arkui.advanced.Dialog} or 
     * > [bindMenu]{@link CommonMethod<T>.bindMenu}, or set 
     * > **showInSubwindow** to **false**.
     *
     * @param { BaseContext } ctx - Current context of the input method.
     * @param { PanelInfo } info - Information about the input method panel.
     * @param { AsyncCallback<Panel> } callback - Callback used to return the result. If the operation is successful,
     *     the created input method panel is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types;
     * @throws { BusinessError } 12800004 - not an input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>): void;

    /**
     * Creates an input method panel. This API can be called only by the input method application in the 
     * [InputMethodExtensionAbility]{@link @ohos.InputMethodExtensionAbility:InputMethodExtensionAbility} class. This 
     * API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > Only one [SOFT_KEYBOARD]{@link inputMethodEngine.PanelType} panel and one 
     * > [STATUS_BAR]{@link inputMethodEngine.PanelType} panel can be created for a single input method.
     * 
     * > The input method panel does not support subwindows. For example, subwindows cannot be created using APIs such 
     * > as 
     * > [window.createWindow](docroot://windowmanager/application-window-fa.md#setting-the-child-window-of-an-application)
     * > , [bindContextMenu]{@link CommonMethod<T>.bindContextMenu}, 
     * > and [CustomDialog]{@link ./@internal/component/ets/custom_dialog_controller}. You are advised to adopt 
     * > alternative solutions to sub-windows, such as using a [dialog box]{@link @ohos.arkui.advanced.Dialog} or 
     * > [bindMenu]{@link CommonMethod<T>.bindMenu}, or set 
     * > **showInSubwindow** to **false**.
     *
     * @param { BaseContext } ctx - Current context of the input method.
     * @param { PanelInfo } info - Information about the input method panel.
     * @returns { Promise<Panel> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types;
     * @throws { BusinessError } 12800004 - not an input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    createPanel(ctx: BaseContext, info: PanelInfo): Promise<Panel>;

    /**
     * Destroys the specified input method panel. This API uses an asynchronous callback to return the result.
     *
     * @param { Panel } panel - Input method panel to destroy.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    destroyPanel(panel: Panel, callback: AsyncCallback<void>): void;

    /**
     * Destroys the specified input method panel. This API uses a promise to return the result.
     *
     * @param { Panel } panel - Input method panel to destroy.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    destroyPanel(panel: Panel): Promise<void>;

    /**
     * Subscribe 'inputStart' event.
     *
     * @param { IMAInputStartCallback } callback - the callback called when edit box requests keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onInputStart(callback: IMAInputStartCallback): void;
    /**
     * Unsubscribe 'inputStart' event.
     *
     * @param { IMAInputStartCallback } [callback] - optional, the callback called when edit box requests keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offInputStart(callback?: IMAInputStartCallback): void;

    /**
     * Subscribe 'inputStop'.
     *
     * @param { Callback<void> } callback - the callback called when the system needs input method application
     *     to terminate itself.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onInputStop(callback: Callback<void>): void;
    /**
     * Unsubscribe 'inputStop'.
     *
     * @param { Callback<void> } callback - the callback called when the system needs input method application
     *     to terminate itself.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offInputStop(callback: Callback<void>): void;

    /**
     * Subscribe 'setCallingWindow'.
     *
     * @param { Callback<int> } callback - the callback called when the edit box sets calling window id.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSetCallingWindow(callback: Callback<int>): void;
    /**
     * Unsubscribe 'setCallingWindow'.
     *
     * @param { Callback<int> } callback - the callback called when the edit box sets calling window id.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSetCallingWindow(callback: Callback<int>): void;

    /**
     * Subscribe 'keyboardShow'.
     *
     * @param { Callback<void> } callback - the callback called when showing keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyboardShow(callback: Callback<void>): void;
    /**
     * Unsubscribe 'keyboardShow'.
     *
     * @param { Callback<void> } [callback] - optional, the callback called when showing keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyboardShow(callback?: Callback<void>): void;

    /**
     * Subscribe 'keyboardHide'.
     *
     * @param { Callback<void> } callback - the callback called when hiding keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyboardHide(callback: Callback<void>): void;
    /**
     * Unsubscribe 'keyboardHide'.
     *
     * @param { Callback<void> } [callback] - optional, the callback called when hiding keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyboardHide(callback?: Callback<void>): void;

    /**
     * Subscribe 'setSubtype'.
     *
     * @param { Callback<InputMethodSubtype> } callback - the callback called when the system notify
     *     to switch subtype.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSetSubtype(callback: Callback<InputMethodSubtype>): void;
    /**
     * Unsubscribe 'setSubtype'.
     *
     * @param { Callback<InputMethodSubtype> } [callback] - optional, the callback called when the system notify
     *     to switch subtype.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSetSubtype(callback?: Callback<InputMethodSubtype>): void;

    /**
     * Subscribe 'securityModeChange' event.
     *
     * @param { Callback<SecurityMode> } callback - the callback called when the security mode changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSecurityModeChange(callback: Callback<SecurityMode>): void;
    /**
     * Unsubscribe 'securityModeChange' event.
     *
     * @param { Callback<SecurityMode> } [callback] - optional, the callback called when the security mode changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSecurityModeChange(callback?: Callback<SecurityMode>): void;

    /**
     * Subscribe 'privateCommand'. This function can only be called by default input method configured by system.
     *
     * @param { Callback<Record<string, CommandDataType>> } callback - the callback called when receiving
     *     private command.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onPrivateCommand(callback: Callback<Record<string, CommandDataType>>): void;
    /**
     * Unsubscribe 'privateCommand'. This function can only be called by default input method configured by system.
     *
     * @param { Callback<Record<string, CommandDataType>> } [callback] - optional,
     *     the callback called when receiving private command.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offPrivateCommand(callback?: Callback<Record<string, CommandDataType>>): void;

    /**
     * Subscribe 'callingDisplayDidChange' event.
     *
     * @param { Callback<int> } callback - the callback called when calling display id changed.
     * @throws { BusinessError } 801 - capability not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onCallingDisplayDidChange(callback: Callback<int>): void;
    /**
     * Unsubscribe 'callingDisplayDidChange' event.
     *
     * @param { Callback<int> } [callback] - optional, the callback called when calling display id changed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offCallingDisplayDidChange(callback?: Callback<int>): void;

    /**
     * Subscribe 'discardTypingText' event.
     *
     * @param { Callback<void> } callback - the callback called when the edit box requests to discard typing text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onDiscardTypingText(callback: Callback<void>): void;
    /**
     * Unsubscribe 'discardTypingText' event.
     *
     * @param { Callback<void> } [callback] - optional, the callback called when the edit box requests to
     *     discard typing text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offDiscardTypingText(callback?: Callback<void>): void;
  }

  /**
   * In the following API examples, you must first use 
   * [on('inputStart')]{@link inputMethodEngine.InputMethodEngine.on(type: 'inputStart',
   * callback: (kbController: KeyboardController, textInputClient: TextInputClient) => void): void;}
   * to obtain a **TextInputClient** 
   * instance, and then call the APIs using the obtained instance.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethodEngine.InputClient
   */
  interface TextInputClient {
    /**
     * Sends the function key. This API uses an asynchronous callback to return the result.
     *
     * @param { number } action - Action of the function key.
     *     <br>- **0**: invalid key.
     *     <br>- **1**: confirm key (Enter key).
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.sendKeyFunction(action: int, callback: AsyncCallback<boolean>)
     */
    sendKeyFunction(action: number, callback: AsyncCallback<boolean>): void;

    /**
     * Sends the function key. This API uses a promise to return the result.
     *
     * @param { number } action - Action of the function key.
     *     <br>**0**: invalid key.
     *     <br>**1**: confirm key (Enter key).
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the setting is
     *     successful, and **false** means the opposite.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.sendKeyFunction(action: int, callback: AsyncCallback<boolean>)
     */
    sendKeyFunction(action: number): Promise<boolean>;

    /**
     * Deletes the fixed-length text before the cursor. This API uses an asynchronous callback to return the result.
     *
     * @param { number } length - Text length, which cannot be less than 0.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.deleteForward(length: int, callback: AsyncCallback<boolean>)
     */
    deleteForward(length: number, callback: AsyncCallback<boolean>): void;

    /**
     * Deletes the fixed-length text before the cursor. This API uses a promise to return the result.
     *
     * @param { number } length - Text length, which cannot be less than 0.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the deletion is
     *     successful, and **false** means the opposite.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.deleteForward(length: int, callback: AsyncCallback<boolean>)
     */
    deleteForward(length: number): Promise<boolean>;

    /**
     * Deletes the fixed-length text after the cursor. This API uses an asynchronous callback to return the result.
     *
     * @param { number } length - Text length, which cannot be less than 0.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.deleteBackward(length: int, callback: AsyncCallback<boolean>)
     */
    deleteBackward(length: number, callback: AsyncCallback<boolean>): void;

    /**
     * Deletes the fixed-length text after the cursor. This API uses a promise to return the result.
     *
     * @param { number } length - Text length, which cannot be less than 0.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the deletion is
     *     successful, and **false** means the opposite.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.deleteBackward(length: int, callback: AsyncCallback<boolean>)
     */
    deleteBackward(length: number): Promise<boolean>;

    /**
     * Inserts text. This API uses an asynchronous callback to return the result.
     *
     * @param { string } text - Text to insert.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.insertText(text: string, callback: AsyncCallback<boolean>)
     */
    insertText(text: string, callback: AsyncCallback<boolean>): void;

    /**
     * Inserts text. This API uses a promise to return the result.
     *
     * @param { string } text - Text to insert.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the insertion is
     *     successful, and **false** means the opposite.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.insertText(text: string, callback: AsyncCallback<boolean>)
     */
    insertText(text: string): Promise<boolean>;

    /**
     * Obtains the specific-length text before the cursor. This API uses an asynchronous callback to return the result.
     *
     * @param { number } length - Text length, which cannot be less than 0.
     * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the obtained text. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getForward(length: int, callback: AsyncCallback<string>)
     */
    getForward(length: number, callback: AsyncCallback<string>): void;

    /**
     * Obtains the specific-length text before the cursor. This API uses a promise to return the result.
     *
     * @param { number } length - Text length, which cannot be less than 0.
     * @returns { Promise<string> } Promise used to return the specific-length text before the cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getForward(length: int, callback: AsyncCallback<string>)
     */
    getForward(length: number): Promise<string>;

    /**
     * Obtains the specific-length text after the cursor. This API uses an asynchronous callback to return the result.
     *
     * @param { number } length - Text length, which cannot be less than 0.
     * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the obtained text. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getBackward(length: int, callback: AsyncCallback<string>)
     */
    getBackward(length: number, callback: AsyncCallback<string>): void;

    /**
     * Obtains the specific-length text after the cursor. This API uses a promise to return the result.
     *
     * @param { number } length - Text length, which cannot be less than 0.
     * @returns { Promise<string> } Promise used to return the specific-length text after the cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getBackward(length: int, callback: AsyncCallback<string>)
     */
    getBackward(length: number): Promise<string>;

    /**
     * Obtains the attribute of the edit box. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<EditorAttribute> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the attribute of the edit box. Otherwise, **err** is an
     *     error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getEditorAttribute(callback: AsyncCallback<EditorAttribute>)
     */
    getEditorAttribute(callback: AsyncCallback<EditorAttribute>): void;

    /**
     * Obtains the attribute of the edit box. This API uses a promise to return the result.
     *
     * @returns { Promise<EditorAttribute> } Promise used to return the attribute of the edit box.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getEditorAttribute(callback: AsyncCallback<EditorAttribute>)
     */
    getEditorAttribute(): Promise<EditorAttribute>;
  }

  /**
   * You must first use [on('inputStart')]{@link inputMethodEngine.InputMethodAbility. on(type: 'inputStart', callback:
   * (kbController: KeyboardController, inputClient: InputClient) => void): void;} to obtain a 
   * **InputClient** instance, and then use this instance to call the following APIs.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  interface InputClient {
    /**
     * Sends the function key. This API uses an asynchronous callback to return the result.
     *
     * @param { int } action - Action of the function key.
     *     <br>- **0**: invalid key.
     *     <br>- **1**: confirm key (Enter key).
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    sendKeyFunction(action: int, callback: AsyncCallback<boolean>): void;

    /**
     * Sends the function key. This API uses a promise to return the result.
     *
     * @param { int } action - Action of the function key.
     *     <br>**0**: invalid key.
     *     <br>**1**: confirm key (Enter key).
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the operation is
     *     successful, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    sendKeyFunction(action: int): Promise<boolean>;

    /**
     * Deletes the fixed-length text before the cursor. This API uses an asynchronous callback to return the result.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    deleteForward(length: int, callback: AsyncCallback<boolean>): void;

    /**
     * Deletes the fixed-length text before the cursor. This API uses a promise to return the result.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the deletion is
     *     successful, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    deleteForward(length: int): Promise<boolean>;

    /**
     * Deletes the fixed-length text before the cursor.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    deleteForwardSync(length: int): void;

    /**
     * Deletes the fixed-length text after the cursor. This API uses an asynchronous callback to return the result.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    deleteBackward(length: int, callback: AsyncCallback<boolean>): void;

    /**
     * Deletes the fixed-length text after the cursor. This API uses a promise to return the result.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the deletion is
     *     successful, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    deleteBackward(length: int): Promise<boolean>;

    /**
     * Deletes the fixed-length text after the cursor.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    deleteBackwardSync(length: int): void;

    /**
     * Inserts text. This API uses an asynchronous callback to return the result.
     *
     * @param { string } text - Text to insert.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    insertText(text: string, callback: AsyncCallback<boolean>): void;

    /**
     * Inserts text. This API uses a promise to return the result.
     *
     * @param { string } text - Text to insert.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the insertion is
     *     successful, and **false** means the opposite.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    insertText(text: string): Promise<boolean>;

    /**
     * Inserts text.
     *
     * @param { string } text - Text to insert.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    insertTextSync(text: string): void;

    /**
     * Obtains the specific-length text before the cursor. This API uses an asynchronous callback to return the result.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the obtained text. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getForward(length: int, callback: AsyncCallback<string>): void;

    /**
     * Obtains the specific-length text before the cursor. This API uses a promise to return the result.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @returns { Promise<string> } Promise used to return the specific-length text before the cursor.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getForward(length: int): Promise<string>;

    /**
     * Obtains the specific-length text before the cursor.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @returns { string } Specific-length text before the cursor.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getForwardSync(length: int): string;

    /**
     * Obtains the specific-length text after the cursor. This API uses an asynchronous callback to return the result.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the obtained text. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getBackward(length: int, callback: AsyncCallback<string>): void;

    /**
     * Obtains the specific-length text after the cursor. This API uses a promise to return the result.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @returns { Promise<string> } Promise used to return the specific-length text after the cursor.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getBackward(length: int): Promise<string>;

    /**
     * Obtains the specific-length text after the cursor.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @returns { string } Specific-length text after the cursor.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getBackwardSync(length: int): string;

    /**
     * Obtains the attribute of the edit box. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<EditorAttribute> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the attribute of the edit box. Otherwise, **err** is an
     *     error object.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    getEditorAttribute(callback: AsyncCallback<EditorAttribute>): void;

    /**
     * Get attribute about editor.
     *
     * @param { AsyncCallback<EditorAttribute | null> } callback - the callback of getEditorAttribute.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getEditorAttribute(callback: AsyncCallback<EditorAttribute | null>): void;

    /**
     * Obtains the attribute of the edit box. This API uses a promise to return the result.
     *
     * @returns { Promise<EditorAttribute> } Promise used to return the attribute of the edit box.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    getEditorAttribute(): Promise<EditorAttribute>;

    /**
     * Get attribute about editor.
     *
     * @returns { Promise<EditorAttribute | null> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getEditorAttribute(): Promise<EditorAttribute | null>;

    /**
     * Obtains the attribute of the edit box.
     *
     * @returns { EditorAttribute } Attribute information.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    getEditorAttributeSync(): EditorAttribute;

    /**
     * Get attribute about editor.
     *
     * @returns { EditorAttribute | null } the attribute of editor.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getEditorAttributeSync(): EditorAttribute | null;

    /**
     * Moves the cursor. This API uses an asynchronous callback to return the result.
     *
     * @param { int } direction - Direction in which the cursor moves.
     *     <br>- **1**: upward.
     *     <br>- **2**: downward.
     *     <br>- **3**: leftward.
     *     <br>- **4**: rightward. which cannot be less than 0.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    moveCursor(direction: int, callback: AsyncCallback<void>): void;

    /**
     * Moves the cursor. This API uses a promise to return the result.
     *
     * @param { int } direction - Direction in which the cursor moves.
     *     <br>- **1**: upward.
     *     <br>- **2**: downward.
     *     <br>- **3**: leftward.
     *     <br>- **4**: rightward. which cannot be less than 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    moveCursor(direction: int): Promise<void>;

    /**
     * Moves the cursor.
     *
     * @param { int } direction - Direction in which the cursor moves.
     *     <br>- **1**: upward.
     *     <br>- **2**: downward.
     *     <br>- **3**: leftward.
     *     <br>- **4**: rightward. which cannot be less than 0.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    moveCursorSync(direction: int): void;

    /**
     * Selects text based on the specified range. This API uses an asynchronous callback to return the result.
     *
     * @param { Range } range - Range of the selected text.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the selection event is sent,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByRange(range: Range, callback: AsyncCallback<void>): void;

    /**
     * Selects text based on the specified range. This API uses a promise to return the result.
     *
     * @param { Range } range - Range of the selected text.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByRange(range: Range): Promise<void>;

    /**
     * Selects text based on the specified range.
     *
     * @param { Range } range - Range of the selected text.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByRangeSync(range: Range): void;

    /**
     * Selects text based on the cursor movement direction. This API uses an asynchronous callback to return the result.
     *
     * @param { Movement } movement - Direction in which the cursor moves when the text is selected.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the selection event is sent,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByMovement(movement: Movement, callback: AsyncCallback<void>): void;

    /**
     * Selects text based on the cursor movement direction. This API uses a promise to return the result.
     *
     * @param { Movement } movement - Direction in which the cursor moves when the text is selected.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByMovement(movement: Movement): Promise<void>;

    /**
     * Selects text based on the cursor movement direction.
     *
     * @param { Movement } movement - Direction in which the cursor moves when the text is selected.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByMovementSync(movement: Movement): void;

    /**
     * Obtains the index of the text where the cursor is located. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { AsyncCallback<int> } callback - Callback used to return the result. If the text index is obtained,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getTextIndexAtCursor(callback: AsyncCallback<int>): void;

    /**
     * Obtains the index of the text where the cursor is located. This API uses a promise to return the result.
     *
     * @returns { Promise<int> } Promise used to return the result.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getTextIndexAtCursor(): Promise<int>;

    /**
     * Obtains the index of the text where the cursor is located.
     *
     * @returns { int } Index of the text where the cursor is located.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getTextIndexAtCursorSync(): int;

    /**
     * Sends an extended edit action. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > The input method applications call this API to send extended edit actions to the edit box. The edit box listens
     * > for the corresponding event using 
     * > [on('handleExtendAction')]{@link @ohos.inputMethod:inputMethod.InputMethodController.on(type: 'handleExtendAction',
     *  callback: (action: ExtendAction) => void): void} for further processing.
     * >
     * > When the edit box responds to the **PASTE** command of [ExtendAction]{@link inputMethodEngine.ExtendAction}, 
     * > the edit box application needs to apply for the 
     * > [ohos.permission.READ_PASTEBOARD](docroot://security/AccessToken/restricted-permissions.md#ohospermissionread_pasteboard)
     * > permission.
     *
     * @param { ExtendAction } action - Extended edit action to send.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    sendExtendAction(action: ExtendAction, callback: AsyncCallback<void>): void;

    /**
     * Sends an extended edit action. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > The input method applications call this API to send extended edit actions to the edit box. The edit box listens
     * > for the corresponding event using 
     * > [on('handleExtendAction')]{@link @ohos.inputMethod:inputMethod.InputMethodController.on(type: 'handleExtendAction',
     *  callback: (action: ExtendAction) => void): void;} for
     * > further processing.
     * >
     * > When the edit box responds to the **PASTE** command of [ExtendAction]{@link inputMethodEngine.ExtendAction}, 
     * > the edit box application needs to apply for the 
     * > [ohos.permission.READ_PASTEBOARD](docroot://security/AccessToken/restricted-permissions.md#ohospermissionread_pasteboard)
     * > permission.
     *
     * @param { ExtendAction } action - Extended edit action to send.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
     *     create InputMethodController object failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    sendExtendAction(action: ExtendAction): Promise<void>;

    /**
     * Sends private data to the system component that needs to communicate with the input method application. This API 
     * uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > - The private data channel allows communication between the system preset input method application and specific
     * > system components (such as a text box or a home screen application). It is usually used to implement custom 
     * > input on a specific device.
     * >
     * > - The total size of the private data is 32 KB, and the maximum number of private data records is 5.
     *
     * @param { Record<string, CommandDataType> } commandData - Private data to send.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    sendPrivateCommand(commandData: Record<string, CommandDataType>): Promise<void>;

    /**
     * Obtains information about the application window, in which the input box that starts an input method is located. 
     * This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This API applies only to the input method applications that use [Panel]{@link inputMethodEngine.Panel} as the 
     * > soft keyboard window.
     *
     * @returns { Promise<WindowInfo> } Promise used to return the information obtained.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800012 - the input method panel does not exist.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    getCallingWindowInfo(): Promise<WindowInfo>;

    /**
     * Get info of the calling window.
     *
     * @returns { Promise<WindowInfo | null> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800012 - the input method panel does not exist.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getCallingWindowInfo(): Promise<WindowInfo | null>;

    /**
     * Sets the preview text. This API uses a promise to return the result.
     *
     * @param { string } text - Preview text to set.
     * @param { Range } range - Range of the preview text.
     *     <br>- If the value is { start: -1, end: -1 }, **text**
     *     replaces the entire text in the current preview area by default.
     *     <br>- If **start** is equal to **end**,
     *     **text** is inserted into the cursor position specified by **start**.
     *     <br>- If **start** is not equal to **end**, **text** replaces the text of the specified range.
     *     <br>- If the values of **start** and **end** are negative values, a parameter error is returned.
     *     <br>- If there is preview text in the text box, the value of
     *     **range** cannot exceed the range of the preview text. Otherwise, a parameter error is returned.
     *     <br>- If there is no preview text in the text box, the value of **range** cannot exceed the text range of
     *     the text box. Otherwise, a parameter error is returned.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800011 - text preview not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    setPreviewText(text: string, range: Range): Promise<void>;

    /**
     * Sets the preview text.
     *
     * @param { string } text - Preview text to set.
     * @param { Range } range - Range of the preview text.
     *     <br>- If the value is { start: -1, end: -1 }, **text**
     *     replaces the entire text in the current preview area by default.
     *     <br>- If **start** is equal to **end**,
     *     **text** is inserted into the cursor position specified by **start**.
     *     <br>- If **start** is not equal to
     *     **end**, **text** replaces the text of the specified range.
     *     <br>- If the values of **start** and **end** are negative values, a parameter error is returned.
     *     <br>- If there is preview text in the text box, the value of
     *     **range** cannot exceed the range of the preview text. Otherwise, a parameter error is returned.
     *     <br>- If there is no preview text in the text box, the value of **range** cannot exceed the text range of
     *     the text box. Otherwise, a parameter error is returned.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800011 - text preview not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    setPreviewTextSync(text: string, range: Range): void;

    /**
     * Finishes the text preview. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > If there is preview text in the current text box, calling this API will display the preview text on the screen.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800011 - text preview not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    finishTextPreview(): Promise<void>;

    /**
     * Finishes the text preview.
     * 
     * > **NOTE**
     * >
     * > If there is preview text in the current text box, calling this API will display the preview text on the screen.
     *
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800011 - text preview not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    finishTextPreviewSync(): void;

    /**
     * Sends the custom communication to the edit box application attached to the input method application. This API 
     * uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > This API can be called only when the edit box is attached to the input method and enter the edit mode, and the 
     * > input method application is in full experience mode.
     * >
     * > The maximum length of **msgId** is 256 B, and the maximum length of **msgParam** is 128 KB.
     *
     * @param { string } msgId - Identifier of the custom data to be sent to the edit box application attached to the
     *     input method application.
     * @param { ?ArrayBuffer } [msgParam] - Message body of the custom data to be sent to the edit box application
     *     attached to the input method application.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Incorrect parameter types. 2. Incorrect parameter length.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @throws { BusinessError } 12800014 - the input method is in basic mode.
     * @throws { BusinessError } 12800015 - the other side does not accept the request.
     * @throws { BusinessError } 12800016 - input method client is not editable.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    sendMessage(msgId: string, msgParam?: ArrayBuffer): Promise<void>;

    /**
     * Registers or unregisters MessageHandler.
     * 
     * > **NOTE**
     * >
     * > The [MessageHandler]{@link inputMethodEngine.MessageHandler} object is globally unique. After multiple 
     * > registrations, only the last registered object is valid and retained, and the 
     * > [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()} callback of the penultimate registered 
     * > object is triggered.
     * >
     * > If no parameter is set, unregister [MessageHandler]{@link inputMethodEngine.MessageHandler}. Its 
     * > [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()} callback will be triggered.
     *
     * @param { ?MessageHandler } [msgHandler] - This object receives custom communication data from the edit box
     *     application attached to the input method application through
     *     [onMessage]{@link inputMethodEngine.MessageHandler.onMessage(msgId: string, msgParam?: ArrayBuffer)} and
     *     receives a message for terminating the subscription to this object through
     *     [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()}.
     *     <br>If no parameter is set, unregister
     *     [MessageHandler]{@link inputMethodEngine.MessageHandler}. Its
     *     [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()} callback will be triggered.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    recvMessage(msgHandler?: MessageHandler): void;
    /**
     * Obtains the additional options for binding an input method.
     *
     * @returns { AttachOptions } Additional options for binding an input method.
     * @throws { BusinessError } 801 - Capability not supported. [since 19 - 19]
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     */
    getAttachOptions(): AttachOptions;

    /**
     * Get input attachOptions.
     *
     * @returns { AttachOptions | null } return attach options.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getAttachOptions(): AttachOptions | null;

    /**
     * Subscribes to the event indicating that the additional options for binding an input method are changed. This API 
     * uses an asynchronous callback to return the result.
     *
     * @param { 'attachOptionsDidChange' } type - Additional option change event when the input method is bound. The
     *     value is fixed to **'attachOptionsDidChange'**.
     * @param { Callback<AttachOptions> } callback - Callback used to return the additional options for binding an input
     *     method.
     * @throws { BusinessError } 801 - Capability not supported. [since 19 - 19]
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     */
    on(type: 'attachOptionsDidChange', callback: Callback<AttachOptions>): void;
    /**
     * Unsubscribes from the event indicating that additional options for binding an input method are changed. This API 
     * uses an asynchronous callback to return the result.
     *
     * @param { 'attachOptionsDidChange' } type - Additional option change event when the input method is bound. The
     *     value is fixed to **'attachOptionsDidChange'**.
     * @param { Callback<AttachOptions> } [callback] - Callback to unregister. If this parameter is not specified, this
     *     API unregisters all callbacks for the specified type by default.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     */
    off(type: 'attachOptionsDidChange', callback?: Callback<AttachOptions>): void;

    /**
     * Subscribe 'attachOptionsDidChange' event.
     *
     * @param { Callback<AttachOptions> } callback - the callback called when the attach options changed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onAttachOptionsDidChange(callback: Callback<AttachOptions>): void;
    /**
     * Unsubscribe 'attachOptionsDidChange' event.
     *
     * @param { Callback<AttachOptions> } [callback] - optional, the callback called when the attach options changed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offAttachOptionsDidChange(callback?: Callback<AttachOptions>): void;
  }

  /**
   * In the following API examples, you must first use 
   * [getKeyboardDelegate]{@link inputMethodEngine.getKeyboardDelegate()} to obtain a **KeyboardDelegate** instance, and
   * then call the APIs using the obtained instance.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyboardDelegate {
    /**
     * Enables listening for a physical keyboard event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'keyDown' | 'keyUp' } type - Event type.
     *     <br>- The value **'keyDown'** indicates the keydown event.
     *     <br>- The value **'keyUp'** indicates the keyup event.
     * @param { function } callback - Callback used to return the key information. If the event is consumed by the event
     *     subscriber, **true** is returned. Otherwise, **false** is returned.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    on(type: 'keyDown' | 'keyUp', callback: (event: KeyEvent) => boolean): void;

    /**
     * Disables listening for a physical keyboard event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'keyDown' | 'keyUp' } type - Event type.
     *     <br>- The value **'keyDown'** indicates the keydown event.
     *     <br>- The value **'keyUp'** indicates the keyup event.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    off(type: 'keyDown' | 'keyUp', callback?: (event: KeyEvent) => boolean): void;

    /**
     * Enables listening for a keyboard event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'keyEvent' } type - Event type, which is **'keyEvent'**.
     * @param { function } callback - Callback used to return the result. The input parameter is the key event
     *     information and the return value is of the Boolean type.
     *     <br>- Input parameter: [InputKeyEvent]{@link @ohos.multimodalInput.keyEvent:KeyEvent}.
     *     <br>- If the event is consumed by the event
     *     subscriber, **true** is returned. Otherwise, **false** is returned.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'keyEvent', callback: (event: InputKeyEvent) => boolean): void;

    /**
     * Disables listening for a keyboard event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'keyEvent' } type - Event type, which is **'keyEvent'**.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'keyEvent', callback?: (event: InputKeyEvent) => boolean): void;

    /**
     * Enables listening for the cursor change event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'cursorContextChange' } type - Event type, which is **'cursorContextChange'**.
     * @param { function } callback - Callback used to return the cursor information.
     *     <br>- **x**: x coordinate of the top of the cursor.
     *     <br>- **y**: y coordinate of the bottom of the cursor.
     *     <br>- **height**: height of the cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    on(type: 'cursorContextChange', callback: (x: number, y: number, height: number) => void): void;

    /**
     * Disables listening for cursor context changes. This API uses an asynchronous callback to return the result.
     *
     * @param { 'cursorContextChange' } type - Event type, which is **'cursorContextChange'**.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    off(type: 'cursorContextChange', callback?: (x: number, y: number, height: number) => void): void;

    /**
     * Enables listening for the text selection change event. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'selectionChange' } type - Event type, which is **'selectionChange'**.
     * @param { function } callback - Callback used to return the text selection information.
     *     <br>- **oldBegin**: start of the selected text before the change.
     *     <br>- **oldEnd**: end of the selected text before the change.
     *     <br>- **newBegin**: start of the selected text after the change.
     *     <br>- **newEnd**: end of the selected text after the change.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    on(
      type: 'selectionChange',
      callback: (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => void
    ): void;

    /**
     * Disables listening for the text selection change event. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'selectionChange' } type - Event type, which is **'selectionChange'**.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    off(
      type: 'selectionChange',
      callback?: (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => void
    ): void;

    /**
     * Enables listening for the text change event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'textChange' } type - Event type, which is **'textChange'**.
     * @param { function } callback - Callback used to return the text content.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    on(type: 'textChange', callback: (text: string) => void): void;

    /**
     * Disables listening for the text change event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'textChange' } type - Event type, which is **'textChange'**.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    off(type: 'textChange', callback?: (text: string) => void): void;

    /**
     * Enables listening for the edit box attribute change event. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'editorAttributeChanged' } type - Event type, which is **'editorAttributeChanged'**.
     * @param { function } callback - Callback used to return the changed edit box attribute.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'editorAttributeChanged', callback: (attr: EditorAttribute) => void): void;

    /**
     * Disables listening for the edit box attribute change event. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'editorAttributeChanged' } type - Event type, which is **'editorAttributeChanged'**.
     * @param { function } [callback] - Callback used for unsubscription. If this parameter is not specified, this API
     *     unregisters all callbacks for the specified type by default.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'editorAttributeChanged', callback?: (attr: EditorAttribute) => void): void;

    /**
     * Subscribe key down event
     *
     * @param { KeyEventCallback } callback - the callback called when a key down event occurs.
     *     If the key is processed by event subscriber, callback should be return true, else return false.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyDown(callback: KeyEventCallback): void;
    /**
     * Unsubscribe key down event
     *
     * @param { KeyEventCallback } [callback] - optional, the callback called when a key down event occurs.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyDown(callback?: KeyEventCallback): void;

    /**
     * Subscribe key up event
     *
     * @param { KeyEventCallback } callback - the callback called when a key up event occurs.
     *     If the key is processed by event subscriber, callback should be return true, else return false.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyUp(callback: KeyEventCallback): void;
    /**
     * Unsubscribe key up event
     *
     * @param { KeyEventCallback } [callback] - optional, the callback called when a key up event occurs.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyUp(callback?: KeyEventCallback): void;

    /**
     * Subscribe key event.
     *
     * @param { InputKeyEventCallback } callback - the callback called when a key event event occurs.
     *     If the key is processed by event subscriber, callback should be return true, else return false.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyEvent(callback: InputKeyEventCallback): void;
    /**
     * Unsubscribe key event.
     *
     * @param { InputKeyEventCallback } [callback] - optional, the callback called when a key event event occurs.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyEvent(callback?: InputKeyEventCallback): void;

    /**
     * Subscribe cursor context change.
     *
     * @param { CursorContextChangeCallback } callback - the callback called when cursor information changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onCursorContextChange(callback: CursorContextChangeCallback): void;
    /**
     * Unsubscribe cursor context change.
     *
     * @param { CursorContextChangeCallback } [callback] - optional, the callback called when cursor information
     *     changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offCursorContextChange(callback?: CursorContextChangeCallback): void;

    /**
     * Subscribe selection change.
     *
     * @param { SelectionChangeCallback } callback - the callback called when the text selection changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectionChange(callback: SelectionChangeCallback): void;
    /**
     * Unsubscribe selection change.
     *
     * @param { SelectionChangeCallback } [callback] - optional, the callback called when the text selection changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectionChange(callback?: SelectionChangeCallback): void;

    /**
     * Subscribe text change.
     *
     * @param { Callback<string> } callback - the callback called when the text changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onTextChange(callback: Callback<string>): void;
    /**
     * Unsubscribe text change.
     *
     * @param { Callback<string> } [callback] - optional, the callback called when the text changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offTextChange(callback?: Callback<string>): void;

    /**
     * Subscribe input text attribute change.
     *
     * @param { Callback<EditorAttribute> } callback - the callback called when editor's attribute changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onEditorAttributeChanged(callback: Callback<EditorAttribute>): void;
    /**
     * Unsubscribe input text attribute change.
     *
     * @param { Callback<EditorAttribute> } [callback] - optional, the callback called when editor's attribute changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offEditorAttributeChanged(callback?: Callback<EditorAttribute>): void;
  }

  /**
   * Enumerates the immersive modes of the input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum ImmersiveMode {
    /**
     * Default immersive mode, the panel is not in immersive mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    NONE_IMMERSIVE = 0,

    /**
     * Immersive mode of the input method.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    IMMERSIVE,

    /**
     * Light immersive mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    LIGHT_IMMERSIVE,

    /**
     * Dark immersive mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    DARK_IMMERSIVE
  }

  /**
   * Enumerates the gradient modes of the input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  export enum GradientMode {
    /**
     * Disable gradient mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * Linear gradient mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    LINEAR_GRADIENT = 1,
  }

  /**
   * Enumerates the fluid light modes of the input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum FluidLightMode {
    /**
     * Disable fluid light mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * When the background fluid light mode is enabled, the system panel turns transparent. The fluid light effect must 
     * be implemented by the application.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    BACKGROUND_FLUID_LIGHT = 1,
  }

  /**
   * Describes the immersive effect.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  interface ImmersiveEffect {

    /**
     * Gradient height, which cannot exceed 15% of the screen height.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    gradientHeight: int;

    /**
     * Gradient mode. If this attribute is not specified or is set to an invalid value, the gradient mode is not used by
     * default.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    gradientMode: GradientMode;

    /**
     * Fluid light mode. If this attribute is not specified or is set to an invalid value, the fluid light mode is not 
     * used by default.
     * 
     * This attribute is available only to system applications.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    fluidLightMode?: FluidLightMode;
  }

  /**
   * Enumerates the reasons for requesting keyboard input.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 19 dynamic
   * @since 23 static
   */
  export enum RequestKeyboardReason {
    /**
     * The request keyboard reason is NONE.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * The request keyboard reason is MOUSE.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    MOUSE = 1,
    /**
     * The request keyboard reason is TOUCH.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    TOUCH = 2,
    /**
     * The request keyboard reason is OTHER.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    OTHER = 20
  }

  /**
   * In the following API examples, you must first use 
   * [createPanel]{@link inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>)}
   * to obtain a **Panel** instance, and then call the APIs using the obtained instance.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  interface Panel {
    /**
     * Loads content from a page to this input method panel. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { string } path - Path of the page from which the content will be loaded.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * Loads content from a page to this input method panel. This API uses a promise to return the result.
     *
     * @param { string } path - Path of the page from which the content will be loaded.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string): Promise<void>;

    /**
     * Loads content from a page linked to LocalStorage to this input method panel. This API uses an asynchronous 
     * callback to return the result.
     *
     * @param { string } path - Path of the page linked to LocalStorage.
     * @param { LocalStorage } storage - Storage unit that provides storage for mutable and immutable state variables in
     *     the application.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * Loads content from a page linked to LocalStorage to this panel. This API uses a promise to return the result.
     *
     * @param { string } path - Path of the page from which the content will be loaded.
     * @param { LocalStorage } storage - Storage unit that provides storage for mutable and immutable state variables in
     *     the application.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string, storage: LocalStorage): Promise<void>;

    /**
     * Resizes this input method panel. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > The panel width cannot exceed the screen width, and the panel height cannot be 0.7 times higher than the screen
     * > height.
     * >
     * > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the 
     * > function buttons at the bottom of the panel will dynamically adjust their size according to the panel width. To
     * > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.
     *
     * @param { long } width - Target width of the panel, in px. The value is an integer greater than or equal to 0, and
     *     cannot be greater than the screen width.
     * @param { long } height - Target height of the panel, in px. The value is an integer greater than or equal to 0,
     *     and cannot be greater than 0.7 times the screen height.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    resize(width: long, height: long, callback: AsyncCallback<void>): void;

    /**
     * Resizes this input method panel. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > The panel width cannot exceed the screen width, and the panel height cannot be 0.7 times higher than the screen
     * > height.
     * >
     * > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the 
     * > function buttons at the bottom of the panel will dynamically adjust their size according to the panel width. To
     * > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.
     *
     * @param { long } width - Target width of the panel, in px. The value is an integer greater than or equal to 0, and
     *     cannot be greater than the screen width.
     * @param { long } height - Target height of the panel, in px. The value is an integer greater than or equal to 0,
     *     and cannot be greater than 0.7 times the screen height.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    resize(width: long, height: long): Promise<void>;

    /**
     * Moves this input method panel to the specified position. This API uses an asynchronous callback to return the 
     * result. This API does not work on panels in the [FLG_FIXED]{@link inputMethodEngine.PanelFlag} state.
     *
     * @param { int } x - Distance to move along the horizontal axis, in px. A positive value indicates moving
     *     rightwards. The value must be an integer.
     * @param { int } y - Distance to move along the vertical axis, in px. A positive value indicates moving downwards.
     *     The value must be an integer.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    moveTo(x: int, y: int, callback: AsyncCallback<void>): void;

    /**
     * Moves this input method panel to the specified position. This API uses a promise to return the result. This API 
     * does not work on panels in the [FLG_FIXED]{@link inputMethodEngine.PanelFlag} state.
     *
     * @param { int } x - Distance to move along the horizontal axis, in px. A positive value indicates moving
     *     rightwards. The value must be an integer.
     * @param { int } y - Distance to move along the vertical axis, in px. A positive value indicates moving downwards.
     *     The value must be an integer.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    moveTo(x: int, y: int): Promise<void>;

    /**
     * Sends a command to start moving the window. The window can be moved only when the mouse is clicked.
     *
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     * @throws { BusinessError } 801 - capability not supported. [since 18]
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    startMoving(): void;

    /**
     * Obtains the window ID. This API uses a promise to return the result.
     *
     * @returns { Promise<long> } Promise used to return the result. It returns **displayId** of the window.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    getDisplayId(): Promise<long>;

    /**
     * Shows this input method panel. This API uses an asynchronous callback to return the result. It can be called when
     * the input method is bound to the edit box.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    show(callback: AsyncCallback<void>): void;

    /**
     * Shows this input method panel. This API uses a promise to return the result. It can be called when the input 
     * method is bound to the edit box.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    show(): Promise<void>;

    /**
     * Hides this panel. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hide(callback: AsyncCallback<void>): void;

    /**
     * Hides this panel. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hide(): Promise<void>;

    /**
     * Enables listening for the show event of this panel. This API uses an asynchronous callback to return the result.
     *
     * @param { 'show' } type - Event type, which is **'show'**.
     * @param { function } callback - Callback used to return the result.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'show', callback: () => void): void;

    /**
     * Disables listening for the show event of this panel. This API uses an asynchronous callback to return the result.
     *
     * @param { 'show' } type - Event type, which is **'show'**.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'show', callback?: () => void): void;

    /**
     * Enables listening for the hide event of this panel. This API uses an asynchronous callback to return the result.
     *
     * @param { 'hide' } type - Event type, which is **'hide'**.
     * @param { function } callback - Callback used to return the result.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'hide', callback: () => void): void;

    /**
     * Disables listening for the hide event of this panel. This API uses an asynchronous callback to return the result.
     *
     * @param { 'hide' } type - Event type, which is **'hide'**.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'hide', callback?: () => void): void;

    /**
     * Changes the state type ([PanelFlag]{@link inputMethodEngine.PanelFlag}) of this input method panel. This API only
     * works for [SOFT_KEYBOARD]{@link inputMethodEngine.PanelType} panels.
     *
     * @param { PanelFlag } flag - Type of the state of the target panel.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    changeFlag(flag: PanelFlag): void;

    /**
     * Sets the input method panel to privacy mode. In privacy mode, screenshot and screen recording are blocked.
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode - Whether to set the input method panel to privacy mode.
     *     <br>- **true**: privacy mode.
     *     <br>- **false**: non-privacy mode.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    setPrivacyMode(isPrivacyMode: boolean): void;

    /**
     * Adjusts the panel rectangle. After the API is called, the adjust request is submitted to the input method 
     * framework, but the execution is not complete.
     * 
     * > **NOTE**
     * >
     * > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** 
     * > state.
     * >
     * > This API returns the result synchronously. The return only indicates that the system receives the setting 
     * > request, not that the setting is complete.
     * >
     * > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the 
     * > function buttons at the bottom of the panel will dynamically adjust their size according to the panel width. To
     * > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.
     *
     * @param { PanelFlag } flag - Type of the state of the target panel. It can be **FLG_FIXED** or **FLG_FLOATING**.
     * @param { PanelRect } rect - Landscape rectangle and portrait rectangle of the target panel. For the panel of the
     *     fixed state, the height cannot exceed 70% of the screen height, and the width cannot exceed the screen width.
     *     For the panel of the floating state, the height cannot exceed the screen height, and the width cannot exceed
     *     the screen width.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    adjustPanelRect(flag: PanelFlag, rect: PanelRect): void;

    /**
     * Adjusts the panel rectangle, and customizes the avoid area and touch area.
     * 
     * > **NOTE**
     * >
     * > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** 
     * > state. This API is compatible with 
     * > [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect)}. If the 
     * > input parameter **rect** contains only the **landscapeRect** and **portraitRect** attributes, 
     * > [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect)} is called by
     * > default.
     * >
     * > This API returns the result synchronously. The return only indicates that the system receives the setting 
     * > request, not that the setting is complete.
     * >
     * > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the 
     * > function buttons at the bottom of the panel will dynamically adjust their size according to the panel width. To
     * > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.
     *
     * @param { PanelFlag } flag - Type of the state of the target panel. It can be **FLG_FIXED** or **FLG_FLOATING**.
     * @param { EnhancedPanelRect } rect - The target panel rectangle, avoid area, and touch area.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect): void;

    /**
     * Update the panel rectangle. This API uses a promise to return the result.
     * > **NOTE**
     * >
     * > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING**
     * > state.
     * >
     * > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the
     * > function buttons at the bottom of the panel will dynamically update their size according to the panel width. To
     * > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.
     *
     * @param { PanelFlag } flag - Type of the state of the target panel. It can be **FLG_FIXED** or **FLG_FLOATING**.
     * @param { PanelRect } rect - Landscape rectangle and portrait rectangle of the target panel. For the panel of the
     * fixed state, the height cannot exceed 70% of the screen height, and the width cannot exceed the screen width.
     * For the panel of the floating state, the height cannot exceed the screen height, and the width cannot exceed
     * the screen width.
     * @returns { Promise<void>> } Promise that returns no value.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    updatePanelRect(flag: PanelFlag, rect: PanelRect): Promise<void>;

    /**
     * Update the panel rectangle, and customizes the avoid area and touch area. This API
     * uses a promise to return the result.
     * > **NOTE**
     * >
     * > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING**
     * > state. This API is compatible with
     * > [updatePanelRect]{@link inputMethodEngine.Panel.updatePanelRect(flag: PanelFlag, rect: PanelRect)}.
     * > If the input parameter **rect** contains only the **landscapeRect** and **portraitRect** attributes,
     * > [updatePanelRect]{@link inputMethodEngine.Panel.updatePanelRect(flag: PanelFlag, rect: PanelRect)}
     * > is called by default.
     * >
     * > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the
     * > function buttons at the bottom of the panel will dynamically update their size according to the panel width. To
     * > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.
     *
     * @param { PanelFlag } flag - Type of the state of the target panel. It can be **FLG_FIXED** or **FLG_FLOATING**.
     * @param { EnhancedPanelRect } rect - The target panel rectangle, avoid area, and touch area.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    updatePanelRect(flag: PanelFlag, rect: EnhancedPanelRect): Promise<void>;

    /**
     * Update the panel rectangle.
     * > **NOTE**
     * >
     * > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING**
     * > state.
     * >
     * > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the
     * > function buttons at the bottom of the panel will dynamically update their size according to the panel width. To
     * > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.
     *
     * @param { PanelFlag } flag - Type of the state of the target panel. It can be **FLG_FIXED** or **FLG_FLOATING**.
     * @param { PanelRect } rect - Landscape rectangle and portrait rectangle of the target panel. For the panel of the
     *     fixed state, the height cannot exceed 70% of the screen height, and the width cannot exceed the screen width.
     *     For the panel of the floating state, the height cannot exceed the screen height, and the width cannot exceed
     *     the screen width.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    updatePanelRectSync(flag: PanelFlag, rect: PanelRect): void;

    /**
     * Update the panel rectangle, and customizes the avoid area and touch area.
     * > **NOTE**
     * >
     * > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING**
     * > state. This API is compatible with
     * > [updatePanelRectSync]{@link inputMethodEngine.Panel.updatePanelRectSync(flag: PanelFlag, rect: PanelRect)}.
     * > If the input parameter **rect** contains only the **landscapeRect** and **portraitRect** attributes,
     * > [updatePanelRectSync]{@link inputMethodEngine.Panel.updatePanelRectSync(flag: PanelFlag, rect: PanelRect)}
     * > is called by default.
     * >
     * > When the **PanelFlag** of a smartphone is **FLG_FLOATING** and the panel width is between 0 and 288 vp, the
     * > function buttons at the bottom of the panel will dynamically update their size according to the panel width. To
     * > ensure the optimal user experience, it is recommended that the panel width be no less than 90 vp.
     *
     * @param { PanelFlag } flag - Type of the state of the target panel. It can be **FLG_FIXED** or **FLG_FLOATING**.
     * @param { EnhancedPanelRect } rect - The target panel rectangle, avoid area, and touch area.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    updatePanelRectSync(flag: PanelFlag, rect: EnhancedPanelRect): void;

    /**
     * Updates the hot zone on the input method panel in the current state.
     * 
     * > **NOTE**
     * >
     * > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** 
     * > state.
     * >
     * > This API returns the result synchronously. The return only indicates that the system has received the request 
     * > for updating the hot zone, not that the hot zone has been updated.
     *
     * @param { Array<window.Rect> } inputRegion - Region for receiving input events.
     *     <br>- The array size is limited to [1, 4].
     *     <br>- The input hot zone is relative to the left vertex of the input method panel window.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    updateRegion(inputRegion: Array<window.Rect>): void;

    /**
     * Enables listening for the panel size change. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** 
     * > state. When you call **adjustPanelRect** to adjust the panel size, the system calculates the final value based 
     * > on certain rules (for example, whether the panel size exceeds the screen). This callback can be used to obtain 
     * > the actual panel size to refresh the panel layout.
     * >
     * > -  This API is supported from API version 12 to 14. The callback function of this API contains only mandatory 
     * > parameters of the [window.Size]{@link window.Size} type.
     * >
     * > -  Since API version 15, after the 
     * > [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect)} API 
     * > is called, an optional parameter of the [KeyboardArea]{@link inputMethodEngine.KeyboardArea} type is added to 
     * > the callback function of this API.
     *
     * @param { 'sizeChange' } type - Event type, which is **'sizeChange'**.
     * @param { Callback<window.Size> } callback - Callback used to return the size of the soft keyboard panel,
     *     including the width and height. [since 12 - 14]
     * @param { SizeChangeCallback } callback - Callback used to return the size of the soft keyboard panel, including
     *     the width and height. [since 15]
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    on(type: 'sizeChange', callback: SizeChangeCallback): void;

    /**
     * Disables listening for the panel size change. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** 
     * > state. When you call **adjustPanelRect** to adjust the panel size, the system calculates the final value based 
     * > on certain rules (for example, whether the panel size exceeds the screen). This callback can be used to obtain 
     * > the actual panel size to refresh the panel layout.
     * >
     * > -  This API is supported from API version 12 to 14. The callback function of this API contains only mandatory 
     * > parameters of the [window.Size]{@link window.Size} type.
     * >
     * > -  Since API version 15, after the 
     * > [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect)} API 
     * > is called, an optional parameter of the [KeyboardArea]{@link inputMethodEngine.KeyboardArea} type is added to 
     * > the callback function of this API.
     *
     * @param { 'sizeChange' } type - Event type, which is **'sizeChange'**.
     * @param { ?Callback<window.Size> } [callback] - Callback used to return the size of the soft keyboard panel,
     *     including the width and height. [since 12 - 14]
     * @param { ?SizeChangeCallback } [callback] - Callback used to return the size of the soft keyboard panel,
     *     including the width and height. [since 15]
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    off(type: 'sizeChange', callback?: SizeChangeCallback): void;

    /**
     * Listens for the panel size change. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** 
     * > state. When you call 
     * > [adjustPanelRect]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect)}
     * > to adjust the panel size, the system calculates the final value based on certain rules (for example, whether 
     * > the panel size exceeds the screen). This callback can be used to obtain the actual panel size to refresh the 
     * > panel layout.
     *
     * @param { 'sizeUpdate' } type - Event type, which is **'sizeUpdate'**.
     * @param { SizeUpdateCallback } callback - Callback used to return the size of the soft keyboard panel, including
     *     the width and height.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 14 dynamic
     */
    on(type: 'sizeUpdate', callback: SizeUpdateCallback): void;

    /**
     * Disables listening for the panel size change. This API uses an asynchronous callback to return the result.
     * 
     * > **NOTE**
     * >
     * > This API applies only to the panels of the **SOFT_KEYBOARD** type in the **FLG_FIXED** or **FLG_FLOATING** 
     * > state. When you call 
     * > [adjustPanelRect]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect)}
     * > to adjust the panel size, the system calculates the final value based on certain rules (for example, whether 
     * > the panel size exceeds the screen). This callback can be used to obtain the actual panel size to refresh the 
     * > panel layout.
     *
     * @param { 'sizeUpdate' } type - Event type, which is **'sizeUpdate'**.
     * @param { ?SizeUpdateCallback } [callback] - Callback used to return the size of the soft keyboard panel,
     *     including the width and height.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 14 dynamic
     */
    off(type: 'sizeUpdate', callback?: SizeUpdateCallback): void;

    /**
     * Sets the immersive mode of the input method application. You can only set the immersion mode to 
     * **NONE_IMMERSIVE**, **LIGHT_IMMERSIVE**, or **DARK_IMMERSIVE**. **IMMERSIVE** cannot be set.
     *
     * @param { ImmersiveMode } mode - Immersive mode.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Incorrect parameter types; 2.Parameter verification failed.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    setImmersiveMode(mode: ImmersiveMode): void;

    /**
     * Obtains the immersive mode of the input method application.
     *
     * @returns { ImmersiveMode } Immersive mode.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    getImmersiveMode(): ImmersiveMode;

    /**
     * Sets the immersive effect of the input method application.
     * 
     * - Gradient mode and fluid light mode can be used only when the 
     * [immersive mode]{@link inputMethodEngine.Panel.setImmersiveMode} is enabled.
     * - The fluid light mode can be used only when the gradient mode is enabled.
     * - If the gradient mode is disabled, the gradient height must be 0 px.
     * - Only system applications can set the fluid light mode.
     * - The current API can be called only after any of the following APIs is called:
     *  - [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect)} (available 
     * since API version 12)
     *  - [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect)} (
     * available since API version 15)
     *  - [resize]{@link inputMethodEngine.Panel.resize(width: long, height: long, callback: AsyncCallback<void>)} (
     * available since API version 10)
     *
     * @param { ImmersiveEffect } effect - Immersive effect.
     * @throws { BusinessError } 801 - capability not supported.
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1. input method panel not created. 2. the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800020 - invalid immersive effect.
     *     1. The gradient mode and the fluid light mode can only be used when the immersive mode is enabled.
     *     2. The fluid light mode can only be used when the gradient mode is enabled.
     *     3. When the gradient mode is not enabled, the gradient height can only be 0.
     * @throws { BusinessError } 12800021 - this operation is allowed only after adjustPanelRect or resize is called.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    setImmersiveEffect(effect: ImmersiveEffect): void;
    /**
     * Sets to keep the screen always on. This API uses a promise to return the result.
     * 
     * > **NOTE**
     * >
     * > - When the keyboard is displayed, the screen stays on. When the keyboard is hidden, the screen turns off.
     * >
     * > - You need to use this API properly. Set the attribute to **true** in necessary scenarios (for example, voice 
     * > input) and reset this attribute to **false** after exiting necessary scenarios. In other scenarios, do not use 
     * > this API.
     *
     * @param { boolean } isKeepScreenOn - Whether to keep the screen always on. The value **true** means that the
     *     screen is always on; the value **false** means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * Obtains the offset area of the soft keyboard relative to the system panel under the current state of the 
     * specified screen (for example, folded or unfolded) and the current state of the input method keyboard (for 
     * example, floating or fixed). This API uses a promise to return the result.
     *
     * @param { number } displayId - Display ID of the screen where the input method keyboard is located. It can be
     *     obtained by calling [getDisplayId]{@link inputMethodEngine.Panel.getDisplayId}.
     * @returns { Promise<SystemPanelInsets> } Promise used to return the offset area between the input method keyboard
     *     and the system panel.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag. Possible causes:
     *     1. Current panel's type is not SOFT_KEYBOARD.  2. Panel's flag is not FLG_FIXED or FLG_FLOATING.
     * @throws { BusinessError } 12800022 - invalid displayId.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     */
    getSystemPanelCurrentInsets(displayId: number): Promise<SystemPanelInsets>;

    /**
     * Get the current insets of the system panel of a specified display.
     * 
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED or FLG_FLOATING.</p>
     * <p>This interface only supports obtaining the current insets values of a display.
     * When the display undergoes orientation changes, or is folded or unfolded, it is necessary to
     * reinvoke this interface to get the latest values.</p>
     *
     * @param { long } displayId - specify which display's system panel insets.
     * @returns { Promise<SystemPanelInsets | null> } the promise returned by the function.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag. Possible causes:
     *     1. Current panel's type is not SOFT_KEYBOARD.  2. Panel's flag is not FLG_FIXED or FLG_FLOATING.
     * @throws { BusinessError } 12800022 - invalid displayId.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getSystemPanelCurrentInsets(displayId: long): Promise<SystemPanelInsets | null>;

    /**
     * Sets the shadow effect of the input method window.
     * 
     * > **NOTE**
     * >
     * > Panels whose [PanelType]{@link @ohos.inputMethodEngine:inputMethodEngine.PanelType} is **SOFT_KEYBOARD** and 
     * > [PanelFlag]{@link @ohos.inputMethodEngine:inputMethodEngine.PanelFlag} is **FLG_FIXED** are not supported.
     *
     * @param { double } radius - Radius of the shadow. The value is a floating-point number greater than or equal to 0.
     *     0, in px. The value **0.0** means that the shadow is disabled for the window borders.
     * @param { string } color - Color of the shadow. The value is a hexadecimal RGB or ARGB color code and is case
     *     insensitive, for example, `#000000` or `#FF000000`.
     * @param { double } offsetX - Offset of the shadow along the x-axis, in pixels. The value is a floating-point
     *     number.
     * @param { double } offsetY - Offset of the shadow along the y-axis, in pixels. The value is a floating-point
     *     number.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     *     Possible causes: Panel's flag is FLG_FIXED.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 22 dynamic
     * @since 23 static
     */
    setShadow(radius: double, color: string, offsetX: double, offsetY: double): void;

    /**
     * Sets the color of the function buttons and their background color on the current panel. This API uses a promise 
     * to return the result.
     *
     * @param { string | undefined } fillColor - Color of the function buttons. The value can be [#01000000, #FFFFFFFF]
     *     or [#000000, #FFFFFF]. The value of the fully transparent alpha channel (**#00xxxxxx**) is not supported.
     * @param { string | undefined } backgroundColor - Background color of the function buttons. The value can be
     *     [#01000000, #FFFFFFFF] or [#000000, #FFFFFF]. The value of the fully transparent alpha channel (#00xxxxxx) is
     *     not supported.
     * @returns { Promise<void> } Promise that returns no result.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    setSystemPanelButtonColor(fillColor: string | undefined, backgroundColor: string | undefined): Promise<void>;

    /**
     * Registers panel show event.
     * 
     * <p>The "show" events are triggered when the panel is shown.</p>
     *
     * @param { Callback<void> } callback - the callback called when the panel shows.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onShow(callback: Callback<void>): void;
    /**
     * Unregisters panel show event.
     *
     * @param { Callback<void> } [callback] - optional, the callback called when the panel shows.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offShow(callback?: Callback<void>): void;

    /**
     * Registers panel hide event.
     * 
     * <p>The "hide" events are triggered when the panel is hidden.</p>
     *
     * @param { Callback<void> } callback - the callback called when the panel hides.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onHide(callback: Callback<void>): void;
    /**
     * Unregisters panel hide event.
     *
     * @param { Callback<void> } [callback] - the callback to Unregister.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offHide(callback?: Callback<void>): void;

    /**
     * Subscribe 'sizeUpdate' event.
     * 
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { SizeUpdateCallback } callback - the callback called when the panel size updates.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    onSizeUpdate(callback: SizeUpdateCallback): void;
    /**
     * Unsubscribe 'sizeUpdate' event.
     * 
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { SizeUpdateCallback } [callback] - optional, the callback called when the panel size updates.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    offSizeUpdate(callback?: SizeUpdateCallback): void;

    /**
     * Subscribe 'sizeChange' event.
     * 
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { SizeChangeCallback } callback - the callback called when the panel size changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSizeChange(callback: SizeChangeCallback): void;
    /**
     * Unsubscribe 'sizeChange' event.
     * 
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { SizeChangeCallback } [callback] - optional, the callback called when the panel size changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSizeChange(callback?: SizeChangeCallback): void;
  }

  /**
   * Defines the offset area between the input method soft keyboard and the system panel.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 21 dynamic
   * @since 23 static
   */
  interface SystemPanelInsets {
    /**
     * Distance between the left border of the keyboard area and the left border of the system panel area, in px. The 
     * value is an integer.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     * @since 23 static
     */
    readonly left: int;
    /**
     * Distance between the right border of the keyboard area and the right border of the system panel area, in px. The 
     * value is an integer.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     * @since 23 static
     */
    readonly right: int;
    /**
     * Distance between the bottom border of the keyboard area and the bottom border of the system panel area, in px. 
     * The value is an integer.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     * @since 23 static
     */
    readonly bottom: int;
  }

  /**
   * In the following API examples, you must first use 
   * [getKeyboardDelegate]{@link inputMethodEngine.getKeyboardDelegate()} to obtain a **KeyboardDelegate** instance, and
   * then call the APIs using the obtained instance.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface EditorAttribute {
    /**
     * Text attribute of the edit box. For details, see 
     * [edit box definitions in constants](docroot://reference/apis-ime-kit/js-apis-inputmethodengine.md#Constants).
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly inputPattern: int;

    /**
     * Function attributes of the edit box. For details, see 
     * [function key definitions in constants](docroot://reference/apis-ime-kit/js-apis-inputmethodengine.md#Constants).
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly enterKeyType: int;

    /**
     * Whether text preview is supported.
     * 
     * - **true**: Supported.
     * - **false**: Unsupported.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    isTextPreviewSupported: boolean;

    /**
     * Name of the application package to which the edit box belongs. The value may be **""**. Handle this scenario when
     * using the attribute.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 14 dynamic
     * @since 23 static
     */
    readonly bundleName?: string;

    /**
     * Immersive mode of the input method.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    readonly immersiveMode?: ImmersiveMode;

    /**
     * ID of the window where the edit box is located.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18 dynamic
     * @since 23 static
     */
    readonly windowId?: int;

    /**
     * Screen ID of the window corresponding to the edit box. If window ID is not set, the screen ID of the focused 
     * window is used.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18 dynamic
     * @since 23 static
     */
    readonly displayId?: long;

    /**
     * Placeholder information set for the edit box.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly placeholder?: string;

    /**
     * Ability name set for the edit box.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly abilityName?: string;

    /**
     * Whether to capitalize the first letter in the edit box. If it is not set or is set to an invalid value, the first
     * letter is not capitalized by default.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly capitalizeMode?: CapitalizeMode;

    /**
     * Gradient mode. If this attribute is not specified or is set to an invalid value, the gradient mode is not used by
     * default.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly gradientMode?: GradientMode;

    /**
     * Fluid light mode. If this attribute is not specified or is set to an invalid value, the fluid light mode is not 
     * used by default.
     * 
     * This attribute is available only to system applications.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly fluidLightMode?: FluidLightMode;

    /**
     * Extra information about the input method.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    readonly extraConfig?: InputMethodExtraConfig;
  }

  /**
   * In the following API examples, you must first use 
   * [getKeyboardDelegate]{@link inputMethodEngine.getKeyboardDelegate()} to obtain a **KeyboardDelegate** instance, and
   * then call the APIs using the obtained instance.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyEvent {
    /**
     * Key value. For details, see [KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly keyCode: int;

    /**
     * Key event type.
     * 
     * - **2**: keydown event.
     * - **3**: keyup event.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly keyAction: int;
  }

  /**
   * Enumerates the state types of the input method panel.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum PanelFlag {
    /**
     * Fixed style.
     * 
     * <p>It's provided for the panel with type of SOFT_KEYBOARD.
     * When the flag is set, the soft keyboard is fixed at the bottom of the screen.</p>
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    FLG_FIXED = 0,

    /**
     * Floating style.
     * 
     * <p>It's provided for the panel with type of SOFT_KEYBOARD.
     * When the flag is set, the soft keyboard is floating.</p>
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    FLG_FLOATING,

    /**
     * Candidate style.
     * 
     * <p>It's provided for the panel with type of SOFT_KEYBOARD.
     * When the flag is set, the soft keyboard is a candidate window which will show the possible characters when user types a input code.
     * Panel with candidate style will not be automatically shown or hidden by input method service.
     * Input method application developers are supposed to control the panel status on their own.</p>
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    FLAG_CANDIDATE
  }

  /**
   * Enumerates the types of the input method panel.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum PanelType {
    /**
     * Panel for displaying a virtual software keyboard.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SOFT_KEYBOARD = 0,

    /**
     * Panel for displaying status bar.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    STATUS_BAR
  }

  /**
   * Describes the attributes of the input method panel.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface PanelInfo {
    /**
     * Type of the panel.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    type: PanelType;

    /**
     * State type of the panel.
     *
     * @default FLG_FIXED
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    flag?: PanelFlag;
  }

  /**
   * Enumerates the directions of cursor movement of the input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum Direction {
    /**
     * Upward.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_UP = 1,

    /**
     * Downward.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_DOWN,

    /**
     * Leftward.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_LEFT,

    /**
     * Rightward.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_RIGHT
  }

  /**
   * Describes the security mode.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  export enum SecurityMode {
    /**
     * Basic access mode, where network access is restricted.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    BASIC = 0,
    /**
     * Full access mode, where network access is not restricted.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    FULL
  }

  /**
   * Describes the range of the selected text.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Range {
    /**
     * Index of the first selected character in the text box.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * Index of the last selected character in the text box.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    end: int;
  }

  /**
   * Describes the direction in which the cursor moves when the text is selected.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Movement {
    /**
     * Direction in which the cursor moves when the text is selected.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    direction: Direction;
  }

  /**
   * Describes the type of the extended edit action on the text box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ExtendAction {
    /**
     * Select all.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SELECT_ALL = 0,

    /**
     * Cut.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CUT = 3,

    /**
     * Copy.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    COPY = 4,

    /**
     * Paste.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PASTE = 5
  }

  /**
   * Represents window information.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  export interface WindowInfo {
    /**
     * Rectangular area of the window.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    rect: window.Rect;

    /**
     * Window status type.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    status: window.WindowStatusType;
  }

  /**
   * Represents the size of the input method panel.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  export interface PanelRect {
    /**
     * Size of the input method panel window in landscape mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    landscapeRect: window.Rect;

    /**
     * Size of the input method panel window in portrait mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    portraitRect: window.Rect;
  }

  /**
   * Callback function on receiving a custom message.
   *
   * @param { string } msgId - the identifier of the message.
   * @param { ArrayBuffer } [msgParam] - the parameter of the custom message.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  type OnMessageCallback = (msgId: string, msgParam?: ArrayBuffer) => void;

  /**
   * Represents a custom communication object.
   * 
   * > **NOTE**
   * >
   * > You can register this object to receive custom communication data sent by the edit box application attached to 
   * > the input method application. When the custom communication data is received, the 
   * > [onMessage]{@link inputMethodEngine.MessageHandler.onMessage(msgId: string, msgParam?: ArrayBuffer)} callback in 
   * > this object is triggered.
   * >
   * > This object is globally unique. After multiple registrations, only the last registered object is valid and 
   * > retained, and the [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()} callback of the 
   * > penultimate registered object is triggered.
   * >
   * > If this object is unregistered, its [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()} 
   * > callback will be triggered.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  interface MessageHandler {
    /**
     * This method is called when a custom message is received.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onMessage: OnMessageCallback;
    /**
     * This method is called when a new message handler is set.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onTerminated: Callback<void>;

    /**
     * Receives the custom data callback sent by the edit box application attached to the input method application.
     * 
     * > **NOTE**
     * >
     * > This callback is triggered when the registered [MessageHandler]{@link inputMethodEngine.MessageHandler} 
     * > receives custom communication data sent by the edit box application attached to the input method application.
     * >
     * > The **msgId** parameter is mandatory, and the **msgParam** parameter is optional. If only the custom **msgId** 
     * > data is received, confirm it with the data sender.
     *
     * @param { string } msgId - Identifier of the received custom communication data.
     * @param { ArrayBuffer } [msgParam] - Message body of the received custom communication data.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */
    onMessage(msgId: string, msgParam?: ArrayBuffer): void;

    /**
     * Listens for MessageHandler termination.
     * 
     * > **NOTE**
     * >
     * > When an application registers a new [MessageHandler]{@link inputMethodEngine.MessageHandler} object, the 
     * > [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()} callback of the penultimate registered 
     * > [MessageHandler]{@link inputMethodEngine.MessageHandler} object is triggered.
     * >
     * > When an application unregisters a new [MessageHandler]{@link inputMethodEngine.MessageHandler} object, the 
     * > [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()} callback of the registered 
     * > [MessageHandler]{@link inputMethodEngine.MessageHandler} object is triggered.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */
    onTerminated(): void;
  }

  /**
   * Indicates the size of the enhanced input method panel, including the custom avoid area and touch area.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export interface EnhancedPanelRect {
    /**
     * Size of the input method panel window in landscape mode.
     * 
     * - This attribute is mandatory when **fullScreenMode** is not set or is set to **false**.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    landscapeRect?: window.Rect;
    /**
     * Size of the input method panel window in portrait mode.
     * 
     * - This attribute is mandatory when **fullScreenMode** is not set or is set to **false**.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    portraitRect?: window.Rect;
    /**
     * Distance between the avoid line and the top of the panel in landscape mode, in px. The default value is **0**.
     * 
     * - Other system components in the application avoid the input method panel area below the avoid line.
     * - When the panel is fixed, the distance between the avoid line and the bottom of the screen cannot exceed 70% of 
     * the screen height.
     *
     * @default 0
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    landscapeAvoidY?: int;
    /**
     * Region where the panel receives input events in landscape mode.
     * 
     * - The array size is limited to [1, 4]. The default value is the panel size in landscape mode.
     * - The input hot zone is relative to the left vertex of the input method panel window.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    landscapeInputRegion?: Array<window.Rect>;
    /**
     * Distance between the avoid line and the top of the panel in portrait mode, in px. The default value is **0**.
     * 
     * - Other system components in the application avoid the input method panel area below the avoid line.
     * - When the panel is fixed, the distance between the avoid line and the bottom of the screen cannot exceed 70% of 
     * the screen height.
     *
     * @default 0
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    portraitAvoidY?: int;
    /**
     * Region where the panel receives input events in portrait mode.
     * 
     * - The array size is limited to [1, 4]. The default value is the panel size in portrait mode.
     * - The input hot zone is relative to the left vertex of the input method panel window.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    portraitInputRegion?: Array<window.Rect>;
    /**
     * Indicates whether to enable the full-screen mode. The default value is **false**.
     * 
     * - If the value is **true**, **landscapeRect** and **portraitRect** are optional.
     * - If the value is **false**, **landscapeRect** and **portraitRect** are mandatory.
     *
     * @default false
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    fullScreenMode?: boolean;
  }

  /**
   * Represents the keyboard area on the panel.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export interface KeyboardArea {
    /**
     * Distance between the upper boundary of the keyboard area and the upper boundary of the panel area, in pixels. The
     * value is an integer.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    top: int;
    /**
     * Distance between the lower boundary of the keyboard area and the lower boundary of the panel area, in pixels. The
     * value is an integer.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    bottom: int;
    /**
     * Distance between the left boundary of the keyboard area and the left boundary of the panel area, in pixels. The 
     * value is an integer.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    left: int;
    /**
     * Distance between the right border of the keyboard area and the right border of the panel area, in pixels. The 
     * value is an integer.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    right: int;
  }
  /**
   * Defines additional options for binding an input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 19 dynamic
   * @since 23 static
   */
  export interface AttachOptions {
    /**
     * Reason for requesting the keyboard. This attribute is set by the edit box application. If this attribute is not 
     * set or is set to an invalid value, the keyboard will not be triggered by default.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    requestKeyboardReason?: RequestKeyboardReason;

    /**
     * Whether to enable the simple keyboard. This attribute is set by the edit box application. The value **true** 
     * means that the simple keyboard is enabled, and the value **false** means the opposite.
     * 
     * If this attribute is not set or is set to an invalid value, the simple keyboard is disabled by default.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    isSimpleKeyboardEnabled?: boolean;
  }

  /**
   * Enumerates the modes of capitalizing the first letter of a text.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CapitalizeMode {
    /**
     * Capitalize nothing.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Capitalize the first letter of each sentence.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SENTENCES,

    /**
     * Capitalize the first letter of each word.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    WORDS,

    /**
     * Capitalize each letter.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    CHARACTERS
  }
}

export default inputMethodEngine;
