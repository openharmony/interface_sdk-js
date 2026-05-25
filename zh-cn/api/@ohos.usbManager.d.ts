/*
 * Copyright (c) 2023-2024 Huawei Device Co., Ltd.
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

import { AsyncCallback } from './@ohos.base';

/**
 * 本模块主要提供管理USB设备的相关功能，包括主设备上查询USB设备列表、批量数据传输、控制命令传输、权限控制等；从设备上端口管理、功能切换及查询等。
 * 
 * > **使用说明**
 * >
 * > 凡是参数类型为[usbManager.USBDevicePipe]{@link usbManager.USBDevicePipe}的接口,都需要执行如下操作：
 * > **在使用接口前：**
 * > 1. 调用[usbManager.getDevices]{@link usbManager.getDevices()}获取设备列表。
 * > 2. 调用[usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}获取请求权限。
 * > 3. 调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}得到[usbManager.USBDevicePipe]{@link usbManager.USBDevicePipe}作为参数。
 * > **在使用接口后：**
 * > 调用[usbManager.closePipe]{@link usbManager.closePipe(USBDevicePipe: pipe)}关闭设备消息控制通道。
 *
 * @syscap SystemCapability.USB.USBManager
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace usbManager {
  /**
   * 获取接入主设备的USB设备列表。
   * 
   * > **说明：**
   * >
   * > 三方应用没有权限获取serial字段读取设备序列号，需要通过
   * > [usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}申请权限后，自行发起控制传输获取。
   *
   * @returns { Array<Readonly<USBDevice>> } 设备信息列表。
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function getDevices(): Array<Readonly<USBDevice>>;

  /**
   * 根据getDevices()返回的设备信息打开USB设备。如果USB服务异常，可能返回`undefined`，注意需要对接口返回值做判空处理。
   * 
   * 1. 需要调用[usbManager.getDevices]{@link usbManager.getDevices()}获取设备信息以及device;
   * 2. 调用[usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}请求使用该设备的权限。
   *
   * @param { USBDevice } device - USB设备信息，用[usbManager.getDevices]{@link usbManager.getDevices()}获取的busNum和devAddress确定设备，当前其他属性不做处理。
   * @returns { Readonly<USBDevicePipe> } 指定的传输通道对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @throws { BusinessError } 14400004 Service exception. Possible causes:
   *
   *     <br>1. No accessory is plugged in. [since 23] [staticonly]
   * @throws { BusinessError } 14400012 Transmission I/O error. [since 23] [staticonly]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function connectDevice(device: USBDevice): Readonly<USBDevicePipe>;

  /**
   * 判断是否有权访问该设备。
   * 如果“使用者”（如各种App或系统）有权访问设备则返回true；无权访问设备则返回false。
   *
   * @param { string } deviceName - 设备名称，来自[usbManager.getDevices]{@link usbManager.getDevices()}获取的设备列表USBDevice的name。
   * @returns { boolean } true表示有访问设备的权限，false表示没有访问设备的权限。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function hasRight(deviceName: string): boolean;

  /**
   * 请求软件包的临时权限以访问设备。使用Promise异步回调。系统应用默认拥有访问设备权限，无需调用此接口申请。
   *
   * @param { string } deviceName - 设备名称，来自[usbManager.getDevices]{@link usbManager.getDevices()}获取的设备列表USBDevice的name。
   * @returns { Promise<boolean> } Promise对象，返回临时权限的申请结果。返回true表示临时权限申请成功；返回false则表示临时权限申请失败。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function requestRight(deviceName: string): Promise<boolean>;

  /**
   * 移除软件包访问设备的权限。系统应用默认拥有访问设备权限，调用此接口不会产生影响。
   *
   * @param { string } deviceName - 设备名称，来自[usbManager.getDevices]{@link usbManager.getDevices()}获取的设备列表USBDevice的name。
   * @returns { boolean } 返回权限移除结果。返回true表示权限移除成功；返回false则表示权限移除失败。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function removeRight(deviceName: string): boolean;

  /**
   * 添加软件包访问设备的权限。系统应用默认拥有访问设备权限，调用此接口不会产生影响。
   * [usbManager.requestRight]{(@link usbManager.requestRight)}会触发弹框请求用户授权；addRight不会触发弹框，而是直接添加软件包访问设备的权限。
   *
   * @param { string } bundleName - 软件包名称。
   * @param { string } deviceName - 设备名称。
   * @returns { boolean } 返回权限添加结果。返回true表示权限添加成功；返回false则表示权限添加失败。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.addDeviceAccessRight(tokenId: string, deviceName: string)
   */
  function addRight(bundleName: string, deviceName: string): boolean;

  /**
   * 在设备模式下，将字符串形式的USB功能列表转化为数字掩码。
   *
   * @param { string } funcs - 字符串形式的功能列表。
   * @returns { number } 转化后的数字掩码。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.getFunctionsFromString(funcs: string)
   */
  function usbFunctionsFromString(funcs: string): number;

  /**
   * 在设备模式下，将数字掩码形式的USB功能列表转化为字符串。
   *
   * @param { FunctionType } funcs - USB功能数字掩码。
   * @returns { string } 转化后的字符串形式的功能列表。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.getStringFromFunctions(funcs: FunctionType)
   */
  function usbFunctionsToString(funcs: FunctionType): string;

  /**
   * 在设备模式下，设置当前的USB功能列表。使用Promise异步回调。
   *
   * @param { FunctionType } funcs - USB功能数字掩码。
   * @returns { Promise<void> } Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 14400002 - Permission denied. The HDC is disabled by the system.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.setDeviceFunctions(funcs: FunctionType)
   */
  function setCurrentFunctions(funcs: FunctionType): Promise<void>;

  /**
   * 在设备模式下，获取当前的USB功能列表的数字组合掩码。开发者模式关闭时，如果没有设备接入，接口可能返回`undefined`，注意需要对接口返回值做判空处理。
   *
   * @returns { FunctionType } 当前的USB功能列表的数字组合掩码。
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.getDeviceFunctions()
   */
  function getCurrentFunctions(): FunctionType;

  /**
   * 获取所有物理USB端口描述信息。开发者模式关闭时，如果没有设备接入，接口可能返回`undefined`，注意需要对接口返回值做判空处理。
   *
   * @returns { Array<USBPort> } USB端口描述信息列表。
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.getPortList()
   */
  function getPorts(): Array<USBPort>;

  /**
   * 获取指定的端口支持的模式列表的组合掩码。
   *
   * @param { number } portId - 端口号。
   * @returns { PortModeType } 支持的模式列表的组合掩码。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.getPortSupportModes(portId: int)
   */
  function getSupportedModes(portId: number): PortModeType;

  /**
   * 添加软件包访问设备的权限。系统应用默认拥有访问设备权限，调用此接口不会产生影响。
   * [usbManager.requestRight]{(@link usbManager.requestRight)}会触发弹框请求用户授权；addDeviceAccessRight不会触发弹框，而是直接添加软件包访问设备的权限。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { string } tokenId - 软件包tokenId。
   * @param { string } deviceName - 设备名称。
   * @returns { boolean } 返回权限添加结果。返回true表示权限添加成功；返回false则表示权限添加失败。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to
   *     call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function addDeviceAccessRight(tokenId: string, deviceName: string): boolean;

  /**
   * 在设备模式下，将字符串形式的USB功能列表转化为数字掩码。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { string } funcs - 字符串形式的功能列表。
   * @returns { int } 转化后的数字掩码。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to
   *     call the API. [since 18].
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getFunctionsFromString(funcs: string): int;

  /**
   * 在设备模式下，将数字掩码形式的USB功能列表转化为字符串。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { FunctionType } funcs - USB功能数字掩码。
   * @returns { string } 转化后的字符串形式的功能列表。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to
   *     call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12 dynamic
   */
  function getStringFromFunctions(funcs: FunctionType): string;

  /**
   * Converts the numeric mask combination of a given USB function list to a string descriptor.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } funcs - numeric mask combination of the function list.
   * @returns { string } - descriptor of the supported function list.
   * @throws { BusinessError } 201 Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 23 static
   */
  function getStringFromFunctions(funcs: int): string;

  /**
   * 在设备模式下，设置当前的USB功能列表。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { FunctionType } funcs - USB功能数字掩码。
   * @returns { Promise<void> } Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to
   *     call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400002 - Permission denied. The HDC is disabled by the system.
   * @throws { BusinessError } 14400006 - Unsupported operation. The function is not supported.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12 dynamic
   */
  function setDeviceFunctions(funcs: FunctionType): Promise<void>;

  /**
   * Sets the current USB function list in Device mode.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } funcs - numeric mask combination of the supported function list.
   * @returns { Promise<void> } the promise returned by the function.
   * @throws { BusinessError } 201 Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400002 - Permission denied. The HDC is disabled by the system.
   * @throws { BusinessError } 14400006 - Unsupported operation. The function is not supported.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 23 static
   */
  function setDeviceFunctions(funcs: int): Promise<void>;

  /**
   * 在设备模式下，获取当前的USB功能列表的数字组合掩码。开发者模式关闭时，如果没有设备接入，接口可能返回`undefined`，注意需要对接口返回值做判空处理。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @returns { FunctionType } 当前的USB功能列表的数字组合掩码。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to
   *     call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12 dynamic
   */
  function getDeviceFunctions(): FunctionType;

  /**
   * Obtains the numeric mask combination for the current USB function list in Device mode.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @returns { int } the numeric mask combination for the current USB function list in FunctionType.
   * @throws { BusinessError } 201 Permission denied.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400004 Service exception. Possible causes: <br>1. No accessory is plugged in.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 23 static
   */
  function getDeviceFunctions(): int;

  /**
   * 获取所有物理USB端口描述信息。开发者模式关闭时，如果没有设备接入，接口可能返回`undefined`，注意需要对接口返回值做判空处理。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @returns { Array<USBPort> } USB端口描述信息列表。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to
   *     call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400004 Service exception. Possible causes:
   *
   *     <br>1. No accessory is plugged in. [since 23] [staticonly]
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getPortList(): Array<USBPort>;

  /**
   * 获取指定的端口支持的模式列表的组合掩码。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } portId - 端口号。
   * @returns { PortModeType } 支持的模式列表的组合掩码。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to
   *     call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function getPortSupportModes(portId: int): PortModeType;

  /**
   * 设置指定的端口支持的角色模式，包含充电角色、数据传输角色。使用Promise异步回调。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } portId - 端口号。
   * @param { PowerRoleType } powerRole - 充电的角色。
   * @param { DataRoleType } dataRole - 数据传输的角色。
   * @returns { Promise<void> } Promise对象。
   * @throws { BusinessError } 201 - Permission verification failed. The application does not have the permission required to
   *     call the API. [since 18]
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400003 - Unsupported operation. The current device does not support port role switching.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 12 dynamic
   * @since 23 static
   */
  function setPortRoleTypes(portId: int, powerRole: PowerRoleType, dataRole: DataRoleType): Promise<void>;

  /**
   * 为应用程序添加访问USB配requestAccessoryRight件权限。
   * [usbManager.]{(@link usbManager.requestAccessoryRight)}会触发弹窗请求用户授权；addAccessoryRight不会触发弹窗，而是直接添加应用程序访问设备的权限。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } tokenId - 应用程序tokenId。
   * @param { USBAccessory } accessory - USB配件。
   * @throws { BusinessError } 201 - The permission check failed.
   * @throws { BusinessError } 202 - Permission denied. Normal application do not have permission to use system api.
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1. Mandatory parameters are left unspecified.
   *
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   *
   *     <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 14 dynamic
   * @since 23 static
   */
  function addAccessoryRight(tokenId: int, accessory: USBAccessory): void;

  /**
   * 声明对USB设备某个接口的控制权。
   * 
   * > **说明：**
   * >
   * > 在USB编程中，claim interface是一个常见操作，指的是应用程序请求操作系统将某个USB接口从内核驱动中释放并交由用户空间程序控制。<br>
   * > > 下面用到的claim通信接口都表示claim interface操作。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址，需要调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}获取。
   * @param { USBInterface } iface - 用于确定需要获取接口的索引，需要调用[usbManager.getDevices]{@link usbManager.getDevices()}获取设备信息并通过id确定唯一接口。
   * @param { boolean } [force] - 可选参数，是否强制获取。默认值为false?，表示不强制获取，用户按需选择。
   * @returns { int } claim通信接口成功返回0；claim通信接口失败返回其他错误码如下：
   *     
   *     - 88080389：服务未启动，可能原因：1.无设备插入；2.服务异常退出。
   *     
   *     - 88080486：服务初始化中，请稍后重试。
   *     
   *     - 88080488：无设备访问权限，请先调用[usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}接口申请授权。
   *     
   *     - -1：驱动异常。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean): int;

  /**
   * 释放claim过的通信接口。
   * 
   * > **说明：**
   * >
   * > 在调用该接口前需要通过
   * > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}
   * > claim通信接口。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址，需要调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}获取。
   * @param { USBInterface } iface - 用于确定需要释放接口的索引，需要调用[usbManager.getDevices]{@link usbManager.getDevices()}获取设备信息并通过id确定唯一接口。
   * @returns { int } 释放接口成功返回0；释放接口失败返回其他错误码如下：
   *     
   *     - 88080389：服务未启动，可能原因：1.无设备插入；2.服务异常退出。
   *     
   *     - 88080486：服务初始化中，请稍后重试。
   *     
   *     - 88080488：无设备访问权限，请先调用[usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}接口申请授权。
   *     
   *     - -1：驱动异常。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function releaseInterface(pipe: USBDevicePipe, iface: USBInterface): int;

  /**
   * 设置设备配置。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址，需要调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}获取。
   * @param { USBConfiguration } config - 用于确定需要设置的配置，需要调用[usbManager.getDevices]{@link usbManager.getDevices()}获取设备信息并通过id用于确定唯一设置。
   * @returns { int } 设置设备配置成功返回0；设置设备配置失败返回其他错误码如下：
   *     
   *     - 88080389：服务未启动，可能原因：1.无设备插入；2.服务异常退出。
   *     
   *     - 88080486：服务初始化中，请稍后重试。
   *     
   *     - 88080488：无设备访问权限，请先调用[usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}接口申请授权。
   *     
   *     - -1：驱动异常。
   *     
   *     - -17：I/O失败。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function setConfiguration(pipe: USBDevicePipe, config: USBConfiguration): int;

  /**
   * 设置设备接口。
   * 
   * > **说明：**
   * >
   * > 一个USB接口可能存在多重选择模式，支持动态切换。使用的场景：数据传输时，通过该接口可重新设置端点，使端点与传输类型匹配。
   * >
   * > 在调用该接口前需要通过
   * > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}
   * > claim通信接口。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址，需要调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}获取。
   * @param { USBInterface } iface - 用于确定需要设置的接口，需要调用[usbManager.getDevices]{@link usbManager.getDevices()}获取设备信息并通过id和alternateSetting确定唯一接口。
   * @returns { int } 设置设备接口成功返回0；设置设备接口失败返回其他错误码如下：
   *     
   *     - 88080389：服务未启动，可能原因：1.无设备插入；2.服务异常退出。
   *     
   *     - 88080486：服务初始化中，请稍后重试。
   *     
   *     - 88080488：无设备访问权限，请先调用[usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}接口申请授权。
   *     
   *     - -1：驱动异常 。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function setInterface(pipe: USBDevicePipe, iface: USBInterface): int;

  /**
   * 获取原始的USB描述符。如果USB服务异常，可能返回`undefined`，注意需要对接口返回值做判空处理。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址，需要调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}获取。
   * @returns { Uint8Array } 返回获取的原始数据；失败返回undefined。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400001 Access right denied. Call requestRight to get the USBDevicePipe access right first.
   *     [since 23] [staticonly]
   * @throws { BusinessError } 14400004 Service exception. Possible causes:
   *
   *     <br>1. No accessory is plugged in. [since 23] [staticonly]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function getRawDescriptor(pipe: USBDevicePipe): Uint8Array;

  /**
   * 获取文件描述符。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址，需要调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}获取。
   * @returns { int } 返回设备对应的文件描述符，失败返回其它错误码如下：
   *     
   *     - 88080486：服务初始化中，请稍后重试。
   *     
   *     - 88080488：无设备访问权限，请先调用[usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}接口申请授权。
   *     
   *     - -1：驱动异常 。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function getFileDescriptor(pipe: USBDevicePipe): int;

  /**
   * 控制传输。使用Promise异步回调。
   *
   * @param { USBDevicePipe } pipe - 用于确定设备，需要调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}获取。
   * @param { USBControlParams } controlparam - 控制传输参数，按需设置参数，参数传参类型请参考USB协议。
   * @param { number } [timeout] - 超时时间（单位：毫秒），可选参数，指定时间内等待控制传输完成，若在指定时间内传输完成则正常返回，否则返回超时；默认为0时无限等待直到传输完成。用户按需选择。
   * @returns { Promise<number> } Promise对象，获取传输或接收到的数据块大小。失败返回其他错误码如下：
   *     
   *     - -1：驱动异常。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.usbControlTransfer(pipe: USBDevicePipe, requestparam: USBDeviceRequestParams, timeout?: int)
   */
  function controlTransfer(pipe: USBDevicePipe, controlparam: USBControlParams, timeout?: number): Promise<number>;

  /**
   * 控制传输。使用Promise异步回调。
   *
   * @param { USBDevicePipe } pipe - 用于确定设备，需要调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}获取。
   * @param { USBDeviceRequestParams } requestparam - 控制传输参数，按需设置参数，参数传参类型请参考USB协议。
   * @param { int } [timeout] - 超时时间（单位：毫秒），可选参数，指定时间内等待控制传输完成，若在指定时间内传输完成则正常返回，否则返回超时；默认为0时无限等待直到传输完成。用户按需选择。
   * @returns { Promise<int> } Promise对象，获取传输或接收到的数据块大小。失败返回其他错误码如下：
   *     
   *     - -1：驱动异常。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 12 dynamic
   * @since 23 static
   */
  function usbControlTransfer(pipe: USBDevicePipe, requestparam: USBDeviceRequestParams, timeout?: int): Promise<int>;

  /**
   * 批量传输。使用Promise异步回调。
   * 
   * > **说明：** 
   * >
   * > 单次批量传输的传输数据总量（包括pipe、endpoint、buffer、timeout）请控制在200KB以下，数据总量过大会导致传输失败返回-1。
   * >
   * > 在调用接口前需要通过
   * > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}
   * > claim通信接口。
   *
   * @param { USBDevicePipe } pipe - 用于确定设备，需要调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}获取。
   * @param { USBEndpoint } endpoint - 用于确定传输的端口，需要调用[usbManager.getDevices]{@link usbManager.getDevices()}获取设备信息列表以及endpoint，
   *     address用于确定端点地址，direction用于确定端点的方向，interfaceId用于确定所属接口，当前其他属性不做处理。
   * @param { Uint8Array } buffer - 用于写入或读取数据的缓冲区。
   * @param { int } [timeout] - 超时时间（单位：毫秒），可选参数，指定时间内等待批量传输完成，若在指定时间内传输完成则正常返回，否则返回超时；默认为0时无限等待直到传输完成。用户按需选择。
   * @returns { Promise<int> } Promise对象，获取传输或接收到的数据块大小。失败返回其他错误码如下：
   *     
   *     - -1：驱动异常。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function bulkTransfer(
    pipe: USBDevicePipe,
    endpoint: USBEndpoint,
    buffer: Uint8Array,
    timeout?: int
  ): Promise<int>;


  /**
   * 重置USB外设。
   * 
   * > **说明：**
   * >
   * > 本接口调用后会重置此前设置的配置和替换接口，请在调用之前确认相关业务已结束。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线号和设备地址，需要调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}获取。
   * @returns { boolean } true表示重置设备成功，false表示重置设备失败。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @throws { BusinessError } 14400004 -Service exception. Possible causes: 1. No accessory is plugged in.
   * @throws { BusinessError } 14400008 - No such device(it may have been disconnected)
   * @throws { BusinessError } 14400010 - Other USB error. Possible causes:
   *
   *     <br>1.Unrecognized discard error code.
   * @throws { BusinessError } 14400013 - The USBDevicePipe validity check failed. Possible causes:
   *
   *     <br>1.The input parameters fail the validation check.
   *
   *     <br>2.The call chain used to obtain the input parameters is not reasonable.
   * @syscap SystemCapability.USB.USBManager
   * @since 20 dynamic
   * @since 23 static
   */
  function resetUsbDevice(pipe: USBDevicePipe): boolean;

  /**
   * 关闭设备消息控制通道。
   * 
   * 1. 需要调用[usbManager.getDevices]{@link usbManager.getDevices()}获取设备列表；
   * 2. 调用[usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}获取设备请求权限；
   * 3. 调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}得到devicepipe作为参数。
   *
   * @param { USBDevicePipe } pipe - 用于确定USB设备消息控制通道，需要调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}获取。
   * @returns { int } 关闭设备消息控制通道成功返回0；关闭设备消息控制通道失败返回其他错误码如下：
   *     
   *     - 22：服务异常。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function closePipe(pipe: USBDevicePipe): int;

  /**
   * 检查应用程序是否有权访问USB配件。
   * 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList()}获取配件列表，得到
   * [USBAccessory]{@link usbManager.USBAccessory}作为参数。
   *
   * @param { USBAccessory } accessory - USB配件，需要通过[getAccessoryList]{@link usbManager.getAccessoryList()}获取。
   * @returns { boolean } true表示应用程序有权访问USB配件，false表示应用程序无权访问USB配件。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1. Mandatory parameters are left unspecified.
   *
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14401001 - The target USBAccessory not matched.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   *
   *     <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @syscap SystemCapability.USB.USBManager
   * @since 14 dynamic
   * @since 23 static
   */
  function hasAccessoryRight(accessory: USBAccessory): boolean;

  /**
   * 为指定应用程序申请访问USB配件的访问权限。使用Promise异步回调。
   * 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList()}获取配件列表，得到
   * [USBAccessory]{@link usbManager.USBAccessory}作为参数。
   *
   * @param { USBAccessory } accessory - USB配件，需要通过[getAccessoryList]{@link usbManager.getAccessoryList()}获取。
   * @returns { Promise<boolean> } Promise对象，返回应用程序访问配件权限的申请结果。返回true表示权限申请成功；返回false表示权限申请失败。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1. Mandatory parameters are left unspecified.
   *
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14401001 - The target USBAccessory not matched.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   *
   *     <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @syscap SystemCapability.USB.USBManager
   * @since 14 dynamic
   * @since 23 static
   */
  function requestAccessoryRight(accessory: USBAccessory): Promise<boolean>;

  /**
   * 取消当前应用程序访问USB配件的权限。
   * 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList()}获取配件列表，得到
   * [USBAccessory]{@link usbManager.USBAccessory}作为参数。
   *
   * @param { USBAccessory } accessory - USB配件，需要通过[getAccessoryList]{@link usbManager.getAccessoryList()}获取。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1. Mandatory parameters are left unspecified.
   *
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14401001 - The target USBAccessory not matched.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   *
   *     <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14400005 - Database operation exception.
   * @syscap SystemCapability.USB.USBManager
   * @since 14 dynamic
   * @since 23 static
   */
  function cancelAccessoryRight(accessory: USBAccessory): void;

  /**
   * 获取当前已接入主机的USB配件列表。
   *
   * @returns { Array<Readonly<USBAccessory>> } 只读的USB配件列表。当前仅支持列表中包含1个USB配件。
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   *
   *     <br>1. No accessory is plugged in.
   * @syscap SystemCapability.USB.USBManager
   * @since 14 dynamic
   * @since 23 static
   */
  function getAccessoryList(): Array<Readonly<USBAccessory>>;

  /**
   * 获取配件句柄并打开配件文件描述符。之后可以通过CoreFileKit提供的read/write接口和配件进行通信。
   * 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList()}获取配件列表，得到
   * [USBAccessory]{@link usbManager.USBAccessory}作为参数。
   *
   * @param { USBAccessory } accessory - USB配件，需要通过[getAccessoryList]{@link usbManager.getAccessoryList()}获取。
   * @returns { USBAccessoryHandle } USB配件句柄。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1. Mandatory parameters are left unspecified.
   *
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   *
   *     <br>1. No accessory is plugged in.
   * @throws { BusinessError } 14401001 - The target USBAccessory not matched.
   * @throws { BusinessError } 14401002 - Failed to open the native accessory node.
   * @throws { BusinessError } 14401003 - Cannot reopen the accessory.
   * @syscap SystemCapability.USB.USBManager
   * @since 14 dynamic
   * @since 23 static
   */
  function openAccessory(accessory: USBAccessory): USBAccessoryHandle;

  /**
   * 关闭配件文件描述符。
   * 需要调用[usbManager.openAccessory]{@link usbManager.openAccessory(accessory: USBAccessory)}获取配件列表，得到
   * [USBAccessoryHandle]{@link usbManager.USBAccessoryHandle}作为参数。
   *
   * @param { USBAccessoryHandle } accessoryHandle - USB配件句柄。需要通过
   *     [openAccessory]{@link usbManager.openAccessory(accessory: USBAccessory)}获取。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1. Mandatory parameters are left unspecified.
   *
   *     <br>2. Incorrect parameter types.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @throws { BusinessError } 14400004 - Service exception. Possible causes:
   *
   *     <br>1. No accessory is plugged in.
   * @syscap SystemCapability.USB.USBManager
   * @since 14 dynamic
   * @since 23 static
   */
  function closeAccessory(accessoryHandle: USBAccessoryHandle): void;

  /**
   * 通过USB发送和接收数据的端口。通过[USBInterface]{@link usbManager.USBInterface}获取。
   * 
   * > **说明：**
   * >
   * > 主机控制器按照Endpoint类型调度。
   * >
   * > 协议层打包时依赖type决定传输特性。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBEndpoint {
    /**
     * 端点地址。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    address: int;

    /**
     * 端点属性。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    attributes: int;

    /**
     * 端点间隔。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    interval: int;

    /**
     * 端点最大数据包大小。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    maxPacketSize: int;

    /**
     * 端点的方向。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    direction: USBRequestDirection;

    /**
     * 端点号。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     */
    number: number;

    /**
     * Endpoint address
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 23 static
     */
    endpointAddr: int;

    /**
     * 端点类型。取值见[UsbEndpointTransferType]{@link usbManager.UsbEndpointTransferType}
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    type: int;

    /**
     * 端点所属的接口的唯一标识。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    interfaceId: int;
  }

  /**
   * 一个[USBConfiguration]{@link usbManager.USBConfiguration}中可以含有多个USBInterface，每个USBInterface提供一个功能。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBInterface {
    /**
     * 接口的唯一标识。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * 接口的协议。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    protocol: int;

    /**
     * 设备类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    clazz: int;

    /**
     * 设备子类。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    subClass: int;

    /**
     * 在同一个接口中的多个描述符中进行切换设置。值的大小表示支持可选模式个数，其中0表示不支持可选模式。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    alternateSetting: int;

    /**
     * 接口名称。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 当前接口所包含的端点。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    endpoints: Array<USBEndpoint>;
  }

  /**
   * USB配置，一个[USBDevice]{@link usbManager.USBDevice}中可以含有多个配置。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBConfiguration {
    /**
     * 配置的唯一标识。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * 配置的属性。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    attributes: int;

    /**
     * 最大功耗。（单位：毫安）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    maxPower: int;

    /**
     * 配置的名称，可以为空。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 检查当前配置是否支持远程唤醒。true表示支持，false表示不支持。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    isRemoteWakeup: boolean;

    /**
     * 检查当前配置是否支持独立电源。true表示支持，false表示不支持。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    isSelfPowered: boolean;

    /**
     * 配置支持的接口属性。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    interfaces: Array<USBInterface>;
  }

  /**
   * USB设备信息。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBDevice {
    /**
     * 总线地址。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    busNum: int;

    /**
     * 设备地址。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    devAddress: int;

    /**
     * 序列号。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    serial: string;

    /**
     * 设备名字。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 产商信息。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    manufacturerName: string;

    /**
     * 产品信息。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    productName: string;

    /**
     * 版本。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    version: string;

    /**
     * 厂商ID。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    vendorId: int;

    /**
     * 产品ID。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    productId: int;

    /**
     * 设备类。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    clazz: int;

    /**
     * 设备子类。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    subClass: int;

    /**
     * 设备协议码。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    protocol: int;

    /**
     * 设备配置描述符信息。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    configs: Array<USBConfiguration>;
  }

  /**
   * USB设备消息传输通道，用于确定设备。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBDevicePipe {
    /**
     * 总线地址。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    busNum: int;

    /**
     * 设备地址。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    devAddress: int;
  }

  /**
   * Enumerates power role types.
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum PowerRoleType {
    /**
     * 没有功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * External power supply
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    SOURCE = 1,

    /**
     * Internal power supply
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    SINK = 2
  }

  /**
   * Enumerates data role types.
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DataRoleType {
    /**
     * 没有功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Host mode
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    HOST = 1,

    /**
     * Device mode
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DEVICE = 2
  }

  /**
   * Enumerates USB port mode types.
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum PortModeType {
    /**
     * 没有功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * Upstream facing port, which functions as the sink of power supply
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    UFP = 1,

    /**
     * Downstream facing port, which functions as the source of power supply
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DFP = 2,

    /**
     * Dynamic reconfiguration port (DRP), which can function as the DFP (host) or UFP (device). It is not supported currently.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DRP = 3,

    /**
     * Not supported currently
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NUM_MODES = 4
  }

  /**
   * USB设备端口角色信息。
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBPortStatus {
    /**
     * 当前的USB模式。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentMode: int;

    /**
     * 当前设备充电模式。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentPowerRole: int;

    /**
     * 当前设备数据传输模式。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentDataRole: int;
  }

  /**
   * USB设备端口。
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBPort {
    /**
     * USB端口唯一标识。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * USB端口所支持的模式的数字组合掩码。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    supportedModes: PortModeType;

    /**
     * USB端口角色。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    status: USBPortStatus;
  }

  /**
   * 控制传输参数。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBDeviceRequestParams {
    /**
     * 请求控制类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    bmRequestType: int;

    /**
     * 请求类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    bRequest: int;

    /**
     * 请求参数。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wValue: int;

    /**
     * 请求参数value对应的索引值。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wIndex: int;

    /**
     * 请求数据的长度。（单位：字节）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wLength: int;

    /**
     * 用于写入或读取的缓冲区。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    data: Uint8Array;
  }

  /**
   * Enumerates request target types.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  export enum USBRequestTargetType {
    /**
     * 设备。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_DEVICE = 0,

    /**
     * 接口。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_INTERFACE = 1,

    /**
     * 端点。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_ENDPOINT = 2,

    /**
     * 其他。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_OTHER = 3
  }

  /**
   * Enumerates control request types.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  export enum USBControlRequestType {
    /**
     * 标准。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_STANDARD = 0,

    /**
     * 类。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_CLASS = 1,

    /**
     * 厂商。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_VENDOR = 2
  }

  /**
   * Enumerates request directions.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  export enum USBRequestDirection {
    /**
     * 写数据，主设备往从设备。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_DIR_TO_DEVICE = 0,

    /**
     * 读数据，从设备往主设备。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_DIR_FROM_DEVICE = 0x80
  }

  /**
   * Enumerates USB device function types.
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum FunctionType {
    /**
     * 没有功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * acm功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ACM = 1,

    /**
     * ecm功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ECM = 2,

    /**
     * hdc功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    HDC = 4,

    /**
     * 媒体传输。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    MTP = 8,

    /**
     * 图片传输。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    PTP = 16,

    /**
     * 网络共享。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    RNDIS = 32,

    /**
     * midi功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    MIDI = 64,

    /**
     * 音频功能。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE = 128,

    /**
     * ncm传输。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NCM = 256
  }

  /**
   * USB配件信息。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 14 dynamic
   * @since 23 static
   */
  interface USBAccessory {
    /**
     * 配件的生产厂商。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    manufacturer: string;

    /**
     * 配件的产品类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    product: string;

    /**
     * 配件的描述。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    description: string;

    /**
     * 配件的版本。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    version: string;

    /**
     * 配件的SN号。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    serialNumber: string;
  }

  /**
   * USB配件句柄。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 14 dynamic
   * @since 23 static
   */
  interface USBAccessoryHandle {
    /**
     * 配件文件描述符。合法的accessoryFd是正整数。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    accessoryFd: int;
  }

  /**
   * Enumerates USB transfer flags.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum UsbTransferFlags {
    /**
     * 将短帧报告为错误。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    USB_TRANSFER_SHORT_NOT_OK = 0,

    /**
     * 自动释放传输缓冲区。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    USB_TRANSFER_FREE_BUFFER = 1,

    /**
     * 完成回调后自动传输。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    USB_TRANSFER_FREE_TRANSFER = 2,

    /**
     * 传输将增加一个额外的数据包。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    USB_TRANSFER_ADD_ZERO_PACKET = 3
  }

  /**
   * Enumerates the status code returned after data processing is complete.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum UsbTransferStatus {
    /**
     * 传输完成。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_COMPLETED = 0,

    /**
     * 传输失败。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_ERROR = 1,

    /**
     * 传输超时。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TIMED_OUT = 2,

    /**
     * 传输已被取消。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_CANCELED = 3,

    /**
     * 检测到暂停（批量/中断端点）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_STALL = 4,

    /**
     * 设备已断开。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_NO_DEVICE = 5,

    /**
     * 设备发送的数据比请求的多。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_OVERFLOW = 6
  }

  /**
   * Enumerates USB transfer types.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  export enum UsbEndpointTransferType {
    /**
     * 实时传输。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_ISOCHRONOUS = 0x1,

    /**
     * 批量传输。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_BULK = 0x2,

    /**
     * 中断传输。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_INTERRUPT = 0x3,

    /**
     * Control endpoint
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18
     */
    TRANSFER_TYPE_CONTROL = 0x0
  }

  /**
   * 实时传输模式回调返回的分包信息。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  interface UsbIsoPacketDescriptor {
    /**
     * 读写操作的期望长度值。（单位：字节）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    length: int;

    /**
     * 读写操作的实际长度值。（单位：字节）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    actualLength: int;

    /**
     * 实时传输分包的状态码。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    status: UsbTransferStatus;
  }

  /**
   * 作为通用USB数据传输接口，客户端需要填充这个对象中的参数，用以发起传输请求。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  interface UsbDataTransferParams {
    /**
     * 用于确定总线地址和设备地址，需要调用[usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}获取。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    devPipe: USBDevicePipe;

    /**
     * USB传输标志。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    flags: UsbTransferFlags;

    /**
     * 端点地址，正整数。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    endpoint: int;

    /**
     * 传输类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    type: UsbEndpointTransferType;

    /**
     * 超时时间。（单位：毫秒）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    timeout: int;

    /**
     * 数据缓冲区的长度，必须是非负数（期望长度）。（单位：字节）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    length: int;

    /**
     * 传输完成时的回调信息。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    callback: AsyncCallback<SubmitTransferCallback>;

    /**
     * 用户上下文数据。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    userData: Uint8Array;

    /**
     * 用于存储读或者写请求时的数据。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    buffer: Uint8Array;

    /**
     * 实时传输时数据包的数量，仅用于具有实时传输端点的I/O。必须是非负数，（单位：个数）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    isoPacketCount: int;

    /**
     * The status of the transfer. Read-only, and only for use within transfer callback function.
     *
     * @type { UsbTransferStatus }
     * @syscap SystemCapability.USB.USBManager
     * @since 18
     */
    status: UsbTransferStatus;

    /**
     * Actual length of data that was transferred. Read-only, and only for
     * use within transfer callback function. Not valid for isochronous endpoint transfers.
     *
     * @type { number }
     * @syscap SystemCapability.USB.USBManager
     * @since 18
     */
    actualLength: number;

    /**
     * Callback function. This will be invoked when the transfer completes, fails, or is canceled.
     *
     * @type { AsyncCallback<UsbDataTransferParams> }
     * @syscap SystemCapability.USB.USBManager
     * @since 18
     */
    callback: AsyncCallback<UsbDataTransferParams>;

    /**
     * Isochronous packet descriptors, for isochronous transfers only.
     *
     * @type { Array<Readonly<UsbIsoPacketDescriptor>> }
     * @syscap SystemCapability.USB.USBManager
     * @since 18
     */
    isoPacketDesc: Array<Readonly<UsbIsoPacketDescriptor>>;
  }

  /**
   * 提交异步传输请求。
   * 
   * > **说明：**
   * >
   * > 本接口为异步接口，调用后立刻返回，实际读写操作的结果以回调的方式返回。
   * >
   * > 在调用该接口前需要通过
   * > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}
   * > claim通信接口。
   *
   * @param { UsbDataTransferParams } transfer - 作为通用USB数据传输接口，客户端需要填充这个对象中的参数，用以发起传输请求。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @throws { BusinessError } 14400007 - Resource busy. Possible causes:
   *
   *     <br>1. The transfer has already been submitted.
   *
   *     <br>2. The interface is claimed by another program or driver.
   * @throws { BusinessError } 14400008 - No such device (it may have been disconnected).
   * @throws { BusinessError } 14400009 - Insufficient memory. Possible causes:
   *
   *     <br>1. Memory allocation failed.
   * @throws { BusinessError } 14400012 - Transmission I/O error.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function usbSubmitTransfer(transfer: UsbDataTransferParams): void;

  /**
   * 取消异步传输请求。
   * 
   * > **说明：**
   * >
   * > 该接口的主要作用是主动取消尚未完成的USB数据传输请求（如usbSubmitTransfer提交的传输）。<br>
   * > > 在调用该接口前需要通过
   * > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}
   * > claim通信接口。
   *
   * @param { UsbDataTransferParams } transfer - 在取消传输的接口中，只需要填充[USBDevicePipe]{@link usbManager.USBDevicePipe}和
   *     [USBEndpoint]{@link usbManager.USBEndpoint}即可。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @throws { BusinessError } 14400008 - No such device (it may have been disconnected).
   * @throws { BusinessError } 14400010 - Other USB error. Possible causes:
   *
   *     <br>1.Unrecognized discard error code.
   * @throws { BusinessError } 14400011 - The transfer is not in progress, or is already complete or cancelled.
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  function usbCancelTransfer(transfer: UsbDataTransferParams): void;

  /**
   * 设置指定的端口支持的角色模式，包含充电角色、数据传输角色。使用Promise异步回调。
   *
   * @param { number } portId - 端口号。
   * @param { PowerRoleType } powerRole - 充电的角色。
   * @param { DataRoleType } dataRole - 数据传输的角色。
   * @returns { Promise<void> } Promise对象。
   * @throws { BusinessError } 401 - Parameter error. Possible causes:
   *
   *     <br>1.Mandatory parameters are left unspecified.
   *
   *     <br>2.Incorrect parameter types.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.setPortRoleTypes(portId: int, powerRole: PowerRoleType, dataRole: DataRoleType)
   */
  function setPortRoles(portId: number, powerRole: PowerRoleType, dataRole: DataRoleType): Promise<void>;

  /**
   * Usb异步传输回调。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  interface SubmitTransferCallback {
    /**
     * 读写操作完成的状态。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    status: UsbTransferStatus;

    /**
     * 实时传输的分包信息。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    isoPacketDescs: Array<Readonly<UsbIsoPacketDescriptor>>;

    /**
     * 读写操作的实际长度值。（单位：字节）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    actualLength: int;
  }

  /**
   * 控制传输参数。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead usbManager.USBDeviceRequestParams
   */
  interface USBControlParams {
    /**
     * 请求参数value对应的索引值。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    index: number;

    /**
     * 请求控制类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    reqType: USBControlRequestType;

    /**
     * 请求目标类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    target: USBRequestTargetType;

    /**
     * 请求参数。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    value: number;

    /**
     * 请求类型。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    request: number;

    /**
     * 用于写入或读取的缓冲区。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    data: Uint8Array;
  }
}

import type { AsyncCallback } from './@ohos.base';

export default usbManager;