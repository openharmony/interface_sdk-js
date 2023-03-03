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

import { AsyncCallback } from './basic';
import Want from './@ohos.app.ability.Want';
import * as _ServiceInfo from './bundleManager/ServiceInfo';

/**
 * This module is used to obtain service information of various applications installed on the current device.
 * @namespace serviceRouter
 * @syscap SystemCapability.BundleManager.BundleFramework.Core
 * @since 10
 */
declare namespace serviceRouter {
  /**
   * This enumeration value is used to identify various types of service info
   * @enum {number}
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  export enum ExtensionServiceType {
    /**
     * Indicates extension info with type of share
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10
     */
    SHARE = 0,

    /**
     * Indicates extension info with type of unspecified
     * @syscap SystemCapability.BundleManager.BundleFramework.Core
     * @since 10
     */
    UNSPECIFIED = 255,
  }


  /**
   * Query the service info of by the given Want. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Want } want - Indicates the Want containing the application bundle name to be queried.
   * @param { ExtensionServiceType } serviceType - Indicates ServiceType.
   * @param { AsyncCallback<Array<ServiceInfo>> } callback - The callback of querying service info result.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  function queryServiceInfos(want: Want, serviceType: ExtensionServiceType, callback: AsyncCallback<Array<ServiceInfo>>): void;

  /**
   * Query the service info by the given Want. ohos.permission.GET_BUNDLE_INFO_PRIVILEGED is required for cross user access.
   * @permission ohos.permission.GET_BUNDLE_INFO_PRIVILEGED
   * @param { Want } want - Indicates the Want containing the application bundle name to be queried.
   * @param { ExtensionServiceType } serviceType - Indicates ServiceType.
   * @returns { Promise<Array<ServiceInfo>> } Returns a list of ServiceInfo objects.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Permission denied, non-system app called system api.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 17700001 - The specified bundleName is not found.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @systemapi
   * @since 10
   */
  function queryServiceInfos(want: Want, serviceType: ExtensionServiceType): Promise<Array<ServiceInfo>>;
  
  /**
   * Obtains service information about a bundle.
   * @syscap SystemCapability.BundleManager.BundleFramework.Core
   * @since 10
   */
  export type ServiceInfo = _ServiceInfo.ServiceInfo;
}

export default serviceRouter;
