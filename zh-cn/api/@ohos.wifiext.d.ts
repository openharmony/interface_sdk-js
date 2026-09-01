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
 * > **说明：**
 * >
 * > 从API version 9开始，该接口不再维护，推荐使用[@ohos.wifiManagerExt (WLAN扩展接口)]{@link @ohos.wifiManagerExt:wifiManagerExt}等相关接口。
 *
 * @syscap SystemCapability.Communication.WiFi.AP.Extension
 * @since 8 dynamiconly
 */
declare namespace wifiext {
  /**
   * 启用Wi-Fi热点。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @returns { boolean } 操作结果， true: 成功， false: 失败。
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.enableHotspot
   */
  function enableHotspot(): boolean;

  /**
   * 禁用Wi-Fi热点。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @returns { boolean } 操作结果， true: 成功， false: 失败。
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.disableHotspot
   */
  function disableHotspot(): boolean;

  /**
   * 获取支持的功率模式。使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<Array<PowerModel>> } Promise对象。表示功率模式。
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.getSupportedPowerMode
   */
  function getSupportedPowerModel(): Promise<Array<PowerModel>>;

  /**
   * 获取支持的功率模式。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<Array<PowerModel>> } callback - 回调函数。当操作成功时，err为0，data表示支持的功率模式。如果err为非0，表示处理出现错误。
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.getSupportedPowerMode
   */
  function getSupportedPowerModel(callback: AsyncCallback<Array<PowerModel>>): void;

  /**
   * 获取功率模式，使用Promise异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<PowerModel> } Promise对象。表示功率模式。
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.getPowerMode
   */
  function getPowerModel(): Promise<PowerModel>;

  /**
   * 获取功率模式。使用callback异步回调。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<PowerModel> } callback - 回调函数。当操作成功时，err为0，data表示功率模式。如果err为非0，表示处理出现错误。
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.getPowerMode
   */
  function getPowerModel(callback: AsyncCallback<PowerModel>): void;

  /**
   * 设置功率模式。
   * 
   * > **说明：**
   * >
   * > 从API version 8开始支持，从API version 9开始废弃。
   *
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @param { PowerModel } model - 功率模式。
   * @returns { boolean } 操作结果， true: 成功， false: 失败。
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.setPowerMode
   */
  function setPowerModel(model: PowerModel): boolean;

  /**
   * 表示功率模式的枚举。
   *
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.PowerMode
   */
  export enum PowerModel {
    /**
     * 睡眠模式。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Extension
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManagerExt/wifiManagerExt.PowerMode
     */
    SLEEPING = 0,

    /**
     * 常规模式。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Extension
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManagerExt/wifiManagerExt.PowerMode
     */
    GENERAL = 1,

    /**
     * 穿墙模式。
     *
     * @syscap SystemCapability.Communication.WiFi.AP.Extension
     * @since 8 dynamiconly
     * @deprecated since 9
     * @useinstead ohos.wifiManagerExt/wifiManagerExt.PowerMode
     */
    THROUGH_WALL = 2,
  }
}

export default wifiext;