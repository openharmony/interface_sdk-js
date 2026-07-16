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
 * @file 设置数据防泄漏入口
 * @kit DataProtectionKit
 */

/**
 * 本模块提供数据防泄漏（Data Loss Prevention，简称为DLP）特性开关的控制能力，包括开启和关闭DLP特性开关、返回特性开关设置结果等。
 * 
 * **使用场景**：
 * 
 * - 需要满足数据安全合规要求的场景。
 * - 对机密文件进行访问控制和加密保护。
 * 
 * > **说明：**
 * >
 * > - 本模块首批接口从API version 26.0.0开始支持。后续版本的新增接口，采用上角标单独标记接口的起始版本。
 * > - 本模块接口为系统接口。
 *
 * @syscap SystemCapability.Security.DataLossPrevention
 * @systemapi
 * @stagemodelonly
 * @since 26.0.0
 */
declare namespace dlpSetDlpFeature {
    /**
     * DLP特性开关状态设置的结果信息。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0
     */
    export interface StatusInfoResult {
        /**
         * DLP特性开关状态是否设置成功。true表示设置成功；false表示设置失败。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0
         */
        isSuccess: boolean;
    }

    /**
     * DLP特性开关状态的枚举。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0
     */
    export enum DlpFeatureStatus {
        /**
         * 表示关闭DLP特性开关。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0
         */
        NOT_ENABLED_FEATURE = 0,
        /**
         * 表示开启DLP特性开关。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0
         */
        ENABLED_FEATURE = 1
    }

    /**
     * DLP特性开关的状态信息。
     *
     * @syscap SystemCapability.Security.DataLossPrevention
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0
     */
    export interface DLPFeatureInfo {
        /**
         * DLP特性开关的状态，包含NOT_ENABLED_FEATURE和ENABLED_FEATURE。
         *
         * @syscap SystemCapability.Security.DataLossPrevention
         * @systemapi
         * @stagemodelonly
         * @since 26.0.0
         */
        dlpFeatureStatus: DlpFeatureStatus;
    }

    /**
     * 设置DLP特性开关状态。使用Promise异步回调。调用成功后，DLP特性开关将设置为指定状态，系统将根据该状态启用或禁用DLP保护功能。
     * 
     * 当特性开关处于开启状态时，右键单击支持加密的文件，右键菜单中会显示“加密保护”选项。可加密类型包括：.txt，.pdf，.xls，.xlsx，.ppt，.pptx，.doc，.docx。
     * 
     * 企业策略开启或关闭数据防泄漏功能时使用此接口。
     *
     * @param { DlpFeatureStatus } status - DLP特性开关状态。ENABLED_FEATURE用于开启DLP特性，菜单中显示"加密保护"选项；NOT_ENABLED_FEATURE用于关闭DLP特性
     *     ，菜单中不显示"加密保护"选项。超出此范围抛出错误码401。
     * @returns { Promise<StatusInfoResult> } Promise对象。设置DLP特性开关状态，返回DLP特性开关状态设置的结果信息。
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
