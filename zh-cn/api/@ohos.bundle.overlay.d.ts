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

import { AsyncCallback } from './@ohos.base';

/*** if arkts dynamic */
import * as _OverlayModuleInfo from './bundleManager/OverlayModuleInfo';
/*** endif */
/*** if arkts static */
import { OverlayModuleInfo as _OverlayModuleInfo } from './bundleManager/OverlayModuleInfo';
/*** endif */

/**
 * 本模块提供overlay特征应用的[OverlayModuleInfo]{@link ./bundleManager/OverlayModuleInfo:OverlayModuleInfo}信息查询以及禁用使能的能力。
 * 
 * overlay特征应用指应用中包含有overlay资源包，overlay资源包详见
 * [overlay机制](docroot://quick-start/resource-categories-and-access.md#overlay机制)。
 * 
 * > **说明：**
 * >
 * > 本模块接口仅适用于stage模型，且仅适用于[静态overlay](docroot://quick-start/resource-categories-and-access.md#静态overlay配置方式)。
 *
 * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace overlay {
  /**
   * 设置当前应用中overlay module的禁用使能状态。使用callback异步回调。
   *
   * @param { string } moduleName - overlay特征module的名称。
   * @param { boolean } isEnabled - 值为true表示使能，值为false表示禁用。
   * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当设置指定module的overlay禁用使能状态成功时，err为
   *     undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @throws { BusinessError } 17700033 - The specified module is not an overlay module.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @since 10 dynamic
   * @since 23 static
   */
  function setOverlayEnabled(moduleName:string, isEnabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置当前应用中overlay特征module的禁用使能状态。使用Promise异步回调。
   *
   * @param { string } moduleName - overlay特征module的名称。
   * @param { boolean } isEnabled - 值为true表示使能，值为false表示禁用。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @throws { BusinessError } 17700033 - The specified module is not an overlay module.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @since 10 dynamic
   * @since 23 static
   */
  function setOverlayEnabled(moduleName:string, isEnabled: boolean): Promise<void>;

  /**
   * 设置指定应用的overlay module的禁用使能状态。使用callback异步回调。
   * 
   * 指定应用是调用方自身时不需要权限。
   *
   * @permission ohos.permission.CHANGE_OVERLAY_ENABLED_STATE
   * @param { string } bundleName - 指定应用的bundle名称。
   * @param { string } moduleName - 指定应用的overlay特征module的名称。
   * @param { boolean } isEnabled - 值为true表示使能，值为false表示禁用。
   * @param { AsyncCallback<void> } callback - [回调函数]{@link @ohos.base:AsyncCallback}。当设置指定应用的overlay module的禁用使能状态成功时，
   *     err为undefined，否则为错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @throws { BusinessError } 17700032 - The specified bundle does not contain any overlay module.
   * @throws { BusinessError } 17700033 - The specified module is not an overlay module.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function setOverlayEnabledByBundleName(bundleName:string, moduleName:string, isEnabled: boolean, callback: AsyncCallback<void>): void;

  /**
   * 设置指定应用的overlay module的禁用使能状态。使用Promise异步回调。
   * 
   * 指定应用是调用方自身时不需要权限。
   *
   * @permission ohos.permission.CHANGE_OVERLAY_ENABLED_STATE
   * @param { string } bundleName - 指定应用的bundle名称。
   * @param { string } moduleName - 指定应用的overlay module的名称。
   * @param { boolean } isEnabled - 值为true表示使能，值为false表示禁用。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @throws { BusinessError } 17700032 - The specified bundle does not contain any overlay module.
   * @throws { BusinessError } 17700033 - The specified module is not an overlay module.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function setOverlayEnabledByBundleName(bundleName:string, moduleName:string, isEnabled: boolean): Promise<void>;

  /**
   * 获取当前应用中overlay特征module的OverlayModuleInfo信息。使用callback异步回调。
   *
   * @param { string } moduleName - 指定当前应用中的overlay特征module的名称。
   * @param { AsyncCallback<OverlayModuleInfo> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当获取当前应用中指定的module的
   *     [OverlayModuleInfo]{@link ./bundleManager/OverlayModuleInfo:OverlayModuleInfo}信息成功时，err返回undefined。否则回调函数返回具体错误
   *     对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @throws { BusinessError } 17700032 - The specified bundle does not contain any overlay module.
   * @throws { BusinessError } 17700033 - The specified module is not an overlay module.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @since 10 dynamic
   * @since 23 static
   */
  function getOverlayModuleInfo(moduleName: string, callback: AsyncCallback<OverlayModuleInfo>): void;

  /**
   * 获取当前应用中overlay特征module的OverlayModuleInfo信息。使用Promise异步回调。
   *
   * @param { string } moduleName - 指定当前应用中的overlay module的名称。
   * @returns { Promise<OverlayModuleInfo> } Promise对象，返回
   *     [OverlayModuleInfo]{@link ./bundleManager/OverlayModuleInfo:OverlayModuleInfo}。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @throws { BusinessError } 17700032 - The specified bundle does not contain any overlay module.
   * @throws { BusinessError } 17700033 - The specified module is not an overlay module.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @since 10 dynamic
   * @since 23 static
   */
  function getOverlayModuleInfo(moduleName: string): Promise<OverlayModuleInfo>;

  /**
   * 获取指定的目标module所关联的OverlayModuleInfo。overlay特征的module一般是为设备上存在的非overlay特征的module提供覆盖的资源文件，其中非overlay特征的module被称作目标
   * module。使用callback异步回调。
   *
   * @param { string } targetModuleName - 指定当前应用中的目标module的名称。
   * @param { AsyncCallback<Array<OverlayModuleInfo>> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当获取指定的目标module
   *     的[OverlayModuleInfo]{@link ./bundleManager/OverlayModuleInfo:OverlayModuleInfo}成功时，err返回undefined。否则回调函数返回具体错误对
   *     象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @throws { BusinessError } 17700034 - The specified module is an overlay module.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @since 10 dynamic
   * @since 23 static
   */
  function getTargetOverlayModuleInfos(targetModuleName: string, callback: AsyncCallback<Array<OverlayModuleInfo>>): void;

  /**
   * 获取指定的目标module所关联的OverlayModuleInfo。overlay特征的module一般是为设备上存在的非overlay特征的module提供覆盖的资源文件，其中非overlay特征的module被称作目标
   * module。使用Promise异步回调。
   *
   * @param { string } targetModuleName - 指定当前应用中的目标module的名称。
   * @returns { Promise<Array<OverlayModuleInfo>> } Promise对象，返回<Array<
   *     [OverlayModuleInfo]{@link ./bundleManager/OverlayModuleInfo:OverlayModuleInfo}>>。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @throws { BusinessError } 17700034 - The specified module is an overlay module.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @since 10 dynamic
   * @since 23 static
   */
  function getTargetOverlayModuleInfos(targetModuleName: string): Promise<Array<OverlayModuleInfo>>;

  /**
   * 获取指定应用中所有module的OverlayModuleInfo信息。使用callback异步回调。
   * 
   * 指定应用是调用方自身时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 指定应用的bundle名称。
   * @param { AsyncCallback<Array<OverlayModuleInfo>> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当获取指定应用中所有
   *     module的[OverlayModuleInfo]{@link ./bundleManager/OverlayModuleInfo:OverlayModuleInfo}信息成功时，err返回undefined。否则回调函
   *     数返回具体错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700032 - The specified bundle does not contain any overlay module.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getOverlayModuleInfoByBundleName(bundleName: string,
      callback: AsyncCallback<Array<OverlayModuleInfo>>): void;

  /**
   * 获取指定应用中指定module的OverlayModuleInfo信息。使用callback异步回调。
   * 
   * 指定应用是调用方自身时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 指定应用的bundle名称。
   * @param { string } moduleName - 指定应用中的overlay module的名称。缺省该字段时，查询接口将查询指定应用中所有module的OverlayModuleInfo信息。
   * @param { AsyncCallback<Array<OverlayModuleInfo>> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当获取指定应用中指定
   *     module的[OverlayModuleInfo]{@link ./bundleManager/OverlayModuleInfo:OverlayModuleInfo}信息成功时，err返回undefined。否则回调函
   *     数返回具体错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @throws { BusinessError } 17700032 - The specified bundle does not contain any overlay module.
   * @throws { BusinessError } 17700033 - The specified module is not an overlay module.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getOverlayModuleInfoByBundleName(bundleName: string, moduleName: string, callback: AsyncCallback<Array<OverlayModuleInfo>>): void;

  /**
   * 获取指定应用中指定module的OverlayModuleInfo信息。使用promise异步回调。
   * 
   * 指定应用是调用方自身时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } bundleName - 指定应用的bundle名称。
   * @param { string } moduleName - 指定应用中的overlay module的名称。默认值：缺省该字段时，查询接口将查询指定应用中所有module的OverlayModuleInfo信息。
   * @returns { Promise<Array<OverlayModuleInfo>> } Promise对象，返回<Array<
   *     [OverlayModuleInfo]{@link ./bundleManager/OverlayModuleInfo:OverlayModuleInfo}>>。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @throws { BusinessError } 17700032 - The specified bundle does not contain any overlay module.
   * @throws { BusinessError } 17700033 - The specified module is not an overlay module.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getOverlayModuleInfoByBundleName(bundleName: string, moduleName?: string): Promise<Array<OverlayModuleInfo>>;

  /**
   * 获取指定应用中所有module关联的所有OverlayModuleInfo信息。使用callback异步回调。
   * 
   * 指定应用是调用方自身时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } targetBundleName - 指定目标应用的bundle名称。
   * @param { AsyncCallback<Array<OverlayModuleInfo>> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当获取指定应用中所有
   *     module关联的所有[OverlayModuleInfo]{@link ./bundleManager/OverlayModuleInfo:OverlayModuleInfo}信息成功时，err返回undefined。否
   *     则回调函数返回具体错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700035 - The specified bundle is an overlay bundle.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getTargetOverlayModuleInfosByBundleName(targetBundleName: string,
      callback: AsyncCallback<Array<OverlayModuleInfo>>): void;

  /**
   * 获取指定应用中指定module关联的所有OverlayModuleInfo信息。使用callback异步回调。
   * 
   * 指定应用是调用方自身时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } targetBundleName - 指定目标应用的bundle名称。
   * @param { string } moduleName - 指定应用中的目标module的名称。缺省该字段时，查询接口将查询指定应用中所有module所关联的OverlayModuleInfo信息。
   * @param { AsyncCallback<Array<OverlayModuleInfo>> } callback - [回调函数]{@link @ohos.base:AsyncCallback}，当获取指定应用中指定
   *     module关联的所有[OverlayModuleInfo]{@link ./bundleManager/OverlayModuleInfo:OverlayModuleInfo}信息成功时，err返回undefined。否
   *     则回调函数返回具体错误对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @throws { BusinessError } 17700034 - The specified module is an overlay module.
   * @throws { BusinessError } 17700035 - The specified bundle is an overlay bundle.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getTargetOverlayModuleInfosByBundleName(targetBundleName: string, moduleName: string, callback: AsyncCallback<Array<OverlayModuleInfo>>): void;

  /**
   * 获取指定应用中指定module关联的所有OverlayModuleInfo信息。使用promise异步回调。
   * 
   * 指定应用是调用方自身时不需要权限。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } targetBundleName - 指定目标应用的bundle名称。
   * @param { string } moduleName - 指定应用中的目标module的名称。默认值：缺省该字段时，查询接口将查询指定应用中所有module所关联的OverlayModuleInfo信息。
   * @returns { Promise<Array<OverlayModuleInfo>> } Promise对象，返回<Array<
   *     [OverlayModuleInfo]{@link ./bundleManager/OverlayModuleInfo:OverlayModuleInfo}>>。
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @throws { BusinessError } 17700002 - The specified module name is not found.
   * @throws { BusinessError } 17700034 - The specified module is an overlay module.
   * @throws { BusinessError } 17700035 - The specified bundle is an overlay bundle.
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @systemapi
   * @since 10 dynamic
   * @since 23 static
   */
  function getTargetOverlayModuleInfosByBundleName(targetBundleName: string, moduleName?: string): Promise<Array<OverlayModuleInfo>>;

  /**
   * OverlayModuleInfo信息。
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @since 10 dynamic
   */
  export type OverlayModuleInfo = _OverlayModuleInfo.OverlayModuleInfo;

  /**
   * overlayHap的配置文件信息
   *
   * @syscap SystemCapability.BundleManager.BundleFramework.Overlay
   * @since 23 static
   */
  export type OverlayModuleInfo = _OverlayModuleInfo;
}

export default overlay;