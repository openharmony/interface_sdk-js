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
 * The **usbManager** module provides USB device management functions, including USB device list query, bulk data
 * transfer, control transfer, and permission control on the host side as well as USB interface management,
 * and function switch and query on the device side.
 *
 * > **NOTE**
 * >
 * > Perform the following steps when using the APIs with the [usbManager.USBDevicePipe]{@link usbManager.USBDevicePipe} parameter:
 * > **Before use**:
 * > 1. Call [usbManager.getDevices]{@link usbManager.getDevices()} to obtain the USB device list.
 * > 2. Call [usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)} to request the temporary device access permission.
 * > 3. Call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain [usbManager.USBDevicePipe]{@link usbManager.USBDevicePipe} as an input parameter.
 * > **After use**:
 * > Call [usbManager.closePipe]{@link usbManager.closePipe(USBDevicePipe: pipe)} to close a USB device pipe.
 * >
 *
 * @syscap SystemCapability.USB.USBManager
 * @since 9 dynamic
 * @since 23 static
 */
declare namespace usbManager {
  /**
   * Obtains the list of USB devices connected to the host.
   *
   * > **NOTE**
   * >
   * > Third-party applications are not allowed to obtain the device serial number from the **serial** field unless they
   * > request permission using [usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)}
   * > and then initiate a control transfer to obtain it.
   *
   * @returns { Array<Readonly<USBDevice>> } USB device list.
   * @throws { BusinessError } 801 - Capability not supported. [since 18]
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  function getDevices(): Array<Readonly<USBDevice>>;

  /**
   * Connects to the USB device based on the device information returned by **getDevices()**. If the USB service is
   * abnormal, **undefined** may be returned. Check whether the return value of the API is empty.
   *
   * 1. Call [usbManager.getDevices]{@link usbManager.getDevices()} to obtain the USB device list.
   * 2. Call [usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)} to request the device access permission.
   *
   * @param { USBDevice } device - USB device. The **busNum** and **devAddress** parameters obtained by
   *     [usbManager.getDevices]{@link usbManager.getDevices()} are used to determine a USB device. Other parameters are passed transparently.
   * @returns { Readonly<USBDevicePipe> } USB device pipe for data transfer.
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
   * Checks whether the application has the permission to access the device.
   * Checks whether the user, for example, the application or system, has the device access permissions. The value **
   * true** is returned if the user has the device access permissions; the value **false** is returned otherwise.
   *
   * @param { string } deviceName - Device name, which is name of USBDevice, obtained from the device list returned by [usbManager.getDevices]{@link usbManager.getDevices()}.
   * @returns { boolean } Returns **true** if the application has the permission to access the device; returns **false**
   *     otherwise.
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
   * Requests the temporary device access permission for the application. This API uses a promise to return the result.
   * System applications are granted the device access permission by default, and you do not need to apply for the
   * permission separately.
   *
   * @param { string } deviceName - Device name, which is name of USBDevice, obtained from the device list returned by [usbManager.getDevices]{@link usbManager.getDevices()}.
   * @returns { Promise<boolean> } Promise used to return the result. The value **true** indicates that the temporary device
   *     access permissions are granted; and the value **false** indicates the opposite.
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
   * Removes the device access permission for the application. System applications are granted the device access
   * permission by default, and calling this API will not revoke the permission.
   *
   * @param { string } deviceName - Device name, which is name of USBDevice, obtained from the device list returned by [usbManager.getDevices]{@link usbManager.getDevices()}.
   * @returns { boolean } Permission removal result. The value **true** indicates that the access permission is removed
   *     successfully; and the value **false** indicates the opposite.
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
   * Converts the USB function list in the string format to a numeric mask in Device mode.
   *
   * @param { string } funcs - Function list in string format.
   * @returns { number } Function list in numeric mask format.
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
   * Converts the USB function list in the numeric mask format to a string in Device mode.
   *
   * @param { FunctionType } funcs - USB function list in numeric mask format.
   * @returns { string } Function list in string format.
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
   * Sets the current USB function list in Device mode. This API uses a promise to return the result.
   *
   * @param { FunctionType } funcs - USB function list in numeric mask format.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Obtains the numeric mask combination for the USB function list in Device mode. When the developer mode is disabled,
   *  **undefined** may be returned if no device is connected. Check whether the return value of the API is empty.
   *
   * @returns { FunctionType } Numeric mask combination for the USB function list.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.getDeviceFunctions()
   */
  function getCurrentFunctions(): FunctionType;

