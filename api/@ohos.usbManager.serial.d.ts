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
 * @file Serial Port Management
 * @kit BasicServicesKit
 */

/**
 * This module provides APIs for managing the access and communication of serial port devices. It provides
 * functions such as opening and closing devices, reading and writing data, setting parameters, and managing
 * permissions. It addresses issues such as permission request, device configuration, and data transfer during
 * communication between apps and serial port devices. This module simplifies the process of accessing serial
 * port devices and improves development efficiency.
 *
 * **Process**
 * ![SerialManager](docroot://reference/figures/SerialManager.png)
 *
 * **Use scenarios**
 *
 * - **Embedded device communication**: exchanges data with various embedded devices, such as sensor data
 *   collection and device status monitoring.
 * - **Industrial device debugging**: connects to industrial control devices to perform debugging operations
 *   such as parameter configuration, command delivery, and log output.
 * - **Data exchange with serial port peripherals**: communicates with serial port peripherals, such as
 *   printers, scanners, and modems, for data transmission and reception.
 *
 * @syscap SystemCapability.USB.USBManager.Serial
 * @since 19 dynamic
 * @since 23 static
 */
declare namespace serialManager {

  /**
   * Obtains the serial port device list, including the device name and port number. Generally, this API is
   * called when the application is started, a device is connected, or available serial port devices need to be
   * detected.
   *
   * @returns { Readonly<SerialPort>[]} List of available serial port devices. Each element contains attributes
   *     such as the port number and device name of the serial port. This parameter can be used to obtain all
   *     serial port devices in the system, and users can choose one to operate.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function getPortList(): Readonly<SerialPort>[];

  /**
   * Checks whether the app has the permission to access the serial port device. When an app is restarted after
   * exiting, permission needs to be requested again. Generally, this API is called to check the permission
   * status before a serial port device is opened or a serial port operation is performed.
   *
   * **Prerequisites**
   * - You have called [getPortList](#serialmanagergetportlist) to obtain the port number.
   *
   * @param { int} portId - Port number, which is obtained from the [SerialPort]{@link serialManager.SerialPort}
   *     object returned by [getPortList]{@link serialManager.getPortList}. The value must be a valid port number
   *     returned by **getPortList**. If an invalid value is passed, error code 31400003 is thrown.
   * @returns {boolean} The value **true** indicates that the permission is granted, and **false** indicates
   *     the opposite.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification
   *     failed.
   * @throws { BusinessError } 14400005 Database operation exception.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function hasSerialRight(portId: int): boolean;

  /**
   * Requests the permission for the app to access the serial port device. After the app exits, the access
   * permission on the serial port device is automatically removed. After the app is restarted, the app needs to
   * request the permission again. This API uses a promise to return the result. Generally, this API is called
   * to request authorization from the user when the application attempts to access the serial port for the first
   * time and detects that it does not have the permission. You can call
   * [cancelSerialRight]{@link serialManager.cancelSerialRight} to remove the permission.
   *
   * **Prerequisites**
   * - You have called [getPortList](#serialmanagergetportlist) to obtain the port number.
   *
   * @param { int} portId - Port number, which is obtained from the [SerialPort]{@link serialManager.SerialPort}
   *     object returned by [getPortList]{@link serialManager.getPortList}. The value must be a valid port number
   *     returned by **getPortList**. If an invalid value is passed, error code 31400003 is thrown.
   * @returns { Promise<boolean>} Promise used to return a Boolean value. The value **true** indicates that the
   *     permission is successfully requested, and **false** indicates the opposite.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification
   *     failed.
   * @throws { BusinessError } 14400005 Database operation exception.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function requestSerialRight(portId: int): Promise<boolean>;

  /**
   * Adds the permission to an app for accessing the serial port device. Before using this method, you need to
   * call [getPortList]{@link serialManager.getPortList} to obtain the serial port list and obtain a valid port ID
   * from the list. If the call is successful, the app obtains the permission to access the specified serial port
   * device and can perform operations such as opening, reading data, and writing data. If the call fails, an
   * error code is returned, and the app cannot access the serial port device.
   *
   * **Use scenarios**
   * - This method is used by system apps when silent authorization is required while user confirmation is not
   *   needed. Silent authorization enables system apps to directly obtain the permission to access serial port
   *   devices through system APIs without requiring user interaction. This is applicable to scenarios such as
   *   communication between internal components of the system and automatic connection between the background
   *   server and the serial port device. The system checks whether silent authorization is allowed based on
   *   **ohos.permission.MANAGE_USB_CONFIG** and grants the permission without requiring user confirmation.
   * - Unlike requestSerialRight,
   *   [serialManager.requestSerialRight](js-apis-serialManager.md#serialmanagerrequestserialright) triggers a
   *   dialog box to request user authorization, which is applicable when explicit user authorization is
   *   required. addSerialRight does not trigger a dialog box but directly adds the permission for the app to
   *   access the device, which is applicable to automatic management of system apps. After the application
   *   exits, the system automatically removes the access permission on the serial port device. After the
   *   application is restarted, the application needs to request the permission again.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } tokenId - App access token ID, which identifies the app that requires the permission to access
   *     the serial port device. It can be obtained using
   *     [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}.
   * @param { int} portId - Port number of the serial port device, which uniquely identifies the serial port
   *     device. A valid port number can be obtained using
   *     [serialManager.getPortList]{@link serialManager.getPortList}. Ensure that the port number exists.
   *     Otherwise, error code 31400003 will be returned.
   * @throws { BusinessError } 201 Permission verification failed. The application does not have the permission
   *     required to call the API.
   * @throws { BusinessError } 202 Permission verification failed. A non-system application calls a system API.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification
   *     failed.
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
   * the enabled serial port device. Generally, this API is called to proactively release the permission, access another
   * device, or for security purposes.
   *
   * **Prerequisites**
   * - You have called [getPortList](#serialmanagergetportlist) to obtain the port number.
   * - You have called [requestSerialRight](#serialmanagerrequestserialright) to request the access permission.
   *
   * **Related methods**
   * - [requestSerialRight](#serialmanagerrequestserialright): requests the access permission.
   * - [hasSerialRight](#serialmanagerhasserialright): checks whether the access permission is granted.
   *
   * @param { int} portId - Port number, which is obtained from the [SerialPort]{@link serialManager.SerialPort} object
   *     returned by [getPortList]{@link serialManager.getPortList}. The value must be a valid port number returned by
   *     **getPortList**. If an invalid value is passed, error code 31400003 is thrown.
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
   * Opens a serial port device. Before calling this API, you need to call
   * [requestSerialRight]{@link serialManager.requestSerialRight} to request the permission. After calling this API,
   * you need to call [close]{@link serialManager.close} to close the serial port. After the API is successfully
   * called, you can perform operations such as read/write and parameter configuration on the serial port.
   *
   * **Prerequisites**
   * - You have called [getPortList](#serialmanagergetportlist) to obtain the port number.
   * - Call [requestSerialRight](#serialmanagerrequestserialright) to request the access permission.
   *
   * **API called in pairs**
   * - This API must be used with [close](#serialmanagerclose) in pairs.
   * - After the serial port is opened, you must call **close()** to close the serial port and release resources.
   *
   * @param { int} portId - Port number, which is obtained from the [SerialPort]{@link serialManager.SerialPort}
   *     object returned by [getPortList]{@link serialManager.getPortList}. The value must be a valid port number
   *     returned by **getPortList**. If an invalid value is passed, error code 31400003 is thrown.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification
   *     failed.
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
   * Closes the serial port device. Call [requestSerialRight]{@link serialManager.requestSerialRight} to request
   * the permission and then call [open]{@link serialManager.open} to open the serial port. Generally, this API
   * is called when the application exits, the device is disconnected, or serial port resources need to be
   * released. Closing the serial port does not remove the access permission. To remove the permission, call
   * **cancelSerialRight**.
   *
   * **API called in pairs**
   * - This API must be used with [open](#serialmanageropen) in pairs.
   * - After the serial port is opened, you must call this method to close the serial port and release resources.
   *
   * **Prerequisites**
   * - You have called [getPortList](#serialmanagergetportlist) to obtain the port number.
   * - You have called [requestSerialRight](#serialmanagerrequestserialright) to request the access permission.
   * - You have called [open](#serialmanageropen) to open the serial port.
   * @param { int} portId - Port number, which is obtained from the [SerialPort]{@link serialManager.SerialPort}
   *     object returned by [getPortList]{@link serialManager.getPortList}. The value must be a valid port number
   *     returned by **getPortList**. If an invalid value is passed, error code 31400003 is thrown.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification
   *     failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function close(portId: int): void;

  /**
   * Obtains the configuration parameters of a specified serial port. You need to call [open]{@link serialManager.open}
   * to open the serial port to obtain the configuration. Generally, this API is called to check the current
   * communication parameter configuration and debug serial port communication issues after the device is
   * initialized.
   *
   * **Prerequisites**
   * - You have called [getPortList](#serialmanagergetportlist) to obtain the port number.
   * - You have called [requestSerialRight](#serialmanagerrequestserialright) to request the access permission.
   * - You have called [open](#serialmanageropen) to open the serial port.
   *
   * @param { int} portId - Port number, which is obtained from the [SerialPort]{@link serialManager.SerialPort}
   *     object returned by [getPortList]{@link serialManager.getPortList}. The value must be a valid port number
   *     returned by **getPortList**. If an invalid value is passed, error code 31400003 is thrown.
   * @returns { Readonly<SerialAttribute>} Serial port configuration parameters, including the baud rate, data
   *     bit, parity bit, and stop bit.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification
   *     failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function getAttribute(portId: int): Readonly<SerialAttribute>;

  /**
   * Sets the parameters of the specified serial port. You need to call [open]{@link serialManager.open} to open
   * the serial port to set parameters. The configuration parameters include **baudRate** (mandatory), **dataBits**
   * (optional) whose default value is **8**, **parity** (optional) whose default value is **PARITY_NONE**, and
   * **stopBits** (optional) whose default value is 1. Generally, this API is called when the device is
   * initialized, the communication protocol is switched, or the device requires non-default configuration
   * parameters.
   *
   * **Prerequisites**
   * - You have called [getPortList](#serialmanagergetportlist) to obtain the port number.
   * - You have called [requestSerialRight](#serialmanagerrequestserialright) to request the access permission.
   * - You have called [open](#serialmanageropen) to open the serial port.
   *
   * @param { int} portId - Port number, which is obtained from the [SerialPort]{@link serialManager.SerialPort}
   *     object returned by [getPortList]{@link serialManager.getPortList}. The value must be a valid port number
   *     returned by **getPortList**. If an invalid value is passed, error code 31400003 is thrown.
   * @param { SerialAttribute} attribute - Serial port configuration parameters. The parameters include
   *     **baudRate** (mandatory), **dataBits** (optional) whose default value is **8**, **parity** (optional)
   *     whose default value is **PARITY_NONE**, and **stopBits** (optional) whose default value is **1**.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification
   *     failed.
   * @throws { BusinessError } 31400001 Serial port management exception.
   * @throws { BusinessError } 31400003 PortId does not exist.
   * @throws { BusinessError } 31400005 The serial port device is not opened. Call the open API first.
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function setAttribute(portId: int, attribute: SerialAttribute): void;

  /**
   * Reads data from the serial port device asynchronously. The read data is stored in the **buffer** parameter.
   * Before calling this API, call [open]{@link serialManager.open} to open the serial port device first. This
   * API uses a promise to return the length of the data that is actually read. This API can be used to receive
   * data reported by sensors, read response data returned by devices, and receive device status information.
   *
   * **Prerequisites**
   * - You have called [getPortList](#serialmanagergetportlist) to obtain the port number.
   * - You have called [requestSerialRight](#serialmanagerrequestserialright) to request the access permission.
   * - You have called [open](#serialmanageropen) to open the serial port.
   *
   * @param { int} portId - Port number, which is obtained from the [SerialPort]{@link serialManager.SerialPort}
   *     object returned by [getPortList]{@link serialManager.getPortList}. The value must be a valid port number
   *     returned by **getPortList**. If an invalid value is passed, error code 31400003 is thrown.
   * @param { Uint8Array } buffer - Buffer for storing the binary data read from the serial port device. The
   *     buffer size should be determined based on the expected amount of data to be read. After the read
   *     operation is successful, the return value indicates the length of the data that is actually read.
   * @param { int } [timeout] - Timeout interval, in milliseconds. If there is no data in the buffer of the target
   *     port, this API returns the result after waiting for the specified time. The default value is **0**. If
   *     the default value is used or the parameter is not specified, it indicates that the API returns the
   *     result without waiting. If a negative number is passed, a parameter error is thrown. Set this parameter
   *     based on the device response speed and data volume.
   * @returns { Promise<int> } Promise used to return the length of the data read, in bytes.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification
   *     failed; 4. Optional parameters passed as undefined.
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
   * Reads data from the serial port device synchronously. The read data is stored in the **buffer** parameter.
   * The actual length of the data read is returned. Before calling this API, call [open]{@link serialManager.open}
   * to open the serial port device first. This method is applicable to simple communication scenarios where
   * data needs to be read in blocking mode, the read sequence must be strictly followed, or there is no high
   * requirement on real-time performance.
   *
   * **Prerequisites**
   * - You have called [getPortList](#serialmanagergetportlist) to obtain the port number.
   * - You have called [requestSerialRight](#serialmanagerrequestserialright) to request the access permission.
   * - You have called [open](#serialmanageropen) to open the serial port.
   *
   * @param { int} portId - Port number, which is obtained from the [SerialPort]{@link serialManager.SerialPort}
   *     object returned by [getPortList]{@link serialManager.getPortList}. The value must be a valid port number
   *     returned by **getPortList**. If an invalid value is passed, error code 31400003 is thrown.
   * @param { Uint8Array } buffer - Buffer for storing the binary data read from the serial port device. The
   *     buffer size should be determined based on the expected amount of data to be read. After the read
   *     operation is successful, the return value indicates the length of the data that is actually read.
   * @param { int } [timeout] - Timeout interval, in milliseconds. If there is no data in the buffer of the target
   *     port, this API returns the result after waiting for the specified time. The default value is **0**. If
   *     the default value is used or the parameter is not specified, it indicates that the API returns the
   *     result without waiting. If a negative number is passed, a parameter error is thrown. Set this parameter
   *     based on the device response speed and data volume.
   * @returns {int} Length of the data read, in bytes.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification
   *     failed; 4. Optional parameters passed as undefined.
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
   * Writes data to the serial port device asynchronously. Before calling this API, call
   * [open]{@link serialManager.open} to open the serial port first. The length of data written each time cannot
   * exceed 4 KB; otherwise, data loss may occur. You are advised to write long data in multiple packets. This API
   * uses a promise to return the result. This API is applicable to scenarios such as sending control commands to
   * devices, delivering configuration parameters, and transferring the collected data.
   *
   * **Prerequisites**
   * - You have called [getPortList](#serialmanagergetportlist) to obtain the port number.
   * - You have called [requestSerialRight](#serialmanagerrequestserialright) to request the access permission.
   * - You have called [open](#serialmanageropen) to open the serial port.
   *
   * @param { int} portId - Port number, which is obtained from the [SerialPort]{@link serialManager.SerialPort}
   *     object returned by [getPortList]{@link serialManager.getPortList}. The value must be a valid port number
   *     returned by **getPortList**. If an invalid value is passed, error code 31400003 is thrown.
   * @param { Uint8Array } buffer - Buffer for writing data, including the binary data to be sent to the serial
   *     port device. The length of data written each time cannot exceed 4 KB; otherwise, data loss may occur.
   *     You are advised to write long data in multiple packets.
   * @param { int } [timeout] - Timeout interval, in milliseconds. When writing data, this API waits until the
   *     buffer is writable and returns the result after the specified time. The default value is **0**. If the
   *     default value is used or the parameter is not specified, it indicates that the API returns the result
   *     without waiting. If a negative number is passed, a parameter error is thrown. Set this parameter based
   *     on the device response speed and data volume.
   * @returns { Promise<int> } Promise used to return the length of the data written, in bytes.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification
   *     failed; 4. Optional parameters passed as undefined.
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
   * Writes data to the serial port device synchronously. Before calling this API, call [open]{@link serialManager.open}
   * to open the serial port device first. The length of data written each time cannot exceed 4 KB. Otherwise, data
   * loss may occur. You are advised to write long data in multiple packets. This API is applicable to scenarios
   * where data needs to be written in blocking mode, important commands need to be sent, or the write sequence
   * must be strictly followed.
   *
   * **Prerequisites**
   * - You have called [getPortList](#serialmanagergetportlist) to obtain the port number.
   * - You have called [requestSerialRight](#serialmanagerrequestserialright) to request the access permission.
   * - You have called [open](#serialmanageropen) to open the serial port.
   *
   * @param { int} portId - Port number, which is obtained from the [SerialPort]{@link serialManager.SerialPort}
   *     object returned by [getPortList]{@link serialManager.getPortList}. The value must be a valid port number
   *     returned by **getPortList**. If an invalid value is passed, error code 31400003 is thrown.
   * @param { Uint8Array } buffer - Buffer for writing data, including the binary data to be sent to the serial
   *     port device. The length of data written each time cannot exceed 4 KB; otherwise, data loss may occur.
   *     You are advised to write long data in multiple packets.
   * @param { int } [timeout] - Timeout interval, in milliseconds. When writing data, this API waits until the
   *     buffer is writable and returns the result after the specified time. The default value is **0**. If the
   *     default value is used or the parameter is not specified, it indicates that the API returns the result
   *     without waiting. If a negative number is passed, a parameter error is thrown. Set this parameter based
   *     on the device response speed and data volume.
   * @returns { int } Length of the data written, in bytes.
   * @throws { BusinessError } 401 Parameter error. Possible causes:
   *     1. Mandatory parameters are left unspecified; 2. Incorrect parameter types; 3. Parameter verification
   *     failed; 4. Optional parameters passed as undefined.
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
     * Serial port number, which uniquely identifies a serial port device. The value is obtained from the
     * **SerialPort** object returned by **getPortList** and is used to specify the serial port device to be
     * operated.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    portId: int;

    /**
     * Name of a serial port device, which is used to display and identify a specific serial port device. It can
     * be used to display device information on the UI, helping users distinguish between different serial port
     * devices.
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
     * Baud rate of the serial port, in bit/s. This parameter indicates the data transmission rate.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    baudRate: BaudRates;

    /**
     * Data bits of the serial port, in bits. The default value is **8**. This parameter indicates the number of
     * valid data bits in a packet.
     *
     * @default DATABIT_8
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    dataBits?: DataBits;

    /**
     * Parity check. The default value is **PARITY_NONE**, indicating that no parity check is performed. This
     * parameter is used to detect data transmission errors.
     *
     * @default NONE
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    parity?: Parity;

    /**
     * Stop bits of the serial port, in bits. The default value is **1**. This parameter indicates the end of a
     * packet.
     *
     * @default STOPBIT_1
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    stopBits?: StopBits;
  }
  /**
   * Enumerates the baud rates, in bit/s.
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  enum BaudRates {

    /**
     * The transmission baud rate is 50 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_50 = 50,

    /**
     * The transmission baud rate is 75 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_75 = 75,

    /**
     * The transmission baud rate is 110 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_110 = 110,

    /**
     * The transmission baud rate is 134 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_134 = 134,

    /**
     * The transmission baud rate is 150 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_150 = 150,

    /**
     * The transmission baud rate is 200 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_200 = 200,

    /**
     * The transmission baud rate is 300 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_300 = 300,

    /**
     * The transmission baud rate is 600 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_600 = 600,

    /**
     * The transmission baud rate is 1200 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1200 = 1200,

    /**
     * The transmission baud rate is 1800 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1800 = 1800,

    /**
     * The transmission baud rate is 2400 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2400 = 2400,

    /**
     * The transmission baud rate is 4800 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_4800 = 4800,

    /**
     * The transmission baud rate is 9600 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_9600 = 9600,

    /**
     * The transmission baud rate is 19,200 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_19200 = 19200,

    /**
     * The transmission baud rate is 38,400 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_38400 = 38400,

    /**
     * The transmission baud rate is 57,600 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_57600 = 57600,

    /**
     * The transmission baud rate is 115,200 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_115200 = 115200,

    /**
     * The transmission baud rate is 230,400 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_230400 = 230400,

    /**
     * The transmission baud rate is 460,800 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_460800 = 460800,

    /**
     * The transmission baud rate is 500,000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_500000 = 500000,

    /**
     * The transmission baud rate is 576,000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_576000 = 576000,

    /**
     * The transmission baud rate is 921,600 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_921600 = 921600,

    /**
     * The transmission baud rate is 1,000,000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1000000 = 1000000,

    /**
     * The transmission baud rate is 1,152,000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1152000 = 1152000,

    /**
     * The transmission baud rate is 1,500,000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1500000 = 1500000,

    /**
     * The transmission baud rate is 2,000,000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2000000 = 2000000,

    /**
     * The transmission baud rate is 2,500,000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2500000 = 2500000,

    /**
     * The transmission baud rate is 3,000,000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_3000000 = 3000000,

    /**
     * The transmission baud rate is 3,500,000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_3500000 = 3500000,

    /**
     * The transmission baud rate is 4,000,000 bit/s.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_4000000 = 4000000
  }
  /**
   * Enumerates the number of data bits, in bits.
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  enum DataBits {

    /**
     * The number of valid packet data bits is 8.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_8 = 8,

    /**
     * The number of valid packet data bits is 7.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_7 = 7,

    /**
     * The number of valid packet data bits is 6.
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    DATABIT_6 = 6,

    /**
     * The number of valid packet data bits is 5.
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
   * Enumerates the number of stop bits, in bits.
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