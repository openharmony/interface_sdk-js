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
 * @file
 * @kit AbilityKit
 */

import { AsyncCallback } from './@ohos.base';
import { ElementName } from './bundleManager/ElementName';
import { RemoteAbilityInfo as _RemoteAbilityInfo } from './bundleManager/RemoteAbilityInfo';
/**
 * # System Capabilities
 *
 * SystemCapability.BundleManager.DistributedBundleFramework
 */
/**
 * The module provides APIs for managing distributed bundles.
 *
 * > **NOTE**
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.DistributedBundleFramework
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace distributedBundleManager {
  /**
   * Obtains information about the remote ability that matches the given element name. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { ElementName } elementName - Target element name.
   * @param { AsyncCallback<RemoteAbilityInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return
   *     the result. If the operation is successful, **err** is **null** and **data** is the RemoteAbilityInfo object
   *     obtained. Otherwise, **err** is an error object and **data** is **undefined**.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700003 - The specified ability name is not found.
   * @throws { BusinessError } 17700007 - The specified device ID is not found.
   * @throws { BusinessError } 17700027 - The distributed service is not running.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getRemoteAbilityInfo(elementName: ElementName, callback: AsyncCallback<RemoteAbilityInfo>): void;

  /**
   * Obtains information about the remote ability that matches the given element name. This API uses a promise to return
   * the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { ElementName } elementName - Target element name.
   * @returns { Promise<RemoteAbilityInfo> } Promise used to return the result. If the operation is successful, the
   *     RemoteAbilityInfo object is returned. Otherwise, an error object is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700003 - The specified ability name is not found.
   * @throws { BusinessError } 17700007 - The specified device ID is not found.
   * @throws { BusinessError } 17700027 - The distributed service is not running.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getRemoteAbilityInfo(elementName: ElementName): Promise<RemoteAbilityInfo>;

  /**
   * Obtains information about the remote abilities that match the given element names. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Array<ElementName> } elementNames - **ElementName** array, whose maximum length is 10.
   * @param { AsyncCallback<Array<RemoteAbilityInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
   *     return the result. If the operation is successful, **err** is **null** and **data** is the array of
   *     RemoteAbilityInfo objects obtained. Otherwise, **err** is an error object and **data** is **undefined**.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700003 - The specified ability name is not found.
   * @throws { BusinessError } 17700007 - The specified device ID is not found.
   * @throws { BusinessError } 17700027 - The distributed service is not running.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getRemoteAbilityInfo(elementNames: Array<ElementName>, callback: AsyncCallback<Array<RemoteAbilityInfo>>): void;

  /**
   * Obtains information about the remote abilities that match the given element names. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Array<ElementName> } elementNames - **ElementName** array, whose maximum length is 10.
   * @returns { Promise<Array<RemoteAbilityInfo>> } Promise used to return the result. If the operation is successful,
   *     an array of RemoteAbilityInfo objects is returned. Otherwise, an error object is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700003 - The specified ability name is not found.
   * @throws { BusinessError } 17700007 - The specified device ID is not found.
   * @throws { BusinessError } 17700027 - The distributed service is not running.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getRemoteAbilityInfo(elementNames: Array<ElementName>): Promise<Array<RemoteAbilityInfo>>;

  /**
   * Obtains information about the remote ability that matches the given element name and locale. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { ElementName } elementName - Target element name.
   * @param { string } locale - Target locale.
   * @param { AsyncCallback<RemoteAbilityInfo> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to return
   *     the result. If the operation is successful, **err** is **null** and **data** is the RemoteAbilityInfo object
   *     obtained. Otherwise, **err** is an error object and **data** is **undefined**.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700003 - The specified ability name is not found.
   * @throws { BusinessError } 17700007 - The specified device ID is not found.
   * @throws { BusinessError } 17700027 - The distributed service is not running.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getRemoteAbilityInfo(elementName: ElementName, locale: string, callback: AsyncCallback<RemoteAbilityInfo>): void;

  /**
   * Obtains information about the remote ability that matches the given element name and locale. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { ElementName } elementName - Target element name.
   * @param { string } locale - Target locale.
   * @returns { Promise<RemoteAbilityInfo> } Promise used to return the result. If the operation is successful, the
   *     RemoteAbilityInfo object is returned. Otherwise, an error object is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700003 - The specified ability name is not found.
   * @throws { BusinessError } 17700007 - The specified device ID is not found.
   * @throws { BusinessError } 17700027 - The distributed service is not running.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getRemoteAbilityInfo(elementName: ElementName, locale: string): Promise<RemoteAbilityInfo>;

  /**
   * Obtains information about the remote abilities that match the given element names and locale. This API uses an
   * asynchronous callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Array<ElementName> } elementNames - **ElementName** array, whose maximum length is 10.
   * @param { string } locale - Target locale.
   * @param { AsyncCallback<Array<RemoteAbilityInfo>> } callback - [Callback]{@link @ohos.base:AsyncCallback} used to
   *     return the result. If the operation is successful, **err** is **null** and **data** is the array of
   *     RemoteAbilityInfo objects obtained. Otherwise, **err** is an error object and **data** is **undefined**.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700003 - The specified ability name is not found.
   * @throws { BusinessError } 17700007 - The specified device ID is not found.
   * @throws { BusinessError } 17700027 - The distributed service is not running.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getRemoteAbilityInfo(elementNames: Array<ElementName>, locale: string, callback: AsyncCallback<Array<RemoteAbilityInfo>>): void;

  /**
   * Obtains information about the remote abilities that match the given element names and locale. This API uses a
   * promise to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Array<ElementName> } elementNames - **ElementName** array, whose maximum length is 10.
   * @param { string } locale - Target locale.
   * @returns { Promise<Array<RemoteAbilityInfo>> } Promise used to return the result. If the operation is successful,
   *     an array of RemoteAbilityInfo objects is returned. Otherwise, an error object is returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified; 2.
   *     Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700003 - The specified ability name is not found.
   * @throws { BusinessError } 17700007 - The specified device ID is not found.
   * @throws { BusinessError } 17700027 - The distributed service is not running.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  function getRemoteAbilityInfo(elementNames: Array<ElementName>, locale: string): Promise<Array<RemoteAbilityInfo>>;

  /**
   * Obtains the version code of the bundle on the remote device.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } deviceId - Indicates the device ID.
   * @param { string } bundleName - Indicates the bundle name.
   * @returns { Promise<long> } Returns the version code of the bundle on the remote device.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle name is not found.
   * @throws { BusinessError } 17700007 - The specified device ID is not found.
   * @throws { BusinessError } 17700027 - The distributed service is not running.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getRemoteBundleVersionCode(deviceId: string, bundleName: string): Promise<long>;

  /**
   * Defines the remote ability information.
   *
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type RemoteAbilityInfo = _RemoteAbilityInfo;
}

export default distributedBundleManager;