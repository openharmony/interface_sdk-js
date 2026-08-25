/*
 * Copyright (C) 2023 Huawei Device Co., Ltd.
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
 * @file 蓝牙hid模块
 * @kit ConnectivityKit
 */

import type baseProfile from './@ohos.bluetooth.baseProfile';
import { Callback } from './@ohos.base';
import type common from './@ohos.bluetooth.common';

/**
 * 本模块提供基于人机接口协议（Human Interface Device Profile，HID）技术的蓝牙人机交互能力，支
 * 持获取连接状态等方法。
 * 
 * 当本端设备被注册为HID设备的角色时，可以使用[HidDeviceProfile]{@link hid.HidDeviceProfile}相关接口，且仅支持与传统蓝牙类型设备连接和交互。
 *
 * @syscap SystemCapability.Communication.Bluetooth.Core
 * @since 10 dynamic
 * @since 23 static
 */
declare namespace hid {
  /**
   * 基础Profile接口定义，提供订阅连接状态和获取连接状态等公共能力。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 23 static
   */
  type BaseProfile = baseProfile.BaseProfile;

  /**
   * 描述蓝牙设备地址信息的参数结构，包括地址与地址类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  type BluetoothAddress = common.BluetoothAddress;

  /**
   * 创建蓝牙HID Host实例。通过该实例可使用本端作为HID Host的接口，如：获取和其他设备间的蓝牙HID
   * 连接状态。
   *
   * @returns { HidHostProfile } 返回HID Host实例。
   *     该类继承于[BaseProfile]{@link hid.BaseProfile}，因此可以使用其父类中的方法。
   *     和该实例角色相对应的是HID Device角色。
   * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
   *     2. Incorrect parameter types. 3. Parameter verification failed.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 23 static
   */
  function createHidHostProfile(): HidHostProfile;

  /**
   * HidHostProfile类提供蓝牙HID设备的连接和断开等管理功能，适用于系统应用中管理蓝牙HID设备的场景。使用HidHostProfile方法之前需要创建该类的实例进行操作，通过
   * [createHidHostProfile()]{@link hid.createHidHostProfile}方法构造此实例。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @since 10 dynamic
   * @since 23 static
   */
  interface HidHostProfile extends BaseProfile {
    /**
     * 连接设备的HidHost服务。使用场景：当应用需要与蓝牙键盘、鼠标、游戏手柄等HID外设建立连接并进行输入交互时，调用此接口发起HID Host连接。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    connect(deviceId: string): void;

    /**
     * 断开连接设备的HidHost服务。使用场景：当HID设备不再使用、需要切换至其他HID设备、或需要释放蓝牙HID连接资源时，调用此接口断开当前HID Host连接。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH and ohos.permission.MANAGE_BLUETOOTH
     * @param { string } deviceId - 远端设备地址，例如："XX:XX:XX:XX:XX:XX"。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 202 - Non-system applications are not allowed to use system APIs.
     * @throws { BusinessError } 401 - Invalid parameter. Possible causes: 1. Mandatory parameters are left unspecified.
     *     2. Incorrect parameter types. 3. Parameter verification failed.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900001 - Service stopped.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @systemapi
     * @since 10 dynamic
     * @since 23 static
     */
    disconnect(deviceId: string): void;
  }

