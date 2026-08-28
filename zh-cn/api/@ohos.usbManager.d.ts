/*
 * Copyright (c) 2026 Huawei Device Co., Ltd.
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
 * @file USB管理
 * @kit BasicServicesKit
 */

import { AsyncCallback } from './@ohos.base';

/**
 * 本模块主要提供管理USB设备的相关功能，包括主机端的查询USB设备列表、批量数据传输、控制命令传输、权限控制等；设备端的端口管理、功能切换及查询等。适用于需要与USB设备进行数据交互、管理USB设备权限、动态切换USB设备模式等场景。
 *
 * ###### 使用说明
 * 
 * 凡是参数类型为[USBDevicePipe]{@link usbManager.USBDevicePipe}的接口，都需要执行如下操作：
 * 
 * **在使用接口前：**
 * 
 * 1. 调用[usbManager.getDevices]{@link usbManager.getDevices}获取设备列表。
 * 2. 调用[usbManager.requestRight]{@link usbManager.requestRight}获取请求权限。
 * 3. 调用[usbManager.connectDevice]{@link usbManager.connectDevice}得到USBDevicePipe作为参数。
 * 
 * **在使用接口后：**
 * 
 * 调用[usbManager.closePipe]{@link usbManager.closePipe}关闭设备连接通道。
 *
 * ![usbmanager](docroot://reference/figures/usbManager.png)
 *
 * @syscap SystemCapability.USB.USBManager
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace usbManager {
  /**
   * 获取接入主设备的USB设备列表。调用成功后返回已连接设备的详细信息列表包括设备名称、厂商产品信息等。
   * 
   * > **说明：**
   * >
   * > 三方应用无法通过getDevices()接口直接获取serial字段的设备序列号信息（该字段对三方应用不可用）。如需获取序列号，需要在申请设备访问权限后，自行发起控制传输获取。
   *
   * @returns { Array<Readonly<USBDevice>> } 设备信息列表。
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function getDevices(): Array<Readonly<USBDevice>>;

  /**
   * 根据getDevices()返回的设备信息打开USB设备，调用成功后建立设备连接通道，可以进行后续的数据传输和设备控制操作。使用完后需要调用
   * [usbManager.closePipe]{@link usbManager.closePipe}关闭设备连接通道。如果USB服务异常，会返回`undefined`，注意需要对接口返回值做判空处理。
   * 
   * 1. 调用[usbManager.getDevices]{@link usbManager.getDevices}获取设备信息以及USBDevice;
   * 2. 调用[usbManager.requestRight]{@link usbManager.requestRight}请求使用该设备的权限。
   *
   * @param { USBDevice } device - USB设备信息，用[getDevices]{@link usbManager.getDevices}获取的busNum和devAddress确定设备，当前其他属性（如
   *     name、vendorId等）不参与设备匹配。
   * @returns { Readonly<USBDevicePipe> } USB设备连接通道对象，用于后续的数据传输和设备控制操作。
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
   * 
   * 如果应用有权访问设备则返回true；无权访问设备则返回false。
   *
   * @param { string } deviceName - 设备名称，来自[getDevices]{@link usbManager.getDevices}获取的设备列表USBDevice的name。
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
   * 请求应用访问设备的临时权限。使用Promise异步回调返回结果。系统应用默认拥有访问设备权限，无需调用此接口。
   *
   * @param { string } deviceName - 设备名称，来自[getDevices]{@link usbManager.getDevices}获取的设备列表USBDevice的name。
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
   * 移除应用访问设备的权限。系统应用默认拥有访问设备权限，调用此接口不会产生影响。
   *
   * @param { string } deviceName - 设备名称，来自[getDevices]{@link usbManager.getDevices}获取的设备列表USBDevice的name。
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
   * 在设备模式下，将字符串形式的USB功能列表转换为数字掩码。适用于需要将配置文件或用户输入的字符串形式USB功能列表转换为系统内部使用的数字掩码的场景，以便后续调用setDeviceFunctions等接口设置USB功能。
   *
   * @param { string } funcs - 字符串形式的功能列表，可用值包括：'none'、'acm'、'ecm'、'hdc'、'mtp'、'ptp'、'rndis'、'midi'、'audio_source'、'ncm'
   *     ，可通过英文逗号分隔多个功能。传入无效字符串时抛出异常。
   * @returns { number } 转换后的功能列表对应的数字掩码。
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
   * 在设备模式下，将数字掩码形式的USB功能列表转换为字符串。适用于需要将当前USB功能状态以字符串形式显示或保存的场景，如在日志中记录当前功能配置、在UI界面展示当前功能等。
   *
   * @param { FunctionType } funcs - 功能列表对应的数字掩码，可通过位运算组合多个功能。
   * @returns { string } 转换后的字符串形式的功能列表。
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
   * 在设备模式下，设置当前的USB功能列表。使用Promise异步回调。调用成功后，设备的USB功能将切换为指定的功能列表。适用于系统应用需要动态切换设备USB功能、配置设备工作模式的场景。
   *
   * @param { FunctionType } funcs - 功能列表对应的数字掩码，可通过位运算组合多个功能。
   * @returns { Promise<void> } Promise对象。调用成功时无返回值，调用失败时抛出异常。
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
   * 在设备模式下，获取当前的USB功能列表的数字组合掩码。适用于需要检查当前USB功能状态、确认功能配置、或在功能切换前后进行状态对比的场景。开发者模式关闭时，如果没有设备接入，接口返回`undefined`，注意需要对接口返回值做判
   * 空处理。
   *
   * @returns { FunctionType } 当前的USB功能列表的数字组合掩码。如果开发者模式关闭且没有设备接入，则返回undefined，需要对返回值做判空处理。
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.getDeviceFunctions()
   */
  function getCurrentFunctions(): FunctionType;

  /**
   * 获取所有物理USB端口描述信息。适用于需要枚举USB端口、进行端口管理、设备连接诊断、或查询端口配置信息的场景。开发者模式关闭时，如果没有设备接入，接口返回`undefined`，注意需要对接口返回值做判空处理。
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
   * 获取指定的端口支持的模式列表的组合掩码。适用于系统应用需要查询USB-C端口能力判断是否支持特定模式（如UFP、DFP或DRP模式）的场景。返回值为PortModeType的组合掩码，可通过位运算判断端口是否支持特定模式。
   * PortModeType包括：NONE（0，无模式）、UFP（1，上行端口模式，dataRole为DEVICE）、DFP（2，下行端口模式，dataRole为HOST）、DRP（3，双角色模式，可在UFP和DFP间切换）、
   * NUM_MODES（4，当前不支持）。开发者可根据返回值判断端口是否支持所需的电源角色和数据传输角色组合。
   *
   * @param { number } portId - USB端口号，取值范围为非负整数，可通过[getPortList]{@link usbManager.getPortList}获取端口列表后得到。
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
   * 添加应用访问设备的权限。系统应用默认拥有访问设备权限，调用此接口不会产生影响。适用于系统设置应用、设备管理应用等需要为第三方应用授权访问USB设备的场景。授权立即生效并持久化存储，设备重启后仍然有效。授权范围为指定的USB设备实
   * 例，多个应用可以同时获得同一设备的访问权限。
   * 
   * [usbManager.requestRight]{@link usbManager.requestRight}会触发弹窗请求用户授权；addDeviceAccessRight不会触发弹窗，而是直接添加应用程序访问设备的权限。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { string } tokenId - 应用的唯一标识符，可通过
   *     [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}获取。
   * @param { string } deviceName - 设备名称，格式为'bus-port'，例如'1-1'，可通过[getDevices]{@link usbManager.getDevices}接口获取设备列表后得到设备
   *     名称。
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
   * 在设备模式下，将字符串形式的USB功能列表转换为数字掩码。适用于需要将配置文件或用户输入的字符串形式USB功能列表转换为系统内部使用的数字掩码的场景，以便后续调用setDeviceFunctions等接口设置USB功能。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { string } funcs - 字符串形式的功能列表。可用值包括：'none'、'acm'、'ecm'、'hdc'、'mtp'、'ptp'、'rndis'、'midi'、'audio_source'、'ncm'
   *     ，可通过英文逗号分隔多个功能。
   * @returns { int } 转换后的功能列表对应的数字掩码。
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
  function getFunctionsFromString(funcs: string): int;

  /**
   * 在设备模式下，将数字掩码形式的USB功能列表转换为字符串。适用于需要将当前USB功能状态以字符串形式显示或保存的场景，如在日志中记录当前功能配置、在UI界面展示当前功能等。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { FunctionType } funcs - 功能列表对应的数字掩码，可通过位运算组合多个功能。部分功能值当前暂不支持，具体参见
   *     [FunctionType]{@link usbManager.FunctionType}。
   * @returns { string } 转换后的字符串形式的功能列表。
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
   * 在设备模式下，设置当前的USB功能列表。使用Promise异步回调。调用成功后，设备的USB功能将切换为指定的功能列表。部分USB功能可能不被当前设备支持，设置前建议先查询设备支持的功能列表。开发者模式关闭时，如果没有设备接入，操
   * 作可能会失败，调用失败时抛出异常。功能切换会触发USB设备的重新枚举，已连接的主机可能需要重新识别设备。多个功能可通过位运算组合设置，但某些功能可能互斥或存在优先级，具体约束请参考设备规格。功能设置失败可能由于设备不支持、权限不足
   * 或系统限制，详见错误码说明。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { FunctionType } funcs - 功能列表对应的数字掩码，可通过位运算组合多个功能。部分功能可能不被当前设备支持，具体参见
   *     [FunctionType]{@link usbManager.FunctionType}。
   * @returns { Promise<void> } Promise对象。调用成功时无返回值，调用失败时抛出异常。
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
   * 在设备模式下，获取当前的USB功能列表的数字组合掩码。适用于需要检查当前USB功能状态、确认功能配置、或在功能切换前后进行状态对比的场景。开发者模式关闭时，如果没有设备接入，接口返回`undefined`，注意需要对接口返回值做判
   * 空处理。
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
   * 获取所有物理USB端口描述信息。适用于需要枚举USB端口、进行端口管理、设备连接诊断、或查询端口配置信息的场景。开发者模式关闭时，如果没有设备接入，接口返回`undefined`，注意需要对接口返回值做判空处理。
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
   * 获取指定的端口支持的模式列表的组合掩码。适用于系统应用需要查询USB-C端口能力判断是否支持特定模式（如UFP、DFP或DRP模式）的场景。开发者模式关闭时，如果没有设备接入，接口返回undefined，注意需要对接口返回值做判空
   * 处理。详细枚举值参见[PortModeType]{@link usbManager.PortModeType}。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } portId - USB端口号，可通过[getPortList]{@link usbManager.getPortList}获取端口列表后得到。
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
   * 设置指定端口当前的角色类型，包含电源角色、数据传输角色。使用Promise异步回调。调用成功后端口的电源角色和数据传输角色将切换为指定的角色。适用于系统应用需要动态切换USB端口角色的场景。开发者模式关闭时，如果没有设备接入，操作
   * 可能会失败，调用失败时抛出异常。角色约束详情参见[USBPortStatus]{@link usbManager.USBPortStatus}。
   *
   * **使用建议：**
   * - 建议先调用[getPortList](#getportlist12)获取端口列表，得到有效的portId
   * - 建议调用[getPortSupportModes](#getportsupportmodes12)查询端口支持的模式，确保设置的角色配置在支持范围内
   * - 如果设置的角色不被端口支持，调用会失败并返回错误码14400003
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } portId - 端口号，可通过[getPortList]{@link usbManager.getPortList}获取端口列表后得到。
   * @param { PowerRoleType } powerRole - 电源角色类型，可选值包括：NONE（无）、SOURCE（对外提供电源）、SINK（需要外部供电）。
   * @param { DataRoleType } dataRole - 数据传输角色类型，可选值包括：NONE（无）、HOST（主机角色）、DEVICE（设备角色）。
   * @returns { Promise<void> } Promise对象。调用成功时无返回值，调用失败时抛出异常。
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
   * 为应用添加访问USB配件权限。适用于系统应用需要为第三方应用授权访问USB配件的场景。usbManager.requestAccessoryRight会触发弹窗请求用户授权；addAccessoryRight不会触发弹窗，而是直接
   * 添加应用访问USB配件的权限。授权立即生效并持久化存储，设备重启后仍然有效。授权范围为指定的USB配件实例，多个应用可以同时获得同一配件的访问权限。与requestAccessoryRight相比，
   * addAccessoryRight不需要用户交互，适用于系统应用自动授权场景。
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } tokenId - 应用程序的唯一标识符，可通过
   *     [bundleManager.getBundleInfoForSelf]{@link @ohos.bundle.bundleManager:bundleManager.getBundleInfoForSelf}获取。
   * @param { USBAccessory } accessory - USB配件对象，包含配件的标识和属性信息。可通过[getAccessoryList]{@link usbManager.getAccessoryList}获取
   *     配件列表后获得。详细字段定义参见[USBAccessory]{@link usbManager.USBAccessory}接口。
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
   * 声明对USB设备某个接口的控制权。调用成功后应用获得该接口的独占控制权可以进行数据传输等操作，其他程序无法访问该接口。使用完后需调用
   * [releaseInterface]{@link usbManager.releaseInterface}释放该接口的控制权。
   * 
   * **使用场景**：在需要进行USB数据传输时，需要先声明接口控制权以独占访问该接口。例如，在USB存储设备读写、USB摄像头数据采集、USB串口通信等场景中，都需要先声明接口控制权。
   * 
   * > **说明：**
   * >
   * > 在USB编程中，claim interface是一个常见操作，指的是应用请求操作系统将某个USB接口从内核驱动中释放并交由用户空间程序控制。
   * 
   * > 下面用到的claim通信接口都表示claim interface操作。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线地址和设备地址，需要调用[connectDevice]{@link usbManager.connectDevice}获取。
   * @param { USBInterface } iface - 用于确定需要获取控制的接口对象，需要调用[getDevices]{@link usbManager.getDevices}获取设备信息并通过id确定唯一接口。
   * @param { boolean } [force] - 可选参数，是否强制获取。默认值为false，表示不强制获取；设置为true时，将强制从内核驱动或其他程序中释放该接口的控制权并交由用户空间程序控制。如果接口已被其他程序占
   *     用，使用true可强制获取但可能导致该程序功能异常；如果接口未被占用，建议使用false以避免不必要的强制操作。用户按需选择。
   * @returns { int } claim通信接口成功返回0；claim通信接口失败返回其他错误码如下：
   *     <br>- 88080389：服务未启动，可能原因：1.无设备插入；2.服务异常退出。
   *     <br>- 88080486：服务初始化中，请稍后重试。
   *     <br>- 88080488：无设备访问权限，请先调用[requestRight]{@link usbManager.requestRight}接口申请授权。
   *     <br>- -1：驱动异常。可能原因：1、设备连接不稳定或已断开；2、USB驱动加载失败；3、内核USB模块异常。
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
   * > 在调用该接口前需要通过[usbManager.claimInterface]{@link usbManager.claimInterface} claim通信接口。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线地址和设备地址，需要调用[connectDevice]{@link usbManager.connectDevice}获取。
   * @param { USBInterface } iface - 用于确定需要释放控制的接口对象，需要调用[getDevices]{@link usbManager.getDevices}获取设备信息并通过id确定唯一接口。
   * @returns { int } 释放接口成功返回0；释放接口失败返回其他错误码如下：
   *     <br>- 88080389：服务未启动，可能原因：1.无设备插入；2.服务异常退出。
   *     <br>- 88080486：服务初始化中，请稍后重试。
   *     <br>- 88080488：无设备访问权限，请先调用[requestRight]{@link usbManager.requestRight}接口申请授权。
   *     <br>- -1：驱动异常。可能原因：1、设备连接不稳定或已断开；2、USB驱动加载失败；3、内核USB模块异常。
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
   * 设置设备配置。适用于多功能USB设备需要切换工作模式的场景，如打印机+扫描仪组合设备切换为打印模式或扫描模式、设备从低功耗配置切换到高功耗配置以启用全部功能等。调用成功后设备的配置将被切换为指定的配置，后续的数据传输和设备操作将基
   * 于新配置进行。
   * 
   * > **说明：**
   * >
   * > 在调用该接口前需要调用[usbManager.claimInterface]{@link usbManager.claimInterface} claim通信接口。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线地址和设备地址，需要调用[connectDevice]{@link usbManager.connectDevice}获取。
   * @param { USBConfiguration } config - 用于确定需要设置的配置，需要调用[getDevices]{@link usbManager.getDevices}获取设备信息并通过id确定唯一配置。
   * @returns { int } 返回设置设备配置操作的结果。设置设备配置成功返回0；设置设备配置失败返回其他错误码如下：
   *     <br>- 88080389：服务未启动，可能原因：1.无设备插入；2.服务异常退出。
   *     <br>- 88080486：服务初始化中，请稍后重试。
   *     <br>- 88080488：无设备访问权限，请先调用[requestRight]{@link usbManager.requestRight}接口申请授权。
   *     <br>- -1：驱动异常。可能原因：1、设备连接不稳定或已断开；2、USB驱动加载失败；3、内核USB模块异常。
   *     <br>- -17：I/O失败。可能原因：1.设备通信异常导致I/O操作失败；2.数据传输过程中发生中断。
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
   * 设置设备接口。调用成功后接口将被切换到指定的备用设置，端点配置将随之改变以匹配传输类型要求。
   * 
   * > **说明：**
   * >
   * > 一个USB接口可能存在多重选择模式，支持动态切换。使用的场景：数据传输时，通过该接口可重新设置端点，使端点与传输类型匹配。
   * >
   * > 在调用该接口前需要通过[usbManager.claimInterface]{@link usbManager.claimInterface} claim通信接口。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线地址和设备地址，需要调用[connectDevice]{@link usbManager.connectDevice}获取。
   * @param { USBInterface } iface - 用于确定需要设置的接口，需要调用[getDevices]{@link usbManager.getDevices}获取设备信息，通过接口的id和
   *     alternateSetting共同确定唯一接口，其中id为接口的唯一标识符，alternateSetting用于在同一接口的多个可选模式间切换，为0时表示不支持可选模式。
   * @returns { int } 返回设置设备接口操作的结果。设置设备接口成功返回0；设置设备接口失败返回其他错误码如下：
   *     <br>- 88080389：服务未启动，可能原因：1.无设备插入；2.服务异常退出。
   *     <br>- 88080486：服务初始化中，请稍后重试。
   *     <br>- 88080488：无设备访问权限，请先调用[requestRight]{@link usbManager.requestRight}接口申请授权。
   *     <br>- -1：驱动异常。可能原因：1、设备连接不稳定或已断开；2、USB驱动加载失败；3、内核USB模块异常。
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
   * @param { USBDevicePipe } pipe - 用于确定总线地址和设备地址，需要调用[connectDevice]{@link usbManager.connectDevice}获取。
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
   * 获取文件描述符。如果USB服务异常，可能返回错误码，注意需要对接口返回值做判空或错误码检查处理。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线地址和设备地址，需要调用[connectDevice]{@link usbManager.connectDevice}获取。
   * @returns { int } 返回设备对应的文件描述符，失败返回其他错误码如下：
   *     <br>- 88080486：服务初始化中，请稍后重试。
   *     <br>- 88080488：无设备访问权限，请先调用[requestRight]{@link usbManager.requestRight}接口申请授权。
   *     <br>- -1：驱动异常。可能原因：1、设备连接不稳定或已断开；2、USB驱动加载失败；3、内核USB模块异常。
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
   * @param { USBDevicePipe } pipe - USB设备连接通道对象，用于确定设备，需要调用[connectDevice]{@link usbManager.connectDevice}获取。
   * @param { USBControlParams } controlparam - 控制传输参数，包含request、target、reqType、value、index、data等字段，参数传参类型请参考USB协议规范，根据具
   *     体设备和控制请求类型设置。
   * @param { number } [timeout] - 超时时间（单位：毫秒），可选参数，指定时间内等待控制传输完成，若在指定时间内传输完成则正常返回，否则返回超时；默认值为0，表示无限等待直到传输完成。
   *     传入负数时抛出参数错误异常。用户按需选择。
   * @returns { Promise<number> } Promise对象，获取传输或接收到的数据块大小。失败返回其他错误码如下：
   *     <br>- -1：驱动异常。可能原因：1、设备连接不稳定或已断开；2、USB驱动加载失败；3、内核USB模块异常。
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
   * 控制传输。调用成功后完成控制命令的传输，返回传输或接收到的数据块大小。适用于需要与USB设备进行控制命令交互的场景，如获取设备描述符、设置设备地址、发送厂商自定义命令、配置HID设备特性等。使用Promise异步回调。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线地址和设备地址，需要调用[connectDevice]{@link usbManager.connectDevice}获取。
   * @param { USBDeviceRequestParams } requestparam - 控制传输参数，包含bmRequestType、bRequest、wValue、wIndex、wLength、data等字段，参数传参
   *     类型请参考USB协议规范，根据具体设备和控制请求类型设置。
   * @param { int } [timeout] - 超时时间（单位：毫秒），可选参数，指定时间内等待控制传输完成，若在指定时间内传输完成则正常返回，否则返回超时；默认值为0，表示无限等待直到传输完成。
   *     传入负数时抛出参数错误异常。用户按需选择。
   * @returns { Promise<int> } Promise对象，获取传输或接收到的数据块大小。失败返回其他错误码如下：
   *     <br>- -1：驱动异常。可能原因：1、设备连接不稳定或已断开；2、USB驱动加载失败；3、内核USB模块异常。
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
   * 批量传输。调用成功后完成批量数据传输，返回实际传输或接收到的数据块大小。使用Promise异步回调。与usbSubmitTransfer相比，
   * bulkTransfer适合简单的批量传输场景，通过独立参数直接传递数据和端点，使用Promise异步返回结果；
   * usbSubmitTransfer适合需要更灵活控制的场景，通过UsbDataTransferParams对象封装参数，支持异步callback回调，
   * 并可通过usbCancelTransfer取消传输请求。
   * 
   * > **说明：** 
   * >
   * > 单次批量传输的传输数据总量（包括pipe、endpoint、buffer、timeout）请控制在200KB以下，数据总量过大会导致传输失败返回-1。
   * >
   * > 在调用接口前需要通过[usbManager.claimInterface]{@link usbManager.claimInterface} claim通信接口。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线地址和设备地址，需要调用[connectDevice]{@link usbManager.connectDevice}获取。
   * @param { USBEndpoint } endpoint - 用于确定传输的端点，需要调用[getDevices]{@link usbManager.getDevices}获取设备信息列表。通过endpoint的
   *     address确定端点地址，direction用于确定端点的传输方向（0表示输出，128表示输入），interfaceId用于确定所属接口，当前其他属性不做处理。
   * @param { Uint8Array } buffer - 用于写入或读取数据的缓冲区，数组长度即为缓冲区大小。用于批量传输时写入或读取数据。
   * @param { int } [timeout] - 超时时间（单位：毫秒），可选参数，指定时间内等待批量传输完成，若在指定时间内传输完成则正常返回，否则返回超时；默认值为0，表示无限等待直到传输完成。
   *     传入负数时抛出参数错误异常。用户按需选择。
   * @returns { Promise<int> } Promise对象，获取传输或接收到的数据块大小。失败返回其他错误码如下：
   *     <br>- -1：驱动异常。可能原因：1、设备连接不稳定或已断开；2、USB驱动加载失败；3、内核USB模块异常。
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
   * 重置USB设备。适用于USB设备出现通信异常需要恢复的场景，如设备固件升级后需要重新初始化、设备状态异常需要恢复、调试过程中需要重置设备状态等。调用成功后设备将被重置为初始状态，此前设置的配置和接口设置将被清除，设备需要重新初始
   * 化。
   * 
   * > **说明：**
   * >
   * > 本接口调用后会重置此前设置的配置和接口设置，请在调用之前确认相关业务已结束。
   * 
   * 1. 调用[usbManager.getDevices]{@link usbManager.getDevices}获取设备列表。
   * 2. 调用[usbManager.requestRight]{@link usbManager.requestRight}获取设备请求权限。
   * 3. 调用[usbManager.connectDevice]{@link usbManager.connectDevice}得到devicepipe作为参数。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线地址和设备地址，需要调用[connectDevice]{@link usbManager.connectDevice}获取。
   * @returns { boolean } true表示重置设备成功，false表示重置设备失败。
   * @throws { BusinessError } 801 - Capability not supported.
   * @throws { BusinessError } 14400001 - Access right denied. Call requestRight to get the USBDevicePipe access right first.
   * @throws { BusinessError } 14400004 -Service exception. Possible causes: 1. No accessory is plugged in.
   * @throws { BusinessError } 14400008 - No such device(it may have been disconnected).
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
   * 关闭设备连接通道。
   * 
   * 1. 调用[usbManager.getDevices]{@link usbManager.getDevices}获取设备列表；
   * 2. 调用[usbManager.requestRight]{@link usbManager.requestRight}获取设备请求权限；
   * 3. 调用[usbManager.connectDevice]{@link usbManager.connectDevice}得到devicepipe作为参数。
   *
   * @param { USBDevicePipe } pipe - 用于确定总线地址和设备地址，需要调用[connectDevice]{@link usbManager.connectDevice}获取。
   * @returns { int } 关闭设备连接通道成功返回0；关闭设备连接通道失败返回其他错误码如下：
   *     <br>- 22：服务异常。可能原因：1.USB服务未正常运行；2.设备连接通道状态异常。
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
   * 检查应用是否有权访问USB配件。
   * 
   * 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList}获取配件列表，得到
   * [USBAccessory]{@link usbManager.USBAccessory}作为参数。
   *
   * @param { USBAccessory } accessory - USB配件，需要通过[getAccessoryList]{@link usbManager.getAccessoryList}获取。
   * @returns { boolean } true表示应用有权访问USB配件，false表示应用无权访问USB配件。
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
   * 为指定应用申请访问USB配件的访问权限。使用Promise异步回调。
   * 
   * 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList}获取配件列表，得到
   * [USBAccessory]{@link usbManager.USBAccessory}作为参数。
   *
   * @param { USBAccessory } accessory - USB配件，需要通过[getAccessoryList]{@link usbManager.getAccessoryList}获取。
   * @returns { Promise<boolean> } Promise对象，返回应用访问配件权限的申请结果。返回true表示权限申请成功；返回false表示权限申请失败。
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
   * 取消当前应用访问USB配件的权限。与requestAccessoryRight()方法配合使用，用于取消此前通过requestAccessoryRight()申请的配件访问权限。
   * 
   * 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList}获取配件列表，得到
   * [USBAccessory]{@link usbManager.USBAccessory}作为参数。
   *
   * @param { USBAccessory } accessory - USB配件，需要通过[getAccessoryList]{@link usbManager.getAccessoryList}获取。
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
   * @returns { Array<Readonly<USBAccessory>> } 只读的USB配件列表。包含所有可用的USB配件信息。
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
   * 获取配件句柄并打开配件文件描述符。之后可以通过CoreFileKit提供的read/write接口和配件进行通信。使用完后需要调用[closeAccessory]{@link usbManager.closeAccessory}接
   * 口关闭文件描述符。
   * 
   * 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList}获取配件列表，得到
   * [USBAccessory]{@link usbManager.USBAccessory}作为参数。调用前需先调用
   * [usbManager.requestAccessoryRight]{@link usbManager.requestAccessoryRight}请求访问配件权限，权限申请成功（返回true）后方可调用本接口打开配件。
   *
   * @param { USBAccessory } accessory - USB配件，需要通过[getAccessoryList]{@link usbManager.getAccessoryList}获取。
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
   * 
   * 需要调用[usbManager.getAccessoryList]{@link usbManager.getAccessoryList}获取配件列表，然后调用
   * [usbManager.requestAccessoryRight]{@link usbManager.requestAccessoryRight}请求访问配件权限，权限申请成功后调用
   * [usbManager.openAccessory]{@link usbManager.openAccessory}获取配件句柄，得到
   * [USBAccessoryHandle]{@link usbManager.USBAccessoryHandle}作为参数。
   *
   * @param { USBAccessoryHandle } accessoryHandle - USB配件句柄。需要通过[openAccessory]{@link usbManager.openAccessory}获取。
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
   * USB端点，用于主机与设备之间数据传输的通信端点。通过[USBInterface]{@link usbManager.USBInterface}获取。
   * 
   * > **说明：**
   * >
   * > 主机控制器按照Endpoint类型调度，不同类型的端点采用不同的调度策略：批量端点(bulk)采用带宽共享调度适合大量数据非实时传输；中断端点(interrupt)采用固定轮询调度适合小数据量实时传输；实时端点(
   * > isochronous)采用带宽预留调度，适合音视频等实时数据流。
   * >
   * > 协议层打包时依赖type决定传输特性，包括数据包格式、错误处理机制、超时策略等。
   *
   * ![USBEndpoint](docroot://reference/figures/USBEndpoint.png)
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
     * 端点属性，表示端点的传输特性，包括传输类型（批量、中断、实时）和同步类型等。取值遵循USB端点描述符规范。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    attributes: int;

    /**
     * 端点间隔。中断端点和实时端点为时间间隔（单位：毫秒）；批量端点不使用此字段。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    interval: int;

    /**
     * 端点最大数据包大小，（单位：字节）。
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
     * 端点地址。
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
     * 接口的替代设置索引号，用于在同一个接口的多个可选描述符中进行切换选择。0表示默认设置，其他值表示特定的替代设置。
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
     * 配置的属性，取值遵循USB配置描述符规范，用于表示配置的供电方式、远程唤醒能力等特性。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    attributes: int;

    /**
     * 最大功耗，（单位：毫安）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    maxPower: int;

    /**
     * 配置的名称，可以为空字符串。
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
     * 配置支持的接口列表。
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
     * 序列号。三方应用无法获取此字段的设备序列号信息（该字段对三方应用不可用），如需获取序列号需在申请设备访问权限后自行发起控制传输。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    serial: string;

    /**
     * 设备名称。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * 设备厂商名称。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    manufacturerName: string;

    /**
     * 设备产品名称。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    productName: string;

    /**
     * 设备版本号。
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
     * 设备类型代码。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    clazz: int;

    /**
     * 设备子类型代码。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    subClass: int;

    /**
     * 设备协议代码。
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
   * USB设备连接通道，用于确定总线地址和设备地址。
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
   * 电源角色类型。
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum PowerRoleType {
    /**
     * 无。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 对外提供电源。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    SOURCE = 1,

    /**
     * 需要外部供电。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    SINK = 2
  }

  /**
   * 数据角色类型。
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum DataRoleType {
    /**
     * 无。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 主设备角色。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    HOST = 1,

    /**
     * 从设备角色。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DEVICE = 2
  }

  /**
   * USB端口模式类型。
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  export enum PortModeType {
    /**
     * 无。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * 数据上行，需要外部供电。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    UFP = 1,

    /**
     * 数据下行，对外提供电源。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DFP = 2,

    /**
     * 既可以做DFP（HOST），也可以做UFP（DEVICE），当前不支持。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    DRP = 3,

    /**
     * 当前不支持。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NUM_MODES = 4
  }

  /**
   * USB设备端口角色信息。currentMode表示端口的当前USB模式，其值应在USBPort的supportedModes范围内。currentPowerRole表示当前电源角色，currentDataRole表示当前数据传输角
   * 色。这些字段之间存在对应关系：在DFP模式下，dataRole通常为HOST、powerRole通常为SOURCE；在UFP模式下，dataRole通常为DEVICE、powerRole通常为SINK。端口状态变更受硬件和系统约
   * 束，某些模式或角色组合可能不被支持。
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBPortStatus {
    /**
     * 当前的USB模式，取值参见[PortModeType]{@link usbManager.PortModeType}。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentMode: int;

    /**
     * 当前设备电源角色，取值参见[PowerRoleType]{@link usbManager.PowerRoleType}。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentPowerRole: int;

    /**
     * 当前设备数据传输角色，取值参见[DataRoleType]{@link usbManager.DataRoleType}。
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
     * USB端口所支持的模式的数字组合掩码。status.currentMode应在此范围内。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    supportedModes: PortModeType;

    /**
     * USB端口角色信息。其currentMode应在supportedModes范围内。
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
     * 请求控制类型，用于指定控制传输的方向和类型，取值需遵循USB协议规范，常见取值示例：0x00（标准请求，主机向设备）、0x20（类请求，主机向设备）、0x40（厂商请求，主机向设备）、0x80（标准请求，设备向主机）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    bmRequestType: int;

    /**
     * 请求类型，用于指定具体的USB控制请求命令（如获取描述符，设置地址等）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    bRequest: int;

    /**
     * 请求参数，用于向USB设备传递控制请求所需的参数内容。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wValue: int;

    /**
     * 请求参数wValue对应的索引值，用于指定控制请求的目标接口或端点。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wIndex: int;

    /**
     * 请求数据的长度，用于指定控制传输中期望接收或发送的数据字节数。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wLength: int;

    /**
     * 用于写入或读取的缓冲区，数组长度对应wLength参数指定的数据字节数。用于控制传输时发送或接收数据。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    data: Uint8Array;
  }

  /**
   * 请求目标类型。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  export enum USBRequestTargetType {
    /**
     * 将控制请求的目标设置为USB设备本身，用于对整个设备进行控制操作（如设置设备地址、获取设备描述符等）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_DEVICE = 0,

    /**
     * 将控制请求的目标设置为USB设备的某个接口，用于对接口进行控制操作（如设置接口特性、获取接口描述符等）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_INTERFACE = 1,

    /**
     * 将控制请求的目标设置为USB设备的某个端点，用于对端点进行控制操作（如清除端点停止状态、获取端点状态等）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_ENDPOINT = 2,

    /**
     * 将控制请求的目标设置为其他单元，用于对非标设备、接口或端点的单元进行控制操作。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_OTHER = 3
  }

  /**
   * 控制请求类型，用于指定具体的USB控制请求命令（如获取描述符、设置地址等）。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  export enum USBControlRequestType {
    /**
     * 标准请求类型，用于发送USB协议定义的标准控制请求（如设备描述符、设置地址、设置配置等）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_STANDARD = 0,

    /**
     * 类请求类型，用于发送特定设备类定义的控制请求（如HID类、Mass Storage类等特定请求）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_CLASS = 1,

    /**
     * 厂商请求类型，用于发送厂商自定义的控制请求，具体请求内容由设备厂商定义。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_VENDOR = 2
  }

  /**
   * 请求方向。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  export enum USBRequestDirection {
    /**
     * 写数据，主机向设备。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_DIR_TO_DEVICE = 0,

    /**
     * 读数据，设备向主机。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_DIR_FROM_DEVICE = 0x80
  }

  /**
   * USB设备侧功能。
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
     * acm（Abstract Control Model，抽象控制模型），串口通信功能，用于模拟串口设备。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ACM = 1,

    /**
     * ecm（Ethernet Control Model，以太网控制模型），以太网控制功能，用于网络共享。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ECM = 2,

    /**
     * hdc（HarmonyOS Device Connector，HarmonyOS设备连接器）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    HDC = 4,

    /**
     * mtp（Media Transfer Protocol，媒体传输协议）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    MTP = 8,

    /**
     * ptp（Picture Transfer Protocol，图片传输协议）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    PTP = 16,

    /**
     * rndis（Remote Network Driver Interface Specification，远程网络驱动接口规范），用于网络共享（暂不支持）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    RNDIS = 32,

    /**
     * midi（Musical Instrument Digital Interface，乐器数字接口），用于MIDI设备通信（暂不支持）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    MIDI = 64,

    /**
     * 音频源功能，用于音频数据传输（暂不支持）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE = 128,

    /**
     * ncm（Network Control Model，网络控制模型），用于高速网络共享（暂不支持）。
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
     * 配件的描述信息，由厂商提供，用于说明配件的功能、用途或特性。
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
   * USB配件句柄，包含配件文件描述符，用于通过CoreFileKit提供的read/write接口和配件进行通信。
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
   * USB传输标志。
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
     * 完成回调后自动释放传输资源。
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
   * 数据处理完成后通过回调返回的状态码。
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
   * USB传输类型。
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
    TRANSFER_TYPE_INTERRUPT = 0x3
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
     * 读写操作的期望长度值，（单位：字节）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    length: int;

    /**
     * 读写操作的实际长度值，（单位：字节）。
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
   * USB数据传输参数对象，包含USB数据传输所需的所有参数，用于usbSubmitTransfer和usbCancelTransfer接口发起传输请求。
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  interface UsbDataTransferParams {
    /**
     * 用于确定总线地址和设备地址，需要调用[connectDevice]{@link usbManager.connectDevice}获取。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    devPipe: USBDevicePipe;

    /**
     * USB传输标志，用于控制传输行为。可选值包括：0（将短帧报告为错误）、1（自动释放传输缓冲区）、2（完成回调后自动释放传输资源）、3（传输增加一个额外的数据包）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    flags: UsbTransferFlags;

    /**
     * 端点地址，取值范围为[1, 255]的正整数。需要调用[getDevices]{@link usbManager.getDevices}获取设备信息，通过endpoint的address属性确定端点信息，通过direction
     * 属性确定端点方向。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    endpoint: int;

    /**
     * 传输类型，指定USB传输的方式。可选值包括：0x1（实时传输，适合音视频等实时数据流）、0x2（批量传输，适合大量数据非实时传输）、0x3（中断传输，适合小数据量实时传输）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    type: UsbEndpointTransferType;

    /**
     * 超时时间（单位：毫秒），指定时间内等待传输完成，若在指定时间内传输完成则正常返回否则返回超时。设置为0时无限等待直到传输完成。传入负数时抛出参数错误异常。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    timeout: int;

    /**
     * 数据缓冲区的长度，取值范围为[0, INT_MAX]的非负数（期望长度），（单位：字节）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    length: int;

    /**
     * 传输完成时的回调函数，签名：(err: Error, data: SubmitTransferCallback) => void。err为错误对象（成功时为null），data包含传输状态、实际长度等信息。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    callback: AsyncCallback<SubmitTransferCallback>;

    /**
     * 用户上下文数据，用于在回调函数中传递自定义的上下文信息。大小和格式由用户定义，在传输请求中指定，回调中原样返回。
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
     * 实时传输时数据包的数量，仅用于具有实时传输端点的I/O。取值范围为[0, INT_MAX]的非负数，（单位：个）。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    isoPacketCount: int;
  }

  /**
   * 提交异步传输请求，调用后立即返回，实际读写操作的结果以回调的方式返回。可通过调用[usbCancelTransfer]{@link usbManager.usbCancelTransfer}接口取消异步传输请求。
   * 
   * > **说明：**
   * >
   * > 本接口为异步接口，调用后立刻返回，实际读写操作的结果以回调的方式返回。
   * >
   * > 在调用该接口前需要通过[usbManager.claimInterface]{@link usbManager.claimInterface} claim通信接口。
   *
   * @param { UsbDataTransferParams } transfer - 作为通用USB数据传输接口，客户端需要填充这个对象中的参数，用以发起传输请求。在调用该接口前需要通过
   *     [usbManager.claimInterface]{@link usbManager.claimInterface} claim通信接口。
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
   * 取消异步传输请求。适用于需要主动终止未完成USB数据传输的场景，如用户手动取消长时间数据传输、传输超时后的错误恢复、应用切换时中止当前传输等。
   * 
   * > **说明：**
   * >
   * > 主动取消尚未完成的USB数据传输请求（如usbSubmitTransfer提交的传输）。
   * 
   * > 在调用该接口前需要通过[usbManager.claimInterface]{@link usbManager.claimInterface} claim通信接口。
   *
   * @param { UsbDataTransferParams } transfer - 被取消传输的参数，该参数与
   *     [usbManager.usbSubmitTransfer]{@link usbManager.usbSubmitTransfer}接口的transfer参数相同。在调用该接口前需要通过
   *     [usbManager.claimInterface]{@link usbManager.claimInterface} claim通信接口。
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
   * 设置指定端口当前的角色模式，包含电源角色、数据传输角色。使用Promise异步回调。调用成功后端口角色将切换为指定的角色。适用于系统应用需要动态切换USB端口角色的场景。开发者模式关闭时，如果没有设备接入，操作可能会失败，调用失败
   * 时抛出异常。
   *
   * @param { number } portId - USB端口号，取值范围为非负整数，可通过[getPortList]{@link usbManager.getPortList}获取端口列表后得到。
   * @param { PowerRoleType } powerRole - 电源角色类型，可选值包括：NONE（无）、SOURCE（对外提供电源）、SINK（需要外部供电）。
   * @param { DataRoleType } dataRole - 数据传输角色类型，可选值包括：NONE（无）、HOST（主机角色）、DEVICE（设备角色）。
   * @returns { Promise<void> } Promise对象。调用成功时无返回值，调用失败时抛出异常。
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
   * USB异步传输回调。
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
     * 读写操作的实际长度值，（单位：字节）。
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
     * 请求参数value对应的索引值，用于指定控制请求的目标接口或端点。
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
     * 请求参数，用于向USB设备传递控制请求所需的参数内容。
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    value: number;

    /**
     * 请求类型，用于指定具体的USB控制请求命令。
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

export default usbManager;