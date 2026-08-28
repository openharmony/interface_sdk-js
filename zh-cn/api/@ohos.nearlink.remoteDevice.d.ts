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
 * @file 星闪远端设备连接能力
 * @kit ConnectivityKit
 */

import type { Callback } from '@ohos.base';
import nearlinkConstant from '@ohos.nearlink.constant';

/**
 * 本模块提供了星闪远端设备的连接与管理能力，包括连接与断开远端设备、可信配对与确认、调整连接间隔、订阅配对请求等。
 *
 * @syscap SystemCapability.Communication.NearLink.Base
 * @stagemodelonly
 * @since 26.0.0 dynamic
 */
declare namespace remoteDevice {
  /**
   * 表示和远端设备的配对状态，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type PairingState = nearlinkConstant.PairingState;

  /**
   * 表示和远端设备的连接状态，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type ConnectionState = nearlinkConstant.ConnectionState;

  /**
   * 表示设备类型，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type DeviceClass = nearlinkConstant.DeviceClass;

  /**
   * 表示和远端设备的逻辑链路连接状态，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type AcbState = nearlinkConstant.AcbState;

  /**
   * 表示连接间隔，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  type ConnectionInterval = nearlinkConstant.ConnectionInterval;

  /**
   * 创建远端设备实例。
   *
   * @param { string } address - 远端设备地址。地址格式参考：11:22:33:AA:BB:FF。
   * @returns { RemoteDevice } 远端设备实例。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100041 - Invalid address.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
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
   * @since 26.0.0 dynamic
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
   * @since 26.0.0 dynamic
   */
  function offPairingRequest(callback?: Callback<PairingRequestParam>): void;

