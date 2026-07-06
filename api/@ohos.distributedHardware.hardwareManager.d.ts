/*
 * Copyright (c) 2023-2025 Huawei Device Co., Ltd.
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
 * @kit DistributedServiceKit
 */

import type { AsyncCallback, Callback } from './@ohos.base';

/**
 * The **hardwareManager** module provides the capability of controlling distributed hardware, including pausing,
 * resuming, and stopping the distributed hardware service on the controlled device.
 *
 * > **NOTE**
 *
 * > The APIs provided by this module are system APIs.
 *
 * @namespace hardwareManager
 * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace hardwareManager {
  /**
   * Enumerates the types of the distributed hardware.
   *
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum DistributedHardwareType {
    /**
     * All distributed hardware.
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ALL = 0,
    /**
     * Distributed camera.
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    CAMERA = 1,
    /**
     * Distributed screen.
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SCREEN = 8,
    /**
     * Distributed microphone for mobile calls.
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    MODEM_MIC = 256,
    /**
     * Distributed speaker for mobile calls.
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    MODEM_SPEAKER = 512,
    /**
     * Distributed microphone.
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    MIC = 1024,
    /**
     * Distributed speaker.
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPEAKER = 2048
  }

  /**
   * Enumerates the error codes used for the distributed hardware.
   *
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum DistributedHardwareErrorCode {
    /**
     * The distributed hardware is not started.
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ERR_CODE_DISTRIBUTED_HARDWARE_NOT_STARTED = 24200101,

    /**
     * The source device is not connected.
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ERR_CODE_DEVICE_NOT_CONNECTED = 24200102
  }

  /**
   * Represents the distributed hardware information.
   *
   * @typedef HardwareDescriptor
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface HardwareDescriptor {
    /**
     * Type of the distributed hardware.
     *
     * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    type: DistributedHardwareType;

    /**
     * Source device. If this parameter is not specified, it indicates all source devices.
     *
     * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    srcNetworkId?: string;
  }

  /**
   * Pauses the distributed hardware service on the controlled device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
   * @param { HardwareDescriptor } description - Hardware information.
   * @returns {Promise<void>} Promise that returns no value.
   * @throws {BusinessError} 201 - Permission verification failed.
   * @throws {BusinessError} 202 - Permission denied, non-system app called system api.
   * @throws {BusinessError} 401 - Input parameter error.
   * @throws {BusinessError} 24200101 - The specified distributed hardware is not started.
   * @throws {BusinessError} 24200102 - The specified source device is not connected.
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function pauseDistributedHardware(description: HardwareDescriptor): Promise<void>;

  /**
   * Resumes the distributed hardware service on the controlled device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
   * @param { HardwareDescriptor } description - Hardware information.
   * @returns {Promise<void>} Promise that returns no value.
   * @throws {BusinessError} 201 - Permission verification failed.
   * @throws {BusinessError} 202 - Permission denied, non-system app called system api.
   * @throws {BusinessError} 401 - Input parameter error.
   * @throws {BusinessError} 24200101 - The specified distributed hardware is not started.
   * @throws {BusinessError} 24200102 - The specified source device is not connected.
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function resumeDistributedHardware(description: HardwareDescriptor): Promise<void>;

  /**
   * Stops the distributed hardware service on the controlled device. This API uses a promise to return the result.
   *
   * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
   * @param { HardwareDescriptor } description - Hardware information.
   * @returns {Promise<void>} Promise that returns no value.
   * @throws {BusinessError} 201 - Permission verification failed.
   * @throws {BusinessError} 202 - Permission denied, non-system app called system api.
   * @throws {BusinessError} 401 - Input parameter error.
   * @throws {BusinessError} 24200101 - The specified distributed hardware is not started.
   * @throws {BusinessError} 24200102 - The specified source device is not connected.
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  function stopDistributedHardware(description: HardwareDescriptor): Promise<void>;
}

export default hardwareManager;