  /**
   * Obtains the list of all physical USB ports. When the developer mode is disabled, **undefined** may be returned if
   * no device is connected. Check whether the return value of the API is empty.
   *
   * @returns { Array<USBPort> } List of physical USB ports.
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamiconly
   * @deprecated since 12
   * @useinstead usbManager.getPortList()
   */
  function getPorts(): Array<USBPort>;

  /**
   * Obtains the mask combination for the supported mode list of a given USB port.
   *
   * @param { number } portId - Port number.
   * @returns { PortModeType } Mask combination for the supported mode list.
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
   * Adds the device access permission for the application. System applications are granted the device access permission
   *  by default, and calling this API will not revoke the permission.
   * [usbManager.requestRight]{(@link usbManager.requestRight)} triggers a dialog box to request for user authorization, whereas addDeviceAccessRight adds
   * the access permission directly without displaying a dialog box.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { string } tokenId - Token ID of the software package.
   * @param { string } deviceName - Device name.
   * @returns { boolean } Permission addition result. The value **true** indicates that the access permission is added
   *     successfully; and the value **false** indicates the opposite.
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
   * Converts the USB function list in the string format to a numeric mask in Device mode.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { string } funcs - Function list in string format.
   * @returns { int } Function list in numeric mask format
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
   * Converts the USB function list in the numeric mask format to a string in Device mode.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { FunctionType } funcs - USB function list in numeric mask format.
   * @returns { string } Function list in string format.
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
   * Sets the current USB function list in Device mode. This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { FunctionType } funcs - USB function list in numeric mask format.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Obtains the numeric mask combination for the USB function list in Device mode. When the developer mode is disabled,
   *  **undefined** may be returned if no device is connected. Check whether the return value of the API is empty.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @returns { FunctionType } Numeric mask combination for the USB function list.
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
   * Obtains the list of all physical USB ports. When the developer mode is disabled, **undefined** may be returned if
   * no device is connected. Check whether the return value of the API is empty.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @returns { Array<USBPort> } List of physical USB ports.
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
   * Obtains the mask combination for the supported mode list of a given USB port.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } portId - Port number.
   * @returns { PortModeType } Mask combination for the supported mode list.
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
   * Sets the role types supported by a specified port, which can be **powerRole** (for charging) and **dataRole** (for
   * data transfer). This API uses a promise to return the result.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } portId - Port number.
   * @param { PowerRoleType } powerRole - Role for charging.
   * @param { DataRoleType } dataRole - Role for data transfer.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Adds the permission to applications for accessing USB accessories.
   * [usbManager.requestAccessoryRight]{(@link usbManager.requestAccessoryRight)} triggers a dialog box to request user authorization. **addAccessoryRight** does
   * not trigger a dialog box but directly adds the device access permission for the application.
   *
   * @permission ohos.permission.MANAGE_USB_CONFIG
   * @param { int } tokenId - Token ID of the application.
   * @param { USBAccessory } accessory - USB accessory.
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
   * Claims a USB device interface.
   *
   * > **NOTE**
   * >
   * > In USB programming, **claimInterface** is a common operation, which indicates that an application requests the
   * > operating system to release a USB interface from the kernel driver and hand over the USB interface to a user
   * > space program for control.<br>
   * > > All the **claim** communication interfaces used below refer to the claim interface operations.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus number and device address. You need
   *     to call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain its value.
   * @param { USBInterface } iface - USB interface. You can use [usbManager.getDevices]{@link usbManager.getDevices()}
   *     to obtain device information and identify the USB interface based on the ID.
   * @param { boolean } [force] - Whether to forcibly claim a USB interface. The default value is **false**, which means not
   *     to forcibly claim a USB interface. You can set the value as required.
   * @returns { int } Returns **0** if the **claim** interface is called successfully; returns an error code otherwise. The
   *     error codes are as follows:
   *
   *     - 88080389: The service is not started. Possible causes: 1. No device is inserted. 2. The service exits abnormally.
   *
   *     - 88080486: The service is being initialized. Try again later.
   *
   *     - 88080488: No device access permission. Call the [usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)} API to request authorization.
   *
   *     - -1: The driver is abnormal.
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
   * Releases the claimed communication interface.
   *
   * > **NOTE**
   * >
   * > Before calling this API, call the
   * > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}
   * >  API to claim a communication interface.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus number and device address. You need
   *     to call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain its value.
   * @param { USBInterface } iface - USB interface. You can use [usbManager.getDevices]{@link usbManager.getDevices()}
   *     to obtain device information and identify the USB interface based on the ID.
   * @returns { int } Returns **0** if the USB interface is successfully released; returns an error code otherwise. The error
   *     codes are as follows:
   *
   *     - 88080389: The service is not started. Possible causes: 1. No device is inserted. 2. The service exits abnormally.
   *
   *     - 88080486: The service is being initialized. Try again later.
   *
   *     - 88080488: No device access permission. Call the [usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)} API to request authorization.
   *
   *     - -1: The driver is abnormal.
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
   * Sets the device configuration.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus number and device address. You need
   *     to call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain its value.
   * @param { USBConfiguration } config - USB configuration. You can use [usbManager.getDevices]{@link usbManager.getDevices()}
   *     to obtain device information and identify the USB configuration based on the ID.
   * @returns { int } Returns **0** if the USB configuration is successfully set; returns an error code otherwise. The error
   *     codes are as follows:
   *
   *     - 88080389: The service is not started. Possible causes: 1. No device is inserted. 2. The service exits abnormally.
   *
   *     - 88080486: The service is being initialized. Try again later.
   *
   *     - 88080488: No device access permission. Call the [usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)} API to request authorization.
   *
   *     - -1: The driver is abnormal.
   *
   *     - -17: I/O failure.
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
   * Sets a USB interface.
   *
   * > **NOTE**
   * >
   * > A USB interface may have multiple selection modes and supports dynamic switching. It is used to reset the
   * > endpoint to match the transmission type during data transmission.
   * >
   * > Before calling this API, call the
   * > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}
   * >  API to claim a communication interface.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus number and device address. You need
   *     to call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain its value.
   * @param { USBInterface } iface - USB interface. You can use [usbManager.getDevices]{@link usbManager.getDevices()}
   *     to obtain device information and identify the USB interface based on its **id** and **alternateSetting**.
   * @returns { int } Returns **0** if the USB interface is successfully set; returns an error code otherwise. The error
   *     codes are as follows:
   *
   *     - 88080389: The service is not started. Possible causes: 1. No device is inserted. 2. The service exits abnormally.
   *
   *     - 88080486: The service is being initialized. Try again later.
   *
   *     - 88080488: No device access permission. Call the [usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)} API to request authorization.
   *
   *     - -1: The driver is abnormal.
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
   * Obtains a raw USB descriptor. If the USB service is abnormal, **undefined** may be returned. Check whether the
   * return value of the API is empty.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus number and device address. You need
   *     to call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain its value.
   * @returns { Uint8Array } Returns a raw USB descriptor if the operation is successful; returns **undefined** otherwise.
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
   * Obtains a file descriptor.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus number and device address. You need
   *     to call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain its value.
   * @returns { int } Returns a file descriptor of the USB device if the operation is successful; returns an error code otherwise. The error
   *     codes are as follows:
   *
   *     - 88080486: The service is being initialized. Try again later.
   *
   *     - 88080488: No device access permission. Call the [usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)} API to request authorization.
   *
   *     - -1: The driver is abnormal.
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
   * Performs control transfer. This API uses a promise to return the result.
   *
   * @param { USBDevicePipe } pipe - USB device pipe. You need to call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain its value.
   * @param { USBControlParams } controlparam - Control transfer parameters. Set the parameters as required. For details, see
   *     the USB protocol.
   * @param { number } [timeout] - Timeout interval, in milliseconds. This parameter is optional. If the control transfer is
   *     complete within the specified time, the size of the transferred or received data block is returned; otherwise, a
   *     timeout error is returned. The default value is **0**, indicating that the system waits infinitely until the control
   *     transfer is complete. Set this parameter as required.
   * @returns { Promise<number> } Promise used to return the result, which is the size of the transferred or received data
   *     block if the transfer is successful. If the API call fails, the following error codes are returned:
   *
   *     - -1: The driver is abnormal.
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
   * Performs control transfer. This API uses a promise to return the result.
   *
   * @param { USBDevicePipe } pipe - USB device pipe. You need to call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain its value.
   * @param { USBDeviceRequestParams } requestparam - Control transfer parameters. Set the parameters as required. For
   *     details, see the USB protocol.
   * @param { int } [timeout] - Timeout interval.Unit: milliseconds. This parameter is optional. If the control transfer is
   *     complete within the specified time, the size of the transferred or received data block is returned; otherwise, a
   *     timeout error is returned. The default value is **0**, indicating that the system waits infinitely until the control
   *     transfer is complete. Set this parameter as required.
   * @returns { Promise<int> } Promise used to return the result, which is the size of the transferred or received data block
   *     if the transfer is successful. If the API call fails, the following error codes are returned:
   *
   *     - -1: The driver is abnormal.
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
   * Performs bulk transfer. This API uses a promise to return the result.
   *
   * > **NOTE**
   * >
   * > The total size of data (including **pipe**, **endpoint**, **buffer**, and **timeout**) to be transferred in a
   * > single bulk transfer must be less than 200 KB. Otherwise, the transfer fails and **-1** is returned.
   * >
   * > Before calling this API, call the
   * > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}
   * >  API to claim a communication interface.
   *
   * @param { USBDevicePipe } pipe - USB device pipe. You need to call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain its value.
   * @param { USBEndpoint } endpoint - USB endpoint, which is used to determine the USB interface for data transfer. You need
   *     to call [usbManager.getDevices]{@link usbManager.getDevices()} to obtain the device information list and endpoint. Wherein, **address** is used to determine
   *     the endpoint address, **direction** is used to determine the endpoint direction, and **interfaceId** is used to
   *     determine the USB interface to which the endpoint belongs. Other parameters are passed transparently.
   * @param { Uint8Array } buffer - Buffer for writing or reading data.
   * @param { int } [timeout] - Timeout interval.Unit: milliseconds. This parameter is optional. If the bulk transfer is
   *     complete within the specified time, the size of the transferred or received data block is returned; otherwise, a
   *     timeout error is returned. The default value is **0**, indicating that the system waits infinitely until the control
   *     transfer is complete. Set this parameter as required.
   * @returns { Promise<int> } Promise used to return the result, which is the size of the transferred or received data block
   *     if the transfer is successful. If the API call fails, the following error codes are returned:
   *
   *     - -1: The driver is abnormal.
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
   * Resets a USB peripheral.
   *
   * > **NOTE**
   * >
   * > Previous configurations and APIs will be reset. Ensure that the related services have been completed before
   * > calling this API.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the bus number and device address. You need
   *     to call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain its value.
   * @returns { boolean } Returns **true** if the device is reset successfully; returns **false** otherwise.
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
   * Closes a USB device pipe.
   *
   * 1. Call [usbManager.getDevices]{@link usbManager.getDevices()} to obtain the USB device list.
   * 2. Call [usbManager.requestRight]{@link usbManager.requestRight(deviceName: string)} to request the device access permission.
   * 3. Call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain **devicepipe** as an input parameter.
   *
   * @param { USBDevicePipe } pipe - USB device pipe, which is used to determine the message control channel. You need to
   *     call [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)} to obtain its value.
   * @returns { int } Returns **0** if the USB device pipe is closed successfully; returns an error code otherwise. The error
   *     codes are as follows:
   *
   *     - 22: The service is abnormal.
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
   * Checks whether the application has the permission to access the USB accessory.
   * You need to call [usbManager.getAccessoryList]{@link usbManager.getAccessoryList()} to obtain the accessory list
   * and use [USBAccessory]{@link usbManager.USBAccessory} as a parameter.
   *
   * @param { USBAccessory } accessory - USB accessory, which is obtained through
   *     [getAccessoryList]{@link usbManager.getAccessoryList()}.
   * @returns { boolean } The value **true** indicates that the application has the permission to access the USB accessory; *
   *     *false** indicates the opposite.
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
   * Requests the permission to access a USB accessory for a specified application. This API uses a promise to return
   * the result.
   * You need to call [usbManager.getAccessoryList]{@link usbManager.getAccessoryList()} to obtain the accessory list
   * and use [USBAccessory]{@link usbManager.USBAccessory} as a parameter.
   *
   * @param { USBAccessory } accessory - USB accessory, which is obtained through
   *     [getAccessoryList]{@link usbManager.getAccessoryList()}.
   * @returns { Promise<boolean> } Promise used to return the application result. The value **true** indicates that the
   *     device access permissions are granted; **false** indicates the opposite.
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
   * Cancels the permission of the current application to access USB accessories.
   * You need to call [usbManager.getAccessoryList]{@link usbManager.getAccessoryList()} to obtain the accessory list
   * and use [USBAccessory]{@link usbManager.USBAccessory} as a parameter.
   *
   * @param { USBAccessory } accessory - USB accessory, which is obtained through
   *     [getAccessoryList]{@link usbManager.getAccessoryList()}.
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
   * Obtains the list of USB accessories connected to the host.
   *
   * @returns { Array<Readonly<USBAccessory>> } List of USB accessories (read-only). Currently, only one USB accessory is
   *     contained in the list.
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
   * Obtains the accessory handle and opens the accessory file descriptor. Then, the host can communicate with the
   * accessory through the **read** and **write** APIs provided by Core File Kit.
   * You need to call [usbManager.getAccessoryList]{@link usbManager.getAccessoryList()} to obtain the accessory list
   * and use [USBAccessory]{@link usbManager.USBAccessory} as a parameter.
   *
   * @param { USBAccessory } accessory - USB accessory, which is obtained through
   *     [getAccessoryList]{@link usbManager.getAccessoryList()}.
   * @returns { USBAccessoryHandle } USB accessory handle.
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
   * Closes the accessory file descriptor.
   * You need to call [usbManager.openAccessory]{@link usbManager.openAccessory(accessory: USBAccessory)} to obtain the
   * accessory list and use [USBAccessoryHandle]{@link usbManager.USBAccessoryHandle} as a parameter.
   *
   * @param { USBAccessoryHandle } accessoryHandle - USB accessory handle, which is obtained through
   *     [openAccessory]{@link usbManager.openAccessory(accessory: USBAccessory)}.
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
   * Represents the USB endpoint from which data is sent or received. You can obtain the USB endpoint through
   * [USBInterface]{@link usbManager.USBInterface}.
   *
   * > **NOTE**
   * >
   * > The host controller schedules the endpoint based on the endpoint type.
   * >
   * > The transmission characteristics are determined by the type during protocol layer packaging.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBEndpoint {
    /**
     * Endpoint address.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    address: int;

    /**
     * Endpoint attributes.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    attributes: int;

    /**
     * Endpoint interval.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    interval: int;

    /**
     * Maximum size of data packets on the endpoint.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    maxPacketSize: int;

    /**
     * Endpoint direction.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    direction: USBRequestDirection;

    /**
     * Endpoint number.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     */
    number: number;

