/*
 * Copyright (c) 2024 Huawei Device Co., Ltd.
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

/**
 * 本模块主要提供串口管理功能，包括打开和关闭设备的串口、写入和读取数据、设置和获取串口的配置参数、权限管理等。
 *
 * @syscap SystemCapability.USB.USBManager.Serial
 * @since 19 dynamic
 * @since 23 static
 */
declare namespace serialManager {

  /**
   * 查询串口设备清单，包括设备名称和对应的端口号。
   *
   * @returns { Readonly<SerialPort>[]} Serial port information list.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function getPortList(): Readonly<SerialPort>[];

  /**
   * 检查应用程序是否具有访问串口设备的权限。应用退出后再拉起时，需要重新申请授权。
   *
   * @param { int} portId - 目标设备的端口号，来自[getPortList]{@link serialManager.getPortList()}获取的串口参数SerialPort。
   * @returns {boolean} true表示已授权，false表示未授权。
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14400005 Database operation exception.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function hasSerialRight(portId: int): boolean;

  /**
   * 请求应用程序访问串口设备的权限。应用退出自动移除对串口设备的访问权限，在应用重启后需要重新申请授权。使用Promise异步回调。
   *
   * @param { int} portId - 目标设备的端口号，来自[getPortList]{@link serialManager.getPortList()}获取的串口参数SerialPort。
   * @returns { Promise<boolean>} Promise对象，true表示请求权限成功，false表示请求权限失败。
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14400005 Database operation exception.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function requestSerialRight(portId: int): Promise<boolean>;

  /**
   * 为应用程序添加访问串口设备权限。
   * serialManager.requestSerialRight会触发弹窗请求用户授权；addSerialRight不会触发弹窗，而是直接添加应用程序访问设备的权限。应用退出自动移除对串口设备的访问权限，在应用重启后需要重新申请授
   * 权。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } tokenId - 需要访问权限的tokenId。
   * @param { int} portId - 目标设备的端口号，来自[getPortList]{@link serialManager.getPortList()}获取的串口参数SerialPort。
   * @throws { BusinessError } 201 Permission verification failed. The application does not have the permission required to
   *     call the API.
   * @throws { BusinessError } 202 Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14400005 Database operation exception.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @systemapi
   * @since 19 dynamic
   * @since 23 static
   */
  function addSerialRight(tokenId: int, portId: int): void;

