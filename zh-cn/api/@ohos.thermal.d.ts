/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * 该模块提供热管理相关的接口，包括热档位查询及注册回调等功能。
 *
 * @syscap SystemCapability.PowerManager.ThermalManager
 * @since 8 dynamic
 * @since 23 static
 */
declare namespace thermal {
  /**
   * 热档位信息。
   *
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 8 dynamic
   * @since 23 static
   */
  export enum ThermalLevel {
    /**
     * 表明设备处于清凉状态，业务执行不受热控的限制。
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    COOL = 0,
    /**
     * 表明设备温度正常，但邻近温热状态，无感知业务应降低规格和负载。
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    NORMAL = 1,
    /**
     * 表明设备进入温热状态，无感知业务应暂停或延迟运行。
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    WARM = 2,
    /**
     * 表明设备发热明显，无感知业务应停止，非关键业务应降低规格及负载。
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    HOT = 3,
    /**
     * 表明设备发热严重，无感知业务与非关键业务应停止，前台关键业务应降低规格及负载。
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    OVERHEATED = 4,
    /**
     * 表明设备过热即将进入紧急状态，整机资源供给大幅降低，停止所有非关键业务，前台关键业务应降低至最低规格。
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    WARNING = 5,
    /**
     * 表明设备已经进入过热紧急状态，整机资源供给降至最低，设备功能受限，仅保留基础功能可用。
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 8 dynamic
     * @since 23 static
     */
    EMERGENCY = 6,
    /**
     * 表明设备即将进入热逃生状态，所有业务将被强制停止，业务需做好逃生措施，例如保存重要数据等。 
     * 
     * **说明**: 从API version 11开始支持。
     *
     * @syscap SystemCapability.PowerManager.ThermalManager
     * @since 11 dynamic
     * @since 23 static
     */
    ESCAPE = 7
  }

  /**
   * 订阅热档位变化时的回调提醒。使用callback异步回调。
   *
   * @param { AsyncCallback<ThermalLevel> } callback - 回调函数。AsyncCallback只返回一个参数，为热档位信息。
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead thermal.registerThermalLevelCallback
   */
  function subscribeThermalLevel(callback: AsyncCallback<ThermalLevel>): void;

  /**
   * 订阅热档位变化时的回调提醒。使用callback异步回调。
   *
   * @param { Callback<ThermalLevel> } callback - 回调函数，返回变化后的热档位；该参数是一个函数类型。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 9 dynamic
   * @since 23 static
   */
  function registerThermalLevelCallback(callback: Callback<ThermalLevel>): void;

  /**
   * 取消订阅热档位变化时的回调提醒。使用callback异步回调。
   *
   * @param { AsyncCallback<void> } callback - 回调函数，无返回值。不填该参数则取消所有回调。
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead thermal.unregisterThermalLevelCallback
   */
  function unsubscribeThermalLevel(callback?: AsyncCallback<void>): void;

  /**
   * 取消订阅热档位变化时的回调提醒。使用callback异步回调。
   *
   * @param { Callback<void> } callback - 可选参数，回调函数，无返回值。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Incorrect parameter types;
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 9 dynamic
   * @since 23 static
   */
  function unregisterThermalLevelCallback(callback?: Callback<void>): void;

  /**
   * 获取当前热档位信息。
   *
   * @returns { ThermalLevel } 热档位信息。
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead thermal.getLevel
   */
  function getThermalLevel(): ThermalLevel;

  /**
   * 获取当前热档位信息。
   *
   * @returns { ThermalLevel } 热档位信息。
   * @syscap SystemCapability.PowerManager.ThermalManager
   * @since 9 dynamic
   * @since 23 static
   */
  function getLevel(): ThermalLevel;
}

export default thermal;