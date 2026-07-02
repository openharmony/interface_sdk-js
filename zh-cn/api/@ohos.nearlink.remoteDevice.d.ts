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

import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * 提供与远端设备的配对、连接等交互方式。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace remoteDevice {
  /**
   * 配对状态。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type PairingState = nearlinkConstant.PairingState;

  /**
   * 连接状态。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type ConnectionState = nearlinkConstant.ConnectionState;

  /**
   * 设备类型。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type DeviceClass = nearlinkConstant.DeviceClass;

  /**
   * ACB（异步面向连接的双向）连接状态。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type AcbState = nearlinkConstant.AcbState;

  /**
   * 连接间隔。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  type ConnectionInterval = nearlinkConstant.ConnectionInterval;

  /**
   * 创建远端设备实例。
   *
   * @param { string } address - 设备地址。例如，“11:22:33:AA:BB:FF”
   *     <br>长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
   * @returns { RemoteDevice } 返回近链路远程设备实例。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function createRemoteDevice(address: string): RemoteDevice;

  /**
   * 订阅来自远程NearLink设备的配对请求事件。
   * 如果用户被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。
   * 回调返回真实设备地址，否则返回随机设备地址
   *
   * 只有授予了ohos.permission.NEARLINK_ACCESS权限的系统应用程序才能访问此事件。
   * 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。
   * 回调返回真实设备地址，否则返回随机设备地址。
   *
   * @param { Callback<PairingRequestParam> } callback - 用于监听配对请求事件的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onPairingRequest(callback: Callback<PairingRequestParam>): void;

  /**
   * 取消订阅来自远端星闪设备的配对请求事件。
   *
   * @param { Callback<PairingRequestParam> } [callback] - 用于监听配对请求事件的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offPairingRequest(callback?: Callback<PairingRequestParam>): void;

  /**
   * 订阅NearLink配对状态变更事件。
   *
   * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
   * 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。
   * 回调返回真实设备地址，否则返回随机设备地址。
   *
   * @param { Callback<PairingStateParam> } callback - 用于监听配对状态事件的回调函数。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onPairingStateChange(callback: Callback<PairingStateParam>): void;

  /**
   * 取消订阅星闪配对状态更改事件。
   *
   * @param { Callback<PairingStateParam> } [callback] - 用于监听配对状态事件的回调函数。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offPairingStateChange(callback?: Callback<PairingStateParam>): void;

  /**
   * 订阅星闪连接状态更改事件。
   * 如果用户有ohos.permission.GET_NEARLINK_PEER_MAC权限，则返回真实设备地址。否则返回一个随机的设备地址。
   *
   * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
   * 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。
   * 回调返回真实设备地址，否则返回随机设备地址。
   *
   * @param { Callback<ConnectionStateParam> } callback - 用于监听事件的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onConnectionStateChange(callback: Callback<ConnectionStateParam>): void;

  /**
   * 取消订阅星闪连接状态更改事件。
   *
   * @param { Callback<ConnectionStateParam> } [callback] - 用于监听事件的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offConnectionStateChange(callback?: Callback<ConnectionStateParam>): void;

  /**
   * 订阅NearLink ACB连接状态变化事件。ACB采用异步双向链路。
   * > **说明**
   * > 如果该用户具有ohos.permission.GET_NEARLINK_PEER_MAC权限，则真实设备地址为
   * > 返回。
   * > 否则，将返回一个随机的设备地址。
   *
   * 只有授予了ohos.permission.NEARLINK_ACCESS权限的应用程序才能访问此事件。
   * 如果应用被赋予了ohos.permission.GET_NEARLINK_PEER_MAC权限。
   * 回调返回真实设备地址，否则返回随机设备地址。
   *
   * @param { Callback<AcbStateParam> } callback - 要监听的事件的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function onAcbStateChange(callback: Callback<AcbStateParam>): void;

  /**
   * 取消订阅星闪 ACB连接状态更改事件。
   *
   * @param { Callback<AcbStateParam> } [callback] - 要监听的事件的回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function offAcbStateChange(callback?: Callback<AcbStateParam>): void;

  /**
   * 远程设备操作方法。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface RemoteDevice {
    /**
     * 启动与远端星闪设备的配对。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<void> } 返回promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    startPairing(): Promise<void>;

    /**
     * 发起与可信的远端星闪设备的配对。
     * 该接口不触发对话框，不需要用户授权。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } 返回promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    startCrediblePairing(): Promise<void>;

    /**
     * 删除已配对的远端设备。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } 返回promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    removePairedDevice(): Promise<void>;

    /**
     * 取消正在进行的配对请求。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } 返回promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    cancelDevicePairing(): Promise<void>;

    /**
     * 如果配对类型为通行码，配对时设置通行码
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { string } passcode - 用户输入的通行码。必须是6位数字
     *     <br>长度必须为6，6个10以内数字。
     * @returns { Promise<void> } 返回promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100045 - Passcode must be a 6-digit number.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setPairingPasscode(passcode: string): Promise<void>;

    /**
     * 设置配对请求的确认信息。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { boolean } accept - 如果配对请求被接受，则设置为true。否则，设置为false
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setPairingConfirmation(accept: boolean): void;

    /**
     * 连接所有允许的profile。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } 将profile连接结果作为Promise返回。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    connect(): Promise<void>;

    /**
     * 断开所有已连接的profile。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } 将profile连接结果作为Promise返回。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    disconnect(): Promise<void>;

    /**
     * 获取配对状态。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { PairingState } 返回配对状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getPairingState(): PairingState;

    /**
     * 获取星闪设备的名称。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { string } 返回设备名称。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeviceName(): string;

    /**
     * 获取星闪设备的类型。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { DeviceClass } 星闪设备的类型。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeviceClass(): DeviceClass;

    /**
     * 获取profile连接状态。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { ConnectionState } 返回连接状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getConnectionState(): ConnectionState;

    /**
     * 设置远端设备的别名。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { string } alias - 远端设备的别名
     *     <br>最大长度为64且不能为空。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100046 - String exceeds maximum length.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setDeviceAlias(alias: string): void;

    /**
     * 获取远程设备的别名。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { string } 返回远程设备的别名。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeviceAlias(): string;

    /**
     * 获取ACB连接状态。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { AcbState } 返回ACB连接状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getAcbState(): AcbState;

    /**
     * 获取远端设备的型号信息。
     *
     * @returns { DeviceModel } 返回远程设备的型号信息。
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeviceModel(): DeviceModel;

    /**
     * 获取远端设备信息。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { DeviceInformation } 返回远端设备信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDeviceInformation(): DeviceInformation;

    /**
     * 获取远程设备的RSSI值。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<int> } 返回RSSI值的promise对象。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getRssiValue(): Promise<int>;

    /**
     * 设置与远端设备的连接时间间隔。
     *
     * @permission ohos.permission.MANAGE_NEARLINK
     * @param { ConnectionInterval } interval - 要设置的连接间隔
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setConnectionInterval(interval: ConnectionInterval): void;
  }

  /**
   * 配对状态参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PairingStateParam {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 上一个配对状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    preState: PairingState;
    /**
     * 当前配对状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: PairingState;
    /**
     * 配对状态原因。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reason: PairingReason;
    /**
     * 原因消息。此字段仅用于日志信息，不应该用于逻辑处理。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reasonMsg?: string;
  }

  /**
   * 配对原因的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum PairingReason {
    /**
     * 配对成功。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_SUCCESS = 0,
    /**
     * 配对失败。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_FAILURE = 1,
    /**
     * 配对失败：ACB连接失败。远端设备可能已关机或超出范围。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_ACB_CONNECTION_FAIL = 2,
    /**
     * 配对失败：超过ACB连接限制。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_EXCEED_ACB_MAX = 3,
    /**
     * 配对失败：被远端设备取消。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_REMOTE_CANCELED = 4,
    /**
     * 配对失败：被本端设备取消。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_LOCAL_CANCELED = 5,
    /**
     * 配对失败：认证失败。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_REASON_AUTH_FAIL = 6
  }

  /**
   * 配对请求参数说明。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface PairingRequestParam {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 设备配对的密钥。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    passkey: string;
    /**
     * 配对类型。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    pairingType: PairingType;
  }

  /**
   * 配对类型的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum PairingType {
    /**
     * 如果没有通行密钥，用户需要接受或拒绝配对请求。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NO_PASSKEY_CONFIRMATION = 0,
    /**
     * 用户需要输入对端设备显示的passcode。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_TYPE_PASSCODE = 1,
    /**
     * 用户需要比较两台设备上显示的数字。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    PAIRING_TYPE_NUMBER_COMPARE = 2
  }

  /**
   * 连接状态参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface ConnectionStateParam {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;
    /**
     * 上一个连接状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    preState: ConnectionState;
    /**
     * 当前连接状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: ConnectionState;
    /**
     * 连接原因。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    connectionReason: ConnectionReason;
    /**
     * 原因消息。此字段仅用于日志信息，不应该用于逻辑处理。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    reasonMsg?: string;
  }

  /**
   * 连接原因的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum ConnectionReason {
    /**
     * 连接成功。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_SUCCESS = 0,
    /**
     * 连接失败。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_FAILURE = 1,
    /**
     * 已由用户断开连接。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_LOCAL_DISCONNECT = 2,
    /**
     * 远端设备触发断连。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_REMOTE_DISCONNECT = 3,
    /**
     * 连接失败：超过ACB连接限制。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_FAIL_ACB_CONNECTION = 4,
    /**
     * 连接失败：服务发现失败。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_FAIL_SERVICE_DISCOVERY = 5,
    /**
     * 连接失败：在远端设备上找不到可用的服务。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_FAIL_NO_AVAILABLE_SERVICE = 6,
    /**
     * 连接失败：超过ACB连接限制。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    CONNECTION_FAIL_CONNECTION_NUM_LIMITED = 7
  }

  /**
   * ACB连接状态参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface AcbStateParam {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    address: string;

    /**
     * ACB连接状态
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    state: AcbState;
  }

  /**
   * 远程设备的型号信息。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface DeviceModel {
    /**
     * 远程设备的型号ID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    modelId: string;

    /**
     * 远端设备的子型号ID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    subModelId: string;

    /**
     * 远程设备的图标ID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    iconId: string;
  }

  /**
   * 描述远端设备信息。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface DeviceInformation {
    /**
     * 远端设备的制造商数据
     * 最大长度为255。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    manufacturerData: string;

    /**
     * 远程设备的模型数据。
     * 最大长度为255。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    modelData: string;
  }
}

export default remoteDevice;