    /**
     * Endpoint address.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 23 static
     */
    endpointAddr: int;

    /**
     * Endpoint type. For details, see [UsbEndpointTransferType]{@link usbManager.UsbEndpointTransferType}.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    type: int;

    /**
     * Unique ID of the interface to which the endpoint belongs.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    interfaceId: int;
  }

  /**
   * Represents a USB interface. One [USBConfiguration]{@link usbManager.USBConfiguration} object can contain multiple *
   * *USBInterface** instances, each providing a specific function.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBInterface {
    /**
     * Unique ID of the USB interface.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * Interface protocol.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    protocol: int;

    /**
     * Device type.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    clazz: int;

    /**
     * Device subclass.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    subClass: int;

    /**
     * Settings for alternating between descriptors of the same USB interface. The value size indicates the number of
     * optional modes. The value 0 indicates that no optional mode is supported.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    alternateSetting: int;

    /**
     * Interface name.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Endpoints that belong to the USB interface.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    endpoints: Array<USBEndpoint>;
  }

  /**
   * Represents the USB configuration. One [USBDevice]{@link usbManager.USBDevice} can contain multiple **USBConfig**
   * instances.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBConfiguration {
    /**
     * Unique ID of the USB configuration.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * Configuration attributes.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    attributes: int;

    /**
     * Maximum power consumption.Unit: mA.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    maxPower: int;

    /**
     * Configuration name, which can be left empty.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Whether remote wakeup is supported. The value **true** indicates that the remote wakeup is supported, and **false
     * ** indicates the opposite.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    isRemoteWakeup: boolean;

    /**
     * Whether an independent power supply is supported. The value **true** indicates that an independent power supply
     * is supported, and **false** indicates the opposite.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    isSelfPowered: boolean;

    /**
     * Supported interface attributes.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    interfaces: Array<USBInterface>;
  }

  /**
   * Represents the USB device information.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBDevice {
    /**
     * Bus address.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    busNum: int;

    /**
     * Device address.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    devAddress: int;

    /**
     * Sequence number.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    serial: string;

    /**
     * Device name.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    name: string;

    /**
     * Device manufacturer.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    manufacturerName: string;

    /**
     * Product name.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    productName: string;

    /**
     * Version number.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    version: string;

    /**
     * Vendor ID.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    vendorId: int;

    /**
     * Product ID.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    productId: int;

    /**
     * Device class.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    clazz: int;

    /**
     * Device subclass.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    subClass: int;

    /**
     * Device protocol code.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    protocol: int;

    /**
     * Device configuration descriptor information.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    configs: Array<USBConfiguration>;
  }

  /**
   * Represents a USB device pipe, which is used to determine a USB device.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBDevicePipe {
    /**
     * Bus address.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    busNum: int;

    /**
     * Device address.
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
     * No function.
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
     * No function.
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
     * No function.
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
   * Enumerates USB port roles.
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBPortStatus {
    /**
     * Current USB mode.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentMode: int;

    /**
     * Current power role.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentPowerRole: int;

    /**
     * Current data role.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    currentDataRole: int;
  }

  /**
   * Represents a USB port.
   *
   * @syscap SystemCapability.USB.USBManager
   * @systemapi
   * @since 9 dynamic
   * @since 23 static
   */
  interface USBPort {
    /**
     * Unique identifier of a USB port.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    id: int;

    /**
     * Numeric mask combination for the supported mode list.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    supportedModes: PortModeType;

    /**
     * USB port role.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    status: USBPortStatus;
  }

  /**
   * Represents control transfer parameters.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 12 dynamic
   * @since 23 static
   */
  interface USBDeviceRequestParams {
    /**
     * Control request type.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    bmRequestType: int;

    /**
     * Request type.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    bRequest: int;

    /**
     * Request parameter.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wValue: int;

    /**
     * Index of the request parameter.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wIndex: int;

    /**
     * Length of the requested data.Unit: bytes.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 12 dynamic
     * @since 23 static
     */
    wLength: int;

