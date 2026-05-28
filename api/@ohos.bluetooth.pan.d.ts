/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @kit ConnectivityKit
 */

import type baseProfile from './@ohos.bluetooth.baseProfile';

/**
 * Provides methods to accessing bluetooth PAN(Personal Area Networking Profile)-related capabilities.
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @stagemodelonly
 * @since 10 dynamic
 * @since 26.0.0 static
 */
declare namespace pan {
  /**
   * Base interface of profile.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 26.0.0 static
   */
  type BaseProfile = baseProfile.BaseProfile;

  /**
   * create the instance of pan profile.
   *
   * @returns { PanProfile } Returns the instance of pan profile.
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 26.0.0 static
   */
  function createPanProfile(): PanProfile;

  /**
   * Manager pan host profile.
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 10 dynamic
   * @since 26.0.0 static
   */
  interface PanProfile extends BaseProfile {
    /**
     * Initiate the PAN connection with the remote device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 801 - Capability not supported.
     *     Only can be called on phone, tablet, and 2in1 devices.
     *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Remote Device profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    connect(deviceId: string): void;

    /**
     * Disconnect the PAN connection with the remote device.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { string } deviceId - Indicates device ID. For example, "11:22:33:AA:BB:FF".
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    disconnect(deviceId: string): void;

    /**
     * Enable bluetooth tethering.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { boolean } enable - Specifies whether to enable tethering.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @stagemodelonly
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    setTethering(enable: boolean): void;

    /**
     * Obtains the tethering enable or disable.
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @returns { boolean } Returns the value {@code true} is tethering is on, returns {@code false} otherwise.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs. [since 10 - 24]
     * @throws { BusinessError } 801 - Capability not supported.
     *     Only can be called on phone, tablet, and 2in1 devices.
     *     Failed to call the API when the short-range chip is not inserted on 2in1 device.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi [since 10 - 24]
     * @publicapi [since 26.0.0]
     * @stagemodelonly
     * @since 10 dynamic
     * @since 26.0.0 static
     */
    isTetheringOn(): boolean;

    /**
     * Determine whether the local device supports PAN.
     *
     * @returns { boolean } Returns true if the local device supports PAN; returns false otherwise.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    isPanSupported(): boolean;
  }
}

export default pan;