  /**
   * 移除应用程序运行时访问串口设备的权限。此接口会调用close关闭已打开的串口。
   *
   * @param { int} portId - 目标设备的端口号，来自[getPortList]{@link serialManager.getPortList()}获取的串口参数SerialPort。
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 14400005 Database operation exception.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400002 Access denied. Call requestSerialRight to request user authorization first.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function cancelSerialRight(portId: int): void;

  /**
   * 打开串口设备。
   *
   * @param { int} portId - 目标设备的端口号，来自[getPortList]{@link serialManager.getPortList()}获取的串口参数SerialPort。
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400002 Access denied. Call requestSerialRight to request user authorization first.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400004 The serial port device is occupied.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function open(portId: int): void;

  /**
   * 关闭串口。
   *
   * @param { int} portId - 目标设备的端口号，来自[getPortList]{@link serialManager.getPortList()}获取的串口参数SerialPort。
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function close(portId: int): void;

  /**
   * 获取指定串口的配置参数。
   *
   * @param { int} portId - 目标设备的端口号，来自[getPortList]{@link serialManager.getPortList()}获取的串口参数SerialPort。
   * @returns { Readonly<SerialAttribute>} 返回串口的配置参数。
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function getAttribute(portId: int): Readonly<SerialAttribute>;

  /**
   * 设置串口的配置参数。如果未调用该方法，使用默认配置参数（波特率：9600bps；数据位：8；校验位：0；停止位：1）。
   *
   * @param { int} portId - 目标设备的端口号，来自[getPortList]{@link serialManager.getPortList()}获取的串口参数SerialPort。
   * @param { SerialAttribute} attribute - 串口参数。
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function setAttribute(portId: int, attribute: SerialAttribute): void;

  /**
   * 从串口设备异步读取数据。使用Promise异步回调。
   *
   * @param { int} portId - 目标设备的端口号，来自[getPortList]{@link serialManager.getPortList()}获取的串口参数SerialPort。
   * @param { Uint8Array } buffer - 读取数据的缓冲区，最大长度为8192比特。
   * @param { int } timeout - 超时时间（单位：毫秒）。API在目标端口缓冲区无数据时，等待指定时间后返回。默认值0表示不等待直接返回。
   * @returns { Promise<int> } Promise对象，返回读取数据长度。
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @throws { BusinessError } 31400006 Data transfer timed out.
   * @throws { BusinessError } 31400007 I/O exception. Possible causes:
   *
   *     <br>1. The transfer was canceled.
   *
   *     <br>2. The device offered more data than allowed.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function read(portId: int, buffer: Uint8Array, timeout?: int): Promise<int>;

  /**
   * 从串口设备同步读取数据。
   *
   * @param { int} portId - 目标设备的端口号，来自[getPortList]{@link serialManager.getPortList()}获取的串口参数SerialPort。
   * @param { Uint8Array } buffer - 读取数据的缓冲区，最大长度为8192比特。
   * @param { int } timeout - 超时时间（单位：毫秒）。API在目标端口缓冲区无数据时，等待指定时间后返回。默认值0表示不等待直接返回。
   * @returns {int} 返回读取数据长度。
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @throws { BusinessError } 31400006 Data transfer timed out.
   * @throws { BusinessError } 31400007 I/O exception. Possible causes:
   *
   *     <br>1. The transfer was canceled.
   *
   *     <br>2. The device offered more data than allowed.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function readSync(portId: int, buffer: Uint8Array, timeout?: int): int;

  /**
   * 向串口设备异步写数据，每次写入数据长度不超过4KB，数据过大会导致数据丢失，长数据建议分包写入。使用Promise异步回调。
   *
   * @param { int} portId - 目标设备的端口号，来自[getPortList]{@link serialManager.getPortList()}获取的串口参数SerialPort。
   * @param { Uint8Array } buffer - 写入数据的缓冲区，最大长度为4KB。
   * @param { int } timeout - 超时时间（单位：毫秒），指定时间内等待API在目标端口的缓冲区是否可写，若可写则正常处理，若不可写等待超过指定时间后返回超时。默认值0表示不可写时不等待直接返回。
   * @returns { Promise<int> } Promise对象，返回写入数据长度。
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @throws { BusinessError } 31400006 Data transfer timed out.
   * @throws { BusinessError } 31400007 I/O exception. Possible causes:
   *
   *     <br>1. The transfer was canceled.
   *
   *     <br>2. The device offered more data than allowed.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function write(portId: int, buffer: Uint8Array, timeout?: int): Promise<int>;

  /**
   * 向串口设备同步写数据，每次写入数据长度不超过4KB，数据过大会导致数据丢失，长数据建议分包写入。
   *
   * @param { int} portId - 目标设备的端口号，来自[getPortList]{@link serialManager.getPortList()}获取的串口参数SerialPort。
   * @param { Uint8Array } buffer - 写入目标缓冲区，最大长度为4KB。
   * @param { int } timeout - 超时时间（单位：毫秒），指定时间内等待API在目标端口的缓冲区是否可写，若可写则正常处理，若不可写等待超过指定时间后返回超时。默认值0表示不可写时不等待直接返回。
   * @returns { int } 返回写入数据长度。
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @throws { BusinessError } 31400006 Data transfer timed out.
   * @throws { BusinessError } 31400007 I/O exception. Possible causes:
   *
   *     <br>1. The transfer was canceled.
   *
   *     <br>2. The device offered more data than allowed.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function writeSync(portId: int, buffer: Uint8Array, timeout?: int): int;

  /**
   * 串口参数。
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  interface SerialPort {

    /**
     * 端口号。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    portId: int;

    /**
     * 串口设备名称。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    deviceName: string;
 }
  /**
   * 串口的配置参数。
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  interface SerialAttribute {

    /**
     * 串口波特率。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    baudRate: BaudRates;

    /**
     * 串口数据位，默认值为8位。
     *
     * @default DATABIT_8
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    dataBits?: DataBits;

    /**
     * 串口奇偶校验，默认值为None，无奇偶校验。
     *
     * @default NONE
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    parity?: Parity;

    /**
     * 串口停止位，默认值为1位。
     *
     * @default STOPBIT_1
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    stopBits?: StopBits;
 }
  /**
   * Enumerates the baud rates.
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  enum BaudRates {

    /**
     * 传输波特率为50。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_50 = 50,

    /**
     * 传输波特率为75。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_75 = 75,

    /**
     * 传输波特率为110。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_110 = 110,

    /**
     * 传输波特率为134。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_134 = 134,

    /**
     * 传输波特率为150。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_150 = 150,

    /**
     * 传输波特率为200。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_200 = 200,

    /**
     * 传输波特率为300。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_300 = 300,

    /**
     * 传输波特率为600。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_600 = 600,

    /**
     * 传输波特率为1200。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1200 = 1200,

    /**
     * 传输波特率为1800。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1800 = 1800,

    /**
     * 传输波特率为2400。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2400 = 2400,

    /**
     * 传输波特率为4800。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_4800 = 4800,

    /**
     * 传输波特率为9600。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_9600 = 9600,

    /**
     * 传输波特率为19200。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_19200 = 19200,

    /**
     * 传输波特率为38400。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_38400 = 38400,

    /**
     * 传输波特率为57600。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_57600 = 57600,

    /**
     * 传输波特率为115200。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_115200 = 115200,

    /**
     * 传输波特率为230400。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_230400 = 230400,

    /**
     * 传输波特率为460800。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_460800 = 460800,

    /**
     * 传输波特率为500000。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_500000 = 500000,

    /**
     * 传输波特率为576000。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_576000 = 576000,

    /**
     * 传输波特率为921600。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_921600 = 921600,

    /**
     * 传输波特率为1000000。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1000000 = 1000000,

    /**
     * 传输波特率为1152000。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1152000 = 1152000,

    /**
     * 传输波特率为1500000。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1500000 = 1500000,

    /**
     * 传输波特率为2000000。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2000000 = 2000000,

    /**
     * 传输波特率为2500000。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2500000 = 2500000,

    /**
     * 传输波特率为3000000。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_3000000 = 3000000,

    /**
     * 传输波特率为3500000。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_3500000 = 3500000,

    /**
     * 传输波特率为4000000。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_4000000 = 4000000
 }
  /**
   * Enumerates the number of data bits.
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  enum DataBits {

    /**
     * 报文的有效数据位宽为8比特。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_8 = 8,

    /**
     * 报文的有效数据位宽为7比特。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_7 = 7,

    /**
     * 报文的有效数据位宽为6比特。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_6 = 6,

    /**
     * 报文的有效数据位宽为5比特。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_5 = 5,
 }
  /**
   * Enumerates the parity check modes.
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  enum Parity {

    /**
     * 无校验。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_NONE = 0,

    /**
     * 奇校验。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_ODD = 1,

    /**
     * 偶校验。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_EVEN = 2,

    /**
     * 固定为1。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_MARK = 3,

    /**
     * 固定为0。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_SPACE = 4
 }
  /**
   * Enumerates of the number of stop bits.
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  enum StopBits {

    /**
     * 报文的有效停止位宽为1比特。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    STOPBIT_1 = 0,

    /**
     * 报文的有效停止位宽为2比特。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    STOPBIT_2 = 1,
 }
}

export default serialManager;