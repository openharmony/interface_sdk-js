/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';
import InputMethodSubtype from './@ohos.InputMethodSubtype';
import { Movement, Range } from './imf/InputMethodCommon';

/**
 * Input method
 *
 * @namespace inputMethod
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 6
 */
declare namespace inputMethod {
  /**
   * Keyboard max number
   *
   * @constant
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8
   */
  const MAX_TYPE_NUM: number;

  /**
   * Input method setting
   *
   * @returns { InputMethodSetting } the object of InputMethodSetting
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8
   * @deprecated since 9
   * @useinstead inputMethod#getSetting
   */
  function getInputMethodSetting(): InputMethodSetting;

  /**
   * Input method controller
   *
   * @returns { InputMethodController } the object of InputMethodController.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 6
   * @deprecated since 9
   * @useinstead inputMethod#getController
   */
  function getInputMethodController(): InputMethodController;

  /**
   * Input method setting
   *
   * @returns { InputMethodSetting } the object of InputMethodSetting.
   * @throws { BusinessError } 12800007 - settings extension error.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  function getSetting(): InputMethodSetting;

  /**
   * Input method controller
   *
   * @returns { InputMethodController } the object of InputMethodController.
   * @throws { BusinessError } 12800006 - input method controller error.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  function getController(): InputMethodController;

  /**
   * Switch input method
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodProperty } target - indicates the input method which will replace the current one.
   * @param { AsyncCallback<boolean> } callback - the callback of switchInputMethod.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error.
   * @throws { BusinessError } 12800005 - configuration persisting error.
   * @throws { BusinessError } 12800008 - input method manager service error.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  function switchInputMethod(target: InputMethodProperty, callback: AsyncCallback<boolean>): void;

  /**
   * Switch input method
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodProperty } target - Indicates the input method which will replace the current one.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error.
   * @throws { BusinessError } 12800005 - configuration persisting error.
   * @throws { BusinessError } 12800008 - input method manager service error.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  function switchInputMethod(target: InputMethodProperty): Promise<boolean>;

  /**
   * Get current input method
   *
   * @returns { InputMethodProperty } the property of current inputmethod.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  function getCurrentInputMethod(): InputMethodProperty;

  /**
   * Switch current input method subtype, if this interface is invoked by the current IME, this permission is ignored.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodSubtype } target - Indicates the input method subtype which will replace the current one.
   * @param { AsyncCallback<boolean> } callback - the callback of switchCurrentInputMethodSubtype.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error.
   * @throws { BusinessError } 12800005 - configuration persisting error.
   * @throws { BusinessError } 12800008 - input method manager service error.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  function switchCurrentInputMethodSubtype(target: InputMethodSubtype, callback: AsyncCallback<boolean>): void;

  /**
   * Switch current input method subtype, if this interface is invoked by the current IME, this permission is ignored.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodSubtype } target - Indicates the input method subtype which will replace the current one.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error.
   * @throws { BusinessError } 12800005 - configuration persisting error.
   * @throws { BusinessError } 12800008 - input method manager service error.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  function switchCurrentInputMethodSubtype(target: InputMethodSubtype): Promise<boolean>;

  /**
   * Get the current input method subtype
   *
   * @returns { InputMethodSubtype } the subtype of the current input method.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  function getCurrentInputMethodSubtype(): InputMethodSubtype;

  /**
   * Switch input method and subtype
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodProperty } inputMethodProperty - Indicates the target input method.
   * @param { InputMethodSubtype } inputMethodSubtype - Indicates the target input method subtype.
   * @param { AsyncCallback<boolean> } callback - the callback of switchCurrentInputMethodAndSubtype.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error.
   * @throws { BusinessError } 12800005 - configuration persisting error.
   * @throws { BusinessError } 12800008 - input method manager service error.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  function switchCurrentInputMethodAndSubtype(
    inputMethodProperty: InputMethodProperty,
    inputMethodSubtype: InputMethodSubtype,
    callback: AsyncCallback<boolean>
  ): void;

  /**
   * Switch input method and subtype.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { InputMethodProperty } inputMethodProperty - Indicates the target input method.
   * @param { InputMethodSubtype } inputMethodSubtype - Indicates the target input method subtype.
   * @returns { Promise<boolean> } the promise returned by the function.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 401 - parameter error.
   * @throws { BusinessError } 12800005 - configuration persisting error.
   * @throws { BusinessError } 12800008 - input method manager service error.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9
   */
  function switchCurrentInputMethodAndSubtype(
    inputMethodProperty: InputMethodProperty,
    inputMethodSubtype: InputMethodSubtype
  ): Promise<boolean>;