    /**
     * Buffer for writing or reading data.
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
     * Device.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_DEVICE = 0,

    /**
     * Interface.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_INTERFACE = 1,

    /**
     * Endpoint.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TARGET_ENDPOINT = 2,

    /**
     * Other.
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
     * Standard.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_STANDARD = 0,

    /**
     * Class.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_TYPE_CLASS = 1,

    /**
     * Vendor.
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
     * Request for writing data from the host to the device.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamic
     * @since 23 static
     */
    USB_REQUEST_DIR_TO_DEVICE = 0,

    /**
     * Request for reading data from the device to the host.
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
     * No function.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NONE = 0,

    /**
     * ACM function.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ACM = 1,

    /**
     * ECM function.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    ECM = 2,

    /**
     * HDC function.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    HDC = 4,

    /**
     * Media transmission.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    MTP = 8,

    /**
     * Image transmission.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    PTP = 16,

    /**
     * Network sharing.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    RNDIS = 32,

    /**
     * MIDI function.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    MIDI = 64,

    /**
     * Audio function.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    AUDIO_SOURCE = 128,

    /**
     * NCM transmission.
     *
     * @syscap SystemCapability.USB.USBManager
     * @systemapi
     * @since 9 dynamic
     * @since 23 static
     */
    NCM = 256
  }