  /**
   * 订阅配对状态变化事件。使用callback异步回调。
   *
   * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
   *
   * @param { Callback<PairingStateParam> } callback - 回调函数，返回订阅的配对状态变化结果。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onPairingStateChange(callback: Callback<PairingStateParam>): void;

  /**
   * 取消订阅配对状态变化事件。使用callback异步回调。
   *
   * @param { Callback<PairingStateParam> } [callback] - 回调函数，返回订阅的配对状态变化结果。
   *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offPairingStateChange(callback?: Callback<PairingStateParam>): void;

  /**
   * 订阅连接状态变化事件。使用callback异步回调。与
   * [remoteDevice.onAcbStateChange]{@link remoteDevice.onAcbStateChange(callback: Callback<AcbStateParam>)}监听逻辑链路层级连接状态
   * 不同，本接口监听设备层级的连接状态变化。
   *
   * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
   *
   * @param { Callback<ConnectionStateParam> } callback - 回调函数，返回订阅的连接状态变化事件上报结果。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onConnectionStateChange(callback: Callback<ConnectionStateParam>): void;

  /**
   * 取消订阅连接状态变化事件。使用callback异步回调。
   *
   * @param { Callback<ConnectionStateParam> } [callback] - 回调函数，返回订阅的连接状态变化事件上报结果。
   *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offConnectionStateChange(callback?: Callback<ConnectionStateParam>): void;

  /**
   * 订阅逻辑链路连接状态变化事件。使用callback异步回调。适用于需要在逻辑链路建立或断开时触发相应处理的场景，如数据传输前的链路就绪检查或断连后的资源清理。与
   * [remoteDevice.onConnectionStateChange]{@link remoteDevice.onConnectionStateChange(callback: Callback<ConnectionStateParam>)}
   * 监听设备层级连接状态不同，本接口监听逻辑链路层级的连接状态。
   *
   * 应用需具备ohos.permission.ACCESS_NEARLINK权限，方可接收此事件上报。
   *
   * @param { Callback<AcbStateParam> } callback - 回调函数，返回订阅的逻辑链路连接状态变化事件上报结果。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function onAcbStateChange(callback: Callback<AcbStateParam>): void;

  /**
   * 取消订阅逻辑链路连接状态变化事件。使用callback异步回调。
   *
   * @param { Callback<AcbStateParam> } [callback] - 回调函数，返回订阅的逻辑链路连接状态变化事件上报结果。
   *     <br>填写该参数则取消当前callback订阅。不填写该参数则取消该事件对应的所有回调。
   * @throws { BusinessError } 801 - Capability not supported because the chip does not support it.
   * @throws { BusinessError } 36100099 - Operation failed.
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  function offAcbStateChange(callback?: Callback<AcbStateParam>): void;

  /**
   * 提供远端设备的操作方法，使用前需要使用[remoteDevice.createRemoteDevice]{@link remoteDevice.createRemoteDevice}方法创建一个远端设备
   * [RemoteDevice]{@link remoteDevice.RemoteDevice}实例。一个设备只需要创建一次，无需多次创建。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface RemoteDevice {
    /**
     * 发起与远端设备的配对。使用Promise异步回调。发起配对后，将依据本端与远端设备的输入输出能力标识（即设备是否具备显示、键盘输入等能力）弹出不同类型的弹窗，需使用者进一步确认。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    startPairing(): Promise<void>;

    /**
     * 向可信远端设备发起免弹窗配对。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    startCrediblePairing(): Promise<void>;

    /**
     * 删除已配对设备。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    removePairedDevice(): Promise<void>;

    /**
     * 取消正在进行的配对请求。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    cancelDevicePairing(): Promise<void>;

    /**
     * 设置配对通行码。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { string } passcode - 用户输入的配对通行码，必须为六位数字。
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100045 - Passcode must be a 6-digit number.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setPairingPasscode(passcode: string): Promise<void>;

    /**
     * 设置配对请求的确认结果。对端设备的配对请求通过
     * [remoteDevice.onPairingRequest](docroot://reference/apis-connectivity-kit/js-apis-nearlink-remote-device-sys.md#remotedeviceonpairingrequest)
     * 获取。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { boolean } accept - 配对确认。true：接受配对。false：拒绝配对。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setPairingConfirmation(accept: boolean): void;

    /**
     * 向远端设备发起连接。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    connect(): Promise<void>;

    /**
     * 断开远端设备的连接。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { Promise<void> } Promise对象，无返回结果。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    disconnect(): Promise<void>;

    /**
     * 获取和远端设备的配对状态。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { PairingState } 和远端设备的配对状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getPairingState(): PairingState;

    /**
     * 获取远端设备名称。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { string } 远端设备名称。最大长度为30个字符。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getDeviceName(): string;

    /**
     * 获取远端设备类型。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { DeviceClass } 远端设备类型。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getDeviceClass(): DeviceClass;

    /**
     * 获取本端设备和远端设备的连接状态。与[getAcbState]{@link remoteDevice.RemoteDevice.getAcbState}获取逻辑链路（ACB）层级连接状态不同，本接口获取设备层级的连接状态。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { ConnectionState } 本端设备和远端设备的连接状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getConnectionState(): ConnectionState;

    /**
     * 设置远端设备别名。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @param { string } alias - 远端设备别名。个字符，不能为空。
     *     <br>最大长度为64。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100046 - String exceeds maximum length.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setDeviceAlias(alias: string): void;

    /**
     * 获取远端设备别名。
     *
     * @permission ohos.permission.ACCESS_NEARLINK and ohos.permission.MANAGE_NEARLINK
     * @returns { string } 远端设备别名。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getDeviceAlias(): string;

    /**
     * 获取和远端设备的逻辑链路连接状态。适用于需要确认逻辑链路是否就绪的场景，如在进行数据传输或消息通信前检查逻辑链路状态。与
     * [getConnectionState]{@link remoteDevice.RemoteDevice.getConnectionState}获取设备层级连接状态不同，本接口获取逻辑链路（ACB）层级的连接状态。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { AcbState } 和远端设备的逻辑链路连接状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getAcbState(): AcbState;

    /**
     * 获取远端设备型号。
     *
     * @returns { DeviceModel } 远端设备的型号。
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getDeviceModel(): DeviceModel;

    /**
     * 获取远端设备的设备信息。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { DeviceInformation } 远端设备的设备信息。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getDeviceInformation(): DeviceInformation;

    /**
     * 获取远端设备的信号强度（RSSI）。使用Promise异步回调。
     *
     * @permission ohos.permission.ACCESS_NEARLINK
     * @returns { Promise<int> } Promise对象，返回RSSI值。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    getRssiValue(): Promise<int>;

    /**
     * 设置和远端设备的连接间隔。
     *
     * @permission ohos.permission.MANAGE_NEARLINK
     * @param { ConnectionInterval } interval - 要设置的连接间隔。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 36100003 - NearLink disabled.
     * @throws { BusinessError } 36100099 - Operation failed.
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    setConnectionInterval(interval: ConnectionInterval): void;
  }

  /**
   * 配对状态参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface PairingStateParam {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 上一个配对状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    preState: PairingState;
    /**
     * 当前配对状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: PairingState;
    /**
     * 配对状态原因。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    reason: PairingReason;
    /**
     * 原因消息。此字段仅用于日志信息，不应该用于逻辑处理。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    reasonMsg?: string;
  }

  /**
   * 配对原因的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum PairingReason {
    /**
     * 配对成功。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_SUCCESS = 0,
    /**
     * 配对失败。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_FAILURE = 1,
    /**
     * 配对失败：ACB连接失败。远端设备可能已关机或超出范围。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_ACB_CONNECTION_FAIL = 2,
    /**
     * 配对失败：超过ACB连接限制。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_EXCEED_ACB_MAX = 3,
    /**
     * 配对失败：被远端设备取消。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_REMOTE_CANCELED = 4,
    /**
     * 配对失败：被本端设备取消。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_LOCAL_CANCELED = 5,
    /**
     * 配对失败：认证失败。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_REASON_AUTH_FAIL = 6
  }

  /**
   * 配对请求参数说明。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface PairingRequestParam {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 设备配对的密钥。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    passkey: string;
    /**
     * 配对类型。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    pairingType: PairingType;
  }

  /**
   * 星闪配对类型，为枚举值。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum PairingType {
    /**
     * 表示不需要passkey的配对方式，用户无需检查配对码。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    NO_PASSKEY_CONFIRMATION = 0,
    /**
     * 表示通行码鉴权方式，用户需在一端设备输入另一端设备显示的配对码。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_TYPE_PASSCODE = 1,
    /**
     * 表示数字比较鉴权方式，用户需在两端设备确认配对码一致。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    PAIRING_TYPE_NUMBER_COMPARE = 2
  }

  /**
   * 连接状态参数。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface ConnectionStateParam {
    /**
     * 设备地址。
     * 长度必须为17，由16进制数字和冒号组成，形如 "11:22:33:AA:BB:FF"。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;
    /**
     * 上一个连接状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    preState: ConnectionState;
    /**
     * 当前连接状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: ConnectionState;
    /**
     * 连接原因。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    connectionReason: ConnectionReason;
    /**
     * 原因消息。此字段仅用于日志信息，不应该用于逻辑处理。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    reasonMsg?: string;
  }

  /**
   * 连接原因的枚举。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  enum ConnectionReason {
    /**
     * 连接成功。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_SUCCESS = 0,
    /**
     * 连接失败。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_FAILURE = 1,
    /**
     * 已由用户断开连接。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_LOCAL_DISCONNECT = 2,
    /**
     * 远端设备触发断连。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_REMOTE_DISCONNECT = 3,
    /**
     * 连接失败：超过ACB连接限制。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_FAIL_ACB_CONNECTION = 4,
    /**
     * 连接失败：服务发现失败。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_FAIL_SERVICE_DISCOVERY = 5,
    /**
     * 连接失败：在远端设备上找不到可用的服务。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_FAIL_NO_AVAILABLE_SERVICE = 6,
    /**
     * 连接失败：超过ACB连接限制。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    CONNECTION_FAIL_CONNECTION_NUM_LIMITED = 7
  }

  /**
   * 订阅的逻辑链路连接状态变化事件上报结果。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface AcbStateParam {
    /**
     * 设备地址，表示和该设备的逻辑链路连接状态发生变化。地址格式参考：11:22:33:AA:BB:FF。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    address: string;

    /**
     * 当前逻辑链路连接状态。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    state: AcbState;
  }

  /**
   * 描述远端设备的型号信息。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface DeviceModel {
    /**
     * 远端设备的型号ID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    modelId: string;

    /**
     * 远端设备的子型号ID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    subModelId: string;

    /**
     * 远端设备的图标ID。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @systemapi
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    iconId: string;
  }

  /**
   * 描述远端设备信息。
   *
   * @syscap SystemCapability.Communication.NearLink.Base
   * @stagemodelonly
   * @since 26.0.0 dynamic
   */
  interface DeviceInformation {
    /**
     * 远端设备的制造商数据
     * 最大长度为255。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    manufacturerData: string;

    /**
     * 远程设备的模型数据。
     * 最大长度为255。
     *
     * @syscap SystemCapability.Communication.NearLink.Base
     * @stagemodelonly
     * @since 26.0.0 dynamic
     */
    modelData: string;
  }
}

export default remoteDevice;