/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file CDSM Capability
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';

/**
 * This module provides the coordinated devices set management (CDSM) capability for NearLink, including querying and
 * subscribing to the coordinated devices set information of NearLink.
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace cdsm {
  /**
   * Creates a CDSM client instance.
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @param { string } address - Address of a member device in the paired and connected coordinated devices set. The
   *     address format is **11:22:33:AA:BB:FF**. The address must contain six segments, each segment is a string of two
   *     hexadecimal characters, and the segments are separated by colons (:).
   * @returns { CdsmClient } **CdsmClient** instance used to query and subscribe to the CDSM information of a remote
   *     device.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @throws { BusinessError } 36100050 - Coordinated Devices Set Management not supported.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function createCdsmClient(address: string): CdsmClient;

  /**
   * Defines a CDSM client class, which provides APIs for obtaining the CDSM information of a remote device.
   *
   * - Before using the methods of this class, call [cdsm.createCdsmClient]{@link cdsm.createCdsmClient} to construct an
   * instance of this class.
   *
   * This class is applicable to scenarios where you need to obtain the member devices and connection status changes of
   * a group of NearLink devices (CDSM) and perform service coordination accordingly. For example, after a phone is
   * paired with earphones, the phone can use the CDSM to query the left and right earphones and detect their connection
   * status changes.
   *
   * An app only needs to create one [CdsmClient]{@link cdsm.CdsmClient} instance for a remote device. Repeated creation
   * will increase unnecessary resource overhead.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface CdsmClient {
    /**
     * Queries information about the coordinated devices set of a remote device.
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { CdsmInfo } Information about the coordinated devices set of a remote device.
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getCdsmInfo(): CdsmInfo;

    /**
     * Subscribes to the CDSM information change event. This API uses an asynchronous callback to return the result.
     *
     * The app must have the **ohos.permission.ACCESS_NEARLINK** permission to receive this event.
     *
     * @param { Callback<CdsmInfo> } callback - Callback used to return the CDSM information.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    onCdsmInfoChange(callback: Callback<CdsmInfo>): void;

    /**
     * Unsubscribes from the CDSM information change event. This API uses an asynchronous callback to return the result.
     *
     * @param { Callback<CdsmInfo> } [callback] - Callback used to return the CDSM information.
     *     <br>If this parameter is specified, the current callback is unregistered. If this parameter is not specified,
     *     all callbacks used to listen for CDSM information change events are unregistered.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    offCdsmInfoChange(callback?: Callback<CdsmInfo>): void;
  }

  /**
   * Represents the CDSM information.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface CdsmInfo {
    /**
     * Array of member device information in the coordinated devices set. Each element in the array contains the device
     * address and connection status.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    members: CdsmMemberInfo[];
  }

  /**
   * Represents the information about member devices in the coordinated devices set.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface CdsmMemberInfo {
    /**
     * Member device address.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * Member device connection state.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: CdsmConnectionState;
  }

  /**
   * Enumerates the connection states of member devices in a coordinated device set.
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum CdsmConnectionState {
    /**
     * Disconnected.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    DISCONNECTED = 0,
    /**
     * Connected.
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTED = 1
  }
}
export default cdsm;