  /**
   * Describes the USB accessory information.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 14 dynamic
   * @since 23 static
   */
  interface USBAccessory {
    /**
     * Manufacturer of an accessory.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    manufacturer: string;

    /**
     * Product type of an accessory.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    product: string;

    /**
     * Description of an accessory.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    description: string;

    /**
     * Version of an accessory.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    version: string;

    /**
     * SN of an accessory.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 14 dynamic
     * @since 23 static
     */
    serialNumber: string;
  }

  /**
   * Describes the USB accessory handle.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 14 dynamic
   * @since 23 static
   */
  interface USBAccessoryHandle {
    /**
     * Accessory file descriptor. A valid **accessoryFd** is a positive integer.
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
     * Reports short frames as errors.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    USB_TRANSFER_SHORT_NOT_OK = 0,

    /**
     * Automatically releases the transfer buffer.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    USB_TRANSFER_FREE_BUFFER = 1,

    /**
     * Automatically transfers after the callback is complete.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    USB_TRANSFER_FREE_TRANSFER = 2,

    /**
     * Adds an additional data packet to the transfer.
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
     * Transfer completed.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_COMPLETED = 0,

    /**
     * Transfer failed.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_ERROR = 1,

    /**
     * Transfer timeout.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TIMED_OUT = 2,

    /**
     * Transfer canceled.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_CANCELED = 3,

    /**
     * Transfer stalled (at bulk/interrupt endpoint).
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_STALL = 4,

    /**
     * Device disconnected.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_NO_DEVICE = 5,

    /**
     * Data overflow.
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
     * Real-time transfer.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_ISOCHRONOUS = 0x1,

    /**
     * Performs bulk transfer.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_BULK = 0x2,

    /**
     * Interrupt transfer.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    TRANSFER_TYPE_INTERRUPT = 0x3
  }

  /**
   * Describes packet information returned in real time by the transfer callback.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  interface UsbIsoPacketDescriptor {
    /**
     * Expected length of the read or written data.Unit: bytes.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    length: int;

    /**
     * Actual length of the read or written data.Unit: bytes.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    actualLength: int;

    /**
     * Status returned by callback.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    status: UsbTransferStatus;
  }

  /**
   * As a USB data transfer interface, it is required for a client to initiate a transfer request.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  interface UsbDataTransferParams {
    /**
     * USB device pipe, which is used to determine the bus number and device address. You need to call
     * [usbManager.connectDevice]{@link usbManager.connectDevice(device: USBDevice)}to obtain its value.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    devPipe: USBDevicePipe;

    /**
     * USB transfer flag.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    flags: UsbTransferFlags;

    /**
     * Endpoint address, which is a positive integer.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    endpoint: int;

    /**
     * Transfer type.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    type: UsbEndpointTransferType;

    /**
     * Timeout duration.Unit: milliseconds.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    timeout: int;

    /**
     * Length of the data buffer.Unit: bytes. The value must be a non-negative number (expected length).
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    length: int;

    /**
     * Information returned by the callback.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    callback: AsyncCallback<SubmitTransferCallback>;

    /**
     * User data.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    userData: Uint8Array;

    /**
     * Buffer, which is used to store data for read or write requests.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    buffer: Uint8Array;

    /**
     * Number of data packets during real-time transfer, used only for I/Os with real-time transfer endpoints. The value
     *  must be a non-negative number.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    isoPacketCount: int;
  }

  /**
   * Requests a USB data transfer.
   *
   * > **NOTE**
   * >
   * > This API uses an asynchronous callback to return the result.
   * >
   * > Before calling this API, call the
   * > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}
   * >  API to claim a communication interface.
   *
   * @param { UsbDataTransferParams } transfer - As a USB data transfer interface, it is required for a client to initiate a
   *     transfer request.
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
   * Cancels an asynchronous USB data transfer request.
   *
   * > **NOTE**
   * >
   * > This API is used to proactively cancel an unfinished USB data transfer request (for example, the one submitted by
   * > **usbSubmitTransfer**).
   * > Before calling this API, call the
   * > [usbManager.claimInterface]{@link usbManager.claimInterface(pipe: USBDevicePipe, iface: USBInterface, force?: boolean)}
   * >  API to claim a communication interface.
   *
   * @param { UsbDataTransferParams } transfer - Only the [USBDevicePipe]{@link usbManager.USBDevicePipe} and
   *     [USBEndpoint]{@link usbManager.USBEndpoint} parameters should be specified in this API.
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
   * Sets the role types supported by a specified port, which can be **powerRole** (for charging) and **dataRole** (for
   * data transfer). This API uses a promise to return the result.
   *
   * @param { number } portId - Port number.
   * @param { PowerRoleType } powerRole - Role for charging.
   * @param { DataRoleType } dataRole - Role for data transfer.
   * @returns { Promise<void> } Promise used to return the result.
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
   * Transfers USB data packets in an asynchronous manner.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 18 dynamic
   * @since 23 static
   */
  interface SubmitTransferCallback {
    /**
     * Status after reading or writing is complete.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    status: UsbTransferStatus;

    /**
     * Packet information transferred in real time.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    isoPacketDescs: Array<Readonly<UsbIsoPacketDescriptor>>;

    /**
     * Actual length of the read or written data.Unit: bytes.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 18 dynamic
     * @since 23 static
     */
    actualLength: int;
  }

  /**
   * Represents control transfer parameters.
   *
   * @syscap SystemCapability.USB.USBManager
   * @since 9 dynamiconly
   * @deprecated since 18
   * @useinstead usbManager.USBDeviceRequestParams
   */
  interface USBControlParams {
    /**
     * Index of the request parameter.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    index: number;

    /**
     * Control request type.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    reqType: USBControlRequestType;

    /**
     * Request target type.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    target: USBRequestTargetType;

    /**
     * Request parameter.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    value: number;

    /**
     * Request type.
     *
     * @syscap SystemCapability.USB.USBManager
     * @since 9 dynamiconly
     * @deprecated since 18
     * @useinstead usbManager.USBDeviceRequestParams
     */
    request: number;

    /**
     * Buffer for writing or reading data.
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