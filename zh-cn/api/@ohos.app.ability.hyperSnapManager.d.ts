/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file 应用快启管理
 * @kit AbilityKit
 */

/**
 * # 实现原理
 * 
 * 应用快启只会初始化一次，快启启动可以省去应用初始化和AbilityStage创建所需的时间。
 * 
 * **图1** 快启启动流程
 * 
 * ![Snapshot-Start](./figures/Snapshot-Start.png)
 */
/**
 * 应用启动过程中的初始化流程可以提前进行快启初始化，快启启动的应用不再重复执行初始化流程，从而起到加速启动的作用。hyperSnapManager模块提供应用快启管理的能力，包括启用或禁用应用的快启功能、请求重新初始化应用快启等。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 24 dynamic&static
 */
declare namespace hyperSnapManager {
    /**
     * 枚举Hyper Snap错误类型。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    export enum HyperSnapErrorType {
        /**
         * 创建快照过程中出现的错误类型。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        CREATE_SNAPSHOT = 0,

        /**
         * 从快照生成进程期间发生的错误类型。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        FORK_FROM_SNAPSHOT = 1
    }

    /**
     * 枚举Hyper Snap错误码。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    export enum HyperSnapErrorCode {
        /**
         * 成功。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_OK = 0,

        /**
         * 系统内部错误。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_SYSTEM_INNER = 1,

        /**
         * 快照已存在。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_SNAPSHOT_EXIST = 2,

        /**
         * 准备创建快照时，进程已在运行。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_PROCESS_IS_RUNNING = 3,

        /**
         * 创建快照的进程在操作过程中被kill掉。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_SNAPSHOT_PROCESS_IS_DIED = 4,

        /**
         * 由于用户启动了应用程序，快照创建被中断。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_SNAPSHOT_IS_INTERRUPTED = 5,

        /**
         * 存在非法的Binder。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_EXISTS_ILLEGAL_BINDER = 6,

        /**
         * 上一个进程没有完全退出。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_LAST_PROCESS_NOT_FULLY_EXITED = 7
    }

    /**
     * 描述Hyper Snap的错误信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    export interface HyperSnapErrorInfo {
        /**
         * 错误码。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        code: HyperSnapErrorCode;

        /**
         * 错误消息。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        msg: string;

        /**
         * 自发生错误时Unix历元以来经过的时间。
         * 单位为：毫秒。取值限定为整数。
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        occurTimeStamp: long;
    }

    /**
     * 启用或禁用应用的快启功能。
     * 
     * > **说明：**
     * >
     * > - 当通过本接口启用应用快启功能时，系统最终会根据应用兼容性、资源可用性和系统策略来决定是否创建或使用快启。当通过本接口禁用快启功能时，可以保证系统不会创建快启。
     * >
     * > - 设置的值会在重启后保持。
     *
     * @param { boolean } enableFlag - 表示快启功能开关标志。 
     *     <br>- `true`：表示启用快启功能（系统将最终决策是否创建快启）。 
     *     <br>- `false`：禁用应用快启功能。
     * @throws { BusinessError } 16000150 - Failed to send request to system service.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    function setHyperSnapEnabled(enableFlag: boolean): void;

    /**
     * 请求重新初始化应用快启。
     * 
     * 此方法会销毁当前进程已经初始化的快启数据，系统将在合适的时机重新进行快启初始化。
     *
     * @throws { BusinessError } 16000150 - Failed to send request to system service.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    function requestRebuildHyperSnap(): void;

    /**
     * 获取指定场景下当前应用的最后一次Hyper Snap错误信息。
     * 每个场景的错误信息独立存储，并在请求成功后清除。
     * 设备重启后，所有错误信息都会被清除。
     *
     * @param { HyperSnapErrorType } errType - Hyper Snap错误类型。
     * @returns { Promise<HyperSnapErrorInfo> } Promise用于返回错误信息。
     * @throws { BusinessError } 16000050 - Connect to system service failed.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    function getLastError(errType: HyperSnapErrorType): Promise<HyperSnapErrorInfo>;
}
export default hyperSnapManager;