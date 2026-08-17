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
 * @namespace wifiext
 * @syscap SystemCapability.Communication.WiFi.AP.Extension
 * @since 8 dynamiconly
 */
declare namespace wifiext {
  /**
   * 使能WLAN热点。
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
   * 去使能WLAN热点。
   * @permission ohos.permission.MANAGE_WIFI_HOTSPOT_EXT
   * @returns { boolean } 操作结果， true: 成功， false: 失败。
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.disableHotspot
   */
  function disableHotspot(): boolean;

  /**
   * 获取支持的功率模式。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<Array<PowerModel>> } 返回支持的功率模式数组。
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.getSupportedPowerMode
   */
  function getSupportedPowerModel(): Promise<Array<PowerModel>>;

  /**
   * 获取支持的功率模式。
   * @permission ohos.permission.GET_WIFI_INFO
   * @param { AsyncCallback<Array<PowerModel>> } callback - 回调函数。当操作成功时，err为0，data表示支持的功率模式。如果err为非0，表示处理出现错误。
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.getSupportedPowerMode
   */
  function getSupportedPowerModel(callback: AsyncCallback<Array<PowerModel>>): void;

  /**
   * 获取功率模式。
   * @permission ohos.permission.GET_WIFI_INFO
   * @returns { Promise<PowerModel> } 返回当前的WLAN功率模式。返回值小于零表示失败。
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.getPowerMode
   */
  function getPowerModel(): Promise<PowerModel>;

  /**
   * 获取功率模式。
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
   * @enum { number } PowerModel
   * @syscap SystemCapability.Communication.WiFi.AP.Extension
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.wifiManagerExt/wifiManagerExt.PowerMode
   */
  export enum PowerModel {
    /** 
    * 睡眠模式。
    * @syscap SystemCapability.Communication.WiFi.AP.Extension
    * @since 8 dynamiconly
    * @deprecated since 9
    * @useinstead ohos.wifiManagerExt/wifiManagerExt.PowerMode
    */
    SLEEPING = 0,

    /** 
    * 常规模式。
    * @syscap SystemCapability.Communication.WiFi.AP.Extension
    * @since 8 dynamiconly
    * @deprecated since 9
    * @useinstead ohos.wifiManagerExt/wifiManagerExt.PowerMode
    */
    GENERAL = 1,

    /** 
    * 穿墙模式。
    * @syscap SystemCapability.Communication.WiFi.AP.Extension
    * @since 8 dynamiconly
    * @deprecated since 9
    * @useinstead ohos.wifiManagerExt/wifiManagerExt.PowerMode
    */
    THROUGH_WALL = 2,
  }
}

export default wifiext;
