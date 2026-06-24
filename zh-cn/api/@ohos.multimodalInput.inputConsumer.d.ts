/*
 * Copyright (C) 2021-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file Global Shortcut Keys
 * @kit InputKit
 */

import { Callback } from './@ohos.base';

import { KeyEvent } from './@ohos.multimodalInput.keyEvent';

/**
 * 全局快捷键订阅模块，用于处理组合按键的订阅，本模块也支持音量键拦截监听能力。
 * 
 * > **说明：**
 * >
 * > - 全局快捷键指由系统或应用定义的组合按键，系统快捷键指由系统定义的全局快捷键，应用快捷键指由应用定义的全局快捷键。
 *
 * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
 * @since 14 dynamic
 * @since 23 static
 */
declare namespace inputConsumer {

  /**
   * 按键命令触发类型枚举，用于指定组合按键的触发时机。
   * 
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum KeyCommandTriggerType {

    /**
     * 首次按下触发。当最终按键首次按下时触发回调，自动重复按下不触发。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PRESSED = 1,

    /**
     * 重复按下触发。当最终按键每次按下时都触发回调，包括自动重复按下。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    REPEAT_PRESSED = 2,

    /**
     * 按下按键或抬起按键时均会触发回调。包括自动重复按下的按键。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALL_RELEASED = 3
  }

  /**
   * 组合键选项。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyOptions {

    /**
     * 前置按键集合，数量范围[0, 4]，前置按键无顺序要求。
     * 
     * 如组合按键Ctrl+Alt+A中，Ctrl+Alt称为前置按键。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    preKeys: Array<int>;

    /**
     * 最终按键，此项必填，最终按键触发上报回调函数。
     * 
     * 如组合按键Ctrl+Alt+A中，A称为最终按键。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    finalKey: int;

    /**
     * 最终按键状态。
     * 
     * true表示按键按下，false表示按键抬起。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    isFinalKeyDown: boolean;

    /**
     * 最终按键保持按下持续时间，单位为微秒（μs）。
     * 
     * 当finalKeyDownDuration为0时，立即触发回调函数。
     * 
     * 当finalKeyDownDuration大于0时，isFinalKeyDown为true，则最终按键按下超过设置时长后触发回调函数；isFinalKeyDown为false，则最终按键按下到抬起时间小于设置时长时触发回调函
     * 数。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    finalKeyDownDuration: int;

    /**
     * 是否上报重复的按键事件。true表示上报，false表示不上报，若不填默认为true。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 18 dynamic
     * @since 23 static
     */
    isRepeat?: boolean;

    /**
     * 触发模式。取值为PRESSED(1)、REPEAT_PRESSED(2)或ALL_RELEASED(3)。启用命令触发模式。一旦设置此值，isFinalKeyDown和isRepeat将被忽略。对于
     * [inputConsumer.on('key')]{@link inputConsumer.on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>)}
     * 接口该参数是可选参数，对于
     * [inputConsumer.onKey]{@link inputConsumer.onKey(keyOptions: KeyOptions, callback:KeyCommandCallback)}接口该参数是必填参数。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    triggerType?: KeyCommandTriggerType;
  }

  /**
   * 快捷键选项。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14 dynamic
   * @since 23 static
   */
  interface HotkeyOptions {

    /**
     * 修饰键（包括 Ctrl、Shift 和 Alt）集合，数量范围[1, 4]，无顺序要求。
     * 
     * 例如，Ctrl+Shift+Esc中，Ctrl+Shift称为修饰键。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 14 dynamic
     * @since 23 static
     */
    preKeys: Array<int>;

    /**
     * 被修饰键，除修饰键和Meta键以外的按键，详细按键介绍请参见[@ohos.multimodalInput.keyCode (键值)]{@link @ohos.multimodalInput.keyCode:KeyCode}。
     * 
     * 例如，Ctrl+Shift+Esc中，Esc称为被修饰键。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 14 dynamic
     * @since 23 static
     */
    finalKey: int;

    /**
     * 是否上报重复的按键事件。true表示上报，false表示不上报，默认值为true。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 14 dynamic
     * @since 23 static
     */
    isRepeat?: boolean;
  }

