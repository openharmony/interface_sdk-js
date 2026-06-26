/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License"),
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
 * @kit BasicServicesKit
 */

import { Callback } from './@ohos.base';

/**
 * 串口管理
 *
 * @syscap SystemCapability.BusManager.Serial
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace serial {

  /**
   * 获取串口列表。使用Promise异步回调。
   *
   * @returns { Promise<SerialPort[]> } - Promise used to return the list of serial port devices.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 35700001 - Service error.
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSerialPortList(): Promise<SerialPort[]>;

  /**
   * 串口对象，提供串口设备信息和通信相关能力
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SerialPort {

    /**
     * 串口端口信息
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly portInfo: SerialPortInfo;

    /**
     * 打开端口。使用Promise异步回调。
     *
     * @param { SerialConfigs } [config] - 串口通信参数
     *     <br>默认值:默认值：参考SerialConfigs的默认值。
     *     <br>Default value: Refer to the default value of SerialConfigs..
     * @returns { Promise<void> } - Promise对象，无返回结果
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700002 - Invalid parameter.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700004 - Port already in use.
     * @throws { BusinessError } 35700007 - User authorization required.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    open(config?: SerialConfigs): Promise<void>;

    /**
     * 关闭串口。使用Promise异步回调。
     *
     * @returns { Promise<void> } - Promise对象，无返回结果
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    close(): Promise<void>;

    /**
     * 发送数据。使用Promise异步回调。
     *
     * @param { Uint8Array } data - 要发送的数据
     *     <br>长度范围:(0,4096]。
     * @param { int } [timeout] - 超时时间
     *     <br>长度范围:[0,300000]。取值限定为整数。单位:毫秒。默认值:0。
     *     <br>表示端口无法写入数据时不等待，直接返回。
     * @returns { Promise<int> } - Promise对象，返回成功写入的长度
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700002 - Invalid parameter.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @throws { BusinessError } 35700006 - Transmission timeout.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    write(data: Uint8Array, timeout?: int): Promise<int>;

    /**
     * 监听串口端口接收到的数据。使用Callback异步回调。
     * 调用{@link close}接口时，会清理全部回调
     *
     * @param { Callback<Uint8Array> } callback - 回调函数，返回串口端口接收到的数据
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onDataRead(callback: Callback<Uint8Array>): void;

    /**
     * 取消监听串口端口接收数据事件。
     *
     * @param { Callback<Uint8Array> } [callback] - 回调函数，返回串口端口接收到的数据
     *     <br>默认值:缺省行为：清除串口端口接收数据事件的所有监听。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offDataRead(callback?: Callback<Uint8Array>): void;

    /**
     * flush串口缓冲区。使用Promise异步回调。
     *
     * @returns { Promise<void> } - Promise对象，无返回结果
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    flush(): Promise<void>;

    /**
     * 等待所有写入请求完成。使用Promise异步回调。
     *
     * @returns { Promise<void> } - Promise对象，无返回结果
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    drain(): Promise<void>;

    /**
     * 设置rts信号。使用Promise异步回调。
     *
     * @param { boolean } enable - RTS信号状态，表示是否请求发送。
     * @returns { Promise<void> } - Promise对象，无返回结果
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setRts(enable: boolean): Promise<void>;

    /**
     * 获取cts信号状态。使用Promise异步回调。
     *
     * @returns { Promise<boolean> } - Promise对象，返回CTS信号状态，表示是否允许发送数据
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getCts(): Promise<boolean>;

    /**
     * 发送brk信号。使用Promise异步回调。
     *
     * @returns { Promise<void> } - Promise对象，无返回结果
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sendBrk(): Promise<void>;

    /**
     * 监听USB虚拟串口断开事件。使用Callback异步回调。
     * 调用{@link close}接口时，会清理全部回调
     *
     * @param { Callback<void> } callback - USB虚拟串口断开事件的回调函数。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onDisconnect(callback: Callback<void>): void;

    /**
     * 取消监听USB虚拟串口断开事件。
     *
     * @param { Callback<void> } [callback] - USB虚拟串口断开的回调函数。
     *     <br>默认值：清除所有USB虚拟串口断开事件的回调函数。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offDisconnect(callback?: Callback<void>): void;

    /**
     * 设置DTR信号状态，使用Promise异步返回
     *
     * @param { boolean } enable - DTR信号状态，表示本端是否就绪。
     * @returns { Promise<void> } - 不返回任何值的Promise。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setDtr(enable: boolean): Promise<void>;

    /**
     * 获取DSR信号状态，使用Promise异步返回
     *
     * @returns { Promise<boolean> } DSR信号状态，true表示对端已就绪，false表示对端未就绪
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDsr(): Promise<boolean>;
  }

  /**
   * 串口设备信息
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SerialPortInfo {

    /**
     * 端口名称
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    portName: string;

    /**
     * USB虚拟串口的vendorId
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    vendorId?: int;

    /**
     * USB虚拟串口设备的productId
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    productId?: int;

    /**
     * USB虚拟串口设备的制造商名称。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    manufacturer?: string;
  }

  /**
   * 串口通信中的数据位
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum DataBits {

    /**
     * 5位数据位
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FIVE = 5,

    /**
     * 6位数据位
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SIX = 6,

    /**
     * 7位数据位
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SEVEN = 7,

    /**
     * 8位数据位
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EIGHT = 8
  }

  /**
   * 串口通信中的停止位
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum StopBits {

    /**
     * 1位停止位
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ONE = 1,

    /**
     * 2位停止位
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TWO = 2
  }

  /**
   * 串口通信中的校验位
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum Parity {

    /**
     * 无校验位
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NONE = 'none',

    /**
     * 偶校验
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EVEN = 'even',

    /**
     * 奇校验
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ODD = 'odd',

    /**
     * Mark校验，校验位始终为1
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MARK = 'mark',

    /**
     * Space parity. 校验位始终为0
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SPACE = 'space'
  }

  /**
   * 串口通信配置
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SerialConfigs {

    /**
     * 波特率
     * 取值限定为整数。
     * 取值约束:标准波特率。
     * <br>单位:bps。
     * <br>默认值:115200。
     *
     * @default 115200
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    baudRate?: int;

    /**
     * 数据位
     * <br>默认值:EIGHT。
     *
     * @default EIGHT
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    dataBits?: DataBits;

    /**
     * 停止位
     *
     * <br>默认值:ONE。
     *
     * @default ONE
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopBits?: StopBits;

    /**
     * 校验位
     * <br>默认值:NONE。
     *
     * @default NONE
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    parity?: Parity;

    /**
     * 是否开启硬件自动流控
     * <br>默认值:false。
     *
     * @default false
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    rtscts?: boolean;

    /**
     * 是否启用XON软件流控发送
     * <br>默认值:false。
     *
     * @default false
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xon?: boolean;

    /**
     * 是否启用XOFF软件流控接收
     * <br>默认值:false。
     *
     * @default false
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xoff?: boolean;

    /**
     * 是否启用XANY软件流控
     * <br>默认值:false。
     *
     * @default false
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xany?: boolean;
  }

  /**
   * 添加应用访问串口端口的权限
   * 仅面向串口授权弹窗系统应用开放
   *
   * @param { string } tokenId - 被授权应用的tokenId
   * @param { string } deviceId - 串口设备ID
   *     <br>对于板载串口，取值为portName；对于USB虚拟串口，取值为vid+pid+SN拼接。
   * @returns { Promise<void> } - Promise对象，无返回结果
   * @throws { BusinessError } 202 - Permission denied. Called by non-system application
   * @throws { BusinessError } 35700001 - Service error.
   * @throws { BusinessError } 35700002 - Invalid parameter.
   * @throws { BusinessError } 35700008 - Permission denied.
   * @syscap SystemCapability.BusManager.Serial
   * @systemapi
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function addPortAuthorization(tokenId: string, deviceId: string): Promise<void>;
}

export default serial;