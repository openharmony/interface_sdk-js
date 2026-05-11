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
     * Unknown charging type.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    NONE = 0,
    /**
     * Wired normal charging.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRED_NORMAL = 1,
    /**
     * Wired fast charging.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRED_QUICK = 2,
    /**
     * Wired super fast charging.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRED_SUPER_QUICK = 3,
    /**
     * Wireless normal charging.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRELESS_NORMAL = 4,
    /**
     * Wireless fast charging.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRELESS_QUICK = 5,
    /**
     * Wireless super fast charging.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRELESS_SUPER_QUICK = 6
  }
}

export default charger;