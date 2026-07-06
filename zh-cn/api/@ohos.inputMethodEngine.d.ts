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
   * 按键功能未指定。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_UNSPECIFIED: int;

  /**
   * 执行命令或导航到特定位置的功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_GO: int;

  /**
   * 发起搜索操作的功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_SEARCH: int;

  /**
   * 发送文本到目标的功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_SEND: int;

  /**
   * 将焦点移动到序列中下一项的功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_NEXT: int;

  /**
   * 表示任务或输入已完成的功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_DONE: int;

  /**
   * 将焦点移动到序列中上一项的功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_PREVIOUS: int;

  /**
   * 插入新行的功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_NEWLINE: int;

  /**
   * 任意类型的编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_NULL: int;

  /**
   * 文本编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_TEXT: int;

  /**
   * 数字编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_NUMBER: int;

  /**
   * 电话号码编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_PHONE: int;

  /**
   * 日期编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_DATETIME: int;

  /**
   * 邮箱编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_EMAIL: int;

  /**
   * URI编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_URI: int;

  /**
   * 密码编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_PASSWORD: int;

  /**
   * 锁屏密码编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  const PATTERN_PASSWORD_SCREEN_LOCK: int;

  /**
   * 纯数字密码编辑框。
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
   * @stagemodelonly
   * @since 20 dynamic
   */
  const PATTERN_USER_NAME = 10;

  /**
   * User name edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 static
   */
  const PATTERN_USER_NAME: int;

  /**
   * New password edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 20 dynamic
   */
  const PATTERN_NEW_PASSWORD = 11;

  /**
   * New password edit box.
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 static
   */
  const PATTERN_NEW_PASSWORD: int;

  /**
   * 带小数的数字编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 20 dynamic
   */
  const PATTERN_NUMBER_DECIMAL = 12;

  /**
   * 带小数的数字编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 static
   */
  const PATTERN_NUMBER_DECIMAL: int;

  /**
   * 验证码编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 20 dynamic
   */
  const PATTERN_ONE_TIME_CODE = 13;

  /**
   * 验证码编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 static
   */
  const PATTERN_ONE_TIME_CODE: int;

  /**
   * 正在选择编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const FLAG_SELECTING: int;

  /**
   * 编辑框仅允许单行输入。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const FLAG_SINGLE_LINE: int;

  /**
   * 编辑框以半屏模式显示。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const DISPLAY_MODE_PART: int;

  /**
   * 编辑框以全屏模式显示。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const DISPLAY_MODE_FULL: int;

  /**
   * 允许ASCII值。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_ASCII: int;

  /**
   * 未指定输入属性。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_NONE: int;

  /**
   * 允许输入字符。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_AUTO_CAP_CHARACTERS: int;

  /**
   * 允许输入句子。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_AUTO_CAP_SENTENCES: int;

  /**
   * 允许输入单词。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_AUTO_WORDS: int;

  /**
   * 允许多行输入。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_MULTI_LINE: int;

  /**
   * 半屏样式。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_NO_FULLSCREEN: int;

  /**
   * 光标向上移动。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_UP: int;

  /**
   * 光标向下移动。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_DOWN: int;

  /**
   * 光标向左移动。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_LEFT: int;

  /**
   * 光标向右移动。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_RIGHT: int;

  /**
   * 输入法以悬浮窗形式显示。
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
   * 获取输入法对应的InputMethodAbility对象，用于订阅输入法相关事件。
   *
   * @returns { InputMethodAbility | null } the object of the InputMethodAbility.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  function getInputMethodAbility(): InputMethodAbility | null;

  /**
   * 获取输入法对应的[InputMethodEngine]{@link inputMethodEngine.InputMethodEngine}实例。
   * 
   * 输入法可以使用获得的实例订阅软键盘显示/隐藏请求事件。
   *
   * @returns { InputMethodEngine } **InputMethodAbility** instance.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethodEngine.getInputMethodAbility()
   */
  function getInputMethodEngine(): InputMethodEngine;

  /**
   * 获取输入法对应的[KeyboardDelegate]{@link inputMethodEngine.KeyboardDelegate}实例。
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
   * 获取KeyboardDelegate对象，用于订阅按键事件或编辑器相关事件。
   *
   * @returns { KeyboardDelegate | null } the object of KeyboardDelegate.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  function getKeyboardDelegate(): KeyboardDelegate | null;

  /**
   * 获取输入法对应的[KeyboardDelegate]{@link inputMethodEngine.KeyboardDelegate}实例。 The input 
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
   * 定义私有数据类型，具体类型取决于其功能。
   *
   * @unionmember { int } 数字。
   * @unionmember { string } 字符串。
   * @unionmember { boolean } 布尔值。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  type CommandDataType = int | string | boolean;

  /**
   * 'inputStart'事件的回调。
   *
   * @param { KeyboardController } kbController - keyboard controller.
   * @param { InputClient } inputClient - input client.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 static
   */
  export type IMAInputStartCallback = (kbController: KeyboardController, inputClient: InputClient) => void;

  /**
   * 'keyDown'或'keyUp'事件的回调。
   *
   * @param { KeyEvent } event - the key event.
   * @returns { boolean } whether to consume this key event.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type KeyEventCallback = (event: KeyEvent) => boolean;

  /**
   * 'keyEvent'事件的回调。
   *
   * @param { InputKeyEvent } event - the key event.
   * @returns { boolean } whether to consume this key event.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type InputKeyEventCallback = (event: InputKeyEvent) => boolean;

  /**
   * 'cursorContextChange'事件的回调。
   *
   * @param { double } x - the left point of the cursor, unit is px.
   * @param { double } y - the top point of the cursor, unit is px.
   * @param { double } height - the height of the cursor, unit is px.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type CursorContextChangeCallback = (x: double, y: double, height: double) => void;

  /**
   * 'selectionChange'事件的回调。
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
   * 输入法面板大小变更时的回调。
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
   * 输入法面板大小变更时的回调。
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
     * 隐藏键盘。此API使用异步回调返回结果。
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hide(callback: AsyncCallback<void>): void;

    /**
     * 隐藏键盘。此API使用promise返回结果。
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hide(): Promise<void>;

    /**
     * 隐藏键盘。此API使用异步回调返回结果。
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
     * 隐藏键盘。此API使用promise返回结果。
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
     * @throws { BusinessError } 12800008 - 输入法管理服务错误. Possible cause:
     *     系统错误，例如空指针、IPC异常.
     * @throws { BusinessError } 12800010 - 非预配置的系统默认输入法.
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
     * @throws { BusinessError } 12800008 - 输入法管理服务错误. Possible cause:
     *     系统错误，例如空指针、IPC异常.
     * @throws { BusinessError } 12800010 - 非预配置的系统默认输入法.
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
     * @useinstead inputMethodEngine.InputMethodAbility.on(type: 'inputStart', callback: (kbController: KeyboardController, inputClient: InputClient) => void)
     */
    on(
      type: 'inputStart',
      callback: (kbController: KeyboardController, textInputClient: TextInputClient) => void
    ): void;

    /**
     * 禁用输入法绑定事件的监听。
     *
     * @param { 'inputStart' } type - Event type, which is **'inputStart'**.
     * @param { function } callback - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 23
     * @useinstead inputMethodEngine.InputMethodAbility.off(type: 'inputStart', callback?: (kbController: KeyboardController, inputClient: InputClient) => void)
     */
    off(
      type: 'inputStart',
      callback?: (kbController: KeyboardController, textInputClient: TextInputClient) => void
    ): void;

    /**
     * 启用键盘可见性事件的监听。此API使用异步回调返回结果。
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - Event type.
     *     <br>- The value **'keyboardShow'** indicates the keyboard display event.
     *     <br>- The value **'keyboardHide'** indicates the keyboard hiding event.
     * @param { function } callback - Callback used to return the result.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 23
     * @useinstead inputMethodEngine.InputMethodAbility.on(type: 'keyboardShow' | 'keyboardHide', callback: () => void)
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
     * @useinstead inputMethodEngine.InputMethodAbility.off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void)
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
     * 禁用输入法绑定事件的监听。 This API uses an asynchronous callback to return the 
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
     * 禁用输入法停止事件的监听。此API使用异步回调返回结果。
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
     * 启用键盘可见性事件的监听。此API使用异步回调返回结果。
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
     * @throws { BusinessError } 12800010 - 非预配置的系统默认输入法.
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
     * @throws { BusinessError } 12800010 - 非预配置的系统默认输入法.
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
     * @throws { BusinessError } 801 - 不支持该能力.
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
     * 获取输入法当前的 安全模式。
     *
     * @returns { SecurityMode } Security mode.
     * @throws { BusinessError } 12800004 - 非输入法应用.
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800004 - 非输入法应用.
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800004 - 非输入法应用.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    createPanel(ctx: BaseContext, info: PanelInfo): Promise<Panel>;

    /**
     * 销毁指定的输入法面板。此API使用异步回调返回结果。
     *
     * @param { Panel } panel - Input method panel to destroy.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    destroyPanel(panel: Panel, callback: AsyncCallback<void>): void;

    /**
     * 销毁指定的输入法面板。此API使用promise返回结果。
     *
     * @param { Panel } panel - Input method panel to destroy.
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    destroyPanel(panel: Panel): Promise<void>;

    /**
     * 订阅'inputStart'事件。
     *
     * @param { IMAInputStartCallback } callback - the callback called when edit box requests keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onInputStart(callback: IMAInputStartCallback): void;
    /**
     * 取消订阅'inputStart'事件。
     *
     * @param { IMAInputStartCallback } [callback] - optional, the callback called when edit box requests keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offInputStart(callback?: IMAInputStartCallback): void;

    /**
     * 订阅'inputStop'。
     *
     * @param { Callback<void> } callback - the callback called when the system needs input method application
     *     to terminate itself.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onInputStop(callback: Callback<void>): void;
    /**
     * 取消订阅'inputStop'。
     *
     * @param { Callback<void> } callback - the callback called when the system needs input method application
     *     to terminate itself.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offInputStop(callback: Callback<void>): void;

    /**
     * 订阅'setCallingWindow'。
     *
     * @param { Callback<int> } callback - the callback called when the edit box sets calling window id.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSetCallingWindow(callback: Callback<int>): void;
    /**
     * 取消订阅'setCallingWindow'。
     *
     * @param { Callback<int> } callback - the callback called when the edit box sets calling window id.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSetCallingWindow(callback: Callback<int>): void;

    /**
     * 订阅'keyboardShow'。
     *
     * @param { Callback<void> } callback - the callback called when showing keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyboardShow(callback: Callback<void>): void;
    /**
     * 取消订阅'keyboardShow'。
     *
     * @param { Callback<void> } [callback] - optional, the callback called when showing keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyboardShow(callback?: Callback<void>): void;

    /**
     * 订阅'keyboardHide'。
     *
     * @param { Callback<void> } callback - the callback called when hiding keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyboardHide(callback: Callback<void>): void;
    /**
     * 取消订阅'keyboardHide'。
     *
     * @param { Callback<void> } [callback] - optional, the callback called when hiding keyboard.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyboardHide(callback?: Callback<void>): void;

    /**
     * 订阅'setSubtype'。
     *
     * @param { Callback<InputMethodSubtype> } callback - the callback called when the system notify
     *     to switch subtype.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSetSubtype(callback: Callback<InputMethodSubtype>): void;
    /**
     * 取消订阅'setSubtype'。
     *
     * @param { Callback<InputMethodSubtype> } [callback] - optional, the callback called when the system notify
     *     to switch subtype.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSetSubtype(callback?: Callback<InputMethodSubtype>): void;

    /**
     * 订阅'securityModeChange'事件。
     *
     * @param { Callback<SecurityMode> } callback - the callback called when the security mode changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSecurityModeChange(callback: Callback<SecurityMode>): void;
    /**
     * 取消订阅'securityModeChange'事件。
     *
     * @param { Callback<SecurityMode> } [callback] - optional, the callback called when the security mode changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSecurityModeChange(callback?: Callback<SecurityMode>): void;

    /**
     * 订阅'privateCommand'。此函数只能由系统配置的默认输入法调用。
     *
     * @param { Callback<Record<string, CommandDataType>> } callback - the callback called when receiving
     *     private command.
     * @throws { BusinessError } 12800010 - 非预配置的系统默认输入法.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onPrivateCommand(callback: Callback<Record<string, CommandDataType>>): void;
    /**
     * 取消订阅'privateCommand'。此函数只能由系统配置的默认输入法调用。
     *
     * @param { Callback<Record<string, CommandDataType>> } [callback] - optional,
     *     the callback called when receiving private command.
     * @throws { BusinessError } 12800010 - 非预配置的系统默认输入法.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offPrivateCommand(callback?: Callback<Record<string, CommandDataType>>): void;

    /**
     * 订阅'callingDisplayDidChange'事件。
     *
     * @param { Callback<int> } callback - the callback called when calling display id changed.
     * @throws { BusinessError } 801 - 不支持该能力.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onCallingDisplayDidChange(callback: Callback<int>): void;
    /**
     * 取消订阅'callingDisplayDidChange'事件。
     *
     * @param { Callback<int> } [callback] - optional, the callback called when calling display id changed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offCallingDisplayDidChange(callback?: Callback<int>): void;

    /**
     * 订阅'discardTypingText'事件。
     *
     * @param { Callback<void> } callback - the callback called when the edit box requests to discard typing text.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onDiscardTypingText(callback: Callback<void>): void;
    /**
     * 取消订阅'discardTypingText'事件。
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
     * 发送功能键。此API使用异步回调返回结果。
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
     * 发送功能键。此API使用promise返回结果。
     *
     * @param { number } action - Action of the function key.
     *     <br>**0**: invalid key.
     *     <br>**1**: confirm key (Enter key).
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the setting is
     *     successful, and **false** means the opposite.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.sendKeyFunction(action: int): Promise<boolean>
     */
    sendKeyFunction(action: number): Promise<boolean>;

    /**
     * 删除光标前指定长度的文本。此API使用异步回调返回结果。
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
     * 删除光标前指定长度的文本。此API使用promise返回结果。
     *
     * @param { number } length - Text length, which cannot be less than 0.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the deletion is
     *     successful, and **false** means the opposite.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.deleteForward(length: int): Promise<boolean>
     */
    deleteForward(length: number): Promise<boolean>;

    /**
     * 删除光标后指定长度的文本。此API使用异步回调返回结果。
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
     * 删除光标后指定长度的文本。此API使用promise返回结果。
     *
     * @param { number } length - Text length, which cannot be less than 0.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the deletion is
     *     successful, and **false** means the opposite.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.deleteBackward(length: int): Promise<boolean>
     */
    deleteBackward(length: number): Promise<boolean>;

    /**
     * 插入文本。此API使用异步回调返回结果。
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
     * 插入文本。此API使用promise返回结果。
     *
     * @param { string } text - Text to insert.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the insertion is
     *     successful, and **false** means the opposite.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.insertText(text: string): Promise<boolean>
     */
    insertText(text: string): Promise<boolean>;

    /**
     * 获取光标前指定长度的文本。此API使用异步回调返回结果。
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
     * 获取光标前指定长度的文本。此API使用promise返回结果。
     *
     * @param { number } length - Text length, which cannot be less than 0.
     * @returns { Promise<string> } Promise used to return the specific-length text before the cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getForward(length: int): Promise<string>
     */
    getForward(length: number): Promise<string>;

    /**
     * 获取光标后指定长度的文本。此API使用异步回调返回结果。
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
     * 获取光标后指定长度的文本。此API使用promise返回结果。
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
     * 获取编辑框属性。此API使用异步回调返回结果。
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
     * 获取编辑框属性。此API使用promise返回结果。
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
     * 发送功能键。此API使用异步回调返回结果。
     *
     * @param { int } action - Action of the function key.
     *     <br>- **0**: invalid key.
     *     <br>- **1**: confirm key (Enter key).
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    sendKeyFunction(action: int, callback: AsyncCallback<boolean>): void;

    /**
     * 发送功能键。此API使用promise返回结果。
     *
     * @param { int } action - Action of the function key.
     *     <br>**0**: invalid key.
     *     <br>**1**: confirm key (Enter key).
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the operation is
     *     successful, and **false** means the opposite.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    sendKeyFunction(action: int): Promise<boolean>;

    /**
     * 删除光标前指定长度的文本。此API使用异步回调返回结果。
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1.输入法面板未创建. 2.输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    deleteForward(length: int, callback: AsyncCallback<boolean>): void;

    /**
     * 删除光标前指定长度的文本。此API使用promise返回结果。
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the deletion is
     *     successful, and **false** means the opposite.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1.输入法面板未创建. 2.输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    deleteForward(length: int): Promise<boolean>;

    /**
     * Deletes the fixed-length text before the cursor.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1.输入法面板未创建. 2.输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    deleteForwardSync(length: int): void;

    /**
     * 删除光标后指定长度的文本。此API使用异步回调返回结果。
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1.输入法面板未创建. 2.输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    deleteBackward(length: int, callback: AsyncCallback<boolean>): void;

    /**
     * 删除光标后指定长度的文本。此API使用promise返回结果。
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the deletion is
     *     successful, and **false** means the opposite.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1.输入法面板未创建. 2.输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    deleteBackward(length: int): Promise<boolean>;

    /**
     * Deletes the fixed-length text after the cursor.
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1.输入法面板未创建. 2.输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    deleteBackwardSync(length: int): void;

    /**
     * 插入文本。此API使用异步回调返回结果。
     *
     * @param { string } text - Text to insert.
     * @param { AsyncCallback<boolean> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is **true**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1.输入法面板未创建. 2.输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    insertText(text: string, callback: AsyncCallback<boolean>): void;

    /**
     * 插入文本。此API使用promise返回结果。
     *
     * @param { string } text - Text to insert.
     * @returns { Promise<boolean> } Promise used to return the result. The value **true** means that the insertion is
     *     successful, and **false** means the opposite.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1.输入法面板未创建. 2.输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    insertText(text: string): Promise<boolean>;

    /**
     * Inserts text.
     *
     * @param { string } text - Text to insert.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1.输入法面板未创建. 2.输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    insertTextSync(text: string): void;

    /**
     * 获取光标前指定长度的文本。此API使用异步回调返回结果。
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the obtained text. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800006 - 输入法控制器错误. Possible cause:
     *     创建InputMethodController对象失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getForward(length: int, callback: AsyncCallback<string>): void;

    /**
     * 获取光标前指定长度的文本。此API使用promise返回结果。
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @returns { Promise<string> } Promise used to return the specific-length text before the cursor.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800006 - 输入法控制器错误. Possible cause:
     *     创建InputMethodController对象失败.
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800006 - 输入法控制器错误. Possible cause:
     *     创建InputMethodController对象失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getForwardSync(length: int): string;

    /**
     * 获取光标后指定长度的文本。此API使用异步回调返回结果。
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @param { AsyncCallback<string> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined** and **data** is the obtained text. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800006 - 输入法控制器错误. Possible cause:
     *     创建InputMethodController对象失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    getBackward(length: int, callback: AsyncCallback<string>): void;

    /**
     * 获取光标后指定长度的文本。此API使用promise返回结果。
     *
     * @param { int } length - Text length, which cannot be less than 0.
     * @returns { Promise<string> } Promise used to return the specific-length text after the cursor.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800006 - 输入法控制器错误. Possible cause:
     *     创建InputMethodController对象失败.
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800006 - 输入法控制器错误. Possible cause:
     *     创建InputMethodController对象失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getBackwardSync(length: int): string;

    /**
     * 获取编辑框属性。此API使用异步回调返回结果。
     *
     * @param { AsyncCallback<EditorAttribute> } callback - Callback used to return the result. If the operation is
     *     successful, **err** is **undefined** and **data** is the attribute of the edit box. Otherwise, **err** is an
     *     error object.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    getEditorAttribute(callback: AsyncCallback<EditorAttribute>): void;

    /**
     * Get attribute about editor.
     *
     * @param { AsyncCallback<EditorAttribute | null> } callback - the callback of getEditorAttribute.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getEditorAttribute(callback: AsyncCallback<EditorAttribute | null>): void;

    /**
     * 获取编辑框属性。此API使用promise返回结果。
     *
     * @returns { Promise<EditorAttribute> } Promise used to return the attribute of the edit box.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    getEditorAttribute(): Promise<EditorAttribute>;

    /**
     * Get attribute about editor.
     *
     * @returns { Promise<EditorAttribute | null> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getEditorAttribute(): Promise<EditorAttribute | null>;

    /**
     * Obtains the attribute of the edit box.
     *
     * @returns { EditorAttribute } Attribute information.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    getEditorAttributeSync(): EditorAttribute;

    /**
     * Get attribute about editor.
     *
     * @returns { EditorAttribute | null } the attribute of editor.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getEditorAttributeSync(): EditorAttribute | null;

    /**
     * 移动光标。此API使用异步回调返回结果。
     *
     * @param { int } direction - Direction in which the cursor moves.
     *     <br>- **1**: upward.
     *     <br>- **2**: downward.
     *     <br>- **3**: leftward.
     *     <br>- **4**: rightward. which cannot be less than 0.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    moveCursor(direction: int, callback: AsyncCallback<void>): void;

    /**
     * 移动光标。此API使用promise返回结果。
     *
     * @param { int } direction - Direction in which the cursor moves.
     *     <br>- **1**: upward.
     *     <br>- **2**: downward.
     *     <br>- **3**: leftward.
     *     <br>- **4**: rightward. which cannot be less than 0.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    moveCursorSync(direction: int): void;

    /**
     * 根据指定范围选择文本。此API使用异步回调返回结果。
     *
     * @param { Range } range - Range of the selected text.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the selection event is sent,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByRange(range: Range, callback: AsyncCallback<void>): void;

    /**
     * 根据指定范围选择文本。此API使用promise返回结果。
     *
     * @param { Range } range - Range of the selected text.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByRange(range: Range): Promise<void>;

    /**
     * Selects text based on the specified range.
     *
     * @param { Range } range - Range of the selected text.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByRangeSync(range: Range): void;

    /**
     * 根据光标移动方向选择文本。此API使用异步回调返回结果。
     *
     * @param { Movement } movement - 选择文本时光标移动的方向。
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the selection event is sent,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByMovement(movement: Movement, callback: AsyncCallback<void>): void;

    /**
     * 根据光标移动方向选择文本。此API使用promise返回结果。
     *
     * @param { Movement } movement - 选择文本时光标移动的方向。
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selectByMovement(movement: Movement): Promise<void>;

    /**
     * Selects text based on the cursor movement direction.
     *
     * @param { Movement } movement - 选择文本时光标移动的方向。
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
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
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800006 - 输入法控制器错误. Possible cause:
     *     创建InputMethodController对象失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getTextIndexAtCursor(callback: AsyncCallback<int>): void;

    /**
     * 获取光标所在文本的索引。此API使用promise返回结果。
     *
     * @returns { Promise<int> } Promise used to return the result.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800006 - 输入法控制器错误. Possible cause:
     *     创建InputMethodController对象失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getTextIndexAtCursor(): Promise<int>;

    /**
     * Obtains the index of the text where the cursor is located.
     *
     * @returns { int } Index of the text where the cursor is located.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800006 - 输入法控制器错误. Possible cause:
     *     创建InputMethodController对象失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    getTextIndexAtCursorSync(): int;

    /**
     * 发送扩展编辑操作。此API使用异步回调返回结果。
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800006 - 输入法控制器错误. Possible cause:
     *     创建InputMethodController对象失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    sendExtendAction(action: ExtendAction, callback: AsyncCallback<void>): void;

    /**
     * 发送扩展编辑操作。此API使用promise返回结果。
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800006 - 输入法控制器错误. Possible cause:
     *     创建InputMethodController对象失败.
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
     * > - 私有数据的总大小为32KB，私有数据记录的最大数量为5。
     *
     * @param { Record<string, CommandDataType> } commandData - Private data to send.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800010 - 非预配置的系统默认输入法.
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
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800012 - the 输入法面板不存在.
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    getCallingWindowInfo(): Promise<WindowInfo>;

    /**
     * Get info of the calling window.
     *
     * @returns { Promise<WindowInfo | null> } the promise returned by the function.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800012 - the 输入法面板不存在.
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getCallingWindowInfo(): Promise<WindowInfo | null>;

    /**
     * 设置预览文本。此API使用promise返回结果。
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800011 - 不支持文本预览.
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800011 - 不支持文本预览.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    setPreviewTextSync(text: string, range: Range): void;

    /**
     * 结束文本预览。此API使用promise返回结果。
     * 
     * > **NOTE**
     * >
     * > 如果当前文本框中有预览文本，调用此API会将预览文本显示在屏幕上。
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800011 - 不支持文本预览.
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
     * > 如果当前文本框中有预览文本，调用此API会将预览文本显示在屏幕上。
     *
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800011 - 不支持文本预览.
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
     * > **msgId**的最大长度为256B，**msgParam**的最大长度为128KB。
     *
     * @param { string } msgId - Identifier of the custom data to be sent to the edit box application attached to the
     *     input method application.
     * @param { ?ArrayBuffer } [msgParam] - Message body of the custom data to be sent to the edit box application
     *     attached to the input method application.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1. 参数类型不正确. 2. Incorrect parameter length.
     * @throws { BusinessError } 12800003 - 输入法客户端错误. Possible causes:
     *     1.编辑框未获焦. 2.当前输入法应用未绑定编辑框.
     *     3.因数据传输量大或其他原因导致IPC失败.
     * @throws { BusinessError } 12800009 - 输入法客户端已分离.
     * @throws { BusinessError } 12800014 - 输入法处于基本模式.
     * @throws { BusinessError } 12800015 - 对方不接受请求.
     * @throws { BusinessError } 12800016 - 输入法客户端不可编辑.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    sendMessage(msgId: string, msgParam?: ArrayBuffer): Promise<void>;

    /**
     * 注册或注销MessageHandler。
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes: 1. 参数类型不正确.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    recvMessage(msgHandler?: MessageHandler): void;
    /**
     * 获取绑定输入法的附加选项。
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
     * 启用物理键盘事件的监听。此API使用异步回调返回结果。
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
     * 禁用物理键盘事件的监听。此API使用异步回调返回结果。
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
     * 启用键盘事件的监听。此API使用异步回调返回结果。
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
     * 启用光标变更事件的监听。此API使用异步回调返回结果。
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
     * 启用文本变更事件的监听。此API使用异步回调返回结果。
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
     * 订阅按键按下事件
     *
     * @param { KeyEventCallback } callback - the callback called when a key down event occurs.
     *     If the key is processed by event subscriber, callback should be return true, else return false.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyDown(callback: KeyEventCallback): void;
    /**
     * 取消订阅按键按下事件
     *
     * @param { KeyEventCallback } [callback] - optional, the callback called when a key down event occurs.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyDown(callback?: KeyEventCallback): void;

    /**
     * 订阅按键释放事件
     *
     * @param { KeyEventCallback } callback - the callback called when a key up event occurs.
     *     If the key is processed by event subscriber, callback should be return true, else return false.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyUp(callback: KeyEventCallback): void;
    /**
     * 取消订阅按键释放事件
     *
     * @param { KeyEventCallback } [callback] - optional, the callback called when a key up event occurs.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyUp(callback?: KeyEventCallback): void;

    /**
     * 订阅按键事件。
     *
     * @param { InputKeyEventCallback } callback - the callback called when a key event event occurs.
     *     If the key is processed by event subscriber, callback should be return true, else return false.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyEvent(callback: InputKeyEventCallback): void;
    /**
     * 取消订阅按键事件。
     *
     * @param { InputKeyEventCallback } [callback] - optional, the callback called when a key event event occurs.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyEvent(callback?: InputKeyEventCallback): void;

    /**
     * 订阅光标上下文变更。
     *
     * @param { CursorContextChangeCallback } callback - the callback called when cursor information changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onCursorContextChange(callback: CursorContextChangeCallback): void;
    /**
     * 取消订阅光标上下文变更。
     *
     * @param { CursorContextChangeCallback } [callback] - optional, the callback called when cursor information
     *     changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offCursorContextChange(callback?: CursorContextChangeCallback): void;

    /**
     * 订阅选择变更。
     *
     * @param { SelectionChangeCallback } callback - the callback called when the text selection changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectionChange(callback: SelectionChangeCallback): void;
    /**
     * 取消订阅选择变更。
     *
     * @param { SelectionChangeCallback } [callback] - optional, the callback called when the text selection changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectionChange(callback?: SelectionChangeCallback): void;

    /**
     * 订阅文本变更。
     *
     * @param { Callback<string> } callback - the callback called when the text changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onTextChange(callback: Callback<string>): void;
    /**
     * 取消订阅文本变更。
     *
     * @param { Callback<string> } [callback] - optional, the callback called when the text changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offTextChange(callback?: Callback<string>): void;

    /**
     * 订阅输入文本属性变更。
     *
     * @param { Callback<EditorAttribute> } callback - the callback called when editor's attribute changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onEditorAttributeChanged(callback: Callback<EditorAttribute>): void;
    /**
     * 取消订阅输入文本属性变更。
     *
     * @param { Callback<EditorAttribute> } [callback] - optional, the callback called when editor's attribute changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offEditorAttributeChanged(callback?: Callback<EditorAttribute>): void;
  }

  /**
   * 枚举输入法的沉浸模式。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum ImmersiveMode {
    /**
     * 默认沉浸模式，面板不处于沉浸模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    NONE_IMMERSIVE = 0,

    /**
     * 输入法的沉浸模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    IMMERSIVE,

    /**
     * 轻度沉浸模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    LIGHT_IMMERSIVE,

    /**
     * 重度沉浸模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    DARK_IMMERSIVE
  }

  /**
   * 枚举输入法的渐变模式。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  export enum GradientMode {
    /**
     * 禁用渐变模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * 线性渐变模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    LINEAR_GRADIENT = 1,
  }

  /**
   * 枚举输入法的流光模式。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum FluidLightMode {
    /**
     * 禁用流光模式。
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
   * 描述沉浸效果。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  interface ImmersiveEffect {

    /**
     * 渐变高度，不能超过屏幕高度的15%。
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
     * 此属性仅对系统应用可用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    fluidLightMode?: FluidLightMode;
  }

  /**
   * 枚举请求键盘输入的原因。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 19 dynamic
   * @since 23 static
   */
  export enum RequestKeyboardReason {
    /**
     * 请求键盘原因为NONE。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * 请求键盘原因为MOUSE。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    MOUSE = 1,
    /**
     * 请求键盘原因为TOUCH。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    TOUCH = 2,
    /**
     * 请求键盘原因为OTHER。
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * 从页面加载内容到此输入法面板。此API使用promise返回结果。
     *
     * @param { string } path - Path of the page from which the content will be loaded.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * 从链接到LocalStorage的页面加载内容到此面板。此API使用promise返回结果。
     *
     * @param { string } path - Path of the page from which the content will be loaded.
     * @param { LocalStorage } storage - Storage unit that provides storage for mutable and immutable state variables in
     *     the application.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string, storage: LocalStorage): Promise<void>;

    /**
     * 调整此输入法面板的大小。此API使用异步回调返回结果。
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    resize(width: long, height: long, callback: AsyncCallback<void>): void;

    /**
     * 调整此输入法面板的大小。此API使用promise返回结果。
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    moveTo(x: int, y: int): Promise<void>;

    /**
     * 发送开始移动窗口的命令。只有在鼠标点击时才能移动窗口。
     *
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1.输入法面板未创建. 2.输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
     * @throws { BusinessError } 12800017 - 无效的面板类型或面板标志.
     * @throws { BusinessError } 801 - 不支持该能力. [since 18]
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    startMoving(): void;

    /**
     * 获取窗口ID。此API使用promise返回结果。
     *
     * @returns { Promise<long> } Promise used to return the result. It returns **displayId** of the window.
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1.输入法面板未创建. 2.输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
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
     * 隐藏此面板。此API使用异步回调返回结果。
     *
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**. Otherwise, **err** is an error object.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hide(callback: AsyncCallback<void>): void;

    /**
     * 隐藏此面板。此API使用promise返回结果。
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hide(): Promise<void>;

    /**
     * 启用此面板显示事件的监听。此API使用异步回调返回结果。
     *
     * @param { 'show' } type - Event type, which is **'show'**.
     * @param { function } callback - Callback used to return the result.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'show', callback: () => void): void;

    /**
     * 禁用此面板显示事件的监听。此API使用异步回调返回结果。
     *
     * @param { 'show' } type - Event type, which is **'show'**.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'show', callback?: () => void): void;

    /**
     * 启用此面板隐藏事件的监听。此API使用异步回调返回结果。
     *
     * @param { 'hide' } type - Event type, which is **'hide'**.
     * @param { function } callback - Callback used to return the result.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'hide', callback: () => void): void;

    /**
     * 禁用此面板隐藏事件的监听。此API使用异步回调返回结果。
     *
     * @param { 'hide' } type - Event type, which is **'hide'**.
     * @param { function } [callback] - Callback to unregister. If this parameter is not specified, this API unregisters
     *     all callbacks for the specified type.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'hide', callback?: () => void): void;

    /**
     * Changes the state type ([PanelFlag]{@link inputMethodEngine.PanelFlag}) of this input method panel. This API only
     * works for [SOFT_KEYBOARD]{@link inputMethodEngine.PanelType} panels.
     *
     * @param { PanelFlag } flag - Type of the state of the target panel.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    changeFlag(flag: PanelFlag): void;

    /**
     * 将输入法面板设置为隐私模式。在隐私模式下，截图和屏幕录制被阻止。
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode - Whether to set the input method panel to privacy mode.
     *     <br>- **true**: privacy mode.
     *     <br>- **false**: non-privacy mode.
     * @throws { BusinessError } 201 - 权限检查失败.
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确.
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
     * @throws { BusinessError } 12800017 - 无效的面板类型或面板标志.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect): void;

    /**
     * 更新面板矩形。此API使用promise返回结果。
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
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
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
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
     * @throws { BusinessError } 12800017 - 无效的面板类型或面板标志.
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
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
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
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
     * @throws { BusinessError } 12800017 - 无效的面板类型或面板标志.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    updatePanelRectSync(flag: PanelFlag, rect: EnhancedPanelRect): void;

    /**
     * 更新当前状态下输入法面板上的热点区域。
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
     *     <br>- 输入热点区域相对于输入法面板窗口的左顶点。
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.必填参数未指定; 2.参数类型不正确; 3.参数校验失败.
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
     * @throws { BusinessError } 12800017 - 无效的面板类型或面板标志.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    updateRegion(inputRegion: Array<window.Rect>): void;

    /**
     * 启用面板大小变更的监听。此API使用异步回调返回结果。
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
     * 禁用面板大小变更的监听。此API使用异步回调返回结果。
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
     * 监听面板大小变更。此API使用异步回调返回结果。
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
     * 禁用面板大小变更的监听。此API使用异步回调返回结果。
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
     * @throws { BusinessError } 401 - 参数错误. Possible causes:
     *     1.参数类型不正确; 2.参数校验失败.
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1.输入法面板未创建. 2.输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    setImmersiveMode(mode: ImmersiveMode): void;

    /**
     * 获取输入法应用的沉浸模式。
     *
     * @returns { ImmersiveMode } Immersive mode.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    getImmersiveMode(): ImmersiveMode;

    /**
     * 设置输入法应用的沉浸效果。
     * 
     * - Gradient mode and fluid light mode can be used only when the 
     * [immersive mode]{@link inputMethodEngine.Panel.setImmersiveMode} is enabled.
     * - 流光模式只能在启用渐变模式时使用。
     * - 如果禁用渐变模式，则渐变高度必须为0 px。
     * - 只有系统应用才能设置流光模式。
     * - 只能在调用以下任一API后调用此API：
     *  - [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect)} (available 
     * since API version 12)
     *  - [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect)} (
     * available since API version 15)
     *  - [resize]{@link inputMethodEngine.Panel.resize(width: long, height: long, callback: AsyncCallback<void>)} (
     * available since API version 10)
     *
     * @param { ImmersiveEffect } effect - Immersive effect.
     * @throws { BusinessError } 801 - 不支持该能力.
     * @throws { BusinessError } 12800002 - 输入法引擎错误. Possible causes:
     *     1. 输入法面板未创建. 2. 输入法应用未订阅相关事件.
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
     * @throws { BusinessError } 12800020 - 无效的沉浸效果.
     *     1. The gradient mode and the fluid light mode can only be used when the immersive mode is enabled.
     *     2. The fluid light mode can only be used when the gradient mode is enabled.
     *     3. When the gradient mode is not enabled, the gradient height can only be 0.
     * @throws { BusinessError } 12800021 - 只能在调用adjustPanelRect或resize后执行此操作.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    setImmersiveEffect(effect: ImmersiveEffect): void;
    /**
     * 设置保持屏幕常亮。此API使用promise返回结果。
     * 
     * > **NOTE**
     * >
     * > - 当键盘显示时，屏幕保持常亮；当键盘隐藏时，屏幕关闭。
     * >
     * > - You need to use this API properly. Set the attribute to **true** in necessary scenarios (for example, voice 
     * > input) and reset this attribute to **false** after exiting necessary scenarios. In other scenarios, do not use 
     * > this API.
     *
     * @param { boolean } isKeepScreenOn - Whether to keep the screen always on. The value **true** means that the
     *     screen is always on; the value **false** means the opposite.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
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
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
     * @throws { BusinessError } 12800017 - 无效的面板类型或面板标志. Possible causes:
     *     1. Current panel's type is not SOFT_KEYBOARD.  2. Panel's flag is not FLG_FIXED or FLG_FLOATING.
     * @throws { BusinessError } 12800022 - 无效的displayId.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     */
    getSystemPanelCurrentInsets(displayId: number): Promise<SystemPanelInsets>;

    /**
     * 获取指定显示屏的系统面板的当前内嵌值。
     * 
     * <p>仅适用于SOFT_KEYBOARD面板（FLG_FIXED或FLG_FLOATING）。</p>
     * <p>This interface only supports obtaining the current insets values of a display.
     * When the display undergoes orientation changes, or is folded or unfolded, it is necessary to
     * reinvoke this interface to get the latest values.</p>
     *
     * @param { long } displayId - specify which display's system panel insets.
     * @returns { Promise<SystemPanelInsets | null> } the promise returned by the function.
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
     * @throws { BusinessError } 12800017 - 无效的面板类型或面板标志. Possible causes:
     *     1. Current panel's type is not SOFT_KEYBOARD.  2. Panel's flag is not FLG_FIXED or FLG_FLOATING.
     * @throws { BusinessError } 12800022 - 无效的displayId.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getSystemPanelCurrentInsets(displayId: long): Promise<SystemPanelInsets | null>;

    /**
     * 设置输入法窗口的阴影效果。
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
     * @throws { BusinessError } 202 - 非系统应用.
     * @throws { BusinessError } 12800013 - 窗口管理服务错误.
     * @throws { BusinessError } 12800017 - 无效的面板类型或面板标志.
     *     Possible causes: 面板标志为FLG_FIXED.
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
     * 注册面板显示事件。
     * 
     * <p>The "show" events are triggered when the panel is shown.</p>
     *
     * @param { Callback<void> } callback - the callback called when the panel shows.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onShow(callback: Callback<void>): void;
    /**
     * 注销面板显示事件。
     *
     * @param { Callback<void> } [callback] - optional, the callback called when the panel shows.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offShow(callback?: Callback<void>): void;

    /**
     * 注册面板隐藏事件。
     * 
     * <p>The "hide" events are triggered when the panel is hidden.</p>
     *
     * @param { Callback<void> } callback - the callback called when the panel hides.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onHide(callback: Callback<void>): void;
    /**
     * 注销面板隐藏事件。
     *
     * @param { Callback<void> } [callback] - the callback to Unregister.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offHide(callback?: Callback<void>): void;

    /**
     * 订阅'sizeUpdate'事件。
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
     * 取消订阅'sizeUpdate'事件。
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
     * 订阅'sizeChange'事件。
     * 
     * <p>It's only used for SOFT_KEYBOARD panel with FLG_FIXED and FLG_FLOATING.</p>
     *
     * @param { SizeChangeCallback } callback - the callback called when the panel size changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSizeChange(callback: SizeChangeCallback): void;
    /**
     * 取消订阅'sizeChange'事件。
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
   * 定义输入法软键盘与系统面板之间的偏移区域。
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
     * 是否支持文本预览。
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
     * 输入法的沉浸模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    readonly immersiveMode?: ImmersiveMode;

    /**
     * 编辑框所在窗口的ID。
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
     * 为编辑框设置的占位符信息。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly placeholder?: string;

    /**
     * 为编辑框设置的能力名称。
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
     * 此属性仅对系统应用可用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly fluidLightMode?: FluidLightMode;

    /**
     * 输入法的额外信息。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    readonly extraConfig?: InputMethodExtraConfig;

    /**
     * 编辑器是否支持消费按键事件。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly consumeKeyEvents?: boolean;
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
     * 键值。详情请参阅[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly keyCode: int;

    /**
     * 按键事件类型。
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
   * 枚举输入法面板的状态类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum PanelFlag {
    /**
     * 固定样式。
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
     * 浮动样式。
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
     * 候选样式。
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
   * 枚举输入法面板的类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum PanelType {
    /**
     * 用于显示虚拟软键盘的面板。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SOFT_KEYBOARD = 0,

    /**
     * 用于显示状态栏的面板。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    STATUS_BAR
  }

  /**
   * 描述输入法面板的属性。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface PanelInfo {
    /**
     * 面板类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    type: PanelType;

    /**
     * 面板的状态类型。
     *
     * @default FLG_FIXED
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    flag?: PanelFlag;
  }

  /**
   * 枚举输入法光标移动的方向。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum Direction {
    /**
     * 向上。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_UP = 1,

    /**
     * 向下。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_DOWN,

    /**
     * 向左。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_LEFT,

    /**
     * 向右。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_RIGHT
  }

  /**
   * 描述安全模式。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  export enum SecurityMode {
    /**
     * 基本访问模式，限制网络访问。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    BASIC = 0,
    /**
     * 完全访问模式，不限制网络访问。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    FULL
  }

  /**
   * 描述选中文本的范围。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Range {
    /**
     * 文本框中第一个选中字符的索引。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * 文本框中最后一个选中字符的索引。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    end: int;
  }

  /**
   * 描述选择文本时光标移动的方向。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Movement {
    /**
     * 选择文本时光标移动的方向。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    direction: Direction;
  }

  /**
   * 描述文本框上扩展编辑操作的类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ExtendAction {
    /**
     * 全选。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SELECT_ALL = 0,

    /**
     * 剪切。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CUT = 3,

    /**
     * 复制。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    COPY = 4,

    /**
     * 粘贴。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PASTE = 5
  }

  /**
   * 表示窗口信息。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  export interface WindowInfo {
    /**
     * 窗口的矩形区域。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    rect: window.Rect;

    /**
     * 窗口状态类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    status: window.WindowStatusType;
  }

  /**
   * 表示输入法面板的大小。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  export interface PanelRect {
    /**
     * 横屏模式下输入法面板窗口的大小。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    landscapeRect: window.Rect;

    /**
     * 竖屏模式下输入法面板窗口的大小。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    portraitRect: window.Rect;
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
   * 表示自定义通信对象。
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
     * 接收绑定到输入法应用的编辑框应用发送的自定义数据回调。
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
     * 监听MessageHandler终止。
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
   * 表示增强输入法面板的大小，包括自定义避让区域和触摸区域。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export interface EnhancedPanelRect {
    /**
     * 横屏模式下输入法面板窗口的大小。
     * 
     * - 当**fullScreenMode**未设置或设置为**false**时，此属性是必填的。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    landscapeRect?: window.Rect;
    /**
     * 竖屏模式下输入法面板窗口的大小。
     * 
     * - 当**fullScreenMode**未设置或设置为**false**时，此属性是必填的。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    portraitRect?: window.Rect;
    /**
     * 横屏模式下避让线与面板顶部的距离，单位为px。默认值为**0**。
     * 
     * - 应用中的其他系统组件避让避让线以下的输入法面板区域。
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
     * 横屏模式下面板接收输入事件的区域。
     * 
     * - 数组大小限制为[1, 4]。默认值为横屏模式下的面板大小。
     * - 输入热点区域相对于输入法面板窗口的左顶点。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    landscapeInputRegion?: Array<window.Rect>;
    /**
     * 竖屏模式下避让线与面板顶部的距离，单位为px。默认值为**0**。
     * 
     * - 应用中的其他系统组件避让避让线以下的输入法面板区域。
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
     * 竖屏模式下面板接收输入事件的区域。
     * 
     * - The array size is limited to [1, 4]. 默认值为竖屏模式下的面板大小。
     * - 输入热点区域相对于输入法面板窗口的左顶点。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    portraitInputRegion?: Array<window.Rect>;
    /**
     * 表示是否启用全屏模式。默认值为**false**。
     * 
     * - 如果值为**true**，则**landscapeRect**和**portraitRect**是可选的。
     * - 如果值为**false**，则**landscapeRect**和**portraitRect**是必填的。
     *
     * @default false
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    fullScreenMode?: boolean;
  }

  /**
   * 表示面板上的键盘区域。
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
   * 定义绑定输入法的附加选项。
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
     * 如果未设置此属性或将其设置为无效值，则默认禁用简易键盘。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    isSimpleKeyboardEnabled?: boolean;
  }

  /**
   * 枚举文本首字母大写的模式。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CapitalizeMode {
    /**
     * 不大写。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 每个句子的首字母大写。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SENTENCES,

    /**
     * 每个单词的首字母大写。
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
}

export default inputMethodEngine;
