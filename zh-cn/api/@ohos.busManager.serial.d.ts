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
 串口通信管理
 * @file
 串口通信管理
 * @kit BasicServicesKit
 */

import { Callback } from './@ohos.base';

/**
 * 本模块提供串口通信管理功能，适用于需要与串口设备进行数据交互的场景，如工业控制、传感器数据采集、嵌入式设备通信等。支持获取串口设备列表、
 * 打开和关闭串口、读写数据、硬件流控信号管理等功能，帮助开发者便捷地实现与外部串口设备的通信，提高设备互联效率。
 *
 * @syscap SystemCapability.BusManager.Serial
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace serial {
  /**
   * 查询串口设备列表，返回[SerialPort]{@link serial.SerialPort}对象数组。使用Promise异步回调。用于需要识别可用串口设备的场景，如工业设备连接、物联网设备管理、嵌入式系统调试等场景。
   *
   * @returns { Promise<SerialPort[]> } - Promise对象，返回串口设备列表。
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 35700001 - Service error.
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSerialPortList(): Promise<SerialPort[]>;
  /**
   * 串口对象，提供串口设备的信息和通信能力。
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SerialPort {
    /**
     * 串口设备信息。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly portInfo: SerialPortInfo;

    /**
     * 打开串口设备。使用Promise异步回调。用于建立与串口设备的通信连接，如传感器数据采集、设备控制命令发送、串口打印机等场景。
   	 *
   	 * **配对调用：**
   	 * - 调用open()后，必须在使用完毕后调用close()释放串口资源
   	 * - 未调用close()会导致串口资源泄漏，可能影响其他应用的串口使用
     *
     * @param { SerialConfigs } [config] - 串口通信参数。不传入config参数时，使用SerialConfigs的默认配置打开串口。
     * @returns { Promise<void> } - Promise对象，无返回值。
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
     * 关闭串口设备。使用Promise异步回调。用于断开与串口设备的通信连接，如应用退出、设备切换、任务完成后释放串口资源等场景。需在串口打开后调用。
   	 *
   	 * **配对调用：**
   	 * - 必须先调用open()打开串口，才能调用close()关闭串口
   	 * - 调用close()后释放串口资源，如需再次使用需要重新调用open()
     *
     * @returns { Promise<void> } - Promise对象，无返回值。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    close(): Promise<void>;

    /**
     * 向串口设备发送数据，每次发送数据长度范围：(0, 4096]。使用Promise异步回调。用于向连接的串口设备发送控制命令、数据包、配置参数等，如工业控制、设备调试、数据采集等场景。需在串口打开后调用。
   	 *
   	 * **调用顺序：**
   	 * - 必须先调用open()打开串口，才能调用write()发送数据
   	 * - 未调用open()就调用write()会抛出错误码35700005（Port not open）
     *
     * @param { Uint8Array } data - 待发送的数据。长度范围：(0, 4096]。发送超过4096字节的数据时，建议分多次调用write方法发送。
     * @param { int } [timeout] - 超时时间，取值范围：[0, 300000]，整数，单位为毫秒。默认值0表示当数据无法写入串口时，不等待直接返回写入长度0。
   	 *     传入负数、非整数或大于300000时返回错误码35700002。
     * @returns { Promise<int> } - Promise对象，返回写入数据长度。
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
     * 监听串口接收数据事件。使用callback异步回调，返回接收到的数据。需在串口打开后调用，调用[close]{@link serial.SerialPort.close}后，所有回调将被清除。
     * 用于实时接收串口设备发送的数据，如传感器数据监测、设备状态反馈、实时数据采集等场景。
   	 *
   	 * **配对调用：**
   	 * - 与offDataRead()方法配对使用，offDataRead()用于取消监听
   	 * - 建议在不需要监听时调用offDataRead()释放监听资源
   	 *
   	 * **调用顺序：**
   	 * - 必须先调用open()打开串口，才能调用onDataRead()监听数据
   	 * - 未调用open()就调用onDataRead()会抛出错误码35700005（Port not open）
     *
     * @param { Callback<Uint8Array> } callback - 回调函数，返回串口接收到的数据。用于监听串口数据接收事件，注册回调后，串口接收到数据时会触发该回调函数。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onDataRead(callback: Callback<Uint8Array>): void;

    /**
     * 取消监听串口接收数据事件。用于不再需要监听串口数据接收时释放监听资源，如应用切换到其他功能、主动断开连接后清理监听等场景。
   	 *
   	 * **配对调用：**
   	 * - 与onDataRead()方法配对使用，用于取消onDataRead()注册的监听
   	 * - 可以取消所有监听，也可以取消指定的监听回调
     *
     * @param { Callback<Uint8Array> } [callback] - 回调函数。传入callback时，取消指定的串口数据接收监听；不传入callback时，清除所有串口数据接收监听。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offDataRead(callback?: Callback<Uint8Array>): void;

    /**
     * 监听串口断开事件。使用callback异步回调。调用close后，所有回调将被清除。用于监听串口连接断开事件，如USB虚拟串口拔出、设备断电、连接中断时及时处理异常状态、提示用户或尝试重连等场景。
   	 *
   	 * **配对调用：**
   	 * - 与offDisconnect()方法配对使用，offDisconnect()用于取消监听
   	 * - 建议在不需要监听时调用offDisconnect()释放监听资源
   	 *
   	 * **调用顺序：**
   	 * - 必须先调用open()打开串口，才能调用onDisconnect()监听断开事件
   	 * - 未调用open()就调用onDisconnect()会抛出错误码35700005（Port not open）
     *
     * @param { Callback<void> } callback - 回调函数，串口断开时触发。用于监听串口断开事件，注册回调后，串口设备断开连接时会触发该回调函数。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onDisconnect(callback: Callback<void>): void;

    /**
     * 取消监听串口断开事件。需在串口打开后调用。用于不再需要监听串口断开事件时释放监听资源，如应用切换到其他功能、主动断开连接后清理监听等场景。
   	 *
   	 * **调用顺序：**
   	 * - 必须先调用open()打开串口，才能调用offDisconnect()取消监听
   	 * - 未调用open()就调用offDisconnect()会抛出错误码35700005（Port not open）
   	 *
   	 * **配对调用：**
   	 * - 与onDisconnect()方法配对使用，用于取消onDisconnect()注册的监听
   	 * - 可以取消所有监听，也可以取消指定的监听回调
     *
     * @param { Callback<void> } [callback] - 回调函数，需先通过onDisconnect()注册回调后才能取消。传入callback时，取消指定的串口断开事件监听；
     *     不传入callback时，清除所有串口断开事件监听。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offDisconnect(callback?: Callback<void>): void;

    /**
     * 清空串口缓冲区，包括读缓冲区和写缓冲区，缓冲区中的数据将被直接丢弃，不再发送或读取。使用Promise异步回调。需在串口打开后调用。
     * 用于丢弃缓冲区中无效或过时的数据，如数据传输出错时清空缓冲区重传、切换通信协议时清理旧数据等场景。
   	 *
   	 * **调用顺序：**
   	 * - 必须先调用open()打开串口，才能调用flush()清空缓冲区
   	 * - 未调用open()就调用flush()会抛出错误码35700005（Port not open）
   	 *
   	 * **与drain的区别：** flush直接丢弃缓冲区中的所有数据，适用于需要快速清空缓冲区或丢弃无效数据的场景；drain等待写缓冲区中的数据正常发送完成，适用于需要确保数据完整传输的场景。
     *
     * @returns { Promise<void> } - Promise对象，无返回值。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    flush(): Promise<void>;

    /**
     * 等待所有写请求完成。使用Promise异步回调。需在串口打开后调用。用于确保所有数据写入完成后再进行后续操作，如数据传输完成后关闭串口、发送数据后等待硬件响应等场景。
   	 *
   	 * **调用顺序：**
   	 * - 必须先调用open()打开串口，才能调用drain()
   	 * - 应在write()之后调用drain()，确保写入数据完全发送
   	 * - 建议在close()之前调用drain()，确保所有数据完整传输后再关闭串口
   	 * - 未调用open()就调用drain()会抛出错误码35700005（Port not open）
   	 *
   	 * **与flush的区别：** 
   	 * - drain等待写缓冲区中的数据正常发送完成，适用于需要确保数据完整传输的场景；flush直接丢弃缓冲区中的所有数据，适用于需要快速清空缓冲区或丢弃无效数据的场景。
     *
     * @returns { Promise<void> } - Promise对象，无返回值。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    drain(): Promise<void>;

    /**
     * 设置RTS（请求发送）信号状态。使用Promise异步回调。需在串口打开后调用。用于控制硬件流控的请求发送信号，如启用RTS/CTS硬件流控时控制发送权、与支持硬件流控的设备通信等场景。
   	 *
   	 * **调用顺序：**
   	 * - 必须先调用open()打开串口，才能调用setRts()设置RTS信号
   	 * - 未调用open()就调用setRts()会抛出错误码35700005（Port not open）
   	 *
   	 * **与setDtr的区别：** setRts和setDtr分别控制RTS/CTS和DTR/DSR两种硬件信号。RTS/CTS主要用于数据流控制，可通过SerialConfigs.rtscts启用自动流控；
   	 *     DTR/DSR主要用于设备状态控制和检测，用于特殊协议或设备状态管理。
     *
     * @param { boolean } enable - RTS信号状态，true表示请求发送数据，false表示不请求发送数据。
     * @returns { Promise<void> } - Promise对象，无返回值。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setRts(enable: boolean): Promise<void>;

    /**
     * 获取CTS（清除发送）信号状态。使用Promise异步回调。需在串口打开后调用。用于查询硬件流控的清除发送信号状态，判断是否可以发送数据，如启用RTS/CTS硬件流控时检查发送权、与支持硬件流控的设备通信前检查状态等场景。
   	 *
   	 * **调用顺序：**
   	 * - 必须先调用open()打开串口，才能调用getCts()获取CTS信号
   	 * - 未调用open()就调用getCts()会抛出错误码35700005（Port not open）
   	 *
   	 * **与getDsr的区别：** 
   	 * - getCts查询CTS信号（清除发送），属于RTS/CTS硬件流控信号，用于判断是否可以发送数据；getDsr查询DSR信号（数据设备就绪），属于DTR/DSR设备状态信号，用于判断通信设备是否准备就绪。
     *
     * @returns { Promise<boolean> } - Promise对象，返回CTS信号状态，返回true表示可以发送数据，返回false表示不可以发送数据。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getCts(): Promise<boolean>;

    /**
     * 设置DTR（数据终端就绪）信号状态。使用Promise异步回调。需在串口打开后调用。用于控制数据终端就绪信号，如向设备通知终端准备就绪、通过DTR信号控制设备上电或复位、与需要DTR信号检测的设备通信等场景。
     *
     * @param { boolean } enable - DTR信号状态，true表示数据终端就绪；false表示数据终端未就绪。
     * @returns { Promise<void> } - Promise对象，无返回值。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setDtr(enable: boolean): Promise<void>;

    /**
     * 获取DSR（数据设备就绪）信号状态。使用Promise异步回调。需在串口打开后调用。用于查询数据设备就绪信号状态，判断通信设备是否准备就绪，如检查设备连接状态、在设备准备就绪后开始通信等场景。
     *
     * @returns { Promise<boolean> } Promise对象，返回DSR信号状态；true表示数据设备就绪；false表示数据设备未就绪。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getDsr(): Promise<boolean>;

    /**
     * 发送BRK（中断）信号。使用Promise异步回调。需在串口打开后调用。用于向设备发送中断信号，如紧急停止设备通信、通知设备复位、特殊协议要求的信号交互等场景。
     *
     * @returns { Promise<void> } - Promise对象，无返回值。
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sendBrk(): Promise<void>;
  }
  /**
   * 串口设备信息。
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SerialPortInfo {
    /**
     * 端口名称。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    portName: string;

    /**
     * USB虚拟串口的厂商ID。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    vendorId?: int;

    /**
     * USB虚拟串口设备的产品ID。
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
   * 表示数据位的枚举。
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum DataBits {
    /**
     * 5个数据位。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FIVE = 5,

    /**
     * 6个数据位。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SIX = 6,

    /**
     * 7个数据位。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SEVEN = 7,

    /**
     * 8个数据位。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EIGHT = 8
  }

  /**
   * 表示停止位的枚举。
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum StopBits {
    /**
     * 1个停止位。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ONE = 1,

    /**
     * 2个停止位。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TWO = 2
  }

  /**
   * 表示校验位的枚举。
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum Parity {
    /**
     * 无校验。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NONE = 'none',

    /**
     * 偶校验。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EVEN = 'even',

    /**
     * 奇校验。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ODD = 'odd',

    /**
     * 标记校验，校验位始终为1。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MARK = 'mark',

    /**
     * 空格校验，校验位始终为0。
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SPACE = 'space'
  }

  /**
   * 串口通信配置参数。
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SerialConfigs {
    /**
     * 波特率。值为正整数，非标准波特率的具体支持情况依赖于硬件。单位：bit/s。默认值：115200。
     *
     * @default 115200
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    baudRate?: int;

    /**
     * 数据位。默认值：EIGHT（8数据位，标准通信）。FIVE/SIX/SEVEN用于老旧设备或特殊协议。
     *
     * @default EIGHT
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    dataBits?: DataBits;

    /**
     * 停止位。默认值：ONE。1个停止位用于标准通信场景；2个停止位用于低速通信或与老旧设备通信时增加信号稳定性。
     *
     * @default ONE
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopBits?: StopBits;

    /**
     * 校验位。默认值：NONE（无校验）。EVEN/ODD用于数据准确性要求高的场景；MARK/SPACE用于特殊通信协议。
     *
     * @default NONE
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    parity?: Parity;

    /**
     * 是否启用RTS/CTS硬件自动流控。RTS/CTS硬件流控是一种通过硬件信号实现的自动数据流控制机制，RTS和CTS信号线协同工作以防止缓冲区溢出。
     * 启用后，系统会自动控制RTS和CTS信号来管理数据流量。默认值：false。true表示启用，false表示未启用。
     *
     * @default false
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    rtscts?: boolean;

    /**
     * 是否启用XON（Xmitter On，传输继续控制字符）控制发送流。XON是软件流控协议中的一个控制字符（ASCII值为17），当接收端缓冲区有空间时发送XON字符通知发送端恢复发送数据。
     * 默认值：false。true表示启用，false表示未启用。
     *
     * @default false
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xon?: boolean;

    /**
     * 是否启用XOFF（Xmitter Off，传输停止控制字符）控制发送流。XOFF是软件流控协议中的一个控制字符（ASCII值为19），当接收端缓冲区即将溢出时发送XOFF字符通知发送端暂停发送数据。
     * 默认值：false。true表示启用，false表示未启用。
     *
     * @default false
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xoff?: boolean;

    /**
     * 是否启用XANY（Any Character Resume，任意字符恢复模式）控制流。XANY是软件流控协议中的一种扩展模式，需在xon或xoff启用时才能生效。
     * 当启用XANY时，任何字符都可以作为恢复发送的信号，而不仅仅是XON字符；若未启用软件流控（xon/xoff），xany设置无效。默认值：false。true表示启用，false表示未启用。
     *
     * @default false
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xany?: boolean;
  }

  /**
   * 添加应用访问串口的权限。此函数通过将应用的Token ID与串口设备ID关联，建立应用的串口访问权限关系。适用于系统管理类应用为第三方应用授予串口访问权限的场景，如设备管理工具为工业数据采集应用分配串口权限。
   * 仅用于会弹出串口授权弹窗的系统应用，在用户授权后，权限信息将持久化存储。使用Promise异步回调。
   *
   * @param { string } tokenId - 被授权应用的Token ID，用于标识被授予串口访问权限的应用。设置后，指定该应用可获得对相应串口设备的访问权限。可通过
   *     [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}获取。
   * @param { string } deviceId - 串口设备ID，用于指定需要授权访问的串口设备。可通过接口[getSerialPortList]{@link serial.getSerialPortList}获取
   *     串口设备列表。板载串口取值为portName；USB虚拟串口取值为VID+PID+SN的组合或设备路径（如/dev/ttyUSB0）。设置后，应用将获得对指定串口设备的访问权限。
   * @returns { Promise<void> } - Promise对象，无返回结果。
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