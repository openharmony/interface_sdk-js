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
     * @throws { BusinessError } 16000150 -  Failed to send request to system service.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    function requestRebuildHyperSnap(): void;
}

export default hyperSnapManager;