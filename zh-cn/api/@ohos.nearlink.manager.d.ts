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
 * @file 星闪基础管理能力
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';

/**
 * 本模块提供了星闪基础管理能力，包括打开/关闭星闪、获取本机MAC地址、设置连接模式等能力。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace manager {

  /**
   * 查询当前设备是否支持星闪服务。
   *
   * @returns { boolean } 表示当前设备是否支持星闪。返回true：设备支持星闪。返回false：设备不支持星闪。
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function isNearLinkSupported(): boolean;

  /**
   * 打开星闪。
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 203 - EDM denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function enable(): void;

  /**
   * 关闭星闪。
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function disable(): void;

  /**
   * 查询星闪开关状态。
   *
   * @returns { NearlinkState } 表示星闪开关状态。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getState(): NearlinkState;

  /**
   * 查询本机MAC地址。
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.GET_NEARLINK_LOCAL_MAC
   * @returns { string } 表示本地MAC地址。例如'11:22:33:AA:BB:FF'。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getLocalAddress(): string;

  /**
   * 查询本机星闪名称。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { string } 表示星闪设备本地名称。最大长度为30个字符。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getLocalName(): string;

  /**
   * 获取与当前设备配对的设备列表。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { string[] } 配对设备地址的列表。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function getPairedDevices(): string[];

  /**
   * 设置连接模式。使用Promise异步回调。
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @param { ConnectionMode } mode - 表示要设置的连接模式。
   * @param { int } duration - 表示设置模式的持续时间，单位为s，取值范围为大于等于0的整数，若为0则表示无限制。
   *     <br>取值限定为整数。
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Integer out of range.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function setConnectionMode(mode: ConnectionMode, duration: int): Promise<void>;

  /**
   * 恢复出厂设置。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_NEARLINK
   * @returns { Promise<void> } Promise对象，无返回结果。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function factoryReset(): Promise<void>;

  /**
   * 订阅星闪开关状态变化事件。使用callback异步回调。
   *
   * @param { Callback<NearlinkState> } callback - 回调函数，返回星闪的开关状态。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onStateChange(callback: Callback<NearlinkState>): void;

  /**
   * 取消订阅星闪开关状态变化事件。使用callback异步回调。
   *
   * @param { Callback<NearlinkState> } [callback] - 回调函数，返回星闪的开关状态。
   *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offStateChange(callback?: Callback<NearlinkState>): void;

  /**
   * 星闪的开关状态，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum NearlinkState {
    /**
     * 表示星闪正在打开。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_TURNING_ON = 0,
    /**
     * 表示星闪已打开。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_ON = 1,
    /**
     * 表示星闪正在关闭。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_TURNING_OFF = 2,
    /**
     * 表示星闪已关闭。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    STATE_OFF = 3
  }

  /**
   * 连接模式的枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum ConnectionMode {
    /**
     * 表示该设备不可连接。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SLE_MODE_UNCONNECTABLE = 0,
    /**
     * 表示该设备可连接。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    SLE_MODE_CONNECTABLE = 1
  }
}
export default manager;