  /**
   * 按键事件消费设置。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 16 dynamic
   * @since 23 static
   */
  interface KeyPressedConfig {

    /**
     * 按键键值。
     * 
     * **说明：** 从API version 26.0.0开始，新增支持[KEYCODE_FINGERPRINT_SLIDE_UP]{@link @ohos.multimodalInput.keyCode:KeyCode}键和
     * [KEYCODE_FINGERPRINT_SLIDE_DOWN]{@link @ohos.multimodalInput.keyCode:KeyCode}键，非设备通用键值，使用前请判断当前设备是否支持相关按键事件上报，请参考
     * [优先响应系统功能键开发指导](docroot://device/input/keypressed-guidelines.md)。
     * 
     * 从API version 21开始，新增支持[KEYCODE_MEDIA_PLAY_PAUSE]{@link @ohos.multimodalInput.keyCode:KeyCode}键、
     * [KEYCODE_MEDIA_NEXT]{@link @ohos.multimodalInput.keyCode:KeyCode}键和
     * [KEYCODE_MEDIA_PREVIOUS]{@link @ohos.multimodalInput.keyCode:KeyCode}键。
     * 
     * 对于API version 20及之前的版本，仅支持[KEYCODE_VOLUME_UP]{@link @ohos.multimodalInput.keyCode:KeyCode}键和
     * [KEYCODE_VOLUME_DOWN]{@link @ohos.multimodalInput.keyCode:KeyCode}键。
     *
     * @type { int } [since 16 - 24]
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 16 dynamic
     * @since 23 static
     */
    key: int;

    /**
     * 订阅指定的按键事件。
     * 
     * **说明：** 从API version 21开始，支持取值为1和2，取值为1表示订阅按键按下事件，取值为2表示同时订阅按键按下事件和按键抬起事件。
     * 
     * 对于API version 20及之前的版本，仅支持取值为1，表示订阅按键按下事件。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 16 dynamic
     * @since 23 static
     */
    action: int;

    /**
     * 是否上报重复的按键事件。true表示上报，false表示不上报，默认值为true。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 16 dynamic
     * @since 23 static
     */
    isRepeat: boolean;
  }

