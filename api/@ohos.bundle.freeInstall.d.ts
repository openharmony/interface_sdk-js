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
 * The module provides APIs for setting and obtaining installation-free information and APIs for obtaining
 * BundlePackInfo and DispatchInfo.
 *
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace freeInstall {
  /**
   * Upgrade flag, which is for internal use only.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum UpgradeFlag {
    /**
     * No module needs an upgrade.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NOT_UPGRADE = 0,
    /**
     * A single module needs an upgrade.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    SINGLE_UPGRADE = 1,
    /**
     * The module that has a relationship with the current one needs an upgrade.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    RELATION_UPGRADE = 2
  }

  /**
   * Flag of the bundle package.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum BundlePackFlag {
    /**
     * All information in the **pack.info** file.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_PACK_INFO_ALL = 0x00000000,
    /**
     * Package information in the **pack.info** file.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_PACKAGES = 0x00000001,
    /**
     * Bundle summary information in the **pack.info** file.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_BUNDLE_SUMMARY = 0x00000002,
    /**
     * Module summary information in the **pack.info** file.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    GET_MODULE_SUMMARY = 0x00000004
  }

  /**
   * Sets an upgrade flag for a module. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { string } bundleName - Bundle name.
   * @param { string } moduleName - Module name.
   * @param { UpgradeFlag } upgradeFlag - Upgrade flag, which is for internal use only.
   * @param { AsyncCallback<void> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result. If
   *     the operation is successful, **err** is **null**; otherwise, **err** is an error object.
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
   * Sets an upgrade flag for a module. This API uses a promise to return the result.
   *
   * @permission ohos.permission.INSTALL_BUNDLE
   * @param { string } bundleName - Bundle name.
   * @param { string } moduleName - Module name.
   * @param { UpgradeFlag } upgradeFlag - Upgrade flag, which is for internal use only.
   * @returns { Promise<void> } Promise that returns no value.
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
   * Checks whether a module can be removed. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { string } moduleName - Module name.
   * @param { AsyncCallback<boolean> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the result.
   *     If the operation is successful, **err** is **null** and **data** is a Boolean value (**true** if the module can
   *     be removed, **false** otherwise). If the operation fails, **err** is an error object.
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
   * Checks whether a module can be removed. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { string } moduleName - Module name.
   * @returns { Promise<boolean> } Promise used to return the result. If the module can be removed, **true** is returned
   *     ; otherwise, **false** is returned.
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
   * Obtains bundlePackInfo based on **bundleName** and **bundlePackFlag**. This API uses an asynchronous callback to
   * return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { BundlePackFlag } bundlePackFlag - Flag of the bundle package.
   * @param { AsyncCallback<BundlePackInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the operation is successful, **err** is **null** and **data** is the BundlePackInfo object obtained;
   *     otherwise, **err** is an error object.
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
   * Obtains bundlePackInfo based on **bundleName** and **bundlePackFlag**. This API uses a promise to return the
   * result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - Bundle name.
   * @param { BundlePackFlag } bundlePackFlag - Flag of the bundle package.
   * @returns { Promise<BundlePackInfo> } Promise used to return the BundlePackInfo object obtained.
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
   * Obtains the dispatch information. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { AsyncCallback<DispatchInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return the
   *     result. If the operation is successful, **err** is **null**, and **data** is the
   *     [DispatchInfo]{@link ./bundleManager/DispatchInfo:DispatchInfo} object obtained. otherwise, **err** is an error
   *     object.
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
   * Obtains the dispatch information. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @returns { Promise<DispatchInfo> } Promise used to return the
   *     [DispatchInfo]{@link ./bundleManager/DispatchInfo:DispatchInfo} object obtained.
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
   * Defines the installation-free structure and API version information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type DispatchInfo = _DispatchInfo;

  /**
   * Defines the bundle information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type BundlePackInfo = _PackInfo.BundlePackInfo;

  /**
   * Defines the bundle information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type BundlePackInfo = _BundlePackInfo;

  /**
   * Defines the package configuration information in the **pack.info** file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type PackageConfig = _PackInfo.PackageConfig;

  /**
   * Defines the package configuration information in the **pack.info** file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type PackageConfig = _PackageConfig;

  /**
   * Defines the package summary information in the **pack.info** file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type PackageSummary = _PackInfo.PackageSummary;

  /**
   * Defines the package summary information in the **pack.info** file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type PackageSummary = _PackageSummary;

  /**
   * Defines the bundle configuration information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type BundleConfigInfo = _PackInfo.BundleConfigInfo;

  /**
   * Defines the bundle configuration information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type BundleConfigInfo = _BundleConfigInfo;

  /**
   * Defines the ExtensionAbility configuration information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type ExtensionAbility = _PackInfo.ExtensionAbility;

  /**
   * Defines the ExtensionAbility configuration information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type ExtensionAbility = _ExtensionAbility;

  /**
   * Defines the module configuration information of the bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type ModuleConfigInfo = _PackInfo.ModuleConfigInfo;

  /**
   * Defines the module configuration information of the bundle.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type ModuleConfigInfo = _ModuleConfigInfo;

  /**
   * Defines the distribution information of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type ModuleDistroInfo = _PackInfo.ModuleDistroInfo;

  /**
   * Defines the distribution information of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type ModuleDistroInfo = _ModuleDistroInfo;

  /**
   * Defines the ability information of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type ModuleAbilityInfo = _PackInfo.ModuleAbilityInfo;

  /**
   * Defines the ability information of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type ModuleAbilityInfo = _ModuleAbilityInfo;

  /**
   * Defines the widget information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type AbilityFormInfo = _PackInfo.AbilityFormInfo;

  /**
   * Defines the widget information.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type AbilityFormInfo = _AbilityFormInfo;

  /**
   * Defines the version in the **pack.info** file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type Version = _PackInfo.Version;

  /**
   * Defines the version in the **pack.info** file.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type Version = _Version;

  /**
   * Defines the API version of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 9 dynamic
   */
  export type ApiVersion = _PackInfo.ApiVersion;

  /**
   * Defines the API version of the module.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.FreeInstall
   * @systemapi
   * @since 23 static
   */
  export type ApiVersion = _ApiVersion;
}

export default freeInstall;