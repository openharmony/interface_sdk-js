/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @file DLP
 * @kit DataProtectionKit
 */

/**
 * This module controls the Data Loss Prevention (DLP) feature, including enabling or disabling DLP and returning the 
 * DLP status.
 * 
 * **Use scenarios**
 * 
 * - Data security compliance requirements must be met.
 * - Access control and encryption protection are provided for confidential files.
 * 
 * > **NOTE**
 * > - The initial APIs of this module are supported since API version 26.0.0. Newly added APIs will be marked with a
 * > - superscript to indicate their earliest API version.
 * > - The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.Security.DataLossPrevention
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0
 */
declare namespace dlpSetDlpFeature {
    /**
     * Describes the DLP settings.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0
     */
    export interface StatusInfoResult {
        /**
         * Whether the DLP setting is successful. The value **true** indicates that the setting is successful, and the 
         * value **false** indicates that the setting fails.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0
         */
        isSuccess: boolean;
    }

    /**
     * Enumerates DLP statuses.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0
     */
    export enum DlpFeatureStatus {
        /**
         * DLP disabled.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0
         */
        NOT_ENABLED_FEATURE = 0,
        /**
         * DLP enabled.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0
         */
        ENABLED_FEATURE = 1
    }

    /**
     * Sets the DLP status.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0
     */
    export interface DLPFeatureInfo {
        /**
         * DLP status, which can be set to **NOT_ENABLED_FEATURE** or **ENABLED_FEATURE**.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0
         */
        dlpFeatureStatus: DlpFeatureStatus;
    }

    /**
     * Sets the DLP status. This API uses a promise to return the result. The system enables or disables the DLP 
     * protection function based on the DLP status specified using this API.
     * 
     * When this feature is enabled, right-click the file to be encrypted, and the encryption option is displayed in the
     * shortcut menu. Files in .txt, .pdf, .xls, .xlsx, .ppt, .pptx, .doc, and .docx formats can be encrypted.
     * 
     * This API is used to enable or disable the DLP function in enterprise policies.
     *
     * @param { DlpFeatureStatus } status - DLP status. The value **ENABLED_FEATURE** indicates the DLP feature is
     *     enabled, and the encryption option is displayed in the menu. The value **NOT_ENABLED_FEATURE**
     *     indicates the DLP feature is disabled, and the encryption option  is not displayed in the menu.
     *     If the value is out of range, error code 19100001 is thrown.
     * @returns { Promise<StatusInfoResult> } Promise used to return the DLP status that is set.
     * @throws { BusinessError } 202 - Non-system applications use system APIs.
     * @throws { BusinessError } 19100001 - Invalid parameter value.
     * @throws { BusinessError } 19100011 - The system ability works abnormally.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0
     */
    function setDlpFeature(status: DlpFeatureStatus): Promise<StatusInfoResult>;
}

export default dlpSetDlpFeature;
