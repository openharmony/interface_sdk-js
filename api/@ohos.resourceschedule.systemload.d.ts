/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file System Load Level Management
 * @kit BasicServicesKit
 */

import type { Callback } from './@ohos.base';

/**
 * The **systemload** module allows the system to determine the system load level based on the current temperature,
 * load, and scenario, and notifies registered applications of level changes, if any.
 *
 * @syscap SystemCapability.ResourceSchedule.SystemLoad
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace systemLoad {
    /**
     * Enumerates system load levels.
     *
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 12 dynamic
     * @since 23 static
     */
    export enum SystemLoadLevel {
        /**
         * The device temperature and load are low.
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        LOW = 0,
        /**
         * The device temperature and load are normal but are approaching the medium range. You need to downgrade
         * or reduce the load of imperceptible services.
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        NORMAL = 1,
        /**
         * One or more device temperature or load items are slightly high, or the device temperature is in the medium
         * range but the load is high. You need to stop or delay some imperceptible services.
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        MEDIUM = 2,
        /**
         * The device temperature and load are relatively high. You need to stop all imperceptible services and
         * downgrade or reduce the load of non-critical services.
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        HIGH = 3,
        /**
         * The device temperature and load are high, and the device is overheated. You need to stop all imperceptible
         * services and downgrade or reduce the load of major foreground services.
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        OVERHEATED = 4,
        /**
         * The device is overheated or heavily loaded and is about to enter the Warning state. You need to stop all
         * imperceptible services and downgrade major foreground services to the maximum extent.
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        WARNING = 5,
        /**
         * The device is overheated or significantly heavy loaded and is about to enter the Emergency state.
         * You need to stop all services except those for fundamental use.
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        EMERGENCY = 6,
        /**
         * The device is overheated or extremely heavy loaded and is about to enter the Escape state.
         * You need to stop all services and take necessary emergency measures such as data backup.
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        ESCAPE = 7
    }

    /**
     * Enables listening for system load level changes. This API uses an asynchronous callback to return the result.
     *
     * @param { 'systemLoadChange' } type - Change type. This parameter has a fixed value of **systemLoadChange**.
     * @param { Callback<SystemLoadLevel> } callback - Callback used to return the system load level.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
     *     <br> 2. Register a exist callback type; 3. Parameter verification failed.
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 12 dynamic
     */
    function on(type: 'systemLoadChange', callback: Callback<SystemLoadLevel>): void;

    /**
     * Register system load callback for perception system load change
     * @param { Callback<SystemLoadLevel> } callback Asynchronous callback interface.
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 23 static
     */
    function onSystemLoadChange(callback: Callback<SystemLoadLevel>): void;

    /**
     * Disables listening for system load level changes. This API uses an asynchronous callback to return the result.
     *
     * @param { 'systemLoadChange' } type - Change type. This parameter has a fixed value of **systemLoadChange**.
     * @param { Callback<SystemLoadLevel> } callback - Callback used to return the system load level.
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
     * <br> 2. Unregister type has not register; 3. Parameter verification failed.
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 12 dynamic
     */
    function off(type: 'systemLoadChange', callback?: Callback<SystemLoadLevel>): void;

    /**
     * Unregister system load callback for perception system load change
     * @param { Callback<SystemLoadLevel> } callback Asynchronous callback interface.
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 23 static
     */
    function offSystemLoadChange(callback?: Callback<SystemLoadLevel>): void;

    /**
     * Obtains the system load level. This API uses a promise to return the result.
     *
     * @returns { Promise<SystemLoadLevel> } Promise used to return the system load level.
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 12 dynamic
     * @since 23 static
     */
    function getLevel(): Promise<SystemLoadLevel>;
}
export default systemLoad;