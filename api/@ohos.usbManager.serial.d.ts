/*
 * Copyright (C) 2024 Huawei Device Co., Ltd.
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
 * @kit BasicServicesKit
 */
/**
 * This module provides the capability of manage USB serial.
 *
 * @namespace serialManager
 * @syscap SystemCapability.USB.USBManager.Serial
 * @since 16
 */
declare namespace serialManager {

  /**
   * Connect to the serial port of the host that the source has access to by this method.
   *
   * @param { number } portId - Serial port number defined by SerialPort.portId. It cannot be empty.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14402001 - Serial port service exception.
   * @throws { BusinessError } 14402002 - Permission denied. Call requestSerialRight to get the permission first.
   * @throws { BusinessError } 14402003 - The port number does not exist.
   * @throws { BusinessError } 14402004 - The port is occupied.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  function open(portId: number): void;

  /**
   * Disconnect the linked serial port by this method.
   *
   * @param { number } portId - Serial port number defined by SerialPort.portId. It cannot be empty.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14402001 - Serial port service exception.
   * @throws { BusinessError } 14402003 - The port number does not exist.
   * @throws { BusinessError } 14402004 - The port is occupied.
   * @throws { BusinessError } 14402005 - The port not open.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  function close(portId: number): void;

  /**
   * Asynchronous reads as many bytes as possible into the destination buffer.
   *
   * @param { number } portId - Serial port number defined by SerialPort.portId. It cannot be empty.
   * @param { Uint8Array } buffer - the destination buffer,the maximum length of the buffer is 8192 bytes.
   * @param { number } timeout - This parameter is optional. The default value is **0**, indicating no timeout.
   * @returns { Promise<number> } Promise returns the actual size read from the buffer.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14402001 - Serial port service exception.
   * @throws { BusinessError } 14402003 - The port number does not exist.
   * @throws { BusinessError } 14402005 - The port not open.
   * @throws { BusinessError } 14402006 - Data transmission timeout.
   * @throws { BusinessError } 14402007 - Read data length exceeding the limit of 8KB.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  function read(portId: number, buffer: Uint8Array, timeout?: number): Promise<number>;

  /**
   * Synchronize to read as many bytes as possible into the target buffer.
   *
   * @param { number } portId - Serial port number defined by SerialPort.portId. It cannot be empty.
   * @param { Uint8Array } buffer - the destination buffer,the maximum length of the buffer is 8192 bytes.
   * @param { number } timeout - This parameter is optional. The default value is **0**, indicating no timeout.
   * @returns { number } the actual size of buffer read.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14402001 - Serial port service exception.
   * @throws { BusinessError } 14402003 - The port number does not exist.
   * @throws { BusinessError } 14402005 - The port not open.
   * @throws { BusinessError } 14402006 - Data transmission timeout.
   * @throws { BusinessError } 14402007 - Read data length exceeding the limit of 8KB.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  function readSync(portId: number, buffer: Uint8Array, timeout?: number): number;

  /**
   * Asynchronous writes with specified length from the source buffer.
   *
   * @param { number } portId - Serial port number defined by SerialPort.portId. It cannot be empty.
   * @param { Uint8Array } buffer - the source byte buffer,the buffer supports a maximum of 128KB.
   * @param { number } timeout - This parameter is optional. The default value is **0**, indicating no timeout.
   * @returns { Promise<number> } the actual size of buffer write.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14402001 - Serial port service exception.
   * @throws { BusinessError } 14402003 - The port number does not exist.
   * @throws { BusinessError } 14402005 - The port not open.
   * @throws { BusinessError } 14402006 - Data transmission timeout.
   * @throws { BusinessError } 14402008 - Write data length exceeding the limit of 128KB.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  function write(portId: number, buffer: Uint8Array, timeout?: number): Promise<number>;

  /**
   * Synchronize to writes bytes with specified length from the source buffer.
   *
   * @param { number } portId - Serial port number defined by SerialPort.portId. It cannot be empty.
   * @param { Uint8Array } buffer - the source byte buffer,the buffer supports a maximum of 128KB.
   * @param { number } timeout - This parameter is optional. The default value is **0**, indicating no timeout.
   * @returns { number } the actual size of buffer write.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14402001 - Serial port service exception.
   * @throws { BusinessError } 14402003 - The port number does not exist.
   * @throws { BusinessError } 14402005 - The port not open.
   * @throws { BusinessError } 14402006 - Data transmission timeout.
   * @throws { BusinessError } 14402008 - Write data length exceeding the limit of 128KB.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  function writeSync(portId: number, buffer: Uint8Array, timeout?: number): number;

  /**
   * Set the configuration parameters of the serial port by the method. If the method is not called,
   * use the default configuration parameters (baud rates: 9600 bps, data bits: 8, parity: none, stop bits: 1).
   *
   * @param { number } portId - Serial port number defined by SerialPort.portId. It cannot be empty.
   * @param { SerialAttribute } attribute - The serial port parameters.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14402001 - Serial port service exception.
   * @throws { BusinessError } 14402003 - The port number does not exist.
   * @throws { BusinessError } 14402005 - The port not open.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  function setAttribute(portId: number, attribute: SerialAttribute): void;

  /**
   * Get the configuration parameters of the serial port by the method.
   *
   * @param { number } portId - Serial port number defined by SerialPort.portId. It cannot be empty.
   * @returns { Readonly<SerialAttribute> } Return the serial port parameters.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14402001 - Serial port service exception.
   * @throws { BusinessError } 14402003 - The port number does not exist.
   * @throws { BusinessError } 14402005 - The port not open.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  function getAttribute(portId: number): Readonly<SerialAttribute>;

  /**
   * The method returns an array of SerialPort objects,
   * representing serial ports connected to the host which the origin has permission to access.
   *
   * @returns { Array<Readonly<SerialPort>> } the serialPort list.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  function getPortList(): Readonly<SerialPort>[];

  /**
   * Checks whether the application has the permission to access the serial port..
   *
   * @param { number } portId - Serial port number defined by SerialPort.portId. It cannot be empty.
   * @returns { boolean } indicates if the user has the right to access the Serial accessory.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @throws { BusinessError } 14402001 - Serial port service exception.
   * @throws { BusinessError } 14402003 - The port number does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  function hasSerialRight(portId: number): boolean;

  /**
   * Requests the permission for a given application to access the serial port.
   * The system application has access to the serial port by default, and there is no need to call this interface to apply.
   *
   * @param { number } portId - Serial port number defined by SerialPort.portId. It cannot be empty.
   * @returns { Promise<boolean> } indicates if the Serial accessory access right are granted.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @throws { BusinessError } 14402001 - Serial port service exception.
   * @throws { BusinessError } 14402003 - The port number does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  function requestSerialRight(portId: number): Promise<boolean>;

  /**
   * Add serial port access right.
   * The system application has access to the serial port by default, and calling this interface will not have any impact.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { number } tokenId - refers to application that require access permissions. It cannot be empty.
   * @param { number } portId - Serial port number defined by SerialPort.portId. It cannot be empty.
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to call the API.
   * @throws { BusinessError } 202 - Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @throws { BusinessError } 14402001 - Serial port service exception.
   * @throws { BusinessError } 14402003 - The port number does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @systemapi
   * @since 16
   */
  function addSerialRight(tokenId: number, portId: number): void;

