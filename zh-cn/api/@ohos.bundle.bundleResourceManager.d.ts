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

/**
 * 本模块提供应用资源数据查询能力，支持[BundleResourceInfo]{@link ./bundleManager/BundleResourceInfo:BundleResourceInfo}和
 * [LauncherAbilityResourceInfo]{@link ./bundleManager/LauncherAbilityResourceInfo:LauncherAbilityResourceInfo}等信息的查询。
 * 
 * > **说明：**
 * >
 * > 本模块从API version 12 开始支持查询被禁用应用和设备上已安装应用(不区用户)的图标和名称资源。
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Resource
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace bundleResourceManager {
  /**
   * 资源信息标志，指示需要获取的资源信息的内容。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum ResourceFlag {
    /**
     * 用于同时获取icon和label信息。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_ALL = 0x00000001,

    /**
     * 用于获取仅包含label信息，icon信息为空。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_WITH_LABEL = 0x00000002,

    /**
     * 用于获取仅包含icon信息，label信息为空。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_WITH_ICON = 0x00000004,

    /**
     * 用于获取根据label排序后的信息。它不能单独使用需要与GET_RESOURCE_INFO_ALL 或 GET_RESOURCE_INFO_WITH_LABEL一起使用。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_WITH_SORTED_BY_LABEL = 0x00000008,

    /**
     * 用于获取应用图标的[drawableDescriptor]{@link @ohos.arkui.drawableDescriptor}对象。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 12 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_WITH_DRAWABLE_DESCRIPTOR = 0x00000010,

    /**
     * 用于获取仅在桌面上展示图标的Ability资源，它仅在
     * [getLauncherAbilityResourceInfo]{@link bundleResourceManager.getLauncherAbilityResourceInfo(bundleName: string, resourceFlags?: int)}
     * 和
     * [getAllLauncherAbilityResourceInfo]{@link bundleResourceManager.getAllLauncherAbilityResourceInfo(resourceFlags: int, callback: AsyncCallback<Array<LauncherAbilityResourceInfo>>)}
     * 接口中生效。
     *
     * @syscap SystemCapability.BundleManager.BundleFramework.Resource
     * @systemapi
     * @since 20 dynamic
     * @since 23 static
     */
    GET_RESOURCE_INFO_ONLY_WITH_MAIN_ABILITY = 0x00000020,
  }

  /**
   * 以同步方法根据给定的bundleName和resourceFlags获取当前应用的BundleResourceInfo。
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - 指定查询应用的包名。
   * @param { int } resourceFlags - 指定返回的BundleResourceInfo所包含的信息。
   * @returns { BundleResourceInfo } 返回指定应用的BundleResourceInfo。
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
   * 以同步方法根据给定的bundleName、resourceFlags和appIndex获取当前应用或分身应用的BundleResourceInfo。
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - 指定查询应用的包名。
   * @param { int } [resourceFlags] - 指定返回的BundleResourceInfo所包含的信息。
   * @param { int } [appIndex] - 指定查询应用分身的ID，默认值为0。
   * @returns { BundleResourceInfo } 返回指定应用的BundleResourceInfo。
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
   * 以同步方法根据给定的bundleName和resourceFlags获取当前应用的LauncherAbilityResourceInfo。
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - 指定查询应用的包名。
   * @param { int } resourceFlags - 指定返回的LauncherAbilityResourceInfo所包含的信息，默认值为
   *     [ResourceFlag]{@link bundleResourceManager.ResourceFlag}.GET_RESOURCE_INFO_ALL。
   * @returns { Array<LauncherAbilityResourceInfo> } 返回指定应用的LauncherAbilityResourceInfo。
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
   * 以同步方法根据给定的bundleName、resourceFlags和appIndex获取当前应用或分身应用的LauncherAbilityResourceInfo。
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - 指定查询应用的包名。
   * @param { int } [resourceFlags] - 指定返回的LauncherAbilityResourceInfo所包含的信息，默认值为
   *     [ResourceFlag]{@link bundleResourceManager.ResourceFlag}.GET_RESOURCE_INFO_ALL。
   * @param { int } [appIndex] - 指定查询应用分身的ID，默认值为0。
   * @returns { Array<LauncherAbilityResourceInfo> } 返回指定应用的LauncherAbilityResourceInfo。
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
   * 根据给定的resourceFlags获取所有应用的BundleResourceInfo。使用callback异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags - 指定返回的BundleResourceInfo所包含的信息。
   * @param { AsyncCallback<Array<BundleResourceInfo>> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当获取成功时，err为
   *     undefined，data为获取到的BundleResourceInfo数组；否则为错误对象。
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
   * 根据给定的resourceFlags获取所有应用的BundleResourceInfo。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags - 指定返回的BundleResourceInfo所包含的信息。
   * @returns { Promise<Array<BundleResourceInfo>> } Promise对象，返回BundleResourceInfo数组。
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
   * 根据给定的resourceFlags获取当前所有应用的LauncherAbilityResourceInfo。使用callback异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags - 指定返回的LauncherAbilityResourceInfo所包含的信息。
   * @param { AsyncCallback<Array<LauncherAbilityResourceInfo>> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当获取成
   *     功时，err为undefined，data为获取到的LauncherAbilityResourceInfo数组；否则为错误对象。
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
   * 根据给定的resourceFlags获取当前所有应用的LauncherAbilityResourceInfo。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags - 指定返回的LauncherAbilityResourceInfo所包含的信息。
   * @returns { Promise<Array<LauncherAbilityResourceInfo>> } Promise对象，返回LauncherAbilityResourceInfo数组。
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
   * 根据应用包名、扩展组件类型、资源信息标志、应用分身ID获取应用的扩展组件资源。使用同步方式返回。
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { string } bundleName - 应用包名。
   * @param { bundleManager.ExtensionAbilityType } extensionAbilityType - 应用的扩展组件类型，仅支持ExtensionAbilityType.INPUT_METHOD
   *     、ExtensionAbilityType.SHARE、ExtensionAbilityType.ACTION。
   * @param { int } resourceFlags - 资源信息标志，指示需要获取的资源信息的内容。
   * @param { int } [appIndex] - 应用分身的ID，默认值是0。取值范围0~5，取值为0表示主应用。
   * @returns { Array<LauncherAbilityResourceInfo> } 返回指定应用的扩展组件资源，包含图标和名称等信息。
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
   * 根据给定的resourceFlags获取所有已卸载且保留数据的应用的BundleResourceInfo。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_RESOURCES
   * @param { int } resourceFlags - 指定返回的BundleResourceInfo所包含的信息，取值请参考
   *     [ResourceFlag枚举值]{@link bundleResourceManager.ResourceFlag}。
   * @returns { Promise<Array<BundleResourceInfo>> } Promise对象，返回BundleResourceInfo数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 21 dynamic
   * @since 23 static
   */
  function getAllUninstalledBundleResourceInfo(resourceFlags: int): Promise<Array<BundleResourceInfo>>;

  /**
   * 根据传入的optionsList获取列表中每个BundleOptions元素对应的应用的LauncherAbilityResourceInfo。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_INSTALLED_BUNDLE_LIST and ohos.permission.GET_BUNDLE_RESOURCES
   * @param { Array<BundleOptions> } optionsList - 要查询的应用的参数列表。<br/>其中bundleName、moduleName、abilityName为必传参数。<br/>
   *     appIndex取值范围：[0, 5]，不传时默认为0。<br/>userId为无效参数，无需传入，传入不生效。
   * @param { int } resourceFlags - 指定返回的LauncherAbilityResourceInfo所包含的信息，取值为
   *     [ResourceFlag]{@link bundleResourceManager.ResourceFlag}枚举值，不支持取值
   *     [ResourceFlag]{@link bundleResourceManager.ResourceFlag}.GET_RESOURCE_INFO_WITH_SORTED_BY_LABEL和
   *     [ResourceFlag]{@link bundleResourceManager.ResourceFlag}.GET_RESOURCE_INFO_ONLY_WITH_MAIN_ABILITY。
   * @returns { Promise<Array<LauncherAbilityResourceInfo>> } Promise对象，返回指定应用列表的LauncherAbilityResourceInfo。
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
   * 应用配置的图标和名称信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type BundleResourceInfo = _BundleResourceInfo;

  /**
   * 应用配置的入口图标和名称信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Resource
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  export type LauncherAbilityResourceInfo = _LauncherAbilityResourceInfo;
}

/*** if arkts dynamic */
import bundleManager from './@ohos.bundle.bundleManager';
import type { AsyncCallback } from './@ohos.base';
import { BundleOptions } from './bundleManager/BundleInfo';
import type { BundleResourceInfo as _BundleResourceInfo } from './bundleManager/BundleResourceInfo';
import type { LauncherAbilityResourceInfo as _LauncherAbilityResourceInfo } from './bundleManager/LauncherAbilityResourceInfo';
/*** endif */

/*** if arkts static */
import bundleManager from './@ohos.bundle.bundleManager';
import { AsyncCallback } from './@ohos.base';
import { BundleOptions } from './bundleManager/BundleInfo';
import { BundleResourceInfo as _BundleResourceInfo } from './bundleManager/BundleResourceInfo';
import { LauncherAbilityResourceInfo as _LauncherAbilityResourceInfo } from './bundleManager/LauncherAbilityResourceInfo';
import bundleManager from './@ohos.bundle.bundleManager';
/*** endif */

export default bundleResourceManager;
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