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
 * 本模块主要用于管理串口设备的访问和通信，提供打开和关闭设备、读写数据、配置参数、权限管理等功能，解决了应用与串口设备通信时的权限申请、设备配置、数据传输等问题，使用该模块可以简化串口设备访问流程，提高开发效率。
 *
 * **典型使用流程：**
 * ![serialmanager](docroot://reference/figures/SerialManager.png)
 * 
 * **使用场景**：
 * - **嵌入式设备通信**：与各类嵌入式设备进行数据交互，如传感器数据采集、设备状态监控等
 * - **工业设备调试**：连接工业控制设备，进行参数配置、命令下发、日志输出等调试操作
 * - **串口外设数据交互**：与串口外设进行数据通信，如打印机、扫描仪、调制解调器等设备的数据收发
 *
 * @syscap SystemCapability.USB.USBManager.Serial
 * @since 19 dynamic
 * @since 23 static
 */
declare namespace serialManager {

  /**
   * 查询串口设备清单，包括设备名称和对应的端口号。通常在应用启动时、设备连接后或需要检测可用串口设备时调用。
   *
   * @returns { Readonly<SerialPort>[]} 返回可用串口设备的列表，每个元素包含串口的端口号和设备名称等属性信息。可用于获取当前系统中的所有串口设备，以便用户选择需要进行操作的串口。
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  function getPortList(): Readonly<SerialPort>[];

  /**
   * 检查应用是否具有访问串口设备的权限。应用退出后再拉起时，需要重新申请授权。通常在打开串口设备、执行串口操作前调用此接口检查权限状态。
   * 
   * **前置条件：**
   * - 需要先调用[getPortList]{@link serialManager.getPortList}获取端口号
   *
   * @param { int} portId - 端口号，来自[getPortList]{@link serialManager.getPortList}返回的
   *     [SerialPort]{@link serialManager.SerialPort}对象，必须使用getPortList返回的有效端口号，传入无效值时抛出错误码31400003异常。
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
   * 请求应用访问串口设备的权限。应用退出时自动移除对串口设备的访问权限，在应用重启后需要重新申请授权。使用Promise异步回调。通常在首次访问串口设备前、检测到无权限时调用此接口向用户申请授权，如需移除权限请调用
   * [cancelSerialRight]{@link serialManager.cancelSerialRight}。
   * 
   * **前置条件：** 
   * - 需要先调用[getPortList]{@link serialManager.getPortList}获取端口号
   *
   * @param { int} portId - 端口号，来自[getPortList]{@link serialManager.getPortList}返回的
   *     [SerialPort]{@link serialManager.SerialPort}对象，必须使用getPortList返回的有效端口号，传入无效值时抛出错误码31400003异常。
   * @returns { Promise<boolean>} Promise对象，返回boolean值。true表示请求权限成功，false表示请求权限失败或用户拒绝授权。
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
   * 为应用添加访问串口设备权限。使用前需先通过[getPortList]{@link @ohos.usbManager.serial:serialManager.getPortList}获取串口列表，从中获得有效的portId。调用成
   * 功后，应用获得对指定串口设备的访问权限，可进行打开、读写等操作；调用失败则抛出相应错误码，应用无法访问该串口设备。
   * 
   * **使用场景**：
   * 
   * - 系统应用在静默授权且无需用户确认的场景下使用，静默授权指系统应用在无需用户交互的情况下，直接通过系统接口获取串口设备访问权限的方式，如系统内部组件间通信、后台服务自动连接串口设备。系统通过检查应用权限（
   * ohos.permission.MANAGE_USB_CONFIG）来识别是否允许静默授权，跳过用户确认环节直接授予权限。
   * - 与requestSerialRight的区别：
   * [serialManager.requestSerialRight]{@link @ohos.usbManager.serial:serialManager.requestSerialRight}会触发弹窗请求用户授权，适用于需要
   * 用户明确授权的场景；addSerialRight不触发弹窗，而是直接添加应用访问设备的权限，适用于系统应用自动化管理的场景。应用退出后，系统会自动移除对串口设备的访问权限，在应用重启后需要重新申请授权。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } tokenId - 应用访问令牌ID，标识需要访问串口设备权限的应用。可通过
   *     [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf(bundleFlags: int)}
   *     获取。
   * @param { int} portId - 串口设备的端口号，用于唯一标识串口设备，可通过
   *     [serialManager.getPortList]{@link @ohos.usbManager.serial:serialManager.getPortList}获取有效的端口号。需确保端口号存在否则会返回31400003错误
   *     。
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
   * 移除应用运行时访问串口设备的权限。此接口会调用close关闭已打开的串口。通常在需要主动释放权限、切换访问不同设备、或出于安全考虑时调用此接口。
   * 
   * **前置条件：**
   * 
   * - 需要先调用[getPortList]{@link serialManager.getPortList}获取端口号
   * - 需要先调用[requestSerialRight]{@link serialManager.requestSerialRight}申请访问权限
   *
   * **相关方法：**
   * - [requestSerialRight]{@link serialManager.requestSerialRight}：申请访问权限
   * - [hasSerialRight]{@link serialManager.hasSerialRight}：检查是否有访问权限
   *
   * @param { int} portId - 端口号，来自[getPortList]{@link serialManager.getPortList}返回的
   *     [SerialPort]{@link serialManager.SerialPort}对象，必须使用getPortList返回的有效端口号，传入无效值时抛出错误码31400003异常。
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
   * 打开串口设备。使用前需先通过[requestSerialRight]{@link serialManager.requestSerialRight}申请权限，使用完毕后需调用
   * [close]{@link serialManager.close}关闭串口。调用成功后，可对该串口进行读写、配置参数等操作。
   * 
   * **前置条件：**
   * - 需要先调用[getPortList]{@link serialManager.getPortList}获取端口号
   * - 需要先调用[requestSerialRight]{@link serialManager.requestSerialRight}申请访问权限
   *
   * **配对调用：**
   * - 必须与[close]{@link serialManager.close}方法配对使用
   * - 打开串口后，使用完毕必须调用close()释放资源
   *
   * @param { int} portId - 端口号，来自[getPortList]{@link serialManager.getPortList}返回的
   *     [SerialPort]{@link serialManager.SerialPort}对象，必须使用getPortList返回的有效端口号，传入无效值时抛出错误码31400003异常。
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
   * 关闭串口。需要先调用[requestSerialRight]{@link serialManager.requestSerialRight}申请权限，再调用[open]{@link serialManager.open}打开串口。
   * 通常在应用退出时、设备断开连接时、需要释放串口资源时调用此接口。关闭串口不会移除访问权限，如需移除权限请调用cancelSerialRight。
   * 
   * **配对调用：**
   * - 与[open]{@link serialManager.open}方法成对使用
   * - 打开串口后，使用完毕必须调用本方法关闭串口释放资源
   *
   * **前置条件：**
   * - 需要先调用[getPortList]{@link serialManager.getPortList}获取端口号
   * - 需要先调用[requestSerialRight]{@link serialManager.requestSerialRight}申请访问权限
   * - 需要先调用[open]{@link serialManager.open}打开串口
   *
   * @param { int} portId - 端口号，来自[getPortList]{@link serialManager.getPortList}返回的
   *     [SerialPort]{@link serialManager.SerialPort}对象，必须使用getPortList返回的有效端口号，传入无效值时抛出错误码31400003异常。
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
   * 获取指定串口的配置参数。需先调用[open]{@link serialManager.open}打开串口后才能获取配置。通常在设备初始化后、需要查看当前通信参数配置、调试串口通信问题时调用此接口。
   * 
   * **前置条件：**
   * - 需要先调用[getPortList]{@link serialManager.getPortList}获取端口号
   * - 需要先调用[requestSerialRight]{@link serialManager.requestSerialRight}申请访问权限
   * - 需要先调用[open]{@link serialManager.open}打开串口
   *
   * @param { int} portId - 端口号，来自[getPortList]{@link serialManager.getPortList}返回的
   *     [SerialPort]{@link serialManager.SerialPort}对象，必须使用getPortList返回的有效端口号，传入无效值时抛出错误码31400003异常。
   * @returns { Readonly<SerialAttribute>} 返回串口的配置参数对象，包含波特率、数据位、校验位、停止位等配置信息。
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
   * 设置指定串口的配置参数。需先调用[open]{@link serialManager.open}打开串口后才能设置配置。配置参数对象包含波特率（baudRate，必填）、数据位（dataBits，可选，默认8）、校验位（
   * parity，可选，默认PARITY_NONE）、停止位（stopBits，可选，默认1）等配置项。通常在设备初始化时、切换通信协议时、或设备需要非默认配置参数时调用此接口。
   * 
   * **前置条件：**
   * - 需要先调用[getPortList]{@link serialManager.getPortList}获取端口号
   * - 需要先调用[requestSerialRight]{@link serialManager.requestSerialRight}申请访问权限
   * - 需要先调用[open]{@link serialManager.open}打开串口
   *
   * @param { int} portId - 端口号，来自[getPortList]{@link serialManager.getPortList}返回的
   *     [SerialPort]{@link serialManager.SerialPort}对象，必须使用getPortList返回的有效端口号，传入无效值时抛出错误码31400003异常。
   * @param { SerialAttribute} attribute - 串口配置参数对象，包含波特率（baudRate，必填）、数据位（dataBits，可选，默认8）、校验位（parity，可选，默认PARITY_NONE）、停止位（
   *     stopBits，可选，默认1）。
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
   * 从串口设备异步读取数据，读取的数据将存储在buffer参数中。使用前需先调用[open]{@link serialManager.open}打开串口设备。使用Promise异步回调，返回实际读取的数据长度。适用于接收传感器上报的数
   * 据、读取设备返回的响应数据、接收设备状态信息等场景。
   * 
   * **前置条件：**
   * - 需要先调用[getPortList]{@link serialManager.getPortList}获取端口号
   * - 需要先调用[requestSerialRight]{@link serialManager.requestSerialRight}申请访问权限
   * - 需要先调用[open]{@link serialManager.open}打开串口
   *
   * @param { int} portId - 端口号，来自[getPortList]{@link serialManager.getPortList}返回的
   *     [SerialPort]{@link serialManager.SerialPort}对象，必须使用getPortList返回的有效端口号，传入无效值时抛出错误码31400003异常。
   * @param { Uint8Array } buffer - 读取数据的缓冲区，用于存储从串口设备读取的二进制数据。缓冲区大小应根据预期读取的数据量确定。读取成功后，返回值表示实际读取的数据长度。
   * @param { int } timeout - Timeout interval.Unit: milliseconds. If the API has no data in the buffer of the target port, it
   *     returns the result after waiting for the specified time. The default value **0** indicates that the API returns the
   *     result without waiting.
   * @returns { Promise<int> } 返回实际读取到的数据长度，即成功读取的字节数。
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
   * 从串口设备同步读取数据，读取的数据将存储在buffer参数中，返回实际读取的数据长度。使用前需先调用[open]{@link serialManager.open}打开串口设备。适用于需要阻塞式等待数据、对读取顺序有严格要求、或实
   * 时性要求不高的简单通信场景。
   * 
   * **前置条件：**
   * - 需要先调用[getPortList]{@link serialManager.getPortList}获取端口号
   * - 需要先调用[requestSerialRight]{@link serialManager.requestSerialRight}申请访问权限
   * - 需要先调用[open]{@link serialManager.open}打开串口
   *
   * @param { int} portId - 端口号，来自[getPortList]{@link serialManager.getPortList}返回的
   *     [SerialPort]{@link serialManager.SerialPort}对象，必须使用getPortList返回的有效端口号，传入无效值时抛出错误码31400003异常。
   * @param { Uint8Array } buffer - 读取数据的缓冲区，用于存储从串口设备读取的二进制数据。缓冲区大小应根据预期读取的数据量确定。读取成功后，返回值表示实际读取的数据长度。
   * @param { int } timeout - Timeout interval.Unit: milliseconds. If the API has no data in the buffer of the target port, it
   *     returns the result after waiting for the specified time. The default value **0** indicates that the API returns the
   *     result without waiting.
   * @returns {int} 返回实际读取到的数据长度，即成功读取的字节数。
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
   * 向串口设备异步写数据，需要先调用[open]{@link serialManager.open}打开串口后才能调用此接口。每次写入数据长度不超过4KB，数据过大会导致数据丢失，长数据建议分包写入。使用Promise异步回调。适用于
   * 向设备发送控制命令、下发配置参数、传输采集数据等场景。
   * 
   * **前置条件：**
   * - 需要先调用[getPortList]{@link serialManager.getPortList}获取端口号
   * - 需要先调用[requestSerialRight]{@link serialManager.requestSerialRight}申请访问权限
   * - 需要先调用[open]{@link serialManager.open}打开串口
   *
   * @param { int} portId - 端口号，来自[getPortList]{@link serialManager.getPortList}返回的
   *     [SerialPort]{@link serialManager.SerialPort}对象，必须使用getPortList返回的有效端口号，传入无效值时抛出错误码31400003异常。
   * @param { Uint8Array } buffer - 写入数据的缓冲区，包含要发送到串口设备的二进制数据。每次写入的数据长度不超过4KB，超过会导致数据丢失，长数据建议分包写入。
   * @param { int } timeout - Timeout interval for checking whether the buffer is writable, Unit: milliseconds.
   *     If not, **0** is returned after the interval. The default value **0** is returned
   *     when data cannot be written into the target port.
   * @returns { Promise<int> } Promise对象，返回实际写入的数据长度（字节数）。
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
   * 向串口设备同步写数据，使用前需先调用[open]{@link serialManager.open}打开串口设备。每次写入数据长度不超过4KB，数据过大会导致数据丢失，长数据建议分包写入。适用于需要阻塞式等待写入完成、发送重要指令
   * 、或对写入顺序有严格要求的场景。
   * 
   * **前置条件：**
   * - 需要先调用[getPortList]{@link serialManager.getPortList}获取端口号
   * - 需要先调用[requestSerialRight]{@link serialManager.requestSerialRight}申请访问权限
   * - 需要先调用[open]{@link serialManager.open}打开串口
   *
   * @param { int} portId - 端口号，来自[getPortList]{@link serialManager.getPortList}返回的
   *     [SerialPort]{@link serialManager.SerialPort}对象，必须使用getPortList返回的有效端口号，传入无效值时抛出错误码31400003异常。
   * @param { Uint8Array } buffer - 写入数据的缓冲区，包含要发送到串口设备的二进制数据。每次写入的数据长度不超过4KB，超过会导致数据丢失，长数据建议分包写入。
   * @param { int } timeout - Timeout interval for checking whether the buffer is writable, Unit: milliseconds.
   *     If not, **0** is returned after the interval. The default value **0** is returned
   *     when data cannot be written into the target port.
   * @returns { int } 返回实际写入的数据长度，即成功写入的字节数。
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
     * 串口端口号，用于唯一标识串口设备。该值来自getPortList返回的SerialPort对象，用于指定要操作的串口设备。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    portId: int;

    /**
     * 串口设备的名称，用于显示和识别具体的串口设备。可用于在用户界面中展示设备信息，帮助用户区分不同的串口设备。
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
     * 串口波特率，表示数据传输速率，单位：比特/秒
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    baudRate: BaudRates;

    /**
     * 串口数据位，表示报文中的有效数据位数，默认值为8，单位：比特
     *
     * @default DATABIT_8
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    dataBits?: DataBits;

    /**
     * 串口奇偶校验，用于检测数据传输错误，默认值为PARITY_NONE（无奇偶校验）。
     *
     * @default NONE
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    parity?: Parity;

    /**
     * 串口停止位，表示报文结束标志，默认值为1，单位：比特
     *
     * @default STOPBIT_1
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    stopBits?: StopBits;
  }
  /**
   * 表示波特率的枚举，单位：比特/秒。
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  enum BaudRates {

    /**
     * 传输波特率为50比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_50 = 50,

    /**
     * 传输波特率为75比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_75 = 75,

    /**
     * 传输波特率为110比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_110 = 110,

    /**
     * 传输波特率为134比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_134 = 134,

    /**
     * 传输波特率为150比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_150 = 150,

    /**
     * 传输波特率为200比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_200 = 200,

    /**
     * 传输波特率为300比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_300 = 300,

    /**
     * 传输波特率为600比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_600 = 600,

    /**
     * 传输波特率为1200比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1200 = 1200,

    /**
     * 传输波特率为1800比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1800 = 1800,

    /**
     * 传输波特率为2400比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2400 = 2400,

    /**
     * 传输波特率为4800比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_4800 = 4800,

    /**
     * 传输波特率为9600比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_9600 = 9600,

    /**
     * 传输波特率为19200比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_19200 = 19200,

    /**
     * 传输波特率为38400比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_38400 = 38400,

    /**
     * 传输波特率为57600比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_57600 = 57600,

    /**
     * 传输波特率为115200比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_115200 = 115200,

    /**
     * 传输波特率为230400比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_230400 = 230400,

    /**
     * 传输波特率为460800比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_460800 = 460800,

    /**
     * 传输波特率为500000比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_500000 = 500000,

    /**
     * 传输波特率为576000比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_576000 = 576000,

    /**
     * 传输波特率为921600比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_921600 = 921600,

    /**
     * 传输波特率为1000000比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1000000 = 1000000,

    /**
     * 传输波特率为1152000比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1152000 = 1152000,

    /**
     * 传输波特率为1500000比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_1500000 = 1500000,

    /**
     * 传输波特率为2000000比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2000000 = 2000000,

    /**
     * 传输波特率为2500000比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_2500000 = 2500000,

    /**
     * 传输波特率为3000000比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_3000000 = 3000000,

    /**
     * 传输波特率为3500000比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_3500000 = 3500000,

    /**
     * 传输波特率为4000000比特/秒。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    BAUDRATE_4000000 = 4000000
  }
  /**
   * 表示数据位宽的枚举，单位：比特。
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
    DATABIT_5 = 5
  }
  /**
   * 表示校验位的校验方式的枚举。
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
   * 表示停止位宽的枚举，单位：比特。
   *
   * @syscap SystemCapability.USB.USBManager.Serial
   * @since 19 dynamic
   * @since 23 static
   */
  enum StopBits {

    /**
     * 表示停止位宽为1比特。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    STOPBIT_1 = 0,

    /**
     * 表示停止位宽为2比特。
     *
     * @syscap SystemCapability.USB.USBManager.Serial
     * @since 19 dynamic
     * @since 23 static
     */
    STOPBIT_2 = 1
  }
}

export default serialManager;