  /**
   * 创建蓝牙HID Device实例。通过该实例可使用本端作为HID Device的接口，如：获取和其他设备间
   * 的蓝牙HID连接状态。
   *
   * @returns { HidDeviceProfile } 返回HID Device实例。
   *     该类继承于[BaseProfile]{@link hid.BaseProfile}，因此可以使用其父类中的方法。
   *     和该实例角色相对应的是HID Host角色。
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  function createHidDeviceProfile(): HidDeviceProfile;

  /**
   * 该实例表示蓝牙HID通信中的HID Device角色。
   * 
   * 该类继承于[BaseProfile]{@link hid.BaseProfile}，因此可以使用其父类中的方法。
   * 使用该类的方法前，需通过[createHidDeviceProfile]{@link hid.createHidDeviceProfile}方法构造该类的实例。
   * 通过该实例可以操作设备端的行为，如注册HID设备（[registerHidDevice]{@link hid.HidDeviceProfile.registerHidDevice}），发送报告（
   * [sendReport]{@link hid.HidDeviceProfile.sendReport}）等。
   * 和该实例角色相对应的是HID Host。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  interface HidDeviceProfile extends BaseProfile {
    /**
     * 应用注册HID设备能力，以便与HID主机（如电脑、手机）进行通信。使用callback异步回调。
     * 
     * 当应用调用该接口并注册成功后，可以通过调用[connect]{@link hid.HidDeviceProfile.connect}接口连接HID主机。
     * 同一时间仅允许一个应用成功注册HID设备能力，同一应用重复注册将失败，注册成功后其他应用注册也将失败。
     * 当应用不再需要HID设备能力时，需要主动调用[unregisterHidDevice]{@link hid.HidDeviceProfile.unregisterHidDevice}接口解除注册HID设备能力。
     * 调用该接口时，应用必须处于前台，否则无法注册成功。
     * 应用注册成功之后，若切换到后台，HID设备会自动解除注册，注册状态变化将通过回调上报给上层应用。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { HidDeviceSdp } sdp - HID设备的服务能力记录，定义了设备类型、描述符等具体信息。
     * @param { HidDeviceQos } inQos - 输入通道的Qos配置，用于定义对端到本端的数据流参数。
     * @param { HidDeviceQos } outQos - 输出通道的Qos配置，用于定义本端到对端的数据流参数。
     * @param { Callback<boolean> } callback - 回调函数。返回true表示HID设备当前为注册状态；返回false表示HID设备当前为解注册状态。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2903050 - Application is not in the foreground.
     * @throws { BusinessError } 2903051 - Any app has been registered.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    registerHidDevice(sdp: HidDeviceSdp, inQos: HidDeviceQos, outQos: HidDeviceQos, callback: Callback<boolean>): void;

    /**
     * 解除注册本端作为HID设备的能力，并释放所有相关资源。
     * 
     * 若调用该接口前，本端已通过调用[connect]{@link hid.HidDeviceProfile.connect}建立与HID主机的连接，调用后本端与HID主机的连接会被断开。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    unregisterHidDevice(): void;

    /**
     * 向指定的HID主机发起连接。
     * 
     * 调用该接口前需要先调用[registerHidDevice]{@link hid.HidDeviceProfile.registerHidDevice}完成HID设备能力注册。
     * 可通过订阅
     * [on('connectionStateChange')](docroot://reference/apis-connectivity-kit/js-apis-bluetooth-baseProfile.md#baseprofileonconnectionstatechange)
     * 事件来感知连接是否成功。
     * 当不需要连接时需调用[disconnect]{@link hid.HidDeviceProfile.disconnect}断开连接。此外，调用
     * [unregisterHidDevice]{@link hid.HidDeviceProfile.unregisterHidDevice}解除注册也会断开已有的HID主机连接。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { BluetoothAddress } deviceId -  需要连接的对端蓝牙设备地址信息，HID设备中不涉及rawAddressType，无需给定该参数。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900004 - Remote Device profile not supported.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2903052 - App not register.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    connect(deviceId: BluetoothAddress): void;

    /**
     * 断开与当前HID主机的连接，并释放相关的资源。
     * 
     * 调用成功后不影响当前HID设备的注册状态，应用仍处于已注册状态，可以再次调用[connect]{@link hid.HidDeviceProfile.connect}连接新的HID主机。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2903052 - App not register.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    disconnect(): void;

    /**
     * 向已连接的HID主机发送报告数据。
     * 
     * 调用该接口前必须已调用[registerHidDevice]{@link hid.HidDeviceProfile.registerHidDevice}完成注册，并通过
     * [connect]{@link hid.HidDeviceProfile.connect}建立与HID主机的连接。
     * 报告数据的长度和内容必须与HID设备注册时通过[HidDeviceSdp]{@link hid.HidDeviceSdp}所定义的规范保持一致，否则HID主机将无法正确解析。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { int } id  - 对应HID设备注册时通过[HidDeviceSdp]{@link hid.HidDeviceSdp}提供的描述符中定义的报告ID，用于标识报告类型，对于不带ID的简单设备，此参数应设置为
     *     0。对于定义了多个报告ID的设备，此处应传入对应的ID值，该ID值必须与描述符中定义的值保持一致。
     * @param { Uint8Array } reportData  - 报告数据。其内容长度和解析方式必须严格匹配描述符中为该报告ID定义的格式。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2903052 - App not register.
     * @throws { BusinessError } 2903053 - Device not connected.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    sendReport(id: int, reportData: Uint8Array): void;

    /**
     * 回复已连接HID主机的特定请求。
     * 
     * 调用该接口前必须已调用[registerHidDevice]{@link hid.HidDeviceProfile.registerHidDevice}完成注册，并通过
     * [connect]{@link hid.HidDeviceProfile.connect}建立与HID主机的连接。
     * 通过订阅[onGetReport]{@link hid.HidDeviceProfile.onGetReport(callback: Callback<GetReportData>)}应用可以接收主机的请求。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ReportType } type - 回复的报告类型，应与
     *     [onGetReport]{@link hid.HidDeviceProfile.onGetReport(callback: Callback<GetReportData>)}回调中收到的type保持一致。
     * @param { int } id - 对应HID设备注册时通过[HidDeviceSdp]{@link hid.HidDeviceSdp}提供的描述符中定义的报告ID，用于标识报告类型，对于不带ID的简单设备，此参数应设置为
     *     0。对于定义了多个报告ID的设备，此处应传入对应的ID值，该ID值必须与描述符中定义的值保持一致。
     * @param { Uint8Array } reportData - 报告数据。其内容长度和解析方式必须严格匹配描述符中为该报告ID定义的格式。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2903052 - App not register.
     * @throws { BusinessError } 2903053 - Device not connected.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    replyReport(type: ReportType, id: int, reportData: Uint8Array): void;

    /**
     * 向已连接的HID主机报告特定的错误类型。常用于在收到
     * [onGetReport]{@link hid.HidDeviceProfile.onGetReport(callback: Callback<GetReportData>)}或
     * [onSetReport]{@link hid.HidDeviceProfile.onSetReport(callback: Callback<SetReportData>)}回调后，当数据不符合预期时进行错误回复。
     * 
     * 调用该接口前必须已调用[registerHidDevice]{@link hid.HidDeviceProfile.registerHidDevice}完成注册，并通过
     * [connect]{@link hid.HidDeviceProfile.connect}建立与HID主机的连接。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { ErrorReason } error - 表示要报告给HID主机的具体错误类型。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @throws { BusinessError } 2900003 - Bluetooth disabled.
     * @throws { BusinessError } 2900099 - Operation failed.
     * @throws { BusinessError } 2903052 - App not register.
     * @throws { BusinessError } 2903053 - Device not connected.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    reportError(error: ErrorReason): void;

    /**
     * 订阅HID主机向HID设备发送的GET_REPORT传输请求事件，使用callback异步回调。收到回调后可以通过调
     * 用接口[replyReport]{@link hid.HidDeviceProfile.replyReport}进行回复。当收到的数据不符合预期时，可以通过调用接口
     * [reportError]{@link hid.HidDeviceProfile.reportError}进行回复。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<GetReportData> } callback - 回调函数，返回收到的报告数据。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    onGetReport(callback: Callback<GetReportData>): void;

    /**
     * 取消订阅主机向HID设备发出的GET_REPORT传输请求事件的回调。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<GetReportData> } [callback] - 指定取消订阅的回调函数通知。若传参，则需与
     *     [onGetReport]{@link hid.HidDeviceProfile.onGetReport(callback: Callback<GetReportData>)}中的回调函数一致；若无传参，则取消订阅所有
     *     回调函数通知。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    offGetReport(callback?: Callback<GetReportData>): void;

    /**
     * 订阅HID主机向HID设备发送的SET_REPORT传输请求事件，使用callback异步回调。当收到的数据不符合预
     * 期时，可以通过调用接口[reportError]{@link hid.HidDeviceProfile.reportError}进行回复。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<SetReportData> } callback - 回调函数，返回收到的报告数据。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    onSetReport(callback: Callback<SetReportData>): void;

    /**
     * 取消订阅主机向HID设备发出的SET_REPORT传输请求事件的回调。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<SetReportData> } [callback] - 指定取消订阅的回调函数通知。若传参，则需与
     *     [onSetReport]{@link hid.HidDeviceProfile.onSetReport(callback: Callback<SetReportData>)}中的回调函数一致；若无传参，则取消订阅所有
     *     回调函数通知。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    offSetReport(callback?: Callback<SetReportData>): void;

    /**
     * 订阅HID主机通过中断传输通道发送数据的事件的回调，使用callback异步回调。收到中断数据后，应用可根据报告ID解析并处理相应数据，例如处理主机下发的输出报告（如键盘LED状态指示等）。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<InterruptData> } callback - 回调函数，返回收到的中断数据。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    onInterruptDataReceived(callback: Callback<InterruptData>): void;

    /**
     * 取消订阅主机通过中断传输通道发送数据事件的回调。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<InterruptData> } [callback] - 指定取消订阅的回调函数通知。若传参，则需与
     *     [onInterruptDataReceived]{@link hid.HidDeviceProfile.onInterruptDataReceived(callback: Callback<InterruptData>)}
     *     中的回调函数一致；若无传参，则取消订阅所有回调函数通知。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    offInterruptDataReceived(callback?: Callback<InterruptData>): void;

    /**
     * 订阅HID主机向HID设备发送的SET_PROTOCOL请求事件，使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<ProtocolData> } callback - 回调函数。返回收到的协议数据。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    onSetProtocol(callback: Callback<ProtocolData>): void;

    /**
     * 取消订阅主机向HID设备发送的SET_PROTOCOL请求事件的回调。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<ProtocolData> } [callback] - 指定取消订阅的回调函数通知。若传参，则需与
     *     [onSetProtocol]{@link hid.HidDeviceProfile.onSetProtocol(callback: Callback<ProtocolData>)}中的回调函数一致；若无传参，则取消订
     *     阅所有回调函数通知。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    offSetProtocol(callback?: Callback<ProtocolData>): void;

    /**
     * 订阅主机断开HID虚拟链路事件的回调。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<void> } callback - 回调函数。当主机断开虚拟链路时返回。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    onVirtualCableUnplug(callback: Callback<void>): void;

    /**
     * 取消订阅主机断开HID虚拟链路事件的回调。使用callback异步回调。
     *
     * @permission ohos.permission.ACCESS_BLUETOOTH
     * @param { Callback<void> } [callback] - 指定取消订阅的回调函数通知。若传参，则需与
     *     [onVirtualCableUnplug]{@link hid.HidDeviceProfile.onVirtualCableUnplug(callback: Callback<void>)}中的回调函数一致；若无传
     *     参，则取消订阅所有回调函数通知。
     * @throws { BusinessError } 201 - Permission denied.
     * @throws { BusinessError } 801 - Capability not supported.
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    offVirtualCableUnplug(callback?: Callback<void>): void;
  }

  /**
   * 描述HID设备在服务发现协议（SDP）中的服务注册配置。该结构定义了HID设备的身份标识、能力描述和协议特征，是HID主机发现、识别和连接
   * HID设备的关键参数。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  interface HidDeviceSdp {
    /**
     * HID设备的名称，要求长度范围：[1, 50]，单位：Byte。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    name: string;
    /**
     * HID设备的描述信息，要求长度范围：[1, 50]，单位：Byte。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    description: string;
    /**
     * 描述HID设备的制造商信息，要求长度范围：[1, 50]，单位：Byte。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    provider: string;
    /**
     * 表示HID设备具体类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    subclass: Subclass;
    /**
     * 用于标识蓝牙HID设备功能定义的描述符。描述符会为每个支持的报告分配一个唯一的ID， 并详细定义该ID下报告的长度、结构与各字段含义。填写时需要遵循USB HID规范。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    descriptors: Uint8Array;
  }

  /**
   * 描述HID设备服务质量（Qos）参数。该结构定义了HID数据传输通道的流量控制、延迟保证和可靠性策略，用于优化蓝牙传输性能，确保设备的实时响应性。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  interface HidDeviceQos {
    /**
     * 服务类型，默认为SERVICE_BEST_EFFORT。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    serviceType?: ServiceType;
    /**
     * 单位时间内允许传输的平均数据量，单位为Byte/s，默认为0，表示没有平均数据量限制。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    tokenRate?: int;
    /**
     * 允许短时间内超过tokenRate的最大数据量，单位为Byte，默认为0，表示没有最大数据量限制。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    tokenBucketSize?: int;
    /**
     * 最大传输速率限制，取值范围[0, +∞)，单位为Byte/s，默认为0，表示没有传输速率限制。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    peakBandwidth?: int;
    /**
     * 最大允许延迟时间，单位为μs，默认为-1，表示没有延迟限制。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    latency?: int;
    /**
     * 允许的延迟波动范围，单位为μs，默认为-1，表示没有延迟波动范围限制。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    delayVariation?: int;
  }

  /**
   * 描述HID主机向HID设备发送的GET_REPORT传输请求事件的信息。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  interface GetReportData {
    /**
     * 报告类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    type: ReportType;
    /**
     * 对应HID设备注册时通过[HidDeviceSdp]{@link hid.HidDeviceSdp}提供的描述符中定义的报告ID，用于标识报告类型，对于不带ID的简单设备，此参数应设置为0。对于定义了多个报告ID的设备，此处应
     * 传入对应的ID值，该ID值必须与描述符中定义的值保持一致。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    id: int;
    /**
     * 收到数据的长度，单位为Byte。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    bufferSize: int;
  }

  /**
   * 描述HID主机向HID设备发送的SET_REPORT传输请求事件的信息。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  interface SetReportData {
    /**
     * 报告类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    type: ReportType;
    /**
     * 对应HID设备注册时通过[HidDeviceSdp]{@link hid.HidDeviceSdp}提供的描述符中定义的报告ID，用于标识报告类型，对于不带ID的简单设备，此参数应设置为0。对于定义了多个报告ID的设备，此处应
     * 传入对应的ID值，该ID值必须与描述符中定义的值保持一致。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    id: int;
    /**
     * 配置数据。其内容长度和解析方式必须严格匹配描述符中为该报告ID定义的格式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    data: Uint8Array;
  }

  /**
   * 描述从主机收到的中断数据。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  interface InterruptData {
    /**
     * 对应HID设备注册时通过[HidDeviceSdp]{@link hid.HidDeviceSdp}提供的描述符中定义的报告ID，用于标识报告类型，对于不带ID的简单设备，此参数应设置为0。对于定义了多个报告ID的设备，此处应
     * 传入对应的ID值，该ID值必须与描述符中定义的值保持一致。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    id: int;
    /**
     * 中断数据。其内容长度和解析方式必须严格匹配HID设备注册时通过[HidDeviceSdp]{@link hid.HidDeviceSdp}提供的描述符中为该报告ID定义的格式。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    data: Uint8Array;
  }

  /**
   * 描述从HID主机接收的通信协议数据。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  interface ProtocolData {
    /**
     * 主机的不同通信协议类型。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    protocol: ProtocolType;
  }

  /**
   * 枚举，HID设备的具体类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  enum Subclass {
    /**
     * 未分类HID设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SUBCLASS_UNCATEGORIZED = 0,
    /**
     * 摇杆设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SUBCLASS_JOYSTICK = 1,
    /**
     * 游戏手柄设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SUBCLASS_GAMEPAD = 2,
    /**
     * 遥控器设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SUBCLASS_REMOTE_CONTROL = 3,
    /**
     * 传感设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SUBCLASS_SENSING_DEVICE = 4,
    /**
     * 数位板设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SUBCLASS_DIGITIZER_TABLET = 5,
    /**
     * 读卡器设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SUBCLASS_CARD_READER = 6,
    /**
     * 标准键盘设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SUBCLASS_KEYBOARD = 64,
    /**
     * 标准鼠标设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SUBCLASS_MOUSE = 128,
    /**
     * 组合输入设备。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SUBCLASS_COMBO = 192
  }

  /**
   * 枚举，报告类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  enum ReportType {
    /**
     * 输入报告，表示由本端向HID主机发送的数据。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    REPORT_TYPE_INPUT = 1,
    /**
     * 输出报告，表示HID主机向本端发送的数据。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    REPORT_TYPE_OUTPUT = 2,
    /**
     * 特征报告，表示双向传输的配置数据。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    REPORT_TYPE_FEATURE = 3
  }

  /**
   * 枚举，描述HID设备与主机之间连接的服务类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  enum ServiceType {
    /**
     * 低功耗模式，仅维持连接，不传输应用数据，功耗最低。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SERVICE_NO_TRAFFIC = 0,
    /**
     * 高速模式，传输速率最快，但是数据包可能丢失或乱序，适用于对延迟敏感但对丢包不敏感的场景。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SERVICE_BEST_EFFORT = 1,
    /**
     * 可靠模式，传输速度稍慢，但是保证数据正确送达，适用于文件传输等场景。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    SERVICE_GUARANTEED = 2
  }

  /**
   * 枚举，描述错误原因。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  enum ErrorReason {
    /**
     * 成功无异常。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    RSP_SUCCESS = 0,
    /**
     * 设备未准备好处理请求。建议主机稍后重试。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    RSP_NOT_READY = 1,
    /**
     * 无效的报告ID。建议主机确认当前支持的ID列表，并使用正确的ID重发消息。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    RSP_INVALID_REPORT_ID = 2,
    /**
     * 当前请求不支持，建议主机检查当前请求类型或报告类型是否在当前协议模式下被本端支持。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    RSP_UNSUPPORTED_REQ = 3,
    /**
     * 无效参数。建议主机检查请求中的参数是否超出本端声明的范围或不符合报告描述符的定义。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    RSP_INVALID_PARAM = 4,
    /**
     * 未知错误原因。建议主机记录错误上下文并重试。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    RSP_UNKNOWN = 14
  }

  /**
   * 枚举，HID设备与主机的通信协议类型。
   *
   * @syscap SystemCapability.Communication.Bluetooth.Core
   * @stagemodelonly
   * @since 23 dynamic
   * @since 26.1.0 static
   */
  enum ProtocolType {
    /**
     * 兼容模式，确保设备在系统启动阶段和所有平台都能被识别为基本输入设备，兼容性最好但功能有限，适用于如键盘鼠标简单外设开发。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    PROTOCOL_BOOT_MODE = 0,
    /**
     * 完整的报告协议模式，允许设备使用完整的HID描述符和所有报告类型，适用于如游戏手柄、触摸屏等需要丰富功能与自定义数据格式的复杂外设。
     *
     * @syscap SystemCapability.Communication.Bluetooth.Core
     * @stagemodelonly
     * @since 23 dynamic
     * @since 26.1.0 static
     */
    PROTOCOL_REPORT_MODE = 1
  }
}

export default hid;