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
 * The **inputConsumer** module implements listening for combination key events as well as listening and interception
 * for volume key events.
 *
 * > **NOTE**
 * >
 * > - Global shortcut keys are combination keys defined by the system or application. System shortcut keys are defined
 * > by the system, and application shortcut keys are defined by applications.
 *
 * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
 * @since 14 dynamic
 * @since 23 static
 */
declare namespace inputConsumer {

  /**
   * KeyCommandTriggerType
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum KeyCommandTriggerType {

    /**
     * Triggered when pressed.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PRESSED = 1,

    /**
     * Triggered when pressed repeatedly.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    REPEAT_PRESSED = 2,

    /**
     * Continuous triggering, from pressing until all keys are released.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALL_RELEASED = 3
  }

  /**
   * Represents combination key options.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyOptions {

    /**
     * Preceding key set. The number of preceding keys ranges from 0 to 4. There is no requirement on the sequence of
     * the keys.
     *
     * For example, in the combination keys **Ctrl+Alt+A**, **Ctrl+Alt** are called preceding keys.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    preKeys: Array<int>;

    /**
     * Final key. This parameter is mandatory. A callback is triggered by the final key.
     *
     * For example, in the combination keys **Ctrl+Alt+A**, **A** is called the final key.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    finalKey: int;

    /**
     * Whether the final key is pressed.
     *
     * The value **true** indicates that the key is pressed, and the value **false** indicates the opposite.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    isFinalKeyDown: boolean;

    /**
     * Duration for holding down the key, in μs.
     *
     * If the value of this field is **0**, a callback is triggered immediately.
     *
     * If the value of this field is greater than **0** and **isFinalKeyDown** is **true**, a callback is triggered when
     * the key keeps being pressed after the specified duration expires. If **isFinalKeyDown** is **false**, a callback
     * is triggered when the key is released before the specified duration expires.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 8 dynamic
     * @since 23 static
     */
    finalKeyDownDuration: int;

    /**
     * Whether to report repeated key events. The value **true** means to report repeated key events, and the value
     * **false** means the opposite. The default value is **true**.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 18 dynamic
     * @since 23 static
     */
    isRepeat?: boolean;

    /**
     * Trigger type, which indicates that the conditions for triggering the callback expected by the
     * shortcut key are met. Once this value is set, isFinalKeyDown and isRepeat will be ignored. This property
     * is only for use in APIs that take KeyCommandCallback as the callback function and must be specified.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    triggerType?: KeyCommandTriggerType;
  }

  /**
   * Defines shortcut key options.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14 dynamic
   * @since 23 static
   */
  interface HotkeyOptions {

    /**
     * Modifier key set (including Ctrl, Shift, and Alt). One to four modifier keys are supported. There is no
     * requirement on the sequence of modifier keys.
     *
     * For example, in **Ctrl+Shift+Esc**, **Ctrl** and **Shift** are modifier keys.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 14 dynamic
     * @since 23 static
     */
    preKeys: Array<int>;

    /**
     * Modified key, which can be any key except the modifier keys and Meta key. For details about the keys, see
     * [@ohos.multimodalInput.keyCode (Keycode)]{@link @ohos.multimodalInput.keyCode:KeyCode}.
     *
     * For example, in **Ctrl+Shift+Esc**, **Esc** is the modifier key.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 14 dynamic
     * @since 23 static
     */
    finalKey: int;

    /**
     * Whether to report repeated key events. The value **true** means to report repeated key events, and the value
     * **false** means the opposite. The default value is **true**.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 14 dynamic
     * @since 23 static
     */
    isRepeat?: boolean;
  }

  /**
   * Sets the key event consumption configuration.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 16 dynamic
   * @since 23 static
   */
  interface KeyPressedConfig {

    /**
     * Key value.
     *
     * **Note:** Since API version 26.0.0, the
     * [KEYCODE_FINGERPRINT_SLIDE_UP]{@link @ohos.multimodalInput.keyCode:KeyCode} and
     * [KEYCODE_FINGERPRINT_SLIDE_DOWN]{@link @ohos.multimodalInput.keyCode:KeyCode} keys are supported. The keys are
     * not universal device keys. Before using them, check whether the current device supports the reporting of related
     * key events. For details, see
     * [Preferential Response of System Function Keys](docroot://device/input/keypressed-guidelines.md).
     *
     * Since API version 21, the [KEYCODE_MEDIA_PLAY_PAUSE]{@link @ohos.multimodalInput.keyCode:KeyCode},
     * [KEYCODE_MEDIA_NEXT]{@link @ohos.multimodalInput.keyCode:KeyCode}, and
     * [KEYCODE_MEDIA_PREVIOUS]{@link @ohos.multimodalInput.keyCode:KeyCode} keys are supported.
     *
     * In API version 20 or earlier versions, only the [KEYCODE_VOLUME_UP]{@link @ohos.multimodalInput.keyCode:KeyCode}
     * and [KEYCODE_VOLUME_DOWN]{@link @ohos.multimodalInput.keyCode:KeyCode} keys are supported.
     *
     * @type { int } [since 16 - 24]
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 16 dynamic
     * @since 23 static
     */
    key: int;

