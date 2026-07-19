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
 * @file 输入法框架
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
 * **@ohos.inputMethod**模块是面向普通前台应用（如备忘录、短信、设置等系统应用）的输入法客户端模块，提供输入法控制和管理能力。
 * 
 * 本模块是输入法框架的客户端接口，为编辑框应用提供与输入法服务的交互能力，包括输入法绑定/解绑、软键盘显示/隐藏、输入法切换、输入法列表查询、编辑框属性与光标更新、文本选择与操作事件监听、自定义消息通信等。
 * 
 * 本模块提供两大核心能力集：1）通过`InputMethodController`实现编辑框应用与输入法之间的绑定、交互和事件监听——编辑框应用绑定输入法后可控制键盘显隐、更新光标和编辑属性、监听输入法发出的文本操作事件（插入、删除、选
 * 中文本、移动光标、发送功能键和扩展动作等），以及通过自定义消息通道与输入法应用双向通信；2）通过`InputMethodSetting`实现输入法管理——获取输入法列表、查询当前输入法及子类型、订阅输入法切换事件、切换输入法及子类型、
 * 查询面板显示状态等。
 * 
 * 当开发带有文本编辑框的应用（需要与输入法交互）或系统应用（需要管理输入法）时使用本模块。典型场景包括：应用中编辑框获取焦点时绑定输入法并显示键盘、编辑框失去焦点时解绑输入法并隐藏键盘、系统设置应用中切换和配置输入法等。
 * 
 * 本模块是IME Kit（输入法框架Kit）中的客户端控制模块，与IME Kit中的其他模块协同工作：
 * 
 * - **@ohos.inputMethodEngine**：面向输入法应用的服务端模块，提供软键盘窗口创建、文本插入/删除、监听物理按键等能力。本模块（@ohos.inputMethod）发出的请求（如显示键盘、切换输入法）最终由@
 * ohos.inputMethodEngine侧的输入法应用响应和处理。
 * - **@ohos.inputMethodList**：提供输入法列表选择对话框的显示与管理能力。
 * - **@ohos.inputMethod.Panel**：定义输入法面板类型与状态信息，用于查询面板可见性等。
 * 
 * 典型的客户端应用（如备忘录、设置）与输入法交互的调用序列如下：
 * 
 * 1. 通过`inputMethod.getController()`获取客户端控制器实例`InputMethodController`。
 * 2. 通过`InputMethodController.attach()`绑定输入法（对于自绘控件场景），或依赖系统原生编辑框自动绑定。
 * 3. 通过`InputMethodController.showTextInput()`拉起软键盘，进入文本编辑状态。
 * 4. 在编辑过程中，通过`updateCursor`、`changeSelection`、`updateAttribute`等接口向输入法同步编辑框状态。
 * 5. 通过`InputMethodController.hideTextInput()`隐藏软键盘，退出编辑状态。
 * 6. 通过`InputMethodController.detach()`解除与输入法的绑定。
 * 
 * **配对约束：**
 * 
 * - `attach`与`detach`必须配对使用，未detach而直接退出可能导致资源泄漏。
 * - `showTextInput`与`hideTextInput`必须配对使用，避免输入法状态不一致。
 * 
 * 本模块的核心开放能力由以下关键Interface承载：
 * 
 * | Interface | 说明 |
 * |---|---|
 * | **InputMethodController** | 输入法控制器，编辑框应用与输入法交互的核心对象。提供绑定/解绑输入法（attach/detach）、显示/隐藏键盘（showTextInput/hideTextInput/showSoftKeyboard/hideSoftKeyboard）、更新光标和编辑属性（updateCursor/updateAttribute/changeSelection）、监听输入法操作事件（insertText/deleteLeft/deleteRight/selectByRange/selectByMovement/moveCursor/sendFunctionKey/sendKeyboardStatus/handleExtendAction/setPreviewText/finishTextPreview）、自定义消息通信（sendMessage/recvMessage）、停止输入会话等能力。通过`getController()`获取实例。 |
 * | **InputMethodSetting** | 输入法设置管理对象，提供输入法查询和管理能力。包括获取已启用/已禁用/全部输入法列表（getInputMethods/getAllInputMethods）、查询指定输入法的子类型列表（listInputMethodSubtype）、获取当前输入法及子类型、订阅输入法切换事件（on('imeChange')）、订阅面板显隐事件（on('imeShow')/on('imeHide')）、查询面板显示状态（isPanelShown）、启用/禁用输入法（enableInputMethod）、获取输入法自身启用状态（getInputMethodState）等。通过`getSetting()`获取实例。 |
 * 
 * 此外，本模块还定义了多个关键数据类型：
 * 
 * | 类型 | 说明 |
 * |---|---|
 * | **InputMethodProperty** | 输入法属性信息，描述一个输入法的名称、ID、标签、图标、启用状态等。 |
 * | **InputMethodSubtype** | 输入法子类型，描述输入法的语言、模式等子类型属性。 |
 * | **TextConfig** | 编辑框文本配置，包含输入属性（InputAttribute）、光标信息（CursorInfo）、选区信息、窗口ID等。 |
 * | **InputAttribute** | 输入属性，定义文本输入类型（TextInputType）和回车键类型（EnterKeyType）。 |
 * | **CursorInfo** | 光标信息，定义光标的位置和尺寸。 |
 * | **MessageHandler** | 自定义消息处理器，用于接收输入法应用发送的消息并提供终止通知。 |
 * 
 * 编辑框应用与输入法交互的典型流程涉及InputMethodController的多个API组合调用：获取控制器 -> 绑定输入法 -> 订阅输入法操作事件 -> 在回调中处理文本操作 -> 解绑输入法。
 *
 * @syscap SystemCapability.MiscServices.InputMethodFramework
 * @since 6 dynamic
 * @since 23 static
 */
declare namespace inputMethod {
  /**
   * 可支持的最大输入法个数。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  const MAX_TYPE_NUM: int;

  /**
   * 获取客户端设置实例[InputMethodSetting]{@link inputMethod.InputMethodSetting}。
   *
   * @returns { InputMethodSetting } 返回当前客户端设置实例。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethod#getSetting
   */
  function getInputMethodSetting(): InputMethodSetting;

  /**
   * 获取客户端实例[InputMethodController]{@link inputMethod.InputMethodController}。
   *
   * @returns { InputMethodController } 回调返回当前客户端实例。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 6 dynamiconly
   * @deprecated since 9
   * @useinstead inputMethod#getController
   */
  function getInputMethodController(): InputMethodController;

  /**
   * 获取客户端设置实例[InputMethodSetting]{@link inputMethod.InputMethodSetting}。
   * 
   * **含义/功能**：获取输入法设置实例，用于查询输入法列表、订阅输入法变化事件、查询面板可见性等配置管理操作。
   * 
   * **使用场景：**当应用需要查询已安装/已激活输入法列表、订阅输入法切换事件、或显示输入法选择对话框时，必须先通过此接口获取InputMethodSetting实例。
   * 
   * **使用后效果**：返回一个InputMethodSetting实例，后续可通过该实例调用getInputMethods、listInputMethodSubtype、on('imeChange')等接口。
   *
   * @returns { InputMethodSetting } 返回当前客户端设置实例。
   * @throws { BusinessError } 12800007 - input method setter error. Possible cause:
   *     create InputMethodSetting object failed.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getSetting(): InputMethodSetting;

  /**
   * 获取客户端实例[InputMethodController]{@link inputMethod.InputMethodController}。
   * 
   * **含义/功能**：获取当前应用的输入法客户端控制器实例，用于后续与输入法进行交互（绑定、显示/隐藏键盘、同步编辑框状态等）。
   * 
   * **使用场景：**当前台应用（如备忘录、聊天应用）需要控制输入法的显示/隐藏、绑定/解绑、同步编辑框信息时，必须先通过此接口获取InputMethodController实例。
   * 
   * **使用后效果**：返回一个InputMethodController实例，后续可通过该实例调用attach、showTextInput、hideTextInput、detach等一系列接口与输入法交互。
   *
   * @returns { InputMethodController } 返回当前客户端实例。
   * @throws { BusinessError } 12800006 - input method controller error. Possible cause:
   *     create InputMethodController object failed.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getController(): InputMethodController;

  /**
   * 获取默认输入法。
   *
   * @returns { InputMethodProperty } 返回默认输入法属性对象。
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
   * @param { int } [userId] - 用户ID。如果不提供：
   *     <br>- 如果调用者不是用户0的应用，该值默认为调用者的用户ID。
   *     <br>- 如果调用者是用户0的应用，该值默认为主屏幕的前台用户ID。
   * @returns { InputMethodProperty } 返回默认输入法属性对象。
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
   * 获取系统输入法设置界面Ability信息。
   *
   * @returns { ElementName } 系统输入法设置界面Ability的ElementName。
   * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
   *     a system error, such as null pointer, IPC exception.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 11 dynamic
   * @since 23 static
   */
  function getSystemInputMethodConfigAbility(): ElementName;

