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
 * 红外管理模块提供产生特定频率和大小的红外信号，以及查询设备支持的频率范围等功能。
 * 
 * > **说明**：
 *
 * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
 * @since 12 dynamic
 * @since 23 static
 */
declare namespace infraredEmitter {

  /**
   * 红外信号的频率范围。
   *
   * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
   * @systemapi hide for inner use [since 12 - 14]
   * @publicapi [since 15]
   * @since 12 dynamic
   * @since 23 static
   */
  interface InfraredFrequency {

    /**
     * 最大支持频率，单位：Hz。
     *
     * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
     * @systemapi hide for inner use [since 12 - 14]
     * @publicapi [since 15]
     * @since 12 dynamic
     * @since 23 static
     */
    max: long;

    /**
     * 最小支持频率，单位：Hz。
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
   * 查询设备是否配备红外发射器。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_INPUT_INFRARED_EMITTER
   * @returns { Promise<boolean> } Promise对象。返回true表示设备具有红外发射器；返回false表示设备不具有红外发射器。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 3800001 - Input service exception.
   * @syscap SystemCapability.MultimodalInput.Input.InfraredEmitter
   * @since 23 dynamic&static
   */
  function hasIrEmitter(): Promise<boolean>;

  /**
   * 产生特定频率和特定电平大小的红外信号。
   *
   * @permission ohos.permission.MANAGE_INPUT_INFRARED_EMITTER
   * @param { long } infraredFrequency - 红外频率，单位：Hz。
   * @param { Array<long>} pattern - 红外电平信号，单位为微秒（μs）。电平信号的数量取值范围为[0,1024]，取值为0时，接口调用不生效。电平信号的取值需大于0。<br/>比如
   *     [100,200,300,400]该电平信号数组，其中100μs为高电平信号、200μs为低电平信号、300μs为高电平信号、400μs为低电平信号。
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
   * 查询设备支持的红外信号的频率范围。
   *
   * @permission ohos.permission.MANAGE_INPUT_INFRARED_EMITTER
   * @returns { Array<InfraredFrequency> } 红外信号的频率范围，包含多组最大和最小频率。<br/>从API version 23开始，当设备不具有红外发射器，返回一组最大和最小频率，且均为0Hz。
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