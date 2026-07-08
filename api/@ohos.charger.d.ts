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
 * The **charger** module enumerates charging types.
 *
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Core
 * @systemapi
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace charger {
  /**
   * Enumerates charging types.
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
    NONE,
    /**
     * Wired normal charging.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRED_NORMAL,
    /**
     * Wired fast charging.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRED_QUICK,
    /**
     * Wired super fast charging.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRED_SUPER_QUICK,
    /**
     * Wireless normal charging.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRELESS_NORMAL,
    /**
     * Wireless fast charging.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    WIRELESS_QUICK,
    /**
     * Wireless super fast charging.
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