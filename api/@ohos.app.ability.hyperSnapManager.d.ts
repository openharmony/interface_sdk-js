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
 * @file
 * @kit AbilityKit
 */

/**
 * This module provides the capability to manage HyperSnap.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.Core
 * @stagemodelonly
 * @since 24 dynamic&static
 */
declare namespace hyperSnapManager {
    /**
     * Enumerates the Hyper Snap error type.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    export enum HyperSnapErrorType {
        /**
         * Errors that occur during snapshot creation.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        CREATE_SNAPSHOT = 0,

        /**
         * Errors that occur during spawning a process from a snapshot.
         * 
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        FORK_FROM_SNAPSHOT = 1
    }

    /**
     * Enumerates the Hyper Snap error codes.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    export enum HyperSnapErrorCode {
        /**
         * No error.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_OK = 0,

        /**
         * Internal system error.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_SYSTEM_INNER = 1,

        /**
         * The snapshot already exists.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_SNAPSHOT_EXIST = 2,

        /**
         * A process is already running when preparing to create the snapshot.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_PROCESS_IS_RUNNING = 3,

        /**
         * The process used for snapshot creation was killed during the operation.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_SNAPSHOT_PROCESS_IS_DIED = 4,

        /**
         * Snapshot creation was interrupted because the user launched the application.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_SNAPSHOT_IS_INTERRUPTED = 5,

        /**
         * Illegal Binder exists.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_EXISTS_ILLEGAL_BINDER = 6,

        /**
         * The previous process did not exit completely.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        ERR_LAST_PROCESS_NOT_FULLY_EXITED = 7
    }

    /**
     * Describes the Hyper Snap error information.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    export interface HyperSnapErrorInfo {
        /**
         * The error code.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        code: HyperSnapErrorCode;

        /**
         * The error message.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        msg: string;

        /**
         * The time elapsed from the Unix epoch to the moment the error occurred.
         * Unit: milliseconds. The value should be an integer.
         *
         * @syscap SystemCapability.Ability.AbilityRuntime.Core
         * @stagemodelonly
         * @since 26.1.0 dynamic&static
         */
        occurTimeStamp: long;
    }

    /**
     * Enables or disables the Hyper Snap performance optimization for the application.
     * 
     * When enabled, the system will create a snapshot of the application process at an appropriate time.
     * Subsequent launched resume directly from this snapshot, bypassing the full cold start sequence,
     * resulting in significantly improved application launch performance.
     * 
     * **Notes:**
     * - The system ultimately determines whether to create or use snapshots based on
     *   application compatibility, resource availability, and system policies. Enabling this feature only
     *   indicates the application's readiness for optimization.
     * - Hyper Snap is enabled by default for applications meeting system compatibility requirements.
     * - If issues arise after enabling Hyper Snap, disable this feature to revert
     *   to standard cold start processes.
     * - Settings persist across reboots.
     * 
     * @param { boolean } enableFlag - Indicates the desired optimization state:
     *     - `true`: Indicates the application's compatibility with Hyper Snap optimization (system may
     *               apply when appropriate)
     *     - `false`: Disables Hyper Snap; uses standard cold-start process.
     * @throws { BusinessError } 16000150 - Failed to send request to system service.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    function setHyperSnapEnabled(enableFlag: boolean): void;

    /**
     * Requests the recreation of the Hyper Snap process snapshot for the application.
     * 
     * When compatibility issues arise with an existing snapshot, this method triggers destruction of the current
     * snapshot process. The system will subsequently generate a new snapshot at an optimal time to resolve
     * compatibility problems while maintaining launch performance benefits.
     * 
     * **Notes:**
     * - The system ultimately determines whether and when to recreate the snapshot. Invoking this method only submits
     *   a request; actual snapshot recreation depends on system policies and resource availability.
     * - Recreation occurs during optimal system idle periods to minimize performance impact.
     * - Primarily for resolving specific compatibility issues identified after initial snapshot creation.
     *   Most applications don't require manual intervention for snapshot management.
     * 
     * @throws { BusinessError } 16000150 -  Failed to send request to system service.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 24 dynamic&static
     */
    function requestRebuildHyperSnap(): void;

    /**
     * Gets the last Hyper Snap error information of the current application for a specified scenario.
     * Error information for each scenario is stored independently and cleared after a successful request.
     * All error information will be cleared when the device restarts.
     *
     * @param { HyperSnapErrorType } errType - Hyper Snap error type.
     * @returns { Promise<HyperSnapErrorInfo> } Promise used to return the error information.
     * @throws { BusinessError } 16000050 - Connect to system service failed.
     * @syscap SystemCapability.Ability.AbilityRuntime.Core
     * @stagemodelonly
     * @since 26.1.0 dynamic&static
     */
    function getLastError(errType: HyperSnapErrorType): Promise<HyperSnapErrorInfo>;
}
export default hyperSnapManager;
