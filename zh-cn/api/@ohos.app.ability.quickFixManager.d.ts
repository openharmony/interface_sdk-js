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
 * quickFixManager模块提供快速修复的能力，快速修复是系统提供给开发者的一种技术手段，支持开发者以远快于（小时级、分钟级）应用升级的方式进行缺陷修复。
 *
 * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace quickFixManager {
  /**
   * hap级别的快速修复信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface HapModuleQuickFixInfo {
    /**
     * HAP的名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly moduleName: string;

    /**
     * 指示hap的哈希值。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly originHapHash: string;

    /**
     * 指示快速修复文件的安装路径。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly quickFixFilePath: string;
  }

  /**
   * 应用级别的快速修复信息。
   *
   * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export interface ApplicationQuickFixInfo {
    /**
     * 应用Bundle名称。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bundleName: string;

    /**
     * 应用的版本号。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bundleVersionCode: long;

    /**
     * 应用版本号的文字描述。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly bundleVersionName: string;

    /**
     * 快速修复补丁包的版本号。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly quickFixVersionCode: long;

    /**
     * 快速修复补丁包版本号的文字描述。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly quickFixVersionName: string;

    /**
     * hap级别的快速修复信息。
     *
     * @syscap SystemCapability.Ability.AbilityRuntime.QuickFix
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    readonly hapModuleQuickFixInfo: Array<HapModuleQuickFixInfo>;
  }

  /**
   * 快速修复的补丁安装接口。使用callback异步回调。
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { Array<string> } hapModuleQuickFixFiles - 快速修复补丁文件（补丁文件需包含有效的文件路径）。
   * @param { AsyncCallback<void> } callback - 回调函数。当快速修复的补丁安装成功，err为undefined，否则为错误对象。
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
   * 快速修复的补丁安装接口。使用Promise异步回调。
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { Array<string> } hapModuleQuickFixFiles - 快速修复补丁文件（补丁文件需包含有效的文件路径）。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 撤销快速修复的接口，使用callback方式返回结果。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INSTALL_BUNDLE
   * @param { string } bundleName - 需要撤销补丁的应用Bundle名称。
   * @param { AsyncCallback<void> } callback - 回调函数。当撤销快速修复成功时，err为undefined，否则为错误对象。
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
   * 撤销快速修复的接口。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED and ohos.permission.INSTALL_BUNDLE
   * @param { string } bundleName - 需要撤销补丁的应用Bundle名称。
   * @returns { Promise<void> } Promise对象。无返回结果的Promise对象。
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
   * 获取应用的快速修复信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用Bundle名称。
   * @param { AsyncCallback<ApplicationQuickFixInfo> } callback - 回调函数。返回应用的快速修复信息。
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
   * 获取应用的快速修复信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用Bundle名称。
   * @returns { Promise<ApplicationQuickFixInfo> } Promise对象。返回应用的快速修复信息。
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