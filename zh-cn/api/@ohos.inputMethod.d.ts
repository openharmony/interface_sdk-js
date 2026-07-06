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
 * @file
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
 * **inputMethod**模块面向通用前台应用（如备忘录、短信、设置等系统应用），提供输入法控制和管理能力，
 * 包括显示或隐藏软键盘、切换输入法、获取所有输入法列表等。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace inputMethod {
  /**
   * 键盘最大数量。最大值为128。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const MAX_TYPE_NUM: int;

  /**
   * 输入法设置
   *
   * @returns { InputMethodSetting } the object of InputMethodSetting
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethod#getSetting
   */
  function getInputMethodSetting(): InputMethodSetting;

  /**
   * 输入法控制器
   *
   * @returns { InputMethodController } the object of InputMethodController.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethod#getController
   */
  function getInputMethodController(): InputMethodController;

  /**
   * 输入法设置
   *
   * @returns { InputMethodSetting } the object of InputMethodSetting.
   * @throws { BusinessError } 12800007 - input method setter error. Possible cause:
   *     create InputMethodSetting object failed.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getSetting(): InputMethodSetting;

  /**
   * 输入法控制器
   *
   * @returns { InputMethodController } the object of InputMethodController.
   * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
   *     create InputMethodController object failed.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getController(): InputMethodController;

  /**
   * 获取默认输入法
   *
   * @returns { InputMethodProperty } property of the default input method.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function getDefaultInputMethod(): InputMethodProperty;

  /**
   * 获取指定用户的默认输入法。
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
   * 获取系统输入法配置能力
   *
   * @returns { ElementName } the information of system input method config ability.
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function getSystemInputMethodConfigAbility(): ElementName;

  /**
   * 获取指定用户的系统输入法配置能力。
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
   * 切换输入法。调用方必须是当前输入法。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } target - indicates the target input method.
   * @param { AsyncCallback<boolean> } callback - the callback of switchInputMethod.
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
   * 切换输入法。调用方必须是当前输入法。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } target - indicates the target input method.
   * @returns { Promise<boolean> } the promise returned by the function.
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
   * 获取当前输入法
   *
   * @returns { InputMethodProperty } the property of current inputmethod.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentInputMethod(): InputMethodProperty;

  /**
   * 获取指定用户的当前输入法。
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
   * 切换当前输入法子类型。调用方必须是当前输入法。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodSubtype } target - indicates the target input method subtype.
   * @param { AsyncCallback<boolean> } callback - the callback of switchCurrentInputMethodSubtype.
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
   * 切换当前输入法子类型。调用方必须是当前输入法。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodSubtype } target - indicates the target input method subtype.
   * @returns { Promise<boolean> } the promise returned by the function.
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
   * 获取当前输入法子类型
   *
   * @returns { InputMethodSubtype } the subtype of the current input method.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentInputMethodSubtype(): InputMethodSubtype;

  /**
   * 获取当前输入法子类型 of a specified user.
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
   * 切换输入法和子类型。调用方必须是当前输入法。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } inputMethodProperty - indicates the target input method.
   * @param { InputMethodSubtype } inputMethodSubtype - indicates the target input method subtype.
   * @param { AsyncCallback<boolean> } callback - the callback of switchCurrentInputMethodAndSubtype.
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
   * 切换输入法和子类型。调用方必须是当前输入法。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } inputMethodProperty - indicates the target input method.
   * @param { InputMethodSubtype } inputMethodSubtype - indicates the target input method subtype.
   * @returns { Promise<boolean> } the promise returned by the function.
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
   * 切换到另一个输入法。此API使用promise返回结果。
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
   * 切换指定用户的输入法和子类型。
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
   * 设置简易键盘模式。
   *
   * @param { boolean } enable - indicates enable simple keyboard or not.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function setSimpleKeyboardEnabled(enable: boolean): void;
  
  /**
   * 订阅附件失败事件。
   *
   * @param { Callback<AttachFailureReason> } callback - the callback is invoked only when the attachment
   *     triggered by the registrant's process fails.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  function onAttachmentDidFail(callback: Callback<AttachFailureReason>): void;

  /**
   * 取消订阅附件失败事件。
   *
   * @param { Callback<AttachFailureReason> } [callback] - the callback is invoked only when the attachment
   *     triggered by the registrant's process fails. When subscriber unsubscribes all callback, this parameter
   *     can be left blank.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  function offAttachmentDidFail(callback?: Callback<AttachFailureReason>): void;

  /**
   * 'imeChange'事件的回调。
   *
   * @param { InputMethodProperty } inputMethodProperty - the property of current inputmethod.
   * @param { InputMethodSubtype } inputMethodSubtype - the subtype of current inputmethod.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type ImeChangeCallback = (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void;

  /**
   * 携带用户ID的输入法变更事件的回调，该用户ID表示输入法被变更的用户。
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
   * 'getLeftTextOfCursor'或'getRightTextOfCursor'事件的回调。
   *
   * @param { int } length - the length of text.
   * @returns { string } represents the text in edit box.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type GetTextCallback = (length: int) => string;

  /**
   * 'getTextIndexAtCursor'事件的回调。
   *
   * @returns { int } represents theindex number of text at cursor.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type GetTextIndexAtCursorCallback = () => int;

  /**
   * In the following API examples, you must first use [getSetting]{@link @ohos.inputMethod:inputMethod.getSetting} to 
   * obtain an **InputMethodSetting** instance, and then call the APIs using the obtained instance.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface InputMethodSetting {
    /**
     * 订阅输入法或子类型变更。
     *
     * @param { 'imeChange' } type - Indicates the event type.
     * @param { function } callback - the callback of 'imeChange'
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(
      type: 'imeChange',
      callback: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void;

    /**
     * 取消订阅输入法或子类型变更。
     *
     * @param { 'imeChange' } type - Indicates the event type.
     * @param { function } [callback] - the callback of 'imeChange',
     *     when subscriber unsubscribes all callback functions of event 'imeChange', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(
      type: 'imeChange',
      callback?: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void;

    /**
     * 订阅[输入法面板]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel}处于固定状态时的软键盘显示事件。
     * 此API使用异步回调返回结果。
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
     * 取消订阅[输入法面板]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel}处于固定状态时的软键盘显示事件。
     *
     * @param { 'imeShow' } type - Event type, which is **'imeShow'**.
     * @param { function } [callback] - Callback to unregister.<br>If this parameter is not specified, this API
     *     unregisters all callbacks for the specified event type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'imeShow', callback?: (info: Array<InputWindowInfo>) => void): void;

    /**
     * 订阅[输入法面板]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel}处于固定状态时的软键盘隐藏事件。
     * 此API使用异步回调返回结果。
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
     * 取消订阅[输入法面板]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel}处于固定状态时的软键盘隐藏事件。
     *
     * @param { 'imeHide' } type - Event type, which is **'imeHide'**.
     * @param { function } [callback] - Callback to unregister.<br>If this parameter is not specified, this API
     *     unregisters all callbacks for the specified event type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'imeHide', callback?: (info: Array<InputWindowInfo>) => void): void;

    /**
     * 检查指定类型的输入法面板是否显示。
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
     * 检查指定类型的输入法面板是否在指定屏幕上显示。
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
     * 列出指定输入法的子类型。
     *
     * @param { InputMethodProperty } inputMethodProperty - the property of the specified inputmethod.
     * @param { AsyncCallback<Array<InputMethodSubtype>> } callback - the callback of listInputMethodSubtype.
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
     * 列出指定输入法的子类型。
     *
     * @param { InputMethodProperty } inputMethodProperty - Indicates the specified input method.
     * @returns { Promise<Array<InputMethodSubtype>> } the promise returned by the function.
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
     * 列出当前输入法的子类型
     *
     * @param { AsyncCallback<Array<InputMethodSubtype>> } callback - the callback of listCurrentInputMethodSubtype.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listCurrentInputMethodSubtype(callback: AsyncCallback<Array<InputMethodSubtype>>): void;

    /**
     * 列出当前输入法的子类型
     *
     * @returns { Promise<Array<InputMethodSubtype>> } the promise returned by the function.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listCurrentInputMethodSubtype(): Promise<Array<InputMethodSubtype>>;

    /**
     * 获取指定用户的指定输入法的子类型。
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
     * 列出输入法
     *
     * @param { boolean } enable -
     *     If true, collect enabled input methods.
     *     If false, collect disabled input methods.
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - the callback of getInputMethods.
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
     * 列出输入法
     *
     * @param { boolean } enable -
     *     If true, collect enabled input methods.
     *     If false, collect disabled input methods.
     * @returns { Promise<Array<InputMethodProperty>> } the promise returned by the function.
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
     * 同步列出已启用或已禁用的输入法
     *
     * @param { boolean } enable -
     *     If true, collect enabled input methods.
     *     If false, collect disabled input methods.
     * @returns { Array<InputMethodProperty> } the list of inputmethod.
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
     * 同步列出已启用或已禁用的输入法 of a specified user.
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
     * 列出所有输入法
     *
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - the callback of getInputMethods.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethods(callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * 列出所有输入法
     *
     * @returns { Promise<Array<InputMethodProperty>> } the promise returned by the function.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethods(): Promise<Array<InputMethodProperty>>;

    /**
     * 列出所有输入法 sync
     *
     * @returns { Array<InputMethodProperty> } the list of all inputmethod.
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethodsSync(): Array<InputMethodProperty>;

    /**
     * 同步获取指定用户的所有输入法。
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
     *
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - the callback of listInputMethod.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#getInputMethods
     */
    listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     *
     * @returns { Promise<Array<InputMethodProperty>> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#getInputMethods
     */
    listInputMethod(): Promise<Array<InputMethodProperty>>;

    /**
     * 显示输入法设置扩展对话框
     *
     * @param { AsyncCallback<boolean> } callback - the callback of showOptionalInputMethods.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    showOptionalInputMethods(callback: AsyncCallback<boolean>): void;

    /**
     * 显示输入法设置扩展对话框
     *
     * @returns { Promise<boolean> } the promise returned by the function.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    showOptionalInputMethods(): Promise<boolean>;

    /**
     *
     * @param { AsyncCallback<void> } callback - the callback of displayOptionalInputMethod.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    displayOptionalInputMethod(callback: AsyncCallback<void>): void;

    /**
     *
     * @returns { Promise<void> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    displayOptionalInputMethod(): Promise<void>;

    /**
     * 输入法应用调用此接口获取其自身的启用状态。
     *
     * @returns { Promise<EnabledState> } the promise returned by the function.
     * @throws { BusinessError } 12800004 - not an input method application.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    getInputMethodState(): Promise<EnabledState>;

    /**
     * 启用或禁用输入法。此API使用promise返回结果。
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
     * 更改指定用户的输入法的启用状态。
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
     * 订阅输入法或子类型变更。
     *
     * @param { ImeChangeCallback } callback - the callback called when the current input method changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onImeChange(callback: ImeChangeCallback): void;

    /**
     * 取消订阅输入法或子类型变更。
     *
     * @param { ImeChangeCallback } [callback] - the callback called when the current input method changes,
     *     when subscriber unsubscribes all callback functions, this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offImeChange(callback?: ImeChangeCallback): void;

    /**
     * 订阅输入法变更事件。
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
     * 取消订阅输入法变更事件。
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
     * 订阅输入法窗口显示事件。
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
     * 取消订阅输入法窗口显示事件。
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
     * 订阅输入法窗口隐藏事件。
     *
     * @param { Callback<Array<InputWindowInfo>>} callback - the callback called when input method hides.
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    onImeHide(callback: Callback<Array<InputWindowInfo>>): void;

    /**
     * 取消订阅输入法窗口隐藏事件。
     *
     * @param { Callback<Array<InputWindowInfo>> } [callback] - the callback called when input method hides,
     *     when subscriber unsubscribes all callback functions, this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    offImeHide(callback?: Callback<Array<InputWindowInfo>>): void;

    /**
     * <p>获取默认输入法能力。</p>
     * <p>为优化性能，返回的InputMethodProperty对象仅包含可以唯一标识输入法的'name'和'id'属性。</p>
     *
     * @returns { InputMethodProperty } property of the default input method.Only contains 'name' and 'id' properties.
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
     * 获取指定用户的光标信息。
     *
     * @param { int } [userId] - the user ID. If not provided:
     *     If the caller is not a user 0 application, the value defaults to the caller's user ID.
     *     If the caller is a user 0 application, the value defaults to the foreground user ID of the main screen.
     *     The value should be an integer.
     * @returns { CursorInfo } the information of the cursor of the specified display.
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
   * A control class that encapsulates APIs for input method management, which can only be invoked after an 
   * **InputMethodController** instance is obtained via 
   * [getController]{@link @ohos.inputMethod:inputMethod.getController}.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 6 dynamic
   * @since 23 static
   */
  interface InputMethodController {
    /**
     * 将应用附加到输入法服务。
     *
     * @param { boolean } showKeyboard - show the keyboard or not when attach the input method.
     * @param { TextConfig } textConfig - indicates the config of the textInput.
     * @param { AsyncCallback<void> } callback - the callback of attach.
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
     * 将应用附加到输入法服务。
     *
     * @param { boolean } showKeyboard - show the keyboard or not when attach the input method.
     * @param { TextConfig } textConfig - indicates the config of the textInput.
     * @returns { Promise<void> } the promise returned by the function.
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
     * 将应用附加到输入法服务。
     *
     * @param { boolean } showKeyboard - show the keyboard or not when attach the input method.
     * @param { TextConfig } textConfig - indicates the config of the textInput.
     * @param { RequestKeyboardReason } requestKeyboardReason - requestKeyboardReason of show the keyboard .
     * @returns { Promise<void> } the promise returned by the function.
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
     * Attach application to the input method service with UI context.
     *
     * @param { UIContext } uiContext - indicates the ui context where the attachment will be performed.
     * @param { TextConfig } textConfig - indicates the config of the textInput.
     * @param { AttachOptions } [attachOptions] - indicates the attach options.
     * @returns { Promise<void> } the promise returned by the function.
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
     * 放弃输入的文本
     *
     * @returns { Promise<void> } the promise returned by the function.
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
     * 显示文本输入并开始输入。
     *
     * @param { AsyncCallback<void> } callback - the callback of showTextInput.
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
     * 显示文本输入并开始输入。
     *
     * @returns { Promise<void> } the promise returned by the function.
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
     * 显示文本输入并开始输入。
     *
     * @param { RequestKeyboardReason } requestKeyboardReason - requestKeyboardReason of show the keyboard .
     * @returns { Promise<void> } the promise returned by the function.
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
     * 隐藏文本输入并停止输入。
     *
     * @param { AsyncCallback<void> } callback - the callback of hideTextInput.
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
     * 隐藏文本输入并停止输入。
     *
     * @returns { Promise<void> } the promise returned by the function.
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
     * 将应用从输入法管理服务分离。
     *
     * @param { AsyncCallback<void> } callback - the callback of detach.
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
     * 将应用从输入法管理服务分离。
     *
     * @returns { Promise<void> } the promise returned by the function.
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
     * 通知系统当前绑定到输入法的应用窗口ID。正确设置后，客户端所在的窗口可以避免输入法窗口。
     *
     * @param { int } windowId - the window ID of the application currently bound to the input method.
     * @param { AsyncCallback<void> } callback - the callback of setCallingWindow.
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
     * 通知系统当前绑定到输入法的应用窗口ID。正确设置后，客户端所在的窗口可以避免输入法窗口。
     *
     * @param { int } windowId - the window ID of the application currently bound to the input method.
     * @returns { Promise<void> } the promise returned by the function.
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
     * 更新光标并通知输入法当前应用光标已更改。
     *
     * @param { CursorInfo } cursorInfo - the CursorInfo object.
     * @param { AsyncCallback<void> } callback - the callback of updateCursor.
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
     * 更新光标并通知输入法当前应用光标已更改。
     *
     * @param { CursorInfo } cursorInfo - the CursorInfo object.
     * @returns { Promise<void> } the promise returned by the function.
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
     * 通知输入法当前应用文本的所选文本和选择范围已更改。
     *
     * @param { string } text - the whole input text.
     * @param { int } start - start position of selected text.
     * @param { int } end - end position of selected text.
     * @param { AsyncCallback<void> } callback - the callback of changeSelection.
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
     * 通知输入法当前应用文本的所选文本和选择范围已更改。
     *
     * @param { string } text - the selected text.
     * @param { int } start - start position of selected text.
     * @param { int } end - end position of selected text.
     * @returns { Promise<void> } the promise returned by the function.
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
     * 更新输入文本的InputAttribute信息。
     *
     * @param { InputAttribute } attribute - the InputAttribute object.
     * @param { AsyncCallback<void> } callback - the callback of updateAttribute.
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
     * 更新输入文本的InputAttribute信息。
     *
     * @param { InputAttribute } attribute - the InputAttribute object.
     * @returns { Promise<void> } the promise returned by the function.
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
     * 停止输入会话
     *
     * @param { AsyncCallback<boolean> } callback - the callback of stopInputSession.
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
     * 停止输入会话
     *
     * @returns { Promise<boolean> } the promise returned by the function.
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
     * 停止输入
     *
     * @param { AsyncCallback<boolean> } callback - the callback of stopInput.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodController#stopInputSession
     */
    stopInput(callback: AsyncCallback<boolean>): void;

    /**
     * 停止输入
     *
     * @returns { Promise<boolean> } the promise returned by the function.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodController#stopInputSession
     */
    stopInput(): Promise<boolean>;

    /**
     * 显示软键盘。
     * 此API只能由系统应用调用。
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { AsyncCallback<void> } callback - the callback of showSoftKeyboard.
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
     * 显示软键盘。
     * 此API只能由系统应用调用。
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @returns { Promise<void> } the promise returned by the function.
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
     * 在指定屏幕上显示软键盘。此API使用promise返回结果。
     * 
     * > **NOTE**
     * >
     * > 此API只能在编辑框附加到输入法时调用。也就是说，只有在编辑框获得焦点时才能调用此API显示软键盘。
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
     * 隐藏软键盘。
     * 此API只能由系统应用调用。
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { AsyncCallback<void> } callback - the callback of hideSoftKeyboard.
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
     * 隐藏软键盘。
     * 此API只能由系统应用调用。
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @returns { Promise<void> } the promise returned by the function.
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
     * 在指定屏幕上隐藏软键盘。此API使用promise返回结果。
     * 
     * > **NOTE**
     * >
     * > 此API只能在编辑框附加到输入法时调用。也就是说，只有在编辑框获得焦点时才能调用此API隐藏软键盘。
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
     * 向输入法发送消息。
     *
     * @param { string } msgId - the identifier of the message. Max size is 256B.
     * @param { ?ArrayBuffer } [msgParam] - the param of the custom message. Max size is 128KB.
     * @returns { Promise<void> } the promise returned by the function.
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
     * 开始接收来自输入法的消息。
     *
     * @param { ?MessageHandler } [msgHandler] - optional, the handler of the custom message.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    recvMessage(msgHandler?: MessageHandler): void;

    /**
     * 注册回调，当IME发送带有选择范围的选择事件时，会调用该回调。
     *
     * @param { 'selectByRange' } type - event type, fixed as 'selectByRange'.
     * @param { Callback<Range> } callback - processes selectByRange command. The range of selection is provided for
     *     this callback, and subscribers are expected to select corresponding text in callback according to
     *     the range.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'selectByRange', callback: Callback<Range>): void;

    /**
     * 取消注册selectByRange的回调。
     *
     * @param { 'selectByRange' } type - event type, fixed as 'selectByRange'.
     * @param { Callback<Range> } [callback] - the callback of 'selectByRange',
     *     when subscriber unsubscribes all callback functions of event 'selectByRange', this parameter can be left
     *     blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'selectByRange', callback?: Callback<Range>): void;

    /**
     * 注册回调，当IME发送带有光标移动的选择事件时，会调用该回调。
     *
     * @param { 'selectByMovement' } type - event type, fixed as 'selectByMovement'.
     * @param { Callback<Movement> } callback - processes selectByMovement command. The movement of cursor is provided
     *     for this callback, and subscribers are expected to select corresponding text in callback according to
     *     the movement.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'selectByMovement', callback: Callback<Movement>): void;

    /**
     * 取消注册selectByMovement的回调。
     *
     * @param { 'selectByMovement' } type - event type, fixed as 'selectByMovement'.
     * @param { Callback<Movement> } [callback] - the callback of 'selectByMovement',
     *     when subscriber unsubscribes all callback functions of event 'selectByMovement', this parameter can be left
     *     blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'selectByMovement', callback?: Callback<Movement>): void;

    /**
     * 注册回调，当IME发送插入文本事件时，会调用该回调。
     *
     * @param { 'insertText' } type - event type, fixed as 'insertText'.
     * @param { function } callback - processes insertText command. The text of insert is provided for this callback.
     *     Subscribers are expected to process the inserted text and update changes in editor by changeSelection and
     *     updateCursor as needed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'insertText', callback: (text: string) => void): void;

    /**
     * 取消注册insertText的回调。
     *
     * @param { 'insertText' } type - event type, fixed as 'insertText'.
     * @param { function } [callback] - the callback of 'insertText',
     *     when subscriber unsubscribes all callback functions of event 'insertText', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'insertText', callback?: (text: string) => void): void;

    /**
     * 注册回调，当IME发送带有长度的向左删除事件时，会调用该回调。
     *
     * @param { 'deleteLeft' } type - event type, fixed as 'deleteLeft'.
     * @param { function } callback - processes deleteLeft command. The length of
     *     delete is provided for this callback. Subscribers are expected to delete specified length of text
     *     to the left of the cursor and update changes in editor by changeSelection and updateCursor as needed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'deleteLeft', callback: (length: number) => void): void;

    /**
     * 取消注册deleteLeft的回调。
     *
     * @param { 'deleteLeft' } type - event type, fixed as 'deleteLeft'.
     * @param { function } [callback] - the callback of 'deleteLeft',
     *     when subscriber unsubscribes all callback functions of event 'deleteLeft', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'deleteLeft', callback?: (length: number) => void): void;

    /**
     * 注册回调，当IME发送带有长度的向右删除事件时，会调用该回调。
     *
     * @param { 'deleteRight' } type - event type, fixed as 'deleteRight'.
     * @param { function } callback - processes deleteRight command. The length of
     *     delete is provided for this callback. Subscribers are expected to delete specified length of text
     *     to the right of the cursor and update changes in editor by changeSelection and updateCursor as needed.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'deleteRight', callback: (length: number) => void): void;

    /**
     * 取消注册deleteRight的回调。
     *
     * @param { 'deleteRight' } type - event type, fixed as 'deleteRight'.
     * @param { function } [callback] - the callback of 'deleteRight',
     *     when subscriber unsubscribes all callback functions of event 'deleteRight', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'deleteRight', callback?: (length: number) => void): void;

    /**
     * 注册回调，当IME发送键盘状态时，会调用该回调。
     *
     * @param { 'sendKeyboardStatus' } type - event type, fixed as 'sendKeyboardStatus'.
     * @param { function } callback - processes sendKeyboardStatus command.
     *     The keyboardStatus is provided for this callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'sendKeyboardStatus', callback: (keyboardStatus: KeyboardStatus) => void): void;

    /**
     * 取消注册sendKeyboardStatus的回调。
     *
     * @param { 'sendKeyboardStatus' } type - event type, fixed as 'sendKeyboardStatus'.
     * @param { function } [callback] - the callback of 'sendKeyboardStatus',
     *     when subscriber unsubscribes all callback functions of event 'sendKeyboardStatus', this parameter can be left
     *     blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'sendKeyboardStatus', callback?: (keyboardStatus: KeyboardStatus) => void): void;

    /**
     * 注册回调，当IME发送functionKey时，会调用该回调。
     *
     * @param { 'sendFunctionKey' } type - event type, fixed as 'sendFunctionKey'.
     * @param { function } callback - processes sendFunctionKey command.
     *     The functionKey is provided for this callback.Subscribers are expected to complete the
     *     corresponding task based on the value of functionKey.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'sendFunctionKey', callback: (functionKey: FunctionKey) => void): void;

    /**
     * 取消注册sendFunctionKey的回调。
     *
     * @param { 'sendFunctionKey' } type - event type, fixed as 'sendFunctionKey'.
     * @param { function } [callback] - the callback of 'sendFunctionKey',
     *     when subscriber unsubscribes all callback functions of event 'sendFunctionKey', this parameter can be left
     *     blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'sendFunctionKey', callback?: (functionKey: FunctionKey) => void): void;

    /**
     * 注册回调，当IME发送移动光标时，会调用该回调。
     *
     * @param { 'moveCursor' } type - event type, fixed as 'moveCursor'.
     * @param { function } callback - processes moveCursor command. The direction of
     *     cursor is provided for this callback. Subscribers are expected to move the cursor and update changes
     *     in editor by changeSelection and updateCursor.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'moveCursor', callback: (direction: Direction) => void): void;

    /**
     * 取消注册moveCursor的回调。
     *
     * @param { 'moveCursor' } type - event type, fixed as 'moveCursor'.
     * @param { function } [callback] - the callback of 'moveCursor',
     *     when subscriber unsubscribes all callback functions of event 'moveCursor', this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'moveCursor', callback?: (direction: Direction) => void): void;

    /**
     * 注册回调，当IME发送扩展动作代码时，会调用该回调。
     *
     * @param { 'handleExtendAction' } type - event type, fixed as 'handleExtendAction'.
     * @param { function } callback - processes handleExtendAction command. The action code
     *     is provided for this callback.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'handleExtendAction', callback: (action: ExtendAction) => void): void;

    /**
     * 取消注册handleExtendAction的回调。
     *
     * @param { 'handleExtendAction' } type - event type, fixed as 'handleExtendAction'.
     * @param { function } [callback] - the callback of 'handleExtendAction',
     *     when subscriber unsubscribes all callback functions of event 'handleExtendAction', this parameter can be left
     *     blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'handleExtendAction', callback?: (action: ExtendAction) => void): void;

    /**
     * 注册回调，当输入法能力获取光标左侧文本时，会调用该回调。
     *
     * @param { 'getLeftTextOfCursor' } type - event type, fixed as 'getLeftTextOfCursor'.
     * @param { function } callback - processes getLeftTextOfCursor command. The callback
     *     must be a synchronization method and will block the input method application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getLeftTextOfCursor', callback: (length: number) => string): void;

    /**
     * Unregister the callback of getLeftTextOfCursor event.
     *
     * @param { 'getLeftTextOfCursor' } type - event type, fixed as 'getLeftTextOfCursor'.
     * @param { function } [callback] - the callback of 'getLeftTextOfCursor',
     *     when subscriber unsubscribes all callback functions of event 'getLeftTextOfCursor', this parameter can be
     *     left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getLeftTextOfCursor', callback?: (length: number) => string): void;

    /**
     * 注册回调，当输入法能力获取光标右侧文本时，会调用该回调。
     *
     * @param { 'getRightTextOfCursor' } type - event type, fixed as 'getRightTextOfCursor'.
     * @param { function } callback - processes getRightTextOfCursor command. The callback
     *     must be a synchronization method and will block the input method application.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getRightTextOfCursor', callback: (length: number) => string): void;

    /**
     * 取消注册getRightTextOfCursor事件的回调。
     *
     * @param { 'getRightTextOfCursor' } type - event type, fixed as 'getRightTextOfCursor'.
     * @param { function } [callback] - the callback of 'getRightTextOfCursor',
     *     when subscriber unsubscribes all callback functions of event 'getRightTextOfCursor', this parameter can be
     *     left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getRightTextOfCursor', callback?: (length: number) => string): void;

    /**
     * 注册回调，当输入法能力获取光标处的文本索引时，会调用该回调。
     *
     * @param { 'getTextIndexAtCursor' } type - event type, fixed as 'getTextIndexAtCursor'.
     * @param { function } callback - processes getTextIndexAtCursor command. The callback
     *     must be a synchronization method, and should return the text index at the cursor.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getTextIndexAtCursor', callback: () => number): void;

    /**
     * 取消注册getTextIndexAtCursor的回调。
     *
     * @param { 'getTextIndexAtCursor' } type - event type, fixed as 'getTextIndexAtCursor'.
     * @param { function } [callback] - the callback of 'getTextIndexAtCursor',
     *     when subscriber unsubscribes all callback functions of event 'getTextIndexAtCursor', this parameter can be
     *     left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getTextIndexAtCursor', callback?: () => number): void;

    /**
     * <p>订阅'setPreviewText'事件。</p>
     * <p>为支持预览文本功能，开发人员应在调用attach之前订阅此事件。</p>
     *
     * @param { 'setPreviewText' } type - the type of subscribe event.
     * @param { SetPreviewTextCallback } callback - the callback of on('setPreviewText').
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    on(type: 'setPreviewText', callback: SetPreviewTextCallback): void;

    /**
     * 取消订阅'setPreviewText'事件。
     *
     * @param { 'setPreviewText' } type - the type of unsubscribe event.
     * @param { SetPreviewTextCallback } [callback] - optional, the callback of off('setPreviewText').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    off(type: 'setPreviewText', callback?: SetPreviewTextCallback): void;

    /**
     * <p>订阅'finishTextPreview'事件。</p>
     * <p>为支持预览文本功能，开发人员应在调用attach之前订阅此事件。</p>
     *
     * @param { 'finishTextPreview' } type - the type of subscribe event.
     * @param { Callback<void> } callback - the callback of on('finishTextPreview').
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    on(type: 'finishTextPreview', callback: Callback<void>): void;

    /**
     * 取消订阅'finishTextPreview'事件。
     *
     * @param { 'finishTextPreview' } type - the type of unsubscribe event.
     * @param { Callback<void> } [callback] - optional, the callback of off('finishTextPreview').
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    off(type: 'finishTextPreview', callback?: Callback<void>): void;

    /**
     * 注册回调，当IME发送带有选择范围的选择事件时，会调用该回调。
     *
     * @param { Callback<Range> } callback - the callback called when the input method selects text by range.
     *     The range of selection is provided for this callback, and subscribers are expected to select
     *     corresponding text in callback according to the range.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectByRange(callback: Callback<Range>): void;
    /**
     * 取消注册selectByRange的回调。
     *
     * @param { Callback<Range> } [callback] - the callback called when the input method selects text by range.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectByRange(callback?: Callback<Range>): void;

    /**
     * 注册回调，当IME发送带有光标移动的选择事件时，会调用该回调。
     *
     * @param { Callback<Movement> } callback - the callback called when the input method selects text by movement.
     *     The movement of the cursor is provided for this callback, and subscribers are expected to select
     *     corresponding text in callback according to themovement.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectByMovement(callback: Callback<Movement>): void;
    /**
     * 取消注册selectByMovement的回调。
     *
     * @param { Callback<Movement> } [callback] - the callback called when the input method selects text by movement.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectByMovement(callback?: Callback<Movement>): void;

   /**
     * 注册回调，当IME发送插入文本事件时，会调用该回调。
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
     * 取消注册insertText的回调。
     *
     * @param { Callback<string> } [callback] - the callback called when the input method inserts text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offInsertText(callback?: Callback<string>): void;

   /**
     * 注册回调，当IME发送带有长度的向左删除事件时，会调用该回调。
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
     * 取消注册deleteLeft的回调。
     *
     * @param { Callback<int> } [callback] - the callback called when the input method deletes text
     *     to the left of the cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offDeleteLeft(callback?: Callback<int>): void;

    /**
     * 注册回调，当IME发送带有长度的向右删除事件时，会调用该回调。
     *
     * @param { Callback<int> } callback - 当输入法删除光标右侧文本时调用的回调。
     *     回调中提供了删除的长度。订阅者需要删除光标右侧指定长度的文本，并
     *     通过changeSelection和updateCursor更新更改。
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onDeleteRight(callback: Callback<int>): void;
  /**
     * 取消注册deleteRight的回调。
     *
     * @param { Callback<int> } [callback] - the callback called when the input method deletes text
     *     to the right of the cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offDeleteRight(callback?: Callback<int>): void;

    /**
     * 注册回调，当IME发送键盘状态时，会调用该回调。
     *
     * @param { Callback<KeyboardStatus> } callback - the callback called when the input method send keyboard's status.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSendKeyboardStatus(callback: Callback<KeyboardStatus>): void;
   /**
     * 取消注册sendKeyboardStatus的回调。
     *
     * @param { Callback<KeyboardStatus> } [callback] - the callback called when the inputmethod send
     *     keyboard's status.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSendKeyboardStatus(callback?: Callback<KeyboardStatus>): void;

   /**
     * 注册回调，当IME发送functionKey时，会调用该回调。
     *
     * @param { Callback<FunctionKey> } callback - 当输入法发送功能键时调用的回调。
     *     回调中提供了functionKey。订阅者需要根据functionKey的值完成相应的任务。
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSendFunctionKey(callback: Callback<FunctionKey>): void;
    /**
     * 取消注册sendFunctionKey的回调。
     *
     * @param { Callback<FunctionKey> } [callback] - the callback called when the input method send function key.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSendFunctionKey(callback?: Callback<FunctionKey>): void;

    /**
     * 注册回调，当IME发送移动光标时，会调用该回调。
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
     * 取消注册moveCursor的回调。
     *
     * @param { Callback<Direction> } [callback] - the callback called when the input method moves cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offMoveCursor(callback?: Callback<Direction>): void;

  /**
     * 注册回调，当IME发送扩展动作代码时，会调用该回调。
     *
     * @param { Callback<ExtendAction> } callback - the callback called when the input method sends extend action.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onHandleExtendAction(callback: Callback<ExtendAction>): void;
  /**
     * 取消注册handleExtendAction的回调。
     *
     * @param { Callback<ExtendAction> } [callback] - the callback called when the input method sends extend action.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offHandleExtendAction(callback?: Callback<ExtendAction>): void;

  /**
     * 注册回调，当输入法能力获取光标左侧文本时，会调用该回调。
     *
     * @param { GetTextCallback } callback - the callback called when the input method gets text to the left
     *     of the cursor. The callback must be a synchronization method and will block the input method application.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onGetLeftTextOfCursor(callback: GetTextCallback): void;
   /**
     * 取消注册getLeftTextOfCursor事件的回调。
     *
     * @param { GetTextCallback } [callback] - the callback called when the input method gets text to the left
     *     of the cursor. The callback must be a synchronization method and will block the input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offGetLeftTextOfCursor(callback?: GetTextCallback): void;

   /**
     * 注册回调，当输入法能力获取光标右侧文本时，会调用该回调。
     *
     * @param { GetTextCallback } callback - the callback called when the input method gets text to the right
     *     of the cursor. The callback must be a synchronization method and will block the input method application.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onGetRightTextOfCursor(callback: GetTextCallback): void;
   /**
     * 取消注册getRightTextOfCursor事件的回调。
     *
     * @param { GetTextCallback } [callback] - the callback called when the input method gets text to the right
     *     of the cursor. The callback must be a synchronization method and will block the input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offGetRightTextOfCursor(callback?: GetTextCallback): void;

   /**
     * 注册回调，当输入法能力获取光标处的文本索引时，会调用该回调。
     *
     * @param { GetTextIndexAtCursorCallback } callback - the callback called when input method the gets cursor index.
     *     The callback must be a synchronization method, and should return the text index at the cursor.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onGetTextIndexAtCursor(callback: GetTextIndexAtCursorCallback): void;
   /**
     * 取消注册getTextIndexAtCursor的回调。
     *
     * @param { GetTextIndexAtCursorCallback } [callback] - the callback called when the input method gets cursor index.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 static
     */
    offGetTextIndexAtCursor(callback?:GetTextIndexAtCursorCallback): void;

   /**
     * <p>订阅'setPreviewText'事件。</p>
     * <p>为支持预览文本功能，开发人员应在调用attach之前订阅此事件。</p>
     *
     * @param { SetPreviewTextCallback } callback - the callback called when the input method setspreview text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSetPreviewText(callback: SetPreviewTextCallback): void;
   /**
     * 取消订阅'setPreviewText'事件。
     *
     * @param { SetPreviewTextCallback } [callback] - optional, the callback called when the input method
     *     sets preview text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 static
     */
    offSetPreviewText(callback?:SetPreviewTextCallback): void;

   /**
     * <p>订阅'finishTextPreview'事件。</p>
     * <p>为支持预览文本功能，开发人员应在调用attach之前订阅此事件。</p>
     *
     * @param { Callback<void> } callback - the callback called when the input method finishes text preview.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onFinishTextPreview(callback: Callback<void>): void;
    /**
     * 取消订阅'finishTextPreview'事件。
     *
     * @param { Callback<void> } [callback] - optional, the callback called when the input method finishes text preview.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offFinishTextPreview(callback?: Callback<void>): void;
  }

  /**
   * 输入法属性
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface InputMethodProperty {
    /**
     * 输入法名称
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodProperty#name
     */
    readonly packageName: string;

    /**
     * 输入法ID
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodProperty#id
     */
    readonly methodId: string;

    /**
     * 输入法名称
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly name: string;

    /**
     * 输入法ID
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly id: string;

    /**
     * 输入法标签
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly label?: string;

    /**
     * 输入法标签ID
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    readonly labelId?: long;

    /**
     * 输入法图标
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly icon?: string;

    /**
     * 输入法图标ID
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly iconId?: long;

    /**
     * 输入法的启用状态
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly enabledState?: EnabledState;

    /**
     * 输入法的额外信息
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
   * 枚举光标移动方向
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum Direction {
    /**
     * 光标向上移动
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_UP = 1,

    /**
     * 光标向下移动
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_DOWN,

    /**
     * 光标向左移动
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_LEFT,

    /**
     * 光标向右移动
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_RIGHT
  }

  /**
   * 所选文本的范围。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Range {
    /**
     * 表示所选文本第一个字符的索引。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * 表示所选文本最后一个字符的索引。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    end: int;
  }

  /**
   * 光标移动。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Movement {
    /**
     * 表示光标移动的方向
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    direction: Direction;
  }

  /**
   * 枚举文本输入类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum TextInputType {
    /**
     * 文本输入类型为NONE。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE = -1,

    /**
     * 文本输入类型为TEXT。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    TEXT = 0,

    /**
     * 文本输入类型为MULTILINE。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    MULTILINE,

    /**
     * 文本输入类型为NUMBER。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NUMBER,

    /**
     * 文本输入类型为PHONE。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE,

    /**
     * 文本输入类型为DATETIME。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    DATETIME,

    /**
     * 文本输入类型为EMAIL_ADDRESS。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    EMAIL_ADDRESS,

    /**
     * 文本输入类型为URL。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    URL,

    /**
     * 文本输入类型为VISIBLE_PASSWORD。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    VISIBLE_PASSWORD,

    /**
     * 文本输入类型为NUMBER_PASSWORD。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    NUMBER_PASSWORD,

    /**
     * 文本输入类型为SCREEN_LOCK_PASSWORD。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCREEN_LOCK_PASSWORD,

    /**
     * 文本输入类型为USER_NAME。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    USER_NAME,

    /**
     * 文本输入类型为NEW_PASSWORD。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NEW_PASSWORD,

    /**
     * 文本输入类型为NUMBER_DECIMAL。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NUMBER_DECIMAL,

    /**
     * 文本输入类型为ONE_TIME_CODE。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    ONE_TIME_CODE
  }

  /**
   * 枚举回车键类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum EnterKeyType {
    /**
     * 回车键类型为UNSPECIFIED。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * 回车键类型为NONE。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE,

    /**
     * 回车键类型为GO。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    GO,

    /**
     * 回车键类型为SEARCH。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SEARCH,

    /**
     * 回车键类型为SEND。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SEND,

    /**
     * 回车键类型为NEXT。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NEXT,

    /**
     * 回车键类型为DONE。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    DONE,

    /**
     * 回车键类型为PREVIOUS。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PREVIOUS,

    /**
     * 回车键类型为NEWLINE。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    NEWLINE
  }

  /**
   * 枚举键盘状态。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum KeyboardStatus {
    /**
     * 键盘状态为无。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 键盘状态为隐藏。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    HIDE = 1,

    /**
     * 键盘状态为显示。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SHOW = 2
  }

  /**
   * 输入属性。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface InputAttribute {
    /**
     * 表示输入法的文本输入类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    textInputType: TextInputType;

    /**
     * 表示输入法的回车键类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    enterKeyType: EnterKeyType;

    /**
     * 编辑框中的占位符文本。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    placeholder?: string;

    /**
     * 编辑框所在的能力名称。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName?: string;

    /**
     * 编辑器是否支持消费按键事件。
     *
     * @default false
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    consumeKeyEvents?: boolean;
  }

  /**
   * 输入功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface FunctionKey {
    /**
     * 表示输入法的回车键类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    enterKeyType: EnterKeyType;
  }

  /**
   * 光标信息。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface CursorInfo {
    /**
     * 表示光标信息的左点，必须为物理屏幕的绝对坐标，单位为px。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    left: double;

    /**
     * 表示光标信息的顶点，必须为物理屏幕的绝对坐标，单位为px。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    top: double;

    /**
     * 表示光标信息的宽度点，单位为px。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    width: double;

    /**
     * 表示光标信息的高度点，单位为px。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    height: double;

    /**
     * 表示光标所在显示器的ID。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
 	  displayId?: long;
  }

  /**
   * 编辑器配置。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface TextConfig {
    /**
     * 输入属性。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    inputAttribute: InputAttribute;

    /**
     * 光标信息。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    cursorInfo?: CursorInfo;

    /**
     * 选择信息。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selection?: Range;

    /**
     * 当前绑定到输入法的应用的窗口ID。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    windowId?: int;

    /**
     * 表示这是一个新的编辑框。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    newEditBox?: boolean;

    /**
     * 表示编辑框的大小写模式。
     *
     * @default CapitalizeMode.NONE
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    capitalizeMode?: CapitalizeMode;
  }

  /**
   * 枚举扩展动作。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ExtendAction {
    /**
     * 选择所有文本。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SELECT_ALL = 0,

    /**
     * 剪切所选文本。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CUT = 3,

    /**
     * 复制所选文本。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    COPY = 4,

    /**
     * 从粘贴板粘贴。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PASTE = 5
  }

  /**
   * 输入法窗口信息。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface InputWindowInfo {
    /**
     * 表示输入法窗口的名称。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 表示输入法窗口左上顶点的横坐标，单位为px。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    left: int;

    /**
     * 表示输入法窗口左上顶点的纵坐标，单位为px。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * 表示输入法窗口的宽度，单位为px。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * 表示输入法窗口的高度，单位为px。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * 表示显示输入法窗口的显示器ID。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    displayId?: long;

    /**
     * 表示显示输入法窗口的用户ID。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    userId?: int;
  }

  /**
   * 接收自定义消息时的回调函数。
   *
   * @param { string } msgId - the identifier of the message.
   * @param { ArrayBuffer } [msgParam] - the parameter of the custom message.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  type OnMessageCallback = (msgId: string, msgParam?: ArrayBuffer) => void;

  /**
   * <p>Custom message handler.</p>
   * <p>Implement this interface to respond to custom messages.</p>
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  interface MessageHandler {
    /**
     * 当收到自定义消息时调用此方法。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onMessage: OnMessageCallback;

    /**
     * 当设置新的消息处理器时调用此方法。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onTerminated: Callback<void>;

    /**
     * 当收到自定义消息时调用此方法。
     *
     * @param { string } msgId - the identifier of the message.
     * @param { ArrayBuffer } [msgParam] - the parameter of the custom message.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */	
    onMessage(msgId: string, msgParam?: ArrayBuffer): void;	

    /**
     * 当设置新的消息处理器时调用此方法。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */
    onTerminated(): void;
  }

  /**
   * 枚举启用状态。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum EnabledState {
    /**
     * 禁用状态。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    DISABLED = 0,

    /**
     * 基本模式启用状态。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    BASIC_MODE,

    /**
     * 完整体验模式启用状态。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    FULL_EXPERIENCE_MODE
  }

  /**
   * 输入点击的请求键盘原因
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum RequestKeyboardReason {
    /**
     * 请求键盘原因为NONE。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * 请求键盘原因为MOUSE。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    MOUSE = 1,
    /**
     * 请求键盘原因为TOUCH。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    TOUCH = 2,
    /**
     * 请求键盘原因为OTHER。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    OTHER = 20
  }

  /**
   * 'setPreviewText'事件的回调。
   *
   * @param { string } text - text to be previewed.
   * @param { Range } range - the range of the text to be replaced by the preview text.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 17 dynamic
   * @since 23 static
   */
  export type SetPreviewTextCallback = (text: string, range: Range) => void;

 /**
   * 枚举大小写模式。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CapitalizeMode {
    /**
     * 不转换大写。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 每个句子的第一个字母大写。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SENTENCES,

    /**
     * 每个单词的第一个字母大写。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    WORDS,

    /**
     * 每个字母大写。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    CHARACTERS
  }
  
  /**
   * 枚举附件失败的具体原因
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  export enum AttachFailureReason {
    /**
     * 附件失败原因为CALLER_NOT_FOCUSED。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    CALLER_NOT_FOCUSED = 0,

    /**
     * 附件失败原因为IME_ABNORMAL。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    IME_ABNORMAL,

    /**
     * 附件失败原因为SERVICE_ABNORMAL。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    SERVICE_ABNORMAL
  }
  /**
   * 附加选项。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface AttachOptions {
    /**
     * 附加时是否显示键盘。
     *
     * @default true
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    showKeyboard?: boolean;
    /**
     * 请求键盘的原因。
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