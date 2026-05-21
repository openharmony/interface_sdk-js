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
 * @file Identify sensitive file
 * @kit DataProtectionKit
 */
/**
 * This module identifies sensitive information in a specified file based on the input [scan policy]{@link identifySensitiveContent.policy}.
 *
 * @syscap SystemCapability.Security.DataLossPrevention
 * @since 21
 */
declare namespace identifySensitiveContent {
    /**
     * Defines the policy for sensitive content identification.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    export interface Policy {
        /**
         * Label of an identification policy. The value can contain a maximum of 30 bytes.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        sensitiveLabel: string;
        /**
         * Keyword set. The array can contain a maximum of 50 elements, and each element can contain a maximum of 30 bytes.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        keywords: Array<string>;
        /**
         * Regular expression. The value can contain a maximum of 512 bytes.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        regex: string;
    }
    /**
     * Displays the identification result of sensitive content.
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    export interface MatchResult {
        /**
         * Label of an identification policy.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        readonly sensitiveLabel: string;
        /**
         * Matched content.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        readonly matchContent: string;
        /**
         * Total number of matched items.
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        readonly matchNumber: number;
    }
    /**
     * Identifies sensitive content in a specified file based on the configured policy. This API uses a promise to return  
     * the result.
     *
     * @permission ohos.permission.ENTERPRISE_DATA_IDENTIFY_FILE
     * @param { string } filePath - Path of the file to be identified.
     * @param { Array<Policy> } identifyPolicies - Identification policy.
     * @returns { Promise<Array<MatchResult>> } Promise used to return the identification result of sensitive content.
     * @throws { BusinessError } 201 - permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 19110001 - Parameter error. Possible causes:
     *     1. Incorrect policy format.
     *     2. Invalid parameter range.
     * @throws { BusinessError } 19110002 - Sensitive file content identification timed out.
     * @throws { BusinessError } 19110003 - The file is not supported. Possible causes:
     *     1. The file path does not exist.
     *     2. The file type is not supported.
     *     3. The file permission is not supported.
     * @throws { BusinessError } 19110004 - A system error has occurred.
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    function scanFile(filePath: string, identifyPolicies: Array<Policy>): Promise<Array<MatchResult>>;
}
export default identifySensitiveContent;
