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
 * @file
 * @kit BackgroundTasksKit
 * @arkts 1.1&1.2
 */

/**
 * Declares the BackgroundProcessManager interfaces.
 *
 * @namespace backgroundProcessManager
 * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
 * @since arkts{ '1.1':'17','1.2':'20'}
 * @arkts 1.1&1.2
 */
declare namespace backgroundProcessManager {
    /**
     * Describes the level of BackgroundProcessManager priority.
     *
     * @enum { int }
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @since arkts{ '1.1':'17','1.2':'20'}
     * @arkts 1.1&1.2
     */
    export enum ProcessPriority {
        /**
         * Means the process has stopped working and in the background
         *
         * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
         * @since arkts{ '1.1':'17','1.2':'20'}
         * @arkts 1.1&1.2
         */
        PROCESS_BACKGROUND = 1,

        /**
         * Means the process is working in the background
         *
         * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
         * @since arkts{ '1.1':'17','1.2':'20'}
         * @arkts 1.1&1.2
         */
        PROCESS_INACTIVE = 2,
    }

    /**
     * Set the priority of process.
     *
     * @param { int } pid - Indicates the pid of the process to be set.
     * @param { ProcessPriority } priority - Indicates the priority to set. Specific priority can be referenced ProcessPriority
     * @returns { Promise<void> } The promise returned by the function.
     * @throws { BusinessError } 401 - Parameter error. Possible causes: priority is out of range.
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @since arkts{ '1.1':'17','1.2':'20'}
     * @arkts 1.1&1.2
     */
    function setProcessPriority(pid: int, priority: ProcessPriority): Promise<void>;

    /**
     * Reset the priority of process.
     *
     * @param { int } pid - Indicates the pid of the process to be reset.
     * @returns { Promise<void> } The promise returned by the function.
     * @syscap SystemCapability.Resourceschedule.BackgroundProcessManager
     * @since arkts{ '1.1':'17','1.2':'20'}
     * @arkts 1.1&1.2
     */
    function resetProcessPriority(pid: int): Promise<void>;
}

export default backgroundProcessManager;