  /**
   * @interface InputMethodSetting
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8
   */
  interface InputMethodSetting {
    /**
     * Subscribe input method or subtype change.
     *
     * @param { 'imeChange' } type - Indicates the event type.
     * @param { (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void } callback - the callback of 'imeChange'
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    on(
      type: 'imeChange',
      callback: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void;

    /**
     * Unsubscribe input method or subtype change.
     *
     * @param { 'imeChange' } type - Indicates the event type.
     * @param { (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void } [callback] - the callback of 'imeChange',
     *        when subscriber unsubscribes all callback functions of event 'imeChange', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    off(
      type: 'imeChange',
      callback?: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void;

    /**
     * List subtype of the specified input method.
     *
     * @param { InputMethodProperty } inputMethodProperty - the property of the specified inputmethod.
     * @param { AsyncCallback<Array<InputMethodSubtype>> } callback - the callback of listInputMethodSubtype.
     * @throws { BusinessError } 401 - parameter error.
     * @throws { BusinessError } 12800001 - package manager error.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    listInputMethodSubtype(
      inputMethodProperty: InputMethodProperty,
      callback: AsyncCallback<Array<InputMethodSubtype>>
    ): void;

    /**
     * List subtype of the specified input method.
     *
     * @param { InputMethodProperty } inputMethodProperty - Indicates the specified input method.
     * @returns { Promise<Array<InputMethodSubtype>> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error.
     * @throws { BusinessError } 12800001 - package manager error.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    listInputMethodSubtype(inputMethodProperty: InputMethodProperty): Promise<Array<InputMethodSubtype>>;

    /**
     * List subtype of current input method
     *
     * @param { AsyncCallback<Array<InputMethodSubtype>> } callback - the callback of listCurrentInputMethodSubtype.
     * @throws { BusinessError } 12800001 - package manager error.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    listCurrentInputMethodSubtype(callback: AsyncCallback<Array<InputMethodSubtype>>): void;

    /**
     * List subtype of current input method
     *
     * @returns { Promise<Array<InputMethodSubtype>> } the promise returned by the function.
     * @throws { BusinessError } 12800001 - package manager error.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    listCurrentInputMethodSubtype(): Promise<Array<InputMethodSubtype>>;

    /**
     * List input methods
     *
     * @param { boolean } enable :
     *     If true, collect enabled input methods.
     *     If false, collect disabled input methods.
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - the callback of getInputMethods.
     * @throws { BusinessError } 401 - parameter error.
     * @throws { BusinessError } 12800001 - package manager error.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    getInputMethods(enable: boolean, callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * List input methods
     *
     * @param { boolean } enable :
     *     If true, collect enabled input methods.
     *     If false, collect disabled input methods.
     * @returns { Promise<Array<InputMethodProperty>> } the promise returned by the function.
     * @throws { BusinessError } 401 - parameter error.
     * @throws { BusinessError } 12800001 - package manager error.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    getInputMethods(enable: boolean): Promise<Array<InputMethodProperty>>;

    /**
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - the callback of listInputMethod.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#getInputMethods
     */
    listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>): void;
    /**
     * @returns { Promise<Array<InputMethodProperty>> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#getInputMethods
     */
    listInputMethod(): Promise<Array<InputMethodProperty>>;

    /**
     * Show input method setting extension dialog
     *
     * @param { AsyncCallback<boolean> } callback - the callback of showOptionalInputMethods.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    showOptionalInputMethods(callback: AsyncCallback<boolean>): void;

    /**
     * Show input method setting extension dialog
     *
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    showOptionalInputMethods(): Promise<boolean>;

    /**
     * @param { AsyncCallback<void> } callback - the callback of displayOptionalInputMethod.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#showOptionalInputMethods
     */
    displayOptionalInputMethod(callback: AsyncCallback<void>): void;

