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
 * # System Capability
 *
 * SystemCapability.BundleManager.DistributedBundleFramework
 */
/**
 * The distributedBundle module manages distributed bundles.
 *
 * > **NOTE**
 * >
 * > The APIs of this module have been deprecated since API version 9. You are advised to use
 * > [@ohos.bundle.distributedBundleManager]{@link @ohos.bundle.distributedBundleManager:distributedBundleManager}
 * > instead.
 * >
 * > The APIs provided by this module are system APIs.
 *
 * @syscap SystemCapability.BundleManager.DistributedBundleFramework
 * @systemapi Hide this for inner system use
 * @since 8 dynamiconly
 * @deprecated since 9
 * @useinstead @ohos.bundle.distributedBundleManager:distributedBundleManager
 */
declare namespace distributedBundle {
  /**
   * Obtains the information about the remote ability that matches the given element name. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { ElementName } elementName - **ElementName**.
   * @param { AsyncCallback<RemoteAbilityInfo> } callback - Callback used to return the remote ability information.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getRemoteAbilityInfo(elementName: ElementName, callback: AsyncCallback<RemoteAbilityInfo>): void;

  /**
   * Obtains the information about the remote ability that matches the given element name. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { ElementName } elementName - **ElementName**.
   * @returns { Promise<RemoteAbilityInfo> } Promise used to return the remote ability information.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getRemoteAbilityInfo(elementName: ElementName): Promise<RemoteAbilityInfo>;

  /**
   * Obtains the information about remote abilities that match the given element names. This API uses an asynchronous
   * callback to return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Array<ElementName> } elementNames - **ElementName** array, whose maximum length is 10.
   * @param { AsyncCallback<Array<RemoteAbilityInfo>> } callback - Callback used to return an array of the remote
   *     ability information.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getRemoteAbilityInfos(elementNames: Array<ElementName>,
    callback: AsyncCallback<Array<RemoteAbilityInfo>>): void;

  /**
   * Obtains the information about remote abilities that match the given element names. This API uses a promise to
   * return the result.
   *
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Array<ElementName> } elementNames - **ElementName** array, whose maximum length is 10.
   * @returns { Promise<Array<RemoteAbilityInfo>> } Promise used to return an array of the remote ability information.
   * @syscap SystemCapability.BundleManager.DistributedBundleFramework
   * @systemapi
   * @since 8 dynamiconly
   * @deprecated since 9
   * @useinstead null
   */
  function getRemoteAbilityInfos(elementNames: Array<ElementName>): Promise<Array<RemoteAbilityInfo>>;
}

export default distributedBundle;