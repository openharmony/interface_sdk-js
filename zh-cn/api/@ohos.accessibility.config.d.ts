/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * 本模块提供系统辅助功能的配置，包括辅助扩展的启用与关闭、高对比度文字显示、鼠标键、无障碍字幕配置等。
 *
 * @syscap SystemCapability.BarrierFree.Accessibility.Core
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace config {
  /**
   * 表示颜色滤镜功能启动状态。配合daltonizationColorFilter使用。true表示已启用颜色滤镜功能，false表示未启用颜色滤镜功能，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const daltonizationState: Config<boolean>;
  /**
   * 表示单声道音频的配置。true表示已启用单声道音频，false表示未启用单声道音频，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  const audioMono: Config<boolean>;
  /**
   * 表示左右声道音量平衡的配置。取值范围为-1.0~1.0。默认值为0.0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  const audioBalance: Config<double>;
  /**
   * 表示高对比度文字功能启用状态。true表示已启用高对比度文字功能，false表示未启用高对比度文字功能，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let highContrastText: Config<boolean>;
  /**
   * 表示颜色反转功能启用状态。true表示已启用颜色反转功能，false表示未启用颜色反转功能，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let invertColor: Config<boolean>;
  /**
   * 表示颜色滤镜功能配置。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let daltonizationColorFilter: Config<DaltonizationColorFilter>;
  /**
   * 表示内容显示建议时长配置。取值范围为0~5000，单位为毫秒。默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let contentTimeout: Config<int>;
  /**
   * 表示关闭动画功能启用状态。true表示已启用关闭动画功能，false表示未启用关闭动画功能，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let animationOff: Config<boolean>;
  /**
   * 表示亮度折扣系统配置。取值范围为0~1.0。默认值为0.0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let brightnessDiscount: Config<double>;
  /**
   * 表示鼠标键功能启用状态。true表示已启用鼠标键功能，false表示未启用鼠标键功能，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let mouseKey: Config<boolean>;
  /**
   * 表示鼠标自动点击操作的配置。取值范围0-5000，单位为毫秒，0表示不生效，其他值表示鼠标悬停相应的时长即触发自动点击操作，默认值为0，即默认不生效。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let mouseAutoClick: Config<int>;
  /**
   * 表示辅助扩展快捷键功能启用状态。true表示已启用辅助扩展快捷键功能，false表示未启用辅助扩展快捷键功能，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let shortkey: Config<boolean>;
  /**
   * 表示辅助扩展快捷键的目标配置。取值为辅助应用的名称，格式为：'bundleName/abilityName'。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let shortkeyTarget: Config<string>;
  /**
   * 表示辅助扩展快捷键的列表配置。取值为辅助应用的名称，格式为：['bundleName/abilityName']。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const shortkeyMultiTargets: Config<Array<string>>;
  /**
   * 表示辅助字幕功能启用状态。true表示已启用辅助字幕功能，false表示未启用辅助字幕功能，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let captions: Config<boolean>;
  /**
   * 表示辅助字幕的配置。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let captionsStyle: Config<accessibility.CaptionsStyle>;
  /**
   * 表示点击持续时间功能配置。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const clickResponseTime: Config<ClickResponseTime>;
  /**
   * 表示忽略重复点击功能启用状态。配合repeatClickInterval使用。true表示已启用忽略重复点击功能，false表示未启用忽略重复点击功能，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const ignoreRepeatClick: Config<boolean>;
  /**
   * 表示忽略重复点击功能配置。
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
   * 启用辅助扩展。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - 辅助应用的名称，格式为：'bundleName/abilityName'。
   * @param { Array<accessibility.Capability> } capability - 辅助应用的能力属性。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 启用辅助扩展，使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - 辅助应用的名称，格式为：'bundleName/abilityName'。
   * @param { Array<accessibility.Capability> } capability - 辅助应用的能力属性。
   * @param { AsyncCallback<void> } callback - 回调函数。
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
   * 启用辅助扩展，并指定[ConnectCallback]{@link config.ConnectCallback}作为辅助扩展应用状态变化的回调函数。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - 辅助扩展应用的名称，格式为：'bundleName/abilityName'。
   * @param { Array<accessibility.Capability> } capability - 辅助扩展应用的能力属性。
   * @param { ConnectCallback } connectCallback - 辅助扩展应用的状态发生变化时调用的回调函数。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
  function enableAbilityWithCallback(name: string, capability: Array<accessibility.Capability>, connectCallback: ConnectCallback): Promise<void>;

  /**
   * 关闭辅助扩展。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - 辅助应用的名称，格式为：'bundleName/abilityName'。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 关闭辅助扩展，使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - 辅助应用的名称，格式为：'bundleName/abilityName'。
   * @param { AsyncCallback<void> } callback - 回调函数。
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
   * 添加启用的辅助扩展的列表变化监听，使用callback异步回调。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'enabledAccessibilityExtensionListChange' } type - 参数固定为'enabledAccessibilityExtensionListChange'，监听启用的辅助扩
   *     展的列表变化。
   * @param { Callback<void> } callback - 回调函数，在启用的辅助扩展的列表变化时通过此函数进行通知。
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
   * 添加已安装的辅助扩展的列表变化监听，使用callback异步回调。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'installedAccessibilityListChange' } type - 参数固定为'installedAccessibilityListChange'，监听已安装的辅助扩展的列表变化。
   * @param { Callback<void> } callback - 回调函数，在已安装的辅助扩展的列表变化时通过此函数进行通知。
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
   * 取消启用的辅助扩展的列表变化监听，使用callback异步回调。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'enabledAccessibilityExtensionListChange' } type - 参数固定为'enabledAccessibilityExtensionListChange'，监听启用的辅助扩
   *     展的列表变化。
   * @param { Callback<void> } callback - 回调函数，取消指定callback对象的事件响应。需与on('enabledAccessibilityExtensionListChange')的
   *     callback一致。缺省时，表示注销所有已注册事件。
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
   * 取消已安装的辅助扩展的列表变化监听，使用callback异步回调。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'installedAccessibilityListChange' } type - 参数固定为'installedAccessibilityListChange'，监听已安装的辅助扩展的列表变化。
   * @param { Callback<void> } callback - 回调函数，取消指定callback对象的事件响应。需与on('installedAccessibilityListChange')的callback一致。缺
   *     省时，表示注销所有已注册事件。
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
   * 触发或者关闭放大手势功能的放大效果，使用前需要保证放大手势功能已开启。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { boolean } state - 表示放大手势功能的放大效果的启用状态。<br>-true：表示触发放大效果。<br>-false：表示关闭放大效果。
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
   * 用于属性的设置、获取与监听。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface Config<T> {
    /**
     * 设置属性。使用Promise异步回调。
     *
     * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
     * @param { T } value - 设置的属性值。
     * @returns { Promise<void> } Promise对象，无返回结果。
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
     * 设置属性，使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
     * @param { T } value - 设置的属性值。
     * @param { AsyncCallback<void> } callback - 回调函数。
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
     * 获取属性。使用Promise异步回调。
     *
     * @returns { Promise<T> } Promise对象，返回对应属性值。
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
     * 获取属性，使用callback异步回调。
     *
     * @param { AsyncCallback<T> } callback - 回调函数，返回属性值。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    get(callback: AsyncCallback<T>): void;

    /**
     * 添加属性变化监听，使用callback异步回调。
     *
     * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
     * @param { Callback<T> } callback - 回调函数，在属性变化时通过此函数进行通知。
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
     * 取消属性变化监听，使用callback异步回调。
     *
     * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
     * @param { Callback<T> } callback - 回调函数，取消指定callback对象的事件响应。需与on()的callback一致。缺省时，表示注销所有已注册事件。
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
   * 通过[enableAbilityWithCallback]{@link config.enableAbilityWithCallback}接口启用辅助扩展应用时提供的回调函数。辅助扩展应用连接断开时，回调函数将被调用。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  export interface ConnectCallback {
    /**
     * 辅助扩展应用的连接断开时调用的回调函数。
     *
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
   * 描述AccessibilityExtensionAbility断开连接的回调接口。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  type OnDisconnectCallback = () => void;

  /**
   * 颜色滤镜功能开启时（[daltonizationState]{@link daltonizationState}设置为true)，颜色滤镜的配置(即设置的DaltonizationColorFilter的值)生效；颜色滤镜功能关闭
   * 时（[daltonizationState]{@link daltonizationState}设置为false)，显示为正常类型。
   *
   * @unionmember { 'Normal' } 表示正常类型。
   * @unionmember { 'Protanomaly' } 表示红色弱视类型。
   * @unionmember { 'Deuteranomaly' } 表示绿色弱视类型。
   * @unionmember { 'Tritanomaly' } 表示蓝色弱视类型。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  type DaltonizationColorFilter = 'Normal' | 'Protanomaly' | 'Deuteranomaly' | 'Tritanomaly';

  /**
   * 用于不同时间长短的点击重复时间。
   * 
   * @unionmember { 'Short' } 表示短 (默认)。
   * @unionmember { 'Medium' } 表示中。
   * @unionmember { 'Long' } 表示长。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  type ClickResponseTime = 'Short' | 'Medium' | 'Long';

  /**
   * 忽略重复点击功能开启时（[ignoreRepeatClick]{@link ignoreRepeatClick}设置为true)，忽略重复点击的配置(即设置的RepeatClickInterval的值)生效；忽略重复点击功能关闭时
   * （[ignoreRepeatClick]{@link ignoreRepeatClick}设置为false)，显示为正常类型。
   *
   * @unionmember { 'Shortest' } 表示最短。
   * @unionmember { 'Short' } 表示短。
   * @unionmember { 'Medium' } 表示中。
   * @unionmember { 'Long' } 表示长。
   * @unionmember { 'Longest' } 表示最长。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  type RepeatClickInterval = 'Shortest' | 'Short' | 'Medium' | 'Long' | 'Longest';
}
export default config;