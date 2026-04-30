/*
 * Copyright (c) 2022-2023 Huawei Device Co., Ltd.
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
 * @file
 * @kit AbilityKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * The quickFixManager module provides APIs for quick fix. With quick fix, you can fix bugs in your application by
 * applying patches, which is more efficient than by updating the entire application.
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace quickFixManager {
  /**
   * Defines the quick fix information at the HAP file level.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface HapModuleQuickFixInfo {
    /**
     * Name of the HAP file.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly moduleName: string;

    /**
     * Hash value of the HAP file.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly originHapHash: string;

    /**
     * Installation path of the quick fix patch file.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly quickFixFilePath: string;
  }

  /**
   * Defines the quick fix information at the application level.
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ApplicationQuickFixInfo {
    /**
     * Bundle name.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bundleName: string;

    /**
     * Internal version number of the application.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bundleVersionCode: long;

    /**
     * Version number of the application that is shown to users.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bundleVersionName: string;

    /**
     * Version code of the quick fix patch package.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly quickFixVersionCode: long;

    /**
     * Text description of the version number of the quick fix patch package.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly quickFixVersionName: string;

    /**
     * Quick fix information at the HAP file level.
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly hapModuleQuickFixInfo: Array<HapModuleQuickFixInfo>;
  }

  /**
   * Applies a quick fix patch. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { Array<string> } hapModuleQuickFixFiles - Quick fix patch files, each of which must contain a valid file path.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If the quick fix patch is installed,
   *     **err** is **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 18500002 - Invalid patch package.
   * @throws { BusinessError } 18500008 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function applyQuickFix(hapModuleQuickFixFiles: Array<string>, callback: AsyncCallback<void>): void;

  /**
   * Applies a quick fix patch. This API uses a promise to return the result.
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { Array<string> } hapModuleQuickFixFiles - Quick fix patch files, each of which must contain a valid file path.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 18500002 - Invalid patch package.
   * @throws { BusinessError } 18500008 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function applyQuickFix(hapModuleQuickFixFiles: Array<string>): Promise<void>;

  /**
   * Revokes quick fix. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INSTALL_BUNDLE
   * @param { string } bundleName - Name of the bundle for which the patch needs to be revoked.
   * @param { AsyncCallback<void> } callback - Callback used to return the result. If quick fix is revoked, **err** is
   *     **undefined**. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @throws { BusinessError } 18500009 - The application has an ongoing quick fix task.
   * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function revokeQuickFix(bundleName: string, callback: AsyncCallback<void>): void;

  /**
   * Revokes quick fix. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INSTALL_BUNDLE
   * @param { string } bundleName - Name of the bundle for which the patch needs to be revoked.
   * @returns { Promise<void> } Promise that returns no value.
   * @throws { BusinessError } 201 - The application does not have permission to call the interface.
   * @throws { BusinessError } 202 - The application is not system-app, can not use system-api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @throws { BusinessError } 18500009 - The application has an ongoing quick fix task.
   * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function revokeQuickFix(bundleName: string): Promise<void>;

  /**
   * Obtains the quick fix information of the application. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { AsyncCallback<ApplicationQuickFixInfo> } callback - Callback used to return the quick fix information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @throws { BusinessError } 18500008 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getApplicationQuickFixInfo(bundleName: string, callback: AsyncCallback<ApplicationQuickFixInfo>): void;

  /**
   * Obtains the quick fix information of the application. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @returns { Promise<ApplicationQuickFixInfo> } Promise used to return the quick fix information.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     2. Incorrect parameter types.
   * @throws { BusinessError } 18500001 - The bundle does not exist or no patch has been applied.
   * @throws { BusinessError } 18500008 - Internal error.
   * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getApplicationQuickFixInfo(bundleName: string): Promise<ApplicationQuickFixInfo>;
}

export default quickFixManager;