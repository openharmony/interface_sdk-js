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
 * @file Global Hotkeys
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
 * > - Global hotkeys are combination keys defined by the system or application. System hotkeys are defined
 * > by the system, and application hotkeys are defined by applications.
 *
 * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
 * @since 14 dynamic
 * @since 23 static
 */
declare namespace inputConsumer {

  /**
   * Enumerates the key command trigger types, which are used to specify the trigger timing of key combinations.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum KeyCommandTriggerType {

    /**
     * Triggered on the first press. The callback is triggered when the final key is pressed for the first time, and
     * is not triggered on automatic repeated presses.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PRESSED = 1,

    /**
     * Triggered on repeated press. The callback is triggered each time the final key is pressed, including automatic
     * repeated presses.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    REPEAT_PRESSED = 2,

    /**
     * The callback is triggered both when a key is pressed and when it is released, including automatically repeated
     * key presses.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALL_RELEASED = 3
  }

  /**
   * Represents key combination options.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 8 dynamic
   * @since 23 static
   */
  interface KeyOptions {

    /**
     * Set of preKeys, with the number ranging from 0 to 4. The order of preKeys is not required.
     *
     * For example, in the key combination Ctrl+Alt+A, Ctrl+Alt are the preKeys.
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
     * For example, in the combination keys **Ctrl+Alt+A**, **A** is the final key.
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
     * Duration for which the final key is held down, in microseconds (μs).
     *
     * When finalKeyDownDuration is 0, the callback function is triggered immediately.
     *
     * When finalKeyDownDuration is greater than 0 and isFinalKeyDown is true, the callback function is triggered after
     * the final key is held down for longer than the set duration; when isFinalKeyDown is false, the callback function
     * is triggered when the time from pressing to releasing the final key is shorter than the set duration.
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
     * Trigger mode. The value can be PRESSED (1), REPEAT_PRESSED (2), or ALL_RELEASED (3). The command trigger mode
     * is enabled. Once this value is set, isFinalKeyDown and isRepeat are ignored. This parameter is optional for the
     * [inputConsumer.on('key')]{@link inputConsumer.on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>)}
     * API and mandatory for the
     * [inputConsumer.onKey]{@link inputConsumer.onKey(keyOptions: KeyOptions, callback:KeyCommandCallback)} API.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi Hide this for inner system use.
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    triggerType?: KeyCommandTriggerType;
  }

  /**
   * Defines hotkey options.
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
     * For example, in **Ctrl+Shift+Esc**, **Esc** is the modified key.
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
     * [KEYCODE_FINGERPRINT_SLIDE_UP]{@link @ohos.multimodalInput.keyCode:KeyCode} key and
     * [KEYCODE_FINGERPRINT_SLIDE_DOWN]{@link @ohos.multimodalInput.keyCode:KeyCode} key are newly supported. These
     * are not universal key values across devices. Before using them, check whether the current device supports
     * reporting the related key events. For details, see
     * [Development Guide for Prioritized Response to System Function Keys](docroot://device/input/keypressed-guidelines.md).
     *
     * Since API version 21, the [KEYCODE_MEDIA_PLAY_PAUSE]{@link @ohos.multimodalInput.keyCode:KeyCode} key,
     * [KEYCODE_MEDIA_NEXT]{@link @ohos.multimodalInput.keyCode:KeyCode} key, and
     * [KEYCODE_MEDIA_PREVIOUS]{@link @ohos.multimodalInput.keyCode:KeyCode} key are newly supported.
     *
     * For API version 20 and earlier, only the [KEYCODE_VOLUME_UP]{@link @ohos.multimodalInput.keyCode:KeyCode} key
     * and [KEYCODE_VOLUME_DOWN]{@link @ohos.multimodalInput.keyCode:KeyCode} key are supported.
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
   * Enumerates system hotkey shield modes.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 11 dynamic
   * @since 23 static
   */
  enum ShieldMode {

    /**
     * Factory mode, which means to shield all system hotkeys.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
     * @systemapi hide for inner use
     * @since 11 dynamic
     * @since 23 static
     */
    FACTORY_MODE = 0
  }

  /**
   * Defines the key command callback function type, which is triggered when the hotkey registration conditions are
   * met.
   *
   * @param { KeyOptions } keyOptions - Key combination options when the callback is triggered.
   * @param { KeyEvent } keyEvent - Key event object, which contains detailed key information.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type KeyCommandCallback = (keyOptions: KeyOptions, keyEvent: KeyEvent) => void;

  /**
   * Subscribes to system hotkeys. This API uses an asynchronous callback to return the result.
   *
   * > **NOTE**
   * >
   * > - Only the key down event, or both the key down and key up events, can be subscribed to.
   * >
   * > - If only the key up event needs to be subscribed to, there is a risk that the down event is consumed by the
   * > focused window, leaving the up event unpaired. The design and implementation should be reviewed to determine
   * > whether this is reasonable.
   *
   * @param { 'key' } type - Event type. Currently, only **key** is supported.
   * @param { KeyOptions } keyOptions - Key combination options. Since API version 26.0.0, the parameter
   *     [KeyCommandTriggerType]{@link inputConsumer.KeyCommandTriggerType} is added to keyOptions. However, this API
   *     can ignore it.
   * @param { Callback<KeyOptions> } callback - Callback invoked to return the key combination data.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   *     [since 12]
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
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 23 static
   */
  function onKey(keyOptions: KeyOptions, callback: Callback<KeyOptions>): void;

