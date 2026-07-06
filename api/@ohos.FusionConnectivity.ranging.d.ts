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
 * @file Ranging Module
 * @kit ConnectivityKit
 */

import type { BusinessError, Callback } from './@ohos.base';

/**
 * Provides APIs for Fusion Connectivity ranging.
 *
 * @syscap SystemCapability.Communication.FusionConnectivity.Core
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace ranging {
    /**
     * Checks whether the current device supports the ranging feature.
     *
     * @returns { boolean } true indicates that the device supports the ranging capability,
     *     and false indicates that the device does not support the ranging capability.
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    function isRangingSupported(): boolean;

    /**
     * Queries whether the current device supports ranging capability.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<RangingCapabilitySupported> } Promise used to return the result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 34900053 - The ranging service is disabled.
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    function getRangingCapability(): Promise<RangingCapabilitySupported>;

    /**
     * Initiates ranging with a specified device.
     * If the link to the target device is already established, ranging starts directly.
     * If not connected, this interface will:
     *     1. Attempt to establish connection and perform pairing/encryption.
     *     2. Query service to verify the device supports ranging. Initiate ranging upon confirmation.
     * Ranging state updates are notified via onRangingStateChange callback.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { RangingParams } params - Parameters for ranging.
     * @param { Callback<RangingResult> } callback - Indicates the callback for reporting the ranging result.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 34900051 - The device has already initiated ranging.
     * @throws { BusinessError } 34900052 - The specified type of ranging service is not supported.
     * @throws { BusinessError } 34900053 - The ranging service is disabled.
     * @throws { BusinessError } 34900054 - The parameter value does not meet specifications.
     * @throws { BusinessError } 34900099 - Internal system error. For example, Internal object is invalid.
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    function startRanging(params: RangingParams, callback: Callback<RangingResult>): void;

    /**
     * Stops ongoing ranging operations.
     * If no target device is specified, stops ranging for all devices associated with the callback.
     * If a target device is specified, only stops ranging for that specific device.
     * This method also releases all occupied resources. For proper resource management,
     * stopRanging must be called after startRanging to avoid resource leaks.
     * State changes are notified via the onRangingStateChange callback.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<RangingResult> } callback - Callback used to return the ranging result.
     * @param { RangingParams } [params] - Parameters for ranging include deviceId and ranging types.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 34900050 - The device has not initiated ranging.
     * @throws { BusinessError } 34900052 - The specified type of ranging service is not supported.
     * @throws { BusinessError } 34900054 - The parameter value does not meet specifications.
     * @throws { BusinessError } 34900099 - Internal system error. For example, Internal object is invalid.
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    function stopRanging(callback: Callback<RangingResult>, params?: RangingParams): void;

    /**
     * Starts passive ranging mode.
     *
     * Upon successful startup, returns a handle identifier for the passive ranging session
     * and begins broadcasting ranging packets.
     *
     * The returned handle can be used to stop the passive ranging broadcast via stopPassiveRanging.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { RangingTypes } capabilityType - Indicates the capability type for ranging.
     * @returns { Promise<int> } Promise used to return the handle for starts ranging listening.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 34900052 - The specified type of ranging service is not supported.
     * @throws { BusinessError } 34900053 - The ranging service is disabled.
     * @throws { BusinessError } 34900099 - Internal system error. For example, Internal object is invalid.
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    function startPassiveRanging(capabilityType: RangingTypes): Promise<int>;

    /**
     * Stops passive ranging mode.
     *
     * Stops the passive ranging broadcast and cleans up associated resources
     * based on the specified handle and ranging capability type.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { int } handle - Indicates the handle number of ranging monitoring.
     * @param { RangingTypes } capabilityType - Indicates the capability type for ranging.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 34900052 - The specified type of ranging service is not supported.
     * @throws { BusinessError } 34900054 - The parameter value does not meet specifications.
     * @throws { BusinessError } 34900099 - Internal system error. For example, Internal object is invalid.
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    function stopPassiveRanging(handle: int, capabilityType: RangingTypes): void;

    /**
     * Registers a callback to receive ranging state change notifications.
     *
     * Notifies state changes for both active ranging and passive ranging operations.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<RangingStateChangeInfo> } callback - Callback used to listen for the ranging state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 34900099 - Internal system error. For example, Internal object is invalid. 
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    function onRangingStateChange(callback: Callback<RangingStateChangeInfo>): void;

    /**
     * Unsubscribe from ranging state change events.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @param { Callback<RangingStateChangeInfo> } [callback] - Callback used to listen to the ranging state.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 34900099 - Internal system error. For example, Internal object is invalid.
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    function offRangingStateChange(callback?: Callback<RangingStateChangeInfo>): void;

    /**
     * Parameters for ranging operation.
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    interface RangingParams {    
        /**
         * Address of the ranging device.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        deviceId: string;
        /**
         * Indicates the capability type for ranging.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        capabilityType: RangingTypes;
    }

    /**
     * Describes the ranging state change information.
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    interface RangingStateChangeInfo {    
        /**
         * Ranging state.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        state: RangingState;
        /**
         * Cause of ranging stop.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        cause: RangingStoppedCause;
        /**
         * Address of the ranging device.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        deviceId?: string;
        /**
         * Indicates the handle number of ranging monitoring.
         * The value should be an integer.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        handle?: int;
    }

    /**
     * Describes the contents of the ranging results.
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    interface RangingResult {    
        /**
         * Address of the ranging device.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        deviceId: string;
        /**
         * The distance measured by the ranging output.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        distance: RangingMeasurement;
        /**
         * Azimuth angle output from ranging.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        angle: RangingMeasurement;
        /**
         * Received signal strength.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        rssi: int;
    }

    /**
     * Describes the contents of the ranging support types.
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    interface RangingCapabilitySupported {    
        /**
         * Indicates whether the Nearlink HADM ranging type supported.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        nearlinkHadm: boolean;
    }

    /**
     * Describes the measurement result.
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    interface RangingMeasurement {    
        /**
         * Measurement result value. The value is expressed in centimeters.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        value: int;
        /**
         * Confidence level of measurement results.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        confidence: RangingConfidence;
    }

    /**
     * The enumeration of ranging capability types.
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enum RangingTypes {    
        /**
         * Nearlink HADM ranging type. This process will trigger automatic link establishment.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        NEARLINK_HADM = 1
    }

    /**
     * The enum of ranging state.
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enum RangingState {    
        /**
         * The current ranging state is stopped.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        RANGING_STOPPED = 0,
        /**
         * The current ranging state is started.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        RANGING_STARTED = 1
    }

    /**
     * The enum of ranging stopped causes.
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enum RangingStoppedCause {    
        /**
         * No error.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        NO_ERROR = 0,
        /**
         * An internal error occurred.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        INTERNAL_ERROR = 1,
        /**
         * A service conflict occurs.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        BUSINESS_CONFLICT = 2,
        /**
         * Ranging is stopped when the app goes to background.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        BACKGROUND_PAUSED = 3
    }

    /**
     * The enum of ranging measurement confidence.
     *
     * @syscap SystemCapability.Communication.FusionConnectivity.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    enum RangingConfidence {    
        /**
         * High confidence measurement.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        HIGH = 0,
        /**
         * Medium confidence measurement.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        MEDIUM = 1,
        /**
         * low confidence measurement.
         *
         * @syscap SystemCapability.Communication.FusionConnectivity.Core
         * @stagemodelonly
         * @since 26.0.0 dynamic&static
         */
        LOW = 2
    }
}
export default ranging;
