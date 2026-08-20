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
 * @file 系统辅助功能配置
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
   * 表示色彩校正功能启用状态。配合daltonizationColorFilter使用。true表示已启用色彩校正功能，false表示未启用色彩校正功能，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const daltonizationState: Config<boolean>;
  /**
   * 表示单声道音频功能启用状态。true表示已启用单声道音频功能，false表示未启用单声道音频功能，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  const audioMono: Config<boolean>;
  /**
   * 表示左右声道音量平衡的配置。-1.0表示仅左声道输出；0.0表示左右声道平衡输出；1.0表示仅右声道输出；中间值为左右声道音量的线性比例。取值范围为-1.0~1.0。默认值为0.0。
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
   * 表示色彩校正颜色滤镜配置。配合daltonizationState使用，仅当daltonizationState设置为true时，此配置生效。默认值为Normal，表示正常类型。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let daltonizationColorFilter: Config<DaltonizationColorFilter>;
  /**
   * 表示内容显示建议时长配置，用于设置无障碍提示等内容在屏幕上的持续显示时长。取值范围为0~5000，单位为毫秒。默认值为0。
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
   * 表示亮度折扣配置，用于按比例调整屏幕显示亮度。取值范围为0~1.0，0表示无亮度折扣（原始亮度），1.0表示最大亮度折扣。默认值为0.0。
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
   * 表示鼠标自动点击操作的配置。取值范围为0~5000，单位为毫秒，0表示不生效，其他值表示鼠标悬停相应的时长即触发自动点击操作，默认值为0。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let mouseAutoClick: Config<int>;
  /**
   * 表示辅助扩展快捷键功能启用状态。配合shortkeyTarget使用。true表示已启用辅助扩展快捷键功能，false表示未启用辅助扩展快捷键功能，默认值为false。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let shortkey: Config<boolean>;
  /**
   * 表示辅助扩展快捷键的目标配置。取值为辅助扩展应用的名称，格式为：'bundleName/abilityName'。格式不正确或名称无效时，设置不生效。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  let shortkeyTarget: Config<string>;
  /**
   * 表示辅助扩展快捷键的多目标列表配置。取值为辅助扩展应用的名称，格式为：['bundleName/abilityName']。格式不正确或名称无效时，设置不生效。
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
   * 表示辅助字幕样式的配置。
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
   * 表示忽略重复点击的时间间隔配置。配合ignoreRepeatClick使用，仅当ignoreRepeatClick设置为true时，此配置生效。默认值为Shortest，表示最短间隔。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  const repeatClickInterval: Config<RepeatClickInterval>;
  /**
   * 表示屏幕放大功能启用状态。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  const screenMagnification: Config<boolean>;

  /**
   * 启用辅助扩展，需与[config.disableAbility]{@link config.disableAbility}配对使用。使用Promise异步回调。
   * 
   * 与[config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}相比，本接口仅启用辅助扩展，不监听辅助扩展的连接状态变化；若需要监听辅助扩展断开
   * 连接事件，请使用[config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - 辅助扩展应用的名称，格式为：'bundleName/abilityName'。
   * @param { Array<accessibility.Capability> } capability - 辅助扩展应用的能力属性。
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
   * 启用辅助扩展，需与[config.disableAbility]{@link config.disableAbility}配对使用。使用callback异步回调。
   * 
   * 与[config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}相比，本接口仅启用辅助扩展，不监听辅助扩展的连接状态变化；若需要监听辅助扩展断开
   * 连接事件，请使用[config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - 辅助扩展应用的名称，格式为：'bundleName/abilityName'。
   * @param { Array<accessibility.Capability> } capability - 辅助扩展应用的能力属性。
   * @param { AsyncCallback<void> } callback - 回调函数。当启用辅助扩展成功，err为undefined，否则为错误对象。
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
   * 启用辅助扩展，并指定[ConnectCallback]{@link config.ConnectCallback}作为辅助扩展连接断开事件的回调函数。使用Promise异步回调。
   * 
   * 当辅助扩展进程异常断开连接时，将触发ConnectCallback的onDisconnect回调。需与[config.disableAbility]{@link config.disableAbility}配对使用。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - 辅助扩展应用的名称，格式为：'bundleName/abilityName'。
   * @param { Array<accessibility.Capability> } capability - 辅助扩展应用的能力属性。
   * @param { ConnectCallback } connectCallback - 辅助扩展应用连接断开时调用的回调函数，用于监听辅助扩展的断开连接事件。
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
   * 关闭辅助扩展，需与[config.enableAbility]{@link config.enableAbility}或
   * [config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}配对使用。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - 辅助扩展应用的名称，格式为：'bundleName/abilityName'。
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
   * 关闭辅助扩展，需与[config.enableAbility]{@link config.enableAbility}或
   * [config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}配对使用。使用callback异步回调。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { string } name - 辅助扩展应用的名称，格式为：'bundleName/abilityName'。
   * @param { AsyncCallback<void> } callback - 回调函数。当关闭辅助扩展成功，err为undefined，否则为错误对象。
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
   * 添加启用的辅助扩展的列表变化监听。使用callback异步回调。
   * 
   * 需与
   * [config.off('enabledAccessibilityExtensionListChange')]{@link config.off(type: 'enabledAccessibilityExtensionListChange', callback?: Callback<void>)}
   * 配对使用，在不需要监听时调用off取消注册，避免资源泄漏。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'enabledAccessibilityExtensionListChange' } type - 参数固定为'enabledAccessibilityExtensionListChange'，指定监听启用的辅
   *     助扩展的列表变化事件类型。
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
   * 添加启用的辅助扩展的列表变化监听。使用callback异步回调。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<void> } callback - 回调函数，在启用的辅助扩展的列表变化时通过此函数进行通知。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  function onEnabledAccessibilityExtensionListChange(callback: Callback<void>): void;

  /**
   * 添加已安装的辅助扩展的列表变化监听。使用callback异步回调。
   * 
   * 需与
   * [config.off('installedAccessibilityListChange')]{@link config.off(type: 'installedAccessibilityListChange', callback?: Callback<void>)}
   * 配对使用，在不需要监听时调用off取消注册，避免资源泄漏。
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
   * 添加已安装的辅助扩展的列表变化监听。使用callback异步回调。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<void> } callback - 回调函数，在已安装的辅助扩展的列表变化时通过此函数进行通知。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  function onInstalledAccessibilityListChange(callback: Callback<void>): void;

  /**
   * 取消启用的辅助扩展的列表变化监听。使用callback异步回调。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'enabledAccessibilityExtensionListChange' } type - 参数固定为'enabledAccessibilityExtensionListChange'，指定取消监听的事
   *     件类型为启用的辅助扩展的列表变化。
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
   * 取消启用的辅助扩展的列表变化监听。使用callback异步回调。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<void> } callback - 取消指定callback对象的事件响应。需与onEnabledAccessibilityExtensionListChange的callback一致。缺省
   *     时，表示注销所有已注册事件。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  function offEnabledAccessibilityExtensionListChange(callback?: Callback<void>): void;

  /**
   * 取消已安装的辅助扩展的列表变化监听。使用callback异步回调。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { 'installedAccessibilityListChange' } type - 参数固定为'installedAccessibilityListChange'，指定取消监听的事件类型为已安装的辅助扩展的列
   *     表变化。
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
   * 取消已安装的辅助扩展的列表变化监听。使用callback异步回调。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<void> } callback - 取消指定callback对象的事件响应。需与onInstalledAccessibilityListChange的callback一致。缺省时，表示注销所有
   *     已注册事件。
   * @throws { BusinessError } 201 - Permission verification failed.
   *     The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 23 static
   */
  function offInstalledAccessibilityListChange(callback?: Callback<void>): void;

  /**
   * 设置放大效果的启用状态。放大效果依赖放大手势功能，仅在放大手势功能已启用的前提下，本接口的设置才会生效。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { boolean } state - 表示放大效果的启用状态。
   *     <br>- true：表示启用放大效果。
   *     <br>- false：表示关闭放大效果。
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
   * 设置应用“长辈模式”的状态。使用Promise异步回调。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { Array<AppSeniorModeInfo> } appSeniorModeInfos - 修改应用的“长辈模式”的状态信息，数组中每个对象包含bundleName、appIndex、
   *     seniorModeState三个属性。
   * @returns { Promise<void> } Promise对象，无返回结果。
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
   * 查询应用“长辈模式”的状态。使用Promise异步回调。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { string } bundleName - 查询“长辈模式”的应用包名。
   * @param { int } [appIndex] - 应用包的分身索引标识。
   *     <br>取值范围：大于等于0的整数。缺省时，appIndex默认为0。
   * @returns { Promise<boolean> } Promise对象。返回true表示应用已启用“长辈模式”；返回false表示应用未启用“长辈模式”。
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
   * 监听所有应用“长辈模式”的状态变化事件。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > - 注册监听的callback参数应使用具名函数而非匿名函数，否则每次调用时会创建一个新的底层对象，引起内存泄漏问题。
   * >
   * > - 调用此方法后，务必在组件实例销毁前（如aboutToDisappear生命周期中）使用
   * > [config.offSeniorModeStateChangeForApp]{@link config.offSeniorModeStateChangeForApp(callback?: Callback<AppSeniorModeInfo>)}
   * > 取消监听，否则可能会导致崩溃。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<AppSeniorModeInfo> } callback - 回调函数。返回被修改的应用“长辈模式”信息。
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
   * 取消监听所有应用“长辈模式”的状态变化事件。使用callback异步回调。
   *
   * @permission ohos.permission.READ_ACCESSIBILITY_CONFIG
   * @param { Callback<AppSeniorModeInfo> } [callback] - 回调函数，取消指定callback对象的事件响应。需与
   *     [config.onSeniorModeStateChangeForApp]{@link config.onSeniorModeStateChangeForApp(callback: Callback<AppSeniorModeInfo>)}
   *     的callback一致。缺省时，表示注销所有已注册事件。
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
   * 启用闪光灯或屏幕以进行闪烁提醒。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { BlinkingMode } mode - 表示屏幕闪烁或闪光灯闪烁的模式。
   * @param { BlinkingScenario } scenario - 表示触发闪烁的场景。
   * @returns { BlinkResultCode } 接口调用返回的结果码。
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
   * 停止闪光灯闪烁或屏幕闪烁。
   *
   * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
   * @param { BlinkingMode } mode - 表示屏幕闪烁或闪光灯闪烁的模式。
   * @param { BlinkingScenario } scenario - 表示触发闪烁的场景。
   * @returns { BlinkResultCode } 接口调用返回的结果码。
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
     * @param { T } value - 设置的属性值，值类型与对应Config属性的类型一致。
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
     * 设置属性。使用callback异步回调。
     *
     * @permission ohos.permission.WRITE_ACCESSIBILITY_CONFIG
     * @param { T } value - 设置的属性值，值类型与对应Config属性的类型一致。
     * @param { AsyncCallback<void> } callback - 回调函数。当设置属性成功，err为undefined，否则为错误对象。
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
     * 获取属性。使用callback异步回调。
     *
     * @param { AsyncCallback<T> } callback - 回调函数。当获取属性成功，err为undefined，data为属性值；否则为错误对象。
     * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    get(callback: AsyncCallback<T>): void;

    /**
     * 添加属性变化监听。使用callback异步回调。
     * 
     * 需与[off]{@link config.Config.off}配对使用，在不需要监听时调用off取消注册，避免资源泄漏。
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
     * 取消属性变化监听。使用callback异步回调。
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
   * 通过[config.enableAbilityWithCallback]{@link config.enableAbilityWithCallback}接口启用辅助扩展应用时提供的回调函数。辅助扩展应用连接断开时，回调函数将被调
   * 用。
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
   * “长辈模式”在应用中的状态信息。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AppSeniorModeInfo {
    /**
     * 应用包名，用于标识应用，格式如：'com.example.myapplication'。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    bundleName: string;
    /**
     * 应用包的分身索引标识。取值大于等于0的整数，缺省时默认为0。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    appIndex?: int;
    /**
     * 应用“长辈模式”启用状态，true表示已启用，false表示未启用。
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
   * 用于不同色弱类型的校正颜色滤镜。
   * 
   * 色彩校正功能启用时（[daltonizationState]{@link config.daltonizationState}设置为true）配置生效；色彩校正功能未启用时（
   * [daltonizationState]{@link config.daltonizationState}设置为false）显示为正常类型。
   *
   * @unionmember { 'Normal' } 表示正常类型。
   * @unionmember { 'Protanomaly' } 表示红色弱类型。
   * @unionmember { 'Deuteranomaly' } 表示绿色弱类型。
   * @unionmember { 'Tritanomaly' } 表示蓝色弱类型。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  type DaltonizationColorFilter = 'Normal' | 'Protanomaly' | 'Deuteranomaly' | 'Tritanomaly';

  /**
   * 用于不同时间长短的点击持续时间。
   *
   * @unionmember { 'Short' } 表示短（默认）。
   * @unionmember { 'Medium' } 表示中。
   * @unionmember { 'Long' } 表示长。
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  type ClickResponseTime = 'Short' | 'Medium' | 'Long';

  /**
   * 用于不同时间间隔的忽略重复点击。
   * 
   * 忽略重复点击功能启用时（[ignoreRepeatClick]{@link config.ignoreRepeatClick}设置为true）配置生效；忽略重复点击功能未启用时（
   * [ignoreRepeatClick]{@link config.ignoreRepeatClick}设置为false）不生效。
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

  /**
   * 表示闪烁模式的枚举。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum BlinkingMode {  
    /**
     * 表示单次闪烁。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SINGLE_BLINK = 1,
    /**
     * 表示持续闪烁。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONTINUOUS_BLINK = 2
  }

  /**
   * 表示闪烁场景的枚举。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum BlinkingScenario {
    /**
     * 表示闹钟触发闪烁。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALARM = 1,
    /**
     * 表示通知触发闪烁。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NOTIFICATION = 2,
    /**
     * 表示来电触发闪烁。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CALL = 3,
    /**
     * 表示测试场景触发闪烁。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TESTING = 4
  }

  /**
   * 表示闪烁操作的结果码枚举。
   *
   * @syscap SystemCapability.BarrierFree.Accessibility.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  export enum BlinkResultCode {
    /**
     * 表示闪烁接口执行成功。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SUCCESS = 0,
    /**
     * 表示设备正在闪烁中。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ALREADY_FLASHING = 1,
    /**
     * 表示设备正在使用中。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    DEVICE_IN_USE = 2,
    /**
     * 表示设备不支持闪光灯闪烁。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FLASH_BLINKING_UNSUPPORTED = 3,
    /**
     * 表示设备不支持屏幕闪烁。
     *
     * @syscap SystemCapability.BarrierFree.Accessibility.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SCREEN_BLINKING_UNSUPPORTED = 4,
    /**
     * 表示闪烁功能开关未开启。
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