  /**
   * Subscribes to key combinations (key command mode). You can specify different trigger modes through triggerType.
   * When a key combination input event that meets the conditions occurs, this API uses an asynchronous callback to
   * return the result.
   *
   * Differences from the existing API
   * [inputConsumer.on('key')]{@link inputConsumer.on(type: 'key', keyOptions: KeyOptions, callback: Callback<KeyOptions>)}:
   * - The keyOptions of this API supports the triggerType parameter, which allows selecting modes such as triggering
   * on key down, triggering on key repeat, or triggering on key repeat and key up.
   * - The callback parameter of this API is of the KeyCommandCallback type, which receives both the KeyOptions and
   * KeyEvent objects.
   * - This API uses an event consumption mechanism, which can prevent key events from being passed backward through
   * event consumption.
   *
   * @param { KeyOptions } keyOptions - Key combination options, which support the triggerType parameter.
   * @param { KeyCommandCallback } callback - Callback function, which returns the key combination options and key
   *     event data.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onKey(keyOptions: KeyOptions, callback:KeyCommandCallback): void;

  /**
   * Unsubscribes from system hotkeys. This API uses an asynchronous callback to return the result.
   *
   * @param { 'key' } type - Event type. Currently, only **key** is supported.
   * @param { KeyOptions } keyOptions - Key combination options. Since API version 26.0.0, a new parameter
   *     [KeyCommandTriggerType]{@link inputConsumer.KeyCommandTriggerType} is added to keyOptions, and this API does
   *     not need to consider this parameter.
   * @param { Callback<KeyOptions> } [callback] - Callback to unregister. If this parameter is not specified, listening
   *     will be disabled for all callbacks registered by the current application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   *     [since 12]
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
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use
   * @since 23 static
   */
  function offKey(keyOptions: KeyOptions, callback?: Callback<KeyOptions>): void;

  /**
   * Unsubscribes from system hotkeys. This API uses an asynchronous callback to return the result.
   *
   * @param { KeyOptions } keyOptions - Key combination options, which must be consistent with the keyOptions passed
   *     in during subscription.
   * @param { KeyCommandCallback } [callback] - Callback function to be unsubscribed from. If this parameter is not
   *     specified, all callback functions subscribed to by the current app for the key combination options are
   *     unsubscribed from.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
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
   * @param { boolean } isShield - Whether to enable hotkey shielding. The value **true** means to enable hotkey
   *     shielding, and the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
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
   * @returns { boolean } Whether to enable hotkey shielding. The value **true** means to enable hotkey shielding, and
   *     the value **false** indicates the opposite.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @systemapi hide for inner use.
   * @since 11 dynamic
   * @since 23 static
   */
  function getShieldStatus(shieldMode: ShieldMode): boolean;

  /**
   * Obtains all system hotkeys. This API uses a promise to return the result.
   *
   * @returns { Promise<Array<HotkeyOptions>> } Promise used to return the list of all system hotkeys.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 14 dynamic
   * @since 23 static
   */
  function getAllSystemHotkeys(): Promise<Array<HotkeyOptions>>;

  /**
   * Subscribes to application hotkey change events. This API obtains combination key input events that meet the
   * specified conditions, and uses an asynchronous callback to return the result.
   *
   * @param { 'hotkeyChange' } type - Event type. This parameter has a fixed value of **hotkeyChange**.
   * @param { HotkeyOptions } hotkeyOptions - Shortcut key options.
   * @param { Callback<HotkeyOptions> } callback - Callback used to return the combination key input events that meet
   *     the conditions.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
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
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
   * @throws { BusinessError } 4200002 - The hotkey has been used by the system.
   * @throws { BusinessError } 4200003 - The hotkey has been subscribed to by another.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 23 static
   */
  function onHotkeyChange(hotkeyOptions: HotkeyOptions, callback: Callback<HotkeyOptions>): void;

  /**
   * Unsubscribes from application hotkey change events. This API uses an asynchronous callback to return the result.
   *
   * @param { 'hotkeyChange' } type - Event type. This parameter has a fixed value of **hotkeyChange**.
   * @param { HotkeyOptions } hotkeyOptions - Shortcut key options.
   * @param { Callback<HotkeyOptions> } [callback] - Callback to unregister. If this parameter is left unspecified,
   *     listening will be disabled for all callbacks registered for the specified hotkey options.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
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
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
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
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
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
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
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
   * @param { Callback<KeyEvent> } [callback] - Callback to unregister. If this parameter is not specified, listening will
   *     be disabled for all registered callbacks.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
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
   * @throws { BusinessError } 801 - Capability not supported. Possible causes: 1. The hardware does not support the
   *     capability; 2. The chip does not support the capability; 3. A dependent service feature is not supported.
   * @syscap SystemCapability.MultimodalInput.Input.InputConsumer
   * @since 23 static
   */
  function offKeyPressed(callback?: Callback<KeyEvent>): void;
}

export default inputConsumer;