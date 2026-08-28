/*
 * Copyright (c) 2021-2022 Huawei Device Co., Ltd.
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
 * @file Standard NFC
 * @kit ConnectivityKit
 */

import { Callback } from './@ohos.base';

/**
 * The **nfcController** module provides APIs for opening and closing Near-Field Communication (NFC) and reading the NFC
 * state.
 *
 * @syscap SystemCapability.Communication.NFC.Core
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace nfcController {
  /**
   * Enumerates the NFC states.
   *
   * @syscap SystemCapability.Communication.NFC.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum NfcState {
    /**
     * NFC is closed (OFF).
     *
     * @syscap SystemCapability.Communication.NFC.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_OFF = 1,

    /**
     * NFC is turning on.
     *
     * @syscap SystemCapability.Communication.NFC.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_TURNING_ON = 2,

    /**
     * NFC is open (ON).
     *
     * @syscap SystemCapability.Communication.NFC.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_ON = 3,

    /**
     * NFC is turning off.
     *
     * @syscap SystemCapability.Communication.NFC.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_TURNING_OFF = 4
  }

  /**
   * Checks whether the device supports NFC.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [canIUse("SystemCapability.Communication.NFC.Core")](docroot://reference/common/init.md#caniuse) instead.
   *
   * @returns { boolean } Returns **true** if the device supports NFC; returns **false** otherwise.
   * @syscap SystemCapability.Communication.NFC.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead global#canIUse("SystemCapability.Communication.NFC.Core")
   */
  function isNfcAvailable(): boolean;

  /**
   * Checks whether the device supports NFC.
   *
   * @returns { boolean } Returns **true** if the device supports NFC; returns **false** otherwise.
   * @syscap SystemCapability.Communication.NFC.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isNfcSupported(): boolean;

  /**
   * Enables listening for NFC state changes. This API uses an asynchronous callback to return the result.
   *
   * @param { 'nfcStateChange' } type - Event type. The value is **nfcStateChange**.
   * @param { Callback<NfcState> } callback - Callback used to return the NFC state.
   * @syscap SystemCapability.Communication.NFC.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  function on(type: "nfcStateChange", callback: Callback<NfcState>): void;

  /**
   * register nfc state changed event.
   *
   * @param { Callback<NfcState> } callback Callback used to listen to the nfc state changed event.
   * @syscap SystemCapability.Communication.NFC.Core
   * @since 23 static
   */
  function onNfcStateChange(callback: Callback<NfcState>): void;

  /**
   * Unsubscribes from the NFC state changes. Upon successful unsubscription, the subscriber will not receive NFC state
   * change notifications. This API uses an asynchronous callback to return the result.
   *
   * @param { 'nfcStateChange' } type - Event type. The value is **nfcStateChange**.
   * @param { Callback<NfcState> }  callback - Callback for the NFC state changes. This parameter can be left blank. If
   *     this parameter is not specified, this API unregisters all callbacks for the specified event.
   * @syscap SystemCapability.Communication.NFC.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   */
  function off(type: "nfcStateChange", callback?: Callback<NfcState>): void;

  /**
   * unregister nfc state changed event.
   *
   * @param { Callback<NfcState> } [callback] Callback used to listen to the nfc state changed event.
   * @syscap SystemCapability.Communication.NFC.Core
   * @since 23 static
   */
  function offNfcStateChange(callback?: Callback<NfcState>): void;

  /**
   * Opens NFC.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [enableNfc]{@link nfcController.enableNfc} instead.
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.Communication.NFC.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.controller/nfcController#enableNfc
   */
  function openNfc(): boolean;

  /**
   * Enables NFC. This API can be called only by system applications.
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100101 - The NFC state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function enableNfc(): void;

  /**
   * Closes NFC.
   *
   * > **NOTE**
   * >
   * > This API is supported since API version 7 and deprecated since API version 9. Use
   * > [disableNfc]{@link nfcController.disableNfc} instead.
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS
   * @returns { boolean } Returns **true** if the operation is successful; returns **false** otherwise.
   * @syscap SystemCapability.Communication.NFC.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.controller/nfcController#disableNfc
   */
  function closeNfc(): boolean;

  /**
   * Disables NFC. This API can be called only by system applications.
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 3100101 - The NFC state is abnormal in the service.
   * @syscap SystemCapability.Communication.NFC.Core
   * @since 9 dynamic
   * @since 23 static
   */
  function disableNfc(): void;

  /**
   * Checks whether NFC is open.
   *
   * @returns { boolean } Returns **true** if NFC is open; returns **false** otherwise.
   * @syscap SystemCapability.Communication.NFC.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  function isNfcOpen(): boolean;

  /**
   * Obtains the NFC state.
   *
   * @returns { NfcState } NFC state obtained. For details, see [NfcState]{@link nfcController.NfcState}.
   * @syscap SystemCapability.Communication.NFC.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  function getNfcState(): NfcState;
}

export default nfcController;