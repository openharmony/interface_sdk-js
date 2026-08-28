/*
 * Copyright (c) 2021-2023 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */

import { AsyncCallback, BusinessError, Callback } from './@ohos.base';

/**
 * 该模块主要提供查询屏幕状态、查询电源模式、检测待机模式等接口，还提供电源键过滤策略的配置能力。
 *     开发者可以使用该模块的接口获取设备的活动状态、电源模式、亮灭屏状态、待机低功耗状态等，适用于需要根据设备电源状态进行业务逻辑调整的场景，
 *     例如在低功耗模式下限制后台活动、在待机模式下优化续航策略等。
 *
 * @syscap SystemCapability.PowerManager.PowerManager.Core
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace power {
  /**
   * 系统关机。与reboot方法的区别：shutdown使设备完全关机不再运行，reboot使设备关机后自动重启。
   *
   * @permission ohos.permission.REBOOT
   * @param { string } reason - 关机原因。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 7 dynamic
   * @since 23 static
   */
  function shutdown(reason: string): void;

  /**
   * 重启设备。
   *
   * @permission ohos.permission.REBOOT
   * @param { string } reason - 重启原因。例如，“updater”表示重启后进入更新模式。不指定具体原因时，系统将在重启后进入正常模式。
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead power.reboot
   */
  function rebootDevice(reason: string): void;

  /**
   * 重启设备。
   *
   * @permission ohos.permission.REBOOT
   * @param { string } reason - 重启原因。例如，“updater”表示重启后进入更新模式。传入空字符串时，系统将在重启后进入正常模式。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function reboot(reason: string): void;

  /**
   * 检测当前设备的亮灭屏状态。使用callback异步回调。
   *
   * @param { AsyncCallback<boolean> } callback - 回调函数。当检测成功，err为undefined，data为获取到的亮灭屏状态，返回true表示亮屏，返回false表示灭屏；
   *     否则err为错误对象。
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead power.isActive
   */
  function isScreenOn(callback: AsyncCallback<boolean>): void;

  /**
   * 检测当前设备的亮灭屏状态。使用Promise异步回调。
   *
     * @returns { Promise<boolean> } Promise对象。返回true表示亮屏；返回false表示灭屏。
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 7 dynamiconly
     * @deprecated since 9
     * @useinstead power.isActive
     */
  function isScreenOn(): Promise<boolean>;

  /**
   * 检测当前设备是否处于活动状态。可用于应用根据设备活动状态调整行为，例如在设备非活动状态下暂停后台任务等。
   *
   * - 有屏的设备亮屏时为活动状态，灭屏时为非活动状态。
   * - 无屏的设备非休眠时为活动状态，休眠时为非活动状态。
   *
   * @returns { boolean } 活动状态返回true，非活动状态返回false。
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function isActive(): boolean;

  /**
   * 唤醒设备，将设备从睡眠状态恢复到活动状态。
   *
   * @permission ohos.permission.POWER_MANAGER [since 19]
   * @param { string } detail - 唤醒原因。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 19]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function wakeup(detail: string): void;

  /**
   * 使设备进入睡眠状态。<br><br>调用此方法后设备将进入睡眠，如需恢复到活动状态，需调用power.wakeup唤醒设备。<br><br>与hibernate方法的区别：suspend为较浅的低功耗睡眠状态（灭屏后进入睡眠），
   *     hibernate为更深的休眠状态（休眠前可选择清理内存）。需快速恢复设备活动时选择suspend，需最大程度节省电量时选择hibernate。
   *
   * @permission ohos.permission.POWER_MANAGER [since 19]
   * @param { boolean } isImmediate - 是否直接使设备进入睡眠状态。true表示灭屏后立即进入睡眠，不填该参数则默认为false，表示灭屏后由系统自动检测何时进入睡眠。如果只想做灭屏操作，建议不填参数。<
   *     br>**说明：** 从API version 10开始，支持该参数。 [since 10]
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 19]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function suspend(isImmediate?: boolean): void;

  /**
   * 获取当前设备的电源模式。不同电源模式对应不同的设备行为策略，开发者可根据返回的模式值调整应用行为以适配当前模式。各模式定义及说明请参见DevicePowerMode。
   *
   * @returns { DevicePowerMode } 当前设备的电源模式，取值包括标准模式、省电模式、性能模式、超级省电模式等。
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function getPowerMode(): DevicePowerMode;

  /**
   * 设置当前设备的电源模式，不同的电源模式会影响设备的性能与功耗策略。使用callback异步回调。
   *
   * @permission ohos.permission.POWER_OPTIMIZATION
   * @param { DevicePowerMode } mode - 电源模式。各模式含义请参见DevicePowerMode枚举说明。
   * @param { AsyncCallback<void> } callback - 回调函数。当设置电源模式成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900301 - Setting the power mode failed. [since 23]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setPowerMode(mode: DevicePowerMode, callback: AsyncCallback<void>): void;

  /**
   * 设置当前设备的电源模式，不同的电源模式会影响设备的性能与功耗策略。使用Promise异步回调。
   *
   * @permission ohos.permission.POWER_OPTIMIZATION
   * @param { DevicePowerMode } mode - 电源模式。各模式含义请参见DevicePowerMode枚举说明。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900301 - Setting the power mode failed. [since 23]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setPowerMode(mode: DevicePowerMode): Promise<void>;

  /**
   * 检测当前设备是否进入待机低功耗续航模式。待机模式下系统会采取降低功耗的策略，开发者应据此调整应用的后台任务和资源使用策略，避免在待机时执行高耗能操作。
   *
   * @returns { boolean } 进入待机模式返回true，未进入待机模式返回false。
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function isStandby(): boolean;

  /**
   * 休眠设备。<br><br>与suspend方法的区别：hibernate为更深的休眠状态（休眠前可选择清理内存），suspend为较浅的低功耗睡眠状态（灭屏后进入睡眠）。
   *     需最大程度节省电量时选择hibernate，需快速恢复设备活动时选择suspend。适用于设备长时间闲置需要深度节能的场景。
   *
   * @permission ohos.permission.POWER_MANAGER [since 19]
   * @param { boolean } clearMemory - 是否在进入休眠之前清理内存。true表示清理内存，false表示不清理内存。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 19]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function hibernate(clearMemory: boolean): void;

  /**
   * 设置灭屏超时时间。例如，在自助终端或展示设备场景下可设置较长的超时时间以保持屏幕常亮，在低电量场景下可设置较短的超时时间以节省电量。
   *
   * @permission ohos.permission.POWER_MANAGER [since 19]
   * @param { long } timeout - 灭屏超时时间，单位是毫秒。大于0代表灭屏超时时间，-1代表恢复默认超时时间，传入其它值时抛出异常，错误码401。
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Parameter verification failed.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API. [since 19]
   * @throws { BusinessError } 801 - Capability not supported. This API cannot work in car devices. [since 26.1.0]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setScreenOffTime(timeout: long): void;

  /**
   * 刷新设备活动状态（如：重设屏幕超时灭屏时间等）。<br><br>此接口仅在设备活动状态下生效。
   *
   * @permission ohos.permission.REFRESH_USER_ACTION
   * @param { string } reason - 刷新设备活动状态的原因。仅在设备活动状态下生效，设备活动状态见power.isActive。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 4900201 - The device activity is being refreshed too frequently; the minimum time
   *     interval is 100 ms.
   * @throws { BusinessError } 801 - Capability not supported. This API cannot work in car devices. [since 26.1.0]
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function refreshActivity(reason: string): void;

  /**
   * 订阅电源关机或重启的回调提醒。使用callback异步回调。调用此方法订阅回调后，可在不再需要时调用power.unregisterShutdownCallback取消订阅，释放系统资源。
   *
   * @permission ohos.permission.REBOOT
   * @param { Callback<boolean> } callback - 回调函数，返回true表示重启；返回false表示关机。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  function registerShutdownCallback(callback: Callback<boolean>): void;

  /**
   * 取消订阅电源关机或重启的回调提醒。使用callback同步回调。
   *     此方法与power.registerShutdownCallback配对使用，必须在先调用registerShutdownCallback订阅回调后，再调用此方法取消订阅。
   *
   * @permission ohos.permission.REBOOT
   * @param { Callback<void> } [callback] - 回调函数，无返回值。取消订阅成功后会调用该回调函数。不传入此参数时，取消订阅仍生效，但不会触发回调通知。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 23 dynamic&static
   */
  function unregisterShutdownCallback(callback?: Callback<void>): void;

  /**
   * 按场景名称查询电源配置值。例如，在系统电源管理应用中需要读取特定场景的电源配置参数时使用。
   *
   * @permission ohos.permission.POWER_CONFIG
   * @param { string } sceneName - 电源配置的场景名称。最大长度128字节，不支持空字符串。
   * @returns { string } 返回指定场景名称对应的电源配置值，配置值的具体内容取决于所查询的场景名称。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 4900400 - Invalid parameter. Possible causes:
     *     1. The sceneName parameter is an empty string;
     *     2. The length of sceneName parameter exceeds 128 bytes.
     * @throws { BusinessError } 4900501 - Failed to read the power configuration value.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getPowerConfig(sceneName: string): string;

  /**
   * 根据场景名称设置电源配置值。例如，在系统电源管理应用中需要动态调整特定场景的电源配置参数时使用。
   *
   * @permission ohos.permission.POWER_CONFIG
   * @param { string } sceneName - 电源配置的场景名称。最大长度128字节，不支持空字符串。
   * @param { string } value - 电源配置值。最大长度128字节，不支持空字符串。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 4900400 - Invalid parameter. Possible causes:
     *     1. The sceneName or value parameter is an empty string;
     *     2. The length of sceneName parameter exceeds 128 bytes;
     *     3. The length of value parameter exceeds 128 bytes.
     * @throws { BusinessError } 4900601 - Failed to write the power configuration value.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setPowerConfig(sceneName: string, value: string): void;

  /**
   * 表示电源模式的枚举值。
   *
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DevicePowerMode {
    /**
     * 表示标准模式，默认值。
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    MODE_NORMAL = 600,
    /**
     * 表示省电模式。
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    MODE_POWER_SAVE,
    /**
     * 表示性能模式。
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    MODE_PERFORMANCE,
    /**
     * 表示超级省电模式。
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 9 dynamic
     * @since 23 static
     */
    MODE_EXTREME_POWER_SAVE,
    /**
     * 表示自定义省电模式。
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 20 dynamic
     * @since 23 static
     */
    MODE_CUSTOM_POWER_SAVE = 650
  }

  /**
   * 设置电源键过滤策略，在电源服务订阅电源键事件后，用于配置电源键事件的处理方式。
   *
   * 电源键过滤策略见[power.PowerKeyFilteringStrategy]{@link @ohos.power:power.PowerKeyFilteringStrategy}接口。
   *
   * @permission ohos.permission.POWER_MANAGER
   * @param { PowerKeyFilteringStrategy } strategy - 电源键过滤策略，用于配置电源键事件的处理方式。各策略含义请参见PowerKeyFilteringStrategy。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function setPowerKeyFilteringStrategy(strategy: PowerKeyFilteringStrategy): void;

  /**
   * 表示电源键过滤策略。
   *
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 21 dynamic
   * @since 23 static
   */
  export enum PowerKeyFilteringStrategy {
    /**
     * 表示禁用电源键长按事件的过滤策略，默认值。
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 21 dynamic
     * @since 23 static
     */
    DISABLE_LONG_PRESS_FILTERING = 0,
    /**
     * 表示仅过滤当前电源键长按事件，下一次不过滤。
     *
     * @syscap SystemCapability.PowerManager.PowerManager.Core
     * @since 21 dynamic
     * @since 23 static
     */
    LONG_PRESS_FILTERING_ONCE = 1
  }
}

export default power;