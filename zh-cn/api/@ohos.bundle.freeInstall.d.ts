/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
 * The module provides APIs for setting and obtaining installation-free information and APIs for obtaining 
 * BundlePackInfo and DispatchInfo.
 * 
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 * @file
 * @kit AbilityKit
 */

import { AsyncCallback } from './@ohos.base';
import { DispatchInfo as _DispatchInfo } from './bundleManager/DispatchInfo';
/*** if arkts dynamic */
import * as _PackInfo from './bundleManager/BundlePackInfo';
/*** endif */
import { BundlePackInfo as _BundlePackInfo, PackageConfig as _PackageConfig, PackageSummary as _PackageSummary,
  BundleConfigInfo as _BundleConfigInfo, ExtensionAbility as _ExtensionAbility, ModuleConfigInfo as _ModuleConfigInfo,
  ModuleDistroInfo as _ModuleDistroInfo, ModuleAbilityInfo as _ModuleAbilityInfo, AbilityFormInfo as _AbilityFormInfo,
  Version as _Version, ApiVersion as _ApiVersion } from './bundleManager/BundlePackInfo';

/**
 * 本模块提供免安装相关的设置和查询能力，支持BundlePackInfo、DispatchInfo等信息的查询。
 * 
 * > **说明：**
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace freeInstall {
  /**
   * 仅供内部系统使用标志位
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum UpgradeFlag {
    /**
     * 模块无需升级。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NOT_UPGRADE = 0,
    /**
     * 单个模块需要升级。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    SINGLE_UPGRADE = 1,
    /**
     * 关系模块需要升级。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    RELATION_UPGRADE = 2
  }

  /**
   * 要查询的应用包标志
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum BundlePackFlag {
    /**
     * 获取应用包pack.info的所有信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_PACK_INFO_ALL = 0x00000000,
    /**
     * 获取应用包pack.info的package信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_PACKAGES = 0x00000001,
    /**
     * 获取应用包pack.info的bundle摘要信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_SUMMARY = 0x00000002,
    /**
     * 获取应用包pack.info的module摘要信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_MODULE_SUMMARY = 0x00000004
  }

  /**
   * 设置指定模块是否升级。使用callback异步回调。
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { string } bundleName - 应用Bundle名称。
   * @param { string } moduleName - 应用程序模块名称。
   * @param { UpgradeFlag } upgradeFlag - 仅供内部系统使用标志位。
   * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}。当函数调用成功，err为undefined，否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setHapModuleUpgradeFlag(bundleName: string, 
    moduleName: string, upgradeFlag: UpgradeFlag, callback: AsyncCallback<void>): void;

  /**
   * 设置指定模块是否升级。使用Promise异步回调。
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { string } bundleName - 应用Bundle名称。
   * @param { string } moduleName - 应用程序模块名称。
   * @param { UpgradeFlag } upgradeFlag - 仅供内部系统使用标志位。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function setHapModuleUpgradeFlag(bundleName: string, moduleName: string, upgradeFlag: UpgradeFlag): Promise<void>;

  /**
   * 查询指定模块是否可以被移除。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用Bundle名称。
   * @param { string } moduleName - 应用程序模块名称。
   * @param { AsyncCallback<boolean> } callback - [回调函数]{@link @ohos.base:AsyncCallback}。当获取成功时，err为undefined，data为bool值
   *     ，true表示可以移除；false表示不可移除；否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isHapModuleRemovable(bundleName: string, moduleName: string, callback: AsyncCallback<boolean>): void;

  /**
   * 查询指定模块是否可以被移除。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用Bundle名称。
   * @param { string } moduleName - 应用程序模块名称。
   * @returns { Promise<boolean> } Promise对象。返回true表示可以移除；返回false表示不可移除。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function isHapModuleRemovable(bundleName: string, moduleName: string): Promise<boolean>;

  /**
   * 基于bundleName和bundlePackFlag来获取bundlePackInfo。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用Bundle名称。
   * @param { BundlePackFlag } bundlePackFlag - 指示要查询的应用包标志。
   * @param { AsyncCallback<BundlePackInfo> } callback - [回调函数]{@link @ohos.base:AsyncCallback}。当函数调用成功，err为undefined，
   *     data为获取到的BundlePackInfo信息。否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundlePackInfo(bundleName: string, 
    bundlePackFlag : BundlePackFlag, callback: AsyncCallback<BundlePackInfo>): void;

  /**
   * 基于bundleName和BundlePackFlag来获取bundlePackInfo。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 应用程序Bundle名称。
   * @param { BundlePackFlag } bundlePackFlag - 指示要查询的应用包标志。
   * @returns { Promise<BundlePackInfo> } Promise对象，返回BundlePackInfo信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getBundlePackInfo(bundleName: string, bundlePackFlag : BundlePackFlag): Promise<BundlePackInfo>;

  /**
   * 获取有关dispatch版本的信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { AsyncCallback<DispatchInfo> } callback - [回调函数]{@link @ohos.base:AsyncCallback}。当函数调用成功，err为undefined，data
   *     为获取到的[DispatchInfo]{@link ./bundleManager/DispatchInfo:DispatchInfo}信息。否则为错误对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDispatchInfo(callback: AsyncCallback<DispatchInfo>): void;

  /**
   * 获取有关dispatch版本的信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<DispatchInfo> } Promise对象，返回[DispatchInfo]{@link ./bundleManager/DispatchInfo:DispatchInfo}信息。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getDispatchInfo(): Promise<DispatchInfo>;

  /**
   * 免安装结构体和接口版本信息类。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type DispatchInfo = _DispatchInfo;

  /**
   * 应用包信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type BundlePackInfo = _PackInfo.BundlePackInfo;

  /**
   * 应用包信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type BundlePackInfo = _BundlePackInfo;

  /**
   * pack.info的包信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type PackageConfig = _PackInfo.PackageConfig;

  /**
   * pack.info的包信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type PackageConfig = _PackageConfig;

  /**
   * pack.info中的包摘要信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type PackageSummary = _PackInfo.PackageSummary;

  /**
   * pack.info中的包摘要信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type PackageSummary = _PackageSummary;

  /**
   * 包的配置信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type BundleConfigInfo = _PackInfo.BundleConfigInfo;

  /**
   * 包的配置信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type BundleConfigInfo = _BundleConfigInfo;

  /**
   * extensionAbilities的配置信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type ExtensionAbility = _PackInfo.ExtensionAbility;

  /**
   * extensionAbilities的配置信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type ExtensionAbility = _ExtensionAbility;

  /**
   * 包的module配置信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type ModuleConfigInfo = _PackInfo.ModuleConfigInfo;

  /**
   * 包的module配置信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type ModuleConfigInfo = _ModuleConfigInfo;

  /**
   * module发行版信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type ModuleDistroInfo = _PackInfo.ModuleDistroInfo;

  /**
   * module发行版信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type ModuleDistroInfo = _ModuleDistroInfo;

  /**
   * module包含的ability组件信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type ModuleAbilityInfo = _PackInfo.ModuleAbilityInfo;

  /**
   * module包含的ability组件信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type ModuleAbilityInfo = _ModuleAbilityInfo;

  /**
   * 卡片信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type AbilityFormInfo = _PackInfo.AbilityFormInfo;

  /**
   * 卡片信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type AbilityFormInfo = _AbilityFormInfo;

  /**
   * 包的版本。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type Version = _PackInfo.Version;

  /**
   * 包的版本。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type Version = _Version;

  /**
   * module的api版本。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type ApiVersion = _PackInfo.ApiVersion;

  /**
   * module的api版本。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type ApiVersion = _ApiVersion;
}

export default freeInstall;