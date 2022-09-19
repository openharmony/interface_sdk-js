/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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

import { AsyncCallback } from "./basic";

/**
 * Interface of quickFixManager.
 *
 * @name quickFixManager
 * @since 9
 * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
 * @systemapi Hide this for inner system use.
 * @deprecated since 9
 * @useinstead @ohos.app.ability.quickFixManager
 */
declare namespace quickFixManager {
    /**
     * Quick fix info of hap module.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi Hide this for inner system use.
     */
    export interface HapModuleQuickFixInfo {
        /**
         * Indicates hap module name.
         *
         * @since 9
         * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
         * @systemapi Hide this for inner system use.
         */
        readonly moduleName: string;

        /**
         * Indicates hash value of a hap.
         *
         * @since 9
         * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
         * @systemapi Hide this for inner system use.
         */
        readonly originHapHash: string;

        /**
         * Indicates installed path of quick fix file.
         *
         * @since 9
         * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
         * @systemapi Hide this for inner system use.
         */
        readonly quickFixFilePath: string;
    }

    /**
     * Quick fix info of application.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi Hide this for inner system use.
     */
    export interface ApplicationQuickFixInfo {
        /**
         * Bundle name.
         *
         * @since 9
         * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
         * @systemapi Hide this for inner system use.
         */
        readonly bundleName: string;

        /**
         * The version number of the bundle.
         *
         * @since 9
         * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
         * @systemapi Hide this for inner system use.
         */
        readonly bundleVersionCode: number;

        /**
         * The version name of the bundle.
         *
         * @since 9
         * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
         * @systemapi Hide this for inner system use.
         */
        readonly bundleVersionName: string;

        /**
         * The version number of the quick fix.
         *
         * @since 9
         * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
         * @systemapi Hide this for inner system use.
         */
        readonly quickFixVersionCode: number;

        /**
         * The version name of the quick fix.
         *
         * @since 9
         * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
         * @systemapi Hide this for inner system use.
         */
        readonly quickFixVersionName: string;

        /**
         * Hap module quick fix info.
         *
         * @since 9
         * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
         * @systemapi Hide this for inner system use.
         */
        readonly hapModuleQuickFixInfo: Array<HapModuleQuickFixInfo>;
    }

    /**
     * Apply quick fix files.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @param hapModuleQuickFixFiles Quick fix files need to apply, this value should include file path and file name.
     * @systemapi Hide this for inner system use.
     * @return -
     * @permission ohos.permission.INSTALL_BUNDLE
     */
    function applyQuickFix(hapModuleQuickFixFiles: Array<string>, callback: AsyncCallback<void>): void;
    function applyQuickFix(hapModuleQuickFixFiles: Array<string>): Promise<void>;

    /**
     * Get application quick fix info by bundle name.
     *
     * @since 9
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @param bundleName Bundle name wish to query.
     * @systemapi Hide this for inner system use.
     * @return Returns the {@link ApplicationQuickFixInfo}.
     * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
     */
     function getApplicationQuickFixInfo(bundleName: string, callback: AsyncCallback<ApplicationQuickFixInfo>): void;
     function getApplicationQuickFixInfo(bundleName: string): Promise<ApplicationQuickFixInfo>;
}

export default quickFixManager;