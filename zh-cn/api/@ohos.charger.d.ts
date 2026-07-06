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

/**
 * 提供充电类型。
 * 
 * > **说明：**
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace charger {
  /**
   * 表示充电类型的枚举。
   *
   * @syscap SystemCapability.PowerManager.BatteryManager.Core
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  export enum ChargeType {
    /**
     * 表示未知类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    NONE,
    /**
     * 表示有线正常充电类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRED_NORMAL,
    /**
     * 表示有线快速充电类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRED_QUICK,
    /**
     * 表示有线超级快速充电类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRED_SUPER_QUICK,
    /**
     * 表示无线正常充电类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRELESS_NORMAL,
    /**
     * 表示无线快速充电类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRELESS_QUICK,
    /**
     * 表示无线超级快速充电类型。
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRELESS_SUPER_QUICK
  }
}

export default charger;