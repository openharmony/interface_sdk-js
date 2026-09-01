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
 * @file 性能功耗热融合档位
 * @kit BasicServicesKit
 */

import type { Callback } from './@ohos.base';

/**
 * 系统根据当前温度、负载以及是否处于高负载场景等信息决策出系统负载融合档位，并在档位变化时通知已注册的应用。
 *
 * @syscap SystemCapability.ResourceSchedule.SystemLoad
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace systemLoad {
    /**
     * 系统负载融合档位。
     *
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 12 dynamic
     * @since 23 static
     */
    export enum SystemLoadLevel {
        /**
         * 设备当前温度、负载比较低，无高负载场景。
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        LOW = 0,
        /**
         * 设备温度、负载正常，但邻近中等状态，无感知业务应降低规格和负载。
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        NORMAL = 1,
        /**
         * 设备温度、负载有一项或多项稍高，或者当前处于高负载场景，无感知业务应暂停或延迟运行。
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        MEDIUM = 2,
        /**
         * 设备当前发热明显或负载比较高，或处于负载温度中等但处于高负载场景，无感知业务应停止，非关键业务应降低规格及负载。
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        HIGH = 3,
        /**
         * 设备发热严重或者负载较重，无感知业务与非关键业务应停止，前台关键业务应降低规格及负载。
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        OVERHEATED = 4,
        /**
         * 设备过热或负载过重，或者温度较高但处于高负载场景，即将进入紧急状态，整机资源供给大幅降低，停止所有非关键，前台关键业务应降低至最低规格。
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        WARNING = 5,
        /**
         * 设备已经进入过热状态或负载极高紧急状态，或接近紧急状态但处于高负载场景，整机资源供给降至最低，设备功能受限，仅保留基础功能可用。
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        EMERGENCY = 6,
        /**
         * 设备即将进入热逃生状态或当前负载已经不堪重负，或已经处于紧急状态且高负载状态，所有业务将被强制停止，业务需做好逃生措施，例如保存重要数据等。
         * 
         * @syscap SystemCapability.ResourceSchedule.SystemLoad
         * @since 12 dynamic
         * @since 23 static
         */
        ESCAPE = 7
    }

    /**
     * 注册系统负载回调，感知系统负载融合档位变化，使用callback异步回调。
     *
     * @param { 'systemLoadChange' } type - 固定取值'systemLoadChange'，系统负载变化类型。
     * @param { Callback<SystemLoadLevel> } callback - 回调函数，返回本次注册系统负载时的系统负载融合档位。
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
     * 取消注册系统负载回调，使用callback异步回调。
     *
     * @param { 'systemLoadChange' } type - 固定取值'systemLoadChange'，系统负载变化类型。
     * @param { Callback<SystemLoadLevel> } callback - 回调函数，返回本次取消注册系统负载时的系统负载融合档位。
     * @throws { BusinessError } 401 - Parameter error. Possible cause: 1. Callback parameter error;
     *     <br> 2. Unregister type has not register; 3. Parameter verification failed.
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
     * 获取系统负载融合档位，使用promise异步回调。
     *
     * @returns { Promise<SystemLoadLevel> } Promise对象，返回系统负载融合档位。
     * @syscap SystemCapability.ResourceSchedule.SystemLoad
     * @since 12 dynamic
     * @since 23 static
     */
    function getLevel(): Promise<SystemLoadLevel>;
}
export default systemLoad;