  /**
   * 获取指定用户的系统输入法设置界面Ability信息。用于启动系统输入法配置界面。
   *
   * @param { int } [userId] - 用户ID。如果不提供：
   *     <br>- 如果调用者不是用户0的应用，该值默认为调用者的用户ID。
   *     <br>- 如果调用者是用户0的应用，该值默认为主屏幕的前台用户ID。
   * @returns { ElementName } 系统输入法设置界面Ability的ElementName。
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
   * 切换输入法，使用callback异步回调。
   * 
   * **含义/功能**：将当前输入法切换为指定的目标输入法。
   * 
   * **使用场景：**当前输入法应用需要切换到另一个输入法时使用（如用户在输入法设置中选择了新的输入法）。
   * 
   * **使用后效果**：成功时系统将当前输入法切换为目标输入法，目标输入法成为新的当前输入法；失败时当前输入法不变。
   * 
   * **异步返回方式**：使用callback异步回调。成功时err为undefined，data为true；失败时返回BusinessError对象。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } target - 目标输入法。<br/>**使用场景：**指定要切换到的目标输入法，通过name和id唯一确定。<br/>**说明：**只需填写name和id字段即可唯
   *     一指定一个输入法，无需填写label、icon等可选字段。
   * @param { AsyncCallback<boolean> } callback - 回调函数。当输入法切换成功，err为undefined，data为true；否则为错误对象。
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
   * 切换输入法，使用promise异步回调。
   * 
   * **含义/功能**：将当前输入法切换为指定的目标输入法。
   * 
   * **使用场景：**当前输入法应用需要切换到另一个输入法时使用。
   * 
   * **使用后效果**：成功时系统将当前输入法切换为目标输入法；失败时当前输入法不变。
   * 
   * **异步返回方式**：使用Promise异步回调。成功时返回true，失败时返回BusinessError对象。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } target - 目标输入法。<br/>**使用场景：**指定要切换到的目标输入法，通过name和id唯一确定。<br/>**说明：**只需填写name和id字段即可唯
   *     一指定一个输入法。
   * @returns { Promise<boolean> } Promise对象。返回true表示切换输入法成功，返回false表示切换输入法失败。
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
   * 使用同步方法获取当前输入法。
   * 
   * **含义/功能**：获取当前正在使用的输入法属性信息。
   * 
   * **使用场景：**当应用需要知道当前活跃的输入法是哪个（如判断输入法名称、获取输入法id用于后续切换操作）时使用。
   * 
   * **使用后效果**：返回当前输入法的InputMethodProperty对象。
   *
   * @returns { InputMethodProperty } 返回当前输入法属性对象。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentInputMethod(): InputMethodProperty;

  /**
   * 获取指定用户的当前输入法。
   *
   * @param { int } [userId] - 用户ID。如果不提供：
   *     <br>- 如果调用者不是用户0的应用，该值默认为调用者的用户ID。
   *     <br>- 如果调用者是用户0的应用，该值默认为主屏幕的前台用户ID。
   * @returns { InputMethodProperty } 返回当前输入法属性对象。
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
   * 切换当前输入法的子类型。使用callback异步回调。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodSubtype } target - 目标输入法子类型。
   * @param { AsyncCallback<boolean> } callback - 回调函数。当输入法子类型切换成功，err为undefined，data为true；否则为错误对象。
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
   * 切换当前输入法的子类型。使用promise异步回调。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodSubtype } target - 目标输入法子类型。
   * @returns { Promise<boolean> } Promise对象。返回true表示当前输入法切换子类型成功，返回false表示当前输入法切换子类型失败。
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
   * 获取当前输入法的子类型。
   *
   * @returns { InputMethodSubtype } 返回当前输入法子类型对象。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 9 dynamic
   * @since 23 static
   */
  function getCurrentInputMethodSubtype(): InputMethodSubtype;

  /**
   * 获取指定用户的当前输入法子类型。
   *
   * @param { int } [userId] - 用户ID。如果不提供：
   *     <br>- 如果调用者不是用户0的应用，该值默认为调用者的用户ID。
   *     <br>- 如果调用者是用户0的应用，该值默认为主屏幕的前台用户ID。
   * @returns { InputMethodSubtype } 返回当前输入法子类型对象。
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
   * 切换至指定输入法的指定子类型，适用于跨输入法切换子类型。使用callback异步回调。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } inputMethodProperty - 目标输入法。
   * @param { InputMethodSubtype } inputMethodSubtype - 目标输入法子类型。
   * @param { AsyncCallback<boolean> } callback - 回调函数。当输入法和子类型切换成功，err为undefined，data为获取到的切换子类型结果true；否则为错误对象。
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
   * 切换至指定输入法的指定子类型，适用于跨输入法切换子类型。使用promise异步回调。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY [since 9 - 10]
   * @param { InputMethodProperty } inputMethodProperty - 目标输入法。
   * @param { InputMethodSubtype } inputMethodSubtype - 目标输入法子类型。
   * @returns { Promise<boolean> } Promise对象。返回true表示切换至指定输入法的指定子类型成功，返回false表示切换至指定输入法的指定子类型失败。
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
   * 切换输入法，使用promise异步回调。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { string } bundleName - 目标输入法包名。
   * @param { string } [subtypeId] - 输入法子类型。
   * @returns { Promise<void> } 无返回结果的Promise对象。
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
   * 切换输入法，使用promise异步回调。
   *
   * @permission ohos.permission.CONNECT_IME_ABILITY
   * @param { string } bundleName - 目标输入法的包名。
   * @param { string } [subtypeId] - 输入法子类型的ID。如果不设置该参数，则切换到使用默认子类型的目标输入法。
   * @param { int } [userId] - 用户ID。如果不提供：
   *     <br>- 如果调用者不是用户0的应用，该值默认为调用者的用户ID。
   *     <br>- 如果调用者是用户0的应用，该值默认为主屏幕的前台用户ID。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 编辑框应用设置简单键盘标志。
   *
   * @param { boolean } enable - 简单键盘是否使能标志，true标识简单键盘使能，false标识简单键盘去使能。<br/> 原生编辑框组件在下一次点击获焦时生效；自绘控件在下一次调用
   *     [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
   *     绑定输入法时生效。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  function setSimpleKeyboardEnabled(enable: boolean): void;
  
  /**
   * 订阅绑定失败事件。使用callback异步回调。
   *
   * @param { Callback<AttachFailureReason> } callback - 回调函数，返回绑定失败的原因，仅当注册者进程触发的绑定失败时，调用该回调函数。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  function onAttachmentDidFail(callback: Callback<AttachFailureReason>): void;

  /**
   * 取消订阅绑定失败事件。使用callback异步回调。
   *
   * @param { Callback<AttachFailureReason> } [callback] - 取消订阅的回调函数，需要与订阅接口传入的保持一致。参数不填写时，取消订阅该事件的所有回调函数。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  function offAttachmentDidFail(callback?: Callback<AttachFailureReason>): void;

  /**
   * The callback of 'imeChange' event.
   *
   * @param { InputMethodProperty } inputMethodProperty - the property of current inputmethod.
   * @param { InputMethodSubtype } inputMethodSubtype - the subtype of current inputmethod.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type ImeChangeCallback = (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void;

  /**
   * 输入法变更事件回调，携带发生输入法变更的用户ID。
   *
   * @param { InputMethodProperty } inputMethodProperty - 当前输入法的属性。
   * @param { InputMethodSubtype } inputMethodSubtype - 当前输入法的子类型。
   * @param { int } userId - 输入法发生变化的用户ID。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export type ImeChangeWithUserIdCallback =
      (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype, userId: int) => void;

  /**
   * 'getLeftTextOfCursor' 或 'getRightTextOfCursor' 事件的回调函数。
   *
   * @param { int } length - 文本的长度。
   * @returns { string } represents the text in edit box.
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type GetTextCallback = (length: int) => string;

  /**
   * 当光标处文本索引变化时触发的回调函数
   *
   * @returns { int } 光标处文本索引。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 23 static
   */
  export type GetTextIndexAtCursorCallback = () => int;

  /**
   * InputMethodSetting提供输入法配置与查询能力，面向前台应用提供以下功能：
   * 
   * - **输入法变化订阅**：通过
   * [on('imeChange')]{@link inputMethod.InputMethodSetting.on( type: 'imeChange', callback: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void )}
   * 订阅输入法及子类型变化事件，当用户切换输入法时收到通知。
   * - **输入法列表查询**：通过
   * [getInputMethods]{@link inputMethod.InputMethodSetting.getInputMethods(enable: boolean, callback: AsyncCallback<Array<InputMethodProperty>>)}
   * 查询已激活/未激活输入法列表，通过
   * [getAllInputMethods]{@link inputMethod.InputMethodSetting.getAllInputMethods(callback: AsyncCallback<Array<InputMethodProperty>>)}
   * 查询所有已安装输入法列表，通过
   * [listInputMethodSubtype]{@link inputMethod.InputMethodSetting.listInputMethodSubtype( inputMethodProperty: InputMethodProperty, callback: AsyncCallback<Array<InputMethodSubtype>> )}
   * 查询指定输入法的子类型列表。
   * - **面板可见性查询**：通过isPanelShown查询输入法面板是否显示。
   * - **输入法选择对话框**：通过showOptionalInputMethods显示输入法选择对话框（已废弃，建议使用InputMethodListDialog）。
   * 
   * 需通过[getSetting]{@link inputMethod.getSetting}获取InputMethodSetting实例后使用。
   * 
   * 下列API均需使用[getSetting]{@link inputMethod.getSetting}获取到InputMethodSetting实例后，通过实例调用。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface InputMethodSetting {
    /**
     * 订阅输入法及子类型变化监听事件。使用callback异步回调。
     *
     * @param { 'imeChange' } type - 设置监听类型，固定取值为'imeChange'。
     * @param { function } callback - 回调函数，返回输入法属性对象及子类型对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    on(
      type: 'imeChange',
      callback: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void;

    /**
     * 取消订阅输入法及子类型变化监听事件。使用callback异步回调。
     *
     * @param { 'imeChange' } type - 设置监听类型，固定取值为'imeChange'。
     * @param { function } [callback] - 回调函数，返回取消订阅的输入法属性对象及子类型对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     */
    off(
      type: 'imeChange',
      callback?: (inputMethodProperty: InputMethodProperty, inputMethodSubtype: InputMethodSubtype) => void
    ): void;

    /**
     * 订阅输入法[Panel]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel}固定态软键盘显示事件。使用callback异步回调。
     *
     * @param { 'imeShow' } type - 设置监听类型，固定取值为'imeShow'。
     * @param { function } callback - 回调函数，返回输入法固定态软键盘信息。
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'imeShow', callback: (info: Array<InputWindowInfo>) => void): void;

    /**
     * 取消订阅输入法[Panel]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel}固定态软键盘显示事件。
     *
     * @param { 'imeShow' } type - 设置监听类型，固定取值'imeShow'。
     * @param { function } [callback] - 取消订阅的回调函数。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'imeShow', callback?: (info: Array<InputWindowInfo>) => void): void;

    /**
     * 订阅输入法[Panel]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel}固定态软键盘隐藏事件。使用callback异步回调。
     *
     * @param { 'imeHide' } type - 设置监听类型，固定取值为'imeHide'。
     * @param { function } callback - 回调函数，返回输入法固定态软键盘信息。
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    on(type: 'imeHide', callback: (info: Array<InputWindowInfo>) => void): void;

    /**
     * 取消订阅输入法[Panel]{@link @ohos.inputMethodEngine:inputMethodEngine.Panel}固定态软键盘隐藏事件。
     *
     * @param { 'imeHide' } type - 设置监听类型，固定取值'imeHide'。
     * @param { function } [callback] - 取消订阅的回调函数。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 10 dynamic
     */
    off(type: 'imeHide', callback?: (info: Array<InputWindowInfo>) => void): void;

