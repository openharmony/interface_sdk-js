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
 * 该模块主要提供重启、关机、查询屏幕状态等接口。开发者可以使用该模块的接口获取设备的活动状态、电源模式、亮灭屏状态等。
 *
 * @syscap SystemCapability.PowerManager.PowerManager.Core
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace power {
  /**
   * 系统关机。
   *
   * @permission ohos.permission.REBOOT
   * @param { string } reason - 关机原因；该参数必须为字符串类型。
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
   * 重启系统。
   *
   * @permission ohos.permission.REBOOT
   * @param { string } reason - 重启原因。例如，“updater”表示重启后进入更新模式。如果未指定该参数，系统将在重启后进入正常模式。
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
   * @param { string } reason - 重启原因。例如，“updater”表示重启后进入更新模式。如果未指定该参数，系统将在重启后进入正常模式。
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
   * @param { AsyncCallback<boolean> } callback - 回调函数。当检测成功，err为undefined，data为获取到的亮灭屏状态，返回true表示亮屏，返回false表示灭屏；否则为错误对象
   *     。
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
   * 检测当前设备是否处于活动状态。
   *
   * - 有屏的设备亮屏时为活动状态，熄屏时为非活动状态。
   * - 无屏的设备非休眠时为活动状态，休眠时为非活动状态。
   *
   * @returns { boolean } 活动状态返回true，非活动状态返回false。
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function isActive(): boolean;

  /**
   * 唤醒设备。
   *
   * @permission ohos.permission.POWER_MANAGER [since 19]
   * @param { string } detail - 唤醒原因；该参数必须为字符串类型。
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
   * 使设备进入睡眠状态。
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
   * 获取当前设备的电源模式。
   *
   * @returns { DevicePowerMode } 电源模式。
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function getPowerMode(): DevicePowerMode;

  /**
   * 设置当前设备的电源模式。使用callback异步回调。
   *
   * @permission ohos.permission.POWER_OPTIMIZATION
   * @param { DevicePowerMode } mode - 电源模式；该参数类型是一个枚举类。
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
   * 设置当前设备的电源模式。使用Promise异步回调。
   *
   * @permission ohos.permission.POWER_OPTIMIZATION
   * @param { DevicePowerMode } mode - 电源模式；该参数类型是一个枚举类。
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
   * 检测当前设备是否进入待机低功耗续航模式。
   *
   * @returns { boolean } 进入待机模式返回true，否则返回false。
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function isStandby(): boolean;

  /**
   * 休眠设备。
   *
   * @permission ohos.permission.POWER_MANAGER [since 19]
   * @param { boolean } clearMemory - true 代表在进入休眠之前清理内存，否则为false。
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
   * 设置熄屏超时时间。
   *
   * @permission ohos.permission.POWER_MANAGER [since 19]
   * @param { long } timeout - 熄屏超时时间，单位是毫秒，大于0代表熄屏超时时间，-1代表恢复默认超时时间，其它是无效值。
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
  function setScreenOffTime(timeout: long): void;

  /**
   * 刷新设备活动状态（如：重设屏幕超时息屏时间等）。
   *
   * 只有设备在活动状态下生效，设备活动状态见[power.isActive]{@link @ohos.power:power.isActive}接口。
   *
   * @permission ohos.permission.REFRESH_USER_ACTION
   * @param { string } reason - 刷新设备活动状态的原因。该参数必须为字符串类型。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 4900101 - Failed to connect to the service.
   * @throws { BusinessError } 4900201 - The device activity is being refreshed too frequently; the minimum time
   *     interval is 100 ms.
   * @syscap SystemCapability.PowerManager.PowerManager.Core
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function refreshActivity(reason: string): void;

  /**
   * 订阅电源关机或重启的回调提醒。使用callback异步回调。
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
   *
   * @permission ohos.permission.REBOOT
   * @param { Callback<void> } [callback] - 回调函数，无返回值。
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
   * 按场景名称查询电源配置值。
   *
   * @permission ohos.permission.POWER_CONFIG
   * @param { string } sceneName - 电源配置的场景名称。最大长度128字节。
   * @returns { string } 返回电源配置值。
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
   * 根据场景名称设置电源配置值。
   *
   * @permission ohos.permission.POWER_CONFIG
   * @param { string } sceneName - 电源配置的场景名称。最大长度128字节。
   * @param { string } value - 电源配置值。最大长度128字节。
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
   * @param { PowerKeyFilteringStrategy } strategy - 电源键过滤策略。该参数必须为枚举类型。
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
     * 表示不使能电源键长按事件的过滤策略，默认值。
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