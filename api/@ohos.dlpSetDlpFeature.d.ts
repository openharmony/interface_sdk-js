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
 * @kit DataProtectionKit
 */

/**
 * Provides the capability to set the DLP feature info.
 *
 * @namespace dlpSetDlpFeature
 * @syscap SystemCapability.Security.DataLossPrevention
 * @since 26
 */
declare namespace dlpSetDlpFeature {

    /**
     * For setting up DLP feature status info.
     * 
     * @interface Info
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 26
     */
    export interface StatusInfoResult {
        /**
         * Whether the DLP information is set successfully.
         * 
         * @type { boolean }
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 26
         */
        isSuccess: boolean;
    }

    /**
     * For setting up DLP feature status.
     * 
     * @enum { number } DlpFeatureStatus
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 26
     */
    export enum DlpFeatureStatus {
        /**
         * Not enabled DLP feature.
         * 
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 26
         */
        NOT_ENABLED_FEATURE = 0,
        /**
         * Enabled DLP feature.
         * 
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 26
         */
        ENABLED_FEATURE = 1
    }

    /**
     * For setting up DLP feature status info.
     * 
     * @interface DLPFeatureInfo
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 26
     */
    export interface DLPFeatureInfo {
        /**
         * Feature info  for the DLP.
         * 
         * @type { DlpFeatureStatus }
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 26
         */
        dlpFeatureStatus: DlpFeatureStatus;
    }

    /**
     * Set Dlp feature status. This method uses a promise to return the result.
     * 
     * @param { DLPFeatureStatus } status - Indicates the DLP feature status.
     * @return { Promise<StatusInfoResult> } Returns the { @link StatusInfoResult }.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnomally.
     * @since 26
     */
    export function setDlpFeature(status: DlpFeatureStatus): Promise<StatusInfoResult>;
}

export default dlpSetDlpFeature;