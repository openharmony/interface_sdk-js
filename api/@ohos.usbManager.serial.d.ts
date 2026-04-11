/*
 * Copyright (c) 2025 Huawei Device Co., Ltd.
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
 * This module provides the serial port management functions, including enabling and disabling the serial port of the
 * device, writing and reading data, setting and obtaining the configuration parameters of the serial port, and managing
 * permissions.
 *
 * @syscap SystemCapability.USB.USBManager.Serial
 * @since 19 dynamic
 * @since 23 static
 */
declare namespace serialManager {

  /**
   * Obtains the serial port device list, including the device name and port number.
   *
   * @returns { Readonly<SerialPort>[]} Serial port information list.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function getPortList(): Readonly<SerialPort>[];

  /**
   * Checks whether the application has the permission to access the serial port device. When an application is
   * restarted after exits, you need to request the permission from the user again.
   *
   * @param { int} portId - Port number of the target device, which is obtained from the serial port parameter SerialPort
   *     returned by [getPortList]{@link serialManager.getPortList()}.
   * @returns {boolean} The value **true** indicates that the permission is authorized, and **false** indicates the opposite.
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
   * Requests the permission for the application to access the serial port device. After the application exits, the
   * access permission on the serial port device is automatically removed. After the application is restarted, you need
   * to request the permission again. This API uses a promise to return the result.
   *
   * @param { int} portId - Port number of the target device, which is obtained from the serial port parameter SerialPort
   *     returned by [getPortList]{@link serialManager.getPortList()}.
   * @returns { Promise<boolean>} Promise used to return the result. The value **true** indicates that the permission is
   *     successfully requested, and **false** indicates the opposite.
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
   * Adds the permission to an application for accessing the serial port device.
   * serialManager.requestSerialRight triggers a dialog box to request user authorization. addSerialRight does not
   * trigger a dialog box but directly adds the device access permission for the application. After the application
   * exits, the access permission on the serial port device is automatically removed. After the application is restarted
   * , you need to request the permission again.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } tokenId - ID of the token that requires the access permission.
   * @param { int} portId - Port number of the target device, which is obtained from the serial port parameter SerialPort
   *     returned by [getPortList]{@link serialManager.getPortList()}.
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
   * Cancels the permission to access the serial port device when the application is running. This API is used to close
   * the enabled serial port device.
   *
   * @param { int} portId - Port number of the target device, which is obtained from the serial port parameter SerialPort
   *     returned by [getPortList]{@link serialManager.getPortList()}.
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
   * Opens a serial port device.
   *
   * @param { int} portId - Port number of the target device, which is obtained from the serial port parameter SerialPort
   *     returned by [getPortList]{@link serialManager.getPortList()}.
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
   * Closes the serial port device.
   *
   * @param { int} portId - Port number of the target device, which is obtained from the serial port parameter SerialPort
   *     returned by [getPortList]{@link serialManager.getPortList()}.
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
   * Obtains the configuration parameters of a specified serial port.
   *
   * @param { int} portId - Port number of the target device, which is obtained from the serial port parameter SerialPort
   *     returned by [getPortList]{@link serialManager.getPortList()}.
   * @returns { Readonly<SerialAttribute>} Configuration parameters of the serial port.
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
   * Sets the parameters of the serial port. If this method is not called, the default configuration parameters are used
   *  (baud rate: 9600 bit/s; data bit: 8; parity bit: 0; stop bit: 1).
   *
   * @param { int} portId - Port number of the target device, which is obtained from the serial port parameter SerialPort
   *     returned by [getPortList]{@link serialManager.getPortList()}.
   * @param { SerialAttribute} attribute - Configuration parameters of the serial port.
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
   * Reads data from the serial port device asynchronously. This API uses a promise to return the result.
   *
   * @param { int} portId - Port number of the target device, which is obtained from the serial port parameter SerialPort
   *     returned by [getPortList]{@link serialManager.getPortList()}.
   * @param { Uint8Array } buffer - Buffer for reading data, with a maximum length of 8192 bytes.
   * @param { int } timeout - Timeout interval.Unit: milliseconds. If the API has no data in the buffer of the target port, it
   *     returns the result after waiting for the specified time. The default value **0** indicates that the API returns the
   *     result without waiting.
   * @returns { Promise<int> } Promise used to return the length of the data read.
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
   * Reads data from the serial port device synchronously.
   *
   * @param { int} portId - Port number of the target device, which is obtained from the serial port parameter SerialPort
   *     returned by [getPortList]{@link serialManager.getPortList()}.
   * @param { Uint8Array } buffer - Buffer for reading data, with a maximum length of 8192 bytes.
   * @param { int } timeout - Timeout interval.Unit: milliseconds. If the API has no data in the buffer of the target port, it
   *     returns the result after waiting for the specified time. The default value **0** indicates that the API returns the
   *     result without waiting.
   * @returns {int} Length of the data read.
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
   * Writes data to the serial port device asynchronously. The length of data written each time cannot exceed 4 KB;
   * otherwise, data loss may occur. You are advised to write long data in multiple packets. This API uses a promise to
   * return the result.
   *
   * @param { int} portId - Port number of the target device, which is obtained from the serial port parameter SerialPort
   *     returned by [getPortList]{@link serialManager.getPortList()}.
   * @param { Uint8Array } buffer - Buffer for writing data, with a maximum length of 4 KB.
   * @param { int } timeout - Timeout interval.Unit: milliseconds. Whether the buffer of the target port is writable within the
   *     specified time. If yes, the API is processed properly; otherwise, a timeout message is returned after the specified
   *     time. The default value **0** indicates that the API returns the result immediately when the target port is not
   *     writable.
   * @returns { Promise<int> } Promise used to return the length of the data written.
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
   * Writes data to the serial port device synchronously. The length of data written each time cannot exceed 4 KB;
   * otherwise, data loss may occur. You are advised to write long data in multiple packets.
   *
   * @param { int} portId - Port number of the target device, which is obtained from the serial port parameter SerialPort
   *     returned by [getPortList]{@link serialManager.getPortList()}.
   * @param { Uint8Array } buffer - Destination buffer for writing data, with a maximum length of 4 KB.
   * @param { int } timeout - Timeout interval.Unit: milliseconds. Whether the buffer of the target port is writable within the
   *     specified time. If yes, the API is processed properly; otherwise, a timeout message is returned after the specified
   *     time. The default value **0** indicates that the API returns the result immediately when the target port is not
   *     writable.
   * @returns { int } Length of the data written.
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
   * Represents the parameters of a serial port.
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  interface SerialPort {

    /**
     * Port number.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    portId: int;

    /**
     * Serial port device name.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    deviceName: string;
 }
  /**
   * Represents the configuration parameters of a serial port.
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  interface SerialAttribute {

    /**
     * Baud rate.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    baudRate: BaudRates;

    /**
     * Data bits. The default value is **8**.
     *
     * @default DATABIT_8
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    dataBits?: DataBits;

    /**
     * Parity check. The default value is **None**, indicating that no parity check is performed.
     *
     * @default NONE
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    parity?: Parity;

    /**
     * Stop bits. The default value is **1**.
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
     * The baud rate is 50 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_50 = 50,

    /**
     * The baud rate is 75 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_75 = 75,

    /**
     * The baud rate is 110 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_110 = 110,

    /**
     * The baud rate is 134 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_134 = 134,

    /**
     * The baud rate is 150 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_150 = 150,

    /**
     * The baud rate is 200 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_200 = 200,

    /**
     * The baud rate is 300 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_300 = 300,

    /**
     * The baud rate is 600 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_600 = 600,

    /**
     * The baud rate is 1200 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1200 = 1200,

    /**
     * The baud rate is 1800 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1800 = 1800,

    /**
     * The baud rate is 2400 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2400 = 2400,

    /**
     * The baud rate is 4800 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_4800 = 4800,

    /**
     * The baud rate is 9600 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_9600 = 9600,

    /**
     * The baud rate is 19200 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_19200 = 19200,

    /**
     * The baud rate is 38400 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_38400 = 38400,

    /**
     * The baud rate is 57600 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_57600 = 57600,

    /**
     * The baud rate is 115200 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_115200 = 115200,

    /**
     * The baud rate is 230400 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_230400 = 230400,

    /**
     * The baud rate is 460800 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_460800 = 460800,

    /**
     * The baud rate is 500000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_500000 = 500000,

    /**
     * The baud rate is 576000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_576000 = 576000,

    /**
     * The baud rate is 921600 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_921600 = 921600,

    /**
     * The baud rate is 1000000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1000000 = 1000000,

    /**
     * The baud rate is 1152000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1152000 = 1152000,

    /**
     * The baud rate is 1500000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1500000 = 1500000,

    /**
     * The baud rate is 2000000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2000000 = 2000000,

    /**
     * The baud rate is 2500000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2500000 = 2500000,

    /**
     * The baud rate is 3000000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_3000000 = 3000000,

    /**
     * The baud rate is 3500000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_3500000 = 3500000,

    /**
     * The baud rate is 4000000 bit/s.
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
     * The number of data bits is 8.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_8 = 8,

    /**
     * The number of data bits is 7.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_7 = 7,

    /**
     * The number of data bits is 6.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_6 = 6,

    /**
     * The number of data bits is 5.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_5 = 5
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
     * No parity.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_NONE = 0,

    /**
     * Odd parity.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_ODD = 1,

    /**
     * Even parity.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_EVEN = 2,

    /**
     * Mark parity, whose parity bit is fixed at **1**.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    PARITY_MARK = 3,

    /**
     * Space parity, whose parity bit is fixed at **0**.
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
     * The number of stop bits is 1.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    STOPBIT_1 = 0,

    /**
     * The number of stop bits is 2.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    STOPBIT_2 = 1
 }
}

export default serialManager;