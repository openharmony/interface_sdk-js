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
import { ElementName } from './bundle/elementName';
import { RemoteAbilityInfo } from './bundle/remoteAbilityInfo';
/**
 * # 系统能力
 * 
 * SystemCapability.BundleManager.DistributedBundleFramework
 */
/**
 * 本模块提供分布式包的管理。
 * 
 * > **说明：**
 * >
 * > 从API version 9开始，该模块不再维护，建议使用
 * > [@ohos.bundle.distributedBundleManager]{@link @ohos.bundle.distributedBundleManager:distributedBundleManager}替代。
 * >
 * > 本模块为系统接口。
 *
 * @syscap SystemCapability.BundleManager.DistributedBundleFramework
 * @systemapi Hide this for inner system use
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.bundle.distributedBundleManager:distributedBundleManager
 */
declare namespace distributedBundle {
  /**
   * 根据给定的ElementName获取有关远程设备AbilityInfo信息，使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { ElementName } elementName - 获得的ElementName信息。
   * @param { AsyncCallback<RemoteAbilityInfo> } callback - 程序启动作为入参的回调函数，返回远程基本能力信息。
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getRemoteAbilityInfo(elementName: ElementName, callback: AsyncCallback<RemoteAbilityInfo>): void;

  /**
   * 根据给定的ElementName获取有关远程设备AbilityInfo信息，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { ElementName } elementName - 获得的ElementName信息。
   * @returns { Promise<RemoteAbilityInfo> } Promise形式返回远程基本能力信息。
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getRemoteAbilityInfo(elementName: ElementName): Promise<RemoteAbilityInfo>;

  /**
   * 根据给定的ElementName获取有关远程设备AbilityInfos信息，使用callback异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Array<ElementName> } elementNames - ElementName信息，最大数组长度为10。
   * @param { AsyncCallback<Array<RemoteAbilityInfo>> } callback - 程序启动作为入参的回调函数，返回远程基本能力信息。
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getRemoteAbilityInfos(elementNames: Array<ElementName>,
    callback: AsyncCallback<Array<RemoteAbilityInfo>>): void;

  /**
   * 根据给定的ElementName获取有关远程设备AbilityInfos信息，使用Promise异步回调。
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Array<ElementName> } elementNames - ElementName信息，最大数组长度为10。
   * @returns { Promise<Array<RemoteAbilityInfo>> } Promise形式返回远程基本能力信息。
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getRemoteAbilityInfos(elementNames: Array<ElementName>): Promise<Array<RemoteAbilityInfo>>;
}

export default distributedBundle;