  /**
   * Cancel the permission for a given application to access the serial port.
   * The system application has access to the serial port by default, and calling this interface will not have any impact.
   *
   * @param { number } portId - Serial port number defined by SerialPort.portId. It cannot be empty.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   * <br>1.Mandatory parameters are left unspecified.
   * <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @throws { BusinessError } 14402001 - Serial port service exception.
   * @throws { BusinessError } 14402003 - The port number does not exist.
   * @throws { BusinessError } 14402009 - The target port number not matched.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  function cancelSerialRight(portId: number): void;

  /**
   * Indicate the configuration parameters of the serial port.
   *
   * @typedef SerialAttribute
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  interface SerialAttribute {

    /**
     * Serial port baud rate, default value is BAUDRATE_9600.
     *
     * @type { number }
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    baudrate: BaudRates;

    /**
     * Serial port data bit,default value is USB_ATTR_DATABIT_8.
     *
     * @type { number }
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    dataBits?: DataBits;

    /**
     * Serial port parity,default value is USB_ATTR_PARITY_NONE.
     *
     * @type { number }
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    parity?: Parity;

    /**
     * Serial port stop bit,default value is USB_ATTR_STOPBIT_1.
     *
     * @type { number }
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    stopBits?: StopBits;
  }

  /**
   * Serial Port parameter.
   *
   * @typedef SerialPort
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  interface SerialPort {

    /**
     * Serial port id.
     *
     * @type { number }
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    portId: number;

    /**
     * Serial device name.
     *
     * @type { string }
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    deviceName: string;
  }

  /**
   * Serial port baud rates(bps).
   *
   * @enum { number }
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  enum BaudRates {

    /**
     * Serial port baud bits are 50 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_50 = 50,

    /**
     * Serial port baud bits are 75 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_75 = 75,

    /**
     * Serial port baud bits are 110 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_110 = 110,

    /**
     * Serial port baud bits are 134 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_134 = 134,

    /**
     * Serial port baud bits are 150 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_150 = 150,

    /**
     * Serial port baud bits are 200 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_200 = 200,

    /**
     * Serial port baud bits are 300 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_300 = 300,

    /**
     * Serial port baud bits are 600 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_600 = 600,

    /**
     * Serial port baud bits are 1200 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_1200 = 1200,

    /**
     * Serial port baud bits are 1800 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_1800 = 1800,

    /**
     * Serial port baud bits are 2400 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_2400 = 2400,

    /**
     * Serial port baud bits are 4800 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_4800 = 4800,

    /**
     * Serial port baud bits are 9600 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_9600 = 9600,

    /**
     * Serial port baud bits are 19200 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_19200 = 19200,

    /**
     * Serial port baud bits are 38400 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_38400 = 38400,

    /**
     * Serial port baud bits are 57600 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_57600 = 57600,

    /**
     * Serial port baud bits are 115200 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_115200 = 115200,

    /**
     * Serial port baud bits are 230400 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_230400 = 230400,

    /**
     * Serial port baud bits are 460800 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_460800 = 460800,

    /**
     * Serial port baud bits are 500000 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_500000 = 500000,

    /**
     * Serial port baud bits are 576000 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_576000 = 576000,

    /**
     * Serial port baud bits are 921600 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_921600 = 921600,

    /**
     * Serial port baud bits are 1000000 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_1000000 = 1000000,

    /**
     * Serial port baud bits are 1152000 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_1152000 = 1152000,

    /**
     * Serial port baud bits are 1500000 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_1500000 = 1500000,

    /**
     * Serial port baud bits are 2000000 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_2000000 = 2000000,

    /**
     * Serial port baud bits are 2500000 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_2500000 = 2500000,

    /**
     * Serial port baud bits are 3000000 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_3000000 = 3000000,

    /**
     * Serial port baud bits are 3500000 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_3500000 = 3500000,

    /**
     * Serial port baud bits are 4000000 bps.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    BAUDRATE_4000000 = 4000000
  }

  /**
   * Serial port data bits.
   *
   * @enum { number }
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  enum DataBits {

    /**
     * Serial port data bits are 8.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_DATABIT_8 = 0,

    /**
     * Serial port data bits are 7.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_DATABIT_7,

    /**
     * Serial port data bits are 6.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_DATABIT_6,

    /**
     * Serial port data bits are 5.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_DATABIT_5,

    /**
     * Serial port data bits are 4.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_DATABIT_4
  }

  /**
   * Serial port parity.
   *
   * @enum { number }
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  enum Parity {

    /**
     * The serial parity is none.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_PARITY_NONE = 0,

    /**
     * The serial parity is odd.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_PARITY_ODD,

    /**
     * The serial parity is even.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_PARITY_EVEN,

    /**
     * The serial parity is mark.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_PARITY_MARK,

    /**
     * The serial parity is space.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_PARITY_SPACE
  }

  /**
   * Serial port stop bits.
   *
   * @enum { number }
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 16
   */
  enum StopBits {

    /**
     * The serial stop bits are 1.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_STOPBIT_1 = 0,

    /**
     * The serial stop bits are 1.5.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_STOPBIT_1P5,

    /**
     * The serial stop bits are 2.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 16
     */
    USB_ATTR_STOPBIT_2
  }
}

export default serialManager;

