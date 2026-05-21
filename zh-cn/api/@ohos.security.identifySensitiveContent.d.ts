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
 * 识别敏感内容功能的实现是通过输入的[扫描策略]{@link identifySensitiveContent.Policy}来检测指定文件中的敏感信息。
 *
 * @syscap SystemCapability.Security.DataLossPrevention
 * @since 21
 */
declare namespace identifySensitiveContent {
    /**
     * 定义敏感内容识别策略。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    export interface Policy {
        /**
         * 表示识别策略的标签。最大30字节。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        sensitiveLabel: string;
        /**
         * 表示关键字集合。Array最大50，每个元素最大30字节。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        keywords: Array<string>;
        /**
         * 表示正则表达式内容。最大512字节。 
         * 
         * 在输入字符串时，需检查某些特殊字符（如反斜杠 \、双引号 "、换行符等），不会被自动转义，确保字符串的输入效果。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        regex: string;
    }
    /**
     * 显示敏感内容的识别结果。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @since 21
     */
    export interface MatchResult {
        /**
         * 表示识别策略的标签。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        readonly sensitiveLabel: string;
        /**
         * 表示匹配内容。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        readonly matchContent: string;
        /**
         * 表示识别内容的总数。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @since 21
         */
        readonly matchNumber: number;
    }
    /**
     * 根据设置的策略，识别指定文件中的敏感内容。结果通过Promise方式异步返回。
     *
     * @permission ohos.permission.ENTERPRISE_DATA_IDENTIFY_FILE
     * @param { string } filePath - 识别的文件路径。
     * @param { Array<Policy> } identifyPolicies - 识别的策略。
     * @returns { Promise<Array<MatchResult>> } Promise对象。返回敏感内容识别的结果。
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
