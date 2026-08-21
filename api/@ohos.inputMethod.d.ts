/*
 * Copyright (c) 2021-2025 Huawei Device Co., Ltd.
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
 * ###### Constant
 * <br>
 * <br>Provides the constants.
 * <br>
 * | Name| Type| Value| Description|
 * | -------- | -------- | -------- | -------- |
 * | MAX_TYPE_NUM<sup>8+</sup> | number | 128 | Maximum number of supported input methods.|
 *
 * @file Input Method Framework
 * @kit IMEKit
 */
import type { Callback, AsyncCallback } from './@ohos.base';
import InputMethodSubtype from './@ohos.InputMethodSubtype';
import { UIContext } from "./@ohos.arkui.UIContext";
/*** if arkts dynamic */
import type { ElementName } from './bundleManager/ElementName';
import type { PanelInfo } from './@ohos.inputMethod.Panel';
/*** endif */
/*** if arkts static */
import { ElementName } from './bundleManager/ElementName';
import { PanelInfo } from './@ohos.inputMethod.Panel';
/*** endif */

/**
 * @brief The **inputMethod** module is oriented to common foreground applications (third-party applications and
 * system applications such as Notes, Messaging, and Settings). It provides input method control and 
 * management capabilities, including displaying or hiding the soft keyboard, switching between input methods,
 * and obtaining the list of all input methods.
 * <br>
 * <br> > **NOTE**
 * <br> >
 * <br> > The initial APIs of this module are supported since API version 6.
 * Newly added APIs will be marked with a superscript to indicate their earliest API version.
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace inputMethod {
  /**
   * @brief Keyboard max number. Max value is 128.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const MAX_TYPE_NUM: int;

  /**
   * @brief Obtains an [InputMethodSetting]{@link inputMethod.InputMethodSetting} instance.
   *
   * @returns { InputMethodSetting } **InputMethodSetting** instance.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethod#getSetting
   */
  function getInputMethodSetting(): InputMethodSetting;

  /**
   * @brief Obtains an [InputMethodController]{@link inputMethod.InputMethodController} instance.
   *
   * @returns { InputMethodController } Current **InputMethodController** instance.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethod#getController
   */
  function getInputMethodController(): InputMethodController;

  /**
   * @brief Obtains an [InputMethodSetting]{@link inputMethod.InputMethodSetting} instance.
   *
   * @returns { InputMethodSetting } **InputMethodSetting** instance.
   * @throws { BusinessError } 12800007 - input method setter error. Possible cause:
   *     create InputMethodSetting object failed.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getSetting(): InputMethodSetting;

  /**
   * @brief Obtains an [InputMethodController]{@link inputMethod.InputMethodController} instance.
   *
   * @returns { InputMethodController } **InputMethodController** instance.
   * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
   *     create InputMethodController object failed.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getController(): InputMethodController;

  /**
   * @brief Obtains the default input method.
   *
   * @returns { InputMethodProperty } Default input method.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function getDefaultInputMethod(): InputMethodProperty;

  /**
   * @brief Get the default input method of a specified user.
   *
   * @param { int } [userId] - the user ID. If not provided:
   *     If the caller is not a user 0 application, the value defaults to the caller's user ID.
   *     If the caller is a user 0 application, the value defaults to the foreground user ID of the main screen.
   * @returns { InputMethodProperty } property of the default input method.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @throws { BusinessError } 12800023 - the specified user does not exist.
   * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
   * @throws { BusinessError } 12800025 - cross-user operation denied.
   *     Only user 0 applications are authorized for this operation.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getDefaultInputMethod(userId?: int): InputMethodProperty;

  /**
   * @brief Obtains the information about the input method configuration page ability.
   *
   * @returns { ElementName } Element name of the input method configuration page ability.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function getSystemInputMethodConfigAbility(): ElementName;

  /**
   * @brief Get the system input method config ability of a specified user.
   *
   * @param { int } [userId] - the user ID. If not provided:
   *     If the caller is not a user 0 application, the value defaults to the caller's user ID.
   *     If the caller is a user 0 application, the value defaults to the foreground user ID of the main screen.
   * @returns { ElementName } the information of system input method config ability.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @throws { BusinessError } 12800023 - the specified user does not exist.
   * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
   * @throws { BusinessError } 12800025 - cross-user operation denied.
   *     Only user 0 applications are authorized for this operation.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSystemInputMethodConfigAbility(userId?: int): ElementName;

  /**
   * @brief Switches to another input method. This API uses an asynchronous callback to return the result.
   * <br>
   * <br> > **NOTE**
   * <br> >
   * <br> > - In API versions 9 and 10, this API can only be called by system applications granted the 
   * **ohos.permission.CONNECT_IME_ABILITY** permission.
   * <br> >
   * <br> > - Since API version 11, this API can only be called by the current input method application.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } target - Target input method.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - permissions check fails. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function switchInputMethod(target: InputMethodProperty, callback: AsyncCallback<boolean>): void;

  /**
   * @brief Switches to another input method. This API uses a promise to return the result.
   * <br>
   * <br> > **NOTE**
   * <br> >
   * <br> > - In API versions 9 and 10, this API can only be called by system applications granted the 
   * **ohos.permission.CONNECT_IME_ABILITY** permission.
   * <br> >
   * <br> > - Since API version 11, this API can only be called by the current input method application.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } target - Target input method.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the switching is
   *     successful, and **false** means the opposite.
   * @throws { BusinessError } 201 - permissions check fails. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function switchInputMethod(target: InputMethodProperty): Promise<boolean>;

  /**
   * @brief Obtains the current input method. This API returns the result synchronously.
   *
   * @returns { InputMethodProperty } **InputmethodProperty** instance of the current input method.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentInputMethod(): InputMethodProperty;

  /**
   * @brief Get the current input method of a specified user.
   *
   * @param { int } [userId] - the user ID. If not provided:
   *     If the caller is not a user 0 application, the value defaults to the caller's user ID.
   *     If the caller is a user 0 application, the value defaults to the foreground user ID of the main screen.
   * @returns { InputMethodProperty } the property of the current input method.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @throws { BusinessError } 12800023 - the specified user does not exist.
   * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
   * @throws { BusinessError } 12800025 - cross-user operation denied.
   *     Only user 0 applications are authorized for this operation.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getCurrentInputMethod(userId?: int): InputMethodProperty;

  /**
   * @brief Switches to another subtype of this input method. This API uses an asynchronous callback to return the result.
   * <br>
   * <br> > **NOTE**
   * <br> >
   * <br> > - In API version 9, this API can only be called by system applications granted the 
   *  **ohos.permission.CONNECT_IME_ABILITY** permission.
   * <br> >
   * <br> > - In API version 10, this API can only be called by system applications and the current input method application,
   * and the **ohos.permission.CONNECT_IME_ABILITY** permission is required.
   * <br> >
   * <br> > - Since API version 11, this API can only be called by the current input method application.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodSubtype } target - Target input method subtype.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - permissions check fails. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function switchCurrentInputMethodSubtype(target: InputMethodSubtype, callback: AsyncCallback<boolean>): void;

  /**
   * @brief Switches to another subtype of this input method. This API uses a promise to return the result.
   * <br>
   * <br> > **NOTE**
   * <br> >
   * <br> > - In API version 9, this API can only be called by system applications granted the 
   * **ohos.permission.CONNECT_IME_ABILITY** permission.
   * <br> >
   * <br> > - In API version 10, this API can only be called by system applications and the current input method application,
   * and the **ohos.permission.CONNECT_IME_ABILITY** permission is required.
   * <br> >
   * <br> > - Since API version 11, this API can only be called by the current input method application.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodSubtype } target - Target input method subtype.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the switching is
   *     successful, and **false** means the opposite.
   * @throws { BusinessError } 201 - permissions check fails. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function switchCurrentInputMethodSubtype(target: InputMethodSubtype): Promise<boolean>;

  /**
   * @brief Obtains the current input method subtype.
   *
   * @returns { InputMethodSubtype } Current input method subtype.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentInputMethodSubtype(): InputMethodSubtype;

  /**
   * @brief Get the current input method subtype of a specified user.
   *
   * @param { int } [userId] - the user ID. If not provided:
   *     If the caller is not a user 0 application, the value defaults to the caller's user ID.
   *     If the caller is a user 0 application, the value defaults to the foreground user ID of the main screen.
   * @returns { InputMethodSubtype } the subtype of the current input method.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @throws { BusinessError } 12800023 - the specified user does not exist.
   * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
   * @throws { BusinessError } 12800025 - cross-user operation denied.
   *     Only user 0 applications are authorized for this operation.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getCurrentInputMethodSubtype(userId?: int): InputMethodSubtype;

  /**
   * @brief Switches to a specified subtype of a specified input method. This API uses an asynchronous callback to return the 
   * result.
   * <br> 
   * <br> > **NOTE**
   * <br> >
   * <br> > - In API versions 9 and 10, this API can only be called by system applications granted the 
   * **ohos.permission.CONNECT_IME_ABILITY** permission.
   * <br> >
   * <br> > - Since API version 11, this API can only be called by the current input method application.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } inputMethodProperty - Target input method.
   * @param { InputMethodSubtype } inputMethodSubtype - Target input method subtype.
   * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
   *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - permissions check fails. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function switchCurrentInputMethodAndSubtype(
    inputMethodProperty: InputMethodProperty,
    inputMethodSubtype: InputMethodSubtype,
    callback: AsyncCallback<boolean>
  ): void;

  /**
   * @brief Switches to a specified subtype of a specified input method. This API uses a promise to return the result.
   * <br>
   * <br> > **NOTE**
   * <br> >
   * <br> > - In API versions 9 and 10, this API can only be called by system applications granted the 
   * **ohos.permission.CONNECT_IME_ABILITY** permission.
   * <br> >
   * <br> > - Since API version 11, this API can only be called by the current input method application.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } inputMethodProperty - Target input method.
   * @param { InputMethodSubtype } inputMethodSubtype - Target input method subtype.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the switching is
   *     successful, and **false** means the opposite.
   * @throws { BusinessError } 201 - permissions check fails. [since 9 - 10]
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function switchCurrentInputMethodAndSubtype(
    inputMethodProperty: InputMethodProperty,
    inputMethodSubtype: InputMethodSubtype
  ): Promise<boolean>;

  /**
   * @brief Switches to another input method. This API uses a promise to return the result.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { string } bundleName - Bundle name of the target input method.
   * @param { string } [subtypeId] - Input method subtype.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function switchInputMethod(bundleName: string, subtypeId?: string): Promise<void>;

  /**
   * @brief Switch input method and subtype of a specified user.
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { string } bundleName - indicates the bundle name of the target input method.
   * @param { string } [subtypeId] - indicates the id of the input method subtype.
   *     If the param is not set, switch to the target input method with a default subtype.
   * @param { int } [userId] - the user ID. If not provided:
   *     If the caller is not a user 0 application, the value defaults to the caller's user ID.
   *     If the caller is a user 0 application, the value defaults to the foreground user ID of the main screen.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 - permissions check fails.
   * @throws { BusinessError } 202 - not system application.
   * @throws { BusinessError } 12800005 - configuration persistence error.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @throws { BusinessError } 12800023 - the specified user does not exist.
   * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
   * @throws { BusinessError } 12800025 - cross-user operation denied.
   *     Only user 0 applications are authorized for this operation.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function switchInputMethodWithUserId(bundleName: string, subtypeId?: string, userId?: int): Promise<void>;

  /**
   * @brief Enables or disables the simple keyboard.
   *
   * @param { boolean } enable - Whether to enable the simple keyboard. The value **true** means that the simple
   *     keyboard is enabled; the value **false** means the opposite.
   *     <br> The native edit box takes effect when it is focused next time, while the self-drawing component takes
   *     effect when the input method is attached by calling
   *     [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
   *     next time.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function setSimpleKeyboardEnabled(enable: boolean): void;
  
  /**
   * @brief Subscribes to attachment failure events. This API uses an asynchronous callback to return the result.
   *
   * @param { Callback<AttachFailureReason> } callback - Callback used to return the reason for attachment failure. This
   *     callback is only invoked when the attachment failure is triggered by the registrant's process.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  function onAttachmentDidFail(callback: Callback<AttachFailureReason>): void;

  /**
   * Unsubscribes from attachment failure events. This API uses an asynchronous callback to return the result.
   *
   * @param { Callback<AttachFailureReason> } [callback] - Callback used for unsubscription, which must be the same as
   *     that passed by the subscription API. If no parameter is specified, all callback functions for this event will
   *     be unsubscribed from.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  function offAttachmentDidFail(callback?: Callback<AttachFailureReason>): void;

  /**
   * @brief The callback of 'imeChange' event.
   *
   * @param { InputMethodProperty } inputMethodProperty - the property of current inputmethod.
   * @param { InputMethodSubtype } inputMethodSubtype - the subtype of current inputmethod.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type ImeChangeCallback = (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void;

  /**
   * The callback of the inputmethod change event which carries the user ID whose inputmethod is changed.
   *
   * @param { InputMethodProperty } inputMethodProperty - the property of current inputmethod.
   * @param { InputMethodSubtype } inputMethodSubtype - the subtype of current inputmethod.
   * @param { int } userId - the user ID whose inputmethod is changed.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type ImeChangeWithUserIdCallback =
      (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype, userId: int) => void;

  /**
   * @brief The callback of 'getLeftTextOfCursor' or 'getRightTextOfCursor' event.
   *
   * @param { int } length - the length of text.
   * @returns { string } represents the text in edit box.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type GetTextCallback = (length: int) => string;

  /**
   * @brief The callback of 'getTextIndexAtCursor' event.
   *
   * @returns { int } represents theindex number of text at cursor.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type GetTextIndexAtCursorCallback = () => int;

  /**
   * @brief In the following API examples, you must first use [getSetting]{@link inputMethod.getSetting} to obtain an 
   * **InputMethodSetting** instance, and then call the APIs using the obtained instance.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface InputMethodSetting {
    /**
     * Enables listening for the input method and subtype change event. This API uses an asynchronous callback to return
     * the result.
     *
     * @param { 'imeChange' } type - Listening type. The value is fixed at **'imeChange'**.
     * @param { function } callback - Callback used to return the input method attributes and subtype.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(
      type: 'imeChange',
      callback: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void;

    /**
     * @brief Disables listening for the input method and subtype change event. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { 'imeChange' } type - Listening type. The value is fixed at **'imeChange'**.
     * @param { function } [callback] - Callback used to return the input method attributes and subtype.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(
      type: 'imeChange',
      callback?: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void;

    /**
     * @brief Subscribes to the soft keyboard show event of the 
     * [input method panel]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel} in the fixed state. This API uses an 
     * asynchronous callback to return the result.
     *
     * @param { 'imeShow' } type - Event type, which is **'imeShow'**.
     * @param { function } callback - Callback used to return the soft keyboard information of the input method panel in
     *     the fixed state.
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'imeShow', callback: (info: Array<InputWindowInfo>) => void): void;

    /**
     * @brief Unsubscribes from the soft keyboard show event of the 
     * [input method panel]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel} in the fixed state.
     *
     * @param { 'imeShow' } type - Event type, which is **'imeShow'**.
     * @param { function } [callback] - Callback to unregister.
     *     <br>If this parameter is not specified, this API unregisters all callbacks for the specified event type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'imeShow', callback?: (info: Array<InputWindowInfo>) => void): void;

    /**
     * @brief Subscribes to the soft keyboard hide event of the 
     * [input method panel]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel} in the fixed state. This API uses an 
     * asynchronous callback to return the result.
     *
     * @param { 'imeHide' } type - Event type, which is **'imeHide'**.
     * @param { function } callback - Callback used to return the soft keyboard information of the input method panel in
     *     the fixed state.
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'imeHide', callback: (info: Array<InputWindowInfo>) => void): void;

    /**
     * @brief Unsubscribes from the soft keyboard hide event of the 
     * [input method panel]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel} in the fixed state.
     *
     * @param { 'imeHide' } type - Event type, which is **'imeHide'**.
     * @param { function } [callback] - Callback to unregister.
     *     <br>If this parameter is not specified, this API unregisters all callbacks for the specified event type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'imeHide', callback?: (info: Array<InputWindowInfo>) => void): void;

    /**
     * @brief Checks whether the input method panel of a specified type is shown.
     *
     * @param { PanelInfo } panelInfo - Information about the input method panel.
     * @returns { boolean } Whether the input method panel is shown.
     *     <br>- The value **true** means that the input method panel is shown.
     *     <br>- The value **false** means that the input method panel is hidden.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    isPanelShown(panelInfo: PanelInfo): boolean;

    /**
     * @brief Checks whether the input method panel of a specified type is shown on a specified screen.
     *
     * @param { PanelInfo } panelInfo - Information about the input method panel.
     * @param { long } displayId - Display ID.
     * @returns { boolean } Whether the input method panel is shown.
     *     <br>- The value **true** means that the input method panel is shown.
     *     <br>- The value **false** means that the input method panel is hidden.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    isPanelShown(panelInfo: PanelInfo, displayId: long): boolean;

    /**
     * @brief Obtains all subtypes of a specified input method. This API uses an asynchronous callback to return the result.
     *
     * @param { InputMethodProperty } inputMethodProperty - Input method.
     * @param { AsyncCallback<Array<InputMethodSubtype>> } callback - Callback used to return all subtypes of the
     *     specified input method.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listInputMethodSubtype(
      inputMethodProperty: InputMethodProperty,
      callback: AsyncCallback<Array<InputMethodSubtype>>
    ): void;

    /**
     * @brief Obtains all subtypes of a specified input method. This API uses a promise to return the result.
     *
     * @param { InputMethodProperty } inputMethodProperty - Input method.
     * @returns { Promise<Array<InputMethodSubtype>> } Promise used to return all subtypes of the specified input
     *     method.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listInputMethodSubtype(inputMethodProperty: InputMethodProperty): Promise<Array<InputMethodSubtype>>;

    /**
     * @brief Obtains all subtypes of this input method. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<InputMethodSubtype>> } callback - Callback used to return all subtypes of the
     *     current input method.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listCurrentInputMethodSubtype(callback: AsyncCallback<Array<InputMethodSubtype>>): void;

    /**
     * @brief Obtains all subtypes of this input method. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<InputMethodSubtype>> } Promise used to return all subtypes of the current input method.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listCurrentInputMethodSubtype(): Promise<Array<InputMethodSubtype>>;

    /**
     * @brief Get subtypes of a specified input method of a specified user.
     *
     * @param { string } bundleName - the bundle name of the specified input method.
     * @param { int } [userId] - the user ID. If not provided:
     *     If the caller is not a user 0 application, the value defaults to the caller's user ID.
     *     If the caller is a user 0 application, the value defaults to the foreground user ID of the main screen.
     * @returns { Array<InputMethodSubtype> } the subtype of target input method.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800023 - the specified user does not exist.
     * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
     * @throws { BusinessError } 12800025 - cross-user operation denied.
     *     Only user 0 applications are authorized for this operation.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getInputMethodSubtypes(bundleName: string, userId?: int): Array<InputMethodSubtype>;

    /**
     * @brief Obtains a list of activated or deactivated input methods. This API uses an asynchronous callback to return the 
     * result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An activated input method refers to an input method that is enabled. The default input method is enabled by 
     * default. Other input methods can be enabled or disabled as needed.
     * <br> >
     * <br> > The list of activated input methods includes the default input method and enabled input methods. The list of 
     * deactivated input methods includes all installed input methods except the enabled ones.
     *
     * @param { boolean } enable - Whether to return a list of activated input methods. The value **true** means to
     *     return a list of activated input methods, and **false** means to return a list of deactivated input methods.
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - Callback used to return a list of activated or
     *     deactivated input methods.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getInputMethods(enable: boolean, callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * @brief Obtains a list of activated or deactivated input methods. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An activated input method refers to an input method that is enabled. The default input method is enabled by 
     * default. Other input methods can be enabled or disabled as needed.
     * <br> >
     * <br> > The list of activated input methods includes the default input method and enabled input methods. The list of 
     * deactivated input methods includes all installed input methods except the enabled ones.
     *
     * @param { boolean } enable - Whether to return a list of activated input methods. The value **true** means to
     *     return a list of activated input methods, and **false** means to return a list of deactivated input methods.
     * @returns { Promise<Array<InputMethodProperty>> } Promise used to return a list of activated or deactivated input
     *     methods.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getInputMethods(enable: boolean): Promise<Array<InputMethodProperty>>;

    /**
     * @brief Obtains a list of activated or deactivated input methods. This API returns the result synchronously.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An activated input method refers to an input method that is enabled. The default input method is enabled by 
     * default. Other input methods can be enabled or disabled as needed.
     * <br> >
     * <br> > The list of activated input methods includes the default input method and enabled input methods. The list of 
     * deactivated input methods includes all installed input methods except the enabled ones.
     *
     * @param { boolean } enable - Whether to return a list of activated input methods. The value **true** means to
     *     return a list of activated input methods, and **false** means to return a list of deactivated input methods.
     * @returns { Array<InputMethodProperty> } List of activated or deactivated input methods.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getInputMethodsSync(enable: boolean): Array<InputMethodProperty>;

    /**
     * @brief List enabled or disabled input methods sync of a specified user.
     *
     * @param { boolean } enable - If true, collect enabled input methods.
     *     If false, collect disabled input methods.
     * @param { int } [userId] - the user ID. If not provided:
     *     If the caller is not a user 0 application, the value defaults to the caller's user ID.
     *     If the caller is a user 0 application, the value defaults to the foreground user ID of the main screen.
     * @returns { Array<InputMethodProperty> } the list of input methods.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800023 - the specified user does not exist.
     * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
     * @throws { BusinessError } 12800025 - cross-user operation denied.
     *     Only user 0 applications are authorized for this operation.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getInputMethodsSync(enable: boolean, userId?: int): Array<InputMethodProperty>;

    /**
     * @brief Obtains a list of all input methods. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - Callback used to return a list of all input
     *     methods.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethods(callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * @brief Obtains a list of all input methods. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<InputMethodProperty>> } Promise used to return a list of all input methods.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethods(): Promise<Array<InputMethodProperty>>;

    /**
     * @brief Obtains a list of all input methods. This API returns the result synchronously.
     *
     * @returns { Array<InputMethodProperty> } List of all input methods.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethodsSync(): Array<InputMethodProperty>;

    /**
     * @brief Get all input methods sync of a specified user.
     *
     * @param { int } [userId] - the user ID. If not provided:
     *     If the caller is not a user 0 application, the value defaults to the caller's user ID.
     *     If the caller is a user 0 application, the value defaults to the foreground user ID of the main screen.
     * @returns { Array<InputMethodProperty> } the list of all input methods.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800023 - the specified user does not exist.
     * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
     * @throws { BusinessError } 12800025 - cross-user operation denied.
     *     Only user 0 applications are authorized for this operation.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getAllInputMethodsSync(userId?: int): Array<InputMethodProperty>;

    /**
     * @brief Obtains a list of installed input methods. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - Callback used to return the list of installed
     *     input methods.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#getInputMethods
     */
    listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * @brief Obtains a list of installed input methods. This API uses a promise to return the result.
     *
     * @returns { Promise<Array<InputMethodProperty>> } Promise used to return the list of installed input methods.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#getInputMethods
     */
    listInputMethod(): Promise<Array<InputMethodProperty>>;

    /**
     * @brief Displays a dialog box for selecting an input method. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    showOptionalInputMethods(callback: AsyncCallback<boolean>): void;

    /**
     * @brief Displays a dialog box for selecting an input method. This API uses a promise to return the result.
     *
     * @returns { Promise<boolean> } Promise used to return the result. If the operation is successful, **err** is
     *     **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    showOptionalInputMethods(): Promise<boolean>;

    /**
     * @brief Displays a dialog box for selecting an input method. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    displayOptionalInputMethod(callback: AsyncCallback<void>): void;

    /**
     * @brief Displays a dialog box for selecting an input method. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    displayOptionalInputMethod(): Promise<void>;

    /**
     * @brief Obtains the input method state. This API uses a promise to return the result.
     *
     * @returns { Promise<EnabledState> } Promise used to return the result. **EnabledState.DISABLED** indicates that
     *     the input method is disabled, **EnabledState.BASIC_MODE** indicates that the input method is in basic mode,
     *     and **EnabledState.FULL_EXPERIENCE_MODE** indicates that the input method is in full experience mode.
     * @throws { BusinessError } 12800004 - not an input method application.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    getInputMethodState(): Promise<EnabledState>;

    /**
     * @brief Enables or disables an input method. This API uses a promise to return the result.
     * <br>
     * <br>**Example**
     * <br>
     * <br>```ts
     * <br>import { BusinessError } from '@kit.BasicServicesKit';
     * <br>
     * <br>function enableInputMethodSafely() {
     * <br>  const currentIme: inputMethod.InputMethodProperty = inputMethod.getCurrentInputMethod();
     * <br>  if (!currentIme) {
     * <br>    console.error("Failed to get current input method");
     * <br>    return;
     * <br>  }
     * <br>
     * <br>  inputMethod.getSetting()
     * <br>    .enableInputMethod(currentIme.name, currentIme.id, inputMethod.EnabledState.BASIC_MODE)
     * <br>    .then(() => {
     * <br>      console.info('Succeeded in enable inputmethod.');
     * <br>    })
     * <br>    .catch((err: BusinessError) => {
     * <br>      console.error(`Failed to enableInputMethod. Code: ${err.code}, message: ${err.message}`);
     * <br>    });
     * <br>}
     * <br>
     * <br>enableInputMethodSafely();
     * <br>```
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { string } bundleName - Bundle name of the input method.
     * @param { string } extensionName - Extension name of the input method.
     * @param { EnabledState } enabledState - Whether the input method is enabled.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800018 - input method is not found.
     * @throws { BusinessError } 12800019 - current operation cannot be applied to the preconfigured default input
     *     method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    enableInputMethod(bundleName: string, extensionName: string, enabledState: EnabledState): Promise<void>;

    /**
     * @brief Change the enabled state of an input method of a specified user.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { string } bundleName - Indicates the bundle name of the input method.
     * @param { string } extensionName - Indicates the extension name of the input method.
     * @param { EnabledState } enabledState - Indicates the enabledState to be changed.
     * @param { int } [userId] - the user ID. If not provided:
     *     If the caller is not a user 0 application, the value defaults to the caller's user ID.
     *     If the caller is a user 0 application, the value defaults to the foreground user ID of the main screen.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800018 - input method is not found.
     * @throws { BusinessError } 12800019 - current operation cannot be applied to the preconfigured
     *     default input method.
     * @throws { BusinessError } 12800023 - the specified user does not exist.
     * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
     * @throws { BusinessError } 12800025 - cross-user operation denied.
     *     Only user 0 applications are authorized for this operation.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enableInputMethod(
      bundleName: string, extensionName: string, enabledState: EnabledState, userId?: int): Promise<void>;

    /**
     * @brief Subscribe input method or subtype change.
     *
     * @param { ImeChangeCallback } callback - the callback called when the current input method changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onImeChange(callback: ImeChangeCallback): void;

    /**
     * @brief Unsubscribe input method or subtype change.
     *
     * @param { ImeChangeCallback } [callback] - the callback called when the current input method changes,
     *     when subscriber unsubscribes all callback functions, this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offImeChange(callback?: ImeChangeCallback): void;

    /**
     * @brief Subscribe to the input method change event.
     *
     * @param { ImeChangeWithUserIdCallback } callback - the callback called when the current input method changes.
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onImeChangeWithUserId(callback: ImeChangeWithUserIdCallback): void;

    /**
     * @brief Unsubscribe from the input method change event.
     *
     * @param { ImeChangeWithUserIdCallback } [callback] - the callback called when the current input method changes,
     *     when the subscriber unsubscribes all callbacks, this parameter can be left blank.
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offImeChangeWithUserId(callback?: ImeChangeWithUserIdCallback): void;

    /**
     * @brief Subscribes to input window show events.
     *
     * @param { Callback<Array<InputWindowInfo>> } callback - the callback called when input method shows.
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onImeShow(callback: Callback<Array<InputWindowInfo>>):void;

    /**
     * @brief Unsubscribe input window show event.
     *
     * @param { Callback<Array<InputWindowInfo>> } [callback] - the callback called when input method shows,
     *     when subscriber unsubscribes all callback functions, this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offImeShow(callback?: Callback<Array<InputWindowInfo>>):void;

    /**
     * @brief Subscribes to input window hidden events.
     *
     * @param { Callback<Array<InputWindowInfo>>} callback - the callback called when input method hides.
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    onImeHide(callback: Callback<Array<InputWindowInfo>>): void;

    /**
     * @brief Unsubscribe input window hide event.
     *
     * @param { Callback<Array<InputWindowInfo>> } [callback] - the callback called when input method hides,
     *     when subscriber unsubscribes all callback functions, this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    offImeHide(callback?: Callback<Array<InputWindowInfo>>): void;

    /**
     * @brief Obtains the default input method capabilities. To optimize performance, the returned **InputMethodProperty** 
     * object ensures that only the `name` and `id` attributes that uniquely identify the input method capability are 
     * correct. Other attributes may be empty.
     * <br>
     * <br>**Example**
     * <br>
     * <br>```ts
     * <br>try {
     * <br>  const defaultAbility: inputMethod.InputMethodProperty = inputMethod.getSetting().getDefaultInputMethodAbility();
     * <br>  console.info('Succeeded in getting default input method ability, name: ' + defaultAbility.name + ', id: ' + defaultAbility.id);
     * <br>} catch (err) {
     * <br>  console.error(`Failed to getDefaultInputMethodAbility. Code: ${err.code}, message: ${err.message}`);
     * <br>}
     * <br>```
     *
     * @returns { InputMethodProperty } Default input method attributes. Only the `name` and `id` attributes are
     *     guaranteed to be correct. Other attributes may be empty.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDefaultInputMethodAbility(): InputMethodProperty;

    /**
     * @brief Obtains the cursor information of a specified user. If the edit box does not notify the input method service of 
     * the cursor information, all attribute values returned are **0**.
     * <br>
     * <br>**Example**
     * <br>
     * <br>```ts
     * <br>import { BusinessError } from '@kit.BasicServicesKit';
     * <br>
     * <br>try {
     * <br>  let cursorInfo: inputMethod.CursorInfo = inputMethod.getSetting().getCursorInfo();
     * <br>  console.info(`get cursorInfo success, left: ${cursorInfo.left}, top: ${cursorInfo.top},
     * width: ${cursorInfo.width}, height: ${cursorInfo.height}, displayId: ${cursorInfo.displayId}`);
     * <br>} catch (err) {
     * <br>  let error = err as BusinessError;
     * <br>  console.error(`Failed to get cursorInfo. Code: ${error.code}, message: ${error.message}`);
     * <br>}
     * <br>```
     *
     * @param { int } [userId] - User ID.
     *     <br>If the caller is not an application of user 0, the value of this parameter is the user ID of the caller
     *     by default.
     *     <br> If the caller is an application of user 0, the value of this parameter is the foreground user ID of the
     *     main screen.
     * @returns { CursorInfo } Cursor information of the specified user.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1. No edit box is bound to the current input method application under the specified user.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible causes:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800023 - the specified user does not exist.
     * @throws { BusinessError } 12800024 - the specified user is not in the foreground.
     * @throws { BusinessError } 12800025 - cross-user operation denied.
     *     Only user 0 applications are authorized for this operation.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getCursorInfo(userId?: int): CursorInfo;
  }

  /**
   * @brief In the following API examples, you must first use [getController]{@link inputMethod.getController} to obtain an 
   * **InputMethodController** instance, and then call the APIs using the obtained instance.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 6 dynamic
   * @since 23 static
   */
  interface InputMethodController {
    /**
     * @brief Attaches a self-drawing component to the input method. This API uses an asynchronous callback to return the 
     * result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An input method can use the following features only when it has a self-drawing component attached to it: 
     * showing or hiding the keyboard, updating the cursor information, changing the selection range of the edit box, 
     * saving the configuration information, and listening for and processing the information or commands sent by the 
     * input method.
     * <br> >
     * <br> > If the window where the self-drawing component is located is set to be non-focusable via 
     * [setWindowFocusable]{@link @ohos.window:window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)},
     * the system cannot guarantee proper interaction between the self-drawing input component and the input method. 
     * If you want to draw an input box in a non-focusable window, refer to 
     * [Input Box and Input Method Interaction in Non-Focusable Windows](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md).
     *
     * @param { boolean } showKeyboard - Whether to start the input method keyboard after the self-drawing component is
     *     attached to the input method.
     *     <br>- **true** means to start the input method keyboard.
     *     <br>- **false** means not to start the input method keyboard.
     * @param { TextConfig } textConfig - Configuration of the edit box.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>): void;
    /**
     * @brief Attaches a self-drawing component to the input method. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An input method can use the following features only when it has a self-drawing component attached to it: 
     * showing or hiding the keyboard, updating the cursor information, changing the selection range of the edit box, 
     * saving the configuration information, and listening for and processing the information or commands sent by the 
     * input method.
     * <br> >
     * <br> > If the window where the self-drawing component is located is set to be non-focusable via 
     * [setWindowFocusable]{@link @ohos.window:window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)},
     * the system cannot guarantee proper interaction between the self-drawing input component and the input method. 
     * If you want to draw an input box in a non-focusable window, refer to 
     * [Input Box and Input Method Interaction in Non-Focusable Windows](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md).
     *
     * @param { boolean } showKeyboard - Whether to start the input method keyboard after the self-drawing component is
     *     attached to the input method.
     *     <br>- **true** means to start the input method keyboard.
     *     <br>- **false** means not to start the input method keyboard.
     * @param { TextConfig } textConfig - Configuration of the edit box.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    attach(showKeyboard: boolean, textConfig: TextConfig): Promise<void>;
    /**
     * @brief Attaches a self-drawing component to the input method. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An input method can use the following features only when it has a self-drawing component attached to it: 
     * showing or hiding the keyboard, updating the cursor information, changing the selection range of the edit box, 
     * saving the configuration information, and listening for and processing the information or commands sent by the 
     * input method.
     * <br> >
     * <br> > If the window where the self-drawing component is located is set to be non-focusable via 
     * [setWindowFocusable]{@link @ohos.window:window.Window.setWindowFocusable(isFocusable: boolean, callback: AsyncCallback<void>)},
     * the system cannot guarantee proper interaction between the self-drawing input component and the input method. 
     * If you want to draw an input box in a non-focusable window, refer to 
     * [Input Box and Input Method Interaction in Non-Focusable Windows](docroot://inputmethod/use-inputmethod-in-not-focusable-window.md).
     *
     * @param { boolean } showKeyboard - Whether to start the input method keyboard after the self-drawing component is
     *     attached to the input method.
     *     <br>- **true** means to start the input method keyboard.
     *     <br>- **false** means not to start the input method keyboard.
     * @param { TextConfig } textConfig - Configuration of the edit box.
     * @param { RequestKeyboardReason } requestKeyboardReason - Reason for requesting the keyboard.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    attach(showKeyboard: boolean, textConfig: TextConfig, requestKeyboardReason: RequestKeyboardReason): Promise<void>;
    /**
     * @brief Attaches a self-drawing component to the input method. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > An input method can use the following features only when it has a self-drawing component attached to it: 
     * showing or hiding the keyboard, updating the cursor information, changing the selection range of the edit box, 
     * saving the configuration information, and listening for and processing the information or commands sent by the 
     * input method.
     *
     * @param { UIContext } uiContext - **UIContext** instance.
     * @param { TextConfig } textConfig - Configuration of the edit box.
     * @param { AttachOptions } [attachOptions] - Additional options for binding.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    attachWithUIContext(uiContext: UIContext, textConfig: TextConfig, attachOptions?: AttachOptions): Promise<void>;

    /**
     * @brief Discards the text that is being typed. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called after the edit box is attached to an input method.
     *
     * @returns { Promise<void> } Promise used to return the result. Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @throws { BusinessError } 12800015 - the other side does not accept the request.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    discardTypingText(): Promise<void>;

    /**
     * @brief Enters the text editing mode. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > After the edit box is attached to an input method, this API can be called to start the soft keyboard and enter 
     * the text editing state.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    showTextInput(callback: AsyncCallback<void>): void;
    /**
     * @brief Enters the text editing mode. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > After the edit box is attached to an input method, this API can be called to start the soft keyboard and enter 
     * the text editing state.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    showTextInput(): Promise<void>;
    /**
     * @brief Enters the text editing mode. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > After the edit box is attached to an input method, this API can be called to start the soft keyboard and enter 
     * the text editing state.
     *
     * @param { RequestKeyboardReason } requestKeyboardReason - Reason for requesting the keyboard.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    showTextInput(requestKeyboardReason: RequestKeyboardReason): Promise<void>;
    /**
     * @brief Exits the text editing mode. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > If the soft keyboard is displayed when this API is called, it will be hidden.
     * <br> >
     * <br> > Calling this API does not detach the edit box from the input method. The edit box can call 
     * [showTextInput]{@link inputMethod.InputMethodController.showTextInput(callback: AsyncCallback<void>)} again to 
     * reenter the text editing mode.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hideTextInput(callback: AsyncCallback<void>): void;

    /**
     * @brief Exits the text editing mode. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > If the soft keyboard is displayed when this API is called, it will be hidden.
     * <br> >
     * <br> > Calling this API does not detach the edit box from the input method. The edit box can call 
     * [showTextInput]{@link inputMethod.InputMethodController.showTextInput(callback: AsyncCallback<void>)} again to 
     * reenter the text editing mode.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hideTextInput(): Promise<void>;

    /**
     * @brief Detaches the self-drawing component from the input method. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    detach(callback: AsyncCallback<void>): void;

    /**
     * @brief Detaches the self-drawing component from the input method. This API uses a promise to return the result.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    detach(): Promise<void>;

    /**
     * @brief Sets the window to be avoided by the input method. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > After the window ID of the application bound to the input method is passed in the API, the input method window 
     * will not cover the window holding the application.
     *
     * @param { int } windowId - Window ID of the application bound to the input method. The value must be an integer.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setCallingWindow(windowId: int, callback: AsyncCallback<void>): void;

    /**
     * @brief Sets the window to be avoided by the input method. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > After the window ID of the application bound to the input method is passed in the API, the input method window 
     * will not cover the window holding the application.
     *
     * @param { int } windowId - Window ID of the application bound to the input method. The value must be an integer.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setCallingWindow(windowId: int): Promise<void>;

    /**
     * @brief Updates the cursor information in this edit box. This API can be called to notify the input method of the cursor 
     * changes. This API uses an asynchronous callback to return the result.
     *
     * @param { CursorInfo } cursorInfo - Cursor information.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    updateCursor(cursorInfo: CursorInfo, callback: AsyncCallback<void>): void;

    /**
     * @brief Updates the cursor information in this edit box. This API can be called to notify the input method of the cursor 
     * changes. This API uses a promise to return the result.
     *
     * @param { CursorInfo } cursorInfo - Cursor information.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    updateCursor(cursorInfo: CursorInfo): Promise<void>;

    /**
     * @brief Updates the information about the selected text in this edit box, to notify the input method when the selected 
     * text content or text range changes. This API uses an asynchronous callback to return the result.
     *
     * @param { string } text - All input text.
     * @param { int } start - Start position of the selected text. The value is an integer greater than or equal to 0.
     * @param { int } end - End position of the selected text. The value is an integer greater than or equal to 0.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    changeSelection(text: string, start: int, end: int, callback: AsyncCallback<void>): void;

    /**
     * @brief Updates the information about the selected text in this edit box, to notify the input method when the selected 
     * text content or text range changes. This API uses a promise to return the result.
     *
     * @param { string } text - All input text.
     * @param { int } start - Start position of the selected text. The value is an integer greater than or equal to 0.
     * @param { int } end - End position of the selected text. The value is an integer greater than or equal to 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    changeSelection(text: string, start: int, end: int): Promise<void>;

    /**
     * @brief Updates the attribute information of this edit box. This API uses an asynchronous callback to return the result.
     *
     * @param { InputAttribute } attribute - Attribute information.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    updateAttribute(attribute: InputAttribute, callback: AsyncCallback<void>): void;

    /**
     * @brief Updates the attribute information of this edit box. This API uses a promise to return the result.
     *
     * @param { InputAttribute } attribute - Attribute information.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    updateAttribute(attribute: InputAttribute): Promise<void>;
    /**
     * @brief Ends this input session. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to end
     * the input session only when the edit box is focused.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    stopInputSession(callback: AsyncCallback<boolean>): void;

    /**
     * @brief Ends this input session. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to end
     * the input session only when the edit box is focused.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the operation is
     *     successful, and **false** means the opposite.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    stopInputSession(): Promise<boolean>;

    /**
     * @brief Ends this input session. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to end
     * the input session only when the edit box is focused.
     *
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodController#stopInputSession
     */
    stopInput(callback: AsyncCallback<boolean>): void;

    /**
     * @brief Ends this input session. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to end
     * the input session only when the edit box is focused.
     *
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the operation is
     *     successful, and **false** means the opposite.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodController#stopInputSession
     */
    stopInput(): Promise<boolean>;

    /**
     * @brief Shows the soft keyboard. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to 
     * show the soft keyboard only when the edit box is focused.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    showSoftKeyboard(callback: AsyncCallback<void>): void;

    /**
     * @brief Shows the soft keyboard. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to 
     * show the soft keyboard only when the edit box is focused.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    showSoftKeyboard(): Promise<void>;

    /**
     * @brief Shows the soft keyboard on a specified screen. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to 
     * show the soft keyboard only when the edit box is focused.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { long } displayId - Display ID.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    showSoftKeyboard(displayId: long): Promise<void>;

    /**
     * @brief Hides the soft keyboard. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to 
     * hide the soft keyboard only when the edit box is focused.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hideSoftKeyboard(callback: AsyncCallback<void>): void;

    /**
     * @brief Hides the soft keyboard. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to 
     * hide the soft keyboard only when the edit box is focused.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hideSoftKeyboard(): Promise<void>;

    /**
     * @brief Hides the soft keyboard on a specified screen. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method. That is, it can be called to 
     * hide the soft keyboard only when the edit box is focused.
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { long } displayId - Display ID.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 202 - not system application.
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    hideSoftKeyboard(displayId: long): Promise<void>;

    /**
     * @brief Sends the custom communication to the input method application. This API uses a promise to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This API can be called only when the edit box is attached to the input method and enter the edit mode, and the 
     * input method application is in full experience mode.
     * <br> >
     * <br> > The maximum length of **msgId** is 256 B, and the maximum length of **msgParam** is 128 KB.
     *
     * @param { string } msgId - Identifier of the custom data to be sent to the input method application.
     * @param { ArrayBuffer } [msgParam] - Message body of the custom data to be sent to the input method application.
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
     * @brief Registers or unregisters MessageHandler.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > The [MessageHandler]{@link inputMethod.MessageHandler} object is globally unique. After multiple registrations,
     * only the last registered object is valid and retained, and the 
     * [onTerminated]{@link inputMethod.MessageHandler.onTerminated()} callback of the penultimate registered object 
     * is triggered.
     * <br> >
     * <br> > If no parameter is set, unregister [MessageHandler]{@link inputMethod.MessageHandler}. Its 
     * [onTerminated]{@link inputMethod.MessageHandler.onTerminated()} callback will be triggered.
     *
     * @param { MessageHandler } [msgHandler] - This object receives custom communication data from the input method
     *     application through
     *     [onMessage]{@link inputMethod.MessageHandler.onMessage(msgId: string, msgParam?: ArrayBuffer)} and receives a
     *     message for terminating the subscription to this object through
     *     [onTerminated]{@link inputMethod.MessageHandler.onTerminated()}.
     *     <br>If no parameter is set, unregister [MessageHandler]{@link inputMethod.MessageHandler}. Its
     *     [onTerminated]{@link inputMethod.MessageHandler.onTerminated()} callback will be triggered.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    recvMessage(msgHandler?: MessageHandler): void;

    /**
     * @brief Enables listening for the select-by-range event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'selectByRange' } type - Listening type. The value is fixed at **'selectByRange'**.
     * @param { Callback<Range> } callback - Callback used to return the range of the text to be selected.
     *     <br>The application needs to select the text based on the range returned in the callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'selectByRange', callback: Callback<Range>): void;

    /**
     * @brief Disables listening for the select-by-range event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'selectByRange' } type - Listening type. The value is fixed at **'selectByRange'**.
     * @param { Callback<Range> } [callback] - Callback used for disable listening, which must be the same as that
     *     passed by the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'selectByRange', callback?: Callback<Range>): void;

    /**
     * @brief Enables listening for the select-by-cursor-movement event. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'selectByMovement' } type - Listening type. The value is fixed at **'selectByMovement'**.
     * @param { Callback<Movement> } callback - Callback used to return the direction in which the cursor moves.
     *     <br>The application needs to select the text based on the direction returned in the callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'selectByMovement', callback: Callback<Movement>): void;

    /**
     * @brief Disables listening for the select-by-cursor-movement event. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'selectByMovement' } type - Listening type. The value is fixed at **'selectByMovement'**.
     * @param { Callback<Movement> } [callback] - Callback used for disable listening, which must be the same as that
     *     passed by the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'selectByMovement', callback?: Callback<Movement>): void;

    /**
     * @brief Enables listening for the text insertion event of the input method. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { 'insertText' } type - Listening type. The value is fixed at **'insertText'**.
     * @param { function } callback - Callback used to return the text to be inserted.
     *     <br>The application needs to operate the content in the edit box based on the text content returned in the
     *     callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'insertText', callback: (text: string) => void): void;

    /**
     * @brief Disables listening for the text insertion event of the input method.
     *
     * @param { 'insertText' } type - Listening type. The value is fixed at **'insertText'**.
     * @param { function } [callback] - Callback used for disable listening, which must be the same as that passed by
     *     the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'insertText', callback?: (text: string) => void): void;

    /**
     * @brief Enables listening for the leftward delete event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'deleteLeft' } type - Listening type. The value is fixed at **'deleteLeft'**.
     * @param { function } callback - Callback used to return the length of the text to be deleted leftward.
     *     <br>The application needs to operate the content in the edit box based on the length returned in the
     *     callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'deleteLeft', callback: (length: number) => void): void;

    /**
     * @brief Disables listening for the leftward delete event.
     *
     * @param { 'deleteLeft' } type - Listening type. The value is fixed at **'deleteLeft'**.
     * @param { function } [callback] - Callback used for disable listening, which must be the same as that passed by
     *     the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'deleteLeft', callback?: (length: number) => void): void;

    /**
     * @brief Enables listening for the rightward delete event. This API uses an asynchronous callback to return the result.
     *
     * @param { 'deleteRight' } type - Listening type. The value is fixed at **'deleteRight'**.
     * @param { function } callback - Callback used to return the length of the text to be deleted rightward.
     *     <br>The application needs to operate the content in the edit box based on the length returned in the
     *     callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'deleteRight', callback: (length: number) => void): void;

    /**
     * @brief Disables listening for the rightward delete event.
     *
     * @param { 'deleteRight' } type - Listening type. The value is fixed at `deleteRight`.
     * @param { function } [callback] - Callback used for disable listening, which must be the same as that passed by
     *     the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'deleteRight', callback?: (length: number) => void): void;

    /**
     * @brief Enables listening for the soft keyboard status event of the input method. This API uses an asynchronous callback 
     * to return the result.
     *
     * @param { 'sendKeyboardStatus' } type - Listening type. The value is fixed at **'sendKeyboardStatus'**.
     * @param { function } callback - Callback used to return the soft keyboard status.
     *     <br>The application needs to perform operations based on the soft keyboard state returned in the callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'sendKeyboardStatus', callback: (keyboardStatus: KeyboardStatus) => void): void;

    /**
     * @brief Disables listening for the input method soft keyboard status event of the input method.
     *
     * @param { 'sendKeyboardStatus' } type - Listening type. The value is fixed at **'sendKeyboardStatus'**.
     * @param { function } [callback] - Callback used for disable listening. If this parameter is not specified,
     *     listening will be disabled for all callbacks corresponding to the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'sendKeyboardStatus', callback?: (keyboardStatus: KeyboardStatus) => void): void;

    /**
     * @brief Enables listening for the function key sending event of the input method. This API uses an asynchronous callback 
     * to return the result.
     *
     * @param { 'sendFunctionKey' } type - Listening type. The value is fixed at **'sendFunctionKey'**.
     * @param { function } callback - Callback used to return the function key information sent by the input method.
     *     <br>The application needs to perform operations based on the function key information returned in the
     *     callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'sendFunctionKey', callback: (functionKey: FunctionKey) => void): void;

    /**
     * @brief Disables listening for the function key sending event of the input method.
     *
     * @param { 'sendFunctionKey' } type - Listening type. The value is fixed at **'sendFunctionKey'**.
     * @param { function } [callback] - Callback used for disable listening, which must be the same as that passed by
     *     the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'sendFunctionKey', callback?: (functionKey: FunctionKey) => void): void;

    /**
     * @brief Enables listening for the cursor movement event of the input method. This API uses an asynchronous callback to 
     * return the result.
     *
     * @param { 'moveCursor' } type - Listening type. The value is fixed at **'moveCursor'**.
     * @param { function } callback - Callback used to return the cursor movement direction.
     *     <br>The application needs to change the cursor position based on the cursor movement direction returned in
     *     the callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'moveCursor', callback: (direction: Direction) => void): void;

    /**
     * @brief Disables listening for the cursor movement event of the input method.
     *
     * @param { 'moveCursor' } type - Listening type. The value is fixed at **'moveCursor'**.
     * @param { function } [callback] - Callback used for disable listening, which must be the same as that passed by
     *     the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'moveCursor', callback?: (direction: Direction) => void): void;

    /**
     * @brief Enables listening for the extended action handling event of the input method. This API uses an asynchronous 
     * callback to return the result.
     *
     * @param { 'handleExtendAction' } type - Listening type. The value is fixed at **'handleExtendAction'**.
     * @param { function } callback - Callback used to return the extended action type.
     *     <br>The application needs to perform operations based on the extended action type returned in the callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'handleExtendAction', callback: (action: ExtendAction) => void): void;

    /**
     * @brief Disables listening for the extended action handling event of the input method. This API uses an asynchronous 
     * callback to return the result.
     *
     * @param { 'handleExtendAction' } type - Listening type. The value is fixed at **'handleExtendAction'**.
     * @param { function } [callback] - Callback used for disable listening, which must be the same as that passed by
     *     the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'handleExtendAction', callback?: (action: ExtendAction) => void): void;

    /**
     * @brief Enables listening for the event of obtaining the length of text deleted leftward. This API uses an asynchronous 
     * callback to return the result.
     *
     * @param { 'getLeftTextOfCursor' } type - Listening type. The value is fixed at **'getLeftTextOfCursor'**.
     * @param { function } callback - Callback used to obtain the text of the specified length deleted leftward.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getLeftTextOfCursor', callback: (length: number) => string): void;

    /**
     * @brief Disables listening for the event of obtaining the length of text deleted leftward. This API uses an asynchronous 
     * callback to return the result.
     *
     * @param { 'getLeftTextOfCursor' } type - Listening type. The value is fixed at **'getLeftTextOfCursor'**.
     * @param { function } [callback] - Callback used for disable listening, which must be the same as that passed by
     *     the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getLeftTextOfCursor', callback?: (length: number) => string): void;

    /**
     * @brief Enables listening for the event of obtaining the length of text deleted rightward. This API uses an asynchronous 
     * callback to return the result.
     *
     * @param { 'getRightTextOfCursor' } type - Listening type. The value is fixed at **'getRightTextOfCursor'**.
     * @param { function } callback - Callback used to obtain the text of the specified length deleted rightward.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getRightTextOfCursor', callback: (length: number) => string): void;

    /**
     * @brief Disables listening for the event of obtaining the length of text deleted rightward. This API uses an asynchronous
     * callback to return the result.
     *
     * @param { 'getRightTextOfCursor' } type - Listening type. The value is fixed at **'getRightTextOfCursor'**.
     * @param { function } [callback] - Callback used for disable listening, which must be the same as that passed by
     *     the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getRightTextOfCursor', callback?: (length: number) => string): void;

    /**
     * @brief Enables listening for the event of obtaining the index of text at the cursor. This API uses an asynchronous 
     * callback to return the result.
     *
     * @param { 'getTextIndexAtCursor' } type - Listening type. The value is fixed at **'getTextIndexAtCursor'**.
     * @param { function } callback - Callback used to obtain the index of text at the cursor.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getTextIndexAtCursor', callback: () => number): void;

    /**
     * @brief Disables listening for the event of obtaining the index of text at the cursor. This API uses an asynchronous 
     * callback to return the result.
     *
     * @param { 'getTextIndexAtCursor' } type - Listening type. The value is fixed at **'getTextIndexAtCursor'**.
     * @param { function } [callback] - Callback used for disable listening, which must be the same as that passed by
     *     the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getTextIndexAtCursor', callback?: () => number): void;

    /**
     * @brief Subscribes to the event for text preview operations in an input method application. This API uses an asynchronous
     * callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > To use the text preview function, you need to subscribe to this event before calling 
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * and subscribe to this event together with 
     * [on('finishTextPreview')]{@link inputMethod.InputMethodController.on(type: 'finishTextPreview', callback: Callback<void>)}.
     *
     * @param { 'setPreviewText' } type - Event type, which is **'setPreviewText'**.
     * @param { SetPreviewTextCallback } callback - Callback used to return the result. It is used to receive and return
     *     the text preview.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    on(type: 'setPreviewText', callback: SetPreviewTextCallback): void;

    /**
     * @brief Unsubscribes from the event for text preview operations in an input method application. This API uses an 
     * asynchronous callback to return the result.
     *
     * @param { 'setPreviewText' } type - Event type, which is **'setPreviewText'**.
     * @param { SetPreviewTextCallback } [callback] - Callback used for disable listening, which must be the same as
     *     that passed by the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    off(type: 'setPreviewText', callback?: SetPreviewTextCallback): void;

    /**
     * @brief Subscribes to the event of finishing text preview. This API uses an asynchronous callback to return the result.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > To use the text preview function, you need to subscribe to this event before calling 
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * and subscribe to this event together with 
     * [on('setPreviewText')]{@link inputMethod.InputMethodController.on(type: 'setPreviewText', callback: SetPreviewTextCallback)}.
     *
     * @param { 'finishTextPreview' } type - Event type, which is **'finishTextPreview'**.
     * @param { Callback<void> } callback - Callback used to return the result. It is used to process the logic of
     *     finishing text preview. Return type: void
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    on(type: 'finishTextPreview', callback: Callback<void>): void;

    /**
     * @brief Unsubscribes from the event of finishing text preview. This API uses an asynchronous callback to return the 
     * result.
     *
     * @param { 'finishTextPreview' } type - Event type, which is **'finishTextPreview'**.
     * @param { Callback<void> } [callback] - Callback used for disable listening, which must be the same as that passed
     *     by the **on** API.
     *     <br>If this parameter is not specified, listening will be disabled for all callbacks corresponding to the
     *     specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    off(type: 'finishTextPreview', callback?: Callback<void>): void;

    /**
     * @brief Register a callback and when IME sends select event with range of selection,
     * the callback will be invoked.
     *
     * @param { Callback<Range> } callback - the callback called when the input method selects text by range.
     *     The range of selection is provided for this callback, and subscribers are expected to select
     *     corresponding text in callback according to the range.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectByRange(callback: Callback<Range>): void;
    /**
     * @brief Unregister the callback of selectedByRange.
     *
     * @param { Callback<Range> } [callback] - the callback called when the input method selects text by range.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectByRange(callback?: Callback<Range>): void;

    /**
     * @brief Register a callback and when IME sends select event witch movement of cursor,
     * the callback will be invoked.
     *
     * @param { Callback<Movement> } callback - the callback called when the input method selects text by movement.
     *     The movement of the cursor is provided for this callback, and subscribers are expected to select
     *     corresponding text in callback according to themovement.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectByMovement(callback: Callback<Movement>): void;
    /**
     * @brief Unregister the callback of selectedByMovement.
     *
     * @param { Callback<Movement> } [callback] - the callback called when the input method selects text by movement.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectByMovement(callback?: Callback<Movement>): void;

   /**
     * @brief Register a callback and when IME sends insert text event, the callback will be invoked.
     *
     * @param { Callback<string> } callback - the callback called when the input method inserts text.
     *     Subscribers are expected to process the inserted text and update changes in editor by
     *     changeSelection and updateCursor as needed.
     * @throws  { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onInsertText(callback: Callback<string>): void;
  /**
     * @brief Unregister the callback of insertText.
     *
     * @param { Callback<string> } [callback] - the callback called when the input method inserts text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offInsertText(callback?: Callback<string>): void;

   /**
     * @brief Register a callback and when IME sends delete left event with length,
     * the callback will be invoked.
     *
     * @param { Callback<int> } callback - the callback called when the input method deletes text
     *     to the left of the cursor. The length of delete is provided for this callback.
     *     Subscribers are expected to delete specified length of text to the left of the cursor and
     *     update changes in editor by changeSelection and updateCursor as needed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onDeleteLeft(callback: Callback<int>): void;
   /**
     * @brief Unregister the callback of deleteLeft.
     *
     * @param { Callback<int> } [callback] - the callback called when the input method deletes text
     *     to the left of the cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offDeleteLeft(callback?: Callback<int>): void;

    /**
     * @brief Register a callback and when IME sends delete right event with length,
     * the callback will beinvoked.
     *
     * @param { Callback<int> } callback - the callback called whenthe input method deletes text
     *     to theright of the cursor. The length of delete is provided for this callback.
     *     Subscribers are expected to delete specified length of text to the right of the cursor and
     *     update changes in editor by changeSelection and updateCursor as needed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onDeleteRight(callback: Callback<int>): void;
  /**
     * @brief Unregister the callback of deleteRight.
     *
     * @param { Callback<int> } [callback] - the callback called when the input method deletes text
     *     to the right of the cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offDeleteRight(callback?: Callback<int>): void;

    /**
     * @brief Register a callback and when IME sends keyboard status, the callback will be invoked.
     *
     * @param { Callback<KeyboardStatus> } callback - the callback called when the input method send keyboard's status.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSendKeyboardStatus(callback: Callback<KeyboardStatus>): void;
   /**
     * @brief Unregister the callback of sendKeyboardStatus.
     *
     * @param { Callback<KeyboardStatus> } [callback] - the callback called when the inputmethod send
     *     keyboard's status.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSendKeyboardStatus(callback?: Callback<KeyboardStatus>): void;

   /**
     * @brief Register a callback and whenIME sends functionKey, the callback will be invoked.
     *
     * @param { Callback<FunctionKey> } callback - the callback called when the input method send function key.
     *     The functionKey is provided for this callback. Subscribers are expected to complete the
     *     corresponding task based on the value of functionKey.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSendFunctionKey(callback: Callback<FunctionKey>): void;
    /**
     * @brief Unregister the callback of sendFunctionKey.
     *
     * @param { Callback<FunctionKey> } [callback] - the callback called when the input method send function key.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSendFunctionKey(callback?: Callback<FunctionKey>): void;

    /**
     * @brief Register a callback and when IME sends move cursor, the callback will be invoked.
     *
     * @param { Callback<Direction> } callback - the callback called when the input method moves cursor.
     *     The direction of cursor is provided for this callback. Subscribers are expected to move the cursor and
     *     update changes in editor by changeSelection and updateCursor.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onMoveCursor(callback: Callback<Direction>): void;
  /**
     * @brief Unregister the callback of moveCursor.
     *
     * @param { Callback<Direction> } [callback] - the callback called when the input method moves cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offMoveCursor(callback?: Callback<Direction>): void;

  /**
     * @brief Register a callback and when IME sends extend action code, the callback will be invoked.
     *
     * @param { Callback<ExtendAction> } callback - the callback called when the input method sends extend action.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onHandleExtendAction(callback: Callback<ExtendAction>): void;
  /**
     * @brief Unregister the callback of handleExtendAction.
     *
     * @param { Callback<ExtendAction> } [callback] - the callback called when the input method sends extend action.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offHandleExtendAction(callback?: Callback<ExtendAction>): void;

  /**
     * @brief Register a callback and when input method ability gets left text of cursor, the callback will be invoked.
     *
     * @param { GetTextCallback } callback - the callback called when the input method gets text to the left
     *     of the cursor. The callback must be a synchronization method and will block the input method application.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onGetLeftTextOfCursor(callback: GetTextCallback): void;
   /**
     * @brief Unregister the callback of getLeftTextofCursor event.
     *
     * @param { GetTextCallback } [callback] - the callback called when the input method gets text to the left
     *     of the cursor. The callback must be a synchronization method and will block the input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offGetLeftTextOfCursor(callback?: GetTextCallback): void;

   /**
     * @brief Register a callback and when input method ability gets right text of cursor, the callback will be invoked.
     *
     * @param { GetTextCallback } callback - the callback called when the input method gets text to the right
     *     of the cursor. The callback must be a synchronization method and will block the input method application.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onGetRightTextOfCursor(callback: GetTextCallback): void;
   /**
     * @brief Unregister the callback of getRightTextOfCursor event.
     *
     * @param { GetTextCallback } [callback] - the callback called when the input method gets text to the right
     *     of the cursor. The callback must be a synchronization method and will block the input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offGetRightTextOfCursor(callback?: GetTextCallback): void;

   /**
     * @brief Register a callback and when input method ability gets the text index at cursor, the callback will be invoked.
     *
     * @param { GetTextIndexAtCursorCallback } callback - the callback called when input method the gets cursor index.
     *     The callback must be a synchronization method, and should return the text index at the cursor.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onGetTextIndexAtCursor(callback: GetTextIndexAtCursorCallback): void;
   /**
     * @brief Unregister the callback of getTextIndexAtCursor.
     *
     * @param { GetTextIndexAtCursorCallback } [callback] - the callback called when the input method gets cursor index.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 static
     */
    offGetTextIndexAtCursor(callback?:GetTextIndexAtCursorCallback): void;

   /**
     * @brief <p>Subscribe 'setPreviewText' event.</p>
     * <p>To support the preview text feature, developers should subscribe to this event before calling attach.</p>
     *
     * @param { SetPreviewTextCallback } callback - the callback called when the input method setspreview text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSetPreviewText(callback: SetPreviewTextCallback): void;
   /**
     * @brief Unsubscribe 'setPreviewText' event.
     *
     * @param { SetPreviewTextCallback } [callback] - optional, the callback called when the input method
     *     sets preview text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 static
     */
    offSetPreviewText(callback?:SetPreviewTextCallback): void;

   /**
     * @brief <p>Subscribe 'finishTextPreview' event.</p>
     * <br><p>To support the preview text feature, developers should subscribe to this event before calling attach.</p>
     *
     * @param { Callback<void> } callback - the callback called when the input method finishes text preview.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onFinishTextPreview(callback: Callback<void>): void;
    /**
     * @brief Unsubscribe 'finishTextPreview' event.
     *
     * @param { Callback<void> } [callback] - optional, the callback called when the input method finishes text preview.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offFinishTextPreview(callback?: Callback<void>): void;
  }

  /**
   * @brief Describes the input method application attributes.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface InputMethodProperty {
    /**
     * @brief Name of the input method package. Mandatory.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodProperty#name
     */
    readonly packageName: string;

    /**
     * @brief Unique ID of the input method. Mandatory.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodProperty#id
     */
    readonly methodId: string;

    /**
     * @brief Mandatory. Name of the input method package.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly name: string;

    /**
     * @brief Mandatory. Unique identifier of an input method extension in an app. **id** and **name** form a globally unique 
     * identifier of the input method extension.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly id: string;

    /**
     * @brief Optional.
     * <br> 
     * <br>- When **InputMethodProperty** is used as the input parameter of an API for switching or querying, you do not 
     * need to set this field. You can use name and ID to uniquely specify an input method extension.
     * <br>- When **InputMethodProperty** is used as the return value of an API for querying (for example, 
     * [getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}), this field indicates the name of the input 
     * method extension displayed externally. Use the label configured for the InputMethodExtensionAbility. If no label 
     * is configured, the label of the application entry ability is automatically used. If no label is configured for 
     * the application entry ability, the label configured in **AppScope** is automatically used.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly label?: string;

    /**
     * @brief Optional.
     * <br>
     * <br>- When **InputMethodProperty** is used as the input parameter of an API for switching or querying, you do not 
     * need to set this field. You can use name and ID to uniquely specify an input method extension.
     * <br>- When **InputMethodProperty** is used as the return value of an API for querying (for example, 
     * [getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}), this field indicates the resource ID of the 
     * **label** field.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    readonly labelId?: long;

    /**
     * @brief Optional.
     * <br>
     * <br>- When **InputMethodProperty** is used as the input parameter of an API for switching or querying, you do not 
     * need to set this field. You can use name and ID to uniquely specify an input method extension.
     * <br>- When **InputMethodProperty** is used as the return value of an API for querying (for example, 
     * [getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}), this field indicates the input method icon 
     * data, which can be obtained through icon ID.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly icon?: string;

    /**
     * @brief Optional.
     * <br>
     * <br>- When **InputMethodProperty** is used as the input parameter of an API for switching or querying, you do not 
     * need to set this field. You can use name and ID to uniquely specify an input method extension.
     * <br>- When **InputMethodProperty** is used as the return value of an API for querying (for example, 
     * [getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}), this field indicates the resource ID of the 
     * **icon** field.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly iconId?: long;

    /**
     * @brief Optional.
     * <br>
     * <br>- When **InputMethodProperty** is used as the input parameter of an API for switching or querying, you do not 
     * need to set this field. You can use name and ID to uniquely specify an input method extension.
     * <br>- When **InputMethodProperty** is used as the return value of an API for querying (for example, 
     * [getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}), this field indicates whether the input method 
     * is enabled.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly enabledState?: EnabledState;

    /**
     * @brief Extra information about the input method. This parameter is reserved and currently has no specific meaning.
     * <br>
     * <br>- API version 10 and later: optional
     * <br>- API version 9: mandatory
     *
     * @type { object } [since 9 - 9]
     * @type { ?object } [since 10]
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    extra?: object;
  }

  /**
   * @brief Enumerates the directions of cursor movement of the input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum Direction {
    /**
     * @brief Upward.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_UP = 1,

    /**
     * @brief Downward.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_DOWN,

    /**
     * @brief Leftward.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_LEFT,

    /**
     * @brief Rightward.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_RIGHT
  }

  /**
   * @brief Describes the range of the selected text.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Range {
    /**
     * @brief Index of the first selected character in the text box. The value is an integer greater than or equal to 0, and 
     * cannot exceed the actual text length.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * @brief Index of the last selected character in the text box. The value is an integer greater than or equal to 0, and 
     * cannot exceed the actual text length. The **end** value must be greater than the **start** value.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    end: int;
  }

  /**
   * @brief Describes the direction in which the cursor moves when the text is selected.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Movement {
    /**
     * @brief Direction in which the cursor moves when the text is selected.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    direction: Direction;
  }

  /**
   * @brief Enumerates the text input types.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum TextInputType {
    /**
     * @brief None.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE = -1,

    /**
     * @brief Text.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    TEXT = 0,

    /**
     * @brief Multi-line.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    MULTILINE,

    /**
     * @brief Number.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NUMBER,

    /**
     * @brief Phone number.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE,

    /**
     * @brief Date.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    DATETIME,

    /**
     * @brief Email address.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    EMAIL_ADDRESS,

    /**
     * @brief URL.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    URL,

    /**
     * @brief Password.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    VISIBLE_PASSWORD,

    /**
     * @brief Numeric password.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    NUMBER_PASSWORD,

    /**
     * @brief Lock screen password.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCREEN_LOCK_PASSWORD,

    /**
     * @brief Username.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    USER_NAME,

    /**
     * @brief New password.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NEW_PASSWORD,

    /**
     * @brief Number with a decimal point.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NUMBER_DECIMAL,

    /**
     * @brief Verification code.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    ONE_TIME_CODE
  }

  /**
   * @brief Enumerates the function types represented by the Enter key of the input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum EnterKeyType {
    /**
     * @brief Not specified.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * @brief None.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE,

    /**
     * @brief Go.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    GO,

    /**
     * @brief Search.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SEARCH,

    /**
     * @brief Send.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SEND,

    /**
     * @brief Next.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NEXT,

    /**
     * @brief Done.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    DONE,

    /**
     * @brief Previous.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PREVIOUS,

    /**
     * @brief Line break.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    NEWLINE
  }

  /**
   * @brief Enumerates the soft keyboard states of the input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum KeyboardStatus {
    /**
     * @brief None.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * @brief Hidden.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    HIDE = 1,

    /**
     * @brief Shown.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SHOW = 2
  }

  /**
   * @brief Describes the attributes of the edit box, including the text input type and Enter key function type.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface InputAttribute {
    /**
     * @brief Enumerates the text input types.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    textInputType: TextInputType;

    /**
     * @brief Function type represented by the Enter key.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    enterKeyType: EnterKeyType;

    /**
     * @brief Placeholder information set for the edit box.
     * <br>
     * <br>- When placeholder information is set for the edit box, the length cannot exceed 255 characters (a placeholder 
     * longer than 255 characters will be automatically truncated to 255 characters). It is used to prompt or guide 
     * users to enter temporary text or symbols. (For example, the placeholder prompts whether the input item is 
     * mandatory.)
     * <br>- If no placeholder is set for the edit box, the value is an empty string by default.
     * <br>- This field is provided for the input method application when 
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * is called.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    placeholder?: string;

    /**
     * @brief Whether the editor supports consuming key events.
     *
     * @default false
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    consumeKeyEvents?: boolean;

    /**
     * @brief Ability name set for the edit box.
     * <br>
     * <br>- If the ability name is set for the edit box, the length cannot exceed 127 characters. (A name longer than 127 
     * characters will be automatically truncated to 127 characters.)
     * <br>- If the ability name is not set for the edit box, the value is an empty string by default.
     * <br>- This field is provided for the input method application when 
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * is called.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName?: string;
  }

  /**
   * @brief Describes the type of the input method function key.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface FunctionKey {
    /**
     * @brief Function type represented by the Enter key of the input method.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    enterKeyType: EnterKeyType;
  }

  /**
   * @brief Represents the cursor information.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface CursorInfo {
    /**
     * @brief Horizontal coordinate of the cursor, in px. The value must be an integer. The minimum value is 0 and the maximum 
     * value is the width of the current screen.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    left: double;

    /**
     * @brief Vertical coordinate of the cursor, in px. The value must be an integer. The minimum value is 0 and the maximum 
     * value is the height of the current screen.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    top: double;

    /**
     * @brief Width of the cursor, in px. The value must be an integer. The minimum value is 0 and the maximum value is the 
     * width of the current screen.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    width: double;

    /**
     * @brief Height of the cursor, in px. The value must be an integer. The minimum value is 0 and the maximum value is the 
     * height of the current screen.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    height: double;

    /**
     * @brief ID of the monitor where the cursor is located.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    displayId?: long;
  }

  /**
   * @brief Describes the configuration of the edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface TextConfig {
    /**
     * @brief Edit box attribute.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    inputAttribute: InputAttribute;

    /**
     * @brief Cursor information.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    cursorInfo?: CursorInfo;

    /**
     * @brief Text selection range.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selection?: Range;

    /**
     * @brief ID of the window where the edit box is located. The value must be an integer.
     * <br>
     * <br>You are advised to call [getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties} to obtain the
     * window ID.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    windowId?: int;

    /**
     * @brief Whether the edit box is new. The value **true** means the edit box is new; the value **false** means the 
     * opposite.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    newEditBox?: boolean;

    /**
     * @brief Whether to capitalize the first letter in the edit box. If it is not set or is set to an invalid value, the first
     * letter is not capitalized by default.
     *
     * @default CapitalizeMode.NONE
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    capitalizeMode?: CapitalizeMode;
  }

  /**
   * @brief Describes the type of the extended edit action on the text box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ExtendAction {
    /**
     * @brief Select all.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SELECT_ALL = 0,

    /**
     * @brief Cut.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CUT = 3,

    /**
     * @brief Copy.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    COPY = 4,

    /**
     * @brief Paste.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PASTE = 5
  }

  /**
   * @brief Describes the window information of the input method keyboard.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface InputWindowInfo {
    /**
     * @brief Name of the input method keyboard window.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * @brief Horizontal coordinate of the upper left corner of the input method keyboard window, in px. The value must be an 
     * integer. The minimum value is 0 and the maximum value is the width of the current screen.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    left: int;

    /**
     * @brief Vertical coordinate of the upper left corner of the input method keyboard window, in px. The value must be an 
     * integer. The minimum value is 0 and the maximum value is the height of the current screen.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * @brief Width of the input method keyboard window, in px. The value must be an integer. The minimum value is 0 and the 
     * maximum value is the width of the current screen.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * @brief Height of the input method keyboard window, in px. The value must be an integer. The minimum value is 0 and the 
     * maximum value is the height of the current screen.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * @brief ID of the display where the soft keyboard window is located.
     * <br>
     * <br>**Model restriction**: This parameter can be used only in the stage model.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    displayId?: long;

    /**
     * @brief Indicates the ID of the user whose input window is shown.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    userId?: int;
  }

  /**
   * @brief Callback function on receiving a custom message.
   *
   * @param { string } msgId - the identifier of the message.
   * @param { ArrayBuffer } [msgParam] - the parameter of the custom message.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  type OnMessageCallback = (msgId: string, msgParam?: ArrayBuffer) => void;

  /**
   * @brief Represents a custom communication object.
   * <br>
   * <br> > **NOTE**
   * <br> >
   * <br> > You can register this object to receive custom communication data sent by the input method application. When the 
   * custom communication data is received, the 
   * [onMessage]{@link inputMethod.MessageHandler.onMessage(msgId: string, msgParam?: ArrayBuffer)} callback in this 
   * object is triggered.
   * <br> >
   * <br> > This object is globally unique. After multiple registrations, only the last registered object is valid and 
   * retained, and the [onTerminated]{@link inputMethod.MessageHandler.onTerminated()} callback of the penultimate 
   * registered object is triggered.
   * <br> >
   * <br> > If this object is unregistered, its [onTerminated]{@link inputMethod.MessageHandler.onTerminated()} callback will
   * be triggered.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  interface MessageHandler {
    /**
     * @brief Receives custom data sent by the input method application.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > This callback is triggered when the registered MeesageHandler receives custom communication data sent by the 
     * input method application.
     * <br> >
     * <br> > The **msgId** parameter is mandatory, and the **msgParam** parameter is optional. If only the custom **msgId** 
     * data is received, confirm it with the data sender.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onMessage: OnMessageCallback;

    /**
     * @brief Listens for MessageHandler termination.
     * <br>
     * <br> > **NOTE**
     * <br> >
     * <br> > When an application registers a new MessageHandler object, the **OnTerminated** callback of the previous 
     * registered MessageHandler object is triggered.
     * <br> >
     * <br> > When an application unregisters a MessageHandler object, the **OnTerminated** callback of the current 
     * registered MessageHandler object is triggered.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onTerminated: Callback<void>;

    /**
     * @brief This method is called when a custom message is received.
     *
     * @param { string } msgId - the identifier of the message.
     * @param { ArrayBuffer } [msgParam] - the parameter of the custom message.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */	
    onMessage(msgId: string, msgParam?: ArrayBuffer): void;	

    /**
     * @brief This method is called when a new message handler is set.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */
    onTerminated(): void;
  }

  /**
   * @brief Indicates whether the input method is enabled.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum EnabledState {
    /**
     * @brief Disabled.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    DISABLED = 0,

    /**
     * @brief Basic mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    BASIC_MODE,

    /**
     * @brief Full experience mode.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    FULL_EXPERIENCE_MODE
  }

  /**
   * @brief Enumerates the reasons for requesting the keyboard.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum RequestKeyboardReason {
    /**
     * @brief The keyboard request is triggered for no reason.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * @brief The keyboard request is triggered by a mouse operation.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    MOUSE = 1,
    /**
     * @brief The keyboard request is triggered by a touch operation.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    TOUCH = 2,
    /**
     * @brief The keyboard request is triggered by other reasons.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    OTHER = 20
  }

  /**
   * @brief Callback triggered when the input method framework needs to display the text preview.
   *
   * @param { string } text - Text preview.
   * @param { Range } range - Describes the range of the selected text.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 17 dynamic
   * @since 23 static
   */
  export type SetPreviewTextCallback = (text: string, range: Range) => void;

 /**
   * @brief Enumerates the modes of capitalizing the first letter of a text.
   * <br>
   * | Name| Value| Description|
   * | -------- | -- | -------- |
   * | NONE | 0 | The first letter is not capitalized.|
   * | SENTENCES | 1 | The first letter of each sentence is capitalized.|
   * | WORDS | 2 | The first letter of each word is capitalized.|
   * | CHARACTERS | 3 | All letters are capitalized.|
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CapitalizeMode {
    /**
     * @brief Capitalize nothing.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * @brief Capitalize the first letter of each sentence.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SENTENCES,

    /**
     * @brief Capitalize the first letter of each word.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    WORDS,

    /**
     * @brief Capitalize each letter.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    CHARACTERS
  }
  
  /**
   * @brief Enumerates the reasons for attachment failure.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  export enum AttachFailureReason {
    /**
     * @brief The caller does not belong to the application of the focused window.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    CALLER_NOT_FOCUSED = 0,

    /**
     * @brief The input method application is abnormal.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    IME_ABNORMAL,

    /**
     * @brief The input method framework service is abnormal.
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    SERVICE_ABNORMAL
  }
  /**
   * @brief Defines additional options for binding an input method.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface AttachOptions {
    /**
     * @brief Whether to start the input method keyboard after the self-drawing component is attached to the input method.
     * <br>
     * <br>- **true** means to start the input method keyboard.
     * <br>- **false** means not to start the input method keyboard.
     *
     * @default true
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    showKeyboard?: boolean;
    /**
     * @brief Reason for requesting the keyboard.
     *
     * @default RequestKeyboardReason.NONE
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    requestKeyboardReason?: RequestKeyboardReason;
  }
}

export default inputMethod;