  /**
   * 系统快捷键屏蔽类型。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  enum ShieldMode {

    /**
     * 屏蔽所有系统快捷键。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 11 dynamic
     * @since 23 static
     */
    FACTORY_MODE = 0
  }

  /**
   * 按键命令回调函数类型，当快捷键注册条件满足时触发的回调。
   *
   * @param { KeyOptions } keyOptions - 触发回调时的组合键选项。
   * @param { KeyEvent } keyEvent - 按键事件对象，包含按键详细信息。
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type KeyCommandCallback = (keyOptions: KeyOptions, keyEvent: KeyEvent) => void;

  /**
   * 订阅系统快捷键，使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 支持仅订阅按键的down事件，或者同时订阅按键的down事件和up事件。
   * >
   * > - 若需要仅订阅按键的up事件，会存在down事件被焦点窗口消费，而无up事件闭环的风险，需要排查设计实现是否合理。
   *
   * @param { 'key' } type - 事件类型，目前仅支持'key'。
   * @param { KeyOptions } keyOptions - 组合键选项。从API版本26.0.0起keyOptions中新增参数
   *     [KeyCommandTriggerType]{@link inputConsumer.KeyCommandTriggerType}，本接口无需关注此参数。
   * @param { Callback<KeyOptions> } callback - 回调函数，返回组合按键数据。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8 dynamic
   */
  function on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>): void;

  /**
   * 订阅系统快捷键，当满足条件的组合按键输入事件发生时，使用Callback异步方式上报组合按键数据。
   *
   * @param { KeyOptions } keyOptions - 组合键选项，支持triggerType参数。
   * @param { Callback<KeyOptions> } callback - 回调函数，返回组合按键数据
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onKey(keyOptions: KeyOptions, callback: Callback<KeyOptions>): void;

  /**
   * 订阅组合按键（按键命令模式），支持通过triggerType指定不同的触发模式。当满足条件的组合按键输入事件发生时，使用callback异步回调。
   * 
   * 与 
   * [inputConsumer.on('key')]{@link inputConsumer.on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>)}
   * 现有接口的区别：
   * 
   * - 本接口的keyOptions支持triggerType参数，可选择按键按下触发、重复按下触发、重复按下或抬起均会触发等模式。
   * - 本接口回调参数为KeyCommandCallback类型，同时接收KeyOptions和KeyEvent对象。
   * - 本接口采用事件消费机制，可通过事件消费阻止按键事件向后传递。
   *
   * @param { KeyOptions } keyOptions - 组合键选项，支持triggerType参数。
   * @param { KeyCommandCallback } callback - 回调函数，返回组合键选项和按键事件数据。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onKey(keyOptions: KeyOptions, callback:KeyCommandCallback): void;

  /**
   * 取消订阅系统快捷键。使用callback异步回调。
   *
   * @param { 'key' } type - 事件类型，当前仅支持 'key'。
   * @param { KeyOptions } keyOptions - 组合键选项。从API版本26.0.0起keyOptions中新增参数
   *     [KeyCommandTriggerType]{@link inputConsumer.KeyCommandTriggerType}，本接口无需关注此参数。
   * @param { Callback<KeyOptions> } callback - 需要取消订阅的回调函数。若不填，则取消当前应用组合键选项已订阅的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8 dynamic
   */
  function off(type: 'key', keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void;

  /**
   * 取消订阅系统快捷键。使用callback异步回调。
   *
   * @param { KeyOptions } keyOptions - 组合键选项。
   * @param { Callback<KeyOptions> } [callback] - 需要取消订阅的回调函数。若不填，则取消当前应用组合键选项已订阅的所有回调函数。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offKey(keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void;

  /**
   * 取消订阅系统快捷键。使用callback异步回调。
   *
   * @param { KeyOptions } keyOptions - 组合键选项，需与订阅时传入的keyOptions一致。
   * @param { KeyCommandCallback } [callback] - 需要取消订阅的回调函数。若不填，则取消当前应用组合键选项已订阅的所有回调函数。
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offKey(keyOptions: KeyOptions, callback?: KeyCommandCallback): void;

  /**
   * 设置系统快捷键屏蔽类型。
   *
   * @permission ohos.permission.INPUT_CONTROL_DISPATCHING
   * @param { ShieldMode } shieldMode - 系统快捷键屏蔽类型，目前仅支持取值为'FACTORY_MODE'，表示屏蔽所有系统快捷键。
   * @param { boolean } isShield - 屏蔽类型生效状态，true代表屏蔽类型生效，false代表不生效。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use.
   * @since 11 dynamic
   * @since 23 static
   */
  function setShieldStatus(shieldMode: ShieldMode, isShield: boolean): void;

  /**
   * 获取系统快捷键屏蔽类型。
   *
   * @permission ohos.permission.INPUT_CONTROL_DISPATCHING
   * @param { ShieldMode } shieldMode - 系统快捷键屏蔽类型，目前仅支持取值为'FACTORY_MODE'，表示屏蔽所有系统快捷键。
   * @returns { boolean } 屏蔽类型生效状态，true代表屏蔽类型生效，false代表不生效。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - SystemAPI permission error.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getShieldStatus(shieldMode: ShieldMode): boolean;

  /**
   * 获取所有系统快捷键，使用Promise异步回调。
   *
   * @returns { Promise<Array<HotkeyOptions>> } Promise对象，返回所有系统快捷键的列表。
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14 dynamic
   * @since 23 static
   */
  function getAllSystemHotkeys(): Promise<Array<HotkeyOptions>>;

  /**
   * 订阅应用快捷键。获取满足条件的组合按键输入事件，使用callback异步回调。
   *
   * @param { 'hotkeyChange' } type - 事件类型，固定取值为'hotkeyChange'。
   * @param { HotkeyOptions } hotkeyOptions - 快捷键选项。
   * @param { Callback<HotkeyOptions> } callback - 回调函数，返回满足条件的组合按键输入事件。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 4200002 - The hotkey has been used by the system.
   * @throws { BusinessError } 4200003 - The hotkey has been subscribed to by another.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14 dynamic
   */
  function on(type: 'hotkeyChange', hotkeyOptions: HotkeyOptions, callback: Callback<HotkeyOptions>): void;

  /**
   * 订阅应用快捷键。获取满足条件的组合按键输入事件，使用Callback异步回调。
   *
   * @param { HotkeyOptions } hotkeyOptions - 快捷键选项。
   * @param { Callback<HotkeyOptions> } callback - 回调函数，获取满足条件的组合按键输入事件。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 4200002 - The hotkey has been used by the system.
   * @throws { BusinessError } 4200003 - The hotkey has been subscribed to by another.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 23 static
   */
  function onHotkeyChange(hotkeyOptions: HotkeyOptions, callback: Callback<HotkeyOptions>): void;

  /**
   * 取消订阅应用快捷键。使用callback异步回调。
   *
   * @param { 'hotkeyChange' } type - 事件类型，固定取值为'hotkeyChange'。
   * @param { HotkeyOptions } hotkeyOptions - 快捷键选项。
   * @param { Callback<HotkeyOptions> } callback - 需要取消订阅的回调函数。若缺省，则取消当前应用快捷键选项已订阅的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14 dynamic
   */
  function off(type: 'hotkeyChange', hotkeyOptions: HotkeyOptions, callback?: Callback<HotkeyOptions>): void;

  /**
   * 取消订阅应用快捷键。使用callback异步回调。
   *
   * @param { HotkeyOptions } hotkeyOptions - 快捷键选项。
   * @param { Callback<HotkeyOptions> } [callback] - 需要取消订阅的回调函数。若缺省，则取消当前应用快捷键选项已订阅的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 23 static
   */
  function offHotkeyChange(hotkeyOptions: HotkeyOptions, callback?: Callback<HotkeyOptions>): void;

  /**
   * 订阅按键按下事件。若当前应用窗口为前台焦点窗口，用户按下指定按键，会触发回调。使用callback异步回调。
   * 
   * 订阅成功后，该按键事件的系统默认行为将被屏蔽，即不会再触发系统级的响应，如音量调节。要恢复系统响应，请使用
   * [off]{@link inputConsumer.off(type: 'keyPressed', callback?: Callback<KeyEvent>)}方法取消订阅。
   *
   * @param { 'keyPressed' } type - 事件类型，固定取值为'keyPressed'。
   * @param { KeyPressedConfig } options - 按键事件消费设置。
   * @param { Callback<KeyEvent> } callback - 回调函数，返回按键事件。订阅不同的按键事件需要使用不同的callback，否则订阅不生效。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 16 dynamic
   */
  function on(type: 'keyPressed', options: KeyPressedConfig, callback: Callback<KeyEvent>): void;

  /**
   * 订阅按键按下事件，使用callback异步回调。若当前应用窗口为前台焦点窗口，用户按下指定按键，会触发回调。
   * 订阅成功后，该按键事件的系统默认行为将被屏蔽，即不会再触发系统级的响应，如音量调节。要恢复系统响应，请使用off方法取消订阅。
   *
   * @param { KeyPressedConfig } options - Key consumption settings.
   * @param { Callback<KeyEvent> } callback - Callback used to return key events.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 23 static
   */
  function onKeyPressed(options: KeyPressedConfig, callback: Callback<KeyEvent>): void;

  /**
   * 取消对'keyPressed'事件的订阅，使用callback异步回调。调用该方法后，被屏蔽的系统按键默认行为将恢复，即系统对音量调节等默认响应将恢复。
   *
   * @param { 'keyPressed' } type - 事件类型，固定取值为'keyPressed'。
   * @param { Callback<KeyEvent> } callback - 需要取消订阅的回调函数。若缺省，则取消当前已订阅的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 16 dynamic
   */
  function off(type: 'keyPressed', callback?: Callback<KeyEvent>): void;

  /**
   * 取消对'keyPressed'事件的订阅，使用callback异步回调。调用该方法后，被屏蔽的系统按键默认行为将恢复，即系统对音量调节等默认响应将恢复。
   *
   * @param { Callback<KeyEvent> } [callback] - 需要取消订阅的回调函数。若缺省，则取消当前已订阅的所有回调函数。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 23 static
   */
  function offKeyPressed(callback?: Callback<KeyEvent>): void;
}

export default inputConsumer;