    /**
     * 查询指定类型的输入法面板是否处于显示状态。
     *
     * @param { PanelInfo } panelInfo - 输入法面板的属性。
     * @returns { boolean } 面板显隐状态查询结果。<br/>- true表示被查询的输入法面板处于显示状态。<br/>- false表示被查询的输入法面板处于隐藏状态。
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
     * 查询指定类型的输入法面板在指定屏幕上是否处于显示状态。
     *
     * @param { PanelInfo } panelInfo - 输入法面板的属性。
     * @param { long } displayId - 屏幕ID。
     * @returns { boolean } 面板显隐状态查询结果。<br/>- true表示被查询的输入法面板处于显示状态。<br/>- false表示被查询的输入法面板处于隐藏状态。
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
     * 获取指定输入法应用的所有子类型。使用callback异步回调。
     *
     * @param { InputMethodProperty } inputMethodProperty - 输入法应用。
     * @param { AsyncCallback<Array<InputMethodSubtype>> } callback - 回调函数，返回指定输入法应用的所有子类型。
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
     * 获取指定输入法应用的所有子类型。使用promise异步回调。
     *
     * @param { InputMethodProperty } inputMethodProperty - 输入法应用。
     * @returns { Promise<Array<InputMethodSubtype>> } Promise对象，返回指定输入法应用的所有子类型。
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
     * 查询当前输入法应用的所有子类型。使用callback异步回调。
     *
     * @param { AsyncCallback<Array<InputMethodSubtype>> } callback - 回调函数，返回当前输入法应用的所有子类型。
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listCurrentInputMethodSubtype(callback: AsyncCallback<Array<InputMethodSubtype>>): void;

    /**
     * 查询当前输入法应用的所有子类型。使用promise异步回调。
     *
     * @returns { Promise<Array<InputMethodSubtype>> } Promise对象，返回当前输入法应用的所有子类型。
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    listCurrentInputMethodSubtype(): Promise<Array<InputMethodSubtype>>;

    /**
     * 获取指定用户指定输入法的子类型列表。同步接口。
     *
     * @param { string } bundleName - 指定输入法的包名。
     * @param { int } [userId] - 用户ID。如果不提供：如果调用者不是用户0的应用，该值默认为调用者的用户ID。如果调用者是用户0的应用，该值默认为主屏幕的前台用户ID。
     * @returns { Array<InputMethodSubtype> } 返回指定输入法应用的所有子类型。
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
     * 获取已激活/未激活的输入法应用列表。使用callback异步回调。
     *
     * @param { boolean } enable - true表示返回已激活输入法列表，false表示返回未激活输入法列表。
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - 回调函数，返回已激活/未激活输入法列表。
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
     * 获取已激活/未激活的输入法应用列表。使用promise异步回调。
     *
     * @param { boolean } enable - true表示返回已激活输入法列表，false表示返回未激活输入法列表。
     * @returns { Promise<Array<InputMethodProperty>> } Promise对象，返回已激活/未激活输入法列表。
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
     * 获取已激活/未激活的输入法应用列表。同步接口。
     *
     * @param { boolean } enable - true表示返回已激活输入法列表，false表示返回未激活输入法列表。
     * @returns { Array<InputMethodProperty> } 返回已激活/未激活输入法列表。
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
     * 获取指定用户已激活/未激活的输入法应用列表。同步接口
     *
     * @param { boolean } enable - true表示返回已激活输入法列表，false表示返回未激活输入法列表。
     * @param { int } [userId] - 用户ID。如果不提供：如果调用者不是用户0的应用，该值默认为调用者的用户ID。如果调用者是用户0的应用，该值默认为主屏幕的前台用户ID。
     * @returns { Array<InputMethodProperty> } 返回已激活/未激活输入法列表。
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
     * 获取所有输入法应用列表。使用callback异步回调。
     *
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - 回调函数，返回所有输入法列表。
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethods(callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * 获取所有输入法应用列表。使用promise异步回调。
     *
     * @returns { Promise<Array<InputMethodProperty>> } Promise对象，返回所有输入法列表。
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethods(): Promise<Array<InputMethodProperty>>;

    /**
     * 获取所有输入法应用列表。同步接口。
     *
     * @returns { Array<InputMethodProperty> } 返回所有输入法列表。
     * @throws { BusinessError } 12800001 - bundle manager error.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    getAllInputMethodsSync(): Array<InputMethodProperty>;

    /**
     * 获取指定用户的所有输入法应用列表。同步接口。
     *
     * @param { int } [userId] - 用户ID。如果不提供：如果调用者不是用户0的应用，该值默认为调用者的用户ID。如果调用者是用户0的应用，该值默认为主屏幕的前台用户ID。
     * @returns { Array<InputMethodProperty> } 返回所有输入法列表。
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
     * 查询已安装的输入法列表。使用callback异步回调。
     *
     * @param { AsyncCallback<Array<InputMethodProperty>> } callback - 回调函数，返回已安装的输入法列表。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#getInputMethods
     */
    listInputMethod(callback: AsyncCallback<Array<InputMethodProperty>>): void;

    /**
     * 查询已安装的输入法列表。使用promise异步回调。
     *
     * @returns { Promise<Array<InputMethodProperty>> } Promise对象，返回已安装输入法列表。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodSetting#getInputMethods
     */
    listInputMethod(): Promise<Array<InputMethodProperty>>;

    /**
     * 显示输入法选择对话框。使用callback异步回调。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。当输入法选择对话框显示成功，err为undefined，data为true；否则为错误对象。
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    showOptionalInputMethods(callback: AsyncCallback<boolean>): void;

    /**
     * 显示输入法选择对话框。使用promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。当输入法选择对话框显示成功，err为undefined，data为true；否则为错误对象。
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    showOptionalInputMethods(): Promise<boolean>;

    /**
     * 显示输入法选择对话框。使用callback异步回调。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当输入法选择对话框显示成功。err为undefined，否则为错误对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    displayOptionalInputMethod(callback: AsyncCallback<void>): void;

    /**
     * 显示输入法选择对话框。使用promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.inputMethodList/InputMethodListDialog
     */
    displayOptionalInputMethod(): Promise<void>;

    /**
     * 查询输入法的启用状态。使用promise异步回调。
     *
     * @returns { Promise<EnabledState> } Promise对象，返回EnabledState.DISABLED表示未启用; 返回EnabledState.BASIC_MODE表示基础模式; 返回
     *     EnabledState.FULL_EXPERIENCE_MODE表示完整体验模式。
     * @throws { BusinessError } 12800004 - not an input method application.
     * @throws { BusinessError } 12800008 - input method manager service error. Possible cause:
     *     a system error, such as null pointer, IPC exception.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    getInputMethodState(): Promise<EnabledState>;

    /**
     * 修改输入法的启用状态。使用promise异步回调。
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { string } bundleName - 输入法包名。
     * @param { string } extensionName - 输入法扩展名。
     * @param { EnabledState } enabledState - 输入法启用状态。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 修改指定用户输入法的启用状态。
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { string } bundleName - 输入法的包名。
     * @param { string } extensionName - 输入法的扩展名。
     * @param { EnabledState } enabledState - 要修改的启用状态。
     * @param { int } [userId] - 用户ID。如果不提供：如果调用者不是用户0的应用，该值默认为调用者的用户ID。如果调用者是用户0的应用，该值默认为主屏幕的前台用户ID。
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
     * 订阅输入法或子类型切换事件。
     *
     * @param { ImeChangeCallback } callback - the callback called when the current input method changes.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onImeChange(callback: ImeChangeCallback): void;

    /**
     * 取消订阅输入法或子类型切换事件。
     *
     * @param { ImeChangeCallback } [callback] - the callback called when the current input method changes,
     *     when subscriber unsubscribes all callback functions, this parameter can be left blank.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offImeChange(callback?: ImeChangeCallback): void;

    /**
     * 订阅输入法及子类型变化监听事件，携带发生输入法变更的用户ID。
     *
     * @param { ImeChangeWithUserIdCallback } callback - 回调函数，返回输入法属性对象、子类型对象及用户ID。
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onImeChangeWithUserId(callback: ImeChangeWithUserIdCallback): void;

    /**
     * 取消订阅输入法及子类型变化监听事件，携带发生输入法变更的用户ID。
     *
     * @param { ImeChangeWithUserIdCallback } [callback] - 回调函数，返回取消订阅的输入法属性对象、子类型对象及用户ID。
     *     参数不填写时，取消订阅所有的回调事件。
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offImeChangeWithUserId(callback?: ImeChangeWithUserIdCallback): void;

    /**
     * 订阅输入法Panel固定态软键盘显示事件。
     *
     * @param { Callback<Array<InputWindowInfo>> } callback - 回调函数，返回输入法固定态软键盘信息。
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    onImeShow(callback: Callback<Array<InputWindowInfo>>):void;

    /**
     * 取消订阅输入法Panel固定态软键盘显示事件。
     *
     * @param { Callback<Array<InputWindowInfo>> } [callback] - 取消订阅的回调函数。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 23 static
     */
    offImeShow(callback?: Callback<Array<InputWindowInfo>>):void;

    /**
     * 订阅输入法Panel固定态软键盘隐藏事件。
     *
     * @param { Callback<Array<InputWindowInfo>>} callback - 回调函数，返回输入法固定态软键盘信息。
     * @throws { BusinessError } 202 - not system application.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    onImeHide(callback: Callback<Array<InputWindowInfo>>): void;

    /**
     * 取消订阅输入法Panel固定态软键盘隐藏事件。
     *
     * @param { Callback<Array<InputWindowInfo>> } [callback] - 取消订阅的回调函数。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @since 23 static
     */
    offImeHide(callback?: Callback<Array<InputWindowInfo>>): void;

