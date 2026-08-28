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
 * @file 标准NFC
 * @kit ConnectivityKit
 */

import { Callback } from './@ohos.base';

/**
 * 本模块主要用于管理NFC状态，包括打开和关闭NFC，读取NFC的状态等。
 *
 * @syscap SystemCapability.Communication.NFC.Core
 * @atomicservice [since 12]
 * @since 7 dynamic
 * @since 23 static
 */
declare namespace nfcController {
  /**
   * 定义不同的NFC状态值。
   *
   * @syscap SystemCapability.Communication.NFC.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  enum NfcState {
    /**
     * NFC已关闭状态。
     *
     * @syscap SystemCapability.Communication.NFC.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_OFF = 1,

    /**
     * NFC正在打开状态。
     *
     * @syscap SystemCapability.Communication.NFC.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_TURNING_ON = 2,

    /**
     * NFC已打开状态。
     *
     * @syscap SystemCapability.Communication.NFC.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_ON = 3,

    /**
     * NFC正在关闭状态。
     *
     * @syscap SystemCapability.Communication.NFC.Core
     * @atomicservice [since 12]
     * @since 7 dynamic
     * @since 23 static
     */
    STATE_TURNING_OFF = 4
  }

  /**
   * 查询设备是否有NFC能力。
   *
   * @returns { boolean } true: 设备具备NFC能力， false: 设备不具备NFC能力。
   * @syscap SystemCapability.Communication.NFC.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead global#canIUse("SystemCapability.Communication.NFC.Core")
   */
  function isNfcAvailable(): boolean;

  /**
   * 查询设备是否有NFC能力。
   *
   * @returns { boolean } true: 设备具备NFC能力， false: 设备不具备NFC能力。
   * @syscap SystemCapability.Communication.NFC.Core
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isNfcSupported(): boolean;

  /**
   * 注册NFC开关状态事件，获取NFC状态的变化通知。使用callback异步回调。
   *
   * @param { 'nfcStateChange' } type - 固定填"nfcStateChange"字符串。
   * @param { Callback<NfcState> } callback - 回调函数，返回NFC状态的枚举值。
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
   * 取消NFC开关状态事件的注册，取消后NFC状态变化时，就不会再收到Callback的通知。使用callback异步回调。
   *
   * @param { 'nfcStateChange' } type - 固定填"nfcStateChange"字符串。
   * @param { Callback<NfcState> }  callback - NFC状态改变回调函数，可以空缺不填。如果callback不填，将取消注册该事件关联的所有回调函数。
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
   * 打开NFC开关。
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS
   * @returns { boolean } true: 打开NFC成功， false: 打开NFC失败。
   * @syscap SystemCapability.Communication.NFC.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.controller/nfcController#enableNfc
   */
  function openNfc(): boolean;

  /**
   * 打开NFC开关，该接口只能被系统应用调用。
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
   * 关闭NFC开关。
   *
   * @permission ohos.permission.MANAGE_SECURE_SETTINGS
   * @returns { boolean } true: 关闭NFC成功， false: 关闭NFC失败。
   * @syscap SystemCapability.Communication.NFC.Core
   * @since 7 dynamiconly
   * @deprecated since 9
   * @useinstead ohos.nfc.controller/nfcController#disableNfc
   */
  function closeNfc(): boolean;

  /**
   * 关闭NFC开关，该接口只能被系统应用调用。
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
   * 查询NFC是否打开。
   *
   * @returns { boolean } true: NFC是打开的， false: NFC是关闭的。
   * @syscap SystemCapability.Communication.NFC.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  function isNfcOpen(): boolean;

  /**
   * 查询NFC状态。
   *
   * @returns { NfcState } NFC状态值，详细请见[NfcState]{@link nfcController.NfcState}枚举值。
   * @syscap SystemCapability.Communication.NFC.Core
   * @atomicservice [since 12]
   * @since 7 dynamic
   * @since 23 static
   */
  function getNfcState(): NfcState;
}

export default nfcController;