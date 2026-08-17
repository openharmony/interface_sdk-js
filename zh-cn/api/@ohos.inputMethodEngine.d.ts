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
 * @file 输入法服务
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
 * @brief @ohos.inputMethodEngine模块是面向输入法应用（包括系统输入法和第三方输入法）的服务端API模块，提供了输入法应用与系统输入法框架之间的交互能力。
 * <br>
 * <br>本模块是输入法应用的服务端接口，定义了输入法应用在运行期间所需的全部开放能力，包括输入法生命周期管理、软键盘面板的创建与控制、文本编辑操作（插入、删除、选中文本）、光标控制、物理键盘事件监听、安全模式管理、私有数据通信等。
 * <br>
 * <br>输入法应用通过本模块可以：1）订阅输入法绑定/解绑事件，感知编辑框的连接与断开；2）创建和管理软键盘面板（固定态、悬浮态、候选态）及状态栏面板，控制面板的显示、隐藏、大小调整、位置移动、沉浸模式等；3）通过InputClient对编辑
 * 框进行文本插入、删除、选中文本、移动光标、发送功能键和扩展编辑动作等操作；4）通过KeyboardDelegate监听物理键盘按键事件、光标位置变化、文本选择变化、文本内容变化、编辑框属性变化等；5）管理安全模式（基础模式/完全访问模
 * 式），支持隐私面板设置；6）与编辑框应用进行私有数据通信和自定义消息通信。
 * <br>
 * <br>当开发输入法应用时使用本模块。本模块需在InputMethodExtensionAbility中使用，适用于系统输入法开发、第三方输入法开发、自定义键盘布局等场景。
 * <br>
 * <br>本模块的核心开放能力由以下关键Interface承载：
 * <br>
 * | Interface/Class | 说明 |
 * |---|---|
 * | InputMethodAbility | 输入法能力对象，是输入法应用的核心入口。提供输入法生命周期事件订阅（绑定/解绑/键盘显示隐藏/子类型切换/安全模式变化等）、面板创建与销毁、安全模式获取等能力。
 * 通过`getInputMethodAbility()`获取实例。 |
 * | KeyboardDelegate | 键盘代理对象，提供物理键盘按键事件监听、光标位置变化监听、文本选择变化监听、文本内容变化监听、编辑框属性变化监听等能力。通过`getKeyboardDelegate()`获取实例。 |
 * | InputClient | 输入客户端对象，提供对编辑框的文本操作能力，包括插入文本、删除文本（前删/后删）、获取光标前后文本、移动光标、选中文本、发送功能键和扩展编辑动作、设置预览文本、发送私有数据、自定义消息通信等。
 * 通过订阅`inputStart`事件在回调中获取实例。 |
 * | KeyboardController | 键盘控制器对象，提供隐藏键盘、退出当前输入类型等能力。通过订阅`inputStart`事件在回调中获取实例。 |
 * | Panel | 输入法面板对象，提供面板页面内容加载、大小调整、位置移动、显示/隐藏、面板状态切换、隐私模式设置、沉浸模式与效果设置、面板矩形区域预设置、热区更新等能力。通过`createPanel()`获取实例。 |
 * | MessageHandler | 自定义通信对象，用于接收编辑框应用发送的自定义通信数据，并提供终止通知回调。通过`InputClient.recvMessage()`注册。 |
 * <br>
 * <br>输入法应用的典型使用流程涉及多个API的组合调用，核心流程为：获取InputMethodAbility实例 -> 订阅inputStart事件 -> 在回调中获取KeyboardController和InputClient -> 创建
 * Panel -> 加载面板页面内容 -> 通过InputClient操作编辑框文本 -> 通过KeyboardController控制键盘显隐。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace inputMethodEngine {
  /**
   * @brief 无功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_UNSPECIFIED: int;

  /**
   * @brief “前往”功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_GO: int;

  /**
   * @brief “搜索”功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_SEARCH: int;

  /**
   * @brief “发送”功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_SEND: int;

  /**
   * @brief “下一个”功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_NEXT: int;

  /**
   * @brief “回车”功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_DONE: int;

  /**
   * @brief “前一个”功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_PREVIOUS: int;

  /**
   * @brief “换行”功能键。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  const ENTER_KEY_TYPE_NEWLINE: int;

  /**
   * @brief 无特殊性编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_NULL: int;

  /**
   * @brief 文本编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_TEXT: int;

  /**
   * @brief 数字编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_NUMBER: int;

  /**
   * @brief 电话号码编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_PHONE: int;

  /**
   * @brief 日期编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_DATETIME: int;

  /**
   * @brief 邮件编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_EMAIL: int;

  /**
   * @brief 超链接编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_URI: int;

  /**
   * @brief 密码编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const PATTERN_PASSWORD: int;

  /**
   * @brief 锁屏密码编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  const PATTERN_PASSWORD_SCREEN_LOCK: int;

  /**
   * @brief 数字密码编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  const PATTERN_PASSWORD_NUMBER: int;

  /**
   * @brief 用户名编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  const PATTERN_USER_NAME: int;

  /**
   * @brief 新密码编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  const PATTERN_NEW_PASSWORD: int;

  /**
   * @brief 带小数点的数字编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  const PATTERN_NUMBER_DECIMAL: int;

  /**
   * @brief 验证码编辑框。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 20 dynamic
   * @since 23 static
   */
  const PATTERN_ONE_TIME_CODE: int;

  /**
   * @brief 编辑框处于选择状态。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const FLAG_SELECTING: int;

  /**
   * @brief 编辑框为单行。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const FLAG_SINGLE_LINE: int;

  /**
   * @brief 编辑框显示为半屏。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const DISPLAY_MODE_PART: int;

  /**
   * @brief 编辑框显示为全屏。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const DISPLAY_MODE_FULL: int;

  /**
   * @brief 允许输入ASCII值。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_ASCII: int;

  /**
   * @brief 不指定编辑框输入属性。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_NONE: int;

  /**
   * @brief 允许输入字符。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_AUTO_CAP_CHARACTERS: int;

  /**
   * @brief 允许输入句子。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_AUTO_CAP_SENTENCES: int;

  /**
   * @brief 允许输入单词。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_AUTO_WORDS: int;

  /**
   * @brief 允许输入多行。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_MULTI_LINE: int;

  /**
   * @brief 半屏样式。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const OPTION_NO_FULLSCREEN: int;

  /**
   * @brief 光标上移。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_UP: int;

  /**
   * @brief 光标下移。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_DOWN: int;

  /**
   * @brief 光标左移。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_LEFT: int;

  /**
   * @brief 光标右移。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const CURSOR_RIGHT: int;

  /**
   * @brief 输入法应用窗口风格标识。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  const WINDOW_TYPE_INPUT_METHOD_FLOAT: int;

  /**
   * @brief 获取输入法能力对象实例[InputMethodAbility]{@link inputMethodEngine.InputMethodAbility}，仅支持输入法应用调用。
   * <br>
   * <br>输入法应用获取该实例后，可订阅软键盘显示/隐藏请求事件、创建/销毁输入法面板等。
   *
   * @returns { InputMethodAbility } 输入法能力对象。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   */
  function getInputMethodAbility(): InputMethodAbility;

  /**
   * @brief 获取输入法能力对象实例[InputMethodAbility]{@link inputMethodEngine.InputMethodAbility}，仅支持输入法应用调用。
   * <br>
   * <br>输入法应用获取该实例后，可订阅软键盘显示/隐藏请求事件、创建/销毁输入法面板等。
   *
   * @returns { InputMethodAbility | null } 输入法能力对象。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  function getInputMethodAbility(): InputMethodAbility | null;

  /**
   * @brief 获取输入法应用客户端实例[InputMethodEngine]{@link inputMethodEngine.InputMethodEngine}（输入法引擎）。
   * <br>
   * <br>输入法应用获取该实例后，可订阅软键盘显示/隐藏请求事件等。
   * <br>
   * <br> > **说明：**
   * <br> >
   * <br> > 从 API version 8开始支持，从API version 9开始废弃。
   *
   * @returns { InputMethodEngine } 输入法应用客户端。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethodEngine.getInputMethodAbility()
   */
  function getInputMethodEngine(): InputMethodEngine;

  /**
   * @brief 获取客户端编辑事件监听代理实例[KeyboardDelegate]{@link inputMethodEngine.KeyboardDelegate}（键盘代理对象）。
   * <br>
   * <br>输入法应用获取该实例后，可订阅物理键盘按键事件、选中文本变化事件等。
   *
   * @returns { KeyboardDelegate } 客户端编辑事件监听代理。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   */
  function getKeyboardDelegate(): KeyboardDelegate;

  /**
   * @brief 获取客户端编辑事件监听代理实例[KeyboardDelegate]{@link inputMethodEngine.KeyboardDelegate}（键盘代理对象）。
   * <br>
   * <br>输入法应用获取该实例后，可订阅物理键盘按键事件、选中文本变化事件等。
   *
   * @returns { KeyboardDelegate | null } 客户端编辑事件监听代理。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  function getKeyboardDelegate(): KeyboardDelegate | null;

  /**
   * @brief 获取客户端编辑事件监听代理实例[KeyboardDelegate]{@link inputMethodEngine.KeyboardDelegate}。输入法应用获取该实例后，可订阅物理键盘按键事件、选中文本变化事件等。
   * <br>
   * <br> > **说明：**
   * <br> >
   * <br> > 从 API version 8开始支持，从API version 9开始废弃。
   * 
   * @returns { KeyboardDelegate } 客户端编辑事件监听代理。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethodEngine.getKeyboardDelegate()
   */
  function createKeyboardDelegate(): KeyboardDelegate;

  /**
   * @brief 表示私有数据类型，接口参数具体类型根据其功能而定。
   *
   * @unionmember { int } 表示值类型为数字。
   * @unionmember { string } 表示值类型为字符串。
   * @unionmember { boolean } 表示值类型为布尔值。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  type CommandDataType = int | string | boolean;

  /**
   * @brief 输入法绑定成功事件的回调函数类型，用于定义inputStart事件触发时执行的回调函数格式。
   *
   * @param { KeyboardController } kbController - 回调函数，返回输入法操作相关实例。
   * @param { InputClient } inputClient - 输入法操作相关实例。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 static
   */
  export type IMAInputStartCallback = (kbController: KeyboardController, inputClient: InputClient) => void;

  /**
   * @brief 按键按下（keyDown）或按键抬起（keyUp）事件的回调函数类型，用于定义这两类按键事件触发时执行的回调函数格式。
   *
   * @param { KeyEvent } event - 按键事件对象，包含按键码、按键类型、事件时间等按键相关信息。
   * @returns { boolean } 是否消费该按键事件：返回true表示消费，系统不再向下传递该事件；返回false表示不消费，系统继续处理该事件。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type KeyEventCallback = (event: KeyEvent) => boolean;

  /**
   * @brief 按键事件（keyEvent）的回调函数类型，用于定义keyEvent事件触发时执行的回调函数格式。
   *
   * @param { InputKeyEvent } event - 输入按键事件对象，包含按键编码、事件类型、触发时间等按键事件相关信息。
   * @returns { boolean } 是否消费该按键事件：返回true表示消费此事件，系统不再向下传递该事件；返回false表示不消费此事件，系统将继续处理该事件。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type InputKeyEventCallback = (event: InputKeyEvent) => boolean;

  /**
   * @brief 光标上下文变化（cursorContextChange）事件的回调函数类型，用于定义该事件触发时执行的回调函数格式。
   *
   * @param { double } x - x为光标上端的x坐标值，单位为px。
   * @param { double } y - y为光标上端的y坐标值，单位为px。
   * @param { double } height - height为光标的高度值，单位为px。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type CursorContextChangeCallback = (x: double, y: double, height: double) => void;

  /**
   * @brief 文本选择范围变化（selectionChange）事件的回调函数类型，用于定义该事件触发时执行的回调函数格式。
   *
   * @param { int } oldBegin - oldBegin为变化前被选中文本的起始下标。
   * @param { int } oldEnd - oldEnd为变化前被选中文本的终止下标。
   * @param { int } newBegin - newBegin为变化后被选中文本的起始下标。
   * @param { int } newEnd - newEnd为变化后被选中文本的终止下标。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type SelectionChangeCallback = (oldBegin: int, oldEnd: int, newBegin: int, newEnd: int) => void;

  /**
   * @brief 当输入法面板大小变化时触发的回调。
   *
   * @param { window.Size } size - 当前面板大小，包含宽度和高度。
   * @param { KeyboardArea } keyboardArea - 当前面板的键盘区域大小。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  export type SizeUpdateCallback = (size: window.Size, keyboardArea: KeyboardArea) => void;

  /**
   * @brief 当输入法面板大小变化时触发的回调。
   *
   * @param { window.Size } size - 当前面板大小。
   * @param { KeyboardArea } [keyboardArea] - 当前面板中可作为键盘区域的大小。当需要获取或监听键盘区域变化时传入此参数，不传入时默认为undefined（不返回键盘区域信息）。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export type SizeChangeCallback = (size: window.Size, keyboardArea?: KeyboardArea) => void;

  /**
   * @brief 下列API均需使用
   * [on('inputStart')]{@link inputMethodEngine.InputMethodAbility.on(type: 'inputStart', callback: (kbController: KeyboardController, inputClient: InputClient) => void)}
   * 获取到KeyboardController实例后，通过实例调用。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyboardController {
    /**
     * @brief 隐藏输入法。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当输入法隐藏成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hide(callback: AsyncCallback<void>): void;

    /**
     * @brief 隐藏输入法。使用promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    hide(): Promise<void>;

    /**
     * @brief 隐藏输入法。使用callback异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当输入法隐藏成功，err为undefined，否则为错误对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.KeyboardController.hide(callback: AsyncCallback<void>)
     */
    hideKeyboard(callback: AsyncCallback<void>): void;

    /**
     * @brief 隐藏输入法。使用promise异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.KeyboardController.hide()
     */
    hideKeyboard(): Promise<void>;

    /**
     * @brief 退出当前输入类型，仅支持系统配置的默认输入法应用调用。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当退出当前输入类型成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    exitCurrentInputType(callback: AsyncCallback<void>): void;

    /**
     * @brief 退出当前输入类型，仅支持系统配置的默认输入法应用调用。使用promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
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
   * > **说明：**
   * <br> >
   * <br> > 从 API version 8开始支持，从API version 23开始废弃。
   * <br> > 下列API均需使用[getInputMethodEngine]{@link inputMethodEngine.getInputMethodEngine}获取到InputMethodEngine实例后，通过实例调用。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 23
   * @useinstead inputMethodEngine.InputMethodAbility
   */
  interface InputMethodEngine {
    /**
     * @brief 订阅输入法绑定成功事件。使用callback异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从API version 8开始支持，API version 23开始废弃。
     *
     * @param { 'inputStart' } type - 设置监听类型，固定取值为'inputStart'。
     * @param { function } callback - 回调函数，返回订阅输入法的KeyboardController和TextInputClient实例。
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
     * @brief 取消订阅输入法绑定成功事件。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从API version 8开始支持，API version 23开始废弃。
     *
     * @param { 'inputStart' } type - 设置监听类型，固定取值为'inputStart'。
     * @param { function } callback - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
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
     * @brief 订阅输入法软键盘显示或隐藏事件。使用callback异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从API version 8开始支持，API version 23开始废弃。
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - 设置监听类型。<br/>-'keyboardShow'表示显示输入法软键盘。<br/>-'keyboardHide'表示隐藏输
     *     入法软键盘。
     * @param { function } callback - 回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 23
     * @useinstead inputMethodEngine.InputMethodAbility.on(type: 'keyboardShow' | 'keyboardHide', callback: () => void)
     */
    on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void;

    /**
     * @brief 取消订阅输入法软键盘显示或隐藏事件。使用callback异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从API version 8开始支持，API version 23开始废弃。
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - 要取消监听的输入法软键盘事件类型。<br/>-'keyboardShow'表示显示输入法软键盘。<br/>-'
     *     keyboardHide'表示隐藏输入法软键盘。
     * @param { function } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 23
     * @useinstead inputMethodEngine.InputMethodAbility.off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void)
     */
    off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void;
  }

  /**
   * @brief InputMethodAbility是输入法应用的核心能力对象，提供输入法生命周期管理、面板创建与销毁、事件订阅等功能。输入法应用通过
   * [getInputMethodAbility]{@link inputMethodEngine.getInputMethodAbility}获取该实例。
   * <br>
   * <br>核心功能概述：
   * <br>
   * <br>- 生命周期事件订阅：通过on('inputStart')订阅输入法绑定事件获取[KeyboardController]{@link inputMethodEngine.KeyboardController}和
   * [InputClient]{@link inputMethodEngine.InputClient}实例，通过on('inputStop')订阅输入法解绑事件，通过on('keyboardShow'|'keyboardHide')
   * 订阅软键盘显示/隐藏事件。
   * <br>- 面板管理：通过
   * [createPanel]{@link inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>)}
   * 创建输入法面板，通过
   * [destroyPanel]{@link inputMethodEngine.InputMethodAbility.destroyPanel(panel: Panel, callback: AsyncCallback<void>)}
   * 销毁面板。createPanel与destroyPanel需配对调用，防止资源泄漏。
   * <br>- 子类型与安全模式：通过on('setSubtype')订阅输入法子类型变化事件，通过on('securityModeChange')订阅安全模式变化事件，通过
   * [getSecurityMode]{@link inputMethodEngine.InputMethodAbility.getSecurityMode}获取当前安全模式。
   * <br>- 私有通信：通过on('privateCommand')订阅应用私有数据事件，用于输入法应用与绑定应用之间的私有数据交互。
   * <br>- 屏幕与窗口信息：通过on('setCallingWindow')订阅调用方窗口变化事件，通过on('callingDisplayDidChange')订阅屏幕ID变化事件，通过on('discardTypingText')订阅
   * 丢弃文本事件。
   * <br>
   * <br>典型调用顺序：
   * <br>
   * <br>1. 输入法应用在[InputMethodExtensionAbility]{@link @ohos.InputMethodExtensionAbility:InputMethodExtensionAbility}的onCreate生命周期中调用getInputMethodAbility()获取实例。
   * <br>2. 订阅on('inputStart')事件，在回调中获取KeyboardController和InputClient实例。
   * <br>3. 在on('inputStart')回调中调用createPanel()创建面板，并调用panel.setUiContent()加载键盘页面。
   * <br>4. 订阅on('keyboardShow'|'keyboardHide')事件，在回调中调用panel.show()/panel.hide()显示/隐藏面板。
   * <br>5. 在InputMethodExtensionAbility的onDestroy生命周期中调用destroyPanel()销毁面板，取消所有事件订阅。
   * 
   * 下列API均需使用[getInputMethodAbility]{@link inputMethodEngine.getInputMethodAbility}获取到InputMethodAbility实例后，通过实例调用。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  interface InputMethodAbility {
    /**
     * @brief 订阅输入法绑定成功事件。使用callback异步回调。
     * <br>
     * <br>使用场景：输入法应用需要在编辑框获得焦点并绑定输入法时，获取KeyboardController和InputClient实例以进行后续的键盘操作和文本交互。
     * <br>
     * <br>使用后效果：当编辑框绑定到输入法应用时，触发回调并返回KeyboardController和InputClient实例。输入法应用可在回调中创建面板、加载键盘页面、订阅KeyboardDelegate事件等。
     *
     * @param { 'inputStart' } type - 设置监听类型，固定取值为'inputStart'。
     * @param { function } callback - 回调函数，返回输入法操作相关实例。kbController为键盘控制器实例，用于控制键盘显示/隐藏；inputClient为输入客户端实例，用于与编辑框进行文本交
     *     互。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'inputStart', callback: (kbController: KeyboardController, inputClient: InputClient) => void): void;

    /**
     * @brief 取消订阅输入法绑定成功事件。使用callback异步回调。
     *
     * @param { 'inputStart' } type - 设置监听类型，固定取值为'inputStart'。
     * @param { function } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'inputStart', callback?: (kbController: KeyboardController, inputClient: InputClient) => void): void;

    /**
     * @brief 订阅停止输入法应用事件。使用callback异步回调。
     * <br>
     * <br>使用场景：输入法应用需要在编辑框失去焦点或用户切换输入法时，执行清理操作（如隐藏面板、释放资源）。
     * <br>
     * <br>使用后效果：当输入法应用被停止绑定时触发回调。输入法应用应在回调中隐藏面板、取消事件订阅、释放InputClient相关资源。
     *
     * @param { 'inputStop' } type - 设置监听类型，固定取值为'inputStop'。
     * @param { function } callback - 回调函数，无返回参数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'inputStop', callback: () => void): void;

    /**
     * @brief 取消订阅停止输入法应用事件。使用callback异步回调。
     *
     * @param { 'inputStop' } type - 设置监听类型，固定取值为'inputStop'。
     * @param { function } callback - 取消订阅的回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'inputStop', callback: () => void): void;

    /**
     * @brief 订阅设置调用窗口事件。使用callback异步回调。
     * <br>
     * <br>使用场景：输入法应用需要在绑定应用的窗口发生变化时（如应用切换窗口、多窗口场景），调整面板位置或重新定位。
     * <br>
     * <br>使用后效果：当调用方窗口发生变化时触发回调，返回新的窗口ID。输入法应用可根据窗口ID调整面板位置。
     *
     * @param { 'setCallingWindow' } type - 设置监听类型，固定取值为'setCallingWindow'。
     * @param { function } callback - 回调函数，参数为调用方窗口的Id。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'setCallingWindow', callback: (wid: number) => void): void;

    /**
     * @brief 取消订阅设置调用窗口事件。使用callback异步回调。
     *
     * @param { 'setCallingWindow' } type - 设置监听类型，固定取值为'setCallingWindow'。
     * @param { function } callback - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'setCallingWindow', callback: (wid: number) => void): void;

    /**
     * @brief 订阅输入法软键盘显示或隐藏事件。使用callback异步回调。
     * <br>
     * <br>使用场景：输入法应用需要在软键盘显示/隐藏时，执行相应的界面更新操作（如调整面板布局、更新候选词区域）。
     * <br>
     * <br>使用后效果：当软键盘显示请求触发时，'keyboardShow'回调被调用，输入法应用应在回调中调用panel.show()显示面板；当软键盘隐藏请求触发时，'keyboardHide'回调被调用，输入法应用应在回调中调用
     * panel.hide()隐藏面板。
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - 设置监听类型。<br/>- 'keyboardShow'表示显示输入法软键盘。<br/>- 'keyboardHide'表示隐
     *     藏输入法软键盘。
     * @param { function } callback - 回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'keyboardShow' | 'keyboardHide', callback: () => void): void;

    /**
     * @brief 取消订阅输入法软键盘显示或隐藏事件。使用callback异步回调。
     *
     * @param { 'keyboardShow' | 'keyboardHide' } type - 设置监听类型。<br/>- 'keyboardShow'表示显示输入法软键盘。<br/>- 'keyboardHide'表示隐
     *     藏输入法软键盘。
     * @param { function } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'keyboardShow' | 'keyboardHide', callback?: () => void): void;

    /**
     * @brief 订阅设置输入法子类型事件。使用callback异步回调。
     * <br>
     * <br>使用场景：输入法应用需要在子类型（如语言、输入模式）发生变化时，切换到对应的键盘布局或输入逻辑。
     * <br>
     * <br>使用后效果：当输入法子类型变化时触发回调，返回新的输入法子类型信息。
     *
     * @param { 'setSubtype' } type - 设置监听类型，固定取值为'setSubtype'。
     * @param { function } callback - 回调函数，返回设置的输入法子类型（InputMethodSubtype，输入法子类型）。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(type: 'setSubtype', callback: (inputMethodSubtype: InputMethodSubtype) => void): void;

    /**
     * @brief 取消订阅设置输入法子类型事件。使用callback异步回调。
     *
     * @param { 'setSubtype' } type - 设置监听类型，固定取值为'setSubtype'。
     * @param { function } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(type: 'setSubtype', callback?: (inputMethodSubtype: InputMethodSubtype) => void): void;

    /**
     * @brief 订阅输入法安全模式改变类型事件。使用callback异步回调。
     * <br>
     * <br>使用场景：输入法应用需要在安全模式发生变化时（如编辑框切换到密码输入模式、隐私模式等），调整键盘行为（如禁止截图、切换到安全键盘布局等）。
     * <br>
     * <br>使用后效果：当安全模式变化时触发回调，返回当前的安全模式值。
     *
     * @param { 'securityModeChange' } type - 设置监听类型，固定取值为'securityModeChange'。
     * @param { Callback<SecurityMode> } callback - 回调函数，返回当前输入法应用的安全模式。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     */
    on(type: 'securityModeChange', callback: Callback<SecurityMode>): void;

    /**
     * @brief 取消订阅输入法安全模式改变类型事件。使用callback异步回调。
     *
     * @param { 'securityModeChange' } type - 设置监听类型，固定取值为'securityModeChange'。
     * @param { Callback<SecurityMode> } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     */
    off(type: 'securityModeChange', callback?: Callback<SecurityMode>): void;

    /**
     * @brief 订阅输入法私有数据事件。使用callback异步回调。
     * <br>
     * <br>使用场景：应用与输入法之间需要传递私有数据（如自定义命令、配置信息等）时使用。仅系统默认输入法应用可订阅此事件。
     * <br>
     * <br>使用后效果：当绑定应用向输入法发送私有数据时触发回调，返回私有数据记录。
     *
     * @param { 'privateCommand' } type - 设置监听类型，固定取值为'privateCommand'。
     * @param { Callback<Record<string, CommandDataType>> } callback - 回调函数，返回向输入法应用发送的私有数据。
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    on(type: 'privateCommand', callback: Callback<Record<string, CommandDataType>>): void;

    /**
     * @brief 取消订阅输入法私有数据事件。使用callback异步回调。
     *
     * @param { 'privateCommand' } type - 设置监听类型，固定取值为'privateCommand'。
     * @param { Callback<Record<string, CommandDataType>> } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    off(type: 'privateCommand', callback?: Callback<Record<string, CommandDataType>>): void;

    /**
     * @brief 订阅编辑框对应窗口所在屏幕ID变化事件。使用callback异步回调。
     * <br>
     * <br>使用场景：多屏幕设备场景下，编辑框在不同屏幕间切换时，输入法应用需根据新的屏幕ID调整面板位置和大小。
     * <br>
     * <br>使用后效果：当编辑框所在屏幕ID发生变化时触发回调，返回新的屏幕ID。
     *
     * @param { 'callingDisplayDidChange' } type - 设置监听类型，固定取值为'callingDisplayDidChange'。
     * @param { Callback<number> } callback - 回调函数，返回编辑框设置对应窗口屏幕ID。
     * @throws { BusinessError } 801 - capability not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18 dynamic
     */
    on(type: 'callingDisplayDidChange', callback: Callback<number>): void;

    /**
     * @brief 取消订阅编辑框对应窗口所在屏幕ID变化事件。使用callback异步回调。
     *
     * @param { 'callingDisplayDidChange' } type - 设置监听类型，固定取值为'callingDisplayDidChange'。
     * @param { Callback<number> } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18 dynamic
     */
    off(type: 'callingDisplayDidChange', callback?: Callback<number>): void;

    /**
     * @brief 订阅编辑框应用发送\u201c清空候选词\u201d事件到输入法。使用callback异步回调。
     * <br>
     * <br>使用场景：编辑框应用需要通知输入法清空当前候选词列表时使用（如用户切换输入框、提交表单后等场景）。
     * <br>
     * <br>使用后效果：当编辑框应用发送清空候选词请求时触发回调，输入法应用应在回调中清空候选词列表和预输入文本。
     *
     * @param { 'discardTypingText' } type - 设置监听类型，固定取值为'discardTypingText'。<br/> - 'discardTypingText'：表示订阅编辑框应用发送“清空候
     *     选词”事件到输入法。
     * @param { Callback<void> } callback - 回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     */
    on(type: 'discardTypingText', callback: Callback<void>): void;

    /**
     * @brief 取消订阅编辑框应用发送\u201c清空候选词\u201d事件到输入法。使用callback异步回调。
     * <br>
     * <br>使用场景：编辑框应用需要通知输入法清空当前候选词列表时使用（如用户切换输入框、提交表单后等场景）。
     * <br>
     * <br>使用后效果：当编辑框应用发送清空候选词请求时触发回调，输入法应用应在回调中清空候选词列表和预输入文本。
     *
     * @param { 'discardTypingText' } type - 设置监听类型，固定取值为'discardTypingText'。<br/> - 'discardTypingText'：表示取消订阅编辑框应用发送“清
     *     空候选词”事件到输入法。
     * @param { Callback<void> } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     */
    off(type: 'discardTypingText', callback?: Callback<void>): void;

    /**
     * @brief 获取输入法应用的当前安全模式。
     *
     * @returns { SecurityMode } 安全模式。
     * @throws { BusinessError } 12800004 - not an input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getSecurityMode(): SecurityMode;

    /**
     * @brief 创建输入法面板，仅支持输入法应用在
     * [InputMethodExtensionAbility]{@link @ohos.InputMethodExtensionAbility:InputMethodExtensionAbility}（输入法扩展能力）类中调用。使
     * 用callback异步回调。
     * <br>
     * <br>配对调用：
     * <br>
     * <br>- 调用createPanel()创建面板后，必须在使用完毕后调用
     * [destroyPanel]{@link inputMethodEngine.InputMethodAbility.destroyPanel(panel: Panel, callback: AsyncCallback<void>)}
     * 销毁面板以释放资源。
     * <br>- 未调用destroyPanel()会导致面板资源泄漏，影响系统资源使用。
     * <br>- 单个输入法应用仅允许创建一个软键盘类型和一个状态栏类型的面板。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 单个输入法应用仅允许创建一个[软键盘类型]{@link inputMethodEngine.PanelType}和一个[状态栏类型]{@link inputMethodEngine.PanelType}的面板。
     * <br> >
     * <br> > 输入法面板不支持创建子窗口。例如：不支持使用window.createWindow[设置应用子窗口](docroot://windowmanager/application-window-fa.md#设置应用子窗口)、
     * <br> > [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
     * <br> > 、[CustomDialog]{@link ./@internal/component/ets/custom_dialog_controller}等接口创建子窗口弹窗。建议开发者采用非子窗的替代方案，如
     * <br> > [弹出框]{@link @ohos.arkui.advanced.Dialog}、
     * <br> > [bindMenu]{@link CommonMethod#bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)}或设置
     * <br> > showInSubwindow为false。
     *
     * @param { BaseContext } ctx - 当前输入法应用上下文信息。
     * @param { PanelInfo } info - 输入法面板信息。
     * @param { AsyncCallback<Panel> } callback - 回调函数。当输入法面板创建成功，err为undefined，data为获取到的Panel对象;否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800004 - not an input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>): void;

    /**
     * @brief 创建输入法面板，仅支持输入法应用在
     * [InputMethodExtensionAbility]{@link @ohos.InputMethodExtensionAbility:InputMethodExtensionAbility}类中调用。使用promise异
     * 步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 单个输入法应用仅允许创建一个[软键盘类型]{@link inputMethodEngine.PanelType}和一个[状态栏类型]{@link inputMethodEngine.PanelType}的面板。
     * <br> >
     * <br> > 输入法面板不支持创建子窗口。例如：不支持使用window.createWindow[设置应用子窗口](docroot://windowmanager/application-window-fa.md#设置应用子窗口)、
     * <br> > [bindContextMenu]{@link CommonMethod#bindContextMenu(content: CustomBuilder, responseType: ResponseType, options?: ContextMenuOptions)}
     * <br> > 、[CustomDialog]{@link ./@internal/component/ets/custom_dialog_controller}等接口创建子窗口弹窗。建议开发者采用非子窗的替代方案，如
     * <br> > [弹出框]{@link @ohos.arkui.advanced.Dialog}、
     * <br> > [bindMenu]{@link CommonMethod#bindMenu(content: Array<MenuElement> | CustomBuilder, options?: MenuOptions)}或设置
     * <br> > showInSubwindow为false。
     *
     * @param { BaseContext } ctx - 当前输入法应用上下文信息。
     * @param { PanelInfo } info - 输入法面板信息。
     * @returns { Promise<Panel> } Promise对象，返回Panel对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @throws { BusinessError } 12800004 - not an input method application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    createPanel(ctx: BaseContext, info: PanelInfo): Promise<Panel>;

    /**
     * @brief 销毁输入法面板。需先通过 
     * [createPanel]{@link inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>)}
     * 创建面板后调用。使用callback异步回调。
     * <br>
     * <br>配对调用：
     * <br>
     * <br>- 必须与
     * [createPanel]{@link inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>)}
     * 方法配合使用，用于销毁由createPanel()创建的输入法面板。
     * <br>- 销毁的面板必须是已成功创建的面板对象。
     * <br>- 未正确销毁面板会导致资源泄漏，建议在面板使用完毕后及时调用destroyPanel()释放资源。
     *
     * @param { Panel } panel - 要销毁的面板对象。
     * @param { AsyncCallback<void> } callback - 回调函数。当输入法面板销毁成功，err为undefined，否则为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    destroyPanel(panel: Panel, callback: AsyncCallback<void>): void;

    /**
     * @brief 销毁输入法面板。使用promise异步回调。
     * <br>
     * <br>配对调用：
     * <br>
     * <br>- 必须与
     * [createPanel]{@link inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>)}
     * 方法配合使用，用于销毁由createPanel()创建的输入法面板。
     * <br>- 销毁的面板必须是已成功创建的面板对象。
     * <br>- 未正确销毁面板会导致资源泄漏，建议在面板使用完毕后及时调用destroyPanel()释放资源。
     *
     * @param { Panel } panel - 要销毁的面板对象。
     * @returns { Promise<void> } the promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    destroyPanel(panel: Panel): Promise<void>;

    /**
     * @brief 订阅输入法绑定成功事件。使用callback异步回调。
     *
     * @param { IMAInputStartCallback } callback - 回调函数，返回订阅输入法的KeyboardController和TextInputClient实例。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onInputStart(callback: IMAInputStartCallback): void;
    /**
     * @brief 取消订阅输入法绑定成功事件。
     *
     * @param { IMAInputStartCallback } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offInputStart(callback?: IMAInputStartCallback): void;

    /**
     * @brief 订阅停止输入法应用事件。使用callback异步回调。
     *
     * @param { Callback<void> } callback - 系统要求输入法终止输入流程时触发的回调函数，无入参，用于执行输入停止后的清理逻辑（如隐藏键盘、释放资源等）。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onInputStop(callback: Callback<void>): void;
    /**
     * @brief 取消订阅输入法输入停止（[inputStop]{@link inputMethodEngine.InputMethodAbility.onInputStop(callback: Callback<void>)}）事件，停止监听
     * 系统要求输入法终止输入流程的触发动作。
     *
     * @param { Callback<void> } callback - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offInputStop(callback: Callback<void>): void;

    /**
     * @brief 订阅设置调用窗口事件。使用callback异步回调。
     *
     * @param { Callback<int> } callback - 回调函数，返回调用方窗口的Id。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSetCallingWindow(callback: Callback<int>): void;
    /**
     * @brief 取消订阅编辑框设置调用窗口 ID（
     * [setCallingWindow]{@link inputMethodEngine.InputMethodAbility.onSetCallingWindow(callback: Callback<int>)}）事件，停止监
     * 听编辑框设置调用窗口标识的触发动作。
     *
     * @param { Callback<int> } callback - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSetCallingWindow(callback: Callback<int>): void;

    /**
     * @brief 订阅输入法软键盘显示或隐藏事件。使用callback异步回调。
     *
     * @param { Callback<void> } callback - 回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyboardShow(callback: Callback<void>): void;
    /**
     * @brief 取消订阅输入法事件。使用callback异步回调。
     *
     * @param { Callback<void> } [callback] - 回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyboardShow(callback?: Callback<void>): void;

    /**
     * @brief 订阅输入法软键盘显示或隐藏事件。使用callback异步回调。
     *
     * @param { Callback<void> } callback - 回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyboardHide(callback: Callback<void>): void;
    /**
     * @brief 取消订阅输入法键盘隐藏（[keyboardHide]{@link inputMethodEngine.InputMethodAbility.onKeyboardHide(callback: Callback<void>)}）事
     * 件，停止监听输入法键盘隐藏的触发动作。
     *
     * @param { Callback<void> } [callback] - 系统通知切换输入子类型时触发的特定回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyboardHide(callback?: Callback<void>): void;

    /**
     * @brief 订阅设置输入法子类型事件。使用callback异步回调。
     *
     * @param { Callback<InputMethodSubtype> } callback - 回调函数，返回设置的输入法子类型。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSetSubtype(callback: Callback<InputMethodSubtype>): void;
    /**
     * @brief 取消订阅输入法软键盘显示或隐藏事件。使用callback异步回调。
     *
     * @param { Callback<InputMethodSubtype> } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSetSubtype(callback?: Callback<InputMethodSubtype>): void;

    /**
     * @brief 订阅输入法安全模式改变类型事件。使用callback异步回调。
     *
     * @param { Callback<SecurityMode> } callback - 回调函数，返回当前输入法应用的安全模式。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSecurityModeChange(callback: Callback<SecurityMode>): void;
    /**
     * @brief 取消订阅输入法安全模式改变类型事件。使用callback异步回调。
     *
     * @param { Callback<SecurityMode> } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSecurityModeChange(callback?: Callback<SecurityMode>): void;

    /**
     * @brief 订阅输入法私有数据事件。使用callback异步回调。
     *
     * @param { Callback<Record<string, CommandDataType>> } callback - 回调函数，返回向输入法应用发送的私有数据。
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onPrivateCommand(callback: Callback<Record<string, CommandDataType>>): void;
    /**
     * @brief 取消订阅输入法私有数据事件。使用callback异步回调。
     *
     * @param { Callback<Record<string, CommandDataType>> } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @throws { BusinessError } 12800010 - not the preconfigured default input method.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offPrivateCommand(callback?: Callback<Record<string, CommandDataType>>): void;

    /**
     * @brief 订阅编辑框对应窗口所在屏幕ID变化。使用callback异步回调。
     *
     * @param { Callback<int> } callback - 回调函数，返回编辑框设置对应窗口屏幕ID。
     * @throws { BusinessError } 801 - capability not supported.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onCallingDisplayDidChange(callback: Callback<int>): void;
    /**
     * @brief 取消编辑框对应窗口所在屏幕ID变化。使用callback异步回调。
     *
     * @param { Callback<int> } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offCallingDisplayDidChange(callback?: Callback<int>): void;

    /**
     * @brief 订阅编辑框应用发送“清空候选词”事件到输入法。使用callback异步回调。
     *
     * @param { Callback<void> } callback - 回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onDiscardTypingText(callback: Callback<void>): void;
    /**
     * @brief 取消订阅编辑框应用发送“清空候选词”事件到输入法。使用callback异步回调。
     *
     * @param { Callback<void> } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offDiscardTypingText(callback?: Callback<void>): void;
  }

  /**
   * @brief 下列API示例中都需使用
   * [on('inputStart')]{@link inputMethodEngine.InputMethodEngine.on( type: 'inputStart', callback: (kbController: KeyboardController, textInputClient: TextInputClient) => void )}
   * 回调获取到TextInputClient实例，再通过此实例调用对应方法。
   * <br>
   * <br> > **说明：**
   * <br> >
   * <br> > 从 API version 8开始支持，从API version 9开始废弃。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethodEngine.InputClient
   */
  interface TextInputClient {
    /**
     * @brief 发送功能键。使用callback异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { number } action - 功能键键值。<br/>- 当值为0时，表示无效按键；<br/>- 当值为1时，表示确认键（即回车键）。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当功能键发送成功，err为undefined，data为true；当功能键发送失败，err为undefined，data为
     *     false；否则为错误对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.sendKeyFunction(action: int, callback: AsyncCallback<boolean>)
     */
    sendKeyFunction(action: number, callback: AsyncCallback<boolean>): void;

    /**
     * @brief 发送功能键。使用promise异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { number } action - 功能键键值。<br/>当值为0时，表示无效按键；<br/>当值为1时，表示确认键（即回车键）。
     * @returns { Promise<boolean> } Promise对象。返回true表示发送功能键成功；返回false表示发送功能键失败。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.sendKeyFunction(action: int): Promise<boolean>
     */
    sendKeyFunction(action: number): Promise<boolean>;

    /**
     * @brief 删除光标前固定长度的文本。使用callback异步回调。
     * <br>
     * <br>使用场景：实现退格键功能、逐字删除输入、删除错误的输入、实现自定义删除逻辑等。
     * <br>
     * <br> 使用后效果：成功时返回true，编辑框中光标前指定长度的文本被删除。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { number } length - 文本长度。不能小于0。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当光标前固定长度的文本删除成功，err为undefined，data为true；当光标前固定长度的文本删除失败，err为
     *     undefined，data为false；否则为错误对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.deleteForward(length: int, callback: AsyncCallback<boolean>)
     */
    deleteForward(length: number, callback: AsyncCallback<boolean>): void;

    /**
     * @brief 删除光标前固定长度的文本。使用promise异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { number } length - 文本长度。不能小于0。
     * @returns { Promise<boolean> } Promise对象。resolve返回true表示删除光标前固定长度的文本成功；resolve返回false表示删除光标前固定长度的文本失败；reject时抛出错误对
     *     象，表示执行过程中发生错误。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.deleteForward(length: int): Promise<boolean>
     */
    deleteForward(length: number): Promise<boolean>;

    /**
     * @brief 删除光标后固定长度的文本。使用callback异步回调。
     * <br>
     * <br>使用场景：实现删除键功能、删除光标后的字符、快速修正输入、实现自定义删除逻辑等。
     * <br>
     * <br>使用后效果：成功时返回true，编辑框中光标后指定长度的文本被删除。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { number } length - 文本长度。不能小于0。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当光标后固定长度的文本删除成功，err为undefined，data为true；否则为错误对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.deleteBackward(length: int, callback: AsyncCallback<boolean>)
     */
    deleteBackward(length: number, callback: AsyncCallback<boolean>): void;

    /**
     * @brief 删除光标后固定长度的文本。使用promise异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { number } length - 文本长度。不能小于0。
     * @returns { Promise<boolean> } Promise对象。返回true表示删除光标后固定长度的文本成功；返回false表示删除光标后固定长度的文本失败。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.deleteBackward(length: int): Promise<boolean>
     */
    deleteBackward(length: number): Promise<boolean>;

    /**
     * @brief 插入文本。使用callback异步回调。
     * <br>
     * <br>使用场景：插入候选词、插入特殊符号、实现文本自动补全、快速插入常用短语等。
     * <br>
     * <br>使用后效果：成功时返回true，文本已插入到编辑框光标位置。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { string } text - 文本。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当文本插入成功，err为undefined，data为true；否则为错误对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.insertText(text: string, callback: AsyncCallback<boolean>)
     */
    insertText(text: string, callback: AsyncCallback<boolean>): void;

    /**
     * @brief 插入文本。使用promise异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { string } text - 文本。
     * @returns { Promise<boolean> } Promise对象。返回true表示插入文本成功；返回false表示插入文本失败。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.insertText(text: string): Promise<boolean>
     */
    insertText(text: string): Promise<boolean>;

    /**
     * @brief 获取光标前固定长度的文本。使用callback异步回调。
     * <br>
     * <br>使用场景：分析已输入文本内容以提供智能补全建议、检查文本格式、实现文本预测功能、实现文本语义分析等。
     * <br>
     * <br>使用后效果：成功时返回光标前指定长度的文本字符串，输入法应用可据此更新候选词或输入建议。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { number } length - 文本长度。不能小于0。
     * @param { AsyncCallback<string> } callback - 回调函数。当光标前固定长度的文本获取成功，err为undefined，data为获取到的文本；否则为错误对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getForward(length: int, callback: AsyncCallback<string>)
     */
    getForward(length: number, callback: AsyncCallback<string>): void;

    /**
     * @brief 获取光标前固定长度的文本。使用promise异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { number } length - 文本长度。不能小于0。
     * @returns { Promise<string> } Promise对象，返回光标前固定长度的文本。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getForward(length: int): Promise<string>
     */
    getForward(length: number): Promise<string>;

    /**
     * @brief 获取光标后固定长度的文本。使用callback异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { number } length - 文本长度。不能小于0。
     * @param { AsyncCallback<string> } callback - 回调函数。当光标后固定长度的文本获取成功，err为undefined，data为获取到的文本；否则为错误对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getBackward(length: int, callback: AsyncCallback<string>)
     */
    getBackward(length: number, callback: AsyncCallback<string>): void;

    /**
     * @brief 获取光标后固定长度的文本。使用promise异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { number } length - 文本长度。不能小于0。
     * @returns { Promise<string> } Promise对象，返回光标后固定长度的文本。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getBackward(length: int): Promise<string>
     */
    getBackward(length: number): Promise<string>;

    /**
     * @brief 获取编辑框属性值。使用callback异步回调。
     * <br>
     * <br>使用场景：根据编辑框类型调整输入法界面、根据编辑框配置提供不同的输入建议、实现特定输入逻辑、适配不同类型的输入框等。
     * <br>
     * <br>使用后效果：返回编辑框属性信息（包括inputPattern输入类型和enterKeyType回车键类型），输入法应用据此调整键盘布局。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @param { AsyncCallback<EditorAttribute> } callback - 回调函数。当编辑框的属性值获取成功，err为undefined，data为编辑框属性值；否则为错误对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getEditorAttribute(callback: AsyncCallback<EditorAttribute>)
     */
    getEditorAttribute(callback: AsyncCallback<EditorAttribute>): void;

    /**
     * @brief 获取编辑框属性值。使用promise异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 从 API version 8开始支持，从API version 9开始废弃。
     *
     * @returns { Promise<EditorAttribute> } Promise对象，返回编辑框属性值。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethodEngine.InputClient.getEditorAttribute(callback: AsyncCallback<EditorAttribute>)
     */
    getEditorAttribute(): Promise<EditorAttribute>;
  }

  /**
   * @brief InputClient是输入法客户端对象，代表当前绑定到输入法应用的编辑框客户端。InputClient实例通过InputMethodAbility的
   * [on('inputStart')]{@link inputMethodEngine.InputMethodAbility.on(type: 'inputStart', callback: (kbController: KeyboardController, inputClient: InputClient) => void)}
   * 事件回调获取，每个绑定事件对应一个InputClient实例，输入法应用通过该实例与编辑框进行文本交互。
   * <br>
   * <br>核心功能概述：
   * <br>
   * <br>- 文本获取：通过[getForward]{@link inputMethodEngine.InputClient.getForward(length: int, callback: AsyncCallback<string>)}
   * /[getForwardSync]{@link inputMethodEngine.InputClient.getForwardSync}获取光标前的文本，通过
   * [getBackward]{@link inputMethodEngine.InputClient.getBackward(length: int, callback: AsyncCallback<string>)}/
   * [getBackwardSync]{@link inputMethodEngine.InputClient.getBackwardSync}获取光标后的文本，用于分析已输入内容并提供智能补全。
   * <br>- 文本编辑：通过
   * [insertText]{@link inputMethodEngine.InputClient.insertText(text: string, callback: AsyncCallback<boolean>)}/
   * [insertTextSync]{@link inputMethodEngine.InputClient.insertTextSync}插入文本，通过
   * [deleteForward]{@link inputMethodEngine.InputClient.deleteForward(length: int, callback: AsyncCallback<boolean>)}/
   * [deleteForwardSync]{@link inputMethodEngine.InputClient.deleteForwardSync}删除光标前的文本，通过
   * [deleteBackward]{@link inputMethodEngine.InputClient.deleteBackward(length: int, callback: AsyncCallback<boolean>)}
   * /[deleteBackwardSync]{@link inputMethodEngine.InputClient.deleteBackwardSync}删除光标后的文本。
   * <br>- 功能键与光标：通过
   * [sendKeyFunction]{@link inputMethodEngine.InputClient.sendKeyFunction(action: int, callback: AsyncCallback<boolean>)}
   * 发送功能键（如回车键），通过
   * [moveCursor]{@link inputMethodEngine.InputClient.moveCursor(direction: int, callback: AsyncCallback<void>)}/
   * [moveCursorSync]{@link inputMethodEngine.InputClient.moveCursorSync}移动光标。
   * <br>- 选区操作：通过
   * [selectByRange]{@link inputMethodEngine.InputClient.selectByRange(range: Range, callback: AsyncCallback<void>)}/
   * [selectByRangeSync]{@link inputMethodEngine.InputClient.selectByRangeSync}按范围选中文本，通过
   * [selectByMovement]{@link inputMethodEngine.InputClient.selectByMovement(movement: Movement, callback: AsyncCallback<void>)}
   * /[selectByMovementSync]{@link inputMethodEngine.InputClient.selectByMovementSync}按方向选中文本。
   * <br>- 编辑框属性：通过
   * [getEditorAttribute]{@link inputMethodEngine.InputClient.getEditorAttribute(callback: AsyncCallback<EditorAttribute>)}
   * /[getEditorAttributeSync]{@link inputMethodEngine.InputClient.getEditorAttributeSync()}获取编辑框属性信息（输入类型、回车键类型等），据此调整键
   * 盘布局。
   * <br>- 文本预览：通过[setPreviewText]{@link inputMethodEngine.InputClient.setPreviewText}/
   * [setPreviewTextSync]{@link inputMethodEngine.InputClient.setPreviewTextSync}设置预览文本，通过
   * [finishTextPreview]{@link inputMethodEngine.InputClient.finishTextPreview}/
   * [finishTextPreviewSync]{@link inputMethodEngine.InputClient.finishTextPreviewSync}结束文本预览。
   * <br>- 私有通信：通过[sendPrivateCommand]{@link inputMethodEngine.InputClient.sendPrivateCommand}向应用发送私有命令，通过
   * [sendMessage]{@link inputMethodEngine.InputClient.sendMessage}/
   * [recvMessage]{@link inputMethodEngine.InputClient.recvMessage}进行消息通信。
   * <br>
   * <br>注意事项：
   * <br>
   * <br>- InputClient实例与当前绑定的编辑框关联，当编辑框失去焦点或输入法解绑时，该实例可能失效。
   * <br>- 同名Sync后缀接口为同步接口，阻塞主线程，容易影响UI交互，需谨慎使用。
   * <br>
   * <br>下列API均需使用
   * [on('inputStart')]{@link inputMethodEngine.InputMethodAbility.on(type: 'inputStart', callback: (kbController: KeyboardController, inputClient: InputClient) => void)}
   * 获取到InputClient实例后，通过实例调用。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  interface InputClient {
    /**
     * @brief 发送功能键。使用callback异步回调。
     *
     * @param { int } action - 功能键键值。<br/>- 当值为0时，表示无效按键。<br/>- 当值为1时，表示确认键（即回车键）。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当功能键发送成功，err为undefined，data为true；当功能键发送失败，err为undefined，data为
     *     false；否则为错误对象。
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
     * @brief 发送功能键。使用promise异步回调。
     *
     * @param { int } action - 功能键键值。<br/>当值为0时，表示无效按键；<br/>当值为1时，表示确认键（即回车键）。
     * @returns { Promise<boolean> } Promise对象。resolve返回true表示功能键发送成功；resolve返回false表示功能键发送失败；reject时抛出错误对象，表示执行过程中发生错误。
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
     * @brief 删除光标前固定长度的文本。使用callback异步回调。
     * <br>
     * <br>使用场景：实现退格键功能、逐字删除输入、删除错误的输入、实现自定义删除逻辑等。
     * <br>
     * <br>使用后效果：成功时返回true，编辑框中光标前指定长度的文本被删除。
     *
     * @param { int } length - 文本长度。不能小于0。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当光标前固定长度的文本删除成功，err为undefined，data为true；当光标前固定长度的文本删除失败，err为
     *     undefined，data为false；否则为错误对象。
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
     * @brief 删除光标前固定长度的文本。使用promise异步回调。
     *
     * @param { int } length - 文本长度。不能小于0。
     * @returns { Promise<boolean> } Promise对象。resolve返回true表示删除光标前固定长度的文本成功；resolve返回false表示删除光标前固定长度的文本失败；reject时抛出错误对
     *     象，表示执行过程中发生错误。
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
     * @brief 删除光标前固定长度的文本。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [deleteForward]{@link inputMethodEngine.InputClient.deleteForward(length: int, callback: AsyncCallback<boolean>)}
     * <br> > 。
     *
     * @param { int } length - 文本长度。不能小于0。
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
     * @brief 删除光标后固定长度的文本。使用callback异步回调。
     * <br>
     * <br>使用场景：实现删除键功能、删除光标后的字符、快速修正输入、实现自定义删除逻辑等。
     * <br>
     * <br>使用后效果：成功时返回true，编辑框中光标后指定长度的文本被删除。
     *
     * @param { int } length - 文本长度。不能小于0。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当光标后固定长度的文本删除成功，err为undefined，data为true；否则为错误对象。
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
     * @brief 删除光标后固定长度的文本。使用promise异步回调。
     *
     * @param { int } length - 文本长度。不能小于0。
     * @returns { Promise<boolean> } Promise对象。resolve返回true表示删除光标后固定长度的文本成功；resolve返回false表示删除光标后固定长度的文本失败；reject时抛出错误对
     *     象，表示执行过程中发生错误。
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
     * @brief 删除光标后固定长度的文本。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [deleteBackward]{@link inputMethodEngine.InputClient.deleteBackward(length: int)}。
     *
     * @param { int } length - 文本长度。不能小于0。
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
     * @brief 插入文本。使用callback异步回调。
     * <br>
     * <br>使用场景：插入候选词、插入特殊符号、实现文本自动补全、快速插入常用短语等。
     * <br>
     * <br>使用后效果：成功时返回true，文本已插入到编辑框光标位置。
     *
     * @param { string } text - 文本内容。
     * @param { AsyncCallback<boolean> } callback - 回调函数。当文本插入成功，err为undefined，data为true；否则为错误对象。
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
     * @brief 插入文本。使用promise异步回调。
     *
     * @param { string } text - 文本。
     * @returns { Promise<boolean> } Promise对象。resolve返回true表示插入文本成功；resolve返回false表示插入文本失败；reject时抛出错误对象，表示执行过程中发生错误。
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
     * @brief 插入文本。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [insertText]{@link inputMethodEngine.InputClient.insertText(text: string)}。
     *
     * @param { string } text - 文本内容。
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
     * @brief 获取光标前固定长度的文本。使用callback异步回调。
     * <br>
     * <br>使用场景：分析已输入文本内容以提供智能补全建议、检查文本格式、实现文本预测功能、实现文本语义分析等。
     * 使用后效果：成功时返回光标前指定长度的文本字符串，输入法应用可据此更新候选词或输入建议。
     *
     * @param { int } length - 文本长度。不能小于0。
     * @param { AsyncCallback<string> } callback - 回调函数。当光标前固定长度的文本获取成功，err为undefined，data为获取到的文本；否则为错误对象。
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
     * @brief 获取光标前固定长度的文本。使用promise异步回调。
     *
     * @param { int } length - 文本长度。不能小于0
     * @returns { Promise<string> } Promise对象，返回光标前固定长度的文本。
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
     * @brief 获取光标前固定长度的文本。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口[getForward]{@link inputMethodEngine.InputClient.getForward(length: int)}
     * <br> > 。
     *
     * @param { int } length - 文本长度。不能小于0。
     * @returns { string } 返回光标前固定长度的文本。
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
     * @brief 获取光标后固定长度的文本。使用callback异步回调。
     *
     * @param { int } length - 文本长度。不能小于0。
     * @param { AsyncCallback<string> } callback - 回调函数。当光标后固定长度的文本获取成功，err为undefined，data为获取到的文本；否则为错误对象。
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
     * @brief 获取光标后固定长度的文本。使用promise异步回调。
     *
     * @param { int } length - 文本长度。不能小于0。
     * @returns { Promise<string> } Promise对象，返回光标后固定长度的文本。
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
     * @brief 获取光标后固定长度的文本。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [getBackward]{@link inputMethodEngine.InputClient.getBackward(length: int, callback: AsyncCallback<string>)}。
     *
     * @param { int } length - 文本长度。不能小于0。
     * @returns { string } 返回光标后固定长度的文本。
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
     * @brief 获取编辑框属性值。使用callback异步回调。
     * <br>
     * <br>使用场景：根据编辑框类型调整输入法界面、根据编辑框配置提供不同的输入建议、实现特定输入逻辑、适配不同类型的输入框等。
     * <br>
     * <br>使用后效果：返回编辑框属性信息（包括inputPattern输入类型和enterKeyType回车键类型），输入法应用据此调整键盘布局。
     *
     * @param { AsyncCallback<EditorAttribute> } callback - 回调函数。当编辑框属性值获取成功，err为undefined，data为编辑框属性值；否则为错误对象。
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    getEditorAttribute(callback: AsyncCallback<EditorAttribute>): void;

    /**
     * @brief 获取编辑框属性值。使用callback异步回调。
     * <br>
     * <br>使用场景：根据编辑框类型调整输入法界面、根据编辑框配置提供不同的输入建议、实现特定输入逻辑、适配不同类型的输入框等。
     * <br>
     * <br>使用后效果：返回编辑框属性信息（包括inputPattern输入类型和enterKeyType回车键类型），输入法应用据此调整键盘布局。
     *
     * @param { AsyncCallback<EditorAttribute | null> } callback - 回调函数。当编辑框属性值获取成功，err为undefined，data为编辑框属性值；否则为错误对象。
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getEditorAttribute(callback: AsyncCallback<EditorAttribute | null>): void;

    /**
     * @brief 获取编辑框属性值。使用promise异步回调。
     *
     * @returns { Promise<EditorAttribute> } Promise对象，返回编辑框属性值。
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    getEditorAttribute(): Promise<EditorAttribute>;

    /**
     * @brief 获取编辑框属性值。使用promise异步回调。
     *
     * @returns { Promise<EditorAttribute | null> } Promise对象，返回编辑框属性值。
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getEditorAttribute(): Promise<EditorAttribute | null>;

    /**
     * @brief 获取编辑框属性值。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [getEditorAttribute]{@link inputMethodEngine.InputClient.getEditorAttribute(callback: AsyncCallback<EditorAttribute>)}
     * <br> > 。
     *
     * @returns { EditorAttribute } 编辑框属性对象。
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    getEditorAttributeSync(): EditorAttribute;

    /**
     * @brief 获取编辑框属性值。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [getEditorAttribute]{@link inputMethodEngine.InputClient.getEditorAttribute(callback: AsyncCallback<EditorAttribute>)}
     * <br> > 。
     *
     * @returns { EditorAttribute | null } 编辑框属性对象。
     * @throws { BusinessError } 12800003 - input method client error. Possible causes:
     *     1.the edit box is not focused. 2.no edit box is bound to current input method application.
     *     3.ipc failed due to the large amount of data transferred or other reasons.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getEditorAttributeSync(): EditorAttribute | null;

    /**
     * @brief 移动光标。使用callback异步回调。
     * <br>
     * <br>使用场景：实现光标移动到特定位置、实现上下左右移动光标功能、实现快速定位、实现自定义光标控制等。
     * <br>
     * <br>使用后效果：成功时编辑框中的光标按指定方向移动一步。direction取值，1为上移，2为下移，3为左移，4为右移。
     *
     * @param { int } direction - 光标移动方向。<br/>- 当值为1时，表示向上。<br/>- 当值为2时，表示向下。<br/>- 当值为3时，表示向左。<br/>- 当值为4时，表示向右。不能小于0。
     * @param { AsyncCallback<void> } callback - 回调函数。当光标移动成功，err为undefined，否则为错误对象。
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
     * @brief 移动光标。使用promise异步回调。
     *
     * @param { int } direction - 光标移动方向。<br/>- 当值为1时，表示向上。<br/>- 当值为2时，表示向下。<br/>- 当值为3时，表示向左。<br/>- 当值为4时，表示向右。不能小于0。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * @brief 移动光标。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [moveCursor]{@link inputMethodEngine.InputClient.moveCursor(direction: int, callback: AsyncCallback<void>)}。
     *
     * @param { int } direction - 光标移动方向。<br/>- 当值为1时，表示向上。<br/>- 当值为2时，表示向下。<br/>- 当值为3时，表示向左。<br/>- 当值为4时，表示向右。不能小于0。
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
     * @brief 根据索引范围选中文本。使用callback异步回调。
     *
     * @param { Range } range - 选中文本的范围。
     * @param { AsyncCallback<void> } callback - 回调函数。当成功发送选中事件后，err为undefined，否则为错误对象。
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
     * @brief 根据索引范围选中文本。使用promise异步回调。
     *
     * @param { Range } range - 选中文本的范围。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * @brief 根据索引范围选中文本。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [selectByRange]{@link inputMethodEngine.InputClient.selectByRange(range: Range, callback: AsyncCallback<void>)}
     * <br> > 。
     *
     * @param { Range } range - 选中文本的范围。
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
     * @brief 根据光标移动方向选中文本。使用callback异步回调。
     *
     * @param { Movement } movement - 选中时光标移动的方向。
     * @param { AsyncCallback<void> } callback - 回调函数。当成功发送选中事件后，err为undefined，否则为错误对象。
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
     * @brief 根据光标移动方向选中文本。使用promise异步回调。
     *
     * @param { Movement } movement - 选中时光标移动的方向。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * @brief 根据光标移动方向选中文本。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [selectByMovement]{@link inputMethodEngine.InputClient.selectByMovement(movement: Movement)}。
     *
     * @param { Movement } movement - 选中时光标移动的方向。
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
     * @brief 获取光标所在处的文本索引。使用callback异步回调。
     *
     * @param { AsyncCallback<int> } callback - 回调函数。当文本索引获取成功，err为undefined，index为光标所在处的文本索引；否则err为错误对象，index为
     *     undefined。
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
     * @brief 获取光标所在处的文本索引。使用promise异步回调。
     *
     * @returns { Promise<int> } Promise对象，返回光标所在处的文本索引。
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
     * @brief 获取光标所在处的文本索引。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [getTextIndexAtCursor]{@link inputMethodEngine.InputClient.getTextIndexAtCursor(callback: AsyncCallback<int>)}。
     *
     * @returns { int } 返回光标所在处的文本索引。
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
     * @brief 发送扩展编辑操作。使用callback异步回调。
     *  <br>
     * <br>使用场景：输入法应用需要触发编辑框的扩展编辑功能。例如：用户点击键盘上的剪切按钮时发送CUT操作；用户点击复制按钮时发送COPY操作；用户点击粘贴按钮时发送PASTE操作；用户点击全选按钮时发送SELECT_ALL操作；自定义
     * <br>
     * <br>工具栏中集成编辑快捷操作。
     * <br>
     * <br> > **说明**
     * <br> >
     * <br> > 输入法应用调用该接口向编辑框发送扩展编辑操作，编辑框监听相应事件
     * <br> > [on('handleExtendAction')]{@link @ohos.inputMethod:inputMethod.InputMethodController.on(type: 'handleExtendAction', callback: (action: ExtendAction) => void)}
     * <br> > ，从而进一步做出处理。
     * <br> >
     * <br> > 编辑框响应[ExtendAction]{@link inputMethodEngine.ExtendAction}的PASTE命令时，需要编辑框应用申请
     * <br> > [ohos.permission.READ_PASTEBOARD](docroot://security/AccessToken/restricted-permissions.md#ohospermissionread_pasteboard)
     * <br> > 权限。
     *
     * @param { ExtendAction } action - 要发送的扩展操作。
     * @param { AsyncCallback<void> } callback - 回调函数。发送成功，err为undefined，否则为错误对象。
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
     * @brief 发送扩展编辑操作。使用promise异步回调。
     * <br>
     * <br> > **说明**
     * <br> >
     * <br> > 输入法应用调用该接口向编辑框发送扩展编辑操作，编辑框监听相应事件
     * <br> > [on('handleExtendAction')]{@link @ohos.inputMethod:inputMethod.InputMethodController.on(type: 'handleExtendAction', callback: (action: ExtendAction) => void)}
     * <br> > ，从而进一步做出处理。
     * <br> >
     * <br> > 编辑框响应[ExtendAction]{@link inputMethodEngine.ExtendAction}的PASTE命令时，需要编辑框应用申请
     * <br> > [ohos.permission.READ_PASTEBOARD](docroot://security/AccessToken/restricted-permissions.md#ohospermissionread_pasteboard)
     * <br> > 权限。
     *
     * @param { ExtendAction } action - 要发送的扩展操作。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * @brief 发送私有数据至需要与输入法应用通信的系统其他部分。使用promise异步回调。
     * <br>
     * <br> > **说明:**
     * <br> >
     * <br> > - 私有数据通道是系统预置输入法应用与系统特定组件（如文本框、桌面应用等）的通信机制，常用于设备级厂商在特定设备上实现自定义的输入法功能。
     * <br> >
     * <br> > - 私有数据规格限制：总大小32KB，数量限制5条。
     * <br> >
     * <br> > - 私有数据默认发送给文本框，如果需要发送给桌面应用，请在私有数据中携带一条`{'sys_cmd':1}`数据。
     *
     * @param { Record<string, CommandDataType> } commandData - 私有数据。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * @brief 获取当前拉起输入法的输入框所在应用窗口信息。使用promise异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 本接口仅适用于适配使用[Panel]{@link inputMethodEngine.Panel}作为软键盘窗口的输入法应用。
     *
     * @returns { Promise<WindowInfo> } Promise对象，返回拉起输入法的输入框所在应用窗口信息。
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
     * @brief 获取当前拉起输入法的输入框所在应用窗口信息。使用promise异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 本接口仅适用于适配使用[Panel]{@link inputMethodEngine.Panel}作为软键盘窗口的输入法应用。
     *
     * @returns { Promise<WindowInfo | null> } Promise对象，返回拉起输入法的输入框所在应用窗口信息。
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
     * @brief 设置预上屏文本。使用promise异步回调。
     *
     * @param { string } text - 预上屏的文本。
     * @param { Range } range - 替换的文本范围。<br/>- 当值为{ start: -1, end: -1 }时，默认将参数text替换当前预上屏区域全部文本。<br/>- 当start等于end，默认将参
     *     数text插入start对应的光标位置。<br/>- 当start不等于end，将参数text替换range对应区域的文本。<br/>- 当start与end为其他含有负数值的组合，按照参数错误返回。<br/>- 当输
     *     入框已有预上屏文本，参数range不得超过预上屏文本范围，否则按照参数错误返回。<br/>- 当输入框无预上屏文本，参数range不得超过输入框文本范围，否则按照参数错误返回。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * @brief 设置预上屏文本。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口[setPreviewText]{@link inputMethodEngine.InputClient.setPreviewText}。
     *
     * @param { string } text - 预上屏的文本。
     * @param { Range } range - 替换的文本范围。<br/>- 当值为{ start: -1, end: -1 }时，默认将参数text替换当前预上屏区域全部文本。<br/>- 当start等于end，默认将参
     *     数text插入start对应的光标位置。<br/>- 当start不等于end，将参数text替换range对应区域的文本。<br/>- 当start与end为其他含有负数值的组合，按照参数错误返回。<br/>- 当输
     *     入框已有预上屏文本，参数range不得超过预上屏文本范围，否则按照参数错误返回。<br/>- 当输入框无预上屏文本，参数range不得超过输入框文本范围，否则按照参数错误返回。
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
     * @brief 结束预上屏。使用promise异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 若当前输入框已有预上屏状态文本，调用此接口后，预上屏内容将被系统正式上屏。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * @brief 结束预上屏。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [finishTextPreview]{@link inputMethodEngine.InputClient.finishTextPreview}。
     * <br> >
     * <br> > 若当前输入框已有预上屏状态文本，调用此接口后，预上屏内容将被系统正式上屏。
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
     * @brief 发送自定义通信至已绑定当前输入法应用的编辑框应用。使用Promise异步回调。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 该接口需要编辑框与输入法绑定并进入编辑状态，且输入法应用处于完整体验模式时才能调用。
     * <br> >
     * <br> > msgId最大限制256B，msgParam最大限制128KB。
     *
     * @param { string } msgId - 需要发送至已绑定当前输入法应用的编辑框应用的自定义数据的标识符。最大长度256字节。超出范围时返回错误码401。
     * @param { ArrayBuffer } [msgParam] - 需要发送至已绑定当前输入法应用的编辑框应用的自定义数据的消息体。最大大小128KB。超出范围时返回错误码401。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * @brief 注册或取消注册Messagehandler。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > [MessageHandler]{@link inputMethodEngine.MessageHandler}对象全局唯一，多次注册仅保留最后一次注册的对象及有效性，并触发上一个已注册对象的
     * <br> > [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()}回调函数。
     * <br> >
     * <br> > 未填写参数，则取消全局已注册的[MessageHandler]{@link inputMethodEngine.MessageHandler}，并会触发被取消注册对象中
     * <br> > [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()}回调函数。
     *
     * @param { MessageHandler } [msgHandler] - 该对象将通过
     *     [onMessage]{@link inputMethodEngine.MessageHandler.onMessage(msgId: string, msgParam?: ArrayBuffer)}接收来自已绑定当前
     *     输入法应用的编辑框应用所发送的自定义通信数据，并通过[onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()}接收终止此对象订阅的消息。
     *     <br>若不填写此参数，则取消全局已注册的[MessageHandler]{@link inputMethodEngine.MessageHandler}对象，同时触发其
     *     [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()}回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    recvMessage(msgHandler?: MessageHandler): void;
    /**
     * @brief 获取绑定输入法时的附加选项。
     *
     * @returns { AttachOptions } 返回绑定输入法时的附加选项内容。
     * @throws { BusinessError } 801 - Capability not supported. [since 19 - 19]
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     */
    getAttachOptions(): AttachOptions;

    /**
     * @brief 获取绑定输入法时的附加选项。
     *
     * @returns { AttachOptions | null } 返回绑定输入法时的附加选项内容。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getAttachOptions(): AttachOptions | null;

    /**
     * @brief 订阅绑定输入法时的附加选项变更事件。使用callback异步回调。
     *
     * @param { 'attachOptionsDidChange' } type - 绑定输入法时的附加选项变更事件，固定取值为'attachOptionsDidChange'。
     * @param { Callback<AttachOptions> } callback - 回调函数，返回绑定输入法时的附加选项。
     * @throws { BusinessError } 801 - Capability not supported. [since 19 - 19]
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     */
    on(type: 'attachOptionsDidChange', callback: Callback<AttachOptions>): void;
    /**
     * @brief 取消订阅绑定输入法时的附加选项变更事件。使用callback异步回调。
     *
     * @param { 'attachOptionsDidChange' } type - 绑定输入法时的附加选项变更事件，固定取值为'attachOptionsDidChange'。
     * @param { Callback<AttachOptions> } [callback] - 取消订阅的回调函数。参数不填写时，默认取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     */
    off(type: 'attachOptionsDidChange', callback?: Callback<AttachOptions>): void;

    /**
     * @brief 订阅绑定输入法时的附加选项变更事件。使用callback异步回调。
     *
     * @param { Callback<AttachOptions> } callback - 回调函数，返回绑定输入法时的附加选项。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onAttachOptionsDidChange(callback: Callback<AttachOptions>): void;
    /**
     * @brief 取消订阅附加选项变更（attachOptionsDidChange）事件，停止监听输入法附加配置项的变更动作。
     *
     * @param { Callback<AttachOptions> } [callback] - 可选参数，需取消的目标回调函数：传入指定回调函数实例时，仅取消该回调的订阅；不传入时，取消所有
     *     attachOptionsDidChange事件的订阅。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offAttachOptionsDidChange(callback?: Callback<AttachOptions>): void;
  }

  /**
   * @brief KeyboardDelegate是键盘事件监听代理对象，用于输入法应用监听物理键盘按键事件和编辑框文本/光标/选区变化事件。输入法应用通过
   * [getKeyboardDelegate]{@link inputMethodEngine.getKeyboardDelegate}获取该实例。
   * <br>核心功能概述：
   * <br>
   * <br>- 物理键盘按键事件：通过on('keyDown'|'keyUp')订阅物理按键的按下/抬起事件，通过on('keyEvent')订阅更完整的按键事件（含组合键信息）。callback返回true表示按键事件被消费，返回false
   * 表示不消费。
   * <br>- 光标与选区变化事件：通过on('cursorContextChange')订阅光标位置变化事件，通过on('selectionChange')订阅文本选区变化事件。输入法应用可根据这些事件调整候选词位置或输入策略。
   * <br>- 文本变化事件：通过on('textChange')订阅编辑框文本内容变化事件，输入法应用可据此更新候选词或输入建议。
   * <br>- 编辑框属性变化事件：通过on('editorAttributeChanged')订阅编辑框属性变化事件，输入法应用可根据编辑框属性变化动态调整键盘布局。
   * <br>
   * <br>使用场景：
   * <br>
   * <br>- 开发物理键盘快捷键处理功能时，订阅on('keyDown'|'keyUp')或on('keyEvent')事件拦截特定按键。
   * <br>- 需要根据编辑框实时状态（光标、选区、文本、属性）调整输入法行为时，订阅对应的on事件。
   * <br>
   * <br>下列API均需使用[getKeyboardDelegate]{@link inputMethodEngine.getKeyboardDelegate}获取到KeyboardDelegate实例后，通过实例调用。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyboardDelegate {
    /**
     * @brief 订阅硬键盘（即物理键盘）上物理按键的按下或抬起事件。使用callback异步回调。
     * <br>
     * <br>使用场景：实现快捷键功能、拦截特殊按键、处理功能键（如删除、回车等）等。
     * <br>
     * <br>使用后效果：当物理按键按下/抬起时触发回调，回调函数返回按键信息。若按键事件被事件订阅者消费，则callback应返回true，否则返回false。返回true时按键事件不再向编辑框传递，返回false时按键事件继续向编辑框传
     * 递。
     *
     * @param { 'keyDown' | 'keyUp' } type - 设置监听类型。<br/>- 'keyDown'表示键盘按下。<br/>- 'keyUp'表示键盘抬起。
     * @param { function } callback - 回调函数，返回按键信息。 若按键事件被事件订阅者消费，则callback应返回true，否则返回false。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    on(type: 'keyDown' | 'keyUp', callback: (event: KeyEvent) => boolean): void;

    /**
     * @brief 取消订阅硬键盘（即物理键盘）上物理按键的按下或抬起事件。
     *
     * @param { 'keyDown' | 'keyUp' } type - 设置监听类型。<br/>- 'keyDown'表示键盘按下。<br/>- 'keyUp'表示键盘抬起。
     * @param { function } [callback] - 取消订阅的回调函数，用于取消特定的键盘按键事件订阅。传入callback时取消指定回调的订阅，参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    off(type: 'keyDown' | 'keyUp', callback?: (event: KeyEvent) => boolean): void;

    /**
     * @brief 订阅硬键盘（即物理键盘）事件。使用callback异步回调。与on('keyDown'|'keyUp')相比，on('keyEvent')提供更完整的按键事件信息（包含组合键Ctrl/Shift/Alt状态、
     * unicodeChar等），适用于需要处理组合键或获取更丰富按键信息的场景。
     * <br>
     * <br>使用场景：需要处理组合键（如Ctrl+C、Shift+Enter等）或获取更完整按键信息（如unicodeChar、ctrlKey等）的场景。
     * <br>
     * <br>使用后效果：当物理按键事件触发时回调被调用。若按键事件被事件订阅者消费，则callback应返回true，否则返回false。
     *
     * @param { 'keyEvent' } type - 设置监听类型，固定取值为'keyEvent'。
     * @param { function } callback - 回调函数，入参为按键事件信息，返回值类型为布尔类型。<br/>- 入参按键事件信息的数据类型为
     *     [InputKeyEvent]{@link @ohos.multimodalInput.keyEvent:KeyEvent}。<br/>- 若按键事件被事件订阅者消费，则callback应返回true，否则返回
     *     false。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'keyEvent', callback: (event: InputKeyEvent) => boolean): void;

    /**
     * @brief 取消订阅硬键盘（即物理键盘）事件。使用callback异步回调。
     *
     * @param { 'keyEvent' } type - 设置监听类型，固定取值为'keyEvent'。
     * @param { function } [callback] - 取消订阅的回调函数，用于取消特定的键盘事件订阅。传入callback时取消指定回调的订阅，参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'keyEvent', callback?: (event: InputKeyEvent) => boolean): void;

    /**
     * @brief 订阅光标变化事件。使用callback异步回调。
     * <br>
     * <br>使用场景：实时更新候选词显示位置、根据光标位置调整输入法界面、实现跟随光标的浮动菜单等。
     * <br>
     * <br>使用后效果：当编辑框光标位置发生变化时触发回调，返回光标的x坐标、y坐标和高度信息，输入法应用可据此调整候选词窗口或面板的定位。
     *
     * @param { 'cursorContextChange' } type - 光标变化事件，固定取值为'cursorContextChange'。
     * @param { function } callback - 回调函数，返回光标信息。<br/>- x为光标上端的x坐标值，单位：px，y为光标上端的y坐标值，单位：px，height为光标的高度值，单位：px。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    on(type: 'cursorContextChange', callback: (x: number, y: number, height: number) => void): void;

    /**
     * @brief 取消订阅光标变化事件。
     *
     * @param { 'cursorContextChange' } type - 光标变化事件，固定取值为'cursorContextChange'。
     * @param { function } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    off(type: 'cursorContextChange', callback?: (x: number, y: number, height: number) => void): void;

    /**
     * @brief 订阅文本选择范围变化事件。使用callback异步回调。
     * <br>
     * <br>使用场景：监听用户选中文本以提供剪切、复制、粘贴等快捷操作、根据选择文本显示相关建议、实现文本编辑辅助功能等。
     * <br>
     * <br>使用后效果：当编辑框中文本选择范围发生变化时触发回调，返回变化前后的选区起始和终止下标。
     *
     * @param { 'selectionChange' } type - 文本选择变化事件，固定取值为'selectionChange'。
     * @param { function } callback - 回调函数，返回文本选择信息。<br/>- oldBegin为变化前被选中文本的起始下标，oldEnd为变化前被选中文本的终止下标。<br/>- newBegin为变
     *     化后被选中文本的起始下标，newEnd为变化后被选中文本的终止下标。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    on(
      type: 'selectionChange',
      callback: (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => void
    ): void;

    /**
     * @brief 取消订阅文本选择范围变化事件。
     *
     * @param { 'selectionChange' } type - 文本选择变化事件，固定取值为'selectionChange'。
     * @param { function } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    off(
      type: 'selectionChange',
      callback?: (oldBegin: number, oldEnd: number, newBegin: number, newEnd: number) => void
    ): void;

    /**
     * @brief 订阅文本内容变化事件。使用callback异步回调。
     * <br>
     * <br>使用场景：输入法应用需要根据编辑框文本内容变化更新候选词、提供智能输入建议、实现联想输入等。
     * <br>
     * <br>使用后效果：当编辑框文本内容发生变化时触发回调，返回当前编辑框的完整文本内容。
     *
     * @param { 'textChange' } type - 文本变化事件，固定取值为'textChange'。
     * @param { function } callback - 回调函数，返回订阅的文本内容。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    on(type: 'textChange', callback: (text: string) => void): void;

    /**
     * @brief 取消订阅文本内容变化事件。使用callback异步回调。
     *
     * @param { 'textChange' } type - 文本变化事件，固定取值为'textChange'。
     * @param { function } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     */
    off(type: 'textChange', callback?: (text: string) => void): void;

    /**
     * @brief 订阅编辑框属性变化事件。使用callback异步回调。
     * <br>
     * <br>使用场景：输入法应用需要根据编辑框属性变化（如输入类型从文本切换到数字、回车键类型从"搜索"切换到"发送"等）动态调整键盘布局。
     * <br>
     * <br>使用后效果：当编辑框属性发生变化时触发回调，返回变化后的编辑框属性信息（包括inputPattern和enterKeyType），输入法应用可据此重新调整键盘布局。
     *
     * @param { 'editorAttributeChanged' } type - 编辑框属性变化事件，固定取值为'editorAttributeChanged'。
     * @param { function } callback - 回调函数，返回变化的编辑框属性。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'editorAttributeChanged', callback: (attr: EditorAttribute) => void): void;

    /**
     * @brief 取消订阅编辑框属性变化事件。使用callback异步回调。
     *
     * @param { 'editorAttributeChanged' } type - 编辑框属性变化事件，固定取值为'editorAttributeChanged'。
     * @param { function } [callback] - 所要取消订阅的回调处理函数。参数不填写时，默认取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'editorAttributeChanged', callback?: (attr: EditorAttribute) => void): void;

    /**
     * @brief 订阅硬键盘（即物理键盘）上物理按键的按下或抬起事件。使用callback异步回调。
     *
     * @param { KeyEventCallback } callback - 回调函数，返回按键信息。 若按键事件被事件订阅者消费，则callback应返回true，否则返回false。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyDown(callback: KeyEventCallback): void;
    /**
     * @brief 取消订阅硬键盘（即物理键盘）上物理按键的按下或抬起事件。使用callback异步回调。
     *
     * @param { KeyEventCallback } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyDown(callback?: KeyEventCallback): void;

    /**
     * @brief 订阅硬键盘（即物理键盘）上物理按键的按下或抬起事件。使用callback异步回调。
     *
     * @param { KeyEventCallback } callback - 回调函数，返回按键信息。 若按键事件被事件订阅者消费，则callback应返回true，否则返回false。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyUp(callback: KeyEventCallback): void;
    /**
     * @brief 取消订阅硬键盘（即物理键盘）上物理按键的按下或抬起事件。使用callback异步回调。
     *
     * @param { KeyEventCallback } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyUp(callback?: KeyEventCallback): void;

    /**
     * @brief 订阅硬键盘（即物理键盘）事件。使用callback异步回调。
     * <br>
     * | 参数名   | 类型   | 必填 | 说明                                                         |
     * | -------- | ------ | ---- | ------------------------------------------------------------ |
     * | callback | 
     * [InputKeyEventCallback](docroot://reference/apis-ime-kit/js-apis-inputmethodengine.md#inputkeyeventcallback23) | 
     * 是 | 回调函数，入参为按键事件信息，返回值类型为布尔类型。
     * -&nbsp;入参按键事件信息的数据类型为[InputKeyEvent]{@link @ohos.multimodalInput.keyEvent:KeyEvent}。
     * -&nbsp;若按键事件被事件订阅者消费，则callback应返回true，否则返回false。 |
     *
     * @param { InputKeyEventCallback } callback - the callback called when a key event event occurs.
     *     If the key is processed by event subscriber, callback should be return true, else return false.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onKeyEvent(callback: InputKeyEventCallback): void;
    /**
     * @brief 取消订阅硬键盘（即物理键盘）事件。使用callback异步回调。
     *
     * @param { InputKeyEventCallback } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offKeyEvent(callback?: InputKeyEventCallback): void;

    /**
     * @brief 订阅光标变化事件。使用callback异步回调。
     *
     * @param { CursorContextChangeCallback } callback - 回调函数，返回光标信息。<br/>-x为光标上端的的x坐标值，单位为px。y为光标上端的y坐标值，单位为px。height为光
     *     标的高度值，单位为px。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onCursorContextChange(callback: CursorContextChangeCallback): void;
    /**
     * @brief 取消订阅光标上下文变更
     * [cursorcontextchange]{@link inputMethodEngine.KeyboardDelegate.onCursorContextChange(callback: CursorContextChangeCallback)}
     * 事件，停止监听编辑框中光标位置及上下文文本的变更动作。
     *
     * @param { CursorContextChangeCallback } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offCursorContextChange(callback?: CursorContextChangeCallback): void;

    /**
     * @brief 订阅文本选择范围变化事件。使用callback异步回调。
     *
     * @param { SelectionChangeCallback } callback - 回调函数，返回文本选择信息。<br/>- oldBegin为变化前被选中文本的起始下标，oldEnd为变化前被选中文本的终止下标。<
     *     br/>- newBegin为变化后被选中文本的起始下标，newEnd为变化后被选中文本的终止下标。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectionChange(callback: SelectionChangeCallback): void;
    /**
     * @brief 取消订阅文本选择范围变化事件。使用callback异步回调。
     *
     * @param { SelectionChangeCallback } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectionChange(callback?: SelectionChangeCallback): void;

    /**
     * @brief 订阅文本内容变化事件。使用callback异步回调。
     *
     * @param { Callback<string> } callback - 回调函数，返回订阅的文本内容。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onTextChange(callback: Callback<string>): void;
    /**
     * @brief 取消订阅文本内容变化事件。使用callback异步回调。
     *
     * @param { Callback<string> } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offTextChange(callback?: Callback<string>): void;

    /**
     * @brief 订阅编辑框属性变化事件。使用callback异步回调。
     *
     * @param { Callback<EditorAttribute> } callback - 回调函数，返回变化的编辑框属性。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onEditorAttributeChanged(callback: Callback<EditorAttribute>): void;
    /**
     * @brief 取消订阅编辑框属性变化事件。使用callback异步回调。
     *
     * @param { Callback<EditorAttribute> } [callback] - 所要取消订阅的回调处理函数。参数不填写时，默认取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offEditorAttributeChanged(callback?: Callback<EditorAttribute>): void;
  }

  /**
   * @brief 枚举，输入法沉浸模式。
   * <br>
   * | 名称         | 值 | 说明               |
   * | ------------ | -- | ------------------ |
   * | NONE_IMMERSIVE | 0 | 不使用沉浸模式。 |
   * | IMMERSIVE      | 1 | 沉浸模式，由输入法应用确定沉浸模式类型。 |
   * | LIGHT_IMMERSIVE  | 2 | 浅色沉浸模式。 |
   * | DARK_IMMERSIVE   | 3 | 深色沉浸模式。 |
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum ImmersiveMode {
    /**
     * @brief 不使用沉浸模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    NONE_IMMERSIVE = 0,

    /**
     * @brief 沉浸模式，由输入法应用确定沉浸模式类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    IMMERSIVE,

    /**
     * @brief 浅色沉浸模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    LIGHT_IMMERSIVE,

    /**
     * @brief 深色沉浸模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    DARK_IMMERSIVE
  }

  /**
   * @brief 枚举，输入法渐变模式。
   * <br>
   * | 名称         | 值 | 说明               |
   * | ------------ | -- | ------------------ |
   * | NONE | 0 | 不使用渐变模式。 |
   * | LINEAR_GRADIENT | 1 | 线性渐变。 |
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  export enum GradientMode {
    /**
     * @brief 不使用渐变模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * @brief 线性渐变。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    LINEAR_GRADIENT = 1,
  }

  /**
   * @brief 枚举，输入法流光模式。
   * <br>
   * | 名称         | 值 | 说明               |
   * | ------------ | -- | ------------------ |
   * | NONE | 0 | 不使用流光模式。 |
   * | BACKGROUND_FLUID_LIGHT  | 1 | 开启背景流光模式。系统面板变为透明，流光效果由编辑框宿主应用实现。 |
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  export enum FluidLightMode {
    /**
     * @brief 不使用流光模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * @brief 开启背景流光模式。系统面板变为透明，流光效果由编辑框宿主应用实现。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    BACKGROUND_FLUID_LIGHT = 1,
  }

  /**
   * @brief 沉浸效果。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  interface ImmersiveEffect {

    /**
     * @brief 渐变高度，不能超过屏幕高度的15%。单位：px。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    gradientHeight: int;

    /**
     * @brief 渐变模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    gradientMode: GradientMode;

    /**
     * @brief 流光模式，未填充时默认为NONE。
     * 
     * 该属性仅系统应用可以使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    fluidLightMode?: FluidLightMode;
  }

  /**
   * @brief 枚举，请求键盘输入的原因。
   * <br>
   * | 名称         | 值 | 说明               |
   * | ------------ | -- | ------------------ |
   * | NONE  | 0 | 表示没有特定的原因触发键盘请求。 |
   * | MOUSE | 1 | 表示键盘请求是由鼠标操作触发的。 |
   * | TOUCH | 2 | 表示键盘请求是由触摸操作触发的。 |
   * | OTHER | 20 | 表示键盘请求是由其他原因触发的。 |
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 19 dynamic
   * @since 23 static
   */
  export enum RequestKeyboardReason {
    /**
     * @brief 表示没有特定的原因触发键盘请求。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * @brief 表示键盘请求是由鼠标操作触发的。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    MOUSE = 1,
    /**
     * @brief 表示键盘请求是由触摸操作触发的。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    TOUCH = 2,
    /**
     * @brief 表示键盘请求是由其他原因触发的。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    OTHER = 20
  }

  /**
   * @brief Panel是输入法面板对象，提供面板页面加载、显示/隐藏、尺寸调整、位置移动、模式切换等功能。Panel实例通过InputMethodAbility的
   * [createPanel]{@link inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>)}
   * 接口获取，使用完毕后需调用
   * [destroyPanel]{@link inputMethodEngine.InputMethodAbility.destroyPanel(panel: Panel, callback: AsyncCallback<void>)}
   * 销毁以释放资源。createPanel与destroyPanel必须配对调用。
   * <br>
   * <br>核心功能概述：
   * <br>
   * <br>- 页面加载：通过[setUiContent]{@link inputMethodEngine.Panel.setUiContent(path: string, callback: AsyncCallback<void>)}为面板
   * 加载键盘页面内容，支持加载普通页面和与LocalStorage关联的页面。
   * <br>- 显示与隐藏：通过[show]{@link inputMethodEngine.Panel.show(callback: AsyncCallback<void>)}显示面板，通过
   * [hide]{@link inputMethodEngine.Panel.hide(callback: AsyncCallback<void>)}隐藏面板。面板的显示/隐藏也可通过订阅on('show')/on('hide')事件
   * 监听状态变化。
   * <br>- 尺寸与位置调整：通过
   * [resize]{@link inputMethodEngine.Panel.resize(width: long, height: long, callback: AsyncCallback<void>)}调整面板尺寸，通过
   * [moveTo]{@link inputMethodEngine.Panel.moveTo(x: int, y: int, callback: AsyncCallback<void>)}移动面板位置，通过
   * [startMoving]{@link inputMethodEngine.Panel.startMoving}拖拽移动面板，通过
   * [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect)}/
   * [updatePanelRect]{@link inputMethodEngine.Panel.updatePanelRect(flag: PanelFlag, rect: PanelRect)}/
   * [updateRegion]{@link inputMethodEngine.Panel.updateRegion}调整面板区域。
   * <br>- 模式设置：通过[changeFlag]{@link inputMethodEngine.Panel.changeFlag}切换面板固定态/浮动态，通过
   * [setPrivacyMode]{@link inputMethodEngine.Panel.setPrivacyMode}设置隐私模式，通过
   * [setImmersiveMode]{@link inputMethodEngine.Panel.setImmersiveMode}/
   * [getImmersiveMode]{@link inputMethodEngine.Panel.getImmersiveMode}设置/获取沉浸模式。
   * <br>- 事件监听：通过on('show')/on('hide')/on('sizeChange')监听面板状态变化事件。
   * <br>
   * <br>面板生命周期：
   * <br> 
   * <br>1. 在InputMethodAbility的[createPanel]{@link inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>)}中创建Panel实例并指定面板类型和标志位。
   * <br>2. 调用[setUiContent]{@link inputMethodEngine.Panel.setUiContent(path: string, callback: AsyncCallback<void>)}加载键盘页面内容。
   * <br>3. 调用[show]{@link inputMethodEngine.Panel.show(callback: AsyncCallback<void>)}显示面板，用户可交互。
   * <br>4. 根据需要调用resize、moveTo、changeFlag等接口动态调整面板。
   * <br>5. 使用完毕后调用[destroyPanel]{@link inputMethodEngine.InputMethodAbility.destroyPanel(panel: Panel, callback: AsyncCallback<void>)}销毁面板，释放资源。
   * <br>
   * <br>下列API均需使用
   * [createPanel]{@link inputMethodEngine.InputMethodAbility.createPanel(ctx: BaseContext, info: PanelInfo, callback: AsyncCallback<Panel>)}
   * 获取到Panel实例后，通过实例调用。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  interface Panel {
    /**
     * @brief 为当前的输入法面板加载具体页面内容，使用callback异步回调。
     *
     * @param { string } path - 具体页面的路径。路径长度建议不超过1024字符。
     * @param { AsyncCallback<void> } callback - 回调函数。当面板页面内容加载成功，err为undefined，否则err为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string, callback: AsyncCallback<void>): void;

    /**
     * @brief 为当前的输入法面板加载具体页面内容，使用Promise异步回调。
     *
     * @param { string } path - 具体页面的路径。路径长度建议不超过1024字符。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string): Promise<void>;

    /**
     * @brief 为当前的输入法面板加载与LocalStorage相关联的具体页面内容，使用callback异步回调。
     *
     * @param { string } path - LocalStorage相关联的具体页面的路径。路径长度建议不超过1024字符。
     * @param { LocalStorage } storage - 存储单元，为应用程序范围内的可变状态属性和不可变状态属性提供存储。
     * @param { AsyncCallback<void> } callback - 回调函数。当面板页面内容加载成功，err为undefined，否则err为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string, storage: LocalStorage, callback: AsyncCallback<void>): void;

    /**
     * @brief 为当前面板加载与LocalStorage相关联的具体页面内容，使用Promise异步回调。
     *
     * @param { string } path - 具体页面的路径。路径长度建议不超过1024字符。
     * @param { LocalStorage } storage - 存储单元，为应用程序范围内的可变状态属性和非可变状态属性提供存储。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    setUiContent(path: string, storage: LocalStorage): Promise<void>;

    /**
     * @brief 改变当前输入法面板的大小，使用callback异步回调。
     * <br>
     * <br> > **说明**
     * <br> >
     * <br> > 面板宽度不超出屏幕宽度，面板高度不高于屏幕高度的0.7倍。
     * <br> >
     * <br> > 手机的PanelFlag是FLG_FLOATING且面板宽度在0~288vp之间时，面板底部功能键将随面板宽度动态调整大小，为了保证最佳用户体验，建议面板宽度不小于90vp。
     *
     * @param { long } width - 目标面板的宽度，单位为px。该参数应为大于或等于0的整数，不超出屏幕宽度。超出范围时返回错误码401。
     * @param { long } height - 目标面板的高度，单位为px。该参数应为大于或等于0的整数，不高于屏幕高度的0.7倍。超出范围时返回错误码401。
     * @param { AsyncCallback<void> } callback - 回调函数。当面板大小改变成功，err为undefined，否则err为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    resize(width: long, height: long, callback: AsyncCallback<void>): void;

    /**
     * @brief 改变当前输入法面板的大小，使用Promise异步回调。
     * <br>
     * <br> > **说明**
     * <br> >
     * <br> > 面板宽度不超出屏幕宽度，面板高度不高于屏幕高度的0.7倍。
     * <br> >
     * <br> > 手机的PanelFlag是FLG_FLOATING且面板宽度在0~288vp之间时，面板底部功能键将随面板宽度动态调整大小，为了保证最佳用户体验，建议面板宽度不小于90vp。
     *
     * @param { long } width - 目标面板的宽度，单位为px。该参数应为大于或等于0的整数，不超出屏幕宽度。超出范围时返回错误码401。
     * @param { long } height - 目标面板的高度，单位为px。该参数应为大于或等于0的整数，不高于屏幕高度的0.7倍。超出范围时返回错误码401。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    resize(width: long, height: long): Promise<void>;

    /**
     * @brief 移动面板位置，使用callback异步回调。[面板状态]{@link inputMethodEngine.PanelFlag}为固定态时，不产生实际移动效果。
     *
     * @param { int } x - 横轴方向移动的值，单位为px。该参数应为整数。值大于0表示右移，小于0表示左移。超出屏幕范围时返回错误码401。
     * @param { int } y - 纵轴方向移动的值，单位为px。该参数应为整数。值大于0表示下移，小于0表示上移。超出屏幕范围时返回错误码401。
     * @param { AsyncCallback<void> } callback - 回调函数。当面板位置移动成功，err为undefined，否则err为错误对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    moveTo(x: int, y: int, callback: AsyncCallback<void>): void;

    /**
     * @brief 移动面板位置，使用promise异步回调。[面板状态]{@link inputMethodEngine.PanelFlag}为固定态时，不产生实际移动效果。
     *
     * @param { int } x - 横轴方向移动的值，值大于0表示右移，单位为px。该参数应为整数。
     * @param { int } y - 纵轴方向移动的值，值大于0表示下移，单位为px。该参数应为整数。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    moveTo(x: int, y: int): Promise<void>;

    /**
     * @brief 发送移动命令给窗口，使面板进入可拖动状态。不产生实际移动效果，仅在用户通过鼠标拖动面板时才会移动。
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
     * @brief 获取当前窗口的displayId，使用Promise异步回调。
     *
     * @returns { Promise<long> } Promise对象。返回窗口的displayId。
     * @throws { BusinessError } 12800002 - input method engine error. Possible causes:
     *     1.input method panel not created. 2.the input method application does not subscribe to related events.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    getDisplayId(): Promise<long>;

    /**
     * @brief 显示当前输入法面板，使用callback异步回调。输入法应用与编辑框绑定成功后可正常调用。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当面板显示成功，err为undefined，否则err为错误对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    show(callback: AsyncCallback<void>): void;

    /**
     * @brief 显示当前输入法面板，使用promise异步回调。输入法应用与编辑框绑定成功后可正常调用。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    show(): Promise<void>;

    /**
     * @brief 隐藏当前输入法面板，使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当面板隐藏成功，err为undefined，否则err为错误对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hide(callback: AsyncCallback<void>): void;

    /**
     * @brief 隐藏当前输入法面板，使用promise异步回调。
     *
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    hide(): Promise<void>;

    /**
     * @brief 监听当前面板显示状态，使用 callback 异步回调。
     *
     * @param { 'show' } type - 监听当前面板的状态类型，固定取值为'show'。
     * @param { function } callback - 回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'show', callback: () => void): void;

    /**
     * @brief 取消监听当前面板的显示状态，使用callback异步回调。
     *
     * @param { 'show' } type - 取消监听当前面板的状态类型，固定取值为'show'。
     * @param { function } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'show', callback?: () => void): void;

    /**
     * @brief 监听当前面板隐藏状态，使用callback异步回调。
     *
     * @param { 'hide' } type - 监听当前面板的状态类型，固定取值为'hide'。
     * @param { function } callback - 回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'hide', callback: () => void): void;

    /**
     * @brief 取消监听当前面板的隐藏状态，使用callback异步回调。
     *
     * @param { 'hide' } type - 要取消监听的当前面板状态类型，固定取值为'hide'。
     * @param { function } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'hide', callback?: () => void): void;

    /**
     * @brief 将输入法应用的面板状态改变为其他[PanelFlag]{@link inputMethodEngine.PanelFlag}形态，仅对
     * [SOFT_KEYBOARD]{@link inputMethodEngine.PanelType}生效。
     *
     * @param { PanelFlag } flag - 目标面板状态类型。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    changeFlag(flag: PanelFlag): void;

    /**
     * @brief 将输入法应用的面板设置为隐私模式，隐私模式不可被录屏、截屏。
     *
     * @permission ohos.permission.PRIVACY_WINDOW
     * @param { boolean } isPrivacyMode - 是否设置隐私模式。<br/>- 值为true，表示将设置为隐私模式。<br/>- 值为false，表示将设置为非隐私模式。
     * @throws { BusinessError } 201 - permissions check fails.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    setPrivacyMode(isPrivacyMode: boolean): void;

    /**
     * @brief 预设置输入法应用横竖屏大小。接口调用完毕表示adjust请求已提交到输入法框架，不表示执行完毕。
     * <br>
     * <br> > **说明:**
     * <br> >
     * <br> > 仅用于SOFT_KEYBOARD类型，状态为FLG_FIXED或FLG_FLOATING的面板。
     * <br> >
     * <br> > 此接口为同步接口，接口返回成功仅代表系统侧收到设置的请求，不代表设置完成。如果需要感知执行过程中的异常，建议使用
     * <br> > [updatePanelRect]{@link inputMethodEngine.Panel.updatePanelRect(flag: PanelFlag, rect: PanelRect)}或
     * <br> > [updatePanelRectSync]{@link inputMethodEngine.Panel.updatePanelRectSync(flag: PanelFlag, rect: PanelRect)}。
     * <br> >
     * <br> > 手机的PanelFlag是FLG_FLOATING且面板宽度在0~288vp之间时，面板底部功能键将随面板宽度动态调整大小，为了保证最佳用户体验，建议面板宽度不小于90vp。
     *
     * @param { PanelFlag } flag - 目标面板状态类型。类型为FLG_FIXED或FLG_FLOATING。
     * @param { PanelRect } rect - 目标面板横屏状态及竖屏状态的横坐标，纵坐标，宽度以及高度。固定态：高度不能超过屏幕高度的70%，宽度不能超过屏幕宽度；悬浮态：高度不能超过屏幕高度，宽度不能超过屏幕宽度。
     *     超出范围时返回错误码401。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    adjustPanelRect(flag: PanelFlag, rect: PanelRect): void;

    /**
     * @brief 预设置输入法应用横竖屏大小、位置、自定义避让区域以及热区。
     * <br>
     * <br> > **说明:**
     * <br> >
     * <br> > 仅用于SOFT_KEYBOARD类型，状态为FLG_FIXED或FLG_FLOATING的面板。此接口兼容
     * <br> > [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect)}的调用方法，若入参rect
     * <br> > 仅填写属性landscapeRect和portraitRect，则默认调用
     * <br> > [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect)}。
     * <br> >
     * <br> > 此接口为同步接口，接口返回成功仅代表系统侧收到设置的请求，不代表设置完成。如果需要感知执行过程中的异常，建议使用
     * <br> > [updatePanelRect]{@link inputMethodEngine.Panel.updatePanelRect(flag: PanelFlag, rect: EnhancedPanelRect)}或
     * <br> > [updatePanelRectSync]{@link inputMethodEngine.Panel.updatePanelRectSync(flag: PanelFlag, rect: EnhancedPanelRect)}
     * <br> > 。
     * <br> >
     * <br> > 手机的PanelFlag是FLG_FLOATING且面板宽度在0~288vp之间时，面板底部功能键将随面板宽度动态调整大小，为了保证最佳用户体验，建议面板宽度不小于90vp。
     * <br> >
     * <br> > 当com.ohos.sceneboard进程不存在时，输入法热区生效范围保持和软键盘区域一致。
     *
     * @param { PanelFlag } flag - 目标面板状态类型。类型为FLG_FIXED或FLG_FLOATING。
     * @param { EnhancedPanelRect } rect - 目标面板横屏状态及竖屏状态的位置、大小、避让区域以及热区。
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
     * @brief 预设置输入法应用横竖屏大小。使用Promise异步回调。
     * <br>
     * <br> > **说明:**
     * <br> >
     * <br> > 仅用于SOFT_KEYBOARD类型，状态为FLG_FIXED或FLG_FLOATING的面板。
     * <br> >
     * <br> > 此接口为异步接口，接口返回仅代表系统侧收到设置的请求，不代表已完成设置。
     * <br> >
     * <br> > 手机的PanelFlag是FLG_FLOATING且面板宽度在0~288vp之间时，面板底部功能键将随面板宽度动态调整大小，为了保证最佳用户体验，建议面板宽度不小于90vp。
     *
     * @param { PanelFlag } flag - 目标面板状态类型。类型为FLG_FIXED或FLG_FLOATING。
     * @param { PanelRect } rect - 目标面板横屏状态及竖屏状态的横坐标，纵坐标，宽度以及高度。固定态：高度不能超过屏幕高度的70%，宽度不能超过屏幕宽度；悬浮态：高度不能超过屏幕高度，宽度不能超过屏幕宽度。
     *     超出范围时返回错误码401。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    updatePanelRect(flag: PanelFlag, rect: PanelRect): Promise<void>;

    /**
     * @brief 预设置输入法应用横竖屏大小、位置、自定义避让区域以及热区。使用Promise异步回调。
     * <br>
     * <br> > **说明:**
     * <br> >
     * <br> > 仅用于SOFT_KEYBOARD类型，状态为FLG_FIXED或FLG_FLOATING的面板。此接口兼容
     * <br> > [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect)}的调用方法，若入参rect
     * <br> > 仅填写属性landscapeRect和portraitRect，则默认调用
     * <br> > [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect)}。
     * <br> >
     * <br> > 此接口为异步接口，接口返回仅代表系统侧收到设置的请求，不代表已完成设置。
     * <br> >
     * <br> > 手机的PanelFlag是FLG_FLOATING且面板宽度在0~288vp之间时，面板底部功能键将随面板宽度动态调整大小，为了保证最佳用户体验，建议面板宽度不小于90vp。
     * <br> >
     * <br> > 当com.ohos.sceneboard进程不存在时，输入法热区生效范围保持和软键盘区域一致。
     *
     * @param { PanelFlag } flag - 目标面板状态类型。类型为FLG_FIXED或FLG_FLOATING。
     * @param { EnhancedPanelRect } rect - 目标面板横屏状态及竖屏状态的位置、大小、避让区域以及热区。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    updatePanelRect(flag: PanelFlag, rect: EnhancedPanelRect): Promise<void>;

    /**
     * @brief 预设置输入法应用横竖屏大小。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [updatePanelRect]{@link inputMethodEngine.Panel.updatePanelRect(flag: PanelFlag, rect: PanelRect)}。
     * <br> >
     * <br> > 仅用于SOFT_KEYBOARD类型，状态为FLG_FIXED或FLG_FLOATING的面板。
     * <br> >
     * <br> > 此接口为同步接口，接口返回代表系统侧收到设置的请求，并已完成设置。
     * <br> >
     * <br> > 手机的PanelFlag是FLG_FLOATING且面板宽度在0~288vp之间时，面板底部功能键将随面板宽度动态调整大小，为了保证最佳用户体验，建议面板宽度不小于90vp。
     *
     * @param { PanelFlag } flag - 目标面板状态类型。类型为FLG_FIXED或FLG_FLOATING。
     * @param { PanelRect } rect - 目标面板横屏状态及竖屏状态的横坐标，纵坐标，宽度以及高度。固定态：高度不能超过屏幕高度的70%，宽度不能超过屏幕宽度；悬浮态：高度不能超过屏幕高度，宽度不能超过屏幕宽度。
     *     超出范围时返回错误码401。
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    updatePanelRectSync(flag: PanelFlag, rect: PanelRect): void;

    /**
     * @brief 预设置输入法应用横竖屏大小、位置、自定义避让区域以及热区。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 同步接口阻塞主线程，容易影响UI交互，需谨慎使用。建议优先使用对应的异步接口
     * <br> > [updatePanelRect]{@link inputMethodEngine.Panel.updatePanelRect(flag: PanelFlag, rect: PanelRect)}。
     * <br> >
     * <br> > 仅用于SOFT_KEYBOARD类型，状态为FLG_FIXED或FLG_FLOATING的面板。此接口兼容
     * <br> > [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect)}的调用方法，若入参rect
     * <br> > 仅填写属性landscapeRect和portraitRect，则默认调用
     * <br> > [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect)}。
     * <br> >
     * <br> > 此接口为同步接口，接口返回代表系统侧收到设置的请求，并已完成设置。
     * <br> >
     * <br> > 手机的PanelFlag是FLG_FLOATING且面板宽度在0~288vp之间时，面板底部功能键将随面板宽度动态调整大小，为了保证最佳用户体验，建议面板宽度不小于90vp。
     * <br> >
     * <br> > 当com.ohos.sceneboard进程不存在时，输入法热区生效范围保持和软键盘区域一致。
     *
     * @param { PanelFlag } flag - 目标面板状态类型。类型为FLG_FIXED或FLG_FLOATING。
     * @param { EnhancedPanelRect } rect - 目标面板横屏状态及竖屏状态的位置、大小、避让区域以及热区。
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    updatePanelRectSync(flag: PanelFlag, rect: EnhancedPanelRect): void;

    /**
     * @brief 更新当前状态下输入法面板内的热区。
     * <br>
     * <br> > **说明:**
     * <br> >
     * <br> > 仅用于SOFT_KEYBOARD类型，状态为FLG_FIXED或FLG_FLOATING的面板。
     * <br> >
     * <br> > 此接口为同步接口，接口返回仅代表系统侧收到更新热区的请求，不代表已完成热区更新。
     * <br> >
     * <br> > 当com.ohos.sceneboard进程不存在时，输入法热区生效范围保持和软键盘区域一致。
     *
     * @param { Array<window.Rect> } inputRegion - 面板内接收输入事件的区域。<br/>- 数组大小限制为[1, 4]。<br/>- 传入的热区位置是相对于输入法面板窗口左顶点的位置。
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
     * @brief 监听当前面板大小变化，使用callback异步回调。
     * <br>
     * <br> > **说明:**
     * <br> >
     * <br> > 仅用于SOFT_KEYBOARD类型，状态为FLG_FIXED或FLG_FLOATING的面板。输入法通过adjustPanelRect等接口对面板大小进行调节时，系统会根据一定规则校验计算出最终的数值（例如超出屏幕等场景
     * <br> > ），输入法应用可通过该回调获取的真实面板大小，完成最终的面板布局刷新。
     * <br> >
     * <br> > -  从API version 12-14开始支持，此接口回调函数中仅包含[window.Size]{@link @ohos.window:window.Size}类型的必选参数。
     * <br> >
     * <br> > -  从API version 15起，调用
     * <br> > [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect)}接口后，此
     * <br> > 接口回调函数增加[KeyboardArea]{@link inputMethodEngine.KeyboardArea}类型的可选参数。
     *
     * @param { 'sizeChange' } type - 监听当前面板的大小是否产生变化，固定值为'sizeChange'。
     * @param { Callback<window.Size> } callback - 回调函数。返回当前软键盘面板的大小，包含宽度和高度值。 [since 12 - 14]
     * @param { SizeChangeCallback } callback - 回调函数。返回当前软键盘面板的大小，包含宽度和高度值。 [since 15]
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    on(type: 'sizeChange', callback: SizeChangeCallback): void;

    /**
     * @brief 取消监听当前面板大小变化，使用callback异步回调。
     * <br>
     * <br> > **说明:**
     * <br> >
     * <br> > 仅用于SOFT_KEYBOARD类型，状态为FLG_FIXED或FLG_FLOATING的面板。输入法通过adjustPanelRect等接口对面板大小进行调节时，系统会根据一定规则校验计算出最终的数值（例如超出屏幕等场景
     * <br> > ），输入法应用可通过该回调获取的真实面板大小，完成最终的面板布局刷新。
     * <br> >
     * <br> > -  从API version 12-14开始支持，此接口回调函数中仅包含[window.Size]{@link @ohos.window:window.Size}类型的必选参数。
     * <br> >
     * <br> > -  从API version 15起，调用
     * <br> > [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect)}接口后，此
     * <br> > 接口回调函数增加[KeyboardArea]{@link inputMethodEngine.KeyboardArea}类型的可选参数。
     *
     * @param { 'sizeChange' } type - 监听当前面板的大小是否产生变化，固定取值为'sizeChange'。
     * @param { ?Callback<window.Size> } [callback] - 回调函数。返回当前软键盘面板的大小，包含宽度和高度值。参数不填写时，取消订阅type对应的所有回调事
     *     件。 [since 12 - 14]
     * @param { ?SizeChangeCallback } [callback] - 回调函数。返回当前软键盘面板的大小，包含宽度和高度值。参数不填写时，取消订阅type对应的所有回调事件。 [since 15]
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     */
    off(type: 'sizeChange', callback?: SizeChangeCallback): void;

    /**
     * @brief 通过Panel实例监听当前面板大小变化，在变化发生时通过callback异步回调。
     *
     * @param { 'sizeUpdate' } type - 监听当前面板的大小是否产生变化，固定取值为'sizeUpdate'。
     * @param { SizeUpdateCallback } callback - 面板大小变化时的回调，参数包含当前软键盘面板的宽度和高度。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 14 dynamic
     */
    on(type: 'sizeUpdate', callback: SizeUpdateCallback): void;

    /**
     * @brief 通过Panel实例取消监听当前面板大小变化，停止callback异步回调。
     *
     * @param { 'sizeUpdate' } type - 取消监听当前面板的大小是否产生变化，固定值为'sizeUpdate'。
     * @param { ?SizeUpdateCallback } [callback] - 回调函数。用于指定要取消监听的回调函数，如果不填则取消所有sizeUpdate监听。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 14 dynamic
     */
    off(type: 'sizeUpdate', callback?: SizeUpdateCallback): void;

    /**
     * @brief 设置输入法应用的沉浸模式。只能设置为不使用沉浸模式(NONE_IMMERSIVE)、浅色沉浸模式(LIGHT_IMMERSIVE)或深色沉浸模式(DARK_IMMERSIVE)。
     *
     * @param { ImmersiveMode } mode - 沉浸模式。
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
     * @brief 获取输入法应用的沉浸模式。
     *
     * @returns { ImmersiveMode } 沉浸模式。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    getImmersiveMode(): ImmersiveMode;

    /**
     * @brief 设置输入法应用的沉浸效果。
     * <br>
     * <br>- 只有在[启用沉浸式模式]{@link inputMethodEngine.Panel.setImmersiveMode}时，才能使用渐变模式和流光模式。
     * <br>- 只有在启用渐变模式时，才能使用流光模式。
     * <br>- 未启用渐变模式时，渐变高度必须为0px。
     * <br>- 只有系统应用才能设置流光模式。
     * <br>- 必须先调用以下任一接口，才能调用当前接口：
     * <br> - [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: PanelRect)}(支持API 
     * version 12)
     * <br> - [adjustPanelRect]{@link inputMethodEngine.Panel.adjustPanelRect(flag: PanelFlag, rect: EnhancedPanelRect)}(支持
     * API version 15)
     * <br> - [resize]{@link inputMethodEngine.Panel.resize(width: long, height: long, callback: AsyncCallback<void>)}(支持API
     * version 10)
     *
     * @param { ImmersiveEffect } effect - 沉浸效果。
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
     * @brief 设置屏幕常亮。使用Promise异步回调。
     * <br>
     * <br> > **说明:**
     * <br> >
     * <br> > - 当键盘拉起时设置常亮生效，键盘关闭则自动失效。
     * <br> >
     * <br> > - 规范使用该接口：必要场景（例如：语音输入）下，设置该属性为true；退出必要场景后，重置该属性为false；其他场景下，不使用该接口。
     *
     * @param { boolean } isKeepScreenOn - 是否设置屏幕常亮。true表示打开屏幕常亮，false表示关闭屏幕常亮。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 12800013 - window manager service error.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    setKeepScreenOn(isKeepScreenOn: boolean): Promise<void>;

    /**
     * @brief 获取指定屏幕当前状态（例如：折叠或展开）下，当前输入法键盘状态（例如：悬浮或固定）下输入法软键盘相对系统面板的偏移区域。使用Promise异步回调。
     *
     * @param { number } displayId - 输入法键盘所在屏幕的displayId，可通过[getDisplayId]{@link inputMethodEngine.Panel.getDisplayId}获取
     * @returns { Promise<SystemPanelInsets> } Promise对象。输入法键盘与系统面板的偏移区域。
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag. Possible causes:
     *     1. Current panel's type is not SOFT_KEYBOARD.  2. Panel's flag is not FLG_FIXED or FLG_FLOATING.
     * @throws { BusinessError } 12800022 - invalid displayId.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     */
    getSystemPanelCurrentInsets(displayId: number): Promise<SystemPanelInsets>;

    /**
     * @brief 获取指定屏幕当前状态（例如：折叠或展开）下，当前输入法键盘状态（例如：悬浮或固定）下输入法软键盘相对系统面板的偏移区域。使用Promise异步回调。
     *
     * @param { long } displayId - 输入法键盘所在屏幕的displayId，可通过[getDisplayId]{@link inputMethodEngine.Panel.getDisplayId}获取
     * @returns { Promise<SystemPanelInsets | null> } Promise对象。输入法键盘与系统面板的偏移区域。
     * @throws { BusinessError } 12800013 - window manager service error.
     * @throws { BusinessError } 12800017 - invalid panel type or panel flag. Possible causes:
     *     1. Current panel's type is not SOFT_KEYBOARD.  2. Panel's flag is not FLG_FIXED or FLG_FLOATING.
     * @throws { BusinessError } 12800022 - invalid displayId.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    getSystemPanelCurrentInsets(displayId: long): Promise<SystemPanelInsets | null>;

    /**
     * @brief 通过Panel实例设置输入法窗口阴影效果。
     *
     * @param { double } radius - 窗口边缘阴影的模糊半径，单位px，取值范围[0.0, +∞)，0.0时关闭窗口边缘阴影。
     * @param { string } color - 窗口边缘阴影的颜色，十六进制RGB或ARGB格式，不区分大小写，例如`#000000`或`#FF000000`。
     * @param { double } offsetX - 窗口边缘阴影X轴的偏移量，单位px。正值向右偏移，负值向左偏移。
     * @param { double } offsetY - 窗口边缘阴影Y轴的偏移量，单位px。正值向下偏移，负值向上偏移。
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
     * @brief 设置当前面板功能键颜色和功能键的背景颜色。使用Promise异步回调。
     *
     * @param { string | undefined } fillColor - 功能键的颜色，取值范围为[#01000000, #FFFFFFFF] 或 [#000000, #FFFFFF]，不支持具有完全透明Alpha通
     *     道（#00xxxxxx）的值。
     * @param { string | undefined } backgroundColor - 功能键的背景颜色，取值范围为[#01000000, #FFFFFFFF] 或 [#000000, #FFFFFF]，不支持具有完全
     *     透明Alpha通道（#00xxxxxx）的值。
     * @returns { Promise<void> } Promise对象。无返回结果。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    setSystemPanelButtonColor(fillColor: string | undefined, backgroundColor: string | undefined): Promise<void>;

    /**
     * @brief 监听当前面板显示状态，使用callback异步回调。
     *
     * @param { Callback<void> } callback - 回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onShow(callback: Callback<void>): void;
    /**
     * @brief 取消监听当前输入法面板的隐藏状态，使用callback异步回调。
     *
     * @param { Callback<void> } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offShow(callback?: Callback<void>): void;

    /**
     * @brief 监听当前面板隐藏状态，使用callback异步回调。
     *
     * @param { Callback<void> } callback - 回调函数。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onHide(callback: Callback<void>): void;
    /**
     * @brief 取消监听当前面板隐藏状态，使用callback异步回调。
     *
     * @param { Callback<void> } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offHide(callback?: Callback<void>): void;

    /**
     * @brief 订阅面板尺寸更新（sizeUpdate）事件，当输入法面板尺寸发生变更时触发该事件，并执行指定的回调函数, 使用callback异步回调。
     *
     * @param { SizeUpdateCallback } callback - 面板尺寸更新时触发的回调函数，入参为面板尺寸信息对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    onSizeUpdate(callback: SizeUpdateCallback): void;
    /**
     * @brief 取消订阅面板尺寸更新（sizeUpdate）事件，停止监听输入法面板尺寸的变更动作, 使用callback异步回调。
     *
     * @param { SizeUpdateCallback } [callback] - 可选参数，需取消的目标回调函数：传入指定回调函数实例时，仅取消该回调的订阅；不传入时，取消所有sizeUpdate事件的订阅。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    offSizeUpdate(callback?: SizeUpdateCallback): void;

    /**
     * @brief 监听当前面板大小变化，使用callback异步回调。
     *
     * @param { SizeChangeCallback } callback - 回调函数。返回当前软键盘面板的大小，包含宽度和高度值。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSizeChange(callback: SizeChangeCallback): void;
    /**
     * @brief 取消监听当前面板大小变化，使用callback异步回调。
     *
     * @param { SizeChangeCallback } [callback] - 回调函数。返回当前软键盘面板的大小，包含宽度和高度值。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSizeChange(callback?: SizeChangeCallback): void;
  }

  /**
   * @brief 输入法软键盘相对系统面板的偏移区域。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 21 dynamic
   * @since 23 static
   */
  interface SystemPanelInsets {
    /**
     * @brief 键盘区域的左边界到系统面板区域左边界的距离，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     * @since 23 static
     */
    readonly left: int;
    /**
     * @brief 键盘区域的右边界到系统面板区域右边界的距离，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     * @since 23 static
     */
    readonly right: int;
    /**
     * @brief 键盘区域的下边界到系统面板区域下边界的距离，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 21 dynamic
     * @since 23 static
     */
    readonly bottom: int;
  }

  /**
   * @brief 编辑框属性值。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface EditorAttribute {
    /**
     * @brief 编辑框的文本属性。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly inputPattern: int;

    /**
     * @brief 编辑框的功能属性。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly enterKeyType: int;

    /**
     * @brief 编辑框是否支持预上屏。
     * <br>
     * <br>- 值为true，表示支持。
     * <br>- 值为false，表示不支持。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    isTextPreviewSupported: boolean;

    /**
     * @brief 编辑框所属应用包名；该值可能为""，使用该属性时需要考虑为""的场景。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 14 dynamic
     * @since 23 static
     */
    readonly bundleName?: string;

    /**
     * @brief 输入法沉浸模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    readonly immersiveMode?: ImmersiveMode;

    /**
     * @brief 编辑框设置所属窗口ID。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18 dynamic
     * @since 23 static
     */
    readonly windowId?: int;

    /**
     * @brief 编辑框设置窗口对应的屏幕ID。如果没有设置windowId，取当前焦点窗口屏幕ID。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 18 dynamic
     * @since 23 static
     */
    readonly displayId?: long;

    /**
     * @brief 编辑框设置的占位符信息。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly placeholder?: string;

    /**
     * @brief 编辑框设置的ability名称。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly abilityName?: string;

    /**
     * @brief 编辑框设置大小写模式。如果没有设置或设置非法值，默认不进行任何首字母大写处理。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly capitalizeMode?: CapitalizeMode;

    /**
     * @brief 渐变模式。如果没有设置或设置非法值，默认不使用渐变模式。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly gradientMode?: GradientMode;

    /**
     * @brief 流光模式。未设置或设置非法值时，默认不使用流光模式。
     * <br>
     * <br>该属性仅系统应用可以使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    readonly fluidLightMode?: FluidLightMode;

    /**
     * @brief 输入法扩展信息。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    readonly extraConfig?: InputMethodExtraConfig;

    /**
     * @brief 编辑框是否具有完整处理字母、字符、功能等按键的能力。
     * <br>
     * <br>- 值为true，表示具备此能力。
     * <br>- 值为false，表示不具备此能力。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly consumeKeyEvents?: boolean;
  }

  /**
   * @brief 按键属性值。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyEvent {
    /**
     * @brief 按键的键值。键码值说明参考[KeyCode]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly keyCode: int;

    /**
     * @brief 按键事件类型。
     * <br>
     * <br>- 当值为2时，表示按下事件；
     * <br>- 当值为3时，表示抬起事件。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamic
     * @since 23 static
     */
    readonly keyAction: int;
  }

  /**
   * @brief 输入法面板状态类型枚举。
   * <br>
   * | 名称         | 值 | 说明               |
   * | ------------ | -- | ------------------ |
   * | FLG_FIXED  | 0 | 固定态面板类型。 |
   * | FLG_FLOATING | 1 | 悬浮态面板类型。 |
   * | FLAG_CANDIDATE<sup>15+</sup> | 2 | 候选词态面板类型。 |
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum PanelFlag {
    /**
     * @brief 固定态面板类型。
     * <br>
     * <br><p>提供给 SOFT_KEYBOARD 类型的面板。当该标志被设置时，软键盘将固定在屏幕底部。</p>
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    FLG_FIXED = 0,

    /**
     * @brief 悬浮态面板类型。
     * <br>
     * <br><p>提供给 SOFT_KEYBOARD 类型的面板。当该标志被设置时，软键盘处于浮动状态。</p>
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    FLG_FLOATING,

    /**
     * @brief 候选词态面板类型。
     * <br>
     * <br><p>提供给 SOFT_KEYBOARD 类型的面板。当该标志被设置时，软键盘为候选窗口，在用户输入编码时显示可能的候选字符。
     * 候选样式的面板不会被输入法服务自动显示或隐藏。输入法应用开发者需要自行控制面板的显示状态。</p>
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    FLAG_CANDIDATE
  }

  /**
   * @brief 输入法面板类型枚举。
   * <br>
   * | 名称         | 值 | 说明               |
   * | ------------ | -- | ------------------ |
   * | SOFT_KEYBOARD | 0 | 软键盘类型。 |
   * | STATUS_BAR   | 1 | 状态栏类型。 |
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum PanelType {
    /**
     * @brief 软键盘类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SOFT_KEYBOARD = 0,

    /**
     * @brief 状态栏类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    STATUS_BAR
  }

  /**
   * @brief 输入法面板属性。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface PanelInfo {
    /**
     * @brief 面板的类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    type: PanelType;

    /**
     * @brief 面板的状态类型。
     *
     * @default FLG_FIXED
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    flag?: PanelFlag;
  }

  /**
   * @brief 光标的移动方向。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum Direction {
    /**
     * @brief 向上。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_UP = 1,

    /**
     * @brief 向下。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_DOWN,

    /**
     * @brief 向左。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_LEFT,

    /**
     * @brief 向右。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_RIGHT
  }

  /**
   * @brief 输入法的安全模式，如BASIC或FULL。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  export enum SecurityMode {
    /**
     * @brief 基础访问模式，基础打字模式，会限制网络访问。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    BASIC = 0,
    /**
     * @brief 完全访问模式，不做限制，可以访问网络。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    FULL
  }

  /**
   * @brief 选中的文本范围。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Range {
    /**
     * @brief 选中文本的首字符在编辑框的索引值。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * @brief 选中文本的末字符在编辑框的索引值。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    end: int;
  }

  /**
   * @brief 选中文本时，光标移动的方向
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Movement {
    /**
     * @brief 选中文本时，光标的移动方向。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    direction: Direction;
  }

  /**
   * @brief 编辑框中文本的扩展编辑操作类型，如剪切、复制等。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ExtendAction {
    /**
     * @brief 全选。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SELECT_ALL = 0,

    /**
     * @brief 剪切。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CUT = 3,

    /**
     * @brief 复制。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    COPY = 4,

    /**
     * @brief 粘贴。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PASTE = 5
  }

  /**
   * @brief 窗口信息。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  export interface WindowInfo {
    /**
     * @brief 窗口矩形区域。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    rect: window.Rect;

    /**
     * @brief 窗口模式类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    status: window.WindowStatusType;
  }

  /**
   * @brief 输入法面板位置大小信息。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 12 dynamic
   * @since 23 static
   */
  export interface PanelRect {
    /**
     * @brief 横屏状态时输入法面板窗口的位置大小。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    landscapeRect: window.Rect;

    /**
     * @brief 竖屏状态时输入法面板窗口的位置大小。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    portraitRect: window.Rect;
  }

  /**
   * @brief 当输入法框架需要显示预览文本时触发的回调。
   *
   * @param { string } msgId - 接收到的自定义通信数据的标识符。
   * @param { ArrayBuffer } [msgParam] - 接收到的自定义通信数据的消息体。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  type OnMessageCallback = (msgId: string, msgParam?: ArrayBuffer) => void;

  /**
   * @brief 自定义通信对象。
   * <br>
   * <br> > **说明：**
   * <br> >
   * <br> > 开发者可通过注册此对象来接收已绑定当前输入法应用的编辑框应用所发送的自定义通信数据，接收到自定义通信数据时会触发此对象中
   * <br> > [onMessage]{@link inputMethodEngine.MessageHandler.onMessage(msgId: string, msgParam?: ArrayBuffer)}回调函数。
   * <br> >
   * <br> > 此对象全局唯一，多次注册仅保留最后一次注册的对象及有效性，并触发上一个已注册对象的[onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()}回调函
   * <br> > 数。
   * <br> >
   * <br> > 若取消注册全局已注册的对象时，会触发被取消对象中[onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()}回调函数。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  interface MessageHandler {
    /**
     * @brief 接收已绑定当前输入法应用的编辑框应用发送的自定义数据回调函数。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 当已注册的[MessageHandler]{@link inputMethodEngine.MessageHandler}接收到来自已绑定当前输入法应用的编辑框应用所发送的自定义通信数据时，会触发该回调函数。
     * <br> >
     * <br> > msgId为必选参数，msgParam为可选参数。存在收到仅有msgId自定义数据的可能，需与数据发送方确认自定义数据。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onMessage: OnMessageCallback;
    /**
     * @brief 监听对象终止回调函数。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 当应用注册新的[MessageHandler]{@link inputMethodEngine.MessageHandler}对象时，会触发上一个已注册
     * <br> > [MessageHandler]{@link inputMethodEngine.MessageHandler}对象的
     * <br> > [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()}回调函数。
     * <br> >
     * <br> > 当应用取消注册时，会触发当前已注册[MessageHandler]{@link inputMethodEngine.MessageHandler}对象的
     * <br> > [onTerminated]{@link inputMethodEngine.MessageHandler.onTerminated()}回调函数。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onTerminated: Callback<void>;

    /**
     * @brief 接收已绑定当前输入法应用的编辑框应用发送的自定义数据回调函数。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 当已注册的[MessageHandler](#messagehandler15)接收到来自已绑定当前输入法应用的编辑框应用所发送的自定义通信数据时，会触发该回调函数。
     * <br> >
     * <br> > msgId为必选参数，msgParam为可选参数。存在收到仅有msgId自定义数据的可能，需与数据发送方确认自定义数据。
     *
     * @param { string } msgId - 接收到的自定义通信数据的标识符。
     * @param { ArrayBuffer } [msgParam] - 接收到的自定义通信数据的消息体。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */
    onMessage(msgId: string, msgParam?: ArrayBuffer): void;

    /**
     * @brief 监听对象终止回调函数。
     * <br>
     * <br> > **说明：**
     * <br> >
     * <br> > 当应用注册新的[MessageHandler](#messagehandler15)对象时，会触发上一个已注册[MessageHandler](#messagehandler15)对象的[onTerminated](#onterminated15)回调函数。
     * <br> >
     * <br> > 当应用取消注册时，会触发当前已注册[MessageHandler](#messagehandler15)对象的[onTerminated](#onterminated15)回调函数。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */
    onTerminated(): void;
  }

  /**
   * @brief 增强的输入法面板位置、大小信息，包含自定义避让区域、自定义热区。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export interface EnhancedPanelRect {
    /**
     * @brief 横屏状态时输入法面板窗口的位置大小。
     * <br>
     * <br>- 当fullScreenMode不填写或值为false时，此属性为必选。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    landscapeRect?: window.Rect;
    /**
     * @brief 竖屏状态时，输入法面板窗口的位置大小。
     * <br>
     * <br>- 当fullScreenMode不填写或值为false时，此属性为必选。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    portraitRect?: window.Rect;
    /**
     * @brief 横屏状态时，面板中的避让线距离面板顶部的距离，单位px。默认值为0。
     * <br>
     * <br>- 应用内其他系统组件会对避让线以下的输入法面板区域进行避让。
     * <br>- 面板为固定态时，避让线到屏幕底部的高度不能超过屏幕高度的70%。当面板高度大于屏幕高度70%时，取默认值0将无法通过此校验，需要开发者手动设置，使得避让线到屏幕底部的高度不超过屏幕高度的70%。
     *
     * @default 0
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    landscapeAvoidY?: int;
    /**
     * @brief 横屏状态时，面板接收输入事件的区域。
     * <br>
     * <br>- 数组大小限制为[1, 4]。默认值为横屏时的面板大小。
     * <br>- 传入的热区位置是相对于输入法面板窗口左顶点的位置。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    landscapeInputRegion?: Array<window.Rect>;
    /**
     * @brief 竖屏状态时，面板中的避让线距离面板顶部的距离，单位px。默认值为0。
     * <br>
     * <br>- 应用内其他系统组件会对避让线以下的输入法面板区域进行避让。
     * <br>- 面板为固定态时，避让线到屏幕底部的高度不能超过屏幕高度的70%。当面板高度大于屏幕高度70%时，取默认值0将无法通过此校验，需要开发者手动设置，使得避让线到屏幕底部的高度不超过屏幕高度的70%。
     *
     * @default 0
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    portraitAvoidY?: int;
    /**
     * @brief 竖屏状态时，面板接收输入事件的区域。
     * <br>
     * <br>- 数组大小限制为[1, 4]。默认值为竖屏时的面板大小。
     * <br>- 传入的热区位置是相对于输入法面板窗口左顶点的位置。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    portraitInputRegion?: Array<window.Rect>;
    /**
     * @brief 是否开启全屏模式。默认值为false。
     * <br>
     * <br>- 值为true，landscapeRect和portraitRect可不填写。
     * <br>- 值为false，landscapeRect和portraitRect为必选属性。
     *
     * @default false
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    fullScreenMode?: boolean;
  }

  /**
   * @brief 面板中的键盘区域。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export interface KeyboardArea {
    /**
     * @brief 键盘区域的上边界到面板区域上边界的距离，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    top: int;
    /**
     * @brief 键盘区域的下边界到面板区域下边界的距离，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    bottom: int;
    /**
     * @brief 键盘区域的左边界到面板区域左边界的距离，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    left: int;
    /**
     * @brief 键盘区域的右边界到面板区域右边界的距离，单位为px，该参数为整数。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    right: int;
  }
  /**
   * @brief 绑定输入法时的附加选项。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 19 dynamic
   * @since 23 static
   */
  export interface AttachOptions {
    /**
     * @brief 该属性由编辑框应用设置，如果没有设置或设置非法值，则默认没有特定的原因触发键盘请求。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 19 dynamic
     * @since 23 static
     */
    requestKeyboardReason?: RequestKeyboardReason;

    /**
     * @brief 是否使能简单键盘，该属性由编辑框应用设置，true表示使能简单键盘，false表示不使能简单键盘。
     * <br>
     * <br>如果没有设置或设置非法值，则默认不使能简单键盘。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    isSimpleKeyboardEnabled?: boolean;
  }

  /**
   * @brief 枚举，定义了文本首字母大写的不同模式。
   * <br>
   * | 名称 | 值 | 说明 |
   * | -------- | -- | -------- |
   * | NONE | 0 | 不进行任何首字母大写处理。|
   * | SENTENCES | 1 | 每个句子的首字母大写。|
   * | WORDS | 2 | 每个单词的首字母大写。|
   * | CHARACTERS | 3 | 每个字母都大写。|
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CapitalizeMode {
    /**
     * @brief 不进行任何首字母大写处理。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * @brief 每个句子的首字母大写。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SENTENCES,

    /**
     * @brief 每个单词的首字母大写。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    WORDS,

    /**
     * @brief 每个字母都大写。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    CHARACTERS
  }
}

export default inputMethodEngine;