    /**
     * 获取默认输入法能力。为优化性能，返回的InputMethodProperty对象仅保证能够唯一标识输入法能力的`name`和`id`属性正确，其他属性可能为空。
     *
     * @returns { InputMethodProperty } 默认输入法属性，仅保证`name`和`id`属性正确，其他属性可能为空。
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
      * 获取指定用户的光标信息。当编辑框未给输入法服务通知光标信息时，返回所有属性值都为0。
      *
      * @param { int } [userId] - 指定的用户ID。
      *     <如果调用者不是用户0应用，该值默认为调用者的用户ID。
      *     如果调用者是用户0应用，则该值默认为主屏幕的前台用户ID。
      * @returns { CursorInfo } 指定用户下的光标信息。
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
   * 下列API示例中都需使用[getController]{@link inputMethod.getController}获取到InputMethodController实例，再通过实例调用对应方法。
   * 
   * InputMethodController是输入法客户端控制器，面向前台应用提供与输入法交互的核心能力。通过`inputMethod.getController()`获取实例后，可进行以下操作：
   * 
   * - **绑定管理**：通过
   * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
   * 建立与输入法的绑定，通过[detach]{@link inputMethod.InputMethodController.detach(callback: AsyncCallback<void>)}解除绑定。attach和
   * detach必须配对使用。
   * - **键盘控制**：通过[showTextInput]{@link inputMethod.InputMethodController.showTextInput(callback: AsyncCallback<void>)}拉
   * 起软键盘进入编辑状态，通过[hideTextInput]{@link inputMethod.InputMethodController.hideTextInput(callback: AsyncCallback<void>)}隐
   * 藏软键盘退出编辑状态。showTextInput和hideTextInput必须配对使用。
   * - **编辑框状态同步**：通过
   * [updateCursor]{@link inputMethod.InputMethodController.updateCursor(cursorInfo: CursorInfo, callback: AsyncCallback<void>)}
   * 、
   * [changeSelection]{@link inputMethod.InputMethodController.changeSelection(text: string, start: int, end: int, callback: AsyncCallback<void>)}
   * 、
   * [updateAttribute]{@link inputMethod.InputMethodController.updateAttribute(attribute: InputAttribute, callback: AsyncCallback<void>)}
   * 等接口向输入法同步光标、选区、属性等编辑框状态信息。
   * - **事件订阅**：通过on('insertText')、on('deleteLeft')等接口订阅输入法应用发送的文本操作事件。
   * 
   * 典型调用序列：`getController()` → `attach()` → `showTextInput()`/`hideTextInput()` → `detach()`
   * 
   * > **注意：**
   * >
   * > attach和detach必须配对使用，showTextInput和hideTextInput必须配对使用，否则可能导致资源泄漏或状态不一致。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 6 dynamic
   * @since 23 static
   */
  interface InputMethodController {
    /**
     * 自绘控件绑定输入法。使用callback异步回调。
     * 
     * **含义/功能**：建立自绘控件与输入法应用之间的绑定关系，是自绘控件使用输入法功能的前提。
     * 
     * **使用场景：**自绘控件（非系统原生编辑框）需要与输入法交互时，必须先调用此接口建立绑定。原生编辑框获焦时系统自动绑定，无需调用此接口。
     * 
     * **使用后效果**：绑定成功后，自绘控件可调用showTextInput/hideTextInput控制键盘显隐、调用updateCursor/changeSelection同步编辑框状态、订阅输入法事件等。
     * 
     * **异步返回方式**：使用callback异步回调。成功时err为undefined；失败时返回BusinessError对象。
     * 
     * **前提条件/前置操作**：自绘控件所在窗口需处于获焦状态，否则绑定会失败。
     *
     * @param { boolean } showKeyboard - 绑定输入法成功后，是否拉起输入法键盘。
     *     <br>- true表示拉起。
     *     <br>- false表示不拉起。
     * @param { TextConfig } textConfig - 编辑框的配置信息。
     * @param { AsyncCallback<void> } callback - 回调函数。当绑定输入法成功后，err为undefined；否则为错误对象。
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
     * 自绘控件绑定输入法。使用promise异步回调。
     *
     * @param { boolean } showKeyboard - 绑定输入法成功后，是否拉起输入法键盘。
     *     <br>- true表示拉起。
     *     <br>- false表示不拉起。
     * @param { TextConfig } textConfig - 编辑框的配置信息。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 自绘控件绑定输入法。使用promise异步回调。
     *
     * @param { boolean } showKeyboard - 绑定输入法成功后，是否拉起输入法键盘。
     *     <br>- true表示拉起。
     *     <br>- false表示不拉起。
     * @param { TextConfig } textConfig - 编辑框的配置信息。
     * @param { RequestKeyboardReason } requestKeyboardReason - 请求键盘输入的原因。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 自绘控件绑定输入法。使用promise异步回调。
     *
     * @param { UIContext } uiContext - UIContext实例对象。
     * @param { TextConfig } textConfig - 编辑框的配置信息。
     * @param { AttachOptions } [attachOptions] - 绑定附加选项。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 编辑框应用发送“清空正在输入的文字”命令到输入法。使用promise异步回调。
     *
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
     * 进入文本编辑状态。使用callback异步回调。
     * 
     * **含义/功能**：拉起软键盘，使编辑框进入文本编辑状态。
     * 
     * **使用场景：**自绘控件绑定输入法后，需要显示软键盘开始文本输入时调用。
     * 
     * **使用后效果**：软键盘弹出，编辑框进入可输入的文本编辑状态。
     * 
     * **异步返回方式**：使用callback异步回调。成功时err为undefined；失败时返回BusinessError对象。
     * 
     * **前提条件/前置操作**：需先调用
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * 完成绑定，否则会报12800009错误。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。若成功进入编辑状态，err为undefined；否则为错误对象。
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
     * 进入文本编辑状态。使用promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 进入文本编辑状态。使用promise异步回调。
     *
     * @param { RequestKeyboardReason } requestKeyboardReason - 请求键盘输入的原因。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 退出文本编辑状态。使用callback异步回调。
     * 
     * **含义/功能**：隐藏软键盘，使编辑框退出文本编辑状态。
     * 
     * **使用场景：**自绘控件不再需要输入时调用，如用户点击了编辑框外的区域、切换到其他页面等。
     * 
     * **使用后效果**：软键盘被隐藏，编辑框退出编辑状态。调用此接口不会解除与输入法的绑定，再次调用showTextInput可重新进入编辑状态。
     * 
     * **异步返回方式**：使用callback异步回调。成功时err为undefined；失败时返回BusinessError对象。
     * 
     * **前提条件/前置操作**：需先调用
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * 完成绑定，且已调用showTextInput进入编辑状态。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当成功退出编辑状态时，err为undefined；否则为错误对象。
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
     * 退出文本编辑状态。使用promise异步回调。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 自绘控件解除与输入法的绑定。使用callback异步回调。
     * 
     * **含义/功能**：解除自绘控件与输入法应用之间的绑定关系，释放相关资源。
     * 
     * **使用场景：**自绘控件不再需要与输入法交互时调用（如页面切换、编辑框被销毁等）。
     * 
     * **使用后效果**：解除绑定后，不能再调用showTextInput、hideTextInput、updateCursor等需要绑定状态的接口。输入法软键盘将被隐藏。
     * 
     * **异步返回方式**：使用callback异步回调。成功时err为undefined；失败时返回BusinessError对象。
     *
     * @param { AsyncCallback<void> } callback - 回调函数。当解绑定输入法成功时，err为undefined；否则为错误对象。
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
     * 自绘控件解除与输入法的绑定。使用promise异步回调。
     * 
     * **含义/功能**：解除自绘控件与输入法应用之间的绑定关系，释放相关资源。
     * 
     * **使用场景：**自绘控件不再需要与输入法交互时调用。
     * 
     * **使用后效果**：解除绑定后，不能再调用需要绑定状态的接口。输入法软键盘将被隐藏。
     * 
     * **异步返回方式**：使用Promise异步回调。成功时无返回结果；失败时返回BusinessError对象。
     *
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 设置要避让软键盘的窗口。使用callback异步回调。
     *
     * @param { int } windowId - 绑定输入法应用的应用程序所在的窗口Id。该参数应为整数。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置成功时，err为undefined；否则为错误对象。
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
     * 设置要避让软键盘的窗口。使用promise异步回调。
     *
     * @param { int } windowId - 绑定输入法应用的应用程序所在的窗口Id。该参数应为整数。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 当编辑框内的光标信息发生变化时，调用该接口使输入法感知到光标变化。使用callback异步回调。
     *
     * @param { CursorInfo } cursorInfo - 光标信息。
     * @param { AsyncCallback<void> } callback - 回调函数。当光标信息更新成功时，err为undefined；否则为错误对象。
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
     * 当编辑框内的光标信息发生变化时，调用该接口使输入法感知到光标变化。使用promise异步回调。
     *
     * @param { CursorInfo } cursorInfo - 光标信息。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 当编辑框内被选中的文本信息内容或文本范围发生变化时，可调用该接口更新文本信息，使输入法应用感知到变化。使用callback异步回调。
     *
     * @param { string } text - 整个输入文本。
     * @param { int } start - 所选文本的起始位置。该参数应为大于或等于0的整数。
     * @param { int } end - 所选文本的结束位置。该参数应为大于或等于0的整数。
     * @param { AsyncCallback<void> } callback - 回调函数。当文本信息更新成功时，err为undefined；否则为错误对象。
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
     * 当编辑框内被选中的文本信息内容或文本范围发生变化时，可调用该接口更新文本信息，使输入法应用感知到变化。使用promise异步回调。
     *
     * @param { string } text - 整个输入文本。
     * @param { int } start - 所选文本的起始位置。该参数应为大于或等于0的整数。
     * @param { int } end - 所选文本的结束位置。该参数应为大于或等于0的整数。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 更新编辑框属性信息。使用callback异步回调。
     *
     * @param { InputAttribute } attribute - 编辑框属性对象。
     * @param { AsyncCallback<void> } callback - 回调函数。当编辑框属性信息更新成功时，err为undefined；否则为错误对象。
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
     * 更新编辑框属性信息。使用promise异步回调。
     *
     * @param { InputAttribute } attribute - 编辑框属性对象。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 结束输入会话。使用callback异步回调。
     * 
     * **含义/功能**：结束当前的输入会话，隐藏软键盘。
     * 
     * **使用场景：**应用需要主动结束输入会话时调用（如用户完成了输入操作）。
     * 
     * **使用后效果**：软键盘被隐藏，输入会话结束。与hideTextInput不同，stopInputSession直接结束会话而不需要先进入编辑状态。
     * 
     * **异步返回方式**：使用callback异步回调。成功时err为undefined，data为true；失败时返回BusinessError对象。
     * 
     * **前提条件/前置操作**：编辑框与输入法绑定时才能调用，即点击编辑控件后。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。当结束输入会话成功时，err为undefined，data为true；否则为错误对象。
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
     * 结束输入会话。使用promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示结束输入会话成功，返回false表示结束输入会话失败。
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
     * 结束输入会话。使用callback异步回调。
     *
     * @param { AsyncCallback<boolean> } callback - 回调函数。当会话结束成功，err为undefined，data为true；否则为错误对象。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodController#stopInputSession
     */
    stopInput(callback: AsyncCallback<boolean>): void;

