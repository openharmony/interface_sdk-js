/*
 * Copyright (C) 2022 Huawei Device Co., Ltd.
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
 * @file WLAN扩展接口
 * @kit ConnectivityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
/**
 * 该模块主要提供Wi-Fi扩展接口，供非通用类型产品使用。
 *
 * @syscap SystemCapability.Communication.WiFi.AP.Extension
 * @since 9 dynamiconly
 */
declare namespace wifiManagerExt {

  /**
   * 启用Wi-Fi热点。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 10开始废弃。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  function enableHotspot(): void;
   
  /**
   * 禁用Wi-Fi热点。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 10开始废弃。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  function disableHotspot(): void;

  /**
   * 获取支持的功率模式。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<Array<PowerMode>> } Promise对象。表示功率模式。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  function getSupportedPowerMode(): Promise<Array<PowerMode>>;

  /**
   * 获取支持的功率模式。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<Array<PowerMode>> } callback - 回调函数。当操作成功时，err为0，data表示支持的功率模式。如果err为非0，表示获取支持的功率模式操作出现错误。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  function getSupportedPowerMode(callback: AsyncCallback<Array<PowerMode>>): void;

  /**
   * 获取功率模式，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<PowerMode> } Promise对象。表示功率模式。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  function getPowerMode(): Promise<PowerMode>;

  /**
   * 获取功率模式。使用callback异步回调。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<PowerMode> } callback - 回调函数。当操作成功时，err为0，data表示功率模式。如果err为非0，表示获取功率模式操作出现错误。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  function getPowerMode(callback: AsyncCallback<PowerMode>): void;

  /**
   * 设置功率模式。
   * 
   * > **说明：**
   * >
   * > 从API version 9开始支持，从API version 10开始废弃。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @param { PowerMode } mode - 功率模式。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   * @deprecated since 10
   */
  function setPowerMode(mode: PowerMode): void;

  /**
   * 表示功率模式的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  export enum PowerMode {
    /**
     * Sleeping Mode.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9 dynamiconly
     */
    
    SLEEPING = 0,

    /**
     * 常规模式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9 dynamiconly
     */
    GENERAL = 1,

    /**
     * 穿墙模式。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9 dynamiconly
     */
    THROUGH_WALL = 2,
  }
}

export default wifiManagerExt;