    /**
     * Subscription type.
     *
     * **Note**: Since API version 21, the value of this parameter can be **1** or **2**. The value **1** indicates
     * subscription to only key press events, and the value **2** indicates subscription to both key press and release
     * events.
     *
     * In API version 20 or earlier versions, the value of this parameter can only be set to **1**, indicating
     * subscription to only key press events.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 16 dynamic
     * @since 23 static
     */
    action: int;

    /**
     * Whether to report repeated key events. The value **true** means to report repeated key events, and the value
     * **false** means the opposite. The default value is **true**.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @since 16 dynamic
     * @since 23 static
     */
    isRepeat: boolean;
  }

  /**
   * Enumerates shortcut key shield modes.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  enum ShieldMode {

    /**
     * Factory mode, which means to shield all shortcut keys.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 11 dynamic
     * @since 23 static
     */
    FACTORY_MODE = 0
  }

  /**
   * Callback function when the shortcut key registered by the system application meets the conditions.
   *
   * @param { KeyOptions } keyOptions - Options for registering shortcut keys when the system applies.
   * @param { KeyEvent } keyEvent - Key event when a shortcut key is triggered.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type KeyCommandCallback = (keyOptions: KeyOptions, keyEvent: KeyEvent) => void;

  /**
   * Enables listening for system hotkey change events. This API uses an asynchronous callback to return the system
   * hotkey data when a system hotkey event that meets the specified condition occurs.
   *
   * > **NOTE**
   * >
   * > - You can subscribe to only the Down event of a key, or subscribe to both the Down and Up events of a key.
   * >
   * > - If you subscribe to only the Up event of a key, the Down event may be consumed by the focus window, and the Up
   * > event may not be closed. In this case, check whether the design and implementation are proper.
   *
   * @param { 'key' } type - Event type. Currently, only **key** is supported.
   * @param { KeyOptions } keyOptions - Combination key options.
   * @param { Callback<KeyOptions> } callback - Callback used to return the combination key data when a combination key
   *     event that meets the specified condition occurs.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8 dynamic
   */
  function on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>): void;

  /**
   * Subscribe system keys.
   *
   * @param { KeyOptions } keyOptions - the key events about input which is to be subscribed.
   * @param { Callback<KeyOptions> } callback - callback function, receive reported data.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onKey(keyOptions: KeyOptions, callback: Callback<KeyOptions>): void;

  /**
   * Subscribe system keys.
   *
   * @param { KeyOptions } keyOptions - the key events about input which is to be subscribed.
   * @param { KeyCommandCallback } callback - callback function, receive reported data.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onKey(keyOptions: KeyOptions, callback:KeyCommandCallback): void;

  /**
   * Disables listening for system hotkey change events. This API uses an asynchronous callback to return the result.
   *
   * @param { 'key' } type - Event type. Currently, only **key** is supported.
   * @param { KeyOptions } keyOptions - Combination key options.
   * @param { Callback<KeyOptions> } callback - Callback to unregister. If this parameter is not specified, listening
   *     will be disabled for all callbacks registered by the current application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api. [since 12]
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8 dynamic
   */
  function off(type: 'key', keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void;

  /**
   * Subscribe system keys.
   *
   * @param { KeyOptions } keyOptions - the key events about input which is to be subscribed.
   * @param { Callback<KeyOptions> } [callback] - callback function, receive reported data.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offKey(keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void;

  /**
   * Unsubscribe system keys.
   *
   * @param { KeyOptions } keyOptions - the key events about input which is to be subscribed.
   * @param { KeyCommandCallback } [callback] - Callback function that receives reported data.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offKey(keyOptions: KeyOptions, callback?: KeyCommandCallback): void;

  /**
   * Sets the system hotkey shield status.
   *
   * @permission ohos.permission.INPUT_CONTROL_DISPATCHING
   * @param { ShieldMode } shieldMode - System hotkey shield mode. Currently, only **FACTORY_MODE** is supported, which
   *     means to shield all system hotkeys.
   * @param { boolean } isShield - Whether to enable shortcut key shielding. The value **true** means to enable shortcut
   *     key shielding, and the value **false** indicates the opposite.
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
   * Obtains the system hotkey shield status.
   *
   * @permission ohos.permission.INPUT_CONTROL_DISPATCHING
   * @param { ShieldMode } shieldMode - System hotkey shield mode. Currently, only **FACTORY_MODE** is supported, which
   *     means to shield all system hotkeys.
   * @returns { boolean } Whether to enable shortcut key shielding. The value **true** means to enable shortcut key
   *     shielding, and the value **false** indicates the opposite.
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
   * Obtains all system shortcut keys. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<HotkeyOptions>> } Promise used to return the list of all system shortcut keys.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14 dynamic
   * @since 23 static
   */
  function getAllSystemHotkeys(): Promise<Array<HotkeyOptions>>;

  /**
   * Subscribes to application shortcut key change events. This API obtains combination key input events that meet the
   * specified conditions, and uses an asynchronous callback to return the result.
   *
   * @param { 'hotkeyChange' } type - Event type. This parameter has a fixed value of **hotkeyChange**.
   * @param { HotkeyOptions } hotkeyOptions - Shortcut key options.
   * @param { Callback<HotkeyOptions> } callback - Callback used to return the combination key input events that meet
   *     the conditions.
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
   * Listening for hotkey event.
   *
   * @param { HotkeyOptions } hotkeyOptions - Hotkey options.
   * @param { Callback<HotkeyOptions> } callback - Callback used to return hotkey event.
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
   * Unsubscribes from application shortcut key change events. This API uses an asynchronous callback to return the
   * result.
   *
   * @param { 'hotkeyChange' } type - Event type. This parameter has a fixed value of **hotkeyChange**.
   * @param { HotkeyOptions } hotkeyOptions - Shortcut key options.
   * @param { Callback<HotkeyOptions> } callback - Callback to unregister. If this parameter is left unspecified,
   *     listening will be disabled for all callbacks registered for the specified shortcut key options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14 dynamic
   */
  function off(type: 'hotkeyChange', hotkeyOptions: HotkeyOptions, callback?: Callback<HotkeyOptions>): void;

  /**
   * Unsubscribe from hotkey event.
   *
   * @param { HotkeyOptions } hotkeyOptions - Hotkey options.
   * @param { Callback<HotkeyOptions> } [callback] - Callback used to return hotkey event.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 23 static
   */
  function offHotkeyChange(hotkeyOptions: HotkeyOptions, callback?: Callback<HotkeyOptions>): void;

  /**
   * Subscribes to key press events. If the current application is in the foreground focus window, a callback is
   * triggered when the specified key is pressed. This API uses an asynchronous callback to return the result.
   *
   * If the API call is successful, the system's default response to the key event will be intercepted; that is, system-
   * level actions, such as volume adjustment, will no longer be triggered. To restore the system response, call
   * [off]{@link inputConsumer.off(type: 'keyPressed', callback?: Callback<KeyEvent>)} to disable listening for the key
   * event.
   *
   * @param { 'keyPressed' } type - Event type. This parameter has a fixed value of **keyPressed**.
   * @param { KeyPressedConfig } options - Sets the key event consumption configuration.
   * @param { Callback<KeyEvent> } callback - Callback used to return key press events. Ensure that different callbacks
   *     are used for different key events. Otherwise, the subscription does not take effect.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 16 dynamic
   */
  function on(type: 'keyPressed', options: KeyPressedConfig, callback: Callback<KeyEvent>): void;

  /**
   * Subscribes to key press events. This API uses an asynchronous callback to return the result.
   * If the current application is in the foreground focus window, a callback is triggered when the specified key is
   * pressed.
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
   * Unsubscribes from key press events. This API uses an asynchronous callback to return the result. If the API call is
   * successful, the system's default response to the key event will be resumed; that is, system-level actions, such as
   * volume adjustment, will be triggered normally.
   *
   * @param { 'keyPressed' } type - Event type. This parameter has a fixed value of **keyPressed**.
   * @param { Callback<KeyEvent> } callback - Callback to unregister. If this parameter is not specified, listening will
   *     be disabled for all registered callbacks.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 16 dynamic
   */
  function off(type: 'keyPressed', callback?: Callback<KeyEvent>): void;

  /**
   * Cancels consumption of key events.
   *
   * @param { Callback<KeyEvent> } [callback] - Callback used to return hotkey events.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   *     2. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 23 static
   */
  function offKeyPressed(callback?: Callback<KeyEvent>): void;
}

export default inputConsumer;