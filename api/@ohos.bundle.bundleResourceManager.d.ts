/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
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
 * @kit AbilityKit
 */

import bundleManager from './@ohos.bundle.bundleManager';

/*** if arkts dynamic */
import type { AsyncCallback } from './@ohos.base';
import { BundleOptions } from './bundleManager/BundleInfo';
import type { BundleResourceInfo as _BundleResourceInfo } from './bundleManager/BundleResourceInfo';
import type { LauncherAbilityResourceInfo as _LauncherAbilityResourceInfo } from './bundleManager/LauncherAbilityResourceInfo';
import { ElementName } from './bundleManager/ElementName';
/*** endif */
/*** if arkts static */
import { AsyncCallback } from './@ohos.base';
import { BundleOptions } from './bundleManager/BundleInfo';
import { BundleResourceInfo as _BundleResourceInfo } from './bundleManager/BundleResourceInfo';
import { LauncherAbilityResourceInfo as _LauncherAbilityResourceInfo } from './bundleManager/LauncherAbilityResourceInfo';
import { ElementName } from './bundleManager/ElementName';
/*** endif */


/*** endif */
/**
 * The module provides APIs for obtaining resource information, including
 * [BundleResourceInfo]{@link ./bundleManager/BundleResourceInfo:BundleResourceInfo} and
 * [LauncherAbilityResourceInfo]{@link ./bundleManager/LauncherAbilityResourceInfo:LauncherAbilityResourceInfo}.
 *
 * > **NOTE**
 * >
 * > Starting from API version 12, this module supports query of icons and names of disabled applications and
 * > applications installed by all users.
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Resource
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace bundleResourceManager {
  /**
   * Enumerates the resource information flags, which indicate the type of resource information to obtain.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum ResourceFlag {
    /**
     * Both the application icon and label are obtained.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_ALL = 0x00000001,

    /**
     * Only the application label is obtained.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_WITH_LABEL = 0x00000002,

    /**
     * Only the application icon is obtained.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_WITH_ICON = 0x00000004,

    /**
     * The obtained information is sorted by label. It must be used together with **GET_RESOURCE_INFO_ALL** or
     * **GET_RESOURCE_INFO_WITH_LABEL**.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_WITH_SORTED_BY_LABEL = 0x00000008,

    /**
     * The [drawableDescriptor]{@link @ohos.arkui.drawableDescriptor} object of the application icon is obtained.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_WITH_DRAWABLE_DESCRIPTOR = 0x00000010,

    /**
     * The resource information about abilities that show icons only on the home screen is obtained. It is valid only in
     * the
     * [getLauncherAbilityResourceInfo]{@link bundleResourceManager.getLauncherAbilityResourceInfo(bundleName: string, resourceFlags?: int)}
     * and
     * [getAllLauncherAbilityResourceInfo]{@link bundleResourceManager.getAllLauncherAbilityResourceInfo(resourceFlags: int, callback: AsyncCallback<Array<LauncherAbilityResourceInfo>>)}
     * APIs.
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_ONLY_WITH_MAIN_ABILITY = 0x00000020,
  }

  /**
   * Obtains the resource information of an application based on the given bundle name and resource flags. This API
   * returns the result synchronously.
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - Bundle name of the application.
   * @param { int } resourceFlags - Type of the resource information to obtain.
   * @returns { BundleResourceInfo } Resource information of the application obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   */
  function getBundleResourceInfo(bundleName: string, resourceFlags?: int): BundleResourceInfo;

  /**
   * Obtains the resource information of an application based on the given bundle name, resource flags, and app index.
   * This API returns the result synchronously.
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - Bundle name of the application.
   * @param { int } [resourceFlags] - Type of the resource information to obtain.
   * @param { int } [appIndex] - Index of the application clone. The default value is **0**.
   * @returns { BundleResourceInfo } Resource information of the application obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range or not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getBundleResourceInfo(bundleName: string, resourceFlags?: int, appIndex?: int): BundleResourceInfo;

  /**
   * Obtains the bundle information of the entry ability of an application based on the given bundle name and resource
   * flags. This API returns the result synchronously.
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - Bundle name of the application.
   * @param { int } resourceFlags - Type of the resource information to obtain. The default value is
   *     **[ResourceFlag]{@link bundleResourceManager.ResourceFlag}.GET_RESOURCE_INFO_ALL**.
   * @returns { Array<LauncherAbilityResourceInfo> } Resource information of the entry ability obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   */
  function getLauncherAbilityResourceInfo(bundleName: string, resourceFlags?: int): Array<LauncherAbilityResourceInfo>;

  /**
   * Obtains the launcher ability resource information of an application based on the given bundle name, resource flags,
   * and app index. This API returns the result synchronously.
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - Bundle name of the application.
   * @param { int } [resourceFlags] - Type of the resource information to obtain. The default value is
   *     **[ResourceFlag]{@link bundleResourceManager.ResourceFlag}.GET_RESOURCE_INFO_ALL**.
   * @param { int } [appIndex] - Index of the application clone. The default value is **0**.
   * @returns { Array<LauncherAbilityResourceInfo> } Resource information of the entry ability obtained.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range or not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getLauncherAbilityResourceInfo(bundleName: string, resourceFlags?: int, appIndex?: int): Array<LauncherAbilityResourceInfo>;

  /**
   * Obtains the bundle resource information of all applications based on the given resource flags. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags - Type of the resource information to obtain.
   * @param { AsyncCallback<Array<BundleResourceInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
   *     return the result. If the information is successfully obtained, **err** is **null** and **data** is a
   *     BundleResourceInfo array. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getAllBundleResourceInfo(resourceFlags: int, callback: AsyncCallback<Array<BundleResourceInfo>>): void;

  /**
   * Obtains the bundle resource information of all applications based on the given resource flags. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags - Type of the resource information to obtain.
   * @returns { Promise<Array<BundleResourceInfo>> } Promise used to return the BundleResourceInfo array.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getAllBundleResourceInfo(resourceFlags: int): Promise<Array<BundleResourceInfo>>;

  /**
   * Obtains the resource information of the entry abilities of the current application based on the given resource
   * flags. This API uses an asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags - Type of the resource information to obtain.
   * @param { AsyncCallback<Array<LauncherAbilityResourceInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback}
   *     used to return the result. If the information is successfully obtained, **err** is **null** and **data** is a
   *     LauncherAbilityResourceInfo array. Otherwise, **err** is an error object.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getAllLauncherAbilityResourceInfo(resourceFlags: int, callback: AsyncCallback<Array<LauncherAbilityResourceInfo>>): void;

  /**
   * Obtains the resource information of the entry abilities of the current application based on the given resource
   * flags. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags - Type of the resource information to obtain.
   * @returns { Promise<Array<LauncherAbilityResourceInfo>> } Promise used to return the LauncherAbilityResourceInfo
   *     array.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function getAllLauncherAbilityResourceInfo(resourceFlags: int): Promise<Array<LauncherAbilityResourceInfo>>;

  /**
   * Obtains the ExtensionAbility resource information of an application based on the bundle name, ExtensionAbility type
   * , resource flags, and clone ID. This API returns the result synchronously.
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - Bundle name of the application.
   * @param { bundleManager.ExtensionAbilityType } extensionAbilityType - ExtensionAbility type. Only
   *     **ExtensionAbilityType.INPUT_METHOD**, **ExtensionAbilityType.SHARE** and **ExtensionAbilityType.ACTION** are
   *     supported.
   * @param { int } resourceFlags - Resource information flags, which indicate the type of resource information to
   *     obtain.
   * @param { int } [appIndex] - ID of the application clone. The default value is **0**. The value ranges from 0 to 5.
   *     The value **0** indicates the main application.
   * @returns { Array<LauncherAbilityResourceInfo> } ExtensionAbility resource information of the application, including
   *     the icon and name.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700061 - AppIndex not in valid range or not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 20 dynamic
   * @since 23 static
   */
  function getExtensionAbilityResourceInfo(bundleName: string, extensionAbilityType: bundleManager.ExtensionAbilityType, resourceFlags: int, appIndex?: int): Array<LauncherAbilityResourceInfo>;

  /**
   * Obtains the bundle resource information of all uninstalled applications that have retained data based on the given
   * resource flags. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags - Type of the resource information to obtain. For details, see
   *     [ResourceFlag]{@link bundleResourceManager.ResourceFlag}.
   * @returns { Promise<Array<BundleResourceInfo>> } Promise used to return the BundleResourceInfo array.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function getAllUninstalledBundleResourceInfo(resourceFlags: int): Promise<Array<BundleResourceInfo>>;

  /**
   * Obtains the launcher ability resource information of each application corresponding to the **BundleOptions**
   * element in **optionsList**. This API uses a promise to return the result.
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { Array<BundleOptions> } optionsList - Parameters of the applications to query.<br>**bundleName**,
   *     **moduleName**, and **abilityName** are mandatory parameters.<br>Value range of **appIndex**: [0, 5]. The
   *     default value is **0** if not specified.<br>**userId** is an invalid parameter. It does not need to be passed,
   *     and will not take effect if passed.
   * @param { int } resourceFlags - Resource information flags, which indicate the type of resource information to
   *     obtain. The value is an enumerated value of [ResourceFlag]{@link bundleResourceManager.ResourceFlag}, excluding
   *     [ResourceFlag]{@link bundleResourceManager.ResourceFlag}.GET_RESOURCE_INFO_WITH_SORTED_BY_LABEL and
   *     [ResourceFlag]{@link bundleResourceManager.ResourceFlag}.GET_RESOURCE_INFO_ONLY_WITH_MAIN_ABILITY.
   * @returns { Promise<Array<LauncherAbilityResourceInfo>> } Promise used to return the launcher ability resource
   *     information of the specified application list.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied. A non-system application is not allowed to call a system API.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700002 - The specified module is not existed.
   * @throws { BusinessError } 17700003 - The specified ability is not existed.
   * @throws { BusinessError } 17700061 - The specified app index is invalid.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @stagemodelonly
   * @since 23 dynamic&static
   */
  function getLauncherAbilityResourceInfoList(optionsList: Array<BundleOptions>, resourceFlags: int): Promise<Array<LauncherAbilityResourceInfo>>;

  /**
   * Defines the icon and name of an application.
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type BundleResourceInfo = _BundleResourceInfo;

  /**
   * Defines the entry icon and name of an application.
   *
   * <!--no_check-->
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type LauncherAbilityResourceInfo = _LauncherAbilityResourceInfo;
}

export default bundleResourceManager;
