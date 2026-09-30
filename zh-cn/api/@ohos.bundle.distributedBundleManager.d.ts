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
 *
 * @file distributedBundleManager模块
 * @kit AbilityKit
 */

import { AsyncCallback } from './@ohos.base';
import { ElementName } from './bundleManager/ElementName';
import { RemoteAbilityInfo as _RemoteAbilityInfo } from './bundleManager/RemoteAbilityInfo';
import { ModuleMetadata } from './bundleManager/ApplicationInfo';

/**
 * # System Capabilities
 * 
 * SystemCapability.BundleManager.DistributedBundleFramework
 */
/**
 * 本模块提供分布式应用的管理能力。
 *
 * @syscap SystemCapability.BundleManager.DistributedBundleFramework
 * @systemapi
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace distributedBundleManager {
  /**
   * 获取由elementName指定的远程设备上的应用的AbilityInfo信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { ElementName } elementName - ElementName信息。
   * @param { AsyncCallback<RemoteAbilityInfo> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，调用成功返回err为
   *     null，data为RemoteAbilityInfo对象；调用失败err为错误对象，data为undefined。
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
   * 获取由elementName指定的远程设备上的应用的AbilityInfo信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { ElementName } elementName - ElementName信息。
   * @returns { Promise<RemoteAbilityInfo> } Promise对象，调用成功返回RemoteAbilityInfo对象；调用失败返回错误对象。
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
   * 获取由elementNames指定的远程设备上的应用的AbilityInfo数组信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Array<ElementName> } elementNames - ElementName信息，最大数组长度为10。
   * @param { AsyncCallback<Array<RemoteAbilityInfo>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，调用成功返
   *     回err为null，data为RemoteAbilityInfo数组对象；调用失败err为错误对象，data为undefined。
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
   * 获取由elementNames指定的远程设备上的应用的AbilityInfo数组信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Array<ElementName> } elementNames - ElementName信息，最大数组长度为10。
   * @returns { Promise<Array<RemoteAbilityInfo>> } Promise对象，调用成功返回RemoteAbilityInfo对象列表；调用失败返回错误对象。
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
   * 获取由elementName和locale指定的远程设备上的应用的AbilityInfo信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { ElementName } elementName - ElementName信息。
   * @param { string } locale - 语言地区。
   * @param { AsyncCallback<RemoteAbilityInfo> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，调用成功返回err为
   *     null，data为RemoteAbilityInfo对象；调用失败err为错误对象，data为undefined。
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
   * 获取由elementName和locale指定的远程设备上的应用的AbilityInfo信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { ElementName } elementName - ElementName信息。
   * @param { string } locale - 语言地区。
   * @returns { Promise<RemoteAbilityInfo> } Promise对象，调用成功返回RemoteAbilityInfo对象；调用失败返回错误对象。
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
   * 获取由elementNames和locale指定的远程设备上的应用的AbilityInfo数组信息。使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Array<ElementName> } elementNames - ElementName信息，最大数组长度为10。
   * @param { string } locale - 语言地区。
   * @param { AsyncCallback<Array<RemoteAbilityInfo>> } callback - [AsyncCallback]{@link @ohos.base:AsyncCallback}，调用成功返
   *     回err为null，data为RemoteAbilityInfo数组对象；调用失败err为错误对象，data为undefined。
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
   * 获取由elementNames和locale指定的远程设备上的应用的AbilityInfo数组信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Array<ElementName> } elementNames - ElementName信息，最大数组长度为10。
   * @param { string } locale - 语言地区。
   * @returns { Promise<Array<RemoteAbilityInfo>> } Promise对象，调用成功返回RemoteAbilityInfo对象列表；调用失败返回错误对象。
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
   * 获取指定远程设备上指定包名的应用版本号。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } deviceId - 远程设备ID。可以通过
   *     [getAvailableDeviceList]{@link @ohos.distributedDeviceManager:distributedDeviceManager.DeviceManager.getAvailableDeviceList()}
   *     获取所有可信设备列表，取值为可信设备信息下networkId字段。
   * @param { string } bundleName - 应用的包名。
   * @returns { Promise<long> } Promise对象，调用成功返回版本号；调用失败返回错误对象。
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
   * 获取指定远程设备上指定包名的应用元数据信息。使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { string } deviceId - 远端设备ID。您可以通过getAvailableDeviceList获取。
   *     所有受信任的设备列表。取值为信任设备信息中的networkId字段。
   * @param { string } bundleName - 包名。
   * @returns { Promise<Array<ModuleMetadata>> } Promise用于返回ModuleMetadata的数组。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 17700001 - The specified bundle is not found.
   * @throws { BusinessError } 17700007 - The specified device ID is not found.
   * @throws { BusinessError } 17700027 - The distributed service is not running.
   * @throws { BusinessError } 17700101 - Bundle manager service is excepted.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @stagemodelonly
   * @since 26.0.1 dynamic&static
   */
  function getRemoteMetadata(deviceId: string, bundleName: string): Promise<Array<ModuleMetadata>>;

  /**
   * 包含远程的ability信息。
   *
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export type RemoteAbilityInfo = _RemoteAbilityInfo;
}

export default distributedBundleManager;