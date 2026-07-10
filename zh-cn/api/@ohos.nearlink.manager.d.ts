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
 * @file
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';

/**
 * 提供管理星闪设备的方法。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace manager {

  /**
   * 检查当前设备是否支持星闪。
   *
   * @returns { boolean } 返回是否支持星闪。
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function isNearLinkSupported(): boolean;

  /**
   * 开启星闪。
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
   * @since 26.0.0 dynamic&static
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
   * @since 26.0.0 dynamic&static
   */
  function disable(): void;

  /**
   * 获取星闪状态。
   *
   * @returns { NearlinkState } 返回NearLink状态。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getState(): NearlinkState;

  /**
   * 获取本端设备的MAC地址。
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.GET_NEARLINK_LOCAL_MAC
   * @returns { string } 本地MAC地址。例如，“11:22:33:AA:BB:FF”。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getLocalAddress(): string;

  /**
   * 获取本地设备的名称。
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { string } 返回设备的名称。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getLocalName(): string;

  /**
   * 获取已与当前设备配对的设备列表。
   * 如果用户有ohos.permission.GET_NEARLINK_PEER_MAC权限，则返回真实设备地址。否则，返回随机的设备地址
   *
   * @permission ohos.permission.ACCESS_NEARLINK
   * @returns { string[] } Returns a list of paired devices' address in MAC format (e.g., "11:22:33:AA:BB:FF").
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getPairedDevices(): string[];

  /**
   * 设置设备的NearLink连接模式。
   *
   * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
   * @param { ConnectionMode } mode - 需要设置的NearLink连接模式
   * @param { int } duration - 表示设置连接模式的持续时间（以秒为单位）。值为0表示无限制
   *     <br>单位为： 秒，取值应为≥0的整数。
   * @returns { Promise<void> } 返回promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100003 - NearLink disabled.
   * @throws { BusinessError } 36100040 - Integer out of range.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function setConnectionMode(mode: ConnectionMode, duration: int): Promise<void>;

  /**
   * 恢复星闪设置。
   *
   * @permission ohos.permission.MANAGE_NEARLINK
   * @returns { Promise<void> } 返回promise对象。
   * @throws { BusinessError } 201 - Permission denied.
   * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi Hide this for inner system use.
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function factoryReset(): Promise<void>;

  /**
   * 订阅状态变更事件。
   *
   * @param { Callback<NearlinkState> } callback - 用于监听状态改变事件的回调
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onStateChange(callback: Callback<NearlinkState>): void;

  /**
   * 取消订阅状态变更事件。
   *
   * @param { Callback<NearlinkState> } [callback] - 用于监听状态改变事件的回调
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offStateChange(callback?: Callback<NearlinkState>): void;

  /**
   * 星闪状态的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum NearlinkState {
    /**
     * 表示星闪正在开启。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_TURNING_ON = 0,
    /**
     * 表示星闪已开启，可供使用。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_ON = 1,
    /**
     * 表示星闪正在关闭。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_TURNING_OFF = 2,
    /**
     * 表示星闪已关闭。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    STATE_OFF = 3
  }

  /**
   * 连接模式的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum ConnectionMode {
    /**
     * 表示设备不可连接。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SLE_MODE_UNCONNECTABLE = 0,
    /**
     * 表示设备是可连接的。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SLE_MODE_CONNECTABLE = 1
  }
}
export default manager;