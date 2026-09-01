/*
 * Copyright (c) 2022-2025 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file System Accessibility Configuration
 * @kit AccessibilityKit
 */

import type accessibility from './@ohos.accessibility';
import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * The **accessibility.config** module provides APIs for configuring system accessibility features, including 
 * accessibility extension, high-contrast text, mouse buttons, and captions.
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace config {
  /**
   * Indicates the color correction feature status. Used together with daltonizationColorFilter. The value **true** 
   * indicates that color correction is enabled, and **false** indicates that it is disabled. The default value is 
   * **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const daltonizationState: Config<boolean>;
  /**
   * Indicates the mono audio feature status. The value **true** indicates that the mono audio feature is enabled, and 
   * **false** indicates that it is disabled. The default value is **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  const audioMono: Config<boolean>;
  /**
   * Indicates the configuration for left and right channel volume balance. **-1.0** indicates output from the left 
   * channel only; **0.0** indicates balanced output from both channels; **1.0** indicates output from the right channel
   * only. Intermediate values represent a linear ratio of the left and right channel volumes. The value ranges from -1.
   * 0 to 1.0. The default value is **0.0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  const audioBalance: Config<double>;
  /**
   * Whether to enable high-contrast text. The value **true** indicates that high-contrast text is enabled, and 
   * **false** indicates the opposite.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let highContrastText: Config<boolean>;
  /**
   * Whether to enable color inversion. The value **true** indicates that color inversion is enabled, and **false** 
   * indicates the opposite.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let invertColor: Config<boolean>;
  /**
   * Indicates the color correction filter configuration. Used together with daltonizationState. This configuration 
   * takes effect only when daltonizationState is set to **true**. The default value is Normal, indicating the standard 
   * type.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let daltonizationColorFilter: Config<DaltonizationColorFilter>;
  /**
   * Indicates the content display suggested duration configuration, which is used to set the duration for which 
   * accessibility prompts and other content remain displayed on the screen. The value ranges from 0 to 5000, in 
   * milliseconds. The default value is **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let contentTimeout: Config<int>;
  /**
   * Whether to disable animation. The value **true** indicates that animation is disabled, and **false** indicates the 
   * opposite.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let animationOff: Config<boolean>;
  /**
   * Indicates the brightness discount configuration, which is used to proportionally adjust the screen display 
   * brightness. The value ranges from 0 to 1.0, where **0** indicates no brightness discount (original brightness) and 
   * **1.0** indicates the maximum brightness discount. The default value is **0.0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let brightnessDiscount: Config<double>;
  /**
   * Whether to enable the mouse button. The value **true** indicates that the mouse button is enabled, and **false** 
   * indicates the opposite. 
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let mouseKey: Config<boolean>;
  /**
   * Indicates the configuration for the mouse auto-click operation. The value ranges from 0 to 5000, in milliseconds. 
   * **0** indicates that the feature is disabled, and other values indicate the duration of mouse hovering that 
   * triggers the auto-click operation. The default value is **0**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let mouseAutoClick: Config<int>;
  /**
   * Indicates the accessibility extension shortcut key feature status. Used together with shortkeyTarget. The value 
   * **true** indicates that the accessibility extension shortcut key feature is enabled, and **false** indicates that 
   * it is disabled. The default value is **false**.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let shortkey: Config<boolean>;
  /**
   * Indicates the target configuration of the accessibility extension shortcut key. The value is the name of the 
   * accessibility extension app, in the format 'bundleName/abilityName'. If the format is incorrect or the name is 
   * invalid, the setting does not take effect.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let shortkeyTarget: Config<string>;
  /**
   * Indicates the multi-target list configuration of the accessibility extension shortcut key. The value is the name of
   * the accessibility extension app, in the format ['bundleName/abilityName']. If the format is incorrect or the name 
   * is invalid, the setting does not take effect.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const shortkeyMultiTargets: Config<Array<string>>;
  /**
   * Whether to enable captions. The value **true** indicates that caption is enabled, and **false** indicates the 
   * opposite.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let captions: Config<boolean>;
  /**
   * Indicates the configuration of the caption style.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let captionsStyle: Config<accessibility.CaptionsStyle>;
  /**
   * Length of time required for a click.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const clickResponseTime: Config<ClickResponseTime>;
  /**
   * Whether to ignore repeated clicks. This parameter must be used together with **repeatClickInterval**. The value 
   * **true** indicates that the feature of ignoring repeated clicks is enabled, and **false** indicates the opposite.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const ignoreRepeatClick: Config<boolean>;
  /**
   * Indicates the configuration for the interval of ignoring repeated clicks. Used together with ignoreRepeatClick. 
   * This configuration takes effect only when ignoreRepeatClick is set to **true**. The default value is Shortest, 
   * indicating the shortest interval.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const repeatClickInterval: Config<RepeatClickInterval>;
  /**
   * Indicates the configuration of screen magnification.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  const screenMagnification: Config<boolean>;

  /**
   * Enables an accessibility extension. This API must be used together with 
   * [config.disableAbility]{@link config.disableAbility}. This API uses a promise to return the result.
   * 
   * Compared with [config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}, this API only enables the
   * accessibility extension without listening for connection state changes. To listen for disconnection events of the 
   * accessibility extension, use [config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - Name of the accessibility extension app, in the format of 'bundleName/abilityName'.
   * @param { Array<accessibility.Capability> } capability - Capability attributes of the accessibility extension app.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300001 - Invalid bundle name or ability name.
   * @throws { BusinessError } 9300002 - Target ability already enabled.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableAbility(name: string, capability: Array<accessibility.Capability>): Promise<void>;

  /**
   * Enables an accessibility extension. This API must be used together with 
   * [config.disableAbility]{@link config.disableAbility}. This API uses an asynchronous callback to return the result.
   * 
   * Compared with [config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}, this API only enables the
   * accessibility extension without listening for connection state changes. To listen for disconnection events of the 
   * accessibility extension, use [config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - Name of the accessibility extension app, in the format of 'bundleName/abilityName'.
   * @param { Array<accessibility.Capability> } capability - Capability attribute of the accessibility extension app.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the accessibility extension is
   *     enabled successfully, **err** is undefined; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300001 - Invalid bundle name or ability name.
   * @throws { BusinessError } 9300002 - Target ability already enabled.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function enableAbility(
    name: string,
    capability: Array<accessibility.Capability>,
    callback: AsyncCallback<void>
  ): void;

  /**
   * Enables an accessibility extension and specifies [ConnectCallback]{@link config.ConnectCallback} as the callback 
   * for disconnection events of the accessibility extension. This API uses a promise to return the result.
   * 
   * When the accessibility extension process is abnormally disconnected, the onDisconnect callback of ConnectCallback 
   * will be triggered. This API must be used together with [config.disableAbility]{@link config.disableAbility}.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - Name of the accessibility extension ability, in the format of 'bundleName/abilityName'.
   * @param { Array<accessibility.Capability> } capability - Capabilities of the auxiliary extension ability.
   * @param { ConnectCallback } connectCallback - Callback invoked when an accessibility extension app is disconnected,
   *     used to listen for disconnection events of the accessibility extension.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 9300001 - Invalid bundle name or ability name.
   * @throws { BusinessError } 9300002 - Target ability already enabled.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function enableAbilityWithCallback(
    name: string,
    capability: Array<accessibility.Capability>,
    connectCallback: ConnectCallback
  ): Promise<void>;

  /**
   * Disables an accessibility extension. This API must be used together with 
   * [config.enableAbility]{@link config.enableAbility} or 
   * [config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}. This API uses a promise to return the 
   * result.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - Name of the accessibility extension application, in the format 'bundleName/abilityName'.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300001 - Invalid bundle name or ability name.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function disableAbility(name: string): Promise<void>;

  /**
   * Disables an accessibility extension. This API must be used together with 
   * [config.enableAbility]{@link config.enableAbility} or 
   * [config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}. This API uses an asynchronous callback 
   * to return the result.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - Name of the accessibility extension app, in the format of 'bundleName/abilityName'.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the accessibility extension is
   *     disabled successfully, **err** is **undefined**; otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @throws { BusinessError } 9300001 - Invalid bundle name or ability name.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function disableAbility(name: string, callback: AsyncCallback<void>): void;

  /**
   * Adds a listener for changes in the list of enabled accessibility extensions. This API uses an asynchronous callback
   * to return the result.
   * 
   * This API must be used together with 
   * [config.off('enabledAccessibilityExtensionListChange')]{@link config.off(type: 'enabledAccessibilityExtensionListChange', callback?: Callback<void>)}.
   * Call off to unregister the listener when it is no longer needed to avoid resource leaks.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'enabledAccessibilityExtensionListChange' } type - The parameter is fixed to '
   *     enabledAccessibilityExtensionListChange', which specifies the event type for listening to the list change of
   *     enabled accessibility extensions.
   * @param { Callback<void> } callback - Callback invoked when the list of enabled accessibility extension abilities
   *     changes.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   */
  function on(type: 'enabledAccessibilityExtensionListChange', callback: Callback<void>): void;

  /**
   * Register the listener that watches for changes in the enabled status of accessibility extensions.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<void> } callback Indicates the listener.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  function onEnabledAccessibilityExtensionListChange(callback: Callback<void>): void;

  /**
   * Adds a listener for changes in the list of installed accessibility extensions. This API uses an asynchronous 
   * callback to return the result.
   * 
   * This API must be used together with 
   * [config.off('installedAccessibilityListChange')]{@link config.off(type: 'installedAccessibilityListChange', callback?: Callback<void>)}.
   * Call off to unregister the listener when it is no longer needed to avoid resource leaks.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'installedAccessibilityListChange' } type - Listening type. The value is fixed at
   *     **'installedAccessibilityListChange'**, indicating listening for changes in the list of installed accessibility
   *     extension abilities.
   * @param { Callback<void> } callback - Callback invoked when the list of installed accessibility extension abilities
   *     changes.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   */
  function on(type: 'installedAccessibilityListChange', callback: Callback<void>): void;

  /**
   * Register the listener that watches for changes in the installed status of accessibility extensions.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<void> } callback Indicates the listener.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  function onInstalledAccessibilityListChange(callback: Callback<void>): void;

  /**
   * Cancels the listener for changes in the list of enabled accessibility extensions. This API uses an asynchronous 
   * callback to return the result.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'enabledAccessibilityExtensionListChange' } type - The parameter is fixed to '
   *     enabledAccessibilityExtensionListChange', specifying that the event type to unsubscribe from is the change of
   *     the enabled accessibility extension list.
   * @param { Callback<void> } callback - Callback function used to cancel the event response of the specified callback
   *     object. The value must be the same as the value of **callback** in
   *     **on('enabledAccessibilityExtensionListChange')**. If this parameter is not specified, all registered events
   *     will be unregistered.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   */
  function off(type: 'enabledAccessibilityExtensionListChange', callback?: Callback<void>): void;

  /**
   * Unregister listener that watches for changes in the enabled status of accessibility extensions.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<void> } [callback] Indicates the listener.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  function offEnabledAccessibilityExtensionListChange(callback?: Callback<void>): void;

  /**
   * Cancels the listener for changes in the list of installed accessibility extensions. This API uses an asynchronous 
   * callback to return the result.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'installedAccessibilityListChange' } type - The value is fixed at 'installedAccessibilityListChange',
   *     which specifies that the event type to unsubscribe from is changes in the list of installed accessibility
   *     extensions.
   * @param { Callback<void> } callback - Callback function used to cancel the event response of the specified callback
   *     object. The value must be the same as the value of **callback** in **on('installedAccessibilityListChange')**.
   *     If this parameter is not specified, all registered events will be unregistered.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types;
   *     3. Parameter verification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   */
  function off(type: 'installedAccessibilityListChange', callback?: Callback<void>): void;

  /**
   * Unregister listener that watches for changes in the installed status of accessibility extensions.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<void> } [callback] Indicates the listener.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  function offInstalledAccessibilityListChange(callback?: Callback<void>): void;

  /**
   * Sets the enabled state of the magnification effect. The magnification effect depends on the magnification gesture 
   * feature. This API takes effect only when the magnification gesture feature is enabled.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { boolean } state - Indicates the enabled state of the magnification effect.
   *     <br>- **true**: indicates that the magnification effect is enabled.
   *     <br>- **false**: indicates that the magnification effect is disabled.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 801 - Capability not supported. Failed to call the API due to limited device
   *     capabilities.
   * @throws { BusinessError } 9300007 - Trigger magnification failed.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function setMagnificationState(state: boolean): void;

  /**
   * Sets the senior mode state for an app. This API uses a promise to return the result.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { Array<AppSeniorModeInfo> } appSeniorModeInfos - Senior mode state information of the app to modify. Each
   *     object in the array contains three properties: bundleName, appIndex, and seniorModeState.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed.
   *     <br>A non-system application calls a system API.
   * @throws { BusinessError } 9300000 - System abnormality.
   * @throws { BusinessError } 9300008 - The appIndex is invalid. Possible causes:
   *     <br>1.The appIndex is out of the valid range.
   *     <br>2.The application corresponding to the appIndex does not exist.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setSeniorModeStateForApp(appSeniorModeInfos: Array<AppSeniorModeInfo>): Promise<void>;

  /**
   * Queries the senior mode state of an app. This API uses a promise to return the result.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { string } bundleName - Bundle name of the app whose senior mode state is to be queried.
   * @param { int } [appIndex] - Clone index of the app bundle.
   *     <br>Value range: an integer greater than or equal to 0. If not specified, the default value is **0**.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the senior mode
   *     is enabled for the app, and **false** indicates that the senior mode is not enabled for the app.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed.
   *     <br>A non-system application calls a system API.
   * @throws { BusinessError } 9300000 - System abnormality.
   * @throws { BusinessError } 9300008 - The appIndex is invalid. Possible causes:
   *     <br>1.The appIndex is out of the valid range.
   *     <br>2.The application corresponding to the appIndex does not exist.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSeniorModeStateForApp(bundleName: string, appIndex?: int): Promise<boolean>;

  /**
   * Listens for senior mode state change events of all apps. This API uses an asynchronous callback to return the 
   * result.
   * 
   * > **NOTE**
   * >
   * > - The callback parameter for registration should use a named function instead of an anonymous function, otherwise
   * > a new underlying object will be created each time it is called, causing memory leaks.
   * >
   * > - After calling this method, be sure to use 
   * > [config.offSeniorModeStateChangeForApp]{@link config.offSeniorModeStateChangeForApp(callback?: Callback<AppSeniorModeInfo>)}
   * > to cancel the listener before the component instance is destroyed (for example, in the aboutToDisappear lifecycle
   * > ), otherwise crashes may occur.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<AppSeniorModeInfo> } callback - Callback invoked to return the modified senior mode information
   *     of the app.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed.
   *     <br>A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onSeniorModeStateChangeForApp(callback: Callback<AppSeniorModeInfo>): void;

  /**
   * Cancels the listener for senior mode state change events of all apps. This API uses an asynchronous callback to 
   * return the result.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<AppSeniorModeInfo> } [callback] - Callback function used to cancel the event response of the
   *     specified callback object. The value must be the same as the value of **callback** in
   *     [config.onSeniorModeStateChangeForApp]{@link config.onSeniorModeStateChangeForApp(callback: Callback<AppSeniorModeInfo>)}.
   *     If this parameter is not specified, all registered events will be unregistered.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed.
   *     <br>A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offSeniorModeStateChangeForApp(callback?: Callback<AppSeniorModeInfo>): void;

  /**
   * Enables the flash or screen for blinking reminders.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { BlinkingMode } mode - Blinking mode, indicating screen blinking or flash blinking.
   * @param { BlinkingScenario } scenario - Scenario that triggers blinking.
   * @returns { BlinkResultCode } Result code returned by the API call.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed.
   *     <br>A non-system application calls a system API.
   * @throws { BusinessError } 9300000 - System abnormality.Possible causes:
   *     <br>1.Internal operation failed.
   *     <br>2.Failed to obtain the required service or client object (null pointer).
   *     <br>3.IPC communication failed.
   *     <br>4.Failed to obtain the accessibility service proxy.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function startBlinking(mode: BlinkingMode, scenario: BlinkingScenario): BlinkResultCode;

  /**
   * Stops flash blinking or screen blinking.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { BlinkingMode } mode - Blinking mode, indicating screen blinking or flash blinking.
   * @param { BlinkingScenario } scenario - Scenario that triggers blinking.
   * @returns { BlinkResultCode } Result code returned by the API call.
   * @throws { BusinessError } 201 - Permission verification failed.
   *     <br>The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed.
   *     <br>A non-system application calls a system API.
   * @throws { BusinessError } 9300000 - System abnormality.Possible causes:
   *     <br>1.Internal operation failed.
   *     <br>2.Failed to obtain the required service or client object (null pointer).
   *     <br>3.IPC communication failed.
   *     <br>4.Failed to obtain the accessibility service proxy.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function stopBlinking(mode: BlinkingMode, scenario: BlinkingScenario): BlinkResultCode;

  /**
   * Implements configuration, acquisition, and listening for properties.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface Config<T> {
    /**
     * Sets the value of a property. This API uses a promise to return the result.
     *
     * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
     * @param { T } value - Attribute value to set. The value type is consistent with the type of the corresponding
     *     Config attribute.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    set(value: T): Promise<void>;

    /**
     * Sets the property value. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
     * @param { T } value - Attribute value to set. The value type is the same as that of the corresponding Config
     *     attribute.
     * @param { AsyncCallback<void> } callback - Callback used to return the result. If the operation is successful,
     *     **err** is **undefined**; otherwise, **err** is an error object.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    set(value: T, callback: AsyncCallback<void>): void;

    /**
     * Obtains the value of a property. This API uses a promise to return the result.
     *
     * @returns { Promise<T> } Promise used to return the value obtained.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    get(): Promise<T>;

    /**
     * Obtains the property value. This API uses an asynchronous callback to return the result.
     *
     * @param { AsyncCallback<T> } callback - Callback used to return the result. If the attribute is obtained
     *     successfully, **err** is **undefined** and **data** is the attribute value; otherwise, **err** is an error
     *     object.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    get(callback: AsyncCallback<T>): void;

    /**
     * Adds a listener for property changes. This API uses an asynchronous callback to return the result.
     * 
     * This API must be used together with [off]{@link config.Config.off}. Call off to unregister the listener when it 
     * is no longer needed to avoid resource leaks.
     *
     * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
     * @param { Callback<T> } callback - Callback invoked when the property changes.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @throws { BusinessError } 401 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified;
     *     2. Incorrect parameter types;
     *     3. Parameter verification failed.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    on(callback: Callback<T>): void;

    /**
     * Cancels the listener for property changes. This API uses an asynchronous callback to return the result.
     *
     * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
     * @param { Callback<T> } callback - Callback used to unregister. The value must be the same as the value of
     *     **callback** in **on()**. If this parameter is not specified, listening will be disabled for all callbacks
     *     corresponding to the specified type.
     * @throws { BusinessError } 201 - Permission verification failed.
     *     The application does not have the permission required to call the API.
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    off(callback?: Callback<T>): void;
  }

  /**
   * Callback provided when enabling an accessibility extension app through the 
   * [config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback} API. The callback is invoked when the 
   * connection to the accessibility extension app is disconnected.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface ConnectCallback {
    /**
     * Callback invoked when the connection to the accessibility extension app is disconnected.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDisconnect: OnDisconnectCallback;
  }  

  /**
   * Senior mode state information of an app.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AppSeniorModeInfo {
    /**
     * Bundle name of the app, used to identify the app, in the format of **'com.example.myapplication'**.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    bundleName: string;
    /**
     * Clone index of the app bundle. The value is an integer greater than or equal to 0. If not specified, the default 
     * value is **0**.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appIndex?: int;
    /**
     * Senior mode enabled state of the app. The value **true** indicates enabled, and **false** indicates disabled.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    seniorModeState: boolean;
  }

  /**
   * Describes the callback to be invoked when the connection to **AccessibilityExtensionAbility** is disconnected.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type OnDisconnectCallback = () => void;

  /**
   * Color correction filters for different types of color vision deficiency.
   * 
   * The configuration takes effect when the daltonization feature is enabled (
   * [daltonizationState]{@link config.daltonizationState} is set to **true**). When the daltonization feature is 
   * disabled ([daltonizationState]{@link config.daltonizationState} is set to **false**), the standard type is 
   * displayed.
   *
   * @unionmember { 'Normal' } Standard color vision.
   * @unionmember { 'Protanomaly' } Red-weak color vision deficiency.
   * @unionmember { 'Deuteranomaly' } Green-weak color vision deficiency.
   * @unionmember { 'Tritanomaly' } Blue-weak color vision deficiency.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  type DaltonizationColorFilter = 'Normal' | 'Protanomaly' | 'Deuteranomaly' | 'Tritanomaly';

  /**
   * Click duration of different lengths.
   *
   * @unionmember { 'Short' } Indicates short (default).
   * @unionmember { 'Medium' } Medium.
   * @unionmember { 'Long' } Long.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  type ClickResponseTime = 'Short' | 'Medium' | 'Long';

  /**
   * Ignore repeated clicks at different time intervals.
   * 
   * The configuration takes effect when the ignore repeated click feature is enabled (
   * [ignoreRepeatClick]{@link config.ignoreRepeatClick} is set to **true**). When the ignore repeated click feature is 
   * disabled ([ignoreRepeatClick]{@link config.ignoreRepeatClick} is set to **false**), the configuration does not take
   * effect.
   *
   * @unionmember { 'Shortest' } Shortest.
   * @unionmember { 'Short' } Short.
   * @unionmember { 'Medium' } Medium.
   * @unionmember { 'Long' } Long.
   * @unionmember { 'Longest' } Longest.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  type RepeatClickInterval = 'Shortest' | 'Short' | 'Medium' | 'Long' | 'Longest';

  /**
   * Enumerates the blinking modes.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum BlinkingMode {  
    /**
     * Single blink.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SINGLE_BLINK = 1,
    /**
     * Continuous blink.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONTINUOUS_BLINK = 2
  }

  /**
   * Enumerates the blinking scenarios.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum BlinkingScenario {
    /**
     * Blinking triggered by an alarm.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALARM = 1,
    /**
     * Blinking triggered by a notification.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NOTIFICATION = 2,
    /**
     * Blinking triggered by an incoming call.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CALL = 3,
    /**
     * Blinking triggered by a test scenario.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TESTING = 4
  }

  /**
   * Enumerates the result codes of blinking operations.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum BlinkResultCode {
    /**
     * The blinking API is executed successfully.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SUCCESS = 0,
    /**
     * The device is already blinking.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALREADY_FLASHING = 1,
    /**
     * The device is in use.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DEVICE_IN_USE = 2,
    /**
     * The device does not support flash blinking.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FLASH_BLINKING_UNSUPPORTED = 3,
    /**
     * The device does not support screen blinking.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCREEN_BLINKING_UNSUPPORTED = 4,
    /**
     * The blinking feature is not enabled.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FEATURE_DISABLED = 5
  }
}
export default config;