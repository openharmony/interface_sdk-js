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
 * @file
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
   * Whether to enable daltonization. It must be used with **daltonizationColorFilter**. The value **true** indicates 
   * that daltonization is enabled, and **false** indicates the opposite.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const daltonizationState: Config<boolean>;
  /**
   * Whether to enable mono audio. The value **true** indicates that mono audio is enabled, and **false** indicates the 
   * opposite.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  const audioMono: Config<boolean>;
  /**
   * Audio balance for the left and right audio channels. The value ranges from -1.0 to 1.0.
   * 
   * Default value: **0.0**
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
   * Configuration of the daltonization filter.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let daltonizationColorFilter: Config<DaltonizationColorFilter>;
  /**
   * Recommended duration for content display. The value ranges from 0 to 5000, in milliseconds.
   * 
   * Default value: **0**
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
   * Brightness discount. The value ranges from 0 to 1.0.
   * 
   * Default value: **0.0**
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
   * Configuration of the automatic mouse click operation. The value ranges from 0 to 5000, in milliseconds. The value 
   * **0** indicates that the automatic mouse click is not triggered; other values indicate that the operation is 
   * triggered when the mouse pointer is hovered for a specified period of time.
   * 
   * Default value: **0**
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let mouseAutoClick: Config<int>;
  /**
   * Whether to enable the accessibility extension shortcut key. The value **true** indicates that the auxiliary 
   * extension shortcut key is enabled, and **false** indicates the opposite.
   * 
   * Default value: **false**
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let shortkey: Config<boolean>;
  /**
   * Target application for the accessibility extension shortcut key. The value format is 'bundleName/abilityName'.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let shortkeyTarget: Config<string>;
  /**
   * List of target applications for the accessibility shortcut keys. The value format is ['bundleName/abilityName'].
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
   * Captions style.
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
   * Interval between repeated clicks.
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
   * Enables an accessibility extension ability. This API uses a promise to return the result.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - Name of the accessibility extension ability, in the format of 'bundleName/abilityName'.
   * @param { Array<accessibility.Capability> } capability - Capability of the accessibility extension ability.
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
   * Enables an accessibility extension ability. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - Name of the accessibility extension ability, in the format of 'bundleName/abilityName'.
   * @param { Array<accessibility.Capability> } capability - Capability of the accessibility extension ability.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Enables the auxiliary extension ability and specifies [ConnectCallback]{@link ConnectCallback} to be invoked when
   * the state of an auxiliary extension ability changes. This API uses a promise to return the result.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - Name of the accessibility extension ability, in the format of 'bundleName/abilityName'.
   * @param { Array<accessibility.Capability> } capability - Capabilities of the auxiliary extension ability.
   * @param { ConnectCallback } connectCallback - Callback to be invoked when the state of an auxiliary extension
   *     ability changes.
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
   * Disables an accessibility extension ability. This API uses a promise to return the result.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - Name of the accessibility extension ability, in the format of 'bundleName/abilityName'.
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
   * Disables an accessibility extension ability. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - Name of the accessibility extension ability, in the format of 'bundleName/abilityName'.
   * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
   * Adds a listener for changes in the list of enabled accessibility extension abilities. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'enabledAccessibilityExtensionListChange' } type - Listening type. The value is fixed at
   *     **'enabledAccessibilityExtensionListChange'**, indicating listening for changes in the list of enabled
   *     accessibility extension abilities.
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
   * Adds a listener for changes in the list of installed accessibility extension abilities. This API uses an 
   * asynchronous callback to return the result.
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
   * Cancels a listener for changes in the list of enabled accessibility extension abilities. This API uses an 
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'enabledAccessibilityExtensionListChange' } type - Listening type. The value is fixed at
   *     **'enabledAccessibilityExtensionListChange'**, indicating listening for changes in the list of enabled
   *     accessibility extension abilities.
   * @param { Callback<void> } callback - Callback used to unregister. The value must be the same as the value of
   *     **callback** in **on('enabledAccessibilityExtensionListChange')**. If this parameter is not specified,
   *     listening will be disabled for all callbacks corresponding to the specified type.
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
   * Cancels a listener for changes in the list of installed accessibility extension abilities. This API uses an 
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'installedAccessibilityListChange' } type - Listening type. The value is fixed at
   *     **'installedAccessibilityListChange'**, indicating listening for changes in the list of installed accessibility
   *     extension abilities.
   * @param { Callback<void> } callback - Callback used to unregister. The value must be the same as the value of
   *     **callback** in **on('installedAccessibilityListChange')**. If this parameter is not specified, listening will
   *     be disabled for all callbacks corresponding to the specified type.
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
   * Sets the magnification state. Ensure that magnification is enabled before calling this API.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { boolean } state - Whether to trigger or disable the magnification feature.<br>- **true**: to trigger the
   *     magnification feature.<br>- **false**: to disable the magnification feature.
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
   * Set the senior mode state for app.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { Array<AppSeniorModeInfo> } appSeniorModeInfos - Indicates the list of
   *     app package names and statuses for which the advanced mode needs to be set.
   * @returns { Promise<void> } The promise returned by the function.
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
   * Get the senior mode state for app.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { string } bundleName - Indicates the bundle name of the application to be queried
   *     <br>The bundle name must follow the reverse domain naming convention (e.g., "com.example.app").
   * @param { int } [appIndex] - Indicates the index of clone app.
   *     <br>The value must be an integer greater than or equal to 0. Default value: 0.
   * @returns { Promise<boolean> } Returns {@code true} if senior mode is enabled; returns {@code false} otherwise.
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
   * Register an observer for anyone application's senior mode state changes.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<AppSeniorModeInfo> } callback - Asynchronous callback interface.
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
   * Unregister the observer for application's senior mode state changes.
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<AppSeniorModeInfo> } [callback] - Asynchronous callback interface.
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
   * Enable the flash or screen to blink for flash alert.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { BlinkingMode } mode - Indicates the mode of screen flickering or flash light flashing.
   * @param { BlinkingScenario } scenario - Indicates the scenario that blinking is triggered.
   * @returns { BlinkResultCode } Returns the result code.
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
   * Stop the flash or screen to blink for flash alert.
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { BlinkingMode } mode - Indicates the mode of screen flickering or flash light flashing.
   * @param { BlinkingScenario } scenario - Indicates the scenario that blinking is triggered.
   * @returns { BlinkResultCode } Returns the result code.
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
     * @param { T } value - Property value to set.
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
     * @param { T } value - Property value to set.
     * @param { AsyncCallback<void> } callback - Callback used to return the result.
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
     * @param { AsyncCallback<T> } callback - Callback used to return the property value.
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
   * Callback provided when the [enableAbilityWithCallback]{@link config.enableAbilityWithCallback} API is called to 
   * enable an accessibility extension ability. This callback will be invoked when the connection to an auxiliary 
   * extension ability is disconnected.
   *
   * @interface ConnectCallback
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface ConnectCallback {
    /**
     * Callback to be invoked when the connection to an auxiliary extension ability is disconnected.
     *
     * @type { OnDisconnectCallback }
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 23 dynamic&static
     */
    onDisconnect: OnDisconnectCallback;
  }

  /**
   * Indicates the senior mode information of an application.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AppSeniorModeInfo {
    /**
     * The bundle name of application.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    bundleName: string;
    /**
     * Indicates the index of clone app.
     * The value must be an integer greater than or equal to 0. Default value: 0.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appIndex?: int;
    /**
     * The state of senior mode for application.
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
   * Enumerates the daltonization filters.
   * The configuration of **DaltonizationColorFilter** takes effect only when
   * [daltonizationState]{@link daltonizationState} is set to **true**; the normal type is used when
   * [daltonizationState]{@link daltonizationState} is set to **false**.
   * 
   * @unionmember { 'Normal' } Filter for normal users.
   * @unionmember { 'Protanomaly' } Filter for protanomaly.
   * @unionmember { 'Deuteranomaly' } Filter for deuteranomaly.
   * @unionmember { 'Tritanomaly' } Filter for tritanomaly.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  type DaltonizationColorFilter = 'Normal' | 'Protanomaly' | 'Deuteranomaly' | 'Tritanomaly';

  /**
   * Defines the length of time for a click.
   * 
   * @unionmember { 'Short' } Short (default).
   * @unionmember { 'Medium' } Medium.
   * @unionmember { 'Long' } Long.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  type ClickResponseTime = 'Short' | 'Medium' | 'Long';

  /**
   * Defines the interval between repeated clicks.
   * The configuration of **RepeatClickInterval** takes effect when [ignoreRepeatClick]{@link ignoreRepeatClick} is set
   * to **true**; the normal type is used when [ignoreRepeatClick]{@link ignoreRepeatClick} is set to **false**.
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
   * Blinking Mode Enumeration
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum BlinkingMode {  
    /**
     * Indicates a single blink.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SINGLE_BLINK = 1,
    /**
     * Indicates continuous blink.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONTINUOUS_BLINK = 2
  }

  /**
   * Blinking Scenario Enumeration
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum BlinkingScenario {
    /**
     * Indicates that the alarm clock triggers blinking.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALARM = 1,
    /**
     * Indicates that the notification triggers blinking.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NOTIFICATION = 2,
    /**
     * Indicates that the phone call triggers blinking.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CALL = 3,
    /**
     * Indicates that triggers blinking for testing.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TESTING = 4
  }

  /**
   * Enumerates the result codes for blinking operations.
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum BlinkResultCode {
    /**
     * Success.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SUCCESS = 0,
    /**
     * Currently flashing.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALREADY_FLASHING = 1,
    /**
     * Device is in use.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DEVICE_IN_USE = 2,
    /**
     * Flash blinking is unsupported.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FLASH_BLINKING_UNSUPPORTED = 3,
    /**
     * Screen blinking is unsupported.
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCREEN_BLINKING_UNSUPPORTED = 4,
    /**
     * Feature switch is disabled.
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