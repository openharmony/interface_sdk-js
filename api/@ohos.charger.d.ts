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
 * Provides charger information includes type and protocol.
 *
 * @syscap SystemCapability.PowerManager.BatteryManager.Core
 * @since 10
 * @systemapi
 */
declare namespace charger {
    /**
     * Indicates the type of the charger plugged-in.
     *
     * @syscap SystemCapability.PowerManager.BatteryManager.Core
     * @since 10
     * @systemapi
     */
    export enum ChargeType {
        /**
         * Unknown type
         * @since 10
         * @systemapi
         */
        NONE,
        /**
         * Wired normal type
         * @since 10
         * @systemapi
         */
        WIRED_NORMAL,
        /**
         * Wired quick type
         * @since 10
         * @systemapi
         */
        WIRED_QUICK,
        /**
         * Wired super quick type
         * @since 10
         * @systemapi
         */
        WIRED_SUPER_QUICK,
        /**
         * Wireless normal type
         * @since 10
         * @systemapi
         */
        WIRELESS_NORMAL,
        /**
         * Wireless quick type
         * @since 10
         * @systemapi
         */
        WIRELESS_QUICK,
        /**
         * Wireless super quick type
         * @since 10
         * @systemapi
         */
        WIRELESS_SUPER_QUICK,
    }
}
export default charger;