    /**
     * 结束输入会话。使用promise异步回调。
     *
     * @returns { Promise<boolean> } Promise对象。返回true表示会话结束成功；返回false表示会话结束失败。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 6 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodController#stopInputSession
     */
    stopInput(): Promise<boolean>;

    /**
     * 显示输入法软键盘。使用callback异步回调。
     * 
     * **含义/功能**：强制显示当前输入法的软键盘。
     * 
     * **使用场景：**系统应用需要强制显示输入法软键盘时使用（如设置应用测试输入法）。
     * 
     * **使用后效果**：输入法软键盘弹出显示。
     * 
     * **异步返回方式**：使用callback异步回调。成功时err为undefined；失败时返回BusinessError对象。
     * 
     * **前提条件/前置操作**：编辑框与输入法绑定时才能调用。
     * 
     * **相似接口差异点及选取原则**：
     * 
     * - **showSoftKeyboard**：面向系统应用，需权限ohos.permission.CONNECT_IME_ABILITY，仅显示键盘不改变编辑状态。
     * - **showTextInput**：面向自绘控件，需先attach绑定，拉起键盘并进入编辑状态。
     * - **选取原则**：自绘控件使用showTextInput；系统应用且有权限时使用showSoftKeyboard。
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { AsyncCallback<void> } callback - 回调函数。当软键盘显示成功。err为undefined，否则为错误对象。
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
     * 显示输入法软键盘。使用Promise异步回调。
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 在指定屏幕上显示输入法软键盘。使用Promise异步回调。
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { long } displayId - 屏幕ID。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 隐藏输入法软键盘。使用callback异步回调。
     * 
     * **含义/功能**：强制隐藏当前输入法的软键盘。
     * 
     * **使用场景：**系统应用需要强制隐藏输入法软键盘时使用。
     * 
     * **使用后效果**：输入法软键盘被隐藏。
     * 
     * **异步返回方式**：使用callback异步回调。成功时err为undefined；失败时返回BusinessError对象。
     * 
     * **前提条件/前置操作**：编辑框与输入法绑定时才能调用。
     * 
     * **相似接口差异点及选取原则**：
     * 
     * - **hideSoftKeyboard**：面向系统应用，需权限ohos.permission.CONNECT_IME_ABILITY，仅隐藏键盘不退出编辑状态。
     * - **hideTextInput**：面向自绘控件，隐藏键盘并退出编辑状态，可再次showTextInput重新进入。
     * - **选取原则**：自绘控件使用hideTextInput；系统应用且有权限时使用hideSoftKeyboard。
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { AsyncCallback<void> } callback - 回调函数。当软键盘隐藏成功。err为undefined，否则为错误对象。
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
     * 隐藏输入法软键盘。使用Promise异步回调。
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 隐藏指定屏幕上的输入法软键盘。使用Promise异步回调。
     *
     * @permission ohos.permission.CONNECT_IME_ABILITY
     * @param { long } displayId - 屏幕ID。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 发送自定义通信至输入法应用。使用Promise异步回调。
     * >
     * > msgId最大限制256B，msgParam最大限制128KB。
     *
     * @param { string } msgId - 需要发送至输入法应用的自定义数据的标识符。
     * @param { ?ArrayBuffer } [msgParam] - 需要发送至输入法应用的自定义数据的消息体。
     * @returns { Promise<void> } 无返回结果的Promise对象。
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
     * 注册或取消注册MessageHandler。
     *
     * @param { ?MessageHandler } [msgHandler] - 该对象通过
     *     [onMessage]{@link inputMethod.MessageHandler.onMessage(msgId: string, msgParam?: ArrayBuffer)}接收来自输入法应用所发送的自定
     *     义通信数据，并通过[onTerminated]{@link inputMethod.MessageHandler.onTerminated()}接收终止此对象订阅的消息。
     *     <br>若不填写此参数，则取消全局已注册的[MessageHandler]{@link inputMethod.MessageHandler}对象，同时触发其
     *     [onTerminated]{@link inputMethod.MessageHandler.onTerminated()}回调函数。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    recvMessage(msgHandler?: MessageHandler): void;

    /**
     * 订阅输入法应用按范围选中文本事件。使用callback异步回调。
     *
     * @param { 'selectByRange' } type - 设置监听类型，固定取值为'selectByRange'。
     * @param { Callback<Range> } callback - 回调函数，返回需要选中的文本范围。<br/>根据传入的文本范围，开发者在回调函数中编辑框中相应文本。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'selectByRange', callback: Callback<Range>): void;

    /**
     * 取消订阅输入法应用按范围选中文本事件。使用callback异步回调。
     *
     * @param { 'selectByRange' } type - 设置监听类型，固定取值为'selectByRange'。
     * @param { Callback<Range> } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'selectByRange', callback?: Callback<Range>): void;

    /**
     * 订阅输入法应用按光标移动方向，选中文本事件。使用callback异步回调。
     *
     * @param { 'selectByMovement' } type - 设置监听类型，固定取值为'selectByMovement'。
     * @param { Callback<Movement> } callback - 回调函数，返回光标移动的方向。<br/>根据传入的光标移动方向，选中编辑框中相应文本。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'selectByMovement', callback: Callback<Movement>): void;

    /**
     * 取消订阅输入法应用按光标移动方向，选中文本事件。使用callback异步回调。
     *
     * @param { 'selectByMovement' } type - 设置监听类型，固定取值为'selectByMovement'。
     * @param { Callback<Movement> } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'selectByMovement', callback?: Callback<Movement>): void;

    /**
     * 订阅输入法应用插入文本事件。使用callback异步回调。
     *
     * @param { 'insertText' } type - 设置监听类型，固定取值为'insertText'。
     * @param { function } callback - 回调函数，返回需要插入的文本内容。<br/>根据传入的文本，在回调函数中操作编辑框中的内容。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'insertText', callback: (text: string) => void): void;

    /**
     * 取消订阅输入法应用插入文本事件。
     *
     * @param { 'insertText' } type - 设置监听类型，固定取值为'insertText'。
     * @param { function } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。<br/>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'insertText', callback?: (text: string) => void): void;

    /**
     * 订阅输入法应用向左删除文本事件。使用callback异步回调。
     *
     * @param { 'deleteLeft' } type - 设置监听类型，固定取值为'deleteLeft'。
     * @param { function } callback - 回调函数，返回需要向左删除的文本长度。<br/>根据传入的删除长度，在回调函数中操作编辑框中的文本。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'deleteLeft', callback: (length: number) => void): void;

    /**
     * 取消订阅输入法应用向左删除文本事件。
     *
     * @param { 'deleteLeft' } type - 设置监听，固定取值为'deleteLeft'。
     * @param { function } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'deleteLeft', callback?: (length: number) => void): void;

    /**
     * 订阅输入法应用向右删除文本事件。使用callback异步回调。
     *
     * @param { 'deleteRight' } type - 设置监听类型，固定取值为'deleteRight'。
     * @param { function } callback - 回调函数，返回需要向右删除的文本长度。<br/>根据传入的删除长度，在回调函数中操作编辑框中的文本。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'deleteRight', callback: (length: number) => void): void;

    /**
     * 取消订阅输入法应用向右删除文本事件。
     *
     * @param { 'deleteRight' } type - 设置监听类型，固定取值为`deleteRight`。
     * @param { function } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'deleteRight', callback?: (length: number) => void): void;

    /**
     * 订阅输入法应用发送输入法软键盘状态事件。使用callback异步回调。
     *
     * @param { 'sendKeyboardStatus' } type - 设置监听类型，固定取值为'sendKeyboardStatus'。
     * @param { function } callback - 回调函数，返回软键盘状态。<br/>根据传入的软键盘状态，在回调函数中做相应操作。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'sendKeyboardStatus', callback: (keyboardStatus: KeyboardStatus) => void): void;

    /**
     * 取消订阅输入法应用发送输入法软键盘状态事件。
     *
     * @param { 'sendKeyboardStatus' } type - 设置监听类型，固定取值为'sendKeyboardStatus'。
     * @param { function } [callback] - 取消订阅的回调函数。参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'sendKeyboardStatus', callback?: (keyboardStatus: KeyboardStatus) => void): void;

    /**
     * 订阅输入法应用发送功能键事件。使用callback异步回调。
     *
     * @param { 'sendFunctionKey' } type - 设置监听类型，固定取值为'sendFunctionKey'。
     * @param { function } callback - 回调函数，返回输入法应用发送的功能键信息。<br/>根据返回的功能键信息，做相应操作。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'sendFunctionKey', callback: (functionKey: FunctionKey) => void): void;

    /**
     * 取消订阅输入法应用发送功能键事件。
     *
     * @param { 'sendFunctionKey' } type - 设置监听类型，固定取值为'sendFunctionKey'。
     * @param { function } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'sendFunctionKey', callback?: (functionKey: FunctionKey) => void): void;

    /**
     * 订阅输入法应用移动光标事件。使用callback异步回调。
     *
     * @param { 'moveCursor' } type - 设置监听类型，固定取值为'moveCursor'。
     * @param { function } callback - 回调函数，返回光标信息。<br/>根据返回的光标移动方向，改变光标位置，如光标向上或向下。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'moveCursor', callback: (direction: Direction) => void): void;

    /**
     * 取消订阅输入法应用移动光标事件。
     *
     * @param { 'moveCursor' } type - 设置监听类型，固定取值为'moveCursor'。
     * @param { function } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'moveCursor', callback?: (direction: Direction) => void): void;

    /**
     * 订阅输入法应用发送扩展编辑操作事件。使用callback异步回调。
     *
     * @param { 'handleExtendAction' } type - 设置监听类型，固定取值为'handleExtendAction'。
     * @param { function } callback - 回调函数，返回扩展编辑操作类型。<br/>根据传入的扩展编辑操作类型，做相应的操作，如剪切、复制等。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'handleExtendAction', callback: (action: ExtendAction) => void): void;

    /**
     * 取消订阅输入法应用发送扩展编辑操作事件。使用callback异步回调。
     *
     * @param { 'handleExtendAction' } type - 设置监听类型，固定取值为'handleExtendAction'。
     * @param { function } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'handleExtendAction', callback?: (action: ExtendAction) => void): void;

    /**
     * 订阅输入法应用获取光标左侧指定长度文本事件。使用callback异步回调。
     *
     * @param { 'getLeftTextOfCursor' } type - 设置监听类型，固定取值为'getLeftTextOfCursor'。
     * @param { function } callback - 回调函数，获取编辑框最新状态下光标左侧指定长度的文本内容并返回。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getLeftTextOfCursor', callback: (length: number) => string): void;

    /**
     * 取消订阅输入法应用获取光标左侧指定长度文本事件。使用callback异步回调。
     *
     * @param { 'getLeftTextOfCursor' } type - 设置监听类型，固定取值为'getLeftTextOfCursor'。
     * @param { function } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getLeftTextOfCursor', callback?: (length: number) => string): void;

    /**
     * 订阅输入法应用获取光标右侧指定长度文本事件。使用callback异步回调。
     *
     * @param { 'getRightTextOfCursor' } type - 设置监听类型，固定取值为'getRightTextOfCursor'。
     * @param { function } callback - 回调函数，获取编辑框最新状态下光标右侧指定长度的文本内容并返回。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getRightTextOfCursor', callback: (length: number) => string): void;

    /**
     * 取消订阅输入法应用获取光标右侧指定长度文本事件。使用callback异步回调。
     *
     * @param { 'getRightTextOfCursor' } type - 设置监听类型，固定取值为'getRightTextOfCursor'。
     * @param { function } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getRightTextOfCursor', callback?: (length: number) => string): void;

    /**
     * 订阅输入法应用获取光标处文本索引事件。使用callback异步回调。
     *
     * @param { 'getTextIndexAtCursor' } type - 设置监听类型，固定取值为'getTextIndexAtCursor'。
     * @param { function } callback - 回调函数，获取编辑框最新状态下光标处文本索引并返回。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1.Mandatory parameters are left unspecified; 2.Incorrect parameter types; 3.Parameter verification failed.
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    on(type: 'getTextIndexAtCursor', callback: () => number): void;

    /**
     * 取消订阅输入法应用获取光标处文本索引事件。使用callback异步回调。
     *
     * @param { 'getTextIndexAtCursor' } type - 设置监听类型，固定取值为'getTextIndexAtCursor'。
     * @param { function } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     */
    off(type: 'getTextIndexAtCursor', callback?: () => number): void;

