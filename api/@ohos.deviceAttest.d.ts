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
 * @kit BasicServicesKit
 */

import { AsyncCallback, Callback } from './@ohos.base';

/**
 * xts_device_attest authResult information
 *
 * @namespace deviceAttest
 * @since 9
 * @syscap SystemCapability.XTS.DeviceAttest
 */
declare namespace deviceAttest {
  /**
   * Obtains the AttestResultInfo object.
   *
   * @param { AsyncCallback<AttestResultInfo> } callback Indicates the callback containing the AttestResultInfo object.
   * @since 9
   * @syscap SystemCapability.XTS.DeviceAttest
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 20000001 -  system service exception.
   * @systemapi Hide this for inner system use.
   */
  function getAttestStatus(callback: AsyncCallback<AttestResultInfo>): void;

  /**
   * Obtains the AttestResultInfo object.
   *
   * @returns { Promise<AttestResultInfo> } Returns that the AttestResultInfo object is returned in Promise mode.
   * @since 9
   * @syscap SystemCapability.XTS.DeviceAttest
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 20000001 -  system service exception.
   * @systemapi Hide this for inner system use.
   */
  function getAttestStatus(): Promise<AttestResultInfo>;

  /**
   * Obtains the AttestResultInfo object.
   *
   * @returns { AttestResultInfo } Obtains the AttestResultInfo object synchronously.
   * @since 9
   * @syscap SystemCapability.XTS.DeviceAttest
   * @throws { BusinessError } 202 - Not System App. Interface caller is not a system app.
   * @throws { BusinessError } 401 - The parameter check failed.
   * @throws { BusinessError } 20000001 -  system service exception.
   * @systemapi Hide this for inner system use.
   */
  function getAttestStatusSync(): AttestResultInfo;

  /**
   * Device attest result information.
   * @typedef AttestResultInfo
   * @syscap SystemCapability.XTS.DeviceAttest
   * @since 9
   * @systemapi Hide this for inner system use.
   */
  export interface AttestResultInfo {

    /**
     * Result of the device hardware information authentication.
     *
     * @type { number }
     * @since 9
     * @syscap SystemCapability.XTS.DeviceAttest
     */
    authResult: number;

    /**
     * Result of the device software information authentication.
     *
     * @type { number }
     * @since 9
     * @syscap SystemCapability.XTS.DeviceAttest
     */
    softwareResult: number;

    /**
     * Software result detail array that includes versionId, patchLevel,
     * rootHash and a reserved space.
     *
     * @type { Array<number> }
     * @since 9
     * @syscap SystemCapability.XTS.DeviceAttest
     */
    softwareResultDetail: Array<number>;

    /**
     * Credential sent from the cloud.
     *
     * @type { string }
     * @since 9
     * @syscap SystemCapability.XTS.DeviceAttest
     */
    ticket: string;
  }
}

export default deviceAttest;