    /**
     * @returns { Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#showOptionalInputMethods
     */
    displayOptionalInputMethod(): Promise<void>;
  }

  /**
   * @interface InputMethodController
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 6
   */
  interface InputMethodController {
    /**
     * Stop input session
     *
     * @param { AsyncCallback<boolean> } callback - the callback of stopInputSession.
     * @throws { BusinessError } 12800003 - input method client error.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    stopInputSession(callback: AsyncCallback<boolean>): void;

    /**
     * Stop input session
     *
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - input method client error.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    stopInputSession(): Promise<boolean>;

    /**
     * Stop input
     *
     * @param { AsyncCallback<boolean> } callback - the callback of stopInput.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 6
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodController#stopInputSession
     */
    stopInput(callback: AsyncCallback<boolean>): void;

    /**
     * Stop input
     *
     * @returns { Promise<boolean> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 6
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodController#stopInputSession
     */
    stopInput(): Promise<boolean>;

    /**
     * Show soft keyboard
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { AsyncCallback<void> } callback - the callback of showSoftKeyboard.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 12800003 - input method client error.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    showSoftKeyboard(callback: AsyncCallback<void>): void;

    /**
     * Show soft keyboard
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 12800003 - input method client error.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    showSoftKeyboard(): Promise<void>;

    /**
     * Hide soft keyboard
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { AsyncCallback<void> } callback - the callback of hideSoftKeyboard.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 12800003 - input method client error.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    hideSoftKeyboard(callback: AsyncCallback<void>): void;

    /**
     * Hide soft keyboard
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 12800003 - input method client error.
     * @throws { BusinessError } 12800008 - input method manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    hideSoftKeyboard(): Promise<void>;

    /**
     * Register a callback and when IME sends select event with range of selection,
     * the callback will be invoked.
     *
     * @param { 'selectByRange' } type - event type, fixed as 'selectByRange'.
     * @param { Callback<Range> } callback - processes selectByRange command. The range of selection is provided for
     *        this callback, and subscribers are expected to select corresponding text in callback according to
     *        the range.
     * @throws { BusinessError } 401 - parameter error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    on(type: 'selectByRange', callback: Callback<Range>): void;

    /**
     * Register a callback and when IME sends select event witch movement of cursor,
     * the callback will be invoked.
     *
     * @param { 'selectByMovement' } type - event type, fixed as 'selectByMovement'.
     * @param { Callback<Movement> } callback - processes selectByMovement command. The movement of cursor is provided
     *        for this callback, and subscribers are expected to select corresponding text in callback according to
     *        the movement.
     * @throws { BusinessError } 401 - parameter error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    on(type: 'selectByMovement', callback: Callback<Movement>): void;

    /**
     * Unregister the callback of selectedByRange.
     *
     * @param { 'selectByRange' } type - event type, fixed as 'selectByRange'.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    off(type: 'selectByRange'): void;

    /**
     * Unregister the callback of selectedByMovement.
     *
     * @param { 'selectByMovement' } type - event type, fixed as 'selectByMovement'.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    off(type: 'selectByMovement'): void;
  }

  /**
   * input method property
   *
   * @interface InputMethodProperty
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8
   */
  interface InputMethodProperty {
    /**
     * The name of input method
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodProperty#name
     */
    readonly packageName: string;

    /**
     * The id of input method
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodProperty#id
     */
    readonly methodId: string;

    /**
     * The name of input method
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    readonly name: string;

    /**
     * The id of input method
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    readonly id: string;

    /**
     * The label of input method
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    readonly label?: string;

    /**
     * The label id of input method
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10
     */
    readonly labelId?: number;

    /**
     * The icon of input method
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    readonly icon?: string;

    /**
     * The icon id of input method
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    readonly iconId?: number;

    /**
     * The extra info of input method
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9
     */
    extra?: object;
  }
}

export default inputMethod;
