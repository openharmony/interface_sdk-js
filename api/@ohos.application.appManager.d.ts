/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './basic';
import { ProcessRunningInfo } from './application/ProcessRunningInfo';

/**
 * This module provides the function of app manager service.
 *
 * @since 8
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @import import appManager from '@ohos.application.appManager'
 * @permission N/A
 */
declare namespace appManager {
     /**
     * Is user running in stability test.
     *
     * @since 8
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @return Returns true if user is running stability test.
     */
      function isRunningInStabilityTest(callback: AsyncCallback<boolean>): void;
      function isRunningInStabilityTest(): Promise<boolean>;

    /**
    * Get information about running processes
    *
    * @since 8
    * @syscap SystemCapability.Ability.AbilityRuntime.Core
    * @return Returns the array of {@link ProcessRunningInfo}.
    * @permission ohos.permission.GET_RUNNING_INFO
    */
    function getProcessRunningInfos(): Promise<Array<ProcessRunningInfo>>;
    function getProcessRunningInfos(callback: AsyncCallback<Array<ProcessRunningInfo>>): void;

    /**
     * Is it a ram-constrained device
     * @since 7
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @return whether a ram-constrained device.
     */
    function isRamConstrainedDevice(): Promise<boolean>;
    function isRamConstrainedDevice(callback: AsyncCallback<boolean>): void;

    /**
     * Get the memory size of the application
     * @since 7
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @return application memory size.
     */
    function getAppMemorySize(): Promise<number>;
    function getAppMemorySize(callback: AsyncCallback<number>): void;
}

export default appManager;
