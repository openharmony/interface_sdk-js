/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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
 * @file IR Management
 * @kit InputKit
 */

/**
 * The **infraredEmitter** module generates IR signals of the specified frequency and size, and queries the frequency
 * range supported by the device.
 *
 * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace infraredEmitter {

  /**
   * Defines the frequency range of IR signals.
   *
   * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
   * @systemapi hide for inner use [since 12 - 14]
   * @publicapi [since 15]
   * @since 12 dynamic
   * @since 23 static
   */
  interface InfraredFrequency {

    /**
     * Maximum frequency, in Hz.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
     * @systemapi hide for inner use [since 12 - 14]
     * @publicapi [since 15]
     * @since 12 dynamic
     * @since 23 static
     */
    max: long;

    /**
     * Minimum frequency, in Hz.
     *
     * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
     * @systemapi hide for inner use [since 12 - 14]
     * @publicapi [since 15]
     * @since 12 dynamic
     * @since 23 static
     */
    min: long;
  }

  /**
   * Checks whether the device has an infrared transmitter. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_INPUT_INFRARED_EMITTER
   * @returns { Promise<boolean> } Promise used to return the result. **true** is returned if the device has an infrared
   *     emitter, and **false** is returned if the device does not have an infrared emitter.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 3800001 - Input service exception.
   * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
   * @since 23 dynamic&static
   */
  function hasIrEmitter(): Promise<boolean>;

  /**
   * Generates IR signals at the specified frequency and level.
   *
   * @permission ohos.permission.MANAGE_INPUT_INFRARED_EMITTER
   * @param { long } infraredFrequency - IR frequency, in Hz.
   * @param { Array<long>} pattern - Infrared level signal, in microseconds (μs). The number of infrared level signals
   *     ranges from 0 to 1024. The value of this parameter must be greater than 0. If this parameter is set to **0**,
   *     the API does not take effect. <br/>For example, in the level signal array [100,200,300,400], **100** indicates
   *     a high-level signal, **200** indicates a low-level signal, **300** is a high-level signal, and **400** is a low
   *     -level signal.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application. [since 12 - 14]
   * @throws { BusinessError } 401 - Parameter error. Possible causes: 1. Mandatory parameters are left unspecified;
   *     <br>2. Incorrect parameter types; 3. Parameter verification failed.
   * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
   * @systemapi hide for inner use [since 12 - 14]
   * @publicapi [since 15]
   * @since 12 dynamic
   * @since 23 static
   */
  function transmitInfrared(infraredFrequency: long, pattern: Array<long>): void;

  /**
   * Queries the frequency range of IR signals supported by the device.
   *
   * @permission ohos.permission.MANAGE_INPUT_INFRARED_EMITTER
   * @returns { Array<InfraredFrequency> } Frequency range of IR signals, including multiple groups of maximum and
   *     minimum frequencies.
   *     <br>Since API version 23, one group of maximum and minimum frequencies, both of which are **0** Hz, are
   *     returned.
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Not system application. [since 12 - 14]
   * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
   * @systemapi hide for inner use [since 12 - 14]
   * @publicapi [since 15]
   * @since 12 dynamic
   * @since 23 static
   */
  function getInfraredFrequencies(): Array<InfraredFrequency>;
}

export default infraredEmitter;