    /**
     * 订阅输入法应用操作文本预览内容的事件。使用callback异步回调。
     *
     * @param { 'setPreviewText' } type - 设置监听类型，固定取值为'setPreviewText'。
     * @param { SetPreviewTextCallback } callback - 回调函数。用于接收文本预览的内容并返回。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    on(type: 'setPreviewText', callback: SetPreviewTextCallback): void;

    /**
     * 取消订阅输入法应用操作文本预览内容的事件。使用callback异步回调。
     *
     * @param { 'setPreviewText' } type - 设置监听类型，固定取值为'setPreviewText'。
     * @param { SetPreviewTextCallback } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    off(type: 'setPreviewText', callback?: SetPreviewTextCallback): void;

    /**
     * 订阅结束文本预览事件。使用callback异步回调。
     *
     * @param { 'finishTextPreview' } type - 设置监听类型，固定取值为'finishTextPreview'。
     * @param { Callback<void> } callback - 回调函数。用于处理预览文本结束的逻辑，类型为void。
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified. 2. Incorrect parameter types. 3.Parameter verification failed.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    on(type: 'finishTextPreview', callback: Callback<void>): void;

    /**
     * 取消订阅结束文本预览事件。使用callback异步回调。
     *
     * @param { 'finishTextPreview' } type - 设置监听类型，固定取值为'finishTextPreview'。
     * @param { Callback<void> } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     <br>参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 17 dynamic
     */
    off(type: 'finishTextPreview', callback?: Callback<void>): void;

    /**
     * 订阅输入法应用按范围选中文本事件。使用callback异步回调。
     *
     * @param { Callback<Range> } callback - 回调函数，返回需要选中的文本范围。
     *     根据传入的文本范围，开发者在回调函数中编辑框中相应文本。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectByRange(callback: Callback<Range>): void;
    /**
     * 取消订阅输入法应用按范围选中文本事件。
     *
     * @param { Callback<Range> } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectByRange(callback?: Callback<Range>): void;

    /**
     * 订阅输入法应用按光标移动方向，选中文本事件。
     *
     * @param { Callback<Movement> } callback - 回调函数，返回光标移动的方向。
     *     根据传入的光标移动方向，选中编辑框中相应文本。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSelectByMovement(callback: Callback<Movement>): void;
    /**
     * 取消订阅输入法应用按光标移动方向，选中文本事件
     *
     * @param { Callback<Movement> } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSelectByMovement(callback?: Callback<Movement>): void;

    /**
     * 订阅输入法应用插入文本事件。使用callback异步回调。
     *
     * @param { Callback<string> } callback - 回调函数，返回需要插入的文本内容。
     *     根据传入的文本，在回调函数中操作编辑框中的内容。
     * @throws  { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onInsertText(callback: Callback<string>): void;
    /**
     * 取消订阅输入法应用插入文本事件。
     *
     * @param { Callback<string> } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offInsertText(callback?: Callback<string>): void;

    /**
     * 订阅输入法应用向左删除文本事件。使用callback异步回调。
     *
     * @param { Callback<int> } callback - 回调函数，返回需要向左删除的文本长度。
     *     根据传入的删除长度，在回调函数中操作编辑框中的文本。
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onDeleteLeft(callback: Callback<int>): void;
    /**
     * 取消订阅输入法应用向左删除文本事件。
     *
     * @param { Callback<int> } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offDeleteLeft(callback?: Callback<int>): void;

    /**
     * 订阅输入法应用向右删除文本事件。使用callback异步回调。
     *
     * @param { Callback<int> } callback - 回调函数，返回需要向右删除的文本长度。
     *    根据传入的删除长度，在回调函数中操作编辑框中的文本。
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onDeleteRight(callback: Callback<int>): void;
    /**
     * 取消订阅输入法应用向右删除文本事件。
     *
     * @param { Callback<int> } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     *     to the right of the cursor.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offDeleteRight(callback?: Callback<int>): void;

    /**
     * 订阅输入法应用发送输入法软键盘状态事件。使用callback异步回调。
     *
     * @param { Callback<KeyboardStatus> } callback - 回调函数，返回软键盘状态。
     *     根据传入的软键盘状态，在回调函数中做相应操作。
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSendKeyboardStatus(callback: Callback<KeyboardStatus>): void;
    /**
     * 取消订阅输入法应用发送输入法软键盘状态事件。
     *
     * @param { Callback<KeyboardStatus> } [callback] - 取消订阅的回调函数。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSendKeyboardStatus(callback?: Callback<KeyboardStatus>): void;

    /**
     * 订阅输入法应用发送功能键事件。使用callback异步回调。
     *
     * @param { Callback<FunctionKey> } callback - 回调函数，返回输入法应用发送的功能键信息。
     *     根据返回的功能键信息，做相应操作。
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSendFunctionKey(callback: Callback<FunctionKey>): void;
    /**
     * 取消订阅输入法应用发送功能键事件。
     *
     * @param { Callback<FunctionKey> } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offSendFunctionKey(callback?: Callback<FunctionKey>): void;

    /**
     * 订阅输入法应用移动光标事件。使用callback异步回调。
     *
     * @param { Callback<Direction> } callback - 回调函数，返回光标信息。
     *     根据返回的光标移动方向，改变光标位置，如光标向上或向下。
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onMoveCursor(callback: Callback<Direction>): void;
    /**
     * 取消订阅输入法应用移动光标事件。
     *
     * @param { Callback<Direction> } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offMoveCursor(callback?: Callback<Direction>): void;

    /**
     * 订阅输入法应用发送扩展编辑操作事件。使用callback异步回调。
     *
     * @param { Callback<ExtendAction> } callback - 回调函数，返回扩展编辑操作类型。
     *     根据传入的扩展编辑操作类型，做相应的操作，如剪切、复制等。
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onHandleExtendAction(callback: Callback<ExtendAction>): void;
    /**
     * 取消订阅输入法应用发送扩展编辑操作事件。使用callback异步回调。
     *
     * @param { Callback<ExtendAction> } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offHandleExtendAction(callback?: Callback<ExtendAction>): void;

    /**
     * 订阅输入法应用获取光标左侧指定长度文本事件。使用callback异步回调
     *
     * @param { GetTextCallback } callback - 回调函数，获取编辑框最新状态下光标左侧指定长度的文本内容并返回。
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onGetLeftTextOfCursor(callback: GetTextCallback): void;
    /**
     * 取消订阅输入法应用获取光标左侧指定长度文本事件。使用callback异步回调。
     *
     * @param { GetTextCallback } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offGetLeftTextOfCursor(callback?: GetTextCallback): void;

    /**
     * 订阅输入法应用获取光标右侧指定长度文本事件。使用callback异步回调。
     *
     * @param { GetTextCallback } callback - 回调函数，获取编辑框最新状态下光标右侧指定长度的文本内容并返回。
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onGetRightTextOfCursor(callback: GetTextCallback): void;
    /**
     * 取消订阅输入法应用获取光标右侧指定长度文本事件。使用callback异步回调。
     *
     * @param { GetTextCallback } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offGetRightTextOfCursor(callback?: GetTextCallback): void;

   /**
     * 订阅输入法应用获取光标处文本索引事件。使用callback异步回调。
     *
     * @param { GetTextIndexAtCursorCallback } callback - 回调函数，获取编辑框最新状态下光标处文本索引并返回。
     * @throws { BusinessError } 12800009 - input method client detached.
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onGetTextIndexAtCursor(callback: GetTextIndexAtCursorCallback): void;
    /**
     * 取消订阅输入法应用获取光标处文本索引事件。使用callback异步回调。
     *
     * @param { GetTextIndexAtCursorCallback } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 static
     */
    offGetTextIndexAtCursor(callback?:GetTextIndexAtCursorCallback): void;

