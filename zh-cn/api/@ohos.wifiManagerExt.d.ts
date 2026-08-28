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
 * @file
 * @kit ConnectivityKit
 */

import { AsyncCallback, Callback } from './@ohos.base';
/**
 * 提供WLAN扩展接口，供非通用类型产品使用。
 *
 * <p>本文件涉及的接口为非通用接口。这些扩展接口仅供部分产品类型使用，例如路由器。普通产品不应使用这些接口。</p>
 *
 * @namespace wifiManagerExt
 * @syscap SystemCapability.Communication.WiFi.AP.Extension
 * @since 9 dynamiconly
 */
declare namespace wifiManagerExt {

  /**
   * 使能WLAN热点。
   * 该方法为异步方法。启用WLAN热点后，Wi-Fi可能会被禁用。
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
   * 去使能WLAN热点。
   * 如果禁用WLAN热点后Wi-Fi处于启用状态，则Wi-Fi可能会被重新启用。
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
   * 获取支持的功率模式。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<Array<PowerMode>> } 返回支持的功率模式列表。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  function getSupportedPowerMode(): Promise<Array<PowerMode>>;

  /**
   * 获取支持的功率模式。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<Array<PowerMode>> } callback - 回调函数。当操作成功时，err为0，data表示支持的功率模式。如果err为非0，表示处理出现错误。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  function getSupportedPowerMode(callback: AsyncCallback<Array<PowerMode>>): void;

  /**
   * 获取功率模式。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<PowerMode> } 
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  function getPowerMode(): Promise<PowerMode>;

  /**
   * 获取功率模式。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<PowerMode> } callback - 回调函数。当操作成功时，err为0，data表示功率模式。如果err为非0，表示处理出现错误。
   * @throws {BusinessError} 201 - Permission denied.
   * @throws {BusinessError} 801 - Capability not supported.
   * @throws {BusinessError} 2701000 - Operation failed.
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  function getPowerMode(callback: AsyncCallback<PowerMode>): void;

  /**
   * 设置功率模式。
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @param { PowerMode } model --WLAN功率模式。
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
   * @enum { number } PowerMode
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 9 dynamiconly
   */
  export enum PowerMode {
    /** 
     * 睡眠模式。
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9 dynamiconly
    */
    
    SLEEPING = 0,

    /** 
     * 常规模式。
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9 dynamiconly
     * */
    GENERAL = 1,

    /** 
     * 穿墙模式。
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @since 9 dynamiconly
     * */
    THROUGH_WALL = 2,
  }
}

export default wifiManagerExt;
