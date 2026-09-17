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
 * @file Serial Port Management
 * @kit BasicServicesKit
 */

import { Callback } from './@ohos.base';

/**
 * This module provides APIs for serial port management, which are applicable to scenarios where data needs to be
 * exchanged with serial port devices, such as industrial control, sensor data collection, and embedded device
 * communication. This module provides functions such as obtaining the serial port list, opening and closing serial
 * ports, reading and writing data, and managing hardware flow control signals. It helps you easily communicate
 * with external serial port devices, improving device interconnection efficiency.
 *
 * @syscap SystemCapability.BusManager.Serial
 * @stagemodelonly
 * @since 26.0.0 dynamic&static
 */
declare namespace serial {
  /**
   * Obtains the serial port list. This API uses a promise to return the result, which is a list of
   * [SerialPort]{@link serial.SerialPort} objects. This API is used to identify available serial port devices
   * in scenarios such as industrial device connection, IoT device management, and embedded system debugging.
   *
   * @returns { Promise<SerialPort[]> } Promise that returns a list of serial ports.
   * @throws { BusinessError } 203 - This function is prohibited by enterprise management policies.
   * @throws { BusinessError } 35700001 - Service error.
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  function getSerialPortList(): Promise<SerialPort[]>;
  /**
   * Defines a serial port object, which provides information about the serial port device and the communication
   * capability.
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SerialPort {
    /**
     * Serial port information.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    readonly portInfo: SerialPortInfo;

    /**
     * Opens a serial port device. This API uses a promise to return the result. This API is used to establish a
     * communication connection with a serial port device, for example, to collect sensor data, send device control
     * commands, or use a serial port printer.
     *
     * **API called in pairs**
     * - After calling **open()**, you must call **close()** to release the serial port resources after use.
     * - Without doing so, serial port resources will be leaked.
     *
     * @param { SerialConfigs } [config] - Communication parameters of the serial port. If the **config** parameter
     *     is not passed, the default configuration of **SerialConfigs** is used to open the serial port.
     * @returns { Promise<void> } Promise that returns no value.
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
     * Closes a serial port device. This API uses a promise to return the result. This method is used to disconnect
     * from a serial port device, for example, when an application exits, a device is switched, or serial port
     * resources are released after a task is complete. This method must be called after the serial port is opened.
     *
     * **API called in pairs**
     * - You must call **open()** to open the serial port before calling **close()** to close the serial port.
     * - After **close()** is called, the serial port resources are released. To use the serial port again,
     *   you need to call **open()** again.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    close(): Promise<void>;

    /**
     * Writes data to a serial port device. The value range of the data length is (0, 4096]. This API uses a promise
     * to return the result. This API is used to send control commands, data packets, and configuration parameters
     * to a connected serial port device, for example, in industrial control, device debugging, and data collection
     * scenarios. This method must be called after the serial port is opened.
     *
     * **Calling sequence**
     * - You must call **open()** to open the serial port before calling **write()** to send data.
     * - If **write()** is called before **open()**, error code 35700005 (Port not open) will be thrown.
     *
     * @param { Uint8Array } data - Data to be written. Length range: (0, 4096]. If the data to be sent exceeds
     *     4096 bytes, you are advised to call the **write** method multiple times.
     * @param { int } [timeout] - Timeout interval, in milliseconds. The value must be an integer within the range
     *     of [0, 300000]. The default value **0** is returned when data cannot be written into the target port.
     *     If a negative number, a non-integer, or a number greater than 300000 is passed, error code 35700002
     *     is returned.
     * @returns { Promise<int> } Promise used to return the length of the data written.
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
     * Listens for data receiving events on the serial port. This API uses an asynchronous callback to return the
     * received data. This API must be called after the serial port is opened. After
     * [close]{@link serial.SerialPort.close} is called, all callback registrations will be cleared. This API is
     * used to receive data sent by serial port devices in real time, such as sensor data monitoring, device status
     * feedback, and real-time data collection.
     *
     * **API called in pairs**
     * - This API is used in pairs with **offDataRead()**, which is used to unregister the listener.
     * - You are advised to call **offDataRead()** to release resources when the listener is no longer needed.
     *
     * **Calling sequence**
     * - You must call **open()** to open the serial port before calling **onDataRead()** to listen for data.
     * - If **onDataRead()** is called before **open()**, error code 35700005 (Port not open) will be thrown.
     *
     * @param { Callback<Uint8Array> } callback - Callback used to return the data received by the serial port.
     *     This callback is used to listen for data receiving events on the serial port. After the callback is
     *     registered, it will be triggered when the serial port receives data.
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onDataRead(callback: Callback<Uint8Array>): void;

    /**
     * Cancels listening for data receiving events on the serial port. This API is used to release resources when
     * listening for data receiving events on the serial port is no longer required, for example, when the
     * application switches to another function or the connection is proactively disconnected.
     *
     * **API called in pairs**
     * - This API is used in pairs with **onDataRead()** to unregister the listener registered by **onDataRead()**.
     * - You can unregister all listeners or a specified listener.
     *
     * @param { Callback<Uint8Array> } [callback] - Callback used to return the result. If a callback is passed,
     *     the listener for data receiving events on the specified serial port is unregistered. If no callback is
     *     passed, the listeners for data receiving events on all serial ports are unregistered.
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offDataRead(callback?: Callback<Uint8Array>): void;

    /**
     * Flushes the serial port buffer, including the read buffer and write buffer. Data in the buffer will be
     * directly discarded and will not be sent or read. This API uses a promise to return the result. This method
     * must be called after the serial port is opened. This method is used to discard invalid or outdated data in
     * the buffer, for example, when the buffer needs to be cleared and data needs to be retransmitted due to a
     * transmission error, or when old data needs to be cleared during a communication protocol switch.
     *
     * **Calling sequence**
     * - You must call **open()** to open the serial port before calling **flush()** to clear the buffer.
     * - If **flush()** is called before **open()**, error code 35700005 (Port not open) will be thrown.
     *
     * Difference between **flush()** and **drain()**: **flush()** directly discards all data in the buffer and is
     * suitable for scenarios where the buffer needs to be quickly cleared or invalid data needs to be discarded.
     * **drain()** waits until the data in the write buffer is completely sent and is suitable for scenarios where
     * complete data transmission is required.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    flush(): Promise<void>;

    /**
     * Waits until all write requests are complete. This API uses a promise to return the result. This method must
     * be called after the serial port is opened. This method is used to ensure that the follow-up procedure is
     * performed only after all data is written. For example, the serial port is closed after data transmission is
     * complete, or the hardware response is received after data is sent.
     *
     * **Calling sequence**
     * - You must call **open()** to open the serial port before calling **drain()**.
     * - Call **drain()** after **write()** to ensure that all written data is sent.
     * - You are advised to call **drain()** before **close()** to ensure that all data is transferred before the
     *   serial port is closed.
     * - If **drain()** is called before **open()**, error code 35700005 (Port not open) will be thrown.
     *
     * The differences between **drain()** and **flush()** are as follows:
     * - **drain()** waits until the data in the write buffer is sent completely, which is suitable for scenarios
     *   where complete data transmission is required. **flush()** directly discards all data in the buffer, which
     *   is suitable for scenarios where the buffer needs to be quickly cleared or invalid data needs to be
     *   discarded.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    drain(): Promise<void>;

    /**
     * Sets the status of the Request to Send (RTS) signal. This API uses a promise to return the result. This
     * method must be called after the serial port is opened. This method is used to control the request sending
     * signal for hardware-based flow control, such as the transmission permission when hardware-based flow control
     * via RTS/CTS is enabled or communication with devices that support hardware-based flow control.
     *
     * **Calling sequence**
     * - You must call **open()** to open the serial port before calling **setRts()** to set the RTS signal.
     * - If **setRts()** is called before **open()**, error code 35700005 (Port not open) will be thrown.
     *
     * Difference between **setRts()** and **setDtr()**: **setRts()** controls the RTS/CTS signal, while
     * **setDtr()** controls the DTR/DSR signal. RTS/CTS is mainly used for data flow control, and automatic flow
     * control can be enabled through **SerialConfigs.rtscts**. DTR/DSR is mainly used for device status control
     * and detection, and is used for special protocols or device status management.
     *
     * @param { boolean } enable - RTS signal status. The value **true** indicates requesting to send data, and
     *     the value **false** indicates otherwise.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setRts(enable: boolean): Promise<void>;

    /**
     * Obtains the status of the Clear to Send (CTS) signal. This API uses a promise to return the result. This
     * method must be called after the serial port is opened. This method is used to query the CTS signal status
     * for hardware-based flow control to determine whether data can be sent. For example, you can use this method
     * to check the transmission permission when hardware-based flow control via RTS/CTS is enabled or check the
     * status before communicating with a device that supports hardware-based flow control.
     *
     * **Calling sequence**
     * - You must call **open()** to open the serial port before calling **getCts()** to obtain the CTS signal.
     * - If **getCts()** is called before **open()**, error code 35700005 (Port not open) will be thrown.
     *
     * The differences between **getCts()** and **getDsr()** are as follows:
     * - **getCts()** queries the CTS signal, and the RTS/CTS signal is used to implement hardware-based flow
     *   control and determine whether data can be sent. **getDsr()** queries the DSR signal, and the DTR/DSR
     *   signal is used to determine whether the communication device is ready.
     *
     * @returns { Promise<boolean> } Promise used to return the CTS signal status. The value **true** indicates
     *     that data can be sent, and the value **false** indicates otherwise.
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    getCts(): Promise<boolean>;

    /**
     * Sends a BRK signal. This API uses a promise to return the result. This method must be called after the serial
     * port is opened. This method is used to send an interrupt signal to a device, for example, to stop device
     * communication immediately, notify the device to reset, or perform signal interaction required by a special
     * protocol.
     *
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    sendBrk(): Promise<void>;

    /**
     * Subscribes to serial port disconnection events. This API uses an asynchronous callback to return the result.
     * After **close()** is called, all callbacks will be unregistered. This method subscribes to serial port
     * disconnection events, such as removal of a USB virtual serial port, device power-off, or connection
     * interruption. This allows you to handle exceptions in a timely manner, notify users, or attempt to reconnect.
     *
     * **API called in pairs**
     * - This API is used in pairs with **offDisconnect()**, which is used to unregister the listener.
     * - You are advised to call **offDisconnect()** to release resources when the listener is no longer needed.
     *
     * **Calling sequence**
     * - You must call **open()** to open the serial port before calling **onDisconnect()** to listen for the
     *   disconnect event.
     * - If **onDisconnect()** is called before **open()**, error code 35700005 (Port not open) will be thrown.
     *
     * @param { Callback<void> } callback - Callback used to return the result, which is triggered when the serial
     *     port is disconnected. This callback is used to listen for disconnection events on the serial port.
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    onDisconnect(callback: Callback<void>): void;

    /**
     * Unsubscribes from serial port disconnection events. This method must be called after the serial port is opened.
     * This API is used to release resources when listening for serial port disconnection events is no longer
     * required, for example, when the application switches to another function or the connection is proactively
     * disconnected.
     *
     * **Calling sequence**
     * - You must call **open()** to open the serial port before calling **offDisconnect()** to cancel listening.
     * - If **offDisconnect()** is called before **open()**, error code 35700005 (Port not open) will be thrown.
     *
     * **API called in pairs**
     * - This API is used in pairs with **onDisconnect()** to unregister the listener registered by
     *   **onDisconnect()**.
     * - You can unregister all listeners or a specified listener.
     *
     * @param { Callback<void> } [callback] - Callback used to return the result, which can be unregistered only
     *     after being registered using **onDisconnect()**. If a callback is passed, the listener for disconnection
     *     events on the specified serial port is unregistered. If no callback is passed, the listeners for
     *     disconnection events on all serial ports are unregistered.
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    offDisconnect(callback?: Callback<void>): void;

    /**
     * Sets the status of the data terminal ready (DTR) signal. This API uses a promise to return the result. This
     * method must be called after the serial port is opened. This method is used to control the DTR signal. For
     * example, it can be used to notify a device that the terminal is ready, control device power-on or reset
     * through the DTR signal, or communicate with a device that requires DTR signal detection.
     *
     * @param { boolean } enable - DTR signal status. The value **true** indicates that the data terminal is ready,
     *     and the value **false** indicates that the data terminal is not ready.
     * @returns { Promise<void> } Promise that returns no value.
     * @throws { BusinessError } 35700001 - Service error.
     * @throws { BusinessError } 35700003 - Virtual serial port disconnected.
     * @throws { BusinessError } 35700005 - Port not open.
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    setDtr(enable: boolean): Promise<void>;

    /**
     * Obtains the status of the data set ready (DSR) signal. This API uses a promise to return the result. This
     * method must be called after the serial port is opened. This method queries the status of the DSR signal to
     * determine whether the communication device is ready, for example, checking the device connection status or
     * starting communication after the device is ready.
     *
     * @returns { Promise<boolean> } Promise used to return the DSR signal status. The value **true** indicates
     *     that the data device is ready, and the value **false** indicates that the data device is not ready.
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
   * Describes the serial port information.
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SerialPortInfo {
    /**
     * Port name.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    portName: string;

    /**
     * Vendor ID of the USB virtual serial port.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    vendorId?: int;

    /**
     * Product ID of the USB virtual serial port.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    productId?: int;

    /**
     * Manufacturer name of the USB virtual serial port.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    manufacturer?: string;
  }

  /**
   * Enumerates the number of data bits.
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum DataBits {
    /**
     * Five data bits.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    FIVE = 5,

    /**
     * Six data bits.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SIX = 6,

    /**
     * Seven data bits.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SEVEN = 7,

    /**
     * Eight data bits.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EIGHT = 8
  }

  /**
   * Enumerates the number of stop bits.
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum StopBits {
    /**
     * One stop bit.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ONE = 1,

    /**
     * Two stop bits.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    TWO = 2
  }

  /**
   * Enumerates the number of parity bits.
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  enum Parity {
    /**
     * No parity.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    NONE = 'none',

    /**
     * Even parity.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    EVEN = 'even',

    /**
     * Odd parity.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    ODD = 'odd',

    /**
     * Mark parity. The parity bit is always **1**.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    MARK = 'mark',

    /**
     * Space parity. The parity bit is always **0**.
     *
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    SPACE = 'space'
  }

  /**
   * Defines the communication parameters of the serial port.
   *
   * @syscap SystemCapability.BusManager.Serial
   * @stagemodelonly
   * @since 26.0.0 dynamic&static
   */
  interface SerialConfigs {
    /**
     * Baud rate. The value must be a positive integer. Whether non-standard baud rates are supported depends on
     * the hardware. Unit: bit/s. The default value is **115200**.
     *
     * @default 115200
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    baudRate?: int;

    /**
     * Data bits. The default value is **EIGHT**, indicating 8 data bits for standard communication. Values
     * **FIVE**, **SIX**, and **SEVEN** are used for old devices or special protocols.
     *
     * @default EIGHT
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    dataBits?: DataBits;

    /**
     * Stop bits. The default value is **ONE**. One stop bit is used for standard communication. Two stop bits
     * are used to enhance signal stability during low-speed communication or communication with old devices.
     *
     * @default ONE
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    stopBits?: StopBits;

    /**
     * Parity bit. The default value is **NONE**, indicating no parity check. **EVEN** and **ODD** are used in
     * scenarios that require high data accuracy. **MARK** and **SPACE** are used for special communication
     * protocols.
     *
     * @default NONE
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    parity?: Parity;

    /**
     * Whether to enable hardware-based automatic flow control via RTS/CTS. Hardware-based flow control via
     * RTS/CTS is an automatic data flow control mechanism implemented through hardware signals. The RTS and CTS
     * signal lines work together to prevent buffer overflow. If this flow control is enabled, the system
     * automatically controls RTS and CTS signals to manage mobile data. The value **true** indicates this
     * feature is enabled, and **false** indicates otherwise. The default value is **false**.
     *
     * @default false
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    rtscts?: boolean;

    /**
     * Whether to enable XON (Xmitter On) to control the sending of flows. XON indicates transmitter on. XON is
     * a control character (with the ASCII value of 17) in the software flow control protocol. When there is
     * space in the receive buffer, XON is sent to instruct the sender to resume data transmission. The value
     * **true** indicates this feature is enabled, and **false** indicates otherwise. The default value is
     * **false**.
     *
     * @default false
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xon?: boolean;

    /**
     * Whether to enable XOFF (Xmitter Off) to control the sending of flows. XOFF indicates transmitter off.
     * XOFF is a control character (with the ASCII value of 19) in the software flow control protocol. When the
     * receive buffer is about to overflow, XOFF is sent to instruct the sender to stop sending data. The value
     * **true** indicates this feature is enabled, and **false** indicates otherwise. The default value is
     * **false**.
     *
     * @default false
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xoff?: boolean;

    /**
     * Whether to enable XANY (Any Character Resume) to control the flow. XANY is an extended mode in the
     * software flow control protocol and takes effect only when XON or XOFF is enabled. When XANY is enabled,
     * any character can be used as the signal to resume transmission, not just the XON character. If software
     * flow control (XON/XOFF) is not enabled, the XANY setting is invalid. The value **true** indicates this
     * feature is enabled, and **false** indicates otherwise. The default value is **false**.
     *
     * @default false
     * @syscap SystemCapability.BusManager.Serial
     * @stagemodelonly
     * @since 26.0.0 dynamic&static
     */
    xany?: boolean;
  }

  /**
   * Adds the authorization for the app to access the serial port. This function associates the token ID of an app
   * with the ID of a serial port device to enable the app to access the serial port. This function can be used by
   * a system management app to grant serial port access permission to a third-party app. For example, a device
   * management tool can use this function to grant serial port access permission to an industrial data collection
   * app. This function is available only to system apps that display a dialog box for serial port authorization.
   * After the user grants the permission, the permission information is persistently stored. This API uses a
   * promise to return the result.
   *
   * @param { string } tokenId - Token ID of the authorized app, which identifies the app that is granted the
   *     permission to access the serial port. After the setting, the app is granted the permission to access the
   *     specified serial port device. It can be obtained using
   *     [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}.
   * @param { string } deviceId - ID of the serial port device, which specifies the serial port device to be
   *     accessed. You can obtain the serial port list using
   *     [getSerialPortList]{@link serial.getSerialPortList}. For an onboard serial port, the value is the port
   *     name. For a USB virtual serial port, the value is the combination of VID+PID+SN or the device path (for
   *     example, /dev/ttyUSB0). After the setting, the app will obtain the access permission for the
   *     specified serial port device.
   * @returns { Promise<void> } Promise that returns no value.
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