   /**
     * 订阅输入法应用操作文本预览内容的事件。使用callback异步回调。
     * 使用预览文本功能，需在调用attach前订阅此事件，并和on('finishTextPreview')一起订阅。
     *
     * @param { SetPreviewTextCallback } callback - 回调函数。用于接收文本预览的内容并返回。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onSetPreviewText(callback: SetPreviewTextCallback): void;
   /**
     * 取消订阅输入法应用操作文本预览内容的事件。使用callback异步回调。
     *
     * @param { SetPreviewTextCallback } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 static
     */
    offSetPreviewText(callback?:SetPreviewTextCallback): void;

    /**
     * 订阅结束文本预览事件。使用callback异步回调。
     * 使用预览文本功能，需在调用attach前订阅此事件，并和on('setPreviewText')一起订阅。
     *
     * @param { Callback<void> } callback - 回调函数。用于处理预览文本结束的逻辑，类型为void。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onFinishTextPreview(callback: Callback<void>): void;
    /**
     * 取消订阅结束文本预览事件。使用callback异步回调。
     *
     * @param { Callback<void> } [callback] - 取消订阅的回调函数，需要与on接口传入的保持一致。
     *     参数不填写时，取消订阅type对应的所有回调事件。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    offFinishTextPreview(callback?: Callback<void>): void;
  }

  /**
   * 输入法应用属性。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 8 dynamic
   * @since 23 static
   */
  interface InputMethodProperty {
    /**
     * 输入法包名。必填。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodProperty#name
     */
    readonly packageName: string;

    /**
     * 输入法唯一标识。必填。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead inputMethod.InputMethodProperty#id
     */
    readonly methodId: string;

    /**
     * 必填。输入法包名。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly name: string;

    /**
     * 必填。输入法扩展在应用内唯一标识，与name一起组成输入法扩展的全局唯一标识。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly id: string;

    /**
     * 非必填。
     * 
     * - 当InputMethodProperty用于切换、查询等接口的入参时，开发者可不填写此字段，通过name和id即可唯一指定一个输入法扩展。
     * - 当InputMethodProperty作为查询接口的返回值时（如[getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}），此字段表示输入法扩展对外
     * 显示的名称，优先使用InputMethodExtensionAbility中配置的label，若未配置，自动使用应用入口ability的label；当应用入口ability未配置label时，自动使用应用AppScope中配置
     * 的label。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly label?: string;

    /**
     * 非必填。
     * 
     * - 当InputMethodProperty用于切换、查询等接口的入参时，开发者可不填写此字段，通过name和id即可唯一指定一个输入法扩展。
     * - 当InputMethodProperty作为查询接口的返回值时（如[getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}），此字段表示label字段
     * 的资源号。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    readonly labelId?: long;

    /**
     * 非必填。
     * 
     * - 当InputMethodProperty用于切换、查询等接口的入参时，开发者可不填写此字段，通过name和id即可唯一指定一个输入法扩展。
     * - 当InputMethodProperty作为查询接口的返回值时（如[getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}），此字段表示输入法图标数
     * 据，可以通过iconId查询获取。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly icon?: string;

    /**
     * 非必填。
     * 
     * - 当InputMethodProperty用于切换、查询等接口的入参时，开发者可不填写此字段，通过name和id即可唯一指定一个输入法扩展。
     * - 当InputMethodProperty作为查询接口的返回值时（如[getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}），此字段表示icon字段的
     * 资源号。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 9 dynamic
     * @since 23 static
     */
    readonly iconId?: long;

    /**
     * 非必填。
     * 
     * - 当InputMethodProperty用于切换、查询等接口的入参时，开发者可不填写此字段，通过name和id即可唯一指定一个输入法扩展
     * - 当InputMethodProperty作为查询接口的返回值时（如[getCurrentInputMethod]{@link inputMethod.getCurrentInputMethod}），此字段表示该输入法启用状
     * 态。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    readonly enabledState?: EnabledState;

    /**
     * 输入法扩展信息。
     * 
     * - API version 10起：非必填；
     * - API version 9：必填。
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
   * 光标移动方向。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum Direction {
    /**
     * 向上。
     * 
     * **使用场景：**输入法请求光标向上移动时使用，如多行文本中上移光标。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_UP = 1,

    /**
     * 向下。
     * 
     * **使用场景：**输入法请求光标向下移动时使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_DOWN,

    /**
     * 向左。
     * 
     * **使用场景：**输入法请求光标向左移动时使用，如删除左侧字符前移动光标。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_LEFT,

    /**
     * 向右。
     * 
     * **使用场景：**输入法请求光标向右移动时使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CURSOR_RIGHT
  }

  /**
   * 文本的选中范围。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Range {
    /**
     * 选中文本的首字符在编辑框的索引值。该参数应为大于或等于0的整数，不超过文本实际长度。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    start: int;

    /**
     * 选中文本的末字符在编辑框的索引值。该参数应为大于或等于0的整数，不超过文本实际长度，end值要大于start值。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    end: int;
  }

  /**
   * 选中文本时，光标移动的方向。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface Movement {
    /**
     * 选中文本时，光标的移动方向。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    direction: Direction;
  }

  /**
   * 文本输入类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum TextInputType {
    /**
     * NONE。
     * 
     * **使用场景：**当编辑框不希望指定特定输入类型时使用，输入法将使用默认键盘布局。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE = -1,

    /**
     * 文本类型。
     * 
     * **使用场景：**适用于普通文本输入框，如聊天、备忘录等，输入法显示全功能键盘。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    TEXT = 0,

    /**
     * 多行类型。
     * 
     * **使用场景：**适用于需要多行文本输入的场景，如长文本编辑、评论框等。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    MULTILINE,

    /**
     * 数字类型。
     * 
     * **使用场景：**适用于仅需要输入数字的场景，如数量输入、年龄输入等，输入法显示数字键盘。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NUMBER,

    /**
     * 电话号码类型。
     * 
     * **使用场景：**适用于电话号码输入框，输入法显示电话号码键盘（包含数字和常用电话符号）。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PHONE,

    /**
     * 日期类型。
     * 
     * **使用场景：**适用于日期时间输入框，输入法显示日期相关的键盘布局。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    DATETIME,

    /**
     * 邮箱地址类型。
     * 
     * **使用场景：**适用于邮箱输入框，输入法键盘会突出显示"@""."等常用邮箱符号。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    EMAIL_ADDRESS,

    /**
     * 链接类型。
     * 
     * **使用场景：**适用于网址输入框，输入法键盘会突出显示"/""."等常用URL符号。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    URL,

    /**
     * 密码类型。
     * 
     * **使用场景：**适用于密码输入框，输入法显示可见密码键盘，不进行自动建议。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    VISIBLE_PASSWORD,

    /**
     * 数字密码类型。
     * 
     * **使用场景：**适用于仅需输入数字密码的场景，如PIN码输入。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 11 dynamic
     * @since 23 static
     */
    NUMBER_PASSWORD,

    /**
     * 锁屏密码类型。
     * 
     * **使用场景：**适用于锁屏界面的密码输入框。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    SCREEN_LOCK_PASSWORD,

    /**
     * 用户名类型。
     * 
     * **使用场景：**适用于用户名输入框，输入法可根据用户名特点优化建议。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    USER_NAME,

    /**
     * 新密码类型。
     * 
     * **使用场景：**适用于设置新密码的输入框，输入法可提供密码强度提示。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NEW_PASSWORD,

    /**
     * 带小数点的数字类型。
     * 
     * **使用场景：**适用于需要输入带小数点数字的场景，如金额输入。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    NUMBER_DECIMAL,

    /**
     * 验证码类型。
     * 
     * **使用场景：**适用于验证码输入框，输入法可优化验证码输入体验。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    ONE_TIME_CODE
  }

  /**
   * Enter键的功能类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum EnterKeyType {
    /**
     * 未指定。
     * 
     * **使用场景：**编辑框不指定Enter键具体功能时使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    UNSPECIFIED = 0,

    /**
     * NONE。
     * 
     * **使用场景：**Enter键无特定行为，仅作为换行或普通按键使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE,

    /**
     * 前往。
     * 
     * **使用场景：**适用于URL输入框，Enter键触发"前往"操作，如打开链接。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    GO,

    /**
     * 查找。
     * 
     * **使用场景：**适用于搜索框，Enter键触发搜索操作。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SEARCH,

    /**
     * 发送。
     * 
     * **使用场景：**适用于消息发送框，Enter键触发发送操作。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SEND,

    /**
     * 下一步。
     * 
     * **使用场景：**适用于多步骤表单，Enter键跳转到下一个输入框。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NEXT,

    /**
     * 完成。
     * 
     * **使用场景：**适用于单步骤表单的最后输入框，Enter键表示输入完成。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    DONE,

    /**
     * 上一步。
     * 
     * **使用场景：**适用于多步骤表单，Enter键跳转到上一个输入框。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PREVIOUS,

    /**
     * 换行。
     * 
     * **使用场景：**适用于多行文本编辑框，Enter键插入换行符。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 12 dynamic
     * @since 23 static
     */
    NEWLINE
  }

  /**
   * 输入法软键盘状态。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum KeyboardStatus {
    /**
     * NONE。
     * 
     * **使用场景：**表示键盘状态尚未确定或无法判断时使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 隐藏状态。
     * 
     * **使用场景：**表示当前软键盘处于隐藏状态。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    HIDE = 1,

    /**
     * 显示状态。
     * 
     * **使用场景：**表示当前软键盘处于显示状态。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SHOW = 2
  }

  /**
   * 编辑框属性，包含文本输入类型和Enter键功能类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface InputAttribute {
    /**
     * 文本输入类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    textInputType: TextInputType;

    /**
     * Enter键功能类型。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    enterKeyType: EnterKeyType;

    /**
     * 编辑框设置的占位符信息。 
     * 
     * - 编辑框设置占位符信息时，长度不超过255个字符（如果超出将会自动截断为255个字符），用于提示或引导用户输入临时性文本或符号。（例如：提示输入项为"必填"或"非必填"的输入结果反馈。）
     * - 编辑框没有设置占位符信息时，默认为空字符串。
     * - 该字段在调用
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * 时提供给输入法应用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    placeholder?: string;

    /**
     * 编辑框设置的ability名称。
     * 
     * - 编辑框设置ability名称时，长度不超过127个字符（如果超出将会自动截断为127个字符）。
     * - 编辑框未设置ability名称时，默认为空字符串。
     * - 该字段在调用绑定
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * 时提供给输入法应用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    abilityName?: string;

    /**
     * 编辑框是否具有完整处理字母、字符、功能等按键的能力。默认值为false。
     * 
     * - 值为true，表示具备此能力。
     * - 值为false，表示不具备此能力。
     * - 该字段在调用
     * [attach]{@link inputMethod.InputMethodController.attach(showKeyboard: boolean, textConfig: TextConfig, callback: AsyncCallback<void>)}
     * / [InputAttribute]{@link inputMethod.InputAttribute}时提供给输入法应用。
     *
     * @default false
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    consumeKeyEvents?: boolean;
  }

  /**
   * 输入法功能键类型。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface FunctionKey {
    /**
     * 输入法enter键类型。
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
     * 光标的横坐标，单位为px。该参数应为整数，最小值为0，最大值为当前屏幕的宽度。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    left: double;

    /**
     * 光标的纵坐标，单位为px。该参数应为整数，最小值为0，最大值为当前屏幕的高度。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    top: double;

    /**
     * 光标的宽度，单位为px。该参数应为整数，最小值为0，最大值为当前屏幕的宽度。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    width: double;

    /**
     * 光标的高度，单位为px。该参数应为整数，最小值为0，最大值为当前屏幕的高度。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    height: double;

    /**
     * 光标所在显示器的ID。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
 	  displayId?: long;
  }

  /**
   * 编辑框的配置信息。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface TextConfig {
    /**
     * 编辑框属性。
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
     * 文本选中的范围。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    selection?: Range;

    /**
     * 编辑框所在的窗口Id，该参数应为整数。
     * 
     * 推荐使用[getWindowProperties]{@link @ohos.window:window.Window.getWindowProperties}方法获取窗口id属性。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    windowId?: int;

    /**
     * 表示是否为新编辑框。true表示新编辑框，false表示非新编辑框。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    newEditBox?: boolean;

    /**
     * 编辑框设置大小写模式。如果没有设置或设置非法值，默认不进行任何首字母大写处理。
     *
     * @default CapitalizeMode.NONE
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    capitalizeMode?: CapitalizeMode;
  }

  /**
   * 编辑框中文本的扩展编辑操作类型，如剪切、复制等。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ExtendAction {
    /**
     * 全选。
     * 
     * **使用场景：**输入法请求全选编辑框中的文本时使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    SELECT_ALL = 0,

    /**
     * 剪切。
     * 
     * **使用场景：**输入法请求剪切选中的文本时使用，将选中文本复制到剪贴板并删除原文本。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    CUT = 3,

    /**
     * 复制。
     * 
     * **使用场景：**输入法请求复制选中的文本时使用，将选中文本复制到剪贴板。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    COPY = 4,

    /**
     * 粘贴。
     * 
     * **使用场景：**输入法请求粘贴剪贴板内容时使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    PASTE = 5
  }

  /**
   * 输入法软键盘的窗口信息。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 10 dynamic
   * @since 23 static
   */
  export interface InputWindowInfo {
    /**
     * 输入法窗口的名称。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 输入法窗口左上顶点的横坐标，单位为px。该参数应为整数，最小值为0，最大值为当前屏幕的宽度。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    left: int;

    /**
     * 输入法窗口左上顶点的纵坐标，单位为px。该参数应为整数，最小值为0，最大值为当前屏幕的高度。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    top: int;

    /**
     * 输入法窗口的宽度，单位为px。该参数应为整数，最小值为0，最大值为当前屏幕的宽度。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    width: long;

    /**
     * 输入法窗口的高度，单位为px。该参数应为整数，最小值为0，最大值为当前屏幕的高度。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 10 dynamic
     * @since 23 static
     */
    height: long;

    /**
     * 输入法软键盘窗口所在的屏幕ID。
     * 
     * **模型约束：** 该参数仅可在Stage模型下使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    displayId?: long;

    /**
     * 显示输入法窗口的用户ID。
     * 
     * 该属性仅系统应用可以使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    userId?: int;
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
   * 自定义通信对象。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  interface MessageHandler {
    /**
     * onMessage(msgId: string, msgParam?: ArrayBuffer): void
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onMessage: OnMessageCallback;

    /**
     * onTerminated(): void
     * 
     * 监听对象终止回调函数。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 23 static
     */
    onTerminated: Callback<void>;

    /**
     * 接收输入法应用发送的自定义数据回调函数。
     *
     * @param { string } msgId - 接收到的自定义通信数据的标识符。
     * @param { ArrayBuffer } [msgParam] - 接收到的自定义通信数据的消息体。
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */	
    onMessage(msgId: string, msgParam?: ArrayBuffer): void;	

    /**
     * 监听对象终止回调函数。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     */
    onTerminated(): void;
  }

  /**
   * 输入法启用状态。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum EnabledState {
    /**
     * 未启用。
     * 
     * **使用场景：**输入法已被禁用，不能作为当前输入法使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    DISABLED = 0,

    /**
     * 基础模式。
     * 
     * **使用场景：**输入法已启用但处于基础模式，仅具备基础输入能力，不支持高级功能（如自定义通信）。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    BASIC_MODE,

    /**
     * 完整体验模式。
     * 
     * **使用场景：**输入法已启用且处于完整体验模式，支持所有功能（包括自定义通信、预上屏等）。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    FULL_EXPERIENCE_MODE
  }

  /**
   * 请求键盘输入的原因。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 15 dynamic
   * @since 23 static
   */
  export enum RequestKeyboardReason {
    /**
     * 表示没有特定的原因触发键盘请求。
     * 
     * **使用场景：**默认值，不指定特定触发原因时使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * 表示键盘请求是由鼠标操作触发的。
     * 
     * **使用场景：**用户通过鼠标点击编辑框触发键盘弹出时使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    MOUSE = 1,
    /**
     * 表示键盘请求是由触摸操作触发的。
     * 
     * **使用场景：**用户通过触摸点击编辑框触发键盘弹出时使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    TOUCH = 2,
    /**
     * 表示键盘请求是由其他原因触发的。
     * 
     * **使用场景：**键盘弹出的触发原因不属于鼠标和触摸时使用。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 15 dynamic
     * @since 23 static
     */
    OTHER = 20
  }

  /**
   * 当输入法框架需要显示预览文本时触发的回调。
   *
   * @param { string } text - 预览文本内容。
   * @param { Range } range - 文本的选中范围。
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 17 dynamic
   * @since 23 static
   */
  export type SetPreviewTextCallback = (text: string, range: Range) => void;

 /**
   * 枚举，定义了文本首字母大写的不同模式。
   * 
   * | 名称 | 值 | 说明 |
   * | -------- | -- | -------- |
   * | NONE | 0 | 不进行任何首字母大写处理。
   * 
   * **使用场景：**适用于无需自动大写的输入框，如密码输入、验证码输入等。|
   * | SENTENCES | 1 | 每个句子的首字母大写。
   * 
   * **使用场景：**适用于普通文本输入框，如聊天、备忘录等，自动在句号等标点后将首字母大写。|
   * | WORDS | 2 | 每个单词首字母大写。
   * 
   * **使用场景：**适用于标题、人名等需要每个单词首字母大写的场景。|
   * | CHARACTERS | 3 | 每个字母都大写。
   * 
   * **使用场景：**适用于全大写输入场景，如缩写词输入（如URL中的域名部分）。|
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 20 dynamic
   * @since 23 static
   */
  export enum CapitalizeMode {
    /**
     * 不进行任何首字母大写处理。
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
     * 每个单词首字母大写。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    WORDS,

    /**
     * 每个字母都大写。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 20 dynamic
     * @since 23 static
     */
    CHARACTERS
  }
  
  /**
   * 枚举，绑定失败的原因。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @since 22 dynamic
   * @since 23 static
   */
  export enum AttachFailureReason {
    /**
     * 表示调用者非焦点窗口所属应用导致的失败。
     * 
     * **使用场景：**应用窗口未获得焦点时调用attach，会返回此失败原因。
     * 
     * **说明：**调用attach前需确保应用窗口已获焦。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    CALLER_NOT_FOCUSED = 0,

    /**
     * 表示输入法应用异常导致的失败。
     * 
     * **使用场景：**输入法应用进程崩溃或未正常运行时，attach会返回此失败原因。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    IME_ABNORMAL,

    /**
     * 表示输入法框架服务异常导致的失败。
     * 
     * **使用场景：**输入法框架服务进程异常时，attach会返回此失败原因。
     *
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @since 22 dynamic
     * @since 23 static
     */
    SERVICE_ABNORMAL
  }
  /**
   * 绑定输入法的附加选项。
   *
   * @syscap SystemCapability.MiscServices.InputMethodFramework
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface AttachOptions {
    /**
     * 绑定输入法成功后，是否拉起输入法键盘。
     * 
     * - true表示拉起。
     * - false表示不拉起。
     *
     * @default true
     * @syscap SystemCapability.MiscServices.InputMethodFramework
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    showKeyboard?: boolean;
    /**
     * 请求键盘输入的原因。
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