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
 * 分布式硬件管理模块提供控制分布式硬件的能力，包括暂停、恢复和停止被控端分布式硬件业务。
 *
 * @namespace hardwareManager
 * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
 * @systemapi
 * @since 11 dynamic
 * @since 23 static
 */
declare namespace hardwareManager {
  /**
   * 表示分布式硬件类型。
   *
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum DistributedHardwareType {
    /**
     * 表示所有分布式硬件。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ALL = 0,
    /**
     * 表示分布式相机。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    CAMERA = 1,
    /**
     * 表示分布式屏幕。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SCREEN = 8,
    /**
     * 表示分布式移动通话的麦克风。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    MODEM_MIC = 256,
    /**
     * 表示分布式移动通话的扬声器。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    MODEM_SPEAKER = 512,
    /**
     * 表示分布式麦克风。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    MIC = 1024,
    /**
     * 表示分布式扬声器。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    SPEAKER = 2048
  }

  /**
   * 分布式硬件错误码的枚举。
   *
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  enum DistributedHardwareErrorCode {
    /**
     * 表示分布式硬件未启动。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ERR_CODE_DISTRIBUTED_HARDWARE_NOT_STARTED = 24200101,

    /**
     * 表示源端设备未连接。
     *
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    ERR_CODE_DEVICE_NOT_CONNECTED = 24200102
  }

  /**
   * 表示分布式硬件的描述信息。
   *
   * @typedef HardwareDescriptor
   * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
   * @systemapi
   * @since 11 dynamic
   * @since 23 static
   */
  interface HardwareDescriptor {
    /**
     * 分布式硬件类型。
     *
     * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
     * @syscap SystemCapability.DistributedHardware.DistributedHardwareFWK
     * @systemapi
     * @since 11 dynamic
     * @since 23 static
     */
    type: DistributedHardwareType;

    /**
     * 表示源端设备，缺省时表示所有源端设备。
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
   * 暂停被控端分布式硬件业务。使用promise异步回调。
   *
   * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
   * @param { HardwareDescriptor } description - 硬件描述信息。
   * @returns {Promise<void>} 无返回结果的Promise对象。
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
   * 恢复被控端分布式硬件业务。使用promise异步回调。
   *
   * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
   * @param { HardwareDescriptor } description - 硬件描述信息。
   * @returns {Promise<void>} 无返回结果的Promise对象。
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
   * 停止被控端分布式硬件业务。使用promise异步回调。
   *
   * @permission ohos.permission.ACCESS_DISTRIBUTED_HARDWARE
   * @param { HardwareDescriptor } description - 硬件描述信息。
   * @returns {Promise<void>} 无返回结果的Promise对象。
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