/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * @file 后台子进程管控
 * @kit BackgroundTasksKit
 */

/**
 * 本模块提供了后台子进程管控接口。开发者可以通过本模块接口对子进程进行压制、解压制，避免子进程过多占用系统资源，导致系统使用卡顿。本模块接口仅对通过
 * [OH_Ability_StartNativeChildProcess](docroot://reference/apis-ability-kit/capi-native-child-process-h.md#oh_ability_startnativechildprocess)
 * 接口创建的子进程生效。
 *
 * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
 * @since 17 dynamic
 * @since 23 static
 */
declare namespace backgroundProcessManager {
    /**
     * 子进程压制档位。
     *
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @since 17 dynamic
     * @since 23 static
     */
    export enum ProcessPriority {
        /**
         * 该档位相较PROCESS_INACTIVE压制效果更显著，获取到的CPU资源更少。推荐执行处于后台的图文页面等用户无感知业务的后台子进程时设置该档位。
         *
         * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
         * @since 17 dynamic
         * @since 23 static
         */
        PROCESS_BACKGROUND = 1,

        /**
         * 推荐正在执行播放音频、导航等用户可感知业务的后台子进程时设置该档位。
         *
         * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
         * @since 17 dynamic
         * @since 23 static
         */
        PROCESS_INACTIVE = 2,
    }

    /**
     * 能效模式。
     *
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @since 20 dynamic
     * @since 23 static
     */
    export enum PowerSaveMode {
        /**
         * 效率模式，不会跟随系统进入能效模式，进入能效模式后获取到的CPU资源更少。
         *
         * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
         * @since 20 dynamic
         * @since 23 static
         */
        EFFICIENCY_MODE = 1,

        /**
         * 跟随系统，可能会进入能效模式。
         *
         * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
         * @since 20 dynamic
         * @since 23 static
         */
        DEFAULT_MODE = 2,
    }

    /**
     * 设置子进程的压制档位，子进程被压制后可获得的CPU资源将会受到限制。如果主进程调度策略发生变化，如从后台切至前台等，子进程会跟随主进程一同变化，子进程如需继续压制，需要重新调用本接口。使用Promise异步回调。
     *
     * @param { int } pid - 需要被压制子进程的进程号，
     *     [OH_Ability_StartNativeChildProcess](docroot://reference/apis-ability-kit/capi-native-child-process-h.md#oh_ability_startnativechildprocess)
     *     接口创建子进程后的pid参数，即为子进程进程号。
     * @param { ProcessPriority } priority - 压制档位。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 401 - Parameter error. Possible causes: priority is out of range.
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @since 17 dynamic
     * @since 23 static
     */
    function setProcessPriority(pid: int, priority: ProcessPriority): Promise<void>;

    /**
     * 为子进程解压制，即子进程策略恢复为主进程调度策略。若主进程调度策略发生变化，如从后台切至前台等， 子进程会跟随主进程一同变化，等效于执行一次resetProcessPriority动作。使用Promise异步回调。
     *
     * @param { int } pid - 子进程的进程号，
     *     [OH_Ability_StartNativeChildProcess](docroot://reference/apis-ability-kit/capi-native-child-process-h.md#oh_ability_startnativechildprocess)
     *     接口创建子进程后的pid参数，即为子进程进程号。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @since 17 dynamic
     * @since 23 static
     */
    function resetProcessPriority(pid: int): Promise<void>;

    /**
     * 设置进程的能效模式，使用Promise异步回调。
     * 
     * 当应用满足以下条件时，可以设置自身是否进入能效模式：
     * 
     * - 应用未获取系统焦点，未执行音频或界面刷新操作。
     * - 无法通过框架层获取电源锁。
     * - 应用需要执行压缩、解压缩、编译等耗时较长的计算任务，不希望这些任务受到显著的CPU资源限制（即被迫进入能效模式）。
     *
     * @permission ohos.permission.BACKGROUND_MANAGER_POWER_SAVE_MODE
     * @param { int } pid - 进程号。
     * @param { PowerSaveMode } powerSaveMode - 能效模式。
     * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 31800002 - Parameter error. Possible causes:
     *     <br>  1. Mandatory parameters are left unspecified;
     *     <br>  2. Incorrect parameter types; 3. PowerSaveMode status is out of range.
     * @throws { BusinessError } 31800003 - Setup error, This setting is overridden by settings in Task Manager
     * @throws { BusinessError } 31800004 - The setting failed due to system scheduling reasons.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @since 20 dynamic
     * @since 23 static
     */
    function setPowerSaveMode(pid: int, powerSaveMode: PowerSaveMode): Promise<void>;

    /**
     * 查询进程是否处于能效模式，使用Promise异步回调。
     *
     * @permission ohos.permission.BACKGROUND_MANAGER_POWER_SAVE_MODE
     * @param { int } pid - 进程号。
     * @returns { Promise<boolean> } Promise对象。返回进程PID是否处于能效模式，返回true表示进程处于能效模式，返回false表示进程未处于能效模式。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 31800002 - Parameter error. Possible causes:
     *     <br> 1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @since 20 dynamic
     * @since 23 static
     */
    function isPowerSaveMode(pid: int): Promise<boolean>;

    /**
     * 获取进程能效模式。使用Promise异步回调。
     *
     * @permission ohos.permission.BACKGROUND_MANAGER_POWER_SAVE_MODE
     * @param { int } pid - 进程号。<br>取值范围：大于0的整数。
     * @returns { Promise<PowerSaveMode> } Promise对象。返回进程能效模式状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 31800002 - Parameter error. Possible causes:
     *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types;
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @since 23 dynamic&static
     */
    function getPowerSaveMode(pid: int): Promise<PowerSaveMode>